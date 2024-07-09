"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4817],{4817:function(e,t,r){r.d(t,{ZP:function(){return c}});var a=r(2265),n=r(2362),i=r(9417);let u=a.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),l={dedupe:!0};i.$l.defineProperty(i.J$,"defaultValue",{value:i.u_});let s=(0,i.s6)((e,t,r)=>{let{cache:s,compare:o,suspense:d,fallbackData:c,revalidateOnMount:f,revalidateIfStale:g,refreshInterval:_,refreshWhenHidden:E,refreshWhenOffline:R,keepPreviousData:V}=r,[b,k,h,m]=i.DY.get(s),[p,C]=(0,i.qC)(e),w=(0,a.useRef)(!1),L=(0,a.useRef)(!1),v=(0,a.useRef)(p),N=(0,a.useRef)(t),T=(0,a.useRef)(r),y=()=>T.current,O=()=>y().isVisible()&&y().isOnline(),[D,P,S,I]=(0,i.JN)(s,p),J=(0,a.useRef)({}).current,j=(0,i.o8)(c)?r.fallback[p]:c,q=(e,t)=>{for(let r in J)if("data"===r){if(!o(e[r],t[r])&&(!(0,i.o8)(e[r])||!o(z,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},A=(0,a.useMemo)(()=>{let e=!!p&&!!t&&((0,i.o8)(f)?!y().isPaused()&&!d&&(!!(0,i.o8)(g)||g):f),r=t=>{let r=(0,i.PM)(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},a=D(),n=I(),u=r(a),l=a===n?u:r(n),s=u;return[()=>{let e=r(D());return q(e,s)?(s.data=e.data,s.isLoading=e.isLoading,s.isValidating=e.isValidating,s.error=e.error,s):(s=e,e)},()=>l]},[s,p]),F=(0,n.useSyncExternalStore)((0,a.useCallback)(e=>S(p,(t,r)=>{q(r,t)||e()}),[s,p]),A[0],A[1]),x=!w.current,M=b[p]&&b[p].length>0,U=F.data,W=(0,i.o8)(U)?j:U,Y=F.error,$=(0,a.useRef)(W),z=V?(0,i.o8)(U)?$.current:U:W,B=(!M||!!(0,i.o8)(Y))&&(x&&!(0,i.o8)(f)?f:!y().isPaused()&&(d?!(0,i.o8)(W)&&g:(0,i.o8)(W)||g)),G=!!(p&&t&&x&&B),Z=(0,i.o8)(F.isValidating)?G:F.isValidating,H=(0,i.o8)(F.isLoading)?G:F.isLoading,K=(0,a.useCallback)(async e=>{let t,a;let n=N.current;if(!p||!n||L.current||y().isPaused())return!1;let u=!0,l=e||{},s=!h[p]||!l.dedupe,d=()=>i.w6?!L.current&&p===v.current&&w.current:p===v.current,c={isValidating:!1,isLoading:!1},f=()=>{P(c)},g=()=>{let e=h[p];e&&e[1]===a&&delete h[p]},_={isValidating:!0};(0,i.o8)(D().data)&&(_.isLoading=!0);try{if(s&&(P(_),r.loadingTimeout&&(0,i.o8)(D().data)&&setTimeout(()=>{u&&d()&&y().onLoadingSlow(p,r)},r.loadingTimeout),h[p]=[n(C),(0,i.u3)()]),[t,a]=h[p],t=await t,s&&setTimeout(g,r.dedupingInterval),!h[p]||h[p][1]!==a)return s&&d()&&y().onDiscarded(p),!1;c.error=i.i_;let e=k[p];if(!(0,i.o8)(e)&&(a<=e[0]||a<=e[1]||0===e[1]))return f(),s&&d()&&y().onDiscarded(p),!1;let l=D().data;c.data=o(l,t)?l:t,s&&d()&&y().onSuccess(t,p,r)}catch(r){g();let e=y(),{shouldRetryOnError:t}=e;!e.isPaused()&&(c.error=r,s&&d()&&(e.onError(r,p,e),(!0===t||(0,i.mf)(t)&&t(r))&&(!y().revalidateOnFocus||!y().revalidateOnReconnect||O())&&e.onErrorRetry(r,p,e,e=>{let t=b[p];t&&t[0]&&t[0](i.sj.ERROR_REVALIDATE_EVENT,e)},{retryCount:(l.retryCount||0)+1,dedupe:!0})))}return u=!1,f(),!0},[p,s]),Q=(0,a.useCallback)((...e)=>(0,i.BN)(s,v.current,...e),[]);if((0,i.LI)(()=>{N.current=t,T.current=r,(0,i.o8)(U)||($.current=U)}),(0,i.LI)(()=>{if(!p)return;let e=K.bind(i.i_,l),t=0,r=(0,i.ko)(p,b,(r,a={})=>{if(r==i.sj.FOCUS_EVENT){let r=Date.now();y().revalidateOnFocus&&r>t&&O()&&(t=r+y().focusThrottleInterval,e())}else if(r==i.sj.RECONNECT_EVENT)y().revalidateOnReconnect&&O()&&e();else if(r==i.sj.MUTATE_EVENT)return K();else if(r==i.sj.ERROR_REVALIDATE_EVENT)return K(a)});return L.current=!1,v.current=p,w.current=!0,P({_k:C}),B&&((0,i.o8)(W)||i.W6?e():(0,i.kw)(e)),()=>{L.current=!0,r()}},[p]),(0,i.LI)(()=>{let e;function t(){let t=(0,i.mf)(_)?_(D().data):_;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!D().error&&(E||y().isVisible())&&(R||y().isOnline())?K(l).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[_,E,R,p]),(0,a.useDebugValue)(z),d&&(0,i.o8)(W)&&p){if(!i.w6&&i.W6)throw Error("Fallback data is required when using suspense in SSR.");N.current=t,T.current=r,L.current=!1;let e=m[p];if((0,i.o8)(e)||u(Q(e)),(0,i.o8)(Y)){let e=K(l);(0,i.o8)(z)||(e.status="fulfilled",e.value=!0),u(e)}else throw Y}return{mutate:Q,get data(){return J.data=!0,z},get error(){return J.error=!0,Y},get isValidating(){return J.isValidating=!0,Z},get isLoading(){return J.isLoading=!0,H}}}),o=e=>(0,i.qC)(e?e(0,null):null)[0],d=Promise.resolve(),c=(0,i.xD)(s,e=>(t,r,u)=>{let l;let s=(0,a.useRef)(!1),{cache:c,initialSize:f=1,revalidateAll:g=!1,persistSize:_=!1,revalidateFirstPage:E=!0,revalidateOnMount:R=!1,parallel:V=!1}=u,[,,,b]=i.DY.get(i.Fs);try{(l=o(t))&&(l=i.UG+l)}catch(e){}let[k,h,m]=(0,i.JN)(c,l),p=(0,a.useCallback)(()=>(0,i.o8)(k()._l)?f:k()._l,[c,l,f]);(0,n.useSyncExternalStore)((0,a.useCallback)(e=>l?m(l,()=>{e()}):()=>{},[c,l]),p,p);let C=(0,a.useCallback)(()=>{let e=k()._l;return(0,i.o8)(e)?f:e},[l,f]),w=(0,a.useRef)(C());(0,i.LI)(()=>{if(!s.current){s.current=!0;return}l&&h({_l:_?w.current:C()})},[l,c]);let L=R&&!s.current,v=e(l,async e=>{let a=k()._i,n=k()._r;h({_r:i.i_});let l=[],s=C(),[o]=(0,i.JN)(c,e),d=o().data,f=[],_=null;for(let e=0;e<s;++e){let[s,o]=(0,i.qC)(t(e,V?null:_));if(!s)break;let[R,k]=(0,i.JN)(c,s),h=R().data,m=g||a||(0,i.o8)(h)||E&&!e&&!(0,i.o8)(d)||L||d&&!(0,i.o8)(d[e])&&!u.compare(d[e],h);if(r&&("function"==typeof n?n(h,o):m)){let t=async()=>{if(s in b){let e=b[s];delete b[s],h=await e}else h=await r(o);k({data:h,_k:o}),l[e]=h};V?f.push(t):await t()}else l[e]=h;V||(_=h)}return V&&await Promise.all(f.map(e=>e())),h({_i:i.i_}),l},u),N=(0,a.useCallback)(function(e,t){let r="boolean"==typeof t?{revalidate:t}:t||{},a=!1!==r.revalidate;return l?(a&&((0,i.o8)(e)?h({_i:!0,_r:r.revalidate}):h({_i:!1,_r:r.revalidate})),arguments.length?v.mutate(e,{...r,revalidate:a}):v.mutate()):d},[l,c]),T=(0,a.useCallback)(e=>{let r;if(!l)return d;let[,a]=(0,i.JN)(c,l);if((0,i.mf)(e)?r=e(C()):"number"==typeof e&&(r=e),"number"!=typeof r)return d;a({_l:r}),w.current=r;let n=[],[u]=(0,i.JN)(c,l),s=null;for(let e=0;e<r;++e){let[r]=(0,i.qC)(t(e,s)),[a]=(0,i.JN)(c,r),l=r?a().data:i.i_;if((0,i.o8)(l))return N(u().data);n.push(l),s=l}return N(n)},[l,c,N,C]);return{size:C(),setSize:T,mutate:N,get data(){return v.data},get error(){return v.error},get isValidating(){return v.isValidating},get isLoading(){return v.isLoading}}})}}]);