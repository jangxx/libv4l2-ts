import fs from "fs";
import { v4l2_ioctl, v4l2_open, constants, v4l2_mmap, is_readable, v4l2_munmap, v4l2_close } from "./src/ts";
import { v4l2_buffer, v4l2_format, v4l2_pix_format, v4l2_requestbuffers } from "./src/ts/structs";
import { V4L2_PIX_FMT_RGB24, v4l2_buf_type, v4l2_field, v4l2_memory } from "./src/ts/defines";
import { MAP_SHARED, PROT_READ, PROT_WRITE } from "./src/ts/mman";
import ref from "ref-napi";

const fd = v4l2_open("/dev/video0", fs.constants.O_RDWR | fs.constants.O_NONBLOCK);

const fmt = new v4l2_format();
fmt.type = v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_CAPTURE;

fmt.fmt.pix.width = 1920;
fmt.fmt.pix.height = 1080;
fmt.fmt.pix.pixelformat = V4L2_PIX_FMT_RGB24;

console.log(fmt.ref().toString("hex"));
console.log(ref.address(fmt.ref()));

v4l2_ioctl(fd, constants.ioctl.VIDIOC_S_FMT, fmt.ref());

console.log(fmt.ref().toString("hex"));
console.log(ref.address(fmt.ref()));

if (fmt.fmt.pix.pixelformat !== V4L2_PIX_FMT_RGB24) {
	console.log("Libv4l didn't accept RGB24 format. Can't proceed.");
}
if ((fmt.fmt.pix.width !== 640) || (fmt.fmt.pix.height !== 480)) {
	console.log(`Warning: driver is sending image at ${fmt.fmt.pix.width}x${fmt.fmt.pix.height}`);
}

const req = new v4l2_requestbuffers();
req.count = 2;
req.type = v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_CAPTURE;
req.memory = v4l2_memory.V4L2_MEMORY_MMAP;

v4l2_ioctl(fd, constants.ioctl.VIDIOC_REQBUFS, req.ref());

const buffers: Buffer[] = [];

for (let i = 0; i < req.count; i++) {
	const buf = v4l2_buffer();
	buf.type = v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_CAPTURE;
	buf.memory = v4l2_memory.V4L2_MEMORY_MMAP;
	buf.index = i;

	v4l2_ioctl(fd, constants.ioctl.VIDIOC_QUERYBUF, buf.ref());

	buffers.push(v4l2_mmap(
		buf.length,
		PROT_READ | PROT_WRITE,
		MAP_SHARED,
		fd,
		buf.m.offset,
	));
}

for (let i = 0; i < buffers.length; i++) {
	const buf = v4l2_buffer();
	buf.type = v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_CAPTURE;
	buf.memory = v4l2_memory.V4L2_MEMORY_MMAP;
	buf.index = i;

	v4l2_ioctl(fd, constants.ioctl.VIDIOC_QBUF, buf.ref());
}

const type = ref.alloc(ref.types.int32, v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_CAPTURE);

v4l2_ioctl(fd, constants.ioctl.VIDIOC_STREAMON, type);

const buf = v4l2_buffer();
for (let i = 0; i < 20; i++) {
	while(!is_readable(fd, 1000)) {
		console.log("wait");
	}

	buf.ref().fill(0);
	buf.type = v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_CAPTURE;
	buf.memory = v4l2_memory.V4L2_MEMORY_MMAP;

	v4l2_ioctl(fd, constants.ioctl.VIDIOC_DQBUF, buf.ref());

	console.log(`${fmt.fmt.pix.width}x${fmt.fmt.pix.height} ${fmt.fmt.pix.pixelformat} ${fmt.fmt.pix.field} ${buf.bytesused} ${buf.index}`);

	const outFile = fs.openSync(`./test/test_${Date.now()}_${i}.ppm`, "w");
	fs.writeSync(outFile, buffers[buf.index], 0, buf.bytesused);
	fs.closeSync(outFile);

	v4l2_ioctl(fd, constants.ioctl.VIDIOC_QBUF, buf.ref());
}

v4l2_ioctl(fd, constants.ioctl.VIDIOC_STREAMOFF, type);

for (const buf of buffers) {
	v4l2_munmap(buf);
}

v4l2_close(fd);