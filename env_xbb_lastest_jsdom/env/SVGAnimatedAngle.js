// SVGAnimatedAngle对象

bodavm.memory.globalobj['SVGAnimatedAngle'] = function SVGAnimatedAngle() {
  console.log_copy('SVGAnimatedAngle 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGAnimatedAngle)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAnimatedAngle'], "SVGAnimatedAngle");
bodavm.toolsFunc.defineProperty('SVGAnimatedAngle', "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedAngle'].prototype, "SVGAnimatedAngle", "baseVal_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimatedAngle', "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedAngle'].prototype, "SVGAnimatedAngle", "animVal_get", arguments);
  },
  set: undefined
}, 'prototype');