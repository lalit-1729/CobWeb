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

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\pages\\ResearchPage.js";






function ResearchFacilities() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_PageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Researches_Researches__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

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

var _jsxFileName = "C:\\Users\\Croma\\Desktop\\git-repo\\new repo\\CobWeb\\src\\Components\\Home\\Home.js";



function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "rounded bg-gray-200 grid grid-cols-1",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ImageCarousel_ImageCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-6 m-4 bg-gray-300 rounded",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        className: "text-2xl text-gray-600 text-bold text-center",
        children: "Department Mission"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-muted text-center text-l",
        children: "The mission of the Electronics Engineering Department is to contribute to society and industry through excellence in education, research, innovations and ethics by stakeholders."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-gray-300 p-6 mx-4 mb-4 rounded",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        className: "text-2xl text-gray-600 text-bold text-center",
        children: "Department Vision"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-muted text-center text-l",
        children: "The vision of the Electronics Engineering Department is to Aim to achieve quality in education and research to create leading Electronics engineers, researchers and entrepreneurs."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
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
              strokelinecap: "round",
              strokelinejoin: "round",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvd2VicGFjay9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUmVzZWFyY2hQYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9Ib21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL0hvbWUvSW1hZ2VDYXJvdXNlbC9JbWFnZUNhcm91c2VsLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9Ib21lL0ltYWdlQ2Fyb3VzZWwvSW1hZ2VTbGlkZS9JbWFnZVNsaWRlLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9QYWdlTGF5b3V0L05hdmJhci9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL1BhZ2VMYXlvdXQvTmF2YmFyL3RvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL1BhZ2VMYXlvdXQvUGFnZUxheW91dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVzZWFyY2hlcy9EYXRhLzIwMTdfMThEYXRhLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9SZXNlYXJjaGVzL0RhdGEvRGF0YTIwMThfMTkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL1Jlc2VhcmNoZXMvRGF0YS8yMDE4XzE5RGF0YS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVzZWFyY2hlcy9SZXNlYXJjaC9SZXNlYXJjaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVzZWFyY2hlcy9SZXNlYXJjaEhlYWRlci9SZXNlYXJjaEhlYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUmVzZWFyY2hlcy9SZXNlYXJjaGVzLmpzIl0sIm5hbWVzIjpbIlJlc2VhcmNoRmFjaWxpdGllcyIsIkZvb3RlciIsIkhlYWRlciIsImltYWdlU3R5bGUiLCJ3aWR0aCIsImhlaWd0aCIsIkhvbWUiLCJJbWFnZUNhcm91c2VsIiwiaW1hZ2VzQXJyYXkiLCJzbGlkZUluZGV4Iiwic2hvd1NsaWRlcyIsImkiLCJzbGlkZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJkb3RzIiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5IiwiY2xhc3NOYW1lIiwicmVwbGFjZSIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJtYXAiLCJpbWFnZSIsImlkIiwidGV4dEFsaWdubWVudCIsIkltYWdlU2xpZGUiLCJpbWFnZVNyYyIsIk5hdmJhciIsIm15U3R5bGUiLCJ0b2dnbGVyIiwibWVudUJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwiUGFnZUxheW91dCIsImNoaWxkcmVuIiwiRGF0YTIwMTdfMTgiLCJEYXRhMjAxOV8yMCIsIkRhdGEyMDE4XzE5IiwiUmVzZWFyY2giLCJTck5vIiwiUHJvamVjdFRpdGxlIiwiUm9sbE5vIiwiU3R1ZGVudE5hbWUiLCJQcm9qZWN0R3VpZGUiLCJjb2xvciIsIkZhY2lsaXRpZXNIZWFkZXIiLCJ0aXRsZSIsIlJlc2VhcmNoZXMiLCJkaXZTdHlsZXIiLCJoZWlnaHQiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwic2V0VGl0bGUiLCJjaGFuZ2VzSGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJlIiwicmVzZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDYmEsc0NBQXNDLHNCQUFzQjtBQUN6RSx5Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLHdEQUErRTtBQUN0RztBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7O0FBRUE7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEZBQTBGLGFBQWE7QUFDdkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGLGVBQWU7QUFDN0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVAsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhNQUE4TTs7QUFFOU07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsT0FBTztBQUNwQixhQUFhLFVBQVU7QUFDdkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvRUFBb0U7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztB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LFdBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETTtBQUFBLFNBQVQsQ0FSTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0NIOztHQWhFUUssVTs7S0FBQUEsVTtBQWdFUjtBQUVjQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BhZ2VzL1Jlc2VhcmNoUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcclxuICBpZiAoa2V5IGluIG9iaikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XHJcbiAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICB3cml0YWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG9ialtrZXldID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb2JqO1xyXG59IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIGFzc2lnbj1PYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KTttb2R1bGUuZXhwb3J0cz1hc3NpZ247bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JqZWN0LWFzc2lnbi5qcy5tYXAiLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1Jlc2VhcmNoUGFnZVwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXENyb21hXFxcXERlc2t0b3BcXFxcZ2l0LXJlcG9cXFxcbmV3IHJlcG9cXFxcQ29iV2ViXFxcXHBhZ2VzXFxcXFJlc2VhcmNoUGFnZS5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwibW9kdWxlLmV4cG9ydHMgPVxyXG4vKioqKioqLyAoZnVuY3Rpb24oKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcclxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XHJcblxyXG4vKioqLyA5MzE6XHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcclxuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cclxuXHJcbi8qKiovIH0pXHJcblxyXG4vKioqKioqLyBcdH0pO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcclxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XHJcbi8qKioqKiovIFx0XHJcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cclxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XHJcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcclxuLyoqKioqKi8gXHRcdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcclxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcclxuLyoqKioqKi8gXHRcdH1cclxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXHJcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcclxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxyXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxyXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxyXG4vKioqKioqLyBcdFx0fTtcclxuLyoqKioqKi8gXHRcclxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxyXG4vKioqKioqLyBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcclxuLyoqKioqKi8gXHRcdHRyeSB7XHJcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fbmNjd3Bja19yZXF1aXJlX18pO1xyXG4vKioqKioqLyBcdFx0XHR0aHJldyA9IGZhbHNlO1xyXG4vKioqKioqLyBcdFx0fSBmaW5hbGx5IHtcclxuLyoqKioqKi8gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xyXG4vKioqKioqLyBcdFx0fVxyXG4vKioqKioqLyBcdFxyXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcclxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcclxuLyoqKioqKi8gXHR9XHJcbi8qKioqKiovIFx0XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2NvbXBhdCAqL1xyXG4vKioqKioqLyBcdFxyXG4vKioqKioqLyBcdF9fbmNjd3Bja19yZXF1aXJlX18uYWIgPSBfX2Rpcm5hbWUgKyBcIi9cIjsvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKioqKioqLyBcdC8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXHJcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxyXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xyXG4vKioqKioqLyBcdHJldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDkzMSk7XHJcbi8qKioqKiovIH0pKClcclxuOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXHJcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXHJcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cclxuICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcclxuXHJcbi8vIEFUVEVOVElPTlxyXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXHJcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcclxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcclxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxyXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xyXG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XHJcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XHJcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xyXG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcclxudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XHJcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XHJcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xyXG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcclxudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcclxudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcclxudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcclxudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XHJcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcclxudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XHJcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xyXG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XHJcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcclxudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xyXG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xyXG5cclxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xyXG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xyXG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xyXG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcclxuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xyXG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XHJcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcclxuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xyXG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xyXG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XHJcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcclxuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcclxuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcclxuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcclxuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xyXG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcclxuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xyXG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XHJcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xyXG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XHJcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xyXG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xyXG59XHJcblxyXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XHJcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcclxuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XHJcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcclxuXHJcbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcclxuXHJcbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xyXG4gIHtcclxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XHJcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xyXG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xyXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxyXG4gIHtcclxuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcclxuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xyXG5cclxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcclxuICAgICAgZm9ybWF0ICs9ICclcyc7XHJcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xyXG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XHJcblxyXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XHJcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXHJcblxyXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxyXG5cclxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XHJcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxyXG5cclxuXHJcbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XHJcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XHJcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcclxuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XHJcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcclxuICBpZiAodHlwZSA9PSBudWxsKSB7XHJcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAge1xyXG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcclxuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIHR5cGU7XHJcbiAgfVxyXG5cclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcclxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XHJcblxyXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcclxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xyXG5cclxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcclxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XHJcblxyXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxyXG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xyXG5cclxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcclxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XHJcblxyXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XHJcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcclxuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xyXG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcclxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XHJcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XHJcblxyXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XHJcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcclxuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XHJcblxyXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XHJcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xyXG5cclxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XHJcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcclxuXHJcbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcclxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xyXG5cclxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xyXG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xyXG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xyXG5cclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxyXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxyXG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXHJcbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxyXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XHJcbnZhciBwcmV2TG9nO1xyXG52YXIgcHJldkluZm87XHJcbnZhciBwcmV2V2FybjtcclxudmFyIHByZXZFcnJvcjtcclxudmFyIHByZXZHcm91cDtcclxudmFyIHByZXZHcm91cENvbGxhcHNlZDtcclxudmFyIHByZXZHcm91cEVuZDtcclxuXHJcbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cclxuXHJcbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XHJcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xyXG4gIHtcclxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xyXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XHJcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xyXG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcclxuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcclxuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcclxuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcclxuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxyXG5cclxuICAgICAgdmFyIHByb3BzID0ge1xyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcclxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxyXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxyXG5cclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xyXG4gICAgICAgIGluZm86IHByb3BzLFxyXG4gICAgICAgIGxvZzogcHJvcHMsXHJcbiAgICAgICAgd2FybjogcHJvcHMsXHJcbiAgICAgICAgZXJyb3I6IHByb3BzLFxyXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcclxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXHJcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXHJcbiAgICAgIH0pO1xyXG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGVkRGVwdGgrKztcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xyXG4gIHtcclxuICAgIGRpc2FibGVkRGVwdGgtLTtcclxuXHJcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xyXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cclxuICAgICAgdmFyIHByb3BzID0ge1xyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXHJcblxyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XHJcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xyXG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcclxuICAgICAgICB9KSxcclxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xyXG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcclxuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xyXG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xyXG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xyXG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xyXG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xyXG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XHJcbnZhciBwcmVmaXg7XHJcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xyXG4gIHtcclxuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcclxuICAgICAgfSBjYXRjaCAoeCkge1xyXG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XHJcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XHJcbiAgICAgIH1cclxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXHJcblxyXG5cclxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XHJcbiAgfVxyXG59XHJcbnZhciByZWVudHJ5ID0gZmFsc2U7XHJcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xyXG5cclxue1xyXG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XHJcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XHJcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXHJcbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XHJcblxyXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIGZyYW1lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGNvbnRyb2w7XHJcbiAgcmVlbnRyeSA9IHRydWU7XHJcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXHJcblxyXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xyXG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XHJcblxyXG4gIHtcclxuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXHJcbiAgICAvLyBmb3Igd2FybmluZ3MuXHJcblxyXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcclxuICAgIGRpc2FibGVMb2dzKCk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXHJcbiAgICBpZiAoY29uc3RydWN0KSB7XHJcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxyXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aHJvdyBFcnJvcigpO1xyXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXHJcblxyXG5cclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXHJcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXHJcbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XHJcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxyXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcclxuICAgICAgICB9IGNhdGNoICh4KSB7XHJcbiAgICAgICAgICBjb250cm9sID0geDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIEZha2UuY2FsbCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcclxuICAgICAgICAgIGNvbnRyb2wgPSB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcclxuICAgICAgfSBjYXRjaCAoeCkge1xyXG4gICAgICAgIGNvbnRyb2wgPSB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmbigpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xyXG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cclxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xyXG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxyXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cclxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcclxuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xyXG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XHJcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XHJcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXHJcbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxyXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXHJcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcclxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxyXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxyXG4gICAgICAgIGMtLTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XHJcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXHJcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXHJcbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcclxuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXHJcbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXHJcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xyXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxyXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cclxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgIHMtLTtcclxuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cclxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cclxuXHJcbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcclxuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxyXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZmluYWxseSB7XHJcbiAgICByZWVudHJ5ID0gZmFsc2U7XHJcblxyXG4gICAge1xyXG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XHJcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xyXG4gICAgfVxyXG5cclxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcclxuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cclxuXHJcblxyXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XHJcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XHJcblxyXG4gIHtcclxuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcclxufVxyXG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xyXG4gIHtcclxuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XHJcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XHJcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcclxuXHJcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XHJcbiAgfVxyXG5cclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcclxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xyXG5cclxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxyXG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XHJcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcclxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcclxuXHJcbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxyXG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXHJcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XHJcblxyXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XHJcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xyXG5cclxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xyXG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xyXG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xyXG5cclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXHJcbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuICcnO1xyXG59XHJcblxyXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XHJcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcclxuICB7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcclxuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcclxuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcclxuICB7XHJcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXHJcbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xyXG5cclxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcclxuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcclxuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cclxuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXHJcbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXHJcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXHJcbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xyXG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICBlcnJvciQxID0gZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcclxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xyXG5cclxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XHJcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcclxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXHJcbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XHJcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcclxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xyXG4gIGtleTogdHJ1ZSxcclxuICByZWY6IHRydWUsXHJcbiAgX19zZWxmOiB0cnVlLFxyXG4gIF9fc291cmNlOiB0cnVlXHJcbn07XHJcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcclxudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xyXG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcclxuXHJcbntcclxuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xyXG4gIHtcclxuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XHJcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcclxuXHJcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcclxuICB7XHJcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xyXG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XHJcblxyXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xyXG4gIHtcclxuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XHJcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xyXG5cclxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XHJcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcclxuXHJcbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xyXG4gIHtcclxuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcclxuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XHJcblxyXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xyXG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xyXG4gIHtcclxuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcclxuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XHJcblxyXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xyXG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXHJcbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXHJcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xyXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHR5cGVcclxuICogQHBhcmFtIHsqfSBwcm9wc1xyXG4gKiBAcGFyYW0geyp9IGtleVxyXG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxyXG4gKiBAcGFyYW0geyp9IG93bmVyXHJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xyXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXHJcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XHJcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cclxuICogY2hhbmdlIGluIGJlaGF2aW9yLlxyXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcclxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cclxuICogQGludGVybmFsXHJcbiAqL1xyXG5cclxuXHJcbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XHJcbiAgdmFyIGVsZW1lbnQgPSB7XHJcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcclxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXHJcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XHJcbiAgICB0eXBlOiB0eXBlLFxyXG4gICAga2V5OiBrZXksXHJcbiAgICByZWY6IHJlZixcclxuICAgIHByb3BzOiBwcm9wcyxcclxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXHJcbiAgICBfb3duZXI6IG93bmVyXHJcbiAgfTtcclxuXHJcbiAge1xyXG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxyXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cclxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cclxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxyXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcclxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcclxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXHJcbiAgICAvLyBpZ25vcmVzIGl0LlxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcclxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcclxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgdmFsdWU6IHNlbGZcclxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxyXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xyXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICB2YWx1ZTogc291cmNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xyXG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xyXG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcbi8qKlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XHJcbiAqIEBwYXJhbSB7Kn0gdHlwZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcclxuICB7XHJcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcclxuXHJcbiAgICB2YXIgcHJvcHMgPSB7fTtcclxuICAgIHZhciBrZXkgPSBudWxsO1xyXG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxyXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XHJcbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxyXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XHJcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxyXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cclxuXHJcbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XHJcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xyXG4gICAgICByZWYgPSBjb25maWcucmVmO1xyXG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcclxuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxyXG5cclxuXHJcbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xyXG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XHJcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcclxuICAgICAgfVxyXG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcclxuXHJcblxyXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcclxuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xyXG5cclxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcclxuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGtleSB8fCByZWYpIHtcclxuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xyXG5cclxuICAgICAgaWYgKGtleSkge1xyXG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChyZWYpIHtcclxuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XHJcbiAgfVxyXG59XHJcblxyXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xyXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xyXG4gIHtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xyXG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xyXG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XHJcblxyXG57XHJcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcclxufVxyXG4vKipcclxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cclxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxyXG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxyXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxyXG4gKiBAZmluYWxcclxuICovXHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcclxuICB7XHJcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xyXG4gIHtcclxuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcclxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcclxuXHJcbiAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XHJcbiAge1xyXG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XHJcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XHJcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxyXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cclxuICogdXBkYXRlcy5cclxuICovXHJcblxyXG5cclxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XHJcbiAge1xyXG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcclxuXHJcbiAgICBpZiAoIWluZm8pIHtcclxuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XHJcblxyXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xyXG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbmZvO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxyXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcclxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXHJcbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xyXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cclxuICpcclxuICogQGludGVybmFsXHJcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cclxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxyXG4gKi9cclxuXHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcclxuICB7XHJcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xyXG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xyXG5cclxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXHJcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXHJcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXHJcblxyXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcclxuXHJcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XHJcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxyXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcclxuXHJcbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcclxuXHJcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxyXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcclxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cclxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxyXG4gKi9cclxuXHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XHJcbiAge1xyXG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcclxuXHJcbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xyXG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XHJcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXHJcbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xyXG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xyXG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXHJcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXHJcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xyXG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xyXG4gICAgICAgICAgdmFyIHN0ZXA7XHJcblxyXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxyXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cclxuICpcclxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcclxuICovXHJcblxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xyXG4gIHtcclxuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xyXG5cclxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwcm9wVHlwZXM7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxyXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXHJcbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XHJcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9wVHlwZXMpIHtcclxuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcclxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xyXG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XHJcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcclxuXHJcbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XHJcblxyXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xyXG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vKipcclxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXHJcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxyXG4gKi9cclxuXHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcclxuICB7XHJcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGtleSA9IGtleXNbaV07XHJcblxyXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcclxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcclxuXHJcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xyXG5cclxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xyXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcclxuXHJcbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xyXG5cclxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xyXG4gIHtcclxuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXHJcbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxyXG5cclxuICAgIGlmICghdmFsaWRUeXBlKSB7XHJcbiAgICAgIHZhciBpbmZvID0gJyc7XHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcclxuXHJcbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XHJcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciB0eXBlU3RyaW5nO1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcclxuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xyXG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcclxuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcclxuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XHJcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcclxuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXHJcbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXHJcblxyXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcclxuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cclxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cclxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXHJcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXHJcblxyXG5cclxuICAgIGlmICh2YWxpZFR5cGUpIHtcclxuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XHJcblxyXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XHJcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcclxuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xyXG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XHJcblxyXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xyXG5cclxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcclxuICB9KSgpO1xyXG59XHJcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXHJcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxyXG4gKlxyXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xyXG5cclxuLy8gVE9ETzogdGhpcyBpcyBzcGVjaWFsIGJlY2F1c2UgaXQgZ2V0cyBpbXBvcnRlZCBkdXJpbmcgYnVpbGQuXHJcbnZhciBSZWFjdFZlcnNpb24gPSAnMTcuMC4yJztcclxuXHJcbi8vIEFUVEVOVElPTlxyXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXHJcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcclxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcclxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxyXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xyXG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XHJcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XHJcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IDB4ZWFjYztcclxuZXhwb3J0cy5Qcm9maWxlciA9IDB4ZWFkMjtcclxudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XHJcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XHJcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xyXG5leHBvcnRzLlN1c3BlbnNlID0gMHhlYWQxO1xyXG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xyXG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xyXG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xyXG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcclxudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xyXG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcclxudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XHJcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcclxudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xyXG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XHJcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XHJcblxyXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XHJcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XHJcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XHJcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xyXG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XHJcbiAgZXhwb3J0cy5TdHJpY3RNb2RlID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xyXG4gIGV4cG9ydHMuUHJvZmlsZXIgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XHJcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcclxuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcclxuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xyXG4gIGV4cG9ydHMuU3VzcGVuc2UgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XHJcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XHJcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XHJcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XHJcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcclxuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XHJcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcclxuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xyXG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcclxuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xyXG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcclxuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcclxufVxyXG5cclxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xyXG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XHJcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xyXG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XHJcblxyXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXHJcbiAqL1xyXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcclxuICAvKipcclxuICAgKiBAaW50ZXJuYWxcclxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XHJcbiAgICovXHJcbiAgY3VycmVudDogbnVsbFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxyXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXHJcbiAqL1xyXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XHJcbiAgdHJhbnNpdGlvbjogMFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxyXG4gKlxyXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXHJcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cclxuICovXHJcbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcclxuICAvKipcclxuICAgKiBAaW50ZXJuYWxcclxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XHJcbiAgICovXHJcbiAgY3VycmVudDogbnVsbFxyXG59O1xyXG5cclxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcclxudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xyXG5mdW5jdGlvbiBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spIHtcclxuICB7XHJcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XHJcbiAgfVxyXG59XHJcblxyXG57XHJcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoc3RhY2spIHtcclxuICAgIHtcclxuICAgICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xyXG4gICAgfVxyXG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxyXG5cclxuXHJcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xyXG5cclxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxyXG5cclxuICAgIGlmIChjdXJyZW50RXh0cmFTdGFja0ZyYW1lKSB7XHJcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XHJcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxyXG5cclxuXHJcbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xyXG5cclxuICAgIGlmIChpbXBsKSB7XHJcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RhY2s7XHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVzZWQgYnkgYWN0KCkgdG8gdHJhY2sgd2hldGhlciB5b3UncmUgaW5zaWRlIGFuIGFjdCgpIHNjb3BlLlxyXG4gKi9cclxudmFyIElzU29tZVJlbmRlcmVyQWN0aW5nID0ge1xyXG4gIGN1cnJlbnQ6IGZhbHNlXHJcbn07XHJcblxyXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XHJcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcclxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXHJcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxyXG4gIElzU29tZVJlbmRlcmVyQWN0aW5nOiBJc1NvbWVSZW5kZXJlckFjdGluZyxcclxuICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxyXG4gIGFzc2lnbjogX2Fzc2lnblxyXG59O1xyXG5cclxue1xyXG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lO1xyXG59XHJcblxyXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxyXG4vL1xyXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxyXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXHJcblxyXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xyXG4gIHtcclxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XHJcbiAge1xyXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcclxuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcclxuICAgIH1cclxuXHJcbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XHJcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXHJcbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXHJcbiAge1xyXG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xyXG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XHJcblxyXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xyXG4gICAgICBmb3JtYXQgKz0gJyVzJztcclxuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XHJcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcclxuXHJcbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcclxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcclxuXHJcbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xyXG4gIH1cclxufVxyXG5cclxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xyXG5cclxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcclxuICB7XHJcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XHJcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XHJcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyBcIi5cIiArIGNhbGxlck5hbWU7XHJcblxyXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3IoXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcclxuXHJcbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXHJcbiAqL1xyXG5cclxuXHJcbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcclxuICAvKipcclxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAqIEBwcm90ZWN0ZWRcclxuICAgKiBAZmluYWxcclxuICAgKi9cclxuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcclxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cclxuICAgKlxyXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcclxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cclxuICAgKlxyXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcclxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXHJcbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cclxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cclxuICAgKiBAaW50ZXJuYWxcclxuICAgKi9cclxuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcclxuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXHJcbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxyXG4gICAqXHJcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cclxuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cclxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxyXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqL1xyXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcclxuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXHJcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXHJcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XHJcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxyXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXHJcbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqL1xyXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XHJcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XHJcbiAgfVxyXG59O1xyXG5cclxudmFyIGVtcHR5T2JqZWN0ID0ge307XHJcblxyXG57XHJcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XHJcbn1cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxyXG4gKi9cclxuXHJcblxyXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcclxuICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXHJcblxyXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxyXG4gIC8vIHJlbmRlcmVyLlxyXG5cclxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xyXG59XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcclxuLyoqXHJcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXHJcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXHJcbiAqXHJcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXHJcbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXHJcbiAqXHJcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcclxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXHJcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XHJcbiAqIGNvbXBsZXRlZC5cclxuICpcclxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXHJcbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxyXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxyXG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxyXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxyXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xyXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cclxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxyXG4gKiBAZmluYWxcclxuICogQHByb3RlY3RlZFxyXG4gKi9cclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xyXG4gIGlmICghKHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgfHwgcGFydGlhbFN0YXRlID09IG51bGwpKSB7XHJcbiAgICB7XHJcbiAgICAgIHRocm93IEVycm9yKCBcInNldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xyXG59O1xyXG4vKipcclxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxyXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cclxuICpcclxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxyXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cclxuICpcclxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxyXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxyXG4gKlxyXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cclxuICogQGZpbmFsXHJcbiAqIEBwcm90ZWN0ZWRcclxuICovXHJcblxyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xyXG59O1xyXG4vKipcclxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxyXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xyXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cclxuICovXHJcblxyXG5cclxue1xyXG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcclxuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcclxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXHJcbiAgfTtcclxuXHJcbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcclxuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XHJcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxyXG5cclxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcclxuLyoqXHJcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcclxuICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXHJcblxyXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xyXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XHJcbn1cclxuXHJcbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcclxucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxyXG5cclxuX2Fzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcclxuXHJcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xyXG5cclxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcclxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xyXG4gIHZhciByZWZPYmplY3QgPSB7XHJcbiAgICBjdXJyZW50OiBudWxsXHJcbiAgfTtcclxuXHJcbiAge1xyXG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZWZPYmplY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xyXG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XHJcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xyXG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0JztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XHJcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xyXG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHtcclxuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiB0eXBlO1xyXG4gIH1cclxuXHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XHJcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xyXG5cclxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XHJcbiAgICAgIHJldHVybiAnUG9ydGFsJztcclxuXHJcbiAgICBjYXNlIGV4cG9ydHMuUHJvZmlsZXI6XHJcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xyXG5cclxuICAgIGNhc2UgZXhwb3J0cy5TdHJpY3RNb2RlOlxyXG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xyXG5cclxuICAgIGNhc2UgZXhwb3J0cy5TdXNwZW5zZTpcclxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XHJcblxyXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XHJcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcclxuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xyXG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcclxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XHJcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XHJcblxyXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XHJcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcclxuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XHJcblxyXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XHJcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xyXG5cclxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XHJcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcclxuXHJcbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcclxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xyXG5cclxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xyXG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xyXG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xyXG5cclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xyXG4gIGtleTogdHJ1ZSxcclxuICByZWY6IHRydWUsXHJcbiAgX19zZWxmOiB0cnVlLFxyXG4gIF9fc291cmNlOiB0cnVlXHJcbn07XHJcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XHJcblxyXG57XHJcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcclxuICB7XHJcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xyXG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XHJcblxyXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XHJcbiAge1xyXG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcclxuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xyXG5cclxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xyXG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB7XHJcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcclxuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XHJcblxyXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xyXG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXHJcbiAgICBjb25maWd1cmFibGU6IHRydWVcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XHJcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHtcclxuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xyXG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XHJcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XHJcbiAge1xyXG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcclxuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XHJcblxyXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcclxuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBjb21wb25lbnROYW1lLCBjb25maWcucmVmKTtcclxuXHJcbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXHJcbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXHJcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xyXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHR5cGVcclxuICogQHBhcmFtIHsqfSBwcm9wc1xyXG4gKiBAcGFyYW0geyp9IGtleVxyXG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxyXG4gKiBAcGFyYW0geyp9IG93bmVyXHJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xyXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXHJcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XHJcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cclxuICogY2hhbmdlIGluIGJlaGF2aW9yLlxyXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcclxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cclxuICogQGludGVybmFsXHJcbiAqL1xyXG5cclxuXHJcbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XHJcbiAgdmFyIGVsZW1lbnQgPSB7XHJcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcclxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXHJcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XHJcbiAgICB0eXBlOiB0eXBlLFxyXG4gICAga2V5OiBrZXksXHJcbiAgICByZWY6IHJlZixcclxuICAgIHByb3BzOiBwcm9wcyxcclxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXHJcbiAgICBfb3duZXI6IG93bmVyXHJcbiAgfTtcclxuXHJcbiAge1xyXG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxyXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cclxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cclxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxyXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcclxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcclxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXHJcbiAgICAvLyBpZ25vcmVzIGl0LlxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcclxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcclxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgdmFsdWU6IHNlbGZcclxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxyXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xyXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICB2YWx1ZTogc291cmNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xyXG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xyXG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcbi8qKlxyXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXHJcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xyXG4gIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxyXG5cclxuICB2YXIgcHJvcHMgPSB7fTtcclxuICB2YXIga2V5ID0gbnVsbDtcclxuICB2YXIgcmVmID0gbnVsbDtcclxuICB2YXIgc2VsZiA9IG51bGw7XHJcbiAgdmFyIHNvdXJjZSA9IG51bGw7XHJcblxyXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xyXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcclxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcclxuXHJcbiAgICAgIHtcclxuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XHJcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XHJcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcclxuXHJcbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xyXG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XHJcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xyXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxyXG5cclxuXHJcbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XHJcblxyXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xyXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xyXG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xyXG4gICAgfVxyXG5cclxuICAgIHtcclxuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcclxuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xyXG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXHJcblxyXG5cclxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xyXG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xyXG5cclxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XHJcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHtcclxuICAgIGlmIChrZXkgfHwgcmVmKSB7XHJcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcclxuXHJcbiAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocmVmKSB7XHJcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XHJcbn1cclxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xyXG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XHJcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbn1cclxuLyoqXHJcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxyXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XHJcbiAgaWYgKCEhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSkge1xyXG4gICAge1xyXG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIiApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXHJcblxyXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXHJcblxyXG5cclxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XHJcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxyXG5cclxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcclxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXHJcbiAgLy8gdHJ1ZSBvd25lci5cclxuXHJcbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxyXG5cclxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcclxuXHJcbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XHJcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xyXG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cclxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcclxuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XHJcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcclxuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcclxuXHJcblxyXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcclxuXHJcbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcclxuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xyXG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXHJcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xyXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxyXG5cclxuXHJcbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XHJcblxyXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xyXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xyXG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcclxuICB9XHJcblxyXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xyXG59XHJcbi8qKlxyXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxyXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XHJcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXHJcbiAqIEBmaW5hbFxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xyXG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XHJcbn1cclxuXHJcbnZhciBTRVBBUkFUT1IgPSAnLic7XHJcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XHJcbi8qKlxyXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcclxuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xyXG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xyXG4gICAgJz0nOiAnPTAnLFxyXG4gICAgJzonOiAnPTInXHJcbiAgfTtcclxuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcclxuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcclxuICB9KTtcclxuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcclxufVxyXG4vKipcclxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XHJcbiAqIHBhdHRlcm4uXHJcbiAqL1xyXG5cclxuXHJcbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XHJcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XHJcblxyXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xyXG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcclxufVxyXG4vKipcclxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgQSBlbGVtZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcclxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cclxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xyXG4gICAgLy8gRXhwbGljaXQga2V5XHJcbiAgICByZXR1cm4gZXNjYXBlKCcnICsgZWxlbWVudC5rZXkpO1xyXG4gIH0gLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcclxuXHJcblxyXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcclxuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcclxuXHJcbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xyXG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXHJcbiAgICBjaGlsZHJlbiA9IG51bGw7XHJcbiAgfVxyXG5cclxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcclxuXHJcbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XHJcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ29iamVjdCc6XHJcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xyXG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XHJcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxyXG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xyXG4gICAgdmFyIF9jaGlsZCA9IGNoaWxkcmVuO1xyXG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcclxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3M6XHJcblxyXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcclxuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xyXG5cclxuICAgICAgaWYgKGNoaWxkS2V5ICE9IG51bGwpIHtcclxuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgIHJldHVybiBjO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xyXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XHJcbiAgICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXHJcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXHJcbiAgICAgICAgZXNjYXBlZFByZWZpeCArICggLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XHJcbiAgICAgICAgbWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIGV4aXN0aW5nIGVsZW1lbnQncyBrZXkgY2FuIGJlIGEgbnVtYmVyXHJcbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG5cclxuICB2YXIgY2hpbGQ7XHJcbiAgdmFyIG5leHROYW1lO1xyXG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxyXG5cclxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcclxuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xyXG4gICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdmFyIGl0ZXJhYmxlQ2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuXHJcbiAgICAgIHtcclxuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cclxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gaXRlcmFibGVDaGlsZHJlbi5lbnRyaWVzKSB7XHJcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcclxuICAgICAgICAgICAgd2FybignVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1VzZSBhbiBhcnJheSBvZiBrZXllZCBSZWFjdEVsZW1lbnRzIGluc3RlYWQuJyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoaXRlcmFibGVDaGlsZHJlbik7XHJcbiAgICAgIHZhciBzdGVwO1xyXG4gICAgICB2YXIgaWkgPSAwO1xyXG5cclxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xyXG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcclxuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaWkrKyk7XHJcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcclxuXHJcbiAgICAgIHtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aHJvdyBFcnJvciggXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiICsgKGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZykgKyBcIikuIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgaW5zdGVhZC5cIiApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxyXG4gKlxyXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcclxuICpcclxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcclxuICogbGVhZiBjaGlsZC5cclxuICpcclxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXHJcbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXHJcbiAqL1xyXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xyXG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgfVxyXG5cclxuICB2YXIgcmVzdWx0ID0gW107XHJcbiAgdmFyIGNvdW50ID0gMDtcclxuICBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIHJlc3VsdCwgJycsICcnLCBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGNvdW50KyspO1xyXG4gIH0pO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuLyoqXHJcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xyXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxyXG4gKlxyXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxyXG4gKlxyXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cclxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxyXG4gKi9cclxuXHJcblxyXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XHJcbiAgdmFyIG4gPSAwO1xyXG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBuKys7IC8vIERvbid0IHJldHVybiBhbnl0aGluZ1xyXG4gIH0pO1xyXG4gIHJldHVybiBuO1xyXG59XHJcblxyXG4vKipcclxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXHJcbiAqXHJcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcclxuICpcclxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcclxuICogbGVhZiBjaGlsZC5cclxuICpcclxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcclxuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cclxuICovXHJcbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XHJcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvckVhY2hGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIERvbid0IHJldHVybiBhbnl0aGluZy5cclxuICB9LCBmb3JFYWNoQ29udGV4dCk7XHJcbn1cclxuLyoqXHJcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXHJcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXHJcbiAqXHJcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcclxuICovXHJcblxyXG5cclxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xyXG4gIHJldHVybiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICByZXR1cm4gY2hpbGQ7XHJcbiAgfSkgfHwgW107XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxyXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cclxuICpcclxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxyXG4gKlxyXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXHJcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXHJcbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxyXG4gKlxyXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxyXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXHJcbiAqIHN0cnVjdHVyZS5cclxuICovXHJcblxyXG5cclxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XHJcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcclxuICAgIHtcclxuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjaGlsZHJlbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XHJcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcclxuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcclxuICB9IGVsc2Uge1xyXG4gICAge1xyXG4gICAgICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09IG51bGwgJiYgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgZXJyb3IoJ2NyZWF0ZUNvbnRleHQ6IEV4cGVjdGVkIHRoZSBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gYmUgYSAnICsgJ2Z1bmN0aW9uLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGNvbnRleHQgPSB7XHJcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxyXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcclxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXHJcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxyXG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXHJcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cclxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxyXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxyXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcclxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxyXG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXHJcbiAgICBfdGhyZWFkQ291bnQ6IDAsXHJcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcclxuICAgIFByb3ZpZGVyOiBudWxsLFxyXG4gICAgQ29uc3VtZXI6IG51bGxcclxuICB9O1xyXG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XHJcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcclxuICAgIF9jb250ZXh0OiBjb250ZXh0XHJcbiAgfTtcclxuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcclxuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcclxuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcclxuXHJcbiAge1xyXG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxyXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIEl0IGhhcyBhIGRpZmZlcmVudCAkJHR5cGVvZiwgc28gd2UgY2FuIHByb3Blcmx5XHJcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cclxuICAgIHZhciBDb25zdW1lciA9IHtcclxuICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcclxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXHJcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcclxuICAgIH07IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xyXG4gICAgICBQcm92aWRlcjoge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xyXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XHJcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xyXG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgX3RocmVhZENvdW50OiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcclxuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgQ29uc3VtZXI6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcclxuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRpc3BsYXlOYW1lOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5kaXNwbGF5TmFtZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XHJcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyKSB7XHJcbiAgICAgICAgICAgIHdhcm4oJ1NldHRpbmcgYGRpc3BsYXlOYW1lYCBvbiBDb250ZXh0LkNvbnN1bWVyIGhhcyBubyBlZmZlY3QuICcgKyBcIllvdSBzaG91bGQgc2V0IGl0IGRpcmVjdGx5IG9uIHRoZSBjb250ZXh0IHdpdGggQ29udGV4dC5kaXNwbGF5TmFtZSA9ICclcycuXCIsIGRpc3BsYXlOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcclxuXHJcbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xyXG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29udGV4dDtcclxufVxyXG5cclxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcclxudmFyIFBlbmRpbmcgPSAwO1xyXG52YXIgUmVzb2x2ZWQgPSAxO1xyXG52YXIgUmVqZWN0ZWQgPSAyO1xyXG5cclxuZnVuY3Rpb24gbGF6eUluaXRpYWxpemVyKHBheWxvYWQpIHtcclxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XHJcbiAgICB2YXIgY3RvciA9IHBheWxvYWQuX3Jlc3VsdDtcclxuICAgIHZhciB0aGVuYWJsZSA9IGN0b3IoKTsgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cclxuXHJcbiAgICB2YXIgcGVuZGluZyA9IHBheWxvYWQ7XHJcbiAgICBwZW5kaW5nLl9zdGF0dXMgPSBQZW5kaW5nO1xyXG4gICAgcGVuZGluZy5fcmVzdWx0ID0gdGhlbmFibGU7XHJcbiAgICB0aGVuYWJsZS50aGVuKGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcclxuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZykge1xyXG4gICAgICAgIHZhciBkZWZhdWx0RXhwb3J0ID0gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmIChkZWZhdWx0RXhwb3J0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcG9ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cclxuICAgICAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcIiwgbW9kdWxlT2JqZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXHJcblxyXG5cclxuICAgICAgICB2YXIgcmVzb2x2ZWQgPSBwYXlsb2FkO1xyXG4gICAgICAgIHJlc29sdmVkLl9zdGF0dXMgPSBSZXNvbHZlZDtcclxuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gZGVmYXVsdEV4cG9ydDtcclxuICAgICAgfVxyXG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcpIHtcclxuICAgICAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxyXG4gICAgICAgIHZhciByZWplY3RlZCA9IHBheWxvYWQ7XHJcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xyXG4gICAgICAgIHJlamVjdGVkLl9yZXN1bHQgPSBlcnJvcjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xyXG4gICAgcmV0dXJuIHBheWxvYWQuX3Jlc3VsdDtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGF6eShjdG9yKSB7XHJcbiAgdmFyIHBheWxvYWQgPSB7XHJcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXHJcbiAgICBfc3RhdHVzOiAtMSxcclxuICAgIF9yZXN1bHQ6IGN0b3JcclxuICB9O1xyXG4gIHZhciBsYXp5VHlwZSA9IHtcclxuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXHJcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcclxuICAgIF9pbml0OiBsYXp5SW5pdGlhbGl6ZXJcclxuICB9O1xyXG5cclxuICB7XHJcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB0aGlzIHdvdWxkIGp1c3Qgc2V0IGl0IG9uIHRoZSBvYmplY3QuXHJcbiAgICB2YXIgZGVmYXVsdFByb3BzO1xyXG4gICAgdmFyIHByb3BUeXBlczsgLy8gJEZsb3dGaXhNZVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XHJcbiAgICAgIGRlZmF1bHRQcm9wczoge1xyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcclxuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XHJcblxyXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcclxuICAgICAgICAgIC8vICRGbG93Rml4TWVcclxuXHJcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcHJvcFR5cGVzOiB7XHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xyXG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYHByb3BUeXBlc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcclxuXHJcbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxyXG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxyXG5cclxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBsYXp5VHlwZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcclxuICB7XHJcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcclxuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XHJcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xyXG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xyXG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgZWxlbWVudFR5cGUgPSB7XHJcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcclxuICAgIHJlbmRlcjogcmVuZGVyXHJcbiAgfTtcclxuXHJcbiAge1xyXG4gICAgdmFyIG93bk5hbWU7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcclxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICBvd25OYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgaWYgKHJlbmRlci5kaXNwbGF5TmFtZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICByZW5kZXIuZGlzcGxheU5hbWUgPSBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZWxlbWVudFR5cGU7XHJcbn1cclxuXHJcbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxyXG5cclxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XHJcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxyXG5cclxuXHJcbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gZXhwb3J0cy5Qcm9maWxlciB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBleHBvcnRzLlN0cmljdE1vZGUgfHwgdHlwZSA9PT0gZXhwb3J0cy5TdXNwZW5zZSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcclxuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcclxuICB7XHJcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xyXG4gICAgICBlcnJvcignbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xyXG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcclxuICAgIHR5cGU6IHR5cGUsXHJcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxyXG4gIH07XHJcblxyXG4gIHtcclxuICAgIHZhciBvd25OYW1lO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XHJcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBvd25OYW1lO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgIGlmICh0eXBlLmRpc3BsYXlOYW1lID09IG51bGwpIHtcclxuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZWxlbWVudFR5cGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xyXG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xyXG5cclxuICBpZiAoIShkaXNwYXRjaGVyICE9PSBudWxsKSkge1xyXG4gICAge1xyXG4gICAgICB0aHJvdyBFcnJvciggXCJJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbjMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG5TZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS5cIiApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRpc3BhdGNoZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XHJcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xyXG5cclxuICB7XHJcbiAgICBpZiAodW5zdGFibGVfb2JzZXJ2ZWRCaXRzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZXJyb3IoJ3VzZUNvbnRleHQoKSBzZWNvbmQgYXJndW1lbnQgaXMgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSAnICsgJ3VzZSBpbiBSZWFjdC4gUGFzc2luZyBpdCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1lvdSBwYXNzZWQ6ICVzLiVzJywgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzLCB0eXBlb2YgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzID09PSAnbnVtYmVyJyAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1syXSkgPyAnXFxuXFxuRGlkIHlvdSBjYWxsIGFycmF5Lm1hcCh1c2VDb250ZXh0KT8gJyArICdDYWxsaW5nIEhvb2tzIGluc2lkZSBhIGxvb3AgaXMgbm90IHN1cHBvcnRlZC4gJyArICdMZWFybiBtb3JlIGF0IGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9ydWxlcy1vZi1ob29rcycgOiAnJyk7XHJcbiAgICB9IC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cclxuXHJcblxyXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0OyAvLyBEb24ndCBkZWR1cGxpY2F0ZSBiZWNhdXNlIHRoaXMgbGVnaXRpbWF0ZWx5IGNhdXNlcyBidWdzXHJcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cclxuXHJcbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xyXG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcclxuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cyk7XHJcbn1cclxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xyXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbn1cclxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XHJcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xyXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XHJcbn1cclxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xyXG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcclxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcclxufVxyXG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XHJcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xyXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGRlcHMpO1xyXG59XHJcbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcclxuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XHJcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XHJcbn1cclxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpIHtcclxuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XHJcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xyXG59XHJcbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XHJcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xyXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBkZXBzKTtcclxufVxyXG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XHJcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xyXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xyXG59XHJcbmZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKSB7XHJcbiAge1xyXG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxyXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxyXG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXHJcbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxyXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XHJcbnZhciBwcmV2TG9nO1xyXG52YXIgcHJldkluZm87XHJcbnZhciBwcmV2V2FybjtcclxudmFyIHByZXZFcnJvcjtcclxudmFyIHByZXZHcm91cDtcclxudmFyIHByZXZHcm91cENvbGxhcHNlZDtcclxudmFyIHByZXZHcm91cEVuZDtcclxuXHJcbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cclxuXHJcbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XHJcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xyXG4gIHtcclxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xyXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XHJcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xyXG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcclxuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcclxuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcclxuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcclxuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxyXG5cclxuICAgICAgdmFyIHByb3BzID0ge1xyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcclxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxyXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxyXG5cclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xyXG4gICAgICAgIGluZm86IHByb3BzLFxyXG4gICAgICAgIGxvZzogcHJvcHMsXHJcbiAgICAgICAgd2FybjogcHJvcHMsXHJcbiAgICAgICAgZXJyb3I6IHByb3BzLFxyXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcclxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXHJcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXHJcbiAgICAgIH0pO1xyXG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGVkRGVwdGgrKztcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xyXG4gIHtcclxuICAgIGRpc2FibGVkRGVwdGgtLTtcclxuXHJcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xyXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cclxuICAgICAgdmFyIHByb3BzID0ge1xyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXHJcblxyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XHJcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xyXG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcclxuICAgICAgICB9KSxcclxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xyXG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcclxuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xyXG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xyXG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xyXG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xyXG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xyXG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcclxudmFyIHByZWZpeDtcclxuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XHJcbiAge1xyXG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aHJvdyBFcnJvcigpO1xyXG4gICAgICB9IGNhdGNoICh4KSB7XHJcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcclxuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcclxuICAgICAgfVxyXG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cclxuXHJcblxyXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcclxuICB9XHJcbn1cclxudmFyIHJlZW50cnkgPSBmYWxzZTtcclxudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XHJcblxyXG57XHJcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcclxuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcclxuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cclxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHtcclxuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcclxuXHJcbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gZnJhbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgY29udHJvbDtcclxuICByZWVudHJ5ID0gdHJ1ZTtcclxuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cclxuXHJcbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XHJcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcclxuXHJcbiAge1xyXG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxyXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxyXG5cclxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcclxuICAgIGRpc2FibGVMb2dzKCk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXHJcbiAgICBpZiAoY29uc3RydWN0KSB7XHJcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxyXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aHJvdyBFcnJvcigpO1xyXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXHJcblxyXG5cclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXHJcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXHJcbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XHJcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxyXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcclxuICAgICAgICB9IGNhdGNoICh4KSB7XHJcbiAgICAgICAgICBjb250cm9sID0geDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIEZha2UuY2FsbCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcclxuICAgICAgICAgIGNvbnRyb2wgPSB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcclxuICAgICAgfSBjYXRjaCAoeCkge1xyXG4gICAgICAgIGNvbnRyb2wgPSB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmbigpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xyXG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cclxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xyXG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxyXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cclxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcclxuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xyXG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XHJcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XHJcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXHJcbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxyXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXHJcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcclxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxyXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxyXG4gICAgICAgIGMtLTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XHJcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXHJcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXHJcbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcclxuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXHJcbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXHJcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xyXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxyXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cclxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgIHMtLTtcclxuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cclxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cclxuXHJcbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcclxuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxyXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZmluYWxseSB7XHJcbiAgICByZWVudHJ5ID0gZmFsc2U7XHJcblxyXG4gICAge1xyXG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcclxuICAgICAgcmVlbmFibGVMb2dzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xyXG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxyXG5cclxuXHJcbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcclxuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcclxuXHJcbiAge1xyXG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xyXG59XHJcbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XHJcbiAge1xyXG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcclxuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcclxuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xyXG5cclxuICBpZiAodHlwZSA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHtcclxuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcclxuICB9XHJcblxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBleHBvcnRzLlN1c3BlbnNlOlxyXG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XHJcblxyXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XHJcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcclxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxyXG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xyXG5cclxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XHJcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cclxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcclxuXHJcbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcclxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XHJcblxyXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XHJcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XHJcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XHJcblxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cclxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xyXG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gJyc7XHJcbn1cclxuXHJcbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcclxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XHJcblxyXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XHJcbiAge1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XHJcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XHJcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xyXG4gIHtcclxuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cclxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XHJcblxyXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xyXG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xyXG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xyXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cclxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcclxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cclxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XHJcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgIGVycm9yJDEgPSBleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xyXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XHJcblxyXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcclxuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxyXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cclxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcclxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xyXG4gIHtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xyXG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xyXG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xyXG5cclxue1xyXG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcclxuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xyXG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XHJcblxyXG4gICAgaWYgKG5hbWUpIHtcclxuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuICcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcclxuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XHJcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xyXG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcclxuICB9XHJcblxyXG4gIHJldHVybiAnJztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcclxuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAnJztcclxufVxyXG4vKipcclxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxyXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cclxuICogdXBkYXRlcy5cclxuICovXHJcblxyXG5cclxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XHJcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcclxuXHJcbiAgaWYgKCFpbmZvKSB7XHJcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcclxuXHJcbiAgICBpZiAocGFyZW50TmFtZSkge1xyXG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaW5mbztcclxufVxyXG4vKipcclxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxyXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcclxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXHJcbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xyXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cclxuICpcclxuICogQGludGVybmFsXHJcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cclxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxyXG4gKi9cclxuXHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcclxuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xyXG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcclxuXHJcbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcclxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXHJcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxyXG5cclxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xyXG5cclxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xyXG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXHJcbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xyXG5cclxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xyXG5cclxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXHJcbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxyXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cclxuICpcclxuICogQGludGVybmFsXHJcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxyXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXHJcbiAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcclxuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XHJcblxyXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XHJcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XHJcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxyXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XHJcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChub2RlKSB7XHJcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcclxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXHJcbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcclxuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XHJcbiAgICAgICAgdmFyIHN0ZXA7XHJcblxyXG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcclxuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vKipcclxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcclxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XHJcbiAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcclxuICB7XHJcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcHJvcFR5cGVzO1xyXG5cclxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cclxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxyXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xyXG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvcFR5cGVzKSB7XHJcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XHJcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcclxuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xyXG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XHJcblxyXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xyXG5cclxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcclxuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xyXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcclxuICovXHJcblxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XHJcbiAge1xyXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xyXG5cclxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XHJcblxyXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcclxuXHJcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcclxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XHJcblxyXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcclxuXHJcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcclxuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xyXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXHJcblxyXG4gIGlmICghdmFsaWRUeXBlKSB7XHJcbiAgICB2YXIgaW5mbyA9ICcnO1xyXG5cclxuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcclxuXHJcbiAgICBpZiAoc291cmNlSW5mbykge1xyXG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB0eXBlU3RyaW5nO1xyXG5cclxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XHJcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XHJcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcclxuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcclxuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcclxuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHtcclxuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cclxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXHJcblxyXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcclxuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXHJcbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxyXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXHJcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxyXG5cclxuXHJcbiAgaWYgKHZhbGlkVHlwZSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XHJcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XHJcbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XHJcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcclxuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xyXG5cclxuICB7XHJcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XHJcbiAgICAgIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gdHJ1ZTtcclxuXHJcbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XHJcbiAgICB9IC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcclxuXHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xyXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2FybignRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xyXG5cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XHJcbiAgICAgICAgICB2YWx1ZTogdHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0eXBlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xyXG59XHJcbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xyXG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblxyXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcclxuICByZXR1cm4gbmV3RWxlbWVudDtcclxufVxyXG5cclxue1xyXG5cclxuICB0cnkge1xyXG4gICAgdmFyIGZyb3plbk9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXHJcblxyXG4gICAgbmV3IE1hcChbW2Zyb3plbk9iamVjdCwgbnVsbF1dKTtcclxuICAgIG5ldyBTZXQoW2Zyb3plbk9iamVjdF0pO1xyXG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1uZXcgKi9cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgfVxyXG59XHJcblxyXG52YXIgY3JlYXRlRWxlbWVudCQxID0gIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XHJcbnZhciBjbG9uZUVsZW1lbnQkMSA9ICBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XHJcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XHJcbnZhciBDaGlsZHJlbiA9IHtcclxuICBtYXA6IG1hcENoaWxkcmVuLFxyXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcclxuICBjb3VudDogY291bnRDaGlsZHJlbixcclxuICB0b0FycmF5OiB0b0FycmF5LFxyXG4gIG9ubHk6IG9ubHlDaGlsZFxyXG59O1xyXG5cclxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xyXG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcclxuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcclxuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xyXG5leHBvcnRzLmNsb25lRWxlbWVudCA9IGNsb25lRWxlbWVudCQxO1xyXG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xyXG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XHJcbmV4cG9ydHMuY3JlYXRlRmFjdG9yeSA9IGNyZWF0ZUZhY3Rvcnk7XHJcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xyXG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xyXG5leHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQ7XHJcbmV4cG9ydHMubGF6eSA9IGxhenk7XHJcbmV4cG9ydHMubWVtbyA9IG1lbW87XHJcbmV4cG9ydHMudXNlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaztcclxuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcclxuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcclxuZXhwb3J0cy51c2VFZmZlY3QgPSB1c2VFZmZlY3Q7XHJcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XHJcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xyXG5leHBvcnRzLnVzZU1lbW8gPSB1c2VNZW1vO1xyXG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xyXG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcclxuZXhwb3J0cy51c2VTdGF0ZSA9IHVzZVN0YXRlO1xyXG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XHJcbiAgfSkoKTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcclxufSBlbHNlIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xyXG59IGVsc2Uge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9zcmMvQ29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAgXCIuLi9zcmMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBSZXNlYXJjaGVzIGZyb20gXCIuLi9zcmMvQ29tcG9uZW50cy9SZXNlYXJjaGVzL1Jlc2VhcmNoZXNcIjtcclxuaW1wb3J0IFBhZ2VMYXlvdXQgZnJvbSBcIi4uL3NyYy9Db21wb25lbnRzL1BhZ2VMYXlvdXQvUGFnZUxheW91dFwiO1xyXG5cclxuZnVuY3Rpb24gUmVzZWFyY2hGYWNpbGl0aWVzKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgICAgICA8UGFnZUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8UmVzZWFyY2hlcy8+XHJcbiAgICAgICAgICAgICAgICA8L1BhZ2VMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VhcmNoRmFjaWxpdGllczsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBGb290ZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwICBtdC0xXCI+XHJcbiAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cInB4LTVcIiAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC00IGZsZXggZmxleC1yb3dcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1iZXR3ZWVuIG10LTMgbWQ6bWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU3ViIEhlYWRpbmcgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LW1kXCI+RWxlY3Ryb25pY3MgRGVwYXJ0bWVudDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS02MDAgdGV4dC14c1wiPiBOYXRpb25hbCBpbnN0aXR1dGUgb2YgVGVjaG5vbG9neSwgU1VSQVQgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNWTklUIGxvZ28gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMzIgZmxleCBoLTEyIHctMTIgdGV4dC1jZW50ZXIgbWQ6anVzdGlmeS1lbmQgbWQ6bXItMzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiXCIgc3JjPVwiaW1hZ2VzL05JVF9TdXJhdF9Mb2dvLnN2Zy5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHB0LTEgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC14bCB0ZXh0LWdyYXktNjAwIGZvbnQtc2VtaWJvbGRcIj5Gb2xsb3cgdXMgb246IDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB4LTIgcGItMiBwdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL20uZmFjZWJvb2suY29tL0VsZWN0cm9uaWNzLUNvbW11bmljYXRpb24tRW5naW5lZXJpbmctRGVwYXJ0bWVudC1TVk5JVC1TdXJhdC0xNzA0MjI0NjYzMTQwNTU0L1wiPjxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZm9udC1zZW1pYm9sZCBwLTEgbWQ6cC0zXCI+PGltZyBjbGFzc05hbWU9XCJ3LTEwXCIgc3JjPVwiaW1hZ2VzL0Zvb3Rlci1pY29ucy9GYWNlYm9vay1pY29uLnN2Z1wiLz4mbmJzcDs8cCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5GYWNlYm9vazwvcD48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBmb250LXNlbWlib2xkIHVwcGVyY2FzZSBwLTNcIj48aW1nIGNsYXNzTmFtZT1cInctMTBcIiBzcmM9XCJpbWFnZXMvRm9vdGVyLWljb25zL1lvdVR1YmUtaWNvbi5zdmdcIi8+Jm5ic3A7PGE+WW91dHViZTwvYT48L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL3N2bml0Lm9mZmljaWFsP2lnc2hpZD1yd2x2aHJ5emZpaTJcIj48c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGZvbnQtc2VtaWJvbGQgcC0xIG1kOnAtM1wiPjxpbWcgY2xhc3NOYW1lPVwidy0xMFwiIHNyYz1cImltYWdlcy9Gb290ZXItaWNvbnMvSW5zdGFncmFtLWljb24uc3ZnXCIvPiZuYnNwOzxwIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPkluc3RhZ3JhbTwvcD48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvcy12LW5hdGlvbmFsLWluc3RpdHV0ZS1vZi10ZWNobm9sb2d5LXN2bml0LXN1cmF0LW5pdC1zdXJhdC1cIj48c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGZvbnQtc2VtaWJvbGQgcC0xIG1kOnAtM1wiPjxpbWcgY2xhc3NOYW1lPVwidy0xMFwiIHNyYz1cImltYWdlcy9Gb290ZXItaWNvbnMvTGlua2VkSW4taWNvbi5zdmdcIi8+Jm5ic3A7PHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+TGlua2VkSW48L3A+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vTklUX1N1cmF0P3M9MjBcIj48c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGZvbnQtc2VtaWJvbGQgcC0xIG1kOnAtM1wiPjxpbWcgY2xhc3NOYW1lPVwidy0xMFwiIHNyYz1cImltYWdlcy9Gb290ZXItaWNvbnMvVHdpdHRlci1pY29uLnN2Z1wiLz4mbmJzcDs8cCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5Ud2l0dGVyPC9wPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweS0zIHB4LTUgdGV4dC14cyBtZDp0ZXh0LWwgdGV4dC1ncmF5LTIwMCBmbGV4IGp1c3RpZnktY2VudGVyXCI+JmNvcHk7IDIwMjEgRWxlY3Ryb25pY3MgRGVwYXJ0bWVudCAsIGFsbCByaWdodHMgcmVzZXJ2ZWQgJiM2NDsgTmF0aW9uYWwgaW5zdGl0dXRlIG9mIFRlY2hub2xvZ3ksIFNVUkFUIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpe1xyXG4gICAgY29uc3QgaW1hZ2VTdHlsZSA9IHtcclxuICAgICAgICB3aWR0aDo5MCxcclxuICAgICAgICBoZWlndGg6OTBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBwLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC00IGZsZXggZmxleC1yb3dcIiA+XHJcbiAgICAgICAgICAgICAgICB7LyogSGVhZGluZyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGp1c3RpZnktY2VudGVyIG10LTMgbWQ6bWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1ncmF5LTYwMCBmb250LWJvbGQgdGV4dC14bFwiPkVsZWN0cm9uaWNzIERlcGFydG1lbnQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1ncmF5LTYwMFwiPiBOYXRpb25hbCBpbnN0aXR1dGUgb2YgVGVjaG5vbG9neSwgU1VSQVQgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTE9HTyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBtZDpqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9OSVRfU3VyYXRfTG9nby5zdmcucG5nXCIgc3R5bGU9e2ltYWdlU3R5bGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZUNhcm91c2VsIGZyb20gXCIuL0ltYWdlQ2Fyb3VzZWwvSW1hZ2VDYXJvdXNlbFwiO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBiZy1ncmF5LTIwMCBncmlkIGdyaWQtY29scy0xXCI+XHJcblxyXG4gICAgICAgICAgICA8SW1hZ2VDYXJvdXNlbC8+XHJcblxyXG4gICAgICAgICAgICB7LyogRGVwYXJ0bWVudCBNaXNzaW9uICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBtLTQgYmctZ3JheS0zMDAgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS02MDAgdGV4dC1ib2xkIHRleHQtY2VudGVyXCI+RGVwYXJ0bWVudCBNaXNzaW9uPC9oNj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgdGV4dC1jZW50ZXIgdGV4dC1sXCI+VGhlIG1pc3Npb24gb2YgdGhlIEVsZWN0cm9uaWNzIEVuZ2luZWVyaW5nIERlcGFydG1lbnQgaXMgdG8gY29udHJpYnV0ZSB0byBzb2NpZXR5IGFuZCBpbmR1c3RyeSB0aHJvdWdoIGV4Y2VsbGVuY2UgaW4gZWR1Y2F0aW9uLCByZXNlYXJjaCwgaW5ub3ZhdGlvbnMgYW5kIGV0aGljcyBieSBzdGFrZWhvbGRlcnMuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBEZXBhcnRtZW50IE1pc3Npb24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgcC02IG14LTQgbWItNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTYwMCB0ZXh0LWJvbGQgdGV4dC1jZW50ZXJcIj5EZXBhcnRtZW50IFZpc2lvbjwvaDY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQtY2VudGVyIHRleHQtbFwiPlRoZSB2aXNpb24gb2YgdGhlIEVsZWN0cm9uaWNzIEVuZ2luZWVyaW5nIERlcGFydG1lbnQgaXMgdG8gQWltIHRvIGFjaGlldmUgcXVhbGl0eSBpbiBlZHVjYXRpb24gYW5kIHJlc2VhcmNoIHRvIGNyZWF0ZSBsZWFkaW5nIEVsZWN0cm9uaWNzIGVuZ2luZWVycywgcmVzZWFyY2hlcnMgYW5kIGVudHJlcHJlbmV1cnMuPC9wPiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZVNsaWRlIGZyb20gXCIuL0ltYWdlU2xpZGUvSW1hZ2VTbGlkZVwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VDYXJvdXNlbCgpe1xyXG5cclxuICAgIGNvbnN0IGltYWdlc0FycmF5ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC0xLmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiMVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9lY2VkSW1hZ2VzL2VjZWQtMi5qcGdcIixcclxuICAgICAgICAgICAgXCJrZXlcIjpcIjJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZWNlZEltYWdlcy9lY2VkLTMuanBnXCIsXHJcbiAgICAgICAgICAgIFwia2V5XCI6XCIzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC00LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiNFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaW1hZ2VTcmNcIjpcImltYWdlcy9lY2VkSW1hZ2VzL2VjZWQtNS5qcGdcIixcclxuICAgICAgICAgICAgXCJrZXlcIjpcIjVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImltYWdlU3JjXCI6XCJpbWFnZXMvZWNlZEltYWdlcy9lY2VkLTYuanBnXCIsXHJcbiAgICAgICAgICAgIFwia2V5XCI6XCI2XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbWFnZVNyY1wiOlwiaW1hZ2VzL2VjZWRJbWFnZXMvZWNlZC03LmpwZ1wiLFxyXG4gICAgICAgICAgICBcImtleVwiOlwiN1wiXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG5cclxuICAgIHZhciBzbGlkZUluZGV4ID0gMDtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93U2xpZGVzKCkge1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIHZhciBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXlTbGlkZXNcIik7XHJcbiAgICAgICAgdmFyIGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZG90XCIpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzbGlkZUluZGV4Kys7XHJcbiAgICAgICAgaWYgKHNsaWRlSW5kZXggPiBzbGlkZXMubGVuZ3RoKSB7c2xpZGVJbmRleCA9IDF9ICAgIFxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRvdHNbaV0uY2xhc3NOYW1lID0gZG90c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWRlc1tzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcclxuICAgICAgICBkb3RzW3NsaWRlSW5kZXgtMV0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG4gICAgICAgIHNldFRpbWVvdXQoc2hvd1NsaWRlcywgNTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzaG93U2xpZGVzKCk7XHJcbiAgICB9LCBbc2xpZGVJbmRleF0pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG14LTQgcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gbWQ6bXgtMFwiPiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXNob3ctY29udGFpbmVyIG1kOmgtOTZcIj5cclxuXHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VzQXJyYXkubWFwKChpbWFnZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVNsaWRlIGtleT17aW1hZ2UuaWR9ey4uLmltYWdlfS8+ICAgIFxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiIHN0eWxlPXt7dGV4dEFsaWdubWVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcm91c2VsO1xyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cIm10LTQgbXgtNCByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBtZDpteC0wXCI+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlc2hvdy1jb250YWluZXIgaC05NiBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbnVtYmVydGV4dFwiPjEgLyAzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2xpZGUtaW1hZ2VcIiBzcmM9XCJpbWFnZXMvZWNlZEltYWdlcy8zLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+Q2FwdGlvbiBUZXh0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbnVtYmVydGV4dFwiPjIgLyAzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbGlkZS1pbWFnZVwiIHNyYz1cImltYWdlcy9lY2VkSW1hZ2VzLzQuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPkNhcHRpb24gVHdvPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbnVtYmVydGV4dFwiPjMgLyAzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbGlkZS1pbWFnZVwiIHNyYz1cImltYWdlcy9lY2VkSW1hZ2VzLzUuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPkNhcHRpb24gVGhyZWU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiIHN0eWxlPXt7dGV4dEFsaWdubWVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VTbGlkZSh7aW1hZ2VTcmN9KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lciBteVNsaWRlcyBmYWRlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2xpZGUtaW1hZ2VcIiBzcmM9e2ltYWdlU3JjfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNsaWRlOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0b2dnbGVyIGZyb20gXCIuL3RvZ2dsZXJcIlxyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCl7XHJcbiAgICBjb25zdCBteVN0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoOjIwXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0b2dnbGVyKCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIG1kOmNvbC1zcGFuLTEgbS0zIGJnLWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgIDxuYXYgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgYm9yZGVyLWIgYm9yZGVyLWdyYXktMTAwIGZsZXgganVzdGlmeS1iZXR3ZWVuICBtZDpmbGV4IG1kOmp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sIGZvbnQtYm9sZCAgdXBwZXJjYXNlIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsIGhvdmVyOnRleHQtZ3JheS0xMDBcIj5FbGVjdHJvbmljcyBEZXBhcnRtZW50PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IGN1cnNvci1wb2ludGVyIG1kOmhpZGRlblwiIGlkPVwibWVudUJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBoLTggdy04XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IGhpZGRlbiBtZDpibG9ja1wiIGlkPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtZ3JheS00MDAgdGV4dC14bCBwLTYgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaC02IHctNlwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VsaW5lY2FwPVwicm91bmRcIiBzdHJva2VsaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk0zIDEybDItMm0wIDBsNy03IDcgN001IDEwdjEwYTEgMSAwIDAwMSAxaDNtMTAtMTFsMiAybS0yLTJ2MTBhMSAxIDAgMDEtMSAxaC0zbS02IDBhMSAxIDAgMDAxLTF2LTRhMSAxIDAgMDExLTFoMmExIDEgMCAwMTEgMXY0YTEgMSAwIDAwMSAxbS02IDBoNlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPiA8YSBocmVmPVwiLi9cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMTAwXCI+Jm5ic3A7SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtZ3JheS00MDAgdGV4dC14bCBweC02IHBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJoLTUgdy01XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xOCAxMGE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHptLTcgNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bS0xLTlhMSAxIDAgMDAtMSAxdjRhMSAxIDAgMTAyIDBWNmExIDEgMCAwMC0xLTF6XCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+PGEgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTEwMFwiPiZuYnNwO0Fib3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtZ3JheS00MDAgdGV4dC14bCBweC02IHBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvc3Zncy9QZW9wbGUuc3ZnXCIgc3R5bGU9e215U3R5bGV9Lz48YSBocmVmPVwiRmFjdWx0aWVzUGFnZVwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS0xMDBcIj4mbmJzcDtGYWN1bHRpZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdGV4dC1ncmF5LTQwMCB0ZXh0LXhsIHB4LTYgcGItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9zdmdzL1Jlc2VhcmNoLnN2Z1wiIHN0eWxlPXtteVN0eWxlfS8+PGEgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTEwMFwiIGhyZWY9XCJSZXNlYXJjaFBhZ2VcIj4mbmJzcDtQcm9qZWN0czwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LWdyYXktNDAwIHRleHQteGwgcHgtNiBwYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy02XCIgc3JjPVwiaW1hZ2VzL3N2Z3MvRmFjaWxpdGllcy5zdmdcIi8+PGEgaHJlZj1cIlJlc2VhcmNoRmFjaWxpdGllc1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS0xMDBcIj4mbmJzcDtGYWNpbGl0aWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gdG9nZ2xlcigpe1xyXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudUJ1dHRvblwiKTtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XHJcblxyXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT5cclxuICAgICB7XHJcbiAgICAgICAgaWYobWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyL05hdmJhclwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vSG9tZS9Ib21lXCI7XHJcblxyXG5mdW5jdGlvbiBQYWdlTGF5b3V0KHtjaGlsZHJlbn0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtNFwiPlxyXG4gICAgICAgICAgICA8TmF2YmFyLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0zIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlTGF5b3V0OyIsImNvbnN0IERhdGEyMDE3XzE4ID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMVwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiQ0hJTEQgU0FGRVRZIFdFQVJBQkxFIERFVklDRVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMjlcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQk9NTUFUSFVMQSBNQURIVSBTSU5EVVJBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBQLiBLLiBTaGFoXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMTNcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiU0hBSUsgS0hBTElEQSBQQVJWRUVOXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA5OVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJCT01NSU5FTkkgWUFNSU5JIFNBUkFTV0FUSElcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTAwXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlZFTklHQUxMQSBWSU5VVEhOQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlRPTkdVRSBDT05UUk9MTEVEIFdIRUVMQ0hBSVJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDAxXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkFWSU5BU0ggTkFZQUtcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEsuIFNoYWhcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAxMlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJQUkFTSEFOVEggWUFDSFVSSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMzBcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiU0FZQU4gU0FIQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMzNcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQUJISVJVUCBQQU5KQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDNcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlRPIEFOQUxZU0UgUkVBTElTVElDIEcgQ0hBTk5FTCBNT0RFTFMgQU5EIE5FVFdPUktcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDAzXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlZZQVMgSkFUQU4gTklMQVlcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuKERyLikgVS4gRC4gRGFsYWxcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAyOFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJTVVRBUiBTQVJGQVJBWiBTSVJBSkJIQUlcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTA2XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkFJVEEgU0lOREhVIFNSRUVcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTEwXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkdPUEkgRE9TSElcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyA0XCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJTRUNVUkUgQU5EIEVGRklDSUVOVCBIQU5ET1ZFUiBBVVRIRU5USUNBVElPTiBCXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAwNVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJTSEFJTEFKQSBZRUxFU1dBUkFQVVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4oRHIuKSBVLiBELiBEYWxhbFwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDE5XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkVBU0hXRVIgU1VCUkFNQU5JQU1cIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDc0XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkRFVkFSQUtPTkRBIFNORUhBIFBSQVBVUk5BXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA5M1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBQURJVFlBIEtBVUxcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyA1XCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJJTkRPT1IgTE9DQUxJWkFUSU9OIFVTSU5HIE1BQ0hJTkUgTEVBUk5JTkcgQU5EXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAwMlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJQQVRJTCBNRURIQSBNQUhFU0hcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuKERyLikgVS4gRC4gRGFsYWxcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA0NlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBQVNISVNIIEtVTUFSIE1JU1JBQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNzlcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUEFUSUwgTVVHREhBIFNBTkpBWVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNjFcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiU09VUkFCSCBEQVNcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyA2XCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJJUlJJR0FUSU9OIFNZU1RFTSBVU0lORyBaSUdCRUVcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDE0XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkpFU0VFS0EgREVWRU5EUkEgU0hBSFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gTi4gQi4gS2FuaXJrYXJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAxNlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJZRVNIQSBIQVJJU0ggR09OREFMSUFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTM1XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkFNRVkgTUlTSFJBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEzOFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJWSUtSQU5UIFNJTkdIIFNIT0VSQU5cIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyA3XCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJSRklEIEJBU0VEIEFUVEVOREFOQ0UgU1lTVEVNIFdJVEggU01TIE5PVElGSUNBVElcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDEzXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlRBTlZJIFAgS1VSTEVLQVJcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIE4uIEIuIEthbmlya2FyXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMTdcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQVJVU0EgUkFZRUVTIEFITUVEIEtIQUxGQVlcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDY5XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIk1BVEhVUiBSQUhVTCBLQUlMQVNIQkhBSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNzNcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiSkFHQVJBUFUgUk9ISVRIIEtVTUFSXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgOFwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiUkVTVEFVUkFOVFMgQVVUT01BVElPTiBVU0lORyBaSUdCRUVcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDA2XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkZBWkFMIEZJUk9aU0hBSCBESVdBTlwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gTi4gQi4gS2FuaXJrYXJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA5MVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBTUlKRUVUIEtVTUFSXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA5NVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJNSVNUUlkgSklNSVQgVklQVUxcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDk2XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkFOVUdSQUggTklNQVZBVFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDlcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIkhPTUUgQVVUT01BVElPTiBTWVNURU0gVVNJTkcgV0lGSSBNT0RVTEVcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDIxXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlBBR0EgUkFOSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gTi4gQi4gS2FuaXJrYXJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAzNVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJNRUVOQSBOSVRBS1VNQVJJIEdIQU5TSFlBTVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNDJcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiU0FST0ogTUFNVEEgS1VCRVJSQU1cIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDQ3XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkNIQVVIQU4gTUVHSEFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAxMFwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiVkVISUNMRSBBQ0NJREVOVCBHIERFVEVDVElPTiwgUkVQT1JUSU5HIEFORCBOQVZJR1wiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNzBcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUEVSVU1BTExBIEtPVEVTV0FSQSBSQU9cIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBKLiBOLiBTYXJ2YWl5YVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDcxXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlRBTkdJUkFMQSBBS0hJTCBSRUREWVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwOThcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQ0hBTExBUEFMTEkgUFJBTU9EXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzE0OVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJOSVRFU0ggUFJBQkhBS0FSQU4gTkFJUlwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDExXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJGRUFUVVJFIEVYVFJBQ1RJT04gRk9SIElNQUdFIFJFR0lTVFJBVElPTlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMjNcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiR1VUVEEgUkFNWUFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBKLiBOLiBTYXJ2YWl5YVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDUzXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkNIT1BQQVJBUFUgU0FJIEFLSElMXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA2NFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJCT0REQVBBVEkgU1JBVkFOSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNTBcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQklMS0lTSCBBUkEgTkFJS09ESVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDEyXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJHIFJPUyBCQVNFRCBST0JPVElFUyBTWVNURU1cIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTEyXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIk5BSVZFREggSkFJTlwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gKERyLikgQS4gRC4gRGFyamlcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzExN1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJSQUhVTCBHVU5LQVJcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTE5XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIktBUlRJS1wiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMzRcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiVCBTQU5ERUVQXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMTNcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlBIWVNJT0xPR0lDQUwgU0lHTkFMIE1PTklUT1JJTkcgU1lTVEVNXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEwNFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJNRUhUQSBBTUkgQ0hFVEFOS1VNQVJcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIChEci4pIEEuIEQuIERhcmppXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMTVcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiU0hBSCBBTU9MSSBSQUpFU0hCSEFJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzExOFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJHT1BJIEtBTUxFU0ggUEFURUxcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTMyXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkJIQVRUIFNFSkFMIEhFTUFOVFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDE0XCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJMIEFORCBTIEJBTkQgTUlDUk9XQVZFIEcgTU9OT0xJVEhJQyBJTlRFR1JBVEVEIENJXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA0M1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJNQVJBQkFUSFVMQSBWRU5LQVQgTklLSElMXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJEci4gUC4gTi4gUGF0ZWxcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA1MVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJLQVRUQSBTSVZBUkFNXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA4M1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJBREVQVSBWSU5FRVRIIEtVTUFSXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA4NVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJQQUxFUFUgUFVORUVUSCBIT1RIUkFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAxNVwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiVk9JQ0UgRyBDT05UUk9MTEVEIEhPTUUgQVBQTElDQVRJT05cIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDA4XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIktPUiBQQVJBUyBNRVJBTUJIQUlcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFouIE0uIFBhdGVsXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMTBcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQkhVVkEgQlJJSkVTSEtVTUFSIFJBTUFOSUtCSEFJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAyMFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJTQURIVSBNQVlBTksgRElQQUtCSEFJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAyMlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJHT0hJTCBLQVJBTktVTUFSIEhBU01VS0hCSEFJc1wiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDE2XCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJBUk0gUFJPQ0VTU09SIEJBU0VEIFJFQUwgVElNRSBDQVIgVEhFRlQgREVDTElORVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMjVcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiVkVFUkFQVVJFRERZIFNBSSBQVU5FRVRIIFJFRERZXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBaLiBNLiBQYXRlbFwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDM4XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlNJRERVTEEgSkFJREVFUFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNjZcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiRElWSSBZQVNXQU5USFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNjNcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQlVTSVJFRERZIFNIQU5UQU4gS1VNQVIgUkVERFlcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAxN1wiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiRU5WSVJPTk1FTlQgTU9OSVRPUklORyBBTlQgQUxFUlQgQlkgSU5URUxMSUdFTlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMTRcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUEFSTUFSIERIQVdBTEtVTUFSIFBBUkVTSEtVTUFSXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJEci4gWi4gTS4gUGF0ZWxcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzE0M1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJSQUtIT0xJWUEgU0hSQURESEFCRU4gRElMSVBCSEFJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzE0NVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJNQURIVVJJTUEgREFTXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzE0N1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJKVVdBTiBIRVRUSUFSQUNIQ0hJR0UgUkFORElLQSBMQUtTSEFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAxOFwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiRkFDRSBSRUNPR05JVElPTiBVU0lORyBGUEdBXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA2M1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJCT1BQQSBOQUdBIFNVSklUSFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gUC4gSi4gRW5naW5lZXJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA3MlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJJTlRIQSBBS0hJTFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwODFcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiS0VMTEEgQ0hBSVRBTllBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA4NFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJNQU5JU0ggTUVFTkFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAxOVwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiSU1BR0UgUFJPQ0VTU0lORyBVU0lORyBFTUJFRERFRCBTWVNURU1TXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA5MFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJLT1JJVkkgVEhJTU1BR1VSVURVXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBQLiBKLiBFbmdpbmVlclwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTA1XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIktVTkNIQUxBIEpBWUEgTkFHQSBTQUkgQkhBUkdBVlwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMDdcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiU0FLRSBKQVlBU0FJS1JJU0hOQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMDhcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUEFMTEVSTEEgUkFNQUtBTlRIIFJFRERZXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMjBcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIklPVCBCQVNFRCBIT01FIEFVVE9NQVRJT04gU1lTVEVNXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEwM1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJORUhBIFZFUk1BXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBQLiBKLiBFbmdpbmVlclwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTI0XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkFZVVNIIExBQkhcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTI2XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkxBTElUIFJBTktBV0FUXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEyOVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJQQVRFTCBGT1JVTUJFTiBTVU1BTkJIQUlcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAyMVwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiRlBHQSBCQVNFRCBSRUFMIFRJTUUgU1lTVEVNXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEyMVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJOR0FSRyBBRElUSSBSQVRBTkxBTFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gUC4gSi4gRW5naW5lZXJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzEzNlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJWQUlKQU5BUFVSS0FSIFNIQU1CSEFWSSBTQU5KSVZcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTQxXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkFNT0xQUkFUQVAgUkFKRVNIIFNJTkdIXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzE1MlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJCSEFOVSBBTk5BUE9PUk5BXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIkcgMjJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIklNUExFTUVOVEFUSU9OIE9GIEcgU0lORVdBVkUgR0VORVJBVE9SIEZPUiBCSU9JTVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNDVcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQUtLRUxBIFNBSUtSSVNITkFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIkRyLihNcnMuKSBSLiBOLiBEaGF2c2VcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA1OFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJSRUREWSBLQU5DSEFOQSBHQU5HQSBCSEFWQU5JXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA1OVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJQRU5VTUFSVEhJIEFJU0hXQVJZQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNjdcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQkhBSSBIQVJJU0hcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAyM1wiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiU01BUlQgQkFORFwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNTVcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiVEVKQVNXSU5JIFNBTkRBUE9MTEFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBBLiBTLiBNYW5kbG9pXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNTdcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQUVSUkEgUkFNWUFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTU5XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIk1ZTkVOSSBDSEFSSVNITUFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTY0XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlNBTUlORU5JIFBPT0pBIFBSQVZBTExJS0FcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAyNFwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiTElORUFSIEcgREVURUNUSU9OIFRFQ0hOSVFVRVMgRk9SIE1JTU8gU1lTVEVNU1wiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNzdcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiTkFLSVJBS09NTVVMQSBNQU5JU0hcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIkRyLihNcnMuKSBTLiBHdXB0YVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDg4XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIktBUlJJIEVTV0FSIE5BR0EgQVlZQVBQQSBSRUREWVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNTRcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiRFJPTkEgS1VNQVIgREVLT05EQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNTZcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiS0FWRVJJIERJTkVTSFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDI1XCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJGUEdBIElNUExFTUVOVEFUSU9OIE9GIFJTIENPREVcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDQwXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkFJTkFNUFVESSBTVVNNSVRIQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuKE1ycy4pIFMuIEd1cHRhXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNzVcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUkFNSVJFRERZIEFNUlVUSEEgVkFSU0hJTklcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDc4XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIk5JS0hJVEEgTUFESFVTVURBTiBCSE9PUEFUSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwODBcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiS0FOVEFNTkVOSSBHRUVUSElLQSBWQVJTSEFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAyNlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiUEFUQ0ggQU5URU5OQVwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMTFcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiQkhJTkdBUkRFIFNBSElMIFJBSkVTSFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gRy4gU2FudHJhXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwNjFcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiREhVUEFNIE5BVkVFTlwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwODdcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiVEhPVEFQQUxMSSBOQVZFRU5cIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTUzXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIk5BSVIgS0FSVEhJSyBNVVJBTElcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAyN1wiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiVkVISUNMRSBUUkFDS0lORyBVU0lORyBHUFMtR1NNXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTNFQzEwMlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJDSElUUk9EQSBTQU5KQVlLVU1BUiBLQU5USUJIQUlcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIEcuIFNhbnRyYVwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxM0VDMTQ3XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIk1VWkFNRUxcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMTAxXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkFBU0hMRVNIIFBBVEVMXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzExNlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJSQU5BIFZJUkFKIERIQVJNRU5EUkFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiRyAyOFwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiV0lSRUxFU1MgRUxFQ1RSSUNJVFkgRyBDT05TVU1QVElPTiBNRVRFUiBVU0lORyBHU1wiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMwMzlcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiRElWWUFNIEZBVEVIUFVSSUFcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIkRyLihNcnMuKSBKLiBOLiBQYXRlbFwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDYyXCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlVKSldBTCBLVU1BUlwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxMDJcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUFJBSkFQQVRJIE1BSElQQUwgSVNIVkFSQkhBSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNDhcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiU0hJVkFNIFRBTkRPTlwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDI5XCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJJTUFHRSBDT05UUk9MTEVEIFJPQk9UIExPQ0FMSVpBVElPTiBBTkQgTkFWSUdBXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzAzMVwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJDT01BTkRVUiBSQUpBU0VLSEFSIEtBUlRISUtcIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIkRyLihNcnMuKSBKLiBOLiBQYXRlbFwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDM2XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIlBPVFRJR0FSSSBTQUNISU4gTU9IQU5cIixcclxuICAgICAgICBcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJTck5vXCI6IFwiXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuICAgICAgICBcIlJvbGxOb1wiOiBcIlUxNEVDMDc2XCIsXHJcbiAgICAgICAgXCJTdHVkZW50TmFtZVwiOiBcIkdVTkRBQk9JTkEgUkFOSklUSFwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJcIixcclxuICAgICAgICBcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiUm9sbE5vXCI6IFwiVTE0RUMxNjBcIixcclxuICAgICAgICBcIlN0dWRlbnROYW1lXCI6IFwiUkFNIFJBREVTSCBEQVZVTFVSSVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIlNyTm9cIjogXCJHIDMwXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0VGl0bGVcIjogXCJTSU1VTEFUSU9OIEJBU0VEIEcgU1RVRFkgT0YgVkFSSU9VUyBTRU5TT1JTIFJFUVVJXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA1MFwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJHQVJBUEFUSSBTQUkgVEVKQVwiLFxyXG4gICAgICAgIFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIEsuIFAuIFVwbGFcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA4MlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJCQUxJVkFEQSBTIFMgTkFHQVZBTExJXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA5MlwiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJHT1BJU0VUVEkgS0FWSVRIQSBCQUJZXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiU3JOb1wiOiBcIlwiLFxyXG4gICAgICAgIFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJSb2xsTm9cIjogXCJVMTRFQzA5N1wiLFxyXG4gICAgICAgIFwiU3R1ZGVudE5hbWVcIjogXCJTSUREQVBVUkFNIE5JSEFSSUtBXCIsXHJcbiAgICAgICAgXCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiMVwiXHJcbiAgICB9LFxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhMjAxN18xODsiLCJjb25zdCBEYXRhMjAxOV8yMCA9IFtcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDFcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiU1BFRUNIIFJFQ09HTklUSU9OIFVTSU5HIERFRVAgTEVBUk5JTkdcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwOTFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNQU5OQU0gVklKQVlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gUC4gSy4gU2hhaFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA5NlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlRIQU1NSU5FTkkgWUFTV0FOVEggS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTAzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTSBTIFNZQU0gU1VOREFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEyOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktIQVpJIE1BSEFNTUFEIFNBWklEXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIm91dGFnZSBhbmFseXNpcyAmIG9wdGltYWwgcG93ZXIgYWxsb2NhdGlvbiBmb3IgZG93bmxpbmsgbm9uLW9ydGhvZ29uYWwgbXVsdGlwbGUgYWNjZXNzIChub21hKVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAyNFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNIQUggUkFKIERIQVZBTEJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gQS4gSC4gTGFsbHV3YWRpYVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAzN1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNBVElTSCBTSElOR1JBS0hJWUFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDQzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUFJBTkpBTCBBR1JBV0FMXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA0NVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNISVZBTlNIIEFHQVJXQUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDNcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiQ09BTCBNSU5FUlMnIFNBRkVUWSBNT05JVE9SSU5HIFNZU1RFTVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAwN1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNIUkVBWUEgQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBBLiBILiBMYWxsdXdhZGlhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDA4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTUFOQVNBIEtPVEhBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkNvLUd1aWRlIDogUHJvZi4gUC4gSy4gU2hhaFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAxMFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1PWEEgQUxQRVNIIFBBVEVMXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAzNVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFOS0lUQSBCQUtTSElcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDRcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiSW9UIEJBU0VEIFZPSUNFIENPTlRST0wgT0YgSE9NRSBBUFBMSUFOQ0VTKVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA4M1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBVEVMIEFOS1VSS1VNQVIgTkFSRVNIQkhBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBBLiBILiBMYWxsdXdhZGlhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDg1XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQk9HSEFSQSBKRU5JTEtVTUFSIERJTkVTSEJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiQ28tR3VpZGUgOiBQcm9mLiBQLiBLLiBTaGFoXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTAwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUEFSTUFSIE1BTEFZIEtBTFBFU0hcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTE4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTUVIVEEgS1VTSEFMIEpZT1RJTkJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDVcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiRkxBU0ggU0xPT0QgSU5USU1BVElPTiBPVkVSIEdTTSBORVRXT1JLXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNEVDMDA3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0hVQkhBTktBUiBUT01BUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBBLiBILiBMYWxsdXdhZGlhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxM0VDMDMxXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUEFURUwgQVBFS1NIQUJFTiBBTklMQkhBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTEzRUMwMzdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLVSBSQUpOSSBNRUVOQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTEzNUVDMTIyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU1VESEEgQ0hBVURIQVJZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyA2XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkRlc2lnbiBhbmQgZGV2ZWxvcG1lbnQgb2Ygc2Vuc29yIG5vZGUgZm9yIGZvb2Qgc3VwcGx5IGNoYWluIG1hbmFnZW1lbnRcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwODRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTQVJJS0hBREEgTUFOU0kgUkFNSklcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIChNcnMuKSBVLiBELiBEYWxhbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA5MFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNJUklQUk9MVSBTQUkgUFJBTkFWXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzExNFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNVUkVMSVlBIEJBTlNJQkVOIERJTkVTSEJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDdcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiU2ltdWxhdGlvbiBhbmQgYW5hbHlzaXMgb2Ygd2VhcmJsZSBhbnRlbm5hIGZvciBkaWZmZXJlbnQgZmFicmljIG1hdGVyaWFsc1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEwMVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlZBTUFOQSBSQVZJTkRSQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gKE1ycy4pIFUuIEQuIERhbGFsXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTA3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVkVNVUxBUEFMTEkgUEFWQU4gU0FJIEdBTkVTSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMDhcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJUIFNSSU5JVkFTQSBWQVJBIENIQUtSQVZBUlRIWVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVUdJUkkgU0FJIFNBR0FSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyA4XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkV2YWx1YXRlIGRpZWxlY3RyaWMgY29uc3RhbnQgb2YgZGlmZmVyZW50IGZhYnJpY3MgdXNpbmcgc29saWQgZGllbGV0cmljIGNlbGxcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMDRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJDSEVWVUxBTUFEREkgTkFWRUVOXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiAoTXJzLikgVS4gRC4gRGFsYWxcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMDZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJOQU1BTElERVZJIEJIQVJBVEggUkFKXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEyN1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlIgR0FORVNIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEzNVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktBVEhBRCBESEFWQUwgQ0hIQUdBTkJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDlcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiSW9UIGJhc2VkIHBsYW50ICYgc29pbCBtb25pdG9yaW5nIHN5c3RlbVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAyN1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkpBUklXQUxBIERFRVAgQVNISVNIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIE4uIEIuIEthbmlya2FyXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDU3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUkFKQVQgS1VNQVIgUEFOSUdSQUhJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA2MVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkNIT1VIQU4gTU9OVSBIT1JJTEFMXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzE0MFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNIQUggS0FVU1RVQkggTUFOSVNIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxMFwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJJb1QgYmFzZWQgcGF0aWVudCBtb25pdG9yaW5nIHN5c3RlbVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEyMlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFCSElTSEVLIFJBSkFOXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIE4uIEIuIEthbmlya2FyXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTMxXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQVJZQU4gU0lOR0ggQUhMQVdBVFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxNDNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJOSVRJU0ggUkFOQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTFcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiSGFuZCB3cml0dGVuIGNoYXJhY3RlciByZWNvZ25pdGlvbiB1c2luZyBtYWNoaW5lIGxlYXJuaW5nXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDQwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTUFSVFkgVkVOS0FUQSBIQU5VTUFUSCBTQUkgSEFSU0hJVFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gSi4gTi4gU2FydmFpeWFcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNDFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLQVRUQU1VUkkgU0FJIE1BTkkgU1dFVEhBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA0N1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktPRFVSSSBBUEFSTkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDQ4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTUFLSU5FREkgVkFTQVZJIERFVklcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDEyXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIklvVCBCQVNFRCBTTUFSVCBIT01FXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDg2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS09ZQSBTUklOQVRIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBKLiBOLiBTYXJ2YWl5YVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA4OVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlRBTk5JUlUgVklOT0QgS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTQxXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQVRDSEkgU1JFRUhBUlNIQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTkFORElQQVRJIFZFTktBVEEgU0FJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxM1wiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJBVVRPTk9NT1VTIEFHUklDVUxUVVJBTCBST0JPVFwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA1M1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBVEVMIERIUlVWIFJBSkVORFJBS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIEEuIEQuIERhcmppXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDU2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiR0FOREhJIE1FRVQgSkFZRU5EUkFLVU1BUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNzRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTSEFOS0FSQU5BUkFZQU5BTiBIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxNFwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJTTUFSVCBBVFRFTkRBTkNFIFNZU1RFTVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAwMlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlJBVkVFTkEgTU9SRVNIV0FSIFZJTkNIVVJLQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIEEuIEQuIERhcmppXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDM4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0hBU0hXQVRJIEFTVEhBTkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTA5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQkhBTkFOSSBNSUxJRSBQSVlVU0hcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTEzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTkFORElOSSBVUEFESFlBWUFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDE1XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkUtV1JJVElORyBVU0lORyBBUk0gTUlDUk9DT05UUk9MTEVSXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDc2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiREVQQU5JIEJIVU1JTCBSQUpOSUtBTlRCSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBBLiBELiBEYXJqaVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxNlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJEZXNpZ24gYW5kIHBlcmZvcm1hbmNlIGFuYWx5c2lzIG9mIGUtdGV4dGlsZSBhbnRlbm5hXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDAzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTklLSVRBIE5JTEVTSCBNSVNUUllcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIFAuIE4uIFBhdGVsXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDA0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTklLSElUQSBQUkFWSU4gTU9SRVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNjlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLQVNITUlSQSBQUkFESVAgR0hPTVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTdcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiUGVyZm9ybWFuY2UgYW5hbHlzaXMgb2Yga3JldHNjaG1hbm4gY29uZmlndXJhdGlvbiBiYXNlZCBzaW5nbGUtbGF5ZXJlZCBzcHIgc3lzdGVtXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDMwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQ0hFUlVLVVJJIFBSQVNBTlRIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBQLiBOLiBQYXRlbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA2M1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBS0FMQVBBVEkgUkFWSSBLVU1BUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNjVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJBTkFQQVJUSEkgTUFOSSBERUVQQUsgS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkIgVklTSE5VREFUSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMThcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiSGVhbHRoIG1vbml0b3Jpbmcgc3lzdGVtXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDg4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQkVaQVdBREEgUE9PSklUSEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIFouIE0uIFBhdGVsXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDkyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUyBIQVJJIENIQU5EQU5BXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA5NVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktPTkFSSSBKT1NITkEgUkVERFlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDk4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTUFERU0gR1VSVSBMQUtTSE1JIERFVklcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDE5XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkludGVsbGlnZW50IGFjY2lkZW50IGRldGVjdGlvbiBhbmQgYWxlcnRpbmcgc3lzdGVtXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTEwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVkFOR0FMQSBBTk9PU0hBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBaLiBNLiBQYXRlbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzExNlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlZFTExPUkUgVElOQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMTdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLT1BQQUxMSSBOQUdBIFNSQVZZQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMjFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJJSkpBREEgTklLSVRIQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMjBcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiQXV0b25vbW91cyByb2JvdCBmb3IgaW5kdXN0cmlhbCBhcHBsaWNhdGlvblwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAwOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BVVNBTSBKSUdORVNIS1VNQVIgUEFURUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIFouIE0uIFBhdGVsXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDEzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQVNNSVRBIEpPSFJJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAxNFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNIUkVZQSBBU0hPSyBBR0FSV0FMXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAxOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBTktUSSBSQUpFU0ggU0hBSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMjFcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiTkxQIENIQVRCT1RcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNThcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJDSElOVEFQQUxMSSBESEFSTUVORFJBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEouIEVuZ2luZWVyXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDY4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiREhVTElQQUxBIFNSSU1BTklLQU5UQSBQQVJUSFVTSVZBSU5cIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDczXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTUFDSEVSTEEgS0lSQU4gS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDc1XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVEFMTFVSSSBOQUdBU0FJIFZFTktBVEEgU1VESEVFUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMjJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiSW9UIEJBU0VEIFBBUktJTkcgU0xPVCBNQU5BR0VNRU5UXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDcxXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQ0hJTk5BTSBTUkkgSEFSSU5JXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEouIEVuZ2luZWVyXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDc3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS09OREEgS0VFUlRISSBSRUREWVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNzlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNQUxJR0lSRUREWSBBTVVMWUEgUkVERFlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDgyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTEVLS0FMQSBMRUVMQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMjNcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiSW9UIEJBU0VEIFNNQVJUIEFHUklDVUxUVVJFXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDI4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQk9ZQSBTUkkgUkFTSE1JVEhBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEouIEVuZ2luZWVyXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDU0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUFVMQUtBTSBNQUxBVEhJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA1NVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFOVVBBTUEgUlVEUkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDY2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiRFVWVkEgTklIQVJJS0FcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDI0XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkhhbmQgd3JpdHRlbiBkaWdpdCByZWNvZ25pdGlvbiBzeXN0ZW0gdXNpbmcgZnBnYVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAxMVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNBSEFZIFJBSiBUSVJLRVlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gUC4gSi4gRW5naW5lZXJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMjJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJZQURBViBTVURIQU5TSFVTSU5IIFJBTVJBSlNJTkhcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDMyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS1VSQVBBVEkgUFJBREVFUCBNQU5JS0FOVEEgU0FJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyNVwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJERVRFUk1JTklTVElDIFNZU1RFTSBGT1IgU01BUlQgQUdSSUNVTFRVUkUgVVNJTkcgSW9UXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDI1XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0FMT05JIE5BWUFOIEpBSU5cIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIEEuIFMuIE1hbmRsb2lcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNTlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJSSURESEkgTU9SRVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNjBcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJCSEFHQVZBVEggUkFDSEFOQSBSQU1BS0FOVEhcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDcyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQU5VUkFESEEgR1wiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMjZcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiRGlzdGFuY2UgbWVhc3VyZW1lbnQgZm9yIGJsaW5kIHBlb3BsZVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEwMlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkdPVVJBViBEQVNcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIEEuIFMuIE1hbmRsb2lcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMTJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJSQVZJIE1FTkFSSUFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiQ28tR3VpZGUgOiBQcm9mLiBQLiBLLiBTaGFoXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTE5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS0FSQU4gTE9PTktFUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMjBcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTSURESEFSVEggS0hFVEFOXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyN1wiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJTbWFydCBnYXJiYWdlIG1vbml0b3JpbmcgJiBzeXN0ZW1cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNDlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQVRFTCBLUlVUSSBWSVBVTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4oTXJzLikgUy4gR3VwdGFcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNTJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJDT05UUkFDVE9SIEpBTktJIEtJU0hPUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwOTlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNVVNLQU4gQ0hPVFJBTklcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTM4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS0VZQSBQQVJJREFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDI4XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkRldGVjdGlvbiBvZiBoYXphcmRvdXMgZ2FzZXMgdXNpbmcgaW90XCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDE2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQ0hBUlBPVCBLUlVOQUwgRlVMSklCSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLihNcnMuKSBTLiBHdXB0YVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzEyOFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBUlRIIEtBTEFOSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMxMzZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQUklZQU5LS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTM5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTUVSQ0hBTlQgUlVLU0hJVCBNQU5JU0hLVU1BUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMjlcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiRHVhbCBiYW5kIGNpcmN1bGFybHkgcG9sYXJpemVkIGFubnVsYXIgcmluZyBzbG90IGFudGVubmFcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMDFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJOSUhBUiBNQU5PSiBQQU5WQUxLQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuKE1ycy4pIFMuIEd1cHRhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDA1XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTVJJTkFMIExBS0hFUkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDIwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0FST05JQSBWSVNIQUwgSkFZRVNIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzAyM1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkpPU0hJIERBUlNISVQgS0VUQU5CSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAzMVwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJNb2JpbGUgYXBwIGNvbnRyb2xsZWQgbWV0YWwgZGV0ZWNjdG9yXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDM5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQk9OR1UgVkVOS0FURVNIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuKE1ycy4pIFMuIE4uIFNoYWhcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNDZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJBSVRUTEEgU0FJTkFUSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwNTBcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJNVUREQUdPTkkgS0FMWUFOIEdPVURcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTI0XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiR1VERUxMSSBCSEFTS0FSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAzMlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJUZXh0IHRvIGltYWdlIHN5bnRoZXNpcyB1c2luZyBnYW5zXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDE1XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0FNUEFUIE1BTlNJIEFOSUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIEsuIFAuIFVwbGFcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwMTZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQVRFTCBQQVJUSEFWIFNVTUFOVFJBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJDby1HdWlkZSA6IERyLiBLaXJ0aSBJbmFtZGFyXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDI5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiREhBUkFJWUEgS1JVVElcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDY3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQUJISU5BViBKQUlOXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAzM1wiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJDb250cm9sIG9mIHF1YWRjb3B0ZXIgdXNpbmcgaGFuZCBnZXN0dXJlc1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzA5N1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBSQUpWQUwgSyBOXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBLLiBQLiBVcGxhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTIzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0FJIEtBVVNISUsgS0FORFVLVVJJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkNvLSBHdWlkZSA6IERyLiBLYW1hbCBDYXB0YWluXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMTM3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUFJBVEhBS09UQSBTQU0gTklUSElOIENIT0NLQ0VFXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTZFQzE0MlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkJJVExBIEJIQU5VIFRFSkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDM0XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlZpZGVvIGRlYmx1cnJpbmcgdXNpbmcgZGVlcGxlYXJuaW5nXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDgwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUFVMSVBBVEkgU0hBUkFUSEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIEsuIFAuIFVwbGFcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwODFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJUSVBJUkVERFkgVEhBUlVOIFJFRERZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkNvLUd1aWRlIDogRHIuIEouIE4uIFNhcnZhaXlhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNkVDMDg3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiWUFNQU5JIEJIQVJBVEhLVU1BUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE2RUMwOTNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJSQUNIVVJJIEFKQVkgS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCJcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCJcclxuXHR9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGEyMDE5XzIwOyIsImNvbnN0IERhdGEyMDE4XzE5ID0gW1xyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMVwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJQRVJTT05BTCBBU1NJU1RBTlQgUk9CT1RcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwMjVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJCSEFOREFSSSBNQVlBTksgQkhVUEFMU0lOR0hcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gUC4gSy4gU2hhaFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA2MVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkpBTEFTVVRSQU0gR0lSSVNIIEtBTFlBTlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNjlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJDSElUVElNQUxMQSBTQU5USE9TSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwOTRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLQVJOQVRJIE5BR0EgS0lSQU4gUkVERFlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiQ0FSIFBBUktJTkcgQ09OVFJPTExFUlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAyNlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BTkRBTEFZV0FMQSBVTUFORyBTVU5JTEtVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEsuIFNoYWhcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwMjdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJHQU5ESEkgSkFZIE5JUkFWQkhBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwMjhcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJSQUhVTCBHVVBUQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNDBcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJZQURBViBPTVBSQUtBU0ggTkFORExBTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgM1wiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJSRUFMIFRJTUUgQVVUT01BVElPTiBJTiBBR1JJQ1VMVFVSRVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA4MlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkdPUElTRVRUWSBTQUkgS0lSQU5cIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gUC4gSy4gU2hhaFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA4OVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNBUkFTV0FUSFVMQSBWRU5LQVRBIFNBSSBTUkkgSEFSU0hBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA5NVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFSSUtBVExBIFZJU0hOVSBWQVJESEFOIFJFRERZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzE0NlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktBTUJBTEEgTUFIRVNIIFJBSkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDRcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiU01BUlQgRU5WSVJPTk1FTlQgQ09OVFJPTCBJTiBHUkVFTiBIT1VTRVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEwMVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFSQURIWUEgQkhBVElBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIEEuIEguIExhbGx1d2FkaWFcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMTVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJWQUdIIERIQVZBTEtVTUFSIFJBSFVMQkhBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMTZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJBTUFOIEJIQVJUSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxNDNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJBR0FSV0FMIFBSQUVSSVQgUElZVVNIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyA1XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkZMQVNIIFNMT09EIElOVElNQVRJT04gT1ZFUiBHU00gTkVUV09SS1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTRFQzAwN1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNIVUJIQU5LQVIgVE9NQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gQS4gSC4gTGFsbHV3YWRpYVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTNFQzAzMVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBVEVMIEFQRUtTSEFCRU4gQU5JTEJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxM0VDMDM3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS1UgUkFKTkkgTUVFTkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxMzVFQzEyMlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNVREhBIENIQVVESEFSWVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgNlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJBVVRPTUFUSUMgV0FJVEVSIElOIFJFU1RBVVJBTlRTXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDM4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQUpNRUVSQSBBU0hPS1wiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBBLiBILiBMYWxsdXdhZGlhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTQ3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiR0FaVUxBIFNSSU5JVkFTIEJBUEFJQUggTkFJRFVcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTQ4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQkFOREFSVSBTVVJFU0hcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTUxXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiR1VEQVBBVEkgTkFHQSBNQU5JS0FOVEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDdcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiVFJBRkZJQyBERU5TSVRZIEJBU0VEIFNZU1RFTVwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA3NlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBFVExVIFJBSiBLVU1BUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBBLiBILiBMYWxsdXdhZGlhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTIzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTUFMSSBIQVJJU0ggS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTI1XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTUFESEEgTUFOSURFRVBcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTQ5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS09OQUtBTExBIERVUkdBIFBSQVNBRFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgOFwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJQSFlTSUNBTCBMQVlFUiBGT1IgVkFORVRcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwMDVcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQUkFZQVMgUEFUTkFJS1wiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gKE1ycy4pIFUuIEQuIERhbGFsXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDQ1XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUE9USFVSIEJIQVZBTkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDc5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS0FTQU0gTklLSElUSEEgUkVERFlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDgwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiSkFZIFBBVEVMXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyA5XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlBIWVNJQ0FMIExBWUVSIElNUExFTUVOVEFUSU9OIE9GIElFRUUgODAyLjExYWhcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNjRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJSQUNIQU1BTExVIFRIQU5NQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIChNcnMuKSBVLiBELiBEYWxhbFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA2NVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1BUktBUFVSQU0gS0FWSVRIQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMzhcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJEVUJBU0kgWUFTSFdBTlRIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzE0NVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkVEVUxBUEFMTEkgS0VFUlRISVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTBcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiTkVUV09SSyBTRUxFQ1RJT04gQU5EIENIQU5ORUwgQUxMT0NBVElPTiBGT1IgU1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA1NFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIllFUlJBR1VESSBIQVZFRUxBSFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gKE1ycy4pIFUuIEQuIERhbGFsXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDY3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUEFMTEVSTEEgS0VFUlRIQU5BXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA4NVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBTExFUkxBIFNBSSBURUpBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA4OFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktSSVNUQU0gUkFKSVRIQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTFcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiVklSVFVBTCBJTVBMRU1FTlRBVElPTiBPRiBOT04tT1JUSE9HT05BTCBNVUxUXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDEwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQklEVVJVIFlVS1RJIFNSSUtBTlRIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiAoTXJzLikgVS4gRC4gRGFsYWxcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwMTNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTQVVNWUEgU0hSSVZBU1RBVkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDE5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQUJISUxBU0hBIFBPRERBUiBBS1NIQVlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTA4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0hJS0hBIENIQVVESEFSWVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiTUVUQUwgREVURUNUSU9OIFJPQk9USUMgVkVISUNMRSBVU0lORyBBUkRVSU5PXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDIyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiSEFSU0hJS0EgU1VCQVNISSBNQUhFTkRJUkFOXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIE4uIEIuIEthbmlya2FyXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDU4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTUFOVkFSIFBSQVNIQU5UIFNBVElTSEJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDY2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUEFURUwgTUlOTkFUIFBSQVZJTkJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTMxXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUkFDSEFNQUxMQSBOSVRJTlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMTNcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiSU9UIEJBU0VEIEhPTUUgQVVUT01BVElPTlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA3N1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1FRVNBTEEgUkFUQU4gQkFCVVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gSi4gTi4gU2FydmFpeWFcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwOTBcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJBTFVHQU5USSBWSU5BWSBUIEhFSkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDk4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQk9ERU0gTUFOSUtBTlRBTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMDBcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJET01NQVJBSlUgTUFIRVNIIFZBUk1BXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxNFwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJORVVSQUwgTkVUV09SSyBHIE9OIEZQR0EgRk9SIEJJT01FRElDQUwgQVBQTElDQVRJXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDAzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVEFMQVRJIEFSVEggQVNISVNIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLiBBLiBELiBEYXJqaVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAwNFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktBU1VORFJBIEhBU1RJIEpJVEVORFJBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAxMlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1PREkgU0FISUwgS0FVU0hJS0tVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA3MVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1PREkgQU5BTkQgUkFKRVNIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxNVwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJCUkFJTiBDT01QVVRFUiBJTlRFUkZBQ0lOR1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA3NVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBSSVlBTlNISSBHVVBUQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gQS4gRC4gRGFyamlcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMTdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTQU5KQU5BIERISVJBTlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMjBcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJOQUdNQSBQQVRFTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxNDJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQUklZQU5TSFUgREFMQUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDE2XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkRFU0lHTiBBTkQgSU1QTEVNRU5UQVRJT04gT0YgT1BUSUNBTCBDT01NVU5JQ0FcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMDdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJKQUlOIFBSSVlBIFNBTkRFRVBcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIFAuIE4uIFBhdGVsXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTExXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUEFMU0VUS0FSIEtFV0FMS1VNQVIgQkhVUEVORFJBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzExMlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1JVEhBTkkgQURJTCBJUUJBTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMTNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJCQU1BTklBIEhFTEkgQU1SVVRMQUxcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDE3XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlBFUkZPUk1BTkNFIEFOQUxZU0lTIE9GIE9QVElDQUwgU1lTVEVNIFVTSU5HIE9QXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTE4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiWUFEQVYgQU1JVEtVTUFSIFJBTUVTSENIQU5EUkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIFAuIE4uIFBhdGVsXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTE5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0FOSkVFViBLVU1BUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMjdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJSQUhVTCBLQU5BVUpJWUFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTI4XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0hSSU1BTEkgUkFIVUwgR09WSU5EQkhBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMThcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiSU5URUxMSUdFTlQgU1lTVEVNIEZPUiBWRUhJQ0FMQVIgQUNDSURFTlQgREVURUNcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNDJcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQVUxMT09SSSBIQVJJTklLQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gWi4gTS4gUGF0ZWxcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNDNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQVRIQUtPVEEgSkFZQVBBVkFOSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNDhcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJLQVRBIFRBUlVOIFNSRUVcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDUyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQU5LQU0gTUFESFVTUkVFXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAxOVwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJJT1QgQkFTRUQgSU5URUxMSUdFTlQgUEFSS0lORyBTWVNURU1cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwODZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJSSVNISVRIQSBOQUdBUkVERFlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIFouIE0uIFBhdGVsXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDkyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUkFWSUxMQSBTUkkgQVNIQSBMQVRIQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwOTZcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJHQUpBUkxBIFJBU0hNSVRIQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwOTlcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQQU5HVUxVUkkgTEFLU0hNSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMjBcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiU1RFUkVPIFVTSU5HIEFMR09SSVRITSBPTiBGUEdBXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDA3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiREVTQUkgS1JVUEEgQU1CUklTSEJIQUlcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiUHJvZi4gUC4gSi4gRW5naW5lZXJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwMTRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJQVVJWSUsgS0FMQVJJWUFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDM2XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVU1SRVRIV0FMQSBLQUlTSEFWSSBISVJFTktVTUFSXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAzOVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlJBVEhPRCBBQkhJU0hFSyBSQU1FU0hCSEFJXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyMVwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNDRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJDSEVSVUtVUkkgU1JJIEhBUklLQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJQcm9mLiBQLiBKLiBFbmdpbmVlclwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA0OVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkMgQUtISUwgQ0hPV0RBUllcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDcwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS09USVBBTExJIFNBSSBTQVJBTiBLUklTSE5BXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA3NFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlJBVkFUSFUgQU1PT0xZQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMjJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiSEFSRFdBUkUgQU5EIFNPRlRXQVJFIENPLURFU0lHTiBPRiBGQUNFIFJFQ09HXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDU1XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVkFLQVRJIEFLSElMRVNIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlByb2YuIFAuIEouIEVuZ2luZWVyXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDU5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiS1VSQVBBVEkgQkhBTlVSQUpBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA3MlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNFRUxBTSBQUklZQURIQVJTSEFOIFJFRERZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA3M1wiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkxBS0tJU0VUVFkgUFJVREhWSSBSQUpcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDIzXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIklPVCBCQVNFRCBTTUFSVCBWRUhJQ0xFXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIiBDT05UUk9MIE1VVFVBTExZIEVOSEFcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJVMTVFQzA1MFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJIQVJTSFZBUkRIQU4gUyBESEFLRVJcIixcclxuXHRcdFwiY29sb3JcIjogXCJEci4gQS4gUy4gTWFuZGxvaVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDU3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTkFCQU5JVEEgREVXQU5cIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDYwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVkFEVUtVTCBSSVNISSBNQU5TVUtIQkhBSVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNjNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJUSE9CSEFOSSBBTUlUIERJTElQS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDI0XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlBFTVBBUkFUVVJFIEFORCBIVU1JRElUWSBNT05JVE9SSU5HIEZPUiBVTkRFUlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzAyMVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNBTUlSIFBPVURFTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4gQS4gUy4gTWFuZGxvaVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA0NlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIkFTSFVUT1NIIFNJTkdIXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA4MVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNBQ0hJTlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwODdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJTQVZFIFBSQVZFRU5cIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDI1XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkFJUiBRVUFMSVRZIFJFUE9SVElORyBTWVNURU1cIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwMDhcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJFTkdJTkVFUiBLUklTSEEgU0FSSlVcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuIEEuIFMuIE1hbmRsb2lcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxMDNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJST0hBTiBLVU1BUiBKSEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTI5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQUJISVNIRUsgU0lOR0hcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTMwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUEFORElSSSBZQVNIQVNWSU5JXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiRyAyNlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJIQVJEV0FSRSBHIElNUExFTUVOVEFUSU9OIE9GIFNJR04gTEFOR1VBR0UgVFJBTlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA0MVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlNIUkVZQVNIIFNVREFNQSBLRUpSSVdBTFwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4oTXJzLikgUy4gR3VwdGFcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNDdcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJBTk1PTCBTSU5HSEFMXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA1MVwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1VU1VLVSBWSU5BWSBLVU1BUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNTNcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJWSVBVTCBDSEFVREhBUllcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDI3XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIkxBU0VSIERSSVZFUiBGT1IgT1BUSUNBTCBDT01NVU5JQ0FUSU9OIFdJVEggVEVNXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDI5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiQ0hBVFRBIFJBSFVMXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLihNcnMuKSBTLiBHdXB0YVwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA2MlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBBVE5BTEEgS1JJU0hOQSBURUpBXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIlwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzA2OFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlZBTVNFRSBLUklTSE5BIFRBVElLT05EQVwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMwNzhcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJCT0xMQU1QQUxMWSBWSVZFS1wiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIwXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIkcgMjhcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiQUlSIFRSQUZGSUMgQ09OVFJPTCBGT1IgRFJPTkVTXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMDgzXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUFJBRlVMTCBTSEFSTUFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiRHIuKE1ycy4pIFMuIEd1cHRhXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTA1XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiUEVOVEVMQSBOQUdBUFJBU0FOVEhcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTUwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiR0FESSBOQUdBIFNBSSBNQU5JS0FOVEFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTUyXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiR1VESU1FVFRBIFNVSFJVVEggS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDI5XCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlVOREVSIFdBVEVSIFBJUEVMSU5FIEcgTEVBS0FHRSBERVRFQ1RJT04gQU5EIExPQ1wiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEzNFwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIktPVEhBIFZFTktBVEEgQU5JTCBLVU1BUlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJEci4oTXJzLikgUy4gTi4gU2hhaFwiLFxyXG5cdFx0XCJjb2xvclwiOiBcIjBcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJTck5vXCI6IFwiXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEzNlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIk1VVlZBIFNBSVRFSkFcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTM5XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiU0FQUEEgTkFSRU5EUkEgS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTQwXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiVklOSkFNIEJIQVJBVEhcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJHIDMwXCIsXHJcblx0XHRcIlByb2plY3RUaXRsZVwiOiBcIlwiLFxyXG5cdFx0XCJSb2xsTm9cIjogXCJVMTVFQzEyNlwiLFxyXG5cdFx0XCJTdHVkZW50TmFtZVwiOiBcIlBJTklOVEkgU0FJIFBSQVZBTElLIFJFRERZXCIsXHJcblx0XHRcIlByb2plY3RHdWlkZVwiOiBcIkRyLihNcnMuKSBTLiBOLiBTaGFoXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTM3XCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiSyBCSEFSQVQgS1VNQVJcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIlNyTm9cIjogXCJcIixcclxuXHRcdFwiUHJvamVjdFRpdGxlXCI6IFwiXCIsXHJcblx0XHRcIlJvbGxOb1wiOiBcIlUxNUVDMTQxXCIsXHJcblx0XHRcIlN0dWRlbnROYW1lXCI6IFwiTSBST01BTlRIIENIT1dBTlwiLFxyXG5cdFx0XCJQcm9qZWN0R3VpZGVcIjogXCJcIixcclxuXHRcdFwiY29sb3JcIjogXCIxXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiU3JOb1wiOiBcIlwiLFxyXG5cdFx0XCJQcm9qZWN0VGl0bGVcIjogXCJcIixcclxuXHRcdFwiUm9sbE5vXCI6IFwiVTE1RUMxNDRcIixcclxuXHRcdFwiU3R1ZGVudE5hbWVcIjogXCJERVZBTlNISSBISU5ES0FcIixcclxuXHRcdFwiUHJvamVjdEd1aWRlXCI6IFwiXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiMVwiXHJcblx0fVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhMjAxOF8xOTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBSZXNlYXJjaCh7U3JObywgUHJvamVjdFRpdGxlLCBSb2xsTm8sIFN0dWRlbnROYW1lLCBQcm9qZWN0R3VpZGUsIGNvbG9yfSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHRyIGNsYXNzTmFtZT17Y29sb3IgPT09IFwiMVwiID9gYmctZ3JheS0yMDBgOmBiZy1ncmF5LTUwYH0+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2NvbG9yID09PSBcIjFcIiA/YGJvcmRlci1yIGJvcmRlci1ncmF5LTUwYDpgYm9yZGVyLXIgYm9yZGVyLWdyYXktMjAwYH1zPntTck5vfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2NvbG9yID09PSBcIjFcIiA/YGJvcmRlci1yIGJvcmRlci1ncmF5LTUwYDpgYm9yZGVyLXIgYm9yZGVyLWdyYXktMjAwYH0+e1Byb2plY3RUaXRsZX08L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtjb2xvciA9PT0gXCIxXCIgP2Bib3JkZXItciBib3JkZXItZ3JheS01MGA6YGJvcmRlci1yIGJvcmRlci1ncmF5LTIwMGB9PntSb2xsTm99PC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17Y29sb3IgPT09IFwiMVwiID9gYm9yZGVyLXIgYm9yZGVyLWdyYXktNTBgOmBib3JkZXItciBib3JkZXItZ3JheS0yMDBgfT57U3R1ZGVudE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17Y29sb3IgPT09IFwiMVwiID9gYm9yZGVyLXIgYm9yZGVyLWdyYXktNTBgOmBib3JkZXItciBib3JkZXItZ3JheS0yMDBgfT57UHJvamVjdEd1aWRlfTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlYXJjaDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBGYWNpbGl0aWVzSGVhZGVyKHt0aXRsZX0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgcC0xMCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1ncmF5LTYwMCB0ZXh0LTN4bCBmb250LWJvbGRcIj57dGl0bGV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWNpbGl0aWVzSGVhZGVyOyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlc2VhcmNoIGZyb20gXCIuL1Jlc2VhcmNoL1Jlc2VhcmNoXCI7XHJcbmltcG9ydCBEYXRhMjAxN18xOCBmcm9tIFwiLi9EYXRhL0RhdGEyMDE3XzE4XCI7XHJcbmltcG9ydCBEYXRhMjAxOF8xOSBmcm9tIFwiLi9EYXRhL0RhdGEyMDE5XzIwXCI7XHJcbmltcG9ydCBEYXRhMjAxOV8yMCBmcm9tIFwiLi9EYXRhL0RhdGEyMDE4XzE5XCI7XHJcbmltcG9ydCBSZXNlYXJjaEhlYWRlciBmcm9tIFwiLi9SZXNlYXJjaEhlYWRlci9SZXNlYXJjaEhlYWRlclwiO1xyXG5cclxuZnVuY3Rpb24gUmVzZWFyY2hlcygpe1xyXG5cclxuICAgIGNvbnN0IGRpdlN0eWxlciA9IHtcclxuICAgICAgICBoZWlnaHQ6NjAwXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoRGF0YTIwMTdfMTgpO1xyXG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlByb2plY3RzIDIwMTctMThcIilcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VzSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gXCIxXCIpe1xyXG4gICAgICAgICAgICBzZXREYXRhKERhdGEyMDE3XzE4KTtcclxuICAgICAgICAgICAgc2V0VGl0bGUoXCJQcm9qZWN0cyAyMDE3LTE4XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gXCIyXCIpe1xyXG4gICAgICAgICAgICBzZXREYXRhKERhdGEyMDE4XzE5KTtcclxuICAgICAgICAgICAgc2V0VGl0bGUoXCJQcm9qZWN0cyAyMDE4LTE5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXREYXRhKERhdGEyMDE5XzIwKTtcclxuICAgICAgICAgICAgc2V0VGl0bGUoXCJQcm9qZWN0cyAyMDE5LTIwXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG5cclxuICAgICAgICAgICAgPFJlc2VhcmNoSGVhZGVyIHRpdGxlPXt0aXRsZX0vPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Z3JpZCBtZDpncmlkLWNvbHMtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1kOmdyaWQtY29sLTEgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicmFkaW8xXCIgY2xhc3NOYW1lPVwiZm9ybS1yYWRpbyBoLTQgdy00XCIgdmFsdWU9XCIxXCIgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VzSGFuZGxlcihlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPiZuYnNwO1Byb2plY3RzIGZyb20gMjAxNy0xODwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWQ6Z3JpZC1jb2wtMSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpbzFcIiBjbGFzc05hbWU9XCJmb3JtLXJhZGlvIGgtNCB3LTRcIiB2YWx1ZT1cIjJcIiBvbkNoYW5nZT17KGUpID0+IGNoYW5nZXNIYW5kbGVyKGUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+Jm5ic3A7UHJvamVjdHMgZnJvbSAyMDE4LTE5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZDpncmlkLWNvbC0xIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvMVwiIGNsYXNzTmFtZT1cImZvcm0tcmFkaW8gaC00IHctNFwiIHZhbHVlPVwiM1wiIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlc0hhbmRsZXIoZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj4mbmJzcDtQcm9qZWN0cyBmcm9tIDIwMTktMjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLWhpZGUgdy1mdWxsIG92ZXJmbG93LWF1dG8gcC0yXCIgc3R5bGU9e2RpdlN0eWxlcn0+XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLWdyYXktNDAwIHAtMyByb3VuZGVkIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0xIHctOFwiPlNyTm88L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0xXCI+UHJvamVjdFRpdGxlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMVwiPlJvbGxObzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTFcIj5TdHVkZW50TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTFcIj5Qcm9qZWN0R3VpZGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChyZXNlYXJjaCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZWFyY2g9e3Jlc2VhcmNofSBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyZXNlYXJjaC5TdHVkZW50TmFtZX17Li4ucmVzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlYXJjaGVzOyJdLCJzb3VyY2VSb290IjoiIn0=