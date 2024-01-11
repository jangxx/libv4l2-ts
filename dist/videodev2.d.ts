/** copied and slightly adapted from videodev2.h */
import ref from "ref-napi";
import ref_struct from "ref-struct-di";
import ref_union from "ref-union-di";
import ref_array from "ref-array-di";
export declare const VIDEO_MAX_FRAME = 32;
export declare const VIDEO_MAX_PLANES = 8;
export declare enum v4l2_field {
    V4L2_FIELD_ANY = 0,/* driver can choose from none,
                     top, bottom, interlaced
                     depending on whatever it thinks
                     is approximate ... */
    V4L2_FIELD_NONE = 1,/* this device has no fields ... */
    V4L2_FIELD_TOP = 2,/* top field only */
    V4L2_FIELD_BOTTOM = 3,/* bottom field only */
    V4L2_FIELD_INTERLACED = 4,/* both fields interlaced */
    V4L2_FIELD_SEQ_TB = 5,/* both fields sequential into one
                     buffer, top-bottom order */
    V4L2_FIELD_SEQ_BT = 6,/* same as above + bottom-top order */
    V4L2_FIELD_ALTERNATE = 7,/* both fields alternating into
                     separate buffers */
    V4L2_FIELD_INTERLACED_TB = 8,/* both fields interlaced, top field
                     first and the top field is
                     transmitted first */
    V4L2_FIELD_INTERLACED_BT = 9
}
export declare function V4L2_FIELD_HAS_TOP(field: v4l2_field): boolean;
export declare function V4L2_FIELD_HAS_BOTTOM(field: v4l2_field): boolean;
export declare function V4L2_FIELD_HAS_BOTH(field: v4l2_field): boolean;
export declare function V4L2_FIELD_HAS_T_OR_B(field: v4l2_field): boolean;
export declare function V4L2_FIELD_IS_INTERLACED(field: v4l2_field): boolean;
export declare function V4L2_FIELD_IS_SEQUENTIAL(field: v4l2_field): boolean;
export declare enum v4l2_buf_type {
    V4L2_BUF_TYPE_VIDEO_CAPTURE = 1,
    V4L2_BUF_TYPE_VIDEO_OUTPUT = 2,
    V4L2_BUF_TYPE_VIDEO_OVERLAY = 3,
    V4L2_BUF_TYPE_VBI_CAPTURE = 4,
    V4L2_BUF_TYPE_VBI_OUTPUT = 5,
    V4L2_BUF_TYPE_SLICED_VBI_CAPTURE = 6,
    V4L2_BUF_TYPE_SLICED_VBI_OUTPUT = 7,
    V4L2_BUF_TYPE_VIDEO_OUTPUT_OVERLAY = 8,
    V4L2_BUF_TYPE_VIDEO_CAPTURE_MPLANE = 9,
    V4L2_BUF_TYPE_VIDEO_OUTPUT_MPLANE = 10,
    V4L2_BUF_TYPE_SDR_CAPTURE = 11,
    V4L2_BUF_TYPE_SDR_OUTPUT = 12,
    V4L2_BUF_TYPE_META_CAPTURE = 13,
    V4L2_BUF_TYPE_META_OUTPUT = 14,
    V4L2_BUF_TYPE_PRIVATE = 128
}
export declare function V4L2_TYPE_IS_MULTIPLANAR(type: v4l2_buf_type): boolean;
export declare function V4L2_TYPE_IS_OUTPUT(type: v4l2_buf_type): boolean;
export declare function V4L2_TYPE_IS_CAPTURE(type: v4l2_buf_type): boolean;
export declare enum v4l2_tuner_type {
    V4L2_TUNER_RADIO = 1,
    V4L2_TUNER_ANALOG_TV = 2,
    V4L2_TUNER_DIGITAL_TV = 3,
    V4L2_TUNER_SDR = 4,
    V4L2_TUNER_RF = 5
}
export declare enum v4l2_memory {
    V4L2_MEMORY_MMAP = 1,
    V4L2_MEMORY_USERPTR = 2,
    V4L2_MEMORY_OVERLAY = 3,
    V4L2_MEMORY_DMABUF = 4
}
export declare enum v4l2_colorspace {
    V4L2_COLORSPACE_DEFAULT = 0,
    V4L2_COLORSPACE_SMPTE170M = 1,
    V4L2_COLORSPACE_SMPTE240M = 2,
    V4L2_COLORSPACE_REC709 = 3,
    V4L2_COLORSPACE_BT878 = 4,
    V4L2_COLORSPACE_470_SYSTEM_M = 5,
    V4L2_COLORSPACE_470_SYSTEM_BG = 6,
    V4L2_COLORSPACE_JPEG = 7,
    V4L2_COLORSPACE_SRGB = 8,
    V4L2_COLORSPACE_OPRGB = 9,
    V4L2_COLORSPACE_BT2020 = 10,
    V4L2_COLORSPACE_RAW = 11,
    V4L2_COLORSPACE_DCI_P3 = 12
}
export declare function V4L2_MAP_COLORSPACE_DEFAULT(is_sdtv: boolean, is_hdtv: boolean): v4l2_colorspace.V4L2_COLORSPACE_SMPTE170M | v4l2_colorspace.V4L2_COLORSPACE_REC709 | v4l2_colorspace.V4L2_COLORSPACE_SRGB;
export declare enum v4l2_xfer_func {
    V4L2_XFER_FUNC_DEFAULT = 0,
    V4L2_XFER_FUNC_709 = 1,
    V4L2_XFER_FUNC_SRGB = 2,
    V4L2_XFER_FUNC_OPRGB = 3,
    V4L2_XFER_FUNC_SMPTE240M = 4,
    V4L2_XFER_FUNC_NONE = 5,
    V4L2_XFER_FUNC_DCI_P3 = 6,
    V4L2_XFER_FUNC_SMPTE2084 = 7
}
export declare function V4L2_MAP_XFER_FUNC_DEFAULT(colsp: v4l2_colorspace): v4l2_xfer_func;
export declare enum v4l2_ycbcr_encoding {
    V4L2_YCBCR_ENC_DEFAULT = 0,
    V4L2_YCBCR_ENC_601 = 1,
    V4L2_YCBCR_ENC_709 = 2,
    V4L2_YCBCR_ENC_XV601 = 3,
    V4L2_YCBCR_ENC_XV709 = 4,
    V4L2_YCBCR_ENC_SYCC = 5,
    V4L2_YCBCR_ENC_BT2020 = 6,
    V4L2_YCBCR_ENC_BT2020_CONST_LUM = 7,
    V4L2_YCBCR_ENC_SMPTE240M = 8
}
export declare enum v4l2_hsv_encoding {
    V4L2_HSV_ENC_180 = 128,
    V4L2_HSV_ENC_256 = 129
}
export declare function V4L2_MAP_YCBCR_ENC_DEFAULT(colsp: v4l2_colorspace): v4l2_ycbcr_encoding;
export declare enum v4l2_quantization {
    V4L2_QUANTIZATION_DEFAULT = 0,
    V4L2_QUANTIZATION_FULL_RANGE = 1,
    V4L2_QUANTIZATION_LIM_RANGE = 2
}
export declare function V4L2_MAP_QUANTIZATION_DEFAULT(is_rgb_or_hsv: boolean, colsp: v4l2_colorspace): v4l2_quantization;
export declare enum v4l2_priority {
    V4L2_PRIORITY_UNSET = 0,/* not initialized */
    V4L2_PRIORITY_BACKGROUND = 1,
    V4L2_PRIORITY_INTERACTIVE = 2,
    V4L2_PRIORITY_RECORD = 3,
    V4L2_PRIORITY_DEFAULT = 2
}
export declare const v4l2_rect: ref_struct.StructType<{
    left: ref.Type<number>;
    top: ref.Type<number>;
    width: ref.Type<number>;
    height: ref.Type<number>;
}>;
export declare const v4l2_fract: ref_struct.StructType<{
    numerator: ref.Type<number>;
    denominator: ref.Type<number>;
}>;
export declare const v4l2_area: ref_struct.StructType<{
    width: ref.Type<number>;
    height: ref.Type<number>;
}>;
export declare const v4l2_capability: ref_struct.StructType<{
    driver: ref.Type<ref_array.TypedArray<number, 16>>;
    card: ref.Type<ref_array.TypedArray<number, 32>>;
    bus_info: ref.Type<ref_array.TypedArray<number, 32>>;
    version: ref.Type<number>;
    capabilities: ref.Type<number>;
    device_caps: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 3>>;
}>;
export declare const V4L2_CAP_VIDEO_CAPTURE = 1;
export declare const V4L2_CAP_VIDEO_OUTPUT = 2;
export declare const V4L2_CAP_VIDEO_OVERLAY = 4;
export declare const V4L2_CAP_VBI_CAPTURE = 16;
export declare const V4L2_CAP_VBI_OUTPUT = 32;
export declare const V4L2_CAP_SLICED_VBI_CAPTURE = 64;
export declare const V4L2_CAP_SLICED_VBI_OUTPUT = 128;
export declare const V4L2_CAP_RDS_CAPTURE = 256;
export declare const V4L2_CAP_VIDEO_OUTPUT_OVERLAY = 512;
export declare const V4L2_CAP_HW_FREQ_SEEK = 1024;
export declare const V4L2_CAP_RDS_OUTPUT = 2048;
export declare const V4L2_CAP_VIDEO_CAPTURE_MPLANE = 4096;
export declare const V4L2_CAP_VIDEO_OUTPUT_MPLANE = 8192;
export declare const V4L2_CAP_VIDEO_M2M_MPLANE = 16384;
export declare const V4L2_CAP_VIDEO_M2M = 32768;
export declare const V4L2_CAP_TUNER = 65536;
export declare const V4L2_CAP_AUDIO = 131072;
export declare const V4L2_CAP_RADIO = 262144;
export declare const V4L2_CAP_MODULATOR = 524288;
export declare const V4L2_CAP_SDR_CAPTURE = 1048576;
export declare const V4L2_CAP_EXT_PIX_FORMAT = 2097152;
export declare const V4L2_CAP_SDR_OUTPUT = 4194304;
export declare const V4L2_CAP_META_CAPTURE = 8388608;
export declare const V4L2_CAP_READWRITE = 16777216;
export declare const V4L2_CAP_ASYNCIO = 33554432;
export declare const V4L2_CAP_STREAMING = 67108864;
export declare const V4L2_CAP_META_OUTPUT = 134217728;
export declare const V4L2_CAP_TOUCH = 268435456;
export declare const V4L2_CAP_IO_MC = 536870912;
export declare const V4L2_CAP_DEVICE_CAPS = 2147483648;
export declare const v4l2_pix_format: ref_struct.StructType<{
    width: ref.Type<number>;
    height: ref.Type<number>;
    pixelformat: ref.Type<number>;
    field: ref.Type<number>;
    bytesperline: ref.Type<number>;
    sizeimage: ref.Type<number>;
    colorspace: ref.Type<number>;
    priv: ref.Type<number>;
    flags: ref.Type<number>;
    encoding: ref.Type<ref_union.UnionObject<{
        ycbcr_enc: number;
        hsv_enc: number;
    }>>;
    quantization: ref.Type<number>;
    xfer_func: ref.Type<number>;
}>;
export declare const V4L2_PIX_FMT_RGB332: number;
export declare const V4L2_PIX_FMT_RGB444: number;
export declare const V4L2_PIX_FMT_ARGB444: number;
export declare const V4L2_PIX_FMT_XRGB444: number;
export declare const V4L2_PIX_FMT_RGBA444: number;
export declare const V4L2_PIX_FMT_RGBX444: number;
export declare const V4L2_PIX_FMT_ABGR444: number;
export declare const V4L2_PIX_FMT_XBGR444: number;
export declare const V4L2_PIX_FMT_BGRA444: number;
export declare const V4L2_PIX_FMT_BGRX444: number;
export declare const V4L2_PIX_FMT_RGB555: number;
export declare const V4L2_PIX_FMT_ARGB555: number;
export declare const V4L2_PIX_FMT_XRGB555: number;
export declare const V4L2_PIX_FMT_RGBA555: number;
export declare const V4L2_PIX_FMT_RGBX555: number;
export declare const V4L2_PIX_FMT_ABGR555: number;
export declare const V4L2_PIX_FMT_XBGR555: number;
export declare const V4L2_PIX_FMT_BGRA555: number;
export declare const V4L2_PIX_FMT_BGRX555: number;
export declare const V4L2_PIX_FMT_RGB565: number;
export declare const V4L2_PIX_FMT_RGB555X: number;
export declare const V4L2_PIX_FMT_ARGB555X: number;
export declare const V4L2_PIX_FMT_XRGB555X: number;
export declare const V4L2_PIX_FMT_RGB565X: number;
export declare const V4L2_PIX_FMT_BGR666: number;
export declare const V4L2_PIX_FMT_BGR24: number;
export declare const V4L2_PIX_FMT_RGB24: number;
export declare const V4L2_PIX_FMT_BGR32: number;
export declare const V4L2_PIX_FMT_ABGR32: number;
export declare const V4L2_PIX_FMT_XBGR32: number;
export declare const V4L2_PIX_FMT_BGRA32: number;
export declare const V4L2_PIX_FMT_BGRX32: number;
export declare const V4L2_PIX_FMT_RGB32: number;
export declare const V4L2_PIX_FMT_RGBA32: number;
export declare const V4L2_PIX_FMT_RGBX32: number;
export declare const V4L2_PIX_FMT_ARGB32: number;
export declare const V4L2_PIX_FMT_XRGB32: number;
export declare const V4L2_PIX_FMT_GREY: number;
export declare const V4L2_PIX_FMT_Y4: number;
export declare const V4L2_PIX_FMT_Y6: number;
export declare const V4L2_PIX_FMT_Y10: number;
export declare const V4L2_PIX_FMT_Y12: number;
export declare const V4L2_PIX_FMT_Y14: number;
export declare const V4L2_PIX_FMT_Y16: number;
export declare const V4L2_PIX_FMT_Y16_BE: number;
export declare const V4L2_PIX_FMT_Y10BPACK: number;
export declare const V4L2_PIX_FMT_Y10P: number;
export declare const V4L2_PIX_FMT_PAL8: number;
export declare const V4L2_PIX_FMT_UV8: number;
export declare const V4L2_PIX_FMT_YUYV: number;
export declare const V4L2_PIX_FMT_YYUV: number;
export declare const V4L2_PIX_FMT_YVYU: number;
export declare const V4L2_PIX_FMT_UYVY: number;
export declare const V4L2_PIX_FMT_VYUY: number;
export declare const V4L2_PIX_FMT_Y41P: number;
export declare const V4L2_PIX_FMT_YUV444: number;
export declare const V4L2_PIX_FMT_YUV555: number;
export declare const V4L2_PIX_FMT_YUV565: number;
export declare const V4L2_PIX_FMT_YUV24: number;
export declare const V4L2_PIX_FMT_YUV32: number;
export declare const V4L2_PIX_FMT_AYUV32: number;
export declare const V4L2_PIX_FMT_XYUV32: number;
export declare const V4L2_PIX_FMT_VUYA32: number;
export declare const V4L2_PIX_FMT_VUYX32: number;
export declare const V4L2_PIX_FMT_M420: number;
export declare const V4L2_PIX_FMT_NV12: number;
export declare const V4L2_PIX_FMT_NV21: number;
export declare const V4L2_PIX_FMT_NV16: number;
export declare const V4L2_PIX_FMT_NV61: number;
export declare const V4L2_PIX_FMT_NV24: number;
export declare const V4L2_PIX_FMT_NV42: number;
export declare const V4L2_PIX_FMT_HM12: number;
export declare const V4L2_PIX_FMT_NV12M: number;
export declare const V4L2_PIX_FMT_NV21M: number;
export declare const V4L2_PIX_FMT_NV16M: number;
export declare const V4L2_PIX_FMT_NV61M: number;
export declare const V4L2_PIX_FMT_NV12MT: number;
export declare const V4L2_PIX_FMT_NV12MT_16X16: number;
export declare const V4L2_PIX_FMT_YUV410: number;
export declare const V4L2_PIX_FMT_YVU410: number;
export declare const V4L2_PIX_FMT_YUV411P: number;
export declare const V4L2_PIX_FMT_YUV420: number;
export declare const V4L2_PIX_FMT_YVU420: number;
export declare const V4L2_PIX_FMT_YUV422P: number;
export declare const V4L2_PIX_FMT_YUV420M: number;
export declare const V4L2_PIX_FMT_YVU420M: number;
export declare const V4L2_PIX_FMT_YUV422M: number;
export declare const V4L2_PIX_FMT_YVU422M: number;
export declare const V4L2_PIX_FMT_YUV444M: number;
export declare const V4L2_PIX_FMT_YVU444M: number;
export declare const V4L2_PIX_FMT_SBGGR8: number;
export declare const V4L2_PIX_FMT_SGBRG8: number;
export declare const V4L2_PIX_FMT_SGRBG8: number;
export declare const V4L2_PIX_FMT_SRGGB8: number;
export declare const V4L2_PIX_FMT_SBGGR10: number;
export declare const V4L2_PIX_FMT_SGBRG10: number;
export declare const V4L2_PIX_FMT_SGRBG10: number;
export declare const V4L2_PIX_FMT_SRGGB10: number;
export declare const V4L2_PIX_FMT_SBGGR10P: number;
export declare const V4L2_PIX_FMT_SGBRG10P: number;
export declare const V4L2_PIX_FMT_SGRBG10P: number;
export declare const V4L2_PIX_FMT_SRGGB10P: number;
export declare const V4L2_PIX_FMT_SBGGR10ALAW8: number;
export declare const V4L2_PIX_FMT_SGBRG10ALAW8: number;
export declare const V4L2_PIX_FMT_SGRBG10ALAW8: number;
export declare const V4L2_PIX_FMT_SRGGB10ALAW8: number;
export declare const V4L2_PIX_FMT_SBGGR10DPCM8: number;
export declare const V4L2_PIX_FMT_SGBRG10DPCM8: number;
export declare const V4L2_PIX_FMT_SGRBG10DPCM8: number;
export declare const V4L2_PIX_FMT_SRGGB10DPCM8: number;
export declare const V4L2_PIX_FMT_SBGGR12: number;
export declare const V4L2_PIX_FMT_SGBRG12: number;
export declare const V4L2_PIX_FMT_SGRBG12: number;
export declare const V4L2_PIX_FMT_SRGGB12: number;
export declare const V4L2_PIX_FMT_SBGGR12P: number;
export declare const V4L2_PIX_FMT_SGBRG12P: number;
export declare const V4L2_PIX_FMT_SGRBG12P: number;
export declare const V4L2_PIX_FMT_SRGGB12P: number;
export declare const V4L2_PIX_FMT_SBGGR14: number;
export declare const V4L2_PIX_FMT_SGBRG14: number;
export declare const V4L2_PIX_FMT_SGRBG14: number;
export declare const V4L2_PIX_FMT_SRGGB14: number;
export declare const V4L2_PIX_FMT_SBGGR14P: number;
export declare const V4L2_PIX_FMT_SGBRG14P: number;
export declare const V4L2_PIX_FMT_SGRBG14P: number;
export declare const V4L2_PIX_FMT_SRGGB14P: number;
export declare const V4L2_PIX_FMT_SBGGR16: number;
export declare const V4L2_PIX_FMT_SGBRG16: number;
export declare const V4L2_PIX_FMT_SGRBG16: number;
export declare const V4L2_PIX_FMT_SRGGB16: number;
export declare const V4L2_PIX_FMT_HSV24: number;
export declare const V4L2_PIX_FMT_HSV32: number;
export declare const V4L2_PIX_FMT_MJPEG: number;
export declare const V4L2_PIX_FMT_JPEG: number;
export declare const V4L2_PIX_FMT_DV: number;
export declare const V4L2_PIX_FMT_MPEG: number;
export declare const V4L2_PIX_FMT_H264: number;
export declare const V4L2_PIX_FMT_H264_NO_SC: number;
export declare const V4L2_PIX_FMT_H264_MVC: number;
export declare const V4L2_PIX_FMT_H263: number;
export declare const V4L2_PIX_FMT_MPEG1: number;
export declare const V4L2_PIX_FMT_MPEG2: number;
export declare const V4L2_PIX_FMT_MPEG2_SLICE: number;
export declare const V4L2_PIX_FMT_MPEG4: number;
export declare const V4L2_PIX_FMT_XVID: number;
export declare const V4L2_PIX_FMT_VC1_ANNEX_G: number;
export declare const V4L2_PIX_FMT_VC1_ANNEX_L: number;
export declare const V4L2_PIX_FMT_VP8: number;
export declare const V4L2_PIX_FMT_VP8_FRAME: number;
export declare const V4L2_PIX_FMT_VP9: number;
export declare const V4L2_PIX_FMT_HEVC: number;
export declare const V4L2_PIX_FMT_FWHT: number;
export declare const V4L2_PIX_FMT_FWHT_STATELESS: number;
export declare const V4L2_PIX_FMT_H264_SLICE: number;
export declare const V4L2_PIX_FMT_CPIA1: number;
export declare const V4L2_PIX_FMT_WNVA: number;
export declare const V4L2_PIX_FMT_SN9C10X: number;
export declare const V4L2_PIX_FMT_SN9C20X_I420: number;
export declare const V4L2_PIX_FMT_PWC1: number;
export declare const V4L2_PIX_FMT_PWC2: number;
export declare const V4L2_PIX_FMT_ET61X251: number;
export declare const V4L2_PIX_FMT_SPCA501: number;
export declare const V4L2_PIX_FMT_SPCA505: number;
export declare const V4L2_PIX_FMT_SPCA508: number;
export declare const V4L2_PIX_FMT_SPCA561: number;
export declare const V4L2_PIX_FMT_PAC207: number;
export declare const V4L2_PIX_FMT_MR97310A: number;
export declare const V4L2_PIX_FMT_JL2005BCD: number;
export declare const V4L2_PIX_FMT_SN9C2028: number;
export declare const V4L2_PIX_FMT_SQ905C: number;
export declare const V4L2_PIX_FMT_PJPG: number;
export declare const V4L2_PIX_FMT_OV511: number;
export declare const V4L2_PIX_FMT_OV518: number;
export declare const V4L2_PIX_FMT_STV0680: number;
export declare const V4L2_PIX_FMT_TM6000: number;
export declare const V4L2_PIX_FMT_CIT_YYVYUY: number;
export declare const V4L2_PIX_FMT_KONICA420: number;
export declare const V4L2_PIX_FMT_JPGL: number;
export declare const V4L2_PIX_FMT_SE401: number;
export declare const V4L2_PIX_FMT_S5C_UYVY_JPG: number;
export declare const V4L2_PIX_FMT_Y8I: number;
export declare const V4L2_PIX_FMT_Y12I: number;
export declare const V4L2_PIX_FMT_Z16: number;
export declare const V4L2_PIX_FMT_MT21C: number;
export declare const V4L2_PIX_FMT_INZI: number;
export declare const V4L2_PIX_FMT_SUNXI_TILED_NV12: number;
export declare const V4L2_PIX_FMT_CNF4: number;
export declare const V4L2_PIX_FMT_HI240: number;
export declare const V4L2_PIX_FMT_IPU3_SBGGR10: number;
export declare const V4L2_PIX_FMT_IPU3_SGBRG10: number;
export declare const V4L2_PIX_FMT_IPU3_SGRBG10: number;
export declare const V4L2_PIX_FMT_IPU3_SRGGB10: number;
export declare const V4L2_SDR_FMT_CU8: number;
export declare const V4L2_SDR_FMT_CU16LE: number;
export declare const V4L2_SDR_FMT_CS8: number;
export declare const V4L2_SDR_FMT_CS14LE: number;
export declare const V4L2_SDR_FMT_RU12LE: number;
export declare const V4L2_SDR_FMT_PCU16BE: number;
export declare const V4L2_SDR_FMT_PCU18BE: number;
export declare const V4L2_SDR_FMT_PCU20BE: number;
export declare const V4L2_TCH_FMT_DELTA_TD16: number;
export declare const V4L2_TCH_FMT_DELTA_TD08: number;
export declare const V4L2_TCH_FMT_TU16: number;
export declare const V4L2_TCH_FMT_TU08: number;
export declare const V4L2_META_FMT_VSP1_HGO: number;
export declare const V4L2_META_FMT_VSP1_HGT: number;
export declare const V4L2_META_FMT_UVC: number;
export declare const V4L2_META_FMT_D4XX: number;
export declare const V4L2_META_FMT_VIVID: number;
export declare const V4L2_META_FMT_RK_ISP1_PARAMS: number;
export declare const V4L2_META_FMT_RK_ISP1_STAT_3A: number;
export declare const V4L2_PIX_FMT_PRIV_MAGIC = 4276996862;
export declare const V4L2_PIX_FMT_FLAG_PREMUL_ALPHA = 1;
export declare const V4L2_PIX_FMT_FLAG_SET_CSC = 2;
export declare const v4l2_fmtdesc: ref_struct.StructType<{
    index: ref.Type<number>;
    type: ref.Type<number>;
    flags: ref.Type<number>;
    description: ref.Type<ref_array.TypedArray<number, 32>>;
    pixelformat: ref.Type<number>;
    mbus_code: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 3>>;
}>;
export declare const V4L2_FMT_FLAG_COMPRESSED = 1;
export declare const V4L2_FMT_FLAG_EMULATED = 2;
export declare const V4L2_FMT_FLAG_CONTINUOUS_BYTESTREAM = 4;
export declare const V4L2_FMT_FLAG_DYN_RESOLUTION = 8;
export declare const V4L2_FMT_FLAG_ENC_CAP_FRAME_INTERVAL = 16;
export declare const V4L2_FMT_FLAG_CSC_COLORSPACE = 32;
export declare const V4L2_FMT_FLAG_CSC_XFER_FUNC = 64;
export declare const V4L2_FMT_FLAG_CSC_YCBCR_ENC = 128;
export declare const V4L2_FMT_FLAG_CSC_HSV_ENC = 128;
export declare const V4L2_FMT_FLAG_CSC_QUANTIZATION = 256;
export declare enum v4l2_frmsizetypes {
    V4L2_FRMSIZE_TYPE_DISCRETE = 1,
    V4L2_FRMSIZE_TYPE_CONTINUOUS = 2,
    V4L2_FRMSIZE_TYPE_STEPWISE = 3
}
export declare const v4l2_frmsize_discrete: ref_struct.StructType<{
    width: ref.Type<number>;
    height: ref.Type<number>;
}>;
export declare const v4l2_frmsize_stepwise: ref_struct.StructType<{
    min_width: ref.Type<number>;
    max_width: ref.Type<number>;
    step_width: ref.Type<number>;
    min_height: ref.Type<number>;
    max_height: ref.Type<number>;
    step_height: ref.Type<number>;
}>;
export declare const v4l2_frmsizeenum: ref_struct.StructType<{
    index: ref.Type<number>;
    pixel_format: ref.Type<number>;
    type: ref.Type<number>;
    union: ref.Type<ref_union.UnionObject<{
        discrete: ref_struct.StructObject<{
            width: number;
            height: number;
        }>;
        stepwise: ref_struct.StructObject<{
            min_width: number;
            max_width: number;
            step_width: number;
            min_height: number;
            max_height: number;
            step_height: number;
        }>;
    }>>;
    reserved: ref.Type<ref_array.TypedArray<number, 2>>;
}>;
export declare enum v4l2_frmivaltypes {
    V4L2_FRMIVAL_TYPE_DISCRETE = 1,
    V4L2_FRMIVAL_TYPE_CONTINUOUS = 2,
    V4L2_FRMIVAL_TYPE_STEPWISE = 3
}
export declare const v4l2_frmival_stepwise: ref_struct.StructType<{
    min: ref.Type<ref_struct.StructObject<{
        numerator: number;
        denominator: number;
    }>>;
    max: ref.Type<ref_struct.StructObject<{
        numerator: number;
        denominator: number;
    }>>;
    step: ref.Type<ref_struct.StructObject<{
        numerator: number;
        denominator: number;
    }>>;
}>;
export declare const v4l2_frmivalenum: ref_struct.StructType<{
    index: ref.Type<number>;
    pixel_format: ref.Type<number>;
    width: ref.Type<number>;
    height: ref.Type<number>;
    type: ref.Type<number>;
    union: ref.Type<ref_union.UnionObject<{
        discrete: ref_struct.StructObject<{
            numerator: number;
            denominator: number;
        }>;
        stepwise: ref_struct.StructObject<{
            min: ref_struct.StructObject<{
                numerator: number;
                denominator: number;
            }>;
            max: ref_struct.StructObject<{
                numerator: number;
                denominator: number;
            }>;
            step: ref_struct.StructObject<{
                numerator: number;
                denominator: number;
            }>;
        }>;
    }>>;
    reserved: ref.Type<ref_array.TypedArray<number, 2>>;
}>;
export declare const v4l2_timecode: ref_struct.StructType<{
    type: ref.Type<number>;
    flags: ref.Type<number>;
    frames: ref.Type<number>;
    seconds: ref.Type<number>;
    minutes: ref.Type<number>;
    hours: ref.Type<number>;
    userbits: ref.Type<ref_array.TypedArray<number, 4>>;
}>;
export declare const V4L2_TC_TYPE_24FPS = 1;
export declare const V4L2_TC_TYPE_25FPS = 2;
export declare const V4L2_TC_TYPE_30FPS = 3;
export declare const V4L2_TC_TYPE_50FPS = 4;
export declare const V4L2_TC_TYPE_60FPS = 5;
export declare const V4L2_TC_FLAG_DROPFRAME = 1;
export declare const V4L2_TC_FLAG_COLORFRAME = 2;
export declare const V4L2_TC_USERBITS_field = 12;
export declare const V4L2_TC_USERBITS_USERDEFINED = 0;
export declare const V4L2_TC_USERBITS_8BITCHARS = 8;
export declare const v4l2_jpegcompression: ref_struct.StructType<{
    quality: ref.Type<number>;
    APPn: ref.Type<number>;
    APP_len: ref.Type<number>;
    APP_data: ref.Type<ref_array.TypedArray<number, 60>>;
    COM_len: ref.Type<number>;
    COM_data: ref.Type<ref_array.TypedArray<number, 60>>;
    jpeg_markers: ref.Type<number>;
}>;
export declare const V4L2_JPEG_MARKER_DHT: number;
export declare const V4L2_JPEG_MARKER_DQT: number;
export declare const V4L2_JPEG_MARKER_DRI: number;
export declare const V4L2_JPEG_MARKER_COM: number;
export declare const V4L2_JPEG_MARKER_APP: number;
export declare const v4l2_requestbuffers: ref_struct.StructType<{
    count: ref.Type<number>;
    type: ref.Type<number>;
    memory: ref.Type<number>;
    capabilities: ref.Type<number>;
    reserved: ref.Type<number>;
}>;
export declare const V4L2_BUF_CAP_SUPPORTS_MMAP: number;
export declare const V4L2_BUF_CAP_SUPPORTS_USERPTR: number;
export declare const V4L2_BUF_CAP_SUPPORTS_DMABUF: number;
export declare const V4L2_BUF_CAP_SUPPORTS_REQUESTS: number;
export declare const V4L2_BUF_CAP_SUPPORTS_ORPHANED_BUFS: number;
export declare const V4L2_BUF_CAP_SUPPORTS_M2M_HOLD_CAPTURE_BUF: number;
export declare const V4L2_BUF_CAP_SUPPORTS_MMAP_CACHE_HINTS: number;
export declare const v4l2_plane: ref_struct.StructType<{
    bytesused: ref.Type<number>;
    length: ref.Type<number>;
    m: ref.Type<ref_union.UnionObject<{
        mem_offset: number;
        userptr: string | number;
        fd: number;
    }>>;
    data_offset: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 11>>;
}>;
export declare const v4l2_buffer: ref_struct.StructType<{
    index: ref.Type<number>;
    type: ref.Type<number>;
    bytesused: ref.Type<number>;
    flags: ref.Type<number>;
    field: ref.Type<number>;
    timestamp: ref.Type<ref_struct.StructObject<{
        tv_sec: string | number;
        tv_usec: string | number;
    }>>;
    timecode: ref.Type<ref_struct.StructObject<{
        type: number;
        flags: number;
        frames: number;
        seconds: number;
        minutes: number;
        hours: number;
        userbits: ref_array.TypedArray<number, 4>;
    }>>;
    sequence: ref.Type<number>;
    memory: ref.Type<number>;
    m: ref.Type<ref_union.UnionObject<{
        offset: number;
        userptr: string | number;
        planes: ref.Pointer<ref_struct.StructObject<{
            bytesused: number;
            length: number;
            m: ref_union.UnionObject<{
                mem_offset: number;
                userptr: string | number;
                fd: number;
            }>;
            data_offset: number;
            reserved: ref_array.TypedArray<number, 11>;
        }>>;
        fd: number;
    }>>;
    length: ref.Type<number>;
    reserved2: ref.Type<number>;
    r: ref.Type<ref_union.UnionObject<{
        request_fd: number;
        reserved: number;
    }>>;
}>;
export declare const V4L2_BUF_FLAG_MAPPED = 1;
export declare const V4L2_BUF_FLAG_QUEUED = 2;
export declare const V4L2_BUF_FLAG_DONE = 4;
export declare const V4L2_BUF_FLAG_KEYFRAME = 8;
export declare const V4L2_BUF_FLAG_PFRAME = 16;
export declare const V4L2_BUF_FLAG_BFRAME = 32;
export declare const V4L2_BUF_FLAG_ERROR = 64;
export declare const V4L2_BUF_FLAG_IN_REQUEST = 128;
export declare const V4L2_BUF_FLAG_TIMECODE = 256;
export declare const V4L2_BUF_FLAG_M2M_HOLD_CAPTURE_BUF = 512;
export declare const V4L2_BUF_FLAG_PREPARED = 1024;
export declare const V4L2_BUF_FLAG_NO_CACHE_INVALIDATE = 2048;
export declare const V4L2_BUF_FLAG_NO_CACHE_CLEAN = 4096;
export declare const V4L2_BUF_FLAG_TIMESTAMP_MASK = 57344;
export declare const V4L2_BUF_FLAG_TIMESTAMP_UNKNOWN = 0;
export declare const V4L2_BUF_FLAG_TIMESTAMP_MONOTONIC = 8192;
export declare const V4L2_BUF_FLAG_TIMESTAMP_COPY = 16384;
export declare const V4L2_BUF_FLAG_TSTAMP_SRC_MASK = 458752;
export declare const V4L2_BUF_FLAG_TSTAMP_SRC_EOF = 0;
export declare const V4L2_BUF_FLAG_TSTAMP_SRC_SOE = 65536;
export declare const V4L2_BUF_FLAG_LAST = 1048576;
export declare const V4L2_BUF_FLAG_REQUEST_FD = 8388608;
export declare const v4l2_exportbuffer: ref_struct.StructType<{
    type: ref.Type<number>;
    index: ref.Type<number>;
    plane: ref.Type<number>;
    flags: ref.Type<number>;
    fd: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 11>>;
}>;
export declare const v4l2_framebuffer: ref_struct.StructType<{
    capability: ref.Type<number>;
    flags: ref.Type<number>;
    base: ref.Type<ref.Pointer<void>>;
    fmt: ref.Type<ref_struct.StructObject<{
        width: number;
        height: number;
        pixelformat: number;
        field: number;
        bytesperline: number;
        sizeimage: number;
        colorspace: number;
        priv: number;
    }>>;
}>;
export declare const V4L2_FBUF_CAP_EXTERNOVERLAY = 1;
export declare const V4L2_FBUF_CAP_CHROMAKEY = 2;
export declare const V4L2_FBUF_CAP_LIST_CLIPPING = 4;
export declare const V4L2_FBUF_CAP_BITMAP_CLIPPING = 8;
export declare const V4L2_FBUF_CAP_LOCAL_ALPHA = 16;
export declare const V4L2_FBUF_CAP_GLOBAL_ALPHA = 32;
export declare const V4L2_FBUF_CAP_LOCAL_INV_ALPHA = 64;
export declare const V4L2_FBUF_CAP_SRC_CHROMAKEY = 128;
export declare const V4L2_FBUF_FLAG_PRIMARY = 1;
export declare const V4L2_FBUF_FLAG_OVERLAY = 2;
export declare const V4L2_FBUF_FLAG_CHROMAKEY = 4;
export declare const V4L2_FBUF_FLAG_LOCAL_ALPHA = 8;
export declare const V4L2_FBUF_FLAG_GLOBAL_ALPHA = 16;
export declare const V4L2_FBUF_FLAG_LOCAL_INV_ALPHA = 32;
export declare const V4L2_FBUF_FLAG_SRC_CHROMAKEY = 64;
export declare const v4l2_clip: ref_struct.StructType<{
    c: ref.Type<ref_struct.StructObject<{
        left: number;
        top: number;
        width: number;
        height: number;
    }>>;
}>;
export declare const v4l2_window: ref_struct.StructType<{
    w: ref.Type<ref_struct.StructObject<{
        left: number;
        top: number;
        width: number;
        height: number;
    }>>;
    field: ref.Type<number>;
    chromakey: ref.Type<number>;
    clips: ref.Type<ref.Pointer<ref_struct.StructObject<{
        c: ref_struct.StructObject<{
            left: number;
            top: number;
            width: number;
            height: number;
        }>;
    }>>>;
    clipcount: ref.Type<number>;
    bitmap: ref.Type<ref.Pointer<void>>;
    global_alpha: ref.Type<number>;
}>;
export declare const v4l2_captureparm: ref_struct.StructType<{
    capability: ref.Type<number>;
    capturemode: ref.Type<number>;
    timeperframe: ref.Type<ref_struct.StructObject<{
        numerator: number;
        denominator: number;
    }>>;
    extendedmode: ref.Type<number>;
    readbuffers: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 4>>;
}>;
export declare const V4L2_MODE_HIGHQUALITY = 1;
export declare const V4L2_CAP_TIMEPERFRAME = 4096;
export declare const v4l2_outputparm: ref_struct.StructType<{
    capability: ref.Type<number>;
    outputmode: ref.Type<number>;
    timeperframe: ref.Type<ref_struct.StructObject<{
        numerator: number;
        denominator: number;
    }>>;
    extendedmode: ref.Type<number>;
    writebuffers: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 4>>;
}>;
export declare const v4l2_cropcap: ref_struct.StructType<{
    type: ref.Type<number>;
    bounds: ref.Type<ref_struct.StructObject<{
        left: number;
        top: number;
        width: number;
        height: number;
    }>>;
    defrect: ref.Type<ref_struct.StructObject<{
        left: number;
        top: number;
        width: number;
        height: number;
    }>>;
    pixelaspect: ref.Type<ref_struct.StructObject<{
        numerator: number;
        denominator: number;
    }>>;
}>;
export declare const v4l2_crop: ref_struct.StructType<{
    type: ref.Type<number>;
    c: ref.Type<ref_struct.StructObject<{
        left: number;
        top: number;
        width: number;
        height: number;
    }>>;
}>;
export declare const v4l2_selection: ref_struct.StructType<{
    type: ref.Type<number>;
    target: ref.Type<number>;
    flags: ref.Type<number>;
    r: ref.Type<ref_struct.StructObject<{
        left: number;
        top: number;
        width: number;
        height: number;
    }>>;
    reserved: ref.Type<ref_array.TypedArray<number, 9>>;
}>;
export declare const v4l2_std_id: ref.Type<string | number>;
export declare const V4L2_STD_PAL_B = 1;
export declare const V4L2_STD_PAL_B1 = 2;
export declare const V4L2_STD_PAL_G = 4;
export declare const V4L2_STD_PAL_H = 8;
export declare const V4L2_STD_PAL_I = 16;
export declare const V4L2_STD_PAL_D = 32;
export declare const V4L2_STD_PAL_D1 = 64;
export declare const V4L2_STD_PAL_K = 128;
export declare const V4L2_STD_PAL_M = 256;
export declare const V4L2_STD_PAL_N = 512;
export declare const V4L2_STD_PAL_Nc = 1024;
export declare const V4L2_STD_PAL_60 = 2048;
export declare const V4L2_STD_NTSC_M = 4096;
export declare const V4L2_STD_NTSC_M_JP = 8192;
export declare const V4L2_STD_NTSC_443 = 16384;
export declare const V4L2_STD_NTSC_M_KR = 32768;
export declare const V4L2_STD_SECAM_B = 65536;
export declare const V4L2_STD_SECAM_D = 131072;
export declare const V4L2_STD_SECAM_G = 262144;
export declare const V4L2_STD_SECAM_H = 524288;
export declare const V4L2_STD_SECAM_K = 1048576;
export declare const V4L2_STD_SECAM_K1 = 2097152;
export declare const V4L2_STD_SECAM_L = 4194304;
export declare const V4L2_STD_SECAM_LC = 8388608;
export declare const V4L2_STD_ATSC_8_VSB = 16777216;
export declare const V4L2_STD_ATSC_16_VSB = 33554432;
export declare const V4L2_STD_NTSC: number;
export declare const V4L2_STD_SECAM_DK: number;
export declare const V4L2_STD_SECAM: number;
export declare const V4L2_STD_PAL_BG: number;
export declare const V4L2_STD_PAL_DK: number;
export declare const V4L2_STD_PAL: number;
export declare const V4L2_STD_B: number;
export declare const V4L2_STD_G: number;
export declare const V4L2_STD_H: number;
export declare const V4L2_STD_L: number;
export declare const V4L2_STD_GH: number;
export declare const V4L2_STD_DK: number;
export declare const V4L2_STD_BG: number;
export declare const V4L2_STD_MN: number;
export declare const V4L2_STD_MTS: number;
export declare const V4L2_STD_525_60: number;
export declare const V4L2_STD_625_50: number;
export declare const V4L2_STD_ATSC: number;
export declare const V4L2_STD_UNKNOWN = 0;
export declare const V4L2_STD_ALL: number;
export declare const v4l2_standard: ref_struct.StructType<{
    index: ref.Type<number>;
    id: ref.Type<string | number>;
    name: ref.Type<ref_array.TypedArray<number, 24>>;
    frameperiod: ref.Type<ref_struct.StructObject<{
        numerator: number;
        denominator: number;
    }>>;
    framelines: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 4>>;
}>;
export declare const v4l2_bt_timings: ref_struct.StructType<{
    width: ref.Type<number>;
    height: ref.Type<number>;
    interlaced: ref.Type<number>;
    polarities: ref.Type<number>;
    pixelclock: ref.Type<string | number>;
    hfrontporch: ref.Type<number>;
    hsync: ref.Type<number>;
    hbackporch: ref.Type<number>;
    vfrontporch: ref.Type<number>;
    vsync: ref.Type<number>;
    vbackporch: ref.Type<number>;
    il_vfrontporch: ref.Type<number>;
    il_vsync: ref.Type<number>;
    il_vbackporch: ref.Type<number>;
    standards: ref.Type<number>;
    flags: ref.Type<number>;
    picture_aspect: ref.Type<ref_struct.StructObject<{
        numerator: number;
        denominator: number;
    }>>;
    cea861_vic: ref.Type<number>;
    hdmi_vic: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 46>>;
}>;
export declare const V4L2_DV_PROGRESSIVE = 0;
export declare const V4L2_DV_INTERLACED = 1;
export declare const V4L2_DV_VSYNC_POS_POL = 1;
export declare const V4L2_DV_HSYNC_POS_POL = 2;
export declare const V4L2_DV_BT_STD_CEA861: number;
export declare const V4L2_DV_BT_STD_DMT: number;
export declare const V4L2_DV_BT_STD_CVT: number;
export declare const V4L2_DV_BT_STD_GTF: number;
export declare const V4L2_DV_BT_STD_SDI: number;
export declare const V4L2_DV_FL_REDUCED_BLANKING: number;
export declare const V4L2_DV_FL_CAN_REDUCE_FPS: number;
export declare const V4L2_DV_FL_REDUCED_FPS: number;
export declare const V4L2_DV_FL_HALF_LINE: number;
export declare const V4L2_DV_FL_IS_CE_VIDEO: number;
export declare const V4L2_DV_FL_FIRST_FIELD_EXTRA_LINE: number;
export declare const V4L2_DV_FL_HAS_PICTURE_ASPECT: number;
export declare const V4L2_DV_FL_HAS_CEA861_VIC: number;
export declare const V4L2_DV_FL_HAS_HDMI_VIC: number;
export declare const V4L2_DV_FL_CAN_DETECT_REDUCED_FPS: number;
export declare function V4L2_DV_BT_BLANKING_WIDTH(bt: InstanceType<typeof v4l2_bt_timings>): number;
export declare function V4L2_DV_BT_FRAME_WIDTH(bt: InstanceType<typeof v4l2_bt_timings>): number;
export declare function V4L2_DV_BT_BLANKING_HEIGHT(bt: InstanceType<typeof v4l2_bt_timings>): number;
export declare function V4L2_DV_BT_FRAME_HEIGHT(bt: InstanceType<typeof v4l2_bt_timings>): number;
export declare const v4l2_dv_timings: ref_struct.StructType<{
    type: ref.Type<number>;
    union: ref.Type<ref_union.UnionObject<{
        bt: ref_struct.StructObject<{
            width: number;
            height: number;
            interlaced: number;
            polarities: number;
            pixelclock: string | number;
            hfrontporch: number;
            hsync: number;
            hbackporch: number;
            vfrontporch: number;
            vsync: number;
            vbackporch: number;
            il_vfrontporch: number;
            il_vsync: number;
            il_vbackporch: number;
            standards: number;
            flags: number;
            picture_aspect: ref_struct.StructObject<{
                numerator: number;
                denominator: number;
            }>;
            cea861_vic: number;
            hdmi_vic: number;
            reserved: ref_array.TypedArray<number, 46>;
        }>;
        reserved: ref_array.TypedArray<number, 32>;
    }>>;
}>;
export declare const V4L2_DV_BT_656_1120 = 0;
/** struct v4l2_enum_dv_timings - DV timings enumeration
 * @index:	enumeration index
 * @pad:	the pad number for which to enumerate timings (used with
 *		v4l-subdev nodes only)
 * @reserved:	must be zeroed
 * @timings:	the timings for the given index
 */
export declare const v4l2_enum_dv_timings: ref_struct.StructType<{
    index: ref.Type<number>;
    pad: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 2>>;
    timings: ref.Type<ref_struct.StructObject<{
        type: number;
        union: ref_union.UnionObject<{
            bt: ref_struct.StructObject<{
                width: number;
                height: number;
                interlaced: number;
                polarities: number;
                pixelclock: string | number;
                hfrontporch: number;
                hsync: number;
                hbackporch: number;
                vfrontporch: number;
                vsync: number;
                vbackporch: number;
                il_vfrontporch: number;
                il_vsync: number;
                il_vbackporch: number;
                standards: number;
                flags: number;
                picture_aspect: ref_struct.StructObject<{
                    numerator: number;
                    denominator: number;
                }>;
                cea861_vic: number;
                hdmi_vic: number;
                reserved: ref_array.TypedArray<number, 46>;
            }>;
            reserved: ref_array.TypedArray<number, 32>;
        }>;
    }>>;
}>;
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
export declare const v4l2_bt_timings_cap: ref_struct.StructType<{
    min_width: ref.Type<number>;
    max_width: ref.Type<number>;
    min_height: ref.Type<number>;
    max_height: ref.Type<number>;
    min_pixelclock: ref.Type<string | number>;
    max_pixelclock: ref.Type<string | number>;
    standards: ref.Type<number>;
    capabilities: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 16>>;
}>;
export declare const V4L2_DV_BT_CAP_INTERLACED: number;
export declare const V4L2_DV_BT_CAP_PROGRESSIVE: number;
export declare const V4L2_DV_BT_CAP_REDUCED_BLANKING: number;
export declare const V4L2_DV_BT_CAP_CUSTOM: number;
/** struct v4l2_dv_timings_cap - DV timings capabilities
 * @type:	the type of the timings (same as in struct v4l2_dv_timings)
 * @pad:	the pad number for which to query capabilities (used with
 *		v4l-subdev nodes only)
 * @bt:		the BT656/1120 timings capabilities
 */
export declare const v4l2_dv_timings_cap: ref_struct.StructType<{
    type: ref.Type<number>;
    pad: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 2>>;
    union: ref.Type<ref_union.UnionObject<{
        bt: ref_struct.StructObject<{
            min_width: number;
            max_width: number;
            min_height: number;
            max_height: number;
            min_pixelclock: string | number;
            max_pixelclock: string | number;
            standards: number;
            capabilities: number;
            reserved: ref_array.TypedArray<number, 16>;
        }>;
        raw_data: ref_array.TypedArray<number, 32>;
    }>>;
}>;
export declare const v4l2_input: ref_struct.StructType<{
    index: ref.Type<number>;
    name: ref.Type<ref_array.TypedArray<number, 32>>;
    type: ref.Type<number>;
    audioset: ref.Type<number>;
    tuner: ref.Type<number>;
    std: ref.Type<string | number>;
    status: ref.Type<number>;
    capabilities: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 3>>;
}>;
export declare const V4L2_INPUT_TYPE_TUNER = 1;
export declare const V4L2_INPUT_TYPE_CAMERA = 2;
export declare const V4L2_INPUT_TYPE_TOUCH = 3;
export declare const V4L2_IN_ST_NO_POWER = 1;
export declare const V4L2_IN_ST_NO_SIGNAL = 2;
export declare const V4L2_IN_ST_NO_COLOR = 4;
export declare const V4L2_IN_ST_HFLIP = 16;
export declare const V4L2_IN_ST_VFLIP = 32;
export declare const V4L2_IN_ST_NO_H_LOCK = 256;
export declare const V4L2_IN_ST_COLOR_KILL = 512;
export declare const V4L2_IN_ST_NO_V_LOCK = 1024;
export declare const V4L2_IN_ST_NO_STD_LOCK = 2048;
export declare const V4L2_IN_ST_NO_SYNC = 65536;
export declare const V4L2_IN_ST_NO_EQU = 131072;
export declare const V4L2_IN_ST_NO_CARRIER = 262144;
export declare const V4L2_IN_ST_MACROVISION = 16777216;
export declare const V4L2_IN_ST_NO_ACCESS = 33554432;
export declare const V4L2_IN_ST_VTR = 67108864;
export declare const V4L2_IN_CAP_DV_TIMINGS = 2;
export declare const V4L2_IN_CAP_CUSTOM_TIMINGS = 2;
export declare const V4L2_IN_CAP_STD = 4;
export declare const V4L2_IN_CAP_NATIVE_SIZE = 8;
export declare const v4l2_output: ref_struct.StructType<{
    index: ref.Type<number>;
    name: ref.Type<ref_array.TypedArray<number, 32>>;
    type: ref.Type<number>;
    audioset: ref.Type<number>;
    modulator: ref.Type<number>;
    std: ref.Type<string | number>;
    capabilities: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 3>>;
}>;
export declare const V4L2_OUTPUT_TYPE_MODULATOR = 1;
export declare const V4L2_OUTPUT_TYPE_ANALOG = 2;
export declare const V4L2_OUTPUT_TYPE_ANALOGVGAOVERLAY = 3;
export declare const V4L2_OUT_CAP_DV_TIMINGS = 2;
export declare const V4L2_OUT_CAP_CUSTOM_TIMINGS = 2;
export declare const V4L2_OUT_CAP_STD = 4;
export declare const V4L2_OUT_CAP_NATIVE_SIZE = 8;
export declare const v4l2_control: ref_struct.StructType<{
    id: ref.Type<number>;
    value: ref.Type<number>;
}>;
export declare const v4l2_ext_control: ref_struct.StructType<{
    id: ref.Type<number>;
    size: ref.Type<number>;
    reserved2: ref.Type<ref_array.TypedArray<number, 1>>;
    union: ref.Type<ref_union.UnionObject<{
        value: number;
        value64: string | number;
        string: string | null;
        p_u8: ref.Pointer<number>;
        p_u16: ref.Pointer<number>;
        p_u32: ref.Pointer<number>;
        p_area: ref.Pointer<ref_struct.StructObject<{
            width: number;
            height: number;
        }>>;
        ptr: ref.Pointer<void>;
    }>>;
}>;
export declare const v4l2_ext_controls: ref_struct.StructType<{
    union: ref.Type<ref_union.UnionObject<{
        ctrl_class: number;
        which: number;
    }>>;
    count: ref.Type<number>;
    error_idx: ref.Type<number>;
    request_fd: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 1>>;
    controls: ref.Type<ref.Pointer<ref_struct.StructObject<{
        id: number;
        size: number;
        reserved2: ref_array.TypedArray<number, 1>;
        union: ref_union.UnionObject<{
            value: number;
            value64: string | number;
            string: string | null;
            p_u8: ref.Pointer<number>;
            p_u16: ref.Pointer<number>;
            p_u32: ref.Pointer<number>;
            p_area: ref.Pointer<ref_struct.StructObject<{
                width: number;
                height: number;
            }>>;
            ptr: ref.Pointer<void>;
        }>;
    }>>>;
}>;
export declare const V4L2_CTRL_ID_MASK = 268435455;
export declare function V4L2_CTRL_ID2CLASS(id: number): number;
export declare function V4L2_CTRL_ID2WHICH(id: number): number;
export declare function V4L2_CTRL_DRIVER_PRIV(id: number): boolean;
export declare const V4L2_CTRL_MAX_DIMS = 4;
export declare const V4L2_CTRL_WHICH_CUR_VAL = 0;
export declare const V4L2_CTRL_WHICH_DEF_VAL = 251658240;
export declare const V4L2_CTRL_WHICH_REQUEST_VAL = 251723776;
export declare enum v4l2_ctrl_type {
    V4L2_CTRL_TYPE_INTEGER = 1,
    V4L2_CTRL_TYPE_BOOLEAN = 2,
    V4L2_CTRL_TYPE_MENU = 3,
    V4L2_CTRL_TYPE_BUTTON = 4,
    V4L2_CTRL_TYPE_INTEGER64 = 5,
    V4L2_CTRL_TYPE_CTRL_CLASS = 6,
    V4L2_CTRL_TYPE_STRING = 7,
    V4L2_CTRL_TYPE_BITMASK = 8,
    V4L2_CTRL_TYPE_INTEGER_MENU = 9,
    V4L2_CTRL_COMPOUND_TYPES = 256,
    V4L2_CTRL_TYPE_U8 = 256,
    V4L2_CTRL_TYPE_U16 = 257,
    V4L2_CTRL_TYPE_U32 = 258,
    V4L2_CTRL_TYPE_AREA = 262,
    V4L2_CTRL_TYPE_HDR10_CLL_INFO = 272,
    V4L2_CTRL_TYPE_HDR10_MASTERING_DISPLAY = 273,
    V4L2_CTRL_TYPE_H264_SPS = 512,
    V4L2_CTRL_TYPE_H264_PPS = 513,
    V4L2_CTRL_TYPE_H264_SCALING_MATRIX = 514,
    V4L2_CTRL_TYPE_H264_SLICE_PARAMS = 515,
    V4L2_CTRL_TYPE_H264_DECODE_PARAMS = 516,
    V4L2_CTRL_TYPE_H264_PRED_WEIGHTS = 517,
    V4L2_CTRL_TYPE_FWHT_PARAMS = 544,
    V4L2_CTRL_TYPE_VP8_FRAME = 576,
    V4L2_CTRL_TYPE_MPEG2_QUANTISATION = 592,
    V4L2_CTRL_TYPE_MPEG2_SEQUENCE = 593,
    V4L2_CTRL_TYPE_MPEG2_PICTURE = 594
}
export declare const v4l2_queryctrl: ref_struct.StructType<{
    id: ref.Type<number>;
    type: ref.Type<number>;
    name: ref.Type<ref_array.TypedArray<number, 32>>;
    minimum: ref.Type<number>;
    maximum: ref.Type<number>;
    step: ref.Type<number>;
    default_value: ref.Type<number>;
    flags: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 2>>;
}>;
export declare const v4l2_query_ext_ctrl: ref_struct.StructType<{
    id: ref.Type<number>;
    type: ref.Type<number>;
    name: ref.Type<ref_array.TypedArray<number, 32>>;
    minimum: ref.Type<string | number>;
    maximum: ref.Type<string | number>;
    step: ref.Type<string | number>;
    default_value: ref.Type<string | number>;
    flags: ref.Type<number>;
    elem_size: ref.Type<number>;
    elems: ref.Type<number>;
    nr_of_dims: ref.Type<number>;
    dims: ref.Type<ref_array.TypedArray<number, 4>>;
    reserved: ref.Type<ref_array.TypedArray<number, 32>>;
}>;
export declare const v4l2_querymenu: ref_struct.StructType<{
    id: ref.Type<number>;
    index: ref.Type<number>;
    union: ref.Type<ref_union.UnionObject<{
        name: ref_array.TypedArray<number, 32>;
        value: string | number;
    }>>;
    reserved: ref.Type<number>;
}>;
export declare const V4L2_CTRL_FLAG_DISABLED = 1;
export declare const V4L2_CTRL_FLAG_GRABBED = 2;
export declare const V4L2_CTRL_FLAG_READ_ONLY = 4;
export declare const V4L2_CTRL_FLAG_UPDATE = 8;
export declare const V4L2_CTRL_FLAG_INACTIVE = 16;
export declare const V4L2_CTRL_FLAG_SLIDER = 32;
export declare const V4L2_CTRL_FLAG_WRITE_ONLY = 64;
export declare const V4L2_CTRL_FLAG_VOLATILE = 128;
export declare const V4L2_CTRL_FLAG_HAS_PAYLOAD = 256;
export declare const V4L2_CTRL_FLAG_EXECUTE_ON_WRITE = 512;
export declare const V4L2_CTRL_FLAG_MODIFY_LAYOUT = 1024;
export declare const V4L2_CTRL_FLAG_NEXT_CTRL = 2147483648;
export declare const V4L2_CTRL_FLAG_NEXT_COMPOUND = 1073741824;
export declare const V4L2_CID_MAX_CTRLS = 1024;
export declare const V4L2_CID_PRIVATE_BASE = 134217728;
export declare const v4l2_tuner: ref_struct.StructType<{
    index: ref.Type<number>;
    name: ref.Type<ref_array.TypedArray<number, 32>>;
    type: ref.Type<number>;
    capability: ref.Type<number>;
    rangelow: ref.Type<number>;
    rangehigh: ref.Type<number>;
    rxsubchans: ref.Type<number>;
    audmode: ref.Type<number>;
    signal: ref.Type<number>;
    afc: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 4>>;
}>;
export declare const v4l2_modulator: ref_struct.StructType<{
    index: ref.Type<number>;
    name: ref.Type<ref_array.TypedArray<number, 32>>;
    capability: ref.Type<number>;
    rangelow: ref.Type<number>;
    rangehigh: ref.Type<number>;
    txsubchans: ref.Type<number>;
    type: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 3>>;
}>;
export declare const V4L2_TUNER_CAP_LOW = 1;
export declare const V4L2_TUNER_CAP_NORM = 2;
export declare const V4L2_TUNER_CAP_HWSEEK_BOUNDED = 4;
export declare const V4L2_TUNER_CAP_HWSEEK_WRAP = 8;
export declare const V4L2_TUNER_CAP_STEREO = 16;
export declare const V4L2_TUNER_CAP_LANG2 = 32;
export declare const V4L2_TUNER_CAP_SAP = 32;
export declare const V4L2_TUNER_CAP_LANG1 = 64;
export declare const V4L2_TUNER_CAP_RDS = 128;
export declare const V4L2_TUNER_CAP_RDS_BLOCK_IO = 256;
export declare const V4L2_TUNER_CAP_RDS_CONTROLS = 512;
export declare const V4L2_TUNER_CAP_FREQ_BANDS = 1024;
export declare const V4L2_TUNER_CAP_HWSEEK_PROG_LIM = 2048;
export declare const V4L2_TUNER_CAP_1HZ = 4096;
export declare const V4L2_TUNER_SUB_MONO = 1;
export declare const V4L2_TUNER_SUB_STEREO = 2;
export declare const V4L2_TUNER_SUB_LANG2 = 4;
export declare const V4L2_TUNER_SUB_SAP = 4;
export declare const V4L2_TUNER_SUB_LANG1 = 8;
export declare const V4L2_TUNER_SUB_RDS = 16;
export declare const V4L2_TUNER_MODE_MONO = 0;
export declare const V4L2_TUNER_MODE_STEREO = 1;
export declare const V4L2_TUNER_MODE_LANG2 = 2;
export declare const V4L2_TUNER_MODE_SAP = 2;
export declare const V4L2_TUNER_MODE_LANG1 = 3;
export declare const V4L2_TUNER_MODE_LANG1_LANG2 = 4;
export declare const v4l2_frequency: ref_struct.StructType<{
    tuner: ref.Type<number>;
    type: ref.Type<number>;
    frequency: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 8>>;
}>;
export declare const V4L2_BAND_MODULATION_VSB: number;
export declare const V4L2_BAND_MODULATION_FM: number;
export declare const V4L2_BAND_MODULATION_AM: number;
export declare const v4l2_frequency_band: ref_struct.StructType<{
    tuner: ref.Type<number>;
    type: ref.Type<number>;
    index: ref.Type<number>;
    capability: ref.Type<number>;
    rangelow: ref.Type<number>;
    rangehigh: ref.Type<number>;
    modulation: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 9>>;
}>;
export declare const v4l2_hw_freq_seek: ref_struct.StructType<{
    tuner: ref.Type<number>;
    type: ref.Type<number>;
    seek_upward: ref.Type<number>;
    wrap_around: ref.Type<number>;
    spacing: ref.Type<number>;
    rangelow: ref.Type<number>;
    rangehigh: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 5>>;
}>;
export declare const v4l2_rds_data: ref_struct.StructType<{
    lsb: ref.Type<number>;
    msb: ref.Type<number>;
    block: ref.Type<number>;
}>;
export declare const V4L2_RDS_BLOCK_MSK = 7;
export declare const V4L2_RDS_BLOCK_A = 0;
export declare const V4L2_RDS_BLOCK_B = 1;
export declare const V4L2_RDS_BLOCK_C = 2;
export declare const V4L2_RDS_BLOCK_D = 3;
export declare const V4L2_RDS_BLOCK_C_ALT = 4;
export declare const V4L2_RDS_BLOCK_INVALID = 7;
export declare const V4L2_RDS_BLOCK_CORRECTED = 64;
export declare const V4L2_RDS_BLOCK_ERROR = 128;
export declare const v4l2_audio: ref_struct.StructType<{
    index: ref.Type<number>;
    name: ref.Type<ref_array.TypedArray<number, 32>>;
    capability: ref.Type<number>;
    mode: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 2>>;
}>;
export declare const V4L2_AUDCAP_STEREO = 1;
export declare const V4L2_AUDCAP_AVL = 2;
export declare const V4L2_AUDMODE_AVL = 1;
export declare const v4l2_audioout: ref_struct.StructType<{
    index: ref.Type<number>;
    name: ref.Type<ref_array.TypedArray<number, 32>>;
    capability: ref.Type<number>;
    mode: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 2>>;
}>;
export declare const V4L2_ENC_IDX_FRAME_I = 0;
export declare const V4L2_ENC_IDX_FRAME_P = 1;
export declare const V4L2_ENC_IDX_FRAME_B = 2;
export declare const V4L2_ENC_IDX_FRAME_MASK = 15;
export declare const v4l2_enc_idx_entry: ref_struct.StructType<{
    offset: ref.Type<string | number>;
    pts: ref.Type<string | number>;
    length: ref.Type<number>;
    flags: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 2>>;
}>;
export declare const V4L2_ENC_IDX_ENTRIES = 64;
export declare const v4l2_enc_idx: ref_struct.StructType<{
    entries: ref.Type<number>;
    entries_cap: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 4>>;
    entry: ref.Type<ref_array.TypedArray<ref_struct.StructObject<{
        offset: string | number;
        pts: string | number;
        length: number;
        flags: number;
        reserved: ref_array.TypedArray<number, 2>;
    }>, 64>>;
}>;
export declare const V4L2_ENC_CMD_START = 0;
export declare const V4L2_ENC_CMD_STOP = 1;
export declare const V4L2_ENC_CMD_PAUSE = 2;
export declare const V4L2_ENC_CMD_RESUME = 3;
export declare const V4L2_ENC_CMD_STOP_AT_GOP_END: number;
export declare const v4l2_encoder_cmd: ref_struct.StructType<{
    cmd: ref.Type<number>;
    flags: ref.Type<number>;
    raw: ref.Type<ref_struct.StructObject<{
        data: ref_array.TypedArray<number, 8>;
    }>>;
}>;
export declare const V4L2_DEC_CMD_START = 0;
export declare const V4L2_DEC_CMD_STOP = 1;
export declare const V4L2_DEC_CMD_PAUSE = 2;
export declare const V4L2_DEC_CMD_RESUME = 3;
export declare const V4L2_DEC_CMD_FLUSH = 4;
export declare const V4L2_DEC_CMD_START_MUTE_AUDIO: number;
export declare const V4L2_DEC_CMD_PAUSE_TO_BLACK: number;
export declare const V4L2_DEC_CMD_STOP_TO_BLACK: number;
export declare const V4L2_DEC_CMD_STOP_IMMEDIATELY: number;
export declare const V4L2_DEC_START_FMT_NONE = 0;
export declare const V4L2_DEC_START_FMT_GOP = 1;
export declare const v4l2_decoder_cmd: ref_struct.StructType<{
    cmd: ref.Type<number>;
    flags: ref.Type<number>;
    union: ref.Type<ref_union.UnionObject<{
        stop: ref_struct.StructObject<{
            pts: string | number;
        }>;
        start: ref_struct.StructObject<{
            speed: number;
            format: number;
        }>;
        raw: ref_array.TypedArray<number, 16>;
    }>>;
}>;
export declare const v4l2_vbi_format: ref_struct.StructType<{
    sampling_rate: ref.Type<number>;
    offset: ref.Type<number>;
    samples_per_line: ref.Type<number>;
    sample_format: ref.Type<number>;
    start: ref.Type<ref_array.TypedArray<number, 2>>;
    count: ref.Type<ref_array.TypedArray<number, 2>>;
    flags: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 2>>;
}>;
export declare const V4L2_VBI_UNSYNC: number;
export declare const V4L2_VBI_INTERLACED: number;
export declare const V4L2_VBI_ITU_525_F1_START = 1;
export declare const V4L2_VBI_ITU_525_F2_START = 264;
export declare const V4L2_VBI_ITU_625_F1_START = 1;
export declare const V4L2_VBI_ITU_625_F2_START = 314;
export declare const v4l2_sliced_vbi_format: ref_struct.StructType<{
    service_set: ref.Type<number>;
    service_lines: ref.Type<ref_array.TypedArray<ref_array.TypedArray<number, 24>, 2>>;
    io_size: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 2>>;
}>;
export declare const V4L2_SLICED_TELETEXT_B = 1;
export declare const V4L2_SLICED_VPS = 1024;
export declare const V4L2_SLICED_CAPTION_525 = 4096;
export declare const V4L2_SLICED_WSS_625 = 16384;
export declare const V4L2_SLICED_VBI_525 = 4096;
export declare const V4L2_SLICED_VBI_625: number;
export declare const v4l2_sliced_vbi_cap: ref_struct.StructType<{
    service_set: ref.Type<number>;
    service_lines: ref.Type<ref_array.TypedArray<ref_array.TypedArray<number, 24>, 2>>;
    type: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 3>>;
}>;
export declare const v4l2_sliced_vbi_data: ref_struct.StructType<{
    id: ref.Type<number>;
    field: ref.Type<number>;
    line: ref.Type<number>;
    reserved: ref.Type<number>;
    data: ref.Type<ref_array.TypedArray<number, 48>>;
}>;
export declare const V4L2_MPEG_VBI_IVTV_TELETEXT_B = 1;
export declare const V4L2_MPEG_VBI_IVTV_CAPTION_525 = 4;
export declare const V4L2_MPEG_VBI_IVTV_WSS_625 = 5;
export declare const V4L2_MPEG_VBI_IVTV_VPS = 7;
export declare const v4l2_mpeg_vbi_itv0_line: ref_struct.StructType<{
    id: ref.Type<number>;
    data: ref.Type<ref_array.TypedArray<number, 42>>;
}>;
export declare const v4l2_mpeg_vbi_itv0: ref_struct.StructType<{
    linemask: ref.Type<ref_array.TypedArray<number, 2>>;
    line: ref.Type<ref_array.TypedArray<ref_struct.StructObject<{
        id: number;
        data: ref_array.TypedArray<number, 42>;
    }>, 35>>;
}>;
export declare const v4l2_mpeg_vbi_ITV0: ref_struct.StructType<{
    line: ref.Type<ref_array.TypedArray<ref_struct.StructObject<{
        id: number;
        data: ref_array.TypedArray<number, 42>;
    }>, 36>>;
}>;
export declare const V4L2_MPEG_VBI_IVTV_MAGIC0 = "itv0";
export declare const V4L2_MPEG_VBI_IVTV_MAGIC1 = "ITV0";
export declare const v4l2_mpeg_vbi_fmt_ivtv: ref_struct.StructType<{
    magic: ref.Type<ref_array.TypedArray<number, 4>>;
    union: ref.Type<ref_union.UnionObject<{
        itv0: ref_struct.StructObject<{
            linemask: ref_array.TypedArray<number, 2>;
            line: ref_array.TypedArray<ref_struct.StructObject<{
                id: number;
                data: ref_array.TypedArray<number, 42>;
            }>, 35>;
        }>;
        ITV0: ref_struct.StructObject<{
            line: ref_array.TypedArray<ref_struct.StructObject<{
                id: number;
                data: ref_array.TypedArray<number, 42>;
            }>, 36>;
        }>;
    }>>;
}>;
/**
 * struct v4l2_plane_pix_format - additional, per-plane format definition
 * @sizeimage:		maximum size in bytes required for data, for which
 *			this plane will be used
 * @bytesperline:	distance in bytes between the leftmost pixels in two
 *			adjacent lines
 * @reserved:		drivers and applications must zero this array
 */
export declare const v4l2_plane_pix_format: ref_struct.StructType<{
    sizeimage: ref.Type<number>;
    bytesperline: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 6>>;
}>;
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
export declare const v4l2_pix_format_mplane: ref_struct.StructType<{
    width: ref.Type<number>;
    height: ref.Type<number>;
    pixelformat: ref.Type<number>;
    field: ref.Type<number>;
    colorspace: ref.Type<number>;
    plane_fmt: ref.Type<ref_array.TypedArray<ref_struct.StructObject<{
        sizeimage: number;
        bytesperline: number;
        reserved: ref_array.TypedArray<number, 6>;
    }>, 8>>;
    num_planes: ref.Type<number>;
    flags: ref.Type<number>;
    union: ref.Type<ref_union.UnionObject<{
        ycbcr_enc: number;
        hsv_enc: number;
    }>>;
    quantization: ref.Type<number>;
    xfer_func: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 7>>;
}>;
/**
 * struct v4l2_sdr_format - SDR format definition
 * @pixelformat:	little endian four character code (fourcc)
 * @buffersize:		maximum size in bytes required for data
 * @reserved:		drivers and applications must zero this array
 */
export declare const v4l2_sdr_format: ref_struct.StructType<{
    pixelformat: ref.Type<number>;
    buffersize: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 24>>;
}>;
/**
 * struct v4l2_meta_format - metadata format definition
 * @dataformat:		little endian four character code (fourcc)
 * @buffersize:		maximum size in bytes required for data
 */
export declare const v4l2_meta_format: ref_struct.StructType<{
    dataformat: ref.Type<number>;
    buffersize: ref.Type<number>;
}>;
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
export declare const v4l2_format: ref_struct.StructType<{
    type: ref.Type<number>;
    _padding0: ref.Type<ref_array.TypedArray<number, 4>>;
    fmt: ref.Type<ref_union.UnionObject<{
        pix: ref_struct.StructObject<{
            width: number;
            height: number;
            pixelformat: number;
            field: number;
            bytesperline: number;
            sizeimage: number;
            colorspace: number;
            priv: number;
            flags: number;
            encoding: ref_union.UnionObject<{
                ycbcr_enc: number;
                hsv_enc: number;
            }>;
            quantization: number;
            xfer_func: number;
        }>;
        pix_mp: ref_struct.StructObject<{
            width: number;
            height: number;
            pixelformat: number;
            field: number;
            colorspace: number;
            plane_fmt: ref_array.TypedArray<ref_struct.StructObject<{
                sizeimage: number;
                bytesperline: number;
                reserved: ref_array.TypedArray<number, 6>;
            }>, 8>;
            num_planes: number;
            flags: number;
            union: ref_union.UnionObject<{
                ycbcr_enc: number;
                hsv_enc: number;
            }>;
            quantization: number;
            xfer_func: number;
            reserved: ref_array.TypedArray<number, 7>;
        }>;
        win: ref_struct.StructObject<{
            w: ref_struct.StructObject<{
                left: number;
                top: number;
                width: number;
                height: number;
            }>;
            field: number;
            chromakey: number;
            clips: ref.Pointer<ref_struct.StructObject<{
                c: ref_struct.StructObject<{
                    left: number;
                    top: number;
                    width: number;
                    height: number;
                }>;
            }>>;
            clipcount: number;
            bitmap: ref.Pointer<void>;
            global_alpha: number;
        }>;
        vbi: ref_struct.StructObject<{
            sampling_rate: number;
            offset: number;
            samples_per_line: number;
            sample_format: number;
            start: ref_array.TypedArray<number, 2>;
            count: ref_array.TypedArray<number, 2>;
            flags: number;
            reserved: ref_array.TypedArray<number, 2>;
        }>;
        sliced: ref_struct.StructObject<{
            service_set: number;
            service_lines: ref_array.TypedArray<ref_array.TypedArray<number, 24>, 2>;
            io_size: number;
            reserved: ref_array.TypedArray<number, 2>;
        }>;
        sdr: ref_struct.StructObject<{
            pixelformat: number;
            buffersize: number;
            reserved: ref_array.TypedArray<number, 24>;
        }>;
        meta: ref_struct.StructObject<{
            dataformat: number;
            buffersize: number;
        }>;
        raw: ref_array.TypedArray<number, 200>;
    }>>;
}>;
export declare const v4l2_streamparm: ref_struct.StructType<{
    type: ref.Type<number>;
    parm: ref.Type<ref_union.UnionObject<{
        capture: ref_struct.StructObject<{
            capability: number;
            capturemode: number;
            timeperframe: ref_struct.StructObject<{
                numerator: number;
                denominator: number;
            }>;
            extendedmode: number;
            readbuffers: number;
            reserved: ref_array.TypedArray<number, 4>;
        }>;
        output: ref_struct.StructObject<{
            capability: number;
            outputmode: number;
            timeperframe: ref_struct.StructObject<{
                numerator: number;
                denominator: number;
            }>;
            extendedmode: number;
            writebuffers: number;
            reserved: ref_array.TypedArray<number, 4>;
        }>;
        raw_data: ref_array.TypedArray<number, 200>;
    }>>;
}>;
export declare const V4L2_EVENT_ALL = 0;
export declare const V4L2_EVENT_VSYNC = 1;
export declare const V4L2_EVENT_EOS = 2;
export declare const V4L2_EVENT_CTRL = 3;
export declare const V4L2_EVENT_FRAME_SYNC = 4;
export declare const V4L2_EVENT_SOURCE_CHANGE = 5;
export declare const V4L2_EVENT_MOTION_DET = 6;
export declare const V4L2_EVENT_PRIVATE_START = 134217728;
export declare const v4l2_event_vsync: ref_struct.StructType<{
    field: ref.Type<number>;
}>;
export declare const V4L2_EVENT_CTRL_CH_VALUE: number;
export declare const V4L2_EVENT_CTRL_CH_FLAGS: number;
export declare const V4L2_EVENT_CTRL_CH_RANGE: number;
export declare const v4l2_event_ctrl: ref_struct.StructType<{
    changes: ref.Type<number>;
    type: ref.Type<number>;
    value: ref.Type<ref_union.UnionObject<{
        value: number;
        value64: string | number;
    }>>;
    flags: ref.Type<number>;
    minimum: ref.Type<number>;
    maximum: ref.Type<number>;
    step: ref.Type<number>;
    default_value: ref.Type<number>;
}>;
export declare const v4l2_event_frame_sync: ref_struct.StructType<{
    frame_sequence: ref.Type<number>;
}>;
export declare const V4L2_EVENT_SRC_CH_RESOLUTION: number;
export declare const v4l2_event_src_change: ref_struct.StructType<{
    changes: ref.Type<number>;
}>;
export declare const V4L2_EVENT_MD_FL_HAVE_FRAME_SEQ: number;
/**
 * struct v4l2_event_motion_det - motion detection event
 * @flags:             if V4L2_EVENT_MD_FL_HAVE_FRAME_SEQ is set, then the
 *                     frame_sequence field is valid.
 * @frame_sequence:    the frame sequence number associated with this event.
 * @region_mask:       which regions detected motion.
 */
export declare const v4l2_event_motion_det: ref_struct.StructType<{
    flags: ref.Type<number>;
    frame_sequence: ref.Type<number>;
    region_mask: ref.Type<number>;
}>;
export declare const v4l2_event: ref_struct.StructType<{
    type: ref.Type<number>;
    u: ref.Type<ref_union.UnionObject<{
        vsync: ref_struct.StructObject<{}>;
        ctrl: ref_struct.StructObject<{}>;
        frame_sync: ref_struct.StructObject<{}>;
        src_change: ref_struct.StructObject<{}>;
        motion_det: ref_struct.StructObject<{
            flags: number;
            frame_sequence: number;
            region_mask: number;
        }>;
        data: ref_array.TypedArray<number, 64>;
    }>>;
    pending: ref.Type<number>;
    sequence: ref.Type<number>;
    timestamp: ref.Type<ref_struct.StructObject<{
        tv_sec: string | number;
        tv_nsec: string | number;
    }>>;
    id: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 8>>;
}>;
export declare const V4L2_EVENT_SUB_FL_SEND_INITIAL: number;
export declare const V4L2_EVENT_SUB_FL_ALLOW_FEEDBACK: number;
export declare const v4l2_event_subscription: ref_struct.StructType<{
    type: ref.Type<number>;
    id: ref.Type<number>;
    flags: ref.Type<number>;
    reserved: ref.Type<ref_array.TypedArray<number, 5>>;
}>;
export declare const ioctl: {
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
