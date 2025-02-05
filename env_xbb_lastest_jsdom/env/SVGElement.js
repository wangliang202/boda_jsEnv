// SVGElement对象

bodavm.memory.globalobj['SVGElement'] = function SVGElement() {
  console.log_copy('SVGElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGElement'], "SVGElement");
bodavm.memory.globalobj['SVGElement'].prototype.__proto__ = bodavm.memory.globalobj['Element'].prototype;
bodavm.memory.globalobj['SVGElement'].__proto__ = bodavm.memory.globalobj['Element'];
bodavm.toolsFunc.defineProperty('SVGElement', "className", {
  configurable: true,
  enumerable: true,
  get: function className() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "className_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "ownerSVGElement", {
  configurable: true,
  enumerable: true,
  get: function ownerSVGElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ownerSVGElement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "viewportElement", {
  configurable: true,
  enumerable: true,
  get: function viewportElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "viewportElement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onbeforexrselect", {
  configurable: true,
  enumerable: true,
  get: function onbeforexrselect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onbeforexrselect_get", arguments);
  },
  set: function onbeforexrselect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onbeforexrselect_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onabort_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onbeforeinput", {
  configurable: true,
  enumerable: true,
  get: function onbeforeinput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onbeforeinput_get", arguments);
  },
  set: function onbeforeinput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onbeforeinput_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onblur", {
  configurable: true,
  enumerable: true,
  get: function onblur() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onblur_get", arguments);
  },
  set: function onblur() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onblur_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "oncancel", {
  configurable: true,
  enumerable: true,
  get: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncancel_get", arguments);
  },
  set: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncancel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "oncanplay", {
  configurable: true,
  enumerable: true,
  get: function oncanplay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncanplay_get", arguments);
  },
  set: function oncanplay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncanplay_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "oncanplaythrough", {
  configurable: true,
  enumerable: true,
  get: function oncanplaythrough() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncanplaythrough_get", arguments);
  },
  set: function oncanplaythrough() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncanplaythrough_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onclick", {
  configurable: true,
  enumerable: true,
  get: function onclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onclick_get", arguments);
  },
  set: function onclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onclick_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onclose", {
  configurable: true,
  enumerable: true,
  get: function onclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onclose_get", arguments);
  },
  set: function onclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onclose_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "oncontextlost", {
  configurable: true,
  enumerable: true,
  get: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncontextlost_get", arguments);
  },
  set: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncontextlost_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "oncontextmenu", {
  configurable: true,
  enumerable: true,
  get: function oncontextmenu() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncontextmenu_get", arguments);
  },
  set: function oncontextmenu() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncontextmenu_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "oncontextrestored", {
  configurable: true,
  enumerable: true,
  get: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncontextrestored_get", arguments);
  },
  set: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncontextrestored_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "oncuechange", {
  configurable: true,
  enumerable: true,
  get: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncuechange_get", arguments);
  },
  set: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncuechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "ondblclick", {
  configurable: true,
  enumerable: true,
  get: function ondblclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ondblclick_get", arguments);
  },
  set: function ondblclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ondblclick_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "ondrag", {
  configurable: true,
  enumerable: true,
  get: function ondrag() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ondrag_get", arguments);
  },
  set: function ondrag() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ondrag_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "ondragend", {
  configurable: true,
  enumerable: true,
  get: function ondragend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ondragend_get", arguments);
  },
  set: function ondragend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ondragend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "ondragenter", {
  configurable: true,
  enumerable: true,
  get: function ondragenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ondragenter_get", arguments);
  },
  set: function ondragenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ondragenter_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "ondragleave", {
  configurable: true,
  enumerable: true,
  get: function ondragleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ondragleave_get", arguments);
  },
  set: function ondragleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ondragleave_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "ondragover", {
  configurable: true,
  enumerable: true,
  get: function ondragover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ondragover_get", arguments);
  },
  set: function ondragover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ondragover_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "ondragstart", {
  configurable: true,
  enumerable: true,
  get: function ondragstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ondragstart_get", arguments);
  },
  set: function ondragstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ondragstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "ondrop", {
  configurable: true,
  enumerable: true,
  get: function ondrop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ondrop_get", arguments);
  },
  set: function ondrop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ondrop_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "ondurationchange", {
  configurable: true,
  enumerable: true,
  get: function ondurationchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ondurationchange_get", arguments);
  },
  set: function ondurationchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ondurationchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onemptied", {
  configurable: true,
  enumerable: true,
  get: function onemptied() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onemptied_get", arguments);
  },
  set: function onemptied() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onemptied_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onended", {
  configurable: true,
  enumerable: true,
  get: function onended() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onended_get", arguments);
  },
  set: function onended() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onended_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onfocus", {
  configurable: true,
  enumerable: true,
  get: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onfocus_get", arguments);
  },
  set: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onfocus_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onformdata", {
  configurable: true,
  enumerable: true,
  get: function onformdata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onformdata_get", arguments);
  },
  set: function onformdata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onformdata_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "oninput", {
  configurable: true,
  enumerable: true,
  get: function oninput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oninput_get", arguments);
  },
  set: function oninput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oninput_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "oninvalid", {
  configurable: true,
  enumerable: true,
  get: function oninvalid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oninvalid_get", arguments);
  },
  set: function oninvalid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oninvalid_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onkeydown", {
  configurable: true,
  enumerable: true,
  get: function onkeydown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onkeydown_get", arguments);
  },
  set: function onkeydown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onkeydown_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onkeypress", {
  configurable: true,
  enumerable: true,
  get: function onkeypress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onkeypress_get", arguments);
  },
  set: function onkeypress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onkeypress_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onkeyup", {
  configurable: true,
  enumerable: true,
  get: function onkeyup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onkeyup_get", arguments);
  },
  set: function onkeyup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onkeyup_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onload", {
  configurable: true,
  enumerable: true,
  get: function onload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onload_get", arguments);
  },
  set: function onload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onload_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onloadeddata", {
  configurable: true,
  enumerable: true,
  get: function onloadeddata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onloadeddata_get", arguments);
  },
  set: function onloadeddata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onloadeddata_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onloadedmetadata", {
  configurable: true,
  enumerable: true,
  get: function onloadedmetadata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onloadedmetadata_get", arguments);
  },
  set: function onloadedmetadata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onloadedmetadata_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onloadstart", {
  configurable: true,
  enumerable: true,
  get: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onloadstart_get", arguments);
  },
  set: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onloadstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onmousedown", {
  configurable: true,
  enumerable: true,
  get: function onmousedown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onmousedown_get", arguments);
  },
  set: function onmousedown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onmousedown_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onmouseenter", {
  configurable: true,
  enumerable: true,
  get: function onmouseenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onmouseenter_get", arguments);
  },
  set: function onmouseenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onmouseenter_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onmouseleave", {
  configurable: true,
  enumerable: true,
  get: function onmouseleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onmouseleave_get", arguments);
  },
  set: function onmouseleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onmouseleave_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onmousemove", {
  configurable: true,
  enumerable: true,
  get: function onmousemove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onmousemove_get", arguments);
  },
  set: function onmousemove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onmousemove_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onmouseout", {
  configurable: true,
  enumerable: true,
  get: function onmouseout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onmouseout_get", arguments);
  },
  set: function onmouseout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onmouseout_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onmouseover", {
  configurable: true,
  enumerable: true,
  get: function onmouseover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onmouseover_get", arguments);
  },
  set: function onmouseover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onmouseover_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onmouseup", {
  configurable: true,
  enumerable: true,
  get: function onmouseup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onmouseup_get", arguments);
  },
  set: function onmouseup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onmouseup_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onmousewheel", {
  configurable: true,
  enumerable: true,
  get: function onmousewheel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onmousewheel_get", arguments);
  },
  set: function onmousewheel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onmousewheel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onpause", {
  configurable: true,
  enumerable: true,
  get: function onpause() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpause_get", arguments);
  },
  set: function onpause() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpause_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onplay", {
  configurable: true,
  enumerable: true,
  get: function onplay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onplay_get", arguments);
  },
  set: function onplay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onplay_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onplaying", {
  configurable: true,
  enumerable: true,
  get: function onplaying() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onplaying_get", arguments);
  },
  set: function onplaying() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onplaying_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onprogress", {
  configurable: true,
  enumerable: true,
  get: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onprogress_get", arguments);
  },
  set: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onprogress_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onratechange", {
  configurable: true,
  enumerable: true,
  get: function onratechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onratechange_get", arguments);
  },
  set: function onratechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onratechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onreset", {
  configurable: true,
  enumerable: true,
  get: function onreset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onreset_get", arguments);
  },
  set: function onreset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onreset_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onresize", {
  configurable: true,
  enumerable: true,
  get: function onresize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onresize_get", arguments);
  },
  set: function onresize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onresize_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onscroll", {
  configurable: true,
  enumerable: true,
  get: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onscroll_get", arguments);
  },
  set: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onscroll_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onsecuritypolicyviolation", {
  configurable: true,
  enumerable: true,
  get: function onsecuritypolicyviolation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onsecuritypolicyviolation_get", arguments);
  },
  set: function onsecuritypolicyviolation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onsecuritypolicyviolation_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onseeked", {
  configurable: true,
  enumerable: true,
  get: function onseeked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onseeked_get", arguments);
  },
  set: function onseeked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onseeked_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onseeking", {
  configurable: true,
  enumerable: true,
  get: function onseeking() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onseeking_get", arguments);
  },
  set: function onseeking() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onseeking_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onselect", {
  configurable: true,
  enumerable: true,
  get: function onselect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onselect_get", arguments);
  },
  set: function onselect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onselect_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onslotchange", {
  configurable: true,
  enumerable: true,
  get: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onslotchange_get", arguments);
  },
  set: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onslotchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onstalled", {
  configurable: true,
  enumerable: true,
  get: function onstalled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onstalled_get", arguments);
  },
  set: function onstalled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onstalled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onsubmit", {
  configurable: true,
  enumerable: true,
  get: function onsubmit() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onsubmit_get", arguments);
  },
  set: function onsubmit() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onsubmit_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onsuspend", {
  configurable: true,
  enumerable: true,
  get: function onsuspend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onsuspend_get", arguments);
  },
  set: function onsuspend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onsuspend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "ontimeupdate", {
  configurable: true,
  enumerable: true,
  get: function ontimeupdate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ontimeupdate_get", arguments);
  },
  set: function ontimeupdate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ontimeupdate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "ontoggle", {
  configurable: true,
  enumerable: true,
  get: function ontoggle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ontoggle_get", arguments);
  },
  set: function ontoggle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ontoggle_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onvolumechange", {
  configurable: true,
  enumerable: true,
  get: function onvolumechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onvolumechange_get", arguments);
  },
  set: function onvolumechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onvolumechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onwaiting", {
  configurable: true,
  enumerable: true,
  get: function onwaiting() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onwaiting_get", arguments);
  },
  set: function onwaiting() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onwaiting_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onwebkitanimationend", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onwebkitanimationend_get", arguments);
  },
  set: function onwebkitanimationend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onwebkitanimationend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onwebkitanimationiteration", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onwebkitanimationiteration_get", arguments);
  },
  set: function onwebkitanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onwebkitanimationiteration_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onwebkitanimationstart", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onwebkitanimationstart_get", arguments);
  },
  set: function onwebkitanimationstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onwebkitanimationstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onwebkittransitionend", {
  configurable: true,
  enumerable: true,
  get: function onwebkittransitionend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onwebkittransitionend_get", arguments);
  },
  set: function onwebkittransitionend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onwebkittransitionend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onwheel", {
  configurable: true,
  enumerable: true,
  get: function onwheel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onwheel_get", arguments);
  },
  set: function onwheel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onwheel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onauxclick", {
  configurable: true,
  enumerable: true,
  get: function onauxclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onauxclick_get", arguments);
  },
  set: function onauxclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onauxclick_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "ongotpointercapture", {
  configurable: true,
  enumerable: true,
  get: function ongotpointercapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ongotpointercapture_get", arguments);
  },
  set: function ongotpointercapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ongotpointercapture_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onlostpointercapture", {
  configurable: true,
  enumerable: true,
  get: function onlostpointercapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onlostpointercapture_get", arguments);
  },
  set: function onlostpointercapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onlostpointercapture_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onpointerdown", {
  configurable: true,
  enumerable: true,
  get: function onpointerdown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpointerdown_get", arguments);
  },
  set: function onpointerdown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpointerdown_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onpointermove", {
  configurable: true,
  enumerable: true,
  get: function onpointermove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpointermove_get", arguments);
  },
  set: function onpointermove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpointermove_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onpointerrawupdate", {
  configurable: true,
  enumerable: true,
  get: function onpointerrawupdate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpointerrawupdate_get", arguments);
  },
  set: function onpointerrawupdate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpointerrawupdate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onpointerup", {
  configurable: true,
  enumerable: true,
  get: function onpointerup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpointerup_get", arguments);
  },
  set: function onpointerup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpointerup_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onpointercancel", {
  configurable: true,
  enumerable: true,
  get: function onpointercancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpointercancel_get", arguments);
  },
  set: function onpointercancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpointercancel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onpointerover", {
  configurable: true,
  enumerable: true,
  get: function onpointerover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpointerover_get", arguments);
  },
  set: function onpointerover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpointerover_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onpointerout", {
  configurable: true,
  enumerable: true,
  get: function onpointerout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpointerout_get", arguments);
  },
  set: function onpointerout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpointerout_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onpointerenter", {
  configurable: true,
  enumerable: true,
  get: function onpointerenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpointerenter_get", arguments);
  },
  set: function onpointerenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpointerenter_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onpointerleave", {
  configurable: true,
  enumerable: true,
  get: function onpointerleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpointerleave_get", arguments);
  },
  set: function onpointerleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpointerleave_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onselectstart", {
  configurable: true,
  enumerable: true,
  get: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onselectstart_get", arguments);
  },
  set: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onselectstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onselectionchange", {
  configurable: true,
  enumerable: true,
  get: function onselectionchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onselectionchange_get", arguments);
  },
  set: function onselectionchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onselectionchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onanimationend", {
  configurable: true,
  enumerable: true,
  get: function onanimationend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onanimationend_get", arguments);
  },
  set: function onanimationend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onanimationend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onanimationiteration", {
  configurable: true,
  enumerable: true,
  get: function onanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onanimationiteration_get", arguments);
  },
  set: function onanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onanimationiteration_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onanimationstart", {
  configurable: true,
  enumerable: true,
  get: function onanimationstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onanimationstart_get", arguments);
  },
  set: function onanimationstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onanimationstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "ontransitionrun", {
  configurable: true,
  enumerable: true,
  get: function ontransitionrun() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ontransitionrun_get", arguments);
  },
  set: function ontransitionrun() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ontransitionrun_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "ontransitionstart", {
  configurable: true,
  enumerable: true,
  get: function ontransitionstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ontransitionstart_get", arguments);
  },
  set: function ontransitionstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ontransitionstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "ontransitionend", {
  configurable: true,
  enumerable: true,
  get: function ontransitionend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ontransitionend_get", arguments);
  },
  set: function ontransitionend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ontransitionend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "ontransitioncancel", {
  configurable: true,
  enumerable: true,
  get: function ontransitioncancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ontransitioncancel_get", arguments);
  },
  set: function ontransitioncancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "ontransitioncancel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "oncopy", {
  configurable: true,
  enumerable: true,
  get: function oncopy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncopy_get", arguments);
  },
  set: function oncopy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncopy_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "oncut", {
  configurable: true,
  enumerable: true,
  get: function oncut() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncut_get", arguments);
  },
  set: function oncut() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncut_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onpaste", {
  configurable: true,
  enumerable: true,
  get: function onpaste() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpaste_get", arguments);
  },
  set: function onpaste() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onpaste_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "dataset", {
  configurable: true,
  enumerable: true,
  get: function dataset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "dataset_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "nonce", {
  configurable: true,
  enumerable: true,
  get: function nonce() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "nonce_get", arguments);
  },
  set: function nonce() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "nonce_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "autofocus", {
  configurable: true,
  enumerable: true,
  get: function autofocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "autofocus_get", arguments);
  },
  set: function autofocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "autofocus_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "tabIndex", {
  configurable: true,
  enumerable: true,
  get: function tabIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "tabIndex_get", arguments);
  },
  set: function tabIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "tabIndex_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "style", {
  configurable: true,
  enumerable: true,
  get: function style() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "style_get", arguments);
  },
  set: function style() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "style_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "attributeStyleMap", {
  configurable: true,
  enumerable: true,
  get: function attributeStyleMap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "attributeStyleMap_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "blur", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blur() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "blur", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "focus", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function focus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "focus", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "oncontentvisibilityautostatechange", {
  configurable: true,
  enumerable: true,
  get: function oncontentvisibilityautostatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncontentvisibilityautostatechange_get", arguments);
  },
  set: function oncontentvisibilityautostatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "oncontentvisibilityautostatechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGElement', "onbeforematch", {
  configurable: true,
  enumerable: true,
  get: function onbeforematch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onbeforematch_get", arguments);
  },
  set: function onbeforematch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGElement'].prototype, "SVGElement", "onbeforematch_set", arguments);
  }
}, 'prototype');