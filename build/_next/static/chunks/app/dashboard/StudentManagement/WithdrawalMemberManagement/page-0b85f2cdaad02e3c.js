(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{9249:function(e,t,n){Promise.resolve().then(n.bind(n,9589))},9589:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(7437),r=n(8640),s=n(7124),l=n(4817);let i=()=>{var e,t,n;let{data:a,error:i,size:c,setSize:o}=(0,l.ZP)((e,t)=>t&&0===t.information.dataList.length?null:"".concat(r._,"/api/v1/web/users/management/delete?page=").concat(e+1),s.Z),d=a?a.reduce((e,t)=>e.concat(t.information.dataList),[]):[],u=!a&&!i||c>0&&a&&void 0===a[c-1];return{withdrawalData:d,error:i,isLoadingMore:u,size:c,setSize:o,isReachingEnd:(null==a?void 0:null===(e=a[0])||void 0===e?void 0:e.information.dataList.length)===0||a&&(null===(t=a[a.length-1])||void 0===t?void 0:t.information.pageInfo.currentPage)===(null===(n=a[a.length-1])||void 0===n?void 0:n.information.pageInfo.totalPage)||!1}},c=e=>{var t,n,a;let{data:i,error:c,size:o,setSize:d}=(0,l.ZP)((t,n)=>n&&0===n.information.dataList.length?null:"".concat(r._,"/api/v1/web/users/management/delete/search?page=").concat(t+1,"&keyword=").concat(e),s.Z),u=i?i.reduce((e,t)=>e.concat(t.information.dataList),[]):[],h=!i&&!c||o>0&&i&&void 0===i[o-1];return{withdrawalSearchData:u,error:c,isLoadingMore:h,size:o,setSize:d,isReachingEnd:(null==i?void 0:null===(t=i[0])||void 0===t?void 0:t.information.dataList.length)===0||i&&(null===(n=i[i.length-1])||void 0===n?void 0:n.information.pageInfo.currentPage)===(null===(a=i[i.length-1])||void 0===a?void 0:a.information.pageInfo.totalPage)||!1}};var o=n(1867),d=n(2265),u=e=>{let{id:t,name:n,studentNumber:r,bonusPoint:s,minusPoint:l,deletedAt:i}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("tr",{className:"table rounded-5 w-[1090px] H4-caption h-38 text-nowrap relative align-middle cursor-pointer",children:[(0,a.jsx)("td",{className:"w-[8%]",children:t}),(0,a.jsx)("td",{className:"w-[22%]",children:n}),(0,a.jsx)("td",{className:"w-[20%]",children:r}),(0,a.jsx)("td",{className:"w-[17%]",children:s}),(0,a.jsx)("td",{className:"w-[18%]",children:l}),(0,a.jsx)("td",{className:"w-[15%]",children:i})]}),(0,a.jsx)("tr",{className:"h-14"})]})},h=n(3122),m=e=>{let{list:t}=e;return(0,a.jsxs)("table",{className:"text-nowrap text-center text-gray-grayscale50",children:[(0,a.jsxs)("thead",{className:"table w-[1090px]",children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"H4 w-[8%]",children:"번 호"}),(0,a.jsx)("th",{className:"H4 w-[22%]",children:"이 름"}),(0,a.jsx)("th",{className:"H4 w-[20%]",children:"학 번"}),(0,a.jsx)("th",{className:"H4 w-[17%]",children:"상 점"}),(0,a.jsx)("th",{className:"H4 w-[18%]",children:"벌 점"}),(0,a.jsx)("th",{className:"H4 w-[15%]",children:"탈퇴 날짜"})]}),(0,a.jsx)("tr",{className:"h-15 border-b-1"})]}),t?(0,a.jsxs)("tbody",{className:"w-[1104px] block h-677 overflow-y-auto scrollbar-table",children:[(0,a.jsx)("tr",{className:"h-15"}),t.map(e=>(0,a.jsx)(u,{id:e.id,name:e.name,studentNumber:e.studentNumber,bonusPoint:e.bonusPoint,minusPoint:e.minusPoint,deletedAt:e.deletedAt},e.id))]}):(0,a.jsx)("tbody",{children:(0,a.jsx)(h.Z,{colspan:6})})]})},g=e=>{let{list:t,input:n,setInput:r}=e;return(0,a.jsxs)("div",{className:"flex flex-col w-[1145px] relative",children:[(0,a.jsxs)("div",{className:"flex items-center mb-32",children:[(0,a.jsx)("div",{className:"flex justify-center w-[1090px]",children:(0,a.jsx)("h1",{className:"H0 text-gray-grayscale50 text-nowrap",children:"탈퇴 회원 관리"})}),t&&(0,a.jsx)("div",{className:"absolute right-0",children:(0,a.jsx)(o.Z,{input:n,setInput:r,placeholder:"이름 또는 학번"})})]}),(0,a.jsx)(m,{list:t})]})},x=n(6824),f=()=>{let[e,t]=(0,d.useState)(""),{withdrawalData:n,error:r,isLoadingMore:s,size:l,setSize:o,isReachingEnd:u}=i(),{withdrawalSearchData:h,error:m,isLoadingMore:f,size:v,setSize:w,isReachingEnd:A}=c(e);if((0,d.useEffect)(()=>{e&&w(1)},[e,w]),r||m)return console.error("Error fetching withdrawal Member data:",r||m),(0,a.jsx)("div",{children:"Error loading data"});let j=e?h:n,p=e?f:s,N=e?A:u;return(0,a.jsxs)(x.Z,{isLoading:s||m,isReachingEnd:N,loadMore:()=>{e?w(v+1):o(l+1)},children:[(0,a.jsx)(g,{list:j,input:e,setInput:t}),p&&(0,a.jsx)(a.Fragment,{})]})}},1867:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(7437),r=n(703),s={src:"/_next/static/media/SearchIcon.fd87d628.png",height:20,width:20,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEW7u7vMzMzNzc3Ozs7MzMzLy8vLy8vOzs6cMFoWAAAACHRSTlMBlqENf1hlKKFJ7xkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAwSURBVHicJYpJCgBADMJi7fL/Hw8yOUiQwJQ0wAqIlQELitD3xTLbaTKrVuvyn7l6DrcAeLXaQ4sAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},l=e=>{let{input:t,setInput:n,placeholder:l}=e;return(0,a.jsxs)("div",{className:"".concat(t?"border-gray-grayscale50":"border-gray-grayscale30"," focus:border-gray-grayscale40 border-[1.5px] w-380 h-38 flex items-center rounded-5"),children:[(0,a.jsx)("input",{className:"outline-none H4-cation px-12 w-292 h-24  text-gray-grayscale50 placeholder:text-gray-grayscale30",placeholder:l,type:"text",value:t,onChange:e=>{n(e.target.value)}}),(0,a.jsx)(r.default,{src:s,width:18,height:18,className:"ml-auto mr-9 object-contain",alt:"SearchIcon"})]})}},3122:function(e,t,n){"use strict";var a=n(7437);n(2265),t.Z=e=>{let{colspan:t}=e;return(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:t,className:"h-full",children:(0,a.jsx)("div",{className:"flex justify-center items-center h-693",children:(0,a.jsx)("h1",{className:"H1 text-gray-grayscale30",children:"리스트가 비었습니다."})})})})}},8640:function(e,t,n){"use strict";n.d(t,{_:function(){return a}});let a="https://www.dormease-dev.kro.kr"},9652:function(e,t,n){"use strict";n.d(t,{L:function(){return a},z:function(){return r}});let a="ACCESS_TOKEN",r="REFRESH_TOKEN"},6824:function(e,t,n){"use strict";var a=n(7437),r=n(2265);t.Z=e=>{let{children:t,isLoading:n,isReachingEnd:s,loadMore:l}=e;return(0,r.useEffect)(()=>{let e=()=>{n||s||!(window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight-50)||l()};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[n,s,l]),(0,a.jsx)(a.Fragment,{children:t})}},7124:function(e,t,n){"use strict";var a=n(7871),r=n(9652);let s=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.Z.getToken(r.L);if(!n)throw Error("No access token found");let s={...t.headers,Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},l=await fetch(e,{...t,headers:s});if(!l.ok)throw 401===l.status&&(a.Z.removeToken(r.L),a.Z.removeToken(r.z),alert("세션이 만료되었습니다. 다시 로그인해 주세요.")),Error("Failed to fetch data");return l.json()};t.Z=s},7871:function(e,t){"use strict";t.Z={saveToken:(e,t)=>{localStorage.setItem(e,t)},getToken:e=>localStorage.getItem(e),removeToken:e=>{localStorage.removeItem(e)}}}},function(e){e.O(0,[703,898,817,971,69,744],function(){return e(e.s=9249)}),_N_E=e.O()}]);