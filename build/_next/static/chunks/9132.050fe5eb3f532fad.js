(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9132,2734],{47907:function(e,t,r){"use strict";var n=r(15313);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},9088:function(e,t,r){"use strict";var n=r(57437);t.Z=e=>{let{label:t,onClick:r,hoverColor:o}=e,{btnHoverColor:l}=(e=>{switch(e){case"blue":default:return{btnHoverColor:"hover:bg-blue-blue30"};case"gray":return{btnHoverColor:"hover:bg-gray-grayscale20"};case"red":return{btnHoverColor:"hover:bg-red-red20"};case"green":return{btnHoverColor:"hover:bg-green-green20"}}})(o);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("button",{onClick:r,className:"mr-16 w-86 h-32 rounded-20 ".concat(l," hover-transition"),children:"gray"===o?(0,n.jsx)("h1",{className:"H4 text-gray-grayscale40",children:t}):(0,n.jsx)("h1",{className:"H4 text-gray-grayscale40  hover:text-white",children:t})})})}},26066:function(e,t,r){"use strict";var n=r(57437),o=r(20703),l=r(95343),a=r(42866);r(2265),t.Z=e=>{let{bgColor:t,onCancel:r}=e;return(0,n.jsxs)("div",{className:"".concat(t||"bg-blue-blue30"," w-full h-39  flex justify-between pl-15 rounded-t-8"),children:[(0,n.jsx)(o.default,{src:l.Z,alt:"PromptLogo",className:"object-contain",width:39,height:11.65}),(0,n.jsx)("button",{className:"hover:bg-red-red30 ".concat(t||"bg-blue-blue30"," w-39 h-39 flex items-center justify-center rounded-tr-8 hover-transition"),onClick:r,children:(0,n.jsx)(o.default,{src:a.Z,alt:"PromptOut",className:"object-contain",width:10,height:10})})]})}},79517:function(e,t,r){"use strict";var n=r(57437),o=r(2265),l=r(54887);t.Z=e=>{let{children:t,isOpen:r}=e;return(0,o.useEffect)(()=>(r?window.document.body.style.overflow="hidden":window.document.body.style.overflow="auto",()=>{window.document.body.style.overflow="auto"}),[r]),(0,l.createPortal)((0,n.jsx)("div",{className:"fixed z-backdrop top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center",children:(0,n.jsx)("div",{className:"xl:scale-65 xxl:scale-80 lg:scale-65 md:scale-50 sm:scale-40",children:null!=t?t:null})}),document.body)}},91723:function(e,t,r){"use strict";var n=r(57437),o=r(20703),l=r(22992),a=r(9088),i=r(26066);t.Z=e=>{let{variant:t,label:r,onConfirm:s,onCancel:u}=e,{bgHeader:c}=(e=>{switch(e){case"blue":default:return{bgHeader:"bg-blue-blue30"};case"red":return{bgHeader:"bg-red-red20"};case"green":return{bgHeader:"bg-green-green20"}}})(t);return(0,n.jsxs)("div",{className:"w-456 h-194 flex flex-col items-center rounded-8 shadow-xl bg-white pb-15",children:[(0,n.jsx)(i.Z,{bgColor:c,onCancel:u}),(0,n.jsx)(o.default,{src:l.Z,className:"mt-19 mb-16",width:22,height:19,alt:"PromptWarning"}),(0,n.jsx)("h1",{className:"alert-cap text-gray-grayscale50 text-center",children:r.split("\\n").map((e,t)=>(0,n.jsx)("p",{className:"leading-25",children:e},t))}),(0,n.jsxs)("div",{className:"ml-auto mt-auto",children:[(0,n.jsx)(a.Z,{label:"취소",onClick:u,hoverColor:t}),(0,n.jsx)(a.Z,{label:"확인",onClick:s,hoverColor:t})]})]})}},58640:function(e,t,r){"use strict";r.d(t,{_:function(){return n}});let n="https://www.dormease-dev.kro.kr"},89652:function(e,t,r){"use strict";r.d(t,{L:function(){return n},z:function(){return o}});let n="ACCESS_TOKEN",o="REFRESH_TOKEN"},2734:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(57437),o=r(24232),l=r(2265),a=r(47907),i=r(82813);r(21851);var s=r(65615),u=r(32153),c=r(91723),d=r(79517),A=(e,t,r)=>{let[o,a]=(0,l.useState)(!1),[i,s]=(0,l.useState)(()=>{}),[u,A]=(0,l.useState)(!1);return{confirmChanges:()=>u?Promise.resolve(!0):(a(!0),new Promise(e=>{s(()=>e)})),ConfirmDialogComponent:o?(0,n.jsx)(d.Z,{isOpen:!0,children:(0,n.jsx)(c.Z,{variant:r,label:e,onConfirm:()=>{a(!1),t(),i(!0)},onCancel:()=>{a(!1),i(!1)}})}):null,setSkipConfirm:A}},h=r(30408),f=r(58640),m=r(69878);let g=async e=>{let t=new FormData;return t.append("image",e),await (0,m.Z)("".concat(f._,"/api/v1/web/images"),{method:"POST",body:t})},b=(0,o.default)(()=>Promise.resolve().then(r.t.bind(r,65615,23)),{loadableGenerated:{webpack:()=>[65615]},ssr:!1});s.Quill.register("modules/ImageResize",i.y);let w=(0,l.forwardRef)((e,t)=>{let{width:r,height:o,setEditorHtml:i,initialContent:c}=e,[d,f]=(0,u.FV)(h.D),[m,w]=(0,u.FV)(h.f),p=(0,a.useRouter)(),v=(0,l.useRef)(null),{confirmChanges:y,ConfirmDialogComponent:x}=A("작성한 내용은 저장되지 않았습니다. \\n 페이지를 벗어나시겠습니까?",()=>{if(v.current){let e=v.current;v.current=null,p.push(e)}},"red"),E=async()=>{let e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.style.display="none",document.body.appendChild(e),e.click(),e.onchange=async()=>{let t=e.files?e.files[0]:null;if(t)try{let e=(await g(t)).information.imageUrl;w(t=>[...t,e]);let n=document.querySelector(".ql-editor");if(n){var r;let t=null===(r=window.getSelection())||void 0===r?void 0:r.getRangeAt(0);if(t){let r=document.createElement("img");r.src=e,r.alt="image",t.insertNode(r),i(n.innerHTML),f(!0)}}}catch(e){console.error("이미지 업로드 실패:",e)}}};(0,l.useEffect)(()=>{let e=e=>{d&&(e.preventDefault(),e.returnValue="")};window.addEventListener("beforeunload",e);let t=p.push,r=p.replace,n=async(e,r)=>{if(!d)return t(e,r);v.current=e,await y()&&t(e,r)};return p.push=(e,t)=>n(e,t),p.replace=(e,t)=>n(e,t),()=>{window.removeEventListener("beforeunload",e),p.push=t,p.replace=r}},[d,y,p]);let C=(0,l.useMemo)(()=>({toolbar:{container:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]],handlers:{image:E}},clipboard:{matchVisual:!1},ImageResize:{parchment:s.Quill.import("parchment"),modules:["Resize","DisplaySize"]}}),[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{ref:t,style:{width:r,height:o},children:(0,n.jsx)(b,{style:{width:r,height:o},theme:"snow",onChange:e=>{i(e),f(!0)},modules:C,formats:["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image"],defaultValue:c})}),x]})});w.displayName="QuillEditor";var p=(0,o.default)(()=>Promise.resolve(w),{ssr:!1})},30408:function(e,t,r){"use strict";r.d(t,{D:function(){return o},f:function(){return l}});var n=r(32153);let o=(0,n.cn)({key:"isEditorModifiedState",default:!1}),l=(0,n.cn)({key:"uploadedImagesState",default:[]})},69878:function(e,t,r){"use strict";var n=r(77871),o=r(89652);let l=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.Z.getToken(o.L);if(!r)throw Error("No access token found");let l={...t.headers,Authorization:"Bearer ".concat(r)},a=await fetch(e,{...t,headers:l});if(!a.ok)throw 401===a.status&&(n.Z.removeToken(o.L),n.Z.removeToken(o.z),alert("세션이 만료되었습니다. 다시 로그인해 주세요.")),Error("Failed to fetch data");return a.json()};t.Z=l},77871:function(e,t){"use strict";t.Z={saveToken:(e,t)=>{localStorage.setItem(e,t)},getToken:e=>localStorage.getItem(e),removeToken:e=>{localStorage.removeItem(e)}}},95343:function(e,t){"use strict";t.Z={src:"/_next/static/media/PromptLogo.692c0d92.png",height:13,width:39,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEX///////////////////////////////////////8V2MxSAAAACnRSTlPlmoJy+43FvWlJljCSDAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACFJREFUeJwFwYEBADAIwrDCxOn/D5vAhDw+2qanBFbF9gEEtABSm4AZFAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},42866:function(e,t){"use strict";t.Z={src:"/_next/static/media/PromptOut.98b7927a.png",height:12,width:12,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEX///////////////9MaXH///91ewZhAAAABnRSTlNA0QMxAHpSp+N/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nEWLsQ0AMAyDcEz/f7lT0w0J4OCMHAhKQNIGGZvU+bBq47dfE2gAiTtnxw0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},22992:function(e,t){"use strict";t.Z={src:"/_next/static/media/PromptWarning.99ab5e8b.png",height:21,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAHlBMVEXXNTXXNTVMaXHWNTXXNTXXNTWqVVXUODjYNzfWNTXpH04wAAAACnRSTlN9jQA8LFoDEkykCmOTUQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJwdwYkNADAMAjE4SJ/9F65UW4ANaDEzwxLbiTdCOSdCNQmuXBoqXX33ARTdAKE2+uYqAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7}},25566:function(e){var t,r,n,o=e.exports={};function l(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===l||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:l}catch(e){t=l}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s=[],u=!1,c=-1;function d(){u&&n&&(u=!1,n.length?s=n.concat(s):c=-1,s.length&&A())}function A(){if(!u){var e=i(d);u=!0;for(var t=s.length;t;){for(n=s,s=[];++c<t;)n&&n[c].run();c=-1,t=s.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function f(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new h(e,t)),1!==s.length||u||i(A)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=f,o.addListener=f,o.once=f,o.off=f,o.removeListener=f,o.removeAllListeners=f,o.emit=f,o.prependListener=f,o.prependOnceListener=f,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);