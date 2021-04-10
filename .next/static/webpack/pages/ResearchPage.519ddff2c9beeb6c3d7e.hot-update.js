webpackHotUpdate_N_E("pages/ResearchPage",{

/***/ "./src/Components/Researches/Researches.js":
/*!*************************************************!*\
  !*** ./src/Components/Researches/Researches.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Croma_Desktop_git_repo_new_repo_CobWeb_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Research_Research__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Research/Research */ "./src/Components/Researches/Research/Research.js");
/* harmony import */ var _Data_2017_18Data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Data/2017_18Data */ "./src/Components/Researches/Data/2017_18Data.js");
/* harmony import */ var _Data_2018_19Data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Data/2018_19Data */ "./src/Components/Researches/Data/2018_19Data.js");
/* harmony import */ var _Data_2019_20Data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Data/2019_20Data */ "./src/Components/Researches/Data/2019_20Data.js");



var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Researches\\Researches.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Croma_Desktop_git_repo_new_repo_CobWeb_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function Researches() {
  _s();

  var _this = this;

  var divStyler = {
    height: 600
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_Data_2017_18Data__WEBPACK_IMPORTED_MODULE_4__["default"]),
      data = _useState[0],
      setData = _useState[1];

  var changesHandler = function changesHandler(event) {
    if (event.target.value === "1") {
      setData(_Data_2017_18Data__WEBPACK_IMPORTED_MODULE_4__["default"]);
    } else if (event.target.value === "2") {
      setData(_Data_2018_19Data__WEBPACK_IMPORTED_MODULE_5__["default"]);
    } else {
      setData(_Data_2019_20Data__WEBPACK_IMPORTED_MODULE_6__["default"]);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "md:grid md:grid-cols-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        className: "md:grid-col-1 inline-flex items-center p-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "radio",
          className: "form-radio h-4 w-4",
          value: "1",
          onChange: function onChange(e) {
            return changesHandler(e);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: "",
          children: "\xA0Projects from 2017-18"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        className: "md:grid-col-1 inline-flex items-center p-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "radio",
          className: "form-radio h-4 w-4",
          value: "2",
          onChange: function onChange(e) {
            return changesHandler(e);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: "",
          children: "\xA0Projects from 2018-19"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        className: "md:grid-col-1 inline-flex items-center p-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "radio",
          className: "form-radio h-4 w-4",
          value: "3",
          onChange: function onChange(e) {
            return changesHandler(e);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: "",
          children: "\xA0Projects from 2019-20"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "scroll-hide overflow-y-scroll",
      style: divStyler,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("table", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tr", {
          className: "bg-gray-400 mb-3w rounded ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
            className: "p-1 w-12",
            children: "SrNo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
            className: "p-1",
            children: "ProjectTitle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
            className: "p-1",
            children: "RollNo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
            className: "p-1",
            children: "StudentName"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
            className: "p-1",
            children: "ProjectGuide"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), Data.map(function (research) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Research_Research__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
            research: research
          }, research), research.SrNo, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

_s(Researches, "16X6hfQbKjEshq+XGRZeqJts0lI=");

_c = Researches;
;
/* harmony default export */ __webpack_exports__["default"] = (Researches);

var _c;

$RefreshReg$(_c, "Researches");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVzZWFyY2hlcy9SZXNlYXJjaGVzLmpzIl0sIm5hbWVzIjpbIlJlc2VhcmNoZXMiLCJkaXZTdHlsZXIiLCJoZWlnaHQiLCJ1c2VTdGF0ZSIsIkRhdGEyMDE3XzE4IiwiZGF0YSIsInNldERhdGEiLCJjaGFuZ2VzSGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJEYXRhMjAxOF8xOSIsIkRhdGEyMDE5XzIwIiwiZSIsIkRhdGEiLCJtYXAiLCJyZXNlYXJjaCIsIlNyTm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxHQUFxQjtBQUFBOztBQUFBOztBQUVqQixNQUFNQyxTQUFTLEdBQUc7QUFDZEMsVUFBTSxFQUFDO0FBRE8sR0FBbEI7O0FBRmlCLGtCQU1PQyxzREFBUSxDQUFDQyx5REFBRCxDQU5mO0FBQUEsTUFNVkMsSUFOVTtBQUFBLE1BTUpDLE9BTkk7O0FBUWpCLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCLFFBQUdBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFiLEtBQXVCLEdBQTFCLEVBQThCO0FBQzFCSixhQUFPLENBQUNGLHlEQUFELENBQVA7QUFDSCxLQUZELE1BR0ssSUFBR0ksS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWIsS0FBdUIsR0FBMUIsRUFBOEI7QUFDL0JKLGFBQU8sQ0FBQ0sseURBQUQsQ0FBUDtBQUNILEtBRkksTUFHRDtBQUNBTCxhQUFPLENBQUNNLHlEQUFELENBQVA7QUFDSDtBQUVKLEdBWEQ7O0FBYUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLHdCQUFmO0FBQUEsOEJBQ0k7QUFBTyxpQkFBUyxFQUFDLDRDQUFqQjtBQUFBLGdDQUNJO0FBQU8sY0FBSSxFQUFDLE9BQVo7QUFBb0IsbUJBQVMsRUFBQyxvQkFBOUI7QUFBbUQsZUFBSyxFQUFDLEdBQXpEO0FBQTZELGtCQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxtQkFBT04sY0FBYyxDQUFDTSxDQUFELENBQXJCO0FBQUE7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQU0sbUJBQVMsRUFBQyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUtJO0FBQU8saUJBQVMsRUFBQyw0Q0FBakI7QUFBQSxnQ0FDSTtBQUFPLGNBQUksRUFBQyxPQUFaO0FBQW9CLG1CQUFTLEVBQUMsb0JBQTlCO0FBQW1ELGVBQUssRUFBQyxHQUF6RDtBQUE2RCxrQkFBUSxFQUFFLGtCQUFDQSxDQUFEO0FBQUEsbUJBQU9OLGNBQWMsQ0FBQ00sQ0FBRCxDQUFyQjtBQUFBO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFNLG1CQUFTLEVBQUMsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFTSTtBQUFPLGlCQUFTLEVBQUMsNENBQWpCO0FBQUEsZ0NBQ0k7QUFBTyxjQUFJLEVBQUMsT0FBWjtBQUFvQixtQkFBUyxFQUFDLG9CQUE5QjtBQUFtRCxlQUFLLEVBQUMsR0FBekQ7QUFBNkQsa0JBQVEsRUFBRSxrQkFBQ0EsQ0FBRDtBQUFBLG1CQUFPTixjQUFjLENBQUNNLENBQUQsQ0FBckI7QUFBQTtBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBTSxtQkFBUyxFQUFDLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBZ0JJO0FBQUssZUFBUyxFQUFDLCtCQUFmO0FBQStDLFdBQUssRUFBRVosU0FBdEQ7QUFBQSw2QkFDSTtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBQyw0QkFBZDtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBSSxxQkFBUyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSTtBQUFJLHFCQUFTLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixlQUlJO0FBQUkscUJBQVMsRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLGVBS0k7QUFBSSxxQkFBUyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBUUthLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUNDLFFBQUQ7QUFBQSw4QkFDTixxRUFBQywwREFBRDtBQUNBLG9CQUFRLEVBQUVBO0FBRFYsYUFFdUJBLFFBRnZCLEdBRUtBLFFBQVEsQ0FBQ0MsSUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURNO0FBQUEsU0FBVCxDQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFvQ0g7O0dBekRRakIsVTs7S0FBQUEsVTtBQXlEUjtBQUVjQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9SZXNlYXJjaFBhZ2UuNTE5ZGRmZjJjOWJlZWI2YzNkN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlc2VhcmNoIGZyb20gXCIuL1Jlc2VhcmNoL1Jlc2VhcmNoXCI7XHJcbmltcG9ydCBEYXRhMjAxN18xOCBmcm9tIFwiLi9EYXRhLzIwMTdfMThEYXRhXCI7XHJcbmltcG9ydCBEYXRhMjAxOF8xOSBmcm9tIFwiLi9EYXRhLzIwMThfMTlEYXRhXCI7XHJcbmltcG9ydCBEYXRhMjAxOV8yMCBmcm9tIFwiLi9EYXRhLzIwMTlfMjBEYXRhXCI7XHJcblxyXG5mdW5jdGlvbiBSZXNlYXJjaGVzKCl7XHJcblxyXG4gICAgY29uc3QgZGl2U3R5bGVyID0ge1xyXG4gICAgICAgIGhlaWdodDo2MDBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShEYXRhMjAxN18xOCk7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlc0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUgPT09IFwiMVwiKXtcclxuICAgICAgICAgICAgc2V0RGF0YShEYXRhMjAxN18xOCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcIjJcIil7XHJcbiAgICAgICAgICAgIHNldERhdGEoRGF0YTIwMThfMTkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXREYXRhKERhdGEyMDE5XzIwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Z3JpZCBtZDpncmlkLWNvbHMtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1kOmdyaWQtY29sLTEgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzc05hbWU9XCJmb3JtLXJhZGlvIGgtNCB3LTRcIiB2YWx1ZT1cIjFcIiBvbkNoYW5nZT17KGUpID0+IGNoYW5nZXNIYW5kbGVyKGUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+Jm5ic3A7UHJvamVjdHMgZnJvbSAyMDE3LTE4PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZDpncmlkLWNvbC0xIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3NOYW1lPVwiZm9ybS1yYWRpbyBoLTQgdy00XCIgdmFsdWU9XCIyXCIgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VzSGFuZGxlcihlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPiZuYnNwO1Byb2plY3RzIGZyb20gMjAxOC0xOTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWQ6Z3JpZC1jb2wtMSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzTmFtZT1cImZvcm0tcmFkaW8gaC00IHctNFwiIHZhbHVlPVwiM1wiIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlc0hhbmRsZXIoZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj4mbmJzcDtQcm9qZWN0cyBmcm9tIDIwMTktMjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLWhpZGUgb3ZlcmZsb3cteS1zY3JvbGxcIiBzdHlsZT17ZGl2U3R5bGVyfT5cclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctZ3JheS00MDAgbWItM3cgcm91bmRlZCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMSB3LTEyXCI+U3JObzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTFcIj5Qcm9qZWN0VGl0bGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0xXCI+Um9sbE5vPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMVwiPlN0dWRlbnROYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMVwiPlByb2plY3RHdWlkZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICB7RGF0YS5tYXAoKHJlc2VhcmNoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNlYXJjaD17cmVzZWFyY2h9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Jlc2VhcmNoLlNyTm99ey4uLnJlc2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZWFyY2hlczsiXSwic291cmNlUm9vdCI6IiJ9