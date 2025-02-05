// RTCError对象

bodavm.memory.globalobj['RTCError'] = function RTCError() {
  console.log_copy('RTCError 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RTCError)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCError': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCError'], "RTCError");
bodavm.memory.globalobj['RTCError'].prototype.__proto__ = bodavm.memory.globalobj['DOMException'].prototype;
bodavm.memory.globalobj['RTCError'].__proto__ = bodavm.memory.globalobj['DOMException'];
bodavm.toolsFunc.defineProperty('RTCError', "errorDetail", {
  configurable: true,
  enumerable: true,
  get: function errorDetail() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCError'].prototype, "RTCError", "errorDetail_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCError', "sdpLineNumber", {
  configurable: true,
  enumerable: true,
  get: function sdpLineNumber() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCError'].prototype, "RTCError", "sdpLineNumber_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCError', "httpRequestStatusCode", {
  configurable: true,
  enumerable: true,
  get: function httpRequestStatusCode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCError'].prototype, "RTCError", "httpRequestStatusCode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCError', "sctpCauseCode", {
  configurable: true,
  enumerable: true,
  get: function sctpCauseCode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCError'].prototype, "RTCError", "sctpCauseCode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCError', "receivedAlert", {
  configurable: true,
  enumerable: true,
  get: function receivedAlert() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCError'].prototype, "RTCError", "receivedAlert_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCError', "sentAlert", {
  configurable: true,
  enumerable: true,
  get: function sentAlert() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCError'].prototype, "RTCError", "sentAlert_get", arguments);
  },
  set: undefined
}, 'prototype');