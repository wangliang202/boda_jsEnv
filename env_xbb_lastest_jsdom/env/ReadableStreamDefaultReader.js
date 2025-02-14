// ReadableStreamDefaultReader对象

bodavm.memory.globalobj['ReadableStreamDefaultReader'] = function ReadableStreamDefaultReader() {
  console.log_copy('ReadableStreamDefaultReader 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ReadableStreamDefaultReader)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ReadableStreamDefaultReader': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ReadableStreamDefaultReader'], "ReadableStreamDefaultReader");
bodavm.toolsFunc.defineProperty('ReadableStreamDefaultReader', "read", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function read() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStreamDefaultReader'].prototype, "ReadableStreamDefaultReader", "read", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableStreamDefaultReader', "releaseLock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function releaseLock() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStreamDefaultReader'].prototype, "ReadableStreamDefaultReader", "releaseLock", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableStreamDefaultReader', "closed", {
  configurable: true,
  enumerable: true,
  get: function closed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStreamDefaultReader'].prototype, "ReadableStreamDefaultReader", "closed_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableStreamDefaultReader', "cancel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStreamDefaultReader'].prototype, "ReadableStreamDefaultReader", "cancel", arguments);
  }
}, 'prototype');