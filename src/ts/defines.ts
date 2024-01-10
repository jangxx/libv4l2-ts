import { v4l2_fourcc } from "./index";

function v4l2_fourcc_be(a: string, b: string, c: string, d: string) {
	return v4l2_fourcc(a, b, c, d) | (1 << 31);
}

/** copied and slightly adapted from videodev2.h */
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

export enum v4l2_priority {
	V4L2_PRIORITY_UNSET       = 0,  /* not initialized */
	V4L2_PRIORITY_BACKGROUND  = 1,
	V4L2_PRIORITY_INTERACTIVE = 2,
	V4L2_PRIORITY_RECORD      = 3,
	V4L2_PRIORITY_DEFAULT     = V4L2_PRIORITY_INTERACTIVE,
};

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


export enum v4l2_frmsizetypes {
	V4L2_FRMSIZE_TYPE_DISCRETE	= 1,
	V4L2_FRMSIZE_TYPE_CONTINUOUS	= 2,
	V4L2_FRMSIZE_TYPE_STEPWISE	= 3,
};

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