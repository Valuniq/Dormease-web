(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2858],{2566:function(e,t,A){Promise.resolve().then(A.bind(A,3970))},7907:function(e,t,A){"use strict";var a=A(5313);A.o(a,"usePathname")&&A.d(t,{usePathname:function(){return a.usePathname}}),A.o(a,"useRouter")&&A.d(t,{useRouter:function(){return a.useRouter}})},2671:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A=Symbol.for("react.element"),a=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),r=Object.assign,n={};function i(e,t,A){this.props=e,this.context=t,this.refs=n,this.updater=A||a}function l(){}function s(e,t,A){this.props=e,this.context=t,this.refs=n,this.updater=A||a}i.prototype.isReactComponent={},i.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},l.prototype=i.prototype;var c=s.prototype=new l;c.constructor=s,r(c,i.prototype),c.isPureReactComponent=!0;var o=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,a){var r,n={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)o.call(t,r)&&!u.hasOwnProperty(r)&&(n[r]=t[r]);var s=arguments.length-2;if(1===s)n.children=a;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];n.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===n[r]&&(n[r]=s[r]);return{$$typeof:A,type:e,key:i,ref:l,props:n,_owner:null}}},2846:function(e,t,A){"use strict";e.exports=A(2671)},3970:function(e,t,A){"use strict";A.r(t),A.d(t,{default:function(){return m}});var a=A(7437),r=A(8640),n=A(7124),i=A(4817);let l=()=>{var e,t,A;let{data:a,error:l,size:s,setSize:c}=(0,i.ZP)((e,t)=>t&&0===t.information.dataList.length?null:"".concat(r._,"/api/v1/web/notifications/ANNOUNCEMENT?page=").concat(e+1),n.Z),o=a?a.reduce((e,t)=>e.concat(t.information.dataList),[]):[],u=!a&&!l||s>0&&a&&void 0===a[s-1];return{notificationsData:o,error:l,isLoadingMore:u,size:s,setSize:c,isReachingEnd:(null==a?void 0:null===(e=a[0])||void 0===e?void 0:e.information.dataList.length)===0||a&&(null===(t=a[a.length-1])||void 0===t?void 0:t.information.pageInfo.currentPage)===(null===(A=a[a.length-1])||void 0===A?void 0:A.information.pageInfo.totalPage)||!1}};var s=A(5407),c=A(1299);A(2265);var o=A(3122),u=A(6092),d=A(703),g=e=>{let{notificationId:t,pinned:A,title:r,writer:n,createdDate:i,existFile:l}=e,s=r.length>35?r.slice(0,35)+"...":r;return(0,a.jsxs)("tr",{className:"".concat(A?"bg-gray-grayscale10":"bg-white"," h-38 hover-transition hover:bg-gray-grayscale10 cursor-pointer active:bg-gray-grayscale20 H4-caption text-gray-grayscale50"),children:[(0,a.jsx)("td",{className:"text-center",children:A?(0,a.jsxs)("div",{className:"flex items-center justify-center",children:[t," ",(0,a.jsx)(d.default,{className:" object-contain ml-2 ",src:u.Z,width:13,height:19.61,alt:"pinIcon"})]}):(0,a.jsxs)(a.Fragment,{children:[" ",t]})}),(0,a.jsx)("td",{className:"text-center",children:s}),(0,a.jsx)("td",{className:"text-center",children:n}),(0,a.jsx)("td",{className:"text-center",children:i}),(0,a.jsx)("td",{className:"text-center",children:l?"O":"X"}),(0,a.jsx)("td",{className:"text-center",children:"조회수"})]},t)},h=e=>{let{noticeLists:t}=e,A=t.filter(e=>e.pinned),r=t.filter(e=>!e.pinned);return(0,a.jsx)("div",{className:"w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50",children:(0,a.jsxs)("table",{className:"w-[1200px] h-full",children:[(0,a.jsxs)("thead",{className:"w-full h-36 bg-white sticky top-0 z-1",children:[(0,a.jsxs)("tr",{className:"text-gray-grayscale50",children:[(0,a.jsx)("th",{className:"H4",children:"번호"}),(0,a.jsx)("th",{className:"H4",children:"제목"}),(0,a.jsx)("th",{className:"H4",children:"작성자"}),(0,a.jsx)("th",{className:"H4",children:"등록일"}),(0,a.jsx)("th",{className:"H4",children:"첨부파일"}),(0,a.jsx)("th",{className:"H4",children:"조회수"})]}),(0,a.jsx)("tr",{children:(0,a.jsx)("th",{colSpan:6,children:(0,a.jsx)("div",{className:"w-full h-18 border-b-1 border-b-gray-grayscale50"})})})]}),t.length>0?(0,a.jsxs)("tbody",{className:"overflow-y-scroll",children:[A.map(e=>(0,a.jsx)("tr",{children:(0,a.jsx)(g,{notificationId:e.notificationId,title:e.title,writer:e.writer,createdDate:e.createdDate,existFile:e.existFile,pinned:e.pinned})},e.notificationId)),r.map(e=>(0,a.jsx)("tr",{children:(0,a.jsx)(g,{notificationId:e.notificationId,title:e.title,writer:e.writer,createdDate:e.createdDate,existFile:e.existFile,pinned:e.pinned})},e.notificationId))]}):(0,a.jsx)("tbody",{className:"h-full",children:(0,a.jsx)(o.Z,{colspan:6})})]})})},b=A(8269),f=A(7907),m=()=>{let e=(0,f.useRouter)(),{notificationsData:t,error:A,isLoadingMore:r,size:n,setSize:i,isReachingEnd:o}=l();return A?(0,a.jsx)("div",{children:"Failed to load"}):t?(0,a.jsxs)("div",{className:"w-[1200px] flex flex-col items-center",children:[(0,a.jsx)("h1",{className:"H0 text-gray-grayscale50",children:"공지사항"}),(0,a.jsx)("div",{onClick:()=>{e.push(b.fj)},className:"ml-auto mb-15",children:(0,a.jsx)(s.Z,{label:"작성하기",disabled:!1,variant:"blue"})}),(0,a.jsx)(h,{noticeLists:t}),(0,a.jsx)("div",{className:"mt-27 flex justify-center",children:(0,a.jsx)(c.Z,{pageNum:n,pageTotalNum:10,setPageNum:e=>{"prev"===e&&n>1?i(n-1):"next"!==e||o||i(n+1)}})})]}):(0,a.jsx)("div",{children:"Loading..."})}},5407:function(e,t,A){"use strict";var a=A(7437);A(2265),t.Z=e=>{let{label:t,variant:A,disabled:r,selected:n=!1,...i}=e;return(0,a.jsx)("button",{...i,disabled:r,className:"H4 w-115 h-37 rounded-full text-white hover:hover-transition ".concat((()=>{switch(A){case"blue":return"".concat(n?"bg-blue-blue50":"bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50");case"green":return"".concat(n?"bg-green-green40":"bg-green-green20 disabled:bg-green-green10 hover:bg-green-green30 active:bg-green-green40");case"red":return"".concat(n?"bg-red-red40":"bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40");default:return""}})()),children:t})}},1299:function(e,t,A){"use strict";A.d(t,{Z:function(){return u}});var a,r,n=A(7437);A(2265);var i=A(2846);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var A=arguments[t];for(var a in A)Object.prototype.hasOwnProperty.call(A,a)&&(e[a]=A[a])}return e}).apply(this,arguments)}var s=function(e){return i.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:10,height:17,fill:"none"},e),a||(a=i.createElement("path",{fill:"currentColor",d:"m.42 9.531 6.828 6.827c.77.77 2.086.225 2.086-.864V1.84C9.334.75 8.018.206 7.248.976L.42 7.803a1.22 1.22 0 0 0 0 1.728"})))};function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var A=arguments[t];for(var a in A)Object.prototype.hasOwnProperty.call(A,a)&&(e[a]=A[a])}return e}).apply(this,arguments)}var o=function(e){return i.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:10,height:17,fill:"none"},e),r||(r=i.createElement("path",{fill:"currentColor",d:"M9.58 7.803 2.752.976C1.982.206.666.75.666 1.84v13.654c0 1.089 1.317 1.634 2.086.864L9.58 9.531a1.22 1.22 0 0 0 0-1.728"})))},u=e=>{let{pageNum:t,pageTotalNum:A,setPageNum:a}=e;return(0,n.jsxs)("div",{className:"flex items-center gap-27",children:[(0,n.jsx)("button",{disabled:!(t>1),className:"group",onClick:()=>a("prev"),children:(0,n.jsx)(s,{className:"text-blue-blue30 group-disabled:text-blue-blue20"})}),(0,n.jsx)("div",{className:"caption1 text-gray-grayscale40 pt-1",children:t}),(0,n.jsx)("button",{disabled:!(t<A),className:"group",onClick:()=>a("next"),children:(0,n.jsx)(o,{className:"text-blue-blue30 group-disabled:text-blue-blue20"})})]})}},3122:function(e,t,A){"use strict";var a=A(7437);A(2265),t.Z=e=>{let{colspan:t}=e;return(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:t,className:"h-full",children:(0,a.jsx)("div",{className:"flex justify-center items-center h-693",children:(0,a.jsx)("h1",{className:"H1 text-gray-grayscale30",children:"리스트가 비었습니다."})})})})}},8269:function(e,t,A){"use strict";A.d(t,{dH:function(){return l},jH:function(){return s},fj:function(){return i},RY:function(){return a}});let a="/dashboard/StudentManagement",r="/dashboard/JoinApplicationSetting",n="/dashboard/BuildingManagement",i="/dashboard/Notice/NoticeWriting",l="/dashboard/FAQ/FAQWriting",s=[{label:"학생 관리",routes:a,icon:{src:"/_next/static/media/StudentManagement.9f56c925.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUcHBwxMTEvLy8wMDAxMTEuLi4wMDAwMDALDyLQAAAACHRSTlMBSVwqZxQvdztAhVgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicTYvBDQAxDMIMIen+G59y/dQfJAvDQ/c/NUkV4Ej2GksemBPIGVprdP8bfQ6yAHHUzU7NAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},subMenu:[{label:"사생 관리",routes:a},{label:"상/벌점 관리",routes:"".concat(a,"/PointManagement")},{label:"앱 회원관리",routes:"".concat(a,"/AppMemberManagement")},{label:"블랙리스트",routes:"".concat(a,"/BlackList")},{label:"탈퇴회원관리",routes:"".concat(a,"/WithdrawalMemberManagement")}]},{label:"입/퇴사 관리",routes:r,icon:{src:"/_next/static/media/JoinAndResignationManagement.673d6a49.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUAAAAwMDAxMTEwMDBMaXEzMzMzMzMuLi4wMDAuLi6I1MkaAAAACnRSTlMBXBcvAEQfR04LbnspdQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUeJwdx7cRwEAMxMBzNN9/wxoqwgJBpCBATPo6C2wFzTs2umKnfpAHcWaHQuT3rHwdZADqnlebAgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},subMenu:[{label:"입사 신청 설정",routes:r},{label:"기준 설정",routes:"".concat(r,"/StandardSetting")},{label:"신청자 명단",routes:"".concat(r,"/Applicant")},{label:"입금 확인 명단",routes:"".concat(r,"/DepositConfirmation")},{label:"합격자 명단",routes:"".concat(r,"/PassMember")},{label:"환불 신청",routes:"".concat(r,"/Refund")},{label:"퇴사 확인서",routes:"".concat(r,"/Resignation")}]},{label:"건물 관리",routes:n,icon:{src:"/_next/static/media/BuildingManagement.68c09911.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUtLS0vLy8vLy8wMDAuLi4wMDAvLy8wMDD0pvsoAAAACHRSTlMBETBoIHxTRAoiS3AAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicTYu5EQAwDIP02NL+G+eSKlQUAHxQ2QGyUT1QS8gDessriFPfZlYA3/TeAxWcAJcaXj1qAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},subMenu:[{label:"건물 관리",routes:n},{label:"건물 설정",routes:"".concat(n,"/BuildingSettings")}]},{label:"일정 관리",routes:"/dashboard/ScheduleManagement",icon:{src:"/_next/static/media/ScheduleManagement.2bc05677.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUxMTEwMDA1NTUvLy8vLy8vLy8vLy8fGH9cAAAAB3RSTlMjLQY9S2B6NOCbyQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJw1xgEKgAAMw8Bk7fb/J4ugEI4ww9deezt4bXtCUQuEF/EfNkkWxmicBxW1AIv25ZdYAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{label:"공지 사항",routes:"/dashboard/Notice",icon:{src:"/_next/static/media/Notice.ef121e50.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUwMDBMaXExMTEwMDAwMDAvLy8rKyupU0ZrAAAAB3RSTlM9AE1fDC0d5etilAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC5JREFUeJwdickNwEAQg/Ax6b/klcMHJNC4ijlxFw45JFuJmG2Js9gHnO+ulJ8+ENYAdkgqB64AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},{label:"FAQ",routes:"/dashboard/FAQ",icon:{src:"/_next/static/media/FAQ.c4006e55.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEUwMDAwMDBMaXEwMDAvLy8xMTHA2KlCAAAABnRSTlM0VgASIAm15JNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nEXLsRHAQAzDMFKS91851V96gKTQhCBIqKdngTs3gMwANVvsj1//AA+gAG3fUYnnAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{label:"요청 사항",routes:"/dashboard/Request",icon:{src:"/_next/static/media/Request.7c7371f8.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUvLy8yMjIwMDAxMTEvLy9MaXEvLy8xMTGDhWq7AAAACHRSTlMUKDNaPABLfl3ENQ4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAySURBVHicFcbJCcBAEASx6ms2/4yNQQ8x2baGI0kxldqp1HfgP3D3CiFJyu4pCexn9gEYLQCwslrq3gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},{label:"식권 관리",routes:"/dashboard/",icon:{src:"/_next/static/media/MealTicketManagement.b72c83f1.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUaGhovLy8qKioxMTEvLy8zMzMxMTEvLy/UEl5uAAAACHRSTlMCJg5lQBxQO7fvdm4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAuSURBVHicRYu5DcBAEISYZ/f67/gkS7YDIgBsHpRCI6qRRgWfTQw42zW/+uJ3vxO0AItXhNMCAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{label:"설정",routes:"/dashboard/Setting",icon:{src:"/_next/static/media/Setting.12fa6de1.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEVMaXEvLy8wMDAvLy8xMTEuLi4vLy8xMTE8FvxSAAAACHRSTlMAFSpdTzYlTJC9wPcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicLYtBCgBBCMNirfr/Hw9bNqdACMAMH7LPC9UjTRfVe1ZE9kb+xPps5cv+ABgbAKrry8LrAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}]},8640:function(e,t,A){"use strict";A.d(t,{_:function(){return a}});let a="https://www.dormease-dev.kro.kr"},9652:function(e,t,A){"use strict";A.d(t,{L:function(){return a},z:function(){return r}});let a="ACCESS_TOKEN",r="REFRESH_TOKEN"},7124:function(e,t,A){"use strict";var a=A(7871),r=A(9652);let n=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},A=a.Z.getToken(r.L);if(!A)throw Error("No access token found");let n={...t.headers,Authorization:"Bearer ".concat(A),"Content-Type":"application/json"},i=await fetch(e,{...t,headers:n});if(!i.ok)throw 401===i.status&&(a.Z.removeToken(r.L),a.Z.removeToken(r.z),alert("세션이 만료되었습니다. 다시 로그인해 주세요.")),Error("Failed to fetch data");return i.json()};t.Z=n},7871:function(e,t){"use strict";t.Z={saveToken:(e,t)=>{localStorage.setItem(e,t)},getToken:e=>localStorage.getItem(e),removeToken:e=>{localStorage.removeItem(e)}}},6092:function(e,t){"use strict";t.Z={src:"/_next/static/media/pinIcon.428e8381.png",height:18,width:18,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXE3et01d9c0eNg0d9c1eNg2eNo2edY1d9c1dtg2eNk4fOA2dtE6g+w4feLum0OSAAAADXRSTlMA/PqCX57aLXBCveIcezOPlQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUeJwdykkSACEIwMAAsqiD/3+uNebUhwDMGLy85elbIjKo2EelN9WqZ/kEa9UE0q3jXy2pAi4nOgEgO4Xy5AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[703,4898,4817,2971,8069,1744],function(){return e(e.s=2566)}),_N_E=e.O()}]);