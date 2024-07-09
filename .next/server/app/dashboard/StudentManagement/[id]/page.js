(()=>{var e={};e.id=778,e.ids=[778],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},865:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a,n=r(6413);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}let i=function(e){return n.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none"},e),a||(a=n.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:1.5,d:"M1 8h14M8 1v14"})))}},8187:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d});var a=r(482),n=r(9108),s=r(2563),i=r.n(s),l=r(8300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let d=["",{children:["dashboard",{children:["StudentManagement",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,6088)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\dashboard\\StudentManagement\\[id]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,3227)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\dashboard\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,627)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\dashboard\\StudentManagement\\[id]\\page.tsx"],u="/dashboard/StudentManagement/[id]/page",m={require:r,loadChunk:()=>Promise.resolve()},x=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/dashboard/StudentManagement/[id]/page",pathname:"/dashboard/StudentManagement/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3266:(e,t,r)=>{Promise.resolve().then(r.bind(r,5436))},5436:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var a=r(5344),n=r(3729),s=r(3323),i=r(6420),l=r(3111),o=r(865);let d=({label:e,...t})=>(0,a.jsxs)("button",{...t,className:"H4 flex items-center w-130 h-31 rounded-8 bg-gray-grayscale20 text-gray-grayscale50 hover:text-white hover:bg-gray-grayscale40 hover:hover-transition active:text-white active:bg-gray-grayscale50",children:[a.jsx(o.Z,{className:"ml-9 mr-6"}),e]});var c=r(8558);async function u(e){return{id:e,name:"John Doe",studentId:"S123456",major:"Computer Science",grade:3,academicStatus:"Active",gender:"Male",phoneNumber:"010-1234-5678",residence:"Seoul",certifiedFile:new File(["file content"],"certifiedFile.pdf",{type:"application/pdf"}),prioritySelection:new File(["file content"],"prioritySelection.pdf",{type:"application/pdf"}),meals:3,isSmoking:!1,dormitoryPayment:!0,hasKey:!0,personalInfoConsent:!0,thirdPartyConsent:!1,bankName:"Bank of Korea",accountNumber:"123-456-7890",emergencyContact:"010-9876-5432",emergencyRelation:"Father",building:"Building A",roomNumber:"101",bedNumber:"1",period:"2023-01-01 to 2023-12-31",isRoommateApplied:!0,roommateInformation:"Roommate Info"}}let m=({id:e})=>{let[t,r]=(0,n.useState)(null);return((0,n.useEffect)(()=>{(async function(){r(await u(e))})()},[e]),t)?(0,a.jsxs)("div",{className:"flex flex-col relative w-[1200px]",children:[a.jsx("h3",{className:"H3 text-gray-grayscale50 text-center mb-6",children:"개인정보"}),a.jsx("div",{className:"absolute right-0 -top-8",children:a.jsx(s.Z,{label:"수정",disabled:!1,selected:!1,variant:"blue"})}),(0,a.jsxs)("div",{className:"flex border-t-1 border-t-gray-grayscale50 pt-31 px-46 h-590",children:[(0,a.jsxs)("div",{className:"flex-1 flex flex-col pr-170",children:[a.jsx(i.Z,{label:"이름",text:t.name,value:t.name}),a.jsx(i.Z,{label:"학번",text:t.studentId,value:t.studentId}),a.jsx(i.Z,{label:"학과",text:t.major,value:t.major}),a.jsx(i.Z,{label:"학년",text:`${t.grade}학년`,value:t.grade}),a.jsx(i.Z,{label:"학적",text:t.academicStatus,value:t.academicStatus}),a.jsx(i.Z,{label:"성별",text:t.gender,value:t.gender}),a.jsx(i.Z,{label:"휴대전화",text:t.phoneNumber,value:t.phoneNumber}),a.jsx(i.Z,{label:"본거주지",text:t.residence,value:t.residence}),a.jsx(i.Z,{label:"등본",isEdit:!1,type:"file",text:"파일이름",value:null}),a.jsx(i.Z,{label:"우선선발",isEdit:!1,type:"file",text:"파일이름",value:null}),a.jsx(i.Z,{label:"식수",text:`${t.meals}식`,value:t.meals})]}),(0,a.jsxs)("div",{className:"flex-1 flex flex-col",children:[a.jsx(i.Z,{right:!1,label:"흡연여부",text:t.isSmoking?"O":"X",value:t.isSmoking}),a.jsx(i.Z,{right:!1,isEdit:!1,type:"checkbox",label:"생활관비 납부",text:t.dormitoryPayment?"O":"X",value:t.dormitoryPayment,setIsChecked:function(e){throw Error("Function not implemented.")}}),a.jsx(i.Z,{right:!1,label:"열쇠 수령 여부",isEdit:!1,type:"checkbox",text:t.hasKey?"수령":"미수령",value:t.hasKey,setIsChecked:function(e){throw Error("Function not implemented.")}}),a.jsx(i.Z,{right:!1,label:"상점",text:1,value:1}),a.jsx(i.Z,{right:!1,label:"벌점",text:1,value:1}),a.jsx(i.Z,{right:!1,label:"개인정보 동의",text:t.personalInfoConsent?"O":"X",value:t.personalInfoConsent}),a.jsx(i.Z,{right:!1,label:"제3자제공 동의",text:t.thirdPartyConsent?"O":"X",value:t.thirdPartyConsent}),a.jsx(i.Z,{right:!1,isEdit:!1,type:"string",label:"은행명",text:t.bankName,value:t.bankName,input:t.bankName,setInput:function(e){throw Error("Function not implemented.")}}),a.jsx(i.Z,{right:!1,isEdit:!1,type:"string",label:"계좌번호",text:t.accountNumber,value:t.accountNumber,input:t.accountNumber,setInput:function(e){throw Error("Function not implemented.")}}),a.jsx(i.Z,{right:!1,isEdit:!1,type:"string",label:"비상연락처",text:t.emergencyContact,value:t.emergencyContact,input:t.emergencyContact,setInput:function(e){throw Error("Function not implemented.")}}),a.jsx(i.Z,{right:!1,isEdit:!1,type:"string",label:"비상연락처 관계",text:t.emergencyRelation,value:t.emergencyRelation,input:t.emergencyRelation,setInput:function(e){throw Error("Function not implemented.")}})]})]}),(0,a.jsxs)("div",{className:"flex flex-col h-213 mt-29 pt-12 bg-gray-grayscale5",children:[a.jsx("h3",{className:"H3 text-gray-grayscale50 text-center mb-6 border-b-1 border-b-gray-grayscale50 pb-8",children:"기숙사 정보"}),(0,a.jsxs)("div",{className:"flex h-136",children:[(0,a.jsxs)("div",{className:"flex-1 flex flex-col pr-170 pl-46",children:[a.jsx(i.Z,{isEdit:!1,type:"building",isBuilding:!1,list:["명덕관(4인실)","명덕관(2인실)","명덕관(3인실)","명덕관(1인실)"],select:"명덕관(4인실)",setSelect:function(e){throw Error("Function not implemented.")},label:"건물",text:t.building,value:t.building}),a.jsx(i.Z,{isEdit:!1,type:"roomNumber",input:t.roomNumber,setInput:function(e){throw Error("Function not implemented.")},label:"호실",text:`${t.roomNumber}호`,value:t.roomNumber}),a.jsx(i.Z,{isEdit:!1,type:"bedNumber",input:t.bedNumber,setInput:function(e){throw Error("Function not implemented.")},label:"침대번호",text:`${t.bedNumber}번`,value:t.bedNumber})]}),(0,a.jsxs)("div",{className:"flex-1 flex flex-col pr-46",children:[a.jsx(i.Z,{label:"거주기간",text:t.period,value:t.period}),a.jsx(i.Z,{label:"룸메이트 신청",text:t.isRoommateApplied?"O":"X",value:t.isRoommateApplied}),a.jsx(i.Z,{label:"인원 정보",text:t.roommateInformation,value:t.roommateInformation})]})]})]}),a.jsx("div",{className:"relative mt-16",children:(0,a.jsxs)("div",{className:"flex gap-13 absolute right-0 -top-8",children:[a.jsx(d,{label:"블랙리스트"}),a.jsx(c.Z,{label:"퇴사처리"})]})}),a.jsx("div",{className:"flex justify-center mt-9",children:a.jsx(l.Z,{label:"수정완료",disabled:!1,variant:"blue"})})]}):a.jsx("div",{children:"Loading..."})}},8558:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(5344);r(3729);let n=({label:e,...t})=>a.jsx("button",{...t,className:"H4 w-118 h-31 rounded-8 text-white bg-red-red20 hover:bg-red-red30 hover:hover-transition active:bg-red-red40",children:e})},6088:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,generateStaticParams:()=>d});var a=r(5036),n=r(2);let s=(0,r(6843).createProxy)(String.raw`C:\Users\LeeBoHyun\Desktop\dormease-web\src\app\dashboard\StudentManagement\[id]\ClientComponent.tsx`),{__esModule:i,$$typeof:l}=s,o=s.default;async function d(){return["1","2","3"].map(e=>({id:e}))}let c=({params:e})=>a.jsx(n.Suspense,{fallback:a.jsx("div",{children:"Loading..."}),children:a.jsx(o,{id:e.id})})}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[456,332,999,356,552,420],()=>r(8187));module.exports=a})();