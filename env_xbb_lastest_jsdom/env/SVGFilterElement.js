// SVGFilterElement对象

bodavm.memory.globalobj['SVGFilterElement'] = function SVGFilterElement() {
  console.log_copy('SVGFilterElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGFilterElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGFilterElement'], "SVGFilterElement");
bodavm.memory.globalobj['SVGFilterElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGFilterElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGFilterElement', "filterUnits", {
  configurable: true,
  enumerable: true,
  get: function filterUnits() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFilterElement'].prototype, "SVGFilterElement", "filterUnits_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFilterElement', "primitiveUnits", {
  configurable: true,
  enumerable: true,
  get: function primitiveUnits() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFilterElement'].prototype, "SVGFilterElement", "primitiveUnits_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFilterElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFilterElement'].prototype, "SVGFilterElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFilterElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFilterElement'].prototype, "SVGFilterElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFilterElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFilterElement'].prototype, "SVGFilterElement", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFilterElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFilterElement'].prototype, "SVGFilterElement", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFilterElement', "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFilterElement'].prototype, "SVGFilterElement", "href_get", arguments);
  },
  set: undefined
}, 'prototype');