// SourceBuffer对象

bodavm.memory.globalobj['SourceBuffer'] = function SourceBuffer() {
  console.log_copy('SourceBuffer 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SourceBuffer)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SourceBuffer'], "SourceBuffer");
bodavm.memory.globalobj['SourceBuffer'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['SourceBuffer'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('SourceBuffer', "mode", {
  configurable: true,
  enumerable: true,
  get: function mode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "mode_get", arguments);
  },
  set: function mode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "mode_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SourceBuffer', "updating", {
  configurable: true,
  enumerable: true,
  get: function updating() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "updating_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SourceBuffer', "buffered", {
  configurable: true,
  enumerable: true,
  get: function buffered() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "buffered_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SourceBuffer', "timestampOffset", {
  configurable: true,
  enumerable: true,
  get: function timestampOffset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "timestampOffset_get", arguments);
  },
  set: function timestampOffset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "timestampOffset_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SourceBuffer', "appendWindowStart", {
  configurable: true,
  enumerable: true,
  get: function appendWindowStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "appendWindowStart_get", arguments);
  },
  set: function appendWindowStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "appendWindowStart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SourceBuffer', "appendWindowEnd", {
  configurable: true,
  enumerable: true,
  get: function appendWindowEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "appendWindowEnd_get", arguments);
  },
  set: function appendWindowEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "appendWindowEnd_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SourceBuffer', "onupdatestart", {
  configurable: true,
  enumerable: true,
  get: function onupdatestart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "onupdatestart_get", arguments);
  },
  set: function onupdatestart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "onupdatestart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SourceBuffer', "onupdate", {
  configurable: true,
  enumerable: true,
  get: function onupdate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "onupdate_get", arguments);
  },
  set: function onupdate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "onupdate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SourceBuffer', "onupdateend", {
  configurable: true,
  enumerable: true,
  get: function onupdateend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "onupdateend_get", arguments);
  },
  set: function onupdateend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "onupdateend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SourceBuffer', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SourceBuffer', "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "onabort_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SourceBuffer', "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "abort", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SourceBuffer', "appendBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendBuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "appendBuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SourceBuffer', "changeType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function changeType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "changeType", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SourceBuffer', "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SourceBuffer'].prototype, "SourceBuffer", "remove", arguments);
  }
}, 'prototype');