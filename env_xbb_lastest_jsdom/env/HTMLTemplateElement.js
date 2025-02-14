// HTMLTemplateElement对象

bodavm.memory.globalobj['HTMLTemplateElement'] = function HTMLTemplateElement() {
  console.log_copy('HTMLTemplateElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLTemplateElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLTemplateElement'], "HTMLTemplateElement");
bodavm.memory.globalobj['HTMLTemplateElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLTemplateElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLTemplateElement', "content", {
  configurable: true,
  enumerable: true,
  get: function content() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTemplateElement'].prototype, "HTMLTemplateElement", "content_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTemplateElement', "shadowRoot", {
  configurable: true,
  enumerable: true,
  get: function shadowRoot() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTemplateElement'].prototype, "HTMLTemplateElement", "shadowRoot_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTemplateElement', "shadowRootMode", {
  configurable: true,
  enumerable: true,
  get: function shadowRootMode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTemplateElement'].prototype, "HTMLTemplateElement", "shadowRootMode_get", arguments);
  },
  set: function shadowRootMode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTemplateElement'].prototype, "HTMLTemplateElement", "shadowRootMode_set", arguments);
  }
}, 'prototype');