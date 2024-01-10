#include <cstring>
#include <cerrno>
#include <sys/mman.h>

#include "napi.h"
#include <libv4l2.h>
#include "include/videodev2.h"

Napi::Value wrap_v4l2_fourcc(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 4) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (
        !info[0].IsString() || info[0].As<Napi::String>().Utf8Value().length() != 1 ||
        !info[1].IsString() || info[1].As<Napi::String>().Utf8Value().length() != 1 ||
        !info[2].IsString() || info[2].As<Napi::String>().Utf8Value().length() != 1 ||
        !info[3].IsString() || info[3].As<Napi::String>().Utf8Value().length() != 1
    ) {
        Napi::TypeError::New(env, "Wrong arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    const char* a = info[0].As<Napi::String>().Utf8Value().c_str();
    const char* b = info[1].As<Napi::String>().Utf8Value().c_str();
    const char* c = info[2].As<Napi::String>().Utf8Value().c_str();
    const char* d = info[3].As<Napi::String>().Utf8Value().c_str();

    uint32_t fourcc = v4l2_fourcc(a[0], b[0], c[0], d[0]);

    return Napi::Number::New(env, fourcc);
}

Napi::Value wrap_v4l2_open(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 2) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsString() || !info[1].IsNumber()) {
        Napi::TypeError::New(env, "Wrong arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    std::string path = info[0].As<Napi::String>();
    int flags = info[1].As<Napi::Number>().Int32Value();
    int fd = v4l2_open(path.c_str(), flags);

    return Napi::Number::New(env, fd);
}

Napi::Value wrap_v4l2_ioctl(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 3) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsBuffer()) {
        Napi::TypeError::New(env, "Wrong arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    int fd = info[0].As<Napi::Number>().Int32Value();
    int request = info[1].As<Napi::Number>().Int32Value();
    void* arg = info[2].As<Napi::Buffer<char>>().Data();

    printf("ioctl: %lu\n", (unsigned long)arg);

    int result = v4l2_ioctl(fd, request, arg);

    if (result == -1) {
        Napi::Error::New(env, std::strerror(errno)).ThrowAsJavaScriptException();
        return env.Null();
    }

    return Napi::Number::New(env, result);
}

Napi::Value wrap_v4l2_mmap(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 5) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsNumber() || !info[3].IsNumber() || !info[4].IsNumber()) {
        Napi::TypeError::New(env, "Wrong arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    std::size_t length = info[0].As<Napi::Number>().Uint32Value();
    int prot = info[1].As<Napi::Number>().Int32Value();
    int flags = info[2].As<Napi::Number>().Int32Value();
    int fd = info[3].As<Napi::Number>().Int32Value();
    int64_t offset = info[4].As<Napi::Number>().Int64Value();

    void* result = v4l2_mmap(nullptr, length, prot, flags, fd, offset);

    if (result == MAP_FAILED) {
        Napi::Error::New(env, std::strerror(errno)).ThrowAsJavaScriptException();
        return env.Null();
    }

    return Napi::Buffer<char>::New(env, static_cast<char*>(result), length);
}

Napi::Value wrap_v4l2_munmap(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 1) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsBuffer()) {
        Napi::TypeError::New(env, "Wrong arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    Napi::Buffer<char> buffer = info[0].As<Napi::Buffer<char>>();

    int result = v4l2_munmap(buffer.Data(), buffer.Length());

    if (result == -1) {
        Napi::Error::New(env, std::strerror(errno)).ThrowAsJavaScriptException();
        return env.Null();
    }

    return env.Null();
}

Napi::Value wrap_v4l2_close(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 1) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsNumber()) {
        Napi::TypeError::New(env, "Wrong arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    int fd = info[0].As<Napi::Number>().Int32Value();

    int result = v4l2_close(fd);

    if (result == -1) {
        Napi::Error::New(env, std::strerror(errno)).ThrowAsJavaScriptException();
        return env.Null();
    }

    return env.Null();
}

Napi::Value is_readable(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 2) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsNumber() || !info[1].IsNumber()) {
        Napi::TypeError::New(env, "Wrong arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    int fd = info[0].As<Napi::Number>().Int32Value();
    int64_t timeout = info[1].As<Napi::Number>().Int64Value(); // in milliseconds

    timeval tv;
    tv.tv_sec = timeout / 1000;
    tv.tv_usec = (timeout % 1000) * 1000;

    fd_set fds;
    FD_ZERO(&fds);
    FD_SET(fd, &fds);

    int result = select(fd + 1, &fds, nullptr, nullptr, &tv);

    return Napi::Boolean::New(env, result == 1);
}

Napi::Object Init (Napi::Env env, Napi::Object exports) {
    exports.Set("v4l2_fourcc", Napi::Function::New(env, wrap_v4l2_fourcc));
    exports.Set("v4l2_open", Napi::Function::New(env, wrap_v4l2_open));
    exports.Set("v4l2_ioctl", Napi::Function::New(env, wrap_v4l2_ioctl));
    exports.Set("v4l2_mmap", Napi::Function::New(env, wrap_v4l2_mmap));
    exports.Set("v4l2_munmap", Napi::Function::New(env, wrap_v4l2_munmap));
    exports.Set("v4l2_close", Napi::Function::New(env, wrap_v4l2_close));
    exports.Set("is_readable", Napi::Function::New(env, is_readable));

    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)