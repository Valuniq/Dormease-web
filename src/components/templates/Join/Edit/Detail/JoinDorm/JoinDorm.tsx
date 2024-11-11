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

      // 비활성화 필드 설정
      const updatedDisabledFields: Record<number, boolean> = initialRoomTypeResList.reduce(
        (acc, room) => {
          acc[room.dormitoryRoomTypeId] = room.acceptLimit === 0;
          return acc;
        },
        {} as Record<number, boolean>,
      );

      setDisabledFields(updatedDisabledFields);

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
    setDisabledFields,
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
    const parsedLimit = newLimit === '' ? null : parseInt(newLimit, 10);

    const newRoomTypeReqList = applicationData.dormitorySettingTermResList.map((room) => {
      if (room.dormitoryRoomTypeId === roomTypeId) {
        return { ...room, acceptLimit: parsedLimit };
      }
      return room;
    });

    // 비활성화 필드 업데이트
    setDisabledFields((prev) => ({
      ...prev,
      [roomTypeId]: parsedLimit === 0 || parsedLimit === null,
    }));

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
                  placeholder={group.male?.dormitorySize?.toString()} // 항상 dormitorySize 표시
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
                  placeholder={group.female?.dormitorySize?.toString()} // 항상 dormitorySize 표시
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
