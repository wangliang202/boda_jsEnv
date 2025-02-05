// DocumentType对象

bodavm.memory.globalobj['DocumentType'] = function DocumentType() {
  console.log_copy('DocumentType 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof DocumentType)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DocumentType'], "DocumentType");
bodavm.memory.globalobj['DocumentType'].prototype.__proto__ = bodavm.memory.globalobj['Node'].prototype;
bodavm.memory.globalobj['DocumentType'].__proto__ = bodavm.memory.globalobj['Node'];
bodavm.toolsFunc.defineProperty('DocumentType', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DocumentType'].prototype, "DocumentType", "name_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DocumentType', "publicId", {
  configurable: true,
  enumerable: true,
  get: function publicId() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DocumentType'].prototype, "DocumentType", "publicId_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DocumentType', "systemId", {
  configurable: true,
  enumerable: true,
  get: function systemId() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DocumentType'].prototype, "DocumentType", "systemId_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DocumentType', "after", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function after() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DocumentType'].prototype, "DocumentType", "after", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DocumentType', "before", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function before() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DocumentType'].prototype, "DocumentType", "before", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DocumentType', "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DocumentType'].prototype, "DocumentType", "remove", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DocumentType', "replaceWith", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceWith() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DocumentType'].prototype, "DocumentType", "replaceWith", arguments);
  }
}, 'prototype');