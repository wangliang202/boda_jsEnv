// HTMLObjectElement对象

bodavm.memory.globalobj['HTMLObjectElement'] = function HTMLObjectElement() {
  console.log_copy('HTMLObjectElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLObjectElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLObjectElement'], "HTMLObjectElement");
bodavm.memory.globalobj['HTMLObjectElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLObjectElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "data_get", arguments);
  },
  set: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "data_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "type_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "useMap", {
  configurable: true,
  enumerable: true,
  get: function useMap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "useMap_get", arguments);
  },
  set: function useMap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "useMap_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "form_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "width_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "height_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "contentDocument", {
  configurable: true,
  enumerable: true,
  get: function contentDocument() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "contentDocument_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "contentWindow", {
  configurable: true,
  enumerable: true,
  get: function contentWindow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "contentWindow_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "willValidate", {
  configurable: true,
  enumerable: true,
  get: function willValidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "willValidate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "validity", {
  configurable: true,
  enumerable: true,
  get: function validity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "validity_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "validationMessage", {
  configurable: true,
  enumerable: true,
  get: function validationMessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "validationMessage_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "align_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "archive", {
  configurable: true,
  enumerable: true,
  get: function archive() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "archive_get", arguments);
  },
  set: function archive() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "archive_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "code", {
  configurable: true,
  enumerable: true,
  get: function code() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "code_get", arguments);
  },
  set: function code() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "code_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "declare", {
  configurable: true,
  enumerable: true,
  get: function declare() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "declare_get", arguments);
  },
  set: function declare() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "declare_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "hspace", {
  configurable: true,
  enumerable: true,
  get: function hspace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "hspace_get", arguments);
  },
  set: function hspace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "hspace_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "standby", {
  configurable: true,
  enumerable: true,
  get: function standby() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "standby_get", arguments);
  },
  set: function standby() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "standby_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "vspace", {
  configurable: true,
  enumerable: true,
  get: function vspace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "vspace_get", arguments);
  },
  set: function vspace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "vspace_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "codeBase", {
  configurable: true,
  enumerable: true,
  get: function codeBase() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "codeBase_get", arguments);
  },
  set: function codeBase() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "codeBase_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "codeType", {
  configurable: true,
  enumerable: true,
  get: function codeType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "codeType_get", arguments);
  },
  set: function codeType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "codeType_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "border", {
  configurable: true,
  enumerable: true,
  get: function border() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "border_get", arguments);
  },
  set: function border() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "border_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "checkValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "getSVGDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSVGDocument() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "getSVGDocument", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reportValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "reportValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLObjectElement', "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCustomValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLObjectElement'].prototype, "HTMLObjectElement", "setCustomValidity", arguments);
  }
}, 'prototype');