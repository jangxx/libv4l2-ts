#include "poll_async_worker.h"

Napi::Value make_return_value(const Napi::Env& env, int result, std::function<Napi::Value(const Napi::Env&)> return_fn);

PollAsyncWorker::PollAsyncWorker(int fd, int timeout, short events, Napi::Env env) : 
	Napi::AsyncWorker(env),
	m_fd(fd),
	m_timeout(timeout),
	m_events(events),
	m_deferred(Napi::Promise::Deferred::New(env))
{}

void PollAsyncWorker::Execute() {
	struct pollfd fds[1] = {};
	fds[0].fd = m_fd;
	fds[0].events = m_events;

	m_result = poll(fds, 1, m_timeout);

	if (m_result > 0) {
		m_revents = fds[0].revents;
	} else {
		m_revents = 0;
	}
}

void PollAsyncWorker::OnOK() {
	Napi::Value return_value = make_return_value(this->Env(), m_result, [this](Napi::Env _env) { 
		if (this->m_result == 0) { // syscall timed out
			return _env.Null();
		} else {
			Napi::Object obj = Napi::Object::New(_env);
			obj.Set("pollin", Napi::Boolean::New(_env, (this->m_revents & POLLIN) != 0));
			obj.Set("pollout", Napi::Boolean::New(_env, (this->m_revents & POLLOUT) != 0));
			obj.Set("pollpri", Napi::Boolean::New(_env, (this->m_revents & POLLPRI) != 0));
			return (Napi::Value)obj;
		}
	});

	this->m_deferred.Resolve(return_value);
}