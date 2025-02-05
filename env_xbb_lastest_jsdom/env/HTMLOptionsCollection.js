// HTMLOptionsCollection对象

bodavm.memory.globalobj['HTMLOptionsCollection'] = function HTMLOptionsCollection() {
  console.log_copy('HTMLOptionsCollection 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLOptionsCollection)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLOptionsCollection'], "HTMLOptionsCollection");
bodavm.memory.globalobj['HTMLOptionsCollection'].prototype.__proto__ = bodavm.memory.globalobj['HTMLCollection'].prototype;
bodavm.memory.globalobj['HTMLOptionsCollection'].__proto__ = bodavm.memory.globalobj['HTMLCollection'];
bodavm.toolsFunc.defineProperty('HTMLOptionsCollection', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionsCollection'].prototype, "HTMLOptionsCollection", "length_get", arguments);
  },
  set: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionsCollection'].prototype, "HTMLOptionsCollection", "length_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOptionsCollection', "selectedIndex", {
  configurable: true,
  enumerable: true,
  get: function selectedIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionsCollection'].prototype, "HTMLOptionsCollection", "selectedIndex_get", arguments);
  },
  set: function selectedIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionsCollection'].prototype, "HTMLOptionsCollection", "selectedIndex_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOptionsCollection', "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function add() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionsCollection'].prototype, "HTMLOptionsCollection", "add", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOptionsCollection', "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionsCollection'].prototype, "HTMLOptionsCollection", "remove", arguments);
  }
}, 'prototype');