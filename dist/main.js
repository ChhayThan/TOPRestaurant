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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;0,800;1,400;1,500;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background-color: #2b2b2b;
  color: #fff0c5;

  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
}
nav {
  display: flex;
  justify-content: space-between;
  padding: 50px;
  min-width: 800px;
  max-width: 1080px;
}

nav .btn {
  margin: 10px;
}
.logo {
  display: flex;
  gap: 10px;
  font-size: 2rem;
  align-items: center;

  color: white;
  min-width: 100px;
}

.links {
  display: flex;
  align-items: center;
}

.message {
  text-align: center;
  margin-top: 20vh;
  padding: 50px;

  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
  line-height: 1.3cm;

  font-size: 2rem;

  min-width: 800px;
  max-width: 1080px;
}
.message h3 {
  color: white;
}

h3 span {
  text-decoration: underline;
  text-decoration-color: #ffc31d;
}

.info {
  display: flex;
  flex-direction: column;
  margin-top: 10vh;

  padding: 10px;
}

.sub-info {
  display: flex;
  min-width: 800px;
}

.sub-info img {
  width: 300px;
  height: auto;
  margin-right: 20px;
}

.sub-info h2 {
  font-style: italic;
}

.sub-info p,
.sub-info li {
  margin-top: 10px;
  color: white;
  max-width: 760px;
}

.sub-info li {
  font-size: 1.2rem;
}

.sub-info button {
  margin-top: 20px;
  margin-bottom: 10px;
}

.btn {
  background-color: #fff0c5;
  color: #2b2b2b;
  border: none;
  padding: 15px;

  text-decoration: underline;
  text-decoration-color: #ffc31d;

  box-shadow: 0 3px #997000;

  border-radius: 10px;
}

.menu_title {
  margin-top: 0vh;
  padding: 0px;
}

.btn:hover {
  background-color: #ffc31d;
}

.btn:active {
  background-color: #ffc31d;
  box-shadow: 0 1px #7b5a00;
  transform: translateY(4px);
}

#content:has(> div.about_banner) {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about_banner {
  background-color: white;
  color: #ffc31d;
  max-width: 1200px;

  border-radius: 20px;
  margin: 50px;

  display: grid;
  grid-template-columns: minmax(300px, 400px) minmax(300px, 430px) minmax(
      450px,
      600px
    );
  grid-template-rows: 100px 1fr 1fr;
  gap: 10px;

  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.about_banner .aboutHeading {
  grid-column: span 3;
}
.about_banner h3 {
  color: #2b2b2b;
}

.about_banner p {
  grid-area: 2/ 1 / 3 / 3;
  align-self: center;
  width: minmax(345px, 1fr);

  font-size: 20px;
  color: #2b2b2b;
  text-align: left;
}

.about_banner img {
  grid-area: 2 / 3 / 3 / 4;
}

.locationInfo,
.contactInfo {
  text-align: left;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,yBAAyB;EACzB,cAAc;;EAEd,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,SAAS;EACT,eAAe;EACf,mBAAmB;;EAEnB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;;EAEb,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;;EAElB,eAAe;;EAEf,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,YAAY;AACd;;AAEA;EACE,0BAA0B;EAC1B,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;;EAEhB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,aAAa;;EAEb,0BAA0B;EAC1B,8BAA8B;;EAE9B,yBAAyB;;EAEzB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,cAAc;EACd,iBAAiB;;EAEjB,mBAAmB;EACnB,YAAY;;EAEZ,aAAa;EACb;;;KAGG;EACH,iCAAiC;EACjC,SAAS;;EAET,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,yBAAyB;;EAEzB,eAAe;EACf,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;;EAEE,gBAAgB;AAClB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;0,800;1,400;1,500;1,700&display=swap\");\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\nbody {\n  background-color: #2b2b2b;\n  color: #fff0c5;\n\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nnav {\n  display: flex;\n  justify-content: space-between;\n  padding: 50px;\n  min-width: 800px;\n  max-width: 1080px;\n}\n\nnav .btn {\n  margin: 10px;\n}\n.logo {\n  display: flex;\n  gap: 10px;\n  font-size: 2rem;\n  align-items: center;\n\n  color: white;\n  min-width: 100px;\n}\n\n.links {\n  display: flex;\n  align-items: center;\n}\n\n.message {\n  text-align: center;\n  margin-top: 20vh;\n  padding: 50px;\n\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  font-style: italic;\n  line-height: 1.3cm;\n\n  font-size: 2rem;\n\n  min-width: 800px;\n  max-width: 1080px;\n}\n.message h3 {\n  color: white;\n}\n\nh3 span {\n  text-decoration: underline;\n  text-decoration-color: #ffc31d;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n  margin-top: 10vh;\n\n  padding: 10px;\n}\n\n.sub-info {\n  display: flex;\n  min-width: 800px;\n}\n\n.sub-info img {\n  width: 300px;\n  height: auto;\n  margin-right: 20px;\n}\n\n.sub-info h2 {\n  font-style: italic;\n}\n\n.sub-info p,\n.sub-info li {\n  margin-top: 10px;\n  color: white;\n  max-width: 760px;\n}\n\n.sub-info li {\n  font-size: 1.2rem;\n}\n\n.sub-info button {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n.btn {\n  background-color: #fff0c5;\n  color: #2b2b2b;\n  border: none;\n  padding: 15px;\n\n  text-decoration: underline;\n  text-decoration-color: #ffc31d;\n\n  box-shadow: 0 3px #997000;\n\n  border-radius: 10px;\n}\n\n.menu_title {\n  margin-top: 0vh;\n  padding: 0px;\n}\n\n.btn:hover {\n  background-color: #ffc31d;\n}\n\n.btn:active {\n  background-color: #ffc31d;\n  box-shadow: 0 1px #7b5a00;\n  transform: translateY(4px);\n}\n\n#content:has(> div.about_banner) {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.about_banner {\n  background-color: white;\n  color: #ffc31d;\n  max-width: 1200px;\n\n  border-radius: 20px;\n  margin: 50px;\n\n  display: grid;\n  grid-template-columns: minmax(300px, 400px) minmax(300px, 430px) minmax(\n      450px,\n      600px\n    );\n  grid-template-rows: 100px 1fr 1fr;\n  gap: 10px;\n\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\n.about_banner .aboutHeading {\n  grid-column: span 3;\n}\n.about_banner h3 {\n  color: #2b2b2b;\n}\n\n.about_banner p {\n  grid-area: 2/ 1 / 3 / 3;\n  align-self: center;\n  width: minmax(345px, 1fr);\n\n  font-size: 20px;\n  color: #2b2b2b;\n  text-align: left;\n}\n\n.about_banner img {\n  grid-area: 2 / 3 / 3 / 4;\n}\n\n.locationInfo,\n.contactInfo {\n  text-align: left;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_house_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/house.png */ "./assets/images/house.png");
/* harmony import */ var _assets_images_sushi_cat_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/sushi_cat.png */ "./assets/images/sushi_cat.png");



function generateAboutPage() {
  const content = document.querySelector("#content");

  const landingMessage = document.createElement("div");
  landingMessage.classList.add("message");
  landingMessage.classList.add("about_banner");

  const aboutHeading = document.createElement("div");
  aboutHeading.classList.add("aboutHeading");
  const h1message = document.createElement("h1");
  h1message.innerText = "WHO ARE WE?";
  const h3message = document.createElement("h3");
  h3message.innerHTML = "THIS IS <span>寿司屋</span>!";

  aboutHeading.appendChild(h1message);
  console.log(h1message);
  aboutHeading.appendChild(h3message);

  landingMessage.appendChild(aboutHeading);

  const aboutDescription = document.createElement("p");
  aboutDescription.innerHTML =
    "Welcome to 寿司屋, your authentic Japanese dining destination in the heart of Ottawa. <br> At 寿司屋, we are passionate about bringing the true taste of Japan to our guests. With our traditional recipes, fresh ingredients, and skilled chefs, we offer an unforgettable dining experience that celebrates the rich culinary heritage of Japan.";

  const housePicture = new Image();
  housePicture.src = _assets_images_house_png__WEBPACK_IMPORTED_MODULE_0__;
  landingMessage.appendChild(aboutDescription);
  landingMessage.appendChild(housePicture);

  const contactUs = document.createElement("div");
  contactUs.classList.add("contactus");
  const catTitle = document.createElement("h1");
  catTitle.innerText = "Get in Contact With Us!";
  contactUs.appendChild(catTitle);
  const catPicture = new Image(300);
  catPicture.src = _assets_images_sushi_cat_png__WEBPACK_IMPORTED_MODULE_1__;
  contactUs.appendChild(catPicture);
  landingMessage.appendChild(contactUs);

  const locationInfo = document.createElement("div");
  locationInfo.classList.add("locationInfo");
  const h2Visit = document.createElement("h2");
  h2Visit.innerText = "Visit Us!";
  locationInfo.appendChild(h2Visit);
  const h3address = document.createElement("h3");
  h3address.innerText = "Address: 123 Main Street, Sushi City, Sashimi, SUSHI";
  locationInfo.appendChild(h3address);
  landingMessage.appendChild(locationInfo);

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contactInfo");
  const h2Reach = document.createElement("h2");
  h2Reach.innerText = "Reach Us:";
  contactInfo.appendChild(h2Reach);
  const h3email = document.createElement("h3");
  h3email.innerText = "Email: thesushispot@sushi.ca";
  contactInfo.appendChild(h3email);
  const h3number = document.createElement("h3");
  h3number.innerHTML = "Phone Number: <br> +1(123) 456-7890";
  contactInfo.appendChild(h3number);
  landingMessage.appendChild(contactInfo);

  content.appendChild(landingMessage);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAboutPage);


/***/ }),

/***/ "./src/landingPage.js":
/*!****************************!*\
  !*** ./src/landingPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_sushi_board_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/sushi_board.png */ "./assets/images/sushi_board.png");
/* harmony import */ var _assets_images_Chef_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/Chef.png */ "./assets/images/Chef.png");



function generateLandingPage() {
  const content = document.querySelector("#content");

  const landingMessage = document.createElement("div");
  landingMessage.classList.add("message");
  const h1message = document.createElement("h1");
  h1message.innerText = "WELCOME TO 寿司屋";
  const h3message = document.createElement("h3");
  h3message.innerHTML = "YOUR GO TO <span>SUSHI SPOT</span>!";

  landingMessage.appendChild(h1message);
  landingMessage.appendChild(h3message);

  content.appendChild(landingMessage);

  const info1 = generateInfo(
    _assets_images_sushi_board_png__WEBPACK_IMPORTED_MODULE_0__,
    "SERVED WITH FRESH & HIGH-QUALITY INGREDIENTS",
    "Indulge in the exquisite flavors of our sushi selection, meticulously prepared with the freshest and highest quality ingredients harvested from all around the world. Each dish is crafted with precision and care to ensure an unparalleled dining experience that delights the senses."
  );

  const orderBtn = document.createElement("button");
  orderBtn.innerText = "ORDER NOW!";
  orderBtn.classList.add("menu", "btn");
  const info2 = generateInfo(
    _assets_images_Chef_png__WEBPACK_IMPORTED_MODULE_1__,
    "PREPARE BY HIGHLY-SKILLED SUSHI MASTERS",
    "All of our menu items are prepared and served by our team of highly-skilled sushi masters. Each master has completed various intense special training to learn the distinctive techniques specific to preparing and serving this cuisine and are equipped with years of experience in the food industry. ",
    orderBtn
  );

  content.appendChild(info1);
  content.appendChild(info2);
}

function generateInfo(image, title, description, button) {
  const info = document.createElement("div");
  info.classList.add("info");
  const sub_info = document.createElement("div");
  sub_info.classList.add("sub-info");
  const sushi_board = new Image();
  sushi_board.src = image;
  const text_info = document.createElement("div");
  text_info.classList.add("text-info");
  const h2 = document.createElement("h2");
  h2.innerText = title;
  const p = document.createElement("p");
  p.innerText = description;

  text_info.appendChild(h2);
  text_info.appendChild(p);
  if (button != null) {
    text_info.appendChild(button);
  }
  sub_info.appendChild(sushi_board);
  sub_info.appendChild(text_info);

  info.appendChild(sub_info);

  return info;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateLandingPage);


/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_Avocado_Uramaki_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/Avocado_Uramaki.png */ "./assets/images/Avocado_Uramaki.png");
/* harmony import */ var _assets_images_Salmon_Temaki_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/Salmon_Temaki.png */ "./assets/images/Salmon_Temaki.png");
/* harmony import */ var _assets_images_sashimi_slices_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/sashimi_slices.png */ "./assets/images/sashimi_slices.png");
/* harmony import */ var _assets_images_Textured_Gyoza_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/Textured_Gyoza.png */ "./assets/images/Textured_Gyoza.png");
/* harmony import */ var _assets_images_Okonomiyaki_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/Okonomiyaki.png */ "./assets/images/Okonomiyaki.png");






function generateMenuPage() {
  const content = document.querySelector("#content");

  const landingMessage = document.createElement("div");
  landingMessage.classList.add("message");
  const h1message = document.createElement("h1");
  h1message.innerText = '"メニュー"';
  const h3message = document.createElement("h3");
  h3message.innerHTML = "TODAY'S <span>SPECIALIZED</span> MENU!";

  landingMessage.appendChild(h1message);
  landingMessage.appendChild(h3message);

  content.appendChild(landingMessage);

  const item1 = generateItem(
    _assets_images_Avocado_Uramaki_png__WEBPACK_IMPORTED_MODULE_0__,
    "Avocado Uramaki Sushi Wrapped with Salmon Plate",
    "14.45",
    true
  );
  const item2 = generateItem(
    _assets_images_Salmon_Temaki_png__WEBPACK_IMPORTED_MODULE_1__,
    "Salmon Cucumber Temaki Sushi Plate",
    "12.95",
    true
  );

  const item3 = generateItem(
    _assets_images_sashimi_slices_png__WEBPACK_IMPORTED_MODULE_2__,
    "Salmon Sake & Tuna Otoro Sashimi Slice (6 pieces)",
    "8.95",
    true
  );

  const item4 = generateItem(_assets_images_Textured_Gyoza_png__WEBPACK_IMPORTED_MODULE_3__, "Textured Gyoza", "12.95", true);

  const item5 = generateItem(
    _assets_images_Okonomiyaki_png__WEBPACK_IMPORTED_MODULE_4__,
    "Tradtional Okonomiyaki",
    "16.95",
    true
  );

  content.appendChild(item1);
  content.appendChild(item2);
  content.appendChild(item3);
  content.appendChild(item4);
  content.appendChild(item5);
}

function generateItem(image, title, price, button) {
  const item = document.createElement("div");
  item.classList.add("info");
  const sub_info = document.createElement("div");
  sub_info.classList.add("sub-info");
  const picture = new Image();
  picture.src = image;
  const text_info = document.createElement("div");
  text_info.classList.add("text-info");
  const h2 = document.createElement("h2");
  h2.innerText = title;
  const li = document.createElement("li");
  li.innerText = price;

  text_info.appendChild(h2);
  text_info.appendChild(li);
  if (button) {
    const orderBtn = document.createElement("button");
    orderBtn.innerText = "Add to order!";
    orderBtn.classList.add("order", "btn");
    text_info.appendChild(orderBtn);
  }
  sub_info.appendChild(picture);
  sub_info.appendChild(text_info);

  item.appendChild(sub_info);

  return item;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenuPage);


/***/ }),

/***/ "./assets/images/Avocado_Uramaki.png":
/*!*******************************************!*\
  !*** ./assets/images/Avocado_Uramaki.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88c9cff9d2667575aef5.png";

/***/ }),

/***/ "./assets/images/Chef.png":
/*!********************************!*\
  !*** ./assets/images/Chef.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18d391c4c7e293837202.png";

/***/ }),

/***/ "./assets/images/Okonomiyaki.png":
/*!***************************************!*\
  !*** ./assets/images/Okonomiyaki.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9df8bd4141d6a7b5893b.png";

/***/ }),

/***/ "./assets/images/Salmon_Temaki.png":
/*!*****************************************!*\
  !*** ./assets/images/Salmon_Temaki.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93f897c83189f3b1938b.png";

/***/ }),

/***/ "./assets/images/Textured_Gyoza.png":
/*!******************************************!*\
  !*** ./assets/images/Textured_Gyoza.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af036cb928bad56ae69b.png";

/***/ }),

/***/ "./assets/images/house.png":
/*!*********************************!*\
  !*** ./assets/images/house.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "004b7a44cab596cbb8f9.png";

/***/ }),

/***/ "./assets/images/sashimi_slices.png":
/*!******************************************!*\
  !*** ./assets/images/sashimi_slices.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47e7f019a4de86a298c0.png";

/***/ }),

/***/ "./assets/images/sushi_board.png":
/*!***************************************!*\
  !*** ./assets/images/sushi_board.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf80dd947824ca1a5284.png";

/***/ }),

/***/ "./assets/images/sushi_cat.png":
/*!*************************************!*\
  !*** ./assets/images/sushi_cat.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29c473a97b971b8f6787.png";

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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/* harmony import */ var _landingPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landingPage.js */ "./src/landingPage.js");
/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage.js */ "./src/menuPage.js");
/* harmony import */ var _aboutPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutPage.js */ "./src/aboutPage.js");





const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

const content = document.querySelector("#content");

function clearContent() {
  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }
}
(0,_landingPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
tabListener();

function tabListener() {
  const menuPageListener = document.querySelectorAll(".menu");
  menuPageListener.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("IT WORKS");
      clearContent();
      (0,_menuPage_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
      tabListener();
    });
  });

  const homePageListener = document.querySelectorAll(".home");
  homePageListener.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("IT WORKS");
      clearContent();
      (0,_landingPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      tabListener();
    });
  });
  const aboutPageListener = document.querySelectorAll(".about");
  aboutPageListener.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("IT WORKS");
      clearContent();
      (0,_aboutPage_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
      tabListener();
    });
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM4QjtBQUNOO0FBQ0U7O0FBRS9DO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQWdCO0FBQ3RCO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkRBQW1CO0FBQ3pCO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5REFBaUI7QUFDdkI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYWJvdXRQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2xhbmRpbmdQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDQwMDswLDUwMDswLDcwMDswLDgwMDsxLDQwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcbiAgY29sb3I6ICNmZmYwYzU7XG5cbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDUwcHg7XG4gIG1pbi13aWR0aDogODAwcHg7XG4gIG1heC13aWR0aDogMTA4MHB4O1xufVxuXG5uYXYgLmJ0biB7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBmb250LXNpemU6IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgY29sb3I6IHdoaXRlO1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4ubGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjB2aDtcbiAgcGFkZGluZzogNTBweDtcblxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDEuM2NtO1xuXG4gIGZvbnQtc2l6ZTogMnJlbTtcblxuICBtaW4td2lkdGg6IDgwMHB4O1xuICBtYXgtd2lkdGg6IDEwODBweDtcbn1cbi5tZXNzYWdlIGgzIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMyBzcGFuIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ZmYzMxZDtcbn1cblxuLmluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAxMHZoO1xuXG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zdWItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogODAwcHg7XG59XG5cbi5zdWItaW5mbyBpbWcge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uc3ViLWluZm8gaDIge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5zdWItaW5mbyBwLFxuLnN1Yi1pbmZvIGxpIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXgtd2lkdGg6IDc2MHB4O1xufVxuXG4uc3ViLWluZm8gbGkge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnN1Yi1pbmZvIGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMGM1O1xuICBjb2xvcjogIzJiMmIyYjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxNXB4O1xuXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNmZmMzMWQ7XG5cbiAgYm94LXNoYWRvdzogMCAzcHggIzk5NzAwMDtcblxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubWVudV90aXRsZSB7XG4gIG1hcmdpbi10b3A6IDB2aDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzMxZDtcbn1cblxuLmJ0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMzFkO1xuICBib3gtc2hhZG93OiAwIDFweCAjN2I1YTAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cblxuI2NvbnRlbnQ6aGFzKD4gZGl2LmFib3V0X2Jhbm5lcikge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFib3V0X2Jhbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogI2ZmYzMxZDtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG5cbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luOiA1MHB4O1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDMwMHB4LCA0MDBweCkgbWlubWF4KDMwMHB4LCA0MzBweCkgbWlubWF4KFxuICAgICAgNDUwcHgsXG4gICAgICA2MDBweFxuICAgICk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDFmcjtcbiAgZ2FwOiAxMHB4O1xuXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uYWJvdXRfYmFubmVyIC5hYm91dEhlYWRpbmcge1xuICBncmlkLWNvbHVtbjogc3BhbiAzO1xufVxuLmFib3V0X2Jhbm5lciBoMyB7XG4gIGNvbG9yOiAjMmIyYjJiO1xufVxuXG4uYWJvdXRfYmFubmVyIHAge1xuICBncmlkLWFyZWE6IDIvIDEgLyAzIC8gMztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogbWlubWF4KDM0NXB4LCAxZnIpO1xuXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMyYjJiMmI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hYm91dF9iYW5uZXIgaW1nIHtcbiAgZ3JpZC1hcmVhOiAyIC8gMyAvIDMgLyA0O1xufVxuXG4ubG9jYXRpb25JbmZvLFxuLmNvbnRhY3RJbmZvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYzs7RUFFZCxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxlQUFlO0VBQ2YsbUJBQW1COztFQUVuQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTs7RUFFYixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7O0VBRWxCLGVBQWU7O0VBRWYsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCOztFQUVoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTs7RUFFYiwwQkFBMEI7RUFDMUIsOEJBQThCOztFQUU5Qix5QkFBeUI7O0VBRXpCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxpQkFBaUI7O0VBRWpCLG1CQUFtQjtFQUNuQixZQUFZOztFQUVaLGFBQWE7RUFDYjs7O0tBR0c7RUFDSCxpQ0FBaUM7RUFDakMsU0FBUzs7RUFFVCxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIseUJBQXlCOztFQUV6QixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MCw3MDA7MCw4MDA7MSw0MDA7MSw1MDA7MSw3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xcbiAgY29sb3I6ICNmZmYwYzU7XFxuXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgbWluLXdpZHRoOiA4MDBweDtcXG4gIG1heC13aWR0aDogMTA4MHB4O1xcbn1cXG5cXG5uYXYgLmJ0biB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHZoO1xcbiAgcGFkZGluZzogNTBweDtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbGluZS1oZWlnaHQ6IDEuM2NtO1xcblxcbiAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgbWluLXdpZHRoOiA4MDBweDtcXG4gIG1heC13aWR0aDogMTA4MHB4O1xcbn1cXG4ubWVzc2FnZSBoMyB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmgzIHNwYW4ge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNmZmMzMWQ7XFxufVxcblxcbi5pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMTB2aDtcXG5cXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zdWItaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLXdpZHRoOiA4MDBweDtcXG59XFxuXFxuLnN1Yi1pbmZvIGltZyB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5zdWItaW5mbyBoMiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5zdWItaW5mbyBwLFxcbi5zdWItaW5mbyBsaSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWF4LXdpZHRoOiA3NjBweDtcXG59XFxuXFxuLnN1Yi1pbmZvIGxpIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uc3ViLWluZm8gYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYwYzU7XFxuICBjb2xvcjogIzJiMmIyYjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ZmYzMxZDtcXG5cXG4gIGJveC1zaGFkb3c6IDAgM3B4ICM5OTcwMDA7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubWVudV90aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAwdmg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzMxZDtcXG59XFxuXFxuLmJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzMxZDtcXG4gIGJveC1zaGFkb3c6IDAgMXB4ICM3YjVhMDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXG59XFxuXFxuI2NvbnRlbnQ6aGFzKD4gZGl2LmFib3V0X2Jhbm5lcikge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0X2Jhbm5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiAjZmZjMzFkO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luOiA1MHB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDMwMHB4LCA0MDBweCkgbWlubWF4KDMwMHB4LCA0MzBweCkgbWlubWF4KFxcbiAgICAgIDQ1MHB4LFxcbiAgICAgIDYwMHB4XFxuICAgICk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciAxZnI7XFxuICBnYXA6IDEwcHg7XFxuXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLmFib3V0X2Jhbm5lciAuYWJvdXRIZWFkaW5nIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxufVxcbi5hYm91dF9iYW5uZXIgaDMge1xcbiAgY29sb3I6ICMyYjJiMmI7XFxufVxcblxcbi5hYm91dF9iYW5uZXIgcCB7XFxuICBncmlkLWFyZWE6IDIvIDEgLyAzIC8gMztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiBtaW5tYXgoMzQ1cHgsIDFmcik7XFxuXFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogIzJiMmIyYjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5hYm91dF9iYW5uZXIgaW1nIHtcXG4gIGdyaWQtYXJlYTogMiAvIDMgLyAzIC8gNDtcXG59XFxuXFxuLmxvY2F0aW9uSW5mbyxcXG4uY29udGFjdEluZm8ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaG91c2UgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvaG91c2UucG5nXCI7XG5pbXBvcnQgc3VzaGlfY2F0IGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL3N1c2hpX2NhdC5wbmdcIjtcblxuZnVuY3Rpb24gZ2VuZXJhdGVBYm91dFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgbGFuZGluZ01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsYW5kaW5nTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwibWVzc2FnZVwiKTtcbiAgbGFuZGluZ01lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImFib3V0X2Jhbm5lclwiKTtcblxuICBjb25zdCBhYm91dEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYm91dEhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImFib3V0SGVhZGluZ1wiKTtcbiAgY29uc3QgaDFtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoMW1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJXSE8gQVJFIFdFP1wiO1xuICBjb25zdCBoM21lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGgzbWVzc2FnZS5pbm5lckhUTUwgPSBcIlRISVMgSVMgPHNwYW4+5a+/5Y+45bGLPC9zcGFuPiFcIjtcblxuICBhYm91dEhlYWRpbmcuYXBwZW5kQ2hpbGQoaDFtZXNzYWdlKTtcbiAgY29uc29sZS5sb2coaDFtZXNzYWdlKTtcbiAgYWJvdXRIZWFkaW5nLmFwcGVuZENoaWxkKGgzbWVzc2FnZSk7XG5cbiAgbGFuZGluZ01lc3NhZ2UuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkaW5nKTtcblxuICBjb25zdCBhYm91dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFib3V0RGVzY3JpcHRpb24uaW5uZXJIVE1MID1cbiAgICBcIldlbGNvbWUgdG8g5a+/5Y+45bGLLCB5b3VyIGF1dGhlbnRpYyBKYXBhbmVzZSBkaW5pbmcgZGVzdGluYXRpb24gaW4gdGhlIGhlYXJ0IG9mIE90dGF3YS4gPGJyPiBBdCDlr7/lj7jlsYssIHdlIGFyZSBwYXNzaW9uYXRlIGFib3V0IGJyaW5naW5nIHRoZSB0cnVlIHRhc3RlIG9mIEphcGFuIHRvIG91ciBndWVzdHMuIFdpdGggb3VyIHRyYWRpdGlvbmFsIHJlY2lwZXMsIGZyZXNoIGluZ3JlZGllbnRzLCBhbmQgc2tpbGxlZCBjaGVmcywgd2Ugb2ZmZXIgYW4gdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZSB0aGF0IGNlbGVicmF0ZXMgdGhlIHJpY2ggY3VsaW5hcnkgaGVyaXRhZ2Ugb2YgSmFwYW4uXCI7XG5cbiAgY29uc3QgaG91c2VQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gIGhvdXNlUGljdHVyZS5zcmMgPSBob3VzZTtcbiAgbGFuZGluZ01lc3NhZ2UuYXBwZW5kQ2hpbGQoYWJvdXREZXNjcmlwdGlvbik7XG4gIGxhbmRpbmdNZXNzYWdlLmFwcGVuZENoaWxkKGhvdXNlUGljdHVyZSk7XG5cbiAgY29uc3QgY29udGFjdFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdFVzLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0dXNcIik7XG4gIGNvbnN0IGNhdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjYXRUaXRsZS5pbm5lclRleHQgPSBcIkdldCBpbiBDb250YWN0IFdpdGggVXMhXCI7XG4gIGNvbnRhY3RVcy5hcHBlbmRDaGlsZChjYXRUaXRsZSk7XG4gIGNvbnN0IGNhdFBpY3R1cmUgPSBuZXcgSW1hZ2UoMzAwKTtcbiAgY2F0UGljdHVyZS5zcmMgPSBzdXNoaV9jYXQ7XG4gIGNvbnRhY3RVcy5hcHBlbmRDaGlsZChjYXRQaWN0dXJlKTtcbiAgbGFuZGluZ01lc3NhZ2UuYXBwZW5kQ2hpbGQoY29udGFjdFVzKTtcblxuICBjb25zdCBsb2NhdGlvbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2NhdGlvbkluZm8uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uSW5mb1wiKTtcbiAgY29uc3QgaDJWaXNpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaDJWaXNpdC5pbm5lclRleHQgPSBcIlZpc2l0IFVzIVwiO1xuICBsb2NhdGlvbkluZm8uYXBwZW5kQ2hpbGQoaDJWaXNpdCk7XG4gIGNvbnN0IGgzYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaDNhZGRyZXNzLmlubmVyVGV4dCA9IFwiQWRkcmVzczogMTIzIE1haW4gU3RyZWV0LCBTdXNoaSBDaXR5LCBTYXNoaW1pLCBTVVNISVwiO1xuICBsb2NhdGlvbkluZm8uYXBwZW5kQ2hpbGQoaDNhZGRyZXNzKTtcbiAgbGFuZGluZ01lc3NhZ2UuYXBwZW5kQ2hpbGQobG9jYXRpb25JbmZvKTtcblxuICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0SW5mb1wiKTtcbiAgY29uc3QgaDJSZWFjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaDJSZWFjaC5pbm5lclRleHQgPSBcIlJlYWNoIFVzOlwiO1xuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChoMlJlYWNoKTtcbiAgY29uc3QgaDNlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaDNlbWFpbC5pbm5lclRleHQgPSBcIkVtYWlsOiB0aGVzdXNoaXNwb3RAc3VzaGkuY2FcIjtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoaDNlbWFpbCk7XG4gIGNvbnN0IGgzbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoM251bWJlci5pbm5lckhUTUwgPSBcIlBob25lIE51bWJlcjogPGJyPiArMSgxMjMpIDQ1Ni03ODkwXCI7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGgzbnVtYmVyKTtcbiAgbGFuZGluZ01lc3NhZ2UuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGFuZGluZ01lc3NhZ2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUFib3V0UGFnZTtcbiIsImltcG9ydCBzdXNoaV9ib2FyZF9pbWcgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvc3VzaGlfYm9hcmQucG5nXCI7XG5pbXBvcnQgY2hlZl9pbWcgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvQ2hlZi5wbmdcIjtcblxuZnVuY3Rpb24gZ2VuZXJhdGVMYW5kaW5nUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBsYW5kaW5nTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxhbmRpbmdNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlXCIpO1xuICBjb25zdCBoMW1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGgxbWVzc2FnZS5pbm5lclRleHQgPSBcIldFTENPTUUgVE8g5a+/5Y+45bGLXCI7XG4gIGNvbnN0IGgzbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaDNtZXNzYWdlLmlubmVySFRNTCA9IFwiWU9VUiBHTyBUTyA8c3Bhbj5TVVNISSBTUE9UPC9zcGFuPiFcIjtcblxuICBsYW5kaW5nTWVzc2FnZS5hcHBlbmRDaGlsZChoMW1lc3NhZ2UpO1xuICBsYW5kaW5nTWVzc2FnZS5hcHBlbmRDaGlsZChoM21lc3NhZ2UpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGFuZGluZ01lc3NhZ2UpO1xuXG4gIGNvbnN0IGluZm8xID0gZ2VuZXJhdGVJbmZvKFxuICAgIHN1c2hpX2JvYXJkX2ltZyxcbiAgICBcIlNFUlZFRCBXSVRIIEZSRVNIICYgSElHSC1RVUFMSVRZIElOR1JFRElFTlRTXCIsXG4gICAgXCJJbmR1bGdlIGluIHRoZSBleHF1aXNpdGUgZmxhdm9ycyBvZiBvdXIgc3VzaGkgc2VsZWN0aW9uLCBtZXRpY3Vsb3VzbHkgcHJlcGFyZWQgd2l0aCB0aGUgZnJlc2hlc3QgYW5kIGhpZ2hlc3QgcXVhbGl0eSBpbmdyZWRpZW50cyBoYXJ2ZXN0ZWQgZnJvbSBhbGwgYXJvdW5kIHRoZSB3b3JsZC4gRWFjaCBkaXNoIGlzIGNyYWZ0ZWQgd2l0aCBwcmVjaXNpb24gYW5kIGNhcmUgdG8gZW5zdXJlIGFuIHVucGFyYWxsZWxlZCBkaW5pbmcgZXhwZXJpZW5jZSB0aGF0IGRlbGlnaHRzIHRoZSBzZW5zZXMuXCJcbiAgKTtcblxuICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG9yZGVyQnRuLmlubmVyVGV4dCA9IFwiT1JERVIgTk9XIVwiO1xuICBvcmRlckJ0bi5jbGFzc0xpc3QuYWRkKFwibWVudVwiLCBcImJ0blwiKTtcbiAgY29uc3QgaW5mbzIgPSBnZW5lcmF0ZUluZm8oXG4gICAgY2hlZl9pbWcsXG4gICAgXCJQUkVQQVJFIEJZIEhJR0hMWS1TS0lMTEVEIFNVU0hJIE1BU1RFUlNcIixcbiAgICBcIkFsbCBvZiBvdXIgbWVudSBpdGVtcyBhcmUgcHJlcGFyZWQgYW5kIHNlcnZlZCBieSBvdXIgdGVhbSBvZiBoaWdobHktc2tpbGxlZCBzdXNoaSBtYXN0ZXJzLiBFYWNoIG1hc3RlciBoYXMgY29tcGxldGVkIHZhcmlvdXMgaW50ZW5zZSBzcGVjaWFsIHRyYWluaW5nIHRvIGxlYXJuIHRoZSBkaXN0aW5jdGl2ZSB0ZWNobmlxdWVzIHNwZWNpZmljIHRvIHByZXBhcmluZyBhbmQgc2VydmluZyB0aGlzIGN1aXNpbmUgYW5kIGFyZSBlcXVpcHBlZCB3aXRoIHllYXJzIG9mIGV4cGVyaWVuY2UgaW4gdGhlIGZvb2QgaW5kdXN0cnkuIFwiLFxuICAgIG9yZGVyQnRuXG4gICk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChpbmZvMSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5mbzIpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUluZm8oaW1hZ2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgYnV0dG9uKSB7XG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBjb25zdCBzdWJfaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1Yl9pbmZvLmNsYXNzTGlzdC5hZGQoXCJzdWItaW5mb1wiKTtcbiAgY29uc3Qgc3VzaGlfYm9hcmQgPSBuZXcgSW1hZ2UoKTtcbiAgc3VzaGlfYm9hcmQuc3JjID0gaW1hZ2U7XG4gIGNvbnN0IHRleHRfaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRleHRfaW5mby5jbGFzc0xpc3QuYWRkKFwidGV4dC1pbmZvXCIpO1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaDIuaW5uZXJUZXh0ID0gdGl0bGU7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcC5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcblxuICB0ZXh0X2luZm8uYXBwZW5kQ2hpbGQoaDIpO1xuICB0ZXh0X2luZm8uYXBwZW5kQ2hpbGQocCk7XG4gIGlmIChidXR0b24gIT0gbnVsbCkge1xuICAgIHRleHRfaW5mby5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9XG4gIHN1Yl9pbmZvLmFwcGVuZENoaWxkKHN1c2hpX2JvYXJkKTtcbiAgc3ViX2luZm8uYXBwZW5kQ2hpbGQodGV4dF9pbmZvKTtcblxuICBpbmZvLmFwcGVuZENoaWxkKHN1Yl9pbmZvKTtcblxuICByZXR1cm4gaW5mbztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVMYW5kaW5nUGFnZTtcbiIsImltcG9ydCBhdm9jYWRvX1VyYW5tYWtpIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL0F2b2NhZG9fVXJhbWFraS5wbmdcIjtcbmltcG9ydCBzYWxtb25fVGVtYWtpIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL1NhbG1vbl9UZW1ha2kucG5nXCI7XG5pbXBvcnQgc2FzaGltaV9zbGljZXMgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvc2FzaGltaV9zbGljZXMucG5nXCI7XG5pbXBvcnQgdGV4dHVyZWRfR3lvemEgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvVGV4dHVyZWRfR3lvemEucG5nXCI7XG5pbXBvcnQgb2tvbm9taXlha2kgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvT2tvbm9taXlha2kucG5nXCI7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTWVudVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgbGFuZGluZ01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsYW5kaW5nTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwibWVzc2FnZVwiKTtcbiAgY29uc3QgaDFtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoMW1lc3NhZ2UuaW5uZXJUZXh0ID0gJ1wi44Oh44OL44Ol44O8XCInO1xuICBjb25zdCBoM21lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGgzbWVzc2FnZS5pbm5lckhUTUwgPSBcIlRPREFZJ1MgPHNwYW4+U1BFQ0lBTElaRUQ8L3NwYW4+IE1FTlUhXCI7XG5cbiAgbGFuZGluZ01lc3NhZ2UuYXBwZW5kQ2hpbGQoaDFtZXNzYWdlKTtcbiAgbGFuZGluZ01lc3NhZ2UuYXBwZW5kQ2hpbGQoaDNtZXNzYWdlKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGxhbmRpbmdNZXNzYWdlKTtcblxuICBjb25zdCBpdGVtMSA9IGdlbmVyYXRlSXRlbShcbiAgICBhdm9jYWRvX1VyYW5tYWtpLFxuICAgIFwiQXZvY2FkbyBVcmFtYWtpIFN1c2hpIFdyYXBwZWQgd2l0aCBTYWxtb24gUGxhdGVcIixcbiAgICBcIjE0LjQ1XCIsXG4gICAgdHJ1ZVxuICApO1xuICBjb25zdCBpdGVtMiA9IGdlbmVyYXRlSXRlbShcbiAgICBzYWxtb25fVGVtYWtpLFxuICAgIFwiU2FsbW9uIEN1Y3VtYmVyIFRlbWFraSBTdXNoaSBQbGF0ZVwiLFxuICAgIFwiMTIuOTVcIixcbiAgICB0cnVlXG4gICk7XG5cbiAgY29uc3QgaXRlbTMgPSBnZW5lcmF0ZUl0ZW0oXG4gICAgc2FzaGltaV9zbGljZXMsXG4gICAgXCJTYWxtb24gU2FrZSAmIFR1bmEgT3Rvcm8gU2FzaGltaSBTbGljZSAoNiBwaWVjZXMpXCIsXG4gICAgXCI4Ljk1XCIsXG4gICAgdHJ1ZVxuICApO1xuXG4gIGNvbnN0IGl0ZW00ID0gZ2VuZXJhdGVJdGVtKHRleHR1cmVkX0d5b3phLCBcIlRleHR1cmVkIEd5b3phXCIsIFwiMTIuOTVcIiwgdHJ1ZSk7XG5cbiAgY29uc3QgaXRlbTUgPSBnZW5lcmF0ZUl0ZW0oXG4gICAgb2tvbm9taXlha2ksXG4gICAgXCJUcmFkdGlvbmFsIE9rb25vbWl5YWtpXCIsXG4gICAgXCIxNi45NVwiLFxuICAgIHRydWVcbiAgKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGl0ZW0xKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChpdGVtMik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbTMpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGl0ZW00KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChpdGVtNSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSXRlbShpbWFnZSwgdGl0bGUsIHByaWNlLCBidXR0b24pIHtcbiAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW0uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIGNvbnN0IHN1Yl9pbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3ViX2luZm8uY2xhc3NMaXN0LmFkZChcInN1Yi1pbmZvXCIpO1xuICBjb25zdCBwaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gIHBpY3R1cmUuc3JjID0gaW1hZ2U7XG4gIGNvbnN0IHRleHRfaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRleHRfaW5mby5jbGFzc0xpc3QuYWRkKFwidGV4dC1pbmZvXCIpO1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaDIuaW5uZXJUZXh0ID0gdGl0bGU7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaS5pbm5lclRleHQgPSBwcmljZTtcblxuICB0ZXh0X2luZm8uYXBwZW5kQ2hpbGQoaDIpO1xuICB0ZXh0X2luZm8uYXBwZW5kQ2hpbGQobGkpO1xuICBpZiAoYnV0dG9uKSB7XG4gICAgY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG9yZGVyQnRuLmlubmVyVGV4dCA9IFwiQWRkIHRvIG9yZGVyIVwiO1xuICAgIG9yZGVyQnRuLmNsYXNzTGlzdC5hZGQoXCJvcmRlclwiLCBcImJ0blwiKTtcbiAgICB0ZXh0X2luZm8uYXBwZW5kQ2hpbGQob3JkZXJCdG4pO1xuICB9XG4gIHN1Yl9pbmZvLmFwcGVuZENoaWxkKHBpY3R1cmUpO1xuICBzdWJfaW5mby5hcHBlbmRDaGlsZCh0ZXh0X2luZm8pO1xuXG4gIGl0ZW0uYXBwZW5kQ2hpbGQoc3ViX2luZm8pO1xuXG4gIHJldHVybiBpdGVtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZU1lbnVQYWdlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZ2VuZXJhdGVMYW5kaW5nUGFnZSBmcm9tIFwiLi9sYW5kaW5nUGFnZS5qc1wiO1xuaW1wb3J0IGdlbmVyYXRlTWVudVBhZ2UgZnJvbSBcIi4vbWVudVBhZ2UuanNcIjtcbmltcG9ydCBnZW5lcmF0ZUFib3V0UGFnZSBmcm9tIFwiLi9hYm91dFBhZ2UuanNcIjtcblxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG5jb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRcIik7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgd2hpbGUgKGNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gIH1cbn1cbmdlbmVyYXRlTGFuZGluZ1BhZ2UoKTtcbnRhYkxpc3RlbmVyKCk7XG5cbmZ1bmN0aW9uIHRhYkxpc3RlbmVyKCkge1xuICBjb25zdCBtZW51UGFnZUxpc3RlbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51XCIpO1xuICBtZW51UGFnZUxpc3RlbmVyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIklUIFdPUktTXCIpO1xuICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICBnZW5lcmF0ZU1lbnVQYWdlKCk7XG4gICAgICB0YWJMaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBob21lUGFnZUxpc3RlbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lXCIpO1xuICBob21lUGFnZUxpc3RlbmVyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIklUIFdPUktTXCIpO1xuICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICBnZW5lcmF0ZUxhbmRpbmdQYWdlKCk7XG4gICAgICB0YWJMaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgYWJvdXRQYWdlTGlzdGVuZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFib3V0XCIpO1xuICBhYm91dFBhZ2VMaXN0ZW5lci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJJVCBXT1JLU1wiKTtcbiAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgZ2VuZXJhdGVBYm91dFBhZ2UoKTtcbiAgICAgIHRhYkxpc3RlbmVyKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9