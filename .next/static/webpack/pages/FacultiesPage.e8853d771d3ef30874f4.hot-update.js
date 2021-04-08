webpackHotUpdate_N_E("pages/FacultiesPage",{

/***/ "./src/Components/Faculties/FacultyCard/FacultyCard.js":
/*!*************************************************************!*\
  !*** ./src/Components/Faculties/FacultyCard/FacultyCard.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Faculties\\FacultyCard\\FacultyCard.js";




function FacultyCard(_ref) {
  var imageSrc = _ref.imageSrc,
      name = _ref.name,
      qualification = _ref.qualification,
      designation = _ref.designation,
      email = _ref.email;
  var myStyle = {
    width: 300,
    height: 300
  };

  var notify = function notify() {
    return Object(react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"])("thats easy", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "mx-3 bg-gray-200 hover:bg-gray-300 block justify-center rounded overflow-hidden shadow-2xl px-5 py-4 my-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-3 ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "block rounded text-gray-800 font-bold text-lg",
        children: [name, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "block text-md text-gray-600",
        children: qualification
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "block text-gray-600",
        children: designation
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-3 flex justify-around px-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "image-container m-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "card-image",
          src: imageSrc
        }, name, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "flex text-gray-600 font-bold",
        children: ["email: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "font-semibold",
          children: ["\xA0", email]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 71
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "block",
        onClick: notify,
        children: "Know More"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], {
        position: "bottom-center",
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

_c = FacultyCard;
/* harmony default export */ __webpack_exports__["default"] = (FacultyCard);

var _c;

$RefreshReg$(_c, "FacultyCard");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmFjdWx0aWVzL0ZhY3VsdHlDYXJkL0ZhY3VsdHlDYXJkLmpzIl0sIm5hbWVzIjpbIkZhY3VsdHlDYXJkIiwiaW1hZ2VTcmMiLCJuYW1lIiwicXVhbGlmaWNhdGlvbiIsImRlc2lnbmF0aW9uIiwiZW1haWwiLCJteVN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJub3RpZnkiLCJ0b2FzdCIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsT0FBeUU7QUFBQSxNQUFuREMsUUFBbUQsUUFBbkRBLFFBQW1EO0FBQUEsTUFBekNDLElBQXlDLFFBQXpDQSxJQUF5QztBQUFBLE1BQW5DQyxhQUFtQyxRQUFuQ0EsYUFBbUM7QUFBQSxNQUFwQkMsV0FBb0IsUUFBcEJBLFdBQW9CO0FBQUEsTUFBUEMsS0FBTyxRQUFQQSxLQUFPO0FBRXJFLE1BQU1DLE9BQU8sR0FBRztBQUNaQyxTQUFLLEVBQUMsR0FETTtBQUVaQyxVQUFNLEVBQUM7QUFGSyxHQUFoQjs7QUFLQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFdBQU1DLDREQUFLLENBQUMsWUFBRCxFQUFlO0FBQUNDLGNBQVEsRUFBRSxlQUFYO0FBQ3pDQyxlQUFTLEVBQUUsSUFEOEI7QUFFekNDLHFCQUFlLEVBQUUsS0FGd0I7QUFHekNDLGtCQUFZLEVBQUUsSUFIMkI7QUFJekNDLGtCQUFZLEVBQUUsSUFKMkI7QUFLekNDLGVBQVMsRUFBRSxJQUw4QjtBQU16Q0MsY0FBUSxFQUFFQztBQU4rQixLQUFmLENBQVg7QUFBQSxHQUFmOztBQVFBLHNCQUNJO0FBQUssYUFBUyxFQUFDLDJHQUFmO0FBQUEsNEJBRUk7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLDhCQUNJO0FBQUcsaUJBQVMsRUFBQywrQ0FBYjtBQUFBLG1CQUE4RGhCLElBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBRyxpQkFBUyxFQUFDLDZCQUFiO0FBQUEsa0JBQTRDQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFHLGlCQUFTLEVBQUMscUJBQWI7QUFBQSxrQkFBb0NDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQVFJO0FBQUssZUFBUyxFQUFDLCtCQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLHFCQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBNEIsYUFBRyxFQUFFSDtBQUFqQyxXQUFnREMsSUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkosZUFjSTtBQUFBLDhCQUNJO0FBQU0saUJBQVMsRUFBQyw4QkFBaEI7QUFBQSwyQ0FBc0Q7QUFBSSxtQkFBUyxFQUFDLGVBQWQ7QUFBQSw2QkFBcUNHLEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFRLGlCQUFTLEVBQUMsT0FBbEI7QUFBMEIsZUFBTyxFQUFFSSxNQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0kscUVBQUMsNkRBQUQ7QUFDQSxnQkFBUSxFQUFDLGVBRFQ7QUFFQSx1QkFBZSxFQUFFLEtBRmpCO0FBR0EsbUJBQVcsRUFBRSxLQUhiO0FBSUEsb0JBQVksTUFKWjtBQUtBLFdBQUcsRUFBRSxLQUxMO0FBTUEsd0JBQWdCLE1BTmhCO0FBT0EsaUJBQVMsTUFQVDtBQVFBLG9CQUFZO0FBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0JIOztLQTlDUVQsVztBQWdETUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRmFjdWx0aWVzUGFnZS5lODg1M2Q3NzFkM2VmMzA4NzRmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1RvYXN0Q29udGFpbmVyLCB0b2FzdH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcblxyXG5mdW5jdGlvbiBGYWN1bHR5Q2FyZCh7aW1hZ2VTcmMsIG5hbWUsIHF1YWxpZmljYXRpb24sIGRlc2lnbmF0aW9uLCBlbWFpbH0pe1xyXG5cclxuICAgIGNvbnN0IG15U3R5bGUgPSB7XHJcbiAgICAgICAgd2lkdGg6MzAwLFxyXG4gICAgICAgIGhlaWdodDozMDBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBub3RpZnkgPSAoKSA9PiB0b2FzdChcInRoYXRzIGVhc3lcIiwge3Bvc2l0aW9uOiBcImJvdHRvbS1jZW50ZXJcIixcclxuICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICBwcm9ncmVzczogdW5kZWZpbmVkLH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0zIGJnLWdyYXktMjAwIGhvdmVyOmJnLWdyYXktMzAwIGJsb2NrIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy0yeGwgcHgtNSBweS00IG15LTRcIj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmxvY2sgcm91bmRlZCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCB0ZXh0LWxnXCI+e25hbWV9IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtbWQgdGV4dC1ncmF5LTYwMFwiPntxdWFsaWZpY2F0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS02MDBcIj57ZGVzaWduYXRpb259PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMyBmbGV4IGp1c3RpZnktYXJvdW5kIHB4LTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyIG0tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiIHNyYz17aW1hZ2VTcmN9IGtleT17bmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IHRleHQtZ3JheS02MDAgZm9udC1ib2xkXCI+ZW1haWw6IDxoMSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+Jm5ic3A7e2VtYWlsfTwvaDE+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJibG9ja1wiIG9uQ2xpY2s9e25vdGlmeX0+S25vdyBNb3JlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXJcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrXHJcbiAgICAgICAgICAgICAgICBydGw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkZvY3VzTG9zc1xyXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjdWx0eUNhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==