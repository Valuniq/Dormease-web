(()=>{var e={};e.id=876,e.ids=[876],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4523:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var r=t(482),a=t(9108),n=t(2563),i=t.n(n),l=t(8300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(s,o);let c=["",{children:["dashboard",{children:["Request",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5462)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\dashboard\\Request\\[id]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,3227)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\dashboard\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,627)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\dashboard\\Request\\[id]\\page.tsx"],u="/dashboard/Request/[id]/page",x={require:t,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/Request/[id]/page",pathname:"/dashboard/Request/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5123:(e,s,t)=>{Promise.resolve().then(t.bind(t,1515))},1515:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var r=t(5344),a=t(3111),n=t(9153),i=t(3729);async function l(e){return{id:e,title:"Example Title",name:"John Doe",date:"2023-01-01",content:"This is a sample content.",isVisited:!0,isPublic:!1,status:"검토중"}}let o=({id:e})=>{let[s,t]=(0,i.useState)(null);return((0,i.useEffect)(()=>{(async function(){t(await l(e))})()},[e]),s)?(0,r.jsxs)("div",{className:"flex flex-col w-[1200px]",children:[r.jsx("h1",{className:"text-left H0 text-gray-grayscale50 text-nowrap",children:"요청사항"}),r.jsx("hr",{className:"text-gray-grayscale50 mt-25"}),r.jsx("h4",{className:"pl-12 pt-21 pb-17 H4 text-gray-grayscale50",children:s.title}),r.jsx("hr",{className:"text-gray-grayscale30"}),(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center text-gray-grayscale50",children:[r.jsx("h5",{className:"pl-12 pr-39 pt-13 pb-13 H4",children:"작성자"}),r.jsx("h5",{className:"H4-caption",children:s.name})]}),(0,r.jsxs)("div",{className:"flex items-center caption2 text-gray-grayscale40",children:[r.jsx("h6",{className:"pr-19",children:"작성일"}),r.jsx("h6",{children:s.date})]})]}),r.jsx("hr",{className:"text-gray-grayscale30 mb-23"}),r.jsx("div",{className:"w-full h-450 overflow-auto scrollbar-table border border-gray-grayscale30 rounded-8 px-17 py-16",children:s.content}),r.jsx("hr",{className:"text-gray-grayscale30 my-23"}),(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx("h4",{className:"H4 text-gray-grayscale50 pl-12 mr-32",children:"부재 시 방문동의 여부"}),r.jsx("h3",{className:`H3 w-155 ${s.isVisited?"text-blue-blue30":"text-red-red20"}`,children:s.isVisited?"동의":"비동의"}),r.jsx("h4",{className:"H4 text-gray-grayscale50 mr-32",children:"공개 여부"}),r.jsx("h3",{className:`H3 ${s.isPublic?"text-blue-blue30":"text-red-red20"}`,children:s.isPublic?"동의":"비동의"})]}),(0,r.jsxs)("div",{className:"flex justify-center gap-181 mt-24 mb-45",children:[r.jsx(n.Z,{isOn:"검토중"===s.status,setIsOn:function(e){throw Error("Function not implemented.")},label:"검토중"}),r.jsx(n.Z,{isOn:"진행중"===s.status,setIsOn:function(e){throw Error("Function not implemented.")},label:"진행중"}),r.jsx(n.Z,{isOn:"완료됨"===s.status,setIsOn:function(e){throw Error("Function not implemented.")},label:"완료됨"})]}),(0,r.jsxs)("div",{className:"flex justify-center gap-24",children:[r.jsx(a.Z,{label:"등록",disabled:!0,variant:"blue"}),r.jsx(a.Z,{label:"삭제",disabled:!1,variant:"red"})]})]}):r.jsx("div",{children:"Loading..."})}},9153:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});var r=t(5344);t(3729);let a=({isOn:e,setIsOn:s,label:t})=>(0,r.jsxs)("div",{className:"flex items-center",onClick:()=>s(!e),children:[r.jsx("div",{className:`flex justify-center items-center w-21 h-21 rounded-full border-2 cursor-pointer ${e?"border-gray-grayscale50":"border-gray-grayscale30"}`,children:r.jsx("div",{className:`${e&&"bg-blue-blue30 w-11 h-11 rounded-full"}`})}),r.jsx("p",{className:"pl-8 H4 text-gray-grayscale50",children:t})]})},5462:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>d,generateStaticParams:()=>c});var r=t(5036),a=t(2);let n=(0,t(6843).createProxy)(String.raw`C:\Users\LeeBoHyun\Desktop\dormease-web\src\app\dashboard\Request\[id]\ClientComponent.tsx`),{__esModule:i,$$typeof:l}=n,o=n.default;async function c(){return["1","2","3"].map(e=>({id:e}))}let d=({params:e})=>r.jsx(a.Suspense,{fallback:r.jsx("div",{children:"Loading..."}),children:r.jsx(o,{id:e.id})})}};var s=require("../../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[456,332,999,356,552],()=>t(4523));module.exports=r})();