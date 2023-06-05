/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./components/Main/images/main-bg.jpg */ "./src/components/Main/images/main-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --sky-blue: hsla(199, 64%, 73%, 1);\n  --blue-green: hsla(192, 70%, 43%, 1);\n  --prussian-blue: hsla(200, 95%, 14%, 1);\n  --selective-yellow: hsla(43, 100%, 51%, 1);\n  --ut-orange: hsla(32, 100%, 49%, 1);\n\n  --sky-blue-o75: hsla(199, 64%, 73%, 0.75);\n  --blue-green-o75: hsla(192, 70%, 43%, 0.75);\n  --prussian-blue-o75: hsla(200, 95%, 14%, 0.75);\n  --selective-yellow-o75: hsla(43, 100%, 51%, 0.75);\n  --ut-orange-o75: hsla(32, 100%, 49%, 0.75);\n\n  --previous-view-bg-clr: none;\n\n  --marginSpace: 0.3rem;\n  --footer-font-size: 1rem;\n\n  --small-br: 5px;\n  --med-br: 10px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  background-color: var(--sky-blue);\n  font-family: sans-serif;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n\nmain {\n  display: grid;\n}\n\n.content {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 75px auto max-content;\n}\n\nheader {\n  width: 100%;\n  background-color: var(--prussian-blue-o75);\n  display: grid;\n  grid-template-columns: 75%;\n  justify-content: center;\n  align-items: end;\n  /* padding: 15px; */\n}\n\nnav {\n  display: grid;\n  grid-template-rows: auto;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 15px;\n}\n\n@keyframes nav-button-animation-A {\n  100% {\n    background-color: var(--selective-yellow-o75);\n  }\n}\n@keyframes nav-button-animation-B {\n  100% {\n    background-color: var(--blue-green-o75);\n  }\n}\n\n@keyframes nav-button-animation-C {\n  100% {\n    background-color: var(--selective-yellow-o75);\n  }\n}\n\n@keyframes nav-button-animation-D {\n  100% {\n    background-color: var(--blue-green-o75);\n  }\n}\n\n.nav-button {\n  background-color: rgba(211, 211, 211, 0.75);\n  text-align: center;\n  padding: 3px;\n  border-radius: var(--small-br) var(--small-br) 0 0;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.nav-button:active {\n  transform: scaleX(0.98);\n}\n\n/* .active-view-btn {\n  background-color: var(--sky-blue);\n} */\n\nfooter {\n  background-color: var(--prussian-blue);\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  justify-items: center;\n  color: white;\n\n  padding: 20px;\n\n  font-size: var(--footer-font-size);\n}\n\nfooter img {\n  height: calc(var(--footer-font-size) - 0.2rem);\n}\n\nfooter a {\n  margin-left: var(--marginSpace);\n  color: var(--ut-orange);\n}\n\nfooter img:hover {\n  scale: 1.2;\n}\n\nfooter img:active {\n  scale: 1;\n}\n\n.attributions-link {\n  text-decoration: underline;\n  cursor: pointer;\n  color: var(--ut-orange);\n}\n\n.attributions-container {\n  text-align: center;\n  font-size: 0.6rem;\n  list-style-type: none;\n}\n\n.attributions-list {\n  list-style-type: none;\n}\n\n.red {\n  color: red;\n}\n\n.view {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  grid-row: 1;\n  grid-column: 1;\n}\n\n@keyframes view-animation-A {\n  100% {\n    background-color: var(--selective-yellow-o75);\n  }\n}\n\n@keyframes view-animation-B {\n  100% {\n    background-color: var(--blue-green-o75);\n  }\n}\n\n@keyframes view-animation-C {\n  100% {\n    background-color: var(--selective-yellow-o75);\n  }\n}\n\n@keyframes view-animation-D {\n  100% {\n    background-color: var(--blue-green-o75);\n  }\n}\n\n/* .A {\n  background-color: var(--selective-yellow);\n}\n\n.B {\n  background-color: var(--blue-green);\n}\n\n.C {\n  background-color: var(--selective-yellow);\n}\n\n.D {\n  background-color: var(--blue-green);\n} */\n\n/* UTILITY CLASSES */\n.hidden {\n  visibility: hidden;\n}\n\n.removed {\n  display: none;\n}\n\n.un-selectable-text {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;EAClC,oCAAoC;EACpC,uCAAuC;EACvC,0CAA0C;EAC1C,mCAAmC;;EAEnC,yCAAyC;EACzC,2CAA2C;EAC3C,8CAA8C;EAC9C,iDAAiD;EACjD,0CAA0C;;EAE1C,4BAA4B;;EAE5B,qBAAqB;EACrB,wBAAwB;;EAExB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,iCAAiC;EACjC,uBAAuB;EACvB,mDAAuD;EACvD,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yCAAyC;AAC3C;;AAEA;EACE,WAAW;EACX,0CAA0C;EAC1C,aAAa;EACb,0BAA0B;EAC1B,uBAAuB;EACvB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE;IACE,6CAA6C;EAC/C;AACF;AACA;EACE;IACE,uCAAuC;EACzC;AACF;;AAEA;EACE;IACE,6CAA6C;EAC/C;AACF;;AAEA;EACE;IACE,uCAAuC;EACzC;AACF;;AAEA;EACE,2CAA2C;EAC3C,kBAAkB;EAClB,YAAY;EACZ,kDAAkD;EAClD,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;GAEG;;AAEH;EACE,sCAAsC;EACtC,aAAa;EACb,2DAA2D;EAC3D,qBAAqB;EACrB,YAAY;;EAEZ,aAAa;;EAEb,kCAAkC;AACpC;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,+BAA+B;EAC/B,uBAAuB;AACzB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,0BAA0B;EAC1B,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,cAAc;AAChB;;AAEA;EACE;IACE,6CAA6C;EAC/C;AACF;;AAEA;EACE;IACE,uCAAuC;EACzC;AACF;;AAEA;EACE;IACE,6CAA6C;EAC/C;AACF;;AAEA;EACE;IACE,uCAAuC;EACzC;AACF;;AAEA;;;;;;;;;;;;;;GAcG;;AAEH,oBAAoB;AACpB;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,2BAA2B;EAC3B,yBAAyB;EACzB,wBAAwB;EACxB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB","sourcesContent":[":root {\n  --sky-blue: hsla(199, 64%, 73%, 1);\n  --blue-green: hsla(192, 70%, 43%, 1);\n  --prussian-blue: hsla(200, 95%, 14%, 1);\n  --selective-yellow: hsla(43, 100%, 51%, 1);\n  --ut-orange: hsla(32, 100%, 49%, 1);\n\n  --sky-blue-o75: hsla(199, 64%, 73%, 0.75);\n  --blue-green-o75: hsla(192, 70%, 43%, 0.75);\n  --prussian-blue-o75: hsla(200, 95%, 14%, 0.75);\n  --selective-yellow-o75: hsla(43, 100%, 51%, 0.75);\n  --ut-orange-o75: hsla(32, 100%, 49%, 0.75);\n\n  --previous-view-bg-clr: none;\n\n  --marginSpace: 0.3rem;\n  --footer-font-size: 1rem;\n\n  --small-br: 5px;\n  --med-br: 10px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  background-color: var(--sky-blue);\n  font-family: sans-serif;\n  background: url(\"./components/Main/images/main-bg.jpg\");\n  background-size: cover;\n}\n\nmain {\n  display: grid;\n}\n\n.content {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 75px auto max-content;\n}\n\nheader {\n  width: 100%;\n  background-color: var(--prussian-blue-o75);\n  display: grid;\n  grid-template-columns: 75%;\n  justify-content: center;\n  align-items: end;\n  /* padding: 15px; */\n}\n\nnav {\n  display: grid;\n  grid-template-rows: auto;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 15px;\n}\n\n@keyframes nav-button-animation-A {\n  100% {\n    background-color: var(--selective-yellow-o75);\n  }\n}\n@keyframes nav-button-animation-B {\n  100% {\n    background-color: var(--blue-green-o75);\n  }\n}\n\n@keyframes nav-button-animation-C {\n  100% {\n    background-color: var(--selective-yellow-o75);\n  }\n}\n\n@keyframes nav-button-animation-D {\n  100% {\n    background-color: var(--blue-green-o75);\n  }\n}\n\n.nav-button {\n  background-color: rgba(211, 211, 211, 0.75);\n  text-align: center;\n  padding: 3px;\n  border-radius: var(--small-br) var(--small-br) 0 0;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.nav-button:active {\n  transform: scaleX(0.98);\n}\n\n/* .active-view-btn {\n  background-color: var(--sky-blue);\n} */\n\nfooter {\n  background-color: var(--prussian-blue);\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  justify-items: center;\n  color: white;\n\n  padding: 20px;\n\n  font-size: var(--footer-font-size);\n}\n\nfooter img {\n  height: calc(var(--footer-font-size) - 0.2rem);\n}\n\nfooter a {\n  margin-left: var(--marginSpace);\n  color: var(--ut-orange);\n}\n\nfooter img:hover {\n  scale: 1.2;\n}\n\nfooter img:active {\n  scale: 1;\n}\n\n.attributions-link {\n  text-decoration: underline;\n  cursor: pointer;\n  color: var(--ut-orange);\n}\n\n.attributions-container {\n  text-align: center;\n  font-size: 0.6rem;\n  list-style-type: none;\n}\n\n.attributions-list {\n  list-style-type: none;\n}\n\n.red {\n  color: red;\n}\n\n.view {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  grid-row: 1;\n  grid-column: 1;\n}\n\n@keyframes view-animation-A {\n  100% {\n    background-color: var(--selective-yellow-o75);\n  }\n}\n\n@keyframes view-animation-B {\n  100% {\n    background-color: var(--blue-green-o75);\n  }\n}\n\n@keyframes view-animation-C {\n  100% {\n    background-color: var(--selective-yellow-o75);\n  }\n}\n\n@keyframes view-animation-D {\n  100% {\n    background-color: var(--blue-green-o75);\n  }\n}\n\n/* .A {\n  background-color: var(--selective-yellow);\n}\n\n.B {\n  background-color: var(--blue-green);\n}\n\n.C {\n  background-color: var(--selective-yellow);\n}\n\n.D {\n  background-color: var(--blue-green);\n} */\n\n/* UTILITY CLASSES */\n.hidden {\n  visibility: hidden;\n}\n\n.removed {\n  display: none;\n}\n\n.un-selectable-text {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logos_github_mark_white_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logos/github-mark-white.png */ "./src/components/Footer/logos/github-mark-white.png");


const Footer = () => {
  const footer = Object.assign(document.createElement("footer"), {});

  const copyrightContainer = Object.assign(document.createElement("div"), {
    className: "copyright-container",
    innerText: `© Carlin Mitchell ${new Date().getFullYear()}`,
  });

  const topContainer = Object.assign(document.createElement("div"), {
    className: "top-attribution",
    innerText: "Inspired by",
  });

  const topLink = Object.assign(document.createElement("a"), {
    className: "top-link",
    innerText: "The Odin Project",
    href: "https://www.theodinproject.com/",
  });

  const githubLink = Object.assign(document.createElement("a"), {
    href: "https://github.com/carlin-mitchell/restaurant-page-TOP",
  });

  const githubIcon = Object.assign(document.createElement("img"), {
    src: _logos_github_mark_white_png__WEBPACK_IMPORTED_MODULE_0__,
  });

  const attributionsLink = Object.assign(document.createElement("div"), {
    className: "attributions-link",
    innerText: `show site attributions`,
    "data-show-attrs": false,
    onclick: function () {
      const attributionsContainer = document.querySelector(
        ".attributions-container"
      );
      if (!this["data-show-attrs"]) {
        attributionsContainer.classList.remove("removed");
        this.innerText = "hide site attributions";
        this["data-show-attrs"] = true;
      } else {
        attributionsContainer.classList.add("removed");
        this.innerText = "show site attributions";
        this["data-show-attrs"] = false;
      }
    },
  });

  const attributionsContainer = Object.assign(document.createElement("div"), {
    className: "attributions-container removed",
  });

  const attributionsList = Object.assign(document.createElement("ul"), {
    className: "attributions-list",
  });

  const listItem = Object.assign(document.createElement("li"));

  const bgImageAttributionLink = Object.assign(document.createElement("a"), {
    innerText: "Background Image By jcomp",
    href: " https://www.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_13807905.htm#query=food&position=13&from_view=search&track=sph",
  });

  const attributionsLinkAndContainer = Object.assign(
    document.createElement("div")
  );

  githubLink.appendChild(githubIcon);
  copyrightContainer.appendChild(githubLink);
  topContainer.appendChild(topLink);

  listItem.appendChild(bgImageAttributionLink);
  attributionsList.appendChild(listItem);
  attributionsContainer.appendChild(attributionsList);
  attributionsLinkAndContainer.appendChild(attributionsLink);
  attributionsLinkAndContainer.appendChild(attributionsContainer);

  footer.appendChild(copyrightContainer);
  footer.appendChild(topContainer);
  footer.appendChild(attributionsLinkAndContainer);

  return footer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav */ "./src/components/Nav.js");


const Header = () => {
  const header = Object.assign(document.createElement("header", {}));
  header.appendChild((0,_Nav__WEBPACK_IMPORTED_MODULE_0__["default"])());
  return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/components/Main/Main.js":
/*!*************************************!*\
  !*** ./src/components/Main/Main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View */ "./src/components/View.js");


const Main = () => {
  const main = Object.assign(document.createElement("main"), {});
  main.appendChild((0,_View__WEBPACK_IMPORTED_MODULE_0__["default"])("A"));
  main.appendChild((0,_View__WEBPACK_IMPORTED_MODULE_0__["default"])("B"));
  main.appendChild((0,_View__WEBPACK_IMPORTED_MODULE_0__["default"])("C"));
  main.appendChild((0,_View__WEBPACK_IMPORTED_MODULE_0__["default"])("D"));
  return main;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);


/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavButton */ "./src/components/NavButton.js");


const Nav = () => {
  const nav = Object.assign(document.createElement("nav"), {});

  nav.appendChild((0,_NavButton__WEBPACK_IMPORTED_MODULE_0__["default"])("A"));
  nav.appendChild((0,_NavButton__WEBPACK_IMPORTED_MODULE_0__["default"])("B"));
  nav.appendChild((0,_NavButton__WEBPACK_IMPORTED_MODULE_0__["default"])("C"));
  nav.appendChild((0,_NavButton__WEBPACK_IMPORTED_MODULE_0__["default"])("D"));

  return nav;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);


/***/ }),

/***/ "./src/components/NavButton.js":
/*!*************************************!*\
  !*** ./src/components/NavButton.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic_ScreenController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/ScreenController */ "./src/logic/ScreenController.js");


const NavButton = (buttonID) => {
  const button = Object.assign(document.createElement("div"), {
    id: `toggle-view-${buttonID}`,
    innerText: `View ${buttonID}`,
    classList: "nav-button un-selectable-text",
    onclick: function () {
      _logic_ScreenController__WEBPACK_IMPORTED_MODULE_0__["default"].toggleView(this.id);
    },
  });

  return button;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavButton);


/***/ }),

/***/ "./src/components/View.js":
/*!********************************!*\
  !*** ./src/components/View.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const View = (viewID) => {
  const view = Object.assign(document.createElement("div"), {
    id: `view-${viewID}`,
    className: `${viewID} view hidden`,
  });

  return view;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);


/***/ }),

/***/ "./src/logic/ScreenController.js":
/*!***************************************!*\
  !*** ./src/logic/ScreenController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ScreenController = (() => {
  const toggleView = (buttonID) => {
    const animationTransitionTimeSeconds = (0).toString() + "s";
    const viewId = `view-${buttonID.split("-").slice(-1)}`;
    const viewIdIdentifier = viewId.split("-")[1];

    //hide all views
    const allViews = document.querySelectorAll(".view");
    allViews.forEach((view) => {
      view.classList.add("hidden");
      view.style.animation = "";
    });
    //display the target view
    const view = document.querySelector("#" + viewId);
    view.classList.remove("hidden");
    view.style.animation = `view-animation-${viewIdIdentifier} ${animationTransitionTimeSeconds} forwards`;

    //reset all nav button backgrounds
    const allNavButtons = document.querySelectorAll(".nav-button");
    const clickedNavButton = document.querySelector(`#${buttonID}`);
    //animate the clicked nav button bg color to the corresponding view bg color
    allNavButtons.forEach((button) => (button.style.animation = ""));
    clickedNavButton.style.animation = `nav-button-animation-${viewIdIdentifier} ${animationTransitionTimeSeconds} forwards`;
  };
  return { toggleView };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScreenController);


/***/ }),

/***/ "./src/components/Footer/logos/github-mark-white.png":
/*!***********************************************************!*\
  !*** ./src/components/Footer/logos/github-mark-white.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "925aa8e685ab0217bb34.png";

/***/ }),

/***/ "./src/components/Main/images/main-bg.jpg":
/*!************************************************!*\
  !*** ./src/components/Main/images/main-bg.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31c59b1e4f7421d80ba0.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Main/Main */ "./src/components/Main/Main.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer/Footer */ "./src/components/Footer/Footer.js");





const content = Object.assign(document.createElement("div"), {
  className: "content",
});

document.body.appendChild(content);

content.appendChild((0,_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"])());
content.appendChild((0,_components_Main_Main__WEBPACK_IMPORTED_MODULE_2__["default"])());
content.appendChild((0,_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"])());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDb0I7QUFDQztBQUNNOztBQUVoRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxvQkFBb0IsOERBQU07QUFDMUIsb0JBQW9CLGlFQUFJO0FBQ3hCLG9CQUFvQixxRUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9NYWluLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9zcmMvY29tcG9uZW50cy9OYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL3NyYy9jb21wb25lbnRzL05hdkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vc3JjL2NvbXBvbmVudHMvVmlldy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vc3JjL2xvZ2ljL1NjcmVlbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2NvbXBvbmVudHMvTWFpbi9pbWFnZXMvbWFpbi1iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXNreS1ibHVlOiBoc2xhKDE5OSwgNjQlLCA3MyUsIDEpO1xcbiAgLS1ibHVlLWdyZWVuOiBoc2xhKDE5MiwgNzAlLCA0MyUsIDEpO1xcbiAgLS1wcnVzc2lhbi1ibHVlOiBoc2xhKDIwMCwgOTUlLCAxNCUsIDEpO1xcbiAgLS1zZWxlY3RpdmUteWVsbG93OiBoc2xhKDQzLCAxMDAlLCA1MSUsIDEpO1xcbiAgLS11dC1vcmFuZ2U6IGhzbGEoMzIsIDEwMCUsIDQ5JSwgMSk7XFxuXFxuICAtLXNreS1ibHVlLW83NTogaHNsYSgxOTksIDY0JSwgNzMlLCAwLjc1KTtcXG4gIC0tYmx1ZS1ncmVlbi1vNzU6IGhzbGEoMTkyLCA3MCUsIDQzJSwgMC43NSk7XFxuICAtLXBydXNzaWFuLWJsdWUtbzc1OiBoc2xhKDIwMCwgOTUlLCAxNCUsIDAuNzUpO1xcbiAgLS1zZWxlY3RpdmUteWVsbG93LW83NTogaHNsYSg0MywgMTAwJSwgNTElLCAwLjc1KTtcXG4gIC0tdXQtb3JhbmdlLW83NTogaHNsYSgzMiwgMTAwJSwgNDklLCAwLjc1KTtcXG5cXG4gIC0tcHJldmlvdXMtdmlldy1iZy1jbHI6IG5vbmU7XFxuXFxuICAtLW1hcmdpblNwYWNlOiAwLjNyZW07XFxuICAtLWZvb3Rlci1mb250LXNpemU6IDFyZW07XFxuXFxuICAtLXNtYWxsLWJyOiA1cHg7XFxuICAtLW1lZC1icjogMTBweDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktYmx1ZSk7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDc1cHggYXV0byBtYXgtY29udGVudDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJ1c3NpYW4tYmx1ZS1vNzUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzUlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbiAgLyogcGFkZGluZzogMTVweDsgKi9cXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG5hdi1idXR0b24tYW5pbWF0aW9uLUEge1xcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGl2ZS15ZWxsb3ctbzc1KTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBuYXYtYnV0dG9uLWFuaW1hdGlvbi1CIHtcXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWdyZWVuLW83NSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgbmF2LWJ1dHRvbi1hbmltYXRpb24tQyB7XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0aXZlLXllbGxvdy1vNzUpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG5hdi1idXR0b24tYW5pbWF0aW9uLUQge1xcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtZ3JlZW4tbzc1KTtcXG4gIH1cXG59XFxuXFxuLm5hdi1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjc1KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNtYWxsLWJyKSB2YXIoLS1zbWFsbC1icikgMCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLm5hdi1idXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDAuOTgpO1xcbn1cXG5cXG4vKiAuYWN0aXZlLXZpZXctYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS1ibHVlKTtcXG59ICovXFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBydXNzaWFuLWJsdWUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAgcGFkZGluZzogMjBweDtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9vdGVyLWZvbnQtc2l6ZSk7XFxufVxcblxcbmZvb3RlciBpbWcge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWZvb3Rlci1mb250LXNpemUpIC0gMC4ycmVtKTtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpblNwYWNlKTtcXG4gIGNvbG9yOiB2YXIoLS11dC1vcmFuZ2UpO1xcbn1cXG5cXG5mb290ZXIgaW1nOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjI7XFxufVxcblxcbmZvb3RlciBpbWc6YWN0aXZlIHtcXG4gIHNjYWxlOiAxO1xcbn1cXG5cXG4uYXR0cmlidXRpb25zLWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tdXQtb3JhbmdlKTtcXG59XFxuXFxuLmF0dHJpYnV0aW9ucy1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjZyZW07XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5hdHRyaWJ1dGlvbnMtbGlzdCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5yZWQge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnZpZXcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgdmlldy1hbmltYXRpb24tQSB7XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0aXZlLXllbGxvdy1vNzUpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHZpZXctYW5pbWF0aW9uLUIge1xcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtZ3JlZW4tbzc1KTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB2aWV3LWFuaW1hdGlvbi1DIHtcXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3RpdmUteWVsbG93LW83NSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgdmlldy1hbmltYXRpb24tRCB7XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1ncmVlbi1vNzUpO1xcbiAgfVxcbn1cXG5cXG4vKiAuQSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3RpdmUteWVsbG93KTtcXG59XFxuXFxuLkIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1ncmVlbik7XFxufVxcblxcbi5DIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGl2ZS15ZWxsb3cpO1xcbn1cXG5cXG4uRCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWdyZWVuKTtcXG59ICovXFxuXFxuLyogVVRJTElUWSBDTEFTU0VTICovXFxuLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5yZW1vdmVkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi51bi1zZWxlY3RhYmxlLXRleHQge1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtDQUFrQztFQUNsQyxvQ0FBb0M7RUFDcEMsdUNBQXVDO0VBQ3ZDLDBDQUEwQztFQUMxQyxtQ0FBbUM7O0VBRW5DLHlDQUF5QztFQUN6QywyQ0FBMkM7RUFDM0MsOENBQThDO0VBQzlDLGlEQUFpRDtFQUNqRCwwQ0FBMEM7O0VBRTFDLDRCQUE0Qjs7RUFFNUIscUJBQXFCO0VBQ3JCLHdCQUF3Qjs7RUFFeEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsdUJBQXVCO0VBQ3ZCLG1EQUF1RDtFQUN2RCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIscUNBQXFDO0VBQ3JDLFNBQVM7QUFDWDs7QUFFQTtFQUNFO0lBQ0UsNkNBQTZDO0VBQy9DO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsdUNBQXVDO0VBQ3pDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDZDQUE2QztFQUMvQztBQUNGOztBQUVBO0VBQ0U7SUFDRSx1Q0FBdUM7RUFDekM7QUFDRjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtEQUFrRDtFQUNsRCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztHQUVHOztBQUVIO0VBQ0Usc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QscUJBQXFCO0VBQ3JCLFlBQVk7O0VBRVosYUFBYTs7RUFFYixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsNkNBQTZDO0VBQy9DO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHVDQUF1QztFQUN6QztBQUNGOztBQUVBO0VBQ0U7SUFDRSw2Q0FBNkM7RUFDL0M7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUNBQXVDO0VBQ3pDO0FBQ0Y7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7O0FBRUgsb0JBQW9CO0FBQ3BCO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1za3ktYmx1ZTogaHNsYSgxOTksIDY0JSwgNzMlLCAxKTtcXG4gIC0tYmx1ZS1ncmVlbjogaHNsYSgxOTIsIDcwJSwgNDMlLCAxKTtcXG4gIC0tcHJ1c3NpYW4tYmx1ZTogaHNsYSgyMDAsIDk1JSwgMTQlLCAxKTtcXG4gIC0tc2VsZWN0aXZlLXllbGxvdzogaHNsYSg0MywgMTAwJSwgNTElLCAxKTtcXG4gIC0tdXQtb3JhbmdlOiBoc2xhKDMyLCAxMDAlLCA0OSUsIDEpO1xcblxcbiAgLS1za3ktYmx1ZS1vNzU6IGhzbGEoMTk5LCA2NCUsIDczJSwgMC43NSk7XFxuICAtLWJsdWUtZ3JlZW4tbzc1OiBoc2xhKDE5MiwgNzAlLCA0MyUsIDAuNzUpO1xcbiAgLS1wcnVzc2lhbi1ibHVlLW83NTogaHNsYSgyMDAsIDk1JSwgMTQlLCAwLjc1KTtcXG4gIC0tc2VsZWN0aXZlLXllbGxvdy1vNzU6IGhzbGEoNDMsIDEwMCUsIDUxJSwgMC43NSk7XFxuICAtLXV0LW9yYW5nZS1vNzU6IGhzbGEoMzIsIDEwMCUsIDQ5JSwgMC43NSk7XFxuXFxuICAtLXByZXZpb3VzLXZpZXctYmctY2xyOiBub25lO1xcblxcbiAgLS1tYXJnaW5TcGFjZTogMC4zcmVtO1xcbiAgLS1mb290ZXItZm9udC1zaXplOiAxcmVtO1xcblxcbiAgLS1zbWFsbC1icjogNXB4O1xcbiAgLS1tZWQtYnI6IDEwcHg7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LWJsdWUpO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vY29tcG9uZW50cy9NYWluL2ltYWdlcy9tYWluLWJnLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3NXB4IGF1dG8gbWF4LWNvbnRlbnQ7XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBydXNzaWFuLWJsdWUtbzc1KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc1JTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG4gIC8qIHBhZGRpbmc6IDE1cHg7ICovXFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuQGtleWZyYW1lcyBuYXYtYnV0dG9uLWFuaW1hdGlvbi1BIHtcXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3RpdmUteWVsbG93LW83NSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgbmF2LWJ1dHRvbi1hbmltYXRpb24tQiB7XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1ncmVlbi1vNzUpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG5hdi1idXR0b24tYW5pbWF0aW9uLUMge1xcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGl2ZS15ZWxsb3ctbzc1KTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBuYXYtYnV0dG9uLWFuaW1hdGlvbi1EIHtcXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWdyZWVuLW83NSk7XFxuICB9XFxufVxcblxcbi5uYXYtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC43NSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbWFsbC1icikgdmFyKC0tc21hbGwtYnIpIDAgMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5uYXYtYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwLjk4KTtcXG59XFxuXFxuLyogLmFjdGl2ZS12aWV3LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktYmx1ZSk7XFxufSAqL1xcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcnVzc2lhbi1ibHVlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIHBhZGRpbmc6IDIwcHg7XFxuXFxuICBmb250LXNpemU6IHZhcigtLWZvb3Rlci1mb250LXNpemUpO1xcbn1cXG5cXG5mb290ZXIgaW1nIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1mb290ZXItZm9udC1zaXplKSAtIDAuMnJlbSk7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW5TcGFjZSk7XFxuICBjb2xvcjogdmFyKC0tdXQtb3JhbmdlKTtcXG59XFxuXFxuZm9vdGVyIGltZzpob3ZlciB7XFxuICBzY2FsZTogMS4yO1xcbn1cXG5cXG5mb290ZXIgaW1nOmFjdGl2ZSB7XFxuICBzY2FsZTogMTtcXG59XFxuXFxuLmF0dHJpYnV0aW9ucy1saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLXV0LW9yYW5nZSk7XFxufVxcblxcbi5hdHRyaWJ1dGlvbnMtY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uYXR0cmlidXRpb25zLWxpc3Qge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ucmVkIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi52aWV3IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHZpZXctYW5pbWF0aW9uLUEge1xcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGl2ZS15ZWxsb3ctbzc1KTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB2aWV3LWFuaW1hdGlvbi1CIHtcXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWdyZWVuLW83NSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgdmlldy1hbmltYXRpb24tQyB7XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0aXZlLXllbGxvdy1vNzUpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHZpZXctYW5pbWF0aW9uLUQge1xcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtZ3JlZW4tbzc1KTtcXG4gIH1cXG59XFxuXFxuLyogLkEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0aXZlLXllbGxvdyk7XFxufVxcblxcbi5CIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtZ3JlZW4pO1xcbn1cXG5cXG4uQyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3RpdmUteWVsbG93KTtcXG59XFxuXFxuLkQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1ncmVlbik7XFxufSAqL1xcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ucmVtb3ZlZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udW4tc2VsZWN0YWJsZS10ZXh0IHtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEdpdEh1Ykljb24gZnJvbSBcIi4vbG9nb3MvZ2l0aHViLW1hcmstd2hpdGUucG5nXCI7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpLCB7fSk7XG5cbiAgY29uc3QgY29weXJpZ2h0Q29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcImNvcHlyaWdodC1jb250YWluZXJcIixcbiAgICBpbm5lclRleHQ6IGDCqSBDYXJsaW4gTWl0Y2hlbGwgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9YCxcbiAgfSk7XG5cbiAgY29uc3QgdG9wQ29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcInRvcC1hdHRyaWJ1dGlvblwiLFxuICAgIGlubmVyVGV4dDogXCJJbnNwaXJlZCBieVwiLFxuICB9KTtcblxuICBjb25zdCB0b3BMaW5rID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSwge1xuICAgIGNsYXNzTmFtZTogXCJ0b3AtbGlua1wiLFxuICAgIGlubmVyVGV4dDogXCJUaGUgT2RpbiBQcm9qZWN0XCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLCB7XG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vY2FybGluLW1pdGNoZWxsL3Jlc3RhdXJhbnQtcGFnZS1UT1BcIixcbiAgfSk7XG5cbiAgY29uc3QgZ2l0aHViSWNvbiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSwge1xuICAgIHNyYzogR2l0SHViSWNvbixcbiAgfSk7XG5cbiAgY29uc3QgYXR0cmlidXRpb25zTGluayA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGNsYXNzTmFtZTogXCJhdHRyaWJ1dGlvbnMtbGlua1wiLFxuICAgIGlubmVyVGV4dDogYHNob3cgc2l0ZSBhdHRyaWJ1dGlvbnNgLFxuICAgIFwiZGF0YS1zaG93LWF0dHJzXCI6IGZhbHNlLFxuICAgIG9uY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLmF0dHJpYnV0aW9ucy1jb250YWluZXJcIlxuICAgICAgKTtcbiAgICAgIGlmICghdGhpc1tcImRhdGEtc2hvdy1hdHRyc1wiXSkge1xuICAgICAgICBhdHRyaWJ1dGlvbnNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInJlbW92ZWRcIik7XG4gICAgICAgIHRoaXMuaW5uZXJUZXh0ID0gXCJoaWRlIHNpdGUgYXR0cmlidXRpb25zXCI7XG4gICAgICAgIHRoaXNbXCJkYXRhLXNob3ctYXR0cnNcIl0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0cmlidXRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVkXCIpO1xuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IFwic2hvdyBzaXRlIGF0dHJpYnV0aW9uc1wiO1xuICAgICAgICB0aGlzW1wiZGF0YS1zaG93LWF0dHJzXCJdID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgYXR0cmlidXRpb25zQ29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcImF0dHJpYnV0aW9ucy1jb250YWluZXIgcmVtb3ZlZFwiLFxuICB9KTtcblxuICBjb25zdCBhdHRyaWJ1dGlvbnNMaXN0ID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIiksIHtcbiAgICBjbGFzc05hbWU6IFwiYXR0cmlidXRpb25zLWxpc3RcIixcbiAgfSk7XG5cbiAgY29uc3QgbGlzdEl0ZW0gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG5cbiAgY29uc3QgYmdJbWFnZUF0dHJpYnV0aW9uTGluayA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIiksIHtcbiAgICBpbm5lclRleHQ6IFwiQmFja2dyb3VuZCBJbWFnZSBCeSBqY29tcFwiLFxuICAgIGhyZWY6IFwiIGh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtcGhvdG8vYnVkZGhhLWJvd2wtZGlzaC13aXRoLXZlZ2V0YWJsZXMtbGVndW1lcy10b3Atdmlld18xMzgwNzkwNS5odG0jcXVlcnk9Zm9vZCZwb3NpdGlvbj0xMyZmcm9tX3ZpZXc9c2VhcmNoJnRyYWNrPXNwaFwiLFxuICB9KTtcblxuICBjb25zdCBhdHRyaWJ1dGlvbnNMaW5rQW5kQ29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihcbiAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICk7XG5cbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcbiAgY29weXJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQodG9wTGluayk7XG5cbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoYmdJbWFnZUF0dHJpYnV0aW9uTGluayk7XG4gIGF0dHJpYnV0aW9uc0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICBhdHRyaWJ1dGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25zTGlzdCk7XG4gIGF0dHJpYnV0aW9uc0xpbmtBbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25zTGluayk7XG4gIGF0dHJpYnV0aW9uc0xpbmtBbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25zQ29udGFpbmVyKTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0Q29udGFpbmVyKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHRvcENvbnRhaW5lcik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChhdHRyaWJ1dGlvbnNMaW5rQW5kQ29udGFpbmVyKTtcblxuICByZXR1cm4gZm9vdGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwge30pKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKE5hdigpKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBWaWV3IGZyb20gXCIuLi9WaWV3XCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpLCB7fSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoVmlldyhcIkFcIikpO1xuICBtYWluLmFwcGVuZENoaWxkKFZpZXcoXCJCXCIpKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChWaWV3KFwiQ1wiKSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoVmlldyhcIkRcIikpO1xuICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgTmF2QnV0dG9uIGZyb20gXCIuL05hdkJ1dHRvblwiO1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKSwge30pO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChOYXZCdXR0b24oXCJBXCIpKTtcbiAgbmF2LmFwcGVuZENoaWxkKE5hdkJ1dHRvbihcIkJcIikpO1xuICBuYXYuYXBwZW5kQ2hpbGQoTmF2QnV0dG9uKFwiQ1wiKSk7XG4gIG5hdi5hcHBlbmRDaGlsZChOYXZCdXR0b24oXCJEXCIpKTtcblxuICByZXR1cm4gbmF2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIiwiaW1wb3J0IHNjcmVlbiBmcm9tIFwiLi4vbG9naWMvU2NyZWVuQ29udHJvbGxlclwiO1xuXG5jb25zdCBOYXZCdXR0b24gPSAoYnV0dG9uSUQpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaWQ6IGB0b2dnbGUtdmlldy0ke2J1dHRvbklEfWAsXG4gICAgaW5uZXJUZXh0OiBgVmlldyAke2J1dHRvbklEfWAsXG4gICAgY2xhc3NMaXN0OiBcIm5hdi1idXR0b24gdW4tc2VsZWN0YWJsZS10ZXh0XCIsXG4gICAgb25jbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgc2NyZWVuLnRvZ2dsZVZpZXcodGhpcy5pZCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJ1dHRvbjtcbiIsImNvbnN0IFZpZXcgPSAodmlld0lEKSA9PiB7XG4gIGNvbnN0IHZpZXcgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBpZDogYHZpZXctJHt2aWV3SUR9YCxcbiAgICBjbGFzc05hbWU6IGAke3ZpZXdJRH0gdmlldyBoaWRkZW5gLFxuICB9KTtcblxuICByZXR1cm4gdmlldztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXc7XG4iLCJjb25zdCBTY3JlZW5Db250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgdG9nZ2xlVmlldyA9IChidXR0b25JRCkgPT4ge1xuICAgIGNvbnN0IGFuaW1hdGlvblRyYW5zaXRpb25UaW1lU2Vjb25kcyA9ICgwKS50b1N0cmluZygpICsgXCJzXCI7XG4gICAgY29uc3Qgdmlld0lkID0gYHZpZXctJHtidXR0b25JRC5zcGxpdChcIi1cIikuc2xpY2UoLTEpfWA7XG4gICAgY29uc3Qgdmlld0lkSWRlbnRpZmllciA9IHZpZXdJZC5zcGxpdChcIi1cIilbMV07XG5cbiAgICAvL2hpZGUgYWxsIHZpZXdzXG4gICAgY29uc3QgYWxsVmlld3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZpZXdcIik7XG4gICAgYWxsVmlld3MuZm9yRWFjaCgodmlldykgPT4ge1xuICAgICAgdmlldy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgdmlldy5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICAgIH0pO1xuICAgIC8vZGlzcGxheSB0aGUgdGFyZ2V0IHZpZXdcbiAgICBjb25zdCB2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIHZpZXdJZCk7XG4gICAgdmlldy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIHZpZXcuc3R5bGUuYW5pbWF0aW9uID0gYHZpZXctYW5pbWF0aW9uLSR7dmlld0lkSWRlbnRpZmllcn0gJHthbmltYXRpb25UcmFuc2l0aW9uVGltZVNlY29uZHN9IGZvcndhcmRzYDtcblxuICAgIC8vcmVzZXQgYWxsIG5hdiBidXR0b24gYmFja2dyb3VuZHNcbiAgICBjb25zdCBhbGxOYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNsaWNrZWROYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtidXR0b25JRH1gKTtcbiAgICAvL2FuaW1hdGUgdGhlIGNsaWNrZWQgbmF2IGJ1dHRvbiBiZyBjb2xvciB0byB0aGUgY29ycmVzcG9uZGluZyB2aWV3IGJnIGNvbG9yXG4gICAgYWxsTmF2QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IChidXR0b24uc3R5bGUuYW5pbWF0aW9uID0gXCJcIikpO1xuICAgIGNsaWNrZWROYXZCdXR0b24uc3R5bGUuYW5pbWF0aW9uID0gYG5hdi1idXR0b24tYW5pbWF0aW9uLSR7dmlld0lkSWRlbnRpZmllcn0gJHthbmltYXRpb25UcmFuc2l0aW9uVGltZVNlY29uZHN9IGZvcndhcmRzYDtcbiAgfTtcbiAgcmV0dXJuIHsgdG9nZ2xlVmlldyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgU2NyZWVuQ29udHJvbGxlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuL2NvbXBvbmVudHMvTWFpbi9NYWluXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xuXG5jb25zdCBjb250ZW50ID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gIGNsYXNzTmFtZTogXCJjb250ZW50XCIsXG59KTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuY29udGVudC5hcHBlbmRDaGlsZChIZWFkZXIoKSk7XG5jb250ZW50LmFwcGVuZENoaWxkKE1haW4oKSk7XG5jb250ZW50LmFwcGVuZENoaWxkKEZvb3RlcigpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==