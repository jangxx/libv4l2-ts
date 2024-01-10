#include "napi.h"
#include "include/videodev2.h"

Napi::Object InitConstants(Napi::Env env, Napi::Object exports) {
    Napi::Object ioctl = Napi::Object::New(env);
	exports.Set("ioctl", ioctl);

    // these are ioctl defines so I'd rather leave their definition to the header files
    ioctl.Set("VIDIOC_QUERYCAP", Napi::Number::New(env, VIDIOC_QUERYCAP));
    ioctl.Set("VIDIOC_ENUM_FMT", Napi::Number::New(env, VIDIOC_ENUM_FMT));
    ioctl.Set("VIDIOC_G_FMT", Napi::Number::New(env, VIDIOC_G_FMT));
    ioctl.Set("VIDIOC_S_FMT", Napi::Number::New(env, VIDIOC_S_FMT));
    ioctl.Set("VIDIOC_REQBUFS", Napi::Number::New(env, VIDIOC_REQBUFS));
    ioctl.Set("VIDIOC_QUERYBUF", Napi::Number::New(env, VIDIOC_QUERYBUF));
    ioctl.Set("VIDIOC_G_FBUF", Napi::Number::New(env, VIDIOC_G_FBUF));
    ioctl.Set("VIDIOC_S_FBUF", Napi::Number::New(env, VIDIOC_S_FBUF));
    ioctl.Set("VIDIOC_OVERLAY", Napi::Number::New(env, VIDIOC_OVERLAY));
    ioctl.Set("VIDIOC_QBUF", Napi::Number::New(env, VIDIOC_QBUF));
    ioctl.Set("VIDIOC_EXPBUF", Napi::Number::New(env, VIDIOC_EXPBUF));
    ioctl.Set("VIDIOC_DQBUF", Napi::Number::New(env, VIDIOC_DQBUF));
    ioctl.Set("VIDIOC_STREAMON", Napi::Number::New(env, VIDIOC_STREAMON));
    ioctl.Set("VIDIOC_STREAMOFF", Napi::Number::New(env, VIDIOC_STREAMOFF));
    ioctl.Set("VIDIOC_G_PARM", Napi::Number::New(env, VIDIOC_G_PARM));
    ioctl.Set("VIDIOC_S_PARM", Napi::Number::New(env, VIDIOC_S_PARM));
    ioctl.Set("VIDIOC_G_STD", Napi::Number::New(env, VIDIOC_G_STD));
    ioctl.Set("VIDIOC_S_STD", Napi::Number::New(env, VIDIOC_S_STD));
    ioctl.Set("VIDIOC_ENUMSTD", Napi::Number::New(env, VIDIOC_ENUMSTD));
    ioctl.Set("VIDIOC_ENUMINPUT", Napi::Number::New(env, VIDIOC_ENUMINPUT));
    ioctl.Set("VIDIOC_G_CTRL", Napi::Number::New(env, VIDIOC_G_CTRL));
    ioctl.Set("VIDIOC_S_CTRL", Napi::Number::New(env, VIDIOC_S_CTRL));
    ioctl.Set("VIDIOC_G_TUNER", Napi::Number::New(env, VIDIOC_G_TUNER));
    ioctl.Set("VIDIOC_S_TUNER", Napi::Number::New(env, VIDIOC_S_TUNER));
    ioctl.Set("VIDIOC_G_AUDIO", Napi::Number::New(env, VIDIOC_G_AUDIO));
    ioctl.Set("VIDIOC_S_AUDIO", Napi::Number::New(env, VIDIOC_S_AUDIO));
    ioctl.Set("VIDIOC_QUERYCTRL", Napi::Number::New(env, VIDIOC_QUERYCTRL));
    ioctl.Set("VIDIOC_QUERYMENU", Napi::Number::New(env, VIDIOC_QUERYMENU));
    ioctl.Set("VIDIOC_G_INPUT", Napi::Number::New(env, VIDIOC_G_INPUT));
    ioctl.Set("VIDIOC_S_INPUT", Napi::Number::New(env, VIDIOC_S_INPUT));
    ioctl.Set("VIDIOC_G_EDID", Napi::Number::New(env, VIDIOC_G_EDID));
    ioctl.Set("VIDIOC_S_EDID", Napi::Number::New(env, VIDIOC_S_EDID));
    ioctl.Set("VIDIOC_G_OUTPUT", Napi::Number::New(env, VIDIOC_G_OUTPUT));
    ioctl.Set("VIDIOC_S_OUTPUT", Napi::Number::New(env, VIDIOC_S_OUTPUT));
    ioctl.Set("VIDIOC_ENUMOUTPUT", Napi::Number::New(env, VIDIOC_ENUMOUTPUT));
    ioctl.Set("VIDIOC_G_AUDOUT", Napi::Number::New(env, VIDIOC_G_AUDOUT));
    ioctl.Set("VIDIOC_S_AUDOUT", Napi::Number::New(env, VIDIOC_S_AUDOUT));
    ioctl.Set("VIDIOC_G_MODULATOR", Napi::Number::New(env, VIDIOC_G_MODULATOR));
    ioctl.Set("VIDIOC_S_MODULATOR", Napi::Number::New(env, VIDIOC_S_MODULATOR));
    ioctl.Set("VIDIOC_G_FREQUENCY", Napi::Number::New(env, VIDIOC_G_FREQUENCY));
    ioctl.Set("VIDIOC_S_FREQUENCY", Napi::Number::New(env, VIDIOC_S_FREQUENCY));
    ioctl.Set("VIDIOC_CROPCAP", Napi::Number::New(env, VIDIOC_CROPCAP));
    ioctl.Set("VIDIOC_G_CROP", Napi::Number::New(env, VIDIOC_G_CROP));
    ioctl.Set("VIDIOC_S_CROP", Napi::Number::New(env, VIDIOC_S_CROP));
    ioctl.Set("VIDIOC_G_JPEGCOMP", Napi::Number::New(env, VIDIOC_G_JPEGCOMP));
    ioctl.Set("VIDIOC_S_JPEGCOMP", Napi::Number::New(env, VIDIOC_S_JPEGCOMP));
    ioctl.Set("VIDIOC_QUERYSTD", Napi::Number::New(env, VIDIOC_QUERYSTD));
    ioctl.Set("VIDIOC_TRY_FMT", Napi::Number::New(env, VIDIOC_TRY_FMT));
    ioctl.Set("VIDIOC_ENUMAUDIO", Napi::Number::New(env, VIDIOC_ENUMAUDIO));
    ioctl.Set("VIDIOC_ENUMAUDOUT", Napi::Number::New(env, VIDIOC_ENUMAUDOUT));
    ioctl.Set("VIDIOC_G_PRIORITY", Napi::Number::New(env, VIDIOC_G_PRIORITY));
    ioctl.Set("VIDIOC_S_PRIORITY", Napi::Number::New(env, VIDIOC_S_PRIORITY));
    ioctl.Set("VIDIOC_G_SLICED_VBI_CAP", Napi::Number::New(env, VIDIOC_G_SLICED_VBI_CAP));
    ioctl.Set("VIDIOC_LOG_STATUS", Napi::Number::New(env, VIDIOC_LOG_STATUS));
    ioctl.Set("VIDIOC_G_EXT_CTRLS", Napi::Number::New(env, VIDIOC_G_EXT_CTRLS));
    ioctl.Set("VIDIOC_S_EXT_CTRLS", Napi::Number::New(env, VIDIOC_S_EXT_CTRLS));
    ioctl.Set("VIDIOC_TRY_EXT_CTRLS", Napi::Number::New(env, VIDIOC_TRY_EXT_CTRLS));
    ioctl.Set("VIDIOC_ENUM_FRAMESIZES", Napi::Number::New(env, VIDIOC_ENUM_FRAMESIZES));
    ioctl.Set("VIDIOC_ENUM_FRAMEINTERVALS", Napi::Number::New(env, VIDIOC_ENUM_FRAMEINTERVALS));
    ioctl.Set("VIDIOC_G_ENC_INDEX", Napi::Number::New(env, VIDIOC_G_ENC_INDEX));
    ioctl.Set("VIDIOC_ENCODER_CMD", Napi::Number::New(env, VIDIOC_ENCODER_CMD));
    ioctl.Set("VIDIOC_TRY_ENCODER_CMD", Napi::Number::New(env, VIDIOC_TRY_ENCODER_CMD));

    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, InitConstants)