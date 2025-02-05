// Bluetooth对象

bodavm.memory.globalobj['Bluetooth'] = function Bluetooth() {
  console.log_copy('Bluetooth 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Bluetooth)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Bluetooth'], "Bluetooth");
bodavm.memory.globalobj['Bluetooth'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['Bluetooth'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('Bluetooth', "getAvailability", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAvailability() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Bluetooth'].prototype, "Bluetooth", "getAvailability", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Bluetooth', "requestDevice", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestDevice() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Bluetooth'].prototype, "Bluetooth", "requestDevice", arguments);
  }
}, 'prototype');