/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts";
exports.ids = ["pages/posts"];
exports.modules = {

/***/ "./styles/Posts.module.scss":
/*!**********************************!*\
  !*** ./styles/Posts.module.scss ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"postsList\": \"Posts_postsList__AKbLs\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvUG9zdHMubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1uZXh0anMtZXhhbXBsZS8uL3N0eWxlcy9Qb3N0cy5tb2R1bGUuc2Nzcz83MDNmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBvc3RzTGlzdFwiOiBcIlBvc3RzX3Bvc3RzTGlzdF9fQUtiTHNcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Posts.module.scss\n");

/***/ }),

/***/ "./pages/posts.js":
/*!************************!*\
  !*** ./pages/posts.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Posts_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Posts.module.scss */ \"./styles/Posts.module.scss\");\n/* harmony import */ var _styles_Posts_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Posts_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Posts = ({ posts  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleClick = (id)=>{\n        router.push(`/posts/${id}`);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Posts_module_scss__WEBPACK_IMPORTED_MODULE_3___default().posts),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"\\u0421\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043F\\u043E\\u0441\\u0442\\u043E\\u0432\"\n                }, void 0, false, {\n                    fileName: \"/home/leonov-va/Projects/react-nextjs-example/pages/posts.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_styles_Posts_module_scss__WEBPACK_IMPORTED_MODULE_3___default().postsList),\n                    children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {\n                                        children: post.title\n                                    }, void 0, false, {\n                                        fileName: \"/home/leonov-va/Projects/react-nextjs-example/pages/posts.js\",\n                                        lineNumber: 20,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Text, {\n                                        children: post.body\n                                    }, void 0, false, {\n                                        fileName: \"/home/leonov-va/Projects/react-nextjs-example/pages/posts.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        variant: \"primary\",\n                                        onClick: ()=>handleClick(post.id)\n                                        ,\n                                        children: \"Read more\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/leonov-va/Projects/react-nextjs-example/pages/posts.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/leonov-va/Projects/react-nextjs-example/pages/posts.js\",\n                                lineNumber: 19,\n                                columnNumber: 15\n                            }, undefined)\n                        }, post.id, false, {\n                            fileName: \"/home/leonov-va/Projects/react-nextjs-example/pages/posts.js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, undefined)\n                    )\n                }, void 0, false, {\n                    fileName: \"/home/leonov-va/Projects/react-nextjs-example/pages/posts.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/leonov-va/Projects/react-nextjs-example/pages/posts.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/leonov-va/Projects/react-nextjs-example/pages/posts.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);\nasync function getStaticProps(context) {\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/posts\");\n    const posts = await response.json();\n    return {\n        props: {\n            posts\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDTztBQUNFO0FBRWpELE1BQU1JLEtBQUssR0FBRyxDQUFDLEVBQUVDLEtBQUssR0FBRSxHQUFLO0lBQzNCLE1BQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtJQUUxQixNQUFNTyxXQUFXLEdBQUcsQ0FBQ0MsRUFBRSxHQUFLO1FBQzFCRixNQUFNLENBQUNHLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdCO0lBRUQscUJBQ0UsOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFFUix3RUFBWTtrQkFDMUIsNEVBQUNPLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLFdBQVc7OzhCQUN4Qiw4REFBQ0MsSUFBRTs4QkFBQyx1RkFBZTs7Ozs7NkJBQUs7OEJBQ3hCLDhEQUFDQyxJQUFFO29CQUFDRixTQUFTLEVBQUVSLDRFQUFnQjs4QkFDNUJFLEtBQUssQ0FBQ1UsR0FBRyxDQUFDLENBQUNDLElBQUksaUJBQ2QsOERBQUNkLGlEQUFJO3NDQUNILDRFQUFDQSxzREFBUzs7a0RBQ1IsOERBQUNBLHVEQUFVO2tEQUFFYyxJQUFJLENBQUNHLEtBQUs7Ozs7O2lEQUFjO2tEQUNyQyw4REFBQ2pCLHNEQUFTO2tEQUFFYyxJQUFJLENBQUNLLElBQUk7Ozs7O2lEQUFhO2tEQUNsQyw4REFBQ3BCLG1EQUFNO3dDQUFDcUIsT0FBTyxFQUFDLFNBQVM7d0NBQUNDLE9BQU8sRUFBRSxJQUFNaEIsV0FBVyxDQUFDUyxJQUFJLENBQUNSLEVBQUUsQ0FBQzt3Q0FBQTtrREFBRSxXQUUvRDs7Ozs7aURBQVM7Ozs7Ozt5Q0FDQzsyQkFQSFEsSUFBSSxDQUFDUixFQUFFOzs7O3FDQVFYO29CQUNSLENBQUM7Ozs7OzZCQUNDOzs7Ozs7cUJBQ0Q7Ozs7O2lCQUNGLENBQ047Q0FDSDtBQUVELGlFQUFlSixLQUFLLEVBQUM7QUFFZCxlQUFlb0IsY0FBYyxDQUFDQyxPQUFPLEVBQUU7SUFDNUMsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQztJQUMxRSxNQUFNdEIsS0FBSyxHQUFHLE1BQU1xQixRQUFRLENBQUNFLElBQUksRUFBRTtJQUVuQyxPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUFFeEIsS0FBSztTQUFFO0tBQ2pCLENBQUM7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW5leHRqcy1leGFtcGxlLy4vcGFnZXMvcG9zdHMuanM/NTNmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Qb3N0cy5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBQb3N0cyA9ICh7IHBvc3RzIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaWQpID0+IHtcbiAgICByb3V0ZXIucHVzaChgL3Bvc3RzLyR7aWR9YCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT7QodGC0YDQsNC90LjRhtCwINC/0L7RgdGC0L7QsjwvaDE+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5wb3N0c0xpc3R9PlxuICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgIDxDYXJkIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+e3Bvc3QudGl0bGV9PC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+e3Bvc3QuYm9keX08L0NhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2socG9zdC5pZCl9PlxuICAgICAgICAgICAgICAgICAgUmVhZCBtb3JlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiKTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwb3N0cyB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkJ1dHRvbiIsIkNhcmQiLCJzdHlsZXMiLCJQb3N0cyIsInBvc3RzIiwicm91dGVyIiwiaGFuZGxlQ2xpY2siLCJpZCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInVsIiwicG9zdHNMaXN0IiwibWFwIiwicG9zdCIsIkJvZHkiLCJUaXRsZSIsInRpdGxlIiwiVGV4dCIsImJvZHkiLCJ2YXJpYW50Iiwib25DbGljayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts.js"));
module.exports = __webpack_exports__;

})();