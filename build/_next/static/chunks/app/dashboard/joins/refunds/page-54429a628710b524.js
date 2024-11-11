(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4805],{82586:function(e,t,r){Promise.resolve().then(r.bind(r,17105))},72671:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),a=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),n=Object.assign,s={};function o(e,t,r){this.props=e,this.context=t,this.refs=s,this.updater=r||a}function l(){}function i(e,t,r){this.props=e,this.context=t,this.refs=s,this.updater=r||a}o.prototype.isReactComponent={},o.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},l.prototype=o.prototype;var c=i.prototype=new l;c.constructor=i,n(c,o.prototype),c.isPureReactComponent=!0;var u=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,a){var n,s={},o=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)u.call(t,n)&&!d.hasOwnProperty(n)&&(s[n]=t[n]);var i=arguments.length-2;if(1===i)s.children=a;else if(1<i){for(var c=Array(i),h=0;h<i;h++)c[h]=arguments[h+2];s.children=c}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===s[n]&&(s[n]=i[n]);return{$$typeof:r,type:e,key:o,ref:l,props:s,_owner:null}}},52846:function(e,t,r){"use strict";e.exports=r(72671)},9266:function(e,t,r){"use strict";r.d(t,{_:function(){return l},z:function(){return o}});var a=r(58640),n=r(89652),s=r(77871);let o=async e=>{let{loginId:t,password:r}=e,o=await fetch("".concat(a._,"/api/v1/auth/sign-in"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({loginId:t,password:r})});if(!o.ok)throw Error("Failed");let l=await o.json();return s.Z.saveToken(n.L,l.information.accessToken),s.Z.saveToken(n.z,l.information.refreshToken),l},l=async e=>{try{let t=await fetch("".concat(a._,"/api/v1/auth/reissue?refreshToken=").concat(encodeURIComponent(e)),{method:"GET"});if(console.log("reissueToken 응답 상태:",t.status),!t.ok){let e=await t.json();throw console.error("reissueToken 에러 응답:",e),Error("Token reissue failed")}let r=await t.json();if(console.log("reissueToken 성공 응답:",r),r.check&&r.information&&r.information.accessToken)return s.Z.saveToken(n.L,r.information.accessToken),r.information.accessToken;return console.error("reissueToken 응답에 유효한 액세스 토큰이 없습니다:",r),null}catch(e){return console.error("reissueToken 함수 에러:",e),null}}},73329:function(e,t,r){"use strict";r.d(t,{D:function(){return l},V:function(){return o}});var a=r(58640),n=r(75518),s=r(81252);let o=async(e,t,r)=>await (0,n.Z)("".concat(a._,"/api/v1/web/period"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({startDate:e,endDate:t,periodType:r})}),l=e=>{let{data:t,error:r,mutate:o}=(0,s.ZP)("".concat(a._,"/api/v1/web/period/").concat(e),n.Z);return{data:t,error:r,isLoading:!r&&!t,mutate:o}}},17105:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var a,n,s=r(57437),o=r(2265),l=r(31371),i=r(60852),c=e=>{let{isLastItem:t,clickRefund:r,onStudentClick:a,onDeleteRefund:n,item:o}=e;return(0,s.jsxs)("div",{className:"flex items-center relative ".concat(!t&&"border-b-1 border-gray-grayscale30"),children:[(0,s.jsxs)("div",{className:"my-8 flex items-center rounded-5 w-full H4-caption h-38 text-nowrap cursor-pointer ".concat(r===o.refundRequestmentId?"bg-gray-grayscale20":"hover:bg-gray-grayscale10 active:bg-gray-grayscale20"),onClick:()=>a(o.refundRequestmentId),children:[(0,s.jsx)("div",{className:"w-[6%]",children:o.residentName}),(0,s.jsx)("div",{className:"w-[10%]",children:o.studentNumber}),(0,s.jsx)("div",{className:"w-[12%]",children:o.phoneNumber}),(0,s.jsx)("div",{className:"w-[8%]",children:o.bankName}),(0,s.jsx)("div",{className:"w-[15%]",children:o.accountNumber}),(0,s.jsx)("div",{className:"w-[7%]",children:o.termName}),(0,s.jsx)("div",{className:"w-[8%]",children:(0,i.r)(o.exitDate)}),(0,s.jsx)("div",{className:"w-[8%]",children:(0,i.r)(o.createDate)}),(0,s.jsx)("div",{className:"w-[12%]",children:o.dormitoryName}),(0,s.jsx)("div",{className:"w-[7%]",children:o.roomNumber?o.roomNumber+"호":"-"}),(0,s.jsx)("div",{className:"w-[7%]",children:o.bedNumber?o.bedNumber+"번":"-"})]}),(0,s.jsx)("div",{className:"absolute -right-87",children:(0,s.jsx)(l.Z,{label:"처리",disabled:r!==o.refundRequestmentId,selected:!1,variant:"blue",onClick:n})})]})},u=r(73122),d=e=>{let{list:t,clickRefund:r,onDeleteRefund:a,onStudentClick:n}=e;return(0,s.jsxs)("div",{className:"text-nowrap text-center text-gray-grayscale50",children:[(0,s.jsxs)("div",{className:"flex w-full border-b-1 pb-15",children:[(0,s.jsx)("div",{className:"H4 w-[6%]",children:"이 름"}),(0,s.jsx)("div",{className:"H4 w-[10%]",children:"학 번"}),(0,s.jsx)("div",{className:"H4 w-[12%]",children:"휴대전화"}),(0,s.jsx)("div",{className:"H4 w-[8%]",children:"은행명"}),(0,s.jsx)("div",{className:"H4 w-[15%]",children:"계좌번호"}),(0,s.jsx)("div",{className:"H4 w-[7%]",children:"기간"}),(0,s.jsx)("div",{className:"H4 w-[8%]",children:"퇴사 예정일"}),(0,s.jsx)("div",{className:"H4 w-[8%]",children:"신청날짜"}),(0,s.jsx)("div",{className:"H4 w-[12%]",children:"건 물"}),(0,s.jsx)("div",{className:"H4 w-[7%]",children:"호 실"}),(0,s.jsx)("div",{className:"H4 w-[7%]",children:"침대번호"})]}),t&&t.length>0?(0,s.jsx)("div",{className:"w-full",children:t.map((e,l)=>{let i=l===t.length-1;return(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(c,{isLastItem:i,clickRefund:r,onStudentClick:n,onDeleteRefund:a,item:e},l),i&&(0,s.jsx)("div",{className:"border-b-1 border-gray-grayscale50"})]},e.refundRequestmentId)})}):(0,s.jsx)("table",{className:"w-full h-693",children:(0,s.jsx)("tbody",{children:(0,s.jsx)(u.Z,{colspan:11})})})]})},h=r(52846);function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var m=function(e){return h.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:10,height:17,fill:"none"},e),a||(a=h.createElement("path",{fill:"currentColor",d:"m.42 9.531 6.828 6.827c.77.77 2.086.225 2.086-.864V1.84C9.334.75 8.018.206 7.248.976L.42 7.803a1.22 1.22 0 0 0 0 1.728"})))};function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var g=function(e){return h.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:10,height:17,fill:"none"},e),n||(n=h.createElement("path",{fill:"currentColor",d:"M9.58 7.803 2.752.976C1.982.206.666.75.666 1.84v13.654c0 1.089 1.317 1.634 2.086.864L9.58 9.531a1.22 1.22 0 0 0 0-1.728"})))},p=e=>{let{pageNum:t,pageTotalNum:r,setPageNum:a}=e;return(0,s.jsxs)("div",{className:"flex items-center gap-27",children:[(0,s.jsx)("button",{disabled:!(t>1),className:"group",onClick:()=>a("prev"),children:(0,s.jsx)(m,{className:"text-blue-blue30 group-disabled:text-blue-blue20"})}),(0,s.jsx)("div",{className:"caption1 text-gray-grayscale40 pt-1",children:t}),(0,s.jsx)("button",{disabled:!(t<r),className:"group",onClick:()=>a("next"),children:(0,s.jsx)(g,{className:"text-blue-blue30 group-disabled:text-blue-blue20"})})]})},A=r(90721),x=r(58640),v=r(75518),w=r(81252);let j=e=>{let{data:t,error:r}=(0,w.ZP)("".concat(x._,"/api/v1/web/refundRequestment?page=").concat(e),v.Z);return{data:t,error:r,isLoading:!r&&!t}},y=async e=>await (0,v.Z)("".concat(x._,"/api/v1/web/refundRequestment/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}});var N=r(79517),S=r(91723),k=r(73329),C=()=>{let[e,t]=(0,o.useState)([]),[r,a]=(0,o.useState)(1),[n,l]=(0,o.useState)(0),{data:i,error:c,isLoading:u}=(0,k.D)("REFUND"),[h,f]=(0,o.useState)(void 0),[m,b]=(0,o.useState)(void 0),[g,v]=(0,o.useState)(!1),[C,E]=(0,o.useState)(!1),[T,Z]=(0,o.useState)(0),{data:D,error:H,isLoading:O}=j(r);(0,o.useEffect)(()=>{(null==i?void 0:i.information.startDate)&&f(new Date(i.information.startDate)),(null==i?void 0:i.information.endDate)&&b(new Date(i.information.endDate))},[i]),(0,o.useEffect)(()=>{D?(t(D.information.dataList),l(D.information.pageInfo.totalPage)):console.log(H)},[D,H]);let R=async()=>{if(h&&m)try{(await (0,k.V)(h.toISOString().split("T")[0],m.toISOString().split("T")[0],"REFUND")).check&&v(!g)}catch(e){console.error("Error posting period:",e)}},_=async()=>{(await y(T)).check&&(E(!C),(0,w.JG)("".concat(x._,"/api/v1/web/refundRequestment?page=").concat(r)))};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex flex-col w-[1396px]",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-32 w-[1396px]",children:[(0,s.jsx)("h1",{className:"H0 text-gray-grayscale50 text-nowrap",children:"환불 신청"}),(0,s.jsx)(A.Z,{title:"환불 신청 기간",startDate:h,endDate:m,setStartDate:f,setEndDate:b,handlePosting:()=>v(!g)})]}),(0,s.jsx)(d,{list:e,clickRefund:T,onStudentClick:e=>{Z(e)},onDeleteRefund:()=>E(!C)}),e&&e.length>0&&(0,s.jsx)("div",{className:"mt-27 flex justify-center",children:(0,s.jsx)(p,{pageNum:r,pageTotalNum:n,setPageNum:e=>{"prev"===e&&r>1?a(r-1):"next"===e&&r<n&&a(r+1)}})})]}),g&&(0,s.jsx)(N.Z,{isOpen:g,children:(0,s.jsx)(S.Z,{variant:"blue",label:"환불 신청 기간을 게시하시겠습니까?",onConfirm:R,onCancel:()=>v(!g)})}),C&&(0,s.jsx)(N.Z,{isOpen:C,children:(0,s.jsx)(S.Z,{variant:"blue",label:"선택한 인원에 대해 환불을 진행하겠습니까?",onConfirm:_,onCancel:()=>E(!C)})})]})}},9088:function(e,t,r){"use strict";var a=r(57437);t.Z=e=>{let{label:t,onClick:r,hoverColor:n,isColor:s,disabled:o}=e,{btnHoverColor:l}=(e=>{switch(e){case"blue":default:return{btnHoverColor:"hover:bg-blue-blue30"};case"gray":return{btnHoverColor:"hover:bg-gray-grayscale20"};case"red":return{btnHoverColor:"hover:bg-red-red20"};case"green":return{btnHoverColor:"hover:bg-green-green20"}}})(n);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("button",{onClick:r,disabled:o,className:"mr-16 w-86 h-32 rounded-20 ".concat(l," hover-transition ").concat(s&&"bg-blue-blue30"),children:"gray"===n?(0,a.jsx)("h1",{className:"H4 text-gray-grayscale40",children:t}):(0,a.jsx)("h1",{className:"H4 text-gray-grayscale40 hover:text-white ".concat(s&&"text-white"),children:t})})})}},31371:function(e,t,r){"use strict";var a=r(57437);r(2265),t.Z=e=>{let{label:t,disabled:r,selected:n=!1,variant:s,isPadding:o,...l}=e;return(0,a.jsx)("button",{...l,disabled:r,className:"H4 w-79 h-34 rounded-full text-white hover:hover-transition whitespace-nowrap ".concat((e=>{switch(e){case"blue":return"".concat(n?"bg-blue-blue50":"bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50");case"red":return"".concat(n?"bg-red-red40":"bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40");default:return""}})(s)," ").concat(o&&"w-auto px-13"),children:t})}},26066:function(e,t,r){"use strict";var a=r(57437),n=r(20703),s=r(95343),o=r(42866);r(2265),t.Z=e=>{let{bgColor:t,onCancel:r}=e;return(0,a.jsxs)("div",{className:"".concat(t||"bg-blue-blue30"," w-full h-39  flex justify-between pl-15 rounded-t-8"),children:[(0,a.jsx)(n.default,{src:s.Z,alt:"PromptLogo",className:"object-contain",width:39,height:11.65}),(0,a.jsx)("button",{className:"hover:bg-red-red30 ".concat(t||"bg-blue-blue30"," w-39 h-39 flex items-center justify-center rounded-tr-8 hover-transition"),onClick:r,children:(0,a.jsx)(n.default,{src:o.Z,alt:"PromptOut",className:"object-contain",width:10,height:10})})]})}},79517:function(e,t,r){"use strict";var a=r(57437),n=r(2265),s=r(54887);t.Z=e=>{let{children:t,isOpen:r}=e;return(0,n.useEffect)(()=>(r?window.document.body.style.overflow="hidden":window.document.body.style.overflow="auto",()=>{window.document.body.style.overflow="auto"}),[r]),(0,s.createPortal)((0,a.jsx)("div",{className:"fixed z-backdrop top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center",children:(0,a.jsx)("div",{className:"xl:scale-65 xxl:scale-80 lg:scale-65 md:scale-50 sm:scale-40",children:null!=t?t:null})}),document.body)}},90721:function(e,t,r){"use strict";var a=r(57437);r(2265);var n=r(31371);t.Z=e=>{let{title:t,startDate:r,endDate:s,setStartDate:o,setEndDate:l,handlePosting:i}=e;return(0,a.jsxs)("div",{className:"flex items-center h-52 rounded-8 bg-gray-grayscale10 px-21 justify-between",children:[(0,a.jsx)("h1",{className:"H4 text-gray-grayscale50 mr-15",children:t}),(0,a.jsx)("input",{value:r?r.toISOString().split("T")[0]:"",onChange:e=>{o(new Date(e.target.value))},type:"date",className:"w-133 h-34 rounded-8 bg-white outline-none px-8 box-border"}),(0,a.jsx)("h2",{className:"H4 text-gray-grayscale50 mx-14",children:"~"}),(0,a.jsx)("input",{value:s?s.toISOString().split("T")[0]:"",onChange:e=>{l(new Date(e.target.value))},type:"date",className:"w-133 h-34 rounded-8 bg-white outline-none px-8 box-border mr-13"}),(0,a.jsx)(n.Z,{onClick:i,label:"게시",disabled:void 0===r||void 0===s,selected:!1,variant:"blue"})]})}},60852:function(e,t,r){"use strict";r.d(t,{r:function(){return a}});let a=e=>(e.startsWith("20")?e.slice(2):e).replace(/-/g,".")},73122:function(e,t,r){"use strict";var a=r(57437);r(2265),t.Z=e=>{let{colspan:t}=e;return(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:t,className:"h-full",children:(0,a.jsx)("div",{className:"flex justify-center items-center",children:(0,a.jsx)("h1",{className:"H1 text-gray-grayscale30",children:"리스트가 비었습니다."})})})})}},91723:function(e,t,r){"use strict";var a=r(57437),n=r(20703),s=r(22992),o=r(9088),l=r(26066);t.Z=e=>{let{variant:t,label:r,onConfirm:i,onCancel:c,textLeft:u,textRight:d}=e,{bgHeader:h}=(e=>{switch(e){case"blue":default:return{bgHeader:"bg-blue-blue30"};case"red":return{bgHeader:"bg-red-red20"};case"green":return{bgHeader:"bg-green-green20"}}})(t);return(0,a.jsxs)("div",{className:"w-456 h-194 flex flex-col items-center rounded-8 shadow-xl bg-white pb-15",children:[(0,a.jsx)(l.Z,{bgColor:h,onCancel:c}),(0,a.jsx)(n.default,{src:s.Z,className:"mt-19 mb-16",width:22,height:19,alt:"PromptWarning"}),(0,a.jsx)("h1",{className:"alert-cap text-gray-grayscale50 text-center",children:r.split("\\n").map((e,t)=>(0,a.jsx)("p",{className:"leading-25",children:e},t))}),(0,a.jsxs)("div",{className:"ml-auto mt-auto",children:[(0,a.jsx)(o.Z,{label:u||"취소",onClick:c,hoverColor:t}),(0,a.jsx)(o.Z,{label:d||"확인",onClick:i,hoverColor:t})]})]})}},58640:function(e,t,r){"use strict";r.d(t,{_:function(){return a}});let a="https://www.dormease-dev.kro.kr"},89652:function(e,t,r){"use strict";r.d(t,{L:function(){return a},z:function(){return n}});let a="ACCESS_TOKEN",n="REFRESH_TOKEN"},75518:function(e,t,r){"use strict";var a=r(77871),n=r(89652),s=r(9266);let o=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.Z.getToken(n.L),o=a.Z.getToken(n.z);if(!r)throw Error("No access token found");let i={...t.headers,Authorization:"Bearer ".concat(r)},c=await fetch(e,{...t,headers:i});if(401===c.status&&o){let r=await (0,s._)(o);if(r){a.Z.saveToken(n.L,r);let s={...i,Authorization:"Bearer ".concat(r)};c=await fetch(e,{...t,headers:s})}else l()}else 401===c.status&&l();if(!c.ok)throw Error("Failed to fetch data");return 204===c.status||201===c.status?{}:c.json()},l=()=>{a.Z.removeToken(n.L),a.Z.removeToken(n.z),alert("세션이 만료되었습니다. 다시 로그인해 주세요."),window.location.href="/"};t.Z=o},77871:function(e,t){"use strict";t.Z={saveToken:(e,t)=>{localStorage.setItem(e,t)},getToken:e=>localStorage.getItem(e),removeToken:e=>{localStorage.removeItem(e)}}},95343:function(e,t){"use strict";t.Z={src:"/_next/static/media/PromptLogo.692c0d92.png",height:13,width:39,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEX///////////////////////////////////////8V2MxSAAAACnRSTlPlmoJy+43FvWlJljCSDAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACFJREFUeJwFwYEBADAIwrDCxOn/D5vAhDw+2qanBFbF9gEEtABSm4AZFAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},42866:function(e,t){"use strict";t.Z={src:"/_next/static/media/PromptOut.98b7927a.png",height:12,width:12,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEX///////////////9MaXH///91ewZhAAAABnRSTlNA0QMxAHpSp+N/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nEWLsQ0AMAyDcEz/f7lT0w0J4OCMHAhKQNIGGZvU+bBq47dfE2gAiTtnxw0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},22992:function(e,t){"use strict";t.Z={src:"/_next/static/media/PromptWarning.99ab5e8b.png",height:21,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAHlBMVEXXNTXXNTVMaXHWNTXXNTXXNTWqVVXUODjYNzfWNTXpH04wAAAACnRSTlN9jQA8LFoDEkykCmOTUQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJwdwYkNADAMAjE4SJ/9F65UW4ANaDEzwxLbiTdCOSdCNQmuXBoqXX33ARTdAKE2+uYqAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7}}},function(e){e.O(0,[4898,703,1252,2971,8069,1744],function(){return e(e.s=82586)}),_N_E=e.O()}]);