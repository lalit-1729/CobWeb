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
/* harmony import */ var _ResearchHeader_ResearchHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ResearchHeader/ResearchHeader */ "./src/Components/Researches/ResearchHeader/ResearchHeader.js");



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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("Research 2017-18"),
      title = _useState2[0],
      setTitle = _useState2[1];

  var changesHandler = function changesHandler(event) {
    if (event.target.value === "1") {
      setData(_Data_2017_18Data__WEBPACK_IMPORTED_MODULE_4__["default"]);
      setTitle("Research 2017-18");
    } else if (event.target.value === "2") {
      setData(_Data_2018_19Data__WEBPACK_IMPORTED_MODULE_5__["default"]);
      setTitle("Research 2018-19");
    } else {
      setData(_Data_2019_20Data__WEBPACK_IMPORTED_MODULE_6__["default"]);
      setTitle("Research 2019-20");
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ResearchHeader_ResearchHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "md:grid md:grid-cols-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        className: "md:grid-col-1 inline-flex items-center p-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "radio",
          name: "radio1",
          className: "form-radio h-4 w-4",
          value: "1",
          onChange: function onChange(e) {
            return changesHandler(e);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        className: "md:grid-col-1 inline-flex items-center p-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "radio",
          name: "radio1",
          className: "form-radio h-4 w-4",
          value: "2",
          onChange: function onChange(e) {
            return changesHandler(e);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        className: "md:grid-col-1 inline-flex items-center p-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "radio",
          name: "radio1",
          className: "form-radio h-4 w-4",
          value: "3",
          onChange: function onChange(e) {
            return changesHandler(e);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      style: divStyler,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("table", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tr", {
          className: "bg-gray-400 mb-3w rounded ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
            className: "p-1 w-12",
            children: "SrNo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
            className: "p-1",
            children: "ProjectTitle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
            className: "p-1",
            children: "RollNo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
            className: "p-1",
            children: "StudentName"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "scroll-hide overflow-y-scroll",
          children: data.map(function (research) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Research_Research__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
              research: research
            }, research), research.SrNo, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this)]
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

_s(Researches, "OR6/78zdrfMkZizqYIgMxS7QeyM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVzZWFyY2hlcy9SZXNlYXJjaGVzLmpzIl0sIm5hbWVzIjpbIlJlc2VhcmNoZXMiLCJkaXZTdHlsZXIiLCJoZWlnaHQiLCJ1c2VTdGF0ZSIsIkRhdGEyMDE3XzE4IiwiZGF0YSIsInNldERhdGEiLCJ0aXRsZSIsInNldFRpdGxlIiwiY2hhbmdlc0hhbmRsZXIiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiRGF0YTIwMThfMTkiLCJEYXRhMjAxOV8yMCIsImUiLCJtYXAiLCJyZXNlYXJjaCIsIlNyTm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxHQUFxQjtBQUFBOztBQUFBOztBQUVqQixNQUFNQyxTQUFTLEdBQUc7QUFDZEMsVUFBTSxFQUFDO0FBRE8sR0FBbEI7O0FBRmlCLGtCQU1PQyxzREFBUSxDQUFDQyx5REFBRCxDQU5mO0FBQUEsTUFNVkMsSUFOVTtBQUFBLE1BTUpDLE9BTkk7O0FBQUEsbUJBT1NILHNEQUFRLENBQUMsa0JBQUQsQ0FQakI7QUFBQSxNQU9WSSxLQVBVO0FBQUEsTUFPSEMsUUFQRzs7QUFTakIsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFDOUIsUUFBR0EsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWIsS0FBdUIsR0FBMUIsRUFBOEI7QUFDMUJOLGFBQU8sQ0FBQ0YseURBQUQsQ0FBUDtBQUNBSSxjQUFRLENBQUMsa0JBQUQsQ0FBUjtBQUNILEtBSEQsTUFJSyxJQUFHRSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBYixLQUF1QixHQUExQixFQUE4QjtBQUMvQk4sYUFBTyxDQUFDTyx5REFBRCxDQUFQO0FBQ0FMLGNBQVEsQ0FBQyxrQkFBRCxDQUFSO0FBQ0gsS0FISSxNQUlEO0FBQ0FGLGFBQU8sQ0FBQ1Es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QUE7QUFBQSxnQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMENIOztHQWxFUWxCLFU7O0tBQUFBLFU7QUFrRVI7QUFFY0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvUmVzZWFyY2hQYWdlLmE5MDY1ZWY2OTI1YTE1YTQ5OGFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZXNlYXJjaCBmcm9tIFwiLi9SZXNlYXJjaC9SZXNlYXJjaFwiO1xyXG5pbXBvcnQgRGF0YTIwMTdfMTggZnJvbSBcIi4vRGF0YS8yMDE3XzE4RGF0YVwiO1xyXG5pbXBvcnQgRGF0YTIwMThfMTkgZnJvbSBcIi4vRGF0YS8yMDE4XzE5RGF0YVwiO1xyXG5pbXBvcnQgRGF0YTIwMTlfMjAgZnJvbSBcIi4vRGF0YS8yMDE5XzIwRGF0YVwiO1xyXG5pbXBvcnQgUmVzZWFyY2hIZWFkZXIgZnJvbSBcIi4vUmVzZWFyY2hIZWFkZXIvUmVzZWFyY2hIZWFkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFJlc2VhcmNoZXMoKXtcclxuXHJcbiAgICBjb25zdCBkaXZTdHlsZXIgPSB7XHJcbiAgICAgICAgaGVpZ2h0OjYwMFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKERhdGEyMDE3XzE4KTtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJSZXNlYXJjaCAyMDE3LTE4XCIpXHJcblxyXG4gICAgY29uc3QgY2hhbmdlc0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUgPT09IFwiMVwiKXtcclxuICAgICAgICAgICAgc2V0RGF0YShEYXRhMjAxN18xOCk7XHJcbiAgICAgICAgICAgIHNldFRpdGxlKFwiUmVzZWFyY2ggMjAxNy0xOFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihldmVudC50YXJnZXQudmFsdWUgPT09IFwiMlwiKXtcclxuICAgICAgICAgICAgc2V0RGF0YShEYXRhMjAxOF8xOSk7XHJcbiAgICAgICAgICAgIHNldFRpdGxlKFwiUmVzZWFyY2ggMjAxOC0xOVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0RGF0YShEYXRhMjAxOV8yMCk7XHJcbiAgICAgICAgICAgIHNldFRpdGxlKFwiUmVzZWFyY2ggMjAxOS0yMFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuXHJcbiAgICAgICAgICAgIDxSZXNlYXJjaEhlYWRlciB0aXRsZT17dGl0bGV9Lz5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTNcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZDpncmlkLWNvbC0xIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvMVwiIGNsYXNzTmFtZT1cImZvcm0tcmFkaW8gaC00IHctNFwiIHZhbHVlPVwiMVwiIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlc0hhbmRsZXIoZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj4mbmJzcDtQcm9qZWN0cyBmcm9tIDIwMTctMTg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1kOmdyaWQtY29sLTEgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicmFkaW8xXCIgY2xhc3NOYW1lPVwiZm9ybS1yYWRpbyBoLTQgdy00XCIgdmFsdWU9XCIyXCIgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VzSGFuZGxlcihlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPiZuYnNwO1Byb2plY3RzIGZyb20gMjAxOC0xOTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWQ6Z3JpZC1jb2wtMSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpbzFcIiBjbGFzc05hbWU9XCJmb3JtLXJhZGlvIGgtNCB3LTRcIiB2YWx1ZT1cIjNcIiBvbkNoYW5nZT17KGUpID0+IGNoYW5nZXNIYW5kbGVyKGUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+Jm5ic3A7UHJvamVjdHMgZnJvbSAyMDE5LTIwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtkaXZTdHlsZXJ9PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlID5cclxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctZ3JheS00MDAgbWItM3cgcm91bmRlZCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMSB3LTEyXCI+U3JObzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTFcIj5Qcm9qZWN0VGl0bGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0xXCI+Um9sbE5vPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMVwiPlN0dWRlbnROYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMVwiPlByb2plY3RHdWlkZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbC1oaWRlIG92ZXJmbG93LXktc2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgocmVzZWFyY2gpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZWFyY2g9e3Jlc2VhcmNofSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cmVzZWFyY2guU3JOb317Li4ucmVzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VhcmNoZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==