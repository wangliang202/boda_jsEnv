// CloseEvent对象

bodavm.memory.globalobj['CloseEvent'] = function CloseEvent() {
  console.log_copy('CloseEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CloseEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CloseEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CloseEvent'], "CloseEvent");
bodavm.memory.globalobj['CloseEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['CloseEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('CloseEvent', "wasClean", {
  configurable: true,
  enumerable: true,
  get: function wasClean() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CloseEvent'].prototype, "CloseEvent", "wasClean_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CloseEvent', "code", {
  configurable: true,
  enumerable: true,
  get: function code() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CloseEvent'].prototype, "CloseEvent", "code_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CloseEvent', "reason", {
  configurable: true,
  enumerable: true,
  get: function reason() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CloseEvent'].prototype, "CloseEvent", "reason_get", arguments);
  },
  set: undefined
}, 'prototype');