// HTMLIFrameElement对象

bodavm.memory.globalobj['HTMLIFrameElement'] = function HTMLIFrameElement() {
  console.log_copy('HTMLIFrameElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLIFrameElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLIFrameElement'], "HTMLIFrameElement");
bodavm.memory.globalobj['HTMLIFrameElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLIFrameElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "src_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "srcdoc", {
  configurable: true,
  enumerable: true,
  get: function srcdoc() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "srcdoc_get", arguments);
  },
  set: function srcdoc() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "srcdoc_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "sandbox", {
  configurable: true,
  enumerable: true,
  get: function sandbox() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "sandbox_get", arguments);
  },
  set: function sandbox() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "sandbox_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "allowFullscreen", {
  configurable: true,
  enumerable: true,
  get: function allowFullscreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "allowFullscreen_get", arguments);
  },
  set: function allowFullscreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "allowFullscreen_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "width_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "height_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "contentDocument", {
  configurable: true,
  enumerable: true,
  get: function contentDocument() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "contentDocument_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "contentWindow", {
  configurable: true,
  enumerable: true,
  get: function contentWindow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "contentWindow_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "referrerPolicy_get", arguments);
  },
  set: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "referrerPolicy_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "csp", {
  configurable: true,
  enumerable: true,
  get: function csp() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "csp_get", arguments);
  },
  set: function csp() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "csp_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "allow", {
  configurable: true,
  enumerable: true,
  get: function allow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "allow_get", arguments);
  },
  set: function allow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "allow_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "featurePolicy", {
  configurable: true,
  enumerable: true,
  get: function featurePolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "featurePolicy_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "align_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "scrolling", {
  configurable: true,
  enumerable: true,
  get: function scrolling() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "scrolling_get", arguments);
  },
  set: function scrolling() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "scrolling_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "frameBorder", {
  configurable: true,
  enumerable: true,
  get: function frameBorder() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "frameBorder_get", arguments);
  },
  set: function frameBorder() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "frameBorder_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "longDesc", {
  configurable: true,
  enumerable: true,
  get: function longDesc() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "longDesc_get", arguments);
  },
  set: function longDesc() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "longDesc_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "marginHeight", {
  configurable: true,
  enumerable: true,
  get: function marginHeight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "marginHeight_get", arguments);
  },
  set: function marginHeight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "marginHeight_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "marginWidth", {
  configurable: true,
  enumerable: true,
  get: function marginWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "marginWidth_get", arguments);
  },
  set: function marginWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "marginWidth_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "getSVGDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSVGDocument() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "getSVGDocument", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "loading", {
  configurable: true,
  enumerable: true,
  get: function loading() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "loading_get", arguments);
  },
  set: function loading() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "loading_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "allowPaymentRequest", {
  configurable: true,
  enumerable: true,
  get: function allowPaymentRequest() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "allowPaymentRequest_get", arguments);
  },
  set: function allowPaymentRequest() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "allowPaymentRequest_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLIFrameElement', "credentialless", {
  configurable: true,
  enumerable: true,
  get: function credentialless() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "credentialless_get", arguments);
  },
  set: function credentialless() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLIFrameElement'].prototype, "HTMLIFrameElement", "credentialless_set", arguments);
  }
}, 'prototype');