// HTMLAreaElement对象

bodavm.memory.globalobj['HTMLAreaElement'] = function HTMLAreaElement() {
  console.log_copy('HTMLAreaElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLAreaElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLAreaElement'], "HTMLAreaElement");
bodavm.memory.globalobj['HTMLAreaElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLAreaElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "alt", {
  configurable: true,
  enumerable: true,
  get: function alt() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "alt_get", arguments);
  },
  set: function alt() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "alt_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "coords", {
  configurable: true,
  enumerable: true,
  get: function coords() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "coords_get", arguments);
  },
  set: function coords() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "coords_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "download", {
  configurable: true,
  enumerable: true,
  get: function download() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "download_get", arguments);
  },
  set: function download() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "download_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "shape", {
  configurable: true,
  enumerable: true,
  get: function shape() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "shape_get", arguments);
  },
  set: function shape() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "shape_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "target_get", arguments);
  },
  set: function target() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "target_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "ping", {
  configurable: true,
  enumerable: true,
  get: function ping() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "ping_get", arguments);
  },
  set: function ping() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "ping_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "rel", {
  configurable: true,
  enumerable: true,
  get: function rel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "rel_get", arguments);
  },
  set: function rel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "rel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "relList", {
  configurable: true,
  enumerable: true,
  get: function relList() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "relList_get", arguments);
  },
  set: function relList() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "relList_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "referrerPolicy_get", arguments);
  },
  set: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "referrerPolicy_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "noHref", {
  configurable: true,
  enumerable: true,
  get: function noHref() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "noHref_get", arguments);
  },
  set: function noHref() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "noHref_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "origin", {
  configurable: true,
  enumerable: true,
  get: function origin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "origin_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "protocol", {
  configurable: true,
  enumerable: true,
  get: function protocol() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "protocol_get", arguments);
  },
  set: function protocol() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "protocol_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "username", {
  configurable: true,
  enumerable: true,
  get: function username() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "username_get", arguments);
  },
  set: function username() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "username_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "password", {
  configurable: true,
  enumerable: true,
  get: function password() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "password_get", arguments);
  },
  set: function password() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "password_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "host", {
  configurable: true,
  enumerable: true,
  get: function host() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "host_get", arguments);
  },
  set: function host() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "host_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "hostname", {
  configurable: true,
  enumerable: true,
  get: function hostname() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "hostname_get", arguments);
  },
  set: function hostname() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "hostname_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "port", {
  configurable: true,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "port_get", arguments);
  },
  set: function port() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "port_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "pathname", {
  configurable: true,
  enumerable: true,
  get: function pathname() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "pathname_get", arguments);
  },
  set: function pathname() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "pathname_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "search", {
  configurable: true,
  enumerable: true,
  get: function search() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "search_get", arguments);
  },
  set: function search() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "search_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "hash", {
  configurable: true,
  enumerable: true,
  get: function hash() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "hash_get", arguments);
  },
  set: function hash() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "hash_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "href_get", arguments);
  },
  set: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "href_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLAreaElement', "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAreaElement'].prototype, "HTMLAreaElement", "toString", arguments);
  }
}, 'prototype');