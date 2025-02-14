// HTMLBodyElement对象

bodavm.memory.globalobj['HTMLBodyElement'] = function HTMLBodyElement() {
  console.log_copy('HTMLBodyElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLBodyElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLBodyElement'], "HTMLBodyElement");
bodavm.memory.globalobj['HTMLBodyElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLBodyElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "text", {
  configurable: true,
  enumerable: true,
  get: function text() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "text_get", arguments);
  },
  set: function text() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "text_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "link", {
  configurable: true,
  enumerable: true,
  get: function link() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "link_get", arguments);
  },
  set: function link() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "link_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "vLink", {
  configurable: true,
  enumerable: true,
  get: function vLink() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "vLink_get", arguments);
  },
  set: function vLink() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "vLink_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "aLink", {
  configurable: true,
  enumerable: true,
  get: function aLink() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "aLink_get", arguments);
  },
  set: function aLink() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "aLink_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "bgColor", {
  configurable: true,
  enumerable: true,
  get: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "bgColor_get", arguments);
  },
  set: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "bgColor_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "background", {
  configurable: true,
  enumerable: true,
  get: function background() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "background_get", arguments);
  },
  set: function background() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "background_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onblur", {
  configurable: true,
  enumerable: true,
  get: function onblur() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onblur_get", arguments);
  },
  set: function onblur() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onblur_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onfocus", {
  configurable: true,
  enumerable: true,
  get: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onfocus_get", arguments);
  },
  set: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onfocus_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onload", {
  configurable: true,
  enumerable: true,
  get: function onload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onload_get", arguments);
  },
  set: function onload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onload_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onresize", {
  configurable: true,
  enumerable: true,
  get: function onresize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onresize_get", arguments);
  },
  set: function onresize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onresize_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onscroll", {
  configurable: true,
  enumerable: true,
  get: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onscroll_get", arguments);
  },
  set: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onscroll_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onafterprint", {
  configurable: true,
  enumerable: true,
  get: function onafterprint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onafterprint_get", arguments);
  },
  set: function onafterprint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onafterprint_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onbeforeprint", {
  configurable: true,
  enumerable: true,
  get: function onbeforeprint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onbeforeprint_get", arguments);
  },
  set: function onbeforeprint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onbeforeprint_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onbeforeunload", {
  configurable: true,
  enumerable: true,
  get: function onbeforeunload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onbeforeunload_get", arguments);
  },
  set: function onbeforeunload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onbeforeunload_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onhashchange", {
  configurable: true,
  enumerable: true,
  get: function onhashchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onhashchange_get", arguments);
  },
  set: function onhashchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onhashchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onlanguagechange", {
  configurable: true,
  enumerable: true,
  get: function onlanguagechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onlanguagechange_get", arguments);
  },
  set: function onlanguagechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onlanguagechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onmessage_get", arguments);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onmessage_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onmessageerror", {
  configurable: true,
  enumerable: true,
  get: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onmessageerror_get", arguments);
  },
  set: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onmessageerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onoffline", {
  configurable: true,
  enumerable: true,
  get: function onoffline() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onoffline_get", arguments);
  },
  set: function onoffline() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onoffline_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "ononline", {
  configurable: true,
  enumerable: true,
  get: function ononline() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "ononline_get", arguments);
  },
  set: function ononline() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "ononline_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onpagehide", {
  configurable: true,
  enumerable: true,
  get: function onpagehide() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onpagehide_get", arguments);
  },
  set: function onpagehide() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onpagehide_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onpageshow", {
  configurable: true,
  enumerable: true,
  get: function onpageshow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onpageshow_get", arguments);
  },
  set: function onpageshow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onpageshow_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onpopstate", {
  configurable: true,
  enumerable: true,
  get: function onpopstate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onpopstate_get", arguments);
  },
  set: function onpopstate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onpopstate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onrejectionhandled", {
  configurable: true,
  enumerable: true,
  get: function onrejectionhandled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onrejectionhandled_get", arguments);
  },
  set: function onrejectionhandled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onrejectionhandled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onstorage", {
  configurable: true,
  enumerable: true,
  get: function onstorage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onstorage_get", arguments);
  },
  set: function onstorage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onstorage_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onunhandledrejection", {
  configurable: true,
  enumerable: true,
  get: function onunhandledrejection() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onunhandledrejection_get", arguments);
  },
  set: function onunhandledrejection() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onunhandledrejection_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLBodyElement', "onunload", {
  configurable: true,
  enumerable: true,
  get: function onunload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onunload_get", arguments);
  },
  set: function onunload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLBodyElement'].prototype, "HTMLBodyElement", "onunload_set", arguments);
  }
}, 'prototype');