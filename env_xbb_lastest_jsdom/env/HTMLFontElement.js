// HTMLFontElement对象

bodavm.memory.globalobj['HTMLFontElement'] = function HTMLFontElement() {
  console.log_copy('HTMLFontElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLFontElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLFontElement'], "HTMLFontElement");
bodavm.memory.globalobj['HTMLFontElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLFontElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLFontElement', "color", {
  configurable: true,
  enumerable: true,
  get: function color() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFontElement'].prototype, "HTMLFontElement", "color_get", arguments);
  },
  set: function color() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFontElement'].prototype, "HTMLFontElement", "color_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFontElement', "face", {
  configurable: true,
  enumerable: true,
  get: function face() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFontElement'].prototype, "HTMLFontElement", "face_get", arguments);
  },
  set: function face() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFontElement'].prototype, "HTMLFontElement", "face_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFontElement', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFontElement'].prototype, "HTMLFontElement", "size_get", arguments);
  },
  set: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFontElement'].prototype, "HTMLFontElement", "size_set", arguments);
  }
}, 'prototype');