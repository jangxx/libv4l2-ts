const binding = require("../build/Release/v4l2_binding.node");

export class V4l2Error extends Error {
	constructor(
		readonly errno: number,
		readonly message: string,
	) {
		super(message);
	}
}

interface BindingReturnType {
	result: number;
	errno: number;
	error: string | null;
	value: any;
}

export function v4l2_open(path: string, flags: number): number {
	const result: BindingReturnType = binding.v4l2_open(path, flags);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v4l2_ioctl(fd: number, request: number, arg: Buffer): number {
	const result: BindingReturnType = binding.v4l2_ioctl(fd, request, arg);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v4l2_mmap(length: number, prot: number, flags: number, fd: number, offset: number): Buffer {
	const result: BindingReturnType = binding.v4l2_mmap(length, prot, flags, fd, offset);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v4l2_munmap(addr: Buffer): null {
	const result: BindingReturnType = binding.v4l2_munmap(addr);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;

}

export function v4l2_close(fd: number): null {
	const result: BindingReturnType = binding.v4l2_close(fd);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v2l4_dup(fd: number): number {
	const result: BindingReturnType = binding.v4l2_dup(fd);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v4l2_read(fd: number, buf: Buffer, count: number): number {
	const result: BindingReturnType = binding.v4l2_read(fd, buf, count);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v4l2_write(fd: number, buf: Buffer, count: number): number {
	const result: BindingReturnType = binding.v4l2_write(fd, buf, count);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v4l2_set_control(fd: number, cid: number, value: number): number {
	const result: BindingReturnType = binding.v4l2_set_control(fd, cid, value);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v4l2_get_control(fd: number, cid: number): number {
	const result: BindingReturnType = binding.v4l2_get_control(fd, cid);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v4l2_fd_open(fd: number, v4l2_flags: number): number {
	const result: BindingReturnType = binding.v4l2_fd_open(fd, v4l2_flags);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

// convenience functions
export const v4l2_fourcc = binding.v4l2_fourcc as (a: string, b: string, c: string, d: string) => number;
export const is_readable = binding.is_readable as (fd: number, timeout: number) => boolean;
export const is_readable_async = binding.is_readable_async as (fd: number, timeout: number) => Promise<boolean>;