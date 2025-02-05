// TextDecoderStream对象

bodavm.memory.globalobj['TextDecoderStream'] = function TextDecoderStream() {
  console.log_copy('TextDecoderStream 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.TextDecoderStream();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TextDecoderStream'], "TextDecoderStream");
bodavm.toolsFunc.defineProperty('TextDecoderStream', "encoding", {
  configurable: true,
  enumerable: true,
  get: function encoding() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextDecoderStream'].prototype, "TextDecoderStream", "encoding_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextDecoderStream', "fatal", {
  configurable: true,
  enumerable: true,
  get: function fatal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextDecoderStream'].prototype, "TextDecoderStream", "fatal_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextDecoderStream', "ignoreBOM", {
  configurable: true,
  enumerable: true,
  get: function ignoreBOM() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextDecoderStream'].prototype, "TextDecoderStream", "ignoreBOM_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextDecoderStream', "readable", {
  configurable: true,
  enumerable: true,
  get: function readable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextDecoderStream'].prototype, "TextDecoderStream", "readable_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextDecoderStream', "writable", {
  configurable: true,
  enumerable: true,
  get: function writable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextDecoderStream'].prototype, "TextDecoderStream", "writable_get", arguments);
  },
  set: undefined
}, 'prototype');