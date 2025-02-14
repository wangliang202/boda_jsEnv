// OverconstrainedError对象

bodavm.memory.globalobj['OverconstrainedError'] = function OverconstrainedError() {
  console.log_copy('OverconstrainedError 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof OverconstrainedError)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'OverconstrainedError': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['OverconstrainedError'], "OverconstrainedError");
bodavm.toolsFunc.defineProperty('OverconstrainedError', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OverconstrainedError'].prototype, "OverconstrainedError", "name_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('OverconstrainedError', "message", {
  configurable: true,
  enumerable: true,
  get: function message() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OverconstrainedError'].prototype, "OverconstrainedError", "message_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('OverconstrainedError', "constraint", {
  configurable: true,
  enumerable: true,
  get: function constraint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OverconstrainedError'].prototype, "OverconstrainedError", "constraint_get", arguments);
  },
  set: undefined
}, 'prototype');