// KeyframeEffect对象

bodavm.memory.globalobj['KeyframeEffect'] = function KeyframeEffect() {
  console.log_copy('KeyframeEffect 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof KeyframeEffect)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'KeyframeEffect': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['KeyframeEffect'], "KeyframeEffect");
bodavm.memory.globalobj['KeyframeEffect'].prototype.__proto__ = bodavm.memory.globalobj['AnimationEffect'].prototype;
bodavm.memory.globalobj['KeyframeEffect'].__proto__ = bodavm.memory.globalobj['AnimationEffect'];
bodavm.toolsFunc.defineProperty('KeyframeEffect', "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyframeEffect'].prototype, "KeyframeEffect", "target_get", arguments);
  },
  set: function target() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyframeEffect'].prototype, "KeyframeEffect", "target_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyframeEffect', "pseudoElement", {
  configurable: true,
  enumerable: true,
  get: function pseudoElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyframeEffect'].prototype, "KeyframeEffect", "pseudoElement_get", arguments);
  },
  set: function pseudoElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyframeEffect'].prototype, "KeyframeEffect", "pseudoElement_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyframeEffect', "composite", {
  configurable: true,
  enumerable: true,
  get: function composite() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyframeEffect'].prototype, "KeyframeEffect", "composite_get", arguments);
  },
  set: function composite() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyframeEffect'].prototype, "KeyframeEffect", "composite_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyframeEffect', "getKeyframes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getKeyframes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyframeEffect'].prototype, "KeyframeEffect", "getKeyframes", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyframeEffect', "setKeyframes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setKeyframes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyframeEffect'].prototype, "KeyframeEffect", "setKeyframes", arguments);
  }
}, 'prototype');