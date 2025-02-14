// TaskAttributionTiming对象

bodavm.memory.globalobj['TaskAttributionTiming'] = function TaskAttributionTiming() {
  console.log_copy('TaskAttributionTiming 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof TaskAttributionTiming)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TaskAttributionTiming'], "TaskAttributionTiming");
bodavm.memory.globalobj['TaskAttributionTiming'].prototype.__proto__ = bodavm.memory.globalobj['PerformanceEntry'].prototype;
bodavm.memory.globalobj['TaskAttributionTiming'].__proto__ = bodavm.memory.globalobj['PerformanceEntry'];
bodavm.toolsFunc.defineProperty('TaskAttributionTiming', "containerType", {
  configurable: true,
  enumerable: true,
  get: function containerType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TaskAttributionTiming'].prototype, "TaskAttributionTiming", "containerType_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TaskAttributionTiming', "containerSrc", {
  configurable: true,
  enumerable: true,
  get: function containerSrc() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TaskAttributionTiming'].prototype, "TaskAttributionTiming", "containerSrc_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TaskAttributionTiming', "containerId", {
  configurable: true,
  enumerable: true,
  get: function containerId() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TaskAttributionTiming'].prototype, "TaskAttributionTiming", "containerId_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TaskAttributionTiming', "containerName", {
  configurable: true,
  enumerable: true,
  get: function containerName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TaskAttributionTiming'].prototype, "TaskAttributionTiming", "containerName_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TaskAttributionTiming', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TaskAttributionTiming'].prototype, "TaskAttributionTiming", "toJSON", arguments);
  }
}, 'prototype');