(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1212],{95918:function(e,t,a){Promise.resolve().then(a.bind(a,60774))},45386:function(e,t,a){"use strict";a.d(t,{GO:function(){return f},Nl:function(){return o},Yg:function(){return d},qR:function(){return c},xf:function(){return s}});var n=a(58640),i=a(94817),l=a(81252),r=a(75518);let s=()=>{var e,t,a;let{data:l,error:s,size:c,setSize:o}=(0,i.ZP)((e,t)=>t&&0===t.information.dataList.length?null:"".concat(n._,"/api/v1/web/notifications/FAQ?page=").concat(e+1),r.Z),d=l?l.reduce((e,t)=>e.concat(t.information.dataList),[]):[],f=!l&&!s||c>0&&l&&void 0===l[c-1];return{faqData:d,error:s,isLoadingMore:f,size:c,setSize:o,isReachingEnd:(null==l?void 0:null===(e=l[0])||void 0===e?void 0:e.information.dataList.length)===0||l&&(null===(t=l[l.length-1])||void 0===t?void 0:t.information.pageInfo.currentPage)===(null===(a=l[l.length-1])||void 0===a?void 0:a.information.pageInfo.totalPage)||!1}},c=async e=>await (0,r.Z)("".concat(n._,"/api/v1/web/notifications"),{method:"POST",body:e}),o=e=>{let{data:t,error:a}=(0,l.ZP)(e?"".concat(n._,"/api/v1/web/notifications/notification/").concat(e):null,r.Z);return{data:t,error:a,isLoading:!a&&!t}},d=async e=>await (0,r.Z)("".concat(n._,"/api/v1/web/notifications/notification/").concat(e),{method:"DELETE"}),f=async e=>await (0,r.Z)("".concat(n._,"/api/v1/web/notifications"),{method:"PATCH",body:e})},60774:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var n=a(57437),i=a(48871),l=a(2265),r=a(40801),s=a(47907),c=a(17940),o=a(28771),d=a(45386),f=a(32153),m=a(30408),h=a(24232),u=a(20703),p=a(86092),x=a(25273);let g=(0,h.default)(()=>a.e(1837).then(a.bind(a,61837)),{loadableGenerated:{webpack:()=>[61837]},ssr:!1}),b=(0,h.default)(()=>a.e(5776).then(a.bind(a,85776)),{loadableGenerated:{webpack:()=>[85776]},ssr:!1}),y=(0,h.default)(()=>Promise.all([a.e(1866),a.e(3070),a.e(6616),a.e(8718)]).then(a.bind(a,58718)),{loadableGenerated:{webpack:()=>[58718]},ssr:!1}),v=(0,h.default)(()=>a.e(5081).then(a.bind(a,65081)),{loadableGenerated:{webpack:()=>[65081]},ssr:!1}),w=(0,h.default)(()=>a.e(236).then(a.bind(a,53156)),{loadableGenerated:{webpack:()=>[53156]},ssr:!1}),N=(0,l.forwardRef)((e,t)=>{let{title:a,setTitle:i,writer:r,isPinned:s,setIsPinned:c,fileLists:o,handleFileChange:d,handleDeleteFile:f,handleAllDelete:m,setEditorHtml:h}=e,N=(0,l.useRef)(null);return(0,n.jsxs)("div",{ref:t,className:"w-[1200px] px-12",children:[(0,n.jsxs)("div",{className:"flex items-center py-30 border-t-1 border-t-gray-grayscale50",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("h1",{className:"mr-40 text-nowrap H4 text-gray-grayscale50",children:"제 목"}),(0,n.jsx)(g,{placeholder:"제목을 입력해주세요.",input:a,setInput:i})]}),(0,n.jsxs)("div",{className:"ml-19 flex items-center",children:[(0,n.jsx)(b,{isChecked:s,setIsChecked:c}),(0,n.jsx)("h2",{className:"text-nowrap mx-18 H4-caption text-gray-grayscale50",children:"최상단 고정"}),(0,n.jsx)(u.default,{src:p.Z,width:13.35,height:20.14,className:"object-contain rotate-[-45deg]",alt:"pin"})]})]}),(0,n.jsxs)("div",{className:"flex items-center py-13 border-y-1 border-y-gray-grayscale30",children:[(0,n.jsx)("h1",{className:"mr-40 text-nowrap H4 text-gray-grayscale50",children:"작성자"}),(0,n.jsx)("h1",{className:"text-nowrap H4 text-gray-grayscale40",children:r})]}),(0,n.jsxs)("div",{className:"flex items-center py-23 mb-50",children:[(0,n.jsx)("h1",{className:" h-430 items-center flex mr-51 text-nowrap H4 text-gray-grayscale50",children:"내 용"}),(0,n.jsx)(y,{width:"100%",height:"430px",setEditorHtml:h})]}),(0,n.jsxs)("div",{className:"flex items-center py-23 border-y-1 border-y-gray-grayscale30",children:[(0,n.jsx)("h1",{className:"H4 text-gray-grayscale50 mr-20 text-nowrap",children:"첨부파일"}),(0,n.jsx)(v,{label:"파일선택",onClick:()=>{var e;return null===(e=N.current)||void 0===e?void 0:e.click()}}),(0,n.jsx)("input",{type:"file",ref:N,className:"hidden",multiple:!0,onChange:d}),(0,n.jsx)("div",{className:"overflow-scroll noti-file-scrollbar  ml-20 w-[917px] h-34 rounded-5 flex items-center justify-start px-10 border-1 border-gray-grayscale30",children:o.map((e,t)=>(0,n.jsx)("ul",{className:"mr-10",children:(0,n.jsx)(w,{fileName:e.fileName,handleDelete:()=>f(e.fileName)})},t))}),(0,n.jsx)(u.default,{src:x.Z,width:16,height:18,className:"object-contain ml-13 cursor-pointer",alt:"allDelete",onClick:m})]})]})});N.displayName="NoticeWriting";var j=()=>{let e=(0,s.useRouter)(),t=(0,f.Zl)(m.D),[a,h]=(0,l.useState)([]),[u,p]=(0,l.useState)({title:"",pinned:!1,notificationType:"FAQ",content:"",imageReqList:[],files:[]}),{showConfirmDialog:x,ConfirmDialogComponent:g}=(0,o.Z)("작성한 내용을 등록하시겠습니까?",async()=>{var n;let i=(null===(n=u.content.match(/<img[^>]+src="([^">]+)"/g))||void 0===n?void 0:n.map(e=>{let t=e.match(/src="([^"]+)"/);return{imageUrl:t?t[1]:""}}))||[],l={...u,imageReqList:i,files:a.map(e=>({file:e.file}))},r=new FormData;r.append("writeNotificationReq",new Blob([JSON.stringify(l)],{type:"application/json"})),a.length>0?a.forEach(e=>{r.append("files",e.file)}):r.append("files",new Blob);try{t(!1),await (0,d.qR)(r),e.push(c.Kr)}catch(e){console.error(e),alert("공지사항 등록에 실패했습니다. 다시 시도해주세요.")}},"blue");return(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[!!g&&g,(0,n.jsx)(N,{title:u.title,setTitle:e=>p(t=>({...t,title:e})),writer:"관리자",isPinned:u.pinned,setIsPinned:e=>p(t=>({...t,pinned:e})),fileLists:a,handleFileChange:e=>{let t=Array.from(e.target.files||[]);a.length+t.length<=r.Ck.file.maxCount?h(e=>[...e,...t.map(e=>({fileName:e.name,file:e}))]):alert("파일은 최대 ".concat(r.Ck.file.maxCount,"개까지 선택할 수 있습니다."))},handleDeleteFile:e=>{h(t=>t.filter(t=>t.fileName!==e))},handleAllDelete:()=>{h([])},setEditorHtml:e=>p(t=>({...t,content:e}))}),(0,n.jsx)("div",{className:"mt-70",children:(0,n.jsx)(i.Z,{label:"등록",disabled:!1,variant:"blue",onClick:x})})]})}}},function(e){e.O(0,[691,703,4898,1252,4817,8597,2971,8069,1744],function(){return e(e.s=95918)}),_N_E=e.O()}]);