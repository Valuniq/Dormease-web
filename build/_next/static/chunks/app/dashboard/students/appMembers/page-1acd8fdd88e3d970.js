(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4307],{45332:function(e,t,n){Promise.resolve().then(n.bind(n,47863))},47863:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var s=n(57437),r=n(2265),a=n(11867),c=n(58640),i=n(75518),o=n(94817);let l=function(){var e,t,n;let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"createdDate",r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],{data:a,error:l,size:d,setSize:u,mutate:h,isValidating:g}=(0,o.ZP)((e,t)=>0===e?"".concat(c._,"/api/v1/web/users/management?sortBy=").concat(s,"&isAscending=").concat(r,"&page=1"):t&&0===t.information.dataList.length?null:"".concat(c._,"/api/v1/web/users/management?sortBy=").concat(s,"&isAscending=").concat(r,"&page=").concat(e+1),i.Z,{initialSize:1}),m=a?a.reduce((e,t)=>e.concat(t.information.dataList),[]):[],x=!a&&!l||d>0&&g&&a&&void 0===a[d-1];return{userData:m,error:l,isLoadingMore:x,size:d,setSize:u,isEndReached:(null==a?void 0:null===(e=a[0])||void 0===e?void 0:e.information.dataList.length)===0||a&&(null===(t=a[a.length-1])||void 0===t?void 0:t.information.pageInfo.currentPage)===(null===(n=a[a.length-1])||void 0===n?void 0:n.information.pageInfo.totalPage)||!1,mutate:h}},d=function(e){var t,n,s;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"createdDate",a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{data:l,error:d,size:u,setSize:h,mutate:g,isValidating:m}=(0,o.ZP)((t,n)=>0===t?"".concat(c._,"/api/v1/web/users/management/search?keyword=").concat(e,"&sortBy=").concat(r,"&isAscending=").concat(a,"&page=1"):n&&0===n.information.dataList.length?null:"".concat(c._,"/api/v1/web/users/management/search?keyword=").concat(e,"&sortBy=").concat(r,"&isAscending=").concat(a,"&page=").concat(t+1),i.Z,{initialSize:1}),x=l?l.reduce((e,t)=>e.concat(t.information.dataList),[]):[],f=!l&&!d||u>0&&m&&l&&void 0===l[u-1];return{userData:x,error:d,isLoadingMore:f,size:u,setSize:h,isEndReached:(null==l?void 0:null===(t=l[0])||void 0===t?void 0:t.information.dataList.length)===0||l&&(null===(n=l[l.length-1])||void 0===n?void 0:n.information.pageInfo.currentPage)===(null===(s=l[l.length-1])||void 0===s?void 0:s.information.pageInfo.totalPage)||!1,mutate:g}};var u=(0,r.forwardRef)((e,t)=>{let{index:n,id:r,name:a,studentNumber:c,phoneNumber:i,bonusPoint:o,minusPoint:l,createdAt:d}=e;return(0,s.jsxs)("tr",{ref:t,className:"h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50",children:[(0,s.jsx)("td",{className:"text-center",children:n}),(0,s.jsx)("td",{className:"text-center",children:a}),(0,s.jsx)("td",{className:"text-center",children:c}),(0,s.jsx)("td",{className:"text-center",children:i}),(0,s.jsx)("td",{className:"text-center",children:o}),(0,s.jsx)("td",{className:"text-center",children:l}),(0,s.jsx)("td",{className:"text-center",children:d})]})}),h=n(25862),g=n(36824),m=n(73122),x=e=>{let{isLoading:t,isEndReached:n,setSize:a,appMemberManagementLists:c,sortConfig:i,setSortConfig:o}=e,l=e=>{let t=i.sortBy!==e||!i.isAscending;o({sortBy:e,isAscending:t})},d=e=>i.sortBy===e?i.isAscending?"rotate-0 ":"rotate-180":"",x=e=>i.sortBy===e?"#3678D8":"#323232",f=(0,g.Z)({isLoading:t,isEndReached:n,onIntersect:()=>a(e=>e+1)});return(0,s.jsx)("div",{className:"w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50",children:(0,s.jsxs)("table",{className:"w-[1305px]",children:[(0,s.jsxs)("thead",{className:" w-full h-36 bg-white text-gray-grayscale50 sticky top-0 z-1",children:[(0,s.jsxs)("tr",{className:"",children:[(0,s.jsx)("th",{className:"H4",children:"번호"}),(0,s.jsx)("th",{className:"H4",children:"이름"}),(0,s.jsx)("th",{className:"H4",children:"학번"}),(0,s.jsx)("th",{className:"H4",children:"휴대전화"}),(0,s.jsx)("th",{className:"h-30 rounded-8  cursor-pointer",onClick:()=>l("bonusPoint"),style:{backgroundColor:"bonusPoint"===i.sortBy?"#DAE9FF":"transparent"},children:(0,s.jsxs)("div",{className:"H4 flex items-center justify-center text-center ",children:[(0,s.jsx)("h1",{className:"mr-4",children:"상점"}),(0,s.jsx)(h.Z,{className:"object-contain ".concat(d("bonusPoint")),width:16,height:8,fillColor:x("bonusPoint")})]})}),(0,s.jsx)("th",{className:"h-30 rounded-8  cursor-pointer",onClick:()=>l("minusPoint"),style:{backgroundColor:"minusPoint"===i.sortBy?"#DAE9FF":"transparent"},children:(0,s.jsxs)("div",{className:"H4 flex items-center justify-center text-center w-full",children:[(0,s.jsx)("h1",{className:"mr-4",children:"벌점"}),(0,s.jsx)(h.Z,{className:"object-contain ".concat(d("minusPoint")),width:16,height:8,fillColor:x("minusPoint")})]})}),(0,s.jsx)("th",{className:"h-30 rounded-8 cursor-pointer",onClick:()=>l("createdDate"),style:{backgroundColor:"createdDate"===i.sortBy?"#DAE9FF":"transparent"},children:(0,s.jsxs)("div",{className:"H4 flex items-center justify-center text-center w-full",children:[(0,s.jsx)("h1",{className:"mr-4",children:"생성일자"}),(0,s.jsx)(h.Z,{className:"object-contain ".concat(d("createdDate")),width:16,height:8,fillColor:x("createdDate")})]})})]}),(0,s.jsx)("tr",{children:(0,s.jsx)("th",{colSpan:8,children:(0,s.jsx)("div",{className:"w-[1305px] h-18 border-b-1 border-b-gray-grayscale50"})})})]}),c&&c.length>0?(0,s.jsxs)("tbody",{className:"overflow-y-scroll",children:[(0,s.jsx)("tr",{className:"h-15"}),c.map((e,t)=>(c.length,(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)(u,{index:t+1,id:e.id,name:e.name,studentNumber:e.studentNumber,phoneNumber:e.phoneNumber,bonusPoint:e.bonusPoint,minusPoint:e.minusPoint,createdAt:e.createdAt,ref:f}),(0,s.jsx)("tr",{className:"h-15"})]},"".concat(e.id,"-").concat(t))))]}):(0,s.jsx)("tbody",{children:(0,s.jsx)(m.Z,{colspan:7})})]})})},f=()=>{let[e,t]=(0,r.useState)({sortBy:"createdDate",isAscending:!1}),[n,c]=(0,r.useState)(""),[i,o]=(0,r.useState)(!1),u=l(e.sortBy,e.isAscending),h=d(n,e.sortBy,e.isAscending),{userData:g,error:m,isLoadingMore:f,size:v,setSize:j,isEndReached:y,mutate:A}=i?h:u;return(0,r.useEffect)(()=>{""===n&&o(!1)},[n]),(0,s.jsxs)("div",{className:"w-[1250px]",children:[(0,s.jsxs)("div",{className:"flex items-center justify-end mb-44",children:[(0,s.jsx)("h1",{className:"H0 text-gray-grayscale50 mr-117",children:"앱 회원관리"}),(0,s.jsx)(a.Z,{input:n,setInput:e=>{c(e),o(!0)},placeholder:"이름 또는 학번"})]}),(0,s.jsx)(x,{appMemberManagementLists:g,sortConfig:e,setSortConfig:t,isLoading:null!=f&&f,isEndReached:y,setSize:j})]})}},25862:function(e,t,n){"use strict";var s=n(57437);n(2265),t.Z=e=>{let{className:t,width:n,height:r,fillColor:a}=e;return(0,s.jsx)("svg",{className:t,width:n,height:r,viewBox:"0 0 16 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M7.29289 0.707107L1.70711 6.29289C1.07714 6.92286 1.52331 8 2.41421 8L13.5858 8C14.4767 8 14.9229 6.92286 14.2929 6.2929L8.70711 0.707108C8.31658 0.316584 7.68342 0.316583 7.29289 0.707107Z",fill:a})})}},11867:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var s=n(57437),r=n(20703),a={src:"/_next/static/media/SearchIcon.fd87d628.png",height:20,width:20,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEW7u7vMzMzNzc3Ozs7MzMzLy8vLy8vOzs6cMFoWAAAACHRSTlMBlqENf1hlKKFJ7xkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAwSURBVHicJYpJCgBADMJi7fL/Hw8yOUiQwJQ0wAqIlQELitD3xTLbaTKrVuvyn7l6DrcAeLXaQ4sAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},c=e=>{let{input:t,setInput:n,placeholder:c,handleSearch:i}=e;return(0,s.jsxs)("div",{className:"".concat(t?"border-gray-grayscale50":"border-gray-grayscale30"," focus:border-gray-grayscale40 border-[1.5px] w-380 h-38 flex items-center rounded-5"),children:[(0,s.jsx)("input",{className:"outline-none H4-cation px-12 w-292 h-24  text-gray-grayscale50 placeholder:text-gray-grayscale30",placeholder:c,type:"text",value:t,onChange:e=>{n(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&i&&i()}}),(0,s.jsx)(r.default,{src:a,width:18,height:18,className:"ml-auto mr-9 object-contain",alt:"SearchIcon",onClick:()=>i&&i()})]})}},73122:function(e,t,n){"use strict";var s=n(57437);n(2265),t.Z=e=>{let{colspan:t}=e;return(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:t,className:"h-full",children:(0,s.jsx)("div",{className:"flex justify-center items-center",children:(0,s.jsx)("h1",{className:"H1 text-gray-grayscale30",children:"리스트가 비었습니다."})})})})}},58640:function(e,t,n){"use strict";n.d(t,{_:function(){return s}});let s="https://www.dormease-dev.kro.kr"},89652:function(e,t,n){"use strict";n.d(t,{L:function(){return s},z:function(){return r}});let s="ACCESS_TOKEN",r="REFRESH_TOKEN"},36824:function(e,t,n){"use strict";var s=n(2265);t.Z=e=>{let{isLoading:t,isEndReached:n,onIntersect:r}=e,a=(0,s.useRef)(null),c=(0,s.useCallback)(e=>{!t&&(a.current&&a.current.disconnect(),a.current=new IntersectionObserver(e=>{e[0].isIntersecting&&!n&&r()}),e&&a.current.observe(e))},[t,n,r]);return(0,s.useEffect)(()=>()=>{var e;return null===(e=a.current)||void 0===e?void 0:e.disconnect()},[]),c}},75518:function(e,t,n){"use strict";var s=n(77871),r=n(89652);let a=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=s.Z.getToken(r.L);if(!n)throw Error("No access token found");let a={...t.headers,Authorization:"Bearer ".concat(n)},c=await fetch(e,{...t,headers:a});if(!c.ok)throw 401===c.status&&(s.Z.removeToken(r.L),s.Z.removeToken(r.z),alert("세션이 만료되었습니다. 다시 로그인해 주세요.")),Error("Failed to fetch data");return 204===c.status||201===c.status?{}:c.json()};t.Z=a},77871:function(e,t){"use strict";t.Z={saveToken:(e,t)=>{localStorage.setItem(e,t)},getToken:e=>localStorage.getItem(e),removeToken:e=>{localStorage.removeItem(e)}}}},function(e){e.O(0,[703,4898,4817,2971,8069,1744],function(){return e(e.s=45332)}),_N_E=e.O()}]);