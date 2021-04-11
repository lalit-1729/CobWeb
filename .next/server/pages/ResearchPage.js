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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/ResearchPage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/ResearchPage.js":
/*!*******************************!*\
  !*** ./pages/ResearchPage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Components/Footer/Footer */ "./src/Components/Footer/Footer.js");
/* harmony import */ var _src_Components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Components/Header/Header */ "./src/Components/Header/Header.js");
/* harmony import */ var _src_Components_Researches_Researches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Components/Researches/Researches */ "./src/Components/Researches/Researches.js");
/* harmony import */ var _src_Components_PageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Components/PageLayout/PageLayout */ "./src/Components/PageLayout/PageLayout.js");
/* harmony import */ var _src_Components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Components/Loader/Loader */ "./src/Components/Loader/Loader.js");

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\pages\\ResearchPage.js";







function ResearchFacilities() {
  const REQUEST_STATUS = {
    LOADLING: "Loading",
    SUCCESS: "SUCCESS",
    ERROR: "Error"
  };
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(REQUEST_STATUS.LOADLING);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setTimeout(() => setStatus(REQUEST_STATUS.SUCCESS), 2000);
  }, []);
  const success = status === REQUEST_STATUS.SUCCESS;
  const isLoading = status === REQUEST_STATUS.LOADLING;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 27
    }, this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_PageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Researches_Researches__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (ResearchFacilities);

/***/ }),

/***/ "./src/Components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/Components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Footer\\Footer.js";


function Footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-gray-200  mt-1",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "px-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-4 flex flex-row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "md:col-span-1 flex justify-between mt-3 md:mb-0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "uppercase text-gray-600 font-bold text-md",
              children: "Electronics Department"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "uppercase text-gray-600 text-xs",
              children: " National institute of Technology, SURAT "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mr-32 flex h-12 w-12 text-center md:justify-end md:mr-32",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "",
              src: "images/NIT_Surat_Logo.svg.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "px-5 pt-1 pb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "flex justify-center text-xl text-gray-600 font-semibold",
        children: "Follow us on: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-center px-2 pb-2 pt-1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://m.facebook.com/Electronics-Communication-Engineering-Department-SVNIT-Surat-1704224663140554/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "cursor-pointer flex items-center text-gray-600 font-semibold p-1 md:p-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "w-10",
              src: "images/Footer-icons/Facebook-icon.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 227
            }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "hidden md:block",
              children: "Facebook"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 300
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 137
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://instagram.com/svnit.official?igshid=rwlvhryzfii2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "cursor-pointer flex items-center text-gray-600 font-semibold p-1 md:p-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "w-10",
              src: "images/Footer-icons/Instagram-icon.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 182
            }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "hidden md:block",
              children: "Instagram"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 256
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 92
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.linkedin.com/company/s-v-national-institute-of-technology-svnit-surat-nit-surat-",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "cursor-pointer flex items-center text-gray-600 font-semibold p-1 md:p-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "w-10",
              src: "images/Footer-icons/LinkedIn-icon.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 218
            }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "hidden md:block",
              children: "LinkedIn"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 291
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 128
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://twitter.com/NIT_Surat?s=20",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "cursor-pointer flex items-center text-gray-600 font-semibold p-1 md:p-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "w-10",
              src: "images/Footer-icons/Twitter-icon.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 160
            }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "hidden md:block",
              children: "Twitter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 232
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 70
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-gray-800",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "py-3 px-5 text-xs md:text-l text-gray-200 flex justify-center",
        children: "\xA9 2021 Electronics Department , all rights reserved @ National institute of Technology, SURAT "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

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
/* harmony import */ var _ImageCarousel_ImageCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageCarousel/ImageCarousel */ "./src/Components/Home/ImageCarousel/ImageCarousel.js");
/* harmony import */ var _HomeHeader_HomeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomeHeader/HomeHeader */ "./src/Components/Home/HomeHeader/HomeHeader.js");

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Home\\Home.js";




function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "rounded bg-gray-200 grid grid-cols-1",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HomeHeader_HomeHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ImageCarousel_ImageCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-6 m-4 bg-gray-300 rounded",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        className: "text-2xl text-gray-600 text-bold text-center",
        children: "Department Mission"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-muted text-center text-l",
        children: "The mission of the Electronics Engineering Department is to contribute to society and industry through excellence in education, research, innovations and ethics by stakeholders."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-gray-300 p-6 mx-4 mb-4 rounded",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        className: "text-2xl text-gray-600 text-bold text-center",
        children: "Department Vision"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-muted text-center text-l",
        children: "The vision of the Electronics Engineering Department is to Aim to achieve quality in education and research to create leading Electronics engineers, researchers and entrepreneurs."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/Components/Home/HomeHeader/HomeHeader.js":
/*!******************************************************!*\
  !*** ./src/Components/Home/HomeHeader/HomeHeader.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Home\\HomeHeader\\HomeHeader.js";


function HomeHeader() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-gray-300 p-8 mx-4 mt-4 rounded",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-span-1 flex justify-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
          className: "uppercase text-gray-600 text-2xl font-bold",
          children: "Department Virtual Tour"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 25
        }, this)
      }, void 0, false, {
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

;
/* harmony default export */ __webpack_exports__["default"] = (HomeHeader);

/***/ }),

/***/ "./src/Components/Home/ImageCarousel/ImageCarousel.js":
/*!************************************************************!*\
  !*** ./src/Components/Home/ImageCarousel/ImageCarousel.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageSlide_ImageSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageSlide/ImageSlide */ "./src/Components/Home/ImageCarousel/ImageSlide/ImageSlide.js");

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Home\\ImageCarousel\\ImageCarousel.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function ImageCarousel() {
  const imagesArray = [{
    "imageSrc": "images/ecedImages/eced-1.jpg",
    "key": "1"
  }, {
    "imageSrc": "images/ecedImages/eced-2.jpg",
    "key": "2"
  }, {
    "imageSrc": "images/ecedImages/eced-3.jpg",
    "key": "3"
  }, {
    "imageSrc": "images/ecedImages/eced-4.jpg",
    "key": "4"
  }, {
    "imageSrc": "images/ecedImages/eced-5.jpg",
    "key": "5"
  }, {
    "imageSrc": "images/ecedImages/eced-6.jpg",
    "key": "6"
  }, {
    "imageSrc": "images/ecedImages/eced-7.jpg",
    "key": "7"
  }];
  var slideIndex = 0;

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    showSlides();
  }, [slideIndex]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "mt-4 mx-4 rounded overflow-hidden md:mx-0",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "slideshow-container md:h-96",
      children: imagesArray.map(image => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ImageSlide_ImageSlide__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, image), image.id, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex justify-center",
      style: {
        textAlignment: "center"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "dot"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "dot"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "dot"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "dot"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "dot"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "dot"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "dot"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ImageCarousel);

/*#__PURE__*/
Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "mt-4 mx-4 rounded overflow-hidden md:mx-0",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "slideshow-container h-96 ",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "slide-container mySlides fade",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: " numbertext",
        children: "1 / 3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "slide-image",
        src: "images/ecedImages/3.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 25
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text",
        children: "Caption Text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "slide-container mySlides fade",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: " numbertext",
        children: "2 / 3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "slide-image",
        src: "images/ecedImages/4.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text",
        children: "Caption Two"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "slide-container mySlides fade",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: " numbertext",
        children: "3 / 3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "slide-image",
        src: "images/ecedImages/5.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text",
        children: "Caption Three"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 13
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 21
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex justify-center",
    style: {
      textAlignment: "center"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "dot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "dot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "dot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 13
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 92,
  columnNumber: 1
}, undefined);

/***/ }),

/***/ "./src/Components/Home/ImageCarousel/ImageSlide/ImageSlide.js":
/*!********************************************************************!*\
  !*** ./src/Components/Home/ImageCarousel/ImageSlide/ImageSlide.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Home\\ImageCarousel\\ImageSlide\\ImageSlide.js";


function ImageSlide({
  imageSrc
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "slide-container mySlides fade",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: "slide-image",
      src: imageSrc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (ImageSlide);

/***/ }),

/***/ "./src/Components/Loader/Loader.js":
/*!*****************************************!*\
  !*** ./src/Components/Loader/Loader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Loader\\Loader.js";
 // import "../../../style/loader.css";

function Loader() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700  flex flex-col items-center justify-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "text-center text-white text-xl font-semibold",
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "w-1/3 text-center text-white",
        children: "This may take a few seconds, please don't close this page."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (Loader);

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
/* harmony import */ var _toggler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggler */ "./src/Components/PageLayout/Navbar/toggler.js");

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\PageLayout\\Navbar\\Navbar.js";



function Navbar() {
  const myStyle = {
    width: 20
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_toggler__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "rounded md:col-span-1 m-3 bg-gray-800",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-4 border-b border-gray-100 flex justify-between  md:flex md:justify-center items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-l font-bold  uppercase p-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "text-gray-300 cursor-pointer text-xl hover:text-gray-100",
              children: "Electronics Department"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "px-4 cursor-pointer md:hidden",
            id: "menuButton",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "text-gray-400 h-8 w-8",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M4 6h16M4 12h16M4 18h16"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
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
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "./",
            className: "hover:text-gray-100",
            children: "\xA0Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 32
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
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
              clipRule: "evenodd"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "hover:text-gray-100",
            children: "\xA0About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 31
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "flex flex-row text-gray-400 text-xl px-6 pb-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "images/svgs/People.svg",
            style: myStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "FacultiesPage",
            className: "hover:text-gray-100",
            children: "\xA0Faculties"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 76
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "flex flex-row text-gray-400 text-xl px-6 pb-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "images/svgs/Research.svg",
            style: myStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "hover:text-gray-100",
            href: "ResearchPage",
            children: "\xA0Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 78
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "flex flex-row text-gray-400 text-xl px-6 pb-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "w-6",
            src: "images/svgs/Facilities.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "ResearchFacilities",
            className: "hover:text-gray-100",
            children: "\xA0Facilities"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 80
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/Components/PageLayout/Navbar/toggler.js":
/*!*****************************************************!*\
  !*** ./src/Components/PageLayout/Navbar/toggler.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function toggler() {
  const menuButton = document.querySelector("#menuButton");
  const menu = document.querySelector("#menu");
  menuButton.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (toggler);

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

/***/ "./src/Components/Researches/Data/Data2017_18.js":
/*!*******************************************************!*\
  !*** ./src/Components/Researches/Data/Data2017_18.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Data2017_18 = [{
  "SrNo": "G 1",
  "ProjectTitle": "CHILD SAFETY WEARABLE DEVICE",
  "RollNo": "U14EC029",
  "StudentName": "BOMMATHULA MADHU SINDURA",
  "ProjectGuide": "Prof. P. K. Shah",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC113",
  "StudentName": "SHAIK KHALIDA PARVEEN",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC099",
  "StudentName": "BOMMINENI YAMINI SARASWATHI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC100",
  "StudentName": "VENIGALLA VINUTHNA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 2",
  "ProjectTitle": "TONGUE CONTROLLED WHEELCHAIR",
  "RollNo": "U14EC001",
  "StudentName": "AVINASH NAYAK",
  "ProjectGuide": "Prof. P. K. Shah",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC012",
  "StudentName": "PRASHANTH YACHURI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC030",
  "StudentName": "SAYAN SAHA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC033",
  "StudentName": "ABHIRUP PANJA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 3",
  "ProjectTitle": "TO ANALYSE REALISTIC G CHANNEL MODELS AND NETWORK",
  "RollNo": "U14EC003",
  "StudentName": "VYAS JATAN NILAY",
  "ProjectGuide": "Prof.(Dr.) U. D. Dalal",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC028",
  "StudentName": "SUTAR SARFARAZ SIRAJBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC106",
  "StudentName": "AITA SINDHU SREE",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC110",
  "StudentName": "GOPI DOSHI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 4",
  "ProjectTitle": "SECURE AND EFFICIENT HANDOVER AUTHENTICATION B",
  "RollNo": "U14EC005",
  "StudentName": "SHAILAJA YELESWARAPU",
  "ProjectGuide": "Prof.(Dr.) U. D. Dalal",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC019",
  "StudentName": "EASHWER SUBRAMANIAM",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC074",
  "StudentName": "DEVARAKONDA SNEHA PRAPURNA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC093",
  "StudentName": "AADITYA KAUL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 5",
  "ProjectTitle": "INDOOR LOCALIZATION USING MACHINE LEARNING AND",
  "RollNo": "U14EC002",
  "StudentName": "PATIL MEDHA MAHESH",
  "ProjectGuide": "Prof.(Dr.) U. D. Dalal",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC046",
  "StudentName": "AASHISH KUMAR MISRAA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC079",
  "StudentName": "PATIL MUGDHA SANJAY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC161",
  "StudentName": "SOURABH DAS",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 6",
  "ProjectTitle": "IRRIGATION SYSTEM USING ZIGBEE",
  "RollNo": "U14EC014",
  "StudentName": "JESEEKA DEVENDRA SHAH",
  "ProjectGuide": "Prof. N. B. Kanirkar",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC016",
  "StudentName": "YESHA HARISH GONDALIA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC135",
  "StudentName": "AMEY MISHRA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC138",
  "StudentName": "VIKRANT SINGH SHOERAN",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 7",
  "ProjectTitle": "RFID BASED ATTENDANCE SYSTEM WITH SMS NOTIFICATI",
  "RollNo": "U14EC013",
  "StudentName": "TANVI P KURLEKAR",
  "ProjectGuide": "Prof. N. B. Kanirkar",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC017",
  "StudentName": "ARUSA RAYEES AHMED KHALFAY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC069",
  "StudentName": "MATHUR RAHUL KAILASHBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC073",
  "StudentName": "JAGARAPU ROHITH KUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 8",
  "ProjectTitle": "RESTAURANTS AUTOMATION USING ZIGBEE",
  "RollNo": "U14EC006",
  "StudentName": "FAZAL FIROZSHAH DIWAN",
  "ProjectGuide": "Prof. N. B. Kanirkar",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC091",
  "StudentName": "AMIJEET KUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC095",
  "StudentName": "MISTRY JIMIT VIPUL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC096",
  "StudentName": "ANUGRAH NIMAVAT",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 9",
  "ProjectTitle": "HOME AUTOMATION SYSTEM USING WIFI MODULE",
  "RollNo": "U14EC021",
  "StudentName": "PAGA RANI",
  "ProjectGuide": "Prof. N. B. Kanirkar",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC035",
  "StudentName": "MEENA NITAKUMARI GHANSHYAM",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC042",
  "StudentName": "SAROJ MAMTA KUBERRAM",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC047",
  "StudentName": "CHAUHAN MEGHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 10",
  "ProjectTitle": "VEHICLE ACCIDENT G DETECTION, REPORTING AND NAVIG",
  "RollNo": "U14EC070",
  "StudentName": "PERUMALLA KOTESWARA RAO",
  "ProjectGuide": "Dr. J. N. Sarvaiya",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC071",
  "StudentName": "TANGIRALA AKHIL REDDY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC098",
  "StudentName": "CHALLAPALLI PRAMOD",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC149",
  "StudentName": "NITESH PRABHAKARAN NAIR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 11",
  "ProjectTitle": "FEATURE EXTRACTION FOR IMAGE REGISTRATION",
  "RollNo": "U14EC023",
  "StudentName": "GUTTA RAMYA",
  "ProjectGuide": "Dr. J. N. Sarvaiya",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC053",
  "StudentName": "CHOPPARAPU SAI AKHIL",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC064",
  "StudentName": "BODDAPATI SRAVANI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC150",
  "StudentName": "BILKISH ARA NAIKODI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 12",
  "ProjectTitle": "G ROS BASED ROBOTIES SYSTEM",
  "RollNo": "U14EC112",
  "StudentName": "NAIVEDH JAIN",
  "ProjectGuide": "Prof. (Dr.) A. D. Darji",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC117",
  "StudentName": "RAHUL GUNKAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC119",
  "StudentName": "KARTIK",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC134",
  "StudentName": "T SANDEEP",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 13",
  "ProjectTitle": "PHYSIOLOGICAL SIGNAL MONITORING SYSTEM",
  "RollNo": "U14EC104",
  "StudentName": "MEHTA AMI CHETANKUMAR",
  "ProjectGuide": "Prof. (Dr.) A. D. Darji",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC115",
  "StudentName": "SHAH AMOLI RAJESHBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC118",
  "StudentName": "GOPI KAMLESH PATEL",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC132",
  "StudentName": "BHATT SEJAL HEMANT",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 14",
  "ProjectTitle": "L AND S BAND MICROWAVE G MONOLITHIC INTEGRATED CI",
  "RollNo": "U14EC043",
  "StudentName": "MARABATHULA VENKAT NIKHIL",
  "ProjectGuide": "Dr. P. N. Patel",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC051",
  "StudentName": "KATTA SIVARAM",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC083",
  "StudentName": "ADEPU VINEETH KUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC085",
  "StudentName": "PALEPU PUNEETH HOTHRA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 15",
  "ProjectTitle": "VOICE G CONTROLLED HOME APPLICATION",
  "RollNo": "U14EC008",
  "StudentName": "KOR PARAS MERAMBHAI",
  "ProjectGuide": "Prof. Z. M. Patel",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC010",
  "StudentName": "BHUVA BRIJESHKUMAR RAMANIKBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC020",
  "StudentName": "SADHU MAYANK DIPAKBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC022",
  "StudentName": "GOHIL KARANKUMAR HASMUKHBHAIs",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 16",
  "ProjectTitle": "ARM PROCESSOR BASED REAL TIME CAR THEFT DECLINE",
  "RollNo": "U14EC025",
  "StudentName": "VEERAPUREDDY SAI PUNEETH REDDY",
  "ProjectGuide": "Prof. Z. M. Patel",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC038",
  "StudentName": "SIDDULA JAIDEEP",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC066",
  "StudentName": "DIVI YASWANTH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC163",
  "StudentName": "BUSIREDDY SHANTAN KUMAR REDDY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 17",
  "ProjectTitle": "ENVIRONMENT MONITORING ANT ALERT BY INTELLIGEN",
  "RollNo": "U14EC114",
  "StudentName": "PARMAR DHAWALKUMAR PARESHKUMAR",
  "ProjectGuide": "Dr. Z. M. Patel",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC143",
  "StudentName": "RAKHOLIYA SHRADDHABEN DILIPBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC145",
  "StudentName": "MADHURIMA DAS",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC147",
  "StudentName": "JUWAN HETTIARACHCHIGE RANDIKA LAKSHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 18",
  "ProjectTitle": "FACE RECOGNITION USING FPGA",
  "RollNo": "U14EC063",
  "StudentName": "BOPPA NAGA SUJITH",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC072",
  "StudentName": "INTHA AKHIL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC081",
  "StudentName": "KELLA CHAITANYA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC084",
  "StudentName": "MANISH MEENA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 19",
  "ProjectTitle": "IMAGE PROCESSING USING EMBEDDED SYSTEMS",
  "RollNo": "U14EC090",
  "StudentName": "KORIVI THIMMAGURUDU",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC105",
  "StudentName": "KUNCHALA JAYA NAGA SAI BHARGAV",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC107",
  "StudentName": "SAKE JAYASAIKRISHNA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC108",
  "StudentName": "PALLERLA RAMAKANTH REDDY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 20",
  "ProjectTitle": "IOT BASED HOME AUTOMATION SYSTEM",
  "RollNo": "U14EC103",
  "StudentName": "NEHA VERMA",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC124",
  "StudentName": "AYUSH LABH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC126",
  "StudentName": "LALIT RANKAWAT",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC129",
  "StudentName": "PATEL FORUMBEN SUMANBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 21",
  "ProjectTitle": "FPGA BASED REAL TIME SYSTEM",
  "RollNo": "U14EC121",
  "StudentName": "NGARG ADITI RATANLAL",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC136",
  "StudentName": "VAIJANAPURKAR SHAMBHAVI SANJIV",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC141",
  "StudentName": "AMOLPRATAP RAJESH SINGH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC152",
  "StudentName": "BHANU ANNAPOORNA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 22",
  "ProjectTitle": "IMPLEMENTATION OF G SINEWAVE GENERATOR FOR BIOIM",
  "RollNo": "U14EC045",
  "StudentName": "AKKELA SAIKRISHNA",
  "ProjectGuide": "Dr.(Mrs.) R. N. Dhavse",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC058",
  "StudentName": "REDDY KANCHANA GANGA BHAVANI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC059",
  "StudentName": "PENUMARTHI AISHWARYA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC067",
  "StudentName": "BHAI HARISH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 23",
  "ProjectTitle": "SMART BAND",
  "RollNo": "U14EC155",
  "StudentName": "TEJASWINI SANDAPOLLA",
  "ProjectGuide": "Dr. A. S. Mandloi",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC157",
  "StudentName": "AERRA RAMYA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC159",
  "StudentName": "MYNENI CHARISHMA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC164",
  "StudentName": "SAMINENI POOJA PRAVALLIKA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 24",
  "ProjectTitle": "LINEAR G DETECTION TECHNIQUES FOR MIMO SYSTEMS",
  "RollNo": "U14EC077",
  "StudentName": "NAKIRAKOMMULA MANISH",
  "ProjectGuide": "Dr.(Mrs.) S. Gupta",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC088",
  "StudentName": "KARRI ESWAR NAGA AYYAPPA REDDY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC154",
  "StudentName": "DRONA KUMAR DEKONDA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC156",
  "StudentName": "KAVERI DINESH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 25",
  "ProjectTitle": "FPGA IMPLEMENTATION OF RS CODE",
  "RollNo": "U14EC040",
  "StudentName": "AINAMPUDI SUSMITHA",
  "ProjectGuide": "Dr.(Mrs.) S. Gupta",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC075",
  "StudentName": "RAMIREDDY AMRUTHA VARSHINI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC078",
  "StudentName": "NIKHITA MADHUSUDAN BHOOPATI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC080",
  "StudentName": "KANTAMNENI GEETHIKA VARSHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 26",
  "ProjectTitle": "PATCH ANTENNA",
  "RollNo": "U14EC011",
  "StudentName": "BHINGARDE SAHIL RAJESH",
  "ProjectGuide": "Prof. G. Santra",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC061",
  "StudentName": "DHUPAM NAVEEN",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC087",
  "StudentName": "THOTAPALLI NAVEEN",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC153",
  "StudentName": "NAIR KARTHIK MURALI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 27",
  "ProjectTitle": "VEHICLE TRACKING USING GPS-GSM",
  "RollNo": "U13EC102",
  "StudentName": "CHITRODA SANJAYKUMAR KANTIBHAI",
  "ProjectGuide": "Prof. G. Santra",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U13EC147",
  "StudentName": "MUZAMEL",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC101",
  "StudentName": "AASHLESH PATEL",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC116",
  "StudentName": "RANA VIRAJ DHARMENDRA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 28",
  "ProjectTitle": "WIRELESS ELECTRICITY G CONSUMPTION METER USING GS",
  "RollNo": "U14EC039",
  "StudentName": "DIVYAM FATEHPURIA",
  "ProjectGuide": "Dr.(Mrs.) J. N. Patel",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC062",
  "StudentName": "UJJWAL KUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC102",
  "StudentName": "PRAJAPATI MAHIPAL ISHVARBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC148",
  "StudentName": "SHIVAM TANDON",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 29",
  "ProjectTitle": "IMAGE CONTROLLED ROBOT LOCALIZATION AND NAVIGA",
  "RollNo": "U14EC031",
  "StudentName": "COMANDUR RAJASEKHAR KARTHIK",
  "ProjectGuide": "Dr.(Mrs.) J. N. Patel",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC036",
  "StudentName": "POTTIGARI SACHIN MOHAN",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC076",
  "StudentName": "GUNDABOINA RANJITH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC160",
  "StudentName": "RAM RADESH DAVULURI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 30",
  "ProjectTitle": "SIMULATION BASED G STUDY OF VARIOUS SENSORS REQUI",
  "RollNo": "U14EC050",
  "StudentName": "GARAPATI SAI TEJA",
  "ProjectGuide": "Dr. K. P. Upla",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC082",
  "StudentName": "BALIVADA S S NAGAVALLI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC092",
  "StudentName": "GOPISETTI KAVITHA BABY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC097",
  "StudentName": "SIDDAPURAM NIHARIKA",
  "ProjectGuide": "",
  "color": "1"
}];
/* harmony default export */ __webpack_exports__["default"] = (Data2017_18);

/***/ }),

/***/ "./src/Components/Researches/Data/Data2018_19.js":
/*!*******************************************************!*\
  !*** ./src/Components/Researches/Data/Data2018_19.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Data2019_20 = [{
  "SrNo": "G 1",
  "ProjectTitle": "SPEECH RECOGNITION USING DEEP LEARNING",
  "RollNo": "U16EC091",
  "StudentName": "MANNAM VIJAY",
  "ProjectGuide": "Prof. P. K. Shah",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC096",
  "StudentName": "THAMMINENI YASWANTH KUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC103",
  "StudentName": "M S SYAM SUNDAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC129",
  "StudentName": "KHAZI MAHAMMAD SAZID",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 2",
  "ProjectTitle": "outage analysis & optimal power allocation for downlink non-orthogonal multiple access (noma)",
  "RollNo": "U16EC024",
  "StudentName": "SHAH RAJ DHAVALBHAI",
  "ProjectGuide": "Prof. A. H. Lalluwadia",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC037",
  "StudentName": "SATISH SHINGRAKHIYA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC043",
  "StudentName": "PRANJAL AGRAWAL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC045",
  "StudentName": "SHIVANSH AGARWAL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 3",
  "ProjectTitle": "COAL MINERS' SAFETY MONITORING SYSTEM",
  "RollNo": "U16EC007",
  "StudentName": "SHREAYA A",
  "ProjectGuide": "Prof. A. H. Lalluwadia",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC008",
  "StudentName": "MANASA KOTHA",
  "ProjectGuide": "Co-Guide : Prof. P. K. Shah",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC010",
  "StudentName": "MOXA ALPESH PATEL",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC035",
  "StudentName": "ANKITA BAKSHI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 4",
  "ProjectTitle": "IoT BASED VOICE CONTROL OF HOME APPLIANCES)",
  "RollNo": "U16EC083",
  "StudentName": "PATEL ANKURKUMAR NARESHBHAI",
  "ProjectGuide": "Prof. A. H. Lalluwadia",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC085",
  "StudentName": "BOGHARA JENILKUMAR DINESHBHAI",
  "ProjectGuide": "Co-Guide : Prof. P. K. Shah",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC100",
  "StudentName": "PARMAR MALAY KALPESH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC118",
  "StudentName": "MEHTA KUSHAL JYOTINBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 5",
  "ProjectTitle": "FLASH SLOOD INTIMATION OVER GSM NETWORK",
  "RollNo": "U14EC007",
  "StudentName": "SHUBHANKAR TOMAR",
  "ProjectGuide": "Prof. A. H. Lalluwadia",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U13EC031",
  "StudentName": "PATEL APEKSHABEN ANILBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U13EC037",
  "StudentName": "KU RAJNI MEENA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U135EC122",
  "StudentName": "SUDHA CHAUDHARY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 6",
  "ProjectTitle": "Design and development of sensor node for food supply chain management",
  "RollNo": "U16EC084",
  "StudentName": "SARIKHADA MANSI RAMJI",
  "ProjectGuide": "Dr. (Mrs.) U. D. Dalal",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC090",
  "StudentName": "SIRIPROLU SAI PRANAV",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC114",
  "StudentName": "SURELIYA BANSIBEN DINESHBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 7",
  "ProjectTitle": "Simulation and analysis of wearble antenna for different fabric materials",
  "RollNo": "U16EC101",
  "StudentName": "VAMANA RAVINDRA",
  "ProjectGuide": "Dr. (Mrs.) U. D. Dalal",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC107",
  "StudentName": "VEMULAPALLI PAVAN SAI GANESH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC108",
  "StudentName": "T SRINIVASA VARA CHAKRAVARTHY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "",
  "StudentName": "UGIRI SAI SAGAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 8",
  "ProjectTitle": "Evaluate dielectric constant of different fabrics using solid dieletric cell",
  "RollNo": "U16EC104",
  "StudentName": "CHEVULAMADDI NAVEEN",
  "ProjectGuide": "Dr. (Mrs.) U. D. Dalal",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC106",
  "StudentName": "NAMALIDEVI BHARATH RAJ",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC127",
  "StudentName": "R GANESH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC135",
  "StudentName": "KATHAD DHAVAL CHHAGANBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 9",
  "ProjectTitle": "IoT based plant & soil monitoring system",
  "RollNo": "U16EC027",
  "StudentName": "JARIWALA DEEP ASHISH",
  "ProjectGuide": "Prof. N. B. Kanirkar",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC057",
  "StudentName": "RAJAT KUMAR PANIGRAHI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC061",
  "StudentName": "CHOUHAN MONU HORILAL",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC140",
  "StudentName": "SHAH KAUSTUBH MANISH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 10",
  "ProjectTitle": "IoT based patient monitoring system",
  "RollNo": "U16EC122",
  "StudentName": "ABHISHEK RAJAN",
  "ProjectGuide": "Prof. N. B. Kanirkar",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC131",
  "StudentName": "ARYAN SINGH AHLAWAT",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC143",
  "StudentName": "NITISH RANA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 11",
  "ProjectTitle": "Hand written character recognition using machine learning",
  "RollNo": "U16EC040",
  "StudentName": "MARTY VENKATA HANUMATH SAI HARSHIT",
  "ProjectGuide": "Dr. J. N. Sarvaiya",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC041",
  "StudentName": "KATTAMURI SAI MANI SWETHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC047",
  "StudentName": "KODURI APARNA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC048",
  "StudentName": "MAKINEDI VASAVI DEVI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 12",
  "ProjectTitle": "IoT BASED SMART HOME",
  "RollNo": "U16EC086",
  "StudentName": "KOYA SRINATH",
  "ProjectGuide": "Dr. J. N. Sarvaiya",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC089",
  "StudentName": "TANNIRU VINOD KUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC141",
  "StudentName": "ATCHI SREEHARSHA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "",
  "StudentName": "NANDIPATI VENKATA SAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 13",
  "ProjectTitle": "AUTONOMOUS AGRICULTURAL ROBOT",
  "RollNo": "U16EC053",
  "StudentName": "PATEL DHRUV RAJENDRAKUMAR",
  "ProjectGuide": "Dr. A. D. Darji",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC056",
  "StudentName": "GANDHI MEET JAYENDRAKUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC074",
  "StudentName": "SHANKARANARAYANAN H",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 14",
  "ProjectTitle": "SMART ATTENDANCE SYSTEM",
  "RollNo": "U16EC002",
  "StudentName": "RAVEENA MORESHWAR VINCHURKAR",
  "ProjectGuide": "Dr. A. D. Darji",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC038",
  "StudentName": "SHASHWATI ASTHANA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC109",
  "StudentName": "BHANANI MILIE PIYUSH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC113",
  "StudentName": "NANDINI UPADHYAYA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 15",
  "ProjectTitle": "E-WRITING USING ARM MICROCONTROLLER",
  "RollNo": "U16EC076",
  "StudentName": "DEPANI BHUMIL RAJNIKANTBHAI",
  "ProjectGuide": "Dr. A. D. Darji",
  "color": "0"
}, {
  "SrNo": "G 16",
  "ProjectTitle": "Design and performance analysis of e-textile antenna",
  "RollNo": "U16EC003",
  "StudentName": "NIKITA NILESH MISTRY",
  "ProjectGuide": "Dr. P. N. Patel",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC004",
  "StudentName": "NIKHITA PRAVIN MORE",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC069",
  "StudentName": "KASHMIRA PRADIP GHOM",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 17",
  "ProjectTitle": "Performance analysis of kretschmann configuration based single-layered spr system",
  "RollNo": "U16EC030",
  "StudentName": "CHERUKURI PRASANTH",
  "ProjectGuide": "Dr. P. N. Patel",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC063",
  "StudentName": "PAKALAPATI RAVI KUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC065",
  "StudentName": "ANAPARTHI MANI DEEPAK KUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "",
  "StudentName": "B VISHNUDATH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 18",
  "ProjectTitle": "Health monitoring system",
  "RollNo": "U16EC088",
  "StudentName": "BEZAWADA POOJITHA",
  "ProjectGuide": "Dr. Z. M. Patel",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC092",
  "StudentName": "S HARI CHANDANA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC095",
  "StudentName": "KONARI JOSHNA REDDY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC098",
  "StudentName": "MADEM GURU LAKSHMI DEVI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 19",
  "ProjectTitle": "Intelligent accident detection and alerting system",
  "RollNo": "U16EC110",
  "StudentName": "VANGALA ANOOSHA",
  "ProjectGuide": "Dr. Z. M. Patel",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC116",
  "StudentName": "VELLORE TINA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC117",
  "StudentName": "KOPPALLI NAGA SRAVYA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC121",
  "StudentName": "IJJADA NIKITHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 20",
  "ProjectTitle": "Autonomous robot for industrial application",
  "RollNo": "U16EC009",
  "StudentName": "MAUSAM JIGNESHKUMAR PATEL",
  "ProjectGuide": "Dr. Z. M. Patel",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC013",
  "StudentName": "ASMITA JOHRI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC014",
  "StudentName": "SHREYA ASHOK AGARWAL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC018",
  "StudentName": "PANKTI RAJESH SHAH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 21",
  "ProjectTitle": "NLP CHATBOT",
  "RollNo": "U16EC058",
  "StudentName": "CHINTAPALLI DHARMENDRA",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC068",
  "StudentName": "DHULIPALA SRIMANIKANTA PARTHUSIVAIN",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC073",
  "StudentName": "MACHERLA KIRAN KUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC075",
  "StudentName": "TALLURI NAGASAI VENKATA SUDHEER",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 22",
  "ProjectTitle": "IoT BASED PARKING SLOT MANAGEMENT",
  "RollNo": "U16EC071",
  "StudentName": "CHINNAM SRI HARINI",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC077",
  "StudentName": "KONDA KEERTHI REDDY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC079",
  "StudentName": "MALIGIREDDY AMULYA REDDY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC082",
  "StudentName": "LEKKALA LEELA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 23",
  "ProjectTitle": "IoT BASED SMART AGRICULTURE",
  "RollNo": "U16EC028",
  "StudentName": "BOYA SRI RASHMITHA",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC054",
  "StudentName": "PULAKAM MALATHI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC055",
  "StudentName": "ANUPAMA RUDRA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC066",
  "StudentName": "DUVVA NIHARIKA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 24",
  "ProjectTitle": "Hand written digit recognition system using fpga",
  "RollNo": "U16EC011",
  "StudentName": "SAHAY RAJ TIRKEY",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC022",
  "StudentName": "YADAV SUDHANSHUSINH RAMRAJSINH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC032",
  "StudentName": "KURAPATI PRADEEP MANIKANTA SAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 25",
  "ProjectTitle": "DETERMINISTIC SYSTEM FOR SMART AGRICULTURE USING IoT",
  "RollNo": "U16EC025",
  "StudentName": "SALONI NAYAN JAIN",
  "ProjectGuide": "Dr. A. S. Mandloi",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC059",
  "StudentName": "RIDDHI MORE",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC060",
  "StudentName": "BHAGAVATH RACHANA RAMAKANTH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC072",
  "StudentName": "ANURADHA G",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 26",
  "ProjectTitle": "Distance measurement for blind people",
  "RollNo": "U16EC102",
  "StudentName": "GOURAV DAS",
  "ProjectGuide": "Dr. A. S. Mandloi",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC112",
  "StudentName": "RAVI MENARIA",
  "ProjectGuide": "Co-Guide : Prof. P. K. Shah",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC119",
  "StudentName": "KARAN LOONKER",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC120",
  "StudentName": "SIDDHARTH KHETAN",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 27",
  "ProjectTitle": "Smart garbage monitoring & system",
  "RollNo": "U16EC049",
  "StudentName": "PATEL KRUTI VIPUL",
  "ProjectGuide": "Dr.(Mrs.) S. Gupta",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC052",
  "StudentName": "CONTRACTOR JANKI KISHOR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC099",
  "StudentName": "MUSKAN CHOTRANI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC138",
  "StudentName": "KEYA PARIDA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 28",
  "ProjectTitle": "Detection of hazardous gases using iot",
  "RollNo": "U15EC016",
  "StudentName": "CHARPOT KRUNAL FULJIBHAI",
  "ProjectGuide": "Dr.(Mrs.) S. Gupta",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC128",
  "StudentName": "PARTH KALANI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC136",
  "StudentName": "PRIYANKKUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC139",
  "StudentName": "MERCHANT RUKSHIT MANISHKUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 29",
  "ProjectTitle": "Dual band circularly polarized annular ring slot antenna",
  "RollNo": "U16EC001",
  "StudentName": "NIHAR MANOJ PANVALKAR",
  "ProjectGuide": "Dr.(Mrs.) S. Gupta",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC005",
  "StudentName": "MRINAL LAKHERA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC020",
  "StudentName": "SARONIA VISHAL JAYESH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC023",
  "StudentName": "JOSHI DARSHIT KETANBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 31",
  "ProjectTitle": "Mobile app controlled metal detecctor",
  "RollNo": "U16EC039",
  "StudentName": "BONGU VENKATESH",
  "ProjectGuide": "Prof.(Mrs.) S. N. Shah",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC046",
  "StudentName": "AITTLA SAINATH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC050",
  "StudentName": "MUDDAGONI KALYAN GOUD",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC124",
  "StudentName": "GUDELLI BHASKAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 32",
  "ProjectTitle": "Text to image synthesis using gans",
  "RollNo": "U16EC015",
  "StudentName": "SAMPAT MANSI ANIL",
  "ProjectGuide": "Dr. K. P. Upla",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC016",
  "StudentName": "PATEL PARTHAV SUMANTRAI",
  "ProjectGuide": "Co-Guide : Dr. Kirti Inamdar",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC029",
  "StudentName": "DHARAIYA KRUTI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC067",
  "StudentName": "ABHINAV JAIN",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 33",
  "ProjectTitle": "Control of quadcopter using hand gestures",
  "RollNo": "U16EC097",
  "StudentName": "PRAJVAL K N",
  "ProjectGuide": "Dr. K. P. Upla",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC123",
  "StudentName": "SAI KAUSHIK KANDUKURI",
  "ProjectGuide": "Co- Guide : Dr. Kamal Captain",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC137",
  "StudentName": "PRATHAKOTA SAM NITHIN CHOCKCEE",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC142",
  "StudentName": "BITLA BHANU TEJA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 34",
  "ProjectTitle": "Video deblurring using deeplearning",
  "RollNo": "U16EC080",
  "StudentName": "PULIPATI SHARATHKUMAR",
  "ProjectGuide": "Prof. K. P. Upla",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC081",
  "StudentName": "TIPIREDDY THARUN REDDY",
  "ProjectGuide": "Co-Guide : Dr. J. N. Sarvaiya",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC087",
  "StudentName": "YAMANI BHARATHKUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC093",
  "StudentName": "RACHURI AJAY KUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "",
  "StudentName": "",
  "ProjectGuide": "",
  "color": ""
}, {
  "SrNo": ""
}];
/* harmony default export */ __webpack_exports__["default"] = (Data2019_20);

/***/ }),

/***/ "./src/Components/Researches/Data/Data2019_20.js":
/*!*******************************************************!*\
  !*** ./src/Components/Researches/Data/Data2019_20.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Data2018_19 = [{
  "SrNo": "G 1",
  "ProjectTitle": "PERSONAL ASSISTANT ROBOT",
  "RollNo": "U15EC025",
  "StudentName": "BHANDARI MAYANK BHUPALSINGH",
  "ProjectGuide": "Prof. P. K. Shah",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC061",
  "StudentName": "JALASUTRAM GIRISH KALYAN",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC069",
  "StudentName": "CHITTIMALLA SANTHOSH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC094",
  "StudentName": "KARNATI NAGA KIRAN REDDY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 2",
  "ProjectTitle": "CAR PARKING CONTROLLER",
  "RollNo": "U15EC026",
  "StudentName": "MANDALAYWALA UMANG SUNILKUMAR",
  "ProjectGuide": "Prof. P. K. Shah",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC027",
  "StudentName": "GANDHI JAY NIRAVBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC028",
  "StudentName": "RAHUL GUPTA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC040",
  "StudentName": "YADAV OMPRAKASH NANDLAL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 3",
  "ProjectTitle": "REAL TIME AUTOMATION IN AGRICULTURE",
  "RollNo": "U15EC082",
  "StudentName": "GOPISETTY SAI KIRAN",
  "ProjectGuide": "Prof. P. K. Shah",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC089",
  "StudentName": "SARASWATHULA VENKATA SAI SRI HARSHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC095",
  "StudentName": "ARIKATLA VISHNU VARDHAN REDDY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC146",
  "StudentName": "KAMBALA MAHESH RAJA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 4",
  "ProjectTitle": "SMART ENVIRONMENT CONTROL IN GREEN HOUSE",
  "RollNo": "U15EC101",
  "StudentName": "ARADHYA BHATIA",
  "ProjectGuide": "Prof. A. H. Lalluwadia",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC115",
  "StudentName": "VAGH DHAVALKUMAR RAHULBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC116",
  "StudentName": "AMAN BHARTI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC143",
  "StudentName": "AGARWAL PRAERIT PIYUSH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 5",
  "ProjectTitle": "FLASH SLOOD INTIMATION OVER GSM NETWORK",
  "RollNo": "U14EC007",
  "StudentName": "SHUBHANKAR TOMAR",
  "ProjectGuide": "Prof. A. H. Lalluwadia",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U13EC031",
  "StudentName": "PATEL APEKSHABEN ANILBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U13EC037",
  "StudentName": "KU RAJNI MEENA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U135EC122",
  "StudentName": "SUDHA CHAUDHARY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 6",
  "ProjectTitle": "AUTOMATIC WAITER IN RESTAURANTS",
  "RollNo": "U15EC038",
  "StudentName": "AJMEERA ASHOK",
  "ProjectGuide": "Prof. A. H. Lalluwadia",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC147",
  "StudentName": "GAZULA SRINIVAS BAPAIAH NAIDU",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC148",
  "StudentName": "BANDARU SURESH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC151",
  "StudentName": "GUDAPATI NAGA MANIKANTA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 7",
  "ProjectTitle": "TRAFFIC DENSITY BASED SYSTEM",
  "RollNo": "U15EC076",
  "StudentName": "PETLU RAJ KUMAR",
  "ProjectGuide": "Prof. A. H. Lalluwadia",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC123",
  "StudentName": "MALI HARISH KUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC125",
  "StudentName": "MADHA MANIDEEP",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC149",
  "StudentName": "KONAKALLA DURGA PRASAD",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 8",
  "ProjectTitle": "PHYSICAL LAYER FOR VANET",
  "RollNo": "U15EC005",
  "StudentName": "PRAYAS PATNAIK",
  "ProjectGuide": "Dr. (Mrs.) U. D. Dalal",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC045",
  "StudentName": "POTHUR BHAVANA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC079",
  "StudentName": "KASAM NIKHITHA REDDY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC080",
  "StudentName": "JAY PATEL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 9",
  "ProjectTitle": "PHYSICAL LAYER IMPLEMENTATION OF IEEE 802.11ah",
  "RollNo": "U15EC064",
  "StudentName": "RACHAMALLU THANMAI",
  "ProjectGuide": "Dr. (Mrs.) U. D. Dalal",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC065",
  "StudentName": "MARKAPURAM KAVITHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC138",
  "StudentName": "DUBASI YASHWANTH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC145",
  "StudentName": "EDULAPALLI KEERTHI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 10",
  "ProjectTitle": "NETWORK SELECTION AND CHANNEL ALLOCATION FOR S",
  "RollNo": "U15EC054",
  "StudentName": "YERRAGUDI HAVEELAH",
  "ProjectGuide": "Dr. (Mrs.) U. D. Dalal",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC067",
  "StudentName": "PALLERLA KEERTHANA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC085",
  "StudentName": "PALLERLA SAI TEJA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC088",
  "StudentName": "KRISTAM RAJITHA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 11",
  "ProjectTitle": "VIRTUAL IMPLEMENTATION OF NON-ORTHOGONAL MULT",
  "RollNo": "U15EC010",
  "StudentName": "BIDURU YUKTI SRIKANTH",
  "ProjectGuide": "Dr. (Mrs.) U. D. Dalal",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC013",
  "StudentName": "SAUMYA SHRIVASTAVA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC019",
  "StudentName": "ABHILASHA PODDAR AKSHAY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC108",
  "StudentName": "SHIKHA CHAUDHARY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 12",
  "ProjectTitle": "METAL DETECTION ROBOTIC VEHICLE USING ARDUINO",
  "RollNo": "U15EC022",
  "StudentName": "HARSHIKA SUBASHI MAHENDIRAN",
  "ProjectGuide": "Prof. N. B. Kanirkar",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC058",
  "StudentName": "MANVAR PRASHANT SATISHBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC066",
  "StudentName": "PATEL MINNAT PRAVINBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC131",
  "StudentName": "RACHAMALLA NITIN",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 13",
  "ProjectTitle": "IOT BASED HOME AUTOMATION",
  "RollNo": "U15EC077",
  "StudentName": "MEESALA RATAN BABU",
  "ProjectGuide": "Dr. J. N. Sarvaiya",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC090",
  "StudentName": "ALUGANTI VINAY T HEJA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC098",
  "StudentName": "BODEM MANIKANTAL",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC100",
  "StudentName": "DOMMARAJU MAHESH VARMA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 14",
  "ProjectTitle": "NEURAL NETWORK G ON FPGA FOR BIOMEDICAL APPLICATI",
  "RollNo": "U15EC003",
  "StudentName": "TALATI ARTH ASHISH",
  "ProjectGuide": "Dr. A. D. Darji",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC004",
  "StudentName": "KASUNDRA HASTI JITENDRA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC012",
  "StudentName": "MODI SAHIL KAUSHIKKUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC071",
  "StudentName": "MODI ANAND RAJESH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 15",
  "ProjectTitle": "BRAIN COMPUTER INTERFACING",
  "RollNo": "U15EC075",
  "StudentName": "PRIYANSHI GUPTA",
  "ProjectGuide": "Dr. A. D. Darji",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC117",
  "StudentName": "SANJANA DHIRAN",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC120",
  "StudentName": "NAGMA PATEL",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC142",
  "StudentName": "PRIYANSHU DALAL",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 16",
  "ProjectTitle": "DESIGN AND IMPLEMENTATION OF OPTICAL COMMUNICA",
  "RollNo": "U15EC107",
  "StudentName": "JAIN PRIYA SANDEEP",
  "ProjectGuide": "Dr. P. N. Patel",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC111",
  "StudentName": "PALSETKAR KEWALKUMAR BHUPENDRA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC112",
  "StudentName": "MITHANI ADIL IQBAL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC113",
  "StudentName": "BAMANIA HELI AMRUTLAL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 17",
  "ProjectTitle": "PERFORMANCE ANALYSIS OF OPTICAL SYSTEM USING OP",
  "RollNo": "U15EC118",
  "StudentName": "YADAV AMITKUMAR RAMESHCHANDRA",
  "ProjectGuide": "Dr. P. N. Patel",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC119",
  "StudentName": "SANJEEV KUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC127",
  "StudentName": "RAHUL KANAUJIYA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC128",
  "StudentName": "SHRIMALI RAHUL GOVINDBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 18",
  "ProjectTitle": "INTELLIGENT SYSTEM FOR VEHICALAR ACCIDENT DETEC",
  "RollNo": "U15EC042",
  "StudentName": "PULLOORI HARINIKA",
  "ProjectGuide": "Dr. Z. M. Patel",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC043",
  "StudentName": "PATHAKOTA JAYAPAVANI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC048",
  "StudentName": "KATA TARUN SREE",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC052",
  "StudentName": "ANKAM MADHUSREE",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 19",
  "ProjectTitle": "IOT BASED INTELLIGENT PARKING SYSTEM",
  "RollNo": "U15EC086",
  "StudentName": "RISHITHA NAGAREDDY",
  "ProjectGuide": "Dr. Z. M. Patel",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC092",
  "StudentName": "RAVILLA SRI ASHA LATHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC096",
  "StudentName": "GAJARLA RASHMITHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC099",
  "StudentName": "PANGULURI LAKSHMI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 20",
  "ProjectTitle": "STEREO USING ALGORITHM ON FPGA",
  "RollNo": "U15EC007",
  "StudentName": "DESAI KRUPA AMBRISHBHAI",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC014",
  "StudentName": "PURVIK KALARIYA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC036",
  "StudentName": "UMRETHWALA KAISHAVI HIRENKUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC039",
  "StudentName": "RATHOD ABHISHEK RAMESHBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 21",
  "ProjectTitle": "",
  "RollNo": "U15EC044",
  "StudentName": "CHERUKURI SRI HARIKA",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC049",
  "StudentName": "C AKHIL CHOWDARY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC070",
  "StudentName": "KOTIPALLI SAI SARAN KRISHNA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC074",
  "StudentName": "RAVATHU AMOOLYA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 22",
  "ProjectTitle": "HARDWARE AND SOFTWARE CO-DESIGN OF FACE RECOG",
  "RollNo": "U15EC055",
  "StudentName": "VAKATI AKHILESH",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC059",
  "StudentName": "KURAPATI BHANURAJA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC072",
  "StudentName": "SEELAM PRIYADHARSHAN REDDY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC073",
  "StudentName": "LAKKISETTY PRUDHVI RAJ",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 23",
  "ProjectTitle": "IOT BASED SMART VEHICLE",
  "RollNo": " CONTROL MUTUALLY ENHA",
  "StudentName": "U15EC050",
  "ProjectGuide": "HARSHVARDHAN S DHAKER",
  "color": "Dr. A. S. Mandloi"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC057",
  "StudentName": "NABANITA DEWAN",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC060",
  "StudentName": "VADUKUL RISHI MANSUKHBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC063",
  "StudentName": "THOBHANI AMIT DILIPKUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 24",
  "ProjectTitle": "PEMPARATURE AND HUMIDITY MONITORING FOR UNDER",
  "RollNo": "U15EC021",
  "StudentName": "SAMIR POUDEL",
  "ProjectGuide": "Dr. A. S. Mandloi",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC046",
  "StudentName": "ASHUTOSH SINGH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC081",
  "StudentName": "SACHIN",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC087",
  "StudentName": "SAVE PRAVEEN",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 25",
  "ProjectTitle": "AIR QUALITY REPORTING SYSTEM",
  "RollNo": "U15EC008",
  "StudentName": "ENGINEER KRISHA SARJU",
  "ProjectGuide": "Dr. A. S. Mandloi",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC103",
  "StudentName": "ROHAN KUMAR JHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC129",
  "StudentName": "ABHISHEK SINGH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC130",
  "StudentName": "PANDIRI YASHASVINI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 26",
  "ProjectTitle": "HARDWARE G IMPLEMENTATION OF SIGN LANGUAGE TRAN",
  "RollNo": "U15EC041",
  "StudentName": "SHREYASH SUDAMA KEJRIWAL",
  "ProjectGuide": "Dr.(Mrs.) S. Gupta",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC047",
  "StudentName": "ANMOL SINGHAL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC051",
  "StudentName": "MUSUKU VINAY KUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC053",
  "StudentName": "VIPUL CHAUDHARY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 27",
  "ProjectTitle": "LASER DRIVER FOR OPTICAL COMMUNICATION WITH TEM",
  "RollNo": "U15EC029",
  "StudentName": "CHATTA RAHUL",
  "ProjectGuide": "Dr.(Mrs.) S. Gupta",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC062",
  "StudentName": "PATNALA KRISHNA TEJA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC068",
  "StudentName": "VAMSEE KRISHNA TATIKONDA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC078",
  "StudentName": "BOLLAMPALLY VIVEK",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 28",
  "ProjectTitle": "AIR TRAFFIC CONTROL FOR DRONES",
  "RollNo": "U15EC083",
  "StudentName": "PRAFULL SHARMA",
  "ProjectGuide": "Dr.(Mrs.) S. Gupta",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC105",
  "StudentName": "PENTELA NAGAPRASANTH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC150",
  "StudentName": "GADI NAGA SAI MANIKANTA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC152",
  "StudentName": "GUDIMETTA SUHRUTH KUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 29",
  "ProjectTitle": "UNDER WATER PIPELINE G LEAKAGE DETECTION AND LOC",
  "RollNo": "U15EC134",
  "StudentName": "KOTHA VENKATA ANIL KUMAR",
  "ProjectGuide": "Dr.(Mrs.) S. N. Shah",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC136",
  "StudentName": "MUVVA SAITEJA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC139",
  "StudentName": "SAPPA NARENDRA KUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC140",
  "StudentName": "VINJAM BHARATH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 30",
  "ProjectTitle": "",
  "RollNo": "U15EC126",
  "StudentName": "PININTI SAI PRAVALIK REDDY",
  "ProjectGuide": "Dr.(Mrs.) S. N. Shah",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC137",
  "StudentName": "K BHARAT KUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC141",
  "StudentName": "M ROMANTH CHOWAN",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC144",
  "StudentName": "DEVANSHI HINDKA",
  "ProjectGuide": "",
  "color": "1"
}];
/* harmony default export */ __webpack_exports__["default"] = (Data2018_19);

/***/ }),

/***/ "./src/Components/Researches/Research/Research.js":
/*!********************************************************!*\
  !*** ./src/Components/Researches/Research/Research.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Researches\\Research\\Research.js";


function Research({
  SrNo,
  ProjectTitle,
  RollNo,
  StudentName,
  ProjectGuide,
  color
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
    className: color === "1" ? `bg-gray-200` : `bg-gray-50`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: color === "1" ? `border-r border-gray-50` : `border-r border-gray-200`,
      s: true,
      children: SrNo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: color === "1" ? `border-r border-gray-50` : `border-r border-gray-200`,
      children: ProjectTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: color === "1" ? `border-r border-gray-50` : `border-r border-gray-200`,
      children: RollNo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: color === "1" ? `border-r border-gray-50` : `border-r border-gray-200`,
      children: StudentName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: color === "1" ? `border-r border-gray-50` : `border-r border-gray-200`,
      children: ProjectGuide
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (Research);

/***/ }),

/***/ "./src/Components/Researches/ResearchHeader/ResearchHeader.js":
/*!********************************************************************!*\
  !*** ./src/Components/Researches/ResearchHeader/ResearchHeader.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Researches\\ResearchHeader\\ResearchHeader.js";


function FacilitiesHeader({
  title
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-gray-300 p-10 rounded",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-span-1 flex justify-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
          className: "uppercase text-gray-600 text-3xl font-bold",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (FacilitiesHeader);

/***/ }),

/***/ "./src/Components/Researches/Researches.js":
/*!*************************************************!*\
  !*** ./src/Components/Researches/Researches.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Research_Research__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Research/Research */ "./src/Components/Researches/Research/Research.js");
/* harmony import */ var _Data_Data2017_18__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Data/Data2017_18 */ "./src/Components/Researches/Data/Data2017_18.js");
/* harmony import */ var _Data_Data2019_20__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Data/Data2019_20 */ "./src/Components/Researches/Data/Data2019_20.js");
/* harmony import */ var _Data_Data2018_19__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Data/Data2018_19 */ "./src/Components/Researches/Data/Data2018_19.js");
/* harmony import */ var _ResearchHeader_ResearchHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ResearchHeader/ResearchHeader */ "./src/Components/Researches/ResearchHeader/ResearchHeader.js");

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Researches\\Researches.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Researches() {
  const divStyler = {
    height: 600
  };
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_Data_Data2017_18__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("Projects 2017-18");

  const changesHandler = event => {
    if (event.target.value === "1") {
      setData(_Data_Data2017_18__WEBPACK_IMPORTED_MODULE_3__["default"]);
      setTitle("Projects 2017-18");
    } else if (event.target.value === "2") {
      setData(_Data_Data2019_20__WEBPACK_IMPORTED_MODULE_4__["default"]);
      setTitle("Projects 2018-19");
    } else {
      setData(_Data_Data2018_19__WEBPACK_IMPORTED_MODULE_5__["default"]);
      setTitle("Projects 2019-20");
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ResearchHeader_ResearchHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "md:grid md:grid-cols-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "md:grid-col-1 inline-flex items-center p-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "radio",
          name: "radio1",
          className: "form-radio h-4 w-4",
          value: "1",
          onChange: e => changesHandler(e)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "",
          children: "\xA0Projects from 2017-18"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "md:grid-col-1 inline-flex items-center p-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "radio",
          name: "radio1",
          className: "form-radio h-4 w-4",
          value: "2",
          onChange: e => changesHandler(e)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "",
          children: "\xA0Projects from 2018-19"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "md:grid-col-1 inline-flex items-center p-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "radio",
          name: "radio1",
          className: "form-radio h-4 w-4",
          value: "3",
          onChange: e => changesHandler(e)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "",
          children: "\xA0Projects from 2019-20"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "scroll-hide w-full overflow-auto p-2",
      style: divStyler,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          className: "bg-gray-400 p-3 rounded ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "p-1 w-8",
            children: "SrNo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "p-1",
            children: "ProjectTitle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "p-1",
            children: "RollNo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "p-1",
            children: "StudentName"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            className: "p-1",
            children: "ProjectGuide"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this), data.map(research => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Research_Research__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({
          research: research
        }, research), research.StudentName, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 25
        }, this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (Researches);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUmVzZWFyY2hQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ib21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSG9tZS9Ib21lSGVhZGVyL0hvbWVIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSG9tZS9JbWFnZUNhcm91c2VsL0ltYWdlQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSG9tZS9JbWFnZUNhcm91c2VsL0ltYWdlU2xpZGUvSW1hZ2VTbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Mb2FkZXIvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BhZ2VMYXlvdXQvTmF2YmFyL05hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9QYWdlTGF5b3V0L05hdmJhci90b2dnbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BhZ2VMYXlvdXQvUGFnZUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9SZXNlYXJjaGVzL0RhdGEvMjAxN18xOERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUmVzZWFyY2hlcy9EYXRhL0RhdGEyMDE4XzE5LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1Jlc2VhcmNoZXMvRGF0YS8yMDE4XzE5RGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9SZXNlYXJjaGVzL1Jlc2VhcmNoL1Jlc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1Jlc2VhcmNoZXMvUmVzZWFyY2hIZWFkZXIvUmVzZWFyY2hIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUmVzZWFyY2hlcy9SZXNlYXJjaGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiUmVzZWFyY2hGYWNpbGl0aWVzIiwiUkVRVUVTVF9TVEFUVVMiLCJMT0FETElORyIsIlNVQ0NFU1MiLCJFUlJPUiIsInN0YXR1cyIsInNldFN0YXR1cyIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInN1Y2Nlc3MiLCJpc0xvYWRpbmciLCJGb290ZXIiLCJIZWFkZXIiLCJpbWFnZVN0eWxlIiwid2lkdGgiLCJoZWlndGgiLCJIb21lIiwiSG9tZUhlYWRlciIsIkltYWdlQ2Fyb3VzZWwiLCJpbWFnZXNBcnJheSIsInNsaWRlSW5kZXgiLCJzaG93U2xpZGVzIiwiaSIsInNsaWRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImRvdHMiLCJsZW5ndGgiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGFzc05hbWUiLCJyZXBsYWNlIiwibWFwIiwiaW1hZ2UiLCJpZCIsInRleHRBbGlnbm1lbnQiLCJJbWFnZVNsaWRlIiwiaW1hZ2VTcmMiLCJMb2FkZXIiLCJOYXZiYXIiLCJteVN0eWxlIiwidG9nZ2xlciIsIm1lbnVCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsIlBhZ2VMYXlvdXQiLCJjaGlsZHJlbiIsIkRhdGEyMDE3XzE4IiwiRGF0YTIwMTlfMjAiLCJEYXRhMjAxOF8xOSIsIlJlc2VhcmNoIiwiU3JObyIsIlByb2plY3RUaXRsZSIsIlJvbGxObyIsIlN0dWRlbnROYW1lIiwiUHJvamVjdEd1aWRlIiwiY29sb3IiLCJGYWNpbGl0aWVzSGVhZGVyIiwidGl0bGUiLCJSZXNlYXJjaGVzIiwiZGl2U3R5bGVyIiwiaGVpZ2h0IiwiZGF0YSIsInNldERhdGEiLCJzZXRUaXRsZSIsImNoYW5nZXNIYW5kbGVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImUiLCJyZXNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Esa0JBQVQsR0FBNkI7QUFFekIsUUFBTUMsY0FBYyxHQUFHO0FBQ25CQyxZQUFRLEVBQUMsU0FEVTtBQUVuQkMsV0FBTyxFQUFDLFNBRlc7QUFHbkJDLFNBQUssRUFBQztBQUhhLEdBQXZCO0FBTUEsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxP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O0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3Q0g7O0FBQUE7QUFFY0sseUVBQWYsRTs7Ozs7Ozs7Ozs7QUN6RUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvUmVzZWFyY2hQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9SZXNlYXJjaFBhZ2UuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vc3JjL0NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gIFwiLi4vc3JjL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgUmVzZWFyY2hlcyBmcm9tIFwiLi4vc3JjL0NvbXBvbmVudHMvUmVzZWFyY2hlcy9SZXNlYXJjaGVzXCI7XHJcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gXCIuLi9zcmMvQ29tcG9uZW50cy9QYWdlTGF5b3V0L1BhZ2VMYXlvdXRcIjtcclxuaW1wb3J0IExvYWRlciAgZnJvbSBcIi4uL3NyYy9Db21wb25lbnRzL0xvYWRlci9Mb2FkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFJlc2VhcmNoRmFjaWxpdGllcygpe1xyXG5cclxuICAgIGNvbnN0IFJFUVVFU1RfU1RBVFVTID0ge1xyXG4gICAgICAgIExPQURMSU5HOlwiTG9hZGluZ1wiLFxyXG4gICAgICAgIFNVQ0NFU1M6XCJTVUNDRVNTXCIsXHJcbiAgICAgICAgRVJST1I6XCJFcnJvclwiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURMSU5HKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpLCAyMDAwKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1M7XHJcbiAgICBjb25zdCBpc0xvYWRpbmcgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkxPQURMSU5HO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxMb2FkZXIvPn1cclxuICAgICAgICAgICAgeyBzdWNjZXNzICYmIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVzZWFyY2hlcy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFnZUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZWFyY2hGYWNpbGl0aWVzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgIG10LTFcIj5cclxuICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwicHgtNVwiICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTQgZmxleCBmbGV4LXJvd1wiID5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTEgZmxleCBqdXN0aWZ5LWJldHdlZW4gbXQtMyBtZDptYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTdWIgSGVhZGluZyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS02MDAgZm9udC1ib2xkIHRleHQtbWRcIj5FbGVjdHJvbmljcyBEZXBhcnRtZW50PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1ncmF5LTYwMCB0ZXh0LXhzXCI+IE5hdGlvbmFsIGluc3RpdHV0ZSBvZiBUZWNobm9sb2d5LCBTVVJBVCA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU1ZOSVQgbG9nbyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0zMiBmbGV4IGgtMTIgdy0xMiB0ZXh0LWNlbnRlciBtZDpqdXN0aWZ5LWVuZCBtZDptci0zMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJcIiBzcmM9XCJpbWFnZXMvTklUX1N1cmF0X0xvZ28uc3ZnLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgcHQtMSBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhsIHRleHQtZ3JheS02MDAgZm9udC1zZW1pYm9sZFwiPkZvbGxvdyB1cyBvbjogPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHgtMiBwYi0yIHB0LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbS5mYWNlYm9vay5jb20vRWxlY3Ryb25pY3MtQ29tbXVuaWNhdGlvbi1FbmdpbmVlcmluZy1EZXBhcnRtZW50LVNWTklULVN1cmF0LTE3MDQyMjQ2NjMxNDA1NTQvXCI+PHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBmb250LXNlbWlib2xkIHAtMSBtZDpwLTNcIj48aW1nIGNsYXNzTmFtZT1cInctMTBcIiBzcmM9XCJpbWFnZXMvRm9vdGVyLWljb25zL0ZhY2Vib29rLWljb24uc3ZnXCIvPiZuYnNwOzxwIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPkZhY2Vib29rPC9wPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHAtM1wiPjxpbWcgY2xhc3NOYW1lPVwidy0xMFwiIHNyYz1cImltYWdlcy9Gb290ZXItaWNvbnMvWW91VHViZS1pY29uLnN2Z1wiLz4mbmJzcDs8YT5Zb3V0dWJlPC9hPjwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vc3ZuaXQub2ZmaWNpYWw/aWdzaGlkPXJ3bHZocnl6ZmlpMlwiPjxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZm9udC1zZW1pYm9sZCBwLTEgbWQ6cC0zXCI+PGltZyBjbGFzc05hbWU9XCJ3LTEwXCIgc3JjPVwiaW1hZ2VzL0Zvb3Rlci1pY29ucy9JbnN0YWdyYW0taWNvbi5zdmdcIi8+Jm5ic3A7PHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+SW5zdGFncmFtPC9wPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9zLXYtbmF0aW9uYWwtaW5zdGl0dXRlLW9mLXRlY2hub2xvZ3ktc3ZuaXQtc3VyYXQtbml0LXN1cmF0LVwiPjxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZm9udC1zZW1pYm9sZCBwLTEgbWQ6cC0zXCI+PGltZyBjbGFzc05hbWU9XCJ3LTEwXCIgc3JjPVwiaW1hZ2VzL0Zvb3Rlci1pY29ucy9MaW5rZWRJbi1pY29uLnN2Z1wiLz4mbmJzcDs8cCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5MaW5rZWRJbjwvcD48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9OSVRfU3VyYXQ/cz0yMFwiPjxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZm9udC1zZW1pYm9sZCBwLTEgbWQ6cC0zXCI+PGltZyBjbGFzc05hbWU9XCJ3LTEwXCIgc3JjPVwiaW1hZ2VzL0Zvb3Rlci1pY29ucy9Ud2l0dGVyLWljb24uc3ZnXCIvPiZuYnNwOzxwIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPlR3aXR0ZXI8L3A+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB5LTMgcHgtNSB0ZXh0LXhzIG1kOnRleHQtbCB0ZXh0LWdyYXktMjAwIGZsZXgganVzdGlmeS1jZW50ZXJcIj4mY29weTsgMjAyMSBFbGVjdHJvbmljcyBEZXBhcnRtZW50ICwgYWxsIHJpZ2h0cyByZXNlcnZlZCAmIzY0OyBOYXRpb25hbCBpbnN0aXR1dGUgb2YgVGVjaG5vbG9neSwgU1VSQVQgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCl7XHJcbiAgICBjb25zdCBpbWFnZVN0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoOjkwLFxyXG4gICAgICAgIGhlaWd0aDo5MFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHAtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTQgZmxleCBmbGV4LXJvd1wiID5cclxuICAgICAgICAgICAgICAgIHsvKiBIZWFkaW5nICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1jZW50ZXIgbXQtMyBtZDptYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhsXCI+RWxlY3Ryb25pY3MgRGVwYXJ0bWVudDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWdyYXktNjAwXCI+IE5hdGlvbmFsIGluc3RpdHV0ZSBvZiBUZWNobm9sb2d5LCBTVVJBVCA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBMT0dPICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIG1kOmp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL05JVF9TdXJhdF9Mb2dvLnN2Zy5wbmdcIiBzdHlsZT17aW1hZ2VTdHlsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlQ2Fyb3VzZWwgZnJvbSBcIi4vSW1hZ2VDYXJvdXNlbC9JbWFnZUNhcm91c2VsXCI7XHJcbmltcG9ydCBIb21lSGVhZGVyIGZyb20gXCIuL0hvbWVIZWFkZXIvSG9tZUhlYWRlclwiXHJcblxyXG5mdW5jdGlvbiBIb21lKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIGJnLWdyYXktMjAwIGdyaWQgZ3JpZC1jb2xzLTFcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxIb21lSGVhZGVyLz5cclxuXHJcbiAgICAgICAgICAgIDxJbWFnZUNhcm91c2VsLz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBEZXBhcnRtZW50IE1pc3Npb24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IG0tNCBiZy1ncmF5LTMwMCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTYwMCB0ZXh0LWJvbGQgdGV4dC1jZW50ZXJcIj5EZXBhcnRtZW50IE1pc3Npb248L2g2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCB0ZXh0LWNlbnRlciB0ZXh0LWxcIj5UaGUgbWlzc2lvbiBvZiB0aGUgRWxlY3Ryb25pY3MgRW5naW5lZXJpbmcgRGVwYXJ0bWVudCBpcyB0byBjb250cmlidXRlIHRvIHNvY2lldHkgYW5kIGluZHVzdHJ5IHRocm91Z2ggZXhjZWxsZW5jZSBpbiBlZHVjYXRpb24sIHJlc2VhcmNoLCBpbm5vdmF0aW9ucyBhbmQgZXRoaWNzIGJ5IHN0YWtlaG9sZGVycy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIERlcGFydG1lbnQgTWlzc2lvbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCBwLTYgbXgtNCBtYi00IHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktNjAwIHRleHQtYm9sZCB0ZXh0LWNlbnRlclwiPkRlcGFydG1lbnQgVmlzaW9uPC9oNj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgdGV4dC1jZW50ZXIgdGV4dC1sXCI+VGhlIHZpc2lvbiBvZiB0aGUgRWxlY3Ryb25pY3MgRW5naW5lZXJpbmcgRGVwYXJ0bWVudCBpcyB0byBBaW0gdG8gYWNoaWV2ZSBxdWFsaXR5IGluIGVkdWNhdGlvbiBhbmQgcmVzZWFyY2ggdG8gY3JlYXRlIGxlYWRpbmcgRWxlY3Ryb25pY3MgZW5naW5lZXJzLCByZXNlYXJjaGVycyBhbmQgZW50cmVwcmVuZXVycy48L3A+ICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSG9tZUhlYWRlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgcC04IG14LTQgbXQtNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogSGVhZGluZyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWdyYXktNjAwIHRleHQtMnhsIGZvbnQtYm9sZFwiPkRlcGFydG1lbnQgVmlydHVhbCBUb3VyPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lSGVhZGVyOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZVNsaWRlIGZyb20gXCIuL0ltYWdlU2xpZGUvSW1hZ2VTbGlkZVwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VDYXJvdXNlbCgpe1xyXG5cclxuICAgIGNvbnN0IGltYWdlc0FycmF5ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC0xLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiMVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9lY2VkSW1hZ2VzL2VjZWQtMi5qcGdcIixcclxuICAgICAgICAgICAgXCJrZXlcIjpcIjJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZWNlZEltYWdlcy9lY2VkLTMuanBnXCIsXHJcbiAgICAgICAgICAgIFwia2V5XCI6XCIzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC00LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiNFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9lY2VkSW1hZ2VzL2VjZWQtNS5qcGdcIixcclxuICAgICAgICAgICAgXCJrZXlcIjpcIjVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZWNlZEltYWdlcy9lY2VkLTYuanBnXCIsXHJcbiAgICAgICAgICAgIFwia2V5XCI6XCI2XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC03LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiN1wiXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG5cclxuICAgIHZhciBzbGlkZUluZGV4ID0gMDtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93U2xpZGVzKCkge1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIHZhciBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXlTbGlkZXNcIik7XHJcbiAgICAgICAgdmFyIGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZG90XCIpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzbGlkZUluZGV4Kys7XHJcbiAgICAgICAgaWYgKHNsaWRlSW5kZXggPiBzbGlkZXMubGVuZ3RoKSB7c2xpZGVJbmRleCA9IDF9ICAgIFxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRvdHNbaV0uY2xhc3NOYW1lID0gZG90c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWRlc1tzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcclxuICAgICAgICBkb3RzW3NsaWRlSW5kZXgtMV0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG4gICAgICAgIHNldFRpbWVvdXQoc2hvd1NsaWRlcywgNTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzaG93U2xpZGVzKCk7XHJcbiAgICB9LCBbc2xpZGVJbmRleF0pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG14LTQgcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gbWQ6bXgtMFwiPiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXNob3ctY29udGFpbmVyIG1kOmgtOTZcIj5cclxuXHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VzQXJyYXkubWFwKChpbWFnZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVNsaWRlIGtleT17aW1hZ2UuaWR9ey4uLmltYWdlfS8+ICAgIFxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiIHN0eWxlPXt7dGV4dEFsaWdubWVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcm91c2VsO1xyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cIm10LTQgbXgtNCByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBtZDpteC0wXCI+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlc2hvdy1jb250YWluZXIgaC05NiBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbnVtYmVydGV4dFwiPjEgLyAzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2xpZGUtaW1hZ2VcIiBzcmM9XCJpbWFnZXMvZWNlZEltYWdlcy8zLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+Q2FwdGlvbiBUZXh0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbnVtYmVydGV4dFwiPjIgLyAzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbGlkZS1pbWFnZVwiIHNyYz1cImltYWdlcy9lY2VkSW1hZ2VzLzQuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPkNhcHRpb24gVHdvPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbnVtYmVydGV4dFwiPjMgLyAzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbGlkZS1pbWFnZVwiIHNyYz1cImltYWdlcy9lY2VkSW1hZ2VzLzUuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPkNhcHRpb24gVGhyZWU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiIHN0eWxlPXt7dGV4dEFsaWdubWVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VTbGlkZSh7aW1hZ2VTcmN9KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2xpZGUtaW1hZ2VcIiBzcmM9e2ltYWdlU3JjfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNsaWRlOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGUvbG9hZGVyLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTG9hZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCBib3R0b20tMCB3LWZ1bGwgaC1zY3JlZW4gei01MCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS03MDAgIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlciBlYXNlLWxpbmVhciByb3VuZGVkLWZ1bGwgYm9yZGVyLTQgYm9yZGVyLXQtNCBib3JkZXItZ3JheS0yMDAgaC0xMiB3LTEyIG1iLTRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPkxvYWRpbmcuLi48L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPlRoaXMgbWF5IHRha2UgYSBmZXcgc2Vjb25kcywgcGxlYXNlIGRvbid0IGNsb3NlIHRoaXMgcGFnZS48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdG9nZ2xlciBmcm9tIFwiLi90b2dnbGVyXCJcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpe1xyXG4gICAgY29uc3QgbXlTdHlsZSA9IHtcclxuICAgICAgICB3aWR0aDoyMFxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdG9nZ2xlcigpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBtZDpjb2wtc3Bhbi0xIG0tMyBiZy1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICA8bmF2ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IGJvcmRlci1iIGJvcmRlci1ncmF5LTEwMCBmbGV4IGp1c3RpZnktYmV0d2VlbiAgbWQ6ZmxleCBtZDpqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbCBmb250LWJvbGQgIHVwcGVyY2FzZSBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgY3Vyc29yLXBvaW50ZXIgdGV4dC14bCBob3Zlcjp0ZXh0LWdyYXktMTAwXCI+RWxlY3Ryb25pY3MgRGVwYXJ0bWVudDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBjdXJzb3ItcG9pbnRlciBtZDpoaWRkZW5cIiBpZD1cIm1lbnVCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgaC04IHctOFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRleHQtbGVmdCBoaWRkZW4gbWQ6YmxvY2tcIiBpZD1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcC02IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImgtNiB3LTZcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMyAxMmwyLTJtMCAwbDctNyA3IDdNNSAxMHYxMGExIDEgMCAwMDEgMWgzbTEwLTExbDIgMm0tMi0ydjEwYTEgMSAwIDAxLTEgMWgtM20tNiAwYTEgMSAwIDAwMS0xdi00YTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2NGExIDEgMCAwMDEgMW0tNiAwaDZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4gPGEgaHJlZj1cIi4vXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTEwMFwiPiZuYnNwO0hvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcHgtNiBwYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaC01IHctNVwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTggMTBhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS03IDRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0tMS05YTEgMSAwIDAwLTEgMXY0YTEgMSAwIDEwMiAwVjZhMSAxIDAgMDAtMS0xelwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPjxhIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS0xMDBcIj4mbmJzcDtBYm91dDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcHgtNiBwYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3N2Z3MvUGVvcGxlLnN2Z1wiIHN0eWxlPXtteVN0eWxlfS8+PGEgaHJlZj1cIkZhY3VsdGllc1BhZ2VcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMTAwXCI+Jm5ic3A7RmFjdWx0aWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtZ3JheS00MDAgdGV4dC14bCBweC02IHBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvc3Zncy9SZXNlYXJjaC5zdmdcIiBzdHlsZT17bXlTdHlsZX0vPjxhIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS0xMDBcIiBocmVmPVwiUmVzZWFyY2hQYWdlXCI+Jm5ic3A7UHJvamVjdHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdGV4dC1ncmF5LTQwMCB0ZXh0LXhsIHB4LTYgcGItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctNlwiIHNyYz1cImltYWdlcy9zdmdzL0ZhY2lsaXRpZXMuc3ZnXCIvPjxhIGhyZWY9XCJSZXNlYXJjaEZhY2lsaXRpZXNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMTAwXCI+Jm5ic3A7RmFjaWxpdGllczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZXIoKXtcclxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVCdXR0b25cIik7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xyXG5cclxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+XHJcbiAgICAge1xyXG4gICAgICAgIGlmKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZ2dsZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhci9OYXZiYXJcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL0hvbWUvSG9tZVwiO1xyXG5cclxuZnVuY3Rpb24gUGFnZUxheW91dCh7Y2hpbGRyZW59KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTRcIj5cclxuICAgICAgICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMyBwLTNcIj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUxheW91dDsiLCJjb25zdCBEYXRhMjAxN18xOCA9IFtcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDFcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIkNISUxEIFNBRkVUWSBXRUFSQUJMRSBERVZJQ0VcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDI5XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkJPTU1BVEhVTEEgTUFESFUgU0lORFVSQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gUC4gSy4gU2hhaFwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTEzXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlNIQUlLIEtIQUxJREEgUEFSVkVFTlwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwOTlcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQk9NTUlORU5JIFlBTUlOSSBTQVJBU1dBVEhJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEwMFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJWRU5JR0FMTEEgVklOVVRITkFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAyXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJUT05HVUUgQ09OVFJPTExFRCBXSEVFTENIQUlSXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAwMVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBVklOQVNIIE5BWUFLXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBQLiBLLiBTaGFoXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMTJcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUFJBU0hBTlRIIFlBQ0hVUklcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDMwXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlNBWUFOIFNBSEFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDMzXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkFCSElSVVAgUEFOSkFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAzXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJUTyBBTkFMWVNFIFJFQUxJU1RJQyBHIENIQU5ORUwgTU9ERUxTIEFORCBORVRXT1JLXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAwM1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJWWUFTIEpBVEFOIE5JTEFZXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLihEci4pIFUuIEQuIERhbGFsXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMjhcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiU1VUQVIgU0FSRkFSQVogU0lSQUpCSEFJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEwNlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBSVRBIFNJTkRIVSBTUkVFXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzExMFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJHT1BJIERPU0hJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgNFwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiU0VDVVJFIEFORCBFRkZJQ0lFTlQgSEFORE9WRVIgQVVUSEVOVElDQVRJT04gQlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMDVcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiU0hBSUxBSkEgWUVMRVNXQVJBUFVcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuKERyLikgVS4gRC4gRGFsYWxcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAxOVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJFQVNIV0VSIFNVQlJBTUFOSUFNXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA3NFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJERVZBUkFLT05EQSBTTkVIQSBQUkFQVVJOQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwOTNcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQUFESVRZQSBLQVVMXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgNVwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiSU5ET09SIExPQ0FMSVpBVElPTiBVU0lORyBNQUNISU5FIExFQVJOSU5HIEFORFwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMDJcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUEFUSUwgTUVESEEgTUFIRVNIXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLihEci4pIFUuIEQuIERhbGFsXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNDZcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQUFTSElTSCBLVU1BUiBNSVNSQUFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDc5XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlBBVElMIE1VR0RIQSBTQU5KQVlcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTYxXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlNPVVJBQkggREFTXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgNlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiSVJSSUdBVElPTiBTWVNURU0gVVNJTkcgWklHQkVFXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAxNFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJKRVNFRUtBIERFVkVORFJBIFNIQUhcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIE4uIEIuIEthbmlya2FyXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMTZcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiWUVTSEEgSEFSSVNIIEdPTkRBTElBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEzNVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBTUVZIE1JU0hSQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMzhcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiVklLUkFOVCBTSU5HSCBTSE9FUkFOXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgN1wiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiUkZJRCBCQVNFRCBBVFRFTkRBTkNFIFNZU1RFTSBXSVRIIFNNUyBOT1RJRklDQVRJXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAxM1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJUQU5WSSBQIEtVUkxFS0FSXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBOLiBCLiBLYW5pcmthclwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDE3XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkFSVVNBIFJBWUVFUyBBSE1FRCBLSEFMRkFZXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA2OVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJNQVRIVVIgUkFIVUwgS0FJTEFTSEJIQUlcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDczXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkpBR0FSQVBVIFJPSElUSCBLVU1BUlwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDhcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlJFU1RBVVJBTlRTIEFVVE9NQVRJT04gVVNJTkcgWklHQkVFXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAwNlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJGQVpBTCBGSVJPWlNIQUggRElXQU5cIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIE4uIEIuIEthbmlya2FyXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwOTFcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQU1JSkVFVCBLVU1BUlwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwOTVcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTUlTVFJZIEpJTUlUIFZJUFVMXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA5NlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBTlVHUkFIIE5JTUFWQVRcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyA5XCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJIT01FIEFVVE9NQVRJT04gU1lTVEVNIFVTSU5HIFdJRkkgTU9EVUxFXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAyMVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJQQUdBIFJBTklcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIE4uIEIuIEthbmlya2FyXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMzVcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTUVFTkEgTklUQUtVTUFSSSBHSEFOU0hZQU1cIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDQyXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlNBUk9KIE1BTVRBIEtVQkVSUkFNXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA0N1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJDSEFVSEFOIE1FR0hBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMTBcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlZFSElDTEUgQUNDSURFTlQgRyBERVRFQ1RJT04sIFJFUE9SVElORyBBTkQgTkFWSUdcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDcwXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlBFUlVNQUxMQSBLT1RFU1dBUkEgUkFPXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJEci4gSi4gTi4gU2FydmFpeWFcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA3MVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJUQU5HSVJBTEEgQUtISUwgUkVERFlcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDk4XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkNIQUxMQVBBTExJIFBSQU1PRFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNDlcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTklURVNIIFBSQUJIQUtBUkFOIE5BSVJcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAxMVwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiRkVBVFVSRSBFWFRSQUNUSU9OIEZPUiBJTUFHRSBSRUdJU1RSQVRJT05cIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDIzXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkdVVFRBIFJBTVlBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJEci4gSi4gTi4gU2FydmFpeWFcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA1M1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJDSE9QUEFSQVBVIFNBSSBBS0hJTFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNjRcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQk9EREFQQVRJIFNSQVZBTklcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTUwXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkJJTEtJU0ggQVJBIE5BSUtPRElcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAxMlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiRyBST1MgQkFTRUQgUk9CT1RJRVMgU1lTVEVNXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzExMlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJOQUlWRURIIEpBSU5cIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIChEci4pIEEuIEQuIERhcmppXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMTdcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUkFIVUwgR1VOS0FSXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzExOVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJLQVJUSUtcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTM0XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlQgU0FOREVFUFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDEzXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJQSFlTSU9MT0dJQ0FMIFNJR05BTCBNT05JVE9SSU5HIFNZU1RFTVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMDRcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTUVIVEEgQU1JIENIRVRBTktVTUFSXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiAoRHIuKSBBLiBELiBEYXJqaVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTE1XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlNIQUggQU1PTEkgUkFKRVNIQkhBSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMThcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiR09QSSBLQU1MRVNIIFBBVEVMXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEzMlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJCSEFUVCBTRUpBTCBIRU1BTlRcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAxNFwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiTCBBTkQgUyBCQU5EIE1JQ1JPV0FWRSBHIE1PTk9MSVRISUMgSU5URUdSQVRFRCBDSVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNDNcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTUFSQUJBVEhVTEEgVkVOS0FUIE5JS0hJTFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIFAuIE4uIFBhdGVsXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNTFcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiS0FUVEEgU0lWQVJBTVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwODNcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQURFUFUgVklORUVUSCBLVU1BUlwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwODVcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUEFMRVBVIFBVTkVFVEggSE9USFJBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMTVcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlZPSUNFIEcgQ09OVFJPTExFRCBIT01FIEFQUExJQ0FUSU9OXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAwOFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJLT1IgUEFSQVMgTUVSQU1CSEFJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBaLiBNLiBQYXRlbFwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDEwXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkJIVVZBIEJSSUpFU0hLVU1BUiBSQU1BTklLQkhBSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMjBcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiU0FESFUgTUFZQU5LIERJUEFLQkhBSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMjJcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiR09ISUwgS0FSQU5LVU1BUiBIQVNNVUtIQkhBSXNcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAxNlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiQVJNIFBST0NFU1NPUiBCQVNFRCBSRUFMIFRJTUUgQ0FSIFRIRUZUIERFQ0xJTkVcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDI1XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlZFRVJBUFVSRUREWSBTQUkgUFVORUVUSCBSRUREWVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gWi4gTS4gUGF0ZWxcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAzOFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJTSUREVUxBIEpBSURFRVBcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDY2XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkRJVkkgWUFTV0FOVEhcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTYzXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkJVU0lSRUREWSBTSEFOVEFOIEtVTUFSIFJFRERZXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMTdcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIkVOVklST05NRU5UIE1PTklUT1JJTkcgQU5UIEFMRVJUIEJZIElOVEVMTElHRU5cIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTE0XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlBBUk1BUiBESEFXQUxLVU1BUiBQQVJFU0hLVU1BUlwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIFouIE0uIFBhdGVsXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNDNcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUkFLSE9MSVlBIFNIUkFEREhBQkVOIERJTElQQkhBSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNDVcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTUFESFVSSU1BIERBU1wiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNDdcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiSlVXQU4gSEVUVElBUkFDSENISUdFIFJBTkRJS0EgTEFLU0hBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMThcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIkZBQ0UgUkVDT0dOSVRJT04gVVNJTkcgRlBHQVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNjNcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQk9QUEEgTkFHQSBTVUpJVEhcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEouIEVuZ2luZWVyXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNzJcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiSU5USEEgQUtISUxcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDgxXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIktFTExBIENIQUlUQU5ZQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwODRcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTUFOSVNIIE1FRU5BXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMTlcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIklNQUdFIFBST0NFU1NJTkcgVVNJTkcgRU1CRURERUQgU1lTVEVNU1wiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwOTBcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiS09SSVZJIFRISU1NQUdVUlVEVVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gUC4gSi4gRW5naW5lZXJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEwNVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJLVU5DSEFMQSBKQVlBIE5BR0EgU0FJIEJIQVJHQVZcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTA3XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlNBS0UgSkFZQVNBSUtSSVNITkFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTA4XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlBBTExFUkxBIFJBTUFLQU5USCBSRUREWVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDIwXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJJT1QgQkFTRUQgSE9NRSBBVVRPTUFUSU9OIFNZU1RFTVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMDNcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTkVIQSBWRVJNQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gUC4gSi4gRW5naW5lZXJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEyNFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBWVVTSCBMQUJIXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEyNlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJMQUxJVCBSQU5LQVdBVFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMjlcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUEFURUwgRk9SVU1CRU4gU1VNQU5CSEFJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMjFcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIkZQR0EgQkFTRUQgUkVBTCBUSU1FIFNZU1RFTVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMjFcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTkdBUkcgQURJVEkgUkFUQU5MQUxcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEouIEVuZ2luZWVyXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMzZcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiVkFJSkFOQVBVUktBUiBTSEFNQkhBVkkgU0FOSklWXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzE0MVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBTU9MUFJBVEFQIFJBSkVTSCBTSU5HSFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNTJcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQkhBTlUgQU5OQVBPT1JOQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDIyXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJJTVBMRU1FTlRBVElPTiBPRiBHIFNJTkVXQVZFIEdFTkVSQVRPUiBGT1IgQklPSU1cIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDQ1XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkFLS0VMQSBTQUlLUklTSE5BXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJEci4oTXJzLikgUi4gTi4gRGhhdnNlXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNThcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUkVERFkgS0FOQ0hBTkEgR0FOR0EgQkhBVkFOSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNTlcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUEVOVU1BUlRISSBBSVNIV0FSWUFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDY3XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkJIQUkgSEFSSVNIXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMjNcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlNNQVJUIEJBTkRcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTU1XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlRFSkFTV0lOSSBTQU5EQVBPTExBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJEci4gQS4gUy4gTWFuZGxvaVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTU3XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkFFUlJBIFJBTVlBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzE1OVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJNWU5FTkkgQ0hBUklTSE1BXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzE2NFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJTQU1JTkVOSSBQT09KQSBQUkFWQUxMSUtBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMjRcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIkxJTkVBUiBHIERFVEVDVElPTiBURUNITklRVUVTIEZPUiBNSU1PIFNZU1RFTVNcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDc3XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIk5BS0lSQUtPTU1VTEEgTUFOSVNIXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJEci4oTXJzLikgUy4gR3VwdGFcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA4OFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJLQVJSSSBFU1dBUiBOQUdBIEFZWUFQUEEgUkVERFlcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTU0XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkRST05BIEtVTUFSIERFS09OREFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTU2XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIktBVkVSSSBESU5FU0hcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAyNVwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiRlBHQSBJTVBMRU1FTlRBVElPTiBPRiBSUyBDT0RFXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA0MFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBSU5BTVBVREkgU1VTTUlUSEFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIkRyLihNcnMuKSBTLiBHdXB0YVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDc1XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlJBTUlSRUREWSBBTVJVVEhBIFZBUlNISU5JXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA3OFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJOSUtISVRBIE1BREhVU1VEQU4gQkhPT1BBVElcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDgwXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIktBTlRBTU5FTkkgR0VFVEhJS0EgVkFSU0hBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMjZcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlBBVENIIEFOVEVOTkFcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDExXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkJISU5HQVJERSBTQUhJTCBSQUpFU0hcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIEcuIFNhbnRyYVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDYxXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkRIVVBBTSBOQVZFRU5cIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDg3XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlRIT1RBUEFMTEkgTkFWRUVOXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzE1M1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJOQUlSIEtBUlRISUsgTVVSQUxJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMjdcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlZFSElDTEUgVFJBQ0tJTkcgVVNJTkcgR1BTLUdTTVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTEzRUMxMDJcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQ0hJVFJPREEgU0FOSkFZS1VNQVIgS0FOVElCSEFJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBHLiBTYW50cmFcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTNFQzE0N1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJNVVpBTUVMXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEwMVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBQVNITEVTSCBQQVRFTFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMTZcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUkFOQSBWSVJBSiBESEFSTUVORFJBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMjhcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIldJUkVMRVNTIEVMRUNUUklDSVRZIEcgQ09OU1VNUFRJT04gTUVURVIgVVNJTkcgR1NcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDM5XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkRJVllBTSBGQVRFSFBVUklBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJEci4oTXJzLikgSi4gTi4gUGF0ZWxcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA2MlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJVSkpXQUwgS1VNQVJcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTAyXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlBSQUpBUEFUSSBNQUhJUEFMIElTSFZBUkJIQUlcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTQ4XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlNISVZBTSBUQU5ET05cIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAyOVwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiSU1BR0UgQ09OVFJPTExFRCBST0JPVCBMT0NBTElaQVRJT04gQU5EIE5BVklHQVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMzFcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQ09NQU5EVVIgUkFKQVNFS0hBUiBLQVJUSElLXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJEci4oTXJzLikgSi4gTi4gUGF0ZWxcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAzNlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJQT1RUSUdBUkkgU0FDSElOIE1PSEFOXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA3NlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJHVU5EQUJPSU5BIFJBTkpJVEhcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTYwXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlJBTSBSQURFU0ggREFWVUxVUklcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAzMFwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiU0lNVUxBVElPTiBCQVNFRCBHIFNUVURZIE9GIFZBUklPVVMgU0VOU09SUyBSRVFVSVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNTBcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiR0FSQVBBVEkgU0FJIFRFSkFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBLLiBQLiBVcGxhXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwODJcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQkFMSVZBREEgUyBTIE5BR0FWQUxMSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwOTJcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiR09QSVNFVFRJIEtBVklUSEEgQkFCWVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwOTdcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiU0lEREFQVVJBTSBOSUhBUklLQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YTIwMTdfMTg7IiwiY29uc3QgRGF0YTIwMTlfMjAgPSBbXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlNQRUVDSCBSRUNPR05JVElPTiBVU0lORyBERUVQIExFQVJOSU5HXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDkxXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTUFOTkFNIFZJSkFZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEsuIFNoYWhcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwOTZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJUSEFNTUlORU5JIFlBU1dBTlRIIEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEwM1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk0gUyBTWUFNIFNVTkRBUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMjlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLSEFaSSBNQUhBTU1BRCBTQVpJRFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJvdXRhZ2UgYW5hbHlzaXMgJiBvcHRpbWFsIHBvd2VyIGFsbG9jYXRpb24gZm9yIGRvd25saW5rIG5vbi1vcnRob2dvbmFsIG11bHRpcGxlIGFjY2VzcyAobm9tYSlcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMjRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTSEFIIFJBSiBESEFWQUxCSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIEEuIEguIExhbGx1d2FkaWFcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMzdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTQVRJU0ggU0hJTkdSQUtISVlBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA0M1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBSQU5KQUwgQUdSQVdBTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNDVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTSElWQU5TSCBBR0FSV0FMXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAzXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkNPQUwgTUlORVJTJyBTQUZFVFkgTU9OSVRPUklORyBTWVNURU1cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMDdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTSFJFQVlBIEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gQS4gSC4gTGFsbHV3YWRpYVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAwOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BTkFTQSBLT1RIQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJDby1HdWlkZSA6IFByb2YuIFAuIEsuIFNoYWhcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMTBcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNT1hBIEFMUEVTSCBQQVRFTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMzVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJBTktJVEEgQkFLU0hJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyA0XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIklvVCBCQVNFRCBWT0lDRSBDT05UUk9MIE9GIEhPTUUgQVBQTElBTkNFUylcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwODNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQVRFTCBBTktVUktVTUFSIE5BUkVTSEJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gQS4gSC4gTGFsbHV3YWRpYVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA4NVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkJPR0hBUkEgSkVOSUxLVU1BUiBESU5FU0hCSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkNvLUd1aWRlIDogUHJvZi4gUC4gSy4gU2hhaFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEwMFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBUk1BUiBNQUxBWSBLQUxQRVNIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzExOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1FSFRBIEtVU0hBTCBKWU9USU5CSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyA1XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkZMQVNIIFNMT09EIElOVElNQVRJT04gT1ZFUiBHU00gTkVUV09SS1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTRFQzAwN1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNIVUJIQU5LQVIgVE9NQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gQS4gSC4gTGFsbHV3YWRpYVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTNFQzAzMVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBVEVMIEFQRUtTSEFCRU4gQU5JTEJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxM0VDMDM3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS1UgUkFKTkkgTUVFTkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxMzVFQzEyMlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNVREhBIENIQVVESEFSWVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgNlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJEZXNpZ24gYW5kIGRldmVsb3BtZW50IG9mIHNlbnNvciBub2RlIGZvciBmb29kIHN1cHBseSBjaGFpbiBtYW5hZ2VtZW50XCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDg0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0FSSUtIQURBIE1BTlNJIFJBTUpJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiAoTXJzLikgVS4gRC4gRGFsYWxcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwOTBcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTSVJJUFJPTFUgU0FJIFBSQU5BVlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMTRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTVVJFTElZQSBCQU5TSUJFTiBESU5FU0hCSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyA3XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlNpbXVsYXRpb24gYW5kIGFuYWx5c2lzIG9mIHdlYXJibGUgYW50ZW5uYSBmb3IgZGlmZmVyZW50IGZhYnJpYyBtYXRlcmlhbHNcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMDFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJWQU1BTkEgUkFWSU5EUkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIChNcnMuKSBVLiBELiBEYWxhbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEwN1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlZFTVVMQVBBTExJIFBBVkFOIFNBSSBHQU5FU0hcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTA4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVCBTUklOSVZBU0EgVkFSQSBDSEFLUkFWQVJUSFlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlVHSVJJIFNBSSBTQUdBUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgOFwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJFdmFsdWF0ZSBkaWVsZWN0cmljIGNvbnN0YW50IG9mIGRpZmZlcmVudCBmYWJyaWNzIHVzaW5nIHNvbGlkIGRpZWxldHJpYyBjZWxsXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTA0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQ0hFVlVMQU1BRERJIE5BVkVFTlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gKE1ycy4pIFUuIEQuIERhbGFsXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTA2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTkFNQUxJREVWSSBCSEFSQVRIIFJBSlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMjdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJSIEdBTkVTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMzVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLQVRIQUQgREhBVkFMIENISEFHQU5CSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyA5XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIklvVCBiYXNlZCBwbGFudCAmIHNvaWwgbW9uaXRvcmluZyBzeXN0ZW1cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMjdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJKQVJJV0FMQSBERUVQIEFTSElTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBOLiBCLiBLYW5pcmthclwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA1N1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlJBSkFUIEtVTUFSIFBBTklHUkFISVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNjFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJDSE9VSEFOIE1PTlUgSE9SSUxBTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxNDBcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTSEFIIEtBVVNUVUJIIE1BTklTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTBcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiSW9UIGJhc2VkIHBhdGllbnQgbW9uaXRvcmluZyBzeXN0ZW1cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMjJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJBQkhJU0hFSyBSQUpBTlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBOLiBCLiBLYW5pcmthclwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEzMVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFSWUFOIFNJTkdIIEFITEFXQVRcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTQzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTklUSVNIIFJBTkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDExXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkhhbmQgd3JpdHRlbiBjaGFyYWN0ZXIgcmVjb2duaXRpb24gdXNpbmcgbWFjaGluZSBsZWFybmluZ1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA0MFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BUlRZIFZFTktBVEEgSEFOVU1BVEggU0FJIEhBUlNISVRcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIEouIE4uIFNhcnZhaXlhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDQxXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS0FUVEFNVVJJIFNBSSBNQU5JIFNXRVRIQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNDdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLT0RVUkkgQVBBUk5BXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA0OFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BS0lORURJIFZBU0FWSSBERVZJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxMlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJJb1QgQkFTRUQgU01BUlQgSE9NRVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA4NlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktPWUEgU1JJTkFUSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gSi4gTi4gU2FydmFpeWFcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwODlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJUQU5OSVJVIFZJTk9EIEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzE0MVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFUQ0hJIFNSRUVIQVJTSEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk5BTkRJUEFUSSBWRU5LQVRBIFNBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTNcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiQVVUT05PTU9VUyBBR1JJQ1VMVFVSQUwgUk9CT1RcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNTNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQVRFTCBESFJVViBSQUpFTkRSQUtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBBLiBELiBEYXJqaVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA1NlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkdBTkRISSBNRUVUIEpBWUVORFJBS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDc0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0hBTktBUkFOQVJBWUFOQU4gSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTRcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiU01BUlQgQVRURU5EQU5DRSBTWVNURU1cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMDJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJSQVZFRU5BIE1PUkVTSFdBUiBWSU5DSFVSS0FSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBBLiBELiBEYXJqaVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAzOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNIQVNIV0FUSSBBU1RIQU5BXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEwOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkJIQU5BTkkgTUlMSUUgUElZVVNIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzExM1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk5BTkRJTkkgVVBBREhZQVlBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxNVwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJFLVdSSVRJTkcgVVNJTkcgQVJNIE1JQ1JPQ09OVFJPTExFUlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA3NlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkRFUEFOSSBCSFVNSUwgUkFKTklLQU5UQkhBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gQS4gRC4gRGFyamlcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTZcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiRGVzaWduIGFuZCBwZXJmb3JtYW5jZSBhbmFseXNpcyBvZiBlLXRleHRpbGUgYW50ZW5uYVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAwM1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk5JS0lUQSBOSUxFU0ggTUlTVFJZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBQLiBOLiBQYXRlbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAwNFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk5JS0hJVEEgUFJBVklOIE1PUkVcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDY5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS0FTSE1JUkEgUFJBRElQIEdIT01cIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDE3XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlBlcmZvcm1hbmNlIGFuYWx5c2lzIG9mIGtyZXRzY2htYW5uIGNvbmZpZ3VyYXRpb24gYmFzZWQgc2luZ2xlLWxheWVyZWQgc3ByIHN5c3RlbVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAzMFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkNIRVJVS1VSSSBQUkFTQU5USFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gUC4gTi4gUGF0ZWxcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNjNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQUtBTEFQQVRJIFJBVkkgS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDY1XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQU5BUEFSVEhJIE1BTkkgREVFUEFLIEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJCIFZJU0hOVURBVEhcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDE4XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkhlYWx0aCBtb25pdG9yaW5nIHN5c3RlbVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA4OFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkJFWkFXQURBIFBPT0pJVEhBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBaLiBNLiBQYXRlbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA5MlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlMgSEFSSSBDSEFOREFOQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwOTVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLT05BUkkgSk9TSE5BIFJFRERZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA5OFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BREVNIEdVUlUgTEFLU0hNSSBERVZJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxOVwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJJbnRlbGxpZ2VudCBhY2NpZGVudCBkZXRlY3Rpb24gYW5kIGFsZXJ0aW5nIHN5c3RlbVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzExMFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlZBTkdBTEEgQU5PT1NIQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gWi4gTS4gUGF0ZWxcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMTZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJWRUxMT1JFIFRJTkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTE3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS09QUEFMTEkgTkFHQSBTUkFWWUFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTIxXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiSUpKQURBIE5JS0lUSEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDIwXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkF1dG9ub21vdXMgcm9ib3QgZm9yIGluZHVzdHJpYWwgYXBwbGljYXRpb25cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMDlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNQVVTQU0gSklHTkVTSEtVTUFSIFBBVEVMXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBaLiBNLiBQYXRlbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAxM1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFTTUlUQSBKT0hSSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMTRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTSFJFWUEgQVNIT0sgQUdBUldBTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMThcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQU5LVEkgUkFKRVNIIFNIQUhcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDIxXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIk5MUCBDSEFUQk9UXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDU4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQ0hJTlRBUEFMTEkgREhBUk1FTkRSQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBQLiBKLiBFbmdpbmVlclwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA2OFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkRIVUxJUEFMQSBTUklNQU5JS0FOVEEgUEFSVEhVU0lWQUlOXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA3M1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BQ0hFUkxBIEtJUkFOIEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA3NVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlRBTExVUkkgTkFHQVNBSSBWRU5LQVRBIFNVREhFRVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDIyXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIklvVCBCQVNFRCBQQVJLSU5HIFNMT1QgTUFOQUdFTUVOVFwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA3MVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkNISU5OQU0gU1JJIEhBUklOSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBQLiBKLiBFbmdpbmVlclwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA3N1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktPTkRBIEtFRVJUSEkgUkVERFlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDc5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTUFMSUdJUkVERFkgQU1VTFlBIFJFRERZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA4MlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkxFS0tBTEEgTEVFTEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDIzXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIklvVCBCQVNFRCBTTUFSVCBBR1JJQ1VMVFVSRVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAyOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkJPWUEgU1JJIFJBU0hNSVRIQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBQLiBKLiBFbmdpbmVlclwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA1NFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBVTEFLQU0gTUFMQVRISVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNTVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJBTlVQQU1BIFJVRFJBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA2NlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkRVVlZBIE5JSEFSSUtBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyNFwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJIYW5kIHdyaXR0ZW4gZGlnaXQgcmVjb2duaXRpb24gc3lzdGVtIHVzaW5nIGZwZ2FcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMTFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTQUhBWSBSQUogVElSS0VZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEouIEVuZ2luZWVyXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDIyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiWUFEQVYgU1VESEFOU0hVU0lOSCBSQU1SQUpTSU5IXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAzMlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktVUkFQQVRJIFBSQURFRVAgTUFOSUtBTlRBIFNBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMjVcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiREVURVJNSU5JU1RJQyBTWVNURU0gRk9SIFNNQVJUIEFHUklDVUxUVVJFIFVTSU5HIElvVFwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAyNVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNBTE9OSSBOQVlBTiBKQUlOXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBBLiBTLiBNYW5kbG9pXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDU5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUklEREhJIE1PUkVcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDYwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQkhBR0FWQVRIIFJBQ0hBTkEgUkFNQUtBTlRIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA3MlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFOVVJBREhBIEdcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDI2XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkRpc3RhbmNlIG1lYXN1cmVtZW50IGZvciBibGluZCBwZW9wbGVcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMDJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJHT1VSQVYgREFTXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBBLiBTLiBNYW5kbG9pXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTEyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUkFWSSBNRU5BUklBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkNvLUd1aWRlIDogUHJvZi4gUC4gSy4gU2hhaFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzExOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktBUkFOIExPT05LRVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTIwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0lEREhBUlRIIEtIRVRBTlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMjdcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiU21hcnQgZ2FyYmFnZSBtb25pdG9yaW5nICYgc3lzdGVtXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDQ5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUEFURUwgS1JVVEkgVklQVUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuKE1ycy4pIFMuIEd1cHRhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDUyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQ09OVFJBQ1RPUiBKQU5LSSBLSVNIT1JcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDk5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTVVTS0FOIENIT1RSQU5JXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEzOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktFWUEgUEFSSURBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyOFwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJEZXRlY3Rpb24gb2YgaGF6YXJkb3VzIGdhc2VzIHVzaW5nIGlvdFwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAxNlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkNIQVJQT1QgS1JVTkFMIEZVTEpJQkhBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4oTXJzLikgUy4gR3VwdGFcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMjhcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQVJUSCBLQUxBTklcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTM2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUFJJWUFOS0tVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEzOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1FUkNIQU5UIFJVS1NISVQgTUFOSVNIS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDI5XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkR1YWwgYmFuZCBjaXJjdWxhcmx5IHBvbGFyaXplZCBhbm51bGFyIHJpbmcgc2xvdCBhbnRlbm5hXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDAxXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTklIQVIgTUFOT0ogUEFOVkFMS0FSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLihNcnMuKSBTLiBHdXB0YVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAwNVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1SSU5BTCBMQUtIRVJBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAyMFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNBUk9OSUEgVklTSEFMIEpBWUVTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMjNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJKT1NISSBEQVJTSElUIEtFVEFOQkhBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMzFcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiTW9iaWxlIGFwcCBjb250cm9sbGVkIG1ldGFsIGRldGVjY3RvclwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAzOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkJPTkdVIFZFTktBVEVTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLihNcnMuKSBTLiBOLiBTaGFoXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDQ2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQUlUVExBIFNBSU5BVEhcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDUwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTVVEREFHT05JIEtBTFlBTiBHT1VEXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEyNFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkdVREVMTEkgQkhBU0tBUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMzJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiVGV4dCB0byBpbWFnZSBzeW50aGVzaXMgdXNpbmcgZ2Fuc1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAxNVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNBTVBBVCBNQU5TSSBBTklMXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBLLiBQLiBVcGxhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDE2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUEFURUwgUEFSVEhBViBTVU1BTlRSQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiQ28tR3VpZGUgOiBEci4gS2lydGkgSW5hbWRhclwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAyOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkRIQVJBSVlBIEtSVVRJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA2N1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFCSElOQVYgSkFJTlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMzNcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiQ29udHJvbCBvZiBxdWFkY29wdGVyIHVzaW5nIGhhbmQgZ2VzdHVyZXNcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwOTdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQUkFKVkFMIEsgTlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gSy4gUC4gVXBsYVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEyM1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNBSSBLQVVTSElLIEtBTkRVS1VSSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJDby0gR3VpZGUgOiBEci4gS2FtYWwgQ2FwdGFpblwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEzN1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBSQVRIQUtPVEEgU0FNIE5JVEhJTiBDSE9DS0NFRVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxNDJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJCSVRMQSBCSEFOVSBURUpBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAzNFwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJWaWRlbyBkZWJsdXJyaW5nIHVzaW5nIGRlZXBsZWFybmluZ1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA4MFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBVTElQQVRJIFNIQVJBVEhLVU1BUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBLLiBQLiBVcGxhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDgxXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVElQSVJFRERZIFRIQVJVTiBSRUREWVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJDby1HdWlkZSA6IERyLiBKLiBOLiBTYXJ2YWl5YVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA4N1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIllBTUFOSSBCSEFSQVRIS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDkzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUkFDSFVSSSBBSkFZIEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiXHJcblx0fVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhMjAxOV8yMDsiLCJjb25zdCBEYXRhMjAxOF8xOSA9IFtcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDFcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiUEVSU09OQUwgQVNTSVNUQU5UIFJPQk9UXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDI1XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQkhBTkRBUkkgTUFZQU5LIEJIVVBBTFNJTkdIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEsuIFNoYWhcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNjFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJKQUxBU1VUUkFNIEdJUklTSCBLQUxZQU5cIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDY5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQ0hJVFRJTUFMTEEgU0FOVEhPU0hcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDk0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS0FSTkFUSSBOQUdBIEtJUkFOIFJFRERZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkNBUiBQQVJLSU5HIENPTlRST0xMRVJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwMjZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNQU5EQUxBWVdBTEEgVU1BTkcgU1VOSUxLVU1BUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBQLiBLLiBTaGFoXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDI3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiR0FOREhJIEpBWSBOSVJBVkJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDI4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUkFIVUwgR1VQVEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDQwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiWUFEQVYgT01QUkFLQVNIIE5BTkRMQUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDNcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiUkVBTCBUSU1FIEFVVE9NQVRJT04gSU4gQUdSSUNVTFRVUkVcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwODJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJHT1BJU0VUVFkgU0FJIEtJUkFOXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEsuIFNoYWhcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwODlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTQVJBU1dBVEhVTEEgVkVOS0FUQSBTQUkgU1JJIEhBUlNIQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwOTVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJBUklLQVRMQSBWSVNITlUgVkFSREhBTiBSRUREWVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxNDZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLQU1CQUxBIE1BSEVTSCBSQUpBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyA0XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlNNQVJUIEVOVklST05NRU5UIENPTlRST0wgSU4gR1JFRU4gSE9VU0VcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMDFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJBUkFESFlBIEJIQVRJQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBBLiBILiBMYWxsdXdhZGlhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTE1XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVkFHSCBESEFWQUxLVU1BUiBSQUhVTEJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTE2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQU1BTiBCSEFSVElcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTQzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQUdBUldBTCBQUkFFUklUIFBJWVVTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgNVwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJGTEFTSCBTTE9PRCBJTlRJTUFUSU9OIE9WRVIgR1NNIE5FVFdPUktcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE0RUMwMDdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTSFVCSEFOS0FSIFRPTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIEEuIEguIExhbGx1d2FkaWFcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTEzRUMwMzFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQVRFTCBBUEVLU0hBQkVOIEFOSUxCSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTNFQzAzN1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktVIFJBSk5JIE1FRU5BXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTM1RUMxMjJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTVURIQSBDSEFVREhBUllcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDZcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiQVVUT01BVElDIFdBSVRFUiBJTiBSRVNUQVVSQU5UU1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAzOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFKTUVFUkEgQVNIT0tcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gQS4gSC4gTGFsbHV3YWRpYVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzE0N1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkdBWlVMQSBTUklOSVZBUyBCQVBBSUFIIE5BSURVXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzE0OFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkJBTkRBUlUgU1VSRVNIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzE1MVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkdVREFQQVRJIE5BR0EgTUFOSUtBTlRBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyA3XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlRSQUZGSUMgREVOU0lUWSBCQVNFRCBTWVNURU1cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNzZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQRVRMVSBSQUogS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gQS4gSC4gTGFsbHV3YWRpYVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEyM1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BTEkgSEFSSVNIIEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEyNVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BREhBIE1BTklERUVQXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzE0OVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktPTkFLQUxMQSBEVVJHQSBQUkFTQURcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDhcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiUEhZU0lDQUwgTEFZRVIgRk9SIFZBTkVUXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDA1XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUFJBWUFTIFBBVE5BSUtcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIChNcnMuKSBVLiBELiBEYWxhbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA0NVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBPVEhVUiBCSEFWQU5BXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA3OVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktBU0FNIE5JS0hJVEhBIFJFRERZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA4MFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkpBWSBQQVRFTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgOVwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJQSFlTSUNBTCBMQVlFUiBJTVBMRU1FTlRBVElPTiBPRiBJRUVFIDgwMi4xMWFoXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDY0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUkFDSEFNQUxMVSBUSEFOTUFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiAoTXJzLikgVS4gRC4gRGFsYWxcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNjVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNQVJLQVBVUkFNIEtBVklUSEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTM4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiRFVCQVNJIFlBU0hXQU5USFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxNDVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJFRFVMQVBBTExJIEtFRVJUSElcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDEwXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIk5FVFdPUksgU0VMRUNUSU9OIEFORCBDSEFOTkVMIEFMTE9DQVRJT04gRk9SIFNcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNTRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJZRVJSQUdVREkgSEFWRUVMQUhcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIChNcnMuKSBVLiBELiBEYWxhbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA2N1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBTExFUkxBIEtFRVJUSEFOQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwODVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQUxMRVJMQSBTQUkgVEVKQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwODhcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLUklTVEFNIFJBSklUSEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDExXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlZJUlRVQUwgSU1QTEVNRU5UQVRJT04gT0YgTk9OLU9SVEhPR09OQUwgTVVMVFwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAxMFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkJJRFVSVSBZVUtUSSBTUklLQU5USFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gKE1ycy4pIFUuIEQuIERhbGFsXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDEzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0FVTVlBIFNIUklWQVNUQVZBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAxOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFCSElMQVNIQSBQT0REQVIgQUtTSEFZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEwOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNISUtIQSBDSEFVREhBUllcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDEyXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIk1FVEFMIERFVEVDVElPTiBST0JPVElDIFZFSElDTEUgVVNJTkcgQVJEVUlOT1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAyMlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkhBUlNISUtBIFNVQkFTSEkgTUFIRU5ESVJBTlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBOLiBCLiBLYW5pcmthclwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA1OFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BTlZBUiBQUkFTSEFOVCBTQVRJU0hCSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA2NlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBVEVMIE1JTk5BVCBQUkFWSU5CSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEzMVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlJBQ0hBTUFMTEEgTklUSU5cIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDEzXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIklPVCBCQVNFRCBIT01FIEFVVE9NQVRJT05cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNzdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNRUVTQUxBIFJBVEFOIEJBQlVcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIEouIE4uIFNhcnZhaXlhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDkwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQUxVR0FOVEkgVklOQVkgVCBIRUpBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA5OFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkJPREVNIE1BTklLQU5UQUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTAwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiRE9NTUFSQUpVIE1BSEVTSCBWQVJNQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTRcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiTkVVUkFMIE5FVFdPUksgRyBPTiBGUEdBIEZPUiBCSU9NRURJQ0FMIEFQUExJQ0FUSVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAwM1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlRBTEFUSSBBUlRIIEFTSElTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gQS4gRC4gRGFyamlcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwMDRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLQVNVTkRSQSBIQVNUSSBKSVRFTkRSQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwMTJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNT0RJIFNBSElMIEtBVVNISUtLVU1BUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNzFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNT0RJIEFOQU5EIFJBSkVTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTVcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiQlJBSU4gQ09NUFVURVIgSU5URVJGQUNJTkdcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNzVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQUklZQU5TSEkgR1VQVEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIEEuIEQuIERhcmppXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTE3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0FOSkFOQSBESElSQU5cIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTIwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTkFHTUEgUEFURUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTQyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUFJJWUFOU0hVIERBTEFMXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxNlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJERVNJR04gQU5EIElNUExFTUVOVEFUSU9OIE9GIE9QVElDQUwgQ09NTVVOSUNBXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTA3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiSkFJTiBQUklZQSBTQU5ERUVQXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBQLiBOLiBQYXRlbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzExMVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBTFNFVEtBUiBLRVdBTEtVTUFSIEJIVVBFTkRSQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMTJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNSVRIQU5JIEFESUwgSVFCQUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTEzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQkFNQU5JQSBIRUxJIEFNUlVUTEFMXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxN1wiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJQRVJGT1JNQU5DRSBBTkFMWVNJUyBPRiBPUFRJQ0FMIFNZU1RFTSBVU0lORyBPUFwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzExOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIllBREFWIEFNSVRLVU1BUiBSQU1FU0hDSEFORFJBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBQLiBOLiBQYXRlbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzExOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNBTkpFRVYgS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTI3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUkFIVUwgS0FOQVVKSVlBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEyOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNIUklNQUxJIFJBSFVMIEdPVklOREJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDE4XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIklOVEVMTElHRU5UIFNZU1RFTSBGT1IgVkVISUNBTEFSIEFDQ0lERU5UIERFVEVDXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDQyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUFVMTE9PUkkgSEFSSU5JS0FcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIFouIE0uIFBhdGVsXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDQzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUEFUSEFLT1RBIEpBWUFQQVZBTklcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDQ4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS0FUQSBUQVJVTiBTUkVFXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA1MlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFOS0FNIE1BREhVU1JFRVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTlcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiSU9UIEJBU0VEIElOVEVMTElHRU5UIFBBUktJTkcgU1lTVEVNXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDg2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUklTSElUSEEgTkFHQVJFRERZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBaLiBNLiBQYXRlbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA5MlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlJBVklMTEEgU1JJIEFTSEEgTEFUSEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDk2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiR0FKQVJMQSBSQVNITUlUSEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDk5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUEFOR1VMVVJJIExBS1NITUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDIwXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlNURVJFTyBVU0lORyBBTEdPUklUSE0gT04gRlBHQVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAwN1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkRFU0FJIEtSVVBBIEFNQlJJU0hCSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEouIEVuZ2luZWVyXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDE0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUFVSVklLIEtBTEFSSVlBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAzNlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlVNUkVUSFdBTEEgS0FJU0hBVkkgSElSRU5LVU1BUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwMzlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJSQVRIT0QgQUJISVNIRUsgUkFNRVNIQkhBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMjFcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDQ0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQ0hFUlVLVVJJIFNSSSBIQVJJS0FcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gUC4gSi4gRW5naW5lZXJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNDlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJDIEFLSElMIENIT1dEQVJZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA3MFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktPVElQQUxMSSBTQUkgU0FSQU4gS1JJU0hOQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNzRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJSQVZBVEhVIEFNT09MWUFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDIyXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkhBUkRXQVJFIEFORCBTT0ZUV0FSRSBDTy1ERVNJR04gT0YgRkFDRSBSRUNPR1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA1NVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlZBS0FUSSBBS0hJTEVTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBQLiBKLiBFbmdpbmVlclwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA1OVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktVUkFQQVRJIEJIQU5VUkFKQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNzJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTRUVMQU0gUFJJWUFESEFSU0hBTiBSRUREWVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNzNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJMQUtLSVNFVFRZIFBSVURIVkkgUkFKXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyM1wiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJJT1QgQkFTRUQgU01BUlQgVkVISUNMRVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCIgQ09OVFJPTCBNVVRVQUxMWSBFTkhBXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVTE1RUMwNTBcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiSEFSU0hWQVJESEFOIFMgREhBS0VSXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiRHIuIEEuIFMuIE1hbmRsb2lcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA1N1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk5BQkFOSVRBIERFV0FOXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA2MFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlZBRFVLVUwgUklTSEkgTUFOU1VLSEJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDYzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVEhPQkhBTkkgQU1JVCBESUxJUEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyNFwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJQRU1QQVJBVFVSRSBBTkQgSFVNSURJVFkgTU9OSVRPUklORyBGT1IgVU5ERVJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwMjFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTQU1JUiBQT1VERUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIEEuIFMuIE1hbmRsb2lcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNDZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJBU0hVVE9TSCBTSU5HSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwODFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTQUNISU5cIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDg3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0FWRSBQUkFWRUVOXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyNVwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJBSVIgUVVBTElUWSBSRVBPUlRJTkcgU1lTVEVNXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDA4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiRU5HSU5FRVIgS1JJU0hBIFNBUkpVXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBBLiBTLiBNYW5kbG9pXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTAzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUk9IQU4gS1VNQVIgSkhBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEyOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFCSElTSEVLIFNJTkdIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEzMFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBTkRJUkkgWUFTSEFTVklOSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMjZcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiSEFSRFdBUkUgRyBJTVBMRU1FTlRBVElPTiBPRiBTSUdOIExBTkdVQUdFIFRSQU5cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNDFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTSFJFWUFTSCBTVURBTUEgS0VKUklXQUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuKE1ycy4pIFMuIEd1cHRhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDQ3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQU5NT0wgU0lOR0hBTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNTFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNVVNVS1UgVklOQVkgS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDUzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVklQVUwgQ0hBVURIQVJZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyN1wiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJMQVNFUiBEUklWRVIgRk9SIE9QVElDQUwgQ09NTVVOSUNBVElPTiBXSVRIIFRFTVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAyOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkNIQVRUQSBSQUhVTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4oTXJzLikgUy4gR3VwdGFcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNjJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQVROQUxBIEtSSVNITkEgVEVKQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNjhcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJWQU1TRUUgS1JJU0hOQSBUQVRJS09OREFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDc4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQk9MTEFNUEFMTFkgVklWRUtcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDI4XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkFJUiBUUkFGRklDIENPTlRST0wgRk9SIERST05FU1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA4M1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBSQUZVTEwgU0hBUk1BXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLihNcnMuKSBTLiBHdXB0YVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEwNVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBFTlRFTEEgTkFHQVBSQVNBTlRIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzE1MFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkdBREkgTkFHQSBTQUkgTUFOSUtBTlRBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzE1MlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkdVRElNRVRUQSBTVUhSVVRIIEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyOVwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJVTkRFUiBXQVRFUiBQSVBFTElORSBHIExFQUtBR0UgREVURUNUSU9OIEFORCBMT0NcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMzRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLT1RIQSBWRU5LQVRBIEFOSUwgS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuKE1ycy4pIFMuIE4uIFNoYWhcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMzZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNVVZWQSBTQUlURUpBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEzOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNBUFBBIE5BUkVORFJBIEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzE0MFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlZJTkpBTSBCSEFSQVRIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAzMFwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMjZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQSU5JTlRJIFNBSSBQUkFWQUxJSyBSRUREWVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4oTXJzLikgUy4gTi4gU2hhaFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEzN1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIksgQkhBUkFUIEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzE0MVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk0gUk9NQU5USCBDSE9XQU5cIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTQ0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiREVWQU5TSEkgSElOREtBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YTIwMThfMTk7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gUmVzZWFyY2goe1NyTm8sIFByb2plY3RUaXRsZSwgUm9sbE5vLCBTdHVkZW50TmFtZSwgUHJvamVjdEd1aWRlLCBjb2xvcn0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDx0ciBjbGFzc05hbWU9e2NvbG9yID09PSBcIjFcIiA/YGJnLWdyYXktMjAwYDpgYmctZ3JheS01MGB9PlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtjb2xvciA9PT0gXCIxXCIgP2Bib3JkZXItciBib3JkZXItZ3JheS01MGA6YGJvcmRlci1yIGJvcmRlci1ncmF5LTIwMGB9cz57U3JOb308L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtjb2xvciA9PT0gXCIxXCIgP2Bib3JkZXItciBib3JkZXItZ3JheS01MGA6YGJvcmRlci1yIGJvcmRlci1ncmF5LTIwMGB9PntQcm9qZWN0VGl0bGV9PC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17Y29sb3IgPT09IFwiMVwiID9gYm9yZGVyLXIgYm9yZGVyLWdyYXktNTBgOmBib3JkZXItciBib3JkZXItZ3JheS0yMDBgfT57Um9sbE5vfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2NvbG9yID09PSBcIjFcIiA/YGJvcmRlci1yIGJvcmRlci1ncmF5LTUwYDpgYm9yZGVyLXIgYm9yZGVyLWdyYXktMjAwYH0+e1N0dWRlbnROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2NvbG9yID09PSBcIjFcIiA/YGJvcmRlci1yIGJvcmRlci1ncmF5LTUwYDpgYm9yZGVyLXIgYm9yZGVyLWdyYXktMjAwYH0+e1Byb2plY3RHdWlkZX08L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZWFyY2g7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRmFjaWxpdGllc0hlYWRlcih7dGl0bGV9KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHAtMTAgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS02MDAgdGV4dC0zeGwgZm9udC1ib2xkXCI+e3RpdGxlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjaWxpdGllc0hlYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZXNlYXJjaCBmcm9tIFwiLi9SZXNlYXJjaC9SZXNlYXJjaFwiO1xyXG5pbXBvcnQgRGF0YTIwMTdfMTggZnJvbSBcIi4vRGF0YS9EYXRhMjAxN18xOFwiO1xyXG5pbXBvcnQgRGF0YTIwMThfMTkgZnJvbSBcIi4vRGF0YS9EYXRhMjAxOV8yMFwiO1xyXG5pbXBvcnQgRGF0YTIwMTlfMjAgZnJvbSBcIi4vRGF0YS9EYXRhMjAxOF8xOVwiO1xyXG5pbXBvcnQgUmVzZWFyY2hIZWFkZXIgZnJvbSBcIi4vUmVzZWFyY2hIZWFkZXIvUmVzZWFyY2hIZWFkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFJlc2VhcmNoZXMoKXtcclxuXHJcbiAgICBjb25zdCBkaXZTdHlsZXIgPSB7XHJcbiAgICAgICAgaGVpZ2h0OjYwMFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKERhdGEyMDE3XzE4KTtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJQcm9qZWN0cyAyMDE3LTE4XCIpXHJcblxyXG4gICAgY29uc3QgY2hhbmdlc0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUgPT09IFwiMVwiKXtcclxuICAgICAgICAgICAgc2V0RGF0YShEYXRhMjAxN18xOCk7XHJcbiAgICAgICAgICAgIHNldFRpdGxlKFwiUHJvamVjdHMgMjAxNy0xOFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihldmVudC50YXJnZXQudmFsdWUgPT09IFwiMlwiKXtcclxuICAgICAgICAgICAgc2V0RGF0YShEYXRhMjAxOF8xOSk7XHJcbiAgICAgICAgICAgIHNldFRpdGxlKFwiUHJvamVjdHMgMjAxOC0xOVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0RGF0YShEYXRhMjAxOV8yMCk7XHJcbiAgICAgICAgICAgIHNldFRpdGxlKFwiUHJvamVjdHMgMjAxOS0yMFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuXHJcbiAgICAgICAgICAgIDxSZXNlYXJjaEhlYWRlciB0aXRsZT17dGl0bGV9Lz5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTNcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZDpncmlkLWNvbC0xIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvMVwiIGNsYXNzTmFtZT1cImZvcm0tcmFkaW8gaC00IHctNFwiIHZhbHVlPVwiMVwiIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlc0hhbmRsZXIoZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj4mbmJzcDtQcm9qZWN0cyBmcm9tIDIwMTctMTg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1kOmdyaWQtY29sLTEgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicmFkaW8xXCIgY2xhc3NOYW1lPVwiZm9ybS1yYWRpbyBoLTQgdy00XCIgdmFsdWU9XCIyXCIgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VzSGFuZGxlcihlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPiZuYnNwO1Byb2plY3RzIGZyb20gMjAxOC0xOTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWQ6Z3JpZC1jb2wtMSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpbzFcIiBjbGFzc05hbWU9XCJmb3JtLXJhZGlvIGgtNCB3LTRcIiB2YWx1ZT1cIjNcIiBvbkNoYW5nZT17KGUpID0+IGNoYW5nZXNIYW5kbGVyKGUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+Jm5ic3A7UHJvamVjdHMgZnJvbSAyMDE5LTIwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbC1oaWRlIHctZnVsbCBvdmVyZmxvdy1hdXRvIHAtMlwiIHN0eWxlPXtkaXZTdHlsZXJ9PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1ncmF5LTQwMCBwLTMgcm91bmRlZCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMSB3LThcIj5Tck5vPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMVwiPlByb2plY3RUaXRsZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTFcIj5Sb2xsTm88L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0xXCI+U3R1ZGVudE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0xXCI+UHJvamVjdEd1aWRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgocmVzZWFyY2gpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2VhcmNoPXtyZXNlYXJjaH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cmVzZWFyY2guU3R1ZGVudE5hbWV9ey4uLnJlc2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZWFyY2hlczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==