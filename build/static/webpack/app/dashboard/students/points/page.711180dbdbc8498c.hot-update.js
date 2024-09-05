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

/***/ "(app-pages-browser)/./src/components/templates/Point/Prompt/PenaltyHistoryPrompt/PenaltyHistoryPrompt.tsx":
/*!*********************************************************************************************!*\
  !*** ./src/components/templates/Point/Prompt/PenaltyHistoryPrompt/PenaltyHistoryPrompt.tsx ***!
  \*********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_atoms_AllBtn_BtnMiniVariant_BtnMiniVariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant */ \"(app-pages-browser)/./src/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant.tsx\");\n/* harmony import */ var _components_atoms_AllBtn_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/atoms/AllBtn/Checkbox/Checkbox */ \"(app-pages-browser)/./src/components/atoms/AllBtn/Checkbox/Checkbox.tsx\");\n/* harmony import */ var _PromptHeader_PromptHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PromptHeader/PromptHeader */ \"(app-pages-browser)/./src/components/templates/Point/Prompt/PromptHeader/PromptHeader.tsx\");\n/* harmony import */ var _PenaltyHistoryListBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PenaltyHistoryListBody */ \"(app-pages-browser)/./src/components/templates/Point/Prompt/PenaltyHistoryPrompt/PenaltyHistoryListBody.tsx\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useInfiniteScroll */ \"(app-pages-browser)/./src/hooks/useInfiniteScroll.tsx\");\n/* harmony import */ var _apis_point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/apis/point */ \"(app-pages-browser)/./src/apis/point.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst PenaltyHistoryPrompt = (param)=>{\n    let { residentId, isAllChecked, setIsAllChecked } = param;\n    _s();\n    const { allPenaltyLists, error, isLoadingMore, size, setSize, isEndReached } = (0,_apis_point__WEBPACK_IMPORTED_MODULE_6__.useInfinitePointsByResidentId)(residentId);\n    const handleIntersect = ()=>{\n        if (!isEndReached && !isLoadingMore) {\n            console.log(\"Requesting next page: \".concat(size + 1)); // 디버깅용 로그\n            setSize(size + 1); // 페이지 증가\n        }\n    };\n    const lastElementRef = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        isLoading: isLoadingMore,\n        isEndReached,\n        onIntersect: handleIntersect\n    });\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error loading data\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n            lineNumber: 35,\n            columnNumber: 12\n        }, undefined);\n    }\n    const plusSum = allPenaltyLists.filter((p)=>p.pointType === \"BONUS\").reduce((sum, p)=>sum + p.score, 0);\n    const minusSum = allPenaltyLists.filter((p)=>p.pointType === \"MINUS\").reduce((sum, p)=>sum + p.score, 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white w-767 h-422 flex flex-col items-center rounded-8 shadow-xl \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PromptHeader_PromptHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                modalName: \"pointHistory\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-709 mt-18 h-309 overflow-y-scroll border-b-1 border-b-[#323232]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                className: \"bg-white text-gray-grayscale40 w-full h-56 sticky top-0 z-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"pb-30\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"날 짜\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"사 유\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"점 수\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"종 류\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"H4 flex items-center justify-center text-center w-full\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                            className: \"mr-4\",\n                                                            children: \"전체\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                            lineNumber: 54,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_AllBtn_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                            isChecked: isAllChecked,\n                                                            setIsChecked: setIsAllChecked\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                            lineNumber: 55,\n                                                            columnNumber: 19\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            colSpan: 5,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-full h-18 border-b-1 border-b-gray-grayscale50\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: [\n                                    penaltyLists.length > 0 ? penaltyLists.map((p, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    className: \"h-19\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PenaltyHistoryListBody__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                        date: p.createdDate,\n                                                        reason: p.content,\n                                                        score: p.score,\n                                                        division: p.pointType\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            colSpan: 5,\n                                            className: \"text-center\",\n                                            children: \"No data available.\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"h-19\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: lastElementRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-17 flex ml-auto mr-29 w-393 justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_AllBtn_BtnMiniVariant_BtnMiniVariant__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        label: \"삭제\",\n                        disabled: false,\n                        selected: false,\n                        variant: \"blue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"caption-1 text-gray-grayscale50\",\n                            children: [\n                                \"TOTAL - 상점 \",\n                                plusSum,\n                                \"점 / 벌점 \",\n                                minusSum,\n                                \"점\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PenaltyHistoryPrompt, \"W8KunhHh/yHb89Gs1mmTvs1PawU=\", false, function() {\n    return [\n        _apis_point__WEBPACK_IMPORTED_MODULE_6__.useInfinitePointsByResidentId,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = PenaltyHistoryPrompt;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PenaltyHistoryPrompt);\nvar _c;\n$RefreshReg$(_c, \"PenaltyHistoryPrompt\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9Qb2ludC9Qcm9tcHQvUGVuYWx0eUhpc3RvcnlQcm9tcHQvUGVuYWx0eUhpc3RvcnlQcm9tcHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNxRjtBQUNsQjtBQUVYO0FBQ007QUFDSjtBQUNHO0FBQ2M7QUFRM0UsTUFBTU8sdUJBQXVCO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBUzs7SUFDaEYsTUFBTSxFQUFFQyxlQUFlLEVBQUVDLEtBQUssRUFBRUMsYUFBYSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFLEdBQzFFWCwwRUFBNkJBLENBQUNHO0lBRWhDLE1BQU1TLGtCQUFrQjtRQUN0QixJQUFJLENBQUNELGdCQUFnQixDQUFDSCxlQUFlO1lBQ25DSyxRQUFRQyxHQUFHLENBQUMseUJBQWtDLE9BQVRMLE9BQU8sS0FBTSxVQUFVO1lBQzVEQyxRQUFRRCxPQUFPLElBQUksU0FBUztRQUM5QjtJQUNGO0lBRUEsTUFBTU0saUJBQWlCaEIsb0VBQWlCQSxDQUFDO1FBQ3ZDaUIsV0FBV1I7UUFDWEc7UUFDQU0sYUFBYUw7SUFDZjtJQUVBLElBQUlMLE9BQU87UUFDVCxxQkFBTyw4REFBQ1c7c0JBQUk7Ozs7OztJQUNkO0lBRUEsTUFBTUMsVUFBVWIsZ0JBQWdCYyxNQUFNLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsU0FBUyxLQUFLLFNBQVNDLE1BQU0sQ0FBQyxDQUFDQyxLQUFLSCxJQUFNRyxNQUFNSCxFQUFFSSxLQUFLLEVBQUU7SUFDekcsTUFBTUMsV0FBV3BCLGdCQUFnQmMsTUFBTSxDQUFDLENBQUNDLElBQU1BLEVBQUVDLFNBQVMsS0FBSyxTQUFTQyxNQUFNLENBQUMsQ0FBQ0MsS0FBS0gsSUFBTUcsTUFBTUgsRUFBRUksS0FBSyxFQUFFO0lBRTFHLHFCQUNFLDhEQUFDUDtRQUFJUyxXQUFVOzswQkFDYiw4REFBQzlCLGtFQUFZQTtnQkFBQytCLFdBQVc7Ozs7OzswQkFDekIsOERBQUNWO2dCQUFJUyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQU1GLFdBQVU7OzBDQUNmLDhEQUFDRztnQ0FBTUgsV0FBVTs7a0RBQ2YsOERBQUNJO3dDQUFHSixXQUFVOzswREFDWiw4REFBQ0s7Z0RBQUdMLFdBQVU7MERBQUs7Ozs7OzswREFDbkIsOERBQUNLO2dEQUFHTCxXQUFVOzBEQUFLOzs7Ozs7MERBQ25CLDhEQUFDSztnREFBR0wsV0FBVTswREFBSzs7Ozs7OzBEQUNuQiw4REFBQ0s7Z0RBQUdMLFdBQVU7MERBQUs7Ozs7OzswREFDbkIsOERBQUNLOzBEQUNDLDRFQUFDZDtvREFBSVMsV0FBVTs7c0VBQ2IsOERBQUNNOzREQUFHTixXQUFVO3NFQUFPOzs7Ozs7c0VBQ3JCLDhEQUFDL0Isa0ZBQVFBOzREQUFDc0MsV0FBVzlCOzREQUFjK0IsY0FBYzlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFJdkQsOERBQUMwQjtrREFDQyw0RUFBQ0M7NENBQUdJLFNBQVM7c0RBQ1gsNEVBQUNsQjtnREFBSVMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJckIsOERBQUNVOztvQ0FDRUMsYUFBYUMsTUFBTSxHQUFHLElBQ3JCRCxhQUFhRSxHQUFHLENBQUMsQ0FBQ25CLEdBQUdvQixzQkFDbkIsOERBQUN4QywyQ0FBUUE7OzhEQUVQLDhEQUFDOEI7b0RBQUdKLFdBQVU7Ozs7Ozs4REFDZCw4REFBQ0k7OERBQ0MsNEVBQUNqQywrREFBc0JBO3dEQUNyQjRDLE1BQU1yQixFQUFFc0IsV0FBVzt3REFDbkJDLFFBQVF2QixFQUFFd0IsT0FBTzt3REFDakJwQixPQUFPSixFQUFFSSxLQUFLO3dEQUNkcUIsVUFBVXpCLEVBQUVDLFNBQVM7Ozs7Ozs7Ozs7OzsyQ0FSWm1COzs7O3VFQWNqQiw4REFBQ1Y7a0RBQ0MsNEVBQUNnQjs0Q0FBR1gsU0FBUzs0Q0FBR1QsV0FBVTtzREFBYzs7Ozs7Ozs7Ozs7a0RBTTVDLDhEQUFDSTt3Q0FBR0osV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUVUO2tDQUVULDhEQUFDVDt3QkFBSThCLEtBQUtqQzs7Ozs7Ozs7Ozs7OzBCQUVaLDhEQUFDRztnQkFBSVMsV0FBVTs7a0NBQ2IsOERBQUNoQyw4RkFBY0E7d0JBQUNzRCxPQUFPO3dCQUFNQyxVQUFVO3dCQUFPQyxVQUFVO3dCQUFPQyxTQUFTOzs7Ozs7a0NBQ3hFLDhEQUFDbEM7d0JBQUlTLFdBQVU7a0NBQ2IsNEVBQUNNOzRCQUFHTixXQUFVOztnQ0FBa0M7Z0NBQ2xDUjtnQ0FBUTtnQ0FBUU87Z0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRDtHQXhGTXhCOztRQUVGRixzRUFBNkJBO1FBU1JELGdFQUFpQkE7OztLQVhwQ0c7QUEwRk4sK0RBQWVBLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvUG9pbnQvUHJvbXB0L1BlbmFsdHlIaXN0b3J5UHJvbXB0L1BlbmFsdHlIaXN0b3J5UHJvbXB0LnRzeD82ODYzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IEJ0bk1pbmlWYXJpYW50IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9BbGxCdG4vQnRuTWluaVZhcmlhbnQvQnRuTWluaVZhcmlhbnQnO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQC9jb21wb25lbnRzL2F0b21zL0FsbEJ0bi9DaGVja2JveC9DaGVja2JveCc7XHJcbmltcG9ydCB7IFJlc2lkZW50UG9pbnRSZXNwb25zZVVzZXJQb2ludERldGFpbFJlcyB9IGZyb20gJ0AvdHlwZXMvcG9pbnQnO1xyXG5pbXBvcnQgUHJvbXB0SGVhZGVyIGZyb20gJy4uL1Byb21wdEhlYWRlci9Qcm9tcHRIZWFkZXInO1xyXG5pbXBvcnQgUGVuYWx0eUhpc3RvcnlMaXN0Qm9keSBmcm9tICcuL1BlbmFsdHlIaXN0b3J5TGlzdEJvZHknO1xyXG5pbXBvcnQgdXNlSW5maW5pdGVTY3JvbGwgZnJvbSAnQC9ob29rcy91c2VJbmZpbml0ZVNjcm9sbCc7XHJcbmltcG9ydCB7IHVzZUluZmluaXRlUG9pbnRzQnlSZXNpZGVudElkIH0gZnJvbSAnQC9hcGlzL3BvaW50JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHJlc2lkZW50SWQ6IG51bWJlcjtcclxuICBpc0FsbENoZWNrZWQ6IGJvb2xlYW47XHJcbiAgc2V0SXNBbGxDaGVja2VkOiAoaXNBbGxDaGVja2VkOiBib29sZWFuKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY29uc3QgUGVuYWx0eUhpc3RvcnlQcm9tcHQgPSAoeyByZXNpZGVudElkLCBpc0FsbENoZWNrZWQsIHNldElzQWxsQ2hlY2tlZCB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgYWxsUGVuYWx0eUxpc3RzLCBlcnJvciwgaXNMb2FkaW5nTW9yZSwgc2l6ZSwgc2V0U2l6ZSwgaXNFbmRSZWFjaGVkIH0gPVxyXG4gICAgdXNlSW5maW5pdGVQb2ludHNCeVJlc2lkZW50SWQocmVzaWRlbnRJZCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUludGVyc2VjdCA9ICgpID0+IHtcclxuICAgIGlmICghaXNFbmRSZWFjaGVkICYmICFpc0xvYWRpbmdNb3JlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBSZXF1ZXN0aW5nIG5leHQgcGFnZTogJHtzaXplICsgMX1gKTsgLy8g65SU67KE6rmF7JqpIOuhnOq3uFxyXG4gICAgICBzZXRTaXplKHNpemUgKyAxKTsgLy8g7Y6Y7J207KeAIOymneqwgFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxhc3RFbGVtZW50UmVmID0gdXNlSW5maW5pdGVTY3JvbGwoe1xyXG4gICAgaXNMb2FkaW5nOiBpc0xvYWRpbmdNb3JlLFxyXG4gICAgaXNFbmRSZWFjaGVkLFxyXG4gICAgb25JbnRlcnNlY3Q6IGhhbmRsZUludGVyc2VjdCxcclxuICB9KTtcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPGRpdj5FcnJvciBsb2FkaW5nIGRhdGE8L2Rpdj47XHJcbiAgfVxyXG5cclxuICBjb25zdCBwbHVzU3VtID0gYWxsUGVuYWx0eUxpc3RzLmZpbHRlcigocCkgPT4gcC5wb2ludFR5cGUgPT09ICdCT05VUycpLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjb3JlLCAwKTtcclxuICBjb25zdCBtaW51c1N1bSA9IGFsbFBlbmFsdHlMaXN0cy5maWx0ZXIoKHApID0+IHAucG9pbnRUeXBlID09PSAnTUlOVVMnKS5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY29yZSwgMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctd2hpdGUgdy03NjcgaC00MjIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcm91bmRlZC04IHNoYWRvdy14bCAnPlxyXG4gICAgICA8UHJvbXB0SGVhZGVyIG1vZGFsTmFtZT17J3BvaW50SGlzdG9yeSd9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTcwOSBtdC0xOCBoLTMwOSBvdmVyZmxvdy15LXNjcm9sbCBib3JkZXItYi0xIGJvcmRlci1iLVsjMzIzMjMyXSc+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndy1mdWxsJz5cclxuICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9J2JnLXdoaXRlIHRleHQtZ3JheS1ncmF5c2NhbGU0MCB3LWZ1bGwgaC01NiBzdGlja3kgdG9wLTAgei0xJz5cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT0ncGItMzAnPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J0g0Jz7rgqAg7KecPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSdINCc+7IKsIOycoDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0nSDQnPuygkCDsiJg8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J0g0Jz7sooUg66WYPC90aD5cclxuICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nSDQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgdy1mdWxsJz5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nbXItNCc+7KCE7LK0PC9oMT5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGlzQ2hlY2tlZD17aXNBbGxDaGVja2VkfSBzZXRJc0NoZWNrZWQ9e3NldElzQWxsQ2hlY2tlZH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGggY29sU3Bhbj17NX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtMTggYm9yZGVyLWItMSBib3JkZXItYi1ncmF5LWdyYXlzY2FsZTUwJyAvPlxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7cGVuYWx0eUxpc3RzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgcGVuYWx0eUxpc3RzLm1hcCgocCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgey8qIOyXrOuwseyaqSB0ciAqL31cclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT0naC0xOScgLz5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQZW5hbHR5SGlzdG9yeUxpc3RCb2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtwLmNyZWF0ZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVhc29uPXtwLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29yZT17cC5zY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uPXtwLnBvaW50VHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs1fSBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgTm8gZGF0YSBhdmFpbGFibGUuXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKiDsl6zrsLHsmqkgdHIgKi99XHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9J2gtMTknIC8+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+eycgJ31cclxuICAgICAgICB7Lyog66eI7KeA66eJIOyalOyGjOydmCByZWYg7ISk7KCVICovfVxyXG4gICAgICAgIDxkaXYgcmVmPXtsYXN0RWxlbWVudFJlZn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xNyBmbGV4IG1sLWF1dG8gbXItMjkgdy0zOTMganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICA8QnRuTWluaVZhcmlhbnQgbGFiZWw9eyfsgq3soJwnfSBkaXNhYmxlZD17ZmFsc2V9IHNlbGVjdGVkPXtmYWxzZX0gdmFyaWFudD17J2JsdWUnfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2NhcHRpb24tMSB0ZXh0LWdyYXktZ3JheXNjYWxlNTAnPlxyXG4gICAgICAgICAgICBUT1RBTCAtIOyDgeygkCB7cGx1c1N1bX3soJAgLyDrsozsoJAge21pbnVzU3VtfeygkFxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVuYWx0eUhpc3RvcnlQcm9tcHQ7XHJcbiJdLCJuYW1lcyI6WyJCdG5NaW5pVmFyaWFudCIsIkNoZWNrYm94IiwiUHJvbXB0SGVhZGVyIiwiUGVuYWx0eUhpc3RvcnlMaXN0Qm9keSIsInVzZUluZmluaXRlU2Nyb2xsIiwidXNlSW5maW5pdGVQb2ludHNCeVJlc2lkZW50SWQiLCJGcmFnbWVudCIsIlBlbmFsdHlIaXN0b3J5UHJvbXB0IiwicmVzaWRlbnRJZCIsImlzQWxsQ2hlY2tlZCIsInNldElzQWxsQ2hlY2tlZCIsImFsbFBlbmFsdHlMaXN0cyIsImVycm9yIiwiaXNMb2FkaW5nTW9yZSIsInNpemUiLCJzZXRTaXplIiwiaXNFbmRSZWFjaGVkIiwiaGFuZGxlSW50ZXJzZWN0IiwiY29uc29sZSIsImxvZyIsImxhc3RFbGVtZW50UmVmIiwiaXNMb2FkaW5nIiwib25JbnRlcnNlY3QiLCJkaXYiLCJwbHVzU3VtIiwiZmlsdGVyIiwicCIsInBvaW50VHlwZSIsInJlZHVjZSIsInN1bSIsInNjb3JlIiwibWludXNTdW0iLCJjbGFzc05hbWUiLCJtb2RhbE5hbWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsImgxIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiY29sU3BhbiIsInRib2R5IiwicGVuYWx0eUxpc3RzIiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJkYXRlIiwiY3JlYXRlZERhdGUiLCJyZWFzb24iLCJjb250ZW50IiwiZGl2aXNpb24iLCJ0ZCIsInJlZiIsImxhYmVsIiwiZGlzYWJsZWQiLCJzZWxlY3RlZCIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/templates/Point/Prompt/PenaltyHistoryPrompt/PenaltyHistoryPrompt.tsx\n"));

/***/ })

});