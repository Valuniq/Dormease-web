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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_atoms_AllBtn_BtnMiniVariant_BtnMiniVariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant */ \"(app-pages-browser)/./src/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant.tsx\");\n/* harmony import */ var _components_atoms_AllBtn_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/atoms/AllBtn/Checkbox/Checkbox */ \"(app-pages-browser)/./src/components/atoms/AllBtn/Checkbox/Checkbox.tsx\");\n/* harmony import */ var _PromptHeader_PromptHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PromptHeader/PromptHeader */ \"(app-pages-browser)/./src/components/templates/Point/Prompt/PromptHeader/PromptHeader.tsx\");\n/* harmony import */ var _PenaltyHistoryListBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PenaltyHistoryListBody */ \"(app-pages-browser)/./src/components/templates/Point/Prompt/PenaltyHistoryPrompt/PenaltyHistoryListBody.tsx\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useInfiniteScroll */ \"(app-pages-browser)/./src/hooks/useInfiniteScroll.tsx\");\n/* harmony import */ var _apis_point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/apis/point */ \"(app-pages-browser)/./src/apis/point.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst PenaltyHistoryPrompt = (param)=>{\n    let { residentId, isAllChecked, setIsAllChecked } = param;\n    var _data_information_pageInfo, _data_information, _data_information_pageInfo1, _data_information1, _data_information2, _data_information3;\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1);\n    const { data, error, isLoading } = (0,_apis_point__WEBPACK_IMPORTED_MODULE_6__.usePointsByResidentId)(residentId, page);\n    const [penaltyLists, setPenaltyLists] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        if (data && Array.isArray(data.information.userPointDetailRes)) {\n            setPenaltyLists((prev)=>[\n                    ...prev,\n                    ...data.information.userPointDetailRes\n                ]);\n        }\n    }, [\n        data\n    ]);\n    const lastElementRef = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        isLoading,\n        isEndReached: (data === null || data === void 0 ? void 0 : (_data_information = data.information) === null || _data_information === void 0 ? void 0 : (_data_information_pageInfo = _data_information.pageInfo) === null || _data_information_pageInfo === void 0 ? void 0 : _data_information_pageInfo.currentPage) !== undefined && (data === null || data === void 0 ? void 0 : (_data_information1 = data.information) === null || _data_information1 === void 0 ? void 0 : (_data_information_pageInfo1 = _data_information1.pageInfo) === null || _data_information_pageInfo1 === void 0 ? void 0 : _data_information_pageInfo1.totalPage) !== undefined ? ((_data_information2 = data.information) === null || _data_information2 === void 0 ? void 0 : _data_information2.pageInfo.currentPage) >= ((_data_information3 = data.information) === null || _data_information3 === void 0 ? void 0 : _data_information3.pageInfo.totalPage) : false,\n        onIntersect: ()=>setPage((prev)=>prev + 1)\n    });\n    const plusSum = data === null || data === void 0 ? void 0 : data.information.bonusPoint;\n    const minusSum = data === null || data === void 0 ? void 0 : data.information.minusPoint;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white w-767 h-422 flex flex-col items-center rounded-8 shadow-xl \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PromptHeader_PromptHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                modalName: \"pointHistory\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" w-709 mt-18 h-309 overflow-y-scroll border-b-1 border-b-[#323232]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"w-full \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                className: \"bg-white text-gray-grayscale40  w-full h-56 sticky top-0 z-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"pb-30\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"날 짜\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"사 유\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"점 수\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"종 류\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"H4 flex items-center justify-center text-center w-full\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                            className: \"mr-4\",\n                                                            children: \"전체\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                            lineNumber: 53,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_AllBtn_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                            isChecked: isAllChecked,\n                                                            setIsChecked: setIsAllChecked\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                            lineNumber: 54,\n                                                            columnNumber: 19\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            colSpan: 5,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-full h-18 border-b-1 border-b-gray-grayscale50\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: [\n                                    penaltyLists.map((p, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    className: \"h-19\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PenaltyHistoryListBody__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                        date: p.createdAt,\n                                                        reason: p.content,\n                                                        score: p.score,\n                                                        division: p.pointType === 0 ? \"BONUS\" : \"MINUS\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        }, undefined)),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"h-19\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: lastElementRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-17 flex ml-auto mr-29 w-393 justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_AllBtn_BtnMiniVariant_BtnMiniVariant__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        label: \"삭제\",\n                        disabled: false,\n                        selected: false,\n                        variant: \"blue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"caption-1 text-gray-grayscale50\",\n                            children: [\n                                \"TOTAL - 상점 \",\n                                plusSum,\n                                \"점 / 벌점 \",\n                                minusSum,\n                                \"점\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PenaltyHistoryPrompt, \"f3e+KIlHHykOe+u4afCi42KJay4=\", false, function() {\n    return [\n        _apis_point__WEBPACK_IMPORTED_MODULE_6__.usePointsByResidentId,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = PenaltyHistoryPrompt;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PenaltyHistoryPrompt);\nvar _c;\n$RefreshReg$(_c, \"PenaltyHistoryPrompt\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9Qb2ludC9Qcm9tcHQvUGVuYWx0eUhpc3RvcnlQcm9tcHQvUGVuYWx0eUhpc3RvcnlQcm9tcHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNxRjtBQUNsQjtBQUVYO0FBQ007QUFDSjtBQUNMO0FBQ0M7QUFRdEQsTUFBTVMsdUJBQXVCO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBUztRQWM1RUMsNEJBQUFBLG1CQUEwREEsNkJBQUFBLG9CQUN0REEsb0JBQTBDQTs7SUFkbEQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sRUFBRU8sSUFBSSxFQUFFRyxLQUFLLEVBQUVDLFNBQVMsRUFBRSxHQUFHWixrRUFBcUJBLENBQUNLLFlBQVlJO0lBQ3JFLE1BQU0sQ0FBQ0ksY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUE0QyxFQUFFO0lBRTlGQyxnREFBU0EsQ0FBQztRQUNSLElBQUlNLFFBQVFPLE1BQU1DLE9BQU8sQ0FBQ1IsS0FBS1MsV0FBVyxDQUFDQyxrQkFBa0IsR0FBRztZQUM5REosZ0JBQWdCLENBQUNLLE9BQVM7dUJBQUlBO3VCQUFTWCxLQUFLUyxXQUFXLENBQUNDLGtCQUFrQjtpQkFBQztRQUM3RTtJQUNGLEdBQUc7UUFBQ1Y7S0FBSztJQUVULE1BQU1ZLGlCQUFpQnJCLG9FQUFpQkEsQ0FBQztRQUN2Q2E7UUFDQVMsY0FDRWIsQ0FBQUEsaUJBQUFBLDRCQUFBQSxvQkFBQUEsS0FBTVMsV0FBVyxjQUFqQlQseUNBQUFBLDZCQUFBQSxrQkFBbUJjLFFBQVEsY0FBM0JkLGlEQUFBQSwyQkFBNkJlLFdBQVcsTUFBS0MsYUFBYWhCLENBQUFBLGlCQUFBQSw0QkFBQUEscUJBQUFBLEtBQU1TLFdBQVcsY0FBakJULDBDQUFBQSw4QkFBQUEsbUJBQW1CYyxRQUFRLGNBQTNCZCxrREFBQUEsNEJBQTZCaUIsU0FBUyxNQUFLRCxZQUNqR2hCLEVBQUFBLHFCQUFBQSxLQUFLUyxXQUFXLGNBQWhCVCx5Q0FBQUEsbUJBQWtCYyxRQUFRLENBQUNDLFdBQVcsT0FBSWYscUJBQUFBLEtBQUtTLFdBQVcsY0FBaEJULHlDQUFBQSxtQkFBa0JjLFFBQVEsQ0FBQ0csU0FBUyxJQUM5RTtRQUNOQyxhQUFhLElBQU1oQixRQUFRLENBQUNTLE9BQVNBLE9BQU87SUFDOUM7SUFFQSxNQUFNUSxVQUFVbkIsaUJBQUFBLDJCQUFBQSxLQUFNUyxXQUFXLENBQUNXLFVBQVU7SUFDNUMsTUFBTUMsV0FBV3JCLGlCQUFBQSwyQkFBQUEsS0FBTVMsV0FBVyxDQUFDYSxVQUFVO0lBRTdDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ25DLGtFQUFZQTtnQkFBQ29DLFdBQVc7Ozs7OzswQkFDekIsOERBQUNGO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQU1GLFdBQVU7OzBDQUNmLDhEQUFDRztnQ0FBTUgsV0FBVTs7a0RBQ2YsOERBQUNJO3dDQUFHSixXQUFVOzswREFDWiw4REFBQ0s7Z0RBQUdMLFdBQVU7MERBQUs7Ozs7OzswREFDbkIsOERBQUNLO2dEQUFHTCxXQUFVOzBEQUFLOzs7Ozs7MERBQ25CLDhEQUFDSztnREFBR0wsV0FBVTswREFBSzs7Ozs7OzBEQUNuQiw4REFBQ0s7Z0RBQUdMLFdBQVU7MERBQUs7Ozs7OzswREFDbkIsOERBQUNLOzBEQUNDLDRFQUFDTjtvREFBSUMsV0FBVTs7c0VBQ2IsOERBQUNNOzREQUFHTixXQUFVO3NFQUFPOzs7Ozs7c0VBQ3JCLDhEQUFDcEMsa0ZBQVFBOzREQUFDMkMsV0FBV2pDOzREQUFja0MsY0FBY2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFJdkQsOERBQUM2QjtrREFDQyw0RUFBQ0M7NENBQUdJLFNBQVM7c0RBQ1gsNEVBQUNWO2dEQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUlyQiw4REFBQ1U7O29DQUNFN0IsYUFBYThCLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxzQkFDcEIsOERBQUMxQywyQ0FBUUE7OzhEQUVQLDhEQUFDaUM7b0RBQUdKLFdBQVU7Ozs7Ozs4REFDZCw4REFBQ0k7OERBQ0MsNEVBQUN0QywrREFBc0JBO3dEQUNyQmdELE1BQU1GLEVBQUVHLFNBQVM7d0RBQ2pCQyxRQUFRSixFQUFFSyxPQUFPO3dEQUNqQkMsT0FBT04sRUFBRU0sS0FBSzt3REFDZEMsVUFBVVAsRUFBRVEsU0FBUyxLQUFLLElBQUksVUFBVTs7Ozs7Ozs7Ozs7OzJDQVIvQlA7Ozs7O2tEQWNqQiw4REFBQ1Q7d0NBQUdKLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJbEIsOERBQUNEO3dCQUFJc0IsS0FBS2pDOzs7Ozs7Ozs7Ozs7MEJBRVosOERBQUNXO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ3JDLDhGQUFjQTt3QkFBQzJELE9BQU87d0JBQU1DLFVBQVU7d0JBQU9DLFVBQVU7d0JBQU9DLFNBQVM7Ozs7OztrQ0FDeEUsOERBQUMxQjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ007NEJBQUdOLFdBQVU7O2dDQUFrQztnQ0FDbENMO2dDQUFRO2dDQUFRRTtnQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpEO0dBL0VNekI7O1FBRStCSiw4REFBcUJBO1FBU2pDRCxnRUFBaUJBOzs7S0FYcENLO0FBaUZOLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzL1BvaW50L1Byb21wdC9QZW5hbHR5SGlzdG9yeVByb21wdC9QZW5hbHR5SGlzdG9yeVByb21wdC50c3g/Njg2MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCBCdG5NaW5pVmFyaWFudCBmcm9tICdAL2NvbXBvbmVudHMvYXRvbXMvQWxsQnRuL0J0bk1pbmlWYXJpYW50L0J0bk1pbmlWYXJpYW50JztcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9BbGxCdG4vQ2hlY2tib3gvQ2hlY2tib3gnO1xyXG5pbXBvcnQgeyBSZXNpZGVudFBvaW50UmVzcG9uc2VVc2VyUG9pbnREZXRhaWxSZXMgfSBmcm9tICdAL3R5cGVzL3BvaW50JztcclxuaW1wb3J0IFByb21wdEhlYWRlciBmcm9tICcuLi9Qcm9tcHRIZWFkZXIvUHJvbXB0SGVhZGVyJztcclxuaW1wb3J0IFBlbmFsdHlIaXN0b3J5TGlzdEJvZHkgZnJvbSAnLi9QZW5hbHR5SGlzdG9yeUxpc3RCb2R5JztcclxuaW1wb3J0IHVzZUluZmluaXRlU2Nyb2xsIGZyb20gJ0AvaG9va3MvdXNlSW5maW5pdGVTY3JvbGwnO1xyXG5pbXBvcnQgeyB1c2VQb2ludHNCeVJlc2lkZW50SWQgfSBmcm9tICdAL2FwaXMvcG9pbnQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgcmVzaWRlbnRJZDogbnVtYmVyO1xyXG4gIGlzQWxsQ2hlY2tlZDogYm9vbGVhbjtcclxuICBzZXRJc0FsbENoZWNrZWQ6IChpc0FsbENoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jb25zdCBQZW5hbHR5SGlzdG9yeVByb21wdCA9ICh7IHJlc2lkZW50SWQsIGlzQWxsQ2hlY2tlZCwgc2V0SXNBbGxDaGVja2VkIH06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VQb2ludHNCeVJlc2lkZW50SWQocmVzaWRlbnRJZCwgcGFnZSk7XHJcbiAgY29uc3QgW3BlbmFsdHlMaXN0cywgc2V0UGVuYWx0eUxpc3RzXSA9IHVzZVN0YXRlPFJlc2lkZW50UG9pbnRSZXNwb25zZVVzZXJQb2ludERldGFpbFJlc1tdPihbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGF0YSAmJiBBcnJheS5pc0FycmF5KGRhdGEuaW5mb3JtYXRpb24udXNlclBvaW50RGV0YWlsUmVzKSkge1xyXG4gICAgICBzZXRQZW5hbHR5TGlzdHMoKHByZXYpID0+IFsuLi5wcmV2LCAuLi5kYXRhLmluZm9ybWF0aW9uLnVzZXJQb2ludERldGFpbFJlc10pO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSk7XHJcblxyXG4gIGNvbnN0IGxhc3RFbGVtZW50UmVmID0gdXNlSW5maW5pdGVTY3JvbGwoe1xyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgaXNFbmRSZWFjaGVkOlxyXG4gICAgICBkYXRhPy5pbmZvcm1hdGlvbj8ucGFnZUluZm8/LmN1cnJlbnRQYWdlICE9PSB1bmRlZmluZWQgJiYgZGF0YT8uaW5mb3JtYXRpb24/LnBhZ2VJbmZvPy50b3RhbFBhZ2UgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gZGF0YS5pbmZvcm1hdGlvbj8ucGFnZUluZm8uY3VycmVudFBhZ2UgPj0gZGF0YS5pbmZvcm1hdGlvbj8ucGFnZUluZm8udG90YWxQYWdlXHJcbiAgICAgICAgOiBmYWxzZSwgLy8g7ZiE7J6sIO2OmOydtOyngOyZgCDstJ0g7Y6Y7J207KeAIOyImOulvCDruYTqtZDtlZjsl6wg7Iqk7YGs66Gk7J20IOuBneuCrOuKlOyngCDsl6zrtoDrpbwg6rKw7KCVXHJcbiAgICBvbkludGVyc2VjdDogKCkgPT4gc2V0UGFnZSgocHJldikgPT4gcHJldiArIDEpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwbHVzU3VtID0gZGF0YT8uaW5mb3JtYXRpb24uYm9udXNQb2ludDtcclxuICBjb25zdCBtaW51c1N1bSA9IGRhdGE/LmluZm9ybWF0aW9uLm1pbnVzUG9pbnQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctd2hpdGUgdy03NjcgaC00MjIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcm91bmRlZC04IHNoYWRvdy14bCAnPlxyXG4gICAgICA8UHJvbXB0SGVhZGVyIG1vZGFsTmFtZT17J3BvaW50SGlzdG9yeSd9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPScgdy03MDkgbXQtMTggaC0zMDkgb3ZlcmZsb3cteS1zY3JvbGwgYm9yZGVyLWItMSBib3JkZXItYi1bIzMyMzIzMl0nPlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3ctZnVsbCAnPlxyXG4gICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT0nYmctd2hpdGUgdGV4dC1ncmF5LWdyYXlzY2FsZTQwICB3LWZ1bGwgaC01NiBzdGlja3kgdG9wLTAgei0xJz5cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT0ncGItMzAnPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J0g0Jz7rgqAg7KecPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSdINCc+7IKsIOycoDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0nSDQnPuygkCDsiJg8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J0g0Jz7sooUg66WYPC90aD5cclxuICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nSDQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgdy1mdWxsJz5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nbXItNCc+7KCE7LK0PC9oMT5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGlzQ2hlY2tlZD17aXNBbGxDaGVja2VkfSBzZXRJc0NoZWNrZWQ9e3NldElzQWxsQ2hlY2tlZH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGggY29sU3Bhbj17NX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtMTggYm9yZGVyLWItMSBib3JkZXItYi1ncmF5LWdyYXlzY2FsZTUwJyAvPlxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7cGVuYWx0eUxpc3RzLm1hcCgocCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICB7Lyog7Jes67Cx7JqpIHRyICovfVxyXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT0naC0xOScgLz5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPFBlbmFsdHlIaXN0b3J5TGlzdEJvZHlcclxuICAgICAgICAgICAgICAgICAgICBkYXRlPXtwLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAgICByZWFzb249e3AuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICBzY29yZT17cC5zY29yZX1cclxuICAgICAgICAgICAgICAgICAgICBkaXZpc2lvbj17cC5wb2ludFR5cGUgPT09IDAgPyAnQk9OVVMnIDogJ01JTlVTJ31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIHsvKiDsl6zrsLHsmqkgdHIgKi99XHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9J2gtMTknIC8+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgey8qIOuniOyngOuniSDsmpTshozsnZggcmVmIOyEpOyglSAqL31cclxuICAgICAgICA8ZGl2IHJlZj17bGFzdEVsZW1lbnRSZWZ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtMTcgZmxleCBtbC1hdXRvIG1yLTI5IHctMzkzIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgPEJ0bk1pbmlWYXJpYW50IGxhYmVsPXsn7IKt7KCcJ30gZGlzYWJsZWQ9e2ZhbHNlfSBzZWxlY3RlZD17ZmFsc2V9IHZhcmlhbnQ9eydibHVlJ30gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjYXB0aW9uLTEgdGV4dC1ncmF5LWdyYXlzY2FsZTUwJz5cclxuICAgICAgICAgICAgVE9UQUwgLSDsg4HsoJAge3BsdXNTdW197KCQIC8g67KM7KCQIHttaW51c1N1bX3soJBcclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlbmFsdHlIaXN0b3J5UHJvbXB0O1xyXG4iXSwibmFtZXMiOlsiQnRuTWluaVZhcmlhbnQiLCJDaGVja2JveCIsIlByb21wdEhlYWRlciIsIlBlbmFsdHlIaXN0b3J5TGlzdEJvZHkiLCJ1c2VJbmZpbml0ZVNjcm9sbCIsInVzZVBvaW50c0J5UmVzaWRlbnRJZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRnJhZ21lbnQiLCJQZW5hbHR5SGlzdG9yeVByb21wdCIsInJlc2lkZW50SWQiLCJpc0FsbENoZWNrZWQiLCJzZXRJc0FsbENoZWNrZWQiLCJkYXRhIiwicGFnZSIsInNldFBhZ2UiLCJlcnJvciIsImlzTG9hZGluZyIsInBlbmFsdHlMaXN0cyIsInNldFBlbmFsdHlMaXN0cyIsIkFycmF5IiwiaXNBcnJheSIsImluZm9ybWF0aW9uIiwidXNlclBvaW50RGV0YWlsUmVzIiwicHJldiIsImxhc3RFbGVtZW50UmVmIiwiaXNFbmRSZWFjaGVkIiwicGFnZUluZm8iLCJjdXJyZW50UGFnZSIsInVuZGVmaW5lZCIsInRvdGFsUGFnZSIsIm9uSW50ZXJzZWN0IiwicGx1c1N1bSIsImJvbnVzUG9pbnQiLCJtaW51c1N1bSIsIm1pbnVzUG9pbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJtb2RhbE5hbWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsImgxIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiY29sU3BhbiIsInRib2R5IiwibWFwIiwicCIsImluZGV4IiwiZGF0ZSIsImNyZWF0ZWRBdCIsInJlYXNvbiIsImNvbnRlbnQiLCJzY29yZSIsImRpdmlzaW9uIiwicG9pbnRUeXBlIiwicmVmIiwibGFiZWwiLCJkaXNhYmxlZCIsInNlbGVjdGVkIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/templates/Point/Prompt/PenaltyHistoryPrompt/PenaltyHistoryPrompt.tsx\n"));

/***/ })

});