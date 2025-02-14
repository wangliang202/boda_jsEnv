// OscillatorNode对象

bodavm.memory.globalobj['OscillatorNode'] = function OscillatorNode() {
  console.log_copy('OscillatorNode 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof OscillatorNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'OscillatorNode': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['OscillatorNode'], "OscillatorNode");
bodavm.memory.globalobj['OscillatorNode'].prototype.__proto__ = bodavm.memory.globalobj['AudioScheduledSourceNode'].prototype;
bodavm.memory.globalobj['OscillatorNode'].__proto__ = bodavm.memory.globalobj['AudioScheduledSourceNode'];
bodavm.toolsFunc.defineProperty('OscillatorNode', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OscillatorNode'].prototype, "OscillatorNode", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OscillatorNode'].prototype, "OscillatorNode", "type_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OscillatorNode', "frequency", {
  configurable: true,
  enumerable: true,
  get: function frequency() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OscillatorNode'].prototype, "OscillatorNode", "frequency_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('OscillatorNode', "detune", {
  configurable: true,
  enumerable: true,
  get: function detune() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OscillatorNode'].prototype, "OscillatorNode", "detune_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('OscillatorNode', "setPeriodicWave", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setPeriodicWave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OscillatorNode'].prototype, "OscillatorNode", "setPeriodicWave", arguments);
  }
}, 'prototype');