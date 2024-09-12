"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4898],{30699:function(e,t,n){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,u=r.useEffect,a=r.useLayoutEffect,c=r.useDebugValue;function f(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return a(function(){i.value=n,i.getSnapshot=t,f(i)&&l({inst:i})},[e,n,t]),u(function(){return f(i)&&l({inst:i}),e(function(){f(i)&&l({inst:i})})},[e]),c(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},22362:function(e,t,n){e.exports=n(30699)},9417:function(e,t,n){n.d(t,{$l:function(){return u},BN:function(){return M},DY:function(){return E},Fs:function(){return $},J$:function(){return q},JG:function(){return J},JN:function(){return m},LI:function(){return L},PM:function(){return f},UG:function(){return G},W6:function(){return k},i_:function(){return o},ko:function(){return X},kw:function(){return C},mf:function(){return c},o8:function(){return a},qC:function(){return x},s6:function(){return Q},sj:function(){return I},u3:function(){return A},u_:function(){return P},w6:function(){return T},xD:function(){return Z}});var r=n(2265);let i=()=>{},o=i(),u=Object,a=e=>e===o,c=e=>"function"==typeof e,f=(e,t)=>({...e,...t}),l=e=>c(e.then),s=new WeakMap,d=0,w=e=>{let t,n;let r=typeof e,i=e&&e.constructor,o=i==Date;if(u(e)!==e||o||i==RegExp)t=o?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=s.get(e))return t;if(t=++d+"~",s.set(e,t),i==Array){for(n=0,t="@";n<e.length;n++)t+=w(e[n])+",";s.set(e,t)}if(i==u){t="#";let r=u.keys(e).sort();for(;!a(n=r.pop());)a(e[n])||(t+=n+":"+w(e[n])+",");s.set(e,t)}}return t},E=new WeakMap,v={},p={},_="undefined",h=typeof window!=_,y=typeof document!=_,g=()=>h&&typeof window.requestAnimationFrame!=_,m=(e,t)=>{let n=E.get(e);return[()=>!a(t)&&e.get(t)||v,r=>{if(!a(t)){let i=e.get(t);t in p||(p[t]=i),n[5](t,f(i,r),i||v)}},n[6],()=>!a(t)&&t in p?p[t]:!a(t)&&e.get(t)||v]},S=!0,[b,O]=h&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[i,i],R={initFocus:e=>(y&&document.addEventListener("visibilitychange",e),b("focus",e),()=>{y&&document.removeEventListener("visibilitychange",e),O("focus",e)}),initReconnect:e=>{let t=()=>{S=!0,e()},n=()=>{S=!1};return b("online",t),b("offline",n),()=>{O("online",t),O("offline",n)}}},T=!r.useId,k=!h||"Deno"in window,C=e=>g()?window.requestAnimationFrame(e):setTimeout(e,1),L=k?r.useEffect:r.useLayoutEffect,D="undefined"!=typeof navigator&&navigator.connection,N=!k&&D&&(["slow-2g","2g"].includes(D.effectiveType)||D.saveData),x=e=>{if(c(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?w(e):"",t]},V=0,A=()=>++V;var I={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function M(...e){let[t,n,r,i]=e,u=f({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),s=u.populateCache,d=u.rollbackOnError,w=u.optimisticData,v=e=>"function"==typeof d?d(e):!1!==d,p=u.throwOnError;if(c(n)){let e=[];for(let r of t.keys())!/^\$(inf|sub)\$/.test(r)&&n(t.get(r)._k)&&e.push(r);return Promise.all(e.map(_))}return _(n);async function _(n){let i;let[f]=x(n);if(!f)return;let[d,_]=m(t,f),[h,y,g,S]=E.get(t),b=()=>{let e=h[f];return(c(u.revalidate)?u.revalidate(d().data,n):!1!==u.revalidate)&&(delete g[f],delete S[f],e&&e[0])?e[0](2).then(()=>d().data):d().data};if(e.length<3)return b();let O=r,R=A();y[f]=[R,0];let T=!a(w),k=d(),C=k.data,L=k._c,D=a(L)?C:L;if(T&&_({data:w=c(w)?w(D,C):w,_c:D}),c(O))try{O=O(D)}catch(e){i=e}if(O&&l(O)){if(O=await O.catch(e=>{i=e}),R!==y[f][0]){if(i)throw i;return O}i&&T&&v(i)&&(s=!0,_({data:D,_c:o}))}if(s&&!i&&(c(s)?_({data:s(O,D),error:o,_c:o}):_({data:O,error:o,_c:o})),y[f][1]=A(),Promise.resolve(b()).then(()=>{_({_c:o})}),i){if(p)throw i;return}return O}}let F=(e,t)=>{for(let n in e)e[n][0]&&e[n][0](t)},W=(e,t)=>{if(!E.has(e)){let n=f(R,t),r={},u=M.bind(o,e),a=i,c={},l=(e,t)=>{let n=c[e]||[];return c[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},s=(t,n,r)=>{e.set(t,n);let i=c[t];if(i)for(let e of i)e(n,r)},d=()=>{if(!E.has(e)&&(E.set(e,[r,{},{},{},u,s,l]),!k)){let t=n.initFocus(setTimeout.bind(o,F.bind(o,r,0))),i=n.initReconnect(setTimeout.bind(o,F.bind(o,r,1)));a=()=>{t&&t(),i&&i(),E.delete(e)}}};return d(),[e,u,d,a]}return[e,E.get(e)[4]]},[$,J]=W(new Map),P=f({onLoadingSlow:i,onSuccess:i,onError:i,onErrorRetry:(e,t,n,r,i)=>{let o=n.errorRetryCount,u=i.retryCount,c=~~((Math.random()+.5)*(1<<(u<8?u:8)))*n.errorRetryInterval;(a(o)||!(u>o))&&setTimeout(r,c,i)},onDiscarded:i,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:N?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:N?5e3:3e3,compare:(e,t)=>w(e)==w(t),isPaused:()=>!1,cache:$,mutate:J,fallback:{}},{isOnline:()=>S,isVisible:()=>{let e=y&&document.visibilityState;return a(e)||"hidden"!==e}}),U=(e,t)=>{let n=f(e,t);if(t){let{use:r,fallback:i}=e,{use:o,fallback:u}=t;r&&o&&(n.use=r.concat(o)),i&&u&&(n.fallback=f(i,u))}return n},j=(0,r.createContext)({}),q=e=>{let{value:t}=e,n=(0,r.useContext)(j),i=c(t),u=(0,r.useMemo)(()=>i?t(n):t,[i,n,t]),a=(0,r.useMemo)(()=>i?u:U(n,u),[i,n,u]),l=u&&u.provider,s=(0,r.useRef)(o);l&&!s.current&&(s.current=W(l(a.cache||$),u));let d=s.current;return d&&(a.cache=d[0],a.mutate=d[1]),L(()=>{if(d)return d[2]&&d[2](),d[3]},[]),(0,r.createElement)(j.Provider,f(e,{value:a}))},G="$inf$",B=h&&window.__SWR_DEVTOOLS_USE__,Y=B?window.__SWR_DEVTOOLS_USE__:[],z=e=>c(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],H=()=>f(P,(0,r.useContext)(j)),K=Y.concat(e=>(t,n,r)=>{let i=n&&((...e)=>{let[r]=x(t),[,,,i]=E.get($);if(r.startsWith(G))return n(...e);let o=i[r];return a(o)?n(...e):(delete i[r],o)});return e(t,i,r)}),Q=e=>function(...t){let n=H(),[r,i,o]=z(t),u=U(n,o),a=e,{use:c}=u,f=(c||[]).concat(K);for(let e=f.length;e--;)a=f[e](a);return a(r,i||u.fetcher||null,u)},X=(e,t,n)=>{let r=t[e]||(t[e]=[]);return r.push(n),()=>{let e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},Z=(e,t)=>(...n)=>{let[r,i,o]=z(n),u=(o.use||[]).concat(t);return e(r,i,{...o,use:u})};B&&(window.__SWR_DEVTOOLS_REACT__=r)}}]);