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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/src/canvas.ts":
/*!******************************!*\
  !*** ./public/src/canvas.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Canvas = /** @class */ (function () {\n    function Canvas(_a) {\n        var _this = this;\n        var _b = _a.id, id = _b === void 0 ? '' : _b, _c = _a.w, w = _c === void 0 ? 0 : _c, _d = _a.h, h = _d === void 0 ? 0 : _d;\n        var _e;\n        this.setSize = function (width, height) {\n            if (_this.ctx) {\n                _this.ctx.canvas.width = width;\n                _this.ctx.canvas.height = height;\n            }\n        };\n        this.display = function (squares) {\n            var _a = _this, ctx = _a.ctx, canvas = _a.canvas;\n            //\n            // if (ctx && canvas) {\n            //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n            // }\n            //\n            // for (const square of squares) {\n            //     square.display();\n            // }\n            if (ctx) {\n                _this.drawHeart(innerWidth / 2, 0, 100, 0, innerWidth, 500, \"red\");\n            }\n            requestAnimationFrame(function () { return _this.display(squares); });\n        };\n        this.drawHeart = function (fromx, fromy, tox, toy, lw, hlen, color) {\n            var ctx = _this.ctx;\n            var x = fromx;\n            var y = fromy;\n            var width = lw;\n            var height = hlen;\n            if (ctx) {\n                ctx.save();\n                ctx.beginPath();\n                var topCurveHeight = height * 0.3;\n                ctx.moveTo(x, y + topCurveHeight);\n                // top left curve\n                ctx.bezierCurveTo(x, y, x - width / 2, y, x - width / 2, y + topCurveHeight);\n                // bottom left curve\n                ctx.bezierCurveTo(x - width / 2, y + (height + topCurveHeight) / 2, x, y + (height + topCurveHeight) / 2, x, y + height);\n                // bottom right curve\n                ctx.bezierCurveTo(x, y + (height + topCurveHeight) / 2, x + width / 2, y + (height + topCurveHeight) / 2, x + width / 2, y + topCurveHeight);\n                // top right curve\n                ctx.bezierCurveTo(x + width / 2, y, x, y, x, y + topCurveHeight);\n                ctx.closePath();\n                ctx.fillStyle = color;\n                ctx.fill();\n                ctx.restore();\n            }\n        };\n        this.canvas = document.getElementById(id);\n        this.ctx = (_e = this.canvas) === null || _e === void 0 ? void 0 : _e.getContext(\"2d\");\n        this.setSize(w, h);\n    }\n    Canvas.getInstance = function () {\n        if (!Canvas.instance) {\n            Canvas.instance = new Canvas({ id: 'canvas', w: 0, h: 0 });\n        }\n        return Canvas.instance;\n    };\n    Canvas.createInstance = function (_a) {\n        var _b = _a.id, id = _b === void 0 ? '' : _b, _c = _a.w, w = _c === void 0 ? 0 : _c, _d = _a.h, h = _d === void 0 ? 0 : _d;\n        Canvas.instance = new Canvas({ id: id, w: w, h: h });\n        return Canvas.instance;\n    };\n    return Canvas;\n}());\nexports.default = Canvas;\n\n\n//# sourceURL=webpack:///./public/src/canvas.ts?");

/***/ }),

/***/ "./public/src/index.ts":
/*!*****************************!*\
  !*** ./public/src/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar canvas_1 = __importDefault(__webpack_require__(/*! ./canvas */ \"./public/src/canvas.ts\"));\nvar square_1 = __importDefault(__webpack_require__(/*! ./square */ \"./public/src/square.ts\"));\nvar squares = [];\nvar length = 10;\nvar squaresInRow = 144 || false;\nvar squaresInColumn = 72 || false;\nvar canvas = canvas_1.default.createInstance({ id: 'canvas', w: squaresInRow * length, h: squaresInColumn * length });\nfor (var x = 0; x < squaresInRow; x++) {\n    for (var y = 0; y < squaresInColumn; y++) {\n        squares[x * (squaresInRow - squaresInColumn) + y] = new square_1.default({ x: x * length, y: y * length, l: length });\n    }\n}\ncanvas.display(squares);\n\n\n//# sourceURL=webpack:///./public/src/index.ts?");

/***/ }),

/***/ "./public/src/square.ts":
/*!******************************!*\
  !*** ./public/src/square.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar canvas_1 = __importDefault(__webpack_require__(/*! ./canvas */ \"./public/src/canvas.ts\"));\nvar Square = /** @class */ (function () {\n    function Square(_a) {\n        var _this = this;\n        var _b = _a.x, x = _b === void 0 ? 0 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c, _d = _a.l, l = _d === void 0 ? 0 : _d;\n        this.canvas = canvas_1.default.getInstance();\n        this.display = function () {\n            var ctx = _this.canvas.ctx;\n            if (ctx) {\n                ctx.beginPath();\n                ctx.strokeStyle = 'gray';\n                ctx.rect(_this.x, _this.y, _this.l, _this.l);\n                ctx.stroke();\n                ctx.closePath();\n            }\n        };\n        this.x = x;\n        this.y = y;\n        this.l = l;\n    }\n    return Square;\n}());\nexports.default = Square;\n\n\n//# sourceURL=webpack:///./public/src/square.ts?");

/***/ })

/******/ });