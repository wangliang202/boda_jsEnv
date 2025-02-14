// VirtualKeyboard对象

bodavm.memory.globalobj['VirtualKeyboard'] = function VirtualKeyboard() {
  console.log_copy('VirtualKeyboard 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof VirtualKeyboard)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['VirtualKeyboard'], "VirtualKeyboard");
bodavm.memory.globalobj['VirtualKeyboard'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['VirtualKeyboard'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('VirtualKeyboard', "boundingRect", {
  configurable: true,
  enumerable: true,
  get: function boundingRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VirtualKeyboard'].prototype, "VirtualKeyboard", "boundingRect_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VirtualKeyboard', "overlaysContent", {
  configurable: true,
  enumerable: true,
  get: function overlaysContent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VirtualKeyboard'].prototype, "VirtualKeyboard", "overlaysContent_get", arguments);
  },
  set: function overlaysContent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VirtualKeyboard'].prototype, "VirtualKeyboard", "overlaysContent_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VirtualKeyboard', "ongeometrychange", {
  configurable: true,
  enumerable: true,
  get: function ongeometrychange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VirtualKeyboard'].prototype, "VirtualKeyboard", "ongeometrychange_get", arguments);
  },
  set: function ongeometrychange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VirtualKeyboard'].prototype, "VirtualKeyboard", "ongeometrychange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VirtualKeyboard', "hide", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hide() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VirtualKeyboard'].prototype, "VirtualKeyboard", "hide", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VirtualKeyboard', "show", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function show() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VirtualKeyboard'].prototype, "VirtualKeyboard", "show", arguments);
  }
}, 'prototype');