webpackHotUpdate_N_E("pages/ResearchFacilities",{

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

/***/ "./pages/ResearchFacilities.js":
/*!*************************************!*\
  !*** ./pages/ResearchFacilities.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Components/Footer/Footer */ "./src/Components/Footer/Footer.js");
/* harmony import */ var _src_Components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Components/Header/Header */ "./src/Components/Header/Header.js");
/* harmony import */ var _src_Components_Faclities_Facilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Components/Faclities/Facilities */ "./src/Components/Faclities/Facilities.js");
/* harmony import */ var _src_Components_PageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Components/PageLayout/PageLayout */ "./src/Components/PageLayout/PageLayout.js");
/* harmony import */ var _src_Components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Components/Loader/Loader */ "./src/Components/Loader/Loader.js");


var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\pages\\ResearchFacilities.js",
    _s = $RefreshSig$();








function ResearchFacilities() {
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
    }, 2000);
  }, []);
  var success = status === REQUEST_STATUS.SUCCESS;
  var isLoading = status === REQUEST_STATUS.LOADLING;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 27
    }, this), succes && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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

_s(ResearchFacilities, "bTBfkudlvE4SMANeUP+zeG7VxqU=");

_c = ResearchFacilities;
;
/* harmony default export */ __webpack_exports__["default"] = (ResearchFacilities);

var _c;

$RefreshReg$(_c, "ResearchFacilities");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUmVzZWFyY2hGYWNpbGl0aWVzLmpzIl0sIm5hbWVzIjpbIlJlc2VhcmNoRmFjaWxpdGllcyIsIlJFUVVFU1RfU1RBVFVTIiwiTE9BRExJTkciLCJTVUNDRVNTIiwiRVJST1IiLCJ1c2VTdGF0ZSIsInN0YXR1cyIsInNldFN0YXR1cyIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJzdWNjZXNzIiwiaXNMb2FkaW5nIiwic3VjY2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGtCQUFULEdBQTZCO0FBQUE7O0FBRXpCLE1BQU1DLGNBQWMsR0FBRztBQUNuQkMsWUFBUSxFQUFDLFNBRFU7QUFFbkJDLFdBQU8sRUFBQyxTQUZXO0FBR25CQyxTQUFLLEVBQUM7QUFIYSxHQUF2Qjs7QUFGeUIsa0JBUUdDLHNEQUFRLENBQUNKLGNBQWMsQ0FBQ0MsUUFBaEIsQ0FSWDtBQUFBLE1BUWxCSSxNQVJrQjtBQUFBLE1BUVZDLFNBUlU7O0FBVXpCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsY0FBVSxDQUFDO0FBQUEsYUFBTUYsU0FBUyxDQUFDTixjQUFjLENBQUNFLE9BQWhCLENBQWY7QUFBQSxLQUFELEVBQTBDLElBQTFDLENBQVY7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsTUFBTU8sT0FBTyxHQUFHSixNQUFNLEtBQUtMLGNBQWMsQ0FBQ0UsT0FBMUM7QUFDQSxNQUFNUSxTQUFTLEdBQUdMLE1BQU0sS0FBS0wsY0FBYyxDQUFDQyxRQUE1QztBQUVBLHNCQUNJO0FBQUEsZUFDS1MsU0FBUyxpQkFBSSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRGxCLEVBRUtDLE1BQU0saUJBQ0g7QUFBQSw4QkFDSSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFUSxxRUFBQyw2RUFBRDtBQUFBLCtCQUNJLHFFQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRlIsZUFLSSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFjSDs7R0EvQlFaLGtCOztLQUFBQSxrQjtBQStCUjtBQUVjQSxpRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9SZXNlYXJjaEZhY2lsaXRpZXMuYzMzNDhiMjNmM2MzMmE0NjRjOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9zcmMvQ29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAgXCIuLi9zcmMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBGYWNpbGl0aWVzIGZyb20gXCIuLi9zcmMvQ29tcG9uZW50cy9GYWNsaXRpZXMvRmFjaWxpdGllc1wiO1xyXG5pbXBvcnQgUGFnZUxheW91dCBmcm9tIFwiLi4vc3JjL0NvbXBvbmVudHMvUGFnZUxheW91dC9QYWdlTGF5b3V0XCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL3NyYy9Db21wb25lbnRzL0xvYWRlci9Mb2FkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFJlc2VhcmNoRmFjaWxpdGllcygpe1xyXG5cclxuICAgIGNvbnN0IFJFUVVFU1RfU1RBVFVTID0ge1xyXG4gICAgICAgIExPQURMSU5HOlwiTG9hZGluZ1wiLFxyXG4gICAgICAgIFNVQ0NFU1M6XCJTVUNDRVNTXCIsXHJcbiAgICAgICAgRVJST1I6XCJFcnJvclwiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURMSU5HKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpLCAyMDAwKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1M7XHJcbiAgICBjb25zdCBpc0xvYWRpbmcgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkxPQURMSU5HO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxMb2FkZXIvPn1cclxuICAgICAgICAgICAge3N1Y2NlcyAmJiBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdlTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhY2lsaXRpZXMvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhZ2VMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VhcmNoRmFjaWxpdGllczsiXSwic291cmNlUm9vdCI6IiJ9