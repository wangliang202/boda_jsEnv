// IDBRequest对象

bodavm.memory.globalobj['IDBRequest'] = function IDBRequest() {
  console.log_copy('IDBRequest 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof IDBRequest)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['IDBRequest'], "IDBRequest");
bodavm.memory.globalobj['IDBRequest'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['IDBRequest'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('IDBRequest', "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBRequest'].prototype, "IDBRequest", "result_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBRequest', "error", {
  configurable: true,
  enumerable: true,
  get: function error() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBRequest'].prototype, "IDBRequest", "error_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBRequest', "source", {
  configurable: true,
  enumerable: true,
  get: function source() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBRequest'].prototype, "IDBRequest", "source_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBRequest', "transaction", {
  configurable: true,
  enumerable: true,
  get: function transaction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBRequest'].prototype, "IDBRequest", "transaction_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBRequest', "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBRequest'].prototype, "IDBRequest", "readyState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBRequest', "onsuccess", {
  configurable: true,
  enumerable: true,
  get: function onsuccess() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBRequest'].prototype, "IDBRequest", "onsuccess_get", arguments);
  },
  set: function onsuccess() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBRequest'].prototype, "IDBRequest", "onsuccess_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBRequest', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBRequest'].prototype, "IDBRequest", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBRequest'].prototype, "IDBRequest", "onerror_set", arguments);
  }
}, 'prototype');