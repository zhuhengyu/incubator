/******/ (function(modules) { // webpackBootstrap
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

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _expressReactViews = __webpack_require__(2);

	var _routes = __webpack_require__(3);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)(); /**
	                                     * Created by 欧阳 超 on 2017/01/07.
	                                     */

	app.use(_routes2.default);

	app.set('views', __dirname + 'views');
	app.set('view engine', 'jsx');
	app.engine('jsx', (0, _expressReactViews.createEngine)());

	app.listen(9000, function () {});
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express-react-views");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _winston = __webpack_require__(4);

	var _winston2 = _interopRequireDefault(_winston);

	var _request = __webpack_require__(5);

	var _request2 = _interopRequireDefault(_request);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = _express2.default.Router(); /**
	                                          * Created by 欧阳 超 on 2017/01/07.
	                                          */

	router.get('/', function (req, res) {
	  _winston2.default.log('test');
	  _request2.default.get('http://localhost:7000/', function (_err, _res, _body) {
	    res.send(_body);
	  });
	});

	router.get('/react', function (req, res) {
	  _request2.default.get('http://localhost:7000/', function (_err, _res, _body) {
	    res.render('index', JSON.parse(_body));
	  });
	});

	exports.default = router;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("winston");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("request");

/***/ }
/******/ ]);