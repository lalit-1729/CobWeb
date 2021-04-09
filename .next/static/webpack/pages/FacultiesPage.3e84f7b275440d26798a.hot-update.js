webpackHotUpdate_N_E("pages/FacultiesPage",{

/***/ "./src/Components/Faculties/Faculties.js":
/*!***********************************************!*\
  !*** ./src/Components/Faculties/Faculties.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Croma_Desktop_git_repo_new_repo_CobWeb_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBar/SearchBar */ "./src/Components/Faculties/SearchBar/SearchBar.js");
/* harmony import */ var _FacultyCard_FacultyCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FacultyCard/FacultyCard */ "./src/Components/Faculties/FacultyCard/FacultyCard.js");
/* harmony import */ var _FacultyHeader_FacultyHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FacultyHeader/FacultyHeader */ "./src/Components/Faculties/FacultyHeader/FacultyHeader.js");



var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Faculties\\Faculties.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Croma_Desktop_git_repo_new_repo_CobWeb_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function Faculties() {
  _s();

  var _this = this;

  var facultiesArray = [{
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      searchQuery = _useState[0],
      setSearchQuery = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(facultiesArray),
      faculties = _useState2[0],
      setFaculties = _useState2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_FacultyHeader_FacultyHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "scroll-hide overflow-y-scroll h-450px mt-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "grid md:grid-cols-3 sm:grid-cols-2",
        children: facultiesArray.filter(function (record) {
          var targetString = record.name.toLowerCase();
          return setSearchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
        }).map(function (faculty) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_FacultyCard_FacultyCard__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({
            faculty: faculty
          }, faculty), faculty.name, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 25
          }, _this);
        })
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

_s(Faculties, "zVy6P0+FtV/93+ndCSPGSIjidLw=");

_c = Faculties;
;
/* harmony default export */ __webpack_exports__["default"] = (Faculties);

var _c;

$RefreshReg$(_c, "Faculties");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmFjdWx0aWVzL0ZhY3VsdGllcy5qcyJdLCJuYW1lcyI6WyJGYWN1bHRpZXMiLCJmYWN1bHRpZXNBcnJheSIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImZhY3VsdGllcyIsInNldEZhY3VsdGllcyIsImZpbHRlciIsInJlY29yZCIsInRhcmdldFN0cmluZyIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsImluY2x1ZGVzIiwibWFwIiwiZmFjdWx0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBRWhCLE1BQU1DLGNBQWMsR0FBSSxDQUNwQjtBQUNJLGdCQUFZLGlDQURoQjtBQUVJLFlBQVEsd0JBRlo7QUFHSSxxQkFBaUIsVUFIckI7QUFJSSxtQkFBZSxxQkFKbkI7QUFLSSxhQUFTLHNCQUxiO0FBTUkscUJBQWlCLHlDQU5yQjtBQU9JLHNCQUFrQjtBQVB0QixHQURvQixFQVVwQjtBQUNJLGdCQUFZLGlDQURoQjtBQUVJLFlBQVEseUJBRlo7QUFHSSxxQkFBaUIsTUFIckI7QUFJSSxtQkFBZSxXQUpuQjtBQUtJLGFBQVMsc0JBTGI7QUFNSSxxQkFBaUIsaUZBTnJCO0FBT0ksc0JBQWtCO0FBUHRCLEdBVm9CLEVBbUJwQjtBQUNJLGdCQUFZLGlDQURoQjtBQUVJLFlBQVEsMEJBRlo7QUFHSSxxQkFBaUIsU0FIckI7QUFJSSxtQkFBZSxxQkFKbkI7QUFLSSxhQUFTLHNCQUxiO0FBTUkscUJBQWlCLHdGQU5yQjtBQU9JLHNCQUFrQjtBQVB0QixHQW5Cb0IsRUE0QnBCO0FBQ0ksZ0JBQVksK0JBRGhCO0FBRUksWUFBUSxzQkFGWjtBQUdJLHFCQUFpQixNQUhyQjtBQUlJLG1CQUFlLHFCQUpuQjtBQUtJLGFBQVMsc0JBTGI7QUFN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RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFHSSxxRUFBQyw0REFBRDtBQUFXLGlCQUFXLEVBQUVILFdBQXhCO0FBQXFDLG9CQUFjLEVBQUVDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUtJO0FBQUssZUFBUyxFQUFDLDRDQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLG9DQUFmO0FBQUEsa0JBRUtILGNBQWMsQ0FBQ00sTUFBZixDQUFzQixVQUFDQyxNQUFELEVBQVk7QUFDL0IsY0FBTUMsWUFBWSxHQUFHRCxNQUFNLENBQUNFLElBQVAsQ0FBWUMsV0FBWixFQUFyQjtBQUNBLGlCQUFPUCxjQUFjLENBQUNRLE1BQWYsS0FBMEIsQ0FBMUIsR0FBOEIsSUFBOUIsR0FBcUNILFlBQVksQ0FBQ0ksUUFBYixDQUFzQlYsV0FBVyxDQUFDUSxXQUFaLEVBQXRCLENBQTVDO0FBQ0gsU0FIQSxFQUdFRyxHQUhGLENBR00sVUFBQ0MsT0FBRDtBQUFBLDhCQUNILHFFQUFDLGdFQUFEO0FBQ0EsbUJBQU8sRUFBRUE7QUFEVCxhQUVzQkEsT0FGdEIsR0FFS0EsT0FBTyxDQUFDTCxJQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREc7QUFBQSxTQUhOO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXVCSDs7R0F0T1FWLFM7O0tBQUFBLFM7QUFzT1I7QUFFY0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRmFjdWx0aWVzUGFnZS4zZTg0ZjdiMjc1NDQwZDI2Nzk4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL1NlYXJjaEJhci9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IEZhY3VsdHlDYXJkIGZyb20gXCIuL0ZhY3VsdHlDYXJkL0ZhY3VsdHlDYXJkXCI7XHJcbmltcG9ydCBGYWN1bHR5SGVhZGVyIGZyb20gXCIuL0ZhY3VsdHlIZWFkZXIvRmFjdWx0eUhlYWRlclwiXHJcblxyXG5mdW5jdGlvbiBGYWN1bHRpZXMoKXtcclxuXHJcbiAgICBjb25zdCBmYWN1bHRpZXNBcnJheSA9ICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9sYWxsdVdhZGlhLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJQcm9mLiBBLiBILiBMYWxsdXdhZGlhXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIk0uIFRlY2guXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJhaGxAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJUZWxlbWF0aWNzIFxcblJGICYgTWljcm93YXZlIEVuZ2luZWVyaW5nXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJSRiAmIE1pY3Jvd2F2ZSBFbmdpbmVlcmluZyBcXG5JbWFnZSBQcm9jZXNzaW5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvVXBlbmFEYWxhbC5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuKE1ycykgVXBlbmEgRC4gRGFsYWxcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguRFwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJ1ZGRAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJEaWdpdGFsIGNvbW11bmljYXRpb25cXG5BZGhvYyBOZXR3b3Jrc1xcbldpZGViYW5kIGNvbW11bmljYXRpb25cXG5Nb2JpbGUgY29tcHV0aW5nXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJXaXJlbGVzcyBDb21tdW5pY2F0aW9uIHRlY2huaXF1ZXNcXG41RyB0ZWNobm9sb2d5XFxuV2lyZWxlc3Mgc3lzdGVtcyBcXG5PcHRpY2FsIHdpcmVsZXNzXFxuU2lnbmFsIHByb2Nlc3NpbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9OQkthbmlya2FyLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJQcm9mLiBOYXJlc2ggQi4gS2FuaXJrYXJcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiTS5UZWNoLlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwibmJrQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiQmFzaWMgb2YgRWxlY3Ryb25pY3MgRW5naW5lZXJpbmcgXFxuRWxlY3Ryb25pYyBEZXZpY2VzICYgQ2lyY3VpdHMgXFxuU29saWQgU3RhdGUgRGV2aWNlc1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiQ0RNQSBcXG5Nb2JpbGUgQ29tbXVuaWNhdGlvblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL3ByYXNoYW50LmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gUHJhc2hhbnQgSy4gU2hhaFwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJNLkUuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJwa3NAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJCYXNpY3Mgb2YgRWxlY3Ryb25pY3MgRW5naW5lZXJpbmcgXFxuRGlnaXRhbCBDaXJjdWl0cyBcXG5NaWNyb3Byb2Nlc3NvciBcXG5EaWdpdGFsIFNpZ25hbCBQcm9jZXNzaW5nXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJMTUkgQmFzZWQgSW1wcm92ZWQgU3RhYmlsaXR5IENyaXRlcmlhIChEU1AgYmFzZWQpXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvQWJoaXNoZWsuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBBYmhpc2hlayBBY2hhcnlhXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoRCAoTWljcm9lbGVjdHJvbmljcyAmIFZMU0kpLCBJSVQgUm9vcmtlZVwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiYWJoaXNoZWtAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJFbGVjdHJvbmljIERldmljZXNcXG5FbGVjdHJvbmljIENpcmN1aXRzXFxuTGluZWFyIEludGVncmF0ZWQgQ2lyY3VpdHNcXG5WTFNJIERlc2lnblwiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiUGh5c2ljcyAmIE1vZGVsaW5nIG9mIE5hbm8tU2NhbGUgRGV2aWNlc1xcbkRldmljZS1DaXJjdWl0IEludGVyYWN0aW9ucyBpbiBOYW5vLVNjYWxlIFRyYW5zaXN0b3JzXFxuV2lkZSBCYW5kZ2FwIFNlbWljb25kdWN0b3JzIGFuZCBcXG4yRCBNYXRlcmlhbHMgZm9yIERldmljZXMgJiBDaXJjdWl0c1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL0ppZ25lc2guanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBKaWduZXNoIE4uIFNhcnZhaXlhXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLiBELlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiam5zQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiRWxlY3Ryb25pYyBTeXN0ZW0gRGVzaWduXFxuRGlnaXRhbCBJbWFnZSBQcm9jZXNzaW5nXFxuIEluZm9ybWF0aW9uIFRoZW9yeSAmIENvZGluZ1xcbkFuYWxvZyBJbnRlZ3JhdGVkIENpcmN1aXRzXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJJbWFnZSBQcm9jZXNzaW5nXFxuTWVkaWNhbCBJbnN0cnVtZW50YXRpb25cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9kYXJqaVNpci5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIEFuYW5kIEQuIERhcmppXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLkQuIChNaWNyb2VsZWN0cm9uaWNzKSwgSUlUIEJvbWJheVwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiYWRkQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiVkxTSSBEZXNpZ25cXG5FbGVjdHJvbmljcyBJbnN0cnVtZW50YXRpb25cXG5EaWdpdGFsIEludGVncmF0ZWQgQ2lyY3VpdHNcXG5EaWdpdGFsIFZMU0kgRGVzaWduIChQRylcXG5WTFNJIFN5c3RlbSBEZXNpZ24gKCBQRy1FbGVjdGl2ZSlcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIlZMU0kgRGVzaWduXFxuRlBHQS1iYXNlZCBzeXN0ZW1zIGRlc2lnblxcbkRldmljZSBtb2RlbGxpbmdcXG5WTFNJIERTUCBhcmNoaXRlY3R1cmVcXG5FbWJlZGRlZCBTeXN0ZW0gRGVzaWduXFxuRWxlY3Ryb25pY3MgSW5zdHJ1bWVudGF0aW9uXFxuU2lnbmFsIFByb2Nlc3NpbmdcXGJCaW8tbWVkaWNhbCBTaWduYWwvaW1hZ2UgcHJvY2Vzc2luZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL3BpeXVzaFBhdGVsLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gUElZVVNIIE4uIFBBVEVMXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLiBELlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwicG5wQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiT3B0aWNhbCBDb21tdW5pY2F0aW9uIFN5c3RlbXNcXG5PcHRpY2FsIE5ldHdvcmtzXFxuQW5hbG9nIGFuZCBEaWdpdGFsIENvbW11bmljYXRpb24gU3lzdGVtc1xcblNlbnNvcnMgYW5kIFRyYW5zZHVjZXJzXFxuRWxlY3Ryb25pYyBEZXZpY2VzIGFuZCBDaXJjdWl0c1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiT3B0aWNhbCBDb21tdW5pY2F0aW9ucyBhbmQgTmV0d29ya3NcXG5QaG90b25pY3MgRGV2aWNlcyAmIFNlbnNvcnNcXG5NaWNyb3dhdmUgQW50ZW5uYSBhbmQgV2F2ZWd1ZGVzXFxuTWV0YW1hdGVyaWFsIGJhc2VkIFNlbnNvcnNcXG5PcHRpY2FsLCBSRiwgTWV0YW1hdGVyaWFsIGJhc2VkIFNlbnNvcnMgJiBCaW9zZW5zb3JzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvenViZXIuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBadWJlciBNLiBQYXRlbFwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaC4gRC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInptcEBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIkRpZ2l0YWwgTG9naWMgZGVzaWduXFxuRW1iZWRkZWQgU3lzdGVtc1xcbk1pY3JvZWxlY3Ryb25pY3MgYW5kIFZMU0lcXG5NaWNyb2NvbnRyb2xsZXJzIGFuZCBJbnRlcmZhY2luZ1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiSERML0ZQR0EgYmFzZWQgZGVzaWduXFxuVkxTSSBEZXNpZ24gb2YgUklTQyBNaWNyb3Byb2Nlc3NvcnNcXG5GUEdBL0FTSUMgRGVzaWduIG9mIHdpcmVsZXNzIHRyYW5zY2VpdmVyIGhhcmR3YXJlXFxuRW1iZWRkZWQgU3lzdGVtc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL1BpbmFsLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gUGluYWxrdW1hciBKLiBFbmdpbmVlclwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaC4gRC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInBqZUBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIkFkdmFuY2VkIFByb2Nlc3NvciBBcmNoaXRlY3R1cmVcXG5EU1AgU3RydWN0dXJlcyBmb3IgVkxTSVxcbkVtYmVkZGVkIFN5c3RlbXNcXG5SZWFsIFRpbWUgU3lzdGVtc1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiRlBHQSBiYXNlZCBzeXN0ZW0gZGVzaWduXFxuVkxTSSBhcmNoaXRlY3R1cmUgZm9yIHJlYWwtdGltZSBzaWduYWwvaW1hZ2UgcHJvY2Vzc2luZ1xcbkhpZ2ggcGVyZm9ybWFuY2UgZW1iZWRkZWQgY29tcHV0aW5nXFxuRW1iZWRkZWQgYW5kIHJlYWwtdGltZSBzeXN0ZW1zXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvUmFzaWthLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gKE1ycy4pIFJhc2lrYSBOLiBEaGF2c2VcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguIEQuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJyc2tAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJWTFNJIERlc2lnblxcblZMU0kgVGVjaG5vbG9neVxcbkVsZWN0cm9uaWMgQ2lyY3VpdHNcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIlZMU0kgRGVzaWduXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvYWJoaWxhc2guanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBBYmhpbGFzaCBTLiBNYW5kbG9pXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLiBELlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiYXNtQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiT3B0aWNhbCBOZXR3b3JrcyBBZHZhbmNlIE9wdGljYWwgXFxuQ29tbXVuaWNhdGlvbiBTeXN0ZW1zIFxcbkJhc2ljcyBvZiBFbGVjdHJvbmljcyBFbmdpbmVlcmluZyBcXG5EYXRhIENvbW11bmljYXRpb24gYW5kIE5ldHdvcmtzIFxcbkxpbmVhciBFbGVjdHJvbmljc1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiRmlicmUgT3B0aWNzIE9wdGljYWwgQ29tbXVuaWNhdGlvbnMgXFxuT3B0aWNhbCBOZXR3b3JrcywgRnJlZSBTcGFjZSBPcHRpY3MgXFxuUGhvdG9uaWMgRGV2aWNlcywgSW50ZWdyYXRlZCBPcHRpY3NcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9qaWdpc2hhLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gKE1zLikgSmlnaXNoYSBOLiBQYXRlbFwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQaC4gRC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImpucGF0ZWxAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJJbmZvcm1hdGlvbiBUaGVvcnkgYW5kIENvZGluZyBcXG5NdWx0aW1lZGlhIENvbW11bmljYXRpb24gXFxuRGlnaXRhbCBMb2dpYyBEZXNpZ24gXFxuSW1hZ2UgcHJvY2Vzc2luZ1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiV2lyZWxlc3MgQ29tbXVuaWNhdGlvbiBcXG5JbWFnZSAvIFZpZGVvIENvZGluZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL1NoaWxwaUd1cHRhLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gKE1zLikgU2hpbHBpIEd1cHRhXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLiBELlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwic2d1cHRhQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiRGlnaXRhbCBzYXRlbGxpdGUgQ29tbXVuaWNhdGlvbiBcXG5EaWdpdGFsIEVsZWN0cm9uaWNzIFxcbkVsZWN0cm9uaWNzIERldmljZXMgYW5kIENpcmN1aXRzIFxcbk1JTU8gVGVjaG5vbG9neSBcXG5BbmFsb2cgYW5kIERpZ2l0YWwgQ29tbXVuaWNhdGlvblwiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiNUcgVGVjaG5vbG9neSBcXG5NYXNzaXZlIE1JTU8gRGV0ZWN0aW9uIFRlY2huaXF1ZXMgXFxuQW50ZW5uYSBEZXNpZ24gZm9yIDVHIEFwcGxpY2F0aW9ucyBcXG5XYXZlZm9ybSBEZXNpZ25pbmcgZm9yIE1JTU8gUmFkYXIgXFxuRnJlZSBTcGFjZSBPcHRpY3MgXFxuRmliZXIgT3B0aWMgU2Vuc29yc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL0dvbGFrLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJQcm9mLiBHb2xhayBTYW50cmFcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiTS5FLlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwicy5nb2xha0BlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIkVNIFRoZW9yeSBcXG5BbmFsb2cgSW50ZWdyYXRlZCBDaXJjdWl0IFxcbk1pY3Jvd2F2ZSBJbnRlZ3JhdGVkIENpcmN1aXQsTWljcm93YXZlIFxcbkVuZ2luZWVyaW5nXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJQYXRjaCBBbnRlbm5hTWljcm8tc3RyaXAgZmlsdGVyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvU3dldGEuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiAoTXJzLikgU2h3ZXRhIE4uIFNoYWhcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguIEQuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJzbnNoYWhAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJCYXNpY3Mgb2YgQ29tbXVuaWNhdGlvbiBTeXN0ZW0gXFxuTW9iaWxlIENvbW11bmljYXRpb24gXFxuV2lyZWxlc3MgQ29tbXVuaWNhdGlvbiBcXG5Nb2JpbGUgQ29tcHV0aW5nXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJXaXJlbGVzcyBDb21tdW5pY2F0aW9uIFxcbk1vYmlsZSBDb21tdW5pY2F0aW9uIGFuZCBzdGFuZGFyZHMgXFxuRGlnaXRhbCBWaWRlbyBCcm9hZGNhc3QgYW5kIHN0YW5kYXJkcyBcXG5Db2duaXRpdmUgUmFkaW8gXFxuTmF2SUMvSVJOU1NcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9tZWh1bC5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJvZi4gTWVodWwgQy4gUGF0ZWxcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiTS5FLlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwibWNwQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiSW5mb3JtYXRpb24gVGhlb3J5ICYgQ29kaW5nIFxcbkFwcGxpY2F0aW9uIG9mIERTUCBcXG5BbmFsb2cgJiBEaWdpdGFsIENvbW11bmljYXRpb24gXFxuU2F0ZWxsaXRlIENvbW11bmljYXRpb25cIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIkRpZ2l0YWwgU2lnbmFsIFByb2Nlc3NpbmcgdXNpbmcgVkxTSVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL2tpc2hvcmUuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBLaXNob3IgUC4gVXBsYVwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjogXCJQb3N0IERvY3RvcmFsIEZlbGxvdy1FUkNJTSAoTlROVSwgTm9yd2F5KSxQaC5ELiAoREEtSUlDVCwgR2FuZGhpbmFnYXIpXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJrcHVAZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJTaWduYWxzICYgU3lzdGVtcyBcXG5EaWdpdGFsIFNpZ25hbCBQcm9jZXNzaW5nIFxcbkVsZWN0cm9uaWNzIERldmljZXMgJiBDaXJjdWl0cyBcXG5Db21tdW5pY2F0aW9uIFN5c3RlbXNcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIk1hY2hpbmUvRGVlcCBMZWFybmluZyBcXG5PYmplY3QgZGV0ZWN0aW9uL3JlY29nbml0aW9uLCBcXG5NdWx0aS1zcGVjdHJhbCBhbmQgaHlwZXJzcGVjdHJhbCBpbWFnZSBwcm9jZXNzaW5nIFxcbkltYWdlIFJlc3RvcmF0aW9uIFxcbkJpby1tZWRpY2FsIEltYWdlIEZ1c2lvbiBcXG5JbmZvcm1hdGlvbiBGdXNpb24gXFxuTXVsdGktUmVzb2x1dGlvbiBJbWFnZSBGdXNpb24vUGFuLVNoYXJwZW5pbmcgXFxuSW1hZ2UgU3VwZXIgLSBSZXNvbHV0aW9uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOiBcImltYWdlcy9mYWN1bHRpZXMvU3VtYW5EZWIucG5nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRyLiBTdW1hbiBEZWJcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguRC4gKElJVCBHdXdhaGF0aSlcIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInN1bWFuZGViQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiQWR2YW5jZSBEaWdpdGFsIFNpZ25hbCBQcm9jZXNzaW5nIFxcbkRpZ2l0YWwgU2lnbmFsIFByb2Nlc3NpbmcsIFxcbkFkLUhvYyBOZXR3b3Jrc1wiLFxyXG4gICAgICAgICAgICBcImFyZWFPZlJlc2VhcmNoXCI6IFwiU2lnbmFsIFByb2Nlc3NpbmcsU3BlZWNoIFxcblByb2Nlc3NpbmcsU3BlZWNoIGJhc2VkIEhlYWx0aCBBbmFseXNpcyBcXG5FbW90aW9uIEFuYWx5c2lzIGJhc2VkIG9uIFNwZWVjaCBhbmQgXFxuSW1hZ2UsU3BlZWNoIFBhdGhvbG9neSBEZXRlY3Rpb24gXFxuVm9pY2UgQ29udmVyc2lvbi9TcGVha2VyIElkZW50aXR5IFxcbkNvbnZlcnNpb24sUGF0dGVybiBSZWNvZ25pdGlvblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjogXCJpbWFnZXMvZmFjdWx0aWVzL2RlZXBha0pvc2hpLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEci4gRGVlcGFrIEpvc2hpXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOiBcIlBoLkQuIChJSVQgR3V3YWhhdGkpXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJkLmpvc2hpQGVjZWQuc3ZuaXQuYWMuaW5cIixcclxuICAgICAgICAgICAgXCJ0ZWFjaGluZ0ZpZWxkXCI6IFwiVGVzdGluZyBhbmQgVmVyaWZpY2F0aW9uIG9mIFZMU0kgQ2lyY3VpdHNcIixcclxuICAgICAgICAgICAgXCJhcmVhT2ZSZXNlYXJjaFwiOiBcIk1ldGFoZXVyaXN0aWNzLCBBbmFsb2cgQ2lyY3VpdHM6IERlc2lnbiBhbmQgT3B0aW1pemF0aW9uIFxcbkNvbXB1dGF0aW9uYWwgSW50ZWxsaWdlbmNlLCBDQUQgZm9yIFZMU0lcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9rYW1hbC5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIEthbWFsIENhcHRhaW5cIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguRC4gKERBSUlDVCwgR2FuZGhpbmFnYXIpXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJrYW1hbGNhcHRhaW5AZWNlZC5zdm5pdC5hYy5pblwiLFxyXG4gICAgICAgICAgICBcInRlYWNoaW5nRmllbGRcIjogXCJQcm9iYWJpbGl0eSBhbmQgUmFuZG9tIFByb2Nlc3NlcyBcXG5TaWduYWxzIGFuZCBTeXN0ZW1zIFxcbkRpZ2l0YWwgU2lnbmFsIFByb2Nlc3NpbmcgXFxuRWxlY3Ryb25pYyBTeXN0ZW0gRGVzaWduXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJDb2duaXRpdmUgUmFkaW8sIFNpZ25hbCBQcm9jZXNzaW5nIFxcblN0YXRpc3RpY2FsIFNpZ25hbCBQcm9jZXNzaW5nIFxcbldpcmVsZXNzIENvbW11bmljYXRpb24sIE1hY2hpbmUgTGVhcm5pbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6IFwiaW1hZ2VzL2ZhY3VsdGllcy9raXJ0aS5wbmdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHIuIEtpcnRpIEluYW1kYXJcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6IFwiUGguRC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOiBcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImtraUBlY2VkLnN2bml0LmFjLmluXCIsXHJcbiAgICAgICAgICAgIFwidGVhY2hpbmdGaWVsZFwiOiBcIkVsZWN0cm9tYWduZXRpY3MgYW5kIHdhdmUgUHJvcGFnYXRpb24gVGhlb3J5IFxcbkFudGVubmEgVGhlb3J5LCBSRiAmIE1pY3Jvd2F2ZSBUaGVvcnkgXFxuU2F0ZWxsaXRlIENvbW11bmljYXRpb24sIFJBREFSIGFuZCBpdHMgQXBwbGljYXRpb24gXFxuQW5hbG9nICYgZGlnaXRhbCBDb21tdW5pY2F0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiYXJlYU9mUmVzZWFyY2hcIjogXCJNaWNyb3N0cmlwIFBhdGNoIEFudGVubmEgZGVzaWduIHVzaW5nIE1ldGFtYXRlcmlhbHMgXFxuV2VhcmFibGUgQW50ZW5uYXNcIlxyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcblxyXG4gICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtmYWN1bHRpZXMsIHNldEZhY3VsdGllc10gPSB1c2VTdGF0ZShmYWN1bHRpZXNBcnJheSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGYWN1bHR5SGVhZGVyLz5cclxuXHJcbiAgICAgICAgICAgIDxTZWFyY2hCYXIgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9Lz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLWhpZGUgb3ZlcmZsb3cteS1zY3JvbGwgaC00NTBweCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTMgc206Z3JpZC1jb2xzLTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2ZhY3VsdGllc0FycmF5LmZpbHRlcigocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0cmluZyA9IHJlY29yZC5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRTZWFyY2hRdWVyeS5sZW5ndGggPT09IDAgPyB0cnVlIDogdGFyZ2V0U3RyaW5nLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLm1hcCgoZmFjdWx0eSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFjdWx0eUNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY3VsdHk9e2ZhY3VsdHl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZhY3VsdHkubmFtZX17Li4uZmFjdWx0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjdWx0aWVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9