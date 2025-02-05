// Presentation对象

bodavm.memory.globalobj['Presentation'] = function Presentation() {
  console.log_copy('Presentation 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Presentation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Presentation'], "Presentation");
bodavm.toolsFunc.defineProperty('Presentation', "defaultRequest", {
  configurable: true,
  enumerable: true,
  get: function defaultRequest() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Presentation'].prototype, "Presentation", "defaultRequest_get", arguments);
  },
  set: function defaultRequest() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Presentation'].prototype, "Presentation", "defaultRequest_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Presentation', "receiver", {
  configurable: true,
  enumerable: true,
  get: function receiver() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Presentation'].prototype, "Presentation", "receiver_get", arguments);
  },
  set: undefined
}, 'prototype');