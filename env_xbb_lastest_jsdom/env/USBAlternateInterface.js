// USBAlternateInterface对象

bodavm.memory.globalobj['USBAlternateInterface'] = function USBAlternateInterface() {
  console.log_copy('USBAlternateInterface 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof USBAlternateInterface)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBAlternateInterface': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['USBAlternateInterface'], "USBAlternateInterface");
bodavm.toolsFunc.defineProperty('USBAlternateInterface', "alternateSetting", {
  configurable: true,
  enumerable: true,
  get: function alternateSetting() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBAlternateInterface'].prototype, "USBAlternateInterface", "alternateSetting_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBAlternateInterface', "interfaceClass", {
  configurable: true,
  enumerable: true,
  get: function interfaceClass() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBAlternateInterface'].prototype, "USBAlternateInterface", "interfaceClass_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBAlternateInterface', "interfaceSubclass", {
  configurable: true,
  enumerable: true,
  get: function interfaceSubclass() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBAlternateInterface'].prototype, "USBAlternateInterface", "interfaceSubclass_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBAlternateInterface', "interfaceProtocol", {
  configurable: true,
  enumerable: true,
  get: function interfaceProtocol() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBAlternateInterface'].prototype, "USBAlternateInterface", "interfaceProtocol_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBAlternateInterface', "interfaceName", {
  configurable: true,
  enumerable: true,
  get: function interfaceName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBAlternateInterface'].prototype, "USBAlternateInterface", "interfaceName_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBAlternateInterface', "endpoints", {
  configurable: true,
  enumerable: true,
  get: function endpoints() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBAlternateInterface'].prototype, "USBAlternateInterface", "endpoints_get", arguments);
  },
  set: undefined
}, 'prototype');