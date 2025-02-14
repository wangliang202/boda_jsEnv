// IntersectionObserver对象

bodavm.memory.globalobj['IntersectionObserver'] = function IntersectionObserver() {
  console.log_copy('IntersectionObserver 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof IntersectionObserver)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'IntersectionObserver': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['IntersectionObserver'], "IntersectionObserver");
bodavm.toolsFunc.defineProperty('IntersectionObserver', "root", {
  configurable: true,
  enumerable: true,
  get: function root() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IntersectionObserver'].prototype, "IntersectionObserver", "root_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IntersectionObserver', "rootMargin", {
  configurable: true,
  enumerable: true,
  get: function rootMargin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IntersectionObserver'].prototype, "IntersectionObserver", "rootMargin_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IntersectionObserver', "thresholds", {
  configurable: true,
  enumerable: true,
  get: function thresholds() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IntersectionObserver'].prototype, "IntersectionObserver", "thresholds_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IntersectionObserver', "delay", {
  configurable: true,
  enumerable: true,
  get: function delay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IntersectionObserver'].prototype, "IntersectionObserver", "delay_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IntersectionObserver', "trackVisibility", {
  configurable: true,
  enumerable: true,
  get: function trackVisibility() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IntersectionObserver'].prototype, "IntersectionObserver", "trackVisibility_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IntersectionObserver', "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IntersectionObserver'].prototype, "IntersectionObserver", "disconnect", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IntersectionObserver', "observe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function observe() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IntersectionObserver'].prototype, "IntersectionObserver", "observe", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IntersectionObserver', "takeRecords", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function takeRecords() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IntersectionObserver'].prototype, "IntersectionObserver", "takeRecords", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IntersectionObserver', "unobserve", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unobserve() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IntersectionObserver'].prototype, "IntersectionObserver", "unobserve", arguments);
  }
}, 'prototype');