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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_atoms_AllBtn_BtnMiniVariant_BtnMiniVariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant */ \"(app-pages-browser)/./src/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant.tsx\");\n/* harmony import */ var _components_atoms_AllBtn_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/atoms/AllBtn/Checkbox/Checkbox */ \"(app-pages-browser)/./src/components/atoms/AllBtn/Checkbox/Checkbox.tsx\");\n/* harmony import */ var _PromptHeader_PromptHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PromptHeader/PromptHeader */ \"(app-pages-browser)/./src/components/templates/Point/Prompt/PromptHeader/PromptHeader.tsx\");\n/* harmony import */ var _PenaltyHistoryListBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PenaltyHistoryListBody */ \"(app-pages-browser)/./src/components/templates/Point/Prompt/PenaltyHistoryPrompt/PenaltyHistoryListBody.tsx\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useInfiniteScroll */ \"(app-pages-browser)/./src/hooks/useInfiniteScroll.tsx\");\n/* harmony import */ var _apis_point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/apis/point */ \"(app-pages-browser)/./src/apis/point.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst PenaltyHistoryPrompt = (param)=>{\n    let { residentId, isAllChecked, setIsAllChecked } = param;\n    var _data_information_pageInfo, _data_information, _data_information_pageInfo1, _data_information1, _data_information2, _data_information3;\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1);\n    const { data, error, isLoading } = (0,_apis_point__WEBPACK_IMPORTED_MODULE_6__.usePointsByResidentId)(residentId, page);\n    const [penaltyLists, setPenaltyLists] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        if (data && Array.isArray(data.information.userPointDetailRes)) {\n            setPenaltyLists((prev)=>[\n                    ...prev,\n                    ...data.information.userPointDetailRes\n                ]);\n        }\n    }, [\n        data\n    ]);\n    const lastElementRef = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        isLoading,\n        isEndReached: (data === null || data === void 0 ? void 0 : (_data_information = data.information) === null || _data_information === void 0 ? void 0 : (_data_information_pageInfo = _data_information.pageInfo) === null || _data_information_pageInfo === void 0 ? void 0 : _data_information_pageInfo.currentPage) !== undefined && (data === null || data === void 0 ? void 0 : (_data_information1 = data.information) === null || _data_information1 === void 0 ? void 0 : (_data_information_pageInfo1 = _data_information1.pageInfo) === null || _data_information_pageInfo1 === void 0 ? void 0 : _data_information_pageInfo1.totalPage) !== undefined ? ((_data_information2 = data.information) === null || _data_information2 === void 0 ? void 0 : _data_information2.pageInfo.currentPage) >= ((_data_information3 = data.information) === null || _data_information3 === void 0 ? void 0 : _data_information3.pageInfo.totalPage) : false,\n        onIntersect: ()=>setPage((prev)=>prev + 1)\n    });\n    const plusSum = data === null || data === void 0 ? void 0 : data.information.bonusPoint;\n    const minusSum = data === null || data === void 0 ? void 0 : data.information.minusPoint;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white w-767 h-422 flex flex-col items-center rounded-8 shadow-xl \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PromptHeader_PromptHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                modalName: \"pointHistory\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" w-709 mt-18 h-309 overflow-y-scroll border-b-1 border-b-[#323232]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"w-full \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                className: \"bg-white text-gray-grayscale40  w-full h-56 sticky top-0 z-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"pb-30\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"날 짜\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"사 유\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"점 수\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"H4\",\n                                                children: \"종 류\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"H4 flex items-center justify-center text-center w-full\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                            className: \"mr-4\",\n                                                            children: \"전체\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                            lineNumber: 53,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_AllBtn_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                            isChecked: isAllChecked,\n                                                            setIsChecked: setIsAllChecked\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                            lineNumber: 54,\n                                                            columnNumber: 19\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            colSpan: 5,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-full h-18 border-b-1 border-b-gray-grayscale50\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: [\n                                    data === null || data === void 0 ? void 0 : data.information.userPointDetailRes.map((p, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    className: \"h-19\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PenaltyHistoryListBody__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                        date: p.createdAt,\n                                                        reason: p.content,\n                                                        score: p.score,\n                                                        division: p.pointType\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        }, undefined)),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"h-19\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: lastElementRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-17 flex ml-auto mr-29 w-393 justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_AllBtn_BtnMiniVariant_BtnMiniVariant__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        label: \"삭제\",\n                        disabled: false,\n                        selected: false,\n                        variant: \"blue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"caption-1 text-gray-grayscale50\",\n                            children: [\n                                \"TOTAL - 상점 \",\n                                plusSum,\n                                \"점 / 벌점 \",\n                                minusSum,\n                                \"점\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LeeBoHyun\\\\Desktop\\\\dormease-web\\\\src\\\\components\\\\templates\\\\Point\\\\Prompt\\\\PenaltyHistoryPrompt\\\\PenaltyHistoryPrompt.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PenaltyHistoryPrompt, \"f3e+KIlHHykOe+u4afCi42KJay4=\", false, function() {\n    return [\n        _apis_point__WEBPACK_IMPORTED_MODULE_6__.usePointsByResidentId,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = PenaltyHistoryPrompt;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PenaltyHistoryPrompt);\nvar _c;\n$RefreshReg$(_c, \"PenaltyHistoryPrompt\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9Qb2ludC9Qcm9tcHQvUGVuYWx0eUhpc3RvcnlQcm9tcHQvUGVuYWx0eUhpc3RvcnlQcm9tcHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNxRjtBQUNsQjtBQUVYO0FBQ007QUFDSjtBQUNMO0FBQ0M7QUFRdEQsTUFBTVMsdUJBQXVCO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBUztRQWM1RUMsNEJBQUFBLG1CQUEwREEsNkJBQUFBLG9CQUN0REEsb0JBQTBDQTs7SUFkbEQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sRUFBRU8sSUFBSSxFQUFFRyxLQUFLLEVBQUVDLFNBQVMsRUFBRSxHQUFHWixrRUFBcUJBLENBQUNLLFlBQVlJO0lBQ3JFLE1BQU0sQ0FBQ0ksY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUE0QyxFQUFFO0lBRTlGQyxnREFBU0EsQ0FBQztRQUNSLElBQUlNLFFBQVFPLE1BQU1DLE9BQU8sQ0FBQ1IsS0FBS1MsV0FBVyxDQUFDQyxrQkFBa0IsR0FBRztZQUM5REosZ0JBQWdCLENBQUNLLE9BQVM7dUJBQUlBO3VCQUFTWCxLQUFLUyxXQUFXLENBQUNDLGtCQUFrQjtpQkFBQztRQUM3RTtJQUNGLEdBQUc7UUFBQ1Y7S0FBSztJQUVULE1BQU1ZLGlCQUFpQnJCLG9FQUFpQkEsQ0FBQztRQUN2Q2E7UUFDQVMsY0FDRWIsQ0FBQUEsaUJBQUFBLDRCQUFBQSxvQkFBQUEsS0FBTVMsV0FBVyxjQUFqQlQseUNBQUFBLDZCQUFBQSxrQkFBbUJjLFFBQVEsY0FBM0JkLGlEQUFBQSwyQkFBNkJlLFdBQVcsTUFBS0MsYUFBYWhCLENBQUFBLGlCQUFBQSw0QkFBQUEscUJBQUFBLEtBQU1TLFdBQVcsY0FBakJULDBDQUFBQSw4QkFBQUEsbUJBQW1CYyxRQUFRLGNBQTNCZCxrREFBQUEsNEJBQTZCaUIsU0FBUyxNQUFLRCxZQUNqR2hCLEVBQUFBLHFCQUFBQSxLQUFLUyxXQUFXLGNBQWhCVCx5Q0FBQUEsbUJBQWtCYyxRQUFRLENBQUNDLFdBQVcsT0FBSWYscUJBQUFBLEtBQUtTLFdBQVcsY0FBaEJULHlDQUFBQSxtQkFBa0JjLFFBQVEsQ0FBQ0csU0FBUyxJQUM5RTtRQUNOQyxhQUFhLElBQU1oQixRQUFRLENBQUNTLE9BQVNBLE9BQU87SUFDOUM7SUFFQSxNQUFNUSxVQUFVbkIsaUJBQUFBLDJCQUFBQSxLQUFNUyxXQUFXLENBQUNXLFVBQVU7SUFDNUMsTUFBTUMsV0FBV3JCLGlCQUFBQSwyQkFBQUEsS0FBTVMsV0FBVyxDQUFDYSxVQUFVO0lBRTdDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ25DLGtFQUFZQTtnQkFBQ29DLFdBQVc7Ozs7OzswQkFDekIsOERBQUNGO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQU1GLFdBQVU7OzBDQUNmLDhEQUFDRztnQ0FBTUgsV0FBVTs7a0RBQ2YsOERBQUNJO3dDQUFHSixXQUFVOzswREFDWiw4REFBQ0s7Z0RBQUdMLFdBQVU7MERBQUs7Ozs7OzswREFDbkIsOERBQUNLO2dEQUFHTCxXQUFVOzBEQUFLOzs7Ozs7MERBQ25CLDhEQUFDSztnREFBR0wsV0FBVTswREFBSzs7Ozs7OzBEQUNuQiw4REFBQ0s7Z0RBQUdMLFdBQVU7MERBQUs7Ozs7OzswREFDbkIsOERBQUNLOzBEQUNDLDRFQUFDTjtvREFBSUMsV0FBVTs7c0VBQ2IsOERBQUNNOzREQUFHTixXQUFVO3NFQUFPOzs7Ozs7c0VBQ3JCLDhEQUFDcEMsa0ZBQVFBOzREQUFDMkMsV0FBV2pDOzREQUFja0MsY0FBY2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFJdkQsOERBQUM2QjtrREFDQyw0RUFBQ0M7NENBQUdJLFNBQVM7c0RBQ1gsNEVBQUNWO2dEQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUlyQiw4REFBQ1U7O29DQUNFbEMsaUJBQUFBLDJCQUFBQSxLQUFNUyxXQUFXLENBQUNDLGtCQUFrQixDQUFDeUIsR0FBRyxDQUFDLENBQUNDLEdBQUdDLHNCQUM1Qyw4REFBQzFDLDJDQUFRQTs7OERBRVAsOERBQUNpQztvREFBR0osV0FBVTs7Ozs7OzhEQUNkLDhEQUFDSTs4REFDQyw0RUFBQ3RDLCtEQUFzQkE7d0RBQ3JCZ0QsTUFBTUYsRUFBRUcsU0FBUzt3REFDakJDLFFBQVFKLEVBQUVLLE9BQU87d0RBQ2pCQyxPQUFPTixFQUFFTSxLQUFLO3dEQUNkQyxVQUFVUCxFQUFFUSxTQUFTOzs7Ozs7Ozs7Ozs7MkNBUlpQOzs7OztrREFjakIsOERBQUNUO3dDQUFHSixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWxCLDhEQUFDRDt3QkFBSXNCLEtBQUtqQzs7Ozs7Ozs7Ozs7OzBCQUVaLDhEQUFDVztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNyQyw4RkFBY0E7d0JBQUMyRCxPQUFPO3dCQUFNQyxVQUFVO3dCQUFPQyxVQUFVO3dCQUFPQyxTQUFTOzs7Ozs7a0NBQ3hFLDhEQUFDMUI7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNNOzRCQUFHTixXQUFVOztnQ0FBa0M7Z0NBQ2xDTDtnQ0FBUTtnQ0FBUUU7Z0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRDtHQS9FTXpCOztRQUUrQkosOERBQXFCQTtRQVNqQ0QsZ0VBQWlCQTs7O0tBWHBDSztBQWlGTiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9Qb2ludC9Qcm9tcHQvUGVuYWx0eUhpc3RvcnlQcm9tcHQvUGVuYWx0eUhpc3RvcnlQcm9tcHQudHN4PzY4NjMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgQnRuTWluaVZhcmlhbnQgZnJvbSAnQC9jb21wb25lbnRzL2F0b21zL0FsbEJ0bi9CdG5NaW5pVmFyaWFudC9CdG5NaW5pVmFyaWFudCc7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tICdAL2NvbXBvbmVudHMvYXRvbXMvQWxsQnRuL0NoZWNrYm94L0NoZWNrYm94JztcclxuaW1wb3J0IHsgUmVzaWRlbnRQb2ludFJlc3BvbnNlVXNlclBvaW50RGV0YWlsUmVzIH0gZnJvbSAnQC90eXBlcy9wb2ludCc7XHJcbmltcG9ydCBQcm9tcHRIZWFkZXIgZnJvbSAnLi4vUHJvbXB0SGVhZGVyL1Byb21wdEhlYWRlcic7XHJcbmltcG9ydCBQZW5hbHR5SGlzdG9yeUxpc3RCb2R5IGZyb20gJy4vUGVuYWx0eUhpc3RvcnlMaXN0Qm9keSc7XHJcbmltcG9ydCB1c2VJbmZpbml0ZVNjcm9sbCBmcm9tICdAL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsJztcclxuaW1wb3J0IHsgdXNlUG9pbnRzQnlSZXNpZGVudElkIH0gZnJvbSAnQC9hcGlzL3BvaW50JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHJlc2lkZW50SWQ6IG51bWJlcjtcclxuICBpc0FsbENoZWNrZWQ6IGJvb2xlYW47XHJcbiAgc2V0SXNBbGxDaGVja2VkOiAoaXNBbGxDaGVja2VkOiBib29sZWFuKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY29uc3QgUGVuYWx0eUhpc3RvcnlQcm9tcHQgPSAoeyByZXNpZGVudElkLCBpc0FsbENoZWNrZWQsIHNldElzQWxsQ2hlY2tlZCB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlUG9pbnRzQnlSZXNpZGVudElkKHJlc2lkZW50SWQsIHBhZ2UpO1xyXG4gIGNvbnN0IFtwZW5hbHR5TGlzdHMsIHNldFBlbmFsdHlMaXN0c10gPSB1c2VTdGF0ZTxSZXNpZGVudFBvaW50UmVzcG9uc2VVc2VyUG9pbnREZXRhaWxSZXNbXT4oW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhdGEgJiYgQXJyYXkuaXNBcnJheShkYXRhLmluZm9ybWF0aW9uLnVzZXJQb2ludERldGFpbFJlcykpIHtcclxuICAgICAgc2V0UGVuYWx0eUxpc3RzKChwcmV2KSA9PiBbLi4ucHJldiwgLi4uZGF0YS5pbmZvcm1hdGlvbi51c2VyUG9pbnREZXRhaWxSZXNdKTtcclxuICAgIH1cclxuICB9LCBbZGF0YV0pO1xyXG5cclxuICBjb25zdCBsYXN0RWxlbWVudFJlZiA9IHVzZUluZmluaXRlU2Nyb2xsKHtcclxuICAgIGlzTG9hZGluZyxcclxuICAgIGlzRW5kUmVhY2hlZDpcclxuICAgICAgZGF0YT8uaW5mb3JtYXRpb24/LnBhZ2VJbmZvPy5jdXJyZW50UGFnZSAhPT0gdW5kZWZpbmVkICYmIGRhdGE/LmluZm9ybWF0aW9uPy5wYWdlSW5mbz8udG90YWxQYWdlICE9PSB1bmRlZmluZWRcclxuICAgICAgICA/IGRhdGEuaW5mb3JtYXRpb24/LnBhZ2VJbmZvLmN1cnJlbnRQYWdlID49IGRhdGEuaW5mb3JtYXRpb24/LnBhZ2VJbmZvLnRvdGFsUGFnZVxyXG4gICAgICAgIDogZmFsc2UsIC8vIO2YhOyerCDtjpjsnbTsp4DsmYAg7LSdIO2OmOydtOyngCDsiJjrpbwg67mE6rWQ7ZWY7JesIOyKpO2BrOuhpOydtCDrgZ3rgqzripTsp4Ag7Jes67aA66W8IOqysOyglVxyXG4gICAgb25JbnRlcnNlY3Q6ICgpID0+IHNldFBhZ2UoKHByZXYpID0+IHByZXYgKyAxKSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGx1c1N1bSA9IGRhdGE/LmluZm9ybWF0aW9uLmJvbnVzUG9pbnQ7XHJcbiAgY29uc3QgbWludXNTdW0gPSBkYXRhPy5pbmZvcm1hdGlvbi5taW51c1BvaW50O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlIHctNzY3IGgtNDIyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHJvdW5kZWQtOCBzaGFkb3cteGwgJz5cclxuICAgICAgPFByb21wdEhlYWRlciBtb2RhbE5hbWU9eydwb2ludEhpc3RvcnknfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nIHctNzA5IG10LTE4IGgtMzA5IG92ZXJmbG93LXktc2Nyb2xsIGJvcmRlci1iLTEgYm9yZGVyLWItWyMzMjMyMzJdJz5cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd3LWZ1bGwgJz5cclxuICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9J2JnLXdoaXRlIHRleHQtZ3JheS1ncmF5c2NhbGU0MCAgdy1mdWxsIGgtNTYgc3RpY2t5IHRvcC0wIHotMSc+XHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9J3BiLTMwJz5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSdINCc+64KgIOynnDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0nSDQnPuyCrCDsnKA8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J0g0Jz7soJAg7IiYPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSdINCc+7KKFIOulmDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0g0IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIHctZnVsbCc+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J21yLTQnPuyghOyytDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBpc0NoZWNrZWQ9e2lzQWxsQ2hlY2tlZH0gc2V0SXNDaGVja2VkPXtzZXRJc0FsbENoZWNrZWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoIGNvbFNwYW49ezV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLTE4IGJvcmRlci1iLTEgYm9yZGVyLWItZ3JheS1ncmF5c2NhbGU1MCcgLz5cclxuICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge2RhdGE/LmluZm9ybWF0aW9uLnVzZXJQb2ludERldGFpbFJlcy5tYXAoKHAsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgey8qIOyXrOuwseyaqSB0ciAqL31cclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9J2gtMTknIC8+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDxQZW5hbHR5SGlzdG9yeUxpc3RCb2R5XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZT17cC5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhc29uPXtwLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmU9e3Auc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2aXNpb249e3AucG9pbnRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgey8qIOyXrOuwseyaqSB0ciAqL31cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT0naC0xOScgLz5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICB7Lyog66eI7KeA66eJIOyalOyGjOydmCByZWYg7ISk7KCVICovfVxyXG4gICAgICAgIDxkaXYgcmVmPXtsYXN0RWxlbWVudFJlZn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xNyBmbGV4IG1sLWF1dG8gbXItMjkgdy0zOTMganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICA8QnRuTWluaVZhcmlhbnQgbGFiZWw9eyfsgq3soJwnfSBkaXNhYmxlZD17ZmFsc2V9IHNlbGVjdGVkPXtmYWxzZX0gdmFyaWFudD17J2JsdWUnfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2NhcHRpb24tMSB0ZXh0LWdyYXktZ3JheXNjYWxlNTAnPlxyXG4gICAgICAgICAgICBUT1RBTCAtIOyDgeygkCB7cGx1c1N1bX3soJAgLyDrsozsoJAge21pbnVzU3VtfeygkFxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVuYWx0eUhpc3RvcnlQcm9tcHQ7XHJcbiJdLCJuYW1lcyI6WyJCdG5NaW5pVmFyaWFudCIsIkNoZWNrYm94IiwiUHJvbXB0SGVhZGVyIiwiUGVuYWx0eUhpc3RvcnlMaXN0Qm9keSIsInVzZUluZmluaXRlU2Nyb2xsIiwidXNlUG9pbnRzQnlSZXNpZGVudElkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGcmFnbWVudCIsIlBlbmFsdHlIaXN0b3J5UHJvbXB0IiwicmVzaWRlbnRJZCIsImlzQWxsQ2hlY2tlZCIsInNldElzQWxsQ2hlY2tlZCIsImRhdGEiLCJwYWdlIiwic2V0UGFnZSIsImVycm9yIiwiaXNMb2FkaW5nIiwicGVuYWx0eUxpc3RzIiwic2V0UGVuYWx0eUxpc3RzIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5mb3JtYXRpb24iLCJ1c2VyUG9pbnREZXRhaWxSZXMiLCJwcmV2IiwibGFzdEVsZW1lbnRSZWYiLCJpc0VuZFJlYWNoZWQiLCJwYWdlSW5mbyIsImN1cnJlbnRQYWdlIiwidW5kZWZpbmVkIiwidG90YWxQYWdlIiwib25JbnRlcnNlY3QiLCJwbHVzU3VtIiwiYm9udXNQb2ludCIsIm1pbnVzU3VtIiwibWludXNQb2ludCIsImRpdiIsImNsYXNzTmFtZSIsIm1vZGFsTmFtZSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwiaDEiLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJjb2xTcGFuIiwidGJvZHkiLCJtYXAiLCJwIiwiaW5kZXgiLCJkYXRlIiwiY3JlYXRlZEF0IiwicmVhc29uIiwiY29udGVudCIsInNjb3JlIiwiZGl2aXNpb24iLCJwb2ludFR5cGUiLCJyZWYiLCJsYWJlbCIsImRpc2FibGVkIiwic2VsZWN0ZWQiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/templates/Point/Prompt/PenaltyHistoryPrompt/PenaltyHistoryPrompt.tsx\n"));

/***/ })

});