// AudioWorkletNode对象

bodavm.memory.globalobj['AudioWorkletNode'] = function AudioWorkletNode() {
  console.log_copy('AudioWorkletNode 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AudioWorkletNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AudioWorkletNode': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AudioWorkletNode'], "AudioWorkletNode");
bodavm.memory.globalobj['AudioWorkletNode'].prototype.__proto__ = bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['AudioWorkletNode'].__proto__ = bodavm.memory.globalobj['AudioNode'];
bodavm.toolsFunc.defineProperty('AudioWorkletNode', "parameters", {
  configurable: true,
  enumerable: true,
  get: function parameters() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioWorkletNode'].prototype, "AudioWorkletNode", "parameters_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioWorkletNode', "port", {
  configurable: true,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioWorkletNode'].prototype, "AudioWorkletNode", "port_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioWorkletNode', "onprocessorerror", {
  configurable: true,
  enumerable: true,
  get: function onprocessorerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioWorkletNode'].prototype, "AudioWorkletNode", "onprocessorerror_get", arguments);
  },
  set: function onprocessorerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioWorkletNode'].prototype, "AudioWorkletNode", "onprocessorerror_set", arguments);
  }
}, 'prototype');