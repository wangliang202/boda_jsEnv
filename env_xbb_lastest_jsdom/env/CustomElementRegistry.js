// CustomElementRegistry对象

bodavm.memory.globalobj['CustomElementRegistry'] = function CustomElementRegistry() {
  console.log_copy('CustomElementRegistry 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CustomElementRegistry)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CustomElementRegistry'], "CustomElementRegistry");
bodavm.toolsFunc.defineProperty('CustomElementRegistry', "define", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function define() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomElementRegistry'].prototype, "CustomElementRegistry", "define", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CustomElementRegistry', "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomElementRegistry'].prototype, "CustomElementRegistry", "get", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CustomElementRegistry', "upgrade", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function upgrade() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomElementRegistry'].prototype, "CustomElementRegistry", "upgrade", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CustomElementRegistry', "whenDefined", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function whenDefined() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomElementRegistry'].prototype, "CustomElementRegistry", "whenDefined", arguments);
  }
}, 'prototype');