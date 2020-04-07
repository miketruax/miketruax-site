module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

process.env['defaultenv'] = "production";
"development" = "production";
process.env['defaultPORT'] = 3000;
process.env['user'] = 'miketrua_website';
process.env['database'] = 'miketrua_website';
process.env['password'] = 'MUNK33s211';

/***/ }),

/***/ "./config/env.conf.js":
/*!****************************!*\
  !*** ./config/env.conf.js ***!
  \****************************/
/*! exports provided: envValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "envValidator", function() { return envValidator; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./config/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);

function envValidator() {
  if (false) {} //ensures valid environment || switches to development


  validateNodeEnv();
  if (!process.env.PORT) process.env.PORT = process.env.defaultPORT;
  return;
}

function validateNodeEnv() {
  switch ("development") {
    case 'development':
      console.log("Node environment set for ".concat("development"));
      break;

    case 'production':
      console.log("Node environment set for ".concat("development"));
      break;

    case 'test':
      console.log("Node environment set for ".concat("development"));
      break;

    default:
      console.log('Error: process.env.NODE_ENV should be set to a valid ' + ' value such as \'production\', \'development\', or \'test\'.');
      console.log('Value received: ' + "development");
      console.log('Defaulting value for: development');
      break;
  }

  return;
}

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony import */ var _config_env_conf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/env.conf.js */ "./config/env.conf.js");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _server_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./server/routes */ "./server/routes.js");


Object(_config_env_conf_js__WEBPACK_IMPORTED_MODULE_0__["envValidator"])();





var app = express__WEBPACK_IMPORTED_MODULE_2___default()();
var server = http__WEBPACK_IMPORTED_MODULE_6___default.a.createServer(app);
var port = process.env.PORT;
if (true) app.use(morgan__WEBPACK_IMPORTED_MODULE_4___default()('dev'));
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_5___default()());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json({
  type: 'application/vnd.api+json'
}));
app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({
  extended: true
}));
app.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static(__dirname + '/dist'));
app.use(helmet__WEBPACK_IMPORTED_MODULE_1___default()()); // catch 404 and forward to error handler

var router = express__WEBPACK_IMPORTED_MODULE_2___default.a.Router();

Object(_server_routes__WEBPACK_IMPORTED_MODULE_7__["default"])(app, router);
setInterval(function () {
  http__WEBPACK_IMPORTED_MODULE_6___default.a.get("http://www.miketruax.com/api/ping");
}, 300000);
server.listen(port);
console.log("Internet bears are at door #".concat(port)); // Expose app



/***/ }),

/***/ "./server/connection.js":
/*!******************************!*\
  !*** ./server/connection.js ***!
  \******************************/
/*! exports provided: pool, acquire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pool", function() { return pool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acquire", function() { return acquire; });
/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ "mysql");
/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);

var debugFlag = "development" === 'development' || "development" === 'test';
var pool = mysql__WEBPACK_IMPORTED_MODULE_0___default.a.createPool({
  debug: debugFlag,
  connectionLimit: 10,
  host: 'localhost',
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});

function acquire(callback) {
  pool.getConnection(function (err, connection) {
    if (err) {
      console.error(err);
      return;
    }

    callback(connection);
  });
}



/***/ }),

/***/ "./server/models/recipe.js":
/*!*********************************!*\
  !*** ./server/models/recipe.js ***!
  \*********************************/
/*! exports provided: getRecipes, getCategories, createRecipe, updateRecipe, deleteRecipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipes", function() { return getRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRecipe", function() { return createRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRecipe", function() { return updateRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRecipe", function() { return deleteRecipe; });
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../connection */ "./server/connection.js");


function getRecipes(res) {
  Object(_connection__WEBPACK_IMPORTED_MODULE_0__["acquire"])(function (con) {
    con.query('select * from recipes', function (err, result) {
      con.release();
      res.send(result);
    });
  });
}

function getCategories(id, res) {
  Object(_connection__WEBPACK_IMPORTED_MODULE_0__["acquire"])(function (con) {
    con.query('select * from recipes where category_ID = ?', [id], function (err, result) {
      con.release();
      res.send(result);
    });
  });
}

function createRecipe(recipe, res) {
  Object(_connection__WEBPACK_IMPORTED_MODULE_0__["acquire"])(function (con) {
    con.query('insert into recipes set ?', recipe, function (err, result) {
      con.release();

      if (err) {
        res.send({
          status: 1,
          message: 'Recipe creation failed'
        });
      } else {
        res.send({
          status: 0,
          message: 'Recipe created successfully'
        });
      }
    });
  });
}

function updateRecipe(recipe, res) {
  Object(_connection__WEBPACK_IMPORTED_MODULE_0__["acquire"])(function (con) {
    con.query('update recipe set ? where id = ?', [recipe, recipe.id], function (err, result) {
      con.release();

      if (err) {
        res.send({
          status: 1,
          message: 'recipe update failed'
        });
      } else {
        res.send({
          status: 0,
          message: 'recipe updated successfully'
        });
      }
    });
  });
}

function deleteRecipe(id, res) {
  Object(_connection__WEBPACK_IMPORTED_MODULE_0__["acquire"])(function (con) {
    con.query('delete from recipe where id = ?', [id], function (err, result) {
      con.release();

      if (err) {
        res.send({
          status: 1,
          message: 'Failed to delete'
        });
      } else {
        res.send({
          status: 0,
          message: 'Deleted successfully'
        });
      }
    });
  });
}



/***/ }),

/***/ "./server/routes.js":
/*!**************************!*\
  !*** ./server/routes.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routes_api_routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/_api.routes.js */ "./server/routes/_api.routes.js");

/* harmony default export */ __webpack_exports__["default"] = (function (app, router) {
  router.use(function (req, res, next) {
    next();
  });
  Object(_routes_api_routes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(app, router); //applies api routes

  app.use('/api', router); //ALL requests get routed through to index.html to ensure app is used

  app.get('*', function (req, res) {
    res.sendFile('/dist/index.html', {
      root: __dirname + "/../"
    });
  });
});

/***/ }),

/***/ "./server/routes/_api.routes.js":
/*!**************************************!*\
  !*** ./server/routes/_api.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_recipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/recipe */ "./server/models/recipe.js");

/* harmony default export */ __webpack_exports__["default"] = (function (app, router) {
  router.get('/recipe', function (req, res, next) {
    Object(_models_recipe__WEBPACK_IMPORTED_MODULE_0__["getRecipes"])(res);
  }); //Removing functionality for create/update/destroy until login built

  router.post('/recipe', function (req, res) {
    // createRecipe(req.body.recipe, res);
    res.send({
      'response': 'Functionality NYI'
    });
  });
  router.get('/recipes/:id/', function (req, res, next) {
    // getCategories(req.params.id, res);
    res.send({
      'response': 'Functionality NYI'
    });
  });
  router.post('/recipes/:id', function (req, res) {
    //updateRecipe(req.params.id, req.body.recipe, res)
    res.send({
      'response': 'Functionality NYI'
    });
  });
  router.delete('/recipes/:id', function (req, res) {
    // deleteRecipe(req.params.id, res);
    res.send({
      'response': 'Functionality NYI'
    });
  });
  router.get('/ping', function (req, res, next) {
    res.send({
      success: true
    });
  });
});

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ })

/******/ });