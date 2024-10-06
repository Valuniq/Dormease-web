(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2242,5776],{2306:function(e,t,r){Promise.resolve().then(r.bind(r,56813))},56813:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n=r(57437),a=r(58640),s=r(94817),l=r(75518);let c=()=>{var e,t,r;let{data:n,error:c,size:i,setSize:o,mutate:u}=(0,s.ZP)((e,t)=>t&&0===t.information.dataList.length?null:"".concat(a._,"/api/v1/web/users/management/blacklist?page=").concat(e+1),l.Z),d=n?n.reduce((e,t)=>e.concat(t.information.dataList),[]):[],A=!n&&!c||i>0&&n&&void 0===n[i-1];return{blacklistsData:d,error:c,isLoadingMore:A,size:i,setSize:o,isEndReached:(null==n?void 0:null===(e=n[0])||void 0===e?void 0:e.information.dataList.length)===0||n&&(null===(t=n[n.length-1])||void 0===t?void 0:t.information.pageInfo.currentPage)===(null===(r=n[n.length-1])||void 0===r?void 0:r.information.pageInfo.totalPage)||!1,mutate:u}},i=async e=>{try{let t=e.map(e=>{let{id:t,content:r}=e;return(0,l.Z)("".concat(a._,"/api/v1/web/users/management/blacklist"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify([{blacklistId:t,content:r}])})});await Promise.all(t),console.log("Successfully updated all blacklist reasons.")}catch(e){throw console.error("Error updating blacklist reasons:",e),e}},o=async e=>{try{let t=e.map(e=>(0,l.Z)("".concat(a._,"/api/v1/web/users/management/blacklist/").concat(e),{method:"DELETE"}));await Promise.all(t)}catch(e){throw console.error("Error deleting blacklist items:",e),e}};var u=r(31371),d=r(86716),A=r(85776),h=r(36824),g=r(32153);let m=(0,g.cn)({key:"selectedMemberIdForBlacklistState",default:[]});var b=r(2265),f=r(73122),x=e=>{let{input:t,setInput:r}=e;return(0,n.jsx)("input",{className:"".concat(t?"border-b-gray-grayscale50 ":"border-b-gray-grayscale20"," focus:border-b-gray-grayscale50 w-400 h-34 border-b-1 H4 placeholder:text-gray-grayscale30  placeholder:text-center focus:outline-none pb-6 text-gray-grayscale50 "),placeholder:"사유를 입력해주세요. (최대 30자)",type:"text",value:t,onChange:e=>{r&&r(e.target.value)}})},w=r(2920),v=(0,b.forwardRef)((e,t)=>{let{id:r,index:a,name:s,studentId:l,phoneNumber:c,minus:i,registrationDate:o,content:u,isChecked:d,setIsChecked:h,onReasonChange:g}=e,[m,f]=(0,b.useState)(u);return(0,n.jsxs)("tr",{ref:t,className:"h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50",children:[(0,n.jsx)("td",{className:"text-center",children:a}),(0,n.jsx)("td",{className:"text-center",children:s}),(0,n.jsx)("td",{className:"text-center",children:l}),(0,n.jsx)("td",{className:"text-center",children:c}),(0,n.jsxs)("td",{className:"text-center",children:[i,"점"]}),(0,n.jsx)("td",{className:"text-center",children:(0,n.jsx)(x,{input:m,setInput:e=>{f(e),g(r,e)}})}),(0,n.jsx)("td",{className:"text-center",children:(0,w.p6)(o)}),(0,n.jsx)("td",{className:"h-38 flex justify-center items-center my-auto",children:(0,n.jsx)(A.default,{isChecked:d,setIsChecked:h})})]})}),y=e=>{let{blackLists:t,isLoading:r,isEndReached:a,setSize:s,onReasonChange:l}=e,[c,i]=(0,g.FV)(m),[o,u]=(0,b.useState)(!1),d=(0,h.Z)({isLoading:r,isEndReached:a,onIntersect:()=>s(e=>e+1)}),x=(e,t)=>{t?i(t=>[...t,e]):i(t=>t.filter(t=>t!==e))};return(0,n.jsx)("div",{className:"w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50",children:(0,n.jsxs)("table",{className:"w-[1305px]",children:[(0,n.jsxs)("thead",{className:"w-full h-36 bg-white sticky top-0 z-1",children:[(0,n.jsxs)("tr",{className:"text-gray-grayscale50",children:[(0,n.jsx)("th",{className:"H4 w-[8%]",children:"번호"}),(0,n.jsx)("th",{className:"H4 w-[8%]",children:"이름"}),(0,n.jsx)("th",{className:"H4 w-[12%]",children:"학번"}),(0,n.jsx)("th",{className:"H4 w-[16%]",children:"전화번호"}),(0,n.jsx)("th",{className:"H4 w-[10%]",children:"벌점"}),(0,n.jsx)("th",{className:"H4 w-[26%]",children:"사유"}),(0,n.jsx)("th",{className:"H4 w-[12%]",children:"등록일자"}),(0,n.jsx)("th",{className:"w-[8%]",children:(0,n.jsxs)("div",{className:"H4 flex  items-center justify-center text-center w-full",children:[(0,n.jsx)("h1",{className:"mr-4 ",children:"전체"}),(0,n.jsx)(A.default,{isChecked:o,setIsChecked:()=>{o?i([]):i(t.map(e=>e.id)),u(!o)}})]})})]}),(0,n.jsx)("tr",{children:(0,n.jsx)("th",{colSpan:8,children:(0,n.jsx)("div",{className:"w-full h-18 border-b-1 border-b-gray-grayscale50"})})})]}),t&&t.length>0?(0,n.jsxs)("tbody",{className:"overflow-y-scroll",children:[(0,n.jsx)("tr",{className:"h-15"}),t.map((e,t)=>(0,n.jsxs)(b.Fragment,{children:[(0,n.jsx)(v,{id:e.id,index:t+1,name:e.name,studentId:e.studentNumber,phoneNumber:e.phoneNumber,minus:e.minusPoint,content:e.content,registrationDate:e.createdAt,ref:d,isChecked:c.includes(e.id),setIsChecked:t=>x(e.id,t),onReasonChange:l}),(0,n.jsx)("tr",{className:"h-15"})]},t))]}):(0,n.jsx)("tbody",{children:(0,n.jsx)(f.Z,{colspan:8})})]})})},p=r(28771),j=r(91355),N=()=>{let{blacklistsData:e,error:t,isLoadingMore:r,size:a,setSize:s,isEndReached:l,mutate:A}=c(),[h,f]=(0,b.useState)({}),[x,w]=(0,g.FV)(m),v=(0,g.Zl)(j.jd);(0,b.useEffect)(()=>{Object.keys(h).length>0?v(!0):v(!1)},[h,v]);let{showConfirmDialog:N,ConfirmDialogComponent:C}=(0,p.Z)("블랙리스트 명단에서 삭제하시겠습니까?",async()=>{await k()},"red"),E=async()=>{let e=Object.entries(h).map(e=>{let[t,r]=e;return{id:Number(t),content:r}});try{await i(e),f({}),A()}catch(e){alert("업데이트 중 오류가 발생했습니다.")}},k=async()=>{try{await o(x),w([]),A()}catch(e){alert("삭제 중 오류가 발생했습니다.")}};return(0,n.jsxs)("div",{className:"w-[1250px] flex flex-col items-center",children:[(0,n.jsx)("h1",{className:"H0 text-gray-grayscale50 mb-8",children:"블랙리스트"}),(0,n.jsx)("div",{className:"ml-auto mb-24",children:(0,n.jsx)(u.Z,{label:"저장",onClick:E,disabled:!1,selected:!1,variant:"blue"})}),(0,n.jsx)(y,{blackLists:e,isLoading:null!=r&&r,isEndReached:l,setSize:s,onReasonChange:(e,t)=>{f(r=>r[e]!==t?{...r,[e]:t}:r)}}),(0,n.jsx)("div",{className:"ml-auto mt-24",children:(0,n.jsx)(d.Z,{label:"삭제하기",onClick:()=>N()})}),C]})}},9088:function(e,t,r){"use strict";var n=r(57437);t.Z=e=>{let{label:t,onClick:r,hoverColor:a,isColor:s,disabled:l}=e,{btnHoverColor:c}=(e=>{switch(e){case"blue":default:return{btnHoverColor:"hover:bg-blue-blue30"};case"gray":return{btnHoverColor:"hover:bg-gray-grayscale20"};case"red":return{btnHoverColor:"hover:bg-red-red20"};case"green":return{btnHoverColor:"hover:bg-green-green20"}}})(a);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("button",{onClick:r,disabled:l,className:"mr-16 w-86 h-32 rounded-20 ".concat(c," hover-transition ").concat(s&&"bg-blue-blue30"),children:"gray"===a?(0,n.jsx)("h1",{className:"H4 text-gray-grayscale40",children:t}):(0,n.jsx)("h1",{className:"H4 text-gray-grayscale40 hover:text-white ".concat(s&&"text-white"),children:t})})})}},31371:function(e,t,r){"use strict";var n=r(57437);r(2265),t.Z=e=>{let{label:t,disabled:r,selected:a=!1,variant:s,...l}=e;return(0,n.jsx)("button",{...l,disabled:r,className:"H4 w-79 h-34 rounded-full text-white hover:hover-transition ".concat((e=>{switch(e){case"blue":return"".concat(a?"bg-blue-blue50":"bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50");case"red":return"".concat(a?"bg-red-red40":"bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40");default:return""}})(s)),children:t})}},85776:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(57437);r(2265);var a={src:"/_next/static/media/Checked.2a02f83f.png",height:40,width:39,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEU3e941eNg2eNg2edo2e942dtU0ddI2edo3eNk5gOaHhQcyAAAACXRSTlP+/dqx7UQiy4HaUf1QAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMUlEQVR4nB3FyQ3AQAjAQJtjCf03HAk/xmRcyQKH6GaLw+YbsL98s0L1i1Wg6h6CEj8a4AC53DY/oQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},s={src:"/_next/static/media/UnChecked.bea25168.png",height:39,width:39,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVERERMaXFVVVU/Pz9mZmZ/f39VVVV1Ch9XAAAAB3RSTlN1AAMEBQQGqDJaiQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACRJREFUeJxjYIADFiYmJiY2BgYGJkZGRkZm/AxWRiYmRhaEZgAKMwBG4KHziQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},l={src:"/_next/static/media/UnCheckedDisabled.533783a4.png",height:20,width:20,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEXJycnKyspMaXHMzMzMzMzIyMjxNP9bAAAABnRSTlNyZAAUKEKaXv9sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nGNggABGBgYmEGAmksEMAiwMDIxgwMAKAAyhAGZ43VKEAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},c=r(20703),i=e=>{let{isChecked:t,setIsChecked:r,disabled:i}=e;return(0,n.jsx)(c.default,{className:"".concat(i?"cursor-default":"cursor-pointer"),src:t?a:i?l:s,alt:t?"Checked":i?"UnChecked":"UnCheckedDisabled",width:19.5,height:19.5,onClick:e=>{i||(e.stopPropagation(),r(!t))}})}},86716:function(e,t,r){"use strict";var n=r(57437);r(2265),t.Z=e=>{let{label:t,...r}=e;return(0,n.jsx)("button",{...r,className:"H4 w-118 h-31 rounded-8 text-white bg-red-red20 hover:bg-red-red30 hover:hover-transition active:bg-red-red40",children:t})}},26066:function(e,t,r){"use strict";var n=r(57437),a=r(20703),s=r(95343),l=r(42866);r(2265),t.Z=e=>{let{bgColor:t,onCancel:r}=e;return(0,n.jsxs)("div",{className:"".concat(t||"bg-blue-blue30"," w-full h-39  flex justify-between pl-15 rounded-t-8"),children:[(0,n.jsx)(a.default,{src:s.Z,alt:"PromptLogo",className:"object-contain",width:39,height:11.65}),(0,n.jsx)("button",{className:"hover:bg-red-red30 ".concat(t||"bg-blue-blue30"," w-39 h-39 flex items-center justify-center rounded-tr-8 hover-transition"),onClick:r,children:(0,n.jsx)(a.default,{src:l.Z,alt:"PromptOut",className:"object-contain",width:10,height:10})})]})}},79517:function(e,t,r){"use strict";var n=r(57437),a=r(2265),s=r(54887);t.Z=e=>{let{children:t,isOpen:r}=e;return(0,a.useEffect)(()=>(r?window.document.body.style.overflow="hidden":window.document.body.style.overflow="auto",()=>{window.document.body.style.overflow="auto"}),[r]),(0,s.createPortal)((0,n.jsx)("div",{className:"fixed z-backdrop top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center",children:(0,n.jsx)("div",{className:"xl:scale-65 xxl:scale-80 lg:scale-65 md:scale-50 sm:scale-40",children:null!=t?t:null})}),document.body)}},73122:function(e,t,r){"use strict";var n=r(57437);r(2265),t.Z=e=>{let{colspan:t}=e;return(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:t,className:"h-full",children:(0,n.jsx)("div",{className:"flex justify-center items-center h-693",children:(0,n.jsx)("h1",{className:"H1 text-gray-grayscale30",children:"리스트가 비었습니다."})})})})}},91723:function(e,t,r){"use strict";var n=r(57437),a=r(20703),s=r(22992),l=r(9088),c=r(26066);t.Z=e=>{let{variant:t,label:r,onConfirm:i,onCancel:o,textLeft:u,textRight:d}=e,{bgHeader:A}=(e=>{switch(e){case"blue":default:return{bgHeader:"bg-blue-blue30"};case"red":return{bgHeader:"bg-red-red20"};case"green":return{bgHeader:"bg-green-green20"}}})(t);return(0,n.jsxs)("div",{className:"w-456 h-194 flex flex-col items-center rounded-8 shadow-xl bg-white pb-15",children:[(0,n.jsx)(c.Z,{bgColor:A,onCancel:o}),(0,n.jsx)(a.default,{src:s.Z,className:"mt-19 mb-16",width:22,height:19,alt:"PromptWarning"}),(0,n.jsx)("h1",{className:"alert-cap text-gray-grayscale50 text-center",children:r.split("\\n").map((e,t)=>(0,n.jsx)("p",{className:"leading-25",children:e},t))}),(0,n.jsxs)("div",{className:"ml-auto mt-auto",children:[(0,n.jsx)(l.Z,{label:u||"취소",onClick:o,hoverColor:t}),(0,n.jsx)(l.Z,{label:d||"확인",onClick:i,hoverColor:t})]})]})}},58640:function(e,t,r){"use strict";r.d(t,{_:function(){return n}});let n="https://www.dormease-dev.kro.kr"},89652:function(e,t,r){"use strict";r.d(t,{L:function(){return n},z:function(){return a}});let n="ACCESS_TOKEN",a="REFRESH_TOKEN"},28771:function(e,t,r){"use strict";var n=r(57437),a=r(2265),s=r(91723),l=r(79517);t.Z=(e,t,r,c)=>{let[i,o]=(0,a.useState)(!1),[u,d]=(0,a.useState)(null),A=async()=>{await t(u),o(!1)};return{showConfirmDialog:e=>{d(e),o(!0)},ConfirmDialogComponent:i?(0,n.jsx)(l.Z,{isOpen:!0,children:(0,n.jsx)(s.Z,{variant:r,label:e,onConfirm:A,onCancel:()=>{o(!1),c&&c()}})}):null}}},36824:function(e,t,r){"use strict";var n=r(2265);t.Z=e=>{let{isLoading:t,isEndReached:r,onIntersect:a}=e,s=(0,n.useRef)(null),l=(0,n.useCallback)(e=>{!t&&(s.current&&s.current.disconnect(),s.current=new IntersectionObserver(e=>{e[0].isIntersecting&&!r&&a()}),e&&s.current.observe(e))},[t,r,a]);return(0,n.useEffect)(()=>()=>{var e;return null===(e=s.current)||void 0===e?void 0:e.disconnect()},[]),l}},91355:function(e,t,r){"use strict";r.d(t,{ZZ:function(){return a},jd:function(){return s},oh:function(){return l}});var n=r(32153);let a=(0,n.cn)({key:"navState",default:!1}),s=(0,n.cn)({key:"editState",default:!1}),l=(0,n.cn)({key:"targetRouteState",default:""})},2920:function(e,t,r){"use strict";r.d(t,{M2:function(){return s},fG:function(){return l},p6:function(){return a},vQ:function(){return n}});let n=(()=>{let e=new Date,t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return"".concat(t,"-").concat(r,"-").concat(n)})(),a=e=>{let t=new Date(e),r=String(t.getFullYear()).slice(2),n=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return"".concat(r,".").concat(n,".").concat(a)},s=()=>{let e=new Date,t=e.getFullYear(),r=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");return"".concat(t,"년 ").concat(r,"월 ").concat(n,"일")},l=()=>{let e=new Date;return"오늘은 ".concat(["일요일","월요일","화요일","수요일","목요일","금요일","토요일"][e.getDay()],"입니다.")}},75518:function(e,t,r){"use strict";var n=r(77871),a=r(89652);let s=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.Z.getToken(a.L);if(!r)throw Error("No access token found");let s={...t.headers,Authorization:"Bearer ".concat(r)},l=await fetch(e,{...t,headers:s});if(!l.ok)throw 401===l.status&&(n.Z.removeToken(a.L),n.Z.removeToken(a.z),alert("세션이 만료되었습니다. 다시 로그인해 주세요.")),Error("Failed to fetch data");return 204===l.status||201===l.status?{}:l.json()};t.Z=s},77871:function(e,t){"use strict";t.Z={saveToken:(e,t)=>{localStorage.setItem(e,t)},getToken:e=>localStorage.getItem(e),removeToken:e=>{localStorage.removeItem(e)}}},95343:function(e,t){"use strict";t.Z={src:"/_next/static/media/PromptLogo.692c0d92.png",height:13,width:39,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEX///////////////////////////////////////8V2MxSAAAACnRSTlPlmoJy+43FvWlJljCSDAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACFJREFUeJwFwYEBADAIwrDCxOn/D5vAhDw+2qanBFbF9gEEtABSm4AZFAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},42866:function(e,t){"use strict";t.Z={src:"/_next/static/media/PromptOut.98b7927a.png",height:12,width:12,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEX///////////////9MaXH///91ewZhAAAABnRSTlNA0QMxAHpSp+N/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nEWLsQ0AMAyDcEz/f7lT0w0J4OCMHAhKQNIGGZvU+bBq47dfE2gAiTtnxw0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},22992:function(e,t){"use strict";t.Z={src:"/_next/static/media/PromptWarning.99ab5e8b.png",height:21,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAHlBMVEXXNTXXNTVMaXHWNTXXNTXXNTWqVVXUODjYNzfWNTXpH04wAAAACnRSTlN9jQA8LFoDEkykCmOTUQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJwdwYkNADAMAjE4SJ/9F65UW4ANaDEzwxLbiTdCOSdCNQmuXBoqXX33ARTdAKE2+uYqAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7}},25566:function(e){var t,r,n,a=e.exports={};function s(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var i=[],o=!1,u=-1;function d(){o&&n&&(o=!1,n.length?i=n.concat(i):u=-1,i.length&&A())}function A(){if(!o){var e=c(d);o=!0;for(var t=i.length;t;){for(n=i,i=[];++u<t;)n&&n[u].run();u=-1,t=i.length}n=null,o=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function g(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];i.push(new h(e,t)),1!==i.length||o||c(A)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=g,a.addListener=g,a.once=g,a.off=g,a.removeListener=g,a.removeAllListeners=g,a.emit=g,a.prependListener=g,a.prependOnceListener=g,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},function(e){e.O(0,[691,703,4898,4817,2971,8069,1744],function(){return e(e.s=2306)}),_N_E=e.O()}]);