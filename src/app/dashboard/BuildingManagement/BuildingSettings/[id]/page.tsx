// 'use client';

// import AddBuildingBtn from '@/components/atoms/AllBtn/AddBuildingBtn/AddBuildingBtn';
// import AddRoomBtn from '@/components/atoms/AllBtn/AddRoomBtn/AddRoomBtn';
// import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
// import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
// import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
// import BuildingSelectImageBtn from '@/components/atoms/AllBtn/BuildingSelectImageBtn/BuildingSelectImageBtn';
// import BuildingSetBtn from '@/components/atoms/AllBtn/BuildingSetBtn/BuildingSetBtn';
// import RoomBtn from '@/components/atoms/AllBtn/RoomBtn/RoomBtn';
// import BuildingNameInputText from '@/components/atoms/InputText/BuildingNameInputText/BuildingNameInputText';
// import BuildingSettingsList from '@/components/organisms/BuildingSettings/BuildingSettingsList';
// import { BuildingSettingsDetailResponseFloorAndRoomNumberRes } from '@/types/building';
// import React, { useState } from 'react';

// const BuildingManagement = () => {
//   const [name, setName] = useState('');
//   const [image, setImage] = useState('');

//   const [existingFloor, setExistingFloor] = useState<BuildingSettingsDetailResponseFloorAndRoomNumberRes[]>([
//     {
//       floor: 1,
//       startRoomNumber: 1,
//       endRoomNumber: 30,
//     },
//     {
//       floor: 2,
//       startRoomNumber: 1,
//       endRoomNumber: 30,
//     },
//   ]); //기존에 있던 층

//   const [newFloor, setNewFloor] = useState<BuildingSettingsDetailResponseFloorAndRoomNumberRes[]>([
//     {
//       floor: 3,
//       startRoomNumber: 1,
//       endRoomNumber: 30,
//     },
//   ]); //추가된 층

//   const [selectedFloor, setSelectedFloor] = useState({
//     floor: 2,
//     startRoomNumber: 1,
//     endRoomNumber: 30,
//   }); //선택된 층

//   const [selectFloor, setSelectFloor] = useState(0);
//   const [selectFilter, setSelectFilter] = useState(0);
//   const [completedFilter, setCompletedFilter] = useState<Number[]>([]);

//   const handleSetFloorInput = (value: string) => {
//     const newFloor = parseInt(value, 10);
//     if (isNaN(newFloor)) return;

//     setNewFloor((prev) => {
//       const existingItemIndex = prev.findIndex((item) => item.floor === newFloor);
//       if (existingItemIndex !== -1) {
//         const updatedList = prev.map((item, index) =>
//           index === existingItemIndex ? { ...item, floor: newFloor } : item,
//         );
//         return updatedList;
//       } else {
//         // 새 항목 추가
//         return [...prev, { floor: newFloor, startRoomNumber: 1, endRoomNumber: 30 }];
//       }
//     });
//   };

//   return (
//     <div className='flex flex-col relative w-[1331px]'>
//       <div className='flex justify-center w-full mb-30'>
//         <BuildingNameInputText placeholder='건물명' input={name} setInput={setName} />
//       </div>
//       <div className='flex'>
//         <div className='flex flex-col items-center'>
//           <div>{image ? <BuildingSelectImageBtn image={image} /> : <AddBuildingBtn />}</div>
//           <div className='mt-28 flex flex-col items-center'>
//             <h3 className='H3 text-gray-grayscale50 text-center'>호실 개수</h3>
//             <hr className='w-331 border-gray-grayscale50 mt-15 mb-8' />
//             <div className='flex flex-col mr-15 gap-12'>
//               {existingFloor.map((data, index) => {
//                 return (
//                   <RoomBtn
//                     key={index}
//                     selected={selectedFloor === data}
//                     floorInput={data.floor?.toString() || ''}
//                     setFloorInput={(value) => handleSetFloorInput(value)}
//                     endInput={data.endRoomNumber?.toString() || ''}
//                     setEndInput={function (id: string): void {
//                       throw new Error('Function not implemented.');
//                     }}
//                     isOne={index === 0}
//                     pressOkBtn={true}
//                     hovered={false}
//                   />
//                 );
//               })}
//               {newFloor.map((data, index) => {
//                 return (
//                   <RoomBtn
//                     key={index}
//                     selected={selectedFloor === data}
//                     floorInput={data.floor?.toString() || ''}
//                     setFloorInput={(value) => handleSetFloorInput(value)}
//                     endInput={data.endRoomNumber?.toString() || ''}
//                     setEndInput={function (id: string): void {
//                       throw new Error('Function not implemented.');
//                     }}
//                     isOne={false}
//                     pressOkBtn={false}
//                     hovered={false}
//                   />
//                 );
//               })}
//             </div>
//             <div className='h-13'></div>
//             <AddRoomBtn
//               onClick={() =>
//                 setExistingFloor([
//                   ...existingFloor,
//                   { floor: parseInt(''), startRoomNumber: 1, endRoomNumber: parseInt('') },
//                 ])
//               }
//             />
//           </div>
//         </div>
//         <div className='w-33'></div>
//         <div>
//           <div className='w-917 h-121 shadow2 rounded-7 bg-white items-center flex justify-between pl-40 pr-23 px-13 mb-30'>
//             <h1 className='H1 text-blue-blue30'>필터</h1>
//             <div>
//               <div className='flex gap-22'>
//                 <BuildingSetBtn
//                   label='남자/여자'
//                   detail={false}
//                   selected={selectFilter === 1}
//                   done={completedFilter.includes(1)}
//                 />
//                 <BuildingSetBtn
//                   label='호실 타입'
//                   detail={false}
//                   selected={selectFilter === 2}
//                   done={completedFilter.includes(2)}
//                 />
//                 <BuildingSetBtn
//                   label='열쇠 수령 여부'
//                   detail={false}
//                   selected={selectFilter === 3}
//                   done={completedFilter.includes(3)}
//                 />
//                 <BuildingSetBtn
//                   label='비활성화'
//                   detail={false}
//                   selected={selectFilter === 4}
//                   done={completedFilter.includes(4)}
//                 />
//               </div>
//               <div className='h-53 flex gap-15 justify-end items-end '>
//                 {selectFilter === 1 ? (
//                   <>
//                     <BuildingSetBtn label='남자' detail={true} selected={false} />
//                     <BuildingSetBtn label='여자' detail={true} selected={false} />
//                   </>
//                 ) : selectFilter === 2 ? (
//                   <>
//                     <BuildingSetBtn label='1인실' detail={true} selected={false} />
//                     <BuildingSetBtn label='2인실' detail={true} selected={false} />
//                     <BuildingSetBtn label='3인실' detail={true} selected={false} />
//                     <BuildingSetBtn label='4인실' detail={true} selected={false} />
//                     <BuildingSetBtn label='5인실' detail={true} selected={false} />
//                     <BuildingSetBtn label='6인실' detail={true} selected={false} />
//                   </>
//                 ) : selectFilter === 3 ? (
//                   <>
//                     <BuildingSetBtn label='수령' detail={true} selected={false} />
//                     <BuildingSetBtn label='미수령' detail={true} selected={false} />
//                   </>
//                 ) : selectFilter === 4 ? (
//                   <>
//                     <BtnLargeVariant label='활성화' disabled={false} variant='green' />
//                     <BtnLargeVariant label='비활성화' disabled={false} variant='red' />
//                   </>
//                 ) : (
//                   <></>
//                 )}
//               </div>
//             </div>
//           </div>
//           {/* <BuildingSettingsList
//             listClick={listClick}
//             onListClick={onListClick}
//             list={[]}
//             setIsChecked={setIsChecked}
//             isAllChecked={isAllChecked}
//             setIsAllChecked={setIsAllChecked}
//           /> */}
//         </div>
//       </div>
//       <div className='flex justify-between items-start mt-21'>
//         <div></div>
//         <BtnMidVariant label='등록' disabled={false} variant='blue' />
//         <BtnMiniVariant label='저장' disabled={false} variant='blue' selected={false} />
//       </div>
//     </div>
//   );
// };

// export default BuildingManagement;
import { Suspense } from 'react';
import ClientComponent from './ClientComponent'; // 클라이언트 컴포넌트 import

export async function generateStaticParams() {
  const ids = ['1', '2', '3']; // 예시 데이터, 실제 데이터 로드 로직 필요
  return ids.map((id) => ({ id }));
}

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientComponent id={params.id} />
    </Suspense>
  );
};

export default Page;
