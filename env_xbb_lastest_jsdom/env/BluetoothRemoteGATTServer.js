// BluetoothRemoteGATTServer对象

bodavm.memory.globalobj['BluetoothRemoteGATTServer'] = function BluetoothRemoteGATTServer() {
  console.log_copy('BluetoothRemoteGATTServer 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof BluetoothRemoteGATTServer)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BluetoothRemoteGATTServer'], "BluetoothRemoteGATTServer");
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTServer', "device", {
  configurable: true,
  enumerable: true,
  get: function device() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTServer'].prototype, "BluetoothRemoteGATTServer", "device_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTServer', "connected", {
  configurable: true,
  enumerable: true,
  get: function connected() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTServer'].prototype, "BluetoothRemoteGATTServer", "connected_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTServer', "connect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function connect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTServer'].prototype, "BluetoothRemoteGATTServer", "connect", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTServer', "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTServer'].prototype, "BluetoothRemoteGATTServer", "disconnect", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTServer', "getPrimaryService", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPrimaryService() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTServer'].prototype, "BluetoothRemoteGATTServer", "getPrimaryService", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTServer', "getPrimaryServices", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPrimaryServices() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTServer'].prototype, "BluetoothRemoteGATTServer", "getPrimaryServices", arguments);
  }
}, 'prototype');