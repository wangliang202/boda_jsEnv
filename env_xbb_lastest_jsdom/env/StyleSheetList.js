// StyleSheetList对象

bodavm.memory.globalobj['StyleSheetList'] = function StyleSheetList() {
  console.log_copy('StyleSheetList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof StyleSheetList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['StyleSheetList'], "StyleSheetList");
bodavm.toolsFunc.defineProperty('StyleSheetList', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StyleSheetList'].prototype, "StyleSheetList", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('StyleSheetList', "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StyleSheetList'].prototype, "StyleSheetList", "item", arguments);
  }
}, 'prototype');