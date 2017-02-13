(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("lodash")) : factory(root["lodash"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var decoratorsRequire = __webpack_require__(1);

	module.exports = decoratorsRequire.keys().map(decoratorsRequire).reduce(function (decorators, module) {
	    var __esModule = module.__esModule,
	        decorator = _objectWithoutProperties(module, ['__esModule']);

	    return _extends({}, decorators, decorator);
	}, {});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Defaults.js": 2,
		"./Singleton.js": 4,
		"./lodash.js": 5
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Defaults = Defaults;

	var _lodash = __webpack_require__(3);

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function Defaults() {
	    var prototype = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	        merge = _ref.merge,
	        options = _objectWithoutProperties(_ref, ['merge']);

	    return function (TargetComponent) {
	        for (var key in prototype) {
	            var value = prototype[key];

	            if (merge) {
	                merge(value, TargetComponent.prototype[key]);
	            }

	            Object.defineProperty(TargetComponent.prototype, key, {
	                configurable: true,
	                enumerable: false,
	                writable: true,
	                value: value
	            });
	        }
	    };
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.Singleton = Singleton;
	function Singleton(factory) {
	    return function (TargetClass) {
	        var INSTANCE = '__instance__';

	        TargetClass.getInstance = function () {
	            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	                _ref$force = _ref.force,
	                force = _ref$force === undefined ? false : _ref$force;

	            if (!TargetClass[INSTANCE] || force) {
	                TargetClass[INSTANCE] = factory ? factory() : new TargetClass();
	            }

	            return TargetClass[INSTANCE];
	        };

	        return TargetClass;
	    };
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _utils = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FUNCTION_LIST = ['after', 'ary', 'before', 'bind', 'bindAll', 'bindKey', 'curry', 'curryRight', 'debounce', 'defer', 'delay', 'flow', 'flowRight', 'memoize', 'modArgs', 'negate', 'once', 'partial', 'partialRight', 'rearg', 'restParam', 'spread', 'throttle', 'wrap'];

	module.exports = FUNCTION_LIST.reduce(function (decorators, name) {
	    var func = _lodash2.default[name];

	    if (func) {
	        var decorator = (0, _utils.capitalizeFirstLetter)(name);
	        decorators[decorator] = (0, _utils.decorateFunction)(func);
	    }

	    return decorators;
	}, {});

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.capitalizeFirstLetter = capitalizeFirstLetter;
	exports.decorateFunction = decorateFunction;
	function capitalizeFirstLetter(string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function decorateFunction(func) {
	    return function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return function (target, key, descriptor) {
	            return {
	                configurable: true,
	                enumerable: descriptor.enumerable,
	                get: function getter() {
	                    // attach this function to the instance (not the class)
	                    Object.defineProperty(this, key, {
	                        configurable: true,
	                        enumerable: descriptor.enumerable,
	                        value: func.apply(undefined, [descriptor.value].concat(args))
	                    });
	                    return this[key];
	                }
	            };
	        };
	    };
	}

/***/ }
/******/ ])
});
;