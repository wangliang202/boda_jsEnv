// HTMLMediaElement对象

bodavm.memory.globalobj['HTMLMediaElement'] = function HTMLMediaElement() {
  console.log_copy('HTMLMediaElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLMediaElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLMediaElement'], "HTMLMediaElement");
bodavm.memory.globalobj['HTMLMediaElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLMediaElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "NETWORK_EMPTY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "NETWORK_IDLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "NETWORK_LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "NETWORK_NO_SOURCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "HAVE_NOTHING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "HAVE_METADATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "HAVE_CURRENT_DATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "HAVE_FUTURE_DATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "HAVE_ENOUGH_DATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "error", {
  configurable: true,
  enumerable: true,
  get: function error() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "error_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "src_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "currentSrc", {
  configurable: true,
  enumerable: true,
  get: function currentSrc() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "currentSrc_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "crossOrigin", {
  configurable: true,
  enumerable: true,
  get: function crossOrigin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "crossOrigin_get", arguments);
  },
  set: function crossOrigin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "crossOrigin_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "networkState", {
  configurable: true,
  enumerable: true,
  get: function networkState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "networkState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "preload", {
  configurable: true,
  enumerable: true,
  get: function preload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "preload_get", arguments);
  },
  set: function preload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "preload_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "buffered", {
  configurable: true,
  enumerable: true,
  get: function buffered() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "buffered_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "readyState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "seeking", {
  configurable: true,
  enumerable: true,
  get: function seeking() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "seeking_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "currentTime", {
  configurable: true,
  enumerable: true,
  get: function currentTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "currentTime_get", arguments);
  },
  set: function currentTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "currentTime_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "duration", {
  configurable: true,
  enumerable: true,
  get: function duration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "duration_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "paused", {
  configurable: true,
  enumerable: true,
  get: function paused() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "paused_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "defaultPlaybackRate", {
  configurable: true,
  enumerable: true,
  get: function defaultPlaybackRate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "defaultPlaybackRate_get", arguments);
  },
  set: function defaultPlaybackRate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "defaultPlaybackRate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "playbackRate", {
  configurable: true,
  enumerable: true,
  get: function playbackRate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "playbackRate_get", arguments);
  },
  set: function playbackRate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "playbackRate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "played", {
  configurable: true,
  enumerable: true,
  get: function played() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "played_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "seekable", {
  configurable: true,
  enumerable: true,
  get: function seekable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "seekable_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "ended", {
  configurable: true,
  enumerable: true,
  get: function ended() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "ended_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "autoplay", {
  configurable: true,
  enumerable: true,
  get: function autoplay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "autoplay_get", arguments);
  },
  set: function autoplay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "autoplay_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "loop", {
  configurable: true,
  enumerable: true,
  get: function loop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "loop_get", arguments);
  },
  set: function loop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "loop_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "preservesPitch", {
  configurable: true,
  enumerable: true,
  get: function preservesPitch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "preservesPitch_get", arguments);
  },
  set: function preservesPitch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "preservesPitch_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "controls", {
  configurable: true,
  enumerable: true,
  get: function controls() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "controls_get", arguments);
  },
  set: function controls() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "controls_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "controlsList", {
  configurable: true,
  enumerable: true,
  get: function controlsList() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "controlsList_get", arguments);
  },
  set: function controlsList() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "controlsList_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "volume", {
  configurable: true,
  enumerable: true,
  get: function volume() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "volume_get", arguments);
  },
  set: function volume() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "volume_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "muted", {
  configurable: true,
  enumerable: true,
  get: function muted() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "muted_get", arguments);
  },
  set: function muted() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "muted_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "defaultMuted", {
  configurable: true,
  enumerable: true,
  get: function defaultMuted() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "defaultMuted_get", arguments);
  },
  set: function defaultMuted() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "defaultMuted_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "textTracks", {
  configurable: true,
  enumerable: true,
  get: function textTracks() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "textTracks_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "webkitAudioDecodedByteCount", {
  configurable: true,
  enumerable: true,
  get: function webkitAudioDecodedByteCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "webkitAudioDecodedByteCount_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "webkitVideoDecodedByteCount", {
  configurable: true,
  enumerable: true,
  get: function webkitVideoDecodedByteCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "webkitVideoDecodedByteCount_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "onencrypted", {
  configurable: true,
  enumerable: true,
  get: function onencrypted() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "onencrypted_get", arguments);
  },
  set: function onencrypted() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "onencrypted_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "onwaitingforkey", {
  configurable: true,
  enumerable: true,
  get: function onwaitingforkey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "onwaitingforkey_get", arguments);
  },
  set: function onwaitingforkey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "onwaitingforkey_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "srcObject", {
  configurable: true,
  enumerable: true,
  get: function srcObject() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "srcObject_get", arguments);
  },
  set: function srcObject() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "srcObject_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "NETWORK_EMPTY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "NETWORK_IDLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "NETWORK_LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "NETWORK_NO_SOURCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "HAVE_NOTHING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "HAVE_METADATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "HAVE_CURRENT_DATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "HAVE_FUTURE_DATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "HAVE_ENOUGH_DATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "addTextTrack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addTextTrack() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "addTextTrack", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "canPlayType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function canPlayType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "canPlayType", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "captureStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function captureStream() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "captureStream", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "load", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function load() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "load", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "pause", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pause() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "pause", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "play", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function play() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "play", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "sinkId", {
  configurable: true,
  enumerable: true,
  get: function sinkId() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "sinkId_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "remote", {
  configurable: true,
  enumerable: true,
  get: function remote() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "remote_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "disableRemotePlayback", {
  configurable: true,
  enumerable: true,
  get: function disableRemotePlayback() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "disableRemotePlayback_get", arguments);
  },
  set: function disableRemotePlayback() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "disableRemotePlayback_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "setSinkId", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setSinkId() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "setSinkId", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "mediaKeys", {
  configurable: true,
  enumerable: true,
  get: function mediaKeys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "mediaKeys_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLMediaElement', "setMediaKeys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setMediaKeys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMediaElement'].prototype, "HTMLMediaElement", "setMediaKeys", arguments);
  }
}, 'prototype');