// RTCPeerConnectionIceErrorEvent对象

bodavm.memory.globalobj['RTCPeerConnectionIceErrorEvent'] = function RTCPeerConnectionIceErrorEvent() {
  console.log_copy('RTCPeerConnectionIceErrorEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RTCPeerConnectionIceErrorEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCPeerConnectionIceErrorEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCPeerConnectionIceErrorEvent'], "RTCPeerConnectionIceErrorEvent");
bodavm.memory.globalobj['RTCPeerConnectionIceErrorEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['RTCPeerConnectionIceErrorEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('RTCPeerConnectionIceErrorEvent', "address", {
  configurable: true,
  enumerable: true,
  get: function address() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnectionIceErrorEvent'].prototype, "RTCPeerConnectionIceErrorEvent", "address_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnectionIceErrorEvent', "port", {
  configurable: true,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnectionIceErrorEvent'].prototype, "RTCPeerConnectionIceErrorEvent", "port_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnectionIceErrorEvent', "hostCandidate", {
  configurable: true,
  enumerable: true,
  get: function hostCandidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnectionIceErrorEvent'].prototype, "RTCPeerConnectionIceErrorEvent", "hostCandidate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnectionIceErrorEvent', "url", {
  configurable: true,
  enumerable: true,
  get: function url() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnectionIceErrorEvent'].prototype, "RTCPeerConnectionIceErrorEvent", "url_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnectionIceErrorEvent', "errorCode", {
  configurable: true,
  enumerable: true,
  get: function errorCode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnectionIceErrorEvent'].prototype, "RTCPeerConnectionIceErrorEvent", "errorCode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnectionIceErrorEvent', "errorText", {
  configurable: true,
  enumerable: true,
  get: function errorText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnectionIceErrorEvent'].prototype, "RTCPeerConnectionIceErrorEvent", "errorText_get", arguments);
  },
  set: undefined
}, 'prototype');