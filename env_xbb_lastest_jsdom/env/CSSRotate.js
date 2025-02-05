// CSSRotate对象

bodavm.memory.globalobj['CSSRotate'] = function CSSRotate() {
  console.log_copy('CSSRotate 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSRotate)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSRotate': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSRotate'], "CSSRotate");
bodavm.memory.globalobj['CSSRotate'].prototype.__proto__ = bodavm.memory.globalobj['CSSTransformComponent'].prototype;
bodavm.memory.globalobj['CSSRotate'].__proto__ = bodavm.memory.globalobj['CSSTransformComponent'];
bodavm.toolsFunc.defineProperty('CSSRotate', "angle", {
  configurable: true,
  enumerable: true,
  get: function angle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSRotate'].prototype, "CSSRotate", "angle_get", arguments);
  },
  set: function angle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSRotate'].prototype, "CSSRotate", "angle_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSRotate', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSRotate'].prototype, "CSSRotate", "x_get", arguments);
  },
  set: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSRotate'].prototype, "CSSRotate", "x_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSRotate', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSRotate'].prototype, "CSSRotate", "y_get", arguments);
  },
  set: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSRotate'].prototype, "CSSRotate", "y_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSRotate', "z", {
  configurable: true,
  enumerable: true,
  get: function z() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSRotate'].prototype, "CSSRotate", "z_get", arguments);
  },
  set: function z() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSRotate'].prototype, "CSSRotate", "z_set", arguments);
  }
}, 'prototype');