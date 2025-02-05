// DOMRectReadOnly对象

bodavm.memory.globalobj['DOMRectReadOnly'] = function DOMRectReadOnly() {
  console.log_copy('DOMRectReadOnly 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.DOMRectReadOnly();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DOMRectReadOnly'], "DOMRectReadOnly");
bodavm.toolsFunc.defineProperty('DOMRectReadOnly', "fromRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRectReadOnly'].undefined, "DOMRectReadOnly", "fromRect", arguments);
  }
});
bodavm.toolsFunc.defineProperty('DOMRectReadOnly', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRectReadOnly'].prototype, "DOMRectReadOnly", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMRectReadOnly', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRectReadOnly'].prototype, "DOMRectReadOnly", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMRectReadOnly', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRectReadOnly'].prototype, "DOMRectReadOnly", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMRectReadOnly', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRectReadOnly'].prototype, "DOMRectReadOnly", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMRectReadOnly', "top", {
  configurable: true,
  enumerable: true,
  get: function top() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRectReadOnly'].prototype, "DOMRectReadOnly", "top_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMRectReadOnly', "right", {
  configurable: true,
  enumerable: true,
  get: function right() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRectReadOnly'].prototype, "DOMRectReadOnly", "right_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMRectReadOnly', "bottom", {
  configurable: true,
  enumerable: true,
  get: function bottom() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRectReadOnly'].prototype, "DOMRectReadOnly", "bottom_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMRectReadOnly', "left", {
  configurable: true,
  enumerable: true,
  get: function left() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRectReadOnly'].prototype, "DOMRectReadOnly", "left_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMRectReadOnly', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRectReadOnly'].prototype, "DOMRectReadOnly", "toJSON", arguments);
  }
}, 'prototype');