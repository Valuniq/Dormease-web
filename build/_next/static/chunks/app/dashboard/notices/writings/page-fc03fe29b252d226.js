(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[123],{91312:function(e,t,a){Promise.resolve().then(a.bind(a,19923))},4550:function(e,t,a){"use strict";a.d(t,{Fp:function(){return f},NE:function(){return o},V2:function(){return s},Zt:function(){return d},bq:function(){return c}});var n=a(58640),i=a(94817),l=a(75518),r=a(81252);let s=()=>{var e,t,a;let{data:r,error:s,size:c,setSize:o,mutate:d}=(0,i.ZP)((e,t)=>t&&0===t.information.dataList.length?null:"".concat(n._,"/api/v1/web/notifications/ANNOUNCEMENT?page=").concat(e+1),l.Z),f=r?r.reduce((e,t)=>e.concat(t.information.dataList),[]):[],m=!r&&!s||c>0&&r&&void 0===r[c-1];return{notificationsData:f,error:s,isLoadingMore:m,size:c,setSize:o,isReachingEnd:(null==r?void 0:null===(e=r[0])||void 0===e?void 0:e.information.dataList.length)===0||r&&(null===(t=r[r.length-1])||void 0===t?void 0:t.information.pageInfo.currentPage)===(null===(a=r[r.length-1])||void 0===a?void 0:a.information.pageInfo.totalPage)||!1,mutate:d}},c=async e=>await (0,l.Z)("".concat(n._,"/api/v1/web/notifications"),{method:"POST",body:e}),o=e=>{let{data:t,error:a}=(0,r.ZP)(e?"".concat(n._,"/api/v1/web/notifications/notification/").concat(e):null,l.Z);return{data:t,error:a,isLoading:!a&&!t}},d=async e=>await (0,l.Z)("".concat(n._,"/api/v1/web/notifications/notification/").concat(e),{method:"DELETE"}),f=async e=>await (0,l.Z)("".concat(n._,"/api/v1/web/notifications"),{method:"PATCH",body:e})},19923:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var n=a(57437),i=a(48871),l=a(2265),r=a(4550),s=a(40801),c=a(47907),o=a(17940),d=a(32153),f=a(28771),m=a(30408),h=a(24232),u=a(20703),p=a(86092),x=a(25273);let g=(0,h.default)(()=>a.e(1837).then(a.bind(a,61837)),{loadableGenerated:{webpack:()=>[61837]},ssr:!1}),b=(0,h.default)(()=>a.e(1475).then(a.bind(a,31475)),{loadableGenerated:{webpack:()=>[31475]},ssr:!1}),y=(0,h.default)(()=>Promise.all([a.e(1866),a.e(3070),a.e(6616),a.e(8718)]).then(a.bind(a,58718)),{loadableGenerated:{webpack:()=>[58718]},ssr:!1}),N=(0,h.default)(()=>a.e(5081).then(a.bind(a,65081)),{loadableGenerated:{webpack:()=>[65081]},ssr:!1}),v=(0,h.default)(()=>a.e(236).then(a.bind(a,53156)),{loadableGenerated:{webpack:()=>[53156]},ssr:!1}),w=(0,l.forwardRef)((e,t)=>{let{title:a,setTitle:i,writer:r,isPinned:s,setIsPinned:c,fileLists:o,handleFileChange:d,handleDeleteFile:f,handleAllDelete:m,setEditorHtml:h}=e,w=(0,l.useRef)(null);return(0,n.jsxs)("div",{ref:t,className:"w-[1200px] px-12",children:[(0,n.jsxs)("div",{className:"flex items-center py-30 border-t-1 border-t-gray-grayscale50",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("h1",{className:"mr-40 text-nowrap H4 text-gray-grayscale50",children:"제 목"}),(0,n.jsx)(g,{placeholder:"제목을 입력해주세요.",input:a,setInput:i})]}),(0,n.jsxs)("div",{className:"ml-19 flex items-center",children:[(0,n.jsx)(b,{isChecked:s,setIsChecked:c}),(0,n.jsx)("h2",{className:"text-nowrap mx-18 H4-caption text-gray-grayscale50",children:"최상단 고정"}),(0,n.jsx)(u.default,{src:p.Z,width:13.35,height:20.14,className:"object-contain rotate-[-45deg]",alt:"pin"})]})]}),(0,n.jsxs)("div",{className:"flex items-center py-13 border-y-1 border-y-gray-grayscale30",children:[(0,n.jsx)("h1",{className:"mr-40 text-nowrap H4 text-gray-grayscale50",children:"작성자"}),(0,n.jsx)("h1",{className:"text-nowrap H4 text-gray-grayscale40",children:r})]}),(0,n.jsxs)("div",{className:"flex items-center py-23 mb-50",children:[(0,n.jsx)("h1",{className:" h-430 items-center flex mr-51 text-nowrap H4 text-gray-grayscale50",children:"내 용"}),(0,n.jsx)(y,{width:"100%",height:"430px",setEditorHtml:h})]}),(0,n.jsxs)("div",{className:"flex items-center py-23 border-y-1 border-y-gray-grayscale30",children:[(0,n.jsx)("h1",{className:"H4 text-gray-grayscale50 mr-20 text-nowrap",children:"첨부파일"}),(0,n.jsx)(N,{label:"파일선택",onClick:()=>{var e;return null===(e=w.current)||void 0===e?void 0:e.click()}}),(0,n.jsx)("input",{type:"file",ref:w,className:"hidden",multiple:!0,onChange:d}),(0,n.jsx)("div",{className:"overflow-scroll noti-file-scrollbar  ml-20 w-[917px] h-34 rounded-5 flex items-center justify-start px-10 border-1 border-gray-grayscale30",children:o.map((e,t)=>(0,n.jsx)("ul",{className:"mr-10",children:(0,n.jsx)(v,{fileName:e.fileName,handleDelete:()=>f(e.fileName)})},t))}),(0,n.jsx)(u.default,{src:x.Z,width:16,height:18,className:"object-contain ml-13 cursor-pointer",alt:"allDelete",onClick:m})]})]})});w.displayName="NoticeWriting";var j=()=>{let e=(0,c.useRouter)(),t=(0,d.Zl)(m.D),[a,h]=(0,l.useState)([]),[u,p]=(0,l.useState)({title:"",pinned:!1,notificationType:"ANNOUNCEMENT",content:"",imageReqList:[],files:[]}),{showConfirmDialog:x,ConfirmDialogComponent:g}=(0,f.Z)("작성한 내용을 등록하시겠습니까?",async()=>{var n;let i=(null===(n=u.content.match(/<img[^>]+src="([^">]+)"/g))||void 0===n?void 0:n.map(e=>{let t=e.match(/src="([^"]+)"/);return{imageUrl:t?t[1]:""}}))||[],l={...u,imageReqList:i,files:a.map(e=>({file:e.file}))},s=new FormData;s.append("writeNotificationReq",new Blob([JSON.stringify(l)],{type:"application/json"})),a.length>0?a.forEach(e=>{s.append("files",e.file)}):s.append("files",new Blob);try{t(!1),await (0,r.bq)(s),e.push(o.K1)}catch(e){console.error(e),alert("공지사항 등록에 실패했습니다. 다시 시도해주세요.")}},"blue");return(0,n.jsxs)(n.Fragment,{children:[!!g&&g,(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,n.jsx)(w,{title:u.title,setTitle:e=>p(t=>({...t,title:e})),writer:"관리자",isPinned:u.pinned,setIsPinned:e=>p(t=>({...t,pinned:e})),fileLists:a,handleFileChange:e=>{let t=Array.from(e.target.files||[]);a.length+t.length<=s.C.file.maxCount?h(e=>[...e,...t.map(e=>({fileName:e.name,file:e}))]):alert("파일은 최대 ".concat(s.C.file.maxCount,"개까지 선택할 수 있습니다."))},handleDeleteFile:e=>{h(t=>t.filter(t=>t.fileName!==e))},handleAllDelete:()=>{h([])},setEditorHtml:e=>p(t=>({...t,content:e}))}),(0,n.jsx)("div",{className:"mt-70",children:(0,n.jsx)(i.Z,{label:"등록",disabled:!1,variant:"blue",onClick:x})})]})]})}}},function(e){e.O(0,[691,703,4898,1252,4817,8597,2971,8069,1744],function(){return e(e.s=91312)}),_N_E=e.O()}]);