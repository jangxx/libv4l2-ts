# libv4l2-ts

Native bindings for libv4l2 for Typescript.

## Installation

First, install the neccessary header files:

```bash
# will look different on distros that don't use apt
sudo apt install libv4l-dev
```

Then install the module:

	npm install libv4l2-ts

## Usage

Either import the submodules directly:

```ts
import { v4l2_open, v4l2_close, v4l2_ioctl } from "libv4l2-ts/dist/libv4l2"
```

or import the top module and then access the subexports through destructuring:

```ts
import { libv4l2 } from "libv4l2-ts";

const { v4l2_open, v4l2_close, v4l2_ioctl } = libv4l2;
```

In general, this library is designed to be used to implement V4L2 modules or functionality in pure Typescript without having to write any native code.
It does not have a lot of functionality on its own however and is mostly a thin layer around libv4l2 functions and a large number of `#define`s, enums and structs that are required for V4L2.

If you want to learn how to implment your own V4L2 enabled modules or applications check out the official documentation about V4L2 on [kernel.org](https://www.kernel.org/doc/html/v4.9/media/uapi/v4l/v4l2.html), or look for a tutorial written in C and try to adapt it to Typescript with this module as a translation layer.

## What's included

### `libv4l2`

Contains all functions that libv4l2 contains:

- `v4l2_fourcc(a: string, b: string, c: string, d: string) => number`  
This is normally a compile-time define but I thought it'd be useful to have as an exported function as well.
- `v4l2_open(path: string, flags: number) => number`
- `v4l2_ioctl(fd: number, request: number, arg: Buffer) => number`
- `v4l2_mmap = binding.v4l2_mmap as (length: number, prot: number, flags: number, fd: number, offset: number) => Buffer`  
The resulting buffer will be memory mapped into the kernel and can be filled by calling the respective ioctls.
- `v4l2_munmap(addr: Buffer) => null`  
Unmaps a buffer previously mapped with `v4l2_mmap`
- `v4l2_close(fd: number) => null`
- `v4l2_dup(fd: number) => number`
- `v4l2_read(fd: number, buf: Buffer, count: number) => number`
- `v4l2_write(fd: number, buf: Buffer, count: number) => number`
- `v4l2_set_control(fd: number, cid: number, value: number) => number`
- `v4l2_get_control(fd: number, cid: number) => number`
- `v4l2_fd_open(fd: number, v4l2_flags: number) => number`

You can find documentation about these functions here: https://www.kernel.org/doc/html/v4.9/media/uapi/v4l/libv4l-introduction.html#libv4l2

It also includes a few convenience functions:

- `is_readable(fd: number, timeout: number) => boolean`  
Blocks for at most `timeout` milliseconds and then returns whether or not the given file descriptor is readable.
- `is_readable_async(fd: number, timeout: number) => Promise<boolean>`  
Same as `is_readable`, but instead of blocking, the internal `select` call is performed on a separate thread so Node can run other code at the same time.
- `disable_errors(fn: (...args) => number): (...args) => number`  
This function can be used to create a version of the v4l2 functions that always returns a number, even if it's an error. This can be useful when calling a function in a loop until it returns something other than `0` for example.

If a function encounters an error, it will be thrown as a `V4l2Error`, which contains both the message as well as the numerical `errno`.

### `videodev2`

Contains a TypeScriptified version of _videodev2.h_, which is also included in the repo itself.

This file contains all the defines (as `const`s), enums and structs (as `ref-struct`s) that V4L2 needs.
ioctls are exported under `ioctl`.

### `v4l2_controls`

Contains a fully ported version of _linux/v4l2-controls.h_, following the same conventions as `videodev2`.
These defines and structs are used for "controls", to set the brightness of a webcam for example.

### `v4l2_common`

Contains a fully ported version of _linux/v4l2-common.h_, following the same conventions as `videodev2`.
You probably don't need to include this module directly.

### `structs`

Contains more structs and types that are used in `videodev2`.
You probably don't need to include this module directly.

### `mman`

Partial port of _mman-linux.h_ from the glibc project. You need these defines if you want to do memory-mapped IO.

## Examples

You can find a complete example in _scripts/example.ts_. If you have cloned the repo and installed all packages you can immediately run it by running

```bash
npm run script:example
```

This library is also the foundation for https://github.com/jangxx/v4l2-camera-ts, which can also be used as an example.