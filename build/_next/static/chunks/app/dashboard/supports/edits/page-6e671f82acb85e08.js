(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1759],{82334:function(e,t,n){Promise.resolve().then(n.bind(n,66040))},24232:function(e,t,n){"use strict";n.d(t,{default:function(){return a.a}});var i=n(24930),a=n.n(i)},24930:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let i=n(86921);n(57437),n(2265);let a=i._(n(84795));function l(e,t){let n={loading:e=>{let{error:t,isLoading:n,pastDelay:i}=e;return null}};return"function"==typeof e&&(n.loader=e),(0,a.default)({...n,...t})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},19721:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return a}});let i=n(99775);function a(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new i.BailoutToCSRError(t);return n}},84795:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let i=n(57437),a=n(2265),l=n(19721);function r(e){var t;return{default:null!=(t=null==e?void 0:e.default)?t:e}}let o={loader:()=>Promise.resolve(r(()=>null)),loading:null,ssr:!0},s=function(e){let t={...o,...e},n=(0,a.lazy)(()=>t.loader().then(r)),s=t.loading;function c(e){let r=s?(0,i.jsx)(s,{isLoading:!0,pastDelay:!0,error:null}):null,o=t.ssr?(0,i.jsx)(n,{...e}):(0,i.jsx)(l.BailoutToCSR,{reason:"next/dynamic",children:(0,i.jsx)(n,{...e})});return(0,i.jsx)(a.Suspense,{fallback:r,children:o})}return c.displayName="LoadableComponent",c}},46426:function(e,t){"use strict";t.J=void 0,t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};let{key:t="recoil-persist",storage:n=localStorage,converter:i=JSON}=e,a=(e,t,n,i)=>{i?delete t[n]:t[n]=e,o(t)},l=()=>{let e=n.getItem(t);return null==e?{}:"string"==typeof e?r(e):"function"==typeof e.then?e.then(r):{}},r=e=>{if(void 0===e)return{};try{return i.parse(e)}catch(e){return console.error(e),{}}},o=e=>{try{"function"==typeof n.mergeItem?n.mergeItem(t,i.stringify(e)):n.setItem(t,i.stringify(e))}catch(e){console.error(e)}};return{persistAtom:({onSet:e,node:t,trigger:n,setSelf:i})=>{if("get"===n){let e=l();"function"==typeof e.then&&e.then(e=>{e.hasOwnProperty(t.key)&&i(e[t.key])}),e.hasOwnProperty(t.key)&&i(e[t.key])}e(async(e,n,i)=>{let r=l();"function"==typeof r.then?r.then(n=>a(e,n,t.key,i)):a(e,r,t.key,i)})}}}},45386:function(e,t,n){"use strict";n.d(t,{GO:function(){return f},Nl:function(){return d},Yg:function(){return u},qR:function(){return c},xf:function(){return s}});var i=n(58640),a=n(97124),l=n(94817),r=n(69878),o=n(81252);let s=()=>{var e,t,n;let{data:r,error:o,size:s,setSize:c}=(0,l.ZP)((e,t)=>t&&0===t.information.dataList.length?null:"".concat(i._,"/api/v1/web/notifications/FAQ?page=").concat(e+1),a.Z),d=r?r.reduce((e,t)=>e.concat(t.information.dataList),[]):[],u=!r&&!o||s>0&&r&&void 0===r[s-1];return{faqData:d,error:o,isLoadingMore:u,size:s,setSize:c,isReachingEnd:(null==r?void 0:null===(e=r[0])||void 0===e?void 0:e.information.dataList.length)===0||r&&(null===(t=r[r.length-1])||void 0===t?void 0:t.information.pageInfo.currentPage)===(null===(n=r[r.length-1])||void 0===n?void 0:n.information.pageInfo.totalPage)||!1}},c=async e=>await (0,r.Z)("".concat(i._,"/api/v1/web/notifications"),{method:"POST",body:e}),d=e=>{let{data:t,error:n}=(0,o.ZP)(e?"".concat(i._,"/api/v1/web/notifications/notification/").concat(e):null,r.Z);return{data:t,error:n,isLoading:!n&&!t}},u=async e=>await (0,r.Z)("".concat(i._,"/api/v1/web/notifications/notification/").concat(e),{method:"DELETE"}),f=async e=>await (0,r.Z)("".concat(i._,"/api/v1/web/notifications"),{method:"PATCH",body:e})},66040:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var i=n(57437),a=n(48871),l=n(2265),r=n(45386),o=n(40801),s=n(47907),c=n(17940),d=n(32153),u=n(28771),f=n(30408),m=n(58960),g=n(24232),A=n(20703),h=n(86092),p=n(25273);let y=(0,g.default)(()=>n.e(1837).then(n.bind(n,61837)),{loadableGenerated:{webpack:()=>[61837]},ssr:!1}),x=(0,g.default)(()=>n.e(1475).then(n.bind(n,31475)),{loadableGenerated:{webpack:()=>[31475]},ssr:!1}),b=(0,g.default)(()=>Promise.all([n.e(1866),n.e(3070),n.e(6616),n.e(8718)]).then(n.bind(n,58718)),{loadableGenerated:{webpack:()=>[58718]},ssr:!1}),N=(0,g.default)(()=>n.e(5081).then(n.bind(n,65081)),{loadableGenerated:{webpack:()=>[65081]},ssr:!1}),w=(0,g.default)(()=>n.e(236).then(n.bind(n,53156)),{loadableGenerated:{webpack:()=>[53156]},ssr:!1}),j=(0,l.forwardRef)((e,t)=>{let{title:n,setTitle:a,writer:r,isPinned:o,setIsPinned:s,fileLists:c,handleFileChange:d,handleDeleteFile:u,handleAllDelete:f,handleDeleteImage:m,setEditorHtml:g,editorContent:j}=e,v=(0,l.useRef)(null);return(0,i.jsxs)("div",{ref:t,className:"w-[1200px] px-12",children:[(0,i.jsxs)("div",{className:"flex items-center py-30 border-t-1 border-t-gray-grayscale50",children:[(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("h1",{className:"mr-40 text-nowrap H4 text-gray-grayscale50",children:"제 목"}),(0,i.jsx)(y,{placeholder:"제목을 입력해주세요.",input:n,setInput:a})]}),(0,i.jsxs)("div",{className:"ml-19 flex items-center",children:[(0,i.jsx)(x,{isChecked:o,setIsChecked:s}),(0,i.jsx)("h2",{className:"text-nowrap mx-18 H4-caption text-gray-grayscale50",children:"최상단 고정"}),(0,i.jsx)(A.default,{src:h.Z,width:13.35,height:20.14,className:"object-contain rotate-[-45deg]",alt:"pin"})]})]}),(0,i.jsxs)("div",{className:"flex items-center py-13 border-y-1 border-y-gray-grayscale30",children:[(0,i.jsx)("h1",{className:"mr-40 text-nowrap H4 text-gray-grayscale50",children:"작성자"}),(0,i.jsx)("h1",{className:"text-nowrap H4 text-gray-grayscale40",children:r})]}),(0,i.jsxs)("div",{className:"flex items-center py-23 mb-50",children:[(0,i.jsx)("h1",{className:" h-430 items-center flex mr-51 text-nowrap H4 text-gray-grayscale50",children:"내 용"}),(0,i.jsx)(b,{width:"100%",height:"430px",setEditorHtml:g,initialContent:j})]}),(0,i.jsxs)("div",{className:"flex items-center py-23 border-y-1 border-y-gray-grayscale30",children:[(0,i.jsx)("h1",{className:"H4 text-gray-grayscale50 mr-20 text-nowrap",children:"첨부파일"}),(0,i.jsx)(N,{label:"파일선택",onClick:()=>{var e;return null===(e=v.current)||void 0===e?void 0:e.click()}}),(0,i.jsx)("input",{type:"file",ref:v,className:"hidden",multiple:!0,onChange:d}),(0,i.jsx)("div",{className:"overflow-scroll noti-file-scrollbar  ml-20 w-[917px] h-34 rounded-5 flex items-center justify-start px-10 border-1 border-gray-grayscale30",children:c.map((e,t)=>(0,i.jsx)("ul",{className:"mr-10",children:(0,i.jsx)(w,{fileName:e.originalFileName,handleDelete:()=>u(e.fileId)})},t))}),(0,i.jsx)(A.default,{src:p.Z,width:16,height:18,className:"object-contain ml-13 cursor-pointer",alt:"allDelete",onClick:f})]})]})});j.displayName="SupportEdit";var v=()=>{let e=(0,s.useRouter)(),t=(0,d.sJ)(m.R),{data:n,error:g,isLoading:A}=(0,r.Nl)(t),h=(0,d.Zl)(f.D),[p,y]=(0,l.useState)([]),[x,b]=(0,l.useState)([]),[N,w]=(0,l.useState)([]),[v,C]=(0,l.useState)({title:"",writer:"",pinned:!1,notificationType:"FAQ",content:"",imageReqList:[],files:[]});(0,l.useEffect)(()=>{n&&(C({title:n.information.title,writer:n.information.writer,pinned:n.information.pinned,notificationType:"ANNOUNCEMENT",content:n.information.content,imageReqList:n.information.imageResList.map(e=>({imageUrl:e.imageUrl,imageId:e.imageId})),files:n.information.fileList.map(e=>({fileId:e.fileId,originalFileName:e.originalFileName,fileUrl:e.fileUrl}))}),y(n.information.fileList.map(e=>({fileId:e.fileId,originalFileName:e.originalFileName,fileUrl:e.fileUrl}))))},[n]);let E=()=>{var e;v.imageReqList.map(e=>e.imageUrl);let t=(null===(e=v.content.match(/<img[^>]+src="([^">]+)"/g))||void 0===e?void 0:e.map(e=>{let t=e.match(/src="([^"]+)"/);return t?t[1]:""}))||[];b(v.imageReqList.filter(e=>!t.includes(e.imageUrl)).map(e=>e.imageId))},{showConfirmDialog:L,ConfirmDialogComponent:k}=(0,u.Z)("FAQ를 수정하시겠습니까?",async()=>{var n;E();let i=(null===(n=v.content.match(/<img[^>]+src="([^">]+)"/g))||void 0===n?void 0:n.map(e=>{let t=e.match(/src="([^"]+)"/);return{imageUrl:t?t[1]:""}}))||[],a=new FormData;a.append("modifyNotificationReq",new Blob([JSON.stringify({notificationId:t,title:v.title,pinned:v.pinned,content:v.content,deletedImageIds:x,imageReqList:i.map(e=>{let{imageUrl:t}=e;return{imageUrl:t}}),deletedFileIds:N,files:[]})],{type:"application/json"})),p.forEach(e=>{e.file&&a.append("files",e.file)});try{h(!1),await (0,r.GO)(a),e.push(c.Kr)}catch(e){console.error(e),alert("공지사항 수정에 실패했습니다. 다시 시도해주세요.")}},"blue");return A?(0,i.jsx)("div",{children:"Loading..."}):g?(0,i.jsx)("div",{children:"Error loading data"}):(0,i.jsxs)("div",{children:[!!k&&k,(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)(j,{title:v.title,setTitle:e=>C(t=>({...t,title:e})),writer:v.writer,isPinned:v.pinned,setIsPinned:e=>C(t=>({...t,pinned:e})),fileLists:p,handleFileChange:e=>{let t=Array.from(e.target.files||[]);p.length+t.length<=o.C.file.maxCount?y(e=>[...e,...t.map(e=>({fileId:Date.now(),originalFileName:e.name,fileUrl:URL.createObjectURL(e),file:e}))]):alert("파일은 최대 ".concat(o.C.file.maxCount,"개까지 선택할 수 있습니다."))},handleDeleteFile:e=>{w(t=>[...t,e]),y(t=>t.filter(t=>t.fileId!==e))},handleAllDelete:()=>{w(p.map(e=>e.fileId)),y([])},handleDeleteImage:e=>{b(t=>[...t,e]),C(t=>({...t,imageReqList:t.imageReqList.filter(t=>t.imageId!==e)}))},setEditorHtml:e=>C(t=>({...t,content:e})),editorContent:n.information.content}),(0,i.jsx)("div",{className:"mt-70",children:(0,i.jsx)(a.Z,{label:"수정",disabled:!1,variant:"blue",onClick:L})})]})]})}},40801:function(e,t,n){"use strict";n.d(t,{C:function(){return i}});let i={title:{maxLength:50},description:{maxLength:2e3},fileName:{maxLength:12},file:{maxCount:5}}},30408:function(e,t,n){"use strict";n.d(t,{D:function(){return a},f:function(){return l}});var i=n(32153);let a=(0,i.cn)({key:"isEditorModifiedState",default:!1}),l=(0,i.cn)({key:"uploadedImagesState",default:[]})},58960:function(e,t,n){"use strict";n.d(t,{R:function(){return l}});var i=n(32153);let{persistAtom:a}=(0,n(46426).J)(),l=(0,i.cn)({key:"supportIdState",default:0,effects_UNSTABLE:[a]})},86092:function(e,t){"use strict";t.Z={src:"/_next/static/media/pinIcon.428e8381.png",height:18,width:18,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXE3et01d9c0eNg0d9c1eNg2eNo2edY1d9c1dtg2eNk4fOA2dtE6g+w4feLum0OSAAAADXRSTlMA/PqCX57aLXBCveIcezOPlQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUeJwdykkSACEIwMAAsqiD/3+uNebUhwDMGLy85elbIjKo2EelN9WqZ/kEa9UE0q3jXy2pAi4nOgEgO4Xy5AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},25273:function(e,t){"use strict";t.Z={src:"/_next/static/media/transhcan.58f9d29a.png",height:20,width:18,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAHlBMVEXPKCjYNTXXNjbXNTXaNjbZNTXXNTXWNTXWNTXcNzf2HfDeAAAACnRSTlMDZU+ed0KxjsUyxQLhDgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJw9xbkNADAMA7Gz5C/7LxwgRdgQtL0C9+S0iQIqUAChfyWQxXkfsMfmAhQkAJYAF0EnAAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8}}},function(e){e.O(0,[691,703,4898,1252,4817,7111,2971,8069,1744],function(){return e(e.s=82334)}),_N_E=e.O()}]);