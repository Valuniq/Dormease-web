(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8772],{39249:function(e,t,n){Promise.resolve().then(n.bind(n,69589))},69589:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(57437),a=n(58640),s=n(97124),i=n(94817);let l=()=>{var e,t,n;let{data:r,error:l,size:c,setSize:o}=(0,i.ZP)((e,t)=>t&&0===t.information.dataList.length?null:"".concat(a._,"/api/v1/web/users/management/delete?page=").concat(e+1),s.Z),d=r?r.reduce((e,t)=>e.concat(t.information.dataList),[]):[],u=!r&&!l||c>0&&r&&void 0===r[c-1];return{withdrawalData:d,error:l,isLoadingMore:u,size:c,setSize:o,isReachingEnd:(null==r?void 0:null===(e=r[0])||void 0===e?void 0:e.information.dataList.length)===0||r&&(null===(t=r[r.length-1])||void 0===t?void 0:t.information.pageInfo.currentPage)===(null===(n=r[r.length-1])||void 0===n?void 0:n.information.pageInfo.totalPage)||!1}},c=e=>{var t,n,r;let{data:l,error:c,size:o,setSize:d}=(0,i.ZP)((t,n)=>n&&0===n.information.dataList.length?null:"".concat(a._,"/api/v1/web/users/management/delete/search?page=").concat(t+1,"&keyword=").concat(e),s.Z),u=l?l.reduce((e,t)=>e.concat(t.information.dataList),[]):[],h=!l&&!c||o>0&&l&&void 0===l[o-1];return{withdrawalSearchData:u,error:c,isLoadingMore:h,size:o,setSize:d,isReachingEnd:(null==l?void 0:null===(t=l[0])||void 0===t?void 0:t.information.dataList.length)===0||l&&(null===(n=l[l.length-1])||void 0===n?void 0:n.information.pageInfo.currentPage)===(null===(r=l[l.length-1])||void 0===r?void 0:r.information.pageInfo.totalPage)||!1}};var o=n(11867),d=n(2265),u=(0,d.forwardRef)((e,t)=>{let{index:n,name:a,studentNumber:s,bonusPoint:i,minusPoint:l,deletedAt:c}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("tr",{ref:t,className:"table rounded-5 w-[1090px] H4-caption h-38 text-nowrap relative align-middle cursor-pointer",children:[(0,r.jsx)("td",{className:"w-[8%]",children:n+1}),(0,r.jsx)("td",{className:"w-[22%]",children:a}),(0,r.jsx)("td",{className:"w-[20%]",children:s}),(0,r.jsx)("td",{className:"w-[17%]",children:i}),(0,r.jsx)("td",{className:"w-[18%]",children:l}),(0,r.jsx)("td",{className:"w-[15%]",children:c.replace(/-/g,".")})]}),(0,r.jsx)("tr",{className:"h-14"})]})}),h=n(73122),m=n(36824),g=e=>{let{list:t,isLoading:n,isEndReached:a,setSize:s}=e,i=(0,m.Z)({isLoading:n,isEndReached:a,onIntersect:()=>s(e=>e+1)});return(0,r.jsxs)("table",{className:"text-nowrap text-center text-gray-grayscale50",children:[(0,r.jsxs)("thead",{className:"table w-[1090px]",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"H4 w-[8%]",children:"번 호"}),(0,r.jsx)("th",{className:"H4 w-[22%]",children:"이 름"}),(0,r.jsx)("th",{className:"H4 w-[20%]",children:"학 번"}),(0,r.jsx)("th",{className:"H4 w-[17%]",children:"상 점"}),(0,r.jsx)("th",{className:"H4 w-[18%]",children:"벌 점"}),(0,r.jsx)("th",{className:"H4 w-[15%]",children:"탈퇴 날짜"})]}),(0,r.jsx)("tr",{className:"h-15 border-b-1"})]}),t&&t.length>0?(0,r.jsxs)("tbody",{className:"w-[1104px] block h-677 overflow-y-auto scrollbar-table",children:[(0,r.jsx)("tr",{className:"h-15"}),t.map((e,n)=>n===t.length-1?(0,r.jsx)(u,{id:e.id,index:n,name:e.name,studentNumber:e.studentNumber,bonusPoint:e.bonusPoint,minusPoint:e.minusPoint,deletedAt:e.deletedAt,ref:i},n):(0,r.jsx)(u,{id:e.id,index:n,name:e.name,studentNumber:e.studentNumber,bonusPoint:e.bonusPoint,minusPoint:e.minusPoint,deletedAt:e.deletedAt},n))]}):(0,r.jsx)("tbody",{children:(0,r.jsx)(h.Z,{colspan:6})})]})},x=e=>{let{list:t,input:n,setInput:a,isLoading:s,isEndReached:i,setSize:l}=e;return(0,r.jsxs)("div",{className:"flex flex-col w-[1145px] relative",children:[(0,r.jsxs)("div",{className:"flex items-center mb-32",children:[(0,r.jsx)("div",{className:"flex justify-center w-[1090px]",children:(0,r.jsx)("h1",{className:"H0 text-gray-grayscale50 text-nowrap",children:"탈퇴 회원 관리"})}),t&&(0,r.jsx)("div",{className:"absolute right-0",children:(0,r.jsx)(o.Z,{input:n,setInput:a,placeholder:"이름 또는 학번"})})]}),(0,r.jsx)(g,{list:t,isLoading:s,isEndReached:i,setSize:l})]})},f=()=>{let[e,t]=(0,d.useState)(""),{withdrawalData:n,error:a,isLoadingMore:s,size:i,setSize:o,isReachingEnd:u}=l(),{withdrawalSearchData:h,error:m,isLoadingMore:g,size:f,setSize:v,isReachingEnd:A}=c(e);if((0,d.useEffect)(()=>{e&&v(1)},[e,v]),a||m)return console.error("Error fetching withdrawal Member data:",a||m),(0,r.jsx)("div",{children:"Error loading data"});let j=e?h:n,w=e?g:s,p=e?A:u;return(0,r.jsx)(x,{list:j,input:e,setInput:t,isLoading:null!=w&&w,isEndReached:null!=p&&p,setSize:e?v:o})}},11867:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(57437),a=n(20703),s={src:"/_next/static/media/SearchIcon.fd87d628.png",height:20,width:20,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEW7u7vMzMzNzc3Ozs7MzMzLy8vLy8vOzs6cMFoWAAAACHRSTlMBlqENf1hlKKFJ7xkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAwSURBVHicJYpJCgBADMJi7fL/Hw8yOUiQwJQ0wAqIlQELitD3xTLbaTKrVuvyn7l6DrcAeLXaQ4sAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},i=e=>{let{input:t,setInput:n,placeholder:i}=e;return(0,r.jsxs)("div",{className:"".concat(t?"border-gray-grayscale50":"border-gray-grayscale30"," focus:border-gray-grayscale40 border-[1.5px] w-380 h-38 flex items-center rounded-5"),children:[(0,r.jsx)("input",{className:"outline-none H4-cation px-12 w-292 h-24  text-gray-grayscale50 placeholder:text-gray-grayscale30",placeholder:i,type:"text",value:t,onChange:e=>{n(e.target.value)}}),(0,r.jsx)(a.default,{src:s,width:18,height:18,className:"ml-auto mr-9 object-contain",alt:"SearchIcon"})]})}},73122:function(e,t,n){"use strict";var r=n(57437);n(2265),t.Z=e=>{let{colspan:t}=e;return(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:t,className:"h-full",children:(0,r.jsx)("div",{className:"flex justify-center items-center h-693",children:(0,r.jsx)("h1",{className:"H1 text-gray-grayscale30",children:"리스트가 비었습니다."})})})})}},58640:function(e,t,n){"use strict";n.d(t,{_:function(){return r}});let r="https://www.dormease-dev.kro.kr"},89652:function(e,t,n){"use strict";n.d(t,{L:function(){return r},z:function(){return a}});let r="ACCESS_TOKEN",a="REFRESH_TOKEN"},36824:function(e,t,n){"use strict";var r=n(2265);t.Z=e=>{let{isLoading:t,isEndReached:n,onIntersect:a}=e,s=(0,r.useRef)(null),i=(0,r.useCallback)(e=>{!t&&(s.current&&s.current.disconnect(),s.current=new IntersectionObserver(e=>{e[0].isIntersecting&&!n&&a()}),e&&s.current.observe(e))},[t,n,a]);return(0,r.useEffect)(()=>()=>{var e;return null===(e=s.current)||void 0===e?void 0:e.disconnect()},[]),i}},97124:function(e,t,n){"use strict";var r=n(77871),a=n(89652);let s=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.Z.getToken(a.L);if(!n)throw Error("No access token found");let s={...t.headers,Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},i=await fetch(e,{...t,headers:s});if(!i.ok)throw 401===i.status&&(r.Z.removeToken(a.L),r.Z.removeToken(a.z),alert("세션이 만료되었습니다. 다시 로그인해 주세요.")),Error("Failed to fetch data");return i.json()};t.Z=s},77871:function(e,t){"use strict";t.Z={saveToken:(e,t)=>{localStorage.setItem(e,t)},getToken:e=>localStorage.getItem(e),removeToken:e=>{localStorage.removeItem(e)}}}},function(e){e.O(0,[703,4898,4817,2971,8069,1744],function(){return e(e.s=39249)}),_N_E=e.O()}]);