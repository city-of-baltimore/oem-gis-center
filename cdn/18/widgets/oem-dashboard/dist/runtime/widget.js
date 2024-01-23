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
___CSS_LOADER_EXPORT___.push([module.id, "#layer-list-component #no-layers-message {\n  background-color: #edf7f9;\n  padding: 5px; }\n\n#layer-list-component .esri-layer-list {\n  height: calc(100vh - 250px);\n  overflow-y: auto;\n  background-color: var(--white); }\n  #layer-list-component .esri-layer-list .esri-layer-list__no-items {\n    display: none; }\n  #layer-list-component .esri-layer-list .esri-layer-list__item {\n    background-color: var(--white); }\n  #layer-list-component .esri-layer-list .esri-layer-list__item-container {\n    padding-left: 0;\n    animation: new-item 5s ease-out;\n    border: none; }\n    #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-label {\n      position: relative;\n      cursor: move; }\n      #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-label .esri-layer-list__item-toggle {\n        position: absolute;\n        height: 100%; }\n      #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-label .esri-layer-list__item-toggle:hover {\n        background-color: var(--secondary-100); }\n      #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-label .esri-layer-list__item-title {\n        margin-left: 25px; }\n      #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-label .esri-icon-non-visible {\n        color: var(--light-800); }\n    #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-label:has(.esri-icon-non-visible) {\n      color: var(--light-800); }\n    #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-actions-menu-item--active[aria-label=\"Legend\"] {\n      transform: rotate(180deg); }\n  #layer-list-component .esri-layer-list .esri-layer-list-panel {\n    margin: 0 0 5px 27px;\n    background-color: var(--light); }\n    #layer-list-component .esri-layer-list .esri-layer-list-panel .esri-layer-list-panel__content {\n      padding: 5px 0 5px 10px; }\n    #layer-list-component .esri-layer-list .esri-layer-list-panel .esri-layer-list-panel__content:has(.legend__templates) {\n      border-top: 2px var(--light-300) solid; }\n    #layer-list-component .esri-layer-list .esri-layer-list-panel .esri-legend {\n      background-color: transparent; }\n    #layer-list-component .esri-layer-list .esri-layer-list-panel .esri-legend__service {\n      padding: 0; }\n    #layer-list-component .esri-layer-list .esri-layer-list-panel .esri-legend__layer-child-table {\n      margin: 0; }\n  #layer-list-component .esri-layer-list .esri-layer-list__item-actions {\n    background-color: var(--light); }\n    #layer-list-component .esri-layer-list .esri-layer-list__item-actions .esri-layer-list__item-actions-list .esri-disabled-element,\n    #layer-list-component .esri-layer-list .esri-layer-list__item-actions .esri-layer-list__item-actions-list .esri-disabled-element:hover {\n      color: var(--light-800);\n      cursor: default; }\n\n#layer-list-component #layer-list__buttons {\n  display: grid;\n  grid-template-columns: 1fr 80px;\n  grid-template-rows: repeat(2, 50%); }\n  #layer-list-component #layer-list__buttons button {\n    padding: 3px; }\n  #layer-list-component #layer-list__buttons #clear-all-button-grid-item {\n    grid-column: 1;\n    grid-row: 1;\n    border-bottom: 2px var(--light-300) solid !important; }\n    #layer-list-component #layer-list__buttons #clear-all-button-grid-item #clear-all-button {\n      padding-left: 0; }\n      #layer-list-component #layer-list__buttons #clear-all-button-grid-item #clear-all-button svg {\n        margin-right: 0;\n        margin-bottom: 2px; }\n  #layer-list-component #layer-list__buttons #legend-button-grid-item {\n    grid-column: 2;\n    grid-row: 1;\n    border-bottom: 2px var(--light-300) solid; }\n    #layer-list-component #layer-list__buttons #legend-button-grid-item label {\n      font-size: var(--calcite-font-size--1);\n      position: relative;\n      top: 4px; }\n    #layer-list-component #layer-list__buttons #legend-button-grid-item #legend-button {\n      position: relative;\n      bottom: 2px; }\n  #layer-list-component #layer-list__buttons #layer-visibility-button-grid-item {\n    grid-column: 1;\n    grid-row: 2; }\n\n.color-picker-block {\n  display: inline-block;\n  position: relative;\n  top: 11px;\n  left: 5px; }\n\n.layer-size-slider > input {\n  display: inline-block;\n  width: 65%;\n  position: relative;\n  top: 3px;\n  margin: 0 10px; }\n\n#picture-marker-warning {\n  margin-top: 10px; }\n  #picture-marker-warning div {\n    margin-top: 10px; }\n\n#show-legend-button:hover:not(.disabled), #hide-legend-button:hover:not(.disabled) {\n  color: var(--primary-500); }\n\n#legend-button svg {\n  margin-left: 0.5rem; }\n\n.layer-style-modal.modal-backdrop.fade.show {\n  opacity: 0; }\n", "",{"version":3,"sources":["webpack://./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerListComponent.scss"],"names":[],"mappings":"AAAA;EAEQ,yBAAyB;EACzB,YAAY,EAAA;;AAHpB;EAOQ,2BAA2B;EAC3B,gBAAgB;EAChB,8BAA8B,EAAA;EATtC;IAYY,aAAa,EAAA;EAZzB;IAgBY,8BAA8B,EAAA;EAhB1C;IAoBY,eAAe;IACf,+BAA+B;IAC/B,YAAY,EAAA;IAtBxB;MAyBgB,kBAAkB;MAClB,YAAY,EAAA;MA1B5B;QA6BoB,kBAAkB;QAClB,YAAY,EAAA;MA9BhC;QAkCoB,sCAAsC,EAAA;MAlC1D;QAsCoB,iBAAiB,EAAA;MAtCrC;QA0CoB,uBAAuB,EAAA;IA1C3C;MA+CgB,uBAAuB,EAAA;IA/CvC;MAmDgB,yBAAyB,EAAA;EAnDzC;IAwDY,oBAAoB;IACpB,8BAA8B,EAAA;IAzD1C;MA4DgB,uBAAuB,EAAA;IA5DvC;MAgEgB,sCAAsC,EAAA;IAhEtD;MAoEgB,6BAA6B,EAAA;IApE7C;MAwEgB,UAAU,EAAA;IAxE1B;MA4EgB,SAAS,EAAA;EA5EzB;IAiFY,8BAA8B,EAAA;IAjF1C;;MAqFgB,uBAAuB;MACvB,eAAe,EAAA;;AAtF/B;EA6FQ,aAAa;EACb,+BAA+B;EAC/B,kCAAkC,EAAA;EA/F1C;IAkGY,YAAY,EAAA;EAlGxB;IAsGY,cAAc;IACd,WAAW;IACX,oDAAoD,EAAA;IAxGhE;MA2GgB,eAAe,EAAA;MA3G/B;QA8GoB,eAAe;QACf,kBAAkB,EAAA;EA/GtC;IAqHY,cAAc;IACd,WAAW;IACX,yCAAyC,EAAA;IAvHrD;MA0HgB,sCAAsC;MACtC,kBAAkB;MAClB,QAAQ,EAAA;IA5HxB;MAgIgB,kBAAkB;MAClB,WAAW,EAAA;EAjI3B;IAsIY,cAAc;IACd,WAAW,EAAA;;AAMvB;EACI,qBAAqB;EACrB,kBAAkB;EAClB,SAAS;EACT,SAAS,EAAA;;AAGb;EACI,qBAAqB;EACrB,UAAU;EACV,kBAAkB;EAClB,QAAQ;EACR,cAAc,EAAA;;AAGlB;EACI,gBAAgB,EAAA;EADpB;IAIQ,gBAAgB,EAAA;;AAIxB;EACI,yBAAyB,EAAA;;AAG7B;EACI,mBAAmB,EAAA;;AAGvB;EACI,UAAU,EAAA","sourcesContent":["#layer-list-component {\n    #no-layers-message {\n        background-color: #edf7f9;\n        padding: 5px;\n    }\n\n    .esri-layer-list {\n        height: calc(100vh - 250px);\n        overflow-y: auto;\n        background-color: var(--white);\n\n        .esri-layer-list__no-items {\n            display: none;\n        }\n\n        .esri-layer-list__item {\n            background-color: var(--white);\n        }\n\n        .esri-layer-list__item-container {\n            padding-left: 0;\n            animation: new-item 5s ease-out;\n            border: none;\n\n            .esri-layer-list__item-label {\n                position: relative;\n                cursor: move;\n\n                .esri-layer-list__item-toggle {\n                    position: absolute;\n                    height: 100%;\n                }\n\n                .esri-layer-list__item-toggle:hover {\n                    background-color: var(--secondary-100);\n                }\n\n                .esri-layer-list__item-title {\n                    margin-left: 25px;\n                }\n\n                .esri-icon-non-visible {\n                    color: var(--light-800);\n                }\n            }\n\n            .esri-layer-list__item-label:has(.esri-icon-non-visible) {\n                color: var(--light-800);\n            }\n\n            .esri-layer-list__item-actions-menu-item--active[aria-label=\"Legend\"] {\n                transform: rotate(180deg);\n            }\n        }\n\n        .esri-layer-list-panel {\n            margin: 0 0 5px 27px;\n            background-color: var(--light);\n\n            .esri-layer-list-panel__content {\n                padding: 5px 0 5px 10px;\n            }\n\n            .esri-layer-list-panel__content:has(.legend__templates) {\n                border-top: 2px var(--light-300) solid;\n            }\n\n            .esri-legend {\n                background-color: transparent;\n            }\n\n            .esri-legend__service {\n                padding: 0;\n            }\n\n            .esri-legend__layer-child-table {\n                margin: 0;\n            }\n        }\n\n        .esri-layer-list__item-actions {\n            background-color: var(--light);\n\n            .esri-layer-list__item-actions-list .esri-disabled-element,\n            .esri-layer-list__item-actions-list .esri-disabled-element:hover {\n                color: var(--light-800);\n                cursor: default;\n            }\n        }\n    }\n\n\n    #layer-list__buttons {\n        display: grid;\n        grid-template-columns: 1fr 80px;\n        grid-template-rows: repeat(2, 50%);\n\n        button {\n            padding: 3px;\n        }\n\n        #clear-all-button-grid-item {\n            grid-column: 1;\n            grid-row: 1;\n            border-bottom: 2px var(--light-300) solid !important;\n\n            #clear-all-button {\n                padding-left: 0;\n\n                svg {\n                    margin-right: 0;\n                    margin-bottom: 2px;\n                }\n            }\n        }\n\n        #legend-button-grid-item {\n            grid-column: 2;\n            grid-row: 1;\n            border-bottom: 2px var(--light-300) solid;\n\n            label {\n                font-size: var(--calcite-font-size--1);\n                position: relative;\n                top: 4px;\n            }\n\n            #legend-button {\n                position: relative;\n                bottom: 2px;\n            }\n        }\n\n        #layer-visibility-button-grid-item {\n            grid-column: 1;\n            grid-row: 2;\n        }\n    }\n}\n\n\n.color-picker-block {\n    display: inline-block;\n    position: relative;\n    top: 11px;\n    left: 5px;\n}\n\n.layer-size-slider > input {\n    display: inline-block;\n    width: 65%;\n    position: relative;\n    top: 3px;\n    margin: 0 10px;\n}\n\n#picture-marker-warning {\n    margin-top: 10px;\n\n    div {\n        margin-top: 10px;\n    }\n}\n\n#show-legend-button:hover:not(.disabled), #hide-legend-button:hover:not(.disabled) {\n    color: var(--primary-500);\n}\n\n#legend-button svg {\n    margin-left: 0.5rem;\n}\n\n.layer-style-modal.modal-backdrop.fade.show {\n    opacity: 0;\n}\n\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".jimu-widget {\n  position: relative; }\n\n.p-5 {\n  padding: 0.5rem !important; }\n\n/* Grid positioning */\n#oem-dashboard-grid {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: repeat(2, 50%);\n  font-size: 125% !important; }\n  #oem-dashboard-grid .grid-item {\n    padding: 0.5rem !important;\n    position: relative; }\n  #oem-dashboard-grid #template-component__grid-item {\n    grid-column: 1;\n    grid-row: 1; }\n  #oem-dashboard-grid #layer-component__grid-item {\n    grid-column: 1;\n    grid-row: 2 / 4; }\n  #oem-dashboard-grid #layer-list__grid-item {\n    grid-column: 2;\n    grid-row: 1 / 3;\n    background-color: var(--white); }\n  #oem-dashboard-grid #bottom-grid-item {\n    grid-column: 2;\n    grid-row: 3;\n    background-color: var(--white);\n    bottom: 90%; }\n  #oem-dashboard-grid .loading {\n    height: 80px;\n    width: 200px; }\n\n/* Buttons and icons */\n.add-button {\n  width: 100%;\n  display: block; }\n  .add-button .icon-btn-sizer {\n    justify-content: left;\n    text-align: left; }\n  .add-button .jimu-icon {\n    margin-right: 4px !important;\n    margin-left: 0 !important;\n    margin-bottom: 3px; }\n\n#open-save-template-button {\n  position: absolute;\n  padding: 0rem 0.75rem; }\n  #open-save-template-button .jimu-icon {\n    margin-bottom: 4px; }\n\n.btn-primary {\n  color: var(--dark-800);\n  background-color: var(--secondary-500);\n  border-color: var(--secondary-500); }\n\n.btn-primary:hover {\n  background-color: var(--secondary-200);\n  border-color: var(--secondary-200); }\n\n.advanced-select-menu .select-item-placeholder {\n  margin: 0 !important;\n  width: 0 !important; }\n\n.dropdown-item:hover {\n  background-color: var(--white) !important; }\n\n.multiple-select-tool {\n  display: none !important; }\n\n.jimu-dropdown-item > .jimu-checkbox {\n  display: none !important; }\n\n@keyframes new-item {\n  from {\n    background-color: var(--secondary-100); }\n  50% {\n    background-color: var(--secondary-100); }\n  to {\n    background-color: transparent; } }\n\n.modal-content .menu-navigation .nav-link.active {\n  cursor: default; }\n", "",{"version":3,"sources":["webpack://./your-extensions/widgets/oem-dashboard/src/runtime/Widget.scss"],"names":[],"mappings":"AAAA;EACI,kBAAkB,EAAA;;AAGtB;EACI,0BAA0B,EAAA;;AAI9B,qBAAA;AACA;EACI,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,qCAAqC;EACrC,0BAA0B,EAAA;EAP9B;IAUQ,0BAA0B;IAC1B,kBAAkB,EAAA;EAX1B;IAeQ,cAAc;IACd,WAAW,EAAA;EAhBnB;IAoBQ,cAAc;IACd,eAAe,EAAA;EArBvB;IAyBQ,cAAc;IACd,eAAe;IACf,8BAA8B,EAAA;EA3BtC;IA+BQ,cAAc;IACd,WAAW;IACX,8BAA8B;IAC9B,WAAW,EAAA;EAlCnB;IAsCQ,YAAY;IACZ,YAAY,EAAA;;AAIpB,sBAAA;AACA;EACI,WAAW;EACX,cAAc,EAAA;EAFlB;IAKQ,qBAAqB;IACrB,gBAAgB,EAAA;EANxB;IAUQ,4BAA4B;IAC5B,yBAAyB;IACzB,kBAAkB,EAAA;;AAI1B;EAII,kBAAkB;EAClB,qBAAqB,EAAA;EALzB;IAEQ,kBAAkB,EAAA;;AAM1B;EACI,sBAAsB;EACtB,sCAAsC;EACtC,kCAAkC,EAAA;;AAGtC;EACI,sCAAsC;EACtC,kCAAkC,EAAA;;AAGtC;EACI,oBAAoB;EACpB,mBAAmB,EAAA;;AAGvB;EACI,yCAAyC,EAAA;;AAG7C;EACI,wBAAwB,EAAA;;AAG5B;EACI,wBAAwB,EAAA;;AAG5B;EACI;IAAM,sCAAsC,EAAA;EAC5C;IAAK,sCAAsC,EAAA;EAC3C;IAAI,6BAA6B,EAAA,EAAA;;AAGrC;EACI,eAAe,EAAA","sourcesContent":[".jimu-widget {\n    position: relative;\n}\n\n.p-5 {\n    padding: 0.5rem !important;\n}\n\n\n/* Grid positioning */\n#oem-dashboard-grid {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n    font-size: 125% !important;\n\n    .grid-item {\n        padding: 0.5rem !important;\n        position: relative;\n    }\n\n    #template-component__grid-item {\n        grid-column: 1;\n        grid-row: 1;\n    }\n\n    #layer-component__grid-item {\n        grid-column: 1;\n        grid-row: 2 / 4;\n    }\n\n    #layer-list__grid-item {\n        grid-column: 2;\n        grid-row: 1 / 3;\n        background-color: var(--white);\n    }\n\n    #bottom-grid-item {\n        grid-column: 2;\n        grid-row: 3;\n        background-color: var(--white);\n        bottom: 90%;\n    }\n\n    .loading {\n        height: 80px;\n        width: 200px;\n    }\n}\n\n/* Buttons and icons */\n.add-button {\n    width: 100%;\n    display: block;\n\n    .icon-btn-sizer {\n        justify-content: left;\n        text-align: left;\n    }\n\n    .jimu-icon {\n        margin-right: 4px !important;\n        margin-left: 0 !important;\n        margin-bottom: 3px;\n    }\n}\n\n#open-save-template-button {\n    .jimu-icon {\n        margin-bottom: 4px;\n    }\n    position: absolute;\n    padding: 0rem 0.75rem;\n}\n\n.btn-primary {\n    color: var(--dark-800);\n    background-color: var(--secondary-500);\n    border-color: var(--secondary-500);\n}\n\n.btn-primary:hover {\n    background-color: var(--secondary-200);\n    border-color: var(--secondary-200);\n}\n\n.advanced-select-menu .select-item-placeholder {\n    margin: 0 !important;\n    width: 0 !important;\n}\n\n.dropdown-item:hover {\n    background-color: var(--white) !important;\n}\n\n.multiple-select-tool {\n    display: none !important;\n}\n\n.jimu-dropdown-item > .jimu-checkbox {\n    display: none !important;\n}\n\n@keyframes new-item {\n    from {background-color: var(--secondary-100)}\n    50% {background-color: var(--secondary-100)}\n    to {background-color: transparent}\n}\n\n.modal-content .menu-navigation .nav-link.active {\n    cursor: default;\n}\n"],"sourceRoot":""}]);
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

/***/ "./your-extensions/widgets/oem-dashboard/src/runtime/ExportCSVComponent.tsx":
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/oem-dashboard/src/runtime/ExportCSVComponent.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");


/**
 * ExportCSVComponent creates a link and modal for users to export data
 */
class ExportCSVComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(props) {
        super(props);
        this.statuses = {
            "Initiated": {
                text: "Waiting for export",
                icon: "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/clock-24.svg"
            },
            "Re-checking": {
                text: "Export still in progress - Re-checking",
                icon: "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/clock-forward-24.svg"
            },
            "Completed": {
                text: "Export Done! Please see your downloads folder",
                icon: "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/check-circle-24-f.svg"
            },
            "Failed": {
                text: "Export failed",
                icon: "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/exclamation-mark-circle-24-f.svg"
            },
            "Canceled": {
                text: "Export canceled",
                icon: "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/circle-disallowed-24.svg"
            }
        };
        /**
         * Checks for status and returns text if status exists
         * @returns String
         */
        this.statusMessage = () => {
            let status = this.statuses[this.props.status];
            if (status) {
                return status.text;
            }
        };
        /**
         * Checks for status and returns url of icon if status exists
         * @returns String
         */
        this.statusIcon = () => {
            let status = this.statuses[this.props.status];
            if (status) {
                return status.icon;
            }
        };
        this.onClosed = () => {
            // Close the modal when the 'Cancel' button is clicked
            // Note: Use this.setState to update the state
            this.setState({ modalOpen: false });
        };
        /**
         * Trigger export data in widget
         */
        this.onExportData = () => {
            // Open the modal when export is triggered
            // Note: Use this.setState to update the state
            this.setState({ modalOpen: true });
            this.props.onExportData();
        };
        this.state = {
            modalOpen: false
        };
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { id: "export" },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { id: "export-link" },
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Link, { id: "layer-export-button", onClick: this.onExportData },
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/download-to-24.svg" }),
                    "Export layers as csv")),
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { id: "export-modal" },
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, { isOpen: this.state.modalOpen, toggle: this.onClosed, className: "export-status-modal" },
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalHeader, { toggle: this.onClosed }, "Export Status"),
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalBody, null,
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "export-status-message" },
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: this.statusIcon() }),
                            " ",
                            this.statusMessage())),
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, null,
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: this.onClosed }, "Close"))))));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExportCSVComponent);


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
        return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, { isOpen: this.props.open, onClosed: function noRefCheck() { }, onEnter: function noRefCheck() { }, onExit: function noRefCheck() { }, onOpened: this.onOpened, toggle: this.props.toggleOpen, backdropClassName: "layer-style-modal" },
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
/* harmony import */ var _esri_arcgis_rest_feature_layer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @esri/arcgis-rest-feature-layer */ "./node_modules/@esri/arcgis-rest-feature-layer/dist/esm/add.js");
/* harmony import */ var esri_identity_OAuthInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/identity/OAuthInfo */ "esri/identity/OAuthInfo");
/* harmony import */ var esri_identity_IdentityManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri/identity/IdentityManager */ "esri/identity/IdentityManager");
/* harmony import */ var _LayerComponent_LayerComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LayerComponent/LayerComponent */ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerComponent/LayerComponent.tsx");
/* harmony import */ var _SaveTemplateComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SaveTemplateComponent */ "./your-extensions/widgets/oem-dashboard/src/runtime/SaveTemplateComponent.tsx");
/* harmony import */ var _LayerListComponent_LayerListComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LayerListComponent/LayerListComponent */ "./your-extensions/widgets/oem-dashboard/src/runtime/LayerListComponent/LayerListComponent.tsx");
/* harmony import */ var _TemplateComponent_TemplateComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TemplateComponent/TemplateComponent */ "./your-extensions/widgets/oem-dashboard/src/runtime/TemplateComponent/TemplateComponent.tsx");
/* harmony import */ var _ExportCSVComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ExportCSVComponent */ "./your-extensions/widgets/oem-dashboard/src/runtime/ExportCSVComponent.tsx");
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
                        let response = yield (0,_esri_arcgis_rest_feature_layer__WEBPACK_IMPORTED_MODULE_14__.addFeatures)({
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
            let response = yield (0,_esri_arcgis_rest_feature_layer__WEBPACK_IMPORTED_MODULE_14__.addFeatures)({
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
                layerWrapper.layer.visible = true;
                try {
                    this.state.jimuMapView.view.map.add(layerWrapper.layer);
                    this.addHashParam(layerWrapper.id, "layers");
                }
                catch (e) {
                    alert("Error adding layer " + layerWrapper.title + "!");
                }
                this.setState(prevState => {
                    let activeLayers = [...prevState.activeLayers, layerWrapper];
                    return {
                        activeLayers: activeLayers
                    };
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
         * Uses extract data to export all layers in the scene
         */
        this.onExportData = () => __awaiter(this, void 0, void 0, function* () {
            if (!confirm("Export generates a csv of all layers listed above. Please proceed only if necessary. \n\nTo export these layers as a csv, click OK.\n\n To abort, click Cancel.")) {
                this.setState({ exportStatus: "Canceled" });
                return;
            }
            try {
                const inputLayerParams = this.buildInputLayerParams();
                const analysisURL = "https://analysis1.arcgis.com/arcgis/rest/services/tasks/GPServer/";
                const outputName = this.buildOutputName();
                const token = yield this.getToken();
                const extractDataUrl = encodeURI(`${analysisURL}ExtractData/submitJob?inputLayers=${JSON.stringify(inputLayerParams)}&f=json&outputName=${outputName}`);
                this.setState({ exportStatus: "Initiated" });
                const responseJson = yield this.fetchAnalysisApi(extractDataUrl, token);
                // The code below creates a dummy response with a jobId.To test the UX of the export without hitting the api,
                // comment out the line above, uncomment the following two lines, and supply a jobId from the most recent api call.
                // To get the jobId, run an export and search the Network tab for "analysis1". It will be in the payload.
                //   await this.delay(1000);
                //   const responseJson = {jobId: ""};
                const jobId = responseJson.jobId;
                const checkStatusUrl = `${analysisURL}ExtractData/jobs/${jobId}?f=json`;
                const apiWaitTime = 4000;
                yield this.delay(apiWaitTime);
                let statusJson = yield this.fetchAnalysisApi(checkStatusUrl, token);
                while (statusJson.jobStatus === "esriJobExecuting") {
                    // Continue checking the status every 4 seconds
                    this.setState({ exportStatus: "Re-checking" });
                    yield this.delay(apiWaitTime);
                    statusJson = yield this.fetchAnalysisApi(checkStatusUrl, token);
                }
                if (statusJson.jobStatus == "esriJobSucceeded") {
                    const contentUrl = `${analysisURL}ExtractData/jobs/${jobId}/results/contentID?&f=json`;
                    const contentResponseJson = yield this.fetchAnalysisApi(contentUrl, token);
                    if (contentResponseJson.value && contentResponseJson.value.url) {
                        // might turn this into a download link
                        this.setState({ exportStatus: "Completed" });
                        window.location = `${contentResponseJson.value.url}/data?token=${token}`;
                    }
                }
                else {
                    this.setState({ exportStatus: "Failed" });
                    console.log(contentResponseJson);
                }
            }
            catch (e) {
                this.setState({ exportStatus: "Failed" });
                console.error(e);
            }
            return;
        });
        /**
         * Using activeLayers, this iterates through them and adds them to the ExtractData url params
         * @returns string
         */
        this.buildInputLayerParams = () => {
            return this.state.activeLayers.map((layerWrapper) => {
                let url = layerWrapper.url;
                if (url.match(/FeatureServer\/?$/)) {
                    if (!url.endsWith('/')) {
                        url = url + '/';
                    }
                    url = url + layerWrapper.layer.layerId;
                }
                return { url };
            });
        };
        /**
         * Creates a unique name for the ExtractData file
         * @returns string
         */
        this.buildOutputName = () => {
            return '{"itemProperties":{"description":"Dataset extracted from OEM Dashboard.","snippet":"Dataset generated from Extract Data","title":"Scenario-Dashboard-ExtractedData-' + Date.now().toString() + '","folderId":""}}';
        };
        /**
         * Creates promise to delay for api wait time
         * @param ms
         * @returns Promise
         */
        this.delay = (ms) => __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => setTimeout(resolve, ms));
        });
        /**
         * Calls analysis api at given url endpoint
         * @param url
         * @param token
         * @returns JSON
         */
        this.fetchAnalysisApi = (url, token) => __awaiter(this, void 0, void 0, function* () {
            url = url + `&token=${token}`;
            const response = yield fetch(url);
            if (!response.ok) {
                this.setState({ exportStatus: "Api response error. Job stopped." });
                console.log("Error in response", response);
                return;
            }
            return yield response.json();
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
            exportStatus: ""
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
                react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "bottom-grid-item", className: "grid-item" },
                    react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_ExportCSVComponent__WEBPACK_IMPORTED_MODULE_13__["default"], { onExportData: this.onExportData, status: this.state.exportStatus })),
                    react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_SaveTemplateComponent__WEBPACK_IMPORTED_MODULE_10__["default"], { handleClick: this.saveTemplate, show: this.state.activeLayers.length > 0 }))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9vZW0tZGFzaGJvYXJkL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2lDO0FBQ2lEO0FBQ2xGO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0NBQW9DLGNBQWM7QUFDckUscUJBQXFCO0FBQ3JCLE1BQU07QUFDTixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGNBQWMsbUVBQVE7QUFDdEI7QUFDQSxrQkFBa0IsNkVBQWtCLHdGQUF3RixRQUFRLCtDQUFRLEdBQUcsMEJBQTBCO0FBQ3pLLFdBQVcsa0VBQU87QUFDbEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQixzQ0FBc0Msa0JBQWtCO0FBQ25GLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxjQUFjO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asb0NBQW9DO0FB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L2FyY2dpcy1yZXN0LWZlYXR1cmUtbGF5ZXIvZGlzdC9lc20vYWRkLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtZmVhdHVyZS1sYXllci9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9kaXN0L2VzbS9yZXF1ZXN0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9kaXN0L2VzbS91dGlscy9BcmNHSVNSZXF1ZXN0RXJyb3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0L2Rpc3QvZXNtL3V0aWxzL2FwcGVuZC1jdXN0b20tcGFyYW1zLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9kaXN0L2VzbS91dGlscy9jbGVhbi11cmwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0L2Rpc3QvZXNtL3V0aWxzL2VuY29kZS1mb3JtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0L2Rpc3QvZXNtL3V0aWxzL2VuY29kZS1xdWVyeS1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0L2Rpc3QvZXNtL3V0aWxzL3Byb2Nlc3MtcGFyYW1zLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9kaXN0L2VzbS91dGlscy93YXJuLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyQ29tcG9uZW50L0xheWVyQ29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvTGF5ZXJMaXN0Q29tcG9uZW50L0xheWVyTGlzdENvbXBvbmVudC5zY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL1RlbXBsYXRlQ29tcG9uZW50L1RlbXBsYXRlQ29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvV2lkZ2V0LnNjc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyQ29tcG9uZW50L0xheWVyQ29tcG9uZW50LnNjc3M/MDg3NiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9MYXllckxpc3RDb21wb25lbnQvTGF5ZXJMaXN0Q29tcG9uZW50LnNjc3M/NGJmZCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9UZW1wbGF0ZUNvbXBvbmVudC9UZW1wbGF0ZUNvbXBvbmVudC5zY3NzPzQ3NzYiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvV2lkZ2V0LnNjc3M/YTBhMiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0V4cG9ydENTVkNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvTGF5ZXJDb21wb25lbnQvQWRkTGF5ZXJJdGVtLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9MYXllckNvbXBvbmVudC9MYXllckNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvTGF5ZXJDb21wb25lbnQvTGF5ZXJTZWFyY2gudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyTGlzdENvbXBvbmVudC9MYXllckxpc3RCdXR0b25zLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9MYXllckxpc3RDb21wb25lbnQvTGF5ZXJMaXN0Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9MYXllckxpc3RDb21wb25lbnQvTGF5ZXJTdHlsZU1vZGFsLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9MYXllckxpc3RDb21wb25lbnQvTW9yZUluZm9Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvU2F2ZVRlbXBsYXRlQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9UZW1wbGF0ZUNvbXBvbmVudC9BY3RpdmVUZW1wbGF0ZXNNZW51LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9UZW1wbGF0ZUNvbXBvbmVudC9BZGRUZW1wbGF0ZUl0ZW0udHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL1RlbXBsYXRlQ29tcG9uZW50L1RlbXBsYXRlQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9UZW1wbGF0ZUNvbXBvbmVudC9UZW1wbGF0ZVNlYXJjaC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL0Jhc2VtYXBcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvQ29sb3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvY29yZS9yZWFjdGl2ZVV0aWxzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2lkZW50aXR5L0lkZW50aXR5TWFuYWdlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9pZGVudGl0eS9PQXV0aEluZm9cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvcmVuZGVyZXJzL1NpbXBsZVJlbmRlcmVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3N5bWJvbHMvU2ltcGxlTWFya2VyU3ltYm9sXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3dpZGdldHMvTGF5ZXJMaXN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2Jhc2ljL2NvbG9yLXBpY2tlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IChjKSAyMDE3IEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyByZXF1ZXN0LCBjbGVhblVybCwgYXBwZW5kQ3VzdG9tUGFyYW1zIH0gZnJvbSBcIkBlc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3RcIjtcbi8qKlxuICogYGBganNcbiAqIGltcG9ydCB7IGFkZEZlYXR1cmVzIH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtZmVhdHVyZS1sYXllcic7XG4gKiAvL1xuICogYWRkRmVhdHVyZXMoe1xuICogICB1cmw6IFwiaHR0cHM6Ly9zYW1wbGVzZXJ2ZXI2LmFyY2dpc29ubGluZS5jb20vYXJjZ2lzL3Jlc3Qvc2VydmljZXMvU2VydmljZVJlcXVlc3QvRmVhdHVyZVNlcnZlci8wXCIsXG4gKiAgIGZlYXR1cmVzOiBbe1xuICogICAgIGdlb21ldHJ5OiB7IHg6IC0xMjAsIHk6IDQ1LCBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfSB9LFxuICogICAgIGF0dHJpYnV0ZXM6IHsgc3RhdHVzOiBcImFsaXZlXCIgfVxuICogICB9XVxuICogfSlcbiAqICAgLnRoZW4ocmVzcG9uc2UpXG4gKiBgYGBcbiAqIEFkZCBmZWF0dXJlcyByZXF1ZXN0LiBTZWUgdGhlIFtSRVNUIERvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5hcmNnaXMuY29tL3Jlc3Qvc2VydmljZXMtcmVmZXJlbmNlL2FkZC1mZWF0dXJlcy5odG0pIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBwYXJhbSByZXF1ZXN0T3B0aW9ucyAtIE9wdGlvbnMgZm9yIHRoZSByZXF1ZXN0LlxuICogQHJldHVybnMgQSBQcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHdpdGggdGhlIGFkZEZlYXR1cmVzIHJlc3BvbnNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRmVhdHVyZXMocmVxdWVzdE9wdGlvbnMpIHtcbiAgICB2YXIgdXJsID0gY2xlYW5VcmwocmVxdWVzdE9wdGlvbnMudXJsKSArIFwiL2FkZEZlYXR1cmVzXCI7XG4gICAgLy8gZWRpdCBvcGVyYXRpb25zIGFyZSBQT1NUIG9ubHlcbiAgICB2YXIgb3B0aW9ucyA9IGFwcGVuZEN1c3RvbVBhcmFtcyhyZXF1ZXN0T3B0aW9ucywgW1wiZmVhdHVyZXNcIiwgXCJnZGJWZXJzaW9uXCIsIFwicmV0dXJuRWRpdE1vbWVudFwiLCBcInJvbGxiYWNrT25GYWlsdXJlXCJdLCB7IHBhcmFtczogX19hc3NpZ24oe30sIHJlcXVlc3RPcHRpb25zLnBhcmFtcykgfSk7XG4gICAgcmV0dXJuIHJlcXVlc3QodXJsLCBvcHRpb25zKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkZC5qcy5tYXAiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jcmVhdGVCaW5kaW5nKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBfX2Fzc2lnbiwgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBlbmNvZGVGb3JtRGF0YSB9IGZyb20gXCIuL3V0aWxzL2VuY29kZS1mb3JtLWRhdGFcIjtcbmltcG9ydCB7IGVuY29kZVF1ZXJ5U3RyaW5nIH0gZnJvbSBcIi4vdXRpbHMvZW5jb2RlLXF1ZXJ5LXN0cmluZ1wiO1xuaW1wb3J0IHsgcmVxdWlyZXNGb3JtRGF0YSB9IGZyb20gXCIuL3V0aWxzL3Byb2Nlc3MtcGFyYW1zXCI7XG5pbXBvcnQgeyBBcmNHSVNSZXF1ZXN0RXJyb3IgfSBmcm9tIFwiLi91dGlscy9BcmNHSVNSZXF1ZXN0RXJyb3JcIjtcbmltcG9ydCB7IHdhcm4gfSBmcm9tIFwiLi91dGlscy93YXJuXCI7XG5leHBvcnQgdmFyIE5PREVKU19ERUZBVUxUX1JFRkVSRVJfSEVBREVSID0gXCJAZXNyaS9hcmNnaXMtcmVzdC1qc1wiO1xudmFyIERFRkFVTFRfQVJDR0lTX1JFUVVFU1RfT1BUSU9OUyA9IHtcbiAgICBodHRwTWV0aG9kOiBcIlBPU1RcIixcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgZjogXCJqc29uXCIsXG4gICAgfSxcbn07XG4vKipcbiAqIFNldHMgdGhlIGRlZmF1bHQgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGluICoqYWxsIHJlcXVlc3RzIGFjcm9zcyBhbGwgYEBlc3JpL2FyY2dpcy1yZXN0LWpzYCBtb2R1bGVzKiouXG4gKlxuICpcbiAqIGBgYGpzXG4gKiBpbXBvcnQgeyBzZXREZWZhdWx0UmVxdWVzdE9wdGlvbnMgfSBmcm9tIFwiQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdFwiO1xuICogc2V0RGVmYXVsdFJlcXVlc3RPcHRpb25zKHtcbiAqICAgYXV0aGVudGljYXRpb246IHVzZXJTZXNzaW9uIC8vIGFsbCByZXF1ZXN0cyB3aWxsIHVzZSB0aGlzIHNlc3Npb24gYnkgZGVmYXVsdFxuICogfSlcbiAqIGBgYFxuICogWW91IHNob3VsZCAqKm5ldmVyKiogc2V0IGEgZGVmYXVsdCBgYXV0aGVudGljYXRpb25gIHdoZW4geW91IGFyZSBpbiBhIHNlcnZlciBzaWRlIGVudmlyb25tZW50IHdoZXJlIHlvdSBtYXkgYmUgaGFuZGxpbmcgcmVxdWVzdHMgZm9yIG1hbnkgZGlmZmVyZW50IGF1dGhlbnRpY2F0ZWQgdXNlcnMuXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgVGhlIGRlZmF1bHQgb3B0aW9ucyB0byBwYXNzIHdpdGggZXZlcnkgcmVxdWVzdC4gRXhpc3RpbmcgZGVmYXVsdCB3aWxsIGJlIG92ZXJ3cml0dGVuLlxuICogQHBhcmFtIGhpZGVXYXJuaW5ncyBTaWxlbmNlIHdhcm5pbmdzIGFib3V0IHNldHRpbmcgZGVmYXVsdCBgYXV0aGVudGljYXRpb25gIGluIHNoYXJlZCBlbnZpcm9ubWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0UmVxdWVzdE9wdGlvbnMob3B0aW9ucywgaGlkZVdhcm5pbmdzKSB7XG4gICAgaWYgKG9wdGlvbnMuYXV0aGVudGljYXRpb24gJiYgIWhpZGVXYXJuaW5ncykge1xuICAgICAgICB3YXJuKFwiWW91IHNob3VsZCBub3Qgc2V0IGBhdXRoZW50aWNhdGlvbmAgYXMgYSBkZWZhdWx0IGluIGEgc2hhcmVkIGVudmlyb25tZW50IHN1Y2ggYXMgYSB3ZWIgc2VydmVyIHdoaWNoIHdpbGwgcHJvY2VzcyBtdWx0aXBsZSB1c2VycyByZXF1ZXN0cy4gWW91IGNhbiBjYWxsIGBzZXREZWZhdWx0UmVxdWVzdE9wdGlvbnNgIHdpdGggYHRydWVgIGFzIGEgc2Vjb25kIGFyZ3VtZW50IHRvIGRpc2FibGUgdGhpcyB3YXJuaW5nLlwiKTtcbiAgICB9XG4gICAgREVGQVVMVF9BUkNHSVNfUkVRVUVTVF9PUFRJT05TID0gb3B0aW9ucztcbn1cbnZhciBBcmNHSVNBdXRoRXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFyY0dJU0F1dGhFcnJvciwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFyY0dJU0F1dGhFcnJvcmAgIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIGVycm9yIG1lc3NhZ2UgZnJvbSB0aGUgQVBJXG4gICAgICogQHBhcmFtIGNvZGUgLSBUaGUgZXJyb3IgY29kZSBmcm9tIHRoZSBBUElcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2UgLSBUaGUgb3JpZ2luYWwgcmVzcG9uc2UgZnJvbSB0aGUgQVBJIHRoYXQgY2F1c2VkIHRoZSBlcnJvclxuICAgICAqIEBwYXJhbSB1cmwgLSBUaGUgb3JpZ2luYWwgdXJsIG9mIHRoZSByZXF1ZXN0XG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3JpZ2luYWwgb3B0aW9ucyBvZiB0aGUgcmVxdWVzdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEFyY0dJU0F1dGhFcnJvcihtZXNzYWdlLCBjb2RlLCByZXNwb25zZSwgdXJsLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChtZXNzYWdlID09PSB2b2lkIDApIHsgbWVzc2FnZSA9IFwiQVVUSEVOVElDQVRJT05fRVJST1JcIjsgfVxuICAgICAgICBpZiAoY29kZSA9PT0gdm9pZCAwKSB7IGNvZGUgPSBcIkFVVEhFTlRJQ0FUSU9OX0VSUk9SX0NPREVcIjsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlLCBjb2RlLCByZXNwb25zZSwgdXJsLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5uYW1lID0gXCJBcmNHSVNBdXRoRXJyb3JcIjtcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9XG4gICAgICAgICAgICBjb2RlID09PSBcIkFVVEhFTlRJQ0FUSU9OX0VSUk9SX0NPREVcIiA/IG1lc3NhZ2UgOiBjb2RlICsgXCI6IFwiICsgbWVzc2FnZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBcmNHSVNBdXRoRXJyb3IucHJvdG90eXBlLnJldHJ5ID0gZnVuY3Rpb24gKGdldFNlc3Npb24sIHJldHJ5TGltaXQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHJldHJ5TGltaXQgPT09IHZvaWQgMCkgeyByZXRyeUxpbWl0ID0gMzsgfVxuICAgICAgICB2YXIgdHJpZXMgPSAwO1xuICAgICAgICB2YXIgcmV0cnlSZXF1ZXN0ID0gZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgZ2V0U2Vzc2lvbihfdGhpcy51cmwsIF90aGlzLm9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHNlc3Npb24pIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3T3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBfdGhpcy5vcHRpb25zKSwgeyBhdXRoZW50aWNhdGlvbjogc2Vzc2lvbiB9KTtcbiAgICAgICAgICAgICAgICB0cmllcyA9IHRyaWVzICsgMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdChfdGhpcy51cmwsIG5ld09wdGlvbnMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUubmFtZSA9PT0gXCJBcmNHSVNBdXRoRXJyb3JcIiAmJiB0cmllcyA8IHJldHJ5TGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0cnlSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGUubmFtZSA9PT0gXCJBcmNHSVNBdXRoRXJyb3JcIiAmJiB0cmllcyA+PSByZXRyeUxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChfdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXRyeVJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQXJjR0lTQXV0aEVycm9yO1xufShBcmNHSVNSZXF1ZXN0RXJyb3IpKTtcbmV4cG9ydCB7IEFyY0dJU0F1dGhFcnJvciB9O1xuLyoqXG4gKiBDaGVja3MgZm9yIGVycm9ycyBpbiBhIEpTT04gcmVzcG9uc2UgZnJvbSB0aGUgQXJjR0lTIFJFU1QgQVBJLiBJZiB0aGVyZSBhcmUgbm8gZXJyb3JzLCBpdCB3aWxsIHJldHVybiB0aGUgYGRhdGFgIHBhc3NlZCBpbi4gSWYgdGhlcmUgaXMgYW4gZXJyb3IsIGl0IHdpbGwgdGhyb3cgYW4gYEFyY0dJU1JlcXVlc3RFcnJvcmAgb3IgYEFyY0dJU0F1dGhFcnJvcmAuXG4gKlxuICogQHBhcmFtIGRhdGEgVGhlIHJlc3BvbnNlIEpTT04gdG8gY2hlY2sgZm9yIGVycm9ycy5cbiAqIEBwYXJhbSB1cmwgVGhlIHVybCBvZiB0aGUgb3JpZ2luYWwgcmVxdWVzdFxuICogQHBhcmFtIHBhcmFtcyBUaGUgcGFyYW1ldGVycyBvZiB0aGUgb3JpZ2luYWwgcmVxdWVzdFxuICogQHBhcmFtIG9wdGlvbnMgVGhlIG9wdGlvbnMgb2YgdGhlIG9yaWdpbmFsIHJlcXVlc3RcbiAqIEByZXR1cm5zIFRoZSBkYXRhIHRoYXQgd2FzIHBhc3NlZCBpbiB0aGUgYGRhdGFgIHBhcmFtZXRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGb3JFcnJvcnMocmVzcG9uc2UsIHVybCwgcGFyYW1zLCBvcHRpb25zLCBvcmlnaW5hbEF1dGhFcnJvcikge1xuICAgIC8vIHRoaXMgaXMgYW4gZXJyb3IgbWVzc2FnZSBmcm9tIGJpbGxpbmcuYXJjZ2lzLmNvbSBiYWNrZW5kXG4gICAgaWYgKHJlc3BvbnNlLmNvZGUgPj0gNDAwKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gcmVzcG9uc2UubWVzc2FnZSwgY29kZSA9IHJlc3BvbnNlLmNvZGU7XG4gICAgICAgIHRocm93IG5ldyBBcmNHSVNSZXF1ZXN0RXJyb3IobWVzc2FnZSwgY29kZSwgcmVzcG9uc2UsIHVybCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIGVycm9yIGZyb20gQXJjR0lTIE9ubGluZSBvciBhbiBBcmNHSVMgUG9ydGFsIG9yIHNlcnZlciBpbnN0YW5jZS5cbiAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgdmFyIF9hID0gcmVzcG9uc2UuZXJyb3IsIG1lc3NhZ2UgPSBfYS5tZXNzYWdlLCBjb2RlID0gX2EuY29kZSwgbWVzc2FnZUNvZGUgPSBfYS5tZXNzYWdlQ29kZTtcbiAgICAgICAgdmFyIGVycm9yQ29kZSA9IG1lc3NhZ2VDb2RlIHx8IGNvZGUgfHwgXCJVTktOT1dOX0VSUk9SX0NPREVcIjtcbiAgICAgICAgaWYgKGNvZGUgPT09IDQ5OCB8fFxuICAgICAgICAgICAgY29kZSA9PT0gNDk5IHx8XG4gICAgICAgICAgICBtZXNzYWdlQ29kZSA9PT0gXCJHV01fMDAwM1wiIHx8XG4gICAgICAgICAgICAoY29kZSA9PT0gNDAwICYmIG1lc3NhZ2UgPT09IFwiVW5hYmxlIHRvIGdlbmVyYXRlIHRva2VuLlwiKSkge1xuICAgICAgICAgICAgaWYgKG9yaWdpbmFsQXV0aEVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgb3JpZ2luYWxBdXRoRXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQXJjR0lTQXV0aEVycm9yKG1lc3NhZ2UsIGVycm9yQ29kZSwgcmVzcG9uc2UsIHVybCwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEFyY0dJU1JlcXVlc3RFcnJvcihtZXNzYWdlLCBlcnJvckNvZGUsIHJlc3BvbnNlLCB1cmwsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBlcnJvciBmcm9tIGEgc3RhdHVzIGNoZWNrXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJmYWlsZWRcIiB8fCByZXNwb25zZS5zdGF0dXMgPT09IFwiZmFpbHVyZVwiKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gdm9pZCAwO1xuICAgICAgICB2YXIgY29kZSA9IFwiVU5LTk9XTl9FUlJPUl9DT0RFXCI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gSlNPTi5wYXJzZShyZXNwb25zZS5zdGF0dXNNZXNzYWdlKS5tZXNzYWdlO1xuICAgICAgICAgICAgY29kZSA9IEpTT04ucGFyc2UocmVzcG9uc2Uuc3RhdHVzTWVzc2FnZSkuY29kZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IHJlc3BvbnNlLnN0YXR1c01lc3NhZ2UgfHwgcmVzcG9uc2UubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgQXJjR0lTUmVxdWVzdEVycm9yKG1lc3NhZ2UsIGNvZGUsIHJlc3BvbnNlLCB1cmwsIG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG59XG4vKipcbiAqIGBgYGpzXG4gKiBpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdCc7XG4gKiAvL1xuICogcmVxdWVzdCgnaHR0cHM6Ly93d3cuYXJjZ2lzLmNvbS9zaGFyaW5nL3Jlc3QnKVxuICogICAudGhlbihyZXNwb25zZSkgLy8gcmVzcG9uc2UuY3VycmVudFZlcnNpb24gPT09IDUuMlxuICogLy9cbiAqIHJlcXVlc3QoJ2h0dHBzOi8vd3d3LmFyY2dpcy5jb20vc2hhcmluZy9yZXN0Jywge1xuICogICBodHRwTWV0aG9kOiBcIkdFVFwiXG4gKiB9KVxuICogLy9cbiAqIHJlcXVlc3QoJ2h0dHBzOi8vd3d3LmFyY2dpcy5jb20vc2hhcmluZy9yZXN0L3NlYXJjaCcsIHtcbiAqICAgcGFyYW1zOiB7IHE6ICdwYXJrcycgfVxuICogfSlcbiAqICAgLnRoZW4ocmVzcG9uc2UpIC8vIHJlc3BvbnNlLnRvdGFsID0+IDc4Mzc5XG4gKiBgYGBcbiAqIEdlbmVyaWMgbWV0aG9kIGZvciBtYWtpbmcgSFRUUCByZXF1ZXN0cyB0byBBcmNHSVMgUkVTVCBBUEkgZW5kcG9pbnRzLlxuICpcbiAqIEBwYXJhbSB1cmwgLSBUaGUgVVJMIG9mIHRoZSBBcmNHSVMgUkVTVCBBUEkgZW5kcG9pbnQuXG4gKiBAcGFyYW0gcmVxdWVzdE9wdGlvbnMgLSBPcHRpb25zIGZvciB0aGUgcmVxdWVzdCwgaW5jbHVkaW5nIHBhcmFtZXRlcnMgcmVsZXZhbnQgdG8gdGhlIGVuZHBvaW50LlxuICogQHJldHVybnMgQSBQcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHdpdGggdGhlIGRhdGEgZnJvbSB0aGUgcmVzcG9uc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0KHVybCwgcmVxdWVzdE9wdGlvbnMpIHtcbiAgICBpZiAocmVxdWVzdE9wdGlvbnMgPT09IHZvaWQgMCkgeyByZXF1ZXN0T3B0aW9ucyA9IHsgcGFyYW1zOiB7IGY6IFwianNvblwiIH0gfTsgfVxuICAgIHZhciBvcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oeyBodHRwTWV0aG9kOiBcIlBPU1RcIiB9LCBERUZBVUxUX0FSQ0dJU19SRVFVRVNUX09QVElPTlMpLCByZXF1ZXN0T3B0aW9ucyksIHtcbiAgICAgICAgcGFyYW1zOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgREVGQVVMVF9BUkNHSVNfUkVRVUVTVF9PUFRJT05TLnBhcmFtcyksIHJlcXVlc3RPcHRpb25zLnBhcmFtcyksXG4gICAgICAgIGhlYWRlcnM6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBERUZBVUxUX0FSQ0dJU19SRVFVRVNUX09QVElPTlMuaGVhZGVycyksIHJlcXVlc3RPcHRpb25zLmhlYWRlcnMpLFxuICAgIH0pO1xuICAgIHZhciBtaXNzaW5nR2xvYmFscyA9IFtdO1xuICAgIHZhciByZWNvbW1lbmRlZFBhY2thZ2VzID0gW107XG4gICAgLy8gZG9uJ3QgY2hlY2sgZm9yIGEgZ2xvYmFsIGZldGNoIGlmIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uIHdhcyBwYXNzZWQgdGhyb3VnaFxuICAgIGlmICghb3B0aW9ucy5mZXRjaCAmJiB0eXBlb2YgZmV0Y2ggIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgb3B0aW9ucy5mZXRjaCA9IGZldGNoLmJpbmQoRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1pc3NpbmdHbG9iYWxzLnB1c2goXCJgZmV0Y2hgXCIpO1xuICAgICAgICByZWNvbW1lbmRlZFBhY2thZ2VzLnB1c2goXCJgbm9kZS1mZXRjaGBcIik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgUHJvbWlzZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBtaXNzaW5nR2xvYmFscy5wdXNoKFwiYFByb21pc2VgXCIpO1xuICAgICAgICByZWNvbW1lbmRlZFBhY2thZ2VzLnB1c2goXCJgZXM2LXByb21pc2VgXCIpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIEZvcm1EYXRhID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIG1pc3NpbmdHbG9iYWxzLnB1c2goXCJgRm9ybURhdGFgXCIpO1xuICAgICAgICByZWNvbW1lbmRlZFBhY2thZ2VzLnB1c2goXCJgaXNvbW9ycGhpYy1mb3JtLWRhdGFgXCIpO1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMuZmV0Y2ggfHxcbiAgICAgICAgdHlwZW9mIFByb21pc2UgPT09IFwidW5kZWZpbmVkXCIgfHxcbiAgICAgICAgdHlwZW9mIEZvcm1EYXRhID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImBhcmNnaXMtcmVzdC1yZXF1ZXN0YCByZXF1aXJlcyBhIGBmZXRjaGAgaW1wbGVtZW50YXRpb24gYW5kIGdsb2JhbCB2YXJpYWJsZXMgZm9yIGBQcm9taXNlYCBhbmQgYEZvcm1EYXRhYCB0byBiZSBwcmVzZW50IGluIHRoZSBnbG9iYWwgc2NvcGUuIFlvdSBhcmUgbWlzc2luZyBcIiArIG1pc3NpbmdHbG9iYWxzLmpvaW4oXCIsIFwiKSArIFwiLiBXZSByZWNvbW1lbmQgaW5zdGFsbGluZyB0aGUgXCIgKyByZWNvbW1lbmRlZFBhY2thZ2VzLmpvaW4oXCIsIFwiKSArIFwiIG1vZHVsZXMgYXQgdGhlIHJvb3Qgb2YgeW91ciBhcHBsaWNhdGlvbiB0byBhZGQgdGhlc2UgdG8gdGhlIGdsb2JhbCBzY29wZS4gU2VlIGh0dHBzOi8vYml0Lmx5LzJLTndXYUogZm9yIG1vcmUgaW5mby5cIik7XG4gICAgfVxuICAgIHZhciBodHRwTWV0aG9kID0gb3B0aW9ucy5odHRwTWV0aG9kLCBhdXRoZW50aWNhdGlvbiA9IG9wdGlvbnMuYXV0aGVudGljYXRpb24sIHJhd1Jlc3BvbnNlID0gb3B0aW9ucy5yYXdSZXNwb25zZTtcbiAgICB2YXIgcGFyYW1zID0gX19hc3NpZ24oeyBmOiBcImpzb25cIiB9LCBvcHRpb25zLnBhcmFtcyk7XG4gICAgdmFyIG9yaWdpbmFsQXV0aEVycm9yID0gbnVsbDtcbiAgICB2YXIgZmV0Y2hPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6IGh0dHBNZXRob2QsXG4gICAgICAgIC8qIGVuc3VyZXMgYmVoYXZpb3IgbWltaWNzIFhNTEh0dHBSZXF1ZXN0LlxuICAgICAgICBuZWVkZWQgdG8gc3VwcG9ydCBzZW5kaW5nIElXQSBjb29raWVzICovXG4gICAgICAgIGNyZWRlbnRpYWxzOiBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IFwic2FtZS1vcmlnaW5cIixcbiAgICB9O1xuICAgIC8vIHRoZSAvb2F1dGgyL3BsYXRmb3JtU2VsZiByb3V0ZSB3aWxsIGFkZCBYLUVzcmktQXV0aC1DbGllbnQtSWQgaGVhZGVyXG4gICAgLy8gYW5kIHRoYXQgcmVxdWVzdCBuZWVkcyB0byBzZW5kIGNvb2tpZXMgY3Jvc3MgZG9tYWluXG4gICAgLy8gc28gd2UgbmVlZCB0byBzZXQgdGhlIGNyZWRlbnRpYWxzIHRvIFwiaW5jbHVkZVwiXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVycyAmJlxuICAgICAgICBvcHRpb25zLmhlYWRlcnNbXCJYLUVzcmktQXV0aC1DbGllbnQtSWRcIl0gJiZcbiAgICAgICAgdXJsLmluZGV4T2YoXCIvb2F1dGgyL3BsYXRmb3JtU2VsZlwiKSA+IC0xKSB7XG4gICAgICAgIGZldGNoT3B0aW9ucy5jcmVkZW50aWFscyA9IFwiaW5jbHVkZVwiO1xuICAgIH1cbiAgICByZXR1cm4gKGF1dGhlbnRpY2F0aW9uXG4gICAgICAgID8gYXV0aGVudGljYXRpb24uZ2V0VG9rZW4odXJsLCB7IGZldGNoOiBvcHRpb25zLmZldGNoIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogYXBwZW5kIG9yaWdpbmFsIHJlcXVlc3QgdXJsIGFuZCByZXF1ZXN0T3B0aW9uc1xuICAgICAgICAgICAgICogdG8gdGhlIGVycm9yIHRocm93biBieSBnZXRUb2tlbigpXG4gICAgICAgICAgICAgKiB0byBhc3Npc3Qgd2l0aCByZXRyeWluZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBlcnIudXJsID0gdXJsO1xuICAgICAgICAgICAgZXJyLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBpZiBhbiBhdHRlbXB0IGlzIG1hZGUgdG8gdGFsayB0byBhbiB1bmZlZGVyYXRlZCBzZXJ2ZXJcbiAgICAgICAgICAgICAqIGZpcnN0IHRyeSB0aGUgcmVxdWVzdCBhbm9ueW1vdXNseS4gaWYgYSAndG9rZW4gcmVxdWlyZWQnXG4gICAgICAgICAgICAgKiBlcnJvciBpcyB0aHJvd24sIHRocm93IHRoZSBVTkZFREVSQVRFRCBlcnJvciB0aGVuLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvcmlnaW5hbEF1dGhFcnJvciA9IGVycjtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXCJcIik7XG4gICAgICAgIH0pXG4gICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKFwiXCIpKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHRva2VuLmxlbmd0aCkge1xuICAgICAgICAgICAgcGFyYW1zLnRva2VuID0gdG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF1dGhlbnRpY2F0aW9uICYmIGF1dGhlbnRpY2F0aW9uLmdldERvbWFpbkNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMuY3JlZGVudGlhbHMgPSBhdXRoZW50aWNhdGlvbi5nZXREb21haW5DcmVkZW50aWFscyh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEN1c3RvbSBoZWFkZXJzIHRvIGFkZCB0byByZXF1ZXN0LiBJUmVxdWVzdE9wdGlvbnMuaGVhZGVycyB3aXRoIG1lcmdlIG92ZXIgcmVxdWVzdEhlYWRlcnMuXG4gICAgICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IHt9O1xuICAgICAgICBpZiAoZmV0Y2hPcHRpb25zLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgICAgICAgICAgLy8gUHJldmVudHMgdG9rZW4gZnJvbSBiZWluZyBwYXNzZWQgaW4gcXVlcnkgcGFyYW1zIHdoZW4gaGlkZVRva2VuIG9wdGlvbiBpcyB1c2VkLlxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gd2luZG93IGlzIGFsd2F5cyBkZWZpbmVkIGluIGEgYnJvd3Nlci4gVGVzdCBjYXNlIGlzIGNvdmVyZWQgYnkgSmFzbWluZSBpbiBub2RlIHRlc3QgKi9cbiAgICAgICAgICAgIGlmIChwYXJhbXMudG9rZW4gJiZcbiAgICAgICAgICAgICAgICBvcHRpb25zLmhpZGVUb2tlbiAmJlxuICAgICAgICAgICAgICAgIC8vIFNoYXJpbmcgQVBJIGRvZXMgbm90IHN1cHBvcnQgcHJlZmxpZ2h0IGNoZWNrIHJlcXVpcmVkIGJ5IG1vZGVybiBicm93c2VycyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0dsb3NzYXJ5L1ByZWZsaWdodF9yZXF1ZXN0XG4gICAgICAgICAgICAgICAgdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RIZWFkZXJzW1wiWC1Fc3JpLUF1dGhvcml6YXRpb25cIl0gPSBcIkJlYXJlciBcIiArIHBhcmFtcy50b2tlbjtcbiAgICAgICAgICAgICAgICBkZWxldGUgcGFyYW1zLnRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZW5jb2RlIHRoZSBwYXJhbWV0ZXJzIGludG8gdGhlIHF1ZXJ5IHN0cmluZ1xuICAgICAgICAgICAgdmFyIHF1ZXJ5UGFyYW1zID0gZW5jb2RlUXVlcnlTdHJpbmcocGFyYW1zKTtcbiAgICAgICAgICAgIC8vIGRvbnQgYXBwZW5kIGEgJz8nIHVubGVzcyBwYXJhbWV0ZXJzIGFyZSBhY3R1YWxseSBwcmVzZW50XG4gICAgICAgICAgICB2YXIgdXJsV2l0aFF1ZXJ5U3RyaW5nID0gcXVlcnlQYXJhbXMgPT09IFwiXCIgPyB1cmwgOiB1cmwgKyBcIj9cIiArIGVuY29kZVF1ZXJ5U3RyaW5nKHBhcmFtcyk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAvLyBUaGlzIHdvdWxkIGV4Y2VlZCB0aGUgbWF4aW11bSBsZW5ndGggZm9yIFVSTHMgc3BlY2lmaWVkIGJ5IHRoZSBjb25zdW1lciBhbmQgcmVxdWlyZXMgUE9TVFxuICAgICAgICAgICAgKG9wdGlvbnMubWF4VXJsTGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgdXJsV2l0aFF1ZXJ5U3RyaW5nLmxlbmd0aCA+IG9wdGlvbnMubWF4VXJsTGVuZ3RoKSB8fFxuICAgICAgICAgICAgICAgIC8vIE9yIGlmIHRoZSBjdXN0b21lciByZXF1aXJlcyB0aGUgdG9rZW4gdG8gYmUgaGlkZGVuIGFuZCBpdCBoYXMgbm90IGFscmVhZHkgYmVlbiBoaWRkZW4gaW4gdGhlIGhlYWRlciAoZm9yIGJyb3dzZXJzKVxuICAgICAgICAgICAgICAgIChwYXJhbXMudG9rZW4gJiYgb3B0aW9ucy5oaWRlVG9rZW4pKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIGNvbnN1bWVyIHNwZWNpZmllZCBhIG1heGltdW0gbGVuZ3RoIGZvciBVUkxzXG4gICAgICAgICAgICAgICAgLy8gYW5kIHRoaXMgd291bGQgZXhjZWVkIGl0LCBzbyB1c2UgcG9zdCBpbnN0ZWFkXG4gICAgICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9IFwiUE9TVFwiO1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0b2tlbiB3YXMgYWxyZWFkeSBhZGRlZCBhcyBhIEF1dGggaGVhZGVyLCBhZGQgdGhlIHRva2VuIGJhY2sgdG8gYm9keSB3aXRoIG90aGVyIHBhcmFtcyBpbnN0ZWFkIG9mIGhlYWRlclxuICAgICAgICAgICAgICAgIGlmICh0b2tlbi5sZW5ndGggJiYgb3B0aW9ucy5oaWRlVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBleGlzdGluZyBoZWFkZXIgdGhhdCB3YXMgYWRkZWQgYmVmb3JlIHVybCBxdWVyeSBsZW5ndGggd2FzIGNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW1wiWC1Fc3JpLUF1dGhvcml6YXRpb25cIl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8ganVzdCB1c2UgR0VUXG4gICAgICAgICAgICAgICAgdXJsID0gdXJsV2l0aFF1ZXJ5U3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qIHVwZGF0ZVJlc291cmNlcyBjdXJyZW50bHkgcmVxdWlyZXMgRm9ybURhdGEgZXZlbiB3aGVuIHRoZSBpbnB1dCBwYXJhbWV0ZXJzIGRvbnQgd2FycmFudCBpdC5cbiAgICBodHRwczovL2RldmVsb3BlcnMuYXJjZ2lzLmNvbS9yZXN0L3VzZXJzLWdyb3Vwcy1hbmQtaXRlbXMvdXBkYXRlLXJlc291cmNlcy5odG1cbiAgICAgICAgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2FyY2dpcy1yZXN0LWpzL3B1bGwvNTAwIGZvciBtb3JlIGluZm8uICovXG4gICAgICAgIHZhciBmb3JjZUZvcm1EYXRhID0gbmV3IFJlZ0V4cChcIi9pdGVtcy8uKy91cGRhdGVSZXNvdXJjZXNcIikudGVzdCh1cmwpO1xuICAgICAgICBpZiAoZmV0Y2hPcHRpb25zLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5ib2R5ID0gZW5jb2RlRm9ybURhdGEocGFyYW1zLCBmb3JjZUZvcm1EYXRhKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNaXhpbiBoZWFkZXJzIGZyb20gcmVxdWVzdCBvcHRpb25zXG4gICAgICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlcXVlc3RIZWFkZXJzKSwgb3B0aW9ucy5oZWFkZXJzKTtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBrYXJtYSByZXBvcnRzIGNvdmVyYWdlIG9uIGJyb3dzZXIgdGVzdHMgb25seSAqL1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiAmJiAhZmV0Y2hPcHRpb25zLmhlYWRlcnMucmVmZXJlcikge1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnMucmVmZXJlciA9IE5PREVKU19ERUZBVUxUX1JFRkVSRVJfSEVBREVSO1xuICAgICAgICB9XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlIGJsb2IgcmVzcG9uc2VzIGFyZSBkaWZmaWN1bHQgdG8gbWFrZSBjcm9zcyBwbGF0Zm9ybSB3ZSB3aWxsIGp1c3QgaGF2ZSB0byB0cnVzdCB0aGUgaXNvbW9ycGhpYyBmZXRjaCB3aWxsIGRvIGl0cyBqb2IgKi9cbiAgICAgICAgaWYgKCFyZXF1aXJlc0Zvcm1EYXRhKHBhcmFtcykgJiYgIWZvcmNlRm9ybURhdGEpIHtcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID1cbiAgICAgICAgICAgICAgICBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zLmZldGNoKHVybCwgZmV0Y2hPcHRpb25zKTtcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgLy8gc2VydmVyIHJlc3BvbmRlZCB3LyBhbiBhY3R1YWwgZXJyb3IgKDQwNCwgNTAwLCBldGMpXG4gICAgICAgICAgICB2YXIgc3RhdHVzXzEgPSByZXNwb25zZS5zdGF0dXMsIHN0YXR1c1RleHQgPSByZXNwb25zZS5zdGF0dXNUZXh0O1xuICAgICAgICAgICAgdGhyb3cgbmV3IEFyY0dJU1JlcXVlc3RFcnJvcihzdGF0dXNUZXh0LCBcIkhUVFAgXCIgKyBzdGF0dXNfMSwgcmVzcG9uc2UsIHVybCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhd1Jlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChwYXJhbXMuZikge1xuICAgICAgICAgICAgY2FzZSBcImpzb25cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY2FzZSBcImdlb2pzb25cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY2FzZSBcImh0bWxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgY2FzZSBcInRleHRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgYmxvYiByZXNwb25zZXMgYXJlIGRpZmZpY3VsdCB0byBtYWtlIGNyb3NzIHBsYXRmb3JtIHdlIHdpbGwganVzdCBoYXZlIHRvIHRydXN0IHRoYXQgaXNvbW9ycGhpYyBmZXRjaCB3aWxsIGRvIGl0cyBqb2IgKi9cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmICgocGFyYW1zLmYgPT09IFwianNvblwiIHx8IHBhcmFtcy5mID09PSBcImdlb2pzb25cIikgJiYgIXJhd1Jlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBjaGVja0ZvckVycm9ycyhkYXRhLCB1cmwsIHBhcmFtcywgb3B0aW9ucywgb3JpZ2luYWxBdXRoRXJyb3IpO1xuICAgICAgICAgICAgaWYgKG9yaWdpbmFsQXV0aEVycm9yKSB7XG4gICAgICAgICAgICAgICAgLyogSWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgdG8gYW4gdW5mZWRlcmF0ZWQgc2VydmljZSB0aGF0XG4gICAgICAgICAgICAgICAgZGlkbid0IHJlcXVpcmUgYXV0aGVudGljYXRpb24sIGFkZCB0aGUgYmFzZSB1cmwgYW5kIGEgZHVtbXkgdG9rZW5cbiAgICAgICAgICAgICAgICB0byB0aGUgbGlzdCBvZiB0cnVzdGVkIHNlcnZlcnMgdG8gYXZvaWQgYW5vdGhlciBmZWRlcmF0aW9uIGNoZWNrXG4gICAgICAgICAgICAgICAgaW4gdGhlIGV2ZW50IG9mIGEgcmVwZWF0IHJlcXVlc3QgKi9cbiAgICAgICAgICAgICAgICB2YXIgdHJ1bmNhdGVkVXJsID0gdXJsXG4gICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdCgvXFwvcmVzdChcXC9hZG1pbik/XFwvc2VydmljZXNcXC8vKVswXTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmF1dGhlbnRpY2F0aW9uLmZlZGVyYXRlZFNlcnZlcnNbdHJ1bmNhdGVkVXJsXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IFtdLFxuICAgICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IHRvIDI0IGhvdXJzXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXM6IG5ldyBEYXRlKERhdGUubm93KCkgKyA4NjQwMCAqIDEwMDApLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxBdXRoRXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QuanMubWFwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE3IEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbi8vIFR5cGVTY3JpcHQgMi4xIG5vIGxvbmdlciBhbGxvd3MgeW91IHRvIGV4dGVuZCBidWlsdCBpbiB0eXBlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTI3OTAjaXNzdWVjb21tZW50LTI2NTk4MTQ0MlxuLy8gYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC13aWtpL2Jsb2IvbWFzdGVyL0JyZWFraW5nLUNoYW5nZXMubWQjZXh0ZW5kaW5nLWJ1aWx0LWlucy1saWtlLWVycm9yLWFycmF5LWFuZC1tYXAtbWF5LW5vLWxvbmdlci13b3JrXG4vL1xuLy8gVGhpcyBjb2RlIGlzIGZyb20gTUROIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0Vycm9yI0N1c3RvbV9FcnJvcl9UeXBlcy5cbnZhciBBcmNHSVNSZXF1ZXN0RXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBcmNHSVNSZXF1ZXN0RXJyb3JgICBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBlcnJvciBtZXNzYWdlIGZyb20gdGhlIEFQSVxuICAgICAqIEBwYXJhbSBjb2RlIC0gVGhlIGVycm9yIGNvZGUgZnJvbSB0aGUgQVBJXG4gICAgICogQHBhcmFtIHJlc3BvbnNlIC0gVGhlIG9yaWdpbmFsIHJlc3BvbnNlIGZyb20gdGhlIEFQSSB0aGF0IGNhdXNlZCB0aGUgZXJyb3JcbiAgICAgKiBAcGFyYW0gdXJsIC0gVGhlIG9yaWdpbmFsIHVybCBvZiB0aGUgcmVxdWVzdFxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9yaWdpbmFsIG9wdGlvbnMgYW5kIHBhcmFtZXRlcnMgb2YgdGhlIHJlcXVlc3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBBcmNHSVNSZXF1ZXN0RXJyb3IobWVzc2FnZSwgY29kZSwgcmVzcG9uc2UsIHVybCwgb3B0aW9ucykge1xuICAgICAgICBtZXNzYWdlID0gbWVzc2FnZSB8fCBcIlVOS05PV05fRVJST1JcIjtcbiAgICAgICAgY29kZSA9IGNvZGUgfHwgXCJVTktOT1dOX0VSUk9SX0NPREVcIjtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJBcmNHSVNSZXF1ZXN0RXJyb3JcIjtcbiAgICAgICAgdGhpcy5tZXNzYWdlID1cbiAgICAgICAgICAgIGNvZGUgPT09IFwiVU5LTk9XTl9FUlJPUl9DT0RFXCIgPyBtZXNzYWdlIDogY29kZSArIFwiOiBcIiArIG1lc3NhZ2U7XG4gICAgICAgIHRoaXMub3JpZ2luYWxNZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgcmV0dXJuIEFyY0dJU1JlcXVlc3RFcnJvcjtcbn0oKSk7XG5leHBvcnQgeyBBcmNHSVNSZXF1ZXN0RXJyb3IgfTtcbkFyY0dJU1JlcXVlc3RFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5BcmNHSVNSZXF1ZXN0RXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQXJjR0lTUmVxdWVzdEVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXJjR0lTUmVxdWVzdEVycm9yLmpzLm1hcCIsIi8qIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG4vKipcbiAqIEhlbHBlciBmb3IgbWV0aG9kcyB3aXRoIGxvdHMgb2YgZmlyc3Qgb3JkZXIgcmVxdWVzdCBvcHRpb25zIHRvIHBhc3MgdGhyb3VnaCBhcyByZXF1ZXN0IHBhcmFtZXRlcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDdXN0b21QYXJhbXMoY3VzdG9tT3B0aW9ucywga2V5cywgYmFzZU9wdGlvbnMpIHtcbiAgICB2YXIgcmVxdWVzdE9wdGlvbnNLZXlzID0gW1xuICAgICAgICBcInBhcmFtc1wiLFxuICAgICAgICBcImh0dHBNZXRob2RcIixcbiAgICAgICAgXCJyYXdSZXNwb25zZVwiLFxuICAgICAgICBcImF1dGhlbnRpY2F0aW9uXCIsXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIFwiZmV0Y2hcIixcbiAgICAgICAgXCJtYXhVcmxMZW5ndGhcIixcbiAgICAgICAgXCJoZWFkZXJzXCJcbiAgICBdO1xuICAgIHZhciBvcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oeyBwYXJhbXM6IHt9IH0sIGJhc2VPcHRpb25zKSwgY3VzdG9tT3B0aW9ucyk7XG4gICAgLy8gbWVyZ2UgYWxsIGtleXMgaW4gY3VzdG9tT3B0aW9ucyBpbnRvIG9wdGlvbnMucGFyYW1zXG4gICAgb3B0aW9ucy5wYXJhbXMgPSBrZXlzLnJlZHVjZShmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBpZiAoY3VzdG9tT3B0aW9uc1trZXldIHx8IHR5cGVvZiBjdXN0b21PcHRpb25zW2tleV0gPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB2YWx1ZVtrZXldID0gY3VzdG9tT3B0aW9uc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LCBvcHRpb25zLnBhcmFtcyk7XG4gICAgLy8gbm93IHJlbW92ZSBhbGwgcHJvcGVydGllcyBpbiBvcHRpb25zIHRoYXQgZG9uJ3QgZXhpc3QgaW4gSVJlcXVlc3RPcHRpb25zXG4gICAgcmV0dXJuIHJlcXVlc3RPcHRpb25zS2V5cy5yZWR1Y2UoZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKG9wdGlvbnNba2V5XSkge1xuICAgICAgICAgICAgdmFsdWVba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSwge30pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwZW5kLWN1c3RvbS1wYXJhbXMuanMubWFwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE4IEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbi8qKlxuICogSGVscGVyIG1ldGhvZCB0byBlbnN1cmUgdGhhdCB1c2VyIHN1cHBsaWVkIHVybHMgZG9uJ3QgaW5jbHVkZSB3aGl0ZXNwYWNlIG9yIGEgdHJhaWxpbmcgc2xhc2guXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhblVybCh1cmwpIHtcbiAgICAvLyBHdWFyZCBzbyB3ZSBkb24ndCB0cnkgdG8gdHJpbSBzb21ldGhpbmcgdGhhdCdzIG5vdCBhIHN0cmluZ1xuICAgIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIC8vIHRyaW0gbGVhZGluZyBhbmQgdHJhaWxpbmcgc3BhY2VzLCBidXQgbm90IHNwYWNlcyBpbnNpZGUgdGhlIHVybFxuICAgIHVybCA9IHVybC50cmltKCk7XG4gICAgLy8gcmVtb3ZlIHRoZSB0cmFpbGluZyBzbGFzaCB0byB0aGUgdXJsIGlmIG9uZSB3YXMgaW5jbHVkZWRcbiAgICBpZiAodXJsW3VybC5sZW5ndGggLSAxXSA9PT0gXCIvXCIpIHtcbiAgICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIC0xKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsZWFuLXVybC5qcy5tYXAiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTcgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHsgcHJvY2Vzc1BhcmFtcywgcmVxdWlyZXNGb3JtRGF0YSB9IGZyb20gXCIuL3Byb2Nlc3MtcGFyYW1zXCI7XG5pbXBvcnQgeyBlbmNvZGVRdWVyeVN0cmluZyB9IGZyb20gXCIuL2VuY29kZS1xdWVyeS1zdHJpbmdcIjtcbi8qKlxuICogRW5jb2RlcyBwYXJhbWV0ZXJzIGluIGEgW0Zvcm1EYXRhXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRm9ybURhdGEpIG9iamVjdCBpbiBicm93c2VycyBvciBpbiBhIFtGb3JtRGF0YV0oaHR0cHM6Ly9naXRodWIuY29tL2Zvcm0tZGF0YS9mb3JtLWRhdGEpIGluIE5vZGUuanNcbiAqXG4gKiBAcGFyYW0gcGFyYW1zIEFuIG9iamVjdCB0byBiZSBlbmNvZGVkLlxuICogQHJldHVybnMgVGhlIGNvbXBsZXRlIFtGb3JtRGF0YV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Zvcm1EYXRhKSBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVGb3JtRGF0YShwYXJhbXMsIGZvcmNlRm9ybURhdGEpIHtcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvYXJjZ2lzLXJlc3QtanMvaXNzdWVzLzQ5OSBmb3IgbW9yZSBpbmZvLlxuICAgIHZhciB1c2VGb3JtRGF0YSA9IHJlcXVpcmVzRm9ybURhdGEocGFyYW1zKSB8fCBmb3JjZUZvcm1EYXRhO1xuICAgIHZhciBuZXdQYXJhbXMgPSBwcm9jZXNzUGFyYW1zKHBhcmFtcyk7XG4gICAgaWYgKHVzZUZvcm1EYXRhKSB7XG4gICAgICAgIHZhciBmb3JtRGF0YV8xID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKG5ld1BhcmFtcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIEJsb2IgIT09IFwidW5kZWZpbmVkXCIgJiYgbmV3UGFyYW1zW2tleV0gaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICAgICAgICAgICAgLyogVG8gbmFtZSB0aGUgQmxvYjpcbiAgICAgICAgICAgICAgICAgMS4gbG9vayB0byBhbiBhbHRlcm5hdGUgcmVxdWVzdCBwYXJhbWV0ZXIgY2FsbGVkICdmaWxlTmFtZSdcbiAgICAgICAgICAgICAgICAgMi4gc2VlIGlmICduYW1lJyBoYXMgYmVlbiB0YWNrZWQgb250byB0aGUgQmxvYiBtYW51YWxseVxuICAgICAgICAgICAgICAgICAzLiBpZiBhbGwgZWxzZSBmYWlscywgdXNlIHRoZSByZXF1ZXN0IHBhcmFtZXRlclxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFyIGZpbGVuYW1lID0gbmV3UGFyYW1zW1wiZmlsZU5hbWVcIl0gfHwgbmV3UGFyYW1zW2tleV0ubmFtZSB8fCBrZXk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGFfMS5hcHBlbmQoa2V5LCBuZXdQYXJhbXNba2V5XSwgZmlsZW5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgIGVsc2UgaWYgKG5ld1BhcmFtc1trZXldLmNvbnN0cnVjdG9yICYmXG4gICAgICAgICAgICAgICAgbmV3UGFyYW1zW2tleV0uY29uc3RydWN0b3IubmFtZSA9PT0gJ1JlYWRTdHJlYW0nICYmXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogb25seSBzcGVjaWZ5IHRoZSBrbm93bkxlbmd0aCBvcHRpb24gaWYgYSB2YWxpZCB2YWx1ZSBpcyBnaXZlbi5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4gdmVyaWZ5IGluIGFsbCBSRVNUIEFQSSB0aGF0IHRoZSBvcHRpb24gaXMgbmVlZCBmb3JcbiAgICAgICAgICAgICAgICAvLyBub2RlIFJlYWRTdHJlYW0sIGl0IGNhbiB0aHJvdyBhbiBlcnJvciBmb3IgdGhlIG1pc3NpbmcgZGF0YVNpemUgdmFsdWUuXG4gICAgICAgICAgICAgICAgLy8gTm90ZSB0aGF0IHN1Y2ggY2hhbmdlIHdpbGwgYmUgYSBicmVha2luZyBjaGFuZ2UuXG4gICAgICAgICAgICAgICAgTnVtYmVyLmlzSW50ZWdlcihuZXdQYXJhbXNbXCJkYXRhU2l6ZVwiXSkpIHtcbiAgICAgICAgICAgICAgICAvLyBoYXZlIHRvIGNhc3QgdGhlIGZvcm1EYXRhIHRvIGFueSBzbyB0aGF0IEkgY2FuIHVzZSB0aGUgdW5vZmZpY2lhbCBBUElcbiAgICAgICAgICAgICAgICAvLyBpbiB0aGUgZm9ybS1kYXRhIGxpYnJhcnkgdG8gaGFuZGxlIE5vZGUgUmVhZFN0cmVhbS4gU2VlXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zvcm0tZGF0YS9mb3JtLWRhdGEvaXNzdWVzLzUwOFxuICAgICAgICAgICAgICAgIGZvcm1EYXRhXzEuYXBwZW5kKGtleSwgbmV3UGFyYW1zW2tleV0sIHtcbiAgICAgICAgICAgICAgICAgICAga25vd25MZW5ndGg6IG5ld1BhcmFtc1tcImRhdGFTaXplXCJdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YV8xLmFwcGVuZChrZXksIG5ld1BhcmFtc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmb3JtRGF0YV8xO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVuY29kZVF1ZXJ5U3RyaW5nKHBhcmFtcyk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW5jb2RlLWZvcm0tZGF0YS5qcy5tYXAiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTcgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHsgcHJvY2Vzc1BhcmFtcyB9IGZyb20gXCIuL3Byb2Nlc3MtcGFyYW1zXCI7XG4vKipcbiAqIEVuY29kZXMga2V5cyBhbmQgcGFyYW1ldGVycyBmb3IgdXNlIGluIGEgVVJMJ3MgcXVlcnkgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSBrZXkgUGFyYW1ldGVyJ3Mga2V5XG4gKiBAcGFyYW0gdmFsdWUgUGFyYW1ldGVyJ3MgdmFsdWVcbiAqIEByZXR1cm5zIFF1ZXJ5IHN0cmluZyB3aXRoIGtleSBhbmQgdmFsdWUgcGFpcnMgc2VwYXJhdGVkIGJ5IFwiJlwiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVQYXJhbShrZXksIHZhbHVlKSB7XG4gICAgLy8gRm9yIGFycmF5IG9mIGFycmF5cywgcmVwZWF0IGtleT12YWx1ZSBmb3IgZWFjaCBlbGVtZW50IG9mIGNvbnRhaW5pbmcgYXJyYXlcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWVbMF0gJiYgQXJyYXkuaXNBcnJheSh2YWx1ZVswXSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChmdW5jdGlvbiAoYXJyYXlFbGVtKSB7IHJldHVybiBlbmNvZGVQYXJhbShrZXksIGFycmF5RWxlbSk7IH0pLmpvaW4oXCImXCIpO1xuICAgIH1cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG59XG4vKipcbiAqIEVuY29kZXMgdGhlIHBhc3NlZCBvYmplY3QgYXMgYSBxdWVyeSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHBhcmFtcyBBbiBvYmplY3QgdG8gYmUgZW5jb2RlZC5cbiAqIEByZXR1cm5zIEFuIGVuY29kZWQgcXVlcnkgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlUXVlcnlTdHJpbmcocGFyYW1zKSB7XG4gICAgdmFyIG5ld1BhcmFtcyA9IHByb2Nlc3NQYXJhbXMocGFyYW1zKTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobmV3UGFyYW1zKVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGVuY29kZVBhcmFtKGtleSwgbmV3UGFyYW1zW2tleV0pO1xuICAgIH0pXG4gICAgICAgIC5qb2luKFwiJlwiKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuY29kZS1xdWVyeS1zdHJpbmcuanMubWFwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE3IEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbi8qKlxuICogQ2hlY2tzIHBhcmFtZXRlcnMgdG8gc2VlIGlmIHdlIHNob3VsZCB1c2UgRm9ybURhdGEgdG8gc2VuZCB0aGUgcmVxdWVzdFxuICogQHBhcmFtIHBhcmFtcyBUaGUgb2JqZWN0IHdob3NlIGtleXMgd2lsbCBiZSBlbmNvZGVkLlxuICogQHJldHVybiBBIGJvb2xlYW4gaW5kaWNhdGluZyBpZiBGb3JtRGF0YSB3aWxsIGJlIHJlcXVpcmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZXNGb3JtRGF0YShwYXJhbXMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocGFyYW1zKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFyYW1zW2tleV07XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUudG9QYXJhbSkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1BhcmFtKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHR5cGUgPSB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJheVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgXCJPYmplY3RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlIFwiRGF0ZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgXCJGdW5jdGlvblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgXCJCb29sZWFuXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSBcIlN0cmluZ1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgXCJOdW1iZXJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vKipcbiAqIENvbnZlcnRzIHBhcmFtZXRlcnMgdG8gdGhlIHByb3BlciByZXByZXNlbnRhdGlvbiB0byBzZW5kIHRvIHRoZSBBcmNHSVMgUkVTVCBBUEkuXG4gKiBAcGFyYW0gcGFyYW1zIFRoZSBvYmplY3Qgd2hvc2Uga2V5cyB3aWxsIGJlIGVuY29kZWQuXG4gKiBAcmV0dXJuIEEgbmV3IG9iamVjdCB3aXRoIHByb3Blcmx5IGVuY29kZWQgdmFsdWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1BhcmFtcyhwYXJhbXMpIHtcbiAgICB2YXIgbmV3UGFyYW1zID0ge307XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgdmFyIHBhcmFtID0gcGFyYW1zW2tleV07XG4gICAgICAgIGlmIChwYXJhbSAmJiBwYXJhbS50b1BhcmFtKSB7XG4gICAgICAgICAgICBwYXJhbSA9IHBhcmFtLnRvUGFyYW0oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBhcmFtICYmXG4gICAgICAgICAgICBwYXJhbSAhPT0gMCAmJlxuICAgICAgICAgICAgdHlwZW9mIHBhcmFtICE9PSBcImJvb2xlYW5cIiAmJlxuICAgICAgICAgICAgdHlwZW9mIHBhcmFtICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHR5cGUgPSBwYXJhbS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHByb3Blcmx5IGVuY29kZXMgb2JqZWN0cywgYXJyYXlzIGFuZCBkYXRlcyBmb3IgYXJjZ2lzLmNvbSBhbmQgb3RoZXIgc2VydmljZXMuXG4gICAgICAgIC8vIHBvcnRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2VzcmktbGVhZmxldC9ibG9iL21hc3Rlci9zcmMvUmVxdWVzdC5qcyNMMjItTDMwXG4gICAgICAgIC8vIGFsc28gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2FyY2dpcy1yZXN0LWpzL2lzc3Vlcy8xODpcbiAgICAgICAgLy8gbnVsbCwgdW5kZWZpbmVkLCBmdW5jdGlvbiBhcmUgZXhjbHVkZWQuIElmIHlvdSB3YW50IHRvIHNlbmQgYW4gZW1wdHkga2V5IHlvdSBuZWVkIHRvIHNlbmQgYW4gZW1wdHkgc3RyaW5nIFwiXCIuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIkFycmF5XCI6XG4gICAgICAgICAgICAgICAgLy8gQmFzZWQgb24gdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGFycmF5LCBjbGFzc2lmeSBhcnJheSBhcyBhbiBhcnJheSBvZiBhcnJheXMsIGFuIGFycmF5IG9mIG9iamVjdHNcbiAgICAgICAgICAgICAgICAvLyB0byBiZSBzdHJpbmdpZmllZCwgb3IgYW4gYXJyYXkgb2Ygbm9uLW9iamVjdHMgdG8gYmUgY29tbWEtc2VwYXJhdGVkXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNhc2UtZGVjbGFyYXRpb25zXG4gICAgICAgICAgICAgICAgdmFyIGZpcnN0RWxlbWVudFR5cGUgPSAoX2IgPSAoX2EgPSBwYXJhbVswXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbnN0cnVjdG9yKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubmFtZTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0RWxlbWVudFR5cGUgPT09IFwiQXJyYXlcIiA/IHBhcmFtIDogLy8gcGFzcyB0aHJ1IGFycmF5IG9mIGFycmF5c1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RFbGVtZW50VHlwZSA9PT0gXCJPYmplY3RcIiA/IEpTT04uc3RyaW5naWZ5KHBhcmFtKSA6IC8vIHN0cmluZ2lmeSBhcnJheSBvZiBvYmplY3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW0uam9pbihcIixcIik7IC8vIGpvaW4gb3RoZXIgdHlwZXMgb2YgYXJyYXkgZWxlbWVudHNcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJPYmplY3RcIjpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHBhcmFtKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJEYXRlXCI6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJhbS52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRnVuY3Rpb25cIjpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQm9vbGVhblwiOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyYW0gKyBcIlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcmFtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMCB8fCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIG5ld1BhcmFtc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3UGFyYW1zO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvY2Vzcy1wYXJhbXMuanMubWFwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuLyoqXG4gKiBNZXRob2QgdXNlZCBpbnRlcm5hbGx5IHRvIHN1cmZhY2UgbWVzc2FnZXMgdG8gZGV2ZWxvcGVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICAgIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgW21lc3NhZ2VdKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YXJuLmpzLm1hcCIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NyZWF0ZUJpbmRpbmcobywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2xheWVyLWNvbXBvbmVudCAubGF5ZXItdGFicyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuXFxuI2xheWVyLWNvbXBvbmVudCAubGF5ZXItdGFic19fY29udGVudCB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEzOXB4KTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXG5cXG4jbGF5ZXItY29tcG9uZW50ICNsYXllci1zZWFyY2gge1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgI2xheWVyLWNvbXBvbmVudCAjbGF5ZXItc2VhcmNoIC5kcm9wZG93bi1idXR0b246aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktNTAwKTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvTGF5ZXJDb21wb25lbnQvTGF5ZXJDb21wb25lbnQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUVRLGdCQUFnQixFQUFBOztBQUZ4QjtFQU1RLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQVQxQjtFQWFRLGdCQUFnQixFQUFBO0VBYnhCO0lBZ0JZLGdDQUFnQyxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNsYXllci1jb21wb25lbnQge1xcbiAgICAubGF5ZXItdGFicyB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5sYXllci10YWJzX19jb250ZW50IHtcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTM5cHgpO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgfVxcblxcbiAgICAjbGF5ZXItc2VhcmNoIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxuICAgICAgICAuZHJvcGRvd24tYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktNTAwKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjbGF5ZXItbGlzdC1jb21wb25lbnQgI25vLWxheWVycy1tZXNzYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGY3Zjk7XFxuICBwYWRkaW5nOiA1cHg7IH1cXG5cXG4jbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTBweCk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpOyB9XFxuICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0X19uby1pdGVtcyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7IH1cXG4gICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBhbmltYXRpb246IG5ldy1pdGVtIDVzIGVhc2Utb3V0O1xcbiAgICBib3JkZXI6IG5vbmU7IH1cXG4gICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1jb250YWluZXIgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1sYWJlbCB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGN1cnNvcjogbW92ZTsgfVxcbiAgICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tY29udGFpbmVyIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tbGFiZWwgLmVzcmktbGF5ZXItbGlzdF9faXRlbS10b2dnbGUge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAgICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1jb250YWluZXIgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1sYWJlbCAuZXNyaS1sYXllci1saXN0X19pdGVtLXRvZ2dsZTpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMTAwKTsgfVxcbiAgICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tY29udGFpbmVyIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tbGFiZWwgLmVzcmktbGF5ZXItbGlzdF9faXRlbS10aXRsZSB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDsgfVxcbiAgICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tY29udGFpbmVyIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tbGFiZWwgLmVzcmktaWNvbi1ub24tdmlzaWJsZSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtODAwKTsgfVxcbiAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0X19pdGVtLWNvbnRhaW5lciAuZXNyaS1sYXllci1saXN0X19pdGVtLWxhYmVsOmhhcyguZXNyaS1pY29uLW5vbi12aXNpYmxlKSB7XFxuICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LTgwMCk7IH1cXG4gICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1jb250YWluZXIgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1hY3Rpb25zLW1lbnUtaXRlbS0tYWN0aXZlW2FyaWEtbGFiZWw9XFxcIkxlZ2VuZFxcXCJdIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XFxuICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0LXBhbmVsIHtcXG4gICAgbWFyZ2luOiAwIDAgNXB4IDI3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTsgfVxcbiAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0LXBhbmVsIC5lc3JpLWxheWVyLWxpc3QtcGFuZWxfX2NvbnRlbnQge1xcbiAgICAgIHBhZGRpbmc6IDVweCAwIDVweCAxMHB4OyB9XFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3QtcGFuZWwgLmVzcmktbGF5ZXItbGlzdC1wYW5lbF9fY29udGVudDpoYXMoLmxlZ2VuZF9fdGVtcGxhdGVzKSB7XFxuICAgICAgYm9yZGVyLXRvcDogMnB4IHZhcigtLWxpZ2h0LTMwMCkgc29saWQ7IH1cXG4gICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdC1wYW5lbCAuZXNyaS1sZWdlbmQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3QtcGFuZWwgLmVzcmktbGVnZW5kX19zZXJ2aWNlIHtcXG4gICAgICBwYWRkaW5nOiAwOyB9XFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3QtcGFuZWwgLmVzcmktbGVnZW5kX19sYXllci1jaGlsZC10YWJsZSB7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0X19pdGVtLWFjdGlvbnMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7IH1cXG4gICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1hY3Rpb25zIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tYWN0aW9ucy1saXN0IC5lc3JpLWRpc2FibGVkLWVsZW1lbnQsXFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tYWN0aW9ucyAuZXNyaS1sYXllci1saXN0X19pdGVtLWFjdGlvbnMtbGlzdCAuZXNyaS1kaXNhYmxlZC1lbGVtZW50OmhvdmVyIHtcXG4gICAgICBjb2xvcjogdmFyKC0tbGlnaHQtODAwKTtcXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4jbGF5ZXItbGlzdC1jb21wb25lbnQgI2xheWVyLWxpc3RfX2J1dHRvbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDgwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA1MCUpOyB9XFxuICAjbGF5ZXItbGlzdC1jb21wb25lbnQgI2xheWVyLWxpc3RfX2J1dHRvbnMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogM3B4OyB9XFxuICAjbGF5ZXItbGlzdC1jb21wb25lbnQgI2xheWVyLWxpc3RfX2J1dHRvbnMgI2NsZWFyLWFsbC1idXR0b24tZ3JpZC1pdGVtIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggdmFyKC0tbGlnaHQtMzAwKSBzb2xpZCAhaW1wb3J0YW50OyB9XFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAjbGF5ZXItbGlzdF9fYnV0dG9ucyAjY2xlYXItYWxsLWJ1dHRvbi1ncmlkLWl0ZW0gI2NsZWFyLWFsbC1idXR0b24ge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMDsgfVxcbiAgICAgICNsYXllci1saXN0LWNvbXBvbmVudCAjbGF5ZXItbGlzdF9fYnV0dG9ucyAjY2xlYXItYWxsLWJ1dHRvbi1ncmlkLWl0ZW0gI2NsZWFyLWFsbC1idXR0b24gc3ZnIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDsgfVxcbiAgI2xheWVyLWxpc3QtY29tcG9uZW50ICNsYXllci1saXN0X19idXR0b25zICNsZWdlbmQtYnV0dG9uLWdyaWQtaXRlbSB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHZhcigtLWxpZ2h0LTMwMCkgc29saWQ7IH1cXG4gICAgI2xheWVyLWxpc3QtY29tcG9uZW50ICNsYXllci1saXN0X19idXR0b25zICNsZWdlbmQtYnV0dG9uLWdyaWQtaXRlbSBsYWJlbCB7XFxuICAgICAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogNHB4OyB9XFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAjbGF5ZXItbGlzdF9fYnV0dG9ucyAjbGVnZW5kLWJ1dHRvbi1ncmlkLWl0ZW0gI2xlZ2VuZC1idXR0b24ge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBib3R0b206IDJweDsgfVxcbiAgI2xheWVyLWxpc3QtY29tcG9uZW50ICNsYXllci1saXN0X19idXR0b25zICNsYXllci12aXNpYmlsaXR5LWJ1dHRvbi1ncmlkLWl0ZW0ge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDI7IH1cXG5cXG4uY29sb3ItcGlja2VyLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMTFweDtcXG4gIGxlZnQ6IDVweDsgfVxcblxcbi5sYXllci1zaXplLXNsaWRlciA+IGlucHV0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA2NSU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDNweDtcXG4gIG1hcmdpbjogMCAxMHB4OyB9XFxuXFxuI3BpY3R1cmUtbWFya2VyLXdhcm5pbmcge1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgI3BpY3R1cmUtbWFya2VyLXdhcm5pbmcgZGl2IHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDsgfVxcblxcbiNzaG93LWxlZ2VuZC1idXR0b246aG92ZXI6bm90KC5kaXNhYmxlZCksICNoaWRlLWxlZ2VuZC1idXR0b246aG92ZXI6bm90KC5kaXNhYmxlZCkge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktNTAwKTsgfVxcblxcbiNsZWdlbmQtYnV0dG9uIHN2ZyB7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtOyB9XFxuXFxuLmxheWVyLXN0eWxlLW1vZGFsLm1vZGFsLWJhY2tkcm9wLmZhZGUuc2hvdyB7XFxuICBvcGFjaXR5OiAwOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9MYXllckxpc3RDb21wb25lbnQvTGF5ZXJMaXN0Q29tcG9uZW50LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFFUSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUhwQjtFQU9RLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsOEJBQThCLEVBQUE7RUFUdEM7SUFZWSxhQUFhLEVBQUE7RUFaekI7SUFnQlksOEJBQThCLEVBQUE7RUFoQjFDO0lBb0JZLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsWUFBWSxFQUFBO0lBdEJ4QjtNQXlCZ0Isa0JBQWtCO01BQ2xCLFlBQVksRUFBQTtNQTFCNUI7UUE2Qm9CLGtCQUFrQjtRQUNsQixZQUFZLEVBQUE7TUE5QmhDO1FBa0NvQixzQ0FBc0MsRUFBQTtNQWxDMUQ7UUFzQ29CLGlCQUFpQixFQUFBO01BdENyQztRQTBDb0IsdUJBQXVCLEVBQUE7SUExQzNDO01BK0NnQix1QkFBdUIsRUFBQTtJQS9DdkM7TUFtRGdCLHlCQUF5QixFQUFBO0VBbkR6QztJQXdEWSxvQkFBb0I7SUFDcEIsOEJBQThCLEVBQUE7SUF6RDFDO01BNERnQix1QkFBdUIsRUFBQTtJQTVEdkM7TUFnRWdCLHNDQUFzQyxFQUFBO0lBaEV0RDtNQW9FZ0IsNkJBQTZCLEVBQUE7SUFwRTdDO01Bd0VnQixVQUFVLEVBQUE7SUF4RTFCO01BNEVnQixTQUFTLEVBQUE7RUE1RXpCO0lBaUZZLDhCQUE4QixFQUFBO0lBakYxQzs7TUFxRmdCLHVCQUF1QjtNQUN2QixlQUFlLEVBQUE7O0FBdEYvQjtFQTZGUSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLGtDQUFrQyxFQUFBO0VBL0YxQztJQWtHWSxZQUFZLEVBQUE7RUFsR3hCO0lBc0dZLGNBQWM7SUFDZCxXQUFXO0lBQ1gsb0RBQW9ELEVBQUE7SUF4R2hFO01BMkdnQixlQUFlLEVBQUE7TUEzRy9CO1FBOEdvQixlQUFlO1FBQ2Ysa0JBQWtCLEVBQUE7RUEvR3RDO0lBcUhZLGNBQWM7SUFDZCxXQUFXO0lBQ1gseUNBQXlDLEVBQUE7SUF2SHJEO01BMEhnQixzQ0FBc0M7TUFDdEMsa0JBQWtCO01BQ2xCLFFBQVEsRUFBQTtJQTVIeEI7TUFnSWdCLGtCQUFrQjtNQUNsQixXQUFXLEVBQUE7RUFqSTNCO0lBc0lZLGNBQWM7SUFDZCxXQUFXLEVBQUE7O0FBTXZCO0VBQ0kscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUyxFQUFBOztBQUdiO0VBQ0kscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxnQkFBZ0IsRUFBQTtFQURwQjtJQUlRLGdCQUFnQixFQUFBOztBQUl4QjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFVBQVUsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjbGF5ZXItbGlzdC1jb21wb25lbnQge1xcbiAgICAjbm8tbGF5ZXJzLW1lc3NhZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjdmOTtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgfVxcblxcbiAgICAuZXNyaS1sYXllci1saXN0IHtcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI1MHB4KTtcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFxuICAgICAgICAuZXNyaS1sYXllci1saXN0X19uby1pdGVtcyB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tY29udGFpbmVyIHtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBuZXctaXRlbSA1cyBlYXNlLW91dDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuXFxuICAgICAgICAgICAgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1sYWJlbCB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBtb3ZlO1xcblxcbiAgICAgICAgICAgICAgICAuZXNyaS1sYXllci1saXN0X19pdGVtLXRvZ2dsZSB7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmVzcmktbGF5ZXItbGlzdF9faXRlbS10b2dnbGU6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTEwMCk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmVzcmktbGF5ZXItbGlzdF9faXRlbS10aXRsZSB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuZXNyaS1pY29uLW5vbi12aXNpYmxlIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC04MDApO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tbGFiZWw6aGFzKC5lc3JpLWljb24tbm9uLXZpc2libGUpIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LTgwMCk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tYWN0aW9ucy1tZW51LWl0ZW0tLWFjdGl2ZVthcmlhLWxhYmVsPVxcXCJMZWdlbmRcXFwiXSB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmVzcmktbGF5ZXItbGlzdC1wYW5lbCB7XFxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDI3cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcblxcbiAgICAgICAgICAgIC5lc3JpLWxheWVyLWxpc3QtcGFuZWxfX2NvbnRlbnQge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMCA1cHggMTBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmVzcmktbGF5ZXItbGlzdC1wYW5lbF9fY29udGVudDpoYXMoLmxlZ2VuZF9fdGVtcGxhdGVzKSB7XFxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCB2YXIoLS1saWdodC0zMDApIHNvbGlkO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZXNyaS1sZWdlbmQge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmVzcmktbGVnZW5kX19zZXJ2aWNlIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmVzcmktbGVnZW5kX19sYXllci1jaGlsZC10YWJsZSB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZXNyaS1sYXllci1saXN0X19pdGVtLWFjdGlvbnMge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG5cXG4gICAgICAgICAgICAuZXNyaS1sYXllci1saXN0X19pdGVtLWFjdGlvbnMtbGlzdCAuZXNyaS1kaXNhYmxlZC1lbGVtZW50LFxcbiAgICAgICAgICAgIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tYWN0aW9ucy1saXN0IC5lc3JpLWRpc2FibGVkLWVsZW1lbnQ6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtODAwKTtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcblxcbiAgICAjbGF5ZXItbGlzdF9fYnV0dG9ucyB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgODBweDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDUwJSk7XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNjbGVhci1hbGwtYnV0dG9uLWdyaWQtaXRlbSB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHZhcigtLWxpZ2h0LTMwMCkgc29saWQgIWltcG9ydGFudDtcXG5cXG4gICAgICAgICAgICAjY2xlYXItYWxsLWJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcXG5cXG4gICAgICAgICAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNsZWdlbmQtYnV0dG9uLWdyaWQtaXRlbSB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHZhcigtLWxpZ2h0LTMwMCkgc29saWQ7XFxuXFxuICAgICAgICAgICAgbGFiZWwge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICB0b3A6IDRweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgI2xlZ2VuZC1idXR0b24ge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMnB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNsYXllci12aXNpYmlsaXR5LWJ1dHRvbi1ncmlkLWl0ZW0ge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcblxcbi5jb2xvci1waWNrZXItYmxvY2sge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxMXB4O1xcbiAgICBsZWZ0OiA1cHg7XFxufVxcblxcbi5sYXllci1zaXplLXNsaWRlciA+IGlucHV0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogM3B4O1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuI3BpY3R1cmUtbWFya2VyLXdhcm5pbmcge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcblxcbiAgICBkaXYge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgfVxcbn1cXG5cXG4jc2hvdy1sZWdlbmQtYnV0dG9uOmhvdmVyOm5vdCguZGlzYWJsZWQpLCAjaGlkZS1sZWdlbmQtYnV0dG9uOmhvdmVyOm5vdCguZGlzYWJsZWQpIHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktNTAwKTtcXG59XFxuXFxuI2xlZ2VuZC1idXR0b24gc3ZnIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLmxheWVyLXN0eWxlLW1vZGFsLm1vZGFsLWJhY2tkcm9wLmZhZGUuc2hvdyB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiN0ZW1wbGF0ZS1jb21wb25lbnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjdmOTtcXG4gIGJvcmRlcjogMXB4IHZhcigtLWRhcmstODAwKSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgI3RlbXBsYXRlLWNvbXBvbmVudCAjdGVtcGxhdGUtY29tcG9uZW50X19oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07IH1cXG4gICAgI3RlbXBsYXRlLWNvbXBvbmVudCAjdGVtcGxhdGUtY29tcG9uZW50X19oZWFkZXIgaDQge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZTsgfVxcbiAgICAjdGVtcGxhdGUtY29tcG9uZW50ICN0ZW1wbGF0ZS1jb21wb25lbnRfX2hlYWRlciAjdGVtcGxhdGUtY29tcG9uZW50X19pbmZvIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIG1hcmdpbjogMnB4IDAgMCA1cHg7IH1cXG4gICN0ZW1wbGF0ZS1jb21wb25lbnQgI3RlbXBsYXRlLXNlYXJjaCAuZHJvcGRvd24tYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7IH1cXG4gICN0ZW1wbGF0ZS1jb21wb25lbnQgI2FjdGl2ZS10ZW1wbGF0ZXMtbWVudSB7XFxuICAgIGhlaWdodDogNTVweDtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDsgfVxcbiAgICAjdGVtcGxhdGUtY29tcG9uZW50ICNhY3RpdmUtdGVtcGxhdGVzLW1lbnUgLnNjcm9sbC1pdGVtIHtcXG4gICAgICBtYXgtd2lkdGg6IDE1MHB4OyB9XFxuICAgICAgI3RlbXBsYXRlLWNvbXBvbmVudCAjYWN0aXZlLXRlbXBsYXRlcy1tZW51IC5zY3JvbGwtaXRlbSAubmF2LWxpbmsge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstODAwKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHZhcigtLWRhcmstODAwKSBzb2xpZDsgfVxcbiAgICAjdGVtcGxhdGUtY29tcG9uZW50ICNhY3RpdmUtdGVtcGxhdGVzLW1lbnUgLnRhYi10aXRsZSB7XFxuICAgICAgbWFyZ2luLXRvcDogMnB4OyB9XFxuICAgICN0ZW1wbGF0ZS1jb21wb25lbnQgI2FjdGl2ZS10ZW1wbGF0ZXMtbWVudSAjbm8tYWN0aXZlLXRlbXBsYXRlcyB7XFxuICAgICAgcGFkZGluZzogNXB4IDAgMCA1cHg7IH1cXG5cXG4udGVtcGxhdGUtc2VhcmNoLWl0ZW0ge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG4gIC50ZW1wbGF0ZS1zZWFyY2gtaXRlbSAudGVtcGxhdGUtc2VhcmNoLWl0ZW1fX2FkZC1idXR0b24ge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTVweCk7IH1cXG5cXG4udGVtcGxhdGUtZHJvcGRvd25fX2NvbnRlbnQge1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICBib3JkZXItbGVmdDogMnB4IHZhcigtLWxpZ2h0LTMwMCkgc29saWQ7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL1RlbXBsYXRlQ29tcG9uZW50L1RlbXBsYXRlQ29tcG9uZW50LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsa0JBQWtCLEVBQUE7RUFMdEI7SUFRUSxxQkFBcUIsRUFBQTtJQVI3QjtNQVdZLGVBQWUsRUFBQTtJQVgzQjtNQWVZLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsbUJBQW1CLEVBQUE7RUFqQi9CO0lBdUJZLGdDQUFnQyxFQUFBO0VBdkI1QztJQTRCUSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQUE7SUFoQ3pCO01BbUNZLGdCQUFnQixFQUFBO01BbkM1QjtRQXNDZ0Isc0JBQXNCO1FBQ3RCLDhCQUE4QjtRQUM5QixlQUFlO1FBQ2YsaUNBQWlDLEVBQUE7SUF6Q2pEO01BOENZLGVBQWUsRUFBQTtJQTlDM0I7TUFrRFksb0JBQW9CLEVBQUE7O0FBTWhDO0VBQ0ksV0FBVyxFQUFBO0VBRGY7SUFJUSx3QkFBd0IsRUFBQTs7QUFJaEM7RUFDSSxpQkFBaUI7RUFDakIsdUNBQXVDLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI3RlbXBsYXRlLWNvbXBvbmVudCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmN2Y5O1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1kYXJrLTgwMCkgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgI3RlbXBsYXRlLWNvbXBvbmVudF9faGVhZGVyIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG5cXG4gICAgICAgIGg0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjdGVtcGxhdGUtY29tcG9uZW50X19pbmZvIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIG1hcmdpbjogMnB4IDAgMCA1cHg7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgI3RlbXBsYXRlLXNlYXJjaCB7XFxuICAgICAgICAuZHJvcGRvd24tYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktNTAwKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAjYWN0aXZlLXRlbXBsYXRlcy1tZW51IHtcXG4gICAgICAgIGhlaWdodDogNTVweDtcXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XFxuXFxuICAgICAgICAuc2Nyb2xsLWl0ZW0ge1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XFxuXFxuICAgICAgICAgICAgLm5hdi1saW5rIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhcmstODAwKTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHZhcigtLWRhcmstODAwKSBzb2xpZDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFiLXRpdGxlIHtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjbm8tYWN0aXZlLXRlbXBsYXRlcyB7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgMCA1cHg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXFxuLnRlbXBsYXRlLXNlYXJjaC1pdGVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIC50ZW1wbGF0ZS1zZWFyY2gtaXRlbV9fYWRkLWJ1dHRvbiB7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTVweCk7XFxuICAgIH1cXG59XFxuXFxuLnRlbXBsYXRlLWRyb3Bkb3duX19jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggdmFyKC0tbGlnaHQtMzAwKSBzb2xpZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmppbXUtd2lkZ2V0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5wLTUge1xcbiAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7IH1cXG5cXG4vKiBHcmlkIHBvc2l0aW9uaW5nICovXFxuI29lbS1kYXNoYm9hcmQtZ3JpZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcXG4gIGZvbnQtc2l6ZTogMTI1JSAhaW1wb3J0YW50OyB9XFxuICAjb2VtLWRhc2hib2FyZC1ncmlkIC5ncmlkLWl0ZW0ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAjb2VtLWRhc2hib2FyZC1ncmlkICN0ZW1wbGF0ZS1jb21wb25lbnRfX2dyaWQtaXRlbSB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMTsgfVxcbiAgI29lbS1kYXNoYm9hcmQtZ3JpZCAjbGF5ZXItY29tcG9uZW50X19ncmlkLWl0ZW0ge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDIgLyA0OyB9XFxuICAjb2VtLWRhc2hib2FyZC1ncmlkICNsYXllci1saXN0X19ncmlkLWl0ZW0ge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7IH1cXG4gICNvZW0tZGFzaGJvYXJkLWdyaWQgI2JvdHRvbS1ncmlkLWl0ZW0ge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYm90dG9tOiA5MCU7IH1cXG4gICNvZW0tZGFzaGJvYXJkLWdyaWQgLmxvYWRpbmcge1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiAyMDBweDsgfVxcblxcbi8qIEJ1dHRvbnMgYW5kIGljb25zICovXFxuLmFkZC1idXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLmFkZC1idXR0b24gLmljb24tYnRuLXNpemVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAuYWRkLWJ1dHRvbiAuamltdS1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHggIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4OyB9XFxuXFxuI29wZW4tc2F2ZS10ZW1wbGF0ZS1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcGFkZGluZzogMHJlbSAwLjc1cmVtOyB9XFxuICAjb3Blbi1zYXZlLXRlbXBsYXRlLWJ1dHRvbiAuamltdS1pY29uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4OyB9XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktNTAwKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTUwMCk7IH1cXG5cXG4uYnRuLXByaW1hcnk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTIwMCk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeS0yMDApOyB9XFxuXFxuLmFkdmFuY2VkLXNlbGVjdC1tZW51IC5zZWxlY3QtaXRlbS1wbGFjZWhvbGRlciB7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIHdpZHRoOiAwICFpbXBvcnRhbnQ7IH1cXG5cXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDsgfVxcblxcbi5tdWx0aXBsZS1zZWxlY3QtdG9vbCB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4uamltdS1kcm9wZG93bi1pdGVtID4gLmppbXUtY2hlY2tib3gge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuQGtleWZyYW1lcyBuZXctaXRlbSB7XFxuICBmcm9tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTEwMCk7IH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS0xMDApOyB9XFxuICB0byB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9IH1cXG5cXG4ubW9kYWwtY29udGVudCAubWVudS1uYXZpZ2F0aW9uIC5uYXYtbGluay5hY3RpdmUge1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9XaWRnZXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLDBCQUEwQixFQUFBOztBQUk5QixxQkFBQTtBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsMEJBQTBCLEVBQUE7RUFQOUI7SUFVUSwwQkFBMEI7SUFDMUIsa0JBQWtCLEVBQUE7RUFYMUI7SUFlUSxjQUFjO0lBQ2QsV0FBVyxFQUFBO0VBaEJuQjtJQW9CUSxjQUFjO0lBQ2QsZUFBZSxFQUFBO0VBckJ2QjtJQXlCUSxjQUFjO0lBQ2QsZUFBZTtJQUNmLDhCQUE4QixFQUFBO0VBM0J0QztJQStCUSxjQUFjO0lBQ2QsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixXQUFXLEVBQUE7RUFsQ25CO0lBc0NRLFlBQVk7SUFDWixZQUFZLEVBQUE7O0FBSXBCLHNCQUFBO0FBQ0E7RUFDSSxXQUFXO0VBQ1gsY0FBYyxFQUFBO0VBRmxCO0lBS1EscUJBQXFCO0lBQ3JCLGdCQUFnQixFQUFBO0VBTnhCO0lBVVEsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTs7QUFJMUI7RUFJSSxrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7RUFMekI7SUFFUSxrQkFBa0IsRUFBQTs7QUFNMUI7RUFDSSxzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLHNDQUFzQztFQUN0QyxrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDSSxvQkFBb0I7RUFDcEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kseUNBQXlDLEVBQUE7O0FBRzdDO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0k7SUFBTSxzQ0FBc0MsRUFBQTtFQUM1QztJQUFLLHNDQUFzQyxFQUFBO0VBQzNDO0lBQUksNkJBQTZCLEVBQUEsRUFBQTs7QUFHckM7RUFDSSxlQUFlLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmppbXUtd2lkZ2V0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucC01IHtcXG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbi8qIEdyaWQgcG9zaXRpb25pbmcgKi9cXG4jb2VtLWRhc2hib2FyZC1ncmlkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xcbiAgICBmb250LXNpemU6IDEyNSUgIWltcG9ydGFudDtcXG5cXG4gICAgLmdyaWQtaXRlbSB7XFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAjdGVtcGxhdGUtY29tcG9uZW50X19ncmlkLWl0ZW0ge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgICAgICBncmlkLXJvdzogMTtcXG4gICAgfVxcblxcbiAgICAjbGF5ZXItY29tcG9uZW50X19ncmlkLWl0ZW0ge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDQ7XFxuICAgIH1cXG5cXG4gICAgI2xheWVyLWxpc3RfX2dyaWQtaXRlbSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgfVxcblxcbiAgICAjYm90dG9tLWdyaWQtaXRlbSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgICAgIGdyaWQtcm93OiAzO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgYm90dG9tOiA5MCU7XFxuICAgIH1cXG5cXG4gICAgLmxvYWRpbmcge1xcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICB9XFxufVxcblxcbi8qIEJ1dHRvbnMgYW5kIGljb25zICovXFxuLmFkZC1idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuXFxuICAgIC5pY29uLWJ0bi1zaXplciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB9XFxuXFxuICAgIC5qaW11LWljb24ge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHggIWltcG9ydGFudDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XFxuICAgIH1cXG59XFxuXFxuI29wZW4tc2F2ZS10ZW1wbGF0ZS1idXR0b24ge1xcbiAgICAuamltdS1pY29uIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcXG4gICAgfVxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmc6IDByZW0gMC43NXJlbTtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstODAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTUwMCk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTUwMCk7XFxufVxcblxcbi5idG4tcHJpbWFyeTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS0yMDApO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeS0yMDApO1xcbn1cXG5cXG4uYWR2YW5jZWQtc2VsZWN0LW1lbnUgLnNlbGVjdC1pdGVtLXBsYWNlaG9sZGVyIHtcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tdWx0aXBsZS1zZWxlY3QtdG9vbCB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmppbXUtZHJvcGRvd24taXRlbSA+IC5qaW11LWNoZWNrYm94IHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG5ldy1pdGVtIHtcXG4gICAgZnJvbSB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTEwMCl9XFxuICAgIDUwJSB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTEwMCl9XFxuICAgIHRvIHtiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudH1cXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgLm1lbnUtbmF2aWdhdGlvbiAubmF2LWxpbmsuYWN0aXZlIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9MYXllckNvbXBvbmVudC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9MYXllckNvbXBvbmVudC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL0xheWVyTGlzdENvbXBvbmVudC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9MYXllckxpc3RDb21wb25lbnQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9UZW1wbGF0ZUNvbXBvbmVudC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9UZW1wbGF0ZUNvbXBvbmVudC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL1dpZGdldC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9XaWRnZXQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBMaW5rLCBNb2RhbCwgTW9kYWxCb2R5LCBNb2RhbEhlYWRlciwgTW9kYWxGb290ZXIgfSBmcm9tICdqaW11LXVpJztcblxuaW50ZXJmYWNlIEV4cG9ydENTVkNvbXBvbmVudFByb3BzIHtcbiAgc3RhdHVzOiBzdHJpbmcgLy8gdGhlIGN1cnJlbnQgZXhwb3J0IHN0YXR1c1xuICBvbkV4cG9ydERhdGE6ICgpID0+IGFueSAvLyBoYW5kbGVzIHRoZSBleHBvcnQgam9iXG59XG5cbmludGVyZmFjZSBFeHBvcnRDU1ZDb21wb25lbnRTdGF0ZSB7XG4gIG1vZGFsT3BlbjogYm9vbGVhbiAvLyB3aGV0aGVyIHRoZSBtb2RhbCBpcyBvcGVuXG59XG5cbi8qKlxuICogRXhwb3J0Q1NWQ29tcG9uZW50IGNyZWF0ZXMgYSBsaW5rIGFuZCBtb2RhbCBmb3IgdXNlcnMgdG8gZXhwb3J0IGRhdGFcbiAqL1xuY2xhc3MgRXhwb3J0Q1NWQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PEV4cG9ydENTVkNvbXBvbmVudFByb3BzLCBFeHBvcnRDU1ZDb21wb25lbnRTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vZGFsT3BlbjogZmFsc2VcbiAgICB9XG4gIH1cblxuICBzdGF0dXNlcyA9IHtcbiAgICBcIkluaXRpYXRlZFwiOiB7XG4gICAgICAgIHRleHQ6IFwiV2FpdGluZyBmb3IgZXhwb3J0XCIsXG4gICAgICAgIGljb246IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvY2xvY2stMjQuc3ZnXCJcbiAgICB9LFxuICAgIFwiUmUtY2hlY2tpbmdcIjoge1xuICAgICAgICB0ZXh0OiBcIkV4cG9ydCBzdGlsbCBpbiBwcm9ncmVzcyAtIFJlLWNoZWNraW5nXCIsXG4gICAgICAgIGljb246IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvY2xvY2stZm9yd2FyZC0yNC5zdmdcIlxuICAgIH0sXG4gICAgXCJDb21wbGV0ZWRcIjoge1xuICAgICAgICB0ZXh0OiBcIkV4cG9ydCBEb25lISBQbGVhc2Ugc2VlIHlvdXIgZG93bmxvYWRzIGZvbGRlclwiLFxuICAgICAgICBpY29uOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL2NoZWNrLWNpcmNsZS0yNC1mLnN2Z1wiXG4gICAgfSxcbiAgICBcIkZhaWxlZFwiOiB7XG4gICAgICAgIHRleHQ6IFwiRXhwb3J0IGZhaWxlZFwiLFxuICAgICAgICBpY29uOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL2V4Y2xhbWF0aW9uLW1hcmstY2lyY2xlLTI0LWYuc3ZnXCJcbiAgICB9LFxuICAgIFwiQ2FuY2VsZWRcIjoge1xuICAgICAgICB0ZXh0OiBcIkV4cG9ydCBjYW5jZWxlZFwiLFxuICAgICAgICBpY29uOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL2NpcmNsZS1kaXNhbGxvd2VkLTI0LnN2Z1wiXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBmb3Igc3RhdHVzIGFuZCByZXR1cm5zIHRleHQgaWYgc3RhdHVzIGV4aXN0c1xuICAgKiBAcmV0dXJucyBTdHJpbmdcbiAgICovXG4gIHN0YXR1c01lc3NhZ2UgPSAoKSA9PiB7XG4gICAgbGV0IHN0YXR1cyA9IHRoaXMuc3RhdHVzZXNbdGhpcy5wcm9wcy5zdGF0dXNdO1xuICAgIGlmIChzdGF0dXMpe1xuICAgICAgICByZXR1cm4gc3RhdHVzLnRleHQ7ICAgIFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgZm9yIHN0YXR1cyBhbmQgcmV0dXJucyB1cmwgb2YgaWNvbiBpZiBzdGF0dXMgZXhpc3RzXG4gICAqIEByZXR1cm5zIFN0cmluZ1xuICAgKi9cbiAgc3RhdHVzSWNvbiA9ICgpID0+IHtcbiAgICBsZXQgc3RhdHVzID0gdGhpcy5zdGF0dXNlc1t0aGlzLnByb3BzLnN0YXR1c107XG4gICAgaWYgKHN0YXR1cyl7XG4gICAgICAgIHJldHVybiBzdGF0dXMuaWNvbjsgICAgXG4gICAgfVxuICB9XG5cbiAgb25DbG9zZWQgPSAoKSA9PiB7XG4gICAgLy8gQ2xvc2UgdGhlIG1vZGFsIHdoZW4gdGhlICdDYW5jZWwnIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgLy8gTm90ZTogVXNlIHRoaXMuc2V0U3RhdGUgdG8gdXBkYXRlIHRoZSBzdGF0ZVxuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RhbE9wZW46IGZhbHNlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgZXhwb3J0IGRhdGEgaW4gd2lkZ2V0XG4gICAqL1xuICBvbkV4cG9ydERhdGEgPSAoKSA9PiB7XG4gICAgLy8gT3BlbiB0aGUgbW9kYWwgd2hlbiBleHBvcnQgaXMgdHJpZ2dlcmVkXG4gICAgLy8gTm90ZTogVXNlIHRoaXMuc2V0U3RhdGUgdG8gdXBkYXRlIHRoZSBzdGF0ZVxuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RhbE9wZW46IHRydWUgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkV4cG9ydERhdGEoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImV4cG9ydFwiPlxuICAgICAgICA8ZGl2IGlkPVwiZXhwb3J0LWxpbmtcIj5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaWQ9XCJsYXllci1leHBvcnQtYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25FeHBvcnREYXRhfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9kb3dubG9hZC10by0yNC5zdmdcIj48L0ljb24+XG4gICAgICAgICAgICBFeHBvcnQgbGF5ZXJzIGFzIGNzdlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJleHBvcnQtbW9kYWxcIj5cbiAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5tb2RhbE9wZW59XG4gICAgICAgICAgICB0b2dnbGU9e3RoaXMub25DbG9zZWR9IC8vIFVzZSBvbkNsb3NlZCB0byB0b2dnbGUgdGhlIG1vZGFsXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJleHBvcnQtc3RhdHVzLW1vZGFsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0aGlzLm9uQ2xvc2VkfT5cbiAgICAgICAgICAgICAgRXhwb3J0IFN0YXR1c1xuICAgICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwb3J0LXN0YXR1cy1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgPEljb24gaWNvbj17dGhpcy5zdGF0dXNJY29uKCl9PjwvSWNvbj4ge3RoaXMuc3RhdHVzTWVzc2FnZSgpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsb3NlZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwb3J0Q1NWQ29tcG9uZW50O1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnV0dG9uLCBJY29ufSBmcm9tIFwiamltdS11aVwiO1xuaW1wb3J0IExheWVyIGZyb20gXCJlc3JpL2xheWVycy9MYXllclwiO1xuaW1wb3J0IExheWVyV3JhcHBlciBmcm9tIFwiLi4vTGF5ZXJXcmFwcGVyXCI7XG5cbmludGVyZmFjZSBBZGRMYXllckl0ZW1Qcm9wcyB7XG4gICAgbGF5ZXJXcmFwcGVyOiBMYXllcldyYXBwZXIgLy8gTGF5ZXJXcmFwcGVyIG9mIHRoZSBhc3NvY2lhdGVkIExheWVyXG4gICAgb25BZGRMYXllcjogKGxheWVyV3JhcHBlcjogTGF5ZXJXcmFwcGVyKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiBhZGRpbmcgTGF5ZXJcbiAgICBhY3RpdmU6IGJvb2xlYW4gLy8gd2hldGhlciB0aGUgTGF5ZXIgaXMgYWN0aXZlXG59XG5cblxuLyoqXG4gKiBBZGRMYXllckl0ZW0gYWxsb3dzIHRoZSB1c2VyIHRvIGFkZCBhIExheWVyIHRvIHRoZSBNYXBcbiAqL1xuY2xhc3MgQWRkTGF5ZXJJdGVtIGV4dGVuZHMgQ29tcG9uZW50PEFkZExheWVySXRlbVByb3BzLCB7fT4ge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b25cIlxuICAgICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQWRkTGF5ZXIodGhpcy5wcm9wcy5sYXllcldyYXBwZXIpfVxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRlcnRpYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5hY3RpdmV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17dGhpcy5wcm9wcy5hY3RpdmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9jaGVjay0zMi5zdmdcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL3BsdXMtMzIuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sYXllcldyYXBwZXIudGl0bGV9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZExheWVySXRlbTtcbiIsImltcG9ydCBcIi4vTGF5ZXJDb21wb25lbnQuc2Nzc1wiO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1RhYiwgVGFic30gZnJvbSAnamltdS11aSc7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi4vQ2F0ZWdvcnknO1xuaW1wb3J0IExheWVyU2VhcmNoIGZyb20gXCIuL0xheWVyU2VhcmNoXCI7XG5pbXBvcnQgQWRkTGF5ZXJJdGVtIGZyb20gXCIuL0FkZExheWVySXRlbVwiO1xuaW1wb3J0IExheWVyV3JhcHBlciBmcm9tIFwiLi4vTGF5ZXJXcmFwcGVyXCI7XG5cbmludGVyZmFjZSBBZGRMYXllcnNQcm9wcyB7XG4gICAgbGF5ZXJzOiBMYXllcldyYXBwZXJbXSAvLyBMaXN0IG9mIExheWVyV3JhcHBlcnMgdG8gcmVuZGVyXG4gICAgYWN0aXZlTGF5ZXJzOiBMYXllcldyYXBwZXJbXSAvLyBsaXN0IG9mIGFjdGl2ZSBMYXllcnNcbiAgICBvbkFkZExheWVyOiAobGF5ZXJXcmFwcGVyOiBMYXllcldyYXBwZXIpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIGFkZGluZyBMYXllcnNcbiAgICBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdIC8vIGxpc3Qgb2YgQ2F0ZWdvcmllc1xufVxuXG4vKipcbiAqIExheWVyQ29tcG9uZW50IGNvbnRhaW5zIG11bHRpcGxlIFRhYnMgb2YgQ2F0ZWdvcmllcyBhbmQgYWxsb3dzIHVzZXJzIHRvIGFkZCBMYXllcnMgdG8gdGhlIE1hcFxuICovXG5jbGFzcyBMYXllckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxBZGRMYXllcnNQcm9wcywge30+IHtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgbGlzdCBvZiBDYXRlZ29yaWVzIGFzIFRhYnNcbiAgICAgKi9cbiAgICByZW5kZXJDYXRlZ29yeVRhYnM6IEZ1bmN0aW9uID0gKCk6IFJlYWN0LlJlYWN0RWxlbWVudFtdID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e1wiY2F0ZWdvcnktXCIgKyBjYXRlZ29yeS5pZCArIFwiLXRhYlwifVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y2F0ZWdvcnkudGl0bGUgKyBcIiAoXCIgKyBjYXRlZ29yeS5sYXllcldyYXBwZXJzLmxlbmd0aCArIFwiKVwifVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17XCJjYXRlZ29yeS1cIiArIGNhdGVnb3J5LmlkICsgXCItdGFiLWNvbnRlbnRcIn0gY2xhc3NOYW1lPVwibGF5ZXItdGFic19fY29udGVudCBwLTUgYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubGF5ZXJXcmFwcGVycy5tYXAoKGxheWVyV3JhcHBlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRMYXllckl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyV3JhcHBlcj17bGF5ZXJXcmFwcGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRMYXllcj17dGhpcy5wcm9wcy5vbkFkZExheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVycy5pbmNsdWRlcyhsYXllcldyYXBwZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGF5ZXItY29tcG9uZW50XCI+XG4gICAgICAgICAgICAgICAgPGg0PkxheWVyczwvaDQ+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubGF5ZXJzICYmIChcbiAgICAgICAgICAgICAgICAgICAgPExheWVyU2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcnM9e3RoaXMucHJvcHMubGF5ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRMYXllcj17dGhpcy5wcm9wcy5vbkFkZExheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTGF5ZXJzPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVyc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItdGFic1wiPlxuICAgICAgICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKXt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNhdGVnb3JpZXMgJiYgdGhpcy5yZW5kZXJDYXRlZ29yeVRhYnMoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllckNvbXBvbmVudDtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0FkdmFuY2VkU2VsZWN0LCBJY29ufSBmcm9tIFwiamltdS11aVwiO1xuaW1wb3J0IEFkZExheWVySXRlbSBmcm9tIFwiLi9BZGRMYXllckl0ZW1cIjtcbmltcG9ydCBMYXllcldyYXBwZXIgZnJvbSBcIi4uL0xheWVyV3JhcHBlclwiO1xuXG5pbnRlcmZhY2UgQWRkTGF5ZXJTZWFyY2hQcm9wcyB7XG4gICAgbGF5ZXJzOiBMYXllcldyYXBwZXJbXSAvLyBsaXN0IG9mIExheWVyV3JhcHBlcnMgdG8gcmVuZGVyXG4gICAgYWN0aXZlTGF5ZXJzOiBMYXllcldyYXBwZXJbXSAvLyBsaXN0IG9mIGFjdGl2ZSBMYXllcnNcbiAgICBvbkFkZExheWVyOiAobGF5ZXJXcmFwcGVyOiBMYXllcldyYXBwZXIpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIGFkZGluZyBMYXllcnNcbn1cblxuLyoqXG4gKiBMYXllclNlYXJjaCBhbGxvd3MgdXNlcnMgdG8gc2VhcmNoIGZvciBhbmQgYWRkIExheWVycyB0byB0aGUgTWFwXG4gKi9cbmNsYXNzIExheWVyU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50PEFkZExheWVyU2VhcmNoUHJvcHMsIHt9PiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImxheWVyLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxBZHZhbmNlZFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBpc011bHRpcGxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBpc0VtcHR5T3B0aW9uSGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgc29ydFZhbHVlc0J5TGFiZWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG1lbnVQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBbMCwgLTQwXVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjdXN0b21Ecm9wZG93bkJ1dHRvbkNvbnRlbnQ9eygpID0+IHtyZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvc2VhcmNoLTMyLnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2ggZm9yIGxheWVyLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX19XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1ZhbHVlcz17dGhpcy5wcm9wcy5sYXllcnMubWFwKChsYXllcldyYXBwZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGxheWVyV3JhcHBlci50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbGF5ZXJXcmFwcGVyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxBZGRMYXllckl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyV3JhcHBlcj17bGF5ZXJXcmFwcGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRMYXllcj17dGhpcy5wcm9wcy5vbkFkZExheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVycy5pbmNsdWRlcyhsYXllcldyYXBwZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllclNlYXJjaDtcbiIsImltcG9ydCBcIi4vTGF5ZXJMaXN0Q29tcG9uZW50LnNjc3NcIjtcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0J1dHRvbiwgRHJvcGRvd24sIERyb3Bkb3duQnV0dG9uLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbSwgSWNvbn0gZnJvbSBcImppbXUtdWlcIjtcblxuaW50ZXJmYWNlIExheWVyTGlzdEJ1dHRvbnNQcm9wcyB7XG4gICAgb25DbGVhckFsbDogKCkgPT4gYW55IC8vIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGNsZWFyIGFsbCBMYXllcnNcbiAgICBvbkhpZGVMZWdlbmQ6ICgpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB0byBoaWRlIGxlZ2VuZHNcbiAgICBvblNob3dMZWdlbmQ6ICgpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB0byBzaG93IGxlZ2VuZHNcbiAgICBvbkhpZGVMYXllcnM6ICgpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB0byBoaWRlIGFsbCBMYXllcnNcbiAgICBvblNob3dMYXllcnM6ICgpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB0byBzaG93IGFsbCBMYXllcnNcbiAgICBhbGxMYXllcnNIaWRkZW46IGJvb2xlYW4gLy8gd2hldGhlciBhbGwgTGF5ZXJzIGFyZSBoaWRkZW5cbiAgICBhbGxMZWdlbmRzT3BlbjogYm9vbGVhbiAvLyB3aGV0aGVyIGFsbCBsZWdlbmRzIGFyZSBvcGVuXG4gICAgYWxsTGVnZW5kc0Nsb3NlZDogYm9vbGVhbiAvLyB3aGV0aGVyIGFsbCBsZWdlbmRzIGFyZSBjbG9zZWRcbn1cblxuaW50ZXJmYWNlIExheWVyTGlzdEJ1dHRvbnNTdGF0ZSB7XG59XG5cbi8qKlxuICogTGF5ZXJMaXN0QnV0dG9ucyBjb250YWlucyBCdXR0b25zIHRoYXQgY29udHJvbCB0aGUgYmVoYXZpb3Igb2YgYSBMYXllckxpc3RcbiAqL1xuY2xhc3MgTGF5ZXJMaXN0QnV0dG9ucyBleHRlbmRzIENvbXBvbmVudDxMYXllckxpc3RCdXR0b25zUHJvcHMsIExheWVyTGlzdEJ1dHRvbnNTdGF0ZT4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsYXllci1saXN0X19idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNsZWFyLWFsbC1idXR0b24tZ3JpZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsZWFyQWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbGVhci1hbGwtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENsZWFyIEFsbFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibGVnZW5kLWJ1dHRvbi1ncmlkLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsZWdlbmQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVydGlhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93PXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZWdlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvaGFtYnVyZ2VyLTMyLnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25tZW50PVwiZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25TaG93TGVnZW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNob3ctbGVnZW5kLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmFsbExlZ2VuZHNPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyBBbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25IaWRlTGVnZW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImhpZGUtbGVnZW5kLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmFsbExlZ2VuZHNDbG9zZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaWRlIEFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxheWVyLXZpc2liaWxpdHktZ3JpZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGF5ZXItdmlzaWJpbGl0eS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlcnRpYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5hbGxMYXllcnNIaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNob3dMYXllcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZUxheWVycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17dGhpcy5wcm9wcy5hbGxMYXllcnNIaWRkZW4gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL3ZpZXctaGlkZS0zMi5zdmdcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvdmlldy12aXNpYmxlLTMyLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hbGxMYXllcnNIaWRkZW4gPyBcIlNob3cgQWxsXCIgOiBcIkhpZGUgQWxsXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllckxpc3RCdXR0b25zO1xuIiwiaW1wb3J0IFwiLi9MYXllckxpc3RDb21wb25lbnQuc2Nzc1wiO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXllciBmcm9tIFwiZXNyaS9sYXllcnMvTGF5ZXJcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xuaW1wb3J0IHtKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnR9IGZyb20gJ2ppbXUtYXJjZ2lzJztcbmltcG9ydCBMYXllckxpc3QgZnJvbSBcImVzcmkvd2lkZ2V0cy9MYXllckxpc3RcIjtcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiZXNyaS93aWRnZXRzL0xheWVyTGlzdC9MaXN0SXRlbVwiO1xuaW1wb3J0IExheWVyU3R5bGVNb2RhbCBmcm9tIFwiLi9MYXllclN0eWxlTW9kYWxcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi4vVGVtcGxhdGVcIjtcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi4vQ2F0ZWdvcnlcIjtcbmltcG9ydCByZWFjdGl2ZVV0aWxzIGZyb20gXCJlc3JpL2NvcmUvcmVhY3RpdmVVdGlsc1wiO1xuaW1wb3J0IExheWVyTGlzdEJ1dHRvbnMgZnJvbSBcIi4vTGF5ZXJMaXN0QnV0dG9uc1wiO1xuaW1wb3J0IE1vcmVJbmZvTW9kYWwgZnJvbSBcIi4vTW9yZUluZm9Nb2RhbFwiO1xuaW1wb3J0IExlZ2VuZCBmcm9tIFwiZXNyaS93aWRnZXRzL0xlZ2VuZFwiO1xuXG5pbnRlcmZhY2UgTGF5ZXJMaXN0UHJvcHMge1xuICAgIHVzZU1hcFdpZGdldElkOiBzdHJpbmcgLy8gTWFwIHdpZGdldCBJRCB0byB1c2VcbiAgICBvblJlbW92ZUxheWVyOiAobGF5ZXI6IExheWVyKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiByZW1vdmluZyBMYXllclxuICAgIGdldExheWVyVGVtcGxhdGVzOiAobGF5ZXI6IExheWVyLCBhY3RpdmU6IGJvb2xlYW4pID0+IFRlbXBsYXRlW10gLy8gcmV0dXJucyBhY3RpdmUgVGVtcGxhdGVzIGZvciB0aGUgZ2l2ZW4gTGF5ZXJcbiAgICBnZXRMYXllckNhdGVnb3J5OiAobGF5ZXI6IExheWVyKSA9PiBDYXRlZ29yeSAvLyByZXR1cm5zIENhdGVnb3J5IG9mIHRoZSBnaXZlbiBMYXllclxuICAgIG51bUFjdGl2ZUxheWVyczogbnVtYmVyIC8vIHRoZSBudW1iZXIgb2YgYWN0aXZlIExheWVyc1xuICAgIG9uQ2xlYXJBbGw6ICgpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIGNsZWFyaW5nIGFsbCBMYXllcnNcbiAgICBnZXRMYXllckluZm86IChsYXllcjogTGF5ZXIpID0+IGFueVxufVxuXG5pbnRlcmZhY2UgTGF5ZXJMaXN0U3RhdGUge1xuICAgIGptdjogSmltdU1hcFZpZXcgLy8gSmltdU1hcFZpZXcgb2YgdGhlIGFzc29jaWF0ZWQgTWFwXG4gICAgd2lkZ2V0OiBMYXllckxpc3QgLy8gTGF5ZXJMaXN0IHdpZGdldCB0byByZW5kZXJcbiAgICBsYXllclN0eWxlTW9kYWxPcGVuOiBib29sZWFuIC8vIHdoZXRoZXIgdGhlIExheWVyU3R5bGVNb2RhbCBpcyBvcGVuXG4gICAgbW9yZUluZm9Nb2RhbE9wZW46IGJvb2xlYW4gLy8gd2hldGhlciB0aGUgTW9yZUluZm9Nb2RhbCBpcyBvcGVuXG4gICAgc2VsZWN0ZWRJdGVtOiBMaXN0SXRlbSAvLyBjdXJyZW50bHkgc2VsZWN0ZWQgTGF5ZXIgZm9yIExheWVyU3R5bGVNb2RhbCBwdXJwb3Nlc1xuICAgIGFsbExheWVyc0hpZGRlbjogYm9vbGVhbiAvLyB3aGV0aGVyIGFsbCBMYXllcnMgYXJlIGhpZGRlblxuICAgIGFsbExlZ2VuZHNPcGVuOiBib29sZWFuIC8vIHdoZXRoZXIgYWxsIGxlZ2VuZHMgYXJlIG9wZW5cbiAgICBhbGxMZWdlbmRzQ2xvc2VkOiBib29sZWFuIC8vIHdoZXRoZXIgYWxsIGxlZ2VuZHMgYXJlIGNsb3NlZFxufVxuXG4vKipcbiAqIExheWVyTGlzdENvbXBvbmVudCBpcyBhIGN1c3RvbWl6ZWQgQXJjR0lTIExheWVyTGlzdCB3aWRnZXQgdGhhdCBhbGxvd3MgdXNlcnMgdG8gcmVvcmRlciwgcmVtb3ZlLCBhbmQgcmVjb2xvclxuICogTWFwIGxheWVycy5cbiAqL1xuY2xhc3MgTGF5ZXJMaXN0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PExheWVyTGlzdFByb3BzLCBMYXllckxpc3RTdGF0ZT4ge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBteVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgam12OiBudWxsLFxuICAgICAgICAgICAgd2lkZ2V0OiBudWxsLFxuICAgICAgICAgICAgbGF5ZXJTdHlsZU1vZGFsT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBtb3JlSW5mb01vZGFsT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXG4gICAgICAgICAgICBhbGxMYXllcnNIaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgYWxsTGVnZW5kc09wZW46IGZhbHNlLFxuICAgICAgICAgICAgYWxsTGVnZW5kc0Nsb3NlZDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGVzIExheWVyTGlzdCBzZWxlY3Rpb24gYmVoYXZpb3Igd2l0aCBhIGN1c3RvbSBiZWhhdmlvciB3aGVuIExheWVySXRlbSBpcyBjbGlja2VkXG4gICAgICogQHBhcmFtIGl0ZW0gdGhlIGNsaWNrZWQgTGF5ZXJJdGVtXG4gICAgICovXG4gICAgb25JdGVtQ2xpY2sgPSAoaXRlbTogTGlzdEl0ZW0pID0+IHtcbiAgICAgICAgLy8gUmVtb3ZlZCB0b2dnbGUgdmlzaWJpbGl0eSBmdW5jdGlvbmFsaXR5IGluIFVYIENoYW5nZXMgUm91bmQgMiB0byBtYWtlIGRyYWcgYW5kIGRyb3BcbiAgICAgICAgLy8gYWZmb3JkYWJpbGl0eSBtb3JlIGNsZWFyXG4gICAgICAgIC8vIGl0ZW0ubGF5ZXIudmlzaWJsZSA9ICFpdGVtLmxheWVyLnZpc2libGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgYWxsIGxlZ2VuZHMgaW4gdGhlIExheWVyTGlzdFxuICAgICAqL1xuICAgIHNob3dMZWdlbmQgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGxpIG9mIHRoaXMuc3RhdGUud2lkZ2V0Lm9wZXJhdGlvbmFsSXRlbXMpIHtcbiAgICAgICAgICAgIGxpLnBhbmVsLm9wZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIGFsbCBsZWdlbmRzIGluIHRoZSBMYXllckxpc3RcbiAgICAgKi9cbiAgICBoaWRlTGVnZW5kID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBsaSBvZiB0aGlzLnN0YXRlLndpZGdldC5vcGVyYXRpb25hbEl0ZW1zKSB7XG4gICAgICAgICAgICBsaS5wYW5lbC5vcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhbGwgb3BlcmF0aW9uYWwgTGF5ZXJzXG4gICAgICovXG4gICAgc2hvd0xheWVycyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgbGkgb2YgdGhpcy5zdGF0ZS53aWRnZXQub3BlcmF0aW9uYWxJdGVtcykge1xuICAgICAgICAgICAgbGkubGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlcyBhbGwgb3BlcmF0aW9uYWwgTGF5ZXJzXG4gICAgICovXG4gICAgaGlkZUxheWVycyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgbGkgb2YgdGhpcy5zdGF0ZS53aWRnZXQub3BlcmF0aW9uYWxJdGVtcykge1xuICAgICAgICAgICAgbGkubGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgY29sb3IgYW5kIHNpemUgb2YgdGhpcy5jdXJyZW50LmxheWVyIGJhc2VkIG9uIGxheWVyIHN0eWxlIE1vZGFsXG4gICAgICovXG4gICAgY2hhbmdlU3R5bGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmcmVzaCh0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbGF5ZXJTdHlsZU1vZGFsT3BlbjogZmFsc2VcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGhlYWRlciBmb3IgTGVnZW5kXG4gICAgICogQHJldHVybiBhbiBIVE1MRWxlbWVudCB3aXRoIHRoZSB0ZXh0IFwiTGVnZW5kOiBcIlxuICAgICAqL1xuICAgIGNyZWF0ZUxlZ2VuZERpdiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwibGVnZW5kX19oZWFkZXJcIlxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiTGVnZW5kOiBcIlxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGFjdGl2ZSBUZW1wbGF0ZXMgZm9yIHRoZSBnaXZlbiBMYXllclxuICAgICAqIEBwYXJhbSBsYXllciB0aGUgTGF5ZXIgdG8gY2hlY2tcbiAgICAgKiBAcmV0dXJuIGFuIEhUTUxFbGVtZW50IHdpdGggYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBhY3RpdmUgVGVtcGxhdGUgbmFtZXNcbiAgICAgKi9cbiAgICBjcmVhdGVUZW1wbGF0ZXNEaXYgPSAobGF5ZXI6IExheWVyKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImxlZ2VuZF9fdGVtcGxhdGVzXCJcbiAgICAgICAgbGV0IGFjdGl2ZVRlbXBsYXRlcyA9IHRoaXMucHJvcHMuZ2V0TGF5ZXJUZW1wbGF0ZXMobGF5ZXIsIHRydWUpO1xuXG4gICAgICAgIGlmIChhY3RpdmVUZW1wbGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiRXZlbnRzOiBOb25lXCI7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhY3RpdmVUZW1wbGF0ZUxpc3QgPSBcIkV2ZW50czogXCI7XG4gICAgICAgIGZvciAobGV0IHRlbXBsYXRlIG9mIGFjdGl2ZVRlbXBsYXRlcykge1xuICAgICAgICAgICAgYWN0aXZlVGVtcGxhdGVMaXN0ICs9IFwiIFwiICsgdGVtcGxhdGUudGl0bGUgKyBcIixcIlxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYWN0aXZlVGVtcGxhdGVMaXN0LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgQ2F0ZWdvcnkgb2YgdGhlIGdpdmVuIExheWVyXG4gICAgICogQHBhcmFtIGxheWVyIHRoZSBMYXllciB0byBjaGVja1xuICAgICAqIEByZXR1cm4gYW4gSFRNTEVsZW1lbnQgd2l0aCB0aGUgbmFtZSBvZiB0aGUgQ2F0ZWdvcnlcbiAgICAgKi9cbiAgICBjcmVhdGVDYXRlZ29yeURpdiA9IChsYXllcjogTGF5ZXIpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwibGVnZW5kX19jYXRlZ29yeVwiO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5nZXRMYXllckNhdGVnb3J5KGxheWVyKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiQ2F0ZWdvcnk6IFwiICsgdGhpcy5wcm9wcy5nZXRMYXllckNhdGVnb3J5KGxheWVyKS50aXRsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoZXMgTGlzdEl0ZW1QYW5lbCBjb250ZW50XG4gICAgICogQHBhcmFtIGl0ZW0gdGhlIExpc3RJdGVtIHRvIHJlZnJlc2hcbiAgICAgKi9cbiAgICByZWZyZXNoID0gKGl0ZW06IExpc3RJdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnBhcmVudCkge1xuICAgICAgICAgICAgaXRlbS5wYW5lbC5jb250ZW50ID0gW1xuICAgICAgICAgICAgICAgIFwibGVnZW5kXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0ucGFuZWwuY29udGVudCA9IFtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUxlZ2VuZERpdigpLFxuICAgICAgICAgICAgICAgIFwibGVnZW5kXCIsXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVUZW1wbGF0ZXNEaXYoaXRlbS5sYXllciksXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVDYXRlZ29yeURpdihpdGVtLmxheWVyKVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBKaW11TWFwVmlldyBhbmQgY3JlYXRlcyBMYXllckxpc3Qgb24gYWN0aXZlIHZpZXcgY2hhbmdlXG4gICAgICogQHBhcmFtIGptdiB0aGUgbmV3IEppbXVNYXBWaWV3XG4gICAgICovXG4gICAgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5qbXYgJiYgdGhpcy5zdGF0ZS53aWRnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2lkZ2V0LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqbXYpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGptdjogam12XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIExheWVyTGlzdFxuICAgICAgICAgICAgaWYgKHRoaXMubXlSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyTGlzdDogTGF5ZXJMaXN0ID0gbmV3IExheWVyTGlzdCh7XG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IGptdi52aWV3LFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIENhbGxlZCBmb3IgZWFjaCBMaXN0SXRlbSBpbiBMYXllckxpc3RcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW1DcmVhdGVkRnVuY3Rpb246IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBldmVudC5pdGVtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbGVnZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBhbmVsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlc3JpLWljb24tZG93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaChpdGVtKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIExpc3RJdGVtIGFjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGl0ZW0ubGF5ZXIud2hlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3Rpb25zU2VjdGlvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVtb3ZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlc3JpLWljb24tbWludXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJab29tIHRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlc3JpLWljb24tem9vbS1pbi1tYWduaWZ5aW5nLWdsYXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInpvb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVkaXQgbGVnZW5kIHN0eWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL2xheWVycy1lZGl0YWJsZS0yNC5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiY2hhbmdlLXN0eWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVkaXQgbGF5ZXIgc3R5bGUgb25seSBzdXBwb3J0cyBTaW1wbGVSZW5kZXJlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxheWVyLnR5cGUgPT09IFwiZmVhdHVyZVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxheWVyLnJlbmRlcmVyLnR5cGUgPT09IFwic2ltcGxlXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtLmxheWVyLnJlbmRlcmVyLnN5bWJvbC5jb2xvciAhPSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYXllci5yZW5kZXJlci5zeW1ib2wudHlwZSA9PT0gXCJwaWN0dXJlLW1hcmtlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTZW5kIGJhY2t3YXJkc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvc2VuZC1iYWNrd2FyZHMtMjQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzZW5kLWJhY2t3YXJkc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkJyaW5nIGZvcndhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL2JyaW5nLWZvcndhcmQtMjQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJicmluZy1mb3J3YXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2VuZCB0byBiYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9zZW5kLXRvLWJhY2stMjQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzZW5kLXRvLWJhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJCcmluZyB0byBmcm9udFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvYnJpbmctdG8tZnJvbnQtMjQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJicmluZy10by1mcm9udFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlc3JpLWljb24tZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFkZEhhbmRsZXMoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE92ZXJyaWRlIHNlbGVjdGlvbiBiZWhhdmlvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0aXZlVXRpbHMud2F0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IGxheWVyTGlzdC5zZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGl0ZW0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLm9uSXRlbUNsaWNrKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9zZSBhY3Rpb25zIHNlY3Rpb24gd2hlbiBsZWdlbmQgcGFuZWwgb3BlbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdGl2ZVV0aWxzLndoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IGl0ZW0ucGFuZWwub3BlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gaXRlbS5hY3Rpb25zT3BlbiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9zZSBsZWdlbmQgcGFhbmVsIHdoZW4gYWN0aW9ucyBzZWN0aW9uIG9wZW5zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RpdmVVdGlscy53aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiBpdGVtLmFjdGlvbnNPcGVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiBpdGVtLnBhbmVsLm9wZW4gPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMubXlSZWYuY3VycmVudCxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVTZWxlY3Rpb25FbmFibGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgTGlzdEl0ZW0gYWN0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgICAgICAgICBsYXllckxpc3Qub24oXCJ0cmlnZ2VyLWFjdGlvblwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBldmVudC5hY3Rpb24uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyID0gZXZlbnQuaXRlbS5sYXllcjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zdGF0ZS5qbXYudmlldy5tYXAubGF5ZXJzLmZpbmRJbmRleCgobCkgPT4gbCA9PT0gbGF5ZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ6b29tXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR28gdG8gZnVsbCBleHRlbnQgb2YgbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5nb1RvKGxheWVyLmZ1bGxFeHRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJlbW92ZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBsYXllciBmcm9tIG1hcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25SZW1vdmVMYXllcihsYXllcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2hhbmdlLXN0eWxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3BlbiBMYXllciBTdHlsZSBNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlTW9kYWxPcGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW06IGV2ZW50Lml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW5kLWJhY2t3YXJkc1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlbmQgbGF5ZXIgYmFjayAxIGxldmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmptdi52aWV3Lm1hcC5yZW9yZGVyKGxheWVyLCBpbmRleCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJicmluZy1mb3J3YXJkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnJpbmcgbGF5ZXIgZm9yd2FyZCAxIGxldmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEgJiYgaW5kZXggPCB0aGlzLnN0YXRlLmptdi52aWV3Lm1hcC5sYXllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam12LnZpZXcubWFwLnJlb3JkZXIobGF5ZXIsIGluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbmQtdG8tYmFja1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgbGF5ZXIgdG8gYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam12LnZpZXcubWFwLnJlb3JkZXIobGF5ZXIsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJicmluZy10by1mcm9udFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgbGF5ZXIgdG8gZnJvbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmptdi52aWV3Lm1hcC5yZW9yZGVyKGxheWVyLCB0aGlzLnN0YXRlLmptdi52aWV3Lm1hcC5sYXllcnMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlc2NyaXB0aW9uXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVJbmZvTW9kYWxPcGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW06IGV2ZW50Lml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBXYXRjaCBMYXllckxpc3QgcHJvcGVydGllcyB0byBkZXRlcm1pbmUgd2hldGhlciBidXR0b25zIHNob3VsZCBiZSBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIGxheWVyTGlzdC5hZGRIYW5kbGVzKFtcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RpdmVVdGlscy53YXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IGxheWVyTGlzdC5vcGVyYXRpb25hbEl0ZW1zLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiAmJiAhY3Vyci5sYXllci52aXNpYmxlLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbExheWVyc0hpZGRlbjogbGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICYmICFjdXJyLmxheWVyLnZpc2libGUsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICByZWFjdGl2ZVV0aWxzLndhdGNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gbGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICYmIGN1cnIucGFuZWwub3BlbiwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxMZWdlbmRzT3BlbjogbGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICYmIGN1cnIucGFuZWwub3BlbiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0aXZlVXRpbHMud2F0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiBsYXllckxpc3Qub3BlcmF0aW9uYWxJdGVtcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgJiYgIWN1cnIucGFuZWwub3BlbiwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxMZWdlbmRzQ2xvc2VkOiBsYXllckxpc3Qub3BlcmF0aW9uYWxJdGVtcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgJiYgIWN1cnIucGFuZWwub3BlbiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHdpZGdldDogbGF5ZXJMaXN0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLndpZGdldCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnN0YXRlLndpZGdldC52aWV3TW9kZWwub3BlcmF0aW9uYWxJdGVtcykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGF5ZXItbGlzdC1jb21wb25lbnRcIj5cbiAgICAgICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17dGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxoMz57XCJDdXJyZW50IExheWVycyAoXCIgKyB0aGlzLnByb3BzLm51bUFjdGl2ZUxheWVycyArIFwiKVwifTwvaDM+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm51bUFjdGl2ZUxheWVycyA8PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuby1sYXllcnMtbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbT5Zb3UgZG8gbm90IGhhdmUgYW55IGxheWVycyBhZGRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2V0IHN0YXJ0ZWQgYnkgYWRkaW5nIGEgc2NlbmFyaW8gb3IgbGF5ZXIgZnJvbSB0aGUgbGVmdCBzaWRlIG9mIHRoZSBwYW5lbC48L2VtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm51bUFjdGl2ZUxheWVycyA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExheWVyTGlzdEJ1dHRvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsZWFyQWxsPXt0aGlzLnByb3BzLm9uQ2xlYXJBbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlTGVnZW5kPXt0aGlzLmhpZGVMZWdlbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TaG93TGVnZW5kPXt0aGlzLnNob3dMZWdlbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TaG93TGF5ZXJzPXt0aGlzLnNob3dMYXllcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlTGF5ZXJzPXt0aGlzLmhpZGVMYXllcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsTGF5ZXJzSGlkZGVuPXt0aGlzLnN0YXRlLmFsbExheWVyc0hpZGRlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxMZWdlbmRzT3Blbj17dGhpcy5zdGF0ZS5hbGxMZWdlbmRzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxMZWdlbmRzQ2xvc2VkPXt0aGlzLnN0YXRlLmFsbExlZ2VuZHNDbG9zZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsYXllci1saXN0X19jb250ZW50XCIgcmVmPXt0aGlzLm15UmVmfS8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5sYXllciAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5sYXllci50eXBlID09PSBcImZlYXR1cmVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0ubGF5ZXIgYXMgRmVhdHVyZUxheWVyKS5yZW5kZXJlci50eXBlID09PSBcInNpbXBsZVwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXllclN0eWxlTW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNhdmU9e3RoaXMuY2hhbmdlU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmxheWVyIGFzIEZlYXR1cmVMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmxheWVyU3R5bGVNb2RhbE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlT3Blbj17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7bGF5ZXJTdHlsZU1vZGFsT3BlbjogIXRoaXMuc3RhdGUubGF5ZXJTdHlsZU1vZGFsT3Blbn0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmxheWVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb3JlSW5mb01vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmxheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUubW9yZUluZm9Nb2RhbE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlT3Blbj17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7bW9yZUluZm9Nb2RhbE9wZW46ICF0aGlzLnN0YXRlLm1vcmVJbmZvTW9kYWxPcGVufSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TGF5ZXJJbmZvPXt0aGlzLnByb3BzLmdldExheWVySW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJMaXN0Q29tcG9uZW50O1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnV0dG9uLCBNb2RhbCwgTW9kYWxCb2R5LCBNb2RhbEhlYWRlciwgTW9kYWxGb290ZXIsIFNsaWRlcn0gZnJvbSAnamltdS11aSc7XG5pbXBvcnQge0NvbG9yUGlja2VyfSBmcm9tIFwiamltdS11aS9iYXNpYy9jb2xvci1waWNrZXJcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiZXNyaS9Db2xvclwiO1xuaW1wb3J0IFNpbXBsZVJlbmRlcmVyIGZyb20gXCJlc3JpL3JlbmRlcmVycy9TaW1wbGVSZW5kZXJlclwiO1xuaW1wb3J0IFNpbXBsZU1hcmtlclN5bWJvbCBmcm9tIFwiZXNyaS9zeW1ib2xzL1NpbXBsZU1hcmtlclN5bWJvbFwiO1xuaW1wb3J0IFBpY3R1cmVNYXJrZXJTeW1ib2wgZnJvbSBcImVzcmkvc3ltYm9scy9QaWN0dXJlTWFya2VyU3ltYm9sXCI7XG5pbXBvcnQgU2ltcGxlTGluZVN5bWJvbCBmcm9tIFwiZXNyaS9zeW1ib2xzL1BpY3R1cmVNYXJrZXJTeW1ib2xcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xuXG5pbnRlcmZhY2UgTGF5ZXJTdHlsZU1vZGFsUHJvcHMge1xuICAgIG9uU2F2ZTogKCkgPT4gYW55IC8vIGNhbGxiYWNrIGZ1bmN0aW9uIHVwb24gc2F2aW5nIExheWVyIHN0eWxlXG4gICAgbGF5ZXI6IEZlYXR1cmVMYXllciAvLyB0aGUgTGF5ZXIgdG8gZWRpdFxuICAgIG9wZW46IGJvb2xlYW4gLy8gd2hldGhlciB0aGlzIE1vZGFsIGlzIG9wZW5cbiAgICB0b2dnbGVPcGVuOiAoKSA9PiBhbnkgLy8gdG9nZ2xlcyB0aGUgTW9kYWwgYmV0d2VlbiBvcGVuIGFuZCBjbG9zZWRcblxufVxuXG5pbnRlcmZhY2UgTGF5ZXJTdHlsZU1vZGFsU3RhdGUge1xuICAgIHNob3dDb2xvclBpY2tlcjogYm9vbGVhbiAvLyB3aGV0aGVyIHRvIHNob3cgdGhlIENvbG9yUGlja2VyXG4gICAgc2hvd1NpemVTbGlkZXI6IGJvb2xlYW4gLy8gd2hldGhlciB0byBzaG93IHRoZSBzaXplIFNsaWRlclxuICAgIGNvbG9yOiBzdHJpbmcgLy8gY3VycmVudGx5IHNlbGVjdGVkIENvbG9yXG4gICAgc2l6ZTogbnVtYmVyIC8vIGN1cnJlbnRseSBzZWxlY3RlZCBzaXplXG4gICAgb3JpZ2luYWxSZW5kZXJlcjogU2ltcGxlUmVuZGVyZXJcbn1cblxuLyoqXG4gKiBMYXllclN0eWxlTW9kYWwgZ2l2ZXMgdXNlcnMgdGhlIGFiaWxpdHkgdG8gZWRpdCB0aGUgYXBwZWFyYW5jZSBvZiByZW5kZXJlZCBMYXllcnMuXG4gKiBUaGUgZWRpdCBsYXllciBzdHlsZSBmdW5jdGlvbmFsaXR5IG9ubHkgc3VwcG9ydHMgU2ltcGxlUmVuZGVyZXJzLlxuICovXG5jbGFzcyBMYXllclN0eWxlTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQ8TGF5ZXJTdHlsZU1vZGFsUHJvcHMsIExheWVyU3R5bGVNb2RhbFN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3dDb2xvclBpY2tlcjogZmFsc2UsXG4gICAgICAgICAgICBzaG93U2l6ZVNsaWRlcjogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcjogbnVsbCxcbiAgICAgICAgICAgIHNpemU6IG51bGwsXG4gICAgICAgICAgICBvcmlnaW5hbFJlbmRlcmVyOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGJlaGF2aW9yIHVwb24gb3BlbmluZyBNb2RhbFxuICAgICAqL1xuICAgIG9uT3BlbmVkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9yaWdpbmFsUmVuZGVyZXI6IFNpbXBsZVJlbmRlcmVyLmZyb21KU09OKHRoaXMucHJvcHMubGF5ZXIucmVuZGVyZXIudG9KU09OKCkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzeW1ib2wgPSAodGhpcy5wcm9wcy5sYXllci5yZW5kZXJlciBhcyBTaW1wbGVSZW5kZXJlcikuc3ltYm9sO1xuICAgICAgICBzd2l0Y2ggKHN5bWJvbC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2ltcGxlLW1hcmtlclwiOlxuICAgICAgICAgICAgICAgIGlmIChzeW1ib2wuc3R5bGUgPT09IFwiY3Jvc3NcIiB8fCBzeW1ib2wuc3R5bGUgPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbG9yUGlja2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVTbGlkZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3ltYm9sLm91dGxpbmUuY29sb3IudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IHN5bWJvbC5zaXplXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbG9yUGlja2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVTbGlkZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3ltYm9sLmNvbG9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBzeW1ib2wuc2l6ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicGljdHVyZS1tYXJrZXJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvbG9yUGlja2VyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVTbGlkZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogKHN5bWJvbCBhcyBQaWN0dXJlTWFya2VyU3ltYm9sKS53aWR0aFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNpbXBsZS1maWxsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNob3dDb2xvclBpY2tlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVTbGlkZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3ltYm9sLmNvbG9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzaW1wbGUtbGluZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93Q29sb3JQaWNrZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNob3dTaXplU2xpZGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3ltYm9sLmNvbG9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IChzeW1ib2wgYXMgU2ltcGxlTGluZVN5bWJvbCkud2lkdGhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNob3dDb2xvclBpY2tlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVTbGlkZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3ltYm9sLmNvbG9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgYmVoYXZpb3Igd2hlbiBjb2xvciBwaWNrZXIgd2FybmluZyBmb3IgcGljdHVyZSBtYXJrZXIgaXMgY2xpY2tlZFxuICAgICAqL1xuICAgIGhhbmRsZUNvbG9yV2FybmluZ0NsaWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dDb2xvclBpY2tlcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgKHRoaXMucHJvcHMubGF5ZXIucmVuZGVyZXIgYXMgU2ltcGxlUmVuZGVyZXIpLnN5bWJvbCA9IG5ldyBTaW1wbGVNYXJrZXJTeW1ib2woe1xuICAgICAgICAgICAgY29sb3I6IHRoaXMuc3RhdGUuY29sb3IsXG4gICAgICAgICAgICBzaXplOiB0aGlzLnN0YXRlLnNpemVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBMYXllciBzdHlsZSB1cG9uIGNvbG9yIGNoYW5nZVxuICAgICAqIEBwYXJhbSBjb2xvciB0aGUgbmV3IGNvbG9yXG4gICAgICovXG4gICAgaGFuZGxlQ2hhbmdlQ29sb3IgPSAoY29sb3I6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb2xvcjogY29sb3J9KTtcbiAgICAgICAgbGV0IGxheWVyID0gdGhpcy5wcm9wcy5sYXllciBhcyBGZWF0dXJlTGF5ZXI7XG4gICAgICAgIGxldCByZW5kZXJlciA9IGxheWVyLnJlbmRlcmVyIGFzIFNpbXBsZVJlbmRlcmVyO1xuXG4gICAgICAgIC8vIENoYW5nZSBzaXplIGFuZCBjb2xvclxuICAgICAgICBzd2l0Y2ggKHJlbmRlcmVyLnN5bWJvbC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2ltcGxlLW1hcmtlclwiOlxuICAgICAgICAgICAgICAgIGlmIChyZW5kZXJlci5zeW1ib2wuc3R5bGUgPT09IFwiY3Jvc3NcIiB8fCByZW5kZXJlci5zeW1ib2wuc3R5bGUgPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnN5bWJvbC5vdXRsaW5lLmNvbG9yID0gbmV3IENvbG9yKGNvbG9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5zeW1ib2wuY29sb3IgPSBuZXcgQ29sb3IoY29sb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzaW1wbGUtZmlsbFwiOlxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnN5bWJvbC5jb2xvciA9IG5ldyBDb2xvcihjb2xvcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2ltcGxlLWxpbmVcIjpcbiAgICAgICAgICAgICAgICByZW5kZXJlci5zeW1ib2wuY29sb3IgPSBuZXcgQ29sb3IoY29sb3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZW5kZXJlci5zeW1ib2wuY29sb3IgPSBuZXcgQ29sb3IoY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBsYXllciBzdHlsZSB1cG9uIHNpemUgY2hhbmdlXG4gICAgICogQHBhcmFtIHNpemUgdGhlIG5ldyBzaXplXG4gICAgICovXG4gICAgaGFuZGxlQ2hhbmdlU2l6ZSA9IChzaXplOiBudW1iZXIpID0+IHtcbiAgICAgICAgbGV0IGxheWVyID0gdGhpcy5wcm9wcy5sYXllciBhcyBGZWF0dXJlTGF5ZXI7XG4gICAgICAgIGxldCByZW5kZXJlciA9IGxheWVyLnJlbmRlcmVyIGFzIFNpbXBsZVJlbmRlcmVyO1xuXG4gICAgICAgIC8vIENoYW5nZSBzaXplIGFuZCBjb2xvclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaXplOiBzaXplfSk7XG4gICAgICAgIHN3aXRjaCAocmVuZGVyZXIuc3ltYm9sLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzaW1wbGUtbWFya2VyXCI6XG4gICAgICAgICAgICAgICAgKHJlbmRlcmVyLnN5bWJvbCBhcyBTaW1wbGVNYXJrZXJTeW1ib2wpLnNpemUgPSBzaXplO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBpY3R1cmUtbWFya2VyXCI6XG4gICAgICAgICAgICAgICAgbGV0IHBtU3ltYm9sID0gcmVuZGVyZXIuc3ltYm9sIGFzIFBpY3R1cmVNYXJrZXJTeW1ib2xcbiAgICAgICAgICAgICAgICBsZXQgcmF0aW86IG51bWJlciA9IHBtU3ltYm9sLmhlaWdodCAvIHBtU3ltYm9sLndpZHRoO1xuICAgICAgICAgICAgICAgIHBtU3ltYm9sLndpZHRoID0gc2l6ZTtcbiAgICAgICAgICAgICAgICBwbVN5bWJvbC5oZWlnaHQgPSBzaXplICogcmF0aW87XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2ltcGxlLWxpbmVcIjpcbiAgICAgICAgICAgICAgICAocmVuZGVyZXIuc3ltYm9sIGFzIFNpbXBsZUxpbmVTeW1ib2wpLndpZHRoID0gc2l6ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5sYXllci5yZW5kZXJlciA9IHRoaXMuc3RhdGUub3JpZ2luYWxSZW5kZXJlcjtcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVPcGVuKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnByb3BzLm9wZW59XG4gICAgICAgICAgICAgICAgb25DbG9zZWQ9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKXt9fVxuICAgICAgICAgICAgICAgIG9uRW50ZXI9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKXt9fVxuICAgICAgICAgICAgICAgIG9uRXhpdD17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgb25PcGVuZWQ9e3RoaXMub25PcGVuZWR9XG4gICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnByb3BzLnRvZ2dsZU9wZW59XG4gICAgICAgICAgICAgICAgYmFja2Ryb3BDbGFzc05hbWU9XCJsYXllci1zdHlsZS1tb2RhbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGVPcGVufT5cbiAgICAgICAgICAgICAgICAgICAgRWRpdCB7dGhpcy5wcm9wcy5sYXllci50aXRsZX0gTGVnZW5kIFN0eWxlXG4gICAgICAgICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dTaXplU2xpZGVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheWVyLXNpemUtc2xpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBNYXJrZXIgU2l6ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkxheWVyIFNpemUgU2xpZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VTaXplKCtlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9e01hdGgubWF4KDUwLCB0aGlzLnN0YXRlLnNpemUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt0aGlzLnN0YXRlLnNpemV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dDb2xvclBpY2tlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXllci1jb2xvci1waWNrZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IE1hcmtlciBDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTGF5ZXIgQ29sb3IgUGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0ge3RoaXMuc3RhdGUuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjb2xvcikgPT4gdGhpcy5oYW5kbGVDaGFuZ2VDb2xvcihjb2xvcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiBub1JlZkNoZWNrKCl7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgKCh0aGlzLnByb3BzLmxheWVyIGFzIEZlYXR1cmVMYXllcikucmVuZGVyZXIgYXMgU2ltcGxlUmVuZGVyZXIpLnN5bWJvbC50eXBlID09PSBcInBpY3R1cmUtbWFya2VyXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLnNob3dDb2xvclBpY2tlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBpY3R1cmUtbWFya2VyLXdhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvbG9yV2FybmluZ0NsaWNrfT5DaGFuZ2UgQ29sb3I8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbT5DaGFuZ2luZyB0aGUgY29sb3Igb2YgdGhpcyBsYXllciByZXF1aXJlcyBjb252ZXJ0aW5nIHRoZSBtYXJrZXIgZnJvbSBhIHBpY3R1cmUgdG8gYSBzaW1wbGUgY2lyY3VsYXIgbWFya2VyLjwvZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhbmNlbH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uU2F2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2F2ZS10ZW1wbGF0ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBEb25lXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJTdHlsZU1vZGFsO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnV0dG9uLCBNb2RhbCwgTW9kYWxCb2R5LCBNb2RhbEhlYWRlciwgTW9kYWxGb290ZXIsIFNsaWRlcn0gZnJvbSAnamltdS11aSc7XG5pbXBvcnQgTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0xheWVyXCI7XG5cbmludGVyZmFjZSBNb3JlSW5mb01vZGFsUHJvcHMge1xuICAgIGxheWVyOiBMYXllciAvLyB0aGUgTGF5ZXIgdG8gc2hvdyBpbmZvcm1hdGlvbiBhYm91dFxuICAgIG9wZW46IGJvb2xlYW4gLy8gd2hldGhlciB0aGlzIE1vZGFsIGlzIG9wZW5cbiAgICB0b2dnbGVPcGVuOiAoKSA9PiBhbnkgLy8gdG9nZ2xlcyB0aGUgTW9kYWwgYmV0d2VlbiBvcGVuIGFuZCBjbG9zZWRcbiAgICBnZXRMYXllckluZm86IChsYXllcjogTGF5ZXIpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB0byBnZXQgTGF5ZXIgaW5mb1xufVxuXG5pbnRlcmZhY2UgTW9yZUluZm9Nb2RhbFN0YXRlIHtcbiAgICBzb3VyY2U6IHN0cmluZyAvLyB0aGUgTGF5ZXIgc291cmNlXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyAvLyB0aGUgTGF5ZXIgZGVzY3JpcHRpb25cbiAgICB1cmw6IHN0cmluZyAvLyB0aGUgTGF5ZXIgVVJMXG59XG5cbi8qKlxuICogTW9yZUluZm9Nb2RhbCBkaXNwbGF5cyBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGEgTGF5ZXIgdG8gdXNlcnNcbiAqL1xuY2xhc3MgTW9yZUluZm9Nb2RhbCBleHRlbmRzIENvbXBvbmVudDxNb3JlSW5mb01vZGFsUHJvcHMsIE1vcmVJbmZvTW9kYWxTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzb3VyY2U6IFwiLi4uXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCIuLi5cIixcbiAgICAgICAgICAgIHVybDogXCJcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBiZWhhdmlvciB1cG9uIG9wZW5pbmcgTW9kYWxcbiAgICAgKi9cbiAgICBvbk9wZW5lZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzb3VyY2U6IFwiLi4uXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCIuLi5cIixcbiAgICAgICAgICAgIHVybDogXCJcIlxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGluZm8gPSBhd2FpdCB0aGlzLnByb3BzLmdldExheWVySW5mbyh0aGlzLnByb3BzLmxheWVyKTtcbiAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoaW5mbyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICBpc09wZW49e3RoaXMucHJvcHMub3Blbn1cbiAgICAgICAgICAgICAgICBvbkNsb3NlZD17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgb25FbnRlcj17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgb25FeGl0PXtmdW5jdGlvbiBub1JlZkNoZWNrKCl7fX1cbiAgICAgICAgICAgICAgICBvbk9wZW5lZD17dGhpcy5vbk9wZW5lZH1cbiAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMucHJvcHMudG9nZ2xlT3Blbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0aGlzLnByb3BzLnRvZ2dsZU9wZW59PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sYXllci50aXRsZX0gRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICA8L01vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItc291cmNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTb3VyY2U6IHt0aGlzLnN0YXRlLnNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiB7dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZU9wZW59XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnVybCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3Blbih0aGlzLnN0YXRlLnVybCwgXCJfYmxhbmtcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlZSBNb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vcmVJbmZvTW9kYWw7XG4iLCJpbXBvcnQge0J1dHRvbiwgVGV4dElucHV0LCBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSwgTW9kYWxGb290ZXIsIEljb259IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmludGVyZmFjZSBTYXZlVGVtcGxhdGVQcm9wcyB7XG4gICAgaGFuZGxlQ2xpY2s6ICh0aXRsZTogc3RyaW5nKSA9PiBhbnkgLy8gZnVuY3Rpb24gdG8gY2FsbCBvbiBjbGlja1xuICAgIHNob3c6IGJvb2xlYW4gLy8gd2hldGhlciB0byBzaG93IHRoZSBidXR0b25cbn1cblxuaW50ZXJmYWNlIFNhdmVUZW1wbGF0ZVN0YXRlIHtcbiAgICB0aXRsZTogc3RyaW5nIC8vIHRpdGxlIG9mIHRoZSBuZXcgVGVtcGxhdGVcbiAgICBvcGVuOiBib29sZWFuIC8vIHdoZXRoZXIgdGhlIE1vZGFsIGlzIG9wZW5cbn1cblxuLyoqXG4gKiBTYXZlVGVtcGxhdGVDb21wb25lbnQgcmVuZGVycyB0aGUgYnV0dG9ucyB0aGF0IGFsbG93IHVzZXJzIHRvIHNhdmUgdGhlIGFjdGl2ZSBMYXllcnMgYXMgYSBuZXcgVGVtcGxhdGVcbiAqL1xuY2xhc3MgU2F2ZVRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PFNhdmVUZW1wbGF0ZVByb3BzLCBTYXZlVGVtcGxhdGVTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0aXRsZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIFNhdmUgVGVtcGxhdGUgTW9kYWwgYmV0d2VlbiBvcGVuIGFuZCBjbG9zZWRcbiAgICAgKi9cbiAgICB0b2dnbGVPcGVuID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46ICF0aGlzLnN0YXRlLm9wZW5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2tWYWxpZGl0eSA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbGlkOiB0ZXh0Lmxlbmd0aCA8PSA1MCxcbiAgICAgICAgICAgIG1zZzogXCJNYXhpbXVtIHRpdGxlIGxlbmd0aCBpcyA1MCBjaGFyYWN0ZXJzIVwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cInNhdmUtdGVtcGxhdGUtY29tcG9uZW50XCI+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvdyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3Blbi1zYXZlLXRlbXBsYXRlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL3BsdXMtMzIuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSBBcyBOZXcgU2NlbmFyaW9cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2VkPXtmdW5jdGlvbiBub1JlZkNoZWNrKCl7fX1cbiAgICAgICAgICAgICAgICAgICAgb25FbnRlcj17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgICAgIG9uRXhpdD17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgICAgIG9uT3BlbmVkPXtmdW5jdGlvbiBub1JlZkNoZWNrKCl7fX1cbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnRvZ2dsZU9wZW59XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0aGlzLnRvZ2dsZU9wZW59PlxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSBBcyBOZXcgRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50IFRpdGxlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRXZlbnQgVGl0bGUuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9eyh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7dGl0bGU6IHZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWxpZGl0eU9uQ2hhbmdlPXt0aGlzLmNoZWNrVmFsaWRpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWxpZGl0eU9uQWNjZXB0PXt0aGlzLmNoZWNrVmFsaWRpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt0aGlzLnByb3BzLmhhbmRsZUNsaWNrKHRoaXMuc3RhdGUudGl0bGUpOyB0aGlzLnRvZ2dsZU9wZW4oKTt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2F2ZS10ZW1wbGF0ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmVUZW1wbGF0ZUNvbXBvbmVudDtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1RhYnMsIFRhYn0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi4vVGVtcGxhdGVcIjtcblxuaW50ZXJmYWNlIFRlbXBsYXRlc1Byb3BzIHtcbiAgICBhY3RpdmVUZW1wbGF0ZXM6IFRlbXBsYXRlW10gLy8gbGlzdCBvZiBhY3RpdmUgVGVtcGxhdGVzXG4gICAgcmVtb3ZlVGVtcGxhdGU6ICh0ZW1wbGF0ZTogVGVtcGxhdGUpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIHJlbW92aW5nIGEgVGVtcGxhdGVcbn1cblxuLyoqXG4gKiBBY3RpdmVUZW1wbGF0ZXNNZW51IHJlbmRlcnMgYSBsaXN0IG9mIGFjdGl2ZSBUZW1wbGF0ZXMgYW5kIGFsbG93cyB1c2VycyB0byByZW1vdmUgVGVtcGxhdGVzXG4gKi9cbmNsYXNzIEFjdGl2ZVRlbXBsYXRlc01lbnUgZXh0ZW5kcyBDb21wb25lbnQ8VGVtcGxhdGVzUHJvcHMsIHt9PiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImFjdGl2ZS10ZW1wbGF0ZXMtbWVudVwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3RpdmVUZW1wbGF0ZXMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuby1hY3RpdmUtdGVtcGxhdGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZW0+QWRkZWQgU2NlbmFyaW9zIHdpbGwgYXBwZWFyIGhlcmUuPC9lbT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBpbGxzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aXZlVGVtcGxhdGVzLm1hcCgodGVtcGxhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJcIiArIHRlbXBsYXRlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RlbXBsYXRlLnRpdGxlICsgXCIgKFwiICsgdGVtcGxhdGUubGF5ZXJXcmFwcGVycy5sZW5ndGggKyBcIilcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHRoaXMucHJvcHMucmVtb3ZlVGVtcGxhdGUodGVtcGxhdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3RpdmVUZW1wbGF0ZXNNZW51O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQWRkTGF5ZXJJdGVtIGZyb20gXCIuLi9MYXllckNvbXBvbmVudC9BZGRMYXllckl0ZW1cIjtcbmltcG9ydCB7Q29sbGFwc2FibGVQYW5lbCwgQnV0dG9uLCBJY29ufSBmcm9tIFwiamltdS11aVwiXG5pbXBvcnQgVGVtcGxhdGUgZnJvbSAnLi4vVGVtcGxhdGUnXG5pbXBvcnQgTGF5ZXJXcmFwcGVyIGZyb20gXCIuLi9MYXllcldyYXBwZXJcIjtcblxuaW50ZXJmYWNlIEFkZFRlbXBsYXRlSXRlbVByb3BzIHtcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGUgLy8gVGVtcGxhdGUgdG8gYWRkXG4gICAgYWN0aXZlTGF5ZXJzOiBMYXllcldyYXBwZXJbXSAvLyBsaXN0IG9mIGFjdGl2ZSBMYXllcnNcbiAgICBhY3RpdmVUZW1wbGF0ZXM6IFRlbXBsYXRlW10gLy8gbGlzdCBvZiBhY3RpdmUgVGVtcGxhdGVzXG4gICAgb25BZGRMYXllcjogKGxheWVyV3JhcHBlcjogTGF5ZXJXcmFwcGVyKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiBhZGRpbmcgTGF5ZXJcbiAgICBvbkFkZFRlbXBsYXRlOiAodGVtcGxhdGU6IFRlbXBsYXRlKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiBhZGRpbmcgVGVtcGxhdGVcbn1cblxuLyoqXG4gKiBBZGRUZW1wbGF0ZUl0ZW0gYWxsb3dzIHVzZXJzIHRvIGFkZCBhbGwgTGF5ZXJzIGluIGEgVGVtcGxhdGUgdG8gdGhlIE1hcFxuICovXG5jbGFzcyBBZGRUZW1wbGF0ZUl0ZW0gZXh0ZW5kcyBDb21wb25lbnQ8QWRkVGVtcGxhdGVJdGVtUHJvcHMsIHt9PiB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIERpc2FibGUgdGhlIGFkZCBidXR0b24gaWYgdGhlIFRlbXBsYXRlIHdhcyBhZGRlZCB0byB0aGUgbGlzdCBvZiBhY3RpdmUgVGVtcGxhdGVzIGFuZFxuICAgICAgICAvLyBhbGwgTGF5ZXJzIGFyZSBjdXJyZW50bHkgYWRkZWQgdG8gdGhlIE1hcFxuICAgICAgICBsZXQgYWRkZWQ6IGJvb2xlYW4gPSB0aGlzLnByb3BzLmFjdGl2ZVRlbXBsYXRlcy5pbmNsdWRlcyh0aGlzLnByb3BzLnRlbXBsYXRlKTtcbiAgICAgICAgaWYgKGFkZGVkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBsYXllcldyYXBwZXIgb2YgdGhpcy5wcm9wcy50ZW1wbGF0ZS5sYXllcldyYXBwZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLmFjdGl2ZUxheWVycy5pbmNsdWRlcyhsYXllcldyYXBwZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29sbGFwc2FibGVQYW5lbFxuICAgICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQWRkVGVtcGxhdGUodGhpcy5wcm9wcy50ZW1wbGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlcnRpYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLnRlbXBsYXRlLmxheWVyV3JhcHBlcnMubGVuZ3RoID09PSAwIHx8IGFkZGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17YWRkZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL2NoZWNrLTMyLnN2Z1wiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9wbHVzLTMyLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50ZW1wbGF0ZS50aXRsZSArIFwiIChcIiArIHRoaXMucHJvcHMudGVtcGxhdGUubGF5ZXJXcmFwcGVycy5sZW5ndGggKyBcIilcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldmVsPXswfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy50ZW1wbGF0ZS5sYXllcldyYXBwZXJzLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlbXBsYXRlLWRyb3Bkb3duX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRlbXBsYXRlLmxheWVyV3JhcHBlcnMubWFwKChfdmFsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFwIGluIHJldmVyc2Ugb3JkZXIgdG8gbWFpbnRhaW4gY29uc2lzdGVuY3kgd2l0aCBMYXllciBMaXN0IG9yZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGF5ZXJXcmFwcGVyID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRlbXBsYXRlLmxheWVyV3JhcHBlcnNbdGhpcy5wcm9wcy50ZW1wbGF0ZS5sYXllcldyYXBwZXJzLmxlbmd0aCAtIGluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRMYXllckl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJXcmFwcGVyPXtsYXllcldyYXBwZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkTGF5ZXI9e3RoaXMucHJvcHMub25BZGRMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVycy5pbmNsdWRlcyhsYXllcldyYXBwZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sbGFwc2FibGVQYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRlbXBsYXRlSXRlbTtcbiIsImltcG9ydCBcIi4vVGVtcGxhdGVDb21wb25lbnQuc2Nzc1wiO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7SWNvbiwgVG9vbHRpcH0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi4vVGVtcGxhdGVcIjtcbmltcG9ydCBUZW1wbGF0ZVNlYXJjaCBmcm9tIFwiLi9UZW1wbGF0ZVNlYXJjaFwiO1xuaW1wb3J0IEFjdGl2ZVRlbXBsYXRlc01lbnUgZnJvbSBcIi4vQWN0aXZlVGVtcGxhdGVzTWVudVwiO1xuaW1wb3J0IExheWVyV3JhcHBlciBmcm9tIFwiLi4vTGF5ZXJXcmFwcGVyXCI7XG5cbmludGVyZmFjZSBUZW1wbGF0ZXNQcm9wcyB7XG4gICAgdGVtcGxhdGVzOiBUZW1wbGF0ZVtdIC8vIGxpc3Qgb2YgVGVtcGxhdGVzIHRvIHJlbmRlclxuICAgIGFjdGl2ZUxheWVyczogTGF5ZXJXcmFwcGVyW10gLy8gbGlzdCBvZiBhY3RpdmUgTGF5ZXJzXG4gICAgYWN0aXZlVGVtcGxhdGVzOiBUZW1wbGF0ZVtdIC8vIGxpc3Qgb2YgYWN0aXZlIFRlbXBsYXRlc1xuICAgIG9uQWRkVGVtcGxhdGU6ICh0ZW1wbGF0ZTogVGVtcGxhdGUpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIGFkZGluZyBUZW1wbGF0ZXNcbiAgICBvblJlbW92ZVRlbXBsYXRlOiAodGVtcGxhdGU6IFRlbXBsYXRlKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiByZW1vdmluZyBUZW1wbGF0ZXNcbiAgICBvbkFkZExheWVyOiAobGF5ZXJXcmFwcGVyOiBMYXllcldyYXBwZXIpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIGFkZGluZyBMYXllcnNcbn1cbmludGVyZmFjZSBUZW1wbGF0ZXNTdGF0ZSB7XG4gICAgcGFuZU9wZW46IGJvb2xlYW4gLy8gd2hldGhlciB0aGUgVGVtcGxhdGUgcGFuZSBpcyBvcGVuXG4gICAgc2VsZWN0ZWRUZW1wbGF0ZTogVGVtcGxhdGUgLy8gY3VycmVudGx5IHNlbGVjdGVkIFRlbXBsYXRlIGZyb20gVGVtcGxhdGUgZHJvcGRvd24gZm9yIG1vcmUgaW5mb1xufVxuXG4vKipcbiAqIFRlbXBsYXRlQ29tcG9uZW50IGNvbnRhaW5zIGEgVGVtcGxhdGVTZWFyY2ggZHJvcGRvd24sIEFjdGl2ZVRlbXBsYXRlTWVudSwgYW5kIGEgZGV0YWlsZWQgcGFuZSBvZiB0aGUgbGF5ZXJzXG4gKiBpbiBlYWNoIFRlbXBsYXRlXG4gKi9cbmNsYXNzIFRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PFRlbXBsYXRlc1Byb3BzLCBUZW1wbGF0ZXNTdGF0ZT4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFuZU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRUZW1wbGF0ZTogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cInRlbXBsYXRlLWNvbXBvbmVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZW1wbGF0ZS1jb21wb25lbnRfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+U2NlbmFyaW9zPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2NlbmFyaW9zIGFyZSBhIHNldCBvZiBsYXllcnMgdGhhdCBhcmUgZ3JvdXBlZCB0b2dldGhlciBmb3IgYSBzcGVjaWZpYyBlbWVyZ2VuY3lcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBjYW4gYmUgYWRkZWQgdG8gdGhlIG1hcCBhbGwgYXQgb25jZS5cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGVtcGxhdGUtY29tcG9uZW50X19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL3F1ZXN0aW9uLTMyLWYuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50ZW1wbGF0ZXMgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGVtcGxhdGUtY29tcG9uZW50X19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVtcGxhdGVTZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZXM9e3RoaXMucHJvcHMudGVtcGxhdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkTGF5ZXI9e3RoaXMucHJvcHMub25BZGRMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFkZFRlbXBsYXRlPXt0aGlzLnByb3BzLm9uQWRkVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTGF5ZXJzPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVUZW1wbGF0ZXM9e3RoaXMucHJvcHMuYWN0aXZlVGVtcGxhdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY3RpdmVUZW1wbGF0ZXNNZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGVtcGxhdGVzPXt0aGlzLnByb3BzLmFjdGl2ZVRlbXBsYXRlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVUZW1wbGF0ZT17dGhpcy5wcm9wcy5vblJlbW92ZVRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVtcGxhdGVDb21wb25lbnQ7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtBZHZhbmNlZFNlbGVjdCwgSWNvbn0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi4vVGVtcGxhdGVcIjtcbmltcG9ydCBBZGRUZW1wbGF0ZUl0ZW0gZnJvbSBcIi4vQWRkVGVtcGxhdGVJdGVtXCI7XG5pbXBvcnQgTGF5ZXJXcmFwcGVyIGZyb20gXCIuLi9MYXllcldyYXBwZXJcIjtcblxuaW50ZXJmYWNlIFRlbXBsYXRlU2VhcmNoUHJvcHMge1xuICAgIHRlbXBsYXRlczogVGVtcGxhdGVbXSAvLyBsaXN0IG9mIFRlbXBsYXRlc1xuICAgIGFjdGl2ZUxheWVyczogTGF5ZXJXcmFwcGVyW10gLy8gbGlzdCBvZiBhY3RpdmUgTGF5ZXJzXG4gICAgYWN0aXZlVGVtcGxhdGVzOiBUZW1wbGF0ZVtdIC8vIGxpc3Qgb2YgYWN0aXZlIFRlbXBsYXRlc1xuICAgIG9uQWRkTGF5ZXI6IChsYXllcjogTGF5ZXJXcmFwcGVyKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiBhZGRpbmcgYSBMYXllclxuICAgIG9uQWRkVGVtcGxhdGU6ICh0ZW1wbGF0ZTogVGVtcGxhdGUpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIGFkZGluZyBhIFRlbXBsYXRlXG59XG5cbi8qKlxuICogVGVtcGxhdGVTZWFyY2ggYWxsb3dzIHVzZXJzIHRvIHNlYXJjaCBmb3IgYSBUZW1wbGF0ZVxuICovXG5jbGFzcyBUZW1wbGF0ZVNlYXJjaCBleHRlbmRzIENvbXBvbmVudDxUZW1wbGF0ZVNlYXJjaFByb3BzLCB7fT4ge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cInRlbXBsYXRlLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxBZHZhbmNlZFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBpc011bHRpcGxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBpc0VtcHR5T3B0aW9uSGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgc29ydFZhbHVlc0J5TGFiZWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG1lbnVQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBbMCwgLTQwXVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjdXN0b21Ecm9wZG93bkJ1dHRvbkNvbnRlbnQ9eyhcbiAgICAgICAgICAgICAgICAgICAgKSA9PiB7cmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL3NlYXJjaC0zMi5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoIGZvciBTY2VuYXJpby4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9fVxuICAgICAgICAgICAgICAgICAgICBhcHBlbmRUb0JvZHk9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBzdHJhdGVneT1cImZpeGVkXCJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljVmFsdWVzPXt0aGlzLnByb3BzLnRlbXBsYXRlcy5tYXAoKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0ZW1wbGF0ZS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGVtcGxhdGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGxhdGUtc2VhcmNoLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkVGVtcGxhdGVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlPXt0ZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRUZW1wbGF0ZT17dGhpcy5wcm9wcy5vbkFkZFRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFkZExheWVyPXt0aGlzLnByb3BzLm9uQWRkTGF5ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUxheWVycz17dGhpcy5wcm9wcy5hY3RpdmVMYXllcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRlbXBsYXRlcz17dGhpcy5wcm9wcy5hY3RpdmVUZW1wbGF0ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZW1wbGF0ZVNlYXJjaDtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX0Jhc2VtYXBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9Db2xvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2NvcmVfcmVhY3RpdmVVdGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2lkZW50aXR5X0lkZW50aXR5TWFuYWdlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2lkZW50aXR5X09BdXRoSW5mb19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9yZW5kZXJlcnNfU2ltcGxlUmVuZGVyZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9zeW1ib2xzX1NpbXBsZU1hcmtlclN5bWJvbF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3dpZGdldHNfTGF5ZXJMaXN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9iYXNpY19jb2xvcl9waWNrZXJfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0ICcuL1dpZGdldC5zY3NzJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3R5cGUgQWxsV2lkZ2V0UHJvcHN9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7SmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3fSBmcm9tIFwiamltdS1hcmNnaXNcIjtcbmltcG9ydCB7TG9hZGluZ30gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xuaW1wb3J0IExheWVyIGZyb20gXCJlc3JpL2xheWVycy9MYXllclwiXG5pbXBvcnQgQmFzZW1hcCBmcm9tIFwiZXNyaS9CYXNlbWFwXCI7XG5pbXBvcnQge2FkZEZlYXR1cmVzfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1mZWF0dXJlLWxheWVyJztcbmltcG9ydCBPQXV0aEluZm8gZnJvbSBcImVzcmkvaWRlbnRpdHkvT0F1dGhJbmZvXCI7XG5pbXBvcnQgZXNyaUlkIGZyb20gXCJlc3JpL2lkZW50aXR5L0lkZW50aXR5TWFuYWdlclwiO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuL1RlbXBsYXRlXCI7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vQ2F0ZWdvcnlcIjtcbmltcG9ydCBMYXllckNvbXBvbmVudCBmcm9tIFwiLi9MYXllckNvbXBvbmVudC9MYXllckNvbXBvbmVudFwiXG5pbXBvcnQgU2F2ZVRlbXBsYXRlQ29tcG9uZW50IGZyb20gJy4vU2F2ZVRlbXBsYXRlQ29tcG9uZW50J1xuaW1wb3J0IExheWVyTGlzdENvbXBvbmVudCBmcm9tIFwiLi9MYXllckxpc3RDb21wb25lbnQvTGF5ZXJMaXN0Q29tcG9uZW50XCI7XG5pbXBvcnQgVGVtcGxhdGVDb21wb25lbnQgZnJvbSBcIi4vVGVtcGxhdGVDb21wb25lbnQvVGVtcGxhdGVDb21wb25lbnRcIjtcbmltcG9ydCBMYXllcldyYXBwZXIgZnJvbSBcIi4vTGF5ZXJXcmFwcGVyXCI7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdCc7XG5pbXBvcnQgRXhwb3J0Q1NWQ29tcG9uZW50IGZyb20gJy4vRXhwb3J0Q1NWQ29tcG9uZW50JztcblxuaW50ZXJmYWNlIFdpZGdldFN0YXRlIHtcbiAgICBqaW11TWFwVmlldzogSmltdU1hcFZpZXcgLy8gSmltdU1hcFZpZXcgb2YgdGhlIGxpbmtlZCBNYXBcbiAgICBsYXllcldyYXBwZXJzOiBNYXA8bnVtYmVyLCBMYXllcldyYXBwZXI+IC8vIE1hcCBvZiBMYXllciBJRCB0byBMYXllcldyYXBwZXJcbiAgICB0ZW1wbGF0ZXM6IE1hcDxudW1iZXIsIFRlbXBsYXRlPiAvLyBNYXAgb2YgVGVtcGxhdGUgSUQgdG8gVGVtcGxhdGVcbiAgICBjYXRlZ29yaWVzOiBNYXA8bnVtYmVyLCBDYXRlZ29yeT4gLy8gTWFwIG9mIENhdGVnb3J5IElEIHRvIENhdGVnb3J5XG4gICAgbG9hZGluZzogYm9vbGVhbiAvLyB3aGV0aGVyIHRoZSBhcHBsaWNhdGlvbiBpcyBzdGlsbCBsb2FkaW5nIGRhdGFcbiAgICBhY3RpdmVUZW1wbGF0ZXM6IFRlbXBsYXRlW10gLy8gbGlzdCBvZiBhY3RpdmUgVGVtcGxhdGVzXG4gICAgYWN0aXZlTGF5ZXJzOiBMYXllcldyYXBwZXJbXSAvLyBsaXN0IG9mIGFjdGl2ZSBMYXllcnNcbn1cblxuY2xhc3MgV2lkZ2V0IGV4dGVuZHMgQ29tcG9uZW50PEFsbFdpZGdldFByb3BzPGFueT4sIFdpZGdldFN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGppbXVNYXBWaWV3OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBsYXllcldyYXBwZXJzOiBuZXcgTWFwPG51bWJlciwgTGF5ZXJXcmFwcGVyPigpLFxuICAgICAgICAgICAgdGVtcGxhdGVzOiBuZXcgTWFwPG51bWJlciwgVGVtcGxhdGU+KCksXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBuZXcgTWFwPG51bWJlciwgQ2F0ZWdvcnk+KCksXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgYWN0aXZlVGVtcGxhdGVzOiBbXSxcbiAgICAgICAgICAgIGFjdGl2ZUxheWVyczogW10sXG4gICAgICAgICAgICBleHBvcnRTdGF0dXM6IFwiXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdGVtcGxhdGVUYWJsZTogRmVhdHVyZUxheWVyO1xuICAgIHByaXZhdGUgbGF5ZXJUYWJsZTogRmVhdHVyZUxheWVyO1xuICAgIHByaXZhdGUgY2F0ZWdvcnlUYWJsZTogRmVhdHVyZUxheWVyO1xuICAgIHByaXZhdGUgdGVtcGxhdGVMYXllclJlbGF0aW9uc2hpcHM6IEZlYXR1cmVMYXllcjtcbiAgICBwcml2YXRlIHF1ZXJ5UGFyYW1ldGVycztcblxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVRhYmxlID0gbmV3IEZlYXR1cmVMYXllcih7dXJsOiB0aGlzLnByb3BzLmNvbmZpZy50ZW1wbGF0ZVRhYmxlVXJsfSk7XG4gICAgICAgICAgICB0aGlzLmxheWVyVGFibGUgPSBuZXcgRmVhdHVyZUxheWVyKHt1cmw6IHRoaXMucHJvcHMuY29uZmlnLmxheWVyVGFibGVVcmx9KTtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlUYWJsZSA9IG5ldyBGZWF0dXJlTGF5ZXIoe3VybDogdGhpcy5wcm9wcy5jb25maWcuY2F0ZWdvcnlUYWJsZVVybH0pO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZUxheWVyUmVsYXRpb25zaGlwcyA9IG5ldyBGZWF0dXJlTGF5ZXIoe3VybDogdGhpcy5wcm9wcy5jb25maWcudGVtcGxhdGVMYXllclJlbGF0aW9uc2hpcHNVcmx9KTtcbiAgICAgICAgICAgIHRoaXMucXVlcnlQYXJhbWV0ZXJzID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBTdG9wIGV4ZWN1dGlvbiBvZiBmdXJ0aGVyIG1ldGhvZHMgYmVjYXVzZSBvdGhlciBmdW5jdGlvbmFsaXRpZXMgdW5saWtlbHkgdG8gd29yayBpZiBhcHAgZmFpbGVkXG4gICAgICAgICAgICAvLyB0byBjb25uZWN0IHRvIG9uZSBvciBtb3JlIHRhYmxlcy5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yIGNvbm5lY3RpbmcgdG8gZGF0YWJhc2UsIHBsZWFzZSB0cnkgYWdhaW4hXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ2F0ZWdvcmllcygpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBsb2FkaW5nIGNhdGVnb3JpZXMsIHBsZWFzZSB0cnkgYWdhaW4hXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoVGVtcGxhdGVzKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yIGxvYWRpbmcgdGVtcGxhdGVzLCBwbGVhc2UgdHJ5IGFnYWluIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaExheWVycygpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBsb2FkaW5nIGxheWVycywgcGxlYXNlIHRyeSBhZ2FpbiFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hUZW1wbGF0ZUxheWVycygpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBsb2FkaW5nIHRlbXBsYXRlIGxheWVycywgcGxlYXNlIHRyeSBhZ2FpbiFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hMYXllcnNhbmRUZW1wbGF0ZXNmcm9tSGFzaCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBsb2FkaW5nIHVybCBwYXJhbWV0ZXJzLCBwbGVhc2UgdHJ5IGFnYWluIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkcyBMYXllcnMgYW5kIFRlbXBsYXRlcy9TY2VuYXJpb3MgdGhhdCBhcmUgaW4gdXJsIHBhcmFtZXRlcnMgXG4gICAgICovXG4gICAgZmV0Y2hMYXllcnNhbmRUZW1wbGF0ZXNmcm9tSGFzaCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGxheWVycyA9IHRoaXMucXVlcnlQYXJhbWV0ZXJzLmdldChcImxheWVyc1wiKTtcbiAgICAgICAgbGV0IHRlbXBsYXRlcyA9IHRoaXMucXVlcnlQYXJhbWV0ZXJzLmdldChcInRlbXBsYXRlc1wiKTtcblxuICAgICAgICB0aGlzLmZldGNoT2JqZWN0cyhcIkxheWVyXCIsIGxheWVycyk7XG4gICAgICAgIHRoaXMuZmV0Y2hPYmplY3RzKFwiVGVtcGxhdGVcIiwgdGVtcGxhdGVzKTtcblxuICAgIH1cblxuICAgIGZldGNoT2JqZWN0cyA9IChvYmplY3RUeXBlLCBvYmplY3RQYXJhbXMpIHtcbiAgICAgICAgaWYgKG9iamVjdFBhcmFtcyApIHtcbiAgICAgICAgICAgIG9iamVjdFBhcmFtcyA9IG9iamVjdFBhcmFtcy5zcGxpdChcIixcIik7XG4gICAgICAgICAgICBvYmplY3RQYXJhbXMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAob2JqZWN0SWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaGVyZSBmb3Igbm9uIEludCB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihvYmplY3RJZCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0SWQgPSBwYXJzZUludChvYmplY3RJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqZWN0ID0gb2JqZWN0VHlwZT09XCJMYXllclwiID8gdGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldChvYmplY3RJZCkgOiB0aGlzLnN0YXRlLnRlbXBsYXRlcy5nZXQob2JqZWN0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1ldGhvZE5hbWUgPSBcImFkZEFjdGl2ZVwiICsgb2JqZWN0VHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbbWV0aG9kTmFtZV0ob2JqZWN0KTsgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUXVlcmllcyBDYXRlZ29yaWVzIHRhYmxlIHRvIGNyZWF0ZSBhIE1hcCBvZiBDYXRlZ29yeSBJRCB0byBDYXRlZ29yeSBhbmQgdXBkYXRlcyBzdGF0ZVxuICAgICAqL1xuICAgIGZldGNoQ2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gUXVlcnkgQ2F0ZWdvcmllcyBUYWJsZVxuICAgICAgICBsZXQgZmVhdHVyZVNldCA9IGF3YWl0IHRoaXMuY2F0ZWdvcnlUYWJsZS5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgIHdoZXJlOiBcIjE9MVwiLFxuICAgICAgICAgICAgb3V0RmllbGRzOiBbXCIqXCJdLFxuICAgICAgICAgICAgb3JkZXJCeUZpZWxkczogW1wiVElUTEVcIl1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIENhdGVnb3JpZXNcbiAgICAgICAgbGV0IG5ld0NhdGVnb3JpZXM6IE1hcDxudW1iZXIsIENhdGVnb3J5PiA9IG5ldyBNYXA8bnVtYmVyLCBDYXRlZ29yeT4oKTtcbiAgICAgICAgZm9yIChsZXQgZiBvZiBmZWF0dXJlU2V0LmZlYXR1cmVzKSB7XG4gICAgICAgICAgICBuZXdDYXRlZ29yaWVzLnNldChmLmF0dHJpYnV0ZXMuT0JKRUNUSUQsIHtcbiAgICAgICAgICAgICAgICBpZDogZi5hdHRyaWJ1dGVzLk9CSkVDVElELFxuICAgICAgICAgICAgICAgIHRpdGxlOiBmLmF0dHJpYnV0ZXMuVElUTEUsXG4gICAgICAgICAgICAgICAgbGF5ZXJXcmFwcGVyczogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBuZXdDYXRlZ29yaWVzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUXVlcmllcyBUZW1wbGF0ZXMgdGFibGUgdG8gY3JlYXRlIGxpc3Qgb2YgVGVtcGxhdGVzIGFuZCB1cGRhdGVzIHN0YXRlXG4gICAgICovXG4gICAgZmV0Y2hUZW1wbGF0ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIFF1ZXJ5IFRlbXBsYXRlcyB0YWJsZVxuICAgICAgICBsZXQgZmVhdHVyZVNldCA9IGF3YWl0IHRoaXMudGVtcGxhdGVUYWJsZS5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgIHdoZXJlOiBcIjE9MVwiLFxuICAgICAgICAgICAgb3V0RmllbGRzOiBbXCIqXCJdLFxuICAgICAgICAgICAgb3JkZXJCeUZpZWxkczogW1wiVElUTEVcIl1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIFRlbXBsYXRlc1xuICAgICAgICBsZXQgbmV3VGVtcGxhdGVzOiBNYXA8bnVtYmVyLCBUZW1wbGF0ZT4gPSBuZXcgTWFwPG51bWJlciwgVGVtcGxhdGU+KCk7XG4gICAgICAgIGZvciAobGV0IGYgb2YgZmVhdHVyZVNldC5mZWF0dXJlcykge1xuICAgICAgICAgICAgbmV3VGVtcGxhdGVzLnNldChmLmF0dHJpYnV0ZXMuT0JKRUNUSUQsIHtcbiAgICAgICAgICAgICAgICBpZDogZi5hdHRyaWJ1dGVzLk9CSkVDVElELFxuICAgICAgICAgICAgICAgIHRpdGxlOiBmLmF0dHJpYnV0ZXMuVElUTEUsXG4gICAgICAgICAgICAgICAgbGF5ZXJXcmFwcGVyczogW11cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRlbXBsYXRlczogbmV3VGVtcGxhdGVzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFF1ZXJpZXMgTGF5ZXJzIHRhYmxlIHRvIGNyZWF0ZSBhIE1hcCBvZiBMYXllciBJRCB0byBMYXllcldyYXBwZXIgYW5kIHVwZGF0ZXMgc3RhdGUuXG4gICAgICogRGVsZXRlcyBMYXllcldyYXBwZXIgYW5kIGl0cyByZWZlcmVuY2VzIGlmIExheWVyIGNyZWF0aW9uIGZhaWxzLlxuICAgICAqL1xuICAgIGZldGNoTGF5ZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBRdWVyeSBMYXllcnMgdGFibGVcbiAgICAgICAgbGV0IGZlYXR1cmVTZXQgPSBhd2FpdCB0aGlzLmxheWVyVGFibGUucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICB3aGVyZTogXCIxPTFcIixcbiAgICAgICAgICAgIG91dEZpZWxkczogW1wiT0JKRUNUSURcIiwgXCJUSVRMRVwiLCBcIlVSTFwiLCBcIlNDT1BFXCIsIFwiQ0FURUdPUllJRFwiLCBcIlJFTkRFUkVSXCIsIFwiRklMVEVSXCJdLFxuICAgICAgICAgICAgb3JkZXJCeUZpZWxkczogW1wiU0NPUEVcIiwgXCJUSVRMRVwiXVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDcmVhdGUgTGF5ZXJXcmFwcGVyc1xuICAgICAgICBsZXQgbmV3TGF5ZXJXcmFwcGVyczogTWFwPG51bWJlciwgTGF5ZXJXcmFwcGVyPiA9IG5ldyBNYXA8bnVtYmVyLCBMYXllcldyYXBwZXI+KCk7XG4gICAgICAgIGZvciAobGV0IGZlYXR1cmUgb2YgZmVhdHVyZVNldC5mZWF0dXJlcykge1xuICAgICAgICAgICAgbGV0IG5ld0xheWVyV3JhcHBlciA9IHtcbiAgICAgICAgICAgICAgICBpZDogZmVhdHVyZS5hdHRyaWJ1dGVzLk9CSkVDVElELFxuICAgICAgICAgICAgICAgIHRpdGxlOiBmZWF0dXJlLmF0dHJpYnV0ZXMuU0NPUEUgKyBcIiBcIiArIGZlYXR1cmUuYXR0cmlidXRlcy5USVRMRSxcbiAgICAgICAgICAgICAgICB1cmw6IGZlYXR1cmUuYXR0cmlidXRlcy5VUkwsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBmZWF0dXJlLmF0dHJpYnV0ZXMuRklMVEVSLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiBmZWF0dXJlLmF0dHJpYnV0ZXMuUkVOREVSRVIsXG4gICAgICAgICAgICAgICAgbGF5ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5nZXQoZmVhdHVyZS5hdHRyaWJ1dGVzLkNBVEVHT1JZSUQpLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlczogW11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgYXdhaXQgY3JlYXRlTGF5ZXIgdG8gYWxsb3cgTGF5ZXJzIHRvIGJlIGxvYWRlZCBhc3luY2hyb25vdXNseSBpbiB0aGUgYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTGF5ZXIobmV3TGF5ZXJXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBuZXdMYXllcldyYXBwZXJzLnNldChmZWF0dXJlLmF0dHJpYnV0ZXMuT0JKRUNUSUQsIG5ld0xheWVyV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLmdldChmZWF0dXJlLmF0dHJpYnV0ZXMuQ0FURUdPUllJRCkubGF5ZXJXcmFwcGVycy5wdXNoKG5ld0xheWVyV3JhcHBlcik7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICBhbGVydChlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbGF5ZXJXcmFwcGVyczogbmV3TGF5ZXJXcmFwcGVyc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBRdWVyaWVzIFRlbXBsYXRlLUxheWVyIFJlbGF0aW9uc2hpcHMgdGFibGUgYW5kIHVwZGF0ZXMgc3RhdGVcbiAgICAgKi9cbiAgICBmZXRjaFRlbXBsYXRlTGF5ZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBPcmRlciBieSBPQkpFQ1RJRCB0byBtYWludGFpbiBMYXllciBvcmRlclxuICAgICAgICBsZXQgZmVhdHVyZVNldCA9IGF3YWl0IHRoaXMudGVtcGxhdGVMYXllclJlbGF0aW9uc2hpcHMucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICB3aGVyZTogXCIxPTFcIixcbiAgICAgICAgICAgIG91dEZpZWxkczogW1wiKlwiXSxcbiAgICAgICAgICAgIG9yZGVyQnlGaWVsZHM6IFtcIk9CSkVDVElEXCJdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGZlYXR1cmUgb2YgZmVhdHVyZVNldC5mZWF0dXJlcykge1xuICAgICAgICAgICAgbGV0IGxheWVyV3JhcHBlciA9IHRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoZmVhdHVyZS5hdHRyaWJ1dGVzLkxBWUVSSUQpO1xuICAgICAgICAgICAgaWYgKGxheWVyV3JhcHBlcikge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMuc3RhdGUudGVtcGxhdGVzLmdldChmZWF0dXJlLmF0dHJpYnV0ZXMuVEVNUExBVEVJRCk7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGUubGF5ZXJXcmFwcGVycy5wdXNoKGxheWVyV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldChmZWF0dXJlLmF0dHJpYnV0ZXMuTEFZRVJJRCkudGVtcGxhdGVzLnB1c2godGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZW1wbGF0ZXM6IHRoaXMuc3RhdGUudGVtcGxhdGVzLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIG5ldyBMYXllciB3aXRoIHRoZSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBnaXZlbiBMYXllcldyYXBwZXIuXG4gICAgICogQHBhcmFtIGxheWVyV3JhcHBlciB0aGUgTGF5ZXJXcmFwcGVyIGZyb20gd2hpY2ggdG8gY3JlYXRlIHRoZSBMYXllclxuICAgICAqIEB0aHJvd3MgRXJyb3IgaWYgTGF5ZXIgY3JlYXRpb24gZmFpbHNcbiAgICAgKi9cbiAgICBjcmVhdGVMYXllciA9IGFzeW5jIChsYXllcldyYXBwZXI6IExheWVyV3JhcHBlcikgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IG5ld0xheWVyOiBMYXllciA9IGF3YWl0IExheWVyLmZyb21BcmNHSVNTZXJ2ZXJVcmwoe3VybDogbGF5ZXJXcmFwcGVyLnVybH0pO1xuICAgICAgICAgICAgbmV3TGF5ZXIuaWQgPSBsYXllcldyYXBwZXIuaWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIG5ld0xheWVyLnRpdGxlID0gbGF5ZXJXcmFwcGVyLnRpdGxlO1xuXG4gICAgICAgICAgICAvLyBDdXN0b20gUmVuZGVyZXJcbiAgICAgICAgICAgIGlmIChuZXdMYXllci50eXBlID09PSBcImZlYXR1cmVcIikge1xuICAgICAgICAgICAgICAgIGlmIChsYXllcldyYXBwZXIucmVuZGVyZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKG5ld0xheWVyIGFzIEZlYXR1cmVMYXllcikucmVuZGVyZXIgPSBKU09OLnBhcnNlKGxheWVyV3JhcHBlci5yZW5kZXJlcik7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgbG9hZGluZyByZW5kZXJlciBmb3IgbGF5ZXIgXCIgKyBsYXllcldyYXBwZXIudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGF5ZXJXcmFwcGVyLmZpbHRlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAobmV3TGF5ZXIgYXMgRmVhdHVyZUxheWVyKS5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IGxheWVyV3JhcHBlci5maWx0ZXI7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgbG9hZGluZyBTUUwgZmlsdGVyIGZvciBsYXllciBcIiArIGxheWVyV3JhcHBlci50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYXllcldyYXBwZXIubGF5ZXIgPSBuZXdMYXllcjtcbiAgICAgICAgICAgIHJldHVybiBuZXdMYXllcjtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIGxvYWRpbmcgbGF5ZXJcIiArIGxheWVyV3JhcHBlci50aXRsZSArIFwiIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmVzIGFsbCBhY3RpdmUgTGF5ZXJzIGFzIGEgbmV3IFRlbXBsYXRlIHdpdGggdGhlIGdpdmVuIHRpdGxlXG4gICAgICogQHBhcmFtIHRpdGxlIHRoZSB0aXRsZSBvZiB0aGUgbmV3IFRlbXBsYXRlXG4gICAgICovXG4gICAgc2F2ZVRlbXBsYXRlID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgICAgICAgIGxldCBzYW1lVGl0bGUgPSBhd2FpdCB0aGlzLnRlbXBsYXRlVGFibGUucXVlcnlGZWF0dXJlQ291bnQoe1xuICAgICAgICAgICAgICAgICAgICB3aGVyZTogXCJUSVRMRSA9ICdcIiArIHRpdGxlICsgXCInXCIsXG4gICAgICAgICAgICAgICAgICAgIG91dEZpZWxkczogW1wiKlwiXVxuICAgICAgICAgICAgICAgIH0pID4gMDtcblxuICAgICAgICAgICAgICAgIGlmIChzYW1lVGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciwgYSB0ZW1wbGF0ZSB3aXRoIHRoaXMgdGl0bGUgYWxyZWFkeSBleGlzdHMhXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGF3YWl0IHRoaXMuZ2V0VG9rZW4oKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBhZGRGZWF0dXJlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMucHJvcHMuY29uZmlnLnRlbXBsYXRlVGFibGVVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlczogW3thdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRJVExFOiB0aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge3Rva2VuOiB0b2tlbn1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5hZGRSZXN1bHRzWzBdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IHBlciBBcmNHSVMgUmVzdCBKUyBBUEksIElFZGl0RmVhdHVyZVJlc3VsdCB3aWxsIGNvbnRhaW4gYW4gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1lc3NhZ2UgaWYgc3VjY2VzcyBpcyBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmFkZFJlc3VsdHNbMF0uZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wbGF0ZUlkID0gcmVzcG9uc2UuYWRkUmVzdWx0c1swXS5vYmplY3RJZDtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zYXZlVGVtcGxhdGVMYXllcnModGVtcGxhdGVJZCwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoVGVtcGxhdGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hUZW1wbGF0ZUxheWVycygpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIlN1Y2Nlc3NmdWxseSBzYXZlZCBuZXcgZXZlbnQhXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciwgcGxlYXNlIGVudGVyIGEgdGl0bGUhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBzYXZpbmcgdGVtcGxhdGUsIHBsZWFzZSB0cnkgYWdhaW4hXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBUZW1wbGF0ZS1MYXllciByZWxhdGlvbnNoaXBzIHRvIFRlbXBsYXRlIExheWVyIFJlbGF0aW9uc2hpcHMgdGFibGVcbiAgICAgKiBAcGFyYW0gdGVtcGxhdGVJZCB0aGUgT0JKRUNUSUQgb2YgdGhlIG5ldyBUZW1wbGF0ZVxuICAgICAqIEBwYXJhbSB0b2tlbiB0aGUgdG9rZW4gdG8gdXNlIHRvIGF1dGhlbnRpY2F0ZSB0aGUgbmV0d29yayByZXF1ZXN0XG4gICAgICovXG4gICAgc2F2ZVRlbXBsYXRlTGF5ZXJzID0gYXN5bmMgKHRlbXBsYXRlSWQ6IG51bWJlciwgdG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgICBsZXQgZmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgICAgIGxldCBsYXllcnMgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycztcblxuICAgICAgICBmb3IgKGxldCBsYXllciBvZiBsYXllcnMpIHtcbiAgICAgICAgICAgIC8vIEVsaW1pbmF0ZSBub24tb3BlcmF0aW9uYWwgTGF5ZXJzIGxpa2UgYmFzZSBMYXllcnNcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmxheWVyV3JhcHBlcnMuaGFzKCtsYXllci5pZCkpIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgVEVNUExBVEVJRDogdGVtcGxhdGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIExBWUVSSUQ6IGxheWVyLmlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGFkZEZlYXR1cmVzKHtcbiAgICAgICAgICAgIHVybDogdGhpcy5wcm9wcy5jb25maWcudGVtcGxhdGVMYXllclJlbGF0aW9uc2hpcHNVcmwsXG4gICAgICAgICAgICBmZWF0dXJlczogZmVhdHVyZXMsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5hZGRSZXN1bHRzWzBdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IHBlciBBcmNHSVMgUmVzdCBKUyBBUEksIElFZGl0RmVhdHVyZVJlc3VsdCB3aWxsIGNvbnRhaW4gYW4gZXJyb3JcbiAgICAgICAgICAgIC8vIG1lc3NhZ2UgaWYgc3VjY2VzcyBpcyBmYWxzZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmFkZFJlc3VsdHNbMF0uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRva2VuIHVzaW5nIHVzZXItcHJvdmlkZWQgbG9naW4gaW5mbyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFjY2VzcyBBcmNHSVMgc2VydmljZXNcbiAgICAgKiBAcmV0dXJuIGEgdG9rZW4gZ2VuZXJhdGVkIHVzaW5nIHRoZSB1c2VyLXByb3ZpZGVkIENyZWRlbnRpYWwgaW5mb1xuICAgICAqL1xuICAgIGdldFRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmZvID0gbmV3IE9BdXRoSW5mbyh7XG4gICAgICAgICAgICBhcHBJZDogXCJlUzJ2VWRJWmJIYVZPckR6XCIsXG4gICAgICAgICAgICBmbG93VHlwZTogXCJhdXRvXCIsXG4gICAgICAgICAgICBwb3B1cDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGVzcmlJZC5yZWdpc3Rlck9BdXRoSW5mb3MoW2luZm9dKTtcblxuICAgICAgICBsZXQgY3JlZGVudGlhbCA9IGF3YWl0IGVzcmlJZC5jaGVja1NpZ25JblN0YXR1cyhpbmZvLnBvcnRhbFVybCArIFwiL3NoYXJpbmdcIik7XG4gICAgICAgIGlmICghY3JlZGVudGlhbCkge1xuICAgICAgICAgICAgY3JlZGVudGlhbCA9IGF3YWl0IGVzcmlJZC5nZXRDcmVkZW50aWFsKGluZm8ucG9ydGFsVXJsICsgXCIvc2hhcmluZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3JlZGVudGlhbC50b2tlbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBoYXNoIHBhcmFtcyBmb3IgdGVtcGxhdGUgb3IgbGF5ZXIgaWQsIGFkZCBpZiBub3QgdGhlcmVcbiAgICAgKiBAcGFyYW0gb2JqZWN0SWRcbiAgICAgKiBAcGFyYW0gb2JqZWN0R3JvdXBcbiAgICAgKi9cbiAgICBhZGRIYXNoUGFyYW0gPSAob2JqZWN0SWQsIG9iamVjdEdyb3VwKSB7XG4gICAgICAgIGxldCBvYmplY3RQYXJhbXMgPSB0aGlzLnF1ZXJ5UGFyYW1ldGVycy5nZXQob2JqZWN0R3JvdXApO1xuICAgICAgICBpZiAob2JqZWN0UGFyYW1zKSB7XG4gICAgICAgICAgICBvYmplY3RQYXJhbXMgPSBvYmplY3RQYXJhbXMuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgaWYgKCFvYmplY3RQYXJhbXMuaW5jbHVkZXMob2JqZWN0SWQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgICAgICBvYmplY3RQYXJhbXMucHVzaChvYmplY3RJZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeVBhcmFtZXRlcnMuc2V0KG9iamVjdEdyb3VwLCBvYmplY3RQYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5xdWVyeVBhcmFtZXRlcnMuc2V0KG9iamVjdEdyb3VwLCBvYmplY3RJZCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB0aGlzLnF1ZXJ5UGFyYW1ldGVycy50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBoYXNoIHBhcmFtIGZvciBnaXZlbiB0ZW1wbGF0ZSBvciBsYXllciBpZFxuICAgICAqIEBwYXJhbSBvYmplY3RJZFxuICAgICAqIEBwYXJhbSBvYmplY3RHcm91cFxuICAgICAqL1xuICAgIHJlbW92ZUhhc2hQYXJhbSA9IChvYmplY3RJZCwgb2JqZWN0R3JvdXApIHtcbiAgICAgICAgbGV0IG9iamVjdFBhcmFtcyA9IHRoaXMucXVlcnlQYXJhbWV0ZXJzLmdldChvYmplY3RHcm91cCkuc3BsaXQoXCIsXCIpO1xuICAgICAgICBvYmplY3RQYXJhbXMgPSBvYmplY3RQYXJhbXMuZmlsdGVyKHBhcmFtID0+IHBhcmFtICE9PSBvYmplY3RJZC50b1N0cmluZygpKTtcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtZXRlcnMuc2V0KG9iamVjdEdyb3VwLCBvYmplY3RQYXJhbXMpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRoaXMucXVlcnlQYXJhbWV0ZXJzLnRvU3RyaW5nKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBMYXllciB0byB0aGUgTWFwIGFuZCBsaXN0IG9mIGFjdGl2ZSBMYXllcnNcbiAgICAgKiBAcGFyYW0gbGF5ZXJXcmFwcGVyIHRoZSBMYXllciB0byBhZGRcbiAgICAgKi9cbiAgICBhZGRBY3RpdmVMYXllciA9IGFzeW5jIChsYXllcldyYXBwZXI6IExheWVyV3JhcHBlcikgPT4ge1xuICAgICAgICBpZiAoIWxheWVyV3JhcHBlci5sYXllcikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVMYXllcihsYXllcldyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5hY3RpdmVMYXllcnMuaW5jbHVkZXMobGF5ZXJXcmFwcGVyKSkge1xuICAgICAgICAgICAgbGF5ZXJXcmFwcGVyLmxheWVyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChsYXllcldyYXBwZXIubGF5ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkSGFzaFBhcmFtKGxheWVyV3JhcHBlci5pZCwgXCJsYXllcnNcIik7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBhZGRpbmcgbGF5ZXIgXCIgKyBsYXllcldyYXBwZXIudGl0bGUgKyBcIiFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2ZUxheWVycyA9IFsuLi5wcmV2U3RhdGUuYWN0aXZlTGF5ZXJzLCBsYXllcldyYXBwZXJdO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUxheWVyczogYWN0aXZlTGF5ZXJzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHRoZSBnaXZlbiBUZW1wbGF0ZSB0byB0aGUgTWFwIGFuZCBsaXN0IG9mIGFjdGl2ZSBUZW1wbGF0ZXNcbiAgICAgKiBAcGFyYW0gdGVtcGxhdGUgdGhlIFRlbXBsYXRlIHRvIGFkZFxuICAgICAqL1xuICAgIGFkZEFjdGl2ZVRlbXBsYXRlID0gYXN5bmMgKHRlbXBsYXRlOiBUZW1wbGF0ZSkgPT4ge1xuXG4gICAgICAgIGxldCBuZXdBY3RpdmVUZW1wbGF0ZXMgPSB0aGlzLnN0YXRlLmFjdGl2ZVRlbXBsYXRlcy5zbGljZSgpO1xuICAgICAgICBsZXQgbmV3QWN0aXZlTGF5ZXJzID0gdGhpcy5zdGF0ZS5hY3RpdmVMYXllcnMuc2xpY2UoKTtcbiAgICAgICAgaWYgKCFuZXdBY3RpdmVUZW1wbGF0ZXMuaW5jbHVkZXModGVtcGxhdGUpKSB7XG4gICAgICAgICAgICBuZXdBY3RpdmVUZW1wbGF0ZXMucHVzaCh0ZW1wbGF0ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZEhhc2hQYXJhbSh0ZW1wbGF0ZS5pZCwgXCJ0ZW1wbGF0ZXNcIik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBsYXllcldyYXBwZXIgb2YgdGVtcGxhdGUubGF5ZXJXcmFwcGVycykge1xuICAgICAgICAgICAgaWYgKCFsYXllcldyYXBwZXIubGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUxheWVyKGxheWVyV3JhcHBlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5ld0FjdGl2ZUxheWVycy5pbmNsdWRlcyhsYXllcldyYXBwZXIpKSB7XG4gICAgICAgICAgICAgICAgbmV3QWN0aXZlTGF5ZXJzLnB1c2gobGF5ZXJXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBsYXllcldyYXBwZXIubGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hZGQobGF5ZXJXcmFwcGVyLmxheWVyKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3IgYWRkaW5nIGxheWVyIFwiICsgbGF5ZXJXcmFwcGVyLnRpdGxlICsgXCIhXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlVGVtcGxhdGVzOiBuZXdBY3RpdmVUZW1wbGF0ZXMsXG4gICAgICAgICAgICBhY3RpdmVMYXllcnM6IG5ld0FjdGl2ZUxheWVyc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBMYXllciBmcm9tIHRoZSBNYXAgYW5kIGxpc3Qgb2YgYWN0aXZlIExheWVycy4gUmVtb3ZlcyBhbnkgVGVtcGxhdGVzIHdpdGhvdXQgYXNzb2NpYXRlZFxuICAgICAqIGFjdGl2ZSBMYXllcnMgYWZ0ZXIgdGhlIGdpdmVuIExheWVyIGhhcyBiZWVuIHJlbW92ZWQuXG4gICAgICogQHBhcmFtIGxheWVyIHRoZSBMYXllciB0byByZW1vdmVcbiAgICAgKi9cbiAgICByZW1vdmVBY3RpdmVMYXllciA9IChsYXllcjogTGF5ZXIpID0+IHtcbiAgICAgICAgbGV0IG5ld0FjdGl2ZUxheWVycyA9IHRoaXMuc3RhdGUuYWN0aXZlTGF5ZXJzLmZpbHRlcigobHcpID0+IHtyZXR1cm4gbHcubGF5ZXIgIT09IGxheWVyfSk7XG4gICAgICAgIGxldCBuZXdBY3RpdmVUZW1wbGF0ZXMgPSB0aGlzLnN0YXRlLmFjdGl2ZVRlbXBsYXRlcztcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUobGF5ZXIpO1xuICAgICAgICB0aGlzLnJlbW92ZUhhc2hQYXJhbShsYXllci5pZCwgXCJsYXllcnNcIik7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGFjdGl2ZSBUZW1wbGF0ZXMgbmVlZCB0byBiZSByZW1vdmVkXG4gICAgICAgIGZvciAobGV0IGFjdGl2ZVRlbXBsYXRlIG9mIG5ld0FjdGl2ZVRlbXBsYXRlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoK2xheWVyLmlkKS50ZW1wbGF0ZXMuaW5jbHVkZXMoYWN0aXZlVGVtcGxhdGUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGxheWVyV3JhcHBlciBvZiBhY3RpdmVUZW1wbGF0ZS5sYXllcldyYXBwZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdBY3RpdmVMYXllcnMuaW5jbHVkZXMobGF5ZXJXcmFwcGVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0FjdGl2ZVRlbXBsYXRlcyA9IG5ld0FjdGl2ZVRlbXBsYXRlcy5maWx0ZXIoKHQpID0+IHtyZXR1cm4gdCAhPT0gYWN0aXZlVGVtcGxhdGV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZVRlbXBsYXRlczogbmV3QWN0aXZlVGVtcGxhdGVzLFxuICAgICAgICAgICAgYWN0aXZlTGF5ZXJzOiBuZXdBY3RpdmVMYXllcnNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gVGVtcGxhdGUgZnJvbSB0aGUgTWFwIGFuZCBsaXN0IG9mIGFjdGl2ZSBUZW1wbGF0ZXMuIFJlbW92ZXMgYW55IFRlbXBsYXRlcyB3aXRob3V0IGFzc29jaWF0ZWRcbiAgICAgKiBhY3RpdmUgTGF5ZXJzIGFmdGVyIHRoZSBnaXZlbiBUZW1wbGF0ZSBoYXMgYmVlbiByZW1vdmVkLlxuICAgICAqIEBwYXJhbSByZW1vdmVUZW1wbGF0ZSB0aGUgVGVtcGxhdGUgdG8gcmVtb3ZlXG4gICAgICovXG4gICAgcmVtb3ZlQWN0aXZlVGVtcGxhdGUgPSAocmVtb3ZlVGVtcGxhdGU6IFRlbXBsYXRlKSA9PiB7XG4gICAgICAgIGxldCBuZXdBY3RpdmVMYXllcnMgPSB0aGlzLnN0YXRlLmFjdGl2ZUxheWVycy5zbGljZSgpO1xuICAgICAgICBsZXQgbmV3QWN0aXZlVGVtcGxhdGVzID0gdGhpcy5zdGF0ZS5hY3RpdmVUZW1wbGF0ZXMuZmlsdGVyKCh0KSA9PiB0ICE9PSByZW1vdmVUZW1wbGF0ZSk7XG4gICAgICAgIHRoaXMucmVtb3ZlSGFzaFBhcmFtKHJlbW92ZVRlbXBsYXRlLmlkLCBcInRlbXBsYXRlc1wiKTtcblxuICAgICAgICBmb3IgKGxldCBsYXllcldyYXBwZXIgb2YgcmVtb3ZlVGVtcGxhdGUubGF5ZXJXcmFwcGVycykge1xuICAgICAgICAgICAgLy8gRG9uJ3QgcmVtb3ZlIGxheWVyIGlmIGl0IGJlbG9uZ3MgdG8gYW5vdGhlciBhY3RpdmUgVGVtcGxhdGVcbiAgICAgICAgICAgIGxldCBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGFjdGl2ZVRlbXBsYXRlIG9mIG5ld0FjdGl2ZVRlbXBsYXRlcykge1xuICAgICAgICAgICAgICAgIGlmIChsYXllcldyYXBwZXIudGVtcGxhdGVzLmluY2x1ZGVzKGFjdGl2ZVRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIG5ld0FjdGl2ZUxheWVycyA9IG5ld0FjdGl2ZUxheWVycy5maWx0ZXIoKGx3KSA9PiBsdyAhPT0gbGF5ZXJXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShsYXllcldyYXBwZXIubGF5ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVUZW1wbGF0ZXM6IG5ld0FjdGl2ZVRlbXBsYXRlcyxcbiAgICAgICAgICAgIGFjdGl2ZUxheWVyczogbmV3QWN0aXZlTGF5ZXJzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgY2xlYXIgYWxsIGFjdGlvblxuICAgICAqL1xuICAgIGNsZWFyQWxsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZUFsbCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZVRlbXBsYXRlczogW10sXG4gICAgICAgICAgICBhY3RpdmVMYXllcnM6IFtdXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucXVlcnlQYXJhbWV0ZXJzLnNldCgnbGF5ZXJzJywgJycpO1xuICAgICAgICB0aGlzLnF1ZXJ5UGFyYW1ldGVycy5zZXQoJ3RlbXBsYXRlcycsICcnKTtcbiAgICAgICAgLy8gd2lwaW5nIG91dCB0aGVzZSB2YWx1ZXMgaW5zdGVhZCBvZiBjbGVhcmluZyBvdXQgaGFzaCBcbiAgICAgICAgLy8gaW4gY2FzZSB3ZSBldmVyIHVzZSBoYXNoIHBhcmFtIGV2ZXIgZWxzZXdoZXJlXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdGhpcy5xdWVyeVBhcmFtZXRlcnMudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBUZW1wbGF0ZXMgdGhhdCB0aGUgZ2l2ZW4gTGF5ZXIgYmVsb25ncyB0b1xuICAgICAqIEBwYXJhbSBsYXllciB0aGUgTGF5ZXIgdG8gY2hlY2tcbiAgICAgKiBAcGFyYW0gYWN0aXZlIHNldCB0byB0cnVlIHRvIG9ubHkgcmV0dXJuIGFjdGl2ZSBUZW1wbGF0ZXNcbiAgICAgKiBAcmV0dXJuIGEgbGlzdCBvZiBUZW1wbGF0ZXMgdGhhdCB0aGUgZ2l2ZW4gTGF5ZXIgYmVsb25ncyB0b1xuICAgICAqL1xuICAgIGdldExheWVyVGVtcGxhdGVzID0gKGxheWVyOiBMYXllciwgYWN0aXZlPzogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoK2xheWVyLmlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIGxldCBhY3RpdmVUZW1wbGF0ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHRlbXBsYXRlIG9mIHRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoK2xheWVyLmlkKS50ZW1wbGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVUZW1wbGF0ZXMuaW5jbHVkZXModGVtcGxhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRlbXBsYXRlcy5wdXNoKHRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWN0aXZlVGVtcGxhdGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoK2xheWVyLmlkKS50ZW1wbGF0ZXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBDYXRlZ29yeSB0aGF0IHRoZSBnaXZlbiBMYXllciBiZWxvbmdzIHRvXG4gICAgICogQHBhcmFtIGxheWVyIHRoZSBMYXllciB0byBjaGVja1xuICAgICAqIEByZXR1cm4gdGhlIENhdGVnb3J5IHRoYXQgdGhlIGdpdmVuIExheWVyIGJlbG9uZ3MgdG9cbiAgICAgKi9cbiAgICBnZXRMYXllckNhdGVnb3J5ID0gKGxheWVyOiBMYXllcikgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoK2xheWVyLmlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoK2xheWVyLmlkKS5jYXRlZ29yeTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBRdWVyaWVzIExheWVyIFRhYmxlIGFuZCByZXR1cm5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBMYXllclxuICAgICAqIEBwYXJhbSBsYXllciB0aGUgTGF5ZXIgdG8gcXVlcnkgaW5mb3JtYXRpb24gYWJvdXRcbiAgICAgKiBAcmV0dXJuIGEgSlNPTiBvYmplY3QgY29udGFpbmluZyB0aGUgc291cmNlLCBkZXNjcmlwdGlvbiwgYW5kIHVybCBvZiB0aGUgbGF5ZXIgb3JcbiAgICAgKiBvbmx5IHRoZSB1cmwgb2YgdGhlIGxheWVyIGlmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHNcbiAgICAgKi9cbiAgICBnZXRMYXllckluZm8gPSBhc3luYyAobGF5ZXI6IExheWVyKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoK2xheWVyLmlkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZmVhdHVyZVNldCA9IGF3YWl0IHRoaXMubGF5ZXJUYWJsZS5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogXCJPQkpFQ1RJRCA9IFwiICsgbGF5ZXIuaWQsXG4gICAgICAgICAgICAgICAgb3V0RmllbGRzOiBbXCJTT1VSQ0VcIiwgXCJERVNDUklQVElPTlwiXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IGZlYXR1cmVTZXQuZmVhdHVyZXNbMF0uYXR0cmlidXRlcy5TT1VSQ0UsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBmZWF0dXJlU2V0LmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXMuREVTQ1JJUFRJT04sXG4gICAgICAgICAgICAgICAgICAgIHVybDogdGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldCgrbGF5ZXIuaWQpLnVybFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbGF5ZXJzIGZvdW5kIHdpdGggdGhlIGdpdmVuIE9CSkVDVElEIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBsb2FkaW5nIGxheWVyIGluZm8hXCIpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc291cmNlOiBcIkVycm9yXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRXJyb3JcIixcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoK2xheWVyLmlkKS51cmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZXMgZXh0cmFjdCBkYXRhIHRvIGV4cG9ydCBhbGwgbGF5ZXJzIGluIHRoZSBzY2VuZVxuICAgICAqL1xuICAgIG9uRXhwb3J0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKCFjb25maXJtKFwiRXhwb3J0IGdlbmVyYXRlcyBhIGNzdiBvZiBhbGwgbGF5ZXJzIGxpc3RlZCBhYm92ZS4gUGxlYXNlIHByb2NlZWQgb25seSBpZiBuZWNlc3NhcnkuIFxcblxcblRvIGV4cG9ydCB0aGVzZSBsYXllcnMgYXMgYSBjc3YsIGNsaWNrIE9LLlxcblxcbiBUbyBhYm9ydCwgY2xpY2sgQ2FuY2VsLlwiKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXhwb3J0U3RhdHVzOiBcIkNhbmNlbGVkXCJ9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGlucHV0TGF5ZXJQYXJhbXMgPSB0aGlzLmJ1aWxkSW5wdXRMYXllclBhcmFtcygpO1xuICAgICAgICAgIGNvbnN0IGFuYWx5c2lzVVJMID0gXCJodHRwczovL2FuYWx5c2lzMS5hcmNnaXMuY29tL2FyY2dpcy9yZXN0L3NlcnZpY2VzL3Rhc2tzL0dQU2VydmVyL1wiO1xuICAgICAgICAgIGNvbnN0IG91dHB1dE5hbWUgPSB0aGlzLmJ1aWxkT3V0cHV0TmFtZSgpO1xuICAgICAgXG4gICAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLmdldFRva2VuKCk7XG4gICAgICAgICAgY29uc3QgZXh0cmFjdERhdGFVcmwgPSBlbmNvZGVVUkkoYCR7YW5hbHlzaXNVUkx9RXh0cmFjdERhdGEvc3VibWl0Sm9iP2lucHV0TGF5ZXJzPSR7SlNPTi5zdHJpbmdpZnkoaW5wdXRMYXllclBhcmFtcyl9JmY9anNvbiZvdXRwdXROYW1lPSR7b3V0cHV0TmFtZX1gKTtcbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtleHBvcnRTdGF0dXM6IFwiSW5pdGlhdGVkXCJ9ICk7XG5cbiAgICAgICAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCB0aGlzLmZldGNoQW5hbHlzaXNBcGkoZXh0cmFjdERhdGFVcmwsIHRva2VuKTtcbiAgICAgICAgLy8gVGhlIGNvZGUgYmVsb3cgY3JlYXRlcyBhIGR1bW15IHJlc3BvbnNlIHdpdGggYSBqb2JJZC5UbyB0ZXN0IHRoZSBVWCBvZiB0aGUgZXhwb3J0IHdpdGhvdXQgaGl0dGluZyB0aGUgYXBpLFxuICAgICAgICAvLyBjb21tZW50IG91dCB0aGUgbGluZSBhYm92ZSwgdW5jb21tZW50IHRoZSBmb2xsb3dpbmcgdHdvIGxpbmVzLCBhbmQgc3VwcGx5IGEgam9iSWQgZnJvbSB0aGUgbW9zdCByZWNlbnQgYXBpIGNhbGwuXG4gICAgICAgIC8vIFRvIGdldCB0aGUgam9iSWQsIHJ1biBhbiBleHBvcnQgYW5kIHNlYXJjaCB0aGUgTmV0d29yayB0YWIgZm9yIFwiYW5hbHlzaXMxXCIuIEl0IHdpbGwgYmUgaW4gdGhlIHBheWxvYWQuXG4gICAgICAgIC8vICAgYXdhaXQgdGhpcy5kZWxheSgxMDAwKTtcbiAgICAgICAgLy8gICBjb25zdCByZXNwb25zZUpzb24gPSB7am9iSWQ6IFwiXCJ9O1xuICAgICAgICAgIGNvbnN0IGpvYklkID0gcmVzcG9uc2VKc29uLmpvYklkO1xuICAgICAgICAgIGNvbnN0IGNoZWNrU3RhdHVzVXJsID0gYCR7YW5hbHlzaXNVUkx9RXh0cmFjdERhdGEvam9icy8ke2pvYklkfT9mPWpzb25gO1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IGFwaVdhaXRUaW1lID0gNDAwMDtcbiAgICAgICAgICBhd2FpdCB0aGlzLmRlbGF5KGFwaVdhaXRUaW1lKTtcbiAgICAgIFxuICAgICAgICAgIGxldCBzdGF0dXNKc29uID0gYXdhaXQgdGhpcy5mZXRjaEFuYWx5c2lzQXBpKGNoZWNrU3RhdHVzVXJsLCB0b2tlbik7XG5cbiAgICAgICAgICB3aGlsZSAoc3RhdHVzSnNvbi5qb2JTdGF0dXMgPT09IFwiZXNyaUpvYkV4ZWN1dGluZ1wiKSB7XG4gICAgICAgICAgICAvLyBDb250aW51ZSBjaGVja2luZyB0aGUgc3RhdHVzIGV2ZXJ5IDQgc2Vjb25kc1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXhwb3J0U3RhdHVzOiBcIlJlLWNoZWNraW5nXCJ9ICk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmRlbGF5KGFwaVdhaXRUaW1lKTtcbiAgICAgICAgICAgIHN0YXR1c0pzb24gPSBhd2FpdCB0aGlzLmZldGNoQW5hbHlzaXNBcGkoY2hlY2tTdGF0dXNVcmwsIHRva2VuKTtcbiAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgIGlmIChzdGF0dXNKc29uLmpvYlN0YXR1cyA9PSBcImVzcmlKb2JTdWNjZWVkZWRcIikge1xuICAgICAgICAgICAgY29uc3QgY29udGVudFVybCA9IGAke2FuYWx5c2lzVVJMfUV4dHJhY3REYXRhL2pvYnMvJHtqb2JJZH0vcmVzdWx0cy9jb250ZW50SUQ/JmY9anNvbmA7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50UmVzcG9uc2VKc29uID0gYXdhaXQgdGhpcy5mZXRjaEFuYWx5c2lzQXBpKGNvbnRlbnRVcmwsIHRva2VuKTtcblxuICAgICAgICAgICAgaWYgKGNvbnRlbnRSZXNwb25zZUpzb24udmFsdWUgJiYgY29udGVudFJlc3BvbnNlSnNvbi52YWx1ZS51cmwpIHtcbiAgICAgICAgICAgICAgICAvLyBtaWdodCB0dXJuIHRoaXMgaW50byBhIGRvd25sb2FkIGxpbmtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtleHBvcnRTdGF0dXM6IFwiQ29tcGxldGVkXCJ9ICk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gYCR7Y29udGVudFJlc3BvbnNlSnNvbi52YWx1ZS51cmx9L2RhdGE/dG9rZW49JHt0b2tlbn1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXhwb3J0U3RhdHVzOiBcIkZhaWxlZFwifSApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnRSZXNwb25zZUpzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtleHBvcnRTdGF0dXM6IFwiRmFpbGVkXCJ9ICk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH07XG4gICAgICBcbiAgICAgIC8qKlxuICAgICAgICogVXNpbmcgYWN0aXZlTGF5ZXJzLCB0aGlzIGl0ZXJhdGVzIHRocm91Z2ggdGhlbSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBFeHRyYWN0RGF0YSB1cmwgcGFyYW1zXG4gICAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgICAqL1xuICAgICAgYnVpbGRJbnB1dExheWVyUGFyYW1zID0gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5hY3RpdmVMYXllcnMubWFwKChsYXllcldyYXBwZXIpID0+IHtcbiAgICAgICAgICBsZXQgdXJsID0gbGF5ZXJXcmFwcGVyLnVybDtcbiAgICAgICAgICBpZiAodXJsLm1hdGNoKC9GZWF0dXJlU2VydmVyXFwvPyQvKSkge1xuICAgICAgICAgICAgaWYgKCF1cmwuZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICB1cmwgPSB1cmwgKyAnLyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cmwgPSB1cmwgKyBsYXllcldyYXBwZXIubGF5ZXIubGF5ZXJJZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgdXJsIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSB1bmlxdWUgbmFtZSBmb3IgdGhlIEV4dHJhY3REYXRhIGZpbGVcbiAgICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAgICovXG4gICAgICBidWlsZE91dHB1dE5hbWUgPSAoKSB7XG4gICAgICAgIHJldHVybiAne1wiaXRlbVByb3BlcnRpZXNcIjp7XCJkZXNjcmlwdGlvblwiOlwiRGF0YXNldCBleHRyYWN0ZWQgZnJvbSBPRU0gRGFzaGJvYXJkLlwiLFwic25pcHBldFwiOlwiRGF0YXNldCBnZW5lcmF0ZWQgZnJvbSBFeHRyYWN0IERhdGFcIixcInRpdGxlXCI6XCJTY2VuYXJpby1EYXNoYm9hcmQtRXh0cmFjdGVkRGF0YS0nICsgRGF0ZS5ub3coKS50b1N0cmluZygpICsgJ1wiLFwiZm9sZGVySWRcIjpcIlwifX0nO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgcHJvbWlzZSB0byBkZWxheSBmb3IgYXBpIHdhaXQgdGltZVxuICAgICAgICogQHBhcmFtIG1zIFxuICAgICAgICogQHJldHVybnMgUHJvbWlzZVxuICAgICAgICovXG4gICAgICBkZWxheSA9IGFzeW5jIChtcykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qKlxuICAgICAgICogQ2FsbHMgYW5hbHlzaXMgYXBpIGF0IGdpdmVuIHVybCBlbmRwb2ludFxuICAgICAgICogQHBhcmFtIHVybCBcbiAgICAgICAqIEBwYXJhbSB0b2tlbiBcbiAgICAgICAqIEByZXR1cm5zIEpTT05cbiAgICAgICAqL1xuICAgICAgIGZldGNoQW5hbHlzaXNBcGkgPSBhc3luYyAodXJsLCB0b2tlbikge1xuICAgICAgICB1cmwgPSB1cmwgKyBgJnRva2VuPSR7dG9rZW59YDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtleHBvcnRTdGF0dXM6IFwiQXBpIHJlc3BvbnNlIGVycm9yLiBKb2Igc3RvcHBlZC5cIn0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBpbiByZXNwb25zZVwiLCByZXNwb25zZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyoqXG4gICAgICogVXBkYXRlcyBzdGF0ZSB0byBnaXZlbiBKaW11TWFwVmlldyBhbmQgc2V0cyBpbml0aWFsIGJhc2VtYXBcbiAgICAgKiBAcGFyYW0gam12IHRoZSBuZXcgSmltdU1hcFZpZXdcbiAgICAgKi9cbiAgICBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgICAgIGlmIChqbXYpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xuICAgICAgICAgICAgICAgIC8vIFNldCBiYXNlbWFwIG9uIGZpcnN0IGFjdGl2ZSB2aWV3IGNoYW5nZVxuICAgICAgICAgICAgICAgIGptdi52aWV3Lm1hcC5iYXNlbWFwID0gQmFzZW1hcC5mcm9tSWQoXCJhcmNnaXMtdG9wb2dyYXBoaWNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBqaW11TWFwVmlldzogam12XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXN0YXJ0ZXIgamltdS13aWRnZXRcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJvZW0tZGFzaGJvYXJkLWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZW1wbGF0ZS1jb21wb25lbnRfX2dyaWQtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+QWRkIExheWVyczwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVtcGxhdGVDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZXM9e0FycmF5LmZyb20odGhpcy5zdGF0ZS50ZW1wbGF0ZXMudmFsdWVzKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRlbXBsYXRlcz17dGhpcy5zdGF0ZS5hY3RpdmVUZW1wbGF0ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRUZW1wbGF0ZT17dGhpcy5hZGRBY3RpdmVUZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZVRlbXBsYXRlPXt0aGlzLnJlbW92ZUFjdGl2ZVRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUxheWVycz17dGhpcy5zdGF0ZS5hY3RpdmVMYXllcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRMYXllcj17dGhpcy5hZGRBY3RpdmVMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxheWVyLWNvbXBvbmVudF9fZ3JpZC1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyB0eXBlPVwiU0VDT05EQVJZXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5ZXJDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcnM9e0FycmF5LmZyb20odGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLnZhbHVlcygpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzPXtBcnJheS5mcm9tKHRoaXMuc3RhdGUuY2F0ZWdvcmllcy52YWx1ZXMoKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTGF5ZXJzPXt0aGlzLnN0YXRlLmFjdGl2ZUxheWVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFkZExheWVyPXt0aGlzLmFkZEFjdGl2ZUxheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGF5ZXItbGlzdF9fZ3JpZC1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgdHlwZT1cIlNFQ09OREFSWVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExheWVyTGlzdENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsZWFyQWxsPXt0aGlzLmNsZWFyQWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmVMYXllcj17dGhpcy5yZW1vdmVBY3RpdmVMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldExheWVyVGVtcGxhdGVzPXt0aGlzLmdldExheWVyVGVtcGxhdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TGF5ZXJDYXRlZ29yeT17dGhpcy5nZXRMYXllckNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtQWN0aXZlTGF5ZXJzPXt0aGlzLnN0YXRlLmFjdGl2ZUxheWVycy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRMYXllckluZm89e3RoaXMuZ2V0TGF5ZXJJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJib3R0b20tZ3JpZC1pdGVtXCIgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeHBvcnRDU1ZDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FeHBvcnREYXRhPXt0aGlzLm9uRXhwb3J0RGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzPXt0aGlzLnN0YXRlLmV4cG9ydFN0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTYXZlVGVtcGxhdGVDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e3RoaXMuc2F2ZVRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLmFjdGl2ZUxheWVycy5sZW5ndGggPiAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpZGdldDtcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=