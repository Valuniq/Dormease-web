(()=>{var e={};e.id=858,e.ids=[858],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},316:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>c});var a=r(482),s=r(9108),i=r(2563),n=r.n(i),o=r(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["dashboard",{children:["(Notice)",{children:["Notice",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1984)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\dashboard\\(Notice)\\Notice\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,3227)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\dashboard\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,627)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\dashboard\\(Notice)\\Notice\\page.tsx"],u="/dashboard/(Notice)/Notice/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/dashboard/(Notice)/Notice/page",pathname:"/dashboard/Notice",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3263:(e,t,r)=>{Promise.resolve().then(r.bind(r,5772))},7785:(e,t)=>{"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),a=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator,{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),s=Object.assign,i={};function n(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||a}function o(){}function l(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||a}n.prototype.isReactComponent={},n.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},o.prototype=n.prototype;var c=l.prototype=new o;c.constructor=l,s(c,n.prototype),c.isPureReactComponent=!0;var d=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,a){var s,i={},n=null,o=null;if(null!=t)for(s in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(n=""+t.key),t)d.call(t,s)&&!u.hasOwnProperty(s)&&(i[s]=t[s]);var l=arguments.length-2;if(1===l)i.children=a;else if(1<l){for(var c=Array(l),p=0;p<l;p++)c[p]=arguments[p+2];i.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps)void 0===i[s]&&(i[s]=l[s]);return{$$typeof:r,type:e,key:n,ref:o,props:i,_owner:null}}},6413:(e,t,r)=>{"use strict";e.exports=r(7785)},5772:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var a=r(5344),s=r(7806),i=r(9241),n=r(4651);let o=()=>{let{data:e,error:t,size:r,setSize:a}=(0,n.ZP)((e,t)=>t&&0===t.information.dataList.length?null:`${s._}/api/v1/web/notifications/ANNOUNCEMENT?page=${e+1}`,i.Z),o=e?e.reduce((e,t)=>e.concat(t.information.dataList),[]):[],l=!e&&!t||r>0&&e&&void 0===e[r-1];return{notificationsData:o,error:t,isLoadingMore:l,size:r,setSize:a,isReachingEnd:e?.[0]?.information.dataList.length===0||e&&e[e.length-1]?.information.pageInfo.currentPage===e[e.length-1]?.information.pageInfo.totalPage||!1}};var l=r(9583),c=r(3932);r(3729);var d=r(9403),u=r(7608),p=r(9410);let h=({notificationId:e,pinned:t,title:r,writer:s,createdDate:i,existFile:n})=>{let o=r.length>35?r.slice(0,35)+"...":r;return(0,a.jsxs)("tr",{className:`${t?"bg-gray-grayscale10":"bg-white"} h-38 hover-transition hover:bg-gray-grayscale10 cursor-pointer active:bg-gray-grayscale20 H4-caption text-gray-grayscale50`,children:[a.jsx("td",{className:"text-center",children:t?(0,a.jsxs)("div",{className:"flex items-center justify-center",children:[e," ",a.jsx(p.default,{className:" object-contain ml-2 ",src:u.Z,width:13,height:19.61,alt:"pinIcon"})]}):(0,a.jsxs)(a.Fragment,{children:[" ",e]})}),a.jsx("td",{className:"text-center",children:o}),a.jsx("td",{className:"text-center",children:s}),a.jsx("td",{className:"text-center",children:i}),a.jsx("td",{className:"text-center",children:n?"O":"X"}),a.jsx("td",{className:"text-center",children:"조회수"})]},e)},g=({noticeLists:e})=>{let t=e.filter(e=>e.pinned),r=e.filter(e=>!e.pinned);return a.jsx("div",{className:"w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50",children:(0,a.jsxs)("table",{className:"w-[1200px] h-full",children:[(0,a.jsxs)("thead",{className:"w-full h-36 bg-white sticky top-0 z-1",children:[(0,a.jsxs)("tr",{className:"text-gray-grayscale50",children:[a.jsx("th",{className:"H4",children:"번호"}),a.jsx("th",{className:"H4",children:"제목"}),a.jsx("th",{className:"H4",children:"작성자"}),a.jsx("th",{className:"H4",children:"등록일"}),a.jsx("th",{className:"H4",children:"첨부파일"}),a.jsx("th",{className:"H4",children:"조회수"})]}),a.jsx("tr",{children:a.jsx("th",{colSpan:6,children:a.jsx("div",{className:"w-full h-18 border-b-1 border-b-gray-grayscale50"})})})]}),e.length>0?(0,a.jsxs)("tbody",{className:"overflow-y-scroll",children:[t.map(e=>a.jsx("tr",{children:a.jsx(h,{notificationId:e.notificationId,title:e.title,writer:e.writer,createdDate:e.createdDate,existFile:e.existFile,pinned:e.pinned})},e.notificationId)),r.map(e=>a.jsx("tr",{children:a.jsx(h,{notificationId:e.notificationId,title:e.title,writer:e.writer,createdDate:e.createdDate,existFile:e.existFile,pinned:e.pinned})},e.notificationId))]}):a.jsx("tbody",{className:"h-full",children:a.jsx(d.Z,{colspan:6})})]})})},b=()=>{let{notificationsData:e,error:t,isLoadingMore:r,size:s,setSize:i,isReachingEnd:n}=o();return t?a.jsx("div",{children:"Failed to load"}):e?(0,a.jsxs)("div",{className:"w-[1200px] flex flex-col items-center",children:[a.jsx("h1",{className:"H0 text-gray-grayscale50",children:"공지사항"}),a.jsx("div",{className:"ml-auto mb-15",children:a.jsx(l.Z,{label:"작성하기",disabled:!1,variant:"blue"})}),a.jsx(g,{noticeLists:e}),a.jsx("div",{className:"mt-27 flex justify-center",children:a.jsx(c.Z,{pageNum:s,pageTotalNum:10,setPageNum:e=>{"prev"===e&&s>1?i(s-1):"next"!==e||n||i(s+1)}})})]}):a.jsx("div",{children:"Loading..."})}},9583:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(5344);r(3729);let s=({label:e,variant:t,disabled:r,selected:s=!1,...i})=>a.jsx("button",{...i,disabled:r,className:`H4 w-115 h-37 rounded-full text-white hover:hover-transition ${(()=>{switch(t){case"blue":return`${s?"bg-blue-blue50":"bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50"}`;case"green":return`${s?"bg-green-green40":"bg-green-green20 disabled:bg-green-green10 hover:bg-green-green30 active:bg-green-green40"}`;case"red":return`${s?"bg-red-red40":"bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40"}`;default:return""}})()}`,children:e})},1984:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>s,default:()=>n});let a=(0,r(6843).createProxy)(String.raw`C:\Users\LeeBoHyun\Desktop\dormease-web\src\app\dashboard\(Notice)\Notice\page.tsx`),{__esModule:s,$$typeof:i}=a,n=a.default},7608:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});let a={src:"/_next/static/media/pinIcon.428e8381.png",height:18,width:18,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXE3et01d9c0eNg0d9c1eNg2eNo2edY1d9c1dtg2eNk4fOA2dtE6g+w4feLum0OSAAAADXRSTlMA/PqCX57aLXBCveIcezOPlQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUeJwdykkSACEIwMAAsqiD/3+uNebUhwDMGLy85elbIjKo2EelN9WqZ/kEa9UE0q3jXy2pAi4nOgEgO4Xy5AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[456,332,999,356,731,651,638],()=>r(316));module.exports=a})();