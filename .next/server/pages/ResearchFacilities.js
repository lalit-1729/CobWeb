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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/ResearchFacilities.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/ResearchFacilities.js":
/*!*************************************!*\
  !*** ./pages/ResearchFacilities.js ***!
  \*************************************/
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
/* harmony import */ var _src_Components_Faclities_Facilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Components/Faclities/Facilities */ "./src/Components/Faclities/Facilities.js");
/* harmony import */ var _src_Components_PageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Components/PageLayout/PageLayout */ "./src/Components/PageLayout/PageLayout.js");
/* harmony import */ var _src_Components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Components/Loader/Loader */ "./src/Components/Loader/Loader.js");

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\pages\\ResearchFacilities.js";







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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Faclities_Facilities__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
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

/***/ "./src/Components/Faclities/Facilities.js":
/*!************************************************!*\
  !*** ./src/Components/Faclities/Facilities.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Facility_Facility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Facility/Facility */ "./src/Components/Faclities/Facility/Facility.js");
/* harmony import */ var _FacilitiesHeader_FacilitiesHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FacilitiesHeader/FacilitiesHeader */ "./src/Components/Faclities/FacilitiesHeader/FacilitiesHeader.js");

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Faclities\\Facilities.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Facilities() {
  const divStyler = {
    height: 550
  };
  const FacilitiesArray = [{
    "SerialNo": "1",
    "NameOfLab": "Communication Research Lab",
    "PresentFacilities": "MXG Vector signal generator 100kHz-3GHz",
    "YearOfEstablishment": "12-08-11",
    "CostOfAsset": "7,98,000/- | Annual plan grant",
    "UsageCharges": "200/- per hour"
  }, {
    "SerialNo": "2",
    "NameOfLab": "Communication Research Lab",
    "PresentFacilities": "Cognitive Wireless communication Software Defined radio Lab SDR04",
    "YearOfEstablishment": "14/05/2014",
    "CostOfAsset": "13,65.000/- | Annual plan grant",
    "UsageCharges": "400/- per hour"
  }, {
    "SerialNo": "3",
    "NameOfLab": "Communication Research Lab",
    "PresentFacilities": "RF signal generator 9KHz to 3.0 GHz",
    "YearOfEstablishment": "17/11/2014",
    "CostOfAsset": "11,97,730/- | Annual plan grant",
    "UsageCharges": "250/- per hour"
  }, {
    "SerialNo": "4",
    "NameOfLab": "Communication Research Lab",
    "PresentFacilities": "Frequency range 9KHz to 3.0GHz CXA signal analyzer",
    "YearOfEstablishment": "17/11/2014",
    "CostOfAsset": "11,97,730/- | Annual plan grant",
    "UsageCharges": "250/- per hour"
  }, {
    "SerialNo": "5",
    "NameOfLab": "Communication Research Lab",
    "PresentFacilities": "Wireless Measurement studio(Field fox VNA)",
    "YearOfEstablishment": "18/04/2014 ,TEQUIP II",
    "CostOfAsset": "15,25,730.85/-",
    "UsageCharges": "500/- per hour"
  }, {
    "SerialNo": "6",
    "NameOfLab": "Communication Research Lab",
    "PresentFacilities": "N5172B EXG X-Series RF vector signal generator",
    "YearOfEstablishment": "06-04-18",
    "CostOfAsset": "27,86,885/- | PROJECT ISRO CODE:4/229",
    "UsageCharges": "1000/- per hour"
  }, {
    "SerialNo": "7",
    "NameOfLab": "Communication Research Lab",
    "PresentFacilities": "ARAMIS GPS L1, IRNSS L5, IRNSS S Software Receiver( GNSS Multi Frequency FEM/MFR Device)",
    "YearOfEstablishment": "24/09/2019",
    "CostOfAsset": "$20810 | PROJECT ISRO CODE:4/220",
    "UsageCharges": "1000/- per hour"
  }, {
    "SerialNo": "8",
    "NameOfLab": "Communication Research Lab",
    "PresentFacilities": "EXG X-Series RF vector signal generator",
    "YearOfEstablishment": "03-08-18",
    "CostOfAsset": "27,86,885/-",
    "UsageCharges": "1000/- per hour"
  }, {
    "SerialNo": "9",
    "NameOfLab": "Basic Communication Lab",
    "PresentFacilities": "Mixed Domain Oscilloscope, 2 channel, 2.5 Gs/s, 100MHz MDO3012",
    "YearOfEstablishment": "30/03/2015 | Annual plan grant",
    "CostOfAsset": "28,72,800/-",
    "UsageCharges": "1000/- per hour"
  }, {
    "SerialNo": "10",
    "NameOfLab": "Electronics System Design Lab",
    "PresentFacilities": "Mixed domain oscilloscope",
    "YearOfEstablishment": "02-04-15",
    "CostOfAsset": "4,78,800/- | Annual plan grant",
    "UsageCharges": "1000/- per hour"
  }, {
    "SerialNo": "11",
    "NameOfLab": "Electronics System Design Lab",
    "PresentFacilities": "1) Smart Camera,2)Lab view,Core Software",
    "YearOfEstablishment": "29/03/11",
    "CostOfAsset": "5,91,744/- | Annual plan grant",
    "UsageCharges": "1000/- per hour"
  }, {
    "SerialNo": "12",
    "NameOfLab": "Electronics System Design Lab",
    "PresentFacilities": "PCB Proto type Machine",
    "YearOfEstablishment": "14/04/13",
    "CostOfAsset": "12,98,850/- | TEQUIP",
    "UsageCharges": "2000/-"
  }, {
    "SerialNo": "13",
    "NameOfLab": "Embedded System Lab",
    "PresentFacilities": "NetFPGA SUME Board (1 Nos.)",
    "YearOfEstablishment": "09-08-16",
    "CostOfAsset": "6,96,300/-",
    "UsageCharges": "6,96,300/-"
  }, {
    "SerialNo": "14",
    "NameOfLab": "Microwave and Optical Communication lab",
    "PresentFacilities": "RF vector Analyzer",
    "YearOfEstablishment": "13/03/2014",
    "CostOfAsset": "9,97,875.00",
    "UsageCharges": "500/- per sample"
  }, {
    "SerialNo": "15",
    "NameOfLab": "Microwave and Optical Communication laboratory",
    "PresentFacilities": "CAD FEKO (6.0) Software",
    "YearOfEstablishment": "23/02/2011",
    "CostOfAsset": "12,60,000/-",
    "UsageCharges": "300/- per hours"
  }, {
    "SerialNo": "16",
    "NameOfLab": "Microwave and Optical Communication laboratory",
    "PresentFacilities": "Empire Excel v5.01-A 3D Modeling software (full package)for RF & Microwave Application",
    "YearOfEstablishment": "17/07/2007",
    "CostOfAsset": "5,19,376/- | TEQIP",
    "UsageCharges": "300/- per hours"
  }, {
    "SerialNo": "17",
    "NameOfLab": "Microwave and Optical Communication laboratory",
    "PresentFacilities": "a) Microwave Integrated Circuit Trainer Kit (1 set),b) Microwave Signal Source,c) VSWR Meter,d) Accessories",
    "YearOfEstablishment": "17/01/2006",
    "CostOfAsset": "7,12,770/- | TEQIP",
    "UsageCharges": "300/- per hours"
  }, {
    "SerialNo": "18",
    "NameOfLab": "Sensor Research Lab",
    "PresentFacilities": "a) Omricon lab model-Bode 100,b) B-wit100 wideband injection transformer",
    "YearOfEstablishment": "11-10-16",
    "CostOfAsset": "7,19,775/-",
    "UsageCharges": "500/- per sample"
  }, {
    "SerialNo": "19",
    "NameOfLab": "Sensor Research Lab",
    "PresentFacilities": "Laser Spectrum Analyzer Type: LSA with 1550nm Wide band Light Source",
    "YearOfEstablishment": "23/04/2015",
    "CostOfAsset": "24,60,863/-",
    "UsageCharges": "500/- per sample"
  }, {
    "SerialNo": "20",
    "NameOfLab": "Sensor Research Lab",
    "PresentFacilities": "Smart Scope 4,Optical Channels,Upto 16FGBS (DST Project Grant)",
    "YearOfEstablishment": "19/10/2013",
    "CostOfAsset": "16,54,405/-",
    "UsageCharges": "1000/- per sample"
  }, {
    "SerialNo": "21",
    "NameOfLab": "Sensor Research Lab",
    "PresentFacilities": "Field Optical Spectrum Analyzer & Broad Band Optical Source Sled (1550NM) with OSA cable",
    "YearOfEstablishment": "30/03/2012",
    "CostOfAsset": "15,75,000/-",
    "UsageCharges": "1000/- per sample"
  }, {
    "SerialNo": "22",
    "NameOfLab": "Sensor Research Lab",
    "PresentFacilities": "High Resolution Spectrometer with Light Source, Probes and Accessories (DRDO Project Grant)",
    "YearOfEstablishment": "12-02-11",
    "CostOfAsset": "12,07,103/-",
    "UsageCharges": "1000/- per sample"
  }, {
    "SerialNo": "23",
    "NameOfLab": "Sensor Research Lab",
    "PresentFacilities": "High resolution Spectrometer with, a) light sourceb) detector, c) laptop and other Accessories.",
    "YearOfEstablishment": "27/06/2011",
    "CostOfAsset": "6,74,782/-",
    "UsageCharges": "1000/- per sample"
  }, {
    "SerialNo": "24",
    "NameOfLab": "Sensor Research Lab",
    "PresentFacilities": "Optisuite,  OptiFDTDOpti System. OptiSpice&Opti BPM,  OptiGratting (DRDO LAB)",
    "YearOfEstablishment": "12-02-2014",
    "CostOfAsset": "19,85,025/-",
    "UsageCharges": "300/- per hours"
  }, {
    "SerialNo": "25",
    "NameOfLab": "Sensor Research Lab",
    "PresentFacilities": "RSoftDiffect MOD add-on & FEMSIM add-on v2014.09 S/W",
    "YearOfEstablishment": "FOS/IN/1413 01-12-14",
    "CostOfAsset": "6,98,250/-",
    "UsageCharges": "300/- per hours"
  }, {
    "SerialNo": "26",
    "NameOfLab": "Sensor Research Lab",
    "PresentFacilities": "COMSOL Multiphysics, RF Modules, Wave Optics Module (VLSI LAB)",
    "YearOfEstablishment": "18-11-2014",
    "CostOfAsset": "6,09,368/-",
    "UsageCharges": "300/- per hours"
  }, {
    "SerialNo": "27",
    "NameOfLab": "Sensor Research Lab",
    "PresentFacilities": "RSoft CAD GUI v2013.12 Software with add-on full wave single User Node Locked Academic License for Window 7/8",
    "YearOfEstablishment": "FOS/IN/1410 23-06-2014",
    "CostOfAsset": "8,29,500/-",
    "UsageCharges": "300/- per hours"
  }, {
    "SerialNo": "28",
    "NameOfLab": "Sensor Research Lab",
    "PresentFacilities": "Opti System (PROJECT LAB)",
    "YearOfEstablishment": "GSI/11.12/10 20-01-2012",
    "CostOfAsset": "8,68,613/-",
    "UsageCharges": "300/- per hours"
  }, {
    "SerialNo": "29",
    "NameOfLab": "TCAD Lab",
    "PresentFacilities": "SCS Parameter Analyzer System",
    "YearOfEstablishment": "16/01/2017",
    "CostOfAsset": "21,21,000/-",
    "UsageCharges": "1000/- Per Sample"
  }, {
    "SerialNo": "30",
    "NameOfLab": "TCAD Lab",
    "PresentFacilities": "Advance (3D) Synopsys TCAD University Bundle",
    "YearOfEstablishment": "19/01/2016",
    "CostOfAsset": "5,01,960/-",
    "UsageCharges": "300/- per hours (only academic purpose)"
  }, {
    "SerialNo": "31",
    "NameOfLab": "VLSI Lab",
    "PresentFacilities": "Logic Analyzer (34 Channel)",
    "YearOfEstablishment": "12-11-2013",
    "CostOfAsset": "11,39,250/-",
    "UsageCharges": "Rs 1000/hour"
  }, {
    "SerialNo": "32",
    "NameOfLab": "VLSI Lab",
    "PresentFacilities": "● Synopsys (5 licenses) *,● Xilinx SDSoC (25 licenses)*,● Mentor (20 licenses) *● Cadence (10 licenses) *,● Xilinx Vivardo Design Suite 2015 (25 licenses)*",
    "YearOfEstablishment": "",
    "CostOfAsset": "",
    "UsageCharges": "Rs. 300/- per hours  (only academic purpose)"
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FacilitiesHeader_FacilitiesHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "scroll-hide overflow-y-scroll  mt-4 bg-gray-100",
      style: divStyler,
      children: FacilitiesArray.map(facility => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Facility_Facility__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({
        facility: facility
      }, facility), facility.SerialNo, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 271,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Facilities);

/***/ }),

/***/ "./src/Components/Faclities/FacilitiesHeader/FacilitiesHeader.js":
/*!***********************************************************************!*\
  !*** ./src/Components/Faclities/FacilitiesHeader/FacilitiesHeader.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Faclities\\FacilitiesHeader\\FacilitiesHeader.js";


function FacilitiesHeader() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-gray-300 p-10 rounded",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-span-1 flex justify-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
          className: "uppercase text-gray-600 text-3xl font-bold",
          children: "Research Facilities"
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
/* harmony default export */ __webpack_exports__["default"] = (FacilitiesHeader);

/***/ }),

/***/ "./src/Components/Faclities/Facility/Facility.js":
/*!*******************************************************!*\
  !*** ./src/Components/Faclities/Facility/Facility.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Faclities\\Facility\\Facility.js";


function Facility({
  SerialNo,
  NameOfLab,
  PresentFacilities,
  YearOfEstablishment,
  CostOfAsset,
  UsageCharges
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "mx-3 bg-gray-200 hover:bg-gray-300 block justify-center rounded overflow-hidden shadow-xl px-5 py-4 my-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "block text-gray-800 font-bold text-lg",
        children: [SerialNo, ". "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "md:col-span-1 flex justify-start",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "font-bold  text-gray-500",
          children: ["Name of Lab : ", NameOfLab]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-gray-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "md:col-span-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "font-bold flex text-gray-500",
          children: ["Lab-Facilities : \xA0", PresentFacilities, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-gray-500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 21
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
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 my-1 flex justify-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "md:col-span-1 flex justify-start",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "font-bold  text-gray-500",
          children: "Year Of Establishment :\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-gray-500",
          children: YearOfEstablishment
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "md:col-span-1 flex justify-start",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "font-bold  text-gray-500",
          children: "Cost of Asset :\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-gray-500",
          children: CostOfAsset
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "flex text-gray-600 font-bold",
        children: "Usage Charges :"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "text-gray-500",
        children: ["\xA0", UsageCharges]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Facility);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUmVzZWFyY2hGYWNpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZhY2xpdGllcy9GYWNpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZhY2xpdGllcy9GYWNpbGl0aWVzSGVhZGVyL0ZhY2lsaXRpZXNIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmFjbGl0aWVzL0ZhY2lsaXR5L0ZhY2lsaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ib21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSG9tZS9Ib21lSGVhZGVyL0hvbWVIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSG9tZS9JbWFnZUNhcm91c2VsL0ltYWdlQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSG9tZS9JbWFnZUNhcm91c2VsL0ltYWdlU2xpZGUvSW1hZ2VTbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Mb2FkZXIvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BhZ2VMYXlvdXQvTmF2YmFyL05hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9QYWdlTGF5b3V0L05hdmJhci90b2dnbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BhZ2VMYXlvdXQvUGFnZUxheW91dC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlJlc2VhcmNoRmFjaWxpdGllcyIsIlJFUVVFU1RfU1RBVFVTIiwiTE9BRExJTkciLCJTVUNDRVNTIiwiRVJST1IiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJzdWNjZXNzIiwiaXNMb2FkaW5nIiwiRmFjaWxpdGllcyIsImRpdlN0eWxlciIsImhlaWdodCIsIkZhY2lsaXRpZXNBcnJheSIsIm1hcCIsImZhY2lsaXR5IiwiU2VyaWFsTm8iLCJGYWNpbGl0aWVzSGVhZGVyIiwiRmFjaWxpdHkiLCJOYW1lT2ZMYWIiLCJQcmVzZW50RmFjaWxpdGllcyIsIlllYXJPZkVzdGFibGlzaG1lbnQiLCJDb3N0T2ZBc3NldCIsIlVzYWdlQ2hhcmdlcyIsIkZvb3RlciIsIkhlYWRlciIsImltYWdlU3R5bGUiLCJ3aWR0aCIsImhlaWd0aCIsIkhvbWUiLCJIb21lSGVhZGVyIiwiSW1hZ2VDYXJvdXNlbCIsImltYWdlc0FycmF5Iiwic2xpZGVJbmRleCIsInNob3dTbGlkZXMiLCJpIiwic2xpZGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZG90cyIsImxlbmd0aCIsInN0eWxlIiwiZGlzcGxheSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJpbWFnZSIsImlkIiwidGV4dEFsaWdubWVudCIsIkltYWdlU2xpZGUiLCJpbWFnZVNyYyIsIkxvYWRlciIsIk5hdmJhciIsIm15U3R5bGUiLCJ0b2dnbGVyIiwibWVudUJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwiUGFnZUxheW91dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7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eUVBQWYsRTs7Ozs7Ozs7Ozs7QUNmQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9SZXNlYXJjaEZhY2lsaXRpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL1Jlc2VhcmNoRmFjaWxpdGllcy5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9zcmMvQ29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAgXCIuLi9zcmMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBGYWNpbGl0aWVzIGZyb20gXCIuLi9zcmMvQ29tcG9uZW50cy9GYWNsaXRpZXMvRmFjaWxpdGllc1wiO1xyXG5pbXBvcnQgUGFnZUxheW91dCBmcm9tIFwiLi4vc3JjL0NvbXBvbmVudHMvUGFnZUxheW91dC9QYWdlTGF5b3V0XCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL3NyYy9Db21wb25lbnRzL0xvYWRlci9Mb2FkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFJlc2VhcmNoRmFjaWxpdGllcygpe1xyXG5cclxuICAgIGNvbnN0IFJFUVVFU1RfU1RBVFVTID0ge1xyXG4gICAgICAgIExPQURMSU5HOlwiTG9hZGluZ1wiLFxyXG4gICAgICAgIFNVQ0NFU1M6XCJTVUNDRVNTXCIsXHJcbiAgICAgICAgRVJST1I6XCJFcnJvclwiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURMSU5HKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpLCAyMDAwKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1M7XHJcbiAgICBjb25zdCBpc0xvYWRpbmcgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkxPQURMSU5HO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxMb2FkZXIvPn1cclxuICAgICAgICAgICAge3N1Y2Nlc3MgJiYgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnZUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNpbGl0aWVzLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdlTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlYXJjaEZhY2lsaXRpZXM7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRmFjdWx0eUNhcmQgZnJvbSBcIi4vRmFjaWxpdHkvRmFjaWxpdHlcIjtcclxuaW1wb3J0IEZhY2lsaXRpZXNIZWFkZXIgZnJvbSBcIi4vRmFjaWxpdGllc0hlYWRlci9GYWNpbGl0aWVzSGVhZGVyXCI7XHJcblxyXG5mdW5jdGlvbiBGYWNpbGl0aWVzKCl7XHJcblxyXG4gICAgY29uc3QgZGl2U3R5bGVyID0ge1xyXG4gICAgICAgIGhlaWdodDo1NTBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBGYWNpbGl0aWVzQXJyYXkgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMVwiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIkNvbW11bmljYXRpb24gUmVzZWFyY2ggTGFiXCIsXHJcbiAgICAgICAgICAgIFwiUHJlc2VudEZhY2lsaXRpZXNcIjogXCJNWEcgVmVjdG9yIHNpZ25hbCBnZW5lcmF0b3IgMTAwa0h6LTNHSHpcIixcclxuICAgICAgICAgICAgXCJZZWFyT2ZFc3RhYmxpc2htZW50XCI6IFwiMTItMDgtMTFcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjcsOTgsMDAwLy0gfCBBbm51YWwgcGxhbiBncmFudFwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjIwMC8tIHBlciBob3VyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjJcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJDb21tdW5pY2F0aW9uIFJlc2VhcmNoIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiQ29nbml0aXZlIFdpcmVsZXNzIGNvbW11bmljYXRpb24gU29mdHdhcmUgRGVmaW5lZCByYWRpbyBMYWIgU0RSMDRcIixcclxuICAgICAgICAgICAgXCJZZWFyT2ZFc3RhYmxpc2htZW50XCI6IFwiMTQvMDUvMjAxNFwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiMTMsNjUuMDAwLy0gfCBBbm51YWwgcGxhbiBncmFudFwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjQwMC8tIHBlciBob3VyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjNcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJDb21tdW5pY2F0aW9uIFJlc2VhcmNoIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiUkYgc2lnbmFsIGdlbmVyYXRvciA5S0h6IHRvIDMuMCBHSHpcIixcclxuICAgICAgICAgICAgXCJZZWFyT2ZFc3RhYmxpc2htZW50XCI6IFwiMTcvMTEvMjAxNFwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiMTEsOTcsNzMwLy0gfCBBbm51YWwgcGxhbiBncmFudFwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjI1MC8tIHBlciBob3VyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjRcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJDb21tdW5pY2F0aW9uIFJlc2VhcmNoIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiRnJlcXVlbmN5IHJhbmdlIDlLSHogdG8gMy4wR0h6IENYQSBzaWduYWwgYW5hbHl6ZXJcIixcclxuICAgICAgICAgICAgXCJZZWFyT2ZFc3RhYmxpc2htZW50XCI6IFwiMTcvMTEvMjAxNFwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiMTEsOTcsNzMwLy0gfCBBbm51YWwgcGxhbiBncmFudFwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjI1MC8tIHBlciBob3VyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjVcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJDb21tdW5pY2F0aW9uIFJlc2VhcmNoIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiV2lyZWxlc3MgTWVhc3VyZW1lbnQgc3R1ZGlvKEZpZWxkIGZveCBWTkEpXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjE4LzA0LzIwMTQgLFRFUVVJUCBJSVwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiMTUsMjUsNzMwLjg1Ly1cIixcclxuICAgICAgICAgICAgXCJVc2FnZUNoYXJnZXNcIjogXCI1MDAvLSBwZXIgaG91clwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCI2XCIsXHJcbiAgICAgICAgICAgIFwiTmFtZU9mTGFiXCI6IFwiQ29tbXVuaWNhdGlvbiBSZXNlYXJjaCBMYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIk41MTcyQiBFWEcgWC1TZXJpZXMgUkYgdmVjdG9yIHNpZ25hbCBnZW5lcmF0b3JcIixcclxuICAgICAgICAgICAgXCJZZWFyT2ZFc3RhYmxpc2htZW50XCI6IFwiMDYtMDQtMThcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjI3LDg2LDg4NS8tIHwgUFJPSkVDVCBJU1JPIENPREU6NC8yMjlcIixcclxuICAgICAgICAgICAgXCJVc2FnZUNoYXJnZXNcIjogXCIxMDAwLy0gcGVyIGhvdXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiN1wiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIkNvbW11bmljYXRpb24gUmVzZWFyY2ggTGFiXCIsXHJcbiAgICAgICAgICAgIFwiUHJlc2VudEZhY2lsaXRpZXNcIjogXCJBUkFNSVMgR1BTIEwxLCBJUk5TUyBMNSwgSVJOU1MgUyBTb2Z0d2FyZSBSZWNlaXZlciggR05TUyBNdWx0aSBGcmVxdWVuY3kgRkVNL01GUiBEZXZpY2UpXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjI0LzA5LzIwMTlcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIiQyMDgxMCB8IFBST0pFQ1QgSVNSTyBDT0RFOjQvMjIwXCIsXHJcbiAgICAgICAgICAgIFwiVXNhZ2VDaGFyZ2VzXCI6IFwiMTAwMC8tIHBlciBob3VyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjhcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJDb21tdW5pY2F0aW9uIFJlc2VhcmNoIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiRVhHIFgtU2VyaWVzIFJGIHZlY3RvciBzaWduYWwgZ2VuZXJhdG9yXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjAzLTA4LTE4XCIsXHJcbiAgICAgICAgICAgIFwiQ29zdE9mQXNzZXRcIjogXCIyNyw4Niw4ODUvLVwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjEwMDAvLSBwZXIgaG91clwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCI5XCIsXHJcbiAgICAgICAgICAgIFwiTmFtZU9mTGFiXCI6IFwiQmFzaWMgQ29tbXVuaWNhdGlvbiBMYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIk1peGVkIERvbWFpbiBPc2NpbGxvc2NvcGUsIDIgY2hhbm5lbCwgMi41IEdzL3MsIDEwME1IeiBNRE8zMDEyXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjMwLzAzLzIwMTUgfCBBbm51YWwgcGxhbiBncmFudFwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiMjgsNzIsODAwLy1cIixcclxuICAgICAgICAgICAgXCJVc2FnZUNoYXJnZXNcIjogXCIxMDAwLy0gcGVyIGhvdXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMTBcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJFbGVjdHJvbmljcyBTeXN0ZW0gRGVzaWduIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiTWl4ZWQgZG9tYWluIG9zY2lsbG9zY29wZVwiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCIwMi0wNC0xNVwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiNCw3OCw4MDAvLSB8IEFubnVhbCBwbGFuIGdyYW50XCIsXHJcbiAgICAgICAgICAgIFwiVXNhZ2VDaGFyZ2VzXCI6IFwiMTAwMC8tIHBlciBob3VyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjExXCIsXHJcbiAgICAgICAgICAgIFwiTmFtZU9mTGFiXCI6IFwiRWxlY3Ryb25pY3MgU3lzdGVtIERlc2lnbiBMYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIjEpIFNtYXJ0IENhbWVyYSwyKUxhYiB2aWV3LENvcmUgU29mdHdhcmVcIixcclxuICAgICAgICAgICAgXCJZZWFyT2ZFc3RhYmxpc2htZW50XCI6IFwiMjkvMDMvMTFcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjUsOTEsNzQ0Ly0gfCBBbm51YWwgcGxhbiBncmFudFwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjEwMDAvLSBwZXIgaG91clwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCIxMlwiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIkVsZWN0cm9uaWNzIFN5c3RlbSBEZXNpZ24gTGFiXCIsXHJcbiAgICAgICAgICAgIFwiUHJlc2VudEZhY2lsaXRpZXNcIjogXCJQQ0IgUHJvdG8gdHlwZSBNYWNoaW5lXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjE0LzA0LzEzXCIsXHJcbiAgICAgICAgICAgIFwiQ29zdE9mQXNzZXRcIjogXCIxMiw5OCw4NTAvLSB8IFRFUVVJUFwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjIwMDAvLVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCIxM1wiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIkVtYmVkZGVkIFN5c3RlbSBMYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIk5ldEZQR0EgU1VNRSBCb2FyZCAoMSBOb3MuKVwiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCIwOS0wOC0xNlwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiNiw5NiwzMDAvLVwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjYsOTYsMzAwLy1cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMTRcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJNaWNyb3dhdmUgYW5kIE9wdGljYWwgQ29tbXVuaWNhdGlvbiBsYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIlJGIHZlY3RvciBBbmFseXplclwiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCIxMy8wMy8yMDE0XCIsXHJcbiAgICAgICAgICAgIFwiQ29zdE9mQXNzZXRcIjogXCI5LDk3LDg3NS4wMFwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjUwMC8tIHBlciBzYW1wbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMTVcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJNaWNyb3dhdmUgYW5kIE9wdGljYWwgQ29tbXVuaWNhdGlvbiBsYWJvcmF0b3J5XCIsXHJcbiAgICAgICAgICAgIFwiUHJlc2VudEZhY2lsaXRpZXNcIjogXCJDQUQgRkVLTyAoNi4wKSBTb2Z0d2FyZVwiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCIyMy8wMi8yMDExXCIsXHJcbiAgICAgICAgICAgIFwiQ29zdE9mQXNzZXRcIjogXCIxMiw2MCwwMDAvLVwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjMwMC8tIHBlciBob3Vyc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCIxNlwiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIk1pY3Jvd2F2ZSBhbmQgT3B0aWNhbCBDb21tdW5pY2F0aW9uIGxhYm9yYXRvcnlcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIkVtcGlyZSBFeGNlbCB2NS4wMS1BIDNEIE1vZGVsaW5nIHNvZnR3YXJlIChmdWxsIHBhY2thZ2UpZm9yIFJGICYgTWljcm93YXZlIEFwcGxpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjE3LzA3LzIwMDdcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjUsMTksMzc2Ly0gfCBURVFJUFwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjMwMC8tIHBlciBob3Vyc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCIxN1wiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIk1pY3Jvd2F2ZSBhbmQgT3B0aWNhbCBDb21tdW5pY2F0aW9uIGxhYm9yYXRvcnlcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcImEpIE1pY3Jvd2F2ZSBJbnRlZ3JhdGVkIENpcmN1aXQgVHJhaW5lciBLaXQgKDEgc2V0KSxiKSBNaWNyb3dhdmUgU2lnbmFsIFNvdXJjZSxjKSBWU1dSIE1ldGVyLGQpIEFjY2Vzc29yaWVzXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjE3LzAxLzIwMDZcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjcsMTIsNzcwLy0gfCBURVFJUFwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjMwMC8tIHBlciBob3Vyc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCIxOFwiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIlNlbnNvciBSZXNlYXJjaCBMYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcImEpIE9tcmljb24gbGFiIG1vZGVsLUJvZGUgMTAwLGIpIEItd2l0MTAwIHdpZGViYW5kIGluamVjdGlvbiB0cmFuc2Zvcm1lclwiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCIxMS0xMC0xNlwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiNywxOSw3NzUvLVwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjUwMC8tIHBlciBzYW1wbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMTlcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJTZW5zb3IgUmVzZWFyY2ggTGFiXCIsXHJcbiAgICAgICAgICAgIFwiUHJlc2VudEZhY2lsaXRpZXNcIjogXCJMYXNlciBTcGVjdHJ1bSBBbmFseXplciBUeXBlOiBMU0Egd2l0aCAxNTUwbm0gV2lkZSBiYW5kIExpZ2h0IFNvdXJjZVwiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCIyMy8wNC8yMDE1XCIsXHJcbiAgICAgICAgICAgIFwiQ29zdE9mQXNzZXRcIjogXCIyNCw2MCw4NjMvLVwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjUwMC8tIHBlciBzYW1wbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMjBcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJTZW5zb3IgUmVzZWFyY2ggTGFiXCIsXHJcbiAgICAgICAgICAgIFwiUHJlc2VudEZhY2lsaXRpZXNcIjogXCJTbWFydCBTY29wZSA0LE9wdGljYWwgQ2hhbm5lbHMsVXB0byAxNkZHQlMgKERTVCBQcm9qZWN0IEdyYW50KVwiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCIxOS8xMC8yMDEzXCIsXHJcbiAgICAgICAgICAgIFwiQ29zdE9mQXNzZXRcIjogXCIxNiw1NCw0MDUvLVwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjEwMDAvLSBwZXIgc2FtcGxlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjIxXCIsXHJcbiAgICAgICAgICAgIFwiTmFtZU9mTGFiXCI6IFwiU2Vuc29yIFJlc2VhcmNoIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiRmllbGQgT3B0aWNhbCBTcGVjdHJ1bSBBbmFseXplciAmIEJyb2FkIEJhbmQgT3B0aWNhbCBTb3VyY2UgU2xlZCAoMTU1ME5NKSB3aXRoIE9TQSBjYWJsZVwiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCIzMC8wMy8yMDEyXCIsXHJcbiAgICAgICAgICAgIFwiQ29zdE9mQXNzZXRcIjogXCIxNSw3NSwwMDAvLVwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjEwMDAvLSBwZXIgc2FtcGxlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjIyXCIsXHJcbiAgICAgICAgICAgIFwiTmFtZU9mTGFiXCI6IFwiU2Vuc29yIFJlc2VhcmNoIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiSGlnaCBSZXNvbHV0aW9uIFNwZWN0cm9tZXRlciB3aXRoIExpZ2h0IFNvdXJjZSwgUHJvYmVzIGFuZCBBY2Nlc3NvcmllcyAoRFJETyBQcm9qZWN0IEdyYW50KVwiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCIxMi0wMi0xMVwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiMTIsMDcsMTAzLy1cIixcclxuICAgICAgICAgICAgXCJVc2FnZUNoYXJnZXNcIjogXCIxMDAwLy0gcGVyIHNhbXBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCIyM1wiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIlNlbnNvciBSZXNlYXJjaCBMYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIkhpZ2ggcmVzb2x1dGlvbiBTcGVjdHJvbWV0ZXIgd2l0aCwgYSkgbGlnaHQgc291cmNlYikgZGV0ZWN0b3IsIGMpIGxhcHRvcCBhbmQgb3RoZXIgQWNjZXNzb3JpZXMuXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjI3LzA2LzIwMTFcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjYsNzQsNzgyLy1cIixcclxuICAgICAgICAgICAgXCJVc2FnZUNoYXJnZXNcIjogXCIxMDAwLy0gcGVyIHNhbXBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCIyNFwiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIlNlbnNvciBSZXNlYXJjaCBMYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIk9wdGlzdWl0ZSwgIE9wdGlGRFRET3B0aSBTeXN0ZW0uIE9wdGlTcGljZSZPcHRpIEJQTSwgIE9wdGlHcmF0dGluZyAoRFJETyBMQUIpXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjEyLTAyLTIwMTRcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjE5LDg1LDAyNS8tXCIsXHJcbiAgICAgICAgICAgIFwiVXNhZ2VDaGFyZ2VzXCI6IFwiMzAwLy0gcGVyIGhvdXJzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjI1XCIsXHJcbiAgICAgICAgICAgIFwiTmFtZU9mTGFiXCI6IFwiU2Vuc29yIFJlc2VhcmNoIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiUlNvZnREaWZmZWN0IE1PRCBhZGQtb24gJiBGRU1TSU0gYWRkLW9uIHYyMDE0LjA5IFMvV1wiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCJGT1MvSU4vMTQxMyAwMS0xMi0xNFwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiNiw5OCwyNTAvLVwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjMwMC8tIHBlciBob3Vyc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCIyNlwiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIlNlbnNvciBSZXNlYXJjaCBMYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIkNPTVNPTCBNdWx0aXBoeXNpY3MsIFJGIE1vZHVsZXMsIFdhdmUgT3B0aWNzIE1vZHVsZSAoVkxTSSBMQUIpXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjE4LTExLTIwMTRcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjYsMDksMzY4Ly1cIixcclxuICAgICAgICAgICAgXCJVc2FnZUNoYXJnZXNcIjogXCIzMDAvLSBwZXIgaG91cnNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMjdcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJTZW5zb3IgUmVzZWFyY2ggTGFiXCIsXHJcbiAgICAgICAgICAgIFwiUHJlc2VudEZhY2lsaXRpZXNcIjogXCJSU29mdCBDQUQgR1VJIHYyMDEzLjEyIFNvZnR3YXJlIHdpdGggYWRkLW9uIGZ1bGwgd2F2ZSBzaW5nbGUgVXNlciBOb2RlIExvY2tlZCBBY2FkZW1pYyBMaWNlbnNlIGZvciBXaW5kb3cgNy84XCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIkZPUy9JTi8xNDEwIDIzLTA2LTIwMTRcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjgsMjksNTAwLy1cIixcclxuICAgICAgICAgICAgXCJVc2FnZUNoYXJnZXNcIjogXCIzMDAvLSBwZXIgaG91cnNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMjhcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJTZW5zb3IgUmVzZWFyY2ggTGFiXCIsXHJcbiAgICAgICAgICAgIFwiUHJlc2VudEZhY2lsaXRpZXNcIjogXCJPcHRpIFN5c3RlbSAoUFJPSkVDVCBMQUIpXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIkdTSS8xMS4xMi8xMCAyMC0wMS0yMDEyXCIsXHJcbiAgICAgICAgICAgIFwiQ29zdE9mQXNzZXRcIjogXCI4LDY4LDYxMy8tXCIsXHJcbiAgICAgICAgICAgIFwiVXNhZ2VDaGFyZ2VzXCI6IFwiMzAwLy0gcGVyIGhvdXJzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjI5XCIsXHJcbiAgICAgICAgICAgIFwiTmFtZU9mTGFiXCI6IFwiVENBRCBMYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIlNDUyBQYXJhbWV0ZXIgQW5hbHl6ZXIgU3lzdGVtXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjE2LzAxLzIwMTdcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjIxLDIxLDAwMC8tXCIsXHJcbiAgICAgICAgICAgIFwiVXNhZ2VDaGFyZ2VzXCI6IFwiMTAwMC8tIFBlciBTYW1wbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMzBcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJUQ0FEIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiQWR2YW5jZSAoM0QpIFN5bm9wc3lzIFRDQUQgVW5pdmVyc2l0eSBCdW5kbGVcIixcclxuICAgICAgICAgICAgXCJZZWFyT2ZFc3RhYmxpc2htZW50XCI6IFwiMTkvMDEvMjAxNlwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiNSwwMSw5NjAvLVwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjMwMC8tIHBlciBob3VycyAob25seSBhY2FkZW1pYyBwdXJwb3NlKVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCIzMVwiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIlZMU0kgTGFiXCIsXHJcbiAgICAgICAgICAgIFwiUHJlc2VudEZhY2lsaXRpZXNcIjogXCJMb2dpYyBBbmFseXplciAoMzQgQ2hhbm5lbClcIixcclxuICAgICAgICAgICAgXCJZZWFyT2ZFc3RhYmxpc2htZW50XCI6IFwiMTItMTEtMjAxM1wiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiMTEsMzksMjUwLy1cIixcclxuICAgICAgICAgICAgXCJVc2FnZUNoYXJnZXNcIjogXCJScyAxMDAwL2hvdXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMzJcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJWTFNJIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwi4pePIFN5bm9wc3lzICg1IGxpY2Vuc2VzKSAqLOKXjyBYaWxpbnggU0RTb0MgKDI1IGxpY2Vuc2VzKSos4pePIE1lbnRvciAoMjAgbGljZW5zZXMpICril48gQ2FkZW5jZSAoMTAgbGljZW5zZXMpICos4pePIFhpbGlueCBWaXZhcmRvIERlc2lnbiBTdWl0ZSAyMDE1ICgyNSBsaWNlbnNlcykqXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwiVXNhZ2VDaGFyZ2VzXCI6IFwiUnMuIDMwMC8tIHBlciBob3VycyAgKG9ubHkgYWNhZGVtaWMgcHVycG9zZSlcIlxyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZhY2lsaXRpZXNIZWFkZXIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbC1oaWRlIG92ZXJmbG93LXktc2Nyb2xsICBtdC00IGJnLWdyYXktMTAwXCIgc3R5bGU9e2RpdlN0eWxlcn0+XHJcbiAgICAgICAgICAgICAgICB7RmFjaWxpdGllc0FycmF5Lm1hcCgoZmFjaWxpdHkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8RmFjdWx0eUNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgZmFjaWxpdHk9e2ZhY2lsaXR5fSBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2ZhY2lsaXR5LlNlcmlhbE5vfXsuLi5mYWNpbGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjaWxpdGllczsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBGYWNpbGl0aWVzSGVhZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCBwLTEwIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBIZWFkaW5nICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS02MDAgdGV4dC0zeGwgZm9udC1ib2xkXCI+UmVzZWFyY2ggRmFjaWxpdGllczwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjaWxpdGllc0hlYWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBGYWNpbGl0eSh7U2VyaWFsTm8sIE5hbWVPZkxhYiwgUHJlc2VudEZhY2lsaXRpZXMsIFllYXJPZkVzdGFibGlzaG1lbnQsIENvc3RPZkFzc2V0LCBVc2FnZUNoYXJnZXN9KXtcclxuICAgICAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTMgYmctZ3JheS0yMDAgaG92ZXI6YmctZ3JheS0zMDAgYmxvY2sganVzdGlmeS1jZW50ZXIgcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXhsIHB4LTUgcHktNCBteS00XCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgdGV4dC1sZ1wiPntTZXJpYWxOb30uIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTEgZmxleCBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCAgdGV4dC1ncmF5LTUwMFwiPk5hbWUgb2YgTGFiIDoge05hbWVPZkxhYn08L2gxPiBcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBmbGV4IHRleHQtZ3JheS01MDBcIj5MYWItRmFjaWxpdGllcyA6ICZuYnNwO3tQcmVzZW50RmFjaWxpdGllc31cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+PC9wPjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbXktMSBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgIHRleHQtZ3JheS01MDBcIj5ZZWFyIE9mIEVzdGFibGlzaG1lbnQgOiZuYnNwOzwvaDE+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57WWVhck9mRXN0YWJsaXNobWVudH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTEgZmxleCBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCAgdGV4dC1ncmF5LTUwMFwiPkNvc3Qgb2YgQXNzZXQgOiZuYnNwOzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPntDb3N0T2ZBc3NldH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggdGV4dC1ncmF5LTYwMCBmb250LWJvbGRcIj5Vc2FnZSBDaGFyZ2VzIDo8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj4mbmJzcDt7VXNhZ2VDaGFyZ2VzfTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjaWxpdHk7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCAgbXQtMVwiPlxyXG4gICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJweC01XCIgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNCBmbGV4IGZsZXgtcm93XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMSBmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC0zIG1kOm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFN1YiBIZWFkaW5nICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1ncmF5LTYwMCBmb250LWJvbGQgdGV4dC1tZFwiPkVsZWN0cm9uaWNzIERlcGFydG1lbnQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWdyYXktNjAwIHRleHQteHNcIj4gTmF0aW9uYWwgaW5zdGl0dXRlIG9mIFRlY2hub2xvZ3ksIFNVUkFUIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTVk5JVCBsb2dvICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTMyIGZsZXggaC0xMiB3LTEyIHRleHQtY2VudGVyIG1kOmp1c3RpZnktZW5kIG1kOm1yLTMyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIlwiIHNyYz1cImltYWdlcy9OSVRfU3VyYXRfTG9nby5zdmcucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBwdC0xIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHRleHQteGwgdGV4dC1ncmF5LTYwMCBmb250LXNlbWlib2xkXCI+Rm9sbG93IHVzIG9uOiA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBweC0yIHBiLTIgcHQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9tLmZhY2Vib29rLmNvbS9FbGVjdHJvbmljcy1Db21tdW5pY2F0aW9uLUVuZ2luZWVyaW5nLURlcGFydG1lbnQtU1ZOSVQtU3VyYXQtMTcwNDIyNDY2MzE0MDU1NC9cIj48c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGZvbnQtc2VtaWJvbGQgcC0xIG1kOnAtM1wiPjxpbWcgY2xhc3NOYW1lPVwidy0xMFwiIHNyYz1cImltYWdlcy9Gb290ZXItaWNvbnMvRmFjZWJvb2staWNvbi5zdmdcIi8+Jm5ic3A7PHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+RmFjZWJvb2s8L3A+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgcC0zXCI+PGltZyBjbGFzc05hbWU9XCJ3LTEwXCIgc3JjPVwiaW1hZ2VzL0Zvb3Rlci1pY29ucy9Zb3VUdWJlLWljb24uc3ZnXCIvPiZuYnNwOzxhPllvdXR1YmU8L2E+PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLmNvbS9zdm5pdC5vZmZpY2lhbD9pZ3NoaWQ9cndsdmhyeXpmaWkyXCI+PHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBmb250LXNlbWlib2xkIHAtMSBtZDpwLTNcIj48aW1nIGNsYXNzTmFtZT1cInctMTBcIiBzcmM9XCJpbWFnZXMvRm9vdGVyLWljb25zL0luc3RhZ3JhbS1pY29uLnN2Z1wiLz4mbmJzcDs8cCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5JbnN0YWdyYW08L3A+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L3Mtdi1uYXRpb25hbC1pbnN0aXR1dGUtb2YtdGVjaG5vbG9neS1zdm5pdC1zdXJhdC1uaXQtc3VyYXQtXCI+PHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBmb250LXNlbWlib2xkIHAtMSBtZDpwLTNcIj48aW1nIGNsYXNzTmFtZT1cInctMTBcIiBzcmM9XCJpbWFnZXMvRm9vdGVyLWljb25zL0xpbmtlZEluLWljb24uc3ZnXCIvPiZuYnNwOzxwIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPkxpbmtlZEluPC9wPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL05JVF9TdXJhdD9zPTIwXCI+PHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBmb250LXNlbWlib2xkIHAtMSBtZDpwLTNcIj48aW1nIGNsYXNzTmFtZT1cInctMTBcIiBzcmM9XCJpbWFnZXMvRm9vdGVyLWljb25zL1R3aXR0ZXItaWNvbi5zdmdcIi8+Jm5ic3A7PHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+VHdpdHRlcjwvcD48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHktMyBweC01IHRleHQteHMgbWQ6dGV4dC1sIHRleHQtZ3JheS0yMDAgZmxleCBqdXN0aWZ5LWNlbnRlclwiPiZjb3B5OyAyMDIxIEVsZWN0cm9uaWNzIERlcGFydG1lbnQgLCBhbGwgcmlnaHRzIHJlc2VydmVkICYjNjQ7IE5hdGlvbmFsIGluc3RpdHV0ZSBvZiBUZWNobm9sb2d5LCBTVVJBVCA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKXtcclxuICAgIGNvbnN0IGltYWdlU3R5bGUgPSB7XHJcbiAgICAgICAgd2lkdGg6OTAsXHJcbiAgICAgICAgaGVpZ3RoOjkwXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNCBmbGV4IGZsZXgtcm93XCIgPlxyXG4gICAgICAgICAgICAgICAgey8qIEhlYWRpbmcgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0zIG1kOm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS02MDAgZm9udC1ib2xkIHRleHQteGxcIj5FbGVjdHJvbmljcyBEZXBhcnRtZW50PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS02MDBcIj4gTmF0aW9uYWwgaW5zdGl0dXRlIG9mIFRlY2hub2xvZ3ksIFNVUkFUIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIExPR08gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgbWQ6anVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvTklUX1N1cmF0X0xvZ28uc3ZnLnBuZ1wiIHN0eWxlPXtpbWFnZVN0eWxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VDYXJvdXNlbCBmcm9tIFwiLi9JbWFnZUNhcm91c2VsL0ltYWdlQ2Fyb3VzZWxcIjtcclxuaW1wb3J0IEhvbWVIZWFkZXIgZnJvbSBcIi4vSG9tZUhlYWRlci9Ib21lSGVhZGVyXCJcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQgYmctZ3JheS0yMDAgZ3JpZCBncmlkLWNvbHMtMVwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEhvbWVIZWFkZXIvPlxyXG5cclxuICAgICAgICAgICAgPEltYWdlQ2Fyb3VzZWwvPlxyXG5cclxuICAgICAgICAgICAgey8qIERlcGFydG1lbnQgTWlzc2lvbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgbS00IGJnLWdyYXktMzAwIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktNjAwIHRleHQtYm9sZCB0ZXh0LWNlbnRlclwiPkRlcGFydG1lbnQgTWlzc2lvbjwvaDY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQtY2VudGVyIHRleHQtbFwiPlRoZSBtaXNzaW9uIG9mIHRoZSBFbGVjdHJvbmljcyBFbmdpbmVlcmluZyBEZXBhcnRtZW50IGlzIHRvIGNvbnRyaWJ1dGUgdG8gc29jaWV0eSBhbmQgaW5kdXN0cnkgdGhyb3VnaCBleGNlbGxlbmNlIGluIGVkdWNhdGlvbiwgcmVzZWFyY2gsIGlubm92YXRpb25zIGFuZCBldGhpY3MgYnkgc3Rha2Vob2xkZXJzLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogRGVwYXJ0bWVudCBNaXNzaW9uICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHAtNiBteC00IG1iLTQgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS02MDAgdGV4dC1ib2xkIHRleHQtY2VudGVyXCI+RGVwYXJ0bWVudCBWaXNpb248L2g2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCB0ZXh0LWNlbnRlciB0ZXh0LWxcIj5UaGUgdmlzaW9uIG9mIHRoZSBFbGVjdHJvbmljcyBFbmdpbmVlcmluZyBEZXBhcnRtZW50IGlzIHRvIEFpbSB0byBhY2hpZXZlIHF1YWxpdHkgaW4gZWR1Y2F0aW9uIGFuZCByZXNlYXJjaCB0byBjcmVhdGUgbGVhZGluZyBFbGVjdHJvbmljcyBlbmdpbmVlcnMsIHJlc2VhcmNoZXJzIGFuZCBlbnRyZXByZW5ldXJzLjwvcD4gIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBIb21lSGVhZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCBwLTggbXgtNCBtdC00IHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBIZWFkaW5nICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS02MDAgdGV4dC0yeGwgZm9udC1ib2xkXCI+RGVwYXJ0bWVudCBWaXJ0dWFsIFRvdXI8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVIZWFkZXI7IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlU2xpZGUgZnJvbSBcIi4vSW1hZ2VTbGlkZS9JbWFnZVNsaWRlXCI7XHJcblxyXG5mdW5jdGlvbiBJbWFnZUNhcm91c2VsKCl7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VzQXJyYXkgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZWNlZEltYWdlcy9lY2VkLTEuanBnXCIsXHJcbiAgICAgICAgICAgIFwia2V5XCI6XCIxXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC0yLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiMlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9lY2VkSW1hZ2VzL2VjZWQtMy5qcGdcIixcclxuICAgICAgICAgICAgXCJrZXlcIjpcIjNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZWNlZEltYWdlcy9lY2VkLTQuanBnXCIsXHJcbiAgICAgICAgICAgIFwia2V5XCI6XCI0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC01LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiNVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9lY2VkSW1hZ2VzL2VjZWQtNi5qcGdcIixcclxuICAgICAgICAgICAgXCJrZXlcIjpcIjZcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZWNlZEltYWdlcy9lY2VkLTcuanBnXCIsXHJcbiAgICAgICAgICAgIFwia2V5XCI6XCI3XCJcclxuICAgICAgICB9XHJcbiAgICBdXHJcblxyXG4gICAgdmFyIHNsaWRlSW5kZXggPSAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dTbGlkZXMoKSB7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgdmFyIHNsaWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJteVNsaWRlc1wiKTtcclxuICAgICAgICB2YXIgZG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkb3RcIik7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWRlSW5kZXgrKztcclxuICAgICAgICBpZiAoc2xpZGVJbmRleCA+IHNsaWRlcy5sZW5ndGgpIHtzbGlkZUluZGV4ID0gMX0gICAgXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGRvdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZG90c1tpXS5jbGFzc05hbWUgPSBkb3RzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2xpZGVzW3NsaWRlSW5kZXgtMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgIFxyXG4gICAgICAgIGRvdHNbc2xpZGVJbmRleC0xXS5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbiAgICAgICAgc2V0VGltZW91dChzaG93U2xpZGVzLCA1MDAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNob3dTbGlkZXMoKTtcclxuICAgIH0sIFtzbGlkZUluZGV4XSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgbXgtNCByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBtZDpteC0wXCI+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlc2hvdy1jb250YWluZXIgbWQ6aC05NlwiPlxyXG5cclxuICAgICAgICAgICAgICAgIHtpbWFnZXNBcnJheS5tYXAoKGltYWdlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlU2xpZGUga2V5PXtpbWFnZS5pZH17Li4uaW1hZ2V9Lz4gICAgXHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCIgc3R5bGU9e3t0ZXh0QWxpZ25tZW50OlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2Fyb3VzZWw7XHJcblxyXG5cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwibXQtNCBteC00IHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuIG1kOm14LTBcIj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVzaG93LWNvbnRhaW5lciBoLTk2IFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtY29udGFpbmVyIG15U2xpZGVzIGZhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBudW1iZXJ0ZXh0XCI+MSAvIDM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbGlkZS1pbWFnZVwiIHNyYz1cImltYWdlcy9lY2VkSW1hZ2VzLzMuanBnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5DYXB0aW9uIFRleHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtY29udGFpbmVyIG15U2xpZGVzIGZhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBudW1iZXJ0ZXh0XCI+MiAvIDM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNsaWRlLWltYWdlXCIgc3JjPVwiaW1hZ2VzL2VjZWRJbWFnZXMvNC5qcGdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+Q2FwdGlvbiBUd288L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtY29udGFpbmVyIG15U2xpZGVzIGZhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBudW1iZXJ0ZXh0XCI+MyAvIDM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNsaWRlLWltYWdlXCIgc3JjPVwiaW1hZ2VzL2VjZWRJbWFnZXMvNS5qcGdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+Q2FwdGlvbiBUaHJlZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCIgc3R5bGU9e3t0ZXh0QWxpZ25tZW50OlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBJbWFnZVNsaWRlKHtpbWFnZVNyY30pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtY29udGFpbmVyIG15U2xpZGVzIGZhZGVcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbGlkZS1pbWFnZVwiIHNyYz17aW1hZ2VTcmN9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlU2xpZGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZS9sb2FkZXIuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBMb2FkZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIGJvdHRvbS0wIHctZnVsbCBoLXNjcmVlbiB6LTUwIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTcwMCAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyIGVhc2UtbGluZWFyIHJvdW5kZWQtZnVsbCBib3JkZXItNCBib3JkZXItdC00IGJvcmRlci1ncmF5LTIwMCBoLTEyIHctMTIgbWItNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtd2hpdGUgdGV4dC14bCBmb250LXNlbWlib2xkXCI+TG9hZGluZy4uLjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+VGhpcyBtYXkgdGFrZSBhIGZldyBzZWNvbmRzLCBwbGVhc2UgZG9uJ3QgY2xvc2UgdGhpcyBwYWdlLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0b2dnbGVyIGZyb20gXCIuL3RvZ2dsZXJcIlxyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCl7XHJcbiAgICBjb25zdCBteVN0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoOjIwXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0b2dnbGVyKCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIG1kOmNvbC1zcGFuLTEgbS0zIGJnLWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgIDxuYXYgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgYm9yZGVyLWIgYm9yZGVyLWdyYXktMTAwIGZsZXgganVzdGlmeS1iZXR3ZWVuICBtZDpmbGV4IG1kOmp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sIGZvbnQtYm9sZCAgdXBwZXJjYXNlIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsIGhvdmVyOnRleHQtZ3JheS0xMDBcIj5FbGVjdHJvbmljcyBEZXBhcnRtZW50PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IGN1cnNvci1wb2ludGVyIG1kOmhpZGRlblwiIGlkPVwibWVudUJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBoLTggdy04XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IGhpZGRlbiBtZDpibG9ja1wiIGlkPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtZ3JheS00MDAgdGV4dC14bCBwLTYgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaC02IHctNlwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk0zIDEybDItMm0wIDBsNy03IDcgN001IDEwdjEwYTEgMSAwIDAwMSAxaDNtMTAtMTFsMiAybS0yLTJ2MTBhMSAxIDAgMDEtMSAxaC0zbS02IDBhMSAxIDAgMDAxLTF2LTRhMSAxIDAgMDExLTFoMmExIDEgMCAwMTEgMXY0YTEgMSAwIDAwMSAxbS02IDBoNlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPiA8YSBocmVmPVwiLi9cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMTAwXCI+Jm5ic3A7SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtZ3JheS00MDAgdGV4dC14bCBweC02IHBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJoLTUgdy01XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xOCAxMGE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHptLTcgNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bS0xLTlhMSAxIDAgMDAtMSAxdjRhMSAxIDAgMTAyIDBWNmExIDEgMCAwMC0xLTF6XCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+PGEgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTEwMFwiPiZuYnNwO0Fib3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtZ3JheS00MDAgdGV4dC14bCBweC02IHBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvc3Zncy9QZW9wbGUuc3ZnXCIgc3R5bGU9e215U3R5bGV9Lz48YSBocmVmPVwiRmFjdWx0aWVzUGFnZVwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS0xMDBcIj4mbmJzcDtGYWN1bHRpZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdGV4dC1ncmF5LTQwMCB0ZXh0LXhsIHB4LTYgcGItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9zdmdzL1Jlc2VhcmNoLnN2Z1wiIHN0eWxlPXtteVN0eWxlfS8+PGEgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTEwMFwiIGhyZWY9XCJSZXNlYXJjaFBhZ2VcIj4mbmJzcDtQcm9qZWN0czwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcHgtNiBwYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy02XCIgc3JjPVwiaW1hZ2VzL3N2Z3MvRmFjaWxpdGllcy5zdmdcIi8+PGEgaHJlZj1cIlJlc2VhcmNoRmFjaWxpdGllc1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS0xMDBcIj4mbmJzcDtGYWNpbGl0aWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gdG9nZ2xlcigpe1xyXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudUJ1dHRvblwiKTtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XHJcblxyXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT5cclxuICAgICB7XHJcbiAgICAgICAgaWYobWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyL05hdmJhclwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vSG9tZS9Ib21lXCI7XHJcblxyXG5mdW5jdGlvbiBQYWdlTGF5b3V0KHtjaGlsZHJlbn0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtNFwiPlxyXG4gICAgICAgICAgICA8TmF2YmFyLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0zIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlTGF5b3V0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9