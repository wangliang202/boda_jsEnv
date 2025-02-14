// XRViewerPose对象

bodavm.memory.globalobj['XRViewerPose'] = function XRViewerPose() {
  console.log_copy('XRViewerPose 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRViewerPose)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRViewerPose'], "XRViewerPose");
bodavm.memory.globalobj['XRViewerPose'].prototype.__proto__ = bodavm.memory.globalobj['XRPose'].prototype;
bodavm.memory.globalobj['XRViewerPose'].__proto__ = bodavm.memory.globalobj['XRPose'];
bodavm.toolsFunc.defineProperty('XRViewerPose', "views", {
  configurable: true,
  enumerable: true,
  get: function views() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRViewerPose'].prototype, "XRViewerPose", "views_get", arguments);
  },
  set: undefined
}, 'prototype');