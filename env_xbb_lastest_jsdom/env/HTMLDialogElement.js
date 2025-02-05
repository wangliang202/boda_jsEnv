// HTMLDialogElement对象

bodavm.memory.globalobj['HTMLDialogElement'] = function HTMLDialogElement() {
  console.log_copy('HTMLDialogElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLDialogElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLDialogElement'], "HTMLDialogElement");
bodavm.memory.globalobj['HTMLDialogElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLDialogElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLDialogElement', "open", {
  configurable: true,
  enumerable: true,
  get: function open() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLDialogElement'].prototype, "HTMLDialogElement", "open_get", arguments);
  },
  set: function open() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLDialogElement'].prototype, "HTMLDialogElement", "open_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLDialogElement', "returnValue", {
  configurable: true,
  enumerable: true,
  get: function returnValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLDialogElement'].prototype, "HTMLDialogElement", "returnValue_get", arguments);
  },
  set: function returnValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLDialogElement'].prototype, "HTMLDialogElement", "returnValue_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLDialogElement', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLDialogElement'].prototype, "HTMLDialogElement", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLDialogElement', "show", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function show() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLDialogElement'].prototype, "HTMLDialogElement", "show", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLDialogElement', "showModal", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function showModal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLDialogElement'].prototype, "HTMLDialogElement", "showModal", arguments);
  }
}, 'prototype');