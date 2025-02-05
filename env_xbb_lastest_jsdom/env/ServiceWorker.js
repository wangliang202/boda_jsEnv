// ServiceWorker对象

bodavm.memory.globalobj['ServiceWorker'] = function ServiceWorker() {
  console.log_copy('ServiceWorker 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ServiceWorker)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ServiceWorker'], "ServiceWorker");
bodavm.memory.globalobj['ServiceWorker'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['ServiceWorker'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('ServiceWorker', "scriptURL", {
  configurable: true,
  enumerable: true,
  get: function scriptURL() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorker'].prototype, "ServiceWorker", "scriptURL_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorker', "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorker'].prototype, "ServiceWorker", "state_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorker', "onstatechange", {
  configurable: true,
  enumerable: true,
  get: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorker'].prototype, "ServiceWorker", "onstatechange_get", arguments);
  },
  set: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorker'].prototype, "ServiceWorker", "onstatechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorker', "postMessage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function postMessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorker'].prototype, "ServiceWorker", "postMessage", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ServiceWorker', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorker'].prototype, "ServiceWorker", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ServiceWorker'].prototype, "ServiceWorker", "onerror_set", arguments);
  }
}, 'prototype');