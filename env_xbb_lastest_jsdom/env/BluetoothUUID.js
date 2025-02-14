// BluetoothUUID对象

bodavm.memory.globalobj['BluetoothUUID'] = function BluetoothUUID() {
  console.log_copy('BluetoothUUID 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof BluetoothUUID)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BluetoothUUID'], "BluetoothUUID");
bodavm.toolsFunc.defineProperty('BluetoothUUID', "canonicalUUID", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function canonicalUUID() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothUUID'].undefined, "BluetoothUUID", "canonicalUUID", arguments);
  }
});
bodavm.toolsFunc.defineProperty('BluetoothUUID', "getCharacteristic", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCharacteristic() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothUUID'].undefined, "BluetoothUUID", "getCharacteristic", arguments);
  }
});
bodavm.toolsFunc.defineProperty('BluetoothUUID', "getDescriptor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDescriptor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothUUID'].undefined, "BluetoothUUID", "getDescriptor", arguments);
  }
});
bodavm.toolsFunc.defineProperty('BluetoothUUID', "getService", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getService() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothUUID'].undefined, "BluetoothUUID", "getService", arguments);
  }
});