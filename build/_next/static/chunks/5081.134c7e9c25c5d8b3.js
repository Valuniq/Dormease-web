"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5081],{2671:function(e,t){/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),o=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),n=Object.assign,a={};function c(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||o}function i(){}function s(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||o}c.prototype.isReactComponent={},c.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},c.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},i.prototype=c.prototype;var u=s.prototype=new i;u.constructor=s,n(u,c.prototype),u.isPureReactComponent=!0;var l=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,o){var n,a={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)l.call(t,n)&&!f.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(1===s)a.children=o;else if(1<s){for(var u=Array(s),p=0;p<s;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:r,type:e,key:c,ref:i,props:a,_owner:null}}},2846:function(e,t,r){e.exports=r(2671)},5081:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var o,n=r(7437);r(2265);var a=r(2846);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var i=function(e){return a.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none"},e),o||(o=a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.125,d:"m7.039 3.292-5.205 5.9a3 3 0 0 0 .265 4.233l.715.63a3 3 0 0 0 4.234-.264l7.418-8.408a1.875 1.875 0 0 0-.165-2.646l-.915-.807a1.875 1.875 0 0 0-2.644.163L3.847 9.881a1.125 1.125 0 0 0 .098 1.589l.548.483c.465.41 1.175.367 1.586-.097l5.485-6.185"})))},s=e=>{let{label:t,...r}=e;return(0,n.jsxs)("button",{...r,className:"H4 flex items-center justify-center w-124 h-30 rounded-8 bg-gray-grayscale5 text-gray-grayscale50 hover:text-white hover:bg-blue-blue30 hover:hover-transition active:text-white active:bg-blue-blue50",children:[t,(0,n.jsx)(i,{className:"ml-8"})]})}}}]);