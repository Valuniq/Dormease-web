"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8718],{58718:function(e,t,l){l.r(t),l.d(t,{default:function(){return w}});var n=l(57437),r=l(24232),i=l(2265),a=l(47907),s=l(82813);l(21851);var o=l(65615),u=l(32153),d=l(91723),c=l(79517),m=(e,t,l)=>{let[r,a]=(0,i.useState)(!1),[s,o]=(0,i.useState)(()=>{}),[u,m]=(0,i.useState)(!1);return{confirmChanges:()=>u?Promise.resolve(!0):(a(!0),new Promise(e=>{o(()=>e)})),ConfirmDialogComponent:r?(0,n.jsx)(c.Z,{isOpen:!0,children:(0,n.jsx)(d.Z,{variant:l,label:e,onConfirm:()=>{a(!1),t(),s(!0)},onCancel:()=>{a(!1),s(!1)}})}):null,setSkipConfirm:m}},f=l(30408),p=l(58640),h=l(75518);let b=async e=>{let t=new FormData;return t.append("image",e),await (0,h.Z)("".concat(p._,"/api/v1/web/images"),{method:"POST",body:t})},g=(0,r.default)(()=>Promise.resolve().then(l.t.bind(l,65615,23)),{loadableGenerated:{webpack:()=>[65615]},ssr:!1});o.Quill.register("modules/ImageResize",s.y);let y=(0,i.forwardRef)((e,t)=>{let{width:l,height:r,setEditorHtml:s,initialContent:d}=e,[c,p]=(0,u.FV)(f.D),[h,y]=(0,u.FV)(f.f),w=(0,a.useRouter)(),v=(0,i.useRef)(null),{confirmChanges:k,ConfirmDialogComponent:C}=m("작성한 내용은 저장되지 않았습니다. \\n 페이지를 벗어나시겠습니까?",()=>{if(v.current){let e=v.current;v.current=null,w.push(e)}},"red"),E=async()=>{let e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.style.display="none",document.body.appendChild(e),e.click(),e.onchange=async()=>{let t=e.files?e.files[0]:null;if(t)try{let e=(await b(t)).information.imageUrl;y(t=>[...t,e]);let n=document.querySelector(".ql-editor");if(n){var l;let t=null===(l=window.getSelection())||void 0===l?void 0:l.getRangeAt(0);if(t){let l=document.createElement("img");l.src=e,l.alt="image",l.style.maxWidth="100%",l.style.maxHeight="auto",t.insertNode(l),s(n.innerHTML),p(!0)}}}catch(e){console.error("이미지 업로드 실패:",e)}}};(0,i.useEffect)(()=>{let e=e=>{c&&(e.preventDefault(),e.returnValue="")};window.addEventListener("beforeunload",e);let t=w.push,l=w.replace,n=async(e,l)=>{if(!c)return t(e,l);v.current=e,await k()&&t(e,l)};return w.push=(e,t)=>n(e,t),w.replace=(e,t)=>n(e,t),()=>{window.removeEventListener("beforeunload",e),w.push=t,w.replace=l}},[c,k,w]);let x=(0,i.useMemo)(()=>({toolbar:{container:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]],handlers:{image:E}},clipboard:{matchVisual:!1},ImageResize:{parchment:o.Quill.import("parchment"),modules:["Resize","DisplaySize"]}}),[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{ref:t,style:{width:l,height:r},children:(0,n.jsx)(g,{style:{width:l,height:r},theme:"snow",onChange:e=>{s(e),p(!0)},modules:x,formats:["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image"],defaultValue:d,bounds:".ql-editor"})}),C]})});y.displayName="QuillEditor";var w=(0,r.default)(()=>Promise.resolve(y),{ssr:!1})}}]);