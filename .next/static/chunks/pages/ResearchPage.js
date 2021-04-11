_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/ResearchPage"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FResearchPage&absolutePagePath=C%3A%5CUsers%5CCroma%5CDesktop%5Cgit-repo%5Cnew%20repo%5CCobWeb%5Cpages%5CResearchPage.js!./":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FResearchPage&absolutePagePath=C%3A%5CUsers%5CCroma%5CDesktop%5Cgit-repo%5Cnew%20repo%5CCobWeb%5Cpages%5CResearchPage.js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/ResearchPage",
      function () {
        return __webpack_require__(/*! ./pages/ResearchPage.js */ "./pages/ResearchPage.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/webpack/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 931:
/***/ (function(module) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(931);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./pages/ResearchPage.js":
/*!*******************************!*\
  !*** ./pages/ResearchPage.js ***!
  \*******************************/
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
/* harmony import */ var _src_Components_Researches_Researches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Components/Researches/Researches */ "./src/Components/Researches/Researches.js");
/* harmony import */ var _src_Components_PageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Components/PageLayout/PageLayout */ "./src/Components/PageLayout/PageLayout.js");
/* harmony import */ var _src_Components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Components/Loader/Loader */ "./src/Components/Loader/Loader.js");


var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\pages\\ResearchPage.js",
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
    }, this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_PageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Researches_Researches__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
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

/***/ }),

/***/ "./src/Components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/Components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Footer\\Footer.js";


function Footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-gray-200  mt-1",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "px-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-4 flex flex-row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "md:col-span-1 flex justify-between mt-3 md:mb-0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "uppercase text-gray-600 font-bold text-md",
              children: "Electronics Department"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "uppercase text-gray-600 text-xs",
              children: " National institute of Technology, SURAT "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mr-32 flex h-12 w-12 text-center md:justify-end md:mr-32",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "",
              src: "images/NIT_Surat_Logo.svg.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "px-5 pt-1 pb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "flex justify-center text-xl text-gray-600 font-semibold",
        children: "Follow us on: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-center px-2 pb-2 pt-1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://m.facebook.com/Electronics-Communication-Engineering-Department-SVNIT-Surat-1704224663140554/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "cursor-pointer flex items-center text-gray-600 font-semibold p-1 md:p-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "w-10",
              src: "images/Footer-icons/Facebook-icon.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 227
            }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "hidden md:block",
              children: "Facebook"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 300
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 137
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://instagram.com/svnit.official?igshid=rwlvhryzfii2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "cursor-pointer flex items-center text-gray-600 font-semibold p-1 md:p-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "w-10",
              src: "images/Footer-icons/Instagram-icon.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 182
            }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "hidden md:block",
              children: "Instagram"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 256
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 92
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.linkedin.com/company/s-v-national-institute-of-technology-svnit-surat-nit-surat-",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "cursor-pointer flex items-center text-gray-600 font-semibold p-1 md:p-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "w-10",
              src: "images/Footer-icons/LinkedIn-icon.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 218
            }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "hidden md:block",
              children: "LinkedIn"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 291
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 128
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://twitter.com/NIT_Surat?s=20",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "cursor-pointer flex items-center text-gray-600 font-semibold p-1 md:p-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "w-10",
              src: "images/Footer-icons/Twitter-icon.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 160
            }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "hidden md:block",
              children: "Twitter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 232
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 70
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-gray-800",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "py-3 px-5 text-xs md:text-l text-gray-200 flex justify-center",
        children: "\xA9 2021 Electronics Department , all rights reserved @ National institute of Technology, SURAT "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = Footer;
;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

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

/***/ }),

/***/ "./src/Components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/Components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Header\\Header.js";


function Header() {
  var imageStyle = {
    width: 90,
    heigth: 90
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-gray-200 p-5",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-4 flex flex-row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-span-1 flex justify-center mt-3 md:mb-0",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
            className: "uppercase text-gray-600 font-bold text-xl",
            children: "Electronics Department"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
            className: "uppercase text-gray-600",
            children: " National institute of Technology, SURAT "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-span-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex justify-center text-center md:justify-end",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "images/NIT_Surat_Logo.svg.png",
            style: imageStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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

/***/ }),

/***/ "./src/Components/Home/Home.js":
/*!*************************************!*\
  !*** ./src/Components/Home/Home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageCarousel_ImageCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageCarousel/ImageCarousel */ "./src/Components/Home/ImageCarousel/ImageCarousel.js");
/* harmony import */ var _HomeHeader_HomeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomeHeader/HomeHeader */ "./src/Components/Home/HomeHeader/HomeHeader.js");

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Home\\Home.js";




function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "rounded bg-gray-200 grid grid-cols-1",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HomeHeader_HomeHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ImageCarousel_ImageCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-6 m-4 bg-gray-300 rounded",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        className: "text-2xl text-gray-600 text-bold text-center",
        children: "Department Mission"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-muted text-center text-l",
        children: "The mission of the Electronics Engineering Department is to contribute to society and industry through excellence in education, research, innovations and ethics by stakeholders."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-gray-300 p-6 mx-4 mb-4 rounded",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        className: "text-2xl text-gray-600 text-bold text-center",
        children: "Department Vision"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-muted text-center text-l",
        children: "The vision of the Electronics Engineering Department is to Aim to achieve quality in education and research to create leading Electronics engineers, researchers and entrepreneurs."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

_c = Home;
;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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

/***/ }),

/***/ "./src/Components/Home/HomeHeader/HomeHeader.js":
/*!******************************************************!*\
  !*** ./src/Components/Home/HomeHeader/HomeHeader.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Home\\HomeHeader\\HomeHeader.js";


function HomeHeader() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-gray-300 p-8 mx-4 mt-4 rounded",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-span-1 flex justify-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
          className: "uppercase text-gray-600 text-2xl font-bold",
          children: "Department Virtual Tour"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = HomeHeader;
;
/* harmony default export */ __webpack_exports__["default"] = (HomeHeader);

var _c;

$RefreshReg$(_c, "HomeHeader");

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

/***/ }),

/***/ "./src/Components/Home/ImageCarousel/ImageCarousel.js":
/*!************************************************************!*\
  !*** ./src/Components/Home/ImageCarousel/ImageCarousel.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Croma_Desktop_git_repo_new_repo_CobWeb_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImageSlide_ImageSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageSlide/ImageSlide */ "./src/Components/Home/ImageCarousel/ImageSlide/ImageSlide.js");



var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Home\\ImageCarousel\\ImageCarousel.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Croma_Desktop_git_repo_new_repo_CobWeb_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function ImageCarousel() {
  _s();

  var _this = this;

  var imagesArray = [{
    "imageSrc": "images/ecedImages/eced-1.jpg",
    "key": "1"
  }, {
    "imageSrc": "images/ecedImages/eced-2.jpg",
    "key": "2"
  }, {
    "imageSrc": "images/ecedImages/eced-3.jpg",
    "key": "3"
  }, {
    "imageSrc": "images/ecedImages/eced-4.jpg",
    "key": "4"
  }, {
    "imageSrc": "images/ecedImages/eced-5.jpg",
    "key": "5"
  }, {
    "imageSrc": "images/ecedImages/eced-6.jpg",
    "key": "6"
  }, {
    "imageSrc": "images/ecedImages/eced-7.jpg",
    "key": "7"
  }];
  var slideIndex = 0;

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    showSlides();
  }, [slideIndex]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "mt-4 mx-4 rounded overflow-hidden md:mx-0",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "slideshow-container md:h-96",
      children: imagesArray.map(function (image) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ImageSlide_ImageSlide__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, image), image.id, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "flex justify-center",
      style: {
        textAlignment: "center"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "dot"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "dot"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "dot"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "dot"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "dot"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "dot"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "dot"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }, this);
}

_s(ImageCarousel, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = ImageCarousel;
/* harmony default export */ __webpack_exports__["default"] = (ImageCarousel);

/*#__PURE__*/
Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
  className: "mt-4 mx-4 rounded overflow-hidden md:mx-0",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "slideshow-container h-96 ",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "slide-container mySlides fade",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: " numbertext",
        children: "1 / 3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        className: "slide-image",
        src: "images/ecedImages/3.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 25
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "text",
        children: "Caption Text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "slide-container mySlides fade",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: " numbertext",
        children: "2 / 3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        className: "slide-image",
        src: "images/ecedImages/4.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "text",
        children: "Caption Two"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "slide-container mySlides fade",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: " numbertext",
        children: "3 / 3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        className: "slide-image",
        src: "images/ecedImages/5.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "text",
        children: "Caption Three"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 13
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 21
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "flex justify-center",
    style: {
      textAlignment: "center"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: "dot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: "dot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: "dot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 13
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 92,
  columnNumber: 1
}, undefined);

var _c;

$RefreshReg$(_c, "ImageCarousel");

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

/***/ }),

/***/ "./src/Components/Home/ImageCarousel/ImageSlide/ImageSlide.js":
/*!********************************************************************!*\
  !*** ./src/Components/Home/ImageCarousel/ImageSlide/ImageSlide.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Home\\ImageCarousel\\ImageSlide\\ImageSlide.js";


function ImageSlide(_ref) {
  var imageSrc = _ref.imageSrc;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "slide-container mySlides fade",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: "slide-image",
      src: imageSrc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = ImageSlide;
;
/* harmony default export */ __webpack_exports__["default"] = (ImageSlide);

var _c;

$RefreshReg$(_c, "ImageSlide");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/Components/Loader/Loader.js":
/*!*****************************************!*\
  !*** ./src/Components/Loader/Loader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Loader\\Loader.js";
 // import "../../../style/loader.css";

function Loader() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700  flex flex-col items-center justify-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "text-center text-white text-xl font-semibold",
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "w-1/3 text-center text-white",
        children: "This may take a few seconds, please don't close this page."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

_c = Loader;
;
/* harmony default export */ __webpack_exports__["default"] = (Loader);

var _c;

$RefreshReg$(_c, "Loader");

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

/***/ }),

/***/ "./src/Components/PageLayout/Navbar/Navbar.js":
/*!****************************************************!*\
  !*** ./src/Components/PageLayout/Navbar/Navbar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toggler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggler */ "./src/Components/PageLayout/Navbar/toggler.js");


var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\PageLayout\\Navbar\\Navbar.js",
    _s = $RefreshSig$();




function Navbar() {
  _s();

  var myStyle = {
    width: 20
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_toggler__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "rounded md:col-span-1 m-3 bg-gray-800",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-4 border-b border-gray-100 flex justify-between  md:flex md:justify-center items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-l font-bold  uppercase p-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "text-gray-300 cursor-pointer text-xl hover:text-gray-100",
              children: "Electronics Department"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "px-4 cursor-pointer md:hidden",
            id: "menuButton",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "text-gray-400 h-8 w-8",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M4 6h16M4 12h16M4 18h16"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "text-left hidden md:block",
        id: "menu",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "flex flex-row text-gray-400 text-xl p-6 ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            "class": "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "./",
            className: "hover:text-gray-100",
            children: "\xA0Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 32
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "flex flex-row text-gray-400 text-xl px-6 pb-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            "class": "h-5 w-5",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              fillRule: "evenodd",
              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
              clipRule: "evenodd"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "hover:text-gray-100",
            children: "\xA0About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 31
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "flex flex-row text-gray-400 text-xl px-6 pb-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "images/svgs/People.svg",
            style: myStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "FacultiesPage",
            className: "hover:text-gray-100",
            children: "\xA0Faculties"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 76
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "flex flex-row text-gray-400 text-xl px-6 pb-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "images/svgs/Research.svg",
            style: myStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "hover:text-gray-100",
            href: "ResearchPage",
            children: "\xA0Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 78
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "flex flex-row text-gray-400 text-xl px-6 pb-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "w-6",
            src: "images/svgs/Facilities.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "ResearchFacilities",
            className: "hover:text-gray-100",
            children: "\xA0Facilities"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 80
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

_s(Navbar, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Navbar;
;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

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

/***/ }),

/***/ "./src/Components/PageLayout/Navbar/toggler.js":
/*!*****************************************************!*\
  !*** ./src/Components/PageLayout/Navbar/toggler.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function toggler() {
  var menuButton = document.querySelector("#menuButton");
  var menu = document.querySelector("#menu");
  menuButton.addEventListener('click', function () {
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (toggler);

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

/***/ }),

/***/ "./src/Components/PageLayout/PageLayout.js":
/*!*************************************************!*\
  !*** ./src/Components/PageLayout/PageLayout.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar/Navbar */ "./src/Components/PageLayout/Navbar/Navbar.js");
/* harmony import */ var _Home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Home/Home */ "./src/Components/Home/Home.js");

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\PageLayout\\PageLayout.js";




function PageLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "grid md:grid-cols-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "md:col-span-3 p-3",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

_c = PageLayout;
;
/* harmony default export */ __webpack_exports__["default"] = (PageLayout);

var _c;

$RefreshReg$(_c, "PageLayout");

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

/***/ }),

/***/ "./src/Components/Researches/Data/Data2017_18.js":
/*!*******************************************************!*\
  !*** ./src/Components/Researches/Data/Data2017_18.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var Data2017_18 = [{
  "SrNo": "G 1",
  "ProjectTitle": "CHILD SAFETY WEARABLE DEVICE",
  "RollNo": "U14EC029",
  "StudentName": "BOMMATHULA MADHU SINDURA",
  "ProjectGuide": "Prof. P. K. Shah",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC113",
  "StudentName": "SHAIK KHALIDA PARVEEN",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC099",
  "StudentName": "BOMMINENI YAMINI SARASWATHI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC100",
  "StudentName": "VENIGALLA VINUTHNA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 2",
  "ProjectTitle": "TONGUE CONTROLLED WHEELCHAIR",
  "RollNo": "U14EC001",
  "StudentName": "AVINASH NAYAK",
  "ProjectGuide": "Prof. P. K. Shah",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC012",
  "StudentName": "PRASHANTH YACHURI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC030",
  "StudentName": "SAYAN SAHA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC033",
  "StudentName": "ABHIRUP PANJA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 3",
  "ProjectTitle": "TO ANALYSE REALISTIC G CHANNEL MODELS AND NETWORK",
  "RollNo": "U14EC003",
  "StudentName": "VYAS JATAN NILAY",
  "ProjectGuide": "Prof.(Dr.) U. D. Dalal",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC028",
  "StudentName": "SUTAR SARFARAZ SIRAJBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC106",
  "StudentName": "AITA SINDHU SREE",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC110",
  "StudentName": "GOPI DOSHI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 4",
  "ProjectTitle": "SECURE AND EFFICIENT HANDOVER AUTHENTICATION B",
  "RollNo": "U14EC005",
  "StudentName": "SHAILAJA YELESWARAPU",
  "ProjectGuide": "Prof.(Dr.) U. D. Dalal",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC019",
  "StudentName": "EASHWER SUBRAMANIAM",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC074",
  "StudentName": "DEVARAKONDA SNEHA PRAPURNA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC093",
  "StudentName": "AADITYA KAUL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 5",
  "ProjectTitle": "INDOOR LOCALIZATION USING MACHINE LEARNING AND",
  "RollNo": "U14EC002",
  "StudentName": "PATIL MEDHA MAHESH",
  "ProjectGuide": "Prof.(Dr.) U. D. Dalal",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC046",
  "StudentName": "AASHISH KUMAR MISRAA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC079",
  "StudentName": "PATIL MUGDHA SANJAY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC161",
  "StudentName": "SOURABH DAS",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 6",
  "ProjectTitle": "IRRIGATION SYSTEM USING ZIGBEE",
  "RollNo": "U14EC014",
  "StudentName": "JESEEKA DEVENDRA SHAH",
  "ProjectGuide": "Prof. N. B. Kanirkar",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC016",
  "StudentName": "YESHA HARISH GONDALIA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC135",
  "StudentName": "AMEY MISHRA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC138",
  "StudentName": "VIKRANT SINGH SHOERAN",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 7",
  "ProjectTitle": "RFID BASED ATTENDANCE SYSTEM WITH SMS NOTIFICATI",
  "RollNo": "U14EC013",
  "StudentName": "TANVI P KURLEKAR",
  "ProjectGuide": "Prof. N. B. Kanirkar",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC017",
  "StudentName": "ARUSA RAYEES AHMED KHALFAY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC069",
  "StudentName": "MATHUR RAHUL KAILASHBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC073",
  "StudentName": "JAGARAPU ROHITH KUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 8",
  "ProjectTitle": "RESTAURANTS AUTOMATION USING ZIGBEE",
  "RollNo": "U14EC006",
  "StudentName": "FAZAL FIROZSHAH DIWAN",
  "ProjectGuide": "Prof. N. B. Kanirkar",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC091",
  "StudentName": "AMIJEET KUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC095",
  "StudentName": "MISTRY JIMIT VIPUL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC096",
  "StudentName": "ANUGRAH NIMAVAT",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 9",
  "ProjectTitle": "HOME AUTOMATION SYSTEM USING WIFI MODULE",
  "RollNo": "U14EC021",
  "StudentName": "PAGA RANI",
  "ProjectGuide": "Prof. N. B. Kanirkar",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC035",
  "StudentName": "MEENA NITAKUMARI GHANSHYAM",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC042",
  "StudentName": "SAROJ MAMTA KUBERRAM",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC047",
  "StudentName": "CHAUHAN MEGHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 10",
  "ProjectTitle": "VEHICLE ACCIDENT G DETECTION, REPORTING AND NAVIG",
  "RollNo": "U14EC070",
  "StudentName": "PERUMALLA KOTESWARA RAO",
  "ProjectGuide": "Dr. J. N. Sarvaiya",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC071",
  "StudentName": "TANGIRALA AKHIL REDDY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC098",
  "StudentName": "CHALLAPALLI PRAMOD",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC149",
  "StudentName": "NITESH PRABHAKARAN NAIR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 11",
  "ProjectTitle": "FEATURE EXTRACTION FOR IMAGE REGISTRATION",
  "RollNo": "U14EC023",
  "StudentName": "GUTTA RAMYA",
  "ProjectGuide": "Dr. J. N. Sarvaiya",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC053",
  "StudentName": "CHOPPARAPU SAI AKHIL",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC064",
  "StudentName": "BODDAPATI SRAVANI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC150",
  "StudentName": "BILKISH ARA NAIKODI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 12",
  "ProjectTitle": "G ROS BASED ROBOTIES SYSTEM",
  "RollNo": "U14EC112",
  "StudentName": "NAIVEDH JAIN",
  "ProjectGuide": "Prof. (Dr.) A. D. Darji",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC117",
  "StudentName": "RAHUL GUNKAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC119",
  "StudentName": "KARTIK",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC134",
  "StudentName": "T SANDEEP",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 13",
  "ProjectTitle": "PHYSIOLOGICAL SIGNAL MONITORING SYSTEM",
  "RollNo": "U14EC104",
  "StudentName": "MEHTA AMI CHETANKUMAR",
  "ProjectGuide": "Prof. (Dr.) A. D. Darji",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC115",
  "StudentName": "SHAH AMOLI RAJESHBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC118",
  "StudentName": "GOPI KAMLESH PATEL",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC132",
  "StudentName": "BHATT SEJAL HEMANT",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 14",
  "ProjectTitle": "L AND S BAND MICROWAVE G MONOLITHIC INTEGRATED CI",
  "RollNo": "U14EC043",
  "StudentName": "MARABATHULA VENKAT NIKHIL",
  "ProjectGuide": "Dr. P. N. Patel",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC051",
  "StudentName": "KATTA SIVARAM",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC083",
  "StudentName": "ADEPU VINEETH KUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC085",
  "StudentName": "PALEPU PUNEETH HOTHRA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 15",
  "ProjectTitle": "VOICE G CONTROLLED HOME APPLICATION",
  "RollNo": "U14EC008",
  "StudentName": "KOR PARAS MERAMBHAI",
  "ProjectGuide": "Prof. Z. M. Patel",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC010",
  "StudentName": "BHUVA BRIJESHKUMAR RAMANIKBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC020",
  "StudentName": "SADHU MAYANK DIPAKBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC022",
  "StudentName": "GOHIL KARANKUMAR HASMUKHBHAIs",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 16",
  "ProjectTitle": "ARM PROCESSOR BASED REAL TIME CAR THEFT DECLINE",
  "RollNo": "U14EC025",
  "StudentName": "VEERAPUREDDY SAI PUNEETH REDDY",
  "ProjectGuide": "Prof. Z. M. Patel",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC038",
  "StudentName": "SIDDULA JAIDEEP",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC066",
  "StudentName": "DIVI YASWANTH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC163",
  "StudentName": "BUSIREDDY SHANTAN KUMAR REDDY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 17",
  "ProjectTitle": "ENVIRONMENT MONITORING ANT ALERT BY INTELLIGEN",
  "RollNo": "U14EC114",
  "StudentName": "PARMAR DHAWALKUMAR PARESHKUMAR",
  "ProjectGuide": "Dr. Z. M. Patel",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC143",
  "StudentName": "RAKHOLIYA SHRADDHABEN DILIPBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC145",
  "StudentName": "MADHURIMA DAS",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC147",
  "StudentName": "JUWAN HETTIARACHCHIGE RANDIKA LAKSHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 18",
  "ProjectTitle": "FACE RECOGNITION USING FPGA",
  "RollNo": "U14EC063",
  "StudentName": "BOPPA NAGA SUJITH",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC072",
  "StudentName": "INTHA AKHIL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC081",
  "StudentName": "KELLA CHAITANYA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC084",
  "StudentName": "MANISH MEENA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 19",
  "ProjectTitle": "IMAGE PROCESSING USING EMBEDDED SYSTEMS",
  "RollNo": "U14EC090",
  "StudentName": "KORIVI THIMMAGURUDU",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC105",
  "StudentName": "KUNCHALA JAYA NAGA SAI BHARGAV",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC107",
  "StudentName": "SAKE JAYASAIKRISHNA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC108",
  "StudentName": "PALLERLA RAMAKANTH REDDY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 20",
  "ProjectTitle": "IOT BASED HOME AUTOMATION SYSTEM",
  "RollNo": "U14EC103",
  "StudentName": "NEHA VERMA",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC124",
  "StudentName": "AYUSH LABH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC126",
  "StudentName": "LALIT RANKAWAT",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC129",
  "StudentName": "PATEL FORUMBEN SUMANBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 21",
  "ProjectTitle": "FPGA BASED REAL TIME SYSTEM",
  "RollNo": "U14EC121",
  "StudentName": "NGARG ADITI RATANLAL",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC136",
  "StudentName": "VAIJANAPURKAR SHAMBHAVI SANJIV",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC141",
  "StudentName": "AMOLPRATAP RAJESH SINGH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC152",
  "StudentName": "BHANU ANNAPOORNA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 22",
  "ProjectTitle": "IMPLEMENTATION OF G SINEWAVE GENERATOR FOR BIOIM",
  "RollNo": "U14EC045",
  "StudentName": "AKKELA SAIKRISHNA",
  "ProjectGuide": "Dr.(Mrs.) R. N. Dhavse",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC058",
  "StudentName": "REDDY KANCHANA GANGA BHAVANI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC059",
  "StudentName": "PENUMARTHI AISHWARYA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC067",
  "StudentName": "BHAI HARISH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 23",
  "ProjectTitle": "SMART BAND",
  "RollNo": "U14EC155",
  "StudentName": "TEJASWINI SANDAPOLLA",
  "ProjectGuide": "Dr. A. S. Mandloi",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC157",
  "StudentName": "AERRA RAMYA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC159",
  "StudentName": "MYNENI CHARISHMA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC164",
  "StudentName": "SAMINENI POOJA PRAVALLIKA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 24",
  "ProjectTitle": "LINEAR G DETECTION TECHNIQUES FOR MIMO SYSTEMS",
  "RollNo": "U14EC077",
  "StudentName": "NAKIRAKOMMULA MANISH",
  "ProjectGuide": "Dr.(Mrs.) S. Gupta",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC088",
  "StudentName": "KARRI ESWAR NAGA AYYAPPA REDDY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC154",
  "StudentName": "DRONA KUMAR DEKONDA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC156",
  "StudentName": "KAVERI DINESH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 25",
  "ProjectTitle": "FPGA IMPLEMENTATION OF RS CODE",
  "RollNo": "U14EC040",
  "StudentName": "AINAMPUDI SUSMITHA",
  "ProjectGuide": "Dr.(Mrs.) S. Gupta",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC075",
  "StudentName": "RAMIREDDY AMRUTHA VARSHINI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC078",
  "StudentName": "NIKHITA MADHUSUDAN BHOOPATI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC080",
  "StudentName": "KANTAMNENI GEETHIKA VARSHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 26",
  "ProjectTitle": "PATCH ANTENNA",
  "RollNo": "U14EC011",
  "StudentName": "BHINGARDE SAHIL RAJESH",
  "ProjectGuide": "Prof. G. Santra",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC061",
  "StudentName": "DHUPAM NAVEEN",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC087",
  "StudentName": "THOTAPALLI NAVEEN",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC153",
  "StudentName": "NAIR KARTHIK MURALI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 27",
  "ProjectTitle": "VEHICLE TRACKING USING GPS-GSM",
  "RollNo": "U13EC102",
  "StudentName": "CHITRODA SANJAYKUMAR KANTIBHAI",
  "ProjectGuide": "Prof. G. Santra",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U13EC147",
  "StudentName": "MUZAMEL",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC101",
  "StudentName": "AASHLESH PATEL",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC116",
  "StudentName": "RANA VIRAJ DHARMENDRA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 28",
  "ProjectTitle": "WIRELESS ELECTRICITY G CONSUMPTION METER USING GS",
  "RollNo": "U14EC039",
  "StudentName": "DIVYAM FATEHPURIA",
  "ProjectGuide": "Dr.(Mrs.) J. N. Patel",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC062",
  "StudentName": "UJJWAL KUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC102",
  "StudentName": "PRAJAPATI MAHIPAL ISHVARBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC148",
  "StudentName": "SHIVAM TANDON",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 29",
  "ProjectTitle": "IMAGE CONTROLLED ROBOT LOCALIZATION AND NAVIGA",
  "RollNo": "U14EC031",
  "StudentName": "COMANDUR RAJASEKHAR KARTHIK",
  "ProjectGuide": "Dr.(Mrs.) J. N. Patel",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC036",
  "StudentName": "POTTIGARI SACHIN MOHAN",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC076",
  "StudentName": "GUNDABOINA RANJITH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC160",
  "StudentName": "RAM RADESH DAVULURI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 30",
  "ProjectTitle": "SIMULATION BASED G STUDY OF VARIOUS SENSORS REQUI",
  "RollNo": "U14EC050",
  "StudentName": "GARAPATI SAI TEJA",
  "ProjectGuide": "Dr. K. P. Upla",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC082",
  "StudentName": "BALIVADA S S NAGAVALLI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC092",
  "StudentName": "GOPISETTI KAVITHA BABY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U14EC097",
  "StudentName": "SIDDAPURAM NIHARIKA",
  "ProjectGuide": "",
  "color": "1"
}];
/* harmony default export */ __webpack_exports__["default"] = (Data2017_18);

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

/***/ }),

/***/ "./src/Components/Researches/Data/Data2018_19.js":
/*!*******************************************************!*\
  !*** ./src/Components/Researches/Data/Data2018_19.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var Data2019_20 = [{
  "SrNo": "G 1",
  "ProjectTitle": "SPEECH RECOGNITION USING DEEP LEARNING",
  "RollNo": "U16EC091",
  "StudentName": "MANNAM VIJAY",
  "ProjectGuide": "Prof. P. K. Shah",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC096",
  "StudentName": "THAMMINENI YASWANTH KUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC103",
  "StudentName": "M S SYAM SUNDAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC129",
  "StudentName": "KHAZI MAHAMMAD SAZID",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 2",
  "ProjectTitle": "outage analysis & optimal power allocation for downlink non-orthogonal multiple access (noma)",
  "RollNo": "U16EC024",
  "StudentName": "SHAH RAJ DHAVALBHAI",
  "ProjectGuide": "Prof. A. H. Lalluwadia",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC037",
  "StudentName": "SATISH SHINGRAKHIYA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC043",
  "StudentName": "PRANJAL AGRAWAL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC045",
  "StudentName": "SHIVANSH AGARWAL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 3",
  "ProjectTitle": "COAL MINERS' SAFETY MONITORING SYSTEM",
  "RollNo": "U16EC007",
  "StudentName": "SHREAYA A",
  "ProjectGuide": "Prof. A. H. Lalluwadia",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC008",
  "StudentName": "MANASA KOTHA",
  "ProjectGuide": "Co-Guide : Prof. P. K. Shah",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC010",
  "StudentName": "MOXA ALPESH PATEL",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC035",
  "StudentName": "ANKITA BAKSHI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 4",
  "ProjectTitle": "IoT BASED VOICE CONTROL OF HOME APPLIANCES)",
  "RollNo": "U16EC083",
  "StudentName": "PATEL ANKURKUMAR NARESHBHAI",
  "ProjectGuide": "Prof. A. H. Lalluwadia",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC085",
  "StudentName": "BOGHARA JENILKUMAR DINESHBHAI",
  "ProjectGuide": "Co-Guide : Prof. P. K. Shah",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC100",
  "StudentName": "PARMAR MALAY KALPESH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC118",
  "StudentName": "MEHTA KUSHAL JYOTINBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 5",
  "ProjectTitle": "FLASH SLOOD INTIMATION OVER GSM NETWORK",
  "RollNo": "U14EC007",
  "StudentName": "SHUBHANKAR TOMAR",
  "ProjectGuide": "Prof. A. H. Lalluwadia",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U13EC031",
  "StudentName": "PATEL APEKSHABEN ANILBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U13EC037",
  "StudentName": "KU RAJNI MEENA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U135EC122",
  "StudentName": "SUDHA CHAUDHARY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 6",
  "ProjectTitle": "Design and development of sensor node for food supply chain management",
  "RollNo": "U16EC084",
  "StudentName": "SARIKHADA MANSI RAMJI",
  "ProjectGuide": "Dr. (Mrs.) U. D. Dalal",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC090",
  "StudentName": "SIRIPROLU SAI PRANAV",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC114",
  "StudentName": "SURELIYA BANSIBEN DINESHBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 7",
  "ProjectTitle": "Simulation and analysis of wearble antenna for different fabric materials",
  "RollNo": "U16EC101",
  "StudentName": "VAMANA RAVINDRA",
  "ProjectGuide": "Dr. (Mrs.) U. D. Dalal",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC107",
  "StudentName": "VEMULAPALLI PAVAN SAI GANESH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC108",
  "StudentName": "T SRINIVASA VARA CHAKRAVARTHY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "",
  "StudentName": "UGIRI SAI SAGAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 8",
  "ProjectTitle": "Evaluate dielectric constant of different fabrics using solid dieletric cell",
  "RollNo": "U16EC104",
  "StudentName": "CHEVULAMADDI NAVEEN",
  "ProjectGuide": "Dr. (Mrs.) U. D. Dalal",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC106",
  "StudentName": "NAMALIDEVI BHARATH RAJ",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC127",
  "StudentName": "R GANESH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC135",
  "StudentName": "KATHAD DHAVAL CHHAGANBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 9",
  "ProjectTitle": "IoT based plant & soil monitoring system",
  "RollNo": "U16EC027",
  "StudentName": "JARIWALA DEEP ASHISH",
  "ProjectGuide": "Prof. N. B. Kanirkar",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC057",
  "StudentName": "RAJAT KUMAR PANIGRAHI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC061",
  "StudentName": "CHOUHAN MONU HORILAL",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC140",
  "StudentName": "SHAH KAUSTUBH MANISH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 10",
  "ProjectTitle": "IoT based patient monitoring system",
  "RollNo": "U16EC122",
  "StudentName": "ABHISHEK RAJAN",
  "ProjectGuide": "Prof. N. B. Kanirkar",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC131",
  "StudentName": "ARYAN SINGH AHLAWAT",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC143",
  "StudentName": "NITISH RANA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 11",
  "ProjectTitle": "Hand written character recognition using machine learning",
  "RollNo": "U16EC040",
  "StudentName": "MARTY VENKATA HANUMATH SAI HARSHIT",
  "ProjectGuide": "Dr. J. N. Sarvaiya",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC041",
  "StudentName": "KATTAMURI SAI MANI SWETHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC047",
  "StudentName": "KODURI APARNA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC048",
  "StudentName": "MAKINEDI VASAVI DEVI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 12",
  "ProjectTitle": "IoT BASED SMART HOME",
  "RollNo": "U16EC086",
  "StudentName": "KOYA SRINATH",
  "ProjectGuide": "Dr. J. N. Sarvaiya",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC089",
  "StudentName": "TANNIRU VINOD KUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC141",
  "StudentName": "ATCHI SREEHARSHA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "",
  "StudentName": "NANDIPATI VENKATA SAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 13",
  "ProjectTitle": "AUTONOMOUS AGRICULTURAL ROBOT",
  "RollNo": "U16EC053",
  "StudentName": "PATEL DHRUV RAJENDRAKUMAR",
  "ProjectGuide": "Dr. A. D. Darji",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC056",
  "StudentName": "GANDHI MEET JAYENDRAKUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC074",
  "StudentName": "SHANKARANARAYANAN H",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 14",
  "ProjectTitle": "SMART ATTENDANCE SYSTEM",
  "RollNo": "U16EC002",
  "StudentName": "RAVEENA MORESHWAR VINCHURKAR",
  "ProjectGuide": "Dr. A. D. Darji",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC038",
  "StudentName": "SHASHWATI ASTHANA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC109",
  "StudentName": "BHANANI MILIE PIYUSH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC113",
  "StudentName": "NANDINI UPADHYAYA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 15",
  "ProjectTitle": "E-WRITING USING ARM MICROCONTROLLER",
  "RollNo": "U16EC076",
  "StudentName": "DEPANI BHUMIL RAJNIKANTBHAI",
  "ProjectGuide": "Dr. A. D. Darji",
  "color": "0"
}, {
  "SrNo": "G 16",
  "ProjectTitle": "Design and performance analysis of e-textile antenna",
  "RollNo": "U16EC003",
  "StudentName": "NIKITA NILESH MISTRY",
  "ProjectGuide": "Dr. P. N. Patel",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC004",
  "StudentName": "NIKHITA PRAVIN MORE",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC069",
  "StudentName": "KASHMIRA PRADIP GHOM",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 17",
  "ProjectTitle": "Performance analysis of kretschmann configuration based single-layered spr system",
  "RollNo": "U16EC030",
  "StudentName": "CHERUKURI PRASANTH",
  "ProjectGuide": "Dr. P. N. Patel",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC063",
  "StudentName": "PAKALAPATI RAVI KUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC065",
  "StudentName": "ANAPARTHI MANI DEEPAK KUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "",
  "StudentName": "B VISHNUDATH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 18",
  "ProjectTitle": "Health monitoring system",
  "RollNo": "U16EC088",
  "StudentName": "BEZAWADA POOJITHA",
  "ProjectGuide": "Dr. Z. M. Patel",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC092",
  "StudentName": "S HARI CHANDANA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC095",
  "StudentName": "KONARI JOSHNA REDDY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC098",
  "StudentName": "MADEM GURU LAKSHMI DEVI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 19",
  "ProjectTitle": "Intelligent accident detection and alerting system",
  "RollNo": "U16EC110",
  "StudentName": "VANGALA ANOOSHA",
  "ProjectGuide": "Dr. Z. M. Patel",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC116",
  "StudentName": "VELLORE TINA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC117",
  "StudentName": "KOPPALLI NAGA SRAVYA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC121",
  "StudentName": "IJJADA NIKITHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 20",
  "ProjectTitle": "Autonomous robot for industrial application",
  "RollNo": "U16EC009",
  "StudentName": "MAUSAM JIGNESHKUMAR PATEL",
  "ProjectGuide": "Dr. Z. M. Patel",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC013",
  "StudentName": "ASMITA JOHRI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC014",
  "StudentName": "SHREYA ASHOK AGARWAL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC018",
  "StudentName": "PANKTI RAJESH SHAH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 21",
  "ProjectTitle": "NLP CHATBOT",
  "RollNo": "U16EC058",
  "StudentName": "CHINTAPALLI DHARMENDRA",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC068",
  "StudentName": "DHULIPALA SRIMANIKANTA PARTHUSIVAIN",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC073",
  "StudentName": "MACHERLA KIRAN KUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC075",
  "StudentName": "TALLURI NAGASAI VENKATA SUDHEER",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 22",
  "ProjectTitle": "IoT BASED PARKING SLOT MANAGEMENT",
  "RollNo": "U16EC071",
  "StudentName": "CHINNAM SRI HARINI",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC077",
  "StudentName": "KONDA KEERTHI REDDY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC079",
  "StudentName": "MALIGIREDDY AMULYA REDDY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC082",
  "StudentName": "LEKKALA LEELA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 23",
  "ProjectTitle": "IoT BASED SMART AGRICULTURE",
  "RollNo": "U16EC028",
  "StudentName": "BOYA SRI RASHMITHA",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC054",
  "StudentName": "PULAKAM MALATHI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC055",
  "StudentName": "ANUPAMA RUDRA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC066",
  "StudentName": "DUVVA NIHARIKA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 24",
  "ProjectTitle": "Hand written digit recognition system using fpga",
  "RollNo": "U16EC011",
  "StudentName": "SAHAY RAJ TIRKEY",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC022",
  "StudentName": "YADAV SUDHANSHUSINH RAMRAJSINH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC032",
  "StudentName": "KURAPATI PRADEEP MANIKANTA SAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 25",
  "ProjectTitle": "DETERMINISTIC SYSTEM FOR SMART AGRICULTURE USING IoT",
  "RollNo": "U16EC025",
  "StudentName": "SALONI NAYAN JAIN",
  "ProjectGuide": "Dr. A. S. Mandloi",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC059",
  "StudentName": "RIDDHI MORE",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC060",
  "StudentName": "BHAGAVATH RACHANA RAMAKANTH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC072",
  "StudentName": "ANURADHA G",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 26",
  "ProjectTitle": "Distance measurement for blind people",
  "RollNo": "U16EC102",
  "StudentName": "GOURAV DAS",
  "ProjectGuide": "Dr. A. S. Mandloi",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC112",
  "StudentName": "RAVI MENARIA",
  "ProjectGuide": "Co-Guide : Prof. P. K. Shah",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC119",
  "StudentName": "KARAN LOONKER",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC120",
  "StudentName": "SIDDHARTH KHETAN",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 27",
  "ProjectTitle": "Smart garbage monitoring & system",
  "RollNo": "U16EC049",
  "StudentName": "PATEL KRUTI VIPUL",
  "ProjectGuide": "Dr.(Mrs.) S. Gupta",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC052",
  "StudentName": "CONTRACTOR JANKI KISHOR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC099",
  "StudentName": "MUSKAN CHOTRANI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC138",
  "StudentName": "KEYA PARIDA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 28",
  "ProjectTitle": "Detection of hazardous gases using iot",
  "RollNo": "U15EC016",
  "StudentName": "CHARPOT KRUNAL FULJIBHAI",
  "ProjectGuide": "Dr.(Mrs.) S. Gupta",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC128",
  "StudentName": "PARTH KALANI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC136",
  "StudentName": "PRIYANKKUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC139",
  "StudentName": "MERCHANT RUKSHIT MANISHKUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 29",
  "ProjectTitle": "Dual band circularly polarized annular ring slot antenna",
  "RollNo": "U16EC001",
  "StudentName": "NIHAR MANOJ PANVALKAR",
  "ProjectGuide": "Dr.(Mrs.) S. Gupta",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC005",
  "StudentName": "MRINAL LAKHERA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC020",
  "StudentName": "SARONIA VISHAL JAYESH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC023",
  "StudentName": "JOSHI DARSHIT KETANBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 31",
  "ProjectTitle": "Mobile app controlled metal detecctor",
  "RollNo": "U16EC039",
  "StudentName": "BONGU VENKATESH",
  "ProjectGuide": "Prof.(Mrs.) S. N. Shah",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC046",
  "StudentName": "AITTLA SAINATH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC050",
  "StudentName": "MUDDAGONI KALYAN GOUD",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC124",
  "StudentName": "GUDELLI BHASKAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 32",
  "ProjectTitle": "Text to image synthesis using gans",
  "RollNo": "U16EC015",
  "StudentName": "SAMPAT MANSI ANIL",
  "ProjectGuide": "Dr. K. P. Upla",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC016",
  "StudentName": "PATEL PARTHAV SUMANTRAI",
  "ProjectGuide": "Co-Guide : Dr. Kirti Inamdar",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC029",
  "StudentName": "DHARAIYA KRUTI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC067",
  "StudentName": "ABHINAV JAIN",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 33",
  "ProjectTitle": "Control of quadcopter using hand gestures",
  "RollNo": "U16EC097",
  "StudentName": "PRAJVAL K N",
  "ProjectGuide": "Dr. K. P. Upla",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC123",
  "StudentName": "SAI KAUSHIK KANDUKURI",
  "ProjectGuide": "Co- Guide : Dr. Kamal Captain",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC137",
  "StudentName": "PRATHAKOTA SAM NITHIN CHOCKCEE",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC142",
  "StudentName": "BITLA BHANU TEJA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 34",
  "ProjectTitle": "Video deblurring using deeplearning",
  "RollNo": "U16EC080",
  "StudentName": "PULIPATI SHARATHKUMAR",
  "ProjectGuide": "Prof. K. P. Upla",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC081",
  "StudentName": "TIPIREDDY THARUN REDDY",
  "ProjectGuide": "Co-Guide : Dr. J. N. Sarvaiya",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC087",
  "StudentName": "YAMANI BHARATHKUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U16EC093",
  "StudentName": "RACHURI AJAY KUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "",
  "StudentName": "",
  "ProjectGuide": "",
  "color": ""
}, {
  "SrNo": ""
}];
/* harmony default export */ __webpack_exports__["default"] = (Data2019_20);

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

/***/ }),

/***/ "./src/Components/Researches/Data/Data2019_20.js":
/*!*******************************************************!*\
  !*** ./src/Components/Researches/Data/Data2019_20.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var Data2018_19 = [{
  "SrNo": "G 1",
  "ProjectTitle": "PERSONAL ASSISTANT ROBOT",
  "RollNo": "U15EC025",
  "StudentName": "BHANDARI MAYANK BHUPALSINGH",
  "ProjectGuide": "Prof. P. K. Shah",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC061",
  "StudentName": "JALASUTRAM GIRISH KALYAN",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC069",
  "StudentName": "CHITTIMALLA SANTHOSH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC094",
  "StudentName": "KARNATI NAGA KIRAN REDDY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 2",
  "ProjectTitle": "CAR PARKING CONTROLLER",
  "RollNo": "U15EC026",
  "StudentName": "MANDALAYWALA UMANG SUNILKUMAR",
  "ProjectGuide": "Prof. P. K. Shah",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC027",
  "StudentName": "GANDHI JAY NIRAVBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC028",
  "StudentName": "RAHUL GUPTA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC040",
  "StudentName": "YADAV OMPRAKASH NANDLAL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 3",
  "ProjectTitle": "REAL TIME AUTOMATION IN AGRICULTURE",
  "RollNo": "U15EC082",
  "StudentName": "GOPISETTY SAI KIRAN",
  "ProjectGuide": "Prof. P. K. Shah",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC089",
  "StudentName": "SARASWATHULA VENKATA SAI SRI HARSHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC095",
  "StudentName": "ARIKATLA VISHNU VARDHAN REDDY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC146",
  "StudentName": "KAMBALA MAHESH RAJA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 4",
  "ProjectTitle": "SMART ENVIRONMENT CONTROL IN GREEN HOUSE",
  "RollNo": "U15EC101",
  "StudentName": "ARADHYA BHATIA",
  "ProjectGuide": "Prof. A. H. Lalluwadia",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC115",
  "StudentName": "VAGH DHAVALKUMAR RAHULBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC116",
  "StudentName": "AMAN BHARTI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC143",
  "StudentName": "AGARWAL PRAERIT PIYUSH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 5",
  "ProjectTitle": "FLASH SLOOD INTIMATION OVER GSM NETWORK",
  "RollNo": "U14EC007",
  "StudentName": "SHUBHANKAR TOMAR",
  "ProjectGuide": "Prof. A. H. Lalluwadia",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U13EC031",
  "StudentName": "PATEL APEKSHABEN ANILBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U13EC037",
  "StudentName": "KU RAJNI MEENA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U135EC122",
  "StudentName": "SUDHA CHAUDHARY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 6",
  "ProjectTitle": "AUTOMATIC WAITER IN RESTAURANTS",
  "RollNo": "U15EC038",
  "StudentName": "AJMEERA ASHOK",
  "ProjectGuide": "Prof. A. H. Lalluwadia",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC147",
  "StudentName": "GAZULA SRINIVAS BAPAIAH NAIDU",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC148",
  "StudentName": "BANDARU SURESH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC151",
  "StudentName": "GUDAPATI NAGA MANIKANTA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 7",
  "ProjectTitle": "TRAFFIC DENSITY BASED SYSTEM",
  "RollNo": "U15EC076",
  "StudentName": "PETLU RAJ KUMAR",
  "ProjectGuide": "Prof. A. H. Lalluwadia",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC123",
  "StudentName": "MALI HARISH KUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC125",
  "StudentName": "MADHA MANIDEEP",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC149",
  "StudentName": "KONAKALLA DURGA PRASAD",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 8",
  "ProjectTitle": "PHYSICAL LAYER FOR VANET",
  "RollNo": "U15EC005",
  "StudentName": "PRAYAS PATNAIK",
  "ProjectGuide": "Dr. (Mrs.) U. D. Dalal",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC045",
  "StudentName": "POTHUR BHAVANA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC079",
  "StudentName": "KASAM NIKHITHA REDDY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC080",
  "StudentName": "JAY PATEL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 9",
  "ProjectTitle": "PHYSICAL LAYER IMPLEMENTATION OF IEEE 802.11ah",
  "RollNo": "U15EC064",
  "StudentName": "RACHAMALLU THANMAI",
  "ProjectGuide": "Dr. (Mrs.) U. D. Dalal",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC065",
  "StudentName": "MARKAPURAM KAVITHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC138",
  "StudentName": "DUBASI YASHWANTH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC145",
  "StudentName": "EDULAPALLI KEERTHI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 10",
  "ProjectTitle": "NETWORK SELECTION AND CHANNEL ALLOCATION FOR S",
  "RollNo": "U15EC054",
  "StudentName": "YERRAGUDI HAVEELAH",
  "ProjectGuide": "Dr. (Mrs.) U. D. Dalal",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC067",
  "StudentName": "PALLERLA KEERTHANA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC085",
  "StudentName": "PALLERLA SAI TEJA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC088",
  "StudentName": "KRISTAM RAJITHA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 11",
  "ProjectTitle": "VIRTUAL IMPLEMENTATION OF NON-ORTHOGONAL MULT",
  "RollNo": "U15EC010",
  "StudentName": "BIDURU YUKTI SRIKANTH",
  "ProjectGuide": "Dr. (Mrs.) U. D. Dalal",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC013",
  "StudentName": "SAUMYA SHRIVASTAVA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC019",
  "StudentName": "ABHILASHA PODDAR AKSHAY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC108",
  "StudentName": "SHIKHA CHAUDHARY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 12",
  "ProjectTitle": "METAL DETECTION ROBOTIC VEHICLE USING ARDUINO",
  "RollNo": "U15EC022",
  "StudentName": "HARSHIKA SUBASHI MAHENDIRAN",
  "ProjectGuide": "Prof. N. B. Kanirkar",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC058",
  "StudentName": "MANVAR PRASHANT SATISHBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC066",
  "StudentName": "PATEL MINNAT PRAVINBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC131",
  "StudentName": "RACHAMALLA NITIN",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 13",
  "ProjectTitle": "IOT BASED HOME AUTOMATION",
  "RollNo": "U15EC077",
  "StudentName": "MEESALA RATAN BABU",
  "ProjectGuide": "Dr. J. N. Sarvaiya",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC090",
  "StudentName": "ALUGANTI VINAY T HEJA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC098",
  "StudentName": "BODEM MANIKANTAL",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC100",
  "StudentName": "DOMMARAJU MAHESH VARMA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 14",
  "ProjectTitle": "NEURAL NETWORK G ON FPGA FOR BIOMEDICAL APPLICATI",
  "RollNo": "U15EC003",
  "StudentName": "TALATI ARTH ASHISH",
  "ProjectGuide": "Dr. A. D. Darji",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC004",
  "StudentName": "KASUNDRA HASTI JITENDRA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC012",
  "StudentName": "MODI SAHIL KAUSHIKKUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC071",
  "StudentName": "MODI ANAND RAJESH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 15",
  "ProjectTitle": "BRAIN COMPUTER INTERFACING",
  "RollNo": "U15EC075",
  "StudentName": "PRIYANSHI GUPTA",
  "ProjectGuide": "Dr. A. D. Darji",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC117",
  "StudentName": "SANJANA DHIRAN",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC120",
  "StudentName": "NAGMA PATEL",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC142",
  "StudentName": "PRIYANSHU DALAL",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 16",
  "ProjectTitle": "DESIGN AND IMPLEMENTATION OF OPTICAL COMMUNICA",
  "RollNo": "U15EC107",
  "StudentName": "JAIN PRIYA SANDEEP",
  "ProjectGuide": "Dr. P. N. Patel",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC111",
  "StudentName": "PALSETKAR KEWALKUMAR BHUPENDRA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC112",
  "StudentName": "MITHANI ADIL IQBAL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC113",
  "StudentName": "BAMANIA HELI AMRUTLAL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 17",
  "ProjectTitle": "PERFORMANCE ANALYSIS OF OPTICAL SYSTEM USING OP",
  "RollNo": "U15EC118",
  "StudentName": "YADAV AMITKUMAR RAMESHCHANDRA",
  "ProjectGuide": "Dr. P. N. Patel",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC119",
  "StudentName": "SANJEEV KUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC127",
  "StudentName": "RAHUL KANAUJIYA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC128",
  "StudentName": "SHRIMALI RAHUL GOVINDBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 18",
  "ProjectTitle": "INTELLIGENT SYSTEM FOR VEHICALAR ACCIDENT DETEC",
  "RollNo": "U15EC042",
  "StudentName": "PULLOORI HARINIKA",
  "ProjectGuide": "Dr. Z. M. Patel",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC043",
  "StudentName": "PATHAKOTA JAYAPAVANI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC048",
  "StudentName": "KATA TARUN SREE",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC052",
  "StudentName": "ANKAM MADHUSREE",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 19",
  "ProjectTitle": "IOT BASED INTELLIGENT PARKING SYSTEM",
  "RollNo": "U15EC086",
  "StudentName": "RISHITHA NAGAREDDY",
  "ProjectGuide": "Dr. Z. M. Patel",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC092",
  "StudentName": "RAVILLA SRI ASHA LATHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC096",
  "StudentName": "GAJARLA RASHMITHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC099",
  "StudentName": "PANGULURI LAKSHMI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 20",
  "ProjectTitle": "STEREO USING ALGORITHM ON FPGA",
  "RollNo": "U15EC007",
  "StudentName": "DESAI KRUPA AMBRISHBHAI",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC014",
  "StudentName": "PURVIK KALARIYA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC036",
  "StudentName": "UMRETHWALA KAISHAVI HIRENKUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC039",
  "StudentName": "RATHOD ABHISHEK RAMESHBHAI",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 21",
  "ProjectTitle": "",
  "RollNo": "U15EC044",
  "StudentName": "CHERUKURI SRI HARIKA",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC049",
  "StudentName": "C AKHIL CHOWDARY",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC070",
  "StudentName": "KOTIPALLI SAI SARAN KRISHNA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC074",
  "StudentName": "RAVATHU AMOOLYA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 22",
  "ProjectTitle": "HARDWARE AND SOFTWARE CO-DESIGN OF FACE RECOG",
  "RollNo": "U15EC055",
  "StudentName": "VAKATI AKHILESH",
  "ProjectGuide": "Prof. P. J. Engineer",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC059",
  "StudentName": "KURAPATI BHANURAJA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC072",
  "StudentName": "SEELAM PRIYADHARSHAN REDDY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC073",
  "StudentName": "LAKKISETTY PRUDHVI RAJ",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 23",
  "ProjectTitle": "IOT BASED SMART VEHICLE",
  "RollNo": " CONTROL MUTUALLY ENHA",
  "StudentName": "U15EC050",
  "ProjectGuide": "HARSHVARDHAN S DHAKER",
  "color": "Dr. A. S. Mandloi"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC057",
  "StudentName": "NABANITA DEWAN",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC060",
  "StudentName": "VADUKUL RISHI MANSUKHBHAI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC063",
  "StudentName": "THOBHANI AMIT DILIPKUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 24",
  "ProjectTitle": "PEMPARATURE AND HUMIDITY MONITORING FOR UNDER",
  "RollNo": "U15EC021",
  "StudentName": "SAMIR POUDEL",
  "ProjectGuide": "Dr. A. S. Mandloi",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC046",
  "StudentName": "ASHUTOSH SINGH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC081",
  "StudentName": "SACHIN",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC087",
  "StudentName": "SAVE PRAVEEN",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 25",
  "ProjectTitle": "AIR QUALITY REPORTING SYSTEM",
  "RollNo": "U15EC008",
  "StudentName": "ENGINEER KRISHA SARJU",
  "ProjectGuide": "Dr. A. S. Mandloi",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC103",
  "StudentName": "ROHAN KUMAR JHA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC129",
  "StudentName": "ABHISHEK SINGH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC130",
  "StudentName": "PANDIRI YASHASVINI",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 26",
  "ProjectTitle": "HARDWARE G IMPLEMENTATION OF SIGN LANGUAGE TRAN",
  "RollNo": "U15EC041",
  "StudentName": "SHREYASH SUDAMA KEJRIWAL",
  "ProjectGuide": "Dr.(Mrs.) S. Gupta",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC047",
  "StudentName": "ANMOL SINGHAL",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC051",
  "StudentName": "MUSUKU VINAY KUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC053",
  "StudentName": "VIPUL CHAUDHARY",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 27",
  "ProjectTitle": "LASER DRIVER FOR OPTICAL COMMUNICATION WITH TEM",
  "RollNo": "U15EC029",
  "StudentName": "CHATTA RAHUL",
  "ProjectGuide": "Dr.(Mrs.) S. Gupta",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC062",
  "StudentName": "PATNALA KRISHNA TEJA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC068",
  "StudentName": "VAMSEE KRISHNA TATIKONDA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC078",
  "StudentName": "BOLLAMPALLY VIVEK",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 28",
  "ProjectTitle": "AIR TRAFFIC CONTROL FOR DRONES",
  "RollNo": "U15EC083",
  "StudentName": "PRAFULL SHARMA",
  "ProjectGuide": "Dr.(Mrs.) S. Gupta",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC105",
  "StudentName": "PENTELA NAGAPRASANTH",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC150",
  "StudentName": "GADI NAGA SAI MANIKANTA",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC152",
  "StudentName": "GUDIMETTA SUHRUTH KUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "G 29",
  "ProjectTitle": "UNDER WATER PIPELINE G LEAKAGE DETECTION AND LOC",
  "RollNo": "U15EC134",
  "StudentName": "KOTHA VENKATA ANIL KUMAR",
  "ProjectGuide": "Dr.(Mrs.) S. N. Shah",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC136",
  "StudentName": "MUVVA SAITEJA",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC139",
  "StudentName": "SAPPA NARENDRA KUMAR",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC140",
  "StudentName": "VINJAM BHARATH",
  "ProjectGuide": "",
  "color": "0"
}, {
  "SrNo": "G 30",
  "ProjectTitle": "",
  "RollNo": "U15EC126",
  "StudentName": "PININTI SAI PRAVALIK REDDY",
  "ProjectGuide": "Dr.(Mrs.) S. N. Shah",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC137",
  "StudentName": "K BHARAT KUMAR",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC141",
  "StudentName": "M ROMANTH CHOWAN",
  "ProjectGuide": "",
  "color": "1"
}, {
  "SrNo": "",
  "ProjectTitle": "",
  "RollNo": "U15EC144",
  "StudentName": "DEVANSHI HINDKA",
  "ProjectGuide": "",
  "color": "1"
}];
/* harmony default export */ __webpack_exports__["default"] = (Data2018_19);

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

/***/ }),

/***/ "./src/Components/Researches/Research/Research.js":
/*!********************************************************!*\
  !*** ./src/Components/Researches/Research/Research.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Researches\\Research\\Research.js";


function Research(_ref) {
  var SrNo = _ref.SrNo,
      ProjectTitle = _ref.ProjectTitle,
      RollNo = _ref.RollNo,
      StudentName = _ref.StudentName,
      ProjectGuide = _ref.ProjectGuide,
      color = _ref.color;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
    className: color === "1" ? "bg-gray-200" : "bg-gray-50",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: color === "1" ? "border-r border-gray-50" : "border-r border-gray-200",
      s: true,
      children: SrNo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: color === "1" ? "border-r border-gray-50" : "border-r border-gray-200",
      children: ProjectTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: color === "1" ? "border-r border-gray-50" : "border-r border-gray-200",
      children: RollNo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: color === "1" ? "border-r border-gray-50" : "border-r border-gray-200",
      children: StudentName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: color === "1" ? "border-r border-gray-50" : "border-r border-gray-200",
      children: ProjectGuide
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = Research;
;
/* harmony default export */ __webpack_exports__["default"] = (Research);

var _c;

$RefreshReg$(_c, "Research");

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

/***/ }),

/***/ "./src/Components/Researches/ResearchHeader/ResearchHeader.js":
/*!********************************************************************!*\
  !*** ./src/Components/Researches/ResearchHeader/ResearchHeader.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Researches\\ResearchHeader\\ResearchHeader.js";


function FacilitiesHeader(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-gray-300 p-10 rounded",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-span-1 flex justify-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
          className: "uppercase text-gray-600 text-3xl font-bold",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = FacilitiesHeader;
;
/* harmony default export */ __webpack_exports__["default"] = (FacilitiesHeader);

var _c;

$RefreshReg$(_c, "FacilitiesHeader");

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

/***/ }),

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
/* harmony import */ var _Data_Data2017_18__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Data/Data2017_18 */ "./src/Components/Researches/Data/Data2017_18.js");
/* harmony import */ var _Data_Data2019_20__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Data/Data2019_20 */ "./src/Components/Researches/Data/Data2019_20.js");
/* harmony import */ var _Data_Data2018_19__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Data/Data2018_19 */ "./src/Components/Researches/Data/Data2018_19.js");
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_Data_Data2017_18__WEBPACK_IMPORTED_MODULE_4__["default"]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("Projects 2017-18"),
      title = _useState2[0],
      setTitle = _useState2[1];

  var changesHandler = function changesHandler(event) {
    if (event.target.value === "1") {
      setData(_Data_Data2017_18__WEBPACK_IMPORTED_MODULE_4__["default"]);
      setTitle("Projects 2017-18");
    } else if (event.target.value === "2") {
      setData(_Data_Data2019_20__WEBPACK_IMPORTED_MODULE_5__["default"]);
      setTitle("Projects 2018-19");
    } else {
      setData(_Data_Data2018_19__WEBPACK_IMPORTED_MODULE_6__["default"]);
      setTitle("Projects 2019-20");
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
      className: "scroll-hide w-full overflow-auto p-2",
      style: divStyler,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("table", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tr", {
          className: "bg-gray-400 p-3 rounded ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
            className: "p-1 w-8",
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
        }, this), data.map(function (research) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Research_Research__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
            research: research
          }, research), research.StudentName, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, _this);
        })]
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

_s(Researches, "WB2BcUhuI0yiNaTKQryn7y6rl0I=");

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

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FResearchPage&absolutePagePath=C%3A%5CUsers%5CCroma%5CDesktop%5Cgit-repo%5Cnew%20repo%5CCobWeb%5Cpages%5CResearchPage.js!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YjE4MyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS93ZWJwYWNrL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9SZXNlYXJjaFBhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvSG9tZS9Ib21lSGVhZGVyL0hvbWVIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL0hvbWUvSW1hZ2VDYXJvdXNlbC9JbWFnZUNhcm91c2VsLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9Ib21lL0ltYWdlQ2Fyb3VzZWwvSW1hZ2VTbGlkZS9JbWFnZVNsaWRlLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9Mb2FkZXIvTG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9QYWdlTGF5b3V0L05hdmJhci9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL1BhZ2VMYXlvdXQvTmF2YmFyL3RvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL1BhZ2VMYXlvdXQvUGFnZUxheW91dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVzZWFyY2hlcy9EYXRhLzIwMTdfMThEYXRhLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9SZXNlYXJjaGVzL0RhdGEvRGF0YTIwMThfMTkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL1Jlc2VhcmNoZXMvRGF0YS8yMDE4XzE5RGF0YS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVzZWFyY2hlcy9SZXNlYXJjaC9SZXNlYXJjaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVzZWFyY2hlcy9SZXNlYXJjaEhlYWRlci9SZXNlYXJjaEhlYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVzZWFyY2hlcy9SZXNlYXJjaGVzLmpzIl0sIm5hbWVzIjpbIlJlc2VhcmNoRmFjaWxpdGllcyIsIlJFUVVFU1RfU1RBVFVTIiwiTE9BRExJTkciLCJTVUNDRVNTIiwiRVJST1IiLCJ1c2VTdGF0ZSIsInN0YXR1cyIsInNldFN0YXR1cyIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJzdWNjZXNzIiwiaXNMb2FkaW5nIiwiRm9vdGVyIiwiSGVhZGVyIiwiaW1hZ2VTdHlsZSIsIndpZHRoIiwiaGVpZ3RoIiwiSG9tZSIsIkhvbWVIZWFkZXIiLCJJbWFnZUNhcm91c2VsIiwiaW1hZ2VzQXJyYXkiLCJzbGlkZUluZGV4Iiwic2hvd1NsaWRlcyIsImkiLCJzbGlkZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJkb3RzIiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5IiwiY2xhc3NOYW1lIiwicmVwbGFjZSIsIm1hcCIsImltYWdlIiwiaWQiLCJ0ZXh0QWxpZ25tZW50IiwiSW1hZ2VTbGlkZSIsImltYWdlU3JjIiwiTG9hZGVyIiwiTmF2YmFyIiwibXlTdHlsZSIsInRvZ2dsZXIiLCJtZW51QnV0dG9uIiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJQYWdlTGF5b3V0IiwiY2hpbGRyZW4iLCJEYXRhMjAxN18xOCIsIkRhdGEyMDE5XzIwIiwiRGF0YTIwMThfMTkiLCJSZXNlYXJjaCIsIlNyTm8iLCJQcm9qZWN0VGl0bGUiLCJSb2xsTm8iLCJTdHVkZW50TmFtZSIsIlByb2plY3RHdWlkZSIsImNvbG9yIiwiRmFjaWxpdGllc0hlYWRlciIsInRpdGxlIiwiUmVzZWFyY2hlcyIsImRpdlN0eWxlciIsImhlaWdodCIsImRhdGEiLCJzZXREYXRhIiwic2V0VGl0bGUiLCJjaGFuZ2VzSGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJlIiwicmVzZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDYmEsc0NBQXNDLHNCQUFzQjtBQUN6RSx5Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLHdEQUErRTtBQUN0RztBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsQzs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQSxZQUFZLG1CQUFPLENBQUMsNENBQU87QUFDM0IsY0FBYyxtQkFBTyxDQUFDLGdGQUFlOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsOEZBQThGLGVBQWU7QUFDN0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVAsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLDJEQUEyRCxTQUFTO0FBQ3BFLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNERBQTREO0FBQzVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJDQUEyQzs7QUFFM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ2xyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLGdGQUFlOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7O0FBRUE7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEZBQTBGLGFBQWE7QUFDdkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGLGVBQWU7QUFDN0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVAsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhNQUE4TTs7QUFFOU07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsT0FBTztBQUNwQixhQUFhLFVBQVU7QUFDdkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvRUFBb0U7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7O0FBRWYsd0JBQXdCLGlCQUFpQjs7O0FBR3pDO0FBQ0Esd0JBQXdCOztBQUV4QiwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQSwrQkFBK0I7O0FBRS9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2Qjs7QUFFQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxzSUFBc0kseUNBQXlDO0FBQy9LO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsaUJBQWlCO0FBQzVCLFdBQVcsRUFBRTtBQUNiLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxZQUFZLE9BQU87QUFDbkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxpQkFBaUI7QUFDNUIsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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ZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvUmVzZWFyY2hQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xyXG4gIGlmIChrZXkgaW4gb2JqKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcclxuICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvYmo7XHJcbn0iLCJcInVzZSBzdHJpY3RcIjt2YXIgYXNzaWduPU9iamVjdC5hc3NpZ24uYmluZChPYmplY3QpO21vZHVsZS5leHBvcnRzPWFzc2lnbjttb2R1bGUuZXhwb3J0cy5kZWZhdWx0PW1vZHVsZS5leHBvcnRzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYmplY3QtYXNzaWduLmpzLm1hcCIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvUmVzZWFyY2hQYWdlXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcQ3JvbWFcXFxcRGVza3RvcFxcXFxnaXQtcmVwb1xcXFxuZXcgcmVwb1xcXFxDb2JXZWJcXFxccGFnZXNcXFxcUmVzZWFyY2hQYWdlLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJtb2R1bGUuZXhwb3J0cyA9XHJcbi8qKioqKiovIChmdW5jdGlvbigpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxyXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcclxuXHJcbi8qKiovIDkzMTpcclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xyXG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWVcclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxyXG5cclxuLyoqKi8gfSlcclxuXHJcbi8qKioqKiovIFx0fSk7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxyXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcclxuLyoqKioqKi8gXHRcclxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxyXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18obW9kdWxlSWQpIHtcclxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxyXG4vKioqKioqLyBcdFx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xyXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xyXG4vKioqKioqLyBcdFx0fVxyXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcclxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xyXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXHJcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXHJcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XHJcbi8qKioqKiovIFx0XHR9O1xyXG4vKioqKioqLyBcdFxyXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXHJcbi8qKioqKiovIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xyXG4vKioqKioqLyBcdFx0dHJ5IHtcclxuLyoqKioqKi8gXHRcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX19uY2N3cGNrX3JlcXVpcmVfXyk7XHJcbi8qKioqKiovIFx0XHRcdHRocmV3ID0gZmFsc2U7XHJcbi8qKioqKiovIFx0XHR9IGZpbmFsbHkge1xyXG4vKioqKioqLyBcdFx0XHRpZih0aHJldykgZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XHJcbi8qKioqKiovIFx0XHR9XHJcbi8qKioqKiovIFx0XHJcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxyXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xyXG4vKioqKioqLyBcdH1cclxuLyoqKioqKi8gXHRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY29tcGF0ICovXHJcbi8qKioqKiovIFx0XHJcbi8qKioqKiovIFx0X19uY2N3cGNrX3JlcXVpcmVfXy5hYiA9IF9fZGlybmFtZSArIFwiL1wiOy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qKioqKiovIFx0Ly8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcclxuLyoqKioqKi8gXHQvLyBzdGFydHVwXHJcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXHJcbi8qKioqKiovIFx0cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oOTMxKTtcclxuLyoqKioqKi8gfSkoKVxyXG47IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcclxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxyXG4gKlxyXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xyXG5cclxuLy8gQVRURU5USU9OXHJcbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcclxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xyXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxyXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXHJcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XHJcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcclxuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcclxudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XHJcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xyXG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcclxudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcclxudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XHJcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xyXG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xyXG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xyXG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xyXG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcclxudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xyXG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcclxudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XHJcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcclxudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xyXG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XHJcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XHJcblxyXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XHJcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XHJcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XHJcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xyXG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XHJcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcclxuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xyXG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XHJcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XHJcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcclxuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xyXG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xyXG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xyXG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xyXG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XHJcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xyXG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XHJcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcclxuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XHJcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcclxuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XHJcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XHJcbn1cclxuXHJcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcclxudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xyXG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcclxuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xyXG5cclxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xyXG5cclxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XHJcbiAge1xyXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcclxuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcclxuICAgIH1cclxuXHJcbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XHJcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXHJcbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXHJcbiAge1xyXG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xyXG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XHJcblxyXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xyXG4gICAgICBmb3JtYXQgKz0gJyVzJztcclxuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XHJcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcclxuXHJcbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcclxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcclxuXHJcbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXHJcblxyXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxyXG5cclxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcclxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXHJcblxyXG5cclxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcclxuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcclxuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xyXG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcclxuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xyXG4gIGlmICh0eXBlID09IG51bGwpIHtcclxuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xyXG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gdHlwZTtcclxuICB9XHJcblxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxyXG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcclxuXHJcbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxyXG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XHJcblxyXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxyXG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcclxuXHJcbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XHJcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XHJcblxyXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxyXG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcclxuXHJcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcclxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XHJcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxyXG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcclxuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcclxuXHJcbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcclxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xyXG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcclxuXHJcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcclxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XHJcblxyXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcclxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xyXG5cclxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxyXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XHJcblxyXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XHJcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XHJcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XHJcblxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XHJcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXHJcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XHJcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cclxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXHJcbnZhciBkaXNhYmxlZERlcHRoID0gMDtcclxudmFyIHByZXZMb2c7XHJcbnZhciBwcmV2SW5mbztcclxudmFyIHByZXZXYXJuO1xyXG52YXIgcHJldkVycm9yO1xyXG52YXIgcHJldkdyb3VwO1xyXG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xyXG52YXIgcHJldkdyb3VwRW5kO1xyXG5cclxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxyXG5cclxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcclxuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XHJcbiAge1xyXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcclxuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXHJcbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcclxuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XHJcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xyXG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xyXG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xyXG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xyXG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XHJcblxyXG4gICAgICB2YXIgcHJvcHMgPSB7XHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxyXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXHJcblxyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XHJcbiAgICAgICAgaW5mbzogcHJvcHMsXHJcbiAgICAgICAgbG9nOiBwcm9wcyxcclxuICAgICAgICB3YXJuOiBwcm9wcyxcclxuICAgICAgICBlcnJvcjogcHJvcHMsXHJcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxyXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcclxuICAgICAgICBncm91cEVuZDogcHJvcHNcclxuICAgICAgfSk7XHJcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZWREZXB0aCsrO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XHJcbiAge1xyXG4gICAgZGlzYWJsZWREZXB0aC0tO1xyXG5cclxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xyXG4gICAgICB2YXIgcHJvcHMgPSB7XHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgd3JpdGFibGU6IHRydWVcclxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cclxuXHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcclxuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XHJcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XHJcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cclxuICAgICAgICB9KSxcclxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xyXG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XHJcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XHJcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XHJcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XHJcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XHJcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcclxudmFyIHByZWZpeDtcclxuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XHJcbiAge1xyXG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aHJvdyBFcnJvcigpO1xyXG4gICAgICB9IGNhdGNoICh4KSB7XHJcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcclxuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcclxuICAgICAgfVxyXG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cclxuXHJcblxyXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcclxuICB9XHJcbn1cclxudmFyIHJlZW50cnkgPSBmYWxzZTtcclxudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XHJcblxyXG57XHJcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcclxuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcclxuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cclxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHtcclxuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcclxuXHJcbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gZnJhbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgY29udHJvbDtcclxuICByZWVudHJ5ID0gdHJ1ZTtcclxuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cclxuXHJcbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XHJcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcclxuXHJcbiAge1xyXG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cclxuICAgIC8vIGZvciB3YXJuaW5ncy5cclxuXHJcbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgZGlzYWJsZUxvZ3MoKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cclxuICAgIGlmIChjb25zdHJ1Y3QpIHtcclxuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXHJcbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRocm93IEVycm9yKCk7XHJcbiAgICAgIH07IC8vICRGbG93Rml4TWVcclxuXHJcblxyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcclxuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cclxuICAgICAgICAgIHRocm93IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcclxuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXHJcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xyXG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcclxuICAgICAgICAgIGNvbnRyb2wgPSB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgRmFrZS5jYWxsKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoeCkge1xyXG4gICAgICAgICAgY29udHJvbCA9IHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aHJvdyBFcnJvcigpO1xyXG4gICAgICB9IGNhdGNoICh4KSB7XHJcbiAgICAgICAgY29udHJvbCA9IHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZuKCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoc2FtcGxlKSB7XHJcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxyXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXHJcbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxyXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xyXG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XHJcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcclxuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcclxuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cclxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXHJcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcclxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxyXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXHJcbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXHJcbiAgICAgICAgYy0tO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcclxuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcclxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cclxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xyXG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cclxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcclxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXHJcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXHJcbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxyXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgcy0tO1xyXG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxyXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxyXG5cclxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXHJcbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIHJlZW50cnkgPSBmYWxzZTtcclxuXHJcbiAgICB7XHJcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcclxuICAgICAgcmVlbmFibGVMb2dzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xyXG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxyXG5cclxuXHJcbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcclxuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcclxuXHJcbiAge1xyXG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xyXG59XHJcbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XHJcbiAge1xyXG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcclxuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcclxuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xyXG5cclxuICBpZiAodHlwZSA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHtcclxuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcclxuICB9XHJcblxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxyXG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XHJcblxyXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XHJcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcclxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxyXG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xyXG5cclxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XHJcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cclxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcclxuXHJcbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcclxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XHJcblxyXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XHJcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XHJcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XHJcblxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cclxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xyXG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gJyc7XHJcbn1cclxuXHJcbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcclxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xyXG4gIHtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xyXG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xyXG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xyXG4gIHtcclxuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cclxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XHJcblxyXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xyXG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xyXG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xyXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cclxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcclxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cclxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XHJcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgIGVycm9yJDEgPSBleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xyXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XHJcblxyXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcclxuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxyXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cclxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcclxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xyXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xyXG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XHJcbiAga2V5OiB0cnVlLFxyXG4gIHJlZjogdHJ1ZSxcclxuICBfX3NlbGY6IHRydWUsXHJcbiAgX19zb3VyY2U6IHRydWVcclxufTtcclxudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xyXG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XHJcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xyXG5cclxue1xyXG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XHJcbiAge1xyXG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcclxuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xyXG5cclxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xyXG4gIHtcclxuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XHJcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcclxuXHJcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XHJcbiAge1xyXG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcclxuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XHJcblxyXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcclxuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xyXG5cclxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XHJcbiAge1xyXG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xyXG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XHJcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxyXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XHJcbiAge1xyXG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xyXG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XHJcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxyXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cclxuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcclxuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXHJcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gdHlwZVxyXG4gKiBAcGFyYW0geyp9IHByb3BzXHJcbiAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXHJcbiAqIEBwYXJhbSB7Kn0gb3duZXJcclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXHJcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcclxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcclxuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xyXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXHJcbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxyXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcblxyXG5cclxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcclxuICB2YXIgZWxlbWVudCA9IHtcclxuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxyXG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcclxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcclxuICAgIHR5cGU6IHR5cGUsXHJcbiAgICBrZXk6IGtleSxcclxuICAgIHJlZjogcmVmLFxyXG4gICAgcHJvcHM6IHByb3BzLFxyXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cclxuICAgIF9vd25lcjogb3duZXJcclxuICB9O1xyXG5cclxuICB7XHJcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXHJcbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxyXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxyXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXHJcbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxyXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxyXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcclxuICAgIC8vIGlnbm9yZXMgaXQuXHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xyXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xyXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICB2YWx1ZTogc2VsZlxyXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXHJcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgIHZhbHVlOiBzb3VyY2VcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XHJcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XHJcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuLyoqXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcclxuICogQHBhcmFtIHsqfSB0eXBlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xyXG4gIHtcclxuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxyXG5cclxuICAgIHZhciBwcm9wcyA9IHt9O1xyXG4gICAgdmFyIGtleSA9IG51bGw7XHJcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXHJcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cclxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXHJcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcclxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXHJcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxyXG5cclxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcclxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XHJcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XHJcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xyXG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XHJcblxyXG5cclxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XHJcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcclxuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xyXG5cclxuXHJcbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xyXG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XHJcblxyXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xyXG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoa2V5IHx8IHJlZikge1xyXG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XHJcblxyXG4gICAgICBpZiAoa2V5KSB7XHJcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHJlZikge1xyXG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcclxuICB9XHJcbn1cclxuXHJcbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XHJcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XHJcbiAge1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XHJcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XHJcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcclxuXHJcbntcclxuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xyXG59XHJcbi8qKlxyXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxyXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XHJcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXHJcbiAqIEBmaW5hbFxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xyXG4gIHtcclxuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XHJcbiAge1xyXG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xyXG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xyXG5cclxuICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcclxuICB7XHJcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcclxuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcclxuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXHJcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxyXG4gKiB1cGRhdGVzLlxyXG4gKi9cclxuXHJcblxyXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcclxuICB7XHJcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xyXG5cclxuICAgIGlmICghaW5mbykge1xyXG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcclxuXHJcbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XHJcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluZm87XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXHJcbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxyXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cclxuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXHJcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxyXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXHJcbiAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xyXG4gIHtcclxuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XHJcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XHJcblxyXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcclxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cclxuXHJcbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xyXG5cclxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcclxuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXHJcbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xyXG5cclxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xyXG5cclxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXHJcbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxyXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cclxuICpcclxuICogQGludGVybmFsXHJcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxyXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXHJcbiAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcclxuICB7XHJcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xyXG5cclxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XHJcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcclxuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cclxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XHJcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChub2RlKSB7XHJcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcclxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cclxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XHJcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XHJcbiAgICAgICAgICB2YXIgc3RlcDtcclxuXHJcbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXHJcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxyXG4gKi9cclxuXHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XHJcbiAge1xyXG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHByb3BUeXBlcztcclxuXHJcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXHJcbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cclxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcclxuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb3BUeXBlcykge1xyXG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxyXG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XHJcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcclxuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxyXG5cclxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcclxuXHJcbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XHJcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcclxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XHJcbiAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xyXG4gIHtcclxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcclxuXHJcbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xyXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xyXG5cclxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XHJcblxyXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XHJcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xyXG5cclxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XHJcblxyXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XHJcbiAge1xyXG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cclxuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXHJcblxyXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcclxuICAgICAgdmFyIGluZm8gPSAnJztcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xyXG5cclxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcclxuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHR5cGVTdHJpbmc7XHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XHJcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xyXG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcclxuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xyXG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cclxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cclxuXHJcbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xyXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxyXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxyXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcclxuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcclxuXHJcblxyXG4gICAgaWYgKHZhbGlkVHlwZSkge1xyXG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcclxuXHJcbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcclxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xyXG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XHJcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcclxuXHJcbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XHJcblxyXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xyXG4gIH0pKCk7XHJcbn1cclxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcclxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcclxuICpcclxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXHJcbiAqXHJcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxyXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIChmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XHJcblxyXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cclxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNy4wLjInO1xyXG5cclxuLy8gQVRURU5USU9OXHJcbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcclxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xyXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxyXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXHJcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XHJcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcclxuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcclxuZXhwb3J0cy5TdHJpY3RNb2RlID0gMHhlYWNjO1xyXG5leHBvcnRzLlByb2ZpbGVyID0gMHhlYWQyO1xyXG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcclxudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcclxudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XHJcbmV4cG9ydHMuU3VzcGVuc2UgPSAweGVhZDE7XHJcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XHJcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XHJcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XHJcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xyXG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XHJcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xyXG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcclxudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xyXG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XHJcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcclxudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcclxuXHJcbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcclxuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcclxuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcclxuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XHJcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcclxuICBleHBvcnRzLlN0cmljdE1vZGUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XHJcbiAgZXhwb3J0cy5Qcm9maWxlciA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcclxuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xyXG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xyXG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XHJcbiAgZXhwb3J0cy5TdXNwZW5zZSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcclxuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcclxuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcclxuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcclxuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xyXG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcclxuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xyXG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XHJcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xyXG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XHJcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xyXG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xyXG59XHJcblxyXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XHJcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcclxuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XHJcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcclxuXHJcbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGF0Y2hlci5cclxuICovXHJcbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xyXG4gIC8qKlxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cclxuICAgKi9cclxuICBjdXJyZW50OiBudWxsXHJcbn07XHJcblxyXG4vKipcclxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXHJcbiAqIHNob3VsZCBzdXNwZW5kIGZvciBpZiBpdCBuZWVkcyB0by5cclxuICovXHJcbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcclxuICB0cmFuc2l0aW9uOiAwXHJcbn07XHJcblxyXG4vKipcclxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXHJcbiAqXHJcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcclxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxyXG4gKi9cclxudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xyXG4gIC8qKlxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cclxuICAgKi9cclxuICBjdXJyZW50OiBudWxsXHJcbn07XHJcblxyXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xyXG52YXIgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IG51bGw7XHJcbmZ1bmN0aW9uIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjaykge1xyXG4gIHtcclxuICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcclxuICB9XHJcbn1cclxuXHJcbntcclxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xyXG4gICAge1xyXG4gICAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XHJcbiAgICB9XHJcbiAgfTsgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXHJcblxyXG5cclxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XHJcblxyXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzdGFjayA9ICcnOyAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXHJcblxyXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcclxuICAgICAgc3RhY2sgKz0gY3VycmVudEV4dHJhU3RhY2tGcmFtZTtcclxuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXHJcblxyXG5cclxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XHJcblxyXG4gICAgaWYgKGltcGwpIHtcclxuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGFjaztcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVXNlZCBieSBhY3QoKSB0byB0cmFjayB3aGV0aGVyIHlvdSdyZSBpbnNpZGUgYW4gYWN0KCkgc2NvcGUuXHJcbiAqL1xyXG52YXIgSXNTb21lUmVuZGVyZXJBY3RpbmcgPSB7XHJcbiAgY3VycmVudDogZmFsc2VcclxufTtcclxuXHJcbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcclxuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxyXG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOiBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxcclxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXHJcbiAgSXNTb21lUmVuZGVyZXJBY3Rpbmc6IElzU29tZVJlbmRlcmVyQWN0aW5nLFxyXG4gIC8vIFVzZWQgYnkgcmVuZGVyZXJzIHRvIGF2b2lkIGJ1bmRsaW5nIG9iamVjdC1hc3NpZ24gdHdpY2UgaW4gVU1EIGJ1bmRsZXM6XHJcbiAgYXNzaWduOiBfYXNzaWduXHJcbn07XHJcblxyXG57XHJcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWU7XHJcbn1cclxuXHJcbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXHJcbi8vXHJcbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXHJcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cclxuXHJcbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XHJcbiAge1xyXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcclxuICB7XHJcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xyXG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcclxuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cclxuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cclxuICB7XHJcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XHJcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcclxuXHJcbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XHJcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xyXG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuICcnICsgaXRlbTtcclxuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxyXG5cclxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxyXG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xyXG5cclxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XHJcbiAgfVxyXG59XHJcblxyXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XHJcblxyXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xyXG4gIHtcclxuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcclxuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcclxuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcclxuXHJcbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xyXG5cclxuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cclxuICovXHJcblxyXG5cclxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICogQHByb3RlY3RlZFxyXG4gICAqIEBmaW5hbFxyXG4gICAqL1xyXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxyXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxyXG4gICAqXHJcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxyXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxyXG4gICAqXHJcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxyXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cclxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxyXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqL1xyXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xyXG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cclxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXHJcbiAgICpcclxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xyXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cclxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxyXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXHJcbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXHJcbiAgICogQGludGVybmFsXHJcbiAgICovXHJcbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xyXG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcclxuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcclxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcclxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXHJcbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cclxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXHJcbiAgICogQGludGVybmFsXHJcbiAgICovXHJcbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcclxuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcclxuICB9XHJcbn07XHJcblxyXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcclxuXHJcbntcclxuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcclxufVxyXG4vKipcclxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXHJcbiAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xyXG4gIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cclxuXHJcbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7IC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXHJcbiAgLy8gcmVuZGVyZXIuXHJcblxyXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XHJcbn1cclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xyXG4vKipcclxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcclxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cclxuICpcclxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cclxuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cclxuICpcclxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxyXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcclxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcclxuICogY29tcGxldGVkLlxyXG4gKlxyXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cclxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXHJcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XHJcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXHJcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXHJcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXHJcbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxyXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXHJcbiAqIEBmaW5hbFxyXG4gKiBAcHJvdGVjdGVkXHJcbiAqL1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XHJcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcclxuICAgIHtcclxuICAgICAgdGhyb3cgRXJyb3IoIFwic2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuXCIgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XHJcbn07XHJcbi8qKlxyXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXHJcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxyXG4gKlxyXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXHJcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxyXG4gKlxyXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXHJcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxyXG4gKiBAZmluYWxcclxuICogQHByb3RlY3RlZFxyXG4gKi9cclxuXHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XHJcbn07XHJcbi8qKlxyXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXHJcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXHJcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxyXG4gKi9cclxuXHJcblxyXG57XHJcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xyXG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxyXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cclxuICB9O1xyXG5cclxuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdhcm4oJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XHJcblxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xyXG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcclxuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XHJcblxyXG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xyXG4vKipcclxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xyXG4gIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cclxuXHJcbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XHJcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcclxufVxyXG5cclxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xyXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDsgLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXHJcblxyXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xyXG5cclxucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XHJcblxyXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxyXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XHJcbiAgdmFyIHJlZk9iamVjdCA9IHtcclxuICAgIGN1cnJlbnQ6IG51bGxcclxuICB9O1xyXG5cclxuICB7XHJcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlZk9iamVjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XHJcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcclxuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XHJcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcclxuICBpZiAodHlwZSA9PSBudWxsKSB7XHJcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAge1xyXG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcclxuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIHR5cGU7XHJcbiAgfVxyXG5cclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcclxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XHJcblxyXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcclxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xyXG5cclxuICAgIGNhc2UgZXhwb3J0cy5Qcm9maWxlcjpcclxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XHJcblxyXG4gICAgY2FzZSBleHBvcnRzLlN0cmljdE1vZGU6XHJcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XHJcblxyXG4gICAgY2FzZSBleHBvcnRzLlN1c3BlbnNlOlxyXG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcclxuXHJcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcclxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XHJcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxyXG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcclxuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcclxuXHJcbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcclxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xyXG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcclxuXHJcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcclxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XHJcblxyXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcclxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xyXG5cclxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxyXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XHJcblxyXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XHJcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XHJcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XHJcblxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XHJcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xyXG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XHJcbiAga2V5OiB0cnVlLFxyXG4gIHJlZjogdHJ1ZSxcclxuICBfX3NlbGY6IHRydWUsXHJcbiAgX19zb3VyY2U6IHRydWVcclxufTtcclxudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duLCBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biwgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcclxuXHJcbntcclxuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xyXG4gIHtcclxuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XHJcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcclxuXHJcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcclxuICB7XHJcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xyXG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XHJcblxyXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XHJcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHtcclxuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xyXG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XHJcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcclxuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xyXG4gICAge1xyXG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XHJcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xyXG5cclxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcclxuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpIHtcclxuICB7XHJcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xyXG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcclxuXHJcbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xyXG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGNvbXBvbmVudE5hbWUsIGNvbmZpZy5yZWYpO1xyXG5cclxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vKipcclxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cclxuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcclxuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXHJcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gdHlwZVxyXG4gKiBAcGFyYW0geyp9IHByb3BzXHJcbiAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXHJcbiAqIEBwYXJhbSB7Kn0gb3duZXJcclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXHJcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcclxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcclxuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xyXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXHJcbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxyXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcblxyXG5cclxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcclxuICB2YXIgZWxlbWVudCA9IHtcclxuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxyXG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcclxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcclxuICAgIHR5cGU6IHR5cGUsXHJcbiAgICBrZXk6IGtleSxcclxuICAgIHJlZjogcmVmLFxyXG4gICAgcHJvcHM6IHByb3BzLFxyXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cclxuICAgIF9vd25lcjogb3duZXJcclxuICB9O1xyXG5cclxuICB7XHJcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXHJcbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxyXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxyXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXHJcbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxyXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxyXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcclxuICAgIC8vIGlnbm9yZXMgaXQuXHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xyXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xyXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICB2YWx1ZTogc2VsZlxyXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXHJcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgIHZhbHVlOiBzb3VyY2VcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XHJcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XHJcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuLyoqXHJcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cclxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XHJcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXHJcblxyXG4gIHZhciBwcm9wcyA9IHt9O1xyXG4gIHZhciBrZXkgPSBudWxsO1xyXG4gIHZhciByZWYgPSBudWxsO1xyXG4gIHZhciBzZWxmID0gbnVsbDtcclxuICB2YXIgc291cmNlID0gbnVsbDtcclxuXHJcbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XHJcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xyXG4gICAgICByZWYgPSBjb25maWcucmVmO1xyXG5cclxuICAgICAge1xyXG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcclxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcclxuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxyXG5cclxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XHJcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcclxuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXHJcbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXHJcblxyXG5cclxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcclxuXHJcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XHJcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XHJcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XHJcbiAgICB9XHJcblxyXG4gICAge1xyXG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xyXG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XHJcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcclxuXHJcblxyXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XHJcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XHJcblxyXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcclxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAge1xyXG4gICAgaWYgKGtleSB8fCByZWYpIHtcclxuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xyXG5cclxuICAgICAgaWYgKGtleSkge1xyXG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChyZWYpIHtcclxuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcclxufVxyXG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XHJcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcclxuICByZXR1cm4gbmV3RWxlbWVudDtcclxufVxyXG4vKipcclxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXHJcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcclxuICBpZiAoISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpKSB7XHJcbiAgICB7XHJcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcclxuXHJcbiAgdmFyIHByb3BzID0gX2Fzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcclxuXHJcblxyXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcclxuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXHJcblxyXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxyXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcclxuICAvLyB0cnVlIG93bmVyLlxyXG5cclxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXHJcblxyXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xyXG5cclxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcclxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XHJcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxyXG4gICAgICByZWYgPSBjb25maWcucmVmO1xyXG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcclxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xyXG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xyXG5cclxuXHJcbiAgICB2YXIgZGVmYXVsdFByb3BzO1xyXG5cclxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xyXG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XHJcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcclxuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcclxuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXHJcbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXHJcblxyXG5cclxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcclxuXHJcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XHJcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XHJcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XHJcbiAgICB9XHJcblxyXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XHJcbn1cclxuLyoqXHJcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXHJcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcclxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcclxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cclxuICogQGZpbmFsXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcclxufVxyXG5cclxudmFyIFNFUEFSQVRPUiA9ICcuJztcclxudmFyIFNVQlNFUEFSQVRPUiA9ICc6JztcclxuLyoqXHJcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cclxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xyXG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XHJcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XHJcbiAgICAnPSc6ICc9MCcsXHJcbiAgICAnOic6ICc9MidcclxuICB9O1xyXG4gIHZhciBlc2NhcGVkU3RyaW5nID0ga2V5LnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xyXG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xyXG4gIH0pO1xyXG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xyXG59XHJcbi8qKlxyXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcclxuICogcGF0dGVybi5cclxuICovXHJcblxyXG5cclxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcclxudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcclxuXHJcbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XHJcbiAgcmV0dXJuIHRleHQucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xyXG59XHJcbi8qKlxyXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgZWxlbWVudCB3aXRoaW4gYSBzZXQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcclxuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxyXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxyXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XHJcbiAgICAvLyBFeHBsaWNpdCBrZXlcclxuICAgIHJldHVybiBlc2NhcGUoJycgKyBlbGVtZW50LmtleSk7XHJcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxyXG5cclxuXHJcbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xyXG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xyXG5cclxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cclxuICAgIGNoaWxkcmVuID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xyXG5cclxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcclxuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3N0cmluZyc6XHJcbiAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnb2JqZWN0JzpcclxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XHJcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcclxuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XHJcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XHJcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XHJcbiAgICB2YXIgbWFwcGVkQ2hpbGQgPSBjYWxsYmFjayhfY2hpbGQpOyAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxyXG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93czpcclxuXHJcbiAgICB2YXIgY2hpbGRLZXkgPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0RWxlbWVudEtleShfY2hpbGQsIDApIDogbmFtZVNvRmFyO1xyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xyXG4gICAgICB2YXIgZXNjYXBlZENoaWxkS2V5ID0gJyc7XHJcblxyXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xyXG4gICAgICAgIGVzY2FwZWRDaGlsZEtleSA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShjaGlsZEtleSkgKyAnLyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hcEludG9BcnJheShtYXBwZWRDaGlsZCwgYXJyYXksIGVzY2FwZWRDaGlsZEtleSwgJycsIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XHJcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcclxuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcclxuICAgICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cclxuICAgICAgICBlc2NhcGVkUHJlZml4ICsgKCAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcclxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcclxuICAgICAgICBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoJycgKyBtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhcnJheS5wdXNoKG1hcHBlZENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gMTtcclxuICB9XHJcblxyXG4gIHZhciBjaGlsZDtcclxuICB2YXIgbmV4dE5hbWU7XHJcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXHJcblxyXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XHJcblxyXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaSk7XHJcbiAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xyXG5cclxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB2YXIgaXRlcmFibGVDaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cclxuICAgICAge1xyXG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxyXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcclxuICAgICAgICAgIGlmICghZGlkV2FybkFib3V0TWFwcykge1xyXG4gICAgICAgICAgICB3YXJuKCdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcclxuICAgICAgdmFyIHN0ZXA7XHJcbiAgICAgIHZhciBpaSA9IDA7XHJcblxyXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XHJcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xyXG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcclxuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xyXG5cclxuICAgICAge1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS4gSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSBpbnN0ZWFkLlwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3VidHJlZUNvdW50O1xyXG59XHJcblxyXG4vKipcclxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXHJcbiAqXHJcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxyXG4gKlxyXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxyXG4gKiBsZWFmIGNoaWxkLlxyXG4gKlxyXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cclxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cclxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cclxuICovXHJcbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XHJcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcclxuICAgIHJldHVybiBjaGlsZHJlbjtcclxuICB9XHJcblxyXG4gIHZhciByZXN1bHQgPSBbXTtcclxuICB2YXIgY291bnQgPSAwO1xyXG4gIG1hcEludG9BcnJheShjaGlsZHJlbiwgcmVzdWx0LCAnJywgJycsIGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4vKipcclxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXHJcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXHJcbiAqXHJcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XHJcbiAqXHJcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXHJcbiAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcclxuICB2YXIgbiA9IDA7XHJcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcclxuICAgIG4rKzsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nXHJcbiAgfSk7XHJcbiAgcmV0dXJuIG47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cclxuICpcclxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxyXG4gKlxyXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxyXG4gKiBsZWFmIGNoaWxkLlxyXG4gKlxyXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cclxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xyXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxyXG4gKi9cclxuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcclxuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nLlxyXG4gIH0sIGZvckVhY2hDb250ZXh0KTtcclxufVxyXG4vKipcclxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcclxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cclxuICpcclxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxyXG4gKi9cclxuXHJcblxyXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XHJcbiAgcmV0dXJuIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgIHJldHVybiBjaGlsZDtcclxuICB9KSB8fCBbXTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXHJcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxyXG4gKlxyXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XHJcbiAqXHJcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcclxuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cclxuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXHJcbiAqXHJcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXHJcbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcclxuICogc3RydWN0dXJlLlxyXG4gKi9cclxuXHJcblxyXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcclxuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xyXG4gICAge1xyXG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIiApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNoaWxkcmVuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcclxuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPSBudWxsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB7XHJcbiAgICAgIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gbnVsbCAmJiB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBlcnJvcignY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgY29udGV4dCA9IHtcclxuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXHJcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxyXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcclxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XHJcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcclxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxyXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXHJcbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXHJcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxyXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XHJcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cclxuICAgIF90aHJlYWRDb3VudDogMCxcclxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxyXG4gICAgUHJvdmlkZXI6IG51bGwsXHJcbiAgICBDb25zdW1lcjogbnVsbFxyXG4gIH07XHJcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcclxuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxyXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcclxuICB9O1xyXG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xyXG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xyXG4gIHZhciBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IGZhbHNlO1xyXG5cclxuICB7XHJcbiAgICAvLyBBIHNlcGFyYXRlIG9iamVjdCwgYnV0IHByb3hpZXMgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBvYmplY3QgZm9yXHJcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcclxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxyXG4gICAgdmFyIENvbnN1bWVyID0ge1xyXG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxyXG4gICAgICBfY29udGV4dDogY29udGV4dCxcclxuICAgICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjb250ZXh0Ll9jYWxjdWxhdGVDaGFuZ2VkQml0c1xyXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XHJcbiAgICAgIFByb3ZpZGVyOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XHJcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcclxuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBfY3VycmVudFZhbHVlOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XHJcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xyXG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBDb25zdW1lcjoge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xyXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZGlzcGxheU5hbWU6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBjb250ZXh0LmRpc3BsYXlOYW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcclxuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIpIHtcclxuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxyXG5cclxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcclxuICB9XHJcblxyXG4gIHtcclxuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XHJcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59XHJcblxyXG52YXIgVW5pbml0aWFsaXplZCA9IC0xO1xyXG52YXIgUGVuZGluZyA9IDA7XHJcbnZhciBSZXNvbHZlZCA9IDE7XHJcbnZhciBSZWplY3RlZCA9IDI7XHJcblxyXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xyXG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcclxuICAgIHZhciBjdG9yID0gcGF5bG9hZC5fcmVzdWx0O1xyXG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxyXG5cclxuICAgIHZhciBwZW5kaW5nID0gcGF5bG9hZDtcclxuICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XHJcbiAgICBwZW5kaW5nLl9yZXN1bHQgPSB0aGVuYWJsZTtcclxuICAgIHRoZW5hYmxlLnRoZW4oZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xyXG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XHJcbiAgICAgICAgdmFyIGRlZmF1bHRFeHBvcnQgPSBtb2R1bGVPYmplY3QuZGVmYXVsdDtcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWYgKGRlZmF1bHRFeHBvcnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxyXG4gICAgICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVwiLCBtb2R1bGVPYmplY3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cclxuXHJcblxyXG4gICAgICAgIHZhciByZXNvbHZlZCA9IHBheWxvYWQ7XHJcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xyXG4gICAgICAgIHJlc29sdmVkLl9yZXN1bHQgPSBkZWZhdWx0RXhwb3J0O1xyXG4gICAgICB9XHJcbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZykge1xyXG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXHJcbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcclxuICAgICAgICByZWplY3RlZC5fc3RhdHVzID0gUmVqZWN0ZWQ7XHJcbiAgICAgICAgcmVqZWN0ZWQuX3Jlc3VsdCA9IGVycm9yO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFJlc29sdmVkKSB7XHJcbiAgICByZXR1cm4gcGF5bG9hZC5fcmVzdWx0O1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aHJvdyBwYXlsb2FkLl9yZXN1bHQ7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcclxuICB2YXIgcGF5bG9hZCA9IHtcclxuICAgIC8vIFdlIHVzZSB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cclxuICAgIF9zdGF0dXM6IC0xLFxyXG4gICAgX3Jlc3VsdDogY3RvclxyXG4gIH07XHJcbiAgdmFyIGxhenlUeXBlID0ge1xyXG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcclxuICAgIF9wYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgX2luaXQ6IGxhenlJbml0aWFsaXplclxyXG4gIH07XHJcblxyXG4gIHtcclxuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cclxuICAgIHZhciBkZWZhdWx0UHJvcHM7XHJcbiAgICB2YXIgcHJvcFR5cGVzOyAvLyAkRmxvd0ZpeE1lXHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcclxuICAgICAgZGVmYXVsdFByb3BzOiB7XHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xyXG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcclxuXHJcbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxyXG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxyXG5cclxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBwcm9wVHlwZXM6IHtcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XHJcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xyXG5cclxuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XHJcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXHJcblxyXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAncHJvcFR5cGVzJywge1xyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGxhenlUeXBlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xyXG4gIHtcclxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xyXG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChyZW5kZXIubGVuZ3RoICE9PSAwICYmIHJlbmRlci5sZW5ndGggIT09IDIpIHtcclxuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XHJcbiAgICAgIGlmIChyZW5kZXIuZGVmYXVsdFByb3BzICE9IG51bGwgfHwgcmVuZGVyLnByb3BUeXBlcyAhPSBudWxsKSB7XHJcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcclxuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxyXG4gICAgcmVuZGVyOiByZW5kZXJcclxuICB9O1xyXG5cclxuICB7XHJcbiAgICB2YXIgb3duTmFtZTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xyXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gb3duTmFtZTtcclxuICAgICAgfSxcclxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIG93bk5hbWUgPSBuYW1lO1xyXG5cclxuICAgICAgICBpZiAocmVuZGVyLmRpc3BsYXlOYW1lID09IG51bGwpIHtcclxuICAgICAgICAgIHJlbmRlci5kaXNwbGF5TmFtZSA9IG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBlbGVtZW50VHlwZTtcclxufVxyXG5cclxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXHJcblxyXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxyXG5cclxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcclxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXHJcblxyXG5cclxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBleHBvcnRzLlByb2ZpbGVyIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IGV4cG9ydHMuU3RyaWN0TW9kZSB8fCB0eXBlID09PSBleHBvcnRzLlN1c3BlbnNlIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xyXG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xyXG4gIHtcclxuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XHJcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgZWxlbWVudFR5cGUgPSB7XHJcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxyXG4gICAgdHlwZTogdHlwZSxcclxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXHJcbiAgfTtcclxuXHJcbiAge1xyXG4gICAgdmFyIG93bk5hbWU7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcclxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICBvd25OYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUuZGlzcGxheU5hbWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgdHlwZS5kaXNwbGF5TmFtZSA9IG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBlbGVtZW50VHlwZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XHJcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XHJcblxyXG4gIGlmICghKGRpc3BhdGNoZXIgIT09IG51bGwpKSB7XHJcbiAgICB7XHJcbiAgICAgIHRocm93IEVycm9yKCBcIkludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGlzcGF0Y2hlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpIHtcclxuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XHJcblxyXG4gIHtcclxuICAgIGlmICh1bnN0YWJsZV9vYnNlcnZlZEJpdHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3J1bGVzLW9mLWhvb2tzJyA6ICcnKTtcclxuICAgIH0gLy8gVE9ETzogYWRkIGEgbW9yZSBnZW5lcmljIHdhcm5pbmcgZm9yIGludmFsaWQgdmFsdWVzLlxyXG5cclxuXHJcbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcclxuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxyXG5cclxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XHJcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcclxuICAgICAgfSBlbHNlIGlmIChyZWFsQ29udGV4dC5Qcm92aWRlciA9PT0gQ29udGV4dCkge1xyXG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKTtcclxufVxyXG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcclxuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XHJcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxufVxyXG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcclxuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XHJcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcclxufVxyXG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XHJcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xyXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZihpbml0aWFsVmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcclxuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XHJcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XHJcbn1cclxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcykge1xyXG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcclxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcclxufVxyXG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xyXG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcclxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcyk7XHJcbn1cclxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcclxuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XHJcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xyXG59XHJcbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpIHtcclxuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XHJcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XHJcbn1cclxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcclxuICB7XHJcbiAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXHJcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XHJcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cclxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXHJcbnZhciBkaXNhYmxlZERlcHRoID0gMDtcclxudmFyIHByZXZMb2c7XHJcbnZhciBwcmV2SW5mbztcclxudmFyIHByZXZXYXJuO1xyXG52YXIgcHJldkVycm9yO1xyXG52YXIgcHJldkdyb3VwO1xyXG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xyXG52YXIgcHJldkdyb3VwRW5kO1xyXG5cclxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxyXG5cclxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcclxuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XHJcbiAge1xyXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcclxuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXHJcbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcclxuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XHJcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xyXG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xyXG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xyXG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xyXG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XHJcblxyXG4gICAgICB2YXIgcHJvcHMgPSB7XHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxyXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXHJcblxyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XHJcbiAgICAgICAgaW5mbzogcHJvcHMsXHJcbiAgICAgICAgbG9nOiBwcm9wcyxcclxuICAgICAgICB3YXJuOiBwcm9wcyxcclxuICAgICAgICBlcnJvcjogcHJvcHMsXHJcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxyXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcclxuICAgICAgICBncm91cEVuZDogcHJvcHNcclxuICAgICAgfSk7XHJcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZWREZXB0aCsrO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XHJcbiAge1xyXG4gICAgZGlzYWJsZWREZXB0aC0tO1xyXG5cclxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xyXG4gICAgICB2YXIgcHJvcHMgPSB7XHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgd3JpdGFibGU6IHRydWVcclxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cclxuXHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcclxuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XHJcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XHJcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cclxuICAgICAgICB9KSxcclxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xyXG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XHJcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XHJcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XHJcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XHJcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XHJcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xyXG52YXIgcHJlZml4O1xyXG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcclxuICB7XHJcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRocm93IEVycm9yKCk7XHJcbiAgICAgIH0gY2F0Y2ggKHgpIHtcclxuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xyXG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xyXG4gICAgICB9XHJcbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxyXG5cclxuXHJcbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xyXG4gIH1cclxufVxyXG52YXIgcmVlbnRyeSA9IGZhbHNlO1xyXG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcclxuXHJcbntcclxuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xyXG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xyXG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxyXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAge1xyXG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xyXG5cclxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBmcmFtZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBjb250cm9sO1xyXG4gIHJlZW50cnkgPSB0cnVlO1xyXG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxyXG5cclxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcclxuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xyXG5cclxuICB7XHJcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXHJcbiAgICAvLyBmb3Igd2FybmluZ3MuXHJcblxyXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgZGlzYWJsZUxvZ3MoKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cclxuICAgIGlmIChjb25zdHJ1Y3QpIHtcclxuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXHJcbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRocm93IEVycm9yKCk7XHJcbiAgICAgIH07IC8vICRGbG93Rml4TWVcclxuXHJcblxyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcclxuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cclxuICAgICAgICAgIHRocm93IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcclxuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXHJcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xyXG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcclxuICAgICAgICAgIGNvbnRyb2wgPSB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgRmFrZS5jYWxsKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoeCkge1xyXG4gICAgICAgICAgY29udHJvbCA9IHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aHJvdyBFcnJvcigpO1xyXG4gICAgICB9IGNhdGNoICh4KSB7XHJcbiAgICAgICAgY29udHJvbCA9IHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZuKCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoc2FtcGxlKSB7XHJcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxyXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXHJcbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxyXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xyXG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XHJcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcclxuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcclxuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cclxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXHJcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcclxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxyXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXHJcbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXHJcbiAgICAgICAgYy0tO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcclxuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcclxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cclxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xyXG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cclxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcclxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXHJcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXHJcbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxyXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgcy0tO1xyXG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxyXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxyXG5cclxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXHJcbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIHJlZW50cnkgPSBmYWxzZTtcclxuXHJcbiAgICB7XHJcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xyXG4gICAgICByZWVuYWJsZUxvZ3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XHJcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXHJcblxyXG5cclxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xyXG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xyXG5cclxuICB7XHJcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XHJcbn1cclxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcclxuICB7XHJcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xyXG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xyXG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XHJcblxyXG4gIGlmICh0eXBlID09IG51bGwpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAge1xyXG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XHJcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcclxuXHJcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcclxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcclxuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xyXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XHJcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XHJcblxyXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcclxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxyXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xyXG5cclxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxyXG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcclxuXHJcbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcclxuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcclxuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcclxuXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxyXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XHJcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAnJztcclxufVxyXG5cclxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xyXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcclxuICB7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcclxuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcclxuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XHJcbiAge1xyXG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxyXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcclxuXHJcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XHJcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XHJcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXHJcbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxyXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxyXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxyXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcclxuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcclxuICAgICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XHJcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcclxuXHJcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xyXG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXHJcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxyXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xyXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XHJcbiAge1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XHJcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XHJcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XHJcblxyXG57XHJcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xyXG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XHJcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcclxuXHJcbiAgICBpZiAobmFtZSkge1xyXG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xyXG4gIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcclxuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XHJcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKGVsZW1lbnRQcm9wcykge1xyXG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICcnO1xyXG59XHJcbi8qKlxyXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXHJcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxyXG4gKiB1cGRhdGVzLlxyXG4gKi9cclxuXHJcblxyXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcclxuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xyXG5cclxuICBpZiAoIWluZm8pIHtcclxuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xyXG5cclxuICAgIGlmIChwYXJlbnROYW1lKSB7XHJcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBpbmZvO1xyXG59XHJcbi8qKlxyXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXHJcbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxyXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cclxuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXHJcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxyXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXHJcbiAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xyXG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XHJcbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xyXG5cclxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxyXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXHJcblxyXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XHJcblxyXG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XHJcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cclxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcclxuICB9XHJcblxyXG4gIHtcclxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XHJcblxyXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XHJcblxyXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cclxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXHJcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXHJcbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cclxuICovXHJcblxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xyXG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcclxuXHJcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcclxuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcclxuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXHJcbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcclxuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKG5vZGUpIHtcclxuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxyXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cclxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xyXG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcclxuICAgICAgICB2YXIgc3RlcDtcclxuXHJcbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xyXG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxyXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cclxuICpcclxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcclxuICovXHJcblxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xyXG4gIHtcclxuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xyXG5cclxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwcm9wVHlwZXM7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxyXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXHJcbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XHJcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9wVHlwZXMpIHtcclxuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcclxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xyXG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XHJcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcclxuXHJcbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XHJcblxyXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xyXG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vKipcclxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXHJcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxyXG4gKi9cclxuXHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcclxuICB7XHJcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGtleSA9IGtleXNbaV07XHJcblxyXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcclxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcclxuXHJcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xyXG5cclxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xyXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcclxuXHJcbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xyXG5cclxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xyXG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXHJcbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cclxuXHJcbiAgaWYgKCF2YWxpZFR5cGUpIHtcclxuICAgIHZhciBpbmZvID0gJyc7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xyXG5cclxuICAgIGlmIChzb3VyY2VJbmZvKSB7XHJcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHR5cGVTdHJpbmc7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcclxuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcclxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xyXG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcclxuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xyXG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xyXG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAge1xyXG4gICAgICBlcnJvcignUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxyXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cclxuXHJcbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xyXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cclxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXHJcbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcclxuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXHJcblxyXG5cclxuICBpZiAodmFsaWRUeXBlKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcclxuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG52YXIgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSBmYWxzZTtcclxuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcclxuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xyXG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XHJcblxyXG4gIHtcclxuICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkpIHtcclxuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xyXG5cclxuICAgICAgd2FybignUmVhY3QuY3JlYXRlRmFjdG9yeSgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIENvbnNpZGVyIHVzaW5nIEpTWCAnICsgJ29yIHVzZSBSZWFjdC5jcmVhdGVFbGVtZW50KCkgZGlyZWN0bHkgaW5zdGVhZC4nKTtcclxuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxyXG5cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XHJcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcclxuICAgICAgICAgIHZhbHVlOiB0eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHR5cGU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XHJcbn1cclxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XHJcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xyXG4gIHJldHVybiBuZXdFbGVtZW50O1xyXG59XHJcblxyXG57XHJcblxyXG4gIHRyeSB7XHJcbiAgICB2YXIgZnJvemVuT2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cclxuXHJcbiAgICBuZXcgTWFwKFtbZnJvemVuT2JqZWN0LCBudWxsXV0pO1xyXG4gICAgbmV3IFNldChbZnJvemVuT2JqZWN0XSk7XHJcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldyAqL1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICB9XHJcbn1cclxuXHJcbnZhciBjcmVhdGVFbGVtZW50JDEgPSAgY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcclxudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcclxudmFyIGNyZWF0ZUZhY3RvcnkgPSAgY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIDtcclxudmFyIENoaWxkcmVuID0ge1xyXG4gIG1hcDogbWFwQ2hpbGRyZW4sXHJcbiAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxyXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxyXG4gIHRvQXJyYXk6IHRvQXJyYXksXHJcbiAgb25seTogb25seUNoaWxkXHJcbn07XHJcblxyXG5leHBvcnRzLkNoaWxkcmVuID0gQ2hpbGRyZW47XHJcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xyXG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xyXG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0gUmVhY3RTaGFyZWRJbnRlcm5hbHM7XHJcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XHJcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XHJcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQkMTtcclxuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcclxuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XHJcbmV4cG9ydHMuZm9yd2FyZFJlZiA9IGZvcndhcmRSZWY7XHJcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcclxuZXhwb3J0cy5sYXp5ID0gbGF6eTtcclxuZXhwb3J0cy5tZW1vID0gbWVtbztcclxuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xyXG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xyXG5leHBvcnRzLnVzZURlYnVnVmFsdWUgPSB1c2VEZWJ1Z1ZhbHVlO1xyXG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcclxuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcclxuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3Q7XHJcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XHJcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XHJcbmV4cG9ydHMudXNlUmVmID0gdXNlUmVmO1xyXG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XHJcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcclxuICB9KSgpO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xyXG59IGVsc2Uge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XHJcbn0gZWxzZSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vc3JjL0NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gIFwiLi4vc3JjL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgUmVzZWFyY2hlcyBmcm9tIFwiLi4vc3JjL0NvbXBvbmVudHMvUmVzZWFyY2hlcy9SZXNlYXJjaGVzXCI7XHJcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gXCIuLi9zcmMvQ29tcG9uZW50cy9QYWdlTGF5b3V0L1BhZ2VMYXlvdXRcIjtcclxuaW1wb3J0IExvYWRlciAgZnJvbSBcIi4uL3NyYy9Db21wb25lbnRzL0xvYWRlci9Mb2FkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFJlc2VhcmNoRmFjaWxpdGllcygpe1xyXG5cclxuICAgIGNvbnN0IFJFUVVFU1RfU1RBVFVTID0ge1xyXG4gICAgICAgIExPQURMSU5HOlwiTG9hZGluZ1wiLFxyXG4gICAgICAgIFNVQ0NFU1M6XCJTVUNDRVNTXCIsXHJcbiAgICAgICAgRVJST1I6XCJFcnJvclwiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURMSU5HKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpLCAyMDAwKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1M7XHJcbiAgICBjb25zdCBpc0xvYWRpbmcgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkxPQURMSU5HO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxMb2FkZXIvPn1cclxuICAgICAgICAgICAgeyBzdWNjZXNzICYmIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVzZWFyY2hlcy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFnZUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZWFyY2hGYWNpbGl0aWVzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgIG10LTFcIj5cclxuICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwicHgtNVwiICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTQgZmxleCBmbGV4LXJvd1wiID5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTEgZmxleCBqdXN0aWZ5LWJldHdlZW4gbXQtMyBtZDptYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTdWIgSGVhZGluZyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS02MDAgZm9udC1ib2xkIHRleHQtbWRcIj5FbGVjdHJvbmljcyBEZXBhcnRtZW50PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1ncmF5LTYwMCB0ZXh0LXhzXCI+IE5hdGlvbmFsIGluc3RpdHV0ZSBvZiBUZWNobm9sb2d5LCBTVVJBVCA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU1ZOSVQgbG9nbyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0zMiBmbGV4IGgtMTIgdy0xMiB0ZXh0LWNlbnRlciBtZDpqdXN0aWZ5LWVuZCBtZDptci0zMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJcIiBzcmM9XCJpbWFnZXMvTklUX1N1cmF0X0xvZ28uc3ZnLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgcHQtMSBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhsIHRleHQtZ3JheS02MDAgZm9udC1zZW1pYm9sZFwiPkZvbGxvdyB1cyBvbjogPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHgtMiBwYi0yIHB0LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbS5mYWNlYm9vay5jb20vRWxlY3Ryb25pY3MtQ29tbXVuaWNhdGlvbi1FbmdpbmVlcmluZy1EZXBhcnRtZW50LVNWTklULVN1cmF0LTE3MDQyMjQ2NjMxNDA1NTQvXCI+PHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBmb250LXNlbWlib2xkIHAtMSBtZDpwLTNcIj48aW1nIGNsYXNzTmFtZT1cInctMTBcIiBzcmM9XCJpbWFnZXMvRm9vdGVyLWljb25zL0ZhY2Vib29rLWljb24uc3ZnXCIvPiZuYnNwOzxwIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPkZhY2Vib29rPC9wPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHAtM1wiPjxpbWcgY2xhc3NOYW1lPVwidy0xMFwiIHNyYz1cImltYWdlcy9Gb290ZXItaWNvbnMvWW91VHViZS1pY29uLnN2Z1wiLz4mbmJzcDs8YT5Zb3V0dWJlPC9hPjwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vc3ZuaXQub2ZmaWNpYWw/aWdzaGlkPXJ3bHZocnl6ZmlpMlwiPjxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZm9udC1zZW1pYm9sZCBwLTEgbWQ6cC0zXCI+PGltZyBjbGFzc05hbWU9XCJ3LTEwXCIgc3JjPVwiaW1hZ2VzL0Zvb3Rlci1pY29ucy9JbnN0YWdyYW0taWNvbi5zdmdcIi8+Jm5ic3A7PHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+SW5zdGFncmFtPC9wPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9zLXYtbmF0aW9uYWwtaW5zdGl0dXRlLW9mLXRlY2hub2xvZ3ktc3ZuaXQtc3VyYXQtbml0LXN1cmF0LVwiPjxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZm9udC1zZW1pYm9sZCBwLTEgbWQ6cC0zXCI+PGltZyBjbGFzc05hbWU9XCJ3LTEwXCIgc3JjPVwiaW1hZ2VzL0Zvb3Rlci1pY29ucy9MaW5rZWRJbi1pY29uLnN2Z1wiLz4mbmJzcDs8cCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5MaW5rZWRJbjwvcD48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9OSVRfU3VyYXQ/cz0yMFwiPjxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZm9udC1zZW1pYm9sZCBwLTEgbWQ6cC0zXCI+PGltZyBjbGFzc05hbWU9XCJ3LTEwXCIgc3JjPVwiaW1hZ2VzL0Zvb3Rlci1pY29ucy9Ud2l0dGVyLWljb24uc3ZnXCIvPiZuYnNwOzxwIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPlR3aXR0ZXI8L3A+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB5LTMgcHgtNSB0ZXh0LXhzIG1kOnRleHQtbCB0ZXh0LWdyYXktMjAwIGZsZXgganVzdGlmeS1jZW50ZXJcIj4mY29weTsgMjAyMSBFbGVjdHJvbmljcyBEZXBhcnRtZW50ICwgYWxsIHJpZ2h0cyByZXNlcnZlZCAmIzY0OyBOYXRpb25hbCBpbnN0aXR1dGUgb2YgVGVjaG5vbG9neSwgU1VSQVQgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCl7XHJcbiAgICBjb25zdCBpbWFnZVN0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoOjkwLFxyXG4gICAgICAgIGhlaWd0aDo5MFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHAtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTQgZmxleCBmbGV4LXJvd1wiID5cclxuICAgICAgICAgICAgICAgIHsvKiBIZWFkaW5nICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1jZW50ZXIgbXQtMyBtZDptYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhsXCI+RWxlY3Ryb25pY3MgRGVwYXJ0bWVudDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWdyYXktNjAwXCI+IE5hdGlvbmFsIGluc3RpdHV0ZSBvZiBUZWNobm9sb2d5LCBTVVJBVCA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBMT0dPICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIG1kOmp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL05JVF9TdXJhdF9Mb2dvLnN2Zy5wbmdcIiBzdHlsZT17aW1hZ2VTdHlsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlQ2Fyb3VzZWwgZnJvbSBcIi4vSW1hZ2VDYXJvdXNlbC9JbWFnZUNhcm91c2VsXCI7XHJcbmltcG9ydCBIb21lSGVhZGVyIGZyb20gXCIuL0hvbWVIZWFkZXIvSG9tZUhlYWRlclwiXHJcblxyXG5mdW5jdGlvbiBIb21lKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIGJnLWdyYXktMjAwIGdyaWQgZ3JpZC1jb2xzLTFcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxIb21lSGVhZGVyLz5cclxuXHJcbiAgICAgICAgICAgIDxJbWFnZUNhcm91c2VsLz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBEZXBhcnRtZW50IE1pc3Npb24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IG0tNCBiZy1ncmF5LTMwMCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTYwMCB0ZXh0LWJvbGQgdGV4dC1jZW50ZXJcIj5EZXBhcnRtZW50IE1pc3Npb248L2g2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCB0ZXh0LWNlbnRlciB0ZXh0LWxcIj5UaGUgbWlzc2lvbiBvZiB0aGUgRWxlY3Ryb25pY3MgRW5naW5lZXJpbmcgRGVwYXJ0bWVudCBpcyB0byBjb250cmlidXRlIHRvIHNvY2lldHkgYW5kIGluZHVzdHJ5IHRocm91Z2ggZXhjZWxsZW5jZSBpbiBlZHVjYXRpb24sIHJlc2VhcmNoLCBpbm5vdmF0aW9ucyBhbmQgZXRoaWNzIGJ5IHN0YWtlaG9sZGVycy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIERlcGFydG1lbnQgTWlzc2lvbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCBwLTYgbXgtNCBtYi00IHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktNjAwIHRleHQtYm9sZCB0ZXh0LWNlbnRlclwiPkRlcGFydG1lbnQgVmlzaW9uPC9oNj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgdGV4dC1jZW50ZXIgdGV4dC1sXCI+VGhlIHZpc2lvbiBvZiB0aGUgRWxlY3Ryb25pY3MgRW5naW5lZXJpbmcgRGVwYXJ0bWVudCBpcyB0byBBaW0gdG8gYWNoaWV2ZSBxdWFsaXR5IGluIGVkdWNhdGlvbiBhbmQgcmVzZWFyY2ggdG8gY3JlYXRlIGxlYWRpbmcgRWxlY3Ryb25pY3MgZW5naW5lZXJzLCByZXNlYXJjaGVycyBhbmQgZW50cmVwcmVuZXVycy48L3A+ICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSG9tZUhlYWRlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgcC04IG14LTQgbXQtNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogSGVhZGluZyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWdyYXktNjAwIHRleHQtMnhsIGZvbnQtYm9sZFwiPkRlcGFydG1lbnQgVmlydHVhbCBUb3VyPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lSGVhZGVyOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZVNsaWRlIGZyb20gXCIuL0ltYWdlU2xpZGUvSW1hZ2VTbGlkZVwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VDYXJvdXNlbCgpe1xyXG5cclxuICAgIGNvbnN0IGltYWdlc0FycmF5ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC0xLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiMVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9lY2VkSW1hZ2VzL2VjZWQtMi5qcGdcIixcclxuICAgICAgICAgICAgXCJrZXlcIjpcIjJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZWNlZEltYWdlcy9lY2VkLTMuanBnXCIsXHJcbiAgICAgICAgICAgIFwia2V5XCI6XCIzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC00LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiNFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9lY2VkSW1hZ2VzL2VjZWQtNS5qcGdcIixcclxuICAgICAgICAgICAgXCJrZXlcIjpcIjVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZWNlZEltYWdlcy9lY2VkLTYuanBnXCIsXHJcbiAgICAgICAgICAgIFwia2V5XCI6XCI2XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC03LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiN1wiXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG5cclxuICAgIHZhciBzbGlkZUluZGV4ID0gMDtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93U2xpZGVzKCkge1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIHZhciBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXlTbGlkZXNcIik7XHJcbiAgICAgICAgdmFyIGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZG90XCIpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzbGlkZUluZGV4Kys7XHJcbiAgICAgICAgaWYgKHNsaWRlSW5kZXggPiBzbGlkZXMubGVuZ3RoKSB7c2xpZGVJbmRleCA9IDF9ICAgIFxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRvdHNbaV0uY2xhc3NOYW1lID0gZG90c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWRlc1tzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcclxuICAgICAgICBkb3RzW3NsaWRlSW5kZXgtMV0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG4gICAgICAgIHNldFRpbWVvdXQoc2hvd1NsaWRlcywgNTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzaG93U2xpZGVzKCk7XHJcbiAgICB9LCBbc2xpZGVJbmRleF0pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG14LTQgcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gbWQ6bXgtMFwiPiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXNob3ctY29udGFpbmVyIG1kOmgtOTZcIj5cclxuXHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VzQXJyYXkubWFwKChpbWFnZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVNsaWRlIGtleT17aW1hZ2UuaWR9ey4uLmltYWdlfS8+ICAgIFxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiIHN0eWxlPXt7dGV4dEFsaWdubWVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcm91c2VsO1xyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cIm10LTQgbXgtNCByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBtZDpteC0wXCI+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlc2hvdy1jb250YWluZXIgaC05NiBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbnVtYmVydGV4dFwiPjEgLyAzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2xpZGUtaW1hZ2VcIiBzcmM9XCJpbWFnZXMvZWNlZEltYWdlcy8zLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+Q2FwdGlvbiBUZXh0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbnVtYmVydGV4dFwiPjIgLyAzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbGlkZS1pbWFnZVwiIHNyYz1cImltYWdlcy9lY2VkSW1hZ2VzLzQuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPkNhcHRpb24gVHdvPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbnVtYmVydGV4dFwiPjMgLyAzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbGlkZS1pbWFnZVwiIHNyYz1cImltYWdlcy9lY2VkSW1hZ2VzLzUuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPkNhcHRpb24gVGhyZWU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiIHN0eWxlPXt7dGV4dEFsaWdubWVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VTbGlkZSh7aW1hZ2VTcmN9KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2xpZGUtaW1hZ2VcIiBzcmM9e2ltYWdlU3JjfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNsaWRlOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGUvbG9hZGVyLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTG9hZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCBib3R0b20tMCB3LWZ1bGwgaC1zY3JlZW4gei01MCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS03MDAgIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlciBlYXNlLWxpbmVhciByb3VuZGVkLWZ1bGwgYm9yZGVyLTQgYm9yZGVyLXQtNCBib3JkZXItZ3JheS0yMDAgaC0xMiB3LTEyIG1iLTRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPkxvYWRpbmcuLi48L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPlRoaXMgbWF5IHRha2UgYSBmZXcgc2Vjb25kcywgcGxlYXNlIGRvbid0IGNsb3NlIHRoaXMgcGFnZS48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdG9nZ2xlciBmcm9tIFwiLi90b2dnbGVyXCJcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpe1xyXG4gICAgY29uc3QgbXlTdHlsZSA9IHtcclxuICAgICAgICB3aWR0aDoyMFxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdG9nZ2xlcigpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBtZDpjb2wtc3Bhbi0xIG0tMyBiZy1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICA8bmF2ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IGJvcmRlci1iIGJvcmRlci1ncmF5LTEwMCBmbGV4IGp1c3RpZnktYmV0d2VlbiAgbWQ6ZmxleCBtZDpqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbCBmb250LWJvbGQgIHVwcGVyY2FzZSBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgY3Vyc29yLXBvaW50ZXIgdGV4dC14bCBob3Zlcjp0ZXh0LWdyYXktMTAwXCI+RWxlY3Ryb25pY3MgRGVwYXJ0bWVudDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBjdXJzb3ItcG9pbnRlciBtZDpoaWRkZW5cIiBpZD1cIm1lbnVCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgaC04IHctOFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRleHQtbGVmdCBoaWRkZW4gbWQ6YmxvY2tcIiBpZD1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcC02IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImgtNiB3LTZcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMyAxMmwyLTJtMCAwbDctNyA3IDdNNSAxMHYxMGExIDEgMCAwMDEgMWgzbTEwLTExbDIgMm0tMi0ydjEwYTEgMSAwIDAxLTEgMWgtM20tNiAwYTEgMSAwIDAwMS0xdi00YTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2NGExIDEgMCAwMDEgMW0tNiAwaDZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4gPGEgaHJlZj1cIi4vXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTEwMFwiPiZuYnNwO0hvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcHgtNiBwYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaC01IHctNVwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTggMTBhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS03IDRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0tMS05YTEgMSAwIDAwLTEgMXY0YTEgMSAwIDEwMiAwVjZhMSAxIDAgMDAtMS0xelwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPjxhIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS0xMDBcIj4mbmJzcDtBYm91dDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcHgtNiBwYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3N2Z3MvUGVvcGxlLnN2Z1wiIHN0eWxlPXtteVN0eWxlfS8+PGEgaHJlZj1cIkZhY3VsdGllc1BhZ2VcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMTAwXCI+Jm5ic3A7RmFjdWx0aWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtZ3JheS00MDAgdGV4dC14bCBweC02IHBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvc3Zncy9SZXNlYXJjaC5zdmdcIiBzdHlsZT17bXlTdHlsZX0vPjxhIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS0xMDBcIiBocmVmPVwiUmVzZWFyY2hQYWdlXCI+Jm5ic3A7UHJvamVjdHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdGV4dC1ncmF5LTQwMCB0ZXh0LXhsIHB4LTYgcGItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctNlwiIHNyYz1cImltYWdlcy9zdmdzL0ZhY2lsaXRpZXMuc3ZnXCIvPjxhIGhyZWY9XCJSZXNlYXJjaEZhY2lsaXRpZXNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMTAwXCI+Jm5ic3A7RmFjaWxpdGllczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZXIoKXtcclxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVCdXR0b25cIik7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xyXG5cclxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+XHJcbiAgICAge1xyXG4gICAgICAgIGlmKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZ2dsZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhci9OYXZiYXJcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL0hvbWUvSG9tZVwiO1xyXG5cclxuZnVuY3Rpb24gUGFnZUxheW91dCh7Y2hpbGRyZW59KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTRcIj5cclxuICAgICAgICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMyBwLTNcIj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUxheW91dDsiLCJjb25zdCBEYXRhMjAxN18xOCA9IFtcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDFcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIkNISUxEIFNBRkVUWSBXRUFSQUJMRSBERVZJQ0VcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDI5XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkJPTU1BVEhVTEEgTUFESFUgU0lORFVSQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gUC4gSy4gU2hhaFwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTEzXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlNIQUlLIEtIQUxJREEgUEFSVkVFTlwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwOTlcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQk9NTUlORU5JIFlBTUlOSSBTQVJBU1dBVEhJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEwMFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJWRU5JR0FMTEEgVklOVVRITkFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAyXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJUT05HVUUgQ09OVFJPTExFRCBXSEVFTENIQUlSXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAwMVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBVklOQVNIIE5BWUFLXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBQLiBLLiBTaGFoXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMTJcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUFJBU0hBTlRIIFlBQ0hVUklcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDMwXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlNBWUFOIFNBSEFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDMzXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkFCSElSVVAgUEFOSkFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAzXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJUTyBBTkFMWVNFIFJFQUxJU1RJQyBHIENIQU5ORUwgTU9ERUxTIEFORCBORVRXT1JLXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAwM1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJWWUFTIEpBVEFOIE5JTEFZXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLihEci4pIFUuIEQuIERhbGFsXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMjhcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiU1VUQVIgU0FSRkFSQVogU0lSQUpCSEFJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEwNlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBSVRBIFNJTkRIVSBTUkVFXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzExMFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJHT1BJIERPU0hJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgNFwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiU0VDVVJFIEFORCBFRkZJQ0lFTlQgSEFORE9WRVIgQVVUSEVOVElDQVRJT04gQlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMDVcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiU0hBSUxBSkEgWUVMRVNXQVJBUFVcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuKERyLikgVS4gRC4gRGFsYWxcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAxOVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJFQVNIV0VSIFNVQlJBTUFOSUFNXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA3NFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJERVZBUkFLT05EQSBTTkVIQSBQUkFQVVJOQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwOTNcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQUFESVRZQSBLQVVMXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgNVwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiSU5ET09SIExPQ0FMSVpBVElPTiBVU0lORyBNQUNISU5FIExFQVJOSU5HIEFORFwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMDJcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUEFUSUwgTUVESEEgTUFIRVNIXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLihEci4pIFUuIEQuIERhbGFsXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNDZcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQUFTSElTSCBLVU1BUiBNSVNSQUFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDc5XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlBBVElMIE1VR0RIQSBTQU5KQVlcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTYxXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlNPVVJBQkggREFTXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgNlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiSVJSSUdBVElPTiBTWVNURU0gVVNJTkcgWklHQkVFXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAxNFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJKRVNFRUtBIERFVkVORFJBIFNIQUhcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIE4uIEIuIEthbmlya2FyXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMTZcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiWUVTSEEgSEFSSVNIIEdPTkRBTElBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEzNVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBTUVZIE1JU0hSQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMzhcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiVklLUkFOVCBTSU5HSCBTSE9FUkFOXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgN1wiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiUkZJRCBCQVNFRCBBVFRFTkRBTkNFIFNZU1RFTSBXSVRIIFNNUyBOT1RJRklDQVRJXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAxM1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJUQU5WSSBQIEtVUkxFS0FSXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBOLiBCLiBLYW5pcmthclwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDE3XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkFSVVNBIFJBWUVFUyBBSE1FRCBLSEFMRkFZXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA2OVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJNQVRIVVIgUkFIVUwgS0FJTEFTSEJIQUlcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDczXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkpBR0FSQVBVIFJPSElUSCBLVU1BUlwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDhcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlJFU1RBVVJBTlRTIEFVVE9NQVRJT04gVVNJTkcgWklHQkVFXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAwNlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJGQVpBTCBGSVJPWlNIQUggRElXQU5cIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIE4uIEIuIEthbmlya2FyXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwOTFcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQU1JSkVFVCBLVU1BUlwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwOTVcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTUlTVFJZIEpJTUlUIFZJUFVMXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA5NlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBTlVHUkFIIE5JTUFWQVRcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyA5XCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJIT01FIEFVVE9NQVRJT04gU1lTVEVNIFVTSU5HIFdJRkkgTU9EVUxFXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAyMVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJQQUdBIFJBTklcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIE4uIEIuIEthbmlya2FyXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMzVcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTUVFTkEgTklUQUtVTUFSSSBHSEFOU0hZQU1cIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDQyXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlNBUk9KIE1BTVRBIEtVQkVSUkFNXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA0N1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJDSEFVSEFOIE1FR0hBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMTBcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlZFSElDTEUgQUNDSURFTlQgRyBERVRFQ1RJT04sIFJFUE9SVElORyBBTkQgTkFWSUdcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDcwXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlBFUlVNQUxMQSBLT1RFU1dBUkEgUkFPXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJEci4gSi4gTi4gU2FydmFpeWFcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA3MVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJUQU5HSVJBTEEgQUtISUwgUkVERFlcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDk4XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkNIQUxMQVBBTExJIFBSQU1PRFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNDlcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTklURVNIIFBSQUJIQUtBUkFOIE5BSVJcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAxMVwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiRkVBVFVSRSBFWFRSQUNUSU9OIEZPUiBJTUFHRSBSRUdJU1RSQVRJT05cIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDIzXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkdVVFRBIFJBTVlBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJEci4gSi4gTi4gU2FydmFpeWFcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA1M1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJDSE9QUEFSQVBVIFNBSSBBS0hJTFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNjRcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQk9EREFQQVRJIFNSQVZBTklcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTUwXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkJJTEtJU0ggQVJBIE5BSUtPRElcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAxMlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiRyBST1MgQkFTRUQgUk9CT1RJRVMgU1lTVEVNXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzExMlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJOQUlWRURIIEpBSU5cIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIChEci4pIEEuIEQuIERhcmppXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMTdcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUkFIVUwgR1VOS0FSXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzExOVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJLQVJUSUtcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTM0XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlQgU0FOREVFUFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDEzXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJQSFlTSU9MT0dJQ0FMIFNJR05BTCBNT05JVE9SSU5HIFNZU1RFTVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMDRcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTUVIVEEgQU1JIENIRVRBTktVTUFSXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiAoRHIuKSBBLiBELiBEYXJqaVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTE1XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlNIQUggQU1PTEkgUkFKRVNIQkhBSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMThcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiR09QSSBLQU1MRVNIIFBBVEVMXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEzMlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJCSEFUVCBTRUpBTCBIRU1BTlRcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAxNFwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiTCBBTkQgUyBCQU5EIE1JQ1JPV0FWRSBHIE1PTk9MSVRISUMgSU5URUdSQVRFRCBDSVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNDNcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTUFSQUJBVEhVTEEgVkVOS0FUIE5JS0hJTFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIFAuIE4uIFBhdGVsXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNTFcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiS0FUVEEgU0lWQVJBTVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwODNcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQURFUFUgVklORUVUSCBLVU1BUlwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwODVcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUEFMRVBVIFBVTkVFVEggSE9USFJBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMTVcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlZPSUNFIEcgQ09OVFJPTExFRCBIT01FIEFQUExJQ0FUSU9OXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAwOFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJLT1IgUEFSQVMgTUVSQU1CSEFJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBaLiBNLiBQYXRlbFwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDEwXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkJIVVZBIEJSSUpFU0hLVU1BUiBSQU1BTklLQkhBSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMjBcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiU0FESFUgTUFZQU5LIERJUEFLQkhBSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMjJcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiR09ISUwgS0FSQU5LVU1BUiBIQVNNVUtIQkhBSXNcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAxNlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiQVJNIFBST0NFU1NPUiBCQVNFRCBSRUFMIFRJTUUgQ0FSIFRIRUZUIERFQ0xJTkVcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDI1XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlZFRVJBUFVSRUREWSBTQUkgUFVORUVUSCBSRUREWVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gWi4gTS4gUGF0ZWxcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAzOFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJTSUREVUxBIEpBSURFRVBcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDY2XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkRJVkkgWUFTV0FOVEhcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTYzXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkJVU0lSRUREWSBTSEFOVEFOIEtVTUFSIFJFRERZXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMTdcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIkVOVklST05NRU5UIE1PTklUT1JJTkcgQU5UIEFMRVJUIEJZIElOVEVMTElHRU5cIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTE0XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlBBUk1BUiBESEFXQUxLVU1BUiBQQVJFU0hLVU1BUlwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIFouIE0uIFBhdGVsXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNDNcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUkFLSE9MSVlBIFNIUkFEREhBQkVOIERJTElQQkhBSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNDVcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTUFESFVSSU1BIERBU1wiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNDdcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiSlVXQU4gSEVUVElBUkFDSENISUdFIFJBTkRJS0EgTEFLU0hBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMThcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIkZBQ0UgUkVDT0dOSVRJT04gVVNJTkcgRlBHQVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNjNcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQk9QUEEgTkFHQSBTVUpJVEhcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEouIEVuZ2luZWVyXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNzJcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiSU5USEEgQUtISUxcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDgxXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIktFTExBIENIQUlUQU5ZQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwODRcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTUFOSVNIIE1FRU5BXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMTlcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIklNQUdFIFBST0NFU1NJTkcgVVNJTkcgRU1CRURERUQgU1lTVEVNU1wiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwOTBcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiS09SSVZJIFRISU1NQUdVUlVEVVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gUC4gSi4gRW5naW5lZXJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEwNVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJLVU5DSEFMQSBKQVlBIE5BR0EgU0FJIEJIQVJHQVZcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTA3XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlNBS0UgSkFZQVNBSUtSSVNITkFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTA4XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlBBTExFUkxBIFJBTUFLQU5USCBSRUREWVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDIwXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJJT1QgQkFTRUQgSE9NRSBBVVRPTUFUSU9OIFNZU1RFTVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMDNcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTkVIQSBWRVJNQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gUC4gSi4gRW5naW5lZXJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEyNFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBWVVTSCBMQUJIXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEyNlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJMQUxJVCBSQU5LQVdBVFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMjlcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUEFURUwgRk9SVU1CRU4gU1VNQU5CSEFJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMjFcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIkZQR0EgQkFTRUQgUkVBTCBUSU1FIFNZU1RFTVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMjFcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTkdBUkcgQURJVEkgUkFUQU5MQUxcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEouIEVuZ2luZWVyXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMzZcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiVkFJSkFOQVBVUktBUiBTSEFNQkhBVkkgU0FOSklWXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzE0MVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBTU9MUFJBVEFQIFJBSkVTSCBTSU5HSFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNTJcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQkhBTlUgQU5OQVBPT1JOQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDIyXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJJTVBMRU1FTlRBVElPTiBPRiBHIFNJTkVXQVZFIEdFTkVSQVRPUiBGT1IgQklPSU1cIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDQ1XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkFLS0VMQSBTQUlLUklTSE5BXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJEci4oTXJzLikgUi4gTi4gRGhhdnNlXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNThcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUkVERFkgS0FOQ0hBTkEgR0FOR0EgQkhBVkFOSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNTlcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUEVOVU1BUlRISSBBSVNIV0FSWUFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDY3XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkJIQUkgSEFSSVNIXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMjNcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlNNQVJUIEJBTkRcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTU1XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlRFSkFTV0lOSSBTQU5EQVBPTExBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJEci4gQS4gUy4gTWFuZGxvaVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTU3XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkFFUlJBIFJBTVlBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzE1OVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJNWU5FTkkgQ0hBUklTSE1BXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzE2NFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJTQU1JTkVOSSBQT09KQSBQUkFWQUxMSUtBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMjRcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIkxJTkVBUiBHIERFVEVDVElPTiBURUNITklRVUVTIEZPUiBNSU1PIFNZU1RFTVNcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDc3XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIk5BS0lSQUtPTU1VTEEgTUFOSVNIXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJEci4oTXJzLikgUy4gR3VwdGFcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA4OFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJLQVJSSSBFU1dBUiBOQUdBIEFZWUFQUEEgUkVERFlcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTU0XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkRST05BIEtVTUFSIERFS09OREFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTU2XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIktBVkVSSSBESU5FU0hcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAyNVwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiRlBHQSBJTVBMRU1FTlRBVElPTiBPRiBSUyBDT0RFXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA0MFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBSU5BTVBVREkgU1VTTUlUSEFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIkRyLihNcnMuKSBTLiBHdXB0YVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDc1XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlJBTUlSRUREWSBBTVJVVEhBIFZBUlNISU5JXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA3OFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJOSUtISVRBIE1BREhVU1VEQU4gQkhPT1BBVElcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDgwXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIktBTlRBTU5FTkkgR0VFVEhJS0EgVkFSU0hBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMjZcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlBBVENIIEFOVEVOTkFcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDExXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkJISU5HQVJERSBTQUhJTCBSQUpFU0hcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIEcuIFNhbnRyYVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDYxXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkRIVVBBTSBOQVZFRU5cIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDg3XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlRIT1RBUEFMTEkgTkFWRUVOXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzE1M1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJOQUlSIEtBUlRISUsgTVVSQUxJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMjdcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlZFSElDTEUgVFJBQ0tJTkcgVVNJTkcgR1BTLUdTTVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTEzRUMxMDJcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQ0hJVFJPREEgU0FOSkFZS1VNQVIgS0FOVElCSEFJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBHLiBTYW50cmFcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTNFQzE0N1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJNVVpBTUVMXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEwMVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBQVNITEVTSCBQQVRFTFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMTZcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUkFOQSBWSVJBSiBESEFSTUVORFJBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMjhcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIldJUkVMRVNTIEVMRUNUUklDSVRZIEcgQ09OU1VNUFRJT04gTUVURVIgVVNJTkcgR1NcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDM5XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkRJVllBTSBGQVRFSFBVUklBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJEci4oTXJzLikgSi4gTi4gUGF0ZWxcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA2MlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJVSkpXQUwgS1VNQVJcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTAyXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlBSQUpBUEFUSSBNQUhJUEFMIElTSFZBUkJIQUlcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTQ4XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlNISVZBTSBUQU5ET05cIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAyOVwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiSU1BR0UgQ09OVFJPTExFRCBST0JPVCBMT0NBTElaQVRJT04gQU5EIE5BVklHQVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMzFcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQ09NQU5EVVIgUkFKQVNFS0hBUiBLQVJUSElLXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJEci4oTXJzLikgSi4gTi4gUGF0ZWxcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAzNlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJQT1RUSUdBUkkgU0FDSElOIE1PSEFOXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA3NlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJHVU5EQUJPSU5BIFJBTkpJVEhcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTYwXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlJBTSBSQURFU0ggREFWVUxVUklcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAzMFwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiU0lNVUxBVElPTiBCQVNFRCBHIFNUVURZIE9GIFZBUklPVVMgU0VOU09SUyBSRVFVSVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNTBcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiR0FSQVBBVEkgU0FJIFRFSkFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBLLiBQLiBVcGxhXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwODJcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQkFMSVZBREEgUyBTIE5BR0FWQUxMSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwOTJcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiR09QSVNFVFRJIEtBVklUSEEgQkFCWVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwOTdcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiU0lEREFQVVJBTSBOSUhBUklLQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YTIwMTdfMTg7IiwiY29uc3QgRGF0YTIwMTlfMjAgPSBbXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlNQRUVDSCBSRUNPR05JVElPTiBVU0lORyBERUVQIExFQVJOSU5HXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDkxXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTUFOTkFNIFZJSkFZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEsuIFNoYWhcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwOTZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJUSEFNTUlORU5JIFlBU1dBTlRIIEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEwM1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk0gUyBTWUFNIFNVTkRBUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMjlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLSEFaSSBNQUhBTU1BRCBTQVpJRFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJvdXRhZ2UgYW5hbHlzaXMgJiBvcHRpbWFsIHBvd2VyIGFsbG9jYXRpb24gZm9yIGRvd25saW5rIG5vbi1vcnRob2dvbmFsIG11bHRpcGxlIGFjY2VzcyAobm9tYSlcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMjRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTSEFIIFJBSiBESEFWQUxCSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIEEuIEguIExhbGx1d2FkaWFcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMzdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTQVRJU0ggU0hJTkdSQUtISVlBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA0M1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBSQU5KQUwgQUdSQVdBTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNDVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTSElWQU5TSCBBR0FSV0FMXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAzXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkNPQUwgTUlORVJTJyBTQUZFVFkgTU9OSVRPUklORyBTWVNURU1cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMDdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTSFJFQVlBIEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gQS4gSC4gTGFsbHV3YWRpYVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAwOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BTkFTQSBLT1RIQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJDby1HdWlkZSA6IFByb2YuIFAuIEsuIFNoYWhcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMTBcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNT1hBIEFMUEVTSCBQQVRFTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMzVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJBTktJVEEgQkFLU0hJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyA0XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIklvVCBCQVNFRCBWT0lDRSBDT05UUk9MIE9GIEhPTUUgQVBQTElBTkNFUylcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwODNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQVRFTCBBTktVUktVTUFSIE5BUkVTSEJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gQS4gSC4gTGFsbHV3YWRpYVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA4NVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkJPR0hBUkEgSkVOSUxLVU1BUiBESU5FU0hCSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkNvLUd1aWRlIDogUHJvZi4gUC4gSy4gU2hhaFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEwMFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBUk1BUiBNQUxBWSBLQUxQRVNIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzExOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1FSFRBIEtVU0hBTCBKWU9USU5CSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyA1XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkZMQVNIIFNMT09EIElOVElNQVRJT04gT1ZFUiBHU00gTkVUV09SS1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTRFQzAwN1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNIVUJIQU5LQVIgVE9NQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gQS4gSC4gTGFsbHV3YWRpYVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTNFQzAzMVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBVEVMIEFQRUtTSEFCRU4gQU5JTEJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxM0VDMDM3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS1UgUkFKTkkgTUVFTkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxMzVFQzEyMlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNVREhBIENIQVVESEFSWVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgNlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJEZXNpZ24gYW5kIGRldmVsb3BtZW50IG9mIHNlbnNvciBub2RlIGZvciBmb29kIHN1cHBseSBjaGFpbiBtYW5hZ2VtZW50XCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDg0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0FSSUtIQURBIE1BTlNJIFJBTUpJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiAoTXJzLikgVS4gRC4gRGFsYWxcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwOTBcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTSVJJUFJPTFUgU0FJIFBSQU5BVlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMTRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTVVJFTElZQSBCQU5TSUJFTiBESU5FU0hCSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyA3XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlNpbXVsYXRpb24gYW5kIGFuYWx5c2lzIG9mIHdlYXJibGUgYW50ZW5uYSBmb3IgZGlmZmVyZW50IGZhYnJpYyBtYXRlcmlhbHNcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMDFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJWQU1BTkEgUkFWSU5EUkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIChNcnMuKSBVLiBELiBEYWxhbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEwN1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlZFTVVMQVBBTExJIFBBVkFOIFNBSSBHQU5FU0hcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTA4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVCBTUklOSVZBU0EgVkFSQSBDSEFLUkFWQVJUSFlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlVHSVJJIFNBSSBTQUdBUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgOFwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJFdmFsdWF0ZSBkaWVsZWN0cmljIGNvbnN0YW50IG9mIGRpZmZlcmVudCBmYWJyaWNzIHVzaW5nIHNvbGlkIGRpZWxldHJpYyBjZWxsXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTA0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQ0hFVlVMQU1BRERJIE5BVkVFTlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gKE1ycy4pIFUuIEQuIERhbGFsXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTA2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTkFNQUxJREVWSSBCSEFSQVRIIFJBSlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMjdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJSIEdBTkVTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMzVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLQVRIQUQgREhBVkFMIENISEFHQU5CSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyA5XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIklvVCBiYXNlZCBwbGFudCAmIHNvaWwgbW9uaXRvcmluZyBzeXN0ZW1cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMjdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJKQVJJV0FMQSBERUVQIEFTSElTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBOLiBCLiBLYW5pcmthclwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA1N1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlJBSkFUIEtVTUFSIFBBTklHUkFISVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNjFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJDSE9VSEFOIE1PTlUgSE9SSUxBTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxNDBcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTSEFIIEtBVVNUVUJIIE1BTklTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTBcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiSW9UIGJhc2VkIHBhdGllbnQgbW9uaXRvcmluZyBzeXN0ZW1cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMjJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJBQkhJU0hFSyBSQUpBTlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBOLiBCLiBLYW5pcmthclwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEzMVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFSWUFOIFNJTkdIIEFITEFXQVRcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTQzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTklUSVNIIFJBTkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDExXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkhhbmQgd3JpdHRlbiBjaGFyYWN0ZXIgcmVjb2duaXRpb24gdXNpbmcgbWFjaGluZSBsZWFybmluZ1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA0MFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BUlRZIFZFTktBVEEgSEFOVU1BVEggU0FJIEhBUlNISVRcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIEouIE4uIFNhcnZhaXlhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDQxXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS0FUVEFNVVJJIFNBSSBNQU5JIFNXRVRIQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNDdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLT0RVUkkgQVBBUk5BXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA0OFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BS0lORURJIFZBU0FWSSBERVZJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxMlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJJb1QgQkFTRUQgU01BUlQgSE9NRVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA4NlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktPWUEgU1JJTkFUSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gSi4gTi4gU2FydmFpeWFcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwODlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJUQU5OSVJVIFZJTk9EIEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzE0MVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFUQ0hJIFNSRUVIQVJTSEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk5BTkRJUEFUSSBWRU5LQVRBIFNBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTNcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiQVVUT05PTU9VUyBBR1JJQ1VMVFVSQUwgUk9CT1RcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNTNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQVRFTCBESFJVViBSQUpFTkRSQUtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBBLiBELiBEYXJqaVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA1NlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkdBTkRISSBNRUVUIEpBWUVORFJBS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDc0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0hBTktBUkFOQVJBWUFOQU4gSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTRcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiU01BUlQgQVRURU5EQU5DRSBTWVNURU1cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMDJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJSQVZFRU5BIE1PUkVTSFdBUiBWSU5DSFVSS0FSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBBLiBELiBEYXJqaVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAzOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNIQVNIV0FUSSBBU1RIQU5BXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEwOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkJIQU5BTkkgTUlMSUUgUElZVVNIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzExM1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk5BTkRJTkkgVVBBREhZQVlBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxNVwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJFLVdSSVRJTkcgVVNJTkcgQVJNIE1JQ1JPQ09OVFJPTExFUlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA3NlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkRFUEFOSSBCSFVNSUwgUkFKTklLQU5UQkhBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gQS4gRC4gRGFyamlcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTZcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiRGVzaWduIGFuZCBwZXJmb3JtYW5jZSBhbmFseXNpcyBvZiBlLXRleHRpbGUgYW50ZW5uYVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAwM1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk5JS0lUQSBOSUxFU0ggTUlTVFJZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBQLiBOLiBQYXRlbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAwNFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk5JS0hJVEEgUFJBVklOIE1PUkVcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDY5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS0FTSE1JUkEgUFJBRElQIEdIT01cIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDE3XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlBlcmZvcm1hbmNlIGFuYWx5c2lzIG9mIGtyZXRzY2htYW5uIGNvbmZpZ3VyYXRpb24gYmFzZWQgc2luZ2xlLWxheWVyZWQgc3ByIHN5c3RlbVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAzMFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkNIRVJVS1VSSSBQUkFTQU5USFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gUC4gTi4gUGF0ZWxcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNjNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQUtBTEFQQVRJIFJBVkkgS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDY1XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQU5BUEFSVEhJIE1BTkkgREVFUEFLIEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJCIFZJU0hOVURBVEhcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDE4XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkhlYWx0aCBtb25pdG9yaW5nIHN5c3RlbVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA4OFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkJFWkFXQURBIFBPT0pJVEhBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBaLiBNLiBQYXRlbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA5MlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlMgSEFSSSBDSEFOREFOQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwOTVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLT05BUkkgSk9TSE5BIFJFRERZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA5OFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BREVNIEdVUlUgTEFLU0hNSSBERVZJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxOVwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJJbnRlbGxpZ2VudCBhY2NpZGVudCBkZXRlY3Rpb24gYW5kIGFsZXJ0aW5nIHN5c3RlbVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzExMFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlZBTkdBTEEgQU5PT1NIQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gWi4gTS4gUGF0ZWxcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMTZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJWRUxMT1JFIFRJTkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTE3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS09QUEFMTEkgTkFHQSBTUkFWWUFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTIxXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiSUpKQURBIE5JS0lUSEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDIwXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkF1dG9ub21vdXMgcm9ib3QgZm9yIGluZHVzdHJpYWwgYXBwbGljYXRpb25cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMDlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNQVVTQU0gSklHTkVTSEtVTUFSIFBBVEVMXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBaLiBNLiBQYXRlbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAxM1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFTTUlUQSBKT0hSSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMTRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTSFJFWUEgQVNIT0sgQUdBUldBTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMThcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQU5LVEkgUkFKRVNIIFNIQUhcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDIxXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIk5MUCBDSEFUQk9UXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDU4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQ0hJTlRBUEFMTEkgREhBUk1FTkRSQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBQLiBKLiBFbmdpbmVlclwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA2OFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkRIVUxJUEFMQSBTUklNQU5JS0FOVEEgUEFSVEhVU0lWQUlOXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA3M1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BQ0hFUkxBIEtJUkFOIEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA3NVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlRBTExVUkkgTkFHQVNBSSBWRU5LQVRBIFNVREhFRVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDIyXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIklvVCBCQVNFRCBQQVJLSU5HIFNMT1QgTUFOQUdFTUVOVFwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA3MVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkNISU5OQU0gU1JJIEhBUklOSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBQLiBKLiBFbmdpbmVlclwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA3N1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktPTkRBIEtFRVJUSEkgUkVERFlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDc5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTUFMSUdJUkVERFkgQU1VTFlBIFJFRERZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA4MlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkxFS0tBTEEgTEVFTEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDIzXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIklvVCBCQVNFRCBTTUFSVCBBR1JJQ1VMVFVSRVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAyOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkJPWUEgU1JJIFJBU0hNSVRIQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBQLiBKLiBFbmdpbmVlclwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA1NFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBVTEFLQU0gTUFMQVRISVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNTVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJBTlVQQU1BIFJVRFJBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA2NlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkRVVlZBIE5JSEFSSUtBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyNFwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJIYW5kIHdyaXR0ZW4gZGlnaXQgcmVjb2duaXRpb24gc3lzdGVtIHVzaW5nIGZwZ2FcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMTFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTQUhBWSBSQUogVElSS0VZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEouIEVuZ2luZWVyXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDIyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiWUFEQVYgU1VESEFOU0hVU0lOSCBSQU1SQUpTSU5IXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAzMlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktVUkFQQVRJIFBSQURFRVAgTUFOSUtBTlRBIFNBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMjVcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiREVURVJNSU5JU1RJQyBTWVNURU0gRk9SIFNNQVJUIEFHUklDVUxUVVJFIFVTSU5HIElvVFwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAyNVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNBTE9OSSBOQVlBTiBKQUlOXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBBLiBTLiBNYW5kbG9pXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDU5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUklEREhJIE1PUkVcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDYwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQkhBR0FWQVRIIFJBQ0hBTkEgUkFNQUtBTlRIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA3MlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFOVVJBREhBIEdcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDI2XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkRpc3RhbmNlIG1lYXN1cmVtZW50IGZvciBibGluZCBwZW9wbGVcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMDJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJHT1VSQVYgREFTXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBBLiBTLiBNYW5kbG9pXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTEyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUkFWSSBNRU5BUklBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkNvLUd1aWRlIDogUHJvZi4gUC4gSy4gU2hhaFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzExOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktBUkFOIExPT05LRVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTIwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0lEREhBUlRIIEtIRVRBTlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMjdcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiU21hcnQgZ2FyYmFnZSBtb25pdG9yaW5nICYgc3lzdGVtXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDQ5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUEFURUwgS1JVVEkgVklQVUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuKE1ycy4pIFMuIEd1cHRhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDUyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQ09OVFJBQ1RPUiBKQU5LSSBLSVNIT1JcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDk5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTVVTS0FOIENIT1RSQU5JXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEzOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktFWUEgUEFSSURBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyOFwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJEZXRlY3Rpb24gb2YgaGF6YXJkb3VzIGdhc2VzIHVzaW5nIGlvdFwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAxNlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkNIQVJQT1QgS1JVTkFMIEZVTEpJQkhBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4oTXJzLikgUy4gR3VwdGFcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMjhcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQVJUSCBLQUxBTklcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTM2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUFJJWUFOS0tVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEzOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1FUkNIQU5UIFJVS1NISVQgTUFOSVNIS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDI5XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkR1YWwgYmFuZCBjaXJjdWxhcmx5IHBvbGFyaXplZCBhbm51bGFyIHJpbmcgc2xvdCBhbnRlbm5hXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDAxXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTklIQVIgTUFOT0ogUEFOVkFMS0FSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLihNcnMuKSBTLiBHdXB0YVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAwNVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1SSU5BTCBMQUtIRVJBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAyMFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNBUk9OSUEgVklTSEFMIEpBWUVTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMjNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJKT1NISSBEQVJTSElUIEtFVEFOQkhBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMzFcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiTW9iaWxlIGFwcCBjb250cm9sbGVkIG1ldGFsIGRldGVjY3RvclwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAzOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkJPTkdVIFZFTktBVEVTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLihNcnMuKSBTLiBOLiBTaGFoXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDQ2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQUlUVExBIFNBSU5BVEhcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDUwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTVVEREFHT05JIEtBTFlBTiBHT1VEXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEyNFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkdVREVMTEkgQkhBU0tBUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMzJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiVGV4dCB0byBpbWFnZSBzeW50aGVzaXMgdXNpbmcgZ2Fuc1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAxNVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNBTVBBVCBNQU5TSSBBTklMXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBLLiBQLiBVcGxhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDE2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUEFURUwgUEFSVEhBViBTVU1BTlRSQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiQ28tR3VpZGUgOiBEci4gS2lydGkgSW5hbWRhclwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAyOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkRIQVJBSVlBIEtSVVRJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA2N1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFCSElOQVYgSkFJTlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMzNcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiQ29udHJvbCBvZiBxdWFkY29wdGVyIHVzaW5nIGhhbmQgZ2VzdHVyZXNcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwOTdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQUkFKVkFMIEsgTlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gSy4gUC4gVXBsYVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEyM1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNBSSBLQVVTSElLIEtBTkRVS1VSSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJDby0gR3VpZGUgOiBEci4gS2FtYWwgQ2FwdGFpblwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEzN1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBSQVRIQUtPVEEgU0FNIE5JVEhJTiBDSE9DS0NFRVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxNDJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJCSVRMQSBCSEFOVSBURUpBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAzNFwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJWaWRlbyBkZWJsdXJyaW5nIHVzaW5nIGRlZXBsZWFybmluZ1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA4MFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBVTElQQVRJIFNIQVJBVEhLVU1BUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBLLiBQLiBVcGxhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDgxXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVElQSVJFRERZIFRIQVJVTiBSRUREWVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJDby1HdWlkZSA6IERyLiBKLiBOLiBTYXJ2YWl5YVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA4N1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIllBTUFOSSBCSEFSQVRIS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDkzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUkFDSFVSSSBBSkFZIEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiXHJcblx0fVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhMjAxOV8yMDsiLCJjb25zdCBEYXRhMjAxOF8xOSA9IFtcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDFcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiUEVSU09OQUwgQVNTSVNUQU5UIFJPQk9UXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDI1XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQkhBTkRBUkkgTUFZQU5LIEJIVVBBTFNJTkdIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEsuIFNoYWhcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNjFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJKQUxBU1VUUkFNIEdJUklTSCBLQUxZQU5cIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDY5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQ0hJVFRJTUFMTEEgU0FOVEhPU0hcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDk0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS0FSTkFUSSBOQUdBIEtJUkFOIFJFRERZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkNBUiBQQVJLSU5HIENPTlRST0xMRVJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwMjZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNQU5EQUxBWVdBTEEgVU1BTkcgU1VOSUxLVU1BUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBQLiBLLiBTaGFoXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDI3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiR0FOREhJIEpBWSBOSVJBVkJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDI4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUkFIVUwgR1VQVEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDQwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiWUFEQVYgT01QUkFLQVNIIE5BTkRMQUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDNcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiUkVBTCBUSU1FIEFVVE9NQVRJT04gSU4gQUdSSUNVTFRVUkVcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwODJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJHT1BJU0VUVFkgU0FJIEtJUkFOXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEsuIFNoYWhcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwODlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTQVJBU1dBVEhVTEEgVkVOS0FUQSBTQUkgU1JJIEhBUlNIQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwOTVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJBUklLQVRMQSBWSVNITlUgVkFSREhBTiBSRUREWVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxNDZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLQU1CQUxBIE1BSEVTSCBSQUpBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyA0XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlNNQVJUIEVOVklST05NRU5UIENPTlRST0wgSU4gR1JFRU4gSE9VU0VcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMDFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJBUkFESFlBIEJIQVRJQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBBLiBILiBMYWxsdXdhZGlhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTE1XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVkFHSCBESEFWQUxLVU1BUiBSQUhVTEJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTE2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQU1BTiBCSEFSVElcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTQzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQUdBUldBTCBQUkFFUklUIFBJWVVTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgNVwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJGTEFTSCBTTE9PRCBJTlRJTUFUSU9OIE9WRVIgR1NNIE5FVFdPUktcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE0RUMwMDdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTSFVCSEFOS0FSIFRPTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIEEuIEguIExhbGx1d2FkaWFcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTEzRUMwMzFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQVRFTCBBUEVLU0hBQkVOIEFOSUxCSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTNFQzAzN1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktVIFJBSk5JIE1FRU5BXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTM1RUMxMjJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTVURIQSBDSEFVREhBUllcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDZcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiQVVUT01BVElDIFdBSVRFUiBJTiBSRVNUQVVSQU5UU1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAzOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFKTUVFUkEgQVNIT0tcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gQS4gSC4gTGFsbHV3YWRpYVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzE0N1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkdBWlVMQSBTUklOSVZBUyBCQVBBSUFIIE5BSURVXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzE0OFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkJBTkRBUlUgU1VSRVNIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzE1MVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkdVREFQQVRJIE5BR0EgTUFOSUtBTlRBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyA3XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlRSQUZGSUMgREVOU0lUWSBCQVNFRCBTWVNURU1cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNzZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQRVRMVSBSQUogS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gQS4gSC4gTGFsbHV3YWRpYVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEyM1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BTEkgSEFSSVNIIEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEyNVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BREhBIE1BTklERUVQXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzE0OVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktPTkFLQUxMQSBEVVJHQSBQUkFTQURcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDhcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiUEhZU0lDQUwgTEFZRVIgRk9SIFZBTkVUXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDA1XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUFJBWUFTIFBBVE5BSUtcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIChNcnMuKSBVLiBELiBEYWxhbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA0NVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBPVEhVUiBCSEFWQU5BXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA3OVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktBU0FNIE5JS0hJVEhBIFJFRERZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA4MFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkpBWSBQQVRFTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgOVwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJQSFlTSUNBTCBMQVlFUiBJTVBMRU1FTlRBVElPTiBPRiBJRUVFIDgwMi4xMWFoXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDY0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUkFDSEFNQUxMVSBUSEFOTUFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiAoTXJzLikgVS4gRC4gRGFsYWxcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNjVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNQVJLQVBVUkFNIEtBVklUSEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTM4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiRFVCQVNJIFlBU0hXQU5USFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxNDVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJFRFVMQVBBTExJIEtFRVJUSElcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDEwXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIk5FVFdPUksgU0VMRUNUSU9OIEFORCBDSEFOTkVMIEFMTE9DQVRJT04gRk9SIFNcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNTRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJZRVJSQUdVREkgSEFWRUVMQUhcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIChNcnMuKSBVLiBELiBEYWxhbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA2N1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBTExFUkxBIEtFRVJUSEFOQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwODVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQUxMRVJMQSBTQUkgVEVKQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwODhcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLUklTVEFNIFJBSklUSEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDExXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlZJUlRVQUwgSU1QTEVNRU5UQVRJT04gT0YgTk9OLU9SVEhPR09OQUwgTVVMVFwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAxMFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkJJRFVSVSBZVUtUSSBTUklLQU5USFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gKE1ycy4pIFUuIEQuIERhbGFsXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDEzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0FVTVlBIFNIUklWQVNUQVZBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAxOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFCSElMQVNIQSBQT0REQVIgQUtTSEFZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEwOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNISUtIQSBDSEFVREhBUllcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDEyXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIk1FVEFMIERFVEVDVElPTiBST0JPVElDIFZFSElDTEUgVVNJTkcgQVJEVUlOT1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAyMlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkhBUlNISUtBIFNVQkFTSEkgTUFIRU5ESVJBTlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBOLiBCLiBLYW5pcmthclwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA1OFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BTlZBUiBQUkFTSEFOVCBTQVRJU0hCSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA2NlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBVEVMIE1JTk5BVCBQUkFWSU5CSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEzMVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlJBQ0hBTUFMTEEgTklUSU5cIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDEzXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIklPVCBCQVNFRCBIT01FIEFVVE9NQVRJT05cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNzdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNRUVTQUxBIFJBVEFOIEJBQlVcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIEouIE4uIFNhcnZhaXlhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDkwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQUxVR0FOVEkgVklOQVkgVCBIRUpBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA5OFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkJPREVNIE1BTklLQU5UQUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTAwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiRE9NTUFSQUpVIE1BSEVTSCBWQVJNQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTRcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiTkVVUkFMIE5FVFdPUksgRyBPTiBGUEdBIEZPUiBCSU9NRURJQ0FMIEFQUExJQ0FUSVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAwM1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlRBTEFUSSBBUlRIIEFTSElTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gQS4gRC4gRGFyamlcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwMDRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLQVNVTkRSQSBIQVNUSSBKSVRFTkRSQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwMTJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNT0RJIFNBSElMIEtBVVNISUtLVU1BUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNzFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNT0RJIEFOQU5EIFJBSkVTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTVcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiQlJBSU4gQ09NUFVURVIgSU5URVJGQUNJTkdcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNzVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQUklZQU5TSEkgR1VQVEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIEEuIEQuIERhcmppXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTE3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0FOSkFOQSBESElSQU5cIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTIwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTkFHTUEgUEFURUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTQyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUFJJWUFOU0hVIERBTEFMXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxNlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJERVNJR04gQU5EIElNUExFTUVOVEFUSU9OIE9GIE9QVElDQUwgQ09NTVVOSUNBXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTA3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiSkFJTiBQUklZQSBTQU5ERUVQXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBQLiBOLiBQYXRlbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzExMVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBTFNFVEtBUiBLRVdBTEtVTUFSIEJIVVBFTkRSQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMTJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNSVRIQU5JIEFESUwgSVFCQUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTEzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQkFNQU5JQSBIRUxJIEFNUlVUTEFMXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxN1wiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJQRVJGT1JNQU5DRSBBTkFMWVNJUyBPRiBPUFRJQ0FMIFNZU1RFTSBVU0lORyBPUFwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzExOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIllBREFWIEFNSVRLVU1BUiBSQU1FU0hDSEFORFJBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBQLiBOLiBQYXRlbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzExOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNBTkpFRVYgS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTI3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUkFIVUwgS0FOQVVKSVlBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEyOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNIUklNQUxJIFJBSFVMIEdPVklOREJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDE4XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIklOVEVMTElHRU5UIFNZU1RFTSBGT1IgVkVISUNBTEFSIEFDQ0lERU5UIERFVEVDXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDQyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUFVMTE9PUkkgSEFSSU5JS0FcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIFouIE0uIFBhdGVsXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDQzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUEFUSEFLT1RBIEpBWUFQQVZBTklcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDQ4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS0FUQSBUQVJVTiBTUkVFXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA1MlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFOS0FNIE1BREhVU1JFRVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTlcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiSU9UIEJBU0VEIElOVEVMTElHRU5UIFBBUktJTkcgU1lTVEVNXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDg2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUklTSElUSEEgTkFHQVJFRERZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBaLiBNLiBQYXRlbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA5MlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlJBVklMTEEgU1JJIEFTSEEgTEFUSEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDk2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiR0FKQVJMQSBSQVNITUlUSEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDk5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUEFOR1VMVVJJIExBS1NITUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDIwXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlNURVJFTyBVU0lORyBBTEdPUklUSE0gT04gRlBHQVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAwN1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkRFU0FJIEtSVVBBIEFNQlJJU0hCSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEouIEVuZ2luZWVyXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDE0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUFVSVklLIEtBTEFSSVlBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAzNlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlVNUkVUSFdBTEEgS0FJU0hBVkkgSElSRU5LVU1BUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwMzlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJSQVRIT0QgQUJISVNIRUsgUkFNRVNIQkhBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMjFcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDQ0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQ0hFUlVLVVJJIFNSSSBIQVJJS0FcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gUC4gSi4gRW5naW5lZXJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNDlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJDIEFLSElMIENIT1dEQVJZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA3MFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktPVElQQUxMSSBTQUkgU0FSQU4gS1JJU0hOQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNzRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJSQVZBVEhVIEFNT09MWUFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDIyXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkhBUkRXQVJFIEFORCBTT0ZUV0FSRSBDTy1ERVNJR04gT0YgRkFDRSBSRUNPR1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA1NVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlZBS0FUSSBBS0hJTEVTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBQLiBKLiBFbmdpbmVlclwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA1OVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktVUkFQQVRJIEJIQU5VUkFKQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNzJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTRUVMQU0gUFJJWUFESEFSU0hBTiBSRUREWVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNzNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJMQUtLSVNFVFRZIFBSVURIVkkgUkFKXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyM1wiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJJT1QgQkFTRUQgU01BUlQgVkVISUNMRVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCIgQ09OVFJPTCBNVVRVQUxMWSBFTkhBXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVTE1RUMwNTBcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiSEFSU0hWQVJESEFOIFMgREhBS0VSXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiRHIuIEEuIFMuIE1hbmRsb2lcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA1N1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk5BQkFOSVRBIERFV0FOXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA2MFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlZBRFVLVUwgUklTSEkgTUFOU1VLSEJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDYzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVEhPQkhBTkkgQU1JVCBESUxJUEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyNFwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJQRU1QQVJBVFVSRSBBTkQgSFVNSURJVFkgTU9OSVRPUklORyBGT1IgVU5ERVJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwMjFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTQU1JUiBQT1VERUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIEEuIFMuIE1hbmRsb2lcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNDZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJBU0hVVE9TSCBTSU5HSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwODFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTQUNISU5cIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDg3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0FWRSBQUkFWRUVOXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyNVwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJBSVIgUVVBTElUWSBSRVBPUlRJTkcgU1lTVEVNXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDA4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiRU5HSU5FRVIgS1JJU0hBIFNBUkpVXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBBLiBTLiBNYW5kbG9pXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTAzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUk9IQU4gS1VNQVIgSkhBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEyOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFCSElTSEVLIFNJTkdIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEzMFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBTkRJUkkgWUFTSEFTVklOSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMjZcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiSEFSRFdBUkUgRyBJTVBMRU1FTlRBVElPTiBPRiBTSUdOIExBTkdVQUdFIFRSQU5cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNDFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTSFJFWUFTSCBTVURBTUEgS0VKUklXQUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuKE1ycy4pIFMuIEd1cHRhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDQ3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQU5NT0wgU0lOR0hBTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNTFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNVVNVS1UgVklOQVkgS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDUzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVklQVUwgQ0hBVURIQVJZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyN1wiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJMQVNFUiBEUklWRVIgRk9SIE9QVElDQUwgQ09NTVVOSUNBVElPTiBXSVRIIFRFTVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAyOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkNIQVRUQSBSQUhVTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4oTXJzLikgUy4gR3VwdGFcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNjJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQVROQUxBIEtSSVNITkEgVEVKQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNjhcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJWQU1TRUUgS1JJU0hOQSBUQVRJS09OREFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDc4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQk9MTEFNUEFMTFkgVklWRUtcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDI4XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkFJUiBUUkFGRklDIENPTlRST0wgRk9SIERST05FU1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA4M1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBSQUZVTEwgU0hBUk1BXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLihNcnMuKSBTLiBHdXB0YVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEwNVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBFTlRFTEEgTkFHQVBSQVNBTlRIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzE1MFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkdBREkgTkFHQSBTQUkgTUFOSUtBTlRBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzE1MlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkdVRElNRVRUQSBTVUhSVVRIIEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyOVwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJVTkRFUiBXQVRFUiBQSVBFTElORSBHIExFQUtBR0UgREVURUNUSU9OIEFORCBMT0NcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMzRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLT1RIQSBWRU5LQVRBIEFOSUwgS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuKE1ycy4pIFMuIE4uIFNoYWhcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMzZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNVVZWQSBTQUlURUpBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEzOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNBUFBBIE5BUkVORFJBIEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzE0MFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlZJTkpBTSBCSEFSQVRIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAzMFwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMjZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQSU5JTlRJIFNBSSBQUkFWQUxJSyBSRUREWVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4oTXJzLikgUy4gTi4gU2hhaFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEzN1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIksgQkhBUkFUIEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzE0MVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk0gUk9NQU5USCBDSE9XQU5cIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTQ0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiREVWQU5TSEkgSElOREtBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YTIwMThfMTk7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gUmVzZWFyY2goe1NyTm8sIFByb2plY3RUaXRsZSwgUm9sbE5vLCBTdHVkZW50TmFtZSwgUHJvamVjdEd1aWRlLCBjb2xvcn0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDx0ciBjbGFzc05hbWU9e2NvbG9yID09PSBcIjFcIiA/YGJnLWdyYXktMjAwYDpgYmctZ3JheS01MGB9PlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtjb2xvciA9PT0gXCIxXCIgP2Bib3JkZXItciBib3JkZXItZ3JheS01MGA6YGJvcmRlci1yIGJvcmRlci1ncmF5LTIwMGB9cz57U3JOb308L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtjb2xvciA9PT0gXCIxXCIgP2Bib3JkZXItciBib3JkZXItZ3JheS01MGA6YGJvcmRlci1yIGJvcmRlci1ncmF5LTIwMGB9PntQcm9qZWN0VGl0bGV9PC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17Y29sb3IgPT09IFwiMVwiID9gYm9yZGVyLXIgYm9yZGVyLWdyYXktNTBgOmBib3JkZXItciBib3JkZXItZ3JheS0yMDBgfT57Um9sbE5vfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2NvbG9yID09PSBcIjFcIiA/YGJvcmRlci1yIGJvcmRlci1ncmF5LTUwYDpgYm9yZGVyLXIgYm9yZGVyLWdyYXktMjAwYH0+e1N0dWRlbnROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2NvbG9yID09PSBcIjFcIiA/YGJvcmRlci1yIGJvcmRlci1ncmF5LTUwYDpgYm9yZGVyLXIgYm9yZGVyLWdyYXktMjAwYH0+e1Byb2plY3RHdWlkZX08L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZWFyY2g7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gRmFjaWxpdGllc0hlYWRlcih7dGl0bGV9KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHAtMTAgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS02MDAgdGV4dC0zeGwgZm9udC1ib2xkXCI+e3RpdGxlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjaWxpdGllc0hlYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZXNlYXJjaCBmcm9tIFwiLi9SZXNlYXJjaC9SZXNlYXJjaFwiO1xyXG5pbXBvcnQgRGF0YTIwMTdfMTggZnJvbSBcIi4vRGF0YS9EYXRhMjAxN18xOFwiO1xyXG5pbXBvcnQgRGF0YTIwMThfMTkgZnJvbSBcIi4vRGF0YS9EYXRhMjAxOV8yMFwiO1xyXG5pbXBvcnQgRGF0YTIwMTlfMjAgZnJvbSBcIi4vRGF0YS9EYXRhMjAxOF8xOVwiO1xyXG5pbXBvcnQgUmVzZWFyY2hIZWFkZXIgZnJvbSBcIi4vUmVzZWFyY2hIZWFkZXIvUmVzZWFyY2hIZWFkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFJlc2VhcmNoZXMoKXtcclxuXHJcbiAgICBjb25zdCBkaXZTdHlsZXIgPSB7XHJcbiAgICAgICAgaGVpZ2h0OjYwMFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKERhdGEyMDE3XzE4KTtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJQcm9qZWN0cyAyMDE3LTE4XCIpXHJcblxyXG4gICAgY29uc3QgY2hhbmdlc0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUgPT09IFwiMVwiKXtcclxuICAgICAgICAgICAgc2V0RGF0YShEYXRhMjAxN18xOCk7XHJcbiAgICAgICAgICAgIHNldFRpdGxlKFwiUHJvamVjdHMgMjAxNy0xOFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihldmVudC50YXJnZXQudmFsdWUgPT09IFwiMlwiKXtcclxuICAgICAgICAgICAgc2V0RGF0YShEYXRhMjAxOF8xOSk7XHJcbiAgICAgICAgICAgIHNldFRpdGxlKFwiUHJvamVjdHMgMjAxOC0xOVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0RGF0YShEYXRhMjAxOV8yMCk7XHJcbiAgICAgICAgICAgIHNldFRpdGxlKFwiUHJvamVjdHMgMjAxOS0yMFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuXHJcbiAgICAgICAgICAgIDxSZXNlYXJjaEhlYWRlciB0aXRsZT17dGl0bGV9Lz5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTNcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZDpncmlkLWNvbC0xIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvMVwiIGNsYXNzTmFtZT1cImZvcm0tcmFkaW8gaC00IHctNFwiIHZhbHVlPVwiMVwiIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlc0hhbmRsZXIoZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj4mbmJzcDtQcm9qZWN0cyBmcm9tIDIwMTctMTg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1kOmdyaWQtY29sLTEgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicmFkaW8xXCIgY2xhc3NOYW1lPVwiZm9ybS1yYWRpbyBoLTQgdy00XCIgdmFsdWU9XCIyXCIgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VzSGFuZGxlcihlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPiZuYnNwO1Byb2plY3RzIGZyb20gMjAxOC0xOTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWQ6Z3JpZC1jb2wtMSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpbzFcIiBjbGFzc05hbWU9XCJmb3JtLXJhZGlvIGgtNCB3LTRcIiB2YWx1ZT1cIjNcIiBvbkNoYW5nZT17KGUpID0+IGNoYW5nZXNIYW5kbGVyKGUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+Jm5ic3A7UHJvamVjdHMgZnJvbSAyMDE5LTIwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbC1oaWRlIHctZnVsbCBvdmVyZmxvdy1hdXRvIHAtMlwiIHN0eWxlPXtkaXZTdHlsZXJ9PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1ncmF5LTQwMCBwLTMgcm91bmRlZCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMSB3LThcIj5Tck5vPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMVwiPlByb2plY3RUaXRsZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTFcIj5Sb2xsTm88L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0xXCI+U3R1ZGVudE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0xXCI+UHJvamVjdEd1aWRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgocmVzZWFyY2gpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2VhcmNoPXtyZXNlYXJjaH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cmVzZWFyY2guU3R1ZGVudE5hbWV9ey4uLnJlc2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZWFyY2hlczsiXSwic291cmNlUm9vdCI6IiJ9