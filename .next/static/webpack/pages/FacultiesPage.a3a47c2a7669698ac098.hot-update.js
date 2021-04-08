webpackHotUpdate_N_E("pages/FacultiesPage",{

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
});


/***/ }),

/***/ "./node_modules/react-toastify/dist/react-toastify.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/react-toastify.esm.js ***!
  \****************************************************************/
/*! exports provided: Bounce, Flip, Slide, ToastContainer, Zoom, collapseToast, cssTransition, toast, useToast, useToastContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bounce", function() { return Bounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flip", function() { return Flip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastContainer", function() { return ToastContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zoom", function() { return Zoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseToast", function() { return collapseToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssTransition", function() { return cssTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toast", function() { return toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useToast", function() { return useToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useToastContainer", function() { return useToastContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);




function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function isNum(v) {
  return typeof v === 'number' && !isNaN(v);
}
function isBool(v) {
  return typeof v === 'boolean';
}
function isStr(v) {
  return typeof v === 'string';
}
function isFn(v) {
  return typeof v === 'function';
}
function parseClassName(v) {
  return isStr(v) || isFn(v) ? v : null;
}
function isToastIdValid(toastId) {
  return toastId === 0 || toastId;
}
function getAutoCloseDelay(toastAutoClose, containerAutoClose) {
  return toastAutoClose === false || isNum(toastAutoClose) && toastAutoClose > 0 ? toastAutoClose : containerAutoClose;
}
var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function canBeRendered(content) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(content) || isStr(content) || isFn(content) || isNum(content);
}

var POSITION = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  TOP_CENTER: 'top-center',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center'
};
var TYPE = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  DEFAULT: 'default',
  DARK: 'dark'
};

/**
 * Used to collapse toast after exit animation
 */
function collapseToast(node, done, duration
/* COLLAPSE_DURATION */
) {
  if (duration === void 0) {
    duration = 300;
  }

  var height = node.scrollHeight;
  var style = node.style;
  requestAnimationFrame(function () {
    style.minHeight = 'initial';
    style.height = height + 'px';
    style.transition = "all " + duration + "ms";
    requestAnimationFrame(function () {
      style.height = '0';
      style.padding = '0';
      style.margin = '0';
      setTimeout(done, duration);
    });
  });
}

/**
 * Css animation that just work.
 * You could use animate.css for instance
 *
 *
 * ```
 * cssTransition({
 *   enter: "animate__animated animate__bounceIn",
 *   exit: "animate__animated animate__bounceOut"
 * })
 * ```
 *
 */

function cssTransition(_ref) {
  var enter = _ref.enter,
      exit = _ref.exit,
      _ref$appendPosition = _ref.appendPosition,
      appendPosition = _ref$appendPosition === void 0 ? false : _ref$appendPosition,
      _ref$collapse = _ref.collapse,
      collapse = _ref$collapse === void 0 ? true : _ref$collapse,
      _ref$collapseDuration = _ref.collapseDuration,
      collapseDuration = _ref$collapseDuration === void 0 ? 300 : _ref$collapseDuration;
  return function ToastTransition(_ref2) {
    var children = _ref2.children,
        position = _ref2.position,
        preventExitTransition = _ref2.preventExitTransition,
        done = _ref2.done,
        nodeRef = _ref2.nodeRef,
        isIn = _ref2.isIn;
    var enterClassName = appendPosition ? enter + "--" + position : enter;
    var exitClassName = appendPosition ? exit + "--" + position : exit;
    var baseClassName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var animationStep = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0
    /* Enter */
    );
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
      onEnter();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      if (!isIn) preventExitTransition ? onExited() : onExit();
    }, [isIn]);

    function onEnter() {
      var node = nodeRef.current;
      baseClassName.current = node.className;
      node.className += " " + enterClassName;
      node.addEventListener('animationend', onEntered);
    }

    function onEntered() {
      var node = nodeRef.current;
      node.removeEventListener('animationend', onEntered);

      if (animationStep.current === 0
      /* Enter */
      ) {
          node.className = baseClassName.current;
        }
    }

    function onExit() {
      animationStep.current = 1
      /* Exit */
      ;
      var node = nodeRef.current;
      node.className += " " + exitClassName;
      node.addEventListener('animationend', onExited);
    }

    function onExited() {
      var node = nodeRef.current;
      node.removeEventListener('animationend', onExited);
      collapse ? collapseToast(node, done, collapseDuration) : done();
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
  };
}

var eventManager = {
  list: /*#__PURE__*/new Map(),
  emitQueue: /*#__PURE__*/new Map(),
  on: function on(event, callback) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event).push(callback);
    return this;
  },
  off: function off(event, callback) {
    if (callback) {
      var cb = this.list.get(event).filter(function (cb) {
        return cb !== callback;
      });
      this.list.set(event, cb);
      return this;
    }

    this.list["delete"](event);
    return this;
  },
  cancelEmit: function cancelEmit(event) {
    var timers = this.emitQueue.get(event);

    if (timers) {
      timers.forEach(clearTimeout);
      this.emitQueue["delete"](event);
    }

    return this;
  },

  /**
   * Enqueue the event at the end of the call stack
   * Doing so let the user call toast as follow:
   * toast('1')
   * toast('2')
   * toast('3')
   * Without setTimemout the code above will not work
   */
  emit: function emit(event) {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this.list.has(event) && this.list.get(event).forEach(function (callback) {
      var timer = setTimeout(function () {
        // @ts-ignore
        callback.apply(void 0, args);
      }, 0);
      _this.emitQueue.has(event) || _this.emitQueue.set(event, []);

      _this.emitQueue.get(event).push(timer);
    });
  }
};

/**
 * `useKeeper` is a helper around `useRef`.
 *
 * You don't need to access the `.current`property to get the value
 * If refresh is set to true. The ref will be updated every render
 */

function useKeeper(arg, refresh) {
  if (refresh === void 0) {
    refresh = false;
  }

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(arg);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (refresh) ref.current = arg;
  });
  return ref.current;
}

function reducer(state, action) {
  switch (action.type) {
    case 0
    /* ADD */
    :
      return [].concat(state, [action.toastId]).filter(function (id) {
        return id !== action.staleId;
      });

    case 1
    /* REMOVE */
    :
      return isToastIdValid(action.toastId) ? state.filter(function (id) {
        return id !== action.toastId;
      }) : [];
  }
}

function useToastContainer(props) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(function (x) {
    return x + 1;
  }, 0),
      forceUpdate = _useReducer[1];

  var _useReducer2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, []),
      toast = _useReducer2[0],
      dispatch = _useReducer2[1];

  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var toastCount = useKeeper(0);
  var queue = useKeeper([]);
  var collection = useKeeper({});
  var instance = useKeeper({
    toastKey: 1,
    displayedToast: 0,
    props: props,
    containerId: null,
    isToastActive: isToastActive,
    getToast: function getToast(id) {
      return collection[id] || null;
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    instance.containerId = props.containerId;
    eventManager.cancelEmit(3
    /* WillUnmount */
    ).on(0
    /* Show */
    , buildToast).on(1
    /* Clear */
    , function (toastId) {
      return containerRef.current && removeToast(toastId);
    }).on(5
    /* ClearWaitingQueue */
    , clearWaitingQueue).emit(2
    /* DidMount */
    , instance);
    return function () {
      return eventManager.emit(3
      /* WillUnmount */
      , instance);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    instance.isToastActive = isToastActive;
    instance.displayedToast = toast.length;
    eventManager.emit(4
    /* Change */
    , toast.length, props.containerId);
  }, [toast]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    instance.props = props;
  });

  function isToastActive(id) {
    return toast.indexOf(id) !== -1;
  }

  function clearWaitingQueue(_ref) {
    var containerId = _ref.containerId;
    var _instance$props = instance.props,
        limit = _instance$props.limit,
        enableMultiContainer = _instance$props.enableMultiContainer;

    if (limit && (!containerId || instance.containerId === containerId && enableMultiContainer)) {
      toastCount -= queue.length;
      queue = [];
    }
  }

  function removeToast(toastId) {
    dispatch({
      type: 1
      /* REMOVE */
      ,
      toastId: toastId
    });
  }

  function dequeueToast() {
    var _queue$shift = queue.shift(),
        toastContent = _queue$shift.toastContent,
        toastProps = _queue$shift.toastProps,
        staleId = _queue$shift.staleId;

    appendToast(toastContent, toastProps, staleId);
  }
  /**
   * check if a container is attached to the dom
   * check for multi-container, build only if associated
   * check for duplicate toastId if no update
   */


  function isNotValid(_ref2) {
    var containerId = _ref2.containerId,
        toastId = _ref2.toastId,
        updateId = _ref2.updateId;
    return !containerRef.current || instance.props.enableMultiContainer && containerId !== instance.props.containerId || collection[toastId] && updateId == null ? true : false;
  } // this function and all the function called inside needs to rely on ref(`useKeeper`)


  function buildToast(content, _ref3) {
    var delay = _ref3.delay,
        staleId = _ref3.staleId,
        options = _objectWithoutPropertiesLoose(_ref3, ["delay", "staleId"]);

    if (!canBeRendered(content) || isNotValid(options)) return;
    var toastId = options.toastId,
        updateId = options.updateId;
    var props = instance.props;

    var closeToast = function closeToast() {
      return removeToast(toastId);
    };

    var isNotAnUpdate = options.updateId == null;
    if (isNotAnUpdate) toastCount++;
    var toastProps = {
      toastId: toastId,
      updateId: updateId,
      isIn: false,
      key: options.key || instance.toastKey++,
      type: options.type,
      closeToast: closeToast,
      closeButton: options.closeButton,
      rtl: props.rtl,
      position: options.position || props.position,
      transition: options.transition || props.transition,
      className: parseClassName(options.className || props.toastClassName),
      bodyClassName: parseClassName(options.bodyClassName || props.bodyClassName),
      style: options.style || props.toastStyle,
      bodyStyle: options.bodyStyle || props.bodyStyle,
      onClick: options.onClick || props.onClick,
      pauseOnHover: isBool(options.pauseOnHover) ? options.pauseOnHover : props.pauseOnHover,
      pauseOnFocusLoss: isBool(options.pauseOnFocusLoss) ? options.pauseOnFocusLoss : props.pauseOnFocusLoss,
      draggable: isBool(options.draggable) ? options.draggable : props.draggable,
      draggablePercent: isNum(options.draggablePercent) ? options.draggablePercent : props.draggablePercent,
      draggableDirection: options.draggableDirection || props.draggableDirection,
      closeOnClick: isBool(options.closeOnClick) ? options.closeOnClick : props.closeOnClick,
      progressClassName: parseClassName(options.progressClassName || props.progressClassName),
      progressStyle: options.progressStyle || props.progressStyle,
      autoClose: getAutoCloseDelay(options.autoClose, props.autoClose),
      hideProgressBar: isBool(options.hideProgressBar) ? options.hideProgressBar : props.hideProgressBar,
      progress: options.progress,
      role: isStr(options.role) ? options.role : props.role,
      deleteToast: function deleteToast() {
        removeFromCollection(toastId);
      }
    };
    if (isFn(options.onOpen)) toastProps.onOpen = options.onOpen;
    if (isFn(options.onClose)) toastProps.onClose = options.onClose; //  tweak for vertical dragging

    if (toastProps.draggableDirection === "y"
    /* Y */
    && toastProps.draggablePercent === 80
    /* DRAGGABLE_PERCENT */
    ) {
        toastProps.draggablePercent *= 1.5;
      }

    var closeButton = props.closeButton;

    if (options.closeButton === false || canBeRendered(options.closeButton)) {
      closeButton = options.closeButton;
    } else if (options.closeButton === true) {
      closeButton = canBeRendered(props.closeButton) ? props.closeButton : true;
    }

    toastProps.closeButton = closeButton;
    var toastContent = content;

    if (Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(content) && !isStr(content.type)) {
      toastContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(content, {
        closeToast: closeToast,
        toastProps: toastProps
      });
    } else if (isFn(content)) {
      toastContent = content({
        closeToast: closeToast,
        toastProps: toastProps
      });
    } // not handling limit + delay by design. Waiting for user feedback first


    if (props.limit && props.limit > 0 && toastCount > props.limit && isNotAnUpdate) {
      queue.push({
        toastContent: toastContent,
        toastProps: toastProps,
        staleId: staleId
      });
    } else if (isNum(delay) && delay > 0) {
      setTimeout(function () {
        appendToast(toastContent, toastProps, staleId);
      }, delay);
    } else {
      appendToast(toastContent, toastProps, staleId);
    }
  }

  function appendToast(content, toastProps, staleId) {
    var toastId = toastProps.toastId;
    if (staleId) delete collection[staleId];
    collection[toastId] = {
      content: content,
      props: toastProps
    };
    dispatch({
      type: 0
      /* ADD */
      ,
      toastId: toastId,
      staleId: staleId
    });
  }

  function removeFromCollection(toastId) {
    delete collection[toastId];
    var queueLen = queue.length;
    toastCount = isToastIdValid(toastId) ? toastCount - 1 : toastCount - instance.displayedToast;
    if (toastCount < 0) toastCount = 0;

    if (queueLen > 0) {
      var freeSlot = isToastIdValid(toastId) ? 1 : instance.props.limit;

      if (queueLen === 1 || freeSlot === 1) {
        instance.displayedToast++;
        dequeueToast();
      } else {
        var toDequeue = freeSlot > queueLen ? queueLen : freeSlot;
        instance.displayedToast = toDequeue;

        for (var i = 0; i < toDequeue; i++) {
          dequeueToast();
        }
      }
    } else {
      forceUpdate();
    }
  }

  function getToastToRender(cb) {
    var toastToRender = {};
    var toastList = props.newestOnTop ? Object.keys(collection).reverse() : Object.keys(collection);

    for (var i = 0; i < toastList.length; i++) {
      var _toast = collection[toastList[i]];
      var position = _toast.props.position;
      toastToRender[position] || (toastToRender[position] = []);
      toastToRender[position].push(_toast);
    }

    return Object.keys(toastToRender).map(function (p) {
      return cb(p, toastToRender[p]);
    });
  }

  return {
    getToastToRender: getToastToRender,
    collection: collection,
    containerRef: containerRef,
    isToastActive: isToastActive
  };
}

function getX(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}

function getY(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}

function useToast(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isRunning = _useState[0],
      setIsRunning = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      preventExitTransition = _useState2[0],
      setPreventExitTransition = _useState2[1];

  var toastRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var drag = useKeeper({
    start: 0,
    x: 0,
    y: 0,
    delta: 0,
    removalDistance: 0,
    canCloseOnClick: true,
    canDrag: false,
    boundingRect: null
  });
  var syncProps = useKeeper(props, true);
  var autoClose = props.autoClose,
      pauseOnHover = props.pauseOnHover,
      closeToast = props.closeToast,
      onClick = props.onClick,
      closeOnClick = props.closeOnClick;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isFn(props.onOpen)) props.onOpen(Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(props.children) && props.children.props);
    return function () {
      if (isFn(syncProps.onClose)) syncProps.onClose(Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(syncProps.children) && syncProps.children.props);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    props.draggable && bindDragEvents();
    return function () {
      props.draggable && unbindDragEvents();
    };
  }, [props.draggable]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    props.pauseOnFocusLoss && bindFocusEvents();
    return function () {
      props.pauseOnFocusLoss && unbindFocusEvents();
    };
  }, [props.pauseOnFocusLoss]);

  function onDragStart(e) {
    if (props.draggable) {
      var toast = toastRef.current;
      drag.canCloseOnClick = true;
      drag.canDrag = true;
      drag.boundingRect = toast.getBoundingClientRect();
      toast.style.transition = '';
      drag.x = getX(e.nativeEvent);
      drag.y = getY(e.nativeEvent);

      if (props.draggableDirection === "x"
      /* X */
      ) {
          drag.start = drag.x;
          drag.removalDistance = toast.offsetWidth * (props.draggablePercent / 100);
        } else {
        drag.start = drag.y;
        drag.removalDistance = toast.offsetHeight * (props.draggablePercent / 100);
      }
    }
  }

  function onDragTransitionEnd() {
    if (drag.boundingRect) {
      var _drag$boundingRect = drag.boundingRect,
          top = _drag$boundingRect.top,
          bottom = _drag$boundingRect.bottom,
          left = _drag$boundingRect.left,
          right = _drag$boundingRect.right;

      if (props.pauseOnHover && drag.x >= left && drag.x <= right && drag.y >= top && drag.y <= bottom) {
        pauseToast();
      } else {
        playToast();
      }
    }
  }

  function playToast() {
    setIsRunning(true);
  }

  function pauseToast() {
    setIsRunning(false);
  }

  function bindFocusEvents() {
    if (!document.hasFocus()) pauseToast();
    window.addEventListener('focus', playToast);
    window.addEventListener('blur', pauseToast);
  }

  function unbindFocusEvents() {
    window.removeEventListener('focus', playToast);
    window.removeEventListener('blur', pauseToast);
  }

  function bindDragEvents() {
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
    document.addEventListener('touchmove', onDragMove);
    document.addEventListener('touchend', onDragEnd);
  }

  function unbindDragEvents() {
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('mouseup', onDragEnd);
    document.removeEventListener('touchmove', onDragMove);
    document.removeEventListener('touchend', onDragEnd);
  }

  function onDragMove(e) {
    if (drag.canDrag) {
      e.preventDefault();
      var toast = toastRef.current;
      if (isRunning) pauseToast();
      drag.x = getX(e);
      drag.y = getY(e);

      if (props.draggableDirection === "x"
      /* X */
      ) {
          drag.delta = drag.x - drag.start;
        } else {
        drag.delta = drag.y - drag.start;
      } // prevent false positif during a toast click


      if (drag.start !== drag.x) drag.canCloseOnClick = false;
      toast.style.transform = "translate" + props.draggableDirection + "(" + drag.delta + "px)";
      toast.style.opacity = "" + (1 - Math.abs(drag.delta / drag.removalDistance));
    }
  }

  function onDragEnd() {
    var toast = toastRef.current;

    if (drag.canDrag) {
      drag.canDrag = false;

      if (Math.abs(drag.delta) > drag.removalDistance) {
        setPreventExitTransition(true);
        props.closeToast();
        return;
      }

      toast.style.transition = 'transform 0.2s, opacity 0.2s';
      toast.style.transform = "translate" + props.draggableDirection + "(0)";
      toast.style.opacity = '1';
    }
  }

  var eventHandlers = {
    onMouseDown: onDragStart,
    onTouchStart: onDragStart,
    onMouseUp: onDragTransitionEnd,
    onTouchEnd: onDragTransitionEnd
  };

  if (autoClose && pauseOnHover) {
    eventHandlers.onMouseEnter = pauseToast;
    eventHandlers.onMouseLeave = playToast;
  } // prevent toast from closing when user drags the toast


  if (closeOnClick) {
    eventHandlers.onClick = function (e) {
      onClick && onClick(e);
      drag.canCloseOnClick && closeToast();
    };
  }

  return {
    playToast: playToast,
    pauseToast: pauseToast,
    isRunning: isRunning,
    preventExitTransition: preventExitTransition,
    toastRef: toastRef,
    eventHandlers: eventHandlers
  };
}

function CloseButton(_ref) {
  var closeToast = _ref.closeToast,
      type = _ref.type,
      _ref$ariaLabel = _ref.ariaLabel,
      ariaLabel = _ref$ariaLabel === void 0 ? 'close' : _ref$ariaLabel;
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "Toastify"
    /* CSS_NAMESPACE */
    + "__close-button " + "Toastify"
    /* CSS_NAMESPACE */
    + "__close-button--" + type,
    type: "button",
    onClick: function onClick(e) {
      e.stopPropagation();
      closeToast(e);
    },
    "aria-label": ariaLabel
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 14 16"
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fillRule: "evenodd",
    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
  })));
}

function ProgressBar(_ref) {
  var _cx, _animationEvent;

  var delay = _ref.delay,
      isRunning = _ref.isRunning,
      closeToast = _ref.closeToast,
      type = _ref.type,
      hide = _ref.hide,
      className = _ref.className,
      userStyle = _ref.style,
      controlledProgress = _ref.controlledProgress,
      progress = _ref.progress,
      rtl = _ref.rtl,
      isIn = _ref.isIn;

  var style = _extends({}, userStyle, {
    animationDuration: delay + "ms",
    animationPlayState: isRunning ? 'running' : 'paused',
    opacity: hide ? 0 : 1
  });

  if (controlledProgress) style.transform = "scaleX(" + progress + ")";
  var defaultClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar", controlledProgress ? "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--controlled" : "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--animated", "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--" + type, (_cx = {}, _cx["Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--rtl"] = rtl, _cx));
  var classNames = isFn(className) ? className({
    rtl: rtl,
    type: type,
    defaultClassName: defaultClassName
  }) : Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultClassName, className); // 🧐 controlledProgress is derived from progress
  // so if controlledProgress is set
  // it means that this is also the case for progress

  var animationEvent = (_animationEvent = {}, _animationEvent[controlledProgress && progress >= 1 ? 'onTransitionEnd' : 'onAnimationEnd'] = controlledProgress && progress < 1 ? null : function () {
    isIn && closeToast();
  }, _animationEvent); // TODO: add aria-valuenow, aria-valuemax, aria-valuemin

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object.assign({
    role: "progressbar",
    className: classNames,
    style: style
  }, animationEvent));
}
ProgressBar.defaultProps = {
  type: TYPE.DEFAULT,
  hide: false
};

var Toast = function Toast(props) {
  var _cx;

  var _useToast = useToast(props),
      isRunning = _useToast.isRunning,
      preventExitTransition = _useToast.preventExitTransition,
      toastRef = _useToast.toastRef,
      eventHandlers = _useToast.eventHandlers;

  var closeButton = props.closeButton,
      children = props.children,
      autoClose = props.autoClose,
      onClick = props.onClick,
      type = props.type,
      hideProgressBar = props.hideProgressBar,
      closeToast = props.closeToast,
      Transition = props.transition,
      position = props.position,
      className = props.className,
      style = props.style,
      bodyClassName = props.bodyClassName,
      bodyStyle = props.bodyStyle,
      progressClassName = props.progressClassName,
      progressStyle = props.progressStyle,
      updateId = props.updateId,
      role = props.role,
      progress = props.progress,
      rtl = props.rtl,
      toastId = props.toastId,
      deleteToast = props.deleteToast,
      isIn = props.isIn;
  var defaultClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify"
  /* CSS_NAMESPACE */
  + "__toast", "Toastify"
  /* CSS_NAMESPACE */
  + "__toast--" + type, (_cx = {}, _cx["Toastify"
  /* CSS_NAMESPACE */
  + "__toast--rtl"] = rtl, _cx));
  var cssClasses = isFn(className) ? className({
    rtl: rtl,
    position: position,
    type: type,
    defaultClassName: defaultClassName
  }) : Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultClassName, className);
  var isProgressControlled = !!progress;

  function renderCloseButton(closeButton) {
    if (!closeButton) return;
    var props = {
      closeToast: closeToast,
      type: type
    };
    if (isFn(closeButton)) return closeButton(props);
    if (Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(closeButton)) return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(closeButton, props);
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Transition, {
    isIn: isIn,
    done: deleteToast,
    position: position,
    preventExitTransition: preventExitTransition,
    nodeRef: toastRef
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object.assign({
    id: toastId,
    onClick: onClick,
    className: cssClasses
  }, eventHandlers, {
    style: style,
    ref: toastRef
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object.assign({}, isIn && {
    role: role
  }, {
    className: isFn(bodyClassName) ? bodyClassName({
      type: type
    }) : Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify"
    /* CSS_NAMESPACE */
    + "__toast-body", bodyClassName),
    style: bodyStyle
  }), children), renderCloseButton(closeButton), (autoClose || isProgressControlled) && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ProgressBar, Object.assign({}, updateId && !isProgressControlled ? {
    key: "pb-" + updateId
  } : {}, {
    rtl: rtl,
    delay: autoClose,
    isRunning: isRunning,
    isIn: isIn,
    closeToast: closeToast,
    hide: hideProgressBar,
    type: type,
    style: progressStyle,
    className: progressClassName,
    controlledProgress: isProgressControlled,
    progress: progress
  }))));
};

var Bounce = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__bounce-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__bounce-exit",
  appendPosition: true
});
var Slide = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__slide-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__slide-exit",
  appendPosition: true
});
var Zoom = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__zoom-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__zoom-exit"
});
var Flip = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__flip-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__flip-exit"
});

var ToastContainer = function ToastContainer(props) {
  var _useToastContainer = useToastContainer(props),
      getToastToRender = _useToastContainer.getToastToRender,
      containerRef = _useToastContainer.containerRef,
      isToastActive = _useToastContainer.isToastActive;

  var className = props.className,
      style = props.style,
      rtl = props.rtl,
      containerId = props.containerId;

  function getClassName(position) {
    var _cx;

    var defaultClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify"
    /* CSS_NAMESPACE */
    + "__toast-container", "Toastify"
    /* CSS_NAMESPACE */
    + "__toast-container--" + position, (_cx = {}, _cx["Toastify"
    /* CSS_NAMESPACE */
    + "__toast-container--rtl"] = rtl, _cx));
    return isFn(className) ? className({
      position: position,
      rtl: rtl,
      defaultClassName: defaultClassName
    }) : Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultClassName, parseClassName(className));
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    ref: containerRef,
    className: "Toastify"
    /* CSS_NAMESPACE */
    ,
    id: containerId
  }, getToastToRender(function (position, toastList) {
    var containerStyle = toastList.length === 0 ? _extends({}, style, {
      pointerEvents: 'none'
    }) : _extends({}, style);
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: getClassName(position),
      style: containerStyle,
      key: "container-" + position
    }, toastList.map(function (_ref) {
      var content = _ref.content,
          toastProps = _ref.props;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Toast, Object.assign({}, toastProps, {
        isIn: isToastActive(toastProps.toastId),
        key: "toast-" + toastProps.key,
        closeButton: toastProps.closeButton === true ? CloseButton : toastProps.closeButton
      }), content);
    }));
  }));
};
ToastContainer.defaultProps = {
  position: POSITION.TOP_RIGHT,
  transition: Bounce,
  rtl: false,
  autoClose: 5000,
  hideProgressBar: false,
  closeButton: CloseButton,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  draggablePercent: 80
  /* DRAGGABLE_PERCENT */
  ,
  draggableDirection: "x"
  /* X */
  ,
  role: 'alert'
};

var containers = /*#__PURE__*/new Map();
var latestInstance;
var containerDomNode;
var containerConfig;
var queue = [];
var lazy = false;
/**
 * Check whether any container is currently mounted in the DOM
 */

function isAnyContainerMounted() {
  return containers.size > 0;
}
/**
 * Get the toast by id, given it's in the DOM, otherwise returns null
 */


function getToast(toastId, _ref) {
  var containerId = _ref.containerId;
  var container = containers.get(containerId || latestInstance);
  if (!container) return null;
  return container.getToast(toastId);
}
/**
 * Generate a random toastId
 */


function generateToastId() {
  return Math.random().toString(36).substr(2, 9);
}
/**
 * Generate a toastId or use the one provided
 */


function getToastId(options) {
  if (options && (isStr(options.toastId) || isNum(options.toastId))) {
    return options.toastId;
  }

  return generateToastId();
}
/**
 * If the container is not mounted, the toast is enqueued and
 * the container lazy mounted
 */


function dispatchToast(content, options) {
  if (isAnyContainerMounted()) {
    eventManager.emit(0
    /* Show */
    , content, options);
  } else {
    queue.push({
      content: content,
      options: options
    });

    if (lazy && canUseDom) {
      lazy = false;
      containerDomNode = document.createElement('div');
      document.body.appendChild(containerDomNode);
      Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToastContainer, Object.assign({}, containerConfig)), containerDomNode);
    }
  }

  return options.toastId;
}
/**
 * Merge provided options with the defaults settings and generate the toastId
 */


function mergeOptions(type, options) {
  return _extends({}, options, {
    type: options && options.type || type,
    toastId: getToastId(options)
  });
}

var createToastByType = function createToastByType(type) {
  return function (content, options) {
    return dispatchToast(content, mergeOptions(type, options));
  };
};

var toast = function toast(content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, options));
};

toast.success = /*#__PURE__*/createToastByType(TYPE.SUCCESS);
toast.info = /*#__PURE__*/createToastByType(TYPE.INFO);
toast.error = /*#__PURE__*/createToastByType(TYPE.ERROR);
toast.warning = /*#__PURE__*/createToastByType(TYPE.WARNING);
toast.dark = /*#__PURE__*/createToastByType(TYPE.DARK);
toast.warn = toast.warning;
/**
 * Remove toast programmaticaly
 */

toast.dismiss = function (id) {
  return eventManager.emit(1
  /* Clear */
  , id);
};
/**
 * Clear waiting queue when limit is used
 */


toast.clearWaitingQueue = function (params) {
  if (params === void 0) {
    params = {};
  }

  return eventManager.emit(5
  /* ClearWaitingQueue */
  , params);
};
/**
 * return true if one container is displaying the toast
 */


toast.isActive = function (id) {
  var isToastActive = false;
  containers.forEach(function (container) {
    if (container.isToastActive && container.isToastActive(id)) {
      isToastActive = true;
    }
  });
  return isToastActive;
};

toast.update = function (toastId, options) {
  if (options === void 0) {
    options = {};
  }

  // if you call toast and toast.update directly nothing will be displayed
  // this is why I defered the update
  setTimeout(function () {
    var toast = getToast(toastId, options);

    if (toast) {
      var oldOptions = toast.props,
          oldContent = toast.content;

      var nextOptions = _extends({}, oldOptions, options, {
        toastId: options.toastId || toastId,
        updateId: generateToastId()
      });

      if (nextOptions.toastId !== toastId) nextOptions.staleId = toastId;
      var content = nextOptions.render || oldContent;
      delete nextOptions.render;
      dispatchToast(content, nextOptions);
    }
  }, 0);
};
/**
 * Used for controlled progress bar.
 */


toast.done = function (id) {
  toast.update(id, {
    progress: 1
  });
};
/**
 * Track changes. The callback get the number of toast displayed
 *
 */


toast.onChange = function (callback) {
  if (isFn(callback)) {
    eventManager.on(4
    /* Change */
    , callback);
  }

  return function () {
    isFn(callback) && eventManager.off(4
    /* Change */
    , callback);
  };
};
/**
 * Configure the ToastContainer when lazy mounted
 */


toast.configure = function (config) {
  if (config === void 0) {
    config = {};
  }

  lazy = true;
  containerConfig = config;
};

toast.POSITION = POSITION;
toast.TYPE = TYPE;
/**
 * Wait until the ToastContainer is mounted to dispatch the toast
 * and attach isActive method
 */

eventManager.on(2
/* DidMount */
, function (containerInstance) {
  latestInstance = containerInstance.containerId || containerInstance;
  containers.set(latestInstance, containerInstance);
  queue.forEach(function (item) {
    eventManager.emit(0
    /* Show */
    , item.content, item.options);
  });
  queue = [];
}).on(3
/* WillUnmount */
, function (containerInstance) {
  containers["delete"](containerInstance.containerId || containerInstance);

  if (containers.size === 0) {
    eventManager.off(0
    /* Show */
    ).off(1
    /* Clear */
    ).off(5
    /* ClearWaitingQueue */
    );
  }

  if (canUseDom && containerDomNode) {
    document.body.removeChild(containerDomNode);
  }
});


//# sourceMappingURL=react-toastify.esm.js.map


/***/ }),

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
    return Object(react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"])("thats easy");
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
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "block text-md text-gray-600",
        children: qualification
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "block text-gray-600",
        children: designation
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
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
          lineNumber: 24,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "flex text-gray-600 font-bold",
        children: ["email: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "font-semibold",
          children: ["\xA0", email]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 71
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "block",
        onClick: notify,
        children: "Know More"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC10b2FzdGlmeS9kaXN0L3JlYWN0LXRvYXN0aWZ5LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmFjdWx0aWVzL0ZhY3VsdHlDYXJkL0ZhY3VsdHlDYXJkLmpzIl0sIm5hbWVzIjpbIkZhY3VsdHlDYXJkIiwiaW1hZ2VTcmMiLCJuYW1lIiwicXVhbGlmaWNhdGlvbiIsImRlc2lnbmF0aW9uIiwiZW1haWwiLCJteVN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJub3RpZnkiLCJ0b2FzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDdkNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThJO0FBQ3hIO0FBQ2E7O0FBRW5DO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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aWVzUGFnZS5hM2E0N2MyYTc2Njk2OThhYzA5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdG9WYWwobWl4KSB7XG5cdHZhciBrLCB5LCBzdHI9Jyc7XG5cblx0aWYgKHR5cGVvZiBtaXggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtaXggPT09ICdudW1iZXInKSB7XG5cdFx0c3RyICs9IG1peDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWl4ID09PSAnb2JqZWN0Jykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG1peCkpIHtcblx0XHRcdGZvciAoaz0wOyBrIDwgbWl4Lmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRpZiAoeSA9IHRvVmFsKG1peFtrXSkpIHtcblx0XHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0XHRzdHIgKz0geTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChrIGluIG1peCkge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRzdHIgKz0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0dmFyIGk9MCwgdG1wLCB4LCBzdHI9Jyc7XG5cdHdoaWxlIChpIDwgYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGlmICh0bXAgPSBhcmd1bWVudHNbaSsrXSkge1xuXHRcdFx0aWYgKHggPSB0b1ZhbCh0bXApKSB7XG5cdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdHN0ciArPSB4XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHI7XG59XG4iLCJpbXBvcnQgUmVhY3RfX2RlZmF1bHQsIHsgaXNWYWxpZEVsZW1lbnQsIHVzZVJlZiwgdXNlTGF5b3V0RWZmZWN0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIGNsb25lRWxlbWVudCwgdXNlU3RhdGUsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gaXNOdW0odikge1xuICByZXR1cm4gdHlwZW9mIHYgPT09ICdudW1iZXInICYmICFpc05hTih2KTtcbn1cbmZ1bmN0aW9uIGlzQm9vbCh2KSB7XG4gIHJldHVybiB0eXBlb2YgdiA9PT0gJ2Jvb2xlYW4nO1xufVxuZnVuY3Rpb24gaXNTdHIodikge1xuICByZXR1cm4gdHlwZW9mIHYgPT09ICdzdHJpbmcnO1xufVxuZnVuY3Rpb24gaXNGbih2KSB7XG4gIHJldHVybiB0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIHBhcnNlQ2xhc3NOYW1lKHYpIHtcbiAgcmV0dXJuIGlzU3RyKHYpIHx8IGlzRm4odikgPyB2IDogbnVsbDtcbn1cbmZ1bmN0aW9uIGlzVG9hc3RJZFZhbGlkKHRvYXN0SWQpIHtcbiAgcmV0dXJuIHRvYXN0SWQgPT09IDAgfHwgdG9hc3RJZDtcbn1cbmZ1bmN0aW9uIGdldEF1dG9DbG9zZURlbGF5KHRvYXN0QXV0b0Nsb3NlLCBjb250YWluZXJBdXRvQ2xvc2UpIHtcbiAgcmV0dXJuIHRvYXN0QXV0b0Nsb3NlID09PSBmYWxzZSB8fCBpc051bSh0b2FzdEF1dG9DbG9zZSkgJiYgdG9hc3RBdXRvQ2xvc2UgPiAwID8gdG9hc3RBdXRvQ2xvc2UgOiBjb250YWluZXJBdXRvQ2xvc2U7XG59XG52YXIgY2FuVXNlRG9tID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmZ1bmN0aW9uIGNhbkJlUmVuZGVyZWQoY29udGVudCkge1xuICByZXR1cm4gaXNWYWxpZEVsZW1lbnQoY29udGVudCkgfHwgaXNTdHIoY29udGVudCkgfHwgaXNGbihjb250ZW50KSB8fCBpc051bShjb250ZW50KTtcbn1cblxudmFyIFBPU0lUSU9OID0ge1xuICBUT1BfTEVGVDogJ3RvcC1sZWZ0JyxcbiAgVE9QX1JJR0hUOiAndG9wLXJpZ2h0JyxcbiAgVE9QX0NFTlRFUjogJ3RvcC1jZW50ZXInLFxuICBCT1RUT01fTEVGVDogJ2JvdHRvbS1sZWZ0JyxcbiAgQk9UVE9NX1JJR0hUOiAnYm90dG9tLXJpZ2h0JyxcbiAgQk9UVE9NX0NFTlRFUjogJ2JvdHRvbS1jZW50ZXInXG59O1xudmFyIFRZUEUgPSB7XG4gIElORk86ICdpbmZvJyxcbiAgU1VDQ0VTUzogJ3N1Y2Nlc3MnLFxuICBXQVJOSU5HOiAnd2FybmluZycsXG4gIEVSUk9SOiAnZXJyb3InLFxuICBERUZBVUxUOiAnZGVmYXVsdCcsXG4gIERBUks6ICdkYXJrJ1xufTtcblxuLyoqXHJcbiAqIFVzZWQgdG8gY29sbGFwc2UgdG9hc3QgYWZ0ZXIgZXhpdCBhbmltYXRpb25cclxuICovXG5mdW5jdGlvbiBjb2xsYXBzZVRvYXN0KG5vZGUsIGRvbmUsIGR1cmF0aW9uXG4vKiBDT0xMQVBTRV9EVVJBVElPTiAqL1xuKSB7XG4gIGlmIChkdXJhdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgZHVyYXRpb24gPSAzMDA7XG4gIH1cblxuICB2YXIgaGVpZ2h0ID0gbm9kZS5zY3JvbGxIZWlnaHQ7XG4gIHZhciBzdHlsZSA9IG5vZGUuc3R5bGU7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgc3R5bGUubWluSGVpZ2h0ID0gJ2luaXRpYWwnO1xuICAgIHN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIFwiICsgZHVyYXRpb24gKyBcIm1zXCI7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgIHN0eWxlLnBhZGRpbmcgPSAnMCc7XG4gICAgICBzdHlsZS5tYXJnaW4gPSAnMCc7XG4gICAgICBzZXRUaW1lb3V0KGRvbmUsIGR1cmF0aW9uKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxyXG4gKiBDc3MgYW5pbWF0aW9uIHRoYXQganVzdCB3b3JrLlxyXG4gKiBZb3UgY291bGQgdXNlIGFuaW1hdGUuY3NzIGZvciBpbnN0YW5jZVxyXG4gKlxyXG4gKlxyXG4gKiBgYGBcclxuICogY3NzVHJhbnNpdGlvbih7XHJcbiAqICAgZW50ZXI6IFwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fYm91bmNlSW5cIixcclxuICogICBleGl0OiBcImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2JvdW5jZU91dFwiXHJcbiAqIH0pXHJcbiAqIGBgYFxyXG4gKlxyXG4gKi9cblxuZnVuY3Rpb24gY3NzVHJhbnNpdGlvbihfcmVmKSB7XG4gIHZhciBlbnRlciA9IF9yZWYuZW50ZXIsXG4gICAgICBleGl0ID0gX3JlZi5leGl0LFxuICAgICAgX3JlZiRhcHBlbmRQb3NpdGlvbiA9IF9yZWYuYXBwZW5kUG9zaXRpb24sXG4gICAgICBhcHBlbmRQb3NpdGlvbiA9IF9yZWYkYXBwZW5kUG9zaXRpb24gPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhcHBlbmRQb3NpdGlvbixcbiAgICAgIF9yZWYkY29sbGFwc2UgPSBfcmVmLmNvbGxhcHNlLFxuICAgICAgY29sbGFwc2UgPSBfcmVmJGNvbGxhcHNlID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRjb2xsYXBzZSxcbiAgICAgIF9yZWYkY29sbGFwc2VEdXJhdGlvbiA9IF9yZWYuY29sbGFwc2VEdXJhdGlvbixcbiAgICAgIGNvbGxhcHNlRHVyYXRpb24gPSBfcmVmJGNvbGxhcHNlRHVyYXRpb24gPT09IHZvaWQgMCA/IDMwMCA6IF9yZWYkY29sbGFwc2VEdXJhdGlvbjtcbiAgcmV0dXJuIGZ1bmN0aW9uIFRvYXN0VHJhbnNpdGlvbihfcmVmMikge1xuICAgIHZhciBjaGlsZHJlbiA9IF9yZWYyLmNoaWxkcmVuLFxuICAgICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuICAgICAgICBwcmV2ZW50RXhpdFRyYW5zaXRpb24gPSBfcmVmMi5wcmV2ZW50RXhpdFRyYW5zaXRpb24sXG4gICAgICAgIGRvbmUgPSBfcmVmMi5kb25lLFxuICAgICAgICBub2RlUmVmID0gX3JlZjIubm9kZVJlZixcbiAgICAgICAgaXNJbiA9IF9yZWYyLmlzSW47XG4gICAgdmFyIGVudGVyQ2xhc3NOYW1lID0gYXBwZW5kUG9zaXRpb24gPyBlbnRlciArIFwiLS1cIiArIHBvc2l0aW9uIDogZW50ZXI7XG4gICAgdmFyIGV4aXRDbGFzc05hbWUgPSBhcHBlbmRQb3NpdGlvbiA/IGV4aXQgKyBcIi0tXCIgKyBwb3NpdGlvbiA6IGV4aXQ7XG4gICAgdmFyIGJhc2VDbGFzc05hbWUgPSB1c2VSZWYoKTtcbiAgICB2YXIgYW5pbWF0aW9uU3RlcCA9IHVzZVJlZigwXG4gICAgLyogRW50ZXIgKi9cbiAgICApO1xuICAgIHVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBvbkVudGVyKCk7XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWlzSW4pIHByZXZlbnRFeGl0VHJhbnNpdGlvbiA/IG9uRXhpdGVkKCkgOiBvbkV4aXQoKTtcbiAgICB9LCBbaXNJbl0pO1xuXG4gICAgZnVuY3Rpb24gb25FbnRlcigpIHtcbiAgICAgIHZhciBub2RlID0gbm9kZVJlZi5jdXJyZW50O1xuICAgICAgYmFzZUNsYXNzTmFtZS5jdXJyZW50ID0gbm9kZS5jbGFzc05hbWU7XG4gICAgICBub2RlLmNsYXNzTmFtZSArPSBcIiBcIiArIGVudGVyQ2xhc3NOYW1lO1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBvbkVudGVyZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRW50ZXJlZCgpIHtcbiAgICAgIHZhciBub2RlID0gbm9kZVJlZi5jdXJyZW50O1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBvbkVudGVyZWQpO1xuXG4gICAgICBpZiAoYW5pbWF0aW9uU3RlcC5jdXJyZW50ID09PSAwXG4gICAgICAvKiBFbnRlciAqL1xuICAgICAgKSB7XG4gICAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBiYXNlQ2xhc3NOYW1lLmN1cnJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkV4aXQoKSB7XG4gICAgICBhbmltYXRpb25TdGVwLmN1cnJlbnQgPSAxXG4gICAgICAvKiBFeGl0ICovXG4gICAgICA7XG4gICAgICB2YXIgbm9kZSA9IG5vZGVSZWYuY3VycmVudDtcbiAgICAgIG5vZGUuY2xhc3NOYW1lICs9IFwiIFwiICsgZXhpdENsYXNzTmFtZTtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgb25FeGl0ZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRXhpdGVkKCkge1xuICAgICAgdmFyIG5vZGUgPSBub2RlUmVmLmN1cnJlbnQ7XG4gICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIG9uRXhpdGVkKTtcbiAgICAgIGNvbGxhcHNlID8gY29sbGFwc2VUb2FzdChub2RlLCBkb25lLCBjb2xsYXBzZUR1cmF0aW9uKSA6IGRvbmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChSZWFjdF9fZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgY2hpbGRyZW4pO1xuICB9O1xufVxuXG52YXIgZXZlbnRNYW5hZ2VyID0ge1xuICBsaXN0OiAvKiNfX1BVUkVfXyovbmV3IE1hcCgpLFxuICBlbWl0UXVldWU6IC8qI19fUFVSRV9fKi9uZXcgTWFwKCksXG4gIG9uOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3QuaGFzKGV2ZW50KSB8fCB0aGlzLmxpc3Quc2V0KGV2ZW50LCBbXSk7XG4gICAgdGhpcy5saXN0LmdldChldmVudCkucHVzaChjYWxsYmFjayk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIG9mZjogZnVuY3Rpb24gb2ZmKGV2ZW50LCBjYWxsYmFjaykge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgdmFyIGNiID0gdGhpcy5saXN0LmdldChldmVudCkuZmlsdGVyKGZ1bmN0aW9uIChjYikge1xuICAgICAgICByZXR1cm4gY2IgIT09IGNhbGxiYWNrO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3Quc2V0KGV2ZW50LCBjYik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLmxpc3RbXCJkZWxldGVcIl0oZXZlbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBjYW5jZWxFbWl0OiBmdW5jdGlvbiBjYW5jZWxFbWl0KGV2ZW50KSB7XG4gICAgdmFyIHRpbWVycyA9IHRoaXMuZW1pdFF1ZXVlLmdldChldmVudCk7XG5cbiAgICBpZiAodGltZXJzKSB7XG4gICAgICB0aW1lcnMuZm9yRWFjaChjbGVhclRpbWVvdXQpO1xuICAgICAgdGhpcy5lbWl0UXVldWVbXCJkZWxldGVcIl0oZXZlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEVucXVldWUgdGhlIGV2ZW50IGF0IHRoZSBlbmQgb2YgdGhlIGNhbGwgc3RhY2tcclxuICAgKiBEb2luZyBzbyBsZXQgdGhlIHVzZXIgY2FsbCB0b2FzdCBhcyBmb2xsb3c6XHJcbiAgICogdG9hc3QoJzEnKVxyXG4gICAqIHRvYXN0KCcyJylcclxuICAgKiB0b2FzdCgnMycpXHJcbiAgICogV2l0aG91dCBzZXRUaW1lbW91dCB0aGUgY29kZSBhYm92ZSB3aWxsIG5vdCB3b3JrXHJcbiAgICovXG4gIGVtaXQ6IGZ1bmN0aW9uIGVtaXQoZXZlbnQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdGhpcy5saXN0LmhhcyhldmVudCkgJiYgdGhpcy5saXN0LmdldChldmVudCkuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICB9LCAwKTtcbiAgICAgIF90aGlzLmVtaXRRdWV1ZS5oYXMoZXZlbnQpIHx8IF90aGlzLmVtaXRRdWV1ZS5zZXQoZXZlbnQsIFtdKTtcblxuICAgICAgX3RoaXMuZW1pdFF1ZXVlLmdldChldmVudCkucHVzaCh0aW1lcik7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxyXG4gKiBgdXNlS2VlcGVyYCBpcyBhIGhlbHBlciBhcm91bmQgYHVzZVJlZmAuXHJcbiAqXHJcbiAqIFlvdSBkb24ndCBuZWVkIHRvIGFjY2VzcyB0aGUgYC5jdXJyZW50YHByb3BlcnR5IHRvIGdldCB0aGUgdmFsdWVcclxuICogSWYgcmVmcmVzaCBpcyBzZXQgdG8gdHJ1ZS4gVGhlIHJlZiB3aWxsIGJlIHVwZGF0ZWQgZXZlcnkgcmVuZGVyXHJcbiAqL1xuXG5mdW5jdGlvbiB1c2VLZWVwZXIoYXJnLCByZWZyZXNoKSB7XG4gIGlmIChyZWZyZXNoID09PSB2b2lkIDApIHtcbiAgICByZWZyZXNoID0gZmFsc2U7XG4gIH1cblxuICB2YXIgcmVmID0gdXNlUmVmKGFyZyk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJlZnJlc2gpIHJlZi5jdXJyZW50ID0gYXJnO1xuICB9KTtcbiAgcmV0dXJuIHJlZi5jdXJyZW50O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgMFxuICAgIC8qIEFERCAqL1xuICAgIDpcbiAgICAgIHJldHVybiBbXS5jb25jYXQoc3RhdGUsIFthY3Rpb24udG9hc3RJZF0pLmZpbHRlcihmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGlkICE9PSBhY3Rpb24uc3RhbGVJZDtcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAxXG4gICAgLyogUkVNT1ZFICovXG4gICAgOlxuICAgICAgcmV0dXJuIGlzVG9hc3RJZFZhbGlkKGFjdGlvbi50b2FzdElkKSA/IHN0YXRlLmZpbHRlcihmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGlkICE9PSBhY3Rpb24udG9hc3RJZDtcbiAgICAgIH0pIDogW107XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlVG9hc3RDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIF91c2VSZWR1Y2VyID0gdXNlUmVkdWNlcihmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4ICsgMTtcbiAgfSwgMCksXG4gICAgICBmb3JjZVVwZGF0ZSA9IF91c2VSZWR1Y2VyWzFdO1xuXG4gIHZhciBfdXNlUmVkdWNlcjIgPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdKSxcbiAgICAgIHRvYXN0ID0gX3VzZVJlZHVjZXIyWzBdLFxuICAgICAgZGlzcGF0Y2ggPSBfdXNlUmVkdWNlcjJbMV07XG5cbiAgdmFyIGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIHRvYXN0Q291bnQgPSB1c2VLZWVwZXIoMCk7XG4gIHZhciBxdWV1ZSA9IHVzZUtlZXBlcihbXSk7XG4gIHZhciBjb2xsZWN0aW9uID0gdXNlS2VlcGVyKHt9KTtcbiAgdmFyIGluc3RhbmNlID0gdXNlS2VlcGVyKHtcbiAgICB0b2FzdEtleTogMSxcbiAgICBkaXNwbGF5ZWRUb2FzdDogMCxcbiAgICBwcm9wczogcHJvcHMsXG4gICAgY29udGFpbmVySWQ6IG51bGwsXG4gICAgaXNUb2FzdEFjdGl2ZTogaXNUb2FzdEFjdGl2ZSxcbiAgICBnZXRUb2FzdDogZnVuY3Rpb24gZ2V0VG9hc3QoaWQpIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW2lkXSB8fCBudWxsO1xuICAgIH1cbiAgfSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaW5zdGFuY2UuY29udGFpbmVySWQgPSBwcm9wcy5jb250YWluZXJJZDtcbiAgICBldmVudE1hbmFnZXIuY2FuY2VsRW1pdCgzXG4gICAgLyogV2lsbFVubW91bnQgKi9cbiAgICApLm9uKDBcbiAgICAvKiBTaG93ICovXG4gICAgLCBidWlsZFRvYXN0KS5vbigxXG4gICAgLyogQ2xlYXIgKi9cbiAgICAsIGZ1bmN0aW9uICh0b2FzdElkKSB7XG4gICAgICByZXR1cm4gY29udGFpbmVyUmVmLmN1cnJlbnQgJiYgcmVtb3ZlVG9hc3QodG9hc3RJZCk7XG4gICAgfSkub24oNVxuICAgIC8qIENsZWFyV2FpdGluZ1F1ZXVlICovXG4gICAgLCBjbGVhcldhaXRpbmdRdWV1ZSkuZW1pdCgyXG4gICAgLyogRGlkTW91bnQgKi9cbiAgICAsIGluc3RhbmNlKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGV2ZW50TWFuYWdlci5lbWl0KDNcbiAgICAgIC8qIFdpbGxVbm1vdW50ICovXG4gICAgICAsIGluc3RhbmNlKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaW5zdGFuY2UuaXNUb2FzdEFjdGl2ZSA9IGlzVG9hc3RBY3RpdmU7XG4gICAgaW5zdGFuY2UuZGlzcGxheWVkVG9hc3QgPSB0b2FzdC5sZW5ndGg7XG4gICAgZXZlbnRNYW5hZ2VyLmVtaXQoNFxuICAgIC8qIENoYW5nZSAqL1xuICAgICwgdG9hc3QubGVuZ3RoLCBwcm9wcy5jb250YWluZXJJZCk7XG4gIH0sIFt0b2FzdF0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGluc3RhbmNlLnByb3BzID0gcHJvcHM7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGlzVG9hc3RBY3RpdmUoaWQpIHtcbiAgICByZXR1cm4gdG9hc3QuaW5kZXhPZihpZCkgIT09IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJXYWl0aW5nUXVldWUoX3JlZikge1xuICAgIHZhciBjb250YWluZXJJZCA9IF9yZWYuY29udGFpbmVySWQ7XG4gICAgdmFyIF9pbnN0YW5jZSRwcm9wcyA9IGluc3RhbmNlLnByb3BzLFxuICAgICAgICBsaW1pdCA9IF9pbnN0YW5jZSRwcm9wcy5saW1pdCxcbiAgICAgICAgZW5hYmxlTXVsdGlDb250YWluZXIgPSBfaW5zdGFuY2UkcHJvcHMuZW5hYmxlTXVsdGlDb250YWluZXI7XG5cbiAgICBpZiAobGltaXQgJiYgKCFjb250YWluZXJJZCB8fCBpbnN0YW5jZS5jb250YWluZXJJZCA9PT0gY29udGFpbmVySWQgJiYgZW5hYmxlTXVsdGlDb250YWluZXIpKSB7XG4gICAgICB0b2FzdENvdW50IC09IHF1ZXVlLmxlbmd0aDtcbiAgICAgIHF1ZXVlID0gW107XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVG9hc3QodG9hc3RJZCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IDFcbiAgICAgIC8qIFJFTU9WRSAqL1xuICAgICAgLFxuICAgICAgdG9hc3RJZDogdG9hc3RJZFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVxdWV1ZVRvYXN0KCkge1xuICAgIHZhciBfcXVldWUkc2hpZnQgPSBxdWV1ZS5zaGlmdCgpLFxuICAgICAgICB0b2FzdENvbnRlbnQgPSBfcXVldWUkc2hpZnQudG9hc3RDb250ZW50LFxuICAgICAgICB0b2FzdFByb3BzID0gX3F1ZXVlJHNoaWZ0LnRvYXN0UHJvcHMsXG4gICAgICAgIHN0YWxlSWQgPSBfcXVldWUkc2hpZnQuc3RhbGVJZDtcblxuICAgIGFwcGVuZFRvYXN0KHRvYXN0Q29udGVudCwgdG9hc3RQcm9wcywgc3RhbGVJZCk7XG4gIH1cbiAgLyoqXHJcbiAgICogY2hlY2sgaWYgYSBjb250YWluZXIgaXMgYXR0YWNoZWQgdG8gdGhlIGRvbVxyXG4gICAqIGNoZWNrIGZvciBtdWx0aS1jb250YWluZXIsIGJ1aWxkIG9ubHkgaWYgYXNzb2NpYXRlZFxyXG4gICAqIGNoZWNrIGZvciBkdXBsaWNhdGUgdG9hc3RJZCBpZiBubyB1cGRhdGVcclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGlzTm90VmFsaWQoX3JlZjIpIHtcbiAgICB2YXIgY29udGFpbmVySWQgPSBfcmVmMi5jb250YWluZXJJZCxcbiAgICAgICAgdG9hc3RJZCA9IF9yZWYyLnRvYXN0SWQsXG4gICAgICAgIHVwZGF0ZUlkID0gX3JlZjIudXBkYXRlSWQ7XG4gICAgcmV0dXJuICFjb250YWluZXJSZWYuY3VycmVudCB8fCBpbnN0YW5jZS5wcm9wcy5lbmFibGVNdWx0aUNvbnRhaW5lciAmJiBjb250YWluZXJJZCAhPT0gaW5zdGFuY2UucHJvcHMuY29udGFpbmVySWQgfHwgY29sbGVjdGlvblt0b2FzdElkXSAmJiB1cGRhdGVJZCA9PSBudWxsID8gdHJ1ZSA6IGZhbHNlO1xuICB9IC8vIHRoaXMgZnVuY3Rpb24gYW5kIGFsbCB0aGUgZnVuY3Rpb24gY2FsbGVkIGluc2lkZSBuZWVkcyB0byByZWx5IG9uIHJlZihgdXNlS2VlcGVyYClcblxuXG4gIGZ1bmN0aW9uIGJ1aWxkVG9hc3QoY29udGVudCwgX3JlZjMpIHtcbiAgICB2YXIgZGVsYXkgPSBfcmVmMy5kZWxheSxcbiAgICAgICAgc3RhbGVJZCA9IF9yZWYzLnN0YWxlSWQsXG4gICAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMywgW1wiZGVsYXlcIiwgXCJzdGFsZUlkXCJdKTtcblxuICAgIGlmICghY2FuQmVSZW5kZXJlZChjb250ZW50KSB8fCBpc05vdFZhbGlkKG9wdGlvbnMpKSByZXR1cm47XG4gICAgdmFyIHRvYXN0SWQgPSBvcHRpb25zLnRvYXN0SWQsXG4gICAgICAgIHVwZGF0ZUlkID0gb3B0aW9ucy51cGRhdGVJZDtcbiAgICB2YXIgcHJvcHMgPSBpbnN0YW5jZS5wcm9wcztcblxuICAgIHZhciBjbG9zZVRvYXN0ID0gZnVuY3Rpb24gY2xvc2VUb2FzdCgpIHtcbiAgICAgIHJldHVybiByZW1vdmVUb2FzdCh0b2FzdElkKTtcbiAgICB9O1xuXG4gICAgdmFyIGlzTm90QW5VcGRhdGUgPSBvcHRpb25zLnVwZGF0ZUlkID09IG51bGw7XG4gICAgaWYgKGlzTm90QW5VcGRhdGUpIHRvYXN0Q291bnQrKztcbiAgICB2YXIgdG9hc3RQcm9wcyA9IHtcbiAgICAgIHRvYXN0SWQ6IHRvYXN0SWQsXG4gICAgICB1cGRhdGVJZDogdXBkYXRlSWQsXG4gICAgICBpc0luOiBmYWxzZSxcbiAgICAgIGtleTogb3B0aW9ucy5rZXkgfHwgaW5zdGFuY2UudG9hc3RLZXkrKyxcbiAgICAgIHR5cGU6IG9wdGlvbnMudHlwZSxcbiAgICAgIGNsb3NlVG9hc3Q6IGNsb3NlVG9hc3QsXG4gICAgICBjbG9zZUJ1dHRvbjogb3B0aW9ucy5jbG9zZUJ1dHRvbixcbiAgICAgIHJ0bDogcHJvcHMucnRsLFxuICAgICAgcG9zaXRpb246IG9wdGlvbnMucG9zaXRpb24gfHwgcHJvcHMucG9zaXRpb24sXG4gICAgICB0cmFuc2l0aW9uOiBvcHRpb25zLnRyYW5zaXRpb24gfHwgcHJvcHMudHJhbnNpdGlvbixcbiAgICAgIGNsYXNzTmFtZTogcGFyc2VDbGFzc05hbWUob3B0aW9ucy5jbGFzc05hbWUgfHwgcHJvcHMudG9hc3RDbGFzc05hbWUpLFxuICAgICAgYm9keUNsYXNzTmFtZTogcGFyc2VDbGFzc05hbWUob3B0aW9ucy5ib2R5Q2xhc3NOYW1lIHx8IHByb3BzLmJvZHlDbGFzc05hbWUpLFxuICAgICAgc3R5bGU6IG9wdGlvbnMuc3R5bGUgfHwgcHJvcHMudG9hc3RTdHlsZSxcbiAgICAgIGJvZHlTdHlsZTogb3B0aW9ucy5ib2R5U3R5bGUgfHwgcHJvcHMuYm9keVN0eWxlLFxuICAgICAgb25DbGljazogb3B0aW9ucy5vbkNsaWNrIHx8IHByb3BzLm9uQ2xpY2ssXG4gICAgICBwYXVzZU9uSG92ZXI6IGlzQm9vbChvcHRpb25zLnBhdXNlT25Ib3ZlcikgPyBvcHRpb25zLnBhdXNlT25Ib3ZlciA6IHByb3BzLnBhdXNlT25Ib3ZlcixcbiAgICAgIHBhdXNlT25Gb2N1c0xvc3M6IGlzQm9vbChvcHRpb25zLnBhdXNlT25Gb2N1c0xvc3MpID8gb3B0aW9ucy5wYXVzZU9uRm9jdXNMb3NzIDogcHJvcHMucGF1c2VPbkZvY3VzTG9zcyxcbiAgICAgIGRyYWdnYWJsZTogaXNCb29sKG9wdGlvbnMuZHJhZ2dhYmxlKSA/IG9wdGlvbnMuZHJhZ2dhYmxlIDogcHJvcHMuZHJhZ2dhYmxlLFxuICAgICAgZHJhZ2dhYmxlUGVyY2VudDogaXNOdW0ob3B0aW9ucy5kcmFnZ2FibGVQZXJjZW50KSA/IG9wdGlvbnMuZHJhZ2dhYmxlUGVyY2VudCA6IHByb3BzLmRyYWdnYWJsZVBlcmNlbnQsXG4gICAgICBkcmFnZ2FibGVEaXJlY3Rpb246IG9wdGlvbnMuZHJhZ2dhYmxlRGlyZWN0aW9uIHx8IHByb3BzLmRyYWdnYWJsZURpcmVjdGlvbixcbiAgICAgIGNsb3NlT25DbGljazogaXNCb29sKG9wdGlvbnMuY2xvc2VPbkNsaWNrKSA/IG9wdGlvbnMuY2xvc2VPbkNsaWNrIDogcHJvcHMuY2xvc2VPbkNsaWNrLFxuICAgICAgcHJvZ3Jlc3NDbGFzc05hbWU6IHBhcnNlQ2xhc3NOYW1lKG9wdGlvbnMucHJvZ3Jlc3NDbGFzc05hbWUgfHwgcHJvcHMucHJvZ3Jlc3NDbGFzc05hbWUpLFxuICAgICAgcHJvZ3Jlc3NTdHlsZTogb3B0aW9ucy5wcm9ncmVzc1N0eWxlIHx8IHByb3BzLnByb2dyZXNzU3R5bGUsXG4gICAgICBhdXRvQ2xvc2U6IGdldEF1dG9DbG9zZURlbGF5KG9wdGlvbnMuYXV0b0Nsb3NlLCBwcm9wcy5hdXRvQ2xvc2UpLFxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBpc0Jvb2wob3B0aW9ucy5oaWRlUHJvZ3Jlc3NCYXIpID8gb3B0aW9ucy5oaWRlUHJvZ3Jlc3NCYXIgOiBwcm9wcy5oaWRlUHJvZ3Jlc3NCYXIsXG4gICAgICBwcm9ncmVzczogb3B0aW9ucy5wcm9ncmVzcyxcbiAgICAgIHJvbGU6IGlzU3RyKG9wdGlvbnMucm9sZSkgPyBvcHRpb25zLnJvbGUgOiBwcm9wcy5yb2xlLFxuICAgICAgZGVsZXRlVG9hc3Q6IGZ1bmN0aW9uIGRlbGV0ZVRvYXN0KCkge1xuICAgICAgICByZW1vdmVGcm9tQ29sbGVjdGlvbih0b2FzdElkKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpc0ZuKG9wdGlvbnMub25PcGVuKSkgdG9hc3RQcm9wcy5vbk9wZW4gPSBvcHRpb25zLm9uT3BlbjtcbiAgICBpZiAoaXNGbihvcHRpb25zLm9uQ2xvc2UpKSB0b2FzdFByb3BzLm9uQ2xvc2UgPSBvcHRpb25zLm9uQ2xvc2U7IC8vICB0d2VhayBmb3IgdmVydGljYWwgZHJhZ2dpbmdcblxuICAgIGlmICh0b2FzdFByb3BzLmRyYWdnYWJsZURpcmVjdGlvbiA9PT0gXCJ5XCJcbiAgICAvKiBZICovXG4gICAgJiYgdG9hc3RQcm9wcy5kcmFnZ2FibGVQZXJjZW50ID09PSA4MFxuICAgIC8qIERSQUdHQUJMRV9QRVJDRU5UICovXG4gICAgKSB7XG4gICAgICAgIHRvYXN0UHJvcHMuZHJhZ2dhYmxlUGVyY2VudCAqPSAxLjU7XG4gICAgICB9XG5cbiAgICB2YXIgY2xvc2VCdXR0b24gPSBwcm9wcy5jbG9zZUJ1dHRvbjtcblxuICAgIGlmIChvcHRpb25zLmNsb3NlQnV0dG9uID09PSBmYWxzZSB8fCBjYW5CZVJlbmRlcmVkKG9wdGlvbnMuY2xvc2VCdXR0b24pKSB7XG4gICAgICBjbG9zZUJ1dHRvbiA9IG9wdGlvbnMuY2xvc2VCdXR0b247XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmNsb3NlQnV0dG9uID09PSB0cnVlKSB7XG4gICAgICBjbG9zZUJ1dHRvbiA9IGNhbkJlUmVuZGVyZWQocHJvcHMuY2xvc2VCdXR0b24pID8gcHJvcHMuY2xvc2VCdXR0b24gOiB0cnVlO1xuICAgIH1cblxuICAgIHRvYXN0UHJvcHMuY2xvc2VCdXR0b24gPSBjbG9zZUJ1dHRvbjtcbiAgICB2YXIgdG9hc3RDb250ZW50ID0gY29udGVudDtcblxuICAgIGlmIChpc1ZhbGlkRWxlbWVudChjb250ZW50KSAmJiAhaXNTdHIoY29udGVudC50eXBlKSkge1xuICAgICAgdG9hc3RDb250ZW50ID0gY2xvbmVFbGVtZW50KGNvbnRlbnQsIHtcbiAgICAgICAgY2xvc2VUb2FzdDogY2xvc2VUb2FzdCxcbiAgICAgICAgdG9hc3RQcm9wczogdG9hc3RQcm9wc1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc0ZuKGNvbnRlbnQpKSB7XG4gICAgICB0b2FzdENvbnRlbnQgPSBjb250ZW50KHtcbiAgICAgICAgY2xvc2VUb2FzdDogY2xvc2VUb2FzdCxcbiAgICAgICAgdG9hc3RQcm9wczogdG9hc3RQcm9wc1xuICAgICAgfSk7XG4gICAgfSAvLyBub3QgaGFuZGxpbmcgbGltaXQgKyBkZWxheSBieSBkZXNpZ24uIFdhaXRpbmcgZm9yIHVzZXIgZmVlZGJhY2sgZmlyc3RcblxuXG4gICAgaWYgKHByb3BzLmxpbWl0ICYmIHByb3BzLmxpbWl0ID4gMCAmJiB0b2FzdENvdW50ID4gcHJvcHMubGltaXQgJiYgaXNOb3RBblVwZGF0ZSkge1xuICAgICAgcXVldWUucHVzaCh7XG4gICAgICAgIHRvYXN0Q29udGVudDogdG9hc3RDb250ZW50LFxuICAgICAgICB0b2FzdFByb3BzOiB0b2FzdFByb3BzLFxuICAgICAgICBzdGFsZUlkOiBzdGFsZUlkXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzTnVtKGRlbGF5KSAmJiBkZWxheSA+IDApIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBhcHBlbmRUb2FzdCh0b2FzdENvbnRlbnQsIHRvYXN0UHJvcHMsIHN0YWxlSWQpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcHBlbmRUb2FzdCh0b2FzdENvbnRlbnQsIHRvYXN0UHJvcHMsIHN0YWxlSWQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGVuZFRvYXN0KGNvbnRlbnQsIHRvYXN0UHJvcHMsIHN0YWxlSWQpIHtcbiAgICB2YXIgdG9hc3RJZCA9IHRvYXN0UHJvcHMudG9hc3RJZDtcbiAgICBpZiAoc3RhbGVJZCkgZGVsZXRlIGNvbGxlY3Rpb25bc3RhbGVJZF07XG4gICAgY29sbGVjdGlvblt0b2FzdElkXSA9IHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICBwcm9wczogdG9hc3RQcm9wc1xuICAgIH07XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogMFxuICAgICAgLyogQUREICovXG4gICAgICAsXG4gICAgICB0b2FzdElkOiB0b2FzdElkLFxuICAgICAgc3RhbGVJZDogc3RhbGVJZFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRnJvbUNvbGxlY3Rpb24odG9hc3RJZCkge1xuICAgIGRlbGV0ZSBjb2xsZWN0aW9uW3RvYXN0SWRdO1xuICAgIHZhciBxdWV1ZUxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB0b2FzdENvdW50ID0gaXNUb2FzdElkVmFsaWQodG9hc3RJZCkgPyB0b2FzdENvdW50IC0gMSA6IHRvYXN0Q291bnQgLSBpbnN0YW5jZS5kaXNwbGF5ZWRUb2FzdDtcbiAgICBpZiAodG9hc3RDb3VudCA8IDApIHRvYXN0Q291bnQgPSAwO1xuXG4gICAgaWYgKHF1ZXVlTGVuID4gMCkge1xuICAgICAgdmFyIGZyZWVTbG90ID0gaXNUb2FzdElkVmFsaWQodG9hc3RJZCkgPyAxIDogaW5zdGFuY2UucHJvcHMubGltaXQ7XG5cbiAgICAgIGlmIChxdWV1ZUxlbiA9PT0gMSB8fCBmcmVlU2xvdCA9PT0gMSkge1xuICAgICAgICBpbnN0YW5jZS5kaXNwbGF5ZWRUb2FzdCsrO1xuICAgICAgICBkZXF1ZXVlVG9hc3QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB0b0RlcXVldWUgPSBmcmVlU2xvdCA+IHF1ZXVlTGVuID8gcXVldWVMZW4gOiBmcmVlU2xvdDtcbiAgICAgICAgaW5zdGFuY2UuZGlzcGxheWVkVG9hc3QgPSB0b0RlcXVldWU7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b0RlcXVldWU7IGkrKykge1xuICAgICAgICAgIGRlcXVldWVUb2FzdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcmNlVXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VG9hc3RUb1JlbmRlcihjYikge1xuICAgIHZhciB0b2FzdFRvUmVuZGVyID0ge307XG4gICAgdmFyIHRvYXN0TGlzdCA9IHByb3BzLm5ld2VzdE9uVG9wID8gT2JqZWN0LmtleXMoY29sbGVjdGlvbikucmV2ZXJzZSgpIDogT2JqZWN0LmtleXMoY29sbGVjdGlvbik7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvYXN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIF90b2FzdCA9IGNvbGxlY3Rpb25bdG9hc3RMaXN0W2ldXTtcbiAgICAgIHZhciBwb3NpdGlvbiA9IF90b2FzdC5wcm9wcy5wb3NpdGlvbjtcbiAgICAgIHRvYXN0VG9SZW5kZXJbcG9zaXRpb25dIHx8ICh0b2FzdFRvUmVuZGVyW3Bvc2l0aW9uXSA9IFtdKTtcbiAgICAgIHRvYXN0VG9SZW5kZXJbcG9zaXRpb25dLnB1c2goX3RvYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXModG9hc3RUb1JlbmRlcikubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gY2IocCwgdG9hc3RUb1JlbmRlcltwXSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFRvYXN0VG9SZW5kZXI6IGdldFRvYXN0VG9SZW5kZXIsXG4gICAgY29sbGVjdGlvbjogY29sbGVjdGlvbixcbiAgICBjb250YWluZXJSZWY6IGNvbnRhaW5lclJlZixcbiAgICBpc1RvYXN0QWN0aXZlOiBpc1RvYXN0QWN0aXZlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFgoZSkge1xuICByZXR1cm4gZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPj0gMSA/IGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYIDogZS5jbGllbnRYO1xufVxuXG5mdW5jdGlvbiBnZXRZKGUpIHtcbiAgcmV0dXJuIGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID49IDEgPyBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WTtcbn1cblxuZnVuY3Rpb24gdXNlVG9hc3QocHJvcHMpIHtcbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKHRydWUpLFxuICAgICAgaXNSdW5uaW5nID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0SXNSdW5uaW5nID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciBfdXNlU3RhdGUyID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgcHJldmVudEV4aXRUcmFuc2l0aW9uID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldFByZXZlbnRFeGl0VHJhbnNpdGlvbiA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIHRvYXN0UmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgZHJhZyA9IHVzZUtlZXBlcih7XG4gICAgc3RhcnQ6IDAsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGRlbHRhOiAwLFxuICAgIHJlbW92YWxEaXN0YW5jZTogMCxcbiAgICBjYW5DbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgY2FuRHJhZzogZmFsc2UsXG4gICAgYm91bmRpbmdSZWN0OiBudWxsXG4gIH0pO1xuICB2YXIgc3luY1Byb3BzID0gdXNlS2VlcGVyKHByb3BzLCB0cnVlKTtcbiAgdmFyIGF1dG9DbG9zZSA9IHByb3BzLmF1dG9DbG9zZSxcbiAgICAgIHBhdXNlT25Ib3ZlciA9IHByb3BzLnBhdXNlT25Ib3ZlcixcbiAgICAgIGNsb3NlVG9hc3QgPSBwcm9wcy5jbG9zZVRvYXN0LFxuICAgICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgICBjbG9zZU9uQ2xpY2sgPSBwcm9wcy5jbG9zZU9uQ2xpY2s7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzRm4ocHJvcHMub25PcGVuKSkgcHJvcHMub25PcGVuKGlzVmFsaWRFbGVtZW50KHByb3BzLmNoaWxkcmVuKSAmJiBwcm9wcy5jaGlsZHJlbi5wcm9wcyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0ZuKHN5bmNQcm9wcy5vbkNsb3NlKSkgc3luY1Byb3BzLm9uQ2xvc2UoaXNWYWxpZEVsZW1lbnQoc3luY1Byb3BzLmNoaWxkcmVuKSAmJiBzeW5jUHJvcHMuY2hpbGRyZW4ucHJvcHMpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBwcm9wcy5kcmFnZ2FibGUgJiYgYmluZERyYWdFdmVudHMoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvcHMuZHJhZ2dhYmxlICYmIHVuYmluZERyYWdFdmVudHMoKTtcbiAgICB9O1xuICB9LCBbcHJvcHMuZHJhZ2dhYmxlXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcHJvcHMucGF1c2VPbkZvY3VzTG9zcyAmJiBiaW5kRm9jdXNFdmVudHMoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvcHMucGF1c2VPbkZvY3VzTG9zcyAmJiB1bmJpbmRGb2N1c0V2ZW50cygpO1xuICAgIH07XG4gIH0sIFtwcm9wcy5wYXVzZU9uRm9jdXNMb3NzXSk7XG5cbiAgZnVuY3Rpb24gb25EcmFnU3RhcnQoZSkge1xuICAgIGlmIChwcm9wcy5kcmFnZ2FibGUpIHtcbiAgICAgIHZhciB0b2FzdCA9IHRvYXN0UmVmLmN1cnJlbnQ7XG4gICAgICBkcmFnLmNhbkNsb3NlT25DbGljayA9IHRydWU7XG4gICAgICBkcmFnLmNhbkRyYWcgPSB0cnVlO1xuICAgICAgZHJhZy5ib3VuZGluZ1JlY3QgPSB0b2FzdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRvYXN0LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICAgIGRyYWcueCA9IGdldFgoZS5uYXRpdmVFdmVudCk7XG4gICAgICBkcmFnLnkgPSBnZXRZKGUubmF0aXZlRXZlbnQpO1xuXG4gICAgICBpZiAocHJvcHMuZHJhZ2dhYmxlRGlyZWN0aW9uID09PSBcInhcIlxuICAgICAgLyogWCAqL1xuICAgICAgKSB7XG4gICAgICAgICAgZHJhZy5zdGFydCA9IGRyYWcueDtcbiAgICAgICAgICBkcmFnLnJlbW92YWxEaXN0YW5jZSA9IHRvYXN0Lm9mZnNldFdpZHRoICogKHByb3BzLmRyYWdnYWJsZVBlcmNlbnQgLyAxMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnLnN0YXJ0ID0gZHJhZy55O1xuICAgICAgICBkcmFnLnJlbW92YWxEaXN0YW5jZSA9IHRvYXN0Lm9mZnNldEhlaWdodCAqIChwcm9wcy5kcmFnZ2FibGVQZXJjZW50IC8gMTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWdUcmFuc2l0aW9uRW5kKCkge1xuICAgIGlmIChkcmFnLmJvdW5kaW5nUmVjdCkge1xuICAgICAgdmFyIF9kcmFnJGJvdW5kaW5nUmVjdCA9IGRyYWcuYm91bmRpbmdSZWN0LFxuICAgICAgICAgIHRvcCA9IF9kcmFnJGJvdW5kaW5nUmVjdC50b3AsXG4gICAgICAgICAgYm90dG9tID0gX2RyYWckYm91bmRpbmdSZWN0LmJvdHRvbSxcbiAgICAgICAgICBsZWZ0ID0gX2RyYWckYm91bmRpbmdSZWN0LmxlZnQsXG4gICAgICAgICAgcmlnaHQgPSBfZHJhZyRib3VuZGluZ1JlY3QucmlnaHQ7XG5cbiAgICAgIGlmIChwcm9wcy5wYXVzZU9uSG92ZXIgJiYgZHJhZy54ID49IGxlZnQgJiYgZHJhZy54IDw9IHJpZ2h0ICYmIGRyYWcueSA+PSB0b3AgJiYgZHJhZy55IDw9IGJvdHRvbSkge1xuICAgICAgICBwYXVzZVRvYXN0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5VG9hc3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5VG9hc3QoKSB7XG4gICAgc2V0SXNSdW5uaW5nKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGF1c2VUb2FzdCgpIHtcbiAgICBzZXRJc1J1bm5pbmcoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gYmluZEZvY3VzRXZlbnRzKCkge1xuICAgIGlmICghZG9jdW1lbnQuaGFzRm9jdXMoKSkgcGF1c2VUb2FzdCgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHBsYXlUb2FzdCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBwYXVzZVRvYXN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuYmluZEZvY3VzRXZlbnRzKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHBsYXlUb2FzdCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBwYXVzZVRvYXN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJpbmREcmFnRXZlbnRzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uRHJhZ01vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRyYWdFbmQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uRHJhZ01vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25EcmFnRW5kKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuYmluZERyYWdFdmVudHMoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25EcmFnTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uRHJhZ0VuZCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25EcmFnTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkRyYWdFbmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnTW92ZShlKSB7XG4gICAgaWYgKGRyYWcuY2FuRHJhZykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIHRvYXN0ID0gdG9hc3RSZWYuY3VycmVudDtcbiAgICAgIGlmIChpc1J1bm5pbmcpIHBhdXNlVG9hc3QoKTtcbiAgICAgIGRyYWcueCA9IGdldFgoZSk7XG4gICAgICBkcmFnLnkgPSBnZXRZKGUpO1xuXG4gICAgICBpZiAocHJvcHMuZHJhZ2dhYmxlRGlyZWN0aW9uID09PSBcInhcIlxuICAgICAgLyogWCAqL1xuICAgICAgKSB7XG4gICAgICAgICAgZHJhZy5kZWx0YSA9IGRyYWcueCAtIGRyYWcuc3RhcnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWcuZGVsdGEgPSBkcmFnLnkgLSBkcmFnLnN0YXJ0O1xuICAgICAgfSAvLyBwcmV2ZW50IGZhbHNlIHBvc2l0aWYgZHVyaW5nIGEgdG9hc3QgY2xpY2tcblxuXG4gICAgICBpZiAoZHJhZy5zdGFydCAhPT0gZHJhZy54KSBkcmFnLmNhbkNsb3NlT25DbGljayA9IGZhbHNlO1xuICAgICAgdG9hc3Quc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVcIiArIHByb3BzLmRyYWdnYWJsZURpcmVjdGlvbiArIFwiKFwiICsgZHJhZy5kZWx0YSArIFwicHgpXCI7XG4gICAgICB0b2FzdC5zdHlsZS5vcGFjaXR5ID0gXCJcIiArICgxIC0gTWF0aC5hYnMoZHJhZy5kZWx0YSAvIGRyYWcucmVtb3ZhbERpc3RhbmNlKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnRW5kKCkge1xuICAgIHZhciB0b2FzdCA9IHRvYXN0UmVmLmN1cnJlbnQ7XG5cbiAgICBpZiAoZHJhZy5jYW5EcmFnKSB7XG4gICAgICBkcmFnLmNhbkRyYWcgPSBmYWxzZTtcblxuICAgICAgaWYgKE1hdGguYWJzKGRyYWcuZGVsdGEpID4gZHJhZy5yZW1vdmFsRGlzdGFuY2UpIHtcbiAgICAgICAgc2V0UHJldmVudEV4aXRUcmFuc2l0aW9uKHRydWUpO1xuICAgICAgICBwcm9wcy5jbG9zZVRvYXN0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdG9hc3Quc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMC4ycywgb3BhY2l0eSAwLjJzJztcbiAgICAgIHRvYXN0LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlXCIgKyBwcm9wcy5kcmFnZ2FibGVEaXJlY3Rpb24gKyBcIigwKVwiO1xuICAgICAgdG9hc3Quc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICB9XG4gIH1cblxuICB2YXIgZXZlbnRIYW5kbGVycyA9IHtcbiAgICBvbk1vdXNlRG93bjogb25EcmFnU3RhcnQsXG4gICAgb25Ub3VjaFN0YXJ0OiBvbkRyYWdTdGFydCxcbiAgICBvbk1vdXNlVXA6IG9uRHJhZ1RyYW5zaXRpb25FbmQsXG4gICAgb25Ub3VjaEVuZDogb25EcmFnVHJhbnNpdGlvbkVuZFxuICB9O1xuXG4gIGlmIChhdXRvQ2xvc2UgJiYgcGF1c2VPbkhvdmVyKSB7XG4gICAgZXZlbnRIYW5kbGVycy5vbk1vdXNlRW50ZXIgPSBwYXVzZVRvYXN0O1xuICAgIGV2ZW50SGFuZGxlcnMub25Nb3VzZUxlYXZlID0gcGxheVRvYXN0O1xuICB9IC8vIHByZXZlbnQgdG9hc3QgZnJvbSBjbG9zaW5nIHdoZW4gdXNlciBkcmFncyB0aGUgdG9hc3RcblxuXG4gIGlmIChjbG9zZU9uQ2xpY2spIHtcbiAgICBldmVudEhhbmRsZXJzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgb25DbGljayAmJiBvbkNsaWNrKGUpO1xuICAgICAgZHJhZy5jYW5DbG9zZU9uQ2xpY2sgJiYgY2xvc2VUb2FzdCgpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsYXlUb2FzdDogcGxheVRvYXN0LFxuICAgIHBhdXNlVG9hc3Q6IHBhdXNlVG9hc3QsXG4gICAgaXNSdW5uaW5nOiBpc1J1bm5pbmcsXG4gICAgcHJldmVudEV4aXRUcmFuc2l0aW9uOiBwcmV2ZW50RXhpdFRyYW5zaXRpb24sXG4gICAgdG9hc3RSZWY6IHRvYXN0UmVmLFxuICAgIGV2ZW50SGFuZGxlcnM6IGV2ZW50SGFuZGxlcnNcbiAgfTtcbn1cblxuZnVuY3Rpb24gQ2xvc2VCdXR0b24oX3JlZikge1xuICB2YXIgY2xvc2VUb2FzdCA9IF9yZWYuY2xvc2VUb2FzdCxcbiAgICAgIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICBfcmVmJGFyaWFMYWJlbCA9IF9yZWYuYXJpYUxhYmVsLFxuICAgICAgYXJpYUxhYmVsID0gX3JlZiRhcmlhTGFiZWwgPT09IHZvaWQgMCA/ICdjbG9zZScgOiBfcmVmJGFyaWFMYWJlbDtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgIGNsYXNzTmFtZTogXCJUb2FzdGlmeVwiXG4gICAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICAgICsgXCJfX2Nsb3NlLWJ1dHRvbiBcIiArIFwiVG9hc3RpZnlcIlxuICAgIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgICArIFwiX19jbG9zZS1idXR0b24tLVwiICsgdHlwZSxcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNsb3NlVG9hc3QoZSk7XG4gICAgfSxcbiAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsXG4gIH0sIGNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgdmlld0JveDogXCIwIDAgMTQgMTZcIlxuICB9LCBjcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgIGQ6IFwiTTcuNzEgOC4yM2wzLjc1IDMuNzUtMS40OCAxLjQ4LTMuNzUtMy43NS0zLjc1IDMuNzVMMSAxMS45OGwzLjc1LTMuNzVMMSA0LjQ4IDIuNDggM2wzLjc1IDMuNzVMOS45OCAzbDEuNDggMS40OC0zLjc1IDMuNzV6XCJcbiAgfSkpKTtcbn1cblxuZnVuY3Rpb24gUHJvZ3Jlc3NCYXIoX3JlZikge1xuICB2YXIgX2N4LCBfYW5pbWF0aW9uRXZlbnQ7XG5cbiAgdmFyIGRlbGF5ID0gX3JlZi5kZWxheSxcbiAgICAgIGlzUnVubmluZyA9IF9yZWYuaXNSdW5uaW5nLFxuICAgICAgY2xvc2VUb2FzdCA9IF9yZWYuY2xvc2VUb2FzdCxcbiAgICAgIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICBoaWRlID0gX3JlZi5oaWRlLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICB1c2VyU3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgY29udHJvbGxlZFByb2dyZXNzID0gX3JlZi5jb250cm9sbGVkUHJvZ3Jlc3MsXG4gICAgICBwcm9ncmVzcyA9IF9yZWYucHJvZ3Jlc3MsXG4gICAgICBydGwgPSBfcmVmLnJ0bCxcbiAgICAgIGlzSW4gPSBfcmVmLmlzSW47XG5cbiAgdmFyIHN0eWxlID0gX2V4dGVuZHMoe30sIHVzZXJTdHlsZSwge1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBkZWxheSArIFwibXNcIixcbiAgICBhbmltYXRpb25QbGF5U3RhdGU6IGlzUnVubmluZyA/ICdydW5uaW5nJyA6ICdwYXVzZWQnLFxuICAgIG9wYWNpdHk6IGhpZGUgPyAwIDogMVxuICB9KTtcblxuICBpZiAoY29udHJvbGxlZFByb2dyZXNzKSBzdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlWChcIiArIHByb2dyZXNzICsgXCIpXCI7XG4gIHZhciBkZWZhdWx0Q2xhc3NOYW1lID0gY3goXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fcHJvZ3Jlc3MtYmFyXCIsIGNvbnRyb2xsZWRQcm9ncmVzcyA/IFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3Byb2dyZXNzLWJhci0tY29udHJvbGxlZFwiIDogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fcHJvZ3Jlc3MtYmFyLS1hbmltYXRlZFwiLCBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiX19wcm9ncmVzcy1iYXItLVwiICsgdHlwZSwgKF9jeCA9IHt9LCBfY3hbXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fcHJvZ3Jlc3MtYmFyLS1ydGxcIl0gPSBydGwsIF9jeCkpO1xuICB2YXIgY2xhc3NOYW1lcyA9IGlzRm4oY2xhc3NOYW1lKSA/IGNsYXNzTmFtZSh7XG4gICAgcnRsOiBydGwsXG4gICAgdHlwZTogdHlwZSxcbiAgICBkZWZhdWx0Q2xhc3NOYW1lOiBkZWZhdWx0Q2xhc3NOYW1lXG4gIH0pIDogY3goZGVmYXVsdENsYXNzTmFtZSwgY2xhc3NOYW1lKTsgLy8g8J+nkCBjb250cm9sbGVkUHJvZ3Jlc3MgaXMgZGVyaXZlZCBmcm9tIHByb2dyZXNzXG4gIC8vIHNvIGlmIGNvbnRyb2xsZWRQcm9ncmVzcyBpcyBzZXRcbiAgLy8gaXQgbWVhbnMgdGhhdCB0aGlzIGlzIGFsc28gdGhlIGNhc2UgZm9yIHByb2dyZXNzXG5cbiAgdmFyIGFuaW1hdGlvbkV2ZW50ID0gKF9hbmltYXRpb25FdmVudCA9IHt9LCBfYW5pbWF0aW9uRXZlbnRbY29udHJvbGxlZFByb2dyZXNzICYmIHByb2dyZXNzID49IDEgPyAnb25UcmFuc2l0aW9uRW5kJyA6ICdvbkFuaW1hdGlvbkVuZCddID0gY29udHJvbGxlZFByb2dyZXNzICYmIHByb2dyZXNzIDwgMSA/IG51bGwgOiBmdW5jdGlvbiAoKSB7XG4gICAgaXNJbiAmJiBjbG9zZVRvYXN0KCk7XG4gIH0sIF9hbmltYXRpb25FdmVudCk7IC8vIFRPRE86IGFkZCBhcmlhLXZhbHVlbm93LCBhcmlhLXZhbHVlbWF4LCBhcmlhLXZhbHVlbWluXG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgcm9sZTogXCJwcm9ncmVzc2JhclwiLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgYW5pbWF0aW9uRXZlbnQpKTtcbn1cblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZTogVFlQRS5ERUZBVUxULFxuICBoaWRlOiBmYWxzZVxufTtcblxudmFyIFRvYXN0ID0gZnVuY3Rpb24gVG9hc3QocHJvcHMpIHtcbiAgdmFyIF9jeDtcblxuICB2YXIgX3VzZVRvYXN0ID0gdXNlVG9hc3QocHJvcHMpLFxuICAgICAgaXNSdW5uaW5nID0gX3VzZVRvYXN0LmlzUnVubmluZyxcbiAgICAgIHByZXZlbnRFeGl0VHJhbnNpdGlvbiA9IF91c2VUb2FzdC5wcmV2ZW50RXhpdFRyYW5zaXRpb24sXG4gICAgICB0b2FzdFJlZiA9IF91c2VUb2FzdC50b2FzdFJlZixcbiAgICAgIGV2ZW50SGFuZGxlcnMgPSBfdXNlVG9hc3QuZXZlbnRIYW5kbGVycztcblxuICB2YXIgY2xvc2VCdXR0b24gPSBwcm9wcy5jbG9zZUJ1dHRvbixcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBhdXRvQ2xvc2UgPSBwcm9wcy5hdXRvQ2xvc2UsXG4gICAgICBvbkNsaWNrID0gcHJvcHMub25DbGljayxcbiAgICAgIHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgaGlkZVByb2dyZXNzQmFyID0gcHJvcHMuaGlkZVByb2dyZXNzQmFyLFxuICAgICAgY2xvc2VUb2FzdCA9IHByb3BzLmNsb3NlVG9hc3QsXG4gICAgICBUcmFuc2l0aW9uID0gcHJvcHMudHJhbnNpdGlvbixcbiAgICAgIHBvc2l0aW9uID0gcHJvcHMucG9zaXRpb24sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgYm9keUNsYXNzTmFtZSA9IHByb3BzLmJvZHlDbGFzc05hbWUsXG4gICAgICBib2R5U3R5bGUgPSBwcm9wcy5ib2R5U3R5bGUsXG4gICAgICBwcm9ncmVzc0NsYXNzTmFtZSA9IHByb3BzLnByb2dyZXNzQ2xhc3NOYW1lLFxuICAgICAgcHJvZ3Jlc3NTdHlsZSA9IHByb3BzLnByb2dyZXNzU3R5bGUsXG4gICAgICB1cGRhdGVJZCA9IHByb3BzLnVwZGF0ZUlkLFxuICAgICAgcm9sZSA9IHByb3BzLnJvbGUsXG4gICAgICBwcm9ncmVzcyA9IHByb3BzLnByb2dyZXNzLFxuICAgICAgcnRsID0gcHJvcHMucnRsLFxuICAgICAgdG9hc3RJZCA9IHByb3BzLnRvYXN0SWQsXG4gICAgICBkZWxldGVUb2FzdCA9IHByb3BzLmRlbGV0ZVRvYXN0LFxuICAgICAgaXNJbiA9IHByb3BzLmlzSW47XG4gIHZhciBkZWZhdWx0Q2xhc3NOYW1lID0gY3goXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fdG9hc3RcIiwgXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fdG9hc3QtLVwiICsgdHlwZSwgKF9jeCA9IHt9LCBfY3hbXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fdG9hc3QtLXJ0bFwiXSA9IHJ0bCwgX2N4KSk7XG4gIHZhciBjc3NDbGFzc2VzID0gaXNGbihjbGFzc05hbWUpID8gY2xhc3NOYW1lKHtcbiAgICBydGw6IHJ0bCxcbiAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgdHlwZTogdHlwZSxcbiAgICBkZWZhdWx0Q2xhc3NOYW1lOiBkZWZhdWx0Q2xhc3NOYW1lXG4gIH0pIDogY3goZGVmYXVsdENsYXNzTmFtZSwgY2xhc3NOYW1lKTtcbiAgdmFyIGlzUHJvZ3Jlc3NDb250cm9sbGVkID0gISFwcm9ncmVzcztcblxuICBmdW5jdGlvbiByZW5kZXJDbG9zZUJ1dHRvbihjbG9zZUJ1dHRvbikge1xuICAgIGlmICghY2xvc2VCdXR0b24pIHJldHVybjtcbiAgICB2YXIgcHJvcHMgPSB7XG4gICAgICBjbG9zZVRvYXN0OiBjbG9zZVRvYXN0LFxuICAgICAgdHlwZTogdHlwZVxuICAgIH07XG4gICAgaWYgKGlzRm4oY2xvc2VCdXR0b24pKSByZXR1cm4gY2xvc2VCdXR0b24ocHJvcHMpO1xuICAgIGlmIChpc1ZhbGlkRWxlbWVudChjbG9zZUJ1dHRvbikpIHJldHVybiBjbG9uZUVsZW1lbnQoY2xvc2VCdXR0b24sIHByb3BzKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFRyYW5zaXRpb24sIHtcbiAgICBpc0luOiBpc0luLFxuICAgIGRvbmU6IGRlbGV0ZVRvYXN0LFxuICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICBwcmV2ZW50RXhpdFRyYW5zaXRpb246IHByZXZlbnRFeGl0VHJhbnNpdGlvbixcbiAgICBub2RlUmVmOiB0b2FzdFJlZlxuICB9LCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIGlkOiB0b2FzdElkLFxuICAgIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gICAgY2xhc3NOYW1lOiBjc3NDbGFzc2VzXG4gIH0sIGV2ZW50SGFuZGxlcnMsIHtcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgcmVmOiB0b2FzdFJlZlxuICB9KSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHt9LCBpc0luICYmIHtcbiAgICByb2xlOiByb2xlXG4gIH0sIHtcbiAgICBjbGFzc05hbWU6IGlzRm4oYm9keUNsYXNzTmFtZSkgPyBib2R5Q2xhc3NOYW1lKHtcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9KSA6IGN4KFwiVG9hc3RpZnlcIlxuICAgIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgICArIFwiX190b2FzdC1ib2R5XCIsIGJvZHlDbGFzc05hbWUpLFxuICAgIHN0eWxlOiBib2R5U3R5bGVcbiAgfSksIGNoaWxkcmVuKSwgcmVuZGVyQ2xvc2VCdXR0b24oY2xvc2VCdXR0b24pLCAoYXV0b0Nsb3NlIHx8IGlzUHJvZ3Jlc3NDb250cm9sbGVkKSAmJiBjcmVhdGVFbGVtZW50KFByb2dyZXNzQmFyLCBPYmplY3QuYXNzaWduKHt9LCB1cGRhdGVJZCAmJiAhaXNQcm9ncmVzc0NvbnRyb2xsZWQgPyB7XG4gICAga2V5OiBcInBiLVwiICsgdXBkYXRlSWRcbiAgfSA6IHt9LCB7XG4gICAgcnRsOiBydGwsXG4gICAgZGVsYXk6IGF1dG9DbG9zZSxcbiAgICBpc1J1bm5pbmc6IGlzUnVubmluZyxcbiAgICBpc0luOiBpc0luLFxuICAgIGNsb3NlVG9hc3Q6IGNsb3NlVG9hc3QsXG4gICAgaGlkZTogaGlkZVByb2dyZXNzQmFyLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgc3R5bGU6IHByb2dyZXNzU3R5bGUsXG4gICAgY2xhc3NOYW1lOiBwcm9ncmVzc0NsYXNzTmFtZSxcbiAgICBjb250cm9sbGVkUHJvZ3Jlc3M6IGlzUHJvZ3Jlc3NDb250cm9sbGVkLFxuICAgIHByb2dyZXNzOiBwcm9ncmVzc1xuICB9KSkpKTtcbn07XG5cbnZhciBCb3VuY2UgPSAvKiNfX1BVUkVfXyovY3NzVHJhbnNpdGlvbih7XG4gIGVudGVyOiBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiLS1hbmltYXRlIFwiICsgXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fYm91bmNlLWVudGVyXCIsXG4gIGV4aXQ6IFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCItLWFuaW1hdGUgXCIgKyBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiX19ib3VuY2UtZXhpdFwiLFxuICBhcHBlbmRQb3NpdGlvbjogdHJ1ZVxufSk7XG52YXIgU2xpZGUgPSAvKiNfX1BVUkVfXyovY3NzVHJhbnNpdGlvbih7XG4gIGVudGVyOiBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiLS1hbmltYXRlIFwiICsgXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fc2xpZGUtZW50ZXJcIixcbiAgZXhpdDogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIi0tYW5pbWF0ZSBcIiArIFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3NsaWRlLWV4aXRcIixcbiAgYXBwZW5kUG9zaXRpb246IHRydWVcbn0pO1xudmFyIFpvb20gPSAvKiNfX1BVUkVfXyovY3NzVHJhbnNpdGlvbih7XG4gIGVudGVyOiBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiLS1hbmltYXRlIFwiICsgXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fem9vbS1lbnRlclwiLFxuICBleGl0OiBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiLS1hbmltYXRlIFwiICsgXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fem9vbS1leGl0XCJcbn0pO1xudmFyIEZsaXAgPSAvKiNfX1BVUkVfXyovY3NzVHJhbnNpdGlvbih7XG4gIGVudGVyOiBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiLS1hbmltYXRlIFwiICsgXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fZmxpcC1lbnRlclwiLFxuICBleGl0OiBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiLS1hbmltYXRlIFwiICsgXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fZmxpcC1leGl0XCJcbn0pO1xuXG52YXIgVG9hc3RDb250YWluZXIgPSBmdW5jdGlvbiBUb2FzdENvbnRhaW5lcihwcm9wcykge1xuICB2YXIgX3VzZVRvYXN0Q29udGFpbmVyID0gdXNlVG9hc3RDb250YWluZXIocHJvcHMpLFxuICAgICAgZ2V0VG9hc3RUb1JlbmRlciA9IF91c2VUb2FzdENvbnRhaW5lci5nZXRUb2FzdFRvUmVuZGVyLFxuICAgICAgY29udGFpbmVyUmVmID0gX3VzZVRvYXN0Q29udGFpbmVyLmNvbnRhaW5lclJlZixcbiAgICAgIGlzVG9hc3RBY3RpdmUgPSBfdXNlVG9hc3RDb250YWluZXIuaXNUb2FzdEFjdGl2ZTtcblxuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIHJ0bCA9IHByb3BzLnJ0bCxcbiAgICAgIGNvbnRhaW5lcklkID0gcHJvcHMuY29udGFpbmVySWQ7XG5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHBvc2l0aW9uKSB7XG4gICAgdmFyIF9jeDtcblxuICAgIHZhciBkZWZhdWx0Q2xhc3NOYW1lID0gY3goXCJUb2FzdGlmeVwiXG4gICAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICAgICsgXCJfX3RvYXN0LWNvbnRhaW5lclwiLCBcIlRvYXN0aWZ5XCJcbiAgICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICAgKyBcIl9fdG9hc3QtY29udGFpbmVyLS1cIiArIHBvc2l0aW9uLCAoX2N4ID0ge30sIF9jeFtcIlRvYXN0aWZ5XCJcbiAgICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICAgKyBcIl9fdG9hc3QtY29udGFpbmVyLS1ydGxcIl0gPSBydGwsIF9jeCkpO1xuICAgIHJldHVybiBpc0ZuKGNsYXNzTmFtZSkgPyBjbGFzc05hbWUoe1xuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgcnRsOiBydGwsXG4gICAgICBkZWZhdWx0Q2xhc3NOYW1lOiBkZWZhdWx0Q2xhc3NOYW1lXG4gICAgfSkgOiBjeChkZWZhdWx0Q2xhc3NOYW1lLCBwYXJzZUNsYXNzTmFtZShjbGFzc05hbWUpKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICByZWY6IGNvbnRhaW5lclJlZixcbiAgICBjbGFzc05hbWU6IFwiVG9hc3RpZnlcIlxuICAgIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgICAsXG4gICAgaWQ6IGNvbnRhaW5lcklkXG4gIH0sIGdldFRvYXN0VG9SZW5kZXIoZnVuY3Rpb24gKHBvc2l0aW9uLCB0b2FzdExpc3QpIHtcbiAgICB2YXIgY29udGFpbmVyU3R5bGUgPSB0b2FzdExpc3QubGVuZ3RoID09PSAwID8gX2V4dGVuZHMoe30sIHN0eWxlLCB7XG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9KSA6IF9leHRlbmRzKHt9LCBzdHlsZSk7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBnZXRDbGFzc05hbWUocG9zaXRpb24pLFxuICAgICAgc3R5bGU6IGNvbnRhaW5lclN0eWxlLFxuICAgICAga2V5OiBcImNvbnRhaW5lci1cIiArIHBvc2l0aW9uXG4gICAgfSwgdG9hc3RMaXN0Lm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGNvbnRlbnQgPSBfcmVmLmNvbnRlbnQsXG4gICAgICAgICAgdG9hc3RQcm9wcyA9IF9yZWYucHJvcHM7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChUb2FzdCwgT2JqZWN0LmFzc2lnbih7fSwgdG9hc3RQcm9wcywge1xuICAgICAgICBpc0luOiBpc1RvYXN0QWN0aXZlKHRvYXN0UHJvcHMudG9hc3RJZCksXG4gICAgICAgIGtleTogXCJ0b2FzdC1cIiArIHRvYXN0UHJvcHMua2V5LFxuICAgICAgICBjbG9zZUJ1dHRvbjogdG9hc3RQcm9wcy5jbG9zZUJ1dHRvbiA9PT0gdHJ1ZSA/IENsb3NlQnV0dG9uIDogdG9hc3RQcm9wcy5jbG9zZUJ1dHRvblxuICAgICAgfSksIGNvbnRlbnQpO1xuICAgIH0pKTtcbiAgfSkpO1xufTtcblRvYXN0Q29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgcG9zaXRpb246IFBPU0lUSU9OLlRPUF9SSUdIVCxcbiAgdHJhbnNpdGlvbjogQm91bmNlLFxuICBydGw6IGZhbHNlLFxuICBhdXRvQ2xvc2U6IDUwMDAsXG4gIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gIGNsb3NlQnV0dG9uOiBDbG9zZUJ1dHRvbixcbiAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICBwYXVzZU9uRm9jdXNMb3NzOiB0cnVlLFxuICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gIG5ld2VzdE9uVG9wOiBmYWxzZSxcbiAgZHJhZ2dhYmxlOiB0cnVlLFxuICBkcmFnZ2FibGVQZXJjZW50OiA4MFxuICAvKiBEUkFHR0FCTEVfUEVSQ0VOVCAqL1xuICAsXG4gIGRyYWdnYWJsZURpcmVjdGlvbjogXCJ4XCJcbiAgLyogWCAqL1xuICAsXG4gIHJvbGU6ICdhbGVydCdcbn07XG5cbnZhciBjb250YWluZXJzID0gLyojX19QVVJFX18qL25ldyBNYXAoKTtcbnZhciBsYXRlc3RJbnN0YW5jZTtcbnZhciBjb250YWluZXJEb21Ob2RlO1xudmFyIGNvbnRhaW5lckNvbmZpZztcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGxhenkgPSBmYWxzZTtcbi8qKlxyXG4gKiBDaGVjayB3aGV0aGVyIGFueSBjb250YWluZXIgaXMgY3VycmVudGx5IG1vdW50ZWQgaW4gdGhlIERPTVxyXG4gKi9cblxuZnVuY3Rpb24gaXNBbnlDb250YWluZXJNb3VudGVkKCkge1xuICByZXR1cm4gY29udGFpbmVycy5zaXplID4gMDtcbn1cbi8qKlxyXG4gKiBHZXQgdGhlIHRvYXN0IGJ5IGlkLCBnaXZlbiBpdCdzIGluIHRoZSBET00sIG90aGVyd2lzZSByZXR1cm5zIG51bGxcclxuICovXG5cblxuZnVuY3Rpb24gZ2V0VG9hc3QodG9hc3RJZCwgX3JlZikge1xuICB2YXIgY29udGFpbmVySWQgPSBfcmVmLmNvbnRhaW5lcklkO1xuICB2YXIgY29udGFpbmVyID0gY29udGFpbmVycy5nZXQoY29udGFpbmVySWQgfHwgbGF0ZXN0SW5zdGFuY2UpO1xuICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuIG51bGw7XG4gIHJldHVybiBjb250YWluZXIuZ2V0VG9hc3QodG9hc3RJZCk7XG59XG4vKipcclxuICogR2VuZXJhdGUgYSByYW5kb20gdG9hc3RJZFxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRvYXN0SWQoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7XG59XG4vKipcclxuICogR2VuZXJhdGUgYSB0b2FzdElkIG9yIHVzZSB0aGUgb25lIHByb3ZpZGVkXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFRvYXN0SWQob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyAmJiAoaXNTdHIob3B0aW9ucy50b2FzdElkKSB8fCBpc051bShvcHRpb25zLnRvYXN0SWQpKSkge1xuICAgIHJldHVybiBvcHRpb25zLnRvYXN0SWQ7XG4gIH1cblxuICByZXR1cm4gZ2VuZXJhdGVUb2FzdElkKCk7XG59XG4vKipcclxuICogSWYgdGhlIGNvbnRhaW5lciBpcyBub3QgbW91bnRlZCwgdGhlIHRvYXN0IGlzIGVucXVldWVkIGFuZFxyXG4gKiB0aGUgY29udGFpbmVyIGxhenkgbW91bnRlZFxyXG4gKi9cblxuXG5mdW5jdGlvbiBkaXNwYXRjaFRvYXN0KGNvbnRlbnQsIG9wdGlvbnMpIHtcbiAgaWYgKGlzQW55Q29udGFpbmVyTW91bnRlZCgpKSB7XG4gICAgZXZlbnRNYW5hZ2VyLmVtaXQoMFxuICAgIC8qIFNob3cgKi9cbiAgICAsIGNvbnRlbnQsIG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICB9KTtcblxuICAgIGlmIChsYXp5ICYmIGNhblVzZURvbSkge1xuICAgICAgbGF6eSA9IGZhbHNlO1xuICAgICAgY29udGFpbmVyRG9tTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXJEb21Ob2RlKTtcbiAgICAgIHJlbmRlcihjcmVhdGVFbGVtZW50KFRvYXN0Q29udGFpbmVyLCBPYmplY3QuYXNzaWduKHt9LCBjb250YWluZXJDb25maWcpKSwgY29udGFpbmVyRG9tTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnMudG9hc3RJZDtcbn1cbi8qKlxyXG4gKiBNZXJnZSBwcm92aWRlZCBvcHRpb25zIHdpdGggdGhlIGRlZmF1bHRzIHNldHRpbmdzIGFuZCBnZW5lcmF0ZSB0aGUgdG9hc3RJZFxyXG4gKi9cblxuXG5mdW5jdGlvbiBtZXJnZU9wdGlvbnModHlwZSwgb3B0aW9ucykge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICB0eXBlOiBvcHRpb25zICYmIG9wdGlvbnMudHlwZSB8fCB0eXBlLFxuICAgIHRvYXN0SWQ6IGdldFRvYXN0SWQob3B0aW9ucylcbiAgfSk7XG59XG5cbnZhciBjcmVhdGVUb2FzdEJ5VHlwZSA9IGZ1bmN0aW9uIGNyZWF0ZVRvYXN0QnlUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb250ZW50LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoVG9hc3QoY29udGVudCwgbWVyZ2VPcHRpb25zKHR5cGUsIG9wdGlvbnMpKTtcbiAgfTtcbn07XG5cbnZhciB0b2FzdCA9IGZ1bmN0aW9uIHRvYXN0KGNvbnRlbnQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGRpc3BhdGNoVG9hc3QoY29udGVudCwgbWVyZ2VPcHRpb25zKFRZUEUuREVGQVVMVCwgb3B0aW9ucykpO1xufTtcblxudG9hc3Quc3VjY2VzcyA9IC8qI19fUFVSRV9fKi9jcmVhdGVUb2FzdEJ5VHlwZShUWVBFLlNVQ0NFU1MpO1xudG9hc3QuaW5mbyA9IC8qI19fUFVSRV9fKi9jcmVhdGVUb2FzdEJ5VHlwZShUWVBFLklORk8pO1xudG9hc3QuZXJyb3IgPSAvKiNfX1BVUkVfXyovY3JlYXRlVG9hc3RCeVR5cGUoVFlQRS5FUlJPUik7XG50b2FzdC53YXJuaW5nID0gLyojX19QVVJFX18qL2NyZWF0ZVRvYXN0QnlUeXBlKFRZUEUuV0FSTklORyk7XG50b2FzdC5kYXJrID0gLyojX19QVVJFX18qL2NyZWF0ZVRvYXN0QnlUeXBlKFRZUEUuREFSSyk7XG50b2FzdC53YXJuID0gdG9hc3Qud2FybmluZztcbi8qKlxyXG4gKiBSZW1vdmUgdG9hc3QgcHJvZ3JhbW1hdGljYWx5XHJcbiAqL1xuXG50b2FzdC5kaXNtaXNzID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBldmVudE1hbmFnZXIuZW1pdCgxXG4gIC8qIENsZWFyICovXG4gICwgaWQpO1xufTtcbi8qKlxyXG4gKiBDbGVhciB3YWl0aW5nIHF1ZXVlIHdoZW4gbGltaXQgaXMgdXNlZFxyXG4gKi9cblxuXG50b2FzdC5jbGVhcldhaXRpbmdRdWV1ZSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7XG4gICAgcGFyYW1zID0ge307XG4gIH1cblxuICByZXR1cm4gZXZlbnRNYW5hZ2VyLmVtaXQoNVxuICAvKiBDbGVhcldhaXRpbmdRdWV1ZSAqL1xuICAsIHBhcmFtcyk7XG59O1xuLyoqXHJcbiAqIHJldHVybiB0cnVlIGlmIG9uZSBjb250YWluZXIgaXMgZGlzcGxheWluZyB0aGUgdG9hc3RcclxuICovXG5cblxudG9hc3QuaXNBY3RpdmUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgdmFyIGlzVG9hc3RBY3RpdmUgPSBmYWxzZTtcbiAgY29udGFpbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICBpZiAoY29udGFpbmVyLmlzVG9hc3RBY3RpdmUgJiYgY29udGFpbmVyLmlzVG9hc3RBY3RpdmUoaWQpKSB7XG4gICAgICBpc1RvYXN0QWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaXNUb2FzdEFjdGl2ZTtcbn07XG5cbnRvYXN0LnVwZGF0ZSA9IGZ1bmN0aW9uICh0b2FzdElkLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICAvLyBpZiB5b3UgY2FsbCB0b2FzdCBhbmQgdG9hc3QudXBkYXRlIGRpcmVjdGx5IG5vdGhpbmcgd2lsbCBiZSBkaXNwbGF5ZWRcbiAgLy8gdGhpcyBpcyB3aHkgSSBkZWZlcmVkIHRoZSB1cGRhdGVcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRvYXN0ID0gZ2V0VG9hc3QodG9hc3RJZCwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9hc3QpIHtcbiAgICAgIHZhciBvbGRPcHRpb25zID0gdG9hc3QucHJvcHMsXG4gICAgICAgICAgb2xkQ29udGVudCA9IHRvYXN0LmNvbnRlbnQ7XG5cbiAgICAgIHZhciBuZXh0T3B0aW9ucyA9IF9leHRlbmRzKHt9LCBvbGRPcHRpb25zLCBvcHRpb25zLCB7XG4gICAgICAgIHRvYXN0SWQ6IG9wdGlvbnMudG9hc3RJZCB8fCB0b2FzdElkLFxuICAgICAgICB1cGRhdGVJZDogZ2VuZXJhdGVUb2FzdElkKClcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobmV4dE9wdGlvbnMudG9hc3RJZCAhPT0gdG9hc3RJZCkgbmV4dE9wdGlvbnMuc3RhbGVJZCA9IHRvYXN0SWQ7XG4gICAgICB2YXIgY29udGVudCA9IG5leHRPcHRpb25zLnJlbmRlciB8fCBvbGRDb250ZW50O1xuICAgICAgZGVsZXRlIG5leHRPcHRpb25zLnJlbmRlcjtcbiAgICAgIGRpc3BhdGNoVG9hc3QoY29udGVudCwgbmV4dE9wdGlvbnMpO1xuICAgIH1cbiAgfSwgMCk7XG59O1xuLyoqXHJcbiAqIFVzZWQgZm9yIGNvbnRyb2xsZWQgcHJvZ3Jlc3MgYmFyLlxyXG4gKi9cblxuXG50b2FzdC5kb25lID0gZnVuY3Rpb24gKGlkKSB7XG4gIHRvYXN0LnVwZGF0ZShpZCwge1xuICAgIHByb2dyZXNzOiAxXG4gIH0pO1xufTtcbi8qKlxyXG4gKiBUcmFjayBjaGFuZ2VzLiBUaGUgY2FsbGJhY2sgZ2V0IHRoZSBudW1iZXIgb2YgdG9hc3QgZGlzcGxheWVkXHJcbiAqXHJcbiAqL1xuXG5cbnRvYXN0Lm9uQ2hhbmdlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGlmIChpc0ZuKGNhbGxiYWNrKSkge1xuICAgIGV2ZW50TWFuYWdlci5vbig0XG4gICAgLyogQ2hhbmdlICovXG4gICAgLCBjYWxsYmFjayk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlzRm4oY2FsbGJhY2spICYmIGV2ZW50TWFuYWdlci5vZmYoNFxuICAgIC8qIENoYW5nZSAqL1xuICAgICwgY2FsbGJhY2spO1xuICB9O1xufTtcbi8qKlxyXG4gKiBDb25maWd1cmUgdGhlIFRvYXN0Q29udGFpbmVyIHdoZW4gbGF6eSBtb3VudGVkXHJcbiAqL1xuXG5cbnRvYXN0LmNvbmZpZ3VyZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7XG4gICAgY29uZmlnID0ge307XG4gIH1cblxuICBsYXp5ID0gdHJ1ZTtcbiAgY29udGFpbmVyQ29uZmlnID0gY29uZmlnO1xufTtcblxudG9hc3QuUE9TSVRJT04gPSBQT1NJVElPTjtcbnRvYXN0LlRZUEUgPSBUWVBFO1xuLyoqXHJcbiAqIFdhaXQgdW50aWwgdGhlIFRvYXN0Q29udGFpbmVyIGlzIG1vdW50ZWQgdG8gZGlzcGF0Y2ggdGhlIHRvYXN0XHJcbiAqIGFuZCBhdHRhY2ggaXNBY3RpdmUgbWV0aG9kXHJcbiAqL1xuXG5ldmVudE1hbmFnZXIub24oMlxuLyogRGlkTW91bnQgKi9cbiwgZnVuY3Rpb24gKGNvbnRhaW5lckluc3RhbmNlKSB7XG4gIGxhdGVzdEluc3RhbmNlID0gY29udGFpbmVySW5zdGFuY2UuY29udGFpbmVySWQgfHwgY29udGFpbmVySW5zdGFuY2U7XG4gIGNvbnRhaW5lcnMuc2V0KGxhdGVzdEluc3RhbmNlLCBjb250YWluZXJJbnN0YW5jZSk7XG4gIHF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBldmVudE1hbmFnZXIuZW1pdCgwXG4gICAgLyogU2hvdyAqL1xuICAgICwgaXRlbS5jb250ZW50LCBpdGVtLm9wdGlvbnMpO1xuICB9KTtcbiAgcXVldWUgPSBbXTtcbn0pLm9uKDNcbi8qIFdpbGxVbm1vdW50ICovXG4sIGZ1bmN0aW9uIChjb250YWluZXJJbnN0YW5jZSkge1xuICBjb250YWluZXJzW1wiZGVsZXRlXCJdKGNvbnRhaW5lckluc3RhbmNlLmNvbnRhaW5lcklkIHx8IGNvbnRhaW5lckluc3RhbmNlKTtcblxuICBpZiAoY29udGFpbmVycy5zaXplID09PSAwKSB7XG4gICAgZXZlbnRNYW5hZ2VyLm9mZigwXG4gICAgLyogU2hvdyAqL1xuICAgICkub2ZmKDFcbiAgICAvKiBDbGVhciAqL1xuICAgICkub2ZmKDVcbiAgICAvKiBDbGVhcldhaXRpbmdRdWV1ZSAqL1xuICAgICk7XG4gIH1cblxuICBpZiAoY2FuVXNlRG9tICYmIGNvbnRhaW5lckRvbU5vZGUpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lckRvbU5vZGUpO1xuICB9XG59KTtcblxuZXhwb3J0IHsgQm91bmNlLCBGbGlwLCBTbGlkZSwgVG9hc3RDb250YWluZXIsIFpvb20sIGNvbGxhcHNlVG9hc3QsIGNzc1RyYW5zaXRpb24sIHRvYXN0LCB1c2VUb2FzdCwgdXNlVG9hc3RDb250YWluZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LXRvYXN0aWZ5LmVzbS5qcy5tYXBcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtUb2FzdENvbnRhaW5lciwgdG9hc3R9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuZnVuY3Rpb24gRmFjdWx0eUNhcmQoe2ltYWdlU3JjLCBuYW1lLCBxdWFsaWZpY2F0aW9uLCBkZXNpZ25hdGlvbiwgZW1haWx9KXtcclxuXHJcbiAgICBjb25zdCBteVN0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoOjMwMCxcclxuICAgICAgICBoZWlnaHQ6MzAwXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm90aWZ5ID0gKCkgPT4gdG9hc3QoXCJ0aGF0cyBlYXN5XCIpO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0zIGJnLWdyYXktMjAwIGhvdmVyOmJnLWdyYXktMzAwIGJsb2NrIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy0yeGwgcHgtNSBweS00IG15LTRcIj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmxvY2sgcm91bmRlZCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCB0ZXh0LWxnXCI+e25hbWV9IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtbWQgdGV4dC1ncmF5LTYwMFwiPntxdWFsaWZpY2F0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS02MDBcIj57ZGVzaWduYXRpb259PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMyBmbGV4IGp1c3RpZnktYXJvdW5kIHB4LTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyIG0tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiIHNyYz17aW1hZ2VTcmN9IGtleT17bmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IHRleHQtZ3JheS02MDAgZm9udC1ib2xkXCI+ZW1haWw6IDxoMSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+Jm5ic3A7e2VtYWlsfTwvaDE+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJibG9ja1wiIG9uQ2xpY2s9e25vdGlmeX0+S25vdyBNb3JlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY3VsdHlDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=