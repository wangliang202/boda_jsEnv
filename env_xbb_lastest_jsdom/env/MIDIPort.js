// MIDIPort对象

bodavm.memory.globalobj['MIDIPort'] = function MIDIPort() {
  console.log_copy('MIDIPort 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MIDIPort)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MIDIPort'], "MIDIPort");
bodavm.memory.globalobj['MIDIPort'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['MIDIPort'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('MIDIPort', "connection", {
  configurable: true,
  enumerable: true,
  get: function connection() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIPort'].prototype, "MIDIPort", "connection_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIPort', "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIPort'].prototype, "MIDIPort", "id_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIPort', "manufacturer", {
  configurable: true,
  enumerable: true,
  get: function manufacturer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIPort'].prototype, "MIDIPort", "manufacturer_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIPort', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIPort'].prototype, "MIDIPort", "name_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIPort', "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIPort'].prototype, "MIDIPort", "state_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIPort', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIPort'].prototype, "MIDIPort", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIPort', "version", {
  configurable: true,
  enumerable: true,
  get: function version() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIPort'].prototype, "MIDIPort", "version_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIPort', "onstatechange", {
  configurable: true,
  enumerable: true,
  get: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIPort'].prototype, "MIDIPort", "onstatechange_get", arguments);
  },
  set: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIPort'].prototype, "MIDIPort", "onstatechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIPort', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIPort'].prototype, "MIDIPort", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIPort', "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function open() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIPort'].prototype, "MIDIPort", "open", arguments);
  }
}, 'prototype');