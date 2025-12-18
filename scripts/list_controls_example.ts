import fs from "fs";
import Long from "long";
import { v4l2_ioctl, v4l2_open, disable_errors } from "../src/libv4l2";
import { ioctl, v4l2_query_ext_ctrl, V4L2_CTRL_FLAG_NEXT_CTRL } from "../src/videodev2";

const v4l2_ioctl_ = disable_errors(v4l2_ioctl);

async function main() {
	const fd = v4l2_open(
		process.argv[2] ?? "/dev/video0",
		fs.constants.O_RDWR | fs.constants.O_NONBLOCK,
	);

	const q = new v4l2_query_ext_ctrl();
	q.id = V4L2_CTRL_FLAG_NEXT_CTRL;

	while (v4l2_ioctl_(fd, ioctl.VIDIOC_QUERY_EXT_CTRL, q.ref()) == 0) {
		console.log(q.id, Buffer.from(q.name).toString("ascii"), q.type);

		q.id = new Long(q.id, 0, true).or(new Long(V4L2_CTRL_FLAG_NEXT_CTRL, 0, true)).toInt();
	}
}

main();
