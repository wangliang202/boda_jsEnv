// IDBIndex对象

bodavm.memory.globalobj['IDBIndex'] = function IDBIndex() {
  console.log_copy('IDBIndex 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof IDBIndex)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['IDBIndex'], "IDBIndex");
bodavm.toolsFunc.defineProperty('IDBIndex', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBIndex'].prototype, "IDBIndex", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBIndex'].prototype, "IDBIndex", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBIndex', "objectStore", {
  configurable: true,
  enumerable: true,
  get: function objectStore() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBIndex'].prototype, "IDBIndex", "objectStore_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBIndex', "keyPath", {
  configurable: true,
  enumerable: true,
  get: function keyPath() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBIndex'].prototype, "IDBIndex", "keyPath_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBIndex', "multiEntry", {
  configurable: true,
  enumerable: true,
  get: function multiEntry() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBIndex'].prototype, "IDBIndex", "multiEntry_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBIndex', "unique", {
  configurable: true,
  enumerable: true,
  get: function unique() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBIndex'].prototype, "IDBIndex", "unique_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBIndex', "count", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function count() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBIndex'].prototype, "IDBIndex", "count", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBIndex', "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBIndex'].prototype, "IDBIndex", "get", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBIndex', "getAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBIndex'].prototype, "IDBIndex", "getAll", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBIndex', "getAllKeys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAllKeys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBIndex'].prototype, "IDBIndex", "getAllKeys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBIndex', "getKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBIndex'].prototype, "IDBIndex", "getKey", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBIndex', "openCursor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function openCursor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBIndex'].prototype, "IDBIndex", "openCursor", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBIndex', "openKeyCursor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function openKeyCursor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBIndex'].prototype, "IDBIndex", "openKeyCursor", arguments);
  }
}, 'prototype');