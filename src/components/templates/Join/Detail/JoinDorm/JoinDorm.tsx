'use client';

import { useGetJoinDormitories } from '@/apis/join';
import BtnExtraLarge from '@/components/atoms/AllBtn/BtnExtraLarge/BtnExtraLarge';
import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import { joinApplicationState, dormitoryRoomTypeState, disabledFieldsState } from '@/recoil/join';
import { joinDormitoriesResponseInformation } from '@/types/join';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

interface GroupedDormitories {
  male: joinDormitoriesResponseInformation | null;
  female: joinDormitoriesResponseInformation | null;
  dormitoryName: string;
  roomSize: number;
}

const JoinDorm = () => {
  const { data: dormitories, error } = useGetJoinDormitories();
  const [dormitoryRoomTypes, setDormitoryRoomTypes] = useRecoilState(dormitoryRoomTypeState);
  const [applicationData, setApplicationData] = useRecoilState(joinApplicationState);
  const [disabledFields, setDisabledFields] = useRecoilState(disabledFieldsState);

  useEffect(() => {
    if (dormitories) {
      setDormitoryRoomTypes(dormitories);
    }
  }, [dormitories]);

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

  // 수용 인원 변경 핸들러
  const handleAcceptLimitChange = (roomTypeId: number, gender: 'MALE' | 'FEMALE', newLimit: number) => {
    // 기존 상태값을 깊은 복사하여 불변성을 유지
    const newRoomTypeReqList = applicationData.dormitoryRoomTypeReqList.map((room) =>
      room.dormitoryRoomTypeId === roomTypeId ? { ...room, acceptLimit: newLimit } : { ...room },
    );

    // 만약 해당 roomTypeId에 대한 데이터가 없다면 새롭게 추가
    if (!newRoomTypeReqList.some((room) => room.dormitoryRoomTypeId === roomTypeId)) {
      newRoomTypeReqList.push({ dormitoryRoomTypeId: roomTypeId, acceptLimit: newLimit });
    }

    // 상태 업데이트: 새로운 배열을 만들어 상태를 업데이트
    setApplicationData({
      ...applicationData,
      dormitoryRoomTypeReqList: newRoomTypeReqList,
    });

    // 0이 입력되면 해당 roomTypeId의 관련된 필드 비활성화 처리
    setDisabledFields((prev) => ({
      ...prev,
      [roomTypeId]: newLimit === 0,
    }));
  };

  const groupedDormitories = dormitories ? groupDormitories(dormitories) : [];

  return (
    <div className='w-full'>
      <BtnExtraLarge label={'건물 추가로 돌아가기'} disabled={false} />
      <div className='mt-150' />
      {groupedDormitories.map((group, index) => (
        <div key={index} className='w-full flex items-center justify-end bg-blue-blue15 mb-22'>
          <div className='whitespace-nowrap'>
            {group.dormitoryName} {group.roomSize}인실
          </div>
          <div className={`ml-40 flex flex-col items-end text-right`}>
            {group.male && (
              <div className={`flex h-34 items-center justify-between w-134 ${group.female ? 'mb-22' : ''}`}>
                <span>남</span>
                <TextBoxes
                  input={
                    applicationData.dormitoryRoomTypeReqList
                      .find((room) => room.dormitoryRoomTypeId === group.male?.dormitoryRoomTypeId)
                      ?.acceptLimit.toString() || ''
                  }
                  setInput={(value) =>
                    handleAcceptLimitChange(group.male?.dormitoryRoomTypeId || 0, 'MALE', parseInt(value))
                  }
                  placeholder={'250'}
                  type={'textBox3'}
                />
                <span>명</span>
              </div>
            )}
            {group.female && (
              <div className='h-34 flex items-center justify-between w-134'>
                <span>여</span>
                <TextBoxes
                  input={
                    applicationData.dormitoryRoomTypeReqList
                      .find((room) => room.dormitoryRoomTypeId === group.female?.dormitoryRoomTypeId)
                      ?.acceptLimit.toString() || ''
                  }
                  setInput={(value) =>
                    handleAcceptLimitChange(group.female?.dormitoryRoomTypeId || 0, 'FEMALE', parseInt(value))
                  }
                  placeholder={'250'}
                  type={'textBox3'}
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
