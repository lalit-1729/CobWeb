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
    "email": "ahl@eced.svnit.ac.in"
  }, {
    "imageSrc": "images/faculties/NBKanirkar.jpg",
    "name": "Prof. Naresh B. Kanirkar",
    "qualification": "M.Tech.",
    "designation": "Associate Professor",
    "email": "nbk@eced.svnit.ac.in"
  }, {
    "imageSrc": "images/faculties/prashant.jpg",
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
  }, {
    "imageSrc": "images/faculties/UpenaDalal.jpg",
    "name": "Dr.(Mrs) Upena D. Dalal",
    "qualification": "Ph.D",
    "designation": "Professor",
    "email": "udd@eced.svnit.ac.in"
  }, {
    "imageSrc": "images/faculties/Rasika.jpg",
    "name": "Dr. (Mrs.) Rasika N. Dhavse",
    "qualification": "Ph. D.",
    "designation": "Associate Professor",
    "email": "rsk@eced.svnit.ac.in"
  }, {
    "imageSrc": "images/faculties/Jignesh.jpg",
    "name": "Dr. Jignesh N. Sarvaiya",
    "qualification": "Ph. D.",
    "designation": "Associate Professor",
    "email": "jns@eced.svnit.ac.in"
  }, {
    "imageSrc": "images/faculties/darjiSir.jpg",
    "name": "Dr. Anand D. Darji",
    "qualification": "Ph.D. (Microelectronics), IIT Bombay",
    "designation": "Associate Professor",
    "email": "add@eced.svnit.ac.in"
  }, {
    "imageSrc": "images/faculties/piyushPatel.png",
    "name": "Dr. PIYUSH N. PATEL",
    "qualification": "Ph. D.",
    "designation": "Associate Professor",
    "email": "pnp@eced.svnit.ac.in"
  }, {
    "imageSrc": "images/faculties/Zuber.jpg",
    "name": "Dr. Zuber M. Patel",
    "qualification": "Ph. D.",
    "designation": "Associate Professor",
    "email": "zuber_patel@eced.svnit.ac.in"
  }, {
    "imageSrc": "images/faculties/Pinal.jpg",
    "name": "Dr. Pinalkumar J. Engineer",
    "qualification": "Ph. D.",
    "designation": "Assistant Professor",
    "email": "pje@eced.svnit.ac.in"
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
      lineNumber: 93,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "scroll-hide overflow-y-scroll h-450px mt-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "grid md:grid-cols-3 sm:grid-cols-2",
        children: facultiesArray.filter(function (record) {
          var targetString = record.name.toLowerCase();
          return setSearchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
        }).map(function (faculties) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_FacultyCard_FacultyCard__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({
            faculty: faculty
          }, faculty), faculty.name, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmFjdWx0aWVzL0ZhY3VsdGllcy5qcyJdLCJuYW1lcyI6WyJGYWN1bHRpZXMiLCJmYWN1bHRpZXNBcnJheSIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImZhY3VsdGllcyIsInNldEZhY3VsdGllcyIsImZpbHRlciIsInJlY29yZCIsInRhcmdldFN0cmluZyIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsImluY2x1ZGVzIiwibWFwIiwiZmFjdWx0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBRWhCLE1BQU1DLGNBQWMsR0FBRyxDQUNuQjtBQUNJLGdCQUFXLGlDQURmO0FBRUksWUFBTyx3QkFGWDtBQUdJLHFCQUFnQixVQUhwQjtBQUlJLG1CQUFjLHFCQUpsQjtBQUtJLGFBQVE7QUFMWixHQURtQixFQVFuQjtBQUNJLGdCQUFXLGlDQURmO0FBRUksWUFBTywwQkFGWDtBQUdJLHFCQUFnQixTQUhwQjtBQUlJLG1CQUFjLHFCQUpsQjtBQUtJLGFBQVE7QUFMWixHQVJtQixFQWVuQjtBQUNJLGdCQUFXLCtCQURmO0FBRUksWUFBTyxzQkFGWDtBQUdJLHFCQUFnQixNQUhwQjtBQUlJLG1CQUFjLHFCQUpsQjtBQUtJLGFBQVE7QUFMWixHQWZtQixFQXNCbkI7QUFDSSxnQkFBVywrQkFEZjtBQUVJLFlBQU8sc0JBRlg7QUFHSSxxQkFBZ0IsNENBSHBCO0FBSUksbUJBQWMscUJBSmxCO0FBS0ksYUFBUTtBQUxaLEdBdEJtQixFQTZCbkI7QUFDSSxnQkFBVyxpQ0FEZjtBQUVJLFlBQU8seUJBRlg7QUFHSSxxQkFBZ0IsTUFIcEI7QUFJSSxtQkFBYyxXQUpsQjtBQUtJLGFBQVE7QUFMWixHQTdCbUIsRUFvQ25CO0FBQ0ksZ0JBQVcsNkJBRGY7QUFFSSxZQUFPLDZCQUZYO0FBR0kscUJBQWdCLFFBSHBCO0FBSUksbUJBQWMscUJBSmxCO0FBS0ksYUFBUTtBQUxaLEdBcENtQixFQTJDbkI7QUFDSSxnQkFBVyw4QkFEZjtBQUVJLFlBQU8seUJBRlg7QUFHSSxxQkFBZ0IsUUFIcEI7QUFJSSxtQkFBYyxxQkFKbEI7QUFLSSxhQUFRO0FBTFosR0EzQ21CLEVBa0RuQjtBQUNJLGdCQUFXLCtCQURmO0FBRUksWUFBTyxvQkFGWDtBQUdJLHFCQUFnQixzQ0FIcEI7QUFJSSxtQkFBYyxxQkFKbEI7QUFLSSxhQUFRO0FBTFosR0FsRG1CLEVBeURuQjtBQUNJLGdCQUFXLGtDQURmO0FBRUksWUFBTyxxQkFGWDtBQUdJLHFCQUFnQixRQUhwQjtBQUlJLG1CQUFjLHFCQUpsQjtBQUtJLGFBQVE7QUFMWixHQXpEbUIsRUFnRW5CO0FBQ0ksZ0JBQVcsNEJBRGY7QUFFSSxZQUFPLG9CQUZYO0FBR0kscUJBQWdCLFFBSHBCO0FBSUksbUJBQWMscUJBSmxCO0FBS0ksYUFBUTtBQUxaLEdBaEVtQixFQXVFbkI7QUFDSSxnQkFBVyw0QkFEZjtBQUVJLFlBQU8sNEJBRlg7QUFHSSxxQkFBZ0IsUUFIcEI7QUFJSSxtQkFBYyxxQkFKbEI7QUFLSSxhQUFRO0FBTFosR0F2RW1CLENBQXZCOztBQUZnQixrQkFrRnNCQyxzREFBUSxDQUFDLEVBQUQsQ0FsRjlCO0FBQUEsTUFrRlRDLFdBbEZTO0FBQUEsTUFrRklDLGNBbEZKOztBQUFBLG1CQW1Ga0JGLHNEQUFRLENBQUNELGNBQUQsQ0FuRjFCO0FBQUEsTUFtRlRJLFNBbkZTO0FBQUEsTUFtRkVDLFlBbkZGOztBQXFGaEIsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFHSSxxRUFBQyw0REFBRDtBQUFXLGlCQUFXLEVBQUVILFdBQXhCO0FBQXFDLG9CQUFjLEVBQUVDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUtJO0FBQUssZUFBUyxFQUFDLDRDQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLG9DQUFmO0FBQUEsa0JBQ0tILGNBQWMsQ0FBQ00sTUFBZixDQUFzQixVQUFDQyxNQUFELEVBQVk7QUFDL0IsY0FBTUMsWUFBWSxHQUFHRCxNQUFNLENBQUNFLElBQVAsQ0FBWUMsV0FBWixFQUFyQjtBQUNBLGlCQUFPUCxjQUFjLENBQUNRLE1BQWYsS0FBMEIsQ0FBMUIsR0FBOEIsSUFBOUIsR0FBcUNILFlBQVksQ0FBQ0ksUUFBYixDQUFzQlYsV0FBVyxDQUFDUSxXQUFaLEVBQXRCLENBQTVDO0FBQ0gsU0FIQSxFQUdFRyxHQUhGLENBR00sVUFBQ1QsU0FBRDtBQUFBLDhCQUNILHFFQUFDLGdFQUFEO0FBQ0EsbUJBQU8sRUFBRVU7QUFEVCxhQUVzQkEsT0FGdEIsR0FFS0EsT0FBTyxDQUFDTCxJQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREc7QUFBQSxTQUhOO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFCSDs7R0ExR1FWLFM7O0tBQUFBLFM7QUEwR1I7QUFFY0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRmFjdWx0aWVzUGFnZS5jYmI0ODNmN2VjMmM5NDA3OWU1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL1NlYXJjaEJhci9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IEZhY3VsdHlDYXJkIGZyb20gXCIuL0ZhY3VsdHlDYXJkL0ZhY3VsdHlDYXJkXCI7XHJcbmltcG9ydCBGYWN1bHR5SGVhZGVyIGZyb20gXCIuL0ZhY3VsdHlIZWFkZXIvRmFjdWx0eUhlYWRlclwiXHJcblxyXG5mdW5jdGlvbiBGYWN1bHRpZXMoKXtcclxuXHJcbiAgICBjb25zdCBmYWN1bHRpZXNBcnJheSA9IFtcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9mYWN1bHRpZXMvbGFsbHVXYWRpYS5wbmdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6XCJQcm9mLiBBLiBILiBMYWxsdXdhZGlhXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOlwiTS4gVGVjaC5cIixcclxuICAgICAgICAgICAgXCJkZXNpZ25hdGlvblwiOlwiQXNzb2NpYXRlIFByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6XCJhaGxAZWNlZC5zdm5pdC5hYy5pblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9mYWN1bHRpZXMvTkJLYW5pcmthci5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6XCJQcm9mLiBOYXJlc2ggQi4gS2FuaXJrYXJcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6XCJNLlRlY2guXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjpcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOlwibmJrQGVjZWQuc3ZuaXQuYWMuaW5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZmFjdWx0aWVzL3ByYXNoYW50LmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjpcIkRyLiBQcmFzaGFudCBLLiBTaGFoXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOlwiTS5FLlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6XCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjpcInBrc0BlY2VkLnN2bml0LmFjLmluXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2ZhY3VsdGllcy9BYmhpc2hlay5qcGdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6XCJEci4gQWJoaXNoZWsgQWNoYXJ5YVwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjpcIlBoRCAoTWljcm9lbGVjdHJvbmljcyAmIFZMU0kpLCBJSVQgUm9vcmtlZVwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6XCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjpcImFiaGlzaGVrQGVjZWQuc3ZuaXQuYWMuaW5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZmFjdWx0aWVzL1VwZW5hRGFsYWwuanBnXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOlwiRHIuKE1ycykgVXBlbmEgRC4gRGFsYWxcIixcclxuICAgICAgICAgICAgXCJxdWFsaWZpY2F0aW9uXCI6XCJQaC5EXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjpcIlByb2Zlc3NvclwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6XCJ1ZGRAZWNlZC5zdm5pdC5hYy5pblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9mYWN1bHRpZXMvUmFzaWthLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjpcIkRyLiAoTXJzLikgUmFzaWthIE4uIERoYXZzZVwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjpcIlBoLiBELlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6XCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjpcInJza0BlY2VkLnN2bml0LmFjLmluXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2ZhY3VsdGllcy9KaWduZXNoLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjpcIkRyLiBKaWduZXNoIE4uIFNhcnZhaXlhXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOlwiUGguIEQuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjpcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOlwiam5zQGVjZWQuc3ZuaXQuYWMuaW5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZmFjdWx0aWVzL2RhcmppU2lyLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjpcIkRyLiBBbmFuZCBELiBEYXJqaVwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjpcIlBoLkQuIChNaWNyb2VsZWN0cm9uaWNzKSwgSUlUIEJvbWJheVwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6XCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjpcImFkZEBlY2VkLnN2bml0LmFjLmluXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2ZhY3VsdGllcy9waXl1c2hQYXRlbC5wbmdcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6XCJEci4gUElZVVNIIE4uIFBBVEVMXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOlwiUGguIEQuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjpcIkFzc29jaWF0ZSBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOlwicG5wQGVjZWQuc3ZuaXQuYWMuaW5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZmFjdWx0aWVzL1p1YmVyLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjpcIkRyLiBadWJlciBNLiBQYXRlbFwiLFxyXG4gICAgICAgICAgICBcInF1YWxpZmljYXRpb25cIjpcIlBoLiBELlwiLFxyXG4gICAgICAgICAgICBcImRlc2lnbmF0aW9uXCI6XCJBc3NvY2lhdGUgUHJvZmVzc29yXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjpcInp1YmVyX3BhdGVsQGVjZWQuc3ZuaXQuYWMuaW5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZmFjdWx0aWVzL1BpbmFsLmpwZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjpcIkRyLiBQaW5hbGt1bWFyIEouIEVuZ2luZWVyXCIsXHJcbiAgICAgICAgICAgIFwicXVhbGlmaWNhdGlvblwiOlwiUGguIEQuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzaWduYXRpb25cIjpcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOlwicGplQGVjZWQuc3ZuaXQuYWMuaW5cIlxyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2ZhY3VsdGllcywgc2V0RmFjdWx0aWVzXSA9IHVzZVN0YXRlKGZhY3VsdGllc0FycmF5KTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZhY3VsdHlIZWFkZXIvPlxyXG5cclxuICAgICAgICAgICAgPFNlYXJjaEJhciBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9IHNldFNlYXJjaFF1ZXJ5PXtzZXRTZWFyY2hRdWVyeX0vPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGwtaGlkZSBvdmVyZmxvdy15LXNjcm9sbCBoLTQ1MHB4IG10LTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMyBzbTpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmYWN1bHRpZXNBcnJheS5maWx0ZXIoKHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTdHJpbmcgPSByZWNvcmQubmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0U2VhcmNoUXVlcnkubGVuZ3RoID09PSAwID8gdHJ1ZSA6IHRhcmdldFN0cmluZy5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KS5tYXAoKGZhY3VsdGllcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFjdWx0eUNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY3VsdHk9e2ZhY3VsdHl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZhY3VsdHkubmFtZX17Li4uZmFjdWx0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWN1bHRpZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=