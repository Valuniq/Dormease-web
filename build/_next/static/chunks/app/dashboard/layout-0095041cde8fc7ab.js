(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7663],{60266:function(A,e,t){Promise.resolve().then(t.t.bind(t,81749,23)),Promise.resolve().then(t.bind(t,49191)),Promise.resolve().then(t.bind(t,35490))},9088:function(A,e,t){"use strict";var a=t(57437);e.Z=A=>{let{label:e,onClick:t,hoverColor:r}=A,{btnHoverColor:s}=(A=>{switch(A){case"blue":default:return{btnHoverColor:"hover:bg-blue-blue30"};case"gray":return{btnHoverColor:"hover:bg-gray-grayscale20"};case"red":return{btnHoverColor:"hover:bg-red-red20"};case"green":return{btnHoverColor:"hover:bg-green-green20"}}})(r);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("button",{onClick:t,className:"mr-16 w-86 h-32 rounded-20 ".concat(s," hover-transition"),children:"gray"===r?(0,a.jsx)("h1",{className:"H4 text-gray-grayscale40",children:e}):(0,a.jsx)("h1",{className:"H4 text-gray-grayscale40  hover:text-white",children:e})})})}},26066:function(A,e,t){"use strict";var a=t(57437),r=t(20703),s=t(95343),l=t(42866);t(2265),e.Z=A=>{let{bgColor:e,onCancel:t}=A;return(0,a.jsxs)("div",{className:"".concat(e||"bg-blue-blue30"," w-full h-39  flex justify-between pl-15 rounded-t-8"),children:[(0,a.jsx)(r.default,{src:s.Z,alt:"PromptLogo",className:"object-contain",width:39,height:11.65}),(0,a.jsx)("button",{className:"hover:bg-red-red30 ".concat(e||"bg-blue-blue30"," w-39 h-39 flex items-center justify-center rounded-tr-8 hover-transition"),onClick:t,children:(0,a.jsx)(r.default,{src:l.Z,alt:"PromptOut",className:"object-contain",width:10,height:10})})]})}},79517:function(A,e,t){"use strict";var a=t(57437),r=t(2265),s=t(54887);e.Z=A=>{let{children:e,isOpen:t}=A;return(0,r.useEffect)(()=>(t?window.document.body.style.overflow="hidden":window.document.body.style.overflow="auto",()=>{window.document.body.style.overflow="auto"}),[t]),(0,s.createPortal)((0,a.jsx)("div",{className:"fixed z-backdrop top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center",children:(0,a.jsx)("div",{className:"xl:scale-65 xxl:scale-80 lg:scale-65 md:scale-50 sm:scale-40",children:null!=e?e:null})}),document.body)}},35490:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});var a=t(57437);t(2265);var r=t(20703),s=A=>{let{label:e,menu:t,selected:s,...l}=A;return(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsxs)("button",{...l,className:"alert-cap flex items-center h-48 rounded-8 text-gray-grayscale-50 ".concat(s?"w-222 bg-blue-blue15 mr-12":" w-240 bg-transparent hover:bg-gray-grayscale10 hover:hover-transition active:bg-gray-grayscale20"),children:[(0,a.jsx)(r.default,{className:"ml-19 mr-11",src:t,alt:"Menu",width:24,height:24}),e]}),(0,a.jsx)("div",{className:"hover-transition ".concat(s?"w-6 h-48 rounded-8 bg-blue-blue30":"hidden")})]})},l=A=>{let{label:e,selected:t=!1,...r}=A;return(0,a.jsxs)("button",{...r,className:"alert-cap flex items-center w-159 h-34 rounded-8 text-gray-grayscale-50 ".concat(t?"bg-blue-blue15 mr-12":" bg-transparent hover:bg-gray-grayscale10 hover:hover-transition active:bg-gray-grayscale20"),children:[(0,a.jsx)("h1",{className:"px-15",children:"•"}),e]})},n=t(17940),i=t(8792),c=t(47907),o=t(32153),u=t(91355),d=t(79517),g=t(91723),b=()=>{let[A,e]=(0,o.FV)(u.ZZ),t=(0,o.Zl)(u.jd),r=(0,o.sJ)(u.oh),s=(0,c.useRouter)();return(0,a.jsx)(d.Z,{isOpen:A,children:(0,a.jsx)(g.Z,{variant:"red",label:"이 페이지를 떠나시면 설정 내용이 저장되지 않습니다.",onCancel:()=>e(!A),onConfirm:()=>{e(!A),t(!A),s.push(r)}})})},h=()=>{let A=(0,c.usePathname)(),e=A.split("/")[2],[t,r]=(0,o.FV)(u.ZZ),d=(0,o.sJ)(u.jd),g=(0,o.Zl)(u.oh),h=(A,e)=>{d&&(A.preventDefault(),g(e),r(!t))};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex flex-col items-start",children:n.jH.map(t=>(0,a.jsxs)("div",{className:"flex flex-col items-center",onClick:A=>{d&&A.preventDefault()},children:[(0,a.jsx)(i.default,{href:t.routes,className:"mb-10",onClick:A=>{h(A,t.routes)},children:(0,a.jsx)(s,{label:t.label,menu:t.icon,selected:e===t.routes.split("/")[2]})}),t.subMenu&&e===t.routes.split("/")[2]&&(0,a.jsx)(a.Fragment,{children:t.subMenu.map(e=>(0,a.jsx)(i.default,{href:e.routes,className:"mb-10",onClick:A=>{h(A,e.routes)},children:(0,a.jsx)(l,{selected:A===e.routes,label:e.label})},e.label))})]},t.label))}),t&&(0,a.jsx)(b,{})]})}},91723:function(A,e,t){"use strict";var a=t(57437),r=t(20703),s=t(22992),l=t(9088),n=t(26066);e.Z=A=>{let{variant:e,label:t,onConfirm:i,onCancel:c}=A,{bgHeader:o}=(A=>{switch(A){case"blue":default:return{bgHeader:"bg-blue-blue30"};case"red":return{bgHeader:"bg-red-red20"};case"green":return{bgHeader:"bg-green-green20"}}})(e);return(0,a.jsxs)("div",{className:"w-456 h-194 flex flex-col items-center rounded-8 shadow-xl bg-white pb-15",children:[(0,a.jsx)(n.Z,{bgColor:o,onCancel:c}),(0,a.jsx)(r.default,{src:s.Z,className:"mt-19 mb-16",width:22,height:19,alt:"PromptWarning"}),(0,a.jsx)("h1",{className:"alert-cap text-gray-grayscale50 text-center",children:t.split("\\n").map((A,e)=>(0,a.jsx)("p",{className:"leading-25",children:A},e))}),(0,a.jsxs)("div",{className:"ml-auto mt-auto",children:[(0,a.jsx)(l.Z,{label:"취소",onClick:c,hoverColor:e}),(0,a.jsx)(l.Z,{label:"확인",onClick:i,hoverColor:e})]})]})}},17940:function(A,e,t){"use strict";t.d(e,{jH:function(){return b},_u:function(){return i},lT:function(){return c},K1:function(){return l},Vb:function(){return n},mV:function(){return d},Qf:function(){return g},Kr:function(){return o},jc:function(){return u}});let a="/dashboard/students",r="/dashboard/joins",s="/dashboard/dorms",l="/dashboard/notice",n="/dashboard/notices/writings",i="/dashboard/notices/details",c="/dashboard/notices/edits",o="/dashboard/supports",u="/dashboard/supports/writings",d="/dashboard/supports/details",g="/dashboard/supports/edits",b=[{label:"메인 화면",routes:"/dashboard",icon:{src:"/_next/static/media/Main.907a5e33.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUvLy8vLy8wMDAyMjIuLi4wMDAxMTEvLy8wMDA7h9fyAAAACXRSTlM1LSNHB24+VkqkfbaIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nEWLsQ0AMAyDcOy0/f/iTlE2JIAUgEK6UV1RbZeAPFscLayaePYPFqgAnXH1DYoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},{label:"학생 관리",routes:a,icon:{src:"/_next/static/media/StudentManagement.9f56c925.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUcHBwxMTEvLy8wMDAxMTEuLi4wMDAwMDALDyLQAAAACHRSTlMBSVwqZxQvdztAhVgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicTYvBDQAxDMIMIen+G59y/dQfJAvDQ/c/NUkV4Ej2GksemBPIGVprdP8bfQ6yAHHUzU7NAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},subMenu:[{label:"사생 관리",routes:a},{label:"상/벌점 관리",routes:"".concat(a,"/points")},{label:"앱 회원관리",routes:"".concat(a,"/appMembers")},{label:"블랙리스트",routes:"".concat(a,"/blacklists")},{label:"탈퇴회원관리",routes:"".concat(a,"/withdrawals")}]},{label:"입/퇴사 관리",routes:r,icon:{src:"/_next/static/media/JoinAndResignationManagement.673d6a49.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUAAAAwMDAxMTEwMDBMaXEzMzMzMzMuLi4wMDAuLi6I1MkaAAAACnRSTlMBXBcvAEQfR04LbnspdQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUeJwdx7cRwEAMxMBzNN9/wxoqwgJBpCBATPo6C2wFzTs2umKnfpAHcWaHQuT3rHwdZADqnlebAgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},subMenu:[{label:"입사 신청 설정",routes:r},{label:"기준 설정",routes:"".concat(r,"/standards")},{label:"신청자 명단",routes:"".concat(r,"/applicants")},{label:"입금 확인 명단",routes:"".concat(r,"/deposits")},{label:"합격자 명단",routes:"".concat(r,"/passMembers")},{label:"환불 신청",routes:"".concat(r,"/refunds")},{label:"퇴사 확인서",routes:"".concat(r,"/resigns")}]},{label:"건물 관리",routes:s,icon:{src:"/_next/static/media/BuildingManagement.68c09911.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUtLS0vLy8vLy8wMDAuLi4wMDAvLy8wMDD0pvsoAAAACHRSTlMBETBoIHxTRAoiS3AAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicTYu5EQAwDIP02NL+G+eSKlQUAHxQ2QGyUT1QS8gDessriFPfZlYA3/TeAxWcAJcaXj1qAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},subMenu:[{label:"건물 관리",routes:s},{label:"건물 설정",routes:"".concat(s,"/settings")}]},{label:"일정 관리",routes:"/dashboard/schedules",icon:{src:"/_next/static/media/ScheduleManagement.2bc05677.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUxMTEwMDA1NTUvLy8vLy8vLy8vLy8fGH9cAAAAB3RSTlMjLQY9S2B6NOCbyQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJw1xgEKgAAMw8Bk7fb/J4ugEI4ww9deezt4bXtCUQuEF/EfNkkWxmicBxW1AIv25ZdYAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{label:"공지사항",routes:"/dashboard/notices",icon:{src:"/_next/static/media/Notice.ef121e50.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUwMDBMaXExMTEwMDAwMDAvLy8rKyupU0ZrAAAAB3RSTlM9AE1fDC0d5etilAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC5JREFUeJwdickNwEAQg/Ax6b/klcMHJNC4ijlxFw45JFuJmG2Js9gHnO+ulJ8+ENYAdkgqB64AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},{label:"FAQ",routes:"/dashboard/supports",icon:{src:"/_next/static/media/FAQ.c4006e55.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEUwMDAwMDBMaXEwMDAvLy8xMTHA2KlCAAAABnRSTlM0VgASIAm15JNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nEXLsRHAQAzDMFKS91851V96gKTQhCBIqKdngTs3gMwANVvsj1//AA+gAG3fUYnnAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{label:"요청사항",routes:"/dashboard/requests",icon:{src:"/_next/static/media/Request.7c7371f8.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUvLy8yMjIwMDAxMTEvLy9MaXEvLy8xMTGDhWq7AAAACHRSTlMUKDNaPABLfl3ENQ4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAySURBVHicFcbJCcBAEASx6ms2/4yNQQ8x2baGI0kxldqp1HfgP3D3CiFJyu4pCexn9gEYLQCwslrq3gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},{label:"계정 관리",routes:"/dashboard/accounts",icon:{src:"/_next/static/media/Setting.12fa6de1.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEVMaXEvLy8wMDAvLy8xMTEuLi4vLy8xMTE8FvxSAAAACHRSTlMAFSpdTzYlTJC9wPcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicLYtBCgBBCMNirfr/Hw9bNqdACMAMH7LPC9UjTRfVe1ZE9kb+xPps5cv+ABgbAKrry8LrAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}]},91355:function(A,e,t){"use strict";t.d(e,{ZZ:function(){return r},jd:function(){return s},oh:function(){return l}});var a=t(32153);let r=(0,a.cn)({key:"navState",default:!1}),s=(0,a.cn)({key:"editState",default:!1}),l=(0,a.cn)({key:"targetRouteState",default:""})},95343:function(A,e){"use strict";e.Z={src:"/_next/static/media/PromptLogo.692c0d92.png",height:13,width:39,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEX///////////////////////////////////////8V2MxSAAAACnRSTlPlmoJy+43FvWlJljCSDAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACFJREFUeJwFwYEBADAIwrDCxOn/D5vAhDw+2qanBFbF9gEEtABSm4AZFAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},42866:function(A,e){"use strict";e.Z={src:"/_next/static/media/PromptOut.98b7927a.png",height:12,width:12,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEX///////////////9MaXH///91ewZhAAAABnRSTlNA0QMxAHpSp+N/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nEWLsQ0AMAyDcEz/f7lT0w0J4OCMHAhKQNIGGZvU+bBq47dfE2gAiTtnxw0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},22992:function(A,e){"use strict";e.Z={src:"/_next/static/media/PromptWarning.99ab5e8b.png",height:21,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAHlBMVEXXNTXXNTVMaXHWNTXXNTXXNTWqVVXUODjYNzfWNTXpH04wAAAACnRSTlN9jQA8LFoDEkykCmOTUQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJwdwYkNADAMAjE4SJ/9F65UW4ANaDEzwxLbiTdCOSdCNQmuXBoqXX33ARTdAKE2+uYqAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7}},49191:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/HeaderLogo.13e79d76.png",height:46,width:125,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAElBMVEU1eNg1eNc1eNc2edk1dtY3edgzoBzXAAAABnRSTlNqnXuwSy5YZIqAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHUlEQVR4nAXBAQEAAAzCoE19/8oHkukKSosBdwQeAm0AKfn26roAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}}},function(A){A.O(0,[691,703,5008,2971,8069,1744],function(){return A(A.s=60266)}),_N_E=A.O()}]);