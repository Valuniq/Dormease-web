(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[0],{49661:function(e,t,n){Promise.resolve().then(n.bind(n,85187))},46426:function(e,t){"use strict";t.J=void 0,t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};let{key:t="recoil-persist",storage:n=localStorage,converter:i=JSON}=e,a=(e,t,n,i)=>{i?delete t[n]:t[n]=e,s(t)},r=()=>{let e=n.getItem(t);return null==e?{}:"string"==typeof e?o(e):"function"==typeof e.then?e.then(o):{}},o=e=>{if(void 0===e)return{};try{return i.parse(e)}catch(e){return console.error(e),{}}},s=e=>{try{"function"==typeof n.mergeItem?n.mergeItem(t,i.stringify(e)):n.setItem(t,i.stringify(e))}catch(e){console.error(e)}};return{persistAtom:({onSet:e,node:t,trigger:n,setSelf:i})=>{if("get"===n){let e=r();"function"==typeof e.then&&e.then(e=>{e.hasOwnProperty(t.key)&&i(e[t.key])}),e.hasOwnProperty(t.key)&&i(e[t.key])}e(async(e,n,i)=>{let o=r();"function"==typeof o.then?o.then(n=>a(e,n,t.key,i)):a(e,o,t.key,i)})}}}},79371:function(e,t,n){"use strict";n.d(t,{Fo:function(){return c},GO:function(){return A},Nl:function(){return d},Yg:function(){return f},qR:function(){return l}});var i=n(58640),a=n(97124),r=n(94817),o=n(69878),s=n(81252);let c=()=>{var e,t,n;let{data:o,error:s,size:c,setSize:l}=(0,r.ZP)((e,t)=>t&&0===t.information.dataList.length?null:"".concat(i._,"/api/v1/web/notifications/FAQ?page=").concat(e+1),a.Z),d=o?o.reduce((e,t)=>e.concat(t.information.dataList),[]):[],f=!o&&!s||c>0&&o&&void 0===o[c-1];return{faqData:d,error:s,isLoadingMore:f,size:c,setSize:l,isReachingEnd:(null==o?void 0:null===(e=o[0])||void 0===e?void 0:e.information.dataList.length)===0||o&&(null===(t=o[o.length-1])||void 0===t?void 0:t.information.pageInfo.currentPage)===(null===(n=o[o.length-1])||void 0===n?void 0:n.information.pageInfo.totalPage)||!1}},l=async e=>await (0,o.Z)("".concat(i._,"/api/v1/web/notifications"),{method:"POST",body:e}),d=e=>{let{data:t,error:n}=(0,s.ZP)(e?"".concat(i._,"/api/v1/web/notifications/notification/").concat(e):null,o.Z);return{data:t,error:n,isLoading:!n&&!t}},f=async e=>await (0,o.Z)("".concat(i._,"/api/v1/web/notifications/notification/").concat(e),{method:"DELETE"}),A=async e=>await (0,o.Z)("".concat(i._,"/api/v1/web/notifications"),{method:"PATCH",body:e})},94099:function(e,t,n){"use strict";n.d(t,{Fp:function(){return A},NE:function(){return d},V2:function(){return c},Zt:function(){return f},bq:function(){return l}});var i=n(58640),a=n(94817),r=n(69878),o=n(97124),s=n(81252);let c=()=>{var e,t,n;let{data:r,error:s,size:c,setSize:l,mutate:d}=(0,a.ZP)((e,t)=>t&&0===t.information.dataList.length?null:"".concat(i._,"/api/v1/web/notifications/ANNOUNCEMENT?page=").concat(e+1),o.Z),f=r?r.reduce((e,t)=>e.concat(t.information.dataList),[]):[],A=!r&&!s||c>0&&r&&void 0===r[c-1];return{notificationsData:f,error:s,isLoadingMore:A,size:c,setSize:l,isReachingEnd:(null==r?void 0:null===(e=r[0])||void 0===e?void 0:e.information.dataList.length)===0||r&&(null===(t=r[r.length-1])||void 0===t?void 0:t.information.pageInfo.currentPage)===(null===(n=r[r.length-1])||void 0===n?void 0:n.information.pageInfo.totalPage)||!1,mutate:d}},l=async e=>await (0,r.Z)("".concat(i._,"/api/v1/web/notifications"),{method:"POST",body:e}),d=e=>{let{data:t,error:n}=(0,s.ZP)(e?"".concat(i._,"/api/v1/web/notifications/notification/").concat(e):null,r.Z);return{data:t,error:n,isLoading:!n&&!t}},f=async e=>await (0,r.Z)("".concat(i._,"/api/v1/web/notifications/notification/").concat(e),{method:"DELETE"}),A=async e=>await (0,r.Z)("".concat(i._,"/api/v1/web/notifications"),{method:"PATCH",body:e})},85187:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var i=n(57437),a=n(47907);n(2265);var r=n(32153),o=n(94099),s=n(99611),c=n(20703),l=n(10129),d=n(48871);n(23886);var f=n(28771),A=n(76531),u=n(17940),m=e=>{let{data:t,handleDelete:n}=e,r=(0,a.useRouter)(),{showConfirmDialog:o,ConfirmDialogComponent:s}=(0,f.Z)("FAQ를 삭제하시겠습니까?",n,"red");return(0,i.jsxs)(i.Fragment,{children:[!!s&&s,(0,i.jsxs)("div",{className:"w-[1200px] px-12",children:[(0,i.jsxs)("div",{className:" flex items-center justify-between",children:[(0,i.jsxs)("div",{className:"flex items-end",children:[(0,i.jsx)("h1",{className:"H0 text-gray-grayscale50 mr-8",children:"FAQ"}),t.information.pinned&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{className:"text-nowrap mr-4 H4 text-blue-blue20 mb-8",children:"최상단 고정"}),(0,i.jsx)(c.default,{src:l.Z,width:18,height:18,className:"mb-20 object-contain ",alt:"pin"})]})]}),(0,i.jsxs)("div",{className:"w-278 flex justify-between",children:[(0,i.jsx)(d.Z,{onClick:()=>r.push(u.q2),label:"수정하기",disabled:!1,variant:"gray",className:"mr-12"}),(0,i.jsx)(d.Z,{onClick:o,label:"삭제",disabled:!1,variant:"red"})]})]}),(0,i.jsxs)("div",{className:"pt-21 pb-24 border-y-1 border-y-gray-grayscale50",children:[(0,i.jsx)("div",{className:"pb-21 pl-12 flex items-center",children:(0,i.jsxs)("h1",{className:"mr-40 text-nowrap H4 text-gray-grayscale50",children:[" ",t.information.title]})}),(0,i.jsxs)("div",{className:"pl-12 flex items-center justify-between py-13 border-y border-gray-grayscale30 border-opacity-30",children:[(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("h1",{className:"mr-40 text-nowrap H4 text-gray-grayscale50",children:"작성자"}),(0,i.jsx)("h1",{className:"text-nowrap H4 text-gray-grayscale40",children:t.information.writer})]}),(0,i.jsxs)("div",{className:"flex items-center cation2 text-gray-grayscale40",children:[(0,i.jsxs)("div",{className:"flex items-center mr-30 text-nowrap",children:[(0,i.jsx)("h1",{className:"mr-19 ",children:"작성일"}),(0,i.jsx)("h1",{children:t.information.createdDate})]}),(0,i.jsxs)("div",{className:"flex items-center text-nowrap",children:[(0,i.jsx)("h1",{className:"mr-19 ",children:"수정일"}),(0,i.jsx)("h1",{children:t.information.modifiedDate})]})]})]}),(0,i.jsx)("div",{className:"h-450 p-17 overflow-y-auto border-1 border-gray-grayscale30 border-opacity-30 rounded-8 my-23",children:(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:t.information.content},className:"editor-content"})}),(0,i.jsxs)("div",{className:"pl-12 flex items-center pt-23 border-t-1 border-y-gray-grayscale30 border-opacity-30",children:[(0,i.jsx)("h1",{className:"H4 text-gray-grayscale50 mr-20 text-nowrap",children:"첨부파일"}),t.information.fileList&&t.information.fileList.length>0?(0,i.jsx)(i.Fragment,{children:t.information.fileList.map((e,t)=>(0,i.jsxs)("ul",{className:"mr-10 flex align-center",children:[(0,i.jsx)("a",{target:"_blank",className:"mr-4 border-b border-gray-grayscale50",href:e.fileUrl,download:e.originalFileName,children:e.originalFileName}),(0,i.jsx)(c.default,{width:16,height:15,src:A.Z,className:"object-contain",alt:"FileClip"})]},t))}):(0,i.jsx)("h2",{className:"H4 text-gray-grayscale30",children:"첨부파일이 없습니다."})]})]})]})]})},h=n(79371),g=n(58640),x=n(81252),y=()=>{let e=(0,a.useRouter)(),t=(0,r.sJ)(s.o),{data:n,error:c,isLoading:l}=(0,o.NE)(t),{size:d}=(0,h.Fo)(),f=async()=>{try{let n=await (0,h.Yg)(t),i=await n;if(n.ok||n.check){console.log("FAQ deleted successfully"),console.log("Server response:",i);for(let e=0;e<d;e++){let t="".concat(g._,"/api/v1/web/notifications/FAQ?page=").concat(e+1);await (0,x.JG)(t,void 0,{revalidate:!0})}e.push(u.qB)}else console.error("FAQ 삭제 실패:",i)}catch(e){console.error("FAQ 삭제 에러",e)}};return l?(0,i.jsx)("div",{children:"Loading..."}):c?(0,i.jsx)("div",{children:"Failed to load faq detail"}):n?(n.information.fileList.map(e=>({fileId:e.fileId,fileUrl:e.fileUrl,originalFileName:e.originalFileName})),(0,i.jsx)("div",{children:(0,i.jsx)(m,{data:n,handleDelete:f})})):(0,i.jsx)("div",{children:"No data available"})}},99611:function(e,t,n){"use strict";n.d(t,{o:function(){return r}});var i=n(32153);let{persistAtom:a}=(0,n(46426).J)(),r=(0,i.cn)({key:"faqIdState",default:0,effects_UNSTABLE:[a]})},23886:function(){},76531:function(e,t){"use strict";t.Z={src:"/_next/static/media/FileClip.a171227f.png",height:18,width:18,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUrKyswMDAwMDAwMDAyMjIwMDAwMDAwMDAxMTEwMDBNCNPFAAAACnRSTlMBo5NDEXUqYFCIsp99NAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUeJwdy7kNADAMw0DKv/dfOHCqAwsCEKYCKs1DP917zxlZkBqXFVjvnmS2/FY6vw8apgC/gJfvYAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},10129:function(e,t){"use strict";t.Z={src:"/_next/static/media/Union.0c44f68a.png",height:19,width:18,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEWhq+SpxvCuzPenxe+mw+6nxO6ryfKryfSpx/Koxu+pxe2ow+ylwuypxvC21v/PohBGAAAADnRSTlMB/P6iZ4Xsts9KIzjfxMvmxn8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA4SURBVHicHcq3EcAwEMRA3Ds6zfdfroZEtAEAooLXaHs6U7LAP5msi2zJhi/wVm1gefa8q28ygR8gswD4L51vJwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[691,703,4898,1252,4817,7111,2971,8069,1744],function(){return e(e.s=49661)}),_N_E=e.O()}]);