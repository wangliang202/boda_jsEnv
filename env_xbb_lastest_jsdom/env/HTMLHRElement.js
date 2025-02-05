// HTMLHRElement对象

bodavm.memory.globalobj['HTMLHRElement'] = function HTMLHRElement() {
  console.log_copy('HTMLHRElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLHRElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLHRElement'], "HTMLHRElement");
bodavm.memory.globalobj['HTMLHRElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLHRElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLHRElement', "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLHRElement'].prototype, "HTMLHRElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLHRElement'].prototype, "HTMLHRElement", "align_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLHRElement', "color", {
  configurable: true,
  enumerable: true,
  get: function color() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLHRElement'].prototype, "HTMLHRElement", "color_get", arguments);
  },
  set: function color() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLHRElement'].prototype, "HTMLHRElement", "color_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLHRElement', "noShade", {
  configurable: true,
  enumerable: true,
  get: function noShade() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLHRElement'].prototype, "HTMLHRElement", "noShade_get", arguments);
  },
  set: function noShade() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLHRElement'].prototype, "HTMLHRElement", "noShade_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLHRElement', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLHRElement'].prototype, "HTMLHRElement", "size_get", arguments);
  },
  set: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLHRElement'].prototype, "HTMLHRElement", "size_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLHRElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLHRElement'].prototype, "HTMLHRElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLHRElement'].prototype, "HTMLHRElement", "width_set", arguments);
  }
}, 'prototype');