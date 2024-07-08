"use strict";exports.id=731,exports.ids=[731],exports.modules={3620:(e,t,n)=>{/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(3729),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,a=r.useEffect,u=r.useLayoutEffect,l=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),i=r[0].inst,c=r[1];return u(function(){i.value=n,i.getSnapshot=t,s(i)&&c({inst:i})},[e,n,t]),a(function(){return s(i)&&c({inst:i}),e(function(){s(i)&&c({inst:i})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},8145:(e,t,n)=>{e.exports=n(3620)},276:(e,t,n)=>{n.d(t,{$l:()=>a,BN:()=>M,DY:()=>w,Fs:()=>$,J$:()=>q,JG:()=>J,JN:()=>m,LI:()=>k,PM:()=>s,UG:()=>G,W6:()=>x,i_:()=>o,ko:()=>X,kw:()=>L,mf:()=>l,o8:()=>u,qC:()=>N,s6:()=>Q,sj:()=>I,u3:()=>A,u_:()=>P,w6:()=>T,xD:()=>Z});var r=n(3729);let i=()=>{},o=i(),a=Object,u=e=>e===o,l=e=>"function"==typeof e,s=(e,t)=>({...e,...t}),c=e=>l(e.then),f=new WeakMap,d=0,v=e=>{let t,n;let r=typeof e,i=e&&e.constructor,o=i==Date;if(a(e)!==e||o||i==RegExp)t=o?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=f.get(e))return t;if(t=++d+"~",f.set(e,t),i==Array){for(n=0,t="@";n<e.length;n++)t+=v(e[n])+",";f.set(e,t)}if(i==a){t="#";let r=a.keys(e).sort();for(;!u(n=r.pop());)u(e[n])||(t+=n+":"+v(e[n])+",");f.set(e,t)}}return t},w=new WeakMap,p={},E={},y="undefined",h=typeof window!=y,_=typeof document!=y,g=()=>h&&typeof window.requestAnimationFrame!=y,m=(e,t)=>{let n=w.get(e);return[()=>!u(t)&&e.get(t)||p,r=>{if(!u(t)){let i=e.get(t);t in E||(E[t]=i),n[5](t,s(i,r),i||p)}},n[6],()=>!u(t)&&t in E?E[t]:!u(t)&&e.get(t)||p]},S=!0,[b,O]=h&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[i,i],R={initFocus:e=>(_&&document.addEventListener("visibilitychange",e),b("focus",e),()=>{_&&document.removeEventListener("visibilitychange",e),O("focus",e)}),initReconnect:e=>{let t=()=>{S=!0,e()},n=()=>{S=!1};return b("online",t),b("offline",n),()=>{O("online",t),O("offline",n)}}},T=!r.useId,x=!h||"Deno"in window,L=e=>g()?window.requestAnimationFrame(e):setTimeout(e,1),k=x?r.useEffect:r.useLayoutEffect,C="undefined"!=typeof navigator&&navigator.connection,D=!x&&C&&(["slow-2g","2g"].includes(C.effectiveType)||C.saveData),N=e=>{if(l(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?v(e):"",t]},V=0,A=()=>++V;var I={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function M(...e){let[t,n,r,i]=e,a=s({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),f=a.populateCache,d=a.rollbackOnError,v=a.optimisticData,p=e=>"function"==typeof d?d(e):!1!==d,E=a.throwOnError;if(l(n)){let e=[];for(let r of t.keys())!/^\$(inf|sub)\$/.test(r)&&n(t.get(r)._k)&&e.push(r);return Promise.all(e.map(y))}return y(n);async function y(n){let i;let[s]=N(n);if(!s)return;let[d,y]=m(t,s),[h,_,g,S]=w.get(t),b=()=>{let e=h[s];return(l(a.revalidate)?a.revalidate(d().data,n):!1!==a.revalidate)&&(delete g[s],delete S[s],e&&e[0])?e[0](2).then(()=>d().data):d().data};if(e.length<3)return b();let O=r,R=A();_[s]=[R,0];let T=!u(v),x=d(),L=x.data,k=x._c,C=u(k)?L:k;if(T&&y({data:v=l(v)?v(C,L):v,_c:C}),l(O))try{O=O(C)}catch(e){i=e}if(O&&c(O)){if(O=await O.catch(e=>{i=e}),R!==_[s][0]){if(i)throw i;return O}i&&T&&p(i)&&(f=!0,y({data:C,_c:o}))}if(f&&!i&&(l(f)?y({data:f(O,C),error:o,_c:o}):y({data:O,error:o,_c:o})),_[s][1]=A(),Promise.resolve(b()).then(()=>{y({_c:o})}),i){if(E)throw i;return}return O}}let F=(e,t)=>{for(let n in e)e[n][0]&&e[n][0](t)},W=(e,t)=>{if(!w.has(e)){let n=s(R,t),r={},a=M.bind(o,e),u=i,l={},c=(e,t)=>{let n=l[e]||[];return l[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},f=(t,n,r)=>{e.set(t,n);let i=l[t];if(i)for(let e of i)e(n,r)},d=()=>{if(!w.has(e)&&(w.set(e,[r,{},{},{},a,f,c]),!x)){let t=n.initFocus(setTimeout.bind(o,F.bind(o,r,0))),i=n.initReconnect(setTimeout.bind(o,F.bind(o,r,1)));u=()=>{t&&t(),i&&i(),w.delete(e)}}};return d(),[e,a,d,u]}return[e,w.get(e)[4]]},[$,J]=W(new Map),P=s({onLoadingSlow:i,onSuccess:i,onError:i,onErrorRetry:(e,t,n,r,i)=>{let o=n.errorRetryCount,a=i.retryCount,l=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;(u(o)||!(a>o))&&setTimeout(r,l,i)},onDiscarded:i,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:D?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:D?5e3:3e3,compare:(e,t)=>v(e)==v(t),isPaused:()=>!1,cache:$,mutate:J,fallback:{}},{isOnline:()=>S,isVisible:()=>{let e=_&&document.visibilityState;return u(e)||"hidden"!==e}}),U=(e,t)=>{let n=s(e,t);if(t){let{use:r,fallback:i}=e,{use:o,fallback:a}=t;r&&o&&(n.use=r.concat(o)),i&&a&&(n.fallback=s(i,a))}return n},j=(0,r.createContext)({}),q=e=>{let{value:t}=e,n=(0,r.useContext)(j),i=l(t),a=(0,r.useMemo)(()=>i?t(n):t,[i,n,t]),u=(0,r.useMemo)(()=>i?a:U(n,a),[i,n,a]),c=a&&a.provider,f=(0,r.useRef)(o);c&&!f.current&&(f.current=W(c(u.cache||$),a));let d=f.current;return d&&(u.cache=d[0],u.mutate=d[1]),k(()=>{if(d)return d[2]&&d[2](),d[3]},[]),(0,r.createElement)(j.Provider,s(e,{value:u}))},G="$inf$",B=h&&window.__SWR_DEVTOOLS_USE__,Y=B?window.__SWR_DEVTOOLS_USE__:[],z=e=>l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],H=()=>s(P,(0,r.useContext)(j)),K=Y.concat(e=>(t,n,r)=>{let i=n&&((...e)=>{let[r]=N(t),[,,,i]=w.get($);if(r.startsWith(G))return n(...e);let o=i[r];return u(o)?n(...e):(delete i[r],o)});return e(t,i,r)}),Q=e=>function(...t){let n=H(),[r,i,o]=z(t),a=U(n,o),u=e,{use:l}=a,s=(l||[]).concat(K);for(let e=s.length;e--;)u=s[e](u);return u(r,i||a.fetcher||null,a)},X=(e,t,n)=>{let r=t[e]||(t[e]=[]);return r.push(n),()=>{let e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},Z=(e,t)=>(...n)=>{let[r,i,o]=z(n),a=(o.use||[]).concat(t);return e(r,i,{...o,use:a})};B&&(window.__SWR_DEVTOOLS_REACT__=r)}};