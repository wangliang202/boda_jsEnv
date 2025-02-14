// OffscreenCanvasRenderingContext2D对象

bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'] = function OffscreenCanvasRenderingContext2D() {
  console.log_copy('OffscreenCanvasRenderingContext2D 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'], "OffscreenCanvasRenderingContext2D");
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "canvas", {
  configurable: true,
  enumerable: true,
  get: function canvas() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "canvas_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "globalAlpha", {
  configurable: true,
  enumerable: true,
  get: function globalAlpha() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "globalAlpha_get", arguments);
  },
  set: function globalAlpha() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "globalAlpha_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "globalCompositeOperation", {
  configurable: true,
  enumerable: true,
  get: function globalCompositeOperation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "globalCompositeOperation_get", arguments);
  },
  set: function globalCompositeOperation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "globalCompositeOperation_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "filter", {
  configurable: true,
  enumerable: true,
  get: function filter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "filter_get", arguments);
  },
  set: function filter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "filter_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "imageSmoothingEnabled", {
  configurable: true,
  enumerable: true,
  get: function imageSmoothingEnabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "imageSmoothingEnabled_get", arguments);
  },
  set: function imageSmoothingEnabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "imageSmoothingEnabled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "imageSmoothingQuality", {
  configurable: true,
  enumerable: true,
  get: function imageSmoothingQuality() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "imageSmoothingQuality_get", arguments);
  },
  set: function imageSmoothingQuality() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "imageSmoothingQuality_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "strokeStyle", {
  configurable: true,
  enumerable: true,
  get: function strokeStyle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "strokeStyle_get", arguments);
  },
  set: function strokeStyle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "strokeStyle_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "fillStyle", {
  configurable: true,
  enumerable: true,
  get: function fillStyle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "fillStyle_get", arguments);
  },
  set: function fillStyle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "fillStyle_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "shadowOffsetX", {
  configurable: true,
  enumerable: true,
  get: function shadowOffsetX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "shadowOffsetX_get", arguments);
  },
  set: function shadowOffsetX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "shadowOffsetX_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "shadowOffsetY", {
  configurable: true,
  enumerable: true,
  get: function shadowOffsetY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "shadowOffsetY_get", arguments);
  },
  set: function shadowOffsetY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "shadowOffsetY_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "shadowBlur", {
  configurable: true,
  enumerable: true,
  get: function shadowBlur() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "shadowBlur_get", arguments);
  },
  set: function shadowBlur() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "shadowBlur_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "shadowColor", {
  configurable: true,
  enumerable: true,
  get: function shadowColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "shadowColor_get", arguments);
  },
  set: function shadowColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "shadowColor_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "lineWidth", {
  configurable: true,
  enumerable: true,
  get: function lineWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "lineWidth_get", arguments);
  },
  set: function lineWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "lineWidth_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "lineCap", {
  configurable: true,
  enumerable: true,
  get: function lineCap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "lineCap_get", arguments);
  },
  set: function lineCap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "lineCap_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "lineJoin", {
  configurable: true,
  enumerable: true,
  get: function lineJoin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "lineJoin_get", arguments);
  },
  set: function lineJoin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "lineJoin_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "miterLimit", {
  configurable: true,
  enumerable: true,
  get: function miterLimit() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "miterLimit_get", arguments);
  },
  set: function miterLimit() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "miterLimit_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "lineDashOffset", {
  configurable: true,
  enumerable: true,
  get: function lineDashOffset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "lineDashOffset_get", arguments);
  },
  set: function lineDashOffset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "lineDashOffset_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "font", {
  configurable: true,
  enumerable: true,
  get: function font() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "font_get", arguments);
  },
  set: function font() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "font_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "textAlign", {
  configurable: true,
  enumerable: true,
  get: function textAlign() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "textAlign_get", arguments);
  },
  set: function textAlign() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "textAlign_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "textBaseline", {
  configurable: true,
  enumerable: true,
  get: function textBaseline() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "textBaseline_get", arguments);
  },
  set: function textBaseline() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "textBaseline_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "direction", {
  configurable: true,
  enumerable: true,
  get: function direction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "direction_get", arguments);
  },
  set: function direction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "direction_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "fontKerning", {
  configurable: true,
  enumerable: true,
  get: function fontKerning() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "fontKerning_get", arguments);
  },
  set: function fontKerning() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "fontKerning_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "fontStretch", {
  configurable: true,
  enumerable: true,
  get: function fontStretch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "fontStretch_get", arguments);
  },
  set: function fontStretch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "fontStretch_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "fontVariantCaps", {
  configurable: true,
  enumerable: true,
  get: function fontVariantCaps() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "fontVariantCaps_get", arguments);
  },
  set: function fontVariantCaps() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "fontVariantCaps_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "letterSpacing", {
  configurable: true,
  enumerable: true,
  get: function letterSpacing() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "letterSpacing_get", arguments);
  },
  set: function letterSpacing() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "letterSpacing_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "textRendering", {
  configurable: true,
  enumerable: true,
  get: function textRendering() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "textRendering_get", arguments);
  },
  set: function textRendering() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "textRendering_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "wordSpacing", {
  configurable: true,
  enumerable: true,
  get: function wordSpacing() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "wordSpacing_get", arguments);
  },
  set: function wordSpacing() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "wordSpacing_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "clip", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clip() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "clip", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "createConicGradient", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createConicGradient() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "createConicGradient", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "createImageData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createImageData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "createImageData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "createLinearGradient", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createLinearGradient() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "createLinearGradient", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "createPattern", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createPattern() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "createPattern", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "createRadialGradient", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createRadialGradient() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "createRadialGradient", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "drawImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawImage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "drawImage", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "fill", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fill() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "fill", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "fillText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fillText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "fillText", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "getImageData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getImageData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "getImageData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "getLineDash", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getLineDash() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "getLineDash", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "getTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTransform() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "getTransform", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "isContextLost", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isContextLost() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "isContextLost", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "isPointInPath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isPointInPath() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "isPointInPath", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "isPointInStroke", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isPointInStroke() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "isPointInStroke", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "measureText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function measureText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "measureText", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "putImageData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function putImageData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "putImageData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "reset", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "roundRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function roundRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "roundRect", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "save", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function save() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "save", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "scale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scale() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "scale", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "setLineDash", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setLineDash() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "setLineDash", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "setTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setTransform() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "setTransform", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "stroke", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stroke() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "stroke", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "strokeText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function strokeText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "strokeText", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "transform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transform() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "transform", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "translate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function translate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "translate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "arc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function arc() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "arc", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "arcTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function arcTo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "arcTo", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "beginPath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function beginPath() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "beginPath", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "bezierCurveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bezierCurveTo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "bezierCurveTo", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "clearRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "clearRect", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "closePath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function closePath() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "closePath", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "ellipse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function ellipse() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "ellipse", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "fillRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fillRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "fillRect", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "lineTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function lineTo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "lineTo", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "moveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function moveTo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "moveTo", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "quadraticCurveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function quadraticCurveTo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "quadraticCurveTo", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "rect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "rect", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "resetTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function resetTransform() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "resetTransform", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "restore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function restore() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "restore", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "rotate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rotate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "rotate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('OffscreenCanvasRenderingContext2D', "strokeRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function strokeRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OffscreenCanvasRenderingContext2D'].prototype, "OffscreenCanvasRenderingContext2D", "strokeRect", arguments);
  }
}, 'prototype');