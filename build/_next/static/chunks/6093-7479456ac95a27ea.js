"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6093,1475],{72671:function(e,t){/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),a=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),s=Object.assign,c={};function l(e,t,r){this.props=e,this.context=t,this.refs=c,this.updater=r||a}function n(){}function i(e,t,r){this.props=e,this.context=t,this.refs=c,this.updater=r||a}l.prototype.isReactComponent={},l.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},l.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},n.prototype=l.prototype;var o=i.prototype=new n;o.constructor=i,s(o,l.prototype),o.isPureReactComponent=!0;var d=Object.prototype.hasOwnProperty,h={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,a){var s,c={},l=null,n=null;if(null!=t)for(s in void 0!==t.ref&&(n=t.ref),void 0!==t.key&&(l=""+t.key),t)d.call(t,s)&&!h.hasOwnProperty(s)&&(c[s]=t[s]);var i=arguments.length-2;if(1===i)c.children=a;else if(1<i){for(var o=Array(i),A=0;A<i;A++)o[A]=arguments[A+2];c.children=o}if(e&&e.defaultProps)for(s in i=e.defaultProps)void 0===c[s]&&(c[s]=i[s]);return{$$typeof:r,type:e,key:l,ref:n,props:c,_owner:null}}},52846:function(e,t,r){e.exports=r(72671)},46331:function(e,t,r){r.d(t,{Z:function(){return i}});var a,s=r(57437);r(2265);var c=r(52846);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var n=function(e){return c.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:8,height:14,fill:"none"},e),a||(a=c.createElement("path",{fill:"currentColor",d:"m.707 7.707 5.586 5.586c.63.63 1.707.184 1.707-.707V1.414C8 .524 6.923.077 6.293.707L.707 6.293a1 1 0 0 0 0 1.414"})))},i=e=>{let{label:t,disabled:r,selected:a=!1,...c}=e;return(0,s.jsxs)("button",{...c,disabled:r,className:"H4 flex items-center w-133 h-42 rounded-8 text-gray-grayscale-50 hover:hover-transition ".concat(a?"bg-gray-grayscale30":"bg-gray-grayscale10 disabled:text-gray-grayscale30 disabled:bg-gray-grayscale10 hover:bg-gray-grayscale20 active:bg-gray-grayscale30"),children:[(0,s.jsx)(n,{className:"ml-12 mr-20"}),t]})}},31475:function(e,t,r){r.r(t),r.d(t,{default:function(){return n}});var a=r(57437);r(2265);var s={src:"/_next/static/media/Checked.2a02f83f.png",height:40,width:39,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEU3e941eNg2eNg2edo2e942dtU0ddI2edo3eNk5gOaHhQcyAAAACXRSTlP+/dqx7UQiy4HaUf1QAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMUlEQVR4nB3FyQ3AQAjAQJtjCf03HAk/xmRcyQKH6GaLw+YbsL98s0L1i1Wg6h6CEj8a4AC53DY/oQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},c={src:"/_next/static/media/UnChecked.bea25168.png",height:39,width:39,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVERERMaXFVVVU/Pz9mZmZ/f39VVVV1Ch9XAAAAB3RSTlN1AAMEBQQGqDJaiQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACRJREFUeJxjYIADFiYmJiY2BgYGJkZGRkZm/AxWRiYmRhaEZgAKMwBG4KHziQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},l=r(20703),n=e=>{let{isChecked:t,setIsChecked:r}=e;return(0,a.jsx)(l.default,{className:"cursor-pointer",src:t?s:c,alt:t?"Checked":"UnChecked",width:19.5,height:19.5,onClick:e=>{e.stopPropagation(),r(!t)}})}},11867:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(57437),s=r(20703),c={src:"/_next/static/media/SearchIcon.fd87d628.png",height:20,width:20,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEW7u7vMzMzNzc3Ozs7MzMzLy8vLy8vOzs6cMFoWAAAACHRSTlMBlqENf1hlKKFJ7xkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAwSURBVHicJYpJCgBADMJi7fL/Hw8yOUiQwJQ0wAqIlQELitD3xTLbaTKrVuvyn7l6DrcAeLXaQ4sAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},l=e=>{let{input:t,setInput:r,placeholder:l}=e;return(0,a.jsxs)("div",{className:"".concat(t?"border-gray-grayscale50":"border-gray-grayscale30"," focus:border-gray-grayscale40 border-[1.5px] w-380 h-38 flex items-center rounded-5"),children:[(0,a.jsx)("input",{className:"outline-none H4-cation px-12 w-292 h-24  text-gray-grayscale50 placeholder:text-gray-grayscale30",placeholder:l,type:"text",value:t,onChange:e=>{r(e.target.value)}}),(0,a.jsx)(s.default,{src:c,width:18,height:18,className:"ml-auto mr-9 object-contain",alt:"SearchIcon"})]})}},73122:function(e,t,r){var a=r(57437);r(2265),t.Z=e=>{let{colspan:t}=e;return(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:t,className:"h-full",children:(0,a.jsx)("div",{className:"flex justify-center items-center h-693",children:(0,a.jsx)("h1",{className:"H1 text-gray-grayscale30",children:"리스트가 비었습니다."})})})})}},2747:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(57437),s=r(31475),c=r(73122);r(2265);var l=e=>{let{name:t,studentId:r,gender:c,applicationBuilding:l,residence:n,certifiedFile:i,prioritySelection:o,assignedBuilding:d,isPassed:h,isChecked:A,setIsChecked:u}=e;return(0,a.jsxs)("tr",{className:"h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50",children:[(0,a.jsx)("td",{className:"text-center",children:t}),(0,a.jsx)("td",{className:"text-center",children:r}),(0,a.jsx)("td",{className:"text-center",children:c}),(0,a.jsx)("td",{className:"text-center",children:l}),(0,a.jsx)("td",{className:"text-center flex justify-center",children:(0,a.jsx)("div",{className:"w-286",children:(0,a.jsx)("h1",{className:" H4-caption text-gray-grayscale50",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:n})})}),(0,a.jsx)("td",{className:"text-center",children:i?i.name:"-"}),(0,a.jsx)("td",{className:"text-center",children:o?"O":"X"}),(0,a.jsx)("td",{className:"text-center",children:d&&d.length>0?d:"-"}),(0,a.jsx)("td",{className:"text-center ".concat("pass"===h?"text-blue-blue30":"out"===h?"text-red-red20":""),children:"pass"===h?"합격":"out"===h?"탈락":"movingPass"===h?"이동합격":"-"}),(0,a.jsx)("td",{className:"flex justify-center",children:(0,a.jsx)(s.default,{isChecked:A,setIsChecked:u})})]})},n=e=>{let{applicantLists:t,isAllChecked:r,setIsAllChecked:n}=e;return(0,a.jsx)("div",{className:"w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50",children:(0,a.jsxs)("table",{className:"w-[1305px]",children:[(0,a.jsxs)("thead",{className:"w-full h-36 bg-white sticky top-0 z-1",children:[(0,a.jsxs)("tr",{className:"text-gray-grayscale50",children:[(0,a.jsx)("th",{className:"H4",children:"이름"}),(0,a.jsx)("th",{className:"H4",children:"학번"}),(0,a.jsx)("th",{className:"H4",children:"성별"}),(0,a.jsx)("th",{className:"H4",children:"신청건물"}),(0,a.jsx)("th",{className:"H4",children:"본거주지"}),(0,a.jsx)("th",{className:"H4",children:"등본파일"}),(0,a.jsx)("th",{className:"H4",children:"우선선발"}),(0,a.jsx)("th",{className:"H4",children:"배정건물"}),(0,a.jsx)("th",{className:"H4",children:"합격여부"}),(0,a.jsx)("th",{children:(0,a.jsxs)("div",{className:"H4 flex  items-center justify-center text-center w-full",children:[(0,a.jsx)("h1",{className:"mr-4",children:"전체"}),(0,a.jsx)(s.default,{isChecked:r,setIsChecked:n})]})})]}),(0,a.jsx)("th",{colSpan:10,children:(0,a.jsx)("div",{className:"w-full h-18 border-b-1 border-b-gray-grayscale50"})})]}),t&&t.length>0?(0,a.jsxs)("tbody",{className:"overflow-y-scroll",children:[(0,a.jsx)("tr",{className:"h-15"}),t.map(e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,{name:e.name,studentId:e.studentId,gender:e.gender,applicationBuilding:e.applicationBuilding,residence:e.residence,certifiedFile:e.certifiedFile,prioritySelection:e.prioritySelection,assignedBuilding:e.assignedBuilding,isPassed:e.isPassed,isChecked:e.isChecked,setIsChecked:e.setIsChecked}),(0,a.jsx)("tr",{className:"h-15"})]}))]}):(0,a.jsx)("tbody",{children:(0,a.jsx)(c.Z,{colspan:10})})]})})}}}]);