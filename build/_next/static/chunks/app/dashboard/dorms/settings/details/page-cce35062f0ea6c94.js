(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5227,5776],{67176:function(e,t,r){"use strict";var a,l=r(52846);function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}t.Z=function(e){return l.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",width:14,height:14,fill:"none"},e),a||(a=l.createElement("path",{stroke:"#D83636",strokeLinecap:"round",strokeWidth:2,d:"M1 13 13 1M13 13 1 1"})))}},2455:function(e,t,r){"use strict";var a,l=r(52846);function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}t.Z=function(e){return l.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},e),a||(a=l.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:2.25,d:"M1.5 12h21M12 1.5v21"})))}},55100:function(e,t,r){Promise.resolve().then(r.bind(r,27245))},46426:function(e,t){"use strict";t.J=void 0,t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};let{key:t="recoil-persist",storage:r=localStorage,converter:a=JSON}=e,l=(e,t,r,a)=>{a?delete t[r]:t[r]=e,o(t)},n=()=>{let e=r.getItem(t);return null==e?{}:"string"==typeof e?s(e):"function"==typeof e.then?e.then(s):{}},s=e=>{if(void 0===e)return{};try{return a.parse(e)}catch(e){return console.error(e),{}}},o=e=>{try{"function"==typeof r.mergeItem?r.mergeItem(t,a.stringify(e)):r.setItem(t,a.stringify(e))}catch(e){console.error(e)}};return{persistAtom:({onSet:e,node:t,trigger:r,setSelf:a})=>{if("get"===r){let e=n();"function"==typeof e.then&&e.then(e=>{e.hasOwnProperty(t.key)&&a(e[t.key])}),e.hasOwnProperty(t.key)&&a(e[t.key])}e(async(e,r,a)=>{let s=n();"function"==typeof s.then?s.then(r=>l(e,r,t.key,a)):l(e,s,t.key,a)})}}}},27245:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Z}});var a=r(57437),l=r(90121),n=r(38751),s=r(2265),o=r(2455),i=e=>{let{...t}=e;return(0,a.jsxs)("button",{...t,title:"새로 만들기",className:"group flex flex-col justify-center items-center w-142 h-76 rounded-full bg-transparent hover:bg-gray-grayscale5 hover:hover-transition active:bg-gray-grayscale10",children:[(0,a.jsx)("div",{className:"flex justify-center items-center w-33 h-33 rounded-3 bg-gray-grayscale20 group-active:bg-gray-grayscale30",children:(0,a.jsx)(o.Z,{className:"text-white group-hover:text-gray-grayscale5 group-hover:hover-transition group-active:text-gray-grayscale10"})}),(0,a.jsx)("h2",{className:"caption-2 mt-5 text-gray-grayscale40",children:"층 추가"})]})},c=r(95407),u=r(48871),d=r(31371),g=r(60621),b=e=>{let{label:t,detail:r,selected:l=!1,done:n,disabled:s,...o}=e;return(0,a.jsx)("button",{...o,disabled:s,className:"H4 rounded-8 ".concat(r?"w-80 h-34":"w-143 h-42"," ").concat(l?"text-white bg-blue-blue30":n?"text-gray-grayscale40 bg-gray-grayscale5 border-2 border-blue-blue30":s?"text-gray-grayscale30 bg-gray-grayscale5":"text-gray-grayscale30 bg-gray-grayscale5 hover:text-blue-blue10 hover:bg-blue-blue20 hover:hover-transition hover:hover-transition active:text-white active:bg-blue-blue30","\n"),children:t})},h=r(67176),m=r(94770),x=e=>{let{selected:t=!1,hovered:r=!1,floorInput:l,setFloorInput:n,startInput:s,setStartInput:o,endInput:i,setEndInput:c,isOne:u,pressOkBtn:g,deleteDetailRoom:b,readOnly:x,handleCreate:f,handleDuplicate:v,duplicateDisabled:y,...p}=e;return(0,a.jsxs)("div",{...p,className:"group flex justify-between items-center w-403 h-52 rounded-r-8 rounded-l-50 ".concat(u?"":r?"bg-gray-grayscale5":"hover:bg-gray-grayscale5 hover:hover-transition"," ").concat(x&&"cursor-pointer"," "),children:[(0,a.jsx)("div",{onClick:e=>{e.stopPropagation(),b()},children:(0,a.jsx)(h.Z,{className:"ml-21 opacity-0 ".concat(u?"":r?"opacity-100 cursor-pointer":"group-hover:opacity-100 group-hover:hover-transition")})}),(0,a.jsxs)("div",{className:"flex items-center ".concat(t&&"bg-blue-blue15 py-9 px-14 rounded-8"," ").concat(!u&&"hover:bg-gray-grayscale5 hover:hover-transition"),children:[(0,a.jsx)(m.Z,{input:l,setInput:n,placeholder:"층",type:"textBox7",readOnly:x[0],maxLength:2}),(0,a.jsx)("h5",{className:"Caption2 text-gray-grayscale50 ml-4 mr-17",children:"층"}),(0,a.jsx)(m.Z,{input:s,setInput:o,placeholder:"시작",type:"textBox7",readOnly:x[1],maxLength:2}),(0,a.jsx)("h5",{className:"Caption2 text-gray-grayscale50 mx-6",children:"-"}),(0,a.jsx)(m.Z,{input:i,setInput:c,placeholder:"끝",type:"textBox7",readOnly:x[2],maxLength:2}),(0,a.jsx)("div",{className:"w-22"}),g?(0,a.jsx)(d.Z,{label:"복제",disabled:y||!1,selected:!1,variant:"blue",onClick:e=>{e.stopPropagation(),v&&v()}}):(0,a.jsx)(d.Z,{label:u?"확인":"추가",disabled:""===l||""===s||""===i||Number(s)>Number(i),selected:!1,variant:"blue",onClick:e=>{e.stopPropagation(),f&&f()}})]}),(0,a.jsx)("div",{})]})},f=r(40801),v={src:"/_next/static/media/BuildingTextIcon.f2783d9a.png",height:26,width:26,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEU0NDRMaXEwMDBFRUUxMTEzMzM0NDQwMDAwMDAwMDA0NDQzMzMyMjKRQ+wNAAAADXRSTlP+AIEDLuf1okZgxBSOr0Gx4QAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUeJwVx8ERwDAIwDAbUkjS7j9vj5dOaPpWi+k+wUe6HnYEI7VkJJRLEabUPJXuM/oDHeYAwichZ34AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},y=r(20703),p=e=>{let{placeholder:t,input:r,setInput:l,handleDormitoryName:n,readOnly:s}=e;return(0,a.jsxs)("div",{className:"flex items-end",children:[(0,a.jsx)("input",{className:"".concat(r?"border-b-gray-grayscale50 ":"border-b-gray-grayscale20"," H0 focus:border-b-gray-grayscale50 w-507 h-60 ").concat(!s&&"border-b-1"," placeholder:text-gray-grayscale30 text-center focus:outline-none pb-6 text-gray-grayscale50 "),placeholder:t,type:"text",value:r,onChange:e=>{e.target.value.length>f.jF.name.maxLength&&(e.target.value=e.target.value.slice(0,f.jF.name.maxLength)),l(e.target.value)},onBlur:n,onKeyDown:e=>{"Enter"===e.key&&n()},readOnly:s,spellCheck:!1}),!s&&(0,a.jsx)(y.default,{src:v,width:25,height:25,className:"object-contain mb-5",alt:"BuildingTextIcon"})]})},A=r(79517),j=r(42825),w=r(85776),N=e=>{let{isChecked:t,handleCheckboxChange:r,item:l,isEdit:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("tr",{className:"table rounded-5 w-[917px] H4-caption h-38 text-nowrap align-middle cursor-pointer ".concat(!l.hasResident&&"hover:bg-gray-grayscale10 active:bg-gray-grayscale20"),children:[(0,a.jsx)("td",{className:"w-[10%]",children:l.roomNumber}),(0,a.jsx)("td",{className:"".concat(n?"w-[19%]":"w-[27%]"),children:null===l.roomSize?"-":l.roomSize+"인실"}),(0,a.jsx)("td",{className:"".concat(n?"w-[17%]":"w-[18%]"),children:"MALE"===l.gender?"남":"FEMALE"===l.gender?"여":"-"}),(0,a.jsx)("td",{className:"".concat(n?"w-[22%]":"w-[35%]"),children:!0===l.hasKey?"수령":!1===l.hasKey?"미수령":"-"}),(0,a.jsx)("td",{className:"".concat(n?"w-[22%]":"w-[10%]"),children:!0===l.isActivated?"O":!1===l.isActivated?"X":"-"}),n&&(0,a.jsx)("td",{className:"w-[10%]",children:(0,a.jsx)("div",{className:"flex justify-center items-center",children:(0,a.jsx)(w.default,{isChecked:t,setIsChecked:()=>r(Number(l.roomNumber)),disabled:l.hasResident||!1})})})]}),(0,a.jsx)("tr",{className:"h-10"})]})},k=e=>{let{checkedItems:t,handleCheckboxChange:r,list:l,isEdit:n}=e;return(0,a.jsxs)("table",{className:"text-nowrap text-center text-gray-grayscale50",children:[(0,a.jsxs)("thead",{className:"table w-[917px]",children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"H4 w-[10%]",children:"호 실"}),(0,a.jsx)("th",{className:"H4 ".concat(n?"w-[19%]":"w-[27%]"),children:"인 실"}),(0,a.jsx)("th",{className:"H4 ".concat(n?"w-[17%]":"w-[18%]"),children:"성 별"}),(0,a.jsx)("th",{className:"H4 ".concat(n?"w-[22%]":"w-[35%]"),children:"열쇠 수령 여부"}),(0,a.jsx)("th",{className:"H4 ".concat(n?"w-[22%]":"w-[10%]"),children:"활성화"}),n&&(0,a.jsx)("th",{className:"H4 w-[10%]",children:(0,a.jsxs)("div",{className:"flex items-center justify-center text-center w-full gap-6",children:["전 체",(0,a.jsx)(w.default,{isChecked:l.length>0&&t.length===l.length-l.filter(e=>e.hasResident).length,setIsChecked:e=>{e?l.forEach(e=>{t.includes(Number(e.roomNumber))||e.hasResident||r(Number(e.roomNumber))}):l.forEach(e=>{t.includes(Number(e.roomNumber))&&!e.hasResident&&r(Number(e.roomNumber))})},disabled:l.every(e=>e.hasResident)})]})})]}),(0,a.jsx)("tr",{className:"h-15 border-b-1"})]}),(0,a.jsxs)("tbody",{className:"block w-[931px] overflow-y-auto scrollbar-table ".concat(n?"h-540":"h-690"),children:[(0,a.jsx)("tr",{className:"h-10"}),l.map((e,l)=>(0,a.jsx)(N,{isChecked:t.includes(Number(e.roomNumber)),handleCheckboxChange:r,item:e,isEdit:n},l))]})]})},C=r(43721),R=r(32153),S=r(91355),E=r(91723),Z=()=>{let e=(0,s.useRef)(null),t=(0,R.sJ)(C.S),{data:r,error:o,mutate:h}=(0,l.Pl)(t),[m,f]=(0,s.useState)({id:t,name:"",imageUrl:null,floorAndRoomNumberRes:[]}),[v,y]=(0,s.useState)(""),[w,N]=(0,s.useState)([]),[Z,O]=(0,s.useState)([]),[I,U]=(0,s.useState)([]),[B,M]=(0,s.useState)([]),[L,D]=(0,s.useState)(0),[H,z]=(0,s.useState)(0),[F,J]=(0,s.useState)([]),[K,V]=(0,s.useState)([]),{data:Q,error:T,mutate:W}=(0,l.sY)(t,L),[P,G]=(0,s.useState)(),[X,Y]=(0,s.useState)({}),[_,q]=(0,s.useState)(!1),[$,ee]=(0,s.useState)(!1),[et,er]=(0,s.useState)(!1),[ea,el]=(0,s.useState)({index:0,isDuplicate:!1}),[en,es]=(0,s.useState)(!1),[eo,ei]=(0,s.useState)(!1),ec=(0,R.Zl)(S.jd),[eu,ed]=(0,s.useState)(!0),[eg,eb]=(0,s.useState)(null),[eh,em]=(0,s.useState)(!1),[ex,ef]=(0,s.useState)(!1),[ev,ey]=(0,s.useState)(!1),[ep,eA]=(0,s.useState)(!1);(0,s.useEffect)(()=>{ec(!0)},[ec]),(0,s.useEffect)(()=>{r&&r.information&&(f(r.information),y(r.information.name),r.information.floorAndRoomNumberRes.length>0?(ep||(ec(!1),ed(!1)),0===L&&D(Number(r.information.floorAndRoomNumberRes[0].floor)),Z&&N(r.information.floorAndRoomNumberRes.concat(Z).sort((e,t)=>Number(e.floor)-Number(t.floor)))):0===Z.length&&void 0===X[L]?(N([]),D(0),U([{floor:"",startRoomNumber:1,endRoomNumber:""}])):N(Z),eA(!0))},[r,Z,L,ep,X,ec]),(0,s.useEffect)(()=>{if(Q&&Q.information){if(Q.information.length>0){if(G(Q.information),Q.information.length>0){var e,t,r,a;let l=[];(null===(e=Q.information)||void 0===e?void 0:e.some(e=>null===e.gender))||l.push(1),(null===(t=Q.information)||void 0===t?void 0:t.some(e=>null===e.roomSize))||l.push(2),(null===(r=Q.information)||void 0===r?void 0:r.some(e=>null===e.hasKey))||l.push(3),(null===(a=Q.information)||void 0===a?void 0:a.some(e=>null===e.isActivated))||l.push(4),J(l)}}else G(X[L]),J([])}},[Q,X,L]);let ej=e=>{V(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},ew=(e,t,r,a)=>{a?M(a=>{let l=[...a];return l[e]={...l[e],[t]:r},l}):U(a=>{let l=[...a];return l[e]={...l[e],[t]:r},l})},eN=()=>{var t;null===(t=e.current)||void 0===t||t.click()},ek=async e=>{if(!e.target.files||0===e.target.files.length){console.log("파일이 선택되지 않았습니다.");return}let r=e.target.files[0],a=URL.createObjectURL(r);(await (0,l.vh)(t,r)).check&&f(e=>({...e,imageUrl:a}))},eC=async(e,r,a)=>{if(m.floorAndRoomNumberRes.find(e=>e.floor===r))el({index:a,isDuplicate:!0}),er(!0);else try{await (0,l.T_)(t,e,r),M(e=>e.filter((e,t)=>t!==a)),D(r),await h()}catch(e){console.error(e),console.log("오류가 발생했습니다.")}},eR=async(e,t,r,a)=>{if(w.find(t=>t.floor===e))el({index:a,isDuplicate:!1}),er(!0);else{let l=Array.from({length:r-t+1},(r,a)=>({roomNumber:Number("".concat(e).concat(String(t+a).padStart(2,"0"))),floor:e,gender:null,roomSize:null,hasKey:null,isActivated:null}));Y(t=>({...t,[e]:l})),O(a=>[...a,{floor:e,startRoomNumber:t,endRoomNumber:r}]),U(e=>e.filter((e,t)=>t!==a)),D(e)}},eS=async e=>{try{(await (0,l.GX)(t,e)).check?(e===L&&D(0),await h(),ef(!1)):(ef(!1),em(!0))}catch(e){console.error(e),console.log("오류가 발생했습니다.")}},eE=async()=>{if(""===v)ee(!0);else if(m.name!==v)try{(await (0,l.JK)(t,v)).check?await h():q(!0)}catch(e){console.error(e),console.log("오류가 발생했습니다.")}},eZ=(e,t)=>{P&&(es(!0),G(P.map(r=>{if(K.includes(Number(r.roomNumber)))switch(e){case"gender":return{...r,gender:t};case"roomSize":return{...r,roomSize:t};case"hasKey":return{...r,hasKey:t};case"isActivated":return{...r,isActivated:t}}return r})),V([]))},eO=async()=>{if(!P)return;let e=P.map(e=>{let{floor:t,...r}=e;return{...r}});await (0,l.LJ)(t,L,e),O(e=>e.filter(e=>e.floor!==L)),await h(),await W(),Y(e=>{let t={...e};return delete t[L],t}),z(0),V([]),es(!1)},eI=async()=>{if(!P)return;let e=P.map(e=>{let{id:t,floor:r,roomNumber:a,hasResident:l,...n}=e;return{roomId:t,...n}});await (0,l.KH)(t,L,e),await h(),await W(),z(0),V([]),es(!1)};return(0,a.jsx)(a.Fragment,{children:ep&&(0,a.jsxs)("div",{className:"flex flex-col relative w-[1331px]",children:[(0,a.jsx)("div",{className:"flex justify-center w-full mb-30",children:(0,a.jsx)(p,{placeholder:"건물명",input:v,setInput:y,handleDormitoryName:eE,readOnly:!eu})}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center min-w-410 mr-20",children:[(0,a.jsxs)("div",{className:"w-381 h-241 flex items-center justify-center bg-gray-grayscale5 rounded-8",children:[m.imageUrl?(0,a.jsx)(g.Z,{image:m.imageUrl,name:m.imageUrl,onClick:eN}):(0,a.jsx)(n.Z,{onClick:eN}),(0,a.jsx)("input",{id:"fileInput",type:"file",accept:"image/*",style:{display:"none",visibility:"hidden"},ref:e,onChange:ek})]}),(0,a.jsxs)("div",{className:"mt-28 flex flex-col items-center",children:[(0,a.jsx)("h3",{className:"H3 text-gray-grayscale50 text-center",children:"호실 개수"}),(0,a.jsx)("hr",{className:"w-331 border-gray-grayscale50 mt-15 mb-8"}),(0,a.jsx)("div",{className:"".concat(eu?"max-h-320":"max-h-380"," w-410 overflow-y-auto scrollbar-table mb-13 mr-20"),children:(0,a.jsx)("div",{className:"".concat(eu?"gap-12 mr-5":"gap-10 items-center ml-20"," flex flex-col"),children:eu?(0,a.jsxs)(a.Fragment,{children:[w.map((e,t)=>{var r,l,n;return(0,a.jsx)(x,{selected:L===e.floor,floorInput:(null===(r=e.floor)||void 0===r?void 0:r.toString())||"",setFloorInput:e=>{ew(t,"floor",e,!1)},startInput:(null===(l=e.startRoomNumber)||void 0===l?void 0:l.toString())||"",setStartInput:e=>{ew(t,"startRoomNumber",e,!1)},endInput:(null===(n=e.endRoomNumber)||void 0===n?void 0:n.toString())||"",setEndInput:e=>{ew(t,"endRoomNumber",e,!1)},isOne:!1,pressOkBtn:!0,hovered:!1,deleteDetailRoom:()=>{Z.some(t=>t.floor===e.floor)&&(e.floor===L&&D(0),O(t=>t.filter(t=>t.floor!==e.floor)),Y(t=>{let r={...t};return delete r[Number(e.floor)],r})),m.floorAndRoomNumberRes.some(t=>t.floor===e.floor)&&(ef(!0),eb(Number(e.floor)))},onClick:()=>{en&&L!==e.floor?(ei(!0),eb(Number(e.floor))):(z(0),D(Number(e.floor)))},readOnly:[!0,!0,!0],handleDuplicate:()=>M([...B,{duplicateFloor:Number(e.floor),floor:"",startRoomNumber:Number(e.startRoomNumber),endRoomNumber:Number(e.endRoomNumber)}]),duplicateDisabled:!m.floorAndRoomNumberRes.some(t=>t.floor===e.floor)},t)}),B.map((e,t)=>{var r,l,n;return(0,a.jsx)(x,{floorInput:(null===(r=e.floor)||void 0===r?void 0:r.toString())||"",setFloorInput:e=>{ew(t,"floor",e,!0)},startInput:(null===(l=e.startRoomNumber)||void 0===l?void 0:l.toString())||"",setStartInput:e=>{ew(t,"startRoomNumber",e,!0)},endInput:(null===(n=e.endRoomNumber)||void 0===n?void 0:n.toString())||"",setEndInput:e=>{ew(t,"endRoomNumber",e,!0)},isOne:!1,pressOkBtn:!1,hovered:!0,deleteDetailRoom:()=>{M(e=>e.filter((e,r)=>r!==t))},readOnly:[!1,!0,!0],handleCreate:()=>{eC(Number(e.duplicateFloor),Number(e.floor),t)}},t)}),I.map((e,t)=>{var r,l,n;return(0,a.jsx)(x,{floorInput:(null===(r=e.floor)||void 0===r?void 0:r.toString())||"",setFloorInput:e=>{ew(t,"floor",e,!1)},startInput:(null===(l=e.startRoomNumber)||void 0===l?void 0:l.toString())||"",setStartInput:e=>{ew(t,"startRoomNumber",e,!1)},endInput:(null===(n=e.endRoomNumber)||void 0===n?void 0:n.toString())||"",setEndInput:e=>{ew(t,"endRoomNumber",e,!1)},isOne:0===w.length&&0===t,pressOkBtn:!1,hovered:0!==w.length||0!==t,deleteDetailRoom:()=>{U(e=>e.filter((e,r)=>r!==t))},readOnly:[!1,!1,!1],handleCreate:()=>{eR(Number(e.floor),Number(e.startRoomNumber),Number(e.endRoomNumber),t)}},t)})]}):m.floorAndRoomNumberRes.map((e,t)=>(0,a.jsxs)("div",{className:"flex justify-between items-center pl-67 pr-72 rounded-5 w-331 h-38 cursor-pointer ".concat(L===e.floor&&"bg-gray-grayscale10"),onClick:()=>D(Number(e.floor)),children:[(0,a.jsxs)("span",{className:"H4 text-gray-grayscale50",children:[e.floor,"층"]}),(0,a.jsxs)("span",{className:"H4 text-gray-grayscale50",children:[e.startRoomNumber," - ",e.endRoomNumber]})]},t))})}),eu&&(0,a.jsx)(i,{onClick:()=>U([...I,{floor:"",startRoomNumber:1,endRoomNumber:""}])})]})]}),(0,a.jsxs)("div",{children:[eu&&(0,a.jsxs)("div",{className:"w-917 h-121 shadow2 rounded-7 bg-white items-center flex justify-between pl-40 pr-23 px-13 mb-30",children:[(0,a.jsx)("h1",{className:"H1 text-blue-blue30",children:"필터"}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex gap-22",children:[(0,a.jsx)(b,{label:"남자/여자",detail:!1,selected:1===H,done:F.includes(1)||P&&P.length>0&&!(null==P?void 0:P.some(e=>null===e.gender)),disabled:0===L,onClick:()=>z(1)}),(0,a.jsx)(b,{label:"호실 타입",detail:!1,selected:2===H,done:F.includes(2)||P&&P.length>0&&!(null==P?void 0:P.some(e=>null===e.roomSize)),disabled:0===L,onClick:()=>z(2)}),(0,a.jsx)(b,{label:"열쇠 수령 여부",detail:!1,selected:3===H,done:F.includes(3)||P&&P.length>0&&!(null==P?void 0:P.some(e=>null===e.hasKey)),disabled:0===L,onClick:()=>z(3)}),(0,a.jsx)(b,{label:"비활성화",detail:!1,selected:4===H,done:F.includes(4)||P&&P.length>0&&!(null==P?void 0:P.some(e=>null===e.isActivated)),disabled:0===L,onClick:()=>z(4)})]}),(0,a.jsx)("div",{className:"h-53 flex gap-15 justify-end items-end",children:1===H?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{label:"남자",detail:!0,onClick:()=>eZ("gender","MALE")}),(0,a.jsx)(b,{label:"여자",detail:!0,onClick:()=>eZ("gender","FEMALE")})]}):2===H?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{label:"1인실",detail:!0,onClick:()=>eZ("roomSize",1)}),(0,a.jsx)(b,{label:"2인실",detail:!0,onClick:()=>eZ("roomSize",2)}),(0,a.jsx)(b,{label:"3인실",detail:!0,onClick:()=>eZ("roomSize",3)}),(0,a.jsx)(b,{label:"4인실",detail:!0,onClick:()=>eZ("roomSize",4)}),(0,a.jsx)(b,{label:"5인실",detail:!0,onClick:()=>eZ("roomSize",5)}),(0,a.jsx)(b,{label:"6인실",detail:!0,onClick:()=>eZ("roomSize",6)})]}):3===H?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{label:"수령",detail:!0,onClick:()=>eZ("hasKey",!0)}),(0,a.jsx)(b,{label:"미수령",detail:!0,onClick:()=>eZ("hasKey",!1)})]}):4===H?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{label:"활성화",disabled:!1,variant:"green",onClick:()=>eZ("isActivated",!0)}),(0,a.jsx)(c.Z,{label:"비활성화",disabled:!1,variant:"red",onClick:()=>eZ("isActivated",!1)})]}):(0,a.jsx)(a.Fragment,{})})]})]}),(0,a.jsx)(k,{list:P||[],checkedItems:K,handleCheckboxChange:e=>{0!==H&&(es(!0),ej(e))},isEdit:eu})]})]}),(0,a.jsxs)("div",{className:"flex mt-21",children:[(0,a.jsx)("div",{className:"flex-1"}),(0,a.jsx)("div",{className:"flex-1 flex justify-center",children:(0,a.jsx)(u.Z,{label:eu?"완료":"수정",disabled:!!eu&&0===m.floorAndRoomNumberRes.length,variant:"blue",onClick:()=>{eu?Z.length>0?ey(!0):(ec(!1),ed(!1)):(ec(!0),ed(!0))}})}),(0,a.jsx)("div",{className:"flex-1 flex justify-end",children:H?(0,a.jsx)(d.Z,{label:"저장",disabled:!!P&&((null==P?void 0:P.some(e=>null===e.gender))||(null==P?void 0:P.some(e=>null===e.roomSize))||(null==P?void 0:P.some(e=>null===e.hasKey))||(null==P?void 0:P.some(e=>null===e.isActivated))),variant:"blue",selected:!1,onClick:()=>{Z.some(e=>e.floor===L)?eO():eI()}}):(0,a.jsx)(a.Fragment,{})})]}),_&&(0,a.jsx)(A.Z,{isOpen:_,children:(0,a.jsx)(j.Z,{variant:"blue",label:"이미 등록되어 있는 건물명입니다.\n다른 이름을 사용해 주세요.",onConfirm:()=>{q(!1)}})}),$&&(0,a.jsx)(A.Z,{isOpen:$,children:(0,a.jsx)(j.Z,{variant:"blue",label:"건물명을 입력하여 주시기 바랍니다.",onConfirm:()=>{ee(!1)}})}),et&&(0,a.jsx)(A.Z,{isOpen:et,children:(0,a.jsx)(j.Z,{variant:"blue",label:"중복된 층 수의 입력은 불가능합니다.",onConfirm:()=>{ea.isDuplicate?M(e=>{let t=[...e];return t[ea.index]={...t[ea.index],floor:""},t}):U(e=>{let t=[...e];return t[ea.index]={...t[ea.index],floor:""},t}),er(!1)}})}),eo&&(0,a.jsx)(A.Z,{isOpen:eo,children:(0,a.jsx)(E.Z,{variant:"red",label:"작성중인 내용이 저장되지 않을 수 있습니다.",onCancel:()=>{es(!1),eg&&D(eg),z(0),V([]),ei(!1)},onConfirm:()=>ei(!1),textLeft:"나가기",textRight:"취소"})}),ex&&(0,a.jsx)(A.Z,{isOpen:ex,children:(0,a.jsx)(E.Z,{variant:"red",label:"층을 삭제하면 적용된 필터도 함께 삭제됩니다.\\n층을 삭제하시겠습니까?",onCancel:()=>{ef(!1),eb(null)},onConfirm:()=>{null!==eg&&eS(eg)}})}),eh&&(0,a.jsx)(A.Z,{isOpen:eh,children:(0,a.jsx)(j.Z,{variant:"red",label:"해당 층에 배정된 학생이 있습니다.",onConfirm:()=>{em(!1),eb(null)}})}),ev&&(0,a.jsx)(A.Z,{isOpen:ev,children:(0,a.jsx)(E.Z,{variant:"red",label:"아직 저장하지 않은 층이 있습니다.\\n저장되지 않은 층을 삭제하시겠습니까?",onCancel:()=>{ey(!1)},onConfirm:()=>{O([]),Y({}),U([]),M([]),ey(!1),ec(!1),ed(!1)}})})]})})}},38751:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var a,l=r(57437);r(2265);var n=r(52846);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var o=function(e){return n.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:54,height:54,fill:"none"},e),a||(a=n.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:4.751,d:"M2.999 27h48M27 3v48"})))},i=e=>{let{...t}=e;return(0,l.jsxs)("button",{...t,className:"group flex flex-col justify-center items-center w-381 h-241 rounded-8 bg-gray-grayscale5 hover:hover-transition hover:bg-gray-grayscale10 active:bg-gray-grayscale20",children:[(0,l.jsx)("div",{className:"flex justify-center items-center w-102 h-102 rounded-full bg-gray-grayscale10 group-hover:hover-transition group-hover:bg-gray-grayscale20 group-active:bg-gray-grayscale30",children:(0,l.jsx)(o,{className:"text-gray-grayscale30 group-hover:text-gray-grayscale40 group-hover:hover-transition group-active:text-gray-grayscale50"})}),(0,l.jsx)("h2",{className:"H4 mt-21 w-142 py-5 rounded-full text-white bg-blue-blue30 group-hover:bg-blue-blue40 group-hover:hover-transition group-active:bg-blue-blue50",children:"건물 추가하기"})]})}},95407:function(e,t,r){"use strict";var a=r(57437);r(2265),t.Z=e=>{let{label:t,variant:r,disabled:l,selected:n=!1,...s}=e;return(0,a.jsx)("button",{...s,disabled:l,className:"H4 w-115 h-37 rounded-full text-white hover:hover-transition ".concat((()=>{switch(r){case"blue":return"".concat(n?"bg-blue-blue50":"bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50");case"green":return"".concat(n?"bg-green-green40":"bg-green-green20 disabled:bg-green-green10 hover:bg-green-green30 active:bg-green-green40");case"red":return"".concat(n?"bg-red-red40":"bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40");default:return""}})()),children:t})}},48871:function(e,t,r){"use strict";var a=r(57437);r(2265),t.Z=e=>{let{label:t,disabled:r,variant:l,selected:n=!1,...s}=e;return(0,a.jsx)("button",{...s,disabled:r,className:"w-133 h-42 rounded-8 hover:hover-transition ".concat((()=>{switch(l){case"blue":return"Btn-cap shadow2 text-white ".concat(n?"bg-blue-blue50":"bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50");case"green":return"Btn-cap shadow2 text-white ".concat(n?"bg-green-green40":"bg-green-green20 disabled:bg-green-green10 hover:bg-green-green30 active:bg-green-green40");case"red":return"Btn-cap shadow2 text-white ".concat(n?"bg-red-red40":"bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40");case"gray":return"H4 text-gray-grayscale50 ".concat(r?"disabled:text-gray-grayscale40 disabled:bg-transparent":n?"bg-gray-grayscale30":"bg-gray-grayscale10 hover:bg-gray-grayscale20 active:bg-gray-grayscale30");case"whiteblue":return"Btn-cap shadow2 ".concat(n?"bg-blue-blue30 border-blue-blue50 text-white":"text-blue-blue30 border-[1.5px] bg-white border-blue-blue30 disabled:text-blue-blue20 disabled:bg-white disabled:border-blue-blue20 hover:bg-blue-blue20 hover:border-blue-blue30 hover:text-blue-blue30 active:bg-blue-blue30 active:border-blue-blue50 active:text-white");case"white":return"".concat(r?"H4 disabled:text-gray-grayscale20 disabled:bg-transparent":n?"H4 text-gray-grayscale50 bg-gray-grayscale30":"H4 text-gray-grayscale40 hover:bg-gray-grayscale10 hover:text-gray-grayscale50 active:bg-gray-grayscale30");default:return""}})()),children:t})}},31371:function(e,t,r){"use strict";var a=r(57437);r(2265),t.Z=e=>{let{label:t,disabled:r,selected:l=!1,variant:n,...s}=e;return(0,a.jsx)("button",{...s,disabled:r,className:"H4 w-79 h-34 rounded-full text-white hover:hover-transition ".concat((e=>{switch(e){case"blue":return"".concat(l?"bg-blue-blue50":"bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50");case"red":return"".concat(l?"bg-red-red40":"bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40");default:return""}})(n)),children:t})}},60621:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var a,l=r(57437);r(2265);var n=r(52846);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var o=function(e){return n.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:49,height:44,fill:"none"},e),a||(a=n.createElement("path",{stroke:"#CCC",strokeLinecap:"round",strokeWidth:3.75,d:"M2 32.508 17.058 18.39a2.5 2.5 0 0 1 3.527.107L42.781 42M32 29.814l7.246-6.04a2.5 2.5 0 0 1 3.368.153L47 28.313M47 37V7a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v30a5 5 0 0 0 5 5h35a5 5 0 0 0 5-5ZM37 13.563a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"})))},i=r(20703),c=e=>{let{image:t,name:r,...a}=e;return(0,l.jsxs)("button",{...a,className:"group relative flex flex-col justify-center items-center w-381 h-247 rounded-8",children:[t&&(0,l.jsx)(i.default,{className:"group-hover:brightness-50 shadow1 rounded-8 group-hover:hover-transition",src:t,alt:"",fill:!0,priority:!0,style:{objectFit:"cover"}}),(0,l.jsxs)("div",{className:"absolute inset-0 z-10 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100",children:[(0,l.jsx)(o,{}),(0,l.jsx)("div",{className:"flex items-center justify-center caption-2 mt-13 w-93 h-24 bg-gray-grayscale20 text-gray-grayscale40 rounded-full",children:"이미지 수정"})]})]})}},85776:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var a=r(57437);r(2265);var l={src:"/_next/static/media/Checked.2a02f83f.png",height:40,width:39,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEU3e941eNg2eNg2edo2e942dtU0ddI2edo3eNk5gOaHhQcyAAAACXRSTlP+/dqx7UQiy4HaUf1QAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMUlEQVR4nB3FyQ3AQAjAQJtjCf03HAk/xmRcyQKH6GaLw+YbsL98s0L1i1Wg6h6CEj8a4AC53DY/oQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},n={src:"/_next/static/media/UnChecked.bea25168.png",height:39,width:39,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVERERMaXFVVVU/Pz9mZmZ/f39VVVV1Ch9XAAAAB3RSTlN1AAMEBQQGqDJaiQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACRJREFUeJxjYIADFiYmJiY2BgYGJkZGRkZm/AxWRiYmRhaEZgAKMwBG4KHziQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},s={src:"/_next/static/media/UnCheckedDisabled.105ea371.png",height:20,width:20,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEWXl5dMaXGXl5eXl5eZmZmWlpYKWh59AAAABnRSTlNyAGQUKEJCqE61AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nGNggAAmBgZGEGAmksEMAiwMDExgwMAKAAm6AFkqiqFdAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},o=r(20703),i=e=>{let{isChecked:t,setIsChecked:r,disabled:i}=e;return(0,a.jsx)(o.default,{className:"".concat(i?"cursor-default":"cursor-pointer"),src:t?l:i?s:n,alt:t?"Checked":i?"UnChecked":"UnCheckedDisabled",width:19.5,height:19.5,onClick:e=>{i||(e.stopPropagation(),r(!t))}})}},94770:function(e,t,r){"use strict";var a=r(57437);t.Z=e=>{let{input:t,setInput:r,placeholder:l,readOnly:n,maxLength:s,type:o}=e,{boxSize:i,textAlign:c,inputType:u}=(e=>{switch(e){case"textBox1":default:return{boxSize:"w-133",textAlign:"",inputType:"text"};case"textBox2":return{boxSize:"w-235",textAlign:"",inputType:"text"};case"textBox3":return{boxSize:"w-76",textAlign:"placeholder:text-center text-center",inputType:"number"};case"textBox4":return{boxSize:"w-66",textAlign:"placeholder:text-center",inputType:"text"};case"textBox5":return{boxSize:"w-114",textAlign:"text-right",inputType:"text"};case"textBox6":return{boxSize:"w-145",textAlign:"text-right",inputType:"text"};case"textBox7":return{boxSize:"w-54",textAlign:"placeholder:text-center text-center",inputType:"number"};case"textBox8":return{boxSize:"w-111",textAlign:"",inputType:"text"}}})(o);return(0,a.jsx)("input",{className:"".concat(t?"border-gray-grayscale50":"border-gray-grayscale30"," H4-caption border-[0.5px] outline-none px-8 ").concat(i," ").concat(c," ").concat(n&&"cursor-pointer"," rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30"),placeholder:l,type:u,value:t,readOnly:n,maxLength:s,onChange:e=>{s&&(e.target.value=e.target.value.slice(0,s)),r(e.target.value)}})}},42825:function(e,t,r){"use strict";var a=r(57437),l=r(20703),n=r(22992),s=r(9088),o=r(26066);t.Z=e=>{let{variant:t,label:r,onConfirm:i}=e,{bgHeader:c}=(e=>{switch(e){case"blue":default:return{bgHeader:"bg-blue-blue30"};case"red":return{bgHeader:"bg-red-red20"};case"green":return{bgHeader:"bg-green-green20"}}})(t);return(0,a.jsxs)("div",{className:"w-456 h-194 flex flex-col items-center rounded-8 shadow-xl bg-white pb-15",children:[(0,a.jsx)(o.Z,{bgColor:c,onCancel:i}),(0,a.jsx)(l.default,{src:n.Z,className:"mt-19 mb-16",width:22,height:19,alt:"PromptWarning"}),(0,a.jsx)("h1",{className:"alert-cap text-gray-grayscale50 text-center",children:r.split("\n").map((e,t)=>(0,a.jsx)("p",{className:"leading-25",children:e},t))}),(0,a.jsx)("div",{className:"ml-auto mt-auto",children:(0,a.jsx)(s.Z,{label:"확인",onClick:i,hoverColor:t})})]})}},40801:function(e,t,r){"use strict";r.d(t,{Ck:function(){return a},XN:function(){return n},jF:function(){return s},nc:function(){return l}});let a={title:{maxLength:50},description:{maxLength:2e3},fileName:{maxLength:12},file:{maxCount:5}},l={password:{maxLength:20,minLength:6,defaultLabel:"영문 대문자와 소문자, 숫자, 특수문자 중 2가지 이상을 조합하여 6~20자로 입력해주세요.",messages:{invalid:"비밀번호가 기준에 맞지 않습니다.",mismatch:"비밀번호가 서로 일치하지 않습니다."}},name:{defaultLabel:"*관리자명은 공지사항과 FAQ 작성 시 표시됩니다."}},n={title:{maxLength:30},description:{maxLength:200}},s={name:{maxLength:10},memo:{maxLength:200}}},91355:function(e,t,r){"use strict";r.d(t,{ZZ:function(){return l},jd:function(){return n},oh:function(){return s}});var a=r(32153);let l=(0,a.cn)({key:"navState",default:!1}),n=(0,a.cn)({key:"editState",default:!1}),s=(0,a.cn)({key:"targetRouteState",default:""})},43721:function(e,t,r){"use strict";r.d(t,{S:function(){return o}});var a=r(46426),l=r(32153);let n=window.sessionStorage,{persistAtom:s}=(0,a.J)({key:"settingIdState",storage:n}),o=(0,l.cn)({key:"settingIdState",default:0,effects_UNSTABLE:[s]})}},function(e){e.O(0,[691,703,4898,1252,5243,2971,8069,1744],function(){return e(e.s=55100)}),_N_E=e.O()}]);