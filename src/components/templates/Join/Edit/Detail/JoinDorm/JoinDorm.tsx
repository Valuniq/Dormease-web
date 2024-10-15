// import { useGetJoinDormitories } from '@/apis/join';
// import BtnExtraLarge from '@/components/atoms/AllBtn/BtnExtraLarge/BtnExtraLarge';
// import { nowJoinApplicationState, dormitoryRoomTypeState, disabledFieldsState } from '@/recoil/join';
// import {
//   joinDormitoriesResponseInformation,
//   nowJoinResponseDormitorySettingTermResList,
//   nowJoinResponseTermResListDormitoryTermResList,
// } from '@/types/join';
// import React, { useEffect } from 'react';
// import { useRecoilState } from 'recoil';

// interface GroupedDormitories {
//   male: joinDormitoriesResponseInformation | null;
//   female: joinDormitoriesResponseInformation | null;
//   dormitoryName: string;
//   roomSize: number;
// }

// const JoinDorm = () => {
//   const { data: dormitories } = useGetJoinDormitories();
//   const [dormitoryRoomTypes, setDormitoryRoomTypes] = useRecoilState(dormitoryRoomTypeState);
//   const [applicationData, setApplicationData] = useRecoilState(nowJoinApplicationState);
//   const [disabledFields, setDisabledFields] = useRecoilState(disabledFieldsState);

//   useEffect(() => {
//     if (dormitories && applicationData.dormitorySettingTermResList && dormitoryRoomTypes.length === 0) {
//       // dormitoryRoomTypes가 비어있을 때만 상태 업데이트
//       setDormitoryRoomTypes(dormitories);

//       // 서버에서 제공된 기숙사 데이터를 기준으로 acceptLimit 설정
//       const initialRoomTypeResList = dormitories.map((dorm) => {
//         const existingRoom = applicationData.dormitorySettingTermResList.find(
//           (room) => room.dormitoryRoomTypeId === dorm.dormitoryRoomTypeId,
//         );

//         return {
//           dormitoryRoomTypeId: dorm.dormitoryRoomTypeId,
//           dormitoryName: dorm.dormitoryName,
//           roomSize: dorm.roomSize,
//           gender: dorm.gender === 'EMPTY' ? 'EMPTY' : dorm.gender,
//           // 서버에서 응답을 받았으면 해당 acceptLimit 사용, 없으면 0
//           acceptLimit: existingRoom?.acceptLimit ?? 0,
//         };
//       });

//       setApplicationData((prev) => ({
//         ...prev,
//         dormitorySettingTermResList: initialRoomTypeResList as nowJoinResponseDormitorySettingTermResList[],
//       }));
//     }
//     console.log('엥', dormitories);
//   }, [
//     dormitories,
//     dormitoryRoomTypes.length,
//     applicationData.dormitorySettingTermResList,
//     setDormitoryRoomTypes,
//     setApplicationData,
//   ]);

//   const groupDormitories = (dormitories: joinDormitoriesResponseInformation[]) => {
//     const grouped = dormitories.reduce<Record<number, GroupedDormitories>>((acc, dorm) => {
//       const key = dorm.dormitoryRoomTypeId;
//       if (!acc[key]) {
//         acc[key] = { dormitoryName: dorm.dormitoryName, roomSize: dorm.roomSize, male: null, female: null };
//       }
//       if (dorm.gender === 'MALE') {
//         acc[key].male = dorm;
//       } else if (dorm.gender === 'FEMALE') {
//         acc[key].female = dorm;
//       }
//       return acc;
//     }, {});
//     return Object.values(grouped);
//   };

//   // 수용 인원 변경 핸들러
//   // const handleAcceptLimitChange = (roomTypeId: number, newLimit: string) => {
//   //   const parsedLimit = newLimit === '' ? 0 : parseInt(newLimit, 10);

//   //   // dormitorySettingTermResList에서 수용 인원만 변경
//   //   const newRoomTypeReqList = applicationData.dormitorySettingTermResList.map((room) => {
//   //     if (room.dormitoryRoomTypeId === roomTypeId) {
//   //       return { ...room, acceptLimit: parsedLimit };
//   //     }
//   //     return room;
//   //   });

//   //   // 상태 업데이트
//   //   setApplicationData((prev) => ({
//   //     ...prev,
//   //     dormitorySettingTermResList: newRoomTypeReqList,
//   //     termResList: prev.termResList.map((term) => ({
//   //       ...term,
//   //       dormitoryTermResList: term.dormitoryTermResList.map((dormitoryTerm) => ({
//   //         ...dormitoryTerm,
//   //         price: dormitoryTerm.dormitoryRoomTypeId === roomTypeId && parsedLimit === 0 ? 0 : dormitoryTerm.price,
//   //       })),
//   //     })),
//   //   }));

//   //   // 비활성화 상태 업데이트
//   //   setDisabledFields((prev) => ({
//   //     ...prev,
//   //     [roomTypeId]: parsedLimit === 0, // 수용 인원이 0이면 비활성화
//   //   }));
//   // };

//   const handleAcceptLimitChange = (roomTypeId: number, newLimit: string) => {
//     const parsedLimit = newLimit === '' ? 0 : parseInt(newLimit, 10);

//     // dormitorySettingTermResList에서 수용 인원만 변경
//     const newRoomTypeReqList = applicationData.dormitorySettingTermResList.map((room) => {
//       if (room.dormitoryRoomTypeId === roomTypeId) {
//         return { ...room, acceptLimit: parsedLimit };
//       }
//       return room;
//     });

//     // 상태 업데이트
//     setApplicationData((prev) => ({
//       ...prev,
//       dormitorySettingTermResList: newRoomTypeReqList,
//       termResList: prev.termResList.map((term) => ({
//         ...term,
//         dormitoryTermResList: term.dormitoryTermResList.map((dormitoryTerm) => ({
//           ...dormitoryTerm,
//           price: dormitoryTerm.dormitoryRoomTypeId === roomTypeId && parsedLimit === 0 ? 0 : dormitoryTerm.price,
//         })),
//       })),
//     }));

//     // disabledFields 업데이트: 기존 필드 복사 후 수정
//     setDisabledFields((prev) => {
//       const updatedFields = { ...prev, [roomTypeId]: parsedLimit === 0 };
//       console.log('Updated Disabled Fields:', updatedFields); // 디버깅용 로그
//       return updatedFields;
//     });
//   };

//   const groupedDormitories = dormitories ? groupDormitories(dormitories) : [];

//   return (
//     <div className='w-full'>
//       <BtnExtraLarge label={'건물 추가로 돌아가기'} disabled={false} />
//       <div className='mt-150' />
//       {groupedDormitories.map((group, index) => (
//         <div key={index} className='w-full flex items-center justify-end mb-22'>
//           <div className='whitespace-nowrap'>
//             {group.dormitoryName} {group.roomSize}인실
//           </div>
//           <div className={`ml-40 flex flex-col items-end text-right`}>
//             {group.male && (
//               <div className={`flex h-34 items-center justify-between w-134 ${group.female ? 'mb-22' : ''}`}>
//                 <span>남</span>
//                 <input
//                   type='text'
//                   value={
//                     applicationData.dormitorySettingTermResList
//                       .find((room) => room.dormitoryRoomTypeId === group.male?.dormitoryRoomTypeId)
//                       ?.acceptLimit?.toString() || ''
//                   }
//                   onInput={(e) => {
//                     const inputValue = (e.target as HTMLInputElement).value;
//                     const sanitizedValue = inputValue.replace(/[^0-9]/g, ''); // 숫자만 허용
//                     handleAcceptLimitChange(group.male?.dormitoryRoomTypeId || 0, sanitizedValue);
//                   }}
//                   placeholder={'250'}
//                   className='H4-caption placeholder:text-gray-grayscale30 text-gray-grayscale50 outline-none w-76 h-34 p-2 bg-white border border-gray-grayscale30 rounded-8 text-center'
//                 />
//                 <span>명</span>
//               </div>
//             )}
//             {group.female && (
//               <div className='h-34 flex items-center justify-between w-134'>
//                 <span>여</span>
//                 <input
//                   type='text'
//                   value={
//                     applicationData.dormitorySettingTermResList
//                       .find((room) => room.dormitoryRoomTypeId === group.female?.dormitoryRoomTypeId)
//                       ?.acceptLimit?.toString() || ''
//                   }
//                   onInput={(e) => {
//                     const inputValue = (e.target as HTMLInputElement).value;
//                     const sanitizedValue = inputValue.replace(/[^0-9]/g, ''); // 숫자만 허용
//                     handleAcceptLimitChange(group.female?.dormitoryRoomTypeId || 0, sanitizedValue);
//                   }}
//                   placeholder={'250'}
//                   className='H4-caption placeholder:text-gray-grayscale30 text-gray-grayscale50 outline-none w-76 h-34 p-2 bg-white border border-gray-grayscale30 rounded-8 text-center'
//                 />
//                 <span>명</span>
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default JoinDorm;
'use client';
import { useGetJoinDormitories } from '@/apis/join';
import BtnExtraLarge from '@/components/atoms/AllBtn/BtnExtraLarge/BtnExtraLarge';
import { nowJoinApplicationState, dormitoryRoomTypeState, disabledFieldsState } from '@/recoil/join';
import { joinDormitoriesResponseInformation, nowJoinResponseDormitorySettingTermResList } from '@/types/join';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

interface GroupedDormitories {
  male: joinDormitoriesResponseInformation | null;
  female: joinDormitoriesResponseInformation | null;
  dormitoryName: string;
  roomSize: number;
}

const JoinDorm = () => {
  const { data: dormitories } = useGetJoinDormitories();
  const [dormitoryRoomTypes, setDormitoryRoomTypes] = useRecoilState(dormitoryRoomTypeState);
  const [applicationData, setApplicationData] = useRecoilState(nowJoinApplicationState);
  const [disabledFields, setDisabledFields] = useRecoilState(disabledFieldsState);

  useEffect(() => {
    if (dormitories && applicationData.dormitorySettingTermResList && dormitoryRoomTypes.length === 0) {
      setDormitoryRoomTypes(dormitories);

      const initialRoomTypeResList = dormitories.map((dorm) => {
        const existingRoom = applicationData.dormitorySettingTermResList.find(
          (room) => room.dormitoryRoomTypeId === dorm.dormitoryRoomTypeId,
        );

        return {
          dormitoryRoomTypeId: dorm.dormitoryRoomTypeId,
          dormitoryName: dorm.dormitoryName,
          roomSize: dorm.roomSize,
          gender: dorm.gender === 'EMPTY' ? 'EMPTY' : dorm.gender,
          acceptLimit: existingRoom?.acceptLimit ?? 0,
        };
      });

      setApplicationData((prev) => ({
        ...prev,
        dormitorySettingTermResList: initialRoomTypeResList as nowJoinResponseDormitorySettingTermResList[],
      }));
    }
  }, [
    dormitories,
    dormitoryRoomTypes.length,
    applicationData.dormitorySettingTermResList,
    setDormitoryRoomTypes,
    setApplicationData,
  ]);

  const groupDormitories = (dormitories: joinDormitoriesResponseInformation[]) => {
    const grouped = dormitories.reduce<Record<number, GroupedDormitories>>((acc, dorm) => {
      const key = dorm.dormitoryRoomTypeId;
      if (!acc[key]) {
        acc[key] = { dormitoryName: dorm.dormitoryName, roomSize: dorm.roomSize, male: null, female: null };
      }
      if (dorm.gender === 'MALE') {
        acc[key].male = dorm;
      } else if (dorm.gender === 'FEMALE') {
        acc[key].female = dorm;
      }
      return acc;
    }, {});
    return Object.values(grouped);
  };

  const handleAcceptLimitChange = (roomTypeId: number, newLimit: string) => {
    const parsedLimit = newLimit === '' ? 0 : parseInt(newLimit, 10);

    const newRoomTypeReqList = applicationData.dormitorySettingTermResList.map((room) => {
      if (room.dormitoryRoomTypeId === roomTypeId) {
        return { ...room, acceptLimit: parsedLimit };
      }
      return room;
    });

    setApplicationData((prev) => ({
      ...prev,
      dormitorySettingTermResList: newRoomTypeReqList,
      termResList: prev.termResList.map((term) => ({
        ...term,
        dormitoryTermResList: term.dormitoryTermResList.map((dormitoryTerm) => ({
          ...dormitoryTerm,
          price: dormitoryTerm.dormitoryRoomTypeId === roomTypeId && parsedLimit === 0 ? 0 : dormitoryTerm.price,
        })),
      })),
    }));

    setDisabledFields((prev) => ({
      ...prev,
      [roomTypeId]: parsedLimit === 0,
    }));
  };

  const groupedDormitories = dormitories ? groupDormitories(dormitories) : [];

  return (
    <div className='w-full'>
      <BtnExtraLarge label={'건물 추가로 돌아가기'} disabled={false} />
      <div className='mt-150' />
      {groupedDormitories.map((group, index) => (
        <div key={index} className='w-full flex items-center justify-end mb-22'>
          <div className='whitespace-nowrap'>
            {group.dormitoryName} {group.roomSize}인실
          </div>
          <div className={`ml-40 flex flex-col items-end text-right`}>
            {group.male && (
              <div className={`flex h-34 items-center justify-between w-134 ${group.female ? 'mb-22' : ''}`}>
                <span>남</span>
                <input
                  type='text'
                  value={
                    applicationData.dormitorySettingTermResList
                      .find((room) => room.dormitoryRoomTypeId === group.male?.dormitoryRoomTypeId)
                      ?.acceptLimit?.toString() || '' // 빈 값이면 placeholder 표시
                  }
                  onInput={(e) => {
                    const inputValue = (e.target as HTMLInputElement).value;
                    const sanitizedValue = inputValue.replace(/[^0-9]/g, '');
                    handleAcceptLimitChange(group.male?.dormitoryRoomTypeId || 0, sanitizedValue);
                  }}
                  placeholder={
                    applicationData.dormitorySettingTermResList.find(
                      (room) => room.dormitoryRoomTypeId === group.male?.dormitoryRoomTypeId,
                    )?.acceptLimit === 0
                      ? group.male?.dormitorySize?.toString()
                      : undefined
                  } // placeholder에 dormitorySize 표시
                  className='H4-caption placeholder:text-gray-grayscale30 text-gray-grayscale50 outline-none w-76 h-34 p-2 bg-white border border-gray-grayscale30 rounded-8 text-center'
                />
                <span>명</span>
              </div>
            )}
            {group.female && (
              <div className='h-34 flex items-center justify-between w-134'>
                <span>여</span>
                <input
                  type='text'
                  value={
                    applicationData.dormitorySettingTermResList
                      .find((room) => room.dormitoryRoomTypeId === group.female?.dormitoryRoomTypeId)
                      ?.acceptLimit?.toString() || '' // 빈 값이면 placeholder 표시
                  }
                  onInput={(e) => {
                    const inputValue = (e.target as HTMLInputElement).value;
                    const sanitizedValue = inputValue.replace(/[^0-9]/g, '');
                    handleAcceptLimitChange(group.female?.dormitoryRoomTypeId || 0, sanitizedValue);
                  }}
                  placeholder={
                    applicationData.dormitorySettingTermResList.find(
                      (room) => room.dormitoryRoomTypeId === group.female?.dormitoryRoomTypeId,
                    )?.acceptLimit === 0
                      ? group.female?.dormitorySize?.toString()
                      : undefined
                  } // placeholder에 dormitorySize 표시
                  className='H4-caption placeholder:text-gray-grayscale30 text-gray-grayscale50 outline-none w-76 h-34 p-2 bg-white border border-gray-grayscale30 rounded-8 text-center'
                />
                <span>명</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JoinDorm;
