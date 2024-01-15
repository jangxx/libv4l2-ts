#include <cstring>
#include <cerrno>
#include <functional>
#include <sys/mman.h>

#include "napi.h"
#include <libv4l2.h>
#include "include/videodev2.h"
#include "is_readable_async_worker.h"

Napi::Value make_return_value(const Napi::Env& env, int result, std::function<Napi::Value(const Napi::Env&)> return_fn) {
    Napi::Object obj = Napi::Object::New(env);
    obj.Set("result", Napi::Number::New(env, result));
    obj.Set("errno", Napi::Number::New(env, errno));

    if (result == -1) {
        obj.Set("error", Napi::String::New(env, std::strerror(errno)));
        obj.Set("value", env.Null());
    } else {
        obj.Set("error", env.Null());
        obj.Set("value", return_fn(env));
    }

    return obj;
}

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
        Napi::TypeError::New(env, "Wrong argument types").ThrowAsJavaScriptException();
        return env.Null();
    }

    const char a = info[0].As<Napi::String>().Utf8Value()[0];
    const char b = info[1].As<Napi::String>().Utf8Value()[0];
    const char c = info[2].As<Napi::String>().Utf8Value()[0];
    const char d = info[3].As<Napi::String>().Utf8Value()[0];

    uint32_t fourcc = v4l2_fourcc(a, b, c, d);

    return Napi::Number::New(env, fourcc);
}

Napi::Value wrap_v4l2_open(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 2) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsString() || !info[1].IsNumber()) {
        Napi::TypeError::New(env, "Wrong argument types").ThrowAsJavaScriptException();
        return env.Null();
    }

    std::string path = info[0].As<Napi::String>();
    int flags = info[1].As<Napi::Number>().Int32Value();
    int fd = v4l2_open(path.c_str(), flags);

    return make_return_value(env, fd, [fd](Napi::Env _env) { return Napi::Number::New(_env, fd); });
}

Napi::Value wrap_v4l2_ioctl(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 3) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsBuffer()) {
        Napi::TypeError::New(env, "Wrong argument types").ThrowAsJavaScriptException();
        return env.Null();
    }

    int fd = info[0].As<Napi::Number>().Int32Value();
    int request = info[1].As<Napi::Number>().Int32Value();
    void* arg = info[2].As<Napi::Buffer<char>>().Data();

    int result = v4l2_ioctl(fd, request, arg);

    return make_return_value(env, result, [result](Napi::Env _env) { return Napi::Number::New(_env, result); });
}

Napi::Value wrap_v4l2_mmap(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 5) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsNumber() || !info[3].IsNumber() || !info[4].IsNumber()) {
        Napi::TypeError::New(env, "Wrong argument types").ThrowAsJavaScriptException();
        return env.Null();
    }

    std::size_t length = info[0].As<Napi::Number>().Uint32Value();
    int prot = info[1].As<Napi::Number>().Int32Value();
    int flags = info[2].As<Napi::Number>().Int32Value();
    int fd = info[3].As<Napi::Number>().Int32Value();
    int64_t offset = info[4].As<Napi::Number>().Int64Value();

    void* result = v4l2_mmap(nullptr, length, prot, flags, fd, offset);

    return make_return_value(
        env,
        (intptr_t)result,
        [result, length](Napi::Env _env) {
            return Napi::Buffer<char>::New(_env, static_cast<char*>(result), length);
        }
    );
}

Napi::Value wrap_v4l2_munmap(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 1) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsBuffer()) {
        Napi::TypeError::New(env, "Wrong argument types").ThrowAsJavaScriptException();
        return env.Null();
    }

    Napi::Buffer<char> buffer = info[0].As<Napi::Buffer<char>>();

    int result = v4l2_munmap(buffer.Data(), buffer.Length());

    return make_return_value(env, result, [](Napi::Env _env) { return _env.Null(); });
}

Napi::Value wrap_v4l2_close(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 1) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsNumber()) {
        Napi::TypeError::New(env, "Wrong argument types").ThrowAsJavaScriptException();
        return env.Null();
    }

    int fd = info[0].As<Napi::Number>().Int32Value();

    int result = v4l2_close(fd);

    return make_return_value(env, result, [](Napi::Env _env) { return _env.Null(); });
}

Napi::Value wrap_v4l2_dup(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 1) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsNumber()) {
        Napi::TypeError::New(env, "Wrong argument types").ThrowAsJavaScriptException();
        return env.Null();
    }

    int fd = info[0].As<Napi::Number>().Int32Value();

    int result = v4l2_dup(fd);

    return make_return_value(env, result, [result](Napi::Env _env) { return Napi::Number::New(_env, result); });
}

Napi::Value wrap_v4l2_read(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 3) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsNumber() || !info[1].IsBuffer() || !info[2].IsNumber()) {
        Napi::TypeError::New(env, "Wrong argument types").ThrowAsJavaScriptException();
        return env.Null();
    }

    int fd = info[0].As<Napi::Number>().Int32Value();
    Napi::Buffer<char> buffer = info[1].As<Napi::Buffer<char>>();
    std::size_t length = info[2].As<Napi::Number>().Uint32Value();

    ssize_t result = v4l2_read(fd, buffer.Data(), length);

    return make_return_value(env, result, [result](Napi::Env _env) { return Napi::Number::New(_env, result); });
}

Napi::Value wrap_v4l2_write(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 3) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsNumber() || !info[1].IsBuffer() || !info[2].IsNumber()) {
        Napi::TypeError::New(env, "Wrong argument types").ThrowAsJavaScriptException();
        return env.Null();
    }

    int fd = info[0].As<Napi::Number>().Int32Value();
    Napi::Buffer<char> buffer = info[1].As<Napi::Buffer<char>>();
    std::size_t length = info[2].As<Napi::Number>().Uint32Value();

    ssize_t result = v4l2_write(fd, buffer.Data(), length);

    return make_return_value(env, result, [result](Napi::Env _env) { return Napi::Number::New(_env, result); });
}

Napi::Value wrap_v4l2_set_control(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 3) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsNumber()) {
        Napi::TypeError::New(env, "Wrong argument types").ThrowAsJavaScriptException();
        return env.Null();
    }

    int fd = info[0].As<Napi::Number>().Int32Value();
    int cid = info[1].As<Napi::Number>().Int32Value();
    int value = info[2].As<Napi::Number>().Int32Value();

    int result = v4l2_set_control(fd, cid, value);

    return make_return_value(env, result, [result](Napi::Env _env) { return Napi::Number::New(_env, result); });
}

Napi::Value wrap_v4l2_get_control(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 2) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsNumber() || !info[1].IsNumber()) {
        Napi::TypeError::New(env, "Wrong argument types").ThrowAsJavaScriptException();
        return env.Null();
    }

    int fd = info[0].As<Napi::Number>().Int32Value();
    int cid = info[1].As<Napi::Number>().Int32Value();

    int result = v4l2_get_control(fd, cid);

    return make_return_value(env, result, [result](Napi::Env _env) { return Napi::Number::New(_env, result); });
}

Napi::Value wrap_v4l2_fd_open(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 2) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsNumber() || !info[1].IsNumber()) {
        Napi::TypeError::New(env, "Wrong argument types").ThrowAsJavaScriptException();
        return env.Null();
    }

    int fd = info[0].As<Napi::Number>().Int32Value();
    int v4l2_flags = info[1].As<Napi::Number>().Int32Value();

    int result = v4l2_fd_open(fd, v4l2_flags);

    return make_return_value(env, result, [result](Napi::Env _env) { return Napi::Number::New(_env, result); });
}

Napi::Value is_readable(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 2) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsNumber() || !info[1].IsNumber()) {
        Napi::TypeError::New(env, "Wrong argument types").ThrowAsJavaScriptException();
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

Napi::Value is_readable_async(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() != 2) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsNumber() || !info[1].IsNumber()) {
        Napi::TypeError::New(env, "Wrong argument types").ThrowAsJavaScriptException();
        return env.Null();
    }

    int fd = info[0].As<Napi::Number>().Int32Value();
    int64_t timeout = info[1].As<Napi::Number>().Int64Value(); // in milliseconds

    timeval tv;
    tv.tv_sec = timeout / 1000;
    tv.tv_usec = (timeout % 1000) * 1000;

    IsReadableAsyncWorker* worker = new IsReadableAsyncWorker(fd, tv, env);
    worker->Queue();

    return worker->getPromise();
}

Napi::Object Init (Napi::Env env, Napi::Object exports) {
    exports.Set("v4l2_fourcc", Napi::Function::New(env, wrap_v4l2_fourcc));
    exports.Set("v4l2_open", Napi::Function::New(env, wrap_v4l2_open));
    exports.Set("v4l2_ioctl", Napi::Function::New(env, wrap_v4l2_ioctl));
    exports.Set("v4l2_mmap", Napi::Function::New(env, wrap_v4l2_mmap));
    exports.Set("v4l2_munmap", Napi::Function::New(env, wrap_v4l2_munmap));
    exports.Set("v4l2_close", Napi::Function::New(env, wrap_v4l2_close));
    exports.Set("v4l2_dup", Napi::Function::New(env, wrap_v4l2_dup));
    exports.Set("v4l2_read", Napi::Function::New(env, wrap_v4l2_read));
    exports.Set("v4l2_write", Napi::Function::New(env, wrap_v4l2_write));
    exports.Set("v4l2_set_control", Napi::Function::New(env, wrap_v4l2_set_control));
    exports.Set("v4l2_get_control", Napi::Function::New(env, wrap_v4l2_get_control));
    exports.Set("v4l2_fd_open", Napi::Function::New(env, wrap_v4l2_fd_open));
    exports.Set("is_readable", Napi::Function::New(env, is_readable));
    exports.Set("is_readable_async", Napi::Function::New(env, is_readable_async));

    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)