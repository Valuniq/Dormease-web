(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[441],{9123:function(e,t,r){Promise.resolve().then(r.bind(r,76271))},72671:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),a=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),s=Object.assign,n={};function o(e,t,r){this.props=e,this.context=t,this.refs=n,this.updater=r||a}function i(){}function l(e,t,r){this.props=e,this.context=t,this.refs=n,this.updater=r||a}o.prototype.isReactComponent={},o.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},i.prototype=o.prototype;var c=l.prototype=new i;c.constructor=l,s(c,o.prototype),c.isPureReactComponent=!0;var f=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,a){var s,n={},o=null,i=null;if(null!=t)for(s in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)f.call(t,s)&&!u.hasOwnProperty(s)&&(n[s]=t[s]);var l=arguments.length-2;if(1===l)n.children=a;else if(1<l){for(var c=Array(l),h=0;h<l;h++)c[h]=arguments[h+2];n.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps)void 0===n[s]&&(n[s]=l[s]);return{$$typeof:r,type:e,key:o,ref:i,props:n,_owner:null}}},52846:function(e,t,r){"use strict";e.exports=r(72671)},76271:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var a=r(57437),s=r(46331);r(2265);var n=r(73122),o=e=>{let{prevApplicantLists:t}=e;return(0,a.jsx)("div",{className:"w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50",children:(0,a.jsxs)("table",{className:"w-[1250px]",children:[(0,a.jsxs)("thead",{className:"w-full h-36 bg-white sticky top-0 z-1",children:[(0,a.jsxs)("tr",{className:"text-gray-grayscale50",children:[(0,a.jsx)("th",{className:"H4",children:"제목"}),(0,a.jsx)("th",{className:"H4",children:"등록일자"})]}),(0,a.jsx)("th",{colSpan:2,children:(0,a.jsx)("div",{className:"w-full h-18 border-b-1 border-b-gray-grayscale50"})})]}),t&&t.length>0?(0,a.jsxs)("tbody",{className:"overflow-y-scroll",children:[(0,a.jsx)("tr",{className:"h-15"}),t.map((e,t)=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("tr",{className:"h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50",children:[(0,a.jsx)("td",{className:"text-center",children:e.title}),(0,a.jsx)("td",{className:"text-center",children:e.registrationDate})]}),(0,a.jsx)("tr",{className:"h-15"})," "]}))]}):(0,a.jsxs)("tbody",{children:[(0,a.jsx)("td",{className:"h-full",children:(0,a.jsx)(n.Z,{colspan:2})})," "]})]})})};let i=[{title:"2024학년도 2학기 재학생, 복학생, 대학원생 입사 신청 안내",registrationDate:"2022-02-22"},{title:"2024학년도 2학기 재학생, 복학생, 대학원생 입사 신청 안내",registrationDate:"2022-02-22"},{title:"2024학년도 2학기 재학생, 복학생, 대학원생 입사 신청 안내",registrationDate:"2022-02-22"},{title:"2024학년도 2학기 재학생, 복학생, 대학원생 입사 신청 안내",registrationDate:"2022-02-22"},{title:"2024학년도 2학기 재학생, 복학생, 대학원생 입사 신청 안내",registrationDate:"2022-02-22"},{title:"2024학년도 2학기 재학생, 복학생, 대학원생 입사 신청 안내",registrationDate:"2022-02-22"},{title:"2024학년도 2학기 재학생, 복학생, 대학원생 입사 신청 안내",registrationDate:"2022-02-22"},{title:"2024학년도 2학기 재학생, 복학생, 대학원생 입사 신청 안내",registrationDate:"2022-02-22"},{title:"2024학년도 2학기 재학생, 복학생, 대학원생 입사 신청 안내",registrationDate:"2022-02-22"},{title:"2024학년도 2학기 재학생, 복학생, 대학원생 입사 신청 안내",registrationDate:"2022-02-22"},{title:"2024학년도 2학기 재학생, 복학생, 대학원생 입사 신청 안내",registrationDate:"2022-02-22"}];var l=()=>(0,a.jsxs)("div",{className:"w-[1250px]",children:[(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)("h1",{className:"H0 text-gray-grayscale50",children:"이전 내역"})}),(0,a.jsx)(s.Z,{label:"목록으로",disabled:!1}),(0,a.jsx)(o,{prevApplicantLists:i})]})},46331:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var a,s=r(57437);r(2265);var n=r(52846);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var i=function(e){return n.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:8,height:14,fill:"none"},e),a||(a=n.createElement("path",{fill:"currentColor",d:"m.707 7.707 5.586 5.586c.63.63 1.707.184 1.707-.707V1.414C8 .524 6.923.077 6.293.707L.707 6.293a1 1 0 0 0 0 1.414"})))},l=e=>{let{label:t,disabled:r,selected:a=!1,...n}=e;return(0,s.jsxs)("button",{...n,disabled:r,className:"H4 flex items-center w-133 h-42 rounded-8 text-gray-grayscale-50 hover:hover-transition ".concat(a?"bg-gray-grayscale30":"bg-gray-grayscale10 disabled:text-gray-grayscale30 disabled:bg-gray-grayscale10 hover:bg-gray-grayscale20 active:bg-gray-grayscale30"),children:[(0,s.jsx)(i,{className:"ml-12 mr-20"}),t]})}},73122:function(e,t,r){"use strict";var a=r(57437);r(2265),t.Z=e=>{let{colspan:t}=e;return(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:t,className:"h-full",children:(0,a.jsx)("div",{className:"flex justify-center items-center h-693",children:(0,a.jsx)("h1",{className:"H1 text-gray-grayscale30",children:"리스트가 비었습니다."})})})})}}},function(e){e.O(0,[2971,8069,1744],function(){return e(e.s=9123)}),_N_E=e.O()}]);