(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[900],{7176:function(e,t,r){"use strict";var a,n=r(2846);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}t.Z=function(e){return n.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:14,height:14,fill:"none"},e),a||(a=n.createElement("path",{stroke:"#D83636",strokeLinecap:"round",strokeWidth:2,d:"M1 13 13 1M13 13 1 1"})))}},3102:function(e,t,r){Promise.resolve().then(r.bind(r,1982))},2671:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),a=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),n=Object.assign,l={};function s(e,t,r){this.props=e,this.context=t,this.refs=l,this.updater=r||a}function o(){}function c(e,t,r){this.props=e,this.context=t,this.refs=l,this.updater=r||a}s.prototype.isReactComponent={},s.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},s.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},o.prototype=s.prototype;var i=c.prototype=new o;i.constructor=c,n(i,s.prototype),i.isPureReactComponent=!0;var u=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,a){var n,l={},s=null,o=null;if(null!=t)for(n in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)u.call(t,n)&&!d.hasOwnProperty(n)&&(l[n]=t[n]);var c=arguments.length-2;if(1===c)l.children=a;else if(1<c){for(var i=Array(c),b=0;b<c;b++)i[b]=arguments[b+2];l.children=i}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===l[n]&&(l[n]=c[n]);return{$$typeof:r,type:e,key:s,ref:o,props:l,_owner:null}}},2846:function(e,t,r){"use strict";e.exports=r(2671)},1982:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var a,n,l=r(7437),s=r(8751),o=r(2265),c=r(2846);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var u=function(e){return c.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},e),a||(a=c.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:2.25,d:"M1.5 12h21M12 1.5v21"})))},d=e=>{let{...t}=e;return(0,l.jsxs)("button",{...t,className:"group flex flex-col justify-center items-center w-142 h-76 rounded-full bg-transparent hover:bg-gray-grayscale5 hover:hover-transition active:bg-gray-grayscale10",children:[(0,l.jsx)("div",{className:"flex justify-center items-center w-33 h-33 rounded-3 bg-gray-grayscale20 group-active:bg-gray-grayscale30",children:(0,l.jsx)(u,{className:"text-white group-hover:text-gray-grayscale5 group-hover:hover-transition group-active:text-gray-grayscale10"})}),(0,l.jsx)("h2",{className:"caption-2 mt-5 text-gray-grayscale40",children:"층 추가"})]})},b=r(5407),g=r(8871),h=r(1371),x=r(621),p=e=>{let{label:t,detail:r,selected:a=!1,done:n,...s}=e;return(0,l.jsx)("button",{...s,className:"H4 rounded-8 ".concat(!0===r?"w-80 h-34":"w-143 h-42"," ").concat(a?"text-white bg-blue-blue30":n?"text-white bg-blue-blue20":"text-gray-grayscale30 bg-gray-grayscale5 hover:text-blue-blue10 hover:bg-blue-blue20 hover:hover-transition hover:hover-transition active:text-white active:bg-blue-blue30","\n"),children:t})};function v(){return(v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var y=function(e){return c.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:5,height:19,fill:"none"},e),n||(n=c.createElement("path",{fill:"#474747",d:"M2.125 4.25a2.125 2.125 0 1 1 0-4.25 2.125 2.125 0 0 1 0 4.25M2.125 11.5a2.124 2.124 0 1 1 0-4.249 2.124 2.124 0 0 1 0 4.248M2.125 18.749a2.123 2.123 0 1 1 0-4.247 2.123 2.123 0 0 1 0 4.247"})))},f=r(7176),m=r(4770),j=e=>{let{selected:t=!1,hovered:r=!1,floorInput:a,setFloorInput:n,endInput:s,setEndInput:o,isOne:c,pressOkBtn:i,...u}=e;return(0,l.jsxs)("button",{...u,className:"group flex justify-between items-center w-403 h-52 rounded-r-8 rounded-l-50 ".concat(c?"":r?"bg-gray-grayscale5":"hover:bg-gray-grayscale5 hover:hover-transition"," "),children:[(0,l.jsx)(f.Z,{className:"ml-21 opacity-0 ".concat(c?"":r?"opacity-100":"group-hover:opacity-100 group-hover:hover-transition")}),(0,l.jsxs)("div",{className:"flex items-center ".concat(t?r?"":"bg-blue-blue15 py-9 px-14 rounded-8 group-hover:bg-gray-grayscale5 group-hover:hover-transition:":""),children:[(0,l.jsx)(m.Z,{input:a,setInput:n,placeholder:"층",type:"textBox7"}),(0,l.jsx)("h5",{className:"Caption2 text-gray-grayscale50 ml-4 mr-17",children:"층"}),(0,l.jsx)(m.Z,{input:"1",setInput:e=>{},placeholder:"시작",type:"textBox7",readOnly:!0}),(0,l.jsx)("h5",{className:"Caption2 text-gray-grayscale50 mx-6",children:"-"}),(0,l.jsx)(m.Z,{input:s,setInput:o,placeholder:"끝",type:"textBox7"}),(0,l.jsx)("div",{className:"w-22"}),i?(0,l.jsx)(h.Z,{label:"복제",disabled:!1,selected:!1,variant:"blue"}):(0,l.jsx)(h.Z,{label:"확인",disabled:""===a||""===s,selected:!1,variant:"blue"})]}),(0,l.jsx)(y,{className:"mr-11 opacity-0 ".concat(c?"":r?"opacity-100":"group-hover:opacity-100 group-hover:hover-transition")})]})},w={src:"/_next/static/media/BuildingTextIcon.f2783d9a.png",height:26,width:26,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEU0NDRMaXEwMDBFRUUxMTEzMzM0NDQwMDAwMDAwMDA0NDQzMzMyMjKRQ+wNAAAADXRSTlP+AIEDLuf1okZgxBSOr0Gx4QAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUeJwVx8ERwDAIwDAbUkjS7j9vj5dOaPpWi+k+wUe6HnYEI7VkJJRLEabUPJXuM/oDHeYAwichZ34AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},N=r(703),A=e=>{let{placeholder:t,input:r,setInput:a}=e;return(0,l.jsxs)("div",{className:"flex items-end",children:[(0,l.jsx)("input",{className:"".concat(r?"border-b-gray-grayscale50 ":"border-b-gray-grayscale20"," H0 focus:border-b-gray-grayscale50 w-507 h-60 border-b-1 placeholder:text-gray-grayscale30 text-center focus:outline-none pb-6 text-gray-grayscale50 "),placeholder:t,type:"text",value:r,onChange:e=>{a(e.target.value)}}),(0,l.jsx)(N.default,{src:w,width:25,height:25,className:"object-contain mb-5",alt:"BuildingTextIcon"})]})},S=e=>{let{id:t}=e,[r,a]=(0,o.useState)(""),[n,c]=(0,o.useState)(""),[i,u]=(0,o.useState)([{floor:1,startRoomNumber:1,endRoomNumber:30},{floor:2,startRoomNumber:1,endRoomNumber:30}]),[v,y]=(0,o.useState)([{floor:3,startRoomNumber:1,endRoomNumber:30}]),[f,m]=(0,o.useState)({floor:2,startRoomNumber:1,endRoomNumber:30}),[w,N]=(0,o.useState)(0),[S,O]=(0,o.useState)(0),[E,M]=(0,o.useState)([]),k=e=>{let t=parseInt(e,10);isNaN(t)||y(e=>{let r=e.findIndex(e=>e.floor===t);return -1!==r?e.map((e,a)=>a===r?{...e,floor:t}:e):[...e,{floor:t,startRoomNumber:1,endRoomNumber:30}]})};return(0,l.jsxs)("div",{className:"flex flex-col relative w-[1331px]",children:[(0,l.jsx)("div",{className:"flex justify-center w-full mb-30",children:(0,l.jsx)(A,{placeholder:"건물명",input:r,setInput:a})}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center",children:[(0,l.jsx)("div",{children:n?(0,l.jsx)(x.Z,{image:n}):(0,l.jsx)(s.Z,{})}),(0,l.jsxs)("div",{className:"mt-28 flex flex-col items-center",children:[(0,l.jsx)("h3",{className:"H3 text-gray-grayscale50 text-center",children:"호실 개수"}),(0,l.jsx)("hr",{className:"w-331 border-gray-grayscale50 mt-15 mb-8"}),(0,l.jsxs)("div",{className:"flex flex-col mr-15 gap-12",children:[i.map((e,t)=>{var r,a;return(0,l.jsx)(j,{selected:f===e,floorInput:(null===(r=e.floor)||void 0===r?void 0:r.toString())||"",setFloorInput:e=>k(e),endInput:(null===(a=e.endRoomNumber)||void 0===a?void 0:a.toString())||"",setEndInput:function(e){throw Error("Function not implemented.")},isOne:0===t,pressOkBtn:!0,hovered:!1},t)}),v.map((e,t)=>{var r,a;return(0,l.jsx)(j,{selected:f===e,floorInput:(null===(r=e.floor)||void 0===r?void 0:r.toString())||"",setFloorInput:e=>k(e),endInput:(null===(a=e.endRoomNumber)||void 0===a?void 0:a.toString())||"",setEndInput:function(e){throw Error("Function not implemented.")},isOne:!1,pressOkBtn:!1,hovered:!1},t)})]}),(0,l.jsx)("div",{className:"h-13"}),(0,l.jsx)(d,{onClick:()=>u([...i,{floor:parseInt(""),startRoomNumber:1,endRoomNumber:parseInt("")}])})]})]}),(0,l.jsx)("div",{className:"w-33"}),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"w-917 h-121 shadow2 rounded-7 bg-white items-center flex justify-between pl-40 pr-23 px-13 mb-30",children:[(0,l.jsx)("h1",{className:"H1 text-blue-blue30",children:"필터"}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex gap-22",children:[(0,l.jsx)(p,{label:"남자/여자",detail:!1,selected:1===S,done:E.includes(1)}),(0,l.jsx)(p,{label:"호실 타입",detail:!1,selected:2===S,done:E.includes(2)}),(0,l.jsx)(p,{label:"열쇠 수령 여부",detail:!1,selected:3===S,done:E.includes(3)}),(0,l.jsx)(p,{label:"비활성화",detail:!1,selected:4===S,done:E.includes(4)})]}),(0,l.jsx)("div",{className:"h-53 flex gap-15 justify-end items-end ",children:1===S?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{label:"남자",detail:!0,selected:!1}),(0,l.jsx)(p,{label:"여자",detail:!0,selected:!1})]}):2===S?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{label:"1인실",detail:!0,selected:!1}),(0,l.jsx)(p,{label:"2인실",detail:!0,selected:!1}),(0,l.jsx)(p,{label:"3인실",detail:!0,selected:!1}),(0,l.jsx)(p,{label:"4인실",detail:!0,selected:!1}),(0,l.jsx)(p,{label:"5인실",detail:!0,selected:!1}),(0,l.jsx)(p,{label:"6인실",detail:!0,selected:!1})]}):3===S?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{label:"수령",detail:!0,selected:!1}),(0,l.jsx)(p,{label:"미수령",detail:!0,selected:!1})]}):4===S?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.Z,{label:"활성화",disabled:!1,variant:"green"}),(0,l.jsx)(b.Z,{label:"비활성화",disabled:!1,variant:"red"})]}):(0,l.jsx)(l.Fragment,{})})]})]})})]}),(0,l.jsxs)("div",{className:"flex justify-between items-start mt-21",children:[(0,l.jsx)("div",{}),(0,l.jsx)(g.Z,{label:"등록",disabled:!1,variant:"blue"}),(0,l.jsx)(h.Z,{label:"저장",disabled:!1,variant:"blue",selected:!1})]})]})}},8751:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var a,n=r(7437);r(2265);var l=r(2846);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var o=function(e){return l.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:54,height:54,fill:"none"},e),a||(a=l.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:4.751,d:"M2.999 27h48M27 3v48"})))},c=e=>{let{...t}=e;return(0,n.jsxs)("button",{...t,className:"group flex flex-col justify-center items-center w-381 h-241 rounded-8 bg-gray-grayscale5 hover:hover-transition hover:bg-gray-grayscale10 active:bg-gray-grayscale20",children:[(0,n.jsx)("div",{className:"flex justify-center items-center w-102 h-102 rounded-full bg-gray-grayscale10 group-hover:hover-transition group-hover:bg-gray-grayscale20 group-active:bg-gray-grayscale30",children:(0,n.jsx)(o,{className:"text-gray-grayscale30 group-hover:text-gray-grayscale40 group-hover:hover-transition group-active:text-gray-grayscale50"})}),(0,n.jsx)("h2",{className:"H4 mt-21 w-142 py-5 rounded-full text-white bg-blue-blue30 group-hover:bg-blue-blue40 group-hover:hover-transition group-active:bg-blue-blue50",children:"건물 추가하기"})]})}},5407:function(e,t,r){"use strict";var a=r(7437);r(2265),t.Z=e=>{let{label:t,variant:r,disabled:n,selected:l=!1,...s}=e;return(0,a.jsx)("button",{...s,disabled:n,className:"H4 w-115 h-37 rounded-full text-white hover:hover-transition ".concat((()=>{switch(r){case"blue":return"".concat(l?"bg-blue-blue50":"bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50");case"green":return"".concat(l?"bg-green-green40":"bg-green-green20 disabled:bg-green-green10 hover:bg-green-green30 active:bg-green-green40");case"red":return"".concat(l?"bg-red-red40":"bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40");default:return""}})()),children:t})}},8871:function(e,t,r){"use strict";var a=r(7437);r(2265),t.Z=e=>{let{label:t,disabled:r,variant:n,selected:l=!1,...s}=e;return(0,a.jsx)("button",{...s,disabled:r,className:"w-133 h-42 rounded-8 hover:hover-transition ".concat((()=>{switch(n){case"blue":return"Btn-cap shadow2 text-white ".concat(l?"bg-blue-blue50":"bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50");case"green":return"Btn-cap shadow2 text-white ".concat(l?"bg-green-green40":"bg-green-green20 disabled:bg-green-green10 hover:bg-green-green30 active:bg-green-green40");case"red":return"Btn-cap shadow2 text-white ".concat(l?"bg-red-red40":"bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40");case"gray":return"H4 text-gray-grayscale50 ".concat(r?"disabled:text-gray-grayscale40 disabled:bg-transparent":l?"bg-gray-grayscale30":"bg-gray-grayscale10 hover:bg-gray-grayscale20 active:bg-gray-grayscale30");case"whiteblue":return"Btn-cap shadow2 ".concat(l?"bg-blue-blue30 border-blue-blue50 text-white":"text-blue-blue30 border-[1.5px] bg-white border-blue-blue30 disabled:text-blue-blue20 disabled:bg-white disabled:border-blue-blue20 hover:bg-blue-blue20 hover:border-blue-blue30 hover:text-blue-blue30 active:bg-blue-blue30 active:border-blue-blue50 active:text-white");case"white":return"".concat(r?"H4 disabled:text-gray-grayscale20 disabled:bg-transparent":l?"H4 text-gray-grayscale50 bg-gray-grayscale30":"H4 text-gray-grayscale40 hover:bg-gray-grayscale10 hover:text-gray-grayscale50 active:bg-gray-grayscale30");default:return""}})()),children:t})}},1371:function(e,t,r){"use strict";var a=r(7437);r(2265),t.Z=e=>{let{label:t,disabled:r,selected:n=!1,variant:l,...s}=e;return(0,a.jsx)("button",{...s,disabled:r,className:"H4 w-79 h-34 rounded-full text-white hover:hover-transition ".concat((e=>{switch(e){case"blue":return"".concat(n?"bg-blue-blue50":"bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50");case"red":return"".concat(n?"bg-red-red40":"bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40");default:return""}})(l)),children:t})}},621:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var a,n=r(7437);r(2265);var l=r(2846);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var o=function(e){return l.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:49,height:44,fill:"none"},e),a||(a=l.createElement("path",{stroke:"#CCC",strokeLinecap:"round",strokeWidth:3.75,d:"M2 32.508 17.058 18.39a2.5 2.5 0 0 1 3.527.107L42.781 42M32 29.814l7.246-6.04a2.5 2.5 0 0 1 3.368.153L47 28.313M47 37V7a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v30a5 5 0 0 0 5 5h35a5 5 0 0 0 5-5ZM37 13.563a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"})))},c=r(703),i=e=>{let{image:t,...r}=e;return(0,n.jsxs)("button",{...r,className:"group relative flex flex-col justify-center items-center w-381 h-247 rounded-8",children:[t&&(0,n.jsx)(c.default,{className:"group-hover:brightness-50 shadow1 rounded-8 group-hover:hover-transition",src:t,alt:"Build",layout:"fill",objectFit:"cover"}),(0,n.jsxs)("div",{className:"absolute inset-0 z-10 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100",children:[(0,n.jsx)(o,{}),(0,n.jsx)("div",{className:"flex items-center justify-center caption-2 mt-13 w-93 h-24 bg-gray-grayscale20 text-gray-grayscale40 rounded-full",children:"이미지 수정"})]})]})}},4770:function(e,t,r){"use strict";var a=r(7437);t.Z=e=>{let{input:t,setInput:r,placeholder:n,readOnly:l,type:s}=e,{boxSize:o,textAlign:c,inputType:i}=(e=>{switch(e){case"textBox1":default:return{boxSize:"w-133",textAlign:"",inputType:"text"};case"textBox2":return{boxSize:"w-235",textAlign:"",inputType:"text"};case"textBox3":return{boxSize:"w-76",textAlign:"placeholder:text-center text-center",inputType:"number"};case"textBox4":return{boxSize:"w-66",textAlign:"placeholder:text-center",inputType:"text"};case"textBox5":return{boxSize:"w-114",textAlign:"text-right",inputType:"text"};case"textBox6":return{boxSize:"w-145",textAlign:"text-right",inputType:"text"};case"textBox7":return{boxSize:"w-54",textAlign:"placeholder:text-center text-center",inputType:"number"};case"textBox8":return{boxSize:"w-111",textAlign:"",inputType:"text"}}})(s);return(0,a.jsx)("input",{className:"".concat(t?"border-gray-grayscale50":"border-gray-grayscale30"," H4-caption  border-[0.5px] outline-none px-8 ").concat(o," ").concat(c,"  rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30"),placeholder:n,type:i,value:t,readOnly:l,onChange:e=>{r(e.target.value)}})}}},function(e){e.O(0,[703,971,69,744],function(){return e(e.s=3102)}),_N_E=e.O()}]);