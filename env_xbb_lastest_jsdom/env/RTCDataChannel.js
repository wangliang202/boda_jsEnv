// RTCDataChannel对象

bodavm.memory.globalobj['RTCDataChannel'] = function RTCDataChannel() {
  console.log_copy('RTCDataChannel 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RTCDataChannel)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCDataChannel'], "RTCDataChannel");
bodavm.memory.globalobj['RTCDataChannel'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['RTCDataChannel'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('RTCDataChannel', "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "label_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "ordered", {
  configurable: true,
  enumerable: true,
  get: function ordered() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "ordered_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "maxPacketLifeTime", {
  configurable: true,
  enumerable: true,
  get: function maxPacketLifeTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "maxPacketLifeTime_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "maxRetransmits", {
  configurable: true,
  enumerable: true,
  get: function maxRetransmits() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "maxRetransmits_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "protocol", {
  configurable: true,
  enumerable: true,
  get: function protocol() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "protocol_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "negotiated", {
  configurable: true,
  enumerable: true,
  get: function negotiated() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "negotiated_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "id_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "readyState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "bufferedAmount", {
  configurable: true,
  enumerable: true,
  get: function bufferedAmount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "bufferedAmount_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "bufferedAmountLowThreshold", {
  configurable: true,
  enumerable: true,
  get: function bufferedAmountLowThreshold() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "bufferedAmountLowThreshold_get", arguments);
  },
  set: function bufferedAmountLowThreshold() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "bufferedAmountLowThreshold_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "onopen", {
  configurable: true,
  enumerable: true,
  get: function onopen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "onopen_get", arguments);
  },
  set: function onopen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "onopen_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "onbufferedamountlow", {
  configurable: true,
  enumerable: true,
  get: function onbufferedamountlow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "onbufferedamountlow_get", arguments);
  },
  set: function onbufferedamountlow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "onbufferedamountlow_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "onclosing", {
  configurable: true,
  enumerable: true,
  get: function onclosing() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "onclosing_get", arguments);
  },
  set: function onclosing() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "onclosing_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "onclose", {
  configurable: true,
  enumerable: true,
  get: function onclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "onclose_get", arguments);
  },
  set: function onclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "onclose_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "onmessage_get", arguments);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "onmessage_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "binaryType", {
  configurable: true,
  enumerable: true,
  get: function binaryType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "binaryType_get", arguments);
  },
  set: function binaryType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "binaryType_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "reliable", {
  configurable: true,
  enumerable: true,
  get: function reliable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "reliable_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDataChannel', "send", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function send() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDataChannel'].prototype, "RTCDataChannel", "send", arguments);
  }
}, 'prototype');