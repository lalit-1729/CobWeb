webpackHotUpdate_N_E("pages/FacultiesPage",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./pages/FacultiesPage.js":
/*!********************************!*\
  !*** ./pages/FacultiesPage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Components_Faculties_Faculties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Components/Faculties/Faculties */ "./src/Components/Faculties/Faculties.js");
/* harmony import */ var _src_Components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Components/Header/Header */ "./src/Components/Header/Header.js");
/* harmony import */ var _src_Components_PageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Components/PageLayout/PageLayout */ "./src/Components/PageLayout/PageLayout.js");
/* harmony import */ var _src_Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Components/Footer/Footer */ "./src/Components/Footer/Footer.js");
/* harmony import */ var _src_Components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Components/Loader/Loader */ "./src/Components/Loader/Loader.js");


var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\pages\\FacultiesPage.js",
    _s = $RefreshSig$();








function FacultiesPage() {
  _s();

  var REQUEST_STATUS = {
    LOADLING: "Loading",
    SUCCESS: "SUCCESS",
    ERROR: "Error"
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(REQUEST_STATUS.LOADLING),
      status = _useState[0],
      setStatus = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setTimeout(function () {
      return setStatus(REQUEST_STATUS.SUCCESS);
    }, 4000);
  }, []);
  var success = status === REQUEST_STATUS.SUCCESS;
  var isLoading = status === REQUEST_STATUS.LOADLING;
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

_s(FacultiesPage, "bTBfkudlvE4SMANeUP+zeG7VxqU=");

_c = FacultiesPage;
;
/* harmony default export */ __webpack_exports__["default"] = (FacultiesPage);

var _c;

$RefreshReg$(_c, "FacultiesPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRmFjdWx0aWVzUGFnZS5qcyJdLCJuYW1lcyI6WyJGYWN1bHRpZXNQYWdlIiwiUkVRVUVTVF9TVEFUVVMiLCJMT0FETElORyIsIlNVQ0NFU1MiLCJFUlJPUiIsInVzZVN0YXRlIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInN1Y2Nlc3MiLCJpc0xvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxHQUF3QjtBQUFBOztBQUVwQixNQUFNQyxjQUFjLEdBQUc7QUFDbkJDLFlBQVEsRUFBQyxTQURVO0FBRW5CQyxXQUFPLEVBQUMsU0FGVztBQUduQkMsU0FBSyxFQUFDO0FBSGEsR0FBdkI7O0FBRm9CLGtCQVFRQyxzREFBUSxDQUFDSixjQUFjLENBQUNDLFFBQWhCLENBUmhCO0FBQUEsTUFRYkksTUFSYTtBQUFBLE1BUUxDLFNBUks7O0FBVXBCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsY0FBVSxDQUFDO0FBQUEsYUFBTUYsU0FBUyxDQUFDTixjQUFjLENBQUNFLE9BQWhCLENBQWY7QUFBQSxLQUFELEVBQTBDLElBQTFDLENBQVY7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsTUFBTU8sT0FBTyxHQUFHSixNQUFNLEtBQUtMLGNBQWMsQ0FBQ0UsT0FBMUM7QUFDQSxNQUFNUSxTQUFTLEdBQUdMLE1BQU0sS0FBS0wsY0FBYyxDQUFDQyxRQUE1QztBQUVBLHNCQUNJO0FBQUEsZUFFS1MsU0FBUyxpQkFBSSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRmxCLEVBS0tELE9BQU8saUJBQ0o7QUFBQSw4QkFDSSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFUSxxRUFBQyw2RUFBRDtBQUFBLCtCQUNJLHFFQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRlIsZUFLSSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQkg7O0dBbENRVixhOztLQUFBQSxhO0FBa0NSO0FBRWNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0ZhY3VsdGllc1BhZ2UuNzBiNWYyMGM2ZDUzYTk0YTIwMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRmFjdWx0aWVzIGZyb20gXCIuLi9zcmMvQ29tcG9uZW50cy9GYWN1bHRpZXMvRmFjdWx0aWVzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL3NyYy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IFBhZ2VMYXlvdXQgZnJvbSBcIi4uL3NyYy9Db21wb25lbnRzL1BhZ2VMYXlvdXQvUGFnZUxheW91dFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9zcmMvQ29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL3NyYy9Db21wb25lbnRzL0xvYWRlci9Mb2FkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIEZhY3VsdGllc1BhZ2UoKXtcclxuXHJcbiAgICBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcclxuICAgICAgICBMT0FETElORzpcIkxvYWRpbmdcIixcclxuICAgICAgICBTVUNDRVNTOlwiU1VDQ0VTU1wiLFxyXG4gICAgICAgIEVSUk9SOlwiRXJyb3JcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShSRVFVRVNUX1NUQVRVUy5MT0FETElORyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5TVUNDRVNTKSwgNDAwMCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBzdWNjZXNzID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTO1xyXG4gICAgY29uc3QgaXNMb2FkaW5nID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5MT0FETElORztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPExvYWRlci8+fVxyXG5cclxuXHJcbiAgICAgICAgICAgIHtzdWNjZXNzICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnZUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWN1bHRpZXMvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhZ2VMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY3VsdGllc1BhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==