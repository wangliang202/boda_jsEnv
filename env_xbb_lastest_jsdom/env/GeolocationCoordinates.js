// GeolocationCoordinates对象

bodavm.memory.globalobj['GeolocationCoordinates'] = function GeolocationCoordinates() {
  console.log_copy('GeolocationCoordinates 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof GeolocationCoordinates)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['GeolocationCoordinates'], "GeolocationCoordinates");
bodavm.toolsFunc.defineProperty('GeolocationCoordinates', "latitude", {
  configurable: true,
  enumerable: true,
  get: function latitude() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GeolocationCoordinates'].prototype, "GeolocationCoordinates", "latitude_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('GeolocationCoordinates', "longitude", {
  configurable: true,
  enumerable: true,
  get: function longitude() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GeolocationCoordinates'].prototype, "GeolocationCoordinates", "longitude_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('GeolocationCoordinates', "altitude", {
  configurable: true,
  enumerable: true,
  get: function altitude() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GeolocationCoordinates'].prototype, "GeolocationCoordinates", "altitude_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('GeolocationCoordinates', "accuracy", {
  configurable: true,
  enumerable: true,
  get: function accuracy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GeolocationCoordinates'].prototype, "GeolocationCoordinates", "accuracy_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('GeolocationCoordinates', "altitudeAccuracy", {
  configurable: true,
  enumerable: true,
  get: function altitudeAccuracy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GeolocationCoordinates'].prototype, "GeolocationCoordinates", "altitudeAccuracy_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('GeolocationCoordinates', "heading", {
  configurable: true,
  enumerable: true,
  get: function heading() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GeolocationCoordinates'].prototype, "GeolocationCoordinates", "heading_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('GeolocationCoordinates', "speed", {
  configurable: true,
  enumerable: true,
  get: function speed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GeolocationCoordinates'].prototype, "GeolocationCoordinates", "speed_get", arguments);
  },
  set: undefined
}, 'prototype');