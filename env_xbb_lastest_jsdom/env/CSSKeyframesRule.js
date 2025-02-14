// CSSKeyframesRule对象

bodavm.memory.globalobj['CSSKeyframesRule'] = function CSSKeyframesRule() {
  console.log_copy('CSSKeyframesRule 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSKeyframesRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSKeyframesRule'], "CSSKeyframesRule");
bodavm.memory.globalobj['CSSKeyframesRule'].prototype.__proto__ = bodavm.memory.globalobj['CSSRule'].prototype;
bodavm.memory.globalobj['CSSKeyframesRule'].__proto__ = bodavm.memory.globalobj['CSSRule'];
bodavm.toolsFunc.defineProperty('CSSKeyframesRule', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSKeyframesRule'].prototype, "CSSKeyframesRule", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSKeyframesRule'].prototype, "CSSKeyframesRule", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSKeyframesRule', "cssRules", {
  configurable: true,
  enumerable: true,
  get: function cssRules() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSKeyframesRule'].prototype, "CSSKeyframesRule", "cssRules_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSKeyframesRule', "appendRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendRule() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSKeyframesRule'].prototype, "CSSKeyframesRule", "appendRule", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSKeyframesRule', "deleteRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteRule() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSKeyframesRule'].prototype, "CSSKeyframesRule", "deleteRule", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSKeyframesRule', "findRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function findRule() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSKeyframesRule'].prototype, "CSSKeyframesRule", "findRule", arguments);
  }
}, 'prototype');