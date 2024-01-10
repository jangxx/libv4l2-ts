const binding = require("../../build/Release/v4l2_binding.node");
const constants_native = require("../../build/Release/v4l2_constants.node");

export const constants = constants_native as {
	ioctl: {
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
	},
};

export const v4l2_fourcc = binding.v4l2_fourcc as (a: string, b: string, c: string, d: string) => number;
export const v4l2_open = binding.v4l2_open as (path: string, flags: number) => number;
export const v4l2_ioctl = binding.v4l2_ioctl as (fd: number, request: number, arg: Buffer) => number;
export const v4l2_mmap = binding.v4l2_mmap as (length: number, prot: number, flags: number, fd: number, offset: number) => Buffer;
export const v4l2_munmap = binding.v4l2_munmap as (addr: Buffer) => null;
export const v4l2_close = binding.v4l2_close as (fd: number) => null;
export const is_readable = binding.is_readable as (fd: number, timeout: number) => boolean;