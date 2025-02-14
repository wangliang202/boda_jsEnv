// ScreenDetails对象

bodavm.memory.globalobj['ScreenDetails'] = function ScreenDetails() {
  console.log_copy('ScreenDetails 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ScreenDetails)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ScreenDetails'], "ScreenDetails");
bodavm.memory.globalobj['ScreenDetails'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['ScreenDetails'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('ScreenDetails', "screens", {
  configurable: true,
  enumerable: true,
  get: function screens() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScreenDetails'].prototype, "ScreenDetails", "screens_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ScreenDetails', "currentScreen", {
  configurable: true,
  enumerable: true,
  get: function currentScreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScreenDetails'].prototype, "ScreenDetails", "currentScreen_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ScreenDetails', "onscreenschange", {
  configurable: true,
  enumerable: true,
  get: function onscreenschange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScreenDetails'].prototype, "ScreenDetails", "onscreenschange_get", arguments);
  },
  set: function onscreenschange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScreenDetails'].prototype, "ScreenDetails", "onscreenschange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ScreenDetails', "oncurrentscreenchange", {
  configurable: true,
  enumerable: true,
  get: function oncurrentscreenchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScreenDetails'].prototype, "ScreenDetails", "oncurrentscreenchange_get", arguments);
  },
  set: function oncurrentscreenchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScreenDetails'].prototype, "ScreenDetails", "oncurrentscreenchange_set", arguments);
  }
}, 'prototype');