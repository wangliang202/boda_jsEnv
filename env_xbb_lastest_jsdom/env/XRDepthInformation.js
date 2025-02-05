// XRDepthInformation对象

bodavm.memory.globalobj['XRDepthInformation'] = function XRDepthInformation() {
  console.log_copy('XRDepthInformation 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRDepthInformation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRDepthInformation'], "XRDepthInformation");
bodavm.toolsFunc.defineProperty('XRDepthInformation', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRDepthInformation'].prototype, "XRDepthInformation", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRDepthInformation', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRDepthInformation'].prototype, "XRDepthInformation", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRDepthInformation', "normDepthBufferFromNormView", {
  configurable: true,
  enumerable: true,
  get: function normDepthBufferFromNormView() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRDepthInformation'].prototype, "XRDepthInformation", "normDepthBufferFromNormView_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRDepthInformation', "rawValueToMeters", {
  configurable: true,
  enumerable: true,
  get: function rawValueToMeters() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRDepthInformation'].prototype, "XRDepthInformation", "rawValueToMeters_get", arguments);
  },
  set: undefined
}, 'prototype');