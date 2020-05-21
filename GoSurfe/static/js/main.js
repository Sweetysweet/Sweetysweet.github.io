/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./static/js/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./markup/static/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./markup/components/header/header.js":
/*!********************************************!*\
  !*** ./markup/components/header/header.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");

var sliderTop = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider-top', {
  loop: true,
  effect: 'slide',
  loopedSlides: 4,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  thumbs: {
    swiper: sliderBottom
  }
});
var sliderBottom = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider-bottom', {
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  loop: true,
  loopedSlides: 4,
  slidesPerView: 4,
  slideToClickedSlide: true,
  thumbs: {
    swiper: sliderTop
  }
});

/***/ }),

/***/ "./markup/components/serf/serf.js":
/*!****************************************!*\
  !*** ./markup/components/serf/serf.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");

var carousel = document.querySelector('.slider-container__carousel'),
    sliderCarousel = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](carousel, {
  slidesPerView: 4,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var surfSlider = document.querySelector('.slider-container__map'),
    sliderMapPoint = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](surfSlider, {
  slidesPerView: 8,
  centeredSlides: false,
  thumbs: {
    swiper: sliderCarousel
  }
});

/***/ }),

/***/ "./markup/components/shop/shop.js":
/*!****************************************!*\
  !*** ./markup/components/shop/shop.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./markup/components/sleep/sleep.js":
/*!******************************************!*\
  !*** ./markup/components/sleep/sleep.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./markup/components/travel/travel.js":
/*!********************************************!*\
  !*** ./markup/components/travel/travel.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./markup/static/js/constants.js":
/*!***************************************!*\
  !*** ./markup/static/js/constants.js ***!
  \***************************************/
/*! exports provided: HEADERS, MEDIA, ARRAY_FORMAT, API_ROOT, CSFR_TOKEN, IMG_ROOT, SVG_FILENAME, SVG_REVISION, API_ROUTES_CALLBACK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADERS", function() { return HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA", function() { return MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_FORMAT", function() { return ARRAY_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ROOT", function() { return API_ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSFR_TOKEN", function() { return CSFR_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG_ROOT", function() { return IMG_ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG_FILENAME", function() { return SVG_FILENAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG_REVISION", function() { return SVG_REVISION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ROUTES_CALLBACK", function() { return API_ROUTES_CALLBACK; });
var HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Headers': '*'
};
var MEDIA = {
  DESKTOP: window.matchMedia('screen and (min-width: 1025px)').matches,
  MOBILE: window.matchMedia('screen and (max-width: 767px)').matches,
  TABLET: window.matchMedia('screen and (min-width: 768px) and (max-width: 1023px)').matches,
  XL: window.matchMedia('screen and (min-width: 1920px)').matches
};

var _ref = window.config || {},
    _ref$api = _ref.api,
    _ref$api2 = _ref$api === void 0 ? {} : _ref$api,
    _ref$api2$root = _ref$api2.root,
    API_ROOT = _ref$api2$root === void 0 ? 'http://127.0.0.1:3000/' : _ref$api2$root,
    _ref$api2$csfr = _ref$api2.csfr,
    CSFR_TOKEN = _ref$api2$csfr === void 0 ? '' : _ref$api2$csfr,
    _ref$api2$routes = _ref$api2.routes,
    _ref$api2$routes2 = _ref$api2$routes === void 0 ? {} : _ref$api2$routes,
    _ref$api2$routes2$cal = _ref$api2$routes2.callback,
    API_ROUTES_CALLBACK = _ref$api2$routes2$cal === void 0 ? 'callback' : _ref$api2$routes2$cal,
    _ref$svg = _ref.svg,
    _ref$svg2 = _ref$svg === void 0 ? {} : _ref$svg,
    _ref$svg2$root = _ref$svg2.root,
    IMG_ROOT = _ref$svg2$root === void 0 ? '/static/img/' : _ref$svg2$root,
    _ref$svg2$filename = _ref$svg2.filename,
    SVG_FILENAME = _ref$svg2$filename === void 0 ? 'svg-symbols.svg' : _ref$svg2$filename,
    _ref$svg2$revision = _ref$svg2.revision,
    SVG_REVISION = _ref$svg2$revision === void 0 ? Math.floor(Math.random() * 20) : _ref$svg2$revision,
    _ref$arrayFormat = _ref.arrayFormat,
    ARRAY_FORMAT = _ref$arrayFormat === void 0 ? 'repeat' : _ref$arrayFormat;



/***/ }),

/***/ "./markup/static/js/helpers/http.js":
/*!******************************************!*\
  !*** ./markup/static/js/helpers/http.js ***!
  \******************************************/
/*! exports provided: HTTP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP", function() { return HTTP; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./markup/static/js/constants.js");


var HTTP = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: _constants_js__WEBPACK_IMPORTED_MODULE_1__["API_ROOT"],
  headers: _constants_js__WEBPACK_IMPORTED_MODULE_1__["HEADERS"]
});

/***/ }),

/***/ "./markup/static/js/helpers/run.js":
/*!*****************************************!*\
  !*** ./markup/static/js/helpers/run.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return run; });
function run(selector, func) {
  var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var node = document.querySelectorAll(selector);

  if (node.length) {
    func(attrs);
  }
}

/***/ }),

/***/ "./markup/static/js/helpers/svgInject.js":
/*!***********************************************!*\
  !*** ./markup/static/js/helpers/svgInject.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return svgInject; });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./markup/static/js/constants.js");

function svgInject() {
  var file = _constants_js__WEBPACK_IMPORTED_MODULE_0__["IMG_ROOT"] + _constants_js__WEBPACK_IMPORTED_MODULE_0__["SVG_FILENAME"];
  var revision = _constants_js__WEBPACK_IMPORTED_MODULE_0__["SVG_REVISION"];

  if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) {
    return true;
  }

  var isLocalStorage = 'localStorage' in window && window.localStorage !== null,
      request,
      data,
      insertIT = function insertIT() {
    document.body.insertAdjacentHTML('afterbegin', data);
  },
      insert = function insert() {
    if (document.body) {
      insertIT();
    } else {
      document.addEventListener('DOMContentLoaded', insertIT);
    }
  };

  if (isLocalStorage && localStorage.getItem('inlineSVGrev') === revision) {
    data = localStorage.getItem('inlineSVGdata');

    if (data) {
      insert();
      return true;
    }
  }

  try {
    request = new XMLHttpRequest();
    request.open('GET', file, true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        data = request.responseText;
        insert();

        if (isLocalStorage) {
          localStorage.setItem('inlineSVGdata', data);
          localStorage.setItem('inlineSVGrev', revision);
        }
      }
    };

    request.send();
  } catch (e) {
    console.log(e);
  }
}

/***/ }),

/***/ "./markup/static/js/main.js":
/*!**********************************!*\
  !*** ./markup/static/js/main.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var static_js_helpers_svgInject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! static/js/helpers/svgInject */ "./markup/static/js/helpers/svgInject.js");
/* harmony import */ var static_js_helpers_run__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! static/js/helpers/run */ "./markup/static/js/helpers/run.js");
/* harmony import */ var components_header_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/header/header.js */ "./markup/components/header/header.js");
/* harmony import */ var components_serf_serf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/serf/serf.js */ "./markup/components/serf/serf.js");
/* harmony import */ var components_travel_travel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/travel/travel.js */ "./markup/components/travel/travel.js");
/* harmony import */ var components_travel_travel_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(components_travel_travel_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_sleep_sleep_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/sleep/sleep.js */ "./markup/components/sleep/sleep.js");
/* harmony import */ var components_sleep_sleep_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(components_sleep_sleep_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_shop_shop_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/shop/shop.js */ "./markup/components/shop/shop.js");
/* harmony import */ var components_shop_shop_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(components_shop_shop_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var static_js_helpers_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! static/js/helpers/http */ "./markup/static/js/helpers/http.js");
/* harmony import */ var static_js_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! static/js/constants */ "./markup/static/js/constants.js");

/* *** --- REMOVE JQUERY --- *** */
// import $ from 'jquery';
// import debug from 'components/debug/debug';
// import addSerializeObject from 'static/js/helpers/serializeObject';
// import addIsInViewPort from 'static/js/helpers/is-in-viewport';

/* *** --- REMOVE JQUERY --- *** */







 // https://www.npmjs.com/package/smoothscroll-polyfill
// for safari


smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_7___default.a.polyfill(); // ajax



/* *** --- REMOVE JQUERY --- *** */
// debug();
// addIsInViewPort();
// addSerializeObject();

/* *** --- REMOVE JQUERY --- *** */

/* example run fn */
// run('selector', fn);

/* example smoothscroll */

/*
window.scroll({
  top: element.getBoundingClientRect().top + window.scrollY,
  left: 0,
  behavior: 'smooth'
});
*/

/* example HTTP */

/*
  HTTP.post(API_ROUTES_CALLBACK, {
    body: formData,
  }).then((response) => {
    // console.log(response);
  }).catch((error) => {
    // console.log(error);
  });
*/

Object(static_js_helpers_svgInject__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9tYXJrdXAvY29tcG9uZW50cy9zZXJmL3NlcmYuanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9oZWxwZXJzL2h0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9oZWxwZXJzL3J1bi5qcyIsIndlYnBhY2s6Ly8vLi9tYXJrdXAvc3RhdGljL2pzL2hlbHBlcnMvc3ZnSW5qZWN0LmpzIiwid2VicGFjazovLy8uL21hcmt1cC9zdGF0aWMvanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJzbGlkZXJUb3AiLCJTd2lwZXIiLCJsb29wIiwiZWZmZWN0IiwibG9vcGVkU2xpZGVzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInRodW1icyIsInN3aXBlciIsInNsaWRlckJvdHRvbSIsIndhdGNoU2xpZGVzVmlzaWJpbGl0eSIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJzbGlkZXNQZXJWaWV3Iiwic2xpZGVUb0NsaWNrZWRTbGlkZSIsImNhcm91c2VsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2xpZGVyQ2Fyb3VzZWwiLCJjZW50ZXJlZFNsaWRlcyIsInN1cmZTbGlkZXIiLCJzbGlkZXJNYXBQb2ludCIsIkhFQURFUlMiLCJNRURJQSIsIkRFU0tUT1AiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsIk1PQklMRSIsIlRBQkxFVCIsIlhMIiwiY29uZmlnIiwiYXBpIiwicm9vdCIsIkFQSV9ST09UIiwiY3NmciIsIkNTRlJfVE9LRU4iLCJyb3V0ZXMiLCJjYWxsYmFjayIsIkFQSV9ST1VURVNfQ0FMTEJBQ0siLCJzdmciLCJJTUdfUk9PVCIsImZpbGVuYW1lIiwiU1ZHX0ZJTEVOQU1FIiwicmV2aXNpb24iLCJTVkdfUkVWSVNJT04iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhcnJheUZvcm1hdCIsIkFSUkFZX0ZPUk1BVCIsIkhUVFAiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwicnVuIiwic2VsZWN0b3IiLCJmdW5jIiwiYXR0cnMiLCJub2RlIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInN2Z0luamVjdCIsImZpbGUiLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVTVkdSZWN0IiwiaXNMb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJyZXF1ZXN0IiwiZGF0YSIsImluc2VydElUIiwiYm9keSIsImluc2VydEFkamFjZW50SFRNTCIsImluc2VydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRJdGVtIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2V0SXRlbSIsInNlbmQiLCJlIiwiY29uc29sZSIsImxvZyIsInNtb290aHNjcm9sbCIsInBvbHlmaWxsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFpQixZQUFZO0FBQzNCLFVBQUlWLE9BQU8sQ0FBQ1csTUFBUixJQUFrQixHQUFsQixJQUF5QlgsT0FBTyxDQUFDVyxNQUFSLEdBQWlCLEdBQTlDLEVBQW1EO0FBQ2pEVixZQUFJLEdBQUdELE9BQU8sQ0FBQ1ksWUFBZjtBQUNBUCxjQUFNOztBQUNOLFlBQUlQLGNBQUosRUFBb0I7QUFDbEJDLHNCQUFZLENBQUNjLE9BQWIsQ0FBcUIsZUFBckIsRUFBc0NaLElBQXRDO0FBQ0FGLHNCQUFZLENBQUNjLE9BQWIsQ0FBcUIsY0FBckIsRUFBcUN0QyxRQUFyQztBQUNEO0FBQ0Y7QUFDRixLQVREOztBQVVBeUIsV0FBTyxDQUFDYyxJQUFSO0FBQ0QsR0FkRCxDQWNFLE9BQU9DLENBQVAsRUFBVTtBQUNWQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7O0FDckREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFhO0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Q0FNQTtBQUNBOztBQUNBO0FBQ0FHLDREQUFZLENBQUNDLFFBQWIsRyxDQUVBOztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBOztBQUdBOztBQUNBOzs7Ozs7OztBQVFBOztBQUNBOzs7Ozs7Ozs7O0FBVUF6QiwyRUFBUyxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9zdGF0aWMvanMvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XHJcblxyXG52YXIgc2xpZGVyVG9wID0gbmV3IFN3aXBlcignLnNsaWRlci10b3AnLCB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgZWZmZWN0OiAnc2xpZGUnLFxyXG4gICAgbG9vcGVkU2xpZGVzOiA0LFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxuICAgIHRodW1iczoge1xyXG4gICAgICAgIHN3aXBlcjogc2xpZGVyQm90dG9tLFxyXG4gICAgfVxyXG59KTtcclxuXHJcbnZhciBzbGlkZXJCb3R0b20gPSBuZXcgU3dpcGVyKCcuc2xpZGVyLWJvdHRvbScsIHtcclxuICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogdHJ1ZSxcclxuICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgbG9vcGVkU2xpZGVzOiA0LFxyXG4gICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IHRydWUsXHJcbiAgICB0aHVtYnM6IHtcclxuICAgICAgICBzd2lwZXI6IHNsaWRlclRvcCxcclxuICAgIH1cclxufSk7XHJcblxyXG4iLCJpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XHJcbmxldCBjYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItY29udGFpbmVyX19jYXJvdXNlbCcpLFxyXG4gICAgc2xpZGVyQ2Fyb3VzZWwgPSBuZXcgU3dpcGVyKGNhcm91c2VsLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxubGV0IHN1cmZTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWNvbnRhaW5lcl9fbWFwJyksXHJcbiAgICBzbGlkZXJNYXBQb2ludCA9IG5ldyBTd2lwZXIoc3VyZlNsaWRlciwge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDgsXHJcbiAgICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG4gICAgICAgIHRodW1iczoge1xyXG4gICAgICAgICAgICBzd2lwZXI6IHNsaWRlckNhcm91c2VsLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuIiwiZXhwb3J0IGNvbnN0IEhFQURFUlMgPSB7XG4gICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJzogJyonLFxuICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6ICcqJ1xufTtcblxuXG5cbmV4cG9ydCBjb25zdCBNRURJQSA9IHtcbiAgREVTS1RPUDogd2luZG93Lm1hdGNoTWVkaWEoJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KScpLm1hdGNoZXMsXG4gIE1PQklMRTogd2luZG93Lm1hdGNoTWVkaWEoJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpJykubWF0Y2hlcyxcbiAgVEFCTEVUOiB3aW5kb3cubWF0Y2hNZWRpYSgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCknKS5tYXRjaGVzLFxuICBYTDogd2luZG93Lm1hdGNoTWVkaWEoJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KScpLm1hdGNoZXNcbn07XG5cblxuXG5leHBvcnQgY29uc3Qge1xuICBhcGk6IHtcbiAgICByb290OiBBUElfUk9PVCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAvJyxcbiAgICBjc2ZyOiBDU0ZSX1RPS0VOID0gJycsXG4gICAgcm91dGVzOiB7XG4gICAgICBjYWxsYmFjazogQVBJX1JPVVRFU19DQUxMQkFDSyA9ICdjYWxsYmFjaycsIC8vIGRlZmF1bHRcbiAgICB9ID0ge31cbiAgfSA9IHt9LFxuICBzdmc6IHtcbiAgICByb290OiBJTUdfUk9PVCA9ICcvc3RhdGljL2ltZy8nLFxuICAgIGZpbGVuYW1lOiBTVkdfRklMRU5BTUUgPSAnc3ZnLXN5bWJvbHMuc3ZnJyxcbiAgICByZXZpc2lvbjogU1ZHX1JFVklTSU9OID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDIwKSksXG4gIH0gPSB7fSxcblxuICBhcnJheUZvcm1hdDogQVJSQVlfRk9STUFUID0gJ3JlcGVhdCcsXG5cbn0gPSB3aW5kb3cuY29uZmlnIHx8IHt9O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7XG4gIEFQSV9ST09ULFxuICBIRUFERVJTXG59IGZyb20gJy4uL2NvbnN0YW50cy5qcyc7XG5cbmV4cG9ydCBjb25zdCBIVFRQID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogQVBJX1JPT1QsXG4gIGhlYWRlcnM6IEhFQURFUlNcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcnVuKHNlbGVjdG9yLCBmdW5jLCBhdHRycyA9IG51bGwpIHtcbiAgbGV0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgaWYgKG5vZGUubGVuZ3RoKSB7XG4gICAgZnVuYyhhdHRycyk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIElNR19ST09ULFxuICBTVkdfRklMRU5BTUUsXG4gIFNWR19SRVZJU0lPTixcbn0gZnJvbSAnLi4vY29uc3RhbnRzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ZnSW5qZWN0KCkge1xuICBjb25zdCBmaWxlID0gSU1HX1JPT1QgKyBTVkdfRklMRU5BTUU7XG4gIGNvbnN0IHJldmlzaW9uID0gU1ZHX1JFVklTSU9OO1xuXG4gIGlmICghZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TIHx8ICFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpLmNyZWF0ZVNWR1JlY3QpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGxldCBpc0xvY2FsU3RvcmFnZSA9ICdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvdyAmJiB3aW5kb3cubG9jYWxTdG9yYWdlICE9PSBudWxsLFxuICAgIHJlcXVlc3QsXG4gICAgZGF0YSxcbiAgICBpbnNlcnRJVCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgZGF0YSk7XG4gICAgfSxcbiAgICBpbnNlcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgICBpbnNlcnRJVCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluc2VydElUKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gIGlmIChpc0xvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5saW5lU1ZHcmV2JykgPT09IHJldmlzaW9uKSB7XG4gICAgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmxpbmVTVkdkYXRhJyk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGluc2VydCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vcGVuKCdHRVQnLCBmaWxlLCB0cnVlKTtcbiAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgZGF0YSA9IHJlcXVlc3QucmVzcG9uc2VUZXh0O1xuICAgICAgICBpbnNlcnQoKTtcbiAgICAgICAgaWYgKGlzTG9jYWxTdG9yYWdlKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lubGluZVNWR2RhdGEnLCBkYXRhKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5saW5lU1ZHcmV2JywgcmV2aXNpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICByZXF1ZXN0LnNlbmQoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qICoqKiAtLS0gUkVNT1ZFIEpRVUVSWSAtLS0gKioqICovXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy8gaW1wb3J0IGRlYnVnIGZyb20gJ2NvbXBvbmVudHMvZGVidWcvZGVidWcnO1xuLy8gaW1wb3J0IGFkZFNlcmlhbGl6ZU9iamVjdCBmcm9tICdzdGF0aWMvanMvaGVscGVycy9zZXJpYWxpemVPYmplY3QnO1xuLy8gaW1wb3J0IGFkZElzSW5WaWV3UG9ydCBmcm9tICdzdGF0aWMvanMvaGVscGVycy9pcy1pbi12aWV3cG9ydCc7XG4vKiAqKiogLS0tIFJFTU9WRSBKUVVFUlkgLS0tICoqKiAqL1xuXG5pbXBvcnQgc3ZnSW5qZWN0IGZyb20gJ3N0YXRpYy9qcy9oZWxwZXJzL3N2Z0luamVjdCc7XG5pbXBvcnQgcnVuIGZyb20gJ3N0YXRpYy9qcy9oZWxwZXJzL3J1bic7XG5cbmltcG9ydCBoZWFkZXIgZnJvbSAnY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzJztcbmltcG9ydCBzZXJmIGZyb20gJ2NvbXBvbmVudHMvc2VyZi9zZXJmLmpzJztcbmltcG9ydCB0cmF2ZWwgZnJvbSAnY29tcG9uZW50cy90cmF2ZWwvdHJhdmVsLmpzJztcbmltcG9ydCBzbGVlcCBmcm9tICdjb21wb25lbnRzL3NsZWVwL3NsZWVwLmpzJztcbmltcG9ydCBzaG9wIGZyb20gJ2NvbXBvbmVudHMvc2hvcC9zaG9wLmpzJztcblxuXG5cblxuLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvc21vb3Roc2Nyb2xsLXBvbHlmaWxsXG4vLyBmb3Igc2FmYXJpXG5pbXBvcnQgc21vb3Roc2Nyb2xsIGZyb20gJ3Ntb290aHNjcm9sbC1wb2x5ZmlsbCc7XG5zbW9vdGhzY3JvbGwucG9seWZpbGwoKTtcblxuLy8gYWpheFxuaW1wb3J0IHsgSFRUUCB9IGZyb20gJ3N0YXRpYy9qcy9oZWxwZXJzL2h0dHAnO1xuaW1wb3J0IHsgQVBJX1JPVVRFU19DQUxMQkFDSyB9IGZyb20gJ3N0YXRpYy9qcy9jb25zdGFudHMnO1xuXG5cbi8qICoqKiAtLS0gUkVNT1ZFIEpRVUVSWSAtLS0gKioqICovXG4vLyBkZWJ1ZygpO1xuLy8gYWRkSXNJblZpZXdQb3J0KCk7XG4vLyBhZGRTZXJpYWxpemVPYmplY3QoKTtcbi8qICoqKiAtLS0gUkVNT1ZFIEpRVUVSWSAtLS0gKioqICovXG5cbi8qIGV4YW1wbGUgcnVuIGZuICovXG4vLyBydW4oJ3NlbGVjdG9yJywgZm4pO1xuXG5cbi8qIGV4YW1wbGUgc21vb3Roc2Nyb2xsICovXG4vKlxud2luZG93LnNjcm9sbCh7XG4gIHRvcDogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWSxcbiAgbGVmdDogMCxcbiAgYmVoYXZpb3I6ICdzbW9vdGgnXG59KTtcbiovXG5cbi8qIGV4YW1wbGUgSFRUUCAqL1xuLypcbiAgSFRUUC5wb3N0KEFQSV9ST1VURVNfQ0FMTEJBQ0ssIHtcbiAgICBib2R5OiBmb3JtRGF0YSxcbiAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfSk7XG4qL1xuXG5zdmdJbmplY3QoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=