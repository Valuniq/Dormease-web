(()=>{var e={};e.id=772,e.ids=[772],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},1933:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>g,originalPathname:()=>c,pages:()=>d,routeModule:()=>u,tree:()=>o});var r=a(482),A=a(9108),s=a(2563),n=a.n(s),l=a(8300),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);a.d(t,i);let o=["",{children:["dashboard",{children:["StudentManagement",{children:["WithdrawalMemberManagement",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,4693)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\dashboard\\StudentManagement\\WithdrawalMemberManagement\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,3227)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\dashboard\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,627)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\dashboard\\StudentManagement\\WithdrawalMemberManagement\\page.tsx"],c="/dashboard/StudentManagement/WithdrawalMemberManagement/page",g={require:a,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:A.x.APP_PAGE,page:"/dashboard/StudentManagement/WithdrawalMemberManagement/page",pathname:"/dashboard/StudentManagement/WithdrawalMemberManagement",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},6310:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2583,23)),Promise.resolve().then(a.t.bind(a,6840,23)),Promise.resolve().then(a.t.bind(a,8771,23)),Promise.resolve().then(a.t.bind(a,3225,23)),Promise.resolve().then(a.t.bind(a,9295,23)),Promise.resolve().then(a.t.bind(a,3982,23))},9098:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,1900,23)),Promise.resolve().then(a.bind(a,3520)),Promise.resolve().then(a.bind(a,3156))},7358:(e,t,a)=>{Promise.resolve().then(a.bind(a,5209))},8951:(e,t,a)=>{Promise.resolve().then(a.bind(a,4355))},5209:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>x});var r=a(5344),A=a(7806),s=a(9241),n=a(4651);let l=()=>{let{data:e,error:t,size:a,setSize:r}=(0,n.ZP)((e,t)=>t&&0===t.information.dataList.length?null:`${A._}/api/v1/web/users/management/delete?page=${e+1}`,s.Z),l=e?e.reduce((e,t)=>e.concat(t.information.dataList),[]):[],i=!e&&!t||a>0&&e&&void 0===e[a-1];return{withdrawalData:l,error:t,isLoadingMore:i,size:a,setSize:r,isReachingEnd:e?.[0]?.information.dataList.length===0||e&&e[e.length-1]?.information.pageInfo.currentPage===e[e.length-1]?.information.pageInfo.totalPage||!1}},i=e=>{let{data:t,error:a,size:r,setSize:l}=(0,n.ZP)((t,a)=>a&&0===a.information.dataList.length?null:`${A._}/api/v1/web/users/management/delete/search?page=${t+1}&keyword=${e}`,s.Z),i=t?t.reduce((e,t)=>e.concat(t.information.dataList),[]):[],o=!t&&!a||r>0&&t&&void 0===t[r-1];return{withdrawalSearchData:i,error:a,isLoadingMore:o,size:r,setSize:l,isReachingEnd:t?.[0]?.information.dataList.length===0||t&&t[t.length-1]?.information.pageInfo.currentPage===t[t.length-1]?.information.pageInfo.totalPage||!1}};var o=a(1580),d=a(3729);let c=({id:e,name:t,studentNumber:a,bonusPoint:A,minusPoint:s,deletedAt:n})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("tr",{className:"table rounded-5 w-[1090px] H4-caption h-38 text-nowrap relative align-middle cursor-pointer",children:[r.jsx("td",{className:"w-[8%]",children:e}),r.jsx("td",{className:"w-[22%]",children:t}),r.jsx("td",{className:"w-[20%]",children:a}),r.jsx("td",{className:"w-[17%]",children:A}),r.jsx("td",{className:"w-[18%]",children:s}),r.jsx("td",{className:"w-[15%]",children:n})]}),r.jsx("tr",{className:"h-14"})]});var g=a(9403);let u=({list:e})=>(0,r.jsxs)("table",{className:"text-nowrap text-center text-gray-grayscale50",children:[(0,r.jsxs)("thead",{className:"table w-[1090px]",children:[(0,r.jsxs)("tr",{children:[r.jsx("th",{className:"H4 w-[8%]",children:"번 호"}),r.jsx("th",{className:"H4 w-[22%]",children:"이 름"}),r.jsx("th",{className:"H4 w-[20%]",children:"학 번"}),r.jsx("th",{className:"H4 w-[17%]",children:"상 점"}),r.jsx("th",{className:"H4 w-[18%]",children:"벌 점"}),r.jsx("th",{className:"H4 w-[15%]",children:"탈퇴 날짜"})]}),r.jsx("tr",{className:"h-15 border-b-1"})]}),e?(0,r.jsxs)("tbody",{className:"w-[1104px] block h-677 overflow-y-auto scrollbar-table",children:[r.jsx("tr",{className:"h-15"}),e.map(e=>r.jsx(c,{id:e.id,name:e.name,studentNumber:e.studentNumber,bonusPoint:e.bonusPoint,minusPoint:e.minusPoint,deletedAt:e.deletedAt},e.id))]}):r.jsx("tbody",{children:r.jsx(g.Z,{colspan:6})})]}),h=({list:e,input:t,setInput:a})=>(0,r.jsxs)("div",{className:"flex flex-col w-[1145px] relative",children:[(0,r.jsxs)("div",{className:"flex items-center mb-32",children:[r.jsx("div",{className:"flex justify-center w-[1090px]",children:r.jsx("h1",{className:"H0 text-gray-grayscale50 text-nowrap",children:"탈퇴 회원 관리"})}),e&&r.jsx("div",{className:"absolute right-0",children:r.jsx(o.Z,{input:t,setInput:a,placeholder:"이름 또는 학번"})})]}),r.jsx(u,{list:e})]});var m=a(3213);let x=()=>{let[e,t]=(0,d.useState)(""),{withdrawalData:a,error:A,isLoadingMore:s,size:n,setSize:o,isReachingEnd:c}=l(),{withdrawalSearchData:g,error:u,isLoadingMore:x,size:b,setSize:p,isReachingEnd:w}=i(e);if((0,d.useEffect)(()=>{e&&p(1)},[e,p]),A||u)return console.error("Error fetching withdrawal Member data:",A||u),r.jsx("div",{children:"Error loading data"});let M=e?g:a,v=e?x:s,E=e?w:c;return(0,r.jsxs)(m.Z,{isLoading:s||u,isReachingEnd:E,loadMore:()=>{e?p(b+1):o(n+1)},children:[r.jsx(h,{list:M,input:e,setInput:t}),v&&r.jsx(r.Fragment,{})]})}},1580:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(5344),A=a(9410);let s={src:"/_next/static/media/SearchIcon.fd87d628.png",height:20,width:20,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEW7u7vMzMzNzc3Ozs7MzMzLy8vLy8vOzs6cMFoWAAAACHRSTlMBlqENf1hlKKFJ7xkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAwSURBVHicJYpJCgBADMJi7fL/Hw8yOUiQwJQ0wAqIlQELitD3xTLbaTKrVuvyn7l6DrcAeLXaQ4sAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},n=({input:e,setInput:t,placeholder:a})=>(0,r.jsxs)("div",{className:`${e?"border-gray-grayscale50":"border-gray-grayscale30"} focus:border-gray-grayscale40 border-[1.5px] w-380 h-38 flex items-center rounded-5`,children:[r.jsx("input",{className:"outline-none H4-cation px-12 w-292 h-24  text-gray-grayscale50 placeholder:text-gray-grayscale30",placeholder:a,type:"text",value:e,onChange:e=>{t(e.target.value)}}),r.jsx(A.default,{src:s,width:18,height:18,className:"ml-auto mr-9 object-contain",alt:"SearchIcon"})]})},3156:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var r=a(5344);a(3729);var A=a(9410);let s=({label:e,menu:t,selected:a,...s})=>(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsxs)("button",{...s,className:`alert-cap flex items-center h-48 rounded-8 text-gray-grayscale-50 ${a?"w-222 bg-blue-blue15 mr-12":" w-240 bg-transparent hover:bg-gray-grayscale10 hover:hover-transition active:bg-gray-grayscale20"}`,children:[r.jsx(A.default,{className:"ml-19 mr-11",src:t,alt:"Menu",width:24,height:24}),e]}),r.jsx("div",{className:`hover-transition ${a?"w-6 h-48 rounded-8 bg-blue-blue30":"hidden"}`})]}),n=({label:e,selected:t=!1,...a})=>(0,r.jsxs)("button",{...a,className:`alert-cap flex items-center w-159 h-34 rounded-8 text-gray-grayscale-50 ${t?"bg-blue-blue15 mr-12":" bg-transparent hover:bg-gray-grayscale10 hover:hover-transition active:bg-gray-grayscale20"}`,children:[r.jsx("h1",{className:"px-15",children:"•"}),e]});var l=a(9935),i=a(6506),o=a(8428);let d=()=>{let e=(0,o.usePathname)(),t=e.split("/")[2];return r.jsx("div",{className:"flex flex-col items-start",children:l.j.map(a=>(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[r.jsx(i.default,{href:a.routes,className:"mb-10",children:r.jsx(s,{label:a.label,menu:a.icon,selected:t===a.routes.split("/")[2]})}),a.subMenu&&t===a.routes.split("/")[2]&&r.jsx(r.Fragment,{children:a.subMenu.map(t=>r.jsx(i.default,{href:t.routes,className:"mb-10",children:r.jsx(n,{selected:e===t.routes,label:t.label})},t.label))})]},a.label))})}},9403:(e,t,a)=>{"use strict";a.d(t,{Z:()=>A});var r=a(5344);a(3729);let A=({colspan:e})=>r.jsx("tr",{children:r.jsx("td",{colSpan:e,className:"h-full",children:r.jsx("div",{className:"flex justify-center items-center h-693",children:r.jsx("h1",{className:"H1 text-gray-grayscale30",children:"리스트가 비었습니다."})})})})},9935:(e,t,a)=>{"use strict";a.d(t,{j:()=>n,R:()=>r});let r="/dashboard/StudentManagement",A="/dashboard/JoinApplicationSetting",s="/dashboard/BuildingManagement",n=[{label:"학생 관리",routes:r,icon:{src:"/_next/static/media/StudentManagement.9f56c925.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUcHBwxMTEvLy8wMDAxMTEuLi4wMDAwMDALDyLQAAAACHRSTlMBSVwqZxQvdztAhVgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicTYvBDQAxDMIMIen+G59y/dQfJAvDQ/c/NUkV4Ej2GksemBPIGVprdP8bfQ6yAHHUzU7NAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},subMenu:[{label:"사생 관리",routes:r},{label:"상/벌점 관리",routes:`${r}/PointManagement`},{label:"앱 회원관리",routes:`${r}/AppMemberManagement`},{label:"블랙리스트",routes:`${r}/BlackList`},{label:"탈퇴회원관리",routes:`${r}/WithdrawalMemberManagement`}]},{label:"입/퇴사 관리",routes:A,icon:{src:"/_next/static/media/JoinAndResignationManagement.673d6a49.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUAAAAwMDAxMTEwMDBMaXEzMzMzMzMuLi4wMDAuLi6I1MkaAAAACnRSTlMBXBcvAEQfR04LbnspdQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUeJwdx7cRwEAMxMBzNN9/wxoqwgJBpCBATPo6C2wFzTs2umKnfpAHcWaHQuT3rHwdZADqnlebAgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},subMenu:[{label:"입사 신청 설정",routes:A},{label:"기준 설정",routes:`${A}/StandardSetting`},{label:"신청자 명단",routes:`${A}/Applicant`},{label:"입금 확인 명단",routes:`${A}/DepositConfirmation`},{label:"합격자 명단",routes:`${A}/PassMember`},{label:"환불 신청",routes:`${A}/Refund`},{label:"퇴사 확인서",routes:`${A}/Resignation`}]},{label:"건물 관리",routes:s,icon:{src:"/_next/static/media/BuildingManagement.68c09911.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUtLS0vLy8vLy8wMDAuLi4wMDAvLy8wMDD0pvsoAAAACHRSTlMBETBoIHxTRAoiS3AAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicTYu5EQAwDIP02NL+G+eSKlQUAHxQ2QGyUT1QS8gDessriFPfZlYA3/TeAxWcAJcaXj1qAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},subMenu:[{label:"건물 관리",routes:s},{label:"건물 설정",routes:`${s}/BuildingSettings`}]},{label:"일정 관리",routes:"/dashboard/ScheduleManagement",icon:{src:"/_next/static/media/ScheduleManagement.2bc05677.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUxMTEwMDA1NTUvLy8vLy8vLy8vLy8fGH9cAAAAB3RSTlMjLQY9S2B6NOCbyQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJw1xgEKgAAMw8Bk7fb/J4ugEI4ww9deezt4bXtCUQuEF/EfNkkWxmicBxW1AIv25ZdYAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{label:"공지 사항",routes:"/dashboard/Notice",icon:{src:"/_next/static/media/Notice.ef121e50.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUwMDBMaXExMTEwMDAwMDAvLy8rKyupU0ZrAAAAB3RSTlM9AE1fDC0d5etilAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC5JREFUeJwdickNwEAQg/Ax6b/klcMHJNC4ijlxFw45JFuJmG2Js9gHnO+ulJ8+ENYAdkgqB64AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},{label:"FAQ",routes:"/dashboard/FAQ",icon:{src:"/_next/static/media/FAQ.c4006e55.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEUwMDAwMDBMaXEwMDAvLy8xMTHA2KlCAAAABnRSTlM0VgASIAm15JNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nEXLsRHAQAzDMFKS91851V96gKTQhCBIqKdngTs3gMwANVvsj1//AA+gAG3fUYnnAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{label:"요청 사항",routes:"/dashboard/Request",icon:{src:"/_next/static/media/Request.7c7371f8.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUvLy8yMjIwMDAxMTEvLy9MaXEvLy8xMTGDhWq7AAAACHRSTlMUKDNaPABLfl3ENQ4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAySURBVHicFcbJCcBAEASx6ms2/4yNQQ8x2baGI0kxldqp1HfgP3D3CiFJyu4pCexn9gEYLQCwslrq3gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},{label:"식권 관리",routes:"/dashboard/",icon:{src:"/_next/static/media/MealTicketManagement.b72c83f1.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUaGhovLy8qKioxMTEvLy8zMzMxMTEvLy/UEl5uAAAACHRSTlMCJg5lQBxQO7fvdm4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAuSURBVHicRYu5DcBAEISYZ/f67/gkS7YDIgBsHpRCI6qRRgWfTQw42zW/+uJ3vxO0AItXhNMCAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{label:"설정",routes:"/dashboard/Setting",icon:{src:"/_next/static/media/Setting.12fa6de1.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEVMaXEvLy8wMDAvLy8xMTEuLi4vLy8xMTE8FvxSAAAACHRSTlMAFSpdTzYlTJC9wPcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicLYtBCgBBCMNirfr/Hw9bNqdACMAMH7LPC9UjTRfVe1ZE9kb+xPps5cv+ABgbAKrry8LrAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}]},7806:(e,t,a)=>{"use strict";a.d(t,{_:()=>r});let r="https://www.dormease-dev.kro.kr"},7152:(e,t,a)=>{"use strict";a.d(t,{L:()=>r,z:()=>A});let r="ACCESS_TOKEN",A="REFRESH_TOKEN"},3213:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(5344),A=a(3729);let s=({children:e,isLoading:t,isReachingEnd:a,loadMore:s})=>((0,A.useEffect)(()=>{let e=()=>{t||a||!(window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight-50)||s()};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[t,a,s]),r.jsx(r.Fragment,{children:e}))},4355:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var r=a(5344),A=a(6561);function s({children:e}){return r.jsx(A.Wh,{children:e})}},9241:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(3257),A=a(7152);let s=async(e,t={})=>{let a=r.Z.getToken(A.L);if(!a)throw Error("No access token found");let s={...t.headers,Authorization:`Bearer ${a}`,"Content-Type":"application/json"},n=await fetch(e,{...t,headers:s});if(!n.ok)throw 401===n.status&&(r.Z.removeToken(A.L),r.Z.removeToken(A.z),alert("세션이 만료되었습니다. 다시 로그인해 주세요.")),Error("Failed to fetch data");return n.json()}},3257:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});let r={saveToken:(e,t)=>{},getToken:e=>null,removeToken:e=>{}}},4693:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>s,__esModule:()=>A,default:()=>n});let r=(0,a(6843).createProxy)(String.raw`C:\Users\LeeBoHyun\Desktop\dormease-web\src\app\dashboard\StudentManagement\WithdrawalMemberManagement\page.tsx`),{__esModule:A,$$typeof:s}=r,n=r.default},3227:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>g});var r=a(5036);a(2);let A={src:"/_next/static/media/HeaderLogo.13e79d76.png",height:46,width:125,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAElBMVEU1eNg1eNc1eNc2edk1dtY3edgzoBzXAAAABnRSTlNqnXuwSy5YZIqAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHUlEQVR4nAXBAQEAAAzCoE19/8oHkukKSosBdwQeAm0AKfn26roAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3};var s=a(2813);let n=({label:e,...t})=>r.jsx("button",{...t,className:"H4 w-131 h-35 rounded-full text-gray-grayscale50 bg-gray-grayscale10 hover:bg-gray-grayscale20 hover:hover-transition active:bg-gray-grayscale30",children:e}),l=()=>(0,r.jsxs)("div",{className:"w-full h-102 bg-gray-grayscale5 flex items-center justify-between pl-96 pr-176",children:[r.jsx(s.default,{src:A,width:125,height:46,className:"object-contain",alt:"logo"}),r.jsx(n,{label:"로그아웃"})]}),i=(0,a(6843).createProxy)(String.raw`C:\Users\LeeBoHyun\Desktop\dormease-web\src\components\organisms\Navigation\Navigation.tsx`),{__esModule:o,$$typeof:d}=i,c=i.default;function g({children:e}){return(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"z-header mb-30 fixed top-0 w-full",children:r.jsx(l,{})}),(0,r.jsxs)("div",{className:"flex align-start ml-19 mt-132",children:[r.jsx("nav",{className:"mr-101 ",children:r.jsx(c,{})}),e]})]})}},627:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o,metadata:()=>i});var r=a(5036);a(5023);let A=(0,a(6843).createProxy)(String.raw`C:\Users\LeeBoHyun\Desktop\dormease-web\src\recoil\RecoilWrapper.tsx`),{__esModule:s,$$typeof:n}=A,l=A.default,i={title:"Create Next App",description:"Generated by create next app"};function o({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[r.jsx("head",{children:r.jsx("link",{rel:"stylesheet",href:"https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"})}),r.jsx("body",{children:r.jsx(l,{children:e})})]})}},3520:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});let r={src:"/_next/static/media/HeaderLogo.13e79d76.png",height:46,width:125,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAElBMVEU1eNg1eNc1eNc2edk1dtY3edgzoBzXAAAABnRSTlNqnXuwSy5YZIqAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHUlEQVR4nAXBAQEAAAzCoE19/8oHkukKSosBdwQeAm0AKfn26roAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},3881:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>A});var r=a(337);let A=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[456,332,999,356,731,651],()=>a(1933));module.exports=r})();