// MediaStreamTrackEvent对象

bodavm.memory.globalobj['MediaStreamTrackEvent'] = function MediaStreamTrackEvent() {
  console.log_copy('MediaStreamTrackEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MediaStreamTrackEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaStreamTrackEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaStreamTrackEvent'], "MediaStreamTrackEvent");
bodavm.memory.globalobj['MediaStreamTrackEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['MediaStreamTrackEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('MediaStreamTrackEvent', "track", {
  configurable: true,
  enumerable: true,
  get: function track() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrackEvent'].prototype, "MediaStreamTrackEvent", "track_get", arguments);
  },
  set: undefined
}, 'prototype');