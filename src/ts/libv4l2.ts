const binding = require("../../build/Release/v4l2_binding.node");

export const v4l2_fourcc = binding.v4l2_fourcc as (a: string, b: string, c: string, d: string) => number;
export const v4l2_open = binding.v4l2_open as (path: string, flags: number) => number;
export const v4l2_ioctl = binding.v4l2_ioctl as (fd: number, request: number, arg: Buffer) => number;
export const v4l2_mmap = binding.v4l2_mmap as (length: number, prot: number, flags: number, fd: number, offset: number) => Buffer;
export const v4l2_munmap = binding.v4l2_munmap as (addr: Buffer) => null;
export const v4l2_close = binding.v4l2_close as (fd: number) => null;
export const v4l2_dup = binding.v4l2_dup as (fd: number) => number;
export const v4l2_read = binding.v4l2_read as (fd: number, buf: Buffer, count: number) => number;
export const v4l2_write = binding.v4l2_write as (fd: number, buf: Buffer, count: number) => number;
export const v4l2_set_control = binding.v4l2_set_control as (fd: number, cid: number, value: number) => number;
export const v4l2_get_control = binding.v4l2_get_control as (fd: number, cid: number) => number;
export const v4l2_fd_open = binding.v4l2_fd_open as (fd: number, v4l2_flags: number) => number;

// convenience functions
export const is_readable = binding.is_readable as (fd: number, timeout: number) => boolean;
export const is_readable_async = binding.is_readable_async as (fd: number, timeout: number) => Promise<boolean>;