#pragma once

#include "napi.h"

class IsReadableAsyncWorker : public Napi::AsyncWorker {
	public:
		IsReadableAsyncWorker(int fd, timeval timeout, Napi::Env env);

		void Execute();
		void OnOK();

		Napi::Promise getPromise() {
			return this->m_deferred.Promise();
		}

	private:
		int m_fd;
		timeval m_timeout;
		Napi::Promise::Deferred m_deferred;
		int m_result = 0;
};