(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4224],{57870:function(e,t,r){Promise.resolve().then(r.bind(r,56925))},47907:function(e,t,r){"use strict";var n=r(15313);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},46426:function(e,t){"use strict";t.J=void 0,t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};let{key:t="recoil-persist",storage:r=localStorage,converter:n=JSON}=e,s=(e,t,r,n)=>{n?delete t[r]:t[r]=e,c(t)},o=()=>{let e=r.getItem(t);return null==e?{}:"string"==typeof e?i(e):"function"==typeof e.then?e.then(i):{}},i=e=>{if(void 0===e)return{};try{return n.parse(e)}catch(e){return console.error(e),{}}},c=e=>{try{"function"==typeof r.mergeItem?r.mergeItem(t,n.stringify(e)):r.setItem(t,n.stringify(e))}catch(e){console.error(e)}};return{persistAtom:({onSet:e,node:t,trigger:r,setSelf:n})=>{if("get"===r){let e=o();"function"==typeof e.then&&e.then(e=>{e.hasOwnProperty(t.key)&&n(e[t.key])}),e.hasOwnProperty(t.key)&&n(e[t.key])}e(async(e,r,n)=>{let i=o();"function"==typeof i.then?i.then(r=>s(e,r,t.key,n)):s(e,i,t.key,n)})}}}},46719:function(e,t,r){"use strict";r.d(t,{f:function(){return c},j:function(){return a}});var n=r(58640),s=r(97124),o=r(81252),i=r(94817);let c=()=>{var e,t,r;let{data:o,error:c,size:a,setSize:l}=(0,i.ZP)((e,t)=>t&&0===t.information.dataList.length?null:"".concat(n._,"/api/v1/app/requestments?page=").concat(e+1),s.Z),u=o?o.reduce((e,t)=>e.concat(t.information.dataList),[]):[],d=!o&&!c||a>0&&o&&void 0===o[a-1];return{requestData:u,error:c,isLoadingMore:d,size:a,setSize:l,isReachingEnd:(null==o?void 0:null===(e=o[0])||void 0===e?void 0:e.information.dataList.length)===0||o&&(null===(t=o[o.length-1])||void 0===t?void 0:t.information.pageInfo.currentPage)===(null===(r=o[o.length-1])||void 0===r?void 0:r.information.pageInfo.totalPage)||!1}},a=e=>{let{data:t,error:r}=(0,o.ZP)("".concat(n._,"/api/v1/app/requestments/").concat(e),s.Z);return{data:t,error:r,isLoading:!r&&!t}}},56925:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(57437),s=r(46719),o=r(2265),i=r(60852),c=(0,o.forwardRef)((e,t)=>{let{index:r,requestmentId:s,title:o,writer:c,createdDate:a,progression:l,onRequestClick:u}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("tr",{ref:t,className:"table rounded-5 w-[1200px] H4-caption h-38 align-middle cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20",onClick:()=>u(s),children:[(0,n.jsx)("td",{className:"w-[8%]",children:r+1}),(0,n.jsx)("td",{className:"w-[56%] truncate max-w-500",children:o}),(0,n.jsx)("td",{className:"w-[11%]",children:c}),(0,n.jsx)("td",{className:"w-[17%]",children:(0,i.r)(a)}),(0,n.jsx)("td",{className:"w-[8%]",children:"IN_REVIEW"===l?"검토중":"ANSWER_COMPLETED"===l?"완료됨":"진행중"})]}),(0,n.jsx)("tr",{className:"h-14"})]})}),a=r(73122),l=r(36824),u=e=>{let{list:t,onRequestClick:r,isLoading:s,isEndReached:o,setSize:i}=e,u=(0,l.Z)({isLoading:s,isEndReached:o,onIntersect:()=>i(e=>e+1)});return(0,n.jsxs)("table",{className:"text-nowrap text-center text-gray-grayscale50",children:[(0,n.jsxs)("thead",{className:"table w-[1200px]",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"H4 w-[8%]",children:"번 호"}),(0,n.jsx)("th",{className:"H4 w-[56%]",children:"제 목"}),(0,n.jsx)("th",{className:"H4 w-[11%]",children:"작성자"}),(0,n.jsx)("th",{className:"H4 w-[17%]",children:"등록일"}),(0,n.jsx)("th",{className:"H4 w-[8%]",children:"답변여부"})]}),(0,n.jsx)("tr",{className:"h-15 border-b-1"})]}),t&&t.length>0?(0,n.jsxs)("tbody",{className:"w-[1214px] block h-677 overflow-y-auto scrollbar-table",children:[(0,n.jsx)("tr",{className:"h-15"}),t.map((e,s)=>s===t.length-1?(0,n.jsx)(c,{index:s,requestmentId:e.requestmentId,title:e.title,writer:e.writer,createdDate:e.createdDate,progression:e.progression,onRequestClick:r,ref:u},s):(0,n.jsx)(c,{index:s,requestmentId:e.requestmentId,title:e.title,writer:e.writer,createdDate:e.createdDate,progression:e.progression,onRequestClick:r},s))]}):(0,n.jsx)("tbody",{children:(0,n.jsx)(a.Z,{colspan:5})})]})},d=r(47907),f=r(32153),h=r(48205),m=()=>{let e=(0,f.Zl)(h.H),t=(0,d.useRouter)(),{requestData:r,error:o,isLoadingMore:i,size:c,setSize:a,isReachingEnd:l}=(0,s.f)();return(0,n.jsxs)("div",{className:"flex flex-col w-[1200px]",children:[(0,n.jsx)("h1",{className:"text-center H0 text-gray-grayscale50 text-nowrap",children:"요청사항"}),(0,n.jsx)(u,{list:r,onRequestClick:r=>{e(r),t.push("/dashboard/Request/Detail")},isLoading:null!=i&&i,isEndReached:null!=l&&l,setSize:a})]})}},60852:function(e,t,r){"use strict";r.d(t,{r:function(){return n}});let n=e=>(e.startsWith("20")?e.slice(2):e).replace(/-/g,".")},73122:function(e,t,r){"use strict";var n=r(57437);r(2265),t.Z=e=>{let{colspan:t}=e;return(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:t,className:"h-full",children:(0,n.jsx)("div",{className:"flex justify-center items-center h-693",children:(0,n.jsx)("h1",{className:"H1 text-gray-grayscale30",children:"리스트가 비었습니다."})})})})}},58640:function(e,t,r){"use strict";r.d(t,{_:function(){return n}});let n="https://www.dormease-dev.kro.kr"},89652:function(e,t,r){"use strict";r.d(t,{L:function(){return n},z:function(){return s}});let n="ACCESS_TOKEN",s="REFRESH_TOKEN"},36824:function(e,t,r){"use strict";var n=r(2265);t.Z=e=>{let{isLoading:t,isEndReached:r,onIntersect:s}=e,o=(0,n.useRef)(null),i=(0,n.useCallback)(e=>{!t&&(o.current&&o.current.disconnect(),o.current=new IntersectionObserver(e=>{e[0].isIntersecting&&!r&&s()}),e&&o.current.observe(e))},[t,r,s]);return(0,n.useEffect)(()=>()=>{var e;return null===(e=o.current)||void 0===e?void 0:e.disconnect()},[]),i}},48205:function(e,t,r){"use strict";r.d(t,{H:function(){return c}});var n=r(46426),s=r(32153);let o=window.sessionStorage,{persistAtom:i}=(0,n.J)({key:"requestIdState",storage:o}),c=(0,s.cn)({key:"requestIdState",default:0,effects_UNSTABLE:[i]})},97124:function(e,t,r){"use strict";var n=r(77871),s=r(89652);let o=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.Z.getToken(s.L);if(!r)throw Error("No access token found");let o={...t.headers,Authorization:"Bearer ".concat(r),"Content-Type":"application/json"},i=await fetch(e,{...t,headers:o});if(!i.ok)throw 401===i.status&&(n.Z.removeToken(s.L),n.Z.removeToken(s.z),alert("세션이 만료되었습니다. 다시 로그인해 주세요.")),Error("Failed to fetch data");return i.json()};t.Z=o},77871:function(e,t){"use strict";t.Z={saveToken:(e,t)=>{localStorage.setItem(e,t)},getToken:e=>localStorage.getItem(e),removeToken:e=>{localStorage.removeItem(e)}}},25566:function(e){var t,r,n,s=e.exports={};function o(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var a=[],l=!1,u=-1;function d(){l&&n&&(l=!1,n.length?a=n.concat(a):u=-1,a.length&&f())}function f(){if(!l){var e=c(d);l=!0;for(var t=a.length;t;){for(n=a,a=[];++u<t;)n&&n[u].run();u=-1,t=a.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new h(e,t)),1!==a.length||l||c(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},function(e){e.O(0,[691,4898,1252,4817,2971,8069,1744],function(){return e(e.s=57870)}),_N_E=e.O()}]);