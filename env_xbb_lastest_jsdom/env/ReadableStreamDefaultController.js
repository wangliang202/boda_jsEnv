// ReadableStreamDefaultController对象

bodavm.memory.globalobj['ReadableStreamDefaultController'] = function ReadableStreamDefaultController() {
  console.log_copy('ReadableStreamDefaultController 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ReadableStreamDefaultController)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ReadableStreamDefaultController'], "ReadableStreamDefaultController");
bodavm.toolsFunc.defineProperty('ReadableStreamDefaultController', "desiredSize", {
  configurable: true,
  enumerable: true,
  get: function desiredSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStreamDefaultController'].prototype, "ReadableStreamDefaultController", "desiredSize_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableStreamDefaultController', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStreamDefaultController'].prototype, "ReadableStreamDefaultController", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableStreamDefaultController', "enqueue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function enqueue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStreamDefaultController'].prototype, "ReadableStreamDefaultController", "enqueue", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableStreamDefaultController', "error", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function error() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStreamDefaultController'].prototype, "ReadableStreamDefaultController", "error", arguments);
  }
}, 'prototype');