// CSSVariableReferenceValue对象

bodavm.memory.globalobj['CSSVariableReferenceValue'] = function CSSVariableReferenceValue() {
  console.log_copy('CSSVariableReferenceValue 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSVariableReferenceValue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSVariableReferenceValue': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSVariableReferenceValue'], "CSSVariableReferenceValue");
bodavm.toolsFunc.defineProperty('CSSVariableReferenceValue', "variable", {
  configurable: true,
  enumerable: true,
  get: function variable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSVariableReferenceValue'].prototype, "CSSVariableReferenceValue", "variable_get", arguments);
  },
  set: function variable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSVariableReferenceValue'].prototype, "CSSVariableReferenceValue", "variable_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSVariableReferenceValue', "fallback", {
  configurable: true,
  enumerable: true,
  get: function fallback() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSVariableReferenceValue'].prototype, "CSSVariableReferenceValue", "fallback_get", arguments);
  },
  set: undefined
}, 'prototype');