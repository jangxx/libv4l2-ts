import { StructType } from "ref-struct-di";
import * as videodev2 from "../src/ts/videodev2";
const constants_native = require("../build/Release/v4l2_constants.node");

const struct_sizes = constants_native.struct_sizes as { [key: string]: number };

for (const struct_name in struct_sizes) {
	const struct = videodev2[struct_name as keyof typeof videodev2] as StructType;

	if (struct == undefined) {
		console.log(`Struct ${struct_name} is missing!`);
		continue;
	}

	if (struct.size !== struct_sizes[struct_name]) {
		console.log(`Error: ${struct_name} doesn't match! (${struct.size} != ${struct_sizes[struct_name]})`);
	} else {
		console.log(`Ok: ${struct_name} matches (${struct.size} == ${struct_sizes[struct_name]})`);
	}
}