System.register(["jimu-core/react","jimu-arcgis","jimu-ui","esri/layers/FeatureLayer","esri/layers/Layer","esri/Basemap","esri/identity/OAuthInfo","esri/identity/IdentityManager","esri/widgets/LayerList","jimu-ui/basic/color-picker","esri/Color","esri/renderers/SimpleRenderer","esri/symbols/SimpleMarkerSymbol","esri/core/reactiveUtils"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_Layer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Basemap__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_identity_OAuthInfo__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_identity_IdentityManager__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_LayerList__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Color__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_renderers_SimpleRenderer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleMarkerSymbol__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_Layer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_Basemap__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_identity_OAuthInfo__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_identity_IdentityManager__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_LayerList__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_Color__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_renderers_SimpleRenderer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleMarkerSymbol__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_Layer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_Basemap__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_identity_OAuthInfo__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_identity_IdentityManager__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_widgets_LayerList__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_Color__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_renderers_SimpleRenderer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleMarkerSymbol__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@esri/arcgis-rest-feature-layer/dist/esm/add.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-feature-layer/dist/esm/add.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addFeatures": () => (/* binding */ addFeatures)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/@esri/arcgis-rest-feature-layer/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _esri_arcgis_rest_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @esri/arcgis-rest-request */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/clean-url.js");
/* harmony import */ var _esri_arcgis_rest_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @esri/arcgis-rest-request */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/append-custom-params.js");
/* harmony import */ var _esri_arcgis_rest_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @esri/arcgis-rest-request */ "./node_modules/@esri/arcgis-rest-request/dist/esm/request.js");
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */


/**
 * ```js
 * import { addFeatures } from '@esri/arcgis-rest-feature-layer';
 * //
 * addFeatures({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   features: [{
 *     geometry: { x: -120, y: 45, spatialReference: { wkid: 4326 } },
 *     attributes: { status: "alive" }
 *   }]
 * })
 *   .then(response)
 * ```
 * Add features request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/add-features.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the addFeatures response.
 */
function addFeatures(requestOptions) {
    var url = (0,_esri_arcgis_rest_request__WEBPACK_IMPORTED_MODULE_0__.cleanUrl)(requestOptions.url) + "/addFeatures";
    // edit operations are POST only
    var options = (0,_esri_arcgis_rest_request__WEBPACK_IMPORTED_MODULE_1__.appendCustomParams)(requestOptions, ["features", "gdbVersion", "returnEditMoment", "rollbackOnFailure"], { params: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, requestOptions.params) });
    return (0,_esri_arcgis_rest_request__WEBPACK_IMPORTED_MODULE_3__.request)(url, options);
}
//# sourceMappingURL=add.js.map

/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-feature-layer/node_modules/tslib/tslib.es6.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-feature-layer/node_modules/tslib/tslib.es6.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-request/dist/esm/request.js":
/*!********************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-request/dist/esm/request.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArcGISAuthError": () => (/* binding */ ArcGISAuthError),
/* harmony export */   "NODEJS_DEFAULT_REFERER_HEADER": () => (/* binding */ NODEJS_DEFAULT_REFERER_HEADER),
/* harmony export */   "checkForErrors": () => (/* binding */ checkForErrors),
/* harmony export */   "request": () => (/* binding */ request),
/* harmony export */   "setDefaultRequestOptions": () => (/* binding */ setDefaultRequestOptions)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/@esri/arcgis-rest-request/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_encode_form_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/encode-form-data */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/encode-form-data.js");
/* harmony import */ var _utils_encode_query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/encode-query-string */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/encode-query-string.js");
/* harmony import */ var _utils_process_params__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/process-params */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/process-params.js");
/* harmony import */ var _utils_ArcGISRequestError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/ArcGISRequestError */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/ArcGISRequestError.js");
/* harmony import */ var _utils_warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/warn */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/warn.js");
/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */






var NODEJS_DEFAULT_REFERER_HEADER = "@esri/arcgis-rest-js";
var DEFAULT_ARCGIS_REQUEST_OPTIONS = {
    httpMethod: "POST",
    params: {
        f: "json",
    },
};
/**
 * Sets the default options that will be passed in **all requests across all `@esri/arcgis-rest-js` modules**.
 *
 *
 * ```js
 * import { setDefaultRequestOptions } from "@esri/arcgis-rest-request";
 * setDefaultRequestOptions({
 *   authentication: userSession // all requests will use this session by default
 * })
 * ```
 * You should **never** set a default `authentication` when you are in a server side environment where you may be handling requests for many different authenticated users.
 *
 * @param options The default options to pass with every request. Existing default will be overwritten.
 * @param hideWarnings Silence warnings about setting default `authentication` in shared environments.
 */
function setDefaultRequestOptions(options, hideWarnings) {
    if (options.authentication && !hideWarnings) {
        (0,_utils_warn__WEBPACK_IMPORTED_MODULE_0__.warn)("You should not set `authentication` as a default in a shared environment such as a web server which will process multiple users requests. You can call `setDefaultRequestOptions` with `true` as a second argument to disable this warning.");
    }
    DEFAULT_ARCGIS_REQUEST_OPTIONS = options;
}
var ArcGISAuthError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ArcGISAuthError, _super);
    /**
     * Create a new `ArcGISAuthError`  object.
     *
     * @param message - The error message from the API
     * @param code - The error code from the API
     * @param response - The original response from the API that caused the error
     * @param url - The original url of the request
     * @param options - The original options of the request
     */
    function ArcGISAuthError(message, code, response, url, options) {
        if (message === void 0) { message = "AUTHENTICATION_ERROR"; }
        if (code === void 0) { code = "AUTHENTICATION_ERROR_CODE"; }
        var _this = _super.call(this, message, code, response, url, options) || this;
        _this.name = "ArcGISAuthError";
        _this.message =
            code === "AUTHENTICATION_ERROR_CODE" ? message : code + ": " + message;
        return _this;
    }
    ArcGISAuthError.prototype.retry = function (getSession, retryLimit) {
        var _this = this;
        if (retryLimit === void 0) { retryLimit = 3; }
        var tries = 0;
        var retryRequest = function (resolve, reject) {
            getSession(_this.url, _this.options)
                .then(function (session) {
                var newOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _this.options), { authentication: session });
                tries = tries + 1;
                return request(_this.url, newOptions);
            })
                .then(function (response) {
                resolve(response);
            })
                .catch(function (e) {
                if (e.name === "ArcGISAuthError" && tries < retryLimit) {
                    retryRequest(resolve, reject);
                }
                else if (e.name === "ArcGISAuthError" && tries >= retryLimit) {
                    reject(_this);
                }
                else {
                    reject(e);
                }
            });
        };
        return new Promise(function (resolve, reject) {
            retryRequest(resolve, reject);
        });
    };
    return ArcGISAuthError;
}(_utils_ArcGISRequestError__WEBPACK_IMPORTED_MODULE_2__.ArcGISRequestError));

/**
 * Checks for errors in a JSON response from the ArcGIS REST API. If there are no errors, it will return the `data` passed in. If there is an error, it will throw an `ArcGISRequestError` or `ArcGISAuthError`.
 *
 * @param data The response JSON to check for errors.
 * @param url The url of the original request
 * @param params The parameters of the original request
 * @param options The options of the original request
 * @returns The data that was passed in the `data` parameter
 */
function checkForErrors(response, url, params, options, originalAuthError) {
    // this is an error message from billing.arcgis.com backend
    if (response.code >= 400) {
        var message = response.message, code = response.code;
        throw new _utils_ArcGISRequestError__WEBPACK_IMPORTED_MODULE_2__.ArcGISRequestError(message, code, response, url, options);
    }
    // error from ArcGIS Online or an ArcGIS Portal or server instance.
    if (response.error) {
        var _a = response.error, message = _a.message, code = _a.code, messageCode = _a.messageCode;
        var errorCode = messageCode || code || "UNKNOWN_ERROR_CODE";
        if (code === 498 ||
            code === 499 ||
            messageCode === "GWM_0003" ||
            (code === 400 && message === "Unable to generate token.")) {
            if (originalAuthError) {
                throw originalAuthError;
            }
            else {
                throw new ArcGISAuthError(message, errorCode, response, url, options);
            }
        }
        throw new _utils_ArcGISRequestError__WEBPACK_IMPORTED_MODULE_2__.ArcGISRequestError(message, errorCode, response, url, options);
    }
    // error from a status check
    if (response.status === "failed" || response.status === "failure") {
        var message = void 0;
        var code = "UNKNOWN_ERROR_CODE";
        try {
            message = JSON.parse(response.statusMessage).message;
            code = JSON.parse(response.statusMessage).code;
        }
        catch (e) {
            message = response.statusMessage || response.message;
        }
        throw new _utils_ArcGISRequestError__WEBPACK_IMPORTED_MODULE_2__.ArcGISRequestError(message, code, response, url, options);
    }
    return response;
}
/**
 * ```js
 * import { request } from '@esri/arcgis-rest-request';
 * //
 * request('https://www.arcgis.com/sharing/rest')
 *   .then(response) // response.currentVersion === 5.2
 * //
 * request('https://www.arcgis.com/sharing/rest', {
 *   httpMethod: "GET"
 * })
 * //
 * request('https://www.arcgis.com/sharing/rest/search', {
 *   params: { q: 'parks' }
 * })
 *   .then(response) // response.total => 78379
 * ```
 * Generic method for making HTTP requests to ArcGIS REST API endpoints.
 *
 * @param url - The URL of the ArcGIS REST API endpoint.
 * @param requestOptions - Options for the request, including parameters relevant to the endpoint.
 * @returns A Promise that will resolve with the data from the response.
 */
function request(url, requestOptions) {
    if (requestOptions === void 0) { requestOptions = { params: { f: "json" } }; }
    var options = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ httpMethod: "POST" }, DEFAULT_ARCGIS_REQUEST_OPTIONS), requestOptions), {
        params: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, DEFAULT_ARCGIS_REQUEST_OPTIONS.params), requestOptions.params),
        headers: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, DEFAULT_ARCGIS_REQUEST_OPTIONS.headers), requestOptions.headers),
    });
    var missingGlobals = [];
    var recommendedPackages = [];
    // don't check for a global fetch if a custom implementation was passed through
    if (!options.fetch && typeof fetch !== "undefined") {
        options.fetch = fetch.bind(Function("return this")());
    }
    else {
        missingGlobals.push("`fetch`");
        recommendedPackages.push("`node-fetch`");
    }
    if (typeof Promise === "undefined") {
        missingGlobals.push("`Promise`");
        recommendedPackages.push("`es6-promise`");
    }
    if (typeof FormData === "undefined") {
        missingGlobals.push("`FormData`");
        recommendedPackages.push("`isomorphic-form-data`");
    }
    if (!options.fetch ||
        typeof Promise === "undefined" ||
        typeof FormData === "undefined") {
        throw new Error("`arcgis-rest-request` requires a `fetch` implementation and global variables for `Promise` and `FormData` to be present in the global scope. You are missing " + missingGlobals.join(", ") + ". We recommend installing the " + recommendedPackages.join(", ") + " modules at the root of your application to add these to the global scope. See https://bit.ly/2KNwWaJ for more info.");
    }
    var httpMethod = options.httpMethod, authentication = options.authentication, rawResponse = options.rawResponse;
    var params = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ f: "json" }, options.params);
    var originalAuthError = null;
    var fetchOptions = {
        method: httpMethod,
        /* ensures behavior mimics XMLHttpRequest.
        needed to support sending IWA cookies */
        credentials: options.credentials || "same-origin",
    };
    // the /oauth2/platformSelf route will add X-Esri-Auth-Client-Id header
    // and that request needs to send cookies cross domain
    // so we need to set the credentials to "include"
    if (options.headers &&
        options.headers["X-Esri-Auth-Client-Id"] &&
        url.indexOf("/oauth2/platformSelf") > -1) {
        fetchOptions.credentials = "include";
    }
    return (authentication
        ? authentication.getToken(url, { fetch: options.fetch }).catch(function (err) {
            /**
             * append original request url and requestOptions
             * to the error thrown by getToken()
             * to assist with retrying
             */
            err.url = url;
            err.options = options;
            /**
             * if an attempt is made to talk to an unfederated server
             * first try the request anonymously. if a 'token required'
             * error is thrown, throw the UNFEDERATED error then.
             */
            originalAuthError = err;
            return Promise.resolve("");
        })
        : Promise.resolve(""))
        .then(function (token) {
        if (token.length) {
            params.token = token;
        }
        if (authentication && authentication.getDomainCredentials) {
            fetchOptions.credentials = authentication.getDomainCredentials(url);
        }
        // Custom headers to add to request. IRequestOptions.headers with merge over requestHeaders.
        var requestHeaders = {};
        if (fetchOptions.method === "GET") {
            // Prevents token from being passed in query params when hideToken option is used.
            /* istanbul ignore if - window is always defined in a browser. Test case is covered by Jasmine in node test */
            if (params.token &&
                options.hideToken &&
                // Sharing API does not support preflight check required by modern browsers https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request
                typeof window === "undefined") {
                requestHeaders["X-Esri-Authorization"] = "Bearer " + params.token;
                delete params.token;
            }
            // encode the parameters into the query string
            var queryParams = (0,_utils_encode_query_string__WEBPACK_IMPORTED_MODULE_3__.encodeQueryString)(params);
            // dont append a '?' unless parameters are actually present
            var urlWithQueryString = queryParams === "" ? url : url + "?" + (0,_utils_encode_query_string__WEBPACK_IMPORTED_MODULE_3__.encodeQueryString)(params);
            if (
            // This would exceed the maximum length for URLs specified by the consumer and requires POST
            (options.maxUrlLength &&
                urlWithQueryString.length > options.maxUrlLength) ||
                // Or if the customer requires the token to be hidden and it has not already been hidden in the header (for browsers)
                (params.token && options.hideToken)) {
                // the consumer specified a maximum length for URLs
                // and this would exceed it, so use post instead
                fetchOptions.method = "POST";
                // If the token was already added as a Auth header, add the token back to body with other params instead of header
                if (token.length && options.hideToken) {
                    params.token = token;
                    // Remove existing header that was added before url query length was checked
                    delete requestHeaders["X-Esri-Authorization"];
                }
            }
            else {
                // just use GET
                url = urlWithQueryString;
            }
        }
        /* updateResources currently requires FormData even when the input parameters dont warrant it.
    https://developers.arcgis.com/rest/users-groups-and-items/update-resources.htm
        see https://github.com/Esri/arcgis-rest-js/pull/500 for more info. */
        var forceFormData = new RegExp("/items/.+/updateResources").test(url);
        if (fetchOptions.method === "POST") {
            fetchOptions.body = (0,_utils_encode_form_data__WEBPACK_IMPORTED_MODULE_4__.encodeFormData)(params, forceFormData);
        }
        // Mixin headers from request options
        fetchOptions.headers = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, requestHeaders), options.headers);
        /* istanbul ignore next - karma reports coverage on browser tests only */
        if (typeof window === "undefined" && !fetchOptions.headers.referer) {
            fetchOptions.headers.referer = NODEJS_DEFAULT_REFERER_HEADER;
        }
        /* istanbul ignore else blob responses are difficult to make cross platform we will just have to trust the isomorphic fetch will do its job */
        if (!(0,_utils_process_params__WEBPACK_IMPORTED_MODULE_5__.requiresFormData)(params) && !forceFormData) {
            fetchOptions.headers["Content-Type"] =
                "application/x-www-form-urlencoded";
        }
        return options.fetch(url, fetchOptions);
    })
        .then(function (response) {
        if (!response.ok) {
            // server responded w/ an actual error (404, 500, etc)
            var status_1 = response.status, statusText = response.statusText;
            throw new _utils_ArcGISRequestError__WEBPACK_IMPORTED_MODULE_2__.ArcGISRequestError(statusText, "HTTP " + status_1, response, url, options);
        }
        if (rawResponse) {
            return response;
        }
        switch (params.f) {
            case "json":
                return response.json();
            case "geojson":
                return response.json();
            case "html":
                return response.text();
            case "text":
                return response.text();
            /* istanbul ignore next blob responses are difficult to make cross platform we will just have to trust that isomorphic fetch will do its job */
            default:
                return response.blob();
        }
    })
        .then(function (data) {
        if ((params.f === "json" || params.f === "geojson") && !rawResponse) {
            var response = checkForErrors(data, url, params, options, originalAuthError);
            if (originalAuthError) {
                /* If the request was made to an unfederated service that
                didn't require authentication, add the base url and a dummy token
                to the list of trusted servers to avoid another federation check
                in the event of a repeat request */
                var truncatedUrl = url
                    .toLowerCase()
                    .split(/\/rest(\/admin)?\/services\//)[0];
                options.authentication.federatedServers[truncatedUrl] = {
                    token: [],
                    // default to 24 hours
                    expires: new Date(Date.now() + 86400 * 1000),
                };
                originalAuthError = null;
            }
            return response;
        }
        else {
            return data;
        }
    });
}
//# sourceMappingURL=request.js.map

/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/ArcGISRequestError.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-request/dist/esm/utils/ArcGISRequestError.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArcGISRequestError": () => (/* binding */ ArcGISRequestError)
/* harmony export */ });
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
// TypeScript 2.1 no longer allows you to extend built in types. See https://github.com/Microsoft/TypeScript/issues/12790#issuecomment-265981442
// and https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
//
// This code is from MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types.
var ArcGISRequestError = /** @class */ (function () {
    /**
     * Create a new `ArcGISRequestError`  object.
     *
     * @param message - The error message from the API
     * @param code - The error code from the API
     * @param response - The original response from the API that caused the error
     * @param url - The original url of the request
     * @param options - The original options and parameters of the request
     */
    function ArcGISRequestError(message, code, response, url, options) {
        message = message || "UNKNOWN_ERROR";
        code = code || "UNKNOWN_ERROR_CODE";
        this.name = "ArcGISRequestError";
        this.message =
            code === "UNKNOWN_ERROR_CODE" ? message : code + ": " + message;
        this.originalMessage = message;
        this.code = code;
        this.response = response;
        this.url = url;
        this.options = options;
    }
    return ArcGISRequestError;
}());

ArcGISRequestError.prototype = Object.create(Error.prototype);
ArcGISRequestError.prototype.constructor = ArcGISRequestError;
//# sourceMappingURL=ArcGISRequestError.js.map

/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/append-custom-params.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-request/dist/esm/utils/append-custom-params.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendCustomParams": () => (/* binding */ appendCustomParams)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@esri/arcgis-rest-request/node_modules/tslib/tslib.es6.js");
/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/**
 * Helper for methods with lots of first order request options to pass through as request parameters.
 */
function appendCustomParams(customOptions, keys, baseOptions) {
    var requestOptionsKeys = [
        "params",
        "httpMethod",
        "rawResponse",
        "authentication",
        "portal",
        "fetch",
        "maxUrlLength",
        "headers"
    ];
    var options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ params: {} }, baseOptions), customOptions);
    // merge all keys in customOptions into options.params
    options.params = keys.reduce(function (value, key) {
        if (customOptions[key] || typeof customOptions[key] === "boolean") {
            value[key] = customOptions[key];
        }
        return value;
    }, options.params);
    // now remove all properties in options that don't exist in IRequestOptions
    return requestOptionsKeys.reduce(function (value, key) {
        if (options[key]) {
            value[key] = options[key];
        }
        return value;
    }, {});
}
//# sourceMappingURL=append-custom-params.js.map

/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/clean-url.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-request/dist/esm/utils/clean-url.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanUrl": () => (/* binding */ cleanUrl)
/* harmony export */ });
/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Helper method to ensure that user supplied urls don't include whitespace or a trailing slash.
 */
function cleanUrl(url) {
    // Guard so we don't try to trim something that's not a string
    if (typeof url !== "string") {
        return url;
    }
    // trim leading and trailing spaces, but not spaces inside the url
    url = url.trim();
    // remove the trailing slash to the url if one was included
    if (url[url.length - 1] === "/") {
        url = url.slice(0, -1);
    }
    return url;
}
//# sourceMappingURL=clean-url.js.map

/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/encode-form-data.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-request/dist/esm/utils/encode-form-data.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeFormData": () => (/* binding */ encodeFormData)
/* harmony export */ });
/* harmony import */ var _process_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process-params */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/process-params.js");
/* harmony import */ var _encode_query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encode-query-string */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/encode-query-string.js");
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */


/**
 * Encodes parameters in a [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object in browsers or in a [FormData](https://github.com/form-data/form-data) in Node.js
 *
 * @param params An object to be encoded.
 * @returns The complete [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object.
 */
function encodeFormData(params, forceFormData) {
    // see https://github.com/Esri/arcgis-rest-js/issues/499 for more info.
    var useFormData = (0,_process_params__WEBPACK_IMPORTED_MODULE_0__.requiresFormData)(params) || forceFormData;
    var newParams = (0,_process_params__WEBPACK_IMPORTED_MODULE_0__.processParams)(params);
    if (useFormData) {
        var formData_1 = new FormData();
        Object.keys(newParams).forEach(function (key) {
            if (typeof Blob !== "undefined" && newParams[key] instanceof Blob) {
                /* To name the Blob:
                 1. look to an alternate request parameter called 'fileName'
                 2. see if 'name' has been tacked onto the Blob manually
                 3. if all else fails, use the request parameter
                */
                var filename = newParams["fileName"] || newParams[key].name || key;
                formData_1.append(key, newParams[key], filename);
            }
            /* istanbul ignore next */
            else if (newParams[key].constructor &&
                newParams[key].constructor.name === 'ReadStream' &&
                // TODO: only specify the knownLength option if a valid value is given.
                // If we can verify in all REST API that the option is need for
                // node ReadStream, it can throw an error for the missing dataSize value.
                // Note that such change will be a breaking change.
                Number.isInteger(newParams["dataSize"])) {
                // have to cast the formData to any so that I can use the unofficial API
                // in the form-data library to handle Node ReadStream. See
                // https://github.com/form-data/form-data/issues/508
                formData_1.append(key, newParams[key], {
                    knownLength: newParams["dataSize"]
                });
            }
            else {
                formData_1.append(key, newParams[key]);
            }
        });
        return formData_1;
    }
    else {
        return (0,_encode_query_string__WEBPACK_IMPORTED_MODULE_1__.encodeQueryString)(params);
    }
}
//# sourceMappingURL=encode-form-data.js.map

/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/encode-query-string.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-request/dist/esm/utils/encode-query-string.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeParam": () => (/* binding */ encodeParam),
/* harmony export */   "encodeQueryString": () => (/* binding */ encodeQueryString)
/* harmony export */ });
/* harmony import */ var _process_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process-params */ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/process-params.js");
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/**
 * Encodes keys and parameters for use in a URL's query string.
 *
 * @param key Parameter's key
 * @param value Parameter's value
 * @returns Query string with key and value pairs separated by "&"
 */
function encodeParam(key, value) {
    // For array of arrays, repeat key=value for each element of containing array
    if (Array.isArray(value) && value[0] && Array.isArray(value[0])) {
        return value.map(function (arrayElem) { return encodeParam(key, arrayElem); }).join("&");
    }
    return encodeURIComponent(key) + "=" + encodeURIComponent(value);
}
/**
 * Encodes the passed object as a query string.
 *
 * @param params An object to be encoded.
 * @returns An encoded query string.
 */
function encodeQueryString(params) {
    var newParams = (0,_process_params__WEBPACK_IMPORTED_MODULE_0__.processParams)(params);
    return Object.keys(newParams)
        .map(function (key) {
        return encodeParam(key, newParams[key]);
    })
        .join("&");
}
//# sourceMappingURL=encode-query-string.js.map

/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/process-params.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-request/dist/esm/utils/process-params.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "processParams": () => (/* binding */ processParams),
/* harmony export */   "requiresFormData": () => (/* binding */ requiresFormData)
/* harmony export */ });
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Checks parameters to see if we should use FormData to send the request
 * @param params The object whose keys will be encoded.
 * @return A boolean indicating if FormData will be required.
 */
function requiresFormData(params) {
    return Object.keys(params).some(function (key) {
        var value = params[key];
        if (!value) {
            return false;
        }
        if (value && value.toParam) {
            value = value.toParam();
        }
        var type = value.constructor.name;
        switch (type) {
            case "Array":
                return false;
            case "Object":
                return false;
            case "Date":
                return false;
            case "Function":
                return false;
            case "Boolean":
                return false;
            case "String":
                return false;
            case "Number":
                return false;
            default:
                return true;
        }
    });
}
/**
 * Converts parameters to the proper representation to send to the ArcGIS REST API.
 * @param params The object whose keys will be encoded.
 * @return A new object with properly encoded values.
 */
function processParams(params) {
    var newParams = {};
    Object.keys(params).forEach(function (key) {
        var _a, _b;
        var param = params[key];
        if (param && param.toParam) {
            param = param.toParam();
        }
        if (!param &&
            param !== 0 &&
            typeof param !== "boolean" &&
            typeof param !== "string") {
            return;
        }
        var type = param.constructor.name;
        var value;
        // properly encodes objects, arrays and dates for arcgis.com and other services.
        // ported from https://github.com/Esri/esri-leaflet/blob/master/src/Request.js#L22-L30
        // also see https://github.com/Esri/arcgis-rest-js/issues/18:
        // null, undefined, function are excluded. If you want to send an empty key you need to send an empty string "".
        switch (type) {
            case "Array":
                // Based on the first element of the array, classify array as an array of arrays, an array of objects
                // to be stringified, or an array of non-objects to be comma-separated
                // eslint-disable-next-line no-case-declarations
                var firstElementType = (_b = (_a = param[0]) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name;
                value =
                    firstElementType === "Array" ? param : // pass thru array of arrays
                        firstElementType === "Object" ? JSON.stringify(param) : // stringify array of objects
                            param.join(","); // join other types of array elements
                break;
            case "Object":
                value = JSON.stringify(param);
                break;
            case "Date":
                value = param.valueOf();
                break;
            case "Function":
                value = null;
                break;
            case "Boolean":
                value = param + "";
                break;
            default:
                value = param;
                break;
        }
        if (value || value === 0 || typeof value === "string" || Array.isArray(value)) {
            newParams[key] = value;
        }
    });
    return newParams;
}
//# sourceMappingURL=process-params.js.map

/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-request/dist/esm/utils/warn.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-request/dist/esm/utils/warn.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "warn": () => (/* binding */ warn)
/* harmony export */ });
/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Method used internally to surface messages to developers.
 */
function warn(message) {
    if (console && console.warn) {
        console.warn.apply(console, [message]);
    }
}
//# sourceMappingURL=warn.js.map

/***/ }),

/***/ "./node_modules/@esri/arcgis-rest-request/node_modules/tslib/tslib.es6.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/arcgis-rest-request/node_modules/tslib/tslib.es6.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/LayerComponent.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/LayerComponent.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#layer-component .layer-tabs {\n  margin-top: 10px; }\n\n#layer-component .layer-tabs__content {\n  height: calc(100% - 139px);\n  width: calc(100% - 16px);\n  overflow-y: auto;\n  position: absolute; }\n\n#layer-component #layer-search {\n  margin-top: 10px; }\n  #layer-component #layer-search .dropdown-button:hover {\n    border-color: var(--primary-500); }\n", "",{"version":3,"sources":["webpack://./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/LayerComponent.scss"],"names":[],"mappings":"AAAA;EAEQ,gBAAgB,EAAA;;AAFxB;EAMQ,0BAA0B;EAC1B,wBAAwB;EACxB,gBAAgB;EAChB,kBAAkB,EAAA;;AAT1B;EAaQ,gBAAgB,EAAA;EAbxB;IAgBY,gCAAgC,EAAA","sourcesContent":["#layer-component {\n    .layer-tabs {\n        margin-top: 10px;\n    }\n\n    .layer-tabs__content {\n        height: calc(100% - 139px);\n        width: calc(100% - 16px);\n        overflow-y: auto;\n        position: absolute;\n    }\n\n    #layer-search {\n        margin-top: 10px;\n\n        .dropdown-button:hover {\n            border-color: var(--primary-500);\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerListComponent.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerListComponent.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#layer-list-component #no-layers-message {\n  background-color: #edf7f9;\n  padding: 5px; }\n\n#layer-list-component .esri-layer-list {\n  height: calc(100vh - 250px);\n  overflow-y: auto;\n  background-color: var(--white); }\n  #layer-list-component .esri-layer-list .esri-layer-list__no-items {\n    display: none; }\n  #layer-list-component .esri-layer-list .esri-layer-list__item {\n    background-color: var(--white); }\n  #layer-list-component .esri-layer-list .esri-layer-list__item-container {\n    padding-left: 0;\n    animation: new-item 5s ease-out;\n    border: none; }\n    #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-label {\n      position: relative;\n      cursor: move; }\n      #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-label .esri-layer-list__item-toggle {\n        position: absolute;\n        height: 100%; }\n      #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-label .esri-layer-list__item-toggle:hover {\n        background-color: var(--secondary-100); }\n      #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-label .esri-layer-list__item-title {\n        margin-left: 25px; }\n      #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-label .esri-icon-non-visible {\n        color: var(--light-800); }\n    #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-label:has(.esri-icon-non-visible) {\n      color: var(--light-800); }\n    #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-actions-menu-item--active[aria-label=\"Legend\"] {\n      transform: rotate(180deg); }\n  #layer-list-component .esri-layer-list .esri-layer-list-panel {\n    margin: 0 0 5px 27px;\n    background-color: var(--light); }\n    #layer-list-component .esri-layer-list .esri-layer-list-panel .esri-layer-list-panel__content {\n      padding: 5px 0 5px 10px; }\n    #layer-list-component .esri-layer-list .esri-layer-list-panel .esri-layer-list-panel__content:has(.legend__templates) {\n      border-top: 2px var(--light-300) solid; }\n    #layer-list-component .esri-layer-list .esri-layer-list-panel .esri-legend {\n      background-color: transparent; }\n    #layer-list-component .esri-layer-list .esri-layer-list-panel .esri-legend__service {\n      padding: 0; }\n    #layer-list-component .esri-layer-list .esri-layer-list-panel .esri-legend__layer-child-table {\n      margin: 0; }\n  #layer-list-component .esri-layer-list .esri-layer-list__item-actions {\n    background-color: var(--light); }\n    #layer-list-component .esri-layer-list .esri-layer-list__item-actions .esri-layer-list__item-actions-list .esri-disabled-element,\n    #layer-list-component .esri-layer-list .esri-layer-list__item-actions .esri-layer-list__item-actions-list .esri-disabled-element:hover {\n      color: var(--light-800);\n      cursor: default; }\n\n#layer-list-component #layer-list__buttons {\n  display: grid;\n  grid-template-columns: 1fr 80px;\n  grid-template-rows: repeat(2, 50%); }\n  #layer-list-component #layer-list__buttons button {\n    padding: 3px; }\n  #layer-list-component #layer-list__buttons #clear-all-button-grid-item {\n    grid-column: 1;\n    grid-row: 1;\n    border-bottom: 2px var(--light-300) solid !important; }\n    #layer-list-component #layer-list__buttons #clear-all-button-grid-item #clear-all-button {\n      padding-left: 0; }\n      #layer-list-component #layer-list__buttons #clear-all-button-grid-item #clear-all-button svg {\n        margin-right: 0;\n        margin-bottom: 2px; }\n  #layer-list-component #layer-list__buttons #legend-button-grid-item {\n    grid-column: 2;\n    grid-row: 1;\n    border-bottom: 2px var(--light-300) solid; }\n    #layer-list-component #layer-list__buttons #legend-button-grid-item label {\n      font-size: var(--calcite-font-size--1);\n      position: relative;\n      top: 4px; }\n    #layer-list-component #layer-list__buttons #legend-button-grid-item #legend-button {\n      position: relative;\n      bottom: 2px; }\n  #layer-list-component #layer-list__buttons #layer-visibility-button-grid-item {\n    grid-column: 1;\n    grid-row: 2; }\n\n.color-picker-block {\n  display: inline-block;\n  position: relative;\n  top: 11px;\n  left: 5px; }\n\n.layer-size-slider > input {\n  display: inline-block;\n  width: 65%;\n  position: relative;\n  top: 3px;\n  margin: 0 10px; }\n\n#picture-marker-warning {\n  margin-top: 10px; }\n  #picture-marker-warning div {\n    margin-top: 10px; }\n\n#show-legend-button:hover:not(.disabled), #hide-legend-button:hover:not(.disabled) {\n  color: var(--primary-500); }\n\n#legend-button svg {\n  margin-left: 0.5rem; }\n\n.modal-backdrop.fade.show {\n  opacity: 0; }\n", "",{"version":3,"sources":["webpack://./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerListComponent.scss"],"names":[],"mappings":"AAAA;EAEQ,yBAAyB;EACzB,YAAY,EAAA;;AAHpB;EAOQ,2BAA2B;EAC3B,gBAAgB;EAChB,8BAA8B,EAAA;EATtC;IAYY,aAAa,EAAA;EAZzB;IAgBY,8BAA8B,EAAA;EAhB1C;IAoBY,eAAe;IACf,+BAA+B;IAC/B,YAAY,EAAA;IAtBxB;MAyBgB,kBAAkB;MAClB,YAAY,EAAA;MA1B5B;QA6BoB,kBAAkB;QAClB,YAAY,EAAA;MA9BhC;QAkCoB,sCAAsC,EAAA;MAlC1D;QAsCoB,iBAAiB,EAAA;MAtCrC;QA0CoB,uBAAuB,EAAA;IA1C3C;MA+CgB,uBAAuB,EAAA;IA/CvC;MAmDgB,yBAAyB,EAAA;EAnDzC;IAwDY,oBAAoB;IACpB,8BAA8B,EAAA;IAzD1C;MA4DgB,uBAAuB,EAAA;IA5DvC;MAgEgB,sCAAsC,EAAA;IAhEtD;MAoEgB,6BAA6B,EAAA;IApE7C;MAwEgB,UAAU,EAAA;IAxE1B;MA4EgB,SAAS,EAAA;EA5EzB;IAiFY,8BAA8B,EAAA;IAjF1C;;MAqFgB,uBAAuB;MACvB,eAAe,EAAA;;AAtF/B;EA6FQ,aAAa;EACb,+BAA+B;EAC/B,kCAAkC,EAAA;EA/F1C;IAkGY,YAAY,EAAA;EAlGxB;IAsGY,cAAc;IACd,WAAW;IACX,oDAAoD,EAAA;IAxGhE;MA2GgB,eAAe,EAAA;MA3G/B;QA8GoB,eAAe;QACf,kBAAkB,EAAA;EA/GtC;IAqHY,cAAc;IACd,WAAW;IACX,yCAAyC,EAAA;IAvHrD;MA0HgB,sCAAsC;MACtC,kBAAkB;MAClB,QAAQ,EAAA;IA5HxB;MAgIgB,kBAAkB;MAClB,WAAW,EAAA;EAjI3B;IAsIY,cAAc;IACd,WAAW,EAAA;;AAMvB;EACI,qBAAqB;EACrB,kBAAkB;EAClB,SAAS;EACT,SAAS,EAAA;;AAGb;EACI,qBAAqB;EACrB,UAAU;EACV,kBAAkB;EAClB,QAAQ;EACR,cAAc,EAAA;;AAGlB;EACI,gBAAgB,EAAA;EADpB;IAIQ,gBAAgB,EAAA;;AAIxB;EACI,yBAAyB,EAAA;;AAG7B;EACI,mBAAmB,EAAA;;AAGvB;EACI,UAAU,EAAA","sourcesContent":["#layer-list-component {\n    #no-layers-message {\n        background-color: #edf7f9;\n        padding: 5px;\n    }\n\n    .esri-layer-list {\n        height: calc(100vh - 250px);\n        overflow-y: auto;\n        background-color: var(--white);\n\n        .esri-layer-list__no-items {\n            display: none;\n        }\n\n        .esri-layer-list__item {\n            background-color: var(--white);\n        }\n\n        .esri-layer-list__item-container {\n            padding-left: 0;\n            animation: new-item 5s ease-out;\n            border: none;\n\n            .esri-layer-list__item-label {\n                position: relative;\n                cursor: move;\n\n                .esri-layer-list__item-toggle {\n                    position: absolute;\n                    height: 100%;\n                }\n\n                .esri-layer-list__item-toggle:hover {\n                    background-color: var(--secondary-100);\n                }\n\n                .esri-layer-list__item-title {\n                    margin-left: 25px;\n                }\n\n                .esri-icon-non-visible {\n                    color: var(--light-800);\n                }\n            }\n\n            .esri-layer-list__item-label:has(.esri-icon-non-visible) {\n                color: var(--light-800);\n            }\n\n            .esri-layer-list__item-actions-menu-item--active[aria-label=\"Legend\"] {\n                transform: rotate(180deg);\n            }\n        }\n\n        .esri-layer-list-panel {\n            margin: 0 0 5px 27px;\n            background-color: var(--light);\n\n            .esri-layer-list-panel__content {\n                padding: 5px 0 5px 10px;\n            }\n\n            .esri-layer-list-panel__content:has(.legend__templates) {\n                border-top: 2px var(--light-300) solid;\n            }\n\n            .esri-legend {\n                background-color: transparent;\n            }\n\n            .esri-legend__service {\n                padding: 0;\n            }\n\n            .esri-legend__layer-child-table {\n                margin: 0;\n            }\n        }\n\n        .esri-layer-list__item-actions {\n            background-color: var(--light);\n\n            .esri-layer-list__item-actions-list .esri-disabled-element,\n            .esri-layer-list__item-actions-list .esri-disabled-element:hover {\n                color: var(--light-800);\n                cursor: default;\n            }\n        }\n    }\n\n\n    #layer-list__buttons {\n        display: grid;\n        grid-template-columns: 1fr 80px;\n        grid-template-rows: repeat(2, 50%);\n\n        button {\n            padding: 3px;\n        }\n\n        #clear-all-button-grid-item {\n            grid-column: 1;\n            grid-row: 1;\n            border-bottom: 2px var(--light-300) solid !important;\n\n            #clear-all-button {\n                padding-left: 0;\n\n                svg {\n                    margin-right: 0;\n                    margin-bottom: 2px;\n                }\n            }\n        }\n\n        #legend-button-grid-item {\n            grid-column: 2;\n            grid-row: 1;\n            border-bottom: 2px var(--light-300) solid;\n\n            label {\n                font-size: var(--calcite-font-size--1);\n                position: relative;\n                top: 4px;\n            }\n\n            #legend-button {\n                position: relative;\n                bottom: 2px;\n            }\n        }\n\n        #layer-visibility-button-grid-item {\n            grid-column: 1;\n            grid-row: 2;\n        }\n    }\n}\n\n\n.color-picker-block {\n    display: inline-block;\n    position: relative;\n    top: 11px;\n    left: 5px;\n}\n\n.layer-size-slider > input {\n    display: inline-block;\n    width: 65%;\n    position: relative;\n    top: 3px;\n    margin: 0 10px;\n}\n\n#picture-marker-warning {\n    margin-top: 10px;\n\n    div {\n        margin-top: 10px;\n    }\n}\n\n#show-legend-button:hover:not(.disabled), #hide-legend-button:hover:not(.disabled) {\n    color: var(--primary-500);\n}\n\n#legend-button svg {\n    margin-left: 0.5rem;\n}\n\n.modal-backdrop.fade.show {\n    opacity: 0;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/TemplateComponent.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/TemplateComponent.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#template-component {\n  display: block;\n  padding: 10px;\n  background-color: #edf7f9;\n  border: 1px var(--dark-800) solid;\n  border-radius: 5px; }\n  #template-component #template-component__header {\n    margin-bottom: 0.5rem; }\n    #template-component #template-component__header h4 {\n      display: inline; }\n    #template-component #template-component__header #template-component__info {\n      display: inline;\n      position: absolute;\n      margin: 2px 0 0 5px; }\n  #template-component #template-search .dropdown-button:hover {\n    border-color: var(--primary-500); }\n  #template-component #active-templates-menu {\n    height: 55px;\n    overflow-x: auto;\n    overflow-y: hidden;\n    white-space: nowrap;\n    padding-top: 15px; }\n    #template-component #active-templates-menu .scroll-item {\n      max-width: 150px; }\n      #template-component #active-templates-menu .scroll-item .nav-link {\n        color: var(--dark-800);\n        background-color: var(--white);\n        cursor: default;\n        border: 1px var(--dark-800) solid; }\n    #template-component #active-templates-menu .tab-title {\n      margin-top: 2px; }\n    #template-component #active-templates-menu #no-active-templates {\n      padding: 5px 0 0 5px; }\n\n.template-search-item {\n  width: 100%; }\n  .template-search-item .template-search-item__add-button {\n    width: calc(100% - 55px); }\n\n.template-dropdown__content {\n  margin-left: 15px;\n  border-left: 2px var(--light-300) solid; }\n", "",{"version":3,"sources":["webpack://./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/TemplateComponent.scss"],"names":[],"mappings":"AAAA;EACI,cAAc;EACd,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,kBAAkB,EAAA;EALtB;IAQQ,qBAAqB,EAAA;IAR7B;MAWY,eAAe,EAAA;IAX3B;MAeY,eAAe;MACf,kBAAkB;MAClB,mBAAmB,EAAA;EAjB/B;IAuBY,gCAAgC,EAAA;EAvB5C;IA4BQ,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB,EAAA;IAhCzB;MAmCY,gBAAgB,EAAA;MAnC5B;QAsCgB,sBAAsB;QACtB,8BAA8B;QAC9B,eAAe;QACf,iCAAiC,EAAA;IAzCjD;MA8CY,eAAe,EAAA;IA9C3B;MAkDY,oBAAoB,EAAA;;AAMhC;EACI,WAAW,EAAA;EADf;IAIQ,wBAAwB,EAAA;;AAIhC;EACI,iBAAiB;EACjB,uCAAuC,EAAA","sourcesContent":["#template-component {\n    display: block;\n    padding: 10px;\n    background-color: #edf7f9;\n    border: 1px var(--dark-800) solid;\n    border-radius: 5px;\n\n    #template-component__header {\n        margin-bottom: 0.5rem;\n\n        h4 {\n            display: inline;\n        }\n\n        #template-component__info {\n            display: inline;\n            position: absolute;\n            margin: 2px 0 0 5px;\n        }\n    }\n\n    #template-search {\n        .dropdown-button:hover {\n            border-color: var(--primary-500);\n        }\n    }\n\n    #active-templates-menu {\n        height: 55px;\n        overflow-x: auto;\n        overflow-y: hidden;\n        white-space: nowrap;\n        padding-top: 15px;\n\n        .scroll-item {\n            max-width: 150px;\n\n            .nav-link {\n                color: var(--dark-800);\n                background-color: var(--white);\n                cursor: default;\n                border: 1px var(--dark-800) solid;\n            }\n        }\n\n        .tab-title {\n            margin-top: 2px;\n        }\n\n        #no-active-templates {\n            padding: 5px 0 0 5px;\n        }\n    }\n}\n\n\n.template-search-item {\n    width: 100%;\n\n    .template-search-item__add-button {\n        width: calc(100% - 55px);\n    }\n}\n\n.template-dropdown__content {\n    margin-left: 15px;\n    border-left: 2px var(--light-300) solid;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/oem-dashboard/src/runtime/Widget.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/oem-dashboard/src/runtime/Widget.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jimu-widget {\n  position: relative; }\n\n.p-5 {\n  padding: 0.5rem !important; }\n\n/* Grid positioning */\n#oem-dashboard-grid {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: repeat(2, 50%);\n  font-size: 125% !important; }\n  #oem-dashboard-grid .grid-item {\n    padding: 0.5rem !important;\n    position: relative; }\n  #oem-dashboard-grid #template-component__grid-item {\n    grid-column: 1;\n    grid-row: 1; }\n  #oem-dashboard-grid #layer-component__grid-item {\n    grid-column: 1;\n    grid-row: 2 / 4; }\n  #oem-dashboard-grid #layer-list__grid-item {\n    grid-column: 2;\n    grid-row: 1 / 3;\n    background-color: var(--white); }\n  #oem-dashboard-grid #save-template-grid-item {\n    grid-column: 2;\n    grid-row: 3;\n    background-color: var(--white); }\n  #oem-dashboard-grid .loading {\n    height: 80px;\n    width: 200px; }\n\n/* Buttons and icons */\n.add-button {\n  width: 100%;\n  display: block; }\n  .add-button .icon-btn-sizer {\n    justify-content: left;\n    text-align: left; }\n  .add-button .jimu-icon {\n    margin-right: 4px !important;\n    margin-left: 0 !important;\n    margin-bottom: 3px; }\n\n#open-save-template-button {\n  bottom: 50%;\n  position: absolute;\n  padding: 0rem 0.75rem; }\n  #open-save-template-button .jimu-icon {\n    margin-bottom: 4px; }\n\n.btn-primary {\n  color: var(--dark-800);\n  background-color: var(--secondary-500);\n  border-color: var(--secondary-500); }\n\n.btn-primary:hover {\n  background-color: var(--secondary-200);\n  border-color: var(--secondary-200); }\n\n.advanced-select-menu .select-item-placeholder {\n  margin: 0 !important;\n  width: 0 !important; }\n\n.dropdown-item:hover {\n  background-color: var(--white) !important; }\n\n.multiple-select-tool {\n  display: none !important; }\n\n.jimu-dropdown-item > .jimu-checkbox {\n  display: none !important; }\n\n@keyframes new-item {\n  from {\n    background-color: var(--secondary-100); }\n  50% {\n    background-color: var(--secondary-100); }\n  to {\n    background-color: transparent; } }\n\n.modal-content .menu-navigation .nav-link.active {\n  cursor: default; }\n", "",{"version":3,"sources":["webpack://./your-extensions/widgets/oem-dashboard/src/runtime/Widget.scss"],"names":[],"mappings":"AAAA;EACI,kBAAkB,EAAA;;AAGtB;EACI,0BAA0B,EAAA;;AAI9B,qBAAA;AACA;EACI,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,qCAAqC;EAErC,0BAA0B,EAAA;EAR9B;IAWQ,0BAA0B;IAC1B,kBAAkB,EAAA;EAZ1B;IAgBQ,cAAc;IACd,WAAW,EAAA;EAjBnB;IAqBQ,cAAc;IACd,eAAe,EAAA;EAtBvB;IA0BQ,cAAc;IACd,eAAe;IACf,8BAA8B,EAAA;EA5BtC;IAgCQ,cAAc;IACd,WAAW;IACX,8BAA8B,EAAA;EAlCtC;IAsCQ,YAAY;IACZ,YAAY,EAAA;;AAIpB,sBAAA;AACA;EACI,WAAW;EACX,cAAc,EAAA;EAFlB;IAKQ,qBAAqB;IACrB,gBAAgB,EAAA;EANxB;IAUQ,4BAA4B;IAC5B,yBAAyB;IACzB,kBAAkB,EAAA;;AAI1B;EAII,WAAW;EACX,kBAAkB;EAClB,qBAAqB,EAAA;EANzB;IAEQ,kBAAkB,EAAA;;AAO1B;EACI,sBAAsB;EACtB,sCAAsC;EACtC,kCAAkC,EAAA;;AAGtC;EACI,sCAAsC;EACtC,kCAAkC,EAAA;;AAGtC;EACI,oBAAoB;EACpB,mBAAmB,EAAA;;AAGvB;EACI,yCAAyC,EAAA;;AAG7C;EACI,wBAAwB,EAAA;;AAG5B;EACI,wBAAwB,EAAA;;AAG5B;EACI;IAAM,sCAAsC,EAAA;EAC5C;IAAK,sCAAsC,EAAA;EAC3C;IAAI,6BAA6B,EAAA,EAAA;;AAGrC;EACI,eAAe,EAAA","sourcesContent":[".jimu-widget {\n    position: relative;\n}\n\n.p-5 {\n    padding: 0.5rem !important;\n}\n\n\n/* Grid positioning */\n#oem-dashboard-grid {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n    // grid-template-rows: 190px 1fr 60px;\n    font-size: 125% !important;\n\n    .grid-item {\n        padding: 0.5rem !important;\n        position: relative;\n    }\n\n    #template-component__grid-item {\n        grid-column: 1;\n        grid-row: 1;\n    }\n\n    #layer-component__grid-item {\n        grid-column: 1;\n        grid-row: 2 / 4;\n    }\n\n    #layer-list__grid-item {\n        grid-column: 2;\n        grid-row: 1 / 3;\n        background-color: var(--white);\n    }\n\n    #save-template-grid-item {\n        grid-column: 2;\n        grid-row: 3;\n        background-color: var(--white);\n    }\n\n    .loading {\n        height: 80px;\n        width: 200px;\n    }\n}\n\n/* Buttons and icons */\n.add-button {\n    width: 100%;\n    display: block;\n\n    .icon-btn-sizer {\n        justify-content: left;\n        text-align: left;\n    }\n\n    .jimu-icon {\n        margin-right: 4px !important;\n        margin-left: 0 !important;\n        margin-bottom: 3px;\n    }\n}\n\n#open-save-template-button {\n    .jimu-icon {\n        margin-bottom: 4px;\n    }\n    bottom: 50%;\n    position: absolute;\n    padding: 0rem 0.75rem;\n}\n\n.btn-primary {\n    color: var(--dark-800);\n    background-color: var(--secondary-500);\n    border-color: var(--secondary-500);\n}\n\n.btn-primary:hover {\n    background-color: var(--secondary-200);\n    border-color: var(--secondary-200);\n}\n\n.advanced-select-menu .select-item-placeholder {\n    margin: 0 !important;\n    width: 0 !important;\n}\n\n.dropdown-item:hover {\n    background-color: var(--white) !important;\n}\n\n.multiple-select-tool {\n    display: none !important;\n}\n\n.jimu-dropdown-item > .jimu-checkbox {\n    display: none !important;\n}\n\n@keyframes new-item {\n    from {background-color: var(--secondary-100)}\n    50% {background-color: var(--secondary-100)}\n    to {background-color: transparent}\n}\n\n.modal-content .menu-navigation .nav-link.active {\n    cursor: default;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/LayerComponent.scss":
/*!**********************************************************************************************!*\
  !*** ./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/LayerComponent.scss ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerComponent_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./LayerComponent.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/LayerComponent.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerListComponent.scss":
/*!******************************************************************************************************!*\
  !*** ./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerListComponent.scss ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerListComponent_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./LayerListComponent.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerListComponent.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerListComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerListComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerListComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerListComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/TemplateComponent.scss":
/*!****************************************************************************************************!*\
  !*** ./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/TemplateComponent.scss ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_TemplateComponent_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./TemplateComponent.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/TemplateComponent.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_TemplateComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_TemplateComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_TemplateComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_TemplateComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./your-extensions/widgets/oem-dashboard/src/runtime/Widget.scss":
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/oem-dashboard/src/runtime/Widget.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_Widget_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./Widget.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/oem-dashboard/src/runtime/Widget.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_Widget_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_Widget_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_Widget_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_Widget_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/AddLayerItem.tsx":
/*!*******************************************************************************************!*\
  !*** ./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/AddLayerItem.tsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");


/**
 * AddLayerItem allows the user to add a Layer to the Map
 */
class AddLayerItem extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { "aria-label": "Button", icon: true, onClick: () => this.props.onAddLayer(this.props.layerWrapper), size: "sm", type: "tertiary", className: "add-button", disabled: this.props.active },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: this.props.active ?
                    "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/check-32.svg" :
                    "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/plus-32.svg", size: "l" }),
            this.props.layerWrapper.title));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddLayerItem);


/***/ }),

/***/ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/LayerComponent.tsx":
/*!*********************************************************************************************!*\
  !*** ./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/LayerComponent.tsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LayerComponent_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayerComponent.scss */ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/LayerComponent.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _LayerSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LayerSearch */ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/LayerSearch.tsx");
/* harmony import */ var _AddLayerItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddLayerItem */ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/AddLayerItem.tsx");





/**
 * LayerComponent contains multiple Tabs of Categories and allows users to add Layers to the Map
 */
class LayerComponent extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
        super(...arguments);
        /**
         * Renders list of Categories as Tabs
         */
        this.renderCategoryTabs = () => {
            return this.props.categories.map((category) => {
                return (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Tab, { id: "category-" + category.id + "-tab", className: "tab", title: category.title + " (" + category.layerWrappers.length + ")" },
                    react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "category-" + category.id + "-tab-content", className: "layer-tabs__content p-5 border" }, category.layerWrappers.map((layerWrapper) => {
                        return (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_AddLayerItem__WEBPACK_IMPORTED_MODULE_4__["default"], { layerWrapper: layerWrapper, onAddLayer: this.props.onAddLayer, active: this.props.activeLayers.includes(layerWrapper) }));
                    }))));
            });
        };
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "layer-component" },
            react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("h4", null, "Layers"),
            this.props.layers && (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_LayerSearch__WEBPACK_IMPORTED_MODULE_3__["default"], { layers: this.props.layers, onAddLayer: this.props.onAddLayer, activeLayers: this.props.activeLayers })),
            react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { className: "layer-tabs" },
                react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Tabs, { onChange: function noRefCheck() { }, onClose: function noRefCheck() { }, type: "tabs", scrollable: true }, this.props.categories && this.renderCategoryTabs()))));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayerComponent);


/***/ }),

/***/ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/LayerSearch.tsx":
/*!******************************************************************************************!*\
  !*** ./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/LayerSearch.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _AddLayerItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddLayerItem */ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/AddLayerItem.tsx");



/**
 * LayerSearch allows users to search for and add Layers to the Map
 */
class LayerSearch extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { id: "layer-search" },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.AdvancedSelect, { isMultiple: true, isEmptyOptionHidden: true, onChange: function noRefCheck() { }, size: "default", sortValuesByLabel: true, menuProps: {
                    offset: [0, -40]
                }, customDropdownButtonContent: () => {
                    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/search-32.svg" }),
                        "Search for layer..."));
                }, staticValues: this.props.layers.map((layerWrapper) => {
                    return {
                        label: layerWrapper.title,
                        value: layerWrapper.id,
                        render: (item) => {
                            return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_AddLayerItem__WEBPACK_IMPORTED_MODULE_2__["default"], { layerWrapper: layerWrapper, onAddLayer: this.props.onAddLayer, active: this.props.activeLayers.includes(layerWrapper) });
                        }
                    };
                }) })));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayerSearch);


/***/ }),

/***/ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerListButtons.tsx":
/*!***************************************************************************************************!*\
  !*** ./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerListButtons.tsx ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LayerListComponent_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayerListComponent.scss */ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerListComponent.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");



/**
 * LayerListButtons contains Buttons that control the behavior of a LayerList
 */
class LayerListButtons extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "layer-list__buttons" },
            react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "clear-all-button-grid-item" },
                react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { "aria-label": "Button", onClick: this.props.onClearAll, size: "default", id: "clear-all-button", type: "tertiary" }, "Clear All")),
            react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "legend-button-grid-item" },
                react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Dropdown, null,
                    react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DropdownButton, { id: "legend-button", type: "tertiary", arrow: false },
                        "Legend",
                        react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { icon: "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/hamburger-32.svg" })),
                    react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu, { alignment: "end" },
                        react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, { onClick: this.props.onShowLegend, id: "show-legend-button", type: "tertiary", disabled: this.props.allLegendsOpen }, "Show All"),
                        react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, { onClick: this.props.onHideLegend, id: "hide-legend-button", type: "tertiary", disabled: this.props.allLegendsClosed }, "Hide All")))),
            react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "layer-visibility-grid-item" },
                react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { id: "layer-visibility-button", type: "tertiary", onClick: () => {
                        if (this.props.allLayersHidden) {
                            this.props.onShowLayers();
                        }
                        else {
                            this.props.onHideLayers();
                        }
                    } },
                    react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { icon: this.props.allLayersHidden ?
                            "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/view-hide-32.svg" :
                            "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/view-visible-32.svg", size: "l" }),
                    this.props.allLayersHidden ? "Show All" : "Hide All"))));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayerListButtons);


/***/ }),

/***/ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerListComponent.tsx":
/*!*****************************************************************************************************!*\
  !*** ./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerListComponent.tsx ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LayerListComponent_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayerListComponent.scss */ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerListComponent.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var esri_widgets_LayerList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/widgets/LayerList */ "esri/widgets/LayerList");
/* harmony import */ var _LayerStyleModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LayerStyleModal */ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerStyleModal.tsx");
/* harmony import */ var esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/core/reactiveUtils */ "esri/core/reactiveUtils");
/* harmony import */ var _LayerListButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LayerListButtons */ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerListButtons.tsx");
/* harmony import */ var _MoreInfoModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MoreInfoModal */ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/MoreInfoModal.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








/**
 * LayerListComponent is a customized ArcGIS LayerList widget that allows users to reorder, remove, and recolor
 * Map layers.
 */
class LayerListComponent extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
        this.myRef = react__WEBPACK_IMPORTED_MODULE_1__["default"].createRef();
        /**
         * Overrides LayerList selection behavior with a custom behavior when LayerItem is clicked
         * @param item the clicked LayerItem
         */
        this.onItemClick = (item) => {
            // Removed toggle visibility functionality in UX Changes Round 2 to make drag and drop
            // affordability more clear
            // item.layer.visible = !item.layer.visible;
        };
        /**
         * Opens all legends in the LayerList
         */
        this.showLegend = () => {
            for (let li of this.state.widget.operationalItems) {
                li.panel.open = true;
            }
        };
        /**
         * Closes all legends in the LayerList
         */
        this.hideLegend = () => {
            for (let li of this.state.widget.operationalItems) {
                li.panel.open = false;
            }
        };
        /**
         * Shows all operational Layers
         */
        this.showLayers = () => {
            for (let li of this.state.widget.operationalItems) {
                li.layer.visible = true;
            }
        };
        /**
         * Hides all operational Layers
         */
        this.hideLayers = () => {
            for (let li of this.state.widget.operationalItems) {
                li.layer.visible = false;
            }
        };
        /**
         * Changes the color and size of this.current.layer based on layer style Modal
         */
        this.changeStyle = () => {
            this.refresh(this.state.selectedItem);
            this.setState({
                layerStyleModalOpen: false
            });
        };
        /**
         * Returns header for Legend
         * @return an HTMLElement with the text "Legend: "
         */
        this.createLegendDiv = () => {
            let element = document.createElement("div");
            element.className = "legend__header";
            element.innerHTML = "Legend: ";
            return element;
        };
        /**
         * Returns comma-separated list of active Templates for the given Layer
         * @param layer the Layer to check
         * @return an HTMLElement with a comma-separated list of active Template names
         */
        this.createTemplatesDiv = (layer) => {
            let element = document.createElement("div");
            element.className = "legend__templates";
            let activeTemplates = this.props.getLayerTemplates(layer, true);
            if (activeTemplates.length === 0) {
                element.innerHTML = "Events: None";
                return element;
            }
            let activeTemplateList = "Events: ";
            for (let template of activeTemplates) {
                activeTemplateList += " " + template.title + ",";
            }
            element.innerHTML = activeTemplateList.slice(0, -1);
            return element;
        };
        /**
         * Returns the Category of the given Layer
         * @param layer the Layer to check
         * @return an HTMLElement with the name of the Category
         */
        this.createCategoryDiv = (layer) => {
            let element = document.createElement("div");
            element.className = "legend__category";
            if (this.props.getLayerCategory(layer) != null) {
                element.innerHTML = "Category: " + this.props.getLayerCategory(layer).title;
            }
            return element;
        };
        /**
         * Refreshes ListItemPanel content
         * @param item the ListItem to refresh
         */
        this.refresh = (item) => {
            if (item.parent) {
                item.panel.content = [
                    "legend"
                ];
            }
            else {
                item.panel.content = [
                    this.createLegendDiv(),
                    "legend",
                    this.createTemplatesDiv(item.layer),
                    this.createCategoryDiv(item.layer)
                ];
            }
        };
        /**
         * Updates JimuMapView and creates LayerList on active view change
         * @param jmv the new JimuMapView
         */
        this.activeViewChangeHandler = (jmv) => {
            if (this.state.jmv && this.state.widget) {
                this.state.widget.destroy();
            }
            if (jmv) {
                this.setState({
                    jmv: jmv
                });
                // Create LayerList
                if (this.myRef.current) {
                    const layerList = new esri_widgets_LayerList__WEBPACK_IMPORTED_MODULE_3__["default"]({
                        view: jmv.view,
                        // Called for each ListItem in LayerList
                        listItemCreatedFunction: (event) => __awaiter(this, void 0, void 0, function* () {
                            let item = event.item;
                            // Create legend
                            item.panel = {
                                className: "esri-icon-down",
                            };
                            this.refresh(item);
                            // Add ListItem actions
                            yield item.layer.when();
                            item.actionsSections = [
                                [{
                                        title: "Remove",
                                        className: "esri-icon-minus",
                                        id: "remove"
                                    }],
                                [{
                                        title: "Zoom to",
                                        className: "esri-icon-zoom-in-magnifying-glass",
                                        id: "zoom"
                                    }],
                                [{
                                        title: "Edit legend style",
                                        image: "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/layers-editable-24.svg",
                                        id: "change-style",
                                        // Edit layer style only supports SimpleRenderers
                                        disabled: !(item.layer.type === "feature" &&
                                            item.layer.renderer.type === "simple" &&
                                            (item.layer.renderer.symbol.color != null ||
                                                item.layer.renderer.symbol.type === "picture-marker"))
                                    }],
                                [
                                    {
                                        title: "Send backwards",
                                        image: "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/send-backwards-24.svg",
                                        id: "send-backwards"
                                    },
                                    {
                                        title: "Bring forward",
                                        image: "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/bring-forward-24.svg",
                                        id: "bring-forward"
                                    },
                                    {
                                        title: "Send to back",
                                        image: "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/send-to-back-24.svg",
                                        id: "send-to-back"
                                    },
                                    {
                                        title: "Bring to front",
                                        image: "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/bring-to-front-24.svg",
                                        id: "bring-to-front"
                                    }
                                ],
                                [{
                                        title: "Description",
                                        className: "esri-icon-description",
                                        id: "description"
                                    }]
                            ];
                            item.addHandles([
                                // Override selection behavior
                                esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__["default"].watch(() => layerList.selectedItems.includes(item), () => this.onItemClick(item)),
                                // Close actions section when legend panel opens
                                esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__["default"].when(() => item.panel.open, () => item.actionsOpen = false),
                                // Close legend paanel when actions section opens
                                esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__["default"].when(() => item.actionsOpen, () => item.panel.open = false)
                            ]);
                        }),
                        container: this.myRef.current,
                        selectionEnabled: true,
                        multipleSelectionEnabled: true
                    });
                    // Add ListItem action functionality
                    layerList.on("trigger-action", (event) => {
                        const id = event.action.id;
                        const layer = event.item.layer;
                        let index = this.state.jmv.view.map.layers.findIndex((l) => l === layer);
                        switch (id) {
                            case "zoom":
                                // Go to full extent of layer
                                jmv.view.goTo(layer.fullExtent);
                                break;
                            case "remove":
                                // Remove layer from map
                                this.props.onRemoveLayer(layer);
                                break;
                            case "change-style":
                                // Open Layer Style Modal
                                this.setState({
                                    layerStyleModalOpen: true,
                                    selectedItem: event.item
                                });
                                break;
                            case "send-backwards":
                                // Send layer back 1 level
                                if (index > 0) {
                                    this.state.jmv.view.map.reorder(layer, index - 1);
                                }
                                break;
                            case "bring-forward":
                                // Bring layer forward 1 level
                                if (index > -1 && index < this.state.jmv.view.map.layers.length) {
                                    this.state.jmv.view.map.reorder(layer, index + 1);
                                }
                                break;
                            case "send-to-back":
                                // Move layer to back
                                if (index > -1) {
                                    this.state.jmv.view.map.reorder(layer, 0);
                                }
                                break;
                            case "bring-to-front":
                                // Move layer to front
                                if (index > -1) {
                                    this.state.jmv.view.map.reorder(layer, this.state.jmv.view.map.layers.length - 1);
                                }
                                break;
                            case "description":
                                this.setState({
                                    moreInfoModalOpen: true,
                                    selectedItem: event.item
                                });
                        }
                    });
                    // Watch LayerList properties to determine whether buttons should be disabled
                    layerList.addHandles([
                        esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__["default"].watch(() => layerList.operationalItems.reduce((prev, curr) => prev && !curr.layer.visible, true), () => this.setState({
                            allLayersHidden: layerList.operationalItems.reduce((prev, curr) => prev && !curr.layer.visible, true)
                        })),
                        esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__["default"].watch(() => layerList.operationalItems.reduce((prev, curr) => prev && curr.panel.open, true), () => this.setState({
                            allLegendsOpen: layerList.operationalItems.reduce((prev, curr) => prev && curr.panel.open, true)
                        })),
                        esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__["default"].watch(() => layerList.operationalItems.reduce((prev, curr) => prev && !curr.panel.open, true), () => this.setState({
                            allLegendsClosed: layerList.operationalItems.reduce((prev, curr) => prev && !curr.panel.open, true)
                        }))
                    ]);
                    this.setState({
                        widget: layerList
                    });
                }
            }
        };
        this.state = {
            jmv: null,
            widget: null,
            layerStyleModalOpen: false,
            moreInfoModalOpen: false,
            selectedItem: null,
            allLayersHidden: false,
            allLegendsOpen: false,
            allLegendsClosed: true
        };
    }
    render() {
        if (this.state.widget) {
            for (let item of this.state.widget.viewModel.operationalItems) {
                this.refresh(item);
            }
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "layer-list-component" },
            react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: this.props.useMapWidgetId, onActiveViewChange: this.activeViewChangeHandler }),
            react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("h3", null, "Current Layers (" + this.props.numActiveLayers + ")"),
            this.props.numActiveLayers <= 0 && (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "no-layers-message" },
                react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("em", null, "You do not have any layers added. Get started by adding a scenario or layer from the left side of the panel."))),
            this.props.numActiveLayers > 0 && (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_LayerListButtons__WEBPACK_IMPORTED_MODULE_6__["default"], { onClearAll: this.props.onClearAll, onHideLegend: this.hideLegend, onShowLegend: this.showLegend, onShowLayers: this.showLayers, onHideLayers: this.hideLayers, allLayersHidden: this.state.allLayersHidden, allLegendsOpen: this.state.allLegendsOpen, allLegendsClosed: this.state.allLegendsClosed })),
            react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "layer-list__content", ref: this.myRef }),
            this.state.selectedItem &&
                this.state.selectedItem.layer &&
                this.state.selectedItem.layer.type === "feature" &&
                this.state.selectedItem.layer.renderer.type === "simple" && (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_LayerStyleModal__WEBPACK_IMPORTED_MODULE_4__["default"], { onSave: this.changeStyle, layer: this.state.selectedItem.layer, open: this.state.layerStyleModalOpen, toggleOpen: () => this.setState({ layerStyleModalOpen: !this.state.layerStyleModalOpen }) })),
            this.state.selectedItem &&
                this.state.selectedItem.layer && (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_MoreInfoModal__WEBPACK_IMPORTED_MODULE_7__["default"], { layer: this.state.selectedItem.layer, open: this.state.moreInfoModalOpen, toggleOpen: () => this.setState({ moreInfoModalOpen: !this.state.moreInfoModalOpen }), getLayerInfo: this.props.getLayerInfo }))));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayerListComponent);


/***/ }),

/***/ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerStyleModal.tsx":
/*!**************************************************************************************************!*\
  !*** ./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerStyleModal.tsx ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var esri_Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/Color */ "esri/Color");
/* harmony import */ var esri_renderers_SimpleRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/renderers/SimpleRenderer */ "esri/renderers/SimpleRenderer");
/* harmony import */ var esri_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/symbols/SimpleMarkerSymbol */ "esri/symbols/SimpleMarkerSymbol");






/**
 * LayerStyleModal gives users the ability to edit the appearance of rendered Layers.
 * The edit layer style functionality only supports SimpleRenderers.
 */
class LayerStyleModal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(props) {
        super(props);
        /**
         * Handles behavior upon opening Modal
         */
        this.onOpened = () => {
            this.setState({
                originalRenderer: esri_renderers_SimpleRenderer__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(this.props.layer.renderer.toJSON())
            });
            let symbol = this.props.layer.renderer.symbol;
            switch (symbol.type) {
                case "simple-marker":
                    if (symbol.style === "cross" || symbol.style === "x") {
                        this.setState({
                            showColorPicker: true,
                            showSizeSlider: true,
                            color: symbol.outline.color.toString(),
                            size: symbol.size
                        });
                    }
                    else {
                        this.setState({
                            showColorPicker: true,
                            showSizeSlider: true,
                            color: symbol.color.toString(),
                            size: symbol.size
                        });
                    }
                    break;
                case "picture-marker":
                    this.setState({
                        showColorPicker: false,
                        showSizeSlider: true,
                        color: "#ffffff",
                        size: symbol.width
                    });
                    break;
                case "simple-fill":
                    this.setState({
                        showColorPicker: true,
                        showSizeSlider: false,
                        color: symbol.color.toString(),
                        size: null
                    });
                    break;
                case "simple-line":
                    this.setState({
                        showColorPicker: true,
                        showSizeSlider: true,
                        color: symbol.color.toString(),
                        size: symbol.width
                    });
                    break;
                default:
                    this.setState({
                        showColorPicker: true,
                        showSizeSlider: false,
                        color: symbol.color.toString(),
                        size: null
                    });
            }
        };
        /**
         * Handles behavior when color picker warning for picture marker is clicked
         */
        this.handleColorWarningClick = () => {
            this.setState({
                showColorPicker: true
            });
            this.props.layer.renderer.symbol = new esri_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_5__["default"]({
                color: this.state.color,
                size: this.state.size
            });
        };
        /**
         * Updates Layer style upon color change
         * @param color the new color
         */
        this.handleChangeColor = (color) => {
            this.setState({ color: color });
            let layer = this.props.layer;
            let renderer = layer.renderer;
            // Change size and color
            switch (renderer.symbol.type) {
                case "simple-marker":
                    if (renderer.symbol.style === "cross" || renderer.symbol.style === "x") {
                        renderer.symbol.outline.color = new esri_Color__WEBPACK_IMPORTED_MODULE_3__["default"](color);
                    }
                    else {
                        renderer.symbol.color = new esri_Color__WEBPACK_IMPORTED_MODULE_3__["default"](color);
                    }
                    break;
                case "simple-fill":
                    renderer.symbol.color = new esri_Color__WEBPACK_IMPORTED_MODULE_3__["default"](color);
                    break;
                case "simple-line":
                    renderer.symbol.color = new esri_Color__WEBPACK_IMPORTED_MODULE_3__["default"](color);
                    break;
                default:
                    renderer.symbol.color = new esri_Color__WEBPACK_IMPORTED_MODULE_3__["default"](color);
            }
        };
        /**
         * Updates layer style upon size change
         * @param size the new size
         */
        this.handleChangeSize = (size) => {
            let layer = this.props.layer;
            let renderer = layer.renderer;
            // Change size and color
            this.setState({ size: size });
            switch (renderer.symbol.type) {
                case "simple-marker":
                    renderer.symbol.size = size;
                    break;
                case "picture-marker":
                    let pmSymbol = renderer.symbol;
                    let ratio = pmSymbol.height / pmSymbol.width;
                    pmSymbol.width = size;
                    pmSymbol.height = size * ratio;
                    break;
                case "simple-line":
                    renderer.symbol.width = size;
                    break;
            }
        };
        this.handleCancel = () => {
            this.props.layer.renderer = this.state.originalRenderer;
            this.props.toggleOpen();
        };
        this.state = {
            showColorPicker: false,
            showSizeSlider: false,
            color: null,
            size: null,
            originalRenderer: null
        };
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, { isOpen: this.props.open, onClosed: function noRefCheck() { }, onEnter: function noRefCheck() { }, onExit: function noRefCheck() { }, onOpened: this.onOpened, toggle: this.props.toggleOpen },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalHeader, { toggle: this.props.toggleOpen },
                "Edit ",
                this.props.layer.title,
                " Legend Style"),
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalBody, null,
                this.state.showSizeSlider && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "layer-size-slider" },
                    "Select Marker Size:",
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Slider, { "aria-label": "Layer Size Slider", onChange: (e) => this.handleChangeSize(+e.target.value), min: 0, max: Math.max(50, this.state.size), value: this.state.size }),
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", null, this.state.size))),
                this.state.showColorPicker && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "layer-color-picker" },
                    "Select Marker Color:",
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, { "aria-label": "Layer Color Picker", color: this.state.color, height: 30, width: 30, onChange: (color) => this.handleChangeColor(color), onClick: function noRefCheck() { }, placement: "bottom", type: "default" }))),
                this.props.layer.renderer.symbol.type === "picture-marker" &&
                    !this.state.showColorPicker && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { id: "picture-marker-warning" },
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: this.handleColorWarningClick }, "Change Color"),
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("em", null, "Changing the color of this layer requires converting the marker from a picture to a simple circular marker."))))),
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, null,
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: this.handleCancel }, "Cancel"),
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: this.props.onSave, id: "save-template-button", type: "primary" }, "Done"))));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayerStyleModal);


/***/ }),

/***/ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/MoreInfoModal.tsx":
/*!************************************************************************************************!*\
  !*** ./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/MoreInfoModal.tsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * MoreInfoModal displays more information about a Layer to users
 */
class MoreInfoModal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(props) {
        super(props);
        /**
         * Handles behavior upon opening Modal
         */
        this.onOpened = () => __awaiter(this, void 0, void 0, function* () {
            this.setState({
                source: "...",
                description: "...",
                url: ""
            });
            let info = yield this.props.getLayerInfo(this.props.layer);
            if (info) {
                this.setState(info);
            }
        });
        this.state = {
            source: "...",
            description: "...",
            url: ""
        };
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, { isOpen: this.props.open, onClosed: function noRefCheck() { }, onEnter: function noRefCheck() { }, onExit: function noRefCheck() { }, onOpened: this.onOpened, toggle: this.props.toggleOpen },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalHeader, { toggle: this.props.toggleOpen },
                this.props.layer.title,
                " Description"),
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalBody, null,
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "layer-source" },
                    "Source: ",
                    this.state.source),
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "layer-description" },
                    "Description: ",
                    this.state.description)),
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, null,
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: this.props.toggleOpen }, "Close"),
                this.state.url && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: () => window.open(this.state.url, "_blank"), type: "primary" }, "See More")))));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreInfoModal);


/***/ }),

/***/ "./your-extensions/widgets/oem-dashboard/src/runtime/SaveTemplateComponent.tsx":
/*!*************************************************************************************!*\
  !*** ./your-extensions/widgets/oem-dashboard/src/runtime/SaveTemplateComponent.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");


/**
 * SaveTemplateComponent renders the buttons that allow users to save the active Layers as a new Template
 */
class SaveTemplateComponent extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
        /**
         * Toggles Save Template Modal between open and closed
         */
        this.toggleOpen = () => {
            this.setState({
                open: !this.state.open
            });
        };
        this.checkValidity = (text) => {
            return {
                valid: text.length <= 50,
                msg: "Maximum title length is 50 characters!"
            };
        };
        this.state = {
            title: undefined,
            open: false
        };
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "save-template-component" },
            this.props.show && (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Button, { onClick: this.toggleOpen, id: "open-save-template-button", type: "primary" },
                react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Icon, { icon: "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/plus-32.svg", size: "l" }),
                "Save As New Scenario")),
            react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Modal, { isOpen: this.state.open, onClosed: function noRefCheck() { }, onEnter: function noRefCheck() { }, onExit: function noRefCheck() { }, onOpened: function noRefCheck() { }, toggle: this.toggleOpen },
                react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.ModalHeader, { toggle: this.toggleOpen }, "Save As New Event"),
                react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.ModalBody, null,
                    "Event Title:",
                    react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { className: "mb-3", placeholder: "Enter Event Title...", onAcceptValue: (value) => this.setState({ title: value }), checkValidityOnChange: this.checkValidity, checkValidityOnAccept: this.checkValidity })),
                react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.ModalFooter, null,
                    react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Button, { onClick: this.toggleOpen }, "Cancel"),
                    react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Button, { onClick: () => { this.props.handleClick(this.state.title); this.toggleOpen(); }, id: "save-template-button", type: "primary" }, "Save")))));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveTemplateComponent);


/***/ }),

/***/ "./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/ActiveTemplatesMenu.tsx":
/*!*****************************************************************************************************!*\
  !*** ./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/ActiveTemplatesMenu.tsx ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");


/**
 * ActiveTemplatesMenu renders a list of active Templates and allows users to remove Templates
 */
class ActiveTemplatesMenu extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { id: "active-templates-menu" },
            this.props.activeTemplates.length === 0 &&
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { id: "no-active-templates" },
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("em", null, "Added Scenarios will appear here.")),
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tabs, { scrollable: true, type: "pills" }, this.props.activeTemplates.map((template) => {
                return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { id: "" + template.id, title: template.title + " (" + template.layerWrappers.length + ")", onClose: () => this.props.removeTemplate(template), closeable: true }));
            }))));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActiveTemplatesMenu);


/***/ }),

/***/ "./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/AddTemplateItem.tsx":
/*!*************************************************************************************************!*\
  !*** ./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/AddTemplateItem.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _LayerComponent_AddLayerItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LayerComponent/AddLayerItem */ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/AddLayerItem.tsx");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");



/**
 * AddTemplateItem allows users to add all Layers in a Template to the Map
 */
class AddTemplateItem extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    render() {
        // Disable the add button if the Template was added to the list of active Templates and
        // all Layers are currently added to the Map
        let added = this.props.activeTemplates.includes(this.props.template);
        if (added) {
            for (let layerWrapper of this.props.template.layerWrappers) {
                if (!this.props.activeLayers.includes(layerWrapper)) {
                    added = false;
                    break;
                }
            }
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.CollapsablePanel, { label: react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { "aria-label": "Button", icon: true, onClick: () => this.props.onAddTemplate(this.props.template), size: "sm", type: "tertiary", disabled: this.props.template.layerWrappers.length === 0 || added, className: "add-button" },
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { icon: added ?
                        "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/check-32.svg" :
                        "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/plus-32.svg", size: "l" }),
                this.props.template.title + " (" + this.props.template.layerWrappers.length + ")"), level: 0, type: "default", disabled: this.props.template.layerWrappers.length === 0 },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "template-dropdown__content" }, this.props.template.layerWrappers.map((_val, index) => {
                // Map in reverse order to maintain consistency with Layer List order
                let layerWrapper = this.props.template.layerWrappers[this.props.template.layerWrappers.length - index - 1];
                return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_LayerComponent_AddLayerItem__WEBPACK_IMPORTED_MODULE_1__["default"], { layerWrapper: layerWrapper, onAddLayer: this.props.onAddLayer, active: this.props.activeLayers.includes(layerWrapper) }));
            }))));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddTemplateItem);


/***/ }),

/***/ "./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/TemplateComponent.tsx":
/*!***************************************************************************************************!*\
  !*** ./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/TemplateComponent.tsx ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateComponent_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemplateComponent.scss */ "./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/TemplateComponent.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _TemplateSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TemplateSearch */ "./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/TemplateSearch.tsx");
/* harmony import */ var _ActiveTemplatesMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActiveTemplatesMenu */ "./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/ActiveTemplatesMenu.tsx");





/**
 * TemplateComponent contains a TemplateSearch dropdown, ActiveTemplateMenu, and a detailed pane of the layers
 * in each Template
 */
class TemplateComponent extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
        this.state = {
            paneOpen: false,
            selectedTemplate: null
        };
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "template-component" },
            react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "template-component__header" },
                react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("h4", null, "Scenarios"),
                react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { placement: "right", title: "Scenarios are a set of layers that are grouped together for a specific emergency\n                        and can be added to the map all at once." },
                    react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "template-component__info" },
                        react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { icon: "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/question-32-f.svg" })))),
            this.props.templates && (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "template-component__content" },
                react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_TemplateSearch__WEBPACK_IMPORTED_MODULE_3__["default"], { templates: this.props.templates, onAddLayer: this.props.onAddLayer, onAddTemplate: this.props.onAddTemplate, activeLayers: this.props.activeLayers, activeTemplates: this.props.activeTemplates }),
                react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_ActiveTemplatesMenu__WEBPACK_IMPORTED_MODULE_4__["default"], { activeTemplates: this.props.activeTemplates, removeTemplate: this.props.onRemoveTemplate })))));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateComponent);


/***/ }),

/***/ "./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/TemplateSearch.tsx":
/*!************************************************************************************************!*\
  !*** ./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/TemplateSearch.tsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _AddTemplateItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddTemplateItem */ "./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/AddTemplateItem.tsx");



/**
 * TemplateSearch allows users to search for a Template
 */
class TemplateSearch extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { id: "template-search" },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.AdvancedSelect, { isMultiple: true, isEmptyOptionHidden: true, onChange: function noRefCheck() { }, size: "default", sortValuesByLabel: true, menuProps: {
                    offset: [0, -40]
                }, customDropdownButtonContent: () => {
                    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/search-32.svg" }),
                        "Search for Scenario..."));
                }, appendToBody: false, strategy: "fixed", staticValues: this.props.templates.map((template) => {
                    return {
                        label: template.title,
                        value: template.id,
                        render: (item) => {
                            return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", { className: "template-search-item" },
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_AddTemplateItem__WEBPACK_IMPORTED_MODULE_2__["default"], { template: template, onAddTemplate: this.props.onAddTemplate, onAddLayer: this.props.onAddLayer, activeLayers: this.props.activeLayers, activeTemplates: this.props.activeTemplates })));
                        }
                    };
                }) })));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateSearch);


/***/ }),

/***/ "esri/Basemap":
/*!*******************************!*\
  !*** external "esri/Basemap" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_Basemap__;

/***/ }),

/***/ "esri/Color":
/*!*****************************!*\
  !*** external "esri/Color" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_Color__;

/***/ }),

/***/ "esri/core/reactiveUtils":
/*!******************************************!*\
  !*** external "esri/core/reactiveUtils" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__;

/***/ }),

/***/ "esri/identity/IdentityManager":
/*!************************************************!*\
  !*** external "esri/identity/IdentityManager" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_identity_IdentityManager__;

/***/ }),

/***/ "esri/identity/OAuthInfo":
/*!******************************************!*\
  !*** external "esri/identity/OAuthInfo" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_identity_OAuthInfo__;

/***/ }),

/***/ "esri/layers/FeatureLayer":
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__;

/***/ }),

/***/ "esri/layers/Layer":
/*!************************************!*\
  !*** external "esri/layers/Layer" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_Layer__;

/***/ }),

/***/ "esri/renderers/SimpleRenderer":
/*!************************************************!*\
  !*** external "esri/renderers/SimpleRenderer" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_renderers_SimpleRenderer__;

/***/ }),

/***/ "esri/symbols/SimpleMarkerSymbol":
/*!**************************************************!*\
  !*** external "esri/symbols/SimpleMarkerSymbol" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleMarkerSymbol__;

/***/ }),

/***/ "esri/widgets/LayerList":
/*!*****************************************!*\
  !*** external "esri/widgets/LayerList" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_LayerList__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/basic/color-picker":
/*!*********************************************!*\
  !*** external "jimu-ui/basic/color-picker" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/oem-dashboard/src/runtime/widget.tsx ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__set_webpack_public_path__": () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Widget_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget.scss */ "./your-extensions/widgets/oem-dashboard/src/runtime/Widget.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/layers/FeatureLayer */ "esri/layers/FeatureLayer");
/* harmony import */ var esri_layers_Layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/layers/Layer */ "esri/layers/Layer");
/* harmony import */ var esri_Basemap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/Basemap */ "esri/Basemap");
/* harmony import */ var _esri_arcgis_rest_feature_layer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @esri/arcgis-rest-feature-layer */ "./node_modules/@esri/arcgis-rest-feature-layer/dist/esm/add.js");
/* harmony import */ var esri_identity_OAuthInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/identity/OAuthInfo */ "esri/identity/OAuthInfo");
/* harmony import */ var esri_identity_IdentityManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri/identity/IdentityManager */ "esri/identity/IdentityManager");
/* harmony import */ var _LayerComponent_LayerComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LayerComponent/LayerComponent */ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/LayerComponent.tsx");
/* harmony import */ var _SaveTemplateComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SaveTemplateComponent */ "./your-extensions/widgets/oem-dashboard/src/runtime/SaveTemplateComponent.tsx");
/* harmony import */ var _LayerListComponent_LayerListComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LayerListComponent/LayerListComponent */ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerListComponent.tsx");
/* harmony import */ var _TemplateComponent_TemplateComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TemplateComponent/TemplateComponent */ "./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/TemplateComponent.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};














class Widget extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
        /**
         * Loads Layers and Templates/Scenarios that are in url parameters
         */
        this.fetchLayersandTemplatesfromHash = () => __awaiter(this, void 0, void 0, function* () {
            let layers = this.queryParameters.get("layers");
            let templates = this.queryParameters.get("templates");
            // any other formatting checking needed?
            // make this one function instead of two
            this.fetchObjects("Layer", layers);
            this.fetchObjects("Template", templates);
        });
        this.fetchObjects = (objectType, objectParams) => {
            if (objectParams) {
                objectParams = objectParams.split(",");
                objectParams.forEach((objectId) => {
                    // check here for non Int values
                    if (!isNaN(objectId)) {
                        objectId = parseInt(objectId);
                        let object = objectType == "Layer" ? this.state.layerWrappers.get(objectId) : this.state.templates.get(objectId);
                        let methodName = "addActive" + objectType;
                        this[methodName](object);
                    }
                });
            }
        };
        /**
         * Queries Categories table to create a Map of Category ID to Category and updates state
         */
        this.fetchCategories = () => __awaiter(this, void 0, void 0, function* () {
            // Query Categories Table
            let featureSet = yield this.categoryTable.queryFeatures({
                where: "1=1",
                outFields: ["*"],
                orderByFields: ["TITLE"]
            });
            // Create Categories
            let newCategories = new Map();
            for (let f of featureSet.features) {
                newCategories.set(f.attributes.OBJECTID, {
                    id: f.attributes.OBJECTID,
                    title: f.attributes.TITLE,
                    layerWrappers: []
                });
            }
            this.setState({
                categories: newCategories
            });
        });
        /**
         * Queries Templates table to create list of Templates and updates state
         */
        this.fetchTemplates = () => __awaiter(this, void 0, void 0, function* () {
            // Query Templates table
            let featureSet = yield this.templateTable.queryFeatures({
                where: "1=1",
                outFields: ["*"],
                orderByFields: ["TITLE"]
            });
            // Create Templates
            let newTemplates = new Map();
            for (let f of featureSet.features) {
                newTemplates.set(f.attributes.OBJECTID, {
                    id: f.attributes.OBJECTID,
                    title: f.attributes.TITLE,
                    layerWrappers: []
                });
            }
            this.setState({
                templates: newTemplates
            });
        });
        /**
         * Queries Layers table to create a Map of Layer ID to LayerWrapper and updates state.
         * Deletes LayerWrapper and its references if Layer creation fails.
         */
        this.fetchLayers = () => __awaiter(this, void 0, void 0, function* () {
            // Query Layers table
            let featureSet = yield this.layerTable.queryFeatures({
                where: "1=1",
                outFields: ["OBJECTID", "TITLE", "URL", "SCOPE", "CATEGORYID", "RENDERER", "FILTER"],
                orderByFields: ["SCOPE", "TITLE"]
            });
            // Create LayerWrappers
            let newLayerWrappers = new Map();
            for (let feature of featureSet.features) {
                let newLayerWrapper = {
                    id: feature.attributes.OBJECTID,
                    title: feature.attributes.SCOPE + " " + feature.attributes.TITLE,
                    url: feature.attributes.URL,
                    filter: feature.attributes.FILTER,
                    renderer: feature.attributes.RENDERER,
                    layer: null,
                    category: this.state.categories.get(feature.attributes.CATEGORYID),
                    templates: []
                };
                try {
                    // Don't await createLayer to allow Layers to be loaded asynchronously in the background
                    this.createLayer(newLayerWrapper);
                    newLayerWrappers.set(feature.attributes.OBJECTID, newLayerWrapper);
                    this.state.categories.get(feature.attributes.CATEGORYID).layerWrappers.push(newLayerWrapper);
                }
                catch (e) {
                    console.error(e);
                    alert(e.message);
                }
            }
            this.setState({
                layerWrappers: newLayerWrappers
            });
        });
        /**
         * Queries Template-Layer Relationships table and updates state
         */
        this.fetchTemplateLayers = () => __awaiter(this, void 0, void 0, function* () {
            // Order by OBJECTID to maintain Layer order
            let featureSet = yield this.templateLayerRelationships.queryFeatures({
                where: "1=1",
                outFields: ["*"],
                orderByFields: ["OBJECTID"]
            });
            for (let feature of featureSet.features) {
                let layerWrapper = this.state.layerWrappers.get(feature.attributes.LAYERID);
                if (layerWrapper) {
                    let template = this.state.templates.get(feature.attributes.TEMPLATEID);
                    template.layerWrappers.push(layerWrapper);
                    this.state.layerWrappers.get(feature.attributes.LAYERID).templates.push(template);
                }
            }
            this.setState({
                templates: this.state.templates,
                loading: false
            });
        });
        /**
         * Creates and returns a new Layer with the information from the given LayerWrapper.
         * @param layerWrapper the LayerWrapper from which to create the Layer
         * @throws Error if Layer creation fails
         */
        this.createLayer = (layerWrapper) => __awaiter(this, void 0, void 0, function* () {
            try {
                let newLayer = yield esri_layers_Layer__WEBPACK_IMPORTED_MODULE_5__["default"].fromArcGISServerUrl({ url: layerWrapper.url });
                newLayer.id = layerWrapper.id.toString();
                newLayer.title = layerWrapper.title;
                // Custom Renderer
                if (newLayer.type === "feature") {
                    if (layerWrapper.renderer != null) {
                        try {
                            newLayer.renderer = JSON.parse(layerWrapper.renderer);
                        }
                        catch (e) {
                            console.log("Error loading renderer for layer " + layerWrapper.title);
                            console.error(e);
                        }
                    }
                    if (layerWrapper.filter != null) {
                        try {
                            newLayer.definitionExpression = layerWrapper.filter;
                        }
                        catch (e) {
                            console.log("Error loading SQL filter for layer " + layerWrapper.title);
                            console.error(e);
                        }
                    }
                }
                layerWrapper.layer = newLayer;
                return newLayer;
            }
            catch (e) {
                console.error(e);
                throw new Error("Error loading layer" + layerWrapper.title + "!");
            }
        });
        /**
         * Saves all active Layers as a new Template with the given title
         * @param title the title of the new Template
         */
        this.saveTemplate = (title) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (title) {
                    let sameTitle = (yield this.templateTable.queryFeatureCount({
                        where: "TITLE = '" + title + "'",
                        outFields: ["*"]
                    })) > 0;
                    if (sameTitle) {
                        alert("Error, a template with this title already exists!");
                    }
                    else {
                        let token = yield this.getToken();
                        let response = yield (0,_esri_arcgis_rest_feature_layer__WEBPACK_IMPORTED_MODULE_13__.addFeatures)({
                            url: this.props.config.templateTableUrl,
                            features: [{ attributes: {
                                        TITLE: title
                                    } }],
                            params: { token: token }
                        });
                        if (!response.addResults[0].success) {
                            // @ts-ignore: per ArcGIS Rest JS API, IEditFeatureResult will contain an error
                            // message if success is false
                            throw new Error(response.addResults[0].error);
                        }
                        let templateId = response.addResults[0].objectId;
                        yield this.saveTemplateLayers(templateId, token);
                        yield this.fetchTemplates();
                        yield this.fetchTemplateLayers();
                        alert("Successfully saved new event!");
                    }
                }
                else {
                    alert("Error, please enter a title!");
                }
            }
            catch (e) {
                console.error(e);
                alert("Error saving template, please try again!");
            }
        });
        /**
         * Adds Template-Layer relationships to Template Layer Relationships table
         * @param templateId the OBJECTID of the new Template
         * @param token the token to use to authenticate the network request
         */
        this.saveTemplateLayers = (templateId, token) => __awaiter(this, void 0, void 0, function* () {
            let features = [];
            let layers = this.state.jimuMapView.view.map.allLayers;
            for (let layer of layers) {
                // Eliminate non-operational Layers like base Layers
                if (this.state.layerWrappers.has(+layer.id)) {
                    features.push({
                        attributes: {
                            TEMPLATEID: templateId,
                            LAYERID: layer.id
                        }
                    });
                }
            }
            let response = yield (0,_esri_arcgis_rest_feature_layer__WEBPACK_IMPORTED_MODULE_13__.addFeatures)({
                url: this.props.config.templateLayerRelationshipsUrl,
                features: features,
                params: {
                    token: token
                }
            });
            if (!response.addResults[0].success) {
                // @ts-ignore: per ArcGIS Rest JS API, IEditFeatureResult will contain an error
                // message if success is false
                throw new Error(response.addResults[0].error);
            }
        });
        /**
         * Returns a token using user-provided login info that can be used to access ArcGIS services
         * @return a token generated using the user-provided Credential info
         */
        this.getToken = () => __awaiter(this, void 0, void 0, function* () {
            const info = new esri_identity_OAuthInfo__WEBPACK_IMPORTED_MODULE_7__["default"]({
                appId: "eS2vUdIZbHaVOrDz",
                flowType: "auto",
                popup: false
            });
            esri_identity_IdentityManager__WEBPACK_IMPORTED_MODULE_8__["default"].registerOAuthInfos([info]);
            let credential = yield esri_identity_IdentityManager__WEBPACK_IMPORTED_MODULE_8__["default"].checkSignInStatus(info.portalUrl + "/sharing");
            if (!credential) {
                credential = yield esri_identity_IdentityManager__WEBPACK_IMPORTED_MODULE_8__["default"].getCredential(info.portalUrl + "/sharing");
            }
            return credential.token;
        });
        /**
         * Check hash params for template or layer id, add if not there
         * @param objectId
         * @param objectGroup
         */
        this.addHashParam = (objectId, objectGroup) => {
            let objectParams = this.queryParameters.get(objectGroup);
            if (objectParams) {
                objectParams = objectParams.split(",");
                if (!objectParams.includes(objectId.toString())) {
                    objectParams.push(objectId);
                    this.queryParameters.set(objectGroup, objectParams);
                }
            }
            else {
                this.queryParameters.set(objectGroup, objectId);
            }
            window.location.hash = this.queryParameters.toString();
        };
        /**
         * Remove hash param for given template or layer id
         * @param objectId
         * @param objectGroup
         */
        this.removeHashParam = (objectId, objectGroup) => {
            let objectParams = this.queryParameters.get(objectGroup).split(",");
            objectParams = objectParams.filter(param => param !== objectId.toString());
            console.log(objectParams);
            this.queryParameters.set(objectGroup, objectParams);
            window.location.hash = this.queryParameters.toString();
        };
        /**
         * Adds the given Layer to the Map and list of active Layers
         * @param layerWrapper the Layer to add
         */
        this.addActiveLayer = (layerWrapper) => __awaiter(this, void 0, void 0, function* () {
            if (!layerWrapper.layer) {
                yield this.createLayer(layerWrapper);
            }
            if (!this.state.activeLayers.includes(layerWrapper)) {
                let newActiveLayers = this.state.activeLayers.slice();
                newActiveLayers.push(layerWrapper);
                layerWrapper.layer.visible = true;
                try {
                    this.state.jimuMapView.view.map.add(layerWrapper.layer);
                    this.addHashParam(layerWrapper.id, "layers");
                }
                catch (e) {
                    alert("Error adding layer " + layerWrapper.title + "!");
                }
                this.setState({
                    activeLayers: newActiveLayers
                });
            }
        });
        /**
         * Add the given Template to the Map and list of active Templates
         * @param template the Template to add
         */
        this.addActiveTemplate = (template) => __awaiter(this, void 0, void 0, function* () {
            let newActiveTemplates = this.state.activeTemplates.slice();
            let newActiveLayers = this.state.activeLayers.slice();
            if (!newActiveTemplates.includes(template)) {
                newActiveTemplates.push(template);
                this.addHashParam(template.id, "templates");
            }
            for (let layerWrapper of template.layerWrappers) {
                if (!layerWrapper.layer) {
                    yield this.createLayer(layerWrapper);
                }
                if (!newActiveLayers.includes(layerWrapper)) {
                    newActiveLayers.push(layerWrapper);
                    layerWrapper.layer.visible = true;
                    try {
                        this.state.jimuMapView.view.map.add(layerWrapper.layer);
                    }
                    catch (e) {
                        alert("Error adding layer " + layerWrapper.title + "!");
                    }
                }
            }
            this.setState({
                activeTemplates: newActiveTemplates,
                activeLayers: newActiveLayers
            });
        });
        /**
         * Removes the given Layer from the Map and list of active Layers. Removes any Templates without associated
         * active Layers after the given Layer has been removed.
         * @param layer the Layer to remove
         */
        this.removeActiveLayer = (layer) => {
            let newActiveLayers = this.state.activeLayers.filter((lw) => { return lw.layer !== layer; });
            let newActiveTemplates = this.state.activeTemplates;
            this.state.jimuMapView.view.map.remove(layer);
            this.removeHashParam(layer.id, "layers");
            // Check if any active Templates need to be removed
            for (let activeTemplate of newActiveTemplates) {
                if (this.state.layerWrappers.get(+layer.id).templates.includes(activeTemplate)) {
                    let active = false;
                    for (let layerWrapper of activeTemplate.layerWrappers) {
                        if (newActiveLayers.includes(layerWrapper)) {
                            active = true;
                            break;
                        }
                    }
                    if (!active) {
                        newActiveTemplates = newActiveTemplates.filter((t) => { return t !== activeTemplate; });
                    }
                }
            }
            this.setState({
                activeTemplates: newActiveTemplates,
                activeLayers: newActiveLayers
            });
        };
        /**
         * Removes the given Template from the Map and list of active Templates. Removes any Templates without associated
         * active Layers after the given Template has been removed.
         * @param removeTemplate the Template to remove
         */
        this.removeActiveTemplate = (removeTemplate) => {
            let newActiveLayers = this.state.activeLayers.slice();
            let newActiveTemplates = this.state.activeTemplates.filter((t) => t !== removeTemplate);
            this.removeHashParam(removeTemplate.id, "templates");
            for (let layerWrapper of removeTemplate.layerWrappers) {
                // Don't remove layer if it belongs to another active Template
                let active = false;
                for (let activeTemplate of newActiveTemplates) {
                    if (layerWrapper.templates.includes(activeTemplate)) {
                        active = true;
                        break;
                    }
                }
                if (!active) {
                    newActiveLayers = newActiveLayers.filter((lw) => lw !== layerWrapper);
                    this.state.jimuMapView.view.map.remove(layerWrapper.layer);
                }
            }
            this.setState({
                activeTemplates: newActiveTemplates,
                activeLayers: newActiveLayers
            });
        };
        /**
         * Handles clear all action
         */
        this.clearAll = () => {
            this.state.jimuMapView.view.map.removeAll();
            this.setState({
                activeTemplates: [],
                activeLayers: []
            });
            this.queryParameters.set('layers', '');
            this.queryParameters.set('templates', '');
            // wiping out these values instead of clearing out hash 
            // in case we ever use hash param ever elsewhere
            window.location.hash = this.queryParameters.toString();
        };
        /**
         * Returns a list of Templates that the given Layer belongs to
         * @param layer the Layer to check
         * @param active set to true to only return active Templates
         * @return a list of Templates that the given Layer belongs to
         */
        this.getLayerTemplates = (layer, active) => {
            if (!this.state.layerWrappers.get(+layer.id)) {
                return [];
            }
            if (active) {
                let activeTemplates = [];
                for (let template of this.state.layerWrappers.get(+layer.id).templates) {
                    if (this.state.activeTemplates.includes(template)) {
                        activeTemplates.push(template);
                    }
                }
                return activeTemplates;
            }
            else {
                return this.state.layerWrappers.get(+layer.id).templates;
            }
        };
        /**
         * Returns the Category that the given Layer belongs to
         * @param layer the Layer to check
         * @return the Category that the given Layer belongs to
         */
        this.getLayerCategory = (layer) => {
            if (!this.state.layerWrappers.get(+layer.id)) {
                return null;
            }
            return this.state.layerWrappers.get(+layer.id).category;
        };
        /**
         * Queries Layer Table and returns information about the given Layer
         * @param layer the Layer to query information about
         * @return a JSON object containing the source, description, and url of the layer or
         * only the url of the layer if the network request fails
         */
        this.getLayerInfo = (layer) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.state.layerWrappers.get(+layer.id)) {
                    return null;
                }
                let featureSet = yield this.layerTable.queryFeatures({
                    where: "OBJECTID = " + layer.id,
                    outFields: ["SOURCE", "DESCRIPTION"]
                });
                if (featureSet.features.length > 0) {
                    return {
                        source: featureSet.features[0].attributes.SOURCE,
                        description: featureSet.features[0].attributes.DESCRIPTION,
                        url: this.state.layerWrappers.get(+layer.id).url
                    };
                }
                else {
                    throw new Error("No layers found with the given OBJECTID!");
                }
            }
            catch (e) {
                alert("Error loading layer info!");
                console.error(e);
                return {
                    source: "Error",
                    description: "Error",
                    url: this.state.layerWrappers.get(+layer.id).url
                };
            }
        });
        /**
         * Updates state to given JimuMapView and sets initial basemap
         * @param jmv the new JimuMapView
         */
        this.activeViewChangeHandler = (jmv) => {
            if (jmv) {
                if (!this.state.jimuMapView) {
                    // Set basemap on first active view change
                    jmv.view.map.basemap = esri_Basemap__WEBPACK_IMPORTED_MODULE_6__["default"].fromId("arcgis-topographic");
                }
                this.setState({
                    jimuMapView: jmv
                });
            }
        };
        this.state = {
            jimuMapView: undefined,
            layerWrappers: new Map(),
            templates: new Map(),
            categories: new Map(),
            loading: true,
            activeTemplates: [],
            activeLayers: [],
        };
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.templateTable = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({ url: this.props.config.templateTableUrl });
                this.layerTable = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({ url: this.props.config.layerTableUrl });
                this.categoryTable = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({ url: this.props.config.categoryTableUrl });
                this.templateLayerRelationships = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({ url: this.props.config.templateLayerRelationshipsUrl });
                this.queryParameters = new URLSearchParams(window.location.hash.substring(1));
            }
            catch (e) {
                // Stop execution of further methods because other functionalities unlikely to work if app failed
                // to connect to one or more tables.
                console.error(e);
                alert("Error connecting to database, please try again!");
                return;
            }
            try {
                yield this.fetchCategories();
            }
            catch (e) {
                console.error(e);
                alert("Error loading categories, please try again!");
                return;
            }
            try {
                yield this.fetchTemplates();
            }
            catch (e) {
                console.error(e);
                alert("Error loading templates, please try again!");
                return;
            }
            try {
                yield this.fetchLayers();
            }
            catch (e) {
                console.error(e);
                alert("Error loading layers, please try again!");
                return;
            }
            try {
                yield this.fetchTemplateLayers();
            }
            catch (e) {
                console.error(e);
                alert("Error loading template layers, please try again!");
                return;
            }
            try {
                this.fetchLayersandTemplatesfromHash();
            }
            catch (e) {
                console.error(e);
                alert("Error loading url parameters, please try again!");
                return;
            }
        });
    }
    render() {
        var _a, _b;
        return (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { className: "widget-starter jimu-widget" },
            this.props.useMapWidgetIds &&
                this.props.useMapWidgetIds.length === 1 && (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: this.activeViewChangeHandler })),
            react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "oem-dashboard-grid" },
                react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "template-component__grid-item", className: "grid-item" },
                    react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("h3", null, "Add Layers"),
                    react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_TemplateComponent_TemplateComponent__WEBPACK_IMPORTED_MODULE_12__["default"], { templates: Array.from(this.state.templates.values()), activeTemplates: this.state.activeTemplates, onAddTemplate: this.addActiveTemplate, onRemoveTemplate: this.removeActiveTemplate, activeLayers: this.state.activeLayers, onAddLayer: this.addActiveLayer })),
                react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "layer-component__grid-item", className: "grid-item" },
                    this.state.loading && (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Loading, { type: "SECONDARY" })),
                    react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_LayerComponent_LayerComponent__WEBPACK_IMPORTED_MODULE_9__["default"], { layers: Array.from(this.state.layerWrappers.values()), categories: Array.from(this.state.categories.values()), activeLayers: this.state.activeLayers, onAddLayer: this.addActiveLayer })),
                react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "layer-list__grid-item", className: "grid-item" },
                    !(this.props.useMapWidgetIds &&
                        this.props.useMapWidgetIds.length === 1) && (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Loading, { type: "SECONDARY" })),
                    this.props.useMapWidgetIds &&
                        this.props.useMapWidgetIds.length === 1 && (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_LayerListComponent_LayerListComponent__WEBPACK_IMPORTED_MODULE_11__["default"], { useMapWidgetId: (_b = this.props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b[0], onClearAll: this.clearAll, onRemoveLayer: this.removeActiveLayer, getLayerTemplates: this.getLayerTemplates, getLayerCategory: this.getLayerCategory, numActiveLayers: this.state.activeLayers.length, getLayerInfo: this.getLayerInfo }))),
                react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "save-template-grid-item", className: "grid-item" },
                    react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_SaveTemplateComponent__WEBPACK_IMPORTED_MODULE_10__["default"], { handleClick: this.saveTemplate, show: this.state.activeLayers.length > 0 })))));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9vZW0tZGFzaGJvYXJkL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2lDO0FBQ2lEO0FBQ2xGO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0NBQW9DLGNBQWM7QUFDckUscUJBQXFCO0FBQ3JCLE1BQU07QUFDTixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGNBQWMsbUVBQVE7QUFDdEI7QUFDQSxrQkFBa0IsNkVBQWtCLHdGQUF3RixRQUFRLCtDQUFRLEdBQUcsMEJBQTBCO0FBQ3pLLFdBQVcsa0VBQU87QUFDbEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQixzQ0FBc0Msa0JBQWtCO0FBQ25GLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxjQUFjO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNPO0FBQ1AsY0FBYyw2QkFBNkIsMEJBQTBCLGNBQWMscUJBQXFCO0FBQ3hHLGlCQUFpQixvREFBb0QscUVBQXFFLGNBQWM7QUFDeEosdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsbUNBQW1DLFNBQVM7QUFDNUMsbUNBQW1DLFdBQVcsVUFBVTtBQUN4RCwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBLDhHQUE4RyxPQUFPO0FBQ3JILGlGQUFpRixpQkFBaUI7QUFDbEcseURBQXlELGdCQUFnQixRQUFRO0FBQ2pGLCtDQUErQyxnQkFBZ0IsZ0JBQWdCO0FBQy9FO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVLFlBQVksYUFBYSxTQUFTLFVBQVU7QUFDdEQsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw2QkFBNkIsc0JBQXNCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxrREFBa0QsUUFBUTtBQUMxRCx5Q0FBeUMsUUFBUTtBQUNqRCx5REFBeUQsUUFBUTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsaUJBQWlCLHVGQUF1RixjQUFjO0FBQ3RILHVCQUF1QixnQ0FBZ0MscUNBQXFDLDJDQUEyQztBQUN2SSw0QkFBNEIsTUFBTSxpQkFBaUIsWUFBWTtBQUMvRCx1QkFBdUI7QUFDdkIsOEJBQThCO0FBQzlCLDZCQUE2QjtBQUM3Qiw0QkFBNEI7QUFDNUI7QUFDQTtBQUNPO0FBQ1A7QUFDQSxpQkFBaUIsNkNBQTZDLFVBQVUsc0RBQXNELGNBQWM7QUFDNUksMEJBQTBCLDZCQUE2QixvQkFBb0IsZ0RBQWdELGtCQUFrQjtBQUM3STtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsMkdBQTJHLHVGQUF1RixjQUFjO0FBQ2hOLHVCQUF1Qiw4QkFBOEIsZ0RBQWdELHdEQUF3RDtBQUM3Siw2Q0FBNkMsc0NBQXNDLFVBQVUsbUJBQW1CLElBQUk7QUFDcEg7QUFDQTtBQUNPO0FBQ1AsaUNBQWlDLHVDQUF1QyxZQUFZLEtBQUssT0FBTztBQUNoRztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDek5BO0FBQ0E7QUFDNEM7QUFDYztBQUNNO0FBQ047QUFDTTtBQUM1QjtBQUM3QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkJBQTJCO0FBQ3ZDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLFFBQVEsaURBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywrQ0FBUSxDQUFDLCtDQUFRLEdBQUcsb0JBQW9CLHlCQUF5QjtBQUNsRztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDLENBQUMseUVBQWtCO0FBQ087QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseUVBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHlFQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseUVBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHFDQUFxQyxtQkFBbUIsVUFBVTtBQUNsRSxrQkFBa0IsK0NBQVEsQ0FBQywrQ0FBUSxDQUFDLCtDQUFRLEdBQUcsb0JBQW9CO0FBQ25FLGdCQUFnQiwrQ0FBUSxDQUFDLCtDQUFRLEdBQUc7QUFDcEMsaUJBQWlCLCtDQUFRLENBQUMsK0NBQVEsR0FBRztBQUNyQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLCtDQUFRLEdBQUcsV0FBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxzQkFBc0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNkVBQWlCO0FBQy9DO0FBQ0EsNEVBQTRFLDZFQUFpQjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVFQUFjO0FBQzlDO0FBQ0E7QUFDQSwrQkFBK0IsK0NBQVEsQ0FBQywrQ0FBUSxHQUFHO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVFQUFnQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix5RUFBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUM2QjtBQUM5QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNpQztBQUNqQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtDQUFRLENBQUMsK0NBQVEsR0FBRyxZQUFZO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDbUU7QUFDVDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esc0JBQXNCLGlFQUFnQjtBQUN0QyxvQkFBb0IsOERBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1RUFBaUI7QUFDaEM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ2lEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsZ0RBQWdELHFDQUFxQztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLG9CQUFvQiw4REFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQixzQ0FBc0Msa0JBQWtCO0FBQ25GLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxjQUFjO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNPO0FBQ1AsY0FBYyw2QkFBNkIsMEJBQTBCLGNBQWMscUJBQXFCO0FBQ3hHLGlCQUFpQixvREFBb0QscUVBQXFFLGNBQWM7QUFDeEosdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsbUNBQW1DLFNBQVM7QUFDNUMsbUNBQW1DLFdBQVcsVUFBVTtBQUN4RCwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBLDhHQUE4RyxPQUFPO0FBQ3JILGlGQUFpRixpQkFBaUI7QUFDbEcseURBQXlELGdCQUFnQixRQUFRO0FBQ2pGLCtDQUErQyxnQkFBZ0IsZ0JBQWdCO0FBQy9FO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVLFlBQVksYUFBYSxTQUFTLFVBQVU7QUFDdEQsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw2QkFBNkIsc0JBQXNCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxrREFBa0QsUUFBUTtBQUMxRCx5Q0FBeUMsUUFBUTtBQUNqRCx5REFBeUQsUUFBUTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsaUJBQWlCLHVGQUF1RixjQUFjO0FBQ3RILHVCQUF1QixnQ0FBZ0MscUNBQXFDLDJDQUEyQztBQUN2SSw0QkFBNEIsTUFBTSxpQkFBaUIsWUFBWTtBQUMvRCx1QkFBdUI7QUFDdkIsOEJBQThCO0FBQzlCLDZCQUE2QjtBQUM3Qiw0QkFBNEI7QUFDNUI7QUFDQTtBQUNPO0FBQ1A7QUFDQSxpQkFBaUIsNkNBQTZDLFVBQVUsc0RBQXNELGNBQWM7QUFDNUksMEJBQTBCLDZCQUE2QixvQkFBb0IsZ0RBQWdELGtCQUFrQjtBQUM3STtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsMkdBQTJHLHVGQUF1RixjQUFjO0FBQ2hOLHVCQUF1Qiw4QkFBOEIsZ0RBQWdELHdEQUF3RDtBQUM3Siw2Q0FBNkMsc0NBQXNDLFVBQVUsbUJBQW1CLElBQUk7QUFDcEg7QUFDQTtBQUNPO0FBQ1AsaUNBQWlDLHVDQUF1QyxZQUFZLEtBQUssT0FBTztBQUNoRztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDek5BO0FBQ3lIO0FBQ2pCO0FBQ3hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSx3RUFBd0UsdUJBQXVCLDJDQUEyQywrQkFBK0IsNkJBQTZCLHFCQUFxQix5QkFBeUIsb0NBQW9DLHVCQUF1QiwyREFBMkQseUNBQXlDLFNBQVMsdUpBQXVKLGtCQUFrQixNQUFNLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLGlCQUFpQixNQUFNLHdEQUF3RCxtQkFBbUIsMkJBQTJCLE9BQU8sOEJBQThCLHFDQUFxQyxtQ0FBbUMsMkJBQTJCLDZCQUE2QixPQUFPLHVCQUF1QiwyQkFBMkIsb0NBQW9DLCtDQUErQyxXQUFXLE9BQU8sR0FBRyxxQkFBcUI7QUFDbG1DO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ3lIO0FBQ2pCO0FBQ3hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxvRkFBb0YsOEJBQThCLG1CQUFtQiw0Q0FBNEMsZ0NBQWdDLHFCQUFxQixxQ0FBcUMsdUVBQXVFLHNCQUFzQixtRUFBbUUsdUNBQXVDLDZFQUE2RSxzQkFBc0Isc0NBQXNDLHFCQUFxQiw0R0FBNEcsMkJBQTJCLHVCQUF1Qiw0SUFBNEksNkJBQTZCLHlCQUF5QixrSkFBa0osbURBQW1ELDJJQUEySSw4QkFBOEIscUlBQXFJLG9DQUFvQyx3SUFBd0ksa0NBQWtDLHVKQUF1SixvQ0FBb0MsbUVBQW1FLDJCQUEyQix1Q0FBdUMscUdBQXFHLGtDQUFrQyw2SEFBNkgsaURBQWlELGtGQUFrRix3Q0FBd0MsMkZBQTJGLHFCQUFxQixxR0FBcUcsb0JBQW9CLDJFQUEyRSx1Q0FBdUMscVJBQXFSLGdDQUFnQywwQkFBMEIsZ0RBQWdELGtCQUFrQixvQ0FBb0MseUNBQXlDLHVEQUF1RCxxQkFBcUIsNEVBQTRFLHFCQUFxQixrQkFBa0IsNkRBQTZELGdHQUFnRywwQkFBMEIsc0dBQXNHLDBCQUEwQiwrQkFBK0IseUVBQXlFLHFCQUFxQixrQkFBa0Isa0RBQWtELGlGQUFpRiwrQ0FBK0MsMkJBQTJCLG1CQUFtQiwwRkFBMEYsMkJBQTJCLHNCQUFzQixtRkFBbUYscUJBQXFCLG9CQUFvQix5QkFBeUIsMEJBQTBCLHVCQUF1QixjQUFjLGdCQUFnQixnQ0FBZ0MsMEJBQTBCLGVBQWUsdUJBQXVCLGFBQWEscUJBQXFCLDZCQUE2Qix1QkFBdUIsaUNBQWlDLHlCQUF5Qix3RkFBd0YsZ0NBQWdDLHdCQUF3QiwwQkFBMEIsK0JBQStCLGlCQUFpQixTQUFTLCtKQUErSixZQUFZLGlCQUFpQixNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxlQUFlLE1BQU0sa0JBQWtCLE9BQU8sV0FBVyxZQUFZLGdCQUFnQixPQUFPLGNBQWMsZ0JBQWdCLE9BQU8sY0FBYyxnQkFBZ0IsT0FBTyxtQkFBbUIsT0FBTyxtQkFBbUIsT0FBTyxtQkFBbUIsT0FBTyxtQkFBbUIsT0FBTyxtQkFBbUIsT0FBTyxhQUFhLGtCQUFrQixPQUFPLG1CQUFtQixPQUFPLG1CQUFtQixPQUFPLG1CQUFtQixPQUFPLGlCQUFpQixPQUFPLGlCQUFpQixPQUFPLGtCQUFrQixRQUFRLGNBQWMsaUJBQWlCLE9BQU8sV0FBVyxZQUFZLGtCQUFrQixPQUFPLGdCQUFnQixPQUFPLFdBQVcsVUFBVSxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxZQUFZLGlCQUFpQixPQUFPLFdBQVcsVUFBVSxpQkFBaUIsT0FBTyxjQUFjLGFBQWEsZ0JBQWdCLE9BQU8sY0FBYyxnQkFBZ0IsT0FBTyxXQUFXLGdCQUFnQixNQUFNLFlBQVksYUFBYSxXQUFXLGdCQUFnQixLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsZ0JBQWdCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sMERBQTBELDBCQUEwQixvQ0FBb0MsdUJBQXVCLE9BQU8sMEJBQTBCLHNDQUFzQywyQkFBMkIseUNBQXlDLHdDQUF3Qyw0QkFBNEIsV0FBVyxvQ0FBb0MsNkNBQTZDLFdBQVcsOENBQThDLDhCQUE4Qiw4Q0FBOEMsMkJBQTJCLDhDQUE4QyxxQ0FBcUMsK0JBQStCLG1EQUFtRCx5Q0FBeUMsbUNBQW1DLG1CQUFtQix5REFBeUQsNkRBQTZELG1CQUFtQixrREFBa0Qsd0NBQXdDLG1CQUFtQiw0Q0FBNEMsOENBQThDLG1CQUFtQixlQUFlLDBFQUEwRSwwQ0FBMEMsZUFBZSx5RkFBeUYsNENBQTRDLGVBQWUsV0FBVyxvQ0FBb0MsbUNBQW1DLDZDQUE2QyxpREFBaUQsMENBQTBDLGVBQWUseUVBQXlFLHlEQUF5RCxlQUFlLDhCQUE4QixnREFBZ0QsZUFBZSx1Q0FBdUMsNkJBQTZCLGVBQWUsaURBQWlELDRCQUE0QixlQUFlLFdBQVcsNENBQTRDLDZDQUE2QywySkFBMkosMENBQTBDLGtDQUFrQyxlQUFlLFdBQVcsT0FBTyxnQ0FBZ0Msd0JBQXdCLDBDQUEwQyw2Q0FBNkMsb0JBQW9CLDJCQUEyQixXQUFXLHlDQUF5Qyw2QkFBNkIsMEJBQTBCLG1FQUFtRSxtQ0FBbUMsa0NBQWtDLHlCQUF5QixzQ0FBc0MseUNBQXlDLG1CQUFtQixlQUFlLFdBQVcsc0NBQXNDLDZCQUE2QiwwQkFBMEIsd0RBQXdELHVCQUF1Qix5REFBeUQscUNBQXFDLDJCQUEyQixlQUFlLGdDQUFnQyxxQ0FBcUMsOEJBQThCLGVBQWUsV0FBVyxnREFBZ0QsNkJBQTZCLDBCQUEwQixXQUFXLE9BQU8sR0FBRywyQkFBMkIsNEJBQTRCLHlCQUF5QixnQkFBZ0IsZ0JBQWdCLEdBQUcsZ0NBQWdDLDRCQUE0QixpQkFBaUIseUJBQXlCLGVBQWUscUJBQXFCLEdBQUcsNkJBQTZCLHVCQUF1QixhQUFhLDJCQUEyQixPQUFPLEdBQUcsd0ZBQXdGLGdDQUFnQyxHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRywrQkFBK0IsaUJBQWlCLEdBQUcsdUJBQXVCO0FBQzV6VTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUN5SDtBQUNqQjtBQUN4Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsK0RBQStELG1CQUFtQixrQkFBa0IsOEJBQThCLHNDQUFzQyx5QkFBeUIscURBQXFELDhCQUE4QiwwREFBMEQsMEJBQTBCLGlGQUFpRix3QkFBd0IsMkJBQTJCLDhCQUE4QixpRUFBaUUseUNBQXlDLGdEQUFnRCxtQkFBbUIsdUJBQXVCLHlCQUF5QiwwQkFBMEIsMEJBQTBCLCtEQUErRCwyQkFBMkIsMkVBQTJFLGlDQUFpQyx5Q0FBeUMsMEJBQTBCLDhDQUE4Qyw2REFBNkQsMEJBQTBCLHVFQUF1RSwrQkFBK0IsMkJBQTJCLGtCQUFrQiw2REFBNkQsaUNBQWlDLGlDQUFpQyxzQkFBc0IsOENBQThDLFNBQVMsNkpBQTZKLFVBQVUsVUFBVSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sZUFBZSxNQUFNLFVBQVUsWUFBWSxrQkFBa0IsT0FBTyxrQkFBa0IsT0FBTyxXQUFXLFlBQVksYUFBYSxhQUFhLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGNBQWMsYUFBYSxXQUFXLGlCQUFpQixPQUFPLGdCQUFnQixPQUFPLG1CQUFtQixNQUFNLGVBQWUsS0FBSyxrQkFBa0IsTUFBTSxZQUFZLDJEQUEyRCxxQkFBcUIsb0JBQW9CLGdDQUFnQyx3Q0FBd0MseUJBQXlCLHFDQUFxQyxnQ0FBZ0MsZ0JBQWdCLDhCQUE4QixXQUFXLHVDQUF1Qyw4QkFBOEIsaUNBQWlDLGtDQUFrQyxXQUFXLE9BQU8sMEJBQTBCLGtDQUFrQywrQ0FBK0MsV0FBVyxPQUFPLGdDQUFnQyx1QkFBdUIsMkJBQTJCLDZCQUE2Qiw4QkFBOEIsNEJBQTRCLDBCQUEwQiwrQkFBK0IsMkJBQTJCLHlDQUF5QyxpREFBaUQsa0NBQWtDLG9EQUFvRCxlQUFlLFdBQVcsd0JBQXdCLDhCQUE4QixXQUFXLGtDQUFrQyxtQ0FBbUMsV0FBVyxPQUFPLEdBQUcsNkJBQTZCLGtCQUFrQiwyQ0FBMkMsbUNBQW1DLE9BQU8sR0FBRyxpQ0FBaUMsd0JBQXdCLDhDQUE4QyxHQUFHLHFCQUFxQjtBQUN6aUg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDc0g7QUFDakI7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLHdEQUF3RCx5QkFBeUIsVUFBVSxpQ0FBaUMsaURBQWlELHVCQUF1QixnQkFBZ0IsaUJBQWlCLHFCQUFxQixrQkFBa0IsMENBQTBDLGlDQUFpQyxvQ0FBb0MsaUNBQWlDLDJCQUEyQix3REFBd0QscUJBQXFCLG9CQUFvQixxREFBcUQscUJBQXFCLHdCQUF3QixnREFBZ0QscUJBQXFCLHNCQUFzQix1Q0FBdUMsa0RBQWtELHFCQUFxQixrQkFBa0IsdUNBQXVDLGtDQUFrQyxtQkFBbUIscUJBQXFCLDBDQUEwQyxnQkFBZ0IscUJBQXFCLGlDQUFpQyw0QkFBNEIseUJBQXlCLDRCQUE0QixtQ0FBbUMsZ0NBQWdDLDJCQUEyQixnQ0FBZ0MsZ0JBQWdCLHVCQUF1Qiw0QkFBNEIsMkNBQTJDLDJCQUEyQixrQkFBa0IsMkJBQTJCLDJDQUEyQyx5Q0FBeUMsd0JBQXdCLDJDQUEyQyx5Q0FBeUMsb0RBQW9ELHlCQUF5QiwwQkFBMEIsMEJBQTBCLGdEQUFnRCwyQkFBMkIsK0JBQStCLDBDQUEwQywrQkFBK0IseUJBQXlCLFVBQVUsK0NBQStDLFNBQVMsK0NBQStDLFFBQVEsd0NBQXdDLHNEQUFzRCxzQkFBc0IsU0FBUyxnSUFBZ0ksa0JBQWtCLE1BQU0sa0JBQWtCLFlBQVksS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxrQkFBa0IsTUFBTSxZQUFZLGtCQUFrQixNQUFNLFdBQVcsZUFBZSxPQUFPLFdBQVcsZUFBZSxPQUFPLFdBQVcsVUFBVSxpQkFBaUIsT0FBTyxXQUFXLFVBQVUsaUJBQWlCLE9BQU8sV0FBVyxnQkFBZ0IsWUFBWSxLQUFLLFVBQVUsZUFBZSxNQUFNLFlBQVksa0JBQWtCLE1BQU0sWUFBWSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLEtBQUssaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sdUJBQXVCLE1BQU0saURBQWlELHlCQUF5QixHQUFHLFVBQVUsaUNBQWlDLEdBQUcsbURBQW1ELHlCQUF5QixrQkFBa0IsbUJBQW1CLHVCQUF1QixvQkFBb0IsNENBQTRDLDRDQUE0QyxpQ0FBaUMsb0JBQW9CLHFDQUFxQyw2QkFBNkIsT0FBTyx3Q0FBd0MseUJBQXlCLHNCQUFzQixPQUFPLHFDQUFxQyx5QkFBeUIsMEJBQTBCLE9BQU8sZ0NBQWdDLHlCQUF5QiwwQkFBMEIseUNBQXlDLE9BQU8sa0NBQWtDLHlCQUF5QixzQkFBc0IseUNBQXlDLE9BQU8sa0JBQWtCLHVCQUF1Qix1QkFBdUIsT0FBTyxHQUFHLDBDQUEwQyxrQkFBa0IscUJBQXFCLHlCQUF5QixnQ0FBZ0MsMkJBQTJCLE9BQU8sb0JBQW9CLHVDQUF1QyxvQ0FBb0MsNkJBQTZCLE9BQU8sR0FBRyxnQ0FBZ0Msa0JBQWtCLDZCQUE2QixPQUFPLGtCQUFrQix5QkFBeUIsNEJBQTRCLEdBQUcsa0JBQWtCLDZCQUE2Qiw2Q0FBNkMseUNBQXlDLEdBQUcsd0JBQXdCLDZDQUE2Qyx5Q0FBeUMsR0FBRyxvREFBb0QsMkJBQTJCLDBCQUEwQixHQUFHLDBCQUEwQixnREFBZ0QsR0FBRywyQkFBMkIsK0JBQStCLEdBQUcsMENBQTBDLCtCQUErQixHQUFHLHlCQUF5QixZQUFZLHVDQUF1QyxXQUFXLHVDQUF1QyxVQUFVLDhCQUE4QixHQUFHLHNEQUFzRCxzQkFBc0IsR0FBRyxxQkFBcUI7QUFDbDZLO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUE4RztBQUM5RyxNQUFvRztBQUNwRyxNQUEyRztBQUMzRyxNQUE4SDtBQUM5SCxNQUF1SDtBQUN2SCxNQUF1SDtBQUN2SCxNQUFrVTtBQUNsVTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNQQUFPOzs7O0FBSTRRO0FBQ3BTLE9BQU8saUVBQWUsc1BBQU8sSUFBSSw2UEFBYyxHQUFHLDZQQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUE4RztBQUM5RyxNQUFvRztBQUNwRyxNQUEyRztBQUMzRyxNQUE4SDtBQUM5SCxNQUF1SDtBQUN2SCxNQUF1SDtBQUN2SCxNQUFzVTtBQUN0VTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDBQQUFPOzs7O0FBSWdSO0FBQ3hTLE9BQU8saUVBQWUsMFBBQU8sSUFBSSxpUUFBYyxHQUFHLGlRQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUE4RztBQUM5RyxNQUFvRztBQUNwRyxNQUEyRztBQUMzRyxNQUE4SDtBQUM5SCxNQUF1SDtBQUN2SCxNQUF1SDtBQUN2SCxNQUFxVTtBQUNyVTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHlQQUFPOzs7O0FBSStRO0FBQ3ZTLE9BQU8saUVBQWUseVBBQU8sSUFBSSxnUUFBYyxHQUFHLGdRQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUEyRztBQUMzRyxNQUFpRztBQUNqRyxNQUF3RztBQUN4RyxNQUEySDtBQUMzSCxNQUFvSDtBQUNwSCxNQUFvSDtBQUNwSCxNQUFpVDtBQUNqVDtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDhPQUFPOzs7O0FBSTJQO0FBQ25SLE9BQU8saUVBQWUsOE9BQU8sSUFBSSxxUEFBYyxHQUFHLHFQQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNidUM7QUFDRjtBQVdyQzs7R0FFRztBQUNILE1BQU0sWUFBYSxTQUFRLDRDQUFnQztJQUV2RCxNQUFNO1FBQ0YsT0FBTyxDQUNILDREQUFDLDJDQUFNLGtCQUNRLFFBQVEsRUFDbkIsSUFBSSxRQUNKLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUM3RCxJQUFJLEVBQUMsSUFBSSxFQUNULElBQUksRUFBQyxVQUFVLEVBQ2YsU0FBUyxFQUFDLFlBQVksRUFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUUzQiw0REFBQyx5Q0FBSSxJQUNELElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNyQixtRkFBbUYsQ0FBQyxDQUFDO29CQUNyRixrRkFBa0YsRUFFdEYsSUFBSSxFQUFDLEdBQUcsR0FDVjtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FDekIsQ0FDWixDQUFDO0lBQ04sQ0FBQztDQUNKO0FBRUQsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0c7QUFDUTtBQUNMO0FBRU07QUFDRTtBQVUxQzs7R0FFRztBQUNILE1BQU0sY0FBZSxTQUFRLDRDQUE2QjtJQUExRDs7UUFFSTs7V0FFRztRQUNILHVCQUFrQixHQUFhLEdBQXlCLEVBQUU7WUFDdEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDMUMsT0FBTyxDQUNILDREQUFDLHdDQUFHLElBQ0EsRUFBRSxFQUFFLFdBQVcsR0FBRyxRQUFRLENBQUMsRUFBRSxHQUFHLE1BQU0sRUFDdEMsU0FBUyxFQUFDLEtBQUssRUFDZixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsR0FBRztvQkFFbEUscUVBQUssRUFBRSxFQUFFLFdBQVcsR0FBRyxRQUFRLENBQUMsRUFBRSxHQUFHLGNBQWMsRUFBRSxTQUFTLEVBQUMsZ0NBQWdDLElBQzFGLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUU7d0JBQ3pDLE9BQU8sQ0FDSCw0REFBQyxxREFBWSxJQUNULFlBQVksRUFBRSxZQUFZLEVBQzFCLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFDakMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FDeEQsQ0FDTCxDQUFDO29CQUNOLENBQUMsQ0FBQyxDQUNBLENBQ0osQ0FDVCxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBMEJMLENBQUM7SUF4QkcsTUFBTTtRQUNGLE9BQU8sQ0FDSCxxRUFBSyxFQUFFLEVBQUMsaUJBQWlCO1lBQ3JCLGlGQUFlO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FDbEIsNERBQUMsb0RBQVcsSUFDUixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ3pCLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFDakMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUN2QyxDQUNMO1lBQ0QscUVBQUssU0FBUyxFQUFDLFlBQVk7Z0JBQ3ZCLDREQUFDLHlDQUFJLElBQ0QsUUFBUSxFQUFFLFNBQVMsVUFBVSxLQUFHLENBQUMsRUFDakMsT0FBTyxFQUFFLFNBQVMsVUFBVSxLQUFHLENBQUMsRUFDaEMsSUFBSSxFQUFDLE1BQU0sRUFDWCxVQUFVLFVBRVQsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQ2hELENBQ0wsQ0FDSixDQUNULENBQUM7SUFDTixDQUFDO0NBQ0o7QUFFRCxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RVM7QUFDTTtBQUNIO0FBUzFDOztHQUVHO0FBQ0gsTUFBTSxXQUFZLFNBQVEsNENBQWtDO0lBQ3hELE1BQU07UUFDRixPQUFPLENBQ0gscUVBQUssRUFBRSxFQUFDLGNBQWM7WUFDbEIsNERBQUMsbURBQWMsSUFDWCxVQUFVLEVBQUUsSUFBSSxFQUNoQixtQkFBbUIsRUFBRSxJQUFJLEVBQ3pCLFFBQVEsRUFBRSxTQUFTLFVBQVUsS0FBRyxDQUFDLEVBQ2pDLElBQUksRUFBQyxTQUFTLEVBQ2QsaUJBQWlCLEVBQUUsSUFBSSxFQUN2QixTQUFTLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNuQixFQUNELDJCQUEyQixFQUFFLEdBQUcsRUFBRTtvQkFBRSxPQUFPLENBQ3ZDO3dCQUNJLDREQUFDLHlDQUFJLElBQUMsSUFBSSxFQUFDLG9GQUFvRixHQUFFOzhDQUUvRixDQUNUO2dCQUFBLENBQUMsRUFDRixZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUU7b0JBQ2pELE9BQU87d0JBQ0gsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLO3dCQUN6QixLQUFLLEVBQUUsWUFBWSxDQUFDLEVBQUU7d0JBQ3RCLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFOzRCQUNiLE9BQU8sNERBQUMscURBQVksSUFDaEIsWUFBWSxFQUFFLFlBQVksRUFDMUIsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUNqQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUN4RDt3QkFDTixDQUFDO3FCQUNKO2dCQUNMLENBQUMsQ0FBQyxHQUNKLENBQ0EsQ0FDVDtJQUNMLENBQUM7Q0FDSjtBQUVELGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEUTtBQUNJO0FBQ29EO0FBZ0IzRjs7R0FFRztBQUNILE1BQU0sZ0JBQWlCLFNBQVEsNENBQXVEO0lBQ2xGLFlBQVksS0FBVTtRQUNsQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVELE1BQU07UUFDRixPQUFPLENBQ0gscUVBQUssRUFBRSxFQUFDLHFCQUFxQjtZQUN6QixxRUFBSyxFQUFFLEVBQUMsNEJBQTRCO2dCQUNoQyw0REFBQywyQ0FBTSxrQkFDUSxRQUFRLEVBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFDOUIsSUFBSSxFQUFDLFNBQVMsRUFDZCxFQUFFLEVBQUMsa0JBQWtCLEVBQ3JCLElBQUksRUFBQyxVQUFVLGdCQUdWLENBQ1A7WUFDTixxRUFBSyxFQUFFLEVBQUMseUJBQXlCO2dCQUM3Qiw0REFBQyw2Q0FBUTtvQkFDTCw0REFBQyxtREFBYyxJQUNYLEVBQUUsRUFBQyxlQUFlLEVBQ2xCLElBQUksRUFBQyxVQUFVLEVBQ2YsS0FBSyxFQUFFLEtBQUs7O3dCQUdaLDREQUFDLHlDQUFJLElBQUMsSUFBSSxFQUFDLHVGQUF1RixHQUFFLENBQ3ZGO29CQUNqQiw0REFBQyxpREFBWSxJQUNULFNBQVMsRUFBQyxLQUFLO3dCQUVmLDREQUFDLGlEQUFZLElBQ1QsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUNoQyxFQUFFLEVBQUMsb0JBQW9CLEVBQ3ZCLElBQUksRUFBQyxVQUFVLEVBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxlQUd4Qjt3QkFDZiw0REFBQyxpREFBWSxJQUNULE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDaEMsRUFBRSxFQUFDLG9CQUFvQixFQUN2QixJQUFJLEVBQUMsVUFBVSxFQUNmLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixlQUcxQixDQUNKLENBQ1IsQ0FDVDtZQUNOLHFFQUFLLEVBQUUsRUFBQyw0QkFBNEI7Z0JBQ2hDLDREQUFDLDJDQUFNLElBQ0gsRUFBRSxFQUFDLHlCQUF5QixFQUM1QixJQUFJLEVBQUMsVUFBVSxFQUNmLE9BQU8sRUFBRSxHQUFHLEVBQUU7d0JBQ1YsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRTs0QkFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQzt5QkFDN0I7NkJBQU07NEJBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQzt5QkFDN0I7b0JBQ0wsQ0FBQztvQkFFRCw0REFBQyx5Q0FBSSxJQUNELElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzRCQUM5Qix1RkFBdUYsQ0FBQyxDQUFDOzRCQUN6RiwwRkFBMEYsRUFFOUYsSUFBSSxFQUFDLEdBQUcsR0FDVjtvQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQ2hELENBQ1AsQ0FDSixDQUNULENBQUM7SUFDTixDQUFDO0NBQ0o7QUFFRCxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdHO0FBQ0k7QUFHdUI7QUFDZjtBQUVDO0FBR0k7QUFDRjtBQUNOO0FBd0I1Qzs7O0dBR0c7QUFDSCxNQUFNLGtCQUFtQixTQUFRLDRDQUF5QztJQUl0RSxZQUFZLEtBQVU7UUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBSEEsVUFBSyxHQUFHLHVEQUFlLEVBQWtCLENBQUM7UUFnQjNEOzs7V0FHRztRQUNILGdCQUFXLEdBQUcsQ0FBQyxJQUFjLEVBQUUsRUFBRTtZQUM3QixzRkFBc0Y7WUFDdEYsMkJBQTJCO1lBQzNCLDRDQUE0QztRQUNoRCxDQUFDO1FBRUQ7O1dBRUc7UUFDSCxlQUFVLEdBQUcsR0FBRyxFQUFFO1lBQ2QsS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDL0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ3hCO1FBQ0wsQ0FBQztRQUVEOztXQUVHO1FBQ0gsZUFBVSxHQUFHLEdBQUcsRUFBRTtZQUNkLEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQy9DLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUN6QjtRQUNMLENBQUM7UUFFRDs7V0FFRztRQUNILGVBQVUsR0FBRyxHQUFHLEVBQUU7WUFDZCxLQUFLLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFO2dCQUMvQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDM0I7UUFDTCxDQUFDO1FBRUQ7O1dBRUc7UUFDSCxlQUFVLEdBQUcsR0FBRyxFQUFFO1lBQ2QsS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDL0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQzVCO1FBQ0wsQ0FBQztRQUVEOztXQUVHO1FBQ0gsZ0JBQVcsR0FBRyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixtQkFBbUIsRUFBRSxLQUFLO2FBQzdCLENBQUM7UUFDTixDQUFDO1FBRUQ7OztXQUdHO1FBQ0gsb0JBQWUsR0FBRyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxPQUFPLENBQUMsU0FBUyxHQUFHLGdCQUFnQjtZQUNwQyxPQUFPLENBQUMsU0FBUyxHQUFHLFVBQVU7WUFDOUIsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSCx1QkFBa0IsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQ2xDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxtQkFBbUI7WUFDdkMsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFaEUsSUFBSSxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDOUIsT0FBTyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7Z0JBQ25DLE9BQU8sT0FBTyxDQUFDO2FBQ2xCO1lBRUQsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLENBQUM7WUFDcEMsS0FBSyxJQUFJLFFBQVEsSUFBSSxlQUFlLEVBQUU7Z0JBQ2xDLGtCQUFrQixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLEdBQUc7YUFDbkQ7WUFDRCxPQUFPLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRCxPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNILHNCQUFpQixHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFDakMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxPQUFPLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO1lBQ3ZDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQzVDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQy9FO1lBQ0QsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQztRQUVEOzs7V0FHRztRQUNILFlBQU8sR0FBRyxDQUFDLElBQWMsRUFBRSxFQUFFO1lBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRztvQkFDakIsUUFBUTtpQkFDWDthQUNKO2lCQUFNO2dCQUNILElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHO29CQUNqQixJQUFJLENBQUMsZUFBZSxFQUFFO29CQUN0QixRQUFRO29CQUNSLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUNuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDckM7YUFDSjtRQUNMLENBQUM7UUFFRDs7O1dBR0c7UUFDSCw0QkFBdUIsR0FBRyxDQUFDLEdBQWdCLEVBQUUsRUFBRTtZQUMzQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUMvQjtZQUVELElBQUksR0FBRyxFQUFFO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ1YsR0FBRyxFQUFFLEdBQUc7aUJBQ1gsQ0FBQyxDQUFDO2dCQUVILG1CQUFtQjtnQkFDbkIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtvQkFDcEIsTUFBTSxTQUFTLEdBQWMsSUFBSSw4REFBUyxDQUFDO3dCQUN2QyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7d0JBRWQsd0NBQXdDO3dCQUN4Qyx1QkFBdUIsRUFBRSxDQUFPLEtBQUssRUFBRSxFQUFFOzRCQUNyQyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOzRCQUV0QixnQkFBZ0I7NEJBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0NBQ1QsU0FBUyxFQUFFLGdCQUFnQjs2QkFDOUIsQ0FBQzs0QkFDRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUVuQix1QkFBdUI7NEJBQ3ZCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzs0QkFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRztnQ0FDbkIsQ0FBQzt3Q0FDRyxLQUFLLEVBQUUsUUFBUTt3Q0FDZixTQUFTLEVBQUUsaUJBQWlCO3dDQUM1QixFQUFFLEVBQUUsUUFBUTtxQ0FDZixDQUFDO2dDQUNGLENBQUM7d0NBQ0csS0FBSyxFQUFFLFNBQVM7d0NBQ2hCLFNBQVMsRUFBRSxvQ0FBb0M7d0NBQy9DLEVBQUUsRUFBRSxNQUFNO3FDQUNiLENBQUM7Z0NBQ0YsQ0FBQzt3Q0FDRyxLQUFLLEVBQUUsbUJBQW1CO3dDQUMxQixLQUFLLEVBQUUsNkZBQTZGO3dDQUNwRyxFQUFFLEVBQUUsY0FBYzt3Q0FDbEIsaURBQWlEO3dDQUNqRCxRQUFRLEVBQUUsQ0FBQyxDQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVM7NENBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxRQUFROzRDQUNyQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSTtnREFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxDQUM1RDtxQ0FDSixDQUFDO2dDQUNGO29DQUNJO3dDQUNJLEtBQUssRUFBRSxnQkFBZ0I7d0NBQ3ZCLEtBQUssRUFBRSw0RkFBNEY7d0NBQ25HLEVBQUUsRUFBRSxnQkFBZ0I7cUNBQ3ZCO29DQUNEO3dDQUNJLEtBQUssRUFBRSxlQUFlO3dDQUN0QixLQUFLLEVBQUUsMkZBQTJGO3dDQUNsRyxFQUFFLEVBQUUsZUFBZTtxQ0FDdEI7b0NBQ0Q7d0NBQ0ksS0FBSyxFQUFFLGNBQWM7d0NBQ3JCLEtBQUssRUFBRSwwRkFBMEY7d0NBQ2pHLEVBQUUsRUFBRSxjQUFjO3FDQUNyQjtvQ0FDRDt3Q0FDSSxLQUFLLEVBQUUsZ0JBQWdCO3dDQUN2QixLQUFLLEVBQUUsNEZBQTRGO3dDQUNuRyxFQUFFLEVBQUUsZ0JBQWdCO3FDQUN2QjtpQ0FDSjtnQ0FDRCxDQUFDO3dDQUNHLEtBQUssRUFBRSxhQUFhO3dDQUNwQixTQUFTLEVBQUUsdUJBQXVCO3dDQUNsQyxFQUFFLEVBQUUsYUFBYTtxQ0FDcEIsQ0FBQzs2QkFDTCxDQUFDOzRCQUVGLElBQUksQ0FBQyxVQUFVLENBQUM7Z0NBQ1osOEJBQThCO2dDQUM5QixxRUFBbUIsQ0FDZixHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFDNUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FDL0I7Z0NBQ0QsZ0RBQWdEO2dDQUNoRCxvRUFBa0IsQ0FDZCxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFDckIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQ2pDO2dDQUNELGlEQUFpRDtnQ0FDakQsb0VBQWtCLENBQ2QsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFDdEIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUNoQzs2QkFDSixDQUFDLENBQUM7d0JBQ1AsQ0FBQzt3QkFDRCxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO3dCQUM3QixnQkFBZ0IsRUFBRSxJQUFJO3dCQUN0Qix3QkFBd0IsRUFBRSxJQUFJO3FCQUNqQyxDQUFDLENBQUM7b0JBRUgsb0NBQW9DO29CQUNwQyxTQUFTLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7d0JBQ3JDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO3dCQUMzQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUM7d0JBRXpFLFFBQVEsRUFBRSxFQUFFOzRCQUNSLEtBQUssTUFBTTtnQ0FDUCw2QkFBNkI7Z0NBQzdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztnQ0FDaEMsTUFBTTs0QkFDVixLQUFLLFFBQVE7Z0NBQ1Qsd0JBQXdCO2dDQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQ0FDaEMsTUFBTTs0QkFDVixLQUFLLGNBQWM7Z0NBQ2YseUJBQXlCO2dDQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDO29DQUNWLG1CQUFtQixFQUFFLElBQUk7b0NBQ3pCLFlBQVksRUFBRSxLQUFLLENBQUMsSUFBSTtpQ0FDM0IsQ0FBQyxDQUFDO2dDQUNILE1BQU07NEJBQ1YsS0FBSyxnQkFBZ0I7Z0NBQ2pCLDBCQUEwQjtnQ0FDMUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO29DQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUNBQ3JEO2dDQUNELE1BQU07NEJBQ1YsS0FBSyxlQUFlO2dDQUNoQiw4QkFBOEI7Z0NBQzlCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0NBQzdELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUNBQ3JEO2dDQUNELE1BQU07NEJBQ1YsS0FBSyxjQUFjO2dDQUNmLHFCQUFxQjtnQ0FDckIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0NBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lDQUM3QztnQ0FDRCxNQUFNOzRCQUNWLEtBQUssZ0JBQWdCO2dDQUNqQixzQkFBc0I7Z0NBQ3RCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO29DQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUNBQ3JGO2dDQUNELE1BQU07NEJBQ1YsS0FBSyxhQUFhO2dDQUNkLElBQUksQ0FBQyxRQUFRLENBQUM7b0NBQ1YsaUJBQWlCLEVBQUUsSUFBSTtvQ0FDdkIsWUFBWSxFQUFFLEtBQUssQ0FBQyxJQUFJO2lDQUMzQixDQUFDO3lCQUNUO29CQUNMLENBQUMsQ0FBQyxDQUFDO29CQUVILDZFQUE2RTtvQkFDN0UsU0FBUyxDQUFDLFVBQVUsQ0FBQzt3QkFDakIscUVBQW1CLENBQ2YsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUMxRixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDOzRCQUNoQixlQUFlLEVBQUUsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzt5QkFDeEcsQ0FBQyxDQUNMO3dCQUNELHFFQUFtQixDQUNmLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQ3RGLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7NEJBQ2hCLGNBQWMsRUFBRSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQzt5QkFDbkcsQ0FBQyxDQUNMO3dCQUNELHFFQUFtQixDQUNmLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFDdkYsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzs0QkFDaEIsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQzt5QkFDdEcsQ0FBQyxDQUNMO3FCQUNKLENBQUM7b0JBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDVixNQUFNLEVBQUUsU0FBUztxQkFDcEIsQ0FBQyxDQUFDO2lCQUNOO2FBQ0o7UUFDTCxDQUFDO1FBbFVHLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxHQUFHLEVBQUUsSUFBSTtZQUNULE1BQU0sRUFBRSxJQUFJO1lBQ1osbUJBQW1CLEVBQUUsS0FBSztZQUMxQixpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLGdCQUFnQixFQUFFLElBQUk7U0FDekI7SUFDTCxDQUFDO0lBMFRELE1BQU07UUFDRixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ25CLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFO2dCQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RCO1NBQ0o7UUFFRCxPQUFPLENBQ0gscUVBQUssRUFBRSxFQUFDLHNCQUFzQjtZQUMxQiw0REFBQyw2REFBb0IsSUFDakIsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUN6QyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsdUJBQXVCLEdBQ2xEO1lBQ0Ysd0VBQUssa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFNO1lBRTVELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUMvQixxRUFBSyxFQUFFLEVBQUMsbUJBQW1CO2dCQUN2Qix1TEFDbUYsQ0FDakYsQ0FDVDtZQUdELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUM5Qiw0REFBQyx5REFBZ0IsSUFDYixVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQ2pDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUM3QixZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQzdCLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUM3QixlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQzNDLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFDekMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FDL0MsQ0FDTDtZQUVMLHFFQUFLLEVBQUUsRUFBQyxxQkFBcUIsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRztZQUU1QyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVk7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUs7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUztnQkFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBc0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUMxRSw0REFBQyx3REFBZSxJQUNaLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBcUIsRUFDcEQsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQ3BDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFDLENBQUMsR0FDekYsQ0FDTDtZQUdELElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTtnQkFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLENBQzdCLDREQUFDLHNEQUFhLElBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFDcEMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQ2xDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFDLENBQUMsRUFDbkYsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUN2QyxDQUNMLENBR0gsQ0FDVCxDQUFDO0lBQ04sQ0FBQztDQUNKO0FBRUQsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyYks7QUFDNEM7QUFDNUI7QUFDeEI7QUFDNEI7QUFDTTtBQXFCakU7OztHQUdHO0FBQ0gsTUFBTSxlQUFnQixTQUFRLDRDQUFxRDtJQUUvRSxZQUFZLEtBQVU7UUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBVWpCOztXQUVHO1FBQ0gsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsZ0JBQWdCLEVBQUUsOEVBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2hGLENBQUMsQ0FBQztZQUVILElBQUksTUFBTSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQTJCLENBQUMsTUFBTSxDQUFDO1lBQ2xFLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDakIsS0FBSyxlQUFlO29CQUNoQixJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssT0FBTyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssR0FBRyxFQUFFO3dCQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDOzRCQUNWLGVBQWUsRUFBRSxJQUFJOzRCQUNyQixjQUFjLEVBQUUsSUFBSTs0QkFDcEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTs0QkFDdEMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO3lCQUNwQixDQUFDLENBQUM7cUJBQ047eUJBQU07d0JBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQzs0QkFDVixlQUFlLEVBQUUsSUFBSTs0QkFDckIsY0FBYyxFQUFFLElBQUk7NEJBQ3BCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTs0QkFDOUIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO3lCQUNwQixDQUFDLENBQUM7cUJBQ047b0JBQ0QsTUFBTTtnQkFDVixLQUFLLGdCQUFnQjtvQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDVixlQUFlLEVBQUUsS0FBSzt3QkFDdEIsY0FBYyxFQUFFLElBQUk7d0JBQ3BCLEtBQUssRUFBRSxTQUFTO3dCQUNoQixJQUFJLEVBQUcsTUFBOEIsQ0FBQyxLQUFLO3FCQUM5QyxDQUFDLENBQUM7b0JBQ0gsTUFBTTtnQkFDVixLQUFLLGFBQWE7b0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDVixlQUFlLEVBQUUsSUFBSTt3QkFDckIsY0FBYyxFQUFFLEtBQUs7d0JBQ3JCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTt3QkFDOUIsSUFBSSxFQUFFLElBQUk7cUJBQ2IsQ0FBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1YsS0FBSyxhQUFhO29CQUNkLElBQUksQ0FBQyxRQUFRLENBQUM7d0JBQ1YsZUFBZSxFQUFFLElBQUk7d0JBQ3JCLGNBQWMsRUFBRSxJQUFJO3dCQUNwQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7d0JBQzlCLElBQUksRUFBRyxNQUEyQixDQUFDLEtBQUs7cUJBQzNDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNWO29CQUNJLElBQUksQ0FBQyxRQUFRLENBQUM7d0JBQ1YsZUFBZSxFQUFFLElBQUk7d0JBQ3JCLGNBQWMsRUFBRSxLQUFLO3dCQUNyQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7d0JBQzlCLElBQUksRUFBRSxJQUFJO3FCQUNiLENBQUMsQ0FBQzthQUNWO1FBQ0wsQ0FBQztRQUVEOztXQUVHO1FBQ0gsNEJBQXVCLEdBQUcsR0FBRyxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsZUFBZSxFQUFFLElBQUk7YUFDeEIsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBMkIsQ0FBQyxNQUFNLEdBQUcsSUFBSSx1RUFBa0IsQ0FBQztnQkFDMUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztnQkFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTthQUN4QixDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQ7OztXQUdHO1FBQ0gsc0JBQWlCLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFxQixDQUFDO1lBQzdDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUEwQixDQUFDO1lBRWhELHdCQUF3QjtZQUN4QixRQUFRLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUMxQixLQUFLLGVBQWU7b0JBQ2hCLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssT0FBTyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLEdBQUcsRUFBRTt3QkFDcEUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksa0RBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDcEQ7eUJBQU07d0JBQ0gsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxrREFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM1QztvQkFDRCxNQUFNO2dCQUNWLEtBQUssYUFBYTtvQkFDZCxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLGtEQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pDLE1BQU07Z0JBQ1YsS0FBSyxhQUFhO29CQUNkLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksa0RBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekMsTUFBTTtnQkFDVjtvQkFDSSxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLGtEQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEQ7UUFDTCxDQUFDO1FBRUQ7OztXQUdHO1FBQ0gscUJBQWdCLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtZQUNoQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQXFCLENBQUM7WUFDN0MsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQTBCLENBQUM7WUFFaEQsd0JBQXdCO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUM1QixRQUFRLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUMxQixLQUFLLGVBQWU7b0JBQ2YsUUFBUSxDQUFDLE1BQTZCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDcEQsTUFBTTtnQkFDVixLQUFLLGdCQUFnQjtvQkFDakIsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQTZCO29CQUNyRCxJQUFJLEtBQUssR0FBVyxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7b0JBQ3JELFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUN0QixRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7b0JBQy9CLE1BQU07Z0JBQ1YsS0FBSyxhQUFhO29CQUNiLFFBQVEsQ0FBQyxNQUEyQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ25ELE1BQU07YUFDYjtRQUNMLENBQUM7UUFFRCxpQkFBWSxHQUFHLEdBQUcsRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztZQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUE3SUcsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULGVBQWUsRUFBRSxLQUFLO1lBQ3RCLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLEtBQUssRUFBRSxJQUFJO1lBQ1gsSUFBSSxFQUFFLElBQUk7WUFDVixnQkFBZ0IsRUFBRSxJQUFJO1NBQ3pCO0lBQ0wsQ0FBQztJQXdJRCxNQUFNO1FBQ0YsT0FBTyxDQUNILDREQUFDLDBDQUFLLElBQ0YsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUN2QixRQUFRLEVBQUUsU0FBUyxVQUFVLEtBQUcsQ0FBQyxFQUNqQyxPQUFPLEVBQUUsU0FBUyxVQUFVLEtBQUcsQ0FBQyxFQUNoQyxNQUFNLEVBQUUsU0FBUyxVQUFVLEtBQUcsQ0FBQyxFQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtZQUU3Qiw0REFBQyxnREFBVyxJQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7O2dCQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLO2dDQUNsQjtZQUNkLDREQUFDLDhDQUFTO2dCQUVGLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxJQUFJLENBQ3pCLHFFQUFLLFNBQVMsRUFBQyxtQkFBbUI7O29CQUU5Qiw0REFBQywyQ0FBTSxrQkFDUSxtQkFBbUIsRUFDOUIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUN2RCxHQUFHLEVBQUUsQ0FBQyxFQUNOLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUNsQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQ3hCO29CQUNGLDJFQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFTLENBQzlCLENBQ1Q7Z0JBR0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLElBQUksQ0FDMUIscUVBQUssU0FBUyxFQUFDLG9CQUFvQjs7b0JBRS9CLDREQUFDLG1FQUFXLGtCQUNHLG9CQUFvQixFQUMvQixLQUFLLEVBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQ3pCLE1BQU0sRUFBRSxFQUFFLEVBQ1YsS0FBSyxFQUFFLEVBQUUsRUFDVCxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFDbEQsT0FBTyxFQUFFLFNBQVMsVUFBVSxLQUFHLENBQUMsRUFDaEMsU0FBUyxFQUFDLFFBQVEsRUFDbEIsSUFBSSxFQUFDLFNBQVMsR0FDaEIsQ0FDQSxDQUNUO2dCQUdDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBc0IsQ0FBQyxRQUEyQixDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssZ0JBQWdCO29CQUNoRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxJQUFJLENBQzNCLHFFQUFLLEVBQUUsRUFBQyx3QkFBd0I7b0JBQzVCLDREQUFDLDJDQUFNLElBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyx1QkFBdUIsbUJBQXVCO29CQUNwRTt3QkFDSSxzTEFBb0gsQ0FDbEgsQ0FDSixDQUNULENBRUc7WUFDWiw0REFBQyxnREFBVztnQkFDUiw0REFBQywyQ0FBTSxJQUNILE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxhQUdyQjtnQkFDVCw0REFBQywyQ0FBTSxJQUNILE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFDMUIsRUFBRSxFQUFDLHNCQUFzQixFQUN6QixJQUFJLEVBQUMsU0FBUyxXQUdULENBQ0MsQ0FDVixDQUNYLENBQUM7SUFDTixDQUFDO0NBQ0o7QUFFRCxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlQUTtBQUM0QztBQWdCbkY7O0dBRUc7QUFDSCxNQUFNLGFBQWMsU0FBUSw0Q0FBaUQ7SUFFekUsWUFBWSxLQUFVO1FBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQVFqQjs7V0FFRztRQUNILGFBQVEsR0FBRyxHQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixNQUFNLEVBQUUsS0FBSztnQkFDYixXQUFXLEVBQUUsS0FBSztnQkFDbEIsR0FBRyxFQUFFLEVBQUU7YUFDVixDQUFDLENBQUM7WUFDSCxJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0QsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QjtRQUNMLENBQUM7UUFwQkcsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULE1BQU0sRUFBRSxLQUFLO1lBQ2IsV0FBVyxFQUFFLEtBQUs7WUFDbEIsR0FBRyxFQUFFLEVBQUU7U0FDVjtJQUNMLENBQUM7SUFpQkQsTUFBTTtRQUNGLE9BQU8sQ0FDSCw0REFBQywwQ0FBSyxJQUNGLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFDdkIsUUFBUSxFQUFFLFNBQVMsVUFBVSxLQUFHLENBQUMsRUFDakMsT0FBTyxFQUFFLFNBQVMsVUFBVSxLQUFHLENBQUMsRUFDaEMsTUFBTSxFQUFFLFNBQVMsVUFBVSxLQUFHLENBQUMsRUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7WUFFN0IsNERBQUMsZ0RBQVcsSUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO2dCQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLOytCQUNiO1lBQ2QsNERBQUMsOENBQVM7Z0JBQ04scUVBQUssU0FBUyxFQUFDLGNBQWM7O29CQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDeEI7Z0JBQ04scUVBQUssU0FBUyxFQUFDLG1CQUFtQjs7b0JBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUNsQyxDQUNFO1lBQ1osNERBQUMsZ0RBQVc7Z0JBQ1IsNERBQUMsMkNBQU0sSUFDSCxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLFlBR3pCO2dCQUVMLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQ2QsNERBQUMsMkNBQU0sSUFDSCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsRUFDcEQsSUFBSSxFQUFDLFNBQVMsZUFHVCxDQUNaLENBRUssQ0FDVixDQUNYLENBQUM7SUFDTixDQUFDO0NBQ0o7QUFFRCxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGOEQ7QUFDbkQ7QUFZeEM7O0dBRUc7QUFDSCxNQUFNLHFCQUFzQixTQUFRLDRDQUErQztJQUUvRSxZQUFZLEtBQVU7UUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBT2pCOztXQUVHO1FBQ0gsZUFBVSxHQUFHLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2FBQ3pCLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxrQkFBYSxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFDN0IsT0FBTztnQkFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFO2dCQUN4QixHQUFHLEVBQUUsd0NBQXdDO2FBQ2hELENBQUM7UUFDTixDQUFDO1FBcEJHLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsS0FBSztTQUNkLENBQUM7SUFDTixDQUFDO0lBa0JELE1BQU07UUFDRixPQUFPLENBQ0gscUVBQUssRUFBRSxFQUFDLHlCQUF5QjtZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUNoQiw0REFBQywyQ0FBTSxJQUNILE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUN4QixFQUFFLEVBQUMsMkJBQTJCLEVBQzlCLElBQUksRUFBQyxTQUFTO2dCQUVkLDREQUFDLHlDQUFJLElBQ0QsSUFBSSxFQUFDLGtGQUFrRixFQUN2RixJQUFJLEVBQUMsR0FBRyxHQUNWO3VDQUVHLENBQ1o7WUFDRCw0REFBQywwQ0FBSyxJQUNGLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFDdkIsUUFBUSxFQUFFLFNBQVMsVUFBVSxLQUFHLENBQUMsRUFDakMsT0FBTyxFQUFFLFNBQVMsVUFBVSxLQUFHLENBQUMsRUFDaEMsTUFBTSxFQUFFLFNBQVMsVUFBVSxLQUFHLENBQUMsRUFDL0IsUUFBUSxFQUFFLFNBQVMsVUFBVSxLQUFHLENBQUMsRUFDakMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVO2dCQUV2Qiw0REFBQyxnREFBVyxJQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSx3QkFFdEI7Z0JBQ2QsNERBQUMsOENBQVM7O29CQUVOLDREQUFDLDhDQUFTLElBQ04sU0FBUyxFQUFDLE1BQU0sRUFDaEIsV0FBVyxFQUFDLHNCQUFzQixFQUNsQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFDdkQscUJBQXFCLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFDekMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLGFBQWEsR0FDM0MsQ0FDTTtnQkFDWiw0REFBQyxnREFBVztvQkFDUiw0REFBQywyQ0FBTSxJQUNILE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxhQUduQjtvQkFDVCw0REFBQywyQ0FBTSxJQUNILE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUMsRUFDN0UsRUFBRSxFQUFDLHNCQUFzQixFQUN6QixJQUFJLEVBQUMsU0FBUyxXQUdULENBQ0MsQ0FDVixDQUNOLENBQ1Q7SUFDTCxDQUFDO0NBQ0o7QUFFRCxpRUFBZSxxQkFBcUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdFO0FBQ0w7QUFRbEM7O0dBRUc7QUFDSCxNQUFNLG1CQUFvQixTQUFRLDRDQUE2QjtJQUMzRCxNQUFNO1FBQ0YsT0FBTyxDQUNILHFFQUFLLEVBQUUsRUFBQyx1QkFBdUI7WUFFdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQ3ZDLHFFQUFLLEVBQUUsRUFBQyxxQkFBcUI7b0JBQ3pCLDRHQUEwQyxDQUN4QztZQUVWLDREQUFDLHlDQUFJLElBQ0QsVUFBVSxRQUNWLElBQUksRUFBQyxPQUFPLElBR1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ3hDLE9BQU8sQ0FDSCw0REFBQyx3Q0FBRyxJQUNBLEVBQUUsRUFBRSxFQUFFLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFDcEIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFDbEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUNsRCxTQUFTLFNBRVAsQ0FDVDtZQUNMLENBQUMsQ0FBQyxDQUVILENBQ0wsQ0FDVDtJQUNMLENBQUM7Q0FDSjtBQUVELGlFQUFlLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NJO0FBQ21CO0FBQ0o7QUFZdEQ7O0dBRUc7QUFDSCxNQUFNLGVBQWdCLFNBQVEsNENBQW1DO0lBRTdELE1BQU07UUFDRix1RkFBdUY7UUFDdkYsNENBQTRDO1FBQzVDLElBQUksS0FBSyxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlFLElBQUksS0FBSyxFQUFFO1lBQ1AsS0FBSyxJQUFJLFlBQVksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7Z0JBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQ2pELEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ2QsTUFBTTtpQkFDVDthQUNKO1NBQ0o7UUFFRCxPQUFPLENBQ0gsNERBQUMscURBQWdCLElBQ2IsS0FBSyxFQUNELDREQUFDLDJDQUFNLGtCQUNRLFFBQVEsRUFDbkIsSUFBSSxRQUNKLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUM1RCxJQUFJLEVBQUMsSUFBSSxFQUNULElBQUksRUFBQyxVQUFVLEVBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUssRUFDakUsU0FBUyxFQUFDLFlBQVk7Z0JBRXRCLDREQUFDLHlDQUFJLElBQ0QsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUNULG1GQUFtRixDQUFDLENBQUM7d0JBQ3JGLGtGQUFrRixFQUV0RixJQUFJLEVBQUMsR0FBRyxHQUNWO2dCQUNELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQzdFLEVBRWIsS0FBSyxFQUFFLENBQUMsRUFDUixJQUFJLEVBQUMsU0FBUyxFQUNkLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUM7WUFFeEQscUVBQUssU0FBUyxFQUFDLDRCQUE0QixJQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUNuRCxxRUFBcUU7Z0JBQ3JFLElBQUksWUFBWSxHQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDNUYsT0FBTyxDQUNILDREQUFDLG9FQUFZLElBQ1QsWUFBWSxFQUFFLFlBQVksRUFDMUIsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUNqQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUN4RCxDQUNMLENBQUM7WUFDTixDQUFDLENBQUMsQ0FDQSxDQUNTLENBQ3RCLENBQUM7SUFDTixDQUFDO0NBQ0o7QUFFRCxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFRztBQUNLO0FBQ0Q7QUFFUTtBQUNVO0FBZ0J4RDs7O0dBR0c7QUFDSCxNQUFNLGlCQUFrQixTQUFRLDRDQUF5QztJQUNyRSxZQUFZLEtBQVU7UUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsZ0JBQWdCLEVBQUUsSUFBSTtTQUN6QjtJQUNMLENBQUM7SUFFRCxNQUFNO1FBQ0YsT0FBTyxDQUNILHFFQUFLLEVBQUUsRUFBQyxvQkFBb0I7WUFDeEIscUVBQUssRUFBRSxFQUFDLDRCQUE0QjtnQkFDaEMsb0ZBQWtCO2dCQUNsQiw0REFBQyw0Q0FBTyxJQUNKLFNBQVMsRUFBQyxPQUFPLEVBQ2pCLEtBQUssRUFBQyxvSkFDbUM7b0JBRXpDLHFFQUFLLEVBQUUsRUFBQywwQkFBMEI7d0JBQzlCLDREQUFDLHlDQUFJLElBQUMsSUFBSSxFQUFDLHdGQUF3RixHQUFFLENBQ25HLENBQ0EsQ0FDUjtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLENBQ3JCLHFFQUFLLEVBQUUsRUFBQyw2QkFBNkI7Z0JBQ2pDLDREQUFDLHVEQUFjLElBQ1gsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUMvQixVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFDdkMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUNyQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQzdDO2dCQUNGLDREQUFDLDREQUFtQixJQUNoQixlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQzNDLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUM3QyxDQUNBLENBQ0wsQ0FDSCxDQUNUO0lBQ0wsQ0FBQztDQUNKO0FBRUQsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRU07QUFDTTtBQUVHO0FBV2hEOztHQUVHO0FBQ0gsTUFBTSxjQUFlLFNBQVEsNENBQWtDO0lBRTNELE1BQU07UUFDRixPQUFPLENBQ0gscUVBQUssRUFBRSxFQUFDLGlCQUFpQjtZQUNyQiw0REFBQyxtREFBYyxJQUNYLFVBQVUsRUFBRSxJQUFJLEVBQ2hCLG1CQUFtQixFQUFFLElBQUksRUFDekIsUUFBUSxFQUFFLFNBQVMsVUFBVSxLQUFHLENBQUMsRUFDakMsSUFBSSxFQUFDLFNBQVMsRUFDZCxpQkFBaUIsRUFBRSxJQUFJLEVBQ3ZCLFNBQVMsRUFBRTtvQkFDUCxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ25CLEVBQ0QsMkJBQTJCLEVBQUUsR0FDM0IsRUFBRTtvQkFBRSxPQUFPLENBQ1Q7d0JBQ0ksNERBQUMseUNBQUksSUFBQyxJQUFJLEVBQUMsb0ZBQW9GLEdBQUU7aURBRS9GLENBQ1Q7Z0JBQUEsQ0FBQyxFQUNGLFlBQVksRUFBRSxLQUFLLEVBQ25CLFFBQVEsRUFBQyxPQUFPLEVBQ2hCLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQkFDaEQsT0FBTzt3QkFDSCxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7d0JBQ3JCLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRTt3QkFDbEIsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7NEJBQ2IsT0FBTyxDQUNILHNFQUFNLFNBQVMsRUFBQyxzQkFBc0I7Z0NBQ2xDLDREQUFDLHdEQUFlLElBQ1osUUFBUSxFQUFFLFFBQVEsRUFDbEIsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUN2QyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQ2pDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDckMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUM3QyxDQUNDLENBQ1Y7d0JBQ0wsQ0FBQztxQkFDSjtnQkFDTCxDQUFDLENBQUMsR0FDSixDQUNBLENBQ1Q7SUFDTCxDQUFDO0NBQ0o7QUFFRCxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7OztBQ2pFOUI7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjVCO0FBQ2dCO0FBRXVCO0FBQzlCO0FBQ29CO0FBQ2Y7QUFDRjtBQUN5QjtBQUNaO0FBQ0c7QUFHUztBQUNEO0FBQ2M7QUFDSDtBQWF0RSxNQUFNLE1BQU8sU0FBUSw0Q0FBMkM7SUFFNUQsWUFBWSxLQUFVO1FBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQXFFakI7O1dBRUc7UUFDSCxvQ0FBK0IsR0FBRyxHQUFTLEVBQUU7WUFDekMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEQsd0NBQXdDO1lBQ3hDLHdDQUF3QztZQUV4QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUU3QyxDQUFDO1FBRUQsaUJBQVksR0FBRyxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsRUFBRDtZQUNyQyxJQUFJLFlBQVksRUFBRztnQkFDZixZQUFZLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkMsWUFBWSxDQUFDLE9BQU8sQ0FDaEIsQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQkFDVCxnQ0FBZ0M7b0JBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUM7d0JBQ2pCLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzlCLElBQUksTUFBTSxHQUFHLFVBQVUsSUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUMvRyxJQUFJLFVBQVUsR0FBRyxXQUFXLEdBQUcsVUFBVSxDQUFDO3dCQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQzVCO2dCQUNMLENBQUMsQ0FDSixDQUFDO2FBQ0w7UUFDTCxDQUFDO1FBRUQ7O1dBRUc7UUFDSCxvQkFBZSxHQUFHLEdBQVMsRUFBRTtZQUN6Qix5QkFBeUI7WUFDekIsSUFBSSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztnQkFDcEQsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDO2dCQUNoQixhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUM7YUFDM0IsQ0FBQyxDQUFDO1lBRUgsb0JBQW9CO1lBQ3BCLElBQUksYUFBYSxHQUEwQixJQUFJLEdBQUcsRUFBb0IsQ0FBQztZQUN2RSxLQUFLLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0JBQy9CLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7b0JBQ3JDLEVBQUUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVE7b0JBQ3pCLEtBQUssRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUs7b0JBQ3pCLGFBQWEsRUFBRSxFQUFFO2lCQUNwQixDQUFDLENBQUM7YUFDTjtZQUVELElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsVUFBVSxFQUFFLGFBQWE7YUFDNUIsQ0FBQztRQUNOLENBQUM7UUFFRDs7V0FFRztRQUNILG1CQUFjLEdBQUcsR0FBUyxFQUFFO1lBQ3hCLHdCQUF3QjtZQUN4QixJQUFJLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO2dCQUNwRCxLQUFLLEVBQUUsS0FBSztnQkFDWixTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQ2hCLGFBQWEsRUFBRSxDQUFDLE9BQU8sQ0FBQzthQUMzQixDQUFDLENBQUM7WUFFSCxtQkFBbUI7WUFDbkIsSUFBSSxZQUFZLEdBQTBCLElBQUksR0FBRyxFQUFvQixDQUFDO1lBQ3RFLEtBQUssSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRTtnQkFDL0IsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtvQkFDcEMsRUFBRSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUTtvQkFDekIsS0FBSyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSztvQkFDekIsYUFBYSxFQUFFLEVBQUU7aUJBQ3BCLENBQUM7YUFDTDtZQUVELElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsU0FBUyxFQUFFLFlBQVk7YUFDMUIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVEOzs7V0FHRztRQUNILGdCQUFXLEdBQUcsR0FBUyxFQUFFO1lBQ3JCLHFCQUFxQjtZQUNyQixJQUFJLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO2dCQUNqRCxLQUFLLEVBQUUsS0FBSztnQkFDWixTQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUM7Z0JBQ3BGLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7YUFDcEMsQ0FBQyxDQUFDO1lBRUgsdUJBQXVCO1lBQ3ZCLElBQUksZ0JBQWdCLEdBQThCLElBQUksR0FBRyxFQUF3QixDQUFDO1lBQ2xGLEtBQUssSUFBSSxPQUFPLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRTtnQkFDckMsSUFBSSxlQUFlLEdBQUc7b0JBQ2xCLEVBQUUsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVE7b0JBQy9CLEtBQUssRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLO29CQUNoRSxHQUFHLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHO29CQUMzQixNQUFNLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNO29CQUNqQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRO29CQUNyQyxLQUFLLEVBQUUsSUFBSTtvQkFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO29CQUNsRSxTQUFTLEVBQUUsRUFBRTtpQkFDaEIsQ0FBQztnQkFFRixJQUFJO29CQUNBLHdGQUF3RjtvQkFDeEYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDbEMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO29CQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUNoRztnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDUixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNwQjthQUNKO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixhQUFhLEVBQUUsZ0JBQWdCO2FBQ2xDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRDs7V0FFRztRQUNILHdCQUFtQixHQUFHLEdBQVMsRUFBRTtZQUM3Qiw0Q0FBNEM7WUFDNUMsSUFBSSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsMEJBQTBCLENBQUMsYUFBYSxDQUFDO2dCQUNqRSxLQUFLLEVBQUUsS0FBSztnQkFDWixTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQ2hCLGFBQWEsRUFBRSxDQUFDLFVBQVUsQ0FBQzthQUM5QixDQUFDLENBQUM7WUFFSCxLQUFLLElBQUksT0FBTyxJQUFJLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1RSxJQUFJLFlBQVksRUFBRTtvQkFDZCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDdkUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3JGO2FBQ0o7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7Z0JBQy9CLE9BQU8sRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRDs7OztXQUlHO1FBQ0gsZ0JBQVcsR0FBRyxDQUFPLFlBQTBCLEVBQUUsRUFBRTtZQUMvQyxJQUFJO2dCQUNBLElBQUksUUFBUSxHQUFVLE1BQU0sNkVBQXlCLENBQUMsRUFBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7Z0JBQy9FLFFBQVEsQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDekMsUUFBUSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUVwQyxrQkFBa0I7Z0JBQ2xCLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7b0JBQzdCLElBQUksWUFBWSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7d0JBQy9CLElBQUk7NEJBQ0MsUUFBeUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7eUJBQzNFO3dCQUFDLE9BQU8sQ0FBQyxFQUFFOzRCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUN0RSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNwQjtxQkFDSjtvQkFDRCxJQUFJLFlBQVksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO3dCQUM3QixJQUFJOzRCQUNDLFFBQXlCLENBQUMsb0JBQW9CLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQzt5QkFDekU7d0JBQUMsT0FBTyxDQUFDLEVBQUU7NEJBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ3hFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3BCO3FCQUNKO2lCQUNKO2dCQUVELFlBQVksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2dCQUM5QixPQUFPLFFBQVEsQ0FBQzthQUNuQjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLEdBQUcsWUFBWSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQzthQUNyRTtRQUNMLENBQUM7UUFFRDs7O1dBR0c7UUFDSCxpQkFBWSxHQUFHLENBQU8sS0FBYSxFQUFFLEVBQUU7WUFDbkMsSUFBSTtnQkFDQSxJQUFJLEtBQUssRUFBRTtvQkFDUCxJQUFJLFNBQVMsR0FBRyxPQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7d0JBQ3ZELEtBQUssRUFBRSxXQUFXLEdBQUcsS0FBSyxHQUFHLEdBQUc7d0JBQ2hDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQztxQkFDbkIsQ0FBQyxJQUFHLENBQUMsQ0FBQztvQkFFUCxJQUFJLFNBQVMsRUFBRTt3QkFDWCxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQztxQkFDOUQ7eUJBQU07d0JBQ0gsSUFBSSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBRWxDLElBQUksUUFBUSxHQUFHLE1BQU0sNkVBQVcsQ0FBQzs0QkFDN0IsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQjs0QkFDdkMsUUFBUSxFQUFFLENBQUMsRUFBQyxVQUFVLEVBQUU7d0NBQ2hCLEtBQUssRUFBRSxLQUFLO3FDQUNmLEVBQUMsQ0FBQzs0QkFDUCxNQUFNLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDO3lCQUN6QixDQUFDLENBQUM7d0JBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFOzRCQUNqQywrRUFBK0U7NEJBQy9FLDhCQUE4Qjs0QkFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUNqRDt3QkFDRCxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQzt3QkFDakQsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUNqRCxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDNUIsTUFBTSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzt3QkFDakMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7cUJBQzFDO2lCQUNKO3FCQUFNO29CQUNILEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2lCQUN6QzthQUNKO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7YUFDckQ7UUFDTCxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNILHVCQUFrQixHQUFHLENBQU8sVUFBa0IsRUFBRSxLQUFhLEVBQUUsRUFBRTtZQUM3RCxJQUFJLFFBQVEsR0FBVSxFQUFFLENBQUM7WUFDekIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFFdkQsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7Z0JBQ3RCLG9EQUFvRDtnQkFDcEQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUM7d0JBQ1YsVUFBVSxFQUFFOzRCQUNSLFVBQVUsRUFBRSxVQUFVOzRCQUN0QixPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7eUJBQ3BCO3FCQUNKLENBQUMsQ0FBQztpQkFDTjthQUNKO1lBRUQsSUFBSSxRQUFRLEdBQUcsTUFBTSw2RUFBVyxDQUFDO2dCQUM3QixHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsNkJBQTZCO2dCQUNwRCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsTUFBTSxFQUFFO29CQUNKLEtBQUssRUFBRSxLQUFLO2lCQUNmO2FBQ0osQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO2dCQUNqQywrRUFBK0U7Z0JBQy9FLDhCQUE4QjtnQkFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pEO1FBQ0wsQ0FBQztRQUVEOzs7V0FHRztRQUNILGFBQVEsR0FBRyxHQUFTLEVBQUU7WUFDbEIsTUFBTSxJQUFJLEdBQUcsSUFBSSwrREFBUyxDQUFDO2dCQUN2QixLQUFLLEVBQUUsa0JBQWtCO2dCQUN6QixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsS0FBSyxFQUFFLEtBQUs7YUFDZixDQUFDLENBQUM7WUFDSCx3RkFBeUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFbEMsSUFBSSxVQUFVLEdBQUcsTUFBTSx1RkFBd0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2IsVUFBVSxHQUFHLE1BQU0sbUZBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQzthQUN4RTtZQUNELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQztRQUM1QixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNILGlCQUFZLEdBQUcsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLEVBQUQ7WUFDbEMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekQsSUFBSSxZQUFZLEVBQUU7Z0JBQ2QsWUFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFO29CQUM3QyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7aUJBQ3ZEO2FBQ0o7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ25EO1lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzRCxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNILG9CQUFlLEdBQUcsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLEVBQUQ7WUFDckMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BFLFlBQVksR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3BELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0QsQ0FBQztRQUdEOzs7V0FHRztRQUNILG1CQUFjLEdBQUcsQ0FBTyxZQUEwQixFQUFFLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN4QztZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ2pELElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN0RCxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNuQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ2xDLElBQUk7b0JBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBQ2hEO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNSLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxZQUFZLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2lCQUMzRDtnQkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNWLFlBQVksRUFBRSxlQUFlO2lCQUNoQyxDQUFDLENBQUM7YUFDTjtRQUNMLENBQUM7UUFFRDs7O1dBR0c7UUFDSCxzQkFBaUIsR0FBRyxDQUFPLFFBQWtCLEVBQUUsRUFBRTtZQUU3QyxJQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVELElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3hDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQy9DO1lBRUQsS0FBSyxJQUFJLFlBQVksSUFBSSxRQUFRLENBQUMsYUFBYSxFQUFFO2dCQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRTtvQkFDckIsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUN4QztnQkFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtvQkFDekMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDbkMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNsQyxJQUFJO3dCQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDM0Q7b0JBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQ1IsS0FBSyxDQUFDLHFCQUFxQixHQUFHLFlBQVksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7cUJBQzNEO2lCQUNKO2FBQ0o7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLGVBQWUsRUFBRSxrQkFBa0I7Z0JBQ25DLFlBQVksRUFBRSxlQUFlO2FBQ2hDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRDs7OztXQUlHO1FBQ0gsc0JBQWlCLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUNqQyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFFLE9BQU8sRUFBRSxDQUFDLEtBQUssS0FBSyxLQUFLLEdBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRXpDLG1EQUFtRDtZQUNuRCxLQUFLLElBQUksY0FBYyxJQUFJLGtCQUFrQixFQUFFO2dCQUMzQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO29CQUM1RSxJQUFJLE1BQU0sR0FBWSxLQUFLLENBQUM7b0JBQzVCLEtBQUssSUFBSSxZQUFZLElBQUksY0FBYyxDQUFDLGFBQWEsRUFBRTt3QkFDbkQsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFOzRCQUN4QyxNQUFNLEdBQUcsSUFBSSxDQUFDOzRCQUNkLE1BQU07eUJBQ1Q7cUJBQ0o7b0JBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRTt3QkFDVCxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFFLE9BQU8sQ0FBQyxLQUFLLGNBQWMsR0FBQyxDQUFDLENBQUM7cUJBQ3hGO2lCQUNKO2FBQ0o7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLGVBQWUsRUFBRSxrQkFBa0I7Z0JBQ25DLFlBQVksRUFBRSxlQUFlO2FBQ2hDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRDs7OztXQUlHO1FBQ0gseUJBQW9CLEdBQUcsQ0FBQyxjQUF3QixFQUFFLEVBQUU7WUFDaEQsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEQsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxjQUFjLENBQUMsQ0FBQztZQUN4RixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFckQsS0FBSyxJQUFJLFlBQVksSUFBSSxjQUFjLENBQUMsYUFBYSxFQUFFO2dCQUNuRCw4REFBOEQ7Z0JBQzlELElBQUksTUFBTSxHQUFZLEtBQUssQ0FBQztnQkFDNUIsS0FBSyxJQUFJLGNBQWMsSUFBSSxrQkFBa0IsRUFBRTtvQkFDM0MsSUFBSSxZQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTt3QkFDakQsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDZCxNQUFNO3FCQUNUO2lCQUNKO2dCQUNELElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ1QsZUFBZSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxZQUFZLENBQUMsQ0FBQztvQkFDdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM5RDthQUNKO1lBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixlQUFlLEVBQUUsa0JBQWtCO2dCQUNuQyxZQUFZLEVBQUUsZUFBZTthQUNoQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQ7O1dBRUc7UUFDSCxhQUFRLEdBQUcsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLGVBQWUsRUFBRSxFQUFFO2dCQUNuQixZQUFZLEVBQUUsRUFBRTthQUNuQixDQUFDO1lBQ0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMxQyx3REFBd0Q7WUFDeEQsZ0RBQWdEO1lBQ2hELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0QsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0gsc0JBQWlCLEdBQUcsQ0FBQyxLQUFZLEVBQUUsTUFBZ0IsRUFBRSxFQUFFO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzFDLE9BQU8sRUFBRSxDQUFDO2FBQ2I7WUFDRCxJQUFJLE1BQU0sRUFBRTtnQkFDUixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7Z0JBQ3pCLEtBQUssSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRTtvQkFDcEUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQy9DLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ2xDO2lCQUNKO2dCQUNELE9BQU8sZUFBZSxDQUFDO2FBQzFCO2lCQUFNO2dCQUNILE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQzthQUM1RDtRQUNMLENBQUM7UUFFRDs7OztXQUlHO1FBQ0gscUJBQWdCLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMxQyxPQUFPLElBQUksQ0FBQzthQUNmO1lBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzVELENBQUM7UUFFRDs7Ozs7V0FLRztRQUNILGlCQUFZLEdBQUcsQ0FBTyxLQUFZLEVBQUUsRUFBRTtZQUNsQyxJQUFJO2dCQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQzFDLE9BQU8sSUFBSSxDQUFDO2lCQUNmO2dCQUVELElBQUksVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7b0JBQ2pELEtBQUssRUFBRSxhQUFhLEdBQUcsS0FBSyxDQUFDLEVBQUU7b0JBQy9CLFNBQVMsRUFBRSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUM7aUJBQ3ZDLENBQUMsQ0FBQztnQkFFSCxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDaEMsT0FBTzt3QkFDSCxNQUFNLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTTt3QkFDaEQsV0FBVyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVc7d0JBQzFELEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRztxQkFDbkQ7aUJBQ0o7cUJBQU07b0JBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO2lCQUMvRDthQUNKO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7Z0JBQ25DLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLE9BQU87b0JBQ0gsTUFBTSxFQUFFLE9BQU87b0JBQ2YsV0FBVyxFQUFFLE9BQU87b0JBQ3BCLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRztpQkFDbkQ7YUFDSjtRQUNMLENBQUM7UUFFRDs7O1dBR0c7UUFDSCw0QkFBdUIsR0FBRyxDQUFDLEdBQWdCLEVBQUUsRUFBRTtZQUMzQyxJQUFJLEdBQUcsRUFBRTtnQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7b0JBQ3pCLDBDQUEwQztvQkFDMUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLDJEQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztpQkFDL0Q7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDVixXQUFXLEVBQUUsR0FBRztpQkFDbkIsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDO1FBdG1CRyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsV0FBVyxFQUFFLFNBQVM7WUFDdEIsYUFBYSxFQUFFLElBQUksR0FBRyxFQUF3QjtZQUM5QyxTQUFTLEVBQUUsSUFBSSxHQUFHLEVBQW9CO1lBQ3RDLFVBQVUsRUFBRSxJQUFJLEdBQUcsRUFBb0I7WUFDdkMsT0FBTyxFQUFFLElBQUk7WUFDYixlQUFlLEVBQUUsRUFBRTtZQUNuQixZQUFZLEVBQUUsRUFBRTtTQUNuQjtJQUNMLENBQUM7SUFRSyxpQkFBaUI7O1lBQ25CLElBQUk7Z0JBQ0EsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGdFQUFZLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDO2dCQUNqRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksZ0VBQVksQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDO2dCQUMzRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksZ0VBQVksQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7Z0JBQ2pGLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLGdFQUFZLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUMsQ0FBQyxDQUFDO2dCQUMzRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pGO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsaUdBQWlHO2dCQUNqRyxvQ0FBb0M7Z0JBQ3BDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO2dCQUN6RCxPQUFPO2FBQ1Y7WUFDRCxJQUFJO2dCQUNBLE1BQU0sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ2hDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7Z0JBQ3JELE9BQU87YUFDVjtZQUNELElBQUk7Z0JBQ0EsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDL0I7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztnQkFDcEQsT0FBTzthQUNWO1lBQ0QsSUFBSTtnQkFDQSxNQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUM1QjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO2dCQUNqRCxPQUFPO2FBQ1Y7WUFDRCxJQUFJO2dCQUNBLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDcEM7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztnQkFDMUQsT0FBTzthQUNWO1lBQ0QsSUFBSTtnQkFDQSxJQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBQzthQUMxQztZQUNELE9BQU8sQ0FBQyxFQUFFO2dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO2dCQUN6RCxPQUFPO2FBQ1Y7UUFBSSxDQUFDO0tBQUE7SUFzaUJWLE1BQU07O1FBQ0YsT0FBTyxDQUNILHFFQUFLLFNBQVMsRUFBQyw0QkFBNEI7WUFFbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlO2dCQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQ3ZDLDREQUFDLDZEQUFvQixJQUNqQixjQUFjLEVBQUUsVUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLDBDQUFHLENBQUMsQ0FBQyxFQUMvQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsdUJBQXVCLEdBQ2xELENBQ0w7WUFFTCxxRUFBSyxFQUFFLEVBQUMsb0JBQW9CO2dCQUN4QixxRUFDSSxFQUFFLEVBQUMsK0JBQStCLEVBQ2xDLFNBQVMsRUFBQyxXQUFXO29CQUVyQixxRkFBbUI7b0JBQ25CLDREQUFDLDZFQUFpQixJQUNkLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQ3BELGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFDM0MsYUFBYSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFDckMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUMzQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQ3JDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxHQUNqQyxDQUNBO2dCQUNOLHFFQUNJLEVBQUUsRUFBQyw0QkFBNEIsRUFDL0IsU0FBUyxFQUFDLFdBQVc7b0JBR2pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLENBQ2xCLDREQUFDLDRDQUFPLElBQUMsSUFBSSxFQUFDLFdBQVcsR0FBRyxDQUMvQjtvQkFFTCw0REFBQyxzRUFBYyxJQUNYLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQ3JELFVBQVUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQ3RELFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDckMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLEdBQ2pDLENBQ0E7Z0JBQ04scUVBQ0ksRUFBRSxFQUFDLHVCQUF1QixFQUMxQixTQUFTLEVBQUMsV0FBVztvQkFHakIsQ0FBQyxDQUNHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZTt3QkFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FDMUMsSUFBSSxDQUNELDREQUFDLDRDQUFPLElBQUMsSUFBSSxFQUFDLFdBQVcsR0FBRyxDQUMvQjtvQkFHRCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWU7d0JBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FDdkMsNERBQUMsK0VBQWtCLElBQ2YsY0FBYyxFQUFFLFVBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSwwQ0FBRyxDQUFDLENBQUMsRUFDL0MsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQ3pCLGFBQWEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQ3JDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFDekMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUN2QyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUMvQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FDakMsQ0FDTCxDQUVIO2dCQUNOLHFFQUFLLEVBQUUsRUFBQyx5QkFBeUIsRUFBQyxTQUFTLEVBQUMsV0FBVztvQkFDbkQsNERBQUMsK0RBQXFCLElBQ2xCLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUM5QixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsR0FDMUMsQ0FDQSxDQUNKLENBQ0osQ0FDVCxDQUFDO0lBQ04sQ0FBQztDQUNKO0FBRUQsaUVBQWUsTUFBTSxFQUFDO0FBRWQsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2FyY2dpcy1yZXN0LWZlYXR1cmUtbGF5ZXIvZGlzdC9lc20vYWRkLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtZmVhdHVyZS1sYXllci9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9kaXN0L2VzbS9yZXF1ZXN0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9kaXN0L2VzbS91dGlscy9BcmNHSVNSZXF1ZXN0RXJyb3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0L2Rpc3QvZXNtL3V0aWxzL2FwcGVuZC1jdXN0b20tcGFyYW1zLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9kaXN0L2VzbS91dGlscy9jbGVhbi11cmwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0L2Rpc3QvZXNtL3V0aWxzL2VuY29kZS1mb3JtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0L2Rpc3QvZXNtL3V0aWxzL2VuY29kZS1xdWVyeS1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0L2Rpc3QvZXNtL3V0aWxzL3Byb2Nlc3MtcGFyYW1zLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9kaXN0L2VzbS91dGlscy93YXJuLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyQ29tcG9uZW50L0xheWVyQ29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvTGF5ZXJMaXN0Q29tcG9uZW50L0xheWVyTGlzdENvbXBvbmVudC5zY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL1RlbXBsYXRlQ29tcG9uZW50L1RlbXBsYXRlQ29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvV2lkZ2V0LnNjc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyQ29tcG9uZW50L0xheWVyQ29tcG9uZW50LnNjc3M/MDg3NiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9MYXllckxpc3RDb21wb25lbnQvTGF5ZXJMaXN0Q29tcG9uZW50LnNjc3M/NGJmZCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9UZW1wbGF0ZUNvbXBvbmVudC9UZW1wbGF0ZUNvbXBvbmVudC5zY3NzPzQ3NzYiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvV2lkZ2V0LnNjc3M/YTBhMiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyQ29tcG9uZW50L0FkZExheWVySXRlbS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvTGF5ZXJDb21wb25lbnQvTGF5ZXJDb21wb25lbnQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyQ29tcG9uZW50L0xheWVyU2VhcmNoLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9MYXllckxpc3RDb21wb25lbnQvTGF5ZXJMaXN0QnV0dG9ucy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvTGF5ZXJMaXN0Q29tcG9uZW50L0xheWVyTGlzdENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvTGF5ZXJMaXN0Q29tcG9uZW50L0xheWVyU3R5bGVNb2RhbC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvTGF5ZXJMaXN0Q29tcG9uZW50L01vcmVJbmZvTW9kYWwudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL1NhdmVUZW1wbGF0ZUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvVGVtcGxhdGVDb21wb25lbnQvQWN0aXZlVGVtcGxhdGVzTWVudS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvVGVtcGxhdGVDb21wb25lbnQvQWRkVGVtcGxhdGVJdGVtLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9UZW1wbGF0ZUNvbXBvbmVudC9UZW1wbGF0ZUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvVGVtcGxhdGVDb21wb25lbnQvVGVtcGxhdGVTZWFyY2gudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9CYXNlbWFwXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL0NvbG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2NvcmUvcmVhY3RpdmVVdGlsc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9pZGVudGl0eS9JZGVudGl0eU1hbmFnZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvaWRlbnRpdHkvT0F1dGhJbmZvXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0xheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3JlbmRlcmVycy9TaW1wbGVSZW5kZXJlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9zeW1ib2xzL1NpbXBsZU1hcmtlclN5bWJvbFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS93aWRnZXRzL0xheWVyTGlzdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9iYXNpYy9jb2xvci1waWNrZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAoYykgMjAxNyBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgcmVxdWVzdCwgY2xlYW5VcmwsIGFwcGVuZEN1c3RvbVBhcmFtcyB9IGZyb20gXCJAZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0XCI7XG4vKipcbiAqIGBgYGpzXG4gKiBpbXBvcnQgeyBhZGRGZWF0dXJlcyB9IGZyb20gJ0Blc3JpL2FyY2dpcy1yZXN0LWZlYXR1cmUtbGF5ZXInO1xuICogLy9cbiAqIGFkZEZlYXR1cmVzKHtcbiAqICAgdXJsOiBcImh0dHBzOi8vc2FtcGxlc2VydmVyNi5hcmNnaXNvbmxpbmUuY29tL2FyY2dpcy9yZXN0L3NlcnZpY2VzL1NlcnZpY2VSZXF1ZXN0L0ZlYXR1cmVTZXJ2ZXIvMFwiLFxuICogICBmZWF0dXJlczogW3tcbiAqICAgICBnZW9tZXRyeTogeyB4OiAtMTIwLCB5OiA0NSwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gfSxcbiAqICAgICBhdHRyaWJ1dGVzOiB7IHN0YXR1czogXCJhbGl2ZVwiIH1cbiAqICAgfV1cbiAqIH0pXG4gKiAgIC50aGVuKHJlc3BvbnNlKVxuICogYGBgXG4gKiBBZGQgZmVhdHVyZXMgcmVxdWVzdC4gU2VlIHRoZSBbUkVTVCBEb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuYXJjZ2lzLmNvbS9yZXN0L3NlcnZpY2VzLXJlZmVyZW5jZS9hZGQtZmVhdHVyZXMuaHRtKSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcGFyYW0gcmVxdWVzdE9wdGlvbnMgLSBPcHRpb25zIGZvciB0aGUgcmVxdWVzdC5cbiAqIEByZXR1cm5zIEEgUHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB3aXRoIHRoZSBhZGRGZWF0dXJlcyByZXNwb25zZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEZlYXR1cmVzKHJlcXVlc3RPcHRpb25zKSB7XG4gICAgdmFyIHVybCA9IGNsZWFuVXJsKHJlcXVlc3RPcHRpb25zLnVybCkgKyBcIi9hZGRGZWF0dXJlc1wiO1xuICAgIC8vIGVkaXQgb3BlcmF0aW9ucyBhcmUgUE9TVCBvbmx5XG4gICAgdmFyIG9wdGlvbnMgPSBhcHBlbmRDdXN0b21QYXJhbXMocmVxdWVzdE9wdGlvbnMsIFtcImZlYXR1cmVzXCIsIFwiZ2RiVmVyc2lvblwiLCBcInJldHVybkVkaXRNb21lbnRcIiwgXCJyb2xsYmFja09uRmFpbHVyZVwiXSwgeyBwYXJhbXM6IF9fYXNzaWduKHt9LCByZXF1ZXN0T3B0aW9ucy5wYXJhbXMpIH0pO1xuICAgIHJldHVybiByZXF1ZXN0KHVybCwgb3B0aW9ucyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGQuanMubWFwIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY3JlYXRlQmluZGluZyhvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgZW5jb2RlRm9ybURhdGEgfSBmcm9tIFwiLi91dGlscy9lbmNvZGUtZm9ybS1kYXRhXCI7XG5pbXBvcnQgeyBlbmNvZGVRdWVyeVN0cmluZyB9IGZyb20gXCIuL3V0aWxzL2VuY29kZS1xdWVyeS1zdHJpbmdcIjtcbmltcG9ydCB7IHJlcXVpcmVzRm9ybURhdGEgfSBmcm9tIFwiLi91dGlscy9wcm9jZXNzLXBhcmFtc1wiO1xuaW1wb3J0IHsgQXJjR0lTUmVxdWVzdEVycm9yIH0gZnJvbSBcIi4vdXRpbHMvQXJjR0lTUmVxdWVzdEVycm9yXCI7XG5pbXBvcnQgeyB3YXJuIH0gZnJvbSBcIi4vdXRpbHMvd2FyblwiO1xuZXhwb3J0IHZhciBOT0RFSlNfREVGQVVMVF9SRUZFUkVSX0hFQURFUiA9IFwiQGVzcmkvYXJjZ2lzLXJlc3QtanNcIjtcbnZhciBERUZBVUxUX0FSQ0dJU19SRVFVRVNUX09QVElPTlMgPSB7XG4gICAgaHR0cE1ldGhvZDogXCJQT1NUXCIsXG4gICAgcGFyYW1zOiB7XG4gICAgICAgIGY6IFwianNvblwiLFxuICAgIH0sXG59O1xuLyoqXG4gKiBTZXRzIHRoZSBkZWZhdWx0IG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbiAqKmFsbCByZXF1ZXN0cyBhY3Jvc3MgYWxsIGBAZXNyaS9hcmNnaXMtcmVzdC1qc2AgbW9kdWxlcyoqLlxuICpcbiAqXG4gKiBgYGBqc1xuICogaW1wb3J0IHsgc2V0RGVmYXVsdFJlcXVlc3RPcHRpb25zIH0gZnJvbSBcIkBlc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3RcIjtcbiAqIHNldERlZmF1bHRSZXF1ZXN0T3B0aW9ucyh7XG4gKiAgIGF1dGhlbnRpY2F0aW9uOiB1c2VyU2Vzc2lvbiAvLyBhbGwgcmVxdWVzdHMgd2lsbCB1c2UgdGhpcyBzZXNzaW9uIGJ5IGRlZmF1bHRcbiAqIH0pXG4gKiBgYGBcbiAqIFlvdSBzaG91bGQgKipuZXZlcioqIHNldCBhIGRlZmF1bHQgYGF1dGhlbnRpY2F0aW9uYCB3aGVuIHlvdSBhcmUgaW4gYSBzZXJ2ZXIgc2lkZSBlbnZpcm9ubWVudCB3aGVyZSB5b3UgbWF5IGJlIGhhbmRsaW5nIHJlcXVlc3RzIGZvciBtYW55IGRpZmZlcmVudCBhdXRoZW50aWNhdGVkIHVzZXJzLlxuICpcbiAqIEBwYXJhbSBvcHRpb25zIFRoZSBkZWZhdWx0IG9wdGlvbnMgdG8gcGFzcyB3aXRoIGV2ZXJ5IHJlcXVlc3QuIEV4aXN0aW5nIGRlZmF1bHQgd2lsbCBiZSBvdmVyd3JpdHRlbi5cbiAqIEBwYXJhbSBoaWRlV2FybmluZ3MgU2lsZW5jZSB3YXJuaW5ncyBhYm91dCBzZXR0aW5nIGRlZmF1bHQgYGF1dGhlbnRpY2F0aW9uYCBpbiBzaGFyZWQgZW52aXJvbm1lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdFJlcXVlc3RPcHRpb25zKG9wdGlvbnMsIGhpZGVXYXJuaW5ncykge1xuICAgIGlmIChvcHRpb25zLmF1dGhlbnRpY2F0aW9uICYmICFoaWRlV2FybmluZ3MpIHtcbiAgICAgICAgd2FybihcIllvdSBzaG91bGQgbm90IHNldCBgYXV0aGVudGljYXRpb25gIGFzIGEgZGVmYXVsdCBpbiBhIHNoYXJlZCBlbnZpcm9ubWVudCBzdWNoIGFzIGEgd2ViIHNlcnZlciB3aGljaCB3aWxsIHByb2Nlc3MgbXVsdGlwbGUgdXNlcnMgcmVxdWVzdHMuIFlvdSBjYW4gY2FsbCBgc2V0RGVmYXVsdFJlcXVlc3RPcHRpb25zYCB3aXRoIGB0cnVlYCBhcyBhIHNlY29uZCBhcmd1bWVudCB0byBkaXNhYmxlIHRoaXMgd2FybmluZy5cIik7XG4gICAgfVxuICAgIERFRkFVTFRfQVJDR0lTX1JFUVVFU1RfT1BUSU9OUyA9IG9wdGlvbnM7XG59XG52YXIgQXJjR0lTQXV0aEVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcmNHSVNBdXRoRXJyb3IsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBcmNHSVNBdXRoRXJyb3JgICBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBlcnJvciBtZXNzYWdlIGZyb20gdGhlIEFQSVxuICAgICAqIEBwYXJhbSBjb2RlIC0gVGhlIGVycm9yIGNvZGUgZnJvbSB0aGUgQVBJXG4gICAgICogQHBhcmFtIHJlc3BvbnNlIC0gVGhlIG9yaWdpbmFsIHJlc3BvbnNlIGZyb20gdGhlIEFQSSB0aGF0IGNhdXNlZCB0aGUgZXJyb3JcbiAgICAgKiBAcGFyYW0gdXJsIC0gVGhlIG9yaWdpbmFsIHVybCBvZiB0aGUgcmVxdWVzdFxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9yaWdpbmFsIG9wdGlvbnMgb2YgdGhlIHJlcXVlc3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBBcmNHSVNBdXRoRXJyb3IobWVzc2FnZSwgY29kZSwgcmVzcG9uc2UsIHVybCwgb3B0aW9ucykge1xuICAgICAgICBpZiAobWVzc2FnZSA9PT0gdm9pZCAwKSB7IG1lc3NhZ2UgPSBcIkFVVEhFTlRJQ0FUSU9OX0VSUk9SXCI7IH1cbiAgICAgICAgaWYgKGNvZGUgPT09IHZvaWQgMCkgeyBjb2RlID0gXCJBVVRIRU5USUNBVElPTl9FUlJPUl9DT0RFXCI7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbWVzc2FnZSwgY29kZSwgcmVzcG9uc2UsIHVybCwgb3B0aW9ucykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubmFtZSA9IFwiQXJjR0lTQXV0aEVycm9yXCI7XG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPVxuICAgICAgICAgICAgY29kZSA9PT0gXCJBVVRIRU5USUNBVElPTl9FUlJPUl9DT0RFXCIgPyBtZXNzYWdlIDogY29kZSArIFwiOiBcIiArIG1lc3NhZ2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQXJjR0lTQXV0aEVycm9yLnByb3RvdHlwZS5yZXRyeSA9IGZ1bmN0aW9uIChnZXRTZXNzaW9uLCByZXRyeUxpbWl0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChyZXRyeUxpbWl0ID09PSB2b2lkIDApIHsgcmV0cnlMaW1pdCA9IDM7IH1cbiAgICAgICAgdmFyIHRyaWVzID0gMDtcbiAgICAgICAgdmFyIHJldHJ5UmVxdWVzdCA9IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGdldFNlc3Npb24oX3RoaXMudXJsLCBfdGhpcy5vcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChzZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld09wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgX3RoaXMub3B0aW9ucyksIHsgYXV0aGVudGljYXRpb246IHNlc3Npb24gfSk7XG4gICAgICAgICAgICAgICAgdHJpZXMgPSB0cmllcyArIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoX3RoaXMudXJsLCBuZXdPcHRpb25zKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLm5hbWUgPT09IFwiQXJjR0lTQXV0aEVycm9yXCIgJiYgdHJpZXMgPCByZXRyeUxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHJ5UmVxdWVzdChyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlLm5hbWUgPT09IFwiQXJjR0lTQXV0aEVycm9yXCIgJiYgdHJpZXMgPj0gcmV0cnlMaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoX3RoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcmV0cnlSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEFyY0dJU0F1dGhFcnJvcjtcbn0oQXJjR0lTUmVxdWVzdEVycm9yKSk7XG5leHBvcnQgeyBBcmNHSVNBdXRoRXJyb3IgfTtcbi8qKlxuICogQ2hlY2tzIGZvciBlcnJvcnMgaW4gYSBKU09OIHJlc3BvbnNlIGZyb20gdGhlIEFyY0dJUyBSRVNUIEFQSS4gSWYgdGhlcmUgYXJlIG5vIGVycm9ycywgaXQgd2lsbCByZXR1cm4gdGhlIGBkYXRhYCBwYXNzZWQgaW4uIElmIHRoZXJlIGlzIGFuIGVycm9yLCBpdCB3aWxsIHRocm93IGFuIGBBcmNHSVNSZXF1ZXN0RXJyb3JgIG9yIGBBcmNHSVNBdXRoRXJyb3JgLlxuICpcbiAqIEBwYXJhbSBkYXRhIFRoZSByZXNwb25zZSBKU09OIHRvIGNoZWNrIGZvciBlcnJvcnMuXG4gKiBAcGFyYW0gdXJsIFRoZSB1cmwgb2YgdGhlIG9yaWdpbmFsIHJlcXVlc3RcbiAqIEBwYXJhbSBwYXJhbXMgVGhlIHBhcmFtZXRlcnMgb2YgdGhlIG9yaWdpbmFsIHJlcXVlc3RcbiAqIEBwYXJhbSBvcHRpb25zIFRoZSBvcHRpb25zIG9mIHRoZSBvcmlnaW5hbCByZXF1ZXN0XG4gKiBAcmV0dXJucyBUaGUgZGF0YSB0aGF0IHdhcyBwYXNzZWQgaW4gdGhlIGBkYXRhYCBwYXJhbWV0ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRm9yRXJyb3JzKHJlc3BvbnNlLCB1cmwsIHBhcmFtcywgb3B0aW9ucywgb3JpZ2luYWxBdXRoRXJyb3IpIHtcbiAgICAvLyB0aGlzIGlzIGFuIGVycm9yIG1lc3NhZ2UgZnJvbSBiaWxsaW5nLmFyY2dpcy5jb20gYmFja2VuZFxuICAgIGlmIChyZXNwb25zZS5jb2RlID49IDQwMCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHJlc3BvbnNlLm1lc3NhZ2UsIGNvZGUgPSByZXNwb25zZS5jb2RlO1xuICAgICAgICB0aHJvdyBuZXcgQXJjR0lTUmVxdWVzdEVycm9yKG1lc3NhZ2UsIGNvZGUsIHJlc3BvbnNlLCB1cmwsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBlcnJvciBmcm9tIEFyY0dJUyBPbmxpbmUgb3IgYW4gQXJjR0lTIFBvcnRhbCBvciBzZXJ2ZXIgaW5zdGFuY2UuXG4gICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgIHZhciBfYSA9IHJlc3BvbnNlLmVycm9yLCBtZXNzYWdlID0gX2EubWVzc2FnZSwgY29kZSA9IF9hLmNvZGUsIG1lc3NhZ2VDb2RlID0gX2EubWVzc2FnZUNvZGU7XG4gICAgICAgIHZhciBlcnJvckNvZGUgPSBtZXNzYWdlQ29kZSB8fCBjb2RlIHx8IFwiVU5LTk9XTl9FUlJPUl9DT0RFXCI7XG4gICAgICAgIGlmIChjb2RlID09PSA0OTggfHxcbiAgICAgICAgICAgIGNvZGUgPT09IDQ5OSB8fFxuICAgICAgICAgICAgbWVzc2FnZUNvZGUgPT09IFwiR1dNXzAwMDNcIiB8fFxuICAgICAgICAgICAgKGNvZGUgPT09IDQwMCAmJiBtZXNzYWdlID09PSBcIlVuYWJsZSB0byBnZW5lcmF0ZSB0b2tlbi5cIikpIHtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbEF1dGhFcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG9yaWdpbmFsQXV0aEVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEFyY0dJU0F1dGhFcnJvcihtZXNzYWdlLCBlcnJvckNvZGUsIHJlc3BvbnNlLCB1cmwsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBBcmNHSVNSZXF1ZXN0RXJyb3IobWVzc2FnZSwgZXJyb3JDb2RlLCByZXNwb25zZSwgdXJsLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLy8gZXJyb3IgZnJvbSBhIHN0YXR1cyBjaGVja1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IFwiZmFpbGVkXCIgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSBcImZhaWx1cmVcIikge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHZvaWQgMDtcbiAgICAgICAgdmFyIGNvZGUgPSBcIlVOS05PV05fRVJST1JfQ09ERVwiO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IEpTT04ucGFyc2UocmVzcG9uc2Uuc3RhdHVzTWVzc2FnZSkubWVzc2FnZTtcbiAgICAgICAgICAgIGNvZGUgPSBKU09OLnBhcnNlKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2UpLmNvZGU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSByZXNwb25zZS5zdGF0dXNNZXNzYWdlIHx8IHJlc3BvbnNlLm1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEFyY0dJU1JlcXVlc3RFcnJvcihtZXNzYWdlLCBjb2RlLCByZXNwb25zZSwgdXJsLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xufVxuLyoqXG4gKiBgYGBqc1xuICogaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJ0Blc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3QnO1xuICogLy9cbiAqIHJlcXVlc3QoJ2h0dHBzOi8vd3d3LmFyY2dpcy5jb20vc2hhcmluZy9yZXN0JylcbiAqICAgLnRoZW4ocmVzcG9uc2UpIC8vIHJlc3BvbnNlLmN1cnJlbnRWZXJzaW9uID09PSA1LjJcbiAqIC8vXG4gKiByZXF1ZXN0KCdodHRwczovL3d3dy5hcmNnaXMuY29tL3NoYXJpbmcvcmVzdCcsIHtcbiAqICAgaHR0cE1ldGhvZDogXCJHRVRcIlxuICogfSlcbiAqIC8vXG4gKiByZXF1ZXN0KCdodHRwczovL3d3dy5hcmNnaXMuY29tL3NoYXJpbmcvcmVzdC9zZWFyY2gnLCB7XG4gKiAgIHBhcmFtczogeyBxOiAncGFya3MnIH1cbiAqIH0pXG4gKiAgIC50aGVuKHJlc3BvbnNlKSAvLyByZXNwb25zZS50b3RhbCA9PiA3ODM3OVxuICogYGBgXG4gKiBHZW5lcmljIG1ldGhvZCBmb3IgbWFraW5nIEhUVFAgcmVxdWVzdHMgdG8gQXJjR0lTIFJFU1QgQVBJIGVuZHBvaW50cy5cbiAqXG4gKiBAcGFyYW0gdXJsIC0gVGhlIFVSTCBvZiB0aGUgQXJjR0lTIFJFU1QgQVBJIGVuZHBvaW50LlxuICogQHBhcmFtIHJlcXVlc3RPcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIHJlcXVlc3QsIGluY2x1ZGluZyBwYXJhbWV0ZXJzIHJlbGV2YW50IHRvIHRoZSBlbmRwb2ludC5cbiAqIEByZXR1cm5zIEEgUHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB3aXRoIHRoZSBkYXRhIGZyb20gdGhlIHJlc3BvbnNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdCh1cmwsIHJlcXVlc3RPcHRpb25zKSB7XG4gICAgaWYgKHJlcXVlc3RPcHRpb25zID09PSB2b2lkIDApIHsgcmVxdWVzdE9wdGlvbnMgPSB7IHBhcmFtczogeyBmOiBcImpzb25cIiB9IH07IH1cbiAgICB2YXIgb3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHsgaHR0cE1ldGhvZDogXCJQT1NUXCIgfSwgREVGQVVMVF9BUkNHSVNfUkVRVUVTVF9PUFRJT05TKSwgcmVxdWVzdE9wdGlvbnMpLCB7XG4gICAgICAgIHBhcmFtczogX19hc3NpZ24oX19hc3NpZ24oe30sIERFRkFVTFRfQVJDR0lTX1JFUVVFU1RfT1BUSU9OUy5wYXJhbXMpLCByZXF1ZXN0T3B0aW9ucy5wYXJhbXMpLFxuICAgICAgICBoZWFkZXJzOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgREVGQVVMVF9BUkNHSVNfUkVRVUVTVF9PUFRJT05TLmhlYWRlcnMpLCByZXF1ZXN0T3B0aW9ucy5oZWFkZXJzKSxcbiAgICB9KTtcbiAgICB2YXIgbWlzc2luZ0dsb2JhbHMgPSBbXTtcbiAgICB2YXIgcmVjb21tZW5kZWRQYWNrYWdlcyA9IFtdO1xuICAgIC8vIGRvbid0IGNoZWNrIGZvciBhIGdsb2JhbCBmZXRjaCBpZiBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3YXMgcGFzc2VkIHRocm91Z2hcbiAgICBpZiAoIW9wdGlvbnMuZmV0Y2ggJiYgdHlwZW9mIGZldGNoICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIG9wdGlvbnMuZmV0Y2ggPSBmZXRjaC5iaW5kKEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtaXNzaW5nR2xvYmFscy5wdXNoKFwiYGZldGNoYFwiKTtcbiAgICAgICAgcmVjb21tZW5kZWRQYWNrYWdlcy5wdXNoKFwiYG5vZGUtZmV0Y2hgXCIpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIFByb21pc2UgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgbWlzc2luZ0dsb2JhbHMucHVzaChcImBQcm9taXNlYFwiKTtcbiAgICAgICAgcmVjb21tZW5kZWRQYWNrYWdlcy5wdXNoKFwiYGVzNi1wcm9taXNlYFwiKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBGb3JtRGF0YSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBtaXNzaW5nR2xvYmFscy5wdXNoKFwiYEZvcm1EYXRhYFwiKTtcbiAgICAgICAgcmVjb21tZW5kZWRQYWNrYWdlcy5wdXNoKFwiYGlzb21vcnBoaWMtZm9ybS1kYXRhYFwiKTtcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLmZldGNoIHx8XG4gICAgICAgIHR5cGVvZiBQcm9taXNlID09PSBcInVuZGVmaW5lZFwiIHx8XG4gICAgICAgIHR5cGVvZiBGb3JtRGF0YSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgYXJjZ2lzLXJlc3QtcmVxdWVzdGAgcmVxdWlyZXMgYSBgZmV0Y2hgIGltcGxlbWVudGF0aW9uIGFuZCBnbG9iYWwgdmFyaWFibGVzIGZvciBgUHJvbWlzZWAgYW5kIGBGb3JtRGF0YWAgdG8gYmUgcHJlc2VudCBpbiB0aGUgZ2xvYmFsIHNjb3BlLiBZb3UgYXJlIG1pc3NpbmcgXCIgKyBtaXNzaW5nR2xvYmFscy5qb2luKFwiLCBcIikgKyBcIi4gV2UgcmVjb21tZW5kIGluc3RhbGxpbmcgdGhlIFwiICsgcmVjb21tZW5kZWRQYWNrYWdlcy5qb2luKFwiLCBcIikgKyBcIiBtb2R1bGVzIGF0IHRoZSByb290IG9mIHlvdXIgYXBwbGljYXRpb24gdG8gYWRkIHRoZXNlIHRvIHRoZSBnbG9iYWwgc2NvcGUuIFNlZSBodHRwczovL2JpdC5seS8yS053V2FKIGZvciBtb3JlIGluZm8uXCIpO1xuICAgIH1cbiAgICB2YXIgaHR0cE1ldGhvZCA9IG9wdGlvbnMuaHR0cE1ldGhvZCwgYXV0aGVudGljYXRpb24gPSBvcHRpb25zLmF1dGhlbnRpY2F0aW9uLCByYXdSZXNwb25zZSA9IG9wdGlvbnMucmF3UmVzcG9uc2U7XG4gICAgdmFyIHBhcmFtcyA9IF9fYXNzaWduKHsgZjogXCJqc29uXCIgfSwgb3B0aW9ucy5wYXJhbXMpO1xuICAgIHZhciBvcmlnaW5hbEF1dGhFcnJvciA9IG51bGw7XG4gICAgdmFyIGZldGNoT3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiBodHRwTWV0aG9kLFxuICAgICAgICAvKiBlbnN1cmVzIGJlaGF2aW9yIG1pbWljcyBYTUxIdHRwUmVxdWVzdC5cbiAgICAgICAgbmVlZGVkIHRvIHN1cHBvcnQgc2VuZGluZyBJV0EgY29va2llcyAqL1xuICAgICAgICBjcmVkZW50aWFsczogb3B0aW9ucy5jcmVkZW50aWFscyB8fCBcInNhbWUtb3JpZ2luXCIsXG4gICAgfTtcbiAgICAvLyB0aGUgL29hdXRoMi9wbGF0Zm9ybVNlbGYgcm91dGUgd2lsbCBhZGQgWC1Fc3JpLUF1dGgtQ2xpZW50LUlkIGhlYWRlclxuICAgIC8vIGFuZCB0aGF0IHJlcXVlc3QgbmVlZHMgdG8gc2VuZCBjb29raWVzIGNyb3NzIGRvbWFpblxuICAgIC8vIHNvIHdlIG5lZWQgdG8gc2V0IHRoZSBjcmVkZW50aWFscyB0byBcImluY2x1ZGVcIlxuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgJiZcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiWC1Fc3JpLUF1dGgtQ2xpZW50LUlkXCJdICYmXG4gICAgICAgIHVybC5pbmRleE9mKFwiL29hdXRoMi9wbGF0Zm9ybVNlbGZcIikgPiAtMSkge1xuICAgICAgICBmZXRjaE9wdGlvbnMuY3JlZGVudGlhbHMgPSBcImluY2x1ZGVcIjtcbiAgICB9XG4gICAgcmV0dXJuIChhdXRoZW50aWNhdGlvblxuICAgICAgICA/IGF1dGhlbnRpY2F0aW9uLmdldFRva2VuKHVybCwgeyBmZXRjaDogb3B0aW9ucy5mZXRjaCB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGFwcGVuZCBvcmlnaW5hbCByZXF1ZXN0IHVybCBhbmQgcmVxdWVzdE9wdGlvbnNcbiAgICAgICAgICAgICAqIHRvIHRoZSBlcnJvciB0aHJvd24gYnkgZ2V0VG9rZW4oKVxuICAgICAgICAgICAgICogdG8gYXNzaXN0IHdpdGggcmV0cnlpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZXJyLnVybCA9IHVybDtcbiAgICAgICAgICAgIGVyci5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogaWYgYW4gYXR0ZW1wdCBpcyBtYWRlIHRvIHRhbGsgdG8gYW4gdW5mZWRlcmF0ZWQgc2VydmVyXG4gICAgICAgICAgICAgKiBmaXJzdCB0cnkgdGhlIHJlcXVlc3QgYW5vbnltb3VzbHkuIGlmIGEgJ3Rva2VuIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICogZXJyb3IgaXMgdGhyb3duLCB0aHJvdyB0aGUgVU5GRURFUkFURUQgZXJyb3IgdGhlbi5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb3JpZ2luYWxBdXRoRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFwiXCIpO1xuICAgICAgICB9KVxuICAgICAgICA6IFByb21pc2UucmVzb2x2ZShcIlwiKSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0b2tlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBhcmFtcy50b2tlbiA9IHRva2VuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdXRoZW50aWNhdGlvbiAmJiBhdXRoZW50aWNhdGlvbi5nZXREb21haW5DcmVkZW50aWFscykge1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmNyZWRlbnRpYWxzID0gYXV0aGVudGljYXRpb24uZ2V0RG9tYWluQ3JlZGVudGlhbHModXJsKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDdXN0b20gaGVhZGVycyB0byBhZGQgdG8gcmVxdWVzdC4gSVJlcXVlc3RPcHRpb25zLmhlYWRlcnMgd2l0aCBtZXJnZSBvdmVyIHJlcXVlc3RIZWFkZXJzLlxuICAgICAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSB7fTtcbiAgICAgICAgaWYgKGZldGNoT3B0aW9ucy5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICAgICAgICAgIC8vIFByZXZlbnRzIHRva2VuIGZyb20gYmVpbmcgcGFzc2VkIGluIHF1ZXJ5IHBhcmFtcyB3aGVuIGhpZGVUb2tlbiBvcHRpb24gaXMgdXNlZC5cbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIHdpbmRvdyBpcyBhbHdheXMgZGVmaW5lZCBpbiBhIGJyb3dzZXIuIFRlc3QgY2FzZSBpcyBjb3ZlcmVkIGJ5IEphc21pbmUgaW4gbm9kZSB0ZXN0ICovXG4gICAgICAgICAgICBpZiAocGFyYW1zLnRva2VuICYmXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5oaWRlVG9rZW4gJiZcbiAgICAgICAgICAgICAgICAvLyBTaGFyaW5nIEFQSSBkb2VzIG5vdCBzdXBwb3J0IHByZWZsaWdodCBjaGVjayByZXF1aXJlZCBieSBtb2Rlcm4gYnJvd3NlcnMgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9HbG9zc2FyeS9QcmVmbGlnaHRfcmVxdWVzdFxuICAgICAgICAgICAgICAgIHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0SGVhZGVyc1tcIlgtRXNyaS1BdXRob3JpemF0aW9uXCJdID0gXCJCZWFyZXIgXCIgKyBwYXJhbXMudG9rZW47XG4gICAgICAgICAgICAgICAgZGVsZXRlIHBhcmFtcy50b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVuY29kZSB0aGUgcGFyYW1ldGVycyBpbnRvIHRoZSBxdWVyeSBzdHJpbmdcbiAgICAgICAgICAgIHZhciBxdWVyeVBhcmFtcyA9IGVuY29kZVF1ZXJ5U3RyaW5nKHBhcmFtcyk7XG4gICAgICAgICAgICAvLyBkb250IGFwcGVuZCBhICc/JyB1bmxlc3MgcGFyYW1ldGVycyBhcmUgYWN0dWFsbHkgcHJlc2VudFxuICAgICAgICAgICAgdmFyIHVybFdpdGhRdWVyeVN0cmluZyA9IHF1ZXJ5UGFyYW1zID09PSBcIlwiID8gdXJsIDogdXJsICsgXCI/XCIgKyBlbmNvZGVRdWVyeVN0cmluZyhwYXJhbXMpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgLy8gVGhpcyB3b3VsZCBleGNlZWQgdGhlIG1heGltdW0gbGVuZ3RoIGZvciBVUkxzIHNwZWNpZmllZCBieSB0aGUgY29uc3VtZXIgYW5kIHJlcXVpcmVzIFBPU1RcbiAgICAgICAgICAgIChvcHRpb25zLm1heFVybExlbmd0aCAmJlxuICAgICAgICAgICAgICAgIHVybFdpdGhRdWVyeVN0cmluZy5sZW5ndGggPiBvcHRpb25zLm1heFVybExlbmd0aCkgfHxcbiAgICAgICAgICAgICAgICAvLyBPciBpZiB0aGUgY3VzdG9tZXIgcmVxdWlyZXMgdGhlIHRva2VuIHRvIGJlIGhpZGRlbiBhbmQgaXQgaGFzIG5vdCBhbHJlYWR5IGJlZW4gaGlkZGVuIGluIHRoZSBoZWFkZXIgKGZvciBicm93c2VycylcbiAgICAgICAgICAgICAgICAocGFyYW1zLnRva2VuICYmIG9wdGlvbnMuaGlkZVRva2VuKSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBjb25zdW1lciBzcGVjaWZpZWQgYSBtYXhpbXVtIGxlbmd0aCBmb3IgVVJMc1xuICAgICAgICAgICAgICAgIC8vIGFuZCB0aGlzIHdvdWxkIGV4Y2VlZCBpdCwgc28gdXNlIHBvc3QgaW5zdGVhZFxuICAgICAgICAgICAgICAgIGZldGNoT3B0aW9ucy5tZXRob2QgPSBcIlBPU1RcIjtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdG9rZW4gd2FzIGFscmVhZHkgYWRkZWQgYXMgYSBBdXRoIGhlYWRlciwgYWRkIHRoZSB0b2tlbiBiYWNrIHRvIGJvZHkgd2l0aCBvdGhlciBwYXJhbXMgaW5zdGVhZCBvZiBoZWFkZXJcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4ubGVuZ3RoICYmIG9wdGlvbnMuaGlkZVRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy50b2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZXhpc3RpbmcgaGVhZGVyIHRoYXQgd2FzIGFkZGVkIGJlZm9yZSB1cmwgcXVlcnkgbGVuZ3RoIHdhcyBjaGVja2VkXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1tcIlgtRXNyaS1BdXRob3JpemF0aW9uXCJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGp1c3QgdXNlIEdFVFxuICAgICAgICAgICAgICAgIHVybCA9IHVybFdpdGhRdWVyeVN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiB1cGRhdGVSZXNvdXJjZXMgY3VycmVudGx5IHJlcXVpcmVzIEZvcm1EYXRhIGV2ZW4gd2hlbiB0aGUgaW5wdXQgcGFyYW1ldGVycyBkb250IHdhcnJhbnQgaXQuXG4gICAgaHR0cHM6Ly9kZXZlbG9wZXJzLmFyY2dpcy5jb20vcmVzdC91c2Vycy1ncm91cHMtYW5kLWl0ZW1zL3VwZGF0ZS1yZXNvdXJjZXMuaHRtXG4gICAgICAgIHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9hcmNnaXMtcmVzdC1qcy9wdWxsLzUwMCBmb3IgbW9yZSBpbmZvLiAqL1xuICAgICAgICB2YXIgZm9yY2VGb3JtRGF0YSA9IG5ldyBSZWdFeHAoXCIvaXRlbXMvLisvdXBkYXRlUmVzb3VyY2VzXCIpLnRlc3QodXJsKTtcbiAgICAgICAgaWYgKGZldGNoT3B0aW9ucy5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMuYm9keSA9IGVuY29kZUZvcm1EYXRhKHBhcmFtcywgZm9yY2VGb3JtRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWl4aW4gaGVhZGVycyBmcm9tIHJlcXVlc3Qgb3B0aW9uc1xuICAgICAgICBmZXRjaE9wdGlvbnMuaGVhZGVycyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXF1ZXN0SGVhZGVycyksIG9wdGlvbnMuaGVhZGVycyk7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0ga2FybWEgcmVwb3J0cyBjb3ZlcmFnZSBvbiBicm93c2VyIHRlc3RzIG9ubHkgKi9cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgJiYgIWZldGNoT3B0aW9ucy5oZWFkZXJzLnJlZmVyZXIpIHtcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzLnJlZmVyZXIgPSBOT0RFSlNfREVGQVVMVF9SRUZFUkVSX0hFQURFUjtcbiAgICAgICAgfVxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSBibG9iIHJlc3BvbnNlcyBhcmUgZGlmZmljdWx0IHRvIG1ha2UgY3Jvc3MgcGxhdGZvcm0gd2Ugd2lsbCBqdXN0IGhhdmUgdG8gdHJ1c3QgdGhlIGlzb21vcnBoaWMgZmV0Y2ggd2lsbCBkbyBpdHMgam9iICovXG4gICAgICAgIGlmICghcmVxdWlyZXNGb3JtRGF0YShwYXJhbXMpICYmICFmb3JjZUZvcm1EYXRhKSB7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9XG4gICAgICAgICAgICAgICAgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0aW9ucy5mZXRjaCh1cmwsIGZldGNoT3B0aW9ucyk7XG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIC8vIHNlcnZlciByZXNwb25kZWQgdy8gYW4gYWN0dWFsIGVycm9yICg0MDQsIDUwMCwgZXRjKVxuICAgICAgICAgICAgdmFyIHN0YXR1c18xID0gcmVzcG9uc2Uuc3RhdHVzLCBzdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcbiAgICAgICAgICAgIHRocm93IG5ldyBBcmNHSVNSZXF1ZXN0RXJyb3Ioc3RhdHVzVGV4dCwgXCJIVFRQIFwiICsgc3RhdHVzXzEsIHJlc3BvbnNlLCB1cmwsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyYXdSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAocGFyYW1zLmYpIHtcbiAgICAgICAgICAgIGNhc2UgXCJqc29uXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNhc2UgXCJnZW9qc29uXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNhc2UgXCJodG1sXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IGJsb2IgcmVzcG9uc2VzIGFyZSBkaWZmaWN1bHQgdG8gbWFrZSBjcm9zcyBwbGF0Zm9ybSB3ZSB3aWxsIGp1c3QgaGF2ZSB0byB0cnVzdCB0aGF0IGlzb21vcnBoaWMgZmV0Y2ggd2lsbCBkbyBpdHMgam9iICovXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAoKHBhcmFtcy5mID09PSBcImpzb25cIiB8fCBwYXJhbXMuZiA9PT0gXCJnZW9qc29uXCIpICYmICFyYXdSZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gY2hlY2tGb3JFcnJvcnMoZGF0YSwgdXJsLCBwYXJhbXMsIG9wdGlvbnMsIG9yaWdpbmFsQXV0aEVycm9yKTtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbEF1dGhFcnJvcikge1xuICAgICAgICAgICAgICAgIC8qIElmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIHRvIGFuIHVuZmVkZXJhdGVkIHNlcnZpY2UgdGhhdFxuICAgICAgICAgICAgICAgIGRpZG4ndCByZXF1aXJlIGF1dGhlbnRpY2F0aW9uLCBhZGQgdGhlIGJhc2UgdXJsIGFuZCBhIGR1bW15IHRva2VuXG4gICAgICAgICAgICAgICAgdG8gdGhlIGxpc3Qgb2YgdHJ1c3RlZCBzZXJ2ZXJzIHRvIGF2b2lkIGFub3RoZXIgZmVkZXJhdGlvbiBjaGVja1xuICAgICAgICAgICAgICAgIGluIHRoZSBldmVudCBvZiBhIHJlcGVhdCByZXF1ZXN0ICovXG4gICAgICAgICAgICAgICAgdmFyIHRydW5jYXRlZFVybCA9IHVybFxuICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoL1xcL3Jlc3QoXFwvYWRtaW4pP1xcL3NlcnZpY2VzXFwvLylbMF07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hdXRoZW50aWNhdGlvbi5mZWRlcmF0ZWRTZXJ2ZXJzW3RydW5jYXRlZFVybF0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdCB0byAyNCBob3Vyc1xuICAgICAgICAgICAgICAgICAgICBleHBpcmVzOiBuZXcgRGF0ZShEYXRlLm5vdygpICsgODY0MDAgKiAxMDAwKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsQXV0aEVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LmpzLm1hcCIsIi8qIENvcHlyaWdodCAoYykgMjAxNyBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG4vLyBUeXBlU2NyaXB0IDIuMSBubyBsb25nZXIgYWxsb3dzIHlvdSB0byBleHRlbmQgYnVpbHQgaW4gdHlwZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEyNzkwI2lzc3VlY29tbWVudC0yNjU5ODE0NDJcbi8vIGFuZCBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQtd2lraS9ibG9iL21hc3Rlci9CcmVha2luZy1DaGFuZ2VzLm1kI2V4dGVuZGluZy1idWlsdC1pbnMtbGlrZS1lcnJvci1hcnJheS1hbmQtbWFwLW1heS1uby1sb25nZXItd29ya1xuLy9cbi8vIFRoaXMgY29kZSBpcyBmcm9tIE1ETiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9FcnJvciNDdXN0b21fRXJyb3JfVHlwZXMuXG52YXIgQXJjR0lTUmVxdWVzdEVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQXJjR0lTUmVxdWVzdEVycm9yYCAgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgLSBUaGUgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBBUElcbiAgICAgKiBAcGFyYW0gY29kZSAtIFRoZSBlcnJvciBjb2RlIGZyb20gdGhlIEFQSVxuICAgICAqIEBwYXJhbSByZXNwb25zZSAtIFRoZSBvcmlnaW5hbCByZXNwb25zZSBmcm9tIHRoZSBBUEkgdGhhdCBjYXVzZWQgdGhlIGVycm9yXG4gICAgICogQHBhcmFtIHVybCAtIFRoZSBvcmlnaW5hbCB1cmwgb2YgdGhlIHJlcXVlc3RcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcmlnaW5hbCBvcHRpb25zIGFuZCBwYXJhbWV0ZXJzIG9mIHRoZSByZXF1ZXN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gQXJjR0lTUmVxdWVzdEVycm9yKG1lc3NhZ2UsIGNvZGUsIHJlc3BvbnNlLCB1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UgfHwgXCJVTktOT1dOX0VSUk9SXCI7XG4gICAgICAgIGNvZGUgPSBjb2RlIHx8IFwiVU5LTk9XTl9FUlJPUl9DT0RFXCI7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQXJjR0lTUmVxdWVzdEVycm9yXCI7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9XG4gICAgICAgICAgICBjb2RlID09PSBcIlVOS05PV05fRVJST1JfQ09ERVwiID8gbWVzc2FnZSA6IGNvZGUgKyBcIjogXCIgKyBtZXNzYWdlO1xuICAgICAgICB0aGlzLm9yaWdpbmFsTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBBcmNHSVNSZXF1ZXN0RXJyb3I7XG59KCkpO1xuZXhwb3J0IHsgQXJjR0lTUmVxdWVzdEVycm9yIH07XG5BcmNHSVNSZXF1ZXN0RXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuQXJjR0lTUmVxdWVzdEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFyY0dJU1JlcXVlc3RFcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFyY0dJU1JlcXVlc3RFcnJvci5qcy5tYXAiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuLyoqXG4gKiBIZWxwZXIgZm9yIG1ldGhvZHMgd2l0aCBsb3RzIG9mIGZpcnN0IG9yZGVyIHJlcXVlc3Qgb3B0aW9ucyB0byBwYXNzIHRocm91Z2ggYXMgcmVxdWVzdCBwYXJhbWV0ZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ3VzdG9tUGFyYW1zKGN1c3RvbU9wdGlvbnMsIGtleXMsIGJhc2VPcHRpb25zKSB7XG4gICAgdmFyIHJlcXVlc3RPcHRpb25zS2V5cyA9IFtcbiAgICAgICAgXCJwYXJhbXNcIixcbiAgICAgICAgXCJodHRwTWV0aG9kXCIsXG4gICAgICAgIFwicmF3UmVzcG9uc2VcIixcbiAgICAgICAgXCJhdXRoZW50aWNhdGlvblwiLFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICBcImZldGNoXCIsXG4gICAgICAgIFwibWF4VXJsTGVuZ3RoXCIsXG4gICAgICAgIFwiaGVhZGVyc1wiXG4gICAgXTtcbiAgICB2YXIgb3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHsgcGFyYW1zOiB7fSB9LCBiYXNlT3B0aW9ucyksIGN1c3RvbU9wdGlvbnMpO1xuICAgIC8vIG1lcmdlIGFsbCBrZXlzIGluIGN1c3RvbU9wdGlvbnMgaW50byBvcHRpb25zLnBhcmFtc1xuICAgIG9wdGlvbnMucGFyYW1zID0ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKGN1c3RvbU9wdGlvbnNba2V5XSB8fCB0eXBlb2YgY3VzdG9tT3B0aW9uc1trZXldID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdmFsdWVba2V5XSA9IGN1c3RvbU9wdGlvbnNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSwgb3B0aW9ucy5wYXJhbXMpO1xuICAgIC8vIG5vdyByZW1vdmUgYWxsIHByb3BlcnRpZXMgaW4gb3B0aW9ucyB0aGF0IGRvbid0IGV4aXN0IGluIElSZXF1ZXN0T3B0aW9uc1xuICAgIHJldHVybiByZXF1ZXN0T3B0aW9uc0tleXMucmVkdWNlKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmIChvcHRpb25zW2tleV0pIHtcbiAgICAgICAgICAgIHZhbHVlW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sIHt9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcGVuZC1jdXN0b20tcGFyYW1zLmpzLm1hcCIsIi8qIENvcHlyaWdodCAoYykgMjAxOCBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdG8gZW5zdXJlIHRoYXQgdXNlciBzdXBwbGllZCB1cmxzIGRvbid0IGluY2x1ZGUgd2hpdGVzcGFjZSBvciBhIHRyYWlsaW5nIHNsYXNoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5VcmwodXJsKSB7XG4gICAgLy8gR3VhcmQgc28gd2UgZG9uJ3QgdHJ5IHRvIHRyaW0gc29tZXRoaW5nIHRoYXQncyBub3QgYSBzdHJpbmdcbiAgICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICAvLyB0cmltIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNwYWNlcywgYnV0IG5vdCBzcGFjZXMgaW5zaWRlIHRoZSB1cmxcbiAgICB1cmwgPSB1cmwudHJpbSgpO1xuICAgIC8vIHJlbW92ZSB0aGUgdHJhaWxpbmcgc2xhc2ggdG8gdGhlIHVybCBpZiBvbmUgd2FzIGluY2x1ZGVkXG4gICAgaWYgKHVybFt1cmwubGVuZ3RoIC0gMV0gPT09IFwiL1wiKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgwLCAtMSk7XG4gICAgfVxuICAgIHJldHVybiB1cmw7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGVhbi11cmwuanMubWFwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE3IEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IHByb2Nlc3NQYXJhbXMsIHJlcXVpcmVzRm9ybURhdGEgfSBmcm9tIFwiLi9wcm9jZXNzLXBhcmFtc1wiO1xuaW1wb3J0IHsgZW5jb2RlUXVlcnlTdHJpbmcgfSBmcm9tIFwiLi9lbmNvZGUtcXVlcnktc3RyaW5nXCI7XG4vKipcbiAqIEVuY29kZXMgcGFyYW1ldGVycyBpbiBhIFtGb3JtRGF0YV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Zvcm1EYXRhKSBvYmplY3QgaW4gYnJvd3NlcnMgb3IgaW4gYSBbRm9ybURhdGFdKGh0dHBzOi8vZ2l0aHViLmNvbS9mb3JtLWRhdGEvZm9ybS1kYXRhKSBpbiBOb2RlLmpzXG4gKlxuICogQHBhcmFtIHBhcmFtcyBBbiBvYmplY3QgdG8gYmUgZW5jb2RlZC5cbiAqIEByZXR1cm5zIFRoZSBjb21wbGV0ZSBbRm9ybURhdGFdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Gb3JtRGF0YSkgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlRm9ybURhdGEocGFyYW1zLCBmb3JjZUZvcm1EYXRhKSB7XG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2FyY2dpcy1yZXN0LWpzL2lzc3Vlcy80OTkgZm9yIG1vcmUgaW5mby5cbiAgICB2YXIgdXNlRm9ybURhdGEgPSByZXF1aXJlc0Zvcm1EYXRhKHBhcmFtcykgfHwgZm9yY2VGb3JtRGF0YTtcbiAgICB2YXIgbmV3UGFyYW1zID0gcHJvY2Vzc1BhcmFtcyhwYXJhbXMpO1xuICAgIGlmICh1c2VGb3JtRGF0YSkge1xuICAgICAgICB2YXIgZm9ybURhdGFfMSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBPYmplY3Qua2V5cyhuZXdQYXJhbXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBCbG9iICE9PSBcInVuZGVmaW5lZFwiICYmIG5ld1BhcmFtc1trZXldIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICAgICAgICAgIC8qIFRvIG5hbWUgdGhlIEJsb2I6XG4gICAgICAgICAgICAgICAgIDEuIGxvb2sgdG8gYW4gYWx0ZXJuYXRlIHJlcXVlc3QgcGFyYW1ldGVyIGNhbGxlZCAnZmlsZU5hbWUnXG4gICAgICAgICAgICAgICAgIDIuIHNlZSBpZiAnbmFtZScgaGFzIGJlZW4gdGFja2VkIG9udG8gdGhlIEJsb2IgbWFudWFsbHlcbiAgICAgICAgICAgICAgICAgMy4gaWYgYWxsIGVsc2UgZmFpbHMsIHVzZSB0aGUgcmVxdWVzdCBwYXJhbWV0ZXJcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHZhciBmaWxlbmFtZSA9IG5ld1BhcmFtc1tcImZpbGVOYW1lXCJdIHx8IG5ld1BhcmFtc1trZXldLm5hbWUgfHwga2V5O1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhXzEuYXBwZW5kKGtleSwgbmV3UGFyYW1zW2tleV0sIGZpbGVuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICBlbHNlIGlmIChuZXdQYXJhbXNba2V5XS5jb25zdHJ1Y3RvciAmJlxuICAgICAgICAgICAgICAgIG5ld1BhcmFtc1trZXldLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdSZWFkU3RyZWFtJyAmJlxuICAgICAgICAgICAgICAgIC8vIFRPRE86IG9ubHkgc3BlY2lmeSB0aGUga25vd25MZW5ndGggb3B0aW9uIGlmIGEgdmFsaWQgdmFsdWUgaXMgZ2l2ZW4uXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuIHZlcmlmeSBpbiBhbGwgUkVTVCBBUEkgdGhhdCB0aGUgb3B0aW9uIGlzIG5lZWQgZm9yXG4gICAgICAgICAgICAgICAgLy8gbm9kZSBSZWFkU3RyZWFtLCBpdCBjYW4gdGhyb3cgYW4gZXJyb3IgZm9yIHRoZSBtaXNzaW5nIGRhdGFTaXplIHZhbHVlLlxuICAgICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCBzdWNoIGNoYW5nZSB3aWxsIGJlIGEgYnJlYWtpbmcgY2hhbmdlLlxuICAgICAgICAgICAgICAgIE51bWJlci5pc0ludGVnZXIobmV3UGFyYW1zW1wiZGF0YVNpemVcIl0pKSB7XG4gICAgICAgICAgICAgICAgLy8gaGF2ZSB0byBjYXN0IHRoZSBmb3JtRGF0YSB0byBhbnkgc28gdGhhdCBJIGNhbiB1c2UgdGhlIHVub2ZmaWNpYWwgQVBJXG4gICAgICAgICAgICAgICAgLy8gaW4gdGhlIGZvcm0tZGF0YSBsaWJyYXJ5IHRvIGhhbmRsZSBOb2RlIFJlYWRTdHJlYW0uIFNlZVxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mb3JtLWRhdGEvZm9ybS1kYXRhL2lzc3Vlcy81MDhcbiAgICAgICAgICAgICAgICBmb3JtRGF0YV8xLmFwcGVuZChrZXksIG5ld1BhcmFtc1trZXldLCB7XG4gICAgICAgICAgICAgICAgICAgIGtub3duTGVuZ3RoOiBuZXdQYXJhbXNbXCJkYXRhU2l6ZVwiXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9ybURhdGFfMS5hcHBlbmQoa2V5LCBuZXdQYXJhbXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZm9ybURhdGFfMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVRdWVyeVN0cmluZyhwYXJhbXMpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuY29kZS1mb3JtLWRhdGEuanMubWFwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE3IEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IHByb2Nlc3NQYXJhbXMgfSBmcm9tIFwiLi9wcm9jZXNzLXBhcmFtc1wiO1xuLyoqXG4gKiBFbmNvZGVzIGtleXMgYW5kIHBhcmFtZXRlcnMgZm9yIHVzZSBpbiBhIFVSTCdzIHF1ZXJ5IHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ga2V5IFBhcmFtZXRlcidzIGtleVxuICogQHBhcmFtIHZhbHVlIFBhcmFtZXRlcidzIHZhbHVlXG4gKiBAcmV0dXJucyBRdWVyeSBzdHJpbmcgd2l0aCBrZXkgYW5kIHZhbHVlIHBhaXJzIHNlcGFyYXRlZCBieSBcIiZcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlUGFyYW0oa2V5LCB2YWx1ZSkge1xuICAgIC8vIEZvciBhcnJheSBvZiBhcnJheXMsIHJlcGVhdCBrZXk9dmFsdWUgZm9yIGVhY2ggZWxlbWVudCBvZiBjb250YWluaW5nIGFycmF5XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlWzBdICYmIEFycmF5LmlzQXJyYXkodmFsdWVbMF0pKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoZnVuY3Rpb24gKGFycmF5RWxlbSkgeyByZXR1cm4gZW5jb2RlUGFyYW0oa2V5LCBhcnJheUVsZW0pOyB9KS5qb2luKFwiJlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xufVxuLyoqXG4gKiBFbmNvZGVzIHRoZSBwYXNzZWQgb2JqZWN0IGFzIGEgcXVlcnkgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSBwYXJhbXMgQW4gb2JqZWN0IHRvIGJlIGVuY29kZWQuXG4gKiBAcmV0dXJucyBBbiBlbmNvZGVkIHF1ZXJ5IHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVF1ZXJ5U3RyaW5nKHBhcmFtcykge1xuICAgIHZhciBuZXdQYXJhbXMgPSBwcm9jZXNzUGFyYW1zKHBhcmFtcyk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld1BhcmFtcylcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVQYXJhbShrZXksIG5ld1BhcmFtc1trZXldKTtcbiAgICB9KVxuICAgICAgICAuam9pbihcIiZcIik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbmNvZGUtcXVlcnktc3RyaW5nLmpzLm1hcCIsIi8qIENvcHlyaWdodCAoYykgMjAxNyBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG4vKipcbiAqIENoZWNrcyBwYXJhbWV0ZXJzIHRvIHNlZSBpZiB3ZSBzaG91bGQgdXNlIEZvcm1EYXRhIHRvIHNlbmQgdGhlIHJlcXVlc3RcbiAqIEBwYXJhbSBwYXJhbXMgVGhlIG9iamVjdCB3aG9zZSBrZXlzIHdpbGwgYmUgZW5jb2RlZC5cbiAqIEByZXR1cm4gQSBib29sZWFuIGluZGljYXRpbmcgaWYgRm9ybURhdGEgd2lsbCBiZSByZXF1aXJlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVzRm9ybURhdGEocGFyYW1zKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHBhcmFtcykuc29tZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcmFtc1trZXldO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLnRvUGFyYW0pIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9QYXJhbSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0eXBlID0gdmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiQXJyYXlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlIFwiT2JqZWN0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSBcIkRhdGVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlIFwiRnVuY3Rpb25cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlIFwiQm9vbGVhblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgXCJTdHJpbmdcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlIFwiTnVtYmVyXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBwYXJhbWV0ZXJzIHRvIHRoZSBwcm9wZXIgcmVwcmVzZW50YXRpb24gdG8gc2VuZCB0byB0aGUgQXJjR0lTIFJFU1QgQVBJLlxuICogQHBhcmFtIHBhcmFtcyBUaGUgb2JqZWN0IHdob3NlIGtleXMgd2lsbCBiZSBlbmNvZGVkLlxuICogQHJldHVybiBBIG5ldyBvYmplY3Qgd2l0aCBwcm9wZXJseSBlbmNvZGVkIHZhbHVlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NQYXJhbXMocGFyYW1zKSB7XG4gICAgdmFyIG5ld1BhcmFtcyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHZhciBwYXJhbSA9IHBhcmFtc1trZXldO1xuICAgICAgICBpZiAocGFyYW0gJiYgcGFyYW0udG9QYXJhbSkge1xuICAgICAgICAgICAgcGFyYW0gPSBwYXJhbS50b1BhcmFtKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXJhbSAmJlxuICAgICAgICAgICAgcGFyYW0gIT09IDAgJiZcbiAgICAgICAgICAgIHR5cGVvZiBwYXJhbSAhPT0gXCJib29sZWFuXCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiBwYXJhbSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0eXBlID0gcGFyYW0uY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyBwcm9wZXJseSBlbmNvZGVzIG9iamVjdHMsIGFycmF5cyBhbmQgZGF0ZXMgZm9yIGFyY2dpcy5jb20gYW5kIG90aGVyIHNlcnZpY2VzLlxuICAgICAgICAvLyBwb3J0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9lc3JpLWxlYWZsZXQvYmxvYi9tYXN0ZXIvc3JjL1JlcXVlc3QuanMjTDIyLUwzMFxuICAgICAgICAvLyBhbHNvIHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9hcmNnaXMtcmVzdC1qcy9pc3N1ZXMvMTg6XG4gICAgICAgIC8vIG51bGwsIHVuZGVmaW5lZCwgZnVuY3Rpb24gYXJlIGV4Y2x1ZGVkLiBJZiB5b3Ugd2FudCB0byBzZW5kIGFuIGVtcHR5IGtleSB5b3UgbmVlZCB0byBzZW5kIGFuIGVtcHR5IHN0cmluZyBcIlwiLlxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJheVwiOlxuICAgICAgICAgICAgICAgIC8vIEJhc2VkIG9uIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBhcnJheSwgY2xhc3NpZnkgYXJyYXkgYXMgYW4gYXJyYXkgb2YgYXJyYXlzLCBhbiBhcnJheSBvZiBvYmplY3RzXG4gICAgICAgICAgICAgICAgLy8gdG8gYmUgc3RyaW5naWZpZWQsIG9yIGFuIGFycmF5IG9mIG5vbi1vYmplY3RzIHRvIGJlIGNvbW1hLXNlcGFyYXRlZFxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jYXNlLWRlY2xhcmF0aW9uc1xuICAgICAgICAgICAgICAgIHZhciBmaXJzdEVsZW1lbnRUeXBlID0gKF9iID0gKF9hID0gcGFyYW1bMF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb25zdHJ1Y3RvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm5hbWU7XG4gICAgICAgICAgICAgICAgdmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICBmaXJzdEVsZW1lbnRUeXBlID09PSBcIkFycmF5XCIgPyBwYXJhbSA6IC8vIHBhc3MgdGhydSBhcnJheSBvZiBhcnJheXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0RWxlbWVudFR5cGUgPT09IFwiT2JqZWN0XCIgPyBKU09OLnN0cmluZ2lmeShwYXJhbSkgOiAvLyBzdHJpbmdpZnkgYXJyYXkgb2Ygb2JqZWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtLmpvaW4oXCIsXCIpOyAvLyBqb2luIG90aGVyIHR5cGVzIG9mIGFycmF5IGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiT2JqZWN0XCI6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShwYXJhbSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRGF0ZVwiOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyYW0udmFsdWVPZigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZ1bmN0aW9uXCI6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkJvb2xlYW5cIjpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcmFtICsgXCJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJhbTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDAgfHwgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBuZXdQYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld1BhcmFtcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb2Nlc3MtcGFyYW1zLmpzLm1hcCIsIi8qIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbi8qKlxuICogTWV0aG9kIHVzZWQgaW50ZXJuYWxseSB0byBzdXJmYWNlIG1lc3NhZ2VzIHRvIGRldmVsb3BlcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIFttZXNzYWdlXSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2Fybi5qcy5tYXAiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jcmVhdGVCaW5kaW5nKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNsYXllci1jb21wb25lbnQgLmxheWVyLXRhYnMge1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcblxcbiNsYXllci1jb21wb25lbnQgLmxheWVyLXRhYnNfX2NvbnRlbnQge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMzlweCk7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuXFxuI2xheWVyLWNvbXBvbmVudCAjbGF5ZXItc2VhcmNoIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gICNsYXllci1jb21wb25lbnQgI2xheWVyLXNlYXJjaCAuZHJvcGRvd24tYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyQ29tcG9uZW50L0xheWVyQ29tcG9uZW50LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFFUSxnQkFBZ0IsRUFBQTs7QUFGeEI7RUFNUSwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFUMUI7RUFhUSxnQkFBZ0IsRUFBQTtFQWJ4QjtJQWdCWSxnQ0FBZ0MsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjbGF5ZXItY29tcG9uZW50IHtcXG4gICAgLmxheWVyLXRhYnMge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAubGF5ZXItdGFic19fY29udGVudCB7XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEzOXB4KTtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIH1cXG5cXG4gICAgI2xheWVyLXNlYXJjaCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcblxcbiAgICAgICAgLmRyb3Bkb3duLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2xheWVyLWxpc3QtY29tcG9uZW50ICNuby1sYXllcnMtbWVzc2FnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmN2Y5O1xcbiAgcGFkZGluZzogNXB4OyB9XFxuXFxuI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3Qge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjUwcHgpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTsgfVxcbiAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdF9fbm8taXRlbXMge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0X19pdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpOyB9XFxuICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0X19pdGVtLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgYW5pbWF0aW9uOiBuZXctaXRlbSA1cyBlYXNlLW91dDtcXG4gICAgYm9yZGVyOiBub25lOyB9XFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tY29udGFpbmVyIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tbGFiZWwge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBjdXJzb3I6IG1vdmU7IH1cXG4gICAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0X19pdGVtLWNvbnRhaW5lciAuZXNyaS1sYXllci1saXN0X19pdGVtLWxhYmVsIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tdG9nZ2xlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGhlaWdodDogMTAwJTsgfVxcbiAgICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tY29udGFpbmVyIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tbGFiZWwgLmVzcmktbGF5ZXItbGlzdF9faXRlbS10b2dnbGU6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTEwMCk7IH1cXG4gICAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0X19pdGVtLWNvbnRhaW5lciAuZXNyaS1sYXllci1saXN0X19pdGVtLWxhYmVsIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tdGl0bGUge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7IH1cXG4gICAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0X19pdGVtLWNvbnRhaW5lciAuZXNyaS1sYXllci1saXN0X19pdGVtLWxhYmVsIC5lc3JpLWljb24tbm9uLXZpc2libGUge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LTgwMCk7IH1cXG4gICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1jb250YWluZXIgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1sYWJlbDpoYXMoLmVzcmktaWNvbi1ub24tdmlzaWJsZSkge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1saWdodC04MDApOyB9XFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tY29udGFpbmVyIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tYWN0aW9ucy1tZW51LWl0ZW0tLWFjdGl2ZVthcmlhLWxhYmVsPVxcXCJMZWdlbmRcXFwiXSB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxcbiAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdC1wYW5lbCB7XFxuICAgIG1hcmdpbjogMCAwIDVweCAyN3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7IH1cXG4gICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdC1wYW5lbCAuZXNyaS1sYXllci1saXN0LXBhbmVsX19jb250ZW50IHtcXG4gICAgICBwYWRkaW5nOiA1cHggMCA1cHggMTBweDsgfVxcbiAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0LXBhbmVsIC5lc3JpLWxheWVyLWxpc3QtcGFuZWxfX2NvbnRlbnQ6aGFzKC5sZWdlbmRfX3RlbXBsYXRlcykge1xcbiAgICAgIGJvcmRlci10b3A6IDJweCB2YXIoLS1saWdodC0zMDApIHNvbGlkOyB9XFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3QtcGFuZWwgLmVzcmktbGVnZW5kIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0LXBhbmVsIC5lc3JpLWxlZ2VuZF9fc2VydmljZSB7XFxuICAgICAgcGFkZGluZzogMDsgfVxcbiAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0LXBhbmVsIC5lc3JpLWxlZ2VuZF9fbGF5ZXItY2hpbGQtdGFibGUge1xcbiAgICAgIG1hcmdpbjogMDsgfVxcbiAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1hY3Rpb25zIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpOyB9XFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tYWN0aW9ucyAuZXNyaS1sYXllci1saXN0X19pdGVtLWFjdGlvbnMtbGlzdCAuZXNyaS1kaXNhYmxlZC1lbGVtZW50LFxcbiAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0X19pdGVtLWFjdGlvbnMgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1hY3Rpb25zLWxpc3QgLmVzcmktZGlzYWJsZWQtZWxlbWVudDpob3ZlciB7XFxuICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LTgwMCk7XFxuICAgICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXFxuI2xheWVyLWxpc3QtY29tcG9uZW50ICNsYXllci1saXN0X19idXR0b25zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNTAlKTsgfVxcbiAgI2xheWVyLWxpc3QtY29tcG9uZW50ICNsYXllci1saXN0X19idXR0b25zIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDNweDsgfVxcbiAgI2xheWVyLWxpc3QtY29tcG9uZW50ICNsYXllci1saXN0X19idXR0b25zICNjbGVhci1hbGwtYnV0dG9uLWdyaWQtaXRlbSB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHZhcigtLWxpZ2h0LTMwMCkgc29saWQgIWltcG9ydGFudDsgfVxcbiAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgI2xheWVyLWxpc3RfX2J1dHRvbnMgI2NsZWFyLWFsbC1idXR0b24tZ3JpZC1pdGVtICNjbGVhci1hbGwtYnV0dG9uIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG4gICAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgI2xheWVyLWxpc3RfX2J1dHRvbnMgI2NsZWFyLWFsbC1idXR0b24tZ3JpZC1pdGVtICNjbGVhci1hbGwtYnV0dG9uIHN2ZyB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7IH1cXG4gICNsYXllci1saXN0LWNvbXBvbmVudCAjbGF5ZXItbGlzdF9fYnV0dG9ucyAjbGVnZW5kLWJ1dHRvbi1ncmlkLWl0ZW0ge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCB2YXIoLS1saWdodC0zMDApIHNvbGlkOyB9XFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAjbGF5ZXItbGlzdF9fYnV0dG9ucyAjbGVnZW5kLWJ1dHRvbi1ncmlkLWl0ZW0gbGFiZWwge1xcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0b3A6IDRweDsgfVxcbiAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgI2xheWVyLWxpc3RfX2J1dHRvbnMgI2xlZ2VuZC1idXR0b24tZ3JpZC1pdGVtICNsZWdlbmQtYnV0dG9uIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgYm90dG9tOiAycHg7IH1cXG4gICNsYXllci1saXN0LWNvbXBvbmVudCAjbGF5ZXItbGlzdF9fYnV0dG9ucyAjbGF5ZXItdmlzaWJpbGl0eS1idXR0b24tZ3JpZC1pdGVtIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAyOyB9XFxuXFxuLmNvbG9yLXBpY2tlci1ibG9jayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDExcHg7XFxuICBsZWZ0OiA1cHg7IH1cXG5cXG4ubGF5ZXItc2l6ZS1zbGlkZXIgPiBpbnB1dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNjUlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAzcHg7XFxuICBtYXJnaW46IDAgMTBweDsgfVxcblxcbiNwaWN0dXJlLW1hcmtlci13YXJuaW5nIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gICNwaWN0dXJlLW1hcmtlci13YXJuaW5nIGRpdiB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7IH1cXG5cXG4jc2hvdy1sZWdlbmQtYnV0dG9uOmhvdmVyOm5vdCguZGlzYWJsZWQpLCAjaGlkZS1sZWdlbmQtYnV0dG9uOmhvdmVyOm5vdCguZGlzYWJsZWQpIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7IH1cXG5cXG4jbGVnZW5kLWJ1dHRvbiBzdmcge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTsgfVxcblxcbi5tb2RhbC1iYWNrZHJvcC5mYWRlLnNob3cge1xcbiAgb3BhY2l0eTogMDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvTGF5ZXJMaXN0Q29tcG9uZW50L0xheWVyTGlzdENvbXBvbmVudC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBRVEseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFIcEI7RUFPUSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLDhCQUE4QixFQUFBO0VBVHRDO0lBWVksYUFBYSxFQUFBO0VBWnpCO0lBZ0JZLDhCQUE4QixFQUFBO0VBaEIxQztJQW9CWSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLFlBQVksRUFBQTtJQXRCeEI7TUF5QmdCLGtCQUFrQjtNQUNsQixZQUFZLEVBQUE7TUExQjVCO1FBNkJvQixrQkFBa0I7UUFDbEIsWUFBWSxFQUFBO01BOUJoQztRQWtDb0Isc0NBQXNDLEVBQUE7TUFsQzFEO1FBc0NvQixpQkFBaUIsRUFBQTtNQXRDckM7UUEwQ29CLHVCQUF1QixFQUFBO0lBMUMzQztNQStDZ0IsdUJBQXVCLEVBQUE7SUEvQ3ZDO01BbURnQix5QkFBeUIsRUFBQTtFQW5EekM7SUF3RFksb0JBQW9CO0lBQ3BCLDhCQUE4QixFQUFBO0lBekQxQztNQTREZ0IsdUJBQXVCLEVBQUE7SUE1RHZDO01BZ0VnQixzQ0FBc0MsRUFBQTtJQWhFdEQ7TUFvRWdCLDZCQUE2QixFQUFBO0lBcEU3QztNQXdFZ0IsVUFBVSxFQUFBO0lBeEUxQjtNQTRFZ0IsU0FBUyxFQUFBO0VBNUV6QjtJQWlGWSw4QkFBOEIsRUFBQTtJQWpGMUM7O01BcUZnQix1QkFBdUI7TUFDdkIsZUFBZSxFQUFBOztBQXRGL0I7RUE2RlEsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixrQ0FBa0MsRUFBQTtFQS9GMUM7SUFrR1ksWUFBWSxFQUFBO0VBbEd4QjtJQXNHWSxjQUFjO0lBQ2QsV0FBVztJQUNYLG9EQUFvRCxFQUFBO0lBeEdoRTtNQTJHZ0IsZUFBZSxFQUFBO01BM0cvQjtRQThHb0IsZUFBZTtRQUNmLGtCQUFrQixFQUFBO0VBL0d0QztJQXFIWSxjQUFjO0lBQ2QsV0FBVztJQUNYLHlDQUF5QyxFQUFBO0lBdkhyRDtNQTBIZ0Isc0NBQXNDO01BQ3RDLGtCQUFrQjtNQUNsQixRQUFRLEVBQUE7SUE1SHhCO01BZ0lnQixrQkFBa0I7TUFDbEIsV0FBVyxFQUFBO0VBakkzQjtJQXNJWSxjQUFjO0lBQ2QsV0FBVyxFQUFBOztBQU12QjtFQUNJLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVMsRUFBQTs7QUFHYjtFQUNJLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZ0JBQWdCLEVBQUE7RUFEcEI7SUFJUSxnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxVQUFVLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2xheWVyLWxpc3QtY29tcG9uZW50IHtcXG4gICAgI25vLWxheWVycy1tZXNzYWdlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGY3Zjk7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgLmVzcmktbGF5ZXItbGlzdCB7XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTBweCk7XFxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcblxcbiAgICAgICAgLmVzcmktbGF5ZXItbGlzdF9fbm8taXRlbXMge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZXNyaS1sYXllci1saXN0X19pdGVtIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZXNyaS1sYXllci1saXN0X19pdGVtLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbmV3LWl0ZW0gNXMgZWFzZS1vdXQ7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcblxcbiAgICAgICAgICAgIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tbGFiZWwge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogbW92ZTtcXG5cXG4gICAgICAgICAgICAgICAgLmVzcmktbGF5ZXItbGlzdF9faXRlbS10b2dnbGUge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tdG9nZ2xlOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS0xMDApO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tdGl0bGUge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmVzcmktaWNvbi1ub24tdmlzaWJsZSB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtODAwKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZXNyaS1sYXllci1saXN0X19pdGVtLWxhYmVsOmhhcyguZXNyaS1pY29uLW5vbi12aXNpYmxlKSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC04MDApO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZXNyaS1sYXllci1saXN0X19pdGVtLWFjdGlvbnMtbWVudS1pdGVtLS1hY3RpdmVbYXJpYS1sYWJlbD1cXFwiTGVnZW5kXFxcIl0ge1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5lc3JpLWxheWVyLWxpc3QtcGFuZWwge1xcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDVweCAyN3B4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG5cXG4gICAgICAgICAgICAuZXNyaS1sYXllci1saXN0LXBhbmVsX19jb250ZW50IHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgNXB4IDEwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5lc3JpLWxheWVyLWxpc3QtcGFuZWxfX2NvbnRlbnQ6aGFzKC5sZWdlbmRfX3RlbXBsYXRlcykge1xcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggdmFyKC0tbGlnaHQtMzAwKSBzb2xpZDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmVzcmktbGVnZW5kIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5lc3JpLWxlZ2VuZF9fc2VydmljZSB7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5lc3JpLWxlZ2VuZF9fbGF5ZXItY2hpbGQtdGFibGUge1xcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1hY3Rpb25zIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuXFxuICAgICAgICAgICAgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1hY3Rpb25zLWxpc3QgLmVzcmktZGlzYWJsZWQtZWxlbWVudCxcXG4gICAgICAgICAgICAuZXNyaS1sYXllci1saXN0X19pdGVtLWFjdGlvbnMtbGlzdCAuZXNyaS1kaXNhYmxlZC1lbGVtZW50OmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LTgwMCk7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG4gICAgI2xheWVyLWxpc3RfX2J1dHRvbnMge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDgwcHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA1MCUpO1xcblxcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjY2xlYXItYWxsLWJ1dHRvbi1ncmlkLWl0ZW0ge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCB2YXIoLS1saWdodC0zMDApIHNvbGlkICFpbXBvcnRhbnQ7XFxuXFxuICAgICAgICAgICAgI2NsZWFyLWFsbC1idXR0b24ge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuXFxuICAgICAgICAgICAgICAgIHN2ZyB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjbGVnZW5kLWJ1dHRvbi1ncmlkLWl0ZW0ge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCB2YXIoLS1saWdodC0zMDApIHNvbGlkO1xcblxcbiAgICAgICAgICAgIGxhYmVsIHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgdG9wOiA0cHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICNsZWdlbmQtYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICBib3R0b206IDJweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjbGF5ZXItdmlzaWJpbGl0eS1idXR0b24tZ3JpZC1pdGVtIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgICAgICAgICBncmlkLXJvdzogMjtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cXG4uY29sb3ItcGlja2VyLWJsb2NrIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTFweDtcXG4gICAgbGVmdDogNXB4O1xcbn1cXG5cXG4ubGF5ZXItc2l6ZS1zbGlkZXIgPiBpbnB1dCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDY1JTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDNweDtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbiNwaWN0dXJlLW1hcmtlci13YXJuaW5nIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG5cXG4gICAgZGl2IHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIH1cXG59XFxuXFxuI3Nob3ctbGVnZW5kLWJ1dHRvbjpob3Zlcjpub3QoLmRpc2FibGVkKSwgI2hpZGUtbGVnZW5kLWJ1dHRvbjpob3Zlcjpub3QoLmRpc2FibGVkKSB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7XFxufVxcblxcbiNsZWdlbmQtYnV0dG9uIHN2ZyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5tb2RhbC1iYWNrZHJvcC5mYWRlLnNob3cge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjdGVtcGxhdGUtY29tcG9uZW50IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGY3Zjk7XFxuICBib3JkZXI6IDFweCB2YXIoLS1kYXJrLTgwMCkgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gICN0ZW1wbGF0ZS1jb21wb25lbnQgI3RlbXBsYXRlLWNvbXBvbmVudF9faGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtOyB9XFxuICAgICN0ZW1wbGF0ZS1jb21wb25lbnQgI3RlbXBsYXRlLWNvbXBvbmVudF9faGVhZGVyIGg0IHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7IH1cXG4gICAgI3RlbXBsYXRlLWNvbXBvbmVudCAjdGVtcGxhdGUtY29tcG9uZW50X19oZWFkZXIgI3RlbXBsYXRlLWNvbXBvbmVudF9faW5mbyB7XFxuICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBtYXJnaW46IDJweCAwIDAgNXB4OyB9XFxuICAjdGVtcGxhdGUtY29tcG9uZW50ICN0ZW1wbGF0ZS1zZWFyY2ggLmRyb3Bkb3duLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS01MDApOyB9XFxuICAjdGVtcGxhdGUtY29tcG9uZW50ICNhY3RpdmUtdGVtcGxhdGVzLW1lbnUge1xcbiAgICBoZWlnaHQ6IDU1cHg7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7IH1cXG4gICAgI3RlbXBsYXRlLWNvbXBvbmVudCAjYWN0aXZlLXRlbXBsYXRlcy1tZW51IC5zY3JvbGwtaXRlbSB7XFxuICAgICAgbWF4LXdpZHRoOiAxNTBweDsgfVxcbiAgICAgICN0ZW1wbGF0ZS1jb21wb25lbnQgI2FjdGl2ZS10ZW1wbGF0ZXMtbWVudSAuc2Nyb2xsLWl0ZW0gLm5hdi1saW5rIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgICAgICBib3JkZXI6IDFweCB2YXIoLS1kYXJrLTgwMCkgc29saWQ7IH1cXG4gICAgI3RlbXBsYXRlLWNvbXBvbmVudCAjYWN0aXZlLXRlbXBsYXRlcy1tZW51IC50YWItdGl0bGUge1xcbiAgICAgIG1hcmdpbi10b3A6IDJweDsgfVxcbiAgICAjdGVtcGxhdGUtY29tcG9uZW50ICNhY3RpdmUtdGVtcGxhdGVzLW1lbnUgI25vLWFjdGl2ZS10ZW1wbGF0ZXMge1xcbiAgICAgIHBhZGRpbmc6IDVweCAwIDAgNXB4OyB9XFxuXFxuLnRlbXBsYXRlLXNlYXJjaC1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuICAudGVtcGxhdGUtc2VhcmNoLWl0ZW0gLnRlbXBsYXRlLXNlYXJjaC1pdGVtX19hZGQtYnV0dG9uIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDU1cHgpOyB9XFxuXFxuLnRlbXBsYXRlLWRyb3Bkb3duX19jb250ZW50IHtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgYm9yZGVyLWxlZnQ6IDJweCB2YXIoLS1saWdodC0zMDApIHNvbGlkOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9UZW1wbGF0ZUNvbXBvbmVudC9UZW1wbGF0ZUNvbXBvbmVudC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksY0FBYztFQUNkLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLGtCQUFrQixFQUFBO0VBTHRCO0lBUVEscUJBQXFCLEVBQUE7SUFSN0I7TUFXWSxlQUFlLEVBQUE7SUFYM0I7TUFlWSxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLG1CQUFtQixFQUFBO0VBakIvQjtJQXVCWSxnQ0FBZ0MsRUFBQTtFQXZCNUM7SUE0QlEsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBO0lBaEN6QjtNQW1DWSxnQkFBZ0IsRUFBQTtNQW5DNUI7UUFzQ2dCLHNCQUFzQjtRQUN0Qiw4QkFBOEI7UUFDOUIsZUFBZTtRQUNmLGlDQUFpQyxFQUFBO0lBekNqRDtNQThDWSxlQUFlLEVBQUE7SUE5QzNCO01Ba0RZLG9CQUFvQixFQUFBOztBQU1oQztFQUNJLFdBQVcsRUFBQTtFQURmO0lBSVEsd0JBQXdCLEVBQUE7O0FBSWhDO0VBQ0ksaUJBQWlCO0VBQ2pCLHVDQUF1QyxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiN0ZW1wbGF0ZS1jb21wb25lbnQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjdmOTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tZGFyay04MDApIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgICN0ZW1wbGF0ZS1jb21wb25lbnRfX2hlYWRlciB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuXFxuICAgICAgICBoNCB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3RlbXBsYXRlLWNvbXBvbmVudF9faW5mbyB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBtYXJnaW46IDJweCAwIDAgNXB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICN0ZW1wbGF0ZS1zZWFyY2gge1xcbiAgICAgICAgLmRyb3Bkb3duLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgI2FjdGl2ZS10ZW1wbGF0ZXMtbWVudSB7XFxuICAgICAgICBoZWlnaHQ6IDU1cHg7XFxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcblxcbiAgICAgICAgLnNjcm9sbC1pdGVtIHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xcblxcbiAgICAgICAgICAgIC5uYXYtbGluayB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCk7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCB2YXIoLS1kYXJrLTgwMCkgc29saWQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhYi10aXRsZSB7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI25vLWFjdGl2ZS10ZW1wbGF0ZXMge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDAgNXB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcblxcbi50ZW1wbGF0ZS1zZWFyY2gtaXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAudGVtcGxhdGUtc2VhcmNoLWl0ZW1fX2FkZC1idXR0b24ge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDU1cHgpO1xcbiAgICB9XFxufVxcblxcbi50ZW1wbGF0ZS1kcm9wZG93bl9fY29udGVudCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHZhcigtLWxpZ2h0LTMwMCkgc29saWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5qaW11LXdpZGdldCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4ucC01IHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50OyB9XFxuXFxuLyogR3JpZCBwb3NpdGlvbmluZyAqL1xcbiNvZW0tZGFzaGJvYXJkLWdyaWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDUwJSk7XFxuICBmb250LXNpemU6IDEyNSUgIWltcG9ydGFudDsgfVxcbiAgI29lbS1kYXNoYm9hcmQtZ3JpZCAuZ3JpZC1pdGVtIHtcXG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgI29lbS1kYXNoYm9hcmQtZ3JpZCAjdGVtcGxhdGUtY29tcG9uZW50X19ncmlkLWl0ZW0ge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDE7IH1cXG4gICNvZW0tZGFzaGJvYXJkLWdyaWQgI2xheWVyLWNvbXBvbmVudF9fZ3JpZC1pdGVtIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAyIC8gNDsgfVxcbiAgI29lbS1kYXNoYm9hcmQtZ3JpZCAjbGF5ZXItbGlzdF9fZ3JpZC1pdGVtIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpOyB9XFxuICAjb2VtLWRhc2hib2FyZC1ncmlkICNzYXZlLXRlbXBsYXRlLWdyaWQtaXRlbSB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpOyB9XFxuICAjb2VtLWRhc2hib2FyZC1ncmlkIC5sb2FkaW5nIHtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7IH1cXG5cXG4vKiBCdXR0b25zIGFuZCBpY29ucyAqL1xcbi5hZGQtYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5hZGQtYnV0dG9uIC5pY29uLWJ0bi1zaXplciB7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgLmFkZC1idXR0b24gLmppbXUtaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4ICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDNweDsgfVxcblxcbiNvcGVuLXNhdmUtdGVtcGxhdGUtYnV0dG9uIHtcXG4gIGJvdHRvbTogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcGFkZGluZzogMHJlbSAwLjc1cmVtOyB9XFxuICAjb3Blbi1zYXZlLXRlbXBsYXRlLWJ1dHRvbiAuamltdS1pY29uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4OyB9XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktNTAwKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTUwMCk7IH1cXG5cXG4uYnRuLXByaW1hcnk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTIwMCk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeS0yMDApOyB9XFxuXFxuLmFkdmFuY2VkLXNlbGVjdC1tZW51IC5zZWxlY3QtaXRlbS1wbGFjZWhvbGRlciB7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIHdpZHRoOiAwICFpbXBvcnRhbnQ7IH1cXG5cXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDsgfVxcblxcbi5tdWx0aXBsZS1zZWxlY3QtdG9vbCB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4uamltdS1kcm9wZG93bi1pdGVtID4gLmppbXUtY2hlY2tib3gge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuQGtleWZyYW1lcyBuZXctaXRlbSB7XFxuICBmcm9tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTEwMCk7IH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS0xMDApOyB9XFxuICB0byB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9IH1cXG5cXG4ubW9kYWwtY29udGVudCAubWVudS1uYXZpZ2F0aW9uIC5uYXYtbGluay5hY3RpdmUge1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9XaWRnZXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLDBCQUEwQixFQUFBOztBQUk5QixxQkFBQTtBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixxQ0FBcUM7RUFFckMsMEJBQTBCLEVBQUE7RUFSOUI7SUFXUSwwQkFBMEI7SUFDMUIsa0JBQWtCLEVBQUE7RUFaMUI7SUFnQlEsY0FBYztJQUNkLFdBQVcsRUFBQTtFQWpCbkI7SUFxQlEsY0FBYztJQUNkLGVBQWUsRUFBQTtFQXRCdkI7SUEwQlEsY0FBYztJQUNkLGVBQWU7SUFDZiw4QkFBOEIsRUFBQTtFQTVCdEM7SUFnQ1EsY0FBYztJQUNkLFdBQVc7SUFDWCw4QkFBOEIsRUFBQTtFQWxDdEM7SUFzQ1EsWUFBWTtJQUNaLFlBQVksRUFBQTs7QUFJcEIsc0JBQUE7QUFDQTtFQUNJLFdBQVc7RUFDWCxjQUFjLEVBQUE7RUFGbEI7SUFLUSxxQkFBcUI7SUFDckIsZ0JBQWdCLEVBQUE7RUFOeEI7SUFVUSw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLGtCQUFrQixFQUFBOztBQUkxQjtFQUlJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7RUFOekI7SUFFUSxrQkFBa0IsRUFBQTs7QUFPMUI7RUFDSSxzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLHNDQUFzQztFQUN0QyxrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDSSxvQkFBb0I7RUFDcEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kseUNBQXlDLEVBQUE7O0FBRzdDO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0k7SUFBTSxzQ0FBc0MsRUFBQTtFQUM1QztJQUFLLHNDQUFzQyxFQUFBO0VBQzNDO0lBQUksNkJBQTZCLEVBQUEsRUFBQTs7QUFHckM7RUFDSSxlQUFlLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmppbXUtd2lkZ2V0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucC01IHtcXG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbi8qIEdyaWQgcG9zaXRpb25pbmcgKi9cXG4jb2VtLWRhc2hib2FyZC1ncmlkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xcbiAgICAvLyBncmlkLXRlbXBsYXRlLXJvd3M6IDE5MHB4IDFmciA2MHB4O1xcbiAgICBmb250LXNpemU6IDEyNSUgIWltcG9ydGFudDtcXG5cXG4gICAgLmdyaWQtaXRlbSB7XFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAjdGVtcGxhdGUtY29tcG9uZW50X19ncmlkLWl0ZW0ge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgICAgICBncmlkLXJvdzogMTtcXG4gICAgfVxcblxcbiAgICAjbGF5ZXItY29tcG9uZW50X19ncmlkLWl0ZW0ge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDQ7XFxuICAgIH1cXG5cXG4gICAgI2xheWVyLWxpc3RfX2dyaWQtaXRlbSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgfVxcblxcbiAgICAjc2F2ZS10ZW1wbGF0ZS1ncmlkLWl0ZW0ge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgICAgICBncmlkLXJvdzogMztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgfVxcblxcbiAgICAubG9hZGluZyB7XFxuICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgIH1cXG59XFxuXFxuLyogQnV0dG9ucyBhbmQgaWNvbnMgKi9cXG4uYWRkLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG5cXG4gICAgLmljb24tYnRuLXNpemVyIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIH1cXG5cXG4gICAgLmppbXUtaWNvbiB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcXG4gICAgfVxcbn1cXG5cXG4jb3Blbi1zYXZlLXRlbXBsYXRlLWJ1dHRvbiB7XFxuICAgIC5qaW11LWljb24ge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgICB9XFxuICAgIGJvdHRvbTogNTAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmc6IDByZW0gMC43NXJlbTtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstODAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTUwMCk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTUwMCk7XFxufVxcblxcbi5idG4tcHJpbWFyeTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS0yMDApO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeS0yMDApO1xcbn1cXG5cXG4uYWR2YW5jZWQtc2VsZWN0LW1lbnUgLnNlbGVjdC1pdGVtLXBsYWNlaG9sZGVyIHtcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tdWx0aXBsZS1zZWxlY3QtdG9vbCB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmppbXUtZHJvcGRvd24taXRlbSA+IC5qaW11LWNoZWNrYm94IHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG5ldy1pdGVtIHtcXG4gICAgZnJvbSB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTEwMCl9XFxuICAgIDUwJSB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTEwMCl9XFxuICAgIHRvIHtiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudH1cXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgLm1lbnUtbmF2aWdhdGlvbiAubmF2LWxpbmsuYWN0aXZlIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9MYXllckNvbXBvbmVudC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9MYXllckNvbXBvbmVudC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL0xheWVyTGlzdENvbXBvbmVudC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9MYXllckxpc3RDb21wb25lbnQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9UZW1wbGF0ZUNvbXBvbmVudC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9UZW1wbGF0ZUNvbXBvbmVudC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL1dpZGdldC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9XaWRnZXQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnV0dG9uLCBJY29ufSBmcm9tIFwiamltdS11aVwiO1xuaW1wb3J0IExheWVyIGZyb20gXCJlc3JpL2xheWVycy9MYXllclwiO1xuaW1wb3J0IExheWVyV3JhcHBlciBmcm9tIFwiLi4vTGF5ZXJXcmFwcGVyXCI7XG5cbmludGVyZmFjZSBBZGRMYXllckl0ZW1Qcm9wcyB7XG4gICAgbGF5ZXJXcmFwcGVyOiBMYXllcldyYXBwZXIgLy8gTGF5ZXJXcmFwcGVyIG9mIHRoZSBhc3NvY2lhdGVkIExheWVyXG4gICAgb25BZGRMYXllcjogKGxheWVyV3JhcHBlcjogTGF5ZXJXcmFwcGVyKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiBhZGRpbmcgTGF5ZXJcbiAgICBhY3RpdmU6IGJvb2xlYW4gLy8gd2hldGhlciB0aGUgTGF5ZXIgaXMgYWN0aXZlXG59XG5cblxuLyoqXG4gKiBBZGRMYXllckl0ZW0gYWxsb3dzIHRoZSB1c2VyIHRvIGFkZCBhIExheWVyIHRvIHRoZSBNYXBcbiAqL1xuY2xhc3MgQWRkTGF5ZXJJdGVtIGV4dGVuZHMgQ29tcG9uZW50PEFkZExheWVySXRlbVByb3BzLCB7fT4ge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b25cIlxuICAgICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQWRkTGF5ZXIodGhpcy5wcm9wcy5sYXllcldyYXBwZXIpfVxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRlcnRpYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5hY3RpdmV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17dGhpcy5wcm9wcy5hY3RpdmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9jaGVjay0zMi5zdmdcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL3BsdXMtMzIuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sYXllcldyYXBwZXIudGl0bGV9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZExheWVySXRlbTtcbiIsImltcG9ydCBcIi4vTGF5ZXJDb21wb25lbnQuc2Nzc1wiO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1RhYiwgVGFic30gZnJvbSAnamltdS11aSc7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi4vQ2F0ZWdvcnknO1xuaW1wb3J0IExheWVyU2VhcmNoIGZyb20gXCIuL0xheWVyU2VhcmNoXCI7XG5pbXBvcnQgQWRkTGF5ZXJJdGVtIGZyb20gXCIuL0FkZExheWVySXRlbVwiO1xuaW1wb3J0IExheWVyV3JhcHBlciBmcm9tIFwiLi4vTGF5ZXJXcmFwcGVyXCI7XG5cbmludGVyZmFjZSBBZGRMYXllcnNQcm9wcyB7XG4gICAgbGF5ZXJzOiBMYXllcldyYXBwZXJbXSAvLyBMaXN0IG9mIExheWVyV3JhcHBlcnMgdG8gcmVuZGVyXG4gICAgYWN0aXZlTGF5ZXJzOiBMYXllcldyYXBwZXJbXSAvLyBsaXN0IG9mIGFjdGl2ZSBMYXllcnNcbiAgICBvbkFkZExheWVyOiAobGF5ZXJXcmFwcGVyOiBMYXllcldyYXBwZXIpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIGFkZGluZyBMYXllcnNcbiAgICBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdIC8vIGxpc3Qgb2YgQ2F0ZWdvcmllc1xufVxuXG4vKipcbiAqIExheWVyQ29tcG9uZW50IGNvbnRhaW5zIG11bHRpcGxlIFRhYnMgb2YgQ2F0ZWdvcmllcyBhbmQgYWxsb3dzIHVzZXJzIHRvIGFkZCBMYXllcnMgdG8gdGhlIE1hcFxuICovXG5jbGFzcyBMYXllckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxBZGRMYXllcnNQcm9wcywge30+IHtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgbGlzdCBvZiBDYXRlZ29yaWVzIGFzIFRhYnNcbiAgICAgKi9cbiAgICByZW5kZXJDYXRlZ29yeVRhYnM6IEZ1bmN0aW9uID0gKCk6IFJlYWN0LlJlYWN0RWxlbWVudFtdID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e1wiY2F0ZWdvcnktXCIgKyBjYXRlZ29yeS5pZCArIFwiLXRhYlwifVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y2F0ZWdvcnkudGl0bGUgKyBcIiAoXCIgKyBjYXRlZ29yeS5sYXllcldyYXBwZXJzLmxlbmd0aCArIFwiKVwifVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17XCJjYXRlZ29yeS1cIiArIGNhdGVnb3J5LmlkICsgXCItdGFiLWNvbnRlbnRcIn0gY2xhc3NOYW1lPVwibGF5ZXItdGFic19fY29udGVudCBwLTUgYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubGF5ZXJXcmFwcGVycy5tYXAoKGxheWVyV3JhcHBlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRMYXllckl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyV3JhcHBlcj17bGF5ZXJXcmFwcGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRMYXllcj17dGhpcy5wcm9wcy5vbkFkZExheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVycy5pbmNsdWRlcyhsYXllcldyYXBwZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGF5ZXItY29tcG9uZW50XCI+XG4gICAgICAgICAgICAgICAgPGg0PkxheWVyczwvaDQ+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubGF5ZXJzICYmIChcbiAgICAgICAgICAgICAgICAgICAgPExheWVyU2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcnM9e3RoaXMucHJvcHMubGF5ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRMYXllcj17dGhpcy5wcm9wcy5vbkFkZExheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTGF5ZXJzPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVyc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItdGFic1wiPlxuICAgICAgICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKXt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNhdGVnb3JpZXMgJiYgdGhpcy5yZW5kZXJDYXRlZ29yeVRhYnMoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllckNvbXBvbmVudDtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0FkdmFuY2VkU2VsZWN0LCBJY29ufSBmcm9tIFwiamltdS11aVwiO1xuaW1wb3J0IEFkZExheWVySXRlbSBmcm9tIFwiLi9BZGRMYXllckl0ZW1cIjtcbmltcG9ydCBMYXllcldyYXBwZXIgZnJvbSBcIi4uL0xheWVyV3JhcHBlclwiO1xuXG5pbnRlcmZhY2UgQWRkTGF5ZXJTZWFyY2hQcm9wcyB7XG4gICAgbGF5ZXJzOiBMYXllcldyYXBwZXJbXSAvLyBsaXN0IG9mIExheWVyV3JhcHBlcnMgdG8gcmVuZGVyXG4gICAgYWN0aXZlTGF5ZXJzOiBMYXllcldyYXBwZXJbXSAvLyBsaXN0IG9mIGFjdGl2ZSBMYXllcnNcbiAgICBvbkFkZExheWVyOiAobGF5ZXJXcmFwcGVyOiBMYXllcldyYXBwZXIpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIGFkZGluZyBMYXllcnNcbn1cblxuLyoqXG4gKiBMYXllclNlYXJjaCBhbGxvd3MgdXNlcnMgdG8gc2VhcmNoIGZvciBhbmQgYWRkIExheWVycyB0byB0aGUgTWFwXG4gKi9cbmNsYXNzIExheWVyU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50PEFkZExheWVyU2VhcmNoUHJvcHMsIHt9PiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImxheWVyLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxBZHZhbmNlZFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBpc011bHRpcGxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBpc0VtcHR5T3B0aW9uSGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgc29ydFZhbHVlc0J5TGFiZWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG1lbnVQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBbMCwgLTQwXVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjdXN0b21Ecm9wZG93bkJ1dHRvbkNvbnRlbnQ9eygpID0+IHtyZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvc2VhcmNoLTMyLnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2ggZm9yIGxheWVyLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX19XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1ZhbHVlcz17dGhpcy5wcm9wcy5sYXllcnMubWFwKChsYXllcldyYXBwZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGxheWVyV3JhcHBlci50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbGF5ZXJXcmFwcGVyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxBZGRMYXllckl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyV3JhcHBlcj17bGF5ZXJXcmFwcGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRMYXllcj17dGhpcy5wcm9wcy5vbkFkZExheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVycy5pbmNsdWRlcyhsYXllcldyYXBwZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllclNlYXJjaDtcbiIsImltcG9ydCBcIi4vTGF5ZXJMaXN0Q29tcG9uZW50LnNjc3NcIjtcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0J1dHRvbiwgRHJvcGRvd24sIERyb3Bkb3duQnV0dG9uLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbSwgSWNvbn0gZnJvbSBcImppbXUtdWlcIjtcblxuaW50ZXJmYWNlIExheWVyTGlzdEJ1dHRvbnNQcm9wcyB7XG4gICAgb25DbGVhckFsbDogKCkgPT4gYW55IC8vIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGNsZWFyIGFsbCBMYXllcnNcbiAgICBvbkhpZGVMZWdlbmQ6ICgpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB0byBoaWRlIGxlZ2VuZHNcbiAgICBvblNob3dMZWdlbmQ6ICgpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB0byBzaG93IGxlZ2VuZHNcbiAgICBvbkhpZGVMYXllcnM6ICgpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB0byBoaWRlIGFsbCBMYXllcnNcbiAgICBvblNob3dMYXllcnM6ICgpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB0byBzaG93IGFsbCBMYXllcnNcbiAgICBhbGxMYXllcnNIaWRkZW46IGJvb2xlYW4gLy8gd2hldGhlciBhbGwgTGF5ZXJzIGFyZSBoaWRkZW5cbiAgICBhbGxMZWdlbmRzT3BlbjogYm9vbGVhbiAvLyB3aGV0aGVyIGFsbCBsZWdlbmRzIGFyZSBvcGVuXG4gICAgYWxsTGVnZW5kc0Nsb3NlZDogYm9vbGVhbiAvLyB3aGV0aGVyIGFsbCBsZWdlbmRzIGFyZSBjbG9zZWRcbn1cblxuaW50ZXJmYWNlIExheWVyTGlzdEJ1dHRvbnNTdGF0ZSB7XG59XG5cbi8qKlxuICogTGF5ZXJMaXN0QnV0dG9ucyBjb250YWlucyBCdXR0b25zIHRoYXQgY29udHJvbCB0aGUgYmVoYXZpb3Igb2YgYSBMYXllckxpc3RcbiAqL1xuY2xhc3MgTGF5ZXJMaXN0QnV0dG9ucyBleHRlbmRzIENvbXBvbmVudDxMYXllckxpc3RCdXR0b25zUHJvcHMsIExheWVyTGlzdEJ1dHRvbnNTdGF0ZT4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsYXllci1saXN0X19idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNsZWFyLWFsbC1idXR0b24tZ3JpZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsZWFyQWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbGVhci1hbGwtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENsZWFyIEFsbFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibGVnZW5kLWJ1dHRvbi1ncmlkLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsZWdlbmQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVydGlhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93PXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZWdlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvaGFtYnVyZ2VyLTMyLnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25tZW50PVwiZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25TaG93TGVnZW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNob3ctbGVnZW5kLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmFsbExlZ2VuZHNPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyBBbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25IaWRlTGVnZW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImhpZGUtbGVnZW5kLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmFsbExlZ2VuZHNDbG9zZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaWRlIEFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxheWVyLXZpc2liaWxpdHktZ3JpZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGF5ZXItdmlzaWJpbGl0eS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlcnRpYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5hbGxMYXllcnNIaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNob3dMYXllcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZUxheWVycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17dGhpcy5wcm9wcy5hbGxMYXllcnNIaWRkZW4gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL3ZpZXctaGlkZS0zMi5zdmdcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvdmlldy12aXNpYmxlLTMyLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hbGxMYXllcnNIaWRkZW4gPyBcIlNob3cgQWxsXCIgOiBcIkhpZGUgQWxsXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllckxpc3RCdXR0b25zO1xuIiwiaW1wb3J0IFwiLi9MYXllckxpc3RDb21wb25lbnQuc2Nzc1wiO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXllciBmcm9tIFwiZXNyaS9sYXllcnMvTGF5ZXJcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xuaW1wb3J0IHtKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnR9IGZyb20gJ2ppbXUtYXJjZ2lzJztcbmltcG9ydCBMYXllckxpc3QgZnJvbSBcImVzcmkvd2lkZ2V0cy9MYXllckxpc3RcIjtcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiZXNyaS93aWRnZXRzL0xheWVyTGlzdC9MaXN0SXRlbVwiO1xuaW1wb3J0IExheWVyU3R5bGVNb2RhbCBmcm9tIFwiLi9MYXllclN0eWxlTW9kYWxcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi4vVGVtcGxhdGVcIjtcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi4vQ2F0ZWdvcnlcIjtcbmltcG9ydCByZWFjdGl2ZVV0aWxzIGZyb20gXCJlc3JpL2NvcmUvcmVhY3RpdmVVdGlsc1wiO1xuaW1wb3J0IExheWVyTGlzdEJ1dHRvbnMgZnJvbSBcIi4vTGF5ZXJMaXN0QnV0dG9uc1wiO1xuaW1wb3J0IE1vcmVJbmZvTW9kYWwgZnJvbSBcIi4vTW9yZUluZm9Nb2RhbFwiO1xuaW1wb3J0IExlZ2VuZCBmcm9tIFwiZXNyaS93aWRnZXRzL0xlZ2VuZFwiO1xuXG5pbnRlcmZhY2UgTGF5ZXJMaXN0UHJvcHMge1xuICAgIHVzZU1hcFdpZGdldElkOiBzdHJpbmcgLy8gTWFwIHdpZGdldCBJRCB0byB1c2VcbiAgICBvblJlbW92ZUxheWVyOiAobGF5ZXI6IExheWVyKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiByZW1vdmluZyBMYXllclxuICAgIGdldExheWVyVGVtcGxhdGVzOiAobGF5ZXI6IExheWVyLCBhY3RpdmU6IGJvb2xlYW4pID0+IFRlbXBsYXRlW10gLy8gcmV0dXJucyBhY3RpdmUgVGVtcGxhdGVzIGZvciB0aGUgZ2l2ZW4gTGF5ZXJcbiAgICBnZXRMYXllckNhdGVnb3J5OiAobGF5ZXI6IExheWVyKSA9PiBDYXRlZ29yeSAvLyByZXR1cm5zIENhdGVnb3J5IG9mIHRoZSBnaXZlbiBMYXllclxuICAgIG51bUFjdGl2ZUxheWVyczogbnVtYmVyIC8vIHRoZSBudW1iZXIgb2YgYWN0aXZlIExheWVyc1xuICAgIG9uQ2xlYXJBbGw6ICgpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIGNsZWFyaW5nIGFsbCBMYXllcnNcbiAgICBnZXRMYXllckluZm86IChsYXllcjogTGF5ZXIpID0+IGFueVxufVxuXG5pbnRlcmZhY2UgTGF5ZXJMaXN0U3RhdGUge1xuICAgIGptdjogSmltdU1hcFZpZXcgLy8gSmltdU1hcFZpZXcgb2YgdGhlIGFzc29jaWF0ZWQgTWFwXG4gICAgd2lkZ2V0OiBMYXllckxpc3QgLy8gTGF5ZXJMaXN0IHdpZGdldCB0byByZW5kZXJcbiAgICBsYXllclN0eWxlTW9kYWxPcGVuOiBib29sZWFuIC8vIHdoZXRoZXIgdGhlIExheWVyU3R5bGVNb2RhbCBpcyBvcGVuXG4gICAgbW9yZUluZm9Nb2RhbE9wZW46IGJvb2xlYW4gLy8gd2hldGhlciB0aGUgTW9yZUluZm9Nb2RhbCBpcyBvcGVuXG4gICAgc2VsZWN0ZWRJdGVtOiBMaXN0SXRlbSAvLyBjdXJyZW50bHkgc2VsZWN0ZWQgTGF5ZXIgZm9yIExheWVyU3R5bGVNb2RhbCBwdXJwb3Nlc1xuICAgIGFsbExheWVyc0hpZGRlbjogYm9vbGVhbiAvLyB3aGV0aGVyIGFsbCBMYXllcnMgYXJlIGhpZGRlblxuICAgIGFsbExlZ2VuZHNPcGVuOiBib29sZWFuIC8vIHdoZXRoZXIgYWxsIGxlZ2VuZHMgYXJlIG9wZW5cbiAgICBhbGxMZWdlbmRzQ2xvc2VkOiBib29sZWFuIC8vIHdoZXRoZXIgYWxsIGxlZ2VuZHMgYXJlIGNsb3NlZFxufVxuXG4vKipcbiAqIExheWVyTGlzdENvbXBvbmVudCBpcyBhIGN1c3RvbWl6ZWQgQXJjR0lTIExheWVyTGlzdCB3aWRnZXQgdGhhdCBhbGxvd3MgdXNlcnMgdG8gcmVvcmRlciwgcmVtb3ZlLCBhbmQgcmVjb2xvclxuICogTWFwIGxheWVycy5cbiAqL1xuY2xhc3MgTGF5ZXJMaXN0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PExheWVyTGlzdFByb3BzLCBMYXllckxpc3RTdGF0ZT4ge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBteVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgam12OiBudWxsLFxuICAgICAgICAgICAgd2lkZ2V0OiBudWxsLFxuICAgICAgICAgICAgbGF5ZXJTdHlsZU1vZGFsT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBtb3JlSW5mb01vZGFsT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXG4gICAgICAgICAgICBhbGxMYXllcnNIaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgYWxsTGVnZW5kc09wZW46IGZhbHNlLFxuICAgICAgICAgICAgYWxsTGVnZW5kc0Nsb3NlZDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGVzIExheWVyTGlzdCBzZWxlY3Rpb24gYmVoYXZpb3Igd2l0aCBhIGN1c3RvbSBiZWhhdmlvciB3aGVuIExheWVySXRlbSBpcyBjbGlja2VkXG4gICAgICogQHBhcmFtIGl0ZW0gdGhlIGNsaWNrZWQgTGF5ZXJJdGVtXG4gICAgICovXG4gICAgb25JdGVtQ2xpY2sgPSAoaXRlbTogTGlzdEl0ZW0pID0+IHtcbiAgICAgICAgLy8gUmVtb3ZlZCB0b2dnbGUgdmlzaWJpbGl0eSBmdW5jdGlvbmFsaXR5IGluIFVYIENoYW5nZXMgUm91bmQgMiB0byBtYWtlIGRyYWcgYW5kIGRyb3BcbiAgICAgICAgLy8gYWZmb3JkYWJpbGl0eSBtb3JlIGNsZWFyXG4gICAgICAgIC8vIGl0ZW0ubGF5ZXIudmlzaWJsZSA9ICFpdGVtLmxheWVyLnZpc2libGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgYWxsIGxlZ2VuZHMgaW4gdGhlIExheWVyTGlzdFxuICAgICAqL1xuICAgIHNob3dMZWdlbmQgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGxpIG9mIHRoaXMuc3RhdGUud2lkZ2V0Lm9wZXJhdGlvbmFsSXRlbXMpIHtcbiAgICAgICAgICAgIGxpLnBhbmVsLm9wZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIGFsbCBsZWdlbmRzIGluIHRoZSBMYXllckxpc3RcbiAgICAgKi9cbiAgICBoaWRlTGVnZW5kID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBsaSBvZiB0aGlzLnN0YXRlLndpZGdldC5vcGVyYXRpb25hbEl0ZW1zKSB7XG4gICAgICAgICAgICBsaS5wYW5lbC5vcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhbGwgb3BlcmF0aW9uYWwgTGF5ZXJzXG4gICAgICovXG4gICAgc2hvd0xheWVycyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgbGkgb2YgdGhpcy5zdGF0ZS53aWRnZXQub3BlcmF0aW9uYWxJdGVtcykge1xuICAgICAgICAgICAgbGkubGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlcyBhbGwgb3BlcmF0aW9uYWwgTGF5ZXJzXG4gICAgICovXG4gICAgaGlkZUxheWVycyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgbGkgb2YgdGhpcy5zdGF0ZS53aWRnZXQub3BlcmF0aW9uYWxJdGVtcykge1xuICAgICAgICAgICAgbGkubGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgY29sb3IgYW5kIHNpemUgb2YgdGhpcy5jdXJyZW50LmxheWVyIGJhc2VkIG9uIGxheWVyIHN0eWxlIE1vZGFsXG4gICAgICovXG4gICAgY2hhbmdlU3R5bGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmcmVzaCh0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbGF5ZXJTdHlsZU1vZGFsT3BlbjogZmFsc2VcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGhlYWRlciBmb3IgTGVnZW5kXG4gICAgICogQHJldHVybiBhbiBIVE1MRWxlbWVudCB3aXRoIHRoZSB0ZXh0IFwiTGVnZW5kOiBcIlxuICAgICAqL1xuICAgIGNyZWF0ZUxlZ2VuZERpdiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwibGVnZW5kX19oZWFkZXJcIlxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiTGVnZW5kOiBcIlxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGFjdGl2ZSBUZW1wbGF0ZXMgZm9yIHRoZSBnaXZlbiBMYXllclxuICAgICAqIEBwYXJhbSBsYXllciB0aGUgTGF5ZXIgdG8gY2hlY2tcbiAgICAgKiBAcmV0dXJuIGFuIEhUTUxFbGVtZW50IHdpdGggYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBhY3RpdmUgVGVtcGxhdGUgbmFtZXNcbiAgICAgKi9cbiAgICBjcmVhdGVUZW1wbGF0ZXNEaXYgPSAobGF5ZXI6IExheWVyKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImxlZ2VuZF9fdGVtcGxhdGVzXCJcbiAgICAgICAgbGV0IGFjdGl2ZVRlbXBsYXRlcyA9IHRoaXMucHJvcHMuZ2V0TGF5ZXJUZW1wbGF0ZXMobGF5ZXIsIHRydWUpO1xuXG4gICAgICAgIGlmIChhY3RpdmVUZW1wbGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiRXZlbnRzOiBOb25lXCI7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhY3RpdmVUZW1wbGF0ZUxpc3QgPSBcIkV2ZW50czogXCI7XG4gICAgICAgIGZvciAobGV0IHRlbXBsYXRlIG9mIGFjdGl2ZVRlbXBsYXRlcykge1xuICAgICAgICAgICAgYWN0aXZlVGVtcGxhdGVMaXN0ICs9IFwiIFwiICsgdGVtcGxhdGUudGl0bGUgKyBcIixcIlxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYWN0aXZlVGVtcGxhdGVMaXN0LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgQ2F0ZWdvcnkgb2YgdGhlIGdpdmVuIExheWVyXG4gICAgICogQHBhcmFtIGxheWVyIHRoZSBMYXllciB0byBjaGVja1xuICAgICAqIEByZXR1cm4gYW4gSFRNTEVsZW1lbnQgd2l0aCB0aGUgbmFtZSBvZiB0aGUgQ2F0ZWdvcnlcbiAgICAgKi9cbiAgICBjcmVhdGVDYXRlZ29yeURpdiA9IChsYXllcjogTGF5ZXIpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwibGVnZW5kX19jYXRlZ29yeVwiO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5nZXRMYXllckNhdGVnb3J5KGxheWVyKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiQ2F0ZWdvcnk6IFwiICsgdGhpcy5wcm9wcy5nZXRMYXllckNhdGVnb3J5KGxheWVyKS50aXRsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoZXMgTGlzdEl0ZW1QYW5lbCBjb250ZW50XG4gICAgICogQHBhcmFtIGl0ZW0gdGhlIExpc3RJdGVtIHRvIHJlZnJlc2hcbiAgICAgKi9cbiAgICByZWZyZXNoID0gKGl0ZW06IExpc3RJdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnBhcmVudCkge1xuICAgICAgICAgICAgaXRlbS5wYW5lbC5jb250ZW50ID0gW1xuICAgICAgICAgICAgICAgIFwibGVnZW5kXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0ucGFuZWwuY29udGVudCA9IFtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUxlZ2VuZERpdigpLFxuICAgICAgICAgICAgICAgIFwibGVnZW5kXCIsXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVUZW1wbGF0ZXNEaXYoaXRlbS5sYXllciksXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVDYXRlZ29yeURpdihpdGVtLmxheWVyKVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBKaW11TWFwVmlldyBhbmQgY3JlYXRlcyBMYXllckxpc3Qgb24gYWN0aXZlIHZpZXcgY2hhbmdlXG4gICAgICogQHBhcmFtIGptdiB0aGUgbmV3IEppbXVNYXBWaWV3XG4gICAgICovXG4gICAgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5qbXYgJiYgdGhpcy5zdGF0ZS53aWRnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2lkZ2V0LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqbXYpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGptdjogam12XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIExheWVyTGlzdFxuICAgICAgICAgICAgaWYgKHRoaXMubXlSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyTGlzdDogTGF5ZXJMaXN0ID0gbmV3IExheWVyTGlzdCh7XG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IGptdi52aWV3LFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIENhbGxlZCBmb3IgZWFjaCBMaXN0SXRlbSBpbiBMYXllckxpc3RcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW1DcmVhdGVkRnVuY3Rpb246IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBldmVudC5pdGVtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbGVnZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBhbmVsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlc3JpLWljb24tZG93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaChpdGVtKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIExpc3RJdGVtIGFjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGl0ZW0ubGF5ZXIud2hlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3Rpb25zU2VjdGlvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVtb3ZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlc3JpLWljb24tbWludXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJab29tIHRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlc3JpLWljb24tem9vbS1pbi1tYWduaWZ5aW5nLWdsYXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInpvb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVkaXQgbGVnZW5kIHN0eWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL2xheWVycy1lZGl0YWJsZS0yNC5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiY2hhbmdlLXN0eWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVkaXQgbGF5ZXIgc3R5bGUgb25seSBzdXBwb3J0cyBTaW1wbGVSZW5kZXJlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxheWVyLnR5cGUgPT09IFwiZmVhdHVyZVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxheWVyLnJlbmRlcmVyLnR5cGUgPT09IFwic2ltcGxlXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtLmxheWVyLnJlbmRlcmVyLnN5bWJvbC5jb2xvciAhPSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYXllci5yZW5kZXJlci5zeW1ib2wudHlwZSA9PT0gXCJwaWN0dXJlLW1hcmtlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTZW5kIGJhY2t3YXJkc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvc2VuZC1iYWNrd2FyZHMtMjQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzZW5kLWJhY2t3YXJkc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkJyaW5nIGZvcndhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL2JyaW5nLWZvcndhcmQtMjQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJicmluZy1mb3J3YXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2VuZCB0byBiYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9zZW5kLXRvLWJhY2stMjQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzZW5kLXRvLWJhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJCcmluZyB0byBmcm9udFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvYnJpbmctdG8tZnJvbnQtMjQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJicmluZy10by1mcm9udFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlc3JpLWljb24tZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFkZEhhbmRsZXMoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE92ZXJyaWRlIHNlbGVjdGlvbiBiZWhhdmlvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0aXZlVXRpbHMud2F0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IGxheWVyTGlzdC5zZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGl0ZW0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLm9uSXRlbUNsaWNrKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9zZSBhY3Rpb25zIHNlY3Rpb24gd2hlbiBsZWdlbmQgcGFuZWwgb3BlbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdGl2ZVV0aWxzLndoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IGl0ZW0ucGFuZWwub3BlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gaXRlbS5hY3Rpb25zT3BlbiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9zZSBsZWdlbmQgcGFhbmVsIHdoZW4gYWN0aW9ucyBzZWN0aW9uIG9wZW5zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RpdmVVdGlscy53aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiBpdGVtLmFjdGlvbnNPcGVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiBpdGVtLnBhbmVsLm9wZW4gPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMubXlSZWYuY3VycmVudCxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVTZWxlY3Rpb25FbmFibGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgTGlzdEl0ZW0gYWN0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgICAgICAgICBsYXllckxpc3Qub24oXCJ0cmlnZ2VyLWFjdGlvblwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBldmVudC5hY3Rpb24uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyID0gZXZlbnQuaXRlbS5sYXllcjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zdGF0ZS5qbXYudmlldy5tYXAubGF5ZXJzLmZpbmRJbmRleCgobCkgPT4gbCA9PT0gbGF5ZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ6b29tXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR28gdG8gZnVsbCBleHRlbnQgb2YgbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5nb1RvKGxheWVyLmZ1bGxFeHRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJlbW92ZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBsYXllciBmcm9tIG1hcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25SZW1vdmVMYXllcihsYXllcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2hhbmdlLXN0eWxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3BlbiBMYXllciBTdHlsZSBNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlTW9kYWxPcGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW06IGV2ZW50Lml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW5kLWJhY2t3YXJkc1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlbmQgbGF5ZXIgYmFjayAxIGxldmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmptdi52aWV3Lm1hcC5yZW9yZGVyKGxheWVyLCBpbmRleCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJicmluZy1mb3J3YXJkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnJpbmcgbGF5ZXIgZm9yd2FyZCAxIGxldmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEgJiYgaW5kZXggPCB0aGlzLnN0YXRlLmptdi52aWV3Lm1hcC5sYXllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam12LnZpZXcubWFwLnJlb3JkZXIobGF5ZXIsIGluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbmQtdG8tYmFja1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgbGF5ZXIgdG8gYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam12LnZpZXcubWFwLnJlb3JkZXIobGF5ZXIsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJicmluZy10by1mcm9udFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgbGF5ZXIgdG8gZnJvbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmptdi52aWV3Lm1hcC5yZW9yZGVyKGxheWVyLCB0aGlzLnN0YXRlLmptdi52aWV3Lm1hcC5sYXllcnMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlc2NyaXB0aW9uXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVJbmZvTW9kYWxPcGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW06IGV2ZW50Lml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBXYXRjaCBMYXllckxpc3QgcHJvcGVydGllcyB0byBkZXRlcm1pbmUgd2hldGhlciBidXR0b25zIHNob3VsZCBiZSBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIGxheWVyTGlzdC5hZGRIYW5kbGVzKFtcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RpdmVVdGlscy53YXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IGxheWVyTGlzdC5vcGVyYXRpb25hbEl0ZW1zLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiAmJiAhY3Vyci5sYXllci52aXNpYmxlLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbExheWVyc0hpZGRlbjogbGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICYmICFjdXJyLmxheWVyLnZpc2libGUsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICByZWFjdGl2ZVV0aWxzLndhdGNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gbGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICYmIGN1cnIucGFuZWwub3BlbiwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxMZWdlbmRzT3BlbjogbGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICYmIGN1cnIucGFuZWwub3BlbiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0aXZlVXRpbHMud2F0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiBsYXllckxpc3Qub3BlcmF0aW9uYWxJdGVtcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgJiYgIWN1cnIucGFuZWwub3BlbiwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxMZWdlbmRzQ2xvc2VkOiBsYXllckxpc3Qub3BlcmF0aW9uYWxJdGVtcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgJiYgIWN1cnIucGFuZWwub3BlbiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHdpZGdldDogbGF5ZXJMaXN0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLndpZGdldCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnN0YXRlLndpZGdldC52aWV3TW9kZWwub3BlcmF0aW9uYWxJdGVtcykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGF5ZXItbGlzdC1jb21wb25lbnRcIj5cbiAgICAgICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17dGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxoMz57XCJDdXJyZW50IExheWVycyAoXCIgKyB0aGlzLnByb3BzLm51bUFjdGl2ZUxheWVycyArIFwiKVwifTwvaDM+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm51bUFjdGl2ZUxheWVycyA8PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuby1sYXllcnMtbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbT5Zb3UgZG8gbm90IGhhdmUgYW55IGxheWVycyBhZGRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2V0IHN0YXJ0ZWQgYnkgYWRkaW5nIGEgc2NlbmFyaW8gb3IgbGF5ZXIgZnJvbSB0aGUgbGVmdCBzaWRlIG9mIHRoZSBwYW5lbC48L2VtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm51bUFjdGl2ZUxheWVycyA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExheWVyTGlzdEJ1dHRvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsZWFyQWxsPXt0aGlzLnByb3BzLm9uQ2xlYXJBbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlTGVnZW5kPXt0aGlzLmhpZGVMZWdlbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TaG93TGVnZW5kPXt0aGlzLnNob3dMZWdlbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TaG93TGF5ZXJzPXt0aGlzLnNob3dMYXllcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlTGF5ZXJzPXt0aGlzLmhpZGVMYXllcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsTGF5ZXJzSGlkZGVuPXt0aGlzLnN0YXRlLmFsbExheWVyc0hpZGRlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxMZWdlbmRzT3Blbj17dGhpcy5zdGF0ZS5hbGxMZWdlbmRzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxMZWdlbmRzQ2xvc2VkPXt0aGlzLnN0YXRlLmFsbExlZ2VuZHNDbG9zZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsYXllci1saXN0X19jb250ZW50XCIgcmVmPXt0aGlzLm15UmVmfS8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5sYXllciAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5sYXllci50eXBlID09PSBcImZlYXR1cmVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0ubGF5ZXIgYXMgRmVhdHVyZUxheWVyKS5yZW5kZXJlci50eXBlID09PSBcInNpbXBsZVwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXllclN0eWxlTW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNhdmU9e3RoaXMuY2hhbmdlU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmxheWVyIGFzIEZlYXR1cmVMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmxheWVyU3R5bGVNb2RhbE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlT3Blbj17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7bGF5ZXJTdHlsZU1vZGFsT3BlbjogIXRoaXMuc3RhdGUubGF5ZXJTdHlsZU1vZGFsT3Blbn0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmxheWVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb3JlSW5mb01vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmxheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUubW9yZUluZm9Nb2RhbE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlT3Blbj17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7bW9yZUluZm9Nb2RhbE9wZW46ICF0aGlzLnN0YXRlLm1vcmVJbmZvTW9kYWxPcGVufSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TGF5ZXJJbmZvPXt0aGlzLnByb3BzLmdldExheWVySW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJMaXN0Q29tcG9uZW50O1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnV0dG9uLCBNb2RhbCwgTW9kYWxCb2R5LCBNb2RhbEhlYWRlciwgTW9kYWxGb290ZXIsIFNsaWRlcn0gZnJvbSAnamltdS11aSc7XG5pbXBvcnQge0NvbG9yUGlja2VyfSBmcm9tIFwiamltdS11aS9iYXNpYy9jb2xvci1waWNrZXJcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiZXNyaS9Db2xvclwiO1xuaW1wb3J0IFNpbXBsZVJlbmRlcmVyIGZyb20gXCJlc3JpL3JlbmRlcmVycy9TaW1wbGVSZW5kZXJlclwiO1xuaW1wb3J0IFNpbXBsZU1hcmtlclN5bWJvbCBmcm9tIFwiZXNyaS9zeW1ib2xzL1NpbXBsZU1hcmtlclN5bWJvbFwiO1xuaW1wb3J0IFBpY3R1cmVNYXJrZXJTeW1ib2wgZnJvbSBcImVzcmkvc3ltYm9scy9QaWN0dXJlTWFya2VyU3ltYm9sXCI7XG5pbXBvcnQgU2ltcGxlTGluZVN5bWJvbCBmcm9tIFwiZXNyaS9zeW1ib2xzL1BpY3R1cmVNYXJrZXJTeW1ib2xcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xuXG5pbnRlcmZhY2UgTGF5ZXJTdHlsZU1vZGFsUHJvcHMge1xuICAgIG9uU2F2ZTogKCkgPT4gYW55IC8vIGNhbGxiYWNrIGZ1bmN0aW9uIHVwb24gc2F2aW5nIExheWVyIHN0eWxlXG4gICAgbGF5ZXI6IEZlYXR1cmVMYXllciAvLyB0aGUgTGF5ZXIgdG8gZWRpdFxuICAgIG9wZW46IGJvb2xlYW4gLy8gd2hldGhlciB0aGlzIE1vZGFsIGlzIG9wZW5cbiAgICB0b2dnbGVPcGVuOiAoKSA9PiBhbnkgLy8gdG9nZ2xlcyB0aGUgTW9kYWwgYmV0d2VlbiBvcGVuIGFuZCBjbG9zZWRcblxufVxuXG5pbnRlcmZhY2UgTGF5ZXJTdHlsZU1vZGFsU3RhdGUge1xuICAgIHNob3dDb2xvclBpY2tlcjogYm9vbGVhbiAvLyB3aGV0aGVyIHRvIHNob3cgdGhlIENvbG9yUGlja2VyXG4gICAgc2hvd1NpemVTbGlkZXI6IGJvb2xlYW4gLy8gd2hldGhlciB0byBzaG93IHRoZSBzaXplIFNsaWRlclxuICAgIGNvbG9yOiBzdHJpbmcgLy8gY3VycmVudGx5IHNlbGVjdGVkIENvbG9yXG4gICAgc2l6ZTogbnVtYmVyIC8vIGN1cnJlbnRseSBzZWxlY3RlZCBzaXplXG4gICAgb3JpZ2luYWxSZW5kZXJlcjogU2ltcGxlUmVuZGVyZXJcbn1cblxuLyoqXG4gKiBMYXllclN0eWxlTW9kYWwgZ2l2ZXMgdXNlcnMgdGhlIGFiaWxpdHkgdG8gZWRpdCB0aGUgYXBwZWFyYW5jZSBvZiByZW5kZXJlZCBMYXllcnMuXG4gKiBUaGUgZWRpdCBsYXllciBzdHlsZSBmdW5jdGlvbmFsaXR5IG9ubHkgc3VwcG9ydHMgU2ltcGxlUmVuZGVyZXJzLlxuICovXG5jbGFzcyBMYXllclN0eWxlTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQ8TGF5ZXJTdHlsZU1vZGFsUHJvcHMsIExheWVyU3R5bGVNb2RhbFN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3dDb2xvclBpY2tlcjogZmFsc2UsXG4gICAgICAgICAgICBzaG93U2l6ZVNsaWRlcjogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcjogbnVsbCxcbiAgICAgICAgICAgIHNpemU6IG51bGwsXG4gICAgICAgICAgICBvcmlnaW5hbFJlbmRlcmVyOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGJlaGF2aW9yIHVwb24gb3BlbmluZyBNb2RhbFxuICAgICAqL1xuICAgIG9uT3BlbmVkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9yaWdpbmFsUmVuZGVyZXI6IFNpbXBsZVJlbmRlcmVyLmZyb21KU09OKHRoaXMucHJvcHMubGF5ZXIucmVuZGVyZXIudG9KU09OKCkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzeW1ib2wgPSAodGhpcy5wcm9wcy5sYXllci5yZW5kZXJlciBhcyBTaW1wbGVSZW5kZXJlcikuc3ltYm9sO1xuICAgICAgICBzd2l0Y2ggKHN5bWJvbC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2ltcGxlLW1hcmtlclwiOlxuICAgICAgICAgICAgICAgIGlmIChzeW1ib2wuc3R5bGUgPT09IFwiY3Jvc3NcIiB8fCBzeW1ib2wuc3R5bGUgPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbG9yUGlja2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVTbGlkZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3ltYm9sLm91dGxpbmUuY29sb3IudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IHN5bWJvbC5zaXplXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbG9yUGlja2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVTbGlkZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3ltYm9sLmNvbG9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBzeW1ib2wuc2l6ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicGljdHVyZS1tYXJrZXJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvbG9yUGlja2VyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVTbGlkZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogKHN5bWJvbCBhcyBQaWN0dXJlTWFya2VyU3ltYm9sKS53aWR0aFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNpbXBsZS1maWxsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNob3dDb2xvclBpY2tlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVTbGlkZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3ltYm9sLmNvbG9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzaW1wbGUtbGluZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93Q29sb3JQaWNrZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNob3dTaXplU2xpZGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3ltYm9sLmNvbG9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IChzeW1ib2wgYXMgU2ltcGxlTGluZVN5bWJvbCkud2lkdGhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNob3dDb2xvclBpY2tlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVTbGlkZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3ltYm9sLmNvbG9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgYmVoYXZpb3Igd2hlbiBjb2xvciBwaWNrZXIgd2FybmluZyBmb3IgcGljdHVyZSBtYXJrZXIgaXMgY2xpY2tlZFxuICAgICAqL1xuICAgIGhhbmRsZUNvbG9yV2FybmluZ0NsaWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dDb2xvclBpY2tlcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgKHRoaXMucHJvcHMubGF5ZXIucmVuZGVyZXIgYXMgU2ltcGxlUmVuZGVyZXIpLnN5bWJvbCA9IG5ldyBTaW1wbGVNYXJrZXJTeW1ib2woe1xuICAgICAgICAgICAgY29sb3I6IHRoaXMuc3RhdGUuY29sb3IsXG4gICAgICAgICAgICBzaXplOiB0aGlzLnN0YXRlLnNpemVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBMYXllciBzdHlsZSB1cG9uIGNvbG9yIGNoYW5nZVxuICAgICAqIEBwYXJhbSBjb2xvciB0aGUgbmV3IGNvbG9yXG4gICAgICovXG4gICAgaGFuZGxlQ2hhbmdlQ29sb3IgPSAoY29sb3I6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb2xvcjogY29sb3J9KTtcbiAgICAgICAgbGV0IGxheWVyID0gdGhpcy5wcm9wcy5sYXllciBhcyBGZWF0dXJlTGF5ZXI7XG4gICAgICAgIGxldCByZW5kZXJlciA9IGxheWVyLnJlbmRlcmVyIGFzIFNpbXBsZVJlbmRlcmVyO1xuXG4gICAgICAgIC8vIENoYW5nZSBzaXplIGFuZCBjb2xvclxuICAgICAgICBzd2l0Y2ggKHJlbmRlcmVyLnN5bWJvbC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2ltcGxlLW1hcmtlclwiOlxuICAgICAgICAgICAgICAgIGlmIChyZW5kZXJlci5zeW1ib2wuc3R5bGUgPT09IFwiY3Jvc3NcIiB8fCByZW5kZXJlci5zeW1ib2wuc3R5bGUgPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnN5bWJvbC5vdXRsaW5lLmNvbG9yID0gbmV3IENvbG9yKGNvbG9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5zeW1ib2wuY29sb3IgPSBuZXcgQ29sb3IoY29sb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzaW1wbGUtZmlsbFwiOlxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnN5bWJvbC5jb2xvciA9IG5ldyBDb2xvcihjb2xvcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2ltcGxlLWxpbmVcIjpcbiAgICAgICAgICAgICAgICByZW5kZXJlci5zeW1ib2wuY29sb3IgPSBuZXcgQ29sb3IoY29sb3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZW5kZXJlci5zeW1ib2wuY29sb3IgPSBuZXcgQ29sb3IoY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBsYXllciBzdHlsZSB1cG9uIHNpemUgY2hhbmdlXG4gICAgICogQHBhcmFtIHNpemUgdGhlIG5ldyBzaXplXG4gICAgICovXG4gICAgaGFuZGxlQ2hhbmdlU2l6ZSA9IChzaXplOiBudW1iZXIpID0+IHtcbiAgICAgICAgbGV0IGxheWVyID0gdGhpcy5wcm9wcy5sYXllciBhcyBGZWF0dXJlTGF5ZXI7XG4gICAgICAgIGxldCByZW5kZXJlciA9IGxheWVyLnJlbmRlcmVyIGFzIFNpbXBsZVJlbmRlcmVyO1xuXG4gICAgICAgIC8vIENoYW5nZSBzaXplIGFuZCBjb2xvclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaXplOiBzaXplfSk7XG4gICAgICAgIHN3aXRjaCAocmVuZGVyZXIuc3ltYm9sLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzaW1wbGUtbWFya2VyXCI6XG4gICAgICAgICAgICAgICAgKHJlbmRlcmVyLnN5bWJvbCBhcyBTaW1wbGVNYXJrZXJTeW1ib2wpLnNpemUgPSBzaXplO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBpY3R1cmUtbWFya2VyXCI6XG4gICAgICAgICAgICAgICAgbGV0IHBtU3ltYm9sID0gcmVuZGVyZXIuc3ltYm9sIGFzIFBpY3R1cmVNYXJrZXJTeW1ib2xcbiAgICAgICAgICAgICAgICBsZXQgcmF0aW86IG51bWJlciA9IHBtU3ltYm9sLmhlaWdodCAvIHBtU3ltYm9sLndpZHRoO1xuICAgICAgICAgICAgICAgIHBtU3ltYm9sLndpZHRoID0gc2l6ZTtcbiAgICAgICAgICAgICAgICBwbVN5bWJvbC5oZWlnaHQgPSBzaXplICogcmF0aW87XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2ltcGxlLWxpbmVcIjpcbiAgICAgICAgICAgICAgICAocmVuZGVyZXIuc3ltYm9sIGFzIFNpbXBsZUxpbmVTeW1ib2wpLndpZHRoID0gc2l6ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5sYXllci5yZW5kZXJlciA9IHRoaXMuc3RhdGUub3JpZ2luYWxSZW5kZXJlcjtcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVPcGVuKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnByb3BzLm9wZW59XG4gICAgICAgICAgICAgICAgb25DbG9zZWQ9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKXt9fVxuICAgICAgICAgICAgICAgIG9uRW50ZXI9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKXt9fVxuICAgICAgICAgICAgICAgIG9uRXhpdD17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgb25PcGVuZWQ9e3RoaXMub25PcGVuZWR9XG4gICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnByb3BzLnRvZ2dsZU9wZW59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGVPcGVufT5cbiAgICAgICAgICAgICAgICAgICAgRWRpdCB7dGhpcy5wcm9wcy5sYXllci50aXRsZX0gTGVnZW5kIFN0eWxlXG4gICAgICAgICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dTaXplU2xpZGVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheWVyLXNpemUtc2xpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBNYXJrZXIgU2l6ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkxheWVyIFNpemUgU2xpZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VTaXplKCtlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9e01hdGgubWF4KDUwLCB0aGlzLnN0YXRlLnNpemUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt0aGlzLnN0YXRlLnNpemV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dDb2xvclBpY2tlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXllci1jb2xvci1waWNrZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IE1hcmtlciBDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTGF5ZXIgQ29sb3IgUGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0ge3RoaXMuc3RhdGUuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjb2xvcikgPT4gdGhpcy5oYW5kbGVDaGFuZ2VDb2xvcihjb2xvcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiBub1JlZkNoZWNrKCl7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgKCh0aGlzLnByb3BzLmxheWVyIGFzIEZlYXR1cmVMYXllcikucmVuZGVyZXIgYXMgU2ltcGxlUmVuZGVyZXIpLnN5bWJvbC50eXBlID09PSBcInBpY3R1cmUtbWFya2VyXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLnNob3dDb2xvclBpY2tlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBpY3R1cmUtbWFya2VyLXdhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvbG9yV2FybmluZ0NsaWNrfT5DaGFuZ2UgQ29sb3I8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbT5DaGFuZ2luZyB0aGUgY29sb3Igb2YgdGhpcyBsYXllciByZXF1aXJlcyBjb252ZXJ0aW5nIHRoZSBtYXJrZXIgZnJvbSBhIHBpY3R1cmUgdG8gYSBzaW1wbGUgY2lyY3VsYXIgbWFya2VyLjwvZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhbmNlbH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uU2F2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2F2ZS10ZW1wbGF0ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBEb25lXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJTdHlsZU1vZGFsO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnV0dG9uLCBNb2RhbCwgTW9kYWxCb2R5LCBNb2RhbEhlYWRlciwgTW9kYWxGb290ZXIsIFNsaWRlcn0gZnJvbSAnamltdS11aSc7XG5pbXBvcnQgTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0xheWVyXCI7XG5cbmludGVyZmFjZSBNb3JlSW5mb01vZGFsUHJvcHMge1xuICAgIGxheWVyOiBMYXllciAvLyB0aGUgTGF5ZXIgdG8gc2hvdyBpbmZvcm1hdGlvbiBhYm91dFxuICAgIG9wZW46IGJvb2xlYW4gLy8gd2hldGhlciB0aGlzIE1vZGFsIGlzIG9wZW5cbiAgICB0b2dnbGVPcGVuOiAoKSA9PiBhbnkgLy8gdG9nZ2xlcyB0aGUgTW9kYWwgYmV0d2VlbiBvcGVuIGFuZCBjbG9zZWRcbiAgICBnZXRMYXllckluZm86IChsYXllcjogTGF5ZXIpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB0byBnZXQgTGF5ZXIgaW5mb1xufVxuXG5pbnRlcmZhY2UgTW9yZUluZm9Nb2RhbFN0YXRlIHtcbiAgICBzb3VyY2U6IHN0cmluZyAvLyB0aGUgTGF5ZXIgc291cmNlXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyAvLyB0aGUgTGF5ZXIgZGVzY3JpcHRpb25cbiAgICB1cmw6IHN0cmluZyAvLyB0aGUgTGF5ZXIgVVJMXG59XG5cbi8qKlxuICogTW9yZUluZm9Nb2RhbCBkaXNwbGF5cyBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGEgTGF5ZXIgdG8gdXNlcnNcbiAqL1xuY2xhc3MgTW9yZUluZm9Nb2RhbCBleHRlbmRzIENvbXBvbmVudDxNb3JlSW5mb01vZGFsUHJvcHMsIE1vcmVJbmZvTW9kYWxTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzb3VyY2U6IFwiLi4uXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCIuLi5cIixcbiAgICAgICAgICAgIHVybDogXCJcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBiZWhhdmlvciB1cG9uIG9wZW5pbmcgTW9kYWxcbiAgICAgKi9cbiAgICBvbk9wZW5lZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzb3VyY2U6IFwiLi4uXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCIuLi5cIixcbiAgICAgICAgICAgIHVybDogXCJcIlxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGluZm8gPSBhd2FpdCB0aGlzLnByb3BzLmdldExheWVySW5mbyh0aGlzLnByb3BzLmxheWVyKTtcbiAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoaW5mbyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICBpc09wZW49e3RoaXMucHJvcHMub3Blbn1cbiAgICAgICAgICAgICAgICBvbkNsb3NlZD17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgb25FbnRlcj17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgb25FeGl0PXtmdW5jdGlvbiBub1JlZkNoZWNrKCl7fX1cbiAgICAgICAgICAgICAgICBvbk9wZW5lZD17dGhpcy5vbk9wZW5lZH1cbiAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMucHJvcHMudG9nZ2xlT3Blbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0aGlzLnByb3BzLnRvZ2dsZU9wZW59PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sYXllci50aXRsZX0gRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICA8L01vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItc291cmNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTb3VyY2U6IHt0aGlzLnN0YXRlLnNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiB7dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZU9wZW59XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnVybCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3Blbih0aGlzLnN0YXRlLnVybCwgXCJfYmxhbmtcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlZSBNb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vcmVJbmZvTW9kYWw7XG4iLCJpbXBvcnQge0J1dHRvbiwgVGV4dElucHV0LCBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSwgTW9kYWxGb290ZXIsIEljb259IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmludGVyZmFjZSBTYXZlVGVtcGxhdGVQcm9wcyB7XG4gICAgaGFuZGxlQ2xpY2s6ICh0aXRsZTogc3RyaW5nKSA9PiBhbnkgLy8gZnVuY3Rpb24gdG8gY2FsbCBvbiBjbGlja1xuICAgIHNob3c6IGJvb2xlYW4gLy8gd2hldGhlciB0byBzaG93IHRoZSBidXR0b25cbn1cblxuaW50ZXJmYWNlIFNhdmVUZW1wbGF0ZVN0YXRlIHtcbiAgICB0aXRsZTogc3RyaW5nIC8vIHRpdGxlIG9mIHRoZSBuZXcgVGVtcGxhdGVcbiAgICBvcGVuOiBib29sZWFuIC8vIHdoZXRoZXIgdGhlIE1vZGFsIGlzIG9wZW5cbn1cblxuLyoqXG4gKiBTYXZlVGVtcGxhdGVDb21wb25lbnQgcmVuZGVycyB0aGUgYnV0dG9ucyB0aGF0IGFsbG93IHVzZXJzIHRvIHNhdmUgdGhlIGFjdGl2ZSBMYXllcnMgYXMgYSBuZXcgVGVtcGxhdGVcbiAqL1xuY2xhc3MgU2F2ZVRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PFNhdmVUZW1wbGF0ZVByb3BzLCBTYXZlVGVtcGxhdGVTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0aXRsZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIFNhdmUgVGVtcGxhdGUgTW9kYWwgYmV0d2VlbiBvcGVuIGFuZCBjbG9zZWRcbiAgICAgKi9cbiAgICB0b2dnbGVPcGVuID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46ICF0aGlzLnN0YXRlLm9wZW5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2tWYWxpZGl0eSA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbGlkOiB0ZXh0Lmxlbmd0aCA8PSA1MCxcbiAgICAgICAgICAgIG1zZzogXCJNYXhpbXVtIHRpdGxlIGxlbmd0aCBpcyA1MCBjaGFyYWN0ZXJzIVwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cInNhdmUtdGVtcGxhdGUtY29tcG9uZW50XCI+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvdyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3Blbi1zYXZlLXRlbXBsYXRlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL3BsdXMtMzIuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSBBcyBOZXcgU2NlbmFyaW9cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2VkPXtmdW5jdGlvbiBub1JlZkNoZWNrKCl7fX1cbiAgICAgICAgICAgICAgICAgICAgb25FbnRlcj17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgICAgIG9uRXhpdD17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgICAgIG9uT3BlbmVkPXtmdW5jdGlvbiBub1JlZkNoZWNrKCl7fX1cbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnRvZ2dsZU9wZW59XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0aGlzLnRvZ2dsZU9wZW59PlxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSBBcyBOZXcgRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50IFRpdGxlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRXZlbnQgVGl0bGUuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9eyh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7dGl0bGU6IHZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWxpZGl0eU9uQ2hhbmdlPXt0aGlzLmNoZWNrVmFsaWRpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWxpZGl0eU9uQWNjZXB0PXt0aGlzLmNoZWNrVmFsaWRpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt0aGlzLnByb3BzLmhhbmRsZUNsaWNrKHRoaXMuc3RhdGUudGl0bGUpOyB0aGlzLnRvZ2dsZU9wZW4oKTt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2F2ZS10ZW1wbGF0ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmVUZW1wbGF0ZUNvbXBvbmVudDtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1RhYnMsIFRhYn0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi4vVGVtcGxhdGVcIjtcblxuaW50ZXJmYWNlIFRlbXBsYXRlc1Byb3BzIHtcbiAgICBhY3RpdmVUZW1wbGF0ZXM6IFRlbXBsYXRlW10gLy8gbGlzdCBvZiBhY3RpdmUgVGVtcGxhdGVzXG4gICAgcmVtb3ZlVGVtcGxhdGU6ICh0ZW1wbGF0ZTogVGVtcGxhdGUpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIHJlbW92aW5nIGEgVGVtcGxhdGVcbn1cblxuLyoqXG4gKiBBY3RpdmVUZW1wbGF0ZXNNZW51IHJlbmRlcnMgYSBsaXN0IG9mIGFjdGl2ZSBUZW1wbGF0ZXMgYW5kIGFsbG93cyB1c2VycyB0byByZW1vdmUgVGVtcGxhdGVzXG4gKi9cbmNsYXNzIEFjdGl2ZVRlbXBsYXRlc01lbnUgZXh0ZW5kcyBDb21wb25lbnQ8VGVtcGxhdGVzUHJvcHMsIHt9PiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImFjdGl2ZS10ZW1wbGF0ZXMtbWVudVwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3RpdmVUZW1wbGF0ZXMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuby1hY3RpdmUtdGVtcGxhdGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZW0+QWRkZWQgU2NlbmFyaW9zIHdpbGwgYXBwZWFyIGhlcmUuPC9lbT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBpbGxzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aXZlVGVtcGxhdGVzLm1hcCgodGVtcGxhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJcIiArIHRlbXBsYXRlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RlbXBsYXRlLnRpdGxlICsgXCIgKFwiICsgdGVtcGxhdGUubGF5ZXJXcmFwcGVycy5sZW5ndGggKyBcIilcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHRoaXMucHJvcHMucmVtb3ZlVGVtcGxhdGUodGVtcGxhdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3RpdmVUZW1wbGF0ZXNNZW51O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQWRkTGF5ZXJJdGVtIGZyb20gXCIuLi9MYXllckNvbXBvbmVudC9BZGRMYXllckl0ZW1cIjtcbmltcG9ydCB7Q29sbGFwc2FibGVQYW5lbCwgQnV0dG9uLCBJY29ufSBmcm9tIFwiamltdS11aVwiXG5pbXBvcnQgVGVtcGxhdGUgZnJvbSAnLi4vVGVtcGxhdGUnXG5pbXBvcnQgTGF5ZXJXcmFwcGVyIGZyb20gXCIuLi9MYXllcldyYXBwZXJcIjtcblxuaW50ZXJmYWNlIEFkZFRlbXBsYXRlSXRlbVByb3BzIHtcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGUgLy8gVGVtcGxhdGUgdG8gYWRkXG4gICAgYWN0aXZlTGF5ZXJzOiBMYXllcldyYXBwZXJbXSAvLyBsaXN0IG9mIGFjdGl2ZSBMYXllcnNcbiAgICBhY3RpdmVUZW1wbGF0ZXM6IFRlbXBsYXRlW10gLy8gbGlzdCBvZiBhY3RpdmUgVGVtcGxhdGVzXG4gICAgb25BZGRMYXllcjogKGxheWVyV3JhcHBlcjogTGF5ZXJXcmFwcGVyKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiBhZGRpbmcgTGF5ZXJcbiAgICBvbkFkZFRlbXBsYXRlOiAodGVtcGxhdGU6IFRlbXBsYXRlKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiBhZGRpbmcgVGVtcGxhdGVcbn1cblxuLyoqXG4gKiBBZGRUZW1wbGF0ZUl0ZW0gYWxsb3dzIHVzZXJzIHRvIGFkZCBhbGwgTGF5ZXJzIGluIGEgVGVtcGxhdGUgdG8gdGhlIE1hcFxuICovXG5jbGFzcyBBZGRUZW1wbGF0ZUl0ZW0gZXh0ZW5kcyBDb21wb25lbnQ8QWRkVGVtcGxhdGVJdGVtUHJvcHMsIHt9PiB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIERpc2FibGUgdGhlIGFkZCBidXR0b24gaWYgdGhlIFRlbXBsYXRlIHdhcyBhZGRlZCB0byB0aGUgbGlzdCBvZiBhY3RpdmUgVGVtcGxhdGVzIGFuZFxuICAgICAgICAvLyBhbGwgTGF5ZXJzIGFyZSBjdXJyZW50bHkgYWRkZWQgdG8gdGhlIE1hcFxuICAgICAgICBsZXQgYWRkZWQ6IGJvb2xlYW4gPSB0aGlzLnByb3BzLmFjdGl2ZVRlbXBsYXRlcy5pbmNsdWRlcyh0aGlzLnByb3BzLnRlbXBsYXRlKTtcbiAgICAgICAgaWYgKGFkZGVkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBsYXllcldyYXBwZXIgb2YgdGhpcy5wcm9wcy50ZW1wbGF0ZS5sYXllcldyYXBwZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLmFjdGl2ZUxheWVycy5pbmNsdWRlcyhsYXllcldyYXBwZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29sbGFwc2FibGVQYW5lbFxuICAgICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQWRkVGVtcGxhdGUodGhpcy5wcm9wcy50ZW1wbGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlcnRpYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLnRlbXBsYXRlLmxheWVyV3JhcHBlcnMubGVuZ3RoID09PSAwIHx8IGFkZGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17YWRkZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL2NoZWNrLTMyLnN2Z1wiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9wbHVzLTMyLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50ZW1wbGF0ZS50aXRsZSArIFwiIChcIiArIHRoaXMucHJvcHMudGVtcGxhdGUubGF5ZXJXcmFwcGVycy5sZW5ndGggKyBcIilcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldmVsPXswfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy50ZW1wbGF0ZS5sYXllcldyYXBwZXJzLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlbXBsYXRlLWRyb3Bkb3duX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRlbXBsYXRlLmxheWVyV3JhcHBlcnMubWFwKChfdmFsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFwIGluIHJldmVyc2Ugb3JkZXIgdG8gbWFpbnRhaW4gY29uc2lzdGVuY3kgd2l0aCBMYXllciBMaXN0IG9yZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGF5ZXJXcmFwcGVyID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRlbXBsYXRlLmxheWVyV3JhcHBlcnNbdGhpcy5wcm9wcy50ZW1wbGF0ZS5sYXllcldyYXBwZXJzLmxlbmd0aCAtIGluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRMYXllckl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJXcmFwcGVyPXtsYXllcldyYXBwZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkTGF5ZXI9e3RoaXMucHJvcHMub25BZGRMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVycy5pbmNsdWRlcyhsYXllcldyYXBwZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sbGFwc2FibGVQYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRlbXBsYXRlSXRlbTtcbiIsImltcG9ydCBcIi4vVGVtcGxhdGVDb21wb25lbnQuc2Nzc1wiO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7SWNvbiwgVG9vbHRpcH0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi4vVGVtcGxhdGVcIjtcbmltcG9ydCBUZW1wbGF0ZVNlYXJjaCBmcm9tIFwiLi9UZW1wbGF0ZVNlYXJjaFwiO1xuaW1wb3J0IEFjdGl2ZVRlbXBsYXRlc01lbnUgZnJvbSBcIi4vQWN0aXZlVGVtcGxhdGVzTWVudVwiO1xuaW1wb3J0IExheWVyV3JhcHBlciBmcm9tIFwiLi4vTGF5ZXJXcmFwcGVyXCI7XG5cbmludGVyZmFjZSBUZW1wbGF0ZXNQcm9wcyB7XG4gICAgdGVtcGxhdGVzOiBUZW1wbGF0ZVtdIC8vIGxpc3Qgb2YgVGVtcGxhdGVzIHRvIHJlbmRlclxuICAgIGFjdGl2ZUxheWVyczogTGF5ZXJXcmFwcGVyW10gLy8gbGlzdCBvZiBhY3RpdmUgTGF5ZXJzXG4gICAgYWN0aXZlVGVtcGxhdGVzOiBUZW1wbGF0ZVtdIC8vIGxpc3Qgb2YgYWN0aXZlIFRlbXBsYXRlc1xuICAgIG9uQWRkVGVtcGxhdGU6ICh0ZW1wbGF0ZTogVGVtcGxhdGUpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIGFkZGluZyBUZW1wbGF0ZXNcbiAgICBvblJlbW92ZVRlbXBsYXRlOiAodGVtcGxhdGU6IFRlbXBsYXRlKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiByZW1vdmluZyBUZW1wbGF0ZXNcbiAgICBvbkFkZExheWVyOiAobGF5ZXJXcmFwcGVyOiBMYXllcldyYXBwZXIpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIGFkZGluZyBMYXllcnNcbn1cbmludGVyZmFjZSBUZW1wbGF0ZXNTdGF0ZSB7XG4gICAgcGFuZU9wZW46IGJvb2xlYW4gLy8gd2hldGhlciB0aGUgVGVtcGxhdGUgcGFuZSBpcyBvcGVuXG4gICAgc2VsZWN0ZWRUZW1wbGF0ZTogVGVtcGxhdGUgLy8gY3VycmVudGx5IHNlbGVjdGVkIFRlbXBsYXRlIGZyb20gVGVtcGxhdGUgZHJvcGRvd24gZm9yIG1vcmUgaW5mb1xufVxuXG4vKipcbiAqIFRlbXBsYXRlQ29tcG9uZW50IGNvbnRhaW5zIGEgVGVtcGxhdGVTZWFyY2ggZHJvcGRvd24sIEFjdGl2ZVRlbXBsYXRlTWVudSwgYW5kIGEgZGV0YWlsZWQgcGFuZSBvZiB0aGUgbGF5ZXJzXG4gKiBpbiBlYWNoIFRlbXBsYXRlXG4gKi9cbmNsYXNzIFRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PFRlbXBsYXRlc1Byb3BzLCBUZW1wbGF0ZXNTdGF0ZT4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFuZU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRUZW1wbGF0ZTogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cInRlbXBsYXRlLWNvbXBvbmVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZW1wbGF0ZS1jb21wb25lbnRfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+U2NlbmFyaW9zPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2NlbmFyaW9zIGFyZSBhIHNldCBvZiBsYXllcnMgdGhhdCBhcmUgZ3JvdXBlZCB0b2dldGhlciBmb3IgYSBzcGVjaWZpYyBlbWVyZ2VuY3lcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBjYW4gYmUgYWRkZWQgdG8gdGhlIG1hcCBhbGwgYXQgb25jZS5cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGVtcGxhdGUtY29tcG9uZW50X19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL3F1ZXN0aW9uLTMyLWYuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50ZW1wbGF0ZXMgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGVtcGxhdGUtY29tcG9uZW50X19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVtcGxhdGVTZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZXM9e3RoaXMucHJvcHMudGVtcGxhdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkTGF5ZXI9e3RoaXMucHJvcHMub25BZGRMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFkZFRlbXBsYXRlPXt0aGlzLnByb3BzLm9uQWRkVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTGF5ZXJzPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVUZW1wbGF0ZXM9e3RoaXMucHJvcHMuYWN0aXZlVGVtcGxhdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY3RpdmVUZW1wbGF0ZXNNZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGVtcGxhdGVzPXt0aGlzLnByb3BzLmFjdGl2ZVRlbXBsYXRlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVUZW1wbGF0ZT17dGhpcy5wcm9wcy5vblJlbW92ZVRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVtcGxhdGVDb21wb25lbnQ7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtBZHZhbmNlZFNlbGVjdCwgSWNvbn0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi4vVGVtcGxhdGVcIjtcbmltcG9ydCBBZGRUZW1wbGF0ZUl0ZW0gZnJvbSBcIi4vQWRkVGVtcGxhdGVJdGVtXCI7XG5pbXBvcnQgTGF5ZXJXcmFwcGVyIGZyb20gXCIuLi9MYXllcldyYXBwZXJcIjtcblxuaW50ZXJmYWNlIFRlbXBsYXRlU2VhcmNoUHJvcHMge1xuICAgIHRlbXBsYXRlczogVGVtcGxhdGVbXSAvLyBsaXN0IG9mIFRlbXBsYXRlc1xuICAgIGFjdGl2ZUxheWVyczogTGF5ZXJXcmFwcGVyW10gLy8gbGlzdCBvZiBhY3RpdmUgTGF5ZXJzXG4gICAgYWN0aXZlVGVtcGxhdGVzOiBUZW1wbGF0ZVtdIC8vIGxpc3Qgb2YgYWN0aXZlIFRlbXBsYXRlc1xuICAgIG9uQWRkTGF5ZXI6IChsYXllcjogTGF5ZXJXcmFwcGVyKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiBhZGRpbmcgYSBMYXllclxuICAgIG9uQWRkVGVtcGxhdGU6ICh0ZW1wbGF0ZTogVGVtcGxhdGUpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIGFkZGluZyBhIFRlbXBsYXRlXG59XG5cbi8qKlxuICogVGVtcGxhdGVTZWFyY2ggYWxsb3dzIHVzZXJzIHRvIHNlYXJjaCBmb3IgYSBUZW1wbGF0ZVxuICovXG5jbGFzcyBUZW1wbGF0ZVNlYXJjaCBleHRlbmRzIENvbXBvbmVudDxUZW1wbGF0ZVNlYXJjaFByb3BzLCB7fT4ge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cInRlbXBsYXRlLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxBZHZhbmNlZFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBpc011bHRpcGxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBpc0VtcHR5T3B0aW9uSGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgc29ydFZhbHVlc0J5TGFiZWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG1lbnVQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBbMCwgLTQwXVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjdXN0b21Ecm9wZG93bkJ1dHRvbkNvbnRlbnQ9eyhcbiAgICAgICAgICAgICAgICAgICAgKSA9PiB7cmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL3NlYXJjaC0zMi5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoIGZvciBTY2VuYXJpby4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9fVxuICAgICAgICAgICAgICAgICAgICBhcHBlbmRUb0JvZHk9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBzdHJhdGVneT1cImZpeGVkXCJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljVmFsdWVzPXt0aGlzLnByb3BzLnRlbXBsYXRlcy5tYXAoKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0ZW1wbGF0ZS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGVtcGxhdGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGxhdGUtc2VhcmNoLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkVGVtcGxhdGVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlPXt0ZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRUZW1wbGF0ZT17dGhpcy5wcm9wcy5vbkFkZFRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFkZExheWVyPXt0aGlzLnByb3BzLm9uQWRkTGF5ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUxheWVycz17dGhpcy5wcm9wcy5hY3RpdmVMYXllcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRlbXBsYXRlcz17dGhpcy5wcm9wcy5hY3RpdmVUZW1wbGF0ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZW1wbGF0ZVNlYXJjaDtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX0Jhc2VtYXBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9Db2xvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2NvcmVfcmVhY3RpdmVVdGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2lkZW50aXR5X0lkZW50aXR5TWFuYWdlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2lkZW50aXR5X09BdXRoSW5mb19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9yZW5kZXJlcnNfU2ltcGxlUmVuZGVyZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9zeW1ib2xzX1NpbXBsZU1hcmtlclN5bWJvbF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3dpZGdldHNfTGF5ZXJMaXN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9iYXNpY19jb2xvcl9waWNrZXJfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0ICcuL1dpZGdldC5zY3NzJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3R5cGUgQWxsV2lkZ2V0UHJvcHN9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7SmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3fSBmcm9tIFwiamltdS1hcmNnaXNcIjtcbmltcG9ydCB7TG9hZGluZ30gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xuaW1wb3J0IExheWVyIGZyb20gXCJlc3JpL2xheWVycy9MYXllclwiXG5pbXBvcnQgQmFzZW1hcCBmcm9tIFwiZXNyaS9CYXNlbWFwXCI7XG5pbXBvcnQge2FkZEZlYXR1cmVzfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1mZWF0dXJlLWxheWVyJztcbmltcG9ydCBPQXV0aEluZm8gZnJvbSBcImVzcmkvaWRlbnRpdHkvT0F1dGhJbmZvXCI7XG5pbXBvcnQgZXNyaUlkIGZyb20gXCJlc3JpL2lkZW50aXR5L0lkZW50aXR5TWFuYWdlclwiO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuL1RlbXBsYXRlXCI7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vQ2F0ZWdvcnlcIjtcbmltcG9ydCBMYXllckNvbXBvbmVudCBmcm9tIFwiLi9MYXllckNvbXBvbmVudC9MYXllckNvbXBvbmVudFwiXG5pbXBvcnQgU2F2ZVRlbXBsYXRlQ29tcG9uZW50IGZyb20gJy4vU2F2ZVRlbXBsYXRlQ29tcG9uZW50J1xuaW1wb3J0IExheWVyTGlzdENvbXBvbmVudCBmcm9tIFwiLi9MYXllckxpc3RDb21wb25lbnQvTGF5ZXJMaXN0Q29tcG9uZW50XCI7XG5pbXBvcnQgVGVtcGxhdGVDb21wb25lbnQgZnJvbSBcIi4vVGVtcGxhdGVDb21wb25lbnQvVGVtcGxhdGVDb21wb25lbnRcIjtcbmltcG9ydCBMYXllcldyYXBwZXIgZnJvbSBcIi4vTGF5ZXJXcmFwcGVyXCI7XG5cbmludGVyZmFjZSBXaWRnZXRTdGF0ZSB7XG4gICAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3IC8vIEppbXVNYXBWaWV3IG9mIHRoZSBsaW5rZWQgTWFwXG4gICAgbGF5ZXJXcmFwcGVyczogTWFwPG51bWJlciwgTGF5ZXJXcmFwcGVyPiAvLyBNYXAgb2YgTGF5ZXIgSUQgdG8gTGF5ZXJXcmFwcGVyXG4gICAgdGVtcGxhdGVzOiBNYXA8bnVtYmVyLCBUZW1wbGF0ZT4gLy8gTWFwIG9mIFRlbXBsYXRlIElEIHRvIFRlbXBsYXRlXG4gICAgY2F0ZWdvcmllczogTWFwPG51bWJlciwgQ2F0ZWdvcnk+IC8vIE1hcCBvZiBDYXRlZ29yeSBJRCB0byBDYXRlZ29yeVxuICAgIGxvYWRpbmc6IGJvb2xlYW4gLy8gd2hldGhlciB0aGUgYXBwbGljYXRpb24gaXMgc3RpbGwgbG9hZGluZyBkYXRhXG4gICAgYWN0aXZlVGVtcGxhdGVzOiBUZW1wbGF0ZVtdIC8vIGxpc3Qgb2YgYWN0aXZlIFRlbXBsYXRlc1xuICAgIGFjdGl2ZUxheWVyczogTGF5ZXJXcmFwcGVyW10gLy8gbGlzdCBvZiBhY3RpdmUgTGF5ZXJzXG59XG5cbmNsYXNzIFdpZGdldCBleHRlbmRzIENvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxhbnk+LCBXaWRnZXRTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBqaW11TWFwVmlldzogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbGF5ZXJXcmFwcGVyczogbmV3IE1hcDxudW1iZXIsIExheWVyV3JhcHBlcj4oKSxcbiAgICAgICAgICAgIHRlbXBsYXRlczogbmV3IE1hcDxudW1iZXIsIFRlbXBsYXRlPigpLFxuICAgICAgICAgICAgY2F0ZWdvcmllczogbmV3IE1hcDxudW1iZXIsIENhdGVnb3J5PigpLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGFjdGl2ZVRlbXBsYXRlczogW10sXG4gICAgICAgICAgICBhY3RpdmVMYXllcnM6IFtdLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVRhYmxlOiBGZWF0dXJlTGF5ZXI7XG4gICAgcHJpdmF0ZSBsYXllclRhYmxlOiBGZWF0dXJlTGF5ZXI7XG4gICAgcHJpdmF0ZSBjYXRlZ29yeVRhYmxlOiBGZWF0dXJlTGF5ZXI7XG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZUxheWVyUmVsYXRpb25zaGlwczogRmVhdHVyZUxheWVyO1xuICAgIHByaXZhdGUgcXVlcnlQYXJhbWV0ZXJzO1xuXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlVGFibGUgPSBuZXcgRmVhdHVyZUxheWVyKHt1cmw6IHRoaXMucHJvcHMuY29uZmlnLnRlbXBsYXRlVGFibGVVcmx9KTtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJUYWJsZSA9IG5ldyBGZWF0dXJlTGF5ZXIoe3VybDogdGhpcy5wcm9wcy5jb25maWcubGF5ZXJUYWJsZVVybH0pO1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeVRhYmxlID0gbmV3IEZlYXR1cmVMYXllcih7dXJsOiB0aGlzLnByb3BzLmNvbmZpZy5jYXRlZ29yeVRhYmxlVXJsfSk7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlTGF5ZXJSZWxhdGlvbnNoaXBzID0gbmV3IEZlYXR1cmVMYXllcih7dXJsOiB0aGlzLnByb3BzLmNvbmZpZy50ZW1wbGF0ZUxheWVyUmVsYXRpb25zaGlwc1VybH0pO1xuICAgICAgICAgICAgdGhpcy5xdWVyeVBhcmFtZXRlcnMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFN0b3AgZXhlY3V0aW9uIG9mIGZ1cnRoZXIgbWV0aG9kcyBiZWNhdXNlIG90aGVyIGZ1bmN0aW9uYWxpdGllcyB1bmxpa2VseSB0byB3b3JrIGlmIGFwcCBmYWlsZWRcbiAgICAgICAgICAgIC8vIHRvIGNvbm5lY3QgdG8gb25lIG9yIG1vcmUgdGFibGVzLlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3IgY29ubmVjdGluZyB0byBkYXRhYmFzZSwgcGxlYXNlIHRyeSBhZ2FpbiFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDYXRlZ29yaWVzKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yIGxvYWRpbmcgY2F0ZWdvcmllcywgcGxlYXNlIHRyeSBhZ2FpbiFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hUZW1wbGF0ZXMoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3IgbG9hZGluZyB0ZW1wbGF0ZXMsIHBsZWFzZSB0cnkgYWdhaW4hXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoTGF5ZXJzKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yIGxvYWRpbmcgbGF5ZXJzLCBwbGVhc2UgdHJ5IGFnYWluIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaFRlbXBsYXRlTGF5ZXJzKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yIGxvYWRpbmcgdGVtcGxhdGUgbGF5ZXJzLCBwbGVhc2UgdHJ5IGFnYWluIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5mZXRjaExheWVyc2FuZFRlbXBsYXRlc2Zyb21IYXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yIGxvYWRpbmcgdXJsIHBhcmFtZXRlcnMsIHBsZWFzZSB0cnkgYWdhaW4hXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9ICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWRzIExheWVycyBhbmQgVGVtcGxhdGVzL1NjZW5hcmlvcyB0aGF0IGFyZSBpbiB1cmwgcGFyYW1ldGVycyBcbiAgICAgKi9cbiAgICBmZXRjaExheWVyc2FuZFRlbXBsYXRlc2Zyb21IYXNoID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgbGF5ZXJzID0gdGhpcy5xdWVyeVBhcmFtZXRlcnMuZ2V0KFwibGF5ZXJzXCIpO1xuICAgICAgICBsZXQgdGVtcGxhdGVzID0gdGhpcy5xdWVyeVBhcmFtZXRlcnMuZ2V0KFwidGVtcGxhdGVzXCIpO1xuICAgICAgICAvLyBhbnkgb3RoZXIgZm9ybWF0dGluZyBjaGVja2luZyBuZWVkZWQ/XG4gICAgICAgIC8vIG1ha2UgdGhpcyBvbmUgZnVuY3Rpb24gaW5zdGVhZCBvZiB0d29cblxuICAgICAgICB0aGlzLmZldGNoT2JqZWN0cyhcIkxheWVyXCIsIGxheWVycyk7XG4gICAgICAgIHRoaXMuZmV0Y2hPYmplY3RzKFwiVGVtcGxhdGVcIiwgdGVtcGxhdGVzKTtcblxuICAgIH1cblxuICAgIGZldGNoT2JqZWN0cyA9IChvYmplY3RUeXBlLCBvYmplY3RQYXJhbXMpIHtcbiAgICAgICAgaWYgKG9iamVjdFBhcmFtcyApIHtcbiAgICAgICAgICAgIG9iamVjdFBhcmFtcyA9IG9iamVjdFBhcmFtcy5zcGxpdChcIixcIik7XG4gICAgICAgICAgICBvYmplY3RQYXJhbXMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAob2JqZWN0SWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaGVyZSBmb3Igbm9uIEludCB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihvYmplY3RJZCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0SWQgPSBwYXJzZUludChvYmplY3RJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqZWN0ID0gb2JqZWN0VHlwZT09XCJMYXllclwiID8gdGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldChvYmplY3RJZCkgOiB0aGlzLnN0YXRlLnRlbXBsYXRlcy5nZXQob2JqZWN0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1ldGhvZE5hbWUgPSBcImFkZEFjdGl2ZVwiICsgb2JqZWN0VHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbbWV0aG9kTmFtZV0ob2JqZWN0KTsgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUXVlcmllcyBDYXRlZ29yaWVzIHRhYmxlIHRvIGNyZWF0ZSBhIE1hcCBvZiBDYXRlZ29yeSBJRCB0byBDYXRlZ29yeSBhbmQgdXBkYXRlcyBzdGF0ZVxuICAgICAqL1xuICAgIGZldGNoQ2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gUXVlcnkgQ2F0ZWdvcmllcyBUYWJsZVxuICAgICAgICBsZXQgZmVhdHVyZVNldCA9IGF3YWl0IHRoaXMuY2F0ZWdvcnlUYWJsZS5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgIHdoZXJlOiBcIjE9MVwiLFxuICAgICAgICAgICAgb3V0RmllbGRzOiBbXCIqXCJdLFxuICAgICAgICAgICAgb3JkZXJCeUZpZWxkczogW1wiVElUTEVcIl1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIENhdGVnb3JpZXNcbiAgICAgICAgbGV0IG5ld0NhdGVnb3JpZXM6IE1hcDxudW1iZXIsIENhdGVnb3J5PiA9IG5ldyBNYXA8bnVtYmVyLCBDYXRlZ29yeT4oKTtcbiAgICAgICAgZm9yIChsZXQgZiBvZiBmZWF0dXJlU2V0LmZlYXR1cmVzKSB7XG4gICAgICAgICAgICBuZXdDYXRlZ29yaWVzLnNldChmLmF0dHJpYnV0ZXMuT0JKRUNUSUQsIHtcbiAgICAgICAgICAgICAgICBpZDogZi5hdHRyaWJ1dGVzLk9CSkVDVElELFxuICAgICAgICAgICAgICAgIHRpdGxlOiBmLmF0dHJpYnV0ZXMuVElUTEUsXG4gICAgICAgICAgICAgICAgbGF5ZXJXcmFwcGVyczogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBuZXdDYXRlZ29yaWVzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUXVlcmllcyBUZW1wbGF0ZXMgdGFibGUgdG8gY3JlYXRlIGxpc3Qgb2YgVGVtcGxhdGVzIGFuZCB1cGRhdGVzIHN0YXRlXG4gICAgICovXG4gICAgZmV0Y2hUZW1wbGF0ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIFF1ZXJ5IFRlbXBsYXRlcyB0YWJsZVxuICAgICAgICBsZXQgZmVhdHVyZVNldCA9IGF3YWl0IHRoaXMudGVtcGxhdGVUYWJsZS5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgIHdoZXJlOiBcIjE9MVwiLFxuICAgICAgICAgICAgb3V0RmllbGRzOiBbXCIqXCJdLFxuICAgICAgICAgICAgb3JkZXJCeUZpZWxkczogW1wiVElUTEVcIl1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIFRlbXBsYXRlc1xuICAgICAgICBsZXQgbmV3VGVtcGxhdGVzOiBNYXA8bnVtYmVyLCBUZW1wbGF0ZT4gPSBuZXcgTWFwPG51bWJlciwgVGVtcGxhdGU+KCk7XG4gICAgICAgIGZvciAobGV0IGYgb2YgZmVhdHVyZVNldC5mZWF0dXJlcykge1xuICAgICAgICAgICAgbmV3VGVtcGxhdGVzLnNldChmLmF0dHJpYnV0ZXMuT0JKRUNUSUQsIHtcbiAgICAgICAgICAgICAgICBpZDogZi5hdHRyaWJ1dGVzLk9CSkVDVElELFxuICAgICAgICAgICAgICAgIHRpdGxlOiBmLmF0dHJpYnV0ZXMuVElUTEUsXG4gICAgICAgICAgICAgICAgbGF5ZXJXcmFwcGVyczogW11cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRlbXBsYXRlczogbmV3VGVtcGxhdGVzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFF1ZXJpZXMgTGF5ZXJzIHRhYmxlIHRvIGNyZWF0ZSBhIE1hcCBvZiBMYXllciBJRCB0byBMYXllcldyYXBwZXIgYW5kIHVwZGF0ZXMgc3RhdGUuXG4gICAgICogRGVsZXRlcyBMYXllcldyYXBwZXIgYW5kIGl0cyByZWZlcmVuY2VzIGlmIExheWVyIGNyZWF0aW9uIGZhaWxzLlxuICAgICAqL1xuICAgIGZldGNoTGF5ZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBRdWVyeSBMYXllcnMgdGFibGVcbiAgICAgICAgbGV0IGZlYXR1cmVTZXQgPSBhd2FpdCB0aGlzLmxheWVyVGFibGUucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICB3aGVyZTogXCIxPTFcIixcbiAgICAgICAgICAgIG91dEZpZWxkczogW1wiT0JKRUNUSURcIiwgXCJUSVRMRVwiLCBcIlVSTFwiLCBcIlNDT1BFXCIsIFwiQ0FURUdPUllJRFwiLCBcIlJFTkRFUkVSXCIsIFwiRklMVEVSXCJdLFxuICAgICAgICAgICAgb3JkZXJCeUZpZWxkczogW1wiU0NPUEVcIiwgXCJUSVRMRVwiXVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDcmVhdGUgTGF5ZXJXcmFwcGVyc1xuICAgICAgICBsZXQgbmV3TGF5ZXJXcmFwcGVyczogTWFwPG51bWJlciwgTGF5ZXJXcmFwcGVyPiA9IG5ldyBNYXA8bnVtYmVyLCBMYXllcldyYXBwZXI+KCk7XG4gICAgICAgIGZvciAobGV0IGZlYXR1cmUgb2YgZmVhdHVyZVNldC5mZWF0dXJlcykge1xuICAgICAgICAgICAgbGV0IG5ld0xheWVyV3JhcHBlciA9IHtcbiAgICAgICAgICAgICAgICBpZDogZmVhdHVyZS5hdHRyaWJ1dGVzLk9CSkVDVElELFxuICAgICAgICAgICAgICAgIHRpdGxlOiBmZWF0dXJlLmF0dHJpYnV0ZXMuU0NPUEUgKyBcIiBcIiArIGZlYXR1cmUuYXR0cmlidXRlcy5USVRMRSxcbiAgICAgICAgICAgICAgICB1cmw6IGZlYXR1cmUuYXR0cmlidXRlcy5VUkwsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBmZWF0dXJlLmF0dHJpYnV0ZXMuRklMVEVSLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiBmZWF0dXJlLmF0dHJpYnV0ZXMuUkVOREVSRVIsXG4gICAgICAgICAgICAgICAgbGF5ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5nZXQoZmVhdHVyZS5hdHRyaWJ1dGVzLkNBVEVHT1JZSUQpLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlczogW11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgYXdhaXQgY3JlYXRlTGF5ZXIgdG8gYWxsb3cgTGF5ZXJzIHRvIGJlIGxvYWRlZCBhc3luY2hyb25vdXNseSBpbiB0aGUgYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTGF5ZXIobmV3TGF5ZXJXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBuZXdMYXllcldyYXBwZXJzLnNldChmZWF0dXJlLmF0dHJpYnV0ZXMuT0JKRUNUSUQsIG5ld0xheWVyV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLmdldChmZWF0dXJlLmF0dHJpYnV0ZXMuQ0FURUdPUllJRCkubGF5ZXJXcmFwcGVycy5wdXNoKG5ld0xheWVyV3JhcHBlcik7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICBhbGVydChlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbGF5ZXJXcmFwcGVyczogbmV3TGF5ZXJXcmFwcGVyc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBRdWVyaWVzIFRlbXBsYXRlLUxheWVyIFJlbGF0aW9uc2hpcHMgdGFibGUgYW5kIHVwZGF0ZXMgc3RhdGVcbiAgICAgKi9cbiAgICBmZXRjaFRlbXBsYXRlTGF5ZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBPcmRlciBieSBPQkpFQ1RJRCB0byBtYWludGFpbiBMYXllciBvcmRlclxuICAgICAgICBsZXQgZmVhdHVyZVNldCA9IGF3YWl0IHRoaXMudGVtcGxhdGVMYXllclJlbGF0aW9uc2hpcHMucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICB3aGVyZTogXCIxPTFcIixcbiAgICAgICAgICAgIG91dEZpZWxkczogW1wiKlwiXSxcbiAgICAgICAgICAgIG9yZGVyQnlGaWVsZHM6IFtcIk9CSkVDVElEXCJdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGZlYXR1cmUgb2YgZmVhdHVyZVNldC5mZWF0dXJlcykge1xuICAgICAgICAgICAgbGV0IGxheWVyV3JhcHBlciA9IHRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoZmVhdHVyZS5hdHRyaWJ1dGVzLkxBWUVSSUQpO1xuICAgICAgICAgICAgaWYgKGxheWVyV3JhcHBlcikge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMuc3RhdGUudGVtcGxhdGVzLmdldChmZWF0dXJlLmF0dHJpYnV0ZXMuVEVNUExBVEVJRCk7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGUubGF5ZXJXcmFwcGVycy5wdXNoKGxheWVyV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldChmZWF0dXJlLmF0dHJpYnV0ZXMuTEFZRVJJRCkudGVtcGxhdGVzLnB1c2godGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZW1wbGF0ZXM6IHRoaXMuc3RhdGUudGVtcGxhdGVzLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIG5ldyBMYXllciB3aXRoIHRoZSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBnaXZlbiBMYXllcldyYXBwZXIuXG4gICAgICogQHBhcmFtIGxheWVyV3JhcHBlciB0aGUgTGF5ZXJXcmFwcGVyIGZyb20gd2hpY2ggdG8gY3JlYXRlIHRoZSBMYXllclxuICAgICAqIEB0aHJvd3MgRXJyb3IgaWYgTGF5ZXIgY3JlYXRpb24gZmFpbHNcbiAgICAgKi9cbiAgICBjcmVhdGVMYXllciA9IGFzeW5jIChsYXllcldyYXBwZXI6IExheWVyV3JhcHBlcikgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IG5ld0xheWVyOiBMYXllciA9IGF3YWl0IExheWVyLmZyb21BcmNHSVNTZXJ2ZXJVcmwoe3VybDogbGF5ZXJXcmFwcGVyLnVybH0pO1xuICAgICAgICAgICAgbmV3TGF5ZXIuaWQgPSBsYXllcldyYXBwZXIuaWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIG5ld0xheWVyLnRpdGxlID0gbGF5ZXJXcmFwcGVyLnRpdGxlO1xuXG4gICAgICAgICAgICAvLyBDdXN0b20gUmVuZGVyZXJcbiAgICAgICAgICAgIGlmIChuZXdMYXllci50eXBlID09PSBcImZlYXR1cmVcIikge1xuICAgICAgICAgICAgICAgIGlmIChsYXllcldyYXBwZXIucmVuZGVyZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKG5ld0xheWVyIGFzIEZlYXR1cmVMYXllcikucmVuZGVyZXIgPSBKU09OLnBhcnNlKGxheWVyV3JhcHBlci5yZW5kZXJlcik7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgbG9hZGluZyByZW5kZXJlciBmb3IgbGF5ZXIgXCIgKyBsYXllcldyYXBwZXIudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGF5ZXJXcmFwcGVyLmZpbHRlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAobmV3TGF5ZXIgYXMgRmVhdHVyZUxheWVyKS5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IGxheWVyV3JhcHBlci5maWx0ZXI7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgbG9hZGluZyBTUUwgZmlsdGVyIGZvciBsYXllciBcIiArIGxheWVyV3JhcHBlci50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYXllcldyYXBwZXIubGF5ZXIgPSBuZXdMYXllcjtcbiAgICAgICAgICAgIHJldHVybiBuZXdMYXllcjtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIGxvYWRpbmcgbGF5ZXJcIiArIGxheWVyV3JhcHBlci50aXRsZSArIFwiIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmVzIGFsbCBhY3RpdmUgTGF5ZXJzIGFzIGEgbmV3IFRlbXBsYXRlIHdpdGggdGhlIGdpdmVuIHRpdGxlXG4gICAgICogQHBhcmFtIHRpdGxlIHRoZSB0aXRsZSBvZiB0aGUgbmV3IFRlbXBsYXRlXG4gICAgICovXG4gICAgc2F2ZVRlbXBsYXRlID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgICAgICAgIGxldCBzYW1lVGl0bGUgPSBhd2FpdCB0aGlzLnRlbXBsYXRlVGFibGUucXVlcnlGZWF0dXJlQ291bnQoe1xuICAgICAgICAgICAgICAgICAgICB3aGVyZTogXCJUSVRMRSA9ICdcIiArIHRpdGxlICsgXCInXCIsXG4gICAgICAgICAgICAgICAgICAgIG91dEZpZWxkczogW1wiKlwiXVxuICAgICAgICAgICAgICAgIH0pID4gMDtcblxuICAgICAgICAgICAgICAgIGlmIChzYW1lVGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciwgYSB0ZW1wbGF0ZSB3aXRoIHRoaXMgdGl0bGUgYWxyZWFkeSBleGlzdHMhXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGF3YWl0IHRoaXMuZ2V0VG9rZW4oKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBhZGRGZWF0dXJlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMucHJvcHMuY29uZmlnLnRlbXBsYXRlVGFibGVVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlczogW3thdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRJVExFOiB0aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge3Rva2VuOiB0b2tlbn1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5hZGRSZXN1bHRzWzBdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IHBlciBBcmNHSVMgUmVzdCBKUyBBUEksIElFZGl0RmVhdHVyZVJlc3VsdCB3aWxsIGNvbnRhaW4gYW4gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1lc3NhZ2UgaWYgc3VjY2VzcyBpcyBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmFkZFJlc3VsdHNbMF0uZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wbGF0ZUlkID0gcmVzcG9uc2UuYWRkUmVzdWx0c1swXS5vYmplY3RJZDtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zYXZlVGVtcGxhdGVMYXllcnModGVtcGxhdGVJZCwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoVGVtcGxhdGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hUZW1wbGF0ZUxheWVycygpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIlN1Y2Nlc3NmdWxseSBzYXZlZCBuZXcgZXZlbnQhXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciwgcGxlYXNlIGVudGVyIGEgdGl0bGUhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBzYXZpbmcgdGVtcGxhdGUsIHBsZWFzZSB0cnkgYWdhaW4hXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBUZW1wbGF0ZS1MYXllciByZWxhdGlvbnNoaXBzIHRvIFRlbXBsYXRlIExheWVyIFJlbGF0aW9uc2hpcHMgdGFibGVcbiAgICAgKiBAcGFyYW0gdGVtcGxhdGVJZCB0aGUgT0JKRUNUSUQgb2YgdGhlIG5ldyBUZW1wbGF0ZVxuICAgICAqIEBwYXJhbSB0b2tlbiB0aGUgdG9rZW4gdG8gdXNlIHRvIGF1dGhlbnRpY2F0ZSB0aGUgbmV0d29yayByZXF1ZXN0XG4gICAgICovXG4gICAgc2F2ZVRlbXBsYXRlTGF5ZXJzID0gYXN5bmMgKHRlbXBsYXRlSWQ6IG51bWJlciwgdG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgICBsZXQgZmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgICAgIGxldCBsYXllcnMgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycztcblxuICAgICAgICBmb3IgKGxldCBsYXllciBvZiBsYXllcnMpIHtcbiAgICAgICAgICAgIC8vIEVsaW1pbmF0ZSBub24tb3BlcmF0aW9uYWwgTGF5ZXJzIGxpa2UgYmFzZSBMYXllcnNcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmxheWVyV3JhcHBlcnMuaGFzKCtsYXllci5pZCkpIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgVEVNUExBVEVJRDogdGVtcGxhdGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIExBWUVSSUQ6IGxheWVyLmlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGFkZEZlYXR1cmVzKHtcbiAgICAgICAgICAgIHVybDogdGhpcy5wcm9wcy5jb25maWcudGVtcGxhdGVMYXllclJlbGF0aW9uc2hpcHNVcmwsXG4gICAgICAgICAgICBmZWF0dXJlczogZmVhdHVyZXMsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5hZGRSZXN1bHRzWzBdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IHBlciBBcmNHSVMgUmVzdCBKUyBBUEksIElFZGl0RmVhdHVyZVJlc3VsdCB3aWxsIGNvbnRhaW4gYW4gZXJyb3JcbiAgICAgICAgICAgIC8vIG1lc3NhZ2UgaWYgc3VjY2VzcyBpcyBmYWxzZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmFkZFJlc3VsdHNbMF0uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRva2VuIHVzaW5nIHVzZXItcHJvdmlkZWQgbG9naW4gaW5mbyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFjY2VzcyBBcmNHSVMgc2VydmljZXNcbiAgICAgKiBAcmV0dXJuIGEgdG9rZW4gZ2VuZXJhdGVkIHVzaW5nIHRoZSB1c2VyLXByb3ZpZGVkIENyZWRlbnRpYWwgaW5mb1xuICAgICAqL1xuICAgIGdldFRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmZvID0gbmV3IE9BdXRoSW5mbyh7XG4gICAgICAgICAgICBhcHBJZDogXCJlUzJ2VWRJWmJIYVZPckR6XCIsXG4gICAgICAgICAgICBmbG93VHlwZTogXCJhdXRvXCIsXG4gICAgICAgICAgICBwb3B1cDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGVzcmlJZC5yZWdpc3Rlck9BdXRoSW5mb3MoW2luZm9dKTtcblxuICAgICAgICBsZXQgY3JlZGVudGlhbCA9IGF3YWl0IGVzcmlJZC5jaGVja1NpZ25JblN0YXR1cyhpbmZvLnBvcnRhbFVybCArIFwiL3NoYXJpbmdcIik7XG4gICAgICAgIGlmICghY3JlZGVudGlhbCkge1xuICAgICAgICAgICAgY3JlZGVudGlhbCA9IGF3YWl0IGVzcmlJZC5nZXRDcmVkZW50aWFsKGluZm8ucG9ydGFsVXJsICsgXCIvc2hhcmluZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3JlZGVudGlhbC50b2tlbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBoYXNoIHBhcmFtcyBmb3IgdGVtcGxhdGUgb3IgbGF5ZXIgaWQsIGFkZCBpZiBub3QgdGhlcmVcbiAgICAgKiBAcGFyYW0gb2JqZWN0SWRcbiAgICAgKiBAcGFyYW0gb2JqZWN0R3JvdXBcbiAgICAgKi9cbiAgICBhZGRIYXNoUGFyYW0gPSAob2JqZWN0SWQsIG9iamVjdEdyb3VwKSB7XG4gICAgICAgIGxldCBvYmplY3RQYXJhbXMgPSB0aGlzLnF1ZXJ5UGFyYW1ldGVycy5nZXQob2JqZWN0R3JvdXApO1xuICAgICAgICBpZiAob2JqZWN0UGFyYW1zKSB7XG4gICAgICAgICAgICBvYmplY3RQYXJhbXMgPSBvYmplY3RQYXJhbXMuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgaWYgKCFvYmplY3RQYXJhbXMuaW5jbHVkZXMob2JqZWN0SWQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgICAgICBvYmplY3RQYXJhbXMucHVzaChvYmplY3RJZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeVBhcmFtZXRlcnMuc2V0KG9iamVjdEdyb3VwLCBvYmplY3RQYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5xdWVyeVBhcmFtZXRlcnMuc2V0KG9iamVjdEdyb3VwLCBvYmplY3RJZCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB0aGlzLnF1ZXJ5UGFyYW1ldGVycy50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBoYXNoIHBhcmFtIGZvciBnaXZlbiB0ZW1wbGF0ZSBvciBsYXllciBpZFxuICAgICAqIEBwYXJhbSBvYmplY3RJZFxuICAgICAqIEBwYXJhbSBvYmplY3RHcm91cFxuICAgICAqL1xuICAgIHJlbW92ZUhhc2hQYXJhbSA9IChvYmplY3RJZCwgb2JqZWN0R3JvdXApIHtcbiAgICAgICAgbGV0IG9iamVjdFBhcmFtcyA9IHRoaXMucXVlcnlQYXJhbWV0ZXJzLmdldChvYmplY3RHcm91cCkuc3BsaXQoXCIsXCIpO1xuICAgICAgICBvYmplY3RQYXJhbXMgPSBvYmplY3RQYXJhbXMuZmlsdGVyKHBhcmFtID0+IHBhcmFtICE9PSBvYmplY3RJZC50b1N0cmluZygpKTtcbiAgICAgICAgY29uc29sZS5sb2cob2JqZWN0UGFyYW1zKTtcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtZXRlcnMuc2V0KG9iamVjdEdyb3VwLCBvYmplY3RQYXJhbXMpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRoaXMucXVlcnlQYXJhbWV0ZXJzLnRvU3RyaW5nKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBMYXllciB0byB0aGUgTWFwIGFuZCBsaXN0IG9mIGFjdGl2ZSBMYXllcnNcbiAgICAgKiBAcGFyYW0gbGF5ZXJXcmFwcGVyIHRoZSBMYXllciB0byBhZGRcbiAgICAgKi9cbiAgICBhZGRBY3RpdmVMYXllciA9IGFzeW5jIChsYXllcldyYXBwZXI6IExheWVyV3JhcHBlcikgPT4ge1xuICAgICAgICBpZiAoIWxheWVyV3JhcHBlci5sYXllcikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVMYXllcihsYXllcldyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5hY3RpdmVMYXllcnMuaW5jbHVkZXMobGF5ZXJXcmFwcGVyKSkge1xuICAgICAgICAgICAgbGV0IG5ld0FjdGl2ZUxheWVycyA9IHRoaXMuc3RhdGUuYWN0aXZlTGF5ZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICBuZXdBY3RpdmVMYXllcnMucHVzaChsYXllcldyYXBwZXIpO1xuICAgICAgICAgICAgbGF5ZXJXcmFwcGVyLmxheWVyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChsYXllcldyYXBwZXIubGF5ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkSGFzaFBhcmFtKGxheWVyV3JhcHBlci5pZCwgXCJsYXllcnNcIik7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBhZGRpbmcgbGF5ZXIgXCIgKyBsYXllcldyYXBwZXIudGl0bGUgKyBcIiFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVMYXllcnM6IG5ld0FjdGl2ZUxheWVyc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIGdpdmVuIFRlbXBsYXRlIHRvIHRoZSBNYXAgYW5kIGxpc3Qgb2YgYWN0aXZlIFRlbXBsYXRlc1xuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZSB0aGUgVGVtcGxhdGUgdG8gYWRkXG4gICAgICovXG4gICAgYWRkQWN0aXZlVGVtcGxhdGUgPSBhc3luYyAodGVtcGxhdGU6IFRlbXBsYXRlKSA9PiB7XG5cbiAgICAgICAgbGV0IG5ld0FjdGl2ZVRlbXBsYXRlcyA9IHRoaXMuc3RhdGUuYWN0aXZlVGVtcGxhdGVzLnNsaWNlKCk7XG4gICAgICAgIGxldCBuZXdBY3RpdmVMYXllcnMgPSB0aGlzLnN0YXRlLmFjdGl2ZUxheWVycy5zbGljZSgpO1xuICAgICAgICBpZiAoIW5ld0FjdGl2ZVRlbXBsYXRlcy5pbmNsdWRlcyh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgIG5ld0FjdGl2ZVRlbXBsYXRlcy5wdXNoKHRlbXBsYXRlKTtcbiAgICAgICAgICAgIHRoaXMuYWRkSGFzaFBhcmFtKHRlbXBsYXRlLmlkLCBcInRlbXBsYXRlc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGxheWVyV3JhcHBlciBvZiB0ZW1wbGF0ZS5sYXllcldyYXBwZXJzKSB7XG4gICAgICAgICAgICBpZiAoIWxheWVyV3JhcHBlci5sYXllcikge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlTGF5ZXIobGF5ZXJXcmFwcGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmV3QWN0aXZlTGF5ZXJzLmluY2x1ZGVzKGxheWVyV3JhcHBlcikpIHtcbiAgICAgICAgICAgICAgICBuZXdBY3RpdmVMYXllcnMucHVzaChsYXllcldyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGxheWVyV3JhcHBlci5sYXllci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChsYXllcldyYXBwZXIubGF5ZXIpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBhZGRpbmcgbGF5ZXIgXCIgKyBsYXllcldyYXBwZXIudGl0bGUgKyBcIiFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVUZW1wbGF0ZXM6IG5ld0FjdGl2ZVRlbXBsYXRlcyxcbiAgICAgICAgICAgIGFjdGl2ZUxheWVyczogbmV3QWN0aXZlTGF5ZXJzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGdpdmVuIExheWVyIGZyb20gdGhlIE1hcCBhbmQgbGlzdCBvZiBhY3RpdmUgTGF5ZXJzLiBSZW1vdmVzIGFueSBUZW1wbGF0ZXMgd2l0aG91dCBhc3NvY2lhdGVkXG4gICAgICogYWN0aXZlIExheWVycyBhZnRlciB0aGUgZ2l2ZW4gTGF5ZXIgaGFzIGJlZW4gcmVtb3ZlZC5cbiAgICAgKiBAcGFyYW0gbGF5ZXIgdGhlIExheWVyIHRvIHJlbW92ZVxuICAgICAqL1xuICAgIHJlbW92ZUFjdGl2ZUxheWVyID0gKGxheWVyOiBMYXllcikgPT4ge1xuICAgICAgICBsZXQgbmV3QWN0aXZlTGF5ZXJzID0gdGhpcy5zdGF0ZS5hY3RpdmVMYXllcnMuZmlsdGVyKChsdykgPT4ge3JldHVybiBsdy5sYXllciAhPT0gbGF5ZXJ9KTtcbiAgICAgICAgbGV0IG5ld0FjdGl2ZVRlbXBsYXRlcyA9IHRoaXMuc3RhdGUuYWN0aXZlVGVtcGxhdGVzO1xuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShsYXllcik7XG4gICAgICAgIHRoaXMucmVtb3ZlSGFzaFBhcmFtKGxheWVyLmlkLCBcImxheWVyc1wiKTtcblxuICAgICAgICAvLyBDaGVjayBpZiBhbnkgYWN0aXZlIFRlbXBsYXRlcyBuZWVkIHRvIGJlIHJlbW92ZWRcbiAgICAgICAgZm9yIChsZXQgYWN0aXZlVGVtcGxhdGUgb2YgbmV3QWN0aXZlVGVtcGxhdGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldCgrbGF5ZXIuaWQpLnRlbXBsYXRlcy5pbmNsdWRlcyhhY3RpdmVUZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbGF5ZXJXcmFwcGVyIG9mIGFjdGl2ZVRlbXBsYXRlLmxheWVyV3JhcHBlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0FjdGl2ZUxheWVycy5pbmNsdWRlcyhsYXllcldyYXBwZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3QWN0aXZlVGVtcGxhdGVzID0gbmV3QWN0aXZlVGVtcGxhdGVzLmZpbHRlcigodCkgPT4ge3JldHVybiB0ICE9PSBhY3RpdmVUZW1wbGF0ZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlVGVtcGxhdGVzOiBuZXdBY3RpdmVUZW1wbGF0ZXMsXG4gICAgICAgICAgICBhY3RpdmVMYXllcnM6IG5ld0FjdGl2ZUxheWVyc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBUZW1wbGF0ZSBmcm9tIHRoZSBNYXAgYW5kIGxpc3Qgb2YgYWN0aXZlIFRlbXBsYXRlcy4gUmVtb3ZlcyBhbnkgVGVtcGxhdGVzIHdpdGhvdXQgYXNzb2NpYXRlZFxuICAgICAqIGFjdGl2ZSBMYXllcnMgYWZ0ZXIgdGhlIGdpdmVuIFRlbXBsYXRlIGhhcyBiZWVuIHJlbW92ZWQuXG4gICAgICogQHBhcmFtIHJlbW92ZVRlbXBsYXRlIHRoZSBUZW1wbGF0ZSB0byByZW1vdmVcbiAgICAgKi9cbiAgICByZW1vdmVBY3RpdmVUZW1wbGF0ZSA9IChyZW1vdmVUZW1wbGF0ZTogVGVtcGxhdGUpID0+IHtcbiAgICAgICAgbGV0IG5ld0FjdGl2ZUxheWVycyA9IHRoaXMuc3RhdGUuYWN0aXZlTGF5ZXJzLnNsaWNlKCk7XG4gICAgICAgIGxldCBuZXdBY3RpdmVUZW1wbGF0ZXMgPSB0aGlzLnN0YXRlLmFjdGl2ZVRlbXBsYXRlcy5maWx0ZXIoKHQpID0+IHQgIT09IHJlbW92ZVRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5yZW1vdmVIYXNoUGFyYW0ocmVtb3ZlVGVtcGxhdGUuaWQsIFwidGVtcGxhdGVzXCIpO1xuXG4gICAgICAgIGZvciAobGV0IGxheWVyV3JhcHBlciBvZiByZW1vdmVUZW1wbGF0ZS5sYXllcldyYXBwZXJzKSB7XG4gICAgICAgICAgICAvLyBEb24ndCByZW1vdmUgbGF5ZXIgaWYgaXQgYmVsb25ncyB0byBhbm90aGVyIGFjdGl2ZSBUZW1wbGF0ZVxuICAgICAgICAgICAgbGV0IGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgYWN0aXZlVGVtcGxhdGUgb2YgbmV3QWN0aXZlVGVtcGxhdGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxheWVyV3JhcHBlci50ZW1wbGF0ZXMuaW5jbHVkZXMoYWN0aXZlVGVtcGxhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgbmV3QWN0aXZlTGF5ZXJzID0gbmV3QWN0aXZlTGF5ZXJzLmZpbHRlcigobHcpID0+IGx3ICE9PSBsYXllcldyYXBwZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlKGxheWVyV3JhcHBlci5sYXllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZVRlbXBsYXRlczogbmV3QWN0aXZlVGVtcGxhdGVzLFxuICAgICAgICAgICAgYWN0aXZlTGF5ZXJzOiBuZXdBY3RpdmVMYXllcnNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBjbGVhciBhbGwgYWN0aW9uXG4gICAgICovXG4gICAgY2xlYXJBbGwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlQWxsKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlVGVtcGxhdGVzOiBbXSxcbiAgICAgICAgICAgIGFjdGl2ZUxheWVyczogW11cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtZXRlcnMuc2V0KCdsYXllcnMnLCAnJyk7XG4gICAgICAgIHRoaXMucXVlcnlQYXJhbWV0ZXJzLnNldCgndGVtcGxhdGVzJywgJycpO1xuICAgICAgICAvLyB3aXBpbmcgb3V0IHRoZXNlIHZhbHVlcyBpbnN0ZWFkIG9mIGNsZWFyaW5nIG91dCBoYXNoIFxuICAgICAgICAvLyBpbiBjYXNlIHdlIGV2ZXIgdXNlIGhhc2ggcGFyYW0gZXZlciBlbHNld2hlcmVcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB0aGlzLnF1ZXJ5UGFyYW1ldGVycy50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsaXN0IG9mIFRlbXBsYXRlcyB0aGF0IHRoZSBnaXZlbiBMYXllciBiZWxvbmdzIHRvXG4gICAgICogQHBhcmFtIGxheWVyIHRoZSBMYXllciB0byBjaGVja1xuICAgICAqIEBwYXJhbSBhY3RpdmUgc2V0IHRvIHRydWUgdG8gb25seSByZXR1cm4gYWN0aXZlIFRlbXBsYXRlc1xuICAgICAqIEByZXR1cm4gYSBsaXN0IG9mIFRlbXBsYXRlcyB0aGF0IHRoZSBnaXZlbiBMYXllciBiZWxvbmdzIHRvXG4gICAgICovXG4gICAgZ2V0TGF5ZXJUZW1wbGF0ZXMgPSAobGF5ZXI6IExheWVyLCBhY3RpdmU/OiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldCgrbGF5ZXIuaWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgbGV0IGFjdGl2ZVRlbXBsYXRlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgdGVtcGxhdGUgb2YgdGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldCgrbGF5ZXIuaWQpLnRlbXBsYXRlcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVRlbXBsYXRlcy5pbmNsdWRlcyh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGVtcGxhdGVzLnB1c2godGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVUZW1wbGF0ZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldCgrbGF5ZXIuaWQpLnRlbXBsYXRlcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIENhdGVnb3J5IHRoYXQgdGhlIGdpdmVuIExheWVyIGJlbG9uZ3MgdG9cbiAgICAgKiBAcGFyYW0gbGF5ZXIgdGhlIExheWVyIHRvIGNoZWNrXG4gICAgICogQHJldHVybiB0aGUgQ2F0ZWdvcnkgdGhhdCB0aGUgZ2l2ZW4gTGF5ZXIgYmVsb25ncyB0b1xuICAgICAqL1xuICAgIGdldExheWVyQ2F0ZWdvcnkgPSAobGF5ZXI6IExheWVyKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldCgrbGF5ZXIuaWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldCgrbGF5ZXIuaWQpLmNhdGVnb3J5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFF1ZXJpZXMgTGF5ZXIgVGFibGUgYW5kIHJldHVybnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGdpdmVuIExheWVyXG4gICAgICogQHBhcmFtIGxheWVyIHRoZSBMYXllciB0byBxdWVyeSBpbmZvcm1hdGlvbiBhYm91dFxuICAgICAqIEByZXR1cm4gYSBKU09OIG9iamVjdCBjb250YWluaW5nIHRoZSBzb3VyY2UsIGRlc2NyaXB0aW9uLCBhbmQgdXJsIG9mIHRoZSBsYXllciBvclxuICAgICAqIG9ubHkgdGhlIHVybCBvZiB0aGUgbGF5ZXIgaWYgdGhlIG5ldHdvcmsgcmVxdWVzdCBmYWlsc1xuICAgICAqL1xuICAgIGdldExheWVySW5mbyA9IGFzeW5jIChsYXllcjogTGF5ZXIpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldCgrbGF5ZXIuaWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBmZWF0dXJlU2V0ID0gYXdhaXQgdGhpcy5sYXllclRhYmxlLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiBcIk9CSkVDVElEID0gXCIgKyBsYXllci5pZCxcbiAgICAgICAgICAgICAgICBvdXRGaWVsZHM6IFtcIlNPVVJDRVwiLCBcIkRFU0NSSVBUSU9OXCJdXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGZlYXR1cmVTZXQuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogZmVhdHVyZVNldC5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzLlNPVVJDRSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGZlYXR1cmVTZXQuZmVhdHVyZXNbMF0uYXR0cmlidXRlcy5ERVNDUklQVElPTixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLnN0YXRlLmxheWVyV3JhcHBlcnMuZ2V0KCtsYXllci5pZCkudXJsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBsYXllcnMgZm91bmQgd2l0aCB0aGUgZ2l2ZW4gT0JKRUNUSUQhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yIGxvYWRpbmcgbGF5ZXIgaW5mbyFcIik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6IFwiRXJyb3JcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJFcnJvclwiLFxuICAgICAgICAgICAgICAgIHVybDogdGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldCgrbGF5ZXIuaWQpLnVybFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBzdGF0ZSB0byBnaXZlbiBKaW11TWFwVmlldyBhbmQgc2V0cyBpbml0aWFsIGJhc2VtYXBcbiAgICAgKiBAcGFyYW0gam12IHRoZSBuZXcgSmltdU1hcFZpZXdcbiAgICAgKi9cbiAgICBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgICAgIGlmIChqbXYpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xuICAgICAgICAgICAgICAgIC8vIFNldCBiYXNlbWFwIG9uIGZpcnN0IGFjdGl2ZSB2aWV3IGNoYW5nZVxuICAgICAgICAgICAgICAgIGptdi52aWV3Lm1hcC5iYXNlbWFwID0gQmFzZW1hcC5mcm9tSWQoXCJhcmNnaXMtdG9wb2dyYXBoaWNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBqaW11TWFwVmlldzogam12XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXN0YXJ0ZXIgamltdS13aWRnZXRcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJvZW0tZGFzaGJvYXJkLWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZW1wbGF0ZS1jb21wb25lbnRfX2dyaWQtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+QWRkIExheWVyczwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVtcGxhdGVDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZXM9e0FycmF5LmZyb20odGhpcy5zdGF0ZS50ZW1wbGF0ZXMudmFsdWVzKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRlbXBsYXRlcz17dGhpcy5zdGF0ZS5hY3RpdmVUZW1wbGF0ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRUZW1wbGF0ZT17dGhpcy5hZGRBY3RpdmVUZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZVRlbXBsYXRlPXt0aGlzLnJlbW92ZUFjdGl2ZVRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUxheWVycz17dGhpcy5zdGF0ZS5hY3RpdmVMYXllcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRMYXllcj17dGhpcy5hZGRBY3RpdmVMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxheWVyLWNvbXBvbmVudF9fZ3JpZC1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyB0eXBlPVwiU0VDT05EQVJZXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5ZXJDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcnM9e0FycmF5LmZyb20odGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLnZhbHVlcygpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzPXtBcnJheS5mcm9tKHRoaXMuc3RhdGUuY2F0ZWdvcmllcy52YWx1ZXMoKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTGF5ZXJzPXt0aGlzLnN0YXRlLmFjdGl2ZUxheWVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFkZExheWVyPXt0aGlzLmFkZEFjdGl2ZUxheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGF5ZXItbGlzdF9fZ3JpZC1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgdHlwZT1cIlNFQ09OREFSWVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExheWVyTGlzdENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsZWFyQWxsPXt0aGlzLmNsZWFyQWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmVMYXllcj17dGhpcy5yZW1vdmVBY3RpdmVMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldExheWVyVGVtcGxhdGVzPXt0aGlzLmdldExheWVyVGVtcGxhdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TGF5ZXJDYXRlZ29yeT17dGhpcy5nZXRMYXllckNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtQWN0aXZlTGF5ZXJzPXt0aGlzLnN0YXRlLmFjdGl2ZUxheWVycy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRMYXllckluZm89e3RoaXMuZ2V0TGF5ZXJJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzYXZlLXRlbXBsYXRlLWdyaWQtaXRlbVwiIGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNhdmVUZW1wbGF0ZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrPXt0aGlzLnNhdmVUZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLmFjdGl2ZUxheWVycy5sZW5ndGggPiAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpZGdldDtcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=