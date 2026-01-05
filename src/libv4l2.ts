const binding = require("../build/Release/v4l2_binding.node");

export class V4l2Error extends Error {
	constructor(
		readonly errno: number,
		readonly message: string,
	) {
		super(message);
	}
}

interface BindingReturnType<T> {
	result: number;
	errno: number;
	error: string | null;
	value: T;
}

export interface PollEvents {
	pollin?: boolean;
	pollout?: boolean;
	pollpri?: boolean;
}

export interface PollEventResults {
	pollin: boolean;
	pollout: boolean;
	pollpri: boolean;
}

export function v4l2_open(path: string, flags: number): number {
	const result: BindingReturnType<number> = binding.v4l2_open(path, flags);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v4l2_ioctl(fd: number, request: number, arg: Buffer): number {
	const result: BindingReturnType<number> = binding.v4l2_ioctl(fd, request, arg);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v4l2_mmap(
	length: number,
	prot: number,
	flags: number,
	fd: number,
	offset: number,
): Buffer {
	const result: BindingReturnType<Buffer> = binding.v4l2_mmap(length, prot, flags, fd, offset);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v4l2_munmap(addr: Buffer): null {
	const result: BindingReturnType<null> = binding.v4l2_munmap(addr);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v4l2_close(fd: number): null {
	const result: BindingReturnType<null> = binding.v4l2_close(fd);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v2l4_dup(fd: number): number {
	const result: BindingReturnType<number> = binding.v4l2_dup(fd);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v4l2_read(fd: number, buf: Buffer, count: number): number {
	const result: BindingReturnType<number> = binding.v4l2_read(fd, buf, count);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v4l2_write(fd: number, buf: Buffer, count: number): number {
	const result: BindingReturnType<number> = binding.v4l2_write(fd, buf, count);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v4l2_set_control(fd: number, cid: number, value: number): number {
	const result: BindingReturnType<number> = binding.v4l2_set_control(fd, cid, value);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v4l2_get_control(fd: number, cid: number): number {
	const result: BindingReturnType<number> = binding.v4l2_get_control(fd, cid);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function v4l2_fd_open(fd: number, v4l2_flags: number): number {
	const result: BindingReturnType<number> = binding.v4l2_fd_open(fd, v4l2_flags);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

// convenience functions
export const v4l2_fourcc = binding.v4l2_fourcc as (
	a: string,
	b: string,
	c: string,
	d: string,
) => number;

export function poll(fd: number, timeout: number, events: PollEvents): PollEventResults | null {
	const result: BindingReturnType<PollEventResults | null> = binding.poll(fd, timeout, events);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export async function poll_async(
	fd: number,
	timeout: number,
	events: PollEvents,
): Promise<PollEventResults | null> {
	const result: BindingReturnType<PollEventResults | null> = await binding.poll_async(
		fd,
		timeout,
		events,
	);

	if (result.error !== null) {
		throw new V4l2Error(result.errno, result.error);
	}

	return result.value;
}

export function is_readable(fd: number, timeout: number): boolean {
	const result = poll(fd, timeout, { pollin: true });
	return result !== null && result.pollin;
}

export async function is_readable_async(fd: number, timeout: number): Promise<boolean> {
	try {
		const result = await poll_async(fd, timeout, { pollin: true });
		return result !== null && result.pollin;
	} catch (err) {
		return false;
	}
}

// creates a version of the v4l2 functions that always returns an errno instead of throwing an error
export function disable_errors<T extends (...args: any[]) => number>(
	fn: T,
): (...args: Parameters<T>) => number {
	return (...args: Parameters<T>): number => {
		try {
			return fn(...args);
		} catch (err) {
			if (err instanceof V4l2Error) {
				return err.errno;
			} else {
				throw err;
			}
		}
	};
}
