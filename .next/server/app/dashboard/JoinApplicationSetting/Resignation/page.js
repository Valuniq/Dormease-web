(()=>{var e={};e.id=148,e.ids=[148],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},2381:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>h,pages:()=>c,routeModule:()=>g,tree:()=>o});var a=s(482),r=s(9108),i=s(2563),n=s.n(i),l=s(8300),d={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>l[e]);s.d(t,d);let o=["",{children:["dashboard",{children:["JoinApplicationSetting",{children:["Resignation",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,926)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\dashboard\\JoinApplicationSetting\\Resignation\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,3227)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\dashboard\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,627)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\dashboard\\JoinApplicationSetting\\Resignation\\page.tsx"],h="/dashboard/JoinApplicationSetting/Resignation/page",u={require:s,loadChunk:()=>Promise.resolve()},g=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/dashboard/JoinApplicationSetting/Resignation/page",pathname:"/dashboard/JoinApplicationSetting/Resignation",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},3910:(e,t,s)=>{Promise.resolve().then(s.bind(s,9136))},9136:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var a=s(5344);s(3729);var r=s(289);let i=({name:e,schoolNumber:t,building:s,roomNumber:i,exitDate:n,hasKey:l,submissionDate:d,depositRefund:o,isChecked:c,setIsChecked:h,onStudentClick:u})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("tr",{className:`table rounded-5 w-[1200px] H4-caption h-38 text-nowrap align-middle cursor-pointer ${c?"bg-gray-grayscale20":"hover:bg-gray-grayscale10 active:bg-gray-grayscale20"}`,onClick:()=>u(t),children:[a.jsx("td",{className:"w-[10%]",children:e}),a.jsx("td",{className:"w-[12%]",children:t}),a.jsx("td",{className:"w-[17%]",children:s}),a.jsx("td",{className:"w-[9%]",children:i}),a.jsx("td",{className:"w-[12%]",children:n}),a.jsx("td",{className:"w-[10%]",children:l?"O":"X"}),a.jsx("td",{className:"w-[12%]",children:d}),a.jsx("td",{className:"w-[10%]",children:o?"지급":"미지급"}),a.jsx("td",{className:"w-[8%]",children:a.jsx("div",{className:"flex justify-center items-center",children:a.jsx(r.Z,{isChecked:c,setIsChecked:h})})})]}),a.jsx("tr",{className:"h-14"})]});var n=s(9403);let l=({list:e,onStudentClick:t,setIsChecked:s,isAllChecked:l,setIsAllChecked:d})=>(0,a.jsxs)("table",{className:"text-nowrap text-center text-gray-grayscale50",children:[(0,a.jsxs)("thead",{className:"table w-[1200px]",children:[(0,a.jsxs)("tr",{children:[a.jsx("th",{className:"H4 w-[10%]",children:"이 름"}),a.jsx("th",{className:"H4 w-[12%]",children:"학 번"}),a.jsx("th",{className:"H4 w-[17%]",children:"건 물"}),a.jsx("th",{className:"H4 w-[9%]",children:"호 실"}),a.jsx("th",{className:"H4 w-[12%]",children:"퇴실날짜"}),a.jsx("th",{className:"H4 w-[10%]",children:"열쇠 수령"}),a.jsx("th",{className:"H4 w-[12%]",children:"제출날짜"}),a.jsx("th",{className:"H4 w-[10%]",children:"보증금 환급"}),a.jsx("th",{className:`H4 w-[8%] ${e&&e.length>0?"visible":"invisible"}`,children:(0,a.jsxs)("div",{className:"flex items-center justify-center text-center w-full gap-6",children:["전 체",a.jsx(r.Z,{isChecked:l,setIsChecked:d})]})})]}),a.jsx("tr",{className:"h-15 border-b-1"})]}),e&&e.length>0?(0,a.jsxs)("tbody",{className:"block w-[1214px] h-677 overflow-y-auto scrollbar-table",children:[a.jsx("tr",{className:"h-15"}),e.map((e,r)=>a.jsx(i,{name:e.name,schoolNumber:e.schoolNumber,building:e.building,roomNumber:e.roomNumber,exitDate:e.exitDate,hasKey:e.hasKey,submissionDate:e.submissionDate,depositRefund:e.depositRefund,isChecked:e.isChecked,setIsChecked:s,onStudentClick:t},r))]}):a.jsx("tbody",{children:a.jsx(n.Z,{colspan:9})})]});var d=s(9583),o=s(3111),c=s(4846);let h=()=>(0,a.jsxs)("div",{className:"flex flex-col w-[1200px]",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-32",children:[a.jsx("h1",{className:"H0 text-gray-grayscale50 text-nowrap",children:"퇴사 확인서 제출 명단"}),(0,a.jsxs)("div",{className:"flex gap-38 items-end",children:[a.jsx(c.Z,{title:"제출 기간",startDate:void 0,endDate:void 0,setStartDate:function(e){throw Error("Function not implemented.")},setEndDate:function(e){throw Error("Function not implemented.")},handlePosting:function(){throw Error("Function not implemented.")}}),a.jsx(d.Z,{label:"삭제",disabled:!0,variant:"red"})]})]}),a.jsx(l,{list:[],onStudentClick:e=>e,setIsChecked:e=>e,isAllChecked:!1,setIsAllChecked:e=>e}),(0,a.jsxs)("div",{className:"mt-21 flex justify-end gap-14",children:[a.jsx(o.Z,{label:"지급불가",disabled:!0,variant:"blue"}),a.jsx(o.Z,{label:"지급하기",disabled:!0,variant:"red"})]})]})},9583:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(5344);s(3729);let r=({label:e,variant:t,disabled:s,selected:r=!1,...i})=>a.jsx("button",{...i,disabled:s,className:`H4 w-115 h-37 rounded-full text-white hover:hover-transition ${(()=>{switch(t){case"blue":return`${r?"bg-blue-blue50":"bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50"}`;case"green":return`${r?"bg-green-green40":"bg-green-green20 disabled:bg-green-green10 hover:bg-green-green30 active:bg-green-green40"}`;case"red":return`${r?"bg-red-red40":"bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40"}`;default:return""}})()}`,children:e})},3323:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(5344);s(3729);let r=({label:e,disabled:t,selected:s=!1,variant:r,...i})=>a.jsx("button",{...i,disabled:t,className:`H4 w-79 h-34 rounded-full text-white hover:hover-transition ${(e=>{switch(e){case"blue":return`${s?"bg-blue-blue50":"bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50"}`;case"red":return`${s?"bg-red-red40":"bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40"}`;default:return""}})(r)}`,children:e})},289:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var a=s(5344);s(3729);let r={src:"/_next/static/media/Checked.2a02f83f.png",height:40,width:39,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEU3e941eNg2eNg2edo2e942dtU0ddI2edo3eNk5gOaHhQcyAAAACXRSTlP+/dqx7UQiy4HaUf1QAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMUlEQVR4nB3FyQ3AQAjAQJtjCf03HAk/xmRcyQKH6GaLw+YbsL98s0L1i1Wg6h6CEj8a4AC53DY/oQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},i={src:"/_next/static/media/UnChecked.bea25168.png",height:39,width:39,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVERERMaXFVVVU/Pz9mZmZ/f39VVVV1Ch9XAAAAB3RSTlN1AAMEBQQGqDJaiQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACRJREFUeJxjYIADFiYmJiY2BgYGJkZGRkZm/AxWRiYmRhaEZgAKMwBG4KHziQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};var n=s(9410);let l=({isChecked:e,setIsChecked:t})=>a.jsx(n.default,{className:"cursor-pointer",src:e?r:i,alt:e?"Checked":"UnChecked",width:19.5,height:19.5,onClick:s=>{s.stopPropagation(),t(!e)}})},4846:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(5344);s(3729);var r=s(3323);let i=({title:e,startDate:t,endDate:s,setStartDate:i,setEndDate:n,handlePosting:l})=>(0,a.jsxs)("div",{className:"flex items-center h-52 rounded-8 bg-gray-grayscale10 px-21 justify-between",children:[a.jsx("h1",{className:"H4 text-gray-grayscale50 mr-15",children:e}),a.jsx("input",{value:t?t.toISOString().split("T")[0]:"",onChange:e=>{i(new Date(e.target.value))},type:"date",className:"w-133 h-34 rounded-8 bg-white outline-none px-8 box-border"}),a.jsx("h2",{className:"H4 text-gray-grayscale50 mx-14",children:"~"}),a.jsx("input",{value:s?s.toISOString().split("T")[0]:"",onChange:e=>{n(new Date(e.target.value))},type:"date",className:"w-133 h-34 rounded-8 bg-white outline-none px-8 box-border mr-13"}),a.jsx(r.Z,{onClick:l,label:"게시",disabled:void 0===t||void 0===s,selected:!1,variant:"blue"})]})},9403:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(5344);s(3729);let r=({colspan:e})=>a.jsx("tr",{children:a.jsx("td",{colSpan:e,className:"h-full",children:a.jsx("div",{className:"flex justify-center items-center h-693",children:a.jsx("h1",{className:"H1 text-gray-grayscale30",children:"리스트가 비었습니다."})})})})},926:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>r,default:()=>n});let a=(0,s(6843).createProxy)(String.raw`C:\Users\LeeBoHyun\Desktop\dormease-web\src\app\dashboard\JoinApplicationSetting\Resignation\page.tsx`),{__esModule:r,$$typeof:i}=a,n=a.default}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[456,332,999,356,552],()=>s(2381));module.exports=a})();