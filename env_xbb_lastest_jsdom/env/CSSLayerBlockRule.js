// CSSLayerBlockRule对象

bodavm.memory.globalobj['CSSLayerBlockRule'] = function CSSLayerBlockRule() {
  console.log_copy('CSSLayerBlockRule 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSLayerBlockRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSLayerBlockRule'], "CSSLayerBlockRule");
bodavm.memory.globalobj['CSSLayerBlockRule'].prototype.__proto__ = bodavm.memory.globalobj['CSSGroupingRule'].prototype;
bodavm.memory.globalobj['CSSLayerBlockRule'].__proto__ = bodavm.memory.globalobj['CSSGroupingRule'];
bodavm.toolsFunc.defineProperty('CSSLayerBlockRule', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSLayerBlockRule'].prototype, "CSSLayerBlockRule", "name_get", arguments);
  },
  set: undefined
}, 'prototype');