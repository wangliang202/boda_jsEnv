// HTMLDataListElement对象

bodavm.memory.globalobj['HTMLDataListElement'] = function HTMLDataListElement() {
  console.log_copy('HTMLDataListElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLDataListElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLDataListElement'], "HTMLDataListElement");
bodavm.memory.globalobj['HTMLDataListElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLDataListElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLDataListElement', "options", {
  configurable: true,
  enumerable: true,
  get: function options() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLDataListElement'].prototype, "HTMLDataListElement", "options_get", arguments);
  },
  set: undefined
}, 'prototype');