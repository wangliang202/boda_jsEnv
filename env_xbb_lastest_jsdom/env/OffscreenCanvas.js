// OffscreenCanvas对象

bodavm.memory.globalobj['OffscreenCanvas'] = function OffscreenCanvas() {
  console.log_copy('OffscreenCanvas 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof OffscreenCanvas)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'OffscreenCanvas': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['OffscreenCanvas'], "OffscreenCanvas");
bodavm.memory.globalobj['OffscreenCanvas'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['OffscreenCanvas'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('OffscreenCanvas', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvas'].prototype, "OffscreenCanvas", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvas'].prototype, "OffscreenCanvas", "width_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvas', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvas'].prototype, "OffscreenCanvas", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvas'].prototype, "OffscreenCanvas", "height_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvas', "oncontextlost", {
  configurable: true,
  enumerable: true,
  get: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvas'].prototype, "OffscreenCanvas", "oncontextlost_get", arguments);
  },
  set: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvas'].prototype, "OffscreenCanvas", "oncontextlost_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvas', "oncontextrestored", {
  configurable: true,
  enumerable: true,
  get: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvas'].prototype, "OffscreenCanvas", "oncontextrestored_get", arguments);
  },
  set: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvas'].prototype, "OffscreenCanvas", "oncontextrestored_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvas', "convertToBlob", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function convertToBlob() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvas'].prototype, "OffscreenCanvas", "convertToBlob", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvas', "getContext", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getContext() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvas'].prototype, "OffscreenCanvas", "getContext", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvas', "transferToImageBitmap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transferToImageBitmap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvas'].prototype, "OffscreenCanvas", "transferToImageBitmap", arguments);
  }
}, 'prototype');