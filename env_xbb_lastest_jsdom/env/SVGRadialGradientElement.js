// SVGRadialGradientElement对象

bodavm.memory.globalobj['SVGRadialGradientElement'] = function SVGRadialGradientElement() {
  console.log_copy('SVGRadialGradientElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGRadialGradientElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGRadialGradientElement'], "SVGRadialGradientElement");
bodavm.memory.globalobj['SVGRadialGradientElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGGradientElement'].prototype;
bodavm.memory.globalobj['SVGRadialGradientElement'].__proto__ = bodavm.memory.globalobj['SVGGradientElement'];
bodavm.toolsFunc.defineProperty('SVGRadialGradientElement', "SVG_SPREADMETHOD_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('SVGRadialGradientElement', "SVG_SPREADMETHOD_REFLECT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGRadialGradientElement', "SVG_SPREADMETHOD_PAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGRadialGradientElement', "SVG_SPREADMETHOD_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGRadialGradientElement', "cx", {
  configurable: true,
  enumerable: true,
  get: function cx() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRadialGradientElement'].prototype, "SVGRadialGradientElement", "cx_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGRadialGradientElement', "cy", {
  configurable: true,
  enumerable: true,
  get: function cy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRadialGradientElement'].prototype, "SVGRadialGradientElement", "cy_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGRadialGradientElement', "r", {
  configurable: true,
  enumerable: true,
  get: function r() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRadialGradientElement'].prototype, "SVGRadialGradientElement", "r_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGRadialGradientElement', "fx", {
  configurable: true,
  enumerable: true,
  get: function fx() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRadialGradientElement'].prototype, "SVGRadialGradientElement", "fx_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGRadialGradientElement', "fy", {
  configurable: true,
  enumerable: true,
  get: function fy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRadialGradientElement'].prototype, "SVGRadialGradientElement", "fy_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGRadialGradientElement', "fr", {
  configurable: true,
  enumerable: true,
  get: function fr() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGRadialGradientElement'].prototype, "SVGRadialGradientElement", "fr_get", arguments);
  },
  set: undefined
}, 'prototype');