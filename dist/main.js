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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_hulk_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/hulk.png */ \"./src/images/hulk.png\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Character = /*#__PURE__*/function () {\n  function Character(dimensions, ctx) {\n    _classCallCheck(this, Character);\n\n    this.ctx = ctx;\n    this.dimensions = dimensions;\n    this.x = this.dimensions.width;\n    this.y = this.dimensions.height;\n    this.sprite = {\n      x: 0,\n      y: 0,\n      width: 40,\n      height: 56,\n      frameX: 0,\n      frameY: 0,\n      speed: 8,\n      moving: false\n    };\n    this.playerSprite = new Image();\n    this.playerSprite.src = _images_hulk_png__WEBPACK_IMPORTED_MODULE_0__;\n    this.key = [];\n  }\n\n  _createClass(Character, [{\n    key: \"animate\",\n    value: function animate() {\n      this.drawSprite(this.playerSprite, this.sprite.width * this.sprite.frameX, this.sprite.height * this.sprite.frameY, this.sprite.width, this.sprite.height, this.sprite.x, this.sprite.y, this.sprite.width, this.sprite.height);\n      this.movePlayer();\n      this.playerFrame();\n    }\n  }, {\n    key: \"drawSprite\",\n    value: function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {\n      this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);\n    }\n  }, {\n    key: \"keyDown\",\n    value: function keyDown(e) {\n      this.key[e.keyCode] = true;\n      console.log(this.key);\n      this.sprite.moving = true;\n    }\n  }, {\n    key: \"keyUp\",\n    value: function keyUp(e) {\n      delete this.key[e.keyCode];\n      this.sprite.moving = false;\n    }\n  }, {\n    key: \"movePlayer\",\n    value: function movePlayer() {\n      if (this.key[68]) {\n        this.sprite.x += this.sprite.speed;\n        this.sprite.frameY = 2;\n        this.sprite.moving = true;\n      }\n\n      if (this.key[65]) {\n        this.sprite.x -= this.sprite.speed;\n        this.sprite.frameY = 1;\n        this.sprite.moving = true;\n      }\n\n      if (this.key[87]) {\n        this.sprite.y -= this.sprite.speed;\n        this.sprite.frameY = 3;\n        this.sprite.moving = true;\n      }\n\n      if (this.key[83]) {\n        this.sprite.y += this.sprite.speed;\n        this.sprite.frameY = 0;\n        this.sprite.moving = true;\n      }\n    }\n  }, {\n    key: \"playerFrame\",\n    value: function playerFrame() {\n      if (this.sprite.frameX < 3 && this.sprite.moving) {\n        this.sprite.frameX += 1;\n      } else {\n        this.sprite.frameX = 0;\n      }\n    }\n  }]);\n\n  return Character;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2QsYUFBS1IsTUFBTCxDQUFZSixDQUFaLElBQWlCLEtBQUtJLE1BQUwsQ0FBWUcsS0FBN0I7QUFDQSxhQUFLSCxNQUFMLENBQVlFLE1BQVosR0FBcUIsQ0FBckI7QUFDQSxhQUFLRixNQUFMLENBQVlJLE1BQVosR0FBcUIsSUFBckI7QUFBMkI7O0FBQy9CLFVBQUksS0FBS0ksR0FBTCxDQUFTLEVBQVQsQ0FBSixFQUFrQjtBQUNkLGFBQUtSLE1BQUwsQ0FBWUYsQ0FBWixJQUFpQixLQUFLRSxNQUFMLENBQVlHLEtBQTdCO0FBQ0EsYUFBS0gsTUFBTCxDQUFZRSxNQUFaLEdBQXFCLENBQXJCO0FBQ0EsYUFBS0YsTUFBTCxDQUFZSSxNQUFaLEdBQXFCLElBQXJCO0FBQTJCOztBQUMvQixVQUFJLEtBQUtJLEdBQUwsQ0FBUyxFQUFULENBQUosRUFBa0I7QUFDZCxhQUFLUixNQUFMLENBQVlGLENBQVosSUFBaUIsS0FBS0UsTUFBTCxDQUFZRyxLQUE3QjtBQUNBLGFBQUtILE1BQUwsQ0FBWUUsTUFBWixHQUFxQixDQUFyQjtBQUNBLGFBQUtGLE1BQUwsQ0FBWUksTUFBWixHQUFxQixJQUFyQjtBQUEyQjtBQUNsQzs7O1dBRUQsdUJBQWM7QUFDVixVQUFJLEtBQUtKLE1BQUwsQ0FBWUMsTUFBWixHQUFxQixDQUFyQixJQUEwQixLQUFLRCxNQUFMLENBQVlJLE1BQTFDLEVBQWtEO0FBQzlDLGFBQUtKLE1BQUwsQ0FBWUMsTUFBWixJQUFzQixDQUF0QjtBQUNILE9BRkQsTUFFTztBQUNILGFBQUtELE1BQUwsQ0FBWUMsTUFBWixHQUFxQixDQUFyQjtBQUNIO0FBQ0o7Ozs7OztBQUdMLCtEQUFlUixTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVW5kZXJDb29rZWQvLi9zcmMvc2NyaXB0cy9jaGFyYWN0ZXIuanM/MTgxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGxheWVyIGZyb20gXCIuLi9pbWFnZXMvaHVsay5wbmdcIjtcblxuY2xhc3MgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuZGltZW5zaW9ucy53aWR0aDtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5kaW1lbnNpb25zLmhlaWdodDtcblxuICAgICAgICB0aGlzLnNwcml0ZSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDQwLFxuICAgICAgICAgICAgaGVpZ2h0OiA1NixcbiAgICAgICAgICAgIGZyYW1lWDogMCxcbiAgICAgICAgICAgIGZyYW1lWTogMCxcbiAgICAgICAgICAgIHNwZWVkOiA4LFxuICAgICAgICAgICAgbW92aW5nOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucGxheWVyU3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IHBsYXllcjtcblxuICAgICAgICB0aGlzLmtleSA9IFtdO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLnBsYXllclNwcml0ZSwgXG4gICAgICAgICAgICB0aGlzLnNwcml0ZS53aWR0aCAqIHRoaXMuc3ByaXRlLmZyYW1lWCxcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLmhlaWdodCAqIHRoaXMuc3ByaXRlLmZyYW1lWSwgXG4gICAgICAgICAgICB0aGlzLnNwcml0ZS53aWR0aCwgdGhpcy5zcHJpdGUuaGVpZ2h0LCBcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLngsIHRoaXMuc3ByaXRlLnksIFxuICAgICAgICAgICAgdGhpcy5zcHJpdGUud2lkdGgsIHRoaXMuc3ByaXRlLmhlaWdodCk7ICBcbiAgICAgICAgdGhpcy5tb3ZlUGxheWVyKCk7XG4gICAgICAgIHRoaXMucGxheWVyRnJhbWUoKTtcbiAgICB9XG5cbiAgICBkcmF3U3ByaXRlKGltZywgc1gsIHNZLCBzVywgc0gsIGRYLCBkWSwgZFcsIGRIKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWcsIHNYLCBzWSwgc1csIHNILCBkWCwgZFksIGRXLCBkSCk7XG4gICAgfVxuXG4gICAga2V5RG93bihlKSB7XG4gICAgICAgIHRoaXMua2V5W2Uua2V5Q29kZV0gPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmtleSk7XG4gICAgICAgIHRoaXMuc3ByaXRlLm1vdmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAga2V5VXAoZSkge1xuICAgICAgICBkZWxldGUgdGhpcy5rZXlbZS5rZXlDb2RlXTtcbiAgICAgICAgdGhpcy5zcHJpdGUubW92aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbW92ZVBsYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMua2V5WzY4XSkge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUueCArPSB0aGlzLnNwcml0ZS5zcGVlZFxuICAgICAgICAgICAgdGhpcy5zcHJpdGUuZnJhbWVZID0gMiBcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLm1vdmluZyA9IHRydWUgfVxuICAgICAgICBpZiAodGhpcy5rZXlbNjVdKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS54IC09IHRoaXMuc3ByaXRlLnNwZWVkXG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5mcmFtZVkgPSAxXG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5tb3ZpbmcgPSB0cnVlIH1cbiAgICAgICAgaWYgKHRoaXMua2V5Wzg3XSkge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUueSAtPSB0aGlzLnNwcml0ZS5zcGVlZFxuICAgICAgICAgICAgdGhpcy5zcHJpdGUuZnJhbWVZID0gM1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUubW92aW5nID0gdHJ1ZSB9XG4gICAgICAgIGlmICh0aGlzLmtleVs4M10pIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnkgKz0gdGhpcy5zcHJpdGUuc3BlZWRcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLmZyYW1lWSA9IDBcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLm1vdmluZyA9IHRydWUgfVxuICAgIH1cblxuICAgIHBsYXllckZyYW1lKCkge1xuICAgICAgICBpZiAodGhpcy5zcHJpdGUuZnJhbWVYIDwgMyAmJiB0aGlzLnNwcml0ZS5tb3ZpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLmZyYW1lWCArPSAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5mcmFtZVggPSAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7Il0sIm5hbWVzIjpbInBsYXllciIsIkNoYXJhY3RlciIsImRpbWVuc2lvbnMiLCJjdHgiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0Iiwic3ByaXRlIiwiZnJhbWVYIiwiZnJhbWVZIiwic3BlZWQiLCJtb3ZpbmciLCJwbGF5ZXJTcHJpdGUiLCJJbWFnZSIsInNyYyIsImtleSIsImRyYXdTcHJpdGUiLCJtb3ZlUGxheWVyIiwicGxheWVyRnJhbWUiLCJpbWciLCJzWCIsInNZIiwic1ciLCJzSCIsImRYIiwiZFkiLCJkVyIsImRIIiwiZHJhd0ltYWdlIiwiZSIsImtleUNvZGUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/character.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ \"./src/scripts/character.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar UnderCooked = /*#__PURE__*/function () {\n  function UnderCooked(canvas) {\n    _classCallCheck(this, UnderCooked);\n\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.character = new _character__WEBPACK_IMPORTED_MODULE_0__.default(this.dimensions, this.ctx);\n    this.fpsInterval = \"\";\n    this.then = \"\";\n    this.startTime = \"\";\n    this.now = \"\";\n    this.then = \"\";\n    this.elapsed = \"\";\n    this.startAnimate(15);\n    this.registerEvents();\n  }\n\n  _createClass(UnderCooked, [{\n    key: \"startAnimate\",\n    value: function startAnimate(fps) {\n      this.fpsInterval = 1000 / fps;\n      this.then = Date.now();\n      this.startTime = this.then;\n      this.animate();\n    }\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      requestAnimationFrame(this.animate.bind(this));\n      this.now = Date.now();\n      this.elapsed = this.now - this.then;\n\n      if (this.elapsed > this.fpsInterval) {\n        this.then = this.now - this.elapsed % this.fpsInterval;\n        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n        this.character.animate();\n      }\n    }\n  }, {\n    key: \"registerEvents\",\n    value: function registerEvents() {\n      window.addEventListener(\"keydown\", this.keyDownHandler.bind(this));\n      window.addEventListener(\"keyup\", this.keyUpHandler.bind(this));\n    }\n  }, {\n    key: \"keyDownHandler\",\n    value: function keyDownHandler(e) {\n      this.character.keyDown(e);\n    }\n  }, {\n    key: \"keyUpHandler\",\n    value: function keyUpHandler(e) {\n      this.character.keyUp(e);\n    }\n  }]);\n\n  return UnderCooked;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UnderCooked);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0lBRU1DO0FBQ0YsdUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsU0FBS0MsR0FBTCxHQUFXRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWDtBQUNBLFNBQUtDLFVBQUwsR0FBa0I7QUFBRUMsTUFBQUEsS0FBSyxFQUFFSixNQUFNLENBQUNJLEtBQWhCO0FBQXVCQyxNQUFBQSxNQUFNLEVBQUVMLE1BQU0sQ0FBQ0s7QUFBdEMsS0FBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlSLCtDQUFKLENBQWMsS0FBS0ssVUFBbkIsRUFBK0IsS0FBS0YsR0FBcEMsQ0FBakI7QUFDQSxTQUFLTSxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEVBQVo7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEVBQVg7QUFDQSxTQUFLRixJQUFMLEdBQVksRUFBWjtBQUNBLFNBQUtHLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0MsWUFBTCxDQUFrQixFQUFsQjtBQUNBLFNBQUtDLGNBQUw7QUFDSDs7OztXQUVELHNCQUFhQyxHQUFiLEVBQWtCO0FBQ2QsV0FBS1AsV0FBTCxHQUFtQixPQUFPTyxHQUExQjtBQUNBLFdBQUtOLElBQUwsR0FBWU8sSUFBSSxDQUFDTCxHQUFMLEVBQVo7QUFDQSxXQUFLRCxTQUFMLEdBQWlCLEtBQUtELElBQXRCO0FBQ0EsV0FBS1EsT0FBTDtBQUNIOzs7V0FFRCxtQkFBVTtBQUNOQyxNQUFBQSxxQkFBcUIsQ0FBQyxLQUFLRCxPQUFMLENBQWFFLElBQWIsQ0FBa0IsSUFBbEIsQ0FBRCxDQUFyQjtBQUNBLFdBQUtSLEdBQUwsR0FBV0ssSUFBSSxDQUFDTCxHQUFMLEVBQVg7QUFDQSxXQUFLQyxPQUFMLEdBQWUsS0FBS0QsR0FBTCxHQUFXLEtBQUtGLElBQS9COztBQUVBLFVBQUksS0FBS0csT0FBTCxHQUFlLEtBQUtKLFdBQXhCLEVBQXFDO0FBQ2pDLGFBQUtDLElBQUwsR0FBWSxLQUFLRSxHQUFMLEdBQVksS0FBS0MsT0FBTCxHQUFlLEtBQUtKLFdBQTVDO0FBQ0EsYUFBS04sR0FBTCxDQUFTa0IsU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLaEIsVUFBTCxDQUFnQkMsS0FBekMsRUFBZ0QsS0FBS0QsVUFBTCxDQUFnQkUsTUFBaEU7QUFDQSxhQUFLQyxTQUFMLENBQWVVLE9BQWY7QUFDSDtBQUNKOzs7V0FFRCwwQkFBaUI7QUFDYkksTUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxLQUFLQyxjQUFMLENBQW9CSixJQUFwQixDQUF5QixJQUF6QixDQUFuQztBQUNBRSxNQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLEtBQUtFLFlBQUwsQ0FBa0JMLElBQWxCLENBQXVCLElBQXZCLENBQWpDO0FBQ0g7OztXQUVELHdCQUFlTSxDQUFmLEVBQWtCO0FBQ2QsV0FBS2xCLFNBQUwsQ0FBZW1CLE9BQWYsQ0FBdUJELENBQXZCO0FBQ0g7OztXQUVELHNCQUFhQSxDQUFiLEVBQWdCO0FBQ1osV0FBS2xCLFNBQUwsQ0FBZW9CLEtBQWYsQ0FBcUJGLENBQXJCO0FBQ0g7Ozs7OztBQUdMLCtEQUFlekIsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL1VuZGVyQ29va2VkLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vY2hhcmFjdGVyXCI7XG5cbmNsYXNzIFVuZGVyQ29va2VkIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIodGhpcy5kaW1lbnNpb25zLCB0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMuZnBzSW50ZXJ2YWwgPSBcIlwiO1xuICAgICAgICB0aGlzLnRoZW4gPSBcIlwiO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IFwiXCI7XG4gICAgICAgIHRoaXMubm93ID0gXCJcIjtcbiAgICAgICAgdGhpcy50aGVuID0gXCJcIjtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gXCJcIjtcbiAgICAgICAgdGhpcy5zdGFydEFuaW1hdGUoMTUpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc3RhcnRBbmltYXRlKGZwcykge1xuICAgICAgICB0aGlzLmZwc0ludGVydmFsID0gMTAwMCAvIGZwcztcbiAgICAgICAgdGhpcy50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLnRoZW47XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5ub3cgLSB0aGlzLnRoZW47XG5cbiAgICAgICAgaWYgKHRoaXMuZWxhcHNlZCA+IHRoaXMuZnBzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZWxhcHNlZCAlIHRoaXMuZnBzSW50ZXJ2YWwpO1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5hbmltYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIGtleURvd25IYW5kbGVyKGUpIHtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIua2V5RG93bihlKTtcbiAgICB9XG5cbiAgICBrZXlVcEhhbmRsZXIoZSkge1xuICAgICAgICB0aGlzLmNoYXJhY3Rlci5rZXlVcChlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVuZGVyQ29va2VkOyJdLCJuYW1lcyI6WyJDaGFyYWN0ZXIiLCJVbmRlckNvb2tlZCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJjaGFyYWN0ZXIiLCJmcHNJbnRlcnZhbCIsInRoZW4iLCJzdGFydFRpbWUiLCJub3ciLCJlbGFwc2VkIiwic3RhcnRBbmltYXRlIiwicmVnaXN0ZXJFdmVudHMiLCJmcHMiLCJEYXRlIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJjbGVhclJlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJlIiwia2V5RG93biIsImtleVVwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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