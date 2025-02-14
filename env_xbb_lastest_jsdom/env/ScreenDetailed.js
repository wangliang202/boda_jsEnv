// ScreenDetailed对象

bodavm.memory.globalobj['ScreenDetailed'] = function ScreenDetailed() {
  console.log_copy('ScreenDetailed 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ScreenDetailed)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ScreenDetailed'], "ScreenDetailed");
bodavm.memory.globalobj['ScreenDetailed'].prototype.__proto__ = bodavm.memory.globalobj['Screen'].prototype;
bodavm.memory.globalobj['ScreenDetailed'].__proto__ = bodavm.memory.globalobj['Screen'];
bodavm.toolsFunc.defineProperty('ScreenDetailed', "left", {
  configurable: true,
  enumerable: true,
  get: function left() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScreenDetailed'].prototype, "ScreenDetailed", "left_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ScreenDetailed', "top", {
  configurable: true,
  enumerable: true,
  get: function top() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScreenDetailed'].prototype, "ScreenDetailed", "top_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ScreenDetailed', "isPrimary", {
  configurable: true,
  enumerable: true,
  get: function isPrimary() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScreenDetailed'].prototype, "ScreenDetailed", "isPrimary_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ScreenDetailed', "isInternal", {
  configurable: true,
  enumerable: true,
  get: function isInternal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScreenDetailed'].prototype, "ScreenDetailed", "isInternal_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ScreenDetailed', "devicePixelRatio", {
  configurable: true,
  enumerable: true,
  get: function devicePixelRatio() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScreenDetailed'].prototype, "ScreenDetailed", "devicePixelRatio_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ScreenDetailed', "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScreenDetailed'].prototype, "ScreenDetailed", "label_get", arguments);
  },
  set: undefined
}, 'prototype');