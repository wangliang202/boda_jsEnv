// GainNode对象

bodavm.memory.globalobj['GainNode'] = function GainNode() {
  console.log_copy('GainNode 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof GainNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'GainNode': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['GainNode'], "GainNode");
bodavm.memory.globalobj['GainNode'].prototype.__proto__ = bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['GainNode'].__proto__ = bodavm.memory.globalobj['AudioNode'];
bodavm.toolsFunc.defineProperty('GainNode', "gain", {
  configurable: true,
  enumerable: true,
  get: function gain() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GainNode'].prototype, "GainNode", "gain_get", arguments);
  },
  set: undefined
}, 'prototype');