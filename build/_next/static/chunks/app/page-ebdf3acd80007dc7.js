(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931,5776],{87618:function(e,t,n){Promise.resolve().then(n.bind(n,8004))},47907:function(e,t,n){"use strict";var r=n(15313);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},46426:function(e,t){"use strict";t.J=void 0,t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};let{key:t="recoil-persist",storage:n=localStorage,converter:r=JSON}=e,o=(e,t,n,r)=>{r?delete t[n]:t[n]=e,i(t)},a=()=>{let e=n.getItem(t);return null==e?{}:"string"==typeof e?s(e):"function"==typeof e.then?e.then(s):{}},s=e=>{if(void 0===e)return{};try{return r.parse(e)}catch(e){return console.error(e),{}}},i=e=>{try{"function"==typeof n.mergeItem?n.mergeItem(t,r.stringify(e)):n.setItem(t,r.stringify(e))}catch(e){console.error(e)}};return{persistAtom:({onSet:e,node:t,trigger:n,setSelf:r})=>{if("get"===n){let e=a();"function"==typeof e.then&&e.then(e=>{e.hasOwnProperty(t.key)&&r(e[t.key])}),e.hasOwnProperty(t.key)&&r(e[t.key])}e(async(e,n,r)=>{let s=a();"function"==typeof s.then?s.then(n=>o(e,n,t.key,r)):o(e,s,t.key,r)})}}}},9266:function(e,t,n){"use strict";n.d(t,{_:function(){return i},z:function(){return s}});var r=n(58640),o=n(89652),a=n(77871);let s=async e=>{let{loginId:t,password:n}=e,s=await fetch("".concat(r._,"/api/v1/auth/sign-in"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({loginId:t,password:n})});if(!s.ok)throw Error("Failed");let i=await s.json();return a.Z.saveToken(o.L,i.information.accessToken),a.Z.saveToken(o.z,i.information.refreshToken),i},i=async e=>{try{let t=await fetch("".concat(r._,"/api/v1/auth/reissue?refreshToken=").concat(encodeURIComponent(e)),{method:"GET"});if(console.log("reissueToken 응답 상태:",t.status),!t.ok){let e=await t.json();throw console.error("reissueToken 에러 응답:",e),Error("Token reissue failed")}let n=await t.json();if(console.log("reissueToken 성공 응답:",n),n.check&&n.information&&n.information.accessToken)return a.Z.saveToken(o.L,n.information.accessToken),n.information.accessToken;return console.error("reissueToken 응답에 유효한 액세스 토큰이 없습니다:",n),null}catch(e){return console.error("reissueToken 함수 에러:",e),null}}},8004:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(57437),o=n(9266),a=n(2265),s=n(66111),i=n(32153),c=e=>{let{label:t,disabled:n,...o}=e;return(0,r.jsx)("button",{...o,disabled:n,className:"H1 w-405 h-71 rounded-full text-white bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 hover:hover-transition active:bg-blue-blue50",children:t})},l=e=>{let{input:t,setInput:n,placeholder:o,type:a,...s}=e;return(0,r.jsx)("input",{...s,className:"".concat(t?"border-gray-grayscale50":"border-gray-grayscale30"," H2  border-[1.5px]  outline-none focus:border-gray-grayscale30 px-21 w-414 h-59 rounded-20 text-gray-grayscale50 placeholder:text-gray-grayscale30"),placeholder:o,type:a,value:t,onChange:e=>{n(e.target.value)},required:!0})},u=n(85776),A=e=>{let{loginId:t,setLoginId:n,password:o,setPassword:a,handleLogin:A,loginBtnDisabled:d,buttonLabel:g,isAutoLogin:h,setIsAutoLogin:f,onLoginClick:m}=e,[p,y]=(0,i.FV)(s.B);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"w-510 h-485 bg-white rounded-[12.35px] shadow-lg flex flex-col items-center justify-center",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"H1 text-gray-grayscale50 mb-31",children:"도미즈 관리자 로그인"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mb-19",children:(0,r.jsx)(l,{input:t,setInput:n,placeholder:"아이디",type:"text"})}),(0,r.jsx)("div",{className:"mb-19",children:(0,r.jsx)(l,{input:o,setInput:a,placeholder:"비밀번호",type:"password"})}),(0,r.jsx)("div",{className:"flex justify-between items-center mb-27 px-5",children:(0,r.jsxs)("div",{className:"flex items-center gap-8",children:[(0,r.jsx)(u.default,{isChecked:h,setIsChecked:e=>f(e)}),(0,r.jsx)("span",{className:"alert-cap text-black",children:"자동 로그인"})]})}),(0,r.jsx)(c,{onClick:m,label:g,disabled:d})]})]})})})},d=n(89652),g=n(12953),h=n(77871),f={src:"/_next/static/media/LoginLogo.0bc2ec04.png",height:137,width:372,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAGFBMVEX///////////////////////////////8pK8DIAAAACHRSTlNpn7BLeYguWbSL0JsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAeSURBVHicBcGBAQAwDIIwULv/T17CrdrASYID+xh8Au4AMXgegrYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},m=n(20703),p=n(47907),y=()=>{let[e,t]=(0,a.useState)(""),[n,s]=(0,a.useState)(""),[c,l]=(0,a.useState)(""),[u,y]=(0,a.useState)(""),[k,b]=(0,a.useState)(!1),[w,x]=(0,a.useState)("로그인"),T=!e||!n,v=(0,p.useRouter)(),S=(0,i.Zl)(g.L),E=(0,i.Zl)(g.Y),I=async e=>{let{loginId:t,password:n}=e;try{let e=await (0,o.z)({loginId:t,password:n}),r=e.information.accessToken,a=e.information.refreshToken;S(r),E(a),h.Z.saveToken(d.L,r),h.Z.saveToken(d.z,a),k?(localStorage.setItem("loginId",t),localStorage.setItem("isAutoLogin","true")):(localStorage.removeItem("loginId"),localStorage.removeItem("isAutoLogin")),v.push("/dashboard")}catch(e){console.error(e),console.error("로그인 중 오류가 발생했습니다.",e),alert("로그인 중 오류가 발생했습니다.")}},C=async()=>{let e=h.Z.getToken(d.z);if(e)try{let t=await (0,o._)(e);t?(S(t),await v.push("/dashboard")):console.error("새로운 액세스 토큰 발급 실패")}catch(e){alert("자동 로그인에 실패하였습니다. 다시 로그인해 주세요."),localStorage.removeItem("loginId"),localStorage.removeItem("isAutoLogin"),h.Z.removeToken(d.z),h.Z.removeToken(d.L),b(!1),x("로그인")}else console.log("리프레시 토큰 없음")};(0,a.useEffect)(()=>{let e=localStorage.getItem("isAutoLogin"),n=localStorage.getItem("loginId"),r=h.Z.getToken(d.z);"true"===e&&n&&r&&(b(!0),t(n),l(n),s("******"),y("******"),x("자동 로그인"))},[]);let L=(e,n)=>{t(e),s(n),(e!==c||n!==u)&&x("로그인")},U=()=>{k&&"자동 로그인"===w?(console.log("자동 로그인 시도"),C()):(console.log("일반 로그인 시도"),I({loginId:e,password:n}))};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{style:{backgroundImage:"url(".concat("/_next/static/media/LoginBackgroundImg.38090d6f.png",")"),width:"100%",height:"100vh",backgroundSize:"cover",backgroundPosition:"center"},className:"overflow-y-hidden flex flex-col items-center justify-center",children:(0,r.jsxs)("div",{className:" xl:scale-65 xxl:scale-80 lg:scale-65 md:scale-50 sm:scale-40  flex flex-col items-center justify-center",children:[(0,r.jsx)(m.default,{src:f,width:372,height:136.5,className:"object-cover mb-43",alt:"login logo"}),(0,r.jsx)(A,{loginId:e,setLoginId:e=>L(e,n),password:n,setPassword:t=>L(e,t),handleLogin:U,loginBtnDisabled:T,isAutoLogin:k,setIsAutoLogin:e=>{b(e),e||(x("로그인"),t(""),s(""))},buttonLabel:w,onLoginClick:U})]})})})}},85776:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(57437);n(2265);var o={src:"/_next/static/media/Checked.2a02f83f.png",height:40,width:39,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEU3e941eNg2eNg2edo2e942dtU0ddI2edo3eNk5gOaHhQcyAAAACXRSTlP+/dqx7UQiy4HaUf1QAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMUlEQVR4nB3FyQ3AQAjAQJtjCf03HAk/xmRcyQKH6GaLw+YbsL98s0L1i1Wg6h6CEj8a4AC53DY/oQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},a={src:"/_next/static/media/UnChecked.bea25168.png",height:39,width:39,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVERERMaXFVVVU/Pz9mZmZ/f39VVVV1Ch9XAAAAB3RSTlN1AAMEBQQGqDJaiQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACRJREFUeJxjYIADFiYmJiY2BgYGJkZGRkZm/AxWRiYmRhaEZgAKMwBG4KHziQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},s={src:"/_next/static/media/UnCheckedDisabled.533783a4.png",height:20,width:20,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEXJycnKyspMaXHMzMzMzMzIyMjxNP9bAAAABnRSTlNyZAAUKEKaXv9sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nGNggABGBgYmEGAmksEMAiwMDIxgwMAKAAyhAGZ43VKEAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},i=n(20703),c=e=>{let{isChecked:t,setIsChecked:n,disabled:c}=e;return(0,r.jsx)(i.default,{className:"".concat(c?"cursor-default":"cursor-pointer"),src:t?o:c?s:a,alt:t?"Checked":c?"UnChecked":"UnCheckedDisabled",width:19.5,height:19.5,onClick:e=>{c||(e.stopPropagation(),n(!t))}})}},58640:function(e,t,n){"use strict";n.d(t,{_:function(){return r}});let r="https://www.dormease-dev.kro.kr"},89652:function(e,t,n){"use strict";n.d(t,{L:function(){return r},z:function(){return o}});let r="ACCESS_TOKEN",o="REFRESH_TOKEN"},66111:function(e,t,n){"use strict";n.d(t,{B:function(){return a},H:function(){return o}});var r=n(32153);let o=(0,r.cn)({key:"accountsActiveAreaState",default:{namebox:!1,passwordBox:!1}}),a=(0,r.cn)({key:"accountsModalState",default:{passwordSecure:!1,passwordConfirm:!1,passwordChanged:!1,passwordFailed:!1,exit:!1}})},12953:function(e,t,n){"use strict";n.d(t,{L:function(){return a},Y:function(){return s}});var r=n(32153);let{persistAtom:o}=(0,n(46426).J)(),a=(0,r.cn)({key:"accessTokenState",default:null,effects_UNSTABLE:[o]}),s=(0,r.cn)({key:"refreshTokenState",default:null,effects_UNSTABLE:[o]})},77871:function(e,t){"use strict";t.Z={saveToken:(e,t)=>{localStorage.setItem(e,t)},getToken:e=>localStorage.getItem(e),removeToken:e=>{localStorage.removeItem(e)}}},25566:function(e){var t,n,r,o=e.exports={};function a(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var c=[],l=!1,u=-1;function A(){l&&r&&(l=!1,r.length?c=r.concat(c):u=-1,c.length&&d())}function d(){if(!l){var e=i(A);l=!0;for(var t=c.length;t;){for(r=c,c=[];++u<t;)r&&r[u].run();u=-1,t=c.length}r=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new g(e,t)),1!==c.length||l||i(d)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},function(e){e.O(0,[691,703,2971,8069,1744],function(){return e(e.s=87618)}),_N_E=e.O()}]);