(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9211],{53691:function(e,t,r){Promise.resolve().then(r.bind(r,73589))},73589:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var o,i=r(57437),s=r(2265),n=r(94769),a=r(48871),d=r(91723),m=r(79517),l=r(47907),f=r(32153),y=r(91355),u=r(52846);function I(){return(I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var c=function(e){return u.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:40,height:40,fill:"none"},e),o||(o=u.createElement("path",{stroke:"#D83636",strokeLinecap:"round",strokeWidth:2.5,d:"m12.5 27.5 15-15M27.5 27.5l-15-15"})))},R=e=>{let{list:t,onCancel:r,onClick:o}=e;return(0,i.jsxs)("div",{className:"bg-white flex flex-col gap-19 p-16 rounded-20",children:[(0,i.jsxs)("div",{className:"bg-gray-grayscale5 w-517 py-18 rounded-4",children:[(0,i.jsx)("h1",{className:"H1 text-gray-grayscale50 text-center",children:"입사 신청 목록"}),(0,i.jsx)(c,{className:"absolute right-16 top-16",onClick:r})]}),(0,i.jsx)("div",{className:"bg-gray-grayscale5 w-517 p-11 rounded-4",children:t.map((e,t)=>(0,i.jsx)("div",{className:"px-5 py-8 H4-caption overflow-hidden whitespace-nowrap overflow-ellipsis",onClick:()=>o(e.availableTermRes),children:e.title},t))})]})},v=r(42825),b=r(25648),x=()=>{let e=(0,l.useRouter)(),t=(0,f.Zl)(y.jd),[r,o]=(0,s.useState)(!1),[u,I]=(0,s.useState)(!1),[c,x]=(0,s.useState)(!1),[p,h]=(0,s.useState)({copy:"",prioritySelectionCopy:""}),[P,N]=(0,s.useState)({copy:null,prioritySelectionCopy:null}),[g,j]=(0,s.useState)({isModal:!1,dormitoryId:0,dormitoryName:"",roomSize:0}),[D,S]=(0,s.useState)([]),[C,k]=(0,s.useState)(!1),[Z,E]=(0,s.useState)([]),[w,O]=(0,s.useState)([]),{data:z,error:M,isLoading:T}=(0,b.ml)(),[A,L]=(0,s.useState)({residentPrivateInfoRes:{residentId:0,name:"",studentNumber:"",major:"",schoolYear:null,schoolStatus:"",gender:"MALE",phoneNumber:"",address:"",copy:"",prioritySelectionCopy:"",mealTicketCount:null,isSmoking:!1,dormitoryPayment:!1,hasKey:!1,bonusPoint:0,minusPoint:0,personalInfoConsent:!1,thirdPartyConsent:!1,bankName:"",accountNumber:"",emergencyContact:"",emergencyRelation:""},residentDormitoryInfoRes:{dormitoryId:0,dormitoryName:"",roomSize:null,roomNumber:null,bedNumber:null,termId:0,termName:"",isApplyRoommate:!1,roommateNames:[""]}});(0,s.useEffect)(()=>{z&&E(z.information)},[z]);let Y=async(e,t)=>{if(!e.target.files||0===e.target.files.length){console.log("파일이 선택되지 않았습니다.");return}let r=e.target.files[0];if(r.size/1048576>15){alert("파일 용량은 15MB를 초과할 수 없습니다.");return}N(e=>({...e,[t]:r}));let o=r.name;h(e=>({...e,[t]:o}))},K=async e=>{X("residentDormitoryInfoRes","termId",e);let t=w.find(t=>t.termId===e);t&&X("residentDormitoryInfoRes","termName",t.termName);let r=await (0,b.oW)(A.residentPrivateInfoRes.gender,e);r.check&&S(r.information)},_=async()=>{let e=await (0,b.Af)(A.residentDormitoryInfoRes.dormitoryId,A.residentDormitoryInfoRes.roomSize,A.residentDormitoryInfoRes.roomNumber);e.check&&e.information.possible?(X("residentDormitoryInfoRes","bedNumber",e.information.bedNumber),X("residentDormitoryInfoRes","roommateNames",e.information.roommateNames)):x(!0)},X=(e,t,r)=>{L(o=>o?{...o,[e]:{...o.residentPrivateInfoRes,...o.residentDormitoryInfoRes,[t]:r}}:o)},F=async()=>{let r={name:A.residentPrivateInfoRes.name,gender:A.residentPrivateInfoRes.gender,hasKey:A.residentPrivateInfoRes.hasKey,residentDormitoryInfoReq:{dormitoryId:A.residentDormitoryInfoRes.dormitoryId,roomSize:A.residentDormitoryInfoRes.roomSize,roomNumber:A.residentDormitoryInfoRes.roomNumber,bedNumber:A.residentDormitoryInfoRes.bedNumber,termId:A.residentDormitoryInfoRes.termId}};await (0,b.SQ)(r),t(!1),e.push("/dashboard/students")};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex flex-col relative w-[1200px]",children:[(0,i.jsx)("h3",{className:"H3 text-gray-grayscale50 text-center mb-6 w-[1200px]",children:"사생 추가 상세 내용"}),(0,i.jsxs)("div",{className:"flex justify-between gap-100 border-t-1 border-t-gray-grayscale50 pt-31 px-46 h-590",children:[(0,i.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,i.jsx)(n.Z,{label:"이름",isEdit:!0,type:"string",maxLength:8,text:A.residentPrivateInfoRes.name,value:A.residentPrivateInfoRes.name,input:A.residentPrivateInfoRes.name,setInput:e=>X("residentPrivateInfoRes","name",e)}),(0,i.jsx)(n.Z,{label:"학번",isEdit:!0,type:"string",maxLength:12,text:A.residentPrivateInfoRes.studentNumber,value:A.residentPrivateInfoRes.studentNumber,input:A.residentPrivateInfoRes.studentNumber,setInput:e=>X("residentPrivateInfoRes","studentNumber",e)}),(0,i.jsx)(n.Z,{label:"학과",isEdit:!0,type:"string",text:A.residentPrivateInfoRes.major,value:A.residentPrivateInfoRes.major,input:A.residentPrivateInfoRes.major,setInput:e=>X("residentPrivateInfoRes","major",e)}),(0,i.jsx)(n.Z,{label:"학년",isEdit:!0,type:"string",text:(null==A?void 0:A.residentPrivateInfoRes.schoolYear)?"".concat(A.residentPrivateInfoRes.schoolYear,"학년"):"",value:A.residentPrivateInfoRes.schoolYear,input:A.residentPrivateInfoRes.schoolYear?A.residentPrivateInfoRes.schoolYear.toString():"",setInput:e=>X("residentPrivateInfoRes","schoolYear",e)}),(0,i.jsx)(n.Z,{label:"학적",isEdit:!0,type:"string",text:A.residentPrivateInfoRes.schoolStatus,value:A.residentPrivateInfoRes.schoolStatus,input:A.residentPrivateInfoRes.schoolStatus,setInput:e=>X("residentPrivateInfoRes","schoolStatus",e)}),(0,i.jsx)(n.Z,{label:"성별",isEdit:!0,type:"radio",text:A.residentPrivateInfoRes.gender,value:A.residentPrivateInfoRes.gender,setIsOn:e=>X("residentPrivateInfoRes","gender",e?"MALE":"FEMALE")}),(0,i.jsx)(n.Z,{label:"휴대전화",isEdit:!0,type:"string",text:A.residentPrivateInfoRes.phoneNumber,value:A.residentPrivateInfoRes.phoneNumber,input:A.residentPrivateInfoRes.phoneNumber,setInput:e=>X("residentPrivateInfoRes","phoneNumber",e)}),(0,i.jsx)(n.Z,{label:"본거주지",isEdit:!0,type:"string",text:A.residentPrivateInfoRes.address,value:A.residentPrivateInfoRes.address,input:A.residentPrivateInfoRes.address,setInput:e=>X("residentPrivateInfoRes","address",e)}),(0,i.jsx)(n.Z,{label:"등본",isEdit:!0,type:"file",text:p.copy,value:A.residentPrivateInfoRes.copy,handleFileChange:e=>Y(e,"copy")}),(0,i.jsx)(n.Z,{label:"우선선발",isEdit:!0,type:"file",text:p.prioritySelectionCopy,value:A.residentPrivateInfoRes.prioritySelectionCopy,handleFileChange:e=>Y(e,"prioritySelectionCopy")}),(0,i.jsx)(n.Z,{isEdit:!0,type:"string",label:"식수",text:A.residentPrivateInfoRes.mealTicketCount?"".concat(A.residentPrivateInfoRes.mealTicketCount,"식"):"",value:A.residentPrivateInfoRes.mealTicketCount,input:A.residentPrivateInfoRes.mealTicketCount?A.residentPrivateInfoRes.mealTicketCount.toString():"",setInput:e=>X("residentPrivateInfoRes","mealTicketCount",Number(e))})]}),(0,i.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,i.jsx)(n.Z,{isEdit:!0,right:!0,type:"checkbox",label:"흡연여부",text:A.residentPrivateInfoRes.isSmoking?"O":"X",value:A.residentPrivateInfoRes.isSmoking,setIsChecked:e=>X("residentPrivateInfoRes","isSmoking",e)}),(0,i.jsx)(n.Z,{isEdit:!0,right:!0,type:"checkbox",label:"생활관비 납부",text:A.residentPrivateInfoRes.dormitoryPayment?"O":"X",value:A.residentPrivateInfoRes.dormitoryPayment,setIsChecked:e=>X("residentPrivateInfoRes","dormitoryPayment",e)}),(0,i.jsx)(n.Z,{isEdit:!0,right:!0,label:"열쇠 수령 여부",type:"checkbox",text:A.residentPrivateInfoRes.hasKey?"수령":"미수령",value:A.residentPrivateInfoRes.hasKey,setIsChecked:e=>X("residentPrivateInfoRes","hasKey",e)}),(0,i.jsx)(n.Z,{right:!0,label:"상점",text:A.residentPrivateInfoRes.bonusPoint,value:A.residentPrivateInfoRes.bonusPoint}),(0,i.jsx)(n.Z,{right:!0,label:"벌점",text:A.residentPrivateInfoRes.minusPoint,value:A.residentPrivateInfoRes.minusPoint}),(0,i.jsx)(n.Z,{isEdit:!0,right:!0,label:"개인정보 동의",type:"checkbox",text:A.residentPrivateInfoRes.personalInfoConsent?"O":"X",value:A.residentPrivateInfoRes.personalInfoConsent,setIsChecked:e=>X("residentPrivateInfoRes","personalInfoConsent",e)}),(0,i.jsx)(n.Z,{isEdit:!0,right:!0,label:"제3자제공 동의",type:"checkbox",text:A.residentPrivateInfoRes.thirdPartyConsent?"O":"X",value:A.residentPrivateInfoRes.thirdPartyConsent,setIsChecked:e=>X("residentPrivateInfoRes","thirdPartyConsent",e)}),(0,i.jsx)(n.Z,{isEdit:!0,right:!0,type:"string",label:"은행명",text:A.residentPrivateInfoRes.bankName,value:A.residentPrivateInfoRes.bankName,input:A.residentPrivateInfoRes.bankName,setInput:e=>X("residentPrivateInfoRes","bankName",e)}),(0,i.jsx)(n.Z,{isEdit:!0,right:!0,type:"string",label:"계좌번호",text:A.residentPrivateInfoRes.accountNumber,value:A.residentPrivateInfoRes.accountNumber,input:A.residentPrivateInfoRes.accountNumber,setInput:e=>X("residentPrivateInfoRes","accountNumber",e)}),(0,i.jsx)(n.Z,{isEdit:!0,right:!0,type:"string",label:"비상연락처",text:A.residentPrivateInfoRes.emergencyContact,value:A.residentPrivateInfoRes.emergencyContact,input:A.residentPrivateInfoRes.emergencyContact,setInput:e=>X("residentPrivateInfoRes","emergencyContact",e)}),(0,i.jsx)(n.Z,{isEdit:!0,right:!0,type:"string",label:"비상연락처 관계",text:A.residentPrivateInfoRes.emergencyRelation,value:A.residentPrivateInfoRes.emergencyRelation,input:A.residentPrivateInfoRes.emergencyRelation,setInput:e=>X("residentPrivateInfoRes","emergencyRelation",e)})]})]}),(0,i.jsxs)("div",{className:"flex flex-col h-213 mt-29 pt-12 bg-gray-grayscale5",children:[(0,i.jsx)("h3",{className:"H3 text-gray-grayscale50 text-center mb-6 border-b-1 border-b-gray-grayscale50 pb-8",children:"기숙사 정보"}),(0,i.jsxs)("div",{className:"flex justify-between gap-100 h-136 px-46",children:[(0,i.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,i.jsx)(n.Z,{isEdit:!0,type:"building",isBuilding:r,setIsBuilding:o,list:D,dormInfo:{dormitoryId:A.residentDormitoryInfoRes.dormitoryId,dormitoryName:A.residentDormitoryInfoRes.dormitoryName,roomSize:A.residentDormitoryInfoRes.roomSize||0},handleSelectedDorm:e=>{j({isModal:!0,dormitoryId:e.dormitoryId,dormitoryName:e.dormitoryName,roomSize:e.roomSize})},label:"건물",text:A.residentDormitoryInfoRes.dormitoryName?A.residentDormitoryInfoRes.dormitoryName+(A.residentDormitoryInfoRes.roomSize?"("+A.residentDormitoryInfoRes.roomSize+"인실)":""):"",value:A.residentDormitoryInfoRes.dormitoryName}),(0,i.jsx)(n.Z,{isEdit:!0,readOnly:!A.residentDormitoryInfoRes.dormitoryName,type:"roomNumber",label:"호실",text:A.residentDormitoryInfoRes.roomNumber?"".concat(A.residentDormitoryInfoRes.roomNumber,"호"):"",value:A.residentDormitoryInfoRes.roomNumber,input:A.residentDormitoryInfoRes.roomNumber?A.residentDormitoryInfoRes.roomNumber.toString():"",setInput:e=>X("residentDormitoryInfoRes","roomNumber",e),handleRoomNumber:_}),(0,i.jsx)(n.Z,{type:"bedNumber",label:"침대번호",text:A.residentDormitoryInfoRes.bedNumber?"".concat(A.residentDormitoryInfoRes.bedNumber,"번"):"",value:A.residentDormitoryInfoRes.bedNumber})]}),(0,i.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,i.jsx)(n.Z,{isEdit:!0,type:"termName",label:"거주기간",text:A.residentDormitoryInfoRes.termName,availableTermRes:w,handleTermList:()=>k(!0),handleTerm:K}),(0,i.jsx)(n.Z,{label:"룸메이트 신청",text:A.residentDormitoryInfoRes.isApplyRoommate?"O":"X",value:A.residentDormitoryInfoRes.isApplyRoommate}),(0,i.jsx)(n.Z,{label:"인원 정보",text:A.residentDormitoryInfoRes.roommateNames&&A.residentDormitoryInfoRes.roommateNames.join(" "),value:A.residentDormitoryInfoRes.roommateNames&&A.residentDormitoryInfoRes.roommateNames.join(" ")})]})]})]}),(0,i.jsx)("div",{className:"flex justify-center mt-25",children:(0,i.jsx)(a.Z,{label:"생성하기",disabled:!A.residentPrivateInfoRes.name||!A.residentPrivateInfoRes.gender||!A.residentDormitoryInfoRes.termName||!A.residentDormitoryInfoRes.dormitoryId||!A.residentDormitoryInfoRes.dormitoryName,variant:"blue",onClick:()=>{I(!0)}})})]}),u&&(0,i.jsx)(m.Z,{isOpen:u,children:(0,i.jsx)(d.Z,{variant:"blue",label:"생성을 완료하시겠습니까?",onCancel:()=>{I(!1)},onConfirm:()=>{I(!1),F()}})}),C&&(0,i.jsx)(m.Z,{isOpen:C,children:(0,i.jsx)(R,{list:Z,onCancel:()=>{k(!1)},onClick:e=>{k(!1),O(e)}})}),g.isModal&&(0,i.jsx)(m.Z,{isOpen:g.isModal,children:(0,i.jsx)(d.Z,{variant:"red",label:"건물 변경시 호실 및 침대번호가 초기화 됩니다.\\n재배치 하시겠습니까?",onCancel:()=>{j({isModal:!1,dormitoryId:0,dormitoryName:"",roomSize:0})},onConfirm:()=>{j({isModal:!1,dormitoryId:0,dormitoryName:"",roomSize:0}),X("residentDormitoryInfoRes","dormitoryId",g.dormitoryId),X("residentDormitoryInfoRes","dormitoryName",g.dormitoryName),X("residentDormitoryInfoRes","roomSize",g.roomSize),X("residentDormitoryInfoRes","roomNumber",""),X("residentDormitoryInfoRes","bedNumber",""),X("residentDormitoryInfoRes","roommateNames","")}})}),c&&(0,i.jsx)(m.Z,{isOpen:c,children:(0,i.jsx)(v.Z,{variant:"red",label:"해당 호실에는 현재 빈 자리가 없습니다.",onConfirm:()=>{x(!1),X("residentDormitoryInfoRes","roomNumber",""),X("residentDormitoryInfoRes","bedNumber",""),X("residentDormitoryInfoRes","roommateNames","")}})})]})}}},function(e){e.O(0,[691,4898,703,1252,4817,2022,5275,2971,8069,1744],function(){return e(e.s=53691)}),_N_E=e.O()}]);