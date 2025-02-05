// DOMPointReadOnly对象

bodavm.memory.globalobj['DOMPointReadOnly'] = function DOMPointReadOnly() {
  console.log_copy('DOMPointReadOnly 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.DOMPointReadOnly();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DOMPointReadOnly'], "DOMPointReadOnly");
bodavm.toolsFunc.defineProperty('DOMPointReadOnly', "fromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromPoint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMPointReadOnly'].undefined, "DOMPointReadOnly", "fromPoint", arguments);
  }
});
bodavm.toolsFunc.defineProperty('DOMPointReadOnly', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMPointReadOnly'].prototype, "DOMPointReadOnly", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMPointReadOnly', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMPointReadOnly'].prototype, "DOMPointReadOnly", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMPointReadOnly', "z", {
  configurable: true,
  enumerable: true,
  get: function z() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMPointReadOnly'].prototype, "DOMPointReadOnly", "z_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMPointReadOnly', "w", {
  configurable: true,
  enumerable: true,
  get: function w() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMPointReadOnly'].prototype, "DOMPointReadOnly", "w_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMPointReadOnly', "matrixTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function matrixTransform() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMPointReadOnly'].prototype, "DOMPointReadOnly", "matrixTransform", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMPointReadOnly', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMPointReadOnly'].prototype, "DOMPointReadOnly", "toJSON", arguments);
  }
}, 'prototype');