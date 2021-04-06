module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/FacultiesPage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/FacultiesPage.js":
/*!********************************!*\
  !*** ./pages/FacultiesPage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Components_Faculties_Faculties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Components/Faculties/Faculties */ "./src/Components/Faculties/Faculties.js");
/* harmony import */ var _src_Components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Components/Header/Header */ "./src/Components/Header/Header.js");
/* harmony import */ var _src_Components_PageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Components/PageLayout/PageLayout */ "./src/Components/PageLayout/PageLayout.js");

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\pages\\FacultiesPage.js";





function FacultiesPage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_PageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Faculties_Faculties__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (FacultiesPage);

/***/ }),

/***/ "./src/Components/Faculties/Faculties.js":
/*!***********************************************!*\
  !*** ./src/Components/Faculties/Faculties.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar/SearchBar */ "./src/Components/Faculties/SearchBar/SearchBar.js");
/* harmony import */ var _FacultyCard_FacultyCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FacultyCard/FacultyCard */ "./src/Components/Faculties/FacultyCard/FacultyCard.js");
/* harmony import */ var _FacultyHeader_FacultyHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FacultyHeader/FacultyHeader */ "./src/Components/Faculties/FacultyHeader/FacultyHeader.js");

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Faculties\\Faculties.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function Faculties() {
  const facultiesArray = [{
    "imageSrc": "images/faculties/lalluWadia.png",
    "name": "Prof. A. H. Lalluwadia",
    "qualification": "M. Tech.",
    "designation": "Associate Professor",
    "email": "ahl@eced.svnit.ac.in"
  }, {
    "imageSrc": "images/faculties/UpenaDalal.jpg",
    "name": "Dr.(Mrs) Upena D. Dalal",
    "qualification": "Ph.D",
    "designation": "Professor",
    "email": "udd@eced.svnit.ac.in"
  }, {
    "imageSrc": "images/faculties/NBKanirkar.jpg",
    "name": "Prof. Naresh B. Kanirkar",
    "qualification": "M.Tech.",
    "designation": "Associate Professor",
    "email": "nbk@eced.svnit.ac.in"
  }, {
    "imageSrc": "images/faculties/prashant.png",
    "name": "Dr. Prashant K. Shah",
    "qualification": "M.E.",
    "designation": "Associate Professor",
    "email": "pks@eced.svnit.ac.in"
  }, {
    "imageSrc": "images/faculties/Abhishek.jpg",
    "name": "Dr. Abhishek Acharya",
    "qualification": "PhD (Microelectronics & VLSI), IIT Roorkee",
    "designation": "Assistant Professor",
    "email": "abhishek@eced.svnit.ac.in"
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FacultyHeader_FacultyHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "md:grid md:grid-cols-3",
      children: facultiesArray.map(faculty => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FacultyCard_FacultyCard__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
        faculty: faculty
      }, faculty), faculty.name, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (Faculties);

/***/ }),

/***/ "./src/Components/Faculties/FacultyCard/FacultyCard.js":
/*!*************************************************************!*\
  !*** ./src/Components/Faculties/FacultyCard/FacultyCard.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Faculties\\FacultyCard\\FacultyCard.js";


function FacultyCard({
  imageSrc,
  name,
  qualification,
  designation,
  email
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "mx-3 bg-gray-200 rounded overflow-hidden shadow-lg px-5 py-4 my-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "block rounded text-gray-800 font-bold text-lg",
        children: [name, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "block text-md text-gray-600",
        children: qualification
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "block text-gray-600",
        children: designation
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-3 flex justify-center items-center px-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "",
        src: imageSrc
      }, name, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "flex text-gray-600 font-bold",
        children: ["email : ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "font-semibold",
          children: ["\xA0", email]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 68
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "block",
        children: "Know More"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (FacultyCard);

/***/ }),

/***/ "./src/Components/Faculties/FacultyHeader/FacultyHeader.js":
/*!*****************************************************************!*\
  !*** ./src/Components/Faculties/FacultyHeader/FacultyHeader.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Faculties\\FacultyHeader\\FacultyHeader.js";


function FacultyHeader() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-gray-200 p-5",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-span-1 flex justify-center mt-3 mb-0",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
          className: "uppercase text-gray-600 font-bold",
          children: "Current Head Of Department"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
          className: "uppercase text-gray-600 text-xl",
          children: "Dr. PIYUSH N. PATEL"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (FacultyHeader);

/***/ }),

/***/ "./src/Components/Faculties/SearchBar/SearchBar.js":
/*!*********************************************************!*\
  !*** ./src/Components/Faculties/SearchBar/SearchBar.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Faculties\\SearchBar\\SearchBar.js";


function SearchBar() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "rounded bg-gray-400 p-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "w-full p-2 border rounded",
      id: "facultyName",
      type: "text",
      placeholder: "Search Faculty By Name"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./src/Components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/Components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Header\\Header.js";


function Header() {
  const imageStyle = {
    width: 90,
    heigth: 90
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-gray-200 p-5",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-4 flex flex-row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-span-1 flex justify-center mt-3 md:mb-0",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
            className: "uppercase text-gray-600 font-bold text-xl",
            children: "Electronics Department"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
            className: "uppercase text-gray-600",
            children: " National institute of Technology, SURAT "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-span-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex justify-center text-center md:justify-end",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "images/NIT_Surat_Logo.svg.png",
            style: imageStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/Components/Home/Home.js":
/*!*************************************!*\
  !*** ./src/Components/Home/Home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Home\\Home.js";


function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "rounded bg-gray-400 grid grid-cols-1",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-6 m-4 bg-gray-300 rounded",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        className: "text-2xl text-gray-600 text-bold text-center",
        children: "Department Mission"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-muted text-center text-l",
        children: "The mission of the Electronics Engineering Department is to contribute to society and industry through excellence in education, research, innovations and ethics by stakeholders."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-gray-300 p-6 mx-4 mb-4 rounded",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        className: "text-2xl text-gray-600 text-bold text-center",
        children: "Department Vision"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-muted text-center text-l",
        children: "The vision of the Electronics Engineering Department is to Aim to achieve quality in education and research to create leading Electronics engineers, researchers and entrepreneurs."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/Components/PageLayout/Navbar/Navbar.js":
/*!****************************************************!*\
  !*** ./src/Components/PageLayout/Navbar/Navbar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\PageLayout\\Navbar\\Navbar.js";


function Navbar() {
  const myStyle = {
    width: 20
  };

  function navbarToggler() {
    const menuButton = document.querySelector("#menuButton");
    const menu = document.querySelector("#menu");
    menu.addEventListener('click', () => {
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
      } else {
        menu.classList.add('hidden');
      }
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    navbarToggler();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "rounded md:col-span-1 m-3 bg-gray-800",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-between border-b border-gray-100 md:flex md:justify-center items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-l font-bold  uppercase p-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "text-gray-300 cursor-pointer text-xl hover:text-gray-100",
            children: "Electronics Department"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "px-4 cursor-pointer md:hidden",
          id: "menubutton",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "text-gray-400 h-8 w-8",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              strokelinecap: "round",
              strokelinejoin: "round",
              strokeWidth: "2",
              d: "M4 6h16M4 12h16M4 18h16"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "text-left hidden md:block",
        id: "menu",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "flex flex-row text-gray-400 text-xl p-6 ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              strokelinecap: "round",
              strokelinejoin: "round",
              strokeWidth: "2",
              d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "hover:text-gray-100",
            children: "\xA0Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 32
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "flex flex-row text-gray-400 text-xl px-6 pb-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-5 w-5",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              fillRule: "evenodd",
              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
              "clip-rule": "evenodd"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "hover:text-gray-100",
            children: "\xA0About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 31
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "flex flex-row text-gray-400 text-xl px-6 pb-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "images/svgs/People.svg",
            style: myStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "hover:text-gray-100",
            children: "\xA0People"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 76
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "flex flex-row text-gray-400 text-xl px-6 pb-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "images/svgs/Research.svg",
            style: myStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "hover:text-gray-100",
            children: "\xA0Research"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 78
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "flex flex-row  text-gray-400 text-xl px-6 pb-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "hover:text-gray-100",
            children: "\xA0Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 31
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/Components/PageLayout/PageLayout.js":
/*!*************************************************!*\
  !*** ./src/Components/PageLayout/PageLayout.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar/Navbar */ "./src/Components/PageLayout/Navbar/Navbar.js");
/* harmony import */ var _Home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Home/Home */ "./src/Components/Home/Home.js");

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\PageLayout\\PageLayout.js";




function PageLayout({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "grid md:grid-cols-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "md:col-span-3 p-3",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (PageLayout);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvRmFjdWx0aWVzUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GYWN1bHRpZXMvRmFjdWx0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZhY3VsdGllcy9GYWN1bHR5Q2FyZC9GYWN1bHR5Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GYWN1bHRpZXMvRmFjdWx0eUhlYWRlci9GYWN1bHR5SGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZhY3VsdGllcy9TZWFyY2hCYXIvU2VhcmNoQmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSG9tZS9Ib21lLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BhZ2VMYXlvdXQvTmF2YmFyL05hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9QYWdlTGF5b3V0L1BhZ2VMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJGYWN1bHRpZXNQYWdlIiwiRmFjdWx0aWVzIiwiZmFjdWx0aWVzQXJyYXkiLCJtYXAiLCJmYWN1bHR5IiwibmFtZSIsIkZhY3VsdHlDYXJkIiwiaW1hZ2VTcmMiLCJxdWFsaWZpY2F0aW9uIiwiZGVzaWduYXRpb24iLCJlbWFpbCIsIkZhY3VsdHlIZWFkZXIiLCJTZWFyY2hCYXIiLCJIZWFkZXIiLCJpbWFnZVN0eWxlIiwid2lkdGgiLCJoZWlndGgiLCJIb21lIiwiTmF2YmFyIiwibXlTdHlsZSIsIm5hdmJhclRvZ2dsZXIiLCJtZW51QnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsInVzZUVmZmVjdCIsIlBhZ2VMYXlvdXQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxHQUF3QjtBQUNwQixzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUdJLHFFQUFDLDZFQUFEO0FBQUEsNkJBQ0kscUVBQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIOztB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QUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNkNIOztBQUFBO0FBRWNELHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU2EsVUFBVCxDQUFvQjtBQUFDQztBQUFELENBQXBCLEVBQStCO0FBQzNCLHNCQUNJO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUEsNEJBQ0kscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSxnQkFDS0E7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRSDs7QUFBQTtBQUVjRCx5RUFBZixFOzs7Ozs7Ozs7OztBQ2ZBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL0ZhY3VsdGllc1BhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL0ZhY3VsdGllc1BhZ2UuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGYWN1bHRpZXMgZnJvbSBcIi4uL3NyYy9Db21wb25lbnRzL0ZhY3VsdGllcy9GYWN1bHRpZXNcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vc3JjL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgUGFnZUxheW91dCBmcm9tIFwiLi4vc3JjL0NvbXBvbmVudHMvUGFnZUxheW91dC9QYWdlTGF5b3V0XCI7XHJcblxyXG5mdW5jdGlvbiBGYWN1bHRpZXNQYWdlKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcblxyXG4gICAgICAgICAgICA8UGFnZUxheW91dD5cclxuICAgICAgICAgICAgICAgIDxGYWN1bHRpZXMvPlxyXG4gICAgICAgICAgICA8L1BhZ2VMYXlvdXQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY3VsdGllc1BhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL1NlYXJjaEJhci9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IEZhY3VsdHlDYXJkIGZyb20gXCIuL0ZhY3VsdHlDYXJkL0ZhY3VsdHlDYXJkXCI7XHJcbmltcG9ydCBGYWN1bHR5SGVhZGVyIGZyb20gXCIuL0ZhY3VsdHlIZWFkZXIvRmFjdWx0eUhlYWRlclwiXHJcblxyXG5mdW5jdGlvbiBGYWN1bHRpZXMoKXtcclxuXHJcbiAgICBjb25zdCBmYWN1bHRpZXNBcnJheSA9IFtcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9mYWN1bHRpZXMvbGFsbHVXYWRpYS5wbmdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6XCJQcm9mLiBBLiBILiBMYWxsdXdhZGlhXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOlwiTS4gVGVjaC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOlwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6XCJhaGxAZWNlZC5zdm5pdC5hYy5pblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9mYWN1bHRpZXMvVXBlbmFEYWxhbC5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6XCJEci4oTXJzKSBVcGVuYSBELiBEYWxhbFwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjpcIlBoLkRcIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOlwiUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjpcInVkZEBlY2VkLnN2bml0LmFjLmluXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2ZhY3VsdGllcy9OQkthbmlya2FyLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjpcIlByb2YuIE5hcmVzaCBCLiBLYW5pcmthclwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjpcIk0uVGVjaC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOlwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6XCJuYmtAZWNlZC5zdm5pdC5hYy5pblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9mYWN1bHRpZXMvcHJhc2hhbnQucG5nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOlwiRHIuIFByYXNoYW50IEsuIFNoYWhcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6XCJNLkUuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjpcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOlwicGtzQGVjZWQuc3ZuaXQuYWMuaW5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZmFjdWx0aWVzL0FiaGlzaGVrLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjpcIkRyLiBBYmhpc2hlayBBY2hhcnlhXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOlwiUGhEIChNaWNyb2VsZWN0cm9uaWNzICYgVkxTSSksIElJVCBSb29ya2VlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjpcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOlwiYWJoaXNoZWtAZWNlZC5zdm5pdC5hYy5pblwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIF1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZhY3VsdHlIZWFkZXIvPlxyXG4gICAgICAgICAgICA8U2VhcmNoQmFyLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Z3JpZCBtZDpncmlkLWNvbHMtM1wiPlxyXG4gICAgICAgICAgICAgICAge2ZhY3VsdGllc0FycmF5Lm1hcCgoZmFjdWx0eSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWN1bHR5Q2FyZCBcclxuICAgICAgICAgICAgICAgICAgICBmYWN1bHR5PXtmYWN1bHR5fSBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2ZhY3VsdHkubmFtZX17Li4uZmFjdWx0eX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY3VsdGllcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRmFjdWx0eUNhcmQoe2ltYWdlU3JjLCBuYW1lLCBxdWFsaWZpY2F0aW9uLCBkZXNpZ25hdGlvbiwgZW1haWx9KXtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMyBiZy1ncmF5LTIwMCByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGcgcHgtNSBweS00IG15LTRcIj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJibG9jayByb3VuZGVkIHRleHQtZ3JheS04MDAgZm9udC1ib2xkIHRleHQtbGdcIj57bmFtZX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1tZCB0ZXh0LWdyYXktNjAwXCI+e3F1YWxpZmljYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTYwMFwiPntkZXNpZ25hdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB4LTNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiXCIgIHNyYz17aW1hZ2VTcmN9IGtleT17bmFtZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggdGV4dC1ncmF5LTYwMCBmb250LWJvbGRcIj5lbWFpbCA6IDxoMSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+Jm5ic3A7e2VtYWlsfTwvaDE+PC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJsb2NrXCI+S25vdyBNb3JlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjdWx0eUNhcmQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRmFjdWx0eUhlYWRlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC01XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogSGVhZGluZyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGp1c3RpZnktY2VudGVyIG10LTMgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1ncmF5LTYwMCBmb250LWJvbGRcIj5DdXJyZW50IEhlYWQgT2YgRGVwYXJ0bWVudDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1ncmF5LTYwMCB0ZXh0LXhsXCI+RHIuIFBJWVVTSCBOLiBQQVRFTDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY3VsdHlIZWFkZXI7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hCYXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQgYmctZ3JheS00MDAgcC0zXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkXCJcclxuICAgICAgICAgICAgaWQ9XCJmYWN1bHR5TmFtZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggRmFjdWx0eSBCeSBOYW1lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCl7XHJcbiAgICBjb25zdCBpbWFnZVN0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoOjkwLFxyXG4gICAgICAgIGhlaWd0aDo5MFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHAtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTQgZmxleCBmbGV4LXJvd1wiID5cclxuICAgICAgICAgICAgICAgIHsvKiBIZWFkaW5nICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1jZW50ZXIgbXQtMyBtZDptYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhsXCI+RWxlY3Ryb25pY3MgRGVwYXJ0bWVudDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWdyYXktNjAwXCI+IE5hdGlvbmFsIGluc3RpdHV0ZSBvZiBUZWNobm9sb2d5LCBTVVJBVCA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBMT0dPICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIG1kOmp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL05JVF9TdXJhdF9Mb2dvLnN2Zy5wbmdcIiBzdHlsZT17aW1hZ2VTdHlsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQgYmctZ3JheS00MDAgZ3JpZCBncmlkLWNvbHMtMVwiPlxyXG4gICAgICAgICAgICB7LyogRGVwYXJ0bWVudCBNaXNzaW9uICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBtLTQgYmctZ3JheS0zMDAgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS02MDAgdGV4dC1ib2xkIHRleHQtY2VudGVyXCI+RGVwYXJ0bWVudCBNaXNzaW9uPC9oNj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgdGV4dC1jZW50ZXIgdGV4dC1sXCI+VGhlIG1pc3Npb24gb2YgdGhlIEVsZWN0cm9uaWNzIEVuZ2luZWVyaW5nIERlcGFydG1lbnQgaXMgdG8gY29udHJpYnV0ZSB0byBzb2NpZXR5IGFuZCBpbmR1c3RyeSB0aHJvdWdoIGV4Y2VsbGVuY2UgaW4gZWR1Y2F0aW9uLCByZXNlYXJjaCwgaW5ub3ZhdGlvbnMgYW5kIGV0aGljcyBieSBzdGFrZWhvbGRlcnMuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBEZXBhcnRtZW50IE1pc3Npb24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgcC02IG14LTQgbWItNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTYwMCB0ZXh0LWJvbGQgdGV4dC1jZW50ZXJcIj5EZXBhcnRtZW50IFZpc2lvbjwvaDY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQtY2VudGVyIHRleHQtbFwiPlRoZSB2aXNpb24gb2YgdGhlIEVsZWN0cm9uaWNzIEVuZ2luZWVyaW5nIERlcGFydG1lbnQgaXMgdG8gQWltIHRvIGFjaGlldmUgcXVhbGl0eSBpbiBlZHVjYXRpb24gYW5kIHJlc2VhcmNoIHRvIGNyZWF0ZSBsZWFkaW5nIEVsZWN0cm9uaWNzIGVuZ2luZWVycywgcmVzZWFyY2hlcnMgYW5kIGVudHJlcHJlbmV1cnMuPC9wPiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKXtcclxuICAgIGNvbnN0IG15U3R5bGUgPSB7XHJcbiAgICAgICAgd2lkdGg6MjBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBuYXZiYXJUb2dnbGVyKCl7XHJcbiAgICAgICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudUJ1dHRvblwiKTtcclxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xyXG5cclxuICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihtZW51LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpe1xyXG4gICAgICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBuYXZiYXJUb2dnbGVyKCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIG1kOmNvbC1zcGFuLTEgbS0zIGJnLWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgIDxuYXYgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItZ3JheS0xMDAgbWQ6ZmxleCBtZDpqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sIGZvbnQtYm9sZCAgdXBwZXJjYXNlIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGN1cnNvci1wb2ludGVyIHRleHQteGwgaG92ZXI6dGV4dC1ncmF5LTEwMFwiPkVsZWN0cm9uaWNzIERlcGFydG1lbnQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IGN1cnNvci1wb2ludGVyIG1kOmhpZGRlblwiIGlkPVwibWVudWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cInRleHQtZ3JheS00MDAgaC04IHctOFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRleHQtbGVmdCBoaWRkZW4gbWQ6YmxvY2tcIiBpZD1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcC02IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImgtNiB3LTZcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMyAxMmwyLTJtMCAwbDctNyA3IDdNNSAxMHYxMGExIDEgMCAwMDEgMWgzbTEwLTExbDIgMm0tMi0ydjEwYTEgMSAwIDAxLTEgMWgtM20tNiAwYTEgMSAwIDAwMS0xdi00YTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2NGExIDEgMCAwMDEgMW0tNiAwaDZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4gPGEgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTEwMFwiPiZuYnNwO0hvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdGV4dC1ncmF5LTQwMCB0ZXh0LXhsIHB4LTYgcGItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImgtNSB3LTVcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE4IDEwYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tNyA0YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptLTEtOWExIDEgMCAwMC0xIDF2NGExIDEgMCAxMDIgMFY2YTEgMSAwIDAwLTEtMXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+PGEgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTEwMFwiPiZuYnNwO0Fib3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtZ3JheS00MDAgdGV4dC14bCBweC02IHBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvc3Zncy9QZW9wbGUuc3ZnXCIgc3R5bGU9e215U3R5bGV9Lz48YSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMTAwXCI+Jm5ic3A7UGVvcGxlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtZ3JheS00MDAgdGV4dC14bCBweC02IHBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvc3Zncy9SZXNlYXJjaC5zdmdcIiBzdHlsZT17bXlTdHlsZX0vPjxhIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS0xMDBcIj4mbmJzcDtSZXNlYXJjaDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyAgdGV4dC1ncmF5LTQwMCB0ZXh0LXhsIHB4LTYgcGItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImgtNiB3LTZcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMyA1YTIgMiAwIDAxMi0yaDMuMjhhMSAxIDAgMDEuOTQ4LjY4NGwxLjQ5OCA0LjQ5M2ExIDEgMCAwMS0uNTAyIDEuMjFsLTIuMjU3IDEuMTNhMTEuMDQyIDExLjA0MiAwIDAwNS41MTYgNS41MTZsMS4xMy0yLjI1N2ExIDEgMCAwMTEuMjEtLjUwMmw0LjQ5MyAxLjQ5OGExIDEgMCAwMS42ODQuOTQ5VjE5YTIgMiAwIDAxLTIgMmgtMUM5LjcxNiAyMSAzIDE0LjI4NCAzIDZWNXpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz48YSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMTAwXCI+Jm5ic3A7Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXIvTmF2YmFyXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi9Ib21lL0hvbWVcIjtcclxuXHJcbmZ1bmN0aW9uIFBhZ2VMYXlvdXQoe2NoaWxkcmVufSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy00XCI+XHJcbiAgICAgICAgICAgIDxOYXZiYXIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTMgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VMYXlvdXQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=