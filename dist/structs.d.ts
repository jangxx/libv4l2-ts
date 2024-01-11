import ref from "ref-napi";
import ref_struct from "ref-struct-di";
export declare const time_t: ref.Type<string | number>;
export declare const suseconds_t: ref.Type<string | number>;
export declare const __kernel_old_time_t: ref.Type<string | number>;
export declare const timeval: ref_struct.StructType<{
    tv_sec: ref.Type<string | number>;
    tv_usec: ref.Type<string | number>;
}>;
export declare const timespec: ref_struct.StructType<{
    tv_sec: ref.Type<string | number>;
    tv_nsec: ref.Type<string | number>;
}>;
