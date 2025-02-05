// Sensor对象

bodavm.memory.globalobj['Sensor'] = function Sensor() {
  console.log_copy('Sensor 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Sensor)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Sensor'], "Sensor");
bodavm.memory.globalobj['Sensor'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['Sensor'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('Sensor', "activated", {
  configurable: true,
  enumerable: true,
  get: function activated() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Sensor'].prototype, "Sensor", "activated_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Sensor', "hasReading", {
  configurable: true,
  enumerable: true,
  get: function hasReading() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Sensor'].prototype, "Sensor", "hasReading_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Sensor', "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Sensor'].prototype, "Sensor", "timestamp_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Sensor', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Sensor'].prototype, "Sensor", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Sensor'].prototype, "Sensor", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Sensor', "onreading", {
  configurable: true,
  enumerable: true,
  get: function onreading() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Sensor'].prototype, "Sensor", "onreading_get", arguments);
  },
  set: function onreading() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Sensor'].prototype, "Sensor", "onreading_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Sensor', "onactivate", {
  configurable: true,
  enumerable: true,
  get: function onactivate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Sensor'].prototype, "Sensor", "onactivate_get", arguments);
  },
  set: function onactivate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Sensor'].prototype, "Sensor", "onactivate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Sensor', "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function start() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Sensor'].prototype, "Sensor", "start", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Sensor', "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Sensor'].prototype, "Sensor", "stop", arguments);
  }
}, 'prototype');