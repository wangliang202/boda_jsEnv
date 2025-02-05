// Animation对象

bodavm.memory.globalobj['Animation'] = function Animation() {
  console.log_copy('Animation 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.Animation();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Animation'], "Animation");
bodavm.memory.globalobj['Animation'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['Animation'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('Animation', "effect", {
  configurable: true,
  enumerable: true,
  get: function effect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "effect_get", arguments);
  },
  set: function effect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "effect_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "startTime", {
  configurable: true,
  enumerable: true,
  get: function startTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "startTime_get", arguments);
  },
  set: function startTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "startTime_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "currentTime", {
  configurable: true,
  enumerable: true,
  get: function currentTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "currentTime_get", arguments);
  },
  set: function currentTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "currentTime_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "playbackRate", {
  configurable: true,
  enumerable: true,
  get: function playbackRate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "playbackRate_get", arguments);
  },
  set: function playbackRate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "playbackRate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "playState", {
  configurable: true,
  enumerable: true,
  get: function playState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "playState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "pending", {
  configurable: true,
  enumerable: true,
  get: function pending() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "pending_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "id_get", arguments);
  },
  set: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "id_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "onfinish", {
  configurable: true,
  enumerable: true,
  get: function onfinish() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "onfinish_get", arguments);
  },
  set: function onfinish() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "onfinish_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "oncancel", {
  configurable: true,
  enumerable: true,
  get: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "oncancel_get", arguments);
  },
  set: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "oncancel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "cancel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "cancel", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "finish", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function finish() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "finish", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "pause", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pause() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "pause", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "play", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function play() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "play", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "reverse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reverse() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "reverse", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "updatePlaybackRate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function updatePlaybackRate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "updatePlaybackRate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "timeline", {
  configurable: true,
  enumerable: true,
  get: function timeline() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "timeline_get", arguments);
  },
  set: function timeline() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "timeline_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "replaceState", {
  configurable: true,
  enumerable: true,
  get: function replaceState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "replaceState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "onremove", {
  configurable: true,
  enumerable: true,
  get: function onremove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "onremove_get", arguments);
  },
  set: function onremove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "onremove_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "finished", {
  configurable: true,
  enumerable: true,
  get: function finished() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "finished_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "ready", {
  configurable: true,
  enumerable: true,
  get: function ready() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "ready_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "commitStyles", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function commitStyles() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "commitStyles", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Animation', "persist", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function persist() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Animation'].prototype, "Animation", "persist", arguments);
  }
}, 'prototype');