"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_readable_async = exports.is_readable = exports.v4l2_fd_open = exports.v4l2_get_control = exports.v4l2_set_control = exports.v4l2_write = exports.v4l2_read = exports.v4l2_dup = exports.v4l2_close = exports.v4l2_munmap = exports.v4l2_mmap = exports.v4l2_ioctl = exports.v4l2_open = exports.v4l2_fourcc = void 0;
const binding = require("../../build/Release/v4l2_binding.node");
exports.v4l2_fourcc = binding.v4l2_fourcc;
exports.v4l2_open = binding.v4l2_open;
exports.v4l2_ioctl = binding.v4l2_ioctl;
exports.v4l2_mmap = binding.v4l2_mmap;
exports.v4l2_munmap = binding.v4l2_munmap;
exports.v4l2_close = binding.v4l2_close;
exports.v4l2_dup = binding.v4l2_dup;
exports.v4l2_read = binding.v4l2_read;
exports.v4l2_write = binding.v4l2_write;
exports.v4l2_set_control = binding.v4l2_set_control;
exports.v4l2_get_control = binding.v4l2_get_control;
exports.v4l2_fd_open = binding.v4l2_fd_open;
// convenience functions
exports.is_readable = binding.is_readable;
exports.is_readable_async = binding.is_readable_async;
