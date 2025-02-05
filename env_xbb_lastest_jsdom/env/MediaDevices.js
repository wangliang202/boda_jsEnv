// MediaDevices对象

bodavm.memory.globalobj['MediaDevices'] = function MediaDevices() {
  console.log_copy('MediaDevices 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MediaDevices)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaDevices'], "MediaDevices");
bodavm.memory.globalobj['MediaDevices'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['MediaDevices'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('MediaDevices', "enumerateDevices", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function enumerateDevices() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaDevices'].prototype, "MediaDevices", "enumerateDevices", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaDevices', "getSupportedConstraints", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSupportedConstraints() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaDevices'].prototype, "MediaDevices", "getSupportedConstraints", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaDevices', "getUserMedia", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getUserMedia() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaDevices'].prototype, "MediaDevices", "getUserMedia", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaDevices', "ondevicechange", {
  configurable: true,
  enumerable: true,
  get: function ondevicechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaDevices'].prototype, "MediaDevices", "ondevicechange_get", arguments);
  },
  set: function ondevicechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaDevices'].prototype, "MediaDevices", "ondevicechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaDevices', "getDisplayMedia", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDisplayMedia() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaDevices'].prototype, "MediaDevices", "getDisplayMedia", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaDevices', "setCaptureHandleConfig", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCaptureHandleConfig() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaDevices'].prototype, "MediaDevices", "setCaptureHandleConfig", arguments);
  }
}, 'prototype');