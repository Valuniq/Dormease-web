(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6029:(e,A,t)=>{"use strict";t.r(A),t.d(A,{GlobalError:()=>i.a,__next_app__:()=>g,originalPathname:()=>c,pages:()=>d,routeModule:()=>u,tree:()=>o});var a=t(482),r=t(9108),s=t(2563),i=t.n(s),n=t(8300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(A,l);let o=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,1136)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,627)),"C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\LeeBoHyun\\Desktop\\dormease-web\\src\\app\\page.tsx"],c="/page",g={require:t,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},6310:(e,A,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,6840,23)),Promise.resolve().then(t.t.bind(t,8771,23)),Promise.resolve().then(t.t.bind(t,3225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,3982,23))},8951:(e,A,t)=>{Promise.resolve().then(t.bind(t,4355))},2312:(e,A,t)=>{Promise.resolve().then(t.bind(t,2493))},2493:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>m});var a=t(5344),r=t(7806),s=t(7152),i=t(3257);let n=async({loginId:e,password:A})=>{let t=await fetch(`${r._}/api/v1/auth/sign-in`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({loginId:e,password:A})});if(!t.ok)throw Error("Failed");let a=await t.json();return i.Z.saveToken(s.L,a.information.accessToken),i.Z.saveToken(s.z,a.information.refreshToken),a};var l=t(3729);let o=({label:e,disabled:A,...t})=>a.jsx("button",{...t,disabled:A,className:"H1 w-405 h-71 rounded-full text-white bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 hover:hover-transition active:bg-blue-blue50",children:e}),d=({input:e,setInput:A,placeholder:t,type:r,...s})=>a.jsx("input",{...s,className:`${e?"border-gray-grayscale50":"border-gray-grayscale30"} H2  border-[1.5px]  outline-none focus:border-gray-grayscale30 px-21 w-414 h-59 rounded-20 text-gray-grayscale50 placeholder:text-gray-grayscale30`,placeholder:t,type:r,value:e,onChange:e=>{A(e.target.value)},required:!0}),c=({loginId:e,setLoginId:A,password:t,setPassword:r,handleLogin:s,loginBtnDisabled:i})=>(0,a.jsxs)("div",{className:"w-510 h-426 bg-white rounded-[12.35px] shadow-lg flex flex-col items-center justify-center",children:[a.jsx("h1",{className:"H1 text-gray-grayscale50 mb-31",children:"도미즈 관리자 로그인"}),(0,a.jsxs)("div",{children:[a.jsx("div",{className:"mb-19",children:a.jsx(d,{input:e,setInput:A,placeholder:"아이디",type:"text"})}),a.jsx("div",{className:"mb-61",children:a.jsx(d,{input:t,setInput:r,placeholder:"비밀번호",type:"password"})}),a.jsx(o,{onClick:()=>s({loginId:e,password:t}),label:"로그인",disabled:i})]})]});var g=t(9935),u=t(8890);let h={src:"/_next/static/media/LoginLogo.0bc2ec04.png",height:137,width:372,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAGFBMVEX///////////////////////////////8pK8DIAAAACHRSTlNpn7BLeYguWbSL0JsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAeSURBVHicBcGBAQAwDIIwULv/T17CrdrASYID+xh8Au4AMXgegrYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3};var b=t(9410),p=t(8428),x=t(6561);let m=()=>{let[e,A]=(0,l.useState)(""),[t,r]=(0,l.useState)(""),o=(0,p.useRouter)(),d=(0,x.Zl)(u.L),m=(0,x.Zl)(u.Y),M=async({loginId:e,password:A})=>{try{let t=await n({loginId:e,password:A});if(t){let e=t.information.accessToken,A=t.information.refreshToken;d(e),m(A),i.Z.saveToken(s.L,e),i.Z.saveToken(s.z,A),console.log("Access Token (Recoil):",e),console.log("Refresh Token (Recoil):",A),console.log("Access Token (LocalStorage):",i.Z.getToken(s.L)),console.log("Refresh Token (LocalStorage):",i.Z.getToken(s.z)),alert("로그인 성공"),o.push(g.R)}else alert("로그인 실패")}catch(e){console.error(e),alert("로그인 중 오류가 발생했습니다.")}};return(0,a.jsxs)("div",{style:{backgroundImage:"url(/_next/static/media/LoginBackgroundImg.38090d6f.png)",width:"100%",height:"100vh",backgroundSize:"cover",backgroundPosition:"center"},className:"overflow-y-hidden flex flex-col items-center justify-center",children:[a.jsx(b.default,{src:h,width:372,height:136.5,className:"object-cover mb-43",alt:"login logo"}),a.jsx(c,{loginId:e,setLoginId:A,password:t,setPassword:r,handleLogin:M,loginBtnDisabled:!e||!t})]})}},9935:(e,A,t)=>{"use strict";t.d(A,{j:()=>i,R:()=>a});let a="/dashboard/StudentManagement",r="/dashboard/JoinApplicationSetting",s="/dashboard/BuildingManagement",i=[{label:"학생 관리",routes:a,icon:{src:"/_next/static/media/StudentManagement.9f56c925.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUcHBwxMTEvLy8wMDAxMTEuLi4wMDAwMDALDyLQAAAACHRSTlMBSVwqZxQvdztAhVgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicTYvBDQAxDMIMIen+G59y/dQfJAvDQ/c/NUkV4Ej2GksemBPIGVprdP8bfQ6yAHHUzU7NAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},subMenu:[{label:"사생 관리",routes:a},{label:"상/벌점 관리",routes:`${a}/PointManagement`},{label:"앱 회원관리",routes:`${a}/AppMemberManagement`},{label:"블랙리스트",routes:`${a}/BlackList`},{label:"탈퇴회원관리",routes:`${a}/WithdrawalMemberManagement`}]},{label:"입/퇴사 관리",routes:r,icon:{src:"/_next/static/media/JoinAndResignationManagement.673d6a49.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUAAAAwMDAxMTEwMDBMaXEzMzMzMzMuLi4wMDAuLi6I1MkaAAAACnRSTlMBXBcvAEQfR04LbnspdQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUeJwdx7cRwEAMxMBzNN9/wxoqwgJBpCBATPo6C2wFzTs2umKnfpAHcWaHQuT3rHwdZADqnlebAgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},subMenu:[{label:"입사 신청 설정",routes:r},{label:"기준 설정",routes:`${r}/StandardSetting`},{label:"신청자 명단",routes:`${r}/Applicant`},{label:"입금 확인 명단",routes:`${r}/DepositConfirmation`},{label:"합격자 명단",routes:`${r}/PassMember`},{label:"환불 신청",routes:`${r}/Refund`},{label:"퇴사 확인서",routes:`${r}/Resignation`}]},{label:"건물 관리",routes:s,icon:{src:"/_next/static/media/BuildingManagement.68c09911.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUtLS0vLy8vLy8wMDAuLi4wMDAvLy8wMDD0pvsoAAAACHRSTlMBETBoIHxTRAoiS3AAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicTYu5EQAwDIP02NL+G+eSKlQUAHxQ2QGyUT1QS8gDessriFPfZlYA3/TeAxWcAJcaXj1qAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},subMenu:[{label:"건물 관리",routes:s},{label:"건물 설정",routes:`${s}/BuildingSettings`}]},{label:"일정 관리",routes:"/dashboard/ScheduleManagement",icon:{src:"/_next/static/media/ScheduleManagement.2bc05677.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUxMTEwMDA1NTUvLy8vLy8vLy8vLy8fGH9cAAAAB3RSTlMjLQY9S2B6NOCbyQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJw1xgEKgAAMw8Bk7fb/J4ugEI4ww9deezt4bXtCUQuEF/EfNkkWxmicBxW1AIv25ZdYAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{label:"공지 사항",routes:"/dashboard/Notice",icon:{src:"/_next/static/media/Notice.ef121e50.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUwMDBMaXExMTEwMDAwMDAvLy8rKyupU0ZrAAAAB3RSTlM9AE1fDC0d5etilAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC5JREFUeJwdickNwEAQg/Ax6b/klcMHJNC4ijlxFw45JFuJmG2Js9gHnO+ulJ8+ENYAdkgqB64AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},{label:"FAQ",routes:"/dashboard/FAQ",icon:{src:"/_next/static/media/FAQ.c4006e55.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEUwMDAwMDBMaXEwMDAvLy8xMTHA2KlCAAAABnRSTlM0VgASIAm15JNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nEXLsRHAQAzDMFKS91851V96gKTQhCBIqKdngTs3gMwANVvsj1//AA+gAG3fUYnnAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{label:"요청 사항",routes:"/dashboard/Request",icon:{src:"/_next/static/media/Request.7c7371f8.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUvLy8yMjIwMDAxMTEvLy9MaXEvLy8xMTGDhWq7AAAACHRSTlMUKDNaPABLfl3ENQ4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAySURBVHicFcbJCcBAEASx6ms2/4yNQQ8x2baGI0kxldqp1HfgP3D3CiFJyu4pCexn9gEYLQCwslrq3gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},{label:"식권 관리",routes:"/dashboard/",icon:{src:"/_next/static/media/MealTicketManagement.b72c83f1.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUaGhovLy8qKioxMTEvLy8zMzMxMTEvLy/UEl5uAAAACHRSTlMCJg5lQBxQO7fvdm4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAuSURBVHicRYu5DcBAEISYZ/f67/gkS7YDIgBsHpRCI6qRRgWfTQw42zW/+uJ3vxO0AItXhNMCAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{label:"설정",routes:"/dashboard/Setting",icon:{src:"/_next/static/media/Setting.12fa6de1.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEVMaXEvLy8wMDAvLy8xMTEuLi4vLy8xMTE8FvxSAAAACHRSTlMAFSpdTzYlTJC9wPcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicLYtBCgBBCMNirfr/Hw9bNqdACMAMH7LPC9UjTRfVe1ZE9kb+xPps5cv+ABgbAKrry8LrAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}]},7806:(e,A,t)=>{"use strict";t.d(A,{_:()=>a});let a="https://www.dormease-dev.kro.kr"},7152:(e,A,t)=>{"use strict";t.d(A,{L:()=>a,z:()=>r});let a="ACCESS_TOKEN",r="REFRESH_TOKEN"},4355:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>s});var a=t(5344),r=t(6561);function s({children:e}){return a.jsx(r.Wh,{children:e})}},8890:(e,A,t)=>{"use strict";t.d(A,{L:()=>r,Y:()=>s});var a=t(6561);let r=(0,a.cn)({key:"accessTokenState",default:null}),s=(0,a.cn)({key:"refreshTokenState",default:null})},3257:(e,A,t)=>{"use strict";t.d(A,{Z:()=>a});let a={saveToken:(e,A)=>{},getToken:e=>null,removeToken:e=>{}}},627:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>o,metadata:()=>l});var a=t(5036);t(5023);let r=(0,t(6843).createProxy)(String.raw`C:\Users\LeeBoHyun\Desktop\dormease-web\src\recoil\RecoilWrapper.tsx`),{__esModule:s,$$typeof:i}=r,n=r.default,l={title:"Create Next App",description:"Generated by create next app"};function o({children:e}){return(0,a.jsxs)("html",{lang:"en",children:[a.jsx("head",{children:a.jsx("link",{rel:"stylesheet",href:"https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"})}),a.jsx("body",{children:a.jsx(n,{children:e})})]})}},1136:(e,A,t)=>{"use strict";t.r(A),t.d(A,{$$typeof:()=>s,__esModule:()=>r,default:()=>i});let a=(0,t(6843).createProxy)(String.raw`C:\Users\LeeBoHyun\Desktop\dormease-web\src\app\page.tsx`),{__esModule:r,$$typeof:s}=a,i=a.default},3881:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>r});var a=t(337);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var A=require("../webpack-runtime.js");A.C(e);var t=e=>A(A.s=e),a=A.X(0,[456,332,999],()=>t(6029));module.exports=a})();