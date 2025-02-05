// FileSystemDirectoryHandle对象

bodavm.memory.globalobj['FileSystemDirectoryHandle'] = function FileSystemDirectoryHandle() {
  console.log_copy('FileSystemDirectoryHandle 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof FileSystemDirectoryHandle)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['FileSystemDirectoryHandle'], "FileSystemDirectoryHandle");
bodavm.memory.globalobj['FileSystemDirectoryHandle'].prototype.__proto__ = bodavm.memory.globalobj['FileSystemHandle'].prototype;
bodavm.memory.globalobj['FileSystemDirectoryHandle'].__proto__ = bodavm.memory.globalobj['FileSystemHandle'];
bodavm.toolsFunc.defineProperty('FileSystemDirectoryHandle', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemDirectoryHandle'].prototype, "FileSystemDirectoryHandle", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileSystemDirectoryHandle', "getDirectoryHandle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDirectoryHandle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemDirectoryHandle'].prototype, "FileSystemDirectoryHandle", "getDirectoryHandle", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileSystemDirectoryHandle', "getFileHandle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getFileHandle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemDirectoryHandle'].prototype, "FileSystemDirectoryHandle", "getFileHandle", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileSystemDirectoryHandle', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemDirectoryHandle'].prototype, "FileSystemDirectoryHandle", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileSystemDirectoryHandle', "removeEntry", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeEntry() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemDirectoryHandle'].prototype, "FileSystemDirectoryHandle", "removeEntry", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileSystemDirectoryHandle', "resolve", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function resolve() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemDirectoryHandle'].prototype, "FileSystemDirectoryHandle", "resolve", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileSystemDirectoryHandle', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemDirectoryHandle'].prototype, "FileSystemDirectoryHandle", "values", arguments);
  }
}, 'prototype');