#include "is_readable_async_worker.h"

IsReadableAsyncWorker::IsReadableAsyncWorker(int fd, timeval timeout, Napi::Env env) : 
	Napi::AsyncWorker(env),
	m_fd(fd),
	m_timeout(timeout),
	m_deferred(Napi::Promise::Deferred::New(env))
{}

void IsReadableAsyncWorker::Execute() {
	fd_set fds;
    FD_ZERO(&fds);
    FD_SET(m_fd, &fds);

    this->m_result = select(this->m_fd + 1, &fds, nullptr, nullptr, &this->m_timeout);
}

void IsReadableAsyncWorker::OnOK() {
	this->m_deferred.Resolve(Napi::Boolean::New(this->Env(), this->m_result == 1));
}