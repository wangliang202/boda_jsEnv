// CSSUnparsedValue对象

bodavm.memory.globalobj['CSSUnparsedValue'] = function CSSUnparsedValue() {
  console.log_copy('CSSUnparsedValue 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSUnparsedValue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSUnparsedValue': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSUnparsedValue'], "CSSUnparsedValue");
bodavm.memory.globalobj['CSSUnparsedValue'].prototype.__proto__ = bodavm.memory.globalobj['CSSStyleValue'].prototype;
bodavm.memory.globalobj['CSSUnparsedValue'].__proto__ = bodavm.memory.globalobj['CSSStyleValue'];
bodavm.toolsFunc.defineProperty('CSSUnparsedValue', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSUnparsedValue'].prototype, "CSSUnparsedValue", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSUnparsedValue', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSUnparsedValue'].prototype, "CSSUnparsedValue", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSUnparsedValue', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSUnparsedValue'].prototype, "CSSUnparsedValue", "values", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSUnparsedValue', "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSUnparsedValue'].prototype, "CSSUnparsedValue", "forEach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSUnparsedValue', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSUnparsedValue'].prototype, "CSSUnparsedValue", "length_get", arguments);
  },
  set: undefined
}, 'prototype');