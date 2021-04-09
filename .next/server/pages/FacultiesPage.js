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
        lineNumber: 13,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
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
        className: "flex justify-center text-xl",
        children: "Follow us on: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-center px-2 pb-2 pt-1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "flex items-center text-gray-600 font-semibold p-1 md:p-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "w-10",
              src: "images/Footer-icons/Facebook-icon.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 103
            }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "hidden md:block",
              children: "Facebook"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 176
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "flex items-center text-gray-600 font-semibold p-1 md:p-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "w-10",
              src: "images/Footer-icons/Instagram-icon.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 103
            }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "hidden md:block",
              children: "Instagram"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 177
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "flex items-center text-gray-600 font-semibold p-1 md:p-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "w-10",
              src: "images/Footer-icons/LinkedIn-icon.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 103
            }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "hidden md:block",
              children: "LinkedIn"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 176
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "flex items-center text-gray-600 font-semibold p-1 md:p-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "w-10",
              src: "images/Footer-icons/Twitter-icon.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 103
            }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "hidden md:block",
              children: "Twitter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 175
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 28
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
            children: "\xA0Research"
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
          className: "flex flex-row  text-gray-400 text-xl px-6 pb-6",
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
              d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "hover:text-gray-100",
            children: "\xA0Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 31
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvRmFjdWx0aWVzUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GYWN1bHRpZXMvRmFjdWx0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZhY3VsdGllcy9GYWN1bHR5Q2FyZC9GYWN1bHR5Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GYWN1bHRpZXMvRmFjdWx0eUNhcmQvS25vd01vcmVQb3BVcC9Lbm93TW9yZVBvcFVwLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZhY3VsdGllcy9GYWN1bHR5SGVhZGVyL0ZhY3VsdHlIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmFjdWx0aWVzL1NlYXJjaEJhci9TZWFyY2hCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ib21lL0ltYWdlQ2Fyb3VzZWwvSW1hZ2VDYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ib21lL0ltYWdlQ2Fyb3VzZWwvSW1hZ2VTbGlkZS9JbWFnZVNsaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BhZ2VMYXlvdXQvTmF2YmFyL05hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9QYWdlTGF5b3V0L05hdmJhci90b2dnbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BhZ2VMYXlvdXQvUGFnZUxheW91dC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0anMtcG9wdXBcIiJdLCJuYW1lcyI6WyJGYWN1bHRpZXNQYWdlIiwiRmFjdWx0aWVzIiwiZmFjdWx0aWVzQXJyYXkiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwidXNlU3RhdGUiLCJmYWN1bHRpZXMiLCJzZXRGYWN1bHRpZXMiLCJmaWx0ZXIiLCJyZWNvcmQiLCJ0YXJnZXRTdHJpbmciLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJsZW5ndGgiLCJpbmNsdWRlcyIsIm1hcCIsImZhY3VsdHkiLCJGYWN1bHR5Q2FyZCIsImltYWdlU3JjIiwicXVhbGlmaWNhdGlvbiIsImRlc2lnbmF0aW9uIiwiZW1haWwiLCJ0ZWFjaGluZ0ZpZWxkIiwiYXJlYU9mUmVzZWFyY2giLCJteVN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJOZXdMaW5lVGV4dCIsInRleHQiLCJuZXdUZXh0Iiwic3BsaXQiLCJzdHIiLCJLbm93TW9yZVBvcFVwIiwiRmFjdWx0eUhlYWRlciIsIlNlYXJjaEJhciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkZvb3RlciIsIkhlYWRlciIsImltYWdlU3R5bGUiLCJoZWlndGgiLCJIb21lIiwiSW1hZ2VDYXJvdXNlbCIsImltYWdlc0FycmF5Iiwic2xpZGVJbmRleCIsInNob3dTbGlkZXMiLCJpIiwic2xpZGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZG90cyIsInN0eWxlIiwiZGlzcGxheSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiaW1hZ2UiLCJpZCIsInRleHRBbGlnbm1lbnQiLCJJbWFnZVNsaWRlIiwiTmF2YmFyIiwidG9nZ2xlciIsIm1lbnVCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJj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QUFMLENBQWVHLEdBQWYsQ0FBbUIsUUFBbkI7QUFDSDtBQUNKLEdBVEQ7QUFVSDs7QUFFY1Isc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTUyxVQUFULENBQW9CO0FBQUNDO0FBQUQsQ0FBcEIsRUFBK0I7QUFDM0Isc0JBQ0k7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQSw0QkFDSSxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLGdCQUNLQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFIOztBQUFBO0FBRWNELHlFQUFmLEU7Ozs7Ozs7Ozs7O0FDZkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsMEMiLCJmaWxlIjoicGFnZXMvRmFjdWx0aWVzUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvRmFjdWx0aWVzUGFnZS5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZhY3VsdGllcyBmcm9tIFwiLi4vc3JjL0NvbXBvbmVudHMvRmFjdWx0aWVzL0ZhY3VsdGllc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9zcmMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gXCIuLi9zcmMvQ29tcG9uZW50cy9QYWdlTGF5b3V0L1BhZ2VMYXlvdXRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vc3JjL0NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xyXG5cclxuZnVuY3Rpb24gRmFjdWx0aWVzUGFnZSgpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG5cclxuICAgICAgICAgICAgPFBhZ2VMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8RmFjdWx0aWVzLz5cclxuICAgICAgICAgICAgPC9QYWdlTGF5b3V0PlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjdWx0aWVzUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4vU2VhcmNoQmFyL1NlYXJjaEJhclwiO1xyXG5pbXBvcnQgRmFjdWx0eUNhcmQgZnJvbSBcIi4vRmFjdWx0eUNhcmQvRmFjdWx0eUNhcmRcIjtcclxuaW1wb3J0IEZhY3VsdHlIZWFkZXIgZnJvbSBcIi4vRmFjdWx0eUhlYWRlci9GYWN1bHR5SGVhZGVyXCJcclxuXHJcbmZ1bmN0aW9uIEZhY3VsdGllcygpe1xyXG5cclxuICAgIGNvbnN0IGZhY3VsdGllc0FycmF5ID0gIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL2xhbGx1V2FkaWEucG5nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlByb2YuIEEuIEguIExhbGx1d2FkaWFcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiTS4gVGVjaC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImFobEBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIlRlbGVtYXRpY3MgXFxuUkYgJiBNaWNyb3dhdmUgRW5naW5lZXJpbmdcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIlJGICYgTWljcm93YXZlIEVuZ2luZWVyaW5nIFxcbkltYWdlIFByb2Nlc3NpbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9VcGVuYURhbGFsLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4oTXJzKSBVcGVuYSBELiBEYWxhbFwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaC5EXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInVkZEBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIkRpZ2l0YWwgY29tbXVuaWNhdGlvblxcbkFkaG9jIE5ldHdvcmtzXFxuV2lkZWJhbmQgY29tbXVuaWNhdGlvblxcbk1vYmlsZSBjb21wdXRpbmdcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIldpcmVsZXNzIENvbW11bmljYXRpb24gdGVjaG5pcXVlc1xcbjVHIHRlY2hub2xvZ3lcXG5XaXJlbGVzcyBzeXN0ZW1zIFxcbk9wdGljYWwgd2lyZWxlc3NcXG5TaWduYWwgcHJvY2Vzc2luZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL05CS2FuaXJrYXIuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlByb2YuIE5hcmVzaCBCLiBLYW5pcmthclwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJNLlRlY2guXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJuYmtAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJCYXNpYyBvZiBFbGVjdHJvbmljcyBFbmdpbmVlcmluZyBcXG5FbGVjdHJvbmljIERldmljZXMgJiBDaXJjdWl0cyBcXG5Tb2xpZCBTdGF0ZSBEZXZpY2VzXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJDRE1BIFxcbk1vYmlsZSBDb21tdW5pY2F0aW9uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvcHJhc2hhbnQuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBQcmFzaGFudCBLLiBTaGFoXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIk0uRS5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInBrc0BlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIkJhc2ljcyBvZiBFbGVjdHJvbmljcyBFbmdpbmVlcmluZyBcXG5EaWdpdGFsIENpcmN1aXRzIFxcbk1pY3JvcHJvY2Vzc29yIFxcbkRpZ2l0YWwgU2lnbmFsIFByb2Nlc3NpbmdcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIkxNSSBCYXNlZCBJbXByb3ZlZCBTdGFiaWxpdHkgQ3JpdGVyaWEgKERTUCBiYXNlZClcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9BYmhpc2hlay5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIEFiaGlzaGVrIEFjaGFyeWFcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGhEIChNaWNyb2VsZWN0cm9uaWNzICYgVkxTSSksIElJVCBSb29ya2VlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJhYmhpc2hla0BlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIkVsZWN0cm9uaWMgRGV2aWNlc1xcbkVsZWN0cm9uaWMgQ2lyY3VpdHNcXG5MaW5lYXIgSW50ZWdyYXRlZCBDaXJjdWl0c1xcblZMU0kgRGVzaWduXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJQaHlzaWNzICYgTW9kZWxpbmcgb2YgTmFuby1TY2FsZSBEZXZpY2VzXFxuRGV2aWNlLUNpcmN1aXQgSW50ZXJhY3Rpb25zIGluIE5hbm8tU2NhbGUgVHJhbnNpc3RvcnNcXG5XaWRlIEJhbmRnYXAgU2VtaWNvbmR1Y3RvcnMgYW5kIFxcbjJEIE1hdGVyaWFscyBmb3IgRGV2aWNlcyAmIENpcmN1aXRzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvSmlnbmVzaC5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIEppZ25lc2ggTi4gU2FydmFpeWFcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguIEQuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJqbnNAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJFbGVjdHJvbmljIFN5c3RlbSBEZXNpZ25cXG5EaWdpdGFsIEltYWdlIFByb2Nlc3NpbmdcXG4gSW5mb3JtYXRpb24gVGhlb3J5ICYgQ29kaW5nXFxuQW5hbG9nIEludGVncmF0ZWQgQ2lyY3VpdHNcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIkltYWdlIFByb2Nlc3NpbmdcXG5NZWRpY2FsIEluc3RydW1lbnRhdGlvblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL2RhcmppU2lyLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gQW5hbmQgRC4gRGFyamlcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguRC4gKE1pY3JvZWxlY3Ryb25pY3MpLCBJSVQgQm9tYmF5XCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJhZGRAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJWTFNJIERlc2lnblxcbkVsZWN0cm9uaWNzIEluc3RydW1lbnRhdGlvblxcbkRpZ2l0YWwgSW50ZWdyYXRlZCBDaXJjdWl0c1xcbkRpZ2l0YWwgVkxTSSBEZXNpZ24gKFBHKVxcblZMU0kgU3lzdGVtIERlc2lnbiAoIFBHLUVsZWN0aXZlKVwiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiVkxTSSBEZXNpZ25cXG5GUEdBLWJhc2VkIHN5c3RlbXMgZGVzaWduXFxuRGV2aWNlIG1vZGVsbGluZ1xcblZMU0kgRFNQIGFyY2hpdGVjdHVyZVxcbkVtYmVkZGVkIFN5c3RlbSBEZXNpZ25cXG5FbGVjdHJvbmljcyBJbnN0cnVtZW50YXRpb25cXG5TaWduYWwgUHJvY2Vzc2luZ1xcYkJpby1tZWRpY2FsIFNpZ25hbC9pbWFnZSBwcm9jZXNzaW5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvcGl5dXNoUGF0ZWwucG5nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBQSVlVU0ggTi4gUEFURUxcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguIEQuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJwbnBAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJPcHRpY2FsIENvbW11bmljYXRpb24gU3lzdGVtc1xcbk9wdGljYWwgTmV0d29ya3NcXG5BbmFsb2cgYW5kIERpZ2l0YWwgQ29tbXVuaWNhdGlvbiBTeXN0ZW1zXFxuU2Vuc29ycyBhbmQgVHJhbnNkdWNlcnNcXG5FbGVjdHJvbmljIERldmljZXMgYW5kIENpcmN1aXRzXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJPcHRpY2FsIENvbW11bmljYXRpb25zIGFuZCBOZXR3b3Jrc1xcblBob3RvbmljcyBEZXZpY2VzICYgU2Vuc29yc1xcbk1pY3Jvd2F2ZSBBbnRlbm5hIGFuZCBXYXZlZ3VkZXNcXG5NZXRhbWF0ZXJpYWwgYmFzZWQgU2Vuc29yc1xcbk9wdGljYWwsIFJGLCBNZXRhbWF0ZXJpYWwgYmFzZWQgU2Vuc29ycyAmIEJpb3NlbnNvcnNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy96dWJlci5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIFp1YmVyIE0uIFBhdGVsXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLiBELlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiem1wQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiRGlnaXRhbCBMb2dpYyBkZXNpZ25cXG5FbWJlZGRlZCBTeXN0ZW1zXFxuTWljcm9lbGVjdHJvbmljcyBhbmQgVkxTSVxcbk1pY3JvY29udHJvbGxlcnMgYW5kIEludGVyZmFjaW5nXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJIREwvRlBHQSBiYXNlZCBkZXNpZ25cXG5WTFNJIERlc2lnbiBvZiBSSVNDIE1pY3JvcHJvY2Vzc29yc1xcbkZQR0EvQVNJQyBEZXNpZ24gb2Ygd2lyZWxlc3MgdHJhbnNjZWl2ZXIgaGFyZHdhcmVcXG5FbWJlZGRlZCBTeXN0ZW1zXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvUGluYWwuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBQaW5hbGt1bWFyIEouIEVuZ2luZWVyXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLiBELlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwicGplQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiQWR2YW5jZWQgUHJvY2Vzc29yIEFyY2hpdGVjdHVyZVxcbkRTUCBTdHJ1Y3R1cmVzIGZvciBWTFNJXFxuRW1iZWRkZWQgU3lzdGVtc1xcblJlYWwgVGltZSBTeXN0ZW1zXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJGUEdBIGJhc2VkIHN5c3RlbSBkZXNpZ25cXG5WTFNJIGFyY2hpdGVjdHVyZSBmb3IgcmVhbC10aW1lIHNpZ25hbC9pbWFnZSBwcm9jZXNzaW5nXFxuSGlnaCBwZXJmb3JtYW5jZSBlbWJlZGRlZCBjb21wdXRpbmdcXG5FbWJlZGRlZCBhbmQgcmVhbC10aW1lIHN5c3RlbXNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9SYXNpa2EuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiAoTXJzLikgUmFzaWthIE4uIERoYXZzZVwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaC4gRC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInJza0BlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIlZMU0kgRGVzaWduXFxuVkxTSSBUZWNobm9sb2d5XFxuRWxlY3Ryb25pYyBDaXJjdWl0c1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiVkxTSSBEZXNpZ25cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9hYmhpbGFzaC5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIEFiaGlsYXNoIFMuIE1hbmRsb2lcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguIEQuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJhc21AZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJPcHRpY2FsIE5ldHdvcmtzIEFkdmFuY2UgT3B0aWNhbCBcXG5Db21tdW5pY2F0aW9uIFN5c3RlbXMgXFxuQmFzaWNzIG9mIEVsZWN0cm9uaWNzIEVuZ2luZWVyaW5nIFxcbkRhdGEgQ29tbXVuaWNhdGlvbiBhbmQgTmV0d29ya3MgXFxuTGluZWFyIEVsZWN0cm9uaWNzXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJGaWJyZSBPcHRpY3MgT3B0aWNhbCBDb21tdW5pY2F0aW9ucyBcXG5PcHRpY2FsIE5ldHdvcmtzLCBGcmVlIFNwYWNlIE9wdGljcyBcXG5QaG90b25pYyBEZXZpY2VzLCBJbnRlZ3JhdGVkIE9wdGljc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL2ppZ2lzaGEucG5nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiAoTXMuKSBKaWdpc2hhIE4uIFBhdGVsXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLiBELlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiam5wYXRlbEBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIkluZm9ybWF0aW9uIFRoZW9yeSBhbmQgQ29kaW5nIFxcbk11bHRpbWVkaWEgQ29tbXVuaWNhdGlvbiBcXG5EaWdpdGFsIExvZ2ljIERlc2lnbiBcXG5JbWFnZSBwcm9jZXNzaW5nXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJXaXJlbGVzcyBDb21tdW5pY2F0aW9uIFxcbkltYWdlIC8gVmlkZW8gQ29kaW5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvU2hpbHBpR3VwdGEuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiAoTXMuKSBTaGlscGkgR3VwdGFcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguIEQuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJzZ3VwdGFAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJEaWdpdGFsIHNhdGVsbGl0ZSBDb21tdW5pY2F0aW9uIFxcbkRpZ2l0YWwgRWxlY3Ryb25pY3MgXFxuRWxlY3Ryb25pY3MgRGV2aWNlcyBhbmQgQ2lyY3VpdHMgXFxuTUlNTyBUZWNobm9sb2d5IFxcbkFuYWxvZyBhbmQgRGlnaXRhbCBDb21tdW5pY2F0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCI1RyBUZWNobm9sb2d5IFxcbk1hc3NpdmUgTUlNTyBEZXRlY3Rpb24gVGVjaG5pcXVlcyBcXG5BbnRlbm5hIERlc2lnbiBmb3IgNUcgQXBwbGljYXRpb25zIFxcbldhdmVmb3JtIERlc2lnbmluZyBmb3IgTUlNTyBSYWRhciBcXG5GcmVlIFNwYWNlIE9wdGljcyBcXG5GaWJlciBPcHRpYyBTZW5zb3JzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvR29sYWsuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlByb2YuIEdvbGFrIFNhbnRyYVwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJNLkUuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJzLmdvbGFrQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiRU0gVGhlb3J5IFxcbkFuYWxvZyBJbnRlZ3JhdGVkIENpcmN1aXQgXFxuTWljcm93YXZlIEludGVncmF0ZWQgQ2lyY3VpdCxNaWNyb3dhdmUgXFxuRW5naW5lZXJpbmdcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIlBhdGNoIEFudGVubmFNaWNyby1zdHJpcCBmaWx0ZXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9Td2V0YS5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIChNcnMuKSBTaHdldGEgTi4gU2hhaFwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaC4gRC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInNuc2hhaEBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIkJhc2ljcyBvZiBDb21tdW5pY2F0aW9uIFN5c3RlbSBcXG5Nb2JpbGUgQ29tbXVuaWNhdGlvbiBcXG5XaXJlbGVzcyBDb21tdW5pY2F0aW9uIFxcbk1vYmlsZSBDb21wdXRpbmdcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIldpcmVsZXNzIENvbW11bmljYXRpb24gXFxuTW9iaWxlIENvbW11bmljYXRpb24gYW5kIHN0YW5kYXJkcyBcXG5EaWdpdGFsIFZpZGVvIEJyb2FkY2FzdCBhbmQgc3RhbmRhcmRzIFxcbkNvZ25pdGl2ZSBSYWRpbyBcXG5OYXZJQy9JUk5TU1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL21laHVsLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJQcm9mLiBNZWh1bCBDLiBQYXRlbFwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJNLkUuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJtY3BAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJJbmZvcm1hdGlvbiBUaGVvcnkgJiBDb2RpbmcgXFxuQXBwbGljYXRpb24gb2YgRFNQIFxcbkFuYWxvZyAmIERpZ2l0YWwgQ29tbXVuaWNhdGlvbiBcXG5TYXRlbGxpdGUgQ29tbXVuaWNhdGlvblwiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiRGlnaXRhbCBTaWduYWwgUHJvY2Vzc2luZyB1c2luZyBWTFNJXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMva2lzaG9yZS5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIEtpc2hvciBQLiBVcGxhXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBvc3QgRG9jdG9yYWwgRmVsbG93LUVSQ0lNIChOVE5VLCBOb3J3YXkpLFBoLkQuIChEQS1JSUNULCBHYW5kaGluYWdhcilcIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImtwdUBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIlNpZ25hbHMgJiBTeXN0ZW1zIFxcbkRpZ2l0YWwgU2lnbmFsIFByb2Nlc3NpbmcgXFxuRWxlY3Ryb25pY3MgRGV2aWNlcyAmIENpcmN1aXRzIFxcbkNvbW11bmljYXRpb24gU3lzdGVtc1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiTWFjaGluZS9EZWVwIExlYXJuaW5nIFxcbk9iamVjdCBkZXRlY3Rpb24vcmVjb2duaXRpb24sIFxcbk11bHRpLXNwZWN0cmFsIGFuZCBoeXBlcnNwZWN0cmFsIGltYWdlIHByb2Nlc3NpbmcgXFxuSW1hZ2UgUmVzdG9yYXRpb24gXFxuQmlvLW1lZGljYWwgSW1hZ2UgRnVzaW9uIFxcbkluZm9ybWF0aW9uIEZ1c2lvbiBcXG5NdWx0aS1SZXNvbHV0aW9uIEltYWdlIEZ1c2lvbi9QYW4tU2hhcnBlbmluZyBcXG5JbWFnZSBTdXBlciAtIFJlc29sdXRpb25cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9TdW1hbkRlYi5wbmdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIFN1bWFuIERlYlwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaC5ELiAoSUlUIEd1d2FoYXRpKVwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwic3VtYW5kZWJAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJBZHZhbmNlIERpZ2l0YWwgU2lnbmFsIFByb2Nlc3NpbmcgXFxuRGlnaXRhbCBTaWduYWwgUHJvY2Vzc2luZywgXFxuQWQtSG9jIE5ldHdvcmtzXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJTaWduYWwgUHJvY2Vzc2luZyxTcGVlY2ggXFxuUHJvY2Vzc2luZyxTcGVlY2ggYmFzZWQgSGVhbHRoIEFuYWx5c2lzIFxcbkVtb3Rpb24gQW5hbHlzaXMgYmFzZWQgb24gU3BlZWNoIGFuZCBcXG5JbWFnZSxTcGVlY2ggUGF0aG9sb2d5IERldGVjdGlvbiBcXG5Wb2ljZSBDb252ZXJzaW9uL1NwZWFrZXIgSWRlbnRpdHkgXFxuQ29udmVyc2lvbixQYXR0ZXJuIFJlY29nbml0aW9uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvZGVlcGFrSm9zaGkucG5nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBEZWVwYWsgSm9zaGlcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguRC4gKElJVCBHdXdhaGF0aSlcIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImQuam9zaGlAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJUZXN0aW5nIGFuZCBWZXJpZmljYXRpb24gb2YgVkxTSSBDaXJjdWl0c1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiTWV0YWhldXJpc3RpY3MsIEFuYWxvZyBDaXJjdWl0czogRGVzaWduIGFuZCBPcHRpbWl6YXRpb24gXFxuQ29tcHV0YXRpb25hbCBJbnRlbGxpZ2VuY2UsIENBRCBmb3IgVkxTSVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL2thbWFsLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gS2FtYWwgQ2FwdGFpblwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaC5ELiAoREFJSUNULCBHYW5kaGluYWdhcilcIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImthbWFsY2FwdGFpbkBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIlByb2JhYmlsaXR5IGFuZCBSYW5kb20gUHJvY2Vzc2VzIFxcblNpZ25hbHMgYW5kIFN5c3RlbXMgXFxuRGlnaXRhbCBTaWduYWwgUHJvY2Vzc2luZyBcXG5FbGVjdHJvbmljIFN5c3RlbSBEZXNpZ25cIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIkNvZ25pdGl2ZSBSYWRpbywgU2lnbmFsIFByb2Nlc3NpbmcgXFxuU3RhdGlzdGljYWwgU2lnbmFsIFByb2Nlc3NpbmcgXFxuV2lyZWxlc3MgQ29tbXVuaWNhdGlvbiwgTWFjaGluZSBMZWFybmluZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL2tpcnRpLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gS2lydGkgSW5hbWRhclwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaC5ELlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwia2tpQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiRWxlY3Ryb21hZ25ldGljcyBhbmQgd2F2ZSBQcm9wYWdhdGlvbiBUaGVvcnkgXFxuQW50ZW5uYSBUaGVvcnksIFJGICYgTWljcm93YXZlIFRoZW9yeSBcXG5TYXRlbGxpdGUgQ29tbXVuaWNhdGlvbiwgUkFEQVIgYW5kIGl0cyBBcHBsaWNhdGlvbiBcXG5BbmFsb2cgJiBkaWdpdGFsIENvbW11bmljYXRpb25cIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIk1pY3Jvc3RyaXAgUGF0Y2ggQW50ZW5uYSBkZXNpZ24gdXNpbmcgTWV0YW1hdGVyaWFscyBcXG5XZWFyYWJsZSBBbnRlbm5hc1wiXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG5cclxuXHJcbiAgICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2ZhY3VsdGllcywgc2V0RmFjdWx0aWVzXSA9IHVzZVN0YXRlKGZhY3VsdGllc0FycmF5KTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZhY3VsdHlIZWFkZXIvPlxyXG5cclxuICAgICAgICAgICAgPFNlYXJjaEJhciBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9IHNldFNlYXJjaFF1ZXJ5PXtzZXRTZWFyY2hRdWVyeX0vPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGwtaGlkZSBvdmVyZmxvdy15LXNjcm9sbCBoLTQ1MHB4IG10LTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMyBzbTpncmlkLWNvbHMtMlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7ZmFjdWx0aWVzQXJyYXkuZmlsdGVyKChyZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RyaW5nID0gcmVjb3JkLm5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFNlYXJjaFF1ZXJ5Lmxlbmd0aCA9PT0gMCA/IHRydWUgOiB0YXJnZXRTdHJpbmcuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkubWFwKChmYWN1bHR5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYWN1bHR5Q2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjdWx0eT17ZmFjdWx0eX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZmFjdWx0eS5uYW1lfXsuLi5mYWN1bHR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWN1bHRpZXM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEtub3dNb3JlUG9wVXAgZnJvbSBcIi4vS25vd01vcmVQb3BVcC9Lbm93TW9yZVBvcFVwXCI7XHJcblxyXG5mdW5jdGlvbiBGYWN1bHR5Q2FyZCh7aW1hZ2VTcmMsIG5hbWUsIHF1YWxpZmljYXRpb24sIGRlc2lnbmF0aW9uLCBlbWFpbCwgdGVhY2hpbmdGaWVsZCwgYXJlYU9mUmVzZWFyY2h9KXtcclxuXHJcbiAgICBjb25zdCBteVN0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoOjMwMCxcclxuICAgICAgICBoZWlnaHQ6MzAwXHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0zIGJnLWdyYXktMjAwIGhvdmVyOmJnLWdyYXktMzAwIGJsb2NrIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy0yeGwgcHgtNSBweS00IG15LTRcIj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJibG9jayByb3VuZGVkIHRleHQtZ3JheS04MDAgZm9udC1ib2xkIHRleHQtbGdcIj57bmFtZX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1tZCB0ZXh0LWdyYXktNjAwXCI+e3F1YWxpZmljYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmxvY2sgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDBcIj57ZGVzaWduYXRpb259PEtub3dNb3JlUG9wVXAgdGVhY2hpbmdGaWVsZD17dGVhY2hpbmdGaWVsZH0gYXJlYU9mUmVzZWFyY2g9e2FyZWFPZlJlc2VhcmNofS8+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMyBmbGV4IGp1c3RpZnktYXJvdW5kICBweC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lciBtLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIiBzcmM9e2ltYWdlU3JjfSBrZXk9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZFwiPmVtYWlsOiA8aDEgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPiZuYnNwO3tlbWFpbH08L2gxPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWN1bHR5Q2FyZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQb3B1cCBmcm9tIFwicmVhY3Rqcy1wb3B1cFwiO1xyXG5cclxuZnVuY3Rpb24gTmV3TGluZVRleHQoe3RleHR9KSB7XHJcbiAgICBjb25zdCBuZXdUZXh0ID0gdGV4dC5zcGxpdCgnXFxuJykubWFwKHN0ciA9PiA8bGkgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBwdC0wIHB4LTNcIj57c3RyfTwvbGk+KTtcclxuICAgIHJldHVybiBuZXdUZXh0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBLbm93TW9yZVBvcFVwKHt0ZWFjaGluZ0ZpZWxkLCBhcmVhT2ZSZXNlYXJjaH0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxQb3B1cCBuZXN0ZWQgdHJpZ2dlcj17PHNwYW4gY2xhc3NOYW1lPVwiYnRuIG10LTIgaG92ZXI6YmctZ3JheS00MDAgY3Vyc29yLXBvaW50ZXIgYmxvY2sgcm91bmRlZC1mdWxsIGJnLWdyYXktNTAwIHB4LTMgcHktMSB3LTI4IHRleHQtZ3JheS0xMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiPktub3cgTW9yZTwvc3Bhbj59PlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCByb3VuZGVkIGJvcmRlci00IGJvcmRlci1ncmF5LTUwIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgZm9udC1ib2xkXCI+VGVhY2hpbmcgRmllbGQ6PC9oMj5cclxuICAgICAgICAgICAgICAgIDxOZXdMaW5lVGV4dCB0ZXh0PXt0ZWFjaGluZ0ZpZWxkfS8+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBmb250LWJvbGRcIj5BcmVhIG9mIFJlc2VhcmNoPC9oMj5cclxuICAgICAgICAgICAgICAgIDxOZXdMaW5lVGV4dCB0ZXh0PXthcmVhT2ZSZXNlYXJjaH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1BvcHVwPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLbm93TW9yZVBvcFVwOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEZhY3VsdHlIZWFkZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHAtNSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogSGVhZGluZyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGp1c3RpZnktY2VudGVyIG10LTMgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWdyYXktNzAwIHRleHQtbGcgZm9udC1ib2xkXCI+Q3VycmVudCBIZWFkIE9mIERlcGFydG1lbnQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS02MDAgdGV4dC14bFwiPkRyLiBQSVlVU0ggTi4gUEFURUw8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWN1bHR5SGVhZGVyO1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoQmFyKHtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnl9KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQgYmctZ3JheS00MDAgcC0zXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkXCJcclxuICAgICAgICAgICAgaWQ9XCJmYWN1bHR5TmFtZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggRmFjdWx0eSBCeSBOYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCAgbXQtMVwiPlxyXG4gICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJweC01XCIgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNCBmbGV4IGZsZXgtcm93XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMSBmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC0zIG1kOm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFN1YiBIZWFkaW5nICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1ncmF5LTYwMCBmb250LWJvbGQgdGV4dC1tZFwiPkVsZWN0cm9uaWNzIERlcGFydG1lbnQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWdyYXktNjAwIHRleHQteHNcIj4gTmF0aW9uYWwgaW5zdGl0dXRlIG9mIFRlY2hub2xvZ3ksIFNVUkFUIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTVk5JVCBsb2dvICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTMyIGZsZXggaC0xMiB3LTEyIHRleHQtY2VudGVyIG1kOmp1c3RpZnktZW5kIG1kOm1yLTMyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIlwiIHNyYz1cImltYWdlcy9OSVRfU3VyYXRfTG9nby5zdmcucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBwdC0xIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHRleHQteGxcIj5Gb2xsb3cgdXMgb246IDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB4LTIgcGItMiBwdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZm9udC1zZW1pYm9sZCBwLTEgbWQ6cC0zXCI+PGltZyBjbGFzc05hbWU9XCJ3LTEwXCIgc3JjPVwiaW1hZ2VzL0Zvb3Rlci1pY29ucy9GYWNlYm9vay1pY29uLnN2Z1wiLz4mbmJzcDs8cCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5GYWNlYm9vazwvcD48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBmb250LXNlbWlib2xkIHVwcGVyY2FzZSBwLTNcIj48aW1nIGNsYXNzTmFtZT1cInctMTBcIiBzcmM9XCJpbWFnZXMvRm9vdGVyLWljb25zL1lvdVR1YmUtaWNvbi5zdmdcIi8+Jm5ic3A7PGE+WW91dHViZTwvYT48L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGZvbnQtc2VtaWJvbGQgcC0xIG1kOnAtM1wiPjxpbWcgY2xhc3NOYW1lPVwidy0xMFwiIHNyYz1cImltYWdlcy9Gb290ZXItaWNvbnMvSW5zdGFncmFtLWljb24uc3ZnXCIvPiZuYnNwOzxwIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPkluc3RhZ3JhbTwvcD48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGZvbnQtc2VtaWJvbGQgcC0xIG1kOnAtM1wiPjxpbWcgY2xhc3NOYW1lPVwidy0xMFwiIHNyYz1cImltYWdlcy9Gb290ZXItaWNvbnMvTGlua2VkSW4taWNvbi5zdmdcIi8+Jm5ic3A7PHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+TGlua2VkSW48L3A+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+PHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBmb250LXNlbWlib2xkIHAtMSBtZDpwLTNcIj48aW1nIGNsYXNzTmFtZT1cInctMTBcIiBzcmM9XCJpbWFnZXMvRm9vdGVyLWljb25zL1R3aXR0ZXItaWNvbi5zdmdcIi8+Jm5ic3A7PHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+VHdpdHRlcjwvcD48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHktMyBweC01IHRleHQteHMgbWQ6dGV4dC1sIHRleHQtZ3JheS0yMDAgZmxleCBqdXN0aWZ5LWNlbnRlclwiPiZjb3B5OyAyMDIxIEVsZWN0cm9uaWNzIERlcGFydG1lbnQgLCBhbGwgcmlnaHRzIHJlc2VydmVkICYjNjQ7IE5hdGlvbmFsIGluc3RpdHV0ZSBvZiBUZWNobm9sb2d5LCBTVVJBVCA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKXtcclxuICAgIGNvbnN0IGltYWdlU3R5bGUgPSB7XHJcbiAgICAgICAgd2lkdGg6OTAsXHJcbiAgICAgICAgaGVpZ3RoOjkwXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNCBmbGV4IGZsZXgtcm93XCIgPlxyXG4gICAgICAgICAgICAgICAgey8qIEhlYWRpbmcgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0zIG1kOm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS02MDAgZm9udC1ib2xkIHRleHQteGxcIj5FbGVjdHJvbmljcyBEZXBhcnRtZW50PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS02MDBcIj4gTmF0aW9uYWwgaW5zdGl0dXRlIG9mIFRlY2hub2xvZ3ksIFNVUkFUIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIExPR08gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgbWQ6anVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvTklUX1N1cmF0X0xvZ28uc3ZnLnBuZ1wiIHN0eWxlPXtpbWFnZVN0eWxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VDYXJvdXNlbCBmcm9tIFwiLi9JbWFnZUNhcm91c2VsL0ltYWdlQ2Fyb3VzZWxcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQgYmctZ3JheS0yMDAgZ3JpZCBncmlkLWNvbHMtMVwiPlxyXG5cclxuICAgICAgICAgICAgPEltYWdlQ2Fyb3VzZWwvPlxyXG5cclxuICAgICAgICAgICAgey8qIERlcGFydG1lbnQgTWlzc2lvbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgbS00IGJnLWdyYXktMzAwIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktNjAwIHRleHQtYm9sZCB0ZXh0LWNlbnRlclwiPkRlcGFydG1lbnQgTWlzc2lvbjwvaDY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQtY2VudGVyIHRleHQtbFwiPlRoZSBtaXNzaW9uIG9mIHRoZSBFbGVjdHJvbmljcyBFbmdpbmVlcmluZyBEZXBhcnRtZW50IGlzIHRvIGNvbnRyaWJ1dGUgdG8gc29jaWV0eSBhbmQgaW5kdXN0cnkgdGhyb3VnaCBleGNlbGxlbmNlIGluIGVkdWNhdGlvbiwgcmVzZWFyY2gsIGlubm92YXRpb25zIGFuZCBldGhpY3MgYnkgc3Rha2Vob2xkZXJzLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogRGVwYXJ0bWVudCBNaXNzaW9uICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHAtNiBteC00IG1iLTQgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS02MDAgdGV4dC1ib2xkIHRleHQtY2VudGVyXCI+RGVwYXJ0bWVudCBWaXNpb248L2g2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCB0ZXh0LWNlbnRlciB0ZXh0LWxcIj5UaGUgdmlzaW9uIG9mIHRoZSBFbGVjdHJvbmljcyBFbmdpbmVlcmluZyBEZXBhcnRtZW50IGlzIHRvIEFpbSB0byBhY2hpZXZlIHF1YWxpdHkgaW4gZWR1Y2F0aW9uIGFuZCByZXNlYXJjaCB0byBjcmVhdGUgbGVhZGluZyBFbGVjdHJvbmljcyBlbmdpbmVlcnMsIHJlc2VhcmNoZXJzIGFuZCBlbnRyZXByZW5ldXJzLjwvcD4gIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VTbGlkZSBmcm9tIFwiLi9JbWFnZVNsaWRlL0ltYWdlU2xpZGVcIjtcclxuXHJcbmZ1bmN0aW9uIEltYWdlQ2Fyb3VzZWwoKXtcclxuXHJcbiAgICBjb25zdCBpbWFnZXNBcnJheSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9lY2VkSW1hZ2VzL2VjZWQtMS5qcGdcIixcclxuICAgICAgICAgICAgXCJrZXlcIjpcIjFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZWNlZEltYWdlcy9lY2VkLTIuanBnXCIsXHJcbiAgICAgICAgICAgIFwia2V5XCI6XCIyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC0zLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9lY2VkSW1hZ2VzL2VjZWQtNC5qcGdcIixcclxuICAgICAgICAgICAgXCJrZXlcIjpcIjRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZWNlZEltYWdlcy9lY2VkLTUuanBnXCIsXHJcbiAgICAgICAgICAgIFwia2V5XCI6XCI1XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC02LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiNlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9lY2VkSW1hZ2VzL2VjZWQtNy5qcGdcIixcclxuICAgICAgICAgICAgXCJrZXlcIjpcIjdcIlxyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbiAgICB2YXIgc2xpZGVJbmRleCA9IDA7XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1NsaWRlcygpIHtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICB2YXIgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm15U2xpZGVzXCIpO1xyXG4gICAgICAgIHZhciBkb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRvdFwiKTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7ICBcclxuICAgICAgICB9XHJcbiAgICAgICAgc2xpZGVJbmRleCsrO1xyXG4gICAgICAgIGlmIChzbGlkZUluZGV4ID4gc2xpZGVzLmxlbmd0aCkge3NsaWRlSW5kZXggPSAxfSAgICBcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkb3RzW2ldLmNsYXNzTmFtZSA9IGRvdHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzbGlkZXNbc2xpZGVJbmRleC0xXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgXHJcbiAgICAgICAgZG90c1tzbGlkZUluZGV4LTFdLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcclxuICAgICAgICBzZXRUaW1lb3V0KHNob3dTbGlkZXMsIDUwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2hvd1NsaWRlcygpO1xyXG4gICAgfSwgW3NsaWRlSW5kZXhdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBteC00IHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuIG1kOm14LTBcIj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVzaG93LWNvbnRhaW5lciBtZDpoLTk2XCI+XHJcblxyXG4gICAgICAgICAgICAgICAge2ltYWdlc0FycmF5Lm1hcCgoaW1hZ2UpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VTbGlkZSBrZXk9e2ltYWdlLmlkfXsuLi5pbWFnZX0vPiAgICBcclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIiBzdHlsZT17e3RleHRBbGlnbm1lbnQ6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDYXJvdXNlbDtcclxuXHJcblxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJtdC00IG14LTQgcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gbWQ6bXgtMFwiPiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXNob3ctY29udGFpbmVyIGgtOTYgXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1jb250YWluZXIgbXlTbGlkZXMgZmFkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG51bWJlcnRleHRcIj4xIC8gMzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNsaWRlLWltYWdlXCIgc3JjPVwiaW1hZ2VzL2VjZWRJbWFnZXMvMy5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPkNhcHRpb24gVGV4dDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1jb250YWluZXIgbXlTbGlkZXMgZmFkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG51bWJlcnRleHRcIj4yIC8gMzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2xpZGUtaW1hZ2VcIiBzcmM9XCJpbWFnZXMvZWNlZEltYWdlcy80LmpwZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5DYXB0aW9uIFR3bzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1jb250YWluZXIgbXlTbGlkZXMgZmFkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG51bWJlcnRleHRcIj4zIC8gMzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2xpZGUtaW1hZ2VcIiBzcmM9XCJpbWFnZXMvZWNlZEltYWdlcy81LmpwZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5DYXB0aW9uIFRocmVlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIiBzdHlsZT17e3RleHRBbGlnbm1lbnQ6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEltYWdlU2xpZGUoe2ltYWdlU3JjfSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1jb250YWluZXIgbXlTbGlkZXMgZmFkZVwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNsaWRlLWltYWdlXCIgc3JjPXtpbWFnZVNyY30gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTbGlkZTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdG9nZ2xlciBmcm9tIFwiLi90b2dnbGVyXCJcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpe1xyXG4gICAgY29uc3QgbXlTdHlsZSA9IHtcclxuICAgICAgICB3aWR0aDoyMFxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdG9nZ2xlcigpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBtZDpjb2wtc3Bhbi0xIG0tMyBiZy1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICA8bmF2ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IGJvcmRlci1iIGJvcmRlci1ncmF5LTEwMCBmbGV4IGp1c3RpZnktYmV0d2VlbiAgbWQ6ZmxleCBtZDpqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbCBmb250LWJvbGQgIHVwcGVyY2FzZSBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgY3Vyc29yLXBvaW50ZXIgdGV4dC14bCBob3Zlcjp0ZXh0LWdyYXktMTAwXCI+RWxlY3Ryb25pY3MgRGVwYXJ0bWVudDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBjdXJzb3ItcG9pbnRlciBtZDpoaWRkZW5cIiBpZD1cIm1lbnVCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgaC04IHctOFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRleHQtbGVmdCBoaWRkZW4gbWQ6YmxvY2tcIiBpZD1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcC02IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImgtNiB3LTZcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMyAxMmwyLTJtMCAwbDctNyA3IDdNNSAxMHYxMGExIDEgMCAwMDEgMWgzbTEwLTExbDIgMm0tMi0ydjEwYTEgMSAwIDAxLTEgMWgtM20tNiAwYTEgMSAwIDAwMS0xdi00YTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2NGExIDEgMCAwMDEgMW0tNiAwaDZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4gPGEgaHJlZj1cIi4vXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTEwMFwiPiZuYnNwO0hvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcHgtNiBwYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaC01IHctNVwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTggMTBhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS03IDRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0tMS05YTEgMSAwIDAwLTEgMXY0YTEgMSAwIDEwMiAwVjZhMSAxIDAgMDAtMS0xelwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPjxhIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS0xMDBcIj4mbmJzcDtBYm91dDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcHgtNiBwYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3N2Z3MvUGVvcGxlLnN2Z1wiIHN0eWxlPXtteVN0eWxlfS8+PGEgaHJlZj1cIkZhY3VsdGllc1BhZ2VcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMTAwXCI+Jm5ic3A7RmFjdWx0aWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtZ3JheS00MDAgdGV4dC14bCBweC02IHBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvc3Zncy9SZXNlYXJjaC5zdmdcIiBzdHlsZT17bXlTdHlsZX0vPjxhIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS0xMDBcIj4mbmJzcDtSZXNlYXJjaDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyAgdGV4dC1ncmF5LTQwMCB0ZXh0LXhsIHB4LTYgcGItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImgtNiB3LTZcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMyA1YTIgMiAwIDAxMi0yaDMuMjhhMSAxIDAgMDEuOTQ4LjY4NGwxLjQ5OCA0LjQ5M2ExIDEgMCAwMS0uNTAyIDEuMjFsLTIuMjU3IDEuMTNhMTEuMDQyIDExLjA0MiAwIDAwNS41MTYgNS41MTZsMS4xMy0yLjI1N2ExIDEgMCAwMTEuMjEtLjUwMmw0LjQ5MyAxLjQ5OGExIDEgMCAwMS42ODQuOTQ5VjE5YTIgMiAwIDAxLTIgMmgtMUM5LjcxNiAyMSAzIDE0LjI4NCAzIDZWNXpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz48YSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMTAwXCI+Jm5ic3A7Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZXIoKXtcclxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVCdXR0b25cIik7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xyXG5cclxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+XHJcbiAgICAge1xyXG4gICAgICAgIGlmKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZ2dsZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhci9OYXZiYXJcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL0hvbWUvSG9tZVwiO1xyXG5cclxuZnVuY3Rpb24gUGFnZUxheW91dCh7Y2hpbGRyZW59KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTRcIj5cclxuICAgICAgICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMyBwLTNcIj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUxheW91dDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Rqcy1wb3B1cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9