// SVGForeignObjectElement对象

bodavm.memory.globalobj['SVGForeignObjectElement'] = function SVGForeignObjectElement() {
  console.log_copy('SVGForeignObjectElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGForeignObjectElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGForeignObjectElement'], "SVGForeignObjectElement");
bodavm.memory.globalobj['SVGForeignObjectElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGGraphicsElement'].prototype;
bodavm.memory.globalobj['SVGForeignObjectElement'].__proto__ = bodavm.memory.globalobj['SVGGraphicsElement'];
bodavm.toolsFunc.defineProperty('SVGForeignObjectElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGForeignObjectElement'].prototype, "SVGForeignObjectElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGForeignObjectElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGForeignObjectElement'].prototype, "SVGForeignObjectElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGForeignObjectElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGForeignObjectElement'].prototype, "SVGForeignObjectElement", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGForeignObjectElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGForeignObjectElement'].prototype, "SVGForeignObjectElement", "height_get", arguments);
  },
  set: undefined
}, 'prototype');