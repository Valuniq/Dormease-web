(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{87618:function(e,t,n){Promise.resolve().then(n.bind(n,9948))},47907:function(e,t,n){"use strict";var r=n(15313);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},46426:function(e,t){"use strict";t.J=void 0,t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};let{key:t="recoil-persist",storage:n=localStorage,converter:r=JSON}=e,o=(e,t,n,r)=>{r?delete t[n]:t[n]=e,c(t)},s=()=>{let e=n.getItem(t);return null==e?{}:"string"==typeof e?i(e):"function"==typeof e.then?e.then(i):{}},i=e=>{if(void 0===e)return{};try{return r.parse(e)}catch(e){return console.error(e),{}}},c=e=>{try{"function"==typeof n.mergeItem?n.mergeItem(t,r.stringify(e)):n.setItem(t,r.stringify(e))}catch(e){console.error(e)}};return{persistAtom:({onSet:e,node:t,trigger:n,setSelf:r})=>{if("get"===n){let e=s();"function"==typeof e.then&&e.then(e=>{e.hasOwnProperty(t.key)&&r(e[t.key])}),e.hasOwnProperty(t.key)&&r(e[t.key])}e(async(e,n,r)=>{let i=s();"function"==typeof i.then?i.then(n=>o(e,n,t.key,r)):o(e,i,t.key,r)})}}}},9948:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(57437),o=n(58640),s=n(89652),i=n(77871);let c=async e=>{let{loginId:t,password:n}=e,r=await fetch("".concat(o._,"/api/v1/auth/sign-in"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({loginId:t,password:n})});if(!r.ok)throw Error("Failed");let c=await r.json();return i.Z.saveToken(s.L,c.information.accessToken),i.Z.saveToken(s.z,c.information.refreshToken),c};var a=n(2265),l=e=>{let{label:t,disabled:n,...o}=e;return(0,r.jsx)("button",{...o,disabled:n,className:"H1 w-405 h-71 rounded-full text-white bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 hover:hover-transition active:bg-blue-blue50",children:t})},u=e=>{let{input:t,setInput:n,placeholder:o,type:s,...i}=e;return(0,r.jsx)("input",{...i,className:"".concat(t?"border-gray-grayscale50":"border-gray-grayscale30"," H2  border-[1.5px]  outline-none focus:border-gray-grayscale30 px-21 w-414 h-59 rounded-20 text-gray-grayscale50 placeholder:text-gray-grayscale30"),placeholder:o,type:s,value:t,onChange:e=>{n(e.target.value)},required:!0})},f=e=>{let{loginId:t,setLoginId:n,password:o,setPassword:s,handleLogin:i,loginBtnDisabled:c}=e;return(0,r.jsxs)("div",{className:"w-510 h-426 bg-white rounded-[12.35px] shadow-lg flex flex-col items-center justify-center",children:[(0,r.jsx)("h1",{className:"H1 text-gray-grayscale50 mb-31",children:"도미즈 관리자 로그인"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mb-19",children:(0,r.jsx)(u,{input:t,setInput:n,placeholder:"아이디",type:"text"})}),(0,r.jsx)("div",{className:"mb-61",children:(0,r.jsx)(u,{input:o,setInput:s,placeholder:"비밀번호",type:"password"})}),(0,r.jsx)(l,{onClick:()=>i({loginId:t,password:o}),label:"로그인",disabled:c})]})]})},h=n(12953),d={src:"/_next/static/media/LoginLogo.0bc2ec04.png",height:137,width:372,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAGFBMVEX///////////////////////////////8pK8DIAAAACHRSTlNpn7BLeYguWbSL0JsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAeSURBVHicBcGBAQAwDIIwULv/T17CrdrASYID+xh8Au4AMXgegrYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},g=n(20703),m=n(47907),p=n(32153),y=()=>{let[e,t]=(0,a.useState)(""),[n,o]=(0,a.useState)(""),l=(0,m.useRouter)(),u=(0,p.Zl)(h.L),y=(0,p.Zl)(h.Y),A=async e=>{let{loginId:t,password:n}=e;try{let e=await c({loginId:t,password:n});if(e){let t=e.information.accessToken,n=e.information.refreshToken;u(t),y(n),i.Z.saveToken(s.L,t),i.Z.saveToken(s.z,n),console.log("Access Token (Recoil):",t),console.log("Refresh Token (Recoil):",n),console.log("Access Token (LocalStorage):",i.Z.getToken(s.L)),console.log("Refresh Token (LocalStorage):",i.Z.getToken(s.z)),alert("로그인 성공"),l.push("/dashboard")}else alert("로그인 실패")}catch(e){console.error(e),alert("로그인 중 오류가 발생했습니다.")}};return(0,r.jsx)("div",{style:{backgroundImage:"url(".concat("/_next/static/media/LoginBackgroundImg.38090d6f.png",")"),width:"100%",height:"100vh",backgroundSize:"cover",backgroundPosition:"center"},className:"overflow-y-hidden flex flex-col items-center justify-center",children:(0,r.jsxs)("div",{className:" xl:scale-65 xxl:scale-80 lg:scale-65 md:scale-50 sm:scale-40  flex flex-col items-center justify-center",children:[(0,r.jsx)(g.default,{src:d,width:372,height:136.5,className:"object-cover mb-43",alt:"login logo"}),(0,r.jsx)(f,{loginId:e,setLoginId:t,password:n,setPassword:o,handleLogin:A,loginBtnDisabled:!e||!n})]})})}},58640:function(e,t,n){"use strict";n.d(t,{_:function(){return r}});let r="https://www.dormease-dev.kro.kr"},89652:function(e,t,n){"use strict";n.d(t,{L:function(){return r},z:function(){return o}});let r="ACCESS_TOKEN",o="REFRESH_TOKEN"},12953:function(e,t,n){"use strict";n.d(t,{L:function(){return s},Y:function(){return i}});var r=n(32153);let{persistAtom:o}=(0,n(46426).J)(),s=(0,r.cn)({key:"accessTokenState",default:null,effects_UNSTABLE:[o]}),i=(0,r.cn)({key:"refreshTokenState",default:null,effects_UNSTABLE:[o]})},77871:function(e,t){"use strict";t.Z={saveToken:(e,t)=>{localStorage.setItem(e,t)},getToken:e=>localStorage.getItem(e),removeToken:e=>{localStorage.removeItem(e)}}},25566:function(e){var t,n,r,o=e.exports={};function s(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var a=[],l=!1,u=-1;function f(){l&&r&&(l=!1,r.length?a=r.concat(a):u=-1,a.length&&h())}function h(){if(!l){var e=c(f);l=!0;for(var t=a.length;t;){for(r=a,a=[];++u<t;)r&&r[u].run();u=-1,t=a.length}r=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new d(e,t)),1!==a.length||l||c(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},function(e){e.O(0,[691,703,2971,8069,1744],function(){return e(e.s=87618)}),_N_E=e.O()}]);