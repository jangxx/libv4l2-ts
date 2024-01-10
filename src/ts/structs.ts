import ref, { Type } from "ref-napi";
import ref_struct from "ref-struct-di";
import ref_union from "ref-union-di";
import ref_array from "ref-array-di";

const StructType = ref_struct(ref);
const UnionType = ref_union(ref);
const ArrayType = ref_array(ref);

export const v4l2_pix_format = StructType({
	width: ref.types.uint32,
	height: ref.types.uint32,
	pixelformat: ref.types.uint32,
	field: ref.types.uint32,
	bytesperline: ref.types.uint32,
	sizeimage: ref.types.uint32,
	colorspace: ref.types.uint32,
	priv: ref.types.uint32,
	flags: ref.types.uint32,
	encoding: new UnionType({
		ycbcr_enc: ref.types.uint32,
		hsv_enc: ref.types.uint32,
	}),
	quantization: ref.types.uint32,
	xfer_func: ref.types.uint32,
});

export const v4l2_format = StructType({
	type: ref.types.uint32,
	_padding0: new ArrayType(ref.types.uint8, 4), // pad by 4 bytes to fix alignment
	fmt: new UnionType({
		pix: v4l2_pix_format,
		raw: new ArrayType(ref.types.uint8, 200),
	}),
	// blubb: RawDataType(204 - 52),
}, { });

export const v4l2_requestbuffers = StructType({
	count: ref.types.uint32,
	type: ref.types.uint32,
	memory: ref.types.uint32,
	capabilities: ref.types.uint32,
	reserved: ref.types.uint32,
});

export const time_t = ref.types.long;
export const suseconds_t = ref.types.long;

export const timeval = StructType({
	tv_sec: time_t,
	tv_usec: suseconds_t,
});

export const v4l2_timecode = StructType({
	type: ref.types.uint32,
	flags: ref.types.uint32,
	frames: ref.types.uint8,
	seconds: ref.types.uint8,
	minutes: ref.types.uint8,
	hours: ref.types.uint8,
	userbits: new ArrayType(ref.types.uint8, 4),
});

export const v4l2_plane = StructType({
	bytesused: ref.types.uint32,
	length: ref.types.uint32,
	m: new UnionType({
		mem_offset: ref.types.uint32,
		userptr: ref.types.ulong,
		fd: ref.types.int32,
	}),
	data_offset: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint8, 11),
});

export const v4l2_buffer = StructType({
	index: ref.types.uint32,
	type: ref.types.uint32,
	bytesused: ref.types.uint32,
	flags: ref.types.uint32,
	field: ref.types.uint32,
	timestamp: timeval,
	timecode: v4l2_timecode,
	sequence: ref.types.uint32,
	memory: ref.types.uint32,
	m: new UnionType({
		offset: ref.types.uint32,
		userptr: ref.types.ulong,
		planes: ref.refType(v4l2_plane),
		fd: ref.types.int32,
	}),
	length: ref.types.uint32,
	reserved2: ref.types.uint32,
	r: new UnionType({
		request_fd: ref.types.int32,
		reserved: ref.types.uint32,
	}),
});