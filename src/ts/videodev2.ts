/** copied and slightly adapted from videodev2.h */

import ref, { Type } from "ref-napi";
import ref_struct from "ref-struct-di";
import ref_union from "ref-union-di";
import ref_array from "ref-array-di";

const constants_native = require("../../build/Release/v4l2_constants.node");

const StructType = ref_struct(ref);
const UnionType = ref_union(ref);
const ArrayType = ref_array(ref);

/*
 * Common stuff for both V4L1 and V4L2
 * Moved from videodev.h
 */
export const VIDEO_MAX_FRAME = 32;
export const VIDEO_MAX_PLANES = 8;

/*
 *	M I S C E L L A N E O U S
 */

import { v4l2_fourcc } from "./libv4l2";
import { timespec, timeval } from "./structs";

function v4l2_fourcc_be(a: string, b: string, c: string, d: string) {
	return v4l2_fourcc(a, b, c, d) | (1 << 31);
}

export enum v4l2_field {
	V4L2_FIELD_ANY           = 0, /* driver can choose from none,
					 top, bottom, interlaced
					 depending on whatever it thinks
					 is approximate ... */
	V4L2_FIELD_NONE          = 1, /* this device has no fields ... */
	V4L2_FIELD_TOP           = 2, /* top field only */
	V4L2_FIELD_BOTTOM        = 3, /* bottom field only */
	V4L2_FIELD_INTERLACED    = 4, /* both fields interlaced */
	V4L2_FIELD_SEQ_TB        = 5, /* both fields sequential into one
					 buffer, top-bottom order */
	V4L2_FIELD_SEQ_BT        = 6, /* same as above + bottom-top order */
	V4L2_FIELD_ALTERNATE     = 7, /* both fields alternating into
					 separate buffers */
	V4L2_FIELD_INTERLACED_TB = 8, /* both fields interlaced, top field
					 first and the top field is
					 transmitted first */
	V4L2_FIELD_INTERLACED_BT = 9, /* both fields interlaced, top field
					 first and the bottom field is
					 transmitted first */
};

export function V4L2_FIELD_HAS_TOP(field: v4l2_field): boolean {
	return (
	  field === v4l2_field.V4L2_FIELD_TOP ||
	  field === v4l2_field.V4L2_FIELD_INTERLACED ||
	  field === v4l2_field.V4L2_FIELD_INTERLACED_TB ||
	  field === v4l2_field.V4L2_FIELD_INTERLACED_BT ||
	  field === v4l2_field.V4L2_FIELD_SEQ_TB ||
	  field === v4l2_field.V4L2_FIELD_SEQ_BT
	);
  }
  
export function V4L2_FIELD_HAS_BOTTOM(field: v4l2_field): boolean {
	return (
		field === v4l2_field.V4L2_FIELD_BOTTOM ||
		field === v4l2_field.V4L2_FIELD_INTERLACED ||
		field === v4l2_field.V4L2_FIELD_INTERLACED_TB ||
		field === v4l2_field.V4L2_FIELD_INTERLACED_BT ||
		field === v4l2_field.V4L2_FIELD_SEQ_TB ||
		field === v4l2_field.V4L2_FIELD_SEQ_BT
	);
}

export function V4L2_FIELD_HAS_BOTH(field: v4l2_field): boolean {
	return (
		field === v4l2_field.V4L2_FIELD_INTERLACED ||
		field === v4l2_field.V4L2_FIELD_INTERLACED_TB ||
		field === v4l2_field.V4L2_FIELD_INTERLACED_BT ||
		field === v4l2_field.V4L2_FIELD_SEQ_TB ||
		field === v4l2_field.V4L2_FIELD_SEQ_BT
	);
}

export function V4L2_FIELD_HAS_T_OR_B(field: v4l2_field): boolean {
	return (
		field === v4l2_field.V4L2_FIELD_BOTTOM ||
		field === v4l2_field.V4L2_FIELD_TOP ||
		field === v4l2_field.V4L2_FIELD_ALTERNATE
	);
}

export function V4L2_FIELD_IS_INTERLACED(field: v4l2_field): boolean {
	return (
		field === v4l2_field.V4L2_FIELD_INTERLACED ||
		field === v4l2_field.V4L2_FIELD_INTERLACED_TB ||
		field === v4l2_field.V4L2_FIELD_INTERLACED_BT
	);
}

export function V4L2_FIELD_IS_SEQUENTIAL(field: v4l2_field): boolean {
	return (
		field === v4l2_field.V4L2_FIELD_SEQ_TB ||
		field === v4l2_field.V4L2_FIELD_SEQ_BT
	);
}

export enum v4l2_buf_type {
	V4L2_BUF_TYPE_VIDEO_CAPTURE        = 1,
	V4L2_BUF_TYPE_VIDEO_OUTPUT         = 2,
	V4L2_BUF_TYPE_VIDEO_OVERLAY        = 3,
	V4L2_BUF_TYPE_VBI_CAPTURE          = 4,
	V4L2_BUF_TYPE_VBI_OUTPUT           = 5,
	V4L2_BUF_TYPE_SLICED_VBI_CAPTURE   = 6,
	V4L2_BUF_TYPE_SLICED_VBI_OUTPUT    = 7,
	V4L2_BUF_TYPE_VIDEO_OUTPUT_OVERLAY = 8,
	V4L2_BUF_TYPE_VIDEO_CAPTURE_MPLANE = 9,
	V4L2_BUF_TYPE_VIDEO_OUTPUT_MPLANE  = 10,
	V4L2_BUF_TYPE_SDR_CAPTURE          = 11,
	V4L2_BUF_TYPE_SDR_OUTPUT           = 12,
	V4L2_BUF_TYPE_META_CAPTURE         = 13,
	V4L2_BUF_TYPE_META_OUTPUT	   = 14,
	/* Deprecated, do not use */
	V4L2_BUF_TYPE_PRIVATE              = 0x80,
};

export function V4L2_TYPE_IS_MULTIPLANAR(type: v4l2_buf_type): boolean {
	return (
		type === v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_CAPTURE_MPLANE ||
		type === v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_OUTPUT_MPLANE
	);
}

export function V4L2_TYPE_IS_OUTPUT(type: v4l2_buf_type): boolean {
	return (
		type === v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_OUTPUT ||
		type === v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_OUTPUT_MPLANE ||
		type === v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_OVERLAY ||
		type === v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_OUTPUT_OVERLAY ||
		type === v4l2_buf_type.V4L2_BUF_TYPE_VBI_OUTPUT ||
		type === v4l2_buf_type.V4L2_BUF_TYPE_SLICED_VBI_OUTPUT ||
		type === v4l2_buf_type.V4L2_BUF_TYPE_SDR_OUTPUT ||
		type === v4l2_buf_type.V4L2_BUF_TYPE_META_OUTPUT
	);
}

export function V4L2_TYPE_IS_CAPTURE(type: v4l2_buf_type): boolean {
	return !V4L2_TYPE_IS_OUTPUT(type);
}

export enum v4l2_tuner_type {
	V4L2_TUNER_RADIO	     = 1,
	V4L2_TUNER_ANALOG_TV	     = 2,
	V4L2_TUNER_DIGITAL_TV	     = 3,
	V4L2_TUNER_SDR               = 4,
	V4L2_TUNER_RF                = 5,
};

export enum v4l2_memory {
	V4L2_MEMORY_MMAP             = 1,
	V4L2_MEMORY_USERPTR          = 2,
	V4L2_MEMORY_OVERLAY          = 3,
	V4L2_MEMORY_DMABUF           = 4,
};

/* see also http://vektor.theorem.ca/graphics/ycbcr/ */
export enum v4l2_colorspace {
	/*
	 * Default colorspace, i.e. let the driver figure it out.
	 * Can only be used with video capture.
	 */
	V4L2_COLORSPACE_DEFAULT       = 0,

	/* SMPTE 170M: used for broadcast NTSC/PAL SDTV */
	V4L2_COLORSPACE_SMPTE170M     = 1,

	/* Obsolete pre-1998 SMPTE 240M HDTV standard, superseded by Rec 709 */
	V4L2_COLORSPACE_SMPTE240M     = 2,

	/* Rec.709: used for HDTV */
	V4L2_COLORSPACE_REC709        = 3,

	/*
	 * Deprecated, do not use. No driver will ever return this. This was
	 * based on a misunderstanding of the bt878 datasheet.
	 */
	V4L2_COLORSPACE_BT878         = 4,

	/*
	 * NTSC 1953 colorspace. This only makes sense when dealing with
	 * really, really old NTSC recordings. Superseded by SMPTE 170M.
	 */
	V4L2_COLORSPACE_470_SYSTEM_M  = 5,

	/*
	 * EBU Tech 3213 PAL/SECAM colorspace.
	 */
	V4L2_COLORSPACE_470_SYSTEM_BG = 6,

	/*
	 * Effectively shorthand for V4L2_COLORSPACE_SRGB, V4L2_YCBCR_ENC_601
	 * and V4L2_QUANTIZATION_FULL_RANGE. To be used for (Motion-)JPEG.
	 */
	V4L2_COLORSPACE_JPEG          = 7,

	/* For RGB colorspaces such as produces by most webcams. */
	V4L2_COLORSPACE_SRGB          = 8,

	/* opRGB colorspace */
	V4L2_COLORSPACE_OPRGB         = 9,

	/* BT.2020 colorspace, used for UHDTV. */
	V4L2_COLORSPACE_BT2020        = 10,

	/* Raw colorspace: for RAW unprocessed images */
	V4L2_COLORSPACE_RAW           = 11,

	/* DCI-P3 colorspace, used by cinema projectors */
	V4L2_COLORSPACE_DCI_P3        = 12,
};

export function V4L2_MAP_COLORSPACE_DEFAULT(is_sdtv: boolean, is_hdtv: boolean) {
	return ((is_sdtv) ? v4l2_colorspace.V4L2_COLORSPACE_SMPTE170M :
		((is_hdtv) ? v4l2_colorspace.V4L2_COLORSPACE_REC709 : v4l2_colorspace.V4L2_COLORSPACE_SRGB));
}

export enum v4l2_xfer_func {
	/*
	 * Mapping of V4L2_XFER_FUNC_DEFAULT to actual transfer functions
	 * for the various colorspaces:
	 *
	 * V4L2_COLORSPACE_SMPTE170M, V4L2_COLORSPACE_470_SYSTEM_M,
	 * V4L2_COLORSPACE_470_SYSTEM_BG, V4L2_COLORSPACE_REC709 and
	 * V4L2_COLORSPACE_BT2020: V4L2_XFER_FUNC_709
	 *
	 * V4L2_COLORSPACE_SRGB, V4L2_COLORSPACE_JPEG: V4L2_XFER_FUNC_SRGB
	 *
	 * V4L2_COLORSPACE_OPRGB: V4L2_XFER_FUNC_OPRGB
	 *
	 * V4L2_COLORSPACE_SMPTE240M: V4L2_XFER_FUNC_SMPTE240M
	 *
	 * V4L2_COLORSPACE_RAW: V4L2_XFER_FUNC_NONE
	 *
	 * V4L2_COLORSPACE_DCI_P3: V4L2_XFER_FUNC_DCI_P3
	 */
	V4L2_XFER_FUNC_DEFAULT     = 0,
	V4L2_XFER_FUNC_709         = 1,
	V4L2_XFER_FUNC_SRGB        = 2,
	V4L2_XFER_FUNC_OPRGB       = 3,
	V4L2_XFER_FUNC_SMPTE240M   = 4,
	V4L2_XFER_FUNC_NONE        = 5,
	V4L2_XFER_FUNC_DCI_P3      = 6,
	V4L2_XFER_FUNC_SMPTE2084   = 7,
};

/*
 * Determine how XFER_FUNC_DEFAULT should map to a proper transfer function.
 * This depends on the colorspace.
 */
export function V4L2_MAP_XFER_FUNC_DEFAULT(colsp: v4l2_colorspace): v4l2_xfer_func {
	return (
	  colsp === v4l2_colorspace.V4L2_COLORSPACE_OPRGB
		? v4l2_xfer_func.V4L2_XFER_FUNC_OPRGB
		: colsp === v4l2_colorspace.V4L2_COLORSPACE_SMPTE240M
		? v4l2_xfer_func.V4L2_XFER_FUNC_SMPTE240M
		: colsp === v4l2_colorspace.V4L2_COLORSPACE_DCI_P3
		? v4l2_xfer_func.V4L2_XFER_FUNC_DCI_P3
		: colsp === v4l2_colorspace.V4L2_COLORSPACE_RAW
		? v4l2_xfer_func.V4L2_XFER_FUNC_NONE
		: colsp === v4l2_colorspace.V4L2_COLORSPACE_SRGB ||
		  colsp === v4l2_colorspace.V4L2_COLORSPACE_JPEG
		? v4l2_xfer_func.V4L2_XFER_FUNC_SRGB
		: v4l2_xfer_func.V4L2_XFER_FUNC_709
	);
  }

export enum v4l2_ycbcr_encoding {
	/*
	 * Mapping of V4L2_YCBCR_ENC_DEFAULT to actual encodings for the
	 * various colorspaces:
	 *
	 * V4L2_COLORSPACE_SMPTE170M, V4L2_COLORSPACE_470_SYSTEM_M,
	 * V4L2_COLORSPACE_470_SYSTEM_BG, V4L2_COLORSPACE_SRGB,
	 * V4L2_COLORSPACE_OPRGB and V4L2_COLORSPACE_JPEG: V4L2_YCBCR_ENC_601
	 *
	 * V4L2_COLORSPACE_REC709 and V4L2_COLORSPACE_DCI_P3: V4L2_YCBCR_ENC_709
	 *
	 * V4L2_COLORSPACE_BT2020: V4L2_YCBCR_ENC_BT2020
	 *
	 * V4L2_COLORSPACE_SMPTE240M: V4L2_YCBCR_ENC_SMPTE240M
	 */
	V4L2_YCBCR_ENC_DEFAULT        = 0,

	/* ITU-R 601 -- SDTV */
	V4L2_YCBCR_ENC_601            = 1,

	/* Rec. 709 -- HDTV */
	V4L2_YCBCR_ENC_709            = 2,

	/* ITU-R 601/EN 61966-2-4 Extended Gamut -- SDTV */
	V4L2_YCBCR_ENC_XV601          = 3,

	/* Rec. 709/EN 61966-2-4 Extended Gamut -- HDTV */
	V4L2_YCBCR_ENC_XV709          = 4,

	/*
	 * sYCC (Y'CbCr encoding of sRGB), identical to ENC_601. It was added
	 * originally due to a misunderstanding of the sYCC standard. It should
	 * not be used, instead use V4L2_YCBCR_ENC_601.
	 */
	V4L2_YCBCR_ENC_SYCC           = 5,

	/* BT.2020 Non-constant Luminance Y'CbCr */
	V4L2_YCBCR_ENC_BT2020         = 6,

	/* BT.2020 Constant Luminance Y'CbcCrc */
	V4L2_YCBCR_ENC_BT2020_CONST_LUM = 7,

	/* SMPTE 240M -- Obsolete HDTV */
	V4L2_YCBCR_ENC_SMPTE240M      = 8,
};

/*
 * enum v4l2_hsv_encoding values should not collide with the ones from
 * enum v4l2_ycbcr_encoding.
 */
export enum v4l2_hsv_encoding {

	/* Hue mapped to 0 - 179 */
	V4L2_HSV_ENC_180		= 128,

	/* Hue mapped to 0-255 */
	V4L2_HSV_ENC_256		= 129,
};

export function V4L2_MAP_YCBCR_ENC_DEFAULT(colsp: v4l2_colorspace): v4l2_ycbcr_encoding {
	return (
	  (colsp === v4l2_colorspace.V4L2_COLORSPACE_REC709 ||
		colsp === v4l2_colorspace.V4L2_COLORSPACE_DCI_P3)
		? v4l2_ycbcr_encoding.V4L2_YCBCR_ENC_709
		: colsp === v4l2_colorspace.V4L2_COLORSPACE_BT2020
		? v4l2_ycbcr_encoding.V4L2_YCBCR_ENC_BT2020
		: colsp === v4l2_colorspace.V4L2_COLORSPACE_SMPTE240M
		? v4l2_ycbcr_encoding.V4L2_YCBCR_ENC_SMPTE240M
		: v4l2_ycbcr_encoding.V4L2_YCBCR_ENC_601
	);
  }

export enum v4l2_quantization {
	/*
	 * The default for R'G'B' quantization is always full range.
	 * For Y'CbCr the quantization is always limited range, except
	 * for COLORSPACE_JPEG: this is full range.
	 */
	V4L2_QUANTIZATION_DEFAULT     = 0,
	V4L2_QUANTIZATION_FULL_RANGE  = 1,
	V4L2_QUANTIZATION_LIM_RANGE   = 2,
};

/*
 * Determine how QUANTIZATION_DEFAULT should map to a proper quantization.
 * This depends on whether the image is RGB or not, the colorspace.
 * The Y'CbCr encoding is not used anymore, but is still there for backwards
 * compatibility.
 */
export function V4L2_MAP_QUANTIZATION_DEFAULT(
	is_rgb_or_hsv: boolean,
	colsp: v4l2_colorspace,
): v4l2_quantization {
	return (
		(is_rgb_or_hsv || colsp === v4l2_colorspace.V4L2_COLORSPACE_JPEG)
		? v4l2_quantization.V4L2_QUANTIZATION_FULL_RANGE
		: v4l2_quantization.V4L2_QUANTIZATION_LIM_RANGE
	);
}

export enum v4l2_priority {
	V4L2_PRIORITY_UNSET       = 0,  /* not initialized */
	V4L2_PRIORITY_BACKGROUND  = 1,
	V4L2_PRIORITY_INTERACTIVE = 2,
	V4L2_PRIORITY_RECORD      = 3,
	V4L2_PRIORITY_DEFAULT     = V4L2_PRIORITY_INTERACTIVE,
};

export const v4l2_rect = StructType({
	left: ref.types.int32,
	top: ref.types.int32,
	width: ref.types.uint32,
	height: ref.types.uint32,
});

export const v4l2_fract = StructType({
	numerator: ref.types.uint32,
	denominator: ref.types.uint32,
});

export const v4l2_area = StructType({
	width: ref.types.uint32,
	height: ref.types.uint32,
});

export const v4l2_capability = StructType({
	driver: new ArrayType(ref.types.uint8, 16),
	card: new ArrayType(ref.types.uint8, 32),
	bus_info: new ArrayType(ref.types.uint8, 32),
	version: ref.types.uint32,
	capabilities: ref.types.uint32,
	device_caps: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 3),
});

/* Values for 'capabilities' field */
export const V4L2_CAP_VIDEO_CAPTURE = 0x00000001;  /* Is a video capture device */
export const V4L2_CAP_VIDEO_OUTPUT = 0x00000002;  /* Is a video output device */
export const V4L2_CAP_VIDEO_OVERLAY = 0x00000004;  /* Can do video overlay */
export const V4L2_CAP_VBI_CAPTURE = 0x00000010;  /* Is a raw VBI capture device */
export const V4L2_CAP_VBI_OUTPUT = 0x00000020;  /* Is a raw VBI output device */
export const V4L2_CAP_SLICED_VBI_CAPTURE = 0x00000040;  /* Is a sliced VBI capture device */
export const V4L2_CAP_SLICED_VBI_OUTPUT = 0x00000080;  /* Is a sliced VBI output device */
export const V4L2_CAP_RDS_CAPTURE = 0x00000100;  /* RDS data capture */
export const V4L2_CAP_VIDEO_OUTPUT_OVERLAY = 0x00000200;  /* Can do video output overlay */
export const V4L2_CAP_HW_FREQ_SEEK = 0x00000400;  /* Can do hardware frequency seek  */
export const V4L2_CAP_RDS_OUTPUT = 0x00000800;  /* Is an RDS encoder */

/* Is a video capture device that supports multiplanar formats */
export const V4L2_CAP_VIDEO_CAPTURE_MPLANE = 0x00001000;
/* Is a video output device that supports multiplanar formats */
export const V4L2_CAP_VIDEO_OUTPUT_MPLANE = 0x00002000;
/* Is a video mem-to-mem device that supports multiplanar formats */
export const V4L2_CAP_VIDEO_M2M_MPLANE = 0x00004000;
/* Is a video mem-to-mem device */
export const V4L2_CAP_VIDEO_M2M = 0x00008000;

export const V4L2_CAP_TUNER = 0x00010000;  /* has a tuner */
export const V4L2_CAP_AUDIO = 0x00020000;  /* has audio support */
export const V4L2_CAP_RADIO = 0x00040000;  /* is a radio device */
export const V4L2_CAP_MODULATOR = 0x00080000;  /* has a modulator */

export const V4L2_CAP_SDR_CAPTURE = 0x00100000;  /* Is a SDR capture device */
export const V4L2_CAP_EXT_PIX_FORMAT = 0x00200000;  /* Supports the extended pixel format */
export const V4L2_CAP_SDR_OUTPUT = 0x00400000;  /* Is a SDR output device */
export const V4L2_CAP_META_CAPTURE = 0x00800000;  /* Is a metadata capture device */

export const V4L2_CAP_READWRITE = 0x01000000;  /* read/write systemcalls */
export const V4L2_CAP_ASYNCIO = 0x02000000;  /* async I/O */
export const V4L2_CAP_STREAMING = 0x04000000;  /* streaming I/O ioctls */
export const V4L2_CAP_META_OUTPUT = 0x08000000;  /* Is a metadata output device */

export const V4L2_CAP_TOUCH = 0x10000000;  /* Is a touch device */

export const V4L2_CAP_IO_MC = 0x20000000;  /* Is input/output controlled by the media controller */

export const V4L2_CAP_DEVICE_CAPS = 0x80000000;  /* sets device capabilities field */

/*
 *	V I D E O   I M A G E   F O R M A T
 */

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

/*      Pixel format         FOURCC                          depth  Description  */

/* RGB formats (1 or 2 bytes per pixel) */
export const V4L2_PIX_FMT_RGB332 = v4l2_fourcc('R', 'G', 'B', '1'); /*  8  RGB-3-3-2     */
export const V4L2_PIX_FMT_RGB444 = v4l2_fourcc('R', '4', '4', '4'); /* 16  xxxxrrrr ggggbbbb */
export const V4L2_PIX_FMT_ARGB444 = v4l2_fourcc('A', 'R', '1', '2'); /* 16  aaaarrrr ggggbbbb */
export const V4L2_PIX_FMT_XRGB444 = v4l2_fourcc('X', 'R', '1', '2'); /* 16  xxxxrrrr ggggbbbb */
export const V4L2_PIX_FMT_RGBA444 = v4l2_fourcc('R', 'A', '1', '2'); /* 16  rrrrgggg bbbbaaaa */
export const V4L2_PIX_FMT_RGBX444 = v4l2_fourcc('R', 'X', '1', '2'); /* 16  rrrrgggg bbbbxxxx */
export const V4L2_PIX_FMT_ABGR444 = v4l2_fourcc('A', 'B', '1', '2'); /* 16  aaaabbbb ggggrrrr */
export const V4L2_PIX_FMT_XBGR444 = v4l2_fourcc('X', 'B', '1', '2'); /* 16  xxxxbbbb ggggrrrr */
export const V4L2_PIX_FMT_BGRA444 = v4l2_fourcc('G', 'A', '1', '2'); /* 16  bbbbgggg rrrraaaa */
export const V4L2_PIX_FMT_BGRX444 = v4l2_fourcc('B', 'X', '1', '2'); /* 16  bbbbgggg rrrrxxxx */
export const V4L2_PIX_FMT_RGB555 = v4l2_fourcc('R', 'G', 'B', 'O'); /* 16  RGB-5-5-5     */
export const V4L2_PIX_FMT_ARGB555 = v4l2_fourcc('A', 'R', '1', '5'); /* 16  ARGB-1-5-5-5  */
export const V4L2_PIX_FMT_XRGB555 = v4l2_fourcc('X', 'R', '1', '5'); /* 16  XRGB-1-5-5-5  */
export const V4L2_PIX_FMT_RGBA555 = v4l2_fourcc('R', 'A', '1', '5'); /* 16  RGBA-5-5-5-1  */
export const V4L2_PIX_FMT_RGBX555 = v4l2_fourcc('R', 'X', '1', '5'); /* 16  RGBX-5-5-5-1  */
export const V4L2_PIX_FMT_ABGR555 = v4l2_fourcc('A', 'B', '1', '5'); /* 16  ABGR-1-5-5-5  */
export const V4L2_PIX_FMT_XBGR555 = v4l2_fourcc('X', 'B', '1', '5'); /* 16  XBGR-1-5-5-5  */
export const V4L2_PIX_FMT_BGRA555 = v4l2_fourcc('B', 'A', '1', '5'); /* 16  BGRA-5-5-5-1  */
export const V4L2_PIX_FMT_BGRX555 = v4l2_fourcc('B', 'X', '1', '5'); /* 16  BGRX-5-5-5-1  */
export const V4L2_PIX_FMT_RGB565 = v4l2_fourcc('R', 'G', 'B', 'P'); /* 16  RGB-5-6-5     */
export const V4L2_PIX_FMT_RGB555X = v4l2_fourcc('R', 'G', 'B', 'Q'); /* 16  RGB-5-5-5 BE  */
export const V4L2_PIX_FMT_ARGB555X = v4l2_fourcc_be('A', 'R', '1', '5'); /* 16  ARGB-5-5-5 BE */
export const V4L2_PIX_FMT_XRGB555X = v4l2_fourcc_be('X', 'R', '1', '5'); /* 16  XRGB-5-5-5 BE */
export const V4L2_PIX_FMT_RGB565X = v4l2_fourcc('R', 'G', 'B', 'R'); /* 16  RGB-5-6-5 BE  */

/* RGB formats (3 or 4 bytes per pixel) */
export const V4L2_PIX_FMT_BGR666 = v4l2_fourcc('B', 'G', 'R', 'H'); /* 18  BGR-6-6-6	  */
export const V4L2_PIX_FMT_BGR24 = v4l2_fourcc('B', 'G', 'R', '3'); /* 24  BGR-8-8-8     */
export const V4L2_PIX_FMT_RGB24 = v4l2_fourcc('R', 'G', 'B', '3'); /* 24  RGB-8-8-8     */
export const V4L2_PIX_FMT_BGR32 = v4l2_fourcc('B', 'G', 'R', '4'); /* 32  BGR-8-8-8-8   */
export const V4L2_PIX_FMT_ABGR32 = v4l2_fourcc('A', 'R', '2', '4'); /* 32  BGRA-8-8-8-8  */
export const V4L2_PIX_FMT_XBGR32 = v4l2_fourcc('X', 'R', '2', '4'); /* 32  BGRX-8-8-8-8  */
export const V4L2_PIX_FMT_BGRA32 = v4l2_fourcc('R', 'A', '2', '4'); /* 32  ABGR-8-8-8-8  */
export const V4L2_PIX_FMT_BGRX32 = v4l2_fourcc('R', 'X', '2', '4'); /* 32  XBGR-8-8-8-8  */
export const V4L2_PIX_FMT_RGB32 = v4l2_fourcc('R', 'G', 'B', '4'); /* 32  RGB-8-8-8-8   */
export const V4L2_PIX_FMT_RGBA32 = v4l2_fourcc('A', 'B', '2', '4'); /* 32  RGBA-8-8-8-8  */
export const V4L2_PIX_FMT_RGBX32 = v4l2_fourcc('X', 'B', '2', '4'); /* 32  RGBX-8-8-8-8  */
export const V4L2_PIX_FMT_ARGB32 = v4l2_fourcc('B', 'A', '2', '4'); /* 32  ARGB-8-8-8-8  */
export const V4L2_PIX_FMT_XRGB32 = v4l2_fourcc('B', 'X', '2', '4'); /* 32  XRGB-8-8-8-8  */

/* Grey formats */
export const V4L2_PIX_FMT_GREY = v4l2_fourcc('G', 'R', 'E', 'Y'); /*  8  Greyscale     */
export const V4L2_PIX_FMT_Y4 = v4l2_fourcc('Y', '0', '4', ' '); /*  4  Greyscale     */
export const V4L2_PIX_FMT_Y6 = v4l2_fourcc('Y', '0', '6', ' '); /*  6  Greyscale     */
export const V4L2_PIX_FMT_Y10 = v4l2_fourcc('Y', '1', '0', ' '); /* 10  Greyscale     */
export const V4L2_PIX_FMT_Y12 = v4l2_fourcc('Y', '1', '2', ' '); /* 12  Greyscale     */
export const V4L2_PIX_FMT_Y14 = v4l2_fourcc('Y', '1', '4', ' '); /* 14  Greyscale     */
export const V4L2_PIX_FMT_Y16 = v4l2_fourcc('Y', '1', '6', ' '); /* 16  Greyscale     */
export const V4L2_PIX_FMT_Y16_BE = v4l2_fourcc_be('Y', '1', '6', ' '); /* 16  Greyscale BE  */

/* Grey bit-packed formats */
export const V4L2_PIX_FMT_Y10BPACK = v4l2_fourcc('Y', '1', '0', 'B'); /* 10  Greyscale bit-packed */
export const V4L2_PIX_FMT_Y10P = v4l2_fourcc('Y', '1', '0', 'P'); /* 10  Greyscale, MIPI RAW10 packed */

/* Palette formats */
export const V4L2_PIX_FMT_PAL8 = v4l2_fourcc('P', 'A', 'L', '8'); /*  8  8-bit palette */

/* Chrominance formats */
export const V4L2_PIX_FMT_UV8 = v4l2_fourcc('U', 'V', '8', ' '); /*  8  UV 4:4 */

/* Luminance+Chrominance formats */
export const V4L2_PIX_FMT_YUYV = v4l2_fourcc('Y', 'U', 'Y', 'V'); /* 16  YUV 4:2:2     */
export const V4L2_PIX_FMT_YYUV = v4l2_fourcc('Y', 'Y', 'U', 'V'); /* 16  YUV 4:2:2     */
export const V4L2_PIX_FMT_YVYU = v4l2_fourcc('Y', 'V', 'Y', 'U'); /* 16 YVU 4:2:2 */
export const V4L2_PIX_FMT_UYVY = v4l2_fourcc('U', 'Y', 'V', 'Y'); /* 16  YUV 4:2:2     */
export const V4L2_PIX_FMT_VYUY = v4l2_fourcc('V', 'Y', 'U', 'Y'); /* 16  YUV 4:2:2     */
export const V4L2_PIX_FMT_Y41P = v4l2_fourcc('Y', '4', '1', 'P'); /* 12  YUV 4:1:1     */
export const V4L2_PIX_FMT_YUV444 = v4l2_fourcc('Y', '4', '4', '4'); /* 16  xxxxyyyy uuuuvvvv */
export const V4L2_PIX_FMT_YUV555 = v4l2_fourcc('Y', 'U', 'V', 'O'); /* 16  YUV-5-5-5     */
export const V4L2_PIX_FMT_YUV565 = v4l2_fourcc('Y', 'U', 'V', 'P'); /* 16  YUV-5-6-5     */
export const V4L2_PIX_FMT_YUV24 = v4l2_fourcc('Y', 'U', 'V', '3'); /* 24  YUV-8-8-8     */
export const V4L2_PIX_FMT_YUV32 = v4l2_fourcc('Y', 'U', 'V', '4'); /* 32  YUV-8-8-8-8   */
export const V4L2_PIX_FMT_AYUV32 = v4l2_fourcc('A', 'Y', 'U', 'V'); /* 32  AYUV-8-8-8-8  */
export const V4L2_PIX_FMT_XYUV32 = v4l2_fourcc('X', 'Y', 'U', 'V'); /* 32  XYUV-8-8-8-8  */
export const V4L2_PIX_FMT_VUYA32 = v4l2_fourcc('V', 'U', 'Y', 'A'); /* 32  VUYA-8-8-8-8  */
export const V4L2_PIX_FMT_VUYX32 = v4l2_fourcc('V', 'U', 'Y', 'X'); /* 32  VUYX-8-8-8-8  */
export const V4L2_PIX_FMT_M420 = v4l2_fourcc('M', '4', '2', '0'); /* 12  YUV 4:2:0 2 lines y, 1 line uv interleaved */

/* two planes -- one Y, one Cr + Cb interleaved  */
export const V4L2_PIX_FMT_NV12 = v4l2_fourcc('N', 'V', '1', '2'); /* 12  Y/CbCr 4:2:0  */
export const V4L2_PIX_FMT_NV21 = v4l2_fourcc('N', 'V', '2', '1'); /* 12  Y/CrCb 4:2:0  */
export const V4L2_PIX_FMT_NV16 = v4l2_fourcc('N', 'V', '1', '6'); /* 16  Y/CbCr 4:2:2  */
export const V4L2_PIX_FMT_NV61 = v4l2_fourcc('N', 'V', '6', '1'); /* 16  Y/CrCb 4:2:2  */
export const V4L2_PIX_FMT_NV24 = v4l2_fourcc('N', 'V', '2', '4'); /* 24  Y/CbCr 4:4:4  */
export const V4L2_PIX_FMT_NV42 = v4l2_fourcc('N', 'V', '4', '2'); /* 24  Y/CrCb 4:4:4  */
export const V4L2_PIX_FMT_HM12 = v4l2_fourcc('H', 'M', '1', '2'); /*  8  YUV 4:2:0 16x16 macroblocks */

/* two non contiguous planes - one Y, one Cr + Cb interleaved  */
export const V4L2_PIX_FMT_NV12M = v4l2_fourcc('N', 'M', '1', '2'); /* 12  Y/CbCr 4:2:0  */
export const V4L2_PIX_FMT_NV21M = v4l2_fourcc('N', 'M', '2', '1'); /* 21  Y/CrCb 4:2:0  */
export const V4L2_PIX_FMT_NV16M = v4l2_fourcc('N', 'M', '1', '6'); /* 16  Y/CbCr 4:2:2  */
export const V4L2_PIX_FMT_NV61M = v4l2_fourcc('N', 'M', '6', '1'); /* 16  Y/CrCb 4:2:2  */
export const V4L2_PIX_FMT_NV12MT = v4l2_fourcc('T', 'M', '1', '2'); /* 12  Y/CbCr 4:2:0 64x32 macroblocks */
export const V4L2_PIX_FMT_NV12MT_16X16 = v4l2_fourcc('V', 'M', '1', '2'); /* 12  Y/CbCr 4:2:0 16x16 macroblocks */

/* three planes - Y Cb, Cr */
export const V4L2_PIX_FMT_YUV410 = v4l2_fourcc('Y', 'U', 'V', '9'); /*  9  YUV 4:1:0     */
export const V4L2_PIX_FMT_YVU410 = v4l2_fourcc('Y', 'V', 'U', '9'); /*  9  YVU 4:1:0     */
export const V4L2_PIX_FMT_YUV411P = v4l2_fourcc('4', '1', '1', 'P'); /* 12  YVU411 planar */
export const V4L2_PIX_FMT_YUV420 = v4l2_fourcc('Y', 'U', '1', '2'); /* 12  YUV 4:2:0     */
export const V4L2_PIX_FMT_YVU420 = v4l2_fourcc('Y', 'V', '1', '2'); /* 12  YVU 4:2:0     */
export const V4L2_PIX_FMT_YUV422P = v4l2_fourcc('4', '2', '2', 'P'); /* 16  YVU422 planar */

/* three non contiguous planes - Y, Cb, Cr */
export const V4L2_PIX_FMT_YUV420M = v4l2_fourcc('Y', 'M', '1', '2'); /* 12  YUV420 planar */
export const V4L2_PIX_FMT_YVU420M = v4l2_fourcc('Y', 'M', '2', '1'); /* 12  YVU420 planar */
export const V4L2_PIX_FMT_YUV422M = v4l2_fourcc('Y', 'M', '1', '6'); /* 16  YUV422 planar */
export const V4L2_PIX_FMT_YVU422M = v4l2_fourcc('Y', 'M', '6', '1'); /* 16  YVU422 planar */
export const V4L2_PIX_FMT_YUV444M = v4l2_fourcc('Y', 'M', '2', '4'); /* 24  YUV444 planar */
export const V4L2_PIX_FMT_YVU444M = v4l2_fourcc('Y', 'M', '4', '2'); /* 24  YVU444 planar */

/* Bayer formats - see http://www.siliconimaging.com/RGB%20Bayer.htm */
export const V4L2_PIX_FMT_SBGGR8 = v4l2_fourcc('B', 'A', '8', '1'); /*  8  BGBG.. GRGR.. */
export const V4L2_PIX_FMT_SGBRG8 = v4l2_fourcc('G', 'B', 'R', 'G'); /*  8  GBGB.. RGRG.. */
export const V4L2_PIX_FMT_SGRBG8 = v4l2_fourcc('G', 'R', 'B', 'G'); /*  8  GRGR.. BGBG.. */
export const V4L2_PIX_FMT_SRGGB8 = v4l2_fourcc('R', 'G', 'G', 'B'); /*  8  RGRG.. GBGB.. */
export const V4L2_PIX_FMT_SBGGR10 = v4l2_fourcc('B', 'G', '1', '0'); /* 10  BGBG.. GRGR.. */
export const V4L2_PIX_FMT_SGBRG10 = v4l2_fourcc('G', 'B', '1', '0'); /* 10  GBGB.. RGRG.. */
export const V4L2_PIX_FMT_SGRBG10 = v4l2_fourcc('B', 'A', '1', '0'); /* 10  GRGR.. BGBG.. */
export const V4L2_PIX_FMT_SRGGB10 = v4l2_fourcc('R', 'G', '1', '0'); /* 10  RGRG.. GBGB.. */
	/* 10bit raw bayer packed, 5 bytes for every 4 pixels */
export const V4L2_PIX_FMT_SBGGR10P = v4l2_fourcc('p', 'B', 'A', 'A');
export const V4L2_PIX_FMT_SGBRG10P = v4l2_fourcc('p', 'G', 'A', 'A');
export const V4L2_PIX_FMT_SGRBG10P = v4l2_fourcc('p', 'g', 'A', 'A');
export const V4L2_PIX_FMT_SRGGB10P = v4l2_fourcc('p', 'R', 'A', 'A');
	/* 10bit raw bayer a-law compressed to 8 bits */
export const V4L2_PIX_FMT_SBGGR10ALAW8 = v4l2_fourcc('a', 'B', 'A', '8');
export const V4L2_PIX_FMT_SGBRG10ALAW8 = v4l2_fourcc('a', 'G', 'A', '8');
export const V4L2_PIX_FMT_SGRBG10ALAW8 = v4l2_fourcc('a', 'g', 'A', '8');
export const V4L2_PIX_FMT_SRGGB10ALAW8 = v4l2_fourcc('a', 'R', 'A', '8');
	/* 10bit raw bayer DPCM compressed to 8 bits */
export const V4L2_PIX_FMT_SBGGR10DPCM8 = v4l2_fourcc('b', 'B', 'A', '8');
export const V4L2_PIX_FMT_SGBRG10DPCM8 = v4l2_fourcc('b', 'G', 'A', '8');
export const V4L2_PIX_FMT_SGRBG10DPCM8 = v4l2_fourcc('B', 'D', '1', '0');
export const V4L2_PIX_FMT_SRGGB10DPCM8 = v4l2_fourcc('b', 'R', 'A', '8');
export const V4L2_PIX_FMT_SBGGR12 = v4l2_fourcc('B', 'G', '1', '2'); /* 12  BGBG.. GRGR.. */
export const V4L2_PIX_FMT_SGBRG12 = v4l2_fourcc('G', 'B', '1', '2'); /* 12  GBGB.. RGRG.. */
export const V4L2_PIX_FMT_SGRBG12 = v4l2_fourcc('B', 'A', '1', '2'); /* 12  GRGR.. BGBG.. */
export const V4L2_PIX_FMT_SRGGB12 = v4l2_fourcc('R', 'G', '1', '2'); /* 12  RGRG.. GBGB.. */
	/* 12bit raw bayer packed, 6 bytes for every 4 pixels */
export const V4L2_PIX_FMT_SBGGR12P = v4l2_fourcc('p', 'B', 'C', 'C');
export const V4L2_PIX_FMT_SGBRG12P = v4l2_fourcc('p', 'G', 'C', 'C');
export const V4L2_PIX_FMT_SGRBG12P = v4l2_fourcc('p', 'g', 'C', 'C');
export const V4L2_PIX_FMT_SRGGB12P = v4l2_fourcc('p', 'R', 'C', 'C');
export const V4L2_PIX_FMT_SBGGR14 = v4l2_fourcc('B', 'G', '1', '4'); /* 14  BGBG.. GRGR.. */
export const V4L2_PIX_FMT_SGBRG14 = v4l2_fourcc('G', 'B', '1', '4'); /* 14  GBGB.. RGRG.. */
export const V4L2_PIX_FMT_SGRBG14 = v4l2_fourcc('G', 'R', '1', '4'); /* 14  GRGR.. BGBG.. */
export const V4L2_PIX_FMT_SRGGB14 = v4l2_fourcc('R', 'G', '1', '4'); /* 14  RGRG.. GBGB.. */
	/* 14bit raw bayer packed, 7 bytes for every 4 pixels */
export const V4L2_PIX_FMT_SBGGR14P = v4l2_fourcc('p', 'B', 'E', 'E');
export const V4L2_PIX_FMT_SGBRG14P = v4l2_fourcc('p', 'G', 'E', 'E');
export const V4L2_PIX_FMT_SGRBG14P = v4l2_fourcc('p', 'g', 'E', 'E');
export const V4L2_PIX_FMT_SRGGB14P = v4l2_fourcc('p', 'R', 'E', 'E');
export const V4L2_PIX_FMT_SBGGR16 = v4l2_fourcc('B', 'Y', 'R', '2'); /* 16  BGBG.. GRGR.. */
export const V4L2_PIX_FMT_SGBRG16 = v4l2_fourcc('G', 'B', '1', '6'); /* 16  GBGB.. RGRG.. */
export const V4L2_PIX_FMT_SGRBG16 = v4l2_fourcc('G', 'R', '1', '6'); /* 16  GRGR.. BGBG.. */
export const V4L2_PIX_FMT_SRGGB16 = v4l2_fourcc('R', 'G', '1', '6'); /* 16  RGRG.. GBGB.. */

/* HSV formats */
export const V4L2_PIX_FMT_HSV24 = v4l2_fourcc('H', 'S', 'V', '3');
export const V4L2_PIX_FMT_HSV32 = v4l2_fourcc('H', 'S', 'V', '4');

/* compressed formats */
export const V4L2_PIX_FMT_MJPEG = v4l2_fourcc('M', 'J', 'P', 'G'); /* Motion-JPEG   */
export const V4L2_PIX_FMT_JPEG = v4l2_fourcc('J', 'P', 'E', 'G'); /* JFIF JPEG     */
export const V4L2_PIX_FMT_DV = v4l2_fourcc('d', 'v', 's', 'd'); /* 1394          */
export const V4L2_PIX_FMT_MPEG = v4l2_fourcc('M', 'P', 'E', 'G'); /* MPEG-1/2/4 Multiplexed */
export const V4L2_PIX_FMT_H264 = v4l2_fourcc('H', '2', '6', '4'); /* H264 with start codes */
export const V4L2_PIX_FMT_H264_NO_SC = v4l2_fourcc('A', 'V', 'C', '1'); /* H264 without start codes */
export const V4L2_PIX_FMT_H264_MVC = v4l2_fourcc('M', '2', '6', '4'); /* H264 MVC */
export const V4L2_PIX_FMT_H263 = v4l2_fourcc('H', '2', '6', '3'); /* H263          */
export const V4L2_PIX_FMT_MPEG1 = v4l2_fourcc('M', 'P', 'G', '1'); /* MPEG-1 ES     */
export const V4L2_PIX_FMT_MPEG2 = v4l2_fourcc('M', 'P', 'G', '2'); /* MPEG-2 ES     */
export const V4L2_PIX_FMT_MPEG2_SLICE = v4l2_fourcc('M', 'G', '2', 'S'); /* MPEG-2 parsed slice data */
export const V4L2_PIX_FMT_MPEG4 = v4l2_fourcc('M', 'P', 'G', '4'); /* MPEG-4 part 2 ES */
export const V4L2_PIX_FMT_XVID = v4l2_fourcc('X', 'V', 'I', 'D'); /* Xvid           */
export const V4L2_PIX_FMT_VC1_ANNEX_G = v4l2_fourcc('V', 'C', '1', 'G'); /* SMPTE 421M Annex G compliant stream */
export const V4L2_PIX_FMT_VC1_ANNEX_L = v4l2_fourcc('V', 'C', '1', 'L'); /* SMPTE 421M Annex L compliant stream */
export const V4L2_PIX_FMT_VP8 = v4l2_fourcc('V', 'P', '8', '0'); /* VP8 */
export const V4L2_PIX_FMT_VP8_FRAME = v4l2_fourcc('V', 'P', '8', 'F'); /* VP8 parsed frame */
export const V4L2_PIX_FMT_VP9 = v4l2_fourcc('V', 'P', '9', '0'); /* VP9 */
export const V4L2_PIX_FMT_HEVC = v4l2_fourcc('H', 'E', 'V', 'C'); /* HEVC aka H.265 */
export const V4L2_PIX_FMT_FWHT = v4l2_fourcc('F', 'W', 'H', 'T'); /* Fast Walsh Hadamard Transform (vicodec) */
export const V4L2_PIX_FMT_FWHT_STATELESS = v4l2_fourcc('S', 'F', 'W', 'H'); /* Stateless FWHT (vicodec) */
export const V4L2_PIX_FMT_H264_SLICE = v4l2_fourcc('S', '2', '6', '4'); /* H264 parsed slices */

/*  Vendor-specific formats   */
export const V4L2_PIX_FMT_CPIA1 = v4l2_fourcc('C', 'P', 'I', 'A'); /* cpia1 YUV */
export const V4L2_PIX_FMT_WNVA = v4l2_fourcc('W', 'N', 'V', 'A'); /* Winnov hw compress */
export const V4L2_PIX_FMT_SN9C10X = v4l2_fourcc('S', '9', '1', '0'); /* SN9C10x compression */
export const V4L2_PIX_FMT_SN9C20X_I420 = v4l2_fourcc('S', '9', '2', '0'); /* SN9C20x YUV 4:2:0 */
export const V4L2_PIX_FMT_PWC1 = v4l2_fourcc('P', 'W', 'C', '1'); /* pwc older webcam */
export const V4L2_PIX_FMT_PWC2 = v4l2_fourcc('P', 'W', 'C', '2'); /* pwc newer webcam */
export const V4L2_PIX_FMT_ET61X251 = v4l2_fourcc('E', '6', '2', '5'); /* ET61X251 compression */
export const V4L2_PIX_FMT_SPCA501 = v4l2_fourcc('S', '5', '0', '1'); /* YUYV per line */
export const V4L2_PIX_FMT_SPCA505 = v4l2_fourcc('S', '5', '0', '5'); /* YYUV per line */
export const V4L2_PIX_FMT_SPCA508 = v4l2_fourcc('S', '5', '0', '8'); /* YUVY per line */
export const V4L2_PIX_FMT_SPCA561 = v4l2_fourcc('S', '5', '6', '1'); /* compressed GBRG bayer */
export const V4L2_PIX_FMT_PAC207 = v4l2_fourcc('P', '2', '0', '7'); /* compressed BGGR bayer */
export const V4L2_PIX_FMT_MR97310A = v4l2_fourcc('M', '3', '1', '0'); /* compressed BGGR bayer */
export const V4L2_PIX_FMT_JL2005BCD = v4l2_fourcc('J', 'L', '2', '0'); /* compressed RGGB bayer */
export const V4L2_PIX_FMT_SN9C2028 = v4l2_fourcc('S', 'O', 'N', 'X'); /* compressed GBRG bayer */
export const V4L2_PIX_FMT_SQ905C = v4l2_fourcc('9', '0', '5', 'C'); /* compressed RGGB bayer */
export const V4L2_PIX_FMT_PJPG = v4l2_fourcc('P', 'J', 'P', 'G'); /* Pixart 73xx JPEG */
export const V4L2_PIX_FMT_OV511 = v4l2_fourcc('O', '5', '1', '1'); /* ov511 JPEG */
export const V4L2_PIX_FMT_OV518 = v4l2_fourcc('O', '5', '1', '8'); /* ov518 JPEG */
export const V4L2_PIX_FMT_STV0680 = v4l2_fourcc('S', '6', '8', '0'); /* stv0680 bayer */
export const V4L2_PIX_FMT_TM6000 = v4l2_fourcc('T', 'M', '6', '0'); /* tm5600/tm60x0 */
export const V4L2_PIX_FMT_CIT_YYVYUY = v4l2_fourcc('C', 'I', 'T', 'V'); /* one line of Y then 1 line of VYUY */
export const V4L2_PIX_FMT_KONICA420 = v4l2_fourcc('K', 'O', 'N', 'I'); /* YUV420 planar in blocks of 256 pixels */
export const V4L2_PIX_FMT_JPGL = v4l2_fourcc('J', 'P', 'G', 'L'); /* JPEG-Lite */
export const V4L2_PIX_FMT_SE401 = v4l2_fourcc('S', '4', '0', '1'); /* se401 janggu compressed rgb */
export const V4L2_PIX_FMT_S5C_UYVY_JPG = v4l2_fourcc('S', '5', 'C', 'I'); /* S5C73M3 interleaved UYVY/JPEG */
export const V4L2_PIX_FMT_Y8I = v4l2_fourcc('Y', '8', 'I', ' '); /* Greyscale 8-bit L/R interleaved */
export const V4L2_PIX_FMT_Y12I = v4l2_fourcc('Y', '1', '2', 'I'); /* Greyscale 12-bit L/R interleaved */
export const V4L2_PIX_FMT_Z16 = v4l2_fourcc('Z', '1', '6', ' '); /* Depth data 16-bit */
export const V4L2_PIX_FMT_MT21C = v4l2_fourcc('M', 'T', '2', '1'); /* Mediatek compressed block mode  */
export const V4L2_PIX_FMT_INZI = v4l2_fourcc('I', 'N', 'Z', 'I'); /* Intel Planar Greyscale 10-bit and Depth 16-bit */
export const V4L2_PIX_FMT_SUNXI_TILED_NV12 = v4l2_fourcc('S', 'T', '1', '2'); /* Sunxi Tiled NV12 Format */
export const V4L2_PIX_FMT_CNF4 = v4l2_fourcc('C', 'N', 'F', '4'); /* Intel 4-bit packed depth confidence information */
export const V4L2_PIX_FMT_HI240 = v4l2_fourcc('H', 'I', '2', '4'); /* BTTV 8-bit dithered RGB */

/* 10bit raw bayer packed, 32 bytes for every 25 pixels, last LSB 6 bits unused */
export const V4L2_PIX_FMT_IPU3_SBGGR10 = v4l2_fourcc('i', 'p', '3', 'b'); /* IPU3 packed 10-bit BGGR bayer */
export const V4L2_PIX_FMT_IPU3_SGBRG10 = v4l2_fourcc('i', 'p', '3', 'g'); /* IPU3 packed 10-bit GBRG bayer */
export const V4L2_PIX_FMT_IPU3_SGRBG10 = v4l2_fourcc('i', 'p', '3', 'G'); /* IPU3 packed 10-bit GRBG bayer */
export const V4L2_PIX_FMT_IPU3_SRGGB10 = v4l2_fourcc('i', 'p', '3', 'r'); /* IPU3 packed 10-bit RGGB bayer */

/* SDR formats - used only for Software Defined Radio devices */
export const V4L2_SDR_FMT_CU8 = v4l2_fourcc('C', 'U', '0', '8'); /* IQ u8 */
export const V4L2_SDR_FMT_CU16LE = v4l2_fourcc('C', 'U', '1', '6'); /* IQ u16le */
export const V4L2_SDR_FMT_CS8 = v4l2_fourcc('C', 'S', '0', '8'); /* complex s8 */
export const V4L2_SDR_FMT_CS14LE = v4l2_fourcc('C', 'S', '1', '4'); /* complex s14le */
export const V4L2_SDR_FMT_RU12LE = v4l2_fourcc('R', 'U', '1', '2'); /* real u12le */
export const V4L2_SDR_FMT_PCU16BE = v4l2_fourcc('P', 'C', '1', '6'); /* planar complex u16be */
export const V4L2_SDR_FMT_PCU18BE = v4l2_fourcc('P', 'C', '1', '8'); /* planar complex u18be */
export const V4L2_SDR_FMT_PCU20BE = v4l2_fourcc('P', 'C', '2', '0'); /* planar complex u20be */

/* Touch formats - used for Touch devices */
export const V4L2_TCH_FMT_DELTA_TD16 = v4l2_fourcc('T', 'D', '1', '6'); /* 16-bit signed deltas */
export const V4L2_TCH_FMT_DELTA_TD08 = v4l2_fourcc('T', 'D', '0', '8'); /* 8-bit signed deltas */
export const V4L2_TCH_FMT_TU16 = v4l2_fourcc('T', 'U', '1', '6'); /* 16-bit unsigned touch data */
export const V4L2_TCH_FMT_TU08 = v4l2_fourcc('T', 'U', '0', '8'); /* 8-bit unsigned touch data */

/* Meta-data formats */
export const V4L2_META_FMT_VSP1_HGO = v4l2_fourcc('V', 'S', 'P', 'H'); /* R-Car VSP1 1-D Histogram */
export const V4L2_META_FMT_VSP1_HGT = v4l2_fourcc('V', 'S', 'P', 'T'); /* R-Car VSP1 2-D Histogram */
export const V4L2_META_FMT_UVC = v4l2_fourcc('U', 'V', 'C', 'H'); /* UVC Payload Header metadata */
export const V4L2_META_FMT_D4XX = v4l2_fourcc('D', '4', 'X', 'X'); /* D4XX Payload Header metadata */
export const V4L2_META_FMT_VIVID = v4l2_fourcc('V', 'I', 'V', 'D'); /* Vivid Metadata */

/* Vendor specific - used for RK_ISP1 camera sub-system */
export const V4L2_META_FMT_RK_ISP1_PARAMS = v4l2_fourcc('R', 'K', '1', 'P'); /* Rockchip ISP1 3A Parameters */
export const V4L2_META_FMT_RK_ISP1_STAT_3A = v4l2_fourcc('R', 'K', '1', 'S'); /* Rockchip ISP1 3A Statistics */

/* priv field value to indicates that subsequent fields are valid. */
export const V4L2_PIX_FMT_PRIV_MAGIC = 0xfeedcafe;

/* Flags */
export const V4L2_PIX_FMT_FLAG_PREMUL_ALPHA = 0x00000001;
export const V4L2_PIX_FMT_FLAG_SET_CSC = 0x00000002;

/*
 *	F O R M A T   E N U M E R A T I O N
 */
 export const v4l2_fmtdesc = StructType({
	index: ref.types.uint32,
	type: ref.types.uint32,
	flags: ref.types.uint32,
	description: new ArrayType(ref.types.uint8, 32),
	pixelformat: ref.types.uint32,
	mbus_code: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 3),
});

export const V4L2_FMT_FLAG_COMPRESSED = 0x0001;
export const V4L2_FMT_FLAG_EMULATED = 0x0002;
export const V4L2_FMT_FLAG_CONTINUOUS_BYTESTREAM = 0x0004;
export const V4L2_FMT_FLAG_DYN_RESOLUTION = 0x0008;
export const V4L2_FMT_FLAG_ENC_CAP_FRAME_INTERVAL = 0x0010;
export const V4L2_FMT_FLAG_CSC_COLORSPACE = 0x0020;
export const V4L2_FMT_FLAG_CSC_XFER_FUNC = 0x0040;
export const V4L2_FMT_FLAG_CSC_YCBCR_ENC = 0x0080;
export const V4L2_FMT_FLAG_CSC_HSV_ENC = V4L2_FMT_FLAG_CSC_YCBCR_ENC;
export const V4L2_FMT_FLAG_CSC_QUANTIZATION = 0x0100;


	/* Frame Size and frame rate enumeration */
/*
 *	F R A M E   S I Z E   E N U M E R A T I O N
 */
export enum v4l2_frmsizetypes {
	V4L2_FRMSIZE_TYPE_DISCRETE	= 1,
	V4L2_FRMSIZE_TYPE_CONTINUOUS	= 2,
	V4L2_FRMSIZE_TYPE_STEPWISE	= 3,
};

export const v4l2_frmsize_discrete = StructType({
	width: ref.types.uint32,
	height: ref.types.uint32,
});

export const v4l2_frmsize_stepwise = StructType({
	min_width: ref.types.uint32,
	max_width: ref.types.uint32,
	step_width: ref.types.uint32,
	min_height: ref.types.uint32,
	max_height: ref.types.uint32,
	step_height: ref.types.uint32,
});

export const v4l2_frmsizeenum = StructType({
	index: ref.types.uint32,
	pixel_format: ref.types.uint32,
	type: ref.types.uint32,
	union: new UnionType({
	  	discrete: v4l2_frmsize_discrete,
	  	stepwise: v4l2_frmsize_stepwise,
	}),
	reserved: new ArrayType(ref.types.uint32, 2),
});

/*
 *	F R A M E   R A T E   E N U M E R A T I O N
 */

export  enum v4l2_frmivaltypes {
	V4L2_FRMIVAL_TYPE_DISCRETE	= 1,
	V4L2_FRMIVAL_TYPE_CONTINUOUS	= 2,
	V4L2_FRMIVAL_TYPE_STEPWISE	= 3,
};

export const v4l2_frmival_stepwise = StructType({
	min: v4l2_fract,
	max: v4l2_fract,
	step: v4l2_fract,
});

export const v4l2_frmivalenum = StructType({
	index: ref.types.uint32,
	pixel_format: ref.types.uint32,
	width: ref.types.uint32,
	height: ref.types.uint32,
	type: ref.types.uint32,
	union: new UnionType({
	  discrete: v4l2_fract,
	  stepwise: v4l2_frmival_stepwise,
	}),
	reserved: new ArrayType(ref.types.uint32, 2),
});

/*
 *	T I M E C O D E
 */
export const v4l2_timecode = StructType({
	type: ref.types.uint32,
	flags: ref.types.uint32,
	frames: ref.types.uint8,
	seconds: ref.types.uint8,
	minutes: ref.types.uint8,
	hours: ref.types.uint8,
	userbits: new ArrayType(ref.types.uint8, 4),
});

/*  Type  */
export const V4L2_TC_TYPE_24FPS = 1;
export const V4L2_TC_TYPE_25FPS	= 2;
export const V4L2_TC_TYPE_30FPS = 3;
export const V4L2_TC_TYPE_50FPS = 4;
export const V4L2_TC_TYPE_60FPS = 5;

/*  Flags  */
export const V4L2_TC_FLAG_DROPFRAME = 0x0001; /* "drop-frame" mode */
export const V4L2_TC_FLAG_COLORFRAME = 0x0002;
export const V4L2_TC_USERBITS_field = 0x000C;
export const V4L2_TC_USERBITS_USERDEFINED = 0x0000;
export const V4L2_TC_USERBITS_8BITCHARS = 0x0008;
/* The above is based on SMPTE timecodes */

export const v4l2_jpegcompression = StructType({
	quality: ref.types.int32,
	APPn: ref.types.int32,
	APP_len: ref.types.int32,
	APP_data: new ArrayType(ref.types.char, 60),
	COM_len: ref.types.int32,
	COM_data: new ArrayType(ref.types.char, 60),
	jpeg_markers: ref.types.uint32,
});

export const V4L2_JPEG_MARKER_DHT = (1<<3);   /* Define Huffman Tables */
export const V4L2_JPEG_MARKER_DQT = (1<<4);   /* Define Quantization Tables */
export const V4L2_JPEG_MARKER_DRI = (1<<5);   /* Define Restart Interval */
export const V4L2_JPEG_MARKER_COM = (1<<6);   /* Comment segment */
export const V4L2_JPEG_MARKER_APP = (1<<7);   /* App segment, driver will always use APP0 */

/*
 *	M E M O R Y - M A P P I N G   B U F F E R S
 */

export const v4l2_requestbuffers = StructType({
	count: ref.types.uint32,
	type: ref.types.uint32,
	memory: ref.types.uint32,
	capabilities: ref.types.uint32,
	reserved: ref.types.uint32,
});

/* capabilities for struct v4l2_requestbuffers and v4l2_create_buffers */
export const V4L2_BUF_CAP_SUPPORTS_MMAP = (1 << 0);
export const V4L2_BUF_CAP_SUPPORTS_USERPTR = (1 << 1);
export const V4L2_BUF_CAP_SUPPORTS_DMABUF = (1 << 2);
export const V4L2_BUF_CAP_SUPPORTS_REQUESTS = (1 << 3);
export const V4L2_BUF_CAP_SUPPORTS_ORPHANED_BUFS = (1 << 4);
export const V4L2_BUF_CAP_SUPPORTS_M2M_HOLD_CAPTURE_BUF = (1 << 5);
export const V4L2_BUF_CAP_SUPPORTS_MMAP_CACHE_HINTS = (1 << 6);

export const v4l2_plane = StructType({
	bytesused: ref.types.uint32,
	length: ref.types.uint32,
	m: new UnionType({
		mem_offset: ref.types.uint32,
		userptr: ref.types.ulong,
		fd: ref.types.int32,
	}),
	data_offset: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 11),
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

/*  Flags for 'flags' field */
/* Buffer is mapped (flag) */
export const V4L2_BUF_FLAG_MAPPED = 0x00000001;
/* Buffer is queued for processing */
export const V4L2_BUF_FLAG_QUEUED = 0x00000002;
/* Buffer is ready */
export const V4L2_BUF_FLAG_DONE = 0x00000004;
/* Image is a keyframe (I-frame) */
export const V4L2_BUF_FLAG_KEYFRAME = 0x00000008;
/* Image is a P-frame */
export const V4L2_BUF_FLAG_PFRAME = 0x00000010;
/* Image is a B-frame */
export const V4L2_BUF_FLAG_BFRAME = 0x00000020;
/* Buffer is ready, but the data contained within is corrupted. */
export const V4L2_BUF_FLAG_ERROR = 0x00000040;
/* Buffer is added to an unqueued request */
export const V4L2_BUF_FLAG_IN_REQUEST = 0x00000080;
/* timecode field is valid */
export const V4L2_BUF_FLAG_TIMECODE = 0x00000100;
/* Don't return the capture buffer until OUTPUT timestamp changes */
export const V4L2_BUF_FLAG_M2M_HOLD_CAPTURE_BUF = 0x00000200;
/* Buffer is prepared for queuing */
export const V4L2_BUF_FLAG_PREPARED = 0x00000400;
/* Cache handling flags */
export const V4L2_BUF_FLAG_NO_CACHE_INVALIDATE = 0x00000800;
export const V4L2_BUF_FLAG_NO_CACHE_CLEAN = 0x00001000;
/* Timestamp type */
export const V4L2_BUF_FLAG_TIMESTAMP_MASK = 0x0000e000;
export const V4L2_BUF_FLAG_TIMESTAMP_UNKNOWN = 0x00000000;
export const V4L2_BUF_FLAG_TIMESTAMP_MONOTONIC = 0x00002000;
export const V4L2_BUF_FLAG_TIMESTAMP_COPY = 0x00004000;
/* Timestamp sources. */
export const V4L2_BUF_FLAG_TSTAMP_SRC_MASK = 0x00070000;
export const V4L2_BUF_FLAG_TSTAMP_SRC_EOF = 0x00000000;
export const V4L2_BUF_FLAG_TSTAMP_SRC_SOE = 0x00010000;
/* mem2mem encoder/decoder */
export const V4L2_BUF_FLAG_LAST = 0x00100000;
/* request_fd is valid */
export const V4L2_BUF_FLAG_REQUEST_FD = 0x00800000;

export const v4l2_exportbuffer = StructType({
	type: ref.types.uint32,
	index: ref.types.uint32,
	plane: ref.types.uint32,
	flags: ref.types.uint32,
	fd: ref.types.int32,
	reserved: new ArrayType(ref.types.uint32, 11),
});

/*
 *	O V E R L A Y   P R E V I E W
 */


export const v4l2_framebuffer = StructType({
	capability: ref.types.uint32,
	flags: ref.types.uint32,
	base: ref.refType(ref.types.void),
	fmt: StructType({
		width: ref.types.uint32,
		height: ref.types.uint32,
		pixelformat: ref.types.uint32,
		field: ref.types.uint32,
		bytesperline: ref.types.uint32,
		sizeimage: ref.types.uint32,
		colorspace: ref.types.uint32,
		priv: ref.types.uint32,
	}),
});

/*  Flags for the 'capability' field. Read only */
export const V4L2_FBUF_CAP_EXTERNOVERLAY = 0x0001;
export const V4L2_FBUF_CAP_CHROMAKEY = 0x0002;
export const V4L2_FBUF_CAP_LIST_CLIPPING = 0x0004;
export const V4L2_FBUF_CAP_BITMAP_CLIPPING = 0x0008;
export const V4L2_FBUF_CAP_LOCAL_ALPHA = 0x0010;
export const V4L2_FBUF_CAP_GLOBAL_ALPHA = 0x0020;
export const V4L2_FBUF_CAP_LOCAL_INV_ALPHA = 0x0040;
export const V4L2_FBUF_CAP_SRC_CHROMAKEY = 0x0080;
/*  Flags for the 'flags' field. */
export const V4L2_FBUF_FLAG_PRIMARY = 0x0001;
export const V4L2_FBUF_FLAG_OVERLAY = 0x0002;
export const V4L2_FBUF_FLAG_CHROMAKEY = 0x0004;
export const V4L2_FBUF_FLAG_LOCAL_ALPHA = 0x0008;
export const V4L2_FBUF_FLAG_GLOBAL_ALPHA = 0x0010;
export const V4L2_FBUF_FLAG_LOCAL_INV_ALPHA = 0x0020;
export const V4L2_FBUF_FLAG_SRC_CHROMAKEY = 0x0040;

export const v4l2_clip = StructType({
	c: v4l2_rect,
});
v4l2_clip.defineProperty('next', ref.refType(v4l2_clip));  

export const v4l2_window = StructType({
	w: v4l2_rect,
	field: ref.types.uint32,
	chromakey: ref.types.uint32,
	clips: ref.refType(v4l2_clip),
	clipcount: ref.types.uint32,
	bitmap: ref.refType(ref.types.void),
	global_alpha: ref.types.uint8,
});

/*
 *	C A P T U R E   P A R A M E T E R S
 */

 export const v4l2_captureparm = StructType({
	capability: ref.types.uint32,
	capturemode: ref.types.uint32,
	timeperframe: v4l2_fract,
	extendedmode: ref.types.uint32,
	readbuffers: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 4),
});

/*  Flags for 'capability' and 'capturemode' fields */
export const V4L2_MODE_HIGHQUALITY = 0x0001;	/*  High quality imaging mode */
export const V4L2_CAP_TIMEPERFRAME = 0x1000;	/*  timeperframe field is supported */

export const v4l2_outputparm = StructType({
	capability: ref.types.uint32,
	outputmode: ref.types.uint32,
	timeperframe: v4l2_fract,
	extendedmode: ref.types.uint32,
	writebuffers: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 4),
});

/*
 *	I N P U T   I M A G E   C R O P P I N G
 */

export const v4l2_cropcap = StructType({
	type: ref.types.uint32,
	bounds: v4l2_rect,
	defrect: v4l2_rect,
	pixelaspect: v4l2_fract,
});
  
export const v4l2_crop = StructType({
	type: ref.types.uint32,
	c: v4l2_rect,
});

export const v4l2_selection = StructType({
	type: ref.types.uint32,
	target: ref.types.uint32,
	flags: ref.types.uint32,
	r: v4l2_rect,
	reserved: new ArrayType(ref.types.uint32, 9),
});

/*
 *      A N A L O G   V I D E O   S T A N D A R D
 */
export const v4l2_std_id = ref.types.uint64;

/*
 * Attention: Keep the V4L2_STD_* bit definitions in sync with
 * include/dt-bindings/display/sdtv-standards.h SDTV_STD_* bit definitions.
 */
/* one bit for each */
export const V4L2_STD_PAL_B = 0x00000001;
export const V4L2_STD_PAL_B1 = 0x00000002;
export const V4L2_STD_PAL_G = 0x00000004;
export const V4L2_STD_PAL_H = 0x00000008;
export const V4L2_STD_PAL_I = 0x00000010;
export const V4L2_STD_PAL_D = 0x00000020;
export const V4L2_STD_PAL_D1 = 0x00000040;
export const V4L2_STD_PAL_K = 0x00000080;

export const V4L2_STD_PAL_M = 0x00000100;
export const V4L2_STD_PAL_N = 0x00000200;
export const V4L2_STD_PAL_Nc = 0x00000400;
export const V4L2_STD_PAL_60 = 0x00000800;

export const V4L2_STD_NTSC_M = 0x00001000	/* BTSC */;
export const V4L2_STD_NTSC_M_JP = 0x00002000	/* EIA-J */;
export const V4L2_STD_NTSC_443 = 0x00004000;
export const V4L2_STD_NTSC_M_KR = 0x00008000	/* FM A2 */;

export const V4L2_STD_SECAM_B = 0x00010000;
export const V4L2_STD_SECAM_D = 0x00020000;
export const V4L2_STD_SECAM_G = 0x00040000;
export const V4L2_STD_SECAM_H = 0x00080000;
export const V4L2_STD_SECAM_K = 0x00100000;
export const V4L2_STD_SECAM_K1 = 0x00200000;
export const V4L2_STD_SECAM_L = 0x00400000;
export const V4L2_STD_SECAM_LC = 0x00800000;

/* ATSC/HDTV */
export const V4L2_STD_ATSC_8_VSB = 0x01000000;
export const V4L2_STD_ATSC_16_VSB = 0x02000000;

/*
 * "Common" NTSC/M - It should be noticed that V4L2_STD_NTSC_443 is
 * Missing here.
 */
export const V4L2_STD_NTSC = (V4L2_STD_NTSC_M | V4L2_STD_NTSC_M_JP | V4L2_STD_NTSC_M_KR);
/* Secam macros */
export const V4L2_STD_SECAM_DK = (V4L2_STD_SECAM_D | V4L2_STD_SECAM_K | V4L2_STD_SECAM_K1);
/* All Secam Standards */
export const V4L2_STD_SECAM = (V4L2_STD_SECAM_B | V4L2_STD_SECAM_G | V4L2_STD_SECAM_H | V4L2_STD_SECAM_DK | V4L2_STD_SECAM_L | V4L2_STD_SECAM_LC);
/* PAL macros */
export const V4L2_STD_PAL_BG = (V4L2_STD_PAL_B | V4L2_STD_PAL_B1 | V4L2_STD_PAL_G)
export const V4L2_STD_PAL_DK = (V4L2_STD_PAL_D | V4L2_STD_PAL_D1 | V4L2_STD_PAL_K);
/*
* "Common" PAL - This macro is there to be compatible with the old
* V4L1 concept of "PAL": /BGDKHI.
* Several PAL standards are missing here: /M, /N and /Nc
*/
export const V4L2_STD_PAL = (V4L2_STD_PAL_BG | V4L2_STD_PAL_DK | V4L2_STD_PAL_H | V4L2_STD_PAL_I);
/* Chroma "agnostic" standards */
export const V4L2_STD_B = (V4L2_STD_PAL_B | V4L2_STD_PAL_B1 | V4L2_STD_SECAM_B);
export const V4L2_STD_G = (V4L2_STD_PAL_G | V4L2_STD_SECAM_G);
export const V4L2_STD_H = (V4L2_STD_PAL_H | V4L2_STD_SECAM_H);
export const V4L2_STD_L = (V4L2_STD_SECAM_L | V4L2_STD_SECAM_LC);
export const V4L2_STD_GH = (V4L2_STD_G | V4L2_STD_H);
export const V4L2_STD_DK = (V4L2_STD_PAL_DK | V4L2_STD_SECAM_DK);
export const V4L2_STD_BG = (V4L2_STD_B | V4L2_STD_G);
export const V4L2_STD_MN = (V4L2_STD_PAL_M | V4L2_STD_PAL_N | V4L2_STD_PAL_Nc | V4L2_STD_NTSC);

/* Standards where MTS/BTSC stereo could be found */
export const V4L2_STD_MTS = (V4L2_STD_NTSC_M | V4L2_STD_PAL_M | V4L2_STD_PAL_N | V4L2_STD_PAL_Nc);

/* Standards for Countries with 60Hz Line frequency */
export const V4L2_STD_525_60 = (V4L2_STD_PAL_M | V4L2_STD_PAL_60 | V4L2_STD_NTSC | V4L2_STD_NTSC_443);
/* Standards for Countries with 50Hz Line frequency */
export const V4L2_STD_625_50 = (V4L2_STD_PAL | V4L2_STD_PAL_N | V4L2_STD_PAL_Nc | V4L2_STD_SECAM);

export const V4L2_STD_ATSC = (V4L2_STD_ATSC_8_VSB | V4L2_STD_ATSC_16_VSB);
/* Macros with none and all analog standards */
export const V4L2_STD_UNKNOWN = 0;
export const V4L2_STD_ALL = (V4L2_STD_525_60 | V4L2_STD_625_50);

export const v4l2_standard = StructType({
	index: ref.types.uint32,
	id: v4l2_std_id,
	name: ArrayType(ref.types.uint8, 24),
	frameperiod: v4l2_fract, /* Frames, not fields */
	framelines: ref.types.uint32,
	reserved: ArrayType(ref.types.uint32, 4),
});

/*
 *	D V	B T	T I M I N G S
 */
export const v4l2_bt_timings = StructType({
	width: ref.types.uint32,
	height: ref.types.uint32,
	interlaced: ref.types.uint32,
	polarities: ref.types.uint32,
	pixelclock: ref.types.uint64,
	hfrontporch: ref.types.uint32,
	hsync: ref.types.uint32,
	hbackporch: ref.types.uint32,
	vfrontporch: ref.types.uint32,
	vsync: ref.types.uint32,
	vbackporch: ref.types.uint32,
	il_vfrontporch: ref.types.uint32,
	il_vsync: ref.types.uint32,
	il_vbackporch: ref.types.uint32,
	standards: ref.types.uint32,
	flags: ref.types.uint32,
	picture_aspect: v4l2_fract,
	cea861_vic: ref.types.uint8,
	hdmi_vic: ref.types.uint8,
	reserved: new ArrayType(ref.types.uint8, 46),
}, { packed: true });

/* Interlaced or progressive format */
export const V4L2_DV_PROGRESSIVE = 0;
export const V4L2_DV_INTERLACED = 1;

/* Polarities. If bit is not set, it is assumed to be negative polarity */
export const V4L2_DV_VSYNC_POS_POL = 0x00000001;
export const V4L2_DV_HSYNC_POS_POL = 0x00000002;

/* Timings standards */
export const V4L2_DV_BT_STD_CEA861 = (1 << 0);  /* CEA-861 Digital TV Profile */
export const V4L2_DV_BT_STD_DMT = (1 << 1);  /* VESA Discrete Monitor Timings */
export const V4L2_DV_BT_STD_CVT = (1 << 2);  /* VESA Coordinated Video Timings */
export const V4L2_DV_BT_STD_GTF = (1 << 3);  /* VESA Generalized Timings Formula */
export const V4L2_DV_BT_STD_SDI = (1 << 4);  /* SDI Timings */

/* Flags */

/*
 * CVT/GTF specific: timing uses reduced blanking (CVT) or the 'Secondary
 * GTF' curve (GTF). In both cases the horizontal and/or vertical blanking
 * intervals are reduced, allowing a higher resolution over the same
 * bandwidth. This is a read-only flag.
 */
export const V4L2_DV_FL_REDUCED_BLANKING = (1 << 0);
/*
 * CEA-861 specific: set for CEA-861 formats with a framerate of a multiple
 * of six. These formats can be optionally played at 1 / 1.001 speed.
 * This is a read-only flag.
 */
export const V4L2_DV_FL_CAN_REDUCE_FPS = (1 << 1);
/*
 * CEA-861 specific: only valid for video transmitters, the flag is cleared
 * by receivers.
 * If the framerate of the format is a multiple of six, then the pixelclock
 * used to set up the transmitter is divided by 1.001 to make it compatible
 * with 60 Hz based standards such as NTSC and PAL-M that use a framerate of
 * 29.97 Hz. Otherwise this flag is cleared. If the transmitter can't generate
 * such frequencies, then the flag will also be cleared.
 */
export const V4L2_DV_FL_REDUCED_FPS = (1 << 2);
/*
 * Specific to interlaced formats: if set, then field 1 is really one half-line
 * longer and field 2 is really one half-line shorter, so each field has
 * exactly the same number of half-lines. Whether half-lines can be detected
 * or used depends on the hardware.
 */
export const V4L2_DV_FL_HALF_LINE = (1 << 3);
/*
 * If set, then this is a Consumer Electronics (CE) video format. Such formats
 * differ from other formats (commonly called IT formats) in that if RGB
 * encoding is used then by default the RGB values use limited range (i.e.
 * use the range 16-235) as opposed to 0-255. All formats defined in CEA-861
 * except for the 640x480 format are CE formats.
 */
export const V4L2_DV_FL_IS_CE_VIDEO = (1 << 4);
/* Some formats like SMPTE-125M have an interlaced signal with a odd
 * total height. For these formats, if this flag is set, the first
 * field has the extra line. If not, it is the second field.
 */
export const V4L2_DV_FL_FIRST_FIELD_EXTRA_LINE = (1 << 5);
/*
 * If set, then the picture_aspect field is valid. Otherwise assume that the
 * pixels are square, so the picture aspect ratio is the same as the width to
 * height ratio.
 */
export const V4L2_DV_FL_HAS_PICTURE_ASPECT = (1 << 6);
/*
 * If set, then the cea861_vic field is valid and contains the Video
 * Identification Code as per the CEA-861 standard.
 */
export const V4L2_DV_FL_HAS_CEA861_VIC = (1 << 7);
/*
 * If set, then the hdmi_vic field is valid and contains the Video
 * Identification Code as per the HDMI standard (HDMI Vendor Specific
 * InfoFrame).
 */
export const V4L2_DV_FL_HAS_HDMI_VIC = (1 << 8);
/*
 * CEA-861 specific: only valid for video receivers.
 * If set, then HW can detect the difference between regular FPS and
 * 1000/1001 FPS. Note: This flag is only valid for HDMI VIC codes with
 * the V4L2_DV_FL_CAN_REDUCE_FPS flag set.
 */
export const V4L2_DV_FL_CAN_DETECT_REDUCED_FPS = (1 << 9);

/* A few useful defines to calculate the total blanking and frame sizes */
export function V4L2_DV_BT_BLANKING_WIDTH(bt: InstanceType<typeof v4l2_bt_timings>): number {
	return bt.hfrontporch + bt.hsync + bt.hbackporch;
}

export function V4L2_DV_BT_FRAME_WIDTH(bt: InstanceType<typeof v4l2_bt_timings>): number {
	return bt.width + V4L2_DV_BT_BLANKING_WIDTH(bt);
}

export function V4L2_DV_BT_BLANKING_HEIGHT(bt: InstanceType<typeof v4l2_bt_timings>): number {
	return bt.vfrontporch + bt.vsync + bt.vbackporch + (bt.interlaced ? (bt.il_vfrontporch + bt.il_vsync + bt.il_vbackporch) : 0);
}

export function V4L2_DV_BT_FRAME_HEIGHT(bt: InstanceType<typeof v4l2_bt_timings>): number {
	return bt.height + V4L2_DV_BT_BLANKING_HEIGHT(bt);
}

export const v4l2_dv_timings = StructType({
	type: ref.types.uint32,
	union: new UnionType({
	  	bt: v4l2_bt_timings,
		reserved: new ArrayType(ref.types.uint32, 32),
	}),
}, { packed: true });

/* Values for the type field */
export const V4L2_DV_BT_656_1120 = 0;	/* BT.656/1120 timing type */

/** struct v4l2_enum_dv_timings - DV timings enumeration
 * @index:	enumeration index
 * @pad:	the pad number for which to enumerate timings (used with
 *		v4l-subdev nodes only)
 * @reserved:	must be zeroed
 * @timings:	the timings for the given index
 */
export const v4l2_enum_dv_timings = StructType({
	index: ref.types.uint32,
	pad: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 2),
	timings: v4l2_dv_timings,
});


/** struct v4l2_bt_timings_cap - BT.656/BT.1120 timing capabilities
 * @min_width:		width in pixels
 * @max_width:		width in pixels
 * @min_height:		height in lines
 * @max_height:		height in lines
 * @min_pixelclock:	Pixel clock in HZ. Ex. 74.25MHz->74250000
 * @max_pixelclock:	Pixel clock in HZ. Ex. 74.25MHz->74250000
 * @standards:		Supported standards
 * @capabilities:	Supported capabilities
 * @reserved:		Must be zeroed
 */
export const v4l2_bt_timings_cap = StructType({
	min_width: ref.types.uint32,
	max_width: ref.types.uint32,
	min_height: ref.types.uint32,
	max_height: ref.types.uint32,
	min_pixelclock: ref.types.uint64,
	max_pixelclock: ref.types.uint64,
	standards: ref.types.uint32,
	capabilities: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 16),
}, { packed: true }); 

/* Supports interlaced formats */
export const V4L2_DV_BT_CAP_INTERLACED = (1 << 0);
/* Supports progressive formats */
export const V4L2_DV_BT_CAP_PROGRESSIVE = (1 << 1);
/* Supports CVT/GTF reduced blanking */
export const V4L2_DV_BT_CAP_REDUCED_BLANKING = (1 << 2);
/* Supports custom formats */
export const V4L2_DV_BT_CAP_CUSTOM = (1 << 3);

/** struct v4l2_dv_timings_cap - DV timings capabilities
 * @type:	the type of the timings (same as in struct v4l2_dv_timings)
 * @pad:	the pad number for which to query capabilities (used with
 *		v4l-subdev nodes only)
 * @bt:		the BT656/1120 timings capabilities
 */
 export const v4l2_dv_timings_cap = StructType({
	type: ref.types.uint32,
	pad: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 2),
	union: new UnionType({
		bt: v4l2_bt_timings_cap,
		raw_data: new ArrayType(ref.types.uint32, 32),
	}),
});

/*
 *	V I D E O   I N P U T S
 */
 export const v4l2_input = StructType({
	index: ref.types.uint32, /*  Which input */
	name: new ArrayType(ref.types.uint8, 32), /*  Label */
	type: ref.types.uint32, /*  Type of input */
	audioset: ref.types.uint32, /*  Associated audios (bitfield) */
	tuner: ref.types.uint32, /*  Tuner index */
	std: v4l2_std_id,
	status: ref.types.uint32,
	capabilities: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 3),
});

 /*  Values for the 'type' field */
export const V4L2_INPUT_TYPE_TUNER = 1;
export const V4L2_INPUT_TYPE_CAMERA = 2;
export const V4L2_INPUT_TYPE_TOUCH = 3;

/* field 'status' - general */
export const V4L2_IN_ST_NO_POWER = 0x00000001;  /* Attached device is off */
export const V4L2_IN_ST_NO_SIGNAL = 0x00000002;
export const V4L2_IN_ST_NO_COLOR = 0x00000004;

/* field 'status' - sensor orientation */
/* If sensor is mounted upside down set both bits */
export const V4L2_IN_ST_HFLIP = 0x00000010; /* Frames are flipped horizontally */
export const V4L2_IN_ST_VFLIP = 0x00000020; /* Frames are flipped vertically */

/* field 'status' - analog */
export const V4L2_IN_ST_NO_H_LOCK = 0x00000100;  /* No horizontal sync lock */
export const V4L2_IN_ST_COLOR_KILL = 0x00000200;  /* Color killer is active */
export const V4L2_IN_ST_NO_V_LOCK = 0x00000400;  /* No vertical sync lock */
export const V4L2_IN_ST_NO_STD_LOCK = 0x00000800;  /* No standard format lock */

/* field 'status' - digital */
export const V4L2_IN_ST_NO_SYNC = 0x00010000;  /* No synchronization lock */
export const V4L2_IN_ST_NO_EQU = 0x00020000;  /* No equalizer lock */
export const V4L2_IN_ST_NO_CARRIER = 0x00040000;  /* Carrier recovery failed */

/* field 'status' - VCR and set-top box */
export const V4L2_IN_ST_MACROVISION = 0x01000000;  /* Macrovision detected */
export const V4L2_IN_ST_NO_ACCESS = 0x02000000;  /* Conditional access denied */
export const V4L2_IN_ST_VTR = 0x04000000;  /* VTR time constant */

/* capabilities flags */
export const V4L2_IN_CAP_DV_TIMINGS = 0x00000002; /* Supports S_DV_TIMINGS */
export const V4L2_IN_CAP_CUSTOM_TIMINGS = V4L2_IN_CAP_DV_TIMINGS; /* For compatibility */
export const V4L2_IN_CAP_STD = 0x00000004; /* Supports S_STD */
export const V4L2_IN_CAP_NATIVE_SIZE = 0x00000008; /* Supports setting native size */

/*
 *	V I D E O   O U T P U T S
 */
 export const v4l2_output = StructType({
	index: ref.types.uint32, /*  Which output */
	name: new ArrayType(ref.types.uint8, 32), /*  Label */
	type: ref.types.uint32, /*  Type of output */
	audioset: ref.types.uint32, /*  Associated audios (bitfield) */
	modulator: ref.types.uint32, /*  Associated modulator */
	std: v4l2_std_id,
	capabilities: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 3),
});

/*  Values for the 'type' field */
export const V4L2_OUTPUT_TYPE_MODULATOR = 1;
export const V4L2_OUTPUT_TYPE_ANALOG = 2;
export const V4L2_OUTPUT_TYPE_ANALOGVGAOVERLAY = 3;

/* capabilities flags */
export const V4L2_OUT_CAP_DV_TIMINGS = 0x00000002; /* Supports S_DV_TIMINGS */
export const V4L2_OUT_CAP_CUSTOM_TIMINGS = V4L2_OUT_CAP_DV_TIMINGS; /* For compatibility */
export const V4L2_OUT_CAP_STD = 0x00000004; /* Supports S_STD */
export const V4L2_OUT_CAP_NATIVE_SIZE = 0x00000008; /* Supports setting native size */

/*
 *	C O N T R O L S
 */
export const v4l2_control = StructType({
	id: ref.types.uint32,
	value: ref.types.int32,
});

export const v4l2_ext_control = StructType({
	id: ref.types.uint32,
	size: ref.types.uint32,
	reserved2: new ArrayType(ref.types.uint32, 1),
	union: new UnionType({
		value: ref.types.int32,
		value64: ref.types.int64,
		string: ref.types.CString,
		p_u8: ref.refType(ref.types.uint8),
		p_u16: ref.refType(ref.types.uint16),
		p_u32: ref.refType(ref.types.uint32),
		p_area: ref.refType(v4l2_area),
	//   p_h264_sps: ref.refType(v4l2_ctrl_h264_sps),
	//   p_h264_pps: ref.refType(v4l2_ctrl_h264_pps),
	//   p_h264_scaling_matrix: ref.refType(v4l2_ctrl_h264_scaling_matrix),
	//   p_h264_pred_weights: ref.refType(v4l2_ctrl_h264_pred_weights),
	//   p_h264_slice_params: ref.refType(v4l2_ctrl_h264_slice_params),
	//   p_h264_decode_params: ref.refType(v4l2_ctrl_h264_decode_params),
	//   p_fwht_params: ref.refType(v4l2_ctrl_fwht_params),
	//   p_vp8_frame: ref.refType(v4l2_ctrl_vp8_frame),
	//   p_mpeg2_sequence: ref.refType(v4l2_ctrl_mpeg2_sequence),
	//   p_mpeg2_picture: ref.refType(v4l2_ctrl_mpeg2_picture),
	//   p_mpeg2_quantisation: ref.refType(v4l2_ctrl_mpeg2_quantisation),
	  	ptr: ref.refType(ref.types.void),
	}),
}, { packed: true });

export const v4l2_ext_controls = StructType({
	union: new UnionType({
		ctrl_class: ref.types.uint32,
		which: ref.types.uint32,
	}),
	count: ref.types.uint32,
	error_idx: ref.types.uint32,
	request_fd: ref.types.int32,
	reserved: new ArrayType(ref.types.uint32, 1),
	controls: ref.refType(v4l2_ext_control),
});

export const V4L2_CTRL_ID_MASK = (0x0fffffff);
export function V4L2_CTRL_ID2CLASS(id: number) { return  ((id) & 0x0fff0000) }
export function V4L2_CTRL_ID2WHICH(id: number) { return ((id) & 0x0fff0000) }
export function V4L2_CTRL_DRIVER_PRIV(id: number) { return (((id) & 0xffff) >= 0x1000) }
export const V4L2_CTRL_MAX_DIMS = (4);
export const V4L2_CTRL_WHICH_CUR_VAL = 0;
export const V4L2_CTRL_WHICH_DEF_VAL = 0x0f000000;
export const V4L2_CTRL_WHICH_REQUEST_VAL = 0x0f010000;

export enum v4l2_ctrl_type {
	V4L2_CTRL_TYPE_INTEGER	     = 1,
	V4L2_CTRL_TYPE_BOOLEAN	     = 2,
	V4L2_CTRL_TYPE_MENU	     = 3,
	V4L2_CTRL_TYPE_BUTTON	     = 4,
	V4L2_CTRL_TYPE_INTEGER64     = 5,
	V4L2_CTRL_TYPE_CTRL_CLASS    = 6,
	V4L2_CTRL_TYPE_STRING        = 7,
	V4L2_CTRL_TYPE_BITMASK       = 8,
	V4L2_CTRL_TYPE_INTEGER_MENU  = 9,

	/* Compound types are >= 0x0100 */
	V4L2_CTRL_COMPOUND_TYPES     = 0x0100,
	V4L2_CTRL_TYPE_U8	     = 0x0100,
	V4L2_CTRL_TYPE_U16	     = 0x0101,
	V4L2_CTRL_TYPE_U32	     = 0x0102,
	V4L2_CTRL_TYPE_AREA          = 0x0106,

	V4L2_CTRL_TYPE_HDR10_CLL_INFO		= 0x0110,
	V4L2_CTRL_TYPE_HDR10_MASTERING_DISPLAY	= 0x0111,

	V4L2_CTRL_TYPE_H264_SPS             = 0x0200,
	V4L2_CTRL_TYPE_H264_PPS		    = 0x0201,
	V4L2_CTRL_TYPE_H264_SCALING_MATRIX  = 0x0202,
	V4L2_CTRL_TYPE_H264_SLICE_PARAMS    = 0x0203,
	V4L2_CTRL_TYPE_H264_DECODE_PARAMS   = 0x0204,
	V4L2_CTRL_TYPE_H264_PRED_WEIGHTS    = 0x0205,

	V4L2_CTRL_TYPE_FWHT_PARAMS	    = 0x0220,

	V4L2_CTRL_TYPE_VP8_FRAME            = 0x0240,

	V4L2_CTRL_TYPE_MPEG2_QUANTISATION   = 0x0250,
	V4L2_CTRL_TYPE_MPEG2_SEQUENCE       = 0x0251,
	V4L2_CTRL_TYPE_MPEG2_PICTURE        = 0x0252,
};

/*  Used in the VIDIOC_QUERYCTRL ioctl for querying controls */
export const v4l2_queryctrl = StructType({
	id: ref.types.uint32,
	type: ref.types.uint32,
	name: new ArrayType(ref.types.uint8, 32),
	minimum: ref.types.int32,
	maximum: ref.types.int32,
	step: ref.types.int32,
	default_value: ref.types.int32,
	flags: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 2),
});

/*  Used in the VIDIOC_QUERY_EXT_CTRL ioctl for querying extended controls */
export const v4l2_query_ext_ctrl = StructType({
	id: ref.types.uint32,
	type: ref.types.uint32,
	name: new ArrayType(ref.types.char, 32),
	minimum: ref.types.int64,
	maximum: ref.types.int64,
	step: ref.types.uint64,
	default_value: ref.types.int64,
	flags: ref.types.uint32,
	elem_size: ref.types.uint32,
	elems: ref.types.uint32,
	nr_of_dims: ref.types.uint32,
	dims: new ArrayType(ref.types.uint32, V4L2_CTRL_MAX_DIMS),
	reserved: new ArrayType(ref.types.uint32, 32),
});

/*  Used in the VIDIOC_QUERYMENU ioctl for querying menu items */
export const v4l2_querymenu = StructType({
	id: ref.types.uint32,
	index: ref.types.uint32,
	union: new UnionType({
		name: new ArrayType(ref.types.uint8, 32), /* Whatever */
		value: ref.types.int64,
	}),
	reserved: ref.types.uint32,
}, { packed: true });

/*  Control flags  */
export const V4L2_CTRL_FLAG_DISABLED = 0x0001;
export const V4L2_CTRL_FLAG_GRABBED = 0x0002;
export const V4L2_CTRL_FLAG_READ_ONLY = 0x0004;
export const V4L2_CTRL_FLAG_UPDATE = 0x0008;
export const V4L2_CTRL_FLAG_INACTIVE = 0x0010;
export const V4L2_CTRL_FLAG_SLIDER = 0x0020;
export const V4L2_CTRL_FLAG_WRITE_ONLY = 0x0040;
export const V4L2_CTRL_FLAG_VOLATILE = 0x0080;
export const V4L2_CTRL_FLAG_HAS_PAYLOAD = 0x0100;
export const V4L2_CTRL_FLAG_EXECUTE_ON_WRITE = 0x0200;
export const V4L2_CTRL_FLAG_MODIFY_LAYOUT = 0x0400;

/*  Query flags, to be ORed with the control ID */
export const V4L2_CTRL_FLAG_NEXT_CTRL = 0x80000000;
export const V4L2_CTRL_FLAG_NEXT_COMPOUND = 0x40000000;

/*  User-class control IDs defined by V4L2 */
export const V4L2_CID_MAX_CTRLS = 1024;
/*  IDs reserved for driver specific controls */
export const V4L2_CID_PRIVATE_BASE = 0x08000000;

/*
 *	T U N I N G
 */
 export const v4l2_tuner = StructType({
	index: ref.types.uint32,
	name: new ArrayType(ref.types.uint8, 32),
	type: ref.types.uint32,
	capability: ref.types.uint32,
	rangelow: ref.types.uint32,
	rangehigh: ref.types.uint32,
	rxsubchans: ref.types.uint32,
	audmode: ref.types.uint32,
	signal: ref.types.int32,
	afc: ref.types.int32,
	reserved: new ArrayType(ref.types.uint32, 4),
});
  
export const v4l2_modulator = StructType({
	index: ref.types.uint32,
	name: new ArrayType(ref.types.uint8, 32),
	capability: ref.types.uint32,
	rangelow: ref.types.uint32,
	rangehigh: ref.types.uint32,
	txsubchans: ref.types.uint32,
	type: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 3),
});

 /*  Flags for the 'capability' field */
export const V4L2_TUNER_CAP_LOW = 0x0001;
export const V4L2_TUNER_CAP_NORM = 0x0002;
export const V4L2_TUNER_CAP_HWSEEK_BOUNDED = 0x0004;
export const V4L2_TUNER_CAP_HWSEEK_WRAP = 0x0008;
export const V4L2_TUNER_CAP_STEREO = 0x0010;
export const V4L2_TUNER_CAP_LANG2 = 0x0020;
export const V4L2_TUNER_CAP_SAP = 0x0020;
export const V4L2_TUNER_CAP_LANG1 = 0x0040;
export const V4L2_TUNER_CAP_RDS = 0x0080;
export const V4L2_TUNER_CAP_RDS_BLOCK_IO = 0x0100;
export const V4L2_TUNER_CAP_RDS_CONTROLS = 0x0200;
export const V4L2_TUNER_CAP_FREQ_BANDS = 0x0400;
export const V4L2_TUNER_CAP_HWSEEK_PROG_LIM = 0x0800;
export const V4L2_TUNER_CAP_1HZ = 0x1000;

/*  Flags for the 'rxsubchans' field */
export const V4L2_TUNER_SUB_MONO = 0x0001;
export const V4L2_TUNER_SUB_STEREO = 0x0002;
export const V4L2_TUNER_SUB_LANG2 = 0x0004;
export const V4L2_TUNER_SUB_SAP = 0x0004;
export const V4L2_TUNER_SUB_LANG1 = 0x0008;
export const V4L2_TUNER_SUB_RDS = 0x0010;

/*  Values for the 'audmode' field */
export const V4L2_TUNER_MODE_MONO = 0x0000;
export const V4L2_TUNER_MODE_STEREO = 0x0001;
export const V4L2_TUNER_MODE_LANG2 = 0x0002;
export const V4L2_TUNER_MODE_SAP = 0x0002;
export const V4L2_TUNER_MODE_LANG1 = 0x0003;
export const V4L2_TUNER_MODE_LANG1_LANG2 = 0x0004;

export const v4l2_frequency = StructType({
	tuner: ref.types.uint32,
	type: ref.types.uint32,
	frequency: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 8),
});

export const V4L2_BAND_MODULATION_VSB = (1 << 1);
export const V4L2_BAND_MODULATION_FM = (1 << 2);
export const V4L2_BAND_MODULATION_AM = (1 << 3);

export const v4l2_frequency_band = StructType({
	tuner: ref.types.uint32,
	type: ref.types.uint32,
	index: ref.types.uint32,
	capability: ref.types.uint32,
	rangelow: ref.types.uint32,
	rangehigh: ref.types.uint32,
	modulation: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 9),
});
  
export const v4l2_hw_freq_seek = StructType({
	tuner: ref.types.uint32,
	type: ref.types.uint32,
	seek_upward: ref.types.uint32,
	wrap_around: ref.types.uint32,
	spacing: ref.types.uint32,
	rangelow: ref.types.uint32,
	rangehigh: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 5),
});

/*
 *	R D S
 */

export const v4l2_rds_data = StructType({
	lsb: ref.types.uint8,
	msb: ref.types.uint8,
	block: ref.types.uint8,
}, { packed: true }); // Using the packed attribute

export const V4L2_RDS_BLOCK_MSK = 0x7;
export const V4L2_RDS_BLOCK_A = 0;
export const V4L2_RDS_BLOCK_B = 1;
export const V4L2_RDS_BLOCK_C = 2;
export const V4L2_RDS_BLOCK_D = 3;
export const V4L2_RDS_BLOCK_C_ALT = 4;
export const V4L2_RDS_BLOCK_INVALID = 7;

export const V4L2_RDS_BLOCK_CORRECTED = 0x40;
export const V4L2_RDS_BLOCK_ERROR = 0x80;


/*
 *	A U D I O
 */
export const v4l2_audio = StructType({
	index: ref.types.uint32,
	name: new ArrayType(ref.types.uint8, 32),
	capability: ref.types.uint32,
	mode: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 2),
});

/*  Flags for the 'capability' field */
export const V4L2_AUDCAP_STEREO = 0x00001;
export const V4L2_AUDCAP_AVL = 0x00002;

/*  Flags for the 'mode' field */
export const V4L2_AUDMODE_AVL = 0x00001;

export const v4l2_audioout = StructType({
	index: ref.types.uint32,
	name: new ArrayType(ref.types.uint8, 32),
	capability: ref.types.uint32,
	mode: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 2),
});

/*
 *	M P E G   S E R V I C E S
 */
export const V4L2_ENC_IDX_FRAME_I = (0);
export const V4L2_ENC_IDX_FRAME_P = (1);
export const V4L2_ENC_IDX_FRAME_B = (2);
export const V4L2_ENC_IDX_FRAME_MASK = (0xf);
 
export const v4l2_enc_idx_entry = StructType({
	offset: ref.types.uint64,
	pts: ref.types.uint64,
	length: ref.types.uint32,
	flags: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 2),
});

export const V4L2_ENC_IDX_ENTRIES = (64);
export const v4l2_enc_idx = StructType({
	entries: ref.types.uint32,
	entries_cap: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 4),
	entry: new ArrayType(v4l2_enc_idx_entry, V4L2_ENC_IDX_ENTRIES),
});


export const V4L2_ENC_CMD_START = (0);
export const V4L2_ENC_CMD_STOP = (1);
export const V4L2_ENC_CMD_PAUSE = (2);
export const V4L2_ENC_CMD_RESUME = (3);

/* Flags for V4L2_ENC_CMD_STOP */
export const V4L2_ENC_CMD_STOP_AT_GOP_END = (1 << 0);

export const v4l2_encoder_cmd = StructType({
	cmd: ref.types.uint32,
	flags: ref.types.uint32,
	raw: new StructType({
		data: new ArrayType(ref.types.uint32, 8),
	}),
});

/* Decoder commands */
export const V4L2_DEC_CMD_START = (0);
export const V4L2_DEC_CMD_STOP = (1);
export const V4L2_DEC_CMD_PAUSE = (2);
export const V4L2_DEC_CMD_RESUME = (3);
export const V4L2_DEC_CMD_FLUSH = (4);

/* Flags for V4L2_DEC_CMD_START */
export const V4L2_DEC_CMD_START_MUTE_AUDIO = (1 << 0);

/* Flags for V4L2_DEC_CMD_PAUSE */
export const V4L2_DEC_CMD_PAUSE_TO_BLACK = (1 << 0);

/* Flags for V4L2_DEC_CMD_STOP */
export const V4L2_DEC_CMD_STOP_TO_BLACK = (1 << 0);
export const V4L2_DEC_CMD_STOP_IMMEDIATELY = (1 << 1);

/* Play format requirements (returned by the driver): */

/* The decoder has no special format requirements */
export const V4L2_DEC_START_FMT_NONE = (0);
/* The decoder requires full GOPs */
export const V4L2_DEC_START_FMT_GOP = (1);

export const v4l2_decoder_cmd = StructType({
	cmd: ref.types.uint32,
	flags: ref.types.uint32,
	union: new UnionType({
		stop: new StructType({
			pts: ref.types.uint64,
		}),
		start: new StructType({
			/* 0 or 1000 specifies normal speed,
			   1 specifies forward single stepping,
			   -1 specifies backward single stepping,
			   >1: playback at speed/1000 of the normal speed,
			   <-1: reverse playback at (-speed/1000) of the normal speed. */
			speed: ref.types.int32,
			format: ref.types.uint32,
		}),
		raw: new ArrayType(ref.types.uint32, 16),
	}),
});

/*
 *	D A T A   S E R V I C E S   ( V B I )
 *
 *	Data services API by Michael Schimek
 */

/* Raw VBI */
export const v4l2_vbi_format = StructType({
	sampling_rate: ref.types.uint32,
	offset: ref.types.uint32,
	samples_per_line: ref.types.uint32,
	sample_format: ref.types.uint32, // Assuming V4L2_PIX_FMT_* is uint32
	start: new ArrayType(ref.types.int32, 2),
	count: new ArrayType(ref.types.uint32, 2),
	flags: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 2),
});

/*  VBI flags  */
export const V4L2_VBI_UNSYNC = (1 << 0);
export const V4L2_VBI_INTERLACED = (1 << 1);

/* ITU-R start lines for each field */
export const V4L2_VBI_ITU_525_F1_START = (1);
export const V4L2_VBI_ITU_525_F2_START = (264);
export const V4L2_VBI_ITU_625_F1_START = (1);
export const V4L2_VBI_ITU_625_F2_START = (314);

/* Sliced VBI
 *
 *    This implements is a proposal V4L2 API to allow SLICED VBI
 * required for some hardware encoders. It should change without
 * notice in the definitive implementation.
 */

export const v4l2_sliced_vbi_format = StructType({
	service_set: ref.types.uint16,
	/* service_lines[0][...] specifies lines 0-23 (1-23 used) of the first field
	   service_lines[1][...] specifies lines 0-23 (1-23 used) of the second field
				 (equals frame lines 313-336 for 625 line video
				  standards, 263-286 for 525 line standards) */
	service_lines: new ArrayType(new ArrayType(ref.types.uint16, 24), 2),
	io_size: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint32, 2), /* must be zero */
});

/* Teletext World System Teletext
   (WST), defined on ITU-R BT.653-2 */
export const V4L2_SLICED_TELETEXT_B = (0x0001);
/* Video Program System, defined on ETS 300 231*/
export const V4L2_SLICED_VPS = (0x0400);
/* Closed Caption, defined on EIA-608 */
export const V4L2_SLICED_CAPTION_525 = (0x1000);
/* Wide Screen System, defined on ITU-R BT1119.1 */
export const V4L2_SLICED_WSS_625 = (0x4000);

export const V4L2_SLICED_VBI_525 = (V4L2_SLICED_CAPTION_525);
export const V4L2_SLICED_VBI_625 = (V4L2_SLICED_TELETEXT_B | V4L2_SLICED_VPS | V4L2_SLICED_WSS_625);

export const v4l2_sliced_vbi_cap = StructType({
	service_set: ref.types.uint16,
	/* service_lines[0][...] specifies lines 0-23 (1-23 used) of the first field
	   service_lines[1][...] specifies lines 0-23 (1-23 used) of the second field
				 (equals frame lines 313-336 for 625 line video
				  standards, 263-286 for 525 line standards) */
	service_lines: new ArrayType(new ArrayType(ref.types.uint16, 24), 2),
	type: ref.types.uint32, /* enum v4l2_buf_type */
	reserved: new ArrayType(ref.types.uint32, 3),  /* must be 0 */
});
  
export const v4l2_sliced_vbi_data = StructType({
	id: ref.types.uint32,
	field: ref.types.uint32, /* 0: first field, 1: second field */
	line: ref.types.uint32, /* 1-23 */
	reserved: ref.types.uint32, /* must be 0 */
	data: new ArrayType(ref.types.uint8, 48),
});

/*
 * Sliced VBI data inserted into MPEG Streams
 */

/*
 * V4L2_MPEG_STREAM_VBI_FMT_IVTV:
 *
 * Structure of payload contained in an MPEG 2 Private Stream 1 PES Packet in an
 * MPEG-2 Program Pack that contains V4L2_MPEG_STREAM_VBI_FMT_IVTV Sliced VBI
 * data
 *
 * Note, the MPEG-2 Program Pack and Private Stream 1 PES packet header
 * definitions are not included here.  See the MPEG-2 specifications for details
 * on these headers.
 */

/* Line type IDs */
export const V4L2_MPEG_VBI_IVTV_TELETEXT_B = (1);
export const V4L2_MPEG_VBI_IVTV_CAPTION_525 = (4);
export const V4L2_MPEG_VBI_IVTV_WSS_625 = (5);
export const V4L2_MPEG_VBI_IVTV_VPS = (7);

export const v4l2_mpeg_vbi_itv0_line = StructType({
	id: ref.types.uint8, /* One of V4L2_MPEG_VBI_IVTV_* above */
	data: new ArrayType(ref.types.uint8, 42), /* Sliced VBI data for the line */
}, { packed: true });
  
export const v4l2_mpeg_vbi_itv0 = StructType({
	linemask: new ArrayType(ref.types.uint32, 2), /* Bitmasks of VBI service lines present */
	line: new ArrayType(v4l2_mpeg_vbi_itv0_line, 35),
}, { packed: true });
  
export const v4l2_mpeg_vbi_ITV0 = StructType({
	line: new ArrayType(v4l2_mpeg_vbi_itv0_line, 36),
}, { packed: true });

export const V4L2_MPEG_VBI_IVTV_MAGIC0 = "itv0";
export const V4L2_MPEG_VBI_IVTV_MAGIC1 = "ITV0";

export const v4l2_mpeg_vbi_fmt_ivtv = StructType({
	magic: new ArrayType(ref.types.uint8, 4),
	union: new UnionType({
		itv0: v4l2_mpeg_vbi_itv0,
		ITV0: v4l2_mpeg_vbi_ITV0,
	}),
}, { packed: true });

/*
 *	A G G R E G A T E   S T R U C T U R E S
 */

/**
 * struct v4l2_plane_pix_format - additional, per-plane format definition
 * @sizeimage:		maximum size in bytes required for data, for which
 *			this plane will be used
 * @bytesperline:	distance in bytes between the leftmost pixels in two
 *			adjacent lines
 * @reserved:		drivers and applications must zero this array
 */
export const v4l2_plane_pix_format = StructType({
	sizeimage: ref.types.uint32,
	bytesperline: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint16, 6),
}, { packed: true });

/**
 * struct v4l2_pix_format_mplane - multiplanar format definition
 * @width:		image width in pixels
 * @height:		image height in pixels
 * @pixelformat:	little endian four character code (fourcc)
 * @field:		enum v4l2_field; field order (for interlaced video)
 * @colorspace:		enum v4l2_colorspace; supplemental to pixelformat
 * @plane_fmt:		per-plane information
 * @num_planes:		number of planes for this format
 * @flags:		format flags (V4L2_PIX_FMT_FLAG_*)
 * @ycbcr_enc:		enum v4l2_ycbcr_encoding, Y'CbCr encoding
 * @hsv_enc:		enum v4l2_hsv_encoding, HSV encoding
 * @quantization:	enum v4l2_quantization, colorspace quantization
 * @xfer_func:		enum v4l2_xfer_func, colorspace transfer function
 * @reserved:		drivers and applications must zero this array
 */
export const v4l2_pix_format_mplane = StructType({
	width: ref.types.uint32,
	height: ref.types.uint32,
	pixelformat: ref.types.uint32,
	field: ref.types.uint32,
	colorspace: ref.types.uint32,
	plane_fmt: new ArrayType(v4l2_plane_pix_format, VIDEO_MAX_PLANES),
	num_planes: ref.types.uint8,
	flags: ref.types.uint8,
	union: new UnionType({
		ycbcr_enc: ref.types.uint8,
		hsv_enc: ref.types.uint8,
	}),
	quantization: ref.types.uint8,
	xfer_func: ref.types.uint8,
	reserved: new ArrayType(ref.types.uint8, 7),
}, { packed: true });

/**
 * struct v4l2_sdr_format - SDR format definition
 * @pixelformat:	little endian four character code (fourcc)
 * @buffersize:		maximum size in bytes required for data
 * @reserved:		drivers and applications must zero this array
 */
export const v4l2_sdr_format = StructType({
	pixelformat: ref.types.uint32,
	buffersize: ref.types.uint32,
	reserved: new ArrayType(ref.types.uint8, 24),
}, { packed: true });

/**
 * struct v4l2_meta_format - metadata format definition
 * @dataformat:		little endian four character code (fourcc)
 * @buffersize:		maximum size in bytes required for data
 */
export const v4l2_meta_format = StructType({
	dataformat: ref.types.uint32,
	buffersize: ref.types.uint32,
}, { packed: true });

/**
 * struct v4l2_format - stream data format
 * @type:	enum v4l2_buf_type; type of the data stream
 * @pix:	definition of an image format
 * @pix_mp:	definition of a multiplanar image format
 * @win:	definition of an overlaid image
 * @vbi:	raw VBI capture or output parameters
 * @sliced:	sliced VBI capture or output parameters
 * @raw_data:	placeholder for future extensions and custom formats
 * @fmt:	union of @pix, @pix_mp, @win, @vbi, @sliced, @sdr, @meta
 *		and @raw_data
 */

export const v4l2_format = StructType({
	type: ref.types.uint32,
	_padding0: new ArrayType(ref.types.uint8, 4), // pad by 4 bytes to fix alignment
	fmt: new UnionType({
		pix: v4l2_pix_format,
		pix_mp: v4l2_pix_format_mplane,
		win: v4l2_window,
		vbi: v4l2_vbi_format,
		sliced: v4l2_sliced_vbi_format,
		sdr: v4l2_sdr_format,
		meta: v4l2_meta_format,
		raw: new ArrayType(ref.types.uint8, 200),
	}),
});

/*	Stream type-dependent parameters
 */
export const v4l2_streamparm = StructType({
	type: ref.types.uint32, /* enum v4l2_buf_type */
	parm: new UnionType({
		capture: v4l2_captureparm,
		output: v4l2_outputparm,
		raw_data: new ArrayType(ref.types.uint8, 200), /* user-defined */
	}),
});

/*
 *	E V E N T S
 */

export const V4L2_EVENT_ALL = 0;
export const V4L2_EVENT_VSYNC = 1;
export const V4L2_EVENT_EOS = 2;
export const V4L2_EVENT_CTRL = 3;
export const V4L2_EVENT_FRAME_SYNC = 4;
export const V4L2_EVENT_SOURCE_CHANGE = 5;
export const V4L2_EVENT_MOTION_DET = 6;
export const V4L2_EVENT_PRIVATE_START = 0x08000000;

/* Payload for V4L2_EVENT_VSYNC */
export const v4l2_event_vsync = StructType({
	field: ref.types.uint8,
}, { packed: true });

/* Payload for V4L2_EVENT_CTRL */
export const V4L2_EVENT_CTRL_CH_VALUE = (1 << 0);
export const V4L2_EVENT_CTRL_CH_FLAGS = (1 << 1);
export const V4L2_EVENT_CTRL_CH_RANGE = (1 << 2);

export const v4l2_event_ctrl = StructType({
	changes: ref.types.uint32,
	type: ref.types.uint32,
	value: UnionType({
		value: ref.types.int32,
		value64: ref.types.int64,
	}),
	flags: ref.types.uint32,
	minimum: ref.types.int32,
	maximum: ref.types.int32,
	step: ref.types.int32,
	default_value: ref.types.int32,
});
  
export const v4l2_event_frame_sync = StructType({
	frame_sequence: ref.types.uint32,
});

export const V4L2_EVENT_SRC_CH_RESOLUTION = (1 << 0);

export const v4l2_event_src_change = StructType({
	changes: ref.types.uint32,
});

export const V4L2_EVENT_MD_FL_HAVE_FRAME_SEQ = (1 << 0);

/**
 * struct v4l2_event_motion_det - motion detection event
 * @flags:             if V4L2_EVENT_MD_FL_HAVE_FRAME_SEQ is set, then the
 *                     frame_sequence field is valid.
 * @frame_sequence:    the frame sequence number associated with this event.
 * @region_mask:       which regions detected motion.
 */

export const v4l2_event_motion_det = StructType({
	flags: ref.types.uint32,
	frame_sequence: ref.types.uint32,
	region_mask: ref.types.uint32,
});
  
export const v4l2_event = StructType({
	type: ref.types.uint32,
	u: new UnionType({
	  vsync: StructType({}),
	  ctrl: StructType({}),
	  frame_sync: StructType({}),
	  src_change: StructType({}),
	  motion_det: v4l2_event_motion_det,
	  data: ArrayType(ref.types.uint8, 64),
	}),
	pending: ref.types.uint32,
	sequence: ref.types.uint32,
	timestamp: timespec,
	id: ref.types.uint32,
	reserved: ArrayType(ref.types.uint32, 8),
});

export const V4L2_EVENT_SUB_FL_SEND_INITIAL = (1 << 0);
export const V4L2_EVENT_SUB_FL_ALLOW_FEEDBACK = (1 << 1);

export const v4l2_event_subscription = StructType({
	type: ref.types.uint32,
	id: ref.types.uint32,
	flags: ref.types.uint32,
	reserved: ArrayType(ref.types.uint32, 5),
});

export const ioctl = constants_native.ioctl as {
	VIDIOC_QUERYCAP: number;
	VIDIOC_ENUM_FMT: number;
	VIDIOC_G_FMT: number;
	VIDIOC_S_FMT: number;
	VIDIOC_REQBUFS: number;
	VIDIOC_QUERYBUF: number;
	VIDIOC_G_FBUF: number;
	VIDIOC_S_FBUF: number;
	VIDIOC_OVERLAY: number;
	VIDIOC_QBUF: number;
	VIDIOC_EXPBUF: number;
	VIDIOC_DQBUF: number;
	VIDIOC_STREAMON: number;
	VIDIOC_STREAMOFF: number;
	VIDIOC_G_PARM: number;
	VIDIOC_S_PARM: number;
	VIDIOC_G_STD: number;
	VIDIOC_S_STD: number;
	VIDIOC_ENUMSTD: number;
	VIDIOC_ENUMINPUT: number;
	VIDIOC_G_CTRL: number;
	VIDIOC_S_CTRL: number;
	VIDIOC_G_TUNER: number;
	VIDIOC_S_TUNER: number;
	VIDIOC_G_AUDIO: number;
	VIDIOC_S_AUDIO: number;
	VIDIOC_QUERYCTRL: number;
	VIDIOC_QUERYMENU: number;
	VIDIOC_G_INPUT: number;
	VIDIOC_S_INPUT: number;
	VIDIOC_G_EDID: number;
	VIDIOC_S_EDID: number;
	VIDIOC_G_OUTPUT: number;
	VIDIOC_S_OUTPUT: number;
	VIDIOC_ENUMOUTPUT: number;
	VIDIOC_G_AUDOUT: number;
	VIDIOC_S_AUDOUT: number;
	VIDIOC_G_MODULATOR: number;
	VIDIOC_S_MODULATOR: number;
	VIDIOC_G_FREQUENCY: number;
	VIDIOC_S_FREQUENCY: number;
	VIDIOC_CROPCAP: number;
	VIDIOC_G_CROP: number;
	VIDIOC_S_CROP: number;
	VIDIOC_G_JPEGCOMP: number;
	VIDIOC_S_JPEGCOMP: number;
	VIDIOC_QUERYSTD: number;
	VIDIOC_TRY_FMT: number;
	VIDIOC_ENUMAUDIO: number;
	VIDIOC_ENUMAUDOUT: number;
	VIDIOC_G_PRIORITY: number;
	VIDIOC_S_PRIORITY: number;
	VIDIOC_G_SLICED_VBI_CAP: number;
	VIDIOC_LOG_STATUS: number;
	VIDIOC_G_EXT_CTRLS: number;
	VIDIOC_S_EXT_CTRLS: number;
	VIDIOC_TRY_EXT_CTRLS: number;
	VIDIOC_ENUM_FRAMESIZES: number;
	VIDIOC_ENUM_FRAMEINTERVALS: number;
	VIDIOC_G_ENC_INDEX: number;
	VIDIOC_ENCODER_CMD: number;
	VIDIOC_TRY_ENCODER_CMD: number;
};