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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_hulk_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/hulk.png */ \"./src/images/hulk.png\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Character = /*#__PURE__*/function () {\n  function Character(dimensions, ctx) {\n    _classCallCheck(this, Character);\n\n    this.ctx = ctx;\n    this.dimensions = dimensions;\n    this.x = this.dimensions.width;\n    this.y = this.dimensions.height;\n    this.sprite = {\n      x: 0,\n      y: 0,\n      width: 40,\n      height: 56,\n      frameX: 0,\n      frameY: 0,\n      speed: 4,\n      moving: false\n    };\n    this.playerSprite = new Image();\n    this.playerSprite.src = _images_hulk_png__WEBPACK_IMPORTED_MODULE_0__;\n    this.key = [];\n  }\n\n  _createClass(Character, [{\n    key: \"animate\",\n    value: function animate() {\n      this.drawSprite(this.playerSprite, this.sprite.width * this.sprite.frameX, this.sprite.height * this.sprite.frameY, this.sprite.width, this.sprite.height, this.sprite.x, this.sprite.y, this.sprite.width, this.sprite.height);\n      this.movePlayer();\n      this.playerFrame();\n    }\n  }, {\n    key: \"drawSprite\",\n    value: function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {\n      this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);\n    }\n  }, {\n    key: \"keyDown\",\n    value: function keyDown(e) {\n      this.key[e.keyCode] = true;\n      console.log(this.key);\n    }\n  }, {\n    key: \"keyUp\",\n    value: function keyUp(e) {\n      delete this.key[e.keyCode];\n    }\n  }, {\n    key: \"movePlayer\",\n    value: function movePlayer() {\n      if (this.key[68]) {\n        this.sprite.x += this.sprite.speed;\n        this.sprite.frameY = 2;\n      }\n\n      if (this.key[65]) {\n        this.sprite.x -= this.sprite.speed;\n        this.sprite.frameY = 1;\n      }\n\n      if (this.key[87]) {\n        this.sprite.y -= this.sprite.speed;\n        this.sprite.frameY = 3;\n      }\n\n      if (this.key[83]) {\n        this.sprite.y += this.sprite.speed;\n        this.sprite.frameY = 0;\n      }\n    }\n  }, {\n    key: \"playerFrame\",\n    value: function playerFrame() {\n      if (this.sprite.frameX < 3) {\n        this.sprite.frameX += 1;\n      } else {\n        this.sprite.frameX = 0;\n      }\n    }\n  }]);\n\n  return Character;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUwsQ0FBUyxFQUFULENBQUosRUFBa0I7QUFDZCxhQUFLUixNQUFMLENBQVlGLENBQVosSUFBaUIsS0FBS0UsTUFBTCxDQUFZRyxLQUE3QjtBQUNBLGFBQUtILE1BQUwsQ0FBWUUsTUFBWixHQUFxQixDQUFyQjtBQUF3Qjs7QUFDNUIsVUFBSSxLQUFLTSxHQUFMLENBQVMsRUFBVCxDQUFKLEVBQWtCO0FBQ2QsYUFBS1IsTUFBTCxDQUFZRixDQUFaLElBQWlCLEtBQUtFLE1BQUwsQ0FBWUcsS0FBN0I7QUFDQSxhQUFLSCxNQUFMLENBQVlFLE1BQVosR0FBcUIsQ0FBckI7QUFBd0I7QUFDL0I7OztXQUVELHVCQUFjO0FBQ1YsVUFBSSxLQUFLRixNQUFMLENBQVlDLE1BQVosR0FBcUIsQ0FBekIsRUFBNEI7QUFDeEIsYUFBS0QsTUFBTCxDQUFZQyxNQUFaLElBQXNCLENBQXRCO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBS0QsTUFBTCxDQUFZQyxNQUFaLEdBQXFCLENBQXJCO0FBQ0g7QUFDSjs7Ozs7O0FBR0wsK0RBQWVSLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9VbmRlckNvb2tlZC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcz8xODE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwbGF5ZXIgZnJvbSBcIi4uL2ltYWdlcy9odWxrLnBuZ1wiO1xuXG5jbGFzcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICAgICAgdGhpcy54ID0gdGhpcy5kaW1lbnNpb25zLndpZHRoO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuc3ByaXRlID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB3aWR0aDogNDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDU2LFxuICAgICAgICAgICAgZnJhbWVYOiAwLFxuICAgICAgICAgICAgZnJhbWVZOiAwLFxuICAgICAgICAgICAgc3BlZWQ6IDQsXG4gICAgICAgICAgICBtb3Zpbmc6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gcGxheWVyO1xuXG4gICAgICAgIHRoaXMua2V5ID0gW107XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMucGxheWVyU3ByaXRlLCBcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLndpZHRoICogdGhpcy5zcHJpdGUuZnJhbWVYLFxuICAgICAgICAgICAgdGhpcy5zcHJpdGUuaGVpZ2h0ICogdGhpcy5zcHJpdGUuZnJhbWVZLCBcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLndpZHRoLCB0aGlzLnNwcml0ZS5oZWlnaHQsIFxuICAgICAgICAgICAgdGhpcy5zcHJpdGUueCwgdGhpcy5zcHJpdGUueSwgXG4gICAgICAgICAgICB0aGlzLnNwcml0ZS53aWR0aCwgdGhpcy5zcHJpdGUuaGVpZ2h0KTsgIFxuICAgICAgICB0aGlzLm1vdmVQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJGcmFtZSgpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3U3ByaXRlKGltZywgc1gsIHNZLCBzVywgc0gsIGRYLCBkWSwgZFcsIGRIKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWcsIHNYLCBzWSwgc1csIHNILCBkWCwgZFksIGRXLCBkSCk7XG4gICAgfVxuXG4gICAga2V5RG93bihlKSB7XG4gICAgICAgIHRoaXMua2V5W2Uua2V5Q29kZV0gPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmtleSk7XG4gICAgfVxuXG4gICAga2V5VXAoZSkge1xuICAgICAgICBkZWxldGUgdGhpcy5rZXlbZS5rZXlDb2RlXTtcbiAgICB9XG5cbiAgICBtb3ZlUGxheWVyKCkge1xuICAgICAgICBpZiAodGhpcy5rZXlbNjhdKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS54ICs9IHRoaXMuc3ByaXRlLnNwZWVkXG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5mcmFtZVkgPSAyIH1cbiAgICAgICAgaWYgKHRoaXMua2V5WzY1XSkge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUueCAtPSB0aGlzLnNwcml0ZS5zcGVlZFxuICAgICAgICAgICAgdGhpcy5zcHJpdGUuZnJhbWVZID0gMSB9XG4gICAgICAgIGlmICh0aGlzLmtleVs4N10pIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnkgLT0gdGhpcy5zcHJpdGUuc3BlZWRcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLmZyYW1lWSA9IDMgfVxuICAgICAgICBpZiAodGhpcy5rZXlbODNdKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS55ICs9IHRoaXMuc3ByaXRlLnNwZWVkXG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5mcmFtZVkgPSAwIH1cbiAgICB9XG5cbiAgICBwbGF5ZXJGcmFtZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlLmZyYW1lWCA8IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLmZyYW1lWCArPSAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5mcmFtZVggPSAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7Il0sIm5hbWVzIjpbInBsYXllciIsIkNoYXJhY3RlciIsImRpbWVuc2lvbnMiLCJjdHgiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0Iiwic3ByaXRlIiwiZnJhbWVYIiwiZnJhbWVZIiwic3BlZWQiLCJtb3ZpbmciLCJwbGF5ZXJTcHJpdGUiLCJJbWFnZSIsInNyYyIsImtleSIsImRyYXdTcHJpdGUiLCJtb3ZlUGxheWVyIiwicGxheWVyRnJhbWUiLCJpbWciLCJzWCIsInNZIiwic1ciLCJzSCIsImRYIiwiZFkiLCJkVyIsImRIIiwiZHJhd0ltYWdlIiwiZSIsImtleUNvZGUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/character.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ \"./src/scripts/character.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar UnderCooked = /*#__PURE__*/function () {\n  function UnderCooked(canvas) {\n    _classCallCheck(this, UnderCooked);\n\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.character = new _character__WEBPACK_IMPORTED_MODULE_0__.default(this.dimensions, this.ctx);\n    this.animate();\n    this.registerEvents();\n  }\n\n  _createClass(UnderCooked, [{\n    key: \"animate\",\n    value: function animate() {\n      this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n      this.character.animate();\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }, {\n    key: \"registerEvents\",\n    value: function registerEvents() {\n      window.addEventListener(\"keydown\", this.keyDownHandler.bind(this));\n      window.addEventListener(\"keyup\", this.keyUpHandler.bind(this));\n    }\n  }, {\n    key: \"keyDownHandler\",\n    value: function keyDownHandler(e) {\n      this.character.keyDown(e);\n    }\n  }, {\n    key: \"keyUpHandler\",\n    value: function keyUpHandler(e) {\n      this.character.keyUp(e);\n    }\n  }]);\n\n  return UnderCooked;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UnderCooked);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0lBRU1DO0FBQ0YsdUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsU0FBS0MsR0FBTCxHQUFXRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWDtBQUNBLFNBQUtDLFVBQUwsR0FBa0I7QUFBRUMsTUFBQUEsS0FBSyxFQUFFSixNQUFNLENBQUNJLEtBQWhCO0FBQXVCQyxNQUFBQSxNQUFNLEVBQUVMLE1BQU0sQ0FBQ0s7QUFBdEMsS0FBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlSLCtDQUFKLENBQWMsS0FBS0ssVUFBbkIsRUFBK0IsS0FBS0YsR0FBcEMsQ0FBakI7QUFDQSxTQUFLTSxPQUFMO0FBQ0EsU0FBS0MsY0FBTDtBQUNIOzs7O1dBRUQsbUJBQVU7QUFDTixXQUFLUCxHQUFMLENBQVNRLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS04sVUFBTCxDQUFnQkMsS0FBekMsRUFBZ0QsS0FBS0QsVUFBTCxDQUFnQkUsTUFBaEU7QUFDQSxXQUFLQyxTQUFMLENBQWVDLE9BQWY7QUFDQUcsTUFBQUEscUJBQXFCLENBQUMsS0FBS0gsT0FBTCxDQUFhSSxJQUFiLENBQWtCLElBQWxCLENBQUQsQ0FBckI7QUFDSDs7O1dBRUQsMEJBQWlCO0FBQ2JDLE1BQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsS0FBS0MsY0FBTCxDQUFvQkgsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBbkM7QUFDQUMsTUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxLQUFLRSxZQUFMLENBQWtCSixJQUFsQixDQUF1QixJQUF2QixDQUFqQztBQUNIOzs7V0FFRCx3QkFBZUssQ0FBZixFQUFrQjtBQUNkLFdBQUtWLFNBQUwsQ0FBZVcsT0FBZixDQUF1QkQsQ0FBdkI7QUFDSDs7O1dBRUQsc0JBQWFBLENBQWIsRUFBZ0I7QUFDWixXQUFLVixTQUFMLENBQWVZLEtBQWYsQ0FBcUJGLENBQXJCO0FBQ0g7Ozs7OztBQUdMLCtEQUFlakIsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL1VuZGVyQ29va2VkLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vY2hhcmFjdGVyXCI7XG5cbmNsYXNzIFVuZGVyQ29va2VkIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIodGhpcy5kaW1lbnNpb25zLCB0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIuYW5pbWF0ZSgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpKVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcykpXG4gICAgfVxuXG4gICAga2V5RG93bkhhbmRsZXIoZSkge1xuICAgICAgICB0aGlzLmNoYXJhY3Rlci5rZXlEb3duKGUpO1xuICAgIH1cblxuICAgIGtleVVwSGFuZGxlcihlKSB7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyLmtleVVwKGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVW5kZXJDb29rZWQ7Il0sIm5hbWVzIjpbIkNoYXJhY3RlciIsIlVuZGVyQ29va2VkIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsImNoYXJhY3RlciIsImFuaW1hdGUiLCJyZWdpc3RlckV2ZW50cyIsImNsZWFyUmVjdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJlIiwia2V5RG93biIsImtleVVwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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