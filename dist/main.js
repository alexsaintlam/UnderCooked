/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById('canvas1');\n  new _scripts_game__WEBPACK_IMPORTED_MODULE_0__.default(canvas);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWY7QUFDQSxNQUFJSixrREFBSixDQUFnQkcsTUFBaEI7QUFFSCxDQUpEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVW5kZXJDb29rZWQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVW5kZXJDb29rZWQgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMxJyk7XG4gICAgbmV3IFVuZGVyQ29va2VkKGNhbnZhcyk7XG4gICAgICAgIFxufSk7XG5cbiJdLCJuYW1lcyI6WyJVbmRlckNvb2tlZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/character.js":
/*!**********************************!*\
  !*** ./src/scripts/character.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_hulk_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/hulk.png */ \"./src/images/hulk.png\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Character = /*#__PURE__*/function () {\n  function Character(dimensions, ctx) {\n    _classCallCheck(this, Character);\n\n    this.ctx = ctx;\n    this.dimensions = dimensions;\n    this.x = this.dimensions.width;\n    this.y = this.dimensions.height;\n    this.sprite = {\n      x: 0,\n      y: 0,\n      width: 40,\n      height: 56,\n      frameX: 0,\n      frameY: 0,\n      speed: 9,\n      moving: false\n    };\n    this.playerSprite = new Image();\n    this.playerSprite.src = _images_hulk_png__WEBPACK_IMPORTED_MODULE_0__;\n    this.key = [];\n  }\n\n  _createClass(Character, [{\n    key: \"animate\",\n    value: function animate() {\n      this.drawSprite(this.playerSprite, 0, 0, this.sprite.width, this.sprite.height, 200, 200, this.sprite.width, this.sprite.height);\n    }\n  }, {\n    key: \"drawSprite\",\n    value: function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {\n      this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);\n    } // keyDownHandler(e) {\n    // this.key[e.keyCode] = true;\n    // console.log(this.key);\n    // }\n\n  }]);\n\n  return Character;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaGFyYWN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7SUFFTUM7QUFDRixxQkFBWUMsVUFBWixFQUF3QkMsR0FBeEIsRUFBNkI7QUFBQTs7QUFDekIsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0QsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLRSxDQUFMLEdBQVMsS0FBS0YsVUFBTCxDQUFnQkcsS0FBekI7QUFDQSxTQUFLQyxDQUFMLEdBQVMsS0FBS0osVUFBTCxDQUFnQkssTUFBekI7QUFFQSxTQUFLQyxNQUFMLEdBQWM7QUFDVkosTUFBQUEsQ0FBQyxFQUFFLENBRE87QUFFVkUsTUFBQUEsQ0FBQyxFQUFFLENBRk87QUFHVkQsTUFBQUEsS0FBSyxFQUFFLEVBSEc7QUFJVkUsTUFBQUEsTUFBTSxFQUFFLEVBSkU7QUFLVkUsTUFBQUEsTUFBTSxFQUFFLENBTEU7QUFNVkMsTUFBQUEsTUFBTSxFQUFFLENBTkU7QUFPVkMsTUFBQUEsS0FBSyxFQUFFLENBUEc7QUFRVkMsTUFBQUEsTUFBTSxFQUFFO0FBUkUsS0FBZDtBQVdBLFNBQUtDLFlBQUwsR0FBb0IsSUFBSUMsS0FBSixFQUFwQjtBQUNBLFNBQUtELFlBQUwsQ0FBa0JFLEdBQWxCLEdBQXdCZiw2Q0FBeEI7QUFFQSxTQUFLZ0IsR0FBTCxHQUFXLEVBQVg7QUFDSDs7OztXQUVELG1CQUFVO0FBQ04sV0FBS0MsVUFBTCxDQUFnQixLQUFLSixZQUFyQixFQUFtQyxDQUFuQyxFQUFzQyxDQUF0QyxFQUF5QyxLQUFLTCxNQUFMLENBQVlILEtBQXJELEVBQTRELEtBQUtHLE1BQUwsQ0FBWUQsTUFBeEUsRUFBZ0YsR0FBaEYsRUFBcUYsR0FBckYsRUFBMEYsS0FBS0MsTUFBTCxDQUFZSCxLQUF0RyxFQUE2RyxLQUFLRyxNQUFMLENBQVlELE1BQXpIO0FBQ0g7OztXQUVELG9CQUFXVyxHQUFYLEVBQWdCQyxFQUFoQixFQUFvQkMsRUFBcEIsRUFBd0JDLEVBQXhCLEVBQTRCQyxFQUE1QixFQUFnQ0MsRUFBaEMsRUFBb0NDLEVBQXBDLEVBQXdDQyxFQUF4QyxFQUE0Q0MsRUFBNUMsRUFBZ0Q7QUFDNUMsV0FBS3ZCLEdBQUwsQ0FBU3dCLFNBQVQsQ0FBbUJULEdBQW5CLEVBQXdCQyxFQUF4QixFQUE0QkMsRUFBNUIsRUFBZ0NDLEVBQWhDLEVBQW9DQyxFQUFwQyxFQUF3Q0MsRUFBeEMsRUFBNENDLEVBQTVDLEVBQWdEQyxFQUFoRCxFQUFvREMsRUFBcEQ7QUFDSCxNQUVEO0FBQ0k7QUFDQTtBQUNKOzs7Ozs7O0FBR0osK0RBQWV6QixTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVW5kZXJDb29rZWQvLi9zcmMvc2NyaXB0cy9jaGFyYWN0ZXIuanM/MTgxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGxheWVyIGZyb20gXCIuLi9pbWFnZXMvaHVsay5wbmdcIjtcblxuY2xhc3MgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuZGltZW5zaW9ucy53aWR0aDtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5kaW1lbnNpb25zLmhlaWdodDtcblxuICAgICAgICB0aGlzLnNwcml0ZSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDQwLFxuICAgICAgICAgICAgaGVpZ2h0OiA1NixcbiAgICAgICAgICAgIGZyYW1lWDogMCxcbiAgICAgICAgICAgIGZyYW1lWTogMCxcbiAgICAgICAgICAgIHNwZWVkOiA5LFxuICAgICAgICAgICAgbW92aW5nOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucGxheWVyU3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IHBsYXllcjtcblxuICAgICAgICB0aGlzLmtleSA9IFtdO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLnBsYXllclNwcml0ZSwgMCwgMCwgdGhpcy5zcHJpdGUud2lkdGgsIHRoaXMuc3ByaXRlLmhlaWdodCwgMjAwLCAyMDAsIHRoaXMuc3ByaXRlLndpZHRoLCB0aGlzLnNwcml0ZS5oZWlnaHQpOyAgXG4gICAgfVxuXG4gICAgZHJhd1Nwcml0ZShpbWcsIHNYLCBzWSwgc1csIHNILCBkWCwgZFksIGRXLCBkSCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1nLCBzWCwgc1ksIHNXLCBzSCwgZFgsIGRZLCBkVywgZEgpO1xuICAgIH1cblxuICAgIC8vIGtleURvd25IYW5kbGVyKGUpIHtcbiAgICAgICAgLy8gdGhpcy5rZXlbZS5rZXlDb2RlXSA9IHRydWU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMua2V5KTtcbiAgICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjsiXSwibmFtZXMiOlsicGxheWVyIiwiQ2hhcmFjdGVyIiwiZGltZW5zaW9ucyIsImN0eCIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJzcHJpdGUiLCJmcmFtZVgiLCJmcmFtZVkiLCJzcGVlZCIsIm1vdmluZyIsInBsYXllclNwcml0ZSIsIkltYWdlIiwic3JjIiwia2V5IiwiZHJhd1Nwcml0ZSIsImltZyIsInNYIiwic1kiLCJzVyIsInNIIiwiZFgiLCJkWSIsImRXIiwiZEgiLCJkcmF3SW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/character.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ \"./src/scripts/character.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar UnderCooked = /*#__PURE__*/function () {\n  function UnderCooked(canvas) {\n    _classCallCheck(this, UnderCooked);\n\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.character = new _character__WEBPACK_IMPORTED_MODULE_0__.default(this.dimensions, this.ctx);\n    this.animate(); // this.registerEvents();\n  }\n\n  _createClass(UnderCooked, [{\n    key: \"animate\",\n    value: function animate() {\n      this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n      this.character.animate();\n      requestAnimationFrame(this.animate.bind(this));\n    } // registerEvents() {\n    //     this.ctx.canvas.addEventListener(\"keydown\", this.character.keyDownHandler)\n    //     this.ctx.canvas.addEventListener(\"keyup\", )\n    // }\n\n  }]);\n\n  return UnderCooked;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UnderCooked);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0lBRU1DO0FBQ0YsdUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsU0FBS0MsR0FBTCxHQUFXRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWDtBQUNBLFNBQUtDLFVBQUwsR0FBa0I7QUFBRUMsTUFBQUEsS0FBSyxFQUFFSixNQUFNLENBQUNJLEtBQWhCO0FBQXVCQyxNQUFBQSxNQUFNLEVBQUVMLE1BQU0sQ0FBQ0s7QUFBdEMsS0FBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlSLCtDQUFKLENBQWMsS0FBS0ssVUFBbkIsRUFBK0IsS0FBS0YsR0FBcEMsQ0FBakI7QUFDQSxTQUFLTSxPQUFMLEdBSmdCLENBS2hCO0FBQ0g7Ozs7V0FFRCxtQkFBVTtBQUNOLFdBQUtOLEdBQUwsQ0FBU08sU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLTCxVQUFMLENBQWdCQyxLQUF6QyxFQUFnRCxLQUFLRCxVQUFMLENBQWdCRSxNQUFoRTtBQUNBLFdBQUtDLFNBQUwsQ0FBZUMsT0FBZjtBQUNBRSxNQUFBQSxxQkFBcUIsQ0FBQyxLQUFLRixPQUFMLENBQWFHLElBQWIsQ0FBa0IsSUFBbEIsQ0FBRCxDQUFyQjtBQUNILE1BRUQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFHSiwrREFBZVgsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL1VuZGVyQ29va2VkLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vY2hhcmFjdGVyXCI7XG5cbmNsYXNzIFVuZGVyQ29va2VkIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIodGhpcy5kaW1lbnNpb25zLCB0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpXG4gICAgICAgIC8vIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIuYW5pbWF0ZSgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8vIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIC8vICAgICB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5jaGFyYWN0ZXIua2V5RG93bkhhbmRsZXIpXG4gICAgLy8gICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKVxuICAgIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVW5kZXJDb29rZWQ7Il0sIm5hbWVzIjpbIkNoYXJhY3RlciIsIlVuZGVyQ29va2VkIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsImNoYXJhY3RlciIsImFuaW1hdGUiLCJjbGVhclJlY3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9VbmRlckNvb2tlZC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./src/images/hulk.png":
/*!*****************************!*\
  !*** ./src/images/hulk.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2ab1b6a65da76665c191.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;