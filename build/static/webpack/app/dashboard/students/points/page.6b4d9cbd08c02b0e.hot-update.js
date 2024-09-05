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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_atoms_AllBtn_BtnMiniVariant_BtnMiniVariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant */ \"(app-pages-browser)/./src/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant.tsx\");\n/* harmony import */ var _components_atoms_AllBtn_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/atoms/AllBtn/Checkbox/Checkbox */ \"(app-pages-browser)/./src/components/atoms/AllBtn/Checkbox/Checkbox.tsx\");\n/* harmony import */ var _PromptHeader_PromptHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PromptHeader/PromptHeader */ \"(app-pages-browser)/./src/components/templates/Point/Prompt/PromptHeader/PromptHeader.tsx\");\n/* harmony import */ var _PenaltyHistoryListBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PenaltyHistoryListBody */ \"(app-pages-browser)/./src/components/templates/Point/Prompt/PenaltyHistoryPrompt/PenaltyHistoryListBody.tsx\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useInfiniteScroll */ \"(app-pages-browser)/./src/hooks/useInfiniteScroll.tsx\");\n/* harmony import */ var _apis_point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/apis/point */ \"(app-pages-browser)/./src/apis/point.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst PenaltyHistoryPrompt = (param)=>{\n    let { residentId, isAllChecked, setIsAllChecked } = param;\n    var _data_, _data_1;\n    _s();\n    const { allPenaltyLists, data, error, isLoadingMore, size, setSize, isEndReached } = (0,_apis_point__WEBPACK_IMPORTED_MODULE_6__.useInfinitePointsByResidentId)(residentId);\n    const handleIntersect = ()=>{\n        if (!isEndReached && !isLoadingMore) {\n            console.log(\"Requesting next page: \".concat(size + 1)); // 디버깅용 로그\n            setSize(size + 1); // 페이지 증가\n        }\n    };\n    const lastElementRef = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        isLoading: isLoadingMore !== null && isLoadingMore !== void 0 ? isLoadingMore : false,\n        isEndReached: isEndReached !== null && isEndReached !== void 0 ? isEndReached : false,\n        onIntersect: handleIntersect\n    });\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error loading data\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n            lineNumber: 35,\n            columnNumber: 12\n        }, undefined);\n    }\n    // `bonusPoint`와 `minusPoint`를 서버로부터 직접 받아와서 사용\n    const bonusPoint = data && ((_data_ = data[0]) === null || _data_ === void 0 ? void 0 : _data_.information.bonusPoint);\n    const minusPoint = data && ((_data_1 = data[0]) === null || _data_1 === void 0 ? void 0 : _data_1.information.minusPoint);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white w-767 h-422 flex flex-col items-center rounded-8 shadow-xl \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PromptHeader_PromptHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                modalName: \"pointHistory\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-709 mt-18 h-309 overflow-y-scroll border-b-1 border-b-[#323232]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                className: \"bg-white text-gray-grayscale40 w-full h-56 sticky top-0 z-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"pb-30\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"날 짜\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"사 유\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"점 수\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"종 류\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"H4 flex items-center justify-center text-center w-full\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                            className: \"mr-4\",\n                                                            children: \"전체\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                            lineNumber: 55,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_AllBtn_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                            isChecked: isAllChecked,\n                                                            setIsChecked: setIsAllChecked\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                            lineNumber: 56,\n                                                            columnNumber: 19\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            colSpan: 5,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-full h-18 border-b-1 border-b-gray-grayscale50\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: [\n                                    allPenaltyLists.length > 0 ? allPenaltyLists.map((p, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    className: \"h-19\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PenaltyHistoryListBody__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                        date: p.createdDate,\n                                                        reason: p.content,\n                                                        score: p.score,\n                                                        division: p.pointType\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            colSpan: 5,\n                                            className: \"text-center\",\n                                            children: \"No data available.\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"h-19\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: lastElementRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-17 flex ml-auto mr-29 w-393 justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_AllBtn_BtnMiniVariant_BtnMiniVariant__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        label: \"삭제\",\n                        disabled: false,\n                        selected: false,\n                        variant: \"blue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"caption-1 text-gray-grayscale50\",\n                            children: [\n                                \"TOTAL - 상점 \",\n                                bonusPoint,\n                                \"점 / 벌점 \",\n                                minusPoint,\n                                \"점\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PenaltyHistoryPrompt, \"qX0BBB9YcXIS/rOI9dpBWaD45m0=\", false, function() {\n    return [\n        _apis_point__WEBPACK_IMPORTED_MODULE_6__.useInfinitePointsByResidentId,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = PenaltyHistoryPrompt;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PenaltyHistoryPrompt);\nvar _c;\n$RefreshReg$(_c, \"PenaltyHistoryPrompt\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9Qb2ludC9Qcm9tcHQvUGVuYWx0eUhpc3RvcnlQcm9tcHQvUGVuYWx0eUhpc3RvcnlQcm9tcHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNxRjtBQUNsQjtBQUVYO0FBQ007QUFDSjtBQUNHO0FBQzVCO0FBUWpDLE1BQU1PLHVCQUF1QjtRQUFDLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyxlQUFlLEVBQVM7UUFzQnJEQyxRQUNBQTs7SUF0QjNCLE1BQU0sRUFBRUMsZUFBZSxFQUFFRCxJQUFJLEVBQUVFLEtBQUssRUFBRUMsYUFBYSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFLEdBQ2hGWiwwRUFBNkJBLENBQUNHO0lBRWhDLE1BQU1VLGtCQUFrQjtRQUN0QixJQUFJLENBQUNELGdCQUFnQixDQUFDSCxlQUFlO1lBQ25DSyxRQUFRQyxHQUFHLENBQUMseUJBQWtDLE9BQVRMLE9BQU8sS0FBTSxVQUFVO1lBQzVEQyxRQUFRRCxPQUFPLElBQUksU0FBUztRQUM5QjtJQUNGO0lBRUEsTUFBTU0saUJBQWlCakIsb0VBQWlCQSxDQUFDO1FBQ3ZDa0IsV0FBV1IsMEJBQUFBLDJCQUFBQSxnQkFBaUI7UUFDNUJHLGNBQWNBLHlCQUFBQSwwQkFBQUEsZUFBZ0I7UUFDOUJNLGFBQWFMO0lBQ2Y7SUFFQSxJQUFJTCxPQUFPO1FBQ1QscUJBQU8sOERBQUNXO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLCtDQUErQztJQUMvQyxNQUFNQyxhQUFhZCxVQUFRQSxTQUFBQSxJQUFJLENBQUMsRUFBRSxjQUFQQSw2QkFBQUEsT0FBU2UsV0FBVyxDQUFDRCxVQUFVO0lBQzFELE1BQU1FLGFBQWFoQixVQUFRQSxVQUFBQSxJQUFJLENBQUMsRUFBRSxjQUFQQSw4QkFBQUEsUUFBU2UsV0FBVyxDQUFDQyxVQUFVO0lBRTFELHFCQUNFLDhEQUFDSDtRQUFJSSxXQUFVOzswQkFDYiw4REFBQzFCLGtFQUFZQTtnQkFBQzJCLFdBQVc7Ozs7OzswQkFDekIsOERBQUNMO2dCQUFJSSxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQU1GLFdBQVU7OzBDQUNmLDhEQUFDRztnQ0FBTUgsV0FBVTs7a0RBQ2YsOERBQUNJO3dDQUFHSixXQUFVOzswREFDWiw4REFBQ0s7Z0RBQUdMLFdBQVU7MERBQUs7Ozs7OzswREFDbkIsOERBQUNLO2dEQUFHTCxXQUFVOzBEQUFLOzs7Ozs7MERBQ25CLDhEQUFDSztnREFBR0wsV0FBVTswREFBSzs7Ozs7OzBEQUNuQiw4REFBQ0s7Z0RBQUdMLFdBQVU7MERBQUs7Ozs7OzswREFDbkIsOERBQUNLOzBEQUNDLDRFQUFDVDtvREFBSUksV0FBVTs7c0VBQ2IsOERBQUNNOzREQUFHTixXQUFVO3NFQUFPOzs7Ozs7c0VBQ3JCLDhEQUFDM0Isa0ZBQVFBOzREQUFDa0MsV0FBVzFCOzREQUFjMkIsY0FBYzFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFJdkQsOERBQUNzQjtrREFDQyw0RUFBQ0M7NENBQUdJLFNBQVM7c0RBQ1gsNEVBQUNiO2dEQUFJSSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUlyQiw4REFBQ1U7O29DQUNFMUIsZ0JBQWdCMkIsTUFBTSxHQUFHLElBQ3hCM0IsZ0JBQWdCNEIsR0FBRyxDQUFDLENBQUNDLEdBQUdDLHNCQUN0Qiw4REFBQ3BDLDJDQUFRQTs7OERBRVAsOERBQUMwQjtvREFBR0osV0FBVTs7Ozs7OzhEQUNkLDhEQUFDSTs4REFDQyw0RUFBQzdCLCtEQUFzQkE7d0RBQ3JCd0MsTUFBTUYsRUFBRUcsV0FBVzt3REFDbkJDLFFBQVFKLEVBQUVLLE9BQU87d0RBQ2pCQyxPQUFPTixFQUFFTSxLQUFLO3dEQUNkQyxVQUFVUCxFQUFFUSxTQUFTOzs7Ozs7Ozs7Ozs7MkNBUlpQOzs7O3VFQWNqQiw4REFBQ1Y7a0RBQ0MsNEVBQUNrQjs0Q0FBR2IsU0FBUzs0Q0FBR1QsV0FBVTtzREFBYzs7Ozs7Ozs7Ozs7a0RBTTVDLDhEQUFDSTt3Q0FBR0osV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlsQiw4REFBQ0o7d0JBQUkyQixLQUFLOUI7Ozs7Ozs7Ozs7OzswQkFFWiw4REFBQ0c7Z0JBQUlJLFdBQVU7O2tDQUNiLDhEQUFDNUIsOEZBQWNBO3dCQUFDb0QsT0FBTzt3QkFBTUMsVUFBVTt3QkFBT0MsVUFBVTt3QkFBT0MsU0FBUzs7Ozs7O2tDQUN4RSw4REFBQy9CO3dCQUFJSSxXQUFVO2tDQUNiLDRFQUFDTTs0QkFBR04sV0FBVTs7Z0NBQWtDO2dDQUNsQ0g7Z0NBQVc7Z0NBQVFFO2dDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEQ7R0F6Rk1wQjs7UUFFRkYsc0VBQTZCQTtRQVNSRCxnRUFBaUJBOzs7S0FYcENHO0FBMkZOLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzL1BvaW50L1Byb21wdC9QZW5hbHR5SGlzdG9yeVByb21wdC9QZW5hbHR5SGlzdG9yeVByb21wdC50c3g/Njg2MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCBCdG5NaW5pVmFyaWFudCBmcm9tICdAL2NvbXBvbmVudHMvYXRvbXMvQWxsQnRuL0J0bk1pbmlWYXJpYW50L0J0bk1pbmlWYXJpYW50JztcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9BbGxCdG4vQ2hlY2tib3gvQ2hlY2tib3gnO1xyXG5pbXBvcnQgeyBSZXNpZGVudFBvaW50UmVzcG9uc2VVc2VyUG9pbnREZXRhaWxSZXMgfSBmcm9tICdAL3R5cGVzL3BvaW50JztcclxuaW1wb3J0IFByb21wdEhlYWRlciBmcm9tICcuLi9Qcm9tcHRIZWFkZXIvUHJvbXB0SGVhZGVyJztcclxuaW1wb3J0IFBlbmFsdHlIaXN0b3J5TGlzdEJvZHkgZnJvbSAnLi9QZW5hbHR5SGlzdG9yeUxpc3RCb2R5JztcclxuaW1wb3J0IHVzZUluZmluaXRlU2Nyb2xsIGZyb20gJ0AvaG9va3MvdXNlSW5maW5pdGVTY3JvbGwnO1xyXG5pbXBvcnQgeyB1c2VJbmZpbml0ZVBvaW50c0J5UmVzaWRlbnRJZCB9IGZyb20gJ0AvYXBpcy9wb2ludCc7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICByZXNpZGVudElkOiBudW1iZXI7XHJcbiAgaXNBbGxDaGVja2VkOiBib29sZWFuO1xyXG4gIHNldElzQWxsQ2hlY2tlZDogKGlzQWxsQ2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZDtcclxufTtcclxuXHJcbmNvbnN0IFBlbmFsdHlIaXN0b3J5UHJvbXB0ID0gKHsgcmVzaWRlbnRJZCwgaXNBbGxDaGVja2VkLCBzZXRJc0FsbENoZWNrZWQgfTogUHJvcHMpID0+IHtcclxuICBjb25zdCB7IGFsbFBlbmFsdHlMaXN0cywgZGF0YSwgZXJyb3IsIGlzTG9hZGluZ01vcmUsIHNpemUsIHNldFNpemUsIGlzRW5kUmVhY2hlZCB9ID1cclxuICAgIHVzZUluZmluaXRlUG9pbnRzQnlSZXNpZGVudElkKHJlc2lkZW50SWQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnRlcnNlY3QgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlzRW5kUmVhY2hlZCAmJiAhaXNMb2FkaW5nTW9yZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgUmVxdWVzdGluZyBuZXh0IHBhZ2U6ICR7c2l6ZSArIDF9YCk7IC8vIOuUlOuyhOq5heyaqSDroZzqt7hcclxuICAgICAgc2V0U2l6ZShzaXplICsgMSk7IC8vIO2OmOydtOyngCDspp3qsIBcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsYXN0RWxlbWVudFJlZiA9IHVzZUluZmluaXRlU2Nyb2xsKHtcclxuICAgIGlzTG9hZGluZzogaXNMb2FkaW5nTW9yZSA/PyBmYWxzZSwgLy8gdW5kZWZpbmVk66W8IOuwqeyngO2VmOq4sCDsnITtlbQg6riw67O46rCS7J2EIGZhbHNl66GcIOyEpOyglVxyXG4gICAgaXNFbmRSZWFjaGVkOiBpc0VuZFJlYWNoZWQgPz8gZmFsc2UsIC8vIHVuZGVmaW5lZOulvCDrsKnsp4DtlZjquLAg7JyE7ZW0IOq4sOuzuOqwkuydhCBmYWxzZeuhnCDshKTsoJVcclxuICAgIG9uSW50ZXJzZWN0OiBoYW5kbGVJbnRlcnNlY3QsXHJcbiAgfSk7XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxkaXY+RXJyb3IgbG9hZGluZyBkYXRhPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgLy8gYGJvbnVzUG9pbnRg7JmAIGBtaW51c1BvaW50YOulvCDshJzrsoTroZzrtoDthLAg7KeB7KCRIOuwm+yVhOyZgOyEnCDsgqzsmqlcclxuICBjb25zdCBib251c1BvaW50ID0gZGF0YSAmJiBkYXRhWzBdPy5pbmZvcm1hdGlvbi5ib251c1BvaW50O1xyXG4gIGNvbnN0IG1pbnVzUG9pbnQgPSBkYXRhICYmIGRhdGFbMF0/LmluZm9ybWF0aW9uLm1pbnVzUG9pbnQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctd2hpdGUgdy03NjcgaC00MjIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcm91bmRlZC04IHNoYWRvdy14bCAnPlxyXG4gICAgICA8UHJvbXB0SGVhZGVyIG1vZGFsTmFtZT17J3BvaW50SGlzdG9yeSd9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTcwOSBtdC0xOCBoLTMwOSBvdmVyZmxvdy15LXNjcm9sbCBib3JkZXItYi0xIGJvcmRlci1iLVsjMzIzMjMyXSc+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndy1mdWxsJz5cclxuICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9J2JnLXdoaXRlIHRleHQtZ3JheS1ncmF5c2NhbGU0MCB3LWZ1bGwgaC01NiBzdGlja3kgdG9wLTAgei0xJz5cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT0ncGItMzAnPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J0g0Jz7rgqAg7KecPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSdINCc+7IKsIOycoDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0nSDQnPuygkCDsiJg8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J0g0Jz7sooUg66WYPC90aD5cclxuICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nSDQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgdy1mdWxsJz5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nbXItNCc+7KCE7LK0PC9oMT5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGlzQ2hlY2tlZD17aXNBbGxDaGVja2VkfSBzZXRJc0NoZWNrZWQ9e3NldElzQWxsQ2hlY2tlZH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGggY29sU3Bhbj17NX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtMTggYm9yZGVyLWItMSBib3JkZXItYi1ncmF5LWdyYXlzY2FsZTUwJyAvPlxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7YWxsUGVuYWx0eUxpc3RzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgYWxsUGVuYWx0eUxpc3RzLm1hcCgocCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgey8qIOyXrOuwseyaqSB0ciAqL31cclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT0naC0xOScgLz5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQZW5hbHR5SGlzdG9yeUxpc3RCb2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtwLmNyZWF0ZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVhc29uPXtwLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29yZT17cC5zY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uPXtwLnBvaW50VHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs1fSBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgTm8gZGF0YSBhdmFpbGFibGUuXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKiDsl6zrsLHsmqkgdHIgKi99XHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9J2gtMTknIC8+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgey8qIOuniOyngOuniSDsmpTshozsnZggcmVmIOyEpOyglSAqL31cclxuICAgICAgICA8ZGl2IHJlZj17bGFzdEVsZW1lbnRSZWZ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtMTcgZmxleCBtbC1hdXRvIG1yLTI5IHctMzkzIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgPEJ0bk1pbmlWYXJpYW50IGxhYmVsPXsn7IKt7KCcJ30gZGlzYWJsZWQ9e2ZhbHNlfSBzZWxlY3RlZD17ZmFsc2V9IHZhcmlhbnQ9eydibHVlJ30gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjYXB0aW9uLTEgdGV4dC1ncmF5LWdyYXlzY2FsZTUwJz5cclxuICAgICAgICAgICAgVE9UQUwgLSDsg4HsoJAge2JvbnVzUG9pbnR97KCQIC8g67KM7KCQIHttaW51c1BvaW50feygkFxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVuYWx0eUhpc3RvcnlQcm9tcHQ7XHJcbiJdLCJuYW1lcyI6WyJCdG5NaW5pVmFyaWFudCIsIkNoZWNrYm94IiwiUHJvbXB0SGVhZGVyIiwiUGVuYWx0eUhpc3RvcnlMaXN0Qm9keSIsInVzZUluZmluaXRlU2Nyb2xsIiwidXNlSW5maW5pdGVQb2ludHNCeVJlc2lkZW50SWQiLCJGcmFnbWVudCIsIlBlbmFsdHlIaXN0b3J5UHJvbXB0IiwicmVzaWRlbnRJZCIsImlzQWxsQ2hlY2tlZCIsInNldElzQWxsQ2hlY2tlZCIsImRhdGEiLCJhbGxQZW5hbHR5TGlzdHMiLCJlcnJvciIsImlzTG9hZGluZ01vcmUiLCJzaXplIiwic2V0U2l6ZSIsImlzRW5kUmVhY2hlZCIsImhhbmRsZUludGVyc2VjdCIsImNvbnNvbGUiLCJsb2ciLCJsYXN0RWxlbWVudFJlZiIsImlzTG9hZGluZyIsIm9uSW50ZXJzZWN0IiwiZGl2IiwiYm9udXNQb2ludCIsImluZm9ybWF0aW9uIiwibWludXNQb2ludCIsImNsYXNzTmFtZSIsIm1vZGFsTmFtZSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwiaDEiLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJjb2xTcGFuIiwidGJvZHkiLCJsZW5ndGgiLCJtYXAiLCJwIiwiaW5kZXgiLCJkYXRlIiwiY3JlYXRlZERhdGUiLCJyZWFzb24iLCJjb250ZW50Iiwic2NvcmUiLCJkaXZpc2lvbiIsInBvaW50VHlwZSIsInRkIiwicmVmIiwibGFiZWwiLCJkaXNhYmxlZCIsInNlbGVjdGVkIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/templates/Point/Prompt/PenaltyHistoryPrompt/PenaltyHistoryPrompt.tsx\n"));

/***/ })

});