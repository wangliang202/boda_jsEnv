// Document对象

bodavm.memory.globalobj['Document'] = function Document() {
  console.log_copy('Document 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.Document();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Document'], "Document");
bodavm.memory.globalobj['Document'].prototype.__proto__ = bodavm.memory.globalobj['Node'].prototype;
bodavm.memory.globalobj['Document'].__proto__ = bodavm.memory.globalobj['Node'];
bodavm.toolsFunc.defineProperty('Document', "implementation", {
  configurable: true,
  enumerable: true,
  get: function implementation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "implementation_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "URL", {
  configurable: true,
  enumerable: true,
  get: function URL() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "URL_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "documentURI", {
  configurable: true,
  enumerable: true,
  get: function documentURI() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "documentURI_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "compatMode", {
  configurable: true,
  enumerable: true,
  get: function compatMode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "compatMode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "characterSet", {
  configurable: true,
  enumerable: true,
  get: function characterSet() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "characterSet_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "charset", {
  configurable: true,
  enumerable: true,
  get: function charset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "charset_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "inputEncoding", {
  configurable: true,
  enumerable: true,
  get: function inputEncoding() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "inputEncoding_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "contentType", {
  configurable: true,
  enumerable: true,
  get: function contentType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "contentType_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "doctype", {
  configurable: true,
  enumerable: true,
  get: function doctype() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "doctype_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "documentElement", {
  configurable: true,
  enumerable: true,
  get: function documentElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "documentElement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "xmlEncoding", {
  configurable: true,
  enumerable: true,
  get: function xmlEncoding() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "xmlEncoding_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "xmlVersion", {
  configurable: true,
  enumerable: true,
  get: function xmlVersion() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "xmlVersion_get", arguments);
  },
  set: function xmlVersion() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "xmlVersion_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "xmlStandalone", {
  configurable: true,
  enumerable: true,
  get: function xmlStandalone() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "xmlStandalone_get", arguments);
  },
  set: function xmlStandalone() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "xmlStandalone_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "domain", {
  configurable: true,
  enumerable: true,
  get: function domain() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "domain_get", arguments);
  },
  set: function domain() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "domain_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "referrer", {
  configurable: true,
  enumerable: true,
  get: function referrer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "referrer_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "cookie", {
  configurable: true,
  enumerable: true,
  get: function cookie() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "cookie_get", arguments);
  },
  set: function cookie() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "cookie_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "lastModified", {
  configurable: true,
  enumerable: true,
  get: function lastModified() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "lastModified_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "readyState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "title", {
  configurable: true,
  enumerable: true,
  get: function title() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "title_get", arguments);
  },
  set: function title() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "title_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "dir", {
  configurable: true,
  enumerable: true,
  get: function dir() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "dir_get", arguments);
  },
  set: function dir() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "dir_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "body", {
  configurable: true,
  enumerable: true,
  get: function body() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "body_get", arguments);
  },
  set: function body() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "body_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "head", {
  configurable: true,
  enumerable: true,
  get: function head() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "head_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "images", {
  configurable: true,
  enumerable: true,
  get: function images() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "images_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "embeds", {
  configurable: true,
  enumerable: true,
  get: function embeds() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "embeds_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "plugins", {
  configurable: true,
  enumerable: true,
  get: function plugins() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "plugins_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "links", {
  configurable: true,
  enumerable: true,
  get: function links() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "links_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "forms", {
  configurable: true,
  enumerable: true,
  get: function forms() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "forms_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "scripts", {
  configurable: true,
  enumerable: true,
  get: function scripts() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "scripts_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "currentScript", {
  configurable: true,
  enumerable: true,
  get: function currentScript() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "currentScript_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "defaultView", {
  configurable: true,
  enumerable: true,
  get: function defaultView() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "defaultView_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "designMode", {
  configurable: true,
  enumerable: true,
  get: function designMode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "designMode_get", arguments);
  },
  set: function designMode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "designMode_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onreadystatechange", {
  configurable: true,
  enumerable: true,
  get: function onreadystatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onreadystatechange_get", arguments);
  },
  set: function onreadystatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onreadystatechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "anchors", {
  configurable: true,
  enumerable: true,
  get: function anchors() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "anchors_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "applets", {
  configurable: true,
  enumerable: true,
  get: function applets() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "applets_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "fgColor", {
  configurable: true,
  enumerable: true,
  get: function fgColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "fgColor_get", arguments);
  },
  set: function fgColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "fgColor_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "linkColor", {
  configurable: true,
  enumerable: true,
  get: function linkColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "linkColor_get", arguments);
  },
  set: function linkColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "linkColor_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "vlinkColor", {
  configurable: true,
  enumerable: true,
  get: function vlinkColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "vlinkColor_get", arguments);
  },
  set: function vlinkColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "vlinkColor_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "alinkColor", {
  configurable: true,
  enumerable: true,
  get: function alinkColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "alinkColor_get", arguments);
  },
  set: function alinkColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "alinkColor_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "bgColor", {
  configurable: true,
  enumerable: true,
  get: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "bgColor_get", arguments);
  },
  set: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "bgColor_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "all", {
  configurable: true,
  enumerable: true,
  get: function all() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "all_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "scrollingElement", {
  configurable: true,
  enumerable: true,
  get: function scrollingElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "scrollingElement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onpointerlockchange", {
  configurable: true,
  enumerable: true,
  get: function onpointerlockchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointerlockchange_get", arguments);
  },
  set: function onpointerlockchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointerlockchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onpointerlockerror", {
  configurable: true,
  enumerable: true,
  get: function onpointerlockerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointerlockerror_get", arguments);
  },
  set: function onpointerlockerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointerlockerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "hidden", {
  configurable: true,
  enumerable: true,
  get: function hidden() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "hidden_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "visibilityState", {
  configurable: true,
  enumerable: true,
  get: function visibilityState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "visibilityState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "wasDiscarded", {
  configurable: true,
  enumerable: true,
  get: function wasDiscarded() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "wasDiscarded_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "featurePolicy", {
  configurable: true,
  enumerable: true,
  get: function featurePolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "featurePolicy_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "webkitVisibilityState", {
  configurable: true,
  enumerable: true,
  get: function webkitVisibilityState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "webkitVisibilityState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "webkitHidden", {
  configurable: true,
  enumerable: true,
  get: function webkitHidden() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "webkitHidden_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onbeforecopy", {
  configurable: true,
  enumerable: true,
  get: function onbeforecopy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onbeforecopy_get", arguments);
  },
  set: function onbeforecopy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onbeforecopy_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onbeforecut", {
  configurable: true,
  enumerable: true,
  get: function onbeforecut() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onbeforecut_get", arguments);
  },
  set: function onbeforecut() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onbeforecut_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onbeforepaste", {
  configurable: true,
  enumerable: true,
  get: function onbeforepaste() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onbeforepaste_get", arguments);
  },
  set: function onbeforepaste() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onbeforepaste_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onfreeze", {
  configurable: true,
  enumerable: true,
  get: function onfreeze() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onfreeze_get", arguments);
  },
  set: function onfreeze() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onfreeze_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onresume", {
  configurable: true,
  enumerable: true,
  get: function onresume() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onresume_get", arguments);
  },
  set: function onresume() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onresume_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onsearch", {
  configurable: true,
  enumerable: true,
  get: function onsearch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onsearch_get", arguments);
  },
  set: function onsearch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onsearch_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onvisibilitychange", {
  configurable: true,
  enumerable: true,
  get: function onvisibilitychange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onvisibilitychange_get", arguments);
  },
  set: function onvisibilitychange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onvisibilitychange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "fullscreenEnabled", {
  configurable: true,
  enumerable: true,
  get: function fullscreenEnabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "fullscreenEnabled_get", arguments);
  },
  set: function fullscreenEnabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "fullscreenEnabled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "fullscreen", {
  configurable: true,
  enumerable: true,
  get: function fullscreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "fullscreen_get", arguments);
  },
  set: function fullscreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "fullscreen_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onfullscreenchange", {
  configurable: true,
  enumerable: true,
  get: function onfullscreenchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onfullscreenchange_get", arguments);
  },
  set: function onfullscreenchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onfullscreenchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onfullscreenerror", {
  configurable: true,
  enumerable: true,
  get: function onfullscreenerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onfullscreenerror_get", arguments);
  },
  set: function onfullscreenerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onfullscreenerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "webkitIsFullScreen", {
  configurable: true,
  enumerable: true,
  get: function webkitIsFullScreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "webkitIsFullScreen_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "webkitCurrentFullScreenElement", {
  configurable: true,
  enumerable: true,
  get: function webkitCurrentFullScreenElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "webkitCurrentFullScreenElement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "webkitFullscreenEnabled", {
  configurable: true,
  enumerable: true,
  get: function webkitFullscreenEnabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "webkitFullscreenEnabled_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "webkitFullscreenElement", {
  configurable: true,
  enumerable: true,
  get: function webkitFullscreenElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "webkitFullscreenElement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onwebkitfullscreenchange", {
  configurable: true,
  enumerable: true,
  get: function onwebkitfullscreenchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onwebkitfullscreenchange_get", arguments);
  },
  set: function onwebkitfullscreenchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onwebkitfullscreenchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onwebkitfullscreenerror", {
  configurable: true,
  enumerable: true,
  get: function onwebkitfullscreenerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onwebkitfullscreenerror_get", arguments);
  },
  set: function onwebkitfullscreenerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onwebkitfullscreenerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "rootElement", {
  configurable: true,
  enumerable: true,
  get: function rootElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "rootElement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "pictureInPictureEnabled", {
  configurable: true,
  enumerable: true,
  get: function pictureInPictureEnabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "pictureInPictureEnabled_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "pictureInPictureElement", {
  configurable: true,
  enumerable: true,
  get: function pictureInPictureElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "pictureInPictureElement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onbeforexrselect", {
  configurable: true,
  enumerable: true,
  get: function onbeforexrselect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onbeforexrselect_get", arguments);
  },
  set: function onbeforexrselect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onbeforexrselect_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onabort_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onbeforeinput", {
  configurable: true,
  enumerable: true,
  get: function onbeforeinput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onbeforeinput_get", arguments);
  },
  set: function onbeforeinput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onbeforeinput_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onblur", {
  configurable: true,
  enumerable: true,
  get: function onblur() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onblur_get", arguments);
  },
  set: function onblur() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onblur_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "oncancel", {
  configurable: true,
  enumerable: true,
  get: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncancel_get", arguments);
  },
  set: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncancel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "oncanplay", {
  configurable: true,
  enumerable: true,
  get: function oncanplay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncanplay_get", arguments);
  },
  set: function oncanplay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncanplay_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "oncanplaythrough", {
  configurable: true,
  enumerable: true,
  get: function oncanplaythrough() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncanplaythrough_get", arguments);
  },
  set: function oncanplaythrough() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncanplaythrough_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onclick", {
  configurable: true,
  enumerable: true,
  get: function onclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onclick_get", arguments);
  },
  set: function onclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onclick_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onclose", {
  configurable: true,
  enumerable: true,
  get: function onclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onclose_get", arguments);
  },
  set: function onclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onclose_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "oncontextlost", {
  configurable: true,
  enumerable: true,
  get: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncontextlost_get", arguments);
  },
  set: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncontextlost_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "oncontextmenu", {
  configurable: true,
  enumerable: true,
  get: function oncontextmenu() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncontextmenu_get", arguments);
  },
  set: function oncontextmenu() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncontextmenu_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "oncontextrestored", {
  configurable: true,
  enumerable: true,
  get: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncontextrestored_get", arguments);
  },
  set: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncontextrestored_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "oncuechange", {
  configurable: true,
  enumerable: true,
  get: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncuechange_get", arguments);
  },
  set: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncuechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "ondblclick", {
  configurable: true,
  enumerable: true,
  get: function ondblclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ondblclick_get", arguments);
  },
  set: function ondblclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ondblclick_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "ondrag", {
  configurable: true,
  enumerable: true,
  get: function ondrag() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ondrag_get", arguments);
  },
  set: function ondrag() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ondrag_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "ondragend", {
  configurable: true,
  enumerable: true,
  get: function ondragend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ondragend_get", arguments);
  },
  set: function ondragend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ondragend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "ondragenter", {
  configurable: true,
  enumerable: true,
  get: function ondragenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ondragenter_get", arguments);
  },
  set: function ondragenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ondragenter_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "ondragleave", {
  configurable: true,
  enumerable: true,
  get: function ondragleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ondragleave_get", arguments);
  },
  set: function ondragleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ondragleave_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "ondragover", {
  configurable: true,
  enumerable: true,
  get: function ondragover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ondragover_get", arguments);
  },
  set: function ondragover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ondragover_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "ondragstart", {
  configurable: true,
  enumerable: true,
  get: function ondragstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ondragstart_get", arguments);
  },
  set: function ondragstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ondragstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "ondrop", {
  configurable: true,
  enumerable: true,
  get: function ondrop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ondrop_get", arguments);
  },
  set: function ondrop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ondrop_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "ondurationchange", {
  configurable: true,
  enumerable: true,
  get: function ondurationchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ondurationchange_get", arguments);
  },
  set: function ondurationchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ondurationchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onemptied", {
  configurable: true,
  enumerable: true,
  get: function onemptied() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onemptied_get", arguments);
  },
  set: function onemptied() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onemptied_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onended", {
  configurable: true,
  enumerable: true,
  get: function onended() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onended_get", arguments);
  },
  set: function onended() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onended_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onfocus", {
  configurable: true,
  enumerable: true,
  get: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onfocus_get", arguments);
  },
  set: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onfocus_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onformdata", {
  configurable: true,
  enumerable: true,
  get: function onformdata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onformdata_get", arguments);
  },
  set: function onformdata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onformdata_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "oninput", {
  configurable: true,
  enumerable: true,
  get: function oninput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oninput_get", arguments);
  },
  set: function oninput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oninput_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "oninvalid", {
  configurable: true,
  enumerable: true,
  get: function oninvalid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oninvalid_get", arguments);
  },
  set: function oninvalid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oninvalid_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onkeydown", {
  configurable: true,
  enumerable: true,
  get: function onkeydown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onkeydown_get", arguments);
  },
  set: function onkeydown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onkeydown_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onkeypress", {
  configurable: true,
  enumerable: true,
  get: function onkeypress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onkeypress_get", arguments);
  },
  set: function onkeypress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onkeypress_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onkeyup", {
  configurable: true,
  enumerable: true,
  get: function onkeyup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onkeyup_get", arguments);
  },
  set: function onkeyup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onkeyup_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onload", {
  configurable: true,
  enumerable: true,
  get: function onload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onload_get", arguments);
  },
  set: function onload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onload_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onloadeddata", {
  configurable: true,
  enumerable: true,
  get: function onloadeddata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onloadeddata_get", arguments);
  },
  set: function onloadeddata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onloadeddata_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onloadedmetadata", {
  configurable: true,
  enumerable: true,
  get: function onloadedmetadata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onloadedmetadata_get", arguments);
  },
  set: function onloadedmetadata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onloadedmetadata_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onloadstart", {
  configurable: true,
  enumerable: true,
  get: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onloadstart_get", arguments);
  },
  set: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onloadstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onmousedown", {
  configurable: true,
  enumerable: true,
  get: function onmousedown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onmousedown_get", arguments);
  },
  set: function onmousedown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onmousedown_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onmouseenter", {
  configurable: true,
  enumerable: true,
  get: function onmouseenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onmouseenter_get", arguments);
  },
  set: function onmouseenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onmouseenter_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onmouseleave", {
  configurable: true,
  enumerable: true,
  get: function onmouseleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onmouseleave_get", arguments);
  },
  set: function onmouseleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onmouseleave_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onmousemove", {
  configurable: true,
  enumerable: true,
  get: function onmousemove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onmousemove_get", arguments);
  },
  set: function onmousemove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onmousemove_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onmouseout", {
  configurable: true,
  enumerable: true,
  get: function onmouseout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onmouseout_get", arguments);
  },
  set: function onmouseout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onmouseout_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onmouseover", {
  configurable: true,
  enumerable: true,
  get: function onmouseover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onmouseover_get", arguments);
  },
  set: function onmouseover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onmouseover_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onmouseup", {
  configurable: true,
  enumerable: true,
  get: function onmouseup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onmouseup_get", arguments);
  },
  set: function onmouseup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onmouseup_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onmousewheel", {
  configurable: true,
  enumerable: true,
  get: function onmousewheel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onmousewheel_get", arguments);
  },
  set: function onmousewheel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onmousewheel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onpause", {
  configurable: true,
  enumerable: true,
  get: function onpause() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpause_get", arguments);
  },
  set: function onpause() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpause_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onplay", {
  configurable: true,
  enumerable: true,
  get: function onplay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onplay_get", arguments);
  },
  set: function onplay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onplay_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onplaying", {
  configurable: true,
  enumerable: true,
  get: function onplaying() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onplaying_get", arguments);
  },
  set: function onplaying() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onplaying_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onprogress", {
  configurable: true,
  enumerable: true,
  get: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onprogress_get", arguments);
  },
  set: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onprogress_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onratechange", {
  configurable: true,
  enumerable: true,
  get: function onratechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onratechange_get", arguments);
  },
  set: function onratechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onratechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onreset", {
  configurable: true,
  enumerable: true,
  get: function onreset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onreset_get", arguments);
  },
  set: function onreset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onreset_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onresize", {
  configurable: true,
  enumerable: true,
  get: function onresize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onresize_get", arguments);
  },
  set: function onresize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onresize_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onscroll", {
  configurable: true,
  enumerable: true,
  get: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onscroll_get", arguments);
  },
  set: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onscroll_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onsecuritypolicyviolation", {
  configurable: true,
  enumerable: true,
  get: function onsecuritypolicyviolation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onsecuritypolicyviolation_get", arguments);
  },
  set: function onsecuritypolicyviolation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onsecuritypolicyviolation_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onseeked", {
  configurable: true,
  enumerable: true,
  get: function onseeked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onseeked_get", arguments);
  },
  set: function onseeked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onseeked_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onseeking", {
  configurable: true,
  enumerable: true,
  get: function onseeking() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onseeking_get", arguments);
  },
  set: function onseeking() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onseeking_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onselect", {
  configurable: true,
  enumerable: true,
  get: function onselect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onselect_get", arguments);
  },
  set: function onselect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onselect_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onslotchange", {
  configurable: true,
  enumerable: true,
  get: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onslotchange_get", arguments);
  },
  set: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onslotchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onstalled", {
  configurable: true,
  enumerable: true,
  get: function onstalled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onstalled_get", arguments);
  },
  set: function onstalled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onstalled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onsubmit", {
  configurable: true,
  enumerable: true,
  get: function onsubmit() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onsubmit_get", arguments);
  },
  set: function onsubmit() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onsubmit_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onsuspend", {
  configurable: true,
  enumerable: true,
  get: function onsuspend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onsuspend_get", arguments);
  },
  set: function onsuspend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onsuspend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "ontimeupdate", {
  configurable: true,
  enumerable: true,
  get: function ontimeupdate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ontimeupdate_get", arguments);
  },
  set: function ontimeupdate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ontimeupdate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "ontoggle", {
  configurable: true,
  enumerable: true,
  get: function ontoggle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ontoggle_get", arguments);
  },
  set: function ontoggle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ontoggle_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onvolumechange", {
  configurable: true,
  enumerable: true,
  get: function onvolumechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onvolumechange_get", arguments);
  },
  set: function onvolumechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onvolumechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onwaiting", {
  configurable: true,
  enumerable: true,
  get: function onwaiting() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onwaiting_get", arguments);
  },
  set: function onwaiting() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onwaiting_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onwebkitanimationend", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onwebkitanimationend_get", arguments);
  },
  set: function onwebkitanimationend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onwebkitanimationend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onwebkitanimationiteration", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onwebkitanimationiteration_get", arguments);
  },
  set: function onwebkitanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onwebkitanimationiteration_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onwebkitanimationstart", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onwebkitanimationstart_get", arguments);
  },
  set: function onwebkitanimationstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onwebkitanimationstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onwebkittransitionend", {
  configurable: true,
  enumerable: true,
  get: function onwebkittransitionend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onwebkittransitionend_get", arguments);
  },
  set: function onwebkittransitionend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onwebkittransitionend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onwheel", {
  configurable: true,
  enumerable: true,
  get: function onwheel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onwheel_get", arguments);
  },
  set: function onwheel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onwheel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onauxclick", {
  configurable: true,
  enumerable: true,
  get: function onauxclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onauxclick_get", arguments);
  },
  set: function onauxclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onauxclick_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "ongotpointercapture", {
  configurable: true,
  enumerable: true,
  get: function ongotpointercapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ongotpointercapture_get", arguments);
  },
  set: function ongotpointercapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ongotpointercapture_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onlostpointercapture", {
  configurable: true,
  enumerable: true,
  get: function onlostpointercapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onlostpointercapture_get", arguments);
  },
  set: function onlostpointercapture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onlostpointercapture_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onpointerdown", {
  configurable: true,
  enumerable: true,
  get: function onpointerdown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointerdown_get", arguments);
  },
  set: function onpointerdown() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointerdown_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onpointermove", {
  configurable: true,
  enumerable: true,
  get: function onpointermove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointermove_get", arguments);
  },
  set: function onpointermove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointermove_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onpointerrawupdate", {
  configurable: true,
  enumerable: true,
  get: function onpointerrawupdate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointerrawupdate_get", arguments);
  },
  set: function onpointerrawupdate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointerrawupdate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onpointerup", {
  configurable: true,
  enumerable: true,
  get: function onpointerup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointerup_get", arguments);
  },
  set: function onpointerup() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointerup_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onpointercancel", {
  configurable: true,
  enumerable: true,
  get: function onpointercancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointercancel_get", arguments);
  },
  set: function onpointercancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointercancel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onpointerover", {
  configurable: true,
  enumerable: true,
  get: function onpointerover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointerover_get", arguments);
  },
  set: function onpointerover() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointerover_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onpointerout", {
  configurable: true,
  enumerable: true,
  get: function onpointerout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointerout_get", arguments);
  },
  set: function onpointerout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointerout_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onpointerenter", {
  configurable: true,
  enumerable: true,
  get: function onpointerenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointerenter_get", arguments);
  },
  set: function onpointerenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointerenter_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onpointerleave", {
  configurable: true,
  enumerable: true,
  get: function onpointerleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointerleave_get", arguments);
  },
  set: function onpointerleave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpointerleave_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onselectstart", {
  configurable: true,
  enumerable: true,
  get: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onselectstart_get", arguments);
  },
  set: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onselectstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onselectionchange", {
  configurable: true,
  enumerable: true,
  get: function onselectionchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onselectionchange_get", arguments);
  },
  set: function onselectionchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onselectionchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onanimationend", {
  configurable: true,
  enumerable: true,
  get: function onanimationend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onanimationend_get", arguments);
  },
  set: function onanimationend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onanimationend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onanimationiteration", {
  configurable: true,
  enumerable: true,
  get: function onanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onanimationiteration_get", arguments);
  },
  set: function onanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onanimationiteration_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onanimationstart", {
  configurable: true,
  enumerable: true,
  get: function onanimationstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onanimationstart_get", arguments);
  },
  set: function onanimationstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onanimationstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "ontransitionrun", {
  configurable: true,
  enumerable: true,
  get: function ontransitionrun() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ontransitionrun_get", arguments);
  },
  set: function ontransitionrun() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ontransitionrun_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "ontransitionstart", {
  configurable: true,
  enumerable: true,
  get: function ontransitionstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ontransitionstart_get", arguments);
  },
  set: function ontransitionstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ontransitionstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "ontransitionend", {
  configurable: true,
  enumerable: true,
  get: function ontransitionend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ontransitionend_get", arguments);
  },
  set: function ontransitionend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ontransitionend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "ontransitioncancel", {
  configurable: true,
  enumerable: true,
  get: function ontransitioncancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ontransitioncancel_get", arguments);
  },
  set: function ontransitioncancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "ontransitioncancel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "oncopy", {
  configurable: true,
  enumerable: true,
  get: function oncopy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncopy_get", arguments);
  },
  set: function oncopy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncopy_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "oncut", {
  configurable: true,
  enumerable: true,
  get: function oncut() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncut_get", arguments);
  },
  set: function oncut() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncut_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onpaste", {
  configurable: true,
  enumerable: true,
  get: function onpaste() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpaste_get", arguments);
  },
  set: function onpaste() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onpaste_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "children", {
  configurable: true,
  enumerable: true,
  get: function children() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "children_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "firstElementChild", {
  configurable: true,
  enumerable: true,
  get: function firstElementChild() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "firstElementChild_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "lastElementChild", {
  configurable: true,
  enumerable: true,
  get: function lastElementChild() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "lastElementChild_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "childElementCount", {
  configurable: true,
  enumerable: true,
  get: function childElementCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "childElementCount_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "activeElement", {
  configurable: true,
  enumerable: true,
  get: function activeElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "activeElement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "styleSheets", {
  configurable: true,
  enumerable: true,
  get: function styleSheets() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "styleSheets_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "pointerLockElement", {
  configurable: true,
  enumerable: true,
  get: function pointerLockElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "pointerLockElement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "fullscreenElement", {
  configurable: true,
  enumerable: true,
  get: function fullscreenElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "fullscreenElement_get", arguments);
  },
  set: function fullscreenElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "fullscreenElement_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "adoptedStyleSheets", {
  configurable: true,
  enumerable: true,
  get: function adoptedStyleSheets() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "adoptedStyleSheets_get", arguments);
  },
  set: function adoptedStyleSheets() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "adoptedStyleSheets_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "fonts", {
  configurable: true,
  enumerable: true,
  get: function fonts() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "fonts_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "adoptNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function adoptNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "adoptNode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "append", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function append() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "append", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "captureEvents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function captureEvents() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "captureEvents", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "caretRangeFromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function caretRangeFromPoint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "caretRangeFromPoint", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "clear", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "createAttribute", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createAttribute() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "createAttribute", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "createAttributeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createAttributeNS() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "createAttributeNS", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "createCDATASection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createCDATASection() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "createCDATASection", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "createComment", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createComment() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "createComment", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "createDocumentFragment", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createDocumentFragment() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "createDocumentFragment", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "createElement", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "createElement", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "createElementNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createElementNS() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "createElementNS", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "createEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createEvent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "createEvent", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "createExpression", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createExpression() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "createExpression", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "createNSResolver", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createNSResolver() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "createNSResolver", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "createNodeIterator", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createNodeIterator() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "createNodeIterator", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "createProcessingInstruction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createProcessingInstruction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "createProcessingInstruction", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "createRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createRange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "createRange", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "createTextNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createTextNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "createTextNode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "createTreeWalker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createTreeWalker() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "createTreeWalker", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "elementFromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function elementFromPoint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "elementFromPoint", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "elementsFromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function elementsFromPoint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "elementsFromPoint", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "evaluate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function evaluate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "evaluate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "execCommand", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function execCommand() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "execCommand", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "exitFullscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function exitFullscreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "exitFullscreen", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "exitPictureInPicture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function exitPictureInPicture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "exitPictureInPicture", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "exitPointerLock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function exitPointerLock() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "exitPointerLock", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "getElementById", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementById() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "getElementById", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "getElementsByClassName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementsByClassName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "getElementsByClassName", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "getElementsByName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementsByName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "getElementsByName", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "getElementsByTagName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementsByTagName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "getElementsByTagName", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "getElementsByTagNameNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementsByTagNameNS() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "getElementsByTagNameNS", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "getSelection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSelection() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "getSelection", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "hasFocus", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hasFocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "hasFocus", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "importNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function importNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "importNode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function open() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "open", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "prepend", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function prepend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "prepend", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "queryCommandEnabled", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function queryCommandEnabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "queryCommandEnabled", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "queryCommandIndeterm", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function queryCommandIndeterm() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "queryCommandIndeterm", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "queryCommandState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function queryCommandState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "queryCommandState", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "queryCommandSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function queryCommandSupported() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "queryCommandSupported", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "queryCommandValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function queryCommandValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "queryCommandValue", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "querySelector", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function querySelector() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "querySelector", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "querySelectorAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function querySelectorAll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "querySelectorAll", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "releaseEvents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function releaseEvents() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "releaseEvents", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "replaceChildren", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceChildren() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "replaceChildren", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "webkitCancelFullScreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitCancelFullScreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "webkitCancelFullScreen", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "webkitExitFullscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitExitFullscreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "webkitExitFullscreen", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "write", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function write() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "write", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "writeln", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function writeln() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "writeln", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "prerendering", {
  configurable: true,
  enumerable: true,
  get: function prerendering() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "prerendering_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onprerenderingchange", {
  configurable: true,
  enumerable: true,
  get: function onprerenderingchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onprerenderingchange_get", arguments);
  },
  set: function onprerenderingchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onprerenderingchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "fragmentDirective", {
  configurable: true,
  enumerable: true,
  get: function fragmentDirective() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "fragmentDirective_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "onbeforematch", {
  configurable: true,
  enumerable: true,
  get: function onbeforematch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onbeforematch_get", arguments);
  },
  set: function onbeforematch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "onbeforematch_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "timeline", {
  configurable: true,
  enumerable: true,
  get: function timeline() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "timeline_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "oncontentvisibilityautostatechange", {
  configurable: true,
  enumerable: true,
  get: function oncontentvisibilityautostatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncontentvisibilityautostatechange_get", arguments);
  },
  set: function oncontentvisibilityautostatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "oncontentvisibilityautostatechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "getAnimations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAnimations() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "getAnimations", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Document', "startViewTransition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function startViewTransition() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Document'].prototype, "Document", "startViewTransition", arguments);
  }
}, 'prototype');