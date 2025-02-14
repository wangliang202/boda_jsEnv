// AudioNode对象

bodavm.memory.globalobj['AudioNode'] = function AudioNode() {
  console.log_copy('AudioNode 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AudioNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AudioNode'], "AudioNode");
bodavm.memory.globalobj['AudioNode'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['AudioNode'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('AudioNode', "context", {
  configurable: true,
  enumerable: true,
  get: function context() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioNode'].prototype, "AudioNode", "context_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioNode', "numberOfInputs", {
  configurable: true,
  enumerable: true,
  get: function numberOfInputs() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioNode'].prototype, "AudioNode", "numberOfInputs_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioNode', "numberOfOutputs", {
  configurable: true,
  enumerable: true,
  get: function numberOfOutputs() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioNode'].prototype, "AudioNode", "numberOfOutputs_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioNode', "channelCount", {
  configurable: true,
  enumerable: true,
  get: function channelCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioNode'].prototype, "AudioNode", "channelCount_get", arguments);
  },
  set: function channelCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioNode'].prototype, "AudioNode", "channelCount_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioNode', "channelCountMode", {
  configurable: true,
  enumerable: true,
  get: function channelCountMode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioNode'].prototype, "AudioNode", "channelCountMode_get", arguments);
  },
  set: function channelCountMode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioNode'].prototype, "AudioNode", "channelCountMode_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioNode', "channelInterpretation", {
  configurable: true,
  enumerable: true,
  get: function channelInterpretation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioNode'].prototype, "AudioNode", "channelInterpretation_get", arguments);
  },
  set: function channelInterpretation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioNode'].prototype, "AudioNode", "channelInterpretation_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioNode', "connect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function connect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioNode'].prototype, "AudioNode", "connect", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioNode', "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioNode'].prototype, "AudioNode", "disconnect", arguments);
  }
}, 'prototype');