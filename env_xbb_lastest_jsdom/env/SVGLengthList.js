// SVGLengthList对象

bodavm.memory.globalobj['SVGLengthList'] = function SVGLengthList() {
  console.log_copy('SVGLengthList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGLengthList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGLengthList'], "SVGLengthList");
bodavm.toolsFunc.defineProperty('SVGLengthList', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGLengthList'].prototype, "SVGLengthList", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLengthList', "numberOfItems", {
  configurable: true,
  enumerable: true,
  get: function numberOfItems() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGLengthList'].prototype, "SVGLengthList", "numberOfItems_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLengthList', "appendItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGLengthList'].prototype, "SVGLengthList", "appendItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLengthList', "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGLengthList'].prototype, "SVGLengthList", "clear", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLengthList', "getItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGLengthList'].prototype, "SVGLengthList", "getItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLengthList', "initialize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initialize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGLengthList'].prototype, "SVGLengthList", "initialize", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLengthList', "insertItemBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertItemBefore() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGLengthList'].prototype, "SVGLengthList", "insertItemBefore", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLengthList', "removeItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGLengthList'].prototype, "SVGLengthList", "removeItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLengthList', "replaceItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGLengthList'].prototype, "SVGLengthList", "replaceItem", arguments);
  }
}, 'prototype');