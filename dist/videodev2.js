"use strict";
/** copied and slightly adapted from videodev2.h */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.V4L2_CAP_EXT_PIX_FORMAT = exports.V4L2_CAP_SDR_CAPTURE = exports.V4L2_CAP_MODULATOR = exports.V4L2_CAP_RADIO = exports.V4L2_CAP_AUDIO = exports.V4L2_CAP_TUNER = exports.V4L2_CAP_VIDEO_M2M = exports.V4L2_CAP_VIDEO_M2M_MPLANE = exports.V4L2_CAP_VIDEO_OUTPUT_MPLANE = exports.V4L2_CAP_VIDEO_CAPTURE_MPLANE = exports.V4L2_CAP_RDS_OUTPUT = exports.V4L2_CAP_HW_FREQ_SEEK = exports.V4L2_CAP_VIDEO_OUTPUT_OVERLAY = exports.V4L2_CAP_RDS_CAPTURE = exports.V4L2_CAP_SLICED_VBI_OUTPUT = exports.V4L2_CAP_SLICED_VBI_CAPTURE = exports.V4L2_CAP_VBI_OUTPUT = exports.V4L2_CAP_VBI_CAPTURE = exports.V4L2_CAP_VIDEO_OVERLAY = exports.V4L2_CAP_VIDEO_OUTPUT = exports.V4L2_CAP_VIDEO_CAPTURE = exports.v4l2_capability = exports.v4l2_area = exports.v4l2_fract = exports.v4l2_rect = exports.v4l2_priority = exports.V4L2_MAP_QUANTIZATION_DEFAULT = exports.v4l2_quantization = exports.V4L2_MAP_YCBCR_ENC_DEFAULT = exports.v4l2_hsv_encoding = exports.v4l2_ycbcr_encoding = exports.V4L2_MAP_XFER_FUNC_DEFAULT = exports.v4l2_xfer_func = exports.V4L2_MAP_COLORSPACE_DEFAULT = exports.v4l2_colorspace = exports.v4l2_memory = exports.v4l2_tuner_type = exports.V4L2_TYPE_IS_CAPTURE = exports.V4L2_TYPE_IS_OUTPUT = exports.V4L2_TYPE_IS_MULTIPLANAR = exports.v4l2_buf_type = exports.V4L2_FIELD_IS_SEQUENTIAL = exports.V4L2_FIELD_IS_INTERLACED = exports.V4L2_FIELD_HAS_T_OR_B = exports.V4L2_FIELD_HAS_BOTH = exports.V4L2_FIELD_HAS_BOTTOM = exports.V4L2_FIELD_HAS_TOP = exports.v4l2_field = exports.VIDEO_MAX_PLANES = exports.VIDEO_MAX_FRAME = void 0;
exports.V4L2_PIX_FMT_Y6 = exports.V4L2_PIX_FMT_Y4 = exports.V4L2_PIX_FMT_GREY = exports.V4L2_PIX_FMT_XRGB32 = exports.V4L2_PIX_FMT_ARGB32 = exports.V4L2_PIX_FMT_RGBX32 = exports.V4L2_PIX_FMT_RGBA32 = exports.V4L2_PIX_FMT_RGB32 = exports.V4L2_PIX_FMT_BGRX32 = exports.V4L2_PIX_FMT_BGRA32 = exports.V4L2_PIX_FMT_XBGR32 = exports.V4L2_PIX_FMT_ABGR32 = exports.V4L2_PIX_FMT_BGR32 = exports.V4L2_PIX_FMT_RGB24 = exports.V4L2_PIX_FMT_BGR24 = exports.V4L2_PIX_FMT_BGR666 = exports.V4L2_PIX_FMT_RGB565X = exports.V4L2_PIX_FMT_XRGB555X = exports.V4L2_PIX_FMT_ARGB555X = exports.V4L2_PIX_FMT_RGB555X = exports.V4L2_PIX_FMT_RGB565 = exports.V4L2_PIX_FMT_BGRX555 = exports.V4L2_PIX_FMT_BGRA555 = exports.V4L2_PIX_FMT_XBGR555 = exports.V4L2_PIX_FMT_ABGR555 = exports.V4L2_PIX_FMT_RGBX555 = exports.V4L2_PIX_FMT_RGBA555 = exports.V4L2_PIX_FMT_XRGB555 = exports.V4L2_PIX_FMT_ARGB555 = exports.V4L2_PIX_FMT_RGB555 = exports.V4L2_PIX_FMT_BGRX444 = exports.V4L2_PIX_FMT_BGRA444 = exports.V4L2_PIX_FMT_XBGR444 = exports.V4L2_PIX_FMT_ABGR444 = exports.V4L2_PIX_FMT_RGBX444 = exports.V4L2_PIX_FMT_RGBA444 = exports.V4L2_PIX_FMT_XRGB444 = exports.V4L2_PIX_FMT_ARGB444 = exports.V4L2_PIX_FMT_RGB444 = exports.V4L2_PIX_FMT_RGB332 = exports.v4l2_pix_format = exports.V4L2_CAP_DEVICE_CAPS = exports.V4L2_CAP_IO_MC = exports.V4L2_CAP_TOUCH = exports.V4L2_CAP_META_OUTPUT = exports.V4L2_CAP_STREAMING = exports.V4L2_CAP_ASYNCIO = exports.V4L2_CAP_READWRITE = exports.V4L2_CAP_META_CAPTURE = exports.V4L2_CAP_SDR_OUTPUT = void 0;
exports.V4L2_PIX_FMT_YVU444M = exports.V4L2_PIX_FMT_YUV444M = exports.V4L2_PIX_FMT_YVU422M = exports.V4L2_PIX_FMT_YUV422M = exports.V4L2_PIX_FMT_YVU420M = exports.V4L2_PIX_FMT_YUV420M = exports.V4L2_PIX_FMT_YUV422P = exports.V4L2_PIX_FMT_YVU420 = exports.V4L2_PIX_FMT_YUV420 = exports.V4L2_PIX_FMT_YUV411P = exports.V4L2_PIX_FMT_YVU410 = exports.V4L2_PIX_FMT_YUV410 = exports.V4L2_PIX_FMT_NV12MT_16X16 = exports.V4L2_PIX_FMT_NV12MT = exports.V4L2_PIX_FMT_NV61M = exports.V4L2_PIX_FMT_NV16M = exports.V4L2_PIX_FMT_NV21M = exports.V4L2_PIX_FMT_NV12M = exports.V4L2_PIX_FMT_HM12 = exports.V4L2_PIX_FMT_NV42 = exports.V4L2_PIX_FMT_NV24 = exports.V4L2_PIX_FMT_NV61 = exports.V4L2_PIX_FMT_NV16 = exports.V4L2_PIX_FMT_NV21 = exports.V4L2_PIX_FMT_NV12 = exports.V4L2_PIX_FMT_M420 = exports.V4L2_PIX_FMT_VUYX32 = exports.V4L2_PIX_FMT_VUYA32 = exports.V4L2_PIX_FMT_XYUV32 = exports.V4L2_PIX_FMT_AYUV32 = exports.V4L2_PIX_FMT_YUV32 = exports.V4L2_PIX_FMT_YUV24 = exports.V4L2_PIX_FMT_YUV565 = exports.V4L2_PIX_FMT_YUV555 = exports.V4L2_PIX_FMT_YUV444 = exports.V4L2_PIX_FMT_Y41P = exports.V4L2_PIX_FMT_VYUY = exports.V4L2_PIX_FMT_UYVY = exports.V4L2_PIX_FMT_YVYU = exports.V4L2_PIX_FMT_YYUV = exports.V4L2_PIX_FMT_YUYV = exports.V4L2_PIX_FMT_UV8 = exports.V4L2_PIX_FMT_PAL8 = exports.V4L2_PIX_FMT_Y10P = exports.V4L2_PIX_FMT_Y10BPACK = exports.V4L2_PIX_FMT_Y16_BE = exports.V4L2_PIX_FMT_Y16 = exports.V4L2_PIX_FMT_Y14 = exports.V4L2_PIX_FMT_Y12 = exports.V4L2_PIX_FMT_Y10 = void 0;
exports.V4L2_PIX_FMT_H263 = exports.V4L2_PIX_FMT_H264_MVC = exports.V4L2_PIX_FMT_H264_NO_SC = exports.V4L2_PIX_FMT_H264 = exports.V4L2_PIX_FMT_MPEG = exports.V4L2_PIX_FMT_DV = exports.V4L2_PIX_FMT_JPEG = exports.V4L2_PIX_FMT_MJPEG = exports.V4L2_PIX_FMT_HSV32 = exports.V4L2_PIX_FMT_HSV24 = exports.V4L2_PIX_FMT_SRGGB16 = exports.V4L2_PIX_FMT_SGRBG16 = exports.V4L2_PIX_FMT_SGBRG16 = exports.V4L2_PIX_FMT_SBGGR16 = exports.V4L2_PIX_FMT_SRGGB14P = exports.V4L2_PIX_FMT_SGRBG14P = exports.V4L2_PIX_FMT_SGBRG14P = exports.V4L2_PIX_FMT_SBGGR14P = exports.V4L2_PIX_FMT_SRGGB14 = exports.V4L2_PIX_FMT_SGRBG14 = exports.V4L2_PIX_FMT_SGBRG14 = exports.V4L2_PIX_FMT_SBGGR14 = exports.V4L2_PIX_FMT_SRGGB12P = exports.V4L2_PIX_FMT_SGRBG12P = exports.V4L2_PIX_FMT_SGBRG12P = exports.V4L2_PIX_FMT_SBGGR12P = exports.V4L2_PIX_FMT_SRGGB12 = exports.V4L2_PIX_FMT_SGRBG12 = exports.V4L2_PIX_FMT_SGBRG12 = exports.V4L2_PIX_FMT_SBGGR12 = exports.V4L2_PIX_FMT_SRGGB10DPCM8 = exports.V4L2_PIX_FMT_SGRBG10DPCM8 = exports.V4L2_PIX_FMT_SGBRG10DPCM8 = exports.V4L2_PIX_FMT_SBGGR10DPCM8 = exports.V4L2_PIX_FMT_SRGGB10ALAW8 = exports.V4L2_PIX_FMT_SGRBG10ALAW8 = exports.V4L2_PIX_FMT_SGBRG10ALAW8 = exports.V4L2_PIX_FMT_SBGGR10ALAW8 = exports.V4L2_PIX_FMT_SRGGB10P = exports.V4L2_PIX_FMT_SGRBG10P = exports.V4L2_PIX_FMT_SGBRG10P = exports.V4L2_PIX_FMT_SBGGR10P = exports.V4L2_PIX_FMT_SRGGB10 = exports.V4L2_PIX_FMT_SGRBG10 = exports.V4L2_PIX_FMT_SGBRG10 = exports.V4L2_PIX_FMT_SBGGR10 = exports.V4L2_PIX_FMT_SRGGB8 = exports.V4L2_PIX_FMT_SGRBG8 = exports.V4L2_PIX_FMT_SGBRG8 = exports.V4L2_PIX_FMT_SBGGR8 = void 0;
exports.V4L2_PIX_FMT_IPU3_SGBRG10 = exports.V4L2_PIX_FMT_IPU3_SBGGR10 = exports.V4L2_PIX_FMT_HI240 = exports.V4L2_PIX_FMT_CNF4 = exports.V4L2_PIX_FMT_SUNXI_TILED_NV12 = exports.V4L2_PIX_FMT_INZI = exports.V4L2_PIX_FMT_MT21C = exports.V4L2_PIX_FMT_Z16 = exports.V4L2_PIX_FMT_Y12I = exports.V4L2_PIX_FMT_Y8I = exports.V4L2_PIX_FMT_S5C_UYVY_JPG = exports.V4L2_PIX_FMT_SE401 = exports.V4L2_PIX_FMT_JPGL = exports.V4L2_PIX_FMT_KONICA420 = exports.V4L2_PIX_FMT_CIT_YYVYUY = exports.V4L2_PIX_FMT_TM6000 = exports.V4L2_PIX_FMT_STV0680 = exports.V4L2_PIX_FMT_OV518 = exports.V4L2_PIX_FMT_OV511 = exports.V4L2_PIX_FMT_PJPG = exports.V4L2_PIX_FMT_SQ905C = exports.V4L2_PIX_FMT_SN9C2028 = exports.V4L2_PIX_FMT_JL2005BCD = exports.V4L2_PIX_FMT_MR97310A = exports.V4L2_PIX_FMT_PAC207 = exports.V4L2_PIX_FMT_SPCA561 = exports.V4L2_PIX_FMT_SPCA508 = exports.V4L2_PIX_FMT_SPCA505 = exports.V4L2_PIX_FMT_SPCA501 = exports.V4L2_PIX_FMT_ET61X251 = exports.V4L2_PIX_FMT_PWC2 = exports.V4L2_PIX_FMT_PWC1 = exports.V4L2_PIX_FMT_SN9C20X_I420 = exports.V4L2_PIX_FMT_SN9C10X = exports.V4L2_PIX_FMT_WNVA = exports.V4L2_PIX_FMT_CPIA1 = exports.V4L2_PIX_FMT_H264_SLICE = exports.V4L2_PIX_FMT_FWHT_STATELESS = exports.V4L2_PIX_FMT_FWHT = exports.V4L2_PIX_FMT_HEVC = exports.V4L2_PIX_FMT_VP9 = exports.V4L2_PIX_FMT_VP8_FRAME = exports.V4L2_PIX_FMT_VP8 = exports.V4L2_PIX_FMT_VC1_ANNEX_L = exports.V4L2_PIX_FMT_VC1_ANNEX_G = exports.V4L2_PIX_FMT_XVID = exports.V4L2_PIX_FMT_MPEG4 = exports.V4L2_PIX_FMT_MPEG2_SLICE = exports.V4L2_PIX_FMT_MPEG2 = exports.V4L2_PIX_FMT_MPEG1 = void 0;
exports.V4L2_TC_FLAG_COLORFRAME = exports.V4L2_TC_FLAG_DROPFRAME = exports.V4L2_TC_TYPE_60FPS = exports.V4L2_TC_TYPE_50FPS = exports.V4L2_TC_TYPE_30FPS = exports.V4L2_TC_TYPE_25FPS = exports.V4L2_TC_TYPE_24FPS = exports.v4l2_timecode = exports.v4l2_frmivalenum = exports.v4l2_frmival_stepwise = exports.v4l2_frmivaltypes = exports.v4l2_frmsizeenum = exports.v4l2_frmsize_stepwise = exports.v4l2_frmsize_discrete = exports.v4l2_frmsizetypes = exports.V4L2_FMT_FLAG_CSC_QUANTIZATION = exports.V4L2_FMT_FLAG_CSC_HSV_ENC = exports.V4L2_FMT_FLAG_CSC_YCBCR_ENC = exports.V4L2_FMT_FLAG_CSC_XFER_FUNC = exports.V4L2_FMT_FLAG_CSC_COLORSPACE = exports.V4L2_FMT_FLAG_ENC_CAP_FRAME_INTERVAL = exports.V4L2_FMT_FLAG_DYN_RESOLUTION = exports.V4L2_FMT_FLAG_CONTINUOUS_BYTESTREAM = exports.V4L2_FMT_FLAG_EMULATED = exports.V4L2_FMT_FLAG_COMPRESSED = exports.v4l2_fmtdesc = exports.V4L2_PIX_FMT_FLAG_SET_CSC = exports.V4L2_PIX_FMT_FLAG_PREMUL_ALPHA = exports.V4L2_PIX_FMT_PRIV_MAGIC = exports.V4L2_META_FMT_RK_ISP1_STAT_3A = exports.V4L2_META_FMT_RK_ISP1_PARAMS = exports.V4L2_META_FMT_VIVID = exports.V4L2_META_FMT_D4XX = exports.V4L2_META_FMT_UVC = exports.V4L2_META_FMT_VSP1_HGT = exports.V4L2_META_FMT_VSP1_HGO = exports.V4L2_TCH_FMT_TU08 = exports.V4L2_TCH_FMT_TU16 = exports.V4L2_TCH_FMT_DELTA_TD08 = exports.V4L2_TCH_FMT_DELTA_TD16 = exports.V4L2_SDR_FMT_PCU20BE = exports.V4L2_SDR_FMT_PCU18BE = exports.V4L2_SDR_FMT_PCU16BE = exports.V4L2_SDR_FMT_RU12LE = exports.V4L2_SDR_FMT_CS14LE = exports.V4L2_SDR_FMT_CS8 = exports.V4L2_SDR_FMT_CU16LE = exports.V4L2_SDR_FMT_CU8 = exports.V4L2_PIX_FMT_IPU3_SRGGB10 = exports.V4L2_PIX_FMT_IPU3_SGRBG10 = void 0;
exports.V4L2_FBUF_CAP_LOCAL_INV_ALPHA = exports.V4L2_FBUF_CAP_GLOBAL_ALPHA = exports.V4L2_FBUF_CAP_LOCAL_ALPHA = exports.V4L2_FBUF_CAP_BITMAP_CLIPPING = exports.V4L2_FBUF_CAP_LIST_CLIPPING = exports.V4L2_FBUF_CAP_CHROMAKEY = exports.V4L2_FBUF_CAP_EXTERNOVERLAY = exports.v4l2_framebuffer = exports.v4l2_exportbuffer = exports.V4L2_BUF_FLAG_REQUEST_FD = exports.V4L2_BUF_FLAG_LAST = exports.V4L2_BUF_FLAG_TSTAMP_SRC_SOE = exports.V4L2_BUF_FLAG_TSTAMP_SRC_EOF = exports.V4L2_BUF_FLAG_TSTAMP_SRC_MASK = exports.V4L2_BUF_FLAG_TIMESTAMP_COPY = exports.V4L2_BUF_FLAG_TIMESTAMP_MONOTONIC = exports.V4L2_BUF_FLAG_TIMESTAMP_UNKNOWN = exports.V4L2_BUF_FLAG_TIMESTAMP_MASK = exports.V4L2_BUF_FLAG_NO_CACHE_CLEAN = exports.V4L2_BUF_FLAG_NO_CACHE_INVALIDATE = exports.V4L2_BUF_FLAG_PREPARED = exports.V4L2_BUF_FLAG_M2M_HOLD_CAPTURE_BUF = exports.V4L2_BUF_FLAG_TIMECODE = exports.V4L2_BUF_FLAG_IN_REQUEST = exports.V4L2_BUF_FLAG_ERROR = exports.V4L2_BUF_FLAG_BFRAME = exports.V4L2_BUF_FLAG_PFRAME = exports.V4L2_BUF_FLAG_KEYFRAME = exports.V4L2_BUF_FLAG_DONE = exports.V4L2_BUF_FLAG_QUEUED = exports.V4L2_BUF_FLAG_MAPPED = exports.v4l2_buffer = exports.v4l2_plane = exports.V4L2_BUF_CAP_SUPPORTS_MMAP_CACHE_HINTS = exports.V4L2_BUF_CAP_SUPPORTS_M2M_HOLD_CAPTURE_BUF = exports.V4L2_BUF_CAP_SUPPORTS_ORPHANED_BUFS = exports.V4L2_BUF_CAP_SUPPORTS_REQUESTS = exports.V4L2_BUF_CAP_SUPPORTS_DMABUF = exports.V4L2_BUF_CAP_SUPPORTS_USERPTR = exports.V4L2_BUF_CAP_SUPPORTS_MMAP = exports.v4l2_requestbuffers = exports.V4L2_JPEG_MARKER_APP = exports.V4L2_JPEG_MARKER_COM = exports.V4L2_JPEG_MARKER_DRI = exports.V4L2_JPEG_MARKER_DQT = exports.V4L2_JPEG_MARKER_DHT = exports.v4l2_jpegcompression = exports.V4L2_TC_USERBITS_8BITCHARS = exports.V4L2_TC_USERBITS_USERDEFINED = exports.V4L2_TC_USERBITS_field = void 0;
exports.V4L2_STD_PAL = exports.V4L2_STD_PAL_DK = exports.V4L2_STD_PAL_BG = exports.V4L2_STD_SECAM = exports.V4L2_STD_SECAM_DK = exports.V4L2_STD_NTSC = exports.V4L2_STD_ATSC_16_VSB = exports.V4L2_STD_ATSC_8_VSB = exports.V4L2_STD_SECAM_LC = exports.V4L2_STD_SECAM_L = exports.V4L2_STD_SECAM_K1 = exports.V4L2_STD_SECAM_K = exports.V4L2_STD_SECAM_H = exports.V4L2_STD_SECAM_G = exports.V4L2_STD_SECAM_D = exports.V4L2_STD_SECAM_B = exports.V4L2_STD_NTSC_M_KR = exports.V4L2_STD_NTSC_443 = exports.V4L2_STD_NTSC_M_JP = exports.V4L2_STD_NTSC_M = exports.V4L2_STD_PAL_60 = exports.V4L2_STD_PAL_Nc = exports.V4L2_STD_PAL_N = exports.V4L2_STD_PAL_M = exports.V4L2_STD_PAL_K = exports.V4L2_STD_PAL_D1 = exports.V4L2_STD_PAL_D = exports.V4L2_STD_PAL_I = exports.V4L2_STD_PAL_H = exports.V4L2_STD_PAL_G = exports.V4L2_STD_PAL_B1 = exports.V4L2_STD_PAL_B = exports.v4l2_std_id = exports.v4l2_selection = exports.v4l2_crop = exports.v4l2_cropcap = exports.v4l2_outputparm = exports.V4L2_CAP_TIMEPERFRAME = exports.V4L2_MODE_HIGHQUALITY = exports.v4l2_captureparm = exports.v4l2_window = exports.v4l2_clip = exports.V4L2_FBUF_FLAG_SRC_CHROMAKEY = exports.V4L2_FBUF_FLAG_LOCAL_INV_ALPHA = exports.V4L2_FBUF_FLAG_GLOBAL_ALPHA = exports.V4L2_FBUF_FLAG_LOCAL_ALPHA = exports.V4L2_FBUF_FLAG_CHROMAKEY = exports.V4L2_FBUF_FLAG_OVERLAY = exports.V4L2_FBUF_FLAG_PRIMARY = exports.V4L2_FBUF_CAP_SRC_CHROMAKEY = void 0;
exports.V4L2_INPUT_TYPE_TUNER = exports.v4l2_input = exports.v4l2_dv_timings_cap = exports.V4L2_DV_BT_CAP_CUSTOM = exports.V4L2_DV_BT_CAP_REDUCED_BLANKING = exports.V4L2_DV_BT_CAP_PROGRESSIVE = exports.V4L2_DV_BT_CAP_INTERLACED = exports.v4l2_bt_timings_cap = exports.v4l2_enum_dv_timings = exports.V4L2_DV_BT_656_1120 = exports.v4l2_dv_timings = exports.V4L2_DV_BT_FRAME_HEIGHT = exports.V4L2_DV_BT_BLANKING_HEIGHT = exports.V4L2_DV_BT_FRAME_WIDTH = exports.V4L2_DV_BT_BLANKING_WIDTH = exports.V4L2_DV_FL_CAN_DETECT_REDUCED_FPS = exports.V4L2_DV_FL_HAS_HDMI_VIC = exports.V4L2_DV_FL_HAS_CEA861_VIC = exports.V4L2_DV_FL_HAS_PICTURE_ASPECT = exports.V4L2_DV_FL_FIRST_FIELD_EXTRA_LINE = exports.V4L2_DV_FL_IS_CE_VIDEO = exports.V4L2_DV_FL_HALF_LINE = exports.V4L2_DV_FL_REDUCED_FPS = exports.V4L2_DV_FL_CAN_REDUCE_FPS = exports.V4L2_DV_FL_REDUCED_BLANKING = exports.V4L2_DV_BT_STD_SDI = exports.V4L2_DV_BT_STD_GTF = exports.V4L2_DV_BT_STD_CVT = exports.V4L2_DV_BT_STD_DMT = exports.V4L2_DV_BT_STD_CEA861 = exports.V4L2_DV_HSYNC_POS_POL = exports.V4L2_DV_VSYNC_POS_POL = exports.V4L2_DV_INTERLACED = exports.V4L2_DV_PROGRESSIVE = exports.v4l2_bt_timings = exports.v4l2_standard = exports.V4L2_STD_ALL = exports.V4L2_STD_UNKNOWN = exports.V4L2_STD_ATSC = exports.V4L2_STD_625_50 = exports.V4L2_STD_525_60 = exports.V4L2_STD_MTS = exports.V4L2_STD_MN = exports.V4L2_STD_BG = exports.V4L2_STD_DK = exports.V4L2_STD_GH = exports.V4L2_STD_L = exports.V4L2_STD_H = exports.V4L2_STD_G = exports.V4L2_STD_B = void 0;
exports.V4L2_CTRL_FLAG_SLIDER = exports.V4L2_CTRL_FLAG_INACTIVE = exports.V4L2_CTRL_FLAG_UPDATE = exports.V4L2_CTRL_FLAG_READ_ONLY = exports.V4L2_CTRL_FLAG_GRABBED = exports.V4L2_CTRL_FLAG_DISABLED = exports.v4l2_querymenu = exports.v4l2_query_ext_ctrl = exports.v4l2_queryctrl = exports.v4l2_ctrl_type = exports.V4L2_CTRL_WHICH_REQUEST_VAL = exports.V4L2_CTRL_WHICH_DEF_VAL = exports.V4L2_CTRL_WHICH_CUR_VAL = exports.V4L2_CTRL_MAX_DIMS = exports.V4L2_CTRL_DRIVER_PRIV = exports.V4L2_CTRL_ID2WHICH = exports.V4L2_CTRL_ID2CLASS = exports.V4L2_CTRL_ID_MASK = exports.v4l2_ext_controls = exports.v4l2_ext_control = exports.v4l2_control = exports.V4L2_OUT_CAP_NATIVE_SIZE = exports.V4L2_OUT_CAP_STD = exports.V4L2_OUT_CAP_CUSTOM_TIMINGS = exports.V4L2_OUT_CAP_DV_TIMINGS = exports.V4L2_OUTPUT_TYPE_ANALOGVGAOVERLAY = exports.V4L2_OUTPUT_TYPE_ANALOG = exports.V4L2_OUTPUT_TYPE_MODULATOR = exports.v4l2_output = exports.V4L2_IN_CAP_NATIVE_SIZE = exports.V4L2_IN_CAP_STD = exports.V4L2_IN_CAP_CUSTOM_TIMINGS = exports.V4L2_IN_CAP_DV_TIMINGS = exports.V4L2_IN_ST_VTR = exports.V4L2_IN_ST_NO_ACCESS = exports.V4L2_IN_ST_MACROVISION = exports.V4L2_IN_ST_NO_CARRIER = exports.V4L2_IN_ST_NO_EQU = exports.V4L2_IN_ST_NO_SYNC = exports.V4L2_IN_ST_NO_STD_LOCK = exports.V4L2_IN_ST_NO_V_LOCK = exports.V4L2_IN_ST_COLOR_KILL = exports.V4L2_IN_ST_NO_H_LOCK = exports.V4L2_IN_ST_VFLIP = exports.V4L2_IN_ST_HFLIP = exports.V4L2_IN_ST_NO_COLOR = exports.V4L2_IN_ST_NO_SIGNAL = exports.V4L2_IN_ST_NO_POWER = exports.V4L2_INPUT_TYPE_TOUCH = exports.V4L2_INPUT_TYPE_CAMERA = void 0;
exports.V4L2_RDS_BLOCK_C_ALT = exports.V4L2_RDS_BLOCK_D = exports.V4L2_RDS_BLOCK_C = exports.V4L2_RDS_BLOCK_B = exports.V4L2_RDS_BLOCK_A = exports.V4L2_RDS_BLOCK_MSK = exports.v4l2_rds_data = exports.v4l2_hw_freq_seek = exports.v4l2_frequency_band = exports.V4L2_BAND_MODULATION_AM = exports.V4L2_BAND_MODULATION_FM = exports.V4L2_BAND_MODULATION_VSB = exports.v4l2_frequency = exports.V4L2_TUNER_MODE_LANG1_LANG2 = exports.V4L2_TUNER_MODE_LANG1 = exports.V4L2_TUNER_MODE_SAP = exports.V4L2_TUNER_MODE_LANG2 = exports.V4L2_TUNER_MODE_STEREO = exports.V4L2_TUNER_MODE_MONO = exports.V4L2_TUNER_SUB_RDS = exports.V4L2_TUNER_SUB_LANG1 = exports.V4L2_TUNER_SUB_SAP = exports.V4L2_TUNER_SUB_LANG2 = exports.V4L2_TUNER_SUB_STEREO = exports.V4L2_TUNER_SUB_MONO = exports.V4L2_TUNER_CAP_1HZ = exports.V4L2_TUNER_CAP_HWSEEK_PROG_LIM = exports.V4L2_TUNER_CAP_FREQ_BANDS = exports.V4L2_TUNER_CAP_RDS_CONTROLS = exports.V4L2_TUNER_CAP_RDS_BLOCK_IO = exports.V4L2_TUNER_CAP_RDS = exports.V4L2_TUNER_CAP_LANG1 = exports.V4L2_TUNER_CAP_SAP = exports.V4L2_TUNER_CAP_LANG2 = exports.V4L2_TUNER_CAP_STEREO = exports.V4L2_TUNER_CAP_HWSEEK_WRAP = exports.V4L2_TUNER_CAP_HWSEEK_BOUNDED = exports.V4L2_TUNER_CAP_NORM = exports.V4L2_TUNER_CAP_LOW = exports.v4l2_modulator = exports.v4l2_tuner = exports.V4L2_CID_PRIVATE_BASE = exports.V4L2_CID_MAX_CTRLS = exports.V4L2_CTRL_FLAG_NEXT_COMPOUND = exports.V4L2_CTRL_FLAG_NEXT_CTRL = exports.V4L2_CTRL_FLAG_MODIFY_LAYOUT = exports.V4L2_CTRL_FLAG_EXECUTE_ON_WRITE = exports.V4L2_CTRL_FLAG_HAS_PAYLOAD = exports.V4L2_CTRL_FLAG_VOLATILE = exports.V4L2_CTRL_FLAG_WRITE_ONLY = void 0;
exports.V4L2_MPEG_VBI_IVTV_TELETEXT_B = exports.v4l2_sliced_vbi_data = exports.v4l2_sliced_vbi_cap = exports.V4L2_SLICED_VBI_625 = exports.V4L2_SLICED_VBI_525 = exports.V4L2_SLICED_WSS_625 = exports.V4L2_SLICED_CAPTION_525 = exports.V4L2_SLICED_VPS = exports.V4L2_SLICED_TELETEXT_B = exports.v4l2_sliced_vbi_format = exports.V4L2_VBI_ITU_625_F2_START = exports.V4L2_VBI_ITU_625_F1_START = exports.V4L2_VBI_ITU_525_F2_START = exports.V4L2_VBI_ITU_525_F1_START = exports.V4L2_VBI_INTERLACED = exports.V4L2_VBI_UNSYNC = exports.v4l2_vbi_format = exports.v4l2_decoder_cmd = exports.V4L2_DEC_START_FMT_GOP = exports.V4L2_DEC_START_FMT_NONE = exports.V4L2_DEC_CMD_STOP_IMMEDIATELY = exports.V4L2_DEC_CMD_STOP_TO_BLACK = exports.V4L2_DEC_CMD_PAUSE_TO_BLACK = exports.V4L2_DEC_CMD_START_MUTE_AUDIO = exports.V4L2_DEC_CMD_FLUSH = exports.V4L2_DEC_CMD_RESUME = exports.V4L2_DEC_CMD_PAUSE = exports.V4L2_DEC_CMD_STOP = exports.V4L2_DEC_CMD_START = exports.v4l2_encoder_cmd = exports.V4L2_ENC_CMD_STOP_AT_GOP_END = exports.V4L2_ENC_CMD_RESUME = exports.V4L2_ENC_CMD_PAUSE = exports.V4L2_ENC_CMD_STOP = exports.V4L2_ENC_CMD_START = exports.v4l2_enc_idx = exports.V4L2_ENC_IDX_ENTRIES = exports.v4l2_enc_idx_entry = exports.V4L2_ENC_IDX_FRAME_MASK = exports.V4L2_ENC_IDX_FRAME_B = exports.V4L2_ENC_IDX_FRAME_P = exports.V4L2_ENC_IDX_FRAME_I = exports.v4l2_audioout = exports.V4L2_AUDMODE_AVL = exports.V4L2_AUDCAP_AVL = exports.V4L2_AUDCAP_STEREO = exports.v4l2_audio = exports.V4L2_RDS_BLOCK_ERROR = exports.V4L2_RDS_BLOCK_CORRECTED = exports.V4L2_RDS_BLOCK_INVALID = void 0;
exports.ioctl = exports.v4l2_event_subscription = exports.V4L2_EVENT_SUB_FL_ALLOW_FEEDBACK = exports.V4L2_EVENT_SUB_FL_SEND_INITIAL = exports.v4l2_event = exports.v4l2_event_motion_det = exports.V4L2_EVENT_MD_FL_HAVE_FRAME_SEQ = exports.v4l2_event_src_change = exports.V4L2_EVENT_SRC_CH_RESOLUTION = exports.v4l2_event_frame_sync = exports.v4l2_event_ctrl = exports.V4L2_EVENT_CTRL_CH_RANGE = exports.V4L2_EVENT_CTRL_CH_FLAGS = exports.V4L2_EVENT_CTRL_CH_VALUE = exports.v4l2_event_vsync = exports.V4L2_EVENT_PRIVATE_START = exports.V4L2_EVENT_MOTION_DET = exports.V4L2_EVENT_SOURCE_CHANGE = exports.V4L2_EVENT_FRAME_SYNC = exports.V4L2_EVENT_CTRL = exports.V4L2_EVENT_EOS = exports.V4L2_EVENT_VSYNC = exports.V4L2_EVENT_ALL = exports.v4l2_streamparm = exports.v4l2_format = exports.v4l2_meta_format = exports.v4l2_sdr_format = exports.v4l2_pix_format_mplane = exports.v4l2_plane_pix_format = exports.v4l2_mpeg_vbi_fmt_ivtv = exports.V4L2_MPEG_VBI_IVTV_MAGIC1 = exports.V4L2_MPEG_VBI_IVTV_MAGIC0 = exports.v4l2_mpeg_vbi_ITV0 = exports.v4l2_mpeg_vbi_itv0 = exports.v4l2_mpeg_vbi_itv0_line = exports.V4L2_MPEG_VBI_IVTV_VPS = exports.V4L2_MPEG_VBI_IVTV_WSS_625 = exports.V4L2_MPEG_VBI_IVTV_CAPTION_525 = void 0;
const ref_napi_1 = __importDefault(require("ref-napi"));
const ref_struct_di_1 = __importDefault(require("ref-struct-di"));
const ref_union_di_1 = __importDefault(require("ref-union-di"));
const ref_array_di_1 = __importDefault(require("ref-array-di"));
const constants_native = require("../../build/Release/v4l2_constants.node");
const StructType = (0, ref_struct_di_1.default)(ref_napi_1.default);
const UnionType = (0, ref_union_di_1.default)(ref_napi_1.default);
const ArrayType = (0, ref_array_di_1.default)(ref_napi_1.default);
/*
 * Common stuff for both V4L1 and V4L2
 * Moved from videodev.h
 */
exports.VIDEO_MAX_FRAME = 32;
exports.VIDEO_MAX_PLANES = 8;
/*
 *	M I S C E L L A N E O U S
 */
const libv4l2_1 = require("./libv4l2");
const structs_1 = require("./structs");
function v4l2_fourcc_be(a, b, c, d) {
    return (0, libv4l2_1.v4l2_fourcc)(a, b, c, d) | (1 << 31);
}
var v4l2_field;
(function (v4l2_field) {
    v4l2_field[v4l2_field["V4L2_FIELD_ANY"] = 0] = "V4L2_FIELD_ANY";
    v4l2_field[v4l2_field["V4L2_FIELD_NONE"] = 1] = "V4L2_FIELD_NONE";
    v4l2_field[v4l2_field["V4L2_FIELD_TOP"] = 2] = "V4L2_FIELD_TOP";
    v4l2_field[v4l2_field["V4L2_FIELD_BOTTOM"] = 3] = "V4L2_FIELD_BOTTOM";
    v4l2_field[v4l2_field["V4L2_FIELD_INTERLACED"] = 4] = "V4L2_FIELD_INTERLACED";
    v4l2_field[v4l2_field["V4L2_FIELD_SEQ_TB"] = 5] = "V4L2_FIELD_SEQ_TB";
    v4l2_field[v4l2_field["V4L2_FIELD_SEQ_BT"] = 6] = "V4L2_FIELD_SEQ_BT";
    v4l2_field[v4l2_field["V4L2_FIELD_ALTERNATE"] = 7] = "V4L2_FIELD_ALTERNATE";
    v4l2_field[v4l2_field["V4L2_FIELD_INTERLACED_TB"] = 8] = "V4L2_FIELD_INTERLACED_TB";
    v4l2_field[v4l2_field["V4L2_FIELD_INTERLACED_BT"] = 9] = "V4L2_FIELD_INTERLACED_BT";
})(v4l2_field || (exports.v4l2_field = v4l2_field = {}));
;
function V4L2_FIELD_HAS_TOP(field) {
    return (field === v4l2_field.V4L2_FIELD_TOP ||
        field === v4l2_field.V4L2_FIELD_INTERLACED ||
        field === v4l2_field.V4L2_FIELD_INTERLACED_TB ||
        field === v4l2_field.V4L2_FIELD_INTERLACED_BT ||
        field === v4l2_field.V4L2_FIELD_SEQ_TB ||
        field === v4l2_field.V4L2_FIELD_SEQ_BT);
}
exports.V4L2_FIELD_HAS_TOP = V4L2_FIELD_HAS_TOP;
function V4L2_FIELD_HAS_BOTTOM(field) {
    return (field === v4l2_field.V4L2_FIELD_BOTTOM ||
        field === v4l2_field.V4L2_FIELD_INTERLACED ||
        field === v4l2_field.V4L2_FIELD_INTERLACED_TB ||
        field === v4l2_field.V4L2_FIELD_INTERLACED_BT ||
        field === v4l2_field.V4L2_FIELD_SEQ_TB ||
        field === v4l2_field.V4L2_FIELD_SEQ_BT);
}
exports.V4L2_FIELD_HAS_BOTTOM = V4L2_FIELD_HAS_BOTTOM;
function V4L2_FIELD_HAS_BOTH(field) {
    return (field === v4l2_field.V4L2_FIELD_INTERLACED ||
        field === v4l2_field.V4L2_FIELD_INTERLACED_TB ||
        field === v4l2_field.V4L2_FIELD_INTERLACED_BT ||
        field === v4l2_field.V4L2_FIELD_SEQ_TB ||
        field === v4l2_field.V4L2_FIELD_SEQ_BT);
}
exports.V4L2_FIELD_HAS_BOTH = V4L2_FIELD_HAS_BOTH;
function V4L2_FIELD_HAS_T_OR_B(field) {
    return (field === v4l2_field.V4L2_FIELD_BOTTOM ||
        field === v4l2_field.V4L2_FIELD_TOP ||
        field === v4l2_field.V4L2_FIELD_ALTERNATE);
}
exports.V4L2_FIELD_HAS_T_OR_B = V4L2_FIELD_HAS_T_OR_B;
function V4L2_FIELD_IS_INTERLACED(field) {
    return (field === v4l2_field.V4L2_FIELD_INTERLACED ||
        field === v4l2_field.V4L2_FIELD_INTERLACED_TB ||
        field === v4l2_field.V4L2_FIELD_INTERLACED_BT);
}
exports.V4L2_FIELD_IS_INTERLACED = V4L2_FIELD_IS_INTERLACED;
function V4L2_FIELD_IS_SEQUENTIAL(field) {
    return (field === v4l2_field.V4L2_FIELD_SEQ_TB ||
        field === v4l2_field.V4L2_FIELD_SEQ_BT);
}
exports.V4L2_FIELD_IS_SEQUENTIAL = V4L2_FIELD_IS_SEQUENTIAL;
var v4l2_buf_type;
(function (v4l2_buf_type) {
    v4l2_buf_type[v4l2_buf_type["V4L2_BUF_TYPE_VIDEO_CAPTURE"] = 1] = "V4L2_BUF_TYPE_VIDEO_CAPTURE";
    v4l2_buf_type[v4l2_buf_type["V4L2_BUF_TYPE_VIDEO_OUTPUT"] = 2] = "V4L2_BUF_TYPE_VIDEO_OUTPUT";
    v4l2_buf_type[v4l2_buf_type["V4L2_BUF_TYPE_VIDEO_OVERLAY"] = 3] = "V4L2_BUF_TYPE_VIDEO_OVERLAY";
    v4l2_buf_type[v4l2_buf_type["V4L2_BUF_TYPE_VBI_CAPTURE"] = 4] = "V4L2_BUF_TYPE_VBI_CAPTURE";
    v4l2_buf_type[v4l2_buf_type["V4L2_BUF_TYPE_VBI_OUTPUT"] = 5] = "V4L2_BUF_TYPE_VBI_OUTPUT";
    v4l2_buf_type[v4l2_buf_type["V4L2_BUF_TYPE_SLICED_VBI_CAPTURE"] = 6] = "V4L2_BUF_TYPE_SLICED_VBI_CAPTURE";
    v4l2_buf_type[v4l2_buf_type["V4L2_BUF_TYPE_SLICED_VBI_OUTPUT"] = 7] = "V4L2_BUF_TYPE_SLICED_VBI_OUTPUT";
    v4l2_buf_type[v4l2_buf_type["V4L2_BUF_TYPE_VIDEO_OUTPUT_OVERLAY"] = 8] = "V4L2_BUF_TYPE_VIDEO_OUTPUT_OVERLAY";
    v4l2_buf_type[v4l2_buf_type["V4L2_BUF_TYPE_VIDEO_CAPTURE_MPLANE"] = 9] = "V4L2_BUF_TYPE_VIDEO_CAPTURE_MPLANE";
    v4l2_buf_type[v4l2_buf_type["V4L2_BUF_TYPE_VIDEO_OUTPUT_MPLANE"] = 10] = "V4L2_BUF_TYPE_VIDEO_OUTPUT_MPLANE";
    v4l2_buf_type[v4l2_buf_type["V4L2_BUF_TYPE_SDR_CAPTURE"] = 11] = "V4L2_BUF_TYPE_SDR_CAPTURE";
    v4l2_buf_type[v4l2_buf_type["V4L2_BUF_TYPE_SDR_OUTPUT"] = 12] = "V4L2_BUF_TYPE_SDR_OUTPUT";
    v4l2_buf_type[v4l2_buf_type["V4L2_BUF_TYPE_META_CAPTURE"] = 13] = "V4L2_BUF_TYPE_META_CAPTURE";
    v4l2_buf_type[v4l2_buf_type["V4L2_BUF_TYPE_META_OUTPUT"] = 14] = "V4L2_BUF_TYPE_META_OUTPUT";
    /* Deprecated, do not use */
    v4l2_buf_type[v4l2_buf_type["V4L2_BUF_TYPE_PRIVATE"] = 128] = "V4L2_BUF_TYPE_PRIVATE";
})(v4l2_buf_type || (exports.v4l2_buf_type = v4l2_buf_type = {}));
;
function V4L2_TYPE_IS_MULTIPLANAR(type) {
    return (type === v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_CAPTURE_MPLANE ||
        type === v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_OUTPUT_MPLANE);
}
exports.V4L2_TYPE_IS_MULTIPLANAR = V4L2_TYPE_IS_MULTIPLANAR;
function V4L2_TYPE_IS_OUTPUT(type) {
    return (type === v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_OUTPUT ||
        type === v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_OUTPUT_MPLANE ||
        type === v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_OVERLAY ||
        type === v4l2_buf_type.V4L2_BUF_TYPE_VIDEO_OUTPUT_OVERLAY ||
        type === v4l2_buf_type.V4L2_BUF_TYPE_VBI_OUTPUT ||
        type === v4l2_buf_type.V4L2_BUF_TYPE_SLICED_VBI_OUTPUT ||
        type === v4l2_buf_type.V4L2_BUF_TYPE_SDR_OUTPUT ||
        type === v4l2_buf_type.V4L2_BUF_TYPE_META_OUTPUT);
}
exports.V4L2_TYPE_IS_OUTPUT = V4L2_TYPE_IS_OUTPUT;
function V4L2_TYPE_IS_CAPTURE(type) {
    return !V4L2_TYPE_IS_OUTPUT(type);
}
exports.V4L2_TYPE_IS_CAPTURE = V4L2_TYPE_IS_CAPTURE;
var v4l2_tuner_type;
(function (v4l2_tuner_type) {
    v4l2_tuner_type[v4l2_tuner_type["V4L2_TUNER_RADIO"] = 1] = "V4L2_TUNER_RADIO";
    v4l2_tuner_type[v4l2_tuner_type["V4L2_TUNER_ANALOG_TV"] = 2] = "V4L2_TUNER_ANALOG_TV";
    v4l2_tuner_type[v4l2_tuner_type["V4L2_TUNER_DIGITAL_TV"] = 3] = "V4L2_TUNER_DIGITAL_TV";
    v4l2_tuner_type[v4l2_tuner_type["V4L2_TUNER_SDR"] = 4] = "V4L2_TUNER_SDR";
    v4l2_tuner_type[v4l2_tuner_type["V4L2_TUNER_RF"] = 5] = "V4L2_TUNER_RF";
})(v4l2_tuner_type || (exports.v4l2_tuner_type = v4l2_tuner_type = {}));
;
var v4l2_memory;
(function (v4l2_memory) {
    v4l2_memory[v4l2_memory["V4L2_MEMORY_MMAP"] = 1] = "V4L2_MEMORY_MMAP";
    v4l2_memory[v4l2_memory["V4L2_MEMORY_USERPTR"] = 2] = "V4L2_MEMORY_USERPTR";
    v4l2_memory[v4l2_memory["V4L2_MEMORY_OVERLAY"] = 3] = "V4L2_MEMORY_OVERLAY";
    v4l2_memory[v4l2_memory["V4L2_MEMORY_DMABUF"] = 4] = "V4L2_MEMORY_DMABUF";
})(v4l2_memory || (exports.v4l2_memory = v4l2_memory = {}));
;
/* see also http://vektor.theorem.ca/graphics/ycbcr/ */
var v4l2_colorspace;
(function (v4l2_colorspace) {
    /*
     * Default colorspace, i.e. let the driver figure it out.
     * Can only be used with video capture.
     */
    v4l2_colorspace[v4l2_colorspace["V4L2_COLORSPACE_DEFAULT"] = 0] = "V4L2_COLORSPACE_DEFAULT";
    /* SMPTE 170M: used for broadcast NTSC/PAL SDTV */
    v4l2_colorspace[v4l2_colorspace["V4L2_COLORSPACE_SMPTE170M"] = 1] = "V4L2_COLORSPACE_SMPTE170M";
    /* Obsolete pre-1998 SMPTE 240M HDTV standard, superseded by Rec 709 */
    v4l2_colorspace[v4l2_colorspace["V4L2_COLORSPACE_SMPTE240M"] = 2] = "V4L2_COLORSPACE_SMPTE240M";
    /* Rec.709: used for HDTV */
    v4l2_colorspace[v4l2_colorspace["V4L2_COLORSPACE_REC709"] = 3] = "V4L2_COLORSPACE_REC709";
    /*
     * Deprecated, do not use. No driver will ever return this. This was
     * based on a misunderstanding of the bt878 datasheet.
     */
    v4l2_colorspace[v4l2_colorspace["V4L2_COLORSPACE_BT878"] = 4] = "V4L2_COLORSPACE_BT878";
    /*
     * NTSC 1953 colorspace. This only makes sense when dealing with
     * really, really old NTSC recordings. Superseded by SMPTE 170M.
     */
    v4l2_colorspace[v4l2_colorspace["V4L2_COLORSPACE_470_SYSTEM_M"] = 5] = "V4L2_COLORSPACE_470_SYSTEM_M";
    /*
     * EBU Tech 3213 PAL/SECAM colorspace.
     */
    v4l2_colorspace[v4l2_colorspace["V4L2_COLORSPACE_470_SYSTEM_BG"] = 6] = "V4L2_COLORSPACE_470_SYSTEM_BG";
    /*
     * Effectively shorthand for V4L2_COLORSPACE_SRGB, V4L2_YCBCR_ENC_601
     * and V4L2_QUANTIZATION_FULL_RANGE. To be used for (Motion-)JPEG.
     */
    v4l2_colorspace[v4l2_colorspace["V4L2_COLORSPACE_JPEG"] = 7] = "V4L2_COLORSPACE_JPEG";
    /* For RGB colorspaces such as produces by most webcams. */
    v4l2_colorspace[v4l2_colorspace["V4L2_COLORSPACE_SRGB"] = 8] = "V4L2_COLORSPACE_SRGB";
    /* opRGB colorspace */
    v4l2_colorspace[v4l2_colorspace["V4L2_COLORSPACE_OPRGB"] = 9] = "V4L2_COLORSPACE_OPRGB";
    /* BT.2020 colorspace, used for UHDTV. */
    v4l2_colorspace[v4l2_colorspace["V4L2_COLORSPACE_BT2020"] = 10] = "V4L2_COLORSPACE_BT2020";
    /* Raw colorspace: for RAW unprocessed images */
    v4l2_colorspace[v4l2_colorspace["V4L2_COLORSPACE_RAW"] = 11] = "V4L2_COLORSPACE_RAW";
    /* DCI-P3 colorspace, used by cinema projectors */
    v4l2_colorspace[v4l2_colorspace["V4L2_COLORSPACE_DCI_P3"] = 12] = "V4L2_COLORSPACE_DCI_P3";
})(v4l2_colorspace || (exports.v4l2_colorspace = v4l2_colorspace = {}));
;
function V4L2_MAP_COLORSPACE_DEFAULT(is_sdtv, is_hdtv) {
    return ((is_sdtv) ? v4l2_colorspace.V4L2_COLORSPACE_SMPTE170M :
        ((is_hdtv) ? v4l2_colorspace.V4L2_COLORSPACE_REC709 : v4l2_colorspace.V4L2_COLORSPACE_SRGB));
}
exports.V4L2_MAP_COLORSPACE_DEFAULT = V4L2_MAP_COLORSPACE_DEFAULT;
var v4l2_xfer_func;
(function (v4l2_xfer_func) {
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
    v4l2_xfer_func[v4l2_xfer_func["V4L2_XFER_FUNC_DEFAULT"] = 0] = "V4L2_XFER_FUNC_DEFAULT";
    v4l2_xfer_func[v4l2_xfer_func["V4L2_XFER_FUNC_709"] = 1] = "V4L2_XFER_FUNC_709";
    v4l2_xfer_func[v4l2_xfer_func["V4L2_XFER_FUNC_SRGB"] = 2] = "V4L2_XFER_FUNC_SRGB";
    v4l2_xfer_func[v4l2_xfer_func["V4L2_XFER_FUNC_OPRGB"] = 3] = "V4L2_XFER_FUNC_OPRGB";
    v4l2_xfer_func[v4l2_xfer_func["V4L2_XFER_FUNC_SMPTE240M"] = 4] = "V4L2_XFER_FUNC_SMPTE240M";
    v4l2_xfer_func[v4l2_xfer_func["V4L2_XFER_FUNC_NONE"] = 5] = "V4L2_XFER_FUNC_NONE";
    v4l2_xfer_func[v4l2_xfer_func["V4L2_XFER_FUNC_DCI_P3"] = 6] = "V4L2_XFER_FUNC_DCI_P3";
    v4l2_xfer_func[v4l2_xfer_func["V4L2_XFER_FUNC_SMPTE2084"] = 7] = "V4L2_XFER_FUNC_SMPTE2084";
})(v4l2_xfer_func || (exports.v4l2_xfer_func = v4l2_xfer_func = {}));
;
/*
 * Determine how XFER_FUNC_DEFAULT should map to a proper transfer function.
 * This depends on the colorspace.
 */
function V4L2_MAP_XFER_FUNC_DEFAULT(colsp) {
    return (colsp === v4l2_colorspace.V4L2_COLORSPACE_OPRGB
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
                        : v4l2_xfer_func.V4L2_XFER_FUNC_709);
}
exports.V4L2_MAP_XFER_FUNC_DEFAULT = V4L2_MAP_XFER_FUNC_DEFAULT;
var v4l2_ycbcr_encoding;
(function (v4l2_ycbcr_encoding) {
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
    v4l2_ycbcr_encoding[v4l2_ycbcr_encoding["V4L2_YCBCR_ENC_DEFAULT"] = 0] = "V4L2_YCBCR_ENC_DEFAULT";
    /* ITU-R 601 -- SDTV */
    v4l2_ycbcr_encoding[v4l2_ycbcr_encoding["V4L2_YCBCR_ENC_601"] = 1] = "V4L2_YCBCR_ENC_601";
    /* Rec. 709 -- HDTV */
    v4l2_ycbcr_encoding[v4l2_ycbcr_encoding["V4L2_YCBCR_ENC_709"] = 2] = "V4L2_YCBCR_ENC_709";
    /* ITU-R 601/EN 61966-2-4 Extended Gamut -- SDTV */
    v4l2_ycbcr_encoding[v4l2_ycbcr_encoding["V4L2_YCBCR_ENC_XV601"] = 3] = "V4L2_YCBCR_ENC_XV601";
    /* Rec. 709/EN 61966-2-4 Extended Gamut -- HDTV */
    v4l2_ycbcr_encoding[v4l2_ycbcr_encoding["V4L2_YCBCR_ENC_XV709"] = 4] = "V4L2_YCBCR_ENC_XV709";
    /*
     * sYCC (Y'CbCr encoding of sRGB), identical to ENC_601. It was added
     * originally due to a misunderstanding of the sYCC standard. It should
     * not be used, instead use V4L2_YCBCR_ENC_601.
     */
    v4l2_ycbcr_encoding[v4l2_ycbcr_encoding["V4L2_YCBCR_ENC_SYCC"] = 5] = "V4L2_YCBCR_ENC_SYCC";
    /* BT.2020 Non-constant Luminance Y'CbCr */
    v4l2_ycbcr_encoding[v4l2_ycbcr_encoding["V4L2_YCBCR_ENC_BT2020"] = 6] = "V4L2_YCBCR_ENC_BT2020";
    /* BT.2020 Constant Luminance Y'CbcCrc */
    v4l2_ycbcr_encoding[v4l2_ycbcr_encoding["V4L2_YCBCR_ENC_BT2020_CONST_LUM"] = 7] = "V4L2_YCBCR_ENC_BT2020_CONST_LUM";
    /* SMPTE 240M -- Obsolete HDTV */
    v4l2_ycbcr_encoding[v4l2_ycbcr_encoding["V4L2_YCBCR_ENC_SMPTE240M"] = 8] = "V4L2_YCBCR_ENC_SMPTE240M";
})(v4l2_ycbcr_encoding || (exports.v4l2_ycbcr_encoding = v4l2_ycbcr_encoding = {}));
;
/*
 * enum v4l2_hsv_encoding values should not collide with the ones from
 * enum v4l2_ycbcr_encoding.
 */
var v4l2_hsv_encoding;
(function (v4l2_hsv_encoding) {
    /* Hue mapped to 0 - 179 */
    v4l2_hsv_encoding[v4l2_hsv_encoding["V4L2_HSV_ENC_180"] = 128] = "V4L2_HSV_ENC_180";
    /* Hue mapped to 0-255 */
    v4l2_hsv_encoding[v4l2_hsv_encoding["V4L2_HSV_ENC_256"] = 129] = "V4L2_HSV_ENC_256";
})(v4l2_hsv_encoding || (exports.v4l2_hsv_encoding = v4l2_hsv_encoding = {}));
;
function V4L2_MAP_YCBCR_ENC_DEFAULT(colsp) {
    return ((colsp === v4l2_colorspace.V4L2_COLORSPACE_REC709 ||
        colsp === v4l2_colorspace.V4L2_COLORSPACE_DCI_P3)
        ? v4l2_ycbcr_encoding.V4L2_YCBCR_ENC_709
        : colsp === v4l2_colorspace.V4L2_COLORSPACE_BT2020
            ? v4l2_ycbcr_encoding.V4L2_YCBCR_ENC_BT2020
            : colsp === v4l2_colorspace.V4L2_COLORSPACE_SMPTE240M
                ? v4l2_ycbcr_encoding.V4L2_YCBCR_ENC_SMPTE240M
                : v4l2_ycbcr_encoding.V4L2_YCBCR_ENC_601);
}
exports.V4L2_MAP_YCBCR_ENC_DEFAULT = V4L2_MAP_YCBCR_ENC_DEFAULT;
var v4l2_quantization;
(function (v4l2_quantization) {
    /*
     * The default for R'G'B' quantization is always full range.
     * For Y'CbCr the quantization is always limited range, except
     * for COLORSPACE_JPEG: this is full range.
     */
    v4l2_quantization[v4l2_quantization["V4L2_QUANTIZATION_DEFAULT"] = 0] = "V4L2_QUANTIZATION_DEFAULT";
    v4l2_quantization[v4l2_quantization["V4L2_QUANTIZATION_FULL_RANGE"] = 1] = "V4L2_QUANTIZATION_FULL_RANGE";
    v4l2_quantization[v4l2_quantization["V4L2_QUANTIZATION_LIM_RANGE"] = 2] = "V4L2_QUANTIZATION_LIM_RANGE";
})(v4l2_quantization || (exports.v4l2_quantization = v4l2_quantization = {}));
;
/*
 * Determine how QUANTIZATION_DEFAULT should map to a proper quantization.
 * This depends on whether the image is RGB or not, the colorspace.
 * The Y'CbCr encoding is not used anymore, but is still there for backwards
 * compatibility.
 */
function V4L2_MAP_QUANTIZATION_DEFAULT(is_rgb_or_hsv, colsp) {
    return ((is_rgb_or_hsv || colsp === v4l2_colorspace.V4L2_COLORSPACE_JPEG)
        ? v4l2_quantization.V4L2_QUANTIZATION_FULL_RANGE
        : v4l2_quantization.V4L2_QUANTIZATION_LIM_RANGE);
}
exports.V4L2_MAP_QUANTIZATION_DEFAULT = V4L2_MAP_QUANTIZATION_DEFAULT;
var v4l2_priority;
(function (v4l2_priority) {
    v4l2_priority[v4l2_priority["V4L2_PRIORITY_UNSET"] = 0] = "V4L2_PRIORITY_UNSET";
    v4l2_priority[v4l2_priority["V4L2_PRIORITY_BACKGROUND"] = 1] = "V4L2_PRIORITY_BACKGROUND";
    v4l2_priority[v4l2_priority["V4L2_PRIORITY_INTERACTIVE"] = 2] = "V4L2_PRIORITY_INTERACTIVE";
    v4l2_priority[v4l2_priority["V4L2_PRIORITY_RECORD"] = 3] = "V4L2_PRIORITY_RECORD";
    v4l2_priority[v4l2_priority["V4L2_PRIORITY_DEFAULT"] = 2] = "V4L2_PRIORITY_DEFAULT";
})(v4l2_priority || (exports.v4l2_priority = v4l2_priority = {}));
;
exports.v4l2_rect = StructType({
    left: ref_napi_1.default.types.int32,
    top: ref_napi_1.default.types.int32,
    width: ref_napi_1.default.types.uint32,
    height: ref_napi_1.default.types.uint32,
});
exports.v4l2_fract = StructType({
    numerator: ref_napi_1.default.types.uint32,
    denominator: ref_napi_1.default.types.uint32,
});
exports.v4l2_area = StructType({
    width: ref_napi_1.default.types.uint32,
    height: ref_napi_1.default.types.uint32,
});
exports.v4l2_capability = StructType({
    driver: new ArrayType(ref_napi_1.default.types.uint8, 16),
    card: new ArrayType(ref_napi_1.default.types.uint8, 32),
    bus_info: new ArrayType(ref_napi_1.default.types.uint8, 32),
    version: ref_napi_1.default.types.uint32,
    capabilities: ref_napi_1.default.types.uint32,
    device_caps: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 3),
});
/* Values for 'capabilities' field */
exports.V4L2_CAP_VIDEO_CAPTURE = 0x00000001; /* Is a video capture device */
exports.V4L2_CAP_VIDEO_OUTPUT = 0x00000002; /* Is a video output device */
exports.V4L2_CAP_VIDEO_OVERLAY = 0x00000004; /* Can do video overlay */
exports.V4L2_CAP_VBI_CAPTURE = 0x00000010; /* Is a raw VBI capture device */
exports.V4L2_CAP_VBI_OUTPUT = 0x00000020; /* Is a raw VBI output device */
exports.V4L2_CAP_SLICED_VBI_CAPTURE = 0x00000040; /* Is a sliced VBI capture device */
exports.V4L2_CAP_SLICED_VBI_OUTPUT = 0x00000080; /* Is a sliced VBI output device */
exports.V4L2_CAP_RDS_CAPTURE = 0x00000100; /* RDS data capture */
exports.V4L2_CAP_VIDEO_OUTPUT_OVERLAY = 0x00000200; /* Can do video output overlay */
exports.V4L2_CAP_HW_FREQ_SEEK = 0x00000400; /* Can do hardware frequency seek  */
exports.V4L2_CAP_RDS_OUTPUT = 0x00000800; /* Is an RDS encoder */
/* Is a video capture device that supports multiplanar formats */
exports.V4L2_CAP_VIDEO_CAPTURE_MPLANE = 0x00001000;
/* Is a video output device that supports multiplanar formats */
exports.V4L2_CAP_VIDEO_OUTPUT_MPLANE = 0x00002000;
/* Is a video mem-to-mem device that supports multiplanar formats */
exports.V4L2_CAP_VIDEO_M2M_MPLANE = 0x00004000;
/* Is a video mem-to-mem device */
exports.V4L2_CAP_VIDEO_M2M = 0x00008000;
exports.V4L2_CAP_TUNER = 0x00010000; /* has a tuner */
exports.V4L2_CAP_AUDIO = 0x00020000; /* has audio support */
exports.V4L2_CAP_RADIO = 0x00040000; /* is a radio device */
exports.V4L2_CAP_MODULATOR = 0x00080000; /* has a modulator */
exports.V4L2_CAP_SDR_CAPTURE = 0x00100000; /* Is a SDR capture device */
exports.V4L2_CAP_EXT_PIX_FORMAT = 0x00200000; /* Supports the extended pixel format */
exports.V4L2_CAP_SDR_OUTPUT = 0x00400000; /* Is a SDR output device */
exports.V4L2_CAP_META_CAPTURE = 0x00800000; /* Is a metadata capture device */
exports.V4L2_CAP_READWRITE = 0x01000000; /* read/write systemcalls */
exports.V4L2_CAP_ASYNCIO = 0x02000000; /* async I/O */
exports.V4L2_CAP_STREAMING = 0x04000000; /* streaming I/O ioctls */
exports.V4L2_CAP_META_OUTPUT = 0x08000000; /* Is a metadata output device */
exports.V4L2_CAP_TOUCH = 0x10000000; /* Is a touch device */
exports.V4L2_CAP_IO_MC = 0x20000000; /* Is input/output controlled by the media controller */
exports.V4L2_CAP_DEVICE_CAPS = 0x80000000; /* sets device capabilities field */
/*
 *	V I D E O   I M A G E   F O R M A T
 */
exports.v4l2_pix_format = StructType({
    width: ref_napi_1.default.types.uint32,
    height: ref_napi_1.default.types.uint32,
    pixelformat: ref_napi_1.default.types.uint32,
    field: ref_napi_1.default.types.uint32,
    bytesperline: ref_napi_1.default.types.uint32,
    sizeimage: ref_napi_1.default.types.uint32,
    colorspace: ref_napi_1.default.types.uint32,
    priv: ref_napi_1.default.types.uint32,
    flags: ref_napi_1.default.types.uint32,
    encoding: new UnionType({
        ycbcr_enc: ref_napi_1.default.types.uint32,
        hsv_enc: ref_napi_1.default.types.uint32,
    }),
    quantization: ref_napi_1.default.types.uint32,
    xfer_func: ref_napi_1.default.types.uint32,
});
/*      Pixel format         FOURCC                          depth  Description  */
/* RGB formats (1 or 2 bytes per pixel) */
exports.V4L2_PIX_FMT_RGB332 = (0, libv4l2_1.v4l2_fourcc)('R', 'G', 'B', '1'); /*  8  RGB-3-3-2     */
exports.V4L2_PIX_FMT_RGB444 = (0, libv4l2_1.v4l2_fourcc)('R', '4', '4', '4'); /* 16  xxxxrrrr ggggbbbb */
exports.V4L2_PIX_FMT_ARGB444 = (0, libv4l2_1.v4l2_fourcc)('A', 'R', '1', '2'); /* 16  aaaarrrr ggggbbbb */
exports.V4L2_PIX_FMT_XRGB444 = (0, libv4l2_1.v4l2_fourcc)('X', 'R', '1', '2'); /* 16  xxxxrrrr ggggbbbb */
exports.V4L2_PIX_FMT_RGBA444 = (0, libv4l2_1.v4l2_fourcc)('R', 'A', '1', '2'); /* 16  rrrrgggg bbbbaaaa */
exports.V4L2_PIX_FMT_RGBX444 = (0, libv4l2_1.v4l2_fourcc)('R', 'X', '1', '2'); /* 16  rrrrgggg bbbbxxxx */
exports.V4L2_PIX_FMT_ABGR444 = (0, libv4l2_1.v4l2_fourcc)('A', 'B', '1', '2'); /* 16  aaaabbbb ggggrrrr */
exports.V4L2_PIX_FMT_XBGR444 = (0, libv4l2_1.v4l2_fourcc)('X', 'B', '1', '2'); /* 16  xxxxbbbb ggggrrrr */
exports.V4L2_PIX_FMT_BGRA444 = (0, libv4l2_1.v4l2_fourcc)('G', 'A', '1', '2'); /* 16  bbbbgggg rrrraaaa */
exports.V4L2_PIX_FMT_BGRX444 = (0, libv4l2_1.v4l2_fourcc)('B', 'X', '1', '2'); /* 16  bbbbgggg rrrrxxxx */
exports.V4L2_PIX_FMT_RGB555 = (0, libv4l2_1.v4l2_fourcc)('R', 'G', 'B', 'O'); /* 16  RGB-5-5-5     */
exports.V4L2_PIX_FMT_ARGB555 = (0, libv4l2_1.v4l2_fourcc)('A', 'R', '1', '5'); /* 16  ARGB-1-5-5-5  */
exports.V4L2_PIX_FMT_XRGB555 = (0, libv4l2_1.v4l2_fourcc)('X', 'R', '1', '5'); /* 16  XRGB-1-5-5-5  */
exports.V4L2_PIX_FMT_RGBA555 = (0, libv4l2_1.v4l2_fourcc)('R', 'A', '1', '5'); /* 16  RGBA-5-5-5-1  */
exports.V4L2_PIX_FMT_RGBX555 = (0, libv4l2_1.v4l2_fourcc)('R', 'X', '1', '5'); /* 16  RGBX-5-5-5-1  */
exports.V4L2_PIX_FMT_ABGR555 = (0, libv4l2_1.v4l2_fourcc)('A', 'B', '1', '5'); /* 16  ABGR-1-5-5-5  */
exports.V4L2_PIX_FMT_XBGR555 = (0, libv4l2_1.v4l2_fourcc)('X', 'B', '1', '5'); /* 16  XBGR-1-5-5-5  */
exports.V4L2_PIX_FMT_BGRA555 = (0, libv4l2_1.v4l2_fourcc)('B', 'A', '1', '5'); /* 16  BGRA-5-5-5-1  */
exports.V4L2_PIX_FMT_BGRX555 = (0, libv4l2_1.v4l2_fourcc)('B', 'X', '1', '5'); /* 16  BGRX-5-5-5-1  */
exports.V4L2_PIX_FMT_RGB565 = (0, libv4l2_1.v4l2_fourcc)('R', 'G', 'B', 'P'); /* 16  RGB-5-6-5     */
exports.V4L2_PIX_FMT_RGB555X = (0, libv4l2_1.v4l2_fourcc)('R', 'G', 'B', 'Q'); /* 16  RGB-5-5-5 BE  */
exports.V4L2_PIX_FMT_ARGB555X = v4l2_fourcc_be('A', 'R', '1', '5'); /* 16  ARGB-5-5-5 BE */
exports.V4L2_PIX_FMT_XRGB555X = v4l2_fourcc_be('X', 'R', '1', '5'); /* 16  XRGB-5-5-5 BE */
exports.V4L2_PIX_FMT_RGB565X = (0, libv4l2_1.v4l2_fourcc)('R', 'G', 'B', 'R'); /* 16  RGB-5-6-5 BE  */
/* RGB formats (3 or 4 bytes per pixel) */
exports.V4L2_PIX_FMT_BGR666 = (0, libv4l2_1.v4l2_fourcc)('B', 'G', 'R', 'H'); /* 18  BGR-6-6-6	  */
exports.V4L2_PIX_FMT_BGR24 = (0, libv4l2_1.v4l2_fourcc)('B', 'G', 'R', '3'); /* 24  BGR-8-8-8     */
exports.V4L2_PIX_FMT_RGB24 = (0, libv4l2_1.v4l2_fourcc)('R', 'G', 'B', '3'); /* 24  RGB-8-8-8     */
exports.V4L2_PIX_FMT_BGR32 = (0, libv4l2_1.v4l2_fourcc)('B', 'G', 'R', '4'); /* 32  BGR-8-8-8-8   */
exports.V4L2_PIX_FMT_ABGR32 = (0, libv4l2_1.v4l2_fourcc)('A', 'R', '2', '4'); /* 32  BGRA-8-8-8-8  */
exports.V4L2_PIX_FMT_XBGR32 = (0, libv4l2_1.v4l2_fourcc)('X', 'R', '2', '4'); /* 32  BGRX-8-8-8-8  */
exports.V4L2_PIX_FMT_BGRA32 = (0, libv4l2_1.v4l2_fourcc)('R', 'A', '2', '4'); /* 32  ABGR-8-8-8-8  */
exports.V4L2_PIX_FMT_BGRX32 = (0, libv4l2_1.v4l2_fourcc)('R', 'X', '2', '4'); /* 32  XBGR-8-8-8-8  */
exports.V4L2_PIX_FMT_RGB32 = (0, libv4l2_1.v4l2_fourcc)('R', 'G', 'B', '4'); /* 32  RGB-8-8-8-8   */
exports.V4L2_PIX_FMT_RGBA32 = (0, libv4l2_1.v4l2_fourcc)('A', 'B', '2', '4'); /* 32  RGBA-8-8-8-8  */
exports.V4L2_PIX_FMT_RGBX32 = (0, libv4l2_1.v4l2_fourcc)('X', 'B', '2', '4'); /* 32  RGBX-8-8-8-8  */
exports.V4L2_PIX_FMT_ARGB32 = (0, libv4l2_1.v4l2_fourcc)('B', 'A', '2', '4'); /* 32  ARGB-8-8-8-8  */
exports.V4L2_PIX_FMT_XRGB32 = (0, libv4l2_1.v4l2_fourcc)('B', 'X', '2', '4'); /* 32  XRGB-8-8-8-8  */
/* Grey formats */
exports.V4L2_PIX_FMT_GREY = (0, libv4l2_1.v4l2_fourcc)('G', 'R', 'E', 'Y'); /*  8  Greyscale     */
exports.V4L2_PIX_FMT_Y4 = (0, libv4l2_1.v4l2_fourcc)('Y', '0', '4', ' '); /*  4  Greyscale     */
exports.V4L2_PIX_FMT_Y6 = (0, libv4l2_1.v4l2_fourcc)('Y', '0', '6', ' '); /*  6  Greyscale     */
exports.V4L2_PIX_FMT_Y10 = (0, libv4l2_1.v4l2_fourcc)('Y', '1', '0', ' '); /* 10  Greyscale     */
exports.V4L2_PIX_FMT_Y12 = (0, libv4l2_1.v4l2_fourcc)('Y', '1', '2', ' '); /* 12  Greyscale     */
exports.V4L2_PIX_FMT_Y14 = (0, libv4l2_1.v4l2_fourcc)('Y', '1', '4', ' '); /* 14  Greyscale     */
exports.V4L2_PIX_FMT_Y16 = (0, libv4l2_1.v4l2_fourcc)('Y', '1', '6', ' '); /* 16  Greyscale     */
exports.V4L2_PIX_FMT_Y16_BE = v4l2_fourcc_be('Y', '1', '6', ' '); /* 16  Greyscale BE  */
/* Grey bit-packed formats */
exports.V4L2_PIX_FMT_Y10BPACK = (0, libv4l2_1.v4l2_fourcc)('Y', '1', '0', 'B'); /* 10  Greyscale bit-packed */
exports.V4L2_PIX_FMT_Y10P = (0, libv4l2_1.v4l2_fourcc)('Y', '1', '0', 'P'); /* 10  Greyscale, MIPI RAW10 packed */
/* Palette formats */
exports.V4L2_PIX_FMT_PAL8 = (0, libv4l2_1.v4l2_fourcc)('P', 'A', 'L', '8'); /*  8  8-bit palette */
/* Chrominance formats */
exports.V4L2_PIX_FMT_UV8 = (0, libv4l2_1.v4l2_fourcc)('U', 'V', '8', ' '); /*  8  UV 4:4 */
/* Luminance+Chrominance formats */
exports.V4L2_PIX_FMT_YUYV = (0, libv4l2_1.v4l2_fourcc)('Y', 'U', 'Y', 'V'); /* 16  YUV 4:2:2     */
exports.V4L2_PIX_FMT_YYUV = (0, libv4l2_1.v4l2_fourcc)('Y', 'Y', 'U', 'V'); /* 16  YUV 4:2:2     */
exports.V4L2_PIX_FMT_YVYU = (0, libv4l2_1.v4l2_fourcc)('Y', 'V', 'Y', 'U'); /* 16 YVU 4:2:2 */
exports.V4L2_PIX_FMT_UYVY = (0, libv4l2_1.v4l2_fourcc)('U', 'Y', 'V', 'Y'); /* 16  YUV 4:2:2     */
exports.V4L2_PIX_FMT_VYUY = (0, libv4l2_1.v4l2_fourcc)('V', 'Y', 'U', 'Y'); /* 16  YUV 4:2:2     */
exports.V4L2_PIX_FMT_Y41P = (0, libv4l2_1.v4l2_fourcc)('Y', '4', '1', 'P'); /* 12  YUV 4:1:1     */
exports.V4L2_PIX_FMT_YUV444 = (0, libv4l2_1.v4l2_fourcc)('Y', '4', '4', '4'); /* 16  xxxxyyyy uuuuvvvv */
exports.V4L2_PIX_FMT_YUV555 = (0, libv4l2_1.v4l2_fourcc)('Y', 'U', 'V', 'O'); /* 16  YUV-5-5-5     */
exports.V4L2_PIX_FMT_YUV565 = (0, libv4l2_1.v4l2_fourcc)('Y', 'U', 'V', 'P'); /* 16  YUV-5-6-5     */
exports.V4L2_PIX_FMT_YUV24 = (0, libv4l2_1.v4l2_fourcc)('Y', 'U', 'V', '3'); /* 24  YUV-8-8-8     */
exports.V4L2_PIX_FMT_YUV32 = (0, libv4l2_1.v4l2_fourcc)('Y', 'U', 'V', '4'); /* 32  YUV-8-8-8-8   */
exports.V4L2_PIX_FMT_AYUV32 = (0, libv4l2_1.v4l2_fourcc)('A', 'Y', 'U', 'V'); /* 32  AYUV-8-8-8-8  */
exports.V4L2_PIX_FMT_XYUV32 = (0, libv4l2_1.v4l2_fourcc)('X', 'Y', 'U', 'V'); /* 32  XYUV-8-8-8-8  */
exports.V4L2_PIX_FMT_VUYA32 = (0, libv4l2_1.v4l2_fourcc)('V', 'U', 'Y', 'A'); /* 32  VUYA-8-8-8-8  */
exports.V4L2_PIX_FMT_VUYX32 = (0, libv4l2_1.v4l2_fourcc)('V', 'U', 'Y', 'X'); /* 32  VUYX-8-8-8-8  */
exports.V4L2_PIX_FMT_M420 = (0, libv4l2_1.v4l2_fourcc)('M', '4', '2', '0'); /* 12  YUV 4:2:0 2 lines y, 1 line uv interleaved */
/* two planes -- one Y, one Cr + Cb interleaved  */
exports.V4L2_PIX_FMT_NV12 = (0, libv4l2_1.v4l2_fourcc)('N', 'V', '1', '2'); /* 12  Y/CbCr 4:2:0  */
exports.V4L2_PIX_FMT_NV21 = (0, libv4l2_1.v4l2_fourcc)('N', 'V', '2', '1'); /* 12  Y/CrCb 4:2:0  */
exports.V4L2_PIX_FMT_NV16 = (0, libv4l2_1.v4l2_fourcc)('N', 'V', '1', '6'); /* 16  Y/CbCr 4:2:2  */
exports.V4L2_PIX_FMT_NV61 = (0, libv4l2_1.v4l2_fourcc)('N', 'V', '6', '1'); /* 16  Y/CrCb 4:2:2  */
exports.V4L2_PIX_FMT_NV24 = (0, libv4l2_1.v4l2_fourcc)('N', 'V', '2', '4'); /* 24  Y/CbCr 4:4:4  */
exports.V4L2_PIX_FMT_NV42 = (0, libv4l2_1.v4l2_fourcc)('N', 'V', '4', '2'); /* 24  Y/CrCb 4:4:4  */
exports.V4L2_PIX_FMT_HM12 = (0, libv4l2_1.v4l2_fourcc)('H', 'M', '1', '2'); /*  8  YUV 4:2:0 16x16 macroblocks */
/* two non contiguous planes - one Y, one Cr + Cb interleaved  */
exports.V4L2_PIX_FMT_NV12M = (0, libv4l2_1.v4l2_fourcc)('N', 'M', '1', '2'); /* 12  Y/CbCr 4:2:0  */
exports.V4L2_PIX_FMT_NV21M = (0, libv4l2_1.v4l2_fourcc)('N', 'M', '2', '1'); /* 21  Y/CrCb 4:2:0  */
exports.V4L2_PIX_FMT_NV16M = (0, libv4l2_1.v4l2_fourcc)('N', 'M', '1', '6'); /* 16  Y/CbCr 4:2:2  */
exports.V4L2_PIX_FMT_NV61M = (0, libv4l2_1.v4l2_fourcc)('N', 'M', '6', '1'); /* 16  Y/CrCb 4:2:2  */
exports.V4L2_PIX_FMT_NV12MT = (0, libv4l2_1.v4l2_fourcc)('T', 'M', '1', '2'); /* 12  Y/CbCr 4:2:0 64x32 macroblocks */
exports.V4L2_PIX_FMT_NV12MT_16X16 = (0, libv4l2_1.v4l2_fourcc)('V', 'M', '1', '2'); /* 12  Y/CbCr 4:2:0 16x16 macroblocks */
/* three planes - Y Cb, Cr */
exports.V4L2_PIX_FMT_YUV410 = (0, libv4l2_1.v4l2_fourcc)('Y', 'U', 'V', '9'); /*  9  YUV 4:1:0     */
exports.V4L2_PIX_FMT_YVU410 = (0, libv4l2_1.v4l2_fourcc)('Y', 'V', 'U', '9'); /*  9  YVU 4:1:0     */
exports.V4L2_PIX_FMT_YUV411P = (0, libv4l2_1.v4l2_fourcc)('4', '1', '1', 'P'); /* 12  YVU411 planar */
exports.V4L2_PIX_FMT_YUV420 = (0, libv4l2_1.v4l2_fourcc)('Y', 'U', '1', '2'); /* 12  YUV 4:2:0     */
exports.V4L2_PIX_FMT_YVU420 = (0, libv4l2_1.v4l2_fourcc)('Y', 'V', '1', '2'); /* 12  YVU 4:2:0     */
exports.V4L2_PIX_FMT_YUV422P = (0, libv4l2_1.v4l2_fourcc)('4', '2', '2', 'P'); /* 16  YVU422 planar */
/* three non contiguous planes - Y, Cb, Cr */
exports.V4L2_PIX_FMT_YUV420M = (0, libv4l2_1.v4l2_fourcc)('Y', 'M', '1', '2'); /* 12  YUV420 planar */
exports.V4L2_PIX_FMT_YVU420M = (0, libv4l2_1.v4l2_fourcc)('Y', 'M', '2', '1'); /* 12  YVU420 planar */
exports.V4L2_PIX_FMT_YUV422M = (0, libv4l2_1.v4l2_fourcc)('Y', 'M', '1', '6'); /* 16  YUV422 planar */
exports.V4L2_PIX_FMT_YVU422M = (0, libv4l2_1.v4l2_fourcc)('Y', 'M', '6', '1'); /* 16  YVU422 planar */
exports.V4L2_PIX_FMT_YUV444M = (0, libv4l2_1.v4l2_fourcc)('Y', 'M', '2', '4'); /* 24  YUV444 planar */
exports.V4L2_PIX_FMT_YVU444M = (0, libv4l2_1.v4l2_fourcc)('Y', 'M', '4', '2'); /* 24  YVU444 planar */
/* Bayer formats - see http://www.siliconimaging.com/RGB%20Bayer.htm */
exports.V4L2_PIX_FMT_SBGGR8 = (0, libv4l2_1.v4l2_fourcc)('B', 'A', '8', '1'); /*  8  BGBG.. GRGR.. */
exports.V4L2_PIX_FMT_SGBRG8 = (0, libv4l2_1.v4l2_fourcc)('G', 'B', 'R', 'G'); /*  8  GBGB.. RGRG.. */
exports.V4L2_PIX_FMT_SGRBG8 = (0, libv4l2_1.v4l2_fourcc)('G', 'R', 'B', 'G'); /*  8  GRGR.. BGBG.. */
exports.V4L2_PIX_FMT_SRGGB8 = (0, libv4l2_1.v4l2_fourcc)('R', 'G', 'G', 'B'); /*  8  RGRG.. GBGB.. */
exports.V4L2_PIX_FMT_SBGGR10 = (0, libv4l2_1.v4l2_fourcc)('B', 'G', '1', '0'); /* 10  BGBG.. GRGR.. */
exports.V4L2_PIX_FMT_SGBRG10 = (0, libv4l2_1.v4l2_fourcc)('G', 'B', '1', '0'); /* 10  GBGB.. RGRG.. */
exports.V4L2_PIX_FMT_SGRBG10 = (0, libv4l2_1.v4l2_fourcc)('B', 'A', '1', '0'); /* 10  GRGR.. BGBG.. */
exports.V4L2_PIX_FMT_SRGGB10 = (0, libv4l2_1.v4l2_fourcc)('R', 'G', '1', '0'); /* 10  RGRG.. GBGB.. */
/* 10bit raw bayer packed, 5 bytes for every 4 pixels */
exports.V4L2_PIX_FMT_SBGGR10P = (0, libv4l2_1.v4l2_fourcc)('p', 'B', 'A', 'A');
exports.V4L2_PIX_FMT_SGBRG10P = (0, libv4l2_1.v4l2_fourcc)('p', 'G', 'A', 'A');
exports.V4L2_PIX_FMT_SGRBG10P = (0, libv4l2_1.v4l2_fourcc)('p', 'g', 'A', 'A');
exports.V4L2_PIX_FMT_SRGGB10P = (0, libv4l2_1.v4l2_fourcc)('p', 'R', 'A', 'A');
/* 10bit raw bayer a-law compressed to 8 bits */
exports.V4L2_PIX_FMT_SBGGR10ALAW8 = (0, libv4l2_1.v4l2_fourcc)('a', 'B', 'A', '8');
exports.V4L2_PIX_FMT_SGBRG10ALAW8 = (0, libv4l2_1.v4l2_fourcc)('a', 'G', 'A', '8');
exports.V4L2_PIX_FMT_SGRBG10ALAW8 = (0, libv4l2_1.v4l2_fourcc)('a', 'g', 'A', '8');
exports.V4L2_PIX_FMT_SRGGB10ALAW8 = (0, libv4l2_1.v4l2_fourcc)('a', 'R', 'A', '8');
/* 10bit raw bayer DPCM compressed to 8 bits */
exports.V4L2_PIX_FMT_SBGGR10DPCM8 = (0, libv4l2_1.v4l2_fourcc)('b', 'B', 'A', '8');
exports.V4L2_PIX_FMT_SGBRG10DPCM8 = (0, libv4l2_1.v4l2_fourcc)('b', 'G', 'A', '8');
exports.V4L2_PIX_FMT_SGRBG10DPCM8 = (0, libv4l2_1.v4l2_fourcc)('B', 'D', '1', '0');
exports.V4L2_PIX_FMT_SRGGB10DPCM8 = (0, libv4l2_1.v4l2_fourcc)('b', 'R', 'A', '8');
exports.V4L2_PIX_FMT_SBGGR12 = (0, libv4l2_1.v4l2_fourcc)('B', 'G', '1', '2'); /* 12  BGBG.. GRGR.. */
exports.V4L2_PIX_FMT_SGBRG12 = (0, libv4l2_1.v4l2_fourcc)('G', 'B', '1', '2'); /* 12  GBGB.. RGRG.. */
exports.V4L2_PIX_FMT_SGRBG12 = (0, libv4l2_1.v4l2_fourcc)('B', 'A', '1', '2'); /* 12  GRGR.. BGBG.. */
exports.V4L2_PIX_FMT_SRGGB12 = (0, libv4l2_1.v4l2_fourcc)('R', 'G', '1', '2'); /* 12  RGRG.. GBGB.. */
/* 12bit raw bayer packed, 6 bytes for every 4 pixels */
exports.V4L2_PIX_FMT_SBGGR12P = (0, libv4l2_1.v4l2_fourcc)('p', 'B', 'C', 'C');
exports.V4L2_PIX_FMT_SGBRG12P = (0, libv4l2_1.v4l2_fourcc)('p', 'G', 'C', 'C');
exports.V4L2_PIX_FMT_SGRBG12P = (0, libv4l2_1.v4l2_fourcc)('p', 'g', 'C', 'C');
exports.V4L2_PIX_FMT_SRGGB12P = (0, libv4l2_1.v4l2_fourcc)('p', 'R', 'C', 'C');
exports.V4L2_PIX_FMT_SBGGR14 = (0, libv4l2_1.v4l2_fourcc)('B', 'G', '1', '4'); /* 14  BGBG.. GRGR.. */
exports.V4L2_PIX_FMT_SGBRG14 = (0, libv4l2_1.v4l2_fourcc)('G', 'B', '1', '4'); /* 14  GBGB.. RGRG.. */
exports.V4L2_PIX_FMT_SGRBG14 = (0, libv4l2_1.v4l2_fourcc)('G', 'R', '1', '4'); /* 14  GRGR.. BGBG.. */
exports.V4L2_PIX_FMT_SRGGB14 = (0, libv4l2_1.v4l2_fourcc)('R', 'G', '1', '4'); /* 14  RGRG.. GBGB.. */
/* 14bit raw bayer packed, 7 bytes for every 4 pixels */
exports.V4L2_PIX_FMT_SBGGR14P = (0, libv4l2_1.v4l2_fourcc)('p', 'B', 'E', 'E');
exports.V4L2_PIX_FMT_SGBRG14P = (0, libv4l2_1.v4l2_fourcc)('p', 'G', 'E', 'E');
exports.V4L2_PIX_FMT_SGRBG14P = (0, libv4l2_1.v4l2_fourcc)('p', 'g', 'E', 'E');
exports.V4L2_PIX_FMT_SRGGB14P = (0, libv4l2_1.v4l2_fourcc)('p', 'R', 'E', 'E');
exports.V4L2_PIX_FMT_SBGGR16 = (0, libv4l2_1.v4l2_fourcc)('B', 'Y', 'R', '2'); /* 16  BGBG.. GRGR.. */
exports.V4L2_PIX_FMT_SGBRG16 = (0, libv4l2_1.v4l2_fourcc)('G', 'B', '1', '6'); /* 16  GBGB.. RGRG.. */
exports.V4L2_PIX_FMT_SGRBG16 = (0, libv4l2_1.v4l2_fourcc)('G', 'R', '1', '6'); /* 16  GRGR.. BGBG.. */
exports.V4L2_PIX_FMT_SRGGB16 = (0, libv4l2_1.v4l2_fourcc)('R', 'G', '1', '6'); /* 16  RGRG.. GBGB.. */
/* HSV formats */
exports.V4L2_PIX_FMT_HSV24 = (0, libv4l2_1.v4l2_fourcc)('H', 'S', 'V', '3');
exports.V4L2_PIX_FMT_HSV32 = (0, libv4l2_1.v4l2_fourcc)('H', 'S', 'V', '4');
/* compressed formats */
exports.V4L2_PIX_FMT_MJPEG = (0, libv4l2_1.v4l2_fourcc)('M', 'J', 'P', 'G'); /* Motion-JPEG   */
exports.V4L2_PIX_FMT_JPEG = (0, libv4l2_1.v4l2_fourcc)('J', 'P', 'E', 'G'); /* JFIF JPEG     */
exports.V4L2_PIX_FMT_DV = (0, libv4l2_1.v4l2_fourcc)('d', 'v', 's', 'd'); /* 1394          */
exports.V4L2_PIX_FMT_MPEG = (0, libv4l2_1.v4l2_fourcc)('M', 'P', 'E', 'G'); /* MPEG-1/2/4 Multiplexed */
exports.V4L2_PIX_FMT_H264 = (0, libv4l2_1.v4l2_fourcc)('H', '2', '6', '4'); /* H264 with start codes */
exports.V4L2_PIX_FMT_H264_NO_SC = (0, libv4l2_1.v4l2_fourcc)('A', 'V', 'C', '1'); /* H264 without start codes */
exports.V4L2_PIX_FMT_H264_MVC = (0, libv4l2_1.v4l2_fourcc)('M', '2', '6', '4'); /* H264 MVC */
exports.V4L2_PIX_FMT_H263 = (0, libv4l2_1.v4l2_fourcc)('H', '2', '6', '3'); /* H263          */
exports.V4L2_PIX_FMT_MPEG1 = (0, libv4l2_1.v4l2_fourcc)('M', 'P', 'G', '1'); /* MPEG-1 ES     */
exports.V4L2_PIX_FMT_MPEG2 = (0, libv4l2_1.v4l2_fourcc)('M', 'P', 'G', '2'); /* MPEG-2 ES     */
exports.V4L2_PIX_FMT_MPEG2_SLICE = (0, libv4l2_1.v4l2_fourcc)('M', 'G', '2', 'S'); /* MPEG-2 parsed slice data */
exports.V4L2_PIX_FMT_MPEG4 = (0, libv4l2_1.v4l2_fourcc)('M', 'P', 'G', '4'); /* MPEG-4 part 2 ES */
exports.V4L2_PIX_FMT_XVID = (0, libv4l2_1.v4l2_fourcc)('X', 'V', 'I', 'D'); /* Xvid           */
exports.V4L2_PIX_FMT_VC1_ANNEX_G = (0, libv4l2_1.v4l2_fourcc)('V', 'C', '1', 'G'); /* SMPTE 421M Annex G compliant stream */
exports.V4L2_PIX_FMT_VC1_ANNEX_L = (0, libv4l2_1.v4l2_fourcc)('V', 'C', '1', 'L'); /* SMPTE 421M Annex L compliant stream */
exports.V4L2_PIX_FMT_VP8 = (0, libv4l2_1.v4l2_fourcc)('V', 'P', '8', '0'); /* VP8 */
exports.V4L2_PIX_FMT_VP8_FRAME = (0, libv4l2_1.v4l2_fourcc)('V', 'P', '8', 'F'); /* VP8 parsed frame */
exports.V4L2_PIX_FMT_VP9 = (0, libv4l2_1.v4l2_fourcc)('V', 'P', '9', '0'); /* VP9 */
exports.V4L2_PIX_FMT_HEVC = (0, libv4l2_1.v4l2_fourcc)('H', 'E', 'V', 'C'); /* HEVC aka H.265 */
exports.V4L2_PIX_FMT_FWHT = (0, libv4l2_1.v4l2_fourcc)('F', 'W', 'H', 'T'); /* Fast Walsh Hadamard Transform (vicodec) */
exports.V4L2_PIX_FMT_FWHT_STATELESS = (0, libv4l2_1.v4l2_fourcc)('S', 'F', 'W', 'H'); /* Stateless FWHT (vicodec) */
exports.V4L2_PIX_FMT_H264_SLICE = (0, libv4l2_1.v4l2_fourcc)('S', '2', '6', '4'); /* H264 parsed slices */
/*  Vendor-specific formats   */
exports.V4L2_PIX_FMT_CPIA1 = (0, libv4l2_1.v4l2_fourcc)('C', 'P', 'I', 'A'); /* cpia1 YUV */
exports.V4L2_PIX_FMT_WNVA = (0, libv4l2_1.v4l2_fourcc)('W', 'N', 'V', 'A'); /* Winnov hw compress */
exports.V4L2_PIX_FMT_SN9C10X = (0, libv4l2_1.v4l2_fourcc)('S', '9', '1', '0'); /* SN9C10x compression */
exports.V4L2_PIX_FMT_SN9C20X_I420 = (0, libv4l2_1.v4l2_fourcc)('S', '9', '2', '0'); /* SN9C20x YUV 4:2:0 */
exports.V4L2_PIX_FMT_PWC1 = (0, libv4l2_1.v4l2_fourcc)('P', 'W', 'C', '1'); /* pwc older webcam */
exports.V4L2_PIX_FMT_PWC2 = (0, libv4l2_1.v4l2_fourcc)('P', 'W', 'C', '2'); /* pwc newer webcam */
exports.V4L2_PIX_FMT_ET61X251 = (0, libv4l2_1.v4l2_fourcc)('E', '6', '2', '5'); /* ET61X251 compression */
exports.V4L2_PIX_FMT_SPCA501 = (0, libv4l2_1.v4l2_fourcc)('S', '5', '0', '1'); /* YUYV per line */
exports.V4L2_PIX_FMT_SPCA505 = (0, libv4l2_1.v4l2_fourcc)('S', '5', '0', '5'); /* YYUV per line */
exports.V4L2_PIX_FMT_SPCA508 = (0, libv4l2_1.v4l2_fourcc)('S', '5', '0', '8'); /* YUVY per line */
exports.V4L2_PIX_FMT_SPCA561 = (0, libv4l2_1.v4l2_fourcc)('S', '5', '6', '1'); /* compressed GBRG bayer */
exports.V4L2_PIX_FMT_PAC207 = (0, libv4l2_1.v4l2_fourcc)('P', '2', '0', '7'); /* compressed BGGR bayer */
exports.V4L2_PIX_FMT_MR97310A = (0, libv4l2_1.v4l2_fourcc)('M', '3', '1', '0'); /* compressed BGGR bayer */
exports.V4L2_PIX_FMT_JL2005BCD = (0, libv4l2_1.v4l2_fourcc)('J', 'L', '2', '0'); /* compressed RGGB bayer */
exports.V4L2_PIX_FMT_SN9C2028 = (0, libv4l2_1.v4l2_fourcc)('S', 'O', 'N', 'X'); /* compressed GBRG bayer */
exports.V4L2_PIX_FMT_SQ905C = (0, libv4l2_1.v4l2_fourcc)('9', '0', '5', 'C'); /* compressed RGGB bayer */
exports.V4L2_PIX_FMT_PJPG = (0, libv4l2_1.v4l2_fourcc)('P', 'J', 'P', 'G'); /* Pixart 73xx JPEG */
exports.V4L2_PIX_FMT_OV511 = (0, libv4l2_1.v4l2_fourcc)('O', '5', '1', '1'); /* ov511 JPEG */
exports.V4L2_PIX_FMT_OV518 = (0, libv4l2_1.v4l2_fourcc)('O', '5', '1', '8'); /* ov518 JPEG */
exports.V4L2_PIX_FMT_STV0680 = (0, libv4l2_1.v4l2_fourcc)('S', '6', '8', '0'); /* stv0680 bayer */
exports.V4L2_PIX_FMT_TM6000 = (0, libv4l2_1.v4l2_fourcc)('T', 'M', '6', '0'); /* tm5600/tm60x0 */
exports.V4L2_PIX_FMT_CIT_YYVYUY = (0, libv4l2_1.v4l2_fourcc)('C', 'I', 'T', 'V'); /* one line of Y then 1 line of VYUY */
exports.V4L2_PIX_FMT_KONICA420 = (0, libv4l2_1.v4l2_fourcc)('K', 'O', 'N', 'I'); /* YUV420 planar in blocks of 256 pixels */
exports.V4L2_PIX_FMT_JPGL = (0, libv4l2_1.v4l2_fourcc)('J', 'P', 'G', 'L'); /* JPEG-Lite */
exports.V4L2_PIX_FMT_SE401 = (0, libv4l2_1.v4l2_fourcc)('S', '4', '0', '1'); /* se401 janggu compressed rgb */
exports.V4L2_PIX_FMT_S5C_UYVY_JPG = (0, libv4l2_1.v4l2_fourcc)('S', '5', 'C', 'I'); /* S5C73M3 interleaved UYVY/JPEG */
exports.V4L2_PIX_FMT_Y8I = (0, libv4l2_1.v4l2_fourcc)('Y', '8', 'I', ' '); /* Greyscale 8-bit L/R interleaved */
exports.V4L2_PIX_FMT_Y12I = (0, libv4l2_1.v4l2_fourcc)('Y', '1', '2', 'I'); /* Greyscale 12-bit L/R interleaved */
exports.V4L2_PIX_FMT_Z16 = (0, libv4l2_1.v4l2_fourcc)('Z', '1', '6', ' '); /* Depth data 16-bit */
exports.V4L2_PIX_FMT_MT21C = (0, libv4l2_1.v4l2_fourcc)('M', 'T', '2', '1'); /* Mediatek compressed block mode  */
exports.V4L2_PIX_FMT_INZI = (0, libv4l2_1.v4l2_fourcc)('I', 'N', 'Z', 'I'); /* Intel Planar Greyscale 10-bit and Depth 16-bit */
exports.V4L2_PIX_FMT_SUNXI_TILED_NV12 = (0, libv4l2_1.v4l2_fourcc)('S', 'T', '1', '2'); /* Sunxi Tiled NV12 Format */
exports.V4L2_PIX_FMT_CNF4 = (0, libv4l2_1.v4l2_fourcc)('C', 'N', 'F', '4'); /* Intel 4-bit packed depth confidence information */
exports.V4L2_PIX_FMT_HI240 = (0, libv4l2_1.v4l2_fourcc)('H', 'I', '2', '4'); /* BTTV 8-bit dithered RGB */
/* 10bit raw bayer packed, 32 bytes for every 25 pixels, last LSB 6 bits unused */
exports.V4L2_PIX_FMT_IPU3_SBGGR10 = (0, libv4l2_1.v4l2_fourcc)('i', 'p', '3', 'b'); /* IPU3 packed 10-bit BGGR bayer */
exports.V4L2_PIX_FMT_IPU3_SGBRG10 = (0, libv4l2_1.v4l2_fourcc)('i', 'p', '3', 'g'); /* IPU3 packed 10-bit GBRG bayer */
exports.V4L2_PIX_FMT_IPU3_SGRBG10 = (0, libv4l2_1.v4l2_fourcc)('i', 'p', '3', 'G'); /* IPU3 packed 10-bit GRBG bayer */
exports.V4L2_PIX_FMT_IPU3_SRGGB10 = (0, libv4l2_1.v4l2_fourcc)('i', 'p', '3', 'r'); /* IPU3 packed 10-bit RGGB bayer */
/* SDR formats - used only for Software Defined Radio devices */
exports.V4L2_SDR_FMT_CU8 = (0, libv4l2_1.v4l2_fourcc)('C', 'U', '0', '8'); /* IQ u8 */
exports.V4L2_SDR_FMT_CU16LE = (0, libv4l2_1.v4l2_fourcc)('C', 'U', '1', '6'); /* IQ u16le */
exports.V4L2_SDR_FMT_CS8 = (0, libv4l2_1.v4l2_fourcc)('C', 'S', '0', '8'); /* complex s8 */
exports.V4L2_SDR_FMT_CS14LE = (0, libv4l2_1.v4l2_fourcc)('C', 'S', '1', '4'); /* complex s14le */
exports.V4L2_SDR_FMT_RU12LE = (0, libv4l2_1.v4l2_fourcc)('R', 'U', '1', '2'); /* real u12le */
exports.V4L2_SDR_FMT_PCU16BE = (0, libv4l2_1.v4l2_fourcc)('P', 'C', '1', '6'); /* planar complex u16be */
exports.V4L2_SDR_FMT_PCU18BE = (0, libv4l2_1.v4l2_fourcc)('P', 'C', '1', '8'); /* planar complex u18be */
exports.V4L2_SDR_FMT_PCU20BE = (0, libv4l2_1.v4l2_fourcc)('P', 'C', '2', '0'); /* planar complex u20be */
/* Touch formats - used for Touch devices */
exports.V4L2_TCH_FMT_DELTA_TD16 = (0, libv4l2_1.v4l2_fourcc)('T', 'D', '1', '6'); /* 16-bit signed deltas */
exports.V4L2_TCH_FMT_DELTA_TD08 = (0, libv4l2_1.v4l2_fourcc)('T', 'D', '0', '8'); /* 8-bit signed deltas */
exports.V4L2_TCH_FMT_TU16 = (0, libv4l2_1.v4l2_fourcc)('T', 'U', '1', '6'); /* 16-bit unsigned touch data */
exports.V4L2_TCH_FMT_TU08 = (0, libv4l2_1.v4l2_fourcc)('T', 'U', '0', '8'); /* 8-bit unsigned touch data */
/* Meta-data formats */
exports.V4L2_META_FMT_VSP1_HGO = (0, libv4l2_1.v4l2_fourcc)('V', 'S', 'P', 'H'); /* R-Car VSP1 1-D Histogram */
exports.V4L2_META_FMT_VSP1_HGT = (0, libv4l2_1.v4l2_fourcc)('V', 'S', 'P', 'T'); /* R-Car VSP1 2-D Histogram */
exports.V4L2_META_FMT_UVC = (0, libv4l2_1.v4l2_fourcc)('U', 'V', 'C', 'H'); /* UVC Payload Header metadata */
exports.V4L2_META_FMT_D4XX = (0, libv4l2_1.v4l2_fourcc)('D', '4', 'X', 'X'); /* D4XX Payload Header metadata */
exports.V4L2_META_FMT_VIVID = (0, libv4l2_1.v4l2_fourcc)('V', 'I', 'V', 'D'); /* Vivid Metadata */
/* Vendor specific - used for RK_ISP1 camera sub-system */
exports.V4L2_META_FMT_RK_ISP1_PARAMS = (0, libv4l2_1.v4l2_fourcc)('R', 'K', '1', 'P'); /* Rockchip ISP1 3A Parameters */
exports.V4L2_META_FMT_RK_ISP1_STAT_3A = (0, libv4l2_1.v4l2_fourcc)('R', 'K', '1', 'S'); /* Rockchip ISP1 3A Statistics */
/* priv field value to indicates that subsequent fields are valid. */
exports.V4L2_PIX_FMT_PRIV_MAGIC = 0xfeedcafe;
/* Flags */
exports.V4L2_PIX_FMT_FLAG_PREMUL_ALPHA = 0x00000001;
exports.V4L2_PIX_FMT_FLAG_SET_CSC = 0x00000002;
/*
 *	F O R M A T   E N U M E R A T I O N
 */
exports.v4l2_fmtdesc = StructType({
    index: ref_napi_1.default.types.uint32,
    type: ref_napi_1.default.types.uint32,
    flags: ref_napi_1.default.types.uint32,
    description: new ArrayType(ref_napi_1.default.types.uint8, 32),
    pixelformat: ref_napi_1.default.types.uint32,
    mbus_code: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 3),
});
exports.V4L2_FMT_FLAG_COMPRESSED = 0x0001;
exports.V4L2_FMT_FLAG_EMULATED = 0x0002;
exports.V4L2_FMT_FLAG_CONTINUOUS_BYTESTREAM = 0x0004;
exports.V4L2_FMT_FLAG_DYN_RESOLUTION = 0x0008;
exports.V4L2_FMT_FLAG_ENC_CAP_FRAME_INTERVAL = 0x0010;
exports.V4L2_FMT_FLAG_CSC_COLORSPACE = 0x0020;
exports.V4L2_FMT_FLAG_CSC_XFER_FUNC = 0x0040;
exports.V4L2_FMT_FLAG_CSC_YCBCR_ENC = 0x0080;
exports.V4L2_FMT_FLAG_CSC_HSV_ENC = exports.V4L2_FMT_FLAG_CSC_YCBCR_ENC;
exports.V4L2_FMT_FLAG_CSC_QUANTIZATION = 0x0100;
/* Frame Size and frame rate enumeration */
/*
 *	F R A M E   S I Z E   E N U M E R A T I O N
 */
var v4l2_frmsizetypes;
(function (v4l2_frmsizetypes) {
    v4l2_frmsizetypes[v4l2_frmsizetypes["V4L2_FRMSIZE_TYPE_DISCRETE"] = 1] = "V4L2_FRMSIZE_TYPE_DISCRETE";
    v4l2_frmsizetypes[v4l2_frmsizetypes["V4L2_FRMSIZE_TYPE_CONTINUOUS"] = 2] = "V4L2_FRMSIZE_TYPE_CONTINUOUS";
    v4l2_frmsizetypes[v4l2_frmsizetypes["V4L2_FRMSIZE_TYPE_STEPWISE"] = 3] = "V4L2_FRMSIZE_TYPE_STEPWISE";
})(v4l2_frmsizetypes || (exports.v4l2_frmsizetypes = v4l2_frmsizetypes = {}));
;
exports.v4l2_frmsize_discrete = StructType({
    width: ref_napi_1.default.types.uint32,
    height: ref_napi_1.default.types.uint32,
});
exports.v4l2_frmsize_stepwise = StructType({
    min_width: ref_napi_1.default.types.uint32,
    max_width: ref_napi_1.default.types.uint32,
    step_width: ref_napi_1.default.types.uint32,
    min_height: ref_napi_1.default.types.uint32,
    max_height: ref_napi_1.default.types.uint32,
    step_height: ref_napi_1.default.types.uint32,
});
exports.v4l2_frmsizeenum = StructType({
    index: ref_napi_1.default.types.uint32,
    pixel_format: ref_napi_1.default.types.uint32,
    type: ref_napi_1.default.types.uint32,
    union: new UnionType({
        discrete: exports.v4l2_frmsize_discrete,
        stepwise: exports.v4l2_frmsize_stepwise,
    }),
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 2),
});
/*
 *	F R A M E   R A T E   E N U M E R A T I O N
 */
var v4l2_frmivaltypes;
(function (v4l2_frmivaltypes) {
    v4l2_frmivaltypes[v4l2_frmivaltypes["V4L2_FRMIVAL_TYPE_DISCRETE"] = 1] = "V4L2_FRMIVAL_TYPE_DISCRETE";
    v4l2_frmivaltypes[v4l2_frmivaltypes["V4L2_FRMIVAL_TYPE_CONTINUOUS"] = 2] = "V4L2_FRMIVAL_TYPE_CONTINUOUS";
    v4l2_frmivaltypes[v4l2_frmivaltypes["V4L2_FRMIVAL_TYPE_STEPWISE"] = 3] = "V4L2_FRMIVAL_TYPE_STEPWISE";
})(v4l2_frmivaltypes || (exports.v4l2_frmivaltypes = v4l2_frmivaltypes = {}));
;
exports.v4l2_frmival_stepwise = StructType({
    min: exports.v4l2_fract,
    max: exports.v4l2_fract,
    step: exports.v4l2_fract,
});
exports.v4l2_frmivalenum = StructType({
    index: ref_napi_1.default.types.uint32,
    pixel_format: ref_napi_1.default.types.uint32,
    width: ref_napi_1.default.types.uint32,
    height: ref_napi_1.default.types.uint32,
    type: ref_napi_1.default.types.uint32,
    union: new UnionType({
        discrete: exports.v4l2_fract,
        stepwise: exports.v4l2_frmival_stepwise,
    }),
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 2),
});
/*
 *	T I M E C O D E
 */
exports.v4l2_timecode = StructType({
    type: ref_napi_1.default.types.uint32,
    flags: ref_napi_1.default.types.uint32,
    frames: ref_napi_1.default.types.uint8,
    seconds: ref_napi_1.default.types.uint8,
    minutes: ref_napi_1.default.types.uint8,
    hours: ref_napi_1.default.types.uint8,
    userbits: new ArrayType(ref_napi_1.default.types.uint8, 4),
});
/*  Type  */
exports.V4L2_TC_TYPE_24FPS = 1;
exports.V4L2_TC_TYPE_25FPS = 2;
exports.V4L2_TC_TYPE_30FPS = 3;
exports.V4L2_TC_TYPE_50FPS = 4;
exports.V4L2_TC_TYPE_60FPS = 5;
/*  Flags  */
exports.V4L2_TC_FLAG_DROPFRAME = 0x0001; /* "drop-frame" mode */
exports.V4L2_TC_FLAG_COLORFRAME = 0x0002;
exports.V4L2_TC_USERBITS_field = 0x000C;
exports.V4L2_TC_USERBITS_USERDEFINED = 0x0000;
exports.V4L2_TC_USERBITS_8BITCHARS = 0x0008;
/* The above is based on SMPTE timecodes */
exports.v4l2_jpegcompression = StructType({
    quality: ref_napi_1.default.types.int32,
    APPn: ref_napi_1.default.types.int32,
    APP_len: ref_napi_1.default.types.int32,
    APP_data: new ArrayType(ref_napi_1.default.types.char, 60),
    COM_len: ref_napi_1.default.types.int32,
    COM_data: new ArrayType(ref_napi_1.default.types.char, 60),
    jpeg_markers: ref_napi_1.default.types.uint32,
});
exports.V4L2_JPEG_MARKER_DHT = (1 << 3); /* Define Huffman Tables */
exports.V4L2_JPEG_MARKER_DQT = (1 << 4); /* Define Quantization Tables */
exports.V4L2_JPEG_MARKER_DRI = (1 << 5); /* Define Restart Interval */
exports.V4L2_JPEG_MARKER_COM = (1 << 6); /* Comment segment */
exports.V4L2_JPEG_MARKER_APP = (1 << 7); /* App segment, driver will always use APP0 */
/*
 *	M E M O R Y - M A P P I N G   B U F F E R S
 */
exports.v4l2_requestbuffers = StructType({
    count: ref_napi_1.default.types.uint32,
    type: ref_napi_1.default.types.uint32,
    memory: ref_napi_1.default.types.uint32,
    capabilities: ref_napi_1.default.types.uint32,
    reserved: ref_napi_1.default.types.uint32,
});
/* capabilities for struct v4l2_requestbuffers and v4l2_create_buffers */
exports.V4L2_BUF_CAP_SUPPORTS_MMAP = (1 << 0);
exports.V4L2_BUF_CAP_SUPPORTS_USERPTR = (1 << 1);
exports.V4L2_BUF_CAP_SUPPORTS_DMABUF = (1 << 2);
exports.V4L2_BUF_CAP_SUPPORTS_REQUESTS = (1 << 3);
exports.V4L2_BUF_CAP_SUPPORTS_ORPHANED_BUFS = (1 << 4);
exports.V4L2_BUF_CAP_SUPPORTS_M2M_HOLD_CAPTURE_BUF = (1 << 5);
exports.V4L2_BUF_CAP_SUPPORTS_MMAP_CACHE_HINTS = (1 << 6);
exports.v4l2_plane = StructType({
    bytesused: ref_napi_1.default.types.uint32,
    length: ref_napi_1.default.types.uint32,
    m: new UnionType({
        mem_offset: ref_napi_1.default.types.uint32,
        userptr: ref_napi_1.default.types.ulong,
        fd: ref_napi_1.default.types.int32,
    }),
    data_offset: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 11),
});
exports.v4l2_buffer = StructType({
    index: ref_napi_1.default.types.uint32,
    type: ref_napi_1.default.types.uint32,
    bytesused: ref_napi_1.default.types.uint32,
    flags: ref_napi_1.default.types.uint32,
    field: ref_napi_1.default.types.uint32,
    timestamp: structs_1.timeval,
    timecode: exports.v4l2_timecode,
    sequence: ref_napi_1.default.types.uint32,
    memory: ref_napi_1.default.types.uint32,
    m: new UnionType({
        offset: ref_napi_1.default.types.uint32,
        userptr: ref_napi_1.default.types.ulong,
        planes: ref_napi_1.default.refType(exports.v4l2_plane),
        fd: ref_napi_1.default.types.int32,
    }),
    length: ref_napi_1.default.types.uint32,
    reserved2: ref_napi_1.default.types.uint32,
    r: new UnionType({
        request_fd: ref_napi_1.default.types.int32,
        reserved: ref_napi_1.default.types.uint32,
    }),
});
/*  Flags for 'flags' field */
/* Buffer is mapped (flag) */
exports.V4L2_BUF_FLAG_MAPPED = 0x00000001;
/* Buffer is queued for processing */
exports.V4L2_BUF_FLAG_QUEUED = 0x00000002;
/* Buffer is ready */
exports.V4L2_BUF_FLAG_DONE = 0x00000004;
/* Image is a keyframe (I-frame) */
exports.V4L2_BUF_FLAG_KEYFRAME = 0x00000008;
/* Image is a P-frame */
exports.V4L2_BUF_FLAG_PFRAME = 0x00000010;
/* Image is a B-frame */
exports.V4L2_BUF_FLAG_BFRAME = 0x00000020;
/* Buffer is ready, but the data contained within is corrupted. */
exports.V4L2_BUF_FLAG_ERROR = 0x00000040;
/* Buffer is added to an unqueued request */
exports.V4L2_BUF_FLAG_IN_REQUEST = 0x00000080;
/* timecode field is valid */
exports.V4L2_BUF_FLAG_TIMECODE = 0x00000100;
/* Don't return the capture buffer until OUTPUT timestamp changes */
exports.V4L2_BUF_FLAG_M2M_HOLD_CAPTURE_BUF = 0x00000200;
/* Buffer is prepared for queuing */
exports.V4L2_BUF_FLAG_PREPARED = 0x00000400;
/* Cache handling flags */
exports.V4L2_BUF_FLAG_NO_CACHE_INVALIDATE = 0x00000800;
exports.V4L2_BUF_FLAG_NO_CACHE_CLEAN = 0x00001000;
/* Timestamp type */
exports.V4L2_BUF_FLAG_TIMESTAMP_MASK = 0x0000e000;
exports.V4L2_BUF_FLAG_TIMESTAMP_UNKNOWN = 0x00000000;
exports.V4L2_BUF_FLAG_TIMESTAMP_MONOTONIC = 0x00002000;
exports.V4L2_BUF_FLAG_TIMESTAMP_COPY = 0x00004000;
/* Timestamp sources. */
exports.V4L2_BUF_FLAG_TSTAMP_SRC_MASK = 0x00070000;
exports.V4L2_BUF_FLAG_TSTAMP_SRC_EOF = 0x00000000;
exports.V4L2_BUF_FLAG_TSTAMP_SRC_SOE = 0x00010000;
/* mem2mem encoder/decoder */
exports.V4L2_BUF_FLAG_LAST = 0x00100000;
/* request_fd is valid */
exports.V4L2_BUF_FLAG_REQUEST_FD = 0x00800000;
exports.v4l2_exportbuffer = StructType({
    type: ref_napi_1.default.types.uint32,
    index: ref_napi_1.default.types.uint32,
    plane: ref_napi_1.default.types.uint32,
    flags: ref_napi_1.default.types.uint32,
    fd: ref_napi_1.default.types.int32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 11),
});
/*
 *	O V E R L A Y   P R E V I E W
 */
exports.v4l2_framebuffer = StructType({
    capability: ref_napi_1.default.types.uint32,
    flags: ref_napi_1.default.types.uint32,
    base: ref_napi_1.default.refType(ref_napi_1.default.types.void),
    fmt: StructType({
        width: ref_napi_1.default.types.uint32,
        height: ref_napi_1.default.types.uint32,
        pixelformat: ref_napi_1.default.types.uint32,
        field: ref_napi_1.default.types.uint32,
        bytesperline: ref_napi_1.default.types.uint32,
        sizeimage: ref_napi_1.default.types.uint32,
        colorspace: ref_napi_1.default.types.uint32,
        priv: ref_napi_1.default.types.uint32,
    }),
});
/*  Flags for the 'capability' field. Read only */
exports.V4L2_FBUF_CAP_EXTERNOVERLAY = 0x0001;
exports.V4L2_FBUF_CAP_CHROMAKEY = 0x0002;
exports.V4L2_FBUF_CAP_LIST_CLIPPING = 0x0004;
exports.V4L2_FBUF_CAP_BITMAP_CLIPPING = 0x0008;
exports.V4L2_FBUF_CAP_LOCAL_ALPHA = 0x0010;
exports.V4L2_FBUF_CAP_GLOBAL_ALPHA = 0x0020;
exports.V4L2_FBUF_CAP_LOCAL_INV_ALPHA = 0x0040;
exports.V4L2_FBUF_CAP_SRC_CHROMAKEY = 0x0080;
/*  Flags for the 'flags' field. */
exports.V4L2_FBUF_FLAG_PRIMARY = 0x0001;
exports.V4L2_FBUF_FLAG_OVERLAY = 0x0002;
exports.V4L2_FBUF_FLAG_CHROMAKEY = 0x0004;
exports.V4L2_FBUF_FLAG_LOCAL_ALPHA = 0x0008;
exports.V4L2_FBUF_FLAG_GLOBAL_ALPHA = 0x0010;
exports.V4L2_FBUF_FLAG_LOCAL_INV_ALPHA = 0x0020;
exports.V4L2_FBUF_FLAG_SRC_CHROMAKEY = 0x0040;
exports.v4l2_clip = StructType({
    c: exports.v4l2_rect,
});
exports.v4l2_clip.defineProperty('next', ref_napi_1.default.refType(exports.v4l2_clip));
exports.v4l2_window = StructType({
    w: exports.v4l2_rect,
    field: ref_napi_1.default.types.uint32,
    chromakey: ref_napi_1.default.types.uint32,
    clips: ref_napi_1.default.refType(exports.v4l2_clip),
    clipcount: ref_napi_1.default.types.uint32,
    bitmap: ref_napi_1.default.refType(ref_napi_1.default.types.void),
    global_alpha: ref_napi_1.default.types.uint8,
});
/*
 *	C A P T U R E   P A R A M E T E R S
 */
exports.v4l2_captureparm = StructType({
    capability: ref_napi_1.default.types.uint32,
    capturemode: ref_napi_1.default.types.uint32,
    timeperframe: exports.v4l2_fract,
    extendedmode: ref_napi_1.default.types.uint32,
    readbuffers: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 4),
});
/*  Flags for 'capability' and 'capturemode' fields */
exports.V4L2_MODE_HIGHQUALITY = 0x0001; /*  High quality imaging mode */
exports.V4L2_CAP_TIMEPERFRAME = 0x1000; /*  timeperframe field is supported */
exports.v4l2_outputparm = StructType({
    capability: ref_napi_1.default.types.uint32,
    outputmode: ref_napi_1.default.types.uint32,
    timeperframe: exports.v4l2_fract,
    extendedmode: ref_napi_1.default.types.uint32,
    writebuffers: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 4),
});
/*
 *	I N P U T   I M A G E   C R O P P I N G
 */
exports.v4l2_cropcap = StructType({
    type: ref_napi_1.default.types.uint32,
    bounds: exports.v4l2_rect,
    defrect: exports.v4l2_rect,
    pixelaspect: exports.v4l2_fract,
});
exports.v4l2_crop = StructType({
    type: ref_napi_1.default.types.uint32,
    c: exports.v4l2_rect,
});
exports.v4l2_selection = StructType({
    type: ref_napi_1.default.types.uint32,
    target: ref_napi_1.default.types.uint32,
    flags: ref_napi_1.default.types.uint32,
    r: exports.v4l2_rect,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 9),
});
/*
 *      A N A L O G   V I D E O   S T A N D A R D
 */
exports.v4l2_std_id = ref_napi_1.default.types.uint64;
/*
 * Attention: Keep the V4L2_STD_* bit definitions in sync with
 * include/dt-bindings/display/sdtv-standards.h SDTV_STD_* bit definitions.
 */
/* one bit for each */
exports.V4L2_STD_PAL_B = 0x00000001;
exports.V4L2_STD_PAL_B1 = 0x00000002;
exports.V4L2_STD_PAL_G = 0x00000004;
exports.V4L2_STD_PAL_H = 0x00000008;
exports.V4L2_STD_PAL_I = 0x00000010;
exports.V4L2_STD_PAL_D = 0x00000020;
exports.V4L2_STD_PAL_D1 = 0x00000040;
exports.V4L2_STD_PAL_K = 0x00000080;
exports.V4L2_STD_PAL_M = 0x00000100;
exports.V4L2_STD_PAL_N = 0x00000200;
exports.V4L2_STD_PAL_Nc = 0x00000400;
exports.V4L2_STD_PAL_60 = 0x00000800;
exports.V4L2_STD_NTSC_M = 0x00001000 /* BTSC */;
exports.V4L2_STD_NTSC_M_JP = 0x00002000 /* EIA-J */;
exports.V4L2_STD_NTSC_443 = 0x00004000;
exports.V4L2_STD_NTSC_M_KR = 0x00008000 /* FM A2 */;
exports.V4L2_STD_SECAM_B = 0x00010000;
exports.V4L2_STD_SECAM_D = 0x00020000;
exports.V4L2_STD_SECAM_G = 0x00040000;
exports.V4L2_STD_SECAM_H = 0x00080000;
exports.V4L2_STD_SECAM_K = 0x00100000;
exports.V4L2_STD_SECAM_K1 = 0x00200000;
exports.V4L2_STD_SECAM_L = 0x00400000;
exports.V4L2_STD_SECAM_LC = 0x00800000;
/* ATSC/HDTV */
exports.V4L2_STD_ATSC_8_VSB = 0x01000000;
exports.V4L2_STD_ATSC_16_VSB = 0x02000000;
/*
 * "Common" NTSC/M - It should be noticed that V4L2_STD_NTSC_443 is
 * Missing here.
 */
exports.V4L2_STD_NTSC = (exports.V4L2_STD_NTSC_M | exports.V4L2_STD_NTSC_M_JP | exports.V4L2_STD_NTSC_M_KR);
/* Secam macros */
exports.V4L2_STD_SECAM_DK = (exports.V4L2_STD_SECAM_D | exports.V4L2_STD_SECAM_K | exports.V4L2_STD_SECAM_K1);
/* All Secam Standards */
exports.V4L2_STD_SECAM = (exports.V4L2_STD_SECAM_B | exports.V4L2_STD_SECAM_G | exports.V4L2_STD_SECAM_H | exports.V4L2_STD_SECAM_DK | exports.V4L2_STD_SECAM_L | exports.V4L2_STD_SECAM_LC);
/* PAL macros */
exports.V4L2_STD_PAL_BG = (exports.V4L2_STD_PAL_B | exports.V4L2_STD_PAL_B1 | exports.V4L2_STD_PAL_G);
exports.V4L2_STD_PAL_DK = (exports.V4L2_STD_PAL_D | exports.V4L2_STD_PAL_D1 | exports.V4L2_STD_PAL_K);
/*
* "Common" PAL - This macro is there to be compatible with the old
* V4L1 concept of "PAL": /BGDKHI.
* Several PAL standards are missing here: /M, /N and /Nc
*/
exports.V4L2_STD_PAL = (exports.V4L2_STD_PAL_BG | exports.V4L2_STD_PAL_DK | exports.V4L2_STD_PAL_H | exports.V4L2_STD_PAL_I);
/* Chroma "agnostic" standards */
exports.V4L2_STD_B = (exports.V4L2_STD_PAL_B | exports.V4L2_STD_PAL_B1 | exports.V4L2_STD_SECAM_B);
exports.V4L2_STD_G = (exports.V4L2_STD_PAL_G | exports.V4L2_STD_SECAM_G);
exports.V4L2_STD_H = (exports.V4L2_STD_PAL_H | exports.V4L2_STD_SECAM_H);
exports.V4L2_STD_L = (exports.V4L2_STD_SECAM_L | exports.V4L2_STD_SECAM_LC);
exports.V4L2_STD_GH = (exports.V4L2_STD_G | exports.V4L2_STD_H);
exports.V4L2_STD_DK = (exports.V4L2_STD_PAL_DK | exports.V4L2_STD_SECAM_DK);
exports.V4L2_STD_BG = (exports.V4L2_STD_B | exports.V4L2_STD_G);
exports.V4L2_STD_MN = (exports.V4L2_STD_PAL_M | exports.V4L2_STD_PAL_N | exports.V4L2_STD_PAL_Nc | exports.V4L2_STD_NTSC);
/* Standards where MTS/BTSC stereo could be found */
exports.V4L2_STD_MTS = (exports.V4L2_STD_NTSC_M | exports.V4L2_STD_PAL_M | exports.V4L2_STD_PAL_N | exports.V4L2_STD_PAL_Nc);
/* Standards for Countries with 60Hz Line frequency */
exports.V4L2_STD_525_60 = (exports.V4L2_STD_PAL_M | exports.V4L2_STD_PAL_60 | exports.V4L2_STD_NTSC | exports.V4L2_STD_NTSC_443);
/* Standards for Countries with 50Hz Line frequency */
exports.V4L2_STD_625_50 = (exports.V4L2_STD_PAL | exports.V4L2_STD_PAL_N | exports.V4L2_STD_PAL_Nc | exports.V4L2_STD_SECAM);
exports.V4L2_STD_ATSC = (exports.V4L2_STD_ATSC_8_VSB | exports.V4L2_STD_ATSC_16_VSB);
/* Macros with none and all analog standards */
exports.V4L2_STD_UNKNOWN = 0;
exports.V4L2_STD_ALL = (exports.V4L2_STD_525_60 | exports.V4L2_STD_625_50);
exports.v4l2_standard = StructType({
    index: ref_napi_1.default.types.uint32,
    id: exports.v4l2_std_id,
    name: ArrayType(ref_napi_1.default.types.uint8, 24),
    frameperiod: exports.v4l2_fract, /* Frames, not fields */
    framelines: ref_napi_1.default.types.uint32,
    reserved: ArrayType(ref_napi_1.default.types.uint32, 4),
});
/*
 *	D V	B T	T I M I N G S
 */
exports.v4l2_bt_timings = StructType({
    width: ref_napi_1.default.types.uint32,
    height: ref_napi_1.default.types.uint32,
    interlaced: ref_napi_1.default.types.uint32,
    polarities: ref_napi_1.default.types.uint32,
    pixelclock: ref_napi_1.default.types.uint64,
    hfrontporch: ref_napi_1.default.types.uint32,
    hsync: ref_napi_1.default.types.uint32,
    hbackporch: ref_napi_1.default.types.uint32,
    vfrontporch: ref_napi_1.default.types.uint32,
    vsync: ref_napi_1.default.types.uint32,
    vbackporch: ref_napi_1.default.types.uint32,
    il_vfrontporch: ref_napi_1.default.types.uint32,
    il_vsync: ref_napi_1.default.types.uint32,
    il_vbackporch: ref_napi_1.default.types.uint32,
    standards: ref_napi_1.default.types.uint32,
    flags: ref_napi_1.default.types.uint32,
    picture_aspect: exports.v4l2_fract,
    cea861_vic: ref_napi_1.default.types.uint8,
    hdmi_vic: ref_napi_1.default.types.uint8,
    reserved: new ArrayType(ref_napi_1.default.types.uint8, 46),
}, { packed: true });
/* Interlaced or progressive format */
exports.V4L2_DV_PROGRESSIVE = 0;
exports.V4L2_DV_INTERLACED = 1;
/* Polarities. If bit is not set, it is assumed to be negative polarity */
exports.V4L2_DV_VSYNC_POS_POL = 0x00000001;
exports.V4L2_DV_HSYNC_POS_POL = 0x00000002;
/* Timings standards */
exports.V4L2_DV_BT_STD_CEA861 = (1 << 0); /* CEA-861 Digital TV Profile */
exports.V4L2_DV_BT_STD_DMT = (1 << 1); /* VESA Discrete Monitor Timings */
exports.V4L2_DV_BT_STD_CVT = (1 << 2); /* VESA Coordinated Video Timings */
exports.V4L2_DV_BT_STD_GTF = (1 << 3); /* VESA Generalized Timings Formula */
exports.V4L2_DV_BT_STD_SDI = (1 << 4); /* SDI Timings */
/* Flags */
/*
 * CVT/GTF specific: timing uses reduced blanking (CVT) or the 'Secondary
 * GTF' curve (GTF). In both cases the horizontal and/or vertical blanking
 * intervals are reduced, allowing a higher resolution over the same
 * bandwidth. This is a read-only flag.
 */
exports.V4L2_DV_FL_REDUCED_BLANKING = (1 << 0);
/*
 * CEA-861 specific: set for CEA-861 formats with a framerate of a multiple
 * of six. These formats can be optionally played at 1 / 1.001 speed.
 * This is a read-only flag.
 */
exports.V4L2_DV_FL_CAN_REDUCE_FPS = (1 << 1);
/*
 * CEA-861 specific: only valid for video transmitters, the flag is cleared
 * by receivers.
 * If the framerate of the format is a multiple of six, then the pixelclock
 * used to set up the transmitter is divided by 1.001 to make it compatible
 * with 60 Hz based standards such as NTSC and PAL-M that use a framerate of
 * 29.97 Hz. Otherwise this flag is cleared. If the transmitter can't generate
 * such frequencies, then the flag will also be cleared.
 */
exports.V4L2_DV_FL_REDUCED_FPS = (1 << 2);
/*
 * Specific to interlaced formats: if set, then field 1 is really one half-line
 * longer and field 2 is really one half-line shorter, so each field has
 * exactly the same number of half-lines. Whether half-lines can be detected
 * or used depends on the hardware.
 */
exports.V4L2_DV_FL_HALF_LINE = (1 << 3);
/*
 * If set, then this is a Consumer Electronics (CE) video format. Such formats
 * differ from other formats (commonly called IT formats) in that if RGB
 * encoding is used then by default the RGB values use limited range (i.e.
 * use the range 16-235) as opposed to 0-255. All formats defined in CEA-861
 * except for the 640x480 format are CE formats.
 */
exports.V4L2_DV_FL_IS_CE_VIDEO = (1 << 4);
/* Some formats like SMPTE-125M have an interlaced signal with a odd
 * total height. For these formats, if this flag is set, the first
 * field has the extra line. If not, it is the second field.
 */
exports.V4L2_DV_FL_FIRST_FIELD_EXTRA_LINE = (1 << 5);
/*
 * If set, then the picture_aspect field is valid. Otherwise assume that the
 * pixels are square, so the picture aspect ratio is the same as the width to
 * height ratio.
 */
exports.V4L2_DV_FL_HAS_PICTURE_ASPECT = (1 << 6);
/*
 * If set, then the cea861_vic field is valid and contains the Video
 * Identification Code as per the CEA-861 standard.
 */
exports.V4L2_DV_FL_HAS_CEA861_VIC = (1 << 7);
/*
 * If set, then the hdmi_vic field is valid and contains the Video
 * Identification Code as per the HDMI standard (HDMI Vendor Specific
 * InfoFrame).
 */
exports.V4L2_DV_FL_HAS_HDMI_VIC = (1 << 8);
/*
 * CEA-861 specific: only valid for video receivers.
 * If set, then HW can detect the difference between regular FPS and
 * 1000/1001 FPS. Note: This flag is only valid for HDMI VIC codes with
 * the V4L2_DV_FL_CAN_REDUCE_FPS flag set.
 */
exports.V4L2_DV_FL_CAN_DETECT_REDUCED_FPS = (1 << 9);
/* A few useful defines to calculate the total blanking and frame sizes */
function V4L2_DV_BT_BLANKING_WIDTH(bt) {
    return bt.hfrontporch + bt.hsync + bt.hbackporch;
}
exports.V4L2_DV_BT_BLANKING_WIDTH = V4L2_DV_BT_BLANKING_WIDTH;
function V4L2_DV_BT_FRAME_WIDTH(bt) {
    return bt.width + V4L2_DV_BT_BLANKING_WIDTH(bt);
}
exports.V4L2_DV_BT_FRAME_WIDTH = V4L2_DV_BT_FRAME_WIDTH;
function V4L2_DV_BT_BLANKING_HEIGHT(bt) {
    return bt.vfrontporch + bt.vsync + bt.vbackporch + (bt.interlaced ? (bt.il_vfrontporch + bt.il_vsync + bt.il_vbackporch) : 0);
}
exports.V4L2_DV_BT_BLANKING_HEIGHT = V4L2_DV_BT_BLANKING_HEIGHT;
function V4L2_DV_BT_FRAME_HEIGHT(bt) {
    return bt.height + V4L2_DV_BT_BLANKING_HEIGHT(bt);
}
exports.V4L2_DV_BT_FRAME_HEIGHT = V4L2_DV_BT_FRAME_HEIGHT;
exports.v4l2_dv_timings = StructType({
    type: ref_napi_1.default.types.uint32,
    union: new UnionType({
        bt: exports.v4l2_bt_timings,
        reserved: new ArrayType(ref_napi_1.default.types.uint32, 32),
    }),
}, { packed: true });
/* Values for the type field */
exports.V4L2_DV_BT_656_1120 = 0; /* BT.656/1120 timing type */
/** struct v4l2_enum_dv_timings - DV timings enumeration
 * @index:	enumeration index
 * @pad:	the pad number for which to enumerate timings (used with
 *		v4l-subdev nodes only)
 * @reserved:	must be zeroed
 * @timings:	the timings for the given index
 */
exports.v4l2_enum_dv_timings = StructType({
    index: ref_napi_1.default.types.uint32,
    pad: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 2),
    timings: exports.v4l2_dv_timings,
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
exports.v4l2_bt_timings_cap = StructType({
    min_width: ref_napi_1.default.types.uint32,
    max_width: ref_napi_1.default.types.uint32,
    min_height: ref_napi_1.default.types.uint32,
    max_height: ref_napi_1.default.types.uint32,
    min_pixelclock: ref_napi_1.default.types.uint64,
    max_pixelclock: ref_napi_1.default.types.uint64,
    standards: ref_napi_1.default.types.uint32,
    capabilities: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 16),
}, { packed: true });
/* Supports interlaced formats */
exports.V4L2_DV_BT_CAP_INTERLACED = (1 << 0);
/* Supports progressive formats */
exports.V4L2_DV_BT_CAP_PROGRESSIVE = (1 << 1);
/* Supports CVT/GTF reduced blanking */
exports.V4L2_DV_BT_CAP_REDUCED_BLANKING = (1 << 2);
/* Supports custom formats */
exports.V4L2_DV_BT_CAP_CUSTOM = (1 << 3);
/** struct v4l2_dv_timings_cap - DV timings capabilities
 * @type:	the type of the timings (same as in struct v4l2_dv_timings)
 * @pad:	the pad number for which to query capabilities (used with
 *		v4l-subdev nodes only)
 * @bt:		the BT656/1120 timings capabilities
 */
exports.v4l2_dv_timings_cap = StructType({
    type: ref_napi_1.default.types.uint32,
    pad: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 2),
    union: new UnionType({
        bt: exports.v4l2_bt_timings_cap,
        raw_data: new ArrayType(ref_napi_1.default.types.uint32, 32),
    }),
});
/*
 *	V I D E O   I N P U T S
 */
exports.v4l2_input = StructType({
    index: ref_napi_1.default.types.uint32, /*  Which input */
    name: new ArrayType(ref_napi_1.default.types.uint8, 32), /*  Label */
    type: ref_napi_1.default.types.uint32, /*  Type of input */
    audioset: ref_napi_1.default.types.uint32, /*  Associated audios (bitfield) */
    tuner: ref_napi_1.default.types.uint32, /*  Tuner index */
    std: exports.v4l2_std_id,
    status: ref_napi_1.default.types.uint32,
    capabilities: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 3),
});
/*  Values for the 'type' field */
exports.V4L2_INPUT_TYPE_TUNER = 1;
exports.V4L2_INPUT_TYPE_CAMERA = 2;
exports.V4L2_INPUT_TYPE_TOUCH = 3;
/* field 'status' - general */
exports.V4L2_IN_ST_NO_POWER = 0x00000001; /* Attached device is off */
exports.V4L2_IN_ST_NO_SIGNAL = 0x00000002;
exports.V4L2_IN_ST_NO_COLOR = 0x00000004;
/* field 'status' - sensor orientation */
/* If sensor is mounted upside down set both bits */
exports.V4L2_IN_ST_HFLIP = 0x00000010; /* Frames are flipped horizontally */
exports.V4L2_IN_ST_VFLIP = 0x00000020; /* Frames are flipped vertically */
/* field 'status' - analog */
exports.V4L2_IN_ST_NO_H_LOCK = 0x00000100; /* No horizontal sync lock */
exports.V4L2_IN_ST_COLOR_KILL = 0x00000200; /* Color killer is active */
exports.V4L2_IN_ST_NO_V_LOCK = 0x00000400; /* No vertical sync lock */
exports.V4L2_IN_ST_NO_STD_LOCK = 0x00000800; /* No standard format lock */
/* field 'status' - digital */
exports.V4L2_IN_ST_NO_SYNC = 0x00010000; /* No synchronization lock */
exports.V4L2_IN_ST_NO_EQU = 0x00020000; /* No equalizer lock */
exports.V4L2_IN_ST_NO_CARRIER = 0x00040000; /* Carrier recovery failed */
/* field 'status' - VCR and set-top box */
exports.V4L2_IN_ST_MACROVISION = 0x01000000; /* Macrovision detected */
exports.V4L2_IN_ST_NO_ACCESS = 0x02000000; /* Conditional access denied */
exports.V4L2_IN_ST_VTR = 0x04000000; /* VTR time constant */
/* capabilities flags */
exports.V4L2_IN_CAP_DV_TIMINGS = 0x00000002; /* Supports S_DV_TIMINGS */
exports.V4L2_IN_CAP_CUSTOM_TIMINGS = exports.V4L2_IN_CAP_DV_TIMINGS; /* For compatibility */
exports.V4L2_IN_CAP_STD = 0x00000004; /* Supports S_STD */
exports.V4L2_IN_CAP_NATIVE_SIZE = 0x00000008; /* Supports setting native size */
/*
 *	V I D E O   O U T P U T S
 */
exports.v4l2_output = StructType({
    index: ref_napi_1.default.types.uint32, /*  Which output */
    name: new ArrayType(ref_napi_1.default.types.uint8, 32), /*  Label */
    type: ref_napi_1.default.types.uint32, /*  Type of output */
    audioset: ref_napi_1.default.types.uint32, /*  Associated audios (bitfield) */
    modulator: ref_napi_1.default.types.uint32, /*  Associated modulator */
    std: exports.v4l2_std_id,
    capabilities: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 3),
});
/*  Values for the 'type' field */
exports.V4L2_OUTPUT_TYPE_MODULATOR = 1;
exports.V4L2_OUTPUT_TYPE_ANALOG = 2;
exports.V4L2_OUTPUT_TYPE_ANALOGVGAOVERLAY = 3;
/* capabilities flags */
exports.V4L2_OUT_CAP_DV_TIMINGS = 0x00000002; /* Supports S_DV_TIMINGS */
exports.V4L2_OUT_CAP_CUSTOM_TIMINGS = exports.V4L2_OUT_CAP_DV_TIMINGS; /* For compatibility */
exports.V4L2_OUT_CAP_STD = 0x00000004; /* Supports S_STD */
exports.V4L2_OUT_CAP_NATIVE_SIZE = 0x00000008; /* Supports setting native size */
/*
 *	C O N T R O L S
 */
exports.v4l2_control = StructType({
    id: ref_napi_1.default.types.uint32,
    value: ref_napi_1.default.types.int32,
});
exports.v4l2_ext_control = StructType({
    id: ref_napi_1.default.types.uint32,
    size: ref_napi_1.default.types.uint32,
    reserved2: new ArrayType(ref_napi_1.default.types.uint32, 1),
    union: new UnionType({
        value: ref_napi_1.default.types.int32,
        value64: ref_napi_1.default.types.int64,
        string: ref_napi_1.default.types.CString,
        p_u8: ref_napi_1.default.refType(ref_napi_1.default.types.uint8),
        p_u16: ref_napi_1.default.refType(ref_napi_1.default.types.uint16),
        p_u32: ref_napi_1.default.refType(ref_napi_1.default.types.uint32),
        p_area: ref_napi_1.default.refType(exports.v4l2_area),
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
        ptr: ref_napi_1.default.refType(ref_napi_1.default.types.void),
    }),
}, { packed: true });
exports.v4l2_ext_controls = StructType({
    union: new UnionType({
        ctrl_class: ref_napi_1.default.types.uint32,
        which: ref_napi_1.default.types.uint32,
    }),
    count: ref_napi_1.default.types.uint32,
    error_idx: ref_napi_1.default.types.uint32,
    request_fd: ref_napi_1.default.types.int32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 1),
    controls: ref_napi_1.default.refType(exports.v4l2_ext_control),
});
exports.V4L2_CTRL_ID_MASK = (0x0fffffff);
function V4L2_CTRL_ID2CLASS(id) { return ((id) & 0x0fff0000); }
exports.V4L2_CTRL_ID2CLASS = V4L2_CTRL_ID2CLASS;
function V4L2_CTRL_ID2WHICH(id) { return ((id) & 0x0fff0000); }
exports.V4L2_CTRL_ID2WHICH = V4L2_CTRL_ID2WHICH;
function V4L2_CTRL_DRIVER_PRIV(id) { return (((id) & 0xffff) >= 0x1000); }
exports.V4L2_CTRL_DRIVER_PRIV = V4L2_CTRL_DRIVER_PRIV;
exports.V4L2_CTRL_MAX_DIMS = (4);
exports.V4L2_CTRL_WHICH_CUR_VAL = 0;
exports.V4L2_CTRL_WHICH_DEF_VAL = 0x0f000000;
exports.V4L2_CTRL_WHICH_REQUEST_VAL = 0x0f010000;
var v4l2_ctrl_type;
(function (v4l2_ctrl_type) {
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_INTEGER"] = 1] = "V4L2_CTRL_TYPE_INTEGER";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_BOOLEAN"] = 2] = "V4L2_CTRL_TYPE_BOOLEAN";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_MENU"] = 3] = "V4L2_CTRL_TYPE_MENU";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_BUTTON"] = 4] = "V4L2_CTRL_TYPE_BUTTON";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_INTEGER64"] = 5] = "V4L2_CTRL_TYPE_INTEGER64";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_CTRL_CLASS"] = 6] = "V4L2_CTRL_TYPE_CTRL_CLASS";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_STRING"] = 7] = "V4L2_CTRL_TYPE_STRING";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_BITMASK"] = 8] = "V4L2_CTRL_TYPE_BITMASK";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_INTEGER_MENU"] = 9] = "V4L2_CTRL_TYPE_INTEGER_MENU";
    /* Compound types are >= 0x0100 */
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_COMPOUND_TYPES"] = 256] = "V4L2_CTRL_COMPOUND_TYPES";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_U8"] = 256] = "V4L2_CTRL_TYPE_U8";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_U16"] = 257] = "V4L2_CTRL_TYPE_U16";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_U32"] = 258] = "V4L2_CTRL_TYPE_U32";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_AREA"] = 262] = "V4L2_CTRL_TYPE_AREA";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_HDR10_CLL_INFO"] = 272] = "V4L2_CTRL_TYPE_HDR10_CLL_INFO";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_HDR10_MASTERING_DISPLAY"] = 273] = "V4L2_CTRL_TYPE_HDR10_MASTERING_DISPLAY";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_H264_SPS"] = 512] = "V4L2_CTRL_TYPE_H264_SPS";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_H264_PPS"] = 513] = "V4L2_CTRL_TYPE_H264_PPS";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_H264_SCALING_MATRIX"] = 514] = "V4L2_CTRL_TYPE_H264_SCALING_MATRIX";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_H264_SLICE_PARAMS"] = 515] = "V4L2_CTRL_TYPE_H264_SLICE_PARAMS";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_H264_DECODE_PARAMS"] = 516] = "V4L2_CTRL_TYPE_H264_DECODE_PARAMS";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_H264_PRED_WEIGHTS"] = 517] = "V4L2_CTRL_TYPE_H264_PRED_WEIGHTS";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_FWHT_PARAMS"] = 544] = "V4L2_CTRL_TYPE_FWHT_PARAMS";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_VP8_FRAME"] = 576] = "V4L2_CTRL_TYPE_VP8_FRAME";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_MPEG2_QUANTISATION"] = 592] = "V4L2_CTRL_TYPE_MPEG2_QUANTISATION";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_MPEG2_SEQUENCE"] = 593] = "V4L2_CTRL_TYPE_MPEG2_SEQUENCE";
    v4l2_ctrl_type[v4l2_ctrl_type["V4L2_CTRL_TYPE_MPEG2_PICTURE"] = 594] = "V4L2_CTRL_TYPE_MPEG2_PICTURE";
})(v4l2_ctrl_type || (exports.v4l2_ctrl_type = v4l2_ctrl_type = {}));
;
/*  Used in the VIDIOC_QUERYCTRL ioctl for querying controls */
exports.v4l2_queryctrl = StructType({
    id: ref_napi_1.default.types.uint32,
    type: ref_napi_1.default.types.uint32,
    name: new ArrayType(ref_napi_1.default.types.uint8, 32),
    minimum: ref_napi_1.default.types.int32,
    maximum: ref_napi_1.default.types.int32,
    step: ref_napi_1.default.types.int32,
    default_value: ref_napi_1.default.types.int32,
    flags: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 2),
});
/*  Used in the VIDIOC_QUERY_EXT_CTRL ioctl for querying extended controls */
exports.v4l2_query_ext_ctrl = StructType({
    id: ref_napi_1.default.types.uint32,
    type: ref_napi_1.default.types.uint32,
    name: new ArrayType(ref_napi_1.default.types.char, 32),
    minimum: ref_napi_1.default.types.int64,
    maximum: ref_napi_1.default.types.int64,
    step: ref_napi_1.default.types.uint64,
    default_value: ref_napi_1.default.types.int64,
    flags: ref_napi_1.default.types.uint32,
    elem_size: ref_napi_1.default.types.uint32,
    elems: ref_napi_1.default.types.uint32,
    nr_of_dims: ref_napi_1.default.types.uint32,
    dims: new ArrayType(ref_napi_1.default.types.uint32, exports.V4L2_CTRL_MAX_DIMS),
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 32),
});
/*  Used in the VIDIOC_QUERYMENU ioctl for querying menu items */
exports.v4l2_querymenu = StructType({
    id: ref_napi_1.default.types.uint32,
    index: ref_napi_1.default.types.uint32,
    union: new UnionType({
        name: new ArrayType(ref_napi_1.default.types.uint8, 32), /* Whatever */
        value: ref_napi_1.default.types.int64,
    }),
    reserved: ref_napi_1.default.types.uint32,
}, { packed: true });
/*  Control flags  */
exports.V4L2_CTRL_FLAG_DISABLED = 0x0001;
exports.V4L2_CTRL_FLAG_GRABBED = 0x0002;
exports.V4L2_CTRL_FLAG_READ_ONLY = 0x0004;
exports.V4L2_CTRL_FLAG_UPDATE = 0x0008;
exports.V4L2_CTRL_FLAG_INACTIVE = 0x0010;
exports.V4L2_CTRL_FLAG_SLIDER = 0x0020;
exports.V4L2_CTRL_FLAG_WRITE_ONLY = 0x0040;
exports.V4L2_CTRL_FLAG_VOLATILE = 0x0080;
exports.V4L2_CTRL_FLAG_HAS_PAYLOAD = 0x0100;
exports.V4L2_CTRL_FLAG_EXECUTE_ON_WRITE = 0x0200;
exports.V4L2_CTRL_FLAG_MODIFY_LAYOUT = 0x0400;
/*  Query flags, to be ORed with the control ID */
exports.V4L2_CTRL_FLAG_NEXT_CTRL = 0x80000000;
exports.V4L2_CTRL_FLAG_NEXT_COMPOUND = 0x40000000;
/*  User-class control IDs defined by V4L2 */
exports.V4L2_CID_MAX_CTRLS = 1024;
/*  IDs reserved for driver specific controls */
exports.V4L2_CID_PRIVATE_BASE = 0x08000000;
/*
 *	T U N I N G
 */
exports.v4l2_tuner = StructType({
    index: ref_napi_1.default.types.uint32,
    name: new ArrayType(ref_napi_1.default.types.uint8, 32),
    type: ref_napi_1.default.types.uint32,
    capability: ref_napi_1.default.types.uint32,
    rangelow: ref_napi_1.default.types.uint32,
    rangehigh: ref_napi_1.default.types.uint32,
    rxsubchans: ref_napi_1.default.types.uint32,
    audmode: ref_napi_1.default.types.uint32,
    signal: ref_napi_1.default.types.int32,
    afc: ref_napi_1.default.types.int32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 4),
});
exports.v4l2_modulator = StructType({
    index: ref_napi_1.default.types.uint32,
    name: new ArrayType(ref_napi_1.default.types.uint8, 32),
    capability: ref_napi_1.default.types.uint32,
    rangelow: ref_napi_1.default.types.uint32,
    rangehigh: ref_napi_1.default.types.uint32,
    txsubchans: ref_napi_1.default.types.uint32,
    type: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 3),
});
/*  Flags for the 'capability' field */
exports.V4L2_TUNER_CAP_LOW = 0x0001;
exports.V4L2_TUNER_CAP_NORM = 0x0002;
exports.V4L2_TUNER_CAP_HWSEEK_BOUNDED = 0x0004;
exports.V4L2_TUNER_CAP_HWSEEK_WRAP = 0x0008;
exports.V4L2_TUNER_CAP_STEREO = 0x0010;
exports.V4L2_TUNER_CAP_LANG2 = 0x0020;
exports.V4L2_TUNER_CAP_SAP = 0x0020;
exports.V4L2_TUNER_CAP_LANG1 = 0x0040;
exports.V4L2_TUNER_CAP_RDS = 0x0080;
exports.V4L2_TUNER_CAP_RDS_BLOCK_IO = 0x0100;
exports.V4L2_TUNER_CAP_RDS_CONTROLS = 0x0200;
exports.V4L2_TUNER_CAP_FREQ_BANDS = 0x0400;
exports.V4L2_TUNER_CAP_HWSEEK_PROG_LIM = 0x0800;
exports.V4L2_TUNER_CAP_1HZ = 0x1000;
/*  Flags for the 'rxsubchans' field */
exports.V4L2_TUNER_SUB_MONO = 0x0001;
exports.V4L2_TUNER_SUB_STEREO = 0x0002;
exports.V4L2_TUNER_SUB_LANG2 = 0x0004;
exports.V4L2_TUNER_SUB_SAP = 0x0004;
exports.V4L2_TUNER_SUB_LANG1 = 0x0008;
exports.V4L2_TUNER_SUB_RDS = 0x0010;
/*  Values for the 'audmode' field */
exports.V4L2_TUNER_MODE_MONO = 0x0000;
exports.V4L2_TUNER_MODE_STEREO = 0x0001;
exports.V4L2_TUNER_MODE_LANG2 = 0x0002;
exports.V4L2_TUNER_MODE_SAP = 0x0002;
exports.V4L2_TUNER_MODE_LANG1 = 0x0003;
exports.V4L2_TUNER_MODE_LANG1_LANG2 = 0x0004;
exports.v4l2_frequency = StructType({
    tuner: ref_napi_1.default.types.uint32,
    type: ref_napi_1.default.types.uint32,
    frequency: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 8),
});
exports.V4L2_BAND_MODULATION_VSB = (1 << 1);
exports.V4L2_BAND_MODULATION_FM = (1 << 2);
exports.V4L2_BAND_MODULATION_AM = (1 << 3);
exports.v4l2_frequency_band = StructType({
    tuner: ref_napi_1.default.types.uint32,
    type: ref_napi_1.default.types.uint32,
    index: ref_napi_1.default.types.uint32,
    capability: ref_napi_1.default.types.uint32,
    rangelow: ref_napi_1.default.types.uint32,
    rangehigh: ref_napi_1.default.types.uint32,
    modulation: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 9),
});
exports.v4l2_hw_freq_seek = StructType({
    tuner: ref_napi_1.default.types.uint32,
    type: ref_napi_1.default.types.uint32,
    seek_upward: ref_napi_1.default.types.uint32,
    wrap_around: ref_napi_1.default.types.uint32,
    spacing: ref_napi_1.default.types.uint32,
    rangelow: ref_napi_1.default.types.uint32,
    rangehigh: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 5),
});
/*
 *	R D S
 */
exports.v4l2_rds_data = StructType({
    lsb: ref_napi_1.default.types.uint8,
    msb: ref_napi_1.default.types.uint8,
    block: ref_napi_1.default.types.uint8,
}, { packed: true }); // Using the packed attribute
exports.V4L2_RDS_BLOCK_MSK = 0x7;
exports.V4L2_RDS_BLOCK_A = 0;
exports.V4L2_RDS_BLOCK_B = 1;
exports.V4L2_RDS_BLOCK_C = 2;
exports.V4L2_RDS_BLOCK_D = 3;
exports.V4L2_RDS_BLOCK_C_ALT = 4;
exports.V4L2_RDS_BLOCK_INVALID = 7;
exports.V4L2_RDS_BLOCK_CORRECTED = 0x40;
exports.V4L2_RDS_BLOCK_ERROR = 0x80;
/*
 *	A U D I O
 */
exports.v4l2_audio = StructType({
    index: ref_napi_1.default.types.uint32,
    name: new ArrayType(ref_napi_1.default.types.uint8, 32),
    capability: ref_napi_1.default.types.uint32,
    mode: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 2),
});
/*  Flags for the 'capability' field */
exports.V4L2_AUDCAP_STEREO = 0x00001;
exports.V4L2_AUDCAP_AVL = 0x00002;
/*  Flags for the 'mode' field */
exports.V4L2_AUDMODE_AVL = 0x00001;
exports.v4l2_audioout = StructType({
    index: ref_napi_1.default.types.uint32,
    name: new ArrayType(ref_napi_1.default.types.uint8, 32),
    capability: ref_napi_1.default.types.uint32,
    mode: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 2),
});
/*
 *	M P E G   S E R V I C E S
 */
exports.V4L2_ENC_IDX_FRAME_I = (0);
exports.V4L2_ENC_IDX_FRAME_P = (1);
exports.V4L2_ENC_IDX_FRAME_B = (2);
exports.V4L2_ENC_IDX_FRAME_MASK = (0xf);
exports.v4l2_enc_idx_entry = StructType({
    offset: ref_napi_1.default.types.uint64,
    pts: ref_napi_1.default.types.uint64,
    length: ref_napi_1.default.types.uint32,
    flags: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 2),
});
exports.V4L2_ENC_IDX_ENTRIES = (64);
exports.v4l2_enc_idx = StructType({
    entries: ref_napi_1.default.types.uint32,
    entries_cap: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 4),
    entry: new ArrayType(exports.v4l2_enc_idx_entry, exports.V4L2_ENC_IDX_ENTRIES),
});
exports.V4L2_ENC_CMD_START = (0);
exports.V4L2_ENC_CMD_STOP = (1);
exports.V4L2_ENC_CMD_PAUSE = (2);
exports.V4L2_ENC_CMD_RESUME = (3);
/* Flags for V4L2_ENC_CMD_STOP */
exports.V4L2_ENC_CMD_STOP_AT_GOP_END = (1 << 0);
exports.v4l2_encoder_cmd = StructType({
    cmd: ref_napi_1.default.types.uint32,
    flags: ref_napi_1.default.types.uint32,
    raw: new StructType({
        data: new ArrayType(ref_napi_1.default.types.uint32, 8),
    }),
});
/* Decoder commands */
exports.V4L2_DEC_CMD_START = (0);
exports.V4L2_DEC_CMD_STOP = (1);
exports.V4L2_DEC_CMD_PAUSE = (2);
exports.V4L2_DEC_CMD_RESUME = (3);
exports.V4L2_DEC_CMD_FLUSH = (4);
/* Flags for V4L2_DEC_CMD_START */
exports.V4L2_DEC_CMD_START_MUTE_AUDIO = (1 << 0);
/* Flags for V4L2_DEC_CMD_PAUSE */
exports.V4L2_DEC_CMD_PAUSE_TO_BLACK = (1 << 0);
/* Flags for V4L2_DEC_CMD_STOP */
exports.V4L2_DEC_CMD_STOP_TO_BLACK = (1 << 0);
exports.V4L2_DEC_CMD_STOP_IMMEDIATELY = (1 << 1);
/* Play format requirements (returned by the driver): */
/* The decoder has no special format requirements */
exports.V4L2_DEC_START_FMT_NONE = (0);
/* The decoder requires full GOPs */
exports.V4L2_DEC_START_FMT_GOP = (1);
exports.v4l2_decoder_cmd = StructType({
    cmd: ref_napi_1.default.types.uint32,
    flags: ref_napi_1.default.types.uint32,
    union: new UnionType({
        stop: new StructType({
            pts: ref_napi_1.default.types.uint64,
        }),
        start: new StructType({
            /* 0 or 1000 specifies normal speed,
               1 specifies forward single stepping,
               -1 specifies backward single stepping,
               >1: playback at speed/1000 of the normal speed,
               <-1: reverse playback at (-speed/1000) of the normal speed. */
            speed: ref_napi_1.default.types.int32,
            format: ref_napi_1.default.types.uint32,
        }),
        raw: new ArrayType(ref_napi_1.default.types.uint32, 16),
    }),
});
/*
 *	D A T A   S E R V I C E S   ( V B I )
 *
 *	Data services API by Michael Schimek
 */
/* Raw VBI */
exports.v4l2_vbi_format = StructType({
    sampling_rate: ref_napi_1.default.types.uint32,
    offset: ref_napi_1.default.types.uint32,
    samples_per_line: ref_napi_1.default.types.uint32,
    sample_format: ref_napi_1.default.types.uint32, // Assuming V4L2_PIX_FMT_* is uint32
    start: new ArrayType(ref_napi_1.default.types.int32, 2),
    count: new ArrayType(ref_napi_1.default.types.uint32, 2),
    flags: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 2),
});
/*  VBI flags  */
exports.V4L2_VBI_UNSYNC = (1 << 0);
exports.V4L2_VBI_INTERLACED = (1 << 1);
/* ITU-R start lines for each field */
exports.V4L2_VBI_ITU_525_F1_START = (1);
exports.V4L2_VBI_ITU_525_F2_START = (264);
exports.V4L2_VBI_ITU_625_F1_START = (1);
exports.V4L2_VBI_ITU_625_F2_START = (314);
/* Sliced VBI
 *
 *    This implements is a proposal V4L2 API to allow SLICED VBI
 * required for some hardware encoders. It should change without
 * notice in the definitive implementation.
 */
exports.v4l2_sliced_vbi_format = StructType({
    service_set: ref_napi_1.default.types.uint16,
    /* service_lines[0][...] specifies lines 0-23 (1-23 used) of the first field
       service_lines[1][...] specifies lines 0-23 (1-23 used) of the second field
                 (equals frame lines 313-336 for 625 line video
                  standards, 263-286 for 525 line standards) */
    service_lines: new ArrayType(new ArrayType(ref_napi_1.default.types.uint16, 24), 2),
    io_size: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 2), /* must be zero */
});
/* Teletext World System Teletext
   (WST), defined on ITU-R BT.653-2 */
exports.V4L2_SLICED_TELETEXT_B = (0x0001);
/* Video Program System, defined on ETS 300 231*/
exports.V4L2_SLICED_VPS = (0x0400);
/* Closed Caption, defined on EIA-608 */
exports.V4L2_SLICED_CAPTION_525 = (0x1000);
/* Wide Screen System, defined on ITU-R BT1119.1 */
exports.V4L2_SLICED_WSS_625 = (0x4000);
exports.V4L2_SLICED_VBI_525 = (exports.V4L2_SLICED_CAPTION_525);
exports.V4L2_SLICED_VBI_625 = (exports.V4L2_SLICED_TELETEXT_B | exports.V4L2_SLICED_VPS | exports.V4L2_SLICED_WSS_625);
exports.v4l2_sliced_vbi_cap = StructType({
    service_set: ref_napi_1.default.types.uint16,
    /* service_lines[0][...] specifies lines 0-23 (1-23 used) of the first field
       service_lines[1][...] specifies lines 0-23 (1-23 used) of the second field
                 (equals frame lines 313-336 for 625 line video
                  standards, 263-286 for 525 line standards) */
    service_lines: new ArrayType(new ArrayType(ref_napi_1.default.types.uint16, 24), 2),
    type: ref_napi_1.default.types.uint32, /* enum v4l2_buf_type */
    reserved: new ArrayType(ref_napi_1.default.types.uint32, 3), /* must be 0 */
});
exports.v4l2_sliced_vbi_data = StructType({
    id: ref_napi_1.default.types.uint32,
    field: ref_napi_1.default.types.uint32, /* 0: first field, 1: second field */
    line: ref_napi_1.default.types.uint32, /* 1-23 */
    reserved: ref_napi_1.default.types.uint32, /* must be 0 */
    data: new ArrayType(ref_napi_1.default.types.uint8, 48),
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
exports.V4L2_MPEG_VBI_IVTV_TELETEXT_B = (1);
exports.V4L2_MPEG_VBI_IVTV_CAPTION_525 = (4);
exports.V4L2_MPEG_VBI_IVTV_WSS_625 = (5);
exports.V4L2_MPEG_VBI_IVTV_VPS = (7);
exports.v4l2_mpeg_vbi_itv0_line = StructType({
    id: ref_napi_1.default.types.uint8, /* One of V4L2_MPEG_VBI_IVTV_* above */
    data: new ArrayType(ref_napi_1.default.types.uint8, 42), /* Sliced VBI data for the line */
}, { packed: true });
exports.v4l2_mpeg_vbi_itv0 = StructType({
    linemask: new ArrayType(ref_napi_1.default.types.uint32, 2), /* Bitmasks of VBI service lines present */
    line: new ArrayType(exports.v4l2_mpeg_vbi_itv0_line, 35),
}, { packed: true });
exports.v4l2_mpeg_vbi_ITV0 = StructType({
    line: new ArrayType(exports.v4l2_mpeg_vbi_itv0_line, 36),
}, { packed: true });
exports.V4L2_MPEG_VBI_IVTV_MAGIC0 = "itv0";
exports.V4L2_MPEG_VBI_IVTV_MAGIC1 = "ITV0";
exports.v4l2_mpeg_vbi_fmt_ivtv = StructType({
    magic: new ArrayType(ref_napi_1.default.types.uint8, 4),
    union: new UnionType({
        itv0: exports.v4l2_mpeg_vbi_itv0,
        ITV0: exports.v4l2_mpeg_vbi_ITV0,
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
exports.v4l2_plane_pix_format = StructType({
    sizeimage: ref_napi_1.default.types.uint32,
    bytesperline: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint16, 6),
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
exports.v4l2_pix_format_mplane = StructType({
    width: ref_napi_1.default.types.uint32,
    height: ref_napi_1.default.types.uint32,
    pixelformat: ref_napi_1.default.types.uint32,
    field: ref_napi_1.default.types.uint32,
    colorspace: ref_napi_1.default.types.uint32,
    plane_fmt: new ArrayType(exports.v4l2_plane_pix_format, exports.VIDEO_MAX_PLANES),
    num_planes: ref_napi_1.default.types.uint8,
    flags: ref_napi_1.default.types.uint8,
    union: new UnionType({
        ycbcr_enc: ref_napi_1.default.types.uint8,
        hsv_enc: ref_napi_1.default.types.uint8,
    }),
    quantization: ref_napi_1.default.types.uint8,
    xfer_func: ref_napi_1.default.types.uint8,
    reserved: new ArrayType(ref_napi_1.default.types.uint8, 7),
}, { packed: true });
/**
 * struct v4l2_sdr_format - SDR format definition
 * @pixelformat:	little endian four character code (fourcc)
 * @buffersize:		maximum size in bytes required for data
 * @reserved:		drivers and applications must zero this array
 */
exports.v4l2_sdr_format = StructType({
    pixelformat: ref_napi_1.default.types.uint32,
    buffersize: ref_napi_1.default.types.uint32,
    reserved: new ArrayType(ref_napi_1.default.types.uint8, 24),
}, { packed: true });
/**
 * struct v4l2_meta_format - metadata format definition
 * @dataformat:		little endian four character code (fourcc)
 * @buffersize:		maximum size in bytes required for data
 */
exports.v4l2_meta_format = StructType({
    dataformat: ref_napi_1.default.types.uint32,
    buffersize: ref_napi_1.default.types.uint32,
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
exports.v4l2_format = StructType({
    type: ref_napi_1.default.types.uint32,
    _padding0: new ArrayType(ref_napi_1.default.types.uint8, 4), // pad by 4 bytes to fix alignment
    fmt: new UnionType({
        pix: exports.v4l2_pix_format,
        pix_mp: exports.v4l2_pix_format_mplane,
        win: exports.v4l2_window,
        vbi: exports.v4l2_vbi_format,
        sliced: exports.v4l2_sliced_vbi_format,
        sdr: exports.v4l2_sdr_format,
        meta: exports.v4l2_meta_format,
        raw: new ArrayType(ref_napi_1.default.types.uint8, 200),
    }),
});
/*	Stream type-dependent parameters
 */
exports.v4l2_streamparm = StructType({
    type: ref_napi_1.default.types.uint32, /* enum v4l2_buf_type */
    parm: new UnionType({
        capture: exports.v4l2_captureparm,
        output: exports.v4l2_outputparm,
        raw_data: new ArrayType(ref_napi_1.default.types.uint8, 200), /* user-defined */
    }),
});
/*
 *	E V E N T S
 */
exports.V4L2_EVENT_ALL = 0;
exports.V4L2_EVENT_VSYNC = 1;
exports.V4L2_EVENT_EOS = 2;
exports.V4L2_EVENT_CTRL = 3;
exports.V4L2_EVENT_FRAME_SYNC = 4;
exports.V4L2_EVENT_SOURCE_CHANGE = 5;
exports.V4L2_EVENT_MOTION_DET = 6;
exports.V4L2_EVENT_PRIVATE_START = 0x08000000;
/* Payload for V4L2_EVENT_VSYNC */
exports.v4l2_event_vsync = StructType({
    field: ref_napi_1.default.types.uint8,
}, { packed: true });
/* Payload for V4L2_EVENT_CTRL */
exports.V4L2_EVENT_CTRL_CH_VALUE = (1 << 0);
exports.V4L2_EVENT_CTRL_CH_FLAGS = (1 << 1);
exports.V4L2_EVENT_CTRL_CH_RANGE = (1 << 2);
exports.v4l2_event_ctrl = StructType({
    changes: ref_napi_1.default.types.uint32,
    type: ref_napi_1.default.types.uint32,
    value: UnionType({
        value: ref_napi_1.default.types.int32,
        value64: ref_napi_1.default.types.int64,
    }),
    flags: ref_napi_1.default.types.uint32,
    minimum: ref_napi_1.default.types.int32,
    maximum: ref_napi_1.default.types.int32,
    step: ref_napi_1.default.types.int32,
    default_value: ref_napi_1.default.types.int32,
});
exports.v4l2_event_frame_sync = StructType({
    frame_sequence: ref_napi_1.default.types.uint32,
});
exports.V4L2_EVENT_SRC_CH_RESOLUTION = (1 << 0);
exports.v4l2_event_src_change = StructType({
    changes: ref_napi_1.default.types.uint32,
});
exports.V4L2_EVENT_MD_FL_HAVE_FRAME_SEQ = (1 << 0);
/**
 * struct v4l2_event_motion_det - motion detection event
 * @flags:             if V4L2_EVENT_MD_FL_HAVE_FRAME_SEQ is set, then the
 *                     frame_sequence field is valid.
 * @frame_sequence:    the frame sequence number associated with this event.
 * @region_mask:       which regions detected motion.
 */
exports.v4l2_event_motion_det = StructType({
    flags: ref_napi_1.default.types.uint32,
    frame_sequence: ref_napi_1.default.types.uint32,
    region_mask: ref_napi_1.default.types.uint32,
});
exports.v4l2_event = StructType({
    type: ref_napi_1.default.types.uint32,
    u: new UnionType({
        vsync: StructType({}),
        ctrl: StructType({}),
        frame_sync: StructType({}),
        src_change: StructType({}),
        motion_det: exports.v4l2_event_motion_det,
        data: ArrayType(ref_napi_1.default.types.uint8, 64),
    }),
    pending: ref_napi_1.default.types.uint32,
    sequence: ref_napi_1.default.types.uint32,
    timestamp: structs_1.timespec,
    id: ref_napi_1.default.types.uint32,
    reserved: ArrayType(ref_napi_1.default.types.uint32, 8),
});
exports.V4L2_EVENT_SUB_FL_SEND_INITIAL = (1 << 0);
exports.V4L2_EVENT_SUB_FL_ALLOW_FEEDBACK = (1 << 1);
exports.v4l2_event_subscription = StructType({
    type: ref_napi_1.default.types.uint32,
    id: ref_napi_1.default.types.uint32,
    flags: ref_napi_1.default.types.uint32,
    reserved: ArrayType(ref_napi_1.default.types.uint32, 5),
});
exports.ioctl = constants_native.ioctl;
