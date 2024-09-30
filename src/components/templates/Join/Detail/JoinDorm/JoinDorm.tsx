'use client';

import { useGetJoinDormitories } from '@/apis/join';
import BtnExtraLarge from '@/components/atoms/AllBtn/BtnExtraLarge/BtnExtraLarge';
import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import { dormitoryRoomTypeState } from '@/recoil/join';
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

  useEffect(() => {
    if (dormitories) {
      setDormitoryRoomTypes(dormitories);
    }
  }, [dormitories]);

  const groupDormitories = (dormitories: joinDormitoriesResponseInformation[]) => {
    const grouped = dormitories.reduce<Record<string, GroupedDormitories>>((acc, dorm) => {
      const key = `${dorm.dormitoryName}-${dorm.roomSize}`; // 건물 이름과 방 크기를 기준으로 고유 키 생성
      if (!acc[key]) {
        acc[key] = { dormitoryName: dorm.dormitoryName, roomSize: dorm.roomSize, male: null, female: null }; // 그룹이 없으면 초기화
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

  const groupedDormitories = dormitories ? groupDormitories(dormitories) : [];

  return (
    <div className='w-full'>
      <BtnExtraLarge label={'건물 추가로 돌아가기'} disabled={false} />
      <div className='mt-150' />
      {groupedDormitories.map((group, index) => (
        <div key={index} className='w-full flex items-center justify-end bg-blue-blue15  mb-22'>
          <div className='whitespace-nowrap'>
            {group.dormitoryName} {group.roomSize}인실
          </div>
          <div className={`ml-40 flex flex-col items-end text-right `}>
            {/* 남성 정보 */}
            {group.male && (
              <div
                className={`flex h-34 bg-red-red10 items-center justify-between w-134 ${group.female ? 'mb-22' : ''} `}
              >
                <span>남</span>
                <TextBoxes
                  input={''}
                  setInput={function (id: string): void {
                    throw new Error('Function not implemented.');
                  }}
                  placeholder={'250'}
                  type={'textBox3'}
                />
                <span>명</span>
              </div>
            )}
            {/* 여성 정보 */}
            {group.female && (
              <div className='bg-orange-orange h-34  flex items-center justify-between w-134'>
                <span>여</span>
                <TextBoxes
                  input={''}
                  setInput={function (id: string): void {
                    throw new Error('Function not implemented.');
                  }}
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
