(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2019],{61904:function(e,s,t){Promise.resolve().then(t.bind(t,27674))},27674:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return y}});var r=t(57437),a=t(15853),l=t(46331),n=t(11867),c=t(73122),i=t(2265);let d=e=>{if(!e||"string"!=typeof e)return null;let s=e.substring(e.lastIndexOf("/")+1),[t,r]=s.split(".");return t.length>6?t.substring(0,6)+"..."+r:s};var o=e=>{let{name:s,studentId:t,gender:a,applicationBuilding:l,residence:n,certifiedFile:c,prioritySelection:i,assignedBuilding:o,isPassed:h}=e,x=c?d(c):null,u=i?d(i):null;return(0,r.jsxs)("tr",{className:"h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50",children:[(0,r.jsx)("td",{className:"text-center",children:s}),(0,r.jsx)("td",{className:"text-center",children:t}),(0,r.jsx)("td",{className:"text-center",children:a}),(0,r.jsx)("td",{className:"text-center",children:l}),(0,r.jsx)("td",{className:"text-center flex justify-center",children:(0,r.jsx)("div",{className:"w-286",children:(0,r.jsx)("h1",{className:" H4-caption text-gray-grayscale50",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:n})})}),(0,r.jsx)("td",{className:"text-center",children:x?(0,r.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:x}):"X"}),(0,r.jsx)("td",{className:"text-center",children:u?(0,r.jsx)("a",{href:i,target:"_blank",rel:"noopener noreferrer",children:u}):"X"}),(0,r.jsx)("td",{className:"text-center",children:o&&o.length>0?o:"-"}),(0,r.jsx)("td",{className:"text-center ".concat("PASS"===h?"text-blue-blue30":"NON_PASS"===h?"text-red-red20":""),children:"PASS"===h?"합격":"NON_PASS"===h?"탈락":"MOVE_PASS"===h?"이동합격":"-"})]})},h=e=>{let{applicantLists:s}=e;return console.log(s),(0,r.jsx)("div",{className:"w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50",children:(0,r.jsxs)("table",{className:"w-[1305px]",children:[(0,r.jsxs)("thead",{className:"w-full h-36 bg-white sticky top-0 z-1",children:[(0,r.jsxs)("tr",{className:"text-gray-grayscale50",children:[(0,r.jsx)("th",{className:"H4 w-[8%]",children:"이름"}),(0,r.jsx)("th",{className:"H4 w-[8%]",children:"학번"}),(0,r.jsx)("th",{className:"H4 w-[8%]",children:"성별"}),(0,r.jsx)("th",{className:"H4 w-[8%]",children:"신청건물"}),(0,r.jsx)("th",{className:"H4 w-[20%]",children:"본거주지"}),(0,r.jsx)("th",{className:"H4 w-[12%]",children:"등본파일"}),(0,r.jsx)("th",{className:"H4 w-[12%]",children:"우선선발"}),(0,r.jsx)("th",{className:"H4 w-[8%]",children:"배정건물"}),(0,r.jsx)("th",{className:"H4 w-[8%]",children:"합격여부"})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("th",{colSpan:9,children:(0,r.jsx)("div",{className:"w-full h-18 border-b-1 border-b-gray-grayscale50"})})})]}),s&&s.length>0?(0,r.jsxs)("tbody",{className:"overflow-y-scroll",children:[(0,r.jsx)("tr",{className:"h-15"}),s.map((e,s)=>{var t,a;return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(o,{name:e.studentName,studentId:e.studentNumber,gender:e.gender,applicationBuilding:(null===(t=e.applicationDormitoryRoomTypeRes)||void 0===t?void 0:t.dormitoryName)||"",residence:e.address,certifiedFile:e.copy,prioritySelection:e.prioritySelectionCopy,assignedBuilding:(null===(a=e.resultDormitoryRoomTypeRes)||void 0===a?void 0:a.dormitoryName)||"",isPassed:e.dormitoryApplicationResult}),(0,r.jsx)("tr",{className:"h-15"})]},s)})]}):(0,r.jsx)("tbody",{className:"h-693",children:(0,r.jsx)(c.Z,{colspan:10})})]})})},x=t(57482),u=t(93223),m=t(47907),g=t(32153),y=()=>{let[e]=(0,g.FV)(u.Ai),{data:s,isLoading:t,error:c}=(0,a.ZY)(e),[d,o]=(0,g.FV)(u.bp),[y,A]=(0,i.useState)(!1),N=(0,m.useRouter)(),[j,p]=(0,i.useState)(""),[f,b]=(0,i.useState)(""),[w,v]=(0,i.useState)(!1),{data:S,error:H,isLoading:C}=(0,a.lQ)(e,f&&""!==f.trim()?f:null);(0,i.useEffect)(()=>{A(!0)},[]);let E=w?null==S?void 0:S.information:null==s?void 0:s.information;return(0,i.useEffect)(()=>{""===j.trim()&&v(!1)},[j]),(0,r.jsxs)("div",{className:"w-[1305px] flex flex-col gap-30",children:[(0,r.jsxs)("div",{className:"flex justify-between items-end",children:[(0,r.jsx)("h1",{className:"H1 text-gray-grayscale50",children:y?d:"Loading..."}),(0,r.jsx)(n.Z,{input:j,setInput:p,placeholder:"이름 또는 학번",handleSearch:()=>{""===j.trim()?v(!1):j===f&&w||(b(j),v(!0))}})]}),(0,r.jsx)(h,{applicantLists:E||[]}),(0,r.jsx)(l.Z,{onClick:()=>N.push(x.gb),label:"뒤로가기",disabled:!1})]})}},11867:function(e,s,t){"use strict";t.d(s,{Z:function(){return n}});var r=t(57437),a=t(20703),l={src:"/_next/static/media/SearchIcon.fd87d628.png",height:20,width:20,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEW7u7vMzMzNzc3Ozs7MzMzLy8vLy8vOzs6cMFoWAAAACHRSTlMBlqENf1hlKKFJ7xkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAwSURBVHicJYpJCgBADMJi7fL/Hw8yOUiQwJQ0wAqIlQELitD3xTLbaTKrVuvyn7l6DrcAeLXaQ4sAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},n=e=>{let{input:s,setInput:t,placeholder:n,handleSearch:c}=e;return(0,r.jsxs)("div",{className:"".concat(s?"border-gray-grayscale50":"border-gray-grayscale30"," focus:border-gray-grayscale40 border-[1.5px] w-380 h-38 flex items-center rounded-5"),children:[(0,r.jsx)("input",{className:"outline-none H4-cation px-12 w-292 h-24  text-gray-grayscale50 placeholder:text-gray-grayscale30",placeholder:n,type:"text",value:s,onChange:e=>{t(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&c&&c()}}),(0,r.jsx)(a.default,{src:l,width:18,height:18,className:"ml-auto mr-9 object-contain",alt:"SearchIcon",onClick:()=>c&&c()})]})}}},function(e){e.O(0,[691,4898,703,1252,1969,2971,8069,1744],function(){return e(e.s=61904)}),_N_E=e.O()}]);