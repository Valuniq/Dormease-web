(()=>{var e={};e.id=968,e.ids=[968],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},1050:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a,s=r(6413);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}let n=function(e){return s.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:13,height:7,fill:"none"},e),a||(a=s.createElement("path",{stroke:"#323232",strokeLinecap:"round",strokeWidth:1.5,d:"m1 6 4.626-4.626a1 1 0 0 1 1.414 0L11.667 6"})))}},3153:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>c});var a=r(482),s=r(9108),l=r(2563),n=r.n(l),o=r(8300),i={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);r.d(t,i);let c=["",{children:["dashboard",{children:["BuildingManagement",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7878)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\dashboard\\BuildingManagement\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,3227)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\dashboard\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,627)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\dashboard\\BuildingManagement\\page.tsx"],u="/dashboard/BuildingManagement/page",m={require:r,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/dashboard/BuildingManagement/page",pathname:"/dashboard/BuildingManagement",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},851:(e,t,r)=>{Promise.resolve().then(r.bind(r,7113))},7785:(e,t)=>{"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),a=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator,{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),s=Object.assign,l={};function n(e,t,r){this.props=e,this.context=t,this.refs=l,this.updater=r||a}function o(){}function i(e,t,r){this.props=e,this.context=t,this.refs=l,this.updater=r||a}n.prototype.isReactComponent={},n.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},o.prototype=n.prototype;var c=i.prototype=new o;c.constructor=i,s(c,n.prototype),c.isPureReactComponent=!0;var d=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,a){var s,l={},n=null,o=null;if(null!=t)for(s in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(n=""+t.key),t)d.call(t,s)&&!u.hasOwnProperty(s)&&(l[s]=t[s]);var i=arguments.length-2;if(1===i)l.children=a;else if(1<i){for(var c=Array(i),m=0;m<i;m++)c[m]=arguments[m+2];l.children=c}if(e&&e.defaultProps)for(s in i=e.defaultProps)void 0===l[s]&&(l[s]=i[s]);return{$$typeof:r,type:e,key:n,ref:o,props:l,_owner:null}}},6413:(e,t,r)=>{"use strict";e.exports=r(7785)},718:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(5344);let s=({label:e,onClick:t,hoverColor:r})=>{let{btnHoverColor:s}=(e=>{switch(e){case"blue":default:return{btnHoverColor:"hover:bg-blue-blue30"};case"gray":return{btnHoverColor:"hover:bg-gray-grayscale20"};case"red":return{btnHoverColor:"hover:bg-red-red20"};case"green":return{btnHoverColor:"hover:bg-green-green20"}}})(r);return a.jsx(a.Fragment,{children:a.jsx("button",{onClick:t,className:`mr-16 w-86 h-32 rounded-20 ${s} hover-transition`,children:"gray"===r?a.jsx("h1",{className:"H4 text-gray-grayscale40",children:e}):a.jsx("h1",{className:"H4 text-gray-grayscale40  hover:text-white",children:e})})})}},3323:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(5344);r(3729);let s=({label:e,disabled:t,selected:r=!1,variant:s,...l})=>a.jsx("button",{...l,disabled:t,className:`H4 w-79 h-34 rounded-full text-white hover:hover-transition ${(e=>{switch(e){case"blue":return`${r?"bg-blue-blue50":"bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50"}`;case"red":return`${r?"bg-red-red40":"bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40"}`;default:return""}})(s)}`,children:e})},7103:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(5344);r(3729);var s=r(1050),l=r(3111);let n=({list:e,isOn:t,setIsOn:r,select:n,setSelect:o,...i})=>(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsxs)("button",{...i,onClick:()=>r(!t),className:"H4 flex justify-between items-center px-13 w-164 h-41 rounded-5 bg-gray-grayscale5",children:[n.name,a.jsx(s.Z,{className:`${t&&"rotate-180"}`})]}),t&&a.jsx("div",{className:"mt-12 py-3 w-164 rounded-5 bg-gray-grayscale5 text-center",children:e.map((e,s)=>a.jsx("div",{className:"pt-10 pb-10",children:a.jsx(l.Z,{label:e.name,variant:"white",disabled:!1,selected:n.id===e.id,onClick:()=>{o(e.id,e.name),r(!t)}})},s))})]})},9757:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var a=r(5344),s=r(9410),l=r(2685),n=r(2017);r(3729);let o=({bgColor:e})=>(0,a.jsxs)("div",{className:`${e||"bg-blue-blue30"} w-full h-39  flex justify-between pl-15 rounded-t-8`,children:[a.jsx(s.default,{src:l.Z,alt:"PromptLogo",className:"object-contain",width:39,height:11.65}),a.jsx("button",{className:`hover:bg-red-red30 ${e||"bg-blue-blue30"} w-39 h-39 flex items-center justify-center rounded-tr-8 hover-transition`,children:a.jsx(s.default,{src:n.Z,alt:"PromptOut",className:"object-contain",width:10,height:10})})]})},9804:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var a=r(5344),s=r(3729);let l=({children:e,isOpen:t})=>((0,s.useEffect)(()=>(t?window.document.body.style.overflow="hidden":window.document.body.style.overflow="auto",()=>{window.document.body.style.overflow="auto"}),[t]),a.jsx("div",{className:"fixed z-backdrop top-0 left-0 w-full h-full bg-[#00000040] z-100 flex justify-center items-center",children:e??null}))},9403:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(5344);r(3729);let s=({colspan:e})=>a.jsx("tr",{children:a.jsx("td",{colSpan:e,className:"h-full",children:a.jsx("div",{className:"flex justify-center items-center h-693",children:a.jsx("h1",{className:"H1 text-gray-grayscale30",children:"리스트가 비었습니다."})})})})},1688:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(5344),s=r(9410),l=r(415),n=r(718),o=r(9757);let i=({variant:e,label:t,onConfirm:r})=>{let{bgHeader:i}=(e=>{switch(e){case"blue":default:return{bgHeader:"bg-blue-blue30"};case"red":return{bgHeader:"bg-red-red20"};case"green":return{bgHeader:"bg-green-green20"}}})(e);return(0,a.jsxs)("div",{className:"w-456 h-194 flex flex-col items-center rounded-8 shadow-xl bg-white pb-15",children:[a.jsx(o.Z,{bgColor:i}),a.jsx(s.default,{src:l.Z,className:"mt-19 mb-16",width:22,height:19,alt:"PromptWarning"}),a.jsx("h1",{className:"alert-cap text-gray-grayscale50 text-center",children:t.split("\\n").map((e,t)=>a.jsx("p",{className:"leading-25",children:e},t))}),a.jsx("div",{className:"ml-auto mt-auto",children:a.jsx(n.Z,{label:"확인",onClick:r,hoverColor:e})})]})}},7012:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(5344),s=r(9410),l=r(415),n=r(718),o=r(9757);let i=({variant:e,label:t,onCancel:r,onConfirm:i})=>{let{bgHeader:c}=(e=>{switch(e){case"blue":default:return{bgHeader:"bg-blue-blue30"};case"red":return{bgHeader:"bg-red-red20"};case"green":return{bgHeader:"bg-green-green20"}}})(e);return(0,a.jsxs)("div",{className:"w-456 h-194 flex flex-col items-center rounded-8 shadow-xl bg-white pb-15",children:[a.jsx(o.Z,{bgColor:c}),a.jsx(s.default,{src:l.Z,className:"mt-19 mb-16",width:22,height:19,alt:"PromptWarning"}),a.jsx("h1",{className:"alert-cap text-gray-grayscale50 text-center",children:t.split("\\n").map((e,t)=>a.jsx("p",{className:"leading-25",children:e},t))}),(0,a.jsxs)("div",{className:"ml-auto mt-auto",children:[a.jsx(n.Z,{label:"취소",onClick:r,hoverColor:"gray"}),a.jsx(n.Z,{label:"확인",onClick:i,hoverColor:e})]})]})}},7113:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>U});var a=r(5344);let s="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjAxOkFETUlOIiwiaXNzIjoiRG9ybWVhc2VWYWx1bmlRIiwiaWF0IjoxNzE5NzYzNjg2LCJleHAiOjE3MTk3NjU0ODZ9.dIzXicB5rNhhgPe5ewJ4eVzfD6OCZrxfrEsDaIlontSM-Jwf6ssrM3wYa7KxEKUOA7YGigiEvuIkdUnHTigylA",l=async()=>{console.error("Unauthorized access - 401")},n=async e=>{if(401===e.status)throw await l(),Error("Unauthorized");if(!e.ok)throw Error(`Server responded with status ${e.status}`);return e.json()},o=async e=>n(await fetch(`https://www.dormease-dev.kro.kr/api/v1/web/dormitory/management/${e}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`bearer ${s}`}})),i=async e=>n(await fetch(`https://www.dormease-dev.kro.kr/api/v1/web/dormitory/management/${e}/floor`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`bearer ${s}`}})),c=async(e,t)=>n(await fetch(`https://www.dormease-dev.kro.kr/api/v1/web/dormitory/management/${e}/${t}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`bearer ${s}`}})),d=async(e,t)=>n(await fetch(`https://www.dormease-dev.kro.kr/api/v1/web/dormitory/management/${e}/memo`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`bearer ${s}`},body:JSON.stringify({memo:t})})),u=async e=>n(await fetch(`https://www.dormease-dev.kro.kr/api/v1/web/dormitory/management/rooms/${e}/assigned`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`bearer ${s}`}})),m=async e=>n(await fetch(`https://www.dormease-dev.kro.kr/api/v1/web/dormitory/management/rooms/${e}/not-assigned`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`bearer ${s}`}}));var h=r(3111),g=r(3323),b=r(7103),x=r(3729),p=r(1050);let A=({label:e,disabled:t,selected:r=!1,...s})=>a.jsx("button",{...s,disabled:t,className:`H4 w-60 h-42 rounded-full text-gray-grayscale-50 bg-transparent ${t?"disabled:text-gray-grayscale20":r?"bg-gray-grayscale30":"hover:bg-gray-grayscale20 hover:hover-transition active:bg-gray-grayscale30"}`,children:e}),y=({list:e,isOn:t,setIsOn:r,select:s,setSelect:l,...n})=>(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsxs)("button",{...n,onClick:()=>{e.length>0&&r(!t)},className:"H4 flex justify-center items-center w-75 h-41 rounded-5 bg-gray-grayscale5",children:[0===s?"층":999===s?"전체":s+"층",a.jsx(p.Z,{className:`${t&&"rotate-180"} ml-10`})]}),e.length>0&&t&&a.jsx("div",{className:"mt-12 py-3 w-75 rounded-5 bg-gray-grayscale5 text-center",children:e.map((e,n)=>a.jsx("div",{className:"pt-3 pb-3",children:a.jsx(A,{label:999===e.floor?"전체":e.floor+"층",disabled:!1,selected:s===e.floor,onClick:()=>{l(e.floor),r(!t)}})},n))})]});var w=r(9804);let f=({studentList:e,onStudentClick:t,editAssign:r,roomSize:s,roomManual:l,roomId:n})=>{let o=r=>{let a=e.filter(e=>e.assigned).length,l=e.find(e=>e.id===r);(a<s||l&&l.assigned)&&t(r)};return a.jsx(a.Fragment,{children:a.jsx("div",{className:"absolute z-10 text-gray-grayscale50 mt-10 left-115",children:(0,a.jsxs)("div",{className:"balloon caption-2",children:[a.jsx("table",{children:a.jsx("tbody",{className:"max-h-256 overflow-y-auto scrollbar-table",children:e.map(e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("tr",{className:`w-[290px] caption-2 py-2 text-nowrap align-middle cursor-pointer ${e.assigned&&r?"bg-gray-grayscale20":"hover:bg-gray-grayscale10 active:bg-gray-grayscale20"}`,onClick:t=>{t.stopPropagation(),o(e.id)},children:[a.jsx("td",{className:"rounded-l-5 pr-20 pl-10 min-w-100",children:e.studentNumber}),a.jsx("td",{className:"pr-20 min-w-60",children:e.name}),a.jsx("td",{className:"rounded-r-5 pr-10 min-w-100",children:e.phoneNumber})]},e.id),a.jsx("tr",{className:"h-10"})]}))})}),r&&a.jsx("div",{className:"mt-4 mb-14",children:a.jsx(g.Z,{label:"배정",variant:"blue",disabled:!1,selected:!1,onClick:()=>l&&l(n)})})]})})})},j=({roomId:e,roomNumber:t,roomSize:r,gender:s,currentPeople:l,listClick:n,onListClick:o,onStudentClick:i,studentList:c,editAssign:d,roomManual:u})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("tr",{className:"table rounded-5 w-[734px] H4-caption text-nowrap align-middle cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20",onClick:t=>{t.stopPropagation(),o(e)},children:[(0,a.jsxs)("td",{className:"w-[20%]",children:[t,"호"]}),(0,a.jsxs)("td",{className:"w-[30%] text-blue-blue30 underline",children:[r,"인실"]}),a.jsx("td",{className:"w-[30%]",children:"MALE"===s?"남":"여"}),(0,a.jsxs)("td",{className:"w-[20%] H3 text-gray-grayscale30",children:[a.jsx("h3",{className:"text-blue-blue30 inline-flex",children:l}),"/",r]})]}),e===n&&a.jsx("tr",{className:"relative",children:a.jsx("td",{colSpan:4,children:a.jsx(f,{studentList:c,onStudentClick:i,editAssign:d,roomSize:r,roomManual:u,roomId:e})})}),a.jsx("tr",{className:"h-8"})]});var v=r(9403);let N=({roomList:e,studentList:t,listClick:r,onListClick:s,onStudentClick:l,editAssign:n,roomManual:o})=>(0,a.jsxs)("table",{className:"text-nowrap text-center text-gray-grayscale50",children:[(0,a.jsxs)("thead",{className:"table w-[734px]",children:[(0,a.jsxs)("tr",{children:[a.jsx("th",{className:"H4 w-[20%]",children:"호 실"}),a.jsx("th",{className:"H4 w-[30%]",children:"인 실"}),a.jsx("th",{className:"H4 w-[30%]",children:"성 별"}),a.jsx("th",{className:"H4 w-[20%]",children:"인 원"})]}),a.jsx("tr",{className:"h-12 border-b-1"})]}),e&&e.length>0?(0,a.jsxs)("tbody",{className:"block w-[748px] h-695 overflow-y-auto scrollbar-table",children:[a.jsx("tr",{className:"h-12"}),e.map(e=>a.jsx(j,{roomId:e.id,roomNumber:e.roomNumber,roomSize:e.roomSize,gender:e.gender,currentPeople:e.currentPeople,listClick:r,onListClick:s,onStudentClick:l,studentList:t,editAssign:n,roomManual:o},e.id))]}):a.jsx("tbody",{children:a.jsx(v.Z,{colspan:4})})]});var C=r(1688),S=r(7012);let k={src:"/_next/static/media/Memo.8b25f92c.png",height:31,width:130,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEVGRkZHR0dGRkZHR0dHR0d9S03gAAAABXRSTlOmj5qAbuk7I9gAAAAJcEhZcwAAEJwAABCcASbNOjQAAAAWSURBVHicY2BgYmAEIwZGRhYmJmZGAACvABdKKZAVAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2};var E=r(9410);let U=({buildingList:e})=>{let[t,r]=(0,x.useState)(!1),[s,l]=(0,x.useState)(!1),[n,p]=(0,x.useState)(e[0]),[A,f]=(0,x.useState)([]),[j,v]=(0,x.useState)(!1),[U,H]=(0,x.useState)(0),[Z,O]=(0,x.useState)(),[z,M]=(0,x.useState)({name:"",imageUrl:null,fullRoomCount:0,roomCount:0,currentPeopleCount:0,dormitorySize:0,memo:null}),[P,B]=(0,x.useState)(z.memo),[T,R]=(0,x.useState)(!1),[I,G]=(0,x.useState)(0),[J,L]=(0,x.useState)([]),[D,F]=(0,x.useState)([]),[$,q]=(0,x.useState)([]),[W,_]=(0,x.useState)(!1),[X,V]=(0,x.useState)(!1),[Y,K]=(0,x.useState)();(0,x.useEffect)(()=>{q(J.concat(D))},[J,D]);let Q=async e=>{let t=await o(e);t.check?(M(t.information),B(t.information.memo)):M({name:"",imageUrl:null,fullRoomCount:0,roomCount:0,currentPeopleCount:0,dormitorySize:0,memo:null})};(0,x.useEffect)(()=>{(async()=>{r(!0),await Q(n.id)})()},[n]);let ee=async e=>{let t=await i(e);f(t.information),t.information.length>0?(H(999),et(e,999)):(H(0),et(e,0))},et=async(e,t)=>{O((await c(e,t)).information)},er=async()=>{null!==P&&(await d(n.id,P)).check&&R(!T)},ea=async e=>{let t=await u(e);t.check?(L(t.information),W&&(t.information.length>0||D.length>0)?G(e):t.information.length>0?G(e):G(0)):L([])},es=async e=>{let t=await m(e);t.check?F(t.information):F([])};return a.jsx(a.Fragment,{children:t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsxs)("div",{children:[z.imageUrl?a.jsx(E.default,{className:"rounded-8 w-381 h-241 cursor-pointer shadow2 mb-35",src:z.imageUrl,alt:"Building",objectFit:"fill"}):a.jsx("div",{className:"rounded-8 w-381 h-241 cursor-pointer shadow2 mb-35 bg-gray-grayscale10"}),a.jsx("table",{children:(0,a.jsxs)("tbody",{className:"H4 text-left",children:[(0,a.jsxs)("tr",{children:[a.jsx("td",{className:"text-gray-grayscale30 border-r-1 pb-20",children:"건 물 명"}),a.jsx("td",{className:"text-gray-grayscale50 pl-15 pb-20",children:z.name})]}),(0,a.jsxs)("tr",{children:[a.jsx("td",{className:"text-gray-grayscale30 border-r-1 pb-20",children:"방 개 수"}),(0,a.jsxs)("td",{className:"text-gray-grayscale50 pl-15 pb-20",children:[z.fullRoomCount,"/",z.roomCount]})]}),(0,a.jsxs)("tr",{children:[a.jsx("td",{className:"text-gray-grayscale30 border-r-1 pr-15",children:"수용인원"}),(0,a.jsxs)("td",{className:"text-gray-grayscale50 pl-15",children:[z.currentPeopleCount,"/",z.dormitorySize]})]})]})}),a.jsx("div",{className:"mt-30",children:(0,a.jsxs)("div",{className:"w-380 h-350 bg-yellow-memoyellow flex flex-col items-center pt-18 shadow2",children:[a.jsx(E.default,{src:k,alt:"Memo",width:86.49,height:20.34}),(0,a.jsxs)("div",{className:"text-gray-grayscale50 mt-20 w-318 relative",children:[a.jsx("textarea",{className:"H4-caption leading-[34px] w-full h-204 bg-yellow-memoyellow border-none outline-none scrollbar-table resize-none",value:null===P?"":P,onChange:e=>B(e.target.value)}),a.jsx("hr",{className:"border-b-1 border-gray-grayscale30 w-318 absolute top-28"}),a.jsx("hr",{className:"border-b-1 border-gray-grayscale30 w-318 absolute top-63"}),a.jsx("hr",{className:"border-b-1 border-gray-grayscale30 w-318 absolute top-98"}),a.jsx("hr",{className:"border-b-1 border-gray-grayscale30 w-318 absolute top-133"}),a.jsx("hr",{className:"border-b-1 border-gray-grayscale30 w-318 absolute top-168"}),a.jsx("hr",{className:"border-b-1 border-gray-grayscale30 w-318 absolute top-[203px]"})]}),a.jsx("div",{className:"mt-20",children:a.jsx(g.Z,{label:"저장",disabled:null===P||P===z.memo,selected:!1,variant:"blue",onClick:er})})]})})]}),a.jsx("div",{className:"border-r-1 mx-29 h-790"}),(0,a.jsxs)("div",{className:"mt-20",children:[W?a.jsx(N,{listClick:I,onListClick:e=>{I===e?G(0):ea(e)},onStudentClick:e=>{q(t=>t.map(t=>t.id===e?{...t,assigned:!t.assigned}:t))},roomList:Z,studentList:$,editAssign:W,roomManual:e=>{let t={roomId:e,residentIds:$.filter(e=>e.assigned).map(e=>e.id)};K(r=>[...(r||[]).filter(t=>t.roomId!==e),t])}}):a.jsx(N,{listClick:I,onListClick:e=>{I===e?G(0):ea(e)},onStudentClick:()=>{},roomList:Z,studentList:J,editAssign:W}),a.jsx("div",{className:"flex justify-end mt-21",children:a.jsx(h.Z,{label:W?"저장":"수기배정",disabled:!1,variant:"blue",onClick:()=>{W?V(!X):(G(0),_(!W))}})})]})]}),a.jsx("div",{className:"absolute top-0 right-0",children:(0,a.jsxs)("div",{className:"flex gap-19 mt-14",children:[a.jsx(b.Z,{isOn:s,select:n,list:e,setSelect:(e,t)=>{_(!1),p({id:e,name:t}),ee(e),v(!1),Q(e),es(e),G(0)},setIsOn:()=>l(!s)}),a.jsx(y,{list:A,isOn:j,setIsOn:()=>v(!j),select:U,setSelect:e=>{H(e),et(n.id,e),G(0)}})]})}),T&&a.jsx(w.Z,{isOpen:T,children:a.jsx(C.Z,{variant:"blue",label:"메모가 저장되었습니다.",onConfirm:()=>R(!T)})}),X&&a.jsx(w.Z,{isOpen:X,children:a.jsx(S.Z,{variant:"blue",label:"배정된 호실을 저장하시겠습니까?",onConfirm:()=>{V(!X),_(!W),G(0)},onCancel:()=>V(!X)})})]})})}},7878:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var a=r(5036);let s=async()=>{console.error("Unauthorized access - 401")},l=async e=>{if(401===e.status)throw await s(),Error("Unauthorized");if(!e.ok)throw Error(`Server responded with status ${e.status}`);return e.json()},n=async()=>l(await fetch("https://www.dormease-dev.kro.kr/api/v1/web/dormitory/management",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjAxOkFETUlOIiwiaXNzIjoiRG9ybWVhc2VWYWx1bmlRIiwiaWF0IjoxNzE5NzYzNjg2LCJleHAiOjE3MTk3NjU0ODZ9.dIzXicB5rNhhgPe5ewJ4eVzfD6OCZrxfrEsDaIlontSM-Jwf6ssrM3wYa7KxEKUOA7YGigiEvuIkdUnHTigylA"}})),o=(0,r(6843).createProxy)(String.raw`C:\Users\LeeBoHyun\Desktop\dormease-web\src\components\templates\BuildingManagement\index.tsx`),{__esModule:i,$$typeof:c}=o,d=o.default;var u=r(2);let m=async()=>{try{let e=await n();return a.jsx(u.Suspense,{fallback:a.jsx("h1",{children:"로딩 중"}),children:(0,a.jsxs)("div",{className:"flex flex-col relative w-[1174px]",children:[a.jsx("div",{className:"flex items-center mb-8",children:a.jsx("div",{className:"flex justify-center w-full",children:a.jsx("h1",{className:"H0 text-gray-grayscale50 text-nowrap",children:"건물관리"})})}),a.jsx(d,{buildingList:e.information})]})})}catch(e){return a.jsx("div",{children:a.jsx("h1",{children:"에러가 발생했습니다: "})})}}},2685:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});let a={src:"/_next/static/media/PromptLogo.692c0d92.png",height:13,width:39,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEX///////////////////////////////////////8V2MxSAAAACnRSTlPlmoJy+43FvWlJljCSDAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACFJREFUeJwFwYEBADAIwrDCxOn/D5vAhDw+2qanBFbF9gEEtABSm4AZFAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},2017:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});let a={src:"/_next/static/media/PromptOut.98b7927a.png",height:12,width:12,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEX///////////////9MaXH///91ewZhAAAABnRSTlNA0QMxAHpSp+N/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nEWLsQ0AMAyDcEz/f7lT0w0J4OCMHAhKQNIGGZvU+bBq47dfE2gAiTtnxw0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},415:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});let a={src:"/_next/static/media/PromptWarning.99ab5e8b.png",height:21,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAHlBMVEXXNTXXNTVMaXHWNTXXNTXXNTWqVVXUODjYNzfWNTXpH04wAAAACnRSTlN9jQA8LFoDEkykCmOTUQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJwdwYkNADAMAjE4SJ/9F65UW4ANaDEzwxLbiTdCOSdCNQmuXBoqXX33ARTdAKE2+uYqAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[456,332,999,356,552],()=>r(3153));module.exports=a})();