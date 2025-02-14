// HTMLMetaElement对象

bodavm.memory.globalobj['HTMLMetaElement'] = function HTMLMetaElement() {
  console.log_copy('HTMLMetaElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLMetaElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLMetaElement'], "HTMLMetaElement");
bodavm.memory.globalobj['HTMLMetaElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLMetaElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLMetaElement', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMetaElement'].prototype, "HTMLMetaElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMetaElement'].prototype, "HTMLMetaElement", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMetaElement', "httpEquiv", {
  configurable: true,
  enumerable: true,
  get: function httpEquiv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMetaElement'].prototype, "HTMLMetaElement", "httpEquiv_get", arguments);
  },
  set: function httpEquiv() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMetaElement'].prototype, "HTMLMetaElement", "httpEquiv_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMetaElement', "content", {
  configurable: true,
  enumerable: true,
  get: function content() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMetaElement'].prototype, "HTMLMetaElement", "content_get", arguments);
  },
  set: function content() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMetaElement'].prototype, "HTMLMetaElement", "content_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMetaElement', "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMetaElement'].prototype, "HTMLMetaElement", "media_get", arguments);
  },
  set: function media() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMetaElement'].prototype, "HTMLMetaElement", "media_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMetaElement', "scheme", {
  configurable: true,
  enumerable: true,
  get: function scheme() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMetaElement'].prototype, "HTMLMetaElement", "scheme_get", arguments);
  },
  set: function scheme() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMetaElement'].prototype, "HTMLMetaElement", "scheme_set", arguments);
  }
}, 'prototype');