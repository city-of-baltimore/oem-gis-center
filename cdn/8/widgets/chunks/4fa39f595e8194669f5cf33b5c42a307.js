"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-color-picker_3_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-color-picker_3.entry.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-color-picker_3.entry.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_color_picker": () => (/* binding */ ColorPicker),
/* harmony export */   "calcite_color_picker_hex_input": () => (/* binding */ ColorPickerHexInput),
/* harmony export */   "calcite_color_picker_swatch": () => (/* binding */ ColorPickerSwatch)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils-ddd03fe1.js */ "./node_modules/@esri/calcite-components/dist/esm/utils-ddd03fe1.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _math_e6aff5b3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./math-e6aff5b3.js */ "./node_modules/@esri/calcite-components/dist/esm/math-e6aff5b3.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/* harmony import */ var _throttle_d688fe13_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./throttle-d688fe13.js */ "./node_modules/@esri/calcite-components/dist/esm/throttle-d688fe13.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/* harmony import */ var _debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./debounce-b9072422.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-b9072422.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */















function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire();
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var colorName$1 = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var isArrayish = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};

var simpleSwizzle = createCommonjsModule(function (module) {



var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};
});

var colorString = createCommonjsModule(function (module) {
/* MIT license */


var hasOwnProperty = Object.hasOwnProperty;

var reverseNames = {};

// create a list of reverse color names
for (var name in colorName$1) {
	if (hasOwnProperty.call(colorName$1, name)) {
		reverseNames[colorName$1[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
	var keyword = /^(\w+)$/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha, 16) / 255;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			if (match[5]) {
				rgb[3] = parseFloat(match[4]) * 0.01;
			} else {
				rgb[3] = parseFloat(match[4]);
			}
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			if (match[5]) {
				rgb[3] = parseFloat(match[4]) * 0.01;
			} else {
				rgb[3] = parseFloat(match[4]);
			}
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		if (!hasOwnProperty.call(colorName$1, match[1])) {
			return null;
		}

		rgb = colorName$1[match[1]];
		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = simpleSwizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = simpleSwizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = simpleSwizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = simpleSwizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = simpleSwizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = Math.round(num).toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}
});

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

/* MIT license */
/* eslint-disable no-mixed-operators */


// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

const reverseKeywords = {};
for (const key of Object.keys(colorName)) {
	reverseKeywords[colorName[key]] = key;
}

const convert$1 = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

var conversions = convert$1;

// Hide .channels and .labels properties
for (const model of Object.keys(convert$1)) {
	if (!('channels' in convert$1[model])) {
		throw new Error('missing channels property: ' + model);
	}

	if (!('labels' in convert$1[model])) {
		throw new Error('missing channel labels property: ' + model);
	}

	if (convert$1[model].labels.length !== convert$1[model].channels) {
		throw new Error('channel and label counts mismatch: ' + model);
	}

	const {channels, labels} = convert$1[model];
	delete convert$1[model].channels;
	delete convert$1[model].labels;
	Object.defineProperty(convert$1[model], 'channels', {value: channels});
	Object.defineProperty(convert$1[model], 'labels', {value: labels});
}

convert$1.rgb.hsl = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const min = Math.min(r, g, b);
	const max = Math.max(r, g, b);
	const delta = max - min;
	let h;
	let s;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	const l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert$1.rgb.hsv = function (rgb) {
	let rdif;
	let gdif;
	let bdif;
	let h;
	let s;

	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const v = Math.max(r, g, b);
	const diff = v - Math.min(r, g, b);
	const diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = 0;
		s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}

		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert$1.rgb.hwb = function (rgb) {
	const r = rgb[0];
	const g = rgb[1];
	let b = rgb[2];
	const h = convert$1.rgb.hsl(rgb)[0];
	const w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert$1.rgb.cmyk = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;

	const k = Math.min(1 - r, 1 - g, 1 - b);
	const c = (1 - r - k) / (1 - k) || 0;
	const m = (1 - g - k) / (1 - k) || 0;
	const y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

function comparativeDistance(x, y) {
	/*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/
	return (
		((x[0] - y[0]) ** 2) +
		((x[1] - y[1]) ** 2) +
		((x[2] - y[2]) ** 2)
	);
}

convert$1.rgb.keyword = function (rgb) {
	const reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	let currentClosestDistance = Infinity;
	let currentClosestKeyword;

	for (const keyword of Object.keys(colorName)) {
		const value = colorName[keyword];

		// Compute comparative distance
		const distance = comparativeDistance(rgb, value);

		// Check if its less, if so set as closest
		if (distance < currentClosestDistance) {
			currentClosestDistance = distance;
			currentClosestKeyword = keyword;
		}
	}

	return currentClosestKeyword;
};

convert$1.keyword.rgb = function (keyword) {
	return colorName[keyword];
};

convert$1.rgb.xyz = function (rgb) {
	let r = rgb[0] / 255;
	let g = rgb[1] / 255;
	let b = rgb[2] / 255;

	// Assume sRGB
	r = r > 0.04045 ? (((r + 0.055) / 1.055) ** 2.4) : (r / 12.92);
	g = g > 0.04045 ? (((g + 0.055) / 1.055) ** 2.4) : (g / 12.92);
	b = b > 0.04045 ? (((b + 0.055) / 1.055) ** 2.4) : (b / 12.92);

	const x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	const y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	const z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert$1.rgb.lab = function (rgb) {
	const xyz = convert$1.rgb.xyz(rgb);
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert$1.hsl.rgb = function (hsl) {
	const h = hsl[0] / 360;
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;
	let t2;
	let t3;
	let val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	const t1 = 2 * l - t2;

	const rgb = [0, 0, 0];
	for (let i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}

		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert$1.hsl.hsv = function (hsl) {
	const h = hsl[0];
	let s = hsl[1] / 100;
	let l = hsl[2] / 100;
	let smin = s;
	const lmin = Math.max(l, 0.01);

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	const v = (l + s) / 2;
	const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert$1.hsv.rgb = function (hsv) {
	const h = hsv[0] / 60;
	const s = hsv[1] / 100;
	let v = hsv[2] / 100;
	const hi = Math.floor(h) % 6;

	const f = h - Math.floor(h);
	const p = 255 * v * (1 - s);
	const q = 255 * v * (1 - (s * f));
	const t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert$1.hsv.hsl = function (hsv) {
	const h = hsv[0];
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;
	const vmin = Math.max(v, 0.01);
	let sl;
	let l;

	l = (2 - s) * v;
	const lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert$1.hwb.rgb = function (hwb) {
	const h = hwb[0] / 360;
	let wh = hwb[1] / 100;
	let bl = hwb[2] / 100;
	const ratio = wh + bl;
	let f;

	// Wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	const i = Math.floor(6 * h);
	const v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	const n = wh + f * (v - wh); // Linear interpolation

	let r;
	let g;
	let b;
	/* eslint-disable max-statements-per-line,no-multi-spaces */
	switch (i) {
		default:
		case 6:
		case 0: r = v;  g = n;  b = wh; break;
		case 1: r = n;  g = v;  b = wh; break;
		case 2: r = wh; g = v;  b = n; break;
		case 3: r = wh; g = n;  b = v; break;
		case 4: r = n;  g = wh; b = v; break;
		case 5: r = v;  g = wh; b = n; break;
	}
	/* eslint-enable max-statements-per-line,no-multi-spaces */

	return [r * 255, g * 255, b * 255];
};

convert$1.cmyk.rgb = function (cmyk) {
	const c = cmyk[0] / 100;
	const m = cmyk[1] / 100;
	const y = cmyk[2] / 100;
	const k = cmyk[3] / 100;

	const r = 1 - Math.min(1, c * (1 - k) + k);
	const g = 1 - Math.min(1, m * (1 - k) + k);
	const b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert$1.xyz.rgb = function (xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;
	let r;
	let g;
	let b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// Assume sRGB
	r = r > 0.0031308
		? ((1.055 * (r ** (1.0 / 2.4))) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * (g ** (1.0 / 2.4))) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * (b ** (1.0 / 2.4))) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert$1.xyz.lab = function (xyz) {
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert$1.lab.xyz = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let x;
	let y;
	let z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	const y2 = y ** 3;
	const x2 = x ** 3;
	const z2 = z ** 3;
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert$1.lab.lch = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let h;

	const hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	const c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert$1.lch.lab = function (lch) {
	const l = lch[0];
	const c = lch[1];
	const h = lch[2];

	const hr = h / 360 * 2 * Math.PI;
	const a = c * Math.cos(hr);
	const b = c * Math.sin(hr);

	return [l, a, b];
};

convert$1.rgb.ansi16 = function (args, saturation = null) {
	const [r, g, b] = args;
	let value = saturation === null ? convert$1.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	let ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert$1.hsv.ansi16 = function (args) {
	// Optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert$1.rgb.ansi16(convert$1.hsv.rgb(args), args[2]);
};

convert$1.rgb.ansi256 = function (args) {
	const r = args[0];
	const g = args[1];
	const b = args[2];

	// We use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	const ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert$1.ansi16.rgb = function (args) {
	let color = args % 10;

	// Handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	const mult = (~~(args > 50) + 1) * 0.5;
	const r = ((color & 1) * mult) * 255;
	const g = (((color >> 1) & 1) * mult) * 255;
	const b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert$1.ansi256.rgb = function (args) {
	// Handle greyscale
	if (args >= 232) {
		const c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	let rem;
	const r = Math.floor(args / 36) / 5 * 255;
	const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	const b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert$1.rgb.hex = function (args) {
	const integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert$1.hex.rgb = function (args) {
	const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	let colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(char => {
			return char + char;
		}).join('');
	}

	const integer = parseInt(colorString, 16);
	const r = (integer >> 16) & 0xFF;
	const g = (integer >> 8) & 0xFF;
	const b = integer & 0xFF;

	return [r, g, b];
};

convert$1.rgb.hcg = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const max = Math.max(Math.max(r, g), b);
	const min = Math.min(Math.min(r, g), b);
	const chroma = (max - min);
	let grayscale;
	let hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert$1.hsl.hcg = function (hsl) {
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;

	const c = l < 0.5 ? (2.0 * s * l) : (2.0 * s * (1.0 - l));

	let f = 0;
	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert$1.hsv.hcg = function (hsv) {
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;

	const c = s * v;
	let f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert$1.hcg.rgb = function (hcg) {
	const h = hcg[0] / 360;
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	const pure = [0, 0, 0];
	const hi = (h % 1) * 6;
	const v = hi % 1;
	const w = 1 - v;
	let mg = 0;

	/* eslint-disable max-statements-per-line */
	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}
	/* eslint-enable max-statements-per-line */

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert$1.hcg.hsv = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const v = c + g * (1.0 - c);
	let f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert$1.hcg.hsl = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const l = g * (1.0 - c) + 0.5 * c;
	let s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert$1.hcg.hwb = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;
	const v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert$1.hwb.hcg = function (hwb) {
	const w = hwb[1] / 100;
	const b = hwb[2] / 100;
	const v = 1 - b;
	const c = v - w;
	let g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert$1.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert$1.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert$1.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert$1.gray.hsl = function (args) {
	return [0, 0, args[0]];
};

convert$1.gray.hsv = convert$1.gray.hsl;

convert$1.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert$1.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert$1.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert$1.gray.hex = function (gray) {
	const val = Math.round(gray[0] / 100 * 255) & 0xFF;
	const integer = (val << 16) + (val << 8) + val;

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert$1.rgb.gray = function (rgb) {
	const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};

/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	const graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	const models = Object.keys(conversions);

	for (let len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	const graph = buildGraph();
	const queue = [fromModel]; // Unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		const current = queue.pop();
		const adjacents = Object.keys(conversions[current]);

		for (let len = adjacents.length, i = 0; i < len; i++) {
			const adjacent = adjacents[i];
			const node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	const path = [graph[toModel].parent, toModel];
	let fn = conversions[graph[toModel].parent][toModel];

	let cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route = function (fromModel) {
	const graph = deriveBFS(fromModel);
	const conversion = {};

	const models = Object.keys(graph);
	for (let len = models.length, i = 0; i < len; i++) {
		const toModel = models[i];
		const node = graph[toModel];

		if (node.parent === null) {
			// No possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

const convert = {};

const models = Object.keys(conversions);

function wrapRaw(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];
		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		return fn(args);
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];

		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		const result = fn(args);

		// We're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (let len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(fromModel => {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	const routes = route(fromModel);
	const routeModels = Object.keys(routes);

	routeModels.forEach(toModel => {
		const fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var colorConvert = convert;

const skippedModels = [
	// To be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// Gray conflicts with some method names, and has its own method defined.
	'gray',

	// Shouldn't really be in color-convert either...
	'hex',
];

const hashedModelKeys = {};
for (const model of Object.keys(colorConvert)) {
	hashedModelKeys[[...colorConvert[model].labels].sort().join('')] = model;
}

const limiters = {};

function Color(object, model) {
	if (!(this instanceof Color)) {
		return new Color(object, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in colorConvert)) {
		throw new Error('Unknown model: ' + model);
	}

	let i;
	let channels;

	if (object == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (object instanceof Color) {
		this.model = object.model;
		this.color = [...object.color];
		this.valpha = object.valpha;
	} else if (typeof object === 'string') {
		const result = colorString.get(object);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + object);
		}

		this.model = result.model;
		channels = colorConvert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (object.length > 0) {
		this.model = model || 'rgb';
		channels = colorConvert[this.model].channels;
		const newArray = Array.prototype.slice.call(object, 0, channels);
		this.color = zeroArray(newArray, channels);
		this.valpha = typeof object[channels] === 'number' ? object[channels] : 1;
	} else if (typeof object === 'number') {
		// This is always RGB - can be converted later on.
		this.model = 'rgb';
		this.color = [
			(object >> 16) & 0xFF,
			(object >> 8) & 0xFF,
			object & 0xFF,
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		const keys = Object.keys(object);
		if ('alpha' in object) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof object.alpha === 'number' ? object.alpha : 0;
		}

		const hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(object));
		}

		this.model = hashedModelKeys[hashedKeys];

		const {labels} = colorConvert[this.model];
		const color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(object[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// Perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = colorConvert[this.model].channels;
		for (i = 0; i < channels; i++) {
			const limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString() {
		return this.string();
	},

	toJSON() {
		return this[this.model]();
	},

	string(places) {
		let self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
		return colorString.to[self.model](args);
	},

	percentString(places) {
		const self = this.rgb().round(typeof places === 'number' ? places : 1);
		const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
		return colorString.to.rgb.percent(args);
	},

	array() {
		return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
	},

	object() {
		const result = {};
		const {channels} = colorConvert[this.model];
		const {labels} = colorConvert[this.model];

		for (let i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray() {
		const rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject() {
		const rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round(places) {
		places = Math.max(places || 0, 0);
		return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
	},

	alpha(value) {
		if (value !== undefined) {
			return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
		}

		return this.valpha;
	},

	// Rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, value => ((value % 360) + 360) % 360),

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(95.047)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(108.833)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		return colorConvert[this.model].keyword(this.color);
	},

	hex(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	hexa(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		const rgbArray = this.rgb().round().color;

		let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
		if (alphaHex.length === 1) {
			alphaHex = '0' + alphaHex;
		}

		return colorString.to.hex(rgbArray) + alphaHex;
	},

	rgbNumber() {
		const rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity() {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		const rgb = this.rgb().color;

		const lum = [];
		for (const [i, element] of rgb.entries()) {
			const chan = element / 255;
			lum[i] = (chan <= 0.04045) ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast(color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		const lum1 = this.luminosity();
		const lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level(color2) {
		// https://www.w3.org/TR/WCAG/#contrast-enhanced
		const contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark() {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		const rgb = this.rgb().color;
		const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 10000;
		return yiq < 128;
	},

	isLight() {
		return !this.isDark();
	},

	negate() {
		const rgb = this.rgb();
		for (let i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}

		return rgb;
	},

	lighten(ratio) {
		const hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken(ratio) {
		const hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten(ratio) {
		const hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken(ratio) {
		const hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale() {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		const rgb = this.rgb().color;
		const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(value, value, value);
	},

	fade(ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer(ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate(degrees) {
		const hsl = this.hsl();
		let hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix(mixinColor, weight) {
		// Ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}

		const color1 = mixinColor.rgb();
		const color2 = this.rgb();
		const p = weight === undefined ? 0.5 : weight;

		const w = 2 * p - 1;
		const a = color1.alpha() - color2.alpha();

		const w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2;
		const w2 = 1 - w1;

		return Color.rgb(
			w1 * color1.red() + w2 * color2.red(),
			w1 * color1.green() + w2 * color2.green(),
			w1 * color1.blue() + w2 * color2.blue(),
			color1.alpha() * p + color2.alpha() * (1 - p));
	},
};

// Model conversion methods and static constructors
for (const model of Object.keys(colorConvert)) {
	if (skippedModels.includes(model)) {
		continue;
	}

	const {channels} = colorConvert[model];

	// Conversion methods
	Color.prototype[model] = function (...args) {
		if (this.model === model) {
			return new Color(this);
		}

		if (args.length > 0) {
			return new Color(args, model);
		}

		return new Color([...assertArray(colorConvert[this.model][model].raw(this.color)), this.valpha], model);
	};

	// 'static' construction methods
	Color[model] = function (...args) {
		let color = args[0];
		if (typeof color === 'number') {
			color = zeroArray(args, channels);
		}

		return new Color(color, model);
	};
}

function roundTo(number, places) {
	return Number(number.toFixed(places));
}

function roundToPlace(places) {
	return function (number) {
		return roundTo(number, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	for (const m of model) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	}

	model = model[0];

	return function (value) {
		let result;

		if (value !== undefined) {
			if (modifier) {
				value = modifier(value);
			}

			result = this[model]();
			result.color[channel] = value;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(value) {
	return Array.isArray(value) ? value : [value];
}

function zeroArray(array, length) {
	for (let i = 0; i < length; i++) {
		if (typeof array[i] !== 'number') {
			array[i] = 0;
		}
	}

	return array;
}

var color = Color;

const CSS$2 = {
  channel: "channel",
  channels: "channels",
  colorField: "color-field",
  colorFieldScope: "scope--color-field",
  colorMode: "color-mode",
  colorModeContainer: "color-mode-container",
  container: "container",
  control: "control",
  controlAndScope: "control-and-scope",
  controlSection: "control-section",
  deleteColor: "delete-color",
  header: "header",
  hexAndChannelsGroup: "hex-and-channels-group",
  hexOptions: "color-hex-options",
  hueScope: "scope--hue",
  hueSlider: "hue-slider",
  opacityScope: "scope--opacity",
  opacitySlider: "opacity-slider",
  preview: "preview",
  previewAndSliders: "preview-and-sliders",
  saveColor: "save-color",
  savedColor: "saved-color",
  savedColors: "saved-colors",
  savedColorsButtons: "saved-colors-buttons",
  savedColorsSection: "saved-colors-section",
  scope: "scope",
  section: "section",
  slider: "slider",
  sliders: "sliders",
  splitSection: "section--split"
};
const DEFAULT_COLOR$1 = color("#007AC2");
const DEFAULT_STORAGE_KEY_PREFIX = "calcite-color-";
const RGB_LIMITS = {
  r: 255,
  g: 255,
  b: 255
};
const HSV_LIMITS = {
  h: 360,
  s: 100,
  v: 100
};
const OPACITY_LIMITS = {
  min: 0,
  max: 100
};
const DIMENSIONS = {
  s: {
    slider: {
      height: 12,
      width: 104
    },
    colorField: {
      height: 80,
      width: 160
    },
    thumb: {
      radius: 10
    }
  },
  m: {
    slider: {
      height: 12,
      width: 204
    },
    colorField: {
      height: 150,
      width: 272
    },
    thumb: {
      radius: 10
    }
  },
  l: {
    slider: {
      height: 12,
      width: 384
    },
    colorField: {
      height: 200,
      width: 464
    },
    thumb: {
      radius: 10
    }
  }
};

const colorPickerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){--calcite-color-picker-spacing:8px}:host([scale=s]) .container{inline-size:160px}:host([scale=s]) .saved-colors{gap:0.25rem;grid-template-columns:repeat(auto-fill, 20px)}:host([scale=m]){--calcite-color-picker-spacing:12px}:host([scale=m]) .container{inline-size:272px}:host([scale=l]){--calcite-color-picker-spacing:16px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) .container{inline-size:464px}:host([scale=l]) .section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}:host([scale=l]) .saved-colors{grid-template-columns:repeat(auto-fill, 32px)}:host([scale=l]) .control-section{flex-wrap:nowrap;align-items:baseline;flex-wrap:wrap}:host([scale=l]) .color-hex-options{display:flex;flex-shrink:1;flex-direction:column;justify-content:space-around}:host([scale=l]) .color-mode-container{flex-shrink:3}.container{background-color:var(--calcite-ui-foreground-1);display:inline-block;border:1px solid var(--calcite-ui-border-1)}.control-and-scope{position:relative;display:flex;cursor:pointer;touch-action:none}.scope{position:absolute;z-index:var(--calcite-app-z-index);font-size:var(--calcite-font-size--1);outline-color:transparent}.scope:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          );outline-offset:16px}.hex-and-channels-group{inline-size:100%}.hex-and-channels-group,.control-section{display:flex;flex-direction:row;flex-wrap:wrap}.section{padding-block:0 var(--calcite-color-picker-spacing);padding-inline:var(--calcite-color-picker-spacing)}.section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}.sliders{display:flex;flex-direction:column;justify-content:space-between;margin-inline-start:var(--calcite-color-picker-spacing)}.preview-and-sliders{display:flex;align-items:center;padding:var(--calcite-color-picker-spacing)}.color-hex-options,.section--split{flex-grow:1}.header{display:flex;align-items:center;justify-content:space-between;color:var(--calcite-ui-text-1)}.color-mode-container{padding-block-start:var(--calcite-color-picker-spacing)}.channels{display:flex;row-gap:0.125rem}.channel[data-channel-index=\"3\"]{inline-size:159px}:host([scale=s]) .channels{flex-wrap:wrap}:host([scale=s]) .channel{flex-basis:30%;flex-grow:1}:host([scale=s]) .channel[data-channel-index=\"3\"]{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .channel[data-channel-index=\"3\"]{inline-size:131px}.saved-colors{display:grid;gap:0.5rem;padding-block-start:var(--calcite-color-picker-spacing);grid-template-columns:repeat(auto-fill, 24px)}.saved-colors-buttons{display:flex}.saved-color{outline-offset:0;outline-color:transparent;cursor:pointer}.saved-color:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.saved-color:hover{transition:outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}";

const throttleFor60FpsInMs = 16;
const ColorPicker = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteColorPickerChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteColorPickerChange", 6);
    this.calciteColorPickerInput = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteColorPickerInput", 6);
    this.internalColorUpdateContext = null;
    this.mode = _utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.C.HEX;
    this.shiftKeyChannelAdjustment = 0;
    this.handleTabActivate = (event) => {
      this.channelMode = event.currentTarget.getAttribute("data-color-mode");
      this.updateChannelsFromColor(this.color);
    };
    this.handleColorFieldScopeKeyDown = (event) => {
      const { key } = event;
      const arrowKeyToXYOffset = {
        ArrowUp: { x: 0, y: -10 },
        ArrowRight: { x: 10, y: 0 },
        ArrowDown: { x: 0, y: 10 },
        ArrowLeft: { x: -10, y: 0 }
      };
      if (arrowKeyToXYOffset[key]) {
        event.preventDefault();
        this.scopeOrientation = key === "ArrowDown" || key === "ArrowUp" ? "vertical" : "horizontal";
        this.captureColorFieldColor(this.colorFieldScopeLeft + arrowKeyToXYOffset[key].x || 0, this.colorFieldScopeTop + arrowKeyToXYOffset[key].y || 0, false);
      }
    };
    this.handleHueScopeKeyDown = (event) => {
      const modifier = event.shiftKey ? 10 : 1;
      const { key } = event;
      const arrowKeyToXOffset = {
        ArrowUp: 1,
        ArrowRight: 1,
        ArrowDown: -1,
        ArrowLeft: -1
      };
      if (arrowKeyToXOffset[key]) {
        event.preventDefault();
        const delta = arrowKeyToXOffset[key] * modifier;
        const hue = this.baseColorFieldColor.hue();
        const color = this.baseColorFieldColor.hue(hue + delta);
        this.internalColorSet(color, false);
      }
    };
    this.handleHexInputChange = (event) => {
      event.stopPropagation();
      const { allowEmpty, color: color$1 } = this;
      const input = event.target;
      const hex = input.value;
      if (allowEmpty && !hex) {
        this.internalColorSet(null);
        return;
      }
      const normalizedHex = color$1 && (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.n)((0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.a)(color$1, (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.mode)));
      if (hex !== normalizedHex) {
        this.internalColorSet(color(hex));
      }
    };
    this.handleSavedColorSelect = (event) => {
      const swatch = event.currentTarget;
      this.internalColorSet(color(swatch.color));
    };
    this.handleChannelInput = (event) => {
      const input = event.currentTarget;
      const channelIndex = Number(input.getAttribute("data-channel-index"));
      const isAlphaChannel = channelIndex === 3;
      const limit = isAlphaChannel
        ? OPACITY_LIMITS.max
        : this.channelMode === "rgb"
          ? RGB_LIMITS[Object.keys(RGB_LIMITS)[channelIndex]]
          : HSV_LIMITS[Object.keys(HSV_LIMITS)[channelIndex]];
      let inputValue;
      if (this.allowEmpty && !input.value) {
        inputValue = "";
      }
      else {
        const value = Number(input.value);
        const adjustedValue = value + this.shiftKeyChannelAdjustment;
        const clamped = (0,_math_e6aff5b3_js__WEBPACK_IMPORTED_MODULE_7__.c)(adjustedValue, 0, limit);
        inputValue = clamped.toString();
      }
      input.value = inputValue;
      // TODO: refactor calcite-input so we don't need to sync the internals
      // https://github.com/Esri/calcite-components/issues/6100
      input.internalSyncChildElValue();
    };
    this.handleChannelChange = (event) => {
      const input = event.currentTarget;
      const channelIndex = Number(input.getAttribute("data-channel-index"));
      const channels = [...this.channels];
      const shouldClearChannels = this.allowEmpty && !input.value;
      if (shouldClearChannels) {
        this.channels = [null, null, null, null];
        this.internalColorSet(null);
        return;
      }
      const isAlphaChannel = channelIndex === 3;
      const value = Number(input.value);
      channels[channelIndex] = isAlphaChannel ? (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.o)(value) : value;
      this.updateColorFromChannels(channels);
    };
    this.handleSavedColorKeyDown = (event) => {
      if ((0,_key_3389d870_js__WEBPACK_IMPORTED_MODULE_4__.i)(event.key)) {
        event.preventDefault();
        this.handleSavedColorSelect(event);
      }
    };
    this.handleColorFieldPointerDown = (event) => {
      if (!(0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.i)(event)) {
        return;
      }
      const { offsetX, offsetY } = event;
      document.addEventListener("pointermove", this.globalPointerMoveHandler);
      document.addEventListener("pointerup", this.globalPointerUpHandler, { once: true });
      this.activeCanvasInfo = {
        context: this.colorFieldRenderingContext,
        bounds: this.colorFieldRenderingContext.canvas.getBoundingClientRect()
      };
      this.captureColorFieldColor(offsetX, offsetY);
      this.colorFieldScopeNode.focus();
    };
    this.handleHueSliderPointerDown = (event) => {
      if (!(0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.i)(event)) {
        return;
      }
      const { offsetX } = event;
      document.addEventListener("pointermove", this.globalPointerMoveHandler);
      document.addEventListener("pointerup", this.globalPointerUpHandler, { once: true });
      this.activeCanvasInfo = {
        context: this.hueSliderRenderingContext,
        bounds: this.hueSliderRenderingContext.canvas.getBoundingClientRect()
      };
      this.captureHueSliderColor(offsetX);
      this.hueScopeNode.focus();
    };
    this.handleOpacitySliderPointerDown = (event) => {
      if (!(0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.i)(event)) {
        return;
      }
      const { offsetX } = event;
      document.addEventListener("pointermove", this.globalPointerMoveHandler);
      document.addEventListener("pointerup", this.globalPointerUpHandler, { once: true });
      this.activeCanvasInfo = {
        context: this.opacitySliderRenderingContext,
        bounds: this.opacitySliderRenderingContext.canvas.getBoundingClientRect()
      };
      this.captureOpacitySliderValue(offsetX);
      this.opacityScopeNode.focus();
    };
    this.globalPointerUpHandler = (event) => {
      if (!(0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.i)(event)) {
        return;
      }
      const previouslyDragging = this.activeCanvasInfo;
      this.activeCanvasInfo = null;
      this.drawColorControls();
      if (previouslyDragging) {
        this.calciteColorPickerChange.emit();
      }
    };
    this.globalPointerMoveHandler = (event) => {
      const { activeCanvasInfo, el } = this;
      if (!el.isConnected || !activeCanvasInfo) {
        return;
      }
      const { context, bounds } = activeCanvasInfo;
      let samplingX;
      let samplingY;
      const { clientX, clientY } = event;
      if (context.canvas.matches(":hover")) {
        samplingX = clientX - bounds.x;
        samplingY = clientY - bounds.y;
      }
      else {
        // snap x and y to the closest edge
        if (clientX < bounds.x + bounds.width && clientX > bounds.x) {
          samplingX = clientX - bounds.x;
        }
        else if (clientX < bounds.x) {
          samplingX = 0;
        }
        else {
          samplingX = bounds.width - 1;
        }
        if (clientY < bounds.y + bounds.height && clientY > bounds.y) {
          samplingY = clientY - bounds.y;
        }
        else if (clientY < bounds.y) {
          samplingY = 0;
        }
        else {
          samplingY = bounds.height;
        }
      }
      if (context === this.colorFieldRenderingContext) {
        this.captureColorFieldColor(samplingX, samplingY, false);
      }
      else if (context === this.hueSliderRenderingContext) {
        this.captureHueSliderColor(samplingX);
      }
      else if (context === this.opacitySliderRenderingContext) {
        this.captureOpacitySliderValue(samplingX);
      }
    };
    this.storeColorFieldScope = (node) => {
      this.colorFieldScopeNode = node;
    };
    this.storeHueScope = (node) => {
      this.hueScopeNode = node;
    };
    this.renderChannelsTabTitle = (channelMode) => {
      const { channelMode: activeChannelMode, messages } = this;
      const selected = channelMode === activeChannelMode;
      const label = channelMode === "rgb" ? messages.rgb : messages.hsv;
      return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-tab-title", { class: CSS$2.colorMode, "data-color-mode": channelMode, key: channelMode, onCalciteTabsActivate: this.handleTabActivate, selected: selected }, label));
    };
    this.renderChannelsTab = (channelMode) => {
      const { allowEmpty, channelMode: activeChannelMode, channels, messages, alphaChannel } = this;
      const selected = channelMode === activeChannelMode;
      const isRgb = channelMode === "rgb";
      const channelAriaLabels = isRgb
        ? [messages.red, messages.green, messages.blue]
        : [messages.hue, messages.saturation, messages.value];
      const direction = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el);
      const channelsToRender = alphaChannel ? channels : channels.slice(0, 3);
      return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-tab", { class: CSS$2.control, key: channelMode, selected: selected }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.channels, dir: "ltr" }, channelsToRender.map((channelValue, index) => {
        const isAlphaChannel = index === 3;
        if (isAlphaChannel) {
          channelValue =
            allowEmpty && !channelValue ? channelValue : (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.b)(channelValue);
        }
        /* the channel container is ltr, so we apply the host's direction */
        return this.renderChannel(channelValue, index, channelAriaLabels[index], direction, isAlphaChannel ? "%" : "");
      }))));
    };
    this.renderChannel = (value, index, ariaLabel, direction, suffix) => {
      return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-input", { class: CSS$2.channel, "data-channel-index": index, dir: direction, key: index, label: ariaLabel, lang: this.effectiveLocale, numberButtonType: "none", numberingSystem: this.numberingSystem, onCalciteInputChange: this.handleChannelChange, onCalciteInputInput: this.handleChannelInput, onKeyDown: this.handleKeyDown, scale: this.scale === "l" ? "m" : "s",
        // workaround to ensure input borders overlap as desired
        // this is because the build transforms margin-left to its
        // logical-prop, which is undesired as channels are always ltr
        style: {
          marginLeft: index > 0 && !(this.scale === "s" && this.alphaChannel && index === 3) ? "-1px" : ""
        }, suffixText: suffix, type: "number", value: value?.toString() }));
    };
    this.deleteColor = () => {
      const colorToDelete = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.color, this.alphaChannel);
      const inStorage = this.savedColors.indexOf(colorToDelete) > -1;
      if (!inStorage) {
        return;
      }
      const savedColors = this.savedColors.filter((color) => color !== colorToDelete);
      this.savedColors = savedColors;
      const storageKey = `${DEFAULT_STORAGE_KEY_PREFIX}${this.storageId}`;
      if (this.storageId) {
        localStorage.setItem(storageKey, JSON.stringify(savedColors));
      }
    };
    this.saveColor = () => {
      const colorToSave = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.color, this.alphaChannel);
      const alreadySaved = this.savedColors.indexOf(colorToSave) > -1;
      if (alreadySaved) {
        return;
      }
      const savedColors = [...this.savedColors, colorToSave];
      this.savedColors = savedColors;
      const storageKey = `${DEFAULT_STORAGE_KEY_PREFIX}${this.storageId}`;
      if (this.storageId) {
        localStorage.setItem(storageKey, JSON.stringify(savedColors));
      }
    };
    this.drawColorControls = (0,_throttle_d688fe13_js__WEBPACK_IMPORTED_MODULE_9__.t)((type = "all") => {
      if ((type === "all" || type === "color-field") && this.colorFieldRenderingContext) {
        this.drawColorField();
      }
      if ((type === "all" || type === "hue-slider") && this.hueSliderRenderingContext) {
        this.drawHueSlider();
      }
      if (this.alphaChannel &&
        (type === "all" || type === "opacity-slider") &&
        this.opacitySliderRenderingContext) {
        this.drawOpacitySlider();
      }
    }, throttleFor60FpsInMs);
    this.captureColorFieldColor = (x, y, skipEqual = true) => {
      const { dimensions: { colorField: { height, width } } } = this;
      const saturation = Math.round((HSV_LIMITS.s / width) * x);
      const value = Math.round((HSV_LIMITS.v / height) * (height - y));
      this.internalColorSet(this.baseColorFieldColor.hsv().saturationv(saturation).value(value), skipEqual);
    };
    this.initColorField = (canvas) => {
      this.colorFieldRenderingContext = canvas.getContext("2d");
      this.updateCanvasSize("color-field");
      this.drawColorControls();
    };
    this.initHueSlider = (canvas) => {
      this.hueSliderRenderingContext = canvas.getContext("2d");
      this.updateCanvasSize("hue-slider");
      this.drawHueSlider();
    };
    this.initOpacitySlider = (canvas) => {
      this.opacitySliderRenderingContext = canvas.getContext("2d");
      this.updateCanvasSize("opacity-slider");
      this.drawOpacitySlider();
    };
    this.storeOpacityScope = (node) => {
      this.opacityScopeNode = node;
    };
    this.handleOpacityScopeKeyDown = (event) => {
      const modifier = event.shiftKey ? 10 : 1;
      const { key } = event;
      const arrowKeyToXOffset = {
        ArrowUp: 1,
        ArrowRight: 1,
        ArrowDown: -1,
        ArrowLeft: -1
      };
      if (arrowKeyToXOffset[key]) {
        event.preventDefault();
        const delta = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.o)(arrowKeyToXOffset[key] * modifier);
        this.captureHueSliderColor(this.opacityScopeLeft + delta);
      }
    };
    this.allowEmpty = false;
    this.alphaChannel = false;
    this.channelsDisabled = false;
    this.color = DEFAULT_COLOR$1;
    this.disabled = false;
    this.format = "auto";
    this.hideChannels = false;
    this.hexDisabled = false;
    this.hideHex = false;
    this.hideSaved = false;
    this.savedDisabled = false;
    this.scale = "m";
    this.storageId = undefined;
    this.messageOverrides = undefined;
    this.numberingSystem = undefined;
    this.value = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.n)((0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.a)(DEFAULT_COLOR$1, this.alphaChannel));
    this.defaultMessages = undefined;
    this.channelMode = "rgb";
    this.channels = this.toChannels(DEFAULT_COLOR$1);
    this.dimensions = DIMENSIONS.m;
    this.effectiveLocale = "";
    this.messages = undefined;
    this.savedColors = [];
    this.colorFieldScopeTop = undefined;
    this.colorFieldScopeLeft = undefined;
    this.hueScopeLeft = undefined;
    this.opacityScopeLeft = undefined;
    this.scopeOrientation = undefined;
  }
  handleAlphaChannelChange(alphaChannel) {
    const { format } = this;
    if (alphaChannel && format !== "auto" && !(0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.c)(format)) {
      console.warn(`ignoring alphaChannel as the current format (${format}) does not support alpha`);
      this.alphaChannel = false;
    }
  }
  handleColorChange(color, oldColor) {
    this.drawColorControls();
    this.updateChannelsFromColor(color);
    this.previousColor = oldColor;
  }
  handleFormatChange(format) {
    this.setMode(format);
    this.internalColorSet(this.color, false, "internal");
  }
  handleScaleChange(scale = "m") {
    this.updateDimensions(scale);
    this.updateCanvasSize("all");
    this.drawColorControls();
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  handleValueChange(value, oldValue) {
    const { allowEmpty, format } = this;
    const checkMode = !allowEmpty || value;
    let modeChanged = false;
    if (checkMode) {
      const nextMode = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.p)(value);
      if (!nextMode || (format !== "auto" && nextMode !== format)) {
        this.showIncompatibleColorWarning(value, format);
        this.value = oldValue;
        return;
      }
      modeChanged = this.mode !== nextMode;
      this.setMode(nextMode, this.internalColorUpdateContext === null);
    }
    const dragging = this.activeCanvasInfo;
    if (this.internalColorUpdateContext === "initial") {
      return;
    }
    if (this.internalColorUpdateContext === "user-interaction") {
      this.calciteColorPickerInput.emit();
      if (!dragging) {
        this.calciteColorPickerChange.emit();
      }
      return;
    }
    const color$1 = allowEmpty && !value
      ? null
      : color(value != null && typeof value === "object" && (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.mode)
        ? (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.g)(value)
        : value);
    const colorChanged = !(0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.d)(color$1, this.color);
    if (modeChanged || colorChanged) {
      this.internalColorSet(color$1, this.alphaChannel && !(this.mode.endsWith("a") || this.mode.endsWith("a-css")), "internal");
    }
  }
  get baseColorFieldColor() {
    return this.color || this.previousColor || DEFAULT_COLOR$1;
  }
  effectiveLocaleChange() {
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_8__.u)(this, this.effectiveLocale);
  }
  // using @Listen as a workaround for VDOM listener not firing
  handleChannelKeyUpOrDown(event) {
    this.shiftKeyChannelAdjustment = 0;
    const { key } = event;
    if ((key !== "ArrowUp" && key !== "ArrowDown") ||
      !event.composedPath().some((node) => node.classList?.contains(CSS$2.channel))) {
      return;
    }
    const { shiftKey } = event;
    event.preventDefault();
    if (!this.color) {
      this.internalColorSet(this.previousColor);
      event.stopPropagation();
      return;
    }
    // this gets applied to the input's up/down arrow increment/decrement
    const complementaryBump = 9;
    this.shiftKeyChannelAdjustment =
      key === "ArrowUp" && shiftKey
        ? complementaryBump
        : key === "ArrowDown" && shiftKey
          ? -complementaryBump
          : 0;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    this.el.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
    const { allowEmpty, color: color$1, format, value } = this;
    const willSetNoColor = allowEmpty && !value;
    const parsedMode = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.p)(value);
    const valueIsCompatible = willSetNoColor || (format === "auto" && parsedMode) || format === parsedMode;
    const initialColor = willSetNoColor ? null : valueIsCompatible ? color(value) : color$1;
    if (!valueIsCompatible) {
      this.showIncompatibleColorWarning(value, format);
    }
    this.setMode(format, false);
    this.internalColorSet(initialColor, false, "initial");
    this.updateDimensions(this.scale);
    const storageKey = `${DEFAULT_STORAGE_KEY_PREFIX}${this.storageId}`;
    if (this.storageId && localStorage.getItem(storageKey)) {
      this.savedColors = JSON.parse(localStorage.getItem(storageKey));
    }
    await (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_8__.s)(this);
  }
  connectedCallback() {
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
  }
  disconnectedCallback() {
    document.removeEventListener("pointermove", this.globalPointerMoveHandler);
    document.removeEventListener("pointerup", this.globalPointerUpHandler);
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_8__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_3__.u)(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  render() {
    const { allowEmpty, channelsDisabled, color, colorFieldScopeLeft, colorFieldScopeTop, dimensions: { colorField: { width: colorFieldWidth }, slider: { width: sliderWidth }, thumb: { radius: thumbRadius } }, hexDisabled, hideChannels, hideHex, hideSaved, hueScopeLeft, messages, alphaChannel, opacityScopeLeft, savedColors, savedDisabled, scale, scopeOrientation } = this;
    const selectedColorInHex = color ? (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.a)(color, alphaChannel) : null;
    const hueTop = thumbRadius;
    const hueLeft = hueScopeLeft ?? (sliderWidth * DEFAULT_COLOR$1.hue()) / HSV_LIMITS.h;
    const opacityTop = thumbRadius;
    const opacityLeft = opacityScopeLeft ??
      (colorFieldWidth * (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.b)(DEFAULT_COLOR$1.alpha())) / OPACITY_LIMITS.max;
    const noColor = color === null;
    const vertical = scopeOrientation === "vertical";
    const noHex = hexDisabled || hideHex;
    const noChannels = channelsDisabled || hideChannels;
    const noSaved = savedDisabled || hideSaved;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.container }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.controlAndScope }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("canvas", { class: CSS$2.colorField, onPointerDown: this.handleColorFieldPointerDown,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.initColorField }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-label": vertical ? messages.value : messages.saturation, "aria-valuemax": vertical ? HSV_LIMITS.v : HSV_LIMITS.s, "aria-valuemin": "0", "aria-valuenow": (vertical ? color?.saturationv() : color?.value()) || "0", class: { [CSS$2.scope]: true, [CSS$2.colorFieldScope]: true }, onKeyDown: this.handleColorFieldScopeKeyDown, role: "slider", style: { top: `${colorFieldScopeTop || 0}px`, left: `${colorFieldScopeLeft || 0}px` }, tabindex: "0",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.storeColorFieldScope })), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.previewAndSliders }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-color-picker-swatch", { class: CSS$2.preview, color: selectedColorInHex, scale: "l" }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.sliders }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.controlAndScope }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("canvas", { class: { [CSS$2.slider]: true, [CSS$2.hueSlider]: true }, onPointerDown: this.handleHueSliderPointerDown,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.initHueSlider }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-label": messages.hue, "aria-valuemax": HSV_LIMITS.h, "aria-valuemin": "0", "aria-valuenow": color?.round().hue() || DEFAULT_COLOR$1.round().hue(), class: { [CSS$2.scope]: true, [CSS$2.hueScope]: true }, onKeyDown: this.handleHueScopeKeyDown, role: "slider", style: { top: `${hueTop}px`, left: `${hueLeft}px` }, tabindex: "0",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.storeHueScope })), alphaChannel ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.controlAndScope }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("canvas", { class: { [CSS$2.slider]: true, [CSS$2.opacitySlider]: true }, onPointerDown: this.handleOpacitySliderPointerDown,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.initOpacitySlider }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-label": messages.opacity, "aria-valuemax": OPACITY_LIMITS.max, "aria-valuemin": OPACITY_LIMITS.min, "aria-valuenow": (color || DEFAULT_COLOR$1).round().alpha(), class: { [CSS$2.scope]: true, [CSS$2.opacityScope]: true }, onKeyDown: this.handleOpacityScopeKeyDown, role: "slider", style: { top: `${opacityTop}px`, left: `${opacityLeft}px` }, tabindex: "0",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.storeOpacityScope }))) : null)), noHex && noChannels ? null : ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS$2.controlSection]: true,
        [CSS$2.section]: true
      } }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.hexAndChannelsGroup }, noHex ? null : ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.hexOptions }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-color-picker-hex-input", { allowEmpty: allowEmpty, alphaChannel: alphaChannel, class: CSS$2.control, messages: messages, numberingSystem: this.numberingSystem, onCalciteColorPickerHexInputChange: this.handleHexInputChange, scale: scale, value: selectedColorInHex }))), noChannels ? null : ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-tabs", { class: {
        [CSS$2.colorModeContainer]: true,
        [CSS$2.splitSection]: true
      }, scale: scale === "l" ? "m" : "s" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-tab-nav", { slot: "title-group" }, this.renderChannelsTabTitle("rgb"), this.renderChannelsTabTitle("hsv")), this.renderChannelsTab("rgb"), this.renderChannelsTab("hsv")))))), noSaved ? null : ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [CSS$2.savedColorsSection]: true, [CSS$2.section]: true } }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.header }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", null, messages.saved), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.savedColorsButtons }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-button", { appearance: "transparent", class: CSS$2.deleteColor, disabled: noColor, iconStart: "minus", kind: "neutral", label: messages.deleteColor, onClick: this.deleteColor, scale: scale, type: "button" }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-button", { appearance: "transparent", class: CSS$2.saveColor, disabled: noColor, iconStart: "plus", kind: "neutral", label: messages.saveColor, onClick: this.saveColor, scale: scale, type: "button" }))), savedColors.length > 0 ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.savedColors }, [
      ...savedColors.map((color) => ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-color-picker-swatch", { class: CSS$2.savedColor, color: color, key: color, onClick: this.handleSavedColorSelect, onKeyDown: this.handleSavedColorKeyDown, scale: scale, tabIndex: 0 })))
    ])) : null))));
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }
  showIncompatibleColorWarning(value, format) {
    console.warn(`ignoring color value (${value}) as it is not compatible with the current format (${format})`);
  }
  setMode(format, warn = true) {
    const mode = format === "auto" ? this.mode : format;
    this.mode = this.ensureCompatibleMode(mode, warn);
  }
  ensureCompatibleMode(mode, warn) {
    const { alphaChannel } = this;
    const isAlphaCompatible = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.c)(mode);
    if (alphaChannel && !isAlphaCompatible) {
      const alphaMode = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.f)(mode);
      if (warn) {
        console.warn(`setting format to (${alphaMode}) as the provided one (${mode}) does not support alpha`);
      }
      return alphaMode;
    }
    if (!alphaChannel && isAlphaCompatible) {
      const nonAlphaMode = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.t)(mode);
      if (warn) {
        console.warn(`setting format to (${nonAlphaMode}) as the provided one (${mode}) does not support alpha`);
      }
      return nonAlphaMode;
    }
    return mode;
  }
  captureHueSliderColor(x) {
    const { dimensions: { slider: { width } } } = this;
    const hue = (360 / width) * x;
    this.internalColorSet(this.baseColorFieldColor.hue(hue), false);
  }
  captureOpacitySliderValue(x) {
    const { dimensions: { slider: { width } } } = this;
    const alpha = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.o)((OPACITY_LIMITS.max / width) * x);
    this.internalColorSet(this.baseColorFieldColor.alpha(alpha), false);
  }
  internalColorSet(color, skipEqual = true, context = "user-interaction") {
    if (skipEqual && (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.d)(color, this.color)) {
      return;
    }
    this.internalColorUpdateContext = context;
    this.color = color;
    this.value = this.toValue(color);
    this.internalColorUpdateContext = null;
  }
  toValue(color, format = this.mode) {
    if (!color) {
      return null;
    }
    const hexMode = "hex";
    if (format.includes(hexMode)) {
      const hasAlpha = format === _utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.C.HEXA;
      return (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.n)((0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.a)(color.round(), hasAlpha), hasAlpha);
    }
    if (format.includes("-css")) {
      const value = color[format.replace("-css", "").replace("a", "")]().round().string();
      // Color omits alpha values when alpha is 1
      const needToInjectAlpha = (format.endsWith("a") || format.endsWith("a-css")) && color.alpha() === 1;
      if (needToInjectAlpha) {
        const model = value.slice(0, 3);
        const values = value.slice(4, -1);
        return `${model}a(${values}, ${color.alpha()})`;
      }
      return value;
    }
    const colorObject = 
    /* Color() does not support hsva, hsla nor rgba, so we use the non-alpha mode */
    color[(0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.t)(format)]().round().object();
    if (format.endsWith("a")) {
      return (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.e)(colorObject);
    }
    return colorObject;
  }
  getSliderCapSpacing() {
    const { dimensions: { slider: { height }, thumb: { radius } } } = this;
    return radius * 2 - height;
  }
  updateDimensions(scale = "m") {
    this.dimensions = DIMENSIONS[scale];
  }
  drawColorField() {
    const context = this.colorFieldRenderingContext;
    const { dimensions: { colorField: { height, width } } } = this;
    context.fillStyle = this.baseColorFieldColor
      .hsv()
      .saturationv(100)
      .value(100)
      .alpha(1)
      .string();
    context.fillRect(0, 0, width, height);
    const whiteGradient = context.createLinearGradient(0, 0, width, 0);
    whiteGradient.addColorStop(0, "rgba(255,255,255,1)");
    whiteGradient.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = whiteGradient;
    context.fillRect(0, 0, width, height);
    const blackGradient = context.createLinearGradient(0, 0, 0, height);
    blackGradient.addColorStop(0, "rgba(0,0,0,0)");
    blackGradient.addColorStop(1, "rgba(0,0,0,1)");
    context.fillStyle = blackGradient;
    context.fillRect(0, 0, width, height);
    this.drawActiveColorFieldColor();
  }
  setCanvasContextSize(canvas, { height, width }) {
    if (!canvas) {
      return;
    }
    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    canvas.style.height = `${height}px`;
    canvas.style.width = `${width}px`;
    const context = canvas.getContext("2d");
    context.scale(devicePixelRatio, devicePixelRatio);
  }
  updateCanvasSize(context = "all") {
    const { dimensions } = this;
    if (context === "all" || context === "color-field") {
      this.setCanvasContextSize(this.colorFieldRenderingContext?.canvas, dimensions.colorField);
    }
    const adjustedSliderDimensions = {
      width: dimensions.slider.width,
      height: dimensions.slider.height + (dimensions.thumb.radius - dimensions.slider.height / 2) * 2
    };
    if (context === "all" || context === "hue-slider") {
      this.setCanvasContextSize(this.hueSliderRenderingContext?.canvas, adjustedSliderDimensions);
    }
    if (context === "all" || context === "opacity-slider") {
      this.setCanvasContextSize(this.opacitySliderRenderingContext?.canvas, adjustedSliderDimensions);
    }
  }
  drawActiveColorFieldColor() {
    const { color } = this;
    if (!color) {
      return;
    }
    const hsvColor = color.hsv();
    const { dimensions: { colorField: { height, width }, thumb: { radius } } } = this;
    const x = hsvColor.saturationv() / (HSV_LIMITS.s / width);
    const y = height - hsvColor.value() / (HSV_LIMITS.v / height);
    requestAnimationFrame(() => {
      this.colorFieldScopeLeft = x;
      this.colorFieldScopeTop = y;
    });
    this.drawThumb(this.colorFieldRenderingContext, radius, x, y, hsvColor);
  }
  drawThumb(context, radius, x, y, color) {
    const startAngle = 0;
    const endAngle = 2 * Math.PI;
    const outlineWidth = 1;
    radius = radius - outlineWidth;
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle);
    context.fillStyle = "#fff";
    context.fill();
    context.strokeStyle = "rgba(0,0,0,0.3)";
    context.lineWidth = outlineWidth;
    context.stroke();
    context.beginPath();
    context.arc(x, y, radius - 3, startAngle, endAngle);
    context.fillStyle = color.rgb().alpha(1).string();
    context.fill();
  }
  drawActiveHueSliderColor() {
    const { color } = this;
    if (!color) {
      return;
    }
    const hsvColor = color.hsv().saturationv(100).value(100);
    const { dimensions: { slider: { height, width }, thumb: { radius } } } = this;
    const x = hsvColor.hue() / (360 / width);
    const y = radius - height / 2 + height / 2;
    requestAnimationFrame(() => {
      this.hueScopeLeft = x;
    });
    this.drawThumb(this.hueSliderRenderingContext, radius, x, y, hsvColor);
  }
  drawHueSlider() {
    const context = this.hueSliderRenderingContext;
    const { dimensions: { slider: { height, width }, thumb: { radius: thumbRadius } } } = this;
    const x = 0;
    const y = thumbRadius - height / 2;
    const gradient = context.createLinearGradient(0, 0, width, 0);
    const hueSliderColorStopKeywords = ["red", "yellow", "lime", "cyan", "blue", "magenta", "red"];
    const offset = 1 / (hueSliderColorStopKeywords.length - 1);
    let currentOffset = 0;
    hueSliderColorStopKeywords.forEach((keyword) => {
      gradient.addColorStop(currentOffset, color(keyword).string());
      currentOffset += offset;
    });
    context.clearRect(0, 0, width, height + this.getSliderCapSpacing() * 2);
    this.drawSliderPath(context, height, width, x, y);
    context.fillStyle = gradient;
    context.fill();
    context.strokeStyle = "rgba(0,0,0,0.3)";
    context.lineWidth = 1;
    context.stroke();
    this.drawActiveHueSliderColor();
  }
  drawOpacitySlider() {
    const context = this.opacitySliderRenderingContext;
    const { baseColorFieldColor: previousColor, dimensions: { slider: { height, width }, thumb: { radius: thumbRadius } } } = this;
    const x = 0;
    const y = thumbRadius - height / 2;
    context.clearRect(0, 0, width, height + this.getSliderCapSpacing() * 2);
    const gradient = context.createLinearGradient(0, y, width, 0);
    const startColor = previousColor.rgb().alpha(0);
    const midColor = previousColor.rgb().alpha(0.5);
    const endColor = previousColor.rgb().alpha(1);
    gradient.addColorStop(0, startColor.string());
    gradient.addColorStop(0.5, midColor.string());
    gradient.addColorStop(1, endColor.string());
    this.drawSliderPath(context, height, width, x, y);
    const pattern = context.createPattern(this.getCheckeredBackgroundPattern(), "repeat");
    context.fillStyle = pattern;
    context.fill();
    context.fillStyle = gradient;
    context.fill();
    context.strokeStyle = "rgba(0,0,0,0.3)";
    context.lineWidth = 1;
    context.stroke();
    this.drawActiveOpacitySliderColor();
  }
  drawSliderPath(context, height, width, x, y) {
    const radius = height / 2 + 1;
    context.beginPath();
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius);
    context.lineTo(x + width, y + height - radius);
    context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    context.lineTo(x + radius, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
    context.closePath();
  }
  getCheckeredBackgroundPattern() {
    if (this.checkerPattern) {
      return this.checkerPattern;
    }
    const pattern = document.createElement("canvas");
    pattern.width = 10;
    pattern.height = 10;
    const patternContext = pattern.getContext("2d");
    patternContext.fillStyle = "#ccc";
    patternContext.fillRect(0, 0, 10, 10);
    patternContext.fillStyle = "#fff";
    patternContext.fillRect(0, 0, 5, 5);
    patternContext.fillRect(5, 5, 5, 5);
    this.checkerPattern = pattern;
    return pattern;
  }
  drawActiveOpacitySliderColor() {
    const { color } = this;
    if (!color) {
      return;
    }
    const hsvColor = color;
    const { dimensions: { slider: { width }, thumb: { radius } } } = this;
    const x = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.b)(hsvColor.alpha()) / (OPACITY_LIMITS.max / width);
    const y = radius;
    requestAnimationFrame(() => {
      this.opacityScopeLeft = x;
    });
    this.drawThumb(this.opacitySliderRenderingContext, radius, x, y, hsvColor);
  }
  updateColorFromChannels(channels) {
    this.internalColorSet(color(channels, this.channelMode));
  }
  updateChannelsFromColor(color) {
    this.channels = color ? this.toChannels(color) : [null, null, null, null];
  }
  toChannels(color) {
    const { channelMode } = this;
    const channels = color[channelMode]()
      .array()
      .map((value, index) => {
      const isAlpha = index === 3;
      return isAlpha ? value : Math.floor(value);
    });
    if (channels.length === 3) {
      channels.push(1); // Color omits alpha when 1
    }
    return channels;
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "alphaChannel": ["handleAlphaChannelChange"],
    "color": ["handleColorChange"],
    "format": ["handleFormatChange"],
    "scale": ["handleScaleChange"],
    "messageOverrides": ["onMessagesChange"],
    "value": ["handleValueChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
ColorPicker.style = colorPickerCss;

const CSS$1 = {
  container: "container",
  hexInput: "hex-input",
  opacityInput: "opacity-input"
};

const colorPickerHexInputCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:block}.container{display:flex;inline-size:100%;flex-wrap:nowrap;align-items:center}.hex-input{flex-grow:1;text-transform:uppercase}.opacity-input{inline-size:68px;margin-inline-start:-1px}:host([scale=s]) .container{flex-wrap:wrap;row-gap:0.125rem}:host([scale=s]) .opacity-input{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .opacity-input{inline-size:88px}";

const DEFAULT_COLOR = color();
const ColorPickerHexInput = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteColorPickerHexInputChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteColorPickerHexInputChange", 6);
    this.onHexInputBlur = () => {
      const node = this.hexInputNode;
      const inputValue = node.value;
      const hex = `#${inputValue}`;
      const { allowEmpty, internalColor } = this;
      const willClearValue = allowEmpty && !inputValue;
      const isLonghand = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.j)(hex);
      // ensure modified pasted hex values are committed since we prevent default to remove the # char.
      this.onHexInputChange();
      if (willClearValue || ((0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.i)(hex) && isLonghand)) {
        return;
      }
      // manipulating DOM directly since rerender doesn't update input value
      node.value =
        allowEmpty && !internalColor
          ? ""
          : this.formatHexForInternalInput((0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.r)(
          // always display hex input in RRGGBB format
          internalColor.object()));
    };
    this.onOpacityInputBlur = () => {
      const node = this.opacityInputNode;
      const inputValue = node.value;
      const { allowEmpty, internalColor } = this;
      const willClearValue = allowEmpty && !inputValue;
      if (willClearValue) {
        return;
      }
      // manipulating DOM directly since rerender doesn't update input value
      node.value =
        allowEmpty && !internalColor ? "" : this.formatOpacityForInternalInput(internalColor);
    };
    this.onHexInputChange = () => {
      const nodeValue = this.hexInputNode.value;
      let value = nodeValue;
      if (value) {
        const normalized = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.n)(value, false);
        const preserveExistingAlpha = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.i)(normalized) && this.alphaChannel;
        if (preserveExistingAlpha && this.internalColor) {
          const alphaHex = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.n)(this.internalColor.hexa(), true).slice(-2);
          value = `${normalized + alphaHex}`;
        }
      }
      this.internalSetValue(value, this.value);
    };
    this.onOpacityInputChange = () => {
      const node = this.opacityInputNode;
      let value;
      if (!node.value) {
        value = node.value;
      }
      else {
        const alpha = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.o)(Number(node.value));
        value = this.internalColor?.alpha(alpha).hexa();
      }
      this.internalSetValue(value, this.value);
    };
    this.onInputKeyDown = (event) => {
      const { altKey, ctrlKey, metaKey, shiftKey } = event;
      const { alphaChannel, hexInputNode, internalColor, value } = this;
      const { key } = event;
      const composedPath = event.composedPath();
      if (key === "Tab" || key === "Enter") {
        if (composedPath.includes(hexInputNode)) {
          this.onHexInputChange();
        }
        else {
          this.onOpacityInputChange();
        }
        if (key === "Enter") {
          event.preventDefault();
        }
        return;
      }
      const isNudgeKey = key === "ArrowDown" || key === "ArrowUp";
      const oldValue = this.value;
      if (isNudgeKey) {
        if (!value) {
          this.internalSetValue(this.previousNonNullValue, oldValue);
          event.preventDefault();
          return;
        }
        const direction = key === "ArrowUp" ? 1 : -1;
        const bump = shiftKey ? 10 : 1;
        this.internalSetValue((0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.nudgeRGBChannels(internalColor, bump * direction, composedPath.includes(hexInputNode) ? "rgb" : "a"), alphaChannel), oldValue);
        event.preventDefault();
        return;
      }
      const withModifiers = altKey || ctrlKey || metaKey;
      const singleChar = key.length === 1;
      const validHexChar = _utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.k.test(key);
      if (singleChar && !withModifiers && !validHexChar) {
        event.preventDefault();
      }
    };
    this.onHexInputPaste = (event) => {
      const hex = event.clipboardData.getData("text");
      if ((0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.i)(hex)) {
        event.preventDefault();
        this.hexInputNode.value = hex.slice(1);
        this.hexInputNode.internalSyncChildElValue();
      }
    };
    this.previousNonNullValue = this.value;
    this.storeHexInputRef = (node) => {
      this.hexInputNode = node;
    };
    this.storeOpacityInputRef = (node) => {
      this.opacityInputNode = node;
    };
    this.allowEmpty = false;
    this.alphaChannel = false;
    this.hexLabel = "Hex";
    this.messages = undefined;
    this.numberingSystem = undefined;
    this.scale = "m";
    this.value = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.n)((0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.a)(DEFAULT_COLOR, this.alphaChannel), this.alphaChannel, true);
    this.internalColor = DEFAULT_COLOR;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    const { allowEmpty, alphaChannel, value } = this;
    if (value) {
      const normalized = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.n)(value, alphaChannel);
      if ((0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.i)(normalized, alphaChannel)) {
        this.internalSetValue(normalized, normalized, false);
      }
      return;
    }
    if (allowEmpty) {
      this.internalSetValue(null, null, false);
    }
  }
  componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
  }
  handleValueChange(value, oldValue) {
    this.internalSetValue(value, oldValue, false);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const { alphaChannel, hexLabel, internalColor, messages, scale, value } = this;
    const hexInputValue = this.formatHexForInternalInput(value);
    const opacityInputValue = this.formatOpacityForInternalInput(internalColor);
    const inputScale = scale === "l" ? "m" : "s";
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$1.container }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-input", { class: CSS$1.hexInput, label: messages?.hex || hexLabel, maxLength: 6, numberingSystem: this.numberingSystem, onCalciteInputChange: this.onHexInputChange, onCalciteInternalInputBlur: this.onHexInputBlur, onKeyDown: this.onInputKeyDown, onPaste: this.onHexInputPaste, prefixText: "#", scale: inputScale, value: hexInputValue,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.storeHexInputRef }), alphaChannel ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-input-number", { class: CSS$1.opacityInput, key: "opacity-input", label: messages?.opacity, max: OPACITY_LIMITS.max, maxLength: 3, min: OPACITY_LIMITS.min, numberButtonType: "none", numberingSystem: this.numberingSystem, onCalciteInputNumberChange: this.onOpacityInputChange, onCalciteInternalInputNumberBlur: this.onOpacityInputBlur, onKeyDown: this.onInputKeyDown, scale: inputScale, suffixText: "%", value: opacityInputValue,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.storeOpacityInputRef })) : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.hexInputNode);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  internalSetValue(value, oldValue, emit = true) {
    if (value) {
      const { alphaChannel } = this;
      const normalized = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.n)(value, alphaChannel, alphaChannel);
      if ((0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.i)(normalized, alphaChannel)) {
        const { internalColor: currentColor } = this;
        const nextColor = color(normalized);
        const normalizedLonghand = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.n)((0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.a)(nextColor, alphaChannel), alphaChannel);
        const changed = !currentColor ||
          normalizedLonghand !== (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.n)((0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.a)(currentColor, alphaChannel), alphaChannel);
        this.internalColor = nextColor;
        this.previousNonNullValue = normalizedLonghand;
        this.value = normalizedLonghand;
        if (changed && emit) {
          this.calciteColorPickerHexInputChange.emit();
        }
        return;
      }
    }
    else if (this.allowEmpty) {
      this.internalColor = null;
      this.value = null;
      if (emit) {
        this.calciteColorPickerHexInputChange.emit();
      }
      return;
    }
    this.value = oldValue;
  }
  formatHexForInternalInput(hex) {
    return hex ? hex.replace("#", "").slice(0, 6) : "";
  }
  formatOpacityForInternalInput(color) {
    return color ? `${(0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.b)(color.alpha())}` : "";
  }
  nudgeRGBChannels(color$1, amount, context) {
    let nudgedChannels;
    const channels = color$1.array();
    const rgbChannels = channels.slice(0, 3);
    if (context === "rgb") {
      const nudgedRGBChannels = rgbChannels.map((channel) => channel + amount);
      nudgedChannels = [
        ...nudgedRGBChannels,
        this.alphaChannel ? channels[3] : undefined
      ];
    }
    else {
      const nudgedAlpha = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.o)((0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.b)(color$1.alpha()) + amount);
      nudgedChannels = [...rgbChannels, nudgedAlpha];
    }
    return color(nudgedChannels);
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "value": ["handleValueChange"]
  }; }
};
ColorPickerHexInput.style = colorPickerHexInputCss;

const CSS = {
  swatch: "swatch",
  noColorSwatch: "swatch--no-color",
  checker: "checker"
};
const COLORS = {
  borderLight: "rgba(0, 0, 0, 0.3)",
  borderDark: "rgba(255, 255, 255, 0.15)"
};
const checkerSquareSize = 4;
const CHECKER_DIMENSIONS = {
  squareSize: checkerSquareSize,
  size: checkerSquareSize * 2
};

const colorPickerSwatchCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{position:relative;display:inline-flex}:host([scale=s]){block-size:1.25rem;inline-size:1.25rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem}.swatch{overflow:hidden;block-size:inherit;inline-size:inherit}.swatch rect{transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.swatch--no-color rect{fill:var(--calcite-ui-foreground-1)}.swatch--no-color line{stroke:var(--calcite-ui-danger)}.checker{fill:#cacaca}";

const ColorPickerSwatch = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.active = false;
    this.color = undefined;
    this.scale = "m";
  }
  handleColorChange(color$1) {
    this.internalColor = color$1 ? color(color$1) : null;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.handleColorChange(this.color);
  }
  render() {
    const isEmpty = !this.internalColor;
    const classes = {
      [CSS.swatch]: true,
      [CSS.noColorSwatch]: isEmpty
    };
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { class: classes, xmlns: "http://www.w3.org/2000/svg" }, this.renderSwatch()));
  }
  renderSwatch() {
    const { active, el, internalColor } = this;
    const borderRadius = active ? "100%" : "0";
    const theme = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.h)(el);
    const borderColor = theme === "light" ? COLORS.borderLight : COLORS.borderDark;
    const commonSwatchProps = {
      height: "100%",
      rx: borderRadius,
      stroke: borderColor,
      // stroke-width and clip-path are needed to hide overflowing portion of stroke
      // see https://stackoverflow.com/a/7273346/194216
      // using attribute to work around Stencil using the prop name vs the attribute when rendering
      ["stroke-width"]: "2",
      width: "100%"
    };
    const isEmpty = !internalColor;
    if (isEmpty) {
      return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("clipPath", { id: "shape" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { height: "100%", rx: borderRadius, width: "100%" })), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { "clip-path": `inset(0 round ${borderRadius})`, rx: borderRadius, ...commonSwatchProps }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("line", { "clip-path": "url(#shape)", "stroke-width": "3", x1: "100%", x2: "0", y1: "0", y2: "100%" })));
    }
    const alpha = internalColor.alpha();
    const hex = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.a)(internalColor);
    const hexa = (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.a)(internalColor, alpha < 1);
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, hexa), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("defs", null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("pattern", { height: CHECKER_DIMENSIONS.size, id: "checker", patternUnits: "userSpaceOnUse", width: CHECKER_DIMENSIONS.size, x: "0", y: "0" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { class: CSS.checker, height: CHECKER_DIMENSIONS.squareSize, width: CHECKER_DIMENSIONS.squareSize, x: "0", y: "0" }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { class: CSS.checker, height: CHECKER_DIMENSIONS.squareSize, width: CHECKER_DIMENSIONS.squareSize, x: CHECKER_DIMENSIONS.squareSize, y: CHECKER_DIMENSIONS.squareSize }))), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { fill: "url(#checker)", height: "100%", rx: borderRadius, width: "100%" }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { fill: hex, style: {
        "clip-path": alpha < 1 ? "polygon(100% 0, 0 0, 0 100%)" : `inset(0 round ${borderRadius})`
      }, ...commonSwatchProps }), alpha < 1 ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { fill: hexa, key: "opacity-fill", style: { "clip-path": "polygon(100% 0, 100% 100%, 0 100%)" }, ...commonSwatchProps })) : null));
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "color": ["handleColorChange"]
  }; }
};
ColorPickerSwatch.style = colorPickerSwatchCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ updateHostInteraction)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
function interceptedClick() {
  const { disabled } = this;
  if (!disabled) {
    HTMLElement.prototype.click.call(this);
  }
}
function onPointerDown(event) {
  // prevent click from moving focus on host
  event.preventDefault();
}
const nonBubblingWhenDisabledMouseEvents = ["mousedown", "mouseup", "click"];
function onNonBubblingWhenDisabledMouseEvent(event) {
  const { disabled } = event.target;
  // prevent disallowed mouse events from being emitted on the disabled host (per https://github.com/whatwg/html/issues/5886)
  //⚠ we generally avoid stopping propagation of events, but this is needed to adhere to the intended spec changes above ⚠
  if (disabled) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
}
const captureOnlyOptions = { capture: true };
/**
 * This helper updates the host element to prevent keyboard interaction on its subtree and sets the appropriate aria attribute for accessibility.
 *
 * This should be used in the `componentDidRender` lifecycle hook.
 *
 * **Notes**
 *
 * this util is not needed for simple components whose root element or elements are an interactive component (custom element or native control). For those cases, set the `disabled` props on the root components instead.
 * technically, users can override `tabindex` and restore keyboard navigation, but this will be considered user error
 *
 * @param component
 * @param hostIsTabbable
 */
function updateHostInteraction(component, hostIsTabbable = false) {
  if (component.disabled) {
    component.el.setAttribute("tabindex", "-1");
    component.el.setAttribute("aria-disabled", "true");
    if (component.el.contains(document.activeElement)) {
      document.activeElement.blur();
    }
    component.el.click = interceptedClick;
    component.el.addEventListener("pointerdown", onPointerDown, captureOnlyOptions);
    nonBubblingWhenDisabledMouseEvents.forEach((event) => component.el.addEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
    return;
  }
  component.el.click = HTMLElement.prototype.click;
  component.el.removeEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => component.el.removeEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
  if (typeof hostIsTabbable === "function") {
    component.el.setAttribute("tabindex", hostIsTabbable.call(component) ? "0" : "-1");
  }
  else if (hostIsTabbable === true) {
    component.el.setAttribute("tabindex", "0");
  }
  else if (hostIsTabbable === false) {
    component.el.removeAttribute("tabindex");
  }
  else ;
  component.el.removeAttribute("aria-disabled");
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ setComponentLoaded),
/* harmony export */   "c": () => (/* binding */ componentLoaded),
/* harmony export */   "s": () => (/* binding */ setUpLoadableComponent)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
const resolveMap = new WeakMap();
const promiseMap = new WeakMap();
/**
 * This helper util sets up the component for the ability to know when the component has been loaded.
 *
 * This should be used in the `componentWillLoad` lifecycle hook.
 *
 * ```
 * componentWillLoad(): void {
 *   setUpLoadableComponent(this);
 * }
 * ```
 *
 * @param component
 */
function setUpLoadableComponent(component) {
  promiseMap.set(component, new Promise((resolve) => resolveMap.set(component, resolve)));
}
/**
 * This helper util lets the loadable component know that it is now loaded.
 *
 * This should be used in the `componentDidLoad` lifecycle hook.
 *
 * ```
 * componentDidLoad(): void {
 *   setComponentLoaded(this);
 * }
 * ```
 *
 * @param component
 */
function setComponentLoaded(component) {
  resolveMap.get(component)();
}
/**
 * This helper util can be used to ensure a component has been loaded (The "componentDidLoad" stencil lifecycle method has been called).
 *
 * Requires "setUpLoadableComponent" and "setComponentLoaded" to be called first.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first.
 *
 * ```
 * async setFocus(): Promise<void> {
 *   await componentLoaded(this);
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
function componentLoaded(component) {
  return promiseMap.get(component);
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/math-e6aff5b3.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/math-e6aff5b3.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ clamp),
/* harmony export */   "d": () => (/* binding */ decimalPlaces)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
const decimalNumberRegex = new RegExp(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
const decimalPlaces = (value) => {
  const match = ("" + value).match(decimalNumberRegex);
  if (!match) {
    return 0;
  }
  return Math.max(0, 
  // Number of digits right of decimal point.
  (match[1] ? match[1].length : 0) -
    // Adjust for scientific notation.
    (match[2] ? +match[2] : 0));
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectMessages),
/* harmony export */   "d": () => (/* binding */ disconnectMessages),
/* harmony export */   "s": () => (/* binding */ setUpMessages),
/* harmony export */   "u": () => (/* binding */ updateMessages)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */



const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
  const key = `${component}_${lang}`;
  if (componentLangToMessageBundleCache[key]) {
    return componentLangToMessageBundleCache[key];
  }
  componentLangToMessageBundleCache[key] = fetch((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.g)(`./assets/${component}/t9n/messages_${lang}.json`))
    .then((resp) => {
    if (!resp.ok) {
      throwMessageFetchError();
    }
    return resp.json();
  })
    .catch(() => throwMessageFetchError());
  return componentLangToMessageBundleCache[key];
}
function throwMessageFetchError() {
  throw new Error("could not fetch component message bundle");
}
function mergeMessages(component) {
  component.messages = {
    ...component.defaultMessages,
    ...component.messageOverrides
  };
}
/**
 * This utility sets up the messages used by the component. It should be awaited in the `componentWillLoad` lifecycle hook.
 *
 * @param component
 */
async function setUpMessages(component) {
  component.defaultMessages = await fetchMessages(component, component.effectiveLocale);
  mergeMessages(component);
}
async function fetchMessages(component, lang) {
  const { el } = component;
  const tag = el.tagName.toLowerCase();
  const componentName = tag.replace("calcite-", "");
  return getMessageBundle((0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_1__.g)(lang, "t9n"), componentName);
}
/**
 * This utility must be set up for the component to update its default message bundle if the locale changes.
 *
 * It can be set up in **either** of the following ways:
 *
 * 1. called from `LocalizedComponent`'s `onLocaleChange` method or
 * 2. called from a watcher configured to watch `LocalizedComponent`'s `effectiveLocale` prop
 *
 * @param component
 * @param lang
 */
async function updateMessages(component, lang) {
  component.defaultMessages = await fetchMessages(component, lang);
  mergeMessages(component);
}
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback`
 *
 * **Note**: this must be called after `LocalizedComponent`'s `connectLocalized` method.
 *
 * @param component
 */
function connectMessages(component) {
  component.onMessagesChange = defaultOnMessagesChange;
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectMessages(component) {
  component.onMessagesChange = undefined;
}
function defaultOnMessagesChange() {
  mergeMessages(this);
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/throttle-d688fe13.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/throttle-d688fe13.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce-b9072422.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-b9072422.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if ((0,_debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_0__.i)(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return (0,_debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_0__.d)(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/utils-ddd03fe1.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/utils-ddd03fe1.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CSSColorMode),
/* harmony export */   "a": () => (/* binding */ hexify),
/* harmony export */   "b": () => (/* binding */ alphaToOpacity),
/* harmony export */   "c": () => (/* binding */ alphaCompatible),
/* harmony export */   "d": () => (/* binding */ colorEqual),
/* harmony export */   "e": () => (/* binding */ normalizeAlpha),
/* harmony export */   "f": () => (/* binding */ toAlphaMode),
/* harmony export */   "g": () => (/* binding */ normalizeColor),
/* harmony export */   "h": () => (/* binding */ hexToRGB),
/* harmony export */   "i": () => (/* binding */ isValidHex),
/* harmony export */   "j": () => (/* binding */ isLonghandHex),
/* harmony export */   "k": () => (/* binding */ hexChar),
/* harmony export */   "n": () => (/* binding */ normalizeHex),
/* harmony export */   "o": () => (/* binding */ opacityToAlpha),
/* harmony export */   "p": () => (/* binding */ parseMode),
/* harmony export */   "r": () => (/* binding */ rgbToHex),
/* harmony export */   "t": () => (/* binding */ toNonAlphaMode)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
const hexChar = /^[0-9A-F]$/i;
const shorthandHex = /^#[0-9A-F]{3}$/i;
const longhandHex = /^#[0-9A-F]{6}$/i;
const shorthandHexWithAlpha = /^#[0-9A-F]{4}$/i;
const longhandHexWithAlpha = /^#[0-9A-F]{8}$/i;
const alphaToOpacity = (alpha) => Number((alpha * 100).toFixed());
const opacityToAlpha = (opacity) => Number((opacity / 100).toFixed(2));
function isValidHex(hex, hasAlpha = false) {
  return isShorthandHex(hex, hasAlpha) || isLonghandHex(hex, hasAlpha);
}
function evaluateHex(hex, length, pattern) {
  if (!hex) {
    return false;
  }
  return hex.length === length && pattern.test(hex);
}
function isShorthandHex(hex, hasAlpha = false) {
  const hexLength = hasAlpha ? 5 : 4;
  const hexPattern = hasAlpha ? shorthandHexWithAlpha : shorthandHex;
  return evaluateHex(hex, hexLength, hexPattern);
}
function isLonghandHex(hex, hasAlpha = false) {
  const hexLength = hasAlpha ? 9 : 7;
  const hexPattern = hasAlpha ? longhandHexWithAlpha : longhandHex;
  return evaluateHex(hex, hexLength, hexPattern);
}
function normalizeHex(hex, hasAlpha = false, convertFromHexToHexa = false) {
  hex = hex.toLowerCase();
  if (!hex.startsWith("#")) {
    hex = `#${hex}`;
  }
  if (isShorthandHex(hex, hasAlpha)) {
    return rgbToHex(hexToRGB(hex, hasAlpha));
  }
  if (hasAlpha && convertFromHexToHexa && isValidHex(hex, false /* we only care about RGB hex for conversion */)) {
    const isShorthand = isShorthandHex(hex, false);
    return rgbToHex(hexToRGB(`${hex}${isShorthand ? "f" : "ff"}`, true));
  }
  return hex;
}
function hexify(color, hasAlpha = false) {
  return hasAlpha ? color.hexa() : color.hex();
}
function rgbToHex(color) {
  const { r, g, b } = color;
  const rChars = numToHex(r);
  const gChars = numToHex(g);
  const bChars = numToHex(b);
  const alphaChars = "a" in color ? numToHex(color.a * 255) : "";
  return `#${rChars}${gChars}${bChars}${alphaChars}`.toLowerCase();
}
function numToHex(num) {
  return num.toString(16).padStart(2, "0");
}
function normalizeAlpha(colorObject) {
  const normalized = { ...colorObject, a: colorObject.alpha ?? 1 /* Color() will omit alpha if 1 */ };
  delete normalized.alpha;
  return normalized;
}
function normalizeColor(alphaColorObject) {
  const normalized = { ...alphaColorObject, alpha: alphaColorObject.a ?? 1 };
  delete normalized.a;
  return normalized;
}
function hexToRGB(hex, hasAlpha = false) {
  if (!isValidHex(hex, hasAlpha)) {
    return null;
  }
  hex = hex.replace("#", "");
  let r, g, b, a;
  const isShorthand = hex.length === 3 || hex.length === 4;
  if (isShorthand) {
    const [first, second, third, fourth] = hex.split("");
    r = parseInt(`${first}${first}`, 16);
    g = parseInt(`${second}${second}`, 16);
    b = parseInt(`${third}${third}`, 16);
    a = parseInt(`${fourth}${fourth}`, 16) / 255;
  }
  else {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
    a = parseInt(hex.slice(6, 8), 16) / 255;
  }
  return isNaN(a) ? { r, g, b } : { r, g, b, a };
}
// these utils allow users to pass enum values as strings without having to access the enum
// based on the approach suggested by https://github.com/microsoft/TypeScript/issues/17690#issuecomment-321365759,
const enumify = (x) => x;
const CSSColorMode = enumify({
  HEX: "hex",
  HEXA: "hexa",
  RGB_CSS: "rgb-css",
  RGBA_CSS: "rgba-css",
  HSL_CSS: "hsl-css",
  HSLA_CSS: "hsla-css"
});
const ObjectColorMode = enumify({
  RGB: "rgb",
  RGBA: "rgba",
  HSL: "hsl",
  HSLA: "hsla",
  HSV: "hsv",
  HSVA: "hsva"
});
function parseMode(colorValue) {
  if (typeof colorValue === "string") {
    if (colorValue.startsWith("#")) {
      const { length } = colorValue;
      if (length === 4 || length === 7) {
        return CSSColorMode.HEX;
      }
      if (length === 5 || length === 9) {
        return CSSColorMode.HEXA;
      }
    }
    if (colorValue.startsWith("rgba(")) {
      return CSSColorMode.RGBA_CSS;
    }
    if (colorValue.startsWith("rgb(")) {
      return CSSColorMode.RGB_CSS;
    }
    if (colorValue.startsWith("hsl(")) {
      return CSSColorMode.HSL_CSS;
    }
    if (colorValue.startsWith("hsla(")) {
      return CSSColorMode.HSLA_CSS;
    }
  }
  if (typeof colorValue === "object") {
    if (hasChannels(colorValue, "r", "g", "b")) {
      return hasChannels(colorValue, "a") ? ObjectColorMode.RGBA : ObjectColorMode.RGB;
    }
    if (hasChannels(colorValue, "h", "s", "l")) {
      return hasChannels(colorValue, "a") ? ObjectColorMode.HSLA : ObjectColorMode.HSL;
    }
    if (hasChannels(colorValue, "h", "s", "v")) {
      return hasChannels(colorValue, "a") ? ObjectColorMode.HSVA : ObjectColorMode.HSV;
    }
  }
  return null;
}
function hasChannels(colorObject, ...channels) {
  return channels.every((channel) => channel && colorObject && `${channel}` in colorObject);
}
function colorEqual(value1, value2) {
  return value1?.rgb().array().toString() === value2?.rgb().array().toString();
}
function alphaCompatible(mode) {
  return (mode === CSSColorMode.HEXA ||
    mode === CSSColorMode.RGBA_CSS ||
    mode === CSSColorMode.HSLA_CSS ||
    mode === ObjectColorMode.RGBA ||
    mode === ObjectColorMode.HSLA ||
    mode === ObjectColorMode.HSVA);
}
function toAlphaMode(mode) {
  const alphaMode = mode === CSSColorMode.HEX
    ? CSSColorMode.HEXA
    : mode === CSSColorMode.RGB_CSS
      ? CSSColorMode.RGBA_CSS
      : mode === CSSColorMode.HSL_CSS
        ? CSSColorMode.HSLA_CSS
        : mode === ObjectColorMode.RGB
          ? ObjectColorMode.RGBA
          : mode === ObjectColorMode.HSL
            ? ObjectColorMode.HSLA
            : mode === ObjectColorMode.HSV
              ? ObjectColorMode.HSVA
              : mode;
  return alphaMode;
}
function toNonAlphaMode(mode) {
  const nonAlphaMode = mode === CSSColorMode.HEXA
    ? CSSColorMode.HEX
    : mode === CSSColorMode.RGBA_CSS
      ? CSSColorMode.RGB_CSS
      : mode === CSSColorMode.HSLA_CSS
        ? CSSColorMode.HSL_CSS
        : mode === ObjectColorMode.RGBA
          ? ObjectColorMode.RGB
          : mode === ObjectColorMode.HSLA
            ? ObjectColorMode.HSL
            : mode === ObjectColorMode.HSVA
              ? ObjectColorMode.HSV
              : mode;
  return nonAlphaMode;
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNGZhMzlmNTk1ZTgxOTQ2NjlmNWNmMzNiNWM0MmEzMDcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lIO0FBQ1E7QUFDbU47QUFDclE7QUFDZDtBQUMyRDtBQUM3QjtBQUN2QztBQUMyRTtBQUNwRTtBQUMzQjtBQUNLO0FBQ0E7QUFDRDs7QUFFaEM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9DQUFvQyxTQUFTO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsSUFBSTtBQUM3Qix3QkFBd0IsRUFBRSxXQUFXLEVBQUU7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGNBQWMsT0FBTztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLElBQUk7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsSUFBSTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU8sMkJBQTJCO0FBQ2xDLFFBQVEsNEJBQTRCO0FBQ3BDLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU8sNkJBQTZCO0FBQ3BDLFdBQVcsaUNBQWlDO0FBQzVDLFVBQVUsZ0NBQWdDO0FBQzFDLFdBQVcsaUNBQWlDO0FBQzVDLE9BQU8scUNBQXFDO0FBQzVDLFNBQVMsMkNBQTJDO0FBQ3BELFFBQVE7QUFDUjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxrQkFBa0I7QUFDMUI7QUFDQTtBQUNBLHNEQUFzRCxnQkFBZ0I7QUFDdEUsb0RBQW9ELGNBQWM7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVEsUUFBUTtBQUNsQyxrQkFBa0IsUUFBUSxRQUFRO0FBQ2xDLGtCQUFrQixRQUFRLE9BQU87QUFDakMsa0JBQWtCLFFBQVEsT0FBTztBQUNqQyxrQkFBa0IsUUFBUSxPQUFPO0FBQ2pDLGtCQUFrQixRQUFRLE9BQU87QUFDakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEVBQTRFOztBQUU1RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELEVBQUUsVUFBVSxFQUFFO0FBQy9EO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixhQUFhLGFBQWE7QUFDMUM7QUFDQSxnQkFBZ0IsYUFBYSxhQUFhO0FBQzFDO0FBQ0EsZ0JBQWdCLGFBQWEsYUFBYTtBQUMxQztBQUNBLGdCQUFnQixhQUFhLGFBQWE7QUFDMUM7QUFDQSxnQkFBZ0IsYUFBYSxhQUFhO0FBQzFDO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MsU0FBUztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxTQUFTO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0RBQXdELHVDQUF1QztBQUMvRixzREFBc0QscUNBQXFDOztBQUUzRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUyxRQUFRO0FBQ2pCO0FBQ0EsY0FBYyxtQkFBbUI7QUFDakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsY0FBYztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLFNBQVMsVUFBVTtBQUNuQixTQUFTLFFBQVE7O0FBRWpCLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxVQUFVOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNB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bXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1jb2xvci1waWNrZXJfMy5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9pbnRlcmFjdGl2ZS04MmU1NDdlZC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9sb2FkYWJsZS1hZjE0NmZkNS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9tYXRoLWU2YWZmNWIzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL3Q5bi1hM2UxMjQyMi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS90aHJvdHRsZS1kNjg4ZmUxMy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS91dGlscy1kZGQwM2ZlMS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBhIGFzIGdldEVsZW1lbnQsIEYgYXMgRnJhZ21lbnQgfSBmcm9tICcuL2luZGV4LWE2NzYwMjg2LmpzJztcbmltcG9ydCB7IGkgYXMgaXNQcmltYXJ5UG9pbnRlckJ1dHRvbiwgYiBhcyBnZXRFbGVtZW50RGlyLCBmIGFzIGZvY3VzRWxlbWVudCwgaCBhcyBnZXRNb2RlTmFtZSB9IGZyb20gJy4vZG9tLWY3NGEwOWI3LmpzJztcbmltcG9ydCB7IEMgYXMgQ1NTQ29sb3JNb2RlLCBuIGFzIG5vcm1hbGl6ZUhleCwgYSBhcyBoZXhpZnksIG8gYXMgb3BhY2l0eVRvQWxwaGEsIGIgYXMgYWxwaGFUb09wYWNpdHksIGMgYXMgYWxwaGFDb21wYXRpYmxlLCBwIGFzIHBhcnNlTW9kZSwgZCBhcyBjb2xvckVxdWFsLCB0IGFzIHRvTm9uQWxwaGFNb2RlLCBlIGFzIG5vcm1hbGl6ZUFscGhhLCBmIGFzIHRvQWxwaGFNb2RlLCBnIGFzIG5vcm1hbGl6ZUNvbG9yLCBqIGFzIGlzTG9uZ2hhbmRIZXgsIGkgYXMgaXNWYWxpZEhleCwgciBhcyByZ2JUb0hleCwgayBhcyBoZXhDaGFyIH0gZnJvbSAnLi91dGlscy1kZGQwM2ZlMS5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUtODJlNTQ3ZWQuanMnO1xuaW1wb3J0IHsgaSBhcyBpc0FjdGl2YXRpb25LZXkgfSBmcm9tICcuL2tleS0zMzg5ZDg3MC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbXBvbmVudExvYWRlZCwgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUtYWYxNDZmZDUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS1iM2M0NGRkYS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNsYW1wIH0gZnJvbSAnLi9tYXRoLWU2YWZmNWIzLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4tYTNlMTI0MjIuanMnO1xuaW1wb3J0IHsgdCBhcyB0aHJvdHRsZSB9IGZyb20gJy4vdGhyb3R0bGUtZDY4OGZlMTMuanMnO1xuaW1wb3J0ICcuL2d1aWQtZDU5NDNiODMuanMnO1xuaW1wb3J0ICcuL3Jlc291cmNlcy1kMDhhNjczNy5qcyc7XG5pbXBvcnQgJy4vb2JzZXJ2ZXJzLWMyMGVjMmRkLmpzJztcbmltcG9ydCAnLi9kZWJvdW5jZS1iOTA3MjQyMi5qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBiYXNlZGlyLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHtcblx0XHRwYXRoOiBiYXNlZGlyLFxuXHRcdGV4cG9ydHM6IHt9LFxuXHRcdHJlcXVpcmU6IGZ1bmN0aW9uIChwYXRoLCBiYXNlKSB7XG5cdFx0XHRyZXR1cm4gY29tbW9uanNSZXF1aXJlKCk7XG5cdFx0fVxuXHR9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbmZ1bmN0aW9uIGNvbW1vbmpzUmVxdWlyZSAoKSB7XG5cdHRocm93IG5ldyBFcnJvcignRHluYW1pYyByZXF1aXJlcyBhcmUgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQgYnkgQHJvbGx1cC9wbHVnaW4tY29tbW9uanMnKTtcbn1cblxudmFyIGNvbG9yTmFtZSQxID0ge1xyXG5cdFwiYWxpY2VibHVlXCI6IFsyNDAsIDI0OCwgMjU1XSxcclxuXHRcImFudGlxdWV3aGl0ZVwiOiBbMjUwLCAyMzUsIDIxNV0sXHJcblx0XCJhcXVhXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJhcXVhbWFyaW5lXCI6IFsxMjcsIDI1NSwgMjEyXSxcclxuXHRcImF6dXJlXCI6IFsyNDAsIDI1NSwgMjU1XSxcclxuXHRcImJlaWdlXCI6IFsyNDUsIDI0NSwgMjIwXSxcclxuXHRcImJpc3F1ZVwiOiBbMjU1LCAyMjgsIDE5Nl0sXHJcblx0XCJibGFja1wiOiBbMCwgMCwgMF0sXHJcblx0XCJibGFuY2hlZGFsbW9uZFwiOiBbMjU1LCAyMzUsIDIwNV0sXHJcblx0XCJibHVlXCI6IFswLCAwLCAyNTVdLFxyXG5cdFwiYmx1ZXZpb2xldFwiOiBbMTM4LCA0MywgMjI2XSxcclxuXHRcImJyb3duXCI6IFsxNjUsIDQyLCA0Ml0sXHJcblx0XCJidXJseXdvb2RcIjogWzIyMiwgMTg0LCAxMzVdLFxyXG5cdFwiY2FkZXRibHVlXCI6IFs5NSwgMTU4LCAxNjBdLFxyXG5cdFwiY2hhcnRyZXVzZVwiOiBbMTI3LCAyNTUsIDBdLFxyXG5cdFwiY2hvY29sYXRlXCI6IFsyMTAsIDEwNSwgMzBdLFxyXG5cdFwiY29yYWxcIjogWzI1NSwgMTI3LCA4MF0sXHJcblx0XCJjb3JuZmxvd2VyYmx1ZVwiOiBbMTAwLCAxNDksIDIzN10sXHJcblx0XCJjb3Juc2lsa1wiOiBbMjU1LCAyNDgsIDIyMF0sXHJcblx0XCJjcmltc29uXCI6IFsyMjAsIDIwLCA2MF0sXHJcblx0XCJjeWFuXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJkYXJrYmx1ZVwiOiBbMCwgMCwgMTM5XSxcclxuXHRcImRhcmtjeWFuXCI6IFswLCAxMzksIDEzOV0sXHJcblx0XCJkYXJrZ29sZGVucm9kXCI6IFsxODQsIDEzNCwgMTFdLFxyXG5cdFwiZGFya2dyYXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2dyZWVuXCI6IFswLCAxMDAsIDBdLFxyXG5cdFwiZGFya2dyZXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2toYWtpXCI6IFsxODksIDE4MywgMTA3XSxcclxuXHRcImRhcmttYWdlbnRhXCI6IFsxMzksIDAsIDEzOV0sXHJcblx0XCJkYXJrb2xpdmVncmVlblwiOiBbODUsIDEwNywgNDddLFxyXG5cdFwiZGFya29yYW5nZVwiOiBbMjU1LCAxNDAsIDBdLFxyXG5cdFwiZGFya29yY2hpZFwiOiBbMTUzLCA1MCwgMjA0XSxcclxuXHRcImRhcmtyZWRcIjogWzEzOSwgMCwgMF0sXHJcblx0XCJkYXJrc2FsbW9uXCI6IFsyMzMsIDE1MCwgMTIyXSxcclxuXHRcImRhcmtzZWFncmVlblwiOiBbMTQzLCAxODgsIDE0M10sXHJcblx0XCJkYXJrc2xhdGVibHVlXCI6IFs3MiwgNjEsIDEzOV0sXHJcblx0XCJkYXJrc2xhdGVncmF5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmtzbGF0ZWdyZXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3R1cnF1b2lzZVwiOiBbMCwgMjA2LCAyMDldLFxyXG5cdFwiZGFya3Zpb2xldFwiOiBbMTQ4LCAwLCAyMTFdLFxyXG5cdFwiZGVlcHBpbmtcIjogWzI1NSwgMjAsIDE0N10sXHJcblx0XCJkZWVwc2t5Ymx1ZVwiOiBbMCwgMTkxLCAyNTVdLFxyXG5cdFwiZGltZ3JheVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkaW1ncmV5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRvZGdlcmJsdWVcIjogWzMwLCAxNDQsIDI1NV0sXHJcblx0XCJmaXJlYnJpY2tcIjogWzE3OCwgMzQsIDM0XSxcclxuXHRcImZsb3JhbHdoaXRlXCI6IFsyNTUsIDI1MCwgMjQwXSxcclxuXHRcImZvcmVzdGdyZWVuXCI6IFszNCwgMTM5LCAzNF0sXHJcblx0XCJmdWNoc2lhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJnYWluc2Jvcm9cIjogWzIyMCwgMjIwLCAyMjBdLFxyXG5cdFwiZ2hvc3R3aGl0ZVwiOiBbMjQ4LCAyNDgsIDI1NV0sXHJcblx0XCJnb2xkXCI6IFsyNTUsIDIxNSwgMF0sXHJcblx0XCJnb2xkZW5yb2RcIjogWzIxOCwgMTY1LCAzMl0sXHJcblx0XCJncmF5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImdyZWVuXCI6IFswLCAxMjgsIDBdLFxyXG5cdFwiZ3JlZW55ZWxsb3dcIjogWzE3MywgMjU1LCA0N10sXHJcblx0XCJncmV5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImhvbmV5ZGV3XCI6IFsyNDAsIDI1NSwgMjQwXSxcclxuXHRcImhvdHBpbmtcIjogWzI1NSwgMTA1LCAxODBdLFxyXG5cdFwiaW5kaWFucmVkXCI6IFsyMDUsIDkyLCA5Ml0sXHJcblx0XCJpbmRpZ29cIjogWzc1LCAwLCAxMzBdLFxyXG5cdFwiaXZvcnlcIjogWzI1NSwgMjU1LCAyNDBdLFxyXG5cdFwia2hha2lcIjogWzI0MCwgMjMwLCAxNDBdLFxyXG5cdFwibGF2ZW5kZXJcIjogWzIzMCwgMjMwLCAyNTBdLFxyXG5cdFwibGF2ZW5kZXJibHVzaFwiOiBbMjU1LCAyNDAsIDI0NV0sXHJcblx0XCJsYXduZ3JlZW5cIjogWzEyNCwgMjUyLCAwXSxcclxuXHRcImxlbW9uY2hpZmZvblwiOiBbMjU1LCAyNTAsIDIwNV0sXHJcblx0XCJsaWdodGJsdWVcIjogWzE3MywgMjE2LCAyMzBdLFxyXG5cdFwibGlnaHRjb3JhbFwiOiBbMjQwLCAxMjgsIDEyOF0sXHJcblx0XCJsaWdodGN5YW5cIjogWzIyNCwgMjU1LCAyNTVdLFxyXG5cdFwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIjogWzI1MCwgMjUwLCAyMTBdLFxyXG5cdFwibGlnaHRncmF5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0Z3JlZW5cIjogWzE0NCwgMjM4LCAxNDRdLFxyXG5cdFwibGlnaHRncmV5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0cGlua1wiOiBbMjU1LCAxODIsIDE5M10sXHJcblx0XCJsaWdodHNhbG1vblwiOiBbMjU1LCAxNjAsIDEyMl0sXHJcblx0XCJsaWdodHNlYWdyZWVuXCI6IFszMiwgMTc4LCAxNzBdLFxyXG5cdFwibGlnaHRza3libHVlXCI6IFsxMzUsIDIwNiwgMjUwXSxcclxuXHRcImxpZ2h0c2xhdGVncmF5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c2xhdGVncmV5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c3RlZWxibHVlXCI6IFsxNzYsIDE5NiwgMjIyXSxcclxuXHRcImxpZ2h0eWVsbG93XCI6IFsyNTUsIDI1NSwgMjI0XSxcclxuXHRcImxpbWVcIjogWzAsIDI1NSwgMF0sXHJcblx0XCJsaW1lZ3JlZW5cIjogWzUwLCAyMDUsIDUwXSxcclxuXHRcImxpbmVuXCI6IFsyNTAsIDI0MCwgMjMwXSxcclxuXHRcIm1hZ2VudGFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcIm1hcm9vblwiOiBbMTI4LCAwLCAwXSxcclxuXHRcIm1lZGl1bWFxdWFtYXJpbmVcIjogWzEwMiwgMjA1LCAxNzBdLFxyXG5cdFwibWVkaXVtYmx1ZVwiOiBbMCwgMCwgMjA1XSxcclxuXHRcIm1lZGl1bW9yY2hpZFwiOiBbMTg2LCA4NSwgMjExXSxcclxuXHRcIm1lZGl1bXB1cnBsZVwiOiBbMTQ3LCAxMTIsIDIxOV0sXHJcblx0XCJtZWRpdW1zZWFncmVlblwiOiBbNjAsIDE3OSwgMTEzXSxcclxuXHRcIm1lZGl1bXNsYXRlYmx1ZVwiOiBbMTIzLCAxMDQsIDIzOF0sXHJcblx0XCJtZWRpdW1zcHJpbmdncmVlblwiOiBbMCwgMjUwLCAxNTRdLFxyXG5cdFwibWVkaXVtdHVycXVvaXNlXCI6IFs3MiwgMjA5LCAyMDRdLFxyXG5cdFwibWVkaXVtdmlvbGV0cmVkXCI6IFsxOTksIDIxLCAxMzNdLFxyXG5cdFwibWlkbmlnaHRibHVlXCI6IFsyNSwgMjUsIDExMl0sXHJcblx0XCJtaW50Y3JlYW1cIjogWzI0NSwgMjU1LCAyNTBdLFxyXG5cdFwibWlzdHlyb3NlXCI6IFsyNTUsIDIyOCwgMjI1XSxcclxuXHRcIm1vY2Nhc2luXCI6IFsyNTUsIDIyOCwgMTgxXSxcclxuXHRcIm5hdmFqb3doaXRlXCI6IFsyNTUsIDIyMiwgMTczXSxcclxuXHRcIm5hdnlcIjogWzAsIDAsIDEyOF0sXHJcblx0XCJvbGRsYWNlXCI6IFsyNTMsIDI0NSwgMjMwXSxcclxuXHRcIm9saXZlXCI6IFsxMjgsIDEyOCwgMF0sXHJcblx0XCJvbGl2ZWRyYWJcIjogWzEwNywgMTQyLCAzNV0sXHJcblx0XCJvcmFuZ2VcIjogWzI1NSwgMTY1LCAwXSxcclxuXHRcIm9yYW5nZXJlZFwiOiBbMjU1LCA2OSwgMF0sXHJcblx0XCJvcmNoaWRcIjogWzIxOCwgMTEyLCAyMTRdLFxyXG5cdFwicGFsZWdvbGRlbnJvZFwiOiBbMjM4LCAyMzIsIDE3MF0sXHJcblx0XCJwYWxlZ3JlZW5cIjogWzE1MiwgMjUxLCAxNTJdLFxyXG5cdFwicGFsZXR1cnF1b2lzZVwiOiBbMTc1LCAyMzgsIDIzOF0sXHJcblx0XCJwYWxldmlvbGV0cmVkXCI6IFsyMTksIDExMiwgMTQ3XSxcclxuXHRcInBhcGF5YXdoaXBcIjogWzI1NSwgMjM5LCAyMTNdLFxyXG5cdFwicGVhY2hwdWZmXCI6IFsyNTUsIDIxOCwgMTg1XSxcclxuXHRcInBlcnVcIjogWzIwNSwgMTMzLCA2M10sXHJcblx0XCJwaW5rXCI6IFsyNTUsIDE5MiwgMjAzXSxcclxuXHRcInBsdW1cIjogWzIyMSwgMTYwLCAyMjFdLFxyXG5cdFwicG93ZGVyYmx1ZVwiOiBbMTc2LCAyMjQsIDIzMF0sXHJcblx0XCJwdXJwbGVcIjogWzEyOCwgMCwgMTI4XSxcclxuXHRcInJlYmVjY2FwdXJwbGVcIjogWzEwMiwgNTEsIDE1M10sXHJcblx0XCJyZWRcIjogWzI1NSwgMCwgMF0sXHJcblx0XCJyb3N5YnJvd25cIjogWzE4OCwgMTQzLCAxNDNdLFxyXG5cdFwicm95YWxibHVlXCI6IFs2NSwgMTA1LCAyMjVdLFxyXG5cdFwic2FkZGxlYnJvd25cIjogWzEzOSwgNjksIDE5XSxcclxuXHRcInNhbG1vblwiOiBbMjUwLCAxMjgsIDExNF0sXHJcblx0XCJzYW5keWJyb3duXCI6IFsyNDQsIDE2NCwgOTZdLFxyXG5cdFwic2VhZ3JlZW5cIjogWzQ2LCAxMzksIDg3XSxcclxuXHRcInNlYXNoZWxsXCI6IFsyNTUsIDI0NSwgMjM4XSxcclxuXHRcInNpZW5uYVwiOiBbMTYwLCA4MiwgNDVdLFxyXG5cdFwic2lsdmVyXCI6IFsxOTIsIDE5MiwgMTkyXSxcclxuXHRcInNreWJsdWVcIjogWzEzNSwgMjA2LCAyMzVdLFxyXG5cdFwic2xhdGVibHVlXCI6IFsxMDYsIDkwLCAyMDVdLFxyXG5cdFwic2xhdGVncmF5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNsYXRlZ3JleVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbm93XCI6IFsyNTUsIDI1MCwgMjUwXSxcclxuXHRcInNwcmluZ2dyZWVuXCI6IFswLCAyNTUsIDEyN10sXHJcblx0XCJzdGVlbGJsdWVcIjogWzcwLCAxMzAsIDE4MF0sXHJcblx0XCJ0YW5cIjogWzIxMCwgMTgwLCAxNDBdLFxyXG5cdFwidGVhbFwiOiBbMCwgMTI4LCAxMjhdLFxyXG5cdFwidGhpc3RsZVwiOiBbMjE2LCAxOTEsIDIxNl0sXHJcblx0XCJ0b21hdG9cIjogWzI1NSwgOTksIDcxXSxcclxuXHRcInR1cnF1b2lzZVwiOiBbNjQsIDIyNCwgMjA4XSxcclxuXHRcInZpb2xldFwiOiBbMjM4LCAxMzAsIDIzOF0sXHJcblx0XCJ3aGVhdFwiOiBbMjQ1LCAyMjIsIDE3OV0sXHJcblx0XCJ3aGl0ZVwiOiBbMjU1LCAyNTUsIDI1NV0sXHJcblx0XCJ3aGl0ZXNtb2tlXCI6IFsyNDUsIDI0NSwgMjQ1XSxcclxuXHRcInllbGxvd1wiOiBbMjU1LCAyNTUsIDBdLFxyXG5cdFwieWVsbG93Z3JlZW5cIjogWzE1NCwgMjA1LCA1MF1cclxufTtcblxudmFyIGlzQXJyYXlpc2ggPSBmdW5jdGlvbiBpc0FycmF5aXNoKG9iaikge1xuXHRpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiBvYmogaW5zdGFuY2VvZiBBcnJheSB8fCBBcnJheS5pc0FycmF5KG9iaikgfHxcblx0XHQob2JqLmxlbmd0aCA+PSAwICYmIChvYmouc3BsaWNlIGluc3RhbmNlb2YgRnVuY3Rpb24gfHxcblx0XHRcdChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgKG9iai5sZW5ndGggLSAxKSkgJiYgb2JqLmNvbnN0cnVjdG9yLm5hbWUgIT09ICdTdHJpbmcnKSkpO1xufTtcblxudmFyIHNpbXBsZVN3aXp6bGUgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG5cblxuXG52YXIgY29uY2F0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdDtcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxudmFyIHN3aXp6bGUgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN3aXp6bGUoYXJncykge1xuXHR2YXIgcmVzdWx0cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIGFyZyA9IGFyZ3NbaV07XG5cblx0XHRpZiAoaXNBcnJheWlzaChhcmcpKSB7XG5cdFx0XHQvLyBodHRwOi8vanNwZXJmLmNvbS9qYXZhc2NyaXB0LWFycmF5LWNvbmNhdC12cy1wdXNoLzk4XG5cdFx0XHRyZXN1bHRzID0gY29uY2F0LmNhbGwocmVzdWx0cywgc2xpY2UuY2FsbChhcmcpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0cy5wdXNoKGFyZyk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG5zd2l6emxlLndyYXAgPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZm4oc3dpenpsZShhcmd1bWVudHMpKTtcblx0fTtcbn07XG59KTtcblxudmFyIGNvbG9yU3RyaW5nID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuLyogTUlUIGxpY2Vuc2UgKi9cblxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QuaGFzT3duUHJvcGVydHk7XG5cbnZhciByZXZlcnNlTmFtZXMgPSB7fTtcblxuLy8gY3JlYXRlIGEgbGlzdCBvZiByZXZlcnNlIGNvbG9yIG5hbWVzXG5mb3IgKHZhciBuYW1lIGluIGNvbG9yTmFtZSQxKSB7XG5cdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbG9yTmFtZSQxLCBuYW1lKSkge1xuXHRcdHJldmVyc2VOYW1lc1tjb2xvck5hbWUkMVtuYW1lXV0gPSBuYW1lO1xuXHR9XG59XG5cbnZhciBjcyA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHR0bzoge30sXG5cdGdldDoge31cbn07XG5cbmNzLmdldCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0dmFyIHByZWZpeCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgMykudG9Mb3dlckNhc2UoKTtcblx0dmFyIHZhbDtcblx0dmFyIG1vZGVsO1xuXHRzd2l0Y2ggKHByZWZpeCkge1xuXHRcdGNhc2UgJ2hzbCc6XG5cdFx0XHR2YWwgPSBjcy5nZXQuaHNsKHN0cmluZyk7XG5cdFx0XHRtb2RlbCA9ICdoc2wnO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnaHdiJzpcblx0XHRcdHZhbCA9IGNzLmdldC5od2Ioc3RyaW5nKTtcblx0XHRcdG1vZGVsID0gJ2h3Yic7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dmFsID0gY3MuZ2V0LnJnYihzdHJpbmcpO1xuXHRcdFx0bW9kZWwgPSAncmdiJztcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0aWYgKCF2YWwpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiB7bW9kZWw6IG1vZGVsLCB2YWx1ZTogdmFsfTtcbn07XG5cbmNzLmdldC5yZ2IgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdGlmICghc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIgYWJiciA9IC9eIyhbYS1mMC05XXszLDR9KSQvaTtcblx0dmFyIGhleCA9IC9eIyhbYS1mMC05XXs2fSkoW2EtZjAtOV17Mn0pPyQvaTtcblx0dmFyIHJnYmEgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1xcZCspKD89W1xccyxdKVxccyooPzosXFxzKik/KFsrLV0/XFxkKykoPz1bXFxzLF0pXFxzKig/OixcXHMqKT8oWystXT9cXGQrKVxccyooPzpbLHxcXC9dXFxzKihbKy1dP1tcXGRcXC5dKykoJT8pXFxzKik/XFwpJC87XG5cdHZhciBwZXIgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLD9cXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosP1xccyooWystXT9bXFxkXFwuXSspXFwlXFxzKig/OlssfFxcL11cXHMqKFsrLV0/W1xcZFxcLl0rKSglPylcXHMqKT9cXCkkLztcblx0dmFyIGtleXdvcmQgPSAvXihcXHcrKSQvO1xuXG5cdHZhciByZ2IgPSBbMCwgMCwgMCwgMV07XG5cdHZhciBtYXRjaDtcblx0dmFyIGk7XG5cdHZhciBoZXhBbHBoYTtcblxuXHRpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goaGV4KSkge1xuXHRcdGhleEFscGhhID0gbWF0Y2hbMl07XG5cdFx0bWF0Y2ggPSBtYXRjaFsxXTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdC8vIGh0dHBzOi8vanNwZXJmLmNvbS9zbGljZS12cy1zdWJzdHItdnMtc3Vic3RyaW5nLW1ldGhvZHMtbG9uZy1zdHJpbmcvMTlcblx0XHRcdHZhciBpMiA9IGkgKiAyO1xuXHRcdFx0cmdiW2ldID0gcGFyc2VJbnQobWF0Y2guc2xpY2UoaTIsIGkyICsgMiksIDE2KTtcblx0XHR9XG5cblx0XHRpZiAoaGV4QWxwaGEpIHtcblx0XHRcdHJnYlszXSA9IHBhcnNlSW50KGhleEFscGhhLCAxNikgLyAyNTU7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGFiYnIpKSB7XG5cdFx0bWF0Y2ggPSBtYXRjaFsxXTtcblx0XHRoZXhBbHBoYSA9IG1hdGNoWzNdO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gcGFyc2VJbnQobWF0Y2hbaV0gKyBtYXRjaFtpXSwgMTYpO1xuXHRcdH1cblxuXHRcdGlmIChoZXhBbHBoYSkge1xuXHRcdFx0cmdiWzNdID0gcGFyc2VJbnQoaGV4QWxwaGEgKyBoZXhBbHBoYSwgMTYpIC8gMjU1O1xuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChyZ2JhKSkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2kgKyAxXSwgMCk7XG5cdFx0fVxuXG5cdFx0aWYgKG1hdGNoWzRdKSB7XG5cdFx0XHRpZiAobWF0Y2hbNV0pIHtcblx0XHRcdFx0cmdiWzNdID0gcGFyc2VGbG9hdChtYXRjaFs0XSkgKiAwLjAxO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmdiWzNdID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHBlcikpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobWF0Y2hbaSArIDFdKSAqIDIuNTUpO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaFs0XSkge1xuXHRcdFx0aWYgKG1hdGNoWzVdKSB7XG5cdFx0XHRcdHJnYlszXSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pICogMC4wMTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJnYlszXSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChrZXl3b3JkKSkge1xuXHRcdGlmIChtYXRjaFsxXSA9PT0gJ3RyYW5zcGFyZW50Jykge1xuXHRcdFx0cmV0dXJuIFswLCAwLCAwLCAwXTtcblx0XHR9XG5cblx0XHRpZiAoIWhhc093blByb3BlcnR5LmNhbGwoY29sb3JOYW1lJDEsIG1hdGNoWzFdKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmdiID0gY29sb3JOYW1lJDFbbWF0Y2hbMV1dO1xuXHRcdHJnYlszXSA9IDE7XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHJnYltpXSA9IGNsYW1wKHJnYltpXSwgMCwgMjU1KTtcblx0fVxuXHRyZ2JbM10gPSBjbGFtcChyZ2JbM10sIDAsIDEpO1xuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jcy5nZXQuaHNsID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGhzbCA9IC9eaHNsYT9cXChcXHMqKFsrLV0/KD86XFxkezAsM31cXC4pP1xcZCspKD86ZGVnKT9cXHMqLD9cXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLD9cXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86Wyx8XFwvXVxccyooWystXT8oPz1cXC5cXGR8XFxkKSg/OjB8WzEtOV1cXGQqKT8oPzpcXC5cXGQqKT8oPzpbZUVdWystXT9cXGQrKT8pXFxzKik/XFwpJC87XG5cdHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChoc2wpO1xuXG5cdGlmIChtYXRjaCkge1xuXHRcdHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdHZhciBoID0gKChwYXJzZUZsb2F0KG1hdGNoWzFdKSAlIDM2MCkgKyAzNjApICUgMzYwO1xuXHRcdHZhciBzID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCk7XG5cdFx0dmFyIGwgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKTtcblx0XHR2YXIgYSA9IGNsYW1wKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG5cblx0XHRyZXR1cm4gW2gsIHMsIGwsIGFdO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5jcy5nZXQuaHdiID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGh3YiA9IC9eaHdiXFwoXFxzKihbKy1dP1xcZHswLDN9KD86XFwuXFxkKyk/KSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dPyg/PVxcLlxcZHxcXGQpKD86MHxbMS05XVxcZCopPyg/OlxcLlxcZCopPyg/OltlRV1bKy1dP1xcZCspPylcXHMqKT9cXCkkLztcblx0dmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGh3Yik7XG5cblx0aWYgKG1hdGNoKSB7XG5cdFx0dmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0dmFyIGggPSAoKHBhcnNlRmxvYXQobWF0Y2hbMV0pICUgMzYwKSArIDM2MCkgJSAzNjA7XG5cdFx0dmFyIHcgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKTtcblx0XHR2YXIgYiA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApO1xuXHRcdHZhciBhID0gY2xhbXAoaXNOYU4oYWxwaGEpID8gMSA6IGFscGhhLCAwLCAxKTtcblx0XHRyZXR1cm4gW2gsIHcsIGIsIGFdO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5jcy50by5oZXggPSBmdW5jdGlvbiAoKSB7XG5cdHZhciByZ2JhID0gc2ltcGxlU3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHJldHVybiAoXG5cdFx0JyMnICtcblx0XHRoZXhEb3VibGUocmdiYVswXSkgK1xuXHRcdGhleERvdWJsZShyZ2JhWzFdKSArXG5cdFx0aGV4RG91YmxlKHJnYmFbMl0pICtcblx0XHQocmdiYVszXSA8IDFcblx0XHRcdD8gKGhleERvdWJsZShNYXRoLnJvdW5kKHJnYmFbM10gKiAyNTUpKSlcblx0XHRcdDogJycpXG5cdCk7XG59O1xuXG5jcy50by5yZ2IgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciByZ2JhID0gc2ltcGxlU3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHJldHVybiByZ2JhLmxlbmd0aCA8IDQgfHwgcmdiYVszXSA9PT0gMVxuXHRcdD8gJ3JnYignICsgTWF0aC5yb3VuZChyZ2JhWzBdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMV0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsyXSkgKyAnKSdcblx0XHQ6ICdyZ2JhKCcgKyBNYXRoLnJvdW5kKHJnYmFbMF0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsxXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzJdKSArICcsICcgKyByZ2JhWzNdICsgJyknO1xufTtcblxuY3MudG8ucmdiLnBlcmNlbnQgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciByZ2JhID0gc2ltcGxlU3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHZhciByID0gTWF0aC5yb3VuZChyZ2JhWzBdIC8gMjU1ICogMTAwKTtcblx0dmFyIGcgPSBNYXRoLnJvdW5kKHJnYmFbMV0gLyAyNTUgKiAxMDApO1xuXHR2YXIgYiA9IE1hdGgucm91bmQocmdiYVsyXSAvIDI1NSAqIDEwMCk7XG5cblx0cmV0dXJuIHJnYmEubGVuZ3RoIDwgNCB8fCByZ2JhWzNdID09PSAxXG5cdFx0PyAncmdiKCcgKyByICsgJyUsICcgKyBnICsgJyUsICcgKyBiICsgJyUpJ1xuXHRcdDogJ3JnYmEoJyArIHIgKyAnJSwgJyArIGcgKyAnJSwgJyArIGIgKyAnJSwgJyArIHJnYmFbM10gKyAnKSc7XG59O1xuXG5jcy50by5oc2wgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBoc2xhID0gc2ltcGxlU3dpenpsZShhcmd1bWVudHMpO1xuXHRyZXR1cm4gaHNsYS5sZW5ndGggPCA0IHx8IGhzbGFbM10gPT09IDFcblx0XHQ/ICdoc2woJyArIGhzbGFbMF0gKyAnLCAnICsgaHNsYVsxXSArICclLCAnICsgaHNsYVsyXSArICclKSdcblx0XHQ6ICdoc2xhKCcgKyBoc2xhWzBdICsgJywgJyArIGhzbGFbMV0gKyAnJSwgJyArIGhzbGFbMl0gKyAnJSwgJyArIGhzbGFbM10gKyAnKSc7XG59O1xuXG4vLyBod2IgaXMgYSBiaXQgZGlmZmVyZW50IHRoYW4gcmdiKGEpICYgaHNsKGEpIHNpbmNlIHRoZXJlIGlzIG5vIGFscGhhIHNwZWNpZmljIHN5bnRheFxuLy8gKGh3YiBoYXZlIGFscGhhIG9wdGlvbmFsICYgMSBpcyBkZWZhdWx0IHZhbHVlKVxuY3MudG8uaHdiID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgaHdiYSA9IHNpbXBsZVN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHR2YXIgYSA9ICcnO1xuXHRpZiAoaHdiYS5sZW5ndGggPj0gNCAmJiBod2JhWzNdICE9PSAxKSB7XG5cdFx0YSA9ICcsICcgKyBod2JhWzNdO1xuXHR9XG5cblx0cmV0dXJuICdod2IoJyArIGh3YmFbMF0gKyAnLCAnICsgaHdiYVsxXSArICclLCAnICsgaHdiYVsyXSArICclJyArIGEgKyAnKSc7XG59O1xuXG5jcy50by5rZXl3b3JkID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gcmV2ZXJzZU5hbWVzW3JnYi5zbGljZSgwLCAzKV07XG59O1xuXG4vLyBoZWxwZXJzXG5mdW5jdGlvbiBjbGFtcChudW0sIG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heChtaW4sIG51bSksIG1heCk7XG59XG5cbmZ1bmN0aW9uIGhleERvdWJsZShudW0pIHtcblx0dmFyIHN0ciA9IE1hdGgucm91bmQobnVtKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuIChzdHIubGVuZ3RoIDwgMikgPyAnMCcgKyBzdHIgOiBzdHI7XG59XG59KTtcblxudmFyIGNvbG9yTmFtZSA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07XG5cbi8qIE1JVCBsaWNlbnNlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cblxuXG4vLyBOT1RFOiBjb252ZXJzaW9ucyBzaG91bGQgb25seSByZXR1cm4gcHJpbWl0aXZlIHZhbHVlcyAoaS5lLiBhcnJheXMsIG9yXG4vLyAgICAgICB2YWx1ZXMgdGhhdCBnaXZlIGNvcnJlY3QgYHR5cGVvZmAgcmVzdWx0cykuXG4vLyAgICAgICBkbyBub3QgdXNlIGJveCB2YWx1ZXMgdHlwZXMgKGkuZS4gTnVtYmVyKCksIFN0cmluZygpLCBldGMuKVxuXG5jb25zdCByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGNvbG9yTmFtZSkpIHtcblx0cmV2ZXJzZUtleXdvcmRzW2NvbG9yTmFtZVtrZXldXSA9IGtleTtcbn1cblxuY29uc3QgY29udmVydCQxID0ge1xuXHRyZ2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAncmdiJ30sXG5cdGhzbDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc2wnfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzdid9LFxuXHRod2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHdiJ30sXG5cdGNteWs6IHtjaGFubmVsczogNCwgbGFiZWxzOiAnY215ayd9LFxuXHR4eXo6IHtjaGFubmVsczogMywgbGFiZWxzOiAneHl6J30sXG5cdGxhYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsYWInfSxcblx0bGNoOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xjaCd9LFxuXHRoZXg6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2hleCddfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsna2V5d29yZCddfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMTYnXX0sXG5cdGFuc2kyNTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kyNTYnXX0sXG5cdGhjZzoge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsnaCcsICdjJywgJ2cnXX0sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydyMTYnLCAnZzE2JywgJ2IxNiddfSxcblx0Z3JheToge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnZ3JheSddfVxufTtcblxudmFyIGNvbnZlcnNpb25zID0gY29udmVydCQxO1xuXG4vLyBIaWRlIC5jaGFubmVscyBhbmQgLmxhYmVscyBwcm9wZXJ0aWVzXG5mb3IgKGNvbnN0IG1vZGVsIG9mIE9iamVjdC5rZXlzKGNvbnZlcnQkMSkpIHtcblx0aWYgKCEoJ2NoYW5uZWxzJyBpbiBjb252ZXJ0JDFbbW9kZWxdKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0fVxuXG5cdGlmICghKCdsYWJlbHMnIGluIGNvbnZlcnQkMVttb2RlbF0pKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWwgbGFiZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHR9XG5cblx0aWYgKGNvbnZlcnQkMVttb2RlbF0ubGFiZWxzLmxlbmd0aCAhPT0gY29udmVydCQxW21vZGVsXS5jaGFubmVscykge1xuXHRcdHRocm93IG5ldyBFcnJvcignY2hhbm5lbCBhbmQgbGFiZWwgY291bnRzIG1pc21hdGNoOiAnICsgbW9kZWwpO1xuXHR9XG5cblx0Y29uc3Qge2NoYW5uZWxzLCBsYWJlbHN9ID0gY29udmVydCQxW21vZGVsXTtcblx0ZGVsZXRlIGNvbnZlcnQkMVttb2RlbF0uY2hhbm5lbHM7XG5cdGRlbGV0ZSBjb252ZXJ0JDFbbW9kZWxdLmxhYmVscztcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnQkMVttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnQkMVttb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGxhYmVsc30pO1xufVxuXG5jb252ZXJ0JDEucmdiLmhzbCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgciA9IHJnYlswXSAvIDI1NTtcblx0Y29uc3QgZyA9IHJnYlsxXSAvIDI1NTtcblx0Y29uc3QgYiA9IHJnYlsyXSAvIDI1NTtcblx0Y29uc3QgbWluID0gTWF0aC5taW4ociwgZywgYik7XG5cdGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHRjb25zdCBkZWx0YSA9IG1heCAtIG1pbjtcblx0bGV0IGg7XG5cdGxldCBzO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdGggPSAwO1xuXHR9IGVsc2UgaWYgKHIgPT09IG1heCkge1xuXHRcdGggPSAoZyAtIGIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoZyA9PT0gbWF4KSB7XG5cdFx0aCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoYiA9PT0gbWF4KSB7XG5cdFx0aCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG5cdH1cblxuXHRoID0gTWF0aC5taW4oaCAqIDYwLCAzNjApO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0Y29uc3QgbCA9IChtaW4gKyBtYXgpIC8gMjtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRzID0gMDtcblx0fSBlbHNlIGlmIChsIDw9IDAuNSkge1xuXHRcdHMgPSBkZWx0YSAvIChtYXggKyBtaW4pO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkZWx0YSAvICgyIC0gbWF4IC0gbWluKTtcblx0fVxuXG5cdHJldHVybiBbaCwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0JDEucmdiLmhzdiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0bGV0IHJkaWY7XG5cdGxldCBnZGlmO1xuXHRsZXQgYmRpZjtcblx0bGV0IGg7XG5cdGxldCBzO1xuXG5cdGNvbnN0IHIgPSByZ2JbMF0gLyAyNTU7XG5cdGNvbnN0IGcgPSByZ2JbMV0gLyAyNTU7XG5cdGNvbnN0IGIgPSByZ2JbMl0gLyAyNTU7XG5cdGNvbnN0IHYgPSBNYXRoLm1heChyLCBnLCBiKTtcblx0Y29uc3QgZGlmZiA9IHYgLSBNYXRoLm1pbihyLCBnLCBiKTtcblx0Y29uc3QgZGlmZmMgPSBmdW5jdGlvbiAoYykge1xuXHRcdHJldHVybiAodiAtIGMpIC8gNiAvIGRpZmYgKyAxIC8gMjtcblx0fTtcblxuXHRpZiAoZGlmZiA9PT0gMCkge1xuXHRcdGggPSAwO1xuXHRcdHMgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkaWZmIC8gdjtcblx0XHRyZGlmID0gZGlmZmMocik7XG5cdFx0Z2RpZiA9IGRpZmZjKGcpO1xuXHRcdGJkaWYgPSBkaWZmYyhiKTtcblxuXHRcdGlmIChyID09PSB2KSB7XG5cdFx0XHRoID0gYmRpZiAtIGdkaWY7XG5cdFx0fSBlbHNlIGlmIChnID09PSB2KSB7XG5cdFx0XHRoID0gKDEgLyAzKSArIHJkaWYgLSBiZGlmO1xuXHRcdH0gZWxzZSBpZiAoYiA9PT0gdikge1xuXHRcdFx0aCA9ICgyIC8gMykgKyBnZGlmIC0gcmRpZjtcblx0XHR9XG5cblx0XHRpZiAoaCA8IDApIHtcblx0XHRcdGggKz0gMTtcblx0XHR9IGVsc2UgaWYgKGggPiAxKSB7XG5cdFx0XHRoIC09IDE7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIFtcblx0XHRoICogMzYwLFxuXHRcdHMgKiAxMDAsXG5cdFx0diAqIDEwMFxuXHRdO1xufTtcblxuY29udmVydCQxLnJnYi5od2IgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHIgPSByZ2JbMF07XG5cdGNvbnN0IGcgPSByZ2JbMV07XG5cdGxldCBiID0gcmdiWzJdO1xuXHRjb25zdCBoID0gY29udmVydCQxLnJnYi5oc2wocmdiKVswXTtcblx0Y29uc3QgdyA9IDEgLyAyNTUgKiBNYXRoLm1pbihyLCBNYXRoLm1pbihnLCBiKSk7XG5cblx0YiA9IDEgLSAxIC8gMjU1ICogTWF0aC5tYXgociwgTWF0aC5tYXgoZywgYikpO1xuXG5cdHJldHVybiBbaCwgdyAqIDEwMCwgYiAqIDEwMF07XG59O1xuXG5jb252ZXJ0JDEucmdiLmNteWsgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHIgPSByZ2JbMF0gLyAyNTU7XG5cdGNvbnN0IGcgPSByZ2JbMV0gLyAyNTU7XG5cdGNvbnN0IGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Y29uc3QgayA9IE1hdGgubWluKDEgLSByLCAxIC0gZywgMSAtIGIpO1xuXHRjb25zdCBjID0gKDEgLSByIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdGNvbnN0IG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0Y29uc3QgeSA9ICgxIC0gYiAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXG5cdHJldHVybiBbYyAqIDEwMCwgbSAqIDEwMCwgeSAqIDEwMCwgayAqIDEwMF07XG59O1xuXG5mdW5jdGlvbiBjb21wYXJhdGl2ZURpc3RhbmNlKHgsIHkpIHtcblx0Lypcblx0XHRTZWUgaHR0cHM6Ly9lbi5tLndpa2lwZWRpYS5vcmcvd2lraS9FdWNsaWRlYW5fZGlzdGFuY2UjU3F1YXJlZF9FdWNsaWRlYW5fZGlzdGFuY2Vcblx0Ki9cblx0cmV0dXJuIChcblx0XHQoKHhbMF0gLSB5WzBdKSAqKiAyKSArXG5cdFx0KCh4WzFdIC0geVsxXSkgKiogMikgK1xuXHRcdCgoeFsyXSAtIHlbMl0pICoqIDIpXG5cdCk7XG59XG5cbmNvbnZlcnQkMS5yZ2Iua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgcmV2ZXJzZWQgPSByZXZlcnNlS2V5d29yZHNbcmdiXTtcblx0aWYgKHJldmVyc2VkKSB7XG5cdFx0cmV0dXJuIHJldmVyc2VkO1xuXHR9XG5cblx0bGV0IGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcblx0bGV0IGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcblxuXHRmb3IgKGNvbnN0IGtleXdvcmQgb2YgT2JqZWN0LmtleXMoY29sb3JOYW1lKSkge1xuXHRcdGNvbnN0IHZhbHVlID0gY29sb3JOYW1lW2tleXdvcmRdO1xuXG5cdFx0Ly8gQ29tcHV0ZSBjb21wYXJhdGl2ZSBkaXN0YW5jZVxuXHRcdGNvbnN0IGRpc3RhbmNlID0gY29tcGFyYXRpdmVEaXN0YW5jZShyZ2IsIHZhbHVlKTtcblxuXHRcdC8vIENoZWNrIGlmIGl0cyBsZXNzLCBpZiBzbyBzZXQgYXMgY2xvc2VzdFxuXHRcdGlmIChkaXN0YW5jZSA8IGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UpIHtcblx0XHRcdGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcblx0XHRcdGN1cnJlbnRDbG9zZXN0S2V5d29yZCA9IGtleXdvcmQ7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcbn07XG5cbmNvbnZlcnQkMS5rZXl3b3JkLnJnYiA9IGZ1bmN0aW9uIChrZXl3b3JkKSB7XG5cdHJldHVybiBjb2xvck5hbWVba2V5d29yZF07XG59O1xuXG5jb252ZXJ0JDEucmdiLnh5eiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0bGV0IHIgPSByZ2JbMF0gLyAyNTU7XG5cdGxldCBnID0gcmdiWzFdIC8gMjU1O1xuXHRsZXQgYiA9IHJnYlsyXSAvIDI1NTtcblxuXHQvLyBBc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDQwNDUgPyAoKChyICsgMC4wNTUpIC8gMS4wNTUpICoqIDIuNCkgOiAociAvIDEyLjkyKTtcblx0ZyA9IGcgPiAwLjA0MDQ1ID8gKCgoZyArIDAuMDU1KSAvIDEuMDU1KSAqKiAyLjQpIDogKGcgLyAxMi45Mik7XG5cdGIgPSBiID4gMC4wNDA0NSA/ICgoKGIgKyAwLjA1NSkgLyAxLjA1NSkgKiogMi40KSA6IChiIC8gMTIuOTIpO1xuXG5cdGNvbnN0IHggPSAociAqIDAuNDEyNCkgKyAoZyAqIDAuMzU3NikgKyAoYiAqIDAuMTgwNSk7XG5cdGNvbnN0IHkgPSAociAqIDAuMjEyNikgKyAoZyAqIDAuNzE1MikgKyAoYiAqIDAuMDcyMik7XG5cdGNvbnN0IHogPSAociAqIDAuMDE5MykgKyAoZyAqIDAuMTE5MikgKyAoYiAqIDAuOTUwNSk7XG5cblx0cmV0dXJuIFt4ICogMTAwLCB5ICogMTAwLCB6ICogMTAwXTtcbn07XG5cbmNvbnZlcnQkMS5yZ2IubGFiID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCB4eXogPSBjb252ZXJ0JDEucmdiLnh5eihyZ2IpO1xuXHRsZXQgeCA9IHh5elswXTtcblx0bGV0IHkgPSB4eXpbMV07XG5cdGxldCB6ID0geHl6WzJdO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyAoeCAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/ICh5ICoqICgxIC8gMykpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gKHogKiogKDEgLyAzKSkgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0Y29uc3QgbCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRjb25zdCBhID0gNTAwICogKHggLSB5KTtcblx0Y29uc3QgYiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQkMS5oc2wucmdiID0gZnVuY3Rpb24gKGhzbCkge1xuXHRjb25zdCBoID0gaHNsWzBdIC8gMzYwO1xuXHRjb25zdCBzID0gaHNsWzFdIC8gMTAwO1xuXHRjb25zdCBsID0gaHNsWzJdIC8gMTAwO1xuXHRsZXQgdDI7XG5cdGxldCB0Mztcblx0bGV0IHZhbDtcblxuXHRpZiAocyA9PT0gMCkge1xuXHRcdHZhbCA9IGwgKiAyNTU7XG5cdFx0cmV0dXJuIFt2YWwsIHZhbCwgdmFsXTtcblx0fVxuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0dDIgPSBsICogKDEgKyBzKTtcblx0fSBlbHNlIHtcblx0XHR0MiA9IGwgKyBzIC0gbCAqIHM7XG5cdH1cblxuXHRjb25zdCB0MSA9IDIgKiBsIC0gdDI7XG5cblx0Y29uc3QgcmdiID0gWzAsIDAsIDBdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHQzID0gaCArIDEgLyAzICogLShpIC0gMSk7XG5cdFx0aWYgKHQzIDwgMCkge1xuXHRcdFx0dDMrKztcblx0XHR9XG5cblx0XHRpZiAodDMgPiAxKSB7XG5cdFx0XHR0My0tO1xuXHRcdH1cblxuXHRcdGlmICg2ICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0Mztcblx0XHR9IGVsc2UgaWYgKDIgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQyO1xuXHRcdH0gZWxzZSBpZiAoMyAqIHQzIDwgMikge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0MykgKiA2O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWwgPSB0MTtcblx0XHR9XG5cblx0XHRyZ2JbaV0gPSB2YWwgKiAyNTU7XG5cdH1cblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY29udmVydCQxLmhzbC5oc3YgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdGNvbnN0IGggPSBoc2xbMF07XG5cdGxldCBzID0gaHNsWzFdIC8gMTAwO1xuXHRsZXQgbCA9IGhzbFsyXSAvIDEwMDtcblx0bGV0IHNtaW4gPSBzO1xuXHRjb25zdCBsbWluID0gTWF0aC5tYXgobCwgMC4wMSk7XG5cblx0bCAqPSAyO1xuXHRzICo9IChsIDw9IDEpID8gbCA6IDIgLSBsO1xuXHRzbWluICo9IGxtaW4gPD0gMSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0Y29uc3QgdiA9IChsICsgcykgLyAyO1xuXHRjb25zdCBzdiA9IGwgPT09IDAgPyAoMiAqIHNtaW4pIC8gKGxtaW4gKyBzbWluKSA6ICgyICogcykgLyAobCArIHMpO1xuXG5cdHJldHVybiBbaCwgc3YgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydCQxLmhzdi5yZ2IgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdGNvbnN0IGggPSBoc3ZbMF0gLyA2MDtcblx0Y29uc3QgcyA9IGhzdlsxXSAvIDEwMDtcblx0bGV0IHYgPSBoc3ZbMl0gLyAxMDA7XG5cdGNvbnN0IGhpID0gTWF0aC5mbG9vcihoKSAlIDY7XG5cblx0Y29uc3QgZiA9IGggLSBNYXRoLmZsb29yKGgpO1xuXHRjb25zdCBwID0gMjU1ICogdiAqICgxIC0gcyk7XG5cdGNvbnN0IHEgPSAyNTUgKiB2ICogKDEgLSAocyAqIGYpKTtcblx0Y29uc3QgdCA9IDI1NSAqIHYgKiAoMSAtIChzICogKDEgLSBmKSkpO1xuXHR2ICo9IDI1NTtcblxuXHRzd2l0Y2ggKGhpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIFt2LCB0LCBwXTtcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gW3EsIHYsIHBdO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBbcCwgdiwgdF07XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuIFtwLCBxLCB2XTtcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXR1cm4gW3QsIHAsIHZdO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJldHVybiBbdiwgcCwgcV07XG5cdH1cbn07XG5cbmNvbnZlcnQkMS5oc3YuaHNsID0gZnVuY3Rpb24gKGhzdikge1xuXHRjb25zdCBoID0gaHN2WzBdO1xuXHRjb25zdCBzID0gaHN2WzFdIC8gMTAwO1xuXHRjb25zdCB2ID0gaHN2WzJdIC8gMTAwO1xuXHRjb25zdCB2bWluID0gTWF0aC5tYXgodiwgMC4wMSk7XG5cdGxldCBzbDtcblx0bGV0IGw7XG5cblx0bCA9ICgyIC0gcykgKiB2O1xuXHRjb25zdCBsbWluID0gKDIgLSBzKSAqIHZtaW47XG5cdHNsID0gcyAqIHZtaW47XG5cdHNsIC89IChsbWluIDw9IDEpID8gbG1pbiA6IDIgLSBsbWluO1xuXHRzbCA9IHNsIHx8IDA7XG5cdGwgLz0gMjtcblxuXHRyZXR1cm4gW2gsIHNsICogMTAwLCBsICogMTAwXTtcbn07XG5cbi8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1jb2xvci8jaHdiLXRvLXJnYlxuY29udmVydCQxLmh3Yi5yZ2IgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdGNvbnN0IGggPSBod2JbMF0gLyAzNjA7XG5cdGxldCB3aCA9IGh3YlsxXSAvIDEwMDtcblx0bGV0IGJsID0gaHdiWzJdIC8gMTAwO1xuXHRjb25zdCByYXRpbyA9IHdoICsgYmw7XG5cdGxldCBmO1xuXG5cdC8vIFdoICsgYmwgY2FudCBiZSA+IDFcblx0aWYgKHJhdGlvID4gMSkge1xuXHRcdHdoIC89IHJhdGlvO1xuXHRcdGJsIC89IHJhdGlvO1xuXHR9XG5cblx0Y29uc3QgaSA9IE1hdGguZmxvb3IoNiAqIGgpO1xuXHRjb25zdCB2ID0gMSAtIGJsO1xuXHRmID0gNiAqIGggLSBpO1xuXG5cdGlmICgoaSAmIDB4MDEpICE9PSAwKSB7XG5cdFx0ZiA9IDEgLSBmO1xuXHR9XG5cblx0Y29uc3QgbiA9IHdoICsgZiAqICh2IC0gd2gpOyAvLyBMaW5lYXIgaW50ZXJwb2xhdGlvblxuXG5cdGxldCByO1xuXHRsZXQgZztcblx0bGV0IGI7XG5cdC8qIGVzbGludC1kaXNhYmxlIG1heC1zdGF0ZW1lbnRzLXBlci1saW5lLG5vLW11bHRpLXNwYWNlcyAqL1xuXHRzd2l0Y2ggKGkpIHtcblx0XHRkZWZhdWx0OlxuXHRcdGNhc2UgNjpcblx0XHRjYXNlIDA6IHIgPSB2OyAgZyA9IG47ICBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMTogciA9IG47ICBnID0gdjsgIGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAyOiByID0gd2g7IGcgPSB2OyAgYiA9IG47IGJyZWFrO1xuXHRcdGNhc2UgMzogciA9IHdoOyBnID0gbjsgIGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDQ6IHIgPSBuOyAgZyA9IHdoOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA1OiByID0gdjsgIGcgPSB3aDsgYiA9IG47IGJyZWFrO1xuXHR9XG5cdC8qIGVzbGludC1lbmFibGUgbWF4LXN0YXRlbWVudHMtcGVyLWxpbmUsbm8tbXVsdGktc3BhY2VzICovXG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQkMS5jbXlrLnJnYiA9IGZ1bmN0aW9uIChjbXlrKSB7XG5cdGNvbnN0IGMgPSBjbXlrWzBdIC8gMTAwO1xuXHRjb25zdCBtID0gY215a1sxXSAvIDEwMDtcblx0Y29uc3QgeSA9IGNteWtbMl0gLyAxMDA7XG5cdGNvbnN0IGsgPSBjbXlrWzNdIC8gMTAwO1xuXG5cdGNvbnN0IHIgPSAxIC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKTtcblx0Y29uc3QgZyA9IDEgLSBNYXRoLm1pbigxLCBtICogKDEgLSBrKSArIGspO1xuXHRjb25zdCBiID0gMSAtIE1hdGgubWluKDEsIHkgKiAoMSAtIGspICsgayk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQkMS54eXoucmdiID0gZnVuY3Rpb24gKHh5eikge1xuXHRjb25zdCB4ID0geHl6WzBdIC8gMTAwO1xuXHRjb25zdCB5ID0geHl6WzFdIC8gMTAwO1xuXHRjb25zdCB6ID0geHl6WzJdIC8gMTAwO1xuXHRsZXQgcjtcblx0bGV0IGc7XG5cdGxldCBiO1xuXG5cdHIgPSAoeCAqIDMuMjQwNikgKyAoeSAqIC0xLjUzNzIpICsgKHogKiAtMC40OTg2KTtcblx0ZyA9ICh4ICogLTAuOTY4OSkgKyAoeSAqIDEuODc1OCkgKyAoeiAqIDAuMDQxNSk7XG5cdGIgPSAoeCAqIDAuMDU1NykgKyAoeSAqIC0wLjIwNDApICsgKHogKiAxLjA1NzApO1xuXG5cdC8vIEFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogKHIgKiogKDEuMCAvIDIuNCkpKSAtIDAuMDU1KVxuXHRcdDogciAqIDEyLjkyO1xuXG5cdGcgPSBnID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogKGcgKiogKDEuMCAvIDIuNCkpKSAtIDAuMDU1KVxuXHRcdDogZyAqIDEyLjkyO1xuXG5cdGIgPSBiID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogKGIgKiogKDEuMCAvIDIuNCkpKSAtIDAuMDU1KVxuXHRcdDogYiAqIDEyLjkyO1xuXG5cdHIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCByKSwgMSk7XG5cdGcgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBnKSwgMSk7XG5cdGIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBiKSwgMSk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQkMS54eXoubGFiID0gZnVuY3Rpb24gKHh5eikge1xuXHRsZXQgeCA9IHh5elswXTtcblx0bGV0IHkgPSB4eXpbMV07XG5cdGxldCB6ID0geHl6WzJdO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyAoeCAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/ICh5ICoqICgxIC8gMykpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gKHogKiogKDEgLyAzKSkgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0Y29uc3QgbCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRjb25zdCBhID0gNTAwICogKHggLSB5KTtcblx0Y29uc3QgYiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQkMS5sYWIueHl6ID0gZnVuY3Rpb24gKGxhYikge1xuXHRjb25zdCBsID0gbGFiWzBdO1xuXHRjb25zdCBhID0gbGFiWzFdO1xuXHRjb25zdCBiID0gbGFiWzJdO1xuXHRsZXQgeDtcblx0bGV0IHk7XG5cdGxldCB6O1xuXG5cdHkgPSAobCArIDE2KSAvIDExNjtcblx0eCA9IGEgLyA1MDAgKyB5O1xuXHR6ID0geSAtIGIgLyAyMDA7XG5cblx0Y29uc3QgeTIgPSB5ICoqIDM7XG5cdGNvbnN0IHgyID0geCAqKiAzO1xuXHRjb25zdCB6MiA9IHogKiogMztcblx0eSA9IHkyID4gMC4wMDg4NTYgPyB5MiA6ICh5IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHggPSB4MiA+IDAuMDA4ODU2ID8geDIgOiAoeCAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR6ID0gejIgPiAwLjAwODg1NiA/IHoyIDogKHogLSAxNiAvIDExNikgLyA3Ljc4NztcblxuXHR4ICo9IDk1LjA0Nztcblx0eSAqPSAxMDA7XG5cdHogKj0gMTA4Ljg4MztcblxuXHRyZXR1cm4gW3gsIHksIHpdO1xufTtcblxuY29udmVydCQxLmxhYi5sY2ggPSBmdW5jdGlvbiAobGFiKSB7XG5cdGNvbnN0IGwgPSBsYWJbMF07XG5cdGNvbnN0IGEgPSBsYWJbMV07XG5cdGNvbnN0IGIgPSBsYWJbMl07XG5cdGxldCBoO1xuXG5cdGNvbnN0IGhyID0gTWF0aC5hdGFuMihiLCBhKTtcblx0aCA9IGhyICogMzYwIC8gMiAvIE1hdGguUEk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRjb25zdCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXG5cdHJldHVybiBbbCwgYywgaF07XG59O1xuXG5jb252ZXJ0JDEubGNoLmxhYiA9IGZ1bmN0aW9uIChsY2gpIHtcblx0Y29uc3QgbCA9IGxjaFswXTtcblx0Y29uc3QgYyA9IGxjaFsxXTtcblx0Y29uc3QgaCA9IGxjaFsyXTtcblxuXHRjb25zdCBociA9IGggLyAzNjAgKiAyICogTWF0aC5QSTtcblx0Y29uc3QgYSA9IGMgKiBNYXRoLmNvcyhocik7XG5cdGNvbnN0IGIgPSBjICogTWF0aC5zaW4oaHIpO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0JDEucmdiLmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzLCBzYXR1cmF0aW9uID0gbnVsbCkge1xuXHRjb25zdCBbciwgZywgYl0gPSBhcmdzO1xuXHRsZXQgdmFsdWUgPSBzYXR1cmF0aW9uID09PSBudWxsID8gY29udmVydCQxLnJnYi5oc3YoYXJncylbMl0gOiBzYXR1cmF0aW9uOyAvLyBIc3YgLT4gYW5zaTE2IG9wdGltaXphdGlvblxuXG5cdHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAvIDUwKTtcblxuXHRpZiAodmFsdWUgPT09IDApIHtcblx0XHRyZXR1cm4gMzA7XG5cdH1cblxuXHRsZXQgYW5zaSA9IDMwXG5cdFx0KyAoKE1hdGgucm91bmQoYiAvIDI1NSkgPDwgMilcblx0XHR8IChNYXRoLnJvdW5kKGcgLyAyNTUpIDw8IDEpXG5cdFx0fCBNYXRoLnJvdW5kKHIgLyAyNTUpKTtcblxuXHRpZiAodmFsdWUgPT09IDIpIHtcblx0XHRhbnNpICs9IDYwO1xuXHR9XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0JDEuaHN2LmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIE9wdGltaXphdGlvbiBoZXJlOyB3ZSBhbHJlYWR5IGtub3cgdGhlIHZhbHVlIGFuZCBkb24ndCBuZWVkIHRvIGdldFxuXHQvLyBpdCBjb252ZXJ0ZWQgZm9yIHVzLlxuXHRyZXR1cm4gY29udmVydCQxLnJnYi5hbnNpMTYoY29udmVydCQxLmhzdi5yZ2IoYXJncyksIGFyZ3NbMl0pO1xufTtcblxuY29udmVydCQxLnJnYi5hbnNpMjU2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Y29uc3QgciA9IGFyZ3NbMF07XG5cdGNvbnN0IGcgPSBhcmdzWzFdO1xuXHRjb25zdCBiID0gYXJnc1syXTtcblxuXHQvLyBXZSB1c2UgdGhlIGV4dGVuZGVkIGdyZXlzY2FsZSBwYWxldHRlIGhlcmUsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZlxuXHQvLyBibGFjayBhbmQgd2hpdGUuIG5vcm1hbCBwYWxldHRlIG9ubHkgaGFzIDQgZ3JleXNjYWxlIHNoYWRlcy5cblx0aWYgKHIgPT09IGcgJiYgZyA9PT0gYikge1xuXHRcdGlmIChyIDwgOCkge1xuXHRcdFx0cmV0dXJuIDE2O1xuXHRcdH1cblxuXHRcdGlmIChyID4gMjQ4KSB7XG5cdFx0XHRyZXR1cm4gMjMxO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgociAtIDgpIC8gMjQ3KSAqIDI0KSArIDIzMjtcblx0fVxuXG5cdGNvbnN0IGFuc2kgPSAxNlxuXHRcdCsgKDM2ICogTWF0aC5yb3VuZChyIC8gMjU1ICogNSkpXG5cdFx0KyAoNiAqIE1hdGgucm91bmQoZyAvIDI1NSAqIDUpKVxuXHRcdCsgTWF0aC5yb3VuZChiIC8gMjU1ICogNSk7XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0JDEuYW5zaTE2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdGxldCBjb2xvciA9IGFyZ3MgJSAxMDtcblxuXHQvLyBIYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChjb2xvciA9PT0gMCB8fCBjb2xvciA9PT0gNykge1xuXHRcdGlmIChhcmdzID4gNTApIHtcblx0XHRcdGNvbG9yICs9IDMuNTtcblx0XHR9XG5cblx0XHRjb2xvciA9IGNvbG9yIC8gMTAuNSAqIDI1NTtcblxuXHRcdHJldHVybiBbY29sb3IsIGNvbG9yLCBjb2xvcl07XG5cdH1cblxuXHRjb25zdCBtdWx0ID0gKH5+KGFyZ3MgPiA1MCkgKyAxKSAqIDAuNTtcblx0Y29uc3QgciA9ICgoY29sb3IgJiAxKSAqIG11bHQpICogMjU1O1xuXHRjb25zdCBnID0gKCgoY29sb3IgPj4gMSkgJiAxKSAqIG11bHQpICogMjU1O1xuXHRjb25zdCBiID0gKCgoY29sb3IgPj4gMikgJiAxKSAqIG11bHQpICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0JDEuYW5zaTI1Ni5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBIYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChhcmdzID49IDIzMikge1xuXHRcdGNvbnN0IGMgPSAoYXJncyAtIDIzMikgKiAxMCArIDg7XG5cdFx0cmV0dXJuIFtjLCBjLCBjXTtcblx0fVxuXG5cdGFyZ3MgLT0gMTY7XG5cblx0bGV0IHJlbTtcblx0Y29uc3QgciA9IE1hdGguZmxvb3IoYXJncyAvIDM2KSAvIDUgKiAyNTU7XG5cdGNvbnN0IGcgPSBNYXRoLmZsb29yKChyZW0gPSBhcmdzICUgMzYpIC8gNikgLyA1ICogMjU1O1xuXHRjb25zdCBiID0gKHJlbSAlIDYpIC8gNSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydCQxLnJnYi5oZXggPSBmdW5jdGlvbiAoYXJncykge1xuXHRjb25zdCBpbnRlZ2VyID0gKChNYXRoLnJvdW5kKGFyZ3NbMF0pICYgMHhGRikgPDwgMTYpXG5cdFx0KyAoKE1hdGgucm91bmQoYXJnc1sxXSkgJiAweEZGKSA8PCA4KVxuXHRcdCsgKE1hdGgucm91bmQoYXJnc1syXSkgJiAweEZGKTtcblxuXHRjb25zdCBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydCQxLmhleC5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHRjb25zdCBtYXRjaCA9IGFyZ3MudG9TdHJpbmcoMTYpLm1hdGNoKC9bYS1mMC05XXs2fXxbYS1mMC05XXszfS9pKTtcblx0aWYgKCFtYXRjaCkge1xuXHRcdHJldHVybiBbMCwgMCwgMF07XG5cdH1cblxuXHRsZXQgY29sb3JTdHJpbmcgPSBtYXRjaFswXTtcblxuXHRpZiAobWF0Y2hbMF0ubGVuZ3RoID09PSAzKSB7XG5cdFx0Y29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy5zcGxpdCgnJykubWFwKGNoYXIgPT4ge1xuXHRcdFx0cmV0dXJuIGNoYXIgKyBjaGFyO1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0Y29uc3QgaW50ZWdlciA9IHBhcnNlSW50KGNvbG9yU3RyaW5nLCAxNik7XG5cdGNvbnN0IHIgPSAoaW50ZWdlciA+PiAxNikgJiAweEZGO1xuXHRjb25zdCBnID0gKGludGVnZXIgPj4gOCkgJiAweEZGO1xuXHRjb25zdCBiID0gaW50ZWdlciAmIDB4RkY7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQkMS5yZ2IuaGNnID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCByID0gcmdiWzBdIC8gMjU1O1xuXHRjb25zdCBnID0gcmdiWzFdIC8gMjU1O1xuXHRjb25zdCBiID0gcmdiWzJdIC8gMjU1O1xuXHRjb25zdCBtYXggPSBNYXRoLm1heChNYXRoLm1heChyLCBnKSwgYik7XG5cdGNvbnN0IG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKTtcblx0Y29uc3QgY2hyb21hID0gKG1heCAtIG1pbik7XG5cdGxldCBncmF5c2NhbGU7XG5cdGxldCBodWU7XG5cblx0aWYgKGNocm9tYSA8IDEpIHtcblx0XHRncmF5c2NhbGUgPSBtaW4gLyAoMSAtIGNocm9tYSk7XG5cdH0gZWxzZSB7XG5cdFx0Z3JheXNjYWxlID0gMDtcblx0fVxuXG5cdGlmIChjaHJvbWEgPD0gMCkge1xuXHRcdGh1ZSA9IDA7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSByKSB7XG5cdFx0aHVlID0gKChnIC0gYikgLyBjaHJvbWEpICUgNjtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IGcpIHtcblx0XHRodWUgPSAyICsgKGIgLSByKSAvIGNocm9tYTtcblx0fSBlbHNlIHtcblx0XHRodWUgPSA0ICsgKHIgLSBnKSAvIGNocm9tYTtcblx0fVxuXG5cdGh1ZSAvPSA2O1xuXHRodWUgJT0gMTtcblxuXHRyZXR1cm4gW2h1ZSAqIDM2MCwgY2hyb21hICogMTAwLCBncmF5c2NhbGUgKiAxMDBdO1xufTtcblxuY29udmVydCQxLmhzbC5oY2cgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdGNvbnN0IHMgPSBoc2xbMV0gLyAxMDA7XG5cdGNvbnN0IGwgPSBoc2xbMl0gLyAxMDA7XG5cblx0Y29uc3QgYyA9IGwgPCAwLjUgPyAoMi4wICogcyAqIGwpIDogKDIuMCAqIHMgKiAoMS4wIC0gbCkpO1xuXG5cdGxldCBmID0gMDtcblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKGwgLSAwLjUgKiBjKSAvICgxLjAgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHNsWzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQkMS5oc3YuaGNnID0gZnVuY3Rpb24gKGhzdikge1xuXHRjb25zdCBzID0gaHN2WzFdIC8gMTAwO1xuXHRjb25zdCB2ID0gaHN2WzJdIC8gMTAwO1xuXG5cdGNvbnN0IGMgPSBzICogdjtcblx0bGV0IGYgPSAwO1xuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc3ZbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydCQxLmhjZy5yZ2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdGNvbnN0IGggPSBoY2dbMF0gLyAzNjA7XG5cdGNvbnN0IGMgPSBoY2dbMV0gLyAxMDA7XG5cdGNvbnN0IGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0aWYgKGMgPT09IDAuMCkge1xuXHRcdHJldHVybiBbZyAqIDI1NSwgZyAqIDI1NSwgZyAqIDI1NV07XG5cdH1cblxuXHRjb25zdCBwdXJlID0gWzAsIDAsIDBdO1xuXHRjb25zdCBoaSA9IChoICUgMSkgKiA2O1xuXHRjb25zdCB2ID0gaGkgJSAxO1xuXHRjb25zdCB3ID0gMSAtIHY7XG5cdGxldCBtZyA9IDA7XG5cblx0LyogZXNsaW50LWRpc2FibGUgbWF4LXN0YXRlbWVudHMtcGVyLWxpbmUgKi9cblx0c3dpdGNoIChNYXRoLmZsb29yKGhpKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gdjsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHB1cmVbMF0gPSB3OyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gdzsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHB1cmVbMF0gPSB2OyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSB3O1xuXHR9XG5cdC8qIGVzbGludC1lbmFibGUgbWF4LXN0YXRlbWVudHMtcGVyLWxpbmUgKi9cblxuXHRtZyA9ICgxLjAgLSBjKSAqIGc7XG5cblx0cmV0dXJuIFtcblx0XHQoYyAqIHB1cmVbMF0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzFdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsyXSArIG1nKSAqIDI1NVxuXHRdO1xufTtcblxuY29udmVydCQxLmhjZy5oc3YgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdGNvbnN0IGMgPSBoY2dbMV0gLyAxMDA7XG5cdGNvbnN0IGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0Y29uc3QgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRsZXQgZiA9IDA7XG5cblx0aWYgKHYgPiAwLjApIHtcblx0XHRmID0gYyAvIHY7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgZiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0JDEuaGNnLmhzbCA9IGZ1bmN0aW9uIChoY2cpIHtcblx0Y29uc3QgYyA9IGhjZ1sxXSAvIDEwMDtcblx0Y29uc3QgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHRjb25zdCBsID0gZyAqICgxLjAgLSBjKSArIDAuNSAqIGM7XG5cdGxldCBzID0gMDtcblxuXHRpZiAobCA+IDAuMCAmJiBsIDwgMC41KSB7XG5cdFx0cyA9IGMgLyAoMiAqIGwpO1xuXHR9IGVsc2Vcblx0aWYgKGwgPj0gMC41ICYmIGwgPCAxLjApIHtcblx0XHRzID0gYyAvICgyICogKDEgLSBsKSk7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0JDEuaGNnLmh3YiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0Y29uc3QgYyA9IGhjZ1sxXSAvIDEwMDtcblx0Y29uc3QgZyA9IGhjZ1syXSAvIDEwMDtcblx0Y29uc3QgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRyZXR1cm4gW2hjZ1swXSwgKHYgLSBjKSAqIDEwMCwgKDEgLSB2KSAqIDEwMF07XG59O1xuXG5jb252ZXJ0JDEuaHdiLmhjZyA9IGZ1bmN0aW9uIChod2IpIHtcblx0Y29uc3QgdyA9IGh3YlsxXSAvIDEwMDtcblx0Y29uc3QgYiA9IGh3YlsyXSAvIDEwMDtcblx0Y29uc3QgdiA9IDEgLSBiO1xuXHRjb25zdCBjID0gdiAtIHc7XG5cdGxldCBnID0gMDtcblxuXHRpZiAoYyA8IDEpIHtcblx0XHRnID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2h3YlswXSwgYyAqIDEwMCwgZyAqIDEwMF07XG59O1xuXG5jb252ZXJ0JDEuYXBwbGUucmdiID0gZnVuY3Rpb24gKGFwcGxlKSB7XG5cdHJldHVybiBbKGFwcGxlWzBdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMV0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsyXSAvIDY1NTM1KSAqIDI1NV07XG59O1xuXG5jb252ZXJ0JDEucmdiLmFwcGxlID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gWyhyZ2JbMF0gLyAyNTUpICogNjU1MzUsIChyZ2JbMV0gLyAyNTUpICogNjU1MzUsIChyZ2JbMl0gLyAyNTUpICogNjU1MzVdO1xufTtcblxuY29udmVydCQxLmdyYXkucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIFthcmdzWzBdIC8gMTAwICogMjU1LCBhcmdzWzBdIC8gMTAwICogMjU1LCBhcmdzWzBdIC8gMTAwICogMjU1XTtcbn07XG5cbmNvbnZlcnQkMS5ncmF5LmhzbCA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHJldHVybiBbMCwgMCwgYXJnc1swXV07XG59O1xuXG5jb252ZXJ0JDEuZ3JheS5oc3YgPSBjb252ZXJ0JDEuZ3JheS5oc2w7XG5cbmNvbnZlcnQkMS5ncmF5Lmh3YiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMTAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQkMS5ncmF5LmNteWsgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gWzAsIDAsIDAsIGdyYXlbMF1dO1xufTtcblxuY29udmVydCQxLmdyYXkubGFiID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFtncmF5WzBdLCAwLCAwXTtcbn07XG5cbmNvbnZlcnQkMS5ncmF5LmhleCA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdGNvbnN0IHZhbCA9IE1hdGgucm91bmQoZ3JheVswXSAvIDEwMCAqIDI1NSkgJiAweEZGO1xuXHRjb25zdCBpbnRlZ2VyID0gKHZhbCA8PCAxNikgKyAodmFsIDw8IDgpICsgdmFsO1xuXG5cdGNvbnN0IHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0JDEucmdiLmdyYXkgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHZhbCA9IChyZ2JbMF0gKyByZ2JbMV0gKyByZ2JbMl0pIC8gMztcblx0cmV0dXJuIFt2YWwgLyAyNTUgKiAxMDBdO1xufTtcblxuLypcblx0VGhpcyBmdW5jdGlvbiByb3V0ZXMgYSBtb2RlbCB0byBhbGwgb3RoZXIgbW9kZWxzLlxuXG5cdGFsbCBmdW5jdGlvbnMgdGhhdCBhcmUgcm91dGVkIGhhdmUgYSBwcm9wZXJ0eSBgLmNvbnZlcnNpb25gIGF0dGFjaGVkXG5cdHRvIHRoZSByZXR1cm5lZCBzeW50aGV0aWMgZnVuY3Rpb24uIFRoaXMgcHJvcGVydHkgaXMgYW4gYXJyYXlcblx0b2Ygc3RyaW5ncywgZWFjaCB3aXRoIHRoZSBzdGVwcyBpbiBiZXR3ZWVuIHRoZSAnZnJvbScgYW5kICd0bydcblx0Y29sb3IgbW9kZWxzIChpbmNsdXNpdmUpLlxuXG5cdGNvbnZlcnNpb25zIHRoYXQgYXJlIG5vdCBwb3NzaWJsZSBzaW1wbHkgYXJlIG5vdCBpbmNsdWRlZC5cbiovXG5cbmZ1bmN0aW9uIGJ1aWxkR3JhcGgoKSB7XG5cdGNvbnN0IGdyYXBoID0ge307XG5cdC8vIGh0dHBzOi8vanNwZXJmLmNvbS9vYmplY3Qta2V5cy12cy1mb3ItaW4td2l0aC1jbG9zdXJlLzNcblx0Y29uc3QgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5cdGZvciAobGV0IGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRncmFwaFttb2RlbHNbaV1dID0ge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuXHRcdFx0Ly8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG5cdFx0XHRkaXN0YW5jZTogLTEsXG5cdFx0XHRwYXJlbnQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuZnVuY3Rpb24gZGVyaXZlQkZTKGZyb21Nb2RlbCkge1xuXHRjb25zdCBncmFwaCA9IGJ1aWxkR3JhcGgoKTtcblx0Y29uc3QgcXVldWUgPSBbZnJvbU1vZGVsXTsgLy8gVW5zaGlmdCAtPiBxdWV1ZSAtPiBwb3BcblxuXHRncmFwaFtmcm9tTW9kZWxdLmRpc3RhbmNlID0gMDtcblxuXHR3aGlsZSAocXVldWUubGVuZ3RoKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXHRcdGNvbnN0IGFkamFjZW50cyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zW2N1cnJlbnRdKTtcblxuXHRcdGZvciAobGV0IGxlbiA9IGFkamFjZW50cy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGNvbnN0IGFkamFjZW50ID0gYWRqYWNlbnRzW2ldO1xuXHRcdFx0Y29uc3Qgbm9kZSA9IGdyYXBoW2FkamFjZW50XTtcblxuXHRcdFx0aWYgKG5vZGUuZGlzdGFuY2UgPT09IC0xKSB7XG5cdFx0XHRcdG5vZGUuZGlzdGFuY2UgPSBncmFwaFtjdXJyZW50XS5kaXN0YW5jZSArIDE7XG5cdFx0XHRcdG5vZGUucGFyZW50ID0gY3VycmVudDtcblx0XHRcdFx0cXVldWUudW5zaGlmdChhZGphY2VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBsaW5rKGZyb20sIHRvKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHJldHVybiB0byhmcm9tKGFyZ3MpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpIHtcblx0Y29uc3QgcGF0aCA9IFtncmFwaFt0b01vZGVsXS5wYXJlbnQsIHRvTW9kZWxdO1xuXHRsZXQgZm4gPSBjb252ZXJzaW9uc1tncmFwaFt0b01vZGVsXS5wYXJlbnRdW3RvTW9kZWxdO1xuXG5cdGxldCBjdXIgPSBncmFwaFt0b01vZGVsXS5wYXJlbnQ7XG5cdHdoaWxlIChncmFwaFtjdXJdLnBhcmVudCkge1xuXHRcdHBhdGgudW5zaGlmdChncmFwaFtjdXJdLnBhcmVudCk7XG5cdFx0Zm4gPSBsaW5rKGNvbnZlcnNpb25zW2dyYXBoW2N1cl0ucGFyZW50XVtjdXJdLCBmbik7XG5cdFx0Y3VyID0gZ3JhcGhbY3VyXS5wYXJlbnQ7XG5cdH1cblxuXHRmbi5jb252ZXJzaW9uID0gcGF0aDtcblx0cmV0dXJuIGZuO1xufVxuXG52YXIgcm91dGUgPSBmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdGNvbnN0IGdyYXBoID0gZGVyaXZlQkZTKGZyb21Nb2RlbCk7XG5cdGNvbnN0IGNvbnZlcnNpb24gPSB7fTtcblxuXHRjb25zdCBtb2RlbHMgPSBPYmplY3Qua2V5cyhncmFwaCk7XG5cdGZvciAobGV0IGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRjb25zdCB0b01vZGVsID0gbW9kZWxzW2ldO1xuXHRcdGNvbnN0IG5vZGUgPSBncmFwaFt0b01vZGVsXTtcblxuXHRcdGlmIChub2RlLnBhcmVudCA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gTm8gcG9zc2libGUgY29udmVyc2lvbiwgb3IgdGhpcyBub2RlIGlzIHRoZSBzb3VyY2UgbW9kZWwuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb252ZXJzaW9uW3RvTW9kZWxdID0gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpO1xuXHR9XG5cblx0cmV0dXJuIGNvbnZlcnNpb247XG59O1xuXG5jb25zdCBjb252ZXJ0ID0ge307XG5cbmNvbnN0IG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuZnVuY3Rpb24gd3JhcFJhdyhmbikge1xuXHRjb25zdCB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdGNvbnN0IGFyZzAgPSBhcmdzWzBdO1xuXHRcdGlmIChhcmcwID09PSB1bmRlZmluZWQgfHwgYXJnMCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZzA7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZzAubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IGFyZzA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKGFyZ3MpO1xuXHR9O1xuXG5cdC8vIFByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxuZnVuY3Rpb24gd3JhcFJvdW5kZWQoZm4pIHtcblx0Y29uc3Qgd3JhcHBlZEZuID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRjb25zdCBhcmcwID0gYXJnc1swXTtcblxuXHRcdGlmIChhcmcwID09PSB1bmRlZmluZWQgfHwgYXJnMCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZzA7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZzAubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IGFyZzA7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzdWx0ID0gZm4oYXJncyk7XG5cblx0XHQvLyBXZSdyZSBhc3N1bWluZyB0aGUgcmVzdWx0IGlzIGFuIGFycmF5IGhlcmUuXG5cdFx0Ly8gc2VlIG5vdGljZSBpbiBjb252ZXJzaW9ucy5qczsgZG9uJ3QgdXNlIGJveCB0eXBlc1xuXHRcdC8vIGluIGNvbnZlcnNpb24gZnVuY3Rpb25zLlxuXHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Zm9yIChsZXQgbGVuID0gcmVzdWx0Lmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRyZXN1bHRbaV0gPSBNYXRoLnJvdW5kKHJlc3VsdFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHQvLyBQcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbm1vZGVscy5mb3JFYWNoKGZyb21Nb2RlbCA9PiB7XG5cdGNvbnZlcnRbZnJvbU1vZGVsXSA9IHt9O1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5jaGFubmVsc30pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmxhYmVsc30pO1xuXG5cdGNvbnN0IHJvdXRlcyA9IHJvdXRlKGZyb21Nb2RlbCk7XG5cdGNvbnN0IHJvdXRlTW9kZWxzID0gT2JqZWN0LmtleXMocm91dGVzKTtcblxuXHRyb3V0ZU1vZGVscy5mb3JFYWNoKHRvTW9kZWwgPT4ge1xuXHRcdGNvbnN0IGZuID0gcm91dGVzW3RvTW9kZWxdO1xuXG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdID0gd3JhcFJvdW5kZWQoZm4pO1xuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXS5yYXcgPSB3cmFwUmF3KGZuKTtcblx0fSk7XG59KTtcblxudmFyIGNvbG9yQ29udmVydCA9IGNvbnZlcnQ7XG5cbmNvbnN0IHNraXBwZWRNb2RlbHMgPSBbXG5cdC8vIFRvIGJlIGhvbmVzdCwgSSBkb24ndCByZWFsbHkgZmVlbCBsaWtlIGtleXdvcmQgYmVsb25ncyBpbiBjb2xvciBjb252ZXJ0LCBidXQgZWguXG5cdCdrZXl3b3JkJyxcblxuXHQvLyBHcmF5IGNvbmZsaWN0cyB3aXRoIHNvbWUgbWV0aG9kIG5hbWVzLCBhbmQgaGFzIGl0cyBvd24gbWV0aG9kIGRlZmluZWQuXG5cdCdncmF5JyxcblxuXHQvLyBTaG91bGRuJ3QgcmVhbGx5IGJlIGluIGNvbG9yLWNvbnZlcnQgZWl0aGVyLi4uXG5cdCdoZXgnLFxuXTtcblxuY29uc3QgaGFzaGVkTW9kZWxLZXlzID0ge307XG5mb3IgKGNvbnN0IG1vZGVsIG9mIE9iamVjdC5rZXlzKGNvbG9yQ29udmVydCkpIHtcblx0aGFzaGVkTW9kZWxLZXlzW1suLi5jb2xvckNvbnZlcnRbbW9kZWxdLmxhYmVsc10uc29ydCgpLmpvaW4oJycpXSA9IG1vZGVsO1xufVxuXG5jb25zdCBsaW1pdGVycyA9IHt9O1xuXG5mdW5jdGlvbiBDb2xvcihvYmplY3QsIG1vZGVsKSB7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb2xvcikpIHtcblx0XHRyZXR1cm4gbmV3IENvbG9yKG9iamVjdCwgbW9kZWwpO1xuXHR9XG5cblx0aWYgKG1vZGVsICYmIG1vZGVsIGluIHNraXBwZWRNb2RlbHMpIHtcblx0XHRtb2RlbCA9IG51bGw7XG5cdH1cblxuXHRpZiAobW9kZWwgJiYgIShtb2RlbCBpbiBjb2xvckNvbnZlcnQpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG1vZGVsOiAnICsgbW9kZWwpO1xuXHR9XG5cblx0bGV0IGk7XG5cdGxldCBjaGFubmVscztcblxuXHRpZiAob2JqZWN0ID09IG51bGwpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lcS1udWxsLGVxZXFlcVxuXHRcdHRoaXMubW9kZWwgPSAncmdiJztcblx0XHR0aGlzLmNvbG9yID0gWzAsIDAsIDBdO1xuXHRcdHRoaXMudmFscGhhID0gMTtcblx0fSBlbHNlIGlmIChvYmplY3QgaW5zdGFuY2VvZiBDb2xvcikge1xuXHRcdHRoaXMubW9kZWwgPSBvYmplY3QubW9kZWw7XG5cdFx0dGhpcy5jb2xvciA9IFsuLi5vYmplY3QuY29sb3JdO1xuXHRcdHRoaXMudmFscGhhID0gb2JqZWN0LnZhbHBoYTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnc3RyaW5nJykge1xuXHRcdGNvbnN0IHJlc3VsdCA9IGNvbG9yU3RyaW5nLmdldChvYmplY3QpO1xuXHRcdGlmIChyZXN1bHQgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gc3RyaW5nOiAnICsgb2JqZWN0KTtcblx0XHR9XG5cblx0XHR0aGlzLm1vZGVsID0gcmVzdWx0Lm1vZGVsO1xuXHRcdGNoYW5uZWxzID0gY29sb3JDb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdHRoaXMuY29sb3IgPSByZXN1bHQudmFsdWUuc2xpY2UoMCwgY2hhbm5lbHMpO1xuXHRcdHRoaXMudmFscGhhID0gdHlwZW9mIHJlc3VsdC52YWx1ZVtjaGFubmVsc10gPT09ICdudW1iZXInID8gcmVzdWx0LnZhbHVlW2NoYW5uZWxzXSA6IDE7XG5cdH0gZWxzZSBpZiAob2JqZWN0Lmxlbmd0aCA+IDApIHtcblx0XHR0aGlzLm1vZGVsID0gbW9kZWwgfHwgJ3JnYic7XG5cdFx0Y2hhbm5lbHMgPSBjb2xvckNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0Y29uc3QgbmV3QXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChvYmplY3QsIDAsIGNoYW5uZWxzKTtcblx0XHR0aGlzLmNvbG9yID0gemVyb0FycmF5KG5ld0FycmF5LCBjaGFubmVscyk7XG5cdFx0dGhpcy52YWxwaGEgPSB0eXBlb2Ygb2JqZWN0W2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyBvYmplY3RbY2hhbm5lbHNdIDogMTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnbnVtYmVyJykge1xuXHRcdC8vIFRoaXMgaXMgYWx3YXlzIFJHQiAtIGNhbiBiZSBjb252ZXJ0ZWQgbGF0ZXIgb24uXG5cdFx0dGhpcy5tb2RlbCA9ICdyZ2InO1xuXHRcdHRoaXMuY29sb3IgPSBbXG5cdFx0XHQob2JqZWN0ID4+IDE2KSAmIDB4RkYsXG5cdFx0XHQob2JqZWN0ID4+IDgpICYgMHhGRixcblx0XHRcdG9iamVjdCAmIDB4RkYsXG5cdFx0XTtcblx0XHR0aGlzLnZhbHBoYSA9IDE7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy52YWxwaGEgPSAxO1xuXG5cdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cdFx0aWYgKCdhbHBoYScgaW4gb2JqZWN0KSB7XG5cdFx0XHRrZXlzLnNwbGljZShrZXlzLmluZGV4T2YoJ2FscGhhJyksIDEpO1xuXHRcdFx0dGhpcy52YWxwaGEgPSB0eXBlb2Ygb2JqZWN0LmFscGhhID09PSAnbnVtYmVyJyA/IG9iamVjdC5hbHBoYSA6IDA7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaGFzaGVkS2V5cyA9IGtleXMuc29ydCgpLmpvaW4oJycpO1xuXHRcdGlmICghKGhhc2hlZEtleXMgaW4gaGFzaGVkTW9kZWxLZXlzKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcblx0XHR9XG5cblx0XHR0aGlzLm1vZGVsID0gaGFzaGVkTW9kZWxLZXlzW2hhc2hlZEtleXNdO1xuXG5cdFx0Y29uc3Qge2xhYmVsc30gPSBjb2xvckNvbnZlcnRbdGhpcy5tb2RlbF07XG5cdFx0Y29uc3QgY29sb3IgPSBbXTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgbGFiZWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb2xvci5wdXNoKG9iamVjdFtsYWJlbHNbaV1dKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbG9yID0gemVyb0FycmF5KGNvbG9yKTtcblx0fVxuXG5cdC8vIFBlcmZvcm0gbGltaXRhdGlvbnMgKGNsYW1waW5nLCBldGMuKVxuXHRpZiAobGltaXRlcnNbdGhpcy5tb2RlbF0pIHtcblx0XHRjaGFubmVscyA9IGNvbG9yQ29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHRmb3IgKGkgPSAwOyBpIDwgY2hhbm5lbHM7IGkrKykge1xuXHRcdFx0Y29uc3QgbGltaXQgPSBsaW1pdGVyc1t0aGlzLm1vZGVsXVtpXTtcblx0XHRcdGlmIChsaW1pdCkge1xuXHRcdFx0XHR0aGlzLmNvbG9yW2ldID0gbGltaXQodGhpcy5jb2xvcltpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dGhpcy52YWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB0aGlzLnZhbHBoYSkpO1xuXG5cdGlmIChPYmplY3QuZnJlZXplKSB7XG5cdFx0T2JqZWN0LmZyZWV6ZSh0aGlzKTtcblx0fVxufVxuXG5Db2xvci5wcm90b3R5cGUgPSB7XG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLnN0cmluZygpO1xuXHR9LFxuXG5cdHRvSlNPTigpIHtcblx0XHRyZXR1cm4gdGhpc1t0aGlzLm1vZGVsXSgpO1xuXHR9LFxuXG5cdHN0cmluZyhwbGFjZXMpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXMubW9kZWwgaW4gY29sb3JTdHJpbmcudG8gPyB0aGlzIDogdGhpcy5yZ2IoKTtcblx0XHRzZWxmID0gc2VsZi5yb3VuZCh0eXBlb2YgcGxhY2VzID09PSAnbnVtYmVyJyA/IHBsYWNlcyA6IDEpO1xuXHRcdGNvbnN0IGFyZ3MgPSBzZWxmLnZhbHBoYSA9PT0gMSA/IHNlbGYuY29sb3IgOiBbLi4uc2VsZi5jb2xvciwgdGhpcy52YWxwaGFdO1xuXHRcdHJldHVybiBjb2xvclN0cmluZy50b1tzZWxmLm1vZGVsXShhcmdzKTtcblx0fSxcblxuXHRwZXJjZW50U3RyaW5nKHBsYWNlcykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzLnJnYigpLnJvdW5kKHR5cGVvZiBwbGFjZXMgPT09ICdudW1iZXInID8gcGxhY2VzIDogMSk7XG5cdFx0Y29uc3QgYXJncyA9IHNlbGYudmFscGhhID09PSAxID8gc2VsZi5jb2xvciA6IFsuLi5zZWxmLmNvbG9yLCB0aGlzLnZhbHBoYV07XG5cdFx0cmV0dXJuIGNvbG9yU3RyaW5nLnRvLnJnYi5wZXJjZW50KGFyZ3MpO1xuXHR9LFxuXG5cdGFycmF5KCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHBoYSA9PT0gMSA/IFsuLi50aGlzLmNvbG9yXSA6IFsuLi50aGlzLmNvbG9yLCB0aGlzLnZhbHBoYV07XG5cdH0sXG5cblx0b2JqZWN0KCkge1xuXHRcdGNvbnN0IHJlc3VsdCA9IHt9O1xuXHRcdGNvbnN0IHtjaGFubmVsc30gPSBjb2xvckNvbnZlcnRbdGhpcy5tb2RlbF07XG5cdFx0Y29uc3Qge2xhYmVsc30gPSBjb2xvckNvbnZlcnRbdGhpcy5tb2RlbF07XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNoYW5uZWxzOyBpKyspIHtcblx0XHRcdHJlc3VsdFtsYWJlbHNbaV1dID0gdGhpcy5jb2xvcltpXTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJlc3VsdC5hbHBoYSA9IHRoaXMudmFscGhhO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sXG5cblx0dW5pdEFycmF5KCkge1xuXHRcdGNvbnN0IHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0cmdiWzBdIC89IDI1NTtcblx0XHRyZ2JbMV0gLz0gMjU1O1xuXHRcdHJnYlsyXSAvPSAyNTU7XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJnYi5wdXNoKHRoaXMudmFscGhhKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9LFxuXG5cdHVuaXRPYmplY3QoKSB7XG5cdFx0Y29uc3QgcmdiID0gdGhpcy5yZ2IoKS5vYmplY3QoKTtcblx0XHRyZ2IuciAvPSAyNTU7XG5cdFx0cmdiLmcgLz0gMjU1O1xuXHRcdHJnYi5iIC89IDI1NTtcblxuXHRcdGlmICh0aGlzLnZhbHBoYSAhPT0gMSkge1xuXHRcdFx0cmdiLmFscGhhID0gdGhpcy52YWxwaGE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJnYjtcblx0fSxcblxuXHRyb3VuZChwbGFjZXMpIHtcblx0XHRwbGFjZXMgPSBNYXRoLm1heChwbGFjZXMgfHwgMCwgMCk7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihbLi4udGhpcy5jb2xvci5tYXAocm91bmRUb1BsYWNlKHBsYWNlcykpLCB0aGlzLnZhbHBoYV0sIHRoaXMubW9kZWwpO1xuXHR9LFxuXG5cdGFscGhhKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IoWy4uLnRoaXMuY29sb3IsIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlKSldLCB0aGlzLm1vZGVsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy52YWxwaGE7XG5cdH0sXG5cblx0Ly8gUmdiXG5cdHJlZDogZ2V0c2V0KCdyZ2InLCAwLCBtYXhmbigyNTUpKSxcblx0Z3JlZW46IGdldHNldCgncmdiJywgMSwgbWF4Zm4oMjU1KSksXG5cdGJsdWU6IGdldHNldCgncmdiJywgMiwgbWF4Zm4oMjU1KSksXG5cblx0aHVlOiBnZXRzZXQoWydoc2wnLCAnaHN2JywgJ2hzbCcsICdod2InLCAnaGNnJ10sIDAsIHZhbHVlID0+ICgodmFsdWUgJSAzNjApICsgMzYwKSAlIDM2MCksXG5cblx0c2F0dXJhdGlvbmw6IGdldHNldCgnaHNsJywgMSwgbWF4Zm4oMTAwKSksXG5cdGxpZ2h0bmVzczogZ2V0c2V0KCdoc2wnLCAyLCBtYXhmbigxMDApKSxcblxuXHRzYXR1cmF0aW9udjogZ2V0c2V0KCdoc3YnLCAxLCBtYXhmbigxMDApKSxcblx0dmFsdWU6IGdldHNldCgnaHN2JywgMiwgbWF4Zm4oMTAwKSksXG5cblx0Y2hyb21hOiBnZXRzZXQoJ2hjZycsIDEsIG1heGZuKDEwMCkpLFxuXHRncmF5OiBnZXRzZXQoJ2hjZycsIDIsIG1heGZuKDEwMCkpLFxuXG5cdHdoaXRlOiBnZXRzZXQoJ2h3YicsIDEsIG1heGZuKDEwMCkpLFxuXHR3YmxhY2s6IGdldHNldCgnaHdiJywgMiwgbWF4Zm4oMTAwKSksXG5cblx0Y3lhbjogZ2V0c2V0KCdjbXlrJywgMCwgbWF4Zm4oMTAwKSksXG5cdG1hZ2VudGE6IGdldHNldCgnY215aycsIDEsIG1heGZuKDEwMCkpLFxuXHR5ZWxsb3c6IGdldHNldCgnY215aycsIDIsIG1heGZuKDEwMCkpLFxuXHRibGFjazogZ2V0c2V0KCdjbXlrJywgMywgbWF4Zm4oMTAwKSksXG5cblx0eDogZ2V0c2V0KCd4eXonLCAwLCBtYXhmbig5NS4wNDcpKSxcblx0eTogZ2V0c2V0KCd4eXonLCAxLCBtYXhmbigxMDApKSxcblx0ejogZ2V0c2V0KCd4eXonLCAyLCBtYXhmbigxMDguODMzKSksXG5cblx0bDogZ2V0c2V0KCdsYWInLCAwLCBtYXhmbigxMDApKSxcblx0YTogZ2V0c2V0KCdsYWInLCAxKSxcblx0YjogZ2V0c2V0KCdsYWInLCAyKSxcblxuXHRrZXl3b3JkKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2xvckNvbnZlcnRbdGhpcy5tb2RlbF0ua2V5d29yZCh0aGlzLmNvbG9yKTtcblx0fSxcblxuXHRoZXgodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbG9yU3RyaW5nLnRvLmhleCh0aGlzLnJnYigpLnJvdW5kKCkuY29sb3IpO1xuXHR9LFxuXG5cdGhleGEodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmdiQXJyYXkgPSB0aGlzLnJnYigpLnJvdW5kKCkuY29sb3I7XG5cblx0XHRsZXQgYWxwaGFIZXggPSBNYXRoLnJvdW5kKHRoaXMudmFscGhhICogMjU1KS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0XHRpZiAoYWxwaGFIZXgubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRhbHBoYUhleCA9ICcwJyArIGFscGhhSGV4O1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2xvclN0cmluZy50by5oZXgocmdiQXJyYXkpICsgYWxwaGFIZXg7XG5cdH0sXG5cblx0cmdiTnVtYmVyKCkge1xuXHRcdGNvbnN0IHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0cmV0dXJuICgocmdiWzBdICYgMHhGRikgPDwgMTYpIHwgKChyZ2JbMV0gJiAweEZGKSA8PCA4KSB8IChyZ2JbMl0gJiAweEZGKTtcblx0fSxcblxuXHRsdW1pbm9zaXR5KCkge1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jcmVsYXRpdmVsdW1pbmFuY2VkZWZcblx0XHRjb25zdCByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXG5cdFx0Y29uc3QgbHVtID0gW107XG5cdFx0Zm9yIChjb25zdCBbaSwgZWxlbWVudF0gb2YgcmdiLmVudHJpZXMoKSkge1xuXHRcdFx0Y29uc3QgY2hhbiA9IGVsZW1lbnQgLyAyNTU7XG5cdFx0XHRsdW1baV0gPSAoY2hhbiA8PSAwLjA0MDQ1KSA/IGNoYW4gLyAxMi45MiA6ICgoY2hhbiArIDAuMDU1KSAvIDEuMDU1KSAqKiAyLjQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDAuMjEyNiAqIGx1bVswXSArIDAuNzE1MiAqIGx1bVsxXSArIDAuMDcyMiAqIGx1bVsyXTtcblx0fSxcblxuXHRjb250cmFzdChjb2xvcjIpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI2NvbnRyYXN0LXJhdGlvZGVmXG5cdFx0Y29uc3QgbHVtMSA9IHRoaXMubHVtaW5vc2l0eSgpO1xuXHRcdGNvbnN0IGx1bTIgPSBjb2xvcjIubHVtaW5vc2l0eSgpO1xuXG5cdFx0aWYgKGx1bTEgPiBsdW0yKSB7XG5cdFx0XHRyZXR1cm4gKGx1bTEgKyAwLjA1KSAvIChsdW0yICsgMC4wNSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChsdW0yICsgMC4wNSkgLyAobHVtMSArIDAuMDUpO1xuXHR9LFxuXG5cdGxldmVsKGNvbG9yMikge1xuXHRcdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9XQ0FHLyNjb250cmFzdC1lbmhhbmNlZFxuXHRcdGNvbnN0IGNvbnRyYXN0UmF0aW8gPSB0aGlzLmNvbnRyYXN0KGNvbG9yMik7XG5cdFx0aWYgKGNvbnRyYXN0UmF0aW8gPj0gNykge1xuXHRcdFx0cmV0dXJuICdBQUEnO1xuXHRcdH1cblxuXHRcdHJldHVybiAoY29udHJhc3RSYXRpbyA+PSA0LjUpID8gJ0FBJyA6ICcnO1xuXHR9LFxuXG5cdGlzRGFyaygpIHtcblx0XHQvLyBZSVEgZXF1YXRpb24gZnJvbSBodHRwOi8vMjR3YXlzLm9yZy8yMDEwL2NhbGN1bGF0aW5nLWNvbG9yLWNvbnRyYXN0XG5cdFx0Y29uc3QgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHRjb25zdCB5aXEgPSAocmdiWzBdICogMjEyNiArIHJnYlsxXSAqIDcxNTIgKyByZ2JbMl0gKiA3MjIpIC8gMTAwMDA7XG5cdFx0cmV0dXJuIHlpcSA8IDEyODtcblx0fSxcblxuXHRpc0xpZ2h0KCkge1xuXHRcdHJldHVybiAhdGhpcy5pc0RhcmsoKTtcblx0fSxcblxuXHRuZWdhdGUoKSB7XG5cdFx0Y29uc3QgcmdiID0gdGhpcy5yZ2IoKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiLmNvbG9yW2ldID0gMjU1IC0gcmdiLmNvbG9yW2ldO1xuXHRcdH1cblxuXHRcdHJldHVybiByZ2I7XG5cdH0sXG5cblx0bGlnaHRlbihyYXRpbykge1xuXHRcdGNvbnN0IGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzJdICs9IGhzbC5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0ZGFya2VuKHJhdGlvKSB7XG5cdFx0Y29uc3QgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMl0gLT0gaHNsLmNvbG9yWzJdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRzYXR1cmF0ZShyYXRpbykge1xuXHRcdGNvbnN0IGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzFdICs9IGhzbC5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0ZGVzYXR1cmF0ZShyYXRpbykge1xuXHRcdGNvbnN0IGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzFdIC09IGhzbC5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0d2hpdGVuKHJhdGlvKSB7XG5cdFx0Y29uc3QgaHdiID0gdGhpcy5od2IoKTtcblx0XHRod2IuY29sb3JbMV0gKz0gaHdiLmNvbG9yWzFdICogcmF0aW87XG5cdFx0cmV0dXJuIGh3Yjtcblx0fSxcblxuXHRibGFja2VuKHJhdGlvKSB7XG5cdFx0Y29uc3QgaHdiID0gdGhpcy5od2IoKTtcblx0XHRod2IuY29sb3JbMl0gKz0gaHdiLmNvbG9yWzJdICogcmF0aW87XG5cdFx0cmV0dXJuIGh3Yjtcblx0fSxcblxuXHRncmF5c2NhbGUoKSB7XG5cdFx0Ly8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HcmF5c2NhbGUjQ29udmVydGluZ19jb2xvcl90b19ncmF5c2NhbGVcblx0XHRjb25zdCByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdGNvbnN0IHZhbHVlID0gcmdiWzBdICogMC4zICsgcmdiWzFdICogMC41OSArIHJnYlsyXSAqIDAuMTE7XG5cdFx0cmV0dXJuIENvbG9yLnJnYih2YWx1ZSwgdmFsdWUsIHZhbHVlKTtcblx0fSxcblxuXHRmYWRlKHJhdGlvKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWxwaGEodGhpcy52YWxwaGEgLSAodGhpcy52YWxwaGEgKiByYXRpbykpO1xuXHR9LFxuXG5cdG9wYXF1ZXIocmF0aW8pIHtcblx0XHRyZXR1cm4gdGhpcy5hbHBoYSh0aGlzLnZhbHBoYSArICh0aGlzLnZhbHBoYSAqIHJhdGlvKSk7XG5cdH0sXG5cblx0cm90YXRlKGRlZ3JlZXMpIHtcblx0XHRjb25zdCBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGxldCBodWUgPSBoc2wuY29sb3JbMF07XG5cdFx0aHVlID0gKGh1ZSArIGRlZ3JlZXMpICUgMzYwO1xuXHRcdGh1ZSA9IGh1ZSA8IDAgPyAzNjAgKyBodWUgOiBodWU7XG5cdFx0aHNsLmNvbG9yWzBdID0gaHVlO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0bWl4KG1peGluQ29sb3IsIHdlaWdodCkge1xuXHRcdC8vIFBvcnRlZCBmcm9tIHNhc3MgaW1wbGVtZW50YXRpb24gaW4gQ1xuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL2xpYnNhc3MvYmxvYi8wZTZiNGEyODUwMDkyMzU2YWEzZWNlMDdjNmIyNDlmMDIyMWNhY2VkL2Z1bmN0aW9ucy5jcHAjTDIwOVxuXHRcdGlmICghbWl4aW5Db2xvciB8fCAhbWl4aW5Db2xvci5yZ2IpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignQXJndW1lbnQgdG8gXCJtaXhcIiB3YXMgbm90IGEgQ29sb3IgaW5zdGFuY2UsIGJ1dCByYXRoZXIgYW4gaW5zdGFuY2Ugb2YgJyArIHR5cGVvZiBtaXhpbkNvbG9yKTtcblx0XHR9XG5cblx0XHRjb25zdCBjb2xvcjEgPSBtaXhpbkNvbG9yLnJnYigpO1xuXHRcdGNvbnN0IGNvbG9yMiA9IHRoaXMucmdiKCk7XG5cdFx0Y29uc3QgcCA9IHdlaWdodCA9PT0gdW5kZWZpbmVkID8gMC41IDogd2VpZ2h0O1xuXG5cdFx0Y29uc3QgdyA9IDIgKiBwIC0gMTtcblx0XHRjb25zdCBhID0gY29sb3IxLmFscGhhKCkgLSBjb2xvcjIuYWxwaGEoKTtcblxuXHRcdGNvbnN0IHcxID0gKCgodyAqIGEgPT09IC0xKSA/IHcgOiAodyArIGEpIC8gKDEgKyB3ICogYSkpICsgMSkgLyAyO1xuXHRcdGNvbnN0IHcyID0gMSAtIHcxO1xuXG5cdFx0cmV0dXJuIENvbG9yLnJnYihcblx0XHRcdHcxICogY29sb3IxLnJlZCgpICsgdzIgKiBjb2xvcjIucmVkKCksXG5cdFx0XHR3MSAqIGNvbG9yMS5ncmVlbigpICsgdzIgKiBjb2xvcjIuZ3JlZW4oKSxcblx0XHRcdHcxICogY29sb3IxLmJsdWUoKSArIHcyICogY29sb3IyLmJsdWUoKSxcblx0XHRcdGNvbG9yMS5hbHBoYSgpICogcCArIGNvbG9yMi5hbHBoYSgpICogKDEgLSBwKSk7XG5cdH0sXG59O1xuXG4vLyBNb2RlbCBjb252ZXJzaW9uIG1ldGhvZHMgYW5kIHN0YXRpYyBjb25zdHJ1Y3RvcnNcbmZvciAoY29uc3QgbW9kZWwgb2YgT2JqZWN0LmtleXMoY29sb3JDb252ZXJ0KSkge1xuXHRpZiAoc2tpcHBlZE1vZGVscy5pbmNsdWRlcyhtb2RlbCkpIHtcblx0XHRjb250aW51ZTtcblx0fVxuXG5cdGNvbnN0IHtjaGFubmVsc30gPSBjb2xvckNvbnZlcnRbbW9kZWxdO1xuXG5cdC8vIENvbnZlcnNpb24gbWV0aG9kc1xuXHRDb2xvci5wcm90b3R5cGVbbW9kZWxdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRpZiAodGhpcy5tb2RlbCA9PT0gbW9kZWwpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodGhpcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcihhcmdzLCBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDb2xvcihbLi4uYXNzZXJ0QXJyYXkoY29sb3JDb252ZXJ0W3RoaXMubW9kZWxdW21vZGVsXS5yYXcodGhpcy5jb2xvcikpLCB0aGlzLnZhbHBoYV0sIG1vZGVsKTtcblx0fTtcblxuXHQvLyAnc3RhdGljJyBjb25zdHJ1Y3Rpb24gbWV0aG9kc1xuXHRDb2xvclttb2RlbF0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdGxldCBjb2xvciA9IGFyZ3NbMF07XG5cdFx0aWYgKHR5cGVvZiBjb2xvciA9PT0gJ251bWJlcicpIHtcblx0XHRcdGNvbG9yID0gemVyb0FycmF5KGFyZ3MsIGNoYW5uZWxzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IENvbG9yKGNvbG9yLCBtb2RlbCk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHJvdW5kVG8obnVtYmVyLCBwbGFjZXMpIHtcblx0cmV0dXJuIE51bWJlcihudW1iZXIudG9GaXhlZChwbGFjZXMpKTtcbn1cblxuZnVuY3Rpb24gcm91bmRUb1BsYWNlKHBsYWNlcykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKG51bWJlcikge1xuXHRcdHJldHVybiByb3VuZFRvKG51bWJlciwgcGxhY2VzKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0c2V0KG1vZGVsLCBjaGFubmVsLCBtb2RpZmllcikge1xuXHRtb2RlbCA9IEFycmF5LmlzQXJyYXkobW9kZWwpID8gbW9kZWwgOiBbbW9kZWxdO1xuXG5cdGZvciAoY29uc3QgbSBvZiBtb2RlbCkge1xuXHRcdChsaW1pdGVyc1ttXSB8fCAobGltaXRlcnNbbV0gPSBbXSkpW2NoYW5uZWxdID0gbW9kaWZpZXI7XG5cdH1cblxuXHRtb2RlbCA9IG1vZGVsWzBdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRsZXQgcmVzdWx0O1xuXG5cdFx0aWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGlmIChtb2RpZmllcikge1xuXHRcdFx0XHR2YWx1ZSA9IG1vZGlmaWVyKHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0cmVzdWx0ID0gdGhpc1ttb2RlbF0oKTtcblx0XHRcdHJlc3VsdC5jb2xvcltjaGFubmVsXSA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRyZXN1bHQgPSB0aGlzW21vZGVsXSgpLmNvbG9yW2NoYW5uZWxdO1xuXHRcdGlmIChtb2RpZmllcikge1xuXHRcdFx0cmVzdWx0ID0gbW9kaWZpZXIocmVzdWx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xufVxuXG5mdW5jdGlvbiBtYXhmbihtYXgpIHtcblx0cmV0dXJuIGZ1bmN0aW9uICh2KSB7XG5cdFx0cmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKG1heCwgdikpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBhc3NlcnRBcnJheSh2YWx1ZSkge1xuXHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG59XG5cbmZ1bmN0aW9uIHplcm9BcnJheShhcnJheSwgbGVuZ3RoKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodHlwZW9mIGFycmF5W2ldICE9PSAnbnVtYmVyJykge1xuXHRcdFx0YXJyYXlbaV0gPSAwO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBhcnJheTtcbn1cblxudmFyIGNvbG9yID0gQ29sb3I7XG5cbmNvbnN0IENTUyQyID0ge1xuICBjaGFubmVsOiBcImNoYW5uZWxcIixcbiAgY2hhbm5lbHM6IFwiY2hhbm5lbHNcIixcbiAgY29sb3JGaWVsZDogXCJjb2xvci1maWVsZFwiLFxuICBjb2xvckZpZWxkU2NvcGU6IFwic2NvcGUtLWNvbG9yLWZpZWxkXCIsXG4gIGNvbG9yTW9kZTogXCJjb2xvci1tb2RlXCIsXG4gIGNvbG9yTW9kZUNvbnRhaW5lcjogXCJjb2xvci1tb2RlLWNvbnRhaW5lclwiLFxuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGNvbnRyb2w6IFwiY29udHJvbFwiLFxuICBjb250cm9sQW5kU2NvcGU6IFwiY29udHJvbC1hbmQtc2NvcGVcIixcbiAgY29udHJvbFNlY3Rpb246IFwiY29udHJvbC1zZWN0aW9uXCIsXG4gIGRlbGV0ZUNvbG9yOiBcImRlbGV0ZS1jb2xvclwiLFxuICBoZWFkZXI6IFwiaGVhZGVyXCIsXG4gIGhleEFuZENoYW5uZWxzR3JvdXA6IFwiaGV4LWFuZC1jaGFubmVscy1ncm91cFwiLFxuICBoZXhPcHRpb25zOiBcImNvbG9yLWhleC1vcHRpb25zXCIsXG4gIGh1ZVNjb3BlOiBcInNjb3BlLS1odWVcIixcbiAgaHVlU2xpZGVyOiBcImh1ZS1zbGlkZXJcIixcbiAgb3BhY2l0eVNjb3BlOiBcInNjb3BlLS1vcGFjaXR5XCIsXG4gIG9wYWNpdHlTbGlkZXI6IFwib3BhY2l0eS1zbGlkZXJcIixcbiAgcHJldmlldzogXCJwcmV2aWV3XCIsXG4gIHByZXZpZXdBbmRTbGlkZXJzOiBcInByZXZpZXctYW5kLXNsaWRlcnNcIixcbiAgc2F2ZUNvbG9yOiBcInNhdmUtY29sb3JcIixcbiAgc2F2ZWRDb2xvcjogXCJzYXZlZC1jb2xvclwiLFxuICBzYXZlZENvbG9yczogXCJzYXZlZC1jb2xvcnNcIixcbiAgc2F2ZWRDb2xvcnNCdXR0b25zOiBcInNhdmVkLWNvbG9ycy1idXR0b25zXCIsXG4gIHNhdmVkQ29sb3JzU2VjdGlvbjogXCJzYXZlZC1jb2xvcnMtc2VjdGlvblwiLFxuICBzY29wZTogXCJzY29wZVwiLFxuICBzZWN0aW9uOiBcInNlY3Rpb25cIixcbiAgc2xpZGVyOiBcInNsaWRlclwiLFxuICBzbGlkZXJzOiBcInNsaWRlcnNcIixcbiAgc3BsaXRTZWN0aW9uOiBcInNlY3Rpb24tLXNwbGl0XCJcbn07XG5jb25zdCBERUZBVUxUX0NPTE9SJDEgPSBjb2xvcihcIiMwMDdBQzJcIik7XG5jb25zdCBERUZBVUxUX1NUT1JBR0VfS0VZX1BSRUZJWCA9IFwiY2FsY2l0ZS1jb2xvci1cIjtcbmNvbnN0IFJHQl9MSU1JVFMgPSB7XG4gIHI6IDI1NSxcbiAgZzogMjU1LFxuICBiOiAyNTVcbn07XG5jb25zdCBIU1ZfTElNSVRTID0ge1xuICBoOiAzNjAsXG4gIHM6IDEwMCxcbiAgdjogMTAwXG59O1xuY29uc3QgT1BBQ0lUWV9MSU1JVFMgPSB7XG4gIG1pbjogMCxcbiAgbWF4OiAxMDBcbn07XG5jb25zdCBESU1FTlNJT05TID0ge1xuICBzOiB7XG4gICAgc2xpZGVyOiB7XG4gICAgICBoZWlnaHQ6IDEyLFxuICAgICAgd2lkdGg6IDEwNFxuICAgIH0sXG4gICAgY29sb3JGaWVsZDoge1xuICAgICAgaGVpZ2h0OiA4MCxcbiAgICAgIHdpZHRoOiAxNjBcbiAgICB9LFxuICAgIHRodW1iOiB7XG4gICAgICByYWRpdXM6IDEwXG4gICAgfVxuICB9LFxuICBtOiB7XG4gICAgc2xpZGVyOiB7XG4gICAgICBoZWlnaHQ6IDEyLFxuICAgICAgd2lkdGg6IDIwNFxuICAgIH0sXG4gICAgY29sb3JGaWVsZDoge1xuICAgICAgaGVpZ2h0OiAxNTAsXG4gICAgICB3aWR0aDogMjcyXG4gICAgfSxcbiAgICB0aHVtYjoge1xuICAgICAgcmFkaXVzOiAxMFxuICAgIH1cbiAgfSxcbiAgbDoge1xuICAgIHNsaWRlcjoge1xuICAgICAgaGVpZ2h0OiAxMixcbiAgICAgIHdpZHRoOiAzODRcbiAgICB9LFxuICAgIGNvbG9yRmllbGQ6IHtcbiAgICAgIGhlaWdodDogMjAwLFxuICAgICAgd2lkdGg6IDQ2NFxuICAgIH0sXG4gICAgdGh1bWI6IHtcbiAgICAgIHJhZGl1czogMTBcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNvbG9yUGlja2VyQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QoW3NjYWxlPXNdKXstLWNhbGNpdGUtY29sb3ItcGlja2VyLXNwYWNpbmc6OHB4fTpob3N0KFtzY2FsZT1zXSkgLmNvbnRhaW5lcntpbmxpbmUtc2l6ZToxNjBweH06aG9zdChbc2NhbGU9c10pIC5zYXZlZC1jb2xvcnN7Z2FwOjAuMjVyZW07Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdChhdXRvLWZpbGwsIDIwcHgpfTpob3N0KFtzY2FsZT1tXSl7LS1jYWxjaXRlLWNvbG9yLXBpY2tlci1zcGFjaW5nOjEycHh9Omhvc3QoW3NjYWxlPW1dKSAuY29udGFpbmVye2lubGluZS1zaXplOjI3MnB4fTpob3N0KFtzY2FsZT1sXSl7LS1jYWxjaXRlLWNvbG9yLXBpY2tlci1zcGFjaW5nOjE2cHg7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1sXSkgLmNvbnRhaW5lcntpbmxpbmUtc2l6ZTo0NjRweH06aG9zdChbc2NhbGU9bF0pIC5zZWN0aW9uOmZpcnN0LW9mLXR5cGV7cGFkZGluZy1ibG9jay1zdGFydDp2YXIoLS1jYWxjaXRlLWNvbG9yLXBpY2tlci1zcGFjaW5nKX06aG9zdChbc2NhbGU9bF0pIC5zYXZlZC1jb2xvcnN7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdChhdXRvLWZpbGwsIDMycHgpfTpob3N0KFtzY2FsZT1sXSkgLmNvbnRyb2wtc2VjdGlvbntmbGV4LXdyYXA6bm93cmFwO2FsaWduLWl0ZW1zOmJhc2VsaW5lO2ZsZXgtd3JhcDp3cmFwfTpob3N0KFtzY2FsZT1sXSkgLmNvbG9yLWhleC1vcHRpb25ze2Rpc3BsYXk6ZmxleDtmbGV4LXNocmluazoxO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kfTpob3N0KFtzY2FsZT1sXSkgLmNvbG9yLW1vZGUtY29udGFpbmVye2ZsZXgtc2hyaW5rOjN9LmNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXI6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpfS5jb250cm9sLWFuZC1zY29wZXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7dG91Y2gtYWN0aW9uOm5vbmV9LnNjb3Ble3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCk7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fS5zY29wZTpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKTtvdXRsaW5lLW9mZnNldDoxNnB4fS5oZXgtYW5kLWNoYW5uZWxzLWdyb3Vwe2lubGluZS1zaXplOjEwMCV9LmhleC1hbmQtY2hhbm5lbHMtZ3JvdXAsLmNvbnRyb2wtc2VjdGlvbntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtd3JhcDp3cmFwfS5zZWN0aW9ue3BhZGRpbmctYmxvY2s6MCB2YXIoLS1jYWxjaXRlLWNvbG9yLXBpY2tlci1zcGFjaW5nKTtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLWNvbG9yLXBpY2tlci1zcGFjaW5nKX0uc2VjdGlvbjpmaXJzdC1vZi10eXBle3BhZGRpbmctYmxvY2stc3RhcnQ6dmFyKC0tY2FsY2l0ZS1jb2xvci1waWNrZXItc3BhY2luZyl9LnNsaWRlcnN7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjttYXJnaW4taW5saW5lLXN0YXJ0OnZhcigtLWNhbGNpdGUtY29sb3ItcGlja2VyLXNwYWNpbmcpfS5wcmV2aWV3LWFuZC1zbGlkZXJze2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzp2YXIoLS1jYWxjaXRlLWNvbG9yLXBpY2tlci1zcGFjaW5nKX0uY29sb3ItaGV4LW9wdGlvbnMsLnNlY3Rpb24tLXNwbGl0e2ZsZXgtZ3JvdzoxfS5oZWFkZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmNvbG9yLW1vZGUtY29udGFpbmVye3BhZGRpbmctYmxvY2stc3RhcnQ6dmFyKC0tY2FsY2l0ZS1jb2xvci1waWNrZXItc3BhY2luZyl9LmNoYW5uZWxze2Rpc3BsYXk6ZmxleDtyb3ctZ2FwOjAuMTI1cmVtfS5jaGFubmVsW2RhdGEtY2hhbm5lbC1pbmRleD1cXFwiM1xcXCJde2lubGluZS1zaXplOjE1OXB4fTpob3N0KFtzY2FsZT1zXSkgLmNoYW5uZWxze2ZsZXgtd3JhcDp3cmFwfTpob3N0KFtzY2FsZT1zXSkgLmNoYW5uZWx7ZmxleC1iYXNpczozMCU7ZmxleC1ncm93OjF9Omhvc3QoW3NjYWxlPXNdKSAuY2hhbm5lbFtkYXRhLWNoYW5uZWwtaW5kZXg9XFxcIjNcXFwiXXtpbmxpbmUtc2l6ZTp1bnNldDttYXJnaW4taW5saW5lLXN0YXJ0OnVuc2V0fTpob3N0KFtzY2FsZT1sXSkgLmNoYW5uZWxbZGF0YS1jaGFubmVsLWluZGV4PVxcXCIzXFxcIl17aW5saW5lLXNpemU6MTMxcHh9LnNhdmVkLWNvbG9yc3tkaXNwbGF5OmdyaWQ7Z2FwOjAuNXJlbTtwYWRkaW5nLWJsb2NrLXN0YXJ0OnZhcigtLWNhbGNpdGUtY29sb3ItcGlja2VyLXNwYWNpbmcpO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maWxsLCAyNHB4KX0uc2F2ZWQtY29sb3JzLWJ1dHRvbnN7ZGlzcGxheTpmbGV4fS5zYXZlZC1jb2xvcntvdXRsaW5lLW9mZnNldDowO291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXJ9LnNhdmVkLWNvbG9yOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpO291dGxpbmUtb2Zmc2V0OjJweH0uc2F2ZWQtY29sb3I6aG92ZXJ7dHJhbnNpdGlvbjpvdXRsaW5lLWNvbG9yIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0KSBlYXNlLWluLW91dDtvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0yKTtvdXRsaW5lLW9mZnNldDoycHh9XCI7XG5cbmNvbnN0IHRocm90dGxlRm9yNjBGcHNJbk1zID0gMTY7XG5jb25zdCBDb2xvclBpY2tlciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlQ29sb3JQaWNrZXJDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVDb2xvclBpY2tlckNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVDb2xvclBpY2tlcklucHV0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlQ29sb3JQaWNrZXJJbnB1dFwiLCA2KTtcbiAgICB0aGlzLmludGVybmFsQ29sb3JVcGRhdGVDb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLm1vZGUgPSBDU1NDb2xvck1vZGUuSEVYO1xuICAgIHRoaXMuc2hpZnRLZXlDaGFubmVsQWRqdXN0bWVudCA9IDA7XG4gICAgdGhpcy5oYW5kbGVUYWJBY3RpdmF0ZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5jaGFubmVsTW9kZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xvci1tb2RlXCIpO1xuICAgICAgdGhpcy51cGRhdGVDaGFubmVsc0Zyb21Db2xvcih0aGlzLmNvbG9yKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ29sb3JGaWVsZFNjb3BlS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgICAgY29uc3QgYXJyb3dLZXlUb1hZT2Zmc2V0ID0ge1xuICAgICAgICBBcnJvd1VwOiB7IHg6IDAsIHk6IC0xMCB9LFxuICAgICAgICBBcnJvd1JpZ2h0OiB7IHg6IDEwLCB5OiAwIH0sXG4gICAgICAgIEFycm93RG93bjogeyB4OiAwLCB5OiAxMCB9LFxuICAgICAgICBBcnJvd0xlZnQ6IHsgeDogLTEwLCB5OiAwIH1cbiAgICAgIH07XG4gICAgICBpZiAoYXJyb3dLZXlUb1hZT2Zmc2V0W2tleV0pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zY29wZU9yaWVudGF0aW9uID0ga2V5ID09PSBcIkFycm93RG93blwiIHx8IGtleSA9PT0gXCJBcnJvd1VwXCIgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcbiAgICAgICAgdGhpcy5jYXB0dXJlQ29sb3JGaWVsZENvbG9yKHRoaXMuY29sb3JGaWVsZFNjb3BlTGVmdCArIGFycm93S2V5VG9YWU9mZnNldFtrZXldLnggfHwgMCwgdGhpcy5jb2xvckZpZWxkU2NvcGVUb3AgKyBhcnJvd0tleVRvWFlPZmZzZXRba2V5XS55IHx8IDAsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlSHVlU2NvcGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBtb2RpZmllciA9IGV2ZW50LnNoaWZ0S2V5ID8gMTAgOiAxO1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgICAgY29uc3QgYXJyb3dLZXlUb1hPZmZzZXQgPSB7XG4gICAgICAgIEFycm93VXA6IDEsXG4gICAgICAgIEFycm93UmlnaHQ6IDEsXG4gICAgICAgIEFycm93RG93bjogLTEsXG4gICAgICAgIEFycm93TGVmdDogLTFcbiAgICAgIH07XG4gICAgICBpZiAoYXJyb3dLZXlUb1hPZmZzZXRba2V5XSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBkZWx0YSA9IGFycm93S2V5VG9YT2Zmc2V0W2tleV0gKiBtb2RpZmllcjtcbiAgICAgICAgY29uc3QgaHVlID0gdGhpcy5iYXNlQ29sb3JGaWVsZENvbG9yLmh1ZSgpO1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuYmFzZUNvbG9yRmllbGRDb2xvci5odWUoaHVlICsgZGVsdGEpO1xuICAgICAgICB0aGlzLmludGVybmFsQ29sb3JTZXQoY29sb3IsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlSGV4SW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgeyBhbGxvd0VtcHR5LCBjb2xvcjogY29sb3IkMSB9ID0gdGhpcztcbiAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgY29uc3QgaGV4ID0gaW5wdXQudmFsdWU7XG4gICAgICBpZiAoYWxsb3dFbXB0eSAmJiAhaGV4KSB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxDb2xvclNldChudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgbm9ybWFsaXplZEhleCA9IGNvbG9yJDEgJiYgbm9ybWFsaXplSGV4KGhleGlmeShjb2xvciQxLCBhbHBoYUNvbXBhdGlibGUodGhpcy5tb2RlKSkpO1xuICAgICAgaWYgKGhleCAhPT0gbm9ybWFsaXplZEhleCkge1xuICAgICAgICB0aGlzLmludGVybmFsQ29sb3JTZXQoY29sb3IoaGV4KSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVNhdmVkQ29sb3JTZWxlY3QgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHN3YXRjaCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICB0aGlzLmludGVybmFsQ29sb3JTZXQoY29sb3Ioc3dhdGNoLmNvbG9yKSk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5uZWxJbnB1dCA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgY2hhbm5lbEluZGV4ID0gTnVtYmVyKGlucHV0LmdldEF0dHJpYnV0ZShcImRhdGEtY2hhbm5lbC1pbmRleFwiKSk7XG4gICAgICBjb25zdCBpc0FscGhhQ2hhbm5lbCA9IGNoYW5uZWxJbmRleCA9PT0gMztcbiAgICAgIGNvbnN0IGxpbWl0ID0gaXNBbHBoYUNoYW5uZWxcbiAgICAgICAgPyBPUEFDSVRZX0xJTUlUUy5tYXhcbiAgICAgICAgOiB0aGlzLmNoYW5uZWxNb2RlID09PSBcInJnYlwiXG4gICAgICAgICAgPyBSR0JfTElNSVRTW09iamVjdC5rZXlzKFJHQl9MSU1JVFMpW2NoYW5uZWxJbmRleF1dXG4gICAgICAgICAgOiBIU1ZfTElNSVRTW09iamVjdC5rZXlzKEhTVl9MSU1JVFMpW2NoYW5uZWxJbmRleF1dO1xuICAgICAgbGV0IGlucHV0VmFsdWU7XG4gICAgICBpZiAodGhpcy5hbGxvd0VtcHR5ICYmICFpbnB1dC52YWx1ZSkge1xuICAgICAgICBpbnB1dFZhbHVlID0gXCJcIjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihpbnB1dC52YWx1ZSk7XG4gICAgICAgIGNvbnN0IGFkanVzdGVkVmFsdWUgPSB2YWx1ZSArIHRoaXMuc2hpZnRLZXlDaGFubmVsQWRqdXN0bWVudDtcbiAgICAgICAgY29uc3QgY2xhbXBlZCA9IGNsYW1wKGFkanVzdGVkVmFsdWUsIDAsIGxpbWl0KTtcbiAgICAgICAgaW5wdXRWYWx1ZSA9IGNsYW1wZWQudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIGlucHV0LnZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICAgIC8vIFRPRE86IHJlZmFjdG9yIGNhbGNpdGUtaW5wdXQgc28gd2UgZG9uJ3QgbmVlZCB0byBzeW5jIHRoZSBpbnRlcm5hbHNcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9pc3N1ZXMvNjEwMFxuICAgICAgaW5wdXQuaW50ZXJuYWxTeW5jQ2hpbGRFbFZhbHVlKCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5uZWxDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IGNoYW5uZWxJbmRleCA9IE51bWJlcihpbnB1dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNoYW5uZWwtaW5kZXhcIikpO1xuICAgICAgY29uc3QgY2hhbm5lbHMgPSBbLi4udGhpcy5jaGFubmVsc107XG4gICAgICBjb25zdCBzaG91bGRDbGVhckNoYW5uZWxzID0gdGhpcy5hbGxvd0VtcHR5ICYmICFpbnB1dC52YWx1ZTtcbiAgICAgIGlmIChzaG91bGRDbGVhckNoYW5uZWxzKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG4gICAgICAgIHRoaXMuaW50ZXJuYWxDb2xvclNldChudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNBbHBoYUNoYW5uZWwgPSBjaGFubmVsSW5kZXggPT09IDM7XG4gICAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihpbnB1dC52YWx1ZSk7XG4gICAgICBjaGFubmVsc1tjaGFubmVsSW5kZXhdID0gaXNBbHBoYUNoYW5uZWwgPyBvcGFjaXR5VG9BbHBoYSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlQ29sb3JGcm9tQ2hhbm5lbHMoY2hhbm5lbHMpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVTYXZlZENvbG9yS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGlzQWN0aXZhdGlvbktleShldmVudC5rZXkpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuaGFuZGxlU2F2ZWRDb2xvclNlbGVjdChldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNvbG9yRmllbGRQb2ludGVyRG93biA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IG9mZnNldFgsIG9mZnNldFkgfSA9IGV2ZW50O1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIHRoaXMuZ2xvYmFsUG9pbnRlck1vdmVIYW5kbGVyKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgdGhpcy5nbG9iYWxQb2ludGVyVXBIYW5kbGVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICB0aGlzLmFjdGl2ZUNhbnZhc0luZm8gPSB7XG4gICAgICAgIGNvbnRleHQ6IHRoaXMuY29sb3JGaWVsZFJlbmRlcmluZ0NvbnRleHQsXG4gICAgICAgIGJvdW5kczogdGhpcy5jb2xvckZpZWxkUmVuZGVyaW5nQ29udGV4dC5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIH07XG4gICAgICB0aGlzLmNhcHR1cmVDb2xvckZpZWxkQ29sb3Iob2Zmc2V0WCwgb2Zmc2V0WSk7XG4gICAgICB0aGlzLmNvbG9yRmllbGRTY29wZU5vZGUuZm9jdXMoKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlSHVlU2xpZGVyUG9pbnRlckRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNQcmltYXJ5UG9pbnRlckJ1dHRvbihldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBvZmZzZXRYIH0gPSBldmVudDtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCB0aGlzLmdsb2JhbFBvaW50ZXJNb3ZlSGFuZGxlcik7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIHRoaXMuZ2xvYmFsUG9pbnRlclVwSGFuZGxlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgdGhpcy5hY3RpdmVDYW52YXNJbmZvID0ge1xuICAgICAgICBjb250ZXh0OiB0aGlzLmh1ZVNsaWRlclJlbmRlcmluZ0NvbnRleHQsXG4gICAgICAgIGJvdW5kczogdGhpcy5odWVTbGlkZXJSZW5kZXJpbmdDb250ZXh0LmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgfTtcbiAgICAgIHRoaXMuY2FwdHVyZUh1ZVNsaWRlckNvbG9yKG9mZnNldFgpO1xuICAgICAgdGhpcy5odWVTY29wZU5vZGUuZm9jdXMoKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlT3BhY2l0eVNsaWRlclBvaW50ZXJEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgb2Zmc2V0WCB9ID0gZXZlbnQ7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5nbG9iYWxQb2ludGVyTW92ZUhhbmRsZXIpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCB0aGlzLmdsb2JhbFBvaW50ZXJVcEhhbmRsZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgIHRoaXMuYWN0aXZlQ2FudmFzSW5mbyA9IHtcbiAgICAgICAgY29udGV4dDogdGhpcy5vcGFjaXR5U2xpZGVyUmVuZGVyaW5nQ29udGV4dCxcbiAgICAgICAgYm91bmRzOiB0aGlzLm9wYWNpdHlTbGlkZXJSZW5kZXJpbmdDb250ZXh0LmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgfTtcbiAgICAgIHRoaXMuY2FwdHVyZU9wYWNpdHlTbGlkZXJWYWx1ZShvZmZzZXRYKTtcbiAgICAgIHRoaXMub3BhY2l0eVNjb3BlTm9kZS5mb2N1cygpO1xuICAgIH07XG4gICAgdGhpcy5nbG9iYWxQb2ludGVyVXBIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByZXZpb3VzbHlEcmFnZ2luZyA9IHRoaXMuYWN0aXZlQ2FudmFzSW5mbztcbiAgICAgIHRoaXMuYWN0aXZlQ2FudmFzSW5mbyA9IG51bGw7XG4gICAgICB0aGlzLmRyYXdDb2xvckNvbnRyb2xzKCk7XG4gICAgICBpZiAocHJldmlvdXNseURyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUNvbG9yUGlja2VyQ2hhbmdlLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZ2xvYmFsUG9pbnRlck1vdmVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGFjdGl2ZUNhbnZhc0luZm8sIGVsIH0gPSB0aGlzO1xuICAgICAgaWYgKCFlbC5pc0Nvbm5lY3RlZCB8fCAhYWN0aXZlQ2FudmFzSW5mbykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IGNvbnRleHQsIGJvdW5kcyB9ID0gYWN0aXZlQ2FudmFzSW5mbztcbiAgICAgIGxldCBzYW1wbGluZ1g7XG4gICAgICBsZXQgc2FtcGxpbmdZO1xuICAgICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudDtcbiAgICAgIGlmIChjb250ZXh0LmNhbnZhcy5tYXRjaGVzKFwiOmhvdmVyXCIpKSB7XG4gICAgICAgIHNhbXBsaW5nWCA9IGNsaWVudFggLSBib3VuZHMueDtcbiAgICAgICAgc2FtcGxpbmdZID0gY2xpZW50WSAtIGJvdW5kcy55O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIHNuYXAgeCBhbmQgeSB0byB0aGUgY2xvc2VzdCBlZGdlXG4gICAgICAgIGlmIChjbGllbnRYIDwgYm91bmRzLnggKyBib3VuZHMud2lkdGggJiYgY2xpZW50WCA+IGJvdW5kcy54KSB7XG4gICAgICAgICAgc2FtcGxpbmdYID0gY2xpZW50WCAtIGJvdW5kcy54O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNsaWVudFggPCBib3VuZHMueCkge1xuICAgICAgICAgIHNhbXBsaW5nWCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc2FtcGxpbmdYID0gYm91bmRzLndpZHRoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xpZW50WSA8IGJvdW5kcy55ICsgYm91bmRzLmhlaWdodCAmJiBjbGllbnRZID4gYm91bmRzLnkpIHtcbiAgICAgICAgICBzYW1wbGluZ1kgPSBjbGllbnRZIC0gYm91bmRzLnk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2xpZW50WSA8IGJvdW5kcy55KSB7XG4gICAgICAgICAgc2FtcGxpbmdZID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzYW1wbGluZ1kgPSBib3VuZHMuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY29udGV4dCA9PT0gdGhpcy5jb2xvckZpZWxkUmVuZGVyaW5nQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNhcHR1cmVDb2xvckZpZWxkQ29sb3Ioc2FtcGxpbmdYLCBzYW1wbGluZ1ksIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGNvbnRleHQgPT09IHRoaXMuaHVlU2xpZGVyUmVuZGVyaW5nQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNhcHR1cmVIdWVTbGlkZXJDb2xvcihzYW1wbGluZ1gpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY29udGV4dCA9PT0gdGhpcy5vcGFjaXR5U2xpZGVyUmVuZGVyaW5nQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNhcHR1cmVPcGFjaXR5U2xpZGVyVmFsdWUoc2FtcGxpbmdYKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc3RvcmVDb2xvckZpZWxkU2NvcGUgPSAobm9kZSkgPT4ge1xuICAgICAgdGhpcy5jb2xvckZpZWxkU2NvcGVOb2RlID0gbm9kZTtcbiAgICB9O1xuICAgIHRoaXMuc3RvcmVIdWVTY29wZSA9IChub2RlKSA9PiB7XG4gICAgICB0aGlzLmh1ZVNjb3BlTm9kZSA9IG5vZGU7XG4gICAgfTtcbiAgICB0aGlzLnJlbmRlckNoYW5uZWxzVGFiVGl0bGUgPSAoY2hhbm5lbE1vZGUpID0+IHtcbiAgICAgIGNvbnN0IHsgY2hhbm5lbE1vZGU6IGFjdGl2ZUNoYW5uZWxNb2RlLCBtZXNzYWdlcyB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gY2hhbm5lbE1vZGUgPT09IGFjdGl2ZUNoYW5uZWxNb2RlO1xuICAgICAgY29uc3QgbGFiZWwgPSBjaGFubmVsTW9kZSA9PT0gXCJyZ2JcIiA/IG1lc3NhZ2VzLnJnYiA6IG1lc3NhZ2VzLmhzdjtcbiAgICAgIHJldHVybiAoaChcImNhbGNpdGUtdGFiLXRpdGxlXCIsIHsgY2xhc3M6IENTUyQyLmNvbG9yTW9kZSwgXCJkYXRhLWNvbG9yLW1vZGVcIjogY2hhbm5lbE1vZGUsIGtleTogY2hhbm5lbE1vZGUsIG9uQ2FsY2l0ZVRhYnNBY3RpdmF0ZTogdGhpcy5oYW5kbGVUYWJBY3RpdmF0ZSwgc2VsZWN0ZWQ6IHNlbGVjdGVkIH0sIGxhYmVsKSk7XG4gICAgfTtcbiAgICB0aGlzLnJlbmRlckNoYW5uZWxzVGFiID0gKGNoYW5uZWxNb2RlKSA9PiB7XG4gICAgICBjb25zdCB7IGFsbG93RW1wdHksIGNoYW5uZWxNb2RlOiBhY3RpdmVDaGFubmVsTW9kZSwgY2hhbm5lbHMsIG1lc3NhZ2VzLCBhbHBoYUNoYW5uZWwgfSA9IHRoaXM7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IGNoYW5uZWxNb2RlID09PSBhY3RpdmVDaGFubmVsTW9kZTtcbiAgICAgIGNvbnN0IGlzUmdiID0gY2hhbm5lbE1vZGUgPT09IFwicmdiXCI7XG4gICAgICBjb25zdCBjaGFubmVsQXJpYUxhYmVscyA9IGlzUmdiXG4gICAgICAgID8gW21lc3NhZ2VzLnJlZCwgbWVzc2FnZXMuZ3JlZW4sIG1lc3NhZ2VzLmJsdWVdXG4gICAgICAgIDogW21lc3NhZ2VzLmh1ZSwgbWVzc2FnZXMuc2F0dXJhdGlvbiwgbWVzc2FnZXMudmFsdWVdO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gZ2V0RWxlbWVudERpcih0aGlzLmVsKTtcbiAgICAgIGNvbnN0IGNoYW5uZWxzVG9SZW5kZXIgPSBhbHBoYUNoYW5uZWwgPyBjaGFubmVscyA6IGNoYW5uZWxzLnNsaWNlKDAsIDMpO1xuICAgICAgcmV0dXJuIChoKFwiY2FsY2l0ZS10YWJcIiwgeyBjbGFzczogQ1NTJDIuY29udHJvbCwga2V5OiBjaGFubmVsTW9kZSwgc2VsZWN0ZWQ6IHNlbGVjdGVkIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDIuY2hhbm5lbHMsIGRpcjogXCJsdHJcIiB9LCBjaGFubmVsc1RvUmVuZGVyLm1hcCgoY2hhbm5lbFZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpc0FscGhhQ2hhbm5lbCA9IGluZGV4ID09PSAzO1xuICAgICAgICBpZiAoaXNBbHBoYUNoYW5uZWwpIHtcbiAgICAgICAgICBjaGFubmVsVmFsdWUgPVxuICAgICAgICAgICAgYWxsb3dFbXB0eSAmJiAhY2hhbm5lbFZhbHVlID8gY2hhbm5lbFZhbHVlIDogYWxwaGFUb09wYWNpdHkoY2hhbm5lbFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICAvKiB0aGUgY2hhbm5lbCBjb250YWluZXIgaXMgbHRyLCBzbyB3ZSBhcHBseSB0aGUgaG9zdCdzIGRpcmVjdGlvbiAqL1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDaGFubmVsKGNoYW5uZWxWYWx1ZSwgaW5kZXgsIGNoYW5uZWxBcmlhTGFiZWxzW2luZGV4XSwgZGlyZWN0aW9uLCBpc0FscGhhQ2hhbm5lbCA/IFwiJVwiIDogXCJcIik7XG4gICAgICB9KSkpKTtcbiAgICB9O1xuICAgIHRoaXMucmVuZGVyQ2hhbm5lbCA9ICh2YWx1ZSwgaW5kZXgsIGFyaWFMYWJlbCwgZGlyZWN0aW9uLCBzdWZmaXgpID0+IHtcbiAgICAgIHJldHVybiAoaChcImNhbGNpdGUtaW5wdXRcIiwgeyBjbGFzczogQ1NTJDIuY2hhbm5lbCwgXCJkYXRhLWNoYW5uZWwtaW5kZXhcIjogaW5kZXgsIGRpcjogZGlyZWN0aW9uLCBrZXk6IGluZGV4LCBsYWJlbDogYXJpYUxhYmVsLCBsYW5nOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSwgbnVtYmVyQnV0dG9uVHlwZTogXCJub25lXCIsIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sIG9uQ2FsY2l0ZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5uZWxDaGFuZ2UsIG9uQ2FsY2l0ZUlucHV0SW5wdXQ6IHRoaXMuaGFuZGxlQ2hhbm5lbElucHV0LCBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93biwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIixcbiAgICAgICAgLy8gd29ya2Fyb3VuZCB0byBlbnN1cmUgaW5wdXQgYm9yZGVycyBvdmVybGFwIGFzIGRlc2lyZWRcbiAgICAgICAgLy8gdGhpcyBpcyBiZWNhdXNlIHRoZSBidWlsZCB0cmFuc2Zvcm1zIG1hcmdpbi1sZWZ0IHRvIGl0c1xuICAgICAgICAvLyBsb2dpY2FsLXByb3AsIHdoaWNoIGlzIHVuZGVzaXJlZCBhcyBjaGFubmVscyBhcmUgYWx3YXlzIGx0clxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG1hcmdpbkxlZnQ6IGluZGV4ID4gMCAmJiAhKHRoaXMuc2NhbGUgPT09IFwic1wiICYmIHRoaXMuYWxwaGFDaGFubmVsICYmIGluZGV4ID09PSAzKSA/IFwiLTFweFwiIDogXCJcIlxuICAgICAgICB9LCBzdWZmaXhUZXh0OiBzdWZmaXgsIHR5cGU6IFwibnVtYmVyXCIsIHZhbHVlOiB2YWx1ZT8udG9TdHJpbmcoKSB9KSk7XG4gICAgfTtcbiAgICB0aGlzLmRlbGV0ZUNvbG9yID0gKCkgPT4ge1xuICAgICAgY29uc3QgY29sb3JUb0RlbGV0ZSA9IGhleGlmeSh0aGlzLmNvbG9yLCB0aGlzLmFscGhhQ2hhbm5lbCk7XG4gICAgICBjb25zdCBpblN0b3JhZ2UgPSB0aGlzLnNhdmVkQ29sb3JzLmluZGV4T2YoY29sb3JUb0RlbGV0ZSkgPiAtMTtcbiAgICAgIGlmICghaW5TdG9yYWdlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNhdmVkQ29sb3JzID0gdGhpcy5zYXZlZENvbG9ycy5maWx0ZXIoKGNvbG9yKSA9PiBjb2xvciAhPT0gY29sb3JUb0RlbGV0ZSk7XG4gICAgICB0aGlzLnNhdmVkQ29sb3JzID0gc2F2ZWRDb2xvcnM7XG4gICAgICBjb25zdCBzdG9yYWdlS2V5ID0gYCR7REVGQVVMVF9TVE9SQUdFX0tFWV9QUkVGSVh9JHt0aGlzLnN0b3JhZ2VJZH1gO1xuICAgICAgaWYgKHRoaXMuc3RvcmFnZUlkKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHNhdmVkQ29sb3JzKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNhdmVDb2xvciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbG9yVG9TYXZlID0gaGV4aWZ5KHRoaXMuY29sb3IsIHRoaXMuYWxwaGFDaGFubmVsKTtcbiAgICAgIGNvbnN0IGFscmVhZHlTYXZlZCA9IHRoaXMuc2F2ZWRDb2xvcnMuaW5kZXhPZihjb2xvclRvU2F2ZSkgPiAtMTtcbiAgICAgIGlmIChhbHJlYWR5U2F2ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2F2ZWRDb2xvcnMgPSBbLi4udGhpcy5zYXZlZENvbG9ycywgY29sb3JUb1NhdmVdO1xuICAgICAgdGhpcy5zYXZlZENvbG9ycyA9IHNhdmVkQ29sb3JzO1xuICAgICAgY29uc3Qgc3RvcmFnZUtleSA9IGAke0RFRkFVTFRfU1RPUkFHRV9LRVlfUFJFRklYfSR7dGhpcy5zdG9yYWdlSWR9YDtcbiAgICAgIGlmICh0aGlzLnN0b3JhZ2VJZCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShzYXZlZENvbG9ycykpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5kcmF3Q29sb3JDb250cm9scyA9IHRocm90dGxlKCh0eXBlID0gXCJhbGxcIikgPT4ge1xuICAgICAgaWYgKCh0eXBlID09PSBcImFsbFwiIHx8IHR5cGUgPT09IFwiY29sb3ItZmllbGRcIikgJiYgdGhpcy5jb2xvckZpZWxkUmVuZGVyaW5nQ29udGV4dCkge1xuICAgICAgICB0aGlzLmRyYXdDb2xvckZpZWxkKCk7XG4gICAgICB9XG4gICAgICBpZiAoKHR5cGUgPT09IFwiYWxsXCIgfHwgdHlwZSA9PT0gXCJodWUtc2xpZGVyXCIpICYmIHRoaXMuaHVlU2xpZGVyUmVuZGVyaW5nQ29udGV4dCkge1xuICAgICAgICB0aGlzLmRyYXdIdWVTbGlkZXIoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFscGhhQ2hhbm5lbCAmJlxuICAgICAgICAodHlwZSA9PT0gXCJhbGxcIiB8fCB0eXBlID09PSBcIm9wYWNpdHktc2xpZGVyXCIpICYmXG4gICAgICAgIHRoaXMub3BhY2l0eVNsaWRlclJlbmRlcmluZ0NvbnRleHQpIHtcbiAgICAgICAgdGhpcy5kcmF3T3BhY2l0eVNsaWRlcigpO1xuICAgICAgfVxuICAgIH0sIHRocm90dGxlRm9yNjBGcHNJbk1zKTtcbiAgICB0aGlzLmNhcHR1cmVDb2xvckZpZWxkQ29sb3IgPSAoeCwgeSwgc2tpcEVxdWFsID0gdHJ1ZSkgPT4ge1xuICAgICAgY29uc3QgeyBkaW1lbnNpb25zOiB7IGNvbG9yRmllbGQ6IHsgaGVpZ2h0LCB3aWR0aCB9IH0gfSA9IHRoaXM7XG4gICAgICBjb25zdCBzYXR1cmF0aW9uID0gTWF0aC5yb3VuZCgoSFNWX0xJTUlUUy5zIC8gd2lkdGgpICogeCk7XG4gICAgICBjb25zdCB2YWx1ZSA9IE1hdGgucm91bmQoKEhTVl9MSU1JVFMudiAvIGhlaWdodCkgKiAoaGVpZ2h0IC0geSkpO1xuICAgICAgdGhpcy5pbnRlcm5hbENvbG9yU2V0KHRoaXMuYmFzZUNvbG9yRmllbGRDb2xvci5oc3YoKS5zYXR1cmF0aW9udihzYXR1cmF0aW9uKS52YWx1ZSh2YWx1ZSksIHNraXBFcXVhbCk7XG4gICAgfTtcbiAgICB0aGlzLmluaXRDb2xvckZpZWxkID0gKGNhbnZhcykgPT4ge1xuICAgICAgdGhpcy5jb2xvckZpZWxkUmVuZGVyaW5nQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICB0aGlzLnVwZGF0ZUNhbnZhc1NpemUoXCJjb2xvci1maWVsZFwiKTtcbiAgICAgIHRoaXMuZHJhd0NvbG9yQ29udHJvbHMoKTtcbiAgICB9O1xuICAgIHRoaXMuaW5pdEh1ZVNsaWRlciA9IChjYW52YXMpID0+IHtcbiAgICAgIHRoaXMuaHVlU2xpZGVyUmVuZGVyaW5nQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICB0aGlzLnVwZGF0ZUNhbnZhc1NpemUoXCJodWUtc2xpZGVyXCIpO1xuICAgICAgdGhpcy5kcmF3SHVlU2xpZGVyKCk7XG4gICAgfTtcbiAgICB0aGlzLmluaXRPcGFjaXR5U2xpZGVyID0gKGNhbnZhcykgPT4ge1xuICAgICAgdGhpcy5vcGFjaXR5U2xpZGVyUmVuZGVyaW5nQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICB0aGlzLnVwZGF0ZUNhbnZhc1NpemUoXCJvcGFjaXR5LXNsaWRlclwiKTtcbiAgICAgIHRoaXMuZHJhd09wYWNpdHlTbGlkZXIoKTtcbiAgICB9O1xuICAgIHRoaXMuc3RvcmVPcGFjaXR5U2NvcGUgPSAobm9kZSkgPT4ge1xuICAgICAgdGhpcy5vcGFjaXR5U2NvcGVOb2RlID0gbm9kZTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlT3BhY2l0eVNjb3BlS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZXIgPSBldmVudC5zaGlmdEtleSA/IDEwIDogMTtcbiAgICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcbiAgICAgIGNvbnN0IGFycm93S2V5VG9YT2Zmc2V0ID0ge1xuICAgICAgICBBcnJvd1VwOiAxLFxuICAgICAgICBBcnJvd1JpZ2h0OiAxLFxuICAgICAgICBBcnJvd0Rvd246IC0xLFxuICAgICAgICBBcnJvd0xlZnQ6IC0xXG4gICAgICB9O1xuICAgICAgaWYgKGFycm93S2V5VG9YT2Zmc2V0W2tleV0pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBvcGFjaXR5VG9BbHBoYShhcnJvd0tleVRvWE9mZnNldFtrZXldICogbW9kaWZpZXIpO1xuICAgICAgICB0aGlzLmNhcHR1cmVIdWVTbGlkZXJDb2xvcih0aGlzLm9wYWNpdHlTY29wZUxlZnQgKyBkZWx0YSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmFsbG93RW1wdHkgPSBmYWxzZTtcbiAgICB0aGlzLmFscGhhQ2hhbm5lbCA9IGZhbHNlO1xuICAgIHRoaXMuY2hhbm5lbHNEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY29sb3IgPSBERUZBVUxUX0NPTE9SJDE7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybWF0ID0gXCJhdXRvXCI7XG4gICAgdGhpcy5oaWRlQ2hhbm5lbHMgPSBmYWxzZTtcbiAgICB0aGlzLmhleERpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5oaWRlSGV4ID0gZmFsc2U7XG4gICAgdGhpcy5oaWRlU2F2ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNhdmVkRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5zdG9yYWdlSWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmFsdWUgPSBub3JtYWxpemVIZXgoaGV4aWZ5KERFRkFVTFRfQ09MT1IkMSwgdGhpcy5hbHBoYUNoYW5uZWwpKTtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNoYW5uZWxNb2RlID0gXCJyZ2JcIjtcbiAgICB0aGlzLmNoYW5uZWxzID0gdGhpcy50b0NoYW5uZWxzKERFRkFVTFRfQ09MT1IkMSk7XG4gICAgdGhpcy5kaW1lbnNpb25zID0gRElNRU5TSU9OUy5tO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2F2ZWRDb2xvcnMgPSBbXTtcbiAgICB0aGlzLmNvbG9yRmllbGRTY29wZVRvcCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbG9yRmllbGRTY29wZUxlZnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5odWVTY29wZUxlZnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vcGFjaXR5U2NvcGVMZWZ0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NvcGVPcmllbnRhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICBoYW5kbGVBbHBoYUNoYW5uZWxDaGFuZ2UoYWxwaGFDaGFubmVsKSB7XG4gICAgY29uc3QgeyBmb3JtYXQgfSA9IHRoaXM7XG4gICAgaWYgKGFscGhhQ2hhbm5lbCAmJiBmb3JtYXQgIT09IFwiYXV0b1wiICYmICFhbHBoYUNvbXBhdGlibGUoZm9ybWF0KSkge1xuICAgICAgY29uc29sZS53YXJuKGBpZ25vcmluZyBhbHBoYUNoYW5uZWwgYXMgdGhlIGN1cnJlbnQgZm9ybWF0ICgke2Zvcm1hdH0pIGRvZXMgbm90IHN1cHBvcnQgYWxwaGFgKTtcbiAgICAgIHRoaXMuYWxwaGFDaGFubmVsID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGhhbmRsZUNvbG9yQ2hhbmdlKGNvbG9yLCBvbGRDb2xvcikge1xuICAgIHRoaXMuZHJhd0NvbG9yQ29udHJvbHMoKTtcbiAgICB0aGlzLnVwZGF0ZUNoYW5uZWxzRnJvbUNvbG9yKGNvbG9yKTtcbiAgICB0aGlzLnByZXZpb3VzQ29sb3IgPSBvbGRDb2xvcjtcbiAgfVxuICBoYW5kbGVGb3JtYXRDaGFuZ2UoZm9ybWF0KSB7XG4gICAgdGhpcy5zZXRNb2RlKGZvcm1hdCk7XG4gICAgdGhpcy5pbnRlcm5hbENvbG9yU2V0KHRoaXMuY29sb3IsIGZhbHNlLCBcImludGVybmFsXCIpO1xuICB9XG4gIGhhbmRsZVNjYWxlQ2hhbmdlKHNjYWxlID0gXCJtXCIpIHtcbiAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoc2NhbGUpO1xuICAgIHRoaXMudXBkYXRlQ2FudmFzU2l6ZShcImFsbFwiKTtcbiAgICB0aGlzLmRyYXdDb2xvckNvbnRyb2xzKCk7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGhhbmRsZVZhbHVlQ2hhbmdlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGNvbnN0IHsgYWxsb3dFbXB0eSwgZm9ybWF0IH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoZWNrTW9kZSA9ICFhbGxvd0VtcHR5IHx8IHZhbHVlO1xuICAgIGxldCBtb2RlQ2hhbmdlZCA9IGZhbHNlO1xuICAgIGlmIChjaGVja01vZGUpIHtcbiAgICAgIGNvbnN0IG5leHRNb2RlID0gcGFyc2VNb2RlKHZhbHVlKTtcbiAgICAgIGlmICghbmV4dE1vZGUgfHwgKGZvcm1hdCAhPT0gXCJhdXRvXCIgJiYgbmV4dE1vZGUgIT09IGZvcm1hdCkpIHtcbiAgICAgICAgdGhpcy5zaG93SW5jb21wYXRpYmxlQ29sb3JXYXJuaW5nKHZhbHVlLCBmb3JtYXQpO1xuICAgICAgICB0aGlzLnZhbHVlID0gb2xkVmFsdWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG1vZGVDaGFuZ2VkID0gdGhpcy5tb2RlICE9PSBuZXh0TW9kZTtcbiAgICAgIHRoaXMuc2V0TW9kZShuZXh0TW9kZSwgdGhpcy5pbnRlcm5hbENvbG9yVXBkYXRlQ29udGV4dCA9PT0gbnVsbCk7XG4gICAgfVxuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5hY3RpdmVDYW52YXNJbmZvO1xuICAgIGlmICh0aGlzLmludGVybmFsQ29sb3JVcGRhdGVDb250ZXh0ID09PSBcImluaXRpYWxcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbnRlcm5hbENvbG9yVXBkYXRlQ29udGV4dCA9PT0gXCJ1c2VyLWludGVyYWN0aW9uXCIpIHtcbiAgICAgIHRoaXMuY2FsY2l0ZUNvbG9yUGlja2VySW5wdXQuZW1pdCgpO1xuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICB0aGlzLmNhbGNpdGVDb2xvclBpY2tlckNoYW5nZS5lbWl0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbG9yJDEgPSBhbGxvd0VtcHR5ICYmICF2YWx1ZVxuICAgICAgPyBudWxsXG4gICAgICA6IGNvbG9yKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIGFscGhhQ29tcGF0aWJsZSh0aGlzLm1vZGUpXG4gICAgICAgID8gbm9ybWFsaXplQ29sb3IodmFsdWUpXG4gICAgICAgIDogdmFsdWUpO1xuICAgIGNvbnN0IGNvbG9yQ2hhbmdlZCA9ICFjb2xvckVxdWFsKGNvbG9yJDEsIHRoaXMuY29sb3IpO1xuICAgIGlmIChtb2RlQ2hhbmdlZCB8fCBjb2xvckNoYW5nZWQpIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxDb2xvclNldChjb2xvciQxLCB0aGlzLmFscGhhQ2hhbm5lbCAmJiAhKHRoaXMubW9kZS5lbmRzV2l0aChcImFcIikgfHwgdGhpcy5tb2RlLmVuZHNXaXRoKFwiYS1jc3NcIikpLCBcImludGVybmFsXCIpO1xuICAgIH1cbiAgfVxuICBnZXQgYmFzZUNvbG9yRmllbGRDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvciB8fCB0aGlzLnByZXZpb3VzQ29sb3IgfHwgREVGQVVMVF9DT0xPUiQxO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8gdXNpbmcgQExpc3RlbiBhcyBhIHdvcmthcm91bmQgZm9yIFZET00gbGlzdGVuZXIgbm90IGZpcmluZ1xuICBoYW5kbGVDaGFubmVsS2V5VXBPckRvd24oZXZlbnQpIHtcbiAgICB0aGlzLnNoaWZ0S2V5Q2hhbm5lbEFkanVzdG1lbnQgPSAwO1xuICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcbiAgICBpZiAoKGtleSAhPT0gXCJBcnJvd1VwXCIgJiYga2V5ICE9PSBcIkFycm93RG93blwiKSB8fFxuICAgICAgIWV2ZW50LmNvbXBvc2VkUGF0aCgpLnNvbWUoKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0Py5jb250YWlucyhDU1MkMi5jaGFubmVsKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBzaGlmdEtleSB9ID0gZXZlbnQ7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuY29sb3IpIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxDb2xvclNldCh0aGlzLnByZXZpb3VzQ29sb3IpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHRoaXMgZ2V0cyBhcHBsaWVkIHRvIHRoZSBpbnB1dCdzIHVwL2Rvd24gYXJyb3cgaW5jcmVtZW50L2RlY3JlbWVudFxuICAgIGNvbnN0IGNvbXBsZW1lbnRhcnlCdW1wID0gOTtcbiAgICB0aGlzLnNoaWZ0S2V5Q2hhbm5lbEFkanVzdG1lbnQgPVxuICAgICAga2V5ID09PSBcIkFycm93VXBcIiAmJiBzaGlmdEtleVxuICAgICAgICA/IGNvbXBsZW1lbnRhcnlCdW1wXG4gICAgICAgIDoga2V5ID09PSBcIkFycm93RG93blwiICYmIHNoaWZ0S2V5XG4gICAgICAgICAgPyAtY29tcGxlbWVudGFyeUJ1bXBcbiAgICAgICAgICA6IDA7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50J3MgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICBjb25zdCB7IGFsbG93RW1wdHksIGNvbG9yOiBjb2xvciQxLCBmb3JtYXQsIHZhbHVlIH0gPSB0aGlzO1xuICAgIGNvbnN0IHdpbGxTZXROb0NvbG9yID0gYWxsb3dFbXB0eSAmJiAhdmFsdWU7XG4gICAgY29uc3QgcGFyc2VkTW9kZSA9IHBhcnNlTW9kZSh2YWx1ZSk7XG4gICAgY29uc3QgdmFsdWVJc0NvbXBhdGlibGUgPSB3aWxsU2V0Tm9Db2xvciB8fCAoZm9ybWF0ID09PSBcImF1dG9cIiAmJiBwYXJzZWRNb2RlKSB8fCBmb3JtYXQgPT09IHBhcnNlZE1vZGU7XG4gICAgY29uc3QgaW5pdGlhbENvbG9yID0gd2lsbFNldE5vQ29sb3IgPyBudWxsIDogdmFsdWVJc0NvbXBhdGlibGUgPyBjb2xvcih2YWx1ZSkgOiBjb2xvciQxO1xuICAgIGlmICghdmFsdWVJc0NvbXBhdGlibGUpIHtcbiAgICAgIHRoaXMuc2hvd0luY29tcGF0aWJsZUNvbG9yV2FybmluZyh2YWx1ZSwgZm9ybWF0KTtcbiAgICB9XG4gICAgdGhpcy5zZXRNb2RlKGZvcm1hdCwgZmFsc2UpO1xuICAgIHRoaXMuaW50ZXJuYWxDb2xvclNldChpbml0aWFsQ29sb3IsIGZhbHNlLCBcImluaXRpYWxcIik7XG4gICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKHRoaXMuc2NhbGUpO1xuICAgIGNvbnN0IHN0b3JhZ2VLZXkgPSBgJHtERUZBVUxUX1NUT1JBR0VfS0VZX1BSRUZJWH0ke3RoaXMuc3RvcmFnZUlkfWA7XG4gICAgaWYgKHRoaXMuc3RvcmFnZUlkICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpKSB7XG4gICAgICB0aGlzLnNhdmVkQ29sb3JzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KSk7XG4gICAgfVxuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIHRoaXMuZ2xvYmFsUG9pbnRlck1vdmVIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIHRoaXMuZ2xvYmFsUG9pbnRlclVwSGFuZGxlcik7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFsbG93RW1wdHksIGNoYW5uZWxzRGlzYWJsZWQsIGNvbG9yLCBjb2xvckZpZWxkU2NvcGVMZWZ0LCBjb2xvckZpZWxkU2NvcGVUb3AsIGRpbWVuc2lvbnM6IHsgY29sb3JGaWVsZDogeyB3aWR0aDogY29sb3JGaWVsZFdpZHRoIH0sIHNsaWRlcjogeyB3aWR0aDogc2xpZGVyV2lkdGggfSwgdGh1bWI6IHsgcmFkaXVzOiB0aHVtYlJhZGl1cyB9IH0sIGhleERpc2FibGVkLCBoaWRlQ2hhbm5lbHMsIGhpZGVIZXgsIGhpZGVTYXZlZCwgaHVlU2NvcGVMZWZ0LCBtZXNzYWdlcywgYWxwaGFDaGFubmVsLCBvcGFjaXR5U2NvcGVMZWZ0LCBzYXZlZENvbG9ycywgc2F2ZWREaXNhYmxlZCwgc2NhbGUsIHNjb3BlT3JpZW50YXRpb24gfSA9IHRoaXM7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb2xvckluSGV4ID0gY29sb3IgPyBoZXhpZnkoY29sb3IsIGFscGhhQ2hhbm5lbCkgOiBudWxsO1xuICAgIGNvbnN0IGh1ZVRvcCA9IHRodW1iUmFkaXVzO1xuICAgIGNvbnN0IGh1ZUxlZnQgPSBodWVTY29wZUxlZnQgPz8gKHNsaWRlcldpZHRoICogREVGQVVMVF9DT0xPUiQxLmh1ZSgpKSAvIEhTVl9MSU1JVFMuaDtcbiAgICBjb25zdCBvcGFjaXR5VG9wID0gdGh1bWJSYWRpdXM7XG4gICAgY29uc3Qgb3BhY2l0eUxlZnQgPSBvcGFjaXR5U2NvcGVMZWZ0ID8/XG4gICAgICAoY29sb3JGaWVsZFdpZHRoICogYWxwaGFUb09wYWNpdHkoREVGQVVMVF9DT0xPUiQxLmFscGhhKCkpKSAvIE9QQUNJVFlfTElNSVRTLm1heDtcbiAgICBjb25zdCBub0NvbG9yID0gY29sb3IgPT09IG51bGw7XG4gICAgY29uc3QgdmVydGljYWwgPSBzY29wZU9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCI7XG4gICAgY29uc3Qgbm9IZXggPSBoZXhEaXNhYmxlZCB8fCBoaWRlSGV4O1xuICAgIGNvbnN0IG5vQ2hhbm5lbHMgPSBjaGFubmVsc0Rpc2FibGVkIHx8IGhpZGVDaGFubmVscztcbiAgICBjb25zdCBub1NhdmVkID0gc2F2ZWREaXNhYmxlZCB8fCBoaWRlU2F2ZWQ7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUyQyLmNvbnRhaW5lciB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUyQyLmNvbnRyb2xBbmRTY29wZSB9LCBoKFwiY2FudmFzXCIsIHsgY2xhc3M6IENTUyQyLmNvbG9yRmllbGQsIG9uUG9pbnRlckRvd246IHRoaXMuaGFuZGxlQ29sb3JGaWVsZFBvaW50ZXJEb3duLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuaW5pdENvbG9yRmllbGQgfSksIGgoXCJkaXZcIiwgeyBcImFyaWEtbGFiZWxcIjogdmVydGljYWwgPyBtZXNzYWdlcy52YWx1ZSA6IG1lc3NhZ2VzLnNhdHVyYXRpb24sIFwiYXJpYS12YWx1ZW1heFwiOiB2ZXJ0aWNhbCA/IEhTVl9MSU1JVFMudiA6IEhTVl9MSU1JVFMucywgXCJhcmlhLXZhbHVlbWluXCI6IFwiMFwiLCBcImFyaWEtdmFsdWVub3dcIjogKHZlcnRpY2FsID8gY29sb3I/LnNhdHVyYXRpb252KCkgOiBjb2xvcj8udmFsdWUoKSkgfHwgXCIwXCIsIGNsYXNzOiB7IFtDU1MkMi5zY29wZV06IHRydWUsIFtDU1MkMi5jb2xvckZpZWxkU2NvcGVdOiB0cnVlIH0sIG9uS2V5RG93bjogdGhpcy5oYW5kbGVDb2xvckZpZWxkU2NvcGVLZXlEb3duLCByb2xlOiBcInNsaWRlclwiLCBzdHlsZTogeyB0b3A6IGAke2NvbG9yRmllbGRTY29wZVRvcCB8fCAwfXB4YCwgbGVmdDogYCR7Y29sb3JGaWVsZFNjb3BlTGVmdCB8fCAwfXB4YCB9LCB0YWJpbmRleDogXCIwXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zdG9yZUNvbG9yRmllbGRTY29wZSB9KSksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDIucHJldmlld0FuZFNsaWRlcnMgfSwgaChcImNhbGNpdGUtY29sb3ItcGlja2VyLXN3YXRjaFwiLCB7IGNsYXNzOiBDU1MkMi5wcmV2aWV3LCBjb2xvcjogc2VsZWN0ZWRDb2xvckluSGV4LCBzY2FsZTogXCJsXCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDIuc2xpZGVycyB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUyQyLmNvbnRyb2xBbmRTY29wZSB9LCBoKFwiY2FudmFzXCIsIHsgY2xhc3M6IHsgW0NTUyQyLnNsaWRlcl06IHRydWUsIFtDU1MkMi5odWVTbGlkZXJdOiB0cnVlIH0sIG9uUG9pbnRlckRvd246IHRoaXMuaGFuZGxlSHVlU2xpZGVyUG9pbnRlckRvd24sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5pbml0SHVlU2xpZGVyIH0pLCBoKFwiZGl2XCIsIHsgXCJhcmlhLWxhYmVsXCI6IG1lc3NhZ2VzLmh1ZSwgXCJhcmlhLXZhbHVlbWF4XCI6IEhTVl9MSU1JVFMuaCwgXCJhcmlhLXZhbHVlbWluXCI6IFwiMFwiLCBcImFyaWEtdmFsdWVub3dcIjogY29sb3I/LnJvdW5kKCkuaHVlKCkgfHwgREVGQVVMVF9DT0xPUiQxLnJvdW5kKCkuaHVlKCksIGNsYXNzOiB7IFtDU1MkMi5zY29wZV06IHRydWUsIFtDU1MkMi5odWVTY29wZV06IHRydWUgfSwgb25LZXlEb3duOiB0aGlzLmhhbmRsZUh1ZVNjb3BlS2V5RG93biwgcm9sZTogXCJzbGlkZXJcIiwgc3R5bGU6IHsgdG9wOiBgJHtodWVUb3B9cHhgLCBsZWZ0OiBgJHtodWVMZWZ0fXB4YCB9LCB0YWJpbmRleDogXCIwXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zdG9yZUh1ZVNjb3BlIH0pKSwgYWxwaGFDaGFubmVsID8gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDIuY29udHJvbEFuZFNjb3BlIH0sIGgoXCJjYW52YXNcIiwgeyBjbGFzczogeyBbQ1NTJDIuc2xpZGVyXTogdHJ1ZSwgW0NTUyQyLm9wYWNpdHlTbGlkZXJdOiB0cnVlIH0sIG9uUG9pbnRlckRvd246IHRoaXMuaGFuZGxlT3BhY2l0eVNsaWRlclBvaW50ZXJEb3duLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuaW5pdE9wYWNpdHlTbGlkZXIgfSksIGgoXCJkaXZcIiwgeyBcImFyaWEtbGFiZWxcIjogbWVzc2FnZXMub3BhY2l0eSwgXCJhcmlhLXZhbHVlbWF4XCI6IE9QQUNJVFlfTElNSVRTLm1heCwgXCJhcmlhLXZhbHVlbWluXCI6IE9QQUNJVFlfTElNSVRTLm1pbiwgXCJhcmlhLXZhbHVlbm93XCI6IChjb2xvciB8fCBERUZBVUxUX0NPTE9SJDEpLnJvdW5kKCkuYWxwaGEoKSwgY2xhc3M6IHsgW0NTUyQyLnNjb3BlXTogdHJ1ZSwgW0NTUyQyLm9wYWNpdHlTY29wZV06IHRydWUgfSwgb25LZXlEb3duOiB0aGlzLmhhbmRsZU9wYWNpdHlTY29wZUtleURvd24sIHJvbGU6IFwic2xpZGVyXCIsIHN0eWxlOiB7IHRvcDogYCR7b3BhY2l0eVRvcH1weGAsIGxlZnQ6IGAke29wYWNpdHlMZWZ0fXB4YCB9LCB0YWJpbmRleDogXCIwXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zdG9yZU9wYWNpdHlTY29wZSB9KSkpIDogbnVsbCkpLCBub0hleCAmJiBub0NoYW5uZWxzID8gbnVsbCA6IChoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUyQyLmNvbnRyb2xTZWN0aW9uXTogdHJ1ZSxcbiAgICAgICAgW0NTUyQyLnNlY3Rpb25dOiB0cnVlXG4gICAgICB9IH0sIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDIuaGV4QW5kQ2hhbm5lbHNHcm91cCB9LCBub0hleCA/IG51bGwgOiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMi5oZXhPcHRpb25zIH0sIGgoXCJjYWxjaXRlLWNvbG9yLXBpY2tlci1oZXgtaW5wdXRcIiwgeyBhbGxvd0VtcHR5OiBhbGxvd0VtcHR5LCBhbHBoYUNoYW5uZWw6IGFscGhhQ2hhbm5lbCwgY2xhc3M6IENTUyQyLmNvbnRyb2wsIG1lc3NhZ2VzOiBtZXNzYWdlcywgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSwgb25DYWxjaXRlQ29sb3JQaWNrZXJIZXhJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVIZXhJbnB1dENoYW5nZSwgc2NhbGU6IHNjYWxlLCB2YWx1ZTogc2VsZWN0ZWRDb2xvckluSGV4IH0pKSksIG5vQ2hhbm5lbHMgPyBudWxsIDogKGgoXCJjYWxjaXRlLXRhYnNcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTJDIuY29sb3JNb2RlQ29udGFpbmVyXTogdHJ1ZSxcbiAgICAgICAgW0NTUyQyLnNwbGl0U2VjdGlvbl06IHRydWVcbiAgICAgIH0sIHNjYWxlOiBzY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0sIGgoXCJjYWxjaXRlLXRhYi1uYXZcIiwgeyBzbG90OiBcInRpdGxlLWdyb3VwXCIgfSwgdGhpcy5yZW5kZXJDaGFubmVsc1RhYlRpdGxlKFwicmdiXCIpLCB0aGlzLnJlbmRlckNoYW5uZWxzVGFiVGl0bGUoXCJoc3ZcIikpLCB0aGlzLnJlbmRlckNoYW5uZWxzVGFiKFwicmdiXCIpLCB0aGlzLnJlbmRlckNoYW5uZWxzVGFiKFwiaHN2XCIpKSkpKSksIG5vU2F2ZWQgPyBudWxsIDogKGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTJDIuc2F2ZWRDb2xvcnNTZWN0aW9uXTogdHJ1ZSwgW0NTUyQyLnNlY3Rpb25dOiB0cnVlIH0gfSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMi5oZWFkZXIgfSwgaChcImxhYmVsXCIsIG51bGwsIG1lc3NhZ2VzLnNhdmVkKSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMi5zYXZlZENvbG9yc0J1dHRvbnMgfSwgaChcImNhbGNpdGUtYnV0dG9uXCIsIHsgYXBwZWFyYW5jZTogXCJ0cmFuc3BhcmVudFwiLCBjbGFzczogQ1NTJDIuZGVsZXRlQ29sb3IsIGRpc2FibGVkOiBub0NvbG9yLCBpY29uU3RhcnQ6IFwibWludXNcIiwga2luZDogXCJuZXV0cmFsXCIsIGxhYmVsOiBtZXNzYWdlcy5kZWxldGVDb2xvciwgb25DbGljazogdGhpcy5kZWxldGVDb2xvciwgc2NhbGU6IHNjYWxlLCB0eXBlOiBcImJ1dHRvblwiIH0pLCBoKFwiY2FsY2l0ZS1idXR0b25cIiwgeyBhcHBlYXJhbmNlOiBcInRyYW5zcGFyZW50XCIsIGNsYXNzOiBDU1MkMi5zYXZlQ29sb3IsIGRpc2FibGVkOiBub0NvbG9yLCBpY29uU3RhcnQ6IFwicGx1c1wiLCBraW5kOiBcIm5ldXRyYWxcIiwgbGFiZWw6IG1lc3NhZ2VzLnNhdmVDb2xvciwgb25DbGljazogdGhpcy5zYXZlQ29sb3IsIHNjYWxlOiBzY2FsZSwgdHlwZTogXCJidXR0b25cIiB9KSkpLCBzYXZlZENvbG9ycy5sZW5ndGggPiAwID8gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDIuc2F2ZWRDb2xvcnMgfSwgW1xuICAgICAgLi4uc2F2ZWRDb2xvcnMubWFwKChjb2xvcikgPT4gKGgoXCJjYWxjaXRlLWNvbG9yLXBpY2tlci1zd2F0Y2hcIiwgeyBjbGFzczogQ1NTJDIuc2F2ZWRDb2xvciwgY29sb3I6IGNvbG9yLCBrZXk6IGNvbG9yLCBvbkNsaWNrOiB0aGlzLmhhbmRsZVNhdmVkQ29sb3JTZWxlY3QsIG9uS2V5RG93bjogdGhpcy5oYW5kbGVTYXZlZENvbG9yS2V5RG93biwgc2NhbGU6IHNjYWxlLCB0YWJJbmRleDogMCB9KSkpXG4gICAgXSkpIDogbnVsbCkpKSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG4gIHNob3dJbmNvbXBhdGlibGVDb2xvcldhcm5pbmcodmFsdWUsIGZvcm1hdCkge1xuICAgIGNvbnNvbGUud2FybihgaWdub3JpbmcgY29sb3IgdmFsdWUgKCR7dmFsdWV9KSBhcyBpdCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoZSBjdXJyZW50IGZvcm1hdCAoJHtmb3JtYXR9KWApO1xuICB9XG4gIHNldE1vZGUoZm9ybWF0LCB3YXJuID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1vZGUgPSBmb3JtYXQgPT09IFwiYXV0b1wiID8gdGhpcy5tb2RlIDogZm9ybWF0O1xuICAgIHRoaXMubW9kZSA9IHRoaXMuZW5zdXJlQ29tcGF0aWJsZU1vZGUobW9kZSwgd2Fybik7XG4gIH1cbiAgZW5zdXJlQ29tcGF0aWJsZU1vZGUobW9kZSwgd2Fybikge1xuICAgIGNvbnN0IHsgYWxwaGFDaGFubmVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGlzQWxwaGFDb21wYXRpYmxlID0gYWxwaGFDb21wYXRpYmxlKG1vZGUpO1xuICAgIGlmIChhbHBoYUNoYW5uZWwgJiYgIWlzQWxwaGFDb21wYXRpYmxlKSB7XG4gICAgICBjb25zdCBhbHBoYU1vZGUgPSB0b0FscGhhTW9kZShtb2RlKTtcbiAgICAgIGlmICh3YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2Fybihgc2V0dGluZyBmb3JtYXQgdG8gKCR7YWxwaGFNb2RlfSkgYXMgdGhlIHByb3ZpZGVkIG9uZSAoJHttb2RlfSkgZG9lcyBub3Qgc3VwcG9ydCBhbHBoYWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFscGhhTW9kZTtcbiAgICB9XG4gICAgaWYgKCFhbHBoYUNoYW5uZWwgJiYgaXNBbHBoYUNvbXBhdGlibGUpIHtcbiAgICAgIGNvbnN0IG5vbkFscGhhTW9kZSA9IHRvTm9uQWxwaGFNb2RlKG1vZGUpO1xuICAgICAgaWYgKHdhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBzZXR0aW5nIGZvcm1hdCB0byAoJHtub25BbHBoYU1vZGV9KSBhcyB0aGUgcHJvdmlkZWQgb25lICgke21vZGV9KSBkb2VzIG5vdCBzdXBwb3J0IGFscGhhYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9uQWxwaGFNb2RlO1xuICAgIH1cbiAgICByZXR1cm4gbW9kZTtcbiAgfVxuICBjYXB0dXJlSHVlU2xpZGVyQ29sb3IoeCkge1xuICAgIGNvbnN0IHsgZGltZW5zaW9uczogeyBzbGlkZXI6IHsgd2lkdGggfSB9IH0gPSB0aGlzO1xuICAgIGNvbnN0IGh1ZSA9ICgzNjAgLyB3aWR0aCkgKiB4O1xuICAgIHRoaXMuaW50ZXJuYWxDb2xvclNldCh0aGlzLmJhc2VDb2xvckZpZWxkQ29sb3IuaHVlKGh1ZSksIGZhbHNlKTtcbiAgfVxuICBjYXB0dXJlT3BhY2l0eVNsaWRlclZhbHVlKHgpIHtcbiAgICBjb25zdCB7IGRpbWVuc2lvbnM6IHsgc2xpZGVyOiB7IHdpZHRoIH0gfSB9ID0gdGhpcztcbiAgICBjb25zdCBhbHBoYSA9IG9wYWNpdHlUb0FscGhhKChPUEFDSVRZX0xJTUlUUy5tYXggLyB3aWR0aCkgKiB4KTtcbiAgICB0aGlzLmludGVybmFsQ29sb3JTZXQodGhpcy5iYXNlQ29sb3JGaWVsZENvbG9yLmFscGhhKGFscGhhKSwgZmFsc2UpO1xuICB9XG4gIGludGVybmFsQ29sb3JTZXQoY29sb3IsIHNraXBFcXVhbCA9IHRydWUsIGNvbnRleHQgPSBcInVzZXItaW50ZXJhY3Rpb25cIikge1xuICAgIGlmIChza2lwRXF1YWwgJiYgY29sb3JFcXVhbChjb2xvciwgdGhpcy5jb2xvcikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbnRlcm5hbENvbG9yVXBkYXRlQ29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnRvVmFsdWUoY29sb3IpO1xuICAgIHRoaXMuaW50ZXJuYWxDb2xvclVwZGF0ZUNvbnRleHQgPSBudWxsO1xuICB9XG4gIHRvVmFsdWUoY29sb3IsIGZvcm1hdCA9IHRoaXMubW9kZSkge1xuICAgIGlmICghY29sb3IpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBoZXhNb2RlID0gXCJoZXhcIjtcbiAgICBpZiAoZm9ybWF0LmluY2x1ZGVzKGhleE1vZGUpKSB7XG4gICAgICBjb25zdCBoYXNBbHBoYSA9IGZvcm1hdCA9PT0gQ1NTQ29sb3JNb2RlLkhFWEE7XG4gICAgICByZXR1cm4gbm9ybWFsaXplSGV4KGhleGlmeShjb2xvci5yb3VuZCgpLCBoYXNBbHBoYSksIGhhc0FscGhhKTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdC5pbmNsdWRlcyhcIi1jc3NcIikpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gY29sb3JbZm9ybWF0LnJlcGxhY2UoXCItY3NzXCIsIFwiXCIpLnJlcGxhY2UoXCJhXCIsIFwiXCIpXSgpLnJvdW5kKCkuc3RyaW5nKCk7XG4gICAgICAvLyBDb2xvciBvbWl0cyBhbHBoYSB2YWx1ZXMgd2hlbiBhbHBoYSBpcyAxXG4gICAgICBjb25zdCBuZWVkVG9JbmplY3RBbHBoYSA9IChmb3JtYXQuZW5kc1dpdGgoXCJhXCIpIHx8IGZvcm1hdC5lbmRzV2l0aChcImEtY3NzXCIpKSAmJiBjb2xvci5hbHBoYSgpID09PSAxO1xuICAgICAgaWYgKG5lZWRUb0luamVjdEFscGhhKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gdmFsdWUuc2xpY2UoMCwgMyk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlLnNsaWNlKDQsIC0xKTtcbiAgICAgICAgcmV0dXJuIGAke21vZGVsfWEoJHt2YWx1ZXN9LCAke2NvbG9yLmFscGhhKCl9KWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGNvbG9yT2JqZWN0ID0gXG4gICAgLyogQ29sb3IoKSBkb2VzIG5vdCBzdXBwb3J0IGhzdmEsIGhzbGEgbm9yIHJnYmEsIHNvIHdlIHVzZSB0aGUgbm9uLWFscGhhIG1vZGUgKi9cbiAgICBjb2xvclt0b05vbkFscGhhTW9kZShmb3JtYXQpXSgpLnJvdW5kKCkub2JqZWN0KCk7XG4gICAgaWYgKGZvcm1hdC5lbmRzV2l0aChcImFcIikpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemVBbHBoYShjb2xvck9iamVjdCk7XG4gICAgfVxuICAgIHJldHVybiBjb2xvck9iamVjdDtcbiAgfVxuICBnZXRTbGlkZXJDYXBTcGFjaW5nKCkge1xuICAgIGNvbnN0IHsgZGltZW5zaW9uczogeyBzbGlkZXI6IHsgaGVpZ2h0IH0sIHRodW1iOiB7IHJhZGl1cyB9IH0gfSA9IHRoaXM7XG4gICAgcmV0dXJuIHJhZGl1cyAqIDIgLSBoZWlnaHQ7XG4gIH1cbiAgdXBkYXRlRGltZW5zaW9ucyhzY2FsZSA9IFwibVwiKSB7XG4gICAgdGhpcy5kaW1lbnNpb25zID0gRElNRU5TSU9OU1tzY2FsZV07XG4gIH1cbiAgZHJhd0NvbG9yRmllbGQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29sb3JGaWVsZFJlbmRlcmluZ0NvbnRleHQ7XG4gICAgY29uc3QgeyBkaW1lbnNpb25zOiB7IGNvbG9yRmllbGQ6IHsgaGVpZ2h0LCB3aWR0aCB9IH0gfSA9IHRoaXM7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmJhc2VDb2xvckZpZWxkQ29sb3JcbiAgICAgIC5oc3YoKVxuICAgICAgLnNhdHVyYXRpb252KDEwMClcbiAgICAgIC52YWx1ZSgxMDApXG4gICAgICAuYWxwaGEoMSlcbiAgICAgIC5zdHJpbmcoKTtcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IHdoaXRlR3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHdpZHRoLCAwKTtcbiAgICB3aGl0ZUdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIik7XG4gICAgd2hpdGVHcmFkaWVudC5hZGRDb2xvclN0b3AoMSwgXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCIpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gd2hpdGVHcmFkaWVudDtcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IGJsYWNrR3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGhlaWdodCk7XG4gICAgYmxhY2tHcmFkaWVudC5hZGRDb2xvclN0b3AoMCwgXCJyZ2JhKDAsMCwwLDApXCIpO1xuICAgIGJsYWNrR3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIFwicmdiYSgwLDAsMCwxKVwiKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGJsYWNrR3JhZGllbnQ7XG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLmRyYXdBY3RpdmVDb2xvckZpZWxkQ29sb3IoKTtcbiAgfVxuICBzZXRDYW52YXNDb250ZXh0U2l6ZShjYW52YXMsIHsgaGVpZ2h0LCB3aWR0aCB9KSB7XG4gICAgaWYgKCFjYW52YXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gICAgY2FudmFzLndpZHRoID0gd2lkdGggKiBkZXZpY2VQaXhlbFJhdGlvO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgKiBkZXZpY2VQaXhlbFJhdGlvO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb250ZXh0LnNjYWxlKGRldmljZVBpeGVsUmF0aW8sIGRldmljZVBpeGVsUmF0aW8pO1xuICB9XG4gIHVwZGF0ZUNhbnZhc1NpemUoY29udGV4dCA9IFwiYWxsXCIpIHtcbiAgICBjb25zdCB7IGRpbWVuc2lvbnMgfSA9IHRoaXM7XG4gICAgaWYgKGNvbnRleHQgPT09IFwiYWxsXCIgfHwgY29udGV4dCA9PT0gXCJjb2xvci1maWVsZFwiKSB7XG4gICAgICB0aGlzLnNldENhbnZhc0NvbnRleHRTaXplKHRoaXMuY29sb3JGaWVsZFJlbmRlcmluZ0NvbnRleHQ/LmNhbnZhcywgZGltZW5zaW9ucy5jb2xvckZpZWxkKTtcbiAgICB9XG4gICAgY29uc3QgYWRqdXN0ZWRTbGlkZXJEaW1lbnNpb25zID0ge1xuICAgICAgd2lkdGg6IGRpbWVuc2lvbnMuc2xpZGVyLndpZHRoLFxuICAgICAgaGVpZ2h0OiBkaW1lbnNpb25zLnNsaWRlci5oZWlnaHQgKyAoZGltZW5zaW9ucy50aHVtYi5yYWRpdXMgLSBkaW1lbnNpb25zLnNsaWRlci5oZWlnaHQgLyAyKSAqIDJcbiAgICB9O1xuICAgIGlmIChjb250ZXh0ID09PSBcImFsbFwiIHx8IGNvbnRleHQgPT09IFwiaHVlLXNsaWRlclwiKSB7XG4gICAgICB0aGlzLnNldENhbnZhc0NvbnRleHRTaXplKHRoaXMuaHVlU2xpZGVyUmVuZGVyaW5nQ29udGV4dD8uY2FudmFzLCBhZGp1c3RlZFNsaWRlckRpbWVuc2lvbnMpO1xuICAgIH1cbiAgICBpZiAoY29udGV4dCA9PT0gXCJhbGxcIiB8fCBjb250ZXh0ID09PSBcIm9wYWNpdHktc2xpZGVyXCIpIHtcbiAgICAgIHRoaXMuc2V0Q2FudmFzQ29udGV4dFNpemUodGhpcy5vcGFjaXR5U2xpZGVyUmVuZGVyaW5nQ29udGV4dD8uY2FudmFzLCBhZGp1c3RlZFNsaWRlckRpbWVuc2lvbnMpO1xuICAgIH1cbiAgfVxuICBkcmF3QWN0aXZlQ29sb3JGaWVsZENvbG9yKCkge1xuICAgIGNvbnN0IHsgY29sb3IgfSA9IHRoaXM7XG4gICAgaWYgKCFjb2xvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoc3ZDb2xvciA9IGNvbG9yLmhzdigpO1xuICAgIGNvbnN0IHsgZGltZW5zaW9uczogeyBjb2xvckZpZWxkOiB7IGhlaWdodCwgd2lkdGggfSwgdGh1bWI6IHsgcmFkaXVzIH0gfSB9ID0gdGhpcztcbiAgICBjb25zdCB4ID0gaHN2Q29sb3Iuc2F0dXJhdGlvbnYoKSAvIChIU1ZfTElNSVRTLnMgLyB3aWR0aCk7XG4gICAgY29uc3QgeSA9IGhlaWdodCAtIGhzdkNvbG9yLnZhbHVlKCkgLyAoSFNWX0xJTUlUUy52IC8gaGVpZ2h0KTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5jb2xvckZpZWxkU2NvcGVMZWZ0ID0geDtcbiAgICAgIHRoaXMuY29sb3JGaWVsZFNjb3BlVG9wID0geTtcbiAgICB9KTtcbiAgICB0aGlzLmRyYXdUaHVtYih0aGlzLmNvbG9yRmllbGRSZW5kZXJpbmdDb250ZXh0LCByYWRpdXMsIHgsIHksIGhzdkNvbG9yKTtcbiAgfVxuICBkcmF3VGh1bWIoY29udGV4dCwgcmFkaXVzLCB4LCB5LCBjb2xvcikge1xuICAgIGNvbnN0IHN0YXJ0QW5nbGUgPSAwO1xuICAgIGNvbnN0IGVuZEFuZ2xlID0gMiAqIE1hdGguUEk7XG4gICAgY29uc3Qgb3V0bGluZVdpZHRoID0gMTtcbiAgICByYWRpdXMgPSByYWRpdXMgLSBvdXRsaW5lV2lkdGg7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmFyYyh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwiI2ZmZlwiO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4zKVwiO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gb3V0bGluZVdpZHRoO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmFyYyh4LCB5LCByYWRpdXMgLSAzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvci5yZ2IoKS5hbHBoYSgxKS5zdHJpbmcoKTtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgfVxuICBkcmF3QWN0aXZlSHVlU2xpZGVyQ29sb3IoKSB7XG4gICAgY29uc3QgeyBjb2xvciB9ID0gdGhpcztcbiAgICBpZiAoIWNvbG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhzdkNvbG9yID0gY29sb3IuaHN2KCkuc2F0dXJhdGlvbnYoMTAwKS52YWx1ZSgxMDApO1xuICAgIGNvbnN0IHsgZGltZW5zaW9uczogeyBzbGlkZXI6IHsgaGVpZ2h0LCB3aWR0aCB9LCB0aHVtYjogeyByYWRpdXMgfSB9IH0gPSB0aGlzO1xuICAgIGNvbnN0IHggPSBoc3ZDb2xvci5odWUoKSAvICgzNjAgLyB3aWR0aCk7XG4gICAgY29uc3QgeSA9IHJhZGl1cyAtIGhlaWdodCAvIDIgKyBoZWlnaHQgLyAyO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmh1ZVNjb3BlTGVmdCA9IHg7XG4gICAgfSk7XG4gICAgdGhpcy5kcmF3VGh1bWIodGhpcy5odWVTbGlkZXJSZW5kZXJpbmdDb250ZXh0LCByYWRpdXMsIHgsIHksIGhzdkNvbG9yKTtcbiAgfVxuICBkcmF3SHVlU2xpZGVyKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmh1ZVNsaWRlclJlbmRlcmluZ0NvbnRleHQ7XG4gICAgY29uc3QgeyBkaW1lbnNpb25zOiB7IHNsaWRlcjogeyBoZWlnaHQsIHdpZHRoIH0sIHRodW1iOiB7IHJhZGl1czogdGh1bWJSYWRpdXMgfSB9IH0gPSB0aGlzO1xuICAgIGNvbnN0IHggPSAwO1xuICAgIGNvbnN0IHkgPSB0aHVtYlJhZGl1cyAtIGhlaWdodCAvIDI7XG4gICAgY29uc3QgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHdpZHRoLCAwKTtcbiAgICBjb25zdCBodWVTbGlkZXJDb2xvclN0b3BLZXl3b3JkcyA9IFtcInJlZFwiLCBcInllbGxvd1wiLCBcImxpbWVcIiwgXCJjeWFuXCIsIFwiYmx1ZVwiLCBcIm1hZ2VudGFcIiwgXCJyZWRcIl07XG4gICAgY29uc3Qgb2Zmc2V0ID0gMSAvIChodWVTbGlkZXJDb2xvclN0b3BLZXl3b3Jkcy5sZW5ndGggLSAxKTtcbiAgICBsZXQgY3VycmVudE9mZnNldCA9IDA7XG4gICAgaHVlU2xpZGVyQ29sb3JTdG9wS2V5d29yZHMuZm9yRWFjaCgoa2V5d29yZCkgPT4ge1xuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKGN1cnJlbnRPZmZzZXQsIGNvbG9yKGtleXdvcmQpLnN0cmluZygpKTtcbiAgICAgIGN1cnJlbnRPZmZzZXQgKz0gb2Zmc2V0O1xuICAgIH0pO1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQgKyB0aGlzLmdldFNsaWRlckNhcFNwYWNpbmcoKSAqIDIpO1xuICAgIHRoaXMuZHJhd1NsaWRlclBhdGgoY29udGV4dCwgaGVpZ2h0LCB3aWR0aCwgeCwgeSk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuMylcIjtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB0aGlzLmRyYXdBY3RpdmVIdWVTbGlkZXJDb2xvcigpO1xuICB9XG4gIGRyYXdPcGFjaXR5U2xpZGVyKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLm9wYWNpdHlTbGlkZXJSZW5kZXJpbmdDb250ZXh0O1xuICAgIGNvbnN0IHsgYmFzZUNvbG9yRmllbGRDb2xvcjogcHJldmlvdXNDb2xvciwgZGltZW5zaW9uczogeyBzbGlkZXI6IHsgaGVpZ2h0LCB3aWR0aCB9LCB0aHVtYjogeyByYWRpdXM6IHRodW1iUmFkaXVzIH0gfSB9ID0gdGhpcztcbiAgICBjb25zdCB4ID0gMDtcbiAgICBjb25zdCB5ID0gdGh1bWJSYWRpdXMgLSBoZWlnaHQgLyAyO1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQgKyB0aGlzLmdldFNsaWRlckNhcFNwYWNpbmcoKSAqIDIpO1xuICAgIGNvbnN0IGdyYWRpZW50ID0gY29udGV4dC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5LCB3aWR0aCwgMCk7XG4gICAgY29uc3Qgc3RhcnRDb2xvciA9IHByZXZpb3VzQ29sb3IucmdiKCkuYWxwaGEoMCk7XG4gICAgY29uc3QgbWlkQ29sb3IgPSBwcmV2aW91c0NvbG9yLnJnYigpLmFscGhhKDAuNSk7XG4gICAgY29uc3QgZW5kQ29sb3IgPSBwcmV2aW91c0NvbG9yLnJnYigpLmFscGhhKDEpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBzdGFydENvbG9yLnN0cmluZygpKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC41LCBtaWRDb2xvci5zdHJpbmcoKSk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGVuZENvbG9yLnN0cmluZygpKTtcbiAgICB0aGlzLmRyYXdTbGlkZXJQYXRoKGNvbnRleHQsIGhlaWdodCwgd2lkdGgsIHgsIHkpO1xuICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVBhdHRlcm4odGhpcy5nZXRDaGVja2VyZWRCYWNrZ3JvdW5kUGF0dGVybigpLCBcInJlcGVhdFwiKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHBhdHRlcm47XG4gICAgY29udGV4dC5maWxsKCk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuMylcIjtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB0aGlzLmRyYXdBY3RpdmVPcGFjaXR5U2xpZGVyQ29sb3IoKTtcbiAgfVxuICBkcmF3U2xpZGVyUGF0aChjb250ZXh0LCBoZWlnaHQsIHdpZHRoLCB4LCB5KSB7XG4gICAgY29uc3QgcmFkaXVzID0gaGVpZ2h0IC8gMiArIDE7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0Lm1vdmVUbyh4ICsgcmFkaXVzLCB5KTtcbiAgICBjb250ZXh0LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpdXMsIHkpO1xuICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGl1cyk7XG4gICAgY29udGV4dC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpdXMsIHkgKyBoZWlnaHQpO1xuICAgIGNvbnRleHQubGluZVRvKHggKyByYWRpdXMsIHkgKyBoZWlnaHQpO1xuICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjb250ZXh0LmxpbmVUbyh4LCB5ICsgcmFkaXVzKTtcbiAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGl1cywgeSk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfVxuICBnZXRDaGVja2VyZWRCYWNrZ3JvdW5kUGF0dGVybigpIHtcbiAgICBpZiAodGhpcy5jaGVja2VyUGF0dGVybikge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tlclBhdHRlcm47XG4gICAgfVxuICAgIGNvbnN0IHBhdHRlcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHBhdHRlcm4ud2lkdGggPSAxMDtcbiAgICBwYXR0ZXJuLmhlaWdodCA9IDEwO1xuICAgIGNvbnN0IHBhdHRlcm5Db250ZXh0ID0gcGF0dGVybi5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgcGF0dGVybkNvbnRleHQuZmlsbFN0eWxlID0gXCIjY2NjXCI7XG4gICAgcGF0dGVybkNvbnRleHQuZmlsbFJlY3QoMCwgMCwgMTAsIDEwKTtcbiAgICBwYXR0ZXJuQ29udGV4dC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcbiAgICBwYXR0ZXJuQ29udGV4dC5maWxsUmVjdCgwLCAwLCA1LCA1KTtcbiAgICBwYXR0ZXJuQ29udGV4dC5maWxsUmVjdCg1LCA1LCA1LCA1KTtcbiAgICB0aGlzLmNoZWNrZXJQYXR0ZXJuID0gcGF0dGVybjtcbiAgICByZXR1cm4gcGF0dGVybjtcbiAgfVxuICBkcmF3QWN0aXZlT3BhY2l0eVNsaWRlckNvbG9yKCkge1xuICAgIGNvbnN0IHsgY29sb3IgfSA9IHRoaXM7XG4gICAgaWYgKCFjb2xvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoc3ZDb2xvciA9IGNvbG9yO1xuICAgIGNvbnN0IHsgZGltZW5zaW9uczogeyBzbGlkZXI6IHsgd2lkdGggfSwgdGh1bWI6IHsgcmFkaXVzIH0gfSB9ID0gdGhpcztcbiAgICBjb25zdCB4ID0gYWxwaGFUb09wYWNpdHkoaHN2Q29sb3IuYWxwaGEoKSkgLyAoT1BBQ0lUWV9MSU1JVFMubWF4IC8gd2lkdGgpO1xuICAgIGNvbnN0IHkgPSByYWRpdXM7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMub3BhY2l0eVNjb3BlTGVmdCA9IHg7XG4gICAgfSk7XG4gICAgdGhpcy5kcmF3VGh1bWIodGhpcy5vcGFjaXR5U2xpZGVyUmVuZGVyaW5nQ29udGV4dCwgcmFkaXVzLCB4LCB5LCBoc3ZDb2xvcik7XG4gIH1cbiAgdXBkYXRlQ29sb3JGcm9tQ2hhbm5lbHMoY2hhbm5lbHMpIHtcbiAgICB0aGlzLmludGVybmFsQ29sb3JTZXQoY29sb3IoY2hhbm5lbHMsIHRoaXMuY2hhbm5lbE1vZGUpKTtcbiAgfVxuICB1cGRhdGVDaGFubmVsc0Zyb21Db2xvcihjb2xvcikge1xuICAgIHRoaXMuY2hhbm5lbHMgPSBjb2xvciA/IHRoaXMudG9DaGFubmVscyhjb2xvcikgOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG4gIH1cbiAgdG9DaGFubmVscyhjb2xvcikge1xuICAgIGNvbnN0IHsgY2hhbm5lbE1vZGUgfSA9IHRoaXM7XG4gICAgY29uc3QgY2hhbm5lbHMgPSBjb2xvcltjaGFubmVsTW9kZV0oKVxuICAgICAgLmFycmF5KClcbiAgICAgIC5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaXNBbHBoYSA9IGluZGV4ID09PSAzO1xuICAgICAgcmV0dXJuIGlzQWxwaGEgPyB2YWx1ZSA6IE1hdGguZmxvb3IodmFsdWUpO1xuICAgIH0pO1xuICAgIGlmIChjaGFubmVscy5sZW5ndGggPT09IDMpIHtcbiAgICAgIGNoYW5uZWxzLnB1c2goMSk7IC8vIENvbG9yIG9taXRzIGFscGhhIHdoZW4gMVxuICAgIH1cbiAgICByZXR1cm4gY2hhbm5lbHM7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImFscGhhQ2hhbm5lbFwiOiBbXCJoYW5kbGVBbHBoYUNoYW5uZWxDaGFuZ2VcIl0sXG4gICAgXCJjb2xvclwiOiBbXCJoYW5kbGVDb2xvckNoYW5nZVwiXSxcbiAgICBcImZvcm1hdFwiOiBbXCJoYW5kbGVGb3JtYXRDaGFuZ2VcIl0sXG4gICAgXCJzY2FsZVwiOiBbXCJoYW5kbGVTY2FsZUNoYW5nZVwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcInZhbHVlXCI6IFtcImhhbmRsZVZhbHVlQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG59O1xuQ29sb3JQaWNrZXIuc3R5bGUgPSBjb2xvclBpY2tlckNzcztcblxuY29uc3QgQ1NTJDEgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgaGV4SW5wdXQ6IFwiaGV4LWlucHV0XCIsXG4gIG9wYWNpdHlJbnB1dDogXCJvcGFjaXR5LWlucHV0XCJcbn07XG5cbmNvbnN0IGNvbG9yUGlja2VySGV4SW5wdXRDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdHtkaXNwbGF5OmJsb2NrfS5jb250YWluZXJ7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7ZmxleC13cmFwOm5vd3JhcDthbGlnbi1pdGVtczpjZW50ZXJ9LmhleC1pbnB1dHtmbGV4LWdyb3c6MTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9Lm9wYWNpdHktaW5wdXR7aW5saW5lLXNpemU6NjhweDttYXJnaW4taW5saW5lLXN0YXJ0Oi0xcHh9Omhvc3QoW3NjYWxlPXNdKSAuY29udGFpbmVye2ZsZXgtd3JhcDp3cmFwO3Jvdy1nYXA6MC4xMjVyZW19Omhvc3QoW3NjYWxlPXNdKSAub3BhY2l0eS1pbnB1dHtpbmxpbmUtc2l6ZTp1bnNldDttYXJnaW4taW5saW5lLXN0YXJ0OnVuc2V0fTpob3N0KFtzY2FsZT1sXSkgLm9wYWNpdHktaW5wdXR7aW5saW5lLXNpemU6ODhweH1cIjtcblxuY29uc3QgREVGQVVMVF9DT0xPUiA9IGNvbG9yKCk7XG5jb25zdCBDb2xvclBpY2tlckhleElucHV0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVDb2xvclBpY2tlckhleElucHV0Q2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlQ29sb3JQaWNrZXJIZXhJbnB1dENoYW5nZVwiLCA2KTtcbiAgICB0aGlzLm9uSGV4SW5wdXRCbHVyID0gKCkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuaGV4SW5wdXROb2RlO1xuICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IG5vZGUudmFsdWU7XG4gICAgICBjb25zdCBoZXggPSBgIyR7aW5wdXRWYWx1ZX1gO1xuICAgICAgY29uc3QgeyBhbGxvd0VtcHR5LCBpbnRlcm5hbENvbG9yIH0gPSB0aGlzO1xuICAgICAgY29uc3Qgd2lsbENsZWFyVmFsdWUgPSBhbGxvd0VtcHR5ICYmICFpbnB1dFZhbHVlO1xuICAgICAgY29uc3QgaXNMb25naGFuZCA9IGlzTG9uZ2hhbmRIZXgoaGV4KTtcbiAgICAgIC8vIGVuc3VyZSBtb2RpZmllZCBwYXN0ZWQgaGV4IHZhbHVlcyBhcmUgY29tbWl0dGVkIHNpbmNlIHdlIHByZXZlbnQgZGVmYXVsdCB0byByZW1vdmUgdGhlICMgY2hhci5cbiAgICAgIHRoaXMub25IZXhJbnB1dENoYW5nZSgpO1xuICAgICAgaWYgKHdpbGxDbGVhclZhbHVlIHx8IChpc1ZhbGlkSGV4KGhleCkgJiYgaXNMb25naGFuZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gbWFuaXB1bGF0aW5nIERPTSBkaXJlY3RseSBzaW5jZSByZXJlbmRlciBkb2Vzbid0IHVwZGF0ZSBpbnB1dCB2YWx1ZVxuICAgICAgbm9kZS52YWx1ZSA9XG4gICAgICAgIGFsbG93RW1wdHkgJiYgIWludGVybmFsQ29sb3JcbiAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICA6IHRoaXMuZm9ybWF0SGV4Rm9ySW50ZXJuYWxJbnB1dChyZ2JUb0hleChcbiAgICAgICAgICAvLyBhbHdheXMgZGlzcGxheSBoZXggaW5wdXQgaW4gUlJHR0JCIGZvcm1hdFxuICAgICAgICAgIGludGVybmFsQ29sb3Iub2JqZWN0KCkpKTtcbiAgICB9O1xuICAgIHRoaXMub25PcGFjaXR5SW5wdXRCbHVyID0gKCkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMub3BhY2l0eUlucHV0Tm9kZTtcbiAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBub2RlLnZhbHVlO1xuICAgICAgY29uc3QgeyBhbGxvd0VtcHR5LCBpbnRlcm5hbENvbG9yIH0gPSB0aGlzO1xuICAgICAgY29uc3Qgd2lsbENsZWFyVmFsdWUgPSBhbGxvd0VtcHR5ICYmICFpbnB1dFZhbHVlO1xuICAgICAgaWYgKHdpbGxDbGVhclZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIG1hbmlwdWxhdGluZyBET00gZGlyZWN0bHkgc2luY2UgcmVyZW5kZXIgZG9lc24ndCB1cGRhdGUgaW5wdXQgdmFsdWVcbiAgICAgIG5vZGUudmFsdWUgPVxuICAgICAgICBhbGxvd0VtcHR5ICYmICFpbnRlcm5hbENvbG9yID8gXCJcIiA6IHRoaXMuZm9ybWF0T3BhY2l0eUZvckludGVybmFsSW5wdXQoaW50ZXJuYWxDb2xvcik7XG4gICAgfTtcbiAgICB0aGlzLm9uSGV4SW5wdXRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmhleElucHV0Tm9kZS52YWx1ZTtcbiAgICAgIGxldCB2YWx1ZSA9IG5vZGVWYWx1ZTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplSGV4KHZhbHVlLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IHByZXNlcnZlRXhpc3RpbmdBbHBoYSA9IGlzVmFsaWRIZXgobm9ybWFsaXplZCkgJiYgdGhpcy5hbHBoYUNoYW5uZWw7XG4gICAgICAgIGlmIChwcmVzZXJ2ZUV4aXN0aW5nQWxwaGEgJiYgdGhpcy5pbnRlcm5hbENvbG9yKSB7XG4gICAgICAgICAgY29uc3QgYWxwaGFIZXggPSBub3JtYWxpemVIZXgodGhpcy5pbnRlcm5hbENvbG9yLmhleGEoKSwgdHJ1ZSkuc2xpY2UoLTIpO1xuICAgICAgICAgIHZhbHVlID0gYCR7bm9ybWFsaXplZCArIGFscGhhSGV4fWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuaW50ZXJuYWxTZXRWYWx1ZSh2YWx1ZSwgdGhpcy52YWx1ZSk7XG4gICAgfTtcbiAgICB0aGlzLm9uT3BhY2l0eUlucHV0Q2hhbmdlID0gKCkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMub3BhY2l0eUlucHV0Tm9kZTtcbiAgICAgIGxldCB2YWx1ZTtcbiAgICAgIGlmICghbm9kZS52YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IG5vZGUudmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgYWxwaGEgPSBvcGFjaXR5VG9BbHBoYShOdW1iZXIobm9kZS52YWx1ZSkpO1xuICAgICAgICB2YWx1ZSA9IHRoaXMuaW50ZXJuYWxDb2xvcj8uYWxwaGEoYWxwaGEpLmhleGEoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW50ZXJuYWxTZXRWYWx1ZSh2YWx1ZSwgdGhpcy52YWx1ZSk7XG4gICAgfTtcbiAgICB0aGlzLm9uSW5wdXRLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGFsdEtleSwgY3RybEtleSwgbWV0YUtleSwgc2hpZnRLZXkgfSA9IGV2ZW50O1xuICAgICAgY29uc3QgeyBhbHBoYUNoYW5uZWwsIGhleElucHV0Tm9kZSwgaW50ZXJuYWxDb2xvciwgdmFsdWUgfSA9IHRoaXM7XG4gICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgIGlmIChrZXkgPT09IFwiVGFiXCIgfHwga2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgaWYgKGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhoZXhJbnB1dE5vZGUpKSB7XG4gICAgICAgICAgdGhpcy5vbkhleElucHV0Q2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5vbk9wYWNpdHlJbnB1dENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNOdWRnZUtleSA9IGtleSA9PT0gXCJBcnJvd0Rvd25cIiB8fCBrZXkgPT09IFwiQXJyb3dVcFwiO1xuICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgaWYgKGlzTnVkZ2VLZXkpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuaW50ZXJuYWxTZXRWYWx1ZSh0aGlzLnByZXZpb3VzTm9uTnVsbFZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0ga2V5ID09PSBcIkFycm93VXBcIiA/IDEgOiAtMTtcbiAgICAgICAgY29uc3QgYnVtcCA9IHNoaWZ0S2V5ID8gMTAgOiAxO1xuICAgICAgICB0aGlzLmludGVybmFsU2V0VmFsdWUoaGV4aWZ5KHRoaXMubnVkZ2VSR0JDaGFubmVscyhpbnRlcm5hbENvbG9yLCBidW1wICogZGlyZWN0aW9uLCBjb21wb3NlZFBhdGguaW5jbHVkZXMoaGV4SW5wdXROb2RlKSA/IFwicmdiXCIgOiBcImFcIiksIGFscGhhQ2hhbm5lbCksIG9sZFZhbHVlKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgd2l0aE1vZGlmaWVycyA9IGFsdEtleSB8fCBjdHJsS2V5IHx8IG1ldGFLZXk7XG4gICAgICBjb25zdCBzaW5nbGVDaGFyID0ga2V5Lmxlbmd0aCA9PT0gMTtcbiAgICAgIGNvbnN0IHZhbGlkSGV4Q2hhciA9IGhleENoYXIudGVzdChrZXkpO1xuICAgICAgaWYgKHNpbmdsZUNoYXIgJiYgIXdpdGhNb2RpZmllcnMgJiYgIXZhbGlkSGV4Q2hhcikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5vbkhleElucHV0UGFzdGUgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGhleCA9IGV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcInRleHRcIik7XG4gICAgICBpZiAoaXNWYWxpZEhleChoZXgpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuaGV4SW5wdXROb2RlLnZhbHVlID0gaGV4LnNsaWNlKDEpO1xuICAgICAgICB0aGlzLmhleElucHV0Tm9kZS5pbnRlcm5hbFN5bmNDaGlsZEVsVmFsdWUoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucHJldmlvdXNOb25OdWxsVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIHRoaXMuc3RvcmVIZXhJbnB1dFJlZiA9IChub2RlKSA9PiB7XG4gICAgICB0aGlzLmhleElucHV0Tm9kZSA9IG5vZGU7XG4gICAgfTtcbiAgICB0aGlzLnN0b3JlT3BhY2l0eUlucHV0UmVmID0gKG5vZGUpID0+IHtcbiAgICAgIHRoaXMub3BhY2l0eUlucHV0Tm9kZSA9IG5vZGU7XG4gICAgfTtcbiAgICB0aGlzLmFsbG93RW1wdHkgPSBmYWxzZTtcbiAgICB0aGlzLmFscGhhQ2hhbm5lbCA9IGZhbHNlO1xuICAgIHRoaXMuaGV4TGFiZWwgPSBcIkhleFwiO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudmFsdWUgPSBub3JtYWxpemVIZXgoaGV4aWZ5KERFRkFVTFRfQ09MT1IsIHRoaXMuYWxwaGFDaGFubmVsKSwgdGhpcy5hbHBoYUNoYW5uZWwsIHRydWUpO1xuICAgIHRoaXMuaW50ZXJuYWxDb2xvciA9IERFRkFVTFRfQ09MT1I7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29uc3QgeyBhbGxvd0VtcHR5LCBhbHBoYUNoYW5uZWwsIHZhbHVlIH0gPSB0aGlzO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUhleCh2YWx1ZSwgYWxwaGFDaGFubmVsKTtcbiAgICAgIGlmIChpc1ZhbGlkSGV4KG5vcm1hbGl6ZWQsIGFscGhhQ2hhbm5lbCkpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFNldFZhbHVlKG5vcm1hbGl6ZWQsIG5vcm1hbGl6ZWQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGFsbG93RW1wdHkpIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxTZXRWYWx1ZShudWxsLCBudWxsLCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgaGFuZGxlVmFsdWVDaGFuZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgdGhpcy5pbnRlcm5hbFNldFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgZmFsc2UpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFscGhhQ2hhbm5lbCwgaGV4TGFiZWwsIGludGVybmFsQ29sb3IsIG1lc3NhZ2VzLCBzY2FsZSwgdmFsdWUgfSA9IHRoaXM7XG4gICAgY29uc3QgaGV4SW5wdXRWYWx1ZSA9IHRoaXMuZm9ybWF0SGV4Rm9ySW50ZXJuYWxJbnB1dCh2YWx1ZSk7XG4gICAgY29uc3Qgb3BhY2l0eUlucHV0VmFsdWUgPSB0aGlzLmZvcm1hdE9wYWNpdHlGb3JJbnRlcm5hbElucHV0KGludGVybmFsQ29sb3IpO1xuICAgIGNvbnN0IGlucHV0U2NhbGUgPSBzY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMS5jb250YWluZXIgfSwgaChcImNhbGNpdGUtaW5wdXRcIiwgeyBjbGFzczogQ1NTJDEuaGV4SW5wdXQsIGxhYmVsOiBtZXNzYWdlcz8uaGV4IHx8IGhleExhYmVsLCBtYXhMZW5ndGg6IDYsIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sIG9uQ2FsY2l0ZUlucHV0Q2hhbmdlOiB0aGlzLm9uSGV4SW5wdXRDaGFuZ2UsIG9uQ2FsY2l0ZUludGVybmFsSW5wdXRCbHVyOiB0aGlzLm9uSGV4SW5wdXRCbHVyLCBvbktleURvd246IHRoaXMub25JbnB1dEtleURvd24sIG9uUGFzdGU6IHRoaXMub25IZXhJbnB1dFBhc3RlLCBwcmVmaXhUZXh0OiBcIiNcIiwgc2NhbGU6IGlucHV0U2NhbGUsIHZhbHVlOiBoZXhJbnB1dFZhbHVlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc3RvcmVIZXhJbnB1dFJlZiB9KSwgYWxwaGFDaGFubmVsID8gKGgoXCJjYWxjaXRlLWlucHV0LW51bWJlclwiLCB7IGNsYXNzOiBDU1MkMS5vcGFjaXR5SW5wdXQsIGtleTogXCJvcGFjaXR5LWlucHV0XCIsIGxhYmVsOiBtZXNzYWdlcz8ub3BhY2l0eSwgbWF4OiBPUEFDSVRZX0xJTUlUUy5tYXgsIG1heExlbmd0aDogMywgbWluOiBPUEFDSVRZX0xJTUlUUy5taW4sIG51bWJlckJ1dHRvblR5cGU6IFwibm9uZVwiLCBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLCBvbkNhbGNpdGVJbnB1dE51bWJlckNoYW5nZTogdGhpcy5vbk9wYWNpdHlJbnB1dENoYW5nZSwgb25DYWxjaXRlSW50ZXJuYWxJbnB1dE51bWJlckJsdXI6IHRoaXMub25PcGFjaXR5SW5wdXRCbHVyLCBvbktleURvd246IHRoaXMub25JbnB1dEtleURvd24sIHNjYWxlOiBpbnB1dFNjYWxlLCBzdWZmaXhUZXh0OiBcIiVcIiwgdmFsdWU6IG9wYWNpdHlJbnB1dFZhbHVlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc3RvcmVPcGFjaXR5SW5wdXRSZWYgfSkpIDogbnVsbCkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIGZvY3VzRWxlbWVudCh0aGlzLmhleElucHV0Tm9kZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaW50ZXJuYWxTZXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsIGVtaXQgPSB0cnVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCB7IGFscGhhQ2hhbm5lbCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVIZXgodmFsdWUsIGFscGhhQ2hhbm5lbCwgYWxwaGFDaGFubmVsKTtcbiAgICAgIGlmIChpc1ZhbGlkSGV4KG5vcm1hbGl6ZWQsIGFscGhhQ2hhbm5lbCkpIHtcbiAgICAgICAgY29uc3QgeyBpbnRlcm5hbENvbG9yOiBjdXJyZW50Q29sb3IgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG5leHRDb2xvciA9IGNvbG9yKG5vcm1hbGl6ZWQpO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkTG9uZ2hhbmQgPSBub3JtYWxpemVIZXgoaGV4aWZ5KG5leHRDb2xvciwgYWxwaGFDaGFubmVsKSwgYWxwaGFDaGFubmVsKTtcbiAgICAgICAgY29uc3QgY2hhbmdlZCA9ICFjdXJyZW50Q29sb3IgfHxcbiAgICAgICAgICBub3JtYWxpemVkTG9uZ2hhbmQgIT09IG5vcm1hbGl6ZUhleChoZXhpZnkoY3VycmVudENvbG9yLCBhbHBoYUNoYW5uZWwpLCBhbHBoYUNoYW5uZWwpO1xuICAgICAgICB0aGlzLmludGVybmFsQ29sb3IgPSBuZXh0Q29sb3I7XG4gICAgICAgIHRoaXMucHJldmlvdXNOb25OdWxsVmFsdWUgPSBub3JtYWxpemVkTG9uZ2hhbmQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSBub3JtYWxpemVkTG9uZ2hhbmQ7XG4gICAgICAgIGlmIChjaGFuZ2VkICYmIGVtaXQpIHtcbiAgICAgICAgICB0aGlzLmNhbGNpdGVDb2xvclBpY2tlckhleElucHV0Q2hhbmdlLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuYWxsb3dFbXB0eSkge1xuICAgICAgdGhpcy5pbnRlcm5hbENvbG9yID0gbnVsbDtcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgaWYgKGVtaXQpIHtcbiAgICAgICAgdGhpcy5jYWxjaXRlQ29sb3JQaWNrZXJIZXhJbnB1dENoYW5nZS5lbWl0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBvbGRWYWx1ZTtcbiAgfVxuICBmb3JtYXRIZXhGb3JJbnRlcm5hbElucHV0KGhleCkge1xuICAgIHJldHVybiBoZXggPyBoZXgucmVwbGFjZShcIiNcIiwgXCJcIikuc2xpY2UoMCwgNikgOiBcIlwiO1xuICB9XG4gIGZvcm1hdE9wYWNpdHlGb3JJbnRlcm5hbElucHV0KGNvbG9yKSB7XG4gICAgcmV0dXJuIGNvbG9yID8gYCR7YWxwaGFUb09wYWNpdHkoY29sb3IuYWxwaGEoKSl9YCA6IFwiXCI7XG4gIH1cbiAgbnVkZ2VSR0JDaGFubmVscyhjb2xvciQxLCBhbW91bnQsIGNvbnRleHQpIHtcbiAgICBsZXQgbnVkZ2VkQ2hhbm5lbHM7XG4gICAgY29uc3QgY2hhbm5lbHMgPSBjb2xvciQxLmFycmF5KCk7XG4gICAgY29uc3QgcmdiQ2hhbm5lbHMgPSBjaGFubmVscy5zbGljZSgwLCAzKTtcbiAgICBpZiAoY29udGV4dCA9PT0gXCJyZ2JcIikge1xuICAgICAgY29uc3QgbnVkZ2VkUkdCQ2hhbm5lbHMgPSByZ2JDaGFubmVscy5tYXAoKGNoYW5uZWwpID0+IGNoYW5uZWwgKyBhbW91bnQpO1xuICAgICAgbnVkZ2VkQ2hhbm5lbHMgPSBbXG4gICAgICAgIC4uLm51ZGdlZFJHQkNoYW5uZWxzLFxuICAgICAgICB0aGlzLmFscGhhQ2hhbm5lbCA/IGNoYW5uZWxzWzNdIDogdW5kZWZpbmVkXG4gICAgICBdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IG51ZGdlZEFscGhhID0gb3BhY2l0eVRvQWxwaGEoYWxwaGFUb09wYWNpdHkoY29sb3IkMS5hbHBoYSgpKSArIGFtb3VudCk7XG4gICAgICBudWRnZWRDaGFubmVscyA9IFsuLi5yZ2JDaGFubmVscywgbnVkZ2VkQWxwaGFdO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3IobnVkZ2VkQ2hhbm5lbHMpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcInZhbHVlXCI6IFtcImhhbmRsZVZhbHVlQ2hhbmdlXCJdXG4gIH07IH1cbn07XG5Db2xvclBpY2tlckhleElucHV0LnN0eWxlID0gY29sb3JQaWNrZXJIZXhJbnB1dENzcztcblxuY29uc3QgQ1NTID0ge1xuICBzd2F0Y2g6IFwic3dhdGNoXCIsXG4gIG5vQ29sb3JTd2F0Y2g6IFwic3dhdGNoLS1uby1jb2xvclwiLFxuICBjaGVja2VyOiBcImNoZWNrZXJcIlxufTtcbmNvbnN0IENPTE9SUyA9IHtcbiAgYm9yZGVyTGlnaHQ6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCIsXG4gIGJvcmRlckRhcms6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KVwiXG59O1xuY29uc3QgY2hlY2tlclNxdWFyZVNpemUgPSA0O1xuY29uc3QgQ0hFQ0tFUl9ESU1FTlNJT05TID0ge1xuICBzcXVhcmVTaXplOiBjaGVja2VyU3F1YXJlU2l6ZSxcbiAgc2l6ZTogY2hlY2tlclNxdWFyZVNpemUgKiAyXG59O1xuXG5jb25zdCBjb2xvclBpY2tlclN3YXRjaENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWZsZXh9Omhvc3QoW3NjYWxlPXNdKXtibG9jay1zaXplOjEuMjVyZW07aW5saW5lLXNpemU6MS4yNXJlbX06aG9zdChbc2NhbGU9bV0pe2Jsb2NrLXNpemU6MS41cmVtO2lubGluZS1zaXplOjEuNXJlbX06aG9zdChbc2NhbGU9bF0pe2Jsb2NrLXNpemU6MnJlbTtpbmxpbmUtc2l6ZToycmVtfS5zd2F0Y2h7b3ZlcmZsb3c6aGlkZGVuO2Jsb2NrLXNpemU6aW5oZXJpdDtpbmxpbmUtc2l6ZTppbmhlcml0fS5zd2F0Y2ggcmVjdHt0cmFuc2l0aW9uLXByb3BlcnR5OmFsbDt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSl9LnN3YXRjaC0tbm8tY29sb3IgcmVjdHtmaWxsOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX0uc3dhdGNoLS1uby1jb2xvciBsaW5le3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcil9LmNoZWNrZXJ7ZmlsbDojY2FjYWNhfVwiO1xuXG5jb25zdCBDb2xvclBpY2tlclN3YXRjaCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmNvbG9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgfVxuICBoYW5kbGVDb2xvckNoYW5nZShjb2xvciQxKSB7XG4gICAgdGhpcy5pbnRlcm5hbENvbG9yID0gY29sb3IkMSA/IGNvbG9yKGNvbG9yJDEpIDogbnVsbDtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICB0aGlzLmhhbmRsZUNvbG9yQ2hhbmdlKHRoaXMuY29sb3IpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpc0VtcHR5ID0gIXRoaXMuaW50ZXJuYWxDb2xvcjtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgW0NTUy5zd2F0Y2hdOiB0cnVlLFxuICAgICAgW0NTUy5ub0NvbG9yU3dhdGNoXTogaXNFbXB0eVxuICAgIH07XG4gICAgcmV0dXJuIChoKFwic3ZnXCIsIHsgY2xhc3M6IGNsYXNzZXMsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSwgdGhpcy5yZW5kZXJTd2F0Y2goKSkpO1xuICB9XG4gIHJlbmRlclN3YXRjaCgpIHtcbiAgICBjb25zdCB7IGFjdGl2ZSwgZWwsIGludGVybmFsQ29sb3IgfSA9IHRoaXM7XG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gYWN0aXZlID8gXCIxMDAlXCIgOiBcIjBcIjtcbiAgICBjb25zdCB0aGVtZSA9IGdldE1vZGVOYW1lKGVsKTtcbiAgICBjb25zdCBib3JkZXJDb2xvciA9IHRoZW1lID09PSBcImxpZ2h0XCIgPyBDT0xPUlMuYm9yZGVyTGlnaHQgOiBDT0xPUlMuYm9yZGVyRGFyaztcbiAgICBjb25zdCBjb21tb25Td2F0Y2hQcm9wcyA9IHtcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICByeDogYm9yZGVyUmFkaXVzLFxuICAgICAgc3Ryb2tlOiBib3JkZXJDb2xvcixcbiAgICAgIC8vIHN0cm9rZS13aWR0aCBhbmQgY2xpcC1wYXRoIGFyZSBuZWVkZWQgdG8gaGlkZSBvdmVyZmxvd2luZyBwb3J0aW9uIG9mIHN0cm9rZVxuICAgICAgLy8gc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83MjczMzQ2LzE5NDIxNlxuICAgICAgLy8gdXNpbmcgYXR0cmlidXRlIHRvIHdvcmsgYXJvdW5kIFN0ZW5jaWwgdXNpbmcgdGhlIHByb3AgbmFtZSB2cyB0aGUgYXR0cmlidXRlIHdoZW4gcmVuZGVyaW5nXG4gICAgICBbXCJzdHJva2Utd2lkdGhcIl06IFwiMlwiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgfTtcbiAgICBjb25zdCBpc0VtcHR5ID0gIWludGVybmFsQ29sb3I7XG4gICAgaWYgKGlzRW1wdHkpIHtcbiAgICAgIHJldHVybiAoaChGcmFnbWVudCwgbnVsbCwgaChcImNsaXBQYXRoXCIsIHsgaWQ6IFwic2hhcGVcIiB9LCBoKFwicmVjdFwiLCB7IGhlaWdodDogXCIxMDAlXCIsIHJ4OiBib3JkZXJSYWRpdXMsIHdpZHRoOiBcIjEwMCVcIiB9KSksIGgoXCJyZWN0XCIsIHsgXCJjbGlwLXBhdGhcIjogYGluc2V0KDAgcm91bmQgJHtib3JkZXJSYWRpdXN9KWAsIHJ4OiBib3JkZXJSYWRpdXMsIC4uLmNvbW1vblN3YXRjaFByb3BzIH0pLCBoKFwibGluZVwiLCB7IFwiY2xpcC1wYXRoXCI6IFwidXJsKCNzaGFwZSlcIiwgXCJzdHJva2Utd2lkdGhcIjogXCIzXCIsIHgxOiBcIjEwMCVcIiwgeDI6IFwiMFwiLCB5MTogXCIwXCIsIHkyOiBcIjEwMCVcIiB9KSkpO1xuICAgIH1cbiAgICBjb25zdCBhbHBoYSA9IGludGVybmFsQ29sb3IuYWxwaGEoKTtcbiAgICBjb25zdCBoZXggPSBoZXhpZnkoaW50ZXJuYWxDb2xvcik7XG4gICAgY29uc3QgaGV4YSA9IGhleGlmeShpbnRlcm5hbENvbG9yLCBhbHBoYSA8IDEpO1xuICAgIHJldHVybiAoaChGcmFnbWVudCwgbnVsbCwgaChcInRpdGxlXCIsIG51bGwsIGhleGEpLCBoKFwiZGVmc1wiLCBudWxsLCBoKFwicGF0dGVyblwiLCB7IGhlaWdodDogQ0hFQ0tFUl9ESU1FTlNJT05TLnNpemUsIGlkOiBcImNoZWNrZXJcIiwgcGF0dGVyblVuaXRzOiBcInVzZXJTcGFjZU9uVXNlXCIsIHdpZHRoOiBDSEVDS0VSX0RJTUVOU0lPTlMuc2l6ZSwgeDogXCIwXCIsIHk6IFwiMFwiIH0sIGgoXCJyZWN0XCIsIHsgY2xhc3M6IENTUy5jaGVja2VyLCBoZWlnaHQ6IENIRUNLRVJfRElNRU5TSU9OUy5zcXVhcmVTaXplLCB3aWR0aDogQ0hFQ0tFUl9ESU1FTlNJT05TLnNxdWFyZVNpemUsIHg6IFwiMFwiLCB5OiBcIjBcIiB9KSwgaChcInJlY3RcIiwgeyBjbGFzczogQ1NTLmNoZWNrZXIsIGhlaWdodDogQ0hFQ0tFUl9ESU1FTlNJT05TLnNxdWFyZVNpemUsIHdpZHRoOiBDSEVDS0VSX0RJTUVOU0lPTlMuc3F1YXJlU2l6ZSwgeDogQ0hFQ0tFUl9ESU1FTlNJT05TLnNxdWFyZVNpemUsIHk6IENIRUNLRVJfRElNRU5TSU9OUy5zcXVhcmVTaXplIH0pKSksIGgoXCJyZWN0XCIsIHsgZmlsbDogXCJ1cmwoI2NoZWNrZXIpXCIsIGhlaWdodDogXCIxMDAlXCIsIHJ4OiBib3JkZXJSYWRpdXMsIHdpZHRoOiBcIjEwMCVcIiB9KSwgaChcInJlY3RcIiwgeyBmaWxsOiBoZXgsIHN0eWxlOiB7XG4gICAgICAgIFwiY2xpcC1wYXRoXCI6IGFscGhhIDwgMSA/IFwicG9seWdvbigxMDAlIDAsIDAgMCwgMCAxMDAlKVwiIDogYGluc2V0KDAgcm91bmQgJHtib3JkZXJSYWRpdXN9KWBcbiAgICAgIH0sIC4uLmNvbW1vblN3YXRjaFByb3BzIH0pLCBhbHBoYSA8IDEgPyAoaChcInJlY3RcIiwgeyBmaWxsOiBoZXhhLCBrZXk6IFwib3BhY2l0eS1maWxsXCIsIHN0eWxlOiB7IFwiY2xpcC1wYXRoXCI6IFwicG9seWdvbigxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKVwiIH0sIC4uLmNvbW1vblN3YXRjaFByb3BzIH0pKSA6IG51bGwpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJjb2xvclwiOiBbXCJoYW5kbGVDb2xvckNoYW5nZVwiXVxuICB9OyB9XG59O1xuQ29sb3JQaWNrZXJTd2F0Y2guc3R5bGUgPSBjb2xvclBpY2tlclN3YXRjaENzcztcblxuZXhwb3J0IHsgQ29sb3JQaWNrZXIgYXMgY2FsY2l0ZV9jb2xvcl9waWNrZXIsIENvbG9yUGlja2VySGV4SW5wdXQgYXMgY2FsY2l0ZV9jb2xvcl9waWNrZXJfaGV4X2lucHV0LCBDb2xvclBpY2tlclN3YXRjaCBhcyBjYWxjaXRlX2NvbG9yX3BpY2tlcl9zd2F0Y2ggfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5mdW5jdGlvbiBpbnRlcmNlcHRlZENsaWNrKCkge1xuICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzO1xuICBpZiAoIWRpc2FibGVkKSB7XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrLmNhbGwodGhpcyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZXZlbnQpIHtcbiAgLy8gcHJldmVudCBjbGljayBmcm9tIG1vdmluZyBmb2N1cyBvbiBob3N0XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5jb25zdCBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzID0gW1wibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJdO1xuZnVuY3Rpb24gb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAvLyBwcmV2ZW50IGRpc2FsbG93ZWQgbW91c2UgZXZlbnRzIGZyb20gYmVpbmcgZW1pdHRlZCBvbiB0aGUgZGlzYWJsZWQgaG9zdCAocGVyIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvaHRtbC9pc3N1ZXMvNTg4NilcbiAgLy/imqAgd2UgZ2VuZXJhbGx5IGF2b2lkIHN0b3BwaW5nIHByb3BhZ2F0aW9uIG9mIGV2ZW50cywgYnV0IHRoaXMgaXMgbmVlZGVkIHRvIGFkaGVyZSB0byB0aGUgaW50ZW5kZWQgc3BlYyBjaGFuZ2VzIGFib3ZlIOKaoFxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBjYXB0dXJlT25seU9wdGlvbnMgPSB7IGNhcHR1cmU6IHRydWUgfTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXBkYXRlcyB0aGUgaG9zdCBlbGVtZW50IHRvIHByZXZlbnQga2V5Ym9hcmQgaW50ZXJhY3Rpb24gb24gaXRzIHN1YnRyZWUgYW5kIHNldHMgdGhlIGFwcHJvcHJpYXRlIGFyaWEgYXR0cmlidXRlIGZvciBhY2Nlc3NpYmlsaXR5LlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRSZW5kZXJgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqICoqTm90ZXMqKlxuICpcbiAqIHRoaXMgdXRpbCBpcyBub3QgbmVlZGVkIGZvciBzaW1wbGUgY29tcG9uZW50cyB3aG9zZSByb290IGVsZW1lbnQgb3IgZWxlbWVudHMgYXJlIGFuIGludGVyYWN0aXZlIGNvbXBvbmVudCAoY3VzdG9tIGVsZW1lbnQgb3IgbmF0aXZlIGNvbnRyb2wpLiBGb3IgdGhvc2UgY2FzZXMsIHNldCB0aGUgYGRpc2FibGVkYCBwcm9wcyBvbiB0aGUgcm9vdCBjb21wb25lbnRzIGluc3RlYWQuXG4gKiB0ZWNobmljYWxseSwgdXNlcnMgY2FuIG92ZXJyaWRlIGB0YWJpbmRleGAgYW5kIHJlc3RvcmUga2V5Ym9hcmQgbmF2aWdhdGlvbiwgYnV0IHRoaXMgd2lsbCBiZSBjb25zaWRlcmVkIHVzZXIgZXJyb3JcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gaG9zdElzVGFiYmFibGVcbiAqL1xuZnVuY3Rpb24gdXBkYXRlSG9zdEludGVyYWN0aW9uKGNvbXBvbmVudCwgaG9zdElzVGFiYmFibGUgPSBmYWxzZSkge1xuICBpZiAoY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgIGlmIChjb21wb25lbnQuZWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgICBjb21wb25lbnQuZWwuY2xpY2sgPSBpbnRlcmNlcHRlZENsaWNrO1xuICAgIGNvbXBvbmVudC5lbC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBjb21wb25lbnQuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb21wb25lbnQuZWwuY2xpY2sgPSBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2s7XG4gIGNvbXBvbmVudC5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gY29tcG9uZW50LmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50LCBjYXB0dXJlT25seU9wdGlvbnMpKTtcbiAgaWYgKHR5cGVvZiBob3N0SXNUYWJiYWJsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIGhvc3RJc1RhYmJhYmxlLmNhbGwoY29tcG9uZW50KSA/IFwiMFwiIDogXCItMVwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gdHJ1ZSkge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IGZhbHNlKSB7XG4gICAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xuICB9XG4gIGVsc2UgO1xuICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiKTtcbn1cblxuZXhwb3J0IHsgdXBkYXRlSG9zdEludGVyYWN0aW9uIGFzIHUgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5jb25zdCByZXNvbHZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIHNldHMgdXAgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGFiaWxpdHkgdG8ga25vdyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnRXaWxsTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0VXBMb2FkYWJsZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcHJvbWlzZU1hcC5zZXQoY29tcG9uZW50LCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZU1hcC5zZXQoY29tcG9uZW50LCByZXNvbHZlKSkpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGxldHMgdGhlIGxvYWRhYmxlIGNvbXBvbmVudCBrbm93IHRoYXQgaXQgaXMgbm93IGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnREaWRMb2FkKCk6IHZvaWQge1xuICogICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldENvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmVzb2x2ZU1hcC5nZXQoY29tcG9uZW50KSgpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSBhIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBzdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkKS5cbiAqXG4gKiBSZXF1aXJlcyBcInNldFVwTG9hZGFibGVDb21wb25lbnRcIiBhbmQgXCJzZXRDb21wb25lbnRMb2FkZWRcIiB0byBiZSBjYWxsZWQgZmlyc3QuXG4gKlxuICogQSBjb21wb25lbnQgZGV2ZWxvcGVyIGNhbiBhd2FpdCB0aGlzIG1ldGhvZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIGFueSBsb2dpYyB0aGF0IHJlcXVpcmVzIGEgY29tcG9uZW50IHRvIGJlIGxvYWRlZCBmaXJzdC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIHNldEZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmZ1bmN0aW9uIGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmV0dXJuIHByb21pc2VNYXAuZ2V0KGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IHNldENvbXBvbmVudExvYWRlZCBhcyBhLCBjb21wb25lbnRMb2FkZWQgYXMgYywgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCBhcyBzIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuY29uc3QgY2xhbXAgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChtaW4sIE1hdGgubWluKHZhbHVlLCBtYXgpKTtcbmNvbnN0IGRlY2ltYWxOdW1iZXJSZWdleCA9IG5ldyBSZWdFeHAoLyg/OlxcLihcXGQrKSk/KD86W2VFXShbKy1dP1xcZCspKT8kLyk7XG5jb25zdCBkZWNpbWFsUGxhY2VzID0gKHZhbHVlKSA9PiB7XG4gIGNvbnN0IG1hdGNoID0gKFwiXCIgKyB2YWx1ZSkubWF0Y2goZGVjaW1hbE51bWJlclJlZ2V4KTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHJldHVybiBNYXRoLm1heCgwLCBcbiAgLy8gTnVtYmVyIG9mIGRpZ2l0cyByaWdodCBvZiBkZWNpbWFsIHBvaW50LlxuICAobWF0Y2hbMV0gPyBtYXRjaFsxXS5sZW5ndGggOiAwKSAtXG4gICAgLy8gQWRqdXN0IGZvciBzY2llbnRpZmljIG5vdGF0aW9uLlxuICAgIChtYXRjaFsyXSA/ICttYXRjaFsyXSA6IDApKTtcbn07XG5cbmV4cG9ydCB7IGNsYW1wIGFzIGMsIGRlY2ltYWxQbGFjZXMgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IGcgYXMgZ2V0QXNzZXRQYXRoIH0gZnJvbSAnLi9pbmRleC1hNjc2MDI4Ni5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFN1cHBvcnRlZExvY2FsZSB9IGZyb20gJy4vbG9jYWxlLWIzYzQ0ZGRhLmpzJztcblxuY29uc3QgY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlID0ge307XG5hc3luYyBmdW5jdGlvbiBnZXRNZXNzYWdlQnVuZGxlKGxhbmcsIGNvbXBvbmVudCkge1xuICBjb25zdCBrZXkgPSBgJHtjb21wb25lbnR9XyR7bGFuZ31gO1xuICBpZiAoY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV0pIHtcbiAgICByZXR1cm4gY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV07XG4gIH1cbiAgY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV0gPSBmZXRjaChnZXRBc3NldFBhdGgoYC4vYXNzZXRzLyR7Y29tcG9uZW50fS90OW4vbWVzc2FnZXNfJHtsYW5nfS5qc29uYCkpXG4gICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3AuanNvbigpO1xuICB9KVxuICAgIC5jYXRjaCgoKSA9PiB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCkpO1xuICByZXR1cm4gY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV07XG59XG5mdW5jdGlvbiB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJjb3VsZCBub3QgZmV0Y2ggY29tcG9uZW50IG1lc3NhZ2UgYnVuZGxlXCIpO1xufVxuZnVuY3Rpb24gbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm1lc3NhZ2VzID0ge1xuICAgIC4uLmNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMsXG4gICAgLi4uY29tcG9uZW50Lm1lc3NhZ2VPdmVycmlkZXNcbiAgfTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgdGhlIG1lc3NhZ2VzIHVzZWQgYnkgdGhlIGNvbXBvbmVudC4gSXQgc2hvdWxkIGJlIGF3YWl0ZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5hc3luYyBmdW5jdGlvbiBzZXRVcE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGNvbXBvbmVudC5lZmZlY3RpdmVMb2NhbGUpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG5hc3luYyBmdW5jdGlvbiBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBjb25zdCB7IGVsIH0gPSBjb21wb25lbnQ7XG4gIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IHRhZy5yZXBsYWNlKFwiY2FsY2l0ZS1cIiwgXCJcIik7XG4gIHJldHVybiBnZXRNZXNzYWdlQnVuZGxlKGdldFN1cHBvcnRlZExvY2FsZShsYW5nLCBcInQ5blwiKSwgY29tcG9uZW50TmFtZSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBtdXN0IGJlIHNldCB1cCBmb3IgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIGRlZmF1bHQgbWVzc2FnZSBidW5kbGUgaWYgdGhlIGxvY2FsZSBjaGFuZ2VzLlxuICpcbiAqIEl0IGNhbiBiZSBzZXQgdXAgaW4gKiplaXRoZXIqKiBvZiB0aGUgZm9sbG93aW5nIHdheXM6XG4gKlxuICogMS4gY2FsbGVkIGZyb20gYExvY2FsaXplZENvbXBvbmVudGAncyBgb25Mb2NhbGVDaGFuZ2VgIG1ldGhvZCBvclxuICogMi4gY2FsbGVkIGZyb20gYSB3YXRjaGVyIGNvbmZpZ3VyZWQgdG8gd2F0Y2ggYExvY2FsaXplZENvbXBvbmVudGAncyBgZWZmZWN0aXZlTG9jYWxlYCBwcm9wXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGxhbmdcbiAqL1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZyk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogKipOb3RlKio6IHRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgYExvY2FsaXplZENvbXBvbmVudGAncyBgY29ubmVjdExvY2FsaXplZGAgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgdGVhcnMgZG93biBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgbWVyZ2VNZXNzYWdlcyh0aGlzKTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdE1lc3NhZ2VzIGFzIGMsIGRpc2Nvbm5lY3RNZXNzYWdlcyBhcyBkLCBzZXRVcE1lc3NhZ2VzIGFzIHMsIHVwZGF0ZU1lc3NhZ2VzIGFzIHUgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBkIGFzIGRlYm91bmNlLCBpIGFzIGlzT2JqZWN0IH0gZnJvbSAnLi9kZWJvdW5jZS1iOTA3MjQyMi5qcyc7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbmV4cG9ydCB7IHRocm90dGxlIGFzIHQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5jb25zdCBoZXhDaGFyID0gL15bMC05QS1GXSQvaTtcbmNvbnN0IHNob3J0aGFuZEhleCA9IC9eI1swLTlBLUZdezN9JC9pO1xuY29uc3QgbG9uZ2hhbmRIZXggPSAvXiNbMC05QS1GXXs2fSQvaTtcbmNvbnN0IHNob3J0aGFuZEhleFdpdGhBbHBoYSA9IC9eI1swLTlBLUZdezR9JC9pO1xuY29uc3QgbG9uZ2hhbmRIZXhXaXRoQWxwaGEgPSAvXiNbMC05QS1GXXs4fSQvaTtcbmNvbnN0IGFscGhhVG9PcGFjaXR5ID0gKGFscGhhKSA9PiBOdW1iZXIoKGFscGhhICogMTAwKS50b0ZpeGVkKCkpO1xuY29uc3Qgb3BhY2l0eVRvQWxwaGEgPSAob3BhY2l0eSkgPT4gTnVtYmVyKChvcGFjaXR5IC8gMTAwKS50b0ZpeGVkKDIpKTtcbmZ1bmN0aW9uIGlzVmFsaWRIZXgoaGV4LCBoYXNBbHBoYSA9IGZhbHNlKSB7XG4gIHJldHVybiBpc1Nob3J0aGFuZEhleChoZXgsIGhhc0FscGhhKSB8fCBpc0xvbmdoYW5kSGV4KGhleCwgaGFzQWxwaGEpO1xufVxuZnVuY3Rpb24gZXZhbHVhdGVIZXgoaGV4LCBsZW5ndGgsIHBhdHRlcm4pIHtcbiAgaWYgKCFoZXgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IGxlbmd0aCAmJiBwYXR0ZXJuLnRlc3QoaGV4KTtcbn1cbmZ1bmN0aW9uIGlzU2hvcnRoYW5kSGV4KGhleCwgaGFzQWxwaGEgPSBmYWxzZSkge1xuICBjb25zdCBoZXhMZW5ndGggPSBoYXNBbHBoYSA/IDUgOiA0O1xuICBjb25zdCBoZXhQYXR0ZXJuID0gaGFzQWxwaGEgPyBzaG9ydGhhbmRIZXhXaXRoQWxwaGEgOiBzaG9ydGhhbmRIZXg7XG4gIHJldHVybiBldmFsdWF0ZUhleChoZXgsIGhleExlbmd0aCwgaGV4UGF0dGVybik7XG59XG5mdW5jdGlvbiBpc0xvbmdoYW5kSGV4KGhleCwgaGFzQWxwaGEgPSBmYWxzZSkge1xuICBjb25zdCBoZXhMZW5ndGggPSBoYXNBbHBoYSA/IDkgOiA3O1xuICBjb25zdCBoZXhQYXR0ZXJuID0gaGFzQWxwaGEgPyBsb25naGFuZEhleFdpdGhBbHBoYSA6IGxvbmdoYW5kSGV4O1xuICByZXR1cm4gZXZhbHVhdGVIZXgoaGV4LCBoZXhMZW5ndGgsIGhleFBhdHRlcm4pO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplSGV4KGhleCwgaGFzQWxwaGEgPSBmYWxzZSwgY29udmVydEZyb21IZXhUb0hleGEgPSBmYWxzZSkge1xuICBoZXggPSBoZXgudG9Mb3dlckNhc2UoKTtcbiAgaWYgKCFoZXguc3RhcnRzV2l0aChcIiNcIikpIHtcbiAgICBoZXggPSBgIyR7aGV4fWA7XG4gIH1cbiAgaWYgKGlzU2hvcnRoYW5kSGV4KGhleCwgaGFzQWxwaGEpKSB7XG4gICAgcmV0dXJuIHJnYlRvSGV4KGhleFRvUkdCKGhleCwgaGFzQWxwaGEpKTtcbiAgfVxuICBpZiAoaGFzQWxwaGEgJiYgY29udmVydEZyb21IZXhUb0hleGEgJiYgaXNWYWxpZEhleChoZXgsIGZhbHNlIC8qIHdlIG9ubHkgY2FyZSBhYm91dCBSR0IgaGV4IGZvciBjb252ZXJzaW9uICovKSkge1xuICAgIGNvbnN0IGlzU2hvcnRoYW5kID0gaXNTaG9ydGhhbmRIZXgoaGV4LCBmYWxzZSk7XG4gICAgcmV0dXJuIHJnYlRvSGV4KGhleFRvUkdCKGAke2hleH0ke2lzU2hvcnRoYW5kID8gXCJmXCIgOiBcImZmXCJ9YCwgdHJ1ZSkpO1xuICB9XG4gIHJldHVybiBoZXg7XG59XG5mdW5jdGlvbiBoZXhpZnkoY29sb3IsIGhhc0FscGhhID0gZmFsc2UpIHtcbiAgcmV0dXJuIGhhc0FscGhhID8gY29sb3IuaGV4YSgpIDogY29sb3IuaGV4KCk7XG59XG5mdW5jdGlvbiByZ2JUb0hleChjb2xvcikge1xuICBjb25zdCB7IHIsIGcsIGIgfSA9IGNvbG9yO1xuICBjb25zdCByQ2hhcnMgPSBudW1Ub0hleChyKTtcbiAgY29uc3QgZ0NoYXJzID0gbnVtVG9IZXgoZyk7XG4gIGNvbnN0IGJDaGFycyA9IG51bVRvSGV4KGIpO1xuICBjb25zdCBhbHBoYUNoYXJzID0gXCJhXCIgaW4gY29sb3IgPyBudW1Ub0hleChjb2xvci5hICogMjU1KSA6IFwiXCI7XG4gIHJldHVybiBgIyR7ckNoYXJzfSR7Z0NoYXJzfSR7YkNoYXJzfSR7YWxwaGFDaGFyc31gLnRvTG93ZXJDYXNlKCk7XG59XG5mdW5jdGlvbiBudW1Ub0hleChudW0pIHtcbiAgcmV0dXJuIG51bS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplQWxwaGEoY29sb3JPYmplY3QpIHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHsgLi4uY29sb3JPYmplY3QsIGE6IGNvbG9yT2JqZWN0LmFscGhhID8/IDEgLyogQ29sb3IoKSB3aWxsIG9taXQgYWxwaGEgaWYgMSAqLyB9O1xuICBkZWxldGUgbm9ybWFsaXplZC5hbHBoYTtcbiAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG59XG5mdW5jdGlvbiBub3JtYWxpemVDb2xvcihhbHBoYUNvbG9yT2JqZWN0KSB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSB7IC4uLmFscGhhQ29sb3JPYmplY3QsIGFscGhhOiBhbHBoYUNvbG9yT2JqZWN0LmEgPz8gMSB9O1xuICBkZWxldGUgbm9ybWFsaXplZC5hO1xuICByZXR1cm4gbm9ybWFsaXplZDtcbn1cbmZ1bmN0aW9uIGhleFRvUkdCKGhleCwgaGFzQWxwaGEgPSBmYWxzZSkge1xuICBpZiAoIWlzVmFsaWRIZXgoaGV4LCBoYXNBbHBoYSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBoZXggPSBoZXgucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gIGxldCByLCBnLCBiLCBhO1xuICBjb25zdCBpc1Nob3J0aGFuZCA9IGhleC5sZW5ndGggPT09IDMgfHwgaGV4Lmxlbmd0aCA9PT0gNDtcbiAgaWYgKGlzU2hvcnRoYW5kKSB7XG4gICAgY29uc3QgW2ZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGhdID0gaGV4LnNwbGl0KFwiXCIpO1xuICAgIHIgPSBwYXJzZUludChgJHtmaXJzdH0ke2ZpcnN0fWAsIDE2KTtcbiAgICBnID0gcGFyc2VJbnQoYCR7c2Vjb25kfSR7c2Vjb25kfWAsIDE2KTtcbiAgICBiID0gcGFyc2VJbnQoYCR7dGhpcmR9JHt0aGlyZH1gLCAxNik7XG4gICAgYSA9IHBhcnNlSW50KGAke2ZvdXJ0aH0ke2ZvdXJ0aH1gLCAxNikgLyAyNTU7XG4gIH1cbiAgZWxzZSB7XG4gICAgciA9IHBhcnNlSW50KGhleC5zbGljZSgwLCAyKSwgMTYpO1xuICAgIGcgPSBwYXJzZUludChoZXguc2xpY2UoMiwgNCksIDE2KTtcbiAgICBiID0gcGFyc2VJbnQoaGV4LnNsaWNlKDQsIDYpLCAxNik7XG4gICAgYSA9IHBhcnNlSW50KGhleC5zbGljZSg2LCA4KSwgMTYpIC8gMjU1O1xuICB9XG4gIHJldHVybiBpc05hTihhKSA/IHsgciwgZywgYiB9IDogeyByLCBnLCBiLCBhIH07XG59XG4vLyB0aGVzZSB1dGlscyBhbGxvdyB1c2VycyB0byBwYXNzIGVudW0gdmFsdWVzIGFzIHN0cmluZ3Mgd2l0aG91dCBoYXZpbmcgdG8gYWNjZXNzIHRoZSBlbnVtXG4vLyBiYXNlZCBvbiB0aGUgYXBwcm9hY2ggc3VnZ2VzdGVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTc2OTAjaXNzdWVjb21tZW50LTMyMTM2NTc1OSxcbmNvbnN0IGVudW1pZnkgPSAoeCkgPT4geDtcbmNvbnN0IENTU0NvbG9yTW9kZSA9IGVudW1pZnkoe1xuICBIRVg6IFwiaGV4XCIsXG4gIEhFWEE6IFwiaGV4YVwiLFxuICBSR0JfQ1NTOiBcInJnYi1jc3NcIixcbiAgUkdCQV9DU1M6IFwicmdiYS1jc3NcIixcbiAgSFNMX0NTUzogXCJoc2wtY3NzXCIsXG4gIEhTTEFfQ1NTOiBcImhzbGEtY3NzXCJcbn0pO1xuY29uc3QgT2JqZWN0Q29sb3JNb2RlID0gZW51bWlmeSh7XG4gIFJHQjogXCJyZ2JcIixcbiAgUkdCQTogXCJyZ2JhXCIsXG4gIEhTTDogXCJoc2xcIixcbiAgSFNMQTogXCJoc2xhXCIsXG4gIEhTVjogXCJoc3ZcIixcbiAgSFNWQTogXCJoc3ZhXCJcbn0pO1xuZnVuY3Rpb24gcGFyc2VNb2RlKGNvbG9yVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBjb2xvclZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgaWYgKGNvbG9yVmFsdWUuc3RhcnRzV2l0aChcIiNcIikpIHtcbiAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBjb2xvclZhbHVlO1xuICAgICAgaWYgKGxlbmd0aCA9PT0gNCB8fCBsZW5ndGggPT09IDcpIHtcbiAgICAgICAgcmV0dXJuIENTU0NvbG9yTW9kZS5IRVg7XG4gICAgICB9XG4gICAgICBpZiAobGVuZ3RoID09PSA1IHx8IGxlbmd0aCA9PT0gOSkge1xuICAgICAgICByZXR1cm4gQ1NTQ29sb3JNb2RlLkhFWEE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb2xvclZhbHVlLnN0YXJ0c1dpdGgoXCJyZ2JhKFwiKSkge1xuICAgICAgcmV0dXJuIENTU0NvbG9yTW9kZS5SR0JBX0NTUztcbiAgICB9XG4gICAgaWYgKGNvbG9yVmFsdWUuc3RhcnRzV2l0aChcInJnYihcIikpIHtcbiAgICAgIHJldHVybiBDU1NDb2xvck1vZGUuUkdCX0NTUztcbiAgICB9XG4gICAgaWYgKGNvbG9yVmFsdWUuc3RhcnRzV2l0aChcImhzbChcIikpIHtcbiAgICAgIHJldHVybiBDU1NDb2xvck1vZGUuSFNMX0NTUztcbiAgICB9XG4gICAgaWYgKGNvbG9yVmFsdWUuc3RhcnRzV2l0aChcImhzbGEoXCIpKSB7XG4gICAgICByZXR1cm4gQ1NTQ29sb3JNb2RlLkhTTEFfQ1NTO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIGNvbG9yVmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICBpZiAoaGFzQ2hhbm5lbHMoY29sb3JWYWx1ZSwgXCJyXCIsIFwiZ1wiLCBcImJcIikpIHtcbiAgICAgIHJldHVybiBoYXNDaGFubmVscyhjb2xvclZhbHVlLCBcImFcIikgPyBPYmplY3RDb2xvck1vZGUuUkdCQSA6IE9iamVjdENvbG9yTW9kZS5SR0I7XG4gICAgfVxuICAgIGlmIChoYXNDaGFubmVscyhjb2xvclZhbHVlLCBcImhcIiwgXCJzXCIsIFwibFwiKSkge1xuICAgICAgcmV0dXJuIGhhc0NoYW5uZWxzKGNvbG9yVmFsdWUsIFwiYVwiKSA/IE9iamVjdENvbG9yTW9kZS5IU0xBIDogT2JqZWN0Q29sb3JNb2RlLkhTTDtcbiAgICB9XG4gICAgaWYgKGhhc0NoYW5uZWxzKGNvbG9yVmFsdWUsIFwiaFwiLCBcInNcIiwgXCJ2XCIpKSB7XG4gICAgICByZXR1cm4gaGFzQ2hhbm5lbHMoY29sb3JWYWx1ZSwgXCJhXCIpID8gT2JqZWN0Q29sb3JNb2RlLkhTVkEgOiBPYmplY3RDb2xvck1vZGUuSFNWO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIGhhc0NoYW5uZWxzKGNvbG9yT2JqZWN0LCAuLi5jaGFubmVscykge1xuICByZXR1cm4gY2hhbm5lbHMuZXZlcnkoKGNoYW5uZWwpID0+IGNoYW5uZWwgJiYgY29sb3JPYmplY3QgJiYgYCR7Y2hhbm5lbH1gIGluIGNvbG9yT2JqZWN0KTtcbn1cbmZ1bmN0aW9uIGNvbG9yRXF1YWwodmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIHZhbHVlMT8ucmdiKCkuYXJyYXkoKS50b1N0cmluZygpID09PSB2YWx1ZTI/LnJnYigpLmFycmF5KCkudG9TdHJpbmcoKTtcbn1cbmZ1bmN0aW9uIGFscGhhQ29tcGF0aWJsZShtb2RlKSB7XG4gIHJldHVybiAobW9kZSA9PT0gQ1NTQ29sb3JNb2RlLkhFWEEgfHxcbiAgICBtb2RlID09PSBDU1NDb2xvck1vZGUuUkdCQV9DU1MgfHxcbiAgICBtb2RlID09PSBDU1NDb2xvck1vZGUuSFNMQV9DU1MgfHxcbiAgICBtb2RlID09PSBPYmplY3RDb2xvck1vZGUuUkdCQSB8fFxuICAgIG1vZGUgPT09IE9iamVjdENvbG9yTW9kZS5IU0xBIHx8XG4gICAgbW9kZSA9PT0gT2JqZWN0Q29sb3JNb2RlLkhTVkEpO1xufVxuZnVuY3Rpb24gdG9BbHBoYU1vZGUobW9kZSkge1xuICBjb25zdCBhbHBoYU1vZGUgPSBtb2RlID09PSBDU1NDb2xvck1vZGUuSEVYXG4gICAgPyBDU1NDb2xvck1vZGUuSEVYQVxuICAgIDogbW9kZSA9PT0gQ1NTQ29sb3JNb2RlLlJHQl9DU1NcbiAgICAgID8gQ1NTQ29sb3JNb2RlLlJHQkFfQ1NTXG4gICAgICA6IG1vZGUgPT09IENTU0NvbG9yTW9kZS5IU0xfQ1NTXG4gICAgICAgID8gQ1NTQ29sb3JNb2RlLkhTTEFfQ1NTXG4gICAgICAgIDogbW9kZSA9PT0gT2JqZWN0Q29sb3JNb2RlLlJHQlxuICAgICAgICAgID8gT2JqZWN0Q29sb3JNb2RlLlJHQkFcbiAgICAgICAgICA6IG1vZGUgPT09IE9iamVjdENvbG9yTW9kZS5IU0xcbiAgICAgICAgICAgID8gT2JqZWN0Q29sb3JNb2RlLkhTTEFcbiAgICAgICAgICAgIDogbW9kZSA9PT0gT2JqZWN0Q29sb3JNb2RlLkhTVlxuICAgICAgICAgICAgICA/IE9iamVjdENvbG9yTW9kZS5IU1ZBXG4gICAgICAgICAgICAgIDogbW9kZTtcbiAgcmV0dXJuIGFscGhhTW9kZTtcbn1cbmZ1bmN0aW9uIHRvTm9uQWxwaGFNb2RlKG1vZGUpIHtcbiAgY29uc3Qgbm9uQWxwaGFNb2RlID0gbW9kZSA9PT0gQ1NTQ29sb3JNb2RlLkhFWEFcbiAgICA/IENTU0NvbG9yTW9kZS5IRVhcbiAgICA6IG1vZGUgPT09IENTU0NvbG9yTW9kZS5SR0JBX0NTU1xuICAgICAgPyBDU1NDb2xvck1vZGUuUkdCX0NTU1xuICAgICAgOiBtb2RlID09PSBDU1NDb2xvck1vZGUuSFNMQV9DU1NcbiAgICAgICAgPyBDU1NDb2xvck1vZGUuSFNMX0NTU1xuICAgICAgICA6IG1vZGUgPT09IE9iamVjdENvbG9yTW9kZS5SR0JBXG4gICAgICAgICAgPyBPYmplY3RDb2xvck1vZGUuUkdCXG4gICAgICAgICAgOiBtb2RlID09PSBPYmplY3RDb2xvck1vZGUuSFNMQVxuICAgICAgICAgICAgPyBPYmplY3RDb2xvck1vZGUuSFNMXG4gICAgICAgICAgICA6IG1vZGUgPT09IE9iamVjdENvbG9yTW9kZS5IU1ZBXG4gICAgICAgICAgICAgID8gT2JqZWN0Q29sb3JNb2RlLkhTVlxuICAgICAgICAgICAgICA6IG1vZGU7XG4gIHJldHVybiBub25BbHBoYU1vZGU7XG59XG5cbmV4cG9ydCB7IENTU0NvbG9yTW9kZSBhcyBDLCBoZXhpZnkgYXMgYSwgYWxwaGFUb09wYWNpdHkgYXMgYiwgYWxwaGFDb21wYXRpYmxlIGFzIGMsIGNvbG9yRXF1YWwgYXMgZCwgbm9ybWFsaXplQWxwaGEgYXMgZSwgdG9BbHBoYU1vZGUgYXMgZiwgbm9ybWFsaXplQ29sb3IgYXMgZywgaGV4VG9SR0IgYXMgaCwgaXNWYWxpZEhleCBhcyBpLCBpc0xvbmdoYW5kSGV4IGFzIGosIGhleENoYXIgYXMgaywgbm9ybWFsaXplSGV4IGFzIG4sIG9wYWNpdHlUb0FscGhhIGFzIG8sIHBhcnNlTW9kZSBhcyBwLCByZ2JUb0hleCBhcyByLCB0b05vbkFscGhhTW9kZSBhcyB0IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=