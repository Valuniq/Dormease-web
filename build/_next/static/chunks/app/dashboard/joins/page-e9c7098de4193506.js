(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9834],{2455:function(e,t,r){"use strict";var a,l=r(52846);function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}t.Z=function(e){return l.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},e),a||(a=l.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:2.25,d:"M1.5 12h21M12 1.5v21"})))}},53591:function(e,t,r){Promise.resolve().then(r.bind(r,7737))},72671:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),a=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),l=Object.assign,n={};function s(e,t,r){this.props=e,this.context=t,this.refs=n,this.updater=r||a}function i(){}function o(e,t,r){this.props=e,this.context=t,this.refs=n,this.updater=r||a}s.prototype.isReactComponent={},s.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},s.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},i.prototype=s.prototype;var c=o.prototype=new i;c.constructor=o,l(c,s.prototype),c.isPureReactComponent=!0;var d=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,a){var l,n={},s=null,i=null;if(null!=t)for(l in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)d.call(t,l)&&!u.hasOwnProperty(l)&&(n[l]=t[l]);var o=arguments.length-2;if(1===o)n.children=a;else if(1<o){for(var c=Array(o),g=0;g<o;g++)c[g]=arguments[g+2];n.children=c}if(e&&e.defaultProps)for(l in o=e.defaultProps)void 0===n[l]&&(n[l]=o[l]);return{$$typeof:r,type:e,key:s,ref:i,props:n,_owner:null}}},52846:function(e,t,r){"use strict";e.exports=r(72671)},7737:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return G}});var a,l,n=r(57437),s=r(58640),i=r(75518),o=r(81252);let c=()=>{let{data:e,error:t}=(0,o.ZP)("".concat(s._,"/api/v1/web/dormitoryApplicationSetting/dormitories"),i.Z);return{data:null==e?void 0:e.information,error:t,isLoading:!t&&!e}},d=()=>{let{data:e,error:t}=(0,o.ZP)("".concat(s._,"/api/v1/web/dormitoryApplicationSetting/topThree"),i.Z);return console.log(e),{data:null==e?void 0:e.information,error:t,isLoading:!t&&!e}},u=async e=>await (0,i.Z)("".concat(s._,"/api/v1/web/dormitoryApplicationSetting"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),g=()=>{let{data:e,error:t,mutate:r}=(0,o.ZP)("".concat(s._,"/api/v1/app/dormitoryApplicationSetting"),i.Z);return{data:e,error:t,isLoading:!t&&!e,mutate:r}},m=()=>{let{data:e,error:t,mutate:r}=(0,o.ZP)("".concat(s._,"/api/v1/web/dormitoryApplicationSetting"),i.Z);return{data:e,error:t,isLoading:!t&&!e,mutate:r}};var h=r(48871),x=e=>{let{input:t,setInput:r,placeholder:a}=e;return(0,n.jsx)("input",{className:"H4 pb-3 border-b-1 outline-none px-2 w-[1295px] h-28 text-gray-grayscale50 placeholder:text-gray-grayscale30",placeholder:a,type:"text",value:t,onChange:e=>{r(e.target.value)}})},p=r(2265),y=r(95407),b=e=>{let{index:t,title:r,startDate:a,endDate:l,getList:s}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("tr",{className:"mb-8",children:[(0,n.jsx)("td",{className:"H4 text-gray-grayscale50 px-4 py-2",children:"2024-1학기 명지대학교 사생 생활관 지원서 접수 안내"}),(0,n.jsx)("td",{className:"H4 text-gray-grayscale50 px-4 py-2",children:"24:00:00"}),(0,n.jsx)("td",{className:"H4 text-gray-grayscale50 px-4 py-2",children:"24:00:00"}),(0,n.jsx)("td",{className:" px-4 py-2",children:(0,n.jsx)(y.Z,{label:"가져오기",disabled:!1,variant:"blue"})})]},t)})},f=()=>{let{data:e,error:t,isLoading:r}=d();return(0,n.jsxs)("table",{className:"w-full h-192 align-center ",children:[(0,n.jsx)("thead",{className:"H4 text-gray-grayscale50 border-y-1 border-y-gray-grayscale50",children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"px-4 py-2",children:"제 목"}),(0,n.jsx)("th",{className:"px-4 py-2",children:"시작일시"}),(0,n.jsx)("th",{className:"px-4 py-2",children:"마감일시"}),(0,n.jsx)("th",{className:"px-4 py-2"})]})}),(0,n.jsxs)("tbody",{className:"text-center",children:[(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colSpan:4,children:(0,n.jsx)("div",{className:"w-full h-8"})})}),r?(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:4,children:"Loading..."})}):t?(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:4,children:"Error loading data."})}):(null==e?void 0:e.length)===0?(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:4,className:"h-full",children:(0,n.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,n.jsx)("h1",{className:"H1 text-gray-grayscale30",children:"리스트가 비었습니다."})})})}):null==e?void 0:e.map((e,t)=>(0,n.jsx)(b,{index:t,title:e.title,startDate:e.startDate,endDate:e.endDate,getList:function(){throw Error("Function not implemented.")}},t))]})]})},v=r(32153);let j=(0,v.cn)({key:"dormitoryRoomTypeState",default:[]}),w=(0,v.cn)({key:"joinApplicationState",default:{title:"",startDate:"",endDate:"",depositStartDate:"",depositEndDate:"",securityDepoist:null,dormitoryRoomTypeReqList:[{dormitoryRoomTypeId:0,acceptLimit:null}],termReqList:[{termName:"",startDate:"",endDate:"",dormitoryTermReqList:[{dormitoryRoomTypeId:0,price:null}]}],mealTicketReqList:[]}}),A=(0,v.cn)({key:"termReqListState",default:[{termName:"",startDate:"",endDate:"",dormitoryTermReqList:[{dormitoryRoomTypeId:0,price:0}]},{termName:"",startDate:"",endDate:"",dormitoryTermReqList:[{dormitoryRoomTypeId:0,price:0}]},{termName:"",startDate:"",endDate:"",dormitoryTermReqList:[{dormitoryRoomTypeId:0,price:0}]},{termName:"",startDate:"",endDate:"",dormitoryTermReqList:[{dormitoryRoomTypeId:0,price:0}]}]}),N=(0,v.cn)({key:"isActiveState",default:[!0,!1,!1,!1]}),T=(0,v.cn)({key:"disabledFieldsState",default:{}}),S=(0,v.cn)({key:"joinModalState",default:{isEmptyAlert:!1,isPostChecked:!1}});var D=e=>{let{input:t,setInput:r}=e;return(0,n.jsxs)("div",{className:"flex items-center justify-between H4 text-gray-grayscale50",children:[(0,n.jsx)("h1",{className:"mr-31",children:" 보증금 "}),(0,n.jsx)("input",{type:"number",value:null!==t?t:"",onChange:e=>r(parseInt(e.target.value)),className:"".concat(t?"border-gray-grayscale50":"border-gray-grayscale30"," text-right H4-caption border-[0.5px] outline-none px-8 w-145 rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30"),placeholder:"금액 입력"}),(0,n.jsx)("div",{className:"w-3"}),"원"]})},C=r(2920),R=e=>{let{label:t,input:r,setInput:a}=e;return(0,n.jsxs)("div",{className:"flex items-center justify-between H4 text-gray-grayscale50",children:[(0,n.jsx)("h1",{className:"mr-21",children:t}),(0,n.jsxs)("div",{className:"w-360 flex items-center justify-between",children:[(0,n.jsx)("input",{type:"date",value:r.startDate,onChange:e=>{a({...r,startDate:e.target.value})},min:C.vQ,max:r.endDate,className:"".concat(r.startDate?"border-gray-grayscale50":"border-gray-grayscale30"," w-160 H4-caption border-[0.5px] outline-none px-8 rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30")}),"~",(0,n.jsx)("input",{type:"date",value:r.endDate,onChange:e=>{a({...r,endDate:e.target.value})},min:r.startDate||C.vQ,className:"".concat(r.endDate?"border-gray-grayscale50":"border-gray-grayscale30"," w-160 H4-caption border-[0.5px] outline-none px-8 rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30")})]})]})},E=()=>{let[e,t]=(0,v.FV)(w);return(0,n.jsxs)("div",{className:"px-8 flex items-center justify-between border-t-gray-grayscale50 border-t-1 py-20",children:[(0,n.jsx)(R,{label:"입사 신청 기간",input:{startDate:e.startDate,endDate:e.endDate},setInput:r=>{t({...e,startDate:r.startDate,endDate:r.endDate})}}),(0,n.jsx)(R,{label:"입금 가능 기간",input:{startDate:e.depositStartDate,endDate:e.depositEndDate},setInput:r=>{t({...e,depositStartDate:r.startDate,depositEndDate:r.endDate})}}),(0,n.jsx)(D,{input:e.securityDepoist,setInput:r=>{t({...e,securityDepoist:r})}})]})},k=r(52846);function L(){return(L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var H=function(e){return k.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg",width:16,height:15,fill:"none"},e),a||(a=k.createElement("path",{stroke:"#323232",strokeLinecap:"round",strokeWidth:1.938,d:"M1.541 7.499h12.917M7.999 1.041v12.917"})))},Z=e=>{let{...t}=e;return(0,n.jsxs)("button",{...t,className:"group flex flex-col justify-center items-center w-74 h-74 rounded-8 bg-transparent hover:bg-gray-grayscale5 hover:hover-transition active:bg-gray-grayscale10",children:[(0,n.jsx)("div",{className:"flex justify-center items-center mt-5 w-22 h-22 rounded-3 border-2 border-gray-grayscale50",children:(0,n.jsx)(H,{})}),(0,n.jsx)("h2",{className:"caption-2 mt-5 text-gray-grayscale50",children:"추가하기"})]})};function I(){return(I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var F=function(e){return k.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:10,height:10,fill:"none"},e),l||(l=k.createElement("path",{stroke:"currentColor",strokeLinecap:"round",d:"M1.1 1.1 9 9m0-7.9L1.1 9"})))},O=e=>{let{...t}=e;return(0,n.jsx)("button",{...t,className:"flex justify-center items-center w-20 h-20 rounded-full bg-transparent text-gray-grayscale30 hover:bg-gray-grayscale10 hover:text-gray-grayscale40 hover:hover-transition active:bg-gray-grayscale20",children:(0,n.jsx)(F,{})})},P=r(94770),B=()=>{let[e,t]=(0,p.useState)([]),r=(r,a,l)=>{let n=[...e];n[r][a]=l,t(n)},a=r=>{t(e.filter((e,t)=>t!==r))};return(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[e.map((e,t)=>(0,n.jsxs)("div",{className:"hover-transition w-300 h-45 flex items-center justify-center  mt-15 p-2 hover:bg-gray-grayscale5 hover:rounded-l-10 hover:rounded-r-50 relative group",children:[(0,n.jsxs)("div",{className:"flex justify-center items-center cursor-pointer",children:[(0,n.jsxs)("div",{className:"flex items-center w-78 justify-between mr-9",children:[(0,n.jsx)(P.Z,{input:e.meal,setInput:e=>r(t,"meal",e),placeholder:"식권",type:"textBox7"}),"식"]}),(0,n.jsxs)("div",{className:"flex items-center justify-between w-167",children:[(0,n.jsx)(P.Z,{input:e.price,setInput:e=>r(t,"price",e),placeholder:"금액 입력",type:"textBox6"}),"원"]})]}),(0,n.jsx)("div",{className:"ml-7 opacity-0 group-hover:opacity-100 transition-opacity",children:(0,n.jsx)(O,{onClick:()=>a(t)})})]},t)),(0,n.jsx)("div",{className:"mt-20",children:(0,n.jsx)(Z,{onClick:()=>{e.length<5?t([...e,{meal:"",price:""}]):alert("식권은 최대 5개까지만 추가할 수 있습니다.")}})})]})},q=e=>{let{label:t,disabled:r,selected:a=!1,...l}=e;return(0,n.jsx)("button",{...l,disabled:r,className:"H2 w-251 h-49 rounded-8 ".concat(a?"text-white bg-blue-blue40":"text-gray-grayscale-50 bg-gray-grayscale5 disabled:text-gray-grayscale30 disabled:bg-gray-grayscale5 hover:text-white hover:bg-blue-blue30 hover:hover-transition active:bg-blue-blue40"),children:t})},V=()=>{let{data:e}=c(),[t,r]=(0,v.FV)(j),[a,l]=(0,v.FV)(w),[s,i]=(0,v.FV)(T);(0,p.useEffect)(()=>{if(e){r(e);let t=e.map(e=>({dormitoryRoomTypeId:e.dormitoryRoomTypeId,acceptLimit:null}));l(e=>({...e,dormitoryRoomTypeReqList:t}))}},[e,r,l]);let o=(e,t)=>{let r=""===t?null:parseInt(t,10),n=a.dormitoryRoomTypeReqList.map(t=>t.dormitoryRoomTypeId===e?{...t,acceptLimit:r}:t);l({...a,dormitoryRoomTypeReqList:n}),i(t=>({...t,[e]:0===r}))},d=e?Object.values(e.reduce((e,t)=>{let r=t.dormitoryRoomTypeId;return e[r]||(e[r]={dormitoryName:t.dormitoryName,roomSize:t.roomSize,male:null,female:null}),"MALE"===t.gender?e[r].male=t:"FEMALE"===t.gender&&(e[r].female=t),e},{})):[];return(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)(q,{label:"건물 추가로 돌아가기",disabled:!1}),(0,n.jsx)("div",{className:"mt-150"}),d.map((e,t)=>{var r,l,s,i;return(0,n.jsxs)("div",{className:"w-full flex items-center justify-end mb-22",children:[(0,n.jsxs)("div",{className:"whitespace-nowrap",children:[e.dormitoryName," ",e.roomSize,"인실"]}),(0,n.jsxs)("div",{className:"ml-40 flex flex-col items-end text-right",children:[e.male&&(0,n.jsxs)("div",{className:"flex h-34 items-center justify-between w-134 ".concat(e.female?"mb-22":""),children:[(0,n.jsx)("span",{children:"남"}),(0,n.jsx)("input",{type:"text",value:(null===(l=a.dormitoryRoomTypeReqList.find(t=>{var r;return t.dormitoryRoomTypeId===(null===(r=e.male)||void 0===r?void 0:r.dormitoryRoomTypeId)}))||void 0===l?void 0:null===(r=l.acceptLimit)||void 0===r?void 0:r.toString())||"",onInput:t=>{var r;let a=t.target.value.replace(/[^0-9]/g,"");o((null===(r=e.male)||void 0===r?void 0:r.dormitoryRoomTypeId)||0,a)},placeholder:"250",className:"H4-caption placeholder:text-gray-grayscale30 text-gray-grayscale50 outline-none w-76 h-34 p-2 bg-white border border-gray-grayscale30 rounded-8 text-center"}),(0,n.jsx)("span",{children:"명"})]}),e.female&&(0,n.jsxs)("div",{className:"h-34 flex items-center justify-between w-134",children:[(0,n.jsx)("span",{children:"여"}),(0,n.jsx)("input",{type:"text",value:(null===(i=a.dormitoryRoomTypeReqList.find(t=>{var r;return t.dormitoryRoomTypeId===(null===(r=e.female)||void 0===r?void 0:r.dormitoryRoomTypeId)}))||void 0===i?void 0:null===(s=i.acceptLimit)||void 0===s?void 0:s.toString())||"",onInput:t=>{var r;let a=t.target.value.replace(/[^0-9]/g,"");o((null===(r=e.female)||void 0===r?void 0:r.dormitoryRoomTypeId)||0,a)},placeholder:"250",className:"H4-caption placeholder:text-gray-grayscale30 text-gray-grayscale50 outline-none w-76 h-34 p-2 bg-white border border-gray-grayscale30 rounded-8 text-center"}),(0,n.jsx)("span",{children:"명"})]})]})]},t)})]})},M=e=>{let{roomTypeId:t,price:r,onPriceChange:a,disabled:l}=e;return(0,n.jsxs)("div",{className:"flex items-center justify-center ".concat(l?"opacity-30":""),children:[(0,n.jsx)("input",{type:"text",placeholder:"금액 입력",value:null!==r?r:"",onChange:e=>{let t=e.target.value;(""===t||/^[0-9]*$/.test(t))&&a(""===t?null:parseFloat(t))},disabled:l,className:"H4-caption text-bg-gray-grayscale5 placeholder:text-gray-grayscale40 outline-none w-145 h-34 pr-8 bg-white border border-gray-grayscale30 \n        ".concat(l?"cursor-not-allowed text-gray-400 bg-gray-100":"placeholder:text-gray-grayscale30 text-gray-grayscale50","\n        rounded-8 text-right")}),(0,n.jsx)("span",{className:"H4 ".concat(l?"text-gray-400":"text-gray-grayscale50"," ml-5"),children:"원"})]})},_=r(2455),z=e=>{let{...t}=e;return(0,n.jsxs)("button",{...t,className:"group text-white flex flex-col items-center",children:[(0,n.jsx)("div",{className:"flex justify-center items-center w-47 h-47 rounded-full bg-blue-blue30 group-hover:bg-blue-blue40 group-hover:hover-transition group-active:bg-blue-blue50",children:(0,n.jsx)(_.Z,{})}),(0,n.jsx)("h2",{className:"caption-2 mt-7 w-89 px-14 py-7 rounded-20 bg-blue-blue30 group-hover:bg-blue-blue40 group-hover:hover-transition group-active:bg-blue-blue50",children:"거주 기간 추가"})]})},U=e=>{let{index:t,isActive:r}=e,[a,l]=(0,v.FV)(N),[s,i]=(0,v.FV)(A),[o]=(0,v.FV)(j),[c]=(0,v.FV)(T);(0,p.useEffect)(()=>{s.length>0&&i(s.map(e=>({...e,dormitoryTermReqList:o.map(e=>({dormitoryRoomTypeId:e.dormitoryRoomTypeId,price:null}))})))},[o,i]);let d=(e,r)=>{let a=[...s];a[t]={...a[t],[r]:e.target.value},i(a)},u=(e,r)=>{let a=[...s],l=a[t].dormitoryTermReqList.map(t=>t.dormitoryRoomTypeId===e?{...t,price:r}:t);a[t]={...a[t],dormitoryTermReqList:l},i(a)};return s[t].startDate,s[t].endDate,(0,n.jsxs)("div",{className:"relative",children:[!r&&(0,n.jsx)("div",{onClick:()=>{let e=[...a];e[t]=!e[t],l(e)},className:"absolute top-110 left-50 z-joinSettingAddPeriodBtn",children:(0,n.jsx)(z,{})}),(0,n.jsx)("div",{className:"pt-17 w-184 min-h-371 h-full rounded-8 bg-gray-grayscale5 ".concat(r?"opacity-100":"opacity-50 pointer-events-none"),children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{className:"w-112 flex items-center justify-around mb-20",children:["이름",(0,n.jsx)(P.Z,{input:s[t].termName,setInput:e=>d({target:{value:e}},"termName"),placeholder:"기간",type:"textBox4"})]}),(0,n.jsx)("div",{className:"mb-8",children:"거주기간"}),(0,n.jsx)("div",{className:"flex items-center justify-between",children:(0,n.jsx)("input",{type:"date",value:s[t].startDate||"",onChange:e=>d(e,"startDate"),min:C.vQ,max:s[t].endDate||"",className:"w-155 H4-caption border-[0.5px] border-gray-grayscale40 outline-none px-8 rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30"})}),"~",(0,n.jsx)("div",{className:"flex items-center justify-between mb-22",children:(0,n.jsx)("input",{type:"date",value:s[t].endDate||"",onChange:e=>d(e,"endDate"),min:s[t].startDate||C.vQ,className:"w-155 H4-caption border-[0.5px] border-gray-grayscale40  outline-none px-8 rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30"})}),o.map(e=>{var r,a;return(0,n.jsx)("div",{className:"w-full h-34 mb-22",children:(0,n.jsx)(M,{roomTypeId:e.dormitoryRoomTypeId,onPriceChange:t=>u(e.dormitoryRoomTypeId,t),price:null!==(a=null===(r=s[t].dormitoryTermReqList.find(t=>t.dormitoryRoomTypeId===e.dormitoryRoomTypeId))||void 0===r?void 0:r.price)&&void 0!==a?a:null,disabled:c[e.dormitoryRoomTypeId]})},e.dormitoryRoomTypeId)})]})})]})},X=()=>{let[e]=(0,v.FV)(A),[t]=(0,v.FV)(N);return(0,n.jsx)(n.Fragment,{children:e.map((e,r)=>(0,n.jsx)(U,{index:r,isActive:t[r]},r))})},W=r(42825),J=r(79517),Q=r(91723),K=()=>{let[e,t]=(0,v.FV)(w),[r,a]=(0,v.FV)(A),[l,s]=(0,v.FV)(N),[i,o]=(0,v.FV)(S);(0,p.useEffect)(()=>{t(e=>({...e,termReqList:r}))},[r]);let c=()=>{let{title:t,startDate:a,endDate:n,depositStartDate:s,depositEndDate:i,dormitoryRoomTypeReqList:o}=e;if(!t||!a||!n||!s||!i)return!1;for(let e of o)if(null===e.acceptLimit||e.acceptLimit<0)continue;for(let e=0;e<r.length;e++){let t=r[e];if(l[e]){if(!t.termName||!t.startDate||!t.endDate)return!1;for(let e of t.dormitoryTermReqList){let t=o.find(t=>t.dormitoryRoomTypeId===e.dormitoryRoomTypeId);if((!t||0!==t.acceptLimit)&&(null===e.price||e.price<0))return!1}}}return!0},d=async()=>{try{console.log("Sending applicationData:",e),(await u(e)).check?(console.log("작성 완료되었습니다."),o(e=>({...e,isPostChecked:!1}))):(console.error("작성에 실패하였습니다."),alert("작성에 실패했습니다. 다시 시도해주세요."))}catch(e){console.error("Error:",e),alert("서버 통신 오류가 발생했습니다.")}};return(0,n.jsxs)(n.Fragment,{children:[i.isPostChecked&&(0,n.jsx)(J.Z,{isOpen:i.isPostChecked,children:(0,n.jsx)(Q.Z,{variant:"blue",label:"작성을 완료하시겠습니까?",onConfirm:d,onCancel:()=>o(e=>({...e,isPostChecked:!1}))})}),i.isEmptyAlert&&(0,n.jsx)(J.Z,{isOpen:i.isEmptyAlert,children:(0,n.jsx)(W.Z,{variant:"blue",label:"모든 내용을 작성해 주시기 바랍니다.",onConfirm:()=>o(e=>({...e,isEmptyAlert:!1}))})}),(0,n.jsxs)("div",{className:"flex flex-col w-full",children:[(0,n.jsx)("div",{className:"H0 text-gray-grayscale50 flex items-center justify-center mb-32",children:(0,n.jsx)("h1",{children:"입사 신청 설정"})}),(0,n.jsxs)("div",{className:"flex itmes-center mb-27",children:[(0,n.jsx)("h2",{className:"H4 text-gray-grayscale40 whitespace-nowrap mr-100",children:"제목"}),(0,n.jsx)(x,{input:e.title,setInput:r=>{t({...e,title:r})},placeholder:"제목을 입력하세요."})]}),(0,n.jsx)(E,{}),(0,n.jsxs)("div",{className:"H4 w-full h-464",children:[(0,n.jsxs)("div",{className:"w-full h-48 flex items-center justify-center border-y-1 border-y-gray-grayscale30",children:[(0,n.jsx)("div",{className:"w-[285px] h-full flex items-center justify-center border-r-1 border-r-gray-grayscale30",children:"수용 가능 인원"}),(0,n.jsx)("div",{className:"w-[838px] h-full flex items-center justify-center text-center border-r-1 border-r-gray-grayscale30",children:"건물별 가격"}),(0,n.jsxs)("div",{className:"w-[313px] h-full flex items-center justify-around",children:[(0,n.jsx)("span",{children:"식권"}),(0,n.jsx)("span",{children:"식권 가격"})]})]}),(0,n.jsxs)("div",{className:"w-full h-415 flex overflow-y-scroll",children:[(0,n.jsx)("div",{className:"w-[285px] h-full flex flex-col items-center pt-34 pr-16",children:(0,n.jsx)(V,{})}),(0,n.jsx)("div",{className:"w-1 h-full bg-gray-grayscale30 sticky top-0"}),(0,n.jsx)("div",{className:"w-[838px] h-full flex items-start justify-around p-9",children:(0,n.jsx)(X,{})}),(0,n.jsx)("div",{className:"w-1 h-full bg-gray-grayscale30 sticky top-0"}),(0,n.jsx)("div",{className:"w-[313px] px-10 h-full",children:(0,n.jsx)(B,{})})]})]}),(0,n.jsx)("div",{className:"mb-30",children:(0,n.jsx)(f,{})}),(0,n.jsx)("div",{className:"flex items-center justify-center w-full",children:(0,n.jsx)(h.Z,{label:"작성 완료",disabled:!1,variant:"blue",onClick:()=>{c()?o(e=>({...e,isPostChecked:!0})):o(e=>({...e,isEmptyAlert:!0}))}})})]})]})},Y=()=>{let[e,t]=(0,v.FV)(w),[r,a]=(0,v.FV)(A),[l,s]=(0,v.FV)(N),[i,o]=(0,v.FV)(S);(0,p.useEffect)(()=>{t(e=>({...e,termReqList:r}))},[r,t]);let c=()=>{let{title:t,startDate:a,endDate:n,depositStartDate:s,depositEndDate:i,dormitoryRoomTypeReqList:o}=e;if(!t||!a||!n||!s||!i)return!1;for(let e of o)if(null===e.acceptLimit||e.acceptLimit<0)continue;for(let e=0;e<r.length;e++){let t=r[e];if(l[e]){if(!t.termName||!t.startDate||!t.endDate)return!1;for(let e of t.dormitoryTermReqList){let t=o.find(t=>t.dormitoryRoomTypeId===e.dormitoryRoomTypeId);if((!t||0!==t.acceptLimit)&&(null===e.price||e.price<0))return!1}}}return!0},d=async()=>{try{console.log("Sending applicationData:",e),(await u(e)).check?(console.log("작성 완료되었습니다."),o(e=>({...e,isPostChecked:!1}))):(console.error("작성에 실패하였습니다."),alert("작성에 실패했습니다. 다시 시도해주세요."))}catch(e){console.error("Error:",e),alert("서버 통신 오류가 발생했습니다.")}};return(0,n.jsxs)(n.Fragment,{children:[i.isPostChecked&&(0,n.jsx)(J.Z,{isOpen:i.isPostChecked,children:(0,n.jsx)(Q.Z,{variant:"blue",label:"작성을 완료하시겠습니까?",onConfirm:d,onCancel:()=>o(e=>({...e,isPostChecked:!1}))})}),i.isEmptyAlert&&(0,n.jsx)(J.Z,{isOpen:i.isEmptyAlert,children:(0,n.jsx)(W.Z,{variant:"blue",label:"모든 내용을 작성해 주시기 바랍니다.",onConfirm:()=>o(e=>({...e,isEmptyAlert:!1}))})}),(0,n.jsxs)("div",{className:"flex flex-col w-full",children:[(0,n.jsx)("div",{className:"H0 text-gray-grayscale50 flex items-center justify-center mb-32",children:(0,n.jsx)("h1",{children:"입사 신청 설정"})}),(0,n.jsxs)("div",{className:"flex itmes-center mb-27",children:[(0,n.jsx)("h2",{className:"H4 text-gray-grayscale40 whitespace-nowrap mr-100",children:"제목"}),(0,n.jsx)(x,{input:e.title,setInput:r=>{t({...e,title:r})},placeholder:"제목을 입력하세요."})]}),(0,n.jsx)(E,{}),(0,n.jsxs)("div",{className:"H4 w-full h-464",children:[(0,n.jsxs)("div",{className:"w-full h-48 flex items-center justify-center border-y-1 border-y-gray-grayscale30",children:[(0,n.jsx)("div",{className:"w-[285px] h-full flex items-center justify-center border-r-1 border-r-gray-grayscale30",children:"수용 가능 인원"}),(0,n.jsx)("div",{className:"w-[838px] h-full flex items-center justify-center text-center border-r-1 border-r-gray-grayscale30",children:"건물별 가격"}),(0,n.jsxs)("div",{className:"w-[313px] h-full flex items-center justify-around",children:[(0,n.jsx)("span",{children:"식권"}),(0,n.jsx)("span",{children:"식권 가격"})]})]}),(0,n.jsxs)("div",{className:"w-full h-415 flex overflow-y-scroll",children:[(0,n.jsx)("div",{className:"w-[285px] h-full flex flex-col items-center pt-34 pr-16",children:(0,n.jsx)(V,{})}),(0,n.jsx)("div",{className:"w-1 h-full bg-gray-grayscale30 sticky top-0"}),(0,n.jsx)("div",{className:"w-[838px] h-full flex items-start justify-around p-9",children:(0,n.jsx)(X,{})}),(0,n.jsx)("div",{className:"w-1 h-full bg-gray-grayscale30 sticky top-0"}),(0,n.jsx)("div",{className:"w-[313px] px-10 h-full",children:(0,n.jsx)(B,{})})]})]}),(0,n.jsx)("div",{className:"mb-30",children:(0,n.jsx)(f,{})}),(0,n.jsx)("div",{className:"flex items-center justify-center w-full",children:(0,n.jsx)(h.Z,{label:"작성 완료",disabled:!1,variant:"blue",onClick:()=>{c()?o(e=>({...e,isPostChecked:!0})):o(e=>({...e,isEmptyAlert:!0}))}})})]})]})},G=()=>{var e;let{data:t,isLoading:r}=g(),{data:a,isLoading:l}=m();return r||l?(0,n.jsx)("div",{className:"flex flex-col w-[1483px]",children:"Loading..."}):a?(null==t?void 0:null===(e=t.information)||void 0===e?void 0:e.isPeriod)?(0,n.jsxs)("div",{className:"flex flex-col w-[1483px]",children:[" ",(0,n.jsx)(K,{})]}):(0,n.jsx)("div",{className:"flex flex-col w-[1483px]",children:(0,n.jsx)(K,{})}):(0,n.jsx)("div",{className:"flex flex-col w-[1483px]",children:(0,n.jsx)(Y,{})})}},9088:function(e,t,r){"use strict";var a=r(57437);t.Z=e=>{let{label:t,onClick:r,hoverColor:l,isColor:n,disabled:s}=e,{btnHoverColor:i}=(e=>{switch(e){case"blue":default:return{btnHoverColor:"hover:bg-blue-blue30"};case"gray":return{btnHoverColor:"hover:bg-gray-grayscale20"};case"red":return{btnHoverColor:"hover:bg-red-red20"};case"green":return{btnHoverColor:"hover:bg-green-green20"}}})(l);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("button",{onClick:r,disabled:s,className:"mr-16 w-86 h-32 rounded-20 ".concat(i," hover-transition ").concat(n&&"bg-blue-blue30"),children:"gray"===l?(0,a.jsx)("h1",{className:"H4 text-gray-grayscale40",children:t}):(0,a.jsx)("h1",{className:"H4 text-gray-grayscale40 hover:text-white ".concat(n&&"text-white"),children:t})})})}},95407:function(e,t,r){"use strict";var a=r(57437);r(2265),t.Z=e=>{let{label:t,variant:r,disabled:l,selected:n=!1,...s}=e;return(0,a.jsx)("button",{...s,disabled:l,className:"H4 w-115 h-37 rounded-full text-white hover:hover-transition ".concat((()=>{switch(r){case"blue":return"".concat(n?"bg-blue-blue50":"bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50");case"green":return"".concat(n?"bg-green-green40":"bg-green-green20 disabled:bg-green-green10 hover:bg-green-green30 active:bg-green-green40");case"red":return"".concat(n?"bg-red-red40":"bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40");default:return""}})()),children:t})}},48871:function(e,t,r){"use strict";var a=r(57437);r(2265),t.Z=e=>{let{label:t,disabled:r,variant:l,selected:n=!1,...s}=e;return(0,a.jsx)("button",{...s,disabled:r,className:"w-133 h-42 rounded-8 hover:hover-transition ".concat((()=>{switch(l){case"blue":return"Btn-cap shadow2 text-white ".concat(n?"bg-blue-blue50":"bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50");case"green":return"Btn-cap shadow2 text-white ".concat(n?"bg-green-green40":"bg-green-green20 disabled:bg-green-green10 hover:bg-green-green30 active:bg-green-green40");case"red":return"Btn-cap shadow2 text-white ".concat(n?"bg-red-red40":"bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40");case"gray":return"H4 text-gray-grayscale50 ".concat(r?"disabled:text-gray-grayscale40 disabled:bg-transparent":n?"bg-gray-grayscale30":"bg-gray-grayscale10 hover:bg-gray-grayscale20 active:bg-gray-grayscale30");case"whiteblue":return"Btn-cap shadow2 ".concat(n?"bg-blue-blue30 border-blue-blue50 text-white":"text-blue-blue30 border-[1.5px] bg-white border-blue-blue30 disabled:text-blue-blue20 disabled:bg-white disabled:border-blue-blue20 hover:bg-blue-blue20 hover:border-blue-blue30 hover:text-blue-blue30 active:bg-blue-blue30 active:border-blue-blue50 active:text-white");case"white":return"".concat(r?"H4 disabled:text-gray-grayscale20 disabled:bg-transparent":n?"H4 text-gray-grayscale50 bg-gray-grayscale30":"H4 text-gray-grayscale40 hover:bg-gray-grayscale10 hover:text-gray-grayscale50 active:bg-gray-grayscale30");default:return""}})()),children:t})}},94770:function(e,t,r){"use strict";var a=r(57437);t.Z=e=>{let{input:t,setInput:r,placeholder:l,readOnly:n,maxLength:s,type:i}=e,{boxSize:o,textAlign:c,inputType:d}=(e=>{switch(e){case"textBox1":default:return{boxSize:"w-133",textAlign:"",inputType:"text"};case"textBox2":return{boxSize:"w-235",textAlign:"",inputType:"text"};case"textBox3":return{boxSize:"w-76",textAlign:"placeholder:text-center text-center",inputType:"number"};case"textBox4":return{boxSize:"w-66",textAlign:"placeholder:text-center",inputType:"text"};case"textBox5":return{boxSize:"w-114",textAlign:"text-right",inputType:"text"};case"textBox6":return{boxSize:"w-145",textAlign:"text-right",inputType:"text"};case"textBox7":return{boxSize:"w-54",textAlign:"placeholder:text-center text-center",inputType:"number"};case"textBox8":return{boxSize:"w-111",textAlign:"",inputType:"text"}}})(i);return(0,a.jsx)("input",{className:"".concat(t?"border-gray-grayscale50":"border-gray-grayscale30"," H4-caption border-[0.5px] outline-none px-8 ").concat(o," ").concat(c," ").concat(n&&"cursor-pointer"," rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30"),placeholder:l,type:d,value:t,readOnly:n,maxLength:s,onChange:e=>{s&&(e.target.value=e.target.value.slice(0,s)),r(e.target.value)}})}},26066:function(e,t,r){"use strict";var a=r(57437),l=r(20703),n=r(95343),s=r(42866);r(2265),t.Z=e=>{let{bgColor:t,onCancel:r}=e;return(0,a.jsxs)("div",{className:"".concat(t||"bg-blue-blue30"," w-full h-39  flex justify-between pl-15 rounded-t-8"),children:[(0,a.jsx)(l.default,{src:n.Z,alt:"PromptLogo",className:"object-contain",width:39,height:11.65}),(0,a.jsx)("button",{className:"hover:bg-red-red30 ".concat(t||"bg-blue-blue30"," w-39 h-39 flex items-center justify-center rounded-tr-8 hover-transition"),onClick:r,children:(0,a.jsx)(l.default,{src:s.Z,alt:"PromptOut",className:"object-contain",width:10,height:10})})]})}},79517:function(e,t,r){"use strict";var a=r(57437),l=r(2265),n=r(54887);t.Z=e=>{let{children:t,isOpen:r}=e;return(0,l.useEffect)(()=>(r?window.document.body.style.overflow="hidden":window.document.body.style.overflow="auto",()=>{window.document.body.style.overflow="auto"}),[r]),(0,n.createPortal)((0,a.jsx)("div",{className:"fixed z-backdrop top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center",children:(0,a.jsx)("div",{className:"xl:scale-65 xxl:scale-80 lg:scale-65 md:scale-50 sm:scale-40",children:null!=t?t:null})}),document.body)}},42825:function(e,t,r){"use strict";var a=r(57437),l=r(20703),n=r(22992),s=r(9088),i=r(26066);t.Z=e=>{let{variant:t,label:r,onConfirm:o}=e,{bgHeader:c}=(e=>{switch(e){case"blue":default:return{bgHeader:"bg-blue-blue30"};case"red":return{bgHeader:"bg-red-red20"};case"green":return{bgHeader:"bg-green-green20"}}})(t);return(0,a.jsxs)("div",{className:"w-456 h-194 flex flex-col items-center rounded-8 shadow-xl bg-white pb-15",children:[(0,a.jsx)(i.Z,{bgColor:c,onCancel:o}),(0,a.jsx)(l.default,{src:n.Z,className:"mt-19 mb-16",width:22,height:19,alt:"PromptWarning"}),(0,a.jsx)("h1",{className:"alert-cap text-gray-grayscale50 text-center",children:r.split("\n").map((e,t)=>(0,a.jsx)("p",{className:"leading-25",children:e},t))}),(0,a.jsx)("div",{className:"ml-auto mt-auto",children:(0,a.jsx)(s.Z,{label:"확인",onClick:o,hoverColor:t})})]})}},91723:function(e,t,r){"use strict";var a=r(57437),l=r(20703),n=r(22992),s=r(9088),i=r(26066);t.Z=e=>{let{variant:t,label:r,onConfirm:o,onCancel:c,textLeft:d,textRight:u}=e,{bgHeader:g}=(e=>{switch(e){case"blue":default:return{bgHeader:"bg-blue-blue30"};case"red":return{bgHeader:"bg-red-red20"};case"green":return{bgHeader:"bg-green-green20"}}})(t);return(0,a.jsxs)("div",{className:"w-456 h-194 flex flex-col items-center rounded-8 shadow-xl bg-white pb-15",children:[(0,a.jsx)(i.Z,{bgColor:g,onCancel:c}),(0,a.jsx)(l.default,{src:n.Z,className:"mt-19 mb-16",width:22,height:19,alt:"PromptWarning"}),(0,a.jsx)("h1",{className:"alert-cap text-gray-grayscale50 text-center",children:r.split("\\n").map((e,t)=>(0,a.jsx)("p",{className:"leading-25",children:e},t))}),(0,a.jsxs)("div",{className:"ml-auto mt-auto",children:[(0,a.jsx)(s.Z,{label:d||"취소",onClick:c,hoverColor:t}),(0,a.jsx)(s.Z,{label:u||"확인",onClick:o,hoverColor:t})]})]})}},58640:function(e,t,r){"use strict";r.d(t,{_:function(){return a}});let a="https://www.dormease-dev.kro.kr"},89652:function(e,t,r){"use strict";r.d(t,{L:function(){return a},z:function(){return l}});let a="ACCESS_TOKEN",l="REFRESH_TOKEN"},2920:function(e,t,r){"use strict";r.d(t,{M2:function(){return n},fG:function(){return s},p6:function(){return l},vQ:function(){return a}});let a=(()=>{let e=new Date,t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return"".concat(t,"-").concat(r,"-").concat(a)})(),l=e=>{let t=new Date(e),r=String(t.getFullYear()).slice(2),a=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0");return"".concat(r,".").concat(a,".").concat(l)},n=()=>{let e=new Date,t=e.getFullYear(),r=(e.getMonth()+1).toString().padStart(2,"0"),a=e.getDate().toString().padStart(2,"0");return"".concat(t,"년 ").concat(r,"월 ").concat(a,"일")},s=()=>{let e=new Date;return"오늘은 ".concat(["일요일","월요일","화요일","수요일","목요일","금요일","토요일"][e.getDay()],"입니다.")}},75518:function(e,t,r){"use strict";var a=r(77871),l=r(89652);let n=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.Z.getToken(l.L);if(!r)throw Error("No access token found");let n={...t.headers,Authorization:"Bearer ".concat(r)},s=await fetch(e,{...t,headers:n});if(!s.ok)throw 401===s.status&&(a.Z.removeToken(l.L),a.Z.removeToken(l.z),alert("세션이 만료되었습니다. 다시 로그인해 주세요.")),Error("Failed to fetch data");return 204===s.status||201===s.status?{}:s.json()};t.Z=n},77871:function(e,t){"use strict";t.Z={saveToken:(e,t)=>{localStorage.setItem(e,t)},getToken:e=>localStorage.getItem(e),removeToken:e=>{localStorage.removeItem(e)}}},95343:function(e,t){"use strict";t.Z={src:"/_next/static/media/PromptLogo.692c0d92.png",height:13,width:39,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEX///////////////////////////////////////8V2MxSAAAACnRSTlPlmoJy+43FvWlJljCSDAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACFJREFUeJwFwYEBADAIwrDCxOn/D5vAhDw+2qanBFbF9gEEtABSm4AZFAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},42866:function(e,t){"use strict";t.Z={src:"/_next/static/media/PromptOut.98b7927a.png",height:12,width:12,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEX///////////////9MaXH///91ewZhAAAABnRSTlNA0QMxAHpSp+N/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nEWLsQ0AMAyDcEz/f7lT0w0J4OCMHAhKQNIGGZvU+bBq47dfE2gAiTtnxw0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},22992:function(e,t){"use strict";t.Z={src:"/_next/static/media/PromptWarning.99ab5e8b.png",height:21,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAHlBMVEXXNTXXNTVMaXHWNTXXNTXXNTWqVVXUODjYNzfWNTXpH04wAAAACnRSTlN9jQA8LFoDEkykCmOTUQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJwdwYkNADAMAjE4SJ/9F65UW4ANaDEzwxLbiTdCOSdCNQmuXBoqXX33ARTdAKE2+uYqAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7}},25566:function(e){var t,r,a,l=e.exports={};function n(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===n||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:n}catch(e){t=n}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var o=[],c=!1,d=-1;function u(){c&&a&&(c=!1,a.length?o=a.concat(o):d=-1,o.length&&g())}function g(){if(!c){var e=i(u);c=!0;for(var t=o.length;t;){for(a=o,o=[];++d<t;)a&&a[d].run();d=-1,t=o.length}a=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}l.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];o.push(new m(e,t)),1!==o.length||c||i(g)},m.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=h,l.addListener=h,l.once=h,l.off=h,l.removeListener=h,l.removeAllListeners=h,l.emit=h,l.prependListener=h,l.prependOnceListener=h,l.listeners=function(e){return[]},l.binding=function(e){throw Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw Error("process.chdir is not supported")},l.umask=function(){return 0}}},function(e){e.O(0,[691,703,4898,1252,2971,8069,1744],function(){return e(e.s=53591)}),_N_E=e.O()}]);