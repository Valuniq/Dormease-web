(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6898],{82932:function(e,t,n){Promise.resolve().then(n.bind(n,54537))},47907:function(e,t,n){"use strict";var r=n(15313);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},46426:function(e,t){"use strict";t.J=void 0,t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};let{key:t="recoil-persist",storage:n=localStorage,converter:r=JSON}=e,o=(e,t,n,r)=>{r?delete t[n]:t[n]=e,a(t)},s=()=>{let e=n.getItem(t);return null==e?{}:"string"==typeof e?i(e):"function"==typeof e.then?e.then(i):{}},i=e=>{if(void 0===e)return{};try{return r.parse(e)}catch(e){return console.error(e),{}}},a=e=>{try{"function"==typeof n.mergeItem?n.mergeItem(t,r.stringify(e)):n.setItem(t,r.stringify(e))}catch(e){console.error(e)}};return{persistAtom:({onSet:e,node:t,trigger:n,setSelf:r})=>{if("get"===n){let e=s();"function"==typeof e.then&&e.then(e=>{e.hasOwnProperty(t.key)&&r(e[t.key])}),e.hasOwnProperty(t.key)&&r(e[t.key])}e(async(e,n,r)=>{let i=s();"function"==typeof i.then?i.then(n=>o(e,n,t.key,r)):o(e,i,t.key,r)})}}}},9266:function(e,t,n){"use strict";n.d(t,{_:function(){return a},z:function(){return i}});var r=n(58640),o=n(89652),s=n(77871);let i=async e=>{let{loginId:t,password:n}=e,i=await fetch("".concat(r._,"/api/v1/auth/sign-in"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({loginId:t,password:n})});if(!i.ok)throw Error("Failed");let a=await i.json();return s.Z.saveToken(o.L,a.information.accessToken),s.Z.saveToken(o.z,a.information.refreshToken),a},a=async e=>{try{let t=await fetch("".concat(r._,"/api/v1/auth/reissue?refreshToken=").concat(encodeURIComponent(e)),{method:"GET"});if(console.log("reissueToken 응답 상태:",t.status),!t.ok){let e=await t.json();throw console.error("reissueToken 에러 응답:",e),Error("Token reissue failed")}let n=await t.json();if(console.log("reissueToken 성공 응답:",n),n.check&&n.information&&n.information.accessToken)return s.Z.saveToken(o.L,n.information.accessToken),n.information.accessToken;return console.error("reissueToken 응답에 유효한 액세스 토큰이 없습니다:",n),null}catch(e){return console.error("reissueToken 함수 에러:",e),null}}},74929:function(e,t,n){"use strict";n.d(t,{GH:function(){return u},Jl:function(){return l},fg:function(){return a},ju:function(){return c}});var r=n(58640),o=n(75518),s=n(81252),i=n(94817);let a=()=>{var e,t,n;let{data:s,error:a,size:c,setSize:u}=(0,i.ZP)((e,t)=>t&&0===t.information.dataList.length?null:"".concat(r._,"/api/v1/web/requestments?page=").concat(e+1),o.Z),l=s?s.reduce((e,t)=>e.concat(t.information.dataList),[]):[],f=!s&&!a||c>0&&s&&void 0===s[c-1];return{requestData:l,error:a,isLoadingMore:f,size:c,setSize:u,isReachingEnd:(null==s?void 0:null===(e=s[0])||void 0===e?void 0:e.information.dataList.length)===0||s&&(null===(t=s[s.length-1])||void 0===t?void 0:t.information.pageInfo.currentPage)===(null===(n=s[s.length-1])||void 0===n?void 0:n.information.pageInfo.totalPage)||!1}},c=e=>{let{data:t,error:n}=(0,s.ZP)("".concat(r._,"/api/v1/web/requestments/").concat(e),o.Z);return{data:t,error:n,isLoading:!n&&!t}},u=async(e,t)=>await (0,o.Z)("".concat(r._,"/api/v1/web/requestments/").concat(e),{method:"PUT",body:JSON.stringify({progression:t}),headers:{"Content-Type":"application/json"}}),l=async e=>await (0,o.Z)("".concat(r._,"/api/v1/web/requestments/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}})},54537:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(57437),o=n(74929),s=n(2265),i=n(60852),a=(0,s.forwardRef)((e,t)=>{let{index:n,onRequestClick:o,item:s}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("tr",{ref:t,className:"table rounded-5 w-[1200px] H4-caption h-38 align-middle cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20",onClick:()=>o(s.requestmentId),children:[(0,r.jsx)("td",{className:"w-[8%]",children:n+1}),(0,r.jsx)("td",{className:"w-[56%] truncate max-w-500",children:s.title}),(0,r.jsx)("td",{className:"w-[11%]",children:s.writer}),(0,r.jsx)("td",{className:"w-[17%]",children:(0,i.r)(s.createdDate)}),(0,r.jsx)("td",{className:"w-[8%]",children:"IN_REVIEW"===s.progression?"검토중":"ANSWER_COMPLETED"===s.progression?"완료됨":"진행중"})]}),(0,r.jsx)("tr",{className:"h-14"})]})}),c=n(73122),u=n(36824),l=e=>{let{list:t,onRequestClick:n,isLoading:o,isEndReached:s,setSize:i}=e,l=(0,u.Z)({isLoading:o,isEndReached:s,onIntersect:()=>i(e=>e+1)});return(0,r.jsxs)("table",{className:"text-nowrap text-center text-gray-grayscale50",children:[(0,r.jsxs)("thead",{className:"table w-[1200px]",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"H4 w-[8%]",children:"번 호"}),(0,r.jsx)("th",{className:"H4 w-[56%]",children:"제 목"}),(0,r.jsx)("th",{className:"H4 w-[11%]",children:"작성자"}),(0,r.jsx)("th",{className:"H4 w-[17%]",children:"등록일"}),(0,r.jsx)("th",{className:"H4 w-[8%]",children:"답변여부"})]}),(0,r.jsx)("tr",{className:"h-15 border-b-1"})]}),t&&t.length>0?(0,r.jsxs)("tbody",{className:"w-[1214px] block h-677 overflow-y-auto scrollbar-table",children:[(0,r.jsx)("tr",{className:"h-15"}),t.map((e,o)=>o===t.length-1?(0,r.jsx)(a,{index:o,onRequestClick:n,item:e,ref:l},o):(0,r.jsx)(a,{index:o,onRequestClick:n,item:e},o))]}):o?(0,r.jsx)("tbody",{}):(0,r.jsx)("tbody",{className:"h-693",children:(0,r.jsx)(c.Z,{colspan:5})})]})},f=n(47907),d=n(32153),h=n(48205),m=()=>{let e=(0,d.Zl)(h.H),t=(0,f.useRouter)(),{requestData:n,error:s,isLoadingMore:i,size:a,setSize:c,isReachingEnd:u}=(0,o.fg)();return(0,r.jsxs)("div",{className:"flex flex-col w-[1200px]",children:[(0,r.jsx)("h1",{className:"text-center H0 text-gray-grayscale50 text-nowrap",children:"요청사항"}),(0,r.jsx)(l,{list:n,onRequestClick:n=>{e(n),t.push("/dashboard/requests/details")},isLoading:null!=i&&i,isEndReached:null!=u&&u,setSize:c})]})}},60852:function(e,t,n){"use strict";n.d(t,{r:function(){return r}});let r=e=>(e.startsWith("20")?e.slice(2):e).replace(/-/g,".")},73122:function(e,t,n){"use strict";var r=n(57437);n(2265),t.Z=e=>{let{colspan:t}=e;return(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:t,className:"h-full",children:(0,r.jsx)("div",{className:"flex justify-center items-center",children:(0,r.jsx)("h1",{className:"H1 text-gray-grayscale30",children:"리스트가 비었습니다."})})})})}},58640:function(e,t,n){"use strict";n.d(t,{_:function(){return r}});let r="https://www.dormease-dev.kro.kr"},89652:function(e,t,n){"use strict";n.d(t,{L:function(){return r},z:function(){return o}});let r="ACCESS_TOKEN",o="REFRESH_TOKEN"},36824:function(e,t,n){"use strict";var r=n(2265);t.Z=e=>{let{isLoading:t,isEndReached:n,onIntersect:o}=e,s=(0,r.useRef)(null),i=(0,r.useCallback)(e=>{!t&&(s.current&&s.current.disconnect(),s.current=new IntersectionObserver(e=>{e[0].isIntersecting&&!n&&o()}),e&&s.current.observe(e))},[t,n,o]);return(0,r.useEffect)(()=>()=>{var e;return null===(e=s.current)||void 0===e?void 0:e.disconnect()},[]),i}},48205:function(e,t,n){"use strict";n.d(t,{H:function(){return a}});var r=n(46426),o=n(32153);let s=window.sessionStorage,{persistAtom:i}=(0,r.J)({key:"requestIdState",storage:s}),a=(0,o.cn)({key:"requestIdState",default:0,effects_UNSTABLE:[i]})},75518:function(e,t,n){"use strict";var r=n(77871),o=n(89652),s=n(9266);let i=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.Z.getToken(o.L),i=r.Z.getToken(o.z);if(!n)throw Error("No access token found");let c={...t.headers,Authorization:"Bearer ".concat(n)},u=await fetch(e,{...t,headers:c});if(401===u.status&&i){let n=await (0,s._)(i);if(n){r.Z.saveToken(o.L,n);let s={...c,Authorization:"Bearer ".concat(n)};u=await fetch(e,{...t,headers:s})}else a()}else 401===u.status&&a();if(!u.ok)throw Error("Failed to fetch data");return 204===u.status||201===u.status?{}:u.json()},a=()=>{r.Z.removeToken(o.L),r.Z.removeToken(o.z),alert("세션이 만료되었습니다. 다시 로그인해 주세요."),window.location.href="/"};t.Z=i},77871:function(e,t){"use strict";t.Z={saveToken:(e,t)=>{localStorage.setItem(e,t)},getToken:e=>localStorage.getItem(e),removeToken:e=>{localStorage.removeItem(e)}}},25566:function(e){var t,n,r,o=e.exports={};function s(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c=[],u=!1,l=-1;function f(){u&&r&&(u=!1,r.length?c=r.concat(c):l=-1,c.length&&d())}function d(){if(!u){var e=a(f);u=!0;for(var t=c.length;t;){for(r=c,c=[];++l<t;)r&&r[l].run();l=-1,t=c.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||u||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},function(e){e.O(0,[691,4898,1252,4817,2971,8069,1744],function(){return e(e.s=82932)}),_N_E=e.O()}]);