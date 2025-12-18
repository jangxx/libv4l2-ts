import * as _controls from "../src/v4l2_controls";

const controls: any = _controls;

const search = Number(process.argv[2]);

let any_found = false;

for (const c_name in controls) {
	if (typeof controls[c_name] == "number" && controls[c_name] == search) {
		console.log(c_name, search);
		any_found = true;
	}
}

if (!any_found) {
	console.log("Not found");
}
