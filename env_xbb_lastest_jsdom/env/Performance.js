// Performance对象

bodavm.memory.globalobj['Performance'] = function Performance() {
  console.log_copy('Performance 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Performance)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Performance'], "Performance");
bodavm.memory.globalobj['Performance'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['Performance'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('Performance', "timeOrigin", {
  configurable: true,
  enumerable: true,
  get: function timeOrigin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Performance'].prototype, "Performance", "timeOrigin_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Performance', "onresourcetimingbufferfull", {
  configurable: true,
  enumerable: true,
  get: function onresourcetimingbufferfull() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Performance'].prototype, "Performance", "onresourcetimingbufferfull_get", arguments);
  },
  set: function onresourcetimingbufferfull() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Performance'].prototype, "Performance", "onresourcetimingbufferfull_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Performance', "clearMarks", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearMarks() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Performance'].prototype, "Performance", "clearMarks", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Performance', "clearMeasures", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearMeasures() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Performance'].prototype, "Performance", "clearMeasures", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Performance', "clearResourceTimings", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearResourceTimings() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Performance'].prototype, "Performance", "clearResourceTimings", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Performance', "getEntries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getEntries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Performance'].prototype, "Performance", "getEntries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Performance', "getEntriesByName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getEntriesByName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Performance'].prototype, "Performance", "getEntriesByName", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Performance', "getEntriesByType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getEntriesByType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Performance'].prototype, "Performance", "getEntriesByType", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Performance', "mark", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function mark() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Performance'].prototype, "Performance", "mark", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Performance', "measure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function measure() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Performance'].prototype, "Performance", "measure", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Performance', "now", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function now() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Performance'].prototype, "Performance", "now", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Performance', "setResourceTimingBufferSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setResourceTimingBufferSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Performance'].prototype, "Performance", "setResourceTimingBufferSize", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Performance', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Performance'].prototype, "Performance", "toJSON", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Performance', "timing", {
  configurable: true,
  enumerable: true,
  get: function timing() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Performance'].prototype, "Performance", "timing_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Performance', "navigation", {
  configurable: true,
  enumerable: true,
  get: function navigation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Performance'].prototype, "Performance", "navigation_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Performance', "memory", {
  configurable: true,
  enumerable: true,
  get: function memory() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Performance'].prototype, "Performance", "memory_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Performance', "eventCounts", {
  configurable: true,
  enumerable: true,
  get: function eventCounts() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Performance'].prototype, "Performance", "eventCounts_get", arguments);
  },
  set: undefined
}, 'prototype');

// performance对象

bodavm.memory.globalobj['performance'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['performance'].__proto__ = bodavm.memory.globalobj['Performance'].prototype;