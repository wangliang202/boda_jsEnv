// SVGAnimatedBoolean对象

bodavm.memory.globalobj['SVGAnimatedBoolean'] = function SVGAnimatedBoolean() {
  console.log_copy('SVGAnimatedBoolean 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGAnimatedBoolean)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAnimatedBoolean'], "SVGAnimatedBoolean");
bodavm.toolsFunc.defineProperty('SVGAnimatedBoolean', "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedBoolean'].prototype, "SVGAnimatedBoolean", "baseVal_get", arguments);
  },
  set: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedBoolean'].prototype, "SVGAnimatedBoolean", "baseVal_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimatedBoolean', "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedBoolean'].prototype, "SVGAnimatedBoolean", "animVal_get", arguments);
  },
  set: undefined
}, 'prototype');