"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/JoinApplicationSetting/(Applicant)/Applicant/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/JoinApplicationSetting/(Applicant)/Applicant/mockData.tsx":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/JoinApplicationSetting/(Applicant)/Applicant/mockData.tsx ***!
  \*************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mockApplicantList: function() { return /* binding */ mockApplicantList; }\n/* harmony export */ });\nconst mockApplicantList = [\n    {\n        name: \"김철수\",\n        studentId: \"20210101\",\n        gender: \"남\",\n        applicationBuilding: \"기숙사 A동\",\n        residence: \"서울특별시 강남구 테헤란로 123\",\n        certifiedFile: null,\n        prioritySelection: null,\n        assignedBuilding: \"기숙사 B동\",\n        isPassed: \"pass\",\n        isChecked: false,\n        setIsChecked: (d)=>{}\n    },\n    {\n        name: \"박영희\",\n        studentId: \"20210202\",\n        gender: \"여\",\n        applicationBuilding: \"기숙사 C동\",\n        residence: \"부산광역시 해운대구 해운대로 456\",\n        certifiedFile: null,\n        prioritySelection: null,\n        assignedBuilding: null,\n        isPassed: \"out\",\n        isChecked: false,\n        setIsChecked: (d)=>{}\n    },\n    {\n        name: \"이민수\",\n        studentId: \"20210303\",\n        gender: \"남\",\n        applicationBuilding: \"기숙사 D동\",\n        residence: \"대구광역시 수성구 동대구로 789\",\n        certifiedFile: null,\n        prioritySelection: null,\n        assignedBuilding: \"기숙사 E동\",\n        isPassed: \"movingPass\",\n        isChecked: false,\n        setIsChecked: (d)=>{}\n    },\n    {\n        name: \"최지우\",\n        studentId: \"20210404\",\n        gender: \"여\",\n        applicationBuilding: \"기숙사 F동\",\n        residence: \"인천광역시 남동구 예술로 123\",\n        certifiedFile: null,\n        prioritySelection: null,\n        assignedBuilding: null,\n        isPassed: \"pass\",\n        isChecked: false,\n        setIsChecked: (d)=>{}\n    },\n    {\n        name: \"홍길동\",\n        studentId: \"20210505\",\n        gender: \"남\",\n        applicationBuilding: \"기숙사 G동\",\n        residence: \"대전광역시 유성구 대학로 456\",\n        certifiedFile: null,\n        prioritySelection: null,\n        assignedBuilding: \"기숙사 H동\",\n        isPassed: \"out\",\n        isChecked: false,\n        setIsChecked: (d)=>{}\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL0pvaW5BcHBsaWNhdGlvblNldHRpbmcvKEFwcGxpY2FudCkvQXBwbGljYW50L21vY2tEYXRhLnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsb0JBQW9CO0lBQy9CO1FBQ0VDLE1BQU07UUFDTkMsV0FBVztRQUNYQyxRQUFRO1FBQ1JDLHFCQUFxQjtRQUNyQkMsV0FBVztRQUNYQyxlQUFlO1FBQ2ZDLG1CQUFtQjtRQUNuQkMsa0JBQWtCO1FBQ2xCQyxVQUFVO1FBQ1ZDLFdBQVc7UUFDWEMsY0FBYyxDQUFDQyxLQUFnQjtJQUNqQztJQUNBO1FBQ0VYLE1BQU07UUFDTkMsV0FBVztRQUNYQyxRQUFRO1FBQ1JDLHFCQUFxQjtRQUNyQkMsV0FBVztRQUNYQyxlQUFlO1FBQ2ZDLG1CQUFtQjtRQUNuQkMsa0JBQWtCO1FBQ2xCQyxVQUFVO1FBQ1ZDLFdBQVc7UUFDWEMsY0FBYyxDQUFDQyxLQUFnQjtJQUNqQztJQUNBO1FBQ0VYLE1BQU07UUFDTkMsV0FBVztRQUNYQyxRQUFRO1FBQ1JDLHFCQUFxQjtRQUNyQkMsV0FBVztRQUNYQyxlQUFlO1FBQ2ZDLG1CQUFtQjtRQUNuQkMsa0JBQWtCO1FBQ2xCQyxVQUFVO1FBQ1ZDLFdBQVc7UUFDWEMsY0FBYyxDQUFDQyxLQUFnQjtJQUNqQztJQUNBO1FBQ0VYLE1BQU07UUFDTkMsV0FBVztRQUNYQyxRQUFRO1FBQ1JDLHFCQUFxQjtRQUNyQkMsV0FBVztRQUNYQyxlQUFlO1FBQ2ZDLG1CQUFtQjtRQUNuQkMsa0JBQWtCO1FBQ2xCQyxVQUFVO1FBQ1ZDLFdBQVc7UUFDWEMsY0FBYyxDQUFDQyxLQUFnQjtJQUNqQztJQUNBO1FBQ0VYLE1BQU07UUFDTkMsV0FBVztRQUNYQyxRQUFRO1FBQ1JDLHFCQUFxQjtRQUNyQkMsV0FBVztRQUNYQyxlQUFlO1FBQ2ZDLG1CQUFtQjtRQUNuQkMsa0JBQWtCO1FBQ2xCQyxVQUFVO1FBQ1ZDLFdBQVc7UUFDWEMsY0FBYyxDQUFDQyxLQUFnQjtJQUNqQztDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvSm9pbkFwcGxpY2F0aW9uU2V0dGluZy8oQXBwbGljYW50KS9BcHBsaWNhbnQvbW9ja0RhdGEudHN4P2UwMjQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG1vY2tBcHBsaWNhbnRMaXN0ID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICfquYDssqDsiJgnLFxyXG4gICAgc3R1ZGVudElkOiAnMjAyMTAxMDEnLFxyXG4gICAgZ2VuZGVyOiAn64KoJyxcclxuICAgIGFwcGxpY2F0aW9uQnVpbGRpbmc6ICfquLDsiJnsgqwgQeuPmScsXHJcbiAgICByZXNpZGVuY2U6ICfshJzsmrjtirnrs4Tsi5wg6rCV64Ko6rWsIO2FjO2XpOuegOuhnCAxMjMnLFxyXG4gICAgY2VydGlmaWVkRmlsZTogbnVsbCxcclxuICAgIHByaW9yaXR5U2VsZWN0aW9uOiBudWxsLFxyXG4gICAgYXNzaWduZWRCdWlsZGluZzogJ+q4sOyImeyCrCBC64+ZJyxcclxuICAgIGlzUGFzc2VkOiAncGFzcycsIC8vICdwYXNzJyB8ICdvdXQnIHwgJ21vdmluZ1Bhc3MnIOykkSDtlZjrgphcclxuICAgIGlzQ2hlY2tlZDogZmFsc2UsXHJcbiAgICBzZXRJc0NoZWNrZWQ6IChkOiBib29sZWFuKSA9PiB7fSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICfrsJXsmIHtnawnLFxyXG4gICAgc3R1ZGVudElkOiAnMjAyMTAyMDInLFxyXG4gICAgZ2VuZGVyOiAn7JesJyxcclxuICAgIGFwcGxpY2F0aW9uQnVpbGRpbmc6ICfquLDsiJnsgqwgQ+uPmScsXHJcbiAgICByZXNpZGVuY2U6ICfrtoDsgrDqtJHsl63si5wg7ZW07Jq064yA6rWsIO2VtOyatOuMgOuhnCA0NTYnLFxyXG4gICAgY2VydGlmaWVkRmlsZTogbnVsbCxcclxuICAgIHByaW9yaXR5U2VsZWN0aW9uOiBudWxsLFxyXG4gICAgYXNzaWduZWRCdWlsZGluZzogbnVsbCxcclxuICAgIGlzUGFzc2VkOiAnb3V0JywgLy8gJ3Bhc3MnIHwgJ291dCcgfCAnbW92aW5nUGFzcycg7KSRIO2VmOuCmFxyXG4gICAgaXNDaGVja2VkOiBmYWxzZSxcclxuICAgIHNldElzQ2hlY2tlZDogKGQ6IGJvb2xlYW4pID0+IHt9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ+ydtOuvvOyImCcsXHJcbiAgICBzdHVkZW50SWQ6ICcyMDIxMDMwMycsXHJcbiAgICBnZW5kZXI6ICfrgqgnLFxyXG4gICAgYXBwbGljYXRpb25CdWlsZGluZzogJ+q4sOyImeyCrCBE64+ZJyxcclxuICAgIHJlc2lkZW5jZTogJ+uMgOq1rOq0keyXreyLnCDsiJjshLHqtawg64+Z64yA6rWs66GcIDc4OScsXHJcbiAgICBjZXJ0aWZpZWRGaWxlOiBudWxsLFxyXG4gICAgcHJpb3JpdHlTZWxlY3Rpb246IG51bGwsXHJcbiAgICBhc3NpZ25lZEJ1aWxkaW5nOiAn6riw7IiZ7IKsIEXrj5knLFxyXG4gICAgaXNQYXNzZWQ6ICdtb3ZpbmdQYXNzJywgLy8gJ3Bhc3MnIHwgJ291dCcgfCAnbW92aW5nUGFzcycg7KSRIO2VmOuCmFxyXG4gICAgaXNDaGVja2VkOiBmYWxzZSxcclxuICAgIHNldElzQ2hlY2tlZDogKGQ6IGJvb2xlYW4pID0+IHt9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ+y1nOyngOyasCcsXHJcbiAgICBzdHVkZW50SWQ6ICcyMDIxMDQwNCcsXHJcbiAgICBnZW5kZXI6ICfsl6wnLFxyXG4gICAgYXBwbGljYXRpb25CdWlsZGluZzogJ+q4sOyImeyCrCBG64+ZJyxcclxuICAgIHJlc2lkZW5jZTogJ+yduOyynOq0keyXreyLnCDrgqjrj5nqtawg7JiI7Iig66GcIDEyMycsXHJcbiAgICBjZXJ0aWZpZWRGaWxlOiBudWxsLFxyXG4gICAgcHJpb3JpdHlTZWxlY3Rpb246IG51bGwsXHJcbiAgICBhc3NpZ25lZEJ1aWxkaW5nOiBudWxsLFxyXG4gICAgaXNQYXNzZWQ6ICdwYXNzJywgLy8gJ3Bhc3MnIHwgJ291dCcgfCAnbW92aW5nUGFzcycg7KSRIO2VmOuCmFxyXG4gICAgaXNDaGVja2VkOiBmYWxzZSxcclxuICAgIHNldElzQ2hlY2tlZDogKGQ6IGJvb2xlYW4pID0+IHt9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ+2Zjeq4uOuPmScsXHJcbiAgICBzdHVkZW50SWQ6ICcyMDIxMDUwNScsXHJcbiAgICBnZW5kZXI6ICfrgqgnLFxyXG4gICAgYXBwbGljYXRpb25CdWlsZGluZzogJ+q4sOyImeyCrCBH64+ZJyxcclxuICAgIHJlc2lkZW5jZTogJ+uMgOyghOq0keyXreyLnCDsnKDshLHqtawg64yA7ZWZ66GcIDQ1NicsXHJcbiAgICBjZXJ0aWZpZWRGaWxlOiBudWxsLFxyXG4gICAgcHJpb3JpdHlTZWxlY3Rpb246IG51bGwsXHJcbiAgICBhc3NpZ25lZEJ1aWxkaW5nOiAn6riw7IiZ7IKsIEjrj5knLFxyXG4gICAgaXNQYXNzZWQ6ICdvdXQnLCAvLyAncGFzcycgfCAnb3V0JyB8ICdtb3ZpbmdQYXNzJyDspJEg7ZWY64KYXHJcbiAgICBpc0NoZWNrZWQ6IGZhbHNlLFxyXG4gICAgc2V0SXNDaGVja2VkOiAoZDogYm9vbGVhbikgPT4ge30sXHJcbiAgfSxcclxuXTtcclxuIl0sIm5hbWVzIjpbIm1vY2tBcHBsaWNhbnRMaXN0IiwibmFtZSIsInN0dWRlbnRJZCIsImdlbmRlciIsImFwcGxpY2F0aW9uQnVpbGRpbmciLCJyZXNpZGVuY2UiLCJjZXJ0aWZpZWRGaWxlIiwicHJpb3JpdHlTZWxlY3Rpb24iLCJhc3NpZ25lZEJ1aWxkaW5nIiwiaXNQYXNzZWQiLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/JoinApplicationSetting/(Applicant)/Applicant/mockData.tsx\n"));

/***/ })

});