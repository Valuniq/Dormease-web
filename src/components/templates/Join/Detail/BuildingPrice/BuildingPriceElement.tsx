'use client';

import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import React from 'react';
import calandarIcon from '@public/images/calendarIcon.png';
import Image from 'next/image';
import AmountEnterList from './AmountEnterList';
import AddPeriodBtn from '@/components/atoms/AllBtn/AddPeriodBtn/AddPeriodBtn';
import { useRecoilState } from 'recoil';
import { dormitoryRoomTypeState, termReqIsActiveState, termReqListState } from '@/recoil/join'; // import 경로 수정 필요

type Props = {
  index: number;
  isActive: boolean; // 각 인덱스에 대한 활성화 상태
};

const BuildingPriceElement = ({ index, isActive }: Props) => {
  const [termReqIsActive, setTermReqIsActive] = useRecoilState(termReqIsActiveState); // isActive 상태 관리
  const [termReqList, setTermReqList] = useRecoilState(termReqListState); // 기간 정보 관리
  const [dormitoryRoomType] = useRecoilState(dormitoryRoomTypeState); // 기숙사 정보 관리

  // 활성화 상태 변경 핸들러
  const handleIsActive = () => {
    const newIsActiveState = [...termReqIsActive];
    newIsActiveState[index] = !newIsActiveState[index]; // 클릭 시 활성화/비활성화 전환
    setTermReqIsActive(newIsActiveState); // 상태 업데이트
  };

  // 기간 내 데이터 변경 핸들러
  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const newTermReqList = [...termReqList];
    newTermReqList[index] = { ...newTermReqList[index], [field]: e.target.value };
    setTermReqList(newTermReqList);
  };

  return (
    <div className='relative'>
      {/* AddPeriodBtn은 isActive 상태가 false일 때만 표시됨 */}
      {!isActive && (
        <div onClick={handleIsActive} className='absolute  top-110 left-50  z-joinSettingAddPeriodBtn'>
          <AddPeriodBtn /> {/* AddPeriodBtn 버튼 */}
        </div>
      )}

      <div
        className={`pt-17 w-184 min-h-371 h-full rounded-8 bg-gray-grayscale5 ${isActive ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}
      >
        <div className='flex flex-col items-center'>
          <div className='w-112 flex items-center justify-around mb-20'>
            이름
            <TextBoxes
              input={termReqList[index].termName}
              setInput={(value: string) => handleTermChange({ target: { value } } as any, 'termName')}
              placeholder={'기간'}
              type={'textBox4'}
            />
          </div>
          <div className='mb-8'>거주기간</div>
          <div className='flex items-center justify-between w-143'>
            <TextBoxes
              input={termReqList[index].startDate}
              setInput={(value: string) => handleTermChange({ target: { value } } as any, 'startDate')}
              placeholder={'입사 날짜'}
              type={'textBox5'}
            />
            <Image src={calandarIcon} alt='calendar' />
          </div>
          ~
          <div className='flex items-center justify-between w-143 mb-25'>
            <TextBoxes
              input={termReqList[index].endDate}
              setInput={(value: string) => handleTermChange({ target: { value } } as any, 'endDate')}
              placeholder={'퇴사 날짜'}
              type={'textBox5'}
            />
            <Image src={calandarIcon} alt='calendar' />
          </div>
          {/* AmountEnterList는 dormitoryRoomTypeState의 개수만큼 동적으로 생성 */}
          {dormitoryRoomType.map((room) => (
            <div key={room.dormitoryRoomTypeId} className='w-full h-34 mb-22'>
              <AmountEnterList
                roomTypeId={room.dormitoryRoomTypeId}
                onPriceChange={(newPrice) => {
                  const newTermReqList = [...termReqList];
                  const updatedDormitoryTermReqList = newTermReqList[index].dormitoryTermReqList.map((dorm) =>
                    dorm.dormitoryRoomTypeId === room.dormitoryRoomTypeId ? { ...dorm, price: newPrice } : dorm,
                  );
                  newTermReqList[index] = {
                    ...newTermReqList[index],
                    dormitoryTermReqList: updatedDormitoryTermReqList,
                  };
                  setTermReqList(newTermReqList);
                }} // 가격 변경 시 상태 업데이트
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildingPriceElement;
