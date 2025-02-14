// AudioScheduledSourceNode对象

bodavm.memory.globalobj['AudioScheduledSourceNode'] = function AudioScheduledSourceNode() {
  console.log_copy('AudioScheduledSourceNode 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AudioScheduledSourceNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AudioScheduledSourceNode'], "AudioScheduledSourceNode");
bodavm.memory.globalobj['AudioScheduledSourceNode'].prototype.__proto__ = bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['AudioScheduledSourceNode'].__proto__ = bodavm.memory.globalobj['AudioNode'];
bodavm.toolsFunc.defineProperty('AudioScheduledSourceNode', "onended", {
  configurable: true,
  enumerable: true,
  get: function onended() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioScheduledSourceNode'].prototype, "AudioScheduledSourceNode", "onended_get", arguments);
  },
  set: function onended() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioScheduledSourceNode'].prototype, "AudioScheduledSourceNode", "onended_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioScheduledSourceNode', "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function start() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioScheduledSourceNode'].prototype, "AudioScheduledSourceNode", "start", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioScheduledSourceNode', "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioScheduledSourceNode'].prototype, "AudioScheduledSourceNode", "stop", arguments);
  }
}, 'prototype');