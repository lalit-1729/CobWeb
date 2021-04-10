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

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\pages\\FacultiesPage.js";






function FacultiesPage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_PageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Faculties_Faculties__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvRmFjdWx0aWVzUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GYWN1bHRpZXMvRmFjdWx0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZhY3VsdGllcy9GYWN1bHR5Q2FyZC9GYWN1bHR5Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GYWN1bHRpZXMvRmFjdWx0eUNhcmQvS25vd01vcmVQb3BVcC9Lbm93TW9yZVBvcFVwLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZhY3VsdGllcy9GYWN1bHR5SGVhZGVyL0ZhY3VsdHlIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmFjdWx0aWVzL1NlYXJjaEJhci9TZWFyY2hCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ib21lL0ltYWdlQ2Fyb3VzZWwvSW1hZ2VDYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ib21lL0ltYWdlQ2Fyb3VzZWwvSW1hZ2VTbGlkZS9JbWFnZVNsaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BhZ2VMYXlvdXQvTmF2YmFyL05hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9QYWdlTGF5b3V0L05hdmJhci90b2dnbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BhZ2VMYXlvdXQvUGFnZUxheW91dC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0anMtcG9wdXBcIiJdLCJuYW1lcyI6WyJGYWN1bHRpZXNQYWdlIiwiRmFjdWx0aWVzIiwiZmFjdWx0aWVzQXJyYXkiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwidXNlU3RhdGUiLCJmYWN1bHRpZXMiLCJzZXRGYWN1bHRpZXMiLCJmaWx0ZXIiLCJyZWNvcmQiLCJ0YXJnZXRTdHJpbmciLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJsZW5ndGgiLCJpbmNsdWRlcyIsIm1hcCIsImZhY3VsdHkiLCJGYWN1bHR5Q2FyZCIsImltYWdlU3JjIiwicXVhbGlmaWNhdGlvbiIsImRlc2lnbmF0aW9uIiwiZW1haWwiLCJ0ZWFjaGluZ0ZpZWxkIiwiYXJlYU9mUmVzZWFyY2giLCJteVN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJOZXdMaW5lVGV4dCIsInRleHQiLCJuZXdUZXh0Iiwic3BsaXQiLCJzdHIiLCJLbm93TW9yZVBvcFVwIiwiRmFjdWx0eUhlYWRlciIsIlNlYXJjaEJhciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkZvb3RlciIsIkhlYWRlciIsImltYWdlU3R5bGUiLCJoZWlndGgiLCJIb21lIiwiSW1hZ2VDYXJvdXNlbCIsImltYWdlc0FycmF5Iiwic2xpZGVJbmRleCIsInNob3dTbGlkZXMiLCJpIiwic2xpZGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZG90cyIsInN0eWxlIiwiZGlzcGxheSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiaW1hZ2UiLCJpZCIsInRleHRBbGlnbm1lbnQiLCJJbWFnZVNsaWRlIiwiTmF2YmFyIiwidG9nZ2xlciIsIm1lbnVCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJj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QUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU1MsVUFBVCxDQUFvQjtBQUFDQztBQUFELENBQXBCLEVBQStCO0FBQzNCLHNCQUNJO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUEsNEJBQ0kscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSxnQkFDS0E7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRSDs7QUFBQTtBQUVjRCx5RUFBZixFOzs7Ozs7Ozs7OztBQ2ZBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InBhZ2VzL0ZhY3VsdGllc1BhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL0ZhY3VsdGllc1BhZ2UuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGYWN1bHRpZXMgZnJvbSBcIi4uL3NyYy9Db21wb25lbnRzL0ZhY3VsdGllcy9GYWN1bHRpZXNcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vc3JjL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgUGFnZUxheW91dCBmcm9tIFwiLi4vc3JjL0NvbXBvbmVudHMvUGFnZUxheW91dC9QYWdlTGF5b3V0XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL3NyYy9Db21wb25lbnRzL0Zvb3Rlci9Gb290ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIEZhY3VsdGllc1BhZ2UoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgICAgIDxQYWdlTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWN1bHRpZXMvPlxyXG4gICAgICAgICAgICAgICAgPC9QYWdlTGF5b3V0PlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWN1bHRpZXNQYWdlOyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi9TZWFyY2hCYXIvU2VhcmNoQmFyXCI7XHJcbmltcG9ydCBGYWN1bHR5Q2FyZCBmcm9tIFwiLi9GYWN1bHR5Q2FyZC9GYWN1bHR5Q2FyZFwiO1xyXG5pbXBvcnQgRmFjdWx0eUhlYWRlciBmcm9tIFwiLi9GYWN1bHR5SGVhZGVyL0ZhY3VsdHlIZWFkZXJcIlxyXG5cclxuZnVuY3Rpb24gRmFjdWx0aWVzKCl7XHJcblxyXG4gICAgY29uc3QgZmFjdWx0aWVzQXJyYXkgPSAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvbGFsbHVXYWRpYS5wbmdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJvZi4gQS4gSC4gTGFsbHV3YWRpYVwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJNLiBUZWNoLlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiYWhsQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiVGVsZW1hdGljcyBcXG5SRiAmIE1pY3Jvd2F2ZSBFbmdpbmVlcmluZ1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiUkYgJiBNaWNyb3dhdmUgRW5naW5lZXJpbmcgXFxuSW1hZ2UgUHJvY2Vzc2luZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL1VwZW5hRGFsYWwuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLihNcnMpIFVwZW5hIEQuIERhbGFsXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLkRcIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIlByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwidWRkQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiRGlnaXRhbCBjb21tdW5pY2F0aW9uXFxuQWRob2MgTmV0d29ya3NcXG5XaWRlYmFuZCBjb21tdW5pY2F0aW9uXFxuTW9iaWxlIGNvbXB1dGluZ1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiV2lyZWxlc3MgQ29tbXVuaWNhdGlvbiB0ZWNobmlxdWVzXFxuNUcgdGVjaG5vbG9neVxcbldpcmVsZXNzIHN5c3RlbXMgXFxuT3B0aWNhbCB3aXJlbGVzc1xcblNpZ25hbCBwcm9jZXNzaW5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvTkJLYW5pcmthci5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJvZi4gTmFyZXNoIEIuIEthbmlya2FyXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIk0uVGVjaC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIm5ia0BlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIkJhc2ljIG9mIEVsZWN0cm9uaWNzIEVuZ2luZWVyaW5nIFxcbkVsZWN0cm9uaWMgRGV2aWNlcyAmIENpcmN1aXRzIFxcblNvbGlkIFN0YXRlIERldmljZXNcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIkNETUEgXFxuTW9iaWxlIENvbW11bmljYXRpb25cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9wcmFzaGFudC5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIFByYXNoYW50IEsuIFNoYWhcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiTS5FLlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwicGtzQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiQmFzaWNzIG9mIEVsZWN0cm9uaWNzIEVuZ2luZWVyaW5nIFxcbkRpZ2l0YWwgQ2lyY3VpdHMgXFxuTWljcm9wcm9jZXNzb3IgXFxuRGlnaXRhbCBTaWduYWwgUHJvY2Vzc2luZ1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiTE1JIEJhc2VkIEltcHJvdmVkIFN0YWJpbGl0eSBDcml0ZXJpYSAoRFNQIGJhc2VkKVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL0FiaGlzaGVrLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gQWJoaXNoZWsgQWNoYXJ5YVwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaEQgKE1pY3JvZWxlY3Ryb25pY3MgJiBWTFNJKSwgSUlUIFJvb3JrZWVcIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImFiaGlzaGVrQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiRWxlY3Ryb25pYyBEZXZpY2VzXFxuRWxlY3Ryb25pYyBDaXJjdWl0c1xcbkxpbmVhciBJbnRlZ3JhdGVkIENpcmN1aXRzXFxuVkxTSSBEZXNpZ25cIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIlBoeXNpY3MgJiBNb2RlbGluZyBvZiBOYW5vLVNjYWxlIERldmljZXNcXG5EZXZpY2UtQ2lyY3VpdCBJbnRlcmFjdGlvbnMgaW4gTmFuby1TY2FsZSBUcmFuc2lzdG9yc1xcbldpZGUgQmFuZGdhcCBTZW1pY29uZHVjdG9ycyBhbmQgXFxuMkQgTWF0ZXJpYWxzIGZvciBEZXZpY2VzICYgQ2lyY3VpdHNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9KaWduZXNoLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gSmlnbmVzaCBOLiBTYXJ2YWl5YVwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaC4gRC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImpuc0BlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIkVsZWN0cm9uaWMgU3lzdGVtIERlc2lnblxcbkRpZ2l0YWwgSW1hZ2UgUHJvY2Vzc2luZ1xcbiBJbmZvcm1hdGlvbiBUaGVvcnkgJiBDb2RpbmdcXG5BbmFsb2cgSW50ZWdyYXRlZCBDaXJjdWl0c1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiSW1hZ2UgUHJvY2Vzc2luZ1xcbk1lZGljYWwgSW5zdHJ1bWVudGF0aW9uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvZGFyamlTaXIuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBBbmFuZCBELiBEYXJqaVwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaC5ELiAoTWljcm9lbGVjdHJvbmljcyksIElJVCBCb21iYXlcIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImFkZEBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIlZMU0kgRGVzaWduXFxuRWxlY3Ryb25pY3MgSW5zdHJ1bWVudGF0aW9uXFxuRGlnaXRhbCBJbnRlZ3JhdGVkIENpcmN1aXRzXFxuRGlnaXRhbCBWTFNJIERlc2lnbiAoUEcpXFxuVkxTSSBTeXN0ZW0gRGVzaWduICggUEctRWxlY3RpdmUpXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJWTFNJIERlc2lnblxcbkZQR0EtYmFzZWQgc3lzdGVtcyBkZXNpZ25cXG5EZXZpY2UgbW9kZWxsaW5nXFxuVkxTSSBEU1AgYXJjaGl0ZWN0dXJlXFxuRW1iZWRkZWQgU3lzdGVtIERlc2lnblxcbkVsZWN0cm9uaWNzIEluc3RydW1lbnRhdGlvblxcblNpZ25hbCBQcm9jZXNzaW5nXFxiQmlvLW1lZGljYWwgU2lnbmFsL2ltYWdlIHByb2Nlc3NpbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9waXl1c2hQYXRlbC5wbmdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIFBJWVVTSCBOLiBQQVRFTFwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaC4gRC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInBucEBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIk9wdGljYWwgQ29tbXVuaWNhdGlvbiBTeXN0ZW1zXFxuT3B0aWNhbCBOZXR3b3Jrc1xcbkFuYWxvZyBhbmQgRGlnaXRhbCBDb21tdW5pY2F0aW9uIFN5c3RlbXNcXG5TZW5zb3JzIGFuZCBUcmFuc2R1Y2Vyc1xcbkVsZWN0cm9uaWMgRGV2aWNlcyBhbmQgQ2lyY3VpdHNcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIk9wdGljYWwgQ29tbXVuaWNhdGlvbnMgYW5kIE5ldHdvcmtzXFxuUGhvdG9uaWNzIERldmljZXMgJiBTZW5zb3JzXFxuTWljcm93YXZlIEFudGVubmEgYW5kIFdhdmVndWRlc1xcbk1ldGFtYXRlcmlhbCBiYXNlZCBTZW5zb3JzXFxuT3B0aWNhbCwgUkYsIE1ldGFtYXRlcmlhbCBiYXNlZCBTZW5zb3JzICYgQmlvc2Vuc29yc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL3p1YmVyLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gWnViZXIgTS4gUGF0ZWxcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguIEQuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJ6bXBAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJEaWdpdGFsIExvZ2ljIGRlc2lnblxcbkVtYmVkZGVkIFN5c3RlbXNcXG5NaWNyb2VsZWN0cm9uaWNzIGFuZCBWTFNJXFxuTWljcm9jb250cm9sbGVycyBhbmQgSW50ZXJmYWNpbmdcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIkhETC9GUEdBIGJhc2VkIGRlc2lnblxcblZMU0kgRGVzaWduIG9mIFJJU0MgTWljcm9wcm9jZXNzb3JzXFxuRlBHQS9BU0lDIERlc2lnbiBvZiB3aXJlbGVzcyB0cmFuc2NlaXZlciBoYXJkd2FyZVxcbkVtYmVkZGVkIFN5c3RlbXNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9QaW5hbC5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIFBpbmFsa3VtYXIgSi4gRW5naW5lZXJcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguIEQuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJwamVAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJBZHZhbmNlZCBQcm9jZXNzb3IgQXJjaGl0ZWN0dXJlXFxuRFNQIFN0cnVjdHVyZXMgZm9yIFZMU0lcXG5FbWJlZGRlZCBTeXN0ZW1zXFxuUmVhbCBUaW1lIFN5c3RlbXNcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIkZQR0EgYmFzZWQgc3lzdGVtIGRlc2lnblxcblZMU0kgYXJjaGl0ZWN0dXJlIGZvciByZWFsLXRpbWUgc2lnbmFsL2ltYWdlIHByb2Nlc3NpbmdcXG5IaWdoIHBlcmZvcm1hbmNlIGVtYmVkZGVkIGNvbXB1dGluZ1xcbkVtYmVkZGVkIGFuZCByZWFsLXRpbWUgc3lzdGVtc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL1Jhc2lrYS5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIChNcnMuKSBSYXNpa2EgTi4gRGhhdnNlXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLiBELlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwicnNrQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiVkxTSSBEZXNpZ25cXG5WTFNJIFRlY2hub2xvZ3lcXG5FbGVjdHJvbmljIENpcmN1aXRzXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJWTFNJIERlc2lnblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL2FiaGlsYXNoLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gQWJoaWxhc2ggUy4gTWFuZGxvaVwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaC4gRC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImFzbUBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIk9wdGljYWwgTmV0d29ya3MgQWR2YW5jZSBPcHRpY2FsIFxcbkNvbW11bmljYXRpb24gU3lzdGVtcyBcXG5CYXNpY3Mgb2YgRWxlY3Ryb25pY3MgRW5naW5lZXJpbmcgXFxuRGF0YSBDb21tdW5pY2F0aW9uIGFuZCBOZXR3b3JrcyBcXG5MaW5lYXIgRWxlY3Ryb25pY3NcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIkZpYnJlIE9wdGljcyBPcHRpY2FsIENvbW11bmljYXRpb25zIFxcbk9wdGljYWwgTmV0d29ya3MsIEZyZWUgU3BhY2UgT3B0aWNzIFxcblBob3RvbmljIERldmljZXMsIEludGVncmF0ZWQgT3B0aWNzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvamlnaXNoYS5wbmdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIChNcy4pIEppZ2lzaGEgTi4gUGF0ZWxcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguIEQuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJqbnBhdGVsQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiSW5mb3JtYXRpb24gVGhlb3J5IGFuZCBDb2RpbmcgXFxuTXVsdGltZWRpYSBDb21tdW5pY2F0aW9uIFxcbkRpZ2l0YWwgTG9naWMgRGVzaWduIFxcbkltYWdlIHByb2Nlc3NpbmdcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIldpcmVsZXNzIENvbW11bmljYXRpb24gXFxuSW1hZ2UgLyBWaWRlbyBDb2RpbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9TaGlscGlHdXB0YS5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIChNcy4pIFNoaWxwaSBHdXB0YVwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaC4gRC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInNndXB0YUBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIkRpZ2l0YWwgc2F0ZWxsaXRlIENvbW11bmljYXRpb24gXFxuRGlnaXRhbCBFbGVjdHJvbmljcyBcXG5FbGVjdHJvbmljcyBEZXZpY2VzIGFuZCBDaXJjdWl0cyBcXG5NSU1PIFRlY2hub2xvZ3kgXFxuQW5hbG9nIGFuZCBEaWdpdGFsIENvbW11bmljYXRpb25cIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIjVHIFRlY2hub2xvZ3kgXFxuTWFzc2l2ZSBNSU1PIERldGVjdGlvbiBUZWNobmlxdWVzIFxcbkFudGVubmEgRGVzaWduIGZvciA1RyBBcHBsaWNhdGlvbnMgXFxuV2F2ZWZvcm0gRGVzaWduaW5nIGZvciBNSU1PIFJhZGFyIFxcbkZyZWUgU3BhY2UgT3B0aWNzIFxcbkZpYmVyIE9wdGljIFNlbnNvcnNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9Hb2xhay5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJvZi4gR29sYWsgU2FudHJhXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIk0uRS5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInMuZ29sYWtAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJFTSBUaGVvcnkgXFxuQW5hbG9nIEludGVncmF0ZWQgQ2lyY3VpdCBcXG5NaWNyb3dhdmUgSW50ZWdyYXRlZCBDaXJjdWl0LE1pY3Jvd2F2ZSBcXG5FbmdpbmVlcmluZ1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiUGF0Y2ggQW50ZW5uYU1pY3JvLXN0cmlwIGZpbHRlclwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL1N3ZXRhLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gKE1ycy4pIFNod2V0YSBOLiBTaGFoXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLiBELlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwic25zaGFoQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiQmFzaWNzIG9mIENvbW11bmljYXRpb24gU3lzdGVtIFxcbk1vYmlsZSBDb21tdW5pY2F0aW9uIFxcbldpcmVsZXNzIENvbW11bmljYXRpb24gXFxuTW9iaWxlIENvbXB1dGluZ1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiV2lyZWxlc3MgQ29tbXVuaWNhdGlvbiBcXG5Nb2JpbGUgQ29tbXVuaWNhdGlvbiBhbmQgc3RhbmRhcmRzIFxcbkRpZ2l0YWwgVmlkZW8gQnJvYWRjYXN0IGFuZCBzdGFuZGFyZHMgXFxuQ29nbml0aXZlIFJhZGlvIFxcbk5hdklDL0lSTlNTXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvbWVodWwuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlByb2YuIE1laHVsIEMuIFBhdGVsXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIk0uRS5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIm1jcEBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIkluZm9ybWF0aW9uIFRoZW9yeSAmIENvZGluZyBcXG5BcHBsaWNhdGlvbiBvZiBEU1AgXFxuQW5hbG9nICYgRGlnaXRhbCBDb21tdW5pY2F0aW9uIFxcblNhdGVsbGl0ZSBDb21tdW5pY2F0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJEaWdpdGFsIFNpZ25hbCBQcm9jZXNzaW5nIHVzaW5nIFZMU0lcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9raXNob3JlLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gS2lzaG9yIFAuIFVwbGFcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUG9zdCBEb2N0b3JhbCBGZWxsb3ctRVJDSU0gKE5UTlUsIE5vcndheSksUGguRC4gKERBLUlJQ1QsIEdhbmRoaW5hZ2FyKVwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwia3B1QGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiU2lnbmFscyAmIFN5c3RlbXMgXFxuRGlnaXRhbCBTaWduYWwgUHJvY2Vzc2luZyBcXG5FbGVjdHJvbmljcyBEZXZpY2VzICYgQ2lyY3VpdHMgXFxuQ29tbXVuaWNhdGlvbiBTeXN0ZW1zXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJNYWNoaW5lL0RlZXAgTGVhcm5pbmcgXFxuT2JqZWN0IGRldGVjdGlvbi9yZWNvZ25pdGlvbiwgXFxuTXVsdGktc3BlY3RyYWwgYW5kIGh5cGVyc3BlY3RyYWwgaW1hZ2UgcHJvY2Vzc2luZyBcXG5JbWFnZSBSZXN0b3JhdGlvbiBcXG5CaW8tbWVkaWNhbCBJbWFnZSBGdXNpb24gXFxuSW5mb3JtYXRpb24gRnVzaW9uIFxcbk11bHRpLVJlc29sdXRpb24gSW1hZ2UgRnVzaW9uL1Bhbi1TaGFycGVuaW5nIFxcbkltYWdlIFN1cGVyIC0gUmVzb2x1dGlvblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL1N1bWFuRGViLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gU3VtYW4gRGViXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLkQuIChJSVQgR3V3YWhhdGkpXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJzdW1hbmRlYkBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIkFkdmFuY2UgRGlnaXRhbCBTaWduYWwgUHJvY2Vzc2luZyBcXG5EaWdpdGFsIFNpZ25hbCBQcm9jZXNzaW5nLCBcXG5BZC1Ib2MgTmV0d29ya3NcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIlNpZ25hbCBQcm9jZXNzaW5nLFNwZWVjaCBcXG5Qcm9jZXNzaW5nLFNwZWVjaCBiYXNlZCBIZWFsdGggQW5hbHlzaXMgXFxuRW1vdGlvbiBBbmFseXNpcyBiYXNlZCBvbiBTcGVlY2ggYW5kIFxcbkltYWdlLFNwZWVjaCBQYXRob2xvZ3kgRGV0ZWN0aW9uIFxcblZvaWNlIENvbnZlcnNpb24vU3BlYWtlciBJZGVudGl0eSBcXG5Db252ZXJzaW9uLFBhdHRlcm4gUmVjb2duaXRpb25cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9kZWVwYWtKb3NoaS5wbmdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIERlZXBhayBKb3NoaVwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaC5ELiAoSUlUIEd1d2FoYXRpKVwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiZC5qb3NoaUBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIlRlc3RpbmcgYW5kIFZlcmlmaWNhdGlvbiBvZiBWTFNJIENpcmN1aXRzXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJNZXRhaGV1cmlzdGljcywgQW5hbG9nIENpcmN1aXRzOiBEZXNpZ24gYW5kIE9wdGltaXphdGlvbiBcXG5Db21wdXRhdGlvbmFsIEludGVsbGlnZW5jZSwgQ0FEIGZvciBWTFNJXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMva2FtYWwuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBLYW1hbCBDYXB0YWluXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLkQuIChEQUlJQ1QsIEdhbmRoaW5hZ2FyKVwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwia2FtYWxjYXB0YWluQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiUHJvYmFiaWxpdHkgYW5kIFJhbmRvbSBQcm9jZXNzZXMgXFxuU2lnbmFscyBhbmQgU3lzdGVtcyBcXG5EaWdpdGFsIFNpZ25hbCBQcm9jZXNzaW5nIFxcbkVsZWN0cm9uaWMgU3lzdGVtIERlc2lnblwiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiQ29nbml0aXZlIFJhZGlvLCBTaWduYWwgUHJvY2Vzc2luZyBcXG5TdGF0aXN0aWNhbCBTaWduYWwgUHJvY2Vzc2luZyBcXG5XaXJlbGVzcyBDb21tdW5pY2F0aW9uLCBNYWNoaW5lIExlYXJuaW5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMva2lydGkucG5nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBLaXJ0aSBJbmFtZGFyXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLkQuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJra2lAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJFbGVjdHJvbWFnbmV0aWNzIGFuZCB3YXZlIFByb3BhZ2F0aW9uIFRoZW9yeSBcXG5BbnRlbm5hIFRoZW9yeSwgUkYgJiBNaWNyb3dhdmUgVGhlb3J5IFxcblNhdGVsbGl0ZSBDb21tdW5pY2F0aW9uLCBSQURBUiBhbmQgaXRzIEFwcGxpY2F0aW9uIFxcbkFuYWxvZyAmIGRpZ2l0YWwgQ29tbXVuaWNhdGlvblwiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiTWljcm9zdHJpcCBQYXRjaCBBbnRlbm5hIGRlc2lnbiB1c2luZyBNZXRhbWF0ZXJpYWxzIFxcbldlYXJhYmxlIEFudGVubmFzXCJcclxuICAgICAgICB9XHJcbiAgICBdXHJcblxyXG5cclxuICAgIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZmFjdWx0aWVzLCBzZXRGYWN1bHRpZXNdID0gdXNlU3RhdGUoZmFjdWx0aWVzQXJyYXkpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RmFjdWx0eUhlYWRlci8+XHJcblxyXG4gICAgICAgICAgICA8U2VhcmNoQmFyIHNlYXJjaFF1ZXJ5PXtzZWFyY2hRdWVyeX0gc2V0U2VhcmNoUXVlcnk9e3NldFNlYXJjaFF1ZXJ5fS8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbC1oaWRlIG92ZXJmbG93LXktc2Nyb2xsIGgtNDUwcHggbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIHNtOmdyaWQtY29scy0yXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtmYWN1bHRpZXNBcnJheS5maWx0ZXIoKHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTdHJpbmcgPSByZWNvcmQubmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0U2VhcmNoUXVlcnkubGVuZ3RoID09PSAwID8gdHJ1ZSA6IHRhcmdldFN0cmluZy5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KS5tYXAoKGZhY3VsdHkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhY3VsdHlDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWN1bHR5PXtmYWN1bHR5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtmYWN1bHR5Lm5hbWV9ey4uLmZhY3VsdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY3VsdGllcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgS25vd01vcmVQb3BVcCBmcm9tIFwiLi9Lbm93TW9yZVBvcFVwL0tub3dNb3JlUG9wVXBcIjtcclxuXHJcbmZ1bmN0aW9uIEZhY3VsdHlDYXJkKHtpbWFnZVNyYywgbmFtZSwgcXVhbGlmaWNhdGlvbiwgZGVzaWduYXRpb24sIGVtYWlsLCB0ZWFjaGluZ0ZpZWxkLCBhcmVhT2ZSZXNlYXJjaH0pe1xyXG5cclxuICAgIGNvbnN0IG15U3R5bGUgPSB7XHJcbiAgICAgICAgd2lkdGg6MzAwLFxyXG4gICAgICAgIGhlaWdodDozMDBcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTMgYmctZ3JheS0yMDAgaG92ZXI6YmctZ3JheS0zMDAgYmxvY2sganVzdGlmeS1jZW50ZXIgcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LTJ4bCBweC01IHB5LTQgbXktNFwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJsb2NrIHJvdW5kZWQgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgdGV4dC1sZ1wiPntuYW1lfSA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LW1kIHRleHQtZ3JheS02MDBcIj57cXVhbGlmaWNhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJibG9jayBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMFwiPntkZXNpZ25hdGlvbn08S25vd01vcmVQb3BVcCB0ZWFjaGluZ0ZpZWxkPXt0ZWFjaGluZ0ZpZWxkfSBhcmVhT2ZSZXNlYXJjaD17YXJlYU9mUmVzZWFyY2h9Lz48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIGZsZXgganVzdGlmeS1hcm91bmQgIHB4LTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyIG0tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiIHNyYz17aW1hZ2VTcmN9IGtleT17bmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IHRleHQtZ3JheS02MDAgZm9udC1ib2xkXCI+ZW1haWw6IDxoMSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+Jm5ic3A7e2VtYWlsfTwvaDE+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY3VsdHlDYXJkOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBvcHVwIGZyb20gXCJyZWFjdGpzLXBvcHVwXCI7XHJcblxyXG5mdW5jdGlvbiBOZXdMaW5lVGV4dCh7dGV4dH0pIHtcclxuICAgIGNvbnN0IG5ld1RleHQgPSB0ZXh0LnNwbGl0KCdcXG4nKS5tYXAoc3RyID0+IDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHB0LTAgcHgtM1wiPntzdHJ9PC9saT4pO1xyXG4gICAgcmV0dXJuIG5ld1RleHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEtub3dNb3JlUG9wVXAoe3RlYWNoaW5nRmllbGQsIGFyZWFPZlJlc2VhcmNofSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFBvcHVwIG5lc3RlZCB0cmlnZ2VyPXs8c3BhbiBjbGFzc05hbWU9XCJidG4gbXQtMiBob3ZlcjpiZy1ncmF5LTQwMCBjdXJzb3ItcG9pbnRlciBibG9jayByb3VuZGVkLWZ1bGwgYmctZ3JheS01MDAgcHgtMyBweS0xIHctMjggdGV4dC1ncmF5LTEwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMzAwXCI+S25vdyBNb3JlPC9zcGFuPn0+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHJvdW5kZWQgYm9yZGVyLTQgYm9yZGVyLWdyYXktNTAgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBmb250LWJvbGRcIj5UZWFjaGluZyBGaWVsZDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgPE5ld0xpbmVUZXh0IHRleHQ9e3RlYWNoaW5nRmllbGR9Lz5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIGZvbnQtYm9sZFwiPkFyZWEgb2YgUmVzZWFyY2g8L2gyPlxyXG4gICAgICAgICAgICAgICAgPE5ld0xpbmVUZXh0IHRleHQ9e2FyZWFPZlJlc2VhcmNofS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUG9wdXA+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtub3dNb3JlUG9wVXA7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRmFjdWx0eUhlYWRlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgcC01IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBIZWFkaW5nICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1jZW50ZXIgbXQtMyBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS03MDAgdGV4dC1sZyBmb250LWJvbGRcIj5DdXJyZW50IEhlYWQgT2YgRGVwYXJ0bWVudDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1ncmF5LTYwMCB0ZXh0LXhsXCI+RHIuIFBJWVVTSCBOLiBQQVRFTDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY3VsdHlIZWFkZXI7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hCYXIoe3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeX0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBiZy1ncmF5LTQwMCBwLTNcIj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICBpZD1cImZhY3VsdHlOYW1lXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBGYWN1bHR5IEJ5IE5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBGb290ZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwICBtdC0xXCI+XHJcbiAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cInB4LTVcIiAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC00IGZsZXggZmxleC1yb3dcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1iZXR3ZWVuIG10LTMgbWQ6bWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU3ViIEhlYWRpbmcgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LW1kXCI+RWxlY3Ryb25pY3MgRGVwYXJ0bWVudDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS02MDAgdGV4dC14c1wiPiBOYXRpb25hbCBpbnN0aXR1dGUgb2YgVGVjaG5vbG9neSwgU1VSQVQgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNWTklUIGxvZ28gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMzIgZmxleCBoLTEyIHctMTIgdGV4dC1jZW50ZXIgbWQ6anVzdGlmeS1lbmQgbWQ6bXItMzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiXCIgc3JjPVwiaW1hZ2VzL05JVF9TdXJhdF9Mb2dvLnN2Zy5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHB0LTEgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC14bCB0ZXh0LWdyYXktNjAwIGZvbnQtc2VtaWJvbGRcIj5Gb2xsb3cgdXMgb246IDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB4LTIgcGItMiBwdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL20uZmFjZWJvb2suY29tL0VsZWN0cm9uaWNzLUNvbW11bmljYXRpb24tRW5naW5lZXJpbmctRGVwYXJ0bWVudC1TVk5JVC1TdXJhdC0xNzA0MjI0NjYzMTQwNTU0L1wiPjxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZm9udC1zZW1pYm9sZCBwLTEgbWQ6cC0zXCI+PGltZyBjbGFzc05hbWU9XCJ3LTEwXCIgc3JjPVwiaW1hZ2VzL0Zvb3Rlci1pY29ucy9GYWNlYm9vay1pY29uLnN2Z1wiLz4mbmJzcDs8cCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5GYWNlYm9vazwvcD48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBmb250LXNlbWlib2xkIHVwcGVyY2FzZSBwLTNcIj48aW1nIGNsYXNzTmFtZT1cInctMTBcIiBzcmM9XCJpbWFnZXMvRm9vdGVyLWljb25zL1lvdVR1YmUtaWNvbi5zdmdcIi8+Jm5ic3A7PGE+WW91dHViZTwvYT48L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL3N2bml0Lm9mZmljaWFsP2lnc2hpZD1yd2x2aHJ5emZpaTJcIj48c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGZvbnQtc2VtaWJvbGQgcC0xIG1kOnAtM1wiPjxpbWcgY2xhc3NOYW1lPVwidy0xMFwiIHNyYz1cImltYWdlcy9Gb290ZXItaWNvbnMvSW5zdGFncmFtLWljb24uc3ZnXCIvPiZuYnNwOzxwIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPkluc3RhZ3JhbTwvcD48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvcy12LW5hdGlvbmFsLWluc3RpdHV0ZS1vZi10ZWNobm9sb2d5LXN2bml0LXN1cmF0LW5pdC1zdXJhdC1cIj48c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGZvbnQtc2VtaWJvbGQgcC0xIG1kOnAtM1wiPjxpbWcgY2xhc3NOYW1lPVwidy0xMFwiIHNyYz1cImltYWdlcy9Gb290ZXItaWNvbnMvTGlua2VkSW4taWNvbi5zdmdcIi8+Jm5ic3A7PHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+TGlua2VkSW48L3A+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vTklUX1N1cmF0P3M9MjBcIj48c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGZvbnQtc2VtaWJvbGQgcC0xIG1kOnAtM1wiPjxpbWcgY2xhc3NOYW1lPVwidy0xMFwiIHNyYz1cImltYWdlcy9Gb290ZXItaWNvbnMvVHdpdHRlci1pY29uLnN2Z1wiLz4mbmJzcDs8cCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5Ud2l0dGVyPC9wPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweS0zIHB4LTUgdGV4dC14cyBtZDp0ZXh0LWwgdGV4dC1ncmF5LTIwMCBmbGV4IGp1c3RpZnktY2VudGVyXCI+JmNvcHk7IDIwMjEgRWxlY3Ryb25pY3MgRGVwYXJ0bWVudCAsIGFsbCByaWdodHMgcmVzZXJ2ZWQgJiM2NDsgTmF0aW9uYWwgaW5zdGl0dXRlIG9mIFRlY2hub2xvZ3ksIFNVUkFUIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpe1xyXG4gICAgY29uc3QgaW1hZ2VTdHlsZSA9IHtcclxuICAgICAgICB3aWR0aDo5MCxcclxuICAgICAgICBoZWlndGg6OTBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBwLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC00IGZsZXggZmxleC1yb3dcIiA+XHJcbiAgICAgICAgICAgICAgICB7LyogSGVhZGluZyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGp1c3RpZnktY2VudGVyIG10LTMgbWQ6bWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1ncmF5LTYwMCBmb250LWJvbGQgdGV4dC14bFwiPkVsZWN0cm9uaWNzIERlcGFydG1lbnQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1ncmF5LTYwMFwiPiBOYXRpb25hbCBpbnN0aXR1dGUgb2YgVGVjaG5vbG9neSwgU1VSQVQgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTE9HTyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBtZDpqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9OSVRfU3VyYXRfTG9nby5zdmcucG5nXCIgc3R5bGU9e2ltYWdlU3R5bGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZUNhcm91c2VsIGZyb20gXCIuL0ltYWdlQ2Fyb3VzZWwvSW1hZ2VDYXJvdXNlbFwiO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBiZy1ncmF5LTIwMCBncmlkIGdyaWQtY29scy0xXCI+XHJcblxyXG4gICAgICAgICAgICA8SW1hZ2VDYXJvdXNlbC8+XHJcblxyXG4gICAgICAgICAgICB7LyogRGVwYXJ0bWVudCBNaXNzaW9uICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBtLTQgYmctZ3JheS0zMDAgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS02MDAgdGV4dC1ib2xkIHRleHQtY2VudGVyXCI+RGVwYXJ0bWVudCBNaXNzaW9uPC9oNj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgdGV4dC1jZW50ZXIgdGV4dC1sXCI+VGhlIG1pc3Npb24gb2YgdGhlIEVsZWN0cm9uaWNzIEVuZ2luZWVyaW5nIERlcGFydG1lbnQgaXMgdG8gY29udHJpYnV0ZSB0byBzb2NpZXR5IGFuZCBpbmR1c3RyeSB0aHJvdWdoIGV4Y2VsbGVuY2UgaW4gZWR1Y2F0aW9uLCByZXNlYXJjaCwgaW5ub3ZhdGlvbnMgYW5kIGV0aGljcyBieSBzdGFrZWhvbGRlcnMuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBEZXBhcnRtZW50IE1pc3Npb24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgcC02IG14LTQgbWItNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTYwMCB0ZXh0LWJvbGQgdGV4dC1jZW50ZXJcIj5EZXBhcnRtZW50IFZpc2lvbjwvaDY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQtY2VudGVyIHRleHQtbFwiPlRoZSB2aXNpb24gb2YgdGhlIEVsZWN0cm9uaWNzIEVuZ2luZWVyaW5nIERlcGFydG1lbnQgaXMgdG8gQWltIHRvIGFjaGlldmUgcXVhbGl0eSBpbiBlZHVjYXRpb24gYW5kIHJlc2VhcmNoIHRvIGNyZWF0ZSBsZWFkaW5nIEVsZWN0cm9uaWNzIGVuZ2luZWVycywgcmVzZWFyY2hlcnMgYW5kIGVudHJlcHJlbmV1cnMuPC9wPiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZVNsaWRlIGZyb20gXCIuL0ltYWdlU2xpZGUvSW1hZ2VTbGlkZVwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VDYXJvdXNlbCgpe1xyXG5cclxuICAgIGNvbnN0IGltYWdlc0FycmF5ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC0xLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiMVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9lY2VkSW1hZ2VzL2VjZWQtMi5qcGdcIixcclxuICAgICAgICAgICAgXCJrZXlcIjpcIjJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZWNlZEltYWdlcy9lY2VkLTMuanBnXCIsXHJcbiAgICAgICAgICAgIFwia2V5XCI6XCIzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC00LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiNFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9lY2VkSW1hZ2VzL2VjZWQtNS5qcGdcIixcclxuICAgICAgICAgICAgXCJrZXlcIjpcIjVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZWNlZEltYWdlcy9lY2VkLTYuanBnXCIsXHJcbiAgICAgICAgICAgIFwia2V5XCI6XCI2XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC03LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiN1wiXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG5cclxuICAgIHZhciBzbGlkZUluZGV4ID0gMDtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93U2xpZGVzKCkge1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIHZhciBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXlTbGlkZXNcIik7XHJcbiAgICAgICAgdmFyIGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZG90XCIpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzbGlkZUluZGV4Kys7XHJcbiAgICAgICAgaWYgKHNsaWRlSW5kZXggPiBzbGlkZXMubGVuZ3RoKSB7c2xpZGVJbmRleCA9IDF9ICAgIFxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRvdHNbaV0uY2xhc3NOYW1lID0gZG90c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWRlc1tzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcclxuICAgICAgICBkb3RzW3NsaWRlSW5kZXgtMV0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG4gICAgICAgIHNldFRpbWVvdXQoc2hvd1NsaWRlcywgNTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzaG93U2xpZGVzKCk7XHJcbiAgICB9LCBbc2xpZGVJbmRleF0pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG14LTQgcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gbWQ6bXgtMFwiPiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXNob3ctY29udGFpbmVyIG1kOmgtOTZcIj5cclxuXHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VzQXJyYXkubWFwKChpbWFnZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVNsaWRlIGtleT17aW1hZ2UuaWR9ey4uLmltYWdlfS8+ICAgIFxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiIHN0eWxlPXt7dGV4dEFsaWdubWVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcm91c2VsO1xyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cIm10LTQgbXgtNCByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBtZDpteC0wXCI+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlc2hvdy1jb250YWluZXIgaC05NiBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbnVtYmVydGV4dFwiPjEgLyAzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2xpZGUtaW1hZ2VcIiBzcmM9XCJpbWFnZXMvZWNlZEltYWdlcy8zLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+Q2FwdGlvbiBUZXh0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbnVtYmVydGV4dFwiPjIgLyAzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbGlkZS1pbWFnZVwiIHNyYz1cImltYWdlcy9lY2VkSW1hZ2VzLzQuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPkNhcHRpb24gVHdvPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbnVtYmVydGV4dFwiPjMgLyAzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbGlkZS1pbWFnZVwiIHNyYz1cImltYWdlcy9lY2VkSW1hZ2VzLzUuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPkNhcHRpb24gVGhyZWU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiIHN0eWxlPXt7dGV4dEFsaWdubWVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VTbGlkZSh7aW1hZ2VTcmN9KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2xpZGUtaW1hZ2VcIiBzcmM9e2ltYWdlU3JjfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNsaWRlOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0b2dnbGVyIGZyb20gXCIuL3RvZ2dsZXJcIlxyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCl7XHJcbiAgICBjb25zdCBteVN0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoOjIwXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0b2dnbGVyKCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIG1kOmNvbC1zcGFuLTEgbS0zIGJnLWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgIDxuYXYgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgYm9yZGVyLWIgYm9yZGVyLWdyYXktMTAwIGZsZXgganVzdGlmeS1iZXR3ZWVuICBtZDpmbGV4IG1kOmp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sIGZvbnQtYm9sZCAgdXBwZXJjYXNlIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsIGhvdmVyOnRleHQtZ3JheS0xMDBcIj5FbGVjdHJvbmljcyBEZXBhcnRtZW50PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IGN1cnNvci1wb2ludGVyIG1kOmhpZGRlblwiIGlkPVwibWVudUJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBoLTggdy04XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IGhpZGRlbiBtZDpibG9ja1wiIGlkPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtZ3JheS00MDAgdGV4dC14bCBwLTYgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaC02IHctNlwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VsaW5lY2FwPVwicm91bmRcIiBzdHJva2VsaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk0zIDEybDItMm0wIDBsNy03IDcgN001IDEwdjEwYTEgMSAwIDAwMSAxaDNtMTAtMTFsMiAybS0yLTJ2MTBhMSAxIDAgMDEtMSAxaC0zbS02IDBhMSAxIDAgMDAxLTF2LTRhMSAxIDAgMDExLTFoMmExIDEgMCAwMTEgMXY0YTEgMSAwIDAwMSAxbS02IDBoNlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPiA8YSBocmVmPVwiLi9cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMTAwXCI+Jm5ic3A7SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtZ3JheS00MDAgdGV4dC14bCBweC02IHBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJoLTUgdy01XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xOCAxMGE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHptLTcgNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bS0xLTlhMSAxIDAgMDAtMSAxdjRhMSAxIDAgMTAyIDBWNmExIDEgMCAwMC0xLTF6XCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+PGEgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTEwMFwiPiZuYnNwO0Fib3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtZ3JheS00MDAgdGV4dC14bCBweC02IHBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvc3Zncy9QZW9wbGUuc3ZnXCIgc3R5bGU9e215U3R5bGV9Lz48YSBocmVmPVwiRmFjdWx0aWVzUGFnZVwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS0xMDBcIj4mbmJzcDtGYWN1bHRpZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdGV4dC1ncmF5LTQwMCB0ZXh0LXhsIHB4LTYgcGItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9zdmdzL1Jlc2VhcmNoLnN2Z1wiIHN0eWxlPXtteVN0eWxlfS8+PGEgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTEwMFwiIGhyZWY9XCJSZXNlYXJjaFBhZ2VcIj4mbmJzcDtQcm9qZWN0czwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcHgtNiBwYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy02XCIgc3JjPVwiaW1hZ2VzL3N2Z3MvRmFjaWxpdGllcy5zdmdcIi8+PGEgaHJlZj1cIlJlc2VhcmNoRmFjaWxpdGllc1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS0xMDBcIj4mbmJzcDtGYWNpbGl0aWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gdG9nZ2xlcigpe1xyXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudUJ1dHRvblwiKTtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XHJcblxyXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT5cclxuICAgICB7XHJcbiAgICAgICAgaWYobWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyL05hdmJhclwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vSG9tZS9Ib21lXCI7XHJcblxyXG5mdW5jdGlvbiBQYWdlTGF5b3V0KHtjaGlsZHJlbn0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtNFwiPlxyXG4gICAgICAgICAgICA8TmF2YmFyLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0zIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlTGF5b3V0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdGpzLXBvcHVwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=