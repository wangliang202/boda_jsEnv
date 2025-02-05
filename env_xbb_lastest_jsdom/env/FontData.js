// FontData对象

bodavm.memory.globalobj['FontData'] = function FontData() {
  console.log_copy('FontData 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof FontData)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['FontData'], "FontData");
bodavm.toolsFunc.defineProperty('FontData', "postscriptName", {
  configurable: true,
  enumerable: true,
  get: function postscriptName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontData'].prototype, "FontData", "postscriptName_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('FontData', "fullName", {
  configurable: true,
  enumerable: true,
  get: function fullName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontData'].prototype, "FontData", "fullName_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('FontData', "family", {
  configurable: true,
  enumerable: true,
  get: function family() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontData'].prototype, "FontData", "family_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('FontData', "style", {
  configurable: true,
  enumerable: true,
  get: function style() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontData'].prototype, "FontData", "style_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('FontData', "blob", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function blob() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontData'].prototype, "FontData", "blob", arguments);
  }
}, 'prototype');