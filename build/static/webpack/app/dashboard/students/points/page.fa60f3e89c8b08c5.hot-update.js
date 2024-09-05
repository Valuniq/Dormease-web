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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_atoms_AllBtn_BtnMiniVariant_BtnMiniVariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant */ \"(app-pages-browser)/./src/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant.tsx\");\n/* harmony import */ var _components_atoms_AllBtn_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/atoms/AllBtn/Checkbox/Checkbox */ \"(app-pages-browser)/./src/components/atoms/AllBtn/Checkbox/Checkbox.tsx\");\n/* harmony import */ var _PromptHeader_PromptHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PromptHeader/PromptHeader */ \"(app-pages-browser)/./src/components/templates/Point/Prompt/PromptHeader/PromptHeader.tsx\");\n/* harmony import */ var _PenaltyHistoryListBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PenaltyHistoryListBody */ \"(app-pages-browser)/./src/components/templates/Point/Prompt/PenaltyHistoryPrompt/PenaltyHistoryListBody.tsx\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useInfiniteScroll */ \"(app-pages-browser)/./src/hooks/useInfiniteScroll.tsx\");\n/* harmony import */ var _apis_point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/apis/point */ \"(app-pages-browser)/./src/apis/point.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst PenaltyHistoryPrompt = (param)=>{\n    let { residentId, isAllChecked, setIsAllChecked } = param;\n    var _data_information_pageInfo, _data_information, _data_information_pageInfo1, _data_information1, _data_information2, _data_information3;\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1);\n    const { data, error, isLoading } = (0,_apis_point__WEBPACK_IMPORTED_MODULE_6__.usePointsByResidentId)(residentId, page);\n    const [penaltyLists, setPenaltyLists] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        if (data && Array.isArray(data.information.userPointDetailRes)) {\n            setPenaltyLists((prev)=>[\n                    ...prev,\n                    ...data.information.userPointDetailRes\n                ]);\n        }\n    }, [\n        data\n    ]);\n    const lastElementRef = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        isLoading,\n        isEndReached: (data === null || data === void 0 ? void 0 : (_data_information = data.information) === null || _data_information === void 0 ? void 0 : (_data_information_pageInfo = _data_information.pageInfo) === null || _data_information_pageInfo === void 0 ? void 0 : _data_information_pageInfo.currentPage) !== undefined && (data === null || data === void 0 ? void 0 : (_data_information1 = data.information) === null || _data_information1 === void 0 ? void 0 : (_data_information_pageInfo1 = _data_information1.pageInfo) === null || _data_information_pageInfo1 === void 0 ? void 0 : _data_information_pageInfo1.totalPage) !== undefined ? ((_data_information2 = data.information) === null || _data_information2 === void 0 ? void 0 : _data_information2.pageInfo.currentPage) >= ((_data_information3 = data.information) === null || _data_information3 === void 0 ? void 0 : _data_information3.pageInfo.totalPage) : false,\n        onIntersect: ()=>setPage((prev)=>prev + 1)\n    });\n    const plusSum = penaltyLists.filter((p)=>p.pointType === 0).reduce((sum, p)=>sum + p.score, 0);\n    const minusSum = penaltyLists.filter((p)=>p.pointType === 1).reduce((sum, p)=>sum + p.score, 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white w-767 h-422 flex flex-col items-center rounded-8 shadow-xl \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PromptHeader_PromptHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                modalName: \"pointHistory\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" w-709 mt-18 h-309 overflow-y-scroll border-b-1 border-b-[#323232]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"w-full \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                className: \"bg-white text-gray-grayscale40  w-full h-56 sticky top-0 z-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"pb-30\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"날 짜\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"사 유\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"점 수\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"종 류\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"H4 flex items-center justify-center text-center w-full\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                            className: \"mr-4\",\n                                                            children: \"전체\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                            lineNumber: 53,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_AllBtn_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                            isChecked: isAllChecked,\n                                                            setIsChecked: setIsAllChecked\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                            lineNumber: 54,\n                                                            columnNumber: 19\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            colSpan: 5,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-full h-18 border-b-1 border-b-gray-grayscale50\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: [\n                                    penaltyLists.map((p, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    className: \"h-19\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PenaltyHistoryListBody__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                        date: p.createdAt,\n                                                        reason: p.content,\n                                                        score: p.score,\n                                                        division: p.pointType === 0 ? \"BONUS\" : \"MINUS\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        }, undefined)),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"h-19\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: lastElementRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-17 flex ml-auto mr-29 w-393 justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_AllBtn_BtnMiniVariant_BtnMiniVariant__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        label: \"삭제\",\n                        disabled: false,\n                        selected: false,\n                        variant: \"blue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"caption-1 text-gray-grayscale50\",\n                            children: [\n                                \"TOTAL - 상점 \",\n                                plusSum,\n                                \"점 / 벌점 \",\n                                minusSum,\n                                \"점\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PenaltyHistoryPrompt, \"f3e+KIlHHykOe+u4afCi42KJay4=\", false, function() {\n    return [\n        _apis_point__WEBPACK_IMPORTED_MODULE_6__.usePointsByResidentId,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = PenaltyHistoryPrompt;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PenaltyHistoryPrompt);\nvar _c;\n$RefreshReg$(_c, \"PenaltyHistoryPrompt\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9Qb2ludC9Qcm9tcHQvUGVuYWx0eUhpc3RvcnlQcm9tcHQvUGVuYWx0eUhpc3RvcnlQcm9tcHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNxRjtBQUNsQjtBQUVYO0FBQ007QUFDSjtBQUNMO0FBQ0M7QUFRdEQsTUFBTVMsdUJBQXVCO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBUztRQWM1RUMsNEJBQUFBLG1CQUEwREEsNkJBQUFBLG9CQUN0REEsb0JBQTBDQTs7SUFkbEQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sRUFBRU8sSUFBSSxFQUFFRyxLQUFLLEVBQUVDLFNBQVMsRUFBRSxHQUFHWixrRUFBcUJBLENBQUNLLFlBQVlJO0lBQ3JFLE1BQU0sQ0FBQ0ksY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUE0QyxFQUFFO0lBRTlGQyxnREFBU0EsQ0FBQztRQUNSLElBQUlNLFFBQVFPLE1BQU1DLE9BQU8sQ0FBQ1IsS0FBS1MsV0FBVyxDQUFDQyxrQkFBa0IsR0FBRztZQUM5REosZ0JBQWdCLENBQUNLLE9BQVM7dUJBQUlBO3VCQUFTWCxLQUFLUyxXQUFXLENBQUNDLGtCQUFrQjtpQkFBQztRQUM3RTtJQUNGLEdBQUc7UUFBQ1Y7S0FBSztJQUVULE1BQU1ZLGlCQUFpQnJCLG9FQUFpQkEsQ0FBQztRQUN2Q2E7UUFDQVMsY0FDRWIsQ0FBQUEsaUJBQUFBLDRCQUFBQSxvQkFBQUEsS0FBTVMsV0FBVyxjQUFqQlQseUNBQUFBLDZCQUFBQSxrQkFBbUJjLFFBQVEsY0FBM0JkLGlEQUFBQSwyQkFBNkJlLFdBQVcsTUFBS0MsYUFBYWhCLENBQUFBLGlCQUFBQSw0QkFBQUEscUJBQUFBLEtBQU1TLFdBQVcsY0FBakJULDBDQUFBQSw4QkFBQUEsbUJBQW1CYyxRQUFRLGNBQTNCZCxrREFBQUEsNEJBQTZCaUIsU0FBUyxNQUFLRCxZQUNqR2hCLEVBQUFBLHFCQUFBQSxLQUFLUyxXQUFXLGNBQWhCVCx5Q0FBQUEsbUJBQWtCYyxRQUFRLENBQUNDLFdBQVcsT0FBSWYscUJBQUFBLEtBQUtTLFdBQVcsY0FBaEJULHlDQUFBQSxtQkFBa0JjLFFBQVEsQ0FBQ0csU0FBUyxJQUM5RTtRQUNOQyxhQUFhLElBQU1oQixRQUFRLENBQUNTLE9BQVNBLE9BQU87SUFDOUM7SUFFQSxNQUFNUSxVQUFVZCxhQUFhZSxNQUFNLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsU0FBUyxLQUFLLEdBQUdDLE1BQU0sQ0FBQyxDQUFDQyxLQUFLSCxJQUFNRyxNQUFNSCxFQUFFSSxLQUFLLEVBQUU7SUFDaEcsTUFBTUMsV0FBV3JCLGFBQWFlLE1BQU0sQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxTQUFTLEtBQUssR0FBR0MsTUFBTSxDQUFDLENBQUNDLEtBQUtILElBQU1HLE1BQU1ILEVBQUVJLEtBQUssRUFBRTtJQUVqRyxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUN2QyxrRUFBWUE7Z0JBQUN3QyxXQUFXOzs7Ozs7MEJBQ3pCLDhEQUFDRjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFNRixXQUFVOzswQ0FDZiw4REFBQ0c7Z0NBQU1ILFdBQVU7O2tEQUNmLDhEQUFDSTt3Q0FBR0osV0FBVTs7MERBQ1osOERBQUNLO2dEQUFHTCxXQUFVOzBEQUFLOzs7Ozs7MERBQ25CLDhEQUFDSztnREFBR0wsV0FBVTswREFBSzs7Ozs7OzBEQUNuQiw4REFBQ0s7Z0RBQUdMLFdBQVU7MERBQUs7Ozs7OzswREFDbkIsOERBQUNLO2dEQUFHTCxXQUFVOzBEQUFLOzs7Ozs7MERBQ25CLDhEQUFDSzswREFDQyw0RUFBQ047b0RBQUlDLFdBQVU7O3NFQUNiLDhEQUFDTTs0REFBR04sV0FBVTtzRUFBTzs7Ozs7O3NFQUNyQiw4REFBQ3hDLGtGQUFRQTs0REFBQytDLFdBQVdyQzs0REFBY3NDLGNBQWNyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBSXZELDhEQUFDaUM7a0RBQ0MsNEVBQUNDOzRDQUFHSSxTQUFTO3NEQUNYLDRFQUFDVjtnREFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJckIsOERBQUNVOztvQ0FDRWpDLGFBQWFrQyxHQUFHLENBQUMsQ0FBQ2xCLEdBQUdtQixzQkFDcEIsOERBQUM3QywyQ0FBUUE7OzhEQUVQLDhEQUFDcUM7b0RBQUdKLFdBQVU7Ozs7Ozs4REFDZCw4REFBQ0k7OERBQ0MsNEVBQUMxQywrREFBc0JBO3dEQUNyQm1ELE1BQU1wQixFQUFFcUIsU0FBUzt3REFDakJDLFFBQVF0QixFQUFFdUIsT0FBTzt3REFDakJuQixPQUFPSixFQUFFSSxLQUFLO3dEQUNkb0IsVUFBVXhCLEVBQUVDLFNBQVMsS0FBSyxJQUFJLFVBQVU7Ozs7Ozs7Ozs7OzsyQ0FSL0JrQjs7Ozs7a0RBY2pCLDhEQUFDUjt3Q0FBR0osV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlsQiw4REFBQ0Q7d0JBQUltQixLQUFLbEM7Ozs7Ozs7Ozs7OzswQkFFWiw4REFBQ2U7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDekMsOEZBQWNBO3dCQUFDNEQsT0FBTzt3QkFBTUMsVUFBVTt3QkFBT0MsVUFBVTt3QkFBT0MsU0FBUzs7Ozs7O2tDQUN4RSw4REFBQ3ZCO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDTTs0QkFBR04sV0FBVTs7Z0NBQWtDO2dDQUNsQ1Q7Z0NBQVE7Z0NBQVFPO2dDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakQ7R0EvRU05Qjs7UUFFK0JKLDhEQUFxQkE7UUFTakNELGdFQUFpQkE7OztLQVhwQ0s7QUFpRk4sK0RBQWVBLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMvUG9pbnQvUHJvbXB0L1BlbmFsdHlIaXN0b3J5UHJvbXB0L1BlbmFsdHlIaXN0b3J5UHJvbXB0LnRzeD82ODYzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IEJ0bk1pbmlWYXJpYW50IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9BbGxCdG4vQnRuTWluaVZhcmlhbnQvQnRuTWluaVZhcmlhbnQnO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQC9jb21wb25lbnRzL2F0b21zL0FsbEJ0bi9DaGVja2JveC9DaGVja2JveCc7XHJcbmltcG9ydCB7IFJlc2lkZW50UG9pbnRSZXNwb25zZVVzZXJQb2ludERldGFpbFJlcyB9IGZyb20gJ0AvdHlwZXMvcG9pbnQnO1xyXG5pbXBvcnQgUHJvbXB0SGVhZGVyIGZyb20gJy4uL1Byb21wdEhlYWRlci9Qcm9tcHRIZWFkZXInO1xyXG5pbXBvcnQgUGVuYWx0eUhpc3RvcnlMaXN0Qm9keSBmcm9tICcuL1BlbmFsdHlIaXN0b3J5TGlzdEJvZHknO1xyXG5pbXBvcnQgdXNlSW5maW5pdGVTY3JvbGwgZnJvbSAnQC9ob29rcy91c2VJbmZpbml0ZVNjcm9sbCc7XHJcbmltcG9ydCB7IHVzZVBvaW50c0J5UmVzaWRlbnRJZCB9IGZyb20gJ0AvYXBpcy9wb2ludCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICByZXNpZGVudElkOiBudW1iZXI7XHJcbiAgaXNBbGxDaGVja2VkOiBib29sZWFuO1xyXG4gIHNldElzQWxsQ2hlY2tlZDogKGlzQWxsQ2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZDtcclxufTtcclxuXHJcbmNvbnN0IFBlbmFsdHlIaXN0b3J5UHJvbXB0ID0gKHsgcmVzaWRlbnRJZCwgaXNBbGxDaGVja2VkLCBzZXRJc0FsbENoZWNrZWQgfTogUHJvcHMpID0+IHtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVBvaW50c0J5UmVzaWRlbnRJZChyZXNpZGVudElkLCBwYWdlKTtcclxuICBjb25zdCBbcGVuYWx0eUxpc3RzLCBzZXRQZW5hbHR5TGlzdHNdID0gdXNlU3RhdGU8UmVzaWRlbnRQb2ludFJlc3BvbnNlVXNlclBvaW50RGV0YWlsUmVzW10+KFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkYXRhICYmIEFycmF5LmlzQXJyYXkoZGF0YS5pbmZvcm1hdGlvbi51c2VyUG9pbnREZXRhaWxSZXMpKSB7XHJcbiAgICAgIHNldFBlbmFsdHlMaXN0cygocHJldikgPT4gWy4uLnByZXYsIC4uLmRhdGEuaW5mb3JtYXRpb24udXNlclBvaW50RGV0YWlsUmVzXSk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGFdKTtcclxuXHJcbiAgY29uc3QgbGFzdEVsZW1lbnRSZWYgPSB1c2VJbmZpbml0ZVNjcm9sbCh7XHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBpc0VuZFJlYWNoZWQ6XHJcbiAgICAgIGRhdGE/LmluZm9ybWF0aW9uPy5wYWdlSW5mbz8uY3VycmVudFBhZ2UgIT09IHVuZGVmaW5lZCAmJiBkYXRhPy5pbmZvcm1hdGlvbj8ucGFnZUluZm8/LnRvdGFsUGFnZSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyBkYXRhLmluZm9ybWF0aW9uPy5wYWdlSW5mby5jdXJyZW50UGFnZSA+PSBkYXRhLmluZm9ybWF0aW9uPy5wYWdlSW5mby50b3RhbFBhZ2VcclxuICAgICAgICA6IGZhbHNlLCAvLyDtmITsnqwg7Y6Y7J207KeA7JmAIOy0nSDtjpjsnbTsp4Ag7IiY66W8IOu5hOq1kO2VmOyXrCDsiqTtgazroaTsnbQg64Gd64Ks64qU7KeAIOyXrOu2gOulvCDqsrDsoJVcclxuICAgIG9uSW50ZXJzZWN0OiAoKSA9PiBzZXRQYWdlKChwcmV2KSA9PiBwcmV2ICsgMSksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHBsdXNTdW0gPSBwZW5hbHR5TGlzdHMuZmlsdGVyKChwKSA9PiBwLnBvaW50VHlwZSA9PT0gMCkucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2NvcmUsIDApO1xyXG4gIGNvbnN0IG1pbnVzU3VtID0gcGVuYWx0eUxpc3RzLmZpbHRlcigocCkgPT4gcC5wb2ludFR5cGUgPT09IDEpLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjb3JlLCAwKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSB3LTc2NyBoLTQyMiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciByb3VuZGVkLTggc2hhZG93LXhsICc+XHJcbiAgICAgIDxQcm9tcHRIZWFkZXIgbW9kYWxOYW1lPXsncG9pbnRIaXN0b3J5J30gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9JyB3LTcwOSBtdC0xOCBoLTMwOSBvdmVyZmxvdy15LXNjcm9sbCBib3JkZXItYi0xIGJvcmRlci1iLVsjMzIzMjMyXSc+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndy1mdWxsICc+XHJcbiAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPSdiZy13aGl0ZSB0ZXh0LWdyYXktZ3JheXNjYWxlNDAgIHctZnVsbCBoLTU2IHN0aWNreSB0b3AtMCB6LTEnPlxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPSdwYi0zMCc+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0nSDQnPuuCoCDsp5w8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J0g0Jz7sgqwg7JygPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSdINCc+7KCQIOyImDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0nSDQnPuyihSDrpZg8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdINCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciB3LWZ1bGwnPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdtci00Jz7soITssrQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggaXNDaGVja2VkPXtpc0FsbENoZWNrZWR9IHNldElzQ2hlY2tlZD17c2V0SXNBbGxDaGVja2VkfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aCBjb2xTcGFuPXs1fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC0xOCBib3JkZXItYi0xIGJvcmRlci1iLWdyYXktZ3JheXNjYWxlNTAnIC8+XHJcbiAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtwZW5hbHR5TGlzdHMubWFwKChwLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIHsvKiDsl6zrsLHsmqkgdHIgKi99XHJcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPSdoLTE5JyAvPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8UGVuYWx0eUhpc3RvcnlMaXN0Qm9keVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU9e3AuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYXNvbj17cC5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlPXtwLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uPXtwLnBvaW50VHlwZSA9PT0gMCA/ICdCT05VUycgOiAnTUlOVVMnfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgey8qIOyXrOuwseyaqSB0ciAqL31cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT0naC0xOScgLz5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICB7Lyog66eI7KeA66eJIOyalOyGjOydmCByZWYg7ISk7KCVICovfVxyXG4gICAgICAgIDxkaXYgcmVmPXtsYXN0RWxlbWVudFJlZn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xNyBmbGV4IG1sLWF1dG8gbXItMjkgdy0zOTMganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICA8QnRuTWluaVZhcmlhbnQgbGFiZWw9eyfsgq3soJwnfSBkaXNhYmxlZD17ZmFsc2V9IHNlbGVjdGVkPXtmYWxzZX0gdmFyaWFudD17J2JsdWUnfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2NhcHRpb24tMSB0ZXh0LWdyYXktZ3JheXNjYWxlNTAnPlxyXG4gICAgICAgICAgICBUT1RBTCAtIOyDgeygkCB7cGx1c1N1bX3soJAgLyDrsozsoJAge21pbnVzU3VtfeygkFxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVuYWx0eUhpc3RvcnlQcm9tcHQ7XHJcbiJdLCJuYW1lcyI6WyJCdG5NaW5pVmFyaWFudCIsIkNoZWNrYm94IiwiUHJvbXB0SGVhZGVyIiwiUGVuYWx0eUhpc3RvcnlMaXN0Qm9keSIsInVzZUluZmluaXRlU2Nyb2xsIiwidXNlUG9pbnRzQnlSZXNpZGVudElkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGcmFnbWVudCIsIlBlbmFsdHlIaXN0b3J5UHJvbXB0IiwicmVzaWRlbnRJZCIsImlzQWxsQ2hlY2tlZCIsInNldElzQWxsQ2hlY2tlZCIsImRhdGEiLCJwYWdlIiwic2V0UGFnZSIsImVycm9yIiwiaXNMb2FkaW5nIiwicGVuYWx0eUxpc3RzIiwic2V0UGVuYWx0eUxpc3RzIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5mb3JtYXRpb24iLCJ1c2VyUG9pbnREZXRhaWxSZXMiLCJwcmV2IiwibGFzdEVsZW1lbnRSZWYiLCJpc0VuZFJlYWNoZWQiLCJwYWdlSW5mbyIsImN1cnJlbnRQYWdlIiwidW5kZWZpbmVkIiwidG90YWxQYWdlIiwib25JbnRlcnNlY3QiLCJwbHVzU3VtIiwiZmlsdGVyIiwicCIsInBvaW50VHlwZSIsInJlZHVjZSIsInN1bSIsInNjb3JlIiwibWludXNTdW0iLCJkaXYiLCJjbGFzc05hbWUiLCJtb2RhbE5hbWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsImgxIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiY29sU3BhbiIsInRib2R5IiwibWFwIiwiaW5kZXgiLCJkYXRlIiwiY3JlYXRlZEF0IiwicmVhc29uIiwiY29udGVudCIsImRpdmlzaW9uIiwicmVmIiwibGFiZWwiLCJkaXNhYmxlZCIsInNlbGVjdGVkIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/templates/Point/Prompt/PenaltyHistoryPrompt/PenaltyHistoryPrompt.tsx\n"));

/***/ })

});