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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/scenario-dashboard/src/runtime/LayerComponent/LayerComponent.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/scenario-dashboard/src/runtime/LayerComponent/LayerComponent.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "#layer-component .layer-tabs {\n  margin-top: 10px; }\n\n#layer-component .layer-tabs__content {\n  height: calc(100% - 139px);\n  width: calc(100% - 16px);\n  overflow-y: auto;\n  position: absolute; }\n\n#layer-component #layer-search {\n  margin-top: 10px; }\n  #layer-component #layer-search .dropdown-button:hover {\n    border-color: var(--primary-500); }\n", "",{"version":3,"sources":["webpack://./your-extensions/widgets/scenario-dashboard/src/runtime/LayerComponent/LayerComponent.scss"],"names":[],"mappings":"AAAA;EAEQ,gBAAgB,EAAA;;AAFxB;EAMQ,0BAA0B;EAC1B,wBAAwB;EACxB,gBAAgB;EAChB,kBAAkB,EAAA;;AAT1B;EAaQ,gBAAgB,EAAA;EAbxB;IAgBY,gCAAgC,EAAA","sourcesContent":["#layer-component {\n    .layer-tabs {\n        margin-top: 10px;\n    }\n\n    .layer-tabs__content {\n        height: calc(100% - 139px);\n        width: calc(100% - 16px);\n        overflow-y: auto;\n        position: absolute;\n    }\n\n    #layer-search {\n        margin-top: 10px;\n\n        .dropdown-button:hover {\n            border-color: var(--primary-500);\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/LayerListComponent.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/LayerListComponent.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "#layer-list-component #no-layers-message {\n  background-color: #edf7f9;\n  padding: 5px; }\n\n#layer-list-component .esri-layer-list {\n  height: calc(100vh - 250px);\n  overflow-y: auto;\n  background-color: var(--white); }\n  #layer-list-component .esri-layer-list .esri-layer-list__no-items {\n    display: none; }\n  #layer-list-component .esri-layer-list .esri-layer-list__item {\n    background-color: var(--white); }\n  #layer-list-component .esri-layer-list .esri-layer-list__item-container {\n    padding-left: 0;\n    animation: new-item 5s ease-out;\n    border: none; }\n    #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-label {\n      position: relative;\n      cursor: move; }\n      #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-label .esri-layer-list__item-toggle {\n        position: absolute;\n        height: 100%; }\n      #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-label .esri-layer-list__item-toggle:hover {\n        background-color: var(--secondary-100); }\n      #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-label .esri-layer-list__item-title {\n        margin-left: 25px; }\n      #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-label .esri-icon-non-visible {\n        color: var(--light-800); }\n    #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-label:has(.esri-icon-non-visible) {\n      color: var(--light-800); }\n    #layer-list-component .esri-layer-list .esri-layer-list__item-container .esri-layer-list__item-actions-menu-item--active[aria-label=\"Legend\"] {\n      transform: rotate(180deg); }\n  #layer-list-component .esri-layer-list .esri-layer-list-panel {\n    margin: 0 0 5px 27px;\n    background-color: var(--light); }\n    #layer-list-component .esri-layer-list .esri-layer-list-panel .esri-layer-list-panel__content {\n      padding: 5px 0 5px 10px; }\n    #layer-list-component .esri-layer-list .esri-layer-list-panel .esri-layer-list-panel__content:has(.legend__templates) {\n      border-top: 2px var(--light-300) solid; }\n    #layer-list-component .esri-layer-list .esri-layer-list-panel .esri-legend {\n      background-color: transparent; }\n    #layer-list-component .esri-layer-list .esri-layer-list-panel .esri-legend__service {\n      padding: 0; }\n    #layer-list-component .esri-layer-list .esri-layer-list-panel .esri-legend__layer-child-table {\n      margin: 0; }\n  #layer-list-component .esri-layer-list .esri-layer-list__item-actions {\n    background-color: var(--light); }\n    #layer-list-component .esri-layer-list .esri-layer-list__item-actions .esri-layer-list__item-actions-list .esri-disabled-element,\n    #layer-list-component .esri-layer-list .esri-layer-list__item-actions .esri-layer-list__item-actions-list .esri-disabled-element:hover {\n      color: var(--light-800);\n      cursor: default; }\n\n#layer-list-component #layer-list__buttons {\n  display: grid;\n  grid-template-columns: 1fr 80px;\n  grid-template-rows: repeat(2, 50%); }\n  #layer-list-component #layer-list__buttons button {\n    padding: 3px; }\n  #layer-list-component #layer-list__buttons #clear-all-button-grid-item {\n    grid-column: 1;\n    grid-row: 1;\n    border-bottom: 2px var(--light-300) solid !important; }\n    #layer-list-component #layer-list__buttons #clear-all-button-grid-item #clear-all-button {\n      padding-left: 0; }\n      #layer-list-component #layer-list__buttons #clear-all-button-grid-item #clear-all-button svg {\n        margin-right: 0;\n        margin-bottom: 2px; }\n  #layer-list-component #layer-list__buttons #legend-button-grid-item {\n    grid-column: 2;\n    grid-row: 1;\n    border-bottom: 2px var(--light-300) solid; }\n    #layer-list-component #layer-list__buttons #legend-button-grid-item label {\n      font-size: var(--calcite-font-size--1);\n      position: relative;\n      top: 4px; }\n    #layer-list-component #layer-list__buttons #legend-button-grid-item #legend-button {\n      position: relative;\n      bottom: 2px; }\n  #layer-list-component #layer-list__buttons #layer-visibility-button-grid-item {\n    grid-column: 1;\n    grid-row: 2; }\n\n.color-picker-block {\n  display: inline-block;\n  position: relative;\n  top: 11px;\n  left: 5px; }\n\n.layer-size-slider > input {\n  display: inline-block;\n  width: 65%;\n  position: relative;\n  top: 3px;\n  margin: 0 10px; }\n\n#picture-marker-warning {\n  margin-top: 10px; }\n  #picture-marker-warning div {\n    margin-top: 10px; }\n\n#show-legend-button:hover:not(.disabled), #hide-legend-button:hover:not(.disabled) {\n  color: var(--primary-500); }\n\n#legend-button svg {\n  margin-left: 0.5rem; }\n\n.layer-style-modal.modal-backdrop.fade.show {\n  opacity: 0; }\n", "",{"version":3,"sources":["webpack://./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/LayerListComponent.scss"],"names":[],"mappings":"AAAA;EAEQ,yBAAyB;EACzB,YAAY,EAAA;;AAHpB;EAOQ,2BAA2B;EAC3B,gBAAgB;EAChB,8BAA8B,EAAA;EATtC;IAYY,aAAa,EAAA;EAZzB;IAgBY,8BAA8B,EAAA;EAhB1C;IAoBY,eAAe;IACf,+BAA+B;IAC/B,YAAY,EAAA;IAtBxB;MAyBgB,kBAAkB;MAClB,YAAY,EAAA;MA1B5B;QA6BoB,kBAAkB;QAClB,YAAY,EAAA;MA9BhC;QAkCoB,sCAAsC,EAAA;MAlC1D;QAsCoB,iBAAiB,EAAA;MAtCrC;QA0CoB,uBAAuB,EAAA;IA1C3C;MA+CgB,uBAAuB,EAAA;IA/CvC;MAmDgB,yBAAyB,EAAA;EAnDzC;IAwDY,oBAAoB;IACpB,8BAA8B,EAAA;IAzD1C;MA4DgB,uBAAuB,EAAA;IA5DvC;MAgEgB,sCAAsC,EAAA;IAhEtD;MAoEgB,6BAA6B,EAAA;IApE7C;MAwEgB,UAAU,EAAA;IAxE1B;MA4EgB,SAAS,EAAA;EA5EzB;IAiFY,8BAA8B,EAAA;IAjF1C;;MAqFgB,uBAAuB;MACvB,eAAe,EAAA;;AAtF/B;EA6FQ,aAAa;EACb,+BAA+B;EAC/B,kCAAkC,EAAA;EA/F1C;IAkGY,YAAY,EAAA;EAlGxB;IAsGY,cAAc;IACd,WAAW;IACX,oDAAoD,EAAA;IAxGhE;MA2GgB,eAAe,EAAA;MA3G/B;QA8GoB,eAAe;QACf,kBAAkB,EAAA;EA/GtC;IAqHY,cAAc;IACd,WAAW;IACX,yCAAyC,EAAA;IAvHrD;MA0HgB,sCAAsC;MACtC,kBAAkB;MAClB,QAAQ,EAAA;IA5HxB;MAgIgB,kBAAkB;MAClB,WAAW,EAAA;EAjI3B;IAsIY,cAAc;IACd,WAAW,EAAA;;AAMvB;EACI,qBAAqB;EACrB,kBAAkB;EAClB,SAAS;EACT,SAAS,EAAA;;AAGb;EACI,qBAAqB;EACrB,UAAU;EACV,kBAAkB;EAClB,QAAQ;EACR,cAAc,EAAA;;AAGlB;EACI,gBAAgB,EAAA;EADpB;IAIQ,gBAAgB,EAAA;;AAIxB;EACI,yBAAyB,EAAA;;AAG7B;EACI,mBAAmB,EAAA;;AAGvB;EACI,UAAU,EAAA","sourcesContent":["#layer-list-component {\n    #no-layers-message {\n        background-color: #edf7f9;\n        padding: 5px;\n    }\n\n    .esri-layer-list {\n        height: calc(100vh - 250px);\n        overflow-y: auto;\n        background-color: var(--white);\n\n        .esri-layer-list__no-items {\n            display: none;\n        }\n\n        .esri-layer-list__item {\n            background-color: var(--white);\n        }\n\n        .esri-layer-list__item-container {\n            padding-left: 0;\n            animation: new-item 5s ease-out;\n            border: none;\n\n            .esri-layer-list__item-label {\n                position: relative;\n                cursor: move;\n\n                .esri-layer-list__item-toggle {\n                    position: absolute;\n                    height: 100%;\n                }\n\n                .esri-layer-list__item-toggle:hover {\n                    background-color: var(--secondary-100);\n                }\n\n                .esri-layer-list__item-title {\n                    margin-left: 25px;\n                }\n\n                .esri-icon-non-visible {\n                    color: var(--light-800);\n                }\n            }\n\n            .esri-layer-list__item-label:has(.esri-icon-non-visible) {\n                color: var(--light-800);\n            }\n\n            .esri-layer-list__item-actions-menu-item--active[aria-label=\"Legend\"] {\n                transform: rotate(180deg);\n            }\n        }\n\n        .esri-layer-list-panel {\n            margin: 0 0 5px 27px;\n            background-color: var(--light);\n\n            .esri-layer-list-panel__content {\n                padding: 5px 0 5px 10px;\n            }\n\n            .esri-layer-list-panel__content:has(.legend__templates) {\n                border-top: 2px var(--light-300) solid;\n            }\n\n            .esri-legend {\n                background-color: transparent;\n            }\n\n            .esri-legend__service {\n                padding: 0;\n            }\n\n            .esri-legend__layer-child-table {\n                margin: 0;\n            }\n        }\n\n        .esri-layer-list__item-actions {\n            background-color: var(--light);\n\n            .esri-layer-list__item-actions-list .esri-disabled-element,\n            .esri-layer-list__item-actions-list .esri-disabled-element:hover {\n                color: var(--light-800);\n                cursor: default;\n            }\n        }\n    }\n\n\n    #layer-list__buttons {\n        display: grid;\n        grid-template-columns: 1fr 80px;\n        grid-template-rows: repeat(2, 50%);\n\n        button {\n            padding: 3px;\n        }\n\n        #clear-all-button-grid-item {\n            grid-column: 1;\n            grid-row: 1;\n            border-bottom: 2px var(--light-300) solid !important;\n\n            #clear-all-button {\n                padding-left: 0;\n\n                svg {\n                    margin-right: 0;\n                    margin-bottom: 2px;\n                }\n            }\n        }\n\n        #legend-button-grid-item {\n            grid-column: 2;\n            grid-row: 1;\n            border-bottom: 2px var(--light-300) solid;\n\n            label {\n                font-size: var(--calcite-font-size--1);\n                position: relative;\n                top: 4px;\n            }\n\n            #legend-button {\n                position: relative;\n                bottom: 2px;\n            }\n        }\n\n        #layer-visibility-button-grid-item {\n            grid-column: 1;\n            grid-row: 2;\n        }\n    }\n}\n\n\n.color-picker-block {\n    display: inline-block;\n    position: relative;\n    top: 11px;\n    left: 5px;\n}\n\n.layer-size-slider > input {\n    display: inline-block;\n    width: 65%;\n    position: relative;\n    top: 3px;\n    margin: 0 10px;\n}\n\n#picture-marker-warning {\n    margin-top: 10px;\n\n    div {\n        margin-top: 10px;\n    }\n}\n\n#show-legend-button:hover:not(.disabled), #hide-legend-button:hover:not(.disabled) {\n    color: var(--primary-500);\n}\n\n#legend-button svg {\n    margin-left: 0.5rem;\n}\n\n.layer-style-modal.modal-backdrop.fade.show {\n    opacity: 0;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/TemplateComponent.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/TemplateComponent.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "#template-component {\n  display: block;\n  padding: 10px;\n  background-color: #edf7f9;\n  border: 1px var(--dark-800) solid;\n  border-radius: 5px; }\n  #template-component #template-component__header {\n    margin-bottom: 0.5rem; }\n    #template-component #template-component__header h4 {\n      display: inline; }\n    #template-component #template-component__header #template-component__info {\n      display: inline;\n      position: absolute;\n      margin: 2px 0 0 5px; }\n  #template-component #template-search .dropdown-button:hover {\n    border-color: var(--primary-500); }\n  #template-component #active-templates-menu {\n    height: 55px;\n    overflow-x: auto;\n    overflow-y: hidden;\n    white-space: nowrap;\n    padding-top: 15px; }\n    #template-component #active-templates-menu .scroll-item {\n      max-width: 150px; }\n      #template-component #active-templates-menu .scroll-item .nav-link {\n        color: var(--dark-800);\n        background-color: var(--white);\n        cursor: default;\n        border: 1px var(--dark-800) solid; }\n    #template-component #active-templates-menu .tab-title {\n      margin-top: 2px; }\n    #template-component #active-templates-menu #no-active-templates {\n      padding: 5px 0 0 5px; }\n\n.template-search-item {\n  width: 100%; }\n  .template-search-item .template-search-item__add-button {\n    width: calc(100% - 55px); }\n\n.template-dropdown__content {\n  margin-left: 15px;\n  border-left: 2px var(--light-300) solid; }\n", "",{"version":3,"sources":["webpack://./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/TemplateComponent.scss"],"names":[],"mappings":"AAAA;EACI,cAAc;EACd,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,kBAAkB,EAAA;EALtB;IAQQ,qBAAqB,EAAA;IAR7B;MAWY,eAAe,EAAA;IAX3B;MAeY,eAAe;MACf,kBAAkB;MAClB,mBAAmB,EAAA;EAjB/B;IAuBY,gCAAgC,EAAA;EAvB5C;IA4BQ,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB,EAAA;IAhCzB;MAmCY,gBAAgB,EAAA;MAnC5B;QAsCgB,sBAAsB;QACtB,8BAA8B;QAC9B,eAAe;QACf,iCAAiC,EAAA;IAzCjD;MA8CY,eAAe,EAAA;IA9C3B;MAkDY,oBAAoB,EAAA;;AAMhC;EACI,WAAW,EAAA;EADf;IAIQ,wBAAwB,EAAA;;AAIhC;EACI,iBAAiB;EACjB,uCAAuC,EAAA","sourcesContent":["#template-component {\n    display: block;\n    padding: 10px;\n    background-color: #edf7f9;\n    border: 1px var(--dark-800) solid;\n    border-radius: 5px;\n\n    #template-component__header {\n        margin-bottom: 0.5rem;\n\n        h4 {\n            display: inline;\n        }\n\n        #template-component__info {\n            display: inline;\n            position: absolute;\n            margin: 2px 0 0 5px;\n        }\n    }\n\n    #template-search {\n        .dropdown-button:hover {\n            border-color: var(--primary-500);\n        }\n    }\n\n    #active-templates-menu {\n        height: 55px;\n        overflow-x: auto;\n        overflow-y: hidden;\n        white-space: nowrap;\n        padding-top: 15px;\n\n        .scroll-item {\n            max-width: 150px;\n\n            .nav-link {\n                color: var(--dark-800);\n                background-color: var(--white);\n                cursor: default;\n                border: 1px var(--dark-800) solid;\n            }\n        }\n\n        .tab-title {\n            margin-top: 2px;\n        }\n\n        #no-active-templates {\n            padding: 5px 0 0 5px;\n        }\n    }\n}\n\n\n.template-search-item {\n    width: 100%;\n\n    .template-search-item__add-button {\n        width: calc(100% - 55px);\n    }\n}\n\n.template-dropdown__content {\n    margin-left: 15px;\n    border-left: 2px var(--light-300) solid;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/scenario-dashboard/src/runtime/Widget.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/scenario-dashboard/src/runtime/Widget.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".jimu-widget {\n  position: relative; }\n\n.p-5 {\n  padding: 0.5rem !important; }\n\n/* Grid positioning */\n#scenario-dashboard-grid {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: repeat(2, 50%);\n  font-size: 125% !important; }\n  #scenario-dashboard-grid .grid-item {\n    padding: 0.5rem !important;\n    position: relative; }\n  #scenario-dashboard-grid #template-component__grid-item {\n    grid-column: 1;\n    grid-row: 1; }\n  #scenario-dashboard-grid #layer-component__grid-item {\n    grid-column: 1;\n    grid-row: 2 / 4; }\n  #scenario-dashboard-grid #layer-list__grid-item {\n    grid-column: 2;\n    grid-row: 1 / 3;\n    background-color: var(--white); }\n  #scenario-dashboard-grid #bottom-grid-item {\n    grid-column: 2;\n    grid-row: 3;\n    background-color: var(--white);\n    bottom: 90%; }\n  #scenario-dashboard-grid .loading {\n    height: 80px;\n    width: 200px; }\n\n/* Buttons and icons */\n.add-button {\n  width: 100%;\n  display: block; }\n  .add-button .icon-btn-sizer {\n    justify-content: left;\n    text-align: left; }\n  .add-button .jimu-icon {\n    margin-right: 4px !important;\n    margin-left: 0 !important;\n    margin-bottom: 3px; }\n\n#open-save-template-button {\n  position: absolute;\n  padding: 0rem 0.75rem; }\n  #open-save-template-button .jimu-icon {\n    margin-bottom: 4px; }\n\n.btn-primary {\n  color: var(--dark-800);\n  background-color: var(--secondary-500);\n  border-color: var(--secondary-500); }\n\n.btn-primary:hover {\n  background-color: var(--secondary-200);\n  border-color: var(--secondary-200); }\n\n.advanced-select-menu .select-item-placeholder {\n  margin: 0 !important;\n  width: 0 !important; }\n\n.dropdown-item:hover {\n  background-color: var(--white) !important; }\n\n.multiple-select-tool {\n  display: none !important; }\n\n.jimu-dropdown-item > .jimu-checkbox {\n  display: none !important; }\n\n@keyframes new-item {\n  from {\n    background-color: var(--secondary-100); }\n  50% {\n    background-color: var(--secondary-100); }\n  to {\n    background-color: transparent; } }\n\n.modal-content .menu-navigation .nav-link.active {\n  cursor: default; }\n\n.export-download-link {\n  text-align: center; }\n", "",{"version":3,"sources":["webpack://./your-extensions/widgets/scenario-dashboard/src/runtime/Widget.scss"],"names":[],"mappings":"AAAA;EACI,kBAAkB,EAAA;;AAGtB;EACI,0BAA0B,EAAA;;AAI9B,qBAAA;AACA;EACI,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,qCAAqC;EACrC,0BAA0B,EAAA;EAP9B;IAUQ,0BAA0B;IAC1B,kBAAkB,EAAA;EAX1B;IAeQ,cAAc;IACd,WAAW,EAAA;EAhBnB;IAoBQ,cAAc;IACd,eAAe,EAAA;EArBvB;IAyBQ,cAAc;IACd,eAAe;IACf,8BAA8B,EAAA;EA3BtC;IA+BQ,cAAc;IACd,WAAW;IACX,8BAA8B;IAC9B,WAAW,EAAA;EAlCnB;IAsCQ,YAAY;IACZ,YAAY,EAAA;;AAIpB,sBAAA;AACA;EACI,WAAW;EACX,cAAc,EAAA;EAFlB;IAKQ,qBAAqB;IACrB,gBAAgB,EAAA;EANxB;IAUQ,4BAA4B;IAC5B,yBAAyB;IACzB,kBAAkB,EAAA;;AAI1B;EAII,kBAAkB;EAClB,qBAAqB,EAAA;EALzB;IAEQ,kBAAkB,EAAA;;AAM1B;EACI,sBAAsB;EACtB,sCAAsC;EACtC,kCAAkC,EAAA;;AAGtC;EACI,sCAAsC;EACtC,kCAAkC,EAAA;;AAGtC;EACI,oBAAoB;EACpB,mBAAmB,EAAA;;AAGvB;EACI,yCAAyC,EAAA;;AAG7C;EACI,wBAAwB,EAAA;;AAG5B;EACI,wBAAwB,EAAA;;AAG5B;EACI;IAAM,sCAAsC,EAAA;EAC5C;IAAK,sCAAsC,EAAA;EAC3C;IAAI,6BAA6B,EAAA,EAAA;;AAGrC;EACI,eAAe,EAAA;;AAGnB;EACI,kBAAkB,EAAA","sourcesContent":[".jimu-widget {\n    position: relative;\n}\n\n.p-5 {\n    padding: 0.5rem !important;\n}\n\n\n/* Grid positioning */\n#scenario-dashboard-grid {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n    font-size: 125% !important;\n\n    .grid-item {\n        padding: 0.5rem !important;\n        position: relative;\n    }\n\n    #template-component__grid-item {\n        grid-column: 1;\n        grid-row: 1;\n    }\n\n    #layer-component__grid-item {\n        grid-column: 1;\n        grid-row: 2 / 4;\n    }\n\n    #layer-list__grid-item {\n        grid-column: 2;\n        grid-row: 1 / 3;\n        background-color: var(--white);\n    }\n\n    #bottom-grid-item {\n        grid-column: 2;\n        grid-row: 3;\n        background-color: var(--white);\n        bottom: 90%;\n    }\n\n    .loading {\n        height: 80px;\n        width: 200px;\n    }\n}\n\n/* Buttons and icons */\n.add-button {\n    width: 100%;\n    display: block;\n\n    .icon-btn-sizer {\n        justify-content: left;\n        text-align: left;\n    }\n\n    .jimu-icon {\n        margin-right: 4px !important;\n        margin-left: 0 !important;\n        margin-bottom: 3px;\n    }\n}\n\n#open-save-template-button {\n    .jimu-icon {\n        margin-bottom: 4px;\n    }\n    position: absolute;\n    padding: 0rem 0.75rem;\n}\n\n.btn-primary {\n    color: var(--dark-800);\n    background-color: var(--secondary-500);\n    border-color: var(--secondary-500);\n}\n\n.btn-primary:hover {\n    background-color: var(--secondary-200);\n    border-color: var(--secondary-200);\n}\n\n.advanced-select-menu .select-item-placeholder {\n    margin: 0 !important;\n    width: 0 !important;\n}\n\n.dropdown-item:hover {\n    background-color: var(--white) !important;\n}\n\n.multiple-select-tool {\n    display: none !important;\n}\n\n.jimu-dropdown-item > .jimu-checkbox {\n    display: none !important;\n}\n\n@keyframes new-item {\n    from {background-color: var(--secondary-100)}\n    50% {background-color: var(--secondary-100)}\n    to {background-color: transparent}\n}\n\n.modal-content .menu-navigation .nav-link.active {\n    cursor: default;\n}\n\n.export-download-link {\n    text-align: center;\n}"],"sourceRoot":""}]);
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

/***/ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerComponent/LayerComponent.scss":
/*!***************************************************************************************************!*\
  !*** ./your-extensions/widgets/scenario-dashboard/src/runtime/LayerComponent/LayerComponent.scss ***!
  \***************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerComponent_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./LayerComponent.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/scenario-dashboard/src/runtime/LayerComponent/LayerComponent.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/LayerListComponent.scss":
/*!***********************************************************************************************************!*\
  !*** ./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/LayerListComponent.scss ***!
  \***********************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerListComponent_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./LayerListComponent.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/LayerListComponent.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerListComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerListComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerListComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_LayerListComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/TemplateComponent.scss":
/*!*********************************************************************************************************!*\
  !*** ./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/TemplateComponent.scss ***!
  \*********************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_TemplateComponent_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./TemplateComponent.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/TemplateComponent.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_TemplateComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_TemplateComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_TemplateComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_TemplateComponent_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./your-extensions/widgets/scenario-dashboard/src/runtime/Widget.scss":
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/scenario-dashboard/src/runtime/Widget.scss ***!
  \****************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_Widget_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./Widget.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/scenario-dashboard/src/runtime/Widget.scss");

      
      
      
      
      
      
      
      
      

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

/***/ "./your-extensions/widgets/scenario-dashboard/src/runtime/ExportCSVComponent.tsx":
/*!***************************************************************************************!*\
  !*** ./your-extensions/widgets/scenario-dashboard/src/runtime/ExportCSVComponent.tsx ***!
  \***************************************************************************************/
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
                text: "Export Done!",
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
                            this.statusMessage(),
                            (this.props.downloadLink && this.props.downloadLink.length > 0) &&
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { class: "export-download-link" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Link, { to: this.props.downloadLink, target: "_blank" },
                                        "Download csv",
                                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: "https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/arrow-circle-down-24.svg" })),
                                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "If item does not exist or is inaccessible, try link again.")))),
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, null,
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: this.onClosed }, "Close"))))));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExportCSVComponent);


/***/ }),

/***/ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerComponent/AddLayerItem.tsx":
/*!************************************************************************************************!*\
  !*** ./your-extensions/widgets/scenario-dashboard/src/runtime/LayerComponent/AddLayerItem.tsx ***!
  \************************************************************************************************/
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

/***/ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerComponent/LayerComponent.tsx":
/*!**************************************************************************************************!*\
  !*** ./your-extensions/widgets/scenario-dashboard/src/runtime/LayerComponent/LayerComponent.tsx ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LayerComponent_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayerComponent.scss */ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerComponent/LayerComponent.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _LayerSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LayerSearch */ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerComponent/LayerSearch.tsx");
/* harmony import */ var _AddLayerItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddLayerItem */ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerComponent/AddLayerItem.tsx");





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

/***/ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerComponent/LayerSearch.tsx":
/*!***********************************************************************************************!*\
  !*** ./your-extensions/widgets/scenario-dashboard/src/runtime/LayerComponent/LayerSearch.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _AddLayerItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddLayerItem */ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerComponent/AddLayerItem.tsx");



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

/***/ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/LayerListButtons.tsx":
/*!********************************************************************************************************!*\
  !*** ./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/LayerListButtons.tsx ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LayerListComponent_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayerListComponent.scss */ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/LayerListComponent.scss");
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

/***/ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/LayerListComponent.tsx":
/*!**********************************************************************************************************!*\
  !*** ./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/LayerListComponent.tsx ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LayerListComponent_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayerListComponent.scss */ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/LayerListComponent.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var esri_widgets_LayerList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/widgets/LayerList */ "esri/widgets/LayerList");
/* harmony import */ var _LayerStyleModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LayerStyleModal */ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/LayerStyleModal.tsx");
/* harmony import */ var esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/core/reactiveUtils */ "esri/core/reactiveUtils");
/* harmony import */ var _LayerListButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LayerListButtons */ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/LayerListButtons.tsx");
/* harmony import */ var _MoreInfoModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MoreInfoModal */ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/MoreInfoModal.tsx");
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

/***/ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/LayerStyleModal.tsx":
/*!*******************************************************************************************************!*\
  !*** ./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/LayerStyleModal.tsx ***!
  \*******************************************************************************************************/
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

/***/ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/MoreInfoModal.tsx":
/*!*****************************************************************************************************!*\
  !*** ./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/MoreInfoModal.tsx ***!
  \*****************************************************************************************************/
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

/***/ "./your-extensions/widgets/scenario-dashboard/src/runtime/SaveTemplateComponent.tsx":
/*!******************************************************************************************!*\
  !*** ./your-extensions/widgets/scenario-dashboard/src/runtime/SaveTemplateComponent.tsx ***!
  \******************************************************************************************/
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

/***/ "./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/ActiveTemplatesMenu.tsx":
/*!**********************************************************************************************************!*\
  !*** ./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/ActiveTemplatesMenu.tsx ***!
  \**********************************************************************************************************/
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

/***/ "./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/AddTemplateItem.tsx":
/*!******************************************************************************************************!*\
  !*** ./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/AddTemplateItem.tsx ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _LayerComponent_AddLayerItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LayerComponent/AddLayerItem */ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerComponent/AddLayerItem.tsx");
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

/***/ "./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/TemplateComponent.tsx":
/*!********************************************************************************************************!*\
  !*** ./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/TemplateComponent.tsx ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateComponent_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemplateComponent.scss */ "./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/TemplateComponent.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _TemplateSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TemplateSearch */ "./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/TemplateSearch.tsx");
/* harmony import */ var _ActiveTemplatesMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActiveTemplatesMenu */ "./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/ActiveTemplatesMenu.tsx");





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

/***/ "./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/TemplateSearch.tsx":
/*!*****************************************************************************************************!*\
  !*** ./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/TemplateSearch.tsx ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _AddTemplateItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddTemplateItem */ "./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/AddTemplateItem.tsx");



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
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/scenario-dashboard/src/runtime/widget.tsx ***!
  \***************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__set_webpack_public_path__": () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Widget_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget.scss */ "./your-extensions/widgets/scenario-dashboard/src/runtime/Widget.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/layers/FeatureLayer */ "esri/layers/FeatureLayer");
/* harmony import */ var esri_layers_Layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/layers/Layer */ "esri/layers/Layer");
/* harmony import */ var esri_Basemap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/Basemap */ "esri/Basemap");
/* harmony import */ var _esri_arcgis_rest_feature_layer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @esri/arcgis-rest-feature-layer */ "./node_modules/@esri/arcgis-rest-feature-layer/dist/esm/add.js");
/* harmony import */ var esri_identity_OAuthInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/identity/OAuthInfo */ "esri/identity/OAuthInfo");
/* harmony import */ var esri_identity_IdentityManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri/identity/IdentityManager */ "esri/identity/IdentityManager");
/* harmony import */ var _LayerComponent_LayerComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LayerComponent/LayerComponent */ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerComponent/LayerComponent.tsx");
/* harmony import */ var _SaveTemplateComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SaveTemplateComponent */ "./your-extensions/widgets/scenario-dashboard/src/runtime/SaveTemplateComponent.tsx");
/* harmony import */ var _LayerListComponent_LayerListComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LayerListComponent/LayerListComponent */ "./your-extensions/widgets/scenario-dashboard/src/runtime/LayerListComponent/LayerListComponent.tsx");
/* harmony import */ var _TemplateComponent_TemplateComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TemplateComponent/TemplateComponent */ "./your-extensions/widgets/scenario-dashboard/src/runtime/TemplateComponent/TemplateComponent.tsx");
/* harmony import */ var _ExportCSVComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ExportCSVComponent */ "./your-extensions/widgets/scenario-dashboard/src/runtime/ExportCSVComponent.tsx");
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
            // Remove old values from exportDownloadLink
            this.setState({ exportDownloadLink: "" });
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
                        this.setState({ exportStatus: "Completed" });
                        this.setState({ exportDownloadLink: `${contentResponseJson.value.url}/data?token=${token}` });
                        return;
                    }
                }
                else {
                    this.setState({ exportStatus: "Failed" });
                    console.log(statusJson);
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
                // Filter out layers hosted on custom GIS servers
                let servicesMatch = "https://services";
                if (url.substring(0, servicesMatch.length) != servicesMatch) {
                    return;
                }
                if (url.match)
                    if (url.match(/FeatureServer\/?$/)) {
                        if (!url.endsWith('/')) {
                            url = url + '/';
                        }
                        if (layerWrapper.layer.layerId) {
                            url = url + layerWrapper.layer.layerId;
                        }
                        else {
                            url = url + '0';
                        }
                    }
                return { url };
            });
        };
        /**
         * Creates a unique name for the ExtractData file
         * @returns string
         */
        this.buildOutputName = () => {
            return '{"itemProperties":{"description":"Dataset extracted from Scenario Dashboard.","snippet":"Dataset generated from Extract Data","title":"Scenario-Dashboard-ExtractedData-' + Date.now().toString() + '","folderId":""}}';
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
            exportStatus: "",
            exportDownloadLink: ""
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
            react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { id: "scenario-dashboard-grid" },
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
                        react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_ExportCSVComponent__WEBPACK_IMPORTED_MODULE_13__["default"], { onExportData: this.onExportData, status: this.state.exportStatus, downloadLink: this.state.exportDownloadLink })),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zY2VuYXJpby1kYXNoYm9hcmQvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDaUM7QUFDaUQ7QUFDbEY7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvQ0FBb0MsY0FBYztBQUNyRSxxQkFBcUI7QUFDckIsTUFBTTtBQUNOLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsY0FBYyxtRUFBUTtBQUN0QjtBQUNBLGtCQUFrQiw2RUFBa0Isd0ZBQXdGLFFBQVEsK0NBQVEsR0FBRywwQkFBMEI7QUFDekssV0FBVyxrRUFBTztBQUNsQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCLHNDQUFzQyxrQkFBa0I7QUFDbkYsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGNBQWM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsNkNBQTZDLFFBQVE7QUFDckQ7QUFDQTtBQUNBO0FBQ087QUFDUCxvQ0FB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Q0FBRyxDQUFDLENBQUMsRUFDL0MsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQ3pCLGFBQWEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQ3JDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFDekMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUN2QyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUMvQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FDakMsQ0FDTCxDQUVIO2dCQUNOLHFFQUFLLEVBQUUsRUFBQyxrQkFBa0IsRUFBQyxTQUFTLEVBQUMsV0FBVztvQkFDNUM7d0JBQ0ksNERBQUMsNERBQWtCLElBQ2YsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDL0IsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQzdDLENBQ0E7b0JBQ047d0JBQ0ksNERBQUMsK0RBQXFCLElBQ2xCLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUM5QixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsR0FDMUMsQ0FDQSxDQUNKLENBQ0osQ0FDSixDQUNULENBQUM7SUFDTixDQUFDO0NBQ0o7QUFFRCxpRUFBZSxNQUFNLEVBQUM7QUFDZCxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvYXJjZ2lzLXJlc3QtZmVhdHVyZS1sYXllci9kaXN0L2VzbS9hZGQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1mZWF0dXJlLWxheWVyL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0L2Rpc3QvZXNtL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0L2Rpc3QvZXNtL3V0aWxzL0FyY0dJU1JlcXVlc3RFcnJvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3QvZGlzdC9lc20vdXRpbHMvYXBwZW5kLWN1c3RvbS1wYXJhbXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0L2Rpc3QvZXNtL3V0aWxzL2NsZWFuLXVybC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3QvZGlzdC9lc20vdXRpbHMvZW5jb2RlLWZvcm0tZGF0YS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3QvZGlzdC9lc20vdXRpbHMvZW5jb2RlLXF1ZXJ5LXN0cmluZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3QvZGlzdC9lc20vdXRpbHMvcHJvY2Vzcy1wYXJhbXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0L2Rpc3QvZXNtL3V0aWxzL3dhcm4uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0L25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NjZW5hcmlvLWRhc2hib2FyZC9zcmMvcnVudGltZS9MYXllckNvbXBvbmVudC9MYXllckNvbXBvbmVudC5zY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zY2VuYXJpby1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvTGF5ZXJMaXN0Q29tcG9uZW50L0xheWVyTGlzdENvbXBvbmVudC5zY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zY2VuYXJpby1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvVGVtcGxhdGVDb21wb25lbnQvVGVtcGxhdGVDb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2NlbmFyaW8tZGFzaGJvYXJkL3NyYy9ydW50aW1lL1dpZGdldC5zY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2NlbmFyaW8tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyQ29tcG9uZW50L0xheWVyQ29tcG9uZW50LnNjc3M/ZjY1YiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2NlbmFyaW8tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyTGlzdENvbXBvbmVudC9MYXllckxpc3RDb21wb25lbnQuc2Nzcz83YzJjIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zY2VuYXJpby1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvVGVtcGxhdGVDb21wb25lbnQvVGVtcGxhdGVDb21wb25lbnQuc2Nzcz84YjgxIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zY2VuYXJpby1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvV2lkZ2V0LnNjc3M/NWQ3MSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zY2VuYXJpby1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvRXhwb3J0Q1NWQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2NlbmFyaW8tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyQ29tcG9uZW50L0FkZExheWVySXRlbS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NjZW5hcmlvLWRhc2hib2FyZC9zcmMvcnVudGltZS9MYXllckNvbXBvbmVudC9MYXllckNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NjZW5hcmlvLWRhc2hib2FyZC9zcmMvcnVudGltZS9MYXllckNvbXBvbmVudC9MYXllclNlYXJjaC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NjZW5hcmlvLWRhc2hib2FyZC9zcmMvcnVudGltZS9MYXllckxpc3RDb21wb25lbnQvTGF5ZXJMaXN0QnV0dG9ucy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NjZW5hcmlvLWRhc2hib2FyZC9zcmMvcnVudGltZS9MYXllckxpc3RDb21wb25lbnQvTGF5ZXJMaXN0Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2NlbmFyaW8tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyTGlzdENvbXBvbmVudC9MYXllclN0eWxlTW9kYWwudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zY2VuYXJpby1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvTGF5ZXJMaXN0Q29tcG9uZW50L01vcmVJbmZvTW9kYWwudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zY2VuYXJpby1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvU2F2ZVRlbXBsYXRlQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2NlbmFyaW8tZGFzaGJvYXJkL3NyYy9ydW50aW1lL1RlbXBsYXRlQ29tcG9uZW50L0FjdGl2ZVRlbXBsYXRlc01lbnUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zY2VuYXJpby1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvVGVtcGxhdGVDb21wb25lbnQvQWRkVGVtcGxhdGVJdGVtLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2NlbmFyaW8tZGFzaGJvYXJkL3NyYy9ydW50aW1lL1RlbXBsYXRlQ29tcG9uZW50L1RlbXBsYXRlQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2NlbmFyaW8tZGFzaGJvYXJkL3NyYy9ydW50aW1lL1RlbXBsYXRlQ29tcG9uZW50L1RlbXBsYXRlU2VhcmNoLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvQmFzZW1hcFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9Db2xvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9jb3JlL3JlYWN0aXZlVXRpbHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvaWRlbnRpdHkvSWRlbnRpdHlNYW5hZ2VyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2lkZW50aXR5L09BdXRoSW5mb1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9MYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9yZW5kZXJlcnMvU2ltcGxlUmVuZGVyZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvc3ltYm9scy9TaW1wbGVNYXJrZXJTeW1ib2xcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9MYXllckxpc3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYmFzaWMvY29sb3ItcGlja2VyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NjZW5hcmlvLWRhc2hib2FyZC9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAoYykgMjAxNyBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgcmVxdWVzdCwgY2xlYW5VcmwsIGFwcGVuZEN1c3RvbVBhcmFtcyB9IGZyb20gXCJAZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0XCI7XG4vKipcbiAqIGBgYGpzXG4gKiBpbXBvcnQgeyBhZGRGZWF0dXJlcyB9IGZyb20gJ0Blc3JpL2FyY2dpcy1yZXN0LWZlYXR1cmUtbGF5ZXInO1xuICogLy9cbiAqIGFkZEZlYXR1cmVzKHtcbiAqICAgdXJsOiBcImh0dHBzOi8vc2FtcGxlc2VydmVyNi5hcmNnaXNvbmxpbmUuY29tL2FyY2dpcy9yZXN0L3NlcnZpY2VzL1NlcnZpY2VSZXF1ZXN0L0ZlYXR1cmVTZXJ2ZXIvMFwiLFxuICogICBmZWF0dXJlczogW3tcbiAqICAgICBnZW9tZXRyeTogeyB4OiAtMTIwLCB5OiA0NSwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gfSxcbiAqICAgICBhdHRyaWJ1dGVzOiB7IHN0YXR1czogXCJhbGl2ZVwiIH1cbiAqICAgfV1cbiAqIH0pXG4gKiAgIC50aGVuKHJlc3BvbnNlKVxuICogYGBgXG4gKiBBZGQgZmVhdHVyZXMgcmVxdWVzdC4gU2VlIHRoZSBbUkVTVCBEb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuYXJjZ2lzLmNvbS9yZXN0L3NlcnZpY2VzLXJlZmVyZW5jZS9hZGQtZmVhdHVyZXMuaHRtKSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcGFyYW0gcmVxdWVzdE9wdGlvbnMgLSBPcHRpb25zIGZvciB0aGUgcmVxdWVzdC5cbiAqIEByZXR1cm5zIEEgUHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB3aXRoIHRoZSBhZGRGZWF0dXJlcyByZXNwb25zZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEZlYXR1cmVzKHJlcXVlc3RPcHRpb25zKSB7XG4gICAgdmFyIHVybCA9IGNsZWFuVXJsKHJlcXVlc3RPcHRpb25zLnVybCkgKyBcIi9hZGRGZWF0dXJlc1wiO1xuICAgIC8vIGVkaXQgb3BlcmF0aW9ucyBhcmUgUE9TVCBvbmx5XG4gICAgdmFyIG9wdGlvbnMgPSBhcHBlbmRDdXN0b21QYXJhbXMocmVxdWVzdE9wdGlvbnMsIFtcImZlYXR1cmVzXCIsIFwiZ2RiVmVyc2lvblwiLCBcInJldHVybkVkaXRNb21lbnRcIiwgXCJyb2xsYmFja09uRmFpbHVyZVwiXSwgeyBwYXJhbXM6IF9fYXNzaWduKHt9LCByZXF1ZXN0T3B0aW9ucy5wYXJhbXMpIH0pO1xuICAgIHJldHVybiByZXF1ZXN0KHVybCwgb3B0aW9ucyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGQuanMubWFwIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY3JlYXRlQmluZGluZyhvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgZW5jb2RlRm9ybURhdGEgfSBmcm9tIFwiLi91dGlscy9lbmNvZGUtZm9ybS1kYXRhXCI7XG5pbXBvcnQgeyBlbmNvZGVRdWVyeVN0cmluZyB9IGZyb20gXCIuL3V0aWxzL2VuY29kZS1xdWVyeS1zdHJpbmdcIjtcbmltcG9ydCB7IHJlcXVpcmVzRm9ybURhdGEgfSBmcm9tIFwiLi91dGlscy9wcm9jZXNzLXBhcmFtc1wiO1xuaW1wb3J0IHsgQXJjR0lTUmVxdWVzdEVycm9yIH0gZnJvbSBcIi4vdXRpbHMvQXJjR0lTUmVxdWVzdEVycm9yXCI7XG5pbXBvcnQgeyB3YXJuIH0gZnJvbSBcIi4vdXRpbHMvd2FyblwiO1xuZXhwb3J0IHZhciBOT0RFSlNfREVGQVVMVF9SRUZFUkVSX0hFQURFUiA9IFwiQGVzcmkvYXJjZ2lzLXJlc3QtanNcIjtcbnZhciBERUZBVUxUX0FSQ0dJU19SRVFVRVNUX09QVElPTlMgPSB7XG4gICAgaHR0cE1ldGhvZDogXCJQT1NUXCIsXG4gICAgcGFyYW1zOiB7XG4gICAgICAgIGY6IFwianNvblwiLFxuICAgIH0sXG59O1xuLyoqXG4gKiBTZXRzIHRoZSBkZWZhdWx0IG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbiAqKmFsbCByZXF1ZXN0cyBhY3Jvc3MgYWxsIGBAZXNyaS9hcmNnaXMtcmVzdC1qc2AgbW9kdWxlcyoqLlxuICpcbiAqXG4gKiBgYGBqc1xuICogaW1wb3J0IHsgc2V0RGVmYXVsdFJlcXVlc3RPcHRpb25zIH0gZnJvbSBcIkBlc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3RcIjtcbiAqIHNldERlZmF1bHRSZXF1ZXN0T3B0aW9ucyh7XG4gKiAgIGF1dGhlbnRpY2F0aW9uOiB1c2VyU2Vzc2lvbiAvLyBhbGwgcmVxdWVzdHMgd2lsbCB1c2UgdGhpcyBzZXNzaW9uIGJ5IGRlZmF1bHRcbiAqIH0pXG4gKiBgYGBcbiAqIFlvdSBzaG91bGQgKipuZXZlcioqIHNldCBhIGRlZmF1bHQgYGF1dGhlbnRpY2F0aW9uYCB3aGVuIHlvdSBhcmUgaW4gYSBzZXJ2ZXIgc2lkZSBlbnZpcm9ubWVudCB3aGVyZSB5b3UgbWF5IGJlIGhhbmRsaW5nIHJlcXVlc3RzIGZvciBtYW55IGRpZmZlcmVudCBhdXRoZW50aWNhdGVkIHVzZXJzLlxuICpcbiAqIEBwYXJhbSBvcHRpb25zIFRoZSBkZWZhdWx0IG9wdGlvbnMgdG8gcGFzcyB3aXRoIGV2ZXJ5IHJlcXVlc3QuIEV4aXN0aW5nIGRlZmF1bHQgd2lsbCBiZSBvdmVyd3JpdHRlbi5cbiAqIEBwYXJhbSBoaWRlV2FybmluZ3MgU2lsZW5jZSB3YXJuaW5ncyBhYm91dCBzZXR0aW5nIGRlZmF1bHQgYGF1dGhlbnRpY2F0aW9uYCBpbiBzaGFyZWQgZW52aXJvbm1lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdFJlcXVlc3RPcHRpb25zKG9wdGlvbnMsIGhpZGVXYXJuaW5ncykge1xuICAgIGlmIChvcHRpb25zLmF1dGhlbnRpY2F0aW9uICYmICFoaWRlV2FybmluZ3MpIHtcbiAgICAgICAgd2FybihcIllvdSBzaG91bGQgbm90IHNldCBgYXV0aGVudGljYXRpb25gIGFzIGEgZGVmYXVsdCBpbiBhIHNoYXJlZCBlbnZpcm9ubWVudCBzdWNoIGFzIGEgd2ViIHNlcnZlciB3aGljaCB3aWxsIHByb2Nlc3MgbXVsdGlwbGUgdXNlcnMgcmVxdWVzdHMuIFlvdSBjYW4gY2FsbCBgc2V0RGVmYXVsdFJlcXVlc3RPcHRpb25zYCB3aXRoIGB0cnVlYCBhcyBhIHNlY29uZCBhcmd1bWVudCB0byBkaXNhYmxlIHRoaXMgd2FybmluZy5cIik7XG4gICAgfVxuICAgIERFRkFVTFRfQVJDR0lTX1JFUVVFU1RfT1BUSU9OUyA9IG9wdGlvbnM7XG59XG52YXIgQXJjR0lTQXV0aEVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcmNHSVNBdXRoRXJyb3IsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBcmNHSVNBdXRoRXJyb3JgICBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBlcnJvciBtZXNzYWdlIGZyb20gdGhlIEFQSVxuICAgICAqIEBwYXJhbSBjb2RlIC0gVGhlIGVycm9yIGNvZGUgZnJvbSB0aGUgQVBJXG4gICAgICogQHBhcmFtIHJlc3BvbnNlIC0gVGhlIG9yaWdpbmFsIHJlc3BvbnNlIGZyb20gdGhlIEFQSSB0aGF0IGNhdXNlZCB0aGUgZXJyb3JcbiAgICAgKiBAcGFyYW0gdXJsIC0gVGhlIG9yaWdpbmFsIHVybCBvZiB0aGUgcmVxdWVzdFxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9yaWdpbmFsIG9wdGlvbnMgb2YgdGhlIHJlcXVlc3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBBcmNHSVNBdXRoRXJyb3IobWVzc2FnZSwgY29kZSwgcmVzcG9uc2UsIHVybCwgb3B0aW9ucykge1xuICAgICAgICBpZiAobWVzc2FnZSA9PT0gdm9pZCAwKSB7IG1lc3NhZ2UgPSBcIkFVVEhFTlRJQ0FUSU9OX0VSUk9SXCI7IH1cbiAgICAgICAgaWYgKGNvZGUgPT09IHZvaWQgMCkgeyBjb2RlID0gXCJBVVRIRU5USUNBVElPTl9FUlJPUl9DT0RFXCI7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbWVzc2FnZSwgY29kZSwgcmVzcG9uc2UsIHVybCwgb3B0aW9ucykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubmFtZSA9IFwiQXJjR0lTQXV0aEVycm9yXCI7XG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPVxuICAgICAgICAgICAgY29kZSA9PT0gXCJBVVRIRU5USUNBVElPTl9FUlJPUl9DT0RFXCIgPyBtZXNzYWdlIDogY29kZSArIFwiOiBcIiArIG1lc3NhZ2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQXJjR0lTQXV0aEVycm9yLnByb3RvdHlwZS5yZXRyeSA9IGZ1bmN0aW9uIChnZXRTZXNzaW9uLCByZXRyeUxpbWl0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChyZXRyeUxpbWl0ID09PSB2b2lkIDApIHsgcmV0cnlMaW1pdCA9IDM7IH1cbiAgICAgICAgdmFyIHRyaWVzID0gMDtcbiAgICAgICAgdmFyIHJldHJ5UmVxdWVzdCA9IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGdldFNlc3Npb24oX3RoaXMudXJsLCBfdGhpcy5vcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChzZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld09wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgX3RoaXMub3B0aW9ucyksIHsgYXV0aGVudGljYXRpb246IHNlc3Npb24gfSk7XG4gICAgICAgICAgICAgICAgdHJpZXMgPSB0cmllcyArIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoX3RoaXMudXJsLCBuZXdPcHRpb25zKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLm5hbWUgPT09IFwiQXJjR0lTQXV0aEVycm9yXCIgJiYgdHJpZXMgPCByZXRyeUxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHJ5UmVxdWVzdChyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlLm5hbWUgPT09IFwiQXJjR0lTQXV0aEVycm9yXCIgJiYgdHJpZXMgPj0gcmV0cnlMaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoX3RoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcmV0cnlSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEFyY0dJU0F1dGhFcnJvcjtcbn0oQXJjR0lTUmVxdWVzdEVycm9yKSk7XG5leHBvcnQgeyBBcmNHSVNBdXRoRXJyb3IgfTtcbi8qKlxuICogQ2hlY2tzIGZvciBlcnJvcnMgaW4gYSBKU09OIHJlc3BvbnNlIGZyb20gdGhlIEFyY0dJUyBSRVNUIEFQSS4gSWYgdGhlcmUgYXJlIG5vIGVycm9ycywgaXQgd2lsbCByZXR1cm4gdGhlIGBkYXRhYCBwYXNzZWQgaW4uIElmIHRoZXJlIGlzIGFuIGVycm9yLCBpdCB3aWxsIHRocm93IGFuIGBBcmNHSVNSZXF1ZXN0RXJyb3JgIG9yIGBBcmNHSVNBdXRoRXJyb3JgLlxuICpcbiAqIEBwYXJhbSBkYXRhIFRoZSByZXNwb25zZSBKU09OIHRvIGNoZWNrIGZvciBlcnJvcnMuXG4gKiBAcGFyYW0gdXJsIFRoZSB1cmwgb2YgdGhlIG9yaWdpbmFsIHJlcXVlc3RcbiAqIEBwYXJhbSBwYXJhbXMgVGhlIHBhcmFtZXRlcnMgb2YgdGhlIG9yaWdpbmFsIHJlcXVlc3RcbiAqIEBwYXJhbSBvcHRpb25zIFRoZSBvcHRpb25zIG9mIHRoZSBvcmlnaW5hbCByZXF1ZXN0XG4gKiBAcmV0dXJucyBUaGUgZGF0YSB0aGF0IHdhcyBwYXNzZWQgaW4gdGhlIGBkYXRhYCBwYXJhbWV0ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRm9yRXJyb3JzKHJlc3BvbnNlLCB1cmwsIHBhcmFtcywgb3B0aW9ucywgb3JpZ2luYWxBdXRoRXJyb3IpIHtcbiAgICAvLyB0aGlzIGlzIGFuIGVycm9yIG1lc3NhZ2UgZnJvbSBiaWxsaW5nLmFyY2dpcy5jb20gYmFja2VuZFxuICAgIGlmIChyZXNwb25zZS5jb2RlID49IDQwMCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHJlc3BvbnNlLm1lc3NhZ2UsIGNvZGUgPSByZXNwb25zZS5jb2RlO1xuICAgICAgICB0aHJvdyBuZXcgQXJjR0lTUmVxdWVzdEVycm9yKG1lc3NhZ2UsIGNvZGUsIHJlc3BvbnNlLCB1cmwsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBlcnJvciBmcm9tIEFyY0dJUyBPbmxpbmUgb3IgYW4gQXJjR0lTIFBvcnRhbCBvciBzZXJ2ZXIgaW5zdGFuY2UuXG4gICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgIHZhciBfYSA9IHJlc3BvbnNlLmVycm9yLCBtZXNzYWdlID0gX2EubWVzc2FnZSwgY29kZSA9IF9hLmNvZGUsIG1lc3NhZ2VDb2RlID0gX2EubWVzc2FnZUNvZGU7XG4gICAgICAgIHZhciBlcnJvckNvZGUgPSBtZXNzYWdlQ29kZSB8fCBjb2RlIHx8IFwiVU5LTk9XTl9FUlJPUl9DT0RFXCI7XG4gICAgICAgIGlmIChjb2RlID09PSA0OTggfHxcbiAgICAgICAgICAgIGNvZGUgPT09IDQ5OSB8fFxuICAgICAgICAgICAgbWVzc2FnZUNvZGUgPT09IFwiR1dNXzAwMDNcIiB8fFxuICAgICAgICAgICAgKGNvZGUgPT09IDQwMCAmJiBtZXNzYWdlID09PSBcIlVuYWJsZSB0byBnZW5lcmF0ZSB0b2tlbi5cIikpIHtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbEF1dGhFcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG9yaWdpbmFsQXV0aEVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEFyY0dJU0F1dGhFcnJvcihtZXNzYWdlLCBlcnJvckNvZGUsIHJlc3BvbnNlLCB1cmwsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBBcmNHSVNSZXF1ZXN0RXJyb3IobWVzc2FnZSwgZXJyb3JDb2RlLCByZXNwb25zZSwgdXJsLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLy8gZXJyb3IgZnJvbSBhIHN0YXR1cyBjaGVja1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IFwiZmFpbGVkXCIgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSBcImZhaWx1cmVcIikge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHZvaWQgMDtcbiAgICAgICAgdmFyIGNvZGUgPSBcIlVOS05PV05fRVJST1JfQ09ERVwiO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IEpTT04ucGFyc2UocmVzcG9uc2Uuc3RhdHVzTWVzc2FnZSkubWVzc2FnZTtcbiAgICAgICAgICAgIGNvZGUgPSBKU09OLnBhcnNlKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2UpLmNvZGU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSByZXNwb25zZS5zdGF0dXNNZXNzYWdlIHx8IHJlc3BvbnNlLm1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEFyY0dJU1JlcXVlc3RFcnJvcihtZXNzYWdlLCBjb2RlLCByZXNwb25zZSwgdXJsLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xufVxuLyoqXG4gKiBgYGBqc1xuICogaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJ0Blc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3QnO1xuICogLy9cbiAqIHJlcXVlc3QoJ2h0dHBzOi8vd3d3LmFyY2dpcy5jb20vc2hhcmluZy9yZXN0JylcbiAqICAgLnRoZW4ocmVzcG9uc2UpIC8vIHJlc3BvbnNlLmN1cnJlbnRWZXJzaW9uID09PSA1LjJcbiAqIC8vXG4gKiByZXF1ZXN0KCdodHRwczovL3d3dy5hcmNnaXMuY29tL3NoYXJpbmcvcmVzdCcsIHtcbiAqICAgaHR0cE1ldGhvZDogXCJHRVRcIlxuICogfSlcbiAqIC8vXG4gKiByZXF1ZXN0KCdodHRwczovL3d3dy5hcmNnaXMuY29tL3NoYXJpbmcvcmVzdC9zZWFyY2gnLCB7XG4gKiAgIHBhcmFtczogeyBxOiAncGFya3MnIH1cbiAqIH0pXG4gKiAgIC50aGVuKHJlc3BvbnNlKSAvLyByZXNwb25zZS50b3RhbCA9PiA3ODM3OVxuICogYGBgXG4gKiBHZW5lcmljIG1ldGhvZCBmb3IgbWFraW5nIEhUVFAgcmVxdWVzdHMgdG8gQXJjR0lTIFJFU1QgQVBJIGVuZHBvaW50cy5cbiAqXG4gKiBAcGFyYW0gdXJsIC0gVGhlIFVSTCBvZiB0aGUgQXJjR0lTIFJFU1QgQVBJIGVuZHBvaW50LlxuICogQHBhcmFtIHJlcXVlc3RPcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIHJlcXVlc3QsIGluY2x1ZGluZyBwYXJhbWV0ZXJzIHJlbGV2YW50IHRvIHRoZSBlbmRwb2ludC5cbiAqIEByZXR1cm5zIEEgUHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB3aXRoIHRoZSBkYXRhIGZyb20gdGhlIHJlc3BvbnNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdCh1cmwsIHJlcXVlc3RPcHRpb25zKSB7XG4gICAgaWYgKHJlcXVlc3RPcHRpb25zID09PSB2b2lkIDApIHsgcmVxdWVzdE9wdGlvbnMgPSB7IHBhcmFtczogeyBmOiBcImpzb25cIiB9IH07IH1cbiAgICB2YXIgb3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHsgaHR0cE1ldGhvZDogXCJQT1NUXCIgfSwgREVGQVVMVF9BUkNHSVNfUkVRVUVTVF9PUFRJT05TKSwgcmVxdWVzdE9wdGlvbnMpLCB7XG4gICAgICAgIHBhcmFtczogX19hc3NpZ24oX19hc3NpZ24oe30sIERFRkFVTFRfQVJDR0lTX1JFUVVFU1RfT1BUSU9OUy5wYXJhbXMpLCByZXF1ZXN0T3B0aW9ucy5wYXJhbXMpLFxuICAgICAgICBoZWFkZXJzOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgREVGQVVMVF9BUkNHSVNfUkVRVUVTVF9PUFRJT05TLmhlYWRlcnMpLCByZXF1ZXN0T3B0aW9ucy5oZWFkZXJzKSxcbiAgICB9KTtcbiAgICB2YXIgbWlzc2luZ0dsb2JhbHMgPSBbXTtcbiAgICB2YXIgcmVjb21tZW5kZWRQYWNrYWdlcyA9IFtdO1xuICAgIC8vIGRvbid0IGNoZWNrIGZvciBhIGdsb2JhbCBmZXRjaCBpZiBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3YXMgcGFzc2VkIHRocm91Z2hcbiAgICBpZiAoIW9wdGlvbnMuZmV0Y2ggJiYgdHlwZW9mIGZldGNoICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIG9wdGlvbnMuZmV0Y2ggPSBmZXRjaC5iaW5kKEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtaXNzaW5nR2xvYmFscy5wdXNoKFwiYGZldGNoYFwiKTtcbiAgICAgICAgcmVjb21tZW5kZWRQYWNrYWdlcy5wdXNoKFwiYG5vZGUtZmV0Y2hgXCIpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIFByb21pc2UgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgbWlzc2luZ0dsb2JhbHMucHVzaChcImBQcm9taXNlYFwiKTtcbiAgICAgICAgcmVjb21tZW5kZWRQYWNrYWdlcy5wdXNoKFwiYGVzNi1wcm9taXNlYFwiKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBGb3JtRGF0YSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBtaXNzaW5nR2xvYmFscy5wdXNoKFwiYEZvcm1EYXRhYFwiKTtcbiAgICAgICAgcmVjb21tZW5kZWRQYWNrYWdlcy5wdXNoKFwiYGlzb21vcnBoaWMtZm9ybS1kYXRhYFwiKTtcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLmZldGNoIHx8XG4gICAgICAgIHR5cGVvZiBQcm9taXNlID09PSBcInVuZGVmaW5lZFwiIHx8XG4gICAgICAgIHR5cGVvZiBGb3JtRGF0YSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgYXJjZ2lzLXJlc3QtcmVxdWVzdGAgcmVxdWlyZXMgYSBgZmV0Y2hgIGltcGxlbWVudGF0aW9uIGFuZCBnbG9iYWwgdmFyaWFibGVzIGZvciBgUHJvbWlzZWAgYW5kIGBGb3JtRGF0YWAgdG8gYmUgcHJlc2VudCBpbiB0aGUgZ2xvYmFsIHNjb3BlLiBZb3UgYXJlIG1pc3NpbmcgXCIgKyBtaXNzaW5nR2xvYmFscy5qb2luKFwiLCBcIikgKyBcIi4gV2UgcmVjb21tZW5kIGluc3RhbGxpbmcgdGhlIFwiICsgcmVjb21tZW5kZWRQYWNrYWdlcy5qb2luKFwiLCBcIikgKyBcIiBtb2R1bGVzIGF0IHRoZSByb290IG9mIHlvdXIgYXBwbGljYXRpb24gdG8gYWRkIHRoZXNlIHRvIHRoZSBnbG9iYWwgc2NvcGUuIFNlZSBodHRwczovL2JpdC5seS8yS053V2FKIGZvciBtb3JlIGluZm8uXCIpO1xuICAgIH1cbiAgICB2YXIgaHR0cE1ldGhvZCA9IG9wdGlvbnMuaHR0cE1ldGhvZCwgYXV0aGVudGljYXRpb24gPSBvcHRpb25zLmF1dGhlbnRpY2F0aW9uLCByYXdSZXNwb25zZSA9IG9wdGlvbnMucmF3UmVzcG9uc2U7XG4gICAgdmFyIHBhcmFtcyA9IF9fYXNzaWduKHsgZjogXCJqc29uXCIgfSwgb3B0aW9ucy5wYXJhbXMpO1xuICAgIHZhciBvcmlnaW5hbEF1dGhFcnJvciA9IG51bGw7XG4gICAgdmFyIGZldGNoT3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiBodHRwTWV0aG9kLFxuICAgICAgICAvKiBlbnN1cmVzIGJlaGF2aW9yIG1pbWljcyBYTUxIdHRwUmVxdWVzdC5cbiAgICAgICAgbmVlZGVkIHRvIHN1cHBvcnQgc2VuZGluZyBJV0EgY29va2llcyAqL1xuICAgICAgICBjcmVkZW50aWFsczogb3B0aW9ucy5jcmVkZW50aWFscyB8fCBcInNhbWUtb3JpZ2luXCIsXG4gICAgfTtcbiAgICAvLyB0aGUgL29hdXRoMi9wbGF0Zm9ybVNlbGYgcm91dGUgd2lsbCBhZGQgWC1Fc3JpLUF1dGgtQ2xpZW50LUlkIGhlYWRlclxuICAgIC8vIGFuZCB0aGF0IHJlcXVlc3QgbmVlZHMgdG8gc2VuZCBjb29raWVzIGNyb3NzIGRvbWFpblxuICAgIC8vIHNvIHdlIG5lZWQgdG8gc2V0IHRoZSBjcmVkZW50aWFscyB0byBcImluY2x1ZGVcIlxuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgJiZcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiWC1Fc3JpLUF1dGgtQ2xpZW50LUlkXCJdICYmXG4gICAgICAgIHVybC5pbmRleE9mKFwiL29hdXRoMi9wbGF0Zm9ybVNlbGZcIikgPiAtMSkge1xuICAgICAgICBmZXRjaE9wdGlvbnMuY3JlZGVudGlhbHMgPSBcImluY2x1ZGVcIjtcbiAgICB9XG4gICAgcmV0dXJuIChhdXRoZW50aWNhdGlvblxuICAgICAgICA/IGF1dGhlbnRpY2F0aW9uLmdldFRva2VuKHVybCwgeyBmZXRjaDogb3B0aW9ucy5mZXRjaCB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGFwcGVuZCBvcmlnaW5hbCByZXF1ZXN0IHVybCBhbmQgcmVxdWVzdE9wdGlvbnNcbiAgICAgICAgICAgICAqIHRvIHRoZSBlcnJvciB0aHJvd24gYnkgZ2V0VG9rZW4oKVxuICAgICAgICAgICAgICogdG8gYXNzaXN0IHdpdGggcmV0cnlpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZXJyLnVybCA9IHVybDtcbiAgICAgICAgICAgIGVyci5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogaWYgYW4gYXR0ZW1wdCBpcyBtYWRlIHRvIHRhbGsgdG8gYW4gdW5mZWRlcmF0ZWQgc2VydmVyXG4gICAgICAgICAgICAgKiBmaXJzdCB0cnkgdGhlIHJlcXVlc3QgYW5vbnltb3VzbHkuIGlmIGEgJ3Rva2VuIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICogZXJyb3IgaXMgdGhyb3duLCB0aHJvdyB0aGUgVU5GRURFUkFURUQgZXJyb3IgdGhlbi5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb3JpZ2luYWxBdXRoRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFwiXCIpO1xuICAgICAgICB9KVxuICAgICAgICA6IFByb21pc2UucmVzb2x2ZShcIlwiKSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0b2tlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBhcmFtcy50b2tlbiA9IHRva2VuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdXRoZW50aWNhdGlvbiAmJiBhdXRoZW50aWNhdGlvbi5nZXREb21haW5DcmVkZW50aWFscykge1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmNyZWRlbnRpYWxzID0gYXV0aGVudGljYXRpb24uZ2V0RG9tYWluQ3JlZGVudGlhbHModXJsKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDdXN0b20gaGVhZGVycyB0byBhZGQgdG8gcmVxdWVzdC4gSVJlcXVlc3RPcHRpb25zLmhlYWRlcnMgd2l0aCBtZXJnZSBvdmVyIHJlcXVlc3RIZWFkZXJzLlxuICAgICAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSB7fTtcbiAgICAgICAgaWYgKGZldGNoT3B0aW9ucy5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICAgICAgICAgIC8vIFByZXZlbnRzIHRva2VuIGZyb20gYmVpbmcgcGFzc2VkIGluIHF1ZXJ5IHBhcmFtcyB3aGVuIGhpZGVUb2tlbiBvcHRpb24gaXMgdXNlZC5cbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIHdpbmRvdyBpcyBhbHdheXMgZGVmaW5lZCBpbiBhIGJyb3dzZXIuIFRlc3QgY2FzZSBpcyBjb3ZlcmVkIGJ5IEphc21pbmUgaW4gbm9kZSB0ZXN0ICovXG4gICAgICAgICAgICBpZiAocGFyYW1zLnRva2VuICYmXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5oaWRlVG9rZW4gJiZcbiAgICAgICAgICAgICAgICAvLyBTaGFyaW5nIEFQSSBkb2VzIG5vdCBzdXBwb3J0IHByZWZsaWdodCBjaGVjayByZXF1aXJlZCBieSBtb2Rlcm4gYnJvd3NlcnMgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9HbG9zc2FyeS9QcmVmbGlnaHRfcmVxdWVzdFxuICAgICAgICAgICAgICAgIHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0SGVhZGVyc1tcIlgtRXNyaS1BdXRob3JpemF0aW9uXCJdID0gXCJCZWFyZXIgXCIgKyBwYXJhbXMudG9rZW47XG4gICAgICAgICAgICAgICAgZGVsZXRlIHBhcmFtcy50b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVuY29kZSB0aGUgcGFyYW1ldGVycyBpbnRvIHRoZSBxdWVyeSBzdHJpbmdcbiAgICAgICAgICAgIHZhciBxdWVyeVBhcmFtcyA9IGVuY29kZVF1ZXJ5U3RyaW5nKHBhcmFtcyk7XG4gICAgICAgICAgICAvLyBkb250IGFwcGVuZCBhICc/JyB1bmxlc3MgcGFyYW1ldGVycyBhcmUgYWN0dWFsbHkgcHJlc2VudFxuICAgICAgICAgICAgdmFyIHVybFdpdGhRdWVyeVN0cmluZyA9IHF1ZXJ5UGFyYW1zID09PSBcIlwiID8gdXJsIDogdXJsICsgXCI/XCIgKyBlbmNvZGVRdWVyeVN0cmluZyhwYXJhbXMpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgLy8gVGhpcyB3b3VsZCBleGNlZWQgdGhlIG1heGltdW0gbGVuZ3RoIGZvciBVUkxzIHNwZWNpZmllZCBieSB0aGUgY29uc3VtZXIgYW5kIHJlcXVpcmVzIFBPU1RcbiAgICAgICAgICAgIChvcHRpb25zLm1heFVybExlbmd0aCAmJlxuICAgICAgICAgICAgICAgIHVybFdpdGhRdWVyeVN0cmluZy5sZW5ndGggPiBvcHRpb25zLm1heFVybExlbmd0aCkgfHxcbiAgICAgICAgICAgICAgICAvLyBPciBpZiB0aGUgY3VzdG9tZXIgcmVxdWlyZXMgdGhlIHRva2VuIHRvIGJlIGhpZGRlbiBhbmQgaXQgaGFzIG5vdCBhbHJlYWR5IGJlZW4gaGlkZGVuIGluIHRoZSBoZWFkZXIgKGZvciBicm93c2VycylcbiAgICAgICAgICAgICAgICAocGFyYW1zLnRva2VuICYmIG9wdGlvbnMuaGlkZVRva2VuKSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBjb25zdW1lciBzcGVjaWZpZWQgYSBtYXhpbXVtIGxlbmd0aCBmb3IgVVJMc1xuICAgICAgICAgICAgICAgIC8vIGFuZCB0aGlzIHdvdWxkIGV4Y2VlZCBpdCwgc28gdXNlIHBvc3QgaW5zdGVhZFxuICAgICAgICAgICAgICAgIGZldGNoT3B0aW9ucy5tZXRob2QgPSBcIlBPU1RcIjtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdG9rZW4gd2FzIGFscmVhZHkgYWRkZWQgYXMgYSBBdXRoIGhlYWRlciwgYWRkIHRoZSB0b2tlbiBiYWNrIHRvIGJvZHkgd2l0aCBvdGhlciBwYXJhbXMgaW5zdGVhZCBvZiBoZWFkZXJcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4ubGVuZ3RoICYmIG9wdGlvbnMuaGlkZVRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy50b2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZXhpc3RpbmcgaGVhZGVyIHRoYXQgd2FzIGFkZGVkIGJlZm9yZSB1cmwgcXVlcnkgbGVuZ3RoIHdhcyBjaGVja2VkXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1tcIlgtRXNyaS1BdXRob3JpemF0aW9uXCJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGp1c3QgdXNlIEdFVFxuICAgICAgICAgICAgICAgIHVybCA9IHVybFdpdGhRdWVyeVN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiB1cGRhdGVSZXNvdXJjZXMgY3VycmVudGx5IHJlcXVpcmVzIEZvcm1EYXRhIGV2ZW4gd2hlbiB0aGUgaW5wdXQgcGFyYW1ldGVycyBkb250IHdhcnJhbnQgaXQuXG4gICAgaHR0cHM6Ly9kZXZlbG9wZXJzLmFyY2dpcy5jb20vcmVzdC91c2Vycy1ncm91cHMtYW5kLWl0ZW1zL3VwZGF0ZS1yZXNvdXJjZXMuaHRtXG4gICAgICAgIHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9hcmNnaXMtcmVzdC1qcy9wdWxsLzUwMCBmb3IgbW9yZSBpbmZvLiAqL1xuICAgICAgICB2YXIgZm9yY2VGb3JtRGF0YSA9IG5ldyBSZWdFeHAoXCIvaXRlbXMvLisvdXBkYXRlUmVzb3VyY2VzXCIpLnRlc3QodXJsKTtcbiAgICAgICAgaWYgKGZldGNoT3B0aW9ucy5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMuYm9keSA9IGVuY29kZUZvcm1EYXRhKHBhcmFtcywgZm9yY2VGb3JtRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWl4aW4gaGVhZGVycyBmcm9tIHJlcXVlc3Qgb3B0aW9uc1xuICAgICAgICBmZXRjaE9wdGlvbnMuaGVhZGVycyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXF1ZXN0SGVhZGVycyksIG9wdGlvbnMuaGVhZGVycyk7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0ga2FybWEgcmVwb3J0cyBjb3ZlcmFnZSBvbiBicm93c2VyIHRlc3RzIG9ubHkgKi9cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgJiYgIWZldGNoT3B0aW9ucy5oZWFkZXJzLnJlZmVyZXIpIHtcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzLnJlZmVyZXIgPSBOT0RFSlNfREVGQVVMVF9SRUZFUkVSX0hFQURFUjtcbiAgICAgICAgfVxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSBibG9iIHJlc3BvbnNlcyBhcmUgZGlmZmljdWx0IHRvIG1ha2UgY3Jvc3MgcGxhdGZvcm0gd2Ugd2lsbCBqdXN0IGhhdmUgdG8gdHJ1c3QgdGhlIGlzb21vcnBoaWMgZmV0Y2ggd2lsbCBkbyBpdHMgam9iICovXG4gICAgICAgIGlmICghcmVxdWlyZXNGb3JtRGF0YShwYXJhbXMpICYmICFmb3JjZUZvcm1EYXRhKSB7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9XG4gICAgICAgICAgICAgICAgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0aW9ucy5mZXRjaCh1cmwsIGZldGNoT3B0aW9ucyk7XG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIC8vIHNlcnZlciByZXNwb25kZWQgdy8gYW4gYWN0dWFsIGVycm9yICg0MDQsIDUwMCwgZXRjKVxuICAgICAgICAgICAgdmFyIHN0YXR1c18xID0gcmVzcG9uc2Uuc3RhdHVzLCBzdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcbiAgICAgICAgICAgIHRocm93IG5ldyBBcmNHSVNSZXF1ZXN0RXJyb3Ioc3RhdHVzVGV4dCwgXCJIVFRQIFwiICsgc3RhdHVzXzEsIHJlc3BvbnNlLCB1cmwsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyYXdSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAocGFyYW1zLmYpIHtcbiAgICAgICAgICAgIGNhc2UgXCJqc29uXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNhc2UgXCJnZW9qc29uXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNhc2UgXCJodG1sXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IGJsb2IgcmVzcG9uc2VzIGFyZSBkaWZmaWN1bHQgdG8gbWFrZSBjcm9zcyBwbGF0Zm9ybSB3ZSB3aWxsIGp1c3QgaGF2ZSB0byB0cnVzdCB0aGF0IGlzb21vcnBoaWMgZmV0Y2ggd2lsbCBkbyBpdHMgam9iICovXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAoKHBhcmFtcy5mID09PSBcImpzb25cIiB8fCBwYXJhbXMuZiA9PT0gXCJnZW9qc29uXCIpICYmICFyYXdSZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gY2hlY2tGb3JFcnJvcnMoZGF0YSwgdXJsLCBwYXJhbXMsIG9wdGlvbnMsIG9yaWdpbmFsQXV0aEVycm9yKTtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbEF1dGhFcnJvcikge1xuICAgICAgICAgICAgICAgIC8qIElmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIHRvIGFuIHVuZmVkZXJhdGVkIHNlcnZpY2UgdGhhdFxuICAgICAgICAgICAgICAgIGRpZG4ndCByZXF1aXJlIGF1dGhlbnRpY2F0aW9uLCBhZGQgdGhlIGJhc2UgdXJsIGFuZCBhIGR1bW15IHRva2VuXG4gICAgICAgICAgICAgICAgdG8gdGhlIGxpc3Qgb2YgdHJ1c3RlZCBzZXJ2ZXJzIHRvIGF2b2lkIGFub3RoZXIgZmVkZXJhdGlvbiBjaGVja1xuICAgICAgICAgICAgICAgIGluIHRoZSBldmVudCBvZiBhIHJlcGVhdCByZXF1ZXN0ICovXG4gICAgICAgICAgICAgICAgdmFyIHRydW5jYXRlZFVybCA9IHVybFxuICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoL1xcL3Jlc3QoXFwvYWRtaW4pP1xcL3NlcnZpY2VzXFwvLylbMF07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hdXRoZW50aWNhdGlvbi5mZWRlcmF0ZWRTZXJ2ZXJzW3RydW5jYXRlZFVybF0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdCB0byAyNCBob3Vyc1xuICAgICAgICAgICAgICAgICAgICBleHBpcmVzOiBuZXcgRGF0ZShEYXRlLm5vdygpICsgODY0MDAgKiAxMDAwKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsQXV0aEVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LmpzLm1hcCIsIi8qIENvcHlyaWdodCAoYykgMjAxNyBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG4vLyBUeXBlU2NyaXB0IDIuMSBubyBsb25nZXIgYWxsb3dzIHlvdSB0byBleHRlbmQgYnVpbHQgaW4gdHlwZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEyNzkwI2lzc3VlY29tbWVudC0yNjU5ODE0NDJcbi8vIGFuZCBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQtd2lraS9ibG9iL21hc3Rlci9CcmVha2luZy1DaGFuZ2VzLm1kI2V4dGVuZGluZy1idWlsdC1pbnMtbGlrZS1lcnJvci1hcnJheS1hbmQtbWFwLW1heS1uby1sb25nZXItd29ya1xuLy9cbi8vIFRoaXMgY29kZSBpcyBmcm9tIE1ETiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9FcnJvciNDdXN0b21fRXJyb3JfVHlwZXMuXG52YXIgQXJjR0lTUmVxdWVzdEVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQXJjR0lTUmVxdWVzdEVycm9yYCAgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgLSBUaGUgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBBUElcbiAgICAgKiBAcGFyYW0gY29kZSAtIFRoZSBlcnJvciBjb2RlIGZyb20gdGhlIEFQSVxuICAgICAqIEBwYXJhbSByZXNwb25zZSAtIFRoZSBvcmlnaW5hbCByZXNwb25zZSBmcm9tIHRoZSBBUEkgdGhhdCBjYXVzZWQgdGhlIGVycm9yXG4gICAgICogQHBhcmFtIHVybCAtIFRoZSBvcmlnaW5hbCB1cmwgb2YgdGhlIHJlcXVlc3RcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcmlnaW5hbCBvcHRpb25zIGFuZCBwYXJhbWV0ZXJzIG9mIHRoZSByZXF1ZXN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gQXJjR0lTUmVxdWVzdEVycm9yKG1lc3NhZ2UsIGNvZGUsIHJlc3BvbnNlLCB1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UgfHwgXCJVTktOT1dOX0VSUk9SXCI7XG4gICAgICAgIGNvZGUgPSBjb2RlIHx8IFwiVU5LTk9XTl9FUlJPUl9DT0RFXCI7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQXJjR0lTUmVxdWVzdEVycm9yXCI7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9XG4gICAgICAgICAgICBjb2RlID09PSBcIlVOS05PV05fRVJST1JfQ09ERVwiID8gbWVzc2FnZSA6IGNvZGUgKyBcIjogXCIgKyBtZXNzYWdlO1xuICAgICAgICB0aGlzLm9yaWdpbmFsTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBBcmNHSVNSZXF1ZXN0RXJyb3I7XG59KCkpO1xuZXhwb3J0IHsgQXJjR0lTUmVxdWVzdEVycm9yIH07XG5BcmNHSVNSZXF1ZXN0RXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuQXJjR0lTUmVxdWVzdEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFyY0dJU1JlcXVlc3RFcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFyY0dJU1JlcXVlc3RFcnJvci5qcy5tYXAiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuLyoqXG4gKiBIZWxwZXIgZm9yIG1ldGhvZHMgd2l0aCBsb3RzIG9mIGZpcnN0IG9yZGVyIHJlcXVlc3Qgb3B0aW9ucyB0byBwYXNzIHRocm91Z2ggYXMgcmVxdWVzdCBwYXJhbWV0ZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ3VzdG9tUGFyYW1zKGN1c3RvbU9wdGlvbnMsIGtleXMsIGJhc2VPcHRpb25zKSB7XG4gICAgdmFyIHJlcXVlc3RPcHRpb25zS2V5cyA9IFtcbiAgICAgICAgXCJwYXJhbXNcIixcbiAgICAgICAgXCJodHRwTWV0aG9kXCIsXG4gICAgICAgIFwicmF3UmVzcG9uc2VcIixcbiAgICAgICAgXCJhdXRoZW50aWNhdGlvblwiLFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICBcImZldGNoXCIsXG4gICAgICAgIFwibWF4VXJsTGVuZ3RoXCIsXG4gICAgICAgIFwiaGVhZGVyc1wiXG4gICAgXTtcbiAgICB2YXIgb3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHsgcGFyYW1zOiB7fSB9LCBiYXNlT3B0aW9ucyksIGN1c3RvbU9wdGlvbnMpO1xuICAgIC8vIG1lcmdlIGFsbCBrZXlzIGluIGN1c3RvbU9wdGlvbnMgaW50byBvcHRpb25zLnBhcmFtc1xuICAgIG9wdGlvbnMucGFyYW1zID0ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKGN1c3RvbU9wdGlvbnNba2V5XSB8fCB0eXBlb2YgY3VzdG9tT3B0aW9uc1trZXldID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdmFsdWVba2V5XSA9IGN1c3RvbU9wdGlvbnNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSwgb3B0aW9ucy5wYXJhbXMpO1xuICAgIC8vIG5vdyByZW1vdmUgYWxsIHByb3BlcnRpZXMgaW4gb3B0aW9ucyB0aGF0IGRvbid0IGV4aXN0IGluIElSZXF1ZXN0T3B0aW9uc1xuICAgIHJldHVybiByZXF1ZXN0T3B0aW9uc0tleXMucmVkdWNlKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmIChvcHRpb25zW2tleV0pIHtcbiAgICAgICAgICAgIHZhbHVlW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sIHt9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcGVuZC1jdXN0b20tcGFyYW1zLmpzLm1hcCIsIi8qIENvcHlyaWdodCAoYykgMjAxOCBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdG8gZW5zdXJlIHRoYXQgdXNlciBzdXBwbGllZCB1cmxzIGRvbid0IGluY2x1ZGUgd2hpdGVzcGFjZSBvciBhIHRyYWlsaW5nIHNsYXNoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5VcmwodXJsKSB7XG4gICAgLy8gR3VhcmQgc28gd2UgZG9uJ3QgdHJ5IHRvIHRyaW0gc29tZXRoaW5nIHRoYXQncyBub3QgYSBzdHJpbmdcbiAgICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICAvLyB0cmltIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNwYWNlcywgYnV0IG5vdCBzcGFjZXMgaW5zaWRlIHRoZSB1cmxcbiAgICB1cmwgPSB1cmwudHJpbSgpO1xuICAgIC8vIHJlbW92ZSB0aGUgdHJhaWxpbmcgc2xhc2ggdG8gdGhlIHVybCBpZiBvbmUgd2FzIGluY2x1ZGVkXG4gICAgaWYgKHVybFt1cmwubGVuZ3RoIC0gMV0gPT09IFwiL1wiKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgwLCAtMSk7XG4gICAgfVxuICAgIHJldHVybiB1cmw7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGVhbi11cmwuanMubWFwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE3IEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IHByb2Nlc3NQYXJhbXMsIHJlcXVpcmVzRm9ybURhdGEgfSBmcm9tIFwiLi9wcm9jZXNzLXBhcmFtc1wiO1xuaW1wb3J0IHsgZW5jb2RlUXVlcnlTdHJpbmcgfSBmcm9tIFwiLi9lbmNvZGUtcXVlcnktc3RyaW5nXCI7XG4vKipcbiAqIEVuY29kZXMgcGFyYW1ldGVycyBpbiBhIFtGb3JtRGF0YV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Zvcm1EYXRhKSBvYmplY3QgaW4gYnJvd3NlcnMgb3IgaW4gYSBbRm9ybURhdGFdKGh0dHBzOi8vZ2l0aHViLmNvbS9mb3JtLWRhdGEvZm9ybS1kYXRhKSBpbiBOb2RlLmpzXG4gKlxuICogQHBhcmFtIHBhcmFtcyBBbiBvYmplY3QgdG8gYmUgZW5jb2RlZC5cbiAqIEByZXR1cm5zIFRoZSBjb21wbGV0ZSBbRm9ybURhdGFdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Gb3JtRGF0YSkgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlRm9ybURhdGEocGFyYW1zLCBmb3JjZUZvcm1EYXRhKSB7XG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2FyY2dpcy1yZXN0LWpzL2lzc3Vlcy80OTkgZm9yIG1vcmUgaW5mby5cbiAgICB2YXIgdXNlRm9ybURhdGEgPSByZXF1aXJlc0Zvcm1EYXRhKHBhcmFtcykgfHwgZm9yY2VGb3JtRGF0YTtcbiAgICB2YXIgbmV3UGFyYW1zID0gcHJvY2Vzc1BhcmFtcyhwYXJhbXMpO1xuICAgIGlmICh1c2VGb3JtRGF0YSkge1xuICAgICAgICB2YXIgZm9ybURhdGFfMSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBPYmplY3Qua2V5cyhuZXdQYXJhbXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBCbG9iICE9PSBcInVuZGVmaW5lZFwiICYmIG5ld1BhcmFtc1trZXldIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICAgICAgICAgIC8qIFRvIG5hbWUgdGhlIEJsb2I6XG4gICAgICAgICAgICAgICAgIDEuIGxvb2sgdG8gYW4gYWx0ZXJuYXRlIHJlcXVlc3QgcGFyYW1ldGVyIGNhbGxlZCAnZmlsZU5hbWUnXG4gICAgICAgICAgICAgICAgIDIuIHNlZSBpZiAnbmFtZScgaGFzIGJlZW4gdGFja2VkIG9udG8gdGhlIEJsb2IgbWFudWFsbHlcbiAgICAgICAgICAgICAgICAgMy4gaWYgYWxsIGVsc2UgZmFpbHMsIHVzZSB0aGUgcmVxdWVzdCBwYXJhbWV0ZXJcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHZhciBmaWxlbmFtZSA9IG5ld1BhcmFtc1tcImZpbGVOYW1lXCJdIHx8IG5ld1BhcmFtc1trZXldLm5hbWUgfHwga2V5O1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhXzEuYXBwZW5kKGtleSwgbmV3UGFyYW1zW2tleV0sIGZpbGVuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICBlbHNlIGlmIChuZXdQYXJhbXNba2V5XS5jb25zdHJ1Y3RvciAmJlxuICAgICAgICAgICAgICAgIG5ld1BhcmFtc1trZXldLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdSZWFkU3RyZWFtJyAmJlxuICAgICAgICAgICAgICAgIC8vIFRPRE86IG9ubHkgc3BlY2lmeSB0aGUga25vd25MZW5ndGggb3B0aW9uIGlmIGEgdmFsaWQgdmFsdWUgaXMgZ2l2ZW4uXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuIHZlcmlmeSBpbiBhbGwgUkVTVCBBUEkgdGhhdCB0aGUgb3B0aW9uIGlzIG5lZWQgZm9yXG4gICAgICAgICAgICAgICAgLy8gbm9kZSBSZWFkU3RyZWFtLCBpdCBjYW4gdGhyb3cgYW4gZXJyb3IgZm9yIHRoZSBtaXNzaW5nIGRhdGFTaXplIHZhbHVlLlxuICAgICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCBzdWNoIGNoYW5nZSB3aWxsIGJlIGEgYnJlYWtpbmcgY2hhbmdlLlxuICAgICAgICAgICAgICAgIE51bWJlci5pc0ludGVnZXIobmV3UGFyYW1zW1wiZGF0YVNpemVcIl0pKSB7XG4gICAgICAgICAgICAgICAgLy8gaGF2ZSB0byBjYXN0IHRoZSBmb3JtRGF0YSB0byBhbnkgc28gdGhhdCBJIGNhbiB1c2UgdGhlIHVub2ZmaWNpYWwgQVBJXG4gICAgICAgICAgICAgICAgLy8gaW4gdGhlIGZvcm0tZGF0YSBsaWJyYXJ5IHRvIGhhbmRsZSBOb2RlIFJlYWRTdHJlYW0uIFNlZVxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mb3JtLWRhdGEvZm9ybS1kYXRhL2lzc3Vlcy81MDhcbiAgICAgICAgICAgICAgICBmb3JtRGF0YV8xLmFwcGVuZChrZXksIG5ld1BhcmFtc1trZXldLCB7XG4gICAgICAgICAgICAgICAgICAgIGtub3duTGVuZ3RoOiBuZXdQYXJhbXNbXCJkYXRhU2l6ZVwiXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9ybURhdGFfMS5hcHBlbmQoa2V5LCBuZXdQYXJhbXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZm9ybURhdGFfMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVRdWVyeVN0cmluZyhwYXJhbXMpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuY29kZS1mb3JtLWRhdGEuanMubWFwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE3IEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IHByb2Nlc3NQYXJhbXMgfSBmcm9tIFwiLi9wcm9jZXNzLXBhcmFtc1wiO1xuLyoqXG4gKiBFbmNvZGVzIGtleXMgYW5kIHBhcmFtZXRlcnMgZm9yIHVzZSBpbiBhIFVSTCdzIHF1ZXJ5IHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ga2V5IFBhcmFtZXRlcidzIGtleVxuICogQHBhcmFtIHZhbHVlIFBhcmFtZXRlcidzIHZhbHVlXG4gKiBAcmV0dXJucyBRdWVyeSBzdHJpbmcgd2l0aCBrZXkgYW5kIHZhbHVlIHBhaXJzIHNlcGFyYXRlZCBieSBcIiZcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlUGFyYW0oa2V5LCB2YWx1ZSkge1xuICAgIC8vIEZvciBhcnJheSBvZiBhcnJheXMsIHJlcGVhdCBrZXk9dmFsdWUgZm9yIGVhY2ggZWxlbWVudCBvZiBjb250YWluaW5nIGFycmF5XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlWzBdICYmIEFycmF5LmlzQXJyYXkodmFsdWVbMF0pKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoZnVuY3Rpb24gKGFycmF5RWxlbSkgeyByZXR1cm4gZW5jb2RlUGFyYW0oa2V5LCBhcnJheUVsZW0pOyB9KS5qb2luKFwiJlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xufVxuLyoqXG4gKiBFbmNvZGVzIHRoZSBwYXNzZWQgb2JqZWN0IGFzIGEgcXVlcnkgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSBwYXJhbXMgQW4gb2JqZWN0IHRvIGJlIGVuY29kZWQuXG4gKiBAcmV0dXJucyBBbiBlbmNvZGVkIHF1ZXJ5IHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVF1ZXJ5U3RyaW5nKHBhcmFtcykge1xuICAgIHZhciBuZXdQYXJhbXMgPSBwcm9jZXNzUGFyYW1zKHBhcmFtcyk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld1BhcmFtcylcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVQYXJhbShrZXksIG5ld1BhcmFtc1trZXldKTtcbiAgICB9KVxuICAgICAgICAuam9pbihcIiZcIik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbmNvZGUtcXVlcnktc3RyaW5nLmpzLm1hcCIsIi8qIENvcHlyaWdodCAoYykgMjAxNyBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG4vKipcbiAqIENoZWNrcyBwYXJhbWV0ZXJzIHRvIHNlZSBpZiB3ZSBzaG91bGQgdXNlIEZvcm1EYXRhIHRvIHNlbmQgdGhlIHJlcXVlc3RcbiAqIEBwYXJhbSBwYXJhbXMgVGhlIG9iamVjdCB3aG9zZSBrZXlzIHdpbGwgYmUgZW5jb2RlZC5cbiAqIEByZXR1cm4gQSBib29sZWFuIGluZGljYXRpbmcgaWYgRm9ybURhdGEgd2lsbCBiZSByZXF1aXJlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVzRm9ybURhdGEocGFyYW1zKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHBhcmFtcykuc29tZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcmFtc1trZXldO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLnRvUGFyYW0pIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9QYXJhbSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0eXBlID0gdmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiQXJyYXlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlIFwiT2JqZWN0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSBcIkRhdGVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlIFwiRnVuY3Rpb25cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlIFwiQm9vbGVhblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgXCJTdHJpbmdcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlIFwiTnVtYmVyXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBwYXJhbWV0ZXJzIHRvIHRoZSBwcm9wZXIgcmVwcmVzZW50YXRpb24gdG8gc2VuZCB0byB0aGUgQXJjR0lTIFJFU1QgQVBJLlxuICogQHBhcmFtIHBhcmFtcyBUaGUgb2JqZWN0IHdob3NlIGtleXMgd2lsbCBiZSBlbmNvZGVkLlxuICogQHJldHVybiBBIG5ldyBvYmplY3Qgd2l0aCBwcm9wZXJseSBlbmNvZGVkIHZhbHVlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NQYXJhbXMocGFyYW1zKSB7XG4gICAgdmFyIG5ld1BhcmFtcyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHZhciBwYXJhbSA9IHBhcmFtc1trZXldO1xuICAgICAgICBpZiAocGFyYW0gJiYgcGFyYW0udG9QYXJhbSkge1xuICAgICAgICAgICAgcGFyYW0gPSBwYXJhbS50b1BhcmFtKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXJhbSAmJlxuICAgICAgICAgICAgcGFyYW0gIT09IDAgJiZcbiAgICAgICAgICAgIHR5cGVvZiBwYXJhbSAhPT0gXCJib29sZWFuXCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiBwYXJhbSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0eXBlID0gcGFyYW0uY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyBwcm9wZXJseSBlbmNvZGVzIG9iamVjdHMsIGFycmF5cyBhbmQgZGF0ZXMgZm9yIGFyY2dpcy5jb20gYW5kIG90aGVyIHNlcnZpY2VzLlxuICAgICAgICAvLyBwb3J0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9lc3JpLWxlYWZsZXQvYmxvYi9tYXN0ZXIvc3JjL1JlcXVlc3QuanMjTDIyLUwzMFxuICAgICAgICAvLyBhbHNvIHNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9hcmNnaXMtcmVzdC1qcy9pc3N1ZXMvMTg6XG4gICAgICAgIC8vIG51bGwsIHVuZGVmaW5lZCwgZnVuY3Rpb24gYXJlIGV4Y2x1ZGVkLiBJZiB5b3Ugd2FudCB0byBzZW5kIGFuIGVtcHR5IGtleSB5b3UgbmVlZCB0byBzZW5kIGFuIGVtcHR5IHN0cmluZyBcIlwiLlxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJheVwiOlxuICAgICAgICAgICAgICAgIC8vIEJhc2VkIG9uIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBhcnJheSwgY2xhc3NpZnkgYXJyYXkgYXMgYW4gYXJyYXkgb2YgYXJyYXlzLCBhbiBhcnJheSBvZiBvYmplY3RzXG4gICAgICAgICAgICAgICAgLy8gdG8gYmUgc3RyaW5naWZpZWQsIG9yIGFuIGFycmF5IG9mIG5vbi1vYmplY3RzIHRvIGJlIGNvbW1hLXNlcGFyYXRlZFxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jYXNlLWRlY2xhcmF0aW9uc1xuICAgICAgICAgICAgICAgIHZhciBmaXJzdEVsZW1lbnRUeXBlID0gKF9iID0gKF9hID0gcGFyYW1bMF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb25zdHJ1Y3RvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm5hbWU7XG4gICAgICAgICAgICAgICAgdmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICBmaXJzdEVsZW1lbnRUeXBlID09PSBcIkFycmF5XCIgPyBwYXJhbSA6IC8vIHBhc3MgdGhydSBhcnJheSBvZiBhcnJheXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0RWxlbWVudFR5cGUgPT09IFwiT2JqZWN0XCIgPyBKU09OLnN0cmluZ2lmeShwYXJhbSkgOiAvLyBzdHJpbmdpZnkgYXJyYXkgb2Ygb2JqZWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtLmpvaW4oXCIsXCIpOyAvLyBqb2luIG90aGVyIHR5cGVzIG9mIGFycmF5IGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiT2JqZWN0XCI6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShwYXJhbSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRGF0ZVwiOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyYW0udmFsdWVPZigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZ1bmN0aW9uXCI6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkJvb2xlYW5cIjpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcmFtICsgXCJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJhbTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDAgfHwgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBuZXdQYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld1BhcmFtcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb2Nlc3MtcGFyYW1zLmpzLm1hcCIsIi8qIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbi8qKlxuICogTWV0aG9kIHVzZWQgaW50ZXJuYWxseSB0byBzdXJmYWNlIG1lc3NhZ2VzIHRvIGRldmVsb3BlcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIFttZXNzYWdlXSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2Fybi5qcy5tYXAiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jcmVhdGVCaW5kaW5nKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNsYXllci1jb21wb25lbnQgLmxheWVyLXRhYnMge1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcblxcbiNsYXllci1jb21wb25lbnQgLmxheWVyLXRhYnNfX2NvbnRlbnQge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMzlweCk7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuXFxuI2xheWVyLWNvbXBvbmVudCAjbGF5ZXItc2VhcmNoIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gICNsYXllci1jb21wb25lbnQgI2xheWVyLXNlYXJjaCAuZHJvcGRvd24tYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zY2VuYXJpby1kYXNoYm9hcmQvc3JjL3J1bnRpbWUvTGF5ZXJDb21wb25lbnQvTGF5ZXJDb21wb25lbnQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUVRLGdCQUFnQixFQUFBOztBQUZ4QjtFQU1RLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQVQxQjtFQWFRLGdCQUFnQixFQUFBO0VBYnhCO0lBZ0JZLGdDQUFnQyxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNsYXllci1jb21wb25lbnQge1xcbiAgICAubGF5ZXItdGFicyB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5sYXllci10YWJzX19jb250ZW50IHtcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTM5cHgpO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgfVxcblxcbiAgICAjbGF5ZXItc2VhcmNoIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxuICAgICAgICAuZHJvcGRvd24tYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktNTAwKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjbGF5ZXItbGlzdC1jb21wb25lbnQgI25vLWxheWVycy1tZXNzYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGY3Zjk7XFxuICBwYWRkaW5nOiA1cHg7IH1cXG5cXG4jbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTBweCk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpOyB9XFxuICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0X19uby1pdGVtcyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7IH1cXG4gICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBhbmltYXRpb246IG5ldy1pdGVtIDVzIGVhc2Utb3V0O1xcbiAgICBib3JkZXI6IG5vbmU7IH1cXG4gICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1jb250YWluZXIgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1sYWJlbCB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGN1cnNvcjogbW92ZTsgfVxcbiAgICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tY29udGFpbmVyIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tbGFiZWwgLmVzcmktbGF5ZXItbGlzdF9faXRlbS10b2dnbGUge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAgICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1jb250YWluZXIgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1sYWJlbCAuZXNyaS1sYXllci1saXN0X19pdGVtLXRvZ2dsZTpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMTAwKTsgfVxcbiAgICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tY29udGFpbmVyIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tbGFiZWwgLmVzcmktbGF5ZXItbGlzdF9faXRlbS10aXRsZSB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDsgfVxcbiAgICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tY29udGFpbmVyIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tbGFiZWwgLmVzcmktaWNvbi1ub24tdmlzaWJsZSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtODAwKTsgfVxcbiAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0X19pdGVtLWNvbnRhaW5lciAuZXNyaS1sYXllci1saXN0X19pdGVtLWxhYmVsOmhhcyguZXNyaS1pY29uLW5vbi12aXNpYmxlKSB7XFxuICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LTgwMCk7IH1cXG4gICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1jb250YWluZXIgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1hY3Rpb25zLW1lbnUtaXRlbS0tYWN0aXZlW2FyaWEtbGFiZWw9XFxcIkxlZ2VuZFxcXCJdIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XFxuICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0LXBhbmVsIHtcXG4gICAgbWFyZ2luOiAwIDAgNXB4IDI3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTsgfVxcbiAgICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0LXBhbmVsIC5lc3JpLWxheWVyLWxpc3QtcGFuZWxfX2NvbnRlbnQge1xcbiAgICAgIHBhZGRpbmc6IDVweCAwIDVweCAxMHB4OyB9XFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3QtcGFuZWwgLmVzcmktbGF5ZXItbGlzdC1wYW5lbF9fY29udGVudDpoYXMoLmxlZ2VuZF9fdGVtcGxhdGVzKSB7XFxuICAgICAgYm9yZGVyLXRvcDogMnB4IHZhcigtLWxpZ2h0LTMwMCkgc29saWQ7IH1cXG4gICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdC1wYW5lbCAuZXNyaS1sZWdlbmQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3QtcGFuZWwgLmVzcmktbGVnZW5kX19zZXJ2aWNlIHtcXG4gICAgICBwYWRkaW5nOiAwOyB9XFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3QtcGFuZWwgLmVzcmktbGVnZW5kX19sYXllci1jaGlsZC10YWJsZSB7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuICAjbGF5ZXItbGlzdC1jb21wb25lbnQgLmVzcmktbGF5ZXItbGlzdCAuZXNyaS1sYXllci1saXN0X19pdGVtLWFjdGlvbnMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7IH1cXG4gICAgI2xheWVyLWxpc3QtY29tcG9uZW50IC5lc3JpLWxheWVyLWxpc3QgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1hY3Rpb25zIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tYWN0aW9ucy1saXN0IC5lc3JpLWRpc2FibGVkLWVsZW1lbnQsXFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAuZXNyaS1sYXllci1saXN0IC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tYWN0aW9ucyAuZXNyaS1sYXllci1saXN0X19pdGVtLWFjdGlvbnMtbGlzdCAuZXNyaS1kaXNhYmxlZC1lbGVtZW50OmhvdmVyIHtcXG4gICAgICBjb2xvcjogdmFyKC0tbGlnaHQtODAwKTtcXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4jbGF5ZXItbGlzdC1jb21wb25lbnQgI2xheWVyLWxpc3RfX2J1dHRvbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDgwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA1MCUpOyB9XFxuICAjbGF5ZXItbGlzdC1jb21wb25lbnQgI2xheWVyLWxpc3RfX2J1dHRvbnMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogM3B4OyB9XFxuICAjbGF5ZXItbGlzdC1jb21wb25lbnQgI2xheWVyLWxpc3RfX2J1dHRvbnMgI2NsZWFyLWFsbC1idXR0b24tZ3JpZC1pdGVtIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggdmFyKC0tbGlnaHQtMzAwKSBzb2xpZCAhaW1wb3J0YW50OyB9XFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAjbGF5ZXItbGlzdF9fYnV0dG9ucyAjY2xlYXItYWxsLWJ1dHRvbi1ncmlkLWl0ZW0gI2NsZWFyLWFsbC1idXR0b24ge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMDsgfVxcbiAgICAgICNsYXllci1saXN0LWNvbXBvbmVudCAjbGF5ZXItbGlzdF9fYnV0dG9ucyAjY2xlYXItYWxsLWJ1dHRvbi1ncmlkLWl0ZW0gI2NsZWFyLWFsbC1idXR0b24gc3ZnIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDsgfVxcbiAgI2xheWVyLWxpc3QtY29tcG9uZW50ICNsYXllci1saXN0X19idXR0b25zICNsZWdlbmQtYnV0dG9uLWdyaWQtaXRlbSB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHZhcigtLWxpZ2h0LTMwMCkgc29saWQ7IH1cXG4gICAgI2xheWVyLWxpc3QtY29tcG9uZW50ICNsYXllci1saXN0X19idXR0b25zICNsZWdlbmQtYnV0dG9uLWdyaWQtaXRlbSBsYWJlbCB7XFxuICAgICAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogNHB4OyB9XFxuICAgICNsYXllci1saXN0LWNvbXBvbmVudCAjbGF5ZXItbGlzdF9fYnV0dG9ucyAjbGVnZW5kLWJ1dHRvbi1ncmlkLWl0ZW0gI2xlZ2VuZC1idXR0b24ge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBib3R0b206IDJweDsgfVxcbiAgI2xheWVyLWxpc3QtY29tcG9uZW50ICNsYXllci1saXN0X19idXR0b25zICNsYXllci12aXNpYmlsaXR5LWJ1dHRvbi1ncmlkLWl0ZW0ge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDI7IH1cXG5cXG4uY29sb3ItcGlja2VyLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMTFweDtcXG4gIGxlZnQ6IDVweDsgfVxcblxcbi5sYXllci1zaXplLXNsaWRlciA+IGlucHV0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA2NSU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDNweDtcXG4gIG1hcmdpbjogMCAxMHB4OyB9XFxuXFxuI3BpY3R1cmUtbWFya2VyLXdhcm5pbmcge1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgI3BpY3R1cmUtbWFya2VyLXdhcm5pbmcgZGl2IHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDsgfVxcblxcbiNzaG93LWxlZ2VuZC1idXR0b246aG92ZXI6bm90KC5kaXNhYmxlZCksICNoaWRlLWxlZ2VuZC1idXR0b246aG92ZXI6bm90KC5kaXNhYmxlZCkge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktNTAwKTsgfVxcblxcbiNsZWdlbmQtYnV0dG9uIHN2ZyB7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtOyB9XFxuXFxuLmxheWVyLXN0eWxlLW1vZGFsLm1vZGFsLWJhY2tkcm9wLmZhZGUuc2hvdyB7XFxuICBvcGFjaXR5OiAwOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2NlbmFyaW8tZGFzaGJvYXJkL3NyYy9ydW50aW1lL0xheWVyTGlzdENvbXBvbmVudC9MYXllckxpc3RDb21wb25lbnQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUVRLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBSHBCO0VBT1EsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQiw4QkFBOEIsRUFBQTtFQVR0QztJQVlZLGFBQWEsRUFBQTtFQVp6QjtJQWdCWSw4QkFBOEIsRUFBQTtFQWhCMUM7SUFvQlksZUFBZTtJQUNmLCtCQUErQjtJQUMvQixZQUFZLEVBQUE7SUF0QnhCO01BeUJnQixrQkFBa0I7TUFDbEIsWUFBWSxFQUFBO01BMUI1QjtRQTZCb0Isa0JBQWtCO1FBQ2xCLFlBQVksRUFBQTtNQTlCaEM7UUFrQ29CLHNDQUFzQyxFQUFBO01BbEMxRDtRQXNDb0IsaUJBQWlCLEVBQUE7TUF0Q3JDO1FBMENvQix1QkFBdUIsRUFBQTtJQTFDM0M7TUErQ2dCLHVCQUF1QixFQUFBO0lBL0N2QztNQW1EZ0IseUJBQXlCLEVBQUE7RUFuRHpDO0lBd0RZLG9CQUFvQjtJQUNwQiw4QkFBOEIsRUFBQTtJQXpEMUM7TUE0RGdCLHVCQUF1QixFQUFBO0lBNUR2QztNQWdFZ0Isc0NBQXNDLEVBQUE7SUFoRXREO01Bb0VnQiw2QkFBNkIsRUFBQTtJQXBFN0M7TUF3RWdCLFVBQVUsRUFBQTtJQXhFMUI7TUE0RWdCLFNBQVMsRUFBQTtFQTVFekI7SUFpRlksOEJBQThCLEVBQUE7SUFqRjFDOztNQXFGZ0IsdUJBQXVCO01BQ3ZCLGVBQWUsRUFBQTs7QUF0Ri9CO0VBNkZRLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0Isa0NBQWtDLEVBQUE7RUEvRjFDO0lBa0dZLFlBQVksRUFBQTtFQWxHeEI7SUFzR1ksY0FBYztJQUNkLFdBQVc7SUFDWCxvREFBb0QsRUFBQTtJQXhHaEU7TUEyR2dCLGVBQWUsRUFBQTtNQTNHL0I7UUE4R29CLGVBQWU7UUFDZixrQkFBa0IsRUFBQTtFQS9HdEM7SUFxSFksY0FBYztJQUNkLFdBQVc7SUFDWCx5Q0FBeUMsRUFBQTtJQXZIckQ7TUEwSGdCLHNDQUFzQztNQUN0QyxrQkFBa0I7TUFDbEIsUUFBUSxFQUFBO0lBNUh4QjtNQWdJZ0Isa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTtFQWpJM0I7SUFzSVksY0FBYztJQUNkLFdBQVcsRUFBQTs7QUFNdkI7RUFDSSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTLEVBQUE7O0FBR2I7RUFDSSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBSVEsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksVUFBVSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNsYXllci1saXN0LWNvbXBvbmVudCB7XFxuICAgICNuby1sYXllcnMtbWVzc2FnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmN2Y5O1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuXFxuICAgIC5lc3JpLWxheWVyLWxpc3Qge1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjUwcHgpO1xcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXG4gICAgICAgIC5lc3JpLWxheWVyLWxpc3RfX25vLWl0ZW1zIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmVzcmktbGF5ZXItbGlzdF9faXRlbSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1jb250YWluZXIge1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgICAgICAgICBhbmltYXRpb246IG5ldy1pdGVtIDVzIGVhc2Utb3V0O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG5cXG4gICAgICAgICAgICAuZXNyaS1sYXllci1saXN0X19pdGVtLWxhYmVsIHtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG1vdmU7XFxuXFxuICAgICAgICAgICAgICAgIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tdG9nZ2xlIHtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuZXNyaS1sYXllci1saXN0X19pdGVtLXRvZ2dsZTpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMTAwKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuZXNyaS1sYXllci1saXN0X19pdGVtLXRpdGxlIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5lc3JpLWljb24tbm9uLXZpc2libGUge1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LTgwMCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1sYWJlbDpoYXMoLmVzcmktaWNvbi1ub24tdmlzaWJsZSkge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtODAwKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1hY3Rpb25zLW1lbnUtaXRlbS0tYWN0aXZlW2FyaWEtbGFiZWw9XFxcIkxlZ2VuZFxcXCJdIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZXNyaS1sYXllci1saXN0LXBhbmVsIHtcXG4gICAgICAgICAgICBtYXJnaW46IDAgMCA1cHggMjdweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuXFxuICAgICAgICAgICAgLmVzcmktbGF5ZXItbGlzdC1wYW5lbF9fY29udGVudCB7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDVweCAxMHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZXNyaS1sYXllci1saXN0LXBhbmVsX19jb250ZW50OmhhcygubGVnZW5kX190ZW1wbGF0ZXMpIHtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHZhcigtLWxpZ2h0LTMwMCkgc29saWQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5lc3JpLWxlZ2VuZCB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZXNyaS1sZWdlbmRfX3NlcnZpY2Uge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZXNyaS1sZWdlbmRfX2xheWVyLWNoaWxkLXRhYmxlIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tYWN0aW9ucyB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcblxcbiAgICAgICAgICAgIC5lc3JpLWxheWVyLWxpc3RfX2l0ZW0tYWN0aW9ucy1saXN0IC5lc3JpLWRpc2FibGVkLWVsZW1lbnQsXFxuICAgICAgICAgICAgLmVzcmktbGF5ZXItbGlzdF9faXRlbS1hY3Rpb25zLWxpc3QgLmVzcmktZGlzYWJsZWQtZWxlbWVudDpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC04MDApO1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuXFxuICAgICNsYXllci1saXN0X19idXR0b25zIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4MHB4O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNTAlKTtcXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2NsZWFyLWFsbC1idXR0b24tZ3JpZC1pdGVtIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggdmFyKC0tbGlnaHQtMzAwKSBzb2xpZCAhaW1wb3J0YW50O1xcblxcbiAgICAgICAgICAgICNjbGVhci1hbGwtYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xcblxcbiAgICAgICAgICAgICAgICBzdmcge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2xlZ2VuZC1idXR0b24tZ3JpZC1pdGVtIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggdmFyKC0tbGlnaHQtMzAwKSBzb2xpZDtcXG5cXG4gICAgICAgICAgICBsYWJlbCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgIHRvcDogNHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjbGVnZW5kLWJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgYm90dG9tOiAycHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2xheWVyLXZpc2liaWxpdHktYnV0dG9uLWdyaWQtaXRlbSB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXFxuLmNvbG9yLXBpY2tlci1ibG9jayB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDExcHg7XFxuICAgIGxlZnQ6IDVweDtcXG59XFxuXFxuLmxheWVyLXNpemUtc2xpZGVyID4gaW5wdXQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAzcHg7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcbn1cXG5cXG4jcGljdHVyZS1tYXJrZXItd2FybmluZyB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxuICAgIGRpdiB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxufVxcblxcbiNzaG93LWxlZ2VuZC1idXR0b246aG92ZXI6bm90KC5kaXNhYmxlZCksICNoaWRlLWxlZ2VuZC1idXR0b246aG92ZXI6bm90KC5kaXNhYmxlZCkge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS01MDApO1xcbn1cXG5cXG4jbGVnZW5kLWJ1dHRvbiBzdmcge1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4ubGF5ZXItc3R5bGUtbW9kYWwubW9kYWwtYmFja2Ryb3AuZmFkZS5zaG93IHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3RlbXBsYXRlLWNvbXBvbmVudCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmN2Y5O1xcbiAgYm9yZGVyOiAxcHggdmFyKC0tZGFyay04MDApIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAjdGVtcGxhdGUtY29tcG9uZW50ICN0ZW1wbGF0ZS1jb21wb25lbnRfX2hlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTsgfVxcbiAgICAjdGVtcGxhdGUtY29tcG9uZW50ICN0ZW1wbGF0ZS1jb21wb25lbnRfX2hlYWRlciBoNCB7XFxuICAgICAgZGlzcGxheTogaW5saW5lOyB9XFxuICAgICN0ZW1wbGF0ZS1jb21wb25lbnQgI3RlbXBsYXRlLWNvbXBvbmVudF9faGVhZGVyICN0ZW1wbGF0ZS1jb21wb25lbnRfX2luZm8ge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbWFyZ2luOiAycHggMCAwIDVweDsgfVxcbiAgI3RlbXBsYXRlLWNvbXBvbmVudCAjdGVtcGxhdGUtc2VhcmNoIC5kcm9wZG93bi1idXR0b246aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktNTAwKTsgfVxcbiAgI3RlbXBsYXRlLWNvbXBvbmVudCAjYWN0aXZlLXRlbXBsYXRlcy1tZW51IHtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4OyB9XFxuICAgICN0ZW1wbGF0ZS1jb21wb25lbnQgI2FjdGl2ZS10ZW1wbGF0ZXMtbWVudSAuc2Nyb2xsLWl0ZW0ge1xcbiAgICAgIG1heC13aWR0aDogMTUwcHg7IH1cXG4gICAgICAjdGVtcGxhdGUtY29tcG9uZW50ICNhY3RpdmUtdGVtcGxhdGVzLW1lbnUgLnNjcm9sbC1pdGVtIC5uYXYtbGluayB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay04MDApO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICAgICAgYm9yZGVyOiAxcHggdmFyKC0tZGFyay04MDApIHNvbGlkOyB9XFxuICAgICN0ZW1wbGF0ZS1jb21wb25lbnQgI2FjdGl2ZS10ZW1wbGF0ZXMtbWVudSAudGFiLXRpdGxlIHtcXG4gICAgICBtYXJnaW4tdG9wOiAycHg7IH1cXG4gICAgI3RlbXBsYXRlLWNvbXBvbmVudCAjYWN0aXZlLXRlbXBsYXRlcy1tZW51ICNuby1hY3RpdmUtdGVtcGxhdGVzIHtcXG4gICAgICBwYWRkaW5nOiA1cHggMCAwIDVweDsgfVxcblxcbi50ZW1wbGF0ZS1zZWFyY2gtaXRlbSB7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLnRlbXBsYXRlLXNlYXJjaC1pdGVtIC50ZW1wbGF0ZS1zZWFyY2gtaXRlbV9fYWRkLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1NXB4KTsgfVxcblxcbi50ZW1wbGF0ZS1kcm9wZG93bl9fY29udGVudCB7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIGJvcmRlci1sZWZ0OiAycHggdmFyKC0tbGlnaHQtMzAwKSBzb2xpZDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NjZW5hcmlvLWRhc2hib2FyZC9zcmMvcnVudGltZS9UZW1wbGF0ZUNvbXBvbmVudC9UZW1wbGF0ZUNvbXBvbmVudC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksY0FBYztFQUNkLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLGtCQUFrQixFQUFBO0VBTHRCO0lBUVEscUJBQXFCLEVBQUE7SUFSN0I7TUFXWSxlQUFlLEVBQUE7SUFYM0I7TUFlWSxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLG1CQUFtQixFQUFBO0VBakIvQjtJQXVCWSxnQ0FBZ0MsRUFBQTtFQXZCNUM7SUE0QlEsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBO0lBaEN6QjtNQW1DWSxnQkFBZ0IsRUFBQTtNQW5DNUI7UUFzQ2dCLHNCQUFzQjtRQUN0Qiw4QkFBOEI7UUFDOUIsZUFBZTtRQUNmLGlDQUFpQyxFQUFBO0lBekNqRDtNQThDWSxlQUFlLEVBQUE7SUE5QzNCO01Ba0RZLG9CQUFvQixFQUFBOztBQU1oQztFQUNJLFdBQVcsRUFBQTtFQURmO0lBSVEsd0JBQXdCLEVBQUE7O0FBSWhDO0VBQ0ksaUJBQWlCO0VBQ2pCLHVDQUF1QyxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiN0ZW1wbGF0ZS1jb21wb25lbnQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjdmOTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tZGFyay04MDApIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgICN0ZW1wbGF0ZS1jb21wb25lbnRfX2hlYWRlciB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuXFxuICAgICAgICBoNCB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3RlbXBsYXRlLWNvbXBvbmVudF9faW5mbyB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBtYXJnaW46IDJweCAwIDAgNXB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICN0ZW1wbGF0ZS1zZWFyY2gge1xcbiAgICAgICAgLmRyb3Bkb3duLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgI2FjdGl2ZS10ZW1wbGF0ZXMtbWVudSB7XFxuICAgICAgICBoZWlnaHQ6IDU1cHg7XFxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcblxcbiAgICAgICAgLnNjcm9sbC1pdGVtIHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xcblxcbiAgICAgICAgICAgIC5uYXYtbGluayB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCk7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCB2YXIoLS1kYXJrLTgwMCkgc29saWQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhYi10aXRsZSB7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI25vLWFjdGl2ZS10ZW1wbGF0ZXMge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDAgNXB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcblxcbi50ZW1wbGF0ZS1zZWFyY2gtaXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAudGVtcGxhdGUtc2VhcmNoLWl0ZW1fX2FkZC1idXR0b24ge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDU1cHgpO1xcbiAgICB9XFxufVxcblxcbi50ZW1wbGF0ZS1kcm9wZG93bl9fY29udGVudCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHZhcigtLWxpZ2h0LTMwMCkgc29saWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5qaW11LXdpZGdldCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4ucC01IHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50OyB9XFxuXFxuLyogR3JpZCBwb3NpdGlvbmluZyAqL1xcbiNzY2VuYXJpby1kYXNoYm9hcmQtZ3JpZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcXG4gIGZvbnQtc2l6ZTogMTI1JSAhaW1wb3J0YW50OyB9XFxuICAjc2NlbmFyaW8tZGFzaGJvYXJkLWdyaWQgLmdyaWQtaXRlbSB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICNzY2VuYXJpby1kYXNoYm9hcmQtZ3JpZCAjdGVtcGxhdGUtY29tcG9uZW50X19ncmlkLWl0ZW0ge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDE7IH1cXG4gICNzY2VuYXJpby1kYXNoYm9hcmQtZ3JpZCAjbGF5ZXItY29tcG9uZW50X19ncmlkLWl0ZW0ge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDIgLyA0OyB9XFxuICAjc2NlbmFyaW8tZGFzaGJvYXJkLWdyaWQgI2xheWVyLWxpc3RfX2dyaWQtaXRlbSB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTsgfVxcbiAgI3NjZW5hcmlvLWRhc2hib2FyZC1ncmlkICNib3R0b20tZ3JpZC1pdGVtIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJvdHRvbTogOTAlOyB9XFxuICAjc2NlbmFyaW8tZGFzaGJvYXJkLWdyaWQgLmxvYWRpbmcge1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiAyMDBweDsgfVxcblxcbi8qIEJ1dHRvbnMgYW5kIGljb25zICovXFxuLmFkZC1idXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLmFkZC1idXR0b24gLmljb24tYnRuLXNpemVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAuYWRkLWJ1dHRvbiAuamltdS1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHggIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4OyB9XFxuXFxuI29wZW4tc2F2ZS10ZW1wbGF0ZS1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcGFkZGluZzogMHJlbSAwLjc1cmVtOyB9XFxuICAjb3Blbi1zYXZlLXRlbXBsYXRlLWJ1dHRvbiAuamltdS1pY29uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4OyB9XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktNTAwKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTUwMCk7IH1cXG5cXG4uYnRuLXByaW1hcnk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTIwMCk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeS0yMDApOyB9XFxuXFxuLmFkdmFuY2VkLXNlbGVjdC1tZW51IC5zZWxlY3QtaXRlbS1wbGFjZWhvbGRlciB7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIHdpZHRoOiAwICFpbXBvcnRhbnQ7IH1cXG5cXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDsgfVxcblxcbi5tdWx0aXBsZS1zZWxlY3QtdG9vbCB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4uamltdS1kcm9wZG93bi1pdGVtID4gLmppbXUtY2hlY2tib3gge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuQGtleWZyYW1lcyBuZXctaXRlbSB7XFxuICBmcm9tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTEwMCk7IH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS0xMDApOyB9XFxuICB0byB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9IH1cXG5cXG4ubW9kYWwtY29udGVudCAubWVudS1uYXZpZ2F0aW9uIC5uYXYtbGluay5hY3RpdmUge1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXFxuLmV4cG9ydC1kb3dubG9hZC1saW5rIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NjZW5hcmlvLWRhc2hib2FyZC9zcmMvcnVudGltZS9XaWRnZXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLDBCQUEwQixFQUFBOztBQUk5QixxQkFBQTtBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsMEJBQTBCLEVBQUE7RUFQOUI7SUFVUSwwQkFBMEI7SUFDMUIsa0JBQWtCLEVBQUE7RUFYMUI7SUFlUSxjQUFjO0lBQ2QsV0FBVyxFQUFBO0VBaEJuQjtJQW9CUSxjQUFjO0lBQ2QsZUFBZSxFQUFBO0VBckJ2QjtJQXlCUSxjQUFjO0lBQ2QsZUFBZTtJQUNmLDhCQUE4QixFQUFBO0VBM0J0QztJQStCUSxjQUFjO0lBQ2QsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixXQUFXLEVBQUE7RUFsQ25CO0lBc0NRLFlBQVk7SUFDWixZQUFZLEVBQUE7O0FBSXBCLHNCQUFBO0FBQ0E7RUFDSSxXQUFXO0VBQ1gsY0FBYyxFQUFBO0VBRmxCO0lBS1EscUJBQXFCO0lBQ3JCLGdCQUFnQixFQUFBO0VBTnhCO0lBVVEsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTs7QUFJMUI7RUFJSSxrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7RUFMekI7SUFFUSxrQkFBa0IsRUFBQTs7QUFNMUI7RUFDSSxzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLHNDQUFzQztFQUN0QyxrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDSSxvQkFBb0I7RUFDcEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kseUNBQXlDLEVBQUE7O0FBRzdDO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0k7SUFBTSxzQ0FBc0MsRUFBQTtFQUM1QztJQUFLLHNDQUFzQyxFQUFBO0VBQzNDO0lBQUksNkJBQTZCLEVBQUEsRUFBQTs7QUFHckM7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmppbXUtd2lkZ2V0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucC01IHtcXG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbi8qIEdyaWQgcG9zaXRpb25pbmcgKi9cXG4jc2NlbmFyaW8tZGFzaGJvYXJkLWdyaWQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDUwJSk7XFxuICAgIGZvbnQtc2l6ZTogMTI1JSAhaW1wb3J0YW50O1xcblxcbiAgICAuZ3JpZC1pdGVtIHtcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgICN0ZW1wbGF0ZS1jb21wb25lbnRfX2dyaWQtaXRlbSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgICAgIGdyaWQtcm93OiAxO1xcbiAgICB9XFxuXFxuICAgICNsYXllci1jb21wb25lbnRfX2dyaWQtaXRlbSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gNDtcXG4gICAgfVxcblxcbiAgICAjbGF5ZXItbGlzdF9fZ3JpZC1pdGVtIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB9XFxuXFxuICAgICNib3R0b20tZ3JpZC1pdGVtIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBib3R0b206IDkwJTtcXG4gICAgfVxcblxcbiAgICAubG9hZGluZyB7XFxuICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgIH1cXG59XFxuXFxuLyogQnV0dG9ucyBhbmQgaWNvbnMgKi9cXG4uYWRkLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG5cXG4gICAgLmljb24tYnRuLXNpemVyIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIH1cXG5cXG4gICAgLmppbXUtaWNvbiB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcXG4gICAgfVxcbn1cXG5cXG4jb3Blbi1zYXZlLXRlbXBsYXRlLWJ1dHRvbiB7XFxuICAgIC5qaW11LWljb24ge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgICB9XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogMHJlbSAwLjc1cmVtO1xcbn1cXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay04MDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktNTAwKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktNTAwKTtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTIwMCk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTIwMCk7XFxufVxcblxcbi5hZHZhbmNlZC1zZWxlY3QtbWVudSAuc2VsZWN0LWl0ZW0tcGxhY2Vob2xkZXIge1xcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcXG59XFxuXFxuLm11bHRpcGxlLXNlbGVjdC10b29sIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uamltdS1kcm9wZG93bi1pdGVtID4gLmppbXUtY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbkBrZXlmcmFtZXMgbmV3LWl0ZW0ge1xcbiAgICBmcm9tIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMTAwKX1cXG4gICAgNTAlIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMTAwKX1cXG4gICAgdG8ge2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50fVxcbn1cXG5cXG4ubW9kYWwtY29udGVudCAubWVudS1uYXZpZ2F0aW9uIC5uYXYtbGluay5hY3RpdmUge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5leHBvcnQtZG93bmxvYWQtbGluayB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vTGF5ZXJDb21wb25lbnQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vTGF5ZXJDb21wb25lbnQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9MYXllckxpc3RDb21wb25lbnQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vTGF5ZXJMaXN0Q29tcG9uZW50LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vVGVtcGxhdGVDb21wb25lbnQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vVGVtcGxhdGVDb21wb25lbnQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9XaWRnZXQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vV2lkZ2V0LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgTGluaywgTW9kYWwsIE1vZGFsQm9keSwgTW9kYWxIZWFkZXIsIE1vZGFsRm9vdGVyIH0gZnJvbSAnamltdS11aSc7XG5cbmludGVyZmFjZSBFeHBvcnRDU1ZDb21wb25lbnRQcm9wcyB7XG4gIHN0YXR1czogc3RyaW5nIC8vIHRoZSBjdXJyZW50IGV4cG9ydCBzdGF0dXNcbiAgb25FeHBvcnREYXRhOiAoKSA9PiBhbnkgLy8gaGFuZGxlcyB0aGUgZXhwb3J0IGpvYlxufVxuXG5pbnRlcmZhY2UgRXhwb3J0Q1NWQ29tcG9uZW50U3RhdGUge1xuICBtb2RhbE9wZW46IGJvb2xlYW4gLy8gd2hldGhlciB0aGUgbW9kYWwgaXMgb3BlblxufVxuXG4vKipcbiAqIEV4cG9ydENTVkNvbXBvbmVudCBjcmVhdGVzIGEgbGluayBhbmQgbW9kYWwgZm9yIHVzZXJzIHRvIGV4cG9ydCBkYXRhXG4gKi9cbmNsYXNzIEV4cG9ydENTVkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxFeHBvcnRDU1ZDb21wb25lbnRQcm9wcywgRXhwb3J0Q1NWQ29tcG9uZW50U3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb2RhbE9wZW46IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgc3RhdHVzZXMgPSB7XG4gICAgXCJJbml0aWF0ZWRcIjoge1xuICAgICAgICB0ZXh0OiBcIldhaXRpbmcgZm9yIGV4cG9ydFwiLFxuICAgICAgICBpY29uOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL2Nsb2NrLTI0LnN2Z1wiXG4gICAgfSxcbiAgICBcIlJlLWNoZWNraW5nXCI6IHtcbiAgICAgICAgdGV4dDogXCJFeHBvcnQgc3RpbGwgaW4gcHJvZ3Jlc3MgLSBSZS1jaGVja2luZ1wiLFxuICAgICAgICBpY29uOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL2Nsb2NrLWZvcndhcmQtMjQuc3ZnXCJcbiAgICB9LFxuICAgIFwiQ29tcGxldGVkXCI6IHtcbiAgICAgICAgdGV4dDogXCJFeHBvcnQgRG9uZSFcIixcbiAgICAgICAgaWNvbjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9jaGVjay1jaXJjbGUtMjQtZi5zdmdcIlxuICAgIH0sXG4gICAgXCJGYWlsZWRcIjoge1xuICAgICAgICB0ZXh0OiBcIkV4cG9ydCBmYWlsZWRcIixcbiAgICAgICAgaWNvbjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9leGNsYW1hdGlvbi1tYXJrLWNpcmNsZS0yNC1mLnN2Z1wiXG4gICAgfSxcbiAgICBcIkNhbmNlbGVkXCI6IHtcbiAgICAgICAgdGV4dDogXCJFeHBvcnQgY2FuY2VsZWRcIixcbiAgICAgICAgaWNvbjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9jaXJjbGUtZGlzYWxsb3dlZC0yNC5zdmdcIlxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgZm9yIHN0YXR1cyBhbmQgcmV0dXJucyB0ZXh0IGlmIHN0YXR1cyBleGlzdHNcbiAgICogQHJldHVybnMgU3RyaW5nXG4gICAqL1xuICBzdGF0dXNNZXNzYWdlID0gKCkgPT4ge1xuICAgIGxldCBzdGF0dXMgPSB0aGlzLnN0YXR1c2VzW3RoaXMucHJvcHMuc3RhdHVzXTtcbiAgICBpZiAoc3RhdHVzKXtcbiAgICAgICAgcmV0dXJuIHN0YXR1cy50ZXh0OyAgICBcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGZvciBzdGF0dXMgYW5kIHJldHVybnMgdXJsIG9mIGljb24gaWYgc3RhdHVzIGV4aXN0c1xuICAgKiBAcmV0dXJucyBTdHJpbmdcbiAgICovXG4gIHN0YXR1c0ljb24gPSAoKSA9PiB7XG4gICAgbGV0IHN0YXR1cyA9IHRoaXMuc3RhdHVzZXNbdGhpcy5wcm9wcy5zdGF0dXNdO1xuICAgIGlmIChzdGF0dXMpe1xuICAgICAgICByZXR1cm4gc3RhdHVzLmljb247ICAgIFxuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2VkID0gKCkgPT4ge1xuICAgIC8vIENsb3NlIHRoZSBtb2RhbCB3aGVuIHRoZSAnQ2FuY2VsJyBidXR0b24gaXMgY2xpY2tlZFxuICAgIC8vIE5vdGU6IFVzZSB0aGlzLnNldFN0YXRlIHRvIHVwZGF0ZSB0aGUgc3RhdGVcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9kYWxPcGVuOiBmYWxzZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGV4cG9ydCBkYXRhIGluIHdpZGdldFxuICAgKi9cbiAgb25FeHBvcnREYXRhID0gKCkgPT4ge1xuICAgIC8vIE9wZW4gdGhlIG1vZGFsIHdoZW4gZXhwb3J0IGlzIHRyaWdnZXJlZFxuICAgIC8vIE5vdGU6IFVzZSB0aGlzLnNldFN0YXRlIHRvIHVwZGF0ZSB0aGUgc3RhdGVcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9kYWxPcGVuOiB0cnVlIH0pO1xuICAgIHRoaXMucHJvcHMub25FeHBvcnREYXRhKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJleHBvcnRcIj5cbiAgICAgICAgPGRpdiBpZD1cImV4cG9ydC1saW5rXCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGlkPVwibGF5ZXItZXhwb3J0LWJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uRXhwb3J0RGF0YX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBpY29uPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvZG93bmxvYWQtdG8tMjQuc3ZnXCI+PC9JY29uPlxuICAgICAgICAgICAgRXhwb3J0IGxheWVycyBhcyBjc3ZcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiZXhwb3J0LW1vZGFsXCI+XG4gICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUubW9kYWxPcGVufVxuICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLm9uQ2xvc2VkfSAvLyBVc2Ugb25DbG9zZWQgdG8gdG9nZ2xlIHRoZSBtb2RhbFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhwb3J0LXN0YXR1cy1tb2RhbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dGhpcy5vbkNsb3NlZH0+XG4gICAgICAgICAgICAgIEV4cG9ydCBTdGF0dXNcbiAgICAgICAgICAgIDwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICA8TW9kYWxCb2R5PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cG9ydC1zdGF0dXMtbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgIDxJY29uIGljb249e3RoaXMuc3RhdHVzSWNvbigpfT48L0ljb24+IHt0aGlzLnN0YXR1c01lc3NhZ2UoKX1cbiAgICAgICAgICAgICAgICB7ICh0aGlzLnByb3BzLmRvd25sb2FkTGluayAmJiB0aGlzLnByb3BzLmRvd25sb2FkTGluay5sZW5ndGggPiAwKSAmJlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4cG9ydC1kb3dubG9hZC1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgdG89e3RoaXMucHJvcHMuZG93bmxvYWRMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWQgY3N2IFxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL2Fycm93LWNpcmNsZS1kb3duLTI0LnN2Z1wiPjwvSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+SWYgaXRlbSBkb2VzIG5vdCBleGlzdCBvciBpcyBpbmFjY2Vzc2libGUsIHRyeSBsaW5rIGFnYWluLjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xvc2VkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBvcnRDU1ZDb21wb25lbnQ7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnV0dG9uLCBJY29ufSBmcm9tIFwiamltdS11aVwiO1xuaW1wb3J0IExheWVyIGZyb20gXCJlc3JpL2xheWVycy9MYXllclwiO1xuaW1wb3J0IExheWVyV3JhcHBlciBmcm9tIFwiLi4vTGF5ZXJXcmFwcGVyXCI7XG5cbmludGVyZmFjZSBBZGRMYXllckl0ZW1Qcm9wcyB7XG4gICAgbGF5ZXJXcmFwcGVyOiBMYXllcldyYXBwZXIgLy8gTGF5ZXJXcmFwcGVyIG9mIHRoZSBhc3NvY2lhdGVkIExheWVyXG4gICAgb25BZGRMYXllcjogKGxheWVyV3JhcHBlcjogTGF5ZXJXcmFwcGVyKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiBhZGRpbmcgTGF5ZXJcbiAgICBhY3RpdmU6IGJvb2xlYW4gLy8gd2hldGhlciB0aGUgTGF5ZXIgaXMgYWN0aXZlXG59XG5cblxuLyoqXG4gKiBBZGRMYXllckl0ZW0gYWxsb3dzIHRoZSB1c2VyIHRvIGFkZCBhIExheWVyIHRvIHRoZSBNYXBcbiAqL1xuY2xhc3MgQWRkTGF5ZXJJdGVtIGV4dGVuZHMgQ29tcG9uZW50PEFkZExheWVySXRlbVByb3BzLCB7fT4ge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b25cIlxuICAgICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQWRkTGF5ZXIodGhpcy5wcm9wcy5sYXllcldyYXBwZXIpfVxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRlcnRpYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5hY3RpdmV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17dGhpcy5wcm9wcy5hY3RpdmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9jaGVjay0zMi5zdmdcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL3BsdXMtMzIuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sYXllcldyYXBwZXIudGl0bGV9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZExheWVySXRlbTtcbiIsImltcG9ydCBcIi4vTGF5ZXJDb21wb25lbnQuc2Nzc1wiO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1RhYiwgVGFic30gZnJvbSAnamltdS11aSc7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi4vQ2F0ZWdvcnknO1xuaW1wb3J0IExheWVyU2VhcmNoIGZyb20gXCIuL0xheWVyU2VhcmNoXCI7XG5pbXBvcnQgQWRkTGF5ZXJJdGVtIGZyb20gXCIuL0FkZExheWVySXRlbVwiO1xuaW1wb3J0IExheWVyV3JhcHBlciBmcm9tIFwiLi4vTGF5ZXJXcmFwcGVyXCI7XG5cbmludGVyZmFjZSBBZGRMYXllcnNQcm9wcyB7XG4gICAgbGF5ZXJzOiBMYXllcldyYXBwZXJbXSAvLyBMaXN0IG9mIExheWVyV3JhcHBlcnMgdG8gcmVuZGVyXG4gICAgYWN0aXZlTGF5ZXJzOiBMYXllcldyYXBwZXJbXSAvLyBsaXN0IG9mIGFjdGl2ZSBMYXllcnNcbiAgICBvbkFkZExheWVyOiAobGF5ZXJXcmFwcGVyOiBMYXllcldyYXBwZXIpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIGFkZGluZyBMYXllcnNcbiAgICBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdIC8vIGxpc3Qgb2YgQ2F0ZWdvcmllc1xufVxuXG4vKipcbiAqIExheWVyQ29tcG9uZW50IGNvbnRhaW5zIG11bHRpcGxlIFRhYnMgb2YgQ2F0ZWdvcmllcyBhbmQgYWxsb3dzIHVzZXJzIHRvIGFkZCBMYXllcnMgdG8gdGhlIE1hcFxuICovXG5jbGFzcyBMYXllckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxBZGRMYXllcnNQcm9wcywge30+IHtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgbGlzdCBvZiBDYXRlZ29yaWVzIGFzIFRhYnNcbiAgICAgKi9cbiAgICByZW5kZXJDYXRlZ29yeVRhYnM6IEZ1bmN0aW9uID0gKCk6IFJlYWN0LlJlYWN0RWxlbWVudFtdID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e1wiY2F0ZWdvcnktXCIgKyBjYXRlZ29yeS5pZCArIFwiLXRhYlwifVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y2F0ZWdvcnkudGl0bGUgKyBcIiAoXCIgKyBjYXRlZ29yeS5sYXllcldyYXBwZXJzLmxlbmd0aCArIFwiKVwifVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17XCJjYXRlZ29yeS1cIiArIGNhdGVnb3J5LmlkICsgXCItdGFiLWNvbnRlbnRcIn0gY2xhc3NOYW1lPVwibGF5ZXItdGFic19fY29udGVudCBwLTUgYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubGF5ZXJXcmFwcGVycy5tYXAoKGxheWVyV3JhcHBlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRMYXllckl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyV3JhcHBlcj17bGF5ZXJXcmFwcGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRMYXllcj17dGhpcy5wcm9wcy5vbkFkZExheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVycy5pbmNsdWRlcyhsYXllcldyYXBwZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGF5ZXItY29tcG9uZW50XCI+XG4gICAgICAgICAgICAgICAgPGg0PkxheWVyczwvaDQ+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubGF5ZXJzICYmIChcbiAgICAgICAgICAgICAgICAgICAgPExheWVyU2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcnM9e3RoaXMucHJvcHMubGF5ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRMYXllcj17dGhpcy5wcm9wcy5vbkFkZExheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTGF5ZXJzPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVyc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItdGFic1wiPlxuICAgICAgICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKXt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNhdGVnb3JpZXMgJiYgdGhpcy5yZW5kZXJDYXRlZ29yeVRhYnMoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllckNvbXBvbmVudDtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0FkdmFuY2VkU2VsZWN0LCBJY29ufSBmcm9tIFwiamltdS11aVwiO1xuaW1wb3J0IEFkZExheWVySXRlbSBmcm9tIFwiLi9BZGRMYXllckl0ZW1cIjtcbmltcG9ydCBMYXllcldyYXBwZXIgZnJvbSBcIi4uL0xheWVyV3JhcHBlclwiO1xuXG5pbnRlcmZhY2UgQWRkTGF5ZXJTZWFyY2hQcm9wcyB7XG4gICAgbGF5ZXJzOiBMYXllcldyYXBwZXJbXSAvLyBsaXN0IG9mIExheWVyV3JhcHBlcnMgdG8gcmVuZGVyXG4gICAgYWN0aXZlTGF5ZXJzOiBMYXllcldyYXBwZXJbXSAvLyBsaXN0IG9mIGFjdGl2ZSBMYXllcnNcbiAgICBvbkFkZExheWVyOiAobGF5ZXJXcmFwcGVyOiBMYXllcldyYXBwZXIpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIGFkZGluZyBMYXllcnNcbn1cblxuLyoqXG4gKiBMYXllclNlYXJjaCBhbGxvd3MgdXNlcnMgdG8gc2VhcmNoIGZvciBhbmQgYWRkIExheWVycyB0byB0aGUgTWFwXG4gKi9cbmNsYXNzIExheWVyU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50PEFkZExheWVyU2VhcmNoUHJvcHMsIHt9PiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImxheWVyLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxBZHZhbmNlZFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBpc011bHRpcGxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBpc0VtcHR5T3B0aW9uSGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgc29ydFZhbHVlc0J5TGFiZWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG1lbnVQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBbMCwgLTQwXVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjdXN0b21Ecm9wZG93bkJ1dHRvbkNvbnRlbnQ9eygpID0+IHtyZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvc2VhcmNoLTMyLnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2ggZm9yIGxheWVyLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX19XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1ZhbHVlcz17dGhpcy5wcm9wcy5sYXllcnMubWFwKChsYXllcldyYXBwZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGxheWVyV3JhcHBlci50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbGF5ZXJXcmFwcGVyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxBZGRMYXllckl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyV3JhcHBlcj17bGF5ZXJXcmFwcGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRMYXllcj17dGhpcy5wcm9wcy5vbkFkZExheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVycy5pbmNsdWRlcyhsYXllcldyYXBwZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllclNlYXJjaDtcbiIsImltcG9ydCBcIi4vTGF5ZXJMaXN0Q29tcG9uZW50LnNjc3NcIjtcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0J1dHRvbiwgRHJvcGRvd24sIERyb3Bkb3duQnV0dG9uLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbSwgSWNvbn0gZnJvbSBcImppbXUtdWlcIjtcblxuaW50ZXJmYWNlIExheWVyTGlzdEJ1dHRvbnNQcm9wcyB7XG4gICAgb25DbGVhckFsbDogKCkgPT4gYW55IC8vIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGNsZWFyIGFsbCBMYXllcnNcbiAgICBvbkhpZGVMZWdlbmQ6ICgpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB0byBoaWRlIGxlZ2VuZHNcbiAgICBvblNob3dMZWdlbmQ6ICgpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB0byBzaG93IGxlZ2VuZHNcbiAgICBvbkhpZGVMYXllcnM6ICgpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB0byBoaWRlIGFsbCBMYXllcnNcbiAgICBvblNob3dMYXllcnM6ICgpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB0byBzaG93IGFsbCBMYXllcnNcbiAgICBhbGxMYXllcnNIaWRkZW46IGJvb2xlYW4gLy8gd2hldGhlciBhbGwgTGF5ZXJzIGFyZSBoaWRkZW5cbiAgICBhbGxMZWdlbmRzT3BlbjogYm9vbGVhbiAvLyB3aGV0aGVyIGFsbCBsZWdlbmRzIGFyZSBvcGVuXG4gICAgYWxsTGVnZW5kc0Nsb3NlZDogYm9vbGVhbiAvLyB3aGV0aGVyIGFsbCBsZWdlbmRzIGFyZSBjbG9zZWRcbn1cblxuaW50ZXJmYWNlIExheWVyTGlzdEJ1dHRvbnNTdGF0ZSB7XG59XG5cbi8qKlxuICogTGF5ZXJMaXN0QnV0dG9ucyBjb250YWlucyBCdXR0b25zIHRoYXQgY29udHJvbCB0aGUgYmVoYXZpb3Igb2YgYSBMYXllckxpc3RcbiAqL1xuY2xhc3MgTGF5ZXJMaXN0QnV0dG9ucyBleHRlbmRzIENvbXBvbmVudDxMYXllckxpc3RCdXR0b25zUHJvcHMsIExheWVyTGlzdEJ1dHRvbnNTdGF0ZT4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsYXllci1saXN0X19idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNsZWFyLWFsbC1idXR0b24tZ3JpZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsZWFyQWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbGVhci1hbGwtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENsZWFyIEFsbFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibGVnZW5kLWJ1dHRvbi1ncmlkLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsZWdlbmQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVydGlhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93PXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZWdlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvaGFtYnVyZ2VyLTMyLnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25tZW50PVwiZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25TaG93TGVnZW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNob3ctbGVnZW5kLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmFsbExlZ2VuZHNPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyBBbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25IaWRlTGVnZW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImhpZGUtbGVnZW5kLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmFsbExlZ2VuZHNDbG9zZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaWRlIEFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxheWVyLXZpc2liaWxpdHktZ3JpZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGF5ZXItdmlzaWJpbGl0eS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlcnRpYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5hbGxMYXllcnNIaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNob3dMYXllcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZUxheWVycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17dGhpcy5wcm9wcy5hbGxMYXllcnNIaWRkZW4gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL3ZpZXctaGlkZS0zMi5zdmdcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvdmlldy12aXNpYmxlLTMyLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hbGxMYXllcnNIaWRkZW4gPyBcIlNob3cgQWxsXCIgOiBcIkhpZGUgQWxsXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllckxpc3RCdXR0b25zO1xuIiwiaW1wb3J0IFwiLi9MYXllckxpc3RDb21wb25lbnQuc2Nzc1wiO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXllciBmcm9tIFwiZXNyaS9sYXllcnMvTGF5ZXJcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xuaW1wb3J0IHtKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnR9IGZyb20gJ2ppbXUtYXJjZ2lzJztcbmltcG9ydCBMYXllckxpc3QgZnJvbSBcImVzcmkvd2lkZ2V0cy9MYXllckxpc3RcIjtcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiZXNyaS93aWRnZXRzL0xheWVyTGlzdC9MaXN0SXRlbVwiO1xuaW1wb3J0IExheWVyU3R5bGVNb2RhbCBmcm9tIFwiLi9MYXllclN0eWxlTW9kYWxcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi4vVGVtcGxhdGVcIjtcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi4vQ2F0ZWdvcnlcIjtcbmltcG9ydCByZWFjdGl2ZVV0aWxzIGZyb20gXCJlc3JpL2NvcmUvcmVhY3RpdmVVdGlsc1wiO1xuaW1wb3J0IExheWVyTGlzdEJ1dHRvbnMgZnJvbSBcIi4vTGF5ZXJMaXN0QnV0dG9uc1wiO1xuaW1wb3J0IE1vcmVJbmZvTW9kYWwgZnJvbSBcIi4vTW9yZUluZm9Nb2RhbFwiO1xuaW1wb3J0IExlZ2VuZCBmcm9tIFwiZXNyaS93aWRnZXRzL0xlZ2VuZFwiO1xuXG5pbnRlcmZhY2UgTGF5ZXJMaXN0UHJvcHMge1xuICAgIHVzZU1hcFdpZGdldElkOiBzdHJpbmcgLy8gTWFwIHdpZGdldCBJRCB0byB1c2VcbiAgICBvblJlbW92ZUxheWVyOiAobGF5ZXI6IExheWVyKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiByZW1vdmluZyBMYXllclxuICAgIGdldExheWVyVGVtcGxhdGVzOiAobGF5ZXI6IExheWVyLCBhY3RpdmU6IGJvb2xlYW4pID0+IFRlbXBsYXRlW10gLy8gcmV0dXJucyBhY3RpdmUgVGVtcGxhdGVzIGZvciB0aGUgZ2l2ZW4gTGF5ZXJcbiAgICBnZXRMYXllckNhdGVnb3J5OiAobGF5ZXI6IExheWVyKSA9PiBDYXRlZ29yeSAvLyByZXR1cm5zIENhdGVnb3J5IG9mIHRoZSBnaXZlbiBMYXllclxuICAgIG51bUFjdGl2ZUxheWVyczogbnVtYmVyIC8vIHRoZSBudW1iZXIgb2YgYWN0aXZlIExheWVyc1xuICAgIG9uQ2xlYXJBbGw6ICgpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIGNsZWFyaW5nIGFsbCBMYXllcnNcbiAgICBnZXRMYXllckluZm86IChsYXllcjogTGF5ZXIpID0+IGFueVxufVxuXG5pbnRlcmZhY2UgTGF5ZXJMaXN0U3RhdGUge1xuICAgIGptdjogSmltdU1hcFZpZXcgLy8gSmltdU1hcFZpZXcgb2YgdGhlIGFzc29jaWF0ZWQgTWFwXG4gICAgd2lkZ2V0OiBMYXllckxpc3QgLy8gTGF5ZXJMaXN0IHdpZGdldCB0byByZW5kZXJcbiAgICBsYXllclN0eWxlTW9kYWxPcGVuOiBib29sZWFuIC8vIHdoZXRoZXIgdGhlIExheWVyU3R5bGVNb2RhbCBpcyBvcGVuXG4gICAgbW9yZUluZm9Nb2RhbE9wZW46IGJvb2xlYW4gLy8gd2hldGhlciB0aGUgTW9yZUluZm9Nb2RhbCBpcyBvcGVuXG4gICAgc2VsZWN0ZWRJdGVtOiBMaXN0SXRlbSAvLyBjdXJyZW50bHkgc2VsZWN0ZWQgTGF5ZXIgZm9yIExheWVyU3R5bGVNb2RhbCBwdXJwb3Nlc1xuICAgIGFsbExheWVyc0hpZGRlbjogYm9vbGVhbiAvLyB3aGV0aGVyIGFsbCBMYXllcnMgYXJlIGhpZGRlblxuICAgIGFsbExlZ2VuZHNPcGVuOiBib29sZWFuIC8vIHdoZXRoZXIgYWxsIGxlZ2VuZHMgYXJlIG9wZW5cbiAgICBhbGxMZWdlbmRzQ2xvc2VkOiBib29sZWFuIC8vIHdoZXRoZXIgYWxsIGxlZ2VuZHMgYXJlIGNsb3NlZFxufVxuXG4vKipcbiAqIExheWVyTGlzdENvbXBvbmVudCBpcyBhIGN1c3RvbWl6ZWQgQXJjR0lTIExheWVyTGlzdCB3aWRnZXQgdGhhdCBhbGxvd3MgdXNlcnMgdG8gcmVvcmRlciwgcmVtb3ZlLCBhbmQgcmVjb2xvclxuICogTWFwIGxheWVycy5cbiAqL1xuY2xhc3MgTGF5ZXJMaXN0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PExheWVyTGlzdFByb3BzLCBMYXllckxpc3RTdGF0ZT4ge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBteVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgam12OiBudWxsLFxuICAgICAgICAgICAgd2lkZ2V0OiBudWxsLFxuICAgICAgICAgICAgbGF5ZXJTdHlsZU1vZGFsT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBtb3JlSW5mb01vZGFsT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXG4gICAgICAgICAgICBhbGxMYXllcnNIaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgYWxsTGVnZW5kc09wZW46IGZhbHNlLFxuICAgICAgICAgICAgYWxsTGVnZW5kc0Nsb3NlZDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGVzIExheWVyTGlzdCBzZWxlY3Rpb24gYmVoYXZpb3Igd2l0aCBhIGN1c3RvbSBiZWhhdmlvciB3aGVuIExheWVySXRlbSBpcyBjbGlja2VkXG4gICAgICogQHBhcmFtIGl0ZW0gdGhlIGNsaWNrZWQgTGF5ZXJJdGVtXG4gICAgICovXG4gICAgb25JdGVtQ2xpY2sgPSAoaXRlbTogTGlzdEl0ZW0pID0+IHtcbiAgICAgICAgLy8gUmVtb3ZlZCB0b2dnbGUgdmlzaWJpbGl0eSBmdW5jdGlvbmFsaXR5IGluIFVYIENoYW5nZXMgUm91bmQgMiB0byBtYWtlIGRyYWcgYW5kIGRyb3BcbiAgICAgICAgLy8gYWZmb3JkYWJpbGl0eSBtb3JlIGNsZWFyXG4gICAgICAgIC8vIGl0ZW0ubGF5ZXIudmlzaWJsZSA9ICFpdGVtLmxheWVyLnZpc2libGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgYWxsIGxlZ2VuZHMgaW4gdGhlIExheWVyTGlzdFxuICAgICAqL1xuICAgIHNob3dMZWdlbmQgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGxpIG9mIHRoaXMuc3RhdGUud2lkZ2V0Lm9wZXJhdGlvbmFsSXRlbXMpIHtcbiAgICAgICAgICAgIGxpLnBhbmVsLm9wZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIGFsbCBsZWdlbmRzIGluIHRoZSBMYXllckxpc3RcbiAgICAgKi9cbiAgICBoaWRlTGVnZW5kID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBsaSBvZiB0aGlzLnN0YXRlLndpZGdldC5vcGVyYXRpb25hbEl0ZW1zKSB7XG4gICAgICAgICAgICBsaS5wYW5lbC5vcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhbGwgb3BlcmF0aW9uYWwgTGF5ZXJzXG4gICAgICovXG4gICAgc2hvd0xheWVycyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgbGkgb2YgdGhpcy5zdGF0ZS53aWRnZXQub3BlcmF0aW9uYWxJdGVtcykge1xuICAgICAgICAgICAgbGkubGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlcyBhbGwgb3BlcmF0aW9uYWwgTGF5ZXJzXG4gICAgICovXG4gICAgaGlkZUxheWVycyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgbGkgb2YgdGhpcy5zdGF0ZS53aWRnZXQub3BlcmF0aW9uYWxJdGVtcykge1xuICAgICAgICAgICAgbGkubGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgY29sb3IgYW5kIHNpemUgb2YgdGhpcy5jdXJyZW50LmxheWVyIGJhc2VkIG9uIGxheWVyIHN0eWxlIE1vZGFsXG4gICAgICovXG4gICAgY2hhbmdlU3R5bGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmcmVzaCh0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbGF5ZXJTdHlsZU1vZGFsT3BlbjogZmFsc2VcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGhlYWRlciBmb3IgTGVnZW5kXG4gICAgICogQHJldHVybiBhbiBIVE1MRWxlbWVudCB3aXRoIHRoZSB0ZXh0IFwiTGVnZW5kOiBcIlxuICAgICAqL1xuICAgIGNyZWF0ZUxlZ2VuZERpdiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwibGVnZW5kX19oZWFkZXJcIlxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiTGVnZW5kOiBcIlxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGFjdGl2ZSBUZW1wbGF0ZXMgZm9yIHRoZSBnaXZlbiBMYXllclxuICAgICAqIEBwYXJhbSBsYXllciB0aGUgTGF5ZXIgdG8gY2hlY2tcbiAgICAgKiBAcmV0dXJuIGFuIEhUTUxFbGVtZW50IHdpdGggYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBhY3RpdmUgVGVtcGxhdGUgbmFtZXNcbiAgICAgKi9cbiAgICBjcmVhdGVUZW1wbGF0ZXNEaXYgPSAobGF5ZXI6IExheWVyKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImxlZ2VuZF9fdGVtcGxhdGVzXCJcbiAgICAgICAgbGV0IGFjdGl2ZVRlbXBsYXRlcyA9IHRoaXMucHJvcHMuZ2V0TGF5ZXJUZW1wbGF0ZXMobGF5ZXIsIHRydWUpO1xuXG4gICAgICAgIGlmIChhY3RpdmVUZW1wbGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiRXZlbnRzOiBOb25lXCI7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhY3RpdmVUZW1wbGF0ZUxpc3QgPSBcIkV2ZW50czogXCI7XG4gICAgICAgIGZvciAobGV0IHRlbXBsYXRlIG9mIGFjdGl2ZVRlbXBsYXRlcykge1xuICAgICAgICAgICAgYWN0aXZlVGVtcGxhdGVMaXN0ICs9IFwiIFwiICsgdGVtcGxhdGUudGl0bGUgKyBcIixcIlxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYWN0aXZlVGVtcGxhdGVMaXN0LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgQ2F0ZWdvcnkgb2YgdGhlIGdpdmVuIExheWVyXG4gICAgICogQHBhcmFtIGxheWVyIHRoZSBMYXllciB0byBjaGVja1xuICAgICAqIEByZXR1cm4gYW4gSFRNTEVsZW1lbnQgd2l0aCB0aGUgbmFtZSBvZiB0aGUgQ2F0ZWdvcnlcbiAgICAgKi9cbiAgICBjcmVhdGVDYXRlZ29yeURpdiA9IChsYXllcjogTGF5ZXIpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwibGVnZW5kX19jYXRlZ29yeVwiO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5nZXRMYXllckNhdGVnb3J5KGxheWVyKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiQ2F0ZWdvcnk6IFwiICsgdGhpcy5wcm9wcy5nZXRMYXllckNhdGVnb3J5KGxheWVyKS50aXRsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoZXMgTGlzdEl0ZW1QYW5lbCBjb250ZW50XG4gICAgICogQHBhcmFtIGl0ZW0gdGhlIExpc3RJdGVtIHRvIHJlZnJlc2hcbiAgICAgKi9cbiAgICByZWZyZXNoID0gKGl0ZW06IExpc3RJdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnBhcmVudCkge1xuICAgICAgICAgICAgaXRlbS5wYW5lbC5jb250ZW50ID0gW1xuICAgICAgICAgICAgICAgIFwibGVnZW5kXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0ucGFuZWwuY29udGVudCA9IFtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUxlZ2VuZERpdigpLFxuICAgICAgICAgICAgICAgIFwibGVnZW5kXCIsXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVUZW1wbGF0ZXNEaXYoaXRlbS5sYXllciksXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVDYXRlZ29yeURpdihpdGVtLmxheWVyKVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBKaW11TWFwVmlldyBhbmQgY3JlYXRlcyBMYXllckxpc3Qgb24gYWN0aXZlIHZpZXcgY2hhbmdlXG4gICAgICogQHBhcmFtIGptdiB0aGUgbmV3IEppbXVNYXBWaWV3XG4gICAgICovXG4gICAgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5qbXYgJiYgdGhpcy5zdGF0ZS53aWRnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2lkZ2V0LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqbXYpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGptdjogam12XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIExheWVyTGlzdFxuICAgICAgICAgICAgaWYgKHRoaXMubXlSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyTGlzdDogTGF5ZXJMaXN0ID0gbmV3IExheWVyTGlzdCh7XG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IGptdi52aWV3LFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIENhbGxlZCBmb3IgZWFjaCBMaXN0SXRlbSBpbiBMYXllckxpc3RcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW1DcmVhdGVkRnVuY3Rpb246IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBldmVudC5pdGVtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbGVnZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBhbmVsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlc3JpLWljb24tZG93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaChpdGVtKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIExpc3RJdGVtIGFjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGl0ZW0ubGF5ZXIud2hlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3Rpb25zU2VjdGlvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVtb3ZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlc3JpLWljb24tbWludXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJab29tIHRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlc3JpLWljb24tem9vbS1pbi1tYWduaWZ5aW5nLWdsYXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInpvb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVkaXQgbGVnZW5kIHN0eWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL2xheWVycy1lZGl0YWJsZS0yNC5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiY2hhbmdlLXN0eWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVkaXQgbGF5ZXIgc3R5bGUgb25seSBzdXBwb3J0cyBTaW1wbGVSZW5kZXJlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxheWVyLnR5cGUgPT09IFwiZmVhdHVyZVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxheWVyLnJlbmRlcmVyLnR5cGUgPT09IFwic2ltcGxlXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtLmxheWVyLnJlbmRlcmVyLnN5bWJvbC5jb2xvciAhPSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYXllci5yZW5kZXJlci5zeW1ib2wudHlwZSA9PT0gXCJwaWN0dXJlLW1hcmtlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTZW5kIGJhY2t3YXJkc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvc2VuZC1iYWNrd2FyZHMtMjQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzZW5kLWJhY2t3YXJkc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkJyaW5nIGZvcndhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL2JyaW5nLWZvcndhcmQtMjQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJicmluZy1mb3J3YXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2VuZCB0byBiYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9zZW5kLXRvLWJhY2stMjQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzZW5kLXRvLWJhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJCcmluZyB0byBmcm9udFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0VzcmkvY2FsY2l0ZS11aS1pY29ucy9tYXN0ZXIvaWNvbnMvYnJpbmctdG8tZnJvbnQtMjQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJicmluZy10by1mcm9udFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlc3JpLWljb24tZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFkZEhhbmRsZXMoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE92ZXJyaWRlIHNlbGVjdGlvbiBiZWhhdmlvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0aXZlVXRpbHMud2F0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IGxheWVyTGlzdC5zZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGl0ZW0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLm9uSXRlbUNsaWNrKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9zZSBhY3Rpb25zIHNlY3Rpb24gd2hlbiBsZWdlbmQgcGFuZWwgb3BlbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdGl2ZVV0aWxzLndoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IGl0ZW0ucGFuZWwub3BlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gaXRlbS5hY3Rpb25zT3BlbiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9zZSBsZWdlbmQgcGFhbmVsIHdoZW4gYWN0aW9ucyBzZWN0aW9uIG9wZW5zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RpdmVVdGlscy53aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiBpdGVtLmFjdGlvbnNPcGVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiBpdGVtLnBhbmVsLm9wZW4gPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMubXlSZWYuY3VycmVudCxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVTZWxlY3Rpb25FbmFibGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgTGlzdEl0ZW0gYWN0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgICAgICAgICBsYXllckxpc3Qub24oXCJ0cmlnZ2VyLWFjdGlvblwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBldmVudC5hY3Rpb24uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyID0gZXZlbnQuaXRlbS5sYXllcjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zdGF0ZS5qbXYudmlldy5tYXAubGF5ZXJzLmZpbmRJbmRleCgobCkgPT4gbCA9PT0gbGF5ZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ6b29tXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR28gdG8gZnVsbCBleHRlbnQgb2YgbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5nb1RvKGxheWVyLmZ1bGxFeHRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJlbW92ZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBsYXllciBmcm9tIG1hcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25SZW1vdmVMYXllcihsYXllcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2hhbmdlLXN0eWxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3BlbiBMYXllciBTdHlsZSBNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlTW9kYWxPcGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW06IGV2ZW50Lml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW5kLWJhY2t3YXJkc1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlbmQgbGF5ZXIgYmFjayAxIGxldmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmptdi52aWV3Lm1hcC5yZW9yZGVyKGxheWVyLCBpbmRleCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJicmluZy1mb3J3YXJkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnJpbmcgbGF5ZXIgZm9yd2FyZCAxIGxldmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEgJiYgaW5kZXggPCB0aGlzLnN0YXRlLmptdi52aWV3Lm1hcC5sYXllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam12LnZpZXcubWFwLnJlb3JkZXIobGF5ZXIsIGluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbmQtdG8tYmFja1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgbGF5ZXIgdG8gYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam12LnZpZXcubWFwLnJlb3JkZXIobGF5ZXIsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJicmluZy10by1mcm9udFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgbGF5ZXIgdG8gZnJvbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmptdi52aWV3Lm1hcC5yZW9yZGVyKGxheWVyLCB0aGlzLnN0YXRlLmptdi52aWV3Lm1hcC5sYXllcnMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlc2NyaXB0aW9uXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVJbmZvTW9kYWxPcGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW06IGV2ZW50Lml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBXYXRjaCBMYXllckxpc3QgcHJvcGVydGllcyB0byBkZXRlcm1pbmUgd2hldGhlciBidXR0b25zIHNob3VsZCBiZSBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIGxheWVyTGlzdC5hZGRIYW5kbGVzKFtcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RpdmVVdGlscy53YXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IGxheWVyTGlzdC5vcGVyYXRpb25hbEl0ZW1zLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiAmJiAhY3Vyci5sYXllci52aXNpYmxlLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbExheWVyc0hpZGRlbjogbGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICYmICFjdXJyLmxheWVyLnZpc2libGUsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICByZWFjdGl2ZVV0aWxzLndhdGNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gbGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICYmIGN1cnIucGFuZWwub3BlbiwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxMZWdlbmRzT3BlbjogbGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICYmIGN1cnIucGFuZWwub3BlbiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0aXZlVXRpbHMud2F0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiBsYXllckxpc3Qub3BlcmF0aW9uYWxJdGVtcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgJiYgIWN1cnIucGFuZWwub3BlbiwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxMZWdlbmRzQ2xvc2VkOiBsYXllckxpc3Qub3BlcmF0aW9uYWxJdGVtcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgJiYgIWN1cnIucGFuZWwub3BlbiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHdpZGdldDogbGF5ZXJMaXN0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLndpZGdldCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnN0YXRlLndpZGdldC52aWV3TW9kZWwub3BlcmF0aW9uYWxJdGVtcykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGF5ZXItbGlzdC1jb21wb25lbnRcIj5cbiAgICAgICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17dGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxoMz57XCJDdXJyZW50IExheWVycyAoXCIgKyB0aGlzLnByb3BzLm51bUFjdGl2ZUxheWVycyArIFwiKVwifTwvaDM+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm51bUFjdGl2ZUxheWVycyA8PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuby1sYXllcnMtbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbT5Zb3UgZG8gbm90IGhhdmUgYW55IGxheWVycyBhZGRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2V0IHN0YXJ0ZWQgYnkgYWRkaW5nIGEgc2NlbmFyaW8gb3IgbGF5ZXIgZnJvbSB0aGUgbGVmdCBzaWRlIG9mIHRoZSBwYW5lbC48L2VtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm51bUFjdGl2ZUxheWVycyA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExheWVyTGlzdEJ1dHRvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsZWFyQWxsPXt0aGlzLnByb3BzLm9uQ2xlYXJBbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlTGVnZW5kPXt0aGlzLmhpZGVMZWdlbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TaG93TGVnZW5kPXt0aGlzLnNob3dMZWdlbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TaG93TGF5ZXJzPXt0aGlzLnNob3dMYXllcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlTGF5ZXJzPXt0aGlzLmhpZGVMYXllcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsTGF5ZXJzSGlkZGVuPXt0aGlzLnN0YXRlLmFsbExheWVyc0hpZGRlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxMZWdlbmRzT3Blbj17dGhpcy5zdGF0ZS5hbGxMZWdlbmRzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxMZWdlbmRzQ2xvc2VkPXt0aGlzLnN0YXRlLmFsbExlZ2VuZHNDbG9zZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsYXllci1saXN0X19jb250ZW50XCIgcmVmPXt0aGlzLm15UmVmfS8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5sYXllciAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbS5sYXllci50eXBlID09PSBcImZlYXR1cmVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0ubGF5ZXIgYXMgRmVhdHVyZUxheWVyKS5yZW5kZXJlci50eXBlID09PSBcInNpbXBsZVwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXllclN0eWxlTW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNhdmU9e3RoaXMuY2hhbmdlU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmxheWVyIGFzIEZlYXR1cmVMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmxheWVyU3R5bGVNb2RhbE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlT3Blbj17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7bGF5ZXJTdHlsZU1vZGFsT3BlbjogIXRoaXMuc3RhdGUubGF5ZXJTdHlsZU1vZGFsT3Blbn0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmxheWVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb3JlSW5mb01vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLmxheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUubW9yZUluZm9Nb2RhbE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlT3Blbj17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7bW9yZUluZm9Nb2RhbE9wZW46ICF0aGlzLnN0YXRlLm1vcmVJbmZvTW9kYWxPcGVufSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TGF5ZXJJbmZvPXt0aGlzLnByb3BzLmdldExheWVySW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJMaXN0Q29tcG9uZW50O1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnV0dG9uLCBNb2RhbCwgTW9kYWxCb2R5LCBNb2RhbEhlYWRlciwgTW9kYWxGb290ZXIsIFNsaWRlcn0gZnJvbSAnamltdS11aSc7XG5pbXBvcnQge0NvbG9yUGlja2VyfSBmcm9tIFwiamltdS11aS9iYXNpYy9jb2xvci1waWNrZXJcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiZXNyaS9Db2xvclwiO1xuaW1wb3J0IFNpbXBsZVJlbmRlcmVyIGZyb20gXCJlc3JpL3JlbmRlcmVycy9TaW1wbGVSZW5kZXJlclwiO1xuaW1wb3J0IFNpbXBsZU1hcmtlclN5bWJvbCBmcm9tIFwiZXNyaS9zeW1ib2xzL1NpbXBsZU1hcmtlclN5bWJvbFwiO1xuaW1wb3J0IFBpY3R1cmVNYXJrZXJTeW1ib2wgZnJvbSBcImVzcmkvc3ltYm9scy9QaWN0dXJlTWFya2VyU3ltYm9sXCI7XG5pbXBvcnQgU2ltcGxlTGluZVN5bWJvbCBmcm9tIFwiZXNyaS9zeW1ib2xzL1BpY3R1cmVNYXJrZXJTeW1ib2xcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xuXG5pbnRlcmZhY2UgTGF5ZXJTdHlsZU1vZGFsUHJvcHMge1xuICAgIG9uU2F2ZTogKCkgPT4gYW55IC8vIGNhbGxiYWNrIGZ1bmN0aW9uIHVwb24gc2F2aW5nIExheWVyIHN0eWxlXG4gICAgbGF5ZXI6IEZlYXR1cmVMYXllciAvLyB0aGUgTGF5ZXIgdG8gZWRpdFxuICAgIG9wZW46IGJvb2xlYW4gLy8gd2hldGhlciB0aGlzIE1vZGFsIGlzIG9wZW5cbiAgICB0b2dnbGVPcGVuOiAoKSA9PiBhbnkgLy8gdG9nZ2xlcyB0aGUgTW9kYWwgYmV0d2VlbiBvcGVuIGFuZCBjbG9zZWRcblxufVxuXG5pbnRlcmZhY2UgTGF5ZXJTdHlsZU1vZGFsU3RhdGUge1xuICAgIHNob3dDb2xvclBpY2tlcjogYm9vbGVhbiAvLyB3aGV0aGVyIHRvIHNob3cgdGhlIENvbG9yUGlja2VyXG4gICAgc2hvd1NpemVTbGlkZXI6IGJvb2xlYW4gLy8gd2hldGhlciB0byBzaG93IHRoZSBzaXplIFNsaWRlclxuICAgIGNvbG9yOiBzdHJpbmcgLy8gY3VycmVudGx5IHNlbGVjdGVkIENvbG9yXG4gICAgc2l6ZTogbnVtYmVyIC8vIGN1cnJlbnRseSBzZWxlY3RlZCBzaXplXG4gICAgb3JpZ2luYWxSZW5kZXJlcjogU2ltcGxlUmVuZGVyZXJcbn1cblxuLyoqXG4gKiBMYXllclN0eWxlTW9kYWwgZ2l2ZXMgdXNlcnMgdGhlIGFiaWxpdHkgdG8gZWRpdCB0aGUgYXBwZWFyYW5jZSBvZiByZW5kZXJlZCBMYXllcnMuXG4gKiBUaGUgZWRpdCBsYXllciBzdHlsZSBmdW5jdGlvbmFsaXR5IG9ubHkgc3VwcG9ydHMgU2ltcGxlUmVuZGVyZXJzLlxuICovXG5jbGFzcyBMYXllclN0eWxlTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQ8TGF5ZXJTdHlsZU1vZGFsUHJvcHMsIExheWVyU3R5bGVNb2RhbFN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3dDb2xvclBpY2tlcjogZmFsc2UsXG4gICAgICAgICAgICBzaG93U2l6ZVNsaWRlcjogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcjogbnVsbCxcbiAgICAgICAgICAgIHNpemU6IG51bGwsXG4gICAgICAgICAgICBvcmlnaW5hbFJlbmRlcmVyOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGJlaGF2aW9yIHVwb24gb3BlbmluZyBNb2RhbFxuICAgICAqL1xuICAgIG9uT3BlbmVkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9yaWdpbmFsUmVuZGVyZXI6IFNpbXBsZVJlbmRlcmVyLmZyb21KU09OKHRoaXMucHJvcHMubGF5ZXIucmVuZGVyZXIudG9KU09OKCkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzeW1ib2wgPSAodGhpcy5wcm9wcy5sYXllci5yZW5kZXJlciBhcyBTaW1wbGVSZW5kZXJlcikuc3ltYm9sO1xuICAgICAgICBzd2l0Y2ggKHN5bWJvbC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2ltcGxlLW1hcmtlclwiOlxuICAgICAgICAgICAgICAgIGlmIChzeW1ib2wuc3R5bGUgPT09IFwiY3Jvc3NcIiB8fCBzeW1ib2wuc3R5bGUgPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbG9yUGlja2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVTbGlkZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3ltYm9sLm91dGxpbmUuY29sb3IudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IHN5bWJvbC5zaXplXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbG9yUGlja2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVTbGlkZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3ltYm9sLmNvbG9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBzeW1ib2wuc2l6ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicGljdHVyZS1tYXJrZXJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvbG9yUGlja2VyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVTbGlkZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogKHN5bWJvbCBhcyBQaWN0dXJlTWFya2VyU3ltYm9sKS53aWR0aFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNpbXBsZS1maWxsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNob3dDb2xvclBpY2tlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVTbGlkZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3ltYm9sLmNvbG9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzaW1wbGUtbGluZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93Q29sb3JQaWNrZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNob3dTaXplU2xpZGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3ltYm9sLmNvbG9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IChzeW1ib2wgYXMgU2ltcGxlTGluZVN5bWJvbCkud2lkdGhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNob3dDb2xvclBpY2tlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVTbGlkZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3ltYm9sLmNvbG9yLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgYmVoYXZpb3Igd2hlbiBjb2xvciBwaWNrZXIgd2FybmluZyBmb3IgcGljdHVyZSBtYXJrZXIgaXMgY2xpY2tlZFxuICAgICAqL1xuICAgIGhhbmRsZUNvbG9yV2FybmluZ0NsaWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dDb2xvclBpY2tlcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgKHRoaXMucHJvcHMubGF5ZXIucmVuZGVyZXIgYXMgU2ltcGxlUmVuZGVyZXIpLnN5bWJvbCA9IG5ldyBTaW1wbGVNYXJrZXJTeW1ib2woe1xuICAgICAgICAgICAgY29sb3I6IHRoaXMuc3RhdGUuY29sb3IsXG4gICAgICAgICAgICBzaXplOiB0aGlzLnN0YXRlLnNpemVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBMYXllciBzdHlsZSB1cG9uIGNvbG9yIGNoYW5nZVxuICAgICAqIEBwYXJhbSBjb2xvciB0aGUgbmV3IGNvbG9yXG4gICAgICovXG4gICAgaGFuZGxlQ2hhbmdlQ29sb3IgPSAoY29sb3I6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb2xvcjogY29sb3J9KTtcbiAgICAgICAgbGV0IGxheWVyID0gdGhpcy5wcm9wcy5sYXllciBhcyBGZWF0dXJlTGF5ZXI7XG4gICAgICAgIGxldCByZW5kZXJlciA9IGxheWVyLnJlbmRlcmVyIGFzIFNpbXBsZVJlbmRlcmVyO1xuXG4gICAgICAgIC8vIENoYW5nZSBzaXplIGFuZCBjb2xvclxuICAgICAgICBzd2l0Y2ggKHJlbmRlcmVyLnN5bWJvbC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2ltcGxlLW1hcmtlclwiOlxuICAgICAgICAgICAgICAgIGlmIChyZW5kZXJlci5zeW1ib2wuc3R5bGUgPT09IFwiY3Jvc3NcIiB8fCByZW5kZXJlci5zeW1ib2wuc3R5bGUgPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnN5bWJvbC5vdXRsaW5lLmNvbG9yID0gbmV3IENvbG9yKGNvbG9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5zeW1ib2wuY29sb3IgPSBuZXcgQ29sb3IoY29sb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzaW1wbGUtZmlsbFwiOlxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnN5bWJvbC5jb2xvciA9IG5ldyBDb2xvcihjb2xvcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2ltcGxlLWxpbmVcIjpcbiAgICAgICAgICAgICAgICByZW5kZXJlci5zeW1ib2wuY29sb3IgPSBuZXcgQ29sb3IoY29sb3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZW5kZXJlci5zeW1ib2wuY29sb3IgPSBuZXcgQ29sb3IoY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBsYXllciBzdHlsZSB1cG9uIHNpemUgY2hhbmdlXG4gICAgICogQHBhcmFtIHNpemUgdGhlIG5ldyBzaXplXG4gICAgICovXG4gICAgaGFuZGxlQ2hhbmdlU2l6ZSA9IChzaXplOiBudW1iZXIpID0+IHtcbiAgICAgICAgbGV0IGxheWVyID0gdGhpcy5wcm9wcy5sYXllciBhcyBGZWF0dXJlTGF5ZXI7XG4gICAgICAgIGxldCByZW5kZXJlciA9IGxheWVyLnJlbmRlcmVyIGFzIFNpbXBsZVJlbmRlcmVyO1xuXG4gICAgICAgIC8vIENoYW5nZSBzaXplIGFuZCBjb2xvclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaXplOiBzaXplfSk7XG4gICAgICAgIHN3aXRjaCAocmVuZGVyZXIuc3ltYm9sLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzaW1wbGUtbWFya2VyXCI6XG4gICAgICAgICAgICAgICAgKHJlbmRlcmVyLnN5bWJvbCBhcyBTaW1wbGVNYXJrZXJTeW1ib2wpLnNpemUgPSBzaXplO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBpY3R1cmUtbWFya2VyXCI6XG4gICAgICAgICAgICAgICAgbGV0IHBtU3ltYm9sID0gcmVuZGVyZXIuc3ltYm9sIGFzIFBpY3R1cmVNYXJrZXJTeW1ib2xcbiAgICAgICAgICAgICAgICBsZXQgcmF0aW86IG51bWJlciA9IHBtU3ltYm9sLmhlaWdodCAvIHBtU3ltYm9sLndpZHRoO1xuICAgICAgICAgICAgICAgIHBtU3ltYm9sLndpZHRoID0gc2l6ZTtcbiAgICAgICAgICAgICAgICBwbVN5bWJvbC5oZWlnaHQgPSBzaXplICogcmF0aW87XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2ltcGxlLWxpbmVcIjpcbiAgICAgICAgICAgICAgICAocmVuZGVyZXIuc3ltYm9sIGFzIFNpbXBsZUxpbmVTeW1ib2wpLndpZHRoID0gc2l6ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5sYXllci5yZW5kZXJlciA9IHRoaXMuc3RhdGUub3JpZ2luYWxSZW5kZXJlcjtcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVPcGVuKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnByb3BzLm9wZW59XG4gICAgICAgICAgICAgICAgb25DbG9zZWQ9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKXt9fVxuICAgICAgICAgICAgICAgIG9uRW50ZXI9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKXt9fVxuICAgICAgICAgICAgICAgIG9uRXhpdD17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgb25PcGVuZWQ9e3RoaXMub25PcGVuZWR9XG4gICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnByb3BzLnRvZ2dsZU9wZW59XG4gICAgICAgICAgICAgICAgYmFja2Ryb3BDbGFzc05hbWU9XCJsYXllci1zdHlsZS1tb2RhbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGVPcGVufT5cbiAgICAgICAgICAgICAgICAgICAgRWRpdCB7dGhpcy5wcm9wcy5sYXllci50aXRsZX0gTGVnZW5kIFN0eWxlXG4gICAgICAgICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dTaXplU2xpZGVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheWVyLXNpemUtc2xpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBNYXJrZXIgU2l6ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkxheWVyIFNpemUgU2xpZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VTaXplKCtlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9e01hdGgubWF4KDUwLCB0aGlzLnN0YXRlLnNpemUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt0aGlzLnN0YXRlLnNpemV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dDb2xvclBpY2tlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXllci1jb2xvci1waWNrZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IE1hcmtlciBDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTGF5ZXIgQ29sb3IgUGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0ge3RoaXMuc3RhdGUuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjb2xvcikgPT4gdGhpcy5oYW5kbGVDaGFuZ2VDb2xvcihjb2xvcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiBub1JlZkNoZWNrKCl7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgKCh0aGlzLnByb3BzLmxheWVyIGFzIEZlYXR1cmVMYXllcikucmVuZGVyZXIgYXMgU2ltcGxlUmVuZGVyZXIpLnN5bWJvbC50eXBlID09PSBcInBpY3R1cmUtbWFya2VyXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLnNob3dDb2xvclBpY2tlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBpY3R1cmUtbWFya2VyLXdhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvbG9yV2FybmluZ0NsaWNrfT5DaGFuZ2UgQ29sb3I8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbT5DaGFuZ2luZyB0aGUgY29sb3Igb2YgdGhpcyBsYXllciByZXF1aXJlcyBjb252ZXJ0aW5nIHRoZSBtYXJrZXIgZnJvbSBhIHBpY3R1cmUgdG8gYSBzaW1wbGUgY2lyY3VsYXIgbWFya2VyLjwvZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhbmNlbH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uU2F2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2F2ZS10ZW1wbGF0ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBEb25lXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJTdHlsZU1vZGFsO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnV0dG9uLCBNb2RhbCwgTW9kYWxCb2R5LCBNb2RhbEhlYWRlciwgTW9kYWxGb290ZXIsIFNsaWRlcn0gZnJvbSAnamltdS11aSc7XG5pbXBvcnQgTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0xheWVyXCI7XG5cbmludGVyZmFjZSBNb3JlSW5mb01vZGFsUHJvcHMge1xuICAgIGxheWVyOiBMYXllciAvLyB0aGUgTGF5ZXIgdG8gc2hvdyBpbmZvcm1hdGlvbiBhYm91dFxuICAgIG9wZW46IGJvb2xlYW4gLy8gd2hldGhlciB0aGlzIE1vZGFsIGlzIG9wZW5cbiAgICB0b2dnbGVPcGVuOiAoKSA9PiBhbnkgLy8gdG9nZ2xlcyB0aGUgTW9kYWwgYmV0d2VlbiBvcGVuIGFuZCBjbG9zZWRcbiAgICBnZXRMYXllckluZm86IChsYXllcjogTGF5ZXIpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB0byBnZXQgTGF5ZXIgaW5mb1xufVxuXG5pbnRlcmZhY2UgTW9yZUluZm9Nb2RhbFN0YXRlIHtcbiAgICBzb3VyY2U6IHN0cmluZyAvLyB0aGUgTGF5ZXIgc291cmNlXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyAvLyB0aGUgTGF5ZXIgZGVzY3JpcHRpb25cbiAgICB1cmw6IHN0cmluZyAvLyB0aGUgTGF5ZXIgVVJMXG59XG5cbi8qKlxuICogTW9yZUluZm9Nb2RhbCBkaXNwbGF5cyBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGEgTGF5ZXIgdG8gdXNlcnNcbiAqL1xuY2xhc3MgTW9yZUluZm9Nb2RhbCBleHRlbmRzIENvbXBvbmVudDxNb3JlSW5mb01vZGFsUHJvcHMsIE1vcmVJbmZvTW9kYWxTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzb3VyY2U6IFwiLi4uXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCIuLi5cIixcbiAgICAgICAgICAgIHVybDogXCJcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBiZWhhdmlvciB1cG9uIG9wZW5pbmcgTW9kYWxcbiAgICAgKi9cbiAgICBvbk9wZW5lZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzb3VyY2U6IFwiLi4uXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCIuLi5cIixcbiAgICAgICAgICAgIHVybDogXCJcIlxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGluZm8gPSBhd2FpdCB0aGlzLnByb3BzLmdldExheWVySW5mbyh0aGlzLnByb3BzLmxheWVyKTtcbiAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoaW5mbyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICBpc09wZW49e3RoaXMucHJvcHMub3Blbn1cbiAgICAgICAgICAgICAgICBvbkNsb3NlZD17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgb25FbnRlcj17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgb25FeGl0PXtmdW5jdGlvbiBub1JlZkNoZWNrKCl7fX1cbiAgICAgICAgICAgICAgICBvbk9wZW5lZD17dGhpcy5vbk9wZW5lZH1cbiAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMucHJvcHMudG9nZ2xlT3Blbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0aGlzLnByb3BzLnRvZ2dsZU9wZW59PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sYXllci50aXRsZX0gRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICA8L01vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItc291cmNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTb3VyY2U6IHt0aGlzLnN0YXRlLnNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiB7dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZU9wZW59XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnVybCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3Blbih0aGlzLnN0YXRlLnVybCwgXCJfYmxhbmtcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlZSBNb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vcmVJbmZvTW9kYWw7XG4iLCJpbXBvcnQge0J1dHRvbiwgVGV4dElucHV0LCBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSwgTW9kYWxGb290ZXIsIEljb259IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmludGVyZmFjZSBTYXZlVGVtcGxhdGVQcm9wcyB7XG4gICAgaGFuZGxlQ2xpY2s6ICh0aXRsZTogc3RyaW5nKSA9PiBhbnkgLy8gZnVuY3Rpb24gdG8gY2FsbCBvbiBjbGlja1xuICAgIHNob3c6IGJvb2xlYW4gLy8gd2hldGhlciB0byBzaG93IHRoZSBidXR0b25cbn1cblxuaW50ZXJmYWNlIFNhdmVUZW1wbGF0ZVN0YXRlIHtcbiAgICB0aXRsZTogc3RyaW5nIC8vIHRpdGxlIG9mIHRoZSBuZXcgVGVtcGxhdGVcbiAgICBvcGVuOiBib29sZWFuIC8vIHdoZXRoZXIgdGhlIE1vZGFsIGlzIG9wZW5cbn1cblxuLyoqXG4gKiBTYXZlVGVtcGxhdGVDb21wb25lbnQgcmVuZGVycyB0aGUgYnV0dG9ucyB0aGF0IGFsbG93IHVzZXJzIHRvIHNhdmUgdGhlIGFjdGl2ZSBMYXllcnMgYXMgYSBuZXcgVGVtcGxhdGVcbiAqL1xuY2xhc3MgU2F2ZVRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PFNhdmVUZW1wbGF0ZVByb3BzLCBTYXZlVGVtcGxhdGVTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0aXRsZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIFNhdmUgVGVtcGxhdGUgTW9kYWwgYmV0d2VlbiBvcGVuIGFuZCBjbG9zZWRcbiAgICAgKi9cbiAgICB0b2dnbGVPcGVuID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46ICF0aGlzLnN0YXRlLm9wZW5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2tWYWxpZGl0eSA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbGlkOiB0ZXh0Lmxlbmd0aCA8PSA1MCxcbiAgICAgICAgICAgIG1zZzogXCJNYXhpbXVtIHRpdGxlIGxlbmd0aCBpcyA1MCBjaGFyYWN0ZXJzIVwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cInNhdmUtdGVtcGxhdGUtY29tcG9uZW50XCI+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvdyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3Blbi1zYXZlLXRlbXBsYXRlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL3BsdXMtMzIuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSBBcyBOZXcgU2NlbmFyaW9cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2VkPXtmdW5jdGlvbiBub1JlZkNoZWNrKCl7fX1cbiAgICAgICAgICAgICAgICAgICAgb25FbnRlcj17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgICAgIG9uRXhpdD17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgICAgIG9uT3BlbmVkPXtmdW5jdGlvbiBub1JlZkNoZWNrKCl7fX1cbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnRvZ2dsZU9wZW59XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0aGlzLnRvZ2dsZU9wZW59PlxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSBBcyBOZXcgRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50IFRpdGxlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRXZlbnQgVGl0bGUuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9eyh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7dGl0bGU6IHZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWxpZGl0eU9uQ2hhbmdlPXt0aGlzLmNoZWNrVmFsaWRpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWxpZGl0eU9uQWNjZXB0PXt0aGlzLmNoZWNrVmFsaWRpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt0aGlzLnByb3BzLmhhbmRsZUNsaWNrKHRoaXMuc3RhdGUudGl0bGUpOyB0aGlzLnRvZ2dsZU9wZW4oKTt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2F2ZS10ZW1wbGF0ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmVUZW1wbGF0ZUNvbXBvbmVudDtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1RhYnMsIFRhYn0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi4vVGVtcGxhdGVcIjtcblxuaW50ZXJmYWNlIFRlbXBsYXRlc1Byb3BzIHtcbiAgICBhY3RpdmVUZW1wbGF0ZXM6IFRlbXBsYXRlW10gLy8gbGlzdCBvZiBhY3RpdmUgVGVtcGxhdGVzXG4gICAgcmVtb3ZlVGVtcGxhdGU6ICh0ZW1wbGF0ZTogVGVtcGxhdGUpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIHJlbW92aW5nIGEgVGVtcGxhdGVcbn1cblxuLyoqXG4gKiBBY3RpdmVUZW1wbGF0ZXNNZW51IHJlbmRlcnMgYSBsaXN0IG9mIGFjdGl2ZSBUZW1wbGF0ZXMgYW5kIGFsbG93cyB1c2VycyB0byByZW1vdmUgVGVtcGxhdGVzXG4gKi9cbmNsYXNzIEFjdGl2ZVRlbXBsYXRlc01lbnUgZXh0ZW5kcyBDb21wb25lbnQ8VGVtcGxhdGVzUHJvcHMsIHt9PiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImFjdGl2ZS10ZW1wbGF0ZXMtbWVudVwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3RpdmVUZW1wbGF0ZXMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuby1hY3RpdmUtdGVtcGxhdGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZW0+QWRkZWQgU2NlbmFyaW9zIHdpbGwgYXBwZWFyIGhlcmUuPC9lbT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBpbGxzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aXZlVGVtcGxhdGVzLm1hcCgodGVtcGxhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJcIiArIHRlbXBsYXRlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RlbXBsYXRlLnRpdGxlICsgXCIgKFwiICsgdGVtcGxhdGUubGF5ZXJXcmFwcGVycy5sZW5ndGggKyBcIilcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHRoaXMucHJvcHMucmVtb3ZlVGVtcGxhdGUodGVtcGxhdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3RpdmVUZW1wbGF0ZXNNZW51O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQWRkTGF5ZXJJdGVtIGZyb20gXCIuLi9MYXllckNvbXBvbmVudC9BZGRMYXllckl0ZW1cIjtcbmltcG9ydCB7Q29sbGFwc2FibGVQYW5lbCwgQnV0dG9uLCBJY29ufSBmcm9tIFwiamltdS11aVwiXG5pbXBvcnQgVGVtcGxhdGUgZnJvbSAnLi4vVGVtcGxhdGUnXG5pbXBvcnQgTGF5ZXJXcmFwcGVyIGZyb20gXCIuLi9MYXllcldyYXBwZXJcIjtcblxuaW50ZXJmYWNlIEFkZFRlbXBsYXRlSXRlbVByb3BzIHtcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGUgLy8gVGVtcGxhdGUgdG8gYWRkXG4gICAgYWN0aXZlTGF5ZXJzOiBMYXllcldyYXBwZXJbXSAvLyBsaXN0IG9mIGFjdGl2ZSBMYXllcnNcbiAgICBhY3RpdmVUZW1wbGF0ZXM6IFRlbXBsYXRlW10gLy8gbGlzdCBvZiBhY3RpdmUgVGVtcGxhdGVzXG4gICAgb25BZGRMYXllcjogKGxheWVyV3JhcHBlcjogTGF5ZXJXcmFwcGVyKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiBhZGRpbmcgTGF5ZXJcbiAgICBvbkFkZFRlbXBsYXRlOiAodGVtcGxhdGU6IFRlbXBsYXRlKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiBhZGRpbmcgVGVtcGxhdGVcbn1cblxuLyoqXG4gKiBBZGRUZW1wbGF0ZUl0ZW0gYWxsb3dzIHVzZXJzIHRvIGFkZCBhbGwgTGF5ZXJzIGluIGEgVGVtcGxhdGUgdG8gdGhlIE1hcFxuICovXG5jbGFzcyBBZGRUZW1wbGF0ZUl0ZW0gZXh0ZW5kcyBDb21wb25lbnQ8QWRkVGVtcGxhdGVJdGVtUHJvcHMsIHt9PiB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIERpc2FibGUgdGhlIGFkZCBidXR0b24gaWYgdGhlIFRlbXBsYXRlIHdhcyBhZGRlZCB0byB0aGUgbGlzdCBvZiBhY3RpdmUgVGVtcGxhdGVzIGFuZFxuICAgICAgICAvLyBhbGwgTGF5ZXJzIGFyZSBjdXJyZW50bHkgYWRkZWQgdG8gdGhlIE1hcFxuICAgICAgICBsZXQgYWRkZWQ6IGJvb2xlYW4gPSB0aGlzLnByb3BzLmFjdGl2ZVRlbXBsYXRlcy5pbmNsdWRlcyh0aGlzLnByb3BzLnRlbXBsYXRlKTtcbiAgICAgICAgaWYgKGFkZGVkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBsYXllcldyYXBwZXIgb2YgdGhpcy5wcm9wcy50ZW1wbGF0ZS5sYXllcldyYXBwZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLmFjdGl2ZUxheWVycy5pbmNsdWRlcyhsYXllcldyYXBwZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29sbGFwc2FibGVQYW5lbFxuICAgICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQWRkVGVtcGxhdGUodGhpcy5wcm9wcy50ZW1wbGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlcnRpYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLnRlbXBsYXRlLmxheWVyV3JhcHBlcnMubGVuZ3RoID09PSAwIHx8IGFkZGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17YWRkZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL2NoZWNrLTMyLnN2Z1wiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRXNyaS9jYWxjaXRlLXVpLWljb25zL21hc3Rlci9pY29ucy9wbHVzLTMyLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50ZW1wbGF0ZS50aXRsZSArIFwiIChcIiArIHRoaXMucHJvcHMudGVtcGxhdGUubGF5ZXJXcmFwcGVycy5sZW5ndGggKyBcIilcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldmVsPXswfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy50ZW1wbGF0ZS5sYXllcldyYXBwZXJzLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlbXBsYXRlLWRyb3Bkb3duX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRlbXBsYXRlLmxheWVyV3JhcHBlcnMubWFwKChfdmFsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFwIGluIHJldmVyc2Ugb3JkZXIgdG8gbWFpbnRhaW4gY29uc2lzdGVuY3kgd2l0aCBMYXllciBMaXN0IG9yZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGF5ZXJXcmFwcGVyID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRlbXBsYXRlLmxheWVyV3JhcHBlcnNbdGhpcy5wcm9wcy50ZW1wbGF0ZS5sYXllcldyYXBwZXJzLmxlbmd0aCAtIGluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRMYXllckl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJXcmFwcGVyPXtsYXllcldyYXBwZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkTGF5ZXI9e3RoaXMucHJvcHMub25BZGRMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVycy5pbmNsdWRlcyhsYXllcldyYXBwZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sbGFwc2FibGVQYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRlbXBsYXRlSXRlbTtcbiIsImltcG9ydCBcIi4vVGVtcGxhdGVDb21wb25lbnQuc2Nzc1wiO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7SWNvbiwgVG9vbHRpcH0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi4vVGVtcGxhdGVcIjtcbmltcG9ydCBUZW1wbGF0ZVNlYXJjaCBmcm9tIFwiLi9UZW1wbGF0ZVNlYXJjaFwiO1xuaW1wb3J0IEFjdGl2ZVRlbXBsYXRlc01lbnUgZnJvbSBcIi4vQWN0aXZlVGVtcGxhdGVzTWVudVwiO1xuaW1wb3J0IExheWVyV3JhcHBlciBmcm9tIFwiLi4vTGF5ZXJXcmFwcGVyXCI7XG5cbmludGVyZmFjZSBUZW1wbGF0ZXNQcm9wcyB7XG4gICAgdGVtcGxhdGVzOiBUZW1wbGF0ZVtdIC8vIGxpc3Qgb2YgVGVtcGxhdGVzIHRvIHJlbmRlclxuICAgIGFjdGl2ZUxheWVyczogTGF5ZXJXcmFwcGVyW10gLy8gbGlzdCBvZiBhY3RpdmUgTGF5ZXJzXG4gICAgYWN0aXZlVGVtcGxhdGVzOiBUZW1wbGF0ZVtdIC8vIGxpc3Qgb2YgYWN0aXZlIFRlbXBsYXRlc1xuICAgIG9uQWRkVGVtcGxhdGU6ICh0ZW1wbGF0ZTogVGVtcGxhdGUpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIGFkZGluZyBUZW1wbGF0ZXNcbiAgICBvblJlbW92ZVRlbXBsYXRlOiAodGVtcGxhdGU6IFRlbXBsYXRlKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiByZW1vdmluZyBUZW1wbGF0ZXNcbiAgICBvbkFkZExheWVyOiAobGF5ZXJXcmFwcGVyOiBMYXllcldyYXBwZXIpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIGFkZGluZyBMYXllcnNcbn1cbmludGVyZmFjZSBUZW1wbGF0ZXNTdGF0ZSB7XG4gICAgcGFuZU9wZW46IGJvb2xlYW4gLy8gd2hldGhlciB0aGUgVGVtcGxhdGUgcGFuZSBpcyBvcGVuXG4gICAgc2VsZWN0ZWRUZW1wbGF0ZTogVGVtcGxhdGUgLy8gY3VycmVudGx5IHNlbGVjdGVkIFRlbXBsYXRlIGZyb20gVGVtcGxhdGUgZHJvcGRvd24gZm9yIG1vcmUgaW5mb1xufVxuXG4vKipcbiAqIFRlbXBsYXRlQ29tcG9uZW50IGNvbnRhaW5zIGEgVGVtcGxhdGVTZWFyY2ggZHJvcGRvd24sIEFjdGl2ZVRlbXBsYXRlTWVudSwgYW5kIGEgZGV0YWlsZWQgcGFuZSBvZiB0aGUgbGF5ZXJzXG4gKiBpbiBlYWNoIFRlbXBsYXRlXG4gKi9cbmNsYXNzIFRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PFRlbXBsYXRlc1Byb3BzLCBUZW1wbGF0ZXNTdGF0ZT4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFuZU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRUZW1wbGF0ZTogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cInRlbXBsYXRlLWNvbXBvbmVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZW1wbGF0ZS1jb21wb25lbnRfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+U2NlbmFyaW9zPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2NlbmFyaW9zIGFyZSBhIHNldCBvZiBsYXllcnMgdGhhdCBhcmUgZ3JvdXBlZCB0b2dldGhlciBmb3IgYSBzcGVjaWZpYyBlbWVyZ2VuY3lcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBjYW4gYmUgYWRkZWQgdG8gdGhlIG1hcCBhbGwgYXQgb25jZS5cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGVtcGxhdGUtY29tcG9uZW50X19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL3F1ZXN0aW9uLTMyLWYuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50ZW1wbGF0ZXMgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGVtcGxhdGUtY29tcG9uZW50X19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVtcGxhdGVTZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZXM9e3RoaXMucHJvcHMudGVtcGxhdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkTGF5ZXI9e3RoaXMucHJvcHMub25BZGRMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFkZFRlbXBsYXRlPXt0aGlzLnByb3BzLm9uQWRkVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTGF5ZXJzPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVUZW1wbGF0ZXM9e3RoaXMucHJvcHMuYWN0aXZlVGVtcGxhdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY3RpdmVUZW1wbGF0ZXNNZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGVtcGxhdGVzPXt0aGlzLnByb3BzLmFjdGl2ZVRlbXBsYXRlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVUZW1wbGF0ZT17dGhpcy5wcm9wcy5vblJlbW92ZVRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVtcGxhdGVDb21wb25lbnQ7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtBZHZhbmNlZFNlbGVjdCwgSWNvbn0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi4vVGVtcGxhdGVcIjtcbmltcG9ydCBBZGRUZW1wbGF0ZUl0ZW0gZnJvbSBcIi4vQWRkVGVtcGxhdGVJdGVtXCI7XG5pbXBvcnQgTGF5ZXJXcmFwcGVyIGZyb20gXCIuLi9MYXllcldyYXBwZXJcIjtcblxuaW50ZXJmYWNlIFRlbXBsYXRlU2VhcmNoUHJvcHMge1xuICAgIHRlbXBsYXRlczogVGVtcGxhdGVbXSAvLyBsaXN0IG9mIFRlbXBsYXRlc1xuICAgIGFjdGl2ZUxheWVyczogTGF5ZXJXcmFwcGVyW10gLy8gbGlzdCBvZiBhY3RpdmUgTGF5ZXJzXG4gICAgYWN0aXZlVGVtcGxhdGVzOiBUZW1wbGF0ZVtdIC8vIGxpc3Qgb2YgYWN0aXZlIFRlbXBsYXRlc1xuICAgIG9uQWRkTGF5ZXI6IChsYXllcjogTGF5ZXJXcmFwcGVyKSA9PiBhbnkgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiBhZGRpbmcgYSBMYXllclxuICAgIG9uQWRkVGVtcGxhdGU6ICh0ZW1wbGF0ZTogVGVtcGxhdGUpID0+IGFueSAvLyBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIGFkZGluZyBhIFRlbXBsYXRlXG59XG5cbi8qKlxuICogVGVtcGxhdGVTZWFyY2ggYWxsb3dzIHVzZXJzIHRvIHNlYXJjaCBmb3IgYSBUZW1wbGF0ZVxuICovXG5jbGFzcyBUZW1wbGF0ZVNlYXJjaCBleHRlbmRzIENvbXBvbmVudDxUZW1wbGF0ZVNlYXJjaFByb3BzLCB7fT4ge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cInRlbXBsYXRlLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxBZHZhbmNlZFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBpc011bHRpcGxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBpc0VtcHR5T3B0aW9uSGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpe319XG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgc29ydFZhbHVlc0J5TGFiZWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG1lbnVQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBbMCwgLTQwXVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjdXN0b21Ecm9wZG93bkJ1dHRvbkNvbnRlbnQ9eyhcbiAgICAgICAgICAgICAgICAgICAgKSA9PiB7cmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Fc3JpL2NhbGNpdGUtdWktaWNvbnMvbWFzdGVyL2ljb25zL3NlYXJjaC0zMi5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoIGZvciBTY2VuYXJpby4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9fVxuICAgICAgICAgICAgICAgICAgICBhcHBlbmRUb0JvZHk9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBzdHJhdGVneT1cImZpeGVkXCJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljVmFsdWVzPXt0aGlzLnByb3BzLnRlbXBsYXRlcy5tYXAoKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0ZW1wbGF0ZS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGVtcGxhdGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGxhdGUtc2VhcmNoLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkVGVtcGxhdGVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlPXt0ZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRUZW1wbGF0ZT17dGhpcy5wcm9wcy5vbkFkZFRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFkZExheWVyPXt0aGlzLnByb3BzLm9uQWRkTGF5ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUxheWVycz17dGhpcy5wcm9wcy5hY3RpdmVMYXllcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRlbXBsYXRlcz17dGhpcy5wcm9wcy5hY3RpdmVUZW1wbGF0ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZW1wbGF0ZVNlYXJjaDtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX0Jhc2VtYXBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9Db2xvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2NvcmVfcmVhY3RpdmVVdGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2lkZW50aXR5X0lkZW50aXR5TWFuYWdlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2lkZW50aXR5X09BdXRoSW5mb19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9yZW5kZXJlcnNfU2ltcGxlUmVuZGVyZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9zeW1ib2xzX1NpbXBsZU1hcmtlclN5bWJvbF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3dpZGdldHNfTGF5ZXJMaXN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9iYXNpY19jb2xvcl9waWNrZXJfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0ICcuL1dpZGdldC5zY3NzJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3R5cGUgQWxsV2lkZ2V0UHJvcHN9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7SmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3fSBmcm9tIFwiamltdS1hcmNnaXNcIjtcbmltcG9ydCB7TG9hZGluZ30gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xuaW1wb3J0IExheWVyIGZyb20gXCJlc3JpL2xheWVycy9MYXllclwiXG5pbXBvcnQgQmFzZW1hcCBmcm9tIFwiZXNyaS9CYXNlbWFwXCI7XG5pbXBvcnQge2FkZEZlYXR1cmVzfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1mZWF0dXJlLWxheWVyJztcbmltcG9ydCBPQXV0aEluZm8gZnJvbSBcImVzcmkvaWRlbnRpdHkvT0F1dGhJbmZvXCI7XG5pbXBvcnQgZXNyaUlkIGZyb20gXCJlc3JpL2lkZW50aXR5L0lkZW50aXR5TWFuYWdlclwiO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuL1RlbXBsYXRlXCI7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vQ2F0ZWdvcnlcIjtcbmltcG9ydCBMYXllckNvbXBvbmVudCBmcm9tIFwiLi9MYXllckNvbXBvbmVudC9MYXllckNvbXBvbmVudFwiXG5pbXBvcnQgU2F2ZVRlbXBsYXRlQ29tcG9uZW50IGZyb20gJy4vU2F2ZVRlbXBsYXRlQ29tcG9uZW50J1xuaW1wb3J0IExheWVyTGlzdENvbXBvbmVudCBmcm9tIFwiLi9MYXllckxpc3RDb21wb25lbnQvTGF5ZXJMaXN0Q29tcG9uZW50XCI7XG5pbXBvcnQgVGVtcGxhdGVDb21wb25lbnQgZnJvbSBcIi4vVGVtcGxhdGVDb21wb25lbnQvVGVtcGxhdGVDb21wb25lbnRcIjtcbmltcG9ydCBMYXllcldyYXBwZXIgZnJvbSBcIi4vTGF5ZXJXcmFwcGVyXCI7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdCc7XG5pbXBvcnQgRXhwb3J0Q1NWQ29tcG9uZW50IGZyb20gJy4vRXhwb3J0Q1NWQ29tcG9uZW50JztcblxuaW50ZXJmYWNlIFdpZGdldFN0YXRlIHtcbiAgICBqaW11TWFwVmlldzogSmltdU1hcFZpZXcgLy8gSmltdU1hcFZpZXcgb2YgdGhlIGxpbmtlZCBNYXBcbiAgICBsYXllcldyYXBwZXJzOiBNYXA8bnVtYmVyLCBMYXllcldyYXBwZXI+IC8vIE1hcCBvZiBMYXllciBJRCB0byBMYXllcldyYXBwZXJcbiAgICB0ZW1wbGF0ZXM6IE1hcDxudW1iZXIsIFRlbXBsYXRlPiAvLyBNYXAgb2YgVGVtcGxhdGUgSUQgdG8gVGVtcGxhdGVcbiAgICBjYXRlZ29yaWVzOiBNYXA8bnVtYmVyLCBDYXRlZ29yeT4gLy8gTWFwIG9mIENhdGVnb3J5IElEIHRvIENhdGVnb3J5XG4gICAgbG9hZGluZzogYm9vbGVhbiAvLyB3aGV0aGVyIHRoZSBhcHBsaWNhdGlvbiBpcyBzdGlsbCBsb2FkaW5nIGRhdGFcbiAgICBhY3RpdmVUZW1wbGF0ZXM6IFRlbXBsYXRlW10gLy8gbGlzdCBvZiBhY3RpdmUgVGVtcGxhdGVzXG4gICAgYWN0aXZlTGF5ZXJzOiBMYXllcldyYXBwZXJbXSAvLyBsaXN0IG9mIGFjdGl2ZSBMYXllcnNcbn1cblxuY2xhc3MgV2lkZ2V0IGV4dGVuZHMgQ29tcG9uZW50PEFsbFdpZGdldFByb3BzPGFueT4sIFdpZGdldFN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGppbXVNYXBWaWV3OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBsYXllcldyYXBwZXJzOiBuZXcgTWFwPG51bWJlciwgTGF5ZXJXcmFwcGVyPigpLFxuICAgICAgICAgICAgdGVtcGxhdGVzOiBuZXcgTWFwPG51bWJlciwgVGVtcGxhdGU+KCksXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBuZXcgTWFwPG51bWJlciwgQ2F0ZWdvcnk+KCksXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgYWN0aXZlVGVtcGxhdGVzOiBbXSxcbiAgICAgICAgICAgIGFjdGl2ZUxheWVyczogW10sXG4gICAgICAgICAgICBleHBvcnRTdGF0dXM6IFwiXCIsXG4gICAgICAgICAgICBleHBvcnREb3dubG9hZExpbms6IFwiXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdGVtcGxhdGVUYWJsZTogRmVhdHVyZUxheWVyO1xuICAgIHByaXZhdGUgbGF5ZXJUYWJsZTogRmVhdHVyZUxheWVyO1xuICAgIHByaXZhdGUgY2F0ZWdvcnlUYWJsZTogRmVhdHVyZUxheWVyO1xuICAgIHByaXZhdGUgdGVtcGxhdGVMYXllclJlbGF0aW9uc2hpcHM6IEZlYXR1cmVMYXllcjtcbiAgICBwcml2YXRlIHF1ZXJ5UGFyYW1ldGVycztcblxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVRhYmxlID0gbmV3IEZlYXR1cmVMYXllcih7dXJsOiB0aGlzLnByb3BzLmNvbmZpZy50ZW1wbGF0ZVRhYmxlVXJsfSk7XG4gICAgICAgICAgICB0aGlzLmxheWVyVGFibGUgPSBuZXcgRmVhdHVyZUxheWVyKHt1cmw6IHRoaXMucHJvcHMuY29uZmlnLmxheWVyVGFibGVVcmx9KTtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlUYWJsZSA9IG5ldyBGZWF0dXJlTGF5ZXIoe3VybDogdGhpcy5wcm9wcy5jb25maWcuY2F0ZWdvcnlUYWJsZVVybH0pO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZUxheWVyUmVsYXRpb25zaGlwcyA9IG5ldyBGZWF0dXJlTGF5ZXIoe3VybDogdGhpcy5wcm9wcy5jb25maWcudGVtcGxhdGVMYXllclJlbGF0aW9uc2hpcHNVcmx9KTtcbiAgICAgICAgICAgIHRoaXMucXVlcnlQYXJhbWV0ZXJzID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBTdG9wIGV4ZWN1dGlvbiBvZiBmdXJ0aGVyIG1ldGhvZHMgYmVjYXVzZSBvdGhlciBmdW5jdGlvbmFsaXRpZXMgdW5saWtlbHkgdG8gd29yayBpZiBhcHAgZmFpbGVkXG4gICAgICAgICAgICAvLyB0byBjb25uZWN0IHRvIG9uZSBvciBtb3JlIHRhYmxlcy5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yIGNvbm5lY3RpbmcgdG8gZGF0YWJhc2UsIHBsZWFzZSB0cnkgYWdhaW4hXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ2F0ZWdvcmllcygpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBsb2FkaW5nIGNhdGVnb3JpZXMsIHBsZWFzZSB0cnkgYWdhaW4hXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoVGVtcGxhdGVzKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yIGxvYWRpbmcgdGVtcGxhdGVzLCBwbGVhc2UgdHJ5IGFnYWluIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaExheWVycygpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBsb2FkaW5nIGxheWVycywgcGxlYXNlIHRyeSBhZ2FpbiFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hUZW1wbGF0ZUxheWVycygpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBsb2FkaW5nIHRlbXBsYXRlIGxheWVycywgcGxlYXNlIHRyeSBhZ2FpbiFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hMYXllcnNhbmRUZW1wbGF0ZXNmcm9tSGFzaCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBsb2FkaW5nIHVybCBwYXJhbWV0ZXJzLCBwbGVhc2UgdHJ5IGFnYWluIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkcyBMYXllcnMgYW5kIFRlbXBsYXRlcy9TY2VuYXJpb3MgdGhhdCBhcmUgaW4gdXJsIHBhcmFtZXRlcnMgXG4gICAgICovXG4gICAgZmV0Y2hMYXllcnNhbmRUZW1wbGF0ZXNmcm9tSGFzaCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGxheWVycyA9IHRoaXMucXVlcnlQYXJhbWV0ZXJzLmdldChcImxheWVyc1wiKTtcbiAgICAgICAgbGV0IHRlbXBsYXRlcyA9IHRoaXMucXVlcnlQYXJhbWV0ZXJzLmdldChcInRlbXBsYXRlc1wiKTtcblxuICAgICAgICB0aGlzLmZldGNoT2JqZWN0cyhcIkxheWVyXCIsIGxheWVycyk7XG4gICAgICAgIHRoaXMuZmV0Y2hPYmplY3RzKFwiVGVtcGxhdGVcIiwgdGVtcGxhdGVzKTtcblxuICAgIH1cblxuICAgIGZldGNoT2JqZWN0cyA9IChvYmplY3RUeXBlLCBvYmplY3RQYXJhbXMpIHtcbiAgICAgICAgaWYgKG9iamVjdFBhcmFtcyApIHtcbiAgICAgICAgICAgIG9iamVjdFBhcmFtcyA9IG9iamVjdFBhcmFtcy5zcGxpdChcIixcIik7XG4gICAgICAgICAgICBvYmplY3RQYXJhbXMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAob2JqZWN0SWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaGVyZSBmb3Igbm9uIEludCB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihvYmplY3RJZCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0SWQgPSBwYXJzZUludChvYmplY3RJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqZWN0ID0gb2JqZWN0VHlwZT09XCJMYXllclwiID8gdGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldChvYmplY3RJZCkgOiB0aGlzLnN0YXRlLnRlbXBsYXRlcy5nZXQob2JqZWN0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1ldGhvZE5hbWUgPSBcImFkZEFjdGl2ZVwiICsgb2JqZWN0VHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbbWV0aG9kTmFtZV0ob2JqZWN0KTsgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUXVlcmllcyBDYXRlZ29yaWVzIHRhYmxlIHRvIGNyZWF0ZSBhIE1hcCBvZiBDYXRlZ29yeSBJRCB0byBDYXRlZ29yeSBhbmQgdXBkYXRlcyBzdGF0ZVxuICAgICAqL1xuICAgIGZldGNoQ2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gUXVlcnkgQ2F0ZWdvcmllcyBUYWJsZVxuICAgICAgICBsZXQgZmVhdHVyZVNldCA9IGF3YWl0IHRoaXMuY2F0ZWdvcnlUYWJsZS5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgIHdoZXJlOiBcIjE9MVwiLFxuICAgICAgICAgICAgb3V0RmllbGRzOiBbXCIqXCJdLFxuICAgICAgICAgICAgb3JkZXJCeUZpZWxkczogW1wiVElUTEVcIl1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIENhdGVnb3JpZXNcbiAgICAgICAgbGV0IG5ld0NhdGVnb3JpZXM6IE1hcDxudW1iZXIsIENhdGVnb3J5PiA9IG5ldyBNYXA8bnVtYmVyLCBDYXRlZ29yeT4oKTtcbiAgICAgICAgZm9yIChsZXQgZiBvZiBmZWF0dXJlU2V0LmZlYXR1cmVzKSB7XG4gICAgICAgICAgICBuZXdDYXRlZ29yaWVzLnNldChmLmF0dHJpYnV0ZXMuT0JKRUNUSUQsIHtcbiAgICAgICAgICAgICAgICBpZDogZi5hdHRyaWJ1dGVzLk9CSkVDVElELFxuICAgICAgICAgICAgICAgIHRpdGxlOiBmLmF0dHJpYnV0ZXMuVElUTEUsXG4gICAgICAgICAgICAgICAgbGF5ZXJXcmFwcGVyczogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBuZXdDYXRlZ29yaWVzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUXVlcmllcyBUZW1wbGF0ZXMgdGFibGUgdG8gY3JlYXRlIGxpc3Qgb2YgVGVtcGxhdGVzIGFuZCB1cGRhdGVzIHN0YXRlXG4gICAgICovXG4gICAgZmV0Y2hUZW1wbGF0ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIFF1ZXJ5IFRlbXBsYXRlcyB0YWJsZVxuICAgICAgICBsZXQgZmVhdHVyZVNldCA9IGF3YWl0IHRoaXMudGVtcGxhdGVUYWJsZS5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgIHdoZXJlOiBcIjE9MVwiLFxuICAgICAgICAgICAgb3V0RmllbGRzOiBbXCIqXCJdLFxuICAgICAgICAgICAgb3JkZXJCeUZpZWxkczogW1wiVElUTEVcIl1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIFRlbXBsYXRlc1xuICAgICAgICBsZXQgbmV3VGVtcGxhdGVzOiBNYXA8bnVtYmVyLCBUZW1wbGF0ZT4gPSBuZXcgTWFwPG51bWJlciwgVGVtcGxhdGU+KCk7XG4gICAgICAgIGZvciAobGV0IGYgb2YgZmVhdHVyZVNldC5mZWF0dXJlcykge1xuICAgICAgICAgICAgbmV3VGVtcGxhdGVzLnNldChmLmF0dHJpYnV0ZXMuT0JKRUNUSUQsIHtcbiAgICAgICAgICAgICAgICBpZDogZi5hdHRyaWJ1dGVzLk9CSkVDVElELFxuICAgICAgICAgICAgICAgIHRpdGxlOiBmLmF0dHJpYnV0ZXMuVElUTEUsXG4gICAgICAgICAgICAgICAgbGF5ZXJXcmFwcGVyczogW11cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRlbXBsYXRlczogbmV3VGVtcGxhdGVzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFF1ZXJpZXMgTGF5ZXJzIHRhYmxlIHRvIGNyZWF0ZSBhIE1hcCBvZiBMYXllciBJRCB0byBMYXllcldyYXBwZXIgYW5kIHVwZGF0ZXMgc3RhdGUuXG4gICAgICogRGVsZXRlcyBMYXllcldyYXBwZXIgYW5kIGl0cyByZWZlcmVuY2VzIGlmIExheWVyIGNyZWF0aW9uIGZhaWxzLlxuICAgICAqL1xuICAgIGZldGNoTGF5ZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBRdWVyeSBMYXllcnMgdGFibGVcbiAgICAgICAgbGV0IGZlYXR1cmVTZXQgPSBhd2FpdCB0aGlzLmxheWVyVGFibGUucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICB3aGVyZTogXCIxPTFcIixcbiAgICAgICAgICAgIG91dEZpZWxkczogW1wiT0JKRUNUSURcIiwgXCJUSVRMRVwiLCBcIlVSTFwiLCBcIlNDT1BFXCIsIFwiQ0FURUdPUllJRFwiLCBcIlJFTkRFUkVSXCIsIFwiRklMVEVSXCJdLFxuICAgICAgICAgICAgb3JkZXJCeUZpZWxkczogW1wiU0NPUEVcIiwgXCJUSVRMRVwiXVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDcmVhdGUgTGF5ZXJXcmFwcGVyc1xuICAgICAgICBsZXQgbmV3TGF5ZXJXcmFwcGVyczogTWFwPG51bWJlciwgTGF5ZXJXcmFwcGVyPiA9IG5ldyBNYXA8bnVtYmVyLCBMYXllcldyYXBwZXI+KCk7XG4gICAgICAgIGZvciAobGV0IGZlYXR1cmUgb2YgZmVhdHVyZVNldC5mZWF0dXJlcykge1xuICAgICAgICAgICAgbGV0IG5ld0xheWVyV3JhcHBlciA9IHtcbiAgICAgICAgICAgICAgICBpZDogZmVhdHVyZS5hdHRyaWJ1dGVzLk9CSkVDVElELFxuICAgICAgICAgICAgICAgIHRpdGxlOiBmZWF0dXJlLmF0dHJpYnV0ZXMuU0NPUEUgKyBcIiBcIiArIGZlYXR1cmUuYXR0cmlidXRlcy5USVRMRSxcbiAgICAgICAgICAgICAgICB1cmw6IGZlYXR1cmUuYXR0cmlidXRlcy5VUkwsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBmZWF0dXJlLmF0dHJpYnV0ZXMuRklMVEVSLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiBmZWF0dXJlLmF0dHJpYnV0ZXMuUkVOREVSRVIsXG4gICAgICAgICAgICAgICAgbGF5ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5nZXQoZmVhdHVyZS5hdHRyaWJ1dGVzLkNBVEVHT1JZSUQpLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlczogW11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgYXdhaXQgY3JlYXRlTGF5ZXIgdG8gYWxsb3cgTGF5ZXJzIHRvIGJlIGxvYWRlZCBhc3luY2hyb25vdXNseSBpbiB0aGUgYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTGF5ZXIobmV3TGF5ZXJXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBuZXdMYXllcldyYXBwZXJzLnNldChmZWF0dXJlLmF0dHJpYnV0ZXMuT0JKRUNUSUQsIG5ld0xheWVyV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLmdldChmZWF0dXJlLmF0dHJpYnV0ZXMuQ0FURUdPUllJRCkubGF5ZXJXcmFwcGVycy5wdXNoKG5ld0xheWVyV3JhcHBlcik7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICBhbGVydChlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbGF5ZXJXcmFwcGVyczogbmV3TGF5ZXJXcmFwcGVyc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBRdWVyaWVzIFRlbXBsYXRlLUxheWVyIFJlbGF0aW9uc2hpcHMgdGFibGUgYW5kIHVwZGF0ZXMgc3RhdGVcbiAgICAgKi9cbiAgICBmZXRjaFRlbXBsYXRlTGF5ZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBPcmRlciBieSBPQkpFQ1RJRCB0byBtYWludGFpbiBMYXllciBvcmRlclxuICAgICAgICBsZXQgZmVhdHVyZVNldCA9IGF3YWl0IHRoaXMudGVtcGxhdGVMYXllclJlbGF0aW9uc2hpcHMucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICB3aGVyZTogXCIxPTFcIixcbiAgICAgICAgICAgIG91dEZpZWxkczogW1wiKlwiXSxcbiAgICAgICAgICAgIG9yZGVyQnlGaWVsZHM6IFtcIk9CSkVDVElEXCJdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGZlYXR1cmUgb2YgZmVhdHVyZVNldC5mZWF0dXJlcykge1xuICAgICAgICAgICAgbGV0IGxheWVyV3JhcHBlciA9IHRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoZmVhdHVyZS5hdHRyaWJ1dGVzLkxBWUVSSUQpO1xuICAgICAgICAgICAgaWYgKGxheWVyV3JhcHBlcikge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMuc3RhdGUudGVtcGxhdGVzLmdldChmZWF0dXJlLmF0dHJpYnV0ZXMuVEVNUExBVEVJRCk7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGUubGF5ZXJXcmFwcGVycy5wdXNoKGxheWVyV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldChmZWF0dXJlLmF0dHJpYnV0ZXMuTEFZRVJJRCkudGVtcGxhdGVzLnB1c2godGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZW1wbGF0ZXM6IHRoaXMuc3RhdGUudGVtcGxhdGVzLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIG5ldyBMYXllciB3aXRoIHRoZSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBnaXZlbiBMYXllcldyYXBwZXIuXG4gICAgICogQHBhcmFtIGxheWVyV3JhcHBlciB0aGUgTGF5ZXJXcmFwcGVyIGZyb20gd2hpY2ggdG8gY3JlYXRlIHRoZSBMYXllclxuICAgICAqIEB0aHJvd3MgRXJyb3IgaWYgTGF5ZXIgY3JlYXRpb24gZmFpbHNcbiAgICAgKi9cbiAgICBjcmVhdGVMYXllciA9IGFzeW5jIChsYXllcldyYXBwZXI6IExheWVyV3JhcHBlcikgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IG5ld0xheWVyOiBMYXllciA9IGF3YWl0IExheWVyLmZyb21BcmNHSVNTZXJ2ZXJVcmwoe3VybDogbGF5ZXJXcmFwcGVyLnVybH0pO1xuICAgICAgICAgICAgbmV3TGF5ZXIuaWQgPSBsYXllcldyYXBwZXIuaWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIG5ld0xheWVyLnRpdGxlID0gbGF5ZXJXcmFwcGVyLnRpdGxlO1xuXG4gICAgICAgICAgICAvLyBDdXN0b20gUmVuZGVyZXJcbiAgICAgICAgICAgIGlmIChuZXdMYXllci50eXBlID09PSBcImZlYXR1cmVcIikge1xuICAgICAgICAgICAgICAgIGlmIChsYXllcldyYXBwZXIucmVuZGVyZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKG5ld0xheWVyIGFzIEZlYXR1cmVMYXllcikucmVuZGVyZXIgPSBKU09OLnBhcnNlKGxheWVyV3JhcHBlci5yZW5kZXJlcik7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgbG9hZGluZyByZW5kZXJlciBmb3IgbGF5ZXIgXCIgKyBsYXllcldyYXBwZXIudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGF5ZXJXcmFwcGVyLmZpbHRlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAobmV3TGF5ZXIgYXMgRmVhdHVyZUxheWVyKS5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IGxheWVyV3JhcHBlci5maWx0ZXI7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgbG9hZGluZyBTUUwgZmlsdGVyIGZvciBsYXllciBcIiArIGxheWVyV3JhcHBlci50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYXllcldyYXBwZXIubGF5ZXIgPSBuZXdMYXllcjtcbiAgICAgICAgICAgIHJldHVybiBuZXdMYXllcjtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIGxvYWRpbmcgbGF5ZXJcIiArIGxheWVyV3JhcHBlci50aXRsZSArIFwiIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmVzIGFsbCBhY3RpdmUgTGF5ZXJzIGFzIGEgbmV3IFRlbXBsYXRlIHdpdGggdGhlIGdpdmVuIHRpdGxlXG4gICAgICogQHBhcmFtIHRpdGxlIHRoZSB0aXRsZSBvZiB0aGUgbmV3IFRlbXBsYXRlXG4gICAgICovXG4gICAgc2F2ZVRlbXBsYXRlID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgICAgICAgIGxldCBzYW1lVGl0bGUgPSBhd2FpdCB0aGlzLnRlbXBsYXRlVGFibGUucXVlcnlGZWF0dXJlQ291bnQoe1xuICAgICAgICAgICAgICAgICAgICB3aGVyZTogXCJUSVRMRSA9ICdcIiArIHRpdGxlICsgXCInXCIsXG4gICAgICAgICAgICAgICAgICAgIG91dEZpZWxkczogW1wiKlwiXVxuICAgICAgICAgICAgICAgIH0pID4gMDtcblxuICAgICAgICAgICAgICAgIGlmIChzYW1lVGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciwgYSB0ZW1wbGF0ZSB3aXRoIHRoaXMgdGl0bGUgYWxyZWFkeSBleGlzdHMhXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGF3YWl0IHRoaXMuZ2V0VG9rZW4oKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBhZGRGZWF0dXJlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMucHJvcHMuY29uZmlnLnRlbXBsYXRlVGFibGVVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlczogW3thdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRJVExFOiB0aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge3Rva2VuOiB0b2tlbn1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5hZGRSZXN1bHRzWzBdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IHBlciBBcmNHSVMgUmVzdCBKUyBBUEksIElFZGl0RmVhdHVyZVJlc3VsdCB3aWxsIGNvbnRhaW4gYW4gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1lc3NhZ2UgaWYgc3VjY2VzcyBpcyBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmFkZFJlc3VsdHNbMF0uZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wbGF0ZUlkID0gcmVzcG9uc2UuYWRkUmVzdWx0c1swXS5vYmplY3RJZDtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zYXZlVGVtcGxhdGVMYXllcnModGVtcGxhdGVJZCwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoVGVtcGxhdGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hUZW1wbGF0ZUxheWVycygpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIlN1Y2Nlc3NmdWxseSBzYXZlZCBuZXcgZXZlbnQhXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciwgcGxlYXNlIGVudGVyIGEgdGl0bGUhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBzYXZpbmcgdGVtcGxhdGUsIHBsZWFzZSB0cnkgYWdhaW4hXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBUZW1wbGF0ZS1MYXllciByZWxhdGlvbnNoaXBzIHRvIFRlbXBsYXRlIExheWVyIFJlbGF0aW9uc2hpcHMgdGFibGVcbiAgICAgKiBAcGFyYW0gdGVtcGxhdGVJZCB0aGUgT0JKRUNUSUQgb2YgdGhlIG5ldyBUZW1wbGF0ZVxuICAgICAqIEBwYXJhbSB0b2tlbiB0aGUgdG9rZW4gdG8gdXNlIHRvIGF1dGhlbnRpY2F0ZSB0aGUgbmV0d29yayByZXF1ZXN0XG4gICAgICovXG4gICAgc2F2ZVRlbXBsYXRlTGF5ZXJzID0gYXN5bmMgKHRlbXBsYXRlSWQ6IG51bWJlciwgdG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgICBsZXQgZmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgICAgIGxldCBsYXllcnMgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycztcblxuICAgICAgICBmb3IgKGxldCBsYXllciBvZiBsYXllcnMpIHtcbiAgICAgICAgICAgIC8vIEVsaW1pbmF0ZSBub24tb3BlcmF0aW9uYWwgTGF5ZXJzIGxpa2UgYmFzZSBMYXllcnNcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmxheWVyV3JhcHBlcnMuaGFzKCtsYXllci5pZCkpIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgVEVNUExBVEVJRDogdGVtcGxhdGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIExBWUVSSUQ6IGxheWVyLmlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGFkZEZlYXR1cmVzKHtcbiAgICAgICAgICAgIHVybDogdGhpcy5wcm9wcy5jb25maWcudGVtcGxhdGVMYXllclJlbGF0aW9uc2hpcHNVcmwsXG4gICAgICAgICAgICBmZWF0dXJlczogZmVhdHVyZXMsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5hZGRSZXN1bHRzWzBdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IHBlciBBcmNHSVMgUmVzdCBKUyBBUEksIElFZGl0RmVhdHVyZVJlc3VsdCB3aWxsIGNvbnRhaW4gYW4gZXJyb3JcbiAgICAgICAgICAgIC8vIG1lc3NhZ2UgaWYgc3VjY2VzcyBpcyBmYWxzZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmFkZFJlc3VsdHNbMF0uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRva2VuIHVzaW5nIHVzZXItcHJvdmlkZWQgbG9naW4gaW5mbyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFjY2VzcyBBcmNHSVMgc2VydmljZXNcbiAgICAgKiBAcmV0dXJuIGEgdG9rZW4gZ2VuZXJhdGVkIHVzaW5nIHRoZSB1c2VyLXByb3ZpZGVkIENyZWRlbnRpYWwgaW5mb1xuICAgICAqL1xuICAgIGdldFRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmZvID0gbmV3IE9BdXRoSW5mbyh7XG4gICAgICAgICAgICBhcHBJZDogXCJlUzJ2VWRJWmJIYVZPckR6XCIsXG4gICAgICAgICAgICBmbG93VHlwZTogXCJhdXRvXCIsXG4gICAgICAgICAgICBwb3B1cDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGVzcmlJZC5yZWdpc3Rlck9BdXRoSW5mb3MoW2luZm9dKTtcblxuICAgICAgICBsZXQgY3JlZGVudGlhbCA9IGF3YWl0IGVzcmlJZC5jaGVja1NpZ25JblN0YXR1cyhpbmZvLnBvcnRhbFVybCArIFwiL3NoYXJpbmdcIik7XG4gICAgICAgIGlmICghY3JlZGVudGlhbCkge1xuICAgICAgICAgICAgY3JlZGVudGlhbCA9IGF3YWl0IGVzcmlJZC5nZXRDcmVkZW50aWFsKGluZm8ucG9ydGFsVXJsICsgXCIvc2hhcmluZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3JlZGVudGlhbC50b2tlbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBoYXNoIHBhcmFtcyBmb3IgdGVtcGxhdGUgb3IgbGF5ZXIgaWQsIGFkZCBpZiBub3QgdGhlcmVcbiAgICAgKiBAcGFyYW0gb2JqZWN0SWRcbiAgICAgKiBAcGFyYW0gb2JqZWN0R3JvdXBcbiAgICAgKi9cbiAgICBhZGRIYXNoUGFyYW0gPSAob2JqZWN0SWQsIG9iamVjdEdyb3VwKSB7XG4gICAgICAgIGxldCBvYmplY3RQYXJhbXMgPSB0aGlzLnF1ZXJ5UGFyYW1ldGVycy5nZXQob2JqZWN0R3JvdXApO1xuICAgICAgICBpZiAob2JqZWN0UGFyYW1zKSB7XG4gICAgICAgICAgICBvYmplY3RQYXJhbXMgPSBvYmplY3RQYXJhbXMuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgaWYgKCFvYmplY3RQYXJhbXMuaW5jbHVkZXMob2JqZWN0SWQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgICAgICBvYmplY3RQYXJhbXMucHVzaChvYmplY3RJZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeVBhcmFtZXRlcnMuc2V0KG9iamVjdEdyb3VwLCBvYmplY3RQYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5xdWVyeVBhcmFtZXRlcnMuc2V0KG9iamVjdEdyb3VwLCBvYmplY3RJZCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB0aGlzLnF1ZXJ5UGFyYW1ldGVycy50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBoYXNoIHBhcmFtIGZvciBnaXZlbiB0ZW1wbGF0ZSBvciBsYXllciBpZFxuICAgICAqIEBwYXJhbSBvYmplY3RJZFxuICAgICAqIEBwYXJhbSBvYmplY3RHcm91cFxuICAgICAqL1xuICAgIHJlbW92ZUhhc2hQYXJhbSA9IChvYmplY3RJZCwgb2JqZWN0R3JvdXApIHtcbiAgICAgICAgbGV0IG9iamVjdFBhcmFtcyA9IHRoaXMucXVlcnlQYXJhbWV0ZXJzLmdldChvYmplY3RHcm91cCkuc3BsaXQoXCIsXCIpO1xuICAgICAgICBvYmplY3RQYXJhbXMgPSBvYmplY3RQYXJhbXMuZmlsdGVyKHBhcmFtID0+IHBhcmFtICE9PSBvYmplY3RJZC50b1N0cmluZygpKTtcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtZXRlcnMuc2V0KG9iamVjdEdyb3VwLCBvYmplY3RQYXJhbXMpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRoaXMucXVlcnlQYXJhbWV0ZXJzLnRvU3RyaW5nKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBMYXllciB0byB0aGUgTWFwIGFuZCBsaXN0IG9mIGFjdGl2ZSBMYXllcnNcbiAgICAgKiBAcGFyYW0gbGF5ZXJXcmFwcGVyIHRoZSBMYXllciB0byBhZGRcbiAgICAgKi9cbiAgICBhZGRBY3RpdmVMYXllciA9IGFzeW5jIChsYXllcldyYXBwZXI6IExheWVyV3JhcHBlcikgPT4ge1xuICAgICAgICBpZiAoIWxheWVyV3JhcHBlci5sYXllcikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVMYXllcihsYXllcldyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5hY3RpdmVMYXllcnMuaW5jbHVkZXMobGF5ZXJXcmFwcGVyKSkge1xuICAgICAgICAgICAgbGF5ZXJXcmFwcGVyLmxheWVyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChsYXllcldyYXBwZXIubGF5ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkSGFzaFBhcmFtKGxheWVyV3JhcHBlci5pZCwgXCJsYXllcnNcIik7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBhZGRpbmcgbGF5ZXIgXCIgKyBsYXllcldyYXBwZXIudGl0bGUgKyBcIiFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2ZUxheWVycyA9IFsuLi5wcmV2U3RhdGUuYWN0aXZlTGF5ZXJzLCBsYXllcldyYXBwZXJdO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUxheWVyczogYWN0aXZlTGF5ZXJzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHRoZSBnaXZlbiBUZW1wbGF0ZSB0byB0aGUgTWFwIGFuZCBsaXN0IG9mIGFjdGl2ZSBUZW1wbGF0ZXNcbiAgICAgKiBAcGFyYW0gdGVtcGxhdGUgdGhlIFRlbXBsYXRlIHRvIGFkZFxuICAgICAqL1xuICAgIGFkZEFjdGl2ZVRlbXBsYXRlID0gYXN5bmMgKHRlbXBsYXRlOiBUZW1wbGF0ZSkgPT4ge1xuXG4gICAgICAgIGxldCBuZXdBY3RpdmVUZW1wbGF0ZXMgPSB0aGlzLnN0YXRlLmFjdGl2ZVRlbXBsYXRlcy5zbGljZSgpO1xuICAgICAgICBsZXQgbmV3QWN0aXZlTGF5ZXJzID0gdGhpcy5zdGF0ZS5hY3RpdmVMYXllcnMuc2xpY2UoKTtcbiAgICAgICAgaWYgKCFuZXdBY3RpdmVUZW1wbGF0ZXMuaW5jbHVkZXModGVtcGxhdGUpKSB7XG4gICAgICAgICAgICBuZXdBY3RpdmVUZW1wbGF0ZXMucHVzaCh0ZW1wbGF0ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZEhhc2hQYXJhbSh0ZW1wbGF0ZS5pZCwgXCJ0ZW1wbGF0ZXNcIik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBsYXllcldyYXBwZXIgb2YgdGVtcGxhdGUubGF5ZXJXcmFwcGVycykge1xuICAgICAgICAgICAgaWYgKCFsYXllcldyYXBwZXIubGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUxheWVyKGxheWVyV3JhcHBlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5ld0FjdGl2ZUxheWVycy5pbmNsdWRlcyhsYXllcldyYXBwZXIpKSB7XG4gICAgICAgICAgICAgICAgbmV3QWN0aXZlTGF5ZXJzLnB1c2gobGF5ZXJXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBsYXllcldyYXBwZXIubGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hZGQobGF5ZXJXcmFwcGVyLmxheWVyKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3IgYWRkaW5nIGxheWVyIFwiICsgbGF5ZXJXcmFwcGVyLnRpdGxlICsgXCIhXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlVGVtcGxhdGVzOiBuZXdBY3RpdmVUZW1wbGF0ZXMsXG4gICAgICAgICAgICBhY3RpdmVMYXllcnM6IG5ld0FjdGl2ZUxheWVyc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBMYXllciBmcm9tIHRoZSBNYXAgYW5kIGxpc3Qgb2YgYWN0aXZlIExheWVycy4gUmVtb3ZlcyBhbnkgVGVtcGxhdGVzIHdpdGhvdXQgYXNzb2NpYXRlZFxuICAgICAqIGFjdGl2ZSBMYXllcnMgYWZ0ZXIgdGhlIGdpdmVuIExheWVyIGhhcyBiZWVuIHJlbW92ZWQuXG4gICAgICogQHBhcmFtIGxheWVyIHRoZSBMYXllciB0byByZW1vdmVcbiAgICAgKi9cbiAgICByZW1vdmVBY3RpdmVMYXllciA9IChsYXllcjogTGF5ZXIpID0+IHtcbiAgICAgICAgbGV0IG5ld0FjdGl2ZUxheWVycyA9IHRoaXMuc3RhdGUuYWN0aXZlTGF5ZXJzLmZpbHRlcigobHcpID0+IHtyZXR1cm4gbHcubGF5ZXIgIT09IGxheWVyfSk7XG4gICAgICAgIGxldCBuZXdBY3RpdmVUZW1wbGF0ZXMgPSB0aGlzLnN0YXRlLmFjdGl2ZVRlbXBsYXRlcztcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUobGF5ZXIpO1xuICAgICAgICB0aGlzLnJlbW92ZUhhc2hQYXJhbShsYXllci5pZCwgXCJsYXllcnNcIik7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGFjdGl2ZSBUZW1wbGF0ZXMgbmVlZCB0byBiZSByZW1vdmVkXG4gICAgICAgIGZvciAobGV0IGFjdGl2ZVRlbXBsYXRlIG9mIG5ld0FjdGl2ZVRlbXBsYXRlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoK2xheWVyLmlkKS50ZW1wbGF0ZXMuaW5jbHVkZXMoYWN0aXZlVGVtcGxhdGUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGxheWVyV3JhcHBlciBvZiBhY3RpdmVUZW1wbGF0ZS5sYXllcldyYXBwZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdBY3RpdmVMYXllcnMuaW5jbHVkZXMobGF5ZXJXcmFwcGVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0FjdGl2ZVRlbXBsYXRlcyA9IG5ld0FjdGl2ZVRlbXBsYXRlcy5maWx0ZXIoKHQpID0+IHtyZXR1cm4gdCAhPT0gYWN0aXZlVGVtcGxhdGV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZVRlbXBsYXRlczogbmV3QWN0aXZlVGVtcGxhdGVzLFxuICAgICAgICAgICAgYWN0aXZlTGF5ZXJzOiBuZXdBY3RpdmVMYXllcnNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gVGVtcGxhdGUgZnJvbSB0aGUgTWFwIGFuZCBsaXN0IG9mIGFjdGl2ZSBUZW1wbGF0ZXMuIFJlbW92ZXMgYW55IFRlbXBsYXRlcyB3aXRob3V0IGFzc29jaWF0ZWRcbiAgICAgKiBhY3RpdmUgTGF5ZXJzIGFmdGVyIHRoZSBnaXZlbiBUZW1wbGF0ZSBoYXMgYmVlbiByZW1vdmVkLlxuICAgICAqIEBwYXJhbSByZW1vdmVUZW1wbGF0ZSB0aGUgVGVtcGxhdGUgdG8gcmVtb3ZlXG4gICAgICovXG4gICAgcmVtb3ZlQWN0aXZlVGVtcGxhdGUgPSAocmVtb3ZlVGVtcGxhdGU6IFRlbXBsYXRlKSA9PiB7XG4gICAgICAgIGxldCBuZXdBY3RpdmVMYXllcnMgPSB0aGlzLnN0YXRlLmFjdGl2ZUxheWVycy5zbGljZSgpO1xuICAgICAgICBsZXQgbmV3QWN0aXZlVGVtcGxhdGVzID0gdGhpcy5zdGF0ZS5hY3RpdmVUZW1wbGF0ZXMuZmlsdGVyKCh0KSA9PiB0ICE9PSByZW1vdmVUZW1wbGF0ZSk7XG4gICAgICAgIHRoaXMucmVtb3ZlSGFzaFBhcmFtKHJlbW92ZVRlbXBsYXRlLmlkLCBcInRlbXBsYXRlc1wiKTtcblxuICAgICAgICBmb3IgKGxldCBsYXllcldyYXBwZXIgb2YgcmVtb3ZlVGVtcGxhdGUubGF5ZXJXcmFwcGVycykge1xuICAgICAgICAgICAgLy8gRG9uJ3QgcmVtb3ZlIGxheWVyIGlmIGl0IGJlbG9uZ3MgdG8gYW5vdGhlciBhY3RpdmUgVGVtcGxhdGVcbiAgICAgICAgICAgIGxldCBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGFjdGl2ZVRlbXBsYXRlIG9mIG5ld0FjdGl2ZVRlbXBsYXRlcykge1xuICAgICAgICAgICAgICAgIGlmIChsYXllcldyYXBwZXIudGVtcGxhdGVzLmluY2x1ZGVzKGFjdGl2ZVRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIG5ld0FjdGl2ZUxheWVycyA9IG5ld0FjdGl2ZUxheWVycy5maWx0ZXIoKGx3KSA9PiBsdyAhPT0gbGF5ZXJXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShsYXllcldyYXBwZXIubGF5ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVUZW1wbGF0ZXM6IG5ld0FjdGl2ZVRlbXBsYXRlcyxcbiAgICAgICAgICAgIGFjdGl2ZUxheWVyczogbmV3QWN0aXZlTGF5ZXJzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgY2xlYXIgYWxsIGFjdGlvblxuICAgICAqL1xuICAgIGNsZWFyQWxsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZUFsbCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZVRlbXBsYXRlczogW10sXG4gICAgICAgICAgICBhY3RpdmVMYXllcnM6IFtdXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucXVlcnlQYXJhbWV0ZXJzLnNldCgnbGF5ZXJzJywgJycpO1xuICAgICAgICB0aGlzLnF1ZXJ5UGFyYW1ldGVycy5zZXQoJ3RlbXBsYXRlcycsICcnKTtcbiAgICAgICAgLy8gd2lwaW5nIG91dCB0aGVzZSB2YWx1ZXMgaW5zdGVhZCBvZiBjbGVhcmluZyBvdXQgaGFzaCBcbiAgICAgICAgLy8gaW4gY2FzZSB3ZSBldmVyIHVzZSBoYXNoIHBhcmFtIGV2ZXIgZWxzZXdoZXJlXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdGhpcy5xdWVyeVBhcmFtZXRlcnMudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBUZW1wbGF0ZXMgdGhhdCB0aGUgZ2l2ZW4gTGF5ZXIgYmVsb25ncyB0b1xuICAgICAqIEBwYXJhbSBsYXllciB0aGUgTGF5ZXIgdG8gY2hlY2tcbiAgICAgKiBAcGFyYW0gYWN0aXZlIHNldCB0byB0cnVlIHRvIG9ubHkgcmV0dXJuIGFjdGl2ZSBUZW1wbGF0ZXNcbiAgICAgKiBAcmV0dXJuIGEgbGlzdCBvZiBUZW1wbGF0ZXMgdGhhdCB0aGUgZ2l2ZW4gTGF5ZXIgYmVsb25ncyB0b1xuICAgICAqL1xuICAgIGdldExheWVyVGVtcGxhdGVzID0gKGxheWVyOiBMYXllciwgYWN0aXZlPzogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoK2xheWVyLmlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIGxldCBhY3RpdmVUZW1wbGF0ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHRlbXBsYXRlIG9mIHRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoK2xheWVyLmlkKS50ZW1wbGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVUZW1wbGF0ZXMuaW5jbHVkZXModGVtcGxhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRlbXBsYXRlcy5wdXNoKHRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWN0aXZlVGVtcGxhdGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoK2xheWVyLmlkKS50ZW1wbGF0ZXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBDYXRlZ29yeSB0aGF0IHRoZSBnaXZlbiBMYXllciBiZWxvbmdzIHRvXG4gICAgICogQHBhcmFtIGxheWVyIHRoZSBMYXllciB0byBjaGVja1xuICAgICAqIEByZXR1cm4gdGhlIENhdGVnb3J5IHRoYXQgdGhlIGdpdmVuIExheWVyIGJlbG9uZ3MgdG9cbiAgICAgKi9cbiAgICBnZXRMYXllckNhdGVnb3J5ID0gKGxheWVyOiBMYXllcikgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoK2xheWVyLmlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoK2xheWVyLmlkKS5jYXRlZ29yeTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBRdWVyaWVzIExheWVyIFRhYmxlIGFuZCByZXR1cm5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBMYXllclxuICAgICAqIEBwYXJhbSBsYXllciB0aGUgTGF5ZXIgdG8gcXVlcnkgaW5mb3JtYXRpb24gYWJvdXRcbiAgICAgKiBAcmV0dXJuIGEgSlNPTiBvYmplY3QgY29udGFpbmluZyB0aGUgc291cmNlLCBkZXNjcmlwdGlvbiwgYW5kIHVybCBvZiB0aGUgbGF5ZXIgb3JcbiAgICAgKiBvbmx5IHRoZSB1cmwgb2YgdGhlIGxheWVyIGlmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHNcbiAgICAgKi9cbiAgICBnZXRMYXllckluZm8gPSBhc3luYyAobGF5ZXI6IExheWVyKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoK2xheWVyLmlkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZmVhdHVyZVNldCA9IGF3YWl0IHRoaXMubGF5ZXJUYWJsZS5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogXCJPQkpFQ1RJRCA9IFwiICsgbGF5ZXIuaWQsXG4gICAgICAgICAgICAgICAgb3V0RmllbGRzOiBbXCJTT1VSQ0VcIiwgXCJERVNDUklQVElPTlwiXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IGZlYXR1cmVTZXQuZmVhdHVyZXNbMF0uYXR0cmlidXRlcy5TT1VSQ0UsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBmZWF0dXJlU2V0LmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXMuREVTQ1JJUFRJT04sXG4gICAgICAgICAgICAgICAgICAgIHVybDogdGhpcy5zdGF0ZS5sYXllcldyYXBwZXJzLmdldCgrbGF5ZXIuaWQpLnVybFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbGF5ZXJzIGZvdW5kIHdpdGggdGhlIGdpdmVuIE9CSkVDVElEIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBsb2FkaW5nIGxheWVyIGluZm8hXCIpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc291cmNlOiBcIkVycm9yXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRXJyb3JcIixcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy5nZXQoK2xheWVyLmlkKS51cmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZXMgZXh0cmFjdCBkYXRhIHRvIGV4cG9ydCBhbGwgbGF5ZXJzIGluIHRoZSBzY2VuZVxuICAgICAqL1xuICAgIG9uRXhwb3J0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gUmVtb3ZlIG9sZCB2YWx1ZXMgZnJvbSBleHBvcnREb3dubG9hZExpbmtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXhwb3J0RG93bmxvYWRMaW5rOiBcIlwifSk7XG4gICAgICAgIGlmICghY29uZmlybShcIkV4cG9ydCBnZW5lcmF0ZXMgYSBjc3Ygb2YgYWxsIGxheWVycyBsaXN0ZWQgYWJvdmUuIFBsZWFzZSBwcm9jZWVkIG9ubHkgaWYgbmVjZXNzYXJ5LiBcXG5cXG5UbyBleHBvcnQgdGhlc2UgbGF5ZXJzIGFzIGEgY3N2LCBjbGljayBPSy5cXG5cXG4gVG8gYWJvcnQsIGNsaWNrIENhbmNlbC5cIikpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2V4cG9ydFN0YXR1czogXCJDYW5jZWxlZFwifSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBpbnB1dExheWVyUGFyYW1zID0gdGhpcy5idWlsZElucHV0TGF5ZXJQYXJhbXMoKTtcbiAgICAgICAgICBjb25zdCBhbmFseXNpc1VSTCA9IFwiaHR0cHM6Ly9hbmFseXNpczEuYXJjZ2lzLmNvbS9hcmNnaXMvcmVzdC9zZXJ2aWNlcy90YXNrcy9HUFNlcnZlci9cIjtcbiAgICAgICAgICBjb25zdCBvdXRwdXROYW1lID0gdGhpcy5idWlsZE91dHB1dE5hbWUoKTtcblxuICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5nZXRUb2tlbigpO1xuICAgICAgICAgIGNvbnN0IGV4dHJhY3REYXRhVXJsID0gZW5jb2RlVVJJKGAke2FuYWx5c2lzVVJMfUV4dHJhY3REYXRhL3N1Ym1pdEpvYj9pbnB1dExheWVycz0ke0pTT04uc3RyaW5naWZ5KGlucHV0TGF5ZXJQYXJhbXMpfSZmPWpzb24mb3V0cHV0TmFtZT0ke291dHB1dE5hbWV9YCk7XG5cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtleHBvcnRTdGF0dXM6IFwiSW5pdGlhdGVkXCJ9ICk7XG5cbiAgICAgICAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCB0aGlzLmZldGNoQW5hbHlzaXNBcGkoZXh0cmFjdERhdGFVcmwsIHRva2VuKTtcbiAgICAgICAgLy8gVGhlIGNvZGUgYmVsb3cgY3JlYXRlcyBhIGR1bW15IHJlc3BvbnNlIHdpdGggYSBqb2JJZC5UbyB0ZXN0IHRoZSBVWCBvZiB0aGUgZXhwb3J0IHdpdGhvdXQgaGl0dGluZyB0aGUgYXBpLFxuICAgICAgICAvLyBjb21tZW50IG91dCB0aGUgbGluZSBhYm92ZSwgdW5jb21tZW50IHRoZSBmb2xsb3dpbmcgdHdvIGxpbmVzLCBhbmQgc3VwcGx5IGEgam9iSWQgZnJvbSB0aGUgbW9zdCByZWNlbnQgYXBpIGNhbGwuXG4gICAgICAgIC8vIFRvIGdldCB0aGUgam9iSWQsIHJ1biBhbiBleHBvcnQgYW5kIHNlYXJjaCB0aGUgTmV0d29yayB0YWIgZm9yIFwiYW5hbHlzaXMxXCIuIEl0IHdpbGwgYmUgaW4gdGhlIHBheWxvYWQuXG4gICAgICAgIC8vICAgYXdhaXQgdGhpcy5kZWxheSgxMDAwKTtcbiAgICAgICAgLy8gICBjb25zdCByZXNwb25zZUpzb24gPSB7am9iSWQ6IFwiXCJ9O1xuICAgICAgICAgIGNvbnN0IGpvYklkID0gcmVzcG9uc2VKc29uLmpvYklkO1xuICAgICAgICAgIGNvbnN0IGNoZWNrU3RhdHVzVXJsID0gYCR7YW5hbHlzaXNVUkx9RXh0cmFjdERhdGEvam9icy8ke2pvYklkfT9mPWpzb25gO1xuXG4gICAgICAgICAgY29uc3QgYXBpV2FpdFRpbWUgPSA0MDAwO1xuICAgICAgICAgIGF3YWl0IHRoaXMuZGVsYXkoYXBpV2FpdFRpbWUpO1xuXG4gICAgICAgICAgbGV0IHN0YXR1c0pzb24gPSBhd2FpdCB0aGlzLmZldGNoQW5hbHlzaXNBcGkoY2hlY2tTdGF0dXNVcmwsIHRva2VuKTtcblxuICAgICAgICAgIHdoaWxlIChzdGF0dXNKc29uLmpvYlN0YXR1cyA9PT0gXCJlc3JpSm9iRXhlY3V0aW5nXCIpIHtcbiAgICAgICAgICAgIC8vIENvbnRpbnVlIGNoZWNraW5nIHRoZSBzdGF0dXMgZXZlcnkgNCBzZWNvbmRzXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtleHBvcnRTdGF0dXM6IFwiUmUtY2hlY2tpbmdcIn0gKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGVsYXkoYXBpV2FpdFRpbWUpO1xuICAgICAgICAgICAgc3RhdHVzSnNvbiA9IGF3YWl0IHRoaXMuZmV0Y2hBbmFseXNpc0FwaShjaGVja1N0YXR1c1VybCwgdG9rZW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdGF0dXNKc29uLmpvYlN0YXR1cyA9PSBcImVzcmlKb2JTdWNjZWVkZWRcIikge1xuICAgICAgICAgICAgY29uc3QgY29udGVudFVybCA9IGAke2FuYWx5c2lzVVJMfUV4dHJhY3REYXRhL2pvYnMvJHtqb2JJZH0vcmVzdWx0cy9jb250ZW50SUQ/JmY9anNvbmA7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50UmVzcG9uc2VKc29uID0gYXdhaXQgdGhpcy5mZXRjaEFuYWx5c2lzQXBpKGNvbnRlbnRVcmwsIHRva2VuKTtcblxuICAgICAgICAgICAgaWYgKGNvbnRlbnRSZXNwb25zZUpzb24udmFsdWUgJiYgY29udGVudFJlc3BvbnNlSnNvbi52YWx1ZS51cmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtleHBvcnRTdGF0dXM6IFwiQ29tcGxldGVkXCJ9ICk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXhwb3J0RG93bmxvYWRMaW5rOiBgJHtjb250ZW50UmVzcG9uc2VKc29uLnZhbHVlLnVybH0vZGF0YT90b2tlbj0ke3Rva2VufWAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtleHBvcnRTdGF0dXM6IFwiRmFpbGVkXCJ9ICk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0dXNKc29uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2V4cG9ydFN0YXR1czogXCJGYWlsZWRcIn0gKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBVc2luZyBhY3RpdmVMYXllcnMsIHRoaXMgaXRlcmF0ZXMgdGhyb3VnaCB0aGVtIGFuZCBhZGRzIHRoZW0gdG8gdGhlIEV4dHJhY3REYXRhIHVybCBwYXJhbXNcbiAgICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAgICovXG4gICAgICBidWlsZElucHV0TGF5ZXJQYXJhbXMgPSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFjdGl2ZUxheWVycy5tYXAoKGxheWVyV3JhcHBlcikgPT4ge1xuICAgICAgICAgIGxldCB1cmwgPSBsYXllcldyYXBwZXIudXJsO1xuICAgICAgICAgIC8vIEZpbHRlciBvdXQgbGF5ZXJzIGhvc3RlZCBvbiBjdXN0b20gR0lTIHNlcnZlcnNcbiAgICAgICAgICBsZXQgc2VydmljZXNNYXRjaCA9IFwiaHR0cHM6Ly9zZXJ2aWNlc1wiO1xuICAgICAgICAgIGlmICh1cmwuc3Vic3RyaW5nKDAsIHNlcnZpY2VzTWF0Y2gubGVuZ3RoKSAhPSBzZXJ2aWNlc01hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh1cmwubWF0Y2gpXG4gICAgICAgICAgaWYgKHVybC5tYXRjaCgvRmVhdHVyZVNlcnZlclxcLz8kLykpIHtcbiAgICAgICAgICAgIGlmICghdXJsLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgdXJsID0gdXJsICsgJy8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxheWVyV3JhcHBlci5sYXllci5sYXllcklkKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdXJsICsgbGF5ZXJXcmFwcGVyLmxheWVyLmxheWVySWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVybCA9IHVybCArICcwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgdXJsIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSB1bmlxdWUgbmFtZSBmb3IgdGhlIEV4dHJhY3REYXRhIGZpbGVcbiAgICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAgICovXG4gICAgICBidWlsZE91dHB1dE5hbWUgPSAoKSB7XG4gICAgICAgIHJldHVybiAne1wiaXRlbVByb3BlcnRpZXNcIjp7XCJkZXNjcmlwdGlvblwiOlwiRGF0YXNldCBleHRyYWN0ZWQgZnJvbSBTY2VuYXJpbyBEYXNoYm9hcmQuXCIsXCJzbmlwcGV0XCI6XCJEYXRhc2V0IGdlbmVyYXRlZCBmcm9tIEV4dHJhY3QgRGF0YVwiLFwidGl0bGVcIjpcIlNjZW5hcmlvLURhc2hib2FyZC1FeHRyYWN0ZWREYXRhLScgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyAnXCIsXCJmb2xkZXJJZFwiOlwiXCJ9fSc7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBwcm9taXNlIHRvIGRlbGF5IGZvciBhcGkgd2FpdCB0aW1lXG4gICAgICAgKiBAcGFyYW0gbXMgXG4gICAgICAgKiBAcmV0dXJucyBQcm9taXNlXG4gICAgICAgKi9cbiAgICAgIGRlbGF5ID0gYXN5bmMgKG1zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxscyBhbmFseXNpcyBhcGkgYXQgZ2l2ZW4gdXJsIGVuZHBvaW50XG4gICAgICAgKiBAcGFyYW0gdXJsIFxuICAgICAgICogQHBhcmFtIHRva2VuIFxuICAgICAgICogQHJldHVybnMgSlNPTlxuICAgICAgICovXG4gICAgICAgZmV0Y2hBbmFseXNpc0FwaSA9IGFzeW5jICh1cmwsIHRva2VuKSB7XG4gICAgICAgIHVybCA9IHVybCArIGAmdG9rZW49JHt0b2tlbn1gO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2V4cG9ydFN0YXR1czogXCJBcGkgcmVzcG9uc2UgZXJyb3IuIEpvYiBzdG9wcGVkLlwifSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGluIHJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgKiBVcGRhdGVzIHN0YXRlIHRvIGdpdmVuIEppbXVNYXBWaWV3IGFuZCBzZXRzIGluaXRpYWwgYmFzZW1hcFxuICAgICAqIEBwYXJhbSBqbXYgdGhlIG5ldyBKaW11TWFwVmlld1xuICAgICAqL1xuICAgIGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICAgICAgaWYgKGptdikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICAgICAgICAgICAgLy8gU2V0IGJhc2VtYXAgb24gZmlyc3QgYWN0aXZlIHZpZXcgY2hhbmdlXG4gICAgICAgICAgICAgICAgam12LnZpZXcubWFwLmJhc2VtYXAgPSBCYXNlbWFwLmZyb21JZChcImFyY2dpcy10b3BvZ3JhcGhpY1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGppbXVNYXBWaWV3OiBqbXZcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc3RhcnRlciBqaW11LXdpZGdldFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17dGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInNjZW5hcmlvLWRhc2hib2FyZC1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGVtcGxhdGUtY29tcG9uZW50X19ncmlkLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkFkZCBMYXllcnM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRlbXBsYXRlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVzPXtBcnJheS5mcm9tKHRoaXMuc3RhdGUudGVtcGxhdGVzLnZhbHVlcygpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVUZW1wbGF0ZXM9e3RoaXMuc3RhdGUuYWN0aXZlVGVtcGxhdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkVGVtcGxhdGU9e3RoaXMuYWRkQWN0aXZlVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmVUZW1wbGF0ZT17dGhpcy5yZW1vdmVBY3RpdmVUZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVMYXllcnM9e3RoaXMuc3RhdGUuYWN0aXZlTGF5ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkTGF5ZXI9e3RoaXMuYWRkQWN0aXZlTGF5ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXllci1jb21wb25lbnRfX2dyaWQtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgdHlwZT1cIlNFQ09OREFSWVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPExheWVyQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJzPXtBcnJheS5mcm9tKHRoaXMuc3RhdGUubGF5ZXJXcmFwcGVycy52YWx1ZXMoKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcz17QXJyYXkuZnJvbSh0aGlzLnN0YXRlLmNhdGVnb3JpZXMudmFsdWVzKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUxheWVycz17dGhpcy5zdGF0ZS5hY3RpdmVMYXllcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRMYXllcj17dGhpcy5hZGRBY3RpdmVMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxheWVyLWxpc3RfX2dyaWQtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIHR5cGU9XCJTRUNPTkRBUllcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXllckxpc3RDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGVhckFsbD17dGhpcy5jbGVhckFsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlTGF5ZXI9e3RoaXMucmVtb3ZlQWN0aXZlTGF5ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRMYXllclRlbXBsYXRlcz17dGhpcy5nZXRMYXllclRlbXBsYXRlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldExheWVyQ2F0ZWdvcnk9e3RoaXMuZ2V0TGF5ZXJDYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bUFjdGl2ZUxheWVycz17dGhpcy5zdGF0ZS5hY3RpdmVMYXllcnMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TGF5ZXJJbmZvPXt0aGlzLmdldExheWVySW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYm90dG9tLWdyaWQtaXRlbVwiIGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXhwb3J0Q1NWQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXhwb3J0RGF0YT17dGhpcy5vbkV4cG9ydERhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz17dGhpcy5zdGF0ZS5leHBvcnRTdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkTGluaz17dGhpcy5zdGF0ZS5leHBvcnREb3dubG9hZExpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2F2ZVRlbXBsYXRlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrPXt0aGlzLnNhdmVUZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5hY3RpdmVMYXllcnMubGVuZ3RoID4gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7XG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==