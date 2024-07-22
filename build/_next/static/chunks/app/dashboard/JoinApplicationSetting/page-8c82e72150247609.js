(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1953],{41191:function(e,t,r){Promise.resolve().then(r.bind(r,90230))},72671:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),a=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),s=Object.assign,n={};function l(e,t,r){this.props=e,this.context=t,this.refs=n,this.updater=r||a}function c(){}function i(e,t,r){this.props=e,this.context=t,this.refs=n,this.updater=r||a}l.prototype.isReactComponent={},l.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},l.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},c.prototype=l.prototype;var o=i.prototype=new c;o.constructor=i,s(o,l.prototype),o.isPureReactComponent=!0;var d=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,a){var s,n={},l=null,c=null;if(null!=t)for(s in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(l=""+t.key),t)d.call(t,s)&&!u.hasOwnProperty(s)&&(n[s]=t[s]);var i=arguments.length-2;if(1===i)n.children=a;else if(1<i){for(var o=Array(i),x=0;x<i;x++)o[x]=arguments[x+2];n.children=o}if(e&&e.defaultProps)for(s in i=e.defaultProps)void 0===n[s]&&(n[s]=i[s]);return{$$typeof:r,type:e,key:l,ref:c,props:n,_owner:null}}},52846:function(e,t,r){"use strict";e.exports=r(72671)},90230:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var a,s=r(57437);r(2265);var n=r(52846);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var c=function(e){return n.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:16,height:15,fill:"none"},e),a||(a=n.createElement("path",{stroke:"#323232",strokeLinecap:"round",strokeWidth:1.938,d:"M1.541 7.499h12.917M7.999 1.041v12.917"})))},i=e=>{let{...t}=e;return(0,s.jsxs)("button",{...t,className:"group flex flex-col justify-center items-center w-74 h-74 rounded-8 bg-transparent hover:bg-gray-grayscale5 hover:hover-transition active:bg-gray-grayscale10",children:[(0,s.jsx)("div",{className:"flex justify-center items-center mt-5 w-22 h-22 rounded-3 border-2 border-gray-grayscale50",children:(0,s.jsx)(c,{})}),(0,s.jsx)("h2",{className:"caption-2 mt-5 text-gray-grayscale50",children:"추가하기"})]})},o=e=>{let{label:t,disabled:r,selected:a=!1,...n}=e;return(0,s.jsx)("button",{...n,disabled:r,className:"H2 w-251 h-49 rounded-8 ".concat(a?"text-white bg-blue-blue40":"text-gray-grayscale-50 bg-gray-grayscale5 disabled:text-gray-grayscale30 disabled:bg-gray-grayscale5 hover:text-white hover:bg-blue-blue30 hover:hover-transition active:bg-blue-blue40"),children:t})},d=r(48871),u=r(94770),x=e=>{let{input:t,setInput:r,placeholder:a}=e;return(0,s.jsx)("input",{className:"H4 pb-3 border-b-1 outline-none px-2 w-[1295px] h-28 text-gray-grayscale50 placeholder:text-gray-grayscale30",placeholder:a,type:"text",value:t,onChange:e=>{r(e.target.value)}})},b={src:"/_next/static/media/calendarIcon.7f56788b.png",height:20,width:20,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUxMTEvLy8vLy8xMTEyMjIuLi4xMTExMTEXjJVtAAAACHRSTlNtHi9gTBJYihVP7Q8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAArSURBVHicbcaxEQAgDAOxt52E/Tfm4ChRJZqxmQZSBWHVMRDZsvKNdPNkAxb7AIe3FK8FAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},h=r(20703),g=()=>(0,s.jsxs)("div",{className:"w-184 h-371 rounded-8 bg-gray-grayscale5 px-9 py-10 flex flex-col items-center  H4 text-gray-grayscale50",children:[(0,s.jsxs)("div",{className:"w-full flex items-center justify-around mb-20",children:["이름",(0,s.jsx)(u.Z,{input:"",setInput:function(e){throw Error("Function not implemented.")},placeholder:"기간",type:"textBox4"})]}),(0,s.jsx)("div",{className:"mb-8",children:"거주기간"}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)(u.Z,{input:"",setInput:function(e){throw Error("Function not implemented.")},placeholder:"기간 선택",type:"textBox5"}),(0,s.jsx)(h.default,{src:b,alt:"calendar"})]}),"~",(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)(u.Z,{input:"",setInput:function(e){throw Error("Function not implemented.")},placeholder:"기간 선택",type:"textBox5"}),(0,s.jsx)(h.default,{src:b,alt:"calendar"})]}),(0,s.jsxs)("div",{className:"mt-20 ",children:[(0,s.jsx)(u.Z,{input:"",setInput:function(e){throw Error("Function not implemented.")},placeholder:"금액 입력",type:"textBox6"}),"원"]}),(0,s.jsxs)("div",{className:"mt-20 ",children:[(0,s.jsx)(u.Z,{input:"",setInput:function(e){throw Error("Function not implemented.")},placeholder:"금액 입력",type:"textBox6"}),"원"]})]}),p=()=>(0,s.jsxs)("div",{className:"flex items-center justify-between H4 text-gray-grayscale50",children:[(0,s.jsx)("h1",{className:"mr-31",children:" 보증금 "}),(0,s.jsx)(u.Z,{input:"",setInput:function(e){throw Error("Function not implemented.")},placeholder:"금액 입력",type:"textBox6"}),(0,s.jsx)("div",{className:"w-3"}),"원"]}),y=r(95407),m=()=>(0,s.jsxs)("table",{className:"w-full table-auto align-center",children:[(0,s.jsx)("thead",{className:"H4 text-gray-grayscale50 border-b-2 border-gray-300",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"px-4 py-2",children:"제 목"}),(0,s.jsx)("th",{className:"px-4 py-2",children:"시작일시"}),(0,s.jsx)("th",{className:"px-4 py-2",children:"마감일시"}),(0,s.jsx)("th",{className:"px-4 py-2"})]})}),(0,s.jsx)("tbody",{className:"text-center",children:[,,,].fill("").map((e,t)=>(0,s.jsxs)("tr",{className:"mb-8",children:[(0,s.jsx)("td",{className:" px-4 py-2",children:"2024-1학기 명지대학교 사생 생활관 지원서 접수 안내"}),(0,s.jsx)("td",{className:" px-4 py-2",children:"24:00:00"}),(0,s.jsx)("td",{className:" px-4 py-2",children:"24:00:00"}),(0,s.jsx)("td",{className:" px-4 py-2",children:(0,s.jsx)(y.Z,{label:"가져오기",disabled:!1,variant:"blue"})})]},t))})]}),f=e=>{let{label:t}=e;return(0,s.jsxs)("div",{className:"flex items-center justify-between H4 text-gray-grayscale50",children:[(0,s.jsx)("h1",{className:"mr-21",children:t}),(0,s.jsxs)("div",{className:"w-333 flex items-center justify-between",children:[(0,s.jsx)(u.Z,{input:"",setInput:function(e){throw Error("Function not implemented.")},placeholder:"시작",type:"textBox1"}),"~",(0,s.jsx)(u.Z,{input:"",setInput:function(e){throw Error("Function not implemented.")},placeholder:"마감",type:"textBox1"}),(0,s.jsx)(h.default,{className:"ml-5",src:b,alt:"calendarIcon"})]})]})},j=()=>(0,s.jsxs)("div",{className:"flex flex-col w-[1418px]",children:[(0,s.jsx)("div",{className:"H0 text-gray-grayscale50 flex items-center justify-center mb-32",children:(0,s.jsx)("h1",{children:"입사 신청 설정"})}),(0,s.jsxs)("div",{className:"flex itmes-center mb-27",children:[(0,s.jsx)("h2",{className:"H4 text-gray-grayscale40 whitespace-nowrap mr-100",children:"제목"}),(0,s.jsx)(x,{input:"",setInput:function(e){throw Error("Function not implemented.")},placeholder:"제목을 입력하세요."})]}),(0,s.jsxs)("div",{className:"px-8 flex items-center justify-between border-y-gray-grayscale50 border-y-1 py-20",children:[(0,s.jsx)(f,{label:"입사 신청 기간"}),(0,s.jsx)(f,{label:"입금 가능 기간"}),(0,s.jsx)(p,{})]}),(0,s.jsxs)("div",{className:"H4 w-full ",children:[(0,s.jsxs)("div",{className:"w-full flex items-center border-b-1 border-b-gray-grayscale30",children:[(0,s.jsx)("h3",{className:"py-12 w-285 text-center border-r-1 border-r-gray-grayscale30",children:"수용 가능 인원"}),(0,s.jsx)("h3",{className:"py-12 w-[838px] text-center border-r-1 border-r-gray-grayscale30",children:"건물별 가격"}),(0,s.jsxs)("div",{className:"py-12 w-313 flex justify-around",children:[(0,s.jsx)("h3",{children:"식권"}),(0,s.jsx)("h3",{children:"식권 가격"})]})]}),(0,s.jsxs)("div",{className:"w-full flex h-415 overflow-scroll border-b-gray-grayscale50 border-b-1",children:[(0,s.jsxs)("div",{className:"w-281  px-16 border-r-1 border-r-gray-grayscale30 pt-16",children:[(0,s.jsx)(o,{label:"건물 추가로 돌아가기",disabled:!1}),(0,s.jsx)("div",{className:"mt-165",children:(0,s.jsxs)("div",{className:"mb-32 flex justify-between items-center H4 text-gray-grayscale50",children:[(0,s.jsx)("div",{className:"",children:"3동 4인실"}),(0,s.jsxs)("div",{className:"w-134 flex items-center justify-around",children:["남",(0,s.jsx)(u.Z,{input:"",setInput:function(e){throw Error("Function not implemented.")},placeholder:"250",type:"textBox3"}),"명"]})]})}),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"flex justify-between items-center H4 text-gray-grayscale50",children:[(0,s.jsx)("div",{className:"",children:"3동 2인실"}),(0,s.jsxs)("div",{className:"w-134 flex items-center justify-around",children:["남",(0,s.jsx)(u.Z,{input:"",setInput:function(e){throw Error("Function not implemented.")},placeholder:"250",type:"textBox3"}),"명"]})]})})]}),(0,s.jsxs)("div",{className:"w-[828px] flex items-center justify-around p-9 border-r-1 border-r-gray-grayscale30",children:[(0,s.jsx)(g,{})," ",(0,s.jsx)(g,{})," ",(0,s.jsx)(g,{})," ",(0,s.jsx)(g,{})]}),(0,s.jsxs)("div",{className:"w-300 flex flex-col items-center  pt-26",children:[(0,s.jsxs)("div",{className:"w-300 flex justify-center items-start",children:[(0,s.jsxs)("div",{className:"flex items-center w-78 justify-between mr-9",children:[(0,s.jsx)(u.Z,{input:"",setInput:function(e){throw Error("Function not implemented.")},placeholder:"식권",type:"textBox7"}),"식"]}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)(u.Z,{input:"",setInput:function(e){throw Error("Function not implemented.")},placeholder:"금액 입력",type:"textBox6"}),"원"]})]}),(0,s.jsx)("div",{className:"mt-20",children:(0,s.jsx)(i,{})})]})]})]}),(0,s.jsx)("div",{className:"mb-10",children:(0,s.jsx)(m,{})}),(0,s.jsx)("div",{className:"flex items-center justify-center w-full",children:(0,s.jsx)(d.Z,{label:"작성 완료",disabled:!1,variant:"blue"})})]})},95407:function(e,t,r){"use strict";var a=r(57437);r(2265),t.Z=e=>{let{label:t,variant:r,disabled:s,selected:n=!1,...l}=e;return(0,a.jsx)("button",{...l,disabled:s,className:"H4 w-115 h-37 rounded-full text-white hover:hover-transition ".concat((()=>{switch(r){case"blue":return"".concat(n?"bg-blue-blue50":"bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50");case"green":return"".concat(n?"bg-green-green40":"bg-green-green20 disabled:bg-green-green10 hover:bg-green-green30 active:bg-green-green40");case"red":return"".concat(n?"bg-red-red40":"bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40");default:return""}})()),children:t})}},48871:function(e,t,r){"use strict";var a=r(57437);r(2265),t.Z=e=>{let{label:t,disabled:r,variant:s,selected:n=!1,...l}=e;return(0,a.jsx)("button",{...l,disabled:r,className:"w-133 h-42 rounded-8 hover:hover-transition ".concat((()=>{switch(s){case"blue":return"Btn-cap shadow2 text-white ".concat(n?"bg-blue-blue50":"bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50");case"green":return"Btn-cap shadow2 text-white ".concat(n?"bg-green-green40":"bg-green-green20 disabled:bg-green-green10 hover:bg-green-green30 active:bg-green-green40");case"red":return"Btn-cap shadow2 text-white ".concat(n?"bg-red-red40":"bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40");case"gray":return"H4 text-gray-grayscale50 ".concat(r?"disabled:text-gray-grayscale40 disabled:bg-transparent":n?"bg-gray-grayscale30":"bg-gray-grayscale10 hover:bg-gray-grayscale20 active:bg-gray-grayscale30");case"whiteblue":return"Btn-cap shadow2 ".concat(n?"bg-blue-blue30 border-blue-blue50 text-white":"text-blue-blue30 border-[1.5px] bg-white border-blue-blue30 disabled:text-blue-blue20 disabled:bg-white disabled:border-blue-blue20 hover:bg-blue-blue20 hover:border-blue-blue30 hover:text-blue-blue30 active:bg-blue-blue30 active:border-blue-blue50 active:text-white");case"white":return"".concat(r?"H4 disabled:text-gray-grayscale20 disabled:bg-transparent":n?"H4 text-gray-grayscale50 bg-gray-grayscale30":"H4 text-gray-grayscale40 hover:bg-gray-grayscale10 hover:text-gray-grayscale50 active:bg-gray-grayscale30");default:return""}})()),children:t})}},94770:function(e,t,r){"use strict";var a=r(57437);t.Z=e=>{let{input:t,setInput:r,placeholder:s,readOnly:n,type:l}=e,{boxSize:c,textAlign:i,inputType:o}=(e=>{switch(e){case"textBox1":default:return{boxSize:"w-133",textAlign:"",inputType:"text"};case"textBox2":return{boxSize:"w-235",textAlign:"",inputType:"text"};case"textBox3":return{boxSize:"w-76",textAlign:"placeholder:text-center text-center",inputType:"number"};case"textBox4":return{boxSize:"w-66",textAlign:"placeholder:text-center",inputType:"text"};case"textBox5":return{boxSize:"w-114",textAlign:"text-right",inputType:"text"};case"textBox6":return{boxSize:"w-145",textAlign:"text-right",inputType:"text"};case"textBox7":return{boxSize:"w-54",textAlign:"placeholder:text-center text-center",inputType:"number"};case"textBox8":return{boxSize:"w-111",textAlign:"",inputType:"text"}}})(l);return(0,a.jsx)("input",{className:"".concat(t?"border-gray-grayscale50":"border-gray-grayscale30"," H4-caption  border-[0.5px] outline-none px-8 ").concat(c," ").concat(i,"  rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30"),placeholder:s,type:o,value:t,readOnly:n,onChange:e=>{r(e.target.value)}})}}},function(e){e.O(0,[703,2971,8069,1744],function(){return e(e.s=41191)}),_N_E=e.O()}]);