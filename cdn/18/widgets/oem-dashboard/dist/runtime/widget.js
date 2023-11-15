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
            if (layers) {
                layers = layers.split(",");
                layers.forEach((layerId) => {
                    layerId = parseInt(layerId);
                    let layerWrapper = this.state.layerWrappers.get(layerId);
                    this.addActiveLayer(layerWrapper);
                });
            }
            if (templates) {
                templates = templates.split(",");
                templates.forEach((templateId) => {
                    templateId = parseInt(templateId);
                    let template = this.state.templates.get(templateId);
                    this.addActiveTemplate(template);
                });
            }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9vZW0tZGFzaGJvYXJkL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2lDO0FBQ2lEO0FBQ2xGO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0NBQW9DLGNBQWM7QUFDckUscUJBQXFCO0FBQ3JCLE1BQU07QUFDTixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGNBQWMsbUVBQVE7QUFDdEI7QUFDQSxrQkFBa0IsNkVBQWtCLHdGQUF3RixRQUFRLCtDQUFRLEdBQUcsMEJBQTBCO0FBQ3pLLFdBQVcsa0VBQU87QUFDbEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQixzQ0FBc0Msa0JBQWtCO0FBQ25GLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxjQUFjO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asb0NBQW9DO0FB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dkMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFDL0MsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQ2pDLENBQ0wsQ0FFSDtnQkFDTixxRUFBSyxFQUFFLEVBQUMseUJBQXlCLEVBQUMsU0FBUyxFQUFDLFdBQVc7b0JBQ25ELDREQUFDLCtEQUFxQixJQUNsQixXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFDOUIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQzFDLENBQ0EsQ0FDSixDQUNKLENBQ1QsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQUVELGlFQUFlLE1BQU0sRUFBQztBQUVkLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1mZWF0dXJlLWxheWVyL2Rpc3QvZXNtL2FkZC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2FyY2dpcy1yZXN0LWZlYXR1cmUtbGF5ZXIvbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3QvZGlzdC9lc20vcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3QvZGlzdC9lc20vdXRpbHMvQXJjR0lTUmVxdWVzdEVycm9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9kaXN0L2VzbS91dGlscy9hcHBlbmQtY3VzdG9tLXBhcmFtcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3QvZGlzdC9lc20vdXRpbHMvY2xlYW4tdXJsLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9kaXN0L2VzbS91dGlscy9lbmNvZGUtZm9ybS1kYXRhLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9kaXN0L2VzbS91dGlscy9lbmNvZGUtcXVlcnktc3RyaW5nLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdC9kaXN0L2VzbS91dGlscy9wcm9jZXNzLXBhcmFtcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3QvZGlzdC9lc20vdXRpbHMvd2Fybi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3Qvbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9MYXllckNvbXBvbmVudC9MYXllckNvbXBvbmVudC5zY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyTGlzdENvbXBvbmVudC9MYXllckxpc3RDb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9UZW1wbGF0ZUNvbXBvbmVudC9UZW1wbGF0ZUNvbXBvbmVudC5zY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL1dpZGdldC5zY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9MYXllckNvbXBvbmVudC9MYXllckNvbXBvbmVudC5zY3NzPzA4NzYiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvTGF5ZXJMaXN0Q29tcG9uZW50L0xheWVyTGlzdENvbXBvbmVudC5zY3NzPzRiZmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvVGVtcGxhdGVDb21wb25lbnQvVGVtcGxhdGVDb21wb25lbnQuc2Nzcz80Nzc2Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL1dpZGdldC5zY3NzP2EwYTIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9MYXllckNvbXBvbmVudC9BZGRMYXllckl0ZW0udHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyQ29tcG9uZW50L0xheWVyQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9MYXllckNvbXBvbmVudC9MYXllclNlYXJjaC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvTGF5ZXJMaXN0Q29tcG9uZW50L0xheWVyTGlzdEJ1dHRvbnMudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyTGlzdENvbXBvbmVudC9MYXllckxpc3RDb21wb25lbnQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyTGlzdENvbXBvbmVudC9MYXllclN0eWxlTW9kYWwudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyTGlzdENvbXBvbmVudC9Nb3JlSW5mb01vZGFsLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9TYXZlVGVtcGxhdGVDb21wb25lbnQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL1RlbXBsYXRlQ29tcG9uZW50L0FjdGl2ZVRlbXBsYXRlc01lbnUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL1RlbXBsYXRlQ29tcG9uZW50L0FkZFRlbXBsYXRlSXRlbS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvVGVtcGxhdGVDb21wb25lbnQvVGVtcGxhdGVDb21wb25lbnQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL1RlbXBsYXRlQ29tcG9uZW50L1RlbXBsYXRlU2VhcmNoLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvQmFzZW1hcFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9Db2xvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9jb3JlL3JlYWN0aXZlVXRpbHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvaWRlbnRpdHkvSWRlbnRpdHlNYW5hZ2VyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2lkZW50aXR5L09BdXRoSW5mb1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9MYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9yZW5kZXJlcnMvU2ltcGxlUmVuZGVyZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvc3ltYm9scy9TaW1wbGVNYXJrZXJTeW1ib2xcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9MYXllckxpc3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYmFzaWMvY29sb3ItcGlja2VyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgKGMpIDIwMTcgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHJlcXVlc3QsIGNsZWFuVXJsLCBhcHBlbmRDdXN0b21QYXJhbXMgfSBmcm9tIFwiQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdFwiO1xuLyoqXG4gKiBgYGBqc1xuICogaW1wb3J0IHsgYWRkRmVhdHVyZXMgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1mZWF0dXJlLWxheWVyJztcbiAqIC8vXG4gKiBhZGRGZWF0dXJlcyh7XG4gKiAgIHVybDogXCJodHRwczovL3NhbXBsZXNlcnZlcjYuYXJjZ2lzb25saW5lLmNvbS9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9TZXJ2aWNlUmVxdWVzdC9GZWF0dXJlU2VydmVyLzBcIixcbiAqICAgZmVhdHVyZXM6IFt7XG4gKiAgICAgZ2VvbWV0cnk6IHsgeDogLTEyMCwgeTogNDUsIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9IH0sXG4gKiAgICAgYXR0cmlidXRlczogeyBzdGF0dXM6IFwiYWxpdmVcIiB9XG4gKiAgIH1dXG4gKiB9KVxuICogICAudGhlbihyZXNwb25zZSlcbiAqIGBgYFxuICogQWRkIGZlYXR1cmVzIHJlcXVlc3QuIFNlZSB0aGUgW1JFU1QgRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmFyY2dpcy5jb20vcmVzdC9zZXJ2aWNlcy1yZWZlcmVuY2UvYWRkLWZlYXR1cmVzLmh0bSkgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHBhcmFtIHJlcXVlc3RPcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIHJlcXVlc3QuXG4gKiBAcmV0dXJucyBBIFByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgd2l0aCB0aGUgYWRkRmVhdHVyZXMgcmVzcG9uc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRGZWF0dXJlcyhyZXF1ZXN0T3B0aW9ucykge1xuICAgIHZhciB1cmwgPSBjbGVhblVybChyZXF1ZXN0T3B0aW9ucy51cmwpICsgXCIvYWRkRmVhdHVyZXNcIjtcbiAgICAvLyBlZGl0IG9wZXJhdGlvbnMgYXJlIFBPU1Qgb25seVxuICAgIHZhciBvcHRpb25zID0gYXBwZW5kQ3VzdG9tUGFyYW1zKHJlcXVlc3RPcHRpb25zLCBbXCJmZWF0dXJlc1wiLCBcImdkYlZlcnNpb25cIiwgXCJyZXR1cm5FZGl0TW9tZW50XCIsIFwicm9sbGJhY2tPbkZhaWx1cmVcIl0sIHsgcGFyYW1zOiBfX2Fzc2lnbih7fSwgcmVxdWVzdE9wdGlvbnMucGFyYW1zKSB9KTtcbiAgICByZXR1cm4gcmVxdWVzdCh1cmwsIG9wdGlvbnMpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRkLmpzLm1hcCIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NyZWF0ZUJpbmRpbmcobywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IF9fYXNzaWduLCBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGVuY29kZUZvcm1EYXRhIH0gZnJvbSBcIi4vdXRpbHMvZW5jb2RlLWZvcm0tZGF0YVwiO1xuaW1wb3J0IHsgZW5jb2RlUXVlcnlTdHJpbmcgfSBmcm9tIFwiLi91dGlscy9lbmNvZGUtcXVlcnktc3RyaW5nXCI7XG5pbXBvcnQgeyByZXF1aXJlc0Zvcm1EYXRhIH0gZnJvbSBcIi4vdXRpbHMvcHJvY2Vzcy1wYXJhbXNcIjtcbmltcG9ydCB7IEFyY0dJU1JlcXVlc3RFcnJvciB9IGZyb20gXCIuL3V0aWxzL0FyY0dJU1JlcXVlc3RFcnJvclwiO1xuaW1wb3J0IHsgd2FybiB9IGZyb20gXCIuL3V0aWxzL3dhcm5cIjtcbmV4cG9ydCB2YXIgTk9ERUpTX0RFRkFVTFRfUkVGRVJFUl9IRUFERVIgPSBcIkBlc3JpL2FyY2dpcy1yZXN0LWpzXCI7XG52YXIgREVGQVVMVF9BUkNHSVNfUkVRVUVTVF9PUFRJT05TID0ge1xuICAgIGh0dHBNZXRob2Q6IFwiUE9TVFwiLFxuICAgIHBhcmFtczoge1xuICAgICAgICBmOiBcImpzb25cIixcbiAgICB9LFxufTtcbi8qKlxuICogU2V0cyB0aGUgZGVmYXVsdCBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW4gKiphbGwgcmVxdWVzdHMgYWNyb3NzIGFsbCBgQGVzcmkvYXJjZ2lzLXJlc3QtanNgIG1vZHVsZXMqKi5cbiAqXG4gKlxuICogYGBganNcbiAqIGltcG9ydCB7IHNldERlZmF1bHRSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJAZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0XCI7XG4gKiBzZXREZWZhdWx0UmVxdWVzdE9wdGlvbnMoe1xuICogICBhdXRoZW50aWNhdGlvbjogdXNlclNlc3Npb24gLy8gYWxsIHJlcXVlc3RzIHdpbGwgdXNlIHRoaXMgc2Vzc2lvbiBieSBkZWZhdWx0XG4gKiB9KVxuICogYGBgXG4gKiBZb3Ugc2hvdWxkICoqbmV2ZXIqKiBzZXQgYSBkZWZhdWx0IGBhdXRoZW50aWNhdGlvbmAgd2hlbiB5b3UgYXJlIGluIGEgc2VydmVyIHNpZGUgZW52aXJvbm1lbnQgd2hlcmUgeW91IG1heSBiZSBoYW5kbGluZyByZXF1ZXN0cyBmb3IgbWFueSBkaWZmZXJlbnQgYXV0aGVudGljYXRlZCB1c2Vycy5cbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyBUaGUgZGVmYXVsdCBvcHRpb25zIHRvIHBhc3Mgd2l0aCBldmVyeSByZXF1ZXN0LiBFeGlzdGluZyBkZWZhdWx0IHdpbGwgYmUgb3ZlcndyaXR0ZW4uXG4gKiBAcGFyYW0gaGlkZVdhcm5pbmdzIFNpbGVuY2Ugd2FybmluZ3MgYWJvdXQgc2V0dGluZyBkZWZhdWx0IGBhdXRoZW50aWNhdGlvbmAgaW4gc2hhcmVkIGVudmlyb25tZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRSZXF1ZXN0T3B0aW9ucyhvcHRpb25zLCBoaWRlV2FybmluZ3MpIHtcbiAgICBpZiAob3B0aW9ucy5hdXRoZW50aWNhdGlvbiAmJiAhaGlkZVdhcm5pbmdzKSB7XG4gICAgICAgIHdhcm4oXCJZb3Ugc2hvdWxkIG5vdCBzZXQgYGF1dGhlbnRpY2F0aW9uYCBhcyBhIGRlZmF1bHQgaW4gYSBzaGFyZWQgZW52aXJvbm1lbnQgc3VjaCBhcyBhIHdlYiBzZXJ2ZXIgd2hpY2ggd2lsbCBwcm9jZXNzIG11bHRpcGxlIHVzZXJzIHJlcXVlc3RzLiBZb3UgY2FuIGNhbGwgYHNldERlZmF1bHRSZXF1ZXN0T3B0aW9uc2Agd2l0aCBgdHJ1ZWAgYXMgYSBzZWNvbmQgYXJndW1lbnQgdG8gZGlzYWJsZSB0aGlzIHdhcm5pbmcuXCIpO1xuICAgIH1cbiAgICBERUZBVUxUX0FSQ0dJU19SRVFVRVNUX09QVElPTlMgPSBvcHRpb25zO1xufVxudmFyIEFyY0dJU0F1dGhFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXJjR0lTQXV0aEVycm9yLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQXJjR0lTQXV0aEVycm9yYCAgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgLSBUaGUgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBBUElcbiAgICAgKiBAcGFyYW0gY29kZSAtIFRoZSBlcnJvciBjb2RlIGZyb20gdGhlIEFQSVxuICAgICAqIEBwYXJhbSByZXNwb25zZSAtIFRoZSBvcmlnaW5hbCByZXNwb25zZSBmcm9tIHRoZSBBUEkgdGhhdCBjYXVzZWQgdGhlIGVycm9yXG4gICAgICogQHBhcmFtIHVybCAtIFRoZSBvcmlnaW5hbCB1cmwgb2YgdGhlIHJlcXVlc3RcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcmlnaW5hbCBvcHRpb25zIG9mIHRoZSByZXF1ZXN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gQXJjR0lTQXV0aEVycm9yKG1lc3NhZ2UsIGNvZGUsIHJlc3BvbnNlLCB1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT09IHZvaWQgMCkgeyBtZXNzYWdlID0gXCJBVVRIRU5USUNBVElPTl9FUlJPUlwiOyB9XG4gICAgICAgIGlmIChjb2RlID09PSB2b2lkIDApIHsgY29kZSA9IFwiQVVUSEVOVElDQVRJT05fRVJST1JfQ09ERVwiOyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1lc3NhZ2UsIGNvZGUsIHJlc3BvbnNlLCB1cmwsIG9wdGlvbnMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm5hbWUgPSBcIkFyY0dJU0F1dGhFcnJvclwiO1xuICAgICAgICBfdGhpcy5tZXNzYWdlID1cbiAgICAgICAgICAgIGNvZGUgPT09IFwiQVVUSEVOVElDQVRJT05fRVJST1JfQ09ERVwiID8gbWVzc2FnZSA6IGNvZGUgKyBcIjogXCIgKyBtZXNzYWdlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFyY0dJU0F1dGhFcnJvci5wcm90b3R5cGUucmV0cnkgPSBmdW5jdGlvbiAoZ2V0U2Vzc2lvbiwgcmV0cnlMaW1pdCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAocmV0cnlMaW1pdCA9PT0gdm9pZCAwKSB7IHJldHJ5TGltaXQgPSAzOyB9XG4gICAgICAgIHZhciB0cmllcyA9IDA7XG4gICAgICAgIHZhciByZXRyeVJlcXVlc3QgPSBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBnZXRTZXNzaW9uKF90aGlzLnVybCwgX3RoaXMub3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoc2Vzc2lvbikge1xuICAgICAgICAgICAgICAgIHZhciBuZXdPcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIF90aGlzLm9wdGlvbnMpLCB7IGF1dGhlbnRpY2F0aW9uOiBzZXNzaW9uIH0pO1xuICAgICAgICAgICAgICAgIHRyaWVzID0gdHJpZXMgKyAxO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KF90aGlzLnVybCwgbmV3T3B0aW9ucyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5uYW1lID09PSBcIkFyY0dJU0F1dGhFcnJvclwiICYmIHRyaWVzIDwgcmV0cnlMaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICByZXRyeVJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZS5uYW1lID09PSBcIkFyY0dJU0F1dGhFcnJvclwiICYmIHRyaWVzID49IHJldHJ5TGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KF90aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHJldHJ5UmVxdWVzdChyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBBcmNHSVNBdXRoRXJyb3I7XG59KEFyY0dJU1JlcXVlc3RFcnJvcikpO1xuZXhwb3J0IHsgQXJjR0lTQXV0aEVycm9yIH07XG4vKipcbiAqIENoZWNrcyBmb3IgZXJyb3JzIGluIGEgSlNPTiByZXNwb25zZSBmcm9tIHRoZSBBcmNHSVMgUkVTVCBBUEkuIElmIHRoZXJlIGFyZSBubyBlcnJvcnMsIGl0IHdpbGwgcmV0dXJuIHRoZSBgZGF0YWAgcGFzc2VkIGluLiBJZiB0aGVyZSBpcyBhbiBlcnJvciwgaXQgd2lsbCB0aHJvdyBhbiBgQXJjR0lTUmVxdWVzdEVycm9yYCBvciBgQXJjR0lTQXV0aEVycm9yYC5cbiAqXG4gKiBAcGFyYW0gZGF0YSBUaGUgcmVzcG9uc2UgSlNPTiB0byBjaGVjayBmb3IgZXJyb3JzLlxuICogQHBhcmFtIHVybCBUaGUgdXJsIG9mIHRoZSBvcmlnaW5hbCByZXF1ZXN0XG4gKiBAcGFyYW0gcGFyYW1zIFRoZSBwYXJhbWV0ZXJzIG9mIHRoZSBvcmlnaW5hbCByZXF1ZXN0XG4gKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyBvZiB0aGUgb3JpZ2luYWwgcmVxdWVzdFxuICogQHJldHVybnMgVGhlIGRhdGEgdGhhdCB3YXMgcGFzc2VkIGluIHRoZSBgZGF0YWAgcGFyYW1ldGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ZvckVycm9ycyhyZXNwb25zZSwgdXJsLCBwYXJhbXMsIG9wdGlvbnMsIG9yaWdpbmFsQXV0aEVycm9yKSB7XG4gICAgLy8gdGhpcyBpcyBhbiBlcnJvciBtZXNzYWdlIGZyb20gYmlsbGluZy5hcmNnaXMuY29tIGJhY2tlbmRcbiAgICBpZiAocmVzcG9uc2UuY29kZSA+PSA0MDApIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSByZXNwb25zZS5tZXNzYWdlLCBjb2RlID0gcmVzcG9uc2UuY29kZTtcbiAgICAgICAgdGhyb3cgbmV3IEFyY0dJU1JlcXVlc3RFcnJvcihtZXNzYWdlLCBjb2RlLCByZXNwb25zZSwgdXJsLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLy8gZXJyb3IgZnJvbSBBcmNHSVMgT25saW5lIG9yIGFuIEFyY0dJUyBQb3J0YWwgb3Igc2VydmVyIGluc3RhbmNlLlxuICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgICB2YXIgX2EgPSByZXNwb25zZS5lcnJvciwgbWVzc2FnZSA9IF9hLm1lc3NhZ2UsIGNvZGUgPSBfYS5jb2RlLCBtZXNzYWdlQ29kZSA9IF9hLm1lc3NhZ2VDb2RlO1xuICAgICAgICB2YXIgZXJyb3JDb2RlID0gbWVzc2FnZUNvZGUgfHwgY29kZSB8fCBcIlVOS05PV05fRVJST1JfQ09ERVwiO1xuICAgICAgICBpZiAoY29kZSA9PT0gNDk4IHx8XG4gICAgICAgICAgICBjb2RlID09PSA0OTkgfHxcbiAgICAgICAgICAgIG1lc3NhZ2VDb2RlID09PSBcIkdXTV8wMDAzXCIgfHxcbiAgICAgICAgICAgIChjb2RlID09PSA0MDAgJiYgbWVzc2FnZSA9PT0gXCJVbmFibGUgdG8gZ2VuZXJhdGUgdG9rZW4uXCIpKSB7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWxBdXRoRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBvcmlnaW5hbEF1dGhFcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBBcmNHSVNBdXRoRXJyb3IobWVzc2FnZSwgZXJyb3JDb2RlLCByZXNwb25zZSwgdXJsLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgQXJjR0lTUmVxdWVzdEVycm9yKG1lc3NhZ2UsIGVycm9yQ29kZSwgcmVzcG9uc2UsIHVybCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIGVycm9yIGZyb20gYSBzdGF0dXMgY2hlY2tcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSBcImZhaWxlZFwiIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJmYWlsdXJlXCIpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB2b2lkIDA7XG4gICAgICAgIHZhciBjb2RlID0gXCJVTktOT1dOX0VSUk9SX0NPREVcIjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2UpLm1lc3NhZ2U7XG4gICAgICAgICAgICBjb2RlID0gSlNPTi5wYXJzZShyZXNwb25zZS5zdGF0dXNNZXNzYWdlKS5jb2RlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gcmVzcG9uc2Uuc3RhdHVzTWVzc2FnZSB8fCByZXNwb25zZS5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBBcmNHSVNSZXF1ZXN0RXJyb3IobWVzc2FnZSwgY29kZSwgcmVzcG9uc2UsIHVybCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbn1cbi8qKlxuICogYGBganNcbiAqIGltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0JztcbiAqIC8vXG4gKiByZXF1ZXN0KCdodHRwczovL3d3dy5hcmNnaXMuY29tL3NoYXJpbmcvcmVzdCcpXG4gKiAgIC50aGVuKHJlc3BvbnNlKSAvLyByZXNwb25zZS5jdXJyZW50VmVyc2lvbiA9PT0gNS4yXG4gKiAvL1xuICogcmVxdWVzdCgnaHR0cHM6Ly93d3cuYXJjZ2lzLmNvbS9zaGFyaW5nL3Jlc3QnLCB7XG4gKiAgIGh0dHBNZXRob2Q6IFwiR0VUXCJcbiAqIH0pXG4gKiAvL1xuICogcmVxdWVzdCgnaHR0cHM6Ly93d3cuYXJjZ2lzLmNvbS9zaGFyaW5nL3Jlc3Qvc2VhcmNoJywge1xuICogICBwYXJhbXM6IHsgcTogJ3BhcmtzJyB9XG4gKiB9KVxuICogICAudGhlbihyZXNwb25zZSkgLy8gcmVzcG9uc2UudG90YWwgPT4gNzgzNzlcbiAqIGBgYFxuICogR2VuZXJpYyBtZXRob2QgZm9yIG1ha2luZyBIVFRQIHJlcXVlc3RzIHRvIEFyY0dJUyBSRVNUIEFQSSBlbmRwb2ludHMuXG4gKlxuICogQHBhcmFtIHVybCAtIFRoZSBVUkwgb2YgdGhlIEFyY0dJUyBSRVNUIEFQSSBlbmRwb2ludC5cbiAqIEBwYXJhbSByZXF1ZXN0T3B0aW9ucyAtIE9wdGlvbnMgZm9yIHRoZSByZXF1ZXN0LCBpbmNsdWRpbmcgcGFyYW1ldGVycyByZWxldmFudCB0byB0aGUgZW5kcG9pbnQuXG4gKiBAcmV0dXJucyBBIFByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgd2l0aCB0aGUgZGF0YSBmcm9tIHRoZSByZXNwb25zZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3QodXJsLCByZXF1ZXN0T3B0aW9ucykge1xuICAgIGlmIChyZXF1ZXN0T3B0aW9ucyA9PT0gdm9pZCAwKSB7IHJlcXVlc3RPcHRpb25zID0geyBwYXJhbXM6IHsgZjogXCJqc29uXCIgfSB9OyB9XG4gICAgdmFyIG9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbih7IGh0dHBNZXRob2Q6IFwiUE9TVFwiIH0sIERFRkFVTFRfQVJDR0lTX1JFUVVFU1RfT1BUSU9OUyksIHJlcXVlc3RPcHRpb25zKSwge1xuICAgICAgICBwYXJhbXM6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBERUZBVUxUX0FSQ0dJU19SRVFVRVNUX09QVElPTlMucGFyYW1zKSwgcmVxdWVzdE9wdGlvbnMucGFyYW1zKSxcbiAgICAgICAgaGVhZGVyczogX19hc3NpZ24oX19hc3NpZ24oe30sIERFRkFVTFRfQVJDR0lTX1JFUVVFU1RfT1BUSU9OUy5oZWFkZXJzKSwgcmVxdWVzdE9wdGlvbnMuaGVhZGVycyksXG4gICAgfSk7XG4gICAgdmFyIG1pc3NpbmdHbG9iYWxzID0gW107XG4gICAgdmFyIHJlY29tbWVuZGVkUGFja2FnZXMgPSBbXTtcbiAgICAvLyBkb24ndCBjaGVjayBmb3IgYSBnbG9iYWwgZmV0Y2ggaWYgYSBjdXN0b20gaW1wbGVtZW50YXRpb24gd2FzIHBhc3NlZCB0aHJvdWdoXG4gICAgaWYgKCFvcHRpb25zLmZldGNoICYmIHR5cGVvZiBmZXRjaCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBvcHRpb25zLmZldGNoID0gZmV0Y2guYmluZChGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbWlzc2luZ0dsb2JhbHMucHVzaChcImBmZXRjaGBcIik7XG4gICAgICAgIHJlY29tbWVuZGVkUGFja2FnZXMucHVzaChcImBub2RlLWZldGNoYFwiKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBQcm9taXNlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIG1pc3NpbmdHbG9iYWxzLnB1c2goXCJgUHJvbWlzZWBcIik7XG4gICAgICAgIHJlY29tbWVuZGVkUGFja2FnZXMucHVzaChcImBlczYtcHJvbWlzZWBcIik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgRm9ybURhdGEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgbWlzc2luZ0dsb2JhbHMucHVzaChcImBGb3JtRGF0YWBcIik7XG4gICAgICAgIHJlY29tbWVuZGVkUGFja2FnZXMucHVzaChcImBpc29tb3JwaGljLWZvcm0tZGF0YWBcIik7XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5mZXRjaCB8fFxuICAgICAgICB0eXBlb2YgUHJvbWlzZSA9PT0gXCJ1bmRlZmluZWRcIiB8fFxuICAgICAgICB0eXBlb2YgRm9ybURhdGEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYGFyY2dpcy1yZXN0LXJlcXVlc3RgIHJlcXVpcmVzIGEgYGZldGNoYCBpbXBsZW1lbnRhdGlvbiBhbmQgZ2xvYmFsIHZhcmlhYmxlcyBmb3IgYFByb21pc2VgIGFuZCBgRm9ybURhdGFgIHRvIGJlIHByZXNlbnQgaW4gdGhlIGdsb2JhbCBzY29wZS4gWW91IGFyZSBtaXNzaW5nIFwiICsgbWlzc2luZ0dsb2JhbHMuam9pbihcIiwgXCIpICsgXCIuIFdlIHJlY29tbWVuZCBpbnN0YWxsaW5nIHRoZSBcIiArIHJlY29tbWVuZGVkUGFja2FnZXMuam9pbihcIiwgXCIpICsgXCIgbW9kdWxlcyBhdCB0aGUgcm9vdCBvZiB5b3VyIGFwcGxpY2F0aW9uIHRvIGFkZCB0aGVzZSB0byB0aGUgZ2xvYmFsIHNjb3BlLiBTZWUgaHR0cHM6Ly9iaXQubHkvMktOd1dhSiBmb3IgbW9yZSBpbmZvLlwiKTtcbiAgICB9XG4gICAgdmFyIGh0dHBNZXRob2QgPSBvcHRpb25zLmh0dHBNZXRob2QsIGF1dGhlbnRpY2F0aW9uID0gb3B0aW9ucy5hdXRoZW50aWNhdGlvbiwgcmF3UmVzcG9uc2UgPSBvcHRpb25zLnJhd1Jlc3BvbnNlO1xuICAgIHZhciBwYXJhbXMgPSBfX2Fzc2lnbih7IGY6IFwianNvblwiIH0sIG9wdGlvbnMucGFyYW1zKTtcbiAgICB2YXIgb3JpZ2luYWxBdXRoRXJyb3IgPSBudWxsO1xuICAgIHZhciBmZXRjaE9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogaHR0cE1ldGhvZCxcbiAgICAgICAgLyogZW5zdXJlcyBiZWhhdmlvciBtaW1pY3MgWE1MSHR0cFJlcXVlc3QuXG4gICAgICAgIG5lZWRlZCB0byBzdXBwb3J0IHNlbmRpbmcgSVdBIGNvb2tpZXMgKi9cbiAgICAgICAgY3JlZGVudGlhbHM6IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgXCJzYW1lLW9yaWdpblwiLFxuICAgIH07XG4gICAgLy8gdGhlIC9vYXV0aDIvcGxhdGZvcm1TZWxmIHJvdXRlIHdpbGwgYWRkIFgtRXNyaS1BdXRoLUNsaWVudC1JZCBoZWFkZXJcbiAgICAvLyBhbmQgdGhhdCByZXF1ZXN0IG5lZWRzIHRvIHNlbmQgY29va2llcyBjcm9zcyBkb21haW5cbiAgICAvLyBzbyB3ZSBuZWVkIHRvIHNldCB0aGUgY3JlZGVudGlhbHMgdG8gXCJpbmNsdWRlXCJcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzICYmXG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIlgtRXNyaS1BdXRoLUNsaWVudC1JZFwiXSAmJlxuICAgICAgICB1cmwuaW5kZXhPZihcIi9vYXV0aDIvcGxhdGZvcm1TZWxmXCIpID4gLTEpIHtcbiAgICAgICAgZmV0Y2hPcHRpb25zLmNyZWRlbnRpYWxzID0gXCJpbmNsdWRlXCI7XG4gICAgfVxuICAgIHJldHVybiAoYXV0aGVudGljYXRpb25cbiAgICAgICAgPyBhdXRoZW50aWNhdGlvbi5nZXRUb2tlbih1cmwsIHsgZmV0Y2g6IG9wdGlvbnMuZmV0Y2ggfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBhcHBlbmQgb3JpZ2luYWwgcmVxdWVzdCB1cmwgYW5kIHJlcXVlc3RPcHRpb25zXG4gICAgICAgICAgICAgKiB0byB0aGUgZXJyb3IgdGhyb3duIGJ5IGdldFRva2VuKClcbiAgICAgICAgICAgICAqIHRvIGFzc2lzdCB3aXRoIHJldHJ5aW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGVyci51cmwgPSB1cmw7XG4gICAgICAgICAgICBlcnIub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGlmIGFuIGF0dGVtcHQgaXMgbWFkZSB0byB0YWxrIHRvIGFuIHVuZmVkZXJhdGVkIHNlcnZlclxuICAgICAgICAgICAgICogZmlyc3QgdHJ5IHRoZSByZXF1ZXN0IGFub255bW91c2x5LiBpZiBhICd0b2tlbiByZXF1aXJlZCdcbiAgICAgICAgICAgICAqIGVycm9yIGlzIHRocm93biwgdGhyb3cgdGhlIFVORkVERVJBVEVEIGVycm9yIHRoZW4uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9yaWdpbmFsQXV0aEVycm9yID0gZXJyO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcIlwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgOiBQcm9taXNlLnJlc29sdmUoXCJcIikpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodG9rZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICBwYXJhbXMudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXV0aGVudGljYXRpb24gJiYgYXV0aGVudGljYXRpb24uZ2V0RG9tYWluQ3JlZGVudGlhbHMpIHtcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5jcmVkZW50aWFscyA9IGF1dGhlbnRpY2F0aW9uLmdldERvbWFpbkNyZWRlbnRpYWxzKHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ3VzdG9tIGhlYWRlcnMgdG8gYWRkIHRvIHJlcXVlc3QuIElSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzIHdpdGggbWVyZ2Ugb3ZlciByZXF1ZXN0SGVhZGVycy5cbiAgICAgICAgdmFyIHJlcXVlc3RIZWFkZXJzID0ge307XG4gICAgICAgIGlmIChmZXRjaE9wdGlvbnMubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgICAgICAgICAvLyBQcmV2ZW50cyB0b2tlbiBmcm9tIGJlaW5nIHBhc3NlZCBpbiBxdWVyeSBwYXJhbXMgd2hlbiBoaWRlVG9rZW4gb3B0aW9uIGlzIHVzZWQuXG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSB3aW5kb3cgaXMgYWx3YXlzIGRlZmluZWQgaW4gYSBicm93c2VyLiBUZXN0IGNhc2UgaXMgY292ZXJlZCBieSBKYXNtaW5lIGluIG5vZGUgdGVzdCAqL1xuICAgICAgICAgICAgaWYgKHBhcmFtcy50b2tlbiAmJlxuICAgICAgICAgICAgICAgIG9wdGlvbnMuaGlkZVRva2VuICYmXG4gICAgICAgICAgICAgICAgLy8gU2hhcmluZyBBUEkgZG9lcyBub3Qgc3VwcG9ydCBwcmVmbGlnaHQgY2hlY2sgcmVxdWlyZWQgYnkgbW9kZXJuIGJyb3dzZXJzIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvR2xvc3NhcnkvUHJlZmxpZ2h0X3JlcXVlc3RcbiAgICAgICAgICAgICAgICB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEhlYWRlcnNbXCJYLUVzcmktQXV0aG9yaXphdGlvblwiXSA9IFwiQmVhcmVyIFwiICsgcGFyYW1zLnRva2VuO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXMudG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbmNvZGUgdGhlIHBhcmFtZXRlcnMgaW50byB0aGUgcXVlcnkgc3RyaW5nXG4gICAgICAgICAgICB2YXIgcXVlcnlQYXJhbXMgPSBlbmNvZGVRdWVyeVN0cmluZyhwYXJhbXMpO1xuICAgICAgICAgICAgLy8gZG9udCBhcHBlbmQgYSAnPycgdW5sZXNzIHBhcmFtZXRlcnMgYXJlIGFjdHVhbGx5IHByZXNlbnRcbiAgICAgICAgICAgIHZhciB1cmxXaXRoUXVlcnlTdHJpbmcgPSBxdWVyeVBhcmFtcyA9PT0gXCJcIiA/IHVybCA6IHVybCArIFwiP1wiICsgZW5jb2RlUXVlcnlTdHJpbmcocGFyYW1zKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIC8vIFRoaXMgd291bGQgZXhjZWVkIHRoZSBtYXhpbXVtIGxlbmd0aCBmb3IgVVJMcyBzcGVjaWZpZWQgYnkgdGhlIGNvbnN1bWVyIGFuZCByZXF1aXJlcyBQT1NUXG4gICAgICAgICAgICAob3B0aW9ucy5tYXhVcmxMZW5ndGggJiZcbiAgICAgICAgICAgICAgICB1cmxXaXRoUXVlcnlTdHJpbmcubGVuZ3RoID4gb3B0aW9ucy5tYXhVcmxMZW5ndGgpIHx8XG4gICAgICAgICAgICAgICAgLy8gT3IgaWYgdGhlIGN1c3RvbWVyIHJlcXVpcmVzIHRoZSB0b2tlbiB0byBiZSBoaWRkZW4gYW5kIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGhpZGRlbiBpbiB0aGUgaGVhZGVyIChmb3IgYnJvd3NlcnMpXG4gICAgICAgICAgICAgICAgKHBhcmFtcy50b2tlbiAmJiBvcHRpb25zLmhpZGVUb2tlbikpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgY29uc3VtZXIgc3BlY2lmaWVkIGEgbWF4aW11bSBsZW5ndGggZm9yIFVSTHNcbiAgICAgICAgICAgICAgICAvLyBhbmQgdGhpcyB3b3VsZCBleGNlZWQgaXQsIHNvIHVzZSBwb3N0IGluc3RlYWRcbiAgICAgICAgICAgICAgICBmZXRjaE9wdGlvbnMubWV0aG9kID0gXCJQT1NUXCI7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRva2VuIHdhcyBhbHJlYWR5IGFkZGVkIGFzIGEgQXV0aCBoZWFkZXIsIGFkZCB0aGUgdG9rZW4gYmFjayB0byBib2R5IHdpdGggb3RoZXIgcGFyYW1zIGluc3RlYWQgb2YgaGVhZGVyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLmxlbmd0aCAmJiBvcHRpb25zLmhpZGVUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXMudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGV4aXN0aW5nIGhlYWRlciB0aGF0IHdhcyBhZGRlZCBiZWZvcmUgdXJsIHF1ZXJ5IGxlbmd0aCB3YXMgY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbXCJYLUVzcmktQXV0aG9yaXphdGlvblwiXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBqdXN0IHVzZSBHRVRcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmxXaXRoUXVlcnlTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyogdXBkYXRlUmVzb3VyY2VzIGN1cnJlbnRseSByZXF1aXJlcyBGb3JtRGF0YSBldmVuIHdoZW4gdGhlIGlucHV0IHBhcmFtZXRlcnMgZG9udCB3YXJyYW50IGl0LlxuICAgIGh0dHBzOi8vZGV2ZWxvcGVycy5hcmNnaXMuY29tL3Jlc3QvdXNlcnMtZ3JvdXBzLWFuZC1pdGVtcy91cGRhdGUtcmVzb3VyY2VzLmh0bVxuICAgICAgICBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvYXJjZ2lzLXJlc3QtanMvcHVsbC81MDAgZm9yIG1vcmUgaW5mby4gKi9cbiAgICAgICAgdmFyIGZvcmNlRm9ybURhdGEgPSBuZXcgUmVnRXhwKFwiL2l0ZW1zLy4rL3VwZGF0ZVJlc291cmNlc1wiKS50ZXN0KHVybCk7XG4gICAgICAgIGlmIChmZXRjaE9wdGlvbnMubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmJvZHkgPSBlbmNvZGVGb3JtRGF0YShwYXJhbXMsIGZvcmNlRm9ybURhdGEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1peGluIGhlYWRlcnMgZnJvbSByZXF1ZXN0IG9wdGlvbnNcbiAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVxdWVzdEhlYWRlcnMpLCBvcHRpb25zLmhlYWRlcnMpO1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAtIGthcm1hIHJlcG9ydHMgY292ZXJhZ2Ugb24gYnJvd3NlciB0ZXN0cyBvbmx5ICovXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiICYmICFmZXRjaE9wdGlvbnMuaGVhZGVycy5yZWZlcmVyKSB7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMuaGVhZGVycy5yZWZlcmVyID0gTk9ERUpTX0RFRkFVTFRfUkVGRVJFUl9IRUFERVI7XG4gICAgICAgIH1cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgYmxvYiByZXNwb25zZXMgYXJlIGRpZmZpY3VsdCB0byBtYWtlIGNyb3NzIHBsYXRmb3JtIHdlIHdpbGwganVzdCBoYXZlIHRvIHRydXN0IHRoZSBpc29tb3JwaGljIGZldGNoIHdpbGwgZG8gaXRzIGpvYiAqL1xuICAgICAgICBpZiAoIXJlcXVpcmVzRm9ybURhdGEocGFyYW1zKSAmJiAhZm9yY2VGb3JtRGF0YSkge1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPVxuICAgICAgICAgICAgICAgIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmV0Y2godXJsLCBmZXRjaE9wdGlvbnMpO1xuICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAvLyBzZXJ2ZXIgcmVzcG9uZGVkIHcvIGFuIGFjdHVhbCBlcnJvciAoNDA0LCA1MDAsIGV0YylcbiAgICAgICAgICAgIHZhciBzdGF0dXNfMSA9IHJlc3BvbnNlLnN0YXR1cywgc3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQXJjR0lTUmVxdWVzdEVycm9yKHN0YXR1c1RleHQsIFwiSFRUUCBcIiArIHN0YXR1c18xLCByZXNwb25zZSwgdXJsLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmF3UmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHBhcmFtcy5mKSB7XG4gICAgICAgICAgICBjYXNlIFwianNvblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjYXNlIFwiZ2VvanNvblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjYXNlIFwiaHRtbFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICBjYXNlIFwidGV4dFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCBibG9iIHJlc3BvbnNlcyBhcmUgZGlmZmljdWx0IHRvIG1ha2UgY3Jvc3MgcGxhdGZvcm0gd2Ugd2lsbCBqdXN0IGhhdmUgdG8gdHJ1c3QgdGhhdCBpc29tb3JwaGljIGZldGNoIHdpbGwgZG8gaXRzIGpvYiAqL1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYgKChwYXJhbXMuZiA9PT0gXCJqc29uXCIgfHwgcGFyYW1zLmYgPT09IFwiZ2VvanNvblwiKSAmJiAhcmF3UmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGNoZWNrRm9yRXJyb3JzKGRhdGEsIHVybCwgcGFyYW1zLCBvcHRpb25zLCBvcmlnaW5hbEF1dGhFcnJvcik7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWxBdXRoRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvKiBJZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSB0byBhbiB1bmZlZGVyYXRlZCBzZXJ2aWNlIHRoYXRcbiAgICAgICAgICAgICAgICBkaWRuJ3QgcmVxdWlyZSBhdXRoZW50aWNhdGlvbiwgYWRkIHRoZSBiYXNlIHVybCBhbmQgYSBkdW1teSB0b2tlblxuICAgICAgICAgICAgICAgIHRvIHRoZSBsaXN0IG9mIHRydXN0ZWQgc2VydmVycyB0byBhdm9pZCBhbm90aGVyIGZlZGVyYXRpb24gY2hlY2tcbiAgICAgICAgICAgICAgICBpbiB0aGUgZXZlbnQgb2YgYSByZXBlYXQgcmVxdWVzdCAqL1xuICAgICAgICAgICAgICAgIHZhciB0cnVuY2F0ZWRVcmwgPSB1cmxcbiAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KC9cXC9yZXN0KFxcL2FkbWluKT9cXC9zZXJ2aWNlc1xcLy8pWzBdO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuYXV0aGVudGljYXRpb24uZmVkZXJhdGVkU2VydmVyc1t0cnVuY2F0ZWRVcmxdID0ge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogW10sXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gMjQgaG91cnNcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlczogbmV3IERhdGUoRGF0ZS5ub3coKSArIDg2NDAwICogMTAwMCksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEF1dGhFcnJvciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC5qcy5tYXAiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTcgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuLy8gVHlwZVNjcmlwdCAyLjEgbm8gbG9uZ2VyIGFsbG93cyB5b3UgdG8gZXh0ZW5kIGJ1aWx0IGluIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMjc5MCNpc3N1ZWNvbW1lbnQtMjY1OTgxNDQyXG4vLyBhbmQgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0LXdpa2kvYmxvYi9tYXN0ZXIvQnJlYWtpbmctQ2hhbmdlcy5tZCNleHRlbmRpbmctYnVpbHQtaW5zLWxpa2UtZXJyb3ItYXJyYXktYW5kLW1hcC1tYXktbm8tbG9uZ2VyLXdvcmtcbi8vXG4vLyBUaGlzIGNvZGUgaXMgZnJvbSBNRE4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRXJyb3IjQ3VzdG9tX0Vycm9yX1R5cGVzLlxudmFyIEFyY0dJU1JlcXVlc3RFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFyY0dJU1JlcXVlc3RFcnJvcmAgIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIGVycm9yIG1lc3NhZ2UgZnJvbSB0aGUgQVBJXG4gICAgICogQHBhcmFtIGNvZGUgLSBUaGUgZXJyb3IgY29kZSBmcm9tIHRoZSBBUElcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2UgLSBUaGUgb3JpZ2luYWwgcmVzcG9uc2UgZnJvbSB0aGUgQVBJIHRoYXQgY2F1c2VkIHRoZSBlcnJvclxuICAgICAqIEBwYXJhbSB1cmwgLSBUaGUgb3JpZ2luYWwgdXJsIG9mIHRoZSByZXF1ZXN0XG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3JpZ2luYWwgb3B0aW9ucyBhbmQgcGFyYW1ldGVycyBvZiB0aGUgcmVxdWVzdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEFyY0dJU1JlcXVlc3RFcnJvcihtZXNzYWdlLCBjb2RlLCByZXNwb25zZSwgdXJsLCBvcHRpb25zKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlIHx8IFwiVU5LTk9XTl9FUlJPUlwiO1xuICAgICAgICBjb2RlID0gY29kZSB8fCBcIlVOS05PV05fRVJST1JfQ09ERVwiO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkFyY0dJU1JlcXVlc3RFcnJvclwiO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPVxuICAgICAgICAgICAgY29kZSA9PT0gXCJVTktOT1dOX0VSUk9SX0NPREVcIiA/IG1lc3NhZ2UgOiBjb2RlICsgXCI6IFwiICsgbWVzc2FnZTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbE1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICByZXR1cm4gQXJjR0lTUmVxdWVzdEVycm9yO1xufSgpKTtcbmV4cG9ydCB7IEFyY0dJU1JlcXVlc3RFcnJvciB9O1xuQXJjR0lTUmVxdWVzdEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbkFyY0dJU1JlcXVlc3RFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBcmNHSVNSZXF1ZXN0RXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BcmNHSVNSZXF1ZXN0RXJyb3IuanMubWFwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbi8qKlxuICogSGVscGVyIGZvciBtZXRob2RzIHdpdGggbG90cyBvZiBmaXJzdCBvcmRlciByZXF1ZXN0IG9wdGlvbnMgdG8gcGFzcyB0aHJvdWdoIGFzIHJlcXVlc3QgcGFyYW1ldGVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZEN1c3RvbVBhcmFtcyhjdXN0b21PcHRpb25zLCBrZXlzLCBiYXNlT3B0aW9ucykge1xuICAgIHZhciByZXF1ZXN0T3B0aW9uc0tleXMgPSBbXG4gICAgICAgIFwicGFyYW1zXCIsXG4gICAgICAgIFwiaHR0cE1ldGhvZFwiLFxuICAgICAgICBcInJhd1Jlc3BvbnNlXCIsXG4gICAgICAgIFwiYXV0aGVudGljYXRpb25cIixcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgXCJmZXRjaFwiLFxuICAgICAgICBcIm1heFVybExlbmd0aFwiLFxuICAgICAgICBcImhlYWRlcnNcIlxuICAgIF07XG4gICAgdmFyIG9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7IHBhcmFtczoge30gfSwgYmFzZU9wdGlvbnMpLCBjdXN0b21PcHRpb25zKTtcbiAgICAvLyBtZXJnZSBhbGwga2V5cyBpbiBjdXN0b21PcHRpb25zIGludG8gb3B0aW9ucy5wYXJhbXNcbiAgICBvcHRpb25zLnBhcmFtcyA9IGtleXMucmVkdWNlKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmIChjdXN0b21PcHRpb25zW2tleV0gfHwgdHlwZW9mIGN1c3RvbU9wdGlvbnNba2V5XSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHZhbHVlW2tleV0gPSBjdXN0b21PcHRpb25zW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sIG9wdGlvbnMucGFyYW1zKTtcbiAgICAvLyBub3cgcmVtb3ZlIGFsbCBwcm9wZXJ0aWVzIGluIG9wdGlvbnMgdGhhdCBkb24ndCBleGlzdCBpbiBJUmVxdWVzdE9wdGlvbnNcbiAgICByZXR1cm4gcmVxdWVzdE9wdGlvbnNLZXlzLnJlZHVjZShmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBpZiAob3B0aW9uc1trZXldKSB7XG4gICAgICAgICAgICB2YWx1ZVtrZXldID0gb3B0aW9uc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LCB7fSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHBlbmQtY3VzdG9tLXBhcmFtcy5qcy5tYXAiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTggRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuLyoqXG4gKiBIZWxwZXIgbWV0aG9kIHRvIGVuc3VyZSB0aGF0IHVzZXIgc3VwcGxpZWQgdXJscyBkb24ndCBpbmNsdWRlIHdoaXRlc3BhY2Ugb3IgYSB0cmFpbGluZyBzbGFzaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuVXJsKHVybCkge1xuICAgIC8vIEd1YXJkIHNvIHdlIGRvbid0IHRyeSB0byB0cmltIHNvbWV0aGluZyB0aGF0J3Mgbm90IGEgc3RyaW5nXG4gICAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gICAgLy8gdHJpbSBsZWFkaW5nIGFuZCB0cmFpbGluZyBzcGFjZXMsIGJ1dCBub3Qgc3BhY2VzIGluc2lkZSB0aGUgdXJsXG4gICAgdXJsID0gdXJsLnRyaW0oKTtcbiAgICAvLyByZW1vdmUgdGhlIHRyYWlsaW5nIHNsYXNoIHRvIHRoZSB1cmwgaWYgb25lIHdhcyBpbmNsdWRlZFxuICAgIGlmICh1cmxbdXJsLmxlbmd0aCAtIDFdID09PSBcIi9cIikge1xuICAgICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgLTEpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xlYW4tdXJsLmpzLm1hcCIsIi8qIENvcHlyaWdodCAoYykgMjAxNyBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBwcm9jZXNzUGFyYW1zLCByZXF1aXJlc0Zvcm1EYXRhIH0gZnJvbSBcIi4vcHJvY2Vzcy1wYXJhbXNcIjtcbmltcG9ydCB7IGVuY29kZVF1ZXJ5U3RyaW5nIH0gZnJvbSBcIi4vZW5jb2RlLXF1ZXJ5LXN0cmluZ1wiO1xuLyoqXG4gKiBFbmNvZGVzIHBhcmFtZXRlcnMgaW4gYSBbRm9ybURhdGFdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Gb3JtRGF0YSkgb2JqZWN0IGluIGJyb3dzZXJzIG9yIGluIGEgW0Zvcm1EYXRhXShodHRwczovL2dpdGh1Yi5jb20vZm9ybS1kYXRhL2Zvcm0tZGF0YSkgaW4gTm9kZS5qc1xuICpcbiAqIEBwYXJhbSBwYXJhbXMgQW4gb2JqZWN0IHRvIGJlIGVuY29kZWQuXG4gKiBAcmV0dXJucyBUaGUgY29tcGxldGUgW0Zvcm1EYXRhXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRm9ybURhdGEpIG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUZvcm1EYXRhKHBhcmFtcywgZm9yY2VGb3JtRGF0YSkge1xuICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9hcmNnaXMtcmVzdC1qcy9pc3N1ZXMvNDk5IGZvciBtb3JlIGluZm8uXG4gICAgdmFyIHVzZUZvcm1EYXRhID0gcmVxdWlyZXNGb3JtRGF0YShwYXJhbXMpIHx8IGZvcmNlRm9ybURhdGE7XG4gICAgdmFyIG5ld1BhcmFtcyA9IHByb2Nlc3NQYXJhbXMocGFyYW1zKTtcbiAgICBpZiAodXNlRm9ybURhdGEpIHtcbiAgICAgICAgdmFyIGZvcm1EYXRhXzEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgT2JqZWN0LmtleXMobmV3UGFyYW1zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQmxvYiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBuZXdQYXJhbXNba2V5XSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgICAgICAgICAgICAvKiBUbyBuYW1lIHRoZSBCbG9iOlxuICAgICAgICAgICAgICAgICAxLiBsb29rIHRvIGFuIGFsdGVybmF0ZSByZXF1ZXN0IHBhcmFtZXRlciBjYWxsZWQgJ2ZpbGVOYW1lJ1xuICAgICAgICAgICAgICAgICAyLiBzZWUgaWYgJ25hbWUnIGhhcyBiZWVuIHRhY2tlZCBvbnRvIHRoZSBCbG9iIG1hbnVhbGx5XG4gICAgICAgICAgICAgICAgIDMuIGlmIGFsbCBlbHNlIGZhaWxzLCB1c2UgdGhlIHJlcXVlc3QgcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB2YXIgZmlsZW5hbWUgPSBuZXdQYXJhbXNbXCJmaWxlTmFtZVwiXSB8fCBuZXdQYXJhbXNba2V5XS5uYW1lIHx8IGtleTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YV8xLmFwcGVuZChrZXksIG5ld1BhcmFtc1trZXldLCBmaWxlbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgZWxzZSBpZiAobmV3UGFyYW1zW2tleV0uY29uc3RydWN0b3IgJiZcbiAgICAgICAgICAgICAgICBuZXdQYXJhbXNba2V5XS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnUmVhZFN0cmVhbScgJiZcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBvbmx5IHNwZWNpZnkgdGhlIGtub3duTGVuZ3RoIG9wdGlvbiBpZiBhIHZhbGlkIHZhbHVlIGlzIGdpdmVuLlxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGNhbiB2ZXJpZnkgaW4gYWxsIFJFU1QgQVBJIHRoYXQgdGhlIG9wdGlvbiBpcyBuZWVkIGZvclxuICAgICAgICAgICAgICAgIC8vIG5vZGUgUmVhZFN0cmVhbSwgaXQgY2FuIHRocm93IGFuIGVycm9yIGZvciB0aGUgbWlzc2luZyBkYXRhU2l6ZSB2YWx1ZS5cbiAgICAgICAgICAgICAgICAvLyBOb3RlIHRoYXQgc3VjaCBjaGFuZ2Ugd2lsbCBiZSBhIGJyZWFraW5nIGNoYW5nZS5cbiAgICAgICAgICAgICAgICBOdW1iZXIuaXNJbnRlZ2VyKG5ld1BhcmFtc1tcImRhdGFTaXplXCJdKSkge1xuICAgICAgICAgICAgICAgIC8vIGhhdmUgdG8gY2FzdCB0aGUgZm9ybURhdGEgdG8gYW55IHNvIHRoYXQgSSBjYW4gdXNlIHRoZSB1bm9mZmljaWFsIEFQSVxuICAgICAgICAgICAgICAgIC8vIGluIHRoZSBmb3JtLWRhdGEgbGlicmFyeSB0byBoYW5kbGUgTm9kZSBSZWFkU3RyZWFtLiBTZWVcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZm9ybS1kYXRhL2Zvcm0tZGF0YS9pc3N1ZXMvNTA4XG4gICAgICAgICAgICAgICAgZm9ybURhdGFfMS5hcHBlbmQoa2V5LCBuZXdQYXJhbXNba2V5XSwge1xuICAgICAgICAgICAgICAgICAgICBrbm93bkxlbmd0aDogbmV3UGFyYW1zW1wiZGF0YVNpemVcIl1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhXzEuYXBwZW5kKGtleSwgbmV3UGFyYW1zW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhXzE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZW5jb2RlUXVlcnlTdHJpbmcocGFyYW1zKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbmNvZGUtZm9ybS1kYXRhLmpzLm1hcCIsIi8qIENvcHlyaWdodCAoYykgMjAxNyBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBwcm9jZXNzUGFyYW1zIH0gZnJvbSBcIi4vcHJvY2Vzcy1wYXJhbXNcIjtcbi8qKlxuICogRW5jb2RlcyBrZXlzIGFuZCBwYXJhbWV0ZXJzIGZvciB1c2UgaW4gYSBVUkwncyBxdWVyeSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIGtleSBQYXJhbWV0ZXIncyBrZXlcbiAqIEBwYXJhbSB2YWx1ZSBQYXJhbWV0ZXIncyB2YWx1ZVxuICogQHJldHVybnMgUXVlcnkgc3RyaW5nIHdpdGgga2V5IGFuZCB2YWx1ZSBwYWlycyBzZXBhcmF0ZWQgYnkgXCImXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVBhcmFtKGtleSwgdmFsdWUpIHtcbiAgICAvLyBGb3IgYXJyYXkgb2YgYXJyYXlzLCByZXBlYXQga2V5PXZhbHVlIGZvciBlYWNoIGVsZW1lbnQgb2YgY29udGFpbmluZyBhcnJheVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZVswXSAmJiBBcnJheS5pc0FycmF5KHZhbHVlWzBdKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubWFwKGZ1bmN0aW9uIChhcnJheUVsZW0pIHsgcmV0dXJuIGVuY29kZVBhcmFtKGtleSwgYXJyYXlFbGVtKTsgfSkuam9pbihcIiZcIik7XG4gICAgfVxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbn1cbi8qKlxuICogRW5jb2RlcyB0aGUgcGFzc2VkIG9iamVjdCBhcyBhIHF1ZXJ5IHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gcGFyYW1zIEFuIG9iamVjdCB0byBiZSBlbmNvZGVkLlxuICogQHJldHVybnMgQW4gZW5jb2RlZCBxdWVyeSBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVRdWVyeVN0cmluZyhwYXJhbXMpIHtcbiAgICB2YXIgbmV3UGFyYW1zID0gcHJvY2Vzc1BhcmFtcyhwYXJhbXMpO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhuZXdQYXJhbXMpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gZW5jb2RlUGFyYW0oa2V5LCBuZXdQYXJhbXNba2V5XSk7XG4gICAgfSlcbiAgICAgICAgLmpvaW4oXCImXCIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW5jb2RlLXF1ZXJ5LXN0cmluZy5qcy5tYXAiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTcgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuLyoqXG4gKiBDaGVja3MgcGFyYW1ldGVycyB0byBzZWUgaWYgd2Ugc2hvdWxkIHVzZSBGb3JtRGF0YSB0byBzZW5kIHRoZSByZXF1ZXN0XG4gKiBAcGFyYW0gcGFyYW1zIFRoZSBvYmplY3Qgd2hvc2Uga2V5cyB3aWxsIGJlIGVuY29kZWQuXG4gKiBAcmV0dXJuIEEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIEZvcm1EYXRhIHdpbGwgYmUgcmVxdWlyZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlc0Zvcm1EYXRhKHBhcmFtcykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhwYXJhbXMpLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJhbXNba2V5XTtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50b1BhcmFtKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvUGFyYW0oKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdHlwZSA9IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIkFycmF5XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSBcIk9iamVjdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgXCJEYXRlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSBcIkZ1bmN0aW9uXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSBcIkJvb2xlYW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlIFwiU3RyaW5nXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSBcIk51bWJlclwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8qKlxuICogQ29udmVydHMgcGFyYW1ldGVycyB0byB0aGUgcHJvcGVyIHJlcHJlc2VudGF0aW9uIHRvIHNlbmQgdG8gdGhlIEFyY0dJUyBSRVNUIEFQSS5cbiAqIEBwYXJhbSBwYXJhbXMgVGhlIG9iamVjdCB3aG9zZSBrZXlzIHdpbGwgYmUgZW5jb2RlZC5cbiAqIEByZXR1cm4gQSBuZXcgb2JqZWN0IHdpdGggcHJvcGVybHkgZW5jb2RlZCB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzUGFyYW1zKHBhcmFtcykge1xuICAgIHZhciBuZXdQYXJhbXMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB2YXIgcGFyYW0gPSBwYXJhbXNba2V5XTtcbiAgICAgICAgaWYgKHBhcmFtICYmIHBhcmFtLnRvUGFyYW0pIHtcbiAgICAgICAgICAgIHBhcmFtID0gcGFyYW0udG9QYXJhbSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcGFyYW0gJiZcbiAgICAgICAgICAgIHBhcmFtICE9PSAwICYmXG4gICAgICAgICAgICB0eXBlb2YgcGFyYW0gIT09IFwiYm9vbGVhblwiICYmXG4gICAgICAgICAgICB0eXBlb2YgcGFyYW0gIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdHlwZSA9IHBhcmFtLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gcHJvcGVybHkgZW5jb2RlcyBvYmplY3RzLCBhcnJheXMgYW5kIGRhdGVzIGZvciBhcmNnaXMuY29tIGFuZCBvdGhlciBzZXJ2aWNlcy5cbiAgICAgICAgLy8gcG9ydGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvZXNyaS1sZWFmbGV0L2Jsb2IvbWFzdGVyL3NyYy9SZXF1ZXN0LmpzI0wyMi1MMzBcbiAgICAgICAgLy8gYWxzbyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvYXJjZ2lzLXJlc3QtanMvaXNzdWVzLzE4OlxuICAgICAgICAvLyBudWxsLCB1bmRlZmluZWQsIGZ1bmN0aW9uIGFyZSBleGNsdWRlZC4gSWYgeW91IHdhbnQgdG8gc2VuZCBhbiBlbXB0eSBrZXkgeW91IG5lZWQgdG8gc2VuZCBhbiBlbXB0eSBzdHJpbmcgXCJcIi5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiQXJyYXlcIjpcbiAgICAgICAgICAgICAgICAvLyBCYXNlZCBvbiB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgYXJyYXksIGNsYXNzaWZ5IGFycmF5IGFzIGFuIGFycmF5IG9mIGFycmF5cywgYW4gYXJyYXkgb2Ygb2JqZWN0c1xuICAgICAgICAgICAgICAgIC8vIHRvIGJlIHN0cmluZ2lmaWVkLCBvciBhbiBhcnJheSBvZiBub24tb2JqZWN0cyB0byBiZSBjb21tYS1zZXBhcmF0ZWRcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY2FzZS1kZWNsYXJhdGlvbnNcbiAgICAgICAgICAgICAgICB2YXIgZmlyc3RFbGVtZW50VHlwZSA9IChfYiA9IChfYSA9IHBhcmFtWzBdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29uc3RydWN0b3IpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5uYW1lO1xuICAgICAgICAgICAgICAgIHZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgZmlyc3RFbGVtZW50VHlwZSA9PT0gXCJBcnJheVwiID8gcGFyYW0gOiAvLyBwYXNzIHRocnUgYXJyYXkgb2YgYXJyYXlzXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEVsZW1lbnRUeXBlID09PSBcIk9iamVjdFwiID8gSlNPTi5zdHJpbmdpZnkocGFyYW0pIDogLy8gc3RyaW5naWZ5IGFycmF5IG9mIG9iamVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbS5qb2luKFwiLFwiKTsgLy8gam9pbiBvdGhlciB0eXBlcyBvZiBhcnJheSBlbGVtZW50c1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIk9iamVjdFwiOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkocGFyYW0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRhdGVcIjpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcmFtLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJGdW5jdGlvblwiOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJCb29sZWFuXCI6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJhbSArIFwiXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyYW07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAwIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgbmV3UGFyYW1zW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdQYXJhbXM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9jZXNzLXBhcmFtcy5qcy5tYXAiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG4vKipcbiAqIE1ldGhvZCB1c2VkIGludGVybmFsbHkgdG8gc3VyZmFjZSBtZXNzYWdlcyB0byBkZXZlbG9wZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XG4gICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLCBbbWVzc2FnZV0pO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhcm4uanMubWFwIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY3JlYXRlQmluZGluZyhvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjbGF5ZXItY29tcG9uZW50IC5sYXllci10YWJzIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG5cXG4jbGF5ZXItY29tcG9uZW50IC5sYXllci10YWJzX19jb250ZW50IHtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTM5cHgpO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcblxcbiNsYXllci1jb21wb25lbnQgI2xheWVyLXNlYXJjaCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuICAjbGF5ZXItY29tcG9uZW50ICNsYXllci1zZWFyY2ggLmRyb3Bkb3duLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS01MDApOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2VtLWRhc2hib2FyZC9zcmMvcnVudGltZS9MYXllckNvbXBvbmVudC9MYXllckNvbXBvbmVudC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBRVEsZ0JBQWdCLEVBQUE7O0FBRnhCO0VBTVEsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBVDFCO0VBYVEsZ0JBQWdCLEVBQUE7RUFieEI7SUFnQlksZ0NBQWdDLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2xheWVyLWNvbXBvbmVudCB7XFxuICAgIC5sYXllci10YWJzIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLmxheWVyLXRhYnNfX2NvbnRlbnQge1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMzlweCk7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XFxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB9XFxuXFxuICAgICNsYXllci1zZWFyY2gge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG5cXG4gICAgICAgIC5kcm9wZG93bi1idXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS01MDApO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNsYXllci1saXN0LWNvbXBvbmVudCAjbm8tbGF5ZXJzLW1lc3NhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjdmOTtcXG4gIHBhZGRpbmc6IDVweDsgfVxcblxcbiNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDI1MHB4KTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7IH1cXG4gICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX25vLWl0ZW1zIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdF9faXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTsgfVxcbiAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIGFuaW1hdGlvbjogbmV3LWl0ZW0gNXMgZWFzZS1vdXQ7XFxuICAgIGJvcmRlcjogbm9uZTsgfVxcbiAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0X19pdGVtLWNvbnRhaW5lciAuZXNyaS1sYXllci1saXN0X19pdGVtLWxhYmVsIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgY3Vyc29yOiBtb3ZlOyB9XFxuICAgICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1jb250YWluZXIgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1sYWJlbCAuZXNyaS1sYXllci1saXN0X19pdGVtLXRvZ2dsZSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7IH1cXG4gICAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0X19pdGVtLWNvbnRhaW5lciAuZXNyaS1sYXllci1saXN0X19pdGVtLWxhYmVsIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tdG9nZ2xlOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS0xMDApOyB9XFxuICAgICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1jb250YWluZXIgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1sYWJlbCAuZXNyaS1sYXllci1saXN0X19pdGVtLXRpdGxlIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4OyB9XFxuICAgICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1jb250YWluZXIgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1sYWJlbCAuZXNyaS1pY29uLW5vbi12aXNpYmxlIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC04MDApOyB9XFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tY29udGFpbmVyIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tbGFiZWw6aGFzKC5lc3JpLWljb24tbm9uLXZpc2libGUpIHtcXG4gICAgICBjb2xvcjogdmFyKC0tbGlnaHQtODAwKTsgfVxcbiAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0X19pdGVtLWNvbnRhaW5lciAuZXNyaS1sYXllci1saXN0X19pdGVtLWFjdGlvbnMtbWVudS1pdGVtLS1hY3RpdmVbYXJpYS1sYWJlbD1cXFwiTGVnZW5kXFxcIl0ge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cXG4gICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3QtcGFuZWwge1xcbiAgICBtYXJnaW46IDAgMCA1cHggMjdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpOyB9XFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3QtcGFuZWwgLmVzcmktbGF5ZXItbGlzdC1wYW5lbF9fY29udGVudCB7XFxuICAgICAgcGFkZGluZzogNXB4IDAgNXB4IDEwcHg7IH1cXG4gICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdC1wYW5lbCAuZXNyaS1sYXllci1saXN0LXBhbmVsX19jb250ZW50OmhhcygubGVnZW5kX190ZW1wbGF0ZXMpIHtcXG4gICAgICBib3JkZXItdG9wOiAycHggdmFyKC0tbGlnaHQtMzAwKSBzb2xpZDsgfVxcbiAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0LXBhbmVsIC5lc3JpLWxlZ2VuZCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdC1wYW5lbCAuZXNyaS1sZWdlbmRfX3NlcnZpY2Uge1xcbiAgICAgIHBhZGRpbmc6IDA7IH1cXG4gICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdC1wYW5lbCAuZXNyaS1sZWdlbmRfX2xheWVyLWNoaWxkLXRhYmxlIHtcXG4gICAgICBtYXJnaW46IDA7IH1cXG4gICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tYWN0aW9ucyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTsgfVxcbiAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0X19pdGVtLWFjdGlvbnMgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1hY3Rpb25zLWxpc3QgLmVzcmktZGlzYWJsZWQtZWxlbWVudCxcXG4gICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1hY3Rpb25zIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tYWN0aW9ucy1saXN0IC5lc3JpLWRpc2FibGVkLWVsZW1lbnQ6aG92ZXIge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1saWdodC04MDApO1xcbiAgICAgIGN1cnNvcjogZGVmYXVsdDsgfVxcblxcbiNsYXllci1saXN0LWNvbXBvbmVudCAjbGF5ZXItbGlzdF9fYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgODBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDUwJSk7IH1cXG4gICNsYXllci1saXN0LWNvbXBvbmVudCAjbGF5ZXItbGlzdF9fYnV0dG9ucyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAzcHg7IH1cXG4gICNsYXllci1saXN0LWNvbXBvbmVudCAjbGF5ZXItbGlzdF9fYnV0dG9ucyAjY2xlYXItYWxsLWJ1dHRvbi1ncmlkLWl0ZW0ge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCB2YXIoLS1saWdodC0zMDApIHNvbGlkICFpbXBvcnRhbnQ7IH1cXG4gICAgI2xheWVyLWxpc3QtY29tcG9uZW50ICNsYXllci1saXN0X19idXR0b25zICNjbGVhci1hbGwtYnV0dG9uLWdyaWQtaXRlbSAjY2xlYXItYWxsLWJ1dHRvbiB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuICAgICAgI2xheWVyLWxpc3QtY29tcG9uZW50ICNsYXllci1saXN0X19idXR0b25zICNjbGVhci1hbGwtYnV0dG9uLWdyaWQtaXRlbSAjY2xlYXItYWxsLWJ1dHRvbiBzdmcge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4OyB9XFxuICAjbGF5ZXItbGlzdC1jb21wb25lbnQgI2xheWVyLWxpc3RfX2J1dHRvbnMgI2xlZ2VuZC1idXR0b24tZ3JpZC1pdGVtIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggdmFyKC0tbGlnaHQtMzAwKSBzb2xpZDsgfVxcbiAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgI2xheWVyLWxpc3RfX2J1dHRvbnMgI2xlZ2VuZC1idXR0b24tZ3JpZC1pdGVtIGxhYmVsIHtcXG4gICAgICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdG9wOiA0cHg7IH1cXG4gICAgI2xheWVyLWxpc3QtY29tcG9uZW50ICNsYXllci1saXN0X19idXR0b25zICNsZWdlbmQtYnV0dG9uLWdyaWQtaXRlbSAjbGVnZW5kLWJ1dHRvbiB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGJvdHRvbTogMnB4OyB9XFxuICAjbGF5ZXItbGlzdC1jb21wb25lbnQgI2xheWVyLWxpc3RfX2J1dHRvbnMgI2xheWVyLXZpc2liaWxpdHktYnV0dG9uLWdyaWQtaXRlbSB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMjsgfVxcblxcbi5jb2xvci1waWNrZXItYmxvY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxMXB4O1xcbiAgbGVmdDogNXB4OyB9XFxuXFxuLmxheWVyLXNpemUtc2xpZGVyID4gaW5wdXQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDY1JTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogM3B4O1xcbiAgbWFyZ2luOiAwIDEwcHg7IH1cXG5cXG4jcGljdHVyZS1tYXJrZXItd2FybmluZyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuICAjcGljdHVyZS1tYXJrZXItd2FybmluZyBkaXYge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuXFxuI3Nob3ctbGVnZW5kLWJ1dHRvbjpob3Zlcjpub3QoLmRpc2FibGVkKSwgI2hpZGUtbGVnZW5kLWJ1dHRvbjpob3Zlcjpub3QoLmRpc2FibGVkKSB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS01MDApOyB9XFxuXFxuI2xlZ2VuZC1idXR0b24gc3ZnIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07IH1cXG5cXG4ubW9kYWwtYmFja2Ryb3AuZmFkZS5zaG93IHtcXG4gIG9wYWNpdHk6IDA7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vZW0tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyTGlzdENvbXBvbmVudC9MYXllckxpc3RDb21wb25lbnQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUVRLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBSHBCO0VBT1EsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQiw4QkFBOEIsRUFBQTtFQVR0QztJQVlZLGFBQWEsRUFBQTtFQVp6QjtJQWdCWSw4QkFBOEIsRUFBQTtFQWhCMUM7SUFvQlksZUFBZTtJQUNmLCtCQUErQjtJQUMvQixZQUFZLEVBQUE7SUF0QnhCO01BeUJnQixrQkFBa0I7TUFDbEIsWUFBWSxFQUFBO01BMUI1QjtRQTZCb0Isa0JBQWtCO1FBQ2xCLFlBQVksRUFBQTtNQTlCaEM7UUFrQ29CLHNDQUFzQyxFQUFBO01BbEMxRDtRQXNDb0IsaUJBQWlCLEVBQUE7TUF0Q3JDO1FBMENvQix1QkFBdUIsRUFBQTtJQTFDM0M7TUErQ2dCLHVCQUF1QixFQUFBO0lBL0N2QztNQW1EZ0IseUJBQXlCLEVBQUE7RUFuRHpDO0lBd0RZLG9CQUFvQjtJQUNwQiw4QkFBOEIsRUFBQTtJQXpEMUM7TUE0RGdCLHVCQUF1QixFQUFBO0lBNUR2QztNQWdFZ0Isc0NBQXNDLEVBQUE7SUFoRXREO01Bb0VnQiw2QkFBNkIsRUFBQTtJQXBFN0M7TUF3RWdCLFVBQVUsRUFBQTtJQXhFMUI7TUE0RWdCLFNBQVMsRUFBQTtFQTVFekI7SUFpRlksOEJBQThCLEVBQUE7SUFqRjFDOztNQXFGZ0IsdUJBQXVCO01BQ3ZCLGVBQWUsRUFBQTs7QUF0Ri9CO0VBNkZRLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0Isa0NBQWtDLEVBQUE7RUEvRjFDO0lBa0dZLFlBQVksRUFBQTtFQWxHeEI7SUFzR1ksY0FBYztJQUNkLFdBQVc7SUFDWCxvREFBb0QsRUFBQTtJQXhHaEU7TUEyR2dCLGVBQWUsRUFBQTtNQTNHL0I7UUE4R29CLGVBQWU7UUFDZixrQkFBa0IsRUFBQTtFQS9HdEM7SUFxSFksY0FBYztJQUNkLFdBQVc7SUFDWCx5Q0FBeUMsRUFBQTtJQXZIckQ7TUEwSGdCLHNDQUFzQztNQUN0QyxrQkFBa0I7TUFDbEIsUUFBUSxFQUFBO0lBNUh4QjtNQWdJZ0Isa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTtFQWpJM0I7SUFzSVksY0FBYztJQUNkLFdBQVcsRUFBQTs7QUFNdkI7RUFDSSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTLEVBQUE7O0FBR2I7RUFDSSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBSVEsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksVUFBVSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNsYXllci1saXN0LWNvbXBvbmVudCB7XFxuICAgICNuby1sYXllcnMtbWVzc2FnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmN2Y5O1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuXFxuICAgIC5lc3JpLWxheWVyLWxpc3Qge1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjUwcHgpO1xcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXG4gICAgICAgIC5lc3JpLWxheWVyLWxpc3RfX25vLWl0ZW1zIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmVzcmktbGF5ZXItbGlzdF9faXRlbSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1jb250YWluZXIge1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgICAgICAgICBhbmltYXRpb246IG5ldy1pdGVtIDVzIGVhc2Utb3V0O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG5cXG4gICAgICAgICAgICAuZXNyaS1sYXllci1saXN0X19pdGVtLWxhYmVsIHtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG1vdmU7XFxuXFxuICAgICAgICAgICAgICAgIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tdG9nZ2xlIHtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuZXNyaS1sYXllci1saXN0X19pdGVtLXRvZ2dsZTpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMTAwKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuZXNyaS1sYXllci1saXN0X19pdGVtLXRpdGxlIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5lc3JpLWljb24tbm9uLXZpc2libGUge1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LTgwMCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1sYWJlbDpoYXMoLmVzcmktaWNvbi1ub24tdmlzaWJsZSkge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtODAwKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1hY3Rpb25zLW1lbnUtaXRlbS0tYWN0aXZlW2FyaWEtbGFiZWw9XFxcIkxlZ2VuZFxcXCJdIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZXNyaS1sYXllci1saXN0LXBhbmVsIHtcXG4gICAgICAgICAgICBtYXJnaW46IDAgMCA1cHggMjdweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuXFxuICAgICAgICAgICAgLmVzcmktbGF5ZXItbGlzdC1wYW5lbF9fY29udGVudCB7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDVweCAxMHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZXNyaS1sYXllci1saXN0LXBhbmVsX19jb250ZW50OmhhcygubGVnZW5kX190ZW1wbGF0ZXMpIHtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHZhcigtLWxpZ2h0LTMwMCkgc29saWQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5lc3JpLWxlZ2VuZCB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZXNyaS1sZWdlbmRfX3NlcnZpY2Uge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZXNyaS1sZWdlbmRfX2xheWVyLWNoaWxkLXRhYmxlIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tYWN0aW9ucyB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcblxcbiAgICAgICAgICAgIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tYWN0aW9ucy1saXN0IC5lc3JpLWRpc2FibGVkLWVsZW1lbnQsXFxuICAgICAgICAgICAgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1hY3Rpb25zLWxpc3QgLmVzcmktZGlzYWJsZWQtZWxlbWVudDpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC04MDApO1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuXFxuICAgICNsYXllci1saXN0X19idXR0b25zIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4MHB4O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNTAlKTtcXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2NsZWFyLWFsbC1idXR0b24tZ3JpZC1pdGVtIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggdmFyKC0tbGlnaHQtMzAwKSBzb2xpZCAhaW1wb3J0YW50O1xcblxcbiAgICAgICAgICAgICNjbGVhci1hbGwtYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xcblxcbiAgICAgICAgICAgICAgICBzdmcge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2xlZ2VuZC1idXR0b24tZ3JpZC1pdGVtIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggdmFyKC0tbGlnaHQtMzAwKSBzb2xpZDtcXG5cXG4gICAgICAgICAgICBsYWJlbCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgIHRvcDogNHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjbGVnZW5kLWJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgYm90dG9tOiAycHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2xheWVyLXZpc2liaWxpdHktYnV0dG9uLWdyaWQtaXRlbSB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXFxuLmNvbG9yLXBpY2tlci1ibG9jayB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDExcHg7XFxuICAgIGxlZnQ6IDVweDtcXG59XFxuXFxuLmxheWVyLXNpemUtc2xpZGVyID4gaW5wdXQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAzcHg7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcbn1cXG5cXG4jcGljdHVyZS1tYXJrZXItd2FybmluZyB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxuICAgIGRpdiB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxufVxcblxcbiNzaG93LWxlZ2VuZC1idXR0b246aG92ZXI6bm90KC5kaXNhYmxlZCksICNoaWRlLWxlZ2VuZC1idXR0b246aG92ZXI6bm90KC5kaXNhYmxlZCkge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS01MDApO1xcbn1cXG5cXG4jbGVnZW5kLWJ1dHRvbiBzdmcge1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4ubW9kYWwtYmFja2Ryb3AuZmFkZS5zaG93IHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3RlbXBsYXRlLWNvbXBvbmVudCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmN2Y5O1xcbiAgYm9yZGVyOiAxcHggdmFyKC0tZGFyay04MDApIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAjdGVtcGxhdGUtY29tcG9uZW50ICN0ZW1wbGF0ZS1jb21wb25lbnRfX2hlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTsgfVxcbiAgICAjdGVtcGxhdGUtY29tcG9uZW50ICN0ZW1wbGF0ZS1jb21wb25lbnRfX2hlYWRlciBoNCB7XFxuICAgICAgZGlzcGxheTogaW5saW5lOyB9XFxuICAgICN0ZW1wbGF0ZS1jb21wb25lbnQgI3RlbXBsYXRlLWNvbXBvbmVudF9faGVhZGVyICN0ZW1wbGF0ZS1jb21wb25lbnRfX2luZm8ge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbWFyZ2luOiAycHggMCAwIDVweDsgfVxcbiAgI3RlbXBsYXRlLWNvbXBvbmVudCAjdGVtcGxhdGUtc2VhcmNoIC5kcm9wZG93bi1idXR0b246aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktNTAwKTsgfVxcbiAgI3RlbXBsYXRlLWNvbXBvbmVudCAjYWN0aXZlLXRlbXBsYXRlcy1tZW51IHtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4OyB9XFxuICAgICN0ZW1wbGF0ZS1jb21wb25lbnQgI2FjdGl2ZS10ZW1wbGF0ZXMtbWVudSAuc2Nyb2xsLWl0ZW0ge1xcbiAgICAgIG1heC13aWR0aDogMTUwcHg7IH1cXG4gICAgICAjdGVtcGxhdGUtY29tcG9uZW50ICNhY3RpdmUtdGVtcGxhdGVzLW1lbnUgLnNjcm9sbC1pdGVtIC5uYXYtbGluayB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay04MDApO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICAgICAgYm9yZGVyOiAxcHggdmFyKC0tZGFyay04MDApIHNvbGlkOyB9XFxuICAgICN0ZW1wbGF0ZS1jb21wb25lbnQgI2FjdGl2ZS10ZW1wbGF0ZXMtbWVudSAudGFiLXRpdGxlIHtcXG4gICAgICBtYXJnaW4tdG9wOiAycHg7IH1cXG4gICAgI3RlbXBsYXRlLWNvbXBvbmVudCAjYWN0aXZlLXRlbXBsYXRlcy1tZW51ICNuby1hY3RpdmUtdGVtcGxhdGVzIHtcXG4gICAgICBwYWRkaW5nOiA1cHggMCAwIDVweDsgfVxcblxcbi50ZW1wbGF0ZS1zZWFyY2gtaXRlbSB7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLnRlbXBsYXRlLXNlYXJjaC1pdGVtIC50ZW1wbGF0ZS1zZWFyY2gtaXRlbV9fYWRkLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1NXB4KTsgfVxcblxcbi50ZW1wbGF0ZS1kcm9wZG93bl9fY29udGVudCB7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIGJvcmRlci1sZWZ0OiAycHggdmFyKC0tbGlnaHQtMzAwKSBzb2xpZDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvVGVtcGxhdGVDb21wb25lbnQvVGVtcGxhdGVDb21wb25lbnQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGNBQWM7RUFDZCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyxrQkFBa0IsRUFBQTtFQUx0QjtJQVFRLHFCQUFxQixFQUFBO0lBUjdCO01BV1ksZUFBZSxFQUFBO0lBWDNCO01BZVksZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixtQkFBbUIsRUFBQTtFQWpCL0I7SUF1QlksZ0NBQWdDLEVBQUE7RUF2QjVDO0lBNEJRLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTtJQWhDekI7TUFtQ1ksZ0JBQWdCLEVBQUE7TUFuQzVCO1FBc0NnQixzQkFBc0I7UUFDdEIsOEJBQThCO1FBQzlCLGVBQWU7UUFDZixpQ0FBaUMsRUFBQTtJQXpDakQ7TUE4Q1ksZUFBZSxFQUFBO0lBOUMzQjtNQWtEWSxvQkFBb0IsRUFBQTs7QUFNaEM7RUFDSSxXQUFXLEVBQUE7RUFEZjtJQUlRLHdCQUF3QixFQUFBOztBQUloQztFQUNJLGlCQUFpQjtFQUNqQix1Q0FBdUMsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjdGVtcGxhdGUtY29tcG9uZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGY3Zjk7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLWRhcmstODAwKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICAjdGVtcGxhdGUtY29tcG9uZW50X19oZWFkZXIge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcblxcbiAgICAgICAgaDQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICN0ZW1wbGF0ZS1jb21wb25lbnRfX2luZm8ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgbWFyZ2luOiAycHggMCAwIDVweDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAjdGVtcGxhdGUtc2VhcmNoIHtcXG4gICAgICAgIC5kcm9wZG93bi1idXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS01MDApO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICNhY3RpdmUtdGVtcGxhdGVzLW1lbnUge1xcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcXG5cXG4gICAgICAgIC5zY3JvbGwtaXRlbSB7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcXG5cXG4gICAgICAgICAgICAubmF2LWxpbmsge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZGFyay04MDApO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggdmFyKC0tZGFyay04MDApIHNvbGlkO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YWItdGl0bGUge1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNuby1hY3RpdmUtdGVtcGxhdGVzIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMCAwIDVweDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cXG4udGVtcGxhdGUtc2VhcmNoLWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgLnRlbXBsYXRlLXNlYXJjaC1pdGVtX19hZGQtYnV0dG9uIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1NXB4KTtcXG4gICAgfVxcbn1cXG5cXG4udGVtcGxhdGUtZHJvcGRvd25fX2NvbnRlbnQge1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCB2YXIoLS1saWdodC0zMDApIHNvbGlkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuamltdS13aWRnZXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnAtNSB7XFxuICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDsgfVxcblxcbi8qIEdyaWQgcG9zaXRpb25pbmcgKi9cXG4jb2VtLWRhc2hib2FyZC1ncmlkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xcbiAgZm9udC1zaXplOiAxMjUlICFpbXBvcnRhbnQ7IH1cXG4gICNvZW0tZGFzaGJvYXJkLWdyaWQgLmdyaWQtaXRlbSB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICNvZW0tZGFzaGJvYXJkLWdyaWQgI3RlbXBsYXRlLWNvbXBvbmVudF9fZ3JpZC1pdGVtIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxOyB9XFxuICAjb2VtLWRhc2hib2FyZC1ncmlkICNsYXllci1jb21wb25lbnRfX2dyaWQtaXRlbSB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMiAvIDQ7IH1cXG4gICNvZW0tZGFzaGJvYXJkLWdyaWQgI2xheWVyLWxpc3RfX2dyaWQtaXRlbSB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTsgfVxcbiAgI29lbS1kYXNoYm9hcmQtZ3JpZCAjc2F2ZS10ZW1wbGF0ZS1ncmlkLWl0ZW0ge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTsgfVxcbiAgI29lbS1kYXNoYm9hcmQtZ3JpZCAubG9hZGluZyB7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDIwMHB4OyB9XFxuXFxuLyogQnV0dG9ucyBhbmQgaWNvbnMgKi9cXG4uYWRkLWJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAuYWRkLWJ1dHRvbiAuaWNvbi1idG4tc2l6ZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIC5hZGQtYnV0dG9uIC5qaW11LWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7IH1cXG5cXG4jb3Blbi1zYXZlLXRlbXBsYXRlLWJ1dHRvbiB7XFxuICBib3R0b206IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBhZGRpbmc6IDByZW0gMC43NXJlbTsgfVxcbiAgI29wZW4tc2F2ZS10ZW1wbGF0ZS1idXR0b24gLmppbXUtaWNvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDRweDsgfVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBjb2xvcjogdmFyKC0tZGFyay04MDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTUwMCk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeS01MDApOyB9XFxuXFxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS0yMDApO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMjAwKTsgfVxcblxcbi5hZHZhbmNlZC1zZWxlY3QtbWVudSAuc2VsZWN0LWl0ZW0tcGxhY2Vob2xkZXIge1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICB3aWR0aDogMCAhaW1wb3J0YW50OyB9XFxuXFxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7IH1cXG5cXG4ubXVsdGlwbGUtc2VsZWN0LXRvb2wge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLmppbXUtZHJvcGRvd24taXRlbSA+IC5qaW11LWNoZWNrYm94IHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbkBrZXlmcmFtZXMgbmV3LWl0ZW0ge1xcbiAgZnJvbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS0xMDApOyB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMTAwKTsgfVxcbiAgdG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfSB9XFxuXFxuLm1vZGFsLWNvbnRlbnQgLm1lbnUtbmF2aWdhdGlvbiAubmF2LWxpbmsuYWN0aXZlIHtcXG4gIGN1cnNvcjogZGVmYXVsdDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29lbS1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvV2lkZ2V0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSwwQkFBMEIsRUFBQTs7QUFJOUIscUJBQUE7QUFDQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IscUNBQXFDO0VBRXJDLDBCQUEwQixFQUFBO0VBUjlCO0lBV1EsMEJBQTBCO0lBQzFCLGtCQUFrQixFQUFBO0VBWjFCO0lBZ0JRLGNBQWM7SUFDZCxXQUFXLEVBQUE7RUFqQm5CO0lBcUJRLGNBQWM7SUFDZCxlQUFlLEVBQUE7RUF0QnZCO0lBMEJRLGNBQWM7SUFDZCxlQUFlO0lBQ2YsOEJBQThCLEVBQUE7RUE1QnRDO0lBZ0NRLGNBQWM7SUFDZCxXQUFXO0lBQ1gsOEJBQThCLEVBQUE7RUFsQ3RDO0lBc0NRLFlBQVk7SUFDWixZQUFZLEVBQUE7O0FBSXBCLHNCQUFBO0FBQ0E7RUFDSSxXQUFXO0VBQ1gsY0FBYyxFQUFBO0VBRmxCO0lBS1EscUJBQXFCO0lBQ3JCLGdCQUFnQixFQUFBO0VBTnhCO0lBVVEsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTs7QUFJMUI7RUFJSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBO0VBTnpCO0lBRVEsa0JBQWtCLEVBQUE7O0FBTzFCO0VBQ0ksc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDSSxzQ0FBc0M7RUFDdEMsa0NBQWtDLEVBQUE7O0FBR3RDO0VBQ0ksb0JBQW9CO0VBQ3BCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlDQUF5QyxFQUFBOztBQUc3QztFQUNJLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJO0lBQU0sc0NBQXNDLEVBQUE7RUFDNUM7SUFBSyxzQ0FBc0MsRUFBQTtFQUMzQztJQUFJLDZCQUE2QixFQUFBLEVBQUE7O0FBR3JDO0VBQ0ksZUFBZSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5qaW11LXdpZGdldCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnAtNSB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG5cXG4vKiBHcmlkIHBvc2l0aW9uaW5nICovXFxuI29lbS1kYXNoYm9hcmQtZ3JpZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcXG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxOTBweCAxZnIgNjBweDtcXG4gICAgZm9udC1zaXplOiAxMjUlICFpbXBvcnRhbnQ7XFxuXFxuICAgIC5ncmlkLWl0ZW0ge1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgI3RlbXBsYXRlLWNvbXBvbmVudF9fZ3JpZC1pdGVtIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICAgICAgZ3JpZC1yb3c6IDE7XFxuICAgIH1cXG5cXG4gICAgI2xheWVyLWNvbXBvbmVudF9fZ3JpZC1pdGVtIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyA0O1xcbiAgICB9XFxuXFxuICAgICNsYXllci1saXN0X19ncmlkLWl0ZW0ge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIH1cXG5cXG4gICAgI3NhdmUtdGVtcGxhdGUtZ3JpZC1pdGVtIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIH1cXG5cXG4gICAgLmxvYWRpbmcge1xcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICB9XFxufVxcblxcbi8qIEJ1dHRvbnMgYW5kIGljb25zICovXFxuLmFkZC1idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuXFxuICAgIC5pY29uLWJ0bi1zaXplciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB9XFxuXFxuICAgIC5qaW11LWljb24ge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHggIWltcG9ydGFudDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XFxuICAgIH1cXG59XFxuXFxuI29wZW4tc2F2ZS10ZW1wbGF0ZS1idXR0b24ge1xcbiAgICAuamltdS1pY29uIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcXG4gICAgfVxcbiAgICBib3R0b206IDUwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAwcmVtIDAuNzVyZW07XFxufVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS01MDApO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeS01MDApO1xcbn1cXG5cXG4uYnRuLXByaW1hcnk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMjAwKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMjAwKTtcXG59XFxuXFxuLmFkdmFuY2VkLXNlbGVjdC1tZW51IC5zZWxlY3QtaXRlbS1wbGFjZWhvbGRlciB7XFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXVsdGlwbGUtc2VsZWN0LXRvb2wge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5qaW11LWRyb3Bkb3duLWl0ZW0gPiAuamltdS1jaGVja2JveCB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuQGtleWZyYW1lcyBuZXctaXRlbSB7XFxuICAgIGZyb20ge2JhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS0xMDApfVxcbiAgICA1MCUge2JhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS0xMDApfVxcbiAgICB0byB7YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnR9XFxufVxcblxcbi5tb2RhbC1jb250ZW50IC5tZW51LW5hdmlnYXRpb24gLm5hdi1saW5rLmFjdGl2ZSB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vTGF5ZXJDb21wb25lbnQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vTGF5ZXJDb21wb25lbnQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9MYXllckxpc3RDb21wb25lbnQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vTGF5ZXJMaXN0Q29tcG9uZW50LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vVGVtcGxhdGVDb21wb25lbnQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vVGVtcGxhdGVDb21wb25lbnQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9XaWRnZXQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vV2lkZ2V0LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0J1dHRvbiwgSWNvbn0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCBMYXllciBmcm9tIFwiZXNyaS9sYXllcnMvTGF5ZXJcIjtcbmltcG9ydCBMYXllcldyYXBwZXIgZnJvbSBcIi4uL0xheWVyV3JhcHBlclwiO1xuXG5pbnRlcmZhY2UgQWRkTGF5ZXJJdGVtUHJvcHMge1xuICAgIGxheWVyV3JhcHBlcjogTGF5ZXJXcmFwcGVyIC8vIExheWVyV3JhcHBlciBvZiB0aGUgYXNzb2NpYXRlZCBMYXllclxuICAgIG9uQWRkTGF5ZXI6IChsYXllcldyYXBwZXI6IExheWVyV3JhcHBlcikgPT4gYW55IC8vIGNhbGxiYWNrIGZ1bmN0aW9uIHVwb24gYWRkaW5nIExheWVyXG4gICAgYWN0aXZlOiBib29sZWFuIC8vIHdoZXRoZXIgdGhlIExheWVyIGlzIGFjdGl2ZVxufVxuXG5cbi8qKlxuICogQWRkTGF5ZXJJdGVtIGFsbG93cyB0aGUgdXNlciB0byBhZGQgYSBMYXllciB0byB0aGUgTWFwXG4gKi9cbmNsYXNzIEFkZExheWVySXRlbSBleHRlbmRzIENvbXBvbmVudDxBZGRMYXllckl0ZW1Qcm9wcywge30+IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQnV0dG9uXCJcbiAgICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkFkZExheWVyKHRoaXMucHJvcHMubGF5ZXJXcmFwcGVyKX1cbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYWN0aXZlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgIGljb249e3RoaXMucHJvcHMuYWN0aXZlID9cbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvY2hlY2stMzIuc3ZnXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9wbHVzLTMyLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubGF5ZXJXcmFwcGVyLnRpdGxlfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRMYXllckl0ZW07XG4iLCJpbXBvcnQgXCIuL0xheWVyQ29tcG9uZW50LnNjc3NcIjtcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUYWIsIFRhYnN9IGZyb20gJ2ppbXUtdWknO1xuaW1wb3J0IENhdGVnb3J5IGZyb20gJy4uL0NhdGVnb3J5JztcbmltcG9ydCBMYXllclNlYXJjaCBmcm9tIFwiLi9MYXllclNlYXJjaFwiO1xuaW1wb3J0IEFkZExheWVySXRlbSBmcm9tIFwiLi9BZGRMYXllckl0ZW1cIjtcbmltcG9ydCBMYXllcldyYXBwZXIgZnJvbSBcIi4uL0xheWVyV3JhcHBlclwiO1xuXG5pbnRlcmZhY2UgQWRkTGF5ZXJzUHJvcHMge1xuICAgIGxheWVyczogTGF5ZXJXcmFwcGVyW10gLy8gTGlzdCBvZiBMYXllcldyYXBwZXJzIHRvIHJlbmRlclxuICAgIGFjdGl2ZUxheWVyczogTGF5ZXJXcmFwcGVyW10gLy8gbGlzdCBvZiBhY3RpdmUgTGF5ZXJzXG4gICAgb25BZGRMYXllcjogKGxheWVyV3JhcHBlcjogTGF5ZXJXcmFwcGVyKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiBhZGRpbmcgTGF5ZXJzXG4gICAgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXSAvLyBsaXN0IG9mIENhdGVnb3JpZXNcbn1cblxuLyoqXG4gKiBMYXllckNvbXBvbmVudCBjb250YWlucyBtdWx0aXBsZSBUYWJzIG9mIENhdGVnb3JpZXMgYW5kIGFsbG93cyB1c2VycyB0byBhZGQgTGF5ZXJzIHRvIHRoZSBNYXBcbiAqL1xuY2xhc3MgTGF5ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8QWRkTGF5ZXJzUHJvcHMsIHt9PiB7XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGxpc3Qgb2YgQ2F0ZWdvcmllcyBhcyBUYWJzXG4gICAgICovXG4gICAgcmVuZGVyQ2F0ZWdvcnlUYWJzOiBGdW5jdGlvbiA9ICgpOiBSZWFjdC5SZWFjdEVsZW1lbnRbXSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAgICAgIGlkPXtcImNhdGVnb3J5LVwiICsgY2F0ZWdvcnkuaWQgKyBcIi10YWJcIn1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFiXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NhdGVnb3J5LnRpdGxlICsgXCIgKFwiICsgY2F0ZWdvcnkubGF5ZXJXcmFwcGVycy5sZW5ndGggKyBcIilcIn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e1wiY2F0ZWdvcnktXCIgKyBjYXRlZ29yeS5pZCArIFwiLXRhYi1jb250ZW50XCJ9IGNsYXNzTmFtZT1cImxheWVyLXRhYnNfX2NvbnRlbnQgcC01IGJvcmRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LmxheWVyV3JhcHBlcnMubWFwKChsYXllcldyYXBwZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkTGF5ZXJJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcldyYXBwZXI9e2xheWVyV3JhcHBlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkTGF5ZXI9e3RoaXMucHJvcHMub25BZGRMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmVMYXllcnMuaW5jbHVkZXMobGF5ZXJXcmFwcGVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImxheWVyLWNvbXBvbmVudFwiPlxuICAgICAgICAgICAgICAgIDxoND5MYXllcnM8L2g0PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmxheWVycyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxMYXllclNlYXJjaFxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJzPXt0aGlzLnByb3BzLmxheWVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkTGF5ZXI9e3RoaXMucHJvcHMub25BZGRMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUxheWVycz17dGhpcy5wcm9wcy5hY3RpdmVMYXllcnN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheWVyLXRhYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCl7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKXt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRhYnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jYXRlZ29yaWVzICYmIHRoaXMucmVuZGVyQ2F0ZWdvcnlUYWJzKCl9XG4gICAgICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJDb21wb25lbnQ7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtBZHZhbmNlZFNlbGVjdCwgSWNvbn0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCBBZGRMYXllckl0ZW0gZnJvbSBcIi4vQWRkTGF5ZXJJdGVtXCI7XG5pbXBvcnQgTGF5ZXJXcmFwcGVyIGZyb20gXCIuLi9MYXllcldyYXBwZXJcIjtcblxuaW50ZXJmYWNlIEFkZExheWVyU2VhcmNoUHJvcHMge1xuICAgIGxheWVyczogTGF5ZXJXcmFwcGVyW10gLy8gbGlzdCBvZiBMYXllcldyYXBwZXJzIHRvIHJlbmRlclxuICAgIGFjdGl2ZUxheWVyczogTGF5ZXJXcmFwcGVyW10gLy8gbGlzdCBvZiBhY3RpdmUgTGF5ZXJzXG4gICAgb25BZGRMYXllcjogKGxheWVyV3JhcHBlcjogTGF5ZXJXcmFwcGVyKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiBhZGRpbmcgTGF5ZXJzXG59XG5cbi8qKlxuICogTGF5ZXJTZWFyY2ggYWxsb3dzIHVzZXJzIHRvIHNlYXJjaCBmb3IgYW5kIGFkZCBMYXllcnMgdG8gdGhlIE1hcFxuICovXG5jbGFzcyBMYXllclNlYXJjaCBleHRlbmRzIENvbXBvbmVudDxBZGRMYXllclNlYXJjaFByb3BzLCB7fT4ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsYXllci1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8QWR2YW5jZWRTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgaXNNdWx0aXBsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgaXNFbXB0eU9wdGlvbkhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKXt9fVxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgIHNvcnRWYWx1ZXNCeUxhYmVsPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBtZW51UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDogWzAsIC00MF1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tRHJvcGRvd25CdXR0b25Db250ZW50PXsoKSA9PiB7cmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL3NlYXJjaC0zMi5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoIGZvciBsYXllci4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9fVxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNWYWx1ZXM9e3RoaXMucHJvcHMubGF5ZXJzLm1hcCgobGF5ZXJXcmFwcGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBsYXllcldyYXBwZXIudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGxheWVyV3JhcHBlci5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI6IChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8QWRkTGF5ZXJJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcldyYXBwZXI9e2xheWVyV3JhcHBlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkTGF5ZXI9e3RoaXMucHJvcHMub25BZGRMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmVMYXllcnMuaW5jbHVkZXMobGF5ZXJXcmFwcGVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJTZWFyY2g7XG4iLCJpbXBvcnQgXCIuL0xheWVyTGlzdENvbXBvbmVudC5zY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCdXR0b24sIERyb3Bkb3duLCBEcm9wZG93bkJ1dHRvbiwgRHJvcGRvd25NZW51LCBEcm9wZG93bkl0ZW0sIEljb259IGZyb20gXCJqaW11LXVpXCI7XG5cbmludGVyZmFjZSBMYXllckxpc3RCdXR0b25zUHJvcHMge1xuICAgIG9uQ2xlYXJBbGw6ICgpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB0byBjbGVhciBhbGwgTGF5ZXJzXG4gICAgb25IaWRlTGVnZW5kOiAoKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdG8gaGlkZSBsZWdlbmRzXG4gICAgb25TaG93TGVnZW5kOiAoKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdG8gc2hvdyBsZWdlbmRzXG4gICAgb25IaWRlTGF5ZXJzOiAoKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdG8gaGlkZSBhbGwgTGF5ZXJzXG4gICAgb25TaG93TGF5ZXJzOiAoKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdG8gc2hvdyBhbGwgTGF5ZXJzXG4gICAgYWxsTGF5ZXJzSGlkZGVuOiBib29sZWFuIC8vIHdoZXRoZXIgYWxsIExheWVycyBhcmUgaGlkZGVuXG4gICAgYWxsTGVnZW5kc09wZW46IGJvb2xlYW4gLy8gd2hldGhlciBhbGwgbGVnZW5kcyBhcmUgb3BlblxuICAgIGFsbExlZ2VuZHNDbG9zZWQ6IGJvb2xlYW4gLy8gd2hldGhlciBhbGwgbGVnZW5kcyBhcmUgY2xvc2VkXG59XG5cbmludGVyZmFjZSBMYXllckxpc3RCdXR0b25zU3RhdGUge1xufVxuXG4vKipcbiAqIExheWVyTGlzdEJ1dHRvbnMgY29udGFpbnMgQnV0dG9ucyB0aGF0IGNvbnRyb2wgdGhlIGJlaGF2aW9yIG9mIGEgTGF5ZXJMaXN0XG4gKi9cbmNsYXNzIExheWVyTGlzdEJ1dHRvbnMgZXh0ZW5kcyBDb21wb25lbnQ8TGF5ZXJMaXN0QnV0dG9uc1Byb3BzLCBMYXllckxpc3RCdXR0b25zU3RhdGU+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGF5ZXItbGlzdF9fYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjbGVhci1hbGwtYnV0dG9uLWdyaWQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGVhckFsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2xlYXItYWxsLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVydGlhcnlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDbGVhciBBbGxcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxlZ2VuZC1idXR0b24tZ3JpZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGVnZW5kLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlcnRpYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvdz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVnZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL2hhbWJ1cmdlci0zMi5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWdubWVudD1cImVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uU2hvd0xlZ2VuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaG93LWxlZ2VuZC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVydGlhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5hbGxMZWdlbmRzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgQWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uSGlkZUxlZ2VuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJoaWRlLWxlZ2VuZC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVydGlhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5hbGxMZWdlbmRzQ2xvc2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlkZSBBbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsYXllci12aXNpYmlsaXR5LWdyaWQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxheWVyLXZpc2liaWxpdHktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYWxsTGF5ZXJzSGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TaG93TGF5ZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGVMYXllcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3RoaXMucHJvcHMuYWxsTGF5ZXJzSGlkZGVuID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy92aWV3LWhpZGUtMzIuc3ZnXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL3ZpZXctdmlzaWJsZS0zMi5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYWxsTGF5ZXJzSGlkZGVuID8gXCJTaG93IEFsbFwiIDogXCJIaWRlIEFsbFwifVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJMaXN0QnV0dG9ucztcbiIsImltcG9ydCBcIi4vTGF5ZXJMaXN0Q29tcG9uZW50LnNjc3NcIjtcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0xheWVyXCI7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIjtcbmltcG9ydCB7SmltdU1hcFZpZXcsIEppbXVNYXBWaWV3Q29tcG9uZW50fSBmcm9tICdqaW11LWFyY2dpcyc7XG5pbXBvcnQgTGF5ZXJMaXN0IGZyb20gXCJlc3JpL3dpZGdldHMvTGF5ZXJMaXN0XCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcImVzcmkvd2lkZ2V0cy9MYXllckxpc3QvTGlzdEl0ZW1cIjtcbmltcG9ydCBMYXllclN0eWxlTW9kYWwgZnJvbSBcIi4vTGF5ZXJTdHlsZU1vZGFsXCI7XG5pbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4uL1RlbXBsYXRlXCI7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4uL0NhdGVnb3J5XCI7XG5pbXBvcnQgcmVhY3RpdmVVdGlscyBmcm9tIFwiZXNyaS9jb3JlL3JlYWN0aXZlVXRpbHNcIjtcbmltcG9ydCBMYXllckxpc3RCdXR0b25zIGZyb20gXCIuL0xheWVyTGlzdEJ1dHRvbnNcIjtcbmltcG9ydCBNb3JlSW5mb01vZGFsIGZyb20gXCIuL01vcmVJbmZvTW9kYWxcIjtcbmltcG9ydCBMZWdlbmQgZnJvbSBcImVzcmkvd2lkZ2V0cy9MZWdlbmRcIjtcblxuaW50ZXJmYWNlIExheWVyTGlzdFByb3BzIHtcbiAgICB1c2VNYXBXaWRnZXRJZDogc3RyaW5nIC8vIE1hcCB3aWRnZXQgSUQgdG8gdXNlXG4gICAgb25SZW1vdmVMYXllcjogKGxheWVyOiBMYXllcikgPT4gYW55IC8vIGNhbGxiYWNrIGZ1bmN0aW9uIHVwb24gcmVtb3ZpbmcgTGF5ZXJcbiAgICBnZXRMYXllclRlbXBsYXRlczogKGxheWVyOiBMYXllciwgYWN0aXZlOiBib29sZWFuKSA9PiBUZW1wbGF0ZVtdIC8vIHJldHVybnMgYWN0aXZlIFRlbXBsYXRlcyBmb3IgdGhlIGdpdmVuIExheWVyXG4gICAgZ2V0TGF5ZXJDYXRlZ29yeTogKGxheWVyOiBMYXllcikgPT4gQ2F0ZWdvcnkgLy8gcmV0dXJucyBDYXRlZ29yeSBvZiB0aGUgZ2l2ZW4gTGF5ZXJcbiAgICBudW1BY3RpdmVMYXllcnM6IG51bWJlciAvLyB0aGUgbnVtYmVyIG9mIGFjdGl2ZSBMYXllcnNcbiAgICBvbkNsZWFyQWxsOiAoKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiBjbGVhcmluZyBhbGwgTGF5ZXJzXG4gICAgZ2V0TGF5ZXJJbmZvOiAobGF5ZXI6IExheWVyKSA9PiBhbnlcbn1cblxuaW50ZXJmYWNlIExheWVyTGlzdFN0YXRlIHtcbiAgICBqbXY6IEppbXVNYXBWaWV3IC8vIEppbXVNYXBWaWV3IG9mIHRoZSBhc3NvY2lhdGVkIE1hcFxuICAgIHdpZGdldDogTGF5ZXJMaXN0IC8vIExheWVyTGlzdCB3aWRnZXQgdG8gcmVuZGVyXG4gICAgbGF5ZXJTdHlsZU1vZGFsT3BlbjogYm9vbGVhbiAvLyB3aGV0aGVyIHRoZSBMYXllclN0eWxlTW9kYWwgaXMgb3BlblxuICAgIG1vcmVJbmZvTW9kYWxPcGVuOiBib29sZWFuIC8vIHdoZXRoZXIgdGhlIE1vcmVJbmZvTW9kYWwgaXMgb3BlblxuICAgIHNlbGVjdGVkSXRlbTogTGlzdEl0ZW0gLy8gY3VycmVudGx5IHNlbGVjdGVkIExheWVyIGZvciBMYXllclN0eWxlTW9kYWwgcHVycG9zZXNcbiAgICBhbGxMYXllcnNIaWRkZW46IGJvb2xlYW4gLy8gd2hldGhlciBhbGwgTGF5ZXJzIGFyZSBoaWRkZW5cbiAgICBhbGxMZWdlbmRzT3BlbjogYm9vbGVhbiAvLyB3aGV0aGVyIGFsbCBsZWdlbmRzIGFyZSBvcGVuXG4gICAgYWxsTGVnZW5kc0Nsb3NlZDogYm9vbGVhbiAvLyB3aGV0aGVyIGFsbCBsZWdlbmRzIGFyZSBjbG9zZWRcbn1cblxuLyoqXG4gKiBMYXllckxpc3RDb21wb25lbnQgaXMgYSBjdXN0b21pemVkIEFyY0dJUyBMYXllckxpc3Qgd2lkZ2V0IHRoYXQgYWxsb3dzIHVzZXJzIHRvIHJlb3JkZXIsIHJlbW92ZSwgYW5kIHJlY29sb3JcbiAqIE1hcCBsYXllcnMuXG4gKi9cbmNsYXNzIExheWVyTGlzdENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxMYXllckxpc3RQcm9wcywgTGF5ZXJMaXN0U3RhdGU+IHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgbXlSZWYgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGptdjogbnVsbCxcbiAgICAgICAgICAgIHdpZGdldDogbnVsbCxcbiAgICAgICAgICAgIGxheWVyU3R5bGVNb2RhbE9wZW46IGZhbHNlLFxuICAgICAgICAgICAgbW9yZUluZm9Nb2RhbE9wZW46IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgICAgICAgICAgYWxsTGF5ZXJzSGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFsbExlZ2VuZHNPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFsbExlZ2VuZHNDbG9zZWQ6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlcyBMYXllckxpc3Qgc2VsZWN0aW9uIGJlaGF2aW9yIHdpdGggYSBjdXN0b20gYmVoYXZpb3Igd2hlbiBMYXllckl0ZW0gaXMgY2xpY2tlZFxuICAgICAqIEBwYXJhbSBpdGVtIHRoZSBjbGlja2VkIExheWVySXRlbVxuICAgICAqL1xuICAgIG9uSXRlbUNsaWNrID0gKGl0ZW06IExpc3RJdGVtKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZWQgdG9nZ2xlIHZpc2liaWxpdHkgZnVuY3Rpb25hbGl0eSBpbiBVWCBDaGFuZ2VzIFJvdW5kIDIgdG8gbWFrZSBkcmFnIGFuZCBkcm9wXG4gICAgICAgIC8vIGFmZm9yZGFiaWxpdHkgbW9yZSBjbGVhclxuICAgICAgICAvLyBpdGVtLmxheWVyLnZpc2libGUgPSAhaXRlbS5sYXllci52aXNpYmxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW5zIGFsbCBsZWdlbmRzIGluIHRoZSBMYXllckxpc3RcbiAgICAgKi9cbiAgICBzaG93TGVnZW5kID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBsaSBvZiB0aGlzLnN0YXRlLndpZGdldC5vcGVyYXRpb25hbEl0ZW1zKSB7XG4gICAgICAgICAgICBsaS5wYW5lbC5vcGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyBhbGwgbGVnZW5kcyBpbiB0aGUgTGF5ZXJMaXN0XG4gICAgICovXG4gICAgaGlkZUxlZ2VuZCA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgbGkgb2YgdGhpcy5zdGF0ZS53aWRnZXQub3BlcmF0aW9uYWxJdGVtcykge1xuICAgICAgICAgICAgbGkucGFuZWwub3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYWxsIG9wZXJhdGlvbmFsIExheWVyc1xuICAgICAqL1xuICAgIHNob3dMYXllcnMgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGxpIG9mIHRoaXMuc3RhdGUud2lkZ2V0Lm9wZXJhdGlvbmFsSXRlbXMpIHtcbiAgICAgICAgICAgIGxpLmxheWVyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZXMgYWxsIG9wZXJhdGlvbmFsIExheWVyc1xuICAgICAqL1xuICAgIGhpZGVMYXllcnMgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGxpIG9mIHRoaXMuc3RhdGUud2lkZ2V0Lm9wZXJhdGlvbmFsSXRlbXMpIHtcbiAgICAgICAgICAgIGxpLmxheWVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZXMgdGhlIGNvbG9yIGFuZCBzaXplIG9mIHRoaXMuY3VycmVudC5sYXllciBiYXNlZCBvbiBsYXllciBzdHlsZSBNb2RhbFxuICAgICAqL1xuICAgIGNoYW5nZVN0eWxlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2godGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxheWVyU3R5bGVNb2RhbE9wZW46IGZhbHNlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBoZWFkZXIgZm9yIExlZ2VuZFxuICAgICAqIEByZXR1cm4gYW4gSFRNTEVsZW1lbnQgd2l0aCB0aGUgdGV4dCBcIkxlZ2VuZDogXCJcbiAgICAgKi9cbiAgICBjcmVhdGVMZWdlbmREaXYgPSAoKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImxlZ2VuZF9faGVhZGVyXCJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIkxlZ2VuZDogXCJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBhY3RpdmUgVGVtcGxhdGVzIGZvciB0aGUgZ2l2ZW4gTGF5ZXJcbiAgICAgKiBAcGFyYW0gbGF5ZXIgdGhlIExheWVyIHRvIGNoZWNrXG4gICAgICogQHJldHVybiBhbiBIVE1MRWxlbWVudCB3aXRoIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgYWN0aXZlIFRlbXBsYXRlIG5hbWVzXG4gICAgICovXG4gICAgY3JlYXRlVGVtcGxhdGVzRGl2ID0gKGxheWVyOiBMYXllcikgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJsZWdlbmRfX3RlbXBsYXRlc1wiXG4gICAgICAgIGxldCBhY3RpdmVUZW1wbGF0ZXMgPSB0aGlzLnByb3BzLmdldExheWVyVGVtcGxhdGVzKGxheWVyLCB0cnVlKTtcblxuICAgICAgICBpZiAoYWN0aXZlVGVtcGxhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIkV2ZW50czogTm9uZVwiO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWN0aXZlVGVtcGxhdGVMaXN0ID0gXCJFdmVudHM6IFwiO1xuICAgICAgICBmb3IgKGxldCB0ZW1wbGF0ZSBvZiBhY3RpdmVUZW1wbGF0ZXMpIHtcbiAgICAgICAgICAgIGFjdGl2ZVRlbXBsYXRlTGlzdCArPSBcIiBcIiArIHRlbXBsYXRlLnRpdGxlICsgXCIsXCJcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGFjdGl2ZVRlbXBsYXRlTGlzdC5zbGljZSgwLCAtMSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIENhdGVnb3J5IG9mIHRoZSBnaXZlbiBMYXllclxuICAgICAqIEBwYXJhbSBsYXllciB0aGUgTGF5ZXIgdG8gY2hlY2tcbiAgICAgKiBAcmV0dXJuIGFuIEhUTUxFbGVtZW50IHdpdGggdGhlIG5hbWUgb2YgdGhlIENhdGVnb3J5XG4gICAgICovXG4gICAgY3JlYXRlQ2F0ZWdvcnlEaXYgPSAobGF5ZXI6IExheWVyKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImxlZ2VuZF9fY2F0ZWdvcnlcIjtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZ2V0TGF5ZXJDYXRlZ29yeShsYXllcikgIT0gbnVsbCkge1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIkNhdGVnb3J5OiBcIiArIHRoaXMucHJvcHMuZ2V0TGF5ZXJDYXRlZ29yeShsYXllcikudGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVmcmVzaGVzIExpc3RJdGVtUGFuZWwgY29udGVudFxuICAgICAqIEBwYXJhbSBpdGVtIHRoZSBMaXN0SXRlbSB0byByZWZyZXNoXG4gICAgICovXG4gICAgcmVmcmVzaCA9IChpdGVtOiBMaXN0SXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5wYXJlbnQpIHtcbiAgICAgICAgICAgIGl0ZW0ucGFuZWwuY29udGVudCA9IFtcbiAgICAgICAgICAgICAgICBcImxlZ2VuZFwiXG4gICAgICAgICAgICBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtLnBhbmVsLmNvbnRlbnQgPSBbXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVMZWdlbmREaXYoKSxcbiAgICAgICAgICAgICAgICBcImxlZ2VuZFwiLFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVGVtcGxhdGVzRGl2KGl0ZW0ubGF5ZXIpLFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQ2F0ZWdvcnlEaXYoaXRlbS5sYXllcilcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgSmltdU1hcFZpZXcgYW5kIGNyZWF0ZXMgTGF5ZXJMaXN0IG9uIGFjdGl2ZSB2aWV3IGNoYW5nZVxuICAgICAqIEBwYXJhbSBqbXYgdGhlIG5ldyBKaW11TWFwVmlld1xuICAgICAqL1xuICAgIGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuam12ICYmIHRoaXMuc3RhdGUud2lkZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpZGdldC5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoam12KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBqbXY6IGptdlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBMYXllckxpc3RcbiAgICAgICAgICAgIGlmICh0aGlzLm15UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXllckxpc3Q6IExheWVyTGlzdCA9IG5ldyBMYXllckxpc3Qoe1xuICAgICAgICAgICAgICAgICAgICB2aWV3OiBqbXYudmlldyxcblxuICAgICAgICAgICAgICAgICAgICAvLyBDYWxsZWQgZm9yIGVhY2ggTGlzdEl0ZW0gaW4gTGF5ZXJMaXN0XG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtQ3JlYXRlZEZ1bmN0aW9uOiBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gZXZlbnQuaXRlbTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGxlZ2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wYW5lbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZXNyaS1pY29uLWRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goaXRlbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBMaXN0SXRlbSBhY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBpdGVtLmxheWVyLndoZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWN0aW9uc1NlY3Rpb25zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlbW92ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZXNyaS1pY29uLW1pbnVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInJlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiWm9vbSB0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZXNyaS1pY29uLXpvb20taW4tbWFnbmlmeWluZy1nbGFzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ6b29tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFZGl0IGxlZ2VuZCBzdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9sYXllcnMtZWRpdGFibGUtMjQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImNoYW5nZS1zdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFZGl0IGxheWVyIHN0eWxlIG9ubHkgc3VwcG9ydHMgU2ltcGxlUmVuZGVyZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYXllci50eXBlID09PSBcImZlYXR1cmVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYXllci5yZW5kZXJlci50eXBlID09PSBcInNpbXBsZVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXRlbS5sYXllci5yZW5kZXJlci5zeW1ib2wuY29sb3IgIT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGF5ZXIucmVuZGVyZXIuc3ltYm9sLnR5cGUgPT09IFwicGljdHVyZS1tYXJrZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2VuZCBiYWNrd2FyZHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL3NlbmQtYmFja3dhcmRzLTI0LnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwic2VuZC1iYWNrd2FyZHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJCcmluZyBmb3J3YXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9icmluZy1mb3J3YXJkLTI0LnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYnJpbmctZm9yd2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNlbmQgdG8gYmFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvc2VuZC10by1iYWNrLTI0LnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwic2VuZC10by1iYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQnJpbmcgdG8gZnJvbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL2JyaW5nLXRvLWZyb250LTI0LnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYnJpbmctdG8tZnJvbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZXNyaS1pY29uLWRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hZGRIYW5kbGVzKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPdmVycmlkZSBzZWxlY3Rpb24gYmVoYXZpb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdGl2ZVV0aWxzLndhdGNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiBsYXllckxpc3Quc2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhpdGVtKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5vbkl0ZW1DbGljayhpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xvc2UgYWN0aW9ucyBzZWN0aW9uIHdoZW4gbGVnZW5kIHBhbmVsIG9wZW5zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RpdmVVdGlscy53aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiBpdGVtLnBhbmVsLm9wZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IGl0ZW0uYWN0aW9uc09wZW4gPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xvc2UgbGVnZW5kIHBhYW5lbCB3aGVuIGFjdGlvbnMgc2VjdGlvbiBvcGVuc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0aXZlVXRpbHMud2hlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gaXRlbS5hY3Rpb25zT3BlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gaXRlbS5wYW5lbC5vcGVuID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLm15UmVmLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxlU2VsZWN0aW9uRW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIExpc3RJdGVtIGFjdGlvbiBmdW5jdGlvbmFsaXR5XG4gICAgICAgICAgICAgICAgbGF5ZXJMaXN0Lm9uKFwidHJpZ2dlci1hY3Rpb25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZXZlbnQuYWN0aW9uLmlkO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXllciA9IGV2ZW50Lml0ZW0ubGF5ZXI7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuc3RhdGUuam12LnZpZXcubWFwLmxheWVycy5maW5kSW5kZXgoKGwpID0+IGwgPT09IGxheWVyKTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiem9vbVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdvIHRvIGZ1bGwgZXh0ZW50IG9mIGxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LnZpZXcuZ29UbyhsYXllci5mdWxsRXh0ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZW1vdmVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgbGF5ZXIgZnJvbSBtYXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVtb3ZlTGF5ZXIobGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoYW5nZS1zdHlsZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wZW4gTGF5ZXIgU3R5bGUgTW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdHlsZU1vZGFsT3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiBldmVudC5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2VuZC1iYWNrd2FyZHNcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZW5kIGxheWVyIGJhY2sgMSBsZXZlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qbXYudmlldy5tYXAucmVvcmRlcihsYXllciwgaW5kZXggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYnJpbmctZm9yd2FyZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJyaW5nIGxheWVyIGZvcndhcmQgMSBsZXZlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xICYmIGluZGV4IDwgdGhpcy5zdGF0ZS5qbXYudmlldy5tYXAubGF5ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmptdi52aWV3Lm1hcC5yZW9yZGVyKGxheWVyLCBpbmRleCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW5kLXRvLWJhY2tcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIGxheWVyIHRvIGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmptdi52aWV3Lm1hcC5yZW9yZGVyKGxheWVyLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYnJpbmctdG8tZnJvbnRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIGxheWVyIHRvIGZyb250XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qbXYudmlldy5tYXAucmVvcmRlcihsYXllciwgdGhpcy5zdGF0ZS5qbXYudmlldy5tYXAubGF5ZXJzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZXNjcmlwdGlvblwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JlSW5mb01vZGFsT3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiBldmVudC5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gV2F0Y2ggTGF5ZXJMaXN0IHByb3BlcnRpZXMgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYnV0dG9ucyBzaG91bGQgYmUgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICBsYXllckxpc3QuYWRkSGFuZGxlcyhbXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0aXZlVXRpbHMud2F0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiBsYXllckxpc3Qub3BlcmF0aW9uYWxJdGVtcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgJiYgIWN1cnIubGF5ZXIudmlzaWJsZSwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxMYXllcnNIaWRkZW46IGxheWVyTGlzdC5vcGVyYXRpb25hbEl0ZW1zLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiAmJiAhY3Vyci5sYXllci52aXNpYmxlLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RpdmVVdGlscy53YXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IGxheWVyTGlzdC5vcGVyYXRpb25hbEl0ZW1zLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiAmJiBjdXJyLnBhbmVsLm9wZW4sIHRydWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsTGVnZW5kc09wZW46IGxheWVyTGlzdC5vcGVyYXRpb25hbEl0ZW1zLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiAmJiBjdXJyLnBhbmVsLm9wZW4sIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICByZWFjdGl2ZVV0aWxzLndhdGNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gbGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICYmICFjdXJyLnBhbmVsLm9wZW4sIHRydWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsTGVnZW5kc0Nsb3NlZDogbGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICYmICFjdXJyLnBhbmVsLm9wZW4sIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB3aWRnZXQ6IGxheWVyTGlzdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS53aWRnZXQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5zdGF0ZS53aWRnZXQudmlld01vZGVsLm9wZXJhdGlvbmFsSXRlbXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImxheWVyLWxpc3QtY29tcG9uZW50XCI+XG4gICAgICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkfVxuICAgICAgICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aDM+e1wiQ3VycmVudCBMYXllcnMgKFwiICsgdGhpcy5wcm9wcy5udW1BY3RpdmVMYXllcnMgKyBcIilcIn08L2gzPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5udW1BY3RpdmVMYXllcnMgPD0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibm8tbGF5ZXJzLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZW0+WW91IGRvIG5vdCBoYXZlIGFueSBsYXllcnMgYWRkZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCBzdGFydGVkIGJ5IGFkZGluZyBhIHNjZW5hcmlvIG9yIGxheWVyIGZyb20gdGhlIGxlZnQgc2lkZSBvZiB0aGUgcGFuZWwuPC9lbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5udW1BY3RpdmVMYXllcnMgPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXllckxpc3RCdXR0b25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGVhckFsbD17dGhpcy5wcm9wcy5vbkNsZWFyQWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZUxlZ2VuZD17dGhpcy5oaWRlTGVnZW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2hvd0xlZ2VuZD17dGhpcy5zaG93TGVnZW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2hvd0xheWVycz17dGhpcy5zaG93TGF5ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZUxheWVycz17dGhpcy5oaWRlTGF5ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbExheWVyc0hpZGRlbj17dGhpcy5zdGF0ZS5hbGxMYXllcnNIaWRkZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsTGVnZW5kc09wZW49e3RoaXMuc3RhdGUuYWxsTGVnZW5kc09wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsTGVnZW5kc0Nsb3NlZD17dGhpcy5zdGF0ZS5hbGxMZWdlbmRzQ2xvc2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibGF5ZXItbGlzdF9fY29udGVudFwiIHJlZj17dGhpcy5teVJlZn0vPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0ubGF5ZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0ubGF5ZXIudHlwZSA9PT0gXCJmZWF0dXJlXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmxheWVyIGFzIEZlYXR1cmVMYXllcikucmVuZGVyZXIudHlwZSA9PT0gXCJzaW1wbGVcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5ZXJTdHlsZU1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TYXZlPXt0aGlzLmNoYW5nZVN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyPXt0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5sYXllciBhcyBGZWF0dXJlTGF5ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5sYXllclN0eWxlTW9kYWxPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZU9wZW49eygpID0+IHRoaXMuc2V0U3RhdGUoe2xheWVyU3R5bGVNb2RhbE9wZW46ICF0aGlzLnN0YXRlLmxheWVyU3R5bGVNb2RhbE9wZW59KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5sYXllciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9yZUluZm9Nb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyPXt0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5sYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm1vcmVJbmZvTW9kYWxPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZU9wZW49eygpID0+IHRoaXMuc2V0U3RhdGUoe21vcmVJbmZvTW9kYWxPcGVuOiAhdGhpcy5zdGF0ZS5tb3JlSW5mb01vZGFsT3Blbn0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldExheWVySW5mbz17dGhpcy5wcm9wcy5nZXRMYXllckluZm99XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyTGlzdENvbXBvbmVudDtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0J1dHRvbiwgTW9kYWwsIE1vZGFsQm9keSwgTW9kYWxIZWFkZXIsIE1vZGFsRm9vdGVyLCBTbGlkZXJ9IGZyb20gJ2ppbXUtdWknO1xuaW1wb3J0IHtDb2xvclBpY2tlcn0gZnJvbSBcImppbXUtdWkvYmFzaWMvY29sb3ItcGlja2VyXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcImVzcmkvQ29sb3JcIjtcbmltcG9ydCBTaW1wbGVSZW5kZXJlciBmcm9tIFwiZXNyaS9yZW5kZXJlcnMvU2ltcGxlUmVuZGVyZXJcIjtcbmltcG9ydCBTaW1wbGVNYXJrZXJTeW1ib2wgZnJvbSBcImVzcmkvc3ltYm9scy9TaW1wbGVNYXJrZXJTeW1ib2xcIjtcbmltcG9ydCBQaWN0dXJlTWFya2VyU3ltYm9sIGZyb20gXCJlc3JpL3N5bWJvbHMvUGljdHVyZU1hcmtlclN5bWJvbFwiO1xuaW1wb3J0IFNpbXBsZUxpbmVTeW1ib2wgZnJvbSBcImVzcmkvc3ltYm9scy9QaWN0dXJlTWFya2VyU3ltYm9sXCI7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIjtcblxuaW50ZXJmYWNlIExheWVyU3R5bGVNb2RhbFByb3BzIHtcbiAgICBvblNhdmU6ICgpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIHNhdmluZyBMYXllciBzdHlsZVxuICAgIGxheWVyOiBGZWF0dXJlTGF5ZXIgLy8gdGhlIExheWVyIHRvIGVkaXRcbiAgICBvcGVuOiBib29sZWFuIC8vIHdoZXRoZXIgdGhpcyBNb2RhbCBpcyBvcGVuXG4gICAgdG9nZ2xlT3BlbjogKCkgPT4gYW55IC8vIHRvZ2dsZXMgdGhlIE1vZGFsIGJldHdlZW4gb3BlbiBhbmQgY2xvc2VkXG5cbn1cblxuaW50ZXJmYWNlIExheWVyU3R5bGVNb2RhbFN0YXRlIHtcbiAgICBzaG93Q29sb3JQaWNrZXI6IGJvb2xlYW4gLy8gd2hldGhlciB0byBzaG93IHRoZSBDb2xvclBpY2tlclxuICAgIHNob3dTaXplU2xpZGVyOiBib29sZWFuIC8vIHdoZXRoZXIgdG8gc2hvdyB0aGUgc2l6ZSBTbGlkZXJcbiAgICBjb2xvcjogc3RyaW5nIC8vIGN1cnJlbnRseSBzZWxlY3RlZCBDb2xvclxuICAgIHNpemU6IG51bWJlciAvLyBjdXJyZW50bHkgc2VsZWN0ZWQgc2l6ZVxuICAgIG9yaWdpbmFsUmVuZGVyZXI6IFNpbXBsZVJlbmRlcmVyXG59XG5cbi8qKlxuICogTGF5ZXJTdHlsZU1vZGFsIGdpdmVzIHVzZXJzIHRoZSBhYmlsaXR5IHRvIGVkaXQgdGhlIGFwcGVhcmFuY2Ugb2YgcmVuZGVyZWQgTGF5ZXJzLlxuICogVGhlIGVkaXQgbGF5ZXIgc3R5bGUgZnVuY3Rpb25hbGl0eSBvbmx5IHN1cHBvcnRzIFNpbXBsZVJlbmRlcmVycy5cbiAqL1xuY2xhc3MgTGF5ZXJTdHlsZU1vZGFsIGV4dGVuZHMgQ29tcG9uZW50PExheWVyU3R5bGVNb2RhbFByb3BzLCBMYXllclN0eWxlTW9kYWxTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzaG93Q29sb3JQaWNrZXI6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1NpemVTbGlkZXI6IGZhbHNlLFxuICAgICAgICAgICAgY29sb3I6IG51bGwsXG4gICAgICAgICAgICBzaXplOiBudWxsLFxuICAgICAgICAgICAgb3JpZ2luYWxSZW5kZXJlcjogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBiZWhhdmlvciB1cG9uIG9wZW5pbmcgTW9kYWxcbiAgICAgKi9cbiAgICBvbk9wZW5lZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcmlnaW5hbFJlbmRlcmVyOiBTaW1wbGVSZW5kZXJlci5mcm9tSlNPTih0aGlzLnByb3BzLmxheWVyLnJlbmRlcmVyLnRvSlNPTigpKVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc3ltYm9sID0gKHRoaXMucHJvcHMubGF5ZXIucmVuZGVyZXIgYXMgU2ltcGxlUmVuZGVyZXIpLnN5bWJvbDtcbiAgICAgICAgc3dpdGNoIChzeW1ib2wudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcInNpbXBsZS1tYXJrZXJcIjpcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sLnN0eWxlID09PSBcImNyb3NzXCIgfHwgc3ltYm9sLnN0eWxlID09PSBcInhcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb2xvclBpY2tlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTaXplU2xpZGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHN5bWJvbC5vdXRsaW5lLmNvbG9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBzeW1ib2wuc2l6ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb2xvclBpY2tlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTaXplU2xpZGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHN5bWJvbC5jb2xvci50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogc3ltYm9sLnNpemVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBpY3R1cmUtbWFya2VyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNob3dDb2xvclBpY2tlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNob3dTaXplU2xpZGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IChzeW1ib2wgYXMgUGljdHVyZU1hcmtlclN5bWJvbCkud2lkdGhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzaW1wbGUtZmlsbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93Q29sb3JQaWNrZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNob3dTaXplU2xpZGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHN5bWJvbC5jb2xvci50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiBudWxsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2ltcGxlLWxpbmVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvbG9yUGlja2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzaG93U2l6ZVNsaWRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHN5bWJvbC5jb2xvci50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiAoc3ltYm9sIGFzIFNpbXBsZUxpbmVTeW1ib2wpLndpZHRoXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93Q29sb3JQaWNrZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNob3dTaXplU2xpZGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHN5bWJvbC5jb2xvci50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiBudWxsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGJlaGF2aW9yIHdoZW4gY29sb3IgcGlja2VyIHdhcm5pbmcgZm9yIHBpY3R1cmUgbWFya2VyIGlzIGNsaWNrZWRcbiAgICAgKi9cbiAgICBoYW5kbGVDb2xvcldhcm5pbmdDbGljayA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93Q29sb3JQaWNrZXI6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgICh0aGlzLnByb3BzLmxheWVyLnJlbmRlcmVyIGFzIFNpbXBsZVJlbmRlcmVyKS5zeW1ib2wgPSBuZXcgU2ltcGxlTWFya2VyU3ltYm9sKHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLnN0YXRlLmNvbG9yLFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5zdGF0ZS5zaXplXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgTGF5ZXIgc3R5bGUgdXBvbiBjb2xvciBjaGFuZ2VcbiAgICAgKiBAcGFyYW0gY29sb3IgdGhlIG5ldyBjb2xvclxuICAgICAqL1xuICAgIGhhbmRsZUNoYW5nZUNvbG9yID0gKGNvbG9yOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29sb3I6IGNvbG9yfSk7XG4gICAgICAgIGxldCBsYXllciA9IHRoaXMucHJvcHMubGF5ZXIgYXMgRmVhdHVyZUxheWVyO1xuICAgICAgICBsZXQgcmVuZGVyZXIgPSBsYXllci5yZW5kZXJlciBhcyBTaW1wbGVSZW5kZXJlcjtcblxuICAgICAgICAvLyBDaGFuZ2Ugc2l6ZSBhbmQgY29sb3JcbiAgICAgICAgc3dpdGNoIChyZW5kZXJlci5zeW1ib2wudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcInNpbXBsZS1tYXJrZXJcIjpcbiAgICAgICAgICAgICAgICBpZiAocmVuZGVyZXIuc3ltYm9sLnN0eWxlID09PSBcImNyb3NzXCIgfHwgcmVuZGVyZXIuc3ltYm9sLnN0eWxlID09PSBcInhcIikge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5zeW1ib2wub3V0bGluZS5jb2xvciA9IG5ldyBDb2xvcihjb2xvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIuc3ltYm9sLmNvbG9yID0gbmV3IENvbG9yKGNvbG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2ltcGxlLWZpbGxcIjpcbiAgICAgICAgICAgICAgICByZW5kZXJlci5zeW1ib2wuY29sb3IgPSBuZXcgQ29sb3IoY29sb3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNpbXBsZS1saW5lXCI6XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIuc3ltYm9sLmNvbG9yID0gbmV3IENvbG9yKGNvbG9yKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIuc3ltYm9sLmNvbG9yID0gbmV3IENvbG9yKGNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgbGF5ZXIgc3R5bGUgdXBvbiBzaXplIGNoYW5nZVxuICAgICAqIEBwYXJhbSBzaXplIHRoZSBuZXcgc2l6ZVxuICAgICAqL1xuICAgIGhhbmRsZUNoYW5nZVNpemUgPSAoc2l6ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGxldCBsYXllciA9IHRoaXMucHJvcHMubGF5ZXIgYXMgRmVhdHVyZUxheWVyO1xuICAgICAgICBsZXQgcmVuZGVyZXIgPSBsYXllci5yZW5kZXJlciBhcyBTaW1wbGVSZW5kZXJlcjtcblxuICAgICAgICAvLyBDaGFuZ2Ugc2l6ZSBhbmQgY29sb3JcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2l6ZTogc2l6ZX0pO1xuICAgICAgICBzd2l0Y2ggKHJlbmRlcmVyLnN5bWJvbC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2ltcGxlLW1hcmtlclwiOlxuICAgICAgICAgICAgICAgIChyZW5kZXJlci5zeW1ib2wgYXMgU2ltcGxlTWFya2VyU3ltYm9sKS5zaXplID0gc2l6ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwaWN0dXJlLW1hcmtlclwiOlxuICAgICAgICAgICAgICAgIGxldCBwbVN5bWJvbCA9IHJlbmRlcmVyLnN5bWJvbCBhcyBQaWN0dXJlTWFya2VyU3ltYm9sXG4gICAgICAgICAgICAgICAgbGV0IHJhdGlvOiBudW1iZXIgPSBwbVN5bWJvbC5oZWlnaHQgLyBwbVN5bWJvbC53aWR0aDtcbiAgICAgICAgICAgICAgICBwbVN5bWJvbC53aWR0aCA9IHNpemU7XG4gICAgICAgICAgICAgICAgcG1TeW1ib2wuaGVpZ2h0ID0gc2l6ZSAqIHJhdGlvO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNpbXBsZS1saW5lXCI6XG4gICAgICAgICAgICAgICAgKHJlbmRlcmVyLnN5bWJvbCBhcyBTaW1wbGVMaW5lU3ltYm9sKS53aWR0aCA9IHNpemU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMubGF5ZXIucmVuZGVyZXIgPSB0aGlzLnN0YXRlLm9yaWdpbmFsUmVuZGVyZXI7XG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlT3BlbigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIGlzT3Blbj17dGhpcy5wcm9wcy5vcGVufVxuICAgICAgICAgICAgICAgIG9uQ2xvc2VkPXtmdW5jdGlvbiBub1JlZkNoZWNrKCl7fX1cbiAgICAgICAgICAgICAgICBvbkVudGVyPXtmdW5jdGlvbiBub1JlZkNoZWNrKCl7fX1cbiAgICAgICAgICAgICAgICBvbkV4aXQ9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKXt9fVxuICAgICAgICAgICAgICAgIG9uT3BlbmVkPXt0aGlzLm9uT3BlbmVkfVxuICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGVPcGVufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNb2RhbEhlYWRlciB0b2dnbGU9e3RoaXMucHJvcHMudG9nZ2xlT3Blbn0+XG4gICAgICAgICAgICAgICAgICAgIEVkaXQge3RoaXMucHJvcHMubGF5ZXIudGl0bGV9IExlZ2VuZCBTdHlsZVxuICAgICAgICAgICAgICAgIDwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93U2l6ZVNsaWRlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXllci1zaXplLXNsaWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgTWFya2VyIFNpemU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJMYXllciBTaXplIFNsaWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlQ2hhbmdlU2l6ZSgrZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtNYXRoLm1heCg1MCwgdGhpcy5zdGF0ZS5zaXplKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNpemV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57dGhpcy5zdGF0ZS5zaXplfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93Q29sb3JQaWNrZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItY29sb3ItcGlja2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBNYXJrZXIgQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkxheWVyIENvbG9yIFBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9IHt0aGlzLnN0YXRlLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoY29sb3IpID0+IHRoaXMuaGFuZGxlQ2hhbmdlQ29sb3IoY29sb3IpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICgodGhpcy5wcm9wcy5sYXllciBhcyBGZWF0dXJlTGF5ZXIpLnJlbmRlcmVyIGFzIFNpbXBsZVJlbmRlcmVyKS5zeW1ib2wudHlwZSA9PT0gXCJwaWN0dXJlLW1hcmtlclwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5zaG93Q29sb3JQaWNrZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwaWN0dXJlLW1hcmtlci13YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDb2xvcldhcm5pbmdDbGlja30+Q2hhbmdlIENvbG9yPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZW0+Q2hhbmdpbmcgdGhlIGNvbG9yIG9mIHRoaXMgbGF5ZXIgcmVxdWlyZXMgY29udmVydGluZyB0aGUgbWFya2VyIGZyb20gYSBwaWN0dXJlIHRvIGEgc2ltcGxlIGNpcmN1bGFyIG1hcmtlci48L2VtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDYW5jZWx9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vblNhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNhdmUtdGVtcGxhdGUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRG9uZVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyU3R5bGVNb2RhbDtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0J1dHRvbiwgTW9kYWwsIE1vZGFsQm9keSwgTW9kYWxIZWFkZXIsIE1vZGFsRm9vdGVyLCBTbGlkZXJ9IGZyb20gJ2ppbXUtdWknO1xuaW1wb3J0IExheWVyIGZyb20gXCJlc3JpL2xheWVycy9MYXllclwiO1xuXG5pbnRlcmZhY2UgTW9yZUluZm9Nb2RhbFByb3BzIHtcbiAgICBsYXllcjogTGF5ZXIgLy8gdGhlIExheWVyIHRvIHNob3cgaW5mb3JtYXRpb24gYWJvdXRcbiAgICBvcGVuOiBib29sZWFuIC8vIHdoZXRoZXIgdGhpcyBNb2RhbCBpcyBvcGVuXG4gICAgdG9nZ2xlT3BlbjogKCkgPT4gYW55IC8vIHRvZ2dsZXMgdGhlIE1vZGFsIGJldHdlZW4gb3BlbiBhbmQgY2xvc2VkXG4gICAgZ2V0TGF5ZXJJbmZvOiAobGF5ZXI6IExheWVyKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZ2V0IExheWVyIGluZm9cbn1cblxuaW50ZXJmYWNlIE1vcmVJbmZvTW9kYWxTdGF0ZSB7XG4gICAgc291cmNlOiBzdHJpbmcgLy8gdGhlIExheWVyIHNvdXJjZVxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcgLy8gdGhlIExheWVyIGRlc2NyaXB0aW9uXG4gICAgdXJsOiBzdHJpbmcgLy8gdGhlIExheWVyIFVSTFxufVxuXG4vKipcbiAqIE1vcmVJbmZvTW9kYWwgZGlzcGxheXMgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBhIExheWVyIHRvIHVzZXJzXG4gKi9cbmNsYXNzIE1vcmVJbmZvTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQ8TW9yZUluZm9Nb2RhbFByb3BzLCBNb3JlSW5mb01vZGFsU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc291cmNlOiBcIi4uLlwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiLi4uXCIsXG4gICAgICAgICAgICB1cmw6IFwiXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgYmVoYXZpb3IgdXBvbiBvcGVuaW5nIE1vZGFsXG4gICAgICovXG4gICAgb25PcGVuZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc291cmNlOiBcIi4uLlwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiLi4uXCIsXG4gICAgICAgICAgICB1cmw6IFwiXCJcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBpbmZvID0gYXdhaXQgdGhpcy5wcm9wcy5nZXRMYXllckluZm8odGhpcy5wcm9wcy5sYXllcik7XG4gICAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKGluZm8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnByb3BzLm9wZW59XG4gICAgICAgICAgICAgICAgb25DbG9zZWQ9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKXt9fVxuICAgICAgICAgICAgICAgIG9uRW50ZXI9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKXt9fVxuICAgICAgICAgICAgICAgIG9uRXhpdD17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgb25PcGVuZWQ9e3RoaXMub25PcGVuZWR9XG4gICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnByb3BzLnRvZ2dsZU9wZW59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGVPcGVufT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubGF5ZXIudGl0bGV9IERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheWVyLXNvdXJjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU291cmNlOiB7dGhpcy5zdGF0ZS5zb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheWVyLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjoge3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy50b2dnbGVPcGVufVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51cmwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4odGhpcy5zdGF0ZS51cmwsIFwiX2JsYW5rXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWUgTW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3JlSW5mb01vZGFsO1xuIiwiaW1wb3J0IHtCdXR0b24sIFRleHRJbnB1dCwgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyLCBJY29ufSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbnRlcmZhY2UgU2F2ZVRlbXBsYXRlUHJvcHMge1xuICAgIGhhbmRsZUNsaWNrOiAodGl0bGU6IHN0cmluZykgPT4gYW55IC8vIGZ1bmN0aW9uIHRvIGNhbGwgb24gY2xpY2tcbiAgICBzaG93OiBib29sZWFuIC8vIHdoZXRoZXIgdG8gc2hvdyB0aGUgYnV0dG9uXG59XG5cbmludGVyZmFjZSBTYXZlVGVtcGxhdGVTdGF0ZSB7XG4gICAgdGl0bGU6IHN0cmluZyAvLyB0aXRsZSBvZiB0aGUgbmV3IFRlbXBsYXRlXG4gICAgb3BlbjogYm9vbGVhbiAvLyB3aGV0aGVyIHRoZSBNb2RhbCBpcyBvcGVuXG59XG5cbi8qKlxuICogU2F2ZVRlbXBsYXRlQ29tcG9uZW50IHJlbmRlcnMgdGhlIGJ1dHRvbnMgdGhhdCBhbGxvdyB1c2VycyB0byBzYXZlIHRoZSBhY3RpdmUgTGF5ZXJzIGFzIGEgbmV3IFRlbXBsYXRlXG4gKi9cbmNsYXNzIFNhdmVUZW1wbGF0ZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxTYXZlVGVtcGxhdGVQcm9wcywgU2F2ZVRlbXBsYXRlU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyBTYXZlIFRlbXBsYXRlIE1vZGFsIGJldHdlZW4gb3BlbiBhbmQgY2xvc2VkXG4gICAgICovXG4gICAgdG9nZ2xlT3BlbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiAhdGhpcy5zdGF0ZS5vcGVuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoZWNrVmFsaWRpdHkgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWxpZDogdGV4dC5sZW5ndGggPD0gNTAsXG4gICAgICAgICAgICBtc2c6IFwiTWF4aW11bSB0aXRsZSBsZW5ndGggaXMgNTAgY2hhcmFjdGVycyFcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzYXZlLXRlbXBsYXRlLWNvbXBvbmVudFwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3cgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm9wZW4tc2F2ZS10ZW1wbGF0ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9wbHVzLTMyLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNhdmUgQXMgTmV3IFNjZW5hcmlvXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlZD17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgICAgIG9uRW50ZXI9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKXt9fVxuICAgICAgICAgICAgICAgICAgICBvbkV4aXQ9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKXt9fVxuICAgICAgICAgICAgICAgICAgICBvbk9wZW5lZD17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy50b2dnbGVPcGVufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dGhpcy50b2dnbGVPcGVufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNhdmUgQXMgTmV3IEV2ZW50XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICBFdmVudCBUaXRsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEV2ZW50IFRpdGxlLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXsodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoe3RpdGxlOiB2YWx1ZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVmFsaWRpdHlPbkNoYW5nZT17dGhpcy5jaGVja1ZhbGlkaXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVmFsaWRpdHlPbkFjY2VwdD17dGhpcy5jaGVja1ZhbGlkaXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7dGhpcy5wcm9wcy5oYW5kbGVDbGljayh0aGlzLnN0YXRlLnRpdGxlKTsgdGhpcy50b2dnbGVPcGVuKCk7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNhdmUtdGVtcGxhdGUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTYXZlVGVtcGxhdGVDb21wb25lbnQ7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCJqaW11LXVpXCI7XG5pbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4uL1RlbXBsYXRlXCI7XG5cbmludGVyZmFjZSBUZW1wbGF0ZXNQcm9wcyB7XG4gICAgYWN0aXZlVGVtcGxhdGVzOiBUZW1wbGF0ZVtdIC8vIGxpc3Qgb2YgYWN0aXZlIFRlbXBsYXRlc1xuICAgIHJlbW92ZVRlbXBsYXRlOiAodGVtcGxhdGU6IFRlbXBsYXRlKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiByZW1vdmluZyBhIFRlbXBsYXRlXG59XG5cbi8qKlxuICogQWN0aXZlVGVtcGxhdGVzTWVudSByZW5kZXJzIGEgbGlzdCBvZiBhY3RpdmUgVGVtcGxhdGVzIGFuZCBhbGxvd3MgdXNlcnMgdG8gcmVtb3ZlIFRlbXBsYXRlc1xuICovXG5jbGFzcyBBY3RpdmVUZW1wbGF0ZXNNZW51IGV4dGVuZHMgQ29tcG9uZW50PFRlbXBsYXRlc1Byb3BzLCB7fT4ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhY3RpdmUtdGVtcGxhdGVzLW1lbnVcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aXZlVGVtcGxhdGVzLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibm8tYWN0aXZlLXRlbXBsYXRlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGVtPkFkZGVkIFNjZW5hcmlvcyB3aWxsIGFwcGVhciBoZXJlLjwvZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwaWxsc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjdGl2ZVRlbXBsYXRlcy5tYXAoKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiXCIgKyB0ZW1wbGF0ZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0ZW1wbGF0ZS50aXRsZSArIFwiIChcIiArIHRlbXBsYXRlLmxheWVyV3JhcHBlcnMubGVuZ3RoICsgXCIpXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB0aGlzLnByb3BzLnJlbW92ZVRlbXBsYXRlKHRlbXBsYXRlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZlVGVtcGxhdGVzTWVudTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFkZExheWVySXRlbSBmcm9tIFwiLi4vTGF5ZXJDb21wb25lbnQvQWRkTGF5ZXJJdGVtXCI7XG5pbXBvcnQge0NvbGxhcHNhYmxlUGFuZWwsIEJ1dHRvbiwgSWNvbn0gZnJvbSBcImppbXUtdWlcIlxuaW1wb3J0IFRlbXBsYXRlIGZyb20gJy4uL1RlbXBsYXRlJ1xuaW1wb3J0IExheWVyV3JhcHBlciBmcm9tIFwiLi4vTGF5ZXJXcmFwcGVyXCI7XG5cbmludGVyZmFjZSBBZGRUZW1wbGF0ZUl0ZW1Qcm9wcyB7XG4gICAgdGVtcGxhdGU6IFRlbXBsYXRlIC8vIFRlbXBsYXRlIHRvIGFkZFxuICAgIGFjdGl2ZUxheWVyczogTGF5ZXJXcmFwcGVyW10gLy8gbGlzdCBvZiBhY3RpdmUgTGF5ZXJzXG4gICAgYWN0aXZlVGVtcGxhdGVzOiBUZW1wbGF0ZVtdIC8vIGxpc3Qgb2YgYWN0aXZlIFRlbXBsYXRlc1xuICAgIG9uQWRkTGF5ZXI6IChsYXllcldyYXBwZXI6IExheWVyV3JhcHBlcikgPT4gYW55IC8vIGNhbGxiYWNrIGZ1bmN0aW9uIHVwb24gYWRkaW5nIExheWVyXG4gICAgb25BZGRUZW1wbGF0ZTogKHRlbXBsYXRlOiBUZW1wbGF0ZSkgPT4gYW55IC8vIGNhbGxiYWNrIGZ1bmN0aW9uIHVwb24gYWRkaW5nIFRlbXBsYXRlXG59XG5cbi8qKlxuICogQWRkVGVtcGxhdGVJdGVtIGFsbG93cyB1c2VycyB0byBhZGQgYWxsIExheWVycyBpbiBhIFRlbXBsYXRlIHRvIHRoZSBNYXBcbiAqL1xuY2xhc3MgQWRkVGVtcGxhdGVJdGVtIGV4dGVuZHMgQ29tcG9uZW50PEFkZFRlbXBsYXRlSXRlbVByb3BzLCB7fT4ge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBEaXNhYmxlIHRoZSBhZGQgYnV0dG9uIGlmIHRoZSBUZW1wbGF0ZSB3YXMgYWRkZWQgdG8gdGhlIGxpc3Qgb2YgYWN0aXZlIFRlbXBsYXRlcyBhbmRcbiAgICAgICAgLy8gYWxsIExheWVycyBhcmUgY3VycmVudGx5IGFkZGVkIHRvIHRoZSBNYXBcbiAgICAgICAgbGV0IGFkZGVkOiBib29sZWFuID0gdGhpcy5wcm9wcy5hY3RpdmVUZW1wbGF0ZXMuaW5jbHVkZXModGhpcy5wcm9wcy50ZW1wbGF0ZSk7XG4gICAgICAgIGlmIChhZGRlZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgbGF5ZXJXcmFwcGVyIG9mIHRoaXMucHJvcHMudGVtcGxhdGUubGF5ZXJXcmFwcGVycykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5hY3RpdmVMYXllcnMuaW5jbHVkZXMobGF5ZXJXcmFwcGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbGxhcHNhYmxlUGFuZWxcbiAgICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkFkZFRlbXBsYXRlKHRoaXMucHJvcHMudGVtcGxhdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy50ZW1wbGF0ZS5sYXllcldyYXBwZXJzLmxlbmd0aCA9PT0gMCB8fCBhZGRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2FkZGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9jaGVjay0zMi5zdmdcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvcGx1cy0zMi5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGVtcGxhdGUudGl0bGUgKyBcIiAoXCIgKyB0aGlzLnByb3BzLnRlbXBsYXRlLmxheWVyV3JhcHBlcnMubGVuZ3RoICsgXCIpXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXZlbD17MH1cbiAgICAgICAgICAgICAgICB0eXBlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMudGVtcGxhdGUubGF5ZXJXcmFwcGVycy5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZW1wbGF0ZS1kcm9wZG93bl9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50ZW1wbGF0ZS5sYXllcldyYXBwZXJzLm1hcCgoX3ZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hcCBpbiByZXZlcnNlIG9yZGVyIHRvIG1haW50YWluIGNvbnNpc3RlbmN5IHdpdGggTGF5ZXIgTGlzdCBvcmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxheWVyV3JhcHBlciA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50ZW1wbGF0ZS5sYXllcldyYXBwZXJzW3RoaXMucHJvcHMudGVtcGxhdGUubGF5ZXJXcmFwcGVycy5sZW5ndGggLSBpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkTGF5ZXJJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyV3JhcHBlcj17bGF5ZXJXcmFwcGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFkZExheWVyPXt0aGlzLnByb3BzLm9uQWRkTGF5ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmVMYXllcnMuaW5jbHVkZXMobGF5ZXJXcmFwcGVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbGxhcHNhYmxlUGFuZWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRUZW1wbGF0ZUl0ZW07XG4iLCJpbXBvcnQgXCIuL1RlbXBsYXRlQ29tcG9uZW50LnNjc3NcIjtcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0ljb24sIFRvb2x0aXB9IGZyb20gXCJqaW11LXVpXCI7XG5pbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4uL1RlbXBsYXRlXCI7XG5pbXBvcnQgVGVtcGxhdGVTZWFyY2ggZnJvbSBcIi4vVGVtcGxhdGVTZWFyY2hcIjtcbmltcG9ydCBBY3RpdmVUZW1wbGF0ZXNNZW51IGZyb20gXCIuL0FjdGl2ZVRlbXBsYXRlc01lbnVcIjtcbmltcG9ydCBMYXllcldyYXBwZXIgZnJvbSBcIi4uL0xheWVyV3JhcHBlclwiO1xuXG5pbnRlcmZhY2UgVGVtcGxhdGVzUHJvcHMge1xuICAgIHRlbXBsYXRlczogVGVtcGxhdGVbXSAvLyBsaXN0IG9mIFRlbXBsYXRlcyB0byByZW5kZXJcbiAgICBhY3RpdmVMYXllcnM6IExheWVyV3JhcHBlcltdIC8vIGxpc3Qgb2YgYWN0aXZlIExheWVyc1xuICAgIGFjdGl2ZVRlbXBsYXRlczogVGVtcGxhdGVbXSAvLyBsaXN0IG9mIGFjdGl2ZSBUZW1wbGF0ZXNcbiAgICBvbkFkZFRlbXBsYXRlOiAodGVtcGxhdGU6IFRlbXBsYXRlKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiBhZGRpbmcgVGVtcGxhdGVzXG4gICAgb25SZW1vdmVUZW1wbGF0ZTogKHRlbXBsYXRlOiBUZW1wbGF0ZSkgPT4gYW55IC8vIGNhbGxiYWNrIGZ1bmN0aW9uIHVwb24gcmVtb3ZpbmcgVGVtcGxhdGVzXG4gICAgb25BZGRMYXllcjogKGxheWVyV3JhcHBlcjogTGF5ZXJXcmFwcGVyKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiBhZGRpbmcgTGF5ZXJzXG59XG5pbnRlcmZhY2UgVGVtcGxhdGVzU3RhdGUge1xuICAgIHBhbmVPcGVuOiBib29sZWFuIC8vIHdoZXRoZXIgdGhlIFRlbXBsYXRlIHBhbmUgaXMgb3BlblxuICAgIHNlbGVjdGVkVGVtcGxhdGU6IFRlbXBsYXRlIC8vIGN1cnJlbnRseSBzZWxlY3RlZCBUZW1wbGF0ZSBmcm9tIFRlbXBsYXRlIGRyb3Bkb3duIGZvciBtb3JlIGluZm9cbn1cblxuLyoqXG4gKiBUZW1wbGF0ZUNvbXBvbmVudCBjb250YWlucyBhIFRlbXBsYXRlU2VhcmNoIGRyb3Bkb3duLCBBY3RpdmVUZW1wbGF0ZU1lbnUsIGFuZCBhIGRldGFpbGVkIHBhbmUgb2YgdGhlIGxheWVyc1xuICogaW4gZWFjaCBUZW1wbGF0ZVxuICovXG5jbGFzcyBUZW1wbGF0ZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxUZW1wbGF0ZXNQcm9wcywgVGVtcGxhdGVzU3RhdGU+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhbmVPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkVGVtcGxhdGU6IG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZW1wbGF0ZS1jb21wb25lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGVtcGxhdGUtY29tcG9uZW50X19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PlNjZW5hcmlvczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNjZW5hcmlvcyBhcmUgYSBzZXQgb2YgbGF5ZXJzIHRoYXQgYXJlIGdyb3VwZWQgdG9nZXRoZXIgZm9yIGEgc3BlY2lmaWMgZW1lcmdlbmN5XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmQgY2FuIGJlIGFkZGVkIHRvIHRoZSBtYXAgYWxsIGF0IG9uY2UuXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInRlbXBsYXRlLWNvbXBvbmVudF9faW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9xdWVzdGlvbi0zMi1mLnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGVtcGxhdGVzICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInRlbXBsYXRlLWNvbXBvbmVudF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRlbXBsYXRlU2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVzPXt0aGlzLnByb3BzLnRlbXBsYXRlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFkZExheWVyPXt0aGlzLnByb3BzLm9uQWRkTGF5ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRUZW1wbGF0ZT17dGhpcy5wcm9wcy5vbkFkZFRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUxheWVycz17dGhpcy5wcm9wcy5hY3RpdmVMYXllcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGVtcGxhdGVzPXt0aGlzLnByb3BzLmFjdGl2ZVRlbXBsYXRlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWN0aXZlVGVtcGxhdGVzTWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRlbXBsYXRlcz17dGhpcy5wcm9wcy5hY3RpdmVUZW1wbGF0ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVGVtcGxhdGU9e3RoaXMucHJvcHMub25SZW1vdmVUZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlQ29tcG9uZW50O1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QWR2YW5jZWRTZWxlY3QsIEljb259IGZyb20gXCJqaW11LXVpXCI7XG5pbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4uL1RlbXBsYXRlXCI7XG5pbXBvcnQgQWRkVGVtcGxhdGVJdGVtIGZyb20gXCIuL0FkZFRlbXBsYXRlSXRlbVwiO1xuaW1wb3J0IExheWVyV3JhcHBlciBmcm9tIFwiLi4vTGF5ZXJXcmFwcGVyXCI7XG5cbmludGVyZmFjZSBUZW1wbGF0ZVNlYXJjaFByb3BzIHtcbiAgICB0ZW1wbGF0ZXM6IFRlbXBsYXRlW10gLy8gbGlzdCBvZiBUZW1wbGF0ZXNcbiAgICBhY3RpdmVMYXllcnM6IExheWVyV3JhcHBlcltdIC8vIGxpc3Qgb2YgYWN0aXZlIExheWVyc1xuICAgIGFjdGl2ZVRlbXBsYXRlczogVGVtcGxhdGVbXSAvLyBsaXN0IG9mIGFjdGl2ZSBUZW1wbGF0ZXNcbiAgICBvbkFkZExheWVyOiAobGF5ZXI6IExheWVyV3JhcHBlcikgPT4gYW55IC8vIGNhbGxiYWNrIGZ1bmN0aW9uIHVwb24gYWRkaW5nIGEgTGF5ZXJcbiAgICBvbkFkZFRlbXBsYXRlOiAodGVtcGxhdGU6IFRlbXBsYXRlKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiBhZGRpbmcgYSBUZW1wbGF0ZVxufVxuXG4vKipcbiAqIFRlbXBsYXRlU2VhcmNoIGFsbG93cyB1c2VycyB0byBzZWFyY2ggZm9yIGEgVGVtcGxhdGVcbiAqL1xuY2xhc3MgVGVtcGxhdGVTZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQ8VGVtcGxhdGVTZWFyY2hQcm9wcywge30+IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZW1wbGF0ZS1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8QWR2YW5jZWRTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgaXNNdWx0aXBsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgaXNFbXB0eU9wdGlvbkhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKXt9fVxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgIHNvcnRWYWx1ZXNCeUxhYmVsPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBtZW51UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDogWzAsIC00MF1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tRHJvcGRvd25CdXR0b25Db250ZW50PXsoXG4gICAgICAgICAgICAgICAgICAgICkgPT4ge3JldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9zZWFyY2gtMzIuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaCBmb3IgU2NlbmFyaW8uLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfX1cbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG9Cb2R5PXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgc3RyYXRlZ3k9XCJmaXhlZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1ZhbHVlcz17dGhpcy5wcm9wcy50ZW1wbGF0ZXMubWFwKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogdGVtcGxhdGUudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRlbXBsYXRlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXBsYXRlLXNlYXJjaC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZFRlbXBsYXRlSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZT17dGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkVGVtcGxhdGU9e3RoaXMucHJvcHMub25BZGRUZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRMYXllcj17dGhpcy5wcm9wcy5vbkFkZExheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVMYXllcnM9e3RoaXMucHJvcHMuYWN0aXZlTGF5ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVUZW1wbGF0ZXM9e3RoaXMucHJvcHMuYWN0aXZlVGVtcGxhdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVtcGxhdGVTZWFyY2g7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9CYXNlbWFwX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfQ29sb3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9jb3JlX3JlYWN0aXZlVXRpbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9pZGVudGl0eV9JZGVudGl0eU1hbmFnZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9pZGVudGl0eV9PQXV0aEluZm9fXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfRmVhdHVyZUxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0xheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfcmVuZGVyZXJzX1NpbXBsZVJlbmRlcmVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfc3ltYm9sc19TaW1wbGVNYXJrZXJTeW1ib2xfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV93aWRnZXRzX0xheWVyTGlzdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYmFzaWNfY29sb3JfcGlja2VyX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCAnLi9XaWRnZXQuc2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt0eXBlIEFsbFdpZGdldFByb3BzfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQge0ppbXVNYXBWaWV3Q29tcG9uZW50LCBKaW11TWFwVmlld30gZnJvbSBcImppbXUtYXJjZ2lzXCI7XG5pbXBvcnQge0xvYWRpbmd9IGZyb20gXCJqaW11LXVpXCI7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIjtcbmltcG9ydCBMYXllciBmcm9tIFwiZXNyaS9sYXllcnMvTGF5ZXJcIlxuaW1wb3J0IEJhc2VtYXAgZnJvbSBcImVzcmkvQmFzZW1hcFwiO1xuaW1wb3J0IHthZGRGZWF0dXJlc30gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtZmVhdHVyZS1sYXllcic7XG5pbXBvcnQgT0F1dGhJbmZvIGZyb20gXCJlc3JpL2lkZW50aXR5L09BdXRoSW5mb1wiO1xuaW1wb3J0IGVzcmlJZCBmcm9tIFwiZXNyaS9pZGVudGl0eS9JZGVudGl0eU1hbmFnZXJcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi9UZW1wbGF0ZVwiO1xuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL0NhdGVnb3J5XCI7XG5pbXBvcnQgTGF5ZXJDb21wb25lbnQgZnJvbSBcIi4vTGF5ZXJDb21wb25lbnQvTGF5ZXJDb21wb25lbnRcIlxuaW1wb3J0IFNhdmVUZW1wbGF0ZUNvbXBvbmVudCBmcm9tICcuL1NhdmVUZW1wbGF0ZUNvbXBvbmVudCdcbmltcG9ydCBMYXllckxpc3RDb21wb25lbnQgZnJvbSBcIi4vTGF5ZXJMaXN0Q29tcG9uZW50L0xheWVyTGlzdENvbXBvbmVudFwiO1xuaW1wb3J0IFRlbXBsYXRlQ29tcG9uZW50IGZyb20gXCIuL1RlbXBsYXRlQ29tcG9uZW50L1RlbXBsYXRlQ29tcG9uZW50XCI7XG5pbXBvcnQgTGF5ZXJXcmFwcGVyIGZyb20gXCIuL0xheWVyV3JhcHBlclwiO1xuXG5pbnRlcmZhY2UgV2lkZ2V0U3RhdGUge1xuICAgIGppbXVNYXBWaWV3OiBKaW11TWFwVmlldyAvLyBKaW11TWFwVmlldyBvZiB0aGUgbGlua2VkIE1hcFxuICAgIGxheWVyV3JhcHBlcnM6IE1hcDxudW1iZXIsIExheWVyV3JhcHBlcj4gLy8gTWFwIG9mIExheWVyIElEIHRvIExheWVyV3JhcHBlclxuICAgIHRlbXBsYXRlczogTWFwPG51bWJlciwgVGVtcGxhdGU+IC8vIE1hcCBvZiBUZW1wbGF0ZSBJRCB0byBUZW1wbGF0ZVxuICAgIGNhdGVnb3JpZXM6IE1hcDxudW1iZXIsIENhdGVnb3J5PiAvLyBNYXAgb2YgQ2F0ZWdvcnkgSUQgdG8gQ2F0ZWdvcnlcbiAgICBsb2FkaW5nOiBib29sZWFuIC8vIHdoZXRoZXIgdGhlIGFwcGxpY2F0aW9uIGlzIHN0aWxsIGxvYWRpbmcgZGF0YVxuICAgIGFjdGl2ZVRlbXBsYXRlczogVGVtcGxhdGVbXSAvLyBsaXN0IG9mIGFjdGl2ZSBUZW1wbGF0ZXNcbiAgICBhY3RpdmVMYXllcnM6IExheWVyV3JhcHBlcltdIC8vIGxpc3Qgb2YgYWN0aXZlIExheWVyc1xufVxuXG5jbGFzcyBXaWRnZXQgZXh0ZW5kcyBDb21wb25lbnQ8QWxsV2lkZ2V0UHJvcHM8YW55PiwgV2lkZ2V0U3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgamltdU1hcFZpZXc6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGxheWVyV3JhcHBlcnM6IG5ldyBNYXA8bnVtYmVyLCBMYXllcldyYXBwZXI+KCksXG4gICAgICAgICAgICB0ZW1wbGF0ZXM6IG5ldyBNYXA8bnVtYmVyLCBUZW1wbGF0ZT4oKSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IG5ldyBNYXA8bnVtYmVyLCBDYXRlZ29yeT4oKSxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBhY3RpdmVUZW1wbGF0ZXM6IFtdLFxuICAgICAgICAgICAgYWN0aXZlTGF5ZXJzOiBbXSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdGVtcGxhdGVUYWJsZTogRmVhdHVyZUxheWVyO1xuICAgIHByaXZhdGUgbGF5ZXJUYWJsZTogRmVhdHVyZUxheWVyO1xuICAgIHByaXZhdGUgY2F0ZWdvcnlUYWJsZTogRmVhdHVyZUxheWVyO1xuICAgIHByaXZhdGUgdGVtcGxhdGVMYXllclJlbGF0aW9uc2hpcHM6IEZlYXR1cmVMYXllcjtcbiAgICBwcml2YXRlIHF1ZXJ5UGFyYW1ldGVycztcblxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVRhYmxlID0gbmV3IEZlYXR1cmVMYXllcih7dXJsOiB0aGlzLnByb3BzLmNvbmZpZy50ZW1wbGF0ZVRhYmxlVXJsfSk7XG4gICAgICAgICAgICB0aGlzLmxheWVyVGFibGUgPSBuZXcgRmVhdHVyZUxheWVyKHt1cmw6IHRoaXMucHJvcHMuY29uZmlnLmxheWVyVGFibGVVcmx9KTtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlUYWJsZSA9IG5ldyBGZWF0dXJlTGF5ZXIoe3VybDogdGhpcy5wcm9wcy5jb25maWcuY2F0ZWdvcnlUYWJsZVVybH0pO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZUxheWVyUmVsYXRpb25zaGlwcyA9IG5ldyBGZWF0dXJlTGF5ZXIoe3VybDogdGhpcy5wcm9wcy5jb25maWcudGVtcGxhdGVMYXllclJlbGF0aW9uc2hpcHNVcmx9KTtcbiAgICAgICAgICAgIHRoaXMucXVlcnlQYXJhbWV0ZXJzID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBTdG9wIGV4ZWN1dGlvbiBvZiBmdXJ0aGVyIG1ldGhvZHMgYmVjYXVzZSBvdGhlciBmdW5jdGlvbmFsaXRpZXMgdW5saWtlbHkgdG8gd29yayBpZiBhcHAgZmFpbGVkXG4gICAgICAgICAgICAvLyB0byBjb25uZWN0IHRvIG9uZSBvciBtb3JlIHRhYmxlcy5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yIGNvbm5lY3RpbmcgdG8gZGF0YWJhc2UsIHBsZWFzZSB0cnkgYWdhaW4hXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ2F0ZWdvcmllcygpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBsb2FkaW5nIGNhdGVnb3JpZXMsIHBsZWFzZSB0cnkgYWdhaW4hXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoVGVtcGxhdGVzKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yIGxvYWRpbmcgdGVtcGxhdGVzLCBwbGVhc2UgdHJ5IGFnYWluIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaExheWVycygpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBsb2FkaW5nIGxheWVycywgcGxlYXNlIHRyeSBhZ2FpbiFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hUZW1wbGF0ZUxheWVycygpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBsb2FkaW5nIHRlbXBsYXRlIGxheWVycywgcGxlYXNlIHRyeSBhZ2FpbiFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hMYXllcnNhbmRUZW1wbGF0ZXNmcm9tSGFzaCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBsb2FkaW5nIHVybCBwYXJhbWV0ZXJzLCBwbGVhc2UgdHJ5IGFnYWluIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkcyBMYXllcnMgYW5kIFRlbXBsYXRlcy9TY2VuYXJpb3MgdGhhdCBhcmUgaW4gdXJsIHBhcmFtZXRlcnMgXG4gICAgICovXG4gICAgZmV0Y2hMYXllcnNhbmRUZW1wbGF0ZXNmcm9tSGFzaCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGxheWVycyA9IHRoaXMucXVlcnlQYXJhbWV0ZXJzLmdldChcImxheWVyc1wiKTtcbiAgICAgICAgbGV0IHRlbXBsYXRlcyA9IHRoaXMucXVlcnlQYXJhbWV0ZXJzLmdldChcInRlbXBsYXRlc1wiKTtcbiAgICAgICAgLy8gYW55IG90aGVyIGZvcm1hdHRpbmcgY2hlY2tpbmcgbmVlZGVkP1xuICAgICAgICAvLyBtYWtlIHRoaXMgb25lIGZ1bmN0aW9uIGluc3RlYWQgb2YgdHdvXG5cbiAgICAgICAgaWYgKGxheWVycyApIHtcbiAgICAgICAgICAgIGxheWVycyA9IGxheWVycy5zcGxpdChcIixcIik7XG4gICAgICAgICAgICBsYXllcnMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAobGF5ZXJJZCkgPT4geyAgIFxuICAgICAgICAgICAgICAgICAgICBsYXllcklkID0gcGFyc2VJbnQobGF5ZXJJZCk7ICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgbGF5ZXJXcmFwcGVyID0gdGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldChsYXllcklkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRBY3RpdmVMYXllcihsYXllcldyYXBwZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGVtcGxhdGVzICkge1xuICAgICAgICAgICAgdGVtcGxhdGVzID0gdGVtcGxhdGVzLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIHRlbXBsYXRlcy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICh0ZW1wbGF0ZUlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlSWQgPSBwYXJzZUludCh0ZW1wbGF0ZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBsYXRlID0gdGhpcy5zdGF0ZS50ZW1wbGF0ZXMuZ2V0KHRlbXBsYXRlSWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEFjdGl2ZVRlbXBsYXRlKHRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUXVlcmllcyBDYXRlZ29yaWVzIHRhYmxlIHRvIGNyZWF0ZSBhIE1hcCBvZiBDYXRlZ29yeSBJRCB0byBDYXRlZ29yeSBhbmQgdXBkYXRlcyBzdGF0ZVxuICAgICAqL1xuICAgIGZldGNoQ2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gUXVlcnkgQ2F0ZWdvcmllcyBUYWJsZVxuICAgICAgICBsZXQgZmVhdHVyZVNldCA9IGF3YWl0IHRoaXMuY2F0ZWdvcnlUYWJsZS5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgIHdoZXJlOiBcIjE9MVwiLFxuICAgICAgICAgICAgb3V0RmllbGRzOiBbXCIqXCJdLFxuICAgICAgICAgICAgb3JkZXJCeUZpZWxkczogW1wiVElUTEVcIl1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIENhdGVnb3JpZXNcbiAgICAgICAgbGV0IG5ld0NhdGVnb3JpZXM6IE1hcDxudW1iZXIsIENhdGVnb3J5PiA9IG5ldyBNYXA8bnVtYmVyLCBDYXRlZ29yeT4oKTtcbiAgICAgICAgZm9yIChsZXQgZiBvZiBmZWF0dXJlU2V0LmZlYXR1cmVzKSB7XG4gICAgICAgICAgICBuZXdDYXRlZ29yaWVzLnNldChmLmF0dHJpYnV0ZXMuT0JKRUNUSUQsIHtcbiAgICAgICAgICAgICAgICBpZDogZi5hdHRyaWJ1dGVzLk9CSkVDVElELFxuICAgICAgICAgICAgICAgIHRpdGxlOiBmLmF0dHJpYnV0ZXMuVElUTEUsXG4gICAgICAgICAgICAgICAgbGF5ZXJXcmFwcGVyczogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBuZXdDYXRlZ29yaWVzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUXVlcmllcyBUZW1wbGF0ZXMgdGFibGUgdG8gY3JlYXRlIGxpc3Qgb2YgVGVtcGxhdGVzIGFuZCB1cGRhdGVzIHN0YXRlXG4gICAgICovXG4gICAgZmV0Y2hUZW1wbGF0ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIFF1ZXJ5IFRlbXBsYXRlcyB0YWJsZVxuICAgICAgICBsZXQgZmVhdHVyZVNldCA9IGF3YWl0IHRoaXMudGVtcGxhdGVUYWJsZS5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgIHdoZXJlOiBcIjE9MVwiLFxuICAgICAgICAgICAgb3V0RmllbGRzOiBbXCIqXCJdLFxuICAgICAgICAgICAgb3JkZXJCeUZpZWxkczogW1wiVElUTEVcIl1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIFRlbXBsYXRlc1xuICAgICAgICBsZXQgbmV3VGVtcGxhdGVzOiBNYXA8bnVtYmVyLCBUZW1wbGF0ZT4gPSBuZXcgTWFwPG51bWJlciwgVGVtcGxhdGU+KCk7XG4gICAgICAgIGZvciAobGV0IGYgb2YgZmVhdHVyZVNldC5mZWF0dXJlcykge1xuICAgICAgICAgICAgbmV3VGVtcGxhdGVzLnNldChmLmF0dHJpYnV0ZXMuT0JKRUNUSUQsIHtcbiAgICAgICAgICAgICAgICBpZDogZi5hdHRyaWJ1dGVzLk9CSkVDVElELFxuICAgICAgICAgICAgICAgIHRpdGxlOiBmLmF0dHJpYnV0ZXMuVElUTEUsXG4gICAgICAgICAgICAgICAgbGF5ZXJXcmFwcGVyczogW11cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRlbXBsYXRlczogbmV3VGVtcGxhdGVzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFF1ZXJpZXMgTGF5ZXJzIHRhYmxlIHRvIGNyZWF0ZSBhIE1hcCBvZiBMYXllciBJRCB0byBMYXllcldyYXBwZXIgYW5kIHVwZGF0ZXMgc3RhdGUuXG4gICAgICogRGVsZXRlcyBMYXllcldyYXBwZXIgYW5kIGl0cyByZWZlcmVuY2VzIGlmIExheWVyIGNyZWF0aW9uIGZhaWxzLlxuICAgICAqL1xuICAgIGZldGNoTGF5ZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBRdWVyeSBMYXllcnMgdGFibGVcbiAgICAgICAgbGV0IGZlYXR1cmVTZXQgPSBhd2FpdCB0aGlzLmxheWVyVGFibGUucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICB3aGVyZTogXCIxPTFcIixcbiAgICAgICAgICAgIG91dEZpZWxkczogW1wiT0JKRUNUSURcIiwgXCJUSVRMRVwiLCBcIlVSTFwiLCBcIlNDT1BFXCIsIFwiQ0FURUdPUllJRFwiLCBcIlJFTkRFUkVSXCIsIFwiRklMVEVSXCJdLFxuICAgICAgICAgICAgb3JkZXJCeUZpZWxkczogW1wiU0NPUEVcIiwgXCJUSVRMRVwiXVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDcmVhdGUgTGF5ZXJXcmFwcGVyc1xuICAgICAgICBsZXQgbmV3TGF5ZXJXcmFwcGVyczogTWFwPG51bWJlciwgTGF5ZXJXcmFwcGVyPiA9IG5ldyBNYXA8bnVtYmVyLCBMYXllcldyYXBwZXI+KCk7XG4gICAgICAgIGZvciAobGV0IGZlYXR1cmUgb2YgZmVhdHVyZVNldC5mZWF0dXJlcykge1xuICAgICAgICAgICAgbGV0IG5ld0xheWVyV3JhcHBlciA9IHtcbiAgICAgICAgICAgICAgICBpZDogZmVhdHVyZS5hdHRyaWJ1dGVzLk9CSkVDVElELFxuICAgICAgICAgICAgICAgIHRpdGxlOiBmZWF0dXJlLmF0dHJpYnV0ZXMuU0NPUEUgKyBcIiBcIiArIGZlYXR1cmUuYXR0cmlidXRlcy5USVRMRSxcbiAgICAgICAgICAgICAgICB1cmw6IGZlYXR1cmUuYXR0cmlidXRlcy5VUkwsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBmZWF0dXJlLmF0dHJpYnV0ZXMuRklMVEVSLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiBmZWF0dXJlLmF0dHJpYnV0ZXMuUkVOREVSRVIsXG4gICAgICAgICAgICAgICAgbGF5ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5nZXQoZmVhdHVyZS5hdHRyaWJ1dGVzLkNBVEVHT1JZSUQpLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlczogW11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgYXdhaXQgY3JlYXRlTGF5ZXIgdG8gYWxsb3cgTGF5ZXJzIHRvIGJlIGxvYWRlZCBhc3luY2hyb25vdXNseSBpbiB0aGUgYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTGF5ZXIobmV3TGF5ZXJXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBuZXdMYXllcldyYXBwZXJzLnNldChmZWF0dXJlLmF0dHJpYnV0ZXMuT0JKRUNUSUQsIG5ld0xheWVyV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLmdldChmZWF0dXJlLmF0dHJpYnV0ZXMuQ0FURUdPUllJRCkubGF5ZXJXcmFwcGVycy5wdXNoKG5ld0xheWVyV3JhcHBlcik7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICBhbGVydChlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbGF5ZXJXcmFwcGVyczogbmV3TGF5ZXJXcmFwcGVyc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBRdWVyaWVzIFRlbXBsYXRlLUxheWVyIFJlbGF0aW9uc2hpcHMgdGFibGUgYW5kIHVwZGF0ZXMgc3RhdGVcbiAgICAgKi9cbiAgICBmZXRjaFRlbXBsYXRlTGF5ZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBPcmRlciBieSBPQkpFQ1RJRCB0byBtYWludGFpbiBMYXllciBvcmRlclxuICAgICAgICBsZXQgZmVhdHVyZVNldCA9IGF3YWl0IHRoaXMudGVtcGxhdGVMYXllclJlbGF0aW9uc2hpcHMucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICB3aGVyZTogXCIxPTFcIixcbiAgICAgICAgICAgIG91dEZpZWxkczogW1wiKlwiXSxcbiAgICAgICAgICAgIG9yZGVyQnlGaWVsZHM6IFtcIk9CSkVDVElEXCJdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGZlYXR1cmUgb2YgZmVhdHVyZVNldC5mZWF0dXJlcykge1xuICAgICAgICAgICAgbGV0IGxheWVyV3JhcHBlciA9IHRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoZmVhdHVyZS5hdHRyaWJ1dGVzLkxBWUVSSUQpO1xuICAgICAgICAgICAgaWYgKGxheWVyV3JhcHBlcikge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMuc3RhdGUudGVtcGxhdGVzLmdldChmZWF0dXJlLmF0dHJpYnV0ZXMuVEVNUExBVEVJRCk7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGUubGF5ZXJXcmFwcGVycy5wdXNoKGxheWVyV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldChmZWF0dXJlLmF0dHJpYnV0ZXMuTEFZRVJJRCkudGVtcGxhdGVzLnB1c2godGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZW1wbGF0ZXM6IHRoaXMuc3RhdGUudGVtcGxhdGVzLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIG5ldyBMYXllciB3aXRoIHRoZSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBnaXZlbiBMYXllcldyYXBwZXIuXG4gICAgICogQHBhcmFtIGxheWVyV3JhcHBlciB0aGUgTGF5ZXJXcmFwcGVyIGZyb20gd2hpY2ggdG8gY3JlYXRlIHRoZSBMYXllclxuICAgICAqIEB0aHJvd3MgRXJyb3IgaWYgTGF5ZXIgY3JlYXRpb24gZmFpbHNcbiAgICAgKi9cbiAgICBjcmVhdGVMYXllciA9IGFzeW5jIChsYXllcldyYXBwZXI6IExheWVyV3JhcHBlcikgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IG5ld0xheWVyOiBMYXllciA9IGF3YWl0IExheWVyLmZyb21BcmNHSVNTZXJ2ZXJVcmwoe3VybDogbGF5ZXJXcmFwcGVyLnVybH0pO1xuICAgICAgICAgICAgbmV3TGF5ZXIuaWQgPSBsYXllcldyYXBwZXIuaWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIG5ld0xheWVyLnRpdGxlID0gbGF5ZXJXcmFwcGVyLnRpdGxlO1xuXG4gICAgICAgICAgICAvLyBDdXN0b20gUmVuZGVyZXJcbiAgICAgICAgICAgIGlmIChuZXdMYXllci50eXBlID09PSBcImZlYXR1cmVcIikge1xuICAgICAgICAgICAgICAgIGlmIChsYXllcldyYXBwZXIucmVuZGVyZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKG5ld0xheWVyIGFzIEZlYXR1cmVMYXllcikucmVuZGVyZXIgPSBKU09OLnBhcnNlKGxheWVyV3JhcHBlci5yZW5kZXJlcik7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgbG9hZGluZyByZW5kZXJlciBmb3IgbGF5ZXIgXCIgKyBsYXllcldyYXBwZXIudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGF5ZXJXcmFwcGVyLmZpbHRlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAobmV3TGF5ZXIgYXMgRmVhdHVyZUxheWVyKS5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IGxheWVyV3JhcHBlci5maWx0ZXI7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgbG9hZGluZyBTUUwgZmlsdGVyIGZvciBsYXllciBcIiArIGxheWVyV3JhcHBlci50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYXllcldyYXBwZXIubGF5ZXIgPSBuZXdMYXllcjtcbiAgICAgICAgICAgIHJldHVybiBuZXdMYXllcjtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIGxvYWRpbmcgbGF5ZXJcIiArIGxheWVyV3JhcHBlci50aXRsZSArIFwiIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmVzIGFsbCBhY3RpdmUgTGF5ZXJzIGFzIGEgbmV3IFRlbXBsYXRlIHdpdGggdGhlIGdpdmVuIHRpdGxlXG4gICAgICogQHBhcmFtIHRpdGxlIHRoZSB0aXRsZSBvZiB0aGUgbmV3IFRlbXBsYXRlXG4gICAgICovXG4gICAgc2F2ZVRlbXBsYXRlID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgICAgICAgIGxldCBzYW1lVGl0bGUgPSBhd2FpdCB0aGlzLnRlbXBsYXRlVGFibGUucXVlcnlGZWF0dXJlQ291bnQoe1xuICAgICAgICAgICAgICAgICAgICB3aGVyZTogXCJUSVRMRSA9ICdcIiArIHRpdGxlICsgXCInXCIsXG4gICAgICAgICAgICAgICAgICAgIG91dEZpZWxkczogW1wiKlwiXVxuICAgICAgICAgICAgICAgIH0pID4gMDtcblxuICAgICAgICAgICAgICAgIGlmIChzYW1lVGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciwgYSB0ZW1wbGF0ZSB3aXRoIHRoaXMgdGl0bGUgYWxyZWFkeSBleGlzdHMhXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGF3YWl0IHRoaXMuZ2V0VG9rZW4oKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBhZGRGZWF0dXJlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMucHJvcHMuY29uZmlnLnRlbXBsYXRlVGFibGVVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlczogW3thdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRJVExFOiB0aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge3Rva2VuOiB0b2tlbn1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5hZGRSZXN1bHRzWzBdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IHBlciBBcmNHSVMgUmVzdCBKUyBBUEksIElFZGl0RmVhdHVyZVJlc3VsdCB3aWxsIGNvbnRhaW4gYW4gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1lc3NhZ2UgaWYgc3VjY2VzcyBpcyBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmFkZFJlc3VsdHNbMF0uZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wbGF0ZUlkID0gcmVzcG9uc2UuYWRkUmVzdWx0c1swXS5vYmplY3RJZDtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zYXZlVGVtcGxhdGVMYXllcnModGVtcGxhdGVJZCwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoVGVtcGxhdGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hUZW1wbGF0ZUxheWVycygpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIlN1Y2Nlc3NmdWxseSBzYXZlZCBuZXcgZXZlbnQhXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciwgcGxlYXNlIGVudGVyIGEgdGl0bGUhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBzYXZpbmcgdGVtcGxhdGUsIHBsZWFzZSB0cnkgYWdhaW4hXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBUZW1wbGF0ZS1MYXllciByZWxhdGlvbnNoaXBzIHRvIFRlbXBsYXRlIExheWVyIFJlbGF0aW9uc2hpcHMgdGFibGVcbiAgICAgKiBAcGFyYW0gdGVtcGxhdGVJZCB0aGUgT0JKRUNUSUQgb2YgdGhlIG5ldyBUZW1wbGF0ZVxuICAgICAqIEBwYXJhbSB0b2tlbiB0aGUgdG9rZW4gdG8gdXNlIHRvIGF1dGhlbnRpY2F0ZSB0aGUgbmV0d29yayByZXF1ZXN0XG4gICAgICovXG4gICAgc2F2ZVRlbXBsYXRlTGF5ZXJzID0gYXN5bmMgKHRlbXBsYXRlSWQ6IG51bWJlciwgdG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgICBsZXQgZmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgICAgIGxldCBsYXllcnMgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycztcblxuICAgICAgICBmb3IgKGxldCBsYXllciBvZiBsYXllcnMpIHtcbiAgICAgICAgICAgIC8vIEVsaW1pbmF0ZSBub24tb3BlcmF0aW9uYWwgTGF5ZXJzIGxpa2UgYmFzZSBMYXllcnNcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmxheWVyV3JhcHBlcnMuaGFzKCtsYXllci5pZCkpIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgVEVNUExBVEVJRDogdGVtcGxhdGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIExBWUVSSUQ6IGxheWVyLmlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGFkZEZlYXR1cmVzKHtcbiAgICAgICAgICAgIHVybDogdGhpcy5wcm9wcy5jb25maWcudGVtcGxhdGVMYXllclJlbGF0aW9uc2hpcHNVcmwsXG4gICAgICAgICAgICBmZWF0dXJlczogZmVhdHVyZXMsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5hZGRSZXN1bHRzWzBdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IHBlciBBcmNHSVMgUmVzdCBKUyBBUEksIElFZGl0RmVhdHVyZVJlc3VsdCB3aWxsIGNvbnRhaW4gYW4gZXJyb3JcbiAgICAgICAgICAgIC8vIG1lc3NhZ2UgaWYgc3VjY2VzcyBpcyBmYWxzZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmFkZFJlc3VsdHNbMF0uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRva2VuIHVzaW5nIHVzZXItcHJvdmlkZWQgbG9naW4gaW5mbyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFjY2VzcyBBcmNHSVMgc2VydmljZXNcbiAgICAgKiBAcmV0dXJuIGEgdG9rZW4gZ2VuZXJhdGVkIHVzaW5nIHRoZSB1c2VyLXByb3ZpZGVkIENyZWRlbnRpYWwgaW5mb1xuICAgICAqL1xuICAgIGdldFRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmZvID0gbmV3IE9BdXRoSW5mbyh7XG4gICAgICAgICAgICBhcHBJZDogXCJlUzJ2VWRJWmJIYVZPckR6XCIsXG4gICAgICAgICAgICBmbG93VHlwZTogXCJhdXRvXCIsXG4gICAgICAgICAgICBwb3B1cDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGVzcmlJZC5yZWdpc3Rlck9BdXRoSW5mb3MoW2luZm9dKTtcblxuICAgICAgICBsZXQgY3JlZGVudGlhbCA9IGF3YWl0IGVzcmlJZC5jaGVja1NpZ25JblN0YXR1cyhpbmZvLnBvcnRhbFVybCArIFwiL3NoYXJpbmdcIik7XG4gICAgICAgIGlmICghY3JlZGVudGlhbCkge1xuICAgICAgICAgICAgY3JlZGVudGlhbCA9IGF3YWl0IGVzcmlJZC5nZXRDcmVkZW50aWFsKGluZm8ucG9ydGFsVXJsICsgXCIvc2hhcmluZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3JlZGVudGlhbC50b2tlbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBoYXNoIHBhcmFtcyBmb3IgdGVtcGxhdGUgb3IgbGF5ZXIgaWQsIGFkZCBpZiBub3QgdGhlcmVcbiAgICAgKiBAcGFyYW0gb2JqZWN0SWRcbiAgICAgKiBAcGFyYW0gb2JqZWN0R3JvdXBcbiAgICAgKi9cbiAgICBhZGRIYXNoUGFyYW0gPSAob2JqZWN0SWQsIG9iamVjdEdyb3VwKSB7XG4gICAgICAgIGxldCBvYmplY3RQYXJhbXMgPSB0aGlzLnF1ZXJ5UGFyYW1ldGVycy5nZXQob2JqZWN0R3JvdXApO1xuICAgICAgICBpZiAob2JqZWN0UGFyYW1zKSB7XG4gICAgICAgICAgICBvYmplY3RQYXJhbXMgPSBvYmplY3RQYXJhbXMuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgaWYgKCFvYmplY3RQYXJhbXMuaW5jbHVkZXMob2JqZWN0SWQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgICAgICBvYmplY3RQYXJhbXMucHVzaChvYmplY3RJZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeVBhcmFtZXRlcnMuc2V0KG9iamVjdEdyb3VwLCBvYmplY3RQYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5xdWVyeVBhcmFtZXRlcnMuc2V0KG9iamVjdEdyb3VwLCBvYmplY3RJZCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB0aGlzLnF1ZXJ5UGFyYW1ldGVycy50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBoYXNoIHBhcmFtIGZvciBnaXZlbiB0ZW1wbGF0ZSBvciBsYXllciBpZFxuICAgICAqIEBwYXJhbSBvYmplY3RJZFxuICAgICAqIEBwYXJhbSBvYmplY3RHcm91cFxuICAgICAqL1xuICAgIHJlbW92ZUhhc2hQYXJhbSA9IChvYmplY3RJZCwgb2JqZWN0R3JvdXApIHtcbiAgICAgICAgbGV0IG9iamVjdFBhcmFtcyA9IHRoaXMucXVlcnlQYXJhbWV0ZXJzLmdldChvYmplY3RHcm91cCkuc3BsaXQoXCIsXCIpO1xuICAgICAgICBvYmplY3RQYXJhbXMgPSBvYmplY3RQYXJhbXMuZmlsdGVyKHBhcmFtID0+IHBhcmFtICE9PSBvYmplY3RJZC50b1N0cmluZygpKTtcbiAgICAgICAgY29uc29sZS5sb2cob2JqZWN0UGFyYW1zKTtcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtZXRlcnMuc2V0KG9iamVjdEdyb3VwLCBvYmplY3RQYXJhbXMpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRoaXMucXVlcnlQYXJhbWV0ZXJzLnRvU3RyaW5nKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBMYXllciB0byB0aGUgTWFwIGFuZCBsaXN0IG9mIGFjdGl2ZSBMYXllcnNcbiAgICAgKiBAcGFyYW0gbGF5ZXJXcmFwcGVyIHRoZSBMYXllciB0byBhZGRcbiAgICAgKi9cbiAgICBhZGRBY3RpdmVMYXllciA9IGFzeW5jIChsYXllcldyYXBwZXI6IExheWVyV3JhcHBlcikgPT4ge1xuICAgICAgICBpZiAoIWxheWVyV3JhcHBlci5sYXllcikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVMYXllcihsYXllcldyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5hY3RpdmVMYXllcnMuaW5jbHVkZXMobGF5ZXJXcmFwcGVyKSkge1xuICAgICAgICAgICAgbGV0IG5ld0FjdGl2ZUxheWVycyA9IHRoaXMuc3RhdGUuYWN0aXZlTGF5ZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICBuZXdBY3RpdmVMYXllcnMucHVzaChsYXllcldyYXBwZXIpO1xuICAgICAgICAgICAgbGF5ZXJXcmFwcGVyLmxheWVyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChsYXllcldyYXBwZXIubGF5ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkSGFzaFBhcmFtKGxheWVyV3JhcHBlci5pZCwgXCJsYXllcnNcIik7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBhZGRpbmcgbGF5ZXIgXCIgKyBsYXllcldyYXBwZXIudGl0bGUgKyBcIiFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVMYXllcnM6IG5ld0FjdGl2ZUxheWVyc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIGdpdmVuIFRlbXBsYXRlIHRvIHRoZSBNYXAgYW5kIGxpc3Qgb2YgYWN0aXZlIFRlbXBsYXRlc1xuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZSB0aGUgVGVtcGxhdGUgdG8gYWRkXG4gICAgICovXG4gICAgYWRkQWN0aXZlVGVtcGxhdGUgPSBhc3luYyAodGVtcGxhdGU6IFRlbXBsYXRlKSA9PiB7XG5cbiAgICAgICAgbGV0IG5ld0FjdGl2ZVRlbXBsYXRlcyA9IHRoaXMuc3RhdGUuYWN0aXZlVGVtcGxhdGVzLnNsaWNlKCk7XG4gICAgICAgIGxldCBuZXdBY3RpdmVMYXllcnMgPSB0aGlzLnN0YXRlLmFjdGl2ZUxheWVycy5zbGljZSgpO1xuICAgICAgICBpZiAoIW5ld0FjdGl2ZVRlbXBsYXRlcy5pbmNsdWRlcyh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgIG5ld0FjdGl2ZVRlbXBsYXRlcy5wdXNoKHRlbXBsYXRlKTtcbiAgICAgICAgICAgIHRoaXMuYWRkSGFzaFBhcmFtKHRlbXBsYXRlLmlkLCBcInRlbXBsYXRlc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGxheWVyV3JhcHBlciBvZiB0ZW1wbGF0ZS5sYXllcldyYXBwZXJzKSB7XG4gICAgICAgICAgICBpZiAoIWxheWVyV3JhcHBlci5sYXllcikge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlTGF5ZXIobGF5ZXJXcmFwcGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmV3QWN0aXZlTGF5ZXJzLmluY2x1ZGVzKGxheWVyV3JhcHBlcikpIHtcbiAgICAgICAgICAgICAgICBuZXdBY3RpdmVMYXllcnMucHVzaChsYXllcldyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGxheWVyV3JhcHBlci5sYXllci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChsYXllcldyYXBwZXIubGF5ZXIpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBhZGRpbmcgbGF5ZXIgXCIgKyBsYXllcldyYXBwZXIudGl0bGUgKyBcIiFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVUZW1wbGF0ZXM6IG5ld0FjdGl2ZVRlbXBsYXRlcyxcbiAgICAgICAgICAgIGFjdGl2ZUxheWVyczogbmV3QWN0aXZlTGF5ZXJzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGdpdmVuIExheWVyIGZyb20gdGhlIE1hcCBhbmQgbGlzdCBvZiBhY3RpdmUgTGF5ZXJzLiBSZW1vdmVzIGFueSBUZW1wbGF0ZXMgd2l0aG91dCBhc3NvY2lhdGVkXG4gICAgICogYWN0aXZlIExheWVycyBhZnRlciB0aGUgZ2l2ZW4gTGF5ZXIgaGFzIGJlZW4gcmVtb3ZlZC5cbiAgICAgKiBAcGFyYW0gbGF5ZXIgdGhlIExheWVyIHRvIHJlbW92ZVxuICAgICAqL1xuICAgIHJlbW92ZUFjdGl2ZUxheWVyID0gKGxheWVyOiBMYXllcikgPT4ge1xuICAgICAgICBsZXQgbmV3QWN0aXZlTGF5ZXJzID0gdGhpcy5zdGF0ZS5hY3RpdmVMYXllcnMuZmlsdGVyKChsdykgPT4ge3JldHVybiBsdy5sYXllciAhPT0gbGF5ZXJ9KTtcbiAgICAgICAgbGV0IG5ld0FjdGl2ZVRlbXBsYXRlcyA9IHRoaXMuc3RhdGUuYWN0aXZlVGVtcGxhdGVzO1xuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShsYXllcik7XG4gICAgICAgIHRoaXMucmVtb3ZlSGFzaFBhcmFtKGxheWVyLmlkLCBcImxheWVyc1wiKTtcblxuICAgICAgICAvLyBDaGVjayBpZiBhbnkgYWN0aXZlIFRlbXBsYXRlcyBuZWVkIHRvIGJlIHJlbW92ZWRcbiAgICAgICAgZm9yIChsZXQgYWN0aXZlVGVtcGxhdGUgb2YgbmV3QWN0aXZlVGVtcGxhdGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldCgrbGF5ZXIuaWQpLnRlbXBsYXRlcy5pbmNsdWRlcyhhY3RpdmVUZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbGF5ZXJXcmFwcGVyIG9mIGFjdGl2ZVRlbXBsYXRlLmxheWVyV3JhcHBlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0FjdGl2ZUxheWVycy5pbmNsdWRlcyhsYXllcldyYXBwZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3QWN0aXZlVGVtcGxhdGVzID0gbmV3QWN0aXZlVGVtcGxhdGVzLmZpbHRlcigodCkgPT4ge3JldHVybiB0ICE9PSBhY3RpdmVUZW1wbGF0ZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlVGVtcGxhdGVzOiBuZXdBY3RpdmVUZW1wbGF0ZXMsXG4gICAgICAgICAgICBhY3RpdmVMYXllcnM6IG5ld0FjdGl2ZUxheWVyc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBUZW1wbGF0ZSBmcm9tIHRoZSBNYXAgYW5kIGxpc3Qgb2YgYWN0aXZlIFRlbXBsYXRlcy4gUmVtb3ZlcyBhbnkgVGVtcGxhdGVzIHdpdGhvdXQgYXNzb2NpYXRlZFxuICAgICAqIGFjdGl2ZSBMYXllcnMgYWZ0ZXIgdGhlIGdpdmVuIFRlbXBsYXRlIGhhcyBiZWVuIHJlbW92ZWQuXG4gICAgICogQHBhcmFtIHJlbW92ZVRlbXBsYXRlIHRoZSBUZW1wbGF0ZSB0byByZW1vdmVcbiAgICAgKi9cbiAgICByZW1vdmVBY3RpdmVUZW1wbGF0ZSA9IChyZW1vdmVUZW1wbGF0ZTogVGVtcGxhdGUpID0+IHtcbiAgICAgICAgbGV0IG5ld0FjdGl2ZUxheWVycyA9IHRoaXMuc3RhdGUuYWN0aXZlTGF5ZXJzLnNsaWNlKCk7XG4gICAgICAgIGxldCBuZXdBY3RpdmVUZW1wbGF0ZXMgPSB0aGlzLnN0YXRlLmFjdGl2ZVRlbXBsYXRlcy5maWx0ZXIoKHQpID0+IHQgIT09IHJlbW92ZVRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5yZW1vdmVIYXNoUGFyYW0ocmVtb3ZlVGVtcGxhdGUuaWQsIFwidGVtcGxhdGVzXCIpO1xuXG4gICAgICAgIGZvciAobGV0IGxheWVyV3JhcHBlciBvZiByZW1vdmVUZW1wbGF0ZS5sYXllcldyYXBwZXJzKSB7XG4gICAgICAgICAgICAvLyBEb24ndCByZW1vdmUgbGF5ZXIgaWYgaXQgYmVsb25ncyB0byBhbm90aGVyIGFjdGl2ZSBUZW1wbGF0ZVxuICAgICAgICAgICAgbGV0IGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgYWN0aXZlVGVtcGxhdGUgb2YgbmV3QWN0aXZlVGVtcGxhdGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxheWVyV3JhcHBlci50ZW1wbGF0ZXMuaW5jbHVkZXMoYWN0aXZlVGVtcGxhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgbmV3QWN0aXZlTGF5ZXJzID0gbmV3QWN0aXZlTGF5ZXJzLmZpbHRlcigobHcpID0+IGx3ICE9PSBsYXllcldyYXBwZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlKGxheWVyV3JhcHBlci5sYXllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZVRlbXBsYXRlczogbmV3QWN0aXZlVGVtcGxhdGVzLFxuICAgICAgICAgICAgYWN0aXZlTGF5ZXJzOiBuZXdBY3RpdmVMYXllcnNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBjbGVhciBhbGwgYWN0aW9uXG4gICAgICovXG4gICAgY2xlYXJBbGwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlQWxsKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlVGVtcGxhdGVzOiBbXSxcbiAgICAgICAgICAgIGFjdGl2ZUxheWVyczogW11cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtZXRlcnMuc2V0KCdsYXllcnMnLCAnJyk7XG4gICAgICAgIHRoaXMucXVlcnlQYXJhbWV0ZXJzLnNldCgndGVtcGxhdGVzJywgJycpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRoaXMucXVlcnlQYXJhbWV0ZXJzLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxpc3Qgb2YgVGVtcGxhdGVzIHRoYXQgdGhlIGdpdmVuIExheWVyIGJlbG9uZ3MgdG9cbiAgICAgKiBAcGFyYW0gbGF5ZXIgdGhlIExheWVyIHRvIGNoZWNrXG4gICAgICogQHBhcmFtIGFjdGl2ZSBzZXQgdG8gdHJ1ZSB0byBvbmx5IHJldHVybiBhY3RpdmUgVGVtcGxhdGVzXG4gICAgICogQHJldHVybiBhIGxpc3Qgb2YgVGVtcGxhdGVzIHRoYXQgdGhlIGdpdmVuIExheWVyIGJlbG9uZ3MgdG9cbiAgICAgKi9cbiAgICBnZXRMYXllclRlbXBsYXRlcyA9IChsYXllcjogTGF5ZXIsIGFjdGl2ZT86IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmxheWVyV3JhcHBlcnMuZ2V0KCtsYXllci5pZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBsZXQgYWN0aXZlVGVtcGxhdGVzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCB0ZW1wbGF0ZSBvZiB0aGlzLnN0YXRlLmxheWVyV3JhcHBlcnMuZ2V0KCtsYXllci5pZCkudGVtcGxhdGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlVGVtcGxhdGVzLmluY2x1ZGVzKHRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUZW1wbGF0ZXMucHVzaCh0ZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZVRlbXBsYXRlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxheWVyV3JhcHBlcnMuZ2V0KCtsYXllci5pZCkudGVtcGxhdGVzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgQ2F0ZWdvcnkgdGhhdCB0aGUgZ2l2ZW4gTGF5ZXIgYmVsb25ncyB0b1xuICAgICAqIEBwYXJhbSBsYXllciB0aGUgTGF5ZXIgdG8gY2hlY2tcbiAgICAgKiBAcmV0dXJuIHRoZSBDYXRlZ29yeSB0aGF0IHRoZSBnaXZlbiBMYXllciBiZWxvbmdzIHRvXG4gICAgICovXG4gICAgZ2V0TGF5ZXJDYXRlZ29yeSA9IChsYXllcjogTGF5ZXIpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmxheWVyV3JhcHBlcnMuZ2V0KCtsYXllci5pZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxheWVyV3JhcHBlcnMuZ2V0KCtsYXllci5pZCkuY2F0ZWdvcnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUXVlcmllcyBMYXllciBUYWJsZSBhbmQgcmV0dXJucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gTGF5ZXJcbiAgICAgKiBAcGFyYW0gbGF5ZXIgdGhlIExheWVyIHRvIHF1ZXJ5IGluZm9ybWF0aW9uIGFib3V0XG4gICAgICogQHJldHVybiBhIEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHNvdXJjZSwgZGVzY3JpcHRpb24sIGFuZCB1cmwgb2YgdGhlIGxheWVyIG9yXG4gICAgICogb25seSB0aGUgdXJsIG9mIHRoZSBsYXllciBpZiB0aGUgbmV0d29yayByZXF1ZXN0IGZhaWxzXG4gICAgICovXG4gICAgZ2V0TGF5ZXJJbmZvID0gYXN5bmMgKGxheWVyOiBMYXllcikgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmxheWVyV3JhcHBlcnMuZ2V0KCtsYXllci5pZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGZlYXR1cmVTZXQgPSBhd2FpdCB0aGlzLmxheWVyVGFibGUucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IFwiT0JKRUNUSUQgPSBcIiArIGxheWVyLmlkLFxuICAgICAgICAgICAgICAgIG91dEZpZWxkczogW1wiU09VUkNFXCIsIFwiREVTQ1JJUFRJT05cIl1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZmVhdHVyZVNldC5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBmZWF0dXJlU2V0LmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXMuU09VUkNFLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZmVhdHVyZVNldC5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzLkRFU0NSSVBUSU9OLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoK2xheWVyLmlkKS51cmxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGxheWVycyBmb3VuZCB3aXRoIHRoZSBnaXZlbiBPQkpFQ1RJRCFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3IgbG9hZGluZyBsYXllciBpbmZvIVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNvdXJjZTogXCJFcnJvclwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkVycm9yXCIsXG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLnN0YXRlLmxheWVyV3JhcHBlcnMuZ2V0KCtsYXllci5pZCkudXJsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHN0YXRlIHRvIGdpdmVuIEppbXVNYXBWaWV3IGFuZCBzZXRzIGluaXRpYWwgYmFzZW1hcFxuICAgICAqIEBwYXJhbSBqbXYgdGhlIG5ldyBKaW11TWFwVmlld1xuICAgICAqL1xuICAgIGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICAgICAgaWYgKGptdikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICAgICAgICAgICAgLy8gU2V0IGJhc2VtYXAgb24gZmlyc3QgYWN0aXZlIHZpZXcgY2hhbmdlXG4gICAgICAgICAgICAgICAgam12LnZpZXcubWFwLmJhc2VtYXAgPSBCYXNlbWFwLmZyb21JZChcImFyY2dpcy10b3BvZ3JhcGhpY1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGppbXVNYXBWaWV3OiBqbXZcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc3RhcnRlciBqaW11LXdpZGdldFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17dGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm9lbS1kYXNoYm9hcmQtZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRlbXBsYXRlLWNvbXBvbmVudF9fZ3JpZC1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5BZGQgTGF5ZXJzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZW1wbGF0ZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlcz17QXJyYXkuZnJvbSh0aGlzLnN0YXRlLnRlbXBsYXRlcy52YWx1ZXMoKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGVtcGxhdGVzPXt0aGlzLnN0YXRlLmFjdGl2ZVRlbXBsYXRlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFkZFRlbXBsYXRlPXt0aGlzLmFkZEFjdGl2ZVRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlVGVtcGxhdGU9e3RoaXMucmVtb3ZlQWN0aXZlVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTGF5ZXJzPXt0aGlzLnN0YXRlLmFjdGl2ZUxheWVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFkZExheWVyPXt0aGlzLmFkZEFjdGl2ZUxheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGF5ZXItY29tcG9uZW50X19ncmlkLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIHR5cGU9XCJTRUNPTkRBUllcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXllckNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVycz17QXJyYXkuZnJvbSh0aGlzLnN0YXRlLmxheWVyV3JhcHBlcnMudmFsdWVzKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM9e0FycmF5LmZyb20odGhpcy5zdGF0ZS5jYXRlZ29yaWVzLnZhbHVlcygpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVMYXllcnM9e3RoaXMuc3RhdGUuYWN0aXZlTGF5ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkTGF5ZXI9e3RoaXMuYWRkQWN0aXZlTGF5ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXllci1saXN0X19ncmlkLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyB0eXBlPVwiU0VDT05EQVJZXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF5ZXJMaXN0Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xlYXJBbGw9e3RoaXMuY2xlYXJBbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZUxheWVyPXt0aGlzLnJlbW92ZUFjdGl2ZUxheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TGF5ZXJUZW1wbGF0ZXM9e3RoaXMuZ2V0TGF5ZXJUZW1wbGF0ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRMYXllckNhdGVnb3J5PXt0aGlzLmdldExheWVyQ2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1BY3RpdmVMYXllcnM9e3RoaXMuc3RhdGUuYWN0aXZlTGF5ZXJzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldExheWVySW5mbz17dGhpcy5nZXRMYXllckluZm99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNhdmUtdGVtcGxhdGUtZ3JpZC1pdGVtXCIgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2F2ZVRlbXBsYXRlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e3RoaXMuc2F2ZVRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuYWN0aXZlTGF5ZXJzLmxlbmd0aCA+IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0O1xuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==