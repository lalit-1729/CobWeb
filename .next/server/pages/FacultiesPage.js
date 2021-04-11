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
/* harmony import */ var _src_Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Components/Footer/Footer */ "./src/Components/Footer/Footer.js");
/* harmony import */ var _src_Components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Components/Loader/Loader */ "./src/Components/Loader/Loader.js");

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\pages\\FacultiesPage.js";







function FacultiesPage() {
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
    setTimeout(() => setStatus(REQUEST_STATUS.SUCCESS), 4000);
  }, []);
  const success = status === REQUEST_STATUS.SUCCESS;
  const isLoading = status === REQUEST_STATUS.LOADLING;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 27
    }, this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_PageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Faculties_Faculties__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
    "email": "ahl@eced.svnit.ac.in",
    "teachingField": "Telematics \nRF & Microwave Engineering",
    "areaOfResearch": "RF & Microwave Engineering \nImage Processing"
  }, {
    "imageSrc": "images/faculties/UpenaDalal.jpg",
    "name": "Dr.(Mrs) Upena D. Dalal",
    "qualification": "Ph.D",
    "designation": "Professor",
    "email": "udd@eced.svnit.ac.in",
    "teachingField": "Digital communication\nAdhoc Networks\nWideband communication\nMobile computing",
    "areaOfResearch": "Wireless Communication techniques\n5G technology\nWireless systems \nOptical wireless\nSignal processing"
  }, {
    "imageSrc": "images/faculties/NBKanirkar.jpg",
    "name": "Prof. Naresh B. Kanirkar",
    "qualification": "M.Tech.",
    "designation": "Associate Professor",
    "email": "nbk@eced.svnit.ac.in",
    "teachingField": "Basic of Electronics Engineering \nElectronic Devices & Circuits \nSolid State Devices",
    "areaOfResearch": "CDMA \nMobile Communication"
  }, {
    "imageSrc": "images/faculties/prashant.jpg",
    "name": "Dr. Prashant K. Shah",
    "qualification": "M.E.",
    "designation": "Associate Professor",
    "email": "pks@eced.svnit.ac.in",
    "teachingField": "Basics of Electronics Engineering \nDigital Circuits \nMicroprocessor \nDigital Signal Processing",
    "areaOfResearch": "LMI Based Improved Stability Criteria (DSP based)"
  }, {
    "imageSrc": "images/faculties/Abhishek.jpg",
    "name": "Dr. Abhishek Acharya",
    "qualification": "PhD (Microelectronics & VLSI), IIT Roorkee",
    "designation": "Assistant Professor",
    "email": "abhishek@eced.svnit.ac.in",
    "teachingField": "Electronic Devices\nElectronic Circuits\nLinear Integrated Circuits\nVLSI Design",
    "areaOfResearch": "Physics & Modeling of Nano-Scale Devices\nDevice-Circuit Interactions in Nano-Scale Transistors\nWide Bandgap Semiconductors and \n2D Materials for Devices & Circuits"
  }, {
    "imageSrc": "images/faculties/Jignesh.jpg",
    "name": "Dr. Jignesh N. Sarvaiya",
    "qualification": "Ph. D.",
    "designation": "Associate Professor",
    "email": "jns@eced.svnit.ac.in",
    "teachingField": "Electronic System Design\nDigital Image Processing\n Information Theory & Coding\nAnalog Integrated Circuits",
    "areaOfResearch": "Image Processing\nMedical Instrumentation"
  }, {
    "imageSrc": "images/faculties/darjiSir.jpg",
    "name": "Dr. Anand D. Darji",
    "qualification": "Ph.D. (Microelectronics), IIT Bombay",
    "designation": "Associate Professor",
    "email": "add@eced.svnit.ac.in",
    "teachingField": "VLSI Design\nElectronics Instrumentation\nDigital Integrated Circuits\nDigital VLSI Design (PG)\nVLSI System Design ( PG-Elective)",
    "areaOfResearch": "VLSI Design\nFPGA-based systems design\nDevice modelling\nVLSI DSP architecture\nEmbedded System Design\nElectronics Instrumentation\nSignal Processing\bBio-medical Signal/image processing"
  }, {
    "imageSrc": "images/faculties/piyushPatel.png",
    "name": "Dr. PIYUSH N. PATEL",
    "qualification": "Ph. D.",
    "designation": "Associate Professor",
    "email": "pnp@eced.svnit.ac.in",
    "teachingField": "Optical Communication Systems\nOptical Networks\nAnalog and Digital Communication Systems\nSensors and Transducers\nElectronic Devices and Circuits",
    "areaOfResearch": "Optical Communications and Networks\nPhotonics Devices & Sensors\nMicrowave Antenna and Wavegudes\nMetamaterial based Sensors\nOptical, RF, Metamaterial based Sensors & Biosensors"
  }, {
    "imageSrc": "images/faculties/zuber.jpg",
    "name": "Dr. Zuber M. Patel",
    "qualification": "Ph. D.",
    "designation": "Associate Professor",
    "email": "zmp@eced.svnit.ac.in",
    "teachingField": "Digital Logic design\nEmbedded Systems\nMicroelectronics and VLSI\nMicrocontrollers and Interfacing",
    "areaOfResearch": "HDL/FPGA based design\nVLSI Design of RISC Microprocessors\nFPGA/ASIC Design of wireless transceiver hardware\nEmbedded Systems"
  }, {
    "imageSrc": "images/faculties/Pinal.jpg",
    "name": "Dr. Pinalkumar J. Engineer",
    "qualification": "Ph. D.",
    "designation": "Assistant Professor",
    "email": "pje@eced.svnit.ac.in",
    "teachingField": "Advanced Processor Architecture\nDSP Structures for VLSI\nEmbedded Systems\nReal Time Systems",
    "areaOfResearch": "FPGA based system design\nVLSI architecture for real-time signal/image processing\nHigh performance embedded computing\nEmbedded and real-time systems"
  }, {
    "imageSrc": "images/faculties/Rasika.jpg",
    "name": "Dr. (Mrs.) Rasika N. Dhavse",
    "qualification": "Ph. D.",
    "designation": "Associate Professor",
    "email": "rsk@eced.svnit.ac.in",
    "teachingField": "VLSI Design\nVLSI Technology\nElectronic Circuits",
    "areaOfResearch": "VLSI Design"
  }, {
    "imageSrc": "images/faculties/abhilash.jpg",
    "name": "Dr. Abhilash S. Mandloi",
    "qualification": "Ph. D.",
    "designation": "Assistant Professor",
    "email": "asm@eced.svnit.ac.in",
    "teachingField": "Optical Networks Advance Optical \nCommunication Systems \nBasics of Electronics Engineering \nData Communication and Networks \nLinear Electronics",
    "areaOfResearch": "Fibre Optics Optical Communications \nOptical Networks, Free Space Optics \nPhotonic Devices, Integrated Optics"
  }, {
    "imageSrc": "images/faculties/jigisha.png",
    "name": "Dr. (Ms.) Jigisha N. Patel",
    "qualification": "Ph. D.",
    "designation": "Associate Professor",
    "email": "jnpatel@eced.svnit.ac.in",
    "teachingField": "Information Theory and Coding \nMultimedia Communication \nDigital Logic Design \nImage processing",
    "areaOfResearch": "Wireless Communication \nImage / Video Coding"
  }, {
    "imageSrc": "images/faculties/ShilpiGupta.jpg",
    "name": "Dr. (Ms.) Shilpi Gupta",
    "qualification": "Ph. D.",
    "designation": "Associate Professor",
    "email": "sgupta@eced.svnit.ac.in",
    "teachingField": "Digital satellite Communication \nDigital Electronics \nElectronics Devices and Circuits \nMIMO Technology \nAnalog and Digital Communication",
    "areaOfResearch": "5G Technology \nMassive MIMO Detection Techniques \nAntenna Design for 5G Applications \nWaveform Designing for MIMO Radar \nFree Space Optics \nFiber Optic Sensors"
  }, {
    "imageSrc": "images/faculties/Golak.jpg",
    "name": "Prof. Golak Santra",
    "qualification": "M.E.",
    "designation": "Assistant Professor",
    "email": "s.golak@eced.svnit.ac.in",
    "teachingField": "EM Theory \nAnalog Integrated Circuit \nMicrowave Integrated Circuit,Microwave \nEngineering",
    "areaOfResearch": "Patch AntennaMicro-strip filter"
  }, {
    "imageSrc": "images/faculties/Sweta.jpg",
    "name": "Dr. (Mrs.) Shweta N. Shah",
    "qualification": "Ph. D.",
    "designation": "Assistant Professor",
    "email": "snshah@eced.svnit.ac.in",
    "teachingField": "Basics of Communication System \nMobile Communication \nWireless Communication \nMobile Computing",
    "areaOfResearch": "Wireless Communication \nMobile Communication and standards \nDigital Video Broadcast and standards \nCognitive Radio \nNavIC/IRNSS"
  }, {
    "imageSrc": "images/faculties/mehul.jpg",
    "name": "Prof. Mehul C. Patel",
    "qualification": "M.E.",
    "designation": "Assistant Professor",
    "email": "mcp@eced.svnit.ac.in",
    "teachingField": "Information Theory & Coding \nApplication of DSP \nAnalog & Digital Communication \nSatellite Communication",
    "areaOfResearch": "Digital Signal Processing using VLSI"
  }, {
    "imageSrc": "images/faculties/kishore.jpg",
    "name": "Dr. Kishor P. Upla",
    "qualification": "Post Doctoral Fellow-ERCIM (NTNU, Norway),Ph.D. (DA-IICT, Gandhinagar)",
    "designation": "Assistant Professor",
    "email": "kpu@eced.svnit.ac.in",
    "teachingField": "Signals & Systems \nDigital Signal Processing \nElectronics Devices & Circuits \nCommunication Systems",
    "areaOfResearch": "Machine/Deep Learning \nObject detection/recognition, \nMulti-spectral and hyperspectral image processing \nImage Restoration \nBio-medical Image Fusion \nInformation Fusion \nMulti-Resolution Image Fusion/Pan-Sharpening \nImage Super - Resolution"
  }, {
    "imageSrc": "images/faculties/SumanDeb.png",
    "name": "Dr. Suman Deb",
    "qualification": "Ph.D. (IIT Guwahati)",
    "designation": "Assistant Professor",
    "email": "sumandeb@eced.svnit.ac.in",
    "teachingField": "Advance Digital Signal Processing \nDigital Signal Processing, \nAd-Hoc Networks",
    "areaOfResearch": "Signal Processing,Speech \nProcessing,Speech based Health Analysis \nEmotion Analysis based on Speech and \nImage,Speech Pathology Detection \nVoice Conversion/Speaker Identity \nConversion,Pattern Recognition"
  }, {
    "imageSrc": "images/faculties/deepakJoshi.png",
    "name": "Dr. Deepak Joshi",
    "qualification": "Ph.D. (IIT Guwahati)",
    "designation": "Assistant Professor",
    "email": "d.joshi@eced.svnit.ac.in",
    "teachingField": "Testing and Verification of VLSI Circuits",
    "areaOfResearch": "Metaheuristics, Analog Circuits: Design and Optimization \nComputational Intelligence, CAD for VLSI"
  }, {
    "imageSrc": "images/faculties/kamal.jpg",
    "name": "Dr. Kamal Captain",
    "qualification": "Ph.D. (DAIICT, Gandhinagar)",
    "designation": "Assistant Professor",
    "email": "kamalcaptain@eced.svnit.ac.in",
    "teachingField": "Probability and Random Processes \nSignals and Systems \nDigital Signal Processing \nElectronic System Design",
    "areaOfResearch": "Cognitive Radio, Signal Processing \nStatistical Signal Processing \nWireless Communication, Machine Learning"
  }, {
    "imageSrc": "images/faculties/kirti.png",
    "name": "Dr. Kirti Inamdar",
    "qualification": "Ph.D.",
    "designation": "Assistant Professor",
    "email": "kki@eced.svnit.ac.in",
    "teachingField": "Electromagnetics and wave Propagation Theory \nAntenna Theory, RF & Microwave Theory \nSatellite Communication, RADAR and its Application \nAnalog & digital Communication",
    "areaOfResearch": "Microstrip Patch Antenna design using Metamaterials \nWearable Antennas"
  }];
  const {
    0: searchQuery,
    1: setSearchQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: faculties,
    1: setFaculties
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(facultiesArray);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FacultyHeader_FacultyHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "scroll-hide overflow-y-scroll h-450px mt-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid md:grid-cols-3 sm:grid-cols-2",
        children: facultiesArray.filter(record => {
          const targetString = record.name.toLowerCase();
          return setSearchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
        }).map(faculty => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FacultyCard_FacultyCard__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
          faculty: faculty
        }, faculty), faculty.name, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 214,
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
/* harmony import */ var _KnowMorePopUp_KnowMorePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KnowMorePopUp/KnowMorePopUp */ "./src/Components/Faculties/FacultyCard/KnowMorePopUp/KnowMorePopUp.js");

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Faculties\\FacultyCard\\FacultyCard.js";



function FacultyCard({
  imageSrc,
  name,
  qualification,
  designation,
  email,
  teachingField,
  areaOfResearch
}) {
  const myStyle = {
    width: 300,
    height: 300
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "mx-3 bg-gray-200 hover:bg-gray-300 block justify-center rounded overflow-hidden shadow-2xl px-5 py-4 my-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "block rounded text-gray-800 font-bold text-lg",
        children: [name, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "block text-md text-gray-600",
        children: qualification
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "block flex justify-between items-center text-gray-600",
        children: [designation, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_KnowMorePopUp_KnowMorePopUp__WEBPACK_IMPORTED_MODULE_2__["default"], {
          teachingField: teachingField,
          areaOfResearch: areaOfResearch
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 99
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-3 flex justify-around  px-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "image-container m-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "card-image",
          src: imageSrc
        }, name, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "flex text-gray-600 font-bold",
        children: ["email: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "font-semibold",
          children: ["\xA0", email]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 71
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (FacultyCard);

/***/ }),

/***/ "./src/Components/Faculties/FacultyCard/KnowMorePopUp/KnowMorePopUp.js":
/*!*****************************************************************************!*\
  !*** ./src/Components/Faculties/FacultyCard/KnowMorePopUp/KnowMorePopUp.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactjs-popup */ "reactjs-popup");
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactjs_popup__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Faculties\\FacultyCard\\KnowMorePopUp\\KnowMorePopUp.js";



function NewLineText({
  text
}) {
  const newText = text.split('\n').map(str => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: "text-gray-600 pt-0 px-3",
    children: str
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 49
  }, this));
  return newText;
}

function KnowMorePopUp({
  teachingField,
  areaOfResearch
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactjs_popup__WEBPACK_IMPORTED_MODULE_2___default.a, {
    nested: true,
    trigger: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "btn mt-2 hover:bg-gray-400 cursor-pointer block rounded-full bg-gray-500 px-3 py-1 w-28 text-gray-100 transform hover:scale-110 transition ease-out duration-300",
      children: "Know More"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 32
    }, this),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-gray-300 rounded border-4 border-gray-50 p-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "text-gray-700 font-bold",
        children: "Teaching Field:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NewLineText, {
        text: teachingField
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "text-gray-700 font-bold",
        children: "Area of Research"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NewLineText, {
        text: areaOfResearch
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 14
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (KnowMorePopUp);

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
    className: "bg-gray-300 p-5 mb-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-span-1 flex justify-center mt-3 ",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
          className: "uppercase text-gray-700 text-lg font-bold",
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


function SearchBar({
  searchQuery,
  setSearchQuery
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "rounded bg-gray-400 p-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "w-full p-2 border rounded",
      id: "facultyName",
      type: "text",
      placeholder: "Search Faculty By Name",
      value: searchQuery,
      onChange: e => setSearchQuery(e.target.value)
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

/***/ }),

/***/ "reactjs-popup":
/*!********************************!*\
  !*** external "reactjs-popup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactjs-popup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvRmFjdWx0aWVzUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GYWN1bHRpZXMvRmFjdWx0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZhY3VsdGllcy9GYWN1bHR5Q2FyZC9GYWN1bHR5Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GYWN1bHRpZXMvRmFjdWx0eUNhcmQvS25vd01vcmVQb3BVcC9Lbm93TW9yZVBvcFVwLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZhY3VsdGllcy9GYWN1bHR5SGVhZGVyL0ZhY3VsdHlIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmFjdWx0aWVzL1NlYXJjaEJhci9TZWFyY2hCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ib21lL0hvbWVIZWFkZXIvSG9tZUhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ib21lL0ltYWdlQ2Fyb3VzZWwvSW1hZ2VDYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ib21lL0ltYWdlQ2Fyb3VzZWwvSW1hZ2VTbGlkZS9JbWFnZVNsaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUGFnZUxheW91dC9OYXZiYXIvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BhZ2VMYXlvdXQvTmF2YmFyL3RvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUGFnZUxheW91dC9QYWdlTGF5b3V0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Rqcy1wb3B1cFwiIl0sIm5hbWVzIjpbIkZhY3VsdGllc1BhZ2UiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURMSU5HIiwiU1VDQ0VTUyIsIkVSUk9SIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0Iiwic3VjY2VzcyIsImlzTG9hZGluZyIsIkZhY3VsdGllcyIsImZhY3VsdGllc0FycmF5Iiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImZhY3VsdGllcyIsInNldEZhY3VsdGllcyIsImZpbHRlciIsInJlY29yZCIsInRhcmdldFN0cmluZyIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsImluY2x1ZGVzIiwibWFwIiwiZmFjdWx0eSIsIkZhY3VsdHlDYXJkIiwiaW1hZ2VTcmMiLCJxdWFsaWZpY2F0aW9uIiwiZGVzaWduYXRpb24iLCJlbWFpbCIsInRlYWNoaW5nRmllbGQiLCJhcmVhT2ZSZXNlYXJjaCIsIm15U3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIk5ld0xpbmVUZXh0IiwidGV4dCIsIm5ld1RleHQiLCJzcGxpdCIsInN0ciIsIktub3dNb3JlUG9wVXAiLCJGYWN1bHR5SGVhZGVyIiwiU2VhcmNoQmFyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiRm9vdGVyIiwiSGVhZGVyIiwiaW1hZ2VTdHlsZSIsImhlaWd0aCIsIkhvbWUiLCJIb21lSGVhZGVyIiwiSW1hZ2VDYXJvdXNlbCIsImltYWdlc0FycmF5Iiwic2xpZGVJbmRleCIsInNob3dTbGlkZXMiLCJpIiwic2xpZGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZG90cyIsInN0eWxlIiwiZGlzcGxheSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJpbWFnZSIsImlkIiwidGV4dEFsaWdubWVudCIsIkltYWdlU2xpZGUiLCJMb2FkZXIiLCJOYXZiYXIiLCJ0b2dnbGVyIiwibWVudUJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwiUGFnZUxheW91dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULEdBQXdCO0FBRXBCLFFBQU1DLGNBQWMsR0FBRztBQUNuQkMs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RmFjdWx0aWVzUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvRmFjdWx0aWVzUGFnZS5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRmFjdWx0aWVzIGZyb20gXCIuLi9zcmMvQ29tcG9uZW50cy9GYWN1bHRpZXMvRmFjdWx0aWVzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL3NyYy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IFBhZ2VMYXlvdXQgZnJvbSBcIi4uL3NyYy9Db21wb25lbnRzL1BhZ2VMYXlvdXQvUGFnZUxheW91dFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9zcmMvQ29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL3NyYy9Db21wb25lbnRzL0xvYWRlci9Mb2FkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIEZhY3VsdGllc1BhZ2UoKXtcclxuXHJcbiAgICBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcclxuICAgICAgICBMT0FETElORzpcIkxvYWRpbmdcIixcclxuICAgICAgICBTVUNDRVNTOlwiU1VDQ0VTU1wiLFxyXG4gICAgICAgIEVSUk9SOlwiRXJyb3JcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShSRVFVRVNUX1NUQVRVUy5MT0FETElORyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5TVUNDRVNTKSwgNDAwMCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBzdWNjZXNzID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTO1xyXG4gICAgY29uc3QgaXNMb2FkaW5nID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5MT0FETElORztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPExvYWRlci8+fVxyXG5cclxuXHJcbiAgICAgICAgICAgIHtzdWNjZXNzICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnZUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWN1bHRpZXMvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhZ2VMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY3VsdGllc1BhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL1NlYXJjaEJhci9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IEZhY3VsdHlDYXJkIGZyb20gXCIuL0ZhY3VsdHlDYXJkL0ZhY3VsdHlDYXJkXCI7XHJcbmltcG9ydCBGYWN1bHR5SGVhZGVyIGZyb20gXCIuL0ZhY3VsdHlIZWFkZXIvRmFjdWx0eUhlYWRlclwiXHJcblxyXG5mdW5jdGlvbiBGYWN1bHRpZXMoKXtcclxuXHJcbiAgICBjb25zdCBmYWN1bHRpZXNBcnJheSA9ICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9sYWxsdVdhZGlhLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJQcm9mLiBBLiBILiBMYWxsdXdhZGlhXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIk0uIFRlY2guXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJhaGxAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJUZWxlbWF0aWNzIFxcblJGICYgTWljcm93YXZlIEVuZ2luZWVyaW5nXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJSRiAmIE1pY3Jvd2F2ZSBFbmdpbmVlcmluZyBcXG5JbWFnZSBQcm9jZXNzaW5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvVXBlbmFEYWxhbC5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuKE1ycykgVXBlbmEgRC4gRGFsYWxcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguRFwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJ1ZGRAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJEaWdpdGFsIGNvbW11bmljYXRpb25cXG5BZGhvYyBOZXR3b3Jrc1xcbldpZGViYW5kIGNvbW11bmljYXRpb25cXG5Nb2JpbGUgY29tcHV0aW5nXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJXaXJlbGVzcyBDb21tdW5pY2F0aW9uIHRlY2huaXF1ZXNcXG41RyB0ZWNobm9sb2d5XFxuV2lyZWxlc3Mgc3lzdGVtcyBcXG5PcHRpY2FsIHdpcmVsZXNzXFxuU2lnbmFsIHByb2Nlc3NpbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9OQkthbmlya2FyLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJQcm9mLiBOYXJlc2ggQi4gS2FuaXJrYXJcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiTS5UZWNoLlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwibmJrQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiQmFzaWMgb2YgRWxlY3Ryb25pY3MgRW5naW5lZXJpbmcgXFxuRWxlY3Ryb25pYyBEZXZpY2VzICYgQ2lyY3VpdHMgXFxuU29saWQgU3RhdGUgRGV2aWNlc1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiQ0RNQSBcXG5Nb2JpbGUgQ29tbXVuaWNhdGlvblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL3ByYXNoYW50LmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gUHJhc2hhbnQgSy4gU2hhaFwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJNLkUuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJwa3NAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJCYXNpY3Mgb2YgRWxlY3Ryb25pY3MgRW5naW5lZXJpbmcgXFxuRGlnaXRhbCBDaXJjdWl0cyBcXG5NaWNyb3Byb2Nlc3NvciBcXG5EaWdpdGFsIFNpZ25hbCBQcm9jZXNzaW5nXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJMTUkgQmFzZWQgSW1wcm92ZWQgU3RhYmlsaXR5IENyaXRlcmlhIChEU1AgYmFzZWQpXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvQWJoaXNoZWsuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBBYmhpc2hlayBBY2hhcnlhXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoRCAoTWljcm9lbGVjdHJvbmljcyAmIFZMU0kpLCBJSVQgUm9vcmtlZVwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiYWJoaXNoZWtAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJFbGVjdHJvbmljIERldmljZXNcXG5FbGVjdHJvbmljIENpcmN1aXRzXFxuTGluZWFyIEludGVncmF0ZWQgQ2lyY3VpdHNcXG5WTFNJIERlc2lnblwiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiUGh5c2ljcyAmIE1vZGVsaW5nIG9mIE5hbm8tU2NhbGUgRGV2aWNlc1xcbkRldmljZS1DaXJjdWl0IEludGVyYWN0aW9ucyBpbiBOYW5vLVNjYWxlIFRyYW5zaXN0b3JzXFxuV2lkZSBCYW5kZ2FwIFNlbWljb25kdWN0b3JzIGFuZCBcXG4yRCBNYXRlcmlhbHMgZm9yIERldmljZXMgJiBDaXJjdWl0c1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL0ppZ25lc2guanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBKaWduZXNoIE4uIFNhcnZhaXlhXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLiBELlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiam5zQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiRWxlY3Ryb25pYyBTeXN0ZW0gRGVzaWduXFxuRGlnaXRhbCBJbWFnZSBQcm9jZXNzaW5nXFxuIEluZm9ybWF0aW9uIFRoZW9yeSAmIENvZGluZ1xcbkFuYWxvZyBJbnRlZ3JhdGVkIENpcmN1aXRzXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJJbWFnZSBQcm9jZXNzaW5nXFxuTWVkaWNhbCBJbnN0cnVtZW50YXRpb25cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9kYXJqaVNpci5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIEFuYW5kIEQuIERhcmppXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLkQuIChNaWNyb2VsZWN0cm9uaWNzKSwgSUlUIEJvbWJheVwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiYWRkQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiVkxTSSBEZXNpZ25cXG5FbGVjdHJvbmljcyBJbnN0cnVtZW50YXRpb25cXG5EaWdpdGFsIEludGVncmF0ZWQgQ2lyY3VpdHNcXG5EaWdpdGFsIFZMU0kgRGVzaWduIChQRylcXG5WTFNJIFN5c3RlbSBEZXNpZ24gKCBQRy1FbGVjdGl2ZSlcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIlZMU0kgRGVzaWduXFxuRlBHQS1iYXNlZCBzeXN0ZW1zIGRlc2lnblxcbkRldmljZSBtb2RlbGxpbmdcXG5WTFNJIERTUCBhcmNoaXRlY3R1cmVcXG5FbWJlZGRlZCBTeXN0ZW0gRGVzaWduXFxuRWxlY3Ryb25pY3MgSW5zdHJ1bWVudGF0aW9uXFxuU2lnbmFsIFByb2Nlc3NpbmdcXGJCaW8tbWVkaWNhbCBTaWduYWwvaW1hZ2UgcHJvY2Vzc2luZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL3BpeXVzaFBhdGVsLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gUElZVVNIIE4uIFBBVEVMXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLiBELlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwicG5wQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiT3B0aWNhbCBDb21tdW5pY2F0aW9uIFN5c3RlbXNcXG5PcHRpY2FsIE5ldHdvcmtzXFxuQW5hbG9nIGFuZCBEaWdpdGFsIENvbW11bmljYXRpb24gU3lzdGVtc1xcblNlbnNvcnMgYW5kIFRyYW5zZHVjZXJzXFxuRWxlY3Ryb25pYyBEZXZpY2VzIGFuZCBDaXJjdWl0c1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiT3B0aWNhbCBDb21tdW5pY2F0aW9ucyBhbmQgTmV0d29ya3NcXG5QaG90b25pY3MgRGV2aWNlcyAmIFNlbnNvcnNcXG5NaWNyb3dhdmUgQW50ZW5uYSBhbmQgV2F2ZWd1ZGVzXFxuTWV0YW1hdGVyaWFsIGJhc2VkIFNlbnNvcnNcXG5PcHRpY2FsLCBSRiwgTWV0YW1hdGVyaWFsIGJhc2VkIFNlbnNvcnMgJiBCaW9zZW5zb3JzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvenViZXIuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBadWJlciBNLiBQYXRlbFwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaC4gRC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInptcEBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIkRpZ2l0YWwgTG9naWMgZGVzaWduXFxuRW1iZWRkZWQgU3lzdGVtc1xcbk1pY3JvZWxlY3Ryb25pY3MgYW5kIFZMU0lcXG5NaWNyb2NvbnRyb2xsZXJzIGFuZCBJbnRlcmZhY2luZ1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiSERML0ZQR0EgYmFzZWQgZGVzaWduXFxuVkxTSSBEZXNpZ24gb2YgUklTQyBNaWNyb3Byb2Nlc3NvcnNcXG5GUEdBL0FTSUMgRGVzaWduIG9mIHdpcmVsZXNzIHRyYW5zY2VpdmVyIGhhcmR3YXJlXFxuRW1iZWRkZWQgU3lzdGVtc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL1BpbmFsLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gUGluYWxrdW1hciBKLiBFbmdpbmVlclwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaC4gRC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInBqZUBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIkFkdmFuY2VkIFByb2Nlc3NvciBBcmNoaXRlY3R1cmVcXG5EU1AgU3RydWN0dXJlcyBmb3IgVkxTSVxcbkVtYmVkZGVkIFN5c3RlbXNcXG5SZWFsIFRpbWUgU3lzdGVtc1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiRlBHQSBiYXNlZCBzeXN0ZW0gZGVzaWduXFxuVkxTSSBhcmNoaXRlY3R1cmUgZm9yIHJlYWwtdGltZSBzaWduYWwvaW1hZ2UgcHJvY2Vzc2luZ1xcbkhpZ2ggcGVyZm9ybWFuY2UgZW1iZWRkZWQgY29tcHV0aW5nXFxuRW1iZWRkZWQgYW5kIHJlYWwtdGltZSBzeXN0ZW1zXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvUmFzaWthLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gKE1ycy4pIFJhc2lrYSBOLiBEaGF2c2VcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguIEQuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJyc2tAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJWTFNJIERlc2lnblxcblZMU0kgVGVjaG5vbG9neVxcbkVsZWN0cm9uaWMgQ2lyY3VpdHNcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIlZMU0kgRGVzaWduXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvYWJoaWxhc2guanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBBYmhpbGFzaCBTLiBNYW5kbG9pXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLiBELlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiYXNtQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiT3B0aWNhbCBOZXR3b3JrcyBBZHZhbmNlIE9wdGljYWwgXFxuQ29tbXVuaWNhdGlvbiBTeXN0ZW1zIFxcbkJhc2ljcyBvZiBFbGVjdHJvbmljcyBFbmdpbmVlcmluZyBcXG5EYXRhIENvbW11bmljYXRpb24gYW5kIE5ldHdvcmtzIFxcbkxpbmVhciBFbGVjdHJvbmljc1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiRmlicmUgT3B0aWNzIE9wdGljYWwgQ29tbXVuaWNhdGlvbnMgXFxuT3B0aWNhbCBOZXR3b3JrcywgRnJlZSBTcGFjZSBPcHRpY3MgXFxuUGhvdG9uaWMgRGV2aWNlcywgSW50ZWdyYXRlZCBPcHRpY3NcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9qaWdpc2hhLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gKE1zLikgSmlnaXNoYSBOLiBQYXRlbFwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaC4gRC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImpucGF0ZWxAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJJbmZvcm1hdGlvbiBUaGVvcnkgYW5kIENvZGluZyBcXG5NdWx0aW1lZGlhIENvbW11bmljYXRpb24gXFxuRGlnaXRhbCBMb2dpYyBEZXNpZ24gXFxuSW1hZ2UgcHJvY2Vzc2luZ1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiV2lyZWxlc3MgQ29tbXVuaWNhdGlvbiBcXG5JbWFnZSAvIFZpZGVvIENvZGluZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL1NoaWxwaUd1cHRhLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gKE1zLikgU2hpbHBpIEd1cHRhXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLiBELlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwic2d1cHRhQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiRGlnaXRhbCBzYXRlbGxpdGUgQ29tbXVuaWNhdGlvbiBcXG5EaWdpdGFsIEVsZWN0cm9uaWNzIFxcbkVsZWN0cm9uaWNzIERldmljZXMgYW5kIENpcmN1aXRzIFxcbk1JTU8gVGVjaG5vbG9neSBcXG5BbmFsb2cgYW5kIERpZ2l0YWwgQ29tbXVuaWNhdGlvblwiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiNUcgVGVjaG5vbG9neSBcXG5NYXNzaXZlIE1JTU8gRGV0ZWN0aW9uIFRlY2huaXF1ZXMgXFxuQW50ZW5uYSBEZXNpZ24gZm9yIDVHIEFwcGxpY2F0aW9ucyBcXG5XYXZlZm9ybSBEZXNpZ25pbmcgZm9yIE1JTU8gUmFkYXIgXFxuRnJlZSBTcGFjZSBPcHRpY3MgXFxuRmliZXIgT3B0aWMgU2Vuc29yc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL0dvbGFrLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJQcm9mLiBHb2xhayBTYW50cmFcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiTS5FLlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwicy5nb2xha0BlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIkVNIFRoZW9yeSBcXG5BbmFsb2cgSW50ZWdyYXRlZCBDaXJjdWl0IFxcbk1pY3Jvd2F2ZSBJbnRlZ3JhdGVkIENpcmN1aXQsTWljcm93YXZlIFxcbkVuZ2luZWVyaW5nXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJQYXRjaCBBbnRlbm5hTWljcm8tc3RyaXAgZmlsdGVyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvU3dldGEuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiAoTXJzLikgU2h3ZXRhIE4uIFNoYWhcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguIEQuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJzbnNoYWhAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJCYXNpY3Mgb2YgQ29tbXVuaWNhdGlvbiBTeXN0ZW0gXFxuTW9iaWxlIENvbW11bmljYXRpb24gXFxuV2lyZWxlc3MgQ29tbXVuaWNhdGlvbiBcXG5Nb2JpbGUgQ29tcHV0aW5nXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJXaXJlbGVzcyBDb21tdW5pY2F0aW9uIFxcbk1vYmlsZSBDb21tdW5pY2F0aW9uIGFuZCBzdGFuZGFyZHMgXFxuRGlnaXRhbCBWaWRlbyBCcm9hZGNhc3QgYW5kIHN0YW5kYXJkcyBcXG5Db2duaXRpdmUgUmFkaW8gXFxuTmF2SUMvSVJOU1NcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9tZWh1bC5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJvZi4gTWVodWwgQy4gUGF0ZWxcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiTS5FLlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwibWNwQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiSW5mb3JtYXRpb24gVGhlb3J5ICYgQ29kaW5nIFxcbkFwcGxpY2F0aW9uIG9mIERTUCBcXG5BbmFsb2cgJiBEaWdpdGFsIENvbW11bmljYXRpb24gXFxuU2F0ZWxsaXRlIENvbW11bmljYXRpb25cIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIkRpZ2l0YWwgU2lnbmFsIFByb2Nlc3NpbmcgdXNpbmcgVkxTSVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL2tpc2hvcmUuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBLaXNob3IgUC4gVXBsYVwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQb3N0IERvY3RvcmFsIEZlbGxvdy1FUkNJTSAoTlROVSwgTm9yd2F5KSxQaC5ELiAoREEtSUlDVCwgR2FuZGhpbmFnYXIpXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJrcHVAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJTaWduYWxzICYgU3lzdGVtcyBcXG5EaWdpdGFsIFNpZ25hbCBQcm9jZXNzaW5nIFxcbkVsZWN0cm9uaWNzIERldmljZXMgJiBDaXJjdWl0cyBcXG5Db21tdW5pY2F0aW9uIFN5c3RlbXNcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIk1hY2hpbmUvRGVlcCBMZWFybmluZyBcXG5PYmplY3QgZGV0ZWN0aW9uL3JlY29nbml0aW9uLCBcXG5NdWx0aS1zcGVjdHJhbCBhbmQgaHlwZXJzcGVjdHJhbCBpbWFnZSBwcm9jZXNzaW5nIFxcbkltYWdlIFJlc3RvcmF0aW9uIFxcbkJpby1tZWRpY2FsIEltYWdlIEZ1c2lvbiBcXG5JbmZvcm1hdGlvbiBGdXNpb24gXFxuTXVsdGktUmVzb2x1dGlvbiBJbWFnZSBGdXNpb24vUGFuLVNoYXJwZW5pbmcgXFxuSW1hZ2UgU3VwZXIgLSBSZXNvbHV0aW9uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvU3VtYW5EZWIucG5nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBTdW1hbiBEZWJcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguRC4gKElJVCBHdXdhaGF0aSlcIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInN1bWFuZGViQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiQWR2YW5jZSBEaWdpdGFsIFNpZ25hbCBQcm9jZXNzaW5nIFxcbkRpZ2l0YWwgU2lnbmFsIFByb2Nlc3NpbmcsIFxcbkFkLUhvYyBOZXR3b3Jrc1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiU2lnbmFsIFByb2Nlc3NpbmcsU3BlZWNoIFxcblByb2Nlc3NpbmcsU3BlZWNoIGJhc2VkIEhlYWx0aCBBbmFseXNpcyBcXG5FbW90aW9uIEFuYWx5c2lzIGJhc2VkIG9uIFNwZWVjaCBhbmQgXFxuSW1hZ2UsU3BlZWNoIFBhdGhvbG9neSBEZXRlY3Rpb24gXFxuVm9pY2UgQ29udmVyc2lvbi9TcGVha2VyIElkZW50aXR5IFxcbkNvbnZlcnNpb24sUGF0dGVybiBSZWNvZ25pdGlvblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL2RlZXBha0pvc2hpLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gRGVlcGFrIEpvc2hpXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLkQuIChJSVQgR3V3YWhhdGkpXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJkLmpvc2hpQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiVGVzdGluZyBhbmQgVmVyaWZpY2F0aW9uIG9mIFZMU0kgQ2lyY3VpdHNcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIk1ldGFoZXVyaXN0aWNzLCBBbmFsb2cgQ2lyY3VpdHM6IERlc2lnbiBhbmQgT3B0aW1pemF0aW9uIFxcbkNvbXB1dGF0aW9uYWwgSW50ZWxsaWdlbmNlLCBDQUQgZm9yIFZMU0lcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9rYW1hbC5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIEthbWFsIENhcHRhaW5cIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguRC4gKERBSUlDVCwgR2FuZGhpbmFnYXIpXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJrYW1hbGNhcHRhaW5AZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJQcm9iYWJpbGl0eSBhbmQgUmFuZG9tIFByb2Nlc3NlcyBcXG5TaWduYWxzIGFuZCBTeXN0ZW1zIFxcbkRpZ2l0YWwgU2lnbmFsIFByb2Nlc3NpbmcgXFxuRWxlY3Ryb25pYyBTeXN0ZW0gRGVzaWduXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJDb2duaXRpdmUgUmFkaW8sIFNpZ25hbCBQcm9jZXNzaW5nIFxcblN0YXRpc3RpY2FsIFNpZ25hbCBQcm9jZXNzaW5nIFxcbldpcmVsZXNzIENvbW11bmljYXRpb24sIE1hY2hpbmUgTGVhcm5pbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9raXJ0aS5wbmdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIEtpcnRpIEluYW1kYXJcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguRC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImtraUBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIkVsZWN0cm9tYWduZXRpY3MgYW5kIHdhdmUgUHJvcGFnYXRpb24gVGhlb3J5IFxcbkFudGVubmEgVGhlb3J5LCBSRiAmIE1pY3Jvd2F2ZSBUaGVvcnkgXFxuU2F0ZWxsaXRlIENvbW11bmljYXRpb24sIFJBREFSIGFuZCBpdHMgQXBwbGljYXRpb24gXFxuQW5hbG9nICYgZGlnaXRhbCBDb21tdW5pY2F0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJNaWNyb3N0cmlwIFBhdGNoIEFudGVubmEgZGVzaWduIHVzaW5nIE1ldGFtYXRlcmlhbHMgXFxuV2VhcmFibGUgQW50ZW5uYXNcIlxyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcblxyXG4gICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtmYWN1bHRpZXMsIHNldEZhY3VsdGllc10gPSB1c2VTdGF0ZShmYWN1bHRpZXNBcnJheSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGYWN1bHR5SGVhZGVyLz5cclxuXHJcbiAgICAgICAgICAgIDxTZWFyY2hCYXIgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9Lz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLWhpZGUgb3ZlcmZsb3cteS1zY3JvbGwgaC00NTBweCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTMgc206Z3JpZC1jb2xzLTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2ZhY3VsdGllc0FycmF5LmZpbHRlcigocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0cmluZyA9IHJlY29yZC5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRTZWFyY2hRdWVyeS5sZW5ndGggPT09IDAgPyB0cnVlIDogdGFyZ2V0U3RyaW5nLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLm1hcCgoZmFjdWx0eSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFjdWx0eUNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY3VsdHk9e2ZhY3VsdHl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZhY3VsdHkubmFtZX17Li4uZmFjdWx0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjdWx0aWVzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBLbm93TW9yZVBvcFVwIGZyb20gXCIuL0tub3dNb3JlUG9wVXAvS25vd01vcmVQb3BVcFwiO1xyXG5cclxuZnVuY3Rpb24gRmFjdWx0eUNhcmQoe2ltYWdlU3JjLCBuYW1lLCBxdWFsaWZpY2F0aW9uLCBkZXNpZ25hdGlvbiwgZW1haWwsIHRlYWNoaW5nRmllbGQsIGFyZWFPZlJlc2VhcmNofSl7XHJcblxyXG4gICAgY29uc3QgbXlTdHlsZSA9IHtcclxuICAgICAgICB3aWR0aDozMDAsXHJcbiAgICAgICAgaGVpZ2h0OjMwMFxyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMyBiZy1ncmF5LTIwMCBob3ZlcjpiZy1ncmF5LTMwMCBibG9jayBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctMnhsIHB4LTUgcHktNCBteS00XCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmxvY2sgcm91bmRlZCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCB0ZXh0LWxnXCI+e25hbWV9IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtbWQgdGV4dC1ncmF5LTYwMFwiPntxdWFsaWZpY2F0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJsb2NrIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwXCI+e2Rlc2lnbmF0aW9ufTxLbm93TW9yZVBvcFVwIHRlYWNoaW5nRmllbGQ9e3RlYWNoaW5nRmllbGR9IGFyZWFPZlJlc2VhcmNoPXthcmVhT2ZSZXNlYXJjaH0vPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMgZmxleCBqdXN0aWZ5LWFyb3VuZCAgcHgtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXIgbS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCIgc3JjPXtpbWFnZVNyY30ga2V5PXtuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggdGV4dC1ncmF5LTYwMCBmb250LWJvbGRcIj5lbWFpbDogPGgxIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj4mbmJzcDt7ZW1haWx9PC9oMT48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjdWx0eUNhcmQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSBcInJlYWN0anMtcG9wdXBcIjtcclxuXHJcbmZ1bmN0aW9uIE5ld0xpbmVUZXh0KHt0ZXh0fSkge1xyXG4gICAgY29uc3QgbmV3VGV4dCA9IHRleHQuc3BsaXQoJ1xcbicpLm1hcChzdHIgPT4gPGxpIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgcHQtMCBweC0zXCI+e3N0cn08L2xpPik7XHJcbiAgICByZXR1cm4gbmV3VGV4dDtcclxufVxyXG5cclxuZnVuY3Rpb24gS25vd01vcmVQb3BVcCh7dGVhY2hpbmdGaWVsZCwgYXJlYU9mUmVzZWFyY2h9KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8UG9wdXAgbmVzdGVkIHRyaWdnZXI9ezxzcGFuIGNsYXNzTmFtZT1cImJ0biBtdC0yIGhvdmVyOmJnLWdyYXktNDAwIGN1cnNvci1wb2ludGVyIGJsb2NrIHJvdW5kZWQtZnVsbCBiZy1ncmF5LTUwMCBweC0zIHB5LTEgdy0yOCB0ZXh0LWdyYXktMTAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0zMDBcIj5Lbm93IE1vcmU8L3NwYW4+fT5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgcm91bmRlZCBib3JkZXItNCBib3JkZXItZ3JheS01MCBwLTNcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIGZvbnQtYm9sZFwiPlRlYWNoaW5nIEZpZWxkOjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8TmV3TGluZVRleHQgdGV4dD17dGVhY2hpbmdGaWVsZH0vPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgZm9udC1ib2xkXCI+QXJlYSBvZiBSZXNlYXJjaDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8TmV3TGluZVRleHQgdGV4dD17YXJlYU9mUmVzZWFyY2h9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Qb3B1cD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgS25vd01vcmVQb3BVcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBGYWN1bHR5SGVhZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCBwLTUgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgey8qIEhlYWRpbmcgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0zIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1ncmF5LTcwMCB0ZXh0LWxnIGZvbnQtYm9sZFwiPkN1cnJlbnQgSGVhZCBPZiBEZXBhcnRtZW50PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWdyYXktNjAwIHRleHQteGxcIj5Eci4gUElZVVNIIE4uIFBBVEVMPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjdWx0eUhlYWRlcjtcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaEJhcih7c2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5fSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIGJnLWdyYXktNDAwIHAtM1wiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZFwiXHJcbiAgICAgICAgICAgIGlkPVwiZmFjdWx0eU5hbWVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEZhY3VsdHkgQnkgTmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgIG10LTFcIj5cclxuICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwicHgtNVwiICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTQgZmxleCBmbGV4LXJvd1wiID5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTEgZmxleCBqdXN0aWZ5LWJldHdlZW4gbXQtMyBtZDptYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTdWIgSGVhZGluZyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS02MDAgZm9udC1ib2xkIHRleHQtbWRcIj5FbGVjdHJvbmljcyBEZXBhcnRtZW50PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1ncmF5LTYwMCB0ZXh0LXhzXCI+IE5hdGlvbmFsIGluc3RpdHV0ZSBvZiBUZWNobm9sb2d5LCBTVVJBVCA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU1ZOSVQgbG9nbyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0zMiBmbGV4IGgtMTIgdy0xMiB0ZXh0LWNlbnRlciBtZDpqdXN0aWZ5LWVuZCBtZDptci0zMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJcIiBzcmM9XCJpbWFnZXMvTklUX1N1cmF0X0xvZ28uc3ZnLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgcHQtMSBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhsIHRleHQtZ3JheS02MDAgZm9udC1zZW1pYm9sZFwiPkZvbGxvdyB1cyBvbjogPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHgtMiBwYi0yIHB0LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbS5mYWNlYm9vay5jb20vRWxlY3Ryb25pY3MtQ29tbXVuaWNhdGlvbi1FbmdpbmVlcmluZy1EZXBhcnRtZW50LVNWTklULVN1cmF0LTE3MDQyMjQ2NjMxNDA1NTQvXCI+PHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBmb250LXNlbWlib2xkIHAtMSBtZDpwLTNcIj48aW1nIGNsYXNzTmFtZT1cInctMTBcIiBzcmM9XCJpbWFnZXMvRm9vdGVyLWljb25zL0ZhY2Vib29rLWljb24uc3ZnXCIvPiZuYnNwOzxwIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPkZhY2Vib29rPC9wPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHAtM1wiPjxpbWcgY2xhc3NOYW1lPVwidy0xMFwiIHNyYz1cImltYWdlcy9Gb290ZXItaWNvbnMvWW91VHViZS1pY29uLnN2Z1wiLz4mbmJzcDs8YT5Zb3V0dWJlPC9hPjwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vc3ZuaXQub2ZmaWNpYWw/aWdzaGlkPXJ3bHZocnl6ZmlpMlwiPjxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZm9udC1zZW1pYm9sZCBwLTEgbWQ6cC0zXCI+PGltZyBjbGFzc05hbWU9XCJ3LTEwXCIgc3JjPVwiaW1hZ2VzL0Zvb3Rlci1pY29ucy9JbnN0YWdyYW0taWNvbi5zdmdcIi8+Jm5ic3A7PHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+SW5zdGFncmFtPC9wPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9zLXYtbmF0aW9uYWwtaW5zdGl0dXRlLW9mLXRlY2hub2xvZ3ktc3ZuaXQtc3VyYXQtbml0LXN1cmF0LVwiPjxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZm9udC1zZW1pYm9sZCBwLTEgbWQ6cC0zXCI+PGltZyBjbGFzc05hbWU9XCJ3LTEwXCIgc3JjPVwiaW1hZ2VzL0Zvb3Rlci1pY29ucy9MaW5rZWRJbi1pY29uLnN2Z1wiLz4mbmJzcDs8cCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5MaW5rZWRJbjwvcD48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9OSVRfU3VyYXQ/cz0yMFwiPjxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZm9udC1zZW1pYm9sZCBwLTEgbWQ6cC0zXCI+PGltZyBjbGFzc05hbWU9XCJ3LTEwXCIgc3JjPVwiaW1hZ2VzL0Zvb3Rlci1pY29ucy9Ud2l0dGVyLWljb24uc3ZnXCIvPiZuYnNwOzxwIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPlR3aXR0ZXI8L3A+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB5LTMgcHgtNSB0ZXh0LXhzIG1kOnRleHQtbCB0ZXh0LWdyYXktMjAwIGZsZXgganVzdGlmeS1jZW50ZXJcIj4mY29weTsgMjAyMSBFbGVjdHJvbmljcyBEZXBhcnRtZW50ICwgYWxsIHJpZ2h0cyByZXNlcnZlZCAmIzY0OyBOYXRpb25hbCBpbnN0aXR1dGUgb2YgVGVjaG5vbG9neSwgU1VSQVQgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCl7XHJcbiAgICBjb25zdCBpbWFnZVN0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoOjkwLFxyXG4gICAgICAgIGhlaWd0aDo5MFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHAtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTQgZmxleCBmbGV4LXJvd1wiID5cclxuICAgICAgICAgICAgICAgIHsvKiBIZWFkaW5nICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1jZW50ZXIgbXQtMyBtZDptYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhsXCI+RWxlY3Ryb25pY3MgRGVwYXJ0bWVudDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWdyYXktNjAwXCI+IE5hdGlvbmFsIGluc3RpdHV0ZSBvZiBUZWNobm9sb2d5LCBTVVJBVCA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBMT0dPICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIG1kOmp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL05JVF9TdXJhdF9Mb2dvLnN2Zy5wbmdcIiBzdHlsZT17aW1hZ2VTdHlsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlQ2Fyb3VzZWwgZnJvbSBcIi4vSW1hZ2VDYXJvdXNlbC9JbWFnZUNhcm91c2VsXCI7XHJcbmltcG9ydCBIb21lSGVhZGVyIGZyb20gXCIuL0hvbWVIZWFkZXIvSG9tZUhlYWRlclwiXHJcblxyXG5mdW5jdGlvbiBIb21lKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIGJnLWdyYXktMjAwIGdyaWQgZ3JpZC1jb2xzLTFcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxIb21lSGVhZGVyLz5cclxuXHJcbiAgICAgICAgICAgIDxJbWFnZUNhcm91c2VsLz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBEZXBhcnRtZW50IE1pc3Npb24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IG0tNCBiZy1ncmF5LTMwMCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTYwMCB0ZXh0LWJvbGQgdGV4dC1jZW50ZXJcIj5EZXBhcnRtZW50IE1pc3Npb248L2g2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCB0ZXh0LWNlbnRlciB0ZXh0LWxcIj5UaGUgbWlzc2lvbiBvZiB0aGUgRWxlY3Ryb25pY3MgRW5naW5lZXJpbmcgRGVwYXJ0bWVudCBpcyB0byBjb250cmlidXRlIHRvIHNvY2lldHkgYW5kIGluZHVzdHJ5IHRocm91Z2ggZXhjZWxsZW5jZSBpbiBlZHVjYXRpb24sIHJlc2VhcmNoLCBpbm5vdmF0aW9ucyBhbmQgZXRoaWNzIGJ5IHN0YWtlaG9sZGVycy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIERlcGFydG1lbnQgTWlzc2lvbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCBwLTYgbXgtNCBtYi00IHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktNjAwIHRleHQtYm9sZCB0ZXh0LWNlbnRlclwiPkRlcGFydG1lbnQgVmlzaW9uPC9oNj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgdGV4dC1jZW50ZXIgdGV4dC1sXCI+VGhlIHZpc2lvbiBvZiB0aGUgRWxlY3Ryb25pY3MgRW5naW5lZXJpbmcgRGVwYXJ0bWVudCBpcyB0byBBaW0gdG8gYWNoaWV2ZSBxdWFsaXR5IGluIGVkdWNhdGlvbiBhbmQgcmVzZWFyY2ggdG8gY3JlYXRlIGxlYWRpbmcgRWxlY3Ryb25pY3MgZW5naW5lZXJzLCByZXNlYXJjaGVycyBhbmQgZW50cmVwcmVuZXVycy48L3A+ICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSG9tZUhlYWRlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgcC04IG14LTQgbXQtNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogSGVhZGluZyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWdyYXktNjAwIHRleHQtMnhsIGZvbnQtYm9sZFwiPkRlcGFydG1lbnQgVmlydHVhbCBUb3VyPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lSGVhZGVyOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZVNsaWRlIGZyb20gXCIuL0ltYWdlU2xpZGUvSW1hZ2VTbGlkZVwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VDYXJvdXNlbCgpe1xyXG5cclxuICAgIGNvbnN0IGltYWdlc0FycmF5ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC0xLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiMVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9lY2VkSW1hZ2VzL2VjZWQtMi5qcGdcIixcclxuICAgICAgICAgICAgXCJrZXlcIjpcIjJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZWNlZEltYWdlcy9lY2VkLTMuanBnXCIsXHJcbiAgICAgICAgICAgIFwia2V5XCI6XCIzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC00LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiNFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9lY2VkSW1hZ2VzL2VjZWQtNS5qcGdcIixcclxuICAgICAgICAgICAgXCJrZXlcIjpcIjVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZWNlZEltYWdlcy9lY2VkLTYuanBnXCIsXHJcbiAgICAgICAgICAgIFwia2V5XCI6XCI2XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC03LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiN1wiXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG5cclxuICAgIHZhciBzbGlkZUluZGV4ID0gMDtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93U2xpZGVzKCkge1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIHZhciBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXlTbGlkZXNcIik7XHJcbiAgICAgICAgdmFyIGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZG90XCIpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzbGlkZUluZGV4Kys7XHJcbiAgICAgICAgaWYgKHNsaWRlSW5kZXggPiBzbGlkZXMubGVuZ3RoKSB7c2xpZGVJbmRleCA9IDF9ICAgIFxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRvdHNbaV0uY2xhc3NOYW1lID0gZG90c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWRlc1tzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcclxuICAgICAgICBkb3RzW3NsaWRlSW5kZXgtMV0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG4gICAgICAgIHNldFRpbWVvdXQoc2hvd1NsaWRlcywgNTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzaG93U2xpZGVzKCk7XHJcbiAgICB9LCBbc2xpZGVJbmRleF0pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG14LTQgcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gbWQ6bXgtMFwiPiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXNob3ctY29udGFpbmVyIG1kOmgtOTZcIj5cclxuXHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VzQXJyYXkubWFwKChpbWFnZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVNsaWRlIGtleT17aW1hZ2UuaWR9ey4uLmltYWdlfS8+ICAgIFxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiIHN0eWxlPXt7dGV4dEFsaWdubWVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcm91c2VsO1xyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cIm10LTQgbXgtNCByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBtZDpteC0wXCI+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlc2hvdy1jb250YWluZXIgaC05NiBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbnVtYmVydGV4dFwiPjEgLyAzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2xpZGUtaW1hZ2VcIiBzcmM9XCJpbWFnZXMvZWNlZEltYWdlcy8zLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+Q2FwdGlvbiBUZXh0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbnVtYmVydGV4dFwiPjIgLyAzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbGlkZS1pbWFnZVwiIHNyYz1cImltYWdlcy9lY2VkSW1hZ2VzLzQuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPkNhcHRpb24gVHdvPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbnVtYmVydGV4dFwiPjMgLyAzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbGlkZS1pbWFnZVwiIHNyYz1cImltYWdlcy9lY2VkSW1hZ2VzLzUuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPkNhcHRpb24gVGhyZWU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiIHN0eWxlPXt7dGV4dEFsaWdubWVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VTbGlkZSh7aW1hZ2VTcmN9KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2xpZGUtaW1hZ2VcIiBzcmM9e2ltYWdlU3JjfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNsaWRlOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGUvbG9hZGVyLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTG9hZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCBib3R0b20tMCB3LWZ1bGwgaC1zY3JlZW4gei01MCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS03MDAgIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlciBlYXNlLWxpbmVhciByb3VuZGVkLWZ1bGwgYm9yZGVyLTQgYm9yZGVyLXQtNCBib3JkZXItZ3JheS0yMDAgaC0xMiB3LTEyIG1iLTRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPkxvYWRpbmcuLi48L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPlRoaXMgbWF5IHRha2UgYSBmZXcgc2Vjb25kcywgcGxlYXNlIGRvbid0IGNsb3NlIHRoaXMgcGFnZS48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdG9nZ2xlciBmcm9tIFwiLi90b2dnbGVyXCJcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpe1xyXG4gICAgY29uc3QgbXlTdHlsZSA9IHtcclxuICAgICAgICB3aWR0aDoyMFxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdG9nZ2xlcigpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBtZDpjb2wtc3Bhbi0xIG0tMyBiZy1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICA8bmF2ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IGJvcmRlci1iIGJvcmRlci1ncmF5LTEwMCBmbGV4IGp1c3RpZnktYmV0d2VlbiAgbWQ6ZmxleCBtZDpqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbCBmb250LWJvbGQgIHVwcGVyY2FzZSBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgY3Vyc29yLXBvaW50ZXIgdGV4dC14bCBob3Zlcjp0ZXh0LWdyYXktMTAwXCI+RWxlY3Ryb25pY3MgRGVwYXJ0bWVudDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBjdXJzb3ItcG9pbnRlciBtZDpoaWRkZW5cIiBpZD1cIm1lbnVCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgaC04IHctOFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRleHQtbGVmdCBoaWRkZW4gbWQ6YmxvY2tcIiBpZD1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcC02IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImgtNiB3LTZcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMyAxMmwyLTJtMCAwbDctNyA3IDdNNSAxMHYxMGExIDEgMCAwMDEgMWgzbTEwLTExbDIgMm0tMi0ydjEwYTEgMSAwIDAxLTEgMWgtM20tNiAwYTEgMSAwIDAwMS0xdi00YTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2NGExIDEgMCAwMDEgMW0tNiAwaDZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4gPGEgaHJlZj1cIi4vXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTEwMFwiPiZuYnNwO0hvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcHgtNiBwYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaC01IHctNVwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTggMTBhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS03IDRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0tMS05YTEgMSAwIDAwLTEgMXY0YTEgMSAwIDEwMiAwVjZhMSAxIDAgMDAtMS0xelwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPjxhIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS0xMDBcIj4mbmJzcDtBYm91dDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcHgtNiBwYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3N2Z3MvUGVvcGxlLnN2Z1wiIHN0eWxlPXtteVN0eWxlfS8+PGEgaHJlZj1cIkZhY3VsdGllc1BhZ2VcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMTAwXCI+Jm5ic3A7RmFjdWx0aWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtZ3JheS00MDAgdGV4dC14bCBweC02IHBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvc3Zncy9SZXNlYXJjaC5zdmdcIiBzdHlsZT17bXlTdHlsZX0vPjxhIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS0xMDBcIiBocmVmPVwiUmVzZWFyY2hQYWdlXCI+Jm5ic3A7UHJvamVjdHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdGV4dC1ncmF5LTQwMCB0ZXh0LXhsIHB4LTYgcGItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctNlwiIHNyYz1cImltYWdlcy9zdmdzL0ZhY2lsaXRpZXMuc3ZnXCIvPjxhIGhyZWY9XCJSZXNlYXJjaEZhY2lsaXRpZXNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMTAwXCI+Jm5ic3A7RmFjaWxpdGllczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZXIoKXtcclxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVCdXR0b25cIik7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xyXG5cclxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+XHJcbiAgICAge1xyXG4gICAgICAgIGlmKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZ2dsZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhci9OYXZiYXJcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL0hvbWUvSG9tZVwiO1xyXG5cclxuZnVuY3Rpb24gUGFnZUxheW91dCh7Y2hpbGRyZW59KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTRcIj5cclxuICAgICAgICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMyBwLTNcIj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUxheW91dDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Rqcy1wb3B1cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9