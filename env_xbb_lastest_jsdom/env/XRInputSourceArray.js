// XRInputSourceArray对象

bodavm.memory.globalobj['XRInputSourceArray'] = function XRInputSourceArray() {
  console.log_copy('XRInputSourceArray 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRInputSourceArray)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRInputSourceArray'], "XRInputSourceArray");
bodavm.toolsFunc.defineProperty('XRInputSourceArray', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRInputSourceArray'].prototype, "XRInputSourceArray", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRInputSourceArray', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRInputSourceArray'].prototype, "XRInputSourceArray", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRInputSourceArray', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRInputSourceArray'].prototype, "XRInputSourceArray", "values", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRInputSourceArray', "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRInputSourceArray'].prototype, "XRInputSourceArray", "forEach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRInputSourceArray', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRInputSourceArray'].prototype, "XRInputSourceArray", "length_get", arguments);
  },
  set: undefined
}, 'prototype');