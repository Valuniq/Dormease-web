(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[123],{91312:function(e,t,n){Promise.resolve().then(n.bind(n,19923))},24232:function(e,t,n){"use strict";n.d(t,{default:function(){return l.a}});var a=n(24930),l=n.n(a)},24930:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let a=n(86921);n(57437),n(2265);let l=a._(n(84795));function i(e,t){let n={loading:e=>{let{error:t,isLoading:n,pastDelay:a}=e;return null}};return"function"==typeof e&&(n.loader=e),(0,l.default)({...n,...t})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},19721:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return l}});let a=n(99775);function l(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new a.BailoutToCSRError(t);return n}},84795:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let a=n(57437),l=n(2265),i=n(19721);function r(e){var t;return{default:null!=(t=null==e?void 0:e.default)?t:e}}let s={loader:()=>Promise.resolve(r(()=>null)),loading:null,ssr:!0},c=function(e){let t={...s,...e},n=(0,l.lazy)(()=>t.loader().then(r)),c=t.loading;function o(e){let r=c?(0,a.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,s=t.ssr?(0,a.jsx)(n,{...e}):(0,a.jsx)(i.BailoutToCSR,{reason:"next/dynamic",children:(0,a.jsx)(n,{...e})});return(0,a.jsx)(l.Suspense,{fallback:r,children:s})}return o.displayName="LoadableComponent",o}},4550:function(e,t,n){"use strict";n.d(t,{Fp:function(){return f},NE:function(){return d},V2:function(){return c},Zt:function(){return u},bq:function(){return o}});var a=n(58640),l=n(94817),i=n(69878),r=n(97124),s=n(81252);let c=()=>{var e,t,n;let{data:i,error:s,size:c,setSize:o,mutate:d}=(0,l.ZP)((e,t)=>t&&0===t.information.dataList.length?null:"".concat(a._,"/api/v1/web/notifications/ANNOUNCEMENT?page=").concat(e+1),r.Z),u=i?i.reduce((e,t)=>e.concat(t.information.dataList),[]):[],f=!i&&!s||c>0&&i&&void 0===i[c-1];return{notificationsData:u,error:s,isLoadingMore:f,size:c,setSize:o,isReachingEnd:(null==i?void 0:null===(e=i[0])||void 0===e?void 0:e.information.dataList.length)===0||i&&(null===(t=i[i.length-1])||void 0===t?void 0:t.information.pageInfo.currentPage)===(null===(n=i[i.length-1])||void 0===n?void 0:n.information.pageInfo.totalPage)||!1,mutate:d}},o=async e=>await (0,i.Z)("".concat(a._,"/api/v1/web/notifications"),{method:"POST",body:e}),d=e=>{let{data:t,error:n}=(0,s.ZP)(e?"".concat(a._,"/api/v1/web/notifications/notification/").concat(e):null,i.Z);return{data:t,error:n,isLoading:!n&&!t}},u=async e=>await (0,i.Z)("".concat(a._,"/api/v1/web/notifications/notification/").concat(e),{method:"DELETE"}),f=async e=>await (0,i.Z)("".concat(a._,"/api/v1/web/notifications"),{method:"PATCH",body:e})},19923:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var a=n(57437),l=n(48871),i=n(2265),r=n(4550),s=n(40801),c=n(47907),o=n(17940),d=n(32153),u=n(28771),f=n(30408),A=n(24232),h=n(20703),m=n(86092),g=n(25273);let p=(0,A.default)(()=>n.e(1837).then(n.bind(n,61837)),{loadableGenerated:{webpack:()=>[61837]},ssr:!1}),x=(0,A.default)(()=>n.e(1475).then(n.bind(n,31475)),{loadableGenerated:{webpack:()=>[31475]},ssr:!1}),b=(0,A.default)(()=>Promise.all([n.e(1866),n.e(3070),n.e(6616),n.e(8718)]).then(n.bind(n,58718)),{loadableGenerated:{webpack:()=>[58718]},ssr:!1}),y=(0,A.default)(()=>n.e(5081).then(n.bind(n,65081)),{loadableGenerated:{webpack:()=>[65081]},ssr:!1}),N=(0,A.default)(()=>n.e(236).then(n.bind(n,53156)),{loadableGenerated:{webpack:()=>[53156]},ssr:!1}),j=(0,i.forwardRef)((e,t)=>{let{title:n,setTitle:l,writer:r,isPinned:s,setIsPinned:c,fileLists:o,handleFileChange:d,handleDeleteFile:u,handleAllDelete:f,setEditorHtml:A}=e,j=(0,i.useRef)(null);return(0,a.jsxs)("div",{ref:t,className:"w-[1200px] px-12",children:[(0,a.jsxs)("div",{className:"flex items-center py-30 border-t-1 border-t-gray-grayscale50",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("h1",{className:"mr-40 text-nowrap H4 text-gray-grayscale50",children:"제 목"}),(0,a.jsx)(p,{placeholder:"제목을 입력해주세요.",input:n,setInput:l})]}),(0,a.jsxs)("div",{className:"ml-19 flex items-center",children:[(0,a.jsx)(x,{isChecked:s,setIsChecked:c}),(0,a.jsx)("h2",{className:"text-nowrap mx-18 H4-caption text-gray-grayscale50",children:"최상단 고정"}),(0,a.jsx)(h.default,{src:m.Z,width:13.35,height:20.14,className:"object-contain rotate-[-45deg]",alt:"pin"})]})]}),(0,a.jsxs)("div",{className:"flex items-center py-13 border-y-1 border-y-gray-grayscale30",children:[(0,a.jsx)("h1",{className:"mr-40 text-nowrap H4 text-gray-grayscale50",children:"작성자"}),(0,a.jsx)("h1",{className:"text-nowrap H4 text-gray-grayscale40",children:r})]}),(0,a.jsxs)("div",{className:"flex items-center py-23 mb-50",children:[(0,a.jsx)("h1",{className:" h-430 items-center flex mr-51 text-nowrap H4 text-gray-grayscale50",children:"내 용"}),(0,a.jsx)(b,{width:"100%",height:"430px",setEditorHtml:A})]}),(0,a.jsxs)("div",{className:"flex items-center py-23 border-y-1 border-y-gray-grayscale30",children:[(0,a.jsx)("h1",{className:"H4 text-gray-grayscale50 mr-20 text-nowrap",children:"첨부파일"}),(0,a.jsx)(y,{label:"파일선택",onClick:()=>{var e;return null===(e=j.current)||void 0===e?void 0:e.click()}}),(0,a.jsx)("input",{type:"file",ref:j,className:"hidden",multiple:!0,onChange:d}),(0,a.jsx)("div",{className:"overflow-scroll noti-file-scrollbar  ml-20 w-[917px] h-34 rounded-5 flex items-center justify-start px-10 border-1 border-gray-grayscale30",children:o.map((e,t)=>(0,a.jsx)("ul",{className:"mr-10",children:(0,a.jsx)(N,{fileName:e.fileName,handleDelete:()=>u(e.fileName)})},t))}),(0,a.jsx)(h.default,{src:g.Z,width:16,height:18,className:"object-contain ml-13 cursor-pointer",alt:"allDelete",onClick:f})]})]})});j.displayName="NoticeWriting";var w=()=>{let e=(0,c.useRouter)(),t=(0,d.Zl)(f.D),[n,A]=(0,i.useState)([]),[h,m]=(0,i.useState)({title:"",pinned:!1,notificationType:"ANNOUNCEMENT",content:"",imageReqList:[],files:[]}),{showConfirmDialog:g,ConfirmDialogComponent:p}=(0,u.Z)("작성한 내용을 등록하시겠습니까?",async()=>{var a;let l=(null===(a=h.content.match(/<img[^>]+src="([^">]+)"/g))||void 0===a?void 0:a.map(e=>{let t=e.match(/src="([^"]+)"/);return{imageUrl:t?t[1]:""}}))||[],i={...h,imageReqList:l,files:n.map(e=>({file:e.file}))},s=new FormData;s.append("writeNotificationReq",new Blob([JSON.stringify(i)],{type:"application/json"})),n.length>0?n.forEach(e=>{s.append("files",e.file)}):s.append("files",new Blob);try{t(!1),await (0,r.bq)(s),e.push(o.K1)}catch(e){console.error(e),alert("공지사항 등록에 실패했습니다. 다시 시도해주세요.")}},"blue");return(0,a.jsxs)(a.Fragment,{children:[!!p&&p,(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,a.jsx)(j,{title:h.title,setTitle:e=>m(t=>({...t,title:e})),writer:"관리자",isPinned:h.pinned,setIsPinned:e=>m(t=>({...t,pinned:e})),fileLists:n,handleFileChange:e=>{let t=Array.from(e.target.files||[]);n.length+t.length<=s.C.file.maxCount?A(e=>[...e,...t.map(e=>({fileName:e.name,file:e}))]):alert("파일은 최대 ".concat(s.C.file.maxCount,"개까지 선택할 수 있습니다."))},handleDeleteFile:e=>{A(t=>t.filter(t=>t.fileName!==e))},handleAllDelete:()=>{A([])},setEditorHtml:e=>m(t=>({...t,content:e}))}),(0,a.jsx)("div",{className:"mt-70",children:(0,a.jsx)(l.Z,{label:"등록",disabled:!1,variant:"blue",onClick:g})})]})]})}},40801:function(e,t,n){"use strict";n.d(t,{C:function(){return a}});let a={title:{maxLength:50},description:{maxLength:2e3},fileName:{maxLength:12},file:{maxCount:5}}},30408:function(e,t,n){"use strict";n.d(t,{D:function(){return l},f:function(){return i}});var a=n(32153);let l=(0,a.cn)({key:"isEditorModifiedState",default:!1}),i=(0,a.cn)({key:"uploadedImagesState",default:[]})},86092:function(e,t){"use strict";t.Z={src:"/_next/static/media/pinIcon.428e8381.png",height:18,width:18,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXE3et01d9c0eNg0d9c1eNg2eNo2edY1d9c1dtg2eNk4fOA2dtE6g+w4feLum0OSAAAADXRSTlMA/PqCX57aLXBCveIcezOPlQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUeJwdykkSACEIwMAAsqiD/3+uNebUhwDMGLy85elbIjKo2EelN9WqZ/kEa9UE0q3jXy2pAi4nOgEgO4Xy5AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},25273:function(e,t){"use strict";t.Z={src:"/_next/static/media/transhcan.58f9d29a.png",height:20,width:18,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAHlBMVEXPKCjYNTXXNjbXNTXaNjbZNTXXNTXWNTXWNTXcNzf2HfDeAAAACnRSTlMDZU+ed0KxjsUyxQLhDgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJw9xbkNADAMA7Gz5C/7LxwgRdgQtL0C9+S0iQIqUAChfyWQxXkfsMfmAhQkAJYAF0EnAAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8}}},function(e){e.O(0,[691,703,4898,1252,4817,7111,2971,8069,1744],function(){return e(e.s=91312)}),_N_E=e.O()}]);