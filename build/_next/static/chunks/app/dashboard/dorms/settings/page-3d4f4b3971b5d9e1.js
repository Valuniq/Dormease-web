(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{60946:function(e,t,r){Promise.resolve().then(r.bind(r,85070))},47907:function(e,t,r){"use strict";var n=r(15313);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},46426:function(e,t){"use strict";t.J=void 0,t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};let{key:t="recoil-persist",storage:r=localStorage,converter:n=JSON}=e,s=(e,t,r,n)=>{n?delete t[r]:t[r]=e,o(t)},a=()=>{let e=r.getItem(t);return null==e?{}:"string"==typeof e?l(e):"function"==typeof e.then?e.then(l):{}},l=e=>{if(void 0===e)return{};try{return n.parse(e)}catch(e){return console.error(e),{}}},o=e=>{try{"function"==typeof r.mergeItem?r.mergeItem(t,n.stringify(e)):r.setItem(t,n.stringify(e))}catch(e){console.error(e)}};return{persistAtom:({onSet:e,node:t,trigger:r,setSelf:n})=>{if("get"===r){let e=a();"function"==typeof e.then&&e.then(e=>{e.hasOwnProperty(t.key)&&n(e[t.key])}),e.hasOwnProperty(t.key)&&n(e[t.key])}e(async(e,r,n)=>{let l=a();"function"==typeof l.then?l.then(r=>s(e,r,t.key,n)):s(e,l,t.key,n)})}}}},85070:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n,s=r(57437),a=r(90121),l=r(38751),o=r(79517),i=r(2265),c=e=>{let{label:t,selected:r=!1,...n}=e;return(0,s.jsx)("button",{...n,className:"H3 w-381 h-61 rounded-b-8 text-white hover:hover-transition ".concat(r?"bg-blue-blue50":"bg-blue-blue30 hover:bg-blue-blue40 active:bg-blue-blue50"),children:t})},u=r(52846);function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=function(e){return u.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none"},e),n||(n=u.createElement("path",{stroke:"#D83636",strokeLinecap:"round",strokeWidth:2,d:"m10 22 12-12M22 22 10 10"})))},h=r(20703),f=e=>{let{id:t,name:r,imageUrl:n,onBuildingOutClick:a,onBuildingSettingsDetail:l}=e;return(0,s.jsxs)("div",{className:"relative w-381 h-241 rounded-8 bg-gray-grayscale5 cursor-pointer",onClick:()=>l(t),children:[null!==n&&(0,s.jsx)(h.default,{className:"rounded-8 cursor-pointer",src:n,alt:r,fill:!0,priority:!0,style:{objectFit:"cover"}}),(0,s.jsx)("div",{className:"absolute bottom-0",children:(0,s.jsx)(c,{label:r,selected:!1})}),(0,s.jsx)("button",{onClick:e=>{e.stopPropagation(),a()},children:(0,s.jsx)(d,{className:"absolute right-8 top-8"})})]})},b=r(42825),p=r(91723),y=r(43721),m=r(47907),v=r(32153),x=()=>{let[e,t]=(0,i.useState)(),[r,n]=(0,i.useState)(!1),[c,u]=(0,i.useState)(!1),[g,d]=(0,i.useState)(null),h=(0,m.useRouter)(),x=(0,v.Zl)(y.S),{data:j,error:w,mutate:k}=(0,a._p)();(0,i.useEffect)(()=>{j?t(j.information):console.log(w)},[j,w]);let N=async()=>{},O=async e=>{if(null!==e)try{(await (0,a.IY)(e)).check?(await k(),u(!1),d(null)):console.log("실패")}catch(e){console.error(e),console.log("오류가 발생했습니다.")}};return(0,s.jsx)(i.Suspense,{fallback:(0,s.jsx)("h1",{children:"로딩 중"}),children:(0,s.jsxs)("div",{className:"flex flex-col w-[1200px]",children:[(0,s.jsx)("h1",{className:"H0 text-gray-grayscale50 text-center mb-35",children:"건물 설정"}),(0,s.jsxs)("div",{className:"w-[1220px] grid grid-cols-3 gap-x-20 gap-y-30 min-h-381 max-h-800 overflow-y-auto scrollbar-table",children:[e&&e.map((e,t)=>(0,s.jsx)(f,{id:e.id,name:e.name,imageUrl:e.imageUrl,onBuildingOutClick:()=>{d(e.id),!0===e.assignedResidents?n(!0):u(!0)},onBuildingSettingsDetail:()=>{x(e.id),h.push("/dashboard/dorms/settings/details")}},t)),e&&(null==e?void 0:e.length)<15&&(0,s.jsx)(l.Z,{onClick:N})]}),c&&(0,s.jsx)(o.Z,{isOpen:c,children:(0,s.jsx)(p.Z,{variant:"red",label:"건물을 삭제하면 관련 데이터도 함께 삭제됩니다.\\n건물을 삭제하시겠습니까?",onCancel:()=>{u(!1),d(null)},onConfirm:()=>O(g)})}),r&&(0,s.jsx)(o.Z,{isOpen:r,children:(0,s.jsx)(b.Z,{variant:"red",label:"해당 건물은 배정된 학생이 있습니다.",onConfirm:()=>{n(!1),d(null)}})})]})})}},38751:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n,s=r(57437);r(2265);var a=r(52846);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var o=function(e){return a.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:54,height:54,fill:"none"},e),n||(n=a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:4.751,d:"M2.999 27h48M27 3v48"})))},i=e=>{let{...t}=e;return(0,s.jsxs)("button",{...t,className:"group flex flex-col justify-center items-center w-381 h-241 rounded-8 bg-gray-grayscale5 hover:hover-transition hover:bg-gray-grayscale10 active:bg-gray-grayscale20",children:[(0,s.jsx)("div",{className:"flex justify-center items-center w-102 h-102 rounded-full bg-gray-grayscale10 group-hover:hover-transition group-hover:bg-gray-grayscale20 group-active:bg-gray-grayscale30",children:(0,s.jsx)(o,{className:"text-gray-grayscale30 group-hover:text-gray-grayscale40 group-hover:hover-transition group-active:text-gray-grayscale50"})}),(0,s.jsx)("h2",{className:"H4 mt-21 w-142 py-5 rounded-full text-white bg-blue-blue30 group-hover:bg-blue-blue40 group-hover:hover-transition group-active:bg-blue-blue50",children:"건물 추가하기"})]})}},42825:function(e,t,r){"use strict";var n=r(57437),s=r(20703),a=r(22992),l=r(9088),o=r(26066);t.Z=e=>{let{variant:t,label:r,onConfirm:i}=e,{bgHeader:c}=(e=>{switch(e){case"blue":default:return{bgHeader:"bg-blue-blue30"};case"red":return{bgHeader:"bg-red-red20"};case"green":return{bgHeader:"bg-green-green20"}}})(t);return(0,n.jsxs)("div",{className:"w-456 h-194 flex flex-col items-center rounded-8 shadow-xl bg-white pb-15",children:[(0,n.jsx)(o.Z,{bgColor:c,onCancel:i}),(0,n.jsx)(s.default,{src:a.Z,className:"mt-19 mb-16",width:22,height:19,alt:"PromptWarning"}),(0,n.jsx)("h1",{className:"alert-cap text-gray-grayscale50 text-center",children:r.split("\n").map((e,t)=>(0,n.jsx)("p",{className:"leading-25",children:e},t))}),(0,n.jsx)("div",{className:"ml-auto mt-auto",children:(0,n.jsx)(l.Z,{label:"확인",onClick:i,hoverColor:t})})]})}},43721:function(e,t,r){"use strict";r.d(t,{S:function(){return o}});var n=r(46426),s=r(32153);let a=window.sessionStorage,{persistAtom:l}=(0,n.J)({key:"settingIdState",storage:a}),o=(0,s.cn)({key:"settingIdState",default:0,effects_UNSTABLE:[l]})}},function(e){e.O(0,[691,703,4898,1252,5243,2971,8069,1744],function(){return e(e.s=60946)}),_N_E=e.O()}]);