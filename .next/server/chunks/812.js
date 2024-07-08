"use strict";exports.id=812,exports.ids=[812],exports.modules={7785:(e,t)=>{/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),o=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator,{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),n=Object.assign,a={};function i(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||o}function u(){}function s(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||o}i.prototype.isReactComponent={},i.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},u.prototype=i.prototype;var l=s.prototype=new u;l.constructor=s,n(l,i.prototype),l.isPureReactComponent=!0;var c=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,o){var n,a={},i=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)c.call(t,n)&&!d.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(1===s)a.children=o;else if(1<s){for(var l=Array(s),f=0;f<s;f++)l[f]=arguments[f+2];a.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:r,type:e,key:i,ref:u,props:a,_owner:null}}},6413:(e,t,r)=>{e.exports=r(7785)},6161:(e,t,r)=>{r.d(t,{JG:()=>a.JG,ZP:()=>s});var o=r(3729),n=r(8145),a=r(276);let i=o.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),u={dedupe:!0};a.$l.defineProperty(a.J$,"defaultValue",{value:a.u_});let s=(0,a.s6)((e,t,r)=>{let{cache:s,compare:l,suspense:c,fallbackData:d,revalidateOnMount:f,revalidateIfStale:p,refreshInterval:y,refreshWhenHidden:g,refreshWhenOffline:h,keepPreviousData:m}=r,[b,S,E,v]=a.DY.get(s),[R,V]=(0,a.qC)(e),w=(0,o.useRef)(!1),_=(0,o.useRef)(!1),T=(0,o.useRef)(R),L=(0,o.useRef)(t),k=(0,o.useRef)(r),O=()=>k.current,j=()=>O().isVisible()&&O().isOnline(),[P,C,N,x]=(0,a.JN)(s,R),q=(0,o.useRef)({}).current,D=(0,a.o8)(d)?r.fallback[R]:d,I=(e,t)=>{for(let r in q)if("data"===r){if(!l(e[r],t[r])&&(!(0,a.o8)(e[r])||!l(z,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},A=(0,o.useMemo)(()=>{let e=!!R&&!!t&&((0,a.o8)(f)?!O().isPaused()&&!c&&(!!(0,a.o8)(p)||p):f),r=t=>{let r=(0,a.PM)(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},o=P(),n=x(),i=r(o),u=o===n?i:r(n),s=i;return[()=>{let e=r(P());return I(e,s)?(s.data=e.data,s.isLoading=e.isLoading,s.isValidating=e.isValidating,s.error=e.error,s):(s=e,e)},()=>u]},[s,R]),F=(0,n.useSyncExternalStore)((0,o.useCallback)(e=>N(R,(t,r)=>{I(r,t)||e()}),[s,R]),A[0],A[1]),U=!w.current,J=b[R]&&b[R].length>0,M=F.data,$=(0,a.o8)(M)?D:M,G=F.error,W=(0,o.useRef)($),z=m?(0,a.o8)(M)?W.current:M:$,B=(!J||!!(0,a.o8)(G))&&(U&&!(0,a.o8)(f)?f:!O().isPaused()&&(c?!(0,a.o8)($)&&p:(0,a.o8)($)||p)),Y=!!(R&&t&&U&&B),Z=(0,a.o8)(F.isValidating)?Y:F.isValidating,H=(0,a.o8)(F.isLoading)?Y:F.isLoading,K=(0,o.useCallback)(async e=>{let t,o;let n=L.current;if(!R||!n||_.current||O().isPaused())return!1;let i=!0,u=e||{},s=!E[R]||!u.dedupe,c=()=>a.w6?!_.current&&R===T.current&&w.current:R===T.current,d={isValidating:!1,isLoading:!1},f=()=>{C(d)},p=()=>{let e=E[R];e&&e[1]===o&&delete E[R]},y={isValidating:!0};(0,a.o8)(P().data)&&(y.isLoading=!0);try{if(s&&(C(y),r.loadingTimeout&&(0,a.o8)(P().data)&&setTimeout(()=>{i&&c()&&O().onLoadingSlow(R,r)},r.loadingTimeout),E[R]=[n(V),(0,a.u3)()]),[t,o]=E[R],t=await t,s&&setTimeout(p,r.dedupingInterval),!E[R]||E[R][1]!==o)return s&&c()&&O().onDiscarded(R),!1;d.error=a.i_;let e=S[R];if(!(0,a.o8)(e)&&(o<=e[0]||o<=e[1]||0===e[1]))return f(),s&&c()&&O().onDiscarded(R),!1;let u=P().data;d.data=l(u,t)?u:t,s&&c()&&O().onSuccess(t,R,r)}catch(r){p();let e=O(),{shouldRetryOnError:t}=e;!e.isPaused()&&(d.error=r,s&&c()&&(e.onError(r,R,e),(!0===t||(0,a.mf)(t)&&t(r))&&(!O().revalidateOnFocus||!O().revalidateOnReconnect||j())&&e.onErrorRetry(r,R,e,e=>{let t=b[R];t&&t[0]&&t[0](a.sj.ERROR_REVALIDATE_EVENT,e)},{retryCount:(u.retryCount||0)+1,dedupe:!0})))}return i=!1,f(),!0},[R,s]),Q=(0,o.useCallback)((...e)=>(0,a.BN)(s,T.current,...e),[]);if((0,a.LI)(()=>{L.current=t,k.current=r,(0,a.o8)(M)||(W.current=M)}),(0,a.LI)(()=>{if(!R)return;let e=K.bind(a.i_,u),t=0,r=(0,a.ko)(R,b,(r,o={})=>{if(r==a.sj.FOCUS_EVENT){let r=Date.now();O().revalidateOnFocus&&r>t&&j()&&(t=r+O().focusThrottleInterval,e())}else if(r==a.sj.RECONNECT_EVENT)O().revalidateOnReconnect&&j()&&e();else if(r==a.sj.MUTATE_EVENT)return K();else if(r==a.sj.ERROR_REVALIDATE_EVENT)return K(o)});return _.current=!1,T.current=R,w.current=!0,C({_k:V}),B&&((0,a.o8)($)||a.W6?e():(0,a.kw)(e)),()=>{_.current=!0,r()}},[R]),(0,a.LI)(()=>{let e;function t(){let t=(0,a.mf)(y)?y(P().data):y;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!P().error&&(g||O().isVisible())&&(h||O().isOnline())?K(u).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[y,g,h,R]),(0,o.useDebugValue)(z),c&&(0,a.o8)($)&&R){if(!a.w6&&a.W6)throw Error("Fallback data is required when using suspense in SSR.");L.current=t,k.current=r,_.current=!1;let e=v[R];if((0,a.o8)(e)||i(Q(e)),(0,a.o8)(G)){let e=K(u);(0,a.o8)(z)||(e.status="fulfilled",e.value=!0),i(e)}else throw G}return{mutate:Q,get data(){return q.data=!0,z},get error(){return q.error=!0,G},get isValidating(){return q.isValidating=!0,Z},get isLoading(){return q.isLoading=!0,H}}})}};