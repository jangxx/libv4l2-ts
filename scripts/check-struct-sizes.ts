import { StructType } from "ref-struct-di";
import * as videodev2 from "../src/videodev2";
import * as v4l2_common from "../src/v4l2-common";
import * as v4l2_controls from "../src/v4l2-controls";
import * as structs from "../src/structs";
const constants_native = require("../build/Release/v4l2_constants.node");

const struct_sizes = constants_native.struct_sizes as { [key: string]: number };

const all_defined_structs = {
	...videodev2,
	...v4l2_common,
	...v4l2_controls,
	...structs,
};

for (const struct_name in struct_sizes) {
	const struct = all_defined_structs[struct_name as keyof typeof all_defined_structs] as StructType;

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