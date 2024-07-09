(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7618:function(e,A,t){Promise.resolve().then(t.bind(t,1302))},7907:function(e,A,t){"use strict";var n=t(5313);t.o(n,"usePathname")&&t.d(A,{usePathname:function(){return n.usePathname}}),t.o(n,"useRouter")&&t.d(A,{useRouter:function(){return n.useRouter}})},1302:function(e,A,t){"use strict";t.r(A),t.d(A,{default:function(){return w}});var n=t(7437),a=t(8640),r=t(9652),i=t(7871);let o=async e=>{let{loginId:A,password:t}=e,n=await fetch("".concat(a._,"/api/v1/auth/sign-in"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({loginId:A,password:t})});if(!n.ok)throw Error("Failed");let o=await n.json();return i.Z.saveToken(r.L,o.information.accessToken),i.Z.saveToken(r.z,o.information.refreshToken),o};var l=t(2265),c=e=>{let{label:A,disabled:t,...a}=e;return(0,n.jsx)("button",{...a,disabled:t,className:"H1 w-405 h-71 rounded-full text-white bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 hover:hover-transition active:bg-blue-blue50",children:A})},s=e=>{let{input:A,setInput:t,placeholder:a,type:r,...i}=e;return(0,n.jsx)("input",{...i,className:"".concat(A?"border-gray-grayscale50":"border-gray-grayscale30"," H2  border-[1.5px]  outline-none focus:border-gray-grayscale30 px-21 w-414 h-59 rounded-20 text-gray-grayscale50 placeholder:text-gray-grayscale30"),placeholder:a,type:r,value:A,onChange:e=>{t(e.target.value)},required:!0})},u=e=>{let{loginId:A,setLoginId:t,password:a,setPassword:r,handleLogin:i,loginBtnDisabled:o}=e;return(0,n.jsxs)("div",{className:"w-510 h-426 bg-white rounded-[12.35px] shadow-lg flex flex-col items-center justify-center",children:[(0,n.jsx)("h1",{className:"H1 text-gray-grayscale50 mb-31",children:"도미즈 관리자 로그인"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"mb-19",children:(0,n.jsx)(s,{input:A,setInput:t,placeholder:"아이디",type:"text"})}),(0,n.jsx)("div",{className:"mb-61",children:(0,n.jsx)(s,{input:a,setInput:r,placeholder:"비밀번호",type:"password"})}),(0,n.jsx)(c,{onClick:()=>i({loginId:A,password:a}),label:"로그인",disabled:o})]})]})},g=t(8269),d=t(2953),h={src:"/_next/static/media/LoginLogo.0bc2ec04.png",height:137,width:372,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAGFBMVEX///////////////////////////////8pK8DIAAAACHRSTlNpn7BLeYguWbSL0JsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAeSURBVHicBcGBAQAwDIIwULv/T17CrdrASYID+xh8Au4AMXgegrYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},b=t(703),M=t(7907),f=t(2153),w=()=>{let[e,A]=(0,l.useState)(""),[t,a]=(0,l.useState)(""),c=(0,M.useRouter)(),s=(0,f.Zl)(d.L),w=(0,f.Zl)(d.Y),m=async e=>{let{loginId:A,password:t}=e;try{let e=await o({loginId:A,password:t});if(e){let A=e.information.accessToken,t=e.information.refreshToken;s(A),w(t),i.Z.saveToken(r.L,A),i.Z.saveToken(r.z,t),console.log("Access Token (Recoil):",A),console.log("Refresh Token (Recoil):",t),console.log("Access Token (LocalStorage):",i.Z.getToken(r.L)),console.log("Refresh Token (LocalStorage):",i.Z.getToken(r.z)),alert("로그인 성공"),c.push(g.R)}else alert("로그인 실패")}catch(e){console.error(e),alert("로그인 중 오류가 발생했습니다.")}};return(0,n.jsxs)("div",{style:{backgroundImage:"url(".concat("/_next/static/media/LoginBackgroundImg.38090d6f.png",")"),width:"100%",height:"100vh",backgroundSize:"cover",backgroundPosition:"center"},className:"overflow-y-hidden flex flex-col items-center justify-center",children:[(0,n.jsx)(b.default,{src:h,width:372,height:136.5,className:"object-cover mb-43",alt:"login logo"}),(0,n.jsx)(u,{loginId:e,setLoginId:A,password:t,setPassword:a,handleLogin:m,loginBtnDisabled:!e||!t})]})}},8269:function(e,A,t){"use strict";t.d(A,{j:function(){return i},R:function(){return n}});let n="/dashboard/StudentManagement",a="/dashboard/JoinApplicationSetting",r="/dashboard/BuildingManagement",i=[{label:"학생 관리",routes:n,icon:{src:"/_next/static/media/StudentManagement.9f56c925.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUcHBwxMTEvLy8wMDAxMTEuLi4wMDAwMDALDyLQAAAACHRSTlMBSVwqZxQvdztAhVgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicTYvBDQAxDMIMIen+G59y/dQfJAvDQ/c/NUkV4Ej2GksemBPIGVprdP8bfQ6yAHHUzU7NAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},subMenu:[{label:"사생 관리",routes:n},{label:"상/벌점 관리",routes:"".concat(n,"/PointManagement")},{label:"앱 회원관리",routes:"".concat(n,"/AppMemberManagement")},{label:"블랙리스트",routes:"".concat(n,"/BlackList")},{label:"탈퇴회원관리",routes:"".concat(n,"/WithdrawalMemberManagement")}]},{label:"입/퇴사 관리",routes:a,icon:{src:"/_next/static/media/JoinAndResignationManagement.673d6a49.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUAAAAwMDAxMTEwMDBMaXEzMzMzMzMuLi4wMDAuLi6I1MkaAAAACnRSTlMBXBcvAEQfR04LbnspdQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUeJwdx7cRwEAMxMBzNN9/wxoqwgJBpCBATPo6C2wFzTs2umKnfpAHcWaHQuT3rHwdZADqnlebAgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},subMenu:[{label:"입사 신청 설정",routes:a},{label:"기준 설정",routes:"".concat(a,"/StandardSetting")},{label:"신청자 명단",routes:"".concat(a,"/Applicant")},{label:"입금 확인 명단",routes:"".concat(a,"/DepositConfirmation")},{label:"합격자 명단",routes:"".concat(a,"/PassMember")},{label:"환불 신청",routes:"".concat(a,"/Refund")},{label:"퇴사 확인서",routes:"".concat(a,"/Resignation")}]},{label:"건물 관리",routes:r,icon:{src:"/_next/static/media/BuildingManagement.68c09911.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUtLS0vLy8vLy8wMDAuLi4wMDAvLy8wMDD0pvsoAAAACHRSTlMBETBoIHxTRAoiS3AAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicTYu5EQAwDIP02NL+G+eSKlQUAHxQ2QGyUT1QS8gDessriFPfZlYA3/TeAxWcAJcaXj1qAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},subMenu:[{label:"건물 관리",routes:r},{label:"건물 설정",routes:"".concat(r,"/BuildingSettings")}]},{label:"일정 관리",routes:"/dashboard/ScheduleManagement",icon:{src:"/_next/static/media/ScheduleManagement.2bc05677.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUxMTEwMDA1NTUvLy8vLy8vLy8vLy8fGH9cAAAAB3RSTlMjLQY9S2B6NOCbyQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJw1xgEKgAAMw8Bk7fb/J4ugEI4ww9deezt4bXtCUQuEF/EfNkkWxmicBxW1AIv25ZdYAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{label:"공지 사항",routes:"/dashboard/Notice",icon:{src:"/_next/static/media/Notice.ef121e50.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUwMDBMaXExMTEwMDAwMDAvLy8rKyupU0ZrAAAAB3RSTlM9AE1fDC0d5etilAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC5JREFUeJwdickNwEAQg/Ax6b/klcMHJNC4ijlxFw45JFuJmG2Js9gHnO+ulJ8+ENYAdkgqB64AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},{label:"FAQ",routes:"/dashboard/FAQ",icon:{src:"/_next/static/media/FAQ.c4006e55.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEUwMDAwMDBMaXEwMDAvLy8xMTHA2KlCAAAABnRSTlM0VgASIAm15JNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nEXLsRHAQAzDMFKS91851V96gKTQhCBIqKdngTs3gMwANVvsj1//AA+gAG3fUYnnAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{label:"요청 사항",routes:"/dashboard/Request",icon:{src:"/_next/static/media/Request.7c7371f8.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUvLy8yMjIwMDAxMTEvLy9MaXEvLy8xMTGDhWq7AAAACHRSTlMUKDNaPABLfl3ENQ4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAySURBVHicFcbJCcBAEASx6ms2/4yNQQ8x2baGI0kxldqp1HfgP3D3CiFJyu4pCexn9gEYLQCwslrq3gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},{label:"식권 관리",routes:"/dashboard/",icon:{src:"/_next/static/media/MealTicketManagement.b72c83f1.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUaGhovLy8qKioxMTEvLy8zMzMxMTEvLy/UEl5uAAAACHRSTlMCJg5lQBxQO7fvdm4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAuSURBVHicRYu5DcBAEISYZ/f67/gkS7YDIgBsHpRCI6qRRgWfTQw42zW/+uJ3vxO0AItXhNMCAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{label:"설정",routes:"/dashboard/Setting",icon:{src:"/_next/static/media/Setting.12fa6de1.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEVMaXEvLy8wMDAvLy8xMTEuLi4vLy8xMTE8FvxSAAAACHRSTlMAFSpdTzYlTJC9wPcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicLYtBCgBBCMNirfr/Hw9bNqdACMAMH7LPC9UjTRfVe1ZE9kb+xPps5cv+ABgbAKrry8LrAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}]},8640:function(e,A,t){"use strict";t.d(A,{_:function(){return n}});let n="https://www.dormease-dev.kro.kr"},9652:function(e,A,t){"use strict";t.d(A,{L:function(){return n},z:function(){return a}});let n="ACCESS_TOKEN",a="REFRESH_TOKEN"},2953:function(e,A,t){"use strict";t.d(A,{L:function(){return a},Y:function(){return r}});var n=t(2153);let a=(0,n.cn)({key:"accessTokenState",default:null}),r=(0,n.cn)({key:"refreshTokenState",default:null})},7871:function(e,A){"use strict";A.Z={saveToken:(e,A)=>{localStorage.setItem(e,A)},getToken:e=>localStorage.getItem(e),removeToken:e=>{localStorage.removeItem(e)}}},5566:function(e){var A,t,n,a=e.exports={};function r(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function o(e){if(A===setTimeout)return setTimeout(e,0);if((A===r||!A)&&setTimeout)return A=setTimeout,setTimeout(e,0);try{return A(e,0)}catch(t){try{return A.call(null,e,0)}catch(t){return A.call(this,e,0)}}}!function(){try{A="function"==typeof setTimeout?setTimeout:r}catch(e){A=r}try{t="function"==typeof clearTimeout?clearTimeout:i}catch(e){t=i}}();var l=[],c=!1,s=-1;function u(){c&&n&&(c=!1,n.length?l=n.concat(l):s=-1,l.length&&g())}function g(){if(!c){var e=o(u);c=!0;for(var A=l.length;A;){for(n=l,l=[];++s<A;)n&&n[s].run();s=-1,A=l.length}n=null,c=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===i||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(A){try{return t.call(null,e)}catch(A){return t.call(this,e)}}}(e)}}function d(e,A){this.fun=e,this.array=A}function h(){}a.nextTick=function(e){var A=Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)A[t-1]=arguments[t];l.push(new d(e,A)),1!==l.length||c||o(g)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},function(e){e.O(0,[691,703,971,69,744],function(){return e(e.s=7618)}),_N_E=e.O()}]);