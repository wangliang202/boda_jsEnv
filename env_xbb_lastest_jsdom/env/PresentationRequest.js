// PresentationRequest对象

bodavm.memory.globalobj['PresentationRequest'] = function PresentationRequest() {
  console.log_copy('PresentationRequest 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PresentationRequest)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PresentationRequest': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PresentationRequest'], "PresentationRequest");
bodavm.memory.globalobj['PresentationRequest'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['PresentationRequest'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('PresentationRequest', "onconnectionavailable", {
  configurable: true,
  enumerable: true,
  get: function onconnectionavailable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationRequest'].prototype, "PresentationRequest", "onconnectionavailable_get", arguments);
  },
  set: function onconnectionavailable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationRequest'].prototype, "PresentationRequest", "onconnectionavailable_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PresentationRequest', "getAvailability", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAvailability() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationRequest'].prototype, "PresentationRequest", "getAvailability", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PresentationRequest', "reconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationRequest'].prototype, "PresentationRequest", "reconnect", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PresentationRequest', "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function start() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationRequest'].prototype, "PresentationRequest", "start", arguments);
  }
}, 'prototype');