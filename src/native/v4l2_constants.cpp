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

    Napi::Object struct_sizes = Napi::Object::New(env);
	exports.Set("struct_sizes", struct_sizes);

    struct_sizes.Set("v4l2_rect", Napi::Number::New(env, sizeof(v4l2_rect)));
    struct_sizes.Set("v4l2_fract", Napi::Number::New(env, sizeof(v4l2_fract)));
    struct_sizes.Set("v4l2_area", Napi::Number::New(env, sizeof(v4l2_area)));
    struct_sizes.Set("v4l2_capability", Napi::Number::New(env, sizeof(v4l2_capability)));
    struct_sizes.Set("v4l2_pix_format", Napi::Number::New(env, sizeof(v4l2_pix_format)));
    struct_sizes.Set("v4l2_fmtdesc", Napi::Number::New(env, sizeof(v4l2_fmtdesc))); 
    struct_sizes.Set("v4l2_frmsize_discrete", Napi::Number::New(env, sizeof(v4l2_frmsize_discrete)));
    struct_sizes.Set("v4l2_frmsize_stepwise", Napi::Number::New(env, sizeof(v4l2_frmsize_stepwise)));
    struct_sizes.Set("v4l2_frmsizeenum", Napi::Number::New(env, sizeof(v4l2_frmsizeenum)));
    struct_sizes.Set("v4l2_frmival_stepwise", Napi::Number::New(env, sizeof(v4l2_frmival_stepwise)));
    struct_sizes.Set("v4l2_frmivalenum", Napi::Number::New(env, sizeof(v4l2_frmivalenum)));
    struct_sizes.Set("v4l2_timecode", Napi::Number::New(env, sizeof(v4l2_timecode)));
    struct_sizes.Set("v4l2_jpegcompression", Napi::Number::New(env, sizeof(v4l2_jpegcompression)));
    struct_sizes.Set("v4l2_requestbuffers", Napi::Number::New(env, sizeof(v4l2_requestbuffers)));
    struct_sizes.Set("v4l2_plane", Napi::Number::New(env, sizeof(v4l2_plane)));
    struct_sizes.Set("v4l2_buffer", Napi::Number::New(env, sizeof(v4l2_buffer)));
    struct_sizes.Set("v4l2_exportbuffer", Napi::Number::New(env, sizeof(v4l2_exportbuffer)));
    struct_sizes.Set("v4l2_framebuffer", Napi::Number::New(env, sizeof(v4l2_framebuffer)));
    struct_sizes.Set("v4l2_clip", Napi::Number::New(env, sizeof(v4l2_clip)));
    struct_sizes.Set("v4l2_window", Napi::Number::New(env, sizeof(v4l2_window)));
    struct_sizes.Set("v4l2_captureparm", Napi::Number::New(env, sizeof(v4l2_captureparm)));
    struct_sizes.Set("v4l2_outputparm", Napi::Number::New(env, sizeof(v4l2_outputparm)));
    struct_sizes.Set("v4l2_cropcap", Napi::Number::New(env, sizeof(v4l2_cropcap)));
    struct_sizes.Set("v4l2_crop", Napi::Number::New(env, sizeof(v4l2_crop)));
    struct_sizes.Set("v4l2_selection", Napi::Number::New(env, sizeof(v4l2_selection)));
    struct_sizes.Set("v4l2_standard", Napi::Number::New(env, sizeof(v4l2_standard)));
    struct_sizes.Set("v4l2_bt_timings", Napi::Number::New(env, sizeof(v4l2_bt_timings)));
    struct_sizes.Set("v4l2_dv_timings", Napi::Number::New(env, sizeof(v4l2_dv_timings)));
    struct_sizes.Set("v4l2_enum_dv_timings", Napi::Number::New(env, sizeof(v4l2_enum_dv_timings)));
    struct_sizes.Set("v4l2_bt_timings_cap", Napi::Number::New(env, sizeof(v4l2_bt_timings_cap)));
    struct_sizes.Set("v4l2_dv_timings_cap", Napi::Number::New(env, sizeof(v4l2_dv_timings_cap)));
    struct_sizes.Set("v4l2_input", Napi::Number::New(env, sizeof(v4l2_input)));
    struct_sizes.Set("v4l2_output", Napi::Number::New(env, sizeof(v4l2_output)));
    struct_sizes.Set("v4l2_control", Napi::Number::New(env, sizeof(v4l2_control)));
    struct_sizes.Set("v4l2_ext_control", Napi::Number::New(env, sizeof(v4l2_ext_control)));
    struct_sizes.Set("v4l2_ext_controls", Napi::Number::New(env, sizeof(v4l2_ext_controls)));
    struct_sizes.Set("v4l2_queryctrl", Napi::Number::New(env, sizeof(v4l2_queryctrl)));
    struct_sizes.Set("v4l2_query_ext_ctrl", Napi::Number::New(env, sizeof(v4l2_query_ext_ctrl)));
    struct_sizes.Set("v4l2_querymenu", Napi::Number::New(env, sizeof(v4l2_querymenu)));
    struct_sizes.Set("v4l2_tuner", Napi::Number::New(env, sizeof(v4l2_tuner)));
    struct_sizes.Set("v4l2_modulator", Napi::Number::New(env, sizeof(v4l2_modulator)));
    struct_sizes.Set("v4l2_frequency", Napi::Number::New(env, sizeof(v4l2_frequency)));
    struct_sizes.Set("v4l2_frequency_band", Napi::Number::New(env, sizeof(v4l2_frequency_band)));
    struct_sizes.Set("v4l2_hw_freq_seek", Napi::Number::New(env, sizeof(v4l2_hw_freq_seek)));
    struct_sizes.Set("v4l2_rds_data", Napi::Number::New(env, sizeof(v4l2_rds_data)));
    struct_sizes.Set("v4l2_audio", Napi::Number::New(env, sizeof(v4l2_audio)));
    struct_sizes.Set("v4l2_audioout", Napi::Number::New(env, sizeof(v4l2_audioout)));
    struct_sizes.Set("v4l2_enc_idx_entry", Napi::Number::New(env, sizeof(v4l2_enc_idx_entry)));
    struct_sizes.Set("v4l2_enc_idx", Napi::Number::New(env, sizeof(v4l2_enc_idx)));
    struct_sizes.Set("v4l2_encoder_cmd", Napi::Number::New(env, sizeof(v4l2_encoder_cmd)));
    struct_sizes.Set("v4l2_decoder_cmd", Napi::Number::New(env, sizeof(v4l2_decoder_cmd)));
    struct_sizes.Set("v4l2_vbi_format", Napi::Number::New(env, sizeof(v4l2_vbi_format)));
    struct_sizes.Set("v4l2_sliced_vbi_format", Napi::Number::New(env, sizeof(v4l2_sliced_vbi_format)));
    struct_sizes.Set("v4l2_sliced_vbi_cap", Napi::Number::New(env, sizeof(v4l2_sliced_vbi_cap)));
    struct_sizes.Set("v4l2_sliced_vbi_data", Napi::Number::New(env, sizeof(v4l2_sliced_vbi_data)));
    struct_sizes.Set("v4l2_mpeg_vbi_itv0_line", Napi::Number::New(env, sizeof(v4l2_mpeg_vbi_itv0_line)));
    struct_sizes.Set("v4l2_mpeg_vbi_itv0", Napi::Number::New(env, sizeof(v4l2_mpeg_vbi_itv0)));
    struct_sizes.Set("v4l2_mpeg_vbi_ITV0", Napi::Number::New(env, sizeof(v4l2_mpeg_vbi_ITV0)));
    struct_sizes.Set("v4l2_mpeg_vbi_fmt_ivtv", Napi::Number::New(env, sizeof(v4l2_mpeg_vbi_fmt_ivtv)));
    struct_sizes.Set("v4l2_plane_pix_format", Napi::Number::New(env, sizeof(v4l2_plane_pix_format)));
    struct_sizes.Set("v4l2_pix_format_mplane", Napi::Number::New(env, sizeof(v4l2_pix_format_mplane)));
    struct_sizes.Set("v4l2_sdr_format", Napi::Number::New(env, sizeof(v4l2_sdr_format)));
    struct_sizes.Set("v4l2_meta_format", Napi::Number::New(env, sizeof(v4l2_meta_format)));
    struct_sizes.Set("v4l2_format", Napi::Number::New(env, sizeof(v4l2_format)));
    struct_sizes.Set("v4l2_streamparm", Napi::Number::New(env, sizeof(v4l2_streamparm)));
    struct_sizes.Set("v4l2_event_vsync", Napi::Number::New(env, sizeof(v4l2_event_vsync)));
    struct_sizes.Set("v4l2_event_ctrl", Napi::Number::New(env, sizeof(v4l2_event_ctrl)));
    struct_sizes.Set("v4l2_event_frame_sync", Napi::Number::New(env, sizeof(v4l2_event_frame_sync)));
    struct_sizes.Set("v4l2_event_src_change", Napi::Number::New(env, sizeof(v4l2_event_src_change)));
    struct_sizes.Set("v4l2_event_motion_det", Napi::Number::New(env, sizeof(v4l2_event_motion_det)));
    struct_sizes.Set("v4l2_event", Napi::Number::New(env, sizeof(v4l2_event)));
    struct_sizes.Set("v4l2_event_subscription", Napi::Number::New(env, sizeof(v4l2_event_subscription)));
    struct_sizes.Set("v4l2_edid", Napi::Number::New(env, sizeof(v4l2_edid)));
    #ifdef V4L2_H264_SPS_CONSTRAINT_SET0_FLAG
    struct_sizes.Set("v4l2_ctrl_h264_sps", Napi::Number::New(env, sizeof(v4l2_ctrl_h264_sps)));
    struct_sizes.Set("v4l2_ctrl_h264_pps", Napi::Number::New(env, sizeof(v4l2_ctrl_h264_pps)));
    struct_sizes.Set("v4l2_ctrl_h264_scaling_matrix", Napi::Number::New(env, sizeof(v4l2_ctrl_h264_scaling_matrix)));
    struct_sizes.Set("v4l2_h264_weight_factors", Napi::Number::New(env, sizeof(v4l2_h264_weight_factors)));
    struct_sizes.Set("v4l2_ctrl_h264_pred_weights", Napi::Number::New(env, sizeof(v4l2_ctrl_h264_pred_weights)));
    struct_sizes.Set("v4l2_h264_reference", Napi::Number::New(env, sizeof(v4l2_h264_reference)));
    struct_sizes.Set("v4l2_ctrl_h264_slice_params", Napi::Number::New(env, sizeof(v4l2_ctrl_h264_slice_params)));
    struct_sizes.Set("v4l2_h264_dpb_entry", Napi::Number::New(env, sizeof(v4l2_h264_dpb_entry)));
    struct_sizes.Set("v4l2_ctrl_h264_decode_params", Napi::Number::New(env, sizeof(v4l2_ctrl_h264_decode_params)));
    #endif
    #ifdef V4L2_FWHT_VERSION
    struct_sizes.Set("v4l2_ctrl_fwht_params", Napi::Number::New(env, sizeof(v4l2_ctrl_fwht_params)));
    #endif
    #ifdef V4L2_VP8_SEGMENT_FLAG_ENABLED
    struct_sizes.Set("v4l2_vp8_segment", Napi::Number::New(env, sizeof(v4l2_vp8_segment)));
    struct_sizes.Set("v4l2_vp8_loop_filter", Napi::Number::New(env, sizeof(v4l2_vp8_loop_filter)));
    struct_sizes.Set("v4l2_vp8_quantization", Napi::Number::New(env, sizeof(v4l2_vp8_quantization)));
    struct_sizes.Set("v4l2_vp8_entropy", Napi::Number::New(env, sizeof(v4l2_vp8_entropy)));
    struct_sizes.Set("v4l2_vp8_entropy_coder_state", Napi::Number::New(env, sizeof(v4l2_vp8_entropy_coder_state)));
    struct_sizes.Set("v4l2_ctrl_vp8_frame", Napi::Number::New(env, sizeof(v4l2_ctrl_vp8_frame)));
    #endif
    #ifdef V4L2_MPEG2_SEQ_FLAG_PROGRESSIVE
    struct_sizes.Set("v4l2_ctrl_mpeg2_sequence", Napi::Number::New(env, sizeof(v4l2_ctrl_mpeg2_sequence)));
    struct_sizes.Set("v4l2_ctrl_mpeg2_picture", Napi::Number::New(env, sizeof(v4l2_ctrl_mpeg2_picture)));
    struct_sizes.Set("v4l2_ctrl_mpeg2_quantisation", Napi::Number::New(env, sizeof(v4l2_ctrl_mpeg2_quantisation)));
    #endif
    #ifdef V4L2_CID_COLORIMETRY_HDR10_CLL_INFO
    struct_sizes.Set("v4l2_ctrl_hdr10_cll_info", Napi::Number::New(env, sizeof(v4l2_ctrl_hdr10_cll_info)));
    struct_sizes.Set("v4l2_ctrl_hdr10_mastering_display", Napi::Number::New(env, sizeof(v4l2_ctrl_hdr10_mastering_display)));
    #endif

    struct_sizes.Set("timeval", Napi::Number::New(env, sizeof(timeval)));
    struct_sizes.Set("timespec", Napi::Number::New(env, sizeof(timespec)));
    
    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, InitConstants)