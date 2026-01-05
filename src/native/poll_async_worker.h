#pragma once

#include <poll.h>
#include "napi.h"

class PollAsyncWorker : public Napi::AsyncWorker {
	public:
		PollAsyncWorker(int fd, int timeout, short events, Napi::Env env);

		void Execute();
		void OnOK();

		Napi::Promise getPromise() {
			return this->m_deferred.Promise();
		}

	private:
		int m_fd;
		int m_timeout;
		short m_events;
		Napi::Promise::Deferred m_deferred;
		int m_result = 0;
		short m_revents = 0;
};