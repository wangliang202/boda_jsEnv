// Element对象

bodavm.memory.globalobj['Element'] = function Element() {
  console.log_copy('Element 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Element)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Element'], "Element");
bodavm.memory.globalobj['Element'].prototype.__proto__ = bodavm.memory.globalobj['Node'].prototype;
bodavm.memory.globalobj['Element'].__proto__ = bodavm.memory.globalobj['Node'];
bodavm.toolsFunc.defineProperty('Element', "namespaceURI", {
  configurable: true,
  enumerable: true,
  get: function namespaceURI() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "namespaceURI_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "prefix", {
  configurable: true,
  enumerable: true,
  get: function prefix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "prefix_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "localName", {
  configurable: true,
  enumerable: true,
  get: function localName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "localName_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "tagName", {
  configurable: true,
  enumerable: true,
  get: function tagName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "tagName_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "id_get", arguments);
  },
  set: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "id_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "className", {
  configurable: true,
  enumerable: true,
  get: function className() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "className_get", arguments);
  },
  set: function className() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "className_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "classList", {
  configurable: true,
  enumerable: true,
  get: function classList() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "classList_get", arguments);
  },
  set: function classList() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "classList_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "slot", {
  configurable: true,
  enumerable: true,
  get: function slot() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "slot_get", arguments);
  },
  set: function slot() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "slot_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "attributes", {
  configurable: true,
  enumerable: true,
  get: function attributes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "attributes_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "shadowRoot", {
  configurable: true,
  enumerable: true,
  get: function shadowRoot() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "shadowRoot_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "part", {
  configurable: true,
  enumerable: true,
  get: function part() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "part_get", arguments);
  },
  set: function part() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "part_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "assignedSlot", {
  configurable: true,
  enumerable: true,
  get: function assignedSlot() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "assignedSlot_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "innerHTML", {
  configurable: true,
  enumerable: true,
  get: function innerHTML() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "innerHTML_get", arguments);
  },
  set: function innerHTML() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "innerHTML_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "outerHTML", {
  configurable: true,
  enumerable: true,
  get: function outerHTML() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "outerHTML_get", arguments);
  },
  set: function outerHTML() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "outerHTML_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "scrollTop", {
  configurable: true,
  enumerable: true,
  get: function scrollTop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "scrollTop_get", arguments);
  },
  set: function scrollTop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "scrollTop_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "scrollLeft", {
  configurable: true,
  enumerable: true,
  get: function scrollLeft() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "scrollLeft_get", arguments);
  },
  set: function scrollLeft() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "scrollLeft_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "scrollWidth", {
  configurable: true,
  enumerable: true,
  get: function scrollWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "scrollWidth_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "scrollHeight", {
  configurable: true,
  enumerable: true,
  get: function scrollHeight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "scrollHeight_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "clientTop", {
  configurable: true,
  enumerable: true,
  get: function clientTop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "clientTop_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "clientLeft", {
  configurable: true,
  enumerable: true,
  get: function clientLeft() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "clientLeft_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "clientWidth", {
  configurable: true,
  enumerable: true,
  get: function clientWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "clientWidth_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "clientHeight", {
  configurable: true,
  enumerable: true,
  get: function clientHeight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "clientHeight_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "onbeforecopy", {
  configurable: true,
  enumerable: true,
  get: function onbeforecopy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "onbeforecopy_get", arguments);
  },
  set: function onbeforecopy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "onbeforecopy_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "onbeforecut", {
  configurable: true,
  enumerable: true,
  get: function onbeforecut() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "onbeforecut_get", arguments);
  },
  set: function onbeforecut() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "onbeforecut_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "onbeforepaste", {
  configurable: true,
  enumerable: true,
  get: function onbeforepaste() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "onbeforepaste_get", arguments);
  },
  set: function onbeforepaste() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "onbeforepaste_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "onsearch", {
  configurable: true,
  enumerable: true,
  get: function onsearch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "onsearch_get", arguments);
  },
  set: function onsearch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "onsearch_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "elementTiming", {
  configurable: true,
  enumerable: true,
  get: function elementTiming() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "elementTiming_get", arguments);
  },
  set: function elementTiming() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "elementTiming_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "onfullscreenchange", {
  configurable: true,
  enumerable: true,
  get: function onfullscreenchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "onfullscreenchange_get", arguments);
  },
  set: function onfullscreenchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "onfullscreenchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "onfullscreenerror", {
  configurable: true,
  enumerable: true,
  get: function onfullscreenerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "onfullscreenerror_get", arguments);
  },
  set: function onfullscreenerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "onfullscreenerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "onwebkitfullscreenchange", {
  configurable: true,
  enumerable: true,
  get: function onwebkitfullscreenchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "onwebkitfullscreenchange_get", arguments);
  },
  set: function onwebkitfullscreenchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "onwebkitfullscreenchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "onwebkitfullscreenerror", {
  configurable: true,
  enumerable: true,
  get: function onwebkitfullscreenerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "onwebkitfullscreenerror_get", arguments);
  },
  set: function onwebkitfullscreenerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "onwebkitfullscreenerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "role", {
  configurable: true,
  enumerable: true,
  get: function role() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "role_get", arguments);
  },
  set: function role() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "role_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaAtomic", {
  configurable: true,
  enumerable: true,
  get: function ariaAtomic() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaAtomic_get", arguments);
  },
  set: function ariaAtomic() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaAtomic_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaAutoComplete", {
  configurable: true,
  enumerable: true,
  get: function ariaAutoComplete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaAutoComplete_get", arguments);
  },
  set: function ariaAutoComplete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaAutoComplete_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaBusy", {
  configurable: true,
  enumerable: true,
  get: function ariaBusy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaBusy_get", arguments);
  },
  set: function ariaBusy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaBusy_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaBrailleLabel", {
  configurable: true,
  enumerable: true,
  get: function ariaBrailleLabel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaBrailleLabel_get", arguments);
  },
  set: function ariaBrailleLabel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaBrailleLabel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaBrailleRoleDescription", {
  configurable: true,
  enumerable: true,
  get: function ariaBrailleRoleDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaBrailleRoleDescription_get", arguments);
  },
  set: function ariaBrailleRoleDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaBrailleRoleDescription_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaChecked", {
  configurable: true,
  enumerable: true,
  get: function ariaChecked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaChecked_get", arguments);
  },
  set: function ariaChecked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaChecked_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaColCount", {
  configurable: true,
  enumerable: true,
  get: function ariaColCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaColCount_get", arguments);
  },
  set: function ariaColCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaColCount_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaColIndex", {
  configurable: true,
  enumerable: true,
  get: function ariaColIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaColIndex_get", arguments);
  },
  set: function ariaColIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaColIndex_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaColSpan", {
  configurable: true,
  enumerable: true,
  get: function ariaColSpan() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaColSpan_get", arguments);
  },
  set: function ariaColSpan() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaColSpan_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaCurrent", {
  configurable: true,
  enumerable: true,
  get: function ariaCurrent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaCurrent_get", arguments);
  },
  set: function ariaCurrent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaCurrent_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaDescription", {
  configurable: true,
  enumerable: true,
  get: function ariaDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaDescription_get", arguments);
  },
  set: function ariaDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaDescription_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaDisabled", {
  configurable: true,
  enumerable: true,
  get: function ariaDisabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaDisabled_get", arguments);
  },
  set: function ariaDisabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaDisabled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaExpanded", {
  configurable: true,
  enumerable: true,
  get: function ariaExpanded() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaExpanded_get", arguments);
  },
  set: function ariaExpanded() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaExpanded_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaHasPopup", {
  configurable: true,
  enumerable: true,
  get: function ariaHasPopup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaHasPopup_get", arguments);
  },
  set: function ariaHasPopup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaHasPopup_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaHidden", {
  configurable: true,
  enumerable: true,
  get: function ariaHidden() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaHidden_get", arguments);
  },
  set: function ariaHidden() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaHidden_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaInvalid", {
  configurable: true,
  enumerable: true,
  get: function ariaInvalid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaInvalid_get", arguments);
  },
  set: function ariaInvalid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaInvalid_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaKeyShortcuts", {
  configurable: true,
  enumerable: true,
  get: function ariaKeyShortcuts() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaKeyShortcuts_get", arguments);
  },
  set: function ariaKeyShortcuts() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaKeyShortcuts_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaLabel", {
  configurable: true,
  enumerable: true,
  get: function ariaLabel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaLabel_get", arguments);
  },
  set: function ariaLabel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaLabel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaLevel", {
  configurable: true,
  enumerable: true,
  get: function ariaLevel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaLevel_get", arguments);
  },
  set: function ariaLevel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaLevel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaLive", {
  configurable: true,
  enumerable: true,
  get: function ariaLive() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaLive_get", arguments);
  },
  set: function ariaLive() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaLive_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaModal", {
  configurable: true,
  enumerable: true,
  get: function ariaModal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaModal_get", arguments);
  },
  set: function ariaModal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaModal_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaMultiLine", {
  configurable: true,
  enumerable: true,
  get: function ariaMultiLine() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaMultiLine_get", arguments);
  },
  set: function ariaMultiLine() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaMultiLine_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaMultiSelectable", {
  configurable: true,
  enumerable: true,
  get: function ariaMultiSelectable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaMultiSelectable_get", arguments);
  },
  set: function ariaMultiSelectable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaMultiSelectable_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaOrientation", {
  configurable: true,
  enumerable: true,
  get: function ariaOrientation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaOrientation_get", arguments);
  },
  set: function ariaOrientation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaOrientation_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaPlaceholder", {
  configurable: true,
  enumerable: true,
  get: function ariaPlaceholder() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaPlaceholder_get", arguments);
  },
  set: function ariaPlaceholder() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaPlaceholder_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaPosInSet", {
  configurable: true,
  enumerable: true,
  get: function ariaPosInSet() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaPosInSet_get", arguments);
  },
  set: function ariaPosInSet() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaPosInSet_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaPressed", {
  configurable: true,
  enumerable: true,
  get: function ariaPressed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaPressed_get", arguments);
  },
  set: function ariaPressed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaPressed_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaReadOnly", {
  configurable: true,
  enumerable: true,
  get: function ariaReadOnly() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaReadOnly_get", arguments);
  },
  set: function ariaReadOnly() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaReadOnly_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaRelevant", {
  configurable: true,
  enumerable: true,
  get: function ariaRelevant() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaRelevant_get", arguments);
  },
  set: function ariaRelevant() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaRelevant_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaRequired", {
  configurable: true,
  enumerable: true,
  get: function ariaRequired() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaRequired_get", arguments);
  },
  set: function ariaRequired() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaRequired_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaRoleDescription", {
  configurable: true,
  enumerable: true,
  get: function ariaRoleDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaRoleDescription_get", arguments);
  },
  set: function ariaRoleDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaRoleDescription_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaRowCount", {
  configurable: true,
  enumerable: true,
  get: function ariaRowCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaRowCount_get", arguments);
  },
  set: function ariaRowCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaRowCount_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaRowIndex", {
  configurable: true,
  enumerable: true,
  get: function ariaRowIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaRowIndex_get", arguments);
  },
  set: function ariaRowIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaRowIndex_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaRowSpan", {
  configurable: true,
  enumerable: true,
  get: function ariaRowSpan() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaRowSpan_get", arguments);
  },
  set: function ariaRowSpan() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaRowSpan_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaSelected", {
  configurable: true,
  enumerable: true,
  get: function ariaSelected() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaSelected_get", arguments);
  },
  set: function ariaSelected() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaSelected_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaSetSize", {
  configurable: true,
  enumerable: true,
  get: function ariaSetSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaSetSize_get", arguments);
  },
  set: function ariaSetSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaSetSize_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaSort", {
  configurable: true,
  enumerable: true,
  get: function ariaSort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaSort_get", arguments);
  },
  set: function ariaSort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaSort_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaValueMax", {
  configurable: true,
  enumerable: true,
  get: function ariaValueMax() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaValueMax_get", arguments);
  },
  set: function ariaValueMax() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaValueMax_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaValueMin", {
  configurable: true,
  enumerable: true,
  get: function ariaValueMin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaValueMin_get", arguments);
  },
  set: function ariaValueMin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaValueMin_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaValueNow", {
  configurable: true,
  enumerable: true,
  get: function ariaValueNow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaValueNow_get", arguments);
  },
  set: function ariaValueNow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaValueNow_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "ariaValueText", {
  configurable: true,
  enumerable: true,
  get: function ariaValueText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaValueText_get", arguments);
  },
  set: function ariaValueText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "ariaValueText_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "children", {
  configurable: true,
  enumerable: true,
  get: function children() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "children_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "firstElementChild", {
  configurable: true,
  enumerable: true,
  get: function firstElementChild() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "firstElementChild_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "lastElementChild", {
  configurable: true,
  enumerable: true,
  get: function lastElementChild() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "lastElementChild_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "childElementCount", {
  configurable: true,
  enumerable: true,
  get: function childElementCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "childElementCount_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "previousElementSibling", {
  configurable: true,
  enumerable: true,
  get: function previousElementSibling() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "previousElementSibling_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "nextElementSibling", {
  configurable: true,
  enumerable: true,
  get: function nextElementSibling() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "nextElementSibling_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "after", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function after() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "after", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "animate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function animate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "animate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "append", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function append() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "append", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "attachShadow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function attachShadow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "attachShadow", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "before", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function before() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "before", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "closest", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function closest() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "closest", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "computedStyleMap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function computedStyleMap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "computedStyleMap", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "getAttribute", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAttribute() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "getAttribute", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "getAttributeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAttributeNS() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "getAttributeNS", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "getAttributeNames", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAttributeNames() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "getAttributeNames", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "getAttributeNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAttributeNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "getAttributeNode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "getAttributeNodeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAttributeNodeNS() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "getAttributeNodeNS", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "getBoundingClientRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getBoundingClientRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "getBoundingClientRect", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "getClientRects", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getClientRects() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "getClientRects", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "getElementsByClassName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementsByClassName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "getElementsByClassName", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "getElementsByTagName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementsByTagName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "getElementsByTagName", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "getElementsByTagNameNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementsByTagNameNS() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "getElementsByTagNameNS", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "getInnerHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getInnerHTML() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "getInnerHTML", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "hasAttribute", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hasAttribute() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "hasAttribute", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "hasAttributeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hasAttributeNS() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "hasAttributeNS", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "hasAttributes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hasAttributes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "hasAttributes", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "hasPointerCapture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hasPointerCapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "hasPointerCapture", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "insertAdjacentElement", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertAdjacentElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "insertAdjacentElement", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "insertAdjacentHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertAdjacentHTML() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "insertAdjacentHTML", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "insertAdjacentText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertAdjacentText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "insertAdjacentText", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "matches", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function matches() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "matches", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "prepend", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function prepend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "prepend", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "querySelector", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function querySelector() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "querySelector", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "querySelectorAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function querySelectorAll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "querySelectorAll", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "releasePointerCapture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function releasePointerCapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "releasePointerCapture", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "remove", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "removeAttribute", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeAttribute() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "removeAttribute", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "removeAttributeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeAttributeNS() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "removeAttributeNS", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "removeAttributeNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeAttributeNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "removeAttributeNode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "replaceChildren", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceChildren() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "replaceChildren", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "replaceWith", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceWith() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "replaceWith", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "requestFullscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestFullscreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "requestFullscreen", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "requestPointerLock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestPointerLock() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "requestPointerLock", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "scroll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scroll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "scroll", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "scrollBy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scrollBy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "scrollBy", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "scrollIntoView", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scrollIntoView() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "scrollIntoView", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "scrollIntoViewIfNeeded", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scrollIntoViewIfNeeded() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "scrollIntoViewIfNeeded", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "scrollTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scrollTo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "scrollTo", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "setAttribute", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setAttribute() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "setAttribute", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "setAttributeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setAttributeNS() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "setAttributeNS", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "setAttributeNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setAttributeNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "setAttributeNode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "setAttributeNodeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setAttributeNodeNS() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "setAttributeNodeNS", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "setPointerCapture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setPointerCapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "setPointerCapture", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "toggleAttribute", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toggleAttribute() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "toggleAttribute", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "webkitMatchesSelector", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitMatchesSelector() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "webkitMatchesSelector", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "webkitRequestFullScreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitRequestFullScreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "webkitRequestFullScreen", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "webkitRequestFullscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitRequestFullscreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "webkitRequestFullscreen", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "checkVisibility", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkVisibility() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "checkVisibility", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "getAnimations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAnimations() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "getAnimations", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Element', "setHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setHTML() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Element'].prototype, "Element", "setHTML", arguments);
  }
}, 'prototype');