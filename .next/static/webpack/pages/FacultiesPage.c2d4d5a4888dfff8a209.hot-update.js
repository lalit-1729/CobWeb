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
    "imageSrc": "images/faculties/Abhishek.png",
    "name": "Dr. Prashant K. Shah",
    "qualification": "M.E.",
    "designation": "Associate Professor",
    "email": "pks@eced.svnit.ac.in"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmFjdWx0aWVzL0ZhY3VsdGllcy5qcyJdLCJuYW1lcyI6WyJGYWN1bHRpZXMiLCJmYWN1bHRpZXNBcnJheSIsIm1hcCIsImZhY3VsdHkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULEdBQW9CO0FBQUE7O0FBRWhCLE1BQU1DLGNBQWMsR0FBRyxDQUNuQjtBQUNJLGdCQUFXLGlDQURmO0FBRUksWUFBTyx3QkFGWDtBQUdJLHFCQUFnQixVQUhwQjtBQUlJLG1CQUFjLHFCQUpsQjtBQUtJLGFBQVE7QUFMWixHQURtQixFQVFuQjtBQUNJLGdCQUFXLGlDQURmO0FBRUksWUFBTyx5QkFGWDtBQUdJLHFCQUFnQixNQUhwQjtBQUlJLG1CQUFjLFdBSmxCO0FBS0ksYUFBUTtBQUxaLEdBUm1CLEVBZW5CO0FBQ0ksZ0JBQVcsaUNBRGY7QUFFSSxZQUFPLDBCQUZYO0FBR0kscUJBQWdCLFNBSHBCO0FBSUksbUJBQWMscUJBSmxCO0FBS0ksYUFBUTtBQUxaLEdBZm1CLEVBc0JuQjtBQUNJLGdCQUFXLCtCQURmO0FBRUksWUFBTyxzQkFGWDtBQUdJLHFCQUFnQixNQUhwQjtBQUlJLG1CQUFjLHFCQUpsQjtBQUtJLGFBQVE7QUFMWixHQXRCbUIsRUE2Qm5CO0FBQ0ksZ0JBQVcsK0JBRGY7QUFFSSxZQUFPLHNCQUZYO0FBR0kscUJBQWdCLE1BSHBCO0FBSUksbUJBQWMscUJBSmxCO0FBS0ksYUFBUTtBQUxaLEdBN0JtQixDQUF2QjtBQXVDQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUlJO0FBQUssZUFBUyxFQUFDLHdCQUFmO0FBQUEsZ0JBQ0tBLGNBQWMsQ0FBQ0MsR0FBZixDQUFtQixVQUFDQyxPQUFEO0FBQUEsNEJBQ2hCLHFFQUFDLGdFQUFEO0FBQ0EsaUJBQU8sRUFBRUE7QUFEVCxXQUVzQkEsT0FGdEIsR0FFS0EsT0FBTyxDQUFDQyxJQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGdCO0FBQUEsT0FBbkI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSDs7S0F4RFFKLFM7QUF3RFI7QUFFY0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRmFjdWx0aWVzUGFnZS5jMmQ0ZDVhNDg4OGRmZmY4YTIwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL1NlYXJjaEJhci9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IEZhY3VsdHlDYXJkIGZyb20gXCIuL0ZhY3VsdHlDYXJkL0ZhY3VsdHlDYXJkXCI7XHJcbmltcG9ydCBGYWN1bHR5SGVhZGVyIGZyb20gXCIuL0ZhY3VsdHlIZWFkZXIvRmFjdWx0eUhlYWRlclwiXHJcblxyXG5mdW5jdGlvbiBGYWN1bHRpZXMoKXtcclxuXHJcbiAgICBjb25zdCBmYWN1bHRpZXNBcnJheSA9IFtcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9mYWN1bHRpZXMvbGFsbHVXYWRpYS5wbmdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6XCJQcm9mLiBBLiBILiBMYWxsdXdhZGlhXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOlwiTS4gVGVjaC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOlwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6XCJhaGxAZWNlZC5zdm5pdC5hYy5pblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9mYWN1bHRpZXMvVXBlbmFEYWxhbC5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6XCJEci4oTXJzKSBVcGVuYSBELiBEYWxhbFwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjpcIlBoLkRcIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOlwiUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjpcInVkZEBlY2VkLnN2bml0LmFjLmluXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2ZhY3VsdGllcy9OQkthbmlya2FyLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjpcIlByb2YuIE5hcmVzaCBCLiBLYW5pcmthclwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjpcIk0uVGVjaC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOlwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6XCJuYmtAZWNlZC5zdm5pdC5hYy5pblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9mYWN1bHRpZXMvcHJhc2hhbnQucG5nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOlwiRHIuIFByYXNoYW50IEsuIFNoYWhcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6XCJNLkUuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjpcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOlwicGtzQGVjZWQuc3ZuaXQuYWMuaW5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZmFjdWx0aWVzL0FiaGlzaGVrLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjpcIkRyLiBQcmFzaGFudCBLLiBTaGFoXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOlwiTS5FLlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6XCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjpcInBrc0BlY2VkLnN2bml0LmFjLmluXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgXVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RmFjdWx0eUhlYWRlci8+XHJcbiAgICAgICAgICAgIDxTZWFyY2hCYXIvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpncmlkIG1kOmdyaWQtY29scy0zXCI+XHJcbiAgICAgICAgICAgICAgICB7ZmFjdWx0aWVzQXJyYXkubWFwKChmYWN1bHR5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEZhY3VsdHlDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgIGZhY3VsdHk9e2ZhY3VsdHl9IFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17ZmFjdWx0eS5uYW1lfXsuLi5mYWN1bHR5fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjdWx0aWVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9