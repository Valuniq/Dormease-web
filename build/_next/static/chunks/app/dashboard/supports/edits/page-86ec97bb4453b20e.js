(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1759],{82334:function(e,t,i){Promise.resolve().then(i.bind(i,66040))},46426:function(e,t){"use strict";t.J=void 0,t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};let{key:t="recoil-persist",storage:i=localStorage,converter:n=JSON}=e,a=(e,t,i,n)=>{n?delete t[i]:t[i]=e,s(t)},r=()=>{let e=i.getItem(t);return null==e?{}:"string"==typeof e?l(e):"function"==typeof e.then?e.then(l):{}},l=e=>{if(void 0===e)return{};try{return n.parse(e)}catch(e){return console.error(e),{}}},s=e=>{try{"function"==typeof i.mergeItem?i.mergeItem(t,n.stringify(e)):i.setItem(t,n.stringify(e))}catch(e){console.error(e)}};return{persistAtom:({onSet:e,node:t,trigger:i,setSelf:n})=>{if("get"===i){let e=r();"function"==typeof e.then&&e.then(e=>{e.hasOwnProperty(t.key)&&n(e[t.key])}),e.hasOwnProperty(t.key)&&n(e[t.key])}e(async(e,i,n)=>{let l=r();"function"==typeof l.then?l.then(i=>a(e,i,t.key,n)):a(e,l,t.key,n)})}}}},45386:function(e,t,i){"use strict";i.d(t,{GO:function(){return f},Nl:function(){return c},Yg:function(){return d},qR:function(){return o},xf:function(){return s}});var n=i(58640),a=i(94817),r=i(75518),l=i(81252);let s=()=>{var e,t,i;let{data:l,error:s,size:o,setSize:c}=(0,a.ZP)((e,t)=>t&&0===t.information.dataList.length?null:"".concat(n._,"/api/v1/web/notifications/FAQ?page=").concat(e+1),r.Z),d=l?l.reduce((e,t)=>e.concat(t.information.dataList),[]):[],f=!l&&!s||o>0&&l&&void 0===l[o-1];return{faqData:d,error:s,isLoadingMore:f,size:o,setSize:c,isReachingEnd:(null==l?void 0:null===(e=l[0])||void 0===e?void 0:e.information.dataList.length)===0||l&&(null===(t=l[l.length-1])||void 0===t?void 0:t.information.pageInfo.currentPage)===(null===(i=l[l.length-1])||void 0===i?void 0:i.information.pageInfo.totalPage)||!1}},o=async e=>await (0,r.Z)("".concat(n._,"/api/v1/web/notifications"),{method:"POST",body:e}),c=e=>{let{data:t,error:i}=(0,l.ZP)(e?"".concat(n._,"/api/v1/web/notifications/notification/").concat(e):null,r.Z);return{data:t,error:i,isLoading:!i&&!t}},d=async e=>await (0,r.Z)("".concat(n._,"/api/v1/web/notifications/notification/").concat(e),{method:"DELETE"}),f=async e=>await (0,r.Z)("".concat(n._,"/api/v1/web/notifications"),{method:"PATCH",body:e})},66040:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return I}});var n=i(57437),a=i(48871),r=i(2265),l=i(45386),s=i(40801),o=i(47907),c=i(17940),d=i(32153),f=i(28771),m=i(30408),u=i(58960),h=i(24232),p=i(20703),g=i(86092),y=i(25273);let x=(0,h.default)(()=>i.e(1837).then(i.bind(i,61837)),{loadableGenerated:{webpack:()=>[61837]},ssr:!1}),v=(0,h.default)(()=>i.e(1475).then(i.bind(i,31475)),{loadableGenerated:{webpack:()=>[31475]},ssr:!1}),b=(0,h.default)(()=>Promise.all([i.e(1866),i.e(3070),i.e(6616),i.e(8718)]).then(i.bind(i,58718)),{loadableGenerated:{webpack:()=>[58718]},ssr:!1}),w=(0,h.default)(()=>i.e(5081).then(i.bind(i,65081)),{loadableGenerated:{webpack:()=>[65081]},ssr:!1}),N=(0,h.default)(()=>i.e(236).then(i.bind(i,53156)),{loadableGenerated:{webpack:()=>[53156]},ssr:!1}),j=(0,r.forwardRef)((e,t)=>{let{title:i,setTitle:a,writer:l,isPinned:s,setIsPinned:o,fileLists:c,handleFileChange:d,handleDeleteFile:f,handleAllDelete:m,handleDeleteImage:u,setEditorHtml:h,editorContent:j}=e,I=(0,r.useRef)(null);return(0,n.jsxs)("div",{ref:t,className:"w-[1200px] px-12",children:[(0,n.jsxs)("div",{className:"flex items-center py-30 border-t-1 border-t-gray-grayscale50",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("h1",{className:"mr-40 text-nowrap H4 text-gray-grayscale50",children:"제 목"}),(0,n.jsx)(x,{placeholder:"제목을 입력해주세요.",input:i,setInput:a})]}),(0,n.jsxs)("div",{className:"ml-19 flex items-center",children:[(0,n.jsx)(v,{isChecked:s,setIsChecked:o}),(0,n.jsx)("h2",{className:"text-nowrap mx-18 H4-caption text-gray-grayscale50",children:"최상단 고정"}),(0,n.jsx)(p.default,{src:g.Z,width:13.35,height:20.14,className:"object-contain rotate-[-45deg]",alt:"pin"})]})]}),(0,n.jsxs)("div",{className:"flex items-center py-13 border-y-1 border-y-gray-grayscale30",children:[(0,n.jsx)("h1",{className:"mr-40 text-nowrap H4 text-gray-grayscale50",children:"작성자"}),(0,n.jsx)("h1",{className:"text-nowrap H4 text-gray-grayscale40",children:l})]}),(0,n.jsxs)("div",{className:"flex items-center py-23 mb-50",children:[(0,n.jsx)("h1",{className:" h-430 items-center flex mr-51 text-nowrap H4 text-gray-grayscale50",children:"내 용"}),(0,n.jsx)(b,{width:"100%",height:"430px",setEditorHtml:h,initialContent:j})]}),(0,n.jsxs)("div",{className:"flex items-center py-23 border-y-1 border-y-gray-grayscale30",children:[(0,n.jsx)("h1",{className:"H4 text-gray-grayscale50 mr-20 text-nowrap",children:"첨부파일"}),(0,n.jsx)(w,{label:"파일선택",onClick:()=>{var e;return null===(e=I.current)||void 0===e?void 0:e.click()}}),(0,n.jsx)("input",{type:"file",ref:I,className:"hidden",multiple:!0,onChange:d}),(0,n.jsx)("div",{className:"overflow-scroll noti-file-scrollbar  ml-20 w-[917px] h-34 rounded-5 flex items-center justify-start px-10 border-1 border-gray-grayscale30",children:c.map((e,t)=>(0,n.jsx)("ul",{className:"mr-10",children:(0,n.jsx)(N,{fileName:e.originalFileName,handleDelete:()=>f(e.fileId)})},t))}),(0,n.jsx)(p.default,{src:y.Z,width:16,height:18,className:"object-contain ml-13 cursor-pointer",alt:"allDelete",onClick:m})]})]})});j.displayName="SupportEdit";var I=()=>{let e=(0,o.useRouter)(),t=(0,d.sJ)(u.R),{data:i,error:h,isLoading:p}=(0,l.Nl)(t),g=(0,d.Zl)(m.D),[y,x]=(0,r.useState)([]),[v,b]=(0,r.useState)([]),[w,N]=(0,r.useState)([]),[I,k]=(0,r.useState)({title:"",writer:"",pinned:!1,notificationType:"FAQ",content:"",imageReqList:[],files:[]});(0,r.useEffect)(()=>{i&&(k({title:i.information.title,writer:i.information.writer,pinned:i.information.pinned,notificationType:"ANNOUNCEMENT",content:i.information.content,imageReqList:i.information.imageResList.map(e=>({imageUrl:e.imageUrl,imageId:e.imageId})),files:i.information.fileList.map(e=>({fileId:e.fileId,originalFileName:e.originalFileName,fileUrl:e.fileUrl}))}),x(i.information.fileList.map(e=>({fileId:e.fileId,originalFileName:e.originalFileName,fileUrl:e.fileUrl}))))},[i]);let L=()=>{var e;I.imageReqList.map(e=>e.imageUrl);let t=(null===(e=I.content.match(/<img[^>]+src="([^">]+)"/g))||void 0===e?void 0:e.map(e=>{let t=e.match(/src="([^"]+)"/);return t?t[1]:""}))||[];b(I.imageReqList.filter(e=>!t.includes(e.imageUrl)).map(e=>e.imageId))},{showConfirmDialog:R,ConfirmDialogComponent:C}=(0,f.Z)("FAQ를 수정하시겠습니까?",async()=>{var i;L();let n=(null===(i=I.content.match(/<img[^>]+src="([^">]+)"/g))||void 0===i?void 0:i.map(e=>{let t=e.match(/src="([^"]+)"/);return{imageUrl:t?t[1]:""}}))||[],a=new FormData;a.append("modifyNotificationReq",new Blob([JSON.stringify({notificationId:t,title:I.title,pinned:I.pinned,content:I.content,deletedImageIds:v,imageReqList:n.map(e=>{let{imageUrl:t}=e;return{imageUrl:t}}),deletedFileIds:w,files:[]})],{type:"application/json"})),y.forEach(e=>{e.file&&a.append("files",e.file)});try{g(!1),await (0,l.GO)(a),e.push(c.Kr)}catch(e){console.error(e),alert("공지사항 수정에 실패했습니다. 다시 시도해주세요.")}},"blue");return p?(0,n.jsx)("div",{children:"Loading..."}):h?(0,n.jsx)("div",{children:"Error loading data"}):(0,n.jsxs)("div",{children:[!!C&&C,(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,n.jsx)(j,{title:I.title,setTitle:e=>k(t=>({...t,title:e})),writer:I.writer,isPinned:I.pinned,setIsPinned:e=>k(t=>({...t,pinned:e})),fileLists:y,handleFileChange:e=>{let t=Array.from(e.target.files||[]);y.length+t.length<=s.C.file.maxCount?x(e=>[...e,...t.map(e=>({fileId:Date.now(),originalFileName:e.name,fileUrl:URL.createObjectURL(e),file:e}))]):alert("파일은 최대 ".concat(s.C.file.maxCount,"개까지 선택할 수 있습니다."))},handleDeleteFile:e=>{N(t=>[...t,e]),x(t=>t.filter(t=>t.fileId!==e))},handleAllDelete:()=>{N(y.map(e=>e.fileId)),x([])},handleDeleteImage:e=>{b(t=>[...t,e]),k(t=>({...t,imageReqList:t.imageReqList.filter(t=>t.imageId!==e)}))},setEditorHtml:e=>k(t=>({...t,content:e})),editorContent:i.information.content}),(0,n.jsx)("div",{className:"mt-70",children:(0,n.jsx)(a.Z,{label:"수정",disabled:!1,variant:"blue",onClick:R})})]})]})}},58960:function(e,t,i){"use strict";i.d(t,{R:function(){return r}});var n=i(32153);let{persistAtom:a}=(0,i(46426).J)(),r=(0,n.cn)({key:"supportIdState",default:0,effects_UNSTABLE:[a]})}},function(e){e.O(0,[691,703,4898,1252,4817,8597,2971,8069,1744],function(){return e(e.s=82334)}),_N_E=e.O()}]);