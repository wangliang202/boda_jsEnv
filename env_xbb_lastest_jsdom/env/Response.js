// Response对象

bodavm.memory.globalobj['Response'] = function Response() {
  console.log_copy('Response 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.Response();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Response'], "Response");
bodavm.toolsFunc.defineProperty('Response', "error", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function error() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Response'].undefined, "Response", "error", arguments);
  }
});
bodavm.toolsFunc.defineProperty('Response', "json", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function json() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Response'].undefined, "Response", "json", arguments);
  }
});
bodavm.toolsFunc.defineProperty('Response', "redirect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function redirect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Response'].undefined, "Response", "redirect", arguments);
  }
});
bodavm.toolsFunc.defineProperty('Response', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Response'].prototype, "Response", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Response', "url", {
  configurable: true,
  enumerable: true,
  get: function url() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Response'].prototype, "Response", "url_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Response', "redirected", {
  configurable: true,
  enumerable: true,
  get: function redirected() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Response'].prototype, "Response", "redirected_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Response', "status", {
  configurable: true,
  enumerable: true,
  get: function status() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Response'].prototype, "Response", "status_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Response', "ok", {
  configurable: true,
  enumerable: true,
  get: function ok() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Response'].prototype, "Response", "ok_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Response', "statusText", {
  configurable: true,
  enumerable: true,
  get: function statusText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Response'].prototype, "Response", "statusText_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Response', "headers", {
  configurable: true,
  enumerable: true,
  get: function headers() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Response'].prototype, "Response", "headers_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Response', "body", {
  configurable: true,
  enumerable: true,
  get: function body() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Response'].prototype, "Response", "body_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Response', "bodyUsed", {
  configurable: true,
  enumerable: true,
  get: function bodyUsed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Response'].prototype, "Response", "bodyUsed_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Response', "arrayBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function arrayBuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Response'].prototype, "Response", "arrayBuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Response', "blob", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blob() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Response'].prototype, "Response", "blob", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Response', "clone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clone() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Response'].prototype, "Response", "clone", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Response', "formData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function formData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Response'].prototype, "Response", "formData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Response', "json", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function json() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Response'].prototype, "Response", "json", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Response', "text", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function text() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Response'].prototype, "Response", "text", arguments);
  }
}, 'prototype');