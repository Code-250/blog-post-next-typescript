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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var _home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/post */ \"./src/components/post.tsx\");\n/* harmony import */ var _components_Addpost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Addpost */ \"./src/components/Addpost.tsx\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/richard/Documents/blog-post-next-typescript/src/pages/_app.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar API_URL = \"https://jsonplaceholder.typicode.com/posts\";\nvar __N_SSG = true;\nfunction MyApp(_ref) {\n  _s();\n\n  var _this = this;\n\n  var posts = _ref.posts;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(posts),\n      _React$useState2 = (0,_home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),\n      postList = _React$useState2[0],\n      setPostList = _React$useState2[1];\n\n  var addPost = /*#__PURE__*/function () {\n    var _ref2 = (0,_home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e, formData) {\n      var post;\n      return _home_richard_Documents_blog_post_next_typescript_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              post = {\n                id: Math.random(),\n                title: formData.title,\n                body: formData.body\n              };\n              setPostList([post]);\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function addPost(_x, _x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }(); //   const deletePost = async (id: number) => {\n  //     const posts: blogPost[] = postList.filter((post: blogPost) => {\n  //       console.log(post);\n  //        setPostList(posts);\n  //     });\n  //   };\n  // if (!postList) return <h1>Loading....</h1>;\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"main\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n      children: \"Posts\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Addpost__WEBPACK_IMPORTED_MODULE_5__.AddPost, {\n      savePost: addPost\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), postList === null || postList === void 0 ? void 0 : postList.map(function (post) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_4__.default, {\n        post: post\n      }, post.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this);\n} // function MyApp({ Component, pageProps }) {\n//   return <Component {...pageProps} />;\n// }\n// export default MyApp;\n\n_s(MyApp, \"Q8RQiQ/EYWYnOh4haVjoWGTyTNE=\");\n\n_c = MyApp;\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBOztBQUVBLElBQU1HLE9BQWUsR0FBRyw0Q0FBeEI7O0FBRWUsU0FBU0MsS0FBVCxPQUVvQztBQUFBOztBQUFBOztBQUFBLE1BRGpEQyxLQUNpRCxRQURqREEsS0FDaUQ7O0FBQ2pELHdCQUFnQ0wsMkNBQUEsQ0FBZUssS0FBZixDQUFoQztBQUFBO0FBQUEsTUFBT0UsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFFQSxNQUFNQyxPQUFPO0FBQUEsMFZBQUcsaUJBQU9DLENBQVAsRUFBMkJDLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkRCxjQUFBQSxDQUFDLENBQUNFLGNBQUY7QUFDTUMsY0FBQUEsSUFGUSxHQUVTO0FBQ3JCQyxnQkFBQUEsRUFBRSxFQUFFQyxJQUFJLENBQUNDLE1BQUwsRUFEaUI7QUFFckJDLGdCQUFBQSxLQUFLLEVBQUVOLFFBQVEsQ0FBQ00sS0FGSztBQUdyQkMsZ0JBQUFBLElBQUksRUFBRVAsUUFBUSxDQUFDTztBQUhNLGVBRlQ7QUFPZFYsY0FBQUEsV0FBVyxDQUFDLENBQUNLLElBQUQsQ0FBRCxDQUFYOztBQVBjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVBKLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FBYixDQUhpRCxDQWFqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsc0JBQ0U7QUFBTSxhQUFTLEVBQUMsV0FBaEI7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsd0RBQUQ7QUFBUyxjQUFRLEVBQUVBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdHRixRQUhILGFBR0dBLFFBSEgsdUJBR0dBLFFBQVEsQ0FBRVksR0FBVixDQUFjLFVBQUNOLElBQUQ7QUFBQSwwQkFDYiw4REFBQyxxREFBRDtBQUFxQixZQUFJLEVBQUVBO0FBQTNCLFNBQVlBLElBQUksQ0FBQ0MsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURhO0FBQUEsS0FBZCxDQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0QsRUFjRDtBQUNBO0FBQ0E7QUFFQTs7R0FsRHdCVjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Pzg1NDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUG9zdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdFwiO1xuaW1wb3J0IHsgQWRkUG9zdCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0FkZHBvc3RcIjtcbmltcG9ydCB7IGJsb2dQb3N0IH0gZnJvbSBcIi4uL3R5cGVzL3Bvc3RUeXBlc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuY29uc3QgQVBJX1VSTDogc3RyaW5nID0gXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoe1xuICBwb3N0cyxcbn06IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlPHR5cGVvZiBnZXRTdGF0aWNQcm9wcz4pIHtcbiAgY29uc3QgW3Bvc3RMaXN0LCBzZXRQb3N0TGlzdF0gPSBSZWFjdC51c2VTdGF0ZShwb3N0cyk7XG5cbiAgY29uc3QgYWRkUG9zdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQsIGZvcm1EYXRhOiBibG9nUG9zdCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwb3N0OiBibG9nUG9zdCA9IHtcbiAgICAgIGlkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgdGl0bGU6IGZvcm1EYXRhLnRpdGxlLFxuICAgICAgYm9keTogZm9ybURhdGEuYm9keSxcbiAgICB9O1xuICAgIHNldFBvc3RMaXN0KFtwb3N0XSk7XG4gIH07XG5cbiAgLy8gICBjb25zdCBkZWxldGVQb3N0ID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgLy8gICAgIGNvbnN0IHBvc3RzOiBibG9nUG9zdFtdID0gcG9zdExpc3QuZmlsdGVyKChwb3N0OiBibG9nUG9zdCkgPT4ge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhwb3N0KTtcbiAgLy8gICAgICAgIHNldFBvc3RMaXN0KHBvc3RzKTtcbiAgLy8gICAgIH0pO1xuICAvLyAgIH07XG4gIC8vIGlmICghcG9zdExpc3QpIHJldHVybiA8aDE+TG9hZGluZy4uLi48L2gxPjtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGgxPlBvc3RzPC9oMT5cbiAgICAgIDxBZGRQb3N0IHNhdmVQb3N0PXthZGRQb3N0fSAvPlxuICAgICAge3Bvc3RMaXN0Py5tYXAoKHBvc3Q6IGJsb2dQb3N0KSA9PiAoXG4gICAgICAgIDxQb3N0cyBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICApKX1cbiAgICA8L21haW4+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIik7XG4gIGNvbnNvbGUubG9nKHJlcyk7XG4gIGNvbnN0IHBvc3RzOiBibG9nUG9zdFtdID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc29sZS5sb2cocG9zdHMpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufTtcblxuLy8gZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4vLyAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBvc3RzIiwiQWRkUG9zdCIsIkFQSV9VUkwiLCJNeUFwcCIsInBvc3RzIiwidXNlU3RhdGUiLCJwb3N0TGlzdCIsInNldFBvc3RMaXN0IiwiYWRkUG9zdCIsImUiLCJmb3JtRGF0YSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsImlkIiwiTWF0aCIsInJhbmRvbSIsInRpdGxlIiwiYm9keSIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ })

});