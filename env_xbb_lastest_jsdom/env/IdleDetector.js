// IdleDetector对象

bodavm.memory.globalobj['IdleDetector'] = function IdleDetector() {
  console.log_copy('IdleDetector 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.IdleDetector();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['IdleDetector'], "IdleDetector");
bodavm.memory.globalobj['IdleDetector'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['IdleDetector'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('IdleDetector', "requestPermission", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestPermission() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IdleDetector'].undefined, "IdleDetector", "requestPermission", arguments);
  }
});
bodavm.toolsFunc.defineProperty('IdleDetector', "userState", {
  configurable: true,
  enumerable: true,
  get: function userState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IdleDetector'].prototype, "IdleDetector", "userState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IdleDetector', "screenState", {
  configurable: true,
  enumerable: true,
  get: function screenState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IdleDetector'].prototype, "IdleDetector", "screenState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IdleDetector', "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IdleDetector'].prototype, "IdleDetector", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IdleDetector'].prototype, "IdleDetector", "onchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IdleDetector', "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function start() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IdleDetector'].prototype, "IdleDetector", "start", arguments);
  }
}, 'prototype');