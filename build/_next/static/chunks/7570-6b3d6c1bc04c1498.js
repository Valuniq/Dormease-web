(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7570],{47907:function(e,t,A){"use strict";var r=A(15313);A.o(r,"usePathname")&&A.d(t,{usePathname:function(){return r.usePathname}}),A.o(r,"useRouter")&&A.d(t,{useRouter:function(){return r.useRouter}})},46426:function(e,t){"use strict";t.J=void 0,t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};let{key:t="recoil-persist",storage:A=localStorage,converter:r=JSON}=e,n=(e,t,A,r)=>{r?delete t[A]:t[A]=e,o(t)},a=()=>{let e=A.getItem(t);return null==e?{}:"string"==typeof e?i(e):"function"==typeof e.then?e.then(i):{}},i=e=>{if(void 0===e)return{};try{return r.parse(e)}catch(e){return console.error(e),{}}},o=e=>{try{"function"==typeof A.mergeItem?A.mergeItem(t,r.stringify(e)):A.setItem(t,r.stringify(e))}catch(e){console.error(e)}};return{persistAtom:({onSet:e,node:t,trigger:A,setSelf:r})=>{if("get"===A){let e=a();"function"==typeof e.then&&e.then(e=>{e.hasOwnProperty(t.key)&&r(e[t.key])}),e.hasOwnProperty(t.key)&&r(e[t.key])}e(async(e,A,r)=>{let i=a();"function"==typeof i.then?i.then(A=>n(e,A,t.key,r)):n(e,i,t.key,r)})}}}},9266:function(e,t,A){"use strict";A.d(t,{_:function(){return o},z:function(){return i}});var r=A(58640),n=A(89652),a=A(77871);let i=async e=>{let{loginId:t,password:A}=e,i=await fetch("".concat(r._,"/api/v1/auth/sign-in"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({loginId:t,password:A})});if(!i.ok)throw Error("Failed");let o=await i.json();return a.Z.saveToken(n.L,o.information.accessToken),a.Z.saveToken(n.z,o.information.refreshToken),o},o=async e=>{try{let t=await fetch("".concat(r._,"/api/v1/auth/reissue?refreshToken=").concat(encodeURIComponent(e)),{method:"GET"});if(console.log("reissueToken 응답 상태:",t.status),!t.ok){let e=await t.json();throw console.error("reissueToken 에러 응답:",e),Error("Token reissue failed")}let A=await t.json();if(console.log("reissueToken 성공 응답:",A),A.check&&A.information&&A.information.accessToken)return a.Z.saveToken(n.L,A.information.accessToken),A.information.accessToken;return console.error("reissueToken 응답에 유효한 액세스 토큰이 없습니다:",A),null}catch(e){return console.error("reissueToken 함수 에러:",e),null}}},4550:function(e,t,A){"use strict";A.d(t,{Fp:function(){return u},NE:function(){return c},V2:function(){return o},Zt:function(){return l},bq:function(){return s}});var r=A(58640),n=A(94817),a=A(75518),i=A(81252);let o=()=>{var e,t,A;let{data:i,error:o,size:s,setSize:c,mutate:l}=(0,n.ZP)((e,t)=>t&&0===t.information.dataList.length?null:"".concat(r._,"/api/v1/web/notifications/ANNOUNCEMENT?page=").concat(e+1),a.Z),u=i?i.reduce((e,t)=>e.concat(t.information.dataList),[]):[],d=!i&&!o||s>0&&i&&void 0===i[s-1];return{notificationsData:u,error:o,isLoadingMore:d,size:s,setSize:c,isReachingEnd:(null==i?void 0:null===(e=i[0])||void 0===e?void 0:e.information.dataList.length)===0||i&&(null===(t=i[i.length-1])||void 0===t?void 0:t.information.pageInfo.currentPage)===(null===(A=i[i.length-1])||void 0===A?void 0:A.information.pageInfo.totalPage)||!1,mutate:l}},s=async e=>await (0,a.Z)("".concat(r._,"/api/v1/web/notifications"),{method:"POST",body:e}),c=e=>{let{data:t,error:A}=(0,i.ZP)(e?"".concat(r._,"/api/v1/web/notifications/notification/").concat(e):null,a.Z);return{data:t,error:A,isLoading:!A&&!t}},l=async e=>await (0,a.Z)("".concat(r._,"/api/v1/web/notifications/notification/").concat(e),{method:"DELETE"}),u=async e=>await (0,a.Z)("".concat(r._,"/api/v1/web/notifications"),{method:"PATCH",body:e})},9088:function(e,t,A){"use strict";var r=A(57437);t.Z=e=>{let{label:t,onClick:A,hoverColor:n,isColor:a,disabled:i}=e,{btnHoverColor:o}=(e=>{switch(e){case"blue":default:return{btnHoverColor:"hover:bg-blue-blue30"};case"gray":return{btnHoverColor:"hover:bg-gray-grayscale20"};case"red":return{btnHoverColor:"hover:bg-red-red20"};case"green":return{btnHoverColor:"hover:bg-green-green20"}}})(n);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{onClick:A,disabled:i,className:"mr-16 w-86 h-32 rounded-20 ".concat(o," hover-transition ").concat(a&&"bg-blue-blue30"),children:"gray"===n?(0,r.jsx)("h1",{className:"H4 text-gray-grayscale40",children:t}):(0,r.jsx)("h1",{className:"H4 text-gray-grayscale40 hover:text-white ".concat(a&&"text-white"),children:t})})})}},48871:function(e,t,A){"use strict";var r=A(57437);A(2265),t.Z=e=>{let{label:t,disabled:A,variant:n,selected:a=!1,long:i,...o}=e;return(0,r.jsx)("button",{...o,disabled:A,className:"min-w-133 h-42 rounded-8 hover:hover-transition ".concat((()=>{switch(n){case"blue":return"Btn-cap shadow2 text-white ".concat(a?"bg-blue-blue50":"bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50");case"green":return"Btn-cap shadow2 text-white ".concat(a?"bg-green-green40":"bg-green-green20 disabled:bg-green-green10 hover:bg-green-green30 active:bg-green-green40");case"red":return"Btn-cap shadow2 text-white ".concat(a?"bg-red-red40":"bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40");case"gray":return"H4 text-gray-grayscale50 ".concat(A?"disabled:text-gray-grayscale40 disabled:bg-transparent":a?"bg-gray-grayscale30":"bg-gray-grayscale10 hover:bg-gray-grayscale20 active:bg-gray-grayscale30");case"whiteblue":return"Btn-cap shadow2 ".concat(a?"bg-blue-blue30 border-blue-blue50 text-white":"text-blue-blue30 border-[1.5px] bg-white border-blue-blue30 disabled:text-blue-blue20 disabled:bg-white disabled:border-blue-blue20 hover:bg-blue-blue20 hover:border-blue-blue30 hover:text-blue-blue30 active:bg-blue-blue30 active:border-blue-blue50 active:text-white");case"white":return"".concat(A?"H4 disabled:text-gray-grayscale20 disabled:bg-transparent":a?"H4 text-gray-grayscale50 bg-gray-grayscale30":"H4 text-gray-grayscale40 hover:bg-gray-grayscale10 hover:text-gray-grayscale50 active:bg-gray-grayscale30");default:return""}})()," ").concat(i&&"min-w-full whitespace-nowrap px-10"),children:t})}},26066:function(e,t,A){"use strict";var r=A(57437),n=A(20703),a=A(95343),i=A(42866);A(2265),t.Z=e=>{let{bgColor:t,onCancel:A}=e;return(0,r.jsxs)("div",{className:"".concat(t||"bg-blue-blue30"," w-full h-39  flex justify-between pl-15 rounded-t-8"),children:[(0,r.jsx)(n.default,{src:a.Z,alt:"PromptLogo",className:"object-contain",width:39,height:11.65}),(0,r.jsx)("button",{className:"hover:bg-red-red30 ".concat(t||"bg-blue-blue30"," w-39 h-39 flex items-center justify-center rounded-tr-8 hover-transition"),onClick:A,children:(0,r.jsx)(n.default,{src:i.Z,alt:"PromptOut",className:"object-contain",width:10,height:10})})]})}},79517:function(e,t,A){"use strict";var r=A(57437),n=A(2265),a=A(54887);t.Z=e=>{let{children:t,isOpen:A}=e;return(0,n.useEffect)(()=>(A?window.document.body.style.overflow="hidden":window.document.body.style.overflow="auto",()=>{window.document.body.style.overflow="auto"}),[A]),(0,a.createPortal)((0,r.jsx)("div",{className:"fixed z-backdrop top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center",children:(0,r.jsx)("div",{className:"xl:scale-65 xxl:scale-80 lg:scale-65 md:scale-50 sm:scale-40",children:null!=t?t:null})}),document.body)}},91723:function(e,t,A){"use strict";var r=A(57437),n=A(20703),a=A(22992),i=A(9088),o=A(26066);t.Z=e=>{let{variant:t,label:A,onConfirm:s,onCancel:c,textLeft:l,textRight:u}=e,{bgHeader:d}=(e=>{switch(e){case"blue":default:return{bgHeader:"bg-blue-blue30"};case"red":return{bgHeader:"bg-red-red20"};case"green":return{bgHeader:"bg-green-green20"}}})(t);return(0,r.jsxs)("div",{className:"w-456 h-194 flex flex-col items-center rounded-8 shadow-xl bg-white pb-15",children:[(0,r.jsx)(o.Z,{bgColor:d,onCancel:c}),(0,r.jsx)(n.default,{src:a.Z,className:"mt-19 mb-16",width:22,height:19,alt:"PromptWarning"}),(0,r.jsx)("h1",{className:"alert-cap text-gray-grayscale50 text-center",children:A.split("\\n").map((e,t)=>(0,r.jsx)("p",{className:"leading-25",children:e},t))}),(0,r.jsxs)("div",{className:"ml-auto mt-auto",children:[(0,r.jsx)(i.Z,{label:l||"취소",onClick:c,hoverColor:t}),(0,r.jsx)(i.Z,{label:u||"확인",onClick:s,hoverColor:t})]})]})}},57482:function(e,t,A){"use strict";A.d(t,{E7:function(){return f},K1:function(){return M},Kr:function(){return C},LF:function(){return b},P7:function(){return m},Pi:function(){return g},Qf:function(){return B},Vb:function(){return y},_u:function(){return v},gb:function(){return p},jH:function(){return D},jc:function(){return T},lT:function(){return x},mV:function(){return U},rO:function(){return w},s5:function(){return E}});var r=A(49826),n=A(95195),a=A(82703),i=A(91453),o=A(54193),s=A(60811),c=A(49814),l=A(37720),u=A(39936);let d="/dashboard/students",g="/dashboard/joins",h="/dashboard/dorms",b="/dashboard/schedules",f="/dashboard/requests",w="/dashboard/requests/details",m="/dashboard/joins/applicants",p="/dashboard/joins/applicants/prev",E="/dashboard/joins/applicants/details",M="/dashboard/notices",y="/dashboard/notices/writings",v="/dashboard/notices/details",x="/dashboard/notices/edits",C="/dashboard/supports",T="/dashboard/supports/writings",U="/dashboard/supports/details",B="/dashboard/supports/edits",D=[{label:"메인 화면",routes:"/dashboard",icon:r.default},{label:"학생 관리",routes:d,icon:n.default,subMenu:[{label:"사생 관리",routes:d},{label:"상/벌점 관리",routes:"".concat(d,"/points")},{label:"앱 회원관리",routes:"".concat(d,"/appMembers")},{label:"블랙리스트",routes:"".concat(d,"/blacklists")},{label:"탈퇴회원관리",routes:"".concat(d,"/withdrawals")}]},{label:"입/퇴사 관리",routes:g,icon:a.default,subMenu:[{label:"입사 신청 설정",routes:g},{label:"기준 설정",routes:"".concat(g,"/standards")},{label:"신청자 명단",routes:"".concat(g,"/applicants")},{label:"입금 확인 명단",routes:"".concat(g,"/deposits")},{label:"합격자 명단",routes:"".concat(g,"/passMembers")},{label:"환불 신청",routes:"".concat(g,"/refunds")},{label:"퇴사 확인서",routes:"".concat(g,"/resigns")}]},{label:"건물 관리",routes:h,icon:i.default,subMenu:[{label:"건물 관리",routes:h},{label:"건물 설정",routes:"".concat(h,"/settings")}]},{label:"일정 관리",routes:"/dashboard/schedules",icon:o.default},{label:"공지사항",routes:"/dashboard/notices",icon:s.default},{label:"FAQ",routes:"/dashboard/supports",icon:c.default},{label:"요청사항",routes:"/dashboard/requests",icon:l.default},{label:"계정 관리",routes:"/dashboard/accounts",icon:u.default}]},58640:function(e,t,A){"use strict";A.d(t,{_:function(){return r}});let r="https://www.dormease-dev.kro.kr"},89652:function(e,t,A){"use strict";A.d(t,{L:function(){return r},z:function(){return n}});let r="ACCESS_TOKEN",n="REFRESH_TOKEN"},28771:function(e,t,A){"use strict";var r=A(57437),n=A(2265),a=A(91723),i=A(79517);t.Z=(e,t,A,o)=>{let[s,c]=(0,n.useState)(!1),[l,u]=(0,n.useState)(null),d=async()=>{await t(l),c(!1)};return{showConfirmDialog:e=>{u(e),c(!0)},ConfirmDialogComponent:s?(0,r.jsx)(i.Z,{isOpen:!0,children:(0,r.jsx)(a.Z,{variant:A,label:e,onConfirm:d,onCancel:()=>{c(!1),o&&o()}})}):null}}},75518:function(e,t,A){"use strict";var r=A(77871),n=A(89652),a=A(9266);let i=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},A=r.Z.getToken(n.L),i=r.Z.getToken(n.z);if(!A)throw Error("No access token found");let s={...t.headers,Authorization:"Bearer ".concat(A)},c=await fetch(e,{...t,headers:s});if(401===c.status&&i){let A=await (0,a._)(i);if(A){r.Z.saveToken(n.L,A);let a={...s,Authorization:"Bearer ".concat(A)};c=await fetch(e,{...t,headers:a})}else o()}else 401===c.status&&o();if(!c.ok)throw Error("Failed to fetch data");return 204===c.status||201===c.status?{}:c.json()},o=()=>{r.Z.removeToken(n.L),r.Z.removeToken(n.z),alert("세션이 만료되었습니다. 다시 로그인해 주세요."),window.location.href="/"};t.Z=i},77871:function(e,t){"use strict";t.Z={saveToken:(e,t)=>{localStorage.setItem(e,t)},getToken:e=>localStorage.getItem(e),removeToken:e=>{localStorage.removeItem(e)}}},23886:function(){},76531:function(e,t){"use strict";t.Z={src:"/_next/static/media/FileClip.a171227f.png",height:18,width:18,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUrKyswMDAwMDAwMDAyMjIwMDAwMDAwMDAxMTEwMDBNCNPFAAAACnRSTlMBo5NDEXUqYFCIsp99NAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUeJwdy7kNADAMw0DKv/dfOHCqAwsCEKYCKs1DP917zxlZkBqXFVjvnmS2/FY6vw8apgC/gJfvYAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},95343:function(e,t){"use strict";t.Z={src:"/_next/static/media/PromptLogo.692c0d92.png",height:13,width:39,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEX///////////////////////////////////////8V2MxSAAAACnRSTlPlmoJy+43FvWlJljCSDAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACFJREFUeJwFwYEBADAIwrDCxOn/D5vAhDw+2qanBFbF9gEEtABSm4AZFAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},42866:function(e,t){"use strict";t.Z={src:"/_next/static/media/PromptOut.98b7927a.png",height:12,width:12,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEX///////////////9MaXH///91ewZhAAAABnRSTlNA0QMxAHpSp+N/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nEWLsQ0AMAyDcEz/f7lT0w0J4OCMHAhKQNIGGZvU+bBq47dfE2gAiTtnxw0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},22992:function(e,t){"use strict";t.Z={src:"/_next/static/media/PromptWarning.99ab5e8b.png",height:21,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAHlBMVEXXNTXXNTVMaXHWNTXXNTXXNTWqVVXUODjYNzfWNTXpH04wAAAACnRSTlN9jQA8LFoDEkykCmOTUQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJwdwYkNADAMAjE4SJ/9F65UW4ANaDEzwxLbiTdCOSdCNQmuXBoqXX33ARTdAKE2+uYqAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7}},10129:function(e,t){"use strict";t.Z={src:"/_next/static/media/Union.0c44f68a.png",height:19,width:18,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEWhq+SpxvCuzPenxe+mw+6nxO6ryfKryfSpx/Koxu+pxe2ow+ylwuypxvC21v/PohBGAAAADnRSTlMB/P6iZ4Xsts9KIzjfxMvmxn8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA4SURBVHicHcq3EcAwEMRA3Ds6zfdfroZEtAEAooLXaHs6U7LAP5msi2zJhi/wVm1gefa8q28ygR8gswD4L51vJwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},91453:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/BuildingManagement.68c09911.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUtLS0vLy8vLy8wMDAuLi4wMDAvLy8wMDD0pvsoAAAACHRSTlMBETBoIHxTRAoiS3AAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicTYu5EQAwDIP02NL+G+eSKlQUAHxQ2QGyUT1QS8gDessriFPfZlYA3/TeAxWcAJcaXj1qAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},49814:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/FAQ.c4006e55.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEUwMDAwMDBMaXEwMDAvLy8xMTHA2KlCAAAABnRSTlM0VgASIAm15JNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nEXLsRHAQAzDMFKS91851V96gKTQhCBIqKdngTs3gMwANVvsj1//AA+gAG3fUYnnAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},82703:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/JoinAndResignationManagement.673d6a49.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUAAAAwMDAxMTEwMDBMaXEzMzMzMzMuLi4wMDAuLi6I1MkaAAAACnRSTlMBXBcvAEQfR04LbnspdQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUeJwdx7cRwEAMxMBzNN9/wxoqwgJBpCBATPo6C2wFzTs2umKnfpAHcWaHQuT3rHwdZADqnlebAgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},49826:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/Main.907a5e33.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUvLy8vLy8wMDAyMjIuLi4wMDAxMTEvLy8wMDA7h9fyAAAACXRSTlM1LSNHB24+VkqkfbaIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nEWLsQ0AMAyDcOy0/f/iTlE2JIAUgEK6UV1RbZeAPFscLayaePYPFqgAnXH1DYoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},60811:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/Notice.ef121e50.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUwMDBMaXExMTEwMDAwMDAvLy8rKyupU0ZrAAAAB3RSTlM9AE1fDC0d5etilAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC5JREFUeJwdickNwEAQg/Ax6b/klcMHJNC4ijlxFw45JFuJmG2Js9gHnO+ulJ8+ENYAdkgqB64AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},37720:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/Request.7c7371f8.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUvLy8yMjIwMDAxMTEvLy9MaXEvLy8xMTGDhWq7AAAACHRSTlMUKDNaPABLfl3ENQ4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAySURBVHicFcbJCcBAEASx6ms2/4yNQQ8x2baGI0kxldqp1HfgP3D3CiFJyu4pCexn9gEYLQCwslrq3gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},54193:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/ScheduleManagement.2bc05677.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUxMTEwMDA1NTUvLy8vLy8vLy8vLy8fGH9cAAAAB3RSTlMjLQY9S2B6NOCbyQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJw1xgEKgAAMw8Bk7fb/J4ugEI4ww9deezt4bXtCUQuEF/EfNkkWxmicBxW1AIv25ZdYAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},39936:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/Setting.12fa6de1.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEVMaXEvLy8wMDAvLy8xMTEuLi4vLy8xMTE8FvxSAAAACHRSTlMAFSpdTzYlTJC9wPcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicLYtBCgBBCMNirfr/Hw9bNqdACMAMH7LPC9UjTRfVe1ZE9kb+xPps5cv+ABgbAKrry8LrAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},95195:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/StudentManagement.9f56c925.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUcHBwxMTEvLy8wMDAxMTEuLi4wMDAwMDALDyLQAAAACHRSTlMBSVwqZxQvdztAhVgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicTYvBDQAxDMIMIen+G59y/dQfJAvDQ/c/NUkV4Ej2GksemBPIGVprdP8bfQ6yAHHUzU7NAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},25566:function(e){var t,A,r,n=e.exports={};function a(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(A){try{return t.call(null,e,0)}catch(A){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{A="function"==typeof clearTimeout?clearTimeout:i}catch(e){A=i}}();var s=[],c=!1,l=-1;function u(){c&&r&&(c=!1,r.length?s=r.concat(s):l=-1,s.length&&d())}function d(){if(!c){var e=o(u);c=!0;for(var t=s.length;t;){for(r=s,s=[];++l<t;)r&&r[l].run();l=-1,t=s.length}r=null,c=!1,function(e){if(A===clearTimeout)return clearTimeout(e);if((A===i||!A)&&clearTimeout)return A=clearTimeout,clearTimeout(e);try{A(e)}catch(t){try{return A.call(null,e)}catch(t){return A.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function h(){}n.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var A=1;A<arguments.length;A++)t[A-1]=arguments[A];s.push(new g(e,t)),1!==s.length||c||o(d)},g.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}}]);