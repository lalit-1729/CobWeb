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
          name: "radio1",
          className: "form-radio h-4 w-4",
          value: "1",
          onChange: function onChange(e) {
            return changesHandler(e);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: "",
          children: "\xA0Projects from 2017-18"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
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
          lineNumber: 37,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: "",
          children: "\xA0Projects from 2018-19"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
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
          lineNumber: 41,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: "",
          children: "\xA0Projects from 2019-20"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
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
            lineNumber: 49,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
            className: "p-1",
            children: "ProjectTitle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
            className: "p-1",
            children: "RollNo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
            className: "p-1",
            children: "StudentName"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
            className: "p-1",
            children: "ProjectGuide"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), data.map(function (research) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Research_Research__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
            research: research
          }, research), research.SrNo, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVzZWFyY2hlcy9SZXNlYXJjaGVzLmpzIl0sIm5hbWVzIjpbIlJlc2VhcmNoZXMiLCJkaXZTdHlsZXIiLCJoZWlnaHQiLCJ1c2VTdGF0ZSIsIkRhdGEyMDE3XzE4IiwiZGF0YSIsInNldERhdGEiLCJjaGFuZ2VzSGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJEYXRhMjAxOF8xOSIsIkRhdGEyMDE5XzIwIiwiZSIsIm1hcCIsInJlc2VhcmNoIiwiU3JObyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQXFCO0FBQUE7O0FBQUE7O0FBRWpCLE1BQU1DLFNBQVMsR0FBRztBQUNkQyxVQUFNLEVBQUM7QUFETyxHQUFsQjs7QUFGaUIsa0JBTU9DLHNEQUFRLENBQUNDLHlEQUFELENBTmY7QUFBQSxNQU1WQyxJQU5VO0FBQUEsTUFNSkMsT0FOSTs7QUFRakIsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFFOUIsUUFBR0EsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWIsS0FBdUIsR0FBMUIsRUFBOEI7QUFDMUJKLGFBQU8sQ0FBQ0YseURBQUQsQ0FBUDtBQUNILEtBRkQsTUFHSyxJQUFHSSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBYixLQUF1QixHQUExQixFQUE4QjtBQUMvQkosYUFBTyxDQUFDSyx5REFBRCxDQUFQO0FBQ0gsS0FGSSxNQUdEO0FBQ0FMLGFBQU8sQ0FBQ00seURBQUQsQ0FBUDtBQUNIO0FBRUosR0FaRDs7QUFjQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsd0JBQWY7QUFBQSw4QkFDSTtBQUFPLGlCQUFTLEVBQUMsNENBQWpCO0FBQUEsZ0NBQ0k7QUFBTyxjQUFJLEVBQUMsT0FBWjtBQUFvQixjQUFJLEVBQUMsUUFBekI7QUFBa0MsbUJBQVMsRUFBQyxvQkFBNUM7QUFBaUUsZUFBSyxFQUFDLEdBQXZFO0FBQTJFLGtCQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxtQkFBT04sY0FBYyxDQUFDTSxDQUFELENBQXJCO0FBQUE7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQU0sbUJBQVMsRUFBQyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUtJO0FBQU8saUJBQVMsRUFBQyw0Q0FBakI7QUFBQSxnQ0FDSTtBQUFPLGNBQUksRUFBQyxPQUFaO0FBQW9CLGNBQUksRUFBQyxRQUF6QjtBQUFrQyxtQkFBUyxFQUFDLG9CQUE1QztBQUFpRSxlQUFLLEVBQUMsR0FBdkU7QUFBMkUsa0JBQVEsRUFBRSxrQkFBQ0EsQ0FBRDtBQUFBLG1CQUFPTixjQUFjLENBQUNNLENBQUQsQ0FBckI7QUFBQTtBQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBTSxtQkFBUyxFQUFDLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLGVBU0k7QUFBTyxpQkFBUyxFQUFDLDRDQUFqQjtBQUFBLGdDQUNJO0FBQU8sY0FBSSxFQUFDLE9BQVo7QUFBb0IsY0FBSSxFQUFDLFFBQXpCO0FBQWtDLG1CQUFTLEVBQUMsb0JBQTVDO0FBQWlFLGVBQUssRUFBQyxHQUF2RTtBQUEyRSxrQkFBUSxFQUFFLGtCQUFDQSxDQUFEO0FBQUEsbUJBQU9OLGNBQWMsQ0FBQ00sQ0FBRCxDQUFyQjtBQUFBO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFNLG1CQUFTLEVBQUMsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFnQkk7QUFBSyxlQUFTLEVBQUMsK0JBQWY7QUFBK0MsV0FBSyxFQUFFWixTQUF0RDtBQUFBLDZCQUNJO0FBQUEsZ0NBQ0k7QUFBSSxtQkFBUyxFQUFDLDRCQUFkO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFJLHFCQUFTLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUkscUJBQVMsRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBSUk7QUFBSSxxQkFBUyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFLSTtBQUFJLHFCQUFTLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFRS0ksSUFBSSxDQUFDUyxHQUFMLENBQVMsVUFBQ0MsUUFBRDtBQUFBLDhCQUNOLHFFQUFDLDBEQUFEO0FBQ0Esb0JBQVEsRUFBRUE7QUFEVixhQUV1QkEsUUFGdkIsR0FFS0EsUUFBUSxDQUFDQyxJQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRE07QUFBQSxTQUFULENBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9DSDs7R0ExRFFoQixVOztLQUFBQSxVO0FBMERSO0FBRWNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1Jlc2VhcmNoUGFnZS41ODg1Nzc2OTA2MGNjMmYxYzJhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVzZWFyY2ggZnJvbSBcIi4vUmVzZWFyY2gvUmVzZWFyY2hcIjtcclxuaW1wb3J0IERhdGEyMDE3XzE4IGZyb20gXCIuL0RhdGEvMjAxN18xOERhdGFcIjtcclxuaW1wb3J0IERhdGEyMDE4XzE5IGZyb20gXCIuL0RhdGEvMjAxOF8xOURhdGFcIjtcclxuaW1wb3J0IERhdGEyMDE5XzIwIGZyb20gXCIuL0RhdGEvMjAxOV8yMERhdGFcIjtcclxuXHJcbmZ1bmN0aW9uIFJlc2VhcmNoZXMoKXtcclxuXHJcbiAgICBjb25zdCBkaXZTdHlsZXIgPSB7XHJcbiAgICAgICAgaGVpZ2h0OjYwMFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKERhdGEyMDE3XzE4KTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG5cclxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUgPT09IFwiMVwiKXtcclxuICAgICAgICAgICAgc2V0RGF0YShEYXRhMjAxN18xOCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcIjJcIil7XHJcbiAgICAgICAgICAgIHNldERhdGEoRGF0YTIwMThfMTkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXREYXRhKERhdGEyMDE5XzIwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Z3JpZCBtZDpncmlkLWNvbHMtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1kOmdyaWQtY29sLTEgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicmFkaW8xXCIgY2xhc3NOYW1lPVwiZm9ybS1yYWRpbyBoLTQgdy00XCIgdmFsdWU9XCIxXCIgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VzSGFuZGxlcihlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPiZuYnNwO1Byb2plY3RzIGZyb20gMjAxNy0xODwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWQ6Z3JpZC1jb2wtMSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpbzFcIiBjbGFzc05hbWU9XCJmb3JtLXJhZGlvIGgtNCB3LTRcIiB2YWx1ZT1cIjJcIiBvbkNoYW5nZT17KGUpID0+IGNoYW5nZXNIYW5kbGVyKGUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+Jm5ic3A7UHJvamVjdHMgZnJvbSAyMDE4LTE5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZDpncmlkLWNvbC0xIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvMVwiIGNsYXNzTmFtZT1cImZvcm0tcmFkaW8gaC00IHctNFwiIHZhbHVlPVwiM1wiIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlc0hhbmRsZXIoZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj4mbmJzcDtQcm9qZWN0cyBmcm9tIDIwMTktMjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLWhpZGUgb3ZlcmZsb3cteS1zY3JvbGxcIiBzdHlsZT17ZGl2U3R5bGVyfT5cclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctZ3JheS00MDAgbWItM3cgcm91bmRlZCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMSB3LTEyXCI+U3JObzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTFcIj5Qcm9qZWN0VGl0bGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0xXCI+Um9sbE5vPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMVwiPlN0dWRlbnROYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMVwiPlByb2plY3RHdWlkZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHJlc2VhcmNoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNlYXJjaD17cmVzZWFyY2h9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Jlc2VhcmNoLlNyTm99ey4uLnJlc2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZWFyY2hlczsiXSwic291cmNlUm9vdCI6IiJ9