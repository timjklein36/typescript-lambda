(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar APIGatewayAuthorizerLambda_1 = __webpack_require__(/*! ./src/APIGatewayAuthorizerLambda */ \"./src/APIGatewayAuthorizerLambda.ts\");\nexports.APIGatewayAuthorizerLambda = APIGatewayAuthorizerLambda_1.APIGatewayAuthorizerLambda;\nvar APIGatewayEventRequestContext_1 = __webpack_require__(/*! ./src/APIGatewayEventRequestContext */ \"./src/APIGatewayEventRequestContext.ts\");\nexports.APIGatewayEventRequestContext = APIGatewayEventRequestContext_1.APIGatewayEventRequestContext;\nvar APIGatewayProxyEvent_1 = __webpack_require__(/*! ./src/APIGatewayProxyEvent */ \"./src/APIGatewayProxyEvent.ts\");\nexports.APIGatewayProxyEvent = APIGatewayProxyEvent_1.APIGatewayProxyEvent;\nvar APIGatewayProxyLambda_1 = __webpack_require__(/*! ./src/APIGatewayProxyLambda */ \"./src/APIGatewayProxyLambda.ts\");\nexports.APIGatewayProxyLambda = APIGatewayProxyLambda_1.APIGatewayProxyLambda;\nvar CloudFrontRequestLambda_1 = __webpack_require__(/*! ./src/CloudFrontRequestLambda */ \"./src/CloudFrontRequestLambda.ts\");\nexports.CloudFrontRequestLambda = CloudFrontRequestLambda_1.CloudFrontRequestLambda;\nvar CustomAuthorizerEvent_1 = __webpack_require__(/*! ./src/CustomAuthorizerEvent */ \"./src/CustomAuthorizerEvent.ts\");\nexports.CustomAuthorizerEvent = CustomAuthorizerEvent_1.CustomAuthorizerEvent;\nvar GenericLambda_1 = __webpack_require__(/*! ./src/GenericLambda */ \"./src/GenericLambda.ts\");\nexports.GenericLambda = GenericLambda_1.GenericLambda;\nvar Lambda_1 = __webpack_require__(/*! ./src/Lambda */ \"./src/Lambda.ts\");\nexports.Lambda = Lambda_1.Lambda;\nvar LambdaHandler_1 = __webpack_require__(/*! ./src/LambdaHandler */ \"./src/LambdaHandler.ts\");\nexports.LambdaHandler = LambdaHandler_1.LambdaHandler;\nvar LambdaOptions_1 = __webpack_require__(/*! ./src/LambdaOptions */ \"./src/LambdaOptions.ts\");\nexports.LambdaOptions = LambdaOptions_1.LambdaOptions;\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./src/APIGatewayAuthorizerLambda.ts":
/*!*******************************************!*\
  !*** ./src/APIGatewayAuthorizerLambda.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst GenericLambda_1 = __webpack_require__(/*! ./GenericLambda */ \"./src/GenericLambda.ts\");\nclass APIGatewayAuthorizerLambda extends GenericLambda_1.GenericLambda {\n}\nexports.APIGatewayAuthorizerLambda = APIGatewayAuthorizerLambda;\n\n\n//# sourceURL=webpack:///./src/APIGatewayAuthorizerLambda.ts?");

/***/ }),

/***/ "./src/APIGatewayEventRequestContext.ts":
/*!**********************************************!*\
  !*** ./src/APIGatewayEventRequestContext.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass APIGatewayEventRequestContext {\n    constructor() { }\n}\nexports.APIGatewayEventRequestContext = APIGatewayEventRequestContext;\n\n\n//# sourceURL=webpack:///./src/APIGatewayEventRequestContext.ts?");

/***/ }),

/***/ "./src/APIGatewayProxyEvent.ts":
/*!*************************************!*\
  !*** ./src/APIGatewayProxyEvent.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass APIGatewayProxyEvent {\n    constructor() { }\n}\nexports.APIGatewayProxyEvent = APIGatewayProxyEvent;\n\n\n//# sourceURL=webpack:///./src/APIGatewayProxyEvent.ts?");

/***/ }),

/***/ "./src/APIGatewayProxyLambda.ts":
/*!**************************************!*\
  !*** ./src/APIGatewayProxyLambda.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst GenericLambda_1 = __webpack_require__(/*! ./GenericLambda */ \"./src/GenericLambda.ts\");\nclass APIGatewayProxyLambda extends GenericLambda_1.GenericLambda {\n}\nexports.APIGatewayProxyLambda = APIGatewayProxyLambda;\n\n\n//# sourceURL=webpack:///./src/APIGatewayProxyLambda.ts?");

/***/ }),

/***/ "./src/CloudFrontRequestLambda.ts":
/*!****************************************!*\
  !*** ./src/CloudFrontRequestLambda.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst GenericLambda_1 = __webpack_require__(/*! ./GenericLambda */ \"./src/GenericLambda.ts\");\nclass CloudFrontRequestLambda extends GenericLambda_1.GenericLambda {\n}\nexports.CloudFrontRequestLambda = CloudFrontRequestLambda;\n\n\n//# sourceURL=webpack:///./src/CloudFrontRequestLambda.ts?");

/***/ }),

/***/ "./src/CustomAuthorizerEvent.ts":
/*!**************************************!*\
  !*** ./src/CustomAuthorizerEvent.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst APIGatewayEventRequestContext_1 = __webpack_require__(/*! ./APIGatewayEventRequestContext */ \"./src/APIGatewayEventRequestContext.ts\");\nclass CustomAuthorizerEvent {\n    constructor() {\n        this.headers = {};\n        this.pathParameters = {};\n        this.queryStringParameters = {};\n        this.requestContext = new APIGatewayEventRequestContext_1.APIGatewayEventRequestContext();\n    }\n}\nexports.CustomAuthorizerEvent = CustomAuthorizerEvent;\n\n\n//# sourceURL=webpack:///./src/CustomAuthorizerEvent.ts?");

/***/ }),

/***/ "./src/GenericLambda.ts":
/*!******************************!*\
  !*** ./src/GenericLambda.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass GenericLambda {\n}\nexports.GenericLambda = GenericLambda;\n\n\n//# sourceURL=webpack:///./src/GenericLambda.ts?");

/***/ }),

/***/ "./src/Lambda.ts":
/*!***********************!*\
  !*** ./src/Lambda.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction Lambda(options) {\n    return (target) => {\n        console.log(`Registered ${options.name} as a Lambda`);\n        return class extends target {\n            constructor(...args) {\n                super();\n                this.event = args[0];\n                this.context = args[1];\n                this.callback = args[2];\n            }\n        };\n    };\n}\nexports.Lambda = Lambda;\n\n\n//# sourceURL=webpack:///./src/Lambda.ts?");

/***/ }),

/***/ "./src/LambdaHandler.ts":
/*!******************************!*\
  !*** ./src/LambdaHandler.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass LambdaHandler {\n    static generate(type) {\n        const handler = (event, context, callback) => {\n            new type(event, context, callback).handler();\n        };\n        return handler;\n    }\n}\nexports.LambdaHandler = LambdaHandler;\n\n\n//# sourceURL=webpack:///./src/LambdaHandler.ts?");

/***/ }),

/***/ "./src/LambdaOptions.ts":
/*!******************************!*\
  !*** ./src/LambdaOptions.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass LambdaOptions {\n    constructor() {\n        this.name = 'Lambda Function';\n    }\n}\nexports.LambdaOptions = LambdaOptions;\n\n\n//# sourceURL=webpack:///./src/LambdaOptions.ts?");

/***/ })

/******/ })));