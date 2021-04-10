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

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\pages\\ResearchFacilities.js";






function ResearchFacilities() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_PageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Faclities_Facilities__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
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

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Home\\Home.js";



function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "rounded bg-gray-200 grid grid-cols-1",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ImageCarousel_ImageCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-6 m-4 bg-gray-300 rounded",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        className: "text-2xl text-gray-600 text-bold text-center",
        children: "Department Mission"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-muted text-center text-l",
        children: "The mission of the Electronics Engineering Department is to contribute to society and industry through excellence in education, research, innovations and ethics by stakeholders."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-gray-300 p-6 mx-4 mb-4 rounded",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        className: "text-2xl text-gray-600 text-bold text-center",
        children: "Department Vision"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-muted text-center text-l",
        children: "The vision of the Electronics Engineering Department is to Aim to achieve quality in education and research to create leading Electronics engineers, researchers and entrepreneurs."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (Home);

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
              strokelinecap: "round",
              strokelinejoin: "round",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUmVzZWFyY2hGYWNpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZhY2xpdGllcy9GYWNpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZhY2xpdGllcy9GYWNpbGl0aWVzSGVhZGVyL0ZhY2lsaXRpZXNIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmFjbGl0aWVzL0ZhY2lsaXR5L0ZhY2lsaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ib21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSG9tZS9JbWFnZUNhcm91c2VsL0ltYWdlQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSG9tZS9JbWFnZUNhcm91c2VsL0ltYWdlU2xpZGUvSW1hZ2VTbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9QYWdlTGF5b3V0L05hdmJhci9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUGFnZUxheW91dC9OYXZiYXIvdG9nZ2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9QYWdlTGF5b3V0L1BhZ2VMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJSZXNlYXJjaEZhY2lsaXRpZXMiLCJGYWNpbGl0aWVzIiwiZGl2U3R5bGVyIiwiaGVpZ2h0IiwiRmFjaWxpdGllc0FycmF5IiwibWFwIiwiZmFjaWxpdHkiLCJTZXJpYWxObyIsIkZhY2lsaXRpZXNIZWFkZXIiLCJGYWNpbGl0eSIsIk5hbWVPZkxhYiIsIlByZXNlbnRGYWNpbGl0aWVzIiwiWWVhck9mRXN0YWJsaXNobWVudCIsIkNvc3RPZkFzc2V0IiwiVXNhZ2VDaGFyZ2VzIiwiRm9vdGVyIiwiSGVhZGVyIiwiaW1hZ2VTdHlsZSIsIndpZHRoIiwiaGVpZ3RoIiwiSG9tZSIsIkltYWdlQ2Fyb3VzZWwiLCJpbWFnZXNBcnJheSIsInNsaWRlSW5kZXgiLCJzaG93U2xpZGVzIiwiaSIsInNsaWRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImRvdHMiLCJsZW5ndGgiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGFzc05hbWUiLCJyZXBsYWNlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImltYWdlIiwiaWQiLCJ0ZXh0QWxpZ25tZW50IiwiSW1hZ2VTbGlkZSIsImltYWdlU3JjIiwiTmF2YmFyIiwibXlTdHlsZSIsInRvZ2dsZXIiLCJtZW51QnV0dG9uIiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJQYWdlTGF5b3V0IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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QUFDRSxTQUFMLENBQWVHLEdBQWYsQ0FBbUIsUUFBbkI7QUFDSDtBQUNKLEdBVEQ7QUFVSDs7QUFFY1Isc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTUyxVQUFULENBQW9CO0FBQUNDO0FBQUQsQ0FBcEIsRUFBK0I7QUFDM0Isc0JBQ0k7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQSw0QkFDSSxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLGdCQUNLQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFIOztBQUFBO0FBRWNELHlFQUFmLEU7Ozs7Ozs7Ozs7O0FDZkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvUmVzZWFyY2hGYWNpbGl0aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9SZXNlYXJjaEZhY2lsaXRpZXMuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL3NyYy9Db21wb25lbnRzL0Zvb3Rlci9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tICBcIi4uL3NyYy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IEZhY2lsaXRpZXMgZnJvbSBcIi4uL3NyYy9Db21wb25lbnRzL0ZhY2xpdGllcy9GYWNpbGl0aWVzXCI7XHJcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gXCIuLi9zcmMvQ29tcG9uZW50cy9QYWdlTGF5b3V0L1BhZ2VMYXlvdXRcIjtcclxuXHJcbmZ1bmN0aW9uIFJlc2VhcmNoRmFjaWxpdGllcygpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2VMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhY2lsaXRpZXMvPlxyXG4gICAgICAgICAgICAgICAgPC9QYWdlTGF5b3V0PlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlYXJjaEZhY2lsaXRpZXM7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRmFjdWx0eUNhcmQgZnJvbSBcIi4vRmFjaWxpdHkvRmFjaWxpdHlcIjtcclxuaW1wb3J0IEZhY2lsaXRpZXNIZWFkZXIgZnJvbSBcIi4vRmFjaWxpdGllc0hlYWRlci9GYWNpbGl0aWVzSGVhZGVyXCI7XHJcblxyXG5mdW5jdGlvbiBGYWNpbGl0aWVzKCl7XHJcblxyXG4gICAgY29uc3QgZGl2U3R5bGVyID0ge1xyXG4gICAgICAgIGhlaWdodDo1NTBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBGYWNpbGl0aWVzQXJyYXkgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMVwiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIkNvbW11bmljYXRpb24gUmVzZWFyY2ggTGFiXCIsXHJcbiAgICAgICAgICAgIFwiUHJlc2VudEZhY2lsaXRpZXNcIjogXCJNWEcgVmVjdG9yIHNpZ25hbCBnZW5lcmF0b3IgMTAwa0h6LTNHSHpcIixcclxuICAgICAgICAgICAgXCJZZWFyT2ZFc3RhYmxpc2htZW50XCI6IFwiMTItMDgtMTFcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjcsOTgsMDAwLy0gfCBBbm51YWwgcGxhbiBncmFudFwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjIwMC8tIHBlciBob3VyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjJcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJDb21tdW5pY2F0aW9uIFJlc2VhcmNoIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiQ29nbml0aXZlIFdpcmVsZXNzIGNvbW11bmljYXRpb24gU29mdHdhcmUgRGVmaW5lZCByYWRpbyBMYWIgU0RSMDRcIixcclxuICAgICAgICAgICAgXCJZZWFyT2ZFc3RhYmxpc2htZW50XCI6IFwiMTQvMDUvMjAxNFwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiMTMsNjUuMDAwLy0gfCBBbm51YWwgcGxhbiBncmFudFwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjQwMC8tIHBlciBob3VyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjNcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJDb21tdW5pY2F0aW9uIFJlc2VhcmNoIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiUkYgc2lnbmFsIGdlbmVyYXRvciA5S0h6IHRvIDMuMCBHSHpcIixcclxuICAgICAgICAgICAgXCJZZWFyT2ZFc3RhYmxpc2htZW50XCI6IFwiMTcvMTEvMjAxNFwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiMTEsOTcsNzMwLy0gfCBBbm51YWwgcGxhbiBncmFudFwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjI1MC8tIHBlciBob3VyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjRcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJDb21tdW5pY2F0aW9uIFJlc2VhcmNoIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiRnJlcXVlbmN5IHJhbmdlIDlLSHogdG8gMy4wR0h6IENYQSBzaWduYWwgYW5hbHl6ZXJcIixcclxuICAgICAgICAgICAgXCJZZWFyT2ZFc3RhYmxpc2htZW50XCI6IFwiMTcvMTEvMjAxNFwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiMTEsOTcsNzMwLy0gfCBBbm51YWwgcGxhbiBncmFudFwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjI1MC8tIHBlciBob3VyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjVcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJDb21tdW5pY2F0aW9uIFJlc2VhcmNoIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiV2lyZWxlc3MgTWVhc3VyZW1lbnQgc3R1ZGlvKEZpZWxkIGZveCBWTkEpXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjE4LzA0LzIwMTQgLFRFUVVJUCBJSVwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiMTUsMjUsNzMwLjg1Ly1cIixcclxuICAgICAgICAgICAgXCJVc2FnZUNoYXJnZXNcIjogXCI1MDAvLSBwZXIgaG91clwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCI2XCIsXHJcbiAgICAgICAgICAgIFwiTmFtZU9mTGFiXCI6IFwiQ29tbXVuaWNhdGlvbiBSZXNlYXJjaCBMYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIk41MTcyQiBFWEcgWC1TZXJpZXMgUkYgdmVjdG9yIHNpZ25hbCBnZW5lcmF0b3JcIixcclxuICAgICAgICAgICAgXCJZZWFyT2ZFc3RhYmxpc2htZW50XCI6IFwiMDYtMDQtMThcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjI3LDg2LDg4NS8tIHwgUFJPSkVDVCBJU1JPIENPREU6NC8yMjlcIixcclxuICAgICAgICAgICAgXCJVc2FnZUNoYXJnZXNcIjogXCIxMDAwLy0gcGVyIGhvdXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiN1wiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIkNvbW11bmljYXRpb24gUmVzZWFyY2ggTGFiXCIsXHJcbiAgICAgICAgICAgIFwiUHJlc2VudEZhY2lsaXRpZXNcIjogXCJBUkFNSVMgR1BTIEwxLCBJUk5TUyBMNSwgSVJOU1MgUyBTb2Z0d2FyZSBSZWNlaXZlciggR05TUyBNdWx0aSBGcmVxdWVuY3kgRkVNL01GUiBEZXZpY2UpXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjI0LzA5LzIwMTlcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIiQyMDgxMCB8IFBST0pFQ1QgSVNSTyBDT0RFOjQvMjIwXCIsXHJcbiAgICAgICAgICAgIFwiVXNhZ2VDaGFyZ2VzXCI6IFwiMTAwMC8tIHBlciBob3VyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjhcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJDb21tdW5pY2F0aW9uIFJlc2VhcmNoIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiRVhHIFgtU2VyaWVzIFJGIHZlY3RvciBzaWduYWwgZ2VuZXJhdG9yXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjAzLTA4LTE4XCIsXHJcbiAgICAgICAgICAgIFwiQ29zdE9mQXNzZXRcIjogXCIyNyw4Niw4ODUvLVwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjEwMDAvLSBwZXIgaG91clwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCI5XCIsXHJcbiAgICAgICAgICAgIFwiTmFtZU9mTGFiXCI6IFwiQmFzaWMgQ29tbXVuaWNhdGlvbiBMYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIk1peGVkIERvbWFpbiBPc2NpbGxvc2NvcGUsIDIgY2hhbm5lbCwgMi41IEdzL3MsIDEwME1IeiBNRE8zMDEyXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjMwLzAzLzIwMTUgfCBBbm51YWwgcGxhbiBncmFudFwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiMjgsNzIsODAwLy1cIixcclxuICAgICAgICAgICAgXCJVc2FnZUNoYXJnZXNcIjogXCIxMDAwLy0gcGVyIGhvdXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMTBcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJFbGVjdHJvbmljcyBTeXN0ZW0gRGVzaWduIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiTWl4ZWQgZG9tYWluIG9zY2lsbG9zY29wZVwiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCIwMi0wNC0xNVwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiNCw3OCw4MDAvLSB8IEFubnVhbCBwbGFuIGdyYW50XCIsXHJcbiAgICAgICAgICAgIFwiVXNhZ2VDaGFyZ2VzXCI6IFwiMTAwMC8tIHBlciBob3VyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjExXCIsXHJcbiAgICAgICAgICAgIFwiTmFtZU9mTGFiXCI6IFwiRWxlY3Ryb25pY3MgU3lzdGVtIERlc2lnbiBMYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIjEpIFNtYXJ0IENhbWVyYSwyKUxhYiB2aWV3LENvcmUgU29mdHdhcmVcIixcclxuICAgICAgICAgICAgXCJZZWFyT2ZFc3RhYmxpc2htZW50XCI6IFwiMjkvMDMvMTFcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjUsOTEsNzQ0Ly0gfCBBbm51YWwgcGxhbiBncmFudFwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjEwMDAvLSBwZXIgaG91clwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCIxMlwiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIkVsZWN0cm9uaWNzIFN5c3RlbSBEZXNpZ24gTGFiXCIsXHJcbiAgICAgICAgICAgIFwiUHJlc2VudEZhY2lsaXRpZXNcIjogXCJQQ0IgUHJvdG8gdHlwZSBNYWNoaW5lXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjE0LzA0LzEzXCIsXHJcbiAgICAgICAgICAgIFwiQ29zdE9mQXNzZXRcIjogXCIxMiw5OCw4NTAvLSB8IFRFUVVJUFwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjIwMDAvLVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCIxM1wiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIkVtYmVkZGVkIFN5c3RlbSBMYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIk5ldEZQR0EgU1VNRSBCb2FyZCAoMSBOb3MuKVwiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCIwOS0wOC0xNlwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiNiw5NiwzMDAvLVwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjYsOTYsMzAwLy1cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMTRcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJNaWNyb3dhdmUgYW5kIE9wdGljYWwgQ29tbXVuaWNhdGlvbiBsYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIlJGIHZlY3RvciBBbmFseXplclwiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCIxMy8wMy8yMDE0XCIsXHJcbiAgICAgICAgICAgIFwiQ29zdE9mQXNzZXRcIjogXCI5LDk3LDg3NS4wMFwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjUwMC8tIHBlciBzYW1wbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMTVcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJNaWNyb3dhdmUgYW5kIE9wdGljYWwgQ29tbXVuaWNhdGlvbiBsYWJvcmF0b3J5XCIsXHJcbiAgICAgICAgICAgIFwiUHJlc2VudEZhY2lsaXRpZXNcIjogXCJDQUQgRkVLTyAoNi4wKSBTb2Z0d2FyZVwiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCIyMy8wMi8yMDExXCIsXHJcbiAgICAgICAgICAgIFwiQ29zdE9mQXNzZXRcIjogXCIxMiw2MCwwMDAvLVwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjMwMC8tIHBlciBob3Vyc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCIxNlwiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIk1pY3Jvd2F2ZSBhbmQgT3B0aWNhbCBDb21tdW5pY2F0aW9uIGxhYm9yYXRvcnlcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIkVtcGlyZSBFeGNlbCB2NS4wMS1BIDNEIE1vZGVsaW5nIHNvZnR3YXJlIChmdWxsIHBhY2thZ2UpZm9yIFJGICYgTWljcm93YXZlIEFwcGxpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjE3LzA3LzIwMDdcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjUsMTksMzc2Ly0gfCBURVFJUFwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjMwMC8tIHBlciBob3Vyc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCIxN1wiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIk1pY3Jvd2F2ZSBhbmQgT3B0aWNhbCBDb21tdW5pY2F0aW9uIGxhYm9yYXRvcnlcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcImEpIE1pY3Jvd2F2ZSBJbnRlZ3JhdGVkIENpcmN1aXQgVHJhaW5lciBLaXQgKDEgc2V0KSxiKSBNaWNyb3dhdmUgU2lnbmFsIFNvdXJjZSxjKSBWU1dSIE1ldGVyLGQpIEFjY2Vzc29yaWVzXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjE3LzAxLzIwMDZcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjcsMTIsNzcwLy0gfCBURVFJUFwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjMwMC8tIHBlciBob3Vyc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCIxOFwiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIlNlbnNvciBSZXNlYXJjaCBMYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcImEpIE9tcmljb24gbGFiIG1vZGVsLUJvZGUgMTAwLGIpIEItd2l0MTAwIHdpZGViYW5kIGluamVjdGlvbiB0cmFuc2Zvcm1lclwiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCIxMS0xMC0xNlwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiNywxOSw3NzUvLVwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjUwMC8tIHBlciBzYW1wbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMTlcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJTZW5zb3IgUmVzZWFyY2ggTGFiXCIsXHJcbiAgICAgICAgICAgIFwiUHJlc2VudEZhY2lsaXRpZXNcIjogXCJMYXNlciBTcGVjdHJ1bSBBbmFseXplciBUeXBlOiBMU0Egd2l0aCAxNTUwbm0gV2lkZSBiYW5kIExpZ2h0IFNvdXJjZVwiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCIyMy8wNC8yMDE1XCIsXHJcbiAgICAgICAgICAgIFwiQ29zdE9mQXNzZXRcIjogXCIyNCw2MCw4NjMvLVwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjUwMC8tIHBlciBzYW1wbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMjBcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJTZW5zb3IgUmVzZWFyY2ggTGFiXCIsXHJcbiAgICAgICAgICAgIFwiUHJlc2VudEZhY2lsaXRpZXNcIjogXCJTbWFydCBTY29wZSA0LE9wdGljYWwgQ2hhbm5lbHMsVXB0byAxNkZHQlMgKERTVCBQcm9qZWN0IEdyYW50KVwiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCIxOS8xMC8yMDEzXCIsXHJcbiAgICAgICAgICAgIFwiQ29zdE9mQXNzZXRcIjogXCIxNiw1NCw0MDUvLVwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjEwMDAvLSBwZXIgc2FtcGxlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjIxXCIsXHJcbiAgICAgICAgICAgIFwiTmFtZU9mTGFiXCI6IFwiU2Vuc29yIFJlc2VhcmNoIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiRmllbGQgT3B0aWNhbCBTcGVjdHJ1bSBBbmFseXplciAmIEJyb2FkIEJhbmQgT3B0aWNhbCBTb3VyY2UgU2xlZCAoMTU1ME5NKSB3aXRoIE9TQSBjYWJsZVwiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCIzMC8wMy8yMDEyXCIsXHJcbiAgICAgICAgICAgIFwiQ29zdE9mQXNzZXRcIjogXCIxNSw3NSwwMDAvLVwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjEwMDAvLSBwZXIgc2FtcGxlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjIyXCIsXHJcbiAgICAgICAgICAgIFwiTmFtZU9mTGFiXCI6IFwiU2Vuc29yIFJlc2VhcmNoIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiSGlnaCBSZXNvbHV0aW9uIFNwZWN0cm9tZXRlciB3aXRoIExpZ2h0IFNvdXJjZSwgUHJvYmVzIGFuZCBBY2Nlc3NvcmllcyAoRFJETyBQcm9qZWN0IEdyYW50KVwiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCIxMi0wMi0xMVwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiMTIsMDcsMTAzLy1cIixcclxuICAgICAgICAgICAgXCJVc2FnZUNoYXJnZXNcIjogXCIxMDAwLy0gcGVyIHNhbXBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCIyM1wiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIlNlbnNvciBSZXNlYXJjaCBMYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIkhpZ2ggcmVzb2x1dGlvbiBTcGVjdHJvbWV0ZXIgd2l0aCwgYSkgbGlnaHQgc291cmNlYikgZGV0ZWN0b3IsIGMpIGxhcHRvcCBhbmQgb3RoZXIgQWNjZXNzb3JpZXMuXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjI3LzA2LzIwMTFcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjYsNzQsNzgyLy1cIixcclxuICAgICAgICAgICAgXCJVc2FnZUNoYXJnZXNcIjogXCIxMDAwLy0gcGVyIHNhbXBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCIyNFwiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIlNlbnNvciBSZXNlYXJjaCBMYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIk9wdGlzdWl0ZSwgIE9wdGlGRFRET3B0aSBTeXN0ZW0uIE9wdGlTcGljZSZPcHRpIEJQTSwgIE9wdGlHcmF0dGluZyAoRFJETyBMQUIpXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjEyLTAyLTIwMTRcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjE5LDg1LDAyNS8tXCIsXHJcbiAgICAgICAgICAgIFwiVXNhZ2VDaGFyZ2VzXCI6IFwiMzAwLy0gcGVyIGhvdXJzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjI1XCIsXHJcbiAgICAgICAgICAgIFwiTmFtZU9mTGFiXCI6IFwiU2Vuc29yIFJlc2VhcmNoIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiUlNvZnREaWZmZWN0IE1PRCBhZGQtb24gJiBGRU1TSU0gYWRkLW9uIHYyMDE0LjA5IFMvV1wiLFxyXG4gICAgICAgICAgICBcIlllYXJPZkVzdGFibGlzaG1lbnRcIjogXCJGT1MvSU4vMTQxMyAwMS0xMi0xNFwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiNiw5OCwyNTAvLVwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjMwMC8tIHBlciBob3Vyc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCIyNlwiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIlNlbnNvciBSZXNlYXJjaCBMYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIkNPTVNPTCBNdWx0aXBoeXNpY3MsIFJGIE1vZHVsZXMsIFdhdmUgT3B0aWNzIE1vZHVsZSAoVkxTSSBMQUIpXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjE4LTExLTIwMTRcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjYsMDksMzY4Ly1cIixcclxuICAgICAgICAgICAgXCJVc2FnZUNoYXJnZXNcIjogXCIzMDAvLSBwZXIgaG91cnNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMjdcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJTZW5zb3IgUmVzZWFyY2ggTGFiXCIsXHJcbiAgICAgICAgICAgIFwiUHJlc2VudEZhY2lsaXRpZXNcIjogXCJSU29mdCBDQUQgR1VJIHYyMDEzLjEyIFNvZnR3YXJlIHdpdGggYWRkLW9uIGZ1bGwgd2F2ZSBzaW5nbGUgVXNlciBOb2RlIExvY2tlZCBBY2FkZW1pYyBMaWNlbnNlIGZvciBXaW5kb3cgNy84XCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIkZPUy9JTi8xNDEwIDIzLTA2LTIwMTRcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjgsMjksNTAwLy1cIixcclxuICAgICAgICAgICAgXCJVc2FnZUNoYXJnZXNcIjogXCIzMDAvLSBwZXIgaG91cnNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMjhcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJTZW5zb3IgUmVzZWFyY2ggTGFiXCIsXHJcbiAgICAgICAgICAgIFwiUHJlc2VudEZhY2lsaXRpZXNcIjogXCJPcHRpIFN5c3RlbSAoUFJPSkVDVCBMQUIpXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIkdTSS8xMS4xMi8xMCAyMC0wMS0yMDEyXCIsXHJcbiAgICAgICAgICAgIFwiQ29zdE9mQXNzZXRcIjogXCI4LDY4LDYxMy8tXCIsXHJcbiAgICAgICAgICAgIFwiVXNhZ2VDaGFyZ2VzXCI6IFwiMzAwLy0gcGVyIGhvdXJzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJTZXJpYWxOb1wiOiBcIjI5XCIsXHJcbiAgICAgICAgICAgIFwiTmFtZU9mTGFiXCI6IFwiVENBRCBMYWJcIixcclxuICAgICAgICAgICAgXCJQcmVzZW50RmFjaWxpdGllc1wiOiBcIlNDUyBQYXJhbWV0ZXIgQW5hbHl6ZXIgU3lzdGVtXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIjE2LzAxLzIwMTdcIixcclxuICAgICAgICAgICAgXCJDb3N0T2ZBc3NldFwiOiBcIjIxLDIxLDAwMC8tXCIsXHJcbiAgICAgICAgICAgIFwiVXNhZ2VDaGFyZ2VzXCI6IFwiMTAwMC8tIFBlciBTYW1wbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMzBcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJUQ0FEIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwiQWR2YW5jZSAoM0QpIFN5bm9wc3lzIFRDQUQgVW5pdmVyc2l0eSBCdW5kbGVcIixcclxuICAgICAgICAgICAgXCJZZWFyT2ZFc3RhYmxpc2htZW50XCI6IFwiMTkvMDEvMjAxNlwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiNSwwMSw5NjAvLVwiLFxyXG4gICAgICAgICAgICBcIlVzYWdlQ2hhcmdlc1wiOiBcIjMwMC8tIHBlciBob3VycyAob25seSBhY2FkZW1pYyBwdXJwb3NlKVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiU2VyaWFsTm9cIjogXCIzMVwiLFxyXG4gICAgICAgICAgICBcIk5hbWVPZkxhYlwiOiBcIlZMU0kgTGFiXCIsXHJcbiAgICAgICAgICAgIFwiUHJlc2VudEZhY2lsaXRpZXNcIjogXCJMb2dpYyBBbmFseXplciAoMzQgQ2hhbm5lbClcIixcclxuICAgICAgICAgICAgXCJZZWFyT2ZFc3RhYmxpc2htZW50XCI6IFwiMTItMTEtMjAxM1wiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiMTEsMzksMjUwLy1cIixcclxuICAgICAgICAgICAgXCJVc2FnZUNoYXJnZXNcIjogXCJScyAxMDAwL2hvdXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIlNlcmlhbE5vXCI6IFwiMzJcIixcclxuICAgICAgICAgICAgXCJOYW1lT2ZMYWJcIjogXCJWTFNJIExhYlwiLFxyXG4gICAgICAgICAgICBcIlByZXNlbnRGYWNpbGl0aWVzXCI6IFwi4pePIFN5bm9wc3lzICg1IGxpY2Vuc2VzKSAqLOKXjyBYaWxpbnggU0RTb0MgKDI1IGxpY2Vuc2VzKSos4pePIE1lbnRvciAoMjAgbGljZW5zZXMpICril48gQ2FkZW5jZSAoMTAgbGljZW5zZXMpICos4pePIFhpbGlueCBWaXZhcmRvIERlc2lnbiBTdWl0ZSAyMDE1ICgyNSBsaWNlbnNlcykqXCIsXHJcbiAgICAgICAgICAgIFwiWWVhck9mRXN0YWJsaXNobWVudFwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcIkNvc3RPZkFzc2V0XCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwiVXNhZ2VDaGFyZ2VzXCI6IFwiUnMuIDMwMC8tIHBlciBob3VycyAgKG9ubHkgYWNhZGVtaWMgcHVycG9zZSlcIlxyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZhY2lsaXRpZXNIZWFkZXIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbC1oaWRlIG92ZXJmbG93LXktc2Nyb2xsICBtdC00IGJnLWdyYXktMTAwXCIgc3R5bGU9e2RpdlN0eWxlcn0+XHJcbiAgICAgICAgICAgICAgICB7RmFjaWxpdGllc0FycmF5Lm1hcCgoZmFjaWxpdHkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8RmFjdWx0eUNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgZmFjaWxpdHk9e2ZhY2lsaXR5fSBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2ZhY2lsaXR5LlNlcmlhbE5vfXsuLi5mYWNpbGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjaWxpdGllczsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBGYWNpbGl0aWVzSGVhZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCBwLTEwIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBIZWFkaW5nICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS02MDAgdGV4dC0zeGwgZm9udC1ib2xkXCI+UmVzZWFyY2ggRmFjaWxpdGllczwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjaWxpdGllc0hlYWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBGYWNpbGl0eSh7U2VyaWFsTm8sIE5hbWVPZkxhYiwgUHJlc2VudEZhY2lsaXRpZXMsIFllYXJPZkVzdGFibGlzaG1lbnQsIENvc3RPZkFzc2V0LCBVc2FnZUNoYXJnZXN9KXtcclxuICAgICAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTMgYmctZ3JheS0yMDAgaG92ZXI6YmctZ3JheS0zMDAgYmxvY2sganVzdGlmeS1jZW50ZXIgcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXhsIHB4LTUgcHktNCBteS00XCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgdGV4dC1sZ1wiPntTZXJpYWxOb30uIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTEgZmxleCBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCAgdGV4dC1ncmF5LTUwMFwiPk5hbWUgb2YgTGFiIDoge05hbWVPZkxhYn08L2gxPiBcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBmbGV4IHRleHQtZ3JheS01MDBcIj5MYWItRmFjaWxpdGllcyA6ICZuYnNwO3tQcmVzZW50RmFjaWxpdGllc31cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+PC9wPjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbXktMSBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgIHRleHQtZ3JheS01MDBcIj5ZZWFyIE9mIEVzdGFibGlzaG1lbnQgOiZuYnNwOzwvaDE+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57WWVhck9mRXN0YWJsaXNobWVudH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTEgZmxleCBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCAgdGV4dC1ncmF5LTUwMFwiPkNvc3Qgb2YgQXNzZXQgOiZuYnNwOzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPntDb3N0T2ZBc3NldH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggdGV4dC1ncmF5LTYwMCBmb250LWJvbGRcIj5Vc2FnZSBDaGFyZ2VzIDo8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj4mbmJzcDt7VXNhZ2VDaGFyZ2VzfTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjaWxpdHk7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCAgbXQtMVwiPlxyXG4gICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJweC01XCIgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNCBmbGV4IGZsZXgtcm93XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMSBmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC0zIG1kOm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFN1YiBIZWFkaW5nICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1ncmF5LTYwMCBmb250LWJvbGQgdGV4dC1tZFwiPkVsZWN0cm9uaWNzIERlcGFydG1lbnQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWdyYXktNjAwIHRleHQteHNcIj4gTmF0aW9uYWwgaW5zdGl0dXRlIG9mIFRlY2hub2xvZ3ksIFNVUkFUIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTVk5JVCBsb2dvICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTMyIGZsZXggaC0xMiB3LTEyIHRleHQtY2VudGVyIG1kOmp1c3RpZnktZW5kIG1kOm1yLTMyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIlwiIHNyYz1cImltYWdlcy9OSVRfU3VyYXRfTG9nby5zdmcucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBwdC0xIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHRleHQteGwgdGV4dC1ncmF5LTYwMCBmb250LXNlbWlib2xkXCI+Rm9sbG93IHVzIG9uOiA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBweC0yIHBiLTIgcHQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9tLmZhY2Vib29rLmNvbS9FbGVjdHJvbmljcy1Db21tdW5pY2F0aW9uLUVuZ2luZWVyaW5nLURlcGFydG1lbnQtU1ZOSVQtU3VyYXQtMTcwNDIyNDY2MzE0MDU1NC9cIj48c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGZvbnQtc2VtaWJvbGQgcC0xIG1kOnAtM1wiPjxpbWcgY2xhc3NOYW1lPVwidy0xMFwiIHNyYz1cImltYWdlcy9Gb290ZXItaWNvbnMvRmFjZWJvb2staWNvbi5zdmdcIi8+Jm5ic3A7PHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+RmFjZWJvb2s8L3A+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgcC0zXCI+PGltZyBjbGFzc05hbWU9XCJ3LTEwXCIgc3JjPVwiaW1hZ2VzL0Zvb3Rlci1pY29ucy9Zb3VUdWJlLWljb24uc3ZnXCIvPiZuYnNwOzxhPllvdXR1YmU8L2E+PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLmNvbS9zdm5pdC5vZmZpY2lhbD9pZ3NoaWQ9cndsdmhyeXpmaWkyXCI+PHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBmb250LXNlbWlib2xkIHAtMSBtZDpwLTNcIj48aW1nIGNsYXNzTmFtZT1cInctMTBcIiBzcmM9XCJpbWFnZXMvRm9vdGVyLWljb25zL0luc3RhZ3JhbS1pY29uLnN2Z1wiLz4mbmJzcDs8cCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5JbnN0YWdyYW08L3A+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L3Mtdi1uYXRpb25hbC1pbnN0aXR1dGUtb2YtdGVjaG5vbG9neS1zdm5pdC1zdXJhdC1uaXQtc3VyYXQtXCI+PHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBmb250LXNlbWlib2xkIHAtMSBtZDpwLTNcIj48aW1nIGNsYXNzTmFtZT1cInctMTBcIiBzcmM9XCJpbWFnZXMvRm9vdGVyLWljb25zL0xpbmtlZEluLWljb24uc3ZnXCIvPiZuYnNwOzxwIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPkxpbmtlZEluPC9wPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL05JVF9TdXJhdD9zPTIwXCI+PHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBmb250LXNlbWlib2xkIHAtMSBtZDpwLTNcIj48aW1nIGNsYXNzTmFtZT1cInctMTBcIiBzcmM9XCJpbWFnZXMvRm9vdGVyLWljb25zL1R3aXR0ZXItaWNvbi5zdmdcIi8+Jm5ic3A7PHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+VHdpdHRlcjwvcD48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHktMyBweC01IHRleHQteHMgbWQ6dGV4dC1sIHRleHQtZ3JheS0yMDAgZmxleCBqdXN0aWZ5LWNlbnRlclwiPiZjb3B5OyAyMDIxIEVsZWN0cm9uaWNzIERlcGFydG1lbnQgLCBhbGwgcmlnaHRzIHJlc2VydmVkICYjNjQ7IE5hdGlvbmFsIGluc3RpdHV0ZSBvZiBUZWNobm9sb2d5LCBTVVJBVCA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKXtcclxuICAgIGNvbnN0IGltYWdlU3R5bGUgPSB7XHJcbiAgICAgICAgd2lkdGg6OTAsXHJcbiAgICAgICAgaGVpZ3RoOjkwXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNCBmbGV4IGZsZXgtcm93XCIgPlxyXG4gICAgICAgICAgICAgICAgey8qIEhlYWRpbmcgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0zIG1kOm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS02MDAgZm9udC1ib2xkIHRleHQteGxcIj5FbGVjdHJvbmljcyBEZXBhcnRtZW50PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS02MDBcIj4gTmF0aW9uYWwgaW5zdGl0dXRlIG9mIFRlY2hub2xvZ3ksIFNVUkFUIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIExPR08gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgbWQ6anVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvTklUX1N1cmF0X0xvZ28uc3ZnLnBuZ1wiIHN0eWxlPXtpbWFnZVN0eWxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VDYXJvdXNlbCBmcm9tIFwiLi9JbWFnZUNhcm91c2VsL0ltYWdlQ2Fyb3VzZWxcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQgYmctZ3JheS0yMDAgZ3JpZCBncmlkLWNvbHMtMVwiPlxyXG5cclxuICAgICAgICAgICAgPEltYWdlQ2Fyb3VzZWwvPlxyXG5cclxuICAgICAgICAgICAgey8qIERlcGFydG1lbnQgTWlzc2lvbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgbS00IGJnLWdyYXktMzAwIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktNjAwIHRleHQtYm9sZCB0ZXh0LWNlbnRlclwiPkRlcGFydG1lbnQgTWlzc2lvbjwvaDY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQtY2VudGVyIHRleHQtbFwiPlRoZSBtaXNzaW9uIG9mIHRoZSBFbGVjdHJvbmljcyBFbmdpbmVlcmluZyBEZXBhcnRtZW50IGlzIHRvIGNvbnRyaWJ1dGUgdG8gc29jaWV0eSBhbmQgaW5kdXN0cnkgdGhyb3VnaCBleGNlbGxlbmNlIGluIGVkdWNhdGlvbiwgcmVzZWFyY2gsIGlubm92YXRpb25zIGFuZCBldGhpY3MgYnkgc3Rha2Vob2xkZXJzLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogRGVwYXJ0bWVudCBNaXNzaW9uICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHAtNiBteC00IG1iLTQgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS02MDAgdGV4dC1ib2xkIHRleHQtY2VudGVyXCI+RGVwYXJ0bWVudCBWaXNpb248L2g2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCB0ZXh0LWNlbnRlciB0ZXh0LWxcIj5UaGUgdmlzaW9uIG9mIHRoZSBFbGVjdHJvbmljcyBFbmdpbmVlcmluZyBEZXBhcnRtZW50IGlzIHRvIEFpbSB0byBhY2hpZXZlIHF1YWxpdHkgaW4gZWR1Y2F0aW9uIGFuZCByZXNlYXJjaCB0byBjcmVhdGUgbGVhZGluZyBFbGVjdHJvbmljcyBlbmdpbmVlcnMsIHJlc2VhcmNoZXJzIGFuZCBlbnRyZXByZW5ldXJzLjwvcD4gIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VTbGlkZSBmcm9tIFwiLi9JbWFnZVNsaWRlL0ltYWdlU2xpZGVcIjtcclxuXHJcbmZ1bmN0aW9uIEltYWdlQ2Fyb3VzZWwoKXtcclxuXHJcbiAgICBjb25zdCBpbWFnZXNBcnJheSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9lY2VkSW1hZ2VzL2VjZWQtMS5qcGdcIixcclxuICAgICAgICAgICAgXCJrZXlcIjpcIjFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZWNlZEltYWdlcy9lY2VkLTIuanBnXCIsXHJcbiAgICAgICAgICAgIFwia2V5XCI6XCIyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC0zLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9lY2VkSW1hZ2VzL2VjZWQtNC5qcGdcIixcclxuICAgICAgICAgICAgXCJrZXlcIjpcIjRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZWNlZEltYWdlcy9lY2VkLTUuanBnXCIsXHJcbiAgICAgICAgICAgIFwia2V5XCI6XCI1XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC02LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiNlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9lY2VkSW1hZ2VzL2VjZWQtNy5qcGdcIixcclxuICAgICAgICAgICAgXCJrZXlcIjpcIjdcIlxyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbiAgICB2YXIgc2xpZGVJbmRleCA9IDA7XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1NsaWRlcygpIHtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICB2YXIgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm15U2xpZGVzXCIpO1xyXG4gICAgICAgIHZhciBkb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRvdFwiKTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7ICBcclxuICAgICAgICB9XHJcbiAgICAgICAgc2xpZGVJbmRleCsrO1xyXG4gICAgICAgIGlmIChzbGlkZUluZGV4ID4gc2xpZGVzLmxlbmd0aCkge3NsaWRlSW5kZXggPSAxfSAgICBcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkb3RzW2ldLmNsYXNzTmFtZSA9IGRvdHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzbGlkZXNbc2xpZGVJbmRleC0xXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgXHJcbiAgICAgICAgZG90c1tzbGlkZUluZGV4LTFdLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcclxuICAgICAgICBzZXRUaW1lb3V0KHNob3dTbGlkZXMsIDUwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2hvd1NsaWRlcygpO1xyXG4gICAgfSwgW3NsaWRlSW5kZXhdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBteC00IHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuIG1kOm14LTBcIj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVzaG93LWNvbnRhaW5lciBtZDpoLTk2XCI+XHJcblxyXG4gICAgICAgICAgICAgICAge2ltYWdlc0FycmF5Lm1hcCgoaW1hZ2UpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VTbGlkZSBrZXk9e2ltYWdlLmlkfXsuLi5pbWFnZX0vPiAgICBcclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIiBzdHlsZT17e3RleHRBbGlnbm1lbnQ6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDYXJvdXNlbDtcclxuXHJcblxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJtdC00IG14LTQgcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gbWQ6bXgtMFwiPiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXNob3ctY29udGFpbmVyIGgtOTYgXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1jb250YWluZXIgbXlTbGlkZXMgZmFkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG51bWJlcnRleHRcIj4xIC8gMzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNsaWRlLWltYWdlXCIgc3JjPVwiaW1hZ2VzL2VjZWRJbWFnZXMvMy5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPkNhcHRpb24gVGV4dDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1jb250YWluZXIgbXlTbGlkZXMgZmFkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG51bWJlcnRleHRcIj4yIC8gMzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2xpZGUtaW1hZ2VcIiBzcmM9XCJpbWFnZXMvZWNlZEltYWdlcy80LmpwZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5DYXB0aW9uIFR3bzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1jb250YWluZXIgbXlTbGlkZXMgZmFkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG51bWJlcnRleHRcIj4zIC8gMzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2xpZGUtaW1hZ2VcIiBzcmM9XCJpbWFnZXMvZWNlZEltYWdlcy81LmpwZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5DYXB0aW9uIFRocmVlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIiBzdHlsZT17e3RleHRBbGlnbm1lbnQ6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEltYWdlU2xpZGUoe2ltYWdlU3JjfSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1jb250YWluZXIgbXlTbGlkZXMgZmFkZVwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNsaWRlLWltYWdlXCIgc3JjPXtpbWFnZVNyY30gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTbGlkZTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdG9nZ2xlciBmcm9tIFwiLi90b2dnbGVyXCJcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpe1xyXG4gICAgY29uc3QgbXlTdHlsZSA9IHtcclxuICAgICAgICB3aWR0aDoyMFxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdG9nZ2xlcigpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBtZDpjb2wtc3Bhbi0xIG0tMyBiZy1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICA8bmF2ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IGJvcmRlci1iIGJvcmRlci1ncmF5LTEwMCBmbGV4IGp1c3RpZnktYmV0d2VlbiAgbWQ6ZmxleCBtZDpqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbCBmb250LWJvbGQgIHVwcGVyY2FzZSBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgY3Vyc29yLXBvaW50ZXIgdGV4dC14bCBob3Zlcjp0ZXh0LWdyYXktMTAwXCI+RWxlY3Ryb25pY3MgRGVwYXJ0bWVudDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBjdXJzb3ItcG9pbnRlciBtZDpoaWRkZW5cIiBpZD1cIm1lbnVCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgaC04IHctOFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRleHQtbGVmdCBoaWRkZW4gbWQ6YmxvY2tcIiBpZD1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcC02IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImgtNiB3LTZcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMyAxMmwyLTJtMCAwbDctNyA3IDdNNSAxMHYxMGExIDEgMCAwMDEgMWgzbTEwLTExbDIgMm0tMi0ydjEwYTEgMSAwIDAxLTEgMWgtM20tNiAwYTEgMSAwIDAwMS0xdi00YTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2NGExIDEgMCAwMDEgMW0tNiAwaDZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4gPGEgaHJlZj1cIi4vXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTEwMFwiPiZuYnNwO0hvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcHgtNiBwYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaC01IHctNVwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTggMTBhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS03IDRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0tMS05YTEgMSAwIDAwLTEgMXY0YTEgMSAwIDEwMiAwVjZhMSAxIDAgMDAtMS0xelwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPjxhIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS0xMDBcIj4mbmJzcDtBYm91dDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcHgtNiBwYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3N2Z3MvUGVvcGxlLnN2Z1wiIHN0eWxlPXtteVN0eWxlfS8+PGEgaHJlZj1cIkZhY3VsdGllc1BhZ2VcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMTAwXCI+Jm5ic3A7RmFjdWx0aWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtZ3JheS00MDAgdGV4dC14bCBweC02IHBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvc3Zncy9SZXNlYXJjaC5zdmdcIiBzdHlsZT17bXlTdHlsZX0vPjxhIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS0xMDBcIiBocmVmPVwiUmVzZWFyY2hQYWdlXCI+Jm5ic3A7UHJvamVjdHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdGV4dC1ncmF5LTQwMCB0ZXh0LXhsIHB4LTYgcGItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctNlwiIHNyYz1cImltYWdlcy9zdmdzL0ZhY2lsaXRpZXMuc3ZnXCIvPjxhIGhyZWY9XCJSZXNlYXJjaEZhY2lsaXRpZXNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMTAwXCI+Jm5ic3A7RmFjaWxpdGllczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZXIoKXtcclxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVCdXR0b25cIik7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xyXG5cclxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+XHJcbiAgICAge1xyXG4gICAgICAgIGlmKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZ2dsZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhci9OYXZiYXJcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL0hvbWUvSG9tZVwiO1xyXG5cclxuZnVuY3Rpb24gUGFnZUxheW91dCh7Y2hpbGRyZW59KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTRcIj5cclxuICAgICAgICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMyBwLTNcIj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUxheW91dDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==