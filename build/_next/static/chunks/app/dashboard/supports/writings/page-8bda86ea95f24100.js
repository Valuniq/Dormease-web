(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1212],{95918:function(e,t,a){Promise.resolve().then(a.bind(a,60774))},45386:function(e,t,a){"use strict";a.d(t,{GO:function(){return f},Nl:function(){return o},Yg:function(){return d},qR:function(){return c},xf:function(){return r}});var l=a(58640),n=a(94817),i=a(81252),s=a(75518);let r=()=>{var e,t,a;let{data:i,error:r,size:c,setSize:o}=(0,n.ZP)((e,t)=>t&&0===t.information.dataList.length?null:"".concat(l._,"/api/v1/web/notifications/FAQ?page=").concat(e+1),s.Z),d=i?i.reduce((e,t)=>e.concat(t.information.dataList),[]):[],f=!i&&!r||c>0&&i&&void 0===i[c-1];return{faqData:d,error:r,isLoadingMore:f,size:c,setSize:o,isReachingEnd:(null==i?void 0:null===(e=i[0])||void 0===e?void 0:e.information.dataList.length)===0||i&&(null===(t=i[i.length-1])||void 0===t?void 0:t.information.pageInfo.currentPage)===(null===(a=i[i.length-1])||void 0===a?void 0:a.information.pageInfo.totalPage)||!1}},c=async e=>await (0,s.Z)("".concat(l._,"/api/v1/web/notifications"),{method:"POST",body:e}),o=e=>{let{data:t,error:a}=(0,i.ZP)(e?"".concat(l._,"/api/v1/web/notifications/notification/").concat(e):null,s.Z);return{data:t,error:a,isLoading:!a&&!t}},d=async e=>await (0,s.Z)("".concat(l._,"/api/v1/web/notifications/notification/").concat(e),{method:"DELETE"}),f=async e=>await (0,s.Z)("".concat(l._,"/api/v1/web/notifications"),{method:"PATCH",body:e})},60774:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return N}});var l=a(57437),n=a(48871),i=a(2265),s=a(79467),r=a(47907),c=a(57482),o=a(28771),d=a(45386),f=a(32153),m=a(30408),u=a(24232),h=a(20703),x=a(86092),p=a(25273);let g=(0,u.default)(()=>a.e(1837).then(a.bind(a,61837)),{loadableGenerated:{webpack:()=>[61837]},ssr:!1}),b=(0,u.default)(()=>a.e(5776).then(a.bind(a,85776)),{loadableGenerated:{webpack:()=>[85776]},ssr:!1}),y=(0,u.default)(()=>Promise.all([a.e(1866),a.e(9363),a.e(6623),a.e(6616),a.e(6472)]).then(a.bind(a,16472)),{loadableGenerated:{webpack:()=>[16472]},ssr:!1}),w=(0,u.default)(()=>a.e(5081).then(a.bind(a,65081)),{loadableGenerated:{webpack:()=>[65081]},ssr:!1}),v=(0,u.default)(()=>a.e(236).then(a.bind(a,53156)),{loadableGenerated:{webpack:()=>[53156]},ssr:!1}),j=(0,i.forwardRef)((e,t)=>{let{title:a,setTitle:n,writer:s,isPinned:r,setIsPinned:c,fileLists:o,handleFileChange:d,handleDeleteFile:f,handleAllDelete:m,setEditorHtml:u}=e,j=(0,i.useRef)(null);return(0,l.jsxs)("div",{ref:t,className:"xxl:w-full xl:w-800 lg:w-700 md:w-600 w-full  ml-[-80px]",children:[(0,l.jsx)("div",{className:"w-full flex items-center justify-between py-15 border-t-1 border-t-gray-grayscale50",children:(0,l.jsxs)("div",{className:"w-full flex items-center justify-between",children:[(0,l.jsxs)("div",{className:" flex-1 flex items-center mr-20",children:[(0,l.jsx)("h1",{className:"mr-20 text-nowrap font-medium text-gray-grayscale50",children:"제 목"}),(0,l.jsx)(g,{width:"flex-1",height:"h-30",font:"text-medium",placeholder:"제목을 입력해주세요.",input:a,setInput:n})]}),(0,l.jsxs)("div",{className:"flex-2 flex items-center",children:[(0,l.jsx)(b,{isChecked:r,setIsChecked:c}),(0,l.jsx)("h2",{className:"text-nowrap mx-18  text-gray-grayscale50",children:"최상단 고정"}),(0,l.jsx)(h.default,{src:x.Z,width:13,height:20,className:"object-contain rotate-[-45deg]",alt:"pin"})]})]})}),(0,l.jsxs)("div",{className:"flex items-center py-15 border-y-1 border-y-gray-grayscale30",children:[(0,l.jsx)("h1",{className:"mr-20 text-nowrap font-medium text-gray-grayscale50",children:"작성자"}),(0,l.jsx)("h1",{className:"text-nowrap font-medium text-gray-grayscale40",children:s})]}),(0,l.jsxs)("div",{className:"flex w-full items-center justify-center pt-15 mb-60",children:[(0,l.jsx)("h1",{className:" h-430 items-center flex mr-51 text-nowrap font-medium text-gray-grayscale50",children:"내 용"}),(0,l.jsx)(y,{width:"100%",height:"70svh",setEditorHtml:u})]}),(0,l.jsxs)("div",{className:"flex items-center py-15 border-y-1 border-y-gray-grayscale30",children:[(0,l.jsx)("h1",{className:"font-medium text-gray-grayscale50 mr-20 text-nowrap",children:"첨부파일"}),(0,l.jsx)(w,{font:"font-medium text-13",label:"파일선택",onClick:()=>{var e;return null===(e=j.current)||void 0===e?void 0:e.click()}}),(0,l.jsx)("input",{type:"file",ref:j,className:"hidden",multiple:!0,onChange:d}),(0,l.jsx)("div",{className:"overflow-scroll noti-file-scrollbar  ml-20 w-[917px] h-34 rounded-5 flex items-center justify-start px-10 border-1 border-gray-grayscale30",children:o.map((e,t)=>(0,l.jsx)("ul",{className:"mr-10",children:(0,l.jsx)(v,{fileName:e.fileName,handleDelete:()=>f(e.fileName)})},t))}),(0,l.jsx)(h.default,{src:p.Z,width:16,height:18,className:"object-contain ml-13 cursor-pointer",alt:"allDelete",onClick:m})]})]})});j.displayName="NoticeWriting";var N=()=>{let e=(0,r.useRouter)(),t=(0,f.Zl)(m.D),[a,u]=(0,i.useState)([]),[h,x]=(0,i.useState)({title:"",pinned:!1,notificationType:"FAQ",content:"",imageReqList:[],files:[]}),{showConfirmDialog:p,ConfirmDialogComponent:g}=(0,o.Z)("작성한 내용을 등록하시겠습니까?",async()=>{var l;let n=(null===(l=h.content.match(/<img[^>]+src="([^">]+)"/g))||void 0===l?void 0:l.map(e=>{let t=e.match(/src="([^"]+)"/);return{imageUrl:t?t[1]:""}}))||[],i={...h,imageReqList:n,files:a.map(e=>({file:e.file}))},s=new FormData;s.append("writeNotificationReq",new Blob([JSON.stringify(i)],{type:"application/json"})),a.length>0?a.forEach(e=>{s.append("files",e.file)}):s.append("files",new Blob);try{t(!1),await (0,d.qR)(s),e.push(c.Kr)}catch(e){console.error(e),alert("공지사항 등록에 실패했습니다. 다시 시도해주세요.")}},"blue");return(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[!!g&&g,(0,l.jsx)(j,{title:h.title,setTitle:e=>x(t=>({...t,title:e})),writer:"관리자",isPinned:h.pinned,setIsPinned:e=>x(t=>({...t,pinned:e})),fileLists:a,handleFileChange:e=>{let t=Array.from(e.target.files||[]);a.length+t.length<=s.qo.file.maxCount?u(e=>[...e,...t.map(e=>({fileName:e.name,file:e}))]):alert("파일은 최대 ".concat(s.qo.file.maxCount,"개까지 선택할 수 있습니다."))},handleDeleteFile:e=>{u(t=>t.filter(t=>t.fileName!==e))},handleAllDelete:()=>{u([])},setEditorHtml:e=>x(t=>({...t,content:e}))}),(0,l.jsx)("div",{className:"my-30 xxl:scale-80 xl:scale-65 lg:scale-65 md:scale-50 sm:scale-40",children:(0,l.jsx)(n.Z,{label:"등록",disabled:!1,variant:"blue",onClick:p})})]})}}},function(e){e.O(0,[691,703,4898,1252,4817,8895,2971,8069,1744],function(){return e(e.s=95918)}),_N_E=e.O()}]);