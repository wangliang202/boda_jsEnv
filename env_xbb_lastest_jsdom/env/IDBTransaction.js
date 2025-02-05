// IDBTransaction对象

bodavm.memory.globalobj['IDBTransaction'] = function IDBTransaction() {
  console.log_copy('IDBTransaction 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof IDBTransaction)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['IDBTransaction'], "IDBTransaction");
bodavm.memory.globalobj['IDBTransaction'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['IDBTransaction'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('IDBTransaction', "objectStoreNames", {
  configurable: true,
  enumerable: true,
  get: function objectStoreNames() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBTransaction'].prototype, "IDBTransaction", "objectStoreNames_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBTransaction', "mode", {
  configurable: true,
  enumerable: true,
  get: function mode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBTransaction'].prototype, "IDBTransaction", "mode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBTransaction', "durability", {
  configurable: true,
  enumerable: true,
  get: function durability() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBTransaction'].prototype, "IDBTransaction", "durability_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBTransaction', "db", {
  configurable: true,
  enumerable: true,
  get: function db() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBTransaction'].prototype, "IDBTransaction", "db_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBTransaction', "error", {
  configurable: true,
  enumerable: true,
  get: function error() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBTransaction'].prototype, "IDBTransaction", "error_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBTransaction', "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBTransaction'].prototype, "IDBTransaction", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBTransaction'].prototype, "IDBTransaction", "onabort_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBTransaction', "oncomplete", {
  configurable: true,
  enumerable: true,
  get: function oncomplete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBTransaction'].prototype, "IDBTransaction", "oncomplete_get", arguments);
  },
  set: function oncomplete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBTransaction'].prototype, "IDBTransaction", "oncomplete_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBTransaction', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBTransaction'].prototype, "IDBTransaction", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBTransaction'].prototype, "IDBTransaction", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBTransaction', "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBTransaction'].prototype, "IDBTransaction", "abort", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBTransaction', "commit", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function commit() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBTransaction'].prototype, "IDBTransaction", "commit", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBTransaction', "objectStore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function objectStore() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBTransaction'].prototype, "IDBTransaction", "objectStore", arguments);
  }
}, 'prototype');