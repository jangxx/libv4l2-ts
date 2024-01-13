import fs from "fs";
import { v4l2_ioctl, v4l2_open, v4l2_mmap, is_readable, v4l2_munmap, v4l2_close, is_readable_async } from "../src/libv4l2";
import {
	V4L2_PIX_FMT_RGB24,
	v4l2_buf_type,
	v4l2_memory,
	v4l2_buffer,
	v4l2_format,
	v4l2_requestbuffers,
	ioctl,
} from "../src/videodev2";
import { MAP_SHARED, PROT_READ, PROT_WRITE } from "../src/mman";
import ref from "ref-napi";

// heavily based on https://www.linuxtv.org/downloads/v4l-dvb-apis-old/v4l2grab-example.html

async function main() {
	const fd = v4l2_open("/dev/video0", fs.constants.O_RDWR | fs.constants.O_NONBLOCK);

	const fmt = new v4l2_format();
	fmt.type = v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_CAPTURE;

	fmt.fmt.pix.width = 1280;
	fmt.fmt.pix.height = 720;

	v4l2_ioctl(fd, ioctl.VIDIOC_S_FMT, fmt.ref());

	if ((fmt.fmt.pix.width !== 1280) || (fmt.fmt.pix.height !== 720)) {
		console.log(`Warning: driver is sending image at ${fmt.fmt.pix.width}x${fmt.fmt.pix.height}`);
	}

	const req = new v4l2_requestbuffers();
	req.count = 2;
	req.type = v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_CAPTURE;
	req.memory = v4l2_memory.V4L2_MEMORY_MMAP;

	v4l2_ioctl(fd, ioctl.VIDIOC_REQBUFS, req.ref());

	const buffers: Buffer[] = [];

	for (let i = 0; i < req.count; i++) {
		const buf = v4l2_buffer();
		buf.type = v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_CAPTURE;
		buf.memory = v4l2_memory.V4L2_MEMORY_MMAP;
		buf.index = i;

		v4l2_ioctl(fd, ioctl.VIDIOC_QUERYBUF, buf.ref());

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

		v4l2_ioctl(fd, ioctl.VIDIOC_QBUF, buf.ref());
	}

	const type = ref.alloc(ref.types.int32, v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_CAPTURE);

	v4l2_ioctl(fd, ioctl.VIDIOC_STREAMON, type);

	const buf = v4l2_buffer();
	for (let i = 0; i < 20; i++) {
		while(!await is_readable_async(fd, 1000)) {
			console.log("wait");
		}

		buf.ref().fill(0);
		buf.type = v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_CAPTURE;
		buf.memory = v4l2_memory.V4L2_MEMORY_MMAP;

		v4l2_ioctl(fd, ioctl.VIDIOC_DQBUF, buf.ref());

		console.log(`res: ${fmt.fmt.pix.width}x${fmt.fmt.pix.height} fmt: ${fmt.fmt.pix.pixelformat} bytes: ${buf.bytesused} buffer_index: ${buf.index}`);

		const outFile = fs.openSync(`./test/test_${Date.now()}_${i}.jpg`, "w");
		fs.writeSync(outFile, buffers[buf.index], 0, buf.bytesused);
		fs.closeSync(outFile);

		v4l2_ioctl(fd, ioctl.VIDIOC_QBUF, buf.ref());
	}

	v4l2_ioctl(fd, ioctl.VIDIOC_STREAMOFF, type);

	for (const buf of buffers) {
		v4l2_munmap(buf);
	}

	v4l2_close(fd);
}

main();