"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6472],{68647:function(e,t,n){n.d(t,{I:function(){return i}});var l=n(58640),r=n(75518);let i=async e=>{let t=new FormData;return t.append("image",e),await (0,r.Z)("".concat(l._,"/api/v1/web/images"),{method:"POST",body:t})}},16472:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var l=n(57437),r=n(24232),i=n(2265),a=n(47907),o=n(82813);n(21851);var s=n(65615),u=n(32153),d=n(91723),c=n(79517),m=(e,t,n)=>{let[r,a]=(0,i.useState)(!1),[o,s]=(0,i.useState)(()=>{}),[u,m]=(0,i.useState)(!1);return{confirmChanges:()=>u?Promise.resolve(!0):(a(!0),new Promise(e=>{s(()=>e)})),ConfirmDialogComponent:r?(0,l.jsx)(c.Z,{isOpen:!0,children:(0,l.jsx)(d.Z,{variant:n,label:e,onConfirm:()=>{a(!1),t(),o(!0)},onCancel:()=>{a(!1),o(!1)}})}):null,setSkipConfirm:m}},f=n(30408),p=n(68647);let h=(0,r.default)(()=>Promise.resolve().then(n.t.bind(n,65615,23)),{loadableGenerated:{webpack:()=>[65615]},ssr:!1});s.Quill.register("modules/ImageResize",o.y);let b=(0,i.forwardRef)((e,t)=>{let{width:n,height:r,setEditorHtml:o,initialContent:d}=e,[c,b]=(0,u.FV)(f.D),[g,v]=(0,u.FV)(f.f),w=(0,a.useRouter)(),y=(0,i.useRef)(null),{confirmChanges:k,ConfirmDialogComponent:C}=m("작성한 내용은 저장되지 않았습니다. \\n 페이지를 벗어나시겠습니까?",()=>{if(y.current){let e=y.current;y.current=null,w.push(e)}},"red"),E=(0,i.useCallback)(async()=>{let e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.style.display="none",document.body.appendChild(e),e.click(),e.onchange=async()=>{let t=e.files?e.files[0]:null;if(t)try{let e=(await (0,p.I)(t)).information.imageUrl;v(t=>[...t,e]);let l=document.querySelector(".ql-editor");if(l){var n;let t=null===(n=window.getSelection())||void 0===n?void 0:n.getRangeAt(0);if(t){let n=document.createElement("img");n.src=e,n.alt="image",t.insertNode(n),o(l.innerHTML),b(!0)}}}catch(e){console.error("이미지 업로드 실패:",e)}}},[v,o,b]);(0,i.useEffect)(()=>{let e=e=>{c&&(e.preventDefault(),e.returnValue="")};window.addEventListener("beforeunload",e);let t=w.push,n=w.replace,l=async(e,n)=>{if(!c)return t(e,n);y.current=e,await k()&&t(e,n)};return w.push=(e,t)=>l(e,t),w.replace=(e,t)=>l(e,t),()=>{window.removeEventListener("beforeunload",e),w.push=t,w.replace=n}},[c,k,w]);let R=(0,i.useMemo)(()=>({toolbar:{container:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]],handlers:{image:E}},clipboard:{matchVisual:!1},ImageResize:{parchment:s.Quill.import("parchment"),modules:["Resize","DisplaySize"]}}),[E]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{ref:t,style:{width:n,height:r},children:(0,l.jsx)(h,{style:{width:n,height:r},theme:"snow",onChange:e=>{o(e),b(!0)},modules:R,formats:["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image"],defaultValue:d})}),C]})});b.displayName="QuillEditor";var g=(0,r.default)(()=>Promise.resolve(b),{ssr:!1})}}]);