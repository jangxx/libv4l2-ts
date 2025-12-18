import ref from "ref-napi";
import ref_struct from "ref-struct-di";

const StructType = ref_struct(ref);

export const time_t = ref.types.long;
export const suseconds_t = ref.types.long;
export const __kernel_old_time_t = ref.types.long;

export const timeval = StructType({
	tv_sec: time_t,
	tv_usec: suseconds_t,
});

export const timespec = StructType({
	tv_sec: __kernel_old_time_t,
	tv_nsec: ref.types.long,
});
