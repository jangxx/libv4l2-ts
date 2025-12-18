import fs from "fs";
import { v4l2_open, v4l2_set_control, v4l2_get_control } from "../src/libv4l2";
import { V4L2_CID_BRIGHTNESS } from "../src/v4l2_controls";

async function main() {
	const fd = v4l2_open(
		process.argv[2] ?? "/dev/video0",
		fs.constants.O_RDWR | fs.constants.O_NONBLOCK,
	);

	const control_value = Number(process.argv[3] ?? 0);

	const current_value = v4l2_get_control(fd, V4L2_CID_BRIGHTNESS);
	console.log("Current value:", current_value);

	console.log("Setting value to:", control_value);
	v4l2_set_control(fd, V4L2_CID_BRIGHTNESS, control_value);

	const final_value = v4l2_get_control(fd, V4L2_CID_BRIGHTNESS);
	console.log("Final value:", final_value);
}

main();
