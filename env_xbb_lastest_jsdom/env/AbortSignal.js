// AbortSignal对象

bodavm.memory.globalobj['AbortSignal'] = function AbortSignal() {
  console.log_copy('AbortSignal 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AbortSignal)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AbortSignal'], "AbortSignal");
bodavm.memory.globalobj['AbortSignal'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['AbortSignal'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('AbortSignal', "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AbortSignal'].undefined, "AbortSignal", "abort", arguments);
  }
});
bodavm.toolsFunc.defineProperty('AbortSignal', "timeout", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function timeout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AbortSignal'].undefined, "AbortSignal", "timeout", arguments);
  }
});
bodavm.toolsFunc.defineProperty('AbortSignal', "aborted", {
  configurable: true,
  enumerable: true,
  get: function aborted() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AbortSignal'].prototype, "AbortSignal", "aborted_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AbortSignal', "reason", {
  configurable: true,
  enumerable: true,
  get: function reason() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AbortSignal'].prototype, "AbortSignal", "reason_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AbortSignal', "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AbortSignal'].prototype, "AbortSignal", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AbortSignal'].prototype, "AbortSignal", "onabort_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AbortSignal', "throwIfAborted", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function throwIfAborted() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AbortSignal'].prototype, "AbortSignal", "throwIfAborted", arguments);
  }
}, 'prototype');