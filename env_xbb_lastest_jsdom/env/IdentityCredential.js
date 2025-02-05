// IdentityCredential对象

bodavm.memory.globalobj['IdentityCredential'] = function IdentityCredential() {
  console.log_copy('IdentityCredential 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof IdentityCredential)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['IdentityCredential'], "IdentityCredential");
bodavm.memory.globalobj['IdentityCredential'].prototype.__proto__ = bodavm.memory.globalobj['Credential'].prototype;
bodavm.memory.globalobj['IdentityCredential'].__proto__ = bodavm.memory.globalobj['Credential'];
bodavm.toolsFunc.defineProperty('IdentityCredential', "token", {
  configurable: true,
  enumerable: true,
  get: function token() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IdentityCredential'].prototype, "IdentityCredential", "token_get", arguments);
  },
  set: undefined
}, 'prototype');