"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var _home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/post */ \"./src/components/post.tsx\");\n/* harmony import */ var _components_Addpost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Addpost */ \"./src/components/Addpost.tsx\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/richard/Documents/blog-post-next-typescript/src/pages/_app.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction MyApp(_ref) {\n  _s();\n\n  var _this = this;\n\n  var posts = _ref.posts;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__.useState(posts),\n      _React$useState2 = (0,_home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),\n      postList = _React$useState2[0],\n      setPostList = _React$useState2[1];\n\n  var addPost = /*#__PURE__*/function () {\n    var _ref2 = (0,_home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(e, formData) {\n      var post;\n      return _home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              post = {\n                id: Math.random(),\n                title: formData.title,\n                body: formData.body\n              };\n              setPostList([post].concat((0,_home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(postList)));\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function addPost(_x, _x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }(); //   const deletePost = async (id: number) => {\n  //     const posts: blogPost[] = postList.filter((post: blogPost) => {\n  //       console.log(post);\n  //        setPostList(posts);\n  //     });\n  //   };\n\n\n  if (!postList) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h1\", {\n    children: \"Loading....\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 25\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"main\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h1\", {\n      children: \"Posts\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Addpost__WEBPACK_IMPORTED_MODULE_6__.AddPost, {\n      savePost: addPost\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), postList.map(function (post) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_5__.default, {\n        post: post\n      }, post.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this);\n} // function MyApp({ Component, pageProps }) {\n//   return <Component {...pageProps} />;\n// }\n// export default MyApp;\n\n_s(MyApp, \"Q8RQiQ/EYWYnOh4haVjoWGTyTNE=\");\n\n_c = MyApp;\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7OztBQUllLFNBQVNHLEtBQVQsT0FFb0M7QUFBQTs7QUFBQTs7QUFBQSxNQURqREMsS0FDaUQsUUFEakRBLEtBQ2lEOztBQUNqRCx3QkFBZ0NKLDJDQUFBLENBQWVJLEtBQWYsQ0FBaEM7QUFBQTtBQUFBLE1BQU9FLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUEsTUFBTUMsT0FBTztBQUFBLDBWQUFHLGlCQUFPQyxDQUFQLEVBQTJCQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEQsY0FBQUEsQ0FBQyxDQUFDRSxjQUFGO0FBQ01DLGNBQUFBLElBRlEsR0FFUztBQUNyQkMsZ0JBQUFBLEVBQUUsRUFBRUMsSUFBSSxDQUFDQyxNQUFMLEVBRGlCO0FBRXJCQyxnQkFBQUEsS0FBSyxFQUFFTixRQUFRLENBQUNNLEtBRks7QUFHckJDLGdCQUFBQSxJQUFJLEVBQUVQLFFBQVEsQ0FBQ087QUFITSxlQUZUO0FBT2RWLGNBQUFBLFdBQVcsRUFBRUssSUFBRiwrS0FBV04sUUFBWCxHQUFYOztBQVBjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVBFLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FBYixDQUhpRCxDQWFqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQUksQ0FBQ0YsUUFBTCxFQUFlLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFZixzQkFDRTtBQUFNLGFBQVMsRUFBQyxXQUFoQjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyx3REFBRDtBQUFTLGNBQVEsRUFBRUU7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0dGLFFBQVEsQ0FBQ1ksR0FBVCxDQUFhLFVBQUNOLElBQUQ7QUFBQSwwQkFDWiw4REFBQyxxREFBRDtBQUFxQixZQUFJLEVBQUVBO0FBQTNCLFNBQVlBLElBQUksQ0FBQ0MsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBYixDQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0QsRUFhRDtBQUNBO0FBQ0E7QUFFQTs7R0FqRHdCVjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Pzg1NDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUG9zdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdFwiO1xuaW1wb3J0IHsgQWRkUG9zdCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0FkZHBvc3RcIjtcbmltcG9ydCB7IGJsb2dQb3N0IH0gZnJvbSBcIi4uL3R5cGVzL3Bvc3RUeXBlc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuY29uc3QgQVBJX1VSTDogc3RyaW5nID0gXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoe1xuICBwb3N0cyxcbn06IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlPHR5cGVvZiBnZXRTdGF0aWNQcm9wcz4pIHtcbiAgY29uc3QgW3Bvc3RMaXN0LCBzZXRQb3N0TGlzdF0gPSBSZWFjdC51c2VTdGF0ZShwb3N0cyk7XG5cbiAgY29uc3QgYWRkUG9zdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQsIGZvcm1EYXRhOiBibG9nUG9zdCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwb3N0OiBibG9nUG9zdCA9IHtcbiAgICAgIGlkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgdGl0bGU6IGZvcm1EYXRhLnRpdGxlLFxuICAgICAgYm9keTogZm9ybURhdGEuYm9keSxcbiAgICB9O1xuICAgIHNldFBvc3RMaXN0KFtwb3N0LCAuLi5wb3N0TGlzdF0pO1xuICB9O1xuXG4gIC8vICAgY29uc3QgZGVsZXRlUG9zdCA9IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XG4gIC8vICAgICBjb25zdCBwb3N0czogYmxvZ1Bvc3RbXSA9IHBvc3RMaXN0LmZpbHRlcigocG9zdDogYmxvZ1Bvc3QpID0+IHtcbiAgLy8gICAgICAgY29uc29sZS5sb2cocG9zdCk7XG4gIC8vICAgICAgICBzZXRQb3N0TGlzdChwb3N0cyk7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9O1xuICBpZiAoIXBvc3RMaXN0KSByZXR1cm4gPGgxPkxvYWRpbmcuLi4uPC9oMT47XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMT5Qb3N0czwvaDE+XG4gICAgICA8QWRkUG9zdCBzYXZlUG9zdD17YWRkUG9zdH0gLz5cbiAgICAgIHtwb3N0TGlzdC5tYXAoKHBvc3Q6IGJsb2dQb3N0KSA9PiAoXG4gICAgICAgIDxQb3N0cyBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICApKX1cbiAgICA8L21haW4+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQVBJX1VSTCk7XG4gIGNvbnN0IHBvc3RzOiBibG9nUG9zdFtdID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufTtcblxuLy8gZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4vLyAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBvc3RzIiwiQWRkUG9zdCIsIk15QXBwIiwicG9zdHMiLCJ1c2VTdGF0ZSIsInBvc3RMaXN0Iiwic2V0UG9zdExpc3QiLCJhZGRQb3N0IiwiZSIsImZvcm1EYXRhIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiaWQiLCJNYXRoIiwicmFuZG9tIiwidGl0bGUiLCJib2R5IiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ })

});