"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/students/points/page",{

/***/ "(app-pages-browser)/./src/components/templates/Point/Prompt/PenaltyHistoryPrompt/PenaltyHistoryListBody.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/components/templates/Point/Prompt/PenaltyHistoryPrompt/PenaltyHistoryListBody.tsx ***!
  \***********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_atoms_AllBtn_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/atoms/AllBtn/Checkbox/Checkbox */ \"(app-pages-browser)/./src/components/atoms/AllBtn/Checkbox/Checkbox.tsx\");\n\n\n\nconst PenaltyHistoryList = (param)=>{\n    let { date, reason, score, division } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"H4 text-gray-grayscale30 bg-red-re50\",\n                    children: date\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryListBody.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryListBody.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"w-260 border-b-1 border-b-gray-grayscale50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"H4 text-gray-grayscale50\",\n                    children: reason\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryListBody.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryListBody.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"H4 text-gray-grayscale50\",\n                    children: [\n                        score,\n                        \"점\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryListBody.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryListBody.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"\".concat(division === \"MINUS\" ? \"text-red-red20\" : \"text-green-green20\", \" H4 \"),\n                    children: division === \"MINUS\" ? \"벌 점\" : \"상 점\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryListBody.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryListBody.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_AllBtn_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    isChecked: false,\n                    setIsChecked: ()=>console.log(\"흥\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryListBody.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryListBody.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = PenaltyHistoryList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PenaltyHistoryList);\nvar _c;\n$RefreshReg$(_c, \"PenaltyHistoryList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9Qb2ludC9Qcm9tcHQvUGVuYWx0eUhpc3RvcnlQcm9tcHQvUGVuYWx0eUhpc3RvcnlMaXN0Qm9keS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBQ3lDO0FBU25FLE1BQU1FLHFCQUFxQjtRQUFDLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBUztJQUNsRSxxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUNaLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFBd0NMOzs7Ozs7Ozs7OzswQkFFeEQsOERBQUNJO2dCQUFHQyxXQUFVOzBCQUNaLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFBNEJKOzs7Ozs7Ozs7OzswQkFFNUMsOERBQUNHO2dCQUFHQyxXQUFVOzBCQUNaLDRFQUFDQztvQkFBR0QsV0FBVTs7d0JBQTRCSDt3QkFBTTs7Ozs7Ozs7Ozs7OzBCQUVsRCw4REFBQ0U7Z0JBQUdDLFdBQVU7MEJBQ1osNEVBQUNDO29CQUFHRCxXQUFXLEdBQWtFLE9BQS9ERixhQUFhLFVBQVUsbUJBQW1CLHNCQUFxQjs4QkFDOUVBLGFBQWEsVUFBVSxRQUFROzs7Ozs7Ozs7OzswQkFHcEMsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUNaLDRFQUFDUCxrRkFBUUE7b0JBQUNTLFdBQVc7b0JBQU9DLGNBQWMsSUFBTUMsUUFBUUMsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBSXBFO0tBdEJNWDtBQXdCTiwrREFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9Qb2ludC9Qcm9tcHQvUGVuYWx0eUhpc3RvcnlQcm9tcHQvUGVuYWx0eUhpc3RvcnlMaXN0Qm9keS50c3g/YmUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQC9jb21wb25lbnRzL2F0b21zL0FsbEJ0bi9DaGVja2JveC9DaGVja2JveCc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGRhdGU6IHN0cmluZztcclxuICByZWFzb246IHN0cmluZztcclxuICBzY29yZTogbnVtYmVyO1xyXG4gIGRpdmlzaW9uOiAnQk9OVVMnIHwgJ01JTlVTJztcclxufTtcclxuXHJcbmNvbnN0IFBlbmFsdHlIaXN0b3J5TGlzdCA9ICh7IGRhdGUsIHJlYXNvbiwgc2NvcmUsIGRpdmlzaW9uIH06IFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDx0ZCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdINCB0ZXh0LWdyYXktZ3JheXNjYWxlMzAgYmctcmVkLXJlNTAnPntkYXRlfTwvaDE+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZCBjbGFzc05hbWU9J3ctMjYwIGJvcmRlci1iLTEgYm9yZGVyLWItZ3JheS1ncmF5c2NhbGU1MCc+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nSDQgdGV4dC1ncmF5LWdyYXlzY2FsZTUwJz57cmVhc29ufTwvaDE+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdINCB0ZXh0LWdyYXktZ3JheXNjYWxlNTAnPntzY29yZX3soJA8L2gxPlxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YCR7ZGl2aXNpb24gPT09ICdNSU5VUycgPyAndGV4dC1yZWQtcmVkMjAnIDogJ3RleHQtZ3JlZW4tZ3JlZW4yMCd9IEg0IGB9PlxyXG4gICAgICAgICAge2RpdmlzaW9uID09PSAnTUlOVVMnID8gJ+uyjCDsoJAnIDogJ+yDgSDsoJAnfVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZCBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgIDxDaGVja2JveCBpc0NoZWNrZWQ9e2ZhbHNlfSBzZXRJc0NoZWNrZWQ9eygpID0+IGNvbnNvbGUubG9nKCftnaUnKX0gLz5cclxuICAgICAgPC90ZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZW5hbHR5SGlzdG9yeUxpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNoZWNrYm94IiwiUGVuYWx0eUhpc3RvcnlMaXN0IiwiZGF0ZSIsInJlYXNvbiIsInNjb3JlIiwiZGl2aXNpb24iLCJ0ZCIsImNsYXNzTmFtZSIsImgxIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/templates/Point/Prompt/PenaltyHistoryPrompt/PenaltyHistoryListBody.tsx\n"));

/***/ })

});