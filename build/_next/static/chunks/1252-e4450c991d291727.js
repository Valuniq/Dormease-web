"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1252],{81252:function(e,t,r){r.d(t,{JG:function(){return u.JG},ZP:function(){return l}});var n=r(2265),i=r(22362),u=r(9417);let a=n.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),s={dedupe:!0};u.$l.defineProperty(u.J$,"defaultValue",{value:u.u_});let l=(0,u.s6)((e,t,r)=>{let{cache:l,compare:o,suspense:d,fallbackData:c,revalidateOnMount:f,revalidateIfStale:g,refreshInterval:E,refreshWhenHidden:R,refreshWhenOffline:V,keepPreviousData:T}=r,[_,L,h,w]=u.DY.get(l),[k,b]=(0,u.qC)(e),p=(0,n.useRef)(!1),v=(0,n.useRef)(!1),C=(0,n.useRef)(k),N=(0,n.useRef)(t),m=(0,n.useRef)(r),O=()=>m.current,j=()=>O().isVisible()&&O().isOnline(),[y,D,I,P]=(0,u.JN)(l,k),S=(0,n.useRef)({}).current,A=(0,u.o8)(c)?r.fallback[k]:c,F=(e,t)=>{for(let r in S)if("data"===r){if(!o(e[r],t[r])&&(!(0,u.o8)(e[r])||!o(B,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},J=(0,n.useMemo)(()=>{let e=!!k&&!!t&&((0,u.o8)(f)?!O().isPaused()&&!d&&(!!(0,u.o8)(g)||g):f),r=t=>{let r=(0,u.PM)(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=y(),i=P(),a=r(n),s=n===i?a:r(i),l=a;return[()=>{let e=r(y());return F(e,l)?(l.data=e.data,l.isLoading=e.isLoading,l.isValidating=e.isValidating,l.error=e.error,l):(l=e,e)},()=>s]},[l,k]),M=(0,i.useSyncExternalStore)((0,n.useCallback)(e=>I(k,(t,r)=>{F(r,t)||e()}),[l,k]),J[0],J[1]),q=!p.current,G=_[k]&&_[k].length>0,U=M.data,W=(0,u.o8)(U)?A:U,$=M.error,x=(0,n.useRef)(W),B=T?(0,u.o8)(U)?x.current:U:W,Y=(!G||!!(0,u.o8)($))&&(q&&!(0,u.o8)(f)?f:!O().isPaused()&&(d?!(0,u.o8)(W)&&g:(0,u.o8)(W)||g)),Z=!!(k&&t&&q&&Y),z=(0,u.o8)(M.isValidating)?Z:M.isValidating,H=(0,u.o8)(M.isLoading)?Z:M.isLoading,K=(0,n.useCallback)(async e=>{let t,n;let i=N.current;if(!k||!i||v.current||O().isPaused())return!1;let a=!0,s=e||{},l=!h[k]||!s.dedupe,d=()=>u.w6?!v.current&&k===C.current&&p.current:k===C.current,c={isValidating:!1,isLoading:!1},f=()=>{D(c)},g=()=>{let e=h[k];e&&e[1]===n&&delete h[k]},E={isValidating:!0};(0,u.o8)(y().data)&&(E.isLoading=!0);try{if(l&&(D(E),r.loadingTimeout&&(0,u.o8)(y().data)&&setTimeout(()=>{a&&d()&&O().onLoadingSlow(k,r)},r.loadingTimeout),h[k]=[i(b),(0,u.u3)()]),[t,n]=h[k],t=await t,l&&setTimeout(g,r.dedupingInterval),!h[k]||h[k][1]!==n)return l&&d()&&O().onDiscarded(k),!1;c.error=u.i_;let e=L[k];if(!(0,u.o8)(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return f(),l&&d()&&O().onDiscarded(k),!1;let s=y().data;c.data=o(s,t)?s:t,l&&d()&&O().onSuccess(t,k,r)}catch(r){g();let e=O(),{shouldRetryOnError:t}=e;!e.isPaused()&&(c.error=r,l&&d()&&(e.onError(r,k,e),(!0===t||(0,u.mf)(t)&&t(r))&&(!O().revalidateOnFocus||!O().revalidateOnReconnect||j())&&e.onErrorRetry(r,k,e,e=>{let t=_[k];t&&t[0]&&t[0](u.sj.ERROR_REVALIDATE_EVENT,e)},{retryCount:(s.retryCount||0)+1,dedupe:!0})))}return a=!1,f(),!0},[k,l]),Q=(0,n.useCallback)((...e)=>(0,u.BN)(l,C.current,...e),[]);if((0,u.LI)(()=>{N.current=t,m.current=r,(0,u.o8)(U)||(x.current=U)}),(0,u.LI)(()=>{if(!k)return;let e=K.bind(u.i_,s),t=0,r=(0,u.ko)(k,_,(r,n={})=>{if(r==u.sj.FOCUS_EVENT){let r=Date.now();O().revalidateOnFocus&&r>t&&j()&&(t=r+O().focusThrottleInterval,e())}else if(r==u.sj.RECONNECT_EVENT)O().revalidateOnReconnect&&j()&&e();else if(r==u.sj.MUTATE_EVENT)return K();else if(r==u.sj.ERROR_REVALIDATE_EVENT)return K(n)});return v.current=!1,C.current=k,p.current=!0,D({_k:b}),Y&&((0,u.o8)(W)||u.W6?e():(0,u.kw)(e)),()=>{v.current=!0,r()}},[k]),(0,u.LI)(()=>{let e;function t(){let t=(0,u.mf)(E)?E(y().data):E;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!y().error&&(R||O().isVisible())&&(V||O().isOnline())?K(s).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[E,R,V,k]),(0,n.useDebugValue)(B),d&&(0,u.o8)(W)&&k){if(!u.w6&&u.W6)throw Error("Fallback data is required when using suspense in SSR.");N.current=t,m.current=r,v.current=!1;let e=w[k];if((0,u.o8)(e)||a(Q(e)),(0,u.o8)($)){let e=K(s);(0,u.o8)(B)||(e.status="fulfilled",e.value=!0),a(e)}else throw $}return{mutate:Q,get data(){return S.data=!0,B},get error(){return S.error=!0,$},get isValidating(){return S.isValidating=!0,z},get isLoading(){return S.isLoading=!0,H}}})}}]);