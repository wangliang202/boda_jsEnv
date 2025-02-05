// SVGFECompositeElement对象

bodavm.memory.globalobj['SVGFECompositeElement'] = function SVGFECompositeElement() {
  console.log_copy('SVGFECompositeElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGFECompositeElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGFECompositeElement'], "SVGFECompositeElement");
bodavm.memory.globalobj['SVGFECompositeElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGFECompositeElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "SVG_FECOMPOSITE_OPERATOR_ARITHMETIC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "SVG_FECOMPOSITE_OPERATOR_XOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "SVG_FECOMPOSITE_OPERATOR_ATOP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "SVG_FECOMPOSITE_OPERATOR_OUT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "SVG_FECOMPOSITE_OPERATOR_IN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "SVG_FECOMPOSITE_OPERATOR_OVER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "SVG_FECOMPOSITE_OPERATOR_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "SVG_FECOMPOSITE_OPERATOR_ARITHMETIC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "SVG_FECOMPOSITE_OPERATOR_XOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "SVG_FECOMPOSITE_OPERATOR_ATOP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "SVG_FECOMPOSITE_OPERATOR_OUT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "SVG_FECOMPOSITE_OPERATOR_IN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "SVG_FECOMPOSITE_OPERATOR_OVER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "SVG_FECOMPOSITE_OPERATOR_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "in2", {
  configurable: true,
  enumerable: true,
  get: function in2() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFECompositeElement'].prototype, "SVGFECompositeElement", "in2_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFECompositeElement'].prototype, "SVGFECompositeElement", "in1_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "operator", {
  configurable: true,
  enumerable: true,
  get: function operator() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFECompositeElement'].prototype, "SVGFECompositeElement", "operator_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "k1", {
  configurable: true,
  enumerable: true,
  get: function k1() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFECompositeElement'].prototype, "SVGFECompositeElement", "k1_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "k2", {
  configurable: true,
  enumerable: true,
  get: function k2() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFECompositeElement'].prototype, "SVGFECompositeElement", "k2_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "k3", {
  configurable: true,
  enumerable: true,
  get: function k3() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFECompositeElement'].prototype, "SVGFECompositeElement", "k3_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "k4", {
  configurable: true,
  enumerable: true,
  get: function k4() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFECompositeElement'].prototype, "SVGFECompositeElement", "k4_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFECompositeElement'].prototype, "SVGFECompositeElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFECompositeElement'].prototype, "SVGFECompositeElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFECompositeElement'].prototype, "SVGFECompositeElement", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFECompositeElement'].prototype, "SVGFECompositeElement", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFECompositeElement', "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFECompositeElement'].prototype, "SVGFECompositeElement", "result_get", arguments);
  },
  set: undefined
}, 'prototype');