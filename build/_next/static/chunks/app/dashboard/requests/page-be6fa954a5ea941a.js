(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6898],{82932:function(e,t,n){Promise.resolve().then(n.bind(n,54537))},47907:function(e,t,n){"use strict";var r=n(15313);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},46426:function(e,t){"use strict";t.J=void 0,t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};let{key:t="recoil-persist",storage:n=localStorage,converter:r=JSON}=e,s=(e,t,n,r)=>{r?delete t[n]:t[n]=e,c(t)},o=()=>{let e=n.getItem(t);return null==e?{}:"string"==typeof e?i(e):"function"==typeof e.then?e.then(i):{}},i=e=>{if(void 0===e)return{};try{return r.parse(e)}catch(e){return console.error(e),{}}},c=e=>{try{"function"==typeof n.mergeItem?n.mergeItem(t,r.stringify(e)):n.setItem(t,r.stringify(e))}catch(e){console.error(e)}};return{persistAtom:({onSet:e,node:t,trigger:n,setSelf:r})=>{if("get"===n){let e=o();"function"==typeof e.then&&e.then(e=>{e.hasOwnProperty(t.key)&&r(e[t.key])}),e.hasOwnProperty(t.key)&&r(e[t.key])}e(async(e,n,r)=>{let i=o();"function"==typeof i.then?i.then(n=>s(e,n,t.key,r)):s(e,i,t.key,r)})}}}},74929:function(e,t,n){"use strict";n.d(t,{GH:function(){return u},Jl:function(){return l},fg:function(){return c},ju:function(){return a}});var r=n(58640),s=n(75518),o=n(81252),i=n(94817);let c=()=>{var e,t,n;let{data:o,error:c,size:a,setSize:u}=(0,i.ZP)((e,t)=>t&&0===t.information.dataList.length?null:"".concat(r._,"/api/v1/web/requestments?page=").concat(e+1),s.Z),l=o?o.reduce((e,t)=>e.concat(t.information.dataList),[]):[],d=!o&&!c||a>0&&o&&void 0===o[a-1];return{requestData:l,error:c,isLoadingMore:d,size:a,setSize:u,isReachingEnd:(null==o?void 0:null===(e=o[0])||void 0===e?void 0:e.information.dataList.length)===0||o&&(null===(t=o[o.length-1])||void 0===t?void 0:t.information.pageInfo.currentPage)===(null===(n=o[o.length-1])||void 0===n?void 0:n.information.pageInfo.totalPage)||!1}},a=e=>{let{data:t,error:n}=(0,o.ZP)("".concat(r._,"/api/v1/web/requestments/").concat(e),s.Z);return{data:t,error:n,isLoading:!n&&!t}},u=async(e,t)=>await (0,s.Z)("".concat(r._,"/api/v1/web/requestments/").concat(e),{method:"PUT",body:JSON.stringify({progression:t}),headers:{"Content-Type":"application/json"}}),l=async e=>await (0,s.Z)("".concat(r._,"/api/v1/web/requestments/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}})},54537:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(57437),s=n(74929),o=n(2265),i=n(60852),c=(0,o.forwardRef)((e,t)=>{let{index:n,onRequestClick:s,item:o}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("tr",{ref:t,className:"table rounded-5 w-[1200px] H4-caption h-38 align-middle cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20",onClick:()=>s(o.requestmentId),children:[(0,r.jsx)("td",{className:"w-[8%]",children:n+1}),(0,r.jsx)("td",{className:"w-[56%] truncate max-w-500",children:o.title}),(0,r.jsx)("td",{className:"w-[11%]",children:o.writer}),(0,r.jsx)("td",{className:"w-[17%]",children:(0,i.r)(o.createdDate)}),(0,r.jsx)("td",{className:"w-[8%]",children:"IN_REVIEW"===o.progression?"검토중":"ANSWER_COMPLETED"===o.progression?"완료됨":"진행중"})]}),(0,r.jsx)("tr",{className:"h-14"})]})}),a=n(73122),u=n(36824),l=e=>{let{list:t,onRequestClick:n,isLoading:s,isEndReached:o,setSize:i}=e,l=(0,u.Z)({isLoading:s,isEndReached:o,onIntersect:()=>i(e=>e+1)});return(0,r.jsxs)("table",{className:"text-nowrap text-center text-gray-grayscale50",children:[(0,r.jsxs)("thead",{className:"table w-[1200px]",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"H4 w-[8%]",children:"번 호"}),(0,r.jsx)("th",{className:"H4 w-[56%]",children:"제 목"}),(0,r.jsx)("th",{className:"H4 w-[11%]",children:"작성자"}),(0,r.jsx)("th",{className:"H4 w-[17%]",children:"등록일"}),(0,r.jsx)("th",{className:"H4 w-[8%]",children:"답변여부"})]}),(0,r.jsx)("tr",{className:"h-15 border-b-1"})]}),t&&t.length>0?(0,r.jsxs)("tbody",{className:"w-[1214px] block h-677 overflow-y-auto scrollbar-table",children:[(0,r.jsx)("tr",{className:"h-15"}),t.map((e,s)=>s===t.length-1?(0,r.jsx)(c,{index:s,onRequestClick:n,item:e,ref:l},s):(0,r.jsx)(c,{index:s,onRequestClick:n,item:e},s))]}):s?(0,r.jsx)("tbody",{}):(0,r.jsx)("tbody",{children:(0,r.jsx)(a.Z,{colspan:5})})]})},d=n(47907),f=n(32153),h=n(48205),m=()=>{let e=(0,f.Zl)(h.H),t=(0,d.useRouter)(),{requestData:n,error:o,isLoadingMore:i,size:c,setSize:a,isReachingEnd:u}=(0,s.fg)();return(0,r.jsxs)("div",{className:"flex flex-col w-[1200px]",children:[(0,r.jsx)("h1",{className:"text-center H0 text-gray-grayscale50 text-nowrap",children:"요청사항"}),(0,r.jsx)(l,{list:n,onRequestClick:n=>{e(n),t.push("/dashboard/requests/details")},isLoading:null!=i&&i,isEndReached:null!=u&&u,setSize:a})]})}},60852:function(e,t,n){"use strict";n.d(t,{r:function(){return r}});let r=e=>(e.startsWith("20")?e.slice(2):e).replace(/-/g,".")},73122:function(e,t,n){"use strict";var r=n(57437);n(2265),t.Z=e=>{let{colspan:t}=e;return(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:t,className:"h-full",children:(0,r.jsx)("div",{className:"flex justify-center items-center h-693",children:(0,r.jsx)("h1",{className:"H1 text-gray-grayscale30",children:"리스트가 비었습니다."})})})})}},58640:function(e,t,n){"use strict";n.d(t,{_:function(){return r}});let r="https://www.dormease-dev.kro.kr"},89652:function(e,t,n){"use strict";n.d(t,{L:function(){return r},z:function(){return s}});let r="ACCESS_TOKEN",s="REFRESH_TOKEN"},36824:function(e,t,n){"use strict";var r=n(2265);t.Z=e=>{let{isLoading:t,isEndReached:n,onIntersect:s}=e,o=(0,r.useRef)(null),i=(0,r.useCallback)(e=>{!t&&(o.current&&o.current.disconnect(),o.current=new IntersectionObserver(e=>{e[0].isIntersecting&&!n&&s()}),e&&o.current.observe(e))},[t,n,s]);return(0,r.useEffect)(()=>()=>{var e;return null===(e=o.current)||void 0===e?void 0:e.disconnect()},[]),i}},48205:function(e,t,n){"use strict";n.d(t,{H:function(){return c}});var r=n(46426),s=n(32153);let o=window.sessionStorage,{persistAtom:i}=(0,r.J)({key:"requestIdState",storage:o}),c=(0,s.cn)({key:"requestIdState",default:0,effects_UNSTABLE:[i]})},75518:function(e,t,n){"use strict";var r=n(77871),s=n(89652);let o=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.Z.getToken(s.L);if(!n)throw Error("No access token found");let o={...t.headers,Authorization:"Bearer ".concat(n)},i=await fetch(e,{...t,headers:o});if(!i.ok)throw 401===i.status&&(r.Z.removeToken(s.L),r.Z.removeToken(s.z),alert("세션이 만료되었습니다. 다시 로그인해 주세요.")),Error("Failed to fetch data");return 204===i.status||201===i.status?{}:i.json()};t.Z=o},77871:function(e,t){"use strict";t.Z={saveToken:(e,t)=>{localStorage.setItem(e,t)},getToken:e=>localStorage.getItem(e),removeToken:e=>{localStorage.removeItem(e)}}},25566:function(e){var t,n,r,s=e.exports={};function o(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var a=[],u=!1,l=-1;function d(){u&&r&&(u=!1,r.length?a=r.concat(a):l=-1,a.length&&f())}function f(){if(!u){var e=c(d);u=!0;for(var t=a.length;t;){for(r=a,a=[];++l<t;)r&&r[l].run();l=-1,t=a.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new h(e,t)),1!==a.length||u||c(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},function(e){e.O(0,[691,4898,1252,4817,2971,8069,1744],function(){return e(e.s=82932)}),_N_E=e.O()}]);