// SVGTextPositioningElement对象

bodavm.memory.globalobj['SVGTextPositioningElement'] = function SVGTextPositioningElement() {
  console.log_copy('SVGTextPositioningElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGTextPositioningElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGTextPositioningElement'], "SVGTextPositioningElement");
bodavm.memory.globalobj['SVGTextPositioningElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGTextContentElement'].prototype;
bodavm.memory.globalobj['SVGTextPositioningElement'].__proto__ = bodavm.memory.globalobj['SVGTextContentElement'];
bodavm.toolsFunc.defineProperty('SVGTextPositioningElement', "LENGTHADJUST_SPACINGANDGLYPHS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGTextPositioningElement', "LENGTHADJUST_SPACING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGTextPositioningElement', "LENGTHADJUST_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGTextPositioningElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextPositioningElement'].prototype, "SVGTextPositioningElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextPositioningElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextPositioningElement'].prototype, "SVGTextPositioningElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextPositioningElement', "dx", {
  configurable: true,
  enumerable: true,
  get: function dx() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextPositioningElement'].prototype, "SVGTextPositioningElement", "dx_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextPositioningElement', "dy", {
  configurable: true,
  enumerable: true,
  get: function dy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextPositioningElement'].prototype, "SVGTextPositioningElement", "dy_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextPositioningElement', "rotate", {
  configurable: true,
  enumerable: true,
  get: function rotate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextPositioningElement'].prototype, "SVGTextPositioningElement", "rotate_get", arguments);
  },
  set: undefined
}, 'prototype');