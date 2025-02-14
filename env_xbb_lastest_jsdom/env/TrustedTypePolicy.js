// TrustedTypePolicy对象

bodavm.memory.globalobj['TrustedTypePolicy'] = function TrustedTypePolicy() {
  console.log_copy('TrustedTypePolicy 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof TrustedTypePolicy)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TrustedTypePolicy'], "TrustedTypePolicy");
bodavm.toolsFunc.defineProperty('TrustedTypePolicy', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedTypePolicy'].prototype, "TrustedTypePolicy", "name_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TrustedTypePolicy', "createHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createHTML() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedTypePolicy'].prototype, "TrustedTypePolicy", "createHTML", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TrustedTypePolicy', "createScript", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createScript() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedTypePolicy'].prototype, "TrustedTypePolicy", "createScript", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TrustedTypePolicy', "createScriptURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createScriptURL() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedTypePolicy'].prototype, "TrustedTypePolicy", "createScriptURL", arguments);
  }
}, 'prototype');