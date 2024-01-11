"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timespec = exports.timeval = exports.__kernel_old_time_t = exports.suseconds_t = exports.time_t = void 0;
const ref_napi_1 = __importDefault(require("ref-napi"));
const ref_struct_di_1 = __importDefault(require("ref-struct-di"));
const ref_union_di_1 = __importDefault(require("ref-union-di"));
const ref_array_di_1 = __importDefault(require("ref-array-di"));
const StructType = (0, ref_struct_di_1.default)(ref_napi_1.default);
const UnionType = (0, ref_union_di_1.default)(ref_napi_1.default);
const ArrayType = (0, ref_array_di_1.default)(ref_napi_1.default);
exports.time_t = ref_napi_1.default.types.long;
exports.suseconds_t = ref_napi_1.default.types.long;
exports.__kernel_old_time_t = ref_napi_1.default.types.long;
exports.timeval = StructType({
    tv_sec: exports.time_t,
    tv_usec: exports.suseconds_t,
});
exports.timespec = StructType({
    tv_sec: exports.__kernel_old_time_t,
    tv_nsec: ref_napi_1.default.types.long,
});
