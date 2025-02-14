// GamepadEvent对象

bodavm.memory.globalobj['GamepadEvent'] = function GamepadEvent() {
  console.log_copy('GamepadEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof GamepadEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'GamepadEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['GamepadEvent'], "GamepadEvent");
bodavm.memory.globalobj['GamepadEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['GamepadEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('GamepadEvent', "gamepad", {
  configurable: true,
  enumerable: true,
  get: function gamepad() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GamepadEvent'].prototype, "GamepadEvent", "gamepad_get", arguments);
  },
  set: undefined
}, 'prototype');