(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9925],{75299:function(e,o,t){"use strict";var n,i=t(52846);function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}o.Z=function(e){return i.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none"},e),n||(n=i.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:1.5,d:"M1 8h14M8 1v14"})))}},16033:function(e,o,t){Promise.resolve().then(t.bind(t,87083))},46426:function(e,o){"use strict";o.J=void 0,o.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};let{key:o="recoil-persist",storage:t=localStorage,converter:n=JSON}=e,i=(e,o,t,n)=>{n?delete o[t]:o[t]=e,a(o)},r=()=>{let e=t.getItem(o);return null==e?{}:"string"==typeof e?s(e):"function"==typeof e.then?e.then(s):{}},s=e=>{if(void 0===e)return{};try{return n.parse(e)}catch(e){return console.error(e),{}}},a=e=>{try{"function"==typeof t.mergeItem?t.mergeItem(o,n.stringify(e)):t.setItem(o,n.stringify(e))}catch(e){console.error(e)}};return{persistAtom:({onSet:e,node:o,trigger:t,setSelf:n})=>{if("get"===t){let e=r();"function"==typeof e.then&&e.then(e=>{e.hasOwnProperty(o.key)&&n(e[o.key])}),e.hasOwnProperty(o.key)&&n(e[o.key])}e(async(e,t,n)=>{let s=r();"function"==typeof s.then?s.then(t=>i(e,t,o.key,n)):i(e,s,o.key,n)})}}}},87083:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return h}});var n=t(57437),i=t(2265),r=t(31371),s=t(94769),a=t(48871),l=t(75299),d=e=>{let{label:o,...t}=e;return(0,n.jsxs)("button",{...t,className:"H4 flex items-center w-130 h-31 rounded-8 bg-gray-grayscale20 text-gray-grayscale50 hover:text-white hover:bg-gray-grayscale40 hover:hover-transition active:text-white active:bg-gray-grayscale50",children:[(0,n.jsx)(l.Z,{className:"ml-9 mr-6"}),o]})},m=t(86716),f=t(47907),u=t(32153),v=t(91355),c=t(25648),y=t(5154),I=t(91723),b=t(79517),x=t(48274),R=t(42825),h=()=>{var e,o,t;let l=(0,f.useRouter)(),h=(0,u.Zl)(v.jd),p=(0,u.sJ)(y.J),[g,N]=(0,i.useState)(!1),[P,j]=(0,i.useState)(!1),{data:S,error:Z,isLoading:D}=(0,c.zM)(p),[C,k]=(0,i.useState)(S),[w,E]=(0,i.useState)({copy:"",prioritySelectionCopy:""}),[O,z]=(0,i.useState)({copy:null,prioritySelectionCopy:null}),[M,A]=(0,i.useState)(!1),[T,_]=(0,i.useState)(!1),[L,J]=(0,i.useState)(!1),[X,B]=(0,i.useState)(!1),[F,K]=(0,i.useState)(!1),[H,Y]=(0,i.useState)({isModal:!1,dormitoryId:0,dormitoryName:"",roomSize:0}),[U,W]=(0,i.useState)([]);if((0,i.useEffect)(()=>{(async()=>{if(S){k(S),E({copy:S.information.residentPrivateInfoRes.copy,prioritySelectionCopy:S.information.residentPrivateInfoRes.prioritySelectionCopy});let e=await (0,c.oW)(p,S.information.residentDormitoryInfoRes.termId);e.check&&W(e.information)}})()},[S,p]),D)return(0,n.jsx)("div",{});let V=async(e,o)=>{if(!e.target.files||0===e.target.files.length){console.log("파일이 선택되지 않았습니다.");return}let t=e.target.files[0];if(t.size/1048576>15){alert("파일 용량은 15MB를 초과할 수 없습니다.");return}z(e=>({...e,[o]:t}));let n=t.name;E(e=>({...e,[o]:n}))},q=(e,o,t)=>{k(n=>{var i;return n?{...n,information:{...n.information,[e]:{...n.information.residentPrivateInfoRes,...n.information.residentDormitoryInfoRes,[o]:t}},check:null!==(i=n.check)&&void 0!==i&&i}:n})},G=async()=>{if(!C||!C.information)return null;let e={dormitoryId:C.information.residentDormitoryInfoRes.dormitoryId,roomSize:C.information.residentDormitoryInfoRes.roomSize,roomNumber:C.information.residentDormitoryInfoRes.roomNumber,bedNumber:C.information.residentDormitoryInfoRes.bedNumber,termId:C.information.residentDormitoryInfoRes.termId},o={dormitoryPayment:C.information.residentPrivateInfoRes.dormitoryPayment,hasKey:C.information.residentPrivateInfoRes.hasKey,bankName:C.information.residentPrivateInfoRes.bankName,accountNumber:C.information.residentPrivateInfoRes.accountNumber,emergencyContact:C.information.residentPrivateInfoRes.emergencyContact,emergencyRelation:C.information.residentPrivateInfoRes.emergencyRelation};await (0,c.PI)(p,O.copy,O.prioritySelectionCopy,{residentDormitoryInfoReq:e,residentPrivateInfoReq:o}),h(!1),l.push("/dashboard/students")},Q=async()=>{if(!C)return null;let e=await (0,c.Af)(C.information.residentDormitoryInfoRes.dormitoryId,C.information.residentDormitoryInfoRes.roomNumber);e.check&&e.information.possible?(q("residentDormitoryInfoRes","bedNumber",e.information.bedNumber),q("residentDormitoryInfoRes","roommateNames",e.information.roommateNames)):K(!0)},$=async()=>{(await (0,c.eT)(p)).check&&(h(!1),_(!1),J(!0))},ee=async()=>{(await (0,c.eX)(p)).check&&(h(!1),l.push("/dashboard/students"))};return(0,n.jsxs)("div",{className:"flex flex-col relative w-[1200px]",children:[(0,n.jsx)("h3",{className:"H3 text-gray-grayscale50 text-center mb-6 w-[1200px]",children:"개인정보"}),!g&&(0,n.jsx)("div",{className:"absolute right-0 -top-8",children:(0,n.jsx)(r.Z,{label:"수정",disabled:!1,selected:!1,variant:"blue",onClick:()=>{h(!0),N(!g)}})}),(0,n.jsxs)("div",{className:"flex justify-between gap-100 border-t-1 border-t-gray-grayscale50 pt-31 px-46 h-590",children:[(0,n.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,n.jsx)(s.Z,{label:"이름",text:null==C?void 0:C.information.residentPrivateInfoRes.name,value:null==C?void 0:C.information.residentPrivateInfoRes.name}),(0,n.jsx)(s.Z,{label:"학번",text:null==C?void 0:C.information.residentPrivateInfoRes.studentNumber,value:null==C?void 0:C.information.residentPrivateInfoRes.studentNumber}),(0,n.jsx)(s.Z,{label:"학과",text:null==C?void 0:C.information.residentPrivateInfoRes.major,value:null==C?void 0:C.information.residentPrivateInfoRes.major}),(0,n.jsx)(s.Z,{label:"학년",text:(null==C?void 0:C.information.residentPrivateInfoRes.schoolYear)?"".concat(C.information.residentPrivateInfoRes.schoolYear,"학년"):"",value:null==C?void 0:C.information.residentPrivateInfoRes.schoolYear}),(0,n.jsx)(s.Z,{label:"학적",text:C&&x.T[null==C?void 0:C.information.residentPrivateInfoRes.schoolStatus],value:C&&x.T[null==C?void 0:C.information.residentPrivateInfoRes.schoolStatus]}),(0,n.jsx)(s.Z,{label:"성별",text:C&&x.v[C.information.residentPrivateInfoRes.gender],value:C&&x.v[C.information.residentPrivateInfoRes.gender]}),(0,n.jsx)(s.Z,{label:"휴대전화",text:null==C?void 0:C.information.residentPrivateInfoRes.phoneNumber,value:null==C?void 0:C.information.residentPrivateInfoRes.phoneNumber}),(0,n.jsx)(s.Z,{label:"본거주지",text:null==C?void 0:C.information.residentPrivateInfoRes.address,value:null==C?void 0:C.information.residentPrivateInfoRes.address}),(0,n.jsx)(s.Z,{label:"등본",isEdit:g,type:"file",text:w.copy,value:null==C?void 0:C.information.residentPrivateInfoRes.copy,handleFileChange:e=>V(e,"copy")}),(0,n.jsx)(s.Z,{label:"우선선발",isEdit:g,type:"file",text:w.prioritySelectionCopy,value:null==C?void 0:C.information.residentPrivateInfoRes.prioritySelectionCopy,handleFileChange:e=>V(e,"prioritySelectionCopy")}),(0,n.jsx)(s.Z,{label:"식수",text:(null==C?void 0:C.information.residentPrivateInfoRes.mealTicketCount)?"".concat(null==C?void 0:C.information.residentPrivateInfoRes.mealTicketCount,"식"):"",value:null==C?void 0:C.information.residentPrivateInfoRes.mealTicketCount})]}),(0,n.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,n.jsx)(s.Z,{right:g,label:"흡연여부",text:(null==C?void 0:C.information.residentPrivateInfoRes.isSmoking)?"O":"X",value:null==C?void 0:C.information.residentPrivateInfoRes.isSmoking}),(0,n.jsx)(s.Z,{right:g,isEdit:g,type:"checkbox",label:"생활관비 납부",text:(null==C?void 0:C.information.residentPrivateInfoRes.dormitoryPayment)?"O":"X",value:null==C?void 0:C.information.residentPrivateInfoRes.dormitoryPayment,setIsChecked:e=>q("residentPrivateInfoRes","dormitoryPayment",e)}),(0,n.jsx)(s.Z,{right:g,isEdit:g,label:"열쇠 수령 여부",type:"checkbox",text:(null==C?void 0:C.information.residentPrivateInfoRes.hasKey)?"수령":"미수령",value:null==C?void 0:C.information.residentPrivateInfoRes.hasKey,setIsChecked:e=>q("residentPrivateInfoRes","hasKey",e)}),(0,n.jsx)(s.Z,{right:g,label:"상점",text:null==C?void 0:C.information.residentPrivateInfoRes.bonusPoint,value:null==C?void 0:C.information.residentPrivateInfoRes.bonusPoint}),(0,n.jsx)(s.Z,{right:g,label:"벌점",text:null==C?void 0:C.information.residentPrivateInfoRes.minusPoint,value:null==C?void 0:C.information.residentPrivateInfoRes.minusPoint}),(0,n.jsx)(s.Z,{right:g,label:"개인정보 동의",text:(null==C?void 0:C.information.residentPrivateInfoRes.personalInfoConsent)?"O":"X",value:null==C?void 0:C.information.residentPrivateInfoRes.personalInfoConsent}),(0,n.jsx)(s.Z,{right:g,label:"제3자제공 동의",text:(null==C?void 0:C.information.residentPrivateInfoRes.thirdPartyConsent)?"O":"X",value:null==C?void 0:C.information.residentPrivateInfoRes.thirdPartyConsent}),(0,n.jsx)(s.Z,{right:g,isEdit:g,type:"string",label:"은행명",text:null==C?void 0:C.information.residentPrivateInfoRes.bankName,value:null==C?void 0:C.information.residentPrivateInfoRes.bankName,input:null==C?void 0:C.information.residentPrivateInfoRes.bankName,setInput:e=>q("residentPrivateInfoRes","bankName",e)}),(0,n.jsx)(s.Z,{right:g,isEdit:g,type:"string",label:"계좌번호",text:null==C?void 0:C.information.residentPrivateInfoRes.accountNumber,value:null==C?void 0:C.information.residentPrivateInfoRes.accountNumber,input:null==C?void 0:C.information.residentPrivateInfoRes.accountNumber,setInput:e=>q("residentPrivateInfoRes","accountNumber",e)}),(0,n.jsx)(s.Z,{right:g,isEdit:g,type:"string",label:"비상연락처",text:null==C?void 0:C.information.residentPrivateInfoRes.emergencyContact,value:null==C?void 0:C.information.residentPrivateInfoRes.emergencyContact,input:null==C?void 0:C.information.residentPrivateInfoRes.emergencyContact,setInput:e=>q("residentPrivateInfoRes","emergencyContact",e)}),(0,n.jsx)(s.Z,{right:g,isEdit:g,type:"string",label:"비상연락처 관계",text:null==C?void 0:C.information.residentPrivateInfoRes.emergencyRelation,value:null==C?void 0:C.information.residentPrivateInfoRes.emergencyRelation,input:null==C?void 0:C.information.residentPrivateInfoRes.emergencyRelation,setInput:e=>q("residentPrivateInfoRes","emergencyRelation",e)})]})]}),(0,n.jsxs)("div",{className:"flex flex-col h-213 mt-29 pt-12 bg-gray-grayscale5",children:[(0,n.jsx)("h3",{className:"H3 text-gray-grayscale50 text-center mb-6 border-b-1 border-b-gray-grayscale50 pb-8",children:"기숙사 정보"}),(0,n.jsxs)("div",{className:"flex justify-between gap-100 h-136 px-46",children:[(0,n.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,n.jsx)(s.Z,{isEdit:g,type:"building",isBuilding:P,setIsBuilding:j,list:U,dormInfo:{dormitoryId:null!==(e=null==C?void 0:C.information.residentDormitoryInfoRes.dormitoryId)&&void 0!==e?e:0,dormitoryName:null!==(o=null==C?void 0:C.information.residentDormitoryInfoRes.dormitoryName)&&void 0!==o?o:"",roomSize:null!==(t=null==C?void 0:C.information.residentDormitoryInfoRes.roomSize)&&void 0!==t?t:0},handleSelectedDorm:e=>{Y({isModal:!0,dormitoryId:e.dormitoryId,dormitoryName:e.dormitoryName,roomSize:e.roomSize})},label:"건물",text:(null==C?void 0:C.information.residentDormitoryInfoRes.dormitoryName)?(null==C?void 0:C.information.residentDormitoryInfoRes.dormitoryName)+((null==C?void 0:C.information.residentDormitoryInfoRes.roomSize)!==0?"("+(null==C?void 0:C.information.residentDormitoryInfoRes.roomSize)+"인실)":""):"",value:null==C?void 0:C.information.residentDormitoryInfoRes.dormitoryName}),(0,n.jsx)(s.Z,{isEdit:g,type:"roomNumber",label:"호실",text:(null==C?void 0:C.information.residentDormitoryInfoRes.roomNumber)?"".concat(null==C?void 0:C.information.residentDormitoryInfoRes.roomNumber,"호"):"",value:null==C?void 0:C.information.residentDormitoryInfoRes.roomNumber,input:(null==C?void 0:C.information.residentDormitoryInfoRes.roomNumber)?null==C?void 0:C.information.residentDormitoryInfoRes.roomNumber.toString():"",setInput:e=>q("residentDormitoryInfoRes","roomNumber",e),handleRoomNumber:Q}),(0,n.jsx)(s.Z,{type:"bedNumber",label:"침대번호",text:(null==C?void 0:C.information.residentDormitoryInfoRes.bedNumber)?"".concat(null==C?void 0:C.information.residentDormitoryInfoRes.bedNumber,"번"):"",value:null==C?void 0:C.information.residentDormitoryInfoRes.bedNumber})]}),(0,n.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,n.jsx)(s.Z,{label:"거주기간",text:null==C?void 0:C.information.residentDormitoryInfoRes.termName,value:null==C?void 0:C.information.residentDormitoryInfoRes.termName}),(0,n.jsx)(s.Z,{label:"룸메이트 신청",text:(null==C?void 0:C.information.residentDormitoryInfoRes.isApplyRoommate)?"O":"X",value:null==C?void 0:C.information.residentDormitoryInfoRes.isApplyRoommate}),(0,n.jsx)(s.Z,{label:"인원 정보",text:(null==C?void 0:C.information.residentDormitoryInfoRes.roommateNames)&&(null==C?void 0:C.information.residentDormitoryInfoRes.roommateNames.join(" ")),value:(null==C?void 0:C.information.residentDormitoryInfoRes.roommateNames)&&(null==C?void 0:C.information.residentDormitoryInfoRes.roommateNames.join(" "))})]})]})]}),g&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"relative mt-16",children:(0,n.jsxs)("div",{className:"flex gap-13 absolute right-0 -top-8",children:[(0,n.jsx)(d,{label:"블랙리스트",onClick:()=>_(!0)}),(0,n.jsx)(m.Z,{label:"퇴사처리",onClick:()=>B(!0)})]})}),(0,n.jsx)("div",{className:"flex justify-center mt-9",children:(0,n.jsx)(a.Z,{label:"수정완료",disabled:!1,variant:"blue",onClick:()=>A(!0)})})]}),M&&(0,n.jsx)(b.Z,{isOpen:M,children:(0,n.jsx)(I.Z,{variant:"blue",label:"수정을 완료하시겠습니까?",onCancel:()=>{A(!1)},onConfirm:()=>{A(!1),G()}})}),T&&(0,n.jsx)(b.Z,{isOpen:T,children:(0,n.jsx)(I.Z,{variant:"blue",label:"블랙리스트로 추가하시겠습니까?",onCancel:()=>{_(!1)},onConfirm:()=>{_(!1),$()}})}),L&&(0,n.jsx)(b.Z,{isOpen:L,children:(0,n.jsx)(I.Z,{variant:"blue",label:"블랙리스트 페이지로 이동하시겠습니까?",onCancel:()=>{J(!1),l.push("/dashboard/students")},onConfirm:()=>{J(!1),l.push("/dashboard/students/blacklists")}})}),X&&(0,n.jsx)(b.Z,{isOpen:X,children:(0,n.jsx)(I.Z,{variant:"red",label:"퇴사처리를 하시겠습니까?",onCancel:()=>{B(!1)},onConfirm:()=>{B(!1),ee()}})}),H.isModal&&(0,n.jsx)(b.Z,{isOpen:H.isModal,children:(0,n.jsx)(I.Z,{variant:"red",label:"건물 변경시 호실 및 침대번호가 초기화 됩니다.\\n재배치 하시겠습니까?",onCancel:()=>{Y({isModal:!1,dormitoryId:0,dormitoryName:"",roomSize:0})},onConfirm:()=>{Y({isModal:!1,dormitoryId:0,dormitoryName:"",roomSize:0}),q("residentDormitoryInfoRes","dormitoryId",H.dormitoryId),q("residentDormitoryInfoRes","dormitoryName",H.dormitoryName),q("residentDormitoryInfoRes","roomSize",H.roomSize),q("residentDormitoryInfoRes","roomNumber",""),q("residentDormitoryInfoRes","bedNumber",""),q("residentDormitoryInfoRes","roommateNames","")}})}),F&&(0,n.jsx)(b.Z,{isOpen:F,children:(0,n.jsx)(R.Z,{variant:"red",label:"해당 호실에는 현재 빈 자리가 없습니다.",onConfirm:()=>{K(!1),q("residentDormitoryInfoRes","roomNumber",""),q("residentDormitoryInfoRes","bedNumber",""),q("residentDormitoryInfoRes","roommateNames","")}})})]})}},86716:function(e,o,t){"use strict";var n=t(57437);t(2265),o.Z=e=>{let{label:o,...t}=e;return(0,n.jsx)("button",{...t,className:"H4 w-118 h-31 rounded-8 text-white bg-red-red20 hover:bg-red-red30 hover:hover-transition active:bg-red-red40",children:o})}},48274:function(e,o,t){"use strict";t.d(o,{T:function(){return n},v:function(){return i}});let n={ENROLLMENT:"재학",LEAVE_OF_ABSENCE:"휴학",EXPULSION:"제적"},i={MALE:"남성",FEMALE:"여성"}},5154:function(e,o,t){"use strict";t.d(o,{J:function(){return a}});var n=t(46426),i=t(32153);let r=window.sessionStorage,{persistAtom:s}=(0,n.J)({key:"studentIdState",storage:r}),a=(0,i.cn)({key:"studentIdState",default:0,effects_UNSTABLE:[s]})}},function(e){e.O(0,[691,703,4898,1252,4817,2022,5275,2971,8069,1744],function(){return e(e.s=16033)}),_N_E=e.O()}]);