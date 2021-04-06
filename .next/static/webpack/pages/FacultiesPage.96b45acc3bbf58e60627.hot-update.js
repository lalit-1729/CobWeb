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


var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Faculties\\Faculties.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Croma_Desktop_git_repo_new_repo_CobWeb_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function Faculties() {
  var _this = this;

  var facultiesArray = [{
    "imageSrc": "images/faculties/lalluWadia.png",
    "name": "Prof. A. H. Lalluwadia",
    "qualification": "M. Tech.",
    "designation": "Associate Professor",
    "email": "ahl@eced.svnit.ac.in"
  }, {
    "imageSrc": "images/faculties/UpenaDalal.jpg",
    "name": "Dr.(Mrs) Upena D. Dalal",
    "qualification": "Ph.D",
    "designation": "Professor",
    "email": "udd@eced.svnit.ac.in"
  }, {
    "imageSrc": "images/faculties/NBKanirkar.jpg",
    "name": "Prof. Naresh B. Kanirkar",
    "qualification": "M.Tech.",
    "designation": "Associate Professor",
    "email": "nbk@eced.svnit.ac.in"
  }, {
    "imageSrc": "images/faculties/prashant.png",
    "name": "Dr. Prashant K. Shah",
    "qualification": "M.E.",
    "designation": "Associate Professor",
    "email": "pks@eced.svnit.ac.in"
  }, {
    "imageSrc": "images/faculties/Abhishek.jpg",
    "name": "Dr. Abhishek Acharya",
    "qualification": "PhD (Microelectronics & VLSI), IIT Roorkee",
    "designation": "Assistant Professor",
    "email": "abhishek@eced.svnit.ac.in"
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_FacultyHeader_FacultyHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "md:grid md:grid-cols-3",
      children: facultiesArray.map(function (faculty) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_FacultyCard_FacultyCard__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({
          faculty: faculty
        }, faculty), faculty.name, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmFjdWx0aWVzL0ZhY3VsdGllcy5qcyJdLCJuYW1lcyI6WyJGYWN1bHRpZXMiLCJmYWN1bHRpZXNBcnJheSIsIm1hcCIsImZhY3VsdHkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULEdBQW9CO0FBQUE7O0FBRWhCLE1BQU1DLGNBQWMsR0FBRyxDQUNuQjtBQUNJLGdCQUFXLGlDQURmO0FBRUksWUFBTyx3QkFGWDtBQUdJLHFCQUFnQixVQUhwQjtBQUlJLG1CQUFjLHFCQUpsQjtBQUtJLGFBQVE7QUFMWixHQURtQixFQVFuQjtBQUNJLGdCQUFXLGlDQURmO0FBRUksWUFBTyx5QkFGWDtBQUdJLHFCQUFnQixNQUhwQjtBQUlJLG1CQUFjLFdBSmxCO0FBS0ksYUFBUTtBQUxaLEdBUm1CLEVBZW5CO0FBQ0ksZ0JBQVcsaUNBRGY7QUFFSSxZQUFPLDBCQUZYO0FBR0kscUJBQWdCLFNBSHBCO0FBSUksbUJBQWMscUJBSmxCO0FBS0ksYUFBUTtBQUxaLEdBZm1CLEVBc0JuQjtBQUNJLGdCQUFXLCtCQURmO0FBRUksWUFBTyxzQkFGWDtBQUdJLHFCQUFnQixNQUhwQjtBQUlJLG1CQUFjLHFCQUpsQjtBQUtJLGFBQVE7QUFMWixHQXRCbUIsRUE2Qm5CO0FBQ0ksZ0JBQVcsK0JBRGY7QUFFSSxZQUFPLHNCQUZYO0FBR0kscUJBQWdCLDRDQUhwQjtBQUlJLG1CQUFjLHFCQUpsQjtBQUtJLGFBQVE7QUFMWixHQTdCbUIsQ0FBdkI7QUF1Q0Esc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFJSTtBQUFLLGVBQVMsRUFBQyx3QkFBZjtBQUFBLGdCQUNLQSxjQUFjLENBQUNDLEdBQWYsQ0FBbUIsVUFBQ0MsT0FBRDtBQUFBLDRCQUNoQixxRUFBQyxnRUFBRDtBQUNBLGlCQUFPLEVBQUVBO0FBRFQsV0FFc0JBLE9BRnRCLEdBRUtBLE9BQU8sQ0FBQ0MsSUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURnQjtBQUFBLE9BQW5CO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZUg7O0tBeERRSixTO0FBd0RSO0FBRWNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0ZhY3VsdGllc1BhZ2UuOTZiNDVhY2MzYmJmNThlNjA2MjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi9TZWFyY2hCYXIvU2VhcmNoQmFyXCI7XHJcbmltcG9ydCBGYWN1bHR5Q2FyZCBmcm9tIFwiLi9GYWN1bHR5Q2FyZC9GYWN1bHR5Q2FyZFwiO1xyXG5pbXBvcnQgRmFjdWx0eUhlYWRlciBmcm9tIFwiLi9GYWN1bHR5SGVhZGVyL0ZhY3VsdHlIZWFkZXJcIlxyXG5cclxuZnVuY3Rpb24gRmFjdWx0aWVzKCl7XHJcblxyXG4gICAgY29uc3QgZmFjdWx0aWVzQXJyYXkgPSBbXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZmFjdWx0aWVzL2xhbGx1V2FkaWEucG5nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOlwiUHJvZi4gQS4gSC4gTGFsbHV3YWRpYVwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjpcIk0uIFRlY2guXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjpcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOlwiYWhsQGVjZWQuc3ZuaXQuYWMuaW5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZmFjdWx0aWVzL1VwZW5hRGFsYWwuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOlwiRHIuKE1ycykgVXBlbmEgRC4gRGFsYWxcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6XCJQaC5EXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjpcIlByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6XCJ1ZGRAZWNlZC5zdm5pdC5hYy5pblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9mYWN1bHRpZXMvTkJLYW5pcmthci5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6XCJQcm9mLiBOYXJlc2ggQi4gS2FuaXJrYXJcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6XCJNLlRlY2guXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjpcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOlwibmJrQGVjZWQuc3ZuaXQuYWMuaW5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZmFjdWx0aWVzL3ByYXNoYW50LnBuZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjpcIkRyLiBQcmFzaGFudCBLLiBTaGFoXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOlwiTS5FLlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6XCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjpcInBrc0BlY2VkLnN2bml0LmFjLmluXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2ZhY3VsdGllcy9BYmhpc2hlay5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6XCJEci4gQWJoaXNoZWsgQWNoYXJ5YVwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjpcIlBoRCAoTWljcm9lbGVjdHJvbmljcyAmIFZMU0kpLCBJSVQgUm9vcmtlZVwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6XCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjpcImFiaGlzaGVrQGVjZWQuc3ZuaXQuYWMuaW5cIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGYWN1bHR5SGVhZGVyLz5cclxuICAgICAgICAgICAgPFNlYXJjaEJhci8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTNcIj5cclxuICAgICAgICAgICAgICAgIHtmYWN1bHRpZXNBcnJheS5tYXAoKGZhY3VsdHkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8RmFjdWx0eUNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgZmFjdWx0eT17ZmFjdWx0eX0gXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtmYWN1bHR5Lm5hbWV9ey4uLmZhY3VsdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWN1bHRpZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=